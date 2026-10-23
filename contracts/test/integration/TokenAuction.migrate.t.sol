pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../../src/TokenAuction.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockUSDC is ERC20 {
    constructor() ERC20("Mock USDC", "mUSDC") {
        _mint(msg.sender, 1_000_000_000 * 1e6);
    }
}

/// Migration behaviour that needs no Uniswap deployment. The Uniswap path
/// itself is covered against real Uniswap v3 in test/fork.
contract TokenAuctionMigrateTest is Test {
    TokenAuction auction;
    MockUSDC usdc;

    address creator = makeAddr("creator");
    address stranger = makeAddr("stranger");

    uint256 startTime;
    uint256 endTime;

    function setUp() public {
        usdc = new MockUSDC();
        auction = new TokenAuction(makeAddr("feeRecipient"), 250, INonfungiblePositionManager(makeAddr("positionManager")));
    }

    function _createAuction() internal returns (uint256 id) {
        startTime = block.timestamp + 1;
        endTime = block.timestamp + 72 hours;
        vm.prank(creator);
        id = auction.createAuction(
            TokenAuction.AuctionParams({
                name: "TestToken",
                symbol: "TT",
                maxSupply: 1_000_000_000e18,
                paymentToken: address(usdc),
                basePrice: 1e4,
                slope: 1,
                maxRaise: 10_500_000,
                startTime: startTime,
                endTime: endTime,
                liquidityBps: 5_000
            })
        );
    }

    function _token(uint256 id) internal view returns (AuctionToken) {
        (TokenAuction.AuctionConfig memory cfg,,,) = auction.auctions(id);
        return cfg.token;
    }

    function test_migrate_revertsWhileActive() public {
        uint256 id = _createAuction();
        vm.expectRevert("Auction not completed");
        auction.migrate(id);
    }

    /// An auction that ended with no buyers has nothing to pair, but still
    /// migrates: the token unlocks and no pool is created.
    function test_migrate_withNoRaiseUnlocksWithoutPool() public {
        uint256 id = _createAuction();
        vm.warp(endTime + 1);
        vm.prank(creator);
        auction.completeAuction(id);

        vm.prank(stranger); // permissionless
        auction.migrate(id);

        (, TokenAuction.AuctionState state,,) = auction.auctions(id);
        assertEq(uint256(state), uint256(TokenAuction.AuctionState.MIGRATED));
        assertTrue(_token(id).transfersEnabled(), "token unlocked");
        assertEq(auction.poolOf(id), address(0), "no pool");
        assertEq(auction.positionId(id), 0, "no position");
    }

    function test_migrate_onlyOnce() public {
        uint256 id = _createAuction();
        vm.warp(endTime + 1);
        vm.prank(creator);
        auction.completeAuction(id);
        auction.migrate(id);

        vm.expectRevert("Auction not completed");
        auction.migrate(id);
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
