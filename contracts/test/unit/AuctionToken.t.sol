pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../../src/AuctionToken.sol";

contract AuctionTokenTest is Test {
    AuctionToken token;
    address owner = makeAddr("owner");
    address alice = makeAddr("alice");

    uint256 constant MAX_SUPPLY = 1_000_000e18;

    function setUp() public {
        token = new AuctionToken("Auction Token", "AUCT", MAX_SUPPLY, owner);
    }

    function test_metadataAndOwner() public view {
        assertEq(token.name(), "Auction Token");
        assertEq(token.symbol(), "AUCT");
        assertEq(token.maxSupply(), MAX_SUPPLY);
        assertEq(token.owner(), owner);
        assertEq(token.totalSupply(), 0);
    }

    function test_owner_canMint() public {
        vm.prank(owner);
        token.mint(alice, 100e18);
        assertEq(token.balanceOf(alice), 100e18);
        assertEq(token.totalSupply(), 100e18);
    }

    function test_mint_revertsForNonOwner() public {
        vm.prank(alice);
        vm.expectRevert(); // Ownable: caller is not the owner
        token.mint(alice, 100e18);
    }

    function test_mint_revertsWhenExceedingMaxSupply() public {
        vm.prank(owner);
        vm.expectRevert("Exceeds max supply");
        token.mint(alice, MAX_SUPPLY + 1);
    }

    function test_mint_allowsExactlyMaxSupply() public {
        vm.prank(owner);
        token.mint(alice, MAX_SUPPLY);
        assertEq(token.totalSupply(), MAX_SUPPLY);

        // A further mint of even 1 wei must now exceed the cap.
        vm.prank(owner);
        vm.expectRevert("Exceeds max supply");
        token.mint(alice, 1);
    }

    function testFuzz_mint_neverExceedsMaxSupply(uint256 amount) public {
        amount = bound(amount, 0, MAX_SUPPLY);
        vm.prank(owner);
        token.mint(alice, amount);
        assertLe(token.totalSupply(), MAX_SUPPLY);
    }

    // --- transfer lock -------------------------------------------------------

    function test_transfers_lockedByDefault() public {
        vm.prank(owner);
        token.mint(alice, 100e18);
        assertFalse(token.transfersEnabled());

        vm.prank(alice);
        vm.expectRevert("Transfers locked");
        token.transfer(owner, 1e18);
    }

    function test_transferFrom_lockedByDefault() public {
        vm.prank(owner);
        token.mint(alice, 100e18);
        vm.prank(alice);
        token.approve(owner, 1e18); // approvals are allowed; moving tokens is not

        vm.prank(owner);
        vm.expectRevert("Transfers locked");
        token.transferFrom(alice, owner, 1e18);
    }

    function test_enableTransfers_unlocksTransfers() public {
        vm.prank(owner);
        token.mint(alice, 100e18);

        vm.expectEmit(false, false, false, false);
        emit AuctionToken.TransfersEnabled();
        vm.prank(owner);
        token.enableTransfers();

        vm.prank(alice);
        token.transfer(owner, 40e18);
        assertEq(token.balanceOf(owner), 40e18);
    }

    function test_enableTransfers_onlyOwner() public {
        vm.prank(alice);
        vm.expectRevert(); // Ownable: caller is not the owner
        token.enableTransfers();
    }

    function test_enableTransfers_onlyOnce() public {
        vm.startPrank(owner);
        token.enableTransfers();
        vm.expectRevert("Already enabled");
        token.enableTransfers();
        vm.stopPrank();
    }
}
