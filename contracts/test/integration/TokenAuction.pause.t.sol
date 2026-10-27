pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../../src/TokenAuction.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockUSDC is ERC20 {
    constructor() ERC20("Mock USDC", "mUSDC") {
        _mint(msg.sender, 1_000_000_000 * 1e6);
    }
}

/// Lets migration run without Uniswap: pool creation succeeds and the
/// position is rejected, so migrate() takes its fallback path.
contract NoPoolPositionManager {
    function createAndInitializePoolIfNecessary(address, address, uint24, uint160 sqrtPriceX96)
        external
        returns (address)
    {
        return address(new NoPool(sqrtPriceX96));
    }

    function mint(INonfungiblePositionManager.MintParams calldata)
        external
        pure
        returns (uint256, uint128, uint256, uint256)
    {
        revert("position rejected");
    }
}

/// A pool that reports whatever price it was initialised with.
contract NoPool {
    uint160 public sqrtPriceX96;

    constructor(uint160 price) {
        sqrtPriceX96 = price;
    }

    function slot0() external view returns (uint160, int24, uint16, uint16, uint16, uint8, bool) {
        return (sqrtPriceX96, 0, 0, 0, 0, 0, true);
    }
}

/// The emergency pause stops new money coming in and never blocks a way out.
contract TokenAuctionPauseTest is Test {
    TokenAuction auction;
    MockUSDC usdc;

    address creator = makeAddr("creator");
    address buyer = makeAddr("buyer");
    address stranger = makeAddr("stranger");

    uint256 constant MAX_RAISE = 10_500_000; // exactly 1,000 tokens at these prices

    function setUp() public {
        usdc = new MockUSDC();
        auction = new TokenAuction(
            makeAddr("feeRecipient"), 250, INonfungiblePositionManager(address(new NoPoolPositionManager()))
        , IWETH9(address(0)));
        auction.setPaymentTokenAllowed(address(usdc), true);
        auction.setLaunchPreset(
            TokenAuction.LaunchPreset({
                paymentToken: address(usdc),
                maxSupply: 1_000_000_000e18,
                basePrice: 1e22,
                slope: 1e18,
                maxRaise: MAX_RAISE,
                liquidityBps: 5_000
            })
        );
        usdc.transfer(buyer, 1_000e6);
        vm.prank(buyer);
        usdc.approve(address(auction), type(uint256).max);
    }

    function _launch() internal returns (uint256 id) {
        vm.prank(creator);
        id = auction.launch("TestToken", "TT", "", address(usdc));
    }

    function _buy(uint256 id, uint256 amount) internal {
        vm.prank(buyer);
        auction.buyTokens(id, amount, type(uint256).max);
    }

    function _params() internal view returns (TokenAuction.AuctionParams memory) {
        return TokenAuction.AuctionParams({
            name: "TestToken",
            symbol: "TT",
            metadataURI: "",
            maxSupply: 1_000_000_000e18,
            paymentToken: address(usdc),
            basePrice: 1e22,
            slope: 1e18,
            maxRaise: MAX_RAISE,
            liquidityBps: 5_000
        });
    }

    // --- entries are blocked ---------------------------------------------------

    function test_pause_blocksLaunch() public {
        auction.pause();
        vm.prank(creator);
        vm.expectRevert(Pausable.EnforcedPause.selector);
        auction.launch("TestToken", "TT", "", address(usdc));
    }

    function test_pause_blocksCreateAuction() public {
        auction.pause();
        TokenAuction.AuctionParams memory p = _params();
        vm.prank(creator);
        vm.expectRevert(Pausable.EnforcedPause.selector);
        auction.createAuction(p);
    }

    function test_pause_blocksBuys() public {
        uint256 id = _launch();
        auction.pause();
        vm.prank(buyer);
        vm.expectRevert(Pausable.EnforcedPause.selector);
        auction.buyTokens(id, 100e18, type(uint256).max);
    }

    function test_unpause_reopensBuys() public {
        uint256 id = _launch();
        auction.pause();
        auction.unpause();
        _buy(id, 100e18);
        assertEq(auction.userPurchases(id, buyer), 100e18);
    }

    // --- exits keep working ----------------------------------------------------

    function test_pause_stillAllowsSellingBack() public {
        uint256 id = _launch();
        _buy(id, 100e18);
        auction.pause();

        uint256 before = usdc.balanceOf(buyer);
        vm.prank(buyer);
        auction.sellTokens(id, 100e18, 0);
        assertGt(usdc.balanceOf(buyer), before, "holder exited while paused");
    }

    function test_pause_stillAllowsMigrationAndWithdrawal() public {
        uint256 id = _launch();
        _buy(id, 5_000e18); // partially fills to the threshold and graduates
        auction.pause();

        vm.prank(stranger);
        auction.migrate(id);
        (, TokenAuction.AuctionState state,,) = auction.auctions(id);
        assertEq(uint256(state), uint256(TokenAuction.AuctionState.MIGRATED));

        vm.prank(creator);
        auction.withdrawProceeds(id);
        assertTrue(auction.proceedsWithdrawn(id));
    }

    /// collectFees isn't gated: while paused it fails only for its own reason.
    function test_pause_doesNotGateCollectFees() public {
        uint256 id = _launch();
        auction.pause();
        vm.expectRevert("No position");
        auction.collectFees(id);
    }

    // --- access ----------------------------------------------------------------

    function test_pause_onlyOwner() public {
        vm.prank(stranger);
        vm.expectRevert(abi.encodeWithSelector(Ownable.OwnableUnauthorizedAccount.selector, stranger));
        auction.pause();
    }

    function test_unpause_onlyOwner() public {
        auction.pause();
        vm.prank(stranger);
        vm.expectRevert(abi.encodeWithSelector(Ownable.OwnableUnauthorizedAccount.selector, stranger));
        auction.unpause();
    }
}
