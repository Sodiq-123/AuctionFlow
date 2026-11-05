pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../../src/TokenAuction.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "../mocks/MockUniswap.sol";

contract MockUSDC is ERC20 {
    constructor() ERC20("Mock USDC", "mUSDC") {
        _mint(msg.sender, 1_000_000_000 * 1e6);
    }
}

/// Migration behaviour that needs no real Uniswap. The Uniswap path itself is
/// covered against real Uniswap v3 in test/fork.
contract TokenAuctionMigrateTest is Test {
    TokenAuction auction;
    MockUSDC usdc;

    address creator = makeAddr("creator");
    address buyer = makeAddr("buyer");
    address stranger = makeAddr("stranger");

    uint256 constant MAX_RAISE = 10_500_000; // exactly 1,000 tokens at these prices

    function setUp() public {
        usdc = new MockUSDC();
        auction = new TokenAuction(
            makeAddr("feeRecipient"), 250, INonfungiblePositionManager(address(new AcceptingPositionManager()))
        , IWETH9(address(0)));
        auction.setPaymentTokenAllowed(address(usdc), true);
        usdc.transfer(buyer, 1_000e6);
    }

    function _createAuction() internal returns (uint256 id) {
        vm.prank(creator);
        id = auction.createAuction(
            TokenAuction.AuctionParams({
                name: "TestToken",
                symbol: "TT",
                metadataURI: "",
                maxSupply: 1_000_000_000e18,
                paymentToken: address(usdc),
                basePrice: 1e22, // 0.01 USDC per token (× 1e18)
                slope: 1e18,
                maxRaise: MAX_RAISE,
                liquidityBps: 5_000
            })
        );
    }

    function _graduate(uint256 id) internal {
        vm.startPrank(buyer);
        usdc.approve(address(auction), type(uint256).max);
        auction.buyTokens(id, 5_000e18, type(uint256).max); // partially fills to the threshold
        vm.stopPrank();
    }

    function _token(uint256 id) internal view returns (AuctionToken) {
        (TokenAuction.AuctionConfig memory cfg,,,) = auction.auctions(id);
        return cfg.token;
    }

    function test_migrate_revertsBeforeGraduation() public {
        uint256 id = _createAuction();
        vm.expectRevert("Auction not completed");
        auction.migrate(id);
    }

    /// Migration completes for any caller: the token unlocks, its supply is
    /// fixed, the whole reserve goes into the pool, spare tokens are burned
    /// and nothing is credited to the creator.
    function test_migrate_placesTheWholeReserve() public {
        uint256 id = _createAuction();
        _graduate(id);
        AuctionToken token = _token(id);
        uint256 sold = token.totalSupply();
        uint256 liquidityShare = (MAX_RAISE * 5_000) / 10_000;
        uint256 fees = auction.protocolFees(address(usdc));

        vm.prank(stranger); // permissionless
        auction.migrate(id);

        (, TokenAuction.AuctionState state,,) = auction.auctions(id);
        assertEq(uint256(state), uint256(TokenAuction.AuctionState.MIGRATED));
        assertTrue(token.transfersEnabled(), "token unlocked");
        assertEq(token.owner(), address(0), "ownership renounced: supply fixed for good");
        assertEq(auction.positionId(id), 1, "position kept");
        assertEq(usdc.balanceOf(address(auction.positionManager())), liquidityShare, "the reserve is in the pool");
        assertEq(auction.claimable(address(usdc), creator), 0, "nothing credited to the creator");
        assertEq(auction.custodied(address(usdc)), MAX_RAISE - liquidityShare + fees, "creator's share and fees still owed");
        assertEq(usdc.balanceOf(address(auction)), MAX_RAISE - liquidityShare + fees, "the whole reserve left");
        assertEq(token.balanceOf(address(auction)), 0, "spare tokens burned");
        assertGt(token.totalSupply(), sold, "reserve tokens minted");

        vm.prank(buyer);
        token.transfer(stranger, 1e18); // tradeable
    }

    /// If Uniswap refuses the position, nothing happens: the reserve is never
    /// paid out instead, so refusing it is worth nothing to anyone.
    function test_migrate_revertsWhenUniswapRefuses() public {
        TokenAuction refused = new TokenAuction(
            makeAddr("feeRecipient"), 250, INonfungiblePositionManager(address(new RefusingPositionManager())),
            IWETH9(address(0))
        );
        auction = refused;
        auction.setPaymentTokenAllowed(address(usdc), true);
        uint256 id = _createAuction();
        _graduate(id);

        vm.expectRevert("Liquidity not placed");
        auction.migrate(id);

        (, TokenAuction.AuctionState state,,) = auction.auctions(id);
        assertEq(uint256(state), uint256(TokenAuction.AuctionState.COMPLETED), "still waiting to migrate");
        assertFalse(_token(id).transfersEnabled(), "still locked");
        assertEq(auction.claimable(address(usdc), creator), 0, "nothing credited");
    }

    function test_migrate_onlyOnce() public {
        uint256 id = _createAuction();
        _graduate(id);
        auction.migrate(id);

        vm.expectRevert("Auction not completed");
        auction.migrate(id);
    }

    function test_noMintOrBurnAfterMigration() public {
        uint256 id = _createAuction();
        _graduate(id);
        auction.migrate(id);
        AuctionToken token = _token(id);

        vm.prank(address(auction));
        vm.expectRevert(abi.encodeWithSelector(Ownable.OwnableUnauthorizedAccount.selector, address(auction)));
        token.mint(stranger, 1);

        vm.prank(address(auction));
        vm.expectRevert(abi.encodeWithSelector(Ownable.OwnableUnauthorizedAccount.selector, address(auction)));
        token.burnFrom(buyer, 1);
    }

    function test_swapCallback_rejectsUnauthorizedCaller() public {
        vm.prank(stranger);
        vm.expectRevert("Unauthorized callback");
        auction.uniswapV3SwapCallback(1, 0, abi.encode(address(usdc), address(usdc)));
    }

    function test_collectFees_revertsWithoutPosition() public {
        uint256 id = _createAuction();
        vm.expectRevert("No position");
        auction.collectFees(id);
    }

    // --- LP fee share ---------------------------------------------------------

    function test_setDefaultLpFeeShareBps_snapshotsPerAuction() public {
        uint256 before = _createAuction();
        auction.setDefaultLpFeeShareBps(2_000);
        uint256 later = _createAuction();

        (TokenAuction.AuctionConfig memory a,,,) = auction.auctions(before);
        (TokenAuction.AuctionConfig memory b,,,) = auction.auctions(later);
        assertEq(a.lpFeeShareBps, 0, "existing auction keeps its terms");
        assertEq(b.lpFeeShareBps, 2_000, "new auction uses new share");
    }

    function test_setDefaultLpFeeShareBps_rejectsAboveCap() public {
        uint256 cap = auction.MAX_LP_FEE_SHARE_BPS();
        vm.expectRevert("Share too high");
        auction.setDefaultLpFeeShareBps(cap + 1);
    }

    function test_setDefaultLpFeeShareBps_onlyOwner() public {
        vm.prank(stranger);
        vm.expectRevert(abi.encodeWithSelector(Ownable.OwnableUnauthorizedAccount.selector, stranger));
        auction.setDefaultLpFeeShareBps(100);
    }
}
