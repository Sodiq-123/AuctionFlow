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
        auction = new TokenAuction(feeRecipient, 250, INonfungiblePositionManager(makeAddr("positionManager")));
        usdc.transfer(creator, 10_000 * 1e6);
    }

    function test_createAuction_emitsEvent() public {
        // Only the indexed topics (auctionId, creator) are checked; the token
        // address is assigned inside createAuction, so data is not matched.
        vm.expectEmit(true, true, false, false);
        emit TokenAuction.AuctionCreated(
            0, creator, address(0), address(usdc), 1e6, 1e3, 50_000e6,
            block.timestamp + 1 hours, block.timestamp + 72 hours, 5_000);
        vm.prank(creator);
        auction.createAuction(
            TokenAuction.AuctionParams({
                name: "TestToken",
                symbol: "TT",
                maxSupply: 1_000_000e18,
                paymentToken: address(usdc),
                basePrice: 1e6,
                slope: 1e3,
                maxRaise: 50_000e6,
                startTime: block.timestamp + 1 hours,
                endTime: block.timestamp + 72 hours,
                liquidityBps: 5_000
            })
        );
    }

    function test_createAuction_incrementsIdAndStoresConfig() public {
        vm.prank(creator);
        uint256 id = auction.createAuction(
            TokenAuction.AuctionParams({
                name: "TestToken",
                symbol: "TT",
                maxSupply: 1_000_000e18,
                paymentToken: address(usdc),
                basePrice: 1e6,
                slope: 1e3,
                maxRaise: 50_000e6,
                startTime: block.timestamp + 1 hours,
                endTime: block.timestamp + 72 hours,
                liquidityBps: 5_000
            })
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
            TokenAuction.AuctionParams({
                name: "TestToken",
                symbol: "TT",
                maxSupply: 1_000_000e18,
                paymentToken: address(usdc),
                basePrice: 1e6,
                slope: 1e3,
                maxRaise: 50_000e6,
                startTime: block.timestamp - 1,
                endTime: block.timestamp + 72 hours,
                liquidityBps: 5_000
            })
        );
    }

    function test_createAuction_revertsWhenEndBeforeStart() public {
        vm.prank(creator);
        vm.expectRevert("End must be after start");
        auction.createAuction(
            TokenAuction.AuctionParams({
                name: "TestToken",
                symbol: "TT",
                maxSupply: 1_000_000e18,
                paymentToken: address(usdc),
                basePrice: 1e6,
                slope: 1e3,
                maxRaise: 50_000e6,
                startTime: block.timestamp + 72 hours,
                endTime: block.timestamp + 1 hours,
                liquidityBps: 5_000
            })
        );
    }

    // --- parameter validation ----------------------------------------------

    function _params() internal view returns (TokenAuction.AuctionParams memory) {
        return TokenAuction.AuctionParams({
            name: "TestToken",
            symbol: "TT",
            maxSupply: 1_000_000e18,
            paymentToken: address(usdc),
            basePrice: 1e6,
            slope: 1e3,
            maxRaise: 50_000e6,
            startTime: block.timestamp + 1 hours,
            endTime: block.timestamp + 72 hours,
            liquidityBps: 5_000
        });
    }

    function _expectCreateRevert(TokenAuction.AuctionParams memory p, string memory reason) internal {
        vm.prank(creator);
        vm.expectRevert(bytes(reason));
        auction.createAuction(p);
    }

    function test_createAuction_storesLiquidityShare() public {
        TokenAuction.AuctionParams memory p = _params();
        p.liquidityBps = 3_000;
        vm.prank(creator);
        uint256 id = auction.createAuction(p);
        (TokenAuction.AuctionConfig memory cfg,,,) = auction.auctions(id);
        assertEq(cfg.liquidityBps, 3_000);
    }

    function test_createAuction_rejectsLiquidityBelowFloor() public {
        TokenAuction.AuctionParams memory p = _params();
        p.liquidityBps = auction.MIN_LIQUIDITY_BPS() - 1;
        _expectCreateRevert(p, "Invalid liquidity share");
    }

    function test_createAuction_rejectsLiquidityAbove100Percent() public {
        TokenAuction.AuctionParams memory p = _params();
        p.liquidityBps = 10_001;
        _expectCreateRevert(p, "Invalid liquidity share");
    }

    function test_createAuction_acceptsLiquidityBounds() public {
        TokenAuction.AuctionParams memory p = _params();
        p.liquidityBps = auction.MIN_LIQUIDITY_BPS();
        vm.prank(creator);
        auction.createAuction(p);
        p.liquidityBps = 10_000;
        vm.prank(creator);
        auction.createAuction(p);
    }

    function test_createAuction_rejectsZeroBasePrice() public {
        TokenAuction.AuctionParams memory p = _params();
        p.basePrice = 0;
        _expectCreateRevert(p, "Zero base price");
    }

    function test_createAuction_rejectsZeroMaxRaise() public {
        TokenAuction.AuctionParams memory p = _params();
        p.maxRaise = 0;
        _expectCreateRevert(p, "Zero max raise");
    }

    /// The supply must hold the sold-out sale plus the tokens minted for the
    /// Uniswap pool at migration.
    function test_createAuction_rejectsSupplyWithoutRoomForLiquidity() public {
        TokenAuction.AuctionParams memory p = _params();
        // At these prices a sold-out sale moves ~9,050 tokens and the 50%
        // liquidity reserve needs ~2,490 more: 10,000 fits the sale alone.
        p.maxSupply = 10_000e18;
        _expectCreateRevert(p, "Supply too small for liquidity");
    }

    function test_createAuction_rejectsOverflowingCurve() public {
        TokenAuction.AuctionParams memory p = _params();
        p.slope = type(uint256).max / 1e30;
        _expectCreateRevert(p, "Curve overflows");
    }
}
