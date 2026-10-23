pragma solidity ^0.8.24;

import "./AuctionToken.sol";
import "./BondingCurve.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";

contract TokenAuction is ReentrancyGuard, Ownable {
    using SafeERC20 for IERC20;

    enum AuctionState { PENDING, ACTIVE, COMPLETED, MIGRATED }

    struct AuctionConfig {
        AuctionToken token;           // The token being auctioned
        IERC20 paymentToken;          // e.g., USDC
        uint256 basePrice;            // Starting price in payment token units
        uint256 slope;                // Bonding curve slope
        uint256 maxRaise;             // Max payment tokens to collect
        uint256 startTime;
        uint256 endTime;
        address creator;              // Token creator address
        uint256 protocolFeeBps;       // Protocol fee in basis points (e.g., 250 = 2.5%)
        uint256 liquidityBps;         // Share of the raise seeded into Uniswap at migration
    }

    /// @notice Everything a creator chooses when launching an auction.
    struct AuctionParams {
        string name;
        string symbol;
        uint256 maxSupply;            // Token supply cap, in token wei
        address paymentToken;         // e.g. USDC
        uint256 basePrice;            // Price of the first whole token, in payment-token units
        uint256 slope;                // Price rise per whole token sold
        uint256 maxRaise;             // Sale closes once this much is raised
        uint256 startTime;
        uint256 endTime;
        uint256 liquidityBps;         // Share of the raise seeded into Uniswap at migration
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

    /// @notice Payment tokens this contract owes to auction creators, per token:
    ///         the sum of `totalRaised` across auctions not yet withdrawn.
    ///         Anything held above this is excess (e.g. tokens sent here
    ///         directly) and can be recovered with `sweep`.
    mapping(address => uint256) public custodied;

    // Events — these are what the indexer will listen to
    event AuctionCreated(
        uint256 indexed auctionId,
        address indexed creator,
        address token,
        address paymentToken,
        uint256 basePrice,
        uint256 slope,
        uint256 maxRaise,
        uint256 startTime,
        uint256 endTime,
        uint256 liquidityBps
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

    event AuctionCompleted(uint256 indexed auctionId, uint256 totalRaised, uint256 totalSold);
    event AuctionMigrated(uint256 indexed auctionId, address liquidityPool);
    event ProceedsWithdrawn(uint256 indexed auctionId, address indexed creator, uint256 amount);
    event ProtocolFeeRecipientUpdated(address indexed previous, address indexed current);
    event DefaultFeeBpsUpdated(uint256 previous, uint256 current);
    event Swept(address indexed token, address indexed to, uint256 amount);

    constructor(address feeRecipient_, uint256 defaultFeeBps_) Ownable(msg.sender) {
        require(feeRecipient_ != address(0), "Zero fee recipient");
        require(defaultFeeBps_ <= MAX_FEE_BPS, "Fee too high");
        protocolFeeRecipient = feeRecipient_;
        defaultFeeBps = defaultFeeBps_;
    }

    function createAuction(AuctionParams calldata p) external returns (uint256 auctionId) {
        require(p.startTime > block.timestamp, "Start must be in future");
        require(p.endTime > p.startTime, "End must be after start");
        _validateCurve(p.maxSupply, p.basePrice, p.slope, p.maxRaise, p.liquidityBps);

        auctionId = auctionCount++;

        // Deploy token — auction contract owns it for minting
        AuctionToken token = new AuctionToken(p.name, p.symbol, p.maxSupply, address(this));

        // Written field by field: a single struct literal this wide exceeds
        // the EVM stack in the legacy code generator.
        AuctionData storage auction = auctions[auctionId];
        AuctionConfig storage config = auction.config;
        config.token = token;
        config.paymentToken = IERC20(p.paymentToken);
        config.basePrice = p.basePrice;
        config.slope = p.slope;
        config.maxRaise = p.maxRaise;
        config.startTime = p.startTime;
        config.endTime = p.endTime;
        config.creator = msg.sender;
        config.protocolFeeBps = defaultFeeBps;
        config.liquidityBps = p.liquidityBps;
        auction.state = AuctionState.ACTIVE;

        emit AuctionCreated(
            auctionId, msg.sender, address(token), p.paymentToken,
            p.basePrice, p.slope, p.maxRaise, p.startTime, p.endTime, p.liquidityBps
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

        require(!_curveOverflows(maxSupply, basePrice, slope, maxRaise), "Curve overflows");

        uint256 soldOut = BondingCurve.maxBuyable(0, maxRaise, basePrice, slope, maxSupply);
        uint256 finalPrice = BondingCurve.spotPrice(soldOut, basePrice, slope);
        uint256 reserve = Math.mulDiv(
            (maxRaise * liquidityBps) / 10000, BondingCurve.TOKEN_SCALE, finalPrice, Math.Rounding.Ceil
        );
        require(soldOut + reserve <= maxSupply, "Supply too small for liquidity");
    }

    /// @notice Buy `amount` tokens (in token wei) from an active auction.
    /// @param maxCost Most the buyer will pay in total (cost + protocol fee), in
    ///        payment-token units. The price rises with every purchase, so a
    ///        quote can be stale by the time a transaction lands; this bound
    ///        makes the buy revert instead of filling at a worse price.
    /// @dev   A purchase that would overshoot `maxRaise` is filled with what the
    ///        remaining budget buys and closes the auction, so the buyer may
    ///        receive less than `amount`; `TokensPurchased` reports the actual
    ///        amount.
    function buyTokens(uint256 auctionId, uint256 amount, uint256 maxCost) external nonReentrant {
        AuctionData storage auction = auctions[auctionId];
        require(auction.state == AuctionState.ACTIVE, "Auction not active");
        require(block.timestamp >= auction.config.startTime, "Not started");
        require(block.timestamp <= auction.config.endTime, "Ended");
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
        custodied[address(auction.config.paymentToken)] += cost;
        if (filledUp) {
            auction.state = AuctionState.COMPLETED;
        }

        _collectPayment(auction.config.paymentToken, cost, protocolFee);
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
            require(amount > 0, "Sold out");
            cost = BondingCurve.calculateBuyCost(
                auction.totalSold, amount, auction.config.basePrice, auction.config.slope
            );
        }
        return (amount, cost, true);
    }

    /// @dev Pull `cost` into custody and route the fee. Measuring the balance
    ///      change rejects fee-on-transfer and rebasing tokens, which would
    ///      leave `custodied` larger than what the contract actually holds and
    ///      make the last withdrawal fail.
    function _collectPayment(IERC20 paymentToken, uint256 cost, uint256 protocolFee) internal {
        uint256 balanceBefore = paymentToken.balanceOf(address(this));
        paymentToken.safeTransferFrom(msg.sender, address(this), cost);
        require(
            paymentToken.balanceOf(address(this)) - balanceBefore == cost,
            "Unsupported payment token"
        );
        if (protocolFee > 0) {
            paymentToken.safeTransferFrom(msg.sender, protocolFeeRecipient, protocolFee);
        }
    }

    function completeAuction(uint256 auctionId) external {
        AuctionData storage auction = auctions[auctionId];
        require(
            msg.sender == auction.config.creator || msg.sender == owner(),
            "Not authorized"
        );
        require(block.timestamp > auction.config.endTime, "Auction not ended");
        require(auction.state == AuctionState.ACTIVE, "Not active");

        auction.state = AuctionState.COMPLETED;
        emit AuctionCompleted(auctionId, auction.totalRaised, auction.totalSold);
    }

    /// @notice Transfer an auction's raised payment tokens to its creator.
    /// @dev Callable once, by the creator, after the auction reaches COMPLETED.
    ///      Protocol fees are routed to the fee recipient at buy time, so the
    ///      contract custodies exactly `totalRaised` for this auction.
    function withdrawProceeds(uint256 auctionId) external nonReentrant {
        AuctionData storage auction = auctions[auctionId];
        require(msg.sender == auction.config.creator, "Not creator");
        require(auction.state == AuctionState.COMPLETED, "Auction not completed");
        require(!proceedsWithdrawn[auctionId], "Already withdrawn");

        uint256 amount = auction.totalRaised;
        require(amount > 0, "Nothing to withdraw");

        // Effects before interaction.
        proceedsWithdrawn[auctionId] = true;
        custodied[address(auction.config.paymentToken)] -= amount;
        auction.config.paymentToken.safeTransfer(auction.config.creator, amount);

        emit ProceedsWithdrawn(auctionId, auction.config.creator, amount);
    }

    /// @dev Whether the largest intermediate products the curve can compute
    ///      during this auction would exceed uint256: basePrice * supply in the
    ///      linear term, slope * supply * 2 * supply in the quadratic term, and
    ///      maxRaise scaled to token wei when searching for the sold-out point.
    function _curveOverflows(uint256 maxSupply, uint256 basePrice, uint256 slope, uint256 maxRaise)
        internal
        pure
        returns (bool)
    {
        if (maxSupply > type(uint128).max) return true;
        (bool ok, ) = Math.tryMul(basePrice, maxSupply);
        if (!ok) return true;
        (ok, ) = Math.tryMul(slope, maxSupply * 2 * maxSupply);
        if (!ok) return true;
        (ok, ) = Math.tryMul(maxRaise, BondingCurve.TOKEN_SCALE);
        return !ok;
    }

    /// @notice Change where protocol fees are sent. Applies to purchases made
    ///         after the change, in every auction.
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

    /// @notice Recover tokens held above what is owed to auction creators,
    ///         such as tokens transferred to this contract directly. Funds
    ///         backing an unwithdrawn auction can never be swept.
    function sweep(IERC20 token, address to) external onlyOwner nonReentrant {
        require(to != address(0), "Zero recipient");
        uint256 balance = token.balanceOf(address(this));
        uint256 owed = custodied[address(token)];
        require(balance > owed, "Nothing to sweep");

        uint256 excess = balance - owed;
        token.safeTransfer(to, excess);
        emit Swept(address(token), to, excess);
    }

    // View functions
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
