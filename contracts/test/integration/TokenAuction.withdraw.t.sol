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

contract TokenAuctionWithdrawTest is Test {
    TokenAuction auction;
    MockUSDC usdc;

    address creator = makeAddr("creator");
    address feeRecipient = makeAddr("feeRecipient");
    address buyer = makeAddr("buyer");
    address stranger = makeAddr("stranger");

    uint256 constant FEE_BPS = 250;
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

    function _createAuction(uint256 maxRaise) internal returns (uint256 id) {
        startTime = block.timestamp + 1;
        endTime = block.timestamp + 72 hours;
        vm.prank(creator);
        id = auction.createAuction(
            "TestToken", "TT", 1_000_000_000e18,
            address(usdc), BASE_PRICE, SLOPE, maxRaise,
            startTime, endTime
        );
        vm.warp(startTime);
    }

    function _buy(uint256 id, uint256 amount) internal {
        vm.startPrank(buyer);
        usdc.approve(address(auction), type(uint256).max);
        auction.buyTokens(id, amount);
        vm.stopPrank();
    }

    function _raised(uint256 id) internal view returns (uint256 raised) {
        (,, raised,) = auction.auctions(id);
    }

    // --- happy path ----------------------------------------------------------

    function test_withdrawProceeds_paysCreatorAfterCompletion() public {
        uint256 id = _createAuction(MAX_RAISE);
        _buy(id, 1_000);
        uint256 raised = _raised(id);
        assertGt(raised, 0, "auction raised funds");
        assertEq(usdc.balanceOf(address(auction)), raised, "contract custodies proceeds");

        vm.warp(endTime + 1);
        vm.prank(creator);
        auction.completeAuction(id);

        uint256 before = usdc.balanceOf(creator);
        vm.expectEmit(true, true, false, true);
        emit TokenAuction.ProceedsWithdrawn(id, creator, raised);
        vm.prank(creator);
        auction.withdrawProceeds(id);

        assertEq(usdc.balanceOf(creator) - before, raised, "creator received proceeds");
        assertEq(usdc.balanceOf(address(auction)), 0, "contract fully drained");
        assertTrue(auction.proceedsWithdrawn(id), "withdrawn flag set");
    }

    function test_withdrawProceeds_worksAfterAutoCompletion() public {
        uint256 amount = 1_000;
        uint256 cost = BondingCurve.calculateBuyCost(0, amount, BASE_PRICE, SLOPE);
        uint256 id = _createAuction(cost); // maxRaise == one buy, auto-completes
        _buy(id, amount);

        vm.prank(creator);
        auction.withdrawProceeds(id);
        assertEq(usdc.balanceOf(creator), cost, "creator paid out without completeAuction");
    }

    // --- guards --------------------------------------------------------------

    function test_withdrawProceeds_revertsForNonCreator() public {
        uint256 id = _createAuction(MAX_RAISE);
        _buy(id, 1_000);
        vm.warp(endTime + 1);
        vm.prank(creator);
        auction.completeAuction(id);

        vm.prank(stranger);
        vm.expectRevert("Not creator");
        auction.withdrawProceeds(id);
    }

    function test_withdrawProceeds_revertsWhileAuctionActive() public {
        uint256 id = _createAuction(MAX_RAISE);
        _buy(id, 1_000);

        vm.prank(creator);
        vm.expectRevert("Auction not completed");
        auction.withdrawProceeds(id);
    }

    function test_withdrawProceeds_revertsOnSecondWithdrawal() public {
        uint256 id = _createAuction(MAX_RAISE);
        _buy(id, 1_000);
        vm.warp(endTime + 1);
        vm.prank(creator);
        auction.completeAuction(id);

        vm.prank(creator);
        auction.withdrawProceeds(id);

        vm.prank(creator);
        vm.expectRevert("Already withdrawn");
        auction.withdrawProceeds(id);
    }

    function test_withdrawProceeds_revertsWhenNothingRaised() public {
        uint256 id = _createAuction(MAX_RAISE); // no buys at all
        vm.warp(endTime + 1);
        vm.prank(creator);
        auction.completeAuction(id);

        vm.prank(creator);
        vm.expectRevert("Nothing to withdraw");
        auction.withdrawProceeds(id);
    }

    // --- isolation between auctions -----------------------------------------

    function test_withdrawProceeds_doesNotTouchOtherAuctionsFunds() public {
        uint256 first = _createAuction(MAX_RAISE);
        _buy(first, 1_000);
        uint256 firstRaised = _raised(first);

        // A second auction from the same creator, also funded.
        uint256 laterStart = block.timestamp + 1;
        vm.prank(creator);
        uint256 second = auction.createAuction(
            "Second", "SEC", 1_000_000_000e18,
            address(usdc), BASE_PRICE, SLOPE, MAX_RAISE,
            laterStart, block.timestamp + 72 hours
        );
        vm.warp(laterStart);
        _buy(second, 500);
        uint256 secondRaised = _raised(second);

        vm.warp(endTime + 1);
        vm.prank(creator);
        auction.completeAuction(first);
        vm.prank(creator);
        auction.withdrawProceeds(first);

        assertEq(usdc.balanceOf(creator), firstRaised, "only first auction paid out");
        assertEq(
            usdc.balanceOf(address(auction)), secondRaised,
            "second auction's funds untouched"
        );
        assertFalse(auction.proceedsWithdrawn(second), "second still unwithdrawn");
    }
}
