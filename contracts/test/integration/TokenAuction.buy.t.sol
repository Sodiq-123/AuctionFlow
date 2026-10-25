pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../../src/TokenAuction.sol";
import "../../src/BondingCurve.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockUSDC is ERC20 {
    constructor() ERC20("Mock USDC", "mUSDC") {
        _mint(msg.sender, 1_000_000_000 * 1e6);
    }
}

contract TokenAuctionBuyTest is Test {
    TokenAuction auction;
    MockUSDC usdc;

    address creator = makeAddr("creator");
    address feeRecipient = makeAddr("feeRecipient");
    address buyer = makeAddr("buyer");

    uint256 constant FEE_BPS = 250; // 2.5%
    uint256 constant BASE_PRICE = 1e6;
    uint256 constant SLOPE = 1e3;
    uint256 constant MAX_RAISE = 50_000e6;

    function setUp() public {
        usdc = new MockUSDC();
        auction = new TokenAuction(feeRecipient, FEE_BPS, INonfungiblePositionManager(makeAddr("positionManager")));
        usdc.transfer(buyer, 10_000_000 * 1e6);
    }

    // --- helpers -------------------------------------------------------------

    function _createAuction(uint256 maxRaise) internal returns (uint256 id) {
        vm.prank(creator);
        id = auction.createAuction(
            TokenAuction.AuctionParams({
                name: "TestToken",
                symbol: "TT",
                metadataURI: "",
                maxSupply: 1_000_000_000e18,
                paymentToken: address(usdc),
                basePrice: BASE_PRICE,
                slope: SLOPE,
                maxRaise: maxRaise,
                liquidityBps: 5_000
            })
        );
    }

    function _token(uint256 id) internal view returns (AuctionToken) {
        (TokenAuction.AuctionConfig memory cfg,,,) = auction.auctions(id);
        return cfg.token;
    }

    function _state(uint256 id) internal view returns (TokenAuction.AuctionState st) {
        (, st,,) = auction.auctions(id);
    }

    function _totals(uint256 id) internal view returns (uint256 raised, uint256 sold) {
        (,, raised, sold) = auction.auctions(id);
    }

    // --- tests ---------------------------------------------------------------

    function test_buyTokens_transfersPaymentAndMints() public {
        uint256 id = _createAuction(MAX_RAISE);
        uint256 amount = 1_000e18;

        uint256 cost = BondingCurve.calculateBuyCost(0, amount, BASE_PRICE, SLOPE);
        uint256 fee = (cost * FEE_BPS) / 10_000;

        vm.startPrank(buyer);
        usdc.approve(address(auction), cost + fee);
        auction.buyTokens(id, amount, type(uint256).max);
        vm.stopPrank();

        AuctionToken token = _token(id);
        assertEq(token.balanceOf(buyer), amount, "buyer minted amount");
        assertEq(token.totalSupply(), amount, "supply == amount");
        assertEq(usdc.balanceOf(address(auction)), cost, "contract holds cost");
        assertEq(usdc.balanceOf(feeRecipient), fee, "fee recipient paid fee");

        (uint256 raised, uint256 sold) = _totals(id);
        assertEq(raised, cost, "totalRaised == cost");
        assertEq(sold, amount, "totalSold == amount");
        assertEq(auction.userPurchases(id, buyer), amount, "userPurchases tracked");
    }

    function test_buyTokens_emitsEvent() public {
        uint256 id = _createAuction(MAX_RAISE);
        uint256 amount = 1_000e18;
        uint256 cost = BondingCurve.calculateBuyCost(0, amount, BASE_PRICE, SLOPE);
        uint256 fee = (cost * FEE_BPS) / 10_000;

        vm.startPrank(buyer);
        usdc.approve(address(auction), cost + fee);
        vm.expectEmit(true, true, false, true);
        emit TokenAuction.TokensPurchased(id, buyer, amount, cost, fee, cost, amount);
        auction.buyTokens(id, amount, type(uint256).max);
        vm.stopPrank();
    }

    function test_buyTokens_secondBuyCostsMore() public {
        uint256 id = _createAuction(MAX_RAISE);
        uint256 amount = 1_000e18;

        uint256 firstCost = BondingCurve.calculateBuyCost(0, amount, BASE_PRICE, SLOPE);
        uint256 secondCost = BondingCurve.calculateBuyCost(amount, amount, BASE_PRICE, SLOPE);
        assertGt(secondCost, firstCost, "price rises along the curve");

        vm.startPrank(buyer);
        usdc.approve(address(auction), type(uint256).max);
        auction.buyTokens(id, amount, type(uint256).max);
        auction.buyTokens(id, amount, type(uint256).max);
        vm.stopPrank();

        (uint256 raised, uint256 sold) = _totals(id);
        assertEq(raised, firstCost + secondCost, "raised accumulates both costs");
        assertEq(sold, amount * 2, "sold accumulates both buys");
    }

    function test_buyTokens_partiallyFillsAtCap() public {
        uint256 cap = 1e6; // 1 USDC: less than 1,000 tokens cost
        uint256 id = _createAuction(cap);
        uint256 requested = 1_000e18;
        uint256 fullCost = BondingCurve.calculateBuyCost(0, requested, BASE_PRICE, SLOPE);
        assertGt(fullCost, cap, "precondition: request overshoots the cap");

        vm.startPrank(buyer);
        usdc.approve(address(auction), type(uint256).max);
        auction.buyTokens(id, requested, type(uint256).max);
        vm.stopPrank();

        uint256 received = _token(id).balanceOf(buyer);
        (uint256 raised, uint256 sold) = _totals(id);
        assertGt(received, 0, "something was filled");
        assertLt(received, requested, "less than requested");
        assertEq(sold, received);
        assertLe(raised, cap, "never exceeds the cap");
        assertEq(raised, BondingCurve.calculateBuyCost(0, received, BASE_PRICE, SLOPE), "charged for what was filled");
        assertEq(uint256(_state(id)), uint256(TokenAuction.AuctionState.COMPLETED), "fill-up closes the auction");
    }

    /// The buyer's maxCost still applies to the partial fill.
    function test_buyTokens_partialFillRespectsMaxCost() public {
        uint256 id = _createAuction(1e6);
        vm.startPrank(buyer);
        usdc.approve(address(auction), type(uint256).max);
        vm.expectRevert("Slippage exceeded");
        auction.buyTokens(id, 1_000e18, 1); // a partial fill still costs far more than 1 unit
        vm.stopPrank();
    }

    function test_buyTokens_autoCompletesAtMaxRaise() public {
        uint256 amount = 1_000e18;
        uint256 cost = BondingCurve.calculateBuyCost(0, amount, BASE_PRICE, SLOPE);
        // Set maxRaise exactly to this buy's cost so it auto-completes.
        uint256 id = _createAuction(cost);

        vm.startPrank(buyer);
        usdc.approve(address(auction), type(uint256).max);
        vm.expectEmit(true, false, false, true);
        emit TokenAuction.AuctionCompleted(id, cost, amount);
        auction.buyTokens(id, amount, type(uint256).max);

        assertEq(uint256(_state(id)), uint256(TokenAuction.AuctionState.COMPLETED), "auto-completed");

        // Further buys revert because the auction is no longer active.
        vm.expectRevert("Auction not active");
        auction.buyTokens(id, 1e18, type(uint256).max);
        vm.stopPrank();
    }

    // --- slippage protection ------------------------------------------------

    function test_buyTokens_succeedsAtExactMaxCost() public {
        uint256 id = _createAuction(MAX_RAISE);
        uint256 amount = 1_000e18;
        uint256 cost = BondingCurve.calculateBuyCost(0, amount, BASE_PRICE, SLOPE);
        uint256 total = cost + (cost * FEE_BPS) / 10_000;

        vm.startPrank(buyer);
        usdc.approve(address(auction), total);
        auction.buyTokens(id, amount, total);
        vm.stopPrank();

        assertEq(_token(id).balanceOf(buyer), amount);
    }

    function test_buyTokens_revertsWhenTotalExceedsMaxCost() public {
        uint256 id = _createAuction(MAX_RAISE);
        uint256 amount = 1_000e18;
        uint256 cost = BondingCurve.calculateBuyCost(0, amount, BASE_PRICE, SLOPE);
        uint256 total = cost + (cost * FEE_BPS) / 10_000;

        vm.startPrank(buyer);
        usdc.approve(address(auction), type(uint256).max);
        vm.expectRevert("Slippage exceeded");
        auction.buyTokens(id, amount, total - 1);
        vm.stopPrank();
    }

    /// The scenario slippage protection exists for: a buyer quotes, someone
    /// else buys first and moves the price, and the original order would now
    /// fill above what the buyer agreed to.
    function test_buyTokens_protectsAgainstFrontRun() public {
        uint256 id = _createAuction(MAX_RAISE);
        uint256 amount = 1_000e18;
        uint256 quoted = BondingCurve.calculateBuyCost(0, amount, BASE_PRICE, SLOPE);
        uint256 maxCost = quoted + (quoted * FEE_BPS) / 10_000;

        address frontRunner = makeAddr("frontRunner");
        usdc.transfer(frontRunner, 1_000_000e6);
        vm.startPrank(frontRunner);
        usdc.approve(address(auction), type(uint256).max);
        auction.buyTokens(id, 1_000e18, type(uint256).max);
        vm.stopPrank();

        vm.startPrank(buyer);
        usdc.approve(address(auction), type(uint256).max);
        vm.expectRevert("Slippage exceeded");
        auction.buyTokens(id, amount, maxCost);
        vm.stopPrank();
    }

    function test_buyTokens_revertsOnZeroAmount() public {
        uint256 id = _createAuction(MAX_RAISE);
        vm.prank(buyer);
        vm.expectRevert("Zero amount");
        auction.buyTokens(id, 0, type(uint256).max);
    }
}
