pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../../src/TokenAuction.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockUSDC is ERC20 {
    constructor() ERC20("Mock USDC", "mUSDC") {}

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
}

/// @dev Drives randomized buys against a single live auction so the fuzzer can
///      probe for state that violates the protocol's accounting invariants.
contract BuyHandler is Test {
    TokenAuction public auction;
    MockUSDC public usdc;
    uint256 public auctionId;

    address[] public actors;
    address public owner;
    uint256 public ghostSold;    // tokens buyers actually received
    uint256 public ghostDonated; // payment tokens sent to the auction directly
    uint256 public ghostSwept;   // payment tokens the owner recovered

    constructor(TokenAuction _auction, MockUSDC _usdc, uint256 _auctionId, address _owner) {
        auction = _auction;
        usdc = _usdc;
        auctionId = _auctionId;
        owner = _owner;

        for (uint256 i = 0; i < 3; i++) {
            address actor = makeAddr(string(abi.encodePacked("actor", vm.toString(i))));
            actors.push(actor);
            usdc.mint(actor, 1e30);
            vm.prank(actor);
            usdc.approve(address(auction), type(uint256).max);
        }
    }

    function buy(uint256 actorSeed, uint256 amount) external {
        address actor = actors[actorSeed % actors.length];
        amount = bound(amount, 1e15, 1e21); // 0.001 .. 1,000 tokens

        // Count what the buyer actually received, from their own balance, so
        // the tally stays independent of the contract's accounting. A
        // purchase that fills the auction may deliver less than requested.
        (TokenAuction.AuctionConfig memory cfg,,,) = auction.auctions(auctionId);
        uint256 before = cfg.token.balanceOf(actor);
        vm.prank(actor);
        try auction.buyTokens(auctionId, amount, type(uint256).max) {
            ghostSold += cfg.token.balanceOf(actor) - before;
        } catch {
            // Expected reverts (exceeds max raise, auction completed) are fine —
            // the invariants must still hold whether or not a buy succeeds.
        }
    }

    /// Someone transfers payment tokens straight to the contract, bypassing
    /// buyTokens: the situation that left 20 USDC stranded on testnet.
    function donate(uint256 actorSeed, uint256 amount) external {
        address actor = actors[actorSeed % actors.length];
        amount = bound(amount, 1, 1e9);
        vm.prank(actor);
        usdc.transfer(address(auction), amount);
        ghostDonated += amount;
    }

    /// The owner recovers whatever excess exists at this moment.
    function sweep() external {
        uint256 before = usdc.balanceOf(owner);
        vm.prank(owner);
        try auction.sweep(usdc, owner) {
            ghostSwept += usdc.balanceOf(owner) - before;
        } catch {
            // "Nothing to sweep" is an expected outcome.
        }
    }
}

contract TokenAuctionInvariantTest is Test {
    TokenAuction auction;
    MockUSDC usdc;
    BuyHandler handler;
    uint256 auctionId;

    address creator = makeAddr("creator");
    address feeRecipient = makeAddr("feeRecipient");

    uint256 constant BASE_PRICE = 1e6;
    uint256 constant SLOPE = 1e3;
    uint256 constant MAX_RAISE = 1e10; // 10,000 USDC — reachable under fuzzing
    uint256 constant MAX_SUPPLY = 1_000_000_000e18;

    function setUp() public {
        usdc = new MockUSDC();
        auction = new TokenAuction(feeRecipient, 250, INonfungiblePositionManager(makeAddr("positionManager")));

        uint256 startTime = block.timestamp + 1;
        vm.prank(creator);
        auctionId = auction.createAuction(
            TokenAuction.AuctionParams({
                name: "TestToken",
                symbol: "TT",
                maxSupply: MAX_SUPPLY,
                paymentToken: address(usdc),
                basePrice: BASE_PRICE,
                slope: SLOPE,
                maxRaise: MAX_RAISE,
                startTime: startTime,
                endTime: block.timestamp + 3650 days,
                liquidityBps: 5_000
            })
        );
        vm.warp(startTime);

        handler = new BuyHandler(auction, usdc, auctionId, address(this));

        // Only fuzz through the handler's entrypoints.
        bytes4[] memory selectors = new bytes4[](3);
        selectors[0] = BuyHandler.buy.selector;
        selectors[1] = BuyHandler.donate.selector;
        selectors[2] = BuyHandler.sweep.selector;
        targetSelector(FuzzSelector({addr: address(handler), selectors: selectors}));
        targetContract(address(handler));
    }

    function _token() internal view returns (AuctionToken) {
        (TokenAuction.AuctionConfig memory cfg,,,) = auction.auctions(auctionId);
        return cfg.token;
    }

    function _totals() internal view returns (uint256 raised, uint256 sold) {
        (,, raised, sold) = auction.auctions(auctionId);
    }

    /// totalRaised must never exceed the configured max raise.
    function invariant_raisedNeverExceedsMaxRaise() public view {
        (uint256 raised,) = _totals();
        assertLe(raised, MAX_RAISE);
    }

    /// Every sold token is minted 1:1, so supply must equal totalSold.
    function invariant_tokenSupplyEqualsTotalSold() public view {
        (, uint256 sold) = _totals();
        assertEq(_token().totalSupply(), sold);
    }

    /// Sold tokens can never exceed the token's max supply.
    function invariant_soldNeverExceedsMaxSupply() public view {
        (, uint256 sold) = _totals();
        assertLe(sold, MAX_SUPPLY);
    }

    /// Custody accounting matches what the auction raised. No withdrawals
    /// happen in this suite, so everything raised is still owed.
    function invariant_custodiedEqualsRaised() public view {
        (uint256 raised,) = _totals();
        assertEq(auction.custodied(address(usdc)), raised);
    }

    /// Solvency: the contract always holds at least what it owes creators,
    /// however much is donated to it or swept out of it.
    function invariant_balanceCoversCustodied() public view {
        assertGe(usdc.balanceOf(address(auction)), auction.custodied(address(usdc)));
    }

    /// Every unit is accounted for: balance = raised + donated - swept.
    /// Sweeping can only ever remove donated excess, never creator funds.
    function invariant_balanceFullyAccounted() public view {
        (uint256 raised,) = _totals();
        assertEq(
            usdc.balanceOf(address(auction)),
            raised + handler.ghostDonated() - handler.ghostSwept()
        );
        assertLe(handler.ghostSwept(), handler.ghostDonated());
    }

    /// The contract's own accounting must match the handler's independent tally.
    function invariant_totalSoldMatchesGhost() public view {
        (, uint256 sold) = _totals();
        assertEq(sold, handler.ghostSold());
    }
}
