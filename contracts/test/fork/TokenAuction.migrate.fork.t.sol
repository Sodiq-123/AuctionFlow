pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../../src/TokenAuction.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract ForkUSDC is ERC20 {
    constructor() ERC20("Mock USDC", "mUSDC") {}

    function decimals() public pure override returns (uint8) {
        return 6;
    }

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
}

/// Trades directly against a pool, paying from its own balance.
contract Swapper is IUniswapV3SwapCallback {
    uint160 constant MIN_LIMIT = 4295128739 + 1;
    uint160 constant MAX_LIMIT = 1461446703485210103287273052203988822378723970342 - 1;

    function swap(IUniswapV3Pool pool, address token0, address token1, bool zeroForOne, uint256 amountIn) external {
        pool.swap(
            address(this), zeroForOne, int256(amountIn), zeroForOne ? MIN_LIMIT : MAX_LIMIT,
            abi.encode(token0, token1)
        );
    }

    function uniswapV3SwapCallback(int256 amount0Delta, int256 amount1Delta, bytes calldata data) external {
        (address t0, address t1) = abi.decode(data, (address, address));
        if (amount0Delta > 0) IERC20(t0).transfer(msg.sender, uint256(amount0Delta));
        if (amount1Delta > 0) IERC20(t1).transfer(msg.sender, uint256(amount1Delta));
    }
}

/// Migration against real Uniswap v3 on a Base mainnet fork. Skipped when
/// BASE_RPC_URL is not set (e.g. in CI).
///
/// Run with: forge test --match-path "test/fork/*"
abstract contract MigrateForkBase is Test {
    INonfungiblePositionManager constant NPM =
        INonfungiblePositionManager(0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1);
    uint256 constant FORK_BLOCK = 52_984_000;
    uint24 constant FEE = 10000;

    uint256 constant BASE_PRICE = 1e22; // 0.01 USDC per token (payment units × 1e18)
    uint256 constant SLOPE = 1e18; // +0.000001 USDC per token sold (× 1e18)
    uint256 constant MAX_RAISE = 10_500_000; // 10.5 USDC: exactly 1,000 tokens
    uint256 constant LIQUIDITY_BPS = 5_000;
    uint256 constant LP_FEE_SHARE_BPS = 2_000;

    TokenAuction auction;
    ForkUSDC usdc;
    Swapper swapper;

    address creator = makeAddr("creator");
    address buyer = makeAddr("buyer");
    address feeRecipient = makeAddr("feeRecipient");
    address attacker = makeAddr("attacker");

    /// Where the payment token lives decides whether it sorts before or
    /// after the auction token in the Uniswap pair.
    function paymentAddress() internal pure virtual returns (address);

    function setUp() public {
        string memory rpc = vm.envOr("BASE_RPC_URL", string(""));
        if (bytes(rpc).length == 0) {
            vm.skip(true);
            return;
        }
        vm.createSelectFork(rpc, FORK_BLOCK);

        deployCodeTo("TokenAuction.migrate.fork.t.sol:ForkUSDC", paymentAddress());
        usdc = ForkUSDC(paymentAddress());
        auction = new TokenAuction(feeRecipient, 250, NPM, IWETH9(address(0)));
        auction.setPaymentTokenAllowed(address(usdc), true);
        auction.setDefaultLpFeeShareBps(LP_FEE_SHARE_BPS);
        swapper = new Swapper();

        usdc.mint(buyer, 1_000e6);
        usdc.mint(attacker, 10_000_000e6);
        usdc.mint(address(swapper), 1_000e6);
    }

    // --- helpers -------------------------------------------------------------

    function _create() internal returns (uint256 id, AuctionToken token) {
        vm.prank(creator);
        id = auction.createAuction(
            TokenAuction.AuctionParams({
                name: "Demo",
                symbol: "DEMO",
                metadataURI: "ipfs://demo",
                maxSupply: 1_000_000e18,
                paymentToken: address(usdc),
                basePrice: BASE_PRICE,
                slope: SLOPE,
                maxRaise: MAX_RAISE,
                liquidityBps: LIQUIDITY_BPS
            })
        );
        (TokenAuction.AuctionConfig memory cfg,,,) = auction.auctions(id);
        token = cfg.token;
    }

    /// Buys past the cap so the purchase fills the auction and completes it.
    function _fill(uint256 id) internal {
        vm.startPrank(buyer);
        usdc.approve(address(auction), type(uint256).max);
        auction.buyTokens(id, 5_000e18, type(uint256).max);
        vm.stopPrank();
    }

    function _launch() internal returns (uint256 id, AuctionToken token) {
        (id, token) = _create();
        _fill(id);
    }

    function _tokenIsToken0(AuctionToken token) internal view returns (bool) {
        return address(token) < address(usdc);
    }

    function _sorted(AuctionToken token) internal view returns (address, address) {
        return _tokenIsToken0(token) ? (address(token), address(usdc)) : (address(usdc), address(token));
    }

    function _spot(uint256 id) internal view returns (uint256) {
        return auction.getSpotPrice(id);
    }

    /// Same encoding as TokenAuction._sqrtPriceX96, for setting up pools.
    /// `price` is payment units per whole token × 1e18, so payment wei per
    /// token wei is price / 1e36.
    function _sqrtPriceX96(uint256 price, bool tokenIsToken0) internal pure returns (uint160) {
        (uint256 num, uint256 den) = tokenIsToken0 ? (price, uint256(1e36)) : (uint256(1e36), price);
        return uint160(
            num / den < (1 << 64)
                ? Math.sqrt(Math.mulDiv(num, 1 << 192, den))
                : Math.sqrt(Math.mulDiv(num, 1 << 64, den)) << 64
        );
    }

    /// The pool's price, as payment units per whole auction token × 1e18.
    function _poolPrice(address pool, AuctionToken token) internal view returns (uint256) {
        (uint160 sqrtP,,,,,,) = IUniswapV3Pool(pool).slot0();
        uint256 sq = uint256(sqrtP) * sqrtP;
        return _tokenIsToken0(token) ? Math.mulDiv(sq, 1e36, 1 << 192) : Math.mulDiv(1 << 192, 1e36, sq);
    }

    /// An attacker initialises the pool before migration, at `price`.
    function _preInitialize(AuctionToken token, uint256 price) internal returns (address pool) {
        (address t0, address t1) = _sorted(token);
        vm.prank(attacker);
        pool = NPM.createAndInitializePoolIfNecessary(t0, t1, FEE, _sqrtPriceX96(price, _tokenIsToken0(token)));
    }

    function _floorTick(int24 tick) internal pure returns (int24) {
        int24 r = tick % 200;
        return r == 0 ? tick : (tick < 0 ? tick - r - 200 : tick - r);
    }

    // --- the happy path --------------------------------------------------------

    function test_migrate_opensPoolAtAuctionPriceAndLocksLiquidity() public {
        (uint256 id, AuctionToken token) = _launch();
        uint256 price = _spot(id);
        (,, uint256 raised,) = auction.auctions(id);
        uint256 liquidityShare = (raised * LIQUIDITY_BPS) / 10_000;
        uint256 fees = auction.protocolFees(address(usdc));

        vm.prank(buyer); // anyone may migrate
        auction.migrate(id);

        (, TokenAuction.AuctionState state,,) = auction.auctions(id);
        assertEq(uint256(state), uint256(TokenAuction.AuctionState.MIGRATED));

        address pool = auction.poolOf(id);
        uint256 position = auction.positionId(id);
        assertTrue(pool != address(0) && position != 0, "pool and position recorded");
        assertEq(IERC721(address(NPM)).ownerOf(position), address(auction), "position locked in the contract");

        (uint160 sqrtP,,,,,,) = IUniswapV3Pool(pool).slot0();
        assertEq(sqrtP, _sqrtPriceX96(price, _tokenIsToken0(token)), "pool opens at the auction's final price");

        // The pool holds the liquidity share; Uniswap's rounding dust is credited to the creator.
        uint256 poolUsdc = usdc.balanceOf(pool);
        uint256 dust = auction.claimable(address(usdc), creator);
        assertLe(poolUsdc, liquidityShare);
        assertEq(poolUsdc + dust, liquidityShare, "dust credited to creator");

        // Unused tokens were burned, the supply is fixed, and the token is tradeable.
        assertEq(token.balanceOf(address(auction)), 0, "leftover tokens burned");
        assertEq(token.owner(), address(0), "ownership renounced");
        assertTrue(token.transfersEnabled());
        vm.prank(buyer);
        token.transfer(attacker, 1e18);

        // The creator's share, the dust and the protocol's fees stay custodied until withdrawn.
        assertEq(usdc.balanceOf(address(auction)), raised - liquidityShare + dust + fees);
        assertEq(auction.custodied(address(usdc)), raised - liquidityShare + dust + fees);
    }

    /// The standard launch preset on Base Sepolia: a billion tokens that
    /// graduate at 10 USDC near 0.00000003 USDC each. That price once
    /// overflowed the pool price encoding whenever the token was token1.
    function test_migrate_cheapStandardLaunch() public {
        auction.setLaunchPreset(
            TokenAuction.LaunchPreset({
                paymentToken: address(usdc),
                maxSupply: 1_000_000_000e18,
                basePrice: 2e15,
                slope: 4e7,
                maxRaise: 10e6,
                liquidityBps: 8_000
            })
        );
        vm.prank(creator);
        uint256 id = auction.launch("Cheap", "CHEAP", "ipfs://cheap", address(usdc));
        vm.startPrank(buyer);
        usdc.approve(address(auction), type(uint256).max);
        auction.buyTokens(id, 1_000_000_000e18, type(uint256).max); // fills to the threshold
        vm.stopPrank();

        (TokenAuction.AuctionConfig memory cfg,,,) = auction.auctions(id);
        uint256 price = _spot(id);
        auction.migrate(id);

        address pool = auction.poolOf(id);
        assertTrue(pool != address(0) && auction.positionId(id) != 0, "pool and position recorded");
        (uint160 sqrtP,,,,,,) = IUniswapV3Pool(pool).slot0();
        assertEq(sqrtP, _sqrtPriceX96(price, _tokenIsToken0(cfg.token)), "pool opens at the final price");
        assertApproxEqAbs(usdc.balanceOf(pool), 8e6, 1, "80% of the raise is in the pool");
        assertLe(cfg.token.totalSupply(), 1_000_000_000e18);
    }

    function test_withdrawProceeds_beforeOrAfterMigration() public {
        (uint256 id,) = _launch();
        (,, uint256 raised,) = auction.auctions(id);
        uint256 creatorShare = raised - (raised * LIQUIDITY_BPS) / 10_000;

        vm.prank(creator);
        auction.withdrawProceeds(id);
        assertEq(usdc.balanceOf(creator), creatorShare);

        auction.migrate(id);
        uint256 dust = auction.claimable(address(usdc), creator);
        if (dust > 0) {
            vm.prank(creator);
            auction.claim(usdc);
        }
        auction.claimProtocolFees(usdc);
        assertEq(usdc.balanceOf(address(auction)), 0, "everything paid out or in the pool");
        assertEq(auction.custodied(address(usdc)), 0);
    }

    // --- pre-initialised pools -----------------------------------------------

    /// The harmful case: a pool below the auction price would sell the locked
    /// liquidity cheaply. Correcting it is free and exact.
    function test_migrate_correctsPoolInitializedTooLow() public {
        (uint256 id, AuctionToken token) = _create();
        address pool = _preInitialize(token, BASE_PRICE / 100);
        _fill(id);
        uint256 price = _spot(id);

        auction.migrate(id);

        assertEq(auction.poolOf(id), pool, "existing pool reused");
        (uint160 sqrtP,,,,,,) = IUniswapV3Pool(pool).slot0();
        assertEq(sqrtP, _sqrtPriceX96(price, _tokenIsToken0(token)), "moved exactly to the auction price");
        assertTrue(auction.positionId(id) != 0);
    }

    function test_migrate_correctsEmptyPoolInitializedTooHigh() public {
        (uint256 id, AuctionToken token) = _create();
        address pool = _preInitialize(token, BASE_PRICE * 1_000);
        _fill(id);
        uint256 price = _spot(id);

        auction.migrate(id);

        (uint160 sqrtP,,,,,,) = IUniswapV3Pool(pool).slot0();
        assertEq(sqrtP, _sqrtPriceX96(price, _tokenIsToken0(token)), "empty range: corrected exactly");
    }

    /// An attacker prices the pool high and parks USDC liquidity between that
    /// price and the auction's, so correcting means selling into them. The
    /// migration still completes, and never opens the pool below the auction
    /// price.
    function test_migrate_cannotBeBlockedByLiquidityAboveAuctionPrice() public {
        (uint256 id, AuctionToken token) = _create();
        address pool = _preInitialize(token, BASE_PRICE * 50);
        (, int24 tick,,,,,) = IUniswapV3Pool(pool).slot0();
        bool tokenIsToken0 = _tokenIsToken0(token);
        (address t0, address t1) = _sorted(token);

        // USDC-only liquidity on the side the price must cross to reach the
        // auction price: below the tick if the token is token0, above otherwise.
        int24 lower = tokenIsToken0 ? _floorTick(tick) - 46_000 : _floorTick(tick) + 200;
        int24 upper = tokenIsToken0 ? _floorTick(tick) : _floorTick(tick) + 46_200;
        vm.startPrank(attacker);
        usdc.approve(address(NPM), type(uint256).max);
        NPM.mint(
            INonfungiblePositionManager.MintParams({
                token0: t0,
                token1: t1,
                fee: FEE,
                tickLower: lower,
                tickUpper: upper,
                amount0Desired: tokenIsToken0 ? 0 : 1_000_000e6,
                amount1Desired: tokenIsToken0 ? 1_000_000e6 : 0,
                amount0Min: 0,
                amount1Min: 0,
                recipient: attacker,
                deadline: block.timestamp
            })
        );
        vm.stopPrank();

        _fill(id);
        uint256 price = _spot(id);
        auction.migrate(id);

        assertTrue(auction.positionId(id) != 0, "migration completed");
        assertGe(_poolPrice(pool, token) * 1e6, price * (1e6 - 1), "never below the auction price");
    }

    // --- trading and fees ------------------------------------------------------

    function test_collectFees_splitsTradingFees() public {
        (uint256 id, AuctionToken token) = _launch();
        auction.migrate(id);
        IUniswapV3Pool pool = IUniswapV3Pool(auction.poolOf(id));
        (address t0, address t1) = _sorted(token);
        bool tokenIsToken0 = _tokenIsToken0(token);

        // Trade both ways so fees accrue in both tokens.
        vm.prank(buyer);
        token.transfer(address(swapper), 100e18);
        swapper.swap(pool, t0, t1, tokenIsToken0, 100e18); // sell tokens
        swapper.swap(pool, t0, t1, !tokenIsToken0, 1e6);   // buy with 1 USDC

        uint256 creatorUsdc = auction.claimable(address(usdc), creator);
        uint256 protocolUsdc = auction.protocolFees(address(usdc));
        (uint256 tokenFees, uint256 paymentFees) = auction.collectFees(id);

        assertGt(tokenFees, 0, "token fees accrued");
        assertGt(paymentFees, 0, "USDC fees accrued");
        uint256 protocolShare = (paymentFees * LP_FEE_SHARE_BPS) / 10_000;
        uint256 protocolTokens = (tokenFees * LP_FEE_SHARE_BPS) / 10_000;
        assertEq(auction.protocolFees(address(usdc)) - protocolUsdc, protocolShare, "protocol share");
        assertEq(auction.claimable(address(usdc), creator) - creatorUsdc, paymentFees - protocolShare, "creator share");
        assertEq(auction.protocolFees(address(token)), protocolTokens);
        assertEq(auction.claimable(address(token), creator), tokenFees - protocolTokens);
        assertEq(usdc.balanceOf(address(auction)), auction.custodied(address(usdc)), "custody untouched");
        assertEq(token.balanceOf(address(auction)), auction.custodied(address(token)), "token fees custodied");

        // Both sides claim their share of both tokens.
        vm.startPrank(creator);
        auction.claim(usdc);
        auction.claim(IERC20(address(token)));
        vm.stopPrank();
        auction.claimProtocolFees(IERC20(address(token)));
        assertEq(token.balanceOf(creator), tokenFees - protocolTokens, "creator claimed token fees");
        assertEq(token.balanceOf(feeRecipient), protocolTokens, "protocol claimed token fees");
        assertEq(token.balanceOf(address(auction)), 0);
    }
}

/// Payment token sorts first: the auction token is token1.
contract MigrateForkPaymentToken0 is MigrateForkBase {
    function paymentAddress() internal pure override returns (address) {
        return address(uint160(0x10000));
    }
}

/// Payment token sorts last: the auction token is token0.
contract MigrateForkPaymentToken1 is MigrateForkBase {
    function paymentAddress() internal pure override returns (address) {
        return address(uint160(type(uint160).max - 0xFFFF));
    }
}
