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
        vm.prank(creator);
        vm.expectEmit(true, true, false, false);
        // emit AuctionCreated(0, creator, ...)
        auction.createAuction(
            "TestToken", "TT", 1_000_000e18,
            address(usdc),
            1e6, 1e3,
            50_000e6,
            block.timestamp + 1 hours,
            block.timestamp + 72 hours
        );
    }
}
