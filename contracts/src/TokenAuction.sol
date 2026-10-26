pragma solidity ^0.8.24;

import "./AuctionToken.sol";
import "./BondingCurve.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable2Step.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";
import "./interfaces/IUniswapV3.sol";

contract TokenAuction is ReentrancyGuard, Ownable2Step, Pausable, IUniswapV3SwapCallback {
    using SafeERC20 for IERC20;

    enum AuctionState { PENDING, ACTIVE, COMPLETED, MIGRATED }

    struct AuctionConfig {
        AuctionToken token;           // The token being auctioned
        IERC20 paymentToken;          // e.g., USDC
        uint256 basePrice;            // Price of the first whole token: payment units × 1e18
        uint256 slope;                // Price rise per whole token sold: payment units × 1e18
        uint256 maxRaise;             // Graduation threshold: raise at which trading moves to Uniswap
        address creator;              // Token creator address
        uint256 protocolFeeBps;       // Protocol fee in basis points (e.g., 250 = 2.5%)
        uint256 liquidityBps;         // Share of the raise seeded into Uniswap at migration
        uint256 lpFeeShareBps;        // Protocol's share of the pool's trading fees
    }

    /// @notice Everything a creator chooses when launching an auction with
    ///         custom parameters. For a one-click launch see `launch`.
    struct AuctionParams {
        string name;
        string symbol;
        string metadataURI;           // Off-chain metadata, e.g. the token image
        uint256 maxSupply;            // Token supply cap, in token wei
        address paymentToken;         // e.g. USDC
        uint256 basePrice;            // Price of the first whole token: payment units × 1e18
        uint256 slope;                // Price rise per whole token sold: payment units × 1e18
        uint256 maxRaise;             // Graduation threshold: trading moves to Uniswap once raised
        uint256 liquidityBps;         // Share of the raise seeded into Uniswap at migration
    }

    /// @notice The protocol's standard launch: everything except the name,
    ///         symbol and metadata, which `launch` takes from the creator.
    struct LaunchPreset {
        address paymentToken;
        uint256 maxSupply;
        uint256 basePrice;
        uint256 slope;
        uint256 maxRaise;
        uint256 liquidityBps;
    }

    struct AuctionData {
        AuctionConfig config;
        AuctionState state;
        uint256 totalRaised;          // Total payment tokens collected
        uint256 totalSold;            // Total auction tokens sold
    }

    // State
    uint256 public auctionCount;
    mapping(uint256 => AuctionData) public auctions;
    mapping(uint256 => mapping(address => uint256)) public userPurchases;
    mapping(uint256 => bool) public proceedsWithdrawn;

    // Protocol
    address public protocolFeeRecipient;
    uint256 public defaultFeeBps;

    /// @notice Upper bound on the protocol fee, so the owner can never set a
    ///         fee that confiscates a meaningful share of a purchase.
    uint256 public constant MAX_FEE_BPS = 1000; // 10%

    /// @notice Smallest share of the raise a creator may commit to the
    ///         Uniswap pool, so no launch ships with a token too thinly
    ///         traded to be usable.
    uint256 public constant MIN_LIQUIDITY_BPS = 2000; // 20%

    /// @dev Parameter bounds that keep every curve computation inside
    ///      uint256: supply up to 10^18 whole tokens, prices up to 10^27
    ///      payment units per token, and raises up to 10^40 units. All far
    ///      beyond any real launch.
    uint256 internal constant MAX_SUPPLY_BOUND = 1e36;
    uint256 internal constant MAX_PRICE_PARAM = 1e45;
    uint256 internal constant MAX_RAISE_BOUND = 1e40;

    /// @notice Tokens this contract owes, per token: raises not yet withdrawn,
    ///         payouts not yet claimed and protocol fees not yet claimed.
    ///         Anything held above this is excess (e.g. tokens sent here
    ///         directly) and can be recovered with `sweep`.
    mapping(address => uint256) public custodied;

    /// @notice Protocol fees earned and not yet claimed, per token.
    ///         `claimProtocolFees` pays them to the current fee recipient.
    mapping(address => uint256) public protocolFees;

    /// @notice Payouts credited to an account and not yet claimed, by token
    ///         then account: a creator's share of pool fees, and any reserve
    ///         that migration couldn't place in the pool.
    /// @dev    Credited rather than sent so that no recipient can block a
    ///         trade or a migration. USDC can blacklist an address, and a
    ///         transfer to a blacklisted creator would otherwise revert the
    ///         migration and leave every holder's tokens locked.
    mapping(address => mapping(address => uint256)) public claimable;

    /// @notice Payment tokens new auctions may be priced in. A token the
    ///         creator controls could block transfers and strand buyers, so
    ///         only tokens the owner has approved can be used.
    mapping(address => bool) public paymentTokenAllowed;

    // Uniswap v3
    /// @notice Pool fee tier for migrated liquidity: 1%, the usual tier for
    ///         newly launched, volatile tokens.
    uint24 public constant POOL_FEE = 10000;
    /// @dev Full-range bounds for the 1% tier (tick spacing 200), i.e.
    ///      TickMath's MIN/MAX_TICK rounded inward to a multiple of 200.
    int24 internal constant MIN_USABLE_TICK = -887200;
    int24 internal constant MAX_USABLE_TICK = 887200;
    uint160 internal constant MIN_SQRT_RATIO = 4295128739;
    uint160 internal constant MAX_SQRT_RATIO = 1461446703485210103287273052203988822378723970342;

    INonfungiblePositionManager public immutable positionManager;

    /// @notice Upper bound on the protocol's share of trading fees, so a
    ///         creator always keeps at least half.
    uint256 public constant MAX_LP_FEE_SHARE_BPS = 5000;
    uint256 public defaultLpFeeShareBps;

    /// @notice The Uniswap position NFT holding each auction's liquidity. This
    ///         contract keeps it forever, so the liquidity is permanently locked.
    mapping(uint256 => uint256) public positionId;
    mapping(uint256 => address) public poolOf;

    /// @dev Set only for the duration of a price-correction swap, so the swap
    ///      callback can be authenticated.
    address private _activePool;

    /// @notice Parameters for one-click launches. Unset (zero payment token)
    ///         until the owner configures it.
    LaunchPreset public launchPreset;

    // Events — these are what the indexer will listen to
    event AuctionCreated(
        uint256 indexed auctionId,
        address indexed creator,
        address token,
        address paymentToken,
        uint256 basePrice,
        uint256 slope,
        uint256 maxRaise,
        uint256 liquidityBps,
        string metadataURI
    );

    event TokensPurchased(
        uint256 indexed auctionId,
        address indexed buyer,
        uint256 amount,
        uint256 cost,
        uint256 protocolFee,
        uint256 newTotalRaised,
        uint256 newTotalSold
    );

    event TokensSold(
        uint256 indexed auctionId,
        address indexed seller,
        uint256 amount,
        uint256 proceeds,
        uint256 protocolFee,
        uint256 newTotalRaised,
        uint256 newTotalSold
    );

    event AuctionCompleted(uint256 indexed auctionId, uint256 totalRaised, uint256 totalSold);
    event AuctionMigrated(
        uint256 indexed auctionId,
        address pool,
        uint256 positionId,
        uint256 tokenLiquidity,
        uint256 paymentLiquidity
    );
    event LpFeesCollected(
        uint256 indexed auctionId,
        uint256 creatorTokenFees,
        uint256 creatorPaymentFees,
        uint256 protocolTokenFees,
        uint256 protocolPaymentFees
    );
    event ProceedsWithdrawn(uint256 indexed auctionId, address indexed creator, uint256 amount);
    event ProtocolFeeRecipientUpdated(address indexed previous, address indexed current);
    event DefaultFeeBpsUpdated(uint256 previous, uint256 current);
    event Swept(address indexed token, address indexed to, uint256 amount);
    event DefaultLpFeeShareBpsUpdated(uint256 previous, uint256 current);
    event Claimed(address indexed token, address indexed account, uint256 amount);
    event ProtocolFeesClaimed(address indexed token, address indexed recipient, uint256 amount);
    event PaymentTokenAllowedUpdated(address indexed token, bool allowed);
    event LaunchPresetUpdated(
        address paymentToken, uint256 maxSupply, uint256 basePrice, uint256 slope, uint256 maxRaise, uint256 liquidityBps
    );

    constructor(address feeRecipient_, uint256 defaultFeeBps_, INonfungiblePositionManager positionManager_)
        Ownable(msg.sender)
    {
        require(feeRecipient_ != address(0), "Zero fee recipient");
        require(address(positionManager_) != address(0), "Zero position manager");
        positionManager = positionManager_;
        require(defaultFeeBps_ <= MAX_FEE_BPS, "Fee too high");
        protocolFeeRecipient = feeRecipient_;
        defaultFeeBps = defaultFeeBps_;
    }

    /// @notice Launch a token with custom curve parameters. Trading starts
    ///         immediately; the token graduates to Uniswap once `maxRaise` is
    ///         raised.
    function createAuction(AuctionParams calldata p) external whenNotPaused returns (uint256 auctionId) {
        return _createAuction(p);
    }

    /// @notice One-click launch: name, symbol and metadata from the creator,
    ///         everything else from the protocol's standard preset.
    function launch(string calldata name, string calldata symbol, string calldata metadataURI)
        external
        whenNotPaused
        returns (uint256 auctionId)
    {
        LaunchPreset memory s = launchPreset;
        require(s.paymentToken != address(0), "No launch preset");
        return _createAuction(
            AuctionParams({
                name: name,
                symbol: symbol,
                metadataURI: metadataURI,
                maxSupply: s.maxSupply,
                paymentToken: s.paymentToken,
                basePrice: s.basePrice,
                slope: s.slope,
                maxRaise: s.maxRaise,
                liquidityBps: s.liquidityBps
            })
        );
    }

    function _createAuction(AuctionParams memory p) internal returns (uint256 auctionId) {
        require(paymentTokenAllowed[p.paymentToken], "Payment token not allowed");
        _validateCurve(p.maxSupply, p.basePrice, p.slope, p.maxRaise, p.liquidityBps);

        auctionId = auctionCount++;

        // Deploy token — auction contract owns it for minting
        AuctionToken token = new AuctionToken(p.name, p.symbol, p.maxSupply, address(this), p.metadataURI);

        // Written field by field: a single struct literal this wide exceeds
        // the EVM stack in the legacy code generator.
        AuctionData storage auction = auctions[auctionId];
        AuctionConfig storage config = auction.config;
        config.token = token;
        config.paymentToken = IERC20(p.paymentToken);
        config.basePrice = p.basePrice;
        config.slope = p.slope;
        config.maxRaise = p.maxRaise;
        config.creator = msg.sender;
        config.protocolFeeBps = defaultFeeBps;
        config.liquidityBps = p.liquidityBps;
        config.lpFeeShareBps = defaultLpFeeShareBps;
        auction.state = AuctionState.ACTIVE;

        emit AuctionCreated(
            auctionId, msg.sender, address(token), p.paymentToken,
            p.basePrice, p.slope, p.maxRaise, p.liquidityBps, p.metadataURI
        );
    }

    /// @dev Rejects curve parameters that could overflow mid-sale, and ensures
    ///      the token supply has room for both the sale and the Uniswap
    ///      liquidity minted at migration. The liquidity reserve is largest
    ///      when the auction sells out (raise / final price grows with every
    ///      sale), so checking the sold-out case covers every outcome.
    function _validateCurve(
        uint256 maxSupply,
        uint256 basePrice,
        uint256 slope,
        uint256 maxRaise,
        uint256 liquidityBps
    ) internal pure {
        require(basePrice > 0, "Zero base price");
        require(maxRaise > 0, "Zero max raise");
        require(
            liquidityBps >= MIN_LIQUIDITY_BPS && liquidityBps <= 10000,
            "Invalid liquidity share"
        );

        require(
            maxSupply <= MAX_SUPPLY_BOUND && basePrice <= MAX_PRICE_PARAM && slope <= MAX_PRICE_PARAM
                && maxRaise <= MAX_RAISE_BOUND,
            "Curve overflows"
        );

        uint256 soldOut = BondingCurve.maxBuyable(0, maxRaise, basePrice, slope, maxSupply);
        uint256 finalPrice = BondingCurve.spotPrice(soldOut, basePrice, slope);
        uint256 reserve = Math.mulDiv(
            (maxRaise * liquidityBps) / 10000, BondingCurve.SCALE, finalPrice, Math.Rounding.Ceil
        );
        require(soldOut + reserve <= maxSupply, "Supply too small for liquidity");
    }

    /// @notice Buy `amount` tokens (in token wei) from an auction that hasn't
    ///         graduated yet.
    /// @param maxCost Most the buyer will pay in total (cost + protocol fee), in
    ///        payment-token units. The price rises with every purchase, so a
    ///        quote can be stale by the time a transaction lands; this bound
    ///        makes the buy revert instead of filling at a worse price.
    /// @dev   A purchase that would overshoot `maxRaise` is filled with what the
    ///        remaining budget buys and closes the auction, so the buyer may
    ///        receive less than `amount`; `TokensPurchased` reports the actual
    ///        amount.
    function buyTokens(uint256 auctionId, uint256 amount, uint256 maxCost) external nonReentrant whenNotPaused {
        AuctionData storage auction = auctions[auctionId];
        require(auction.state == AuctionState.ACTIVE, "Auction not active");
        require(amount > 0, "Zero amount");

        uint256 cost;
        bool filledUp;
        (amount, cost, filledUp) = _fill(auction, amount);
        uint256 protocolFee = (cost * auction.config.protocolFeeBps) / 10000;
        require(cost + protocolFee <= maxCost, "Slippage exceeded");

        // Effects before interactions.
        auction.totalRaised += cost;
        auction.totalSold += amount;
        userPurchases[auctionId][msg.sender] += amount;
        custodied[address(auction.config.paymentToken)] += cost + protocolFee;
        protocolFees[address(auction.config.paymentToken)] += protocolFee;
        if (filledUp) {
            auction.state = AuctionState.COMPLETED;
        }

        _collectPayment(auction.config.paymentToken, cost + protocolFee);
        auction.config.token.mint(msg.sender, amount);

        emit TokensPurchased(
            auctionId, msg.sender, amount, cost, protocolFee,
            auction.totalRaised, auction.totalSold
        );
        if (filledUp) {
            emit AuctionCompleted(auctionId, auction.totalRaised, auction.totalSold);
        }
    }

    /// @dev Price a purchase. If `requested` would overshoot the cap, shrink it
    ///      to what the remaining budget buys and report that it fills the
    ///      auction. Without this the last buyer would have to hit the cap
    ///      exactly, and almost no auction could complete by filling up.
    function _fill(AuctionData storage auction, uint256 requested)
        internal
        view
        returns (uint256 amount, uint256 cost, bool filledUp)
    {
        amount = requested;
        cost = BondingCurve.calculateBuyCost(
            auction.totalSold, amount, auction.config.basePrice, auction.config.slope
        );
        uint256 remaining = auction.config.maxRaise - auction.totalRaised;
        if (cost < remaining) return (amount, cost, false);

        if (cost > remaining) {
            amount = BondingCurve.maxBuyable(
                auction.totalSold, remaining, auction.config.basePrice, auction.config.slope, requested
            );
            // What's left can't buy even one token wei (the smallest purchase
            // costs two payment units). Graduate rather than let a buyer who
            // stopped the raise just short of the threshold stall it forever.
            if (amount == 0) return (0, 0, true);
            cost = BondingCurve.calculateBuyCost(
                auction.totalSold, amount, auction.config.basePrice, auction.config.slope
            );
        }
        return (amount, cost, true);
    }

    /// @dev Pull a purchase's cost and fee into custody. Measuring the balance
    ///      change rejects fee-on-transfer and rebasing tokens, which would
    ///      leave `custodied` larger than what the contract actually holds and
    ///      make the last withdrawal fail.
    function _collectPayment(IERC20 paymentToken, uint256 total) internal {
        uint256 balanceBefore = paymentToken.balanceOf(address(this));
        paymentToken.safeTransferFrom(msg.sender, address(this), total);
        require(
            paymentToken.balanceOf(address(this)) - balanceBefore == total,
            "Unsupported payment token"
        );
    }

    /// @notice Sell `amount` tokens (in token wei) back to the curve of an
    ///         auction that hasn't graduated yet. The tokens are burned and the
    ///         seller is paid from the raise, at the curve price minus the
    ///         protocol fee.
    /// @param minProceeds Least the seller will accept after the fee. Like
    ///        `maxCost` on purchases, it protects against the price moving
    ///        between quote and transaction.
    function sellTokens(uint256 auctionId, uint256 amount, uint256 minProceeds) external nonReentrant {
        AuctionData storage auction = auctions[auctionId];
        require(auction.state == AuctionState.ACTIVE, "Auction not active");
        require(amount > 0, "Zero amount");
        // Tokens can't be transferred before migration, so what a holder bought
        // is exactly what they can sell.
        require(userPurchases[auctionId][msg.sender] >= amount, "Exceeds balance");

        uint256 proceeds = BondingCurve.calculateSellProceeds(
            auction.totalSold, amount, auction.config.basePrice, auction.config.slope
        );
        uint256 protocolFee = (proceeds * auction.config.protocolFeeBps) / 10000;
        require(proceeds - protocolFee >= minProceeds, "Slippage exceeded");

        // Effects before interactions.
        IERC20 payment = auction.config.paymentToken;
        auction.totalRaised -= proceeds;
        auction.totalSold -= amount;
        userPurchases[auctionId][msg.sender] -= amount;
        custodied[address(payment)] -= proceeds - protocolFee;
        protocolFees[address(payment)] += protocolFee;

        auction.config.token.burnFrom(msg.sender, amount);
        payment.safeTransfer(msg.sender, proceeds - protocolFee);

        emit TokensSold(
            auctionId, msg.sender, amount, proceeds, protocolFee,
            auction.totalRaised, auction.totalSold
        );
    }

    /// @notice Transfer an auction's raised payment tokens to its creator.
    /// @dev Callable once, by the creator, once the auction has completed,
    ///      before or after migration. Pays the part of the raise not reserved
    ///      for liquidity. Protocol fees are routed to the fee recipient at buy
    ///      time, so the contract custodies exactly `totalRaised` per auction.
    function withdrawProceeds(uint256 auctionId) external nonReentrant {
        AuctionData storage auction = auctions[auctionId];
        require(msg.sender == auction.config.creator, "Not creator");
        require(
            auction.state == AuctionState.COMPLETED || auction.state == AuctionState.MIGRATED,
            "Auction not completed"
        );
        require(!proceedsWithdrawn[auctionId], "Already withdrawn");

        // The rest of the raise is reserved for the Uniswap pool.
        uint256 amount = auction.totalRaised - _liquidityShare(auction);
        require(amount > 0, "Nothing to withdraw");

        // Effects before interaction.
        proceedsWithdrawn[auctionId] = true;
        custodied[address(auction.config.paymentToken)] -= amount;
        auction.config.paymentToken.safeTransfer(auction.config.creator, amount);

        emit ProceedsWithdrawn(auctionId, auction.config.creator, amount);
    }

    // --- Migration ----------------------------------------------------------

    /// @dev Working state for a migration, bundled to keep the stack shallow.
    struct Migration {
        AuctionToken token;
        IERC20 payment;
        bool tokenIsToken0;
        uint160 targetSqrtPrice;
        uint256 paymentFloor;   // payment tokens held for everything except this migration
        address pool;
    }

    /// @notice Move a completed auction's liquidity into Uniswap v3 and unlock
    ///         its token. Anyone may call it, so a creator can never hold the
    ///         token hostage by not migrating.
    /// @dev    Opens (or corrects) the pool at the auction's final price, adds
    ///         full-range liquidity from the reserved share of the raise plus
    ///         newly minted tokens, and keeps the position NFT forever. Never
    ///         leaves tokens permanently locked: if there is nothing to pair, or
    ///         Uniswap rejects the position, transfers are unlocked anyway and
    ///         the reserved funds are credited to the creator to `claim`.
    function migrate(uint256 auctionId) external nonReentrant {
        AuctionData storage auction = auctions[auctionId];
        require(auction.state == AuctionState.COMPLETED, "Auction not completed");

        uint256 paymentBudget = _liquidityShare(auction);
        uint256 price = BondingCurve.spotPrice(auction.totalSold, auction.config.basePrice, auction.config.slope);
        // Tokens worth the payment budget at the final price, so both sides of
        // the pool are worth the same. `price` is WAD, hence SCALE.
        uint256 tokenBudget = Math.mulDiv(paymentBudget, BondingCurve.SCALE, price);

        Migration memory m;
        m.token = auction.config.token;
        m.payment = auction.config.paymentToken;
        m.tokenIsToken0 = address(m.token) < address(m.payment);

        // Effects before interactions.
        auction.state = AuctionState.MIGRATED;
        custodied[address(m.payment)] -= paymentBudget;

        m.paymentFloor = m.payment.balanceOf(address(this)) - paymentBudget;

        m.token.enableTransfers();

        if (paymentBudget > 0 && tokenBudget > 0) {
            m.token.mint(address(this), tokenBudget);
            m.targetSqrtPrice = _sqrtPriceX96(price, m.tokenIsToken0);
            (address t0, address t1) = _sorted(m);
            m.pool = positionManager.createAndInitializePoolIfNecessary(t0, t1, POOL_FEE, m.targetSqrtPrice);
            _correctPoolPrice(m, tokenBudget, paymentBudget);
            _addLiquidity(auctionId, m);
        }

        // Anything Uniswap didn't take: burn tokens, credit funds to the creator.
        uint256 tokensLeft = m.token.balanceOf(address(this));
        if (tokensLeft > 0) m.token.burn(tokensLeft);
        uint256 paymentLeft = m.payment.balanceOf(address(this)) - m.paymentFloor;
        if (paymentLeft > 0) {
            claimable[address(m.payment)][auction.config.creator] += paymentLeft;
            custodied[address(m.payment)] += paymentLeft;
        }

        // Nothing else will ever be minted or burned: fix the supply for good.
        m.token.renounceOwnership();
    }

    /// @dev Mint the full-range position. A failure here must not strand the
    ///      token, so it is caught and migration finishes without a pool.
    function _addLiquidity(uint256 auctionId, Migration memory m) internal {
        uint256 tokenAvail = m.token.balanceOf(address(this));
        uint256 paymentAvail = m.payment.balanceOf(address(this)) - m.paymentFloor;
        (address t0, address t1) = _sorted(m);

        IERC20(address(m.token)).forceApprove(address(positionManager), tokenAvail);
        m.payment.forceApprove(address(positionManager), paymentAvail);

        // Minimums can be zero: _correctPoolPrice set the pool's price in this
        // same transaction, so there is no window in which it can be moved.
        try positionManager.mint(
            INonfungiblePositionManager.MintParams({
                token0: t0,
                token1: t1,
                fee: POOL_FEE,
                tickLower: MIN_USABLE_TICK,
                tickUpper: MAX_USABLE_TICK,
                amount0Desired: m.tokenIsToken0 ? tokenAvail : paymentAvail,
                amount1Desired: m.tokenIsToken0 ? paymentAvail : tokenAvail,
                amount0Min: 0,
                amount1Min: 0,
                recipient: address(this),
                deadline: block.timestamp
            })
        ) returns (uint256 tokenId, uint128, uint256 used0, uint256 used1) {
            positionId[auctionId] = tokenId;
            poolOf[auctionId] = m.pool;
            emit AuctionMigrated(
                auctionId, m.pool, tokenId,
                m.tokenIsToken0 ? used0 : used1,
                m.tokenIsToken0 ? used1 : used0
            );
        } catch {
            emit AuctionMigrated(auctionId, address(0), 0, 0, 0);
        }

        IERC20(address(m.token)).forceApprove(address(positionManager), 0);
        m.payment.forceApprove(address(positionManager), 0);
    }

    /// @dev Anyone can initialize a Uniswap pool for a known token address, at
    ///      any price, so the pool may already exist at the wrong price. Move
    ///      it to the target before adding liquidity.
    ///
    ///      Raising the token's price (buying it) is always free: tokens can't
    ///      leave a holder before migration, so the pool cannot contain any,
    ///      and a swap through empty ranges moves the price at no cost. That is
    ///      the harmful case, since a pool below the auction price would sell
    ///      the locked liquidity cheaply, so it is corrected exactly.
    ///
    ///      Lowering it means selling into someone's USDC-only position above
    ///      the target, at prices above the target, which only costs them. We
    ///      sell at most half the reserve, so the position can always still be
    ///      minted; if the price remains high, the pool simply opens above the
    ///      auction price.
    function _correctPoolPrice(Migration memory m, uint256 tokenBudget, uint256 paymentBudget) internal {
        IUniswapV3Pool pool = IUniswapV3Pool(m.pool);
        (uint160 current,,,,,,) = pool.slot0();
        if (current == m.targetSqrtPrice) return;

        bool zeroForOne = current > m.targetSqrtPrice; // paying token0 lowers the price
        bool sellsToken = zeroForOne == m.tokenIsToken0;
        uint256 input = sellsToken ? tokenBudget / 2 : paymentBudget;
        if (input == 0) return;

        (address t0, address t1) = _sorted(m);
        _activePool = address(pool);
        // `input` is at most the payment or token budget, both capped far below
        // 2^255 by _validateCurve's bounds, so the cast can't wrap negative.
        pool.swap(address(this), zeroForOne, int256(input), m.targetSqrtPrice, abi.encode(t0, t1));
        _activePool = address(0);

        if (!sellsToken) {
            (current,,,,,,) = pool.slot0();
            require(current == m.targetSqrtPrice, "Pool price not corrected");
        }
    }

    /// @inheritdoc IUniswapV3SwapCallback
    function uniswapV3SwapCallback(int256 amount0Delta, int256 amount1Delta, bytes calldata data) external override {
        require(_activePool != address(0) && msg.sender == _activePool, "Unauthorized callback");
        (address t0, address t1) = abi.decode(data, (address, address));
        if (amount0Delta > 0) IERC20(t0).safeTransfer(msg.sender, uint256(amount0Delta));
        if (amount1Delta > 0) IERC20(t1).safeTransfer(msg.sender, uint256(amount1Delta));
    }

    /// @notice Collect the migrated pool's trading fees: the protocol's share
    ///         is added to `protocolFees` and the rest is credited to the
    ///         creator to `claim`. Anyone may trigger it.
    function collectFees(uint256 auctionId) external nonReentrant returns (uint256 tokenFees, uint256 paymentFees) {
        AuctionData storage auction = auctions[auctionId];
        require(auction.state == AuctionState.MIGRATED && positionId[auctionId] != 0, "No position");

        (uint256 a0, uint256 a1) = positionManager.collect(
            INonfungiblePositionManager.CollectParams({
                tokenId: positionId[auctionId],
                recipient: address(this),
                amount0Max: type(uint128).max,
                amount1Max: type(uint128).max
            })
        );
        bool tokenIsToken0 = address(auction.config.token) < address(auction.config.paymentToken);
        (tokenFees, paymentFees) = tokenIsToken0 ? (a0, a1) : (a1, a0);

        uint256 protocolToken = (tokenFees * auction.config.lpFeeShareBps) / 10000;
        uint256 protocolPayment = (paymentFees * auction.config.lpFeeShareBps) / 10000;
        _creditFees(address(auction.config.token), auction.config.creator, protocolToken, tokenFees);
        _creditFees(address(auction.config.paymentToken), auction.config.creator, protocolPayment, paymentFees);

        emit LpFeesCollected(
            auctionId, tokenFees - protocolToken, paymentFees - protocolPayment, protocolToken, protocolPayment
        );
    }

    function _creditFees(address token, address creator, uint256 protocolShare, uint256 total) internal {
        protocolFees[token] += protocolShare;
        claimable[token][creator] += total - protocolShare;
        custodied[token] += total;
    }

    // --- Claims -------------------------------------------------------------

    /// @notice Withdraw everything credited to you in `token`.
    function claim(IERC20 token) external nonReentrant returns (uint256 amount) {
        amount = claimable[address(token)][msg.sender];
        require(amount > 0, "Nothing to claim");
        claimable[address(token)][msg.sender] = 0;
        custodied[address(token)] -= amount;
        token.safeTransfer(msg.sender, amount);
        emit Claimed(address(token), msg.sender, amount);
    }

    /// @notice Send the protocol's unclaimed fees in `token` to the fee
    ///         recipient. Anyone may trigger it.
    function claimProtocolFees(IERC20 token) external nonReentrant returns (uint256 amount) {
        amount = protocolFees[address(token)];
        require(amount > 0, "Nothing to claim");
        protocolFees[address(token)] = 0;
        custodied[address(token)] -= amount;
        token.safeTransfer(protocolFeeRecipient, amount);
        emit ProtocolFeesClaimed(address(token), protocolFeeRecipient, amount);
    }

    function _liquidityShare(AuctionData storage auction) internal view returns (uint256) {
        return (auction.totalRaised * auction.config.liquidityBps) / 10000;
    }

    function _sorted(Migration memory m) internal pure returns (address token0, address token1) {
        return m.tokenIsToken0
            ? (address(m.token), address(m.payment))
            : (address(m.payment), address(m.token));
    }

    /// @dev Uniswap prices are token1 per token0 in raw units, as
    ///      sqrt(price) * 2^96. `price` is payment units per whole token, WAD,
    ///      so payment wei per token wei is price / 1e36. Working from the WAD
    ///      price opens the pool at the curve's exact final price: rounding to
    ///      whole payment units could open it below, the direction that sells
    ///      the locked liquidity cheaply.
    ///
    ///      The ratio times 2^192 only fits in 256 bits while the ratio is
    ///      below 2^64. A cheap token paired as token1 (USDC's low address
    ///      sorts first) easily passes that: at 0.00000003 USDC per token the
    ///      ratio is ~3.5e19. Larger ratios take the root of ratio × 2^64 and
    ///      shift it up by 2^64, which still keeps at least 64 bits.
    function _sqrtPriceX96(uint256 price, bool tokenIsToken0) internal pure returns (uint160) {
        (uint256 num, uint256 den) = tokenIsToken0 ? (price, BondingCurve.SCALE) : (BondingCurve.SCALE, price);
        uint256 sqrtPrice = num / den < (1 << 64)
            ? Math.sqrt(Math.mulDiv(num, 1 << 192, den))
            : Math.sqrt(Math.mulDiv(num, 1 << 64, den)) << 64;
        require(sqrtPrice > MIN_SQRT_RATIO && sqrtPrice < MAX_SQRT_RATIO, "Price outside Uniswap range");
        return uint160(sqrtPrice);
    }

    /// @notice Change where protocol fees are sent, including fees earned but
    ///         not yet claimed.
    function setProtocolFeeRecipient(address recipient) external onlyOwner {
        require(recipient != address(0), "Zero fee recipient");
        emit ProtocolFeeRecipientUpdated(protocolFeeRecipient, recipient);
        protocolFeeRecipient = recipient;
    }

    /// @notice Change the fee for auctions created from now on. Existing
    ///         auctions keep the fee they were created with, so a creator's
    ///         terms can never change mid-sale.
    function setDefaultFeeBps(uint256 feeBps) external onlyOwner {
        require(feeBps <= MAX_FEE_BPS, "Fee too high");
        emit DefaultFeeBpsUpdated(defaultFeeBps, feeBps);
        defaultFeeBps = feeBps;
    }

    /// @notice Change the protocol's share of trading fees for auctions created
    ///         from now on. Existing auctions keep the share they were created
    ///         with.
    function setDefaultLpFeeShareBps(uint256 shareBps) external onlyOwner {
        require(shareBps <= MAX_LP_FEE_SHARE_BPS, "Share too high");
        emit DefaultLpFeeShareBpsUpdated(defaultLpFeeShareBps, shareBps);
        defaultLpFeeShareBps = shareBps;
    }

    /// @notice Set the parameters `launch` uses. Applies to launches from now
    ///         on; existing auctions are unaffected.
    function setLaunchPreset(LaunchPreset calldata preset) external onlyOwner {
        require(preset.paymentToken != address(0), "Zero payment token");
        require(paymentTokenAllowed[preset.paymentToken], "Payment token not allowed");
        _validateCurve(preset.maxSupply, preset.basePrice, preset.slope, preset.maxRaise, preset.liquidityBps);
        launchPreset = preset;
        emit LaunchPresetUpdated(
            preset.paymentToken, preset.maxSupply, preset.basePrice, preset.slope, preset.maxRaise, preset.liquidityBps
        );
    }

    /// @notice Allow or disallow a payment token for new auctions. Auctions
    ///         already priced in a token carry on if it is disallowed.
    function setPaymentTokenAllowed(address token, bool allowed) external onlyOwner {
        require(token != address(0), "Zero payment token");
        paymentTokenAllowed[token] = allowed;
        emit PaymentTokenAllowedUpdated(token, allowed);
    }

    /// @notice Recover tokens held above what is owed, such as tokens
    ///         transferred to this contract directly. Unwithdrawn raises,
    ///         unclaimed payouts and unclaimed fees can never be swept.
    function sweep(IERC20 token, address to) external nonReentrant onlyOwner {
        require(to != address(0), "Zero recipient");
        uint256 balance = token.balanceOf(address(this));
        uint256 owed = custodied[address(token)];
        require(balance > owed, "Nothing to sweep");

        uint256 excess = balance - owed;
        token.safeTransfer(to, excess);
        emit Swept(address(token), to, excess);
    }

    /// @notice Emergency stop for new money: blocks launches and curve buys.
    ///         Every way out keeps working while paused (selling back to the
    ///         curve, migration, withdrawals, fee collection and claims), so
    ///         pausing can never trap a holder's or creator's funds.
    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause();
    }

    // View functions
    /// @notice Price of the next whole token, in payment units × 1e18.
    function getSpotPrice(uint256 auctionId) external view returns (uint256) {
        AuctionData storage auction = auctions[auctionId];
        return BondingCurve.spotPrice(
            auction.totalSold,
            auction.config.basePrice,
            auction.config.slope
        );
    }

    function getBuyCost(uint256 auctionId, uint256 amount) external view returns (uint256 cost, uint256 fee) {
        AuctionData storage auction = auctions[auctionId];
        cost = BondingCurve.calculateBuyCost(
            auction.totalSold, amount,
            auction.config.basePrice, auction.config.slope
        );
        fee = (cost * auction.config.protocolFeeBps) / 10000;
    }
}
