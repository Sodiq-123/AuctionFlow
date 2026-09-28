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

contract TokenAuctionCompleteTest is Test {
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
        // The test contract deploys the auction, so it is the Ownable owner.
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
    }

    function _state(uint256 id) internal view returns (TokenAuction.AuctionState st) {
        (, st,,) = auction.auctions(id);
    }

    function test_completeAuction_byCreatorAfterEnd() public {
        uint256 id = _createAuction(MAX_RAISE);
        vm.warp(endTime + 1);

        vm.expectEmit(true, false, false, true);
        emit TokenAuction.AuctionCompleted(id, 0, 0);
        vm.prank(creator);
        auction.completeAuction(id);

        assertEq(uint256(_state(id)), uint256(TokenAuction.AuctionState.COMPLETED));
    }

    function test_completeAuction_byOwnerAfterEnd() public {
        uint256 id = _createAuction(MAX_RAISE);
        vm.warp(endTime + 1);

        // msg.sender is the test contract == owner()
        auction.completeAuction(id);
        assertEq(uint256(_state(id)), uint256(TokenAuction.AuctionState.COMPLETED));
    }

    function test_completeAuction_revertsBeforeEnd() public {
        uint256 id = _createAuction(MAX_RAISE);
        vm.warp(startTime + 1 hours); // still before endTime

        vm.prank(creator);
        vm.expectRevert("Auction not ended");
        auction.completeAuction(id);
    }

    function test_completeAuction_revertsNotAuthorized() public {
        uint256 id = _createAuction(MAX_RAISE);
        vm.warp(endTime + 1);

        vm.prank(stranger);
        vm.expectRevert("Not authorized");
        auction.completeAuction(id);
    }

    function test_completeAuction_revertsIfAlreadyCompleted() public {
        uint256 id = _createAuction(MAX_RAISE);
        vm.warp(endTime + 1);

        vm.prank(creator);
        auction.completeAuction(id);

        vm.prank(creator);
        vm.expectRevert("Not active");
        auction.completeAuction(id);
    }

    function test_completeAuction_revertsIfAutoCompletedViaMaxRaise() public {
        uint256 amount = 1_000e18;
        uint256 cost = BondingCurve.calculateBuyCost(0, amount, BASE_PRICE, SLOPE);
        uint256 id = _createAuction(cost); // maxRaise == one buy's cost

        vm.warp(startTime);
        vm.startPrank(buyer);
        usdc.approve(address(auction), type(uint256).max);
        auction.buyTokens(id, amount); // auto-completes here
        vm.stopPrank();

        assertEq(uint256(_state(id)), uint256(TokenAuction.AuctionState.COMPLETED));

        vm.warp(endTime + 1);
        vm.prank(creator);
        vm.expectRevert("Not active");
        auction.completeAuction(id);
    }
}
