pragma solidity ^0.8.24;

import "./AuctionToken.sol";
import "./BondingCurve.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

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
        uint256 endTime
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

    function createAuction(
        string memory name,
        string memory symbol,
        uint256 maxSupply,
        address paymentToken,
        uint256 basePrice,
        uint256 slope,
        uint256 maxRaise,
        uint256 startTime,
        uint256 endTime
    ) external returns (uint256 auctionId) {
        require(startTime > block.timestamp, "Start must be in future");
        require(endTime > startTime, "End must be after start");

        auctionId = auctionCount++;

        // Deploy token — auction contract owns it for minting
        AuctionToken token = new AuctionToken(name, symbol, maxSupply, address(this));

        auctions[auctionId] = AuctionData({
            config: AuctionConfig({
                token: token,
                paymentToken: IERC20(paymentToken),
                basePrice: basePrice,
                slope: slope,
                maxRaise: maxRaise,
                startTime: startTime,
                endTime: endTime,
                creator: msg.sender,
                protocolFeeBps: defaultFeeBps
            }),
            state: AuctionState.ACTIVE,
            totalRaised: 0,
            totalSold: 0
        });

        emit AuctionCreated(
            auctionId, msg.sender, address(token), paymentToken,
            basePrice, slope, maxRaise, startTime, endTime
        );
    }

    /// @notice Buy `amount` tokens (in token wei) from an active auction.
    /// @param maxCost Most the buyer will pay in total (cost + protocol fee), in
    ///        payment-token units. The price rises with every purchase, so a
    ///        quote can be stale by the time a transaction lands; this bound
    ///        makes the buy revert instead of filling at a worse price.
    function buyTokens(uint256 auctionId, uint256 amount, uint256 maxCost) external nonReentrant {
        AuctionData storage auction = auctions[auctionId];
        require(auction.state == AuctionState.ACTIVE, "Auction not active");
        require(block.timestamp >= auction.config.startTime, "Not started");
        require(block.timestamp <= auction.config.endTime, "Ended");
        require(amount > 0, "Zero amount");

        uint256 cost = BondingCurve.calculateBuyCost(
            auction.totalSold,
            amount,
            auction.config.basePrice,
            auction.config.slope
        );
        uint256 protocolFee = (cost * auction.config.protocolFeeBps) / 10000;

        require(cost + protocolFee <= maxCost, "Slippage exceeded");
        require(auction.totalRaised + cost <= auction.config.maxRaise, "Exceeds max raise");

        // Effects before interactions.
        IERC20 paymentToken = auction.config.paymentToken;
        auction.totalRaised += cost;
        auction.totalSold += amount;
        userPurchases[auctionId][msg.sender] += amount;
        custodied[address(paymentToken)] += cost;

        bool completed = auction.totalRaised >= auction.config.maxRaise;
        if (completed) {
            auction.state = AuctionState.COMPLETED;
        }

        // Collect payment. Measuring the balance change rejects fee-on-transfer
        // and rebasing tokens, which would leave `custodied` larger than what
        // the contract actually holds and make the last withdrawal fail.
        uint256 balanceBefore = paymentToken.balanceOf(address(this));
        paymentToken.safeTransferFrom(msg.sender, address(this), cost);
        require(
            paymentToken.balanceOf(address(this)) - balanceBefore == cost,
            "Unsupported payment token"
        );
        if (protocolFee > 0) {
            paymentToken.safeTransferFrom(msg.sender, protocolFeeRecipient, protocolFee);
        }

        auction.config.token.mint(msg.sender, amount);

        emit TokensPurchased(
            auctionId, msg.sender, amount, cost, protocolFee,
            auction.totalRaised, auction.totalSold
        );
        if (completed) {
            emit AuctionCompleted(auctionId, auction.totalRaised, auction.totalSold);
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
