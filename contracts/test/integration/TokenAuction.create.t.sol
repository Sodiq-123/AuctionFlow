pragma solidity ^0.8.24;
import "forge-std/Test.sol";
import "../../src/TokenAuction.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockUSDC is ERC20 {
    constructor() ERC20("Mock USDC", "mUSDC") {
        _mint(msg.sender, 1_000_000 * 1e6);
    }
}

contract TokenAuctionCreateTest is Test {
    TokenAuction auction;
    MockUSDC usdc;
    address creator = makeAddr("creator");
    address feeRecipient = makeAddr("feeRecipient");

    function setUp() public {
        usdc = new MockUSDC();
        auction = new TokenAuction(feeRecipient, 250);
        usdc.transfer(creator, 10_000 * 1e6);
    }

    function test_createAuction_emitsEvent() public {
        // Only the indexed topics (auctionId, creator) are checked; the token
        // address is assigned inside createAuction, so data is not matched.
        vm.expectEmit(true, true, false, false);
        emit TokenAuction.AuctionCreated(
            0, creator, address(0), address(usdc), 1e6, 1e3, 50_000e6,
            block.timestamp + 1 hours, block.timestamp + 72 hours
        );
        vm.prank(creator);
        auction.createAuction(
            "TestToken", "TT", 1_000_000e18,
            address(usdc),
            1e6, 1e3,
            50_000e6,
            block.timestamp + 1 hours,
            block.timestamp + 72 hours
        );
    }

    function test_createAuction_incrementsIdAndStoresConfig() public {
        vm.prank(creator);
        uint256 id = auction.createAuction(
            "TestToken", "TT", 1_000_000e18,
            address(usdc), 1e6, 1e3, 50_000e6,
            block.timestamp + 1 hours, block.timestamp + 72 hours
        );
        assertEq(id, 0, "first auction id is 0");
        assertEq(auction.auctionCount(), 1, "count incremented");

        (
            TokenAuction.AuctionConfig memory cfg,
            TokenAuction.AuctionState state,
            uint256 raised,
            uint256 sold
        ) = auction.auctions(id);

        assertEq(cfg.creator, creator, "creator stored");
        assertEq(address(cfg.paymentToken), address(usdc), "payment token stored");
        assertEq(cfg.basePrice, 1e6);
        assertEq(cfg.protocolFeeBps, 250, "inherits default fee");
        assertEq(uint256(state), uint256(TokenAuction.AuctionState.ACTIVE), "starts active");
        assertEq(raised, 0);
        assertEq(sold, 0);
    }

    function test_createAuction_revertsWhenStartInPast() public {
        vm.warp(1000);
        vm.prank(creator);
        vm.expectRevert("Start must be in future");
        auction.createAuction(
            "TestToken", "TT", 1_000_000e18, address(usdc), 1e6, 1e3, 50_000e6,
            block.timestamp - 1, block.timestamp + 72 hours
        );
    }

    function test_createAuction_revertsWhenEndBeforeStart() public {
        vm.prank(creator);
        vm.expectRevert("End must be after start");
        auction.createAuction(
            "TestToken", "TT", 1_000_000e18, address(usdc), 1e6, 1e3, 50_000e6,
            block.timestamp + 72 hours, block.timestamp + 1 hours
        );
    }
}
