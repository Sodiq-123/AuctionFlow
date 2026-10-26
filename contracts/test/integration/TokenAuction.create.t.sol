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
    address stranger = makeAddr("stranger");

    function setUp() public {
        usdc = new MockUSDC();
        auction = new TokenAuction(feeRecipient, 250, INonfungiblePositionManager(makeAddr("positionManager")));
        auction.setPaymentTokenAllowed(address(usdc), true);
        usdc.transfer(creator, 10_000 * 1e6);
    }

    function _params() internal view returns (TokenAuction.AuctionParams memory) {
        return TokenAuction.AuctionParams({
            name: "TestToken",
            symbol: "TT",
            metadataURI: "ipfs://test-token",
            maxSupply: 1_000_000e18,
            paymentToken: address(usdc),
            basePrice: 1e24, // 1 USDC per token (× 1e18)
            slope: 1e21,
            maxRaise: 50_000e6,
            liquidityBps: 5_000
        });
    }

    function _preset() internal view returns (TokenAuction.LaunchPreset memory) {
        return TokenAuction.LaunchPreset({
            paymentToken: address(usdc),
            maxSupply: 1_000_000_000e18,
            basePrice: 1e22, // 0.01 USDC per token (× 1e18)
            slope: 1e18,
            maxRaise: 10_500_000,
            liquidityBps: 8_000
        });
    }

    function _expectCreateRevert(TokenAuction.AuctionParams memory p, string memory reason) internal {
        vm.prank(creator);
        vm.expectRevert(bytes(reason));
        auction.createAuction(p);
    }

    // --- createAuction --------------------------------------------------------

    function test_createAuction_emitsEvent() public {
        // Only the indexed topics (auctionId, creator) are checked; the token
        // address is assigned inside createAuction, so data is not matched.
        vm.expectEmit(true, true, false, false);
        emit TokenAuction.AuctionCreated(
            0, creator, address(0), address(usdc), 1e24, 1e21, 50_000e6, 5_000, "ipfs://test-token"
        );
        vm.prank(creator);
        auction.createAuction(_params());
    }

    function test_createAuction_incrementsIdAndStoresConfig() public {
        vm.prank(creator);
        uint256 id = auction.createAuction(_params());
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
        assertEq(cfg.basePrice, 1e24);
        assertEq(cfg.protocolFeeBps, 250, "inherits default fee");
        assertEq(uint256(state), uint256(TokenAuction.AuctionState.ACTIVE), "trading starts immediately");
        assertEq(raised, 0);
        assertEq(sold, 0);
    }

    function test_createAuction_storesMetadataOnToken() public {
        vm.prank(creator);
        uint256 id = auction.createAuction(_params());
        (TokenAuction.AuctionConfig memory cfg,,,) = auction.auctions(id);
        assertEq(cfg.token.metadataURI(), "ipfs://test-token");
        assertEq(cfg.token.owner(), address(auction), "auction contract owns the token until migration");
    }

    // --- one-click launch -----------------------------------------------------

    function test_launch_revertsWithoutPreset() public {
        vm.prank(creator);
        vm.expectRevert("No launch preset");
        auction.launch("Meme", "MEME", "ipfs://meme");
    }

    function test_launch_usesPresetAndCreatorDetails() public {
        auction.setLaunchPreset(_preset());

        vm.prank(creator);
        uint256 id = auction.launch("Meme", "MEME", "ipfs://meme");

        (TokenAuction.AuctionConfig memory cfg, TokenAuction.AuctionState state,,) = auction.auctions(id);
        assertEq(cfg.creator, creator, "launcher is the creator");
        assertEq(cfg.token.name(), "Meme");
        assertEq(cfg.token.symbol(), "MEME");
        assertEq(cfg.token.metadataURI(), "ipfs://meme");
        assertEq(cfg.token.maxSupply(), 1_000_000_000e18, "supply from preset");
        assertEq(address(cfg.paymentToken), address(usdc), "payment token from preset");
        assertEq(cfg.basePrice, 1e22);
        assertEq(cfg.maxRaise, 10_500_000);
        assertEq(cfg.liquidityBps, 8_000);
        assertEq(uint256(state), uint256(TokenAuction.AuctionState.ACTIVE));
    }

    function test_setLaunchPreset_onlyOwner() public {
        TokenAuction.LaunchPreset memory preset = _preset();
        vm.prank(stranger);
        vm.expectRevert(abi.encodeWithSelector(Ownable.OwnableUnauthorizedAccount.selector, stranger));
        auction.setLaunchPreset(preset);
    }

    function test_setLaunchPreset_validatesLikeCreateAuction() public {
        TokenAuction.LaunchPreset memory preset = _preset();
        preset.liquidityBps = auction.MIN_LIQUIDITY_BPS() - 1;
        vm.expectRevert("Invalid liquidity share");
        auction.setLaunchPreset(preset);

        preset = _preset();
        preset.paymentToken = address(0);
        vm.expectRevert("Zero payment token");
        auction.setLaunchPreset(preset);
    }

    // --- parameter validation ----------------------------------------------

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
