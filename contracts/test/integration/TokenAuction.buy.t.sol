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

    uint256 startTime;
    uint256 endTime;

    function setUp() public {
        usdc = new MockUSDC();
        auction = new TokenAuction(feeRecipient, FEE_BPS);
        usdc.transfer(buyer, 10_000_000 * 1e6);
    }

    // --- helpers -------------------------------------------------------------

    function _createAuction(uint256 maxRaise) internal returns (uint256 id) {
        startTime = block.timestamp + 1;
        endTime = block.timestamp + 72 hours;
        vm.prank(creator);
        id = auction.createAuction(
            "TestToken", "TT", 1_000_000_000e18,
            address(usdc),
            BASE_PRICE, SLOPE,
            maxRaise,
            startTime, endTime
        );
        vm.warp(startTime);
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
        auction.buyTokens(id, amount);
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
        auction.buyTokens(id, amount);
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
        auction.buyTokens(id, amount);
        auction.buyTokens(id, amount);
        vm.stopPrank();

        (uint256 raised, uint256 sold) = _totals(id);
        assertEq(raised, firstCost + secondCost, "raised accumulates both costs");
        assertEq(sold, amount * 2, "sold accumulates both buys");
    }

    function test_buyTokens_revertsBeforeStart() public {
        vm.prank(creator);
        uint256 id = auction.createAuction(
            "TestToken", "TT", 1_000_000_000e18,
            address(usdc), BASE_PRICE, SLOPE, MAX_RAISE,
            block.timestamp + 1 hours, block.timestamp + 72 hours
        );
        // no warp — still before startTime
        vm.startPrank(buyer);
        usdc.approve(address(auction), type(uint256).max);
        vm.expectRevert("Not started");
        auction.buyTokens(id, 1_000e18);
        vm.stopPrank();
    }

    function test_buyTokens_revertsAfterEnd() public {
        uint256 id = _createAuction(MAX_RAISE);
        vm.warp(endTime + 1);
        vm.startPrank(buyer);
        usdc.approve(address(auction), type(uint256).max);
        vm.expectRevert("Ended");
        auction.buyTokens(id, 1_000e18);
        vm.stopPrank();
    }

    function test_buyTokens_revertsWhenExceedsMaxRaise() public {
        // Tiny max raise so a modest buy blows past it.
        uint256 id = _createAuction(1e6);
        uint256 amount = 1_000e18; // cost ~ 1.0005e9 >> 1e6
        vm.startPrank(buyer);
        usdc.approve(address(auction), type(uint256).max);
        vm.expectRevert("Exceeds max raise");
        auction.buyTokens(id, amount);
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
        auction.buyTokens(id, amount);

        assertEq(uint256(_state(id)), uint256(TokenAuction.AuctionState.COMPLETED), "auto-completed");

        // Further buys revert because the auction is no longer active.
        vm.expectRevert("Auction not active");
        auction.buyTokens(id, 1e18);
        vm.stopPrank();
    }
}
