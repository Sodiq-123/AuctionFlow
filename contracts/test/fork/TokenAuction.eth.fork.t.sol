pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../../src/TokenAuction.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

/// Trades directly against a pool, paying from its own balance.
contract EthForkSwapper is IUniswapV3SwapCallback {
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

/// An ETH-priced standard launch against real WETH and Uniswap v3 on a Base
/// mainnet fork: buy and sell with plain ETH, graduate, migrate, trade on
/// Uniswap, collect and claim. Skipped when BASE_RPC_URL is not set.
///
/// Run with: forge test --match-path "test/fork/*"
contract EthLaunchForkTest is Test {
    INonfungiblePositionManager constant NPM =
        INonfungiblePositionManager(0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1);
    IWETH9 constant WETH = IWETH9(0x4200000000000000000000000000000000000006);
    uint256 constant FORK_BLOCK = 52_984_000;

    /// The Base Sepolia USDC preset's curve scaled to a 2 ETH goal: the same
    /// ~659M tokens sold at graduation and the same 14.2x price rise.
    uint256 constant BASE_PRICE = 4e26;
    uint256 constant SLOPE = 8e18;
    uint256 constant MAX_RAISE = 2 ether;
    uint256 constant LIQUIDITY_BPS = 8_000;
    uint256 constant FEE_BPS = 100;
    uint256 constant LP_FEE_SHARE_BPS = 2_000;

    TokenAuction auction;
    EthForkSwapper swapper;

    address creator = makeAddr("creator");
    address buyer = makeAddr("buyer");
    address feeRecipient = makeAddr("feeRecipient");

    function setUp() public {
        string memory rpc = vm.envOr("BASE_RPC_URL", string(""));
        if (bytes(rpc).length == 0) {
            vm.skip(true);
            return;
        }
        vm.createSelectFork(rpc, FORK_BLOCK);

        auction = new TokenAuction(feeRecipient, FEE_BPS, NPM, WETH);
        auction.setPaymentTokenAllowed(address(WETH), true);
        auction.setDefaultLpFeeShareBps(LP_FEE_SHARE_BPS);
        auction.setLaunchPreset(
            TokenAuction.LaunchPreset({
                paymentToken: address(WETH),
                maxSupply: 1_000_000_000e18,
                basePrice: BASE_PRICE,
                slope: SLOPE,
                maxRaise: MAX_RAISE,
                liquidityBps: LIQUIDITY_BPS
            })
        );
        swapper = new EthForkSwapper();
        vm.deal(buyer, 10 ether);
    }

    function _launch() internal returns (uint256 id, AuctionToken token) {
        vm.prank(creator);
        id = auction.launch("Eth Coin", "ETHC", "ipfs://eth-coin", address(WETH));
        (TokenAuction.AuctionConfig memory cfg,,,) = auction.auctions(id);
        token = cfg.token;
    }

    function _sqrtPriceX96(uint256 price, bool tokenIsToken0) internal pure returns (uint160) {
        (uint256 num, uint256 den) = tokenIsToken0 ? (price, uint256(1e36)) : (uint256(1e36), price);
        return uint160(
            num / den < (1 << 64)
                ? Math.sqrt(Math.mulDiv(num, 1 << 192, den))
                : Math.sqrt(Math.mulDiv(num, 1 << 64, den)) << 64
        );
    }

    function test_ethLaunch_fullLifecycle() public {
        (uint256 id, AuctionToken token) = _launch();

        // Buy and sell on the curve with plain ETH.
        vm.startPrank(buyer);
        auction.buyTokensWithETH{value: 0.5 ether}(id, 100_000_000e18);
        auction.sellTokensForETH(id, 40_000_000e18, 0);
        vm.stopPrank();
        assertEq(token.balanceOf(buyer), 60_000_000e18);
        assertEq(address(auction).balance, 0, "no ETH held between calls");

        // Overshoot the goal: the buy fills to it and the rest comes back.
        vm.prank(buyer);
        auction.buyTokensWithETH{value: 5 ether}(id, 1_000_000_000e18);
        (, TokenAuction.AuctionState state, uint256 raised, uint256 sold) = auction.auctions(id);
        assertEq(uint256(state), uint256(TokenAuction.AuctionState.COMPLETED));
        assertApproxEqAbs(raised, MAX_RAISE, 2, "graduated at the goal");
        assertApproxEqRel(sold, 659_000_000e18, 0.01e18, "about 659M tokens sold");
        assertGt(buyer.balance, 10 ether - 2.1 ether, "unused ETH refunded");
        assertEq(WETH.balanceOf(address(auction)), auction.custodied(address(WETH)), "custody matches holdings");

        // Migrate into a real WETH pool at the curve's final price.
        uint256 price = auction.getSpotPrice(id);
        bool tokenIsToken0 = address(token) < address(WETH);
        auction.migrate(id);
        address pool = auction.poolOf(id);
        assertTrue(pool != address(0) && auction.positionId(id) != 0, "pool and position recorded");
        assertEq(IERC721(address(NPM)).ownerOf(auction.positionId(id)), address(auction), "liquidity locked");
        (uint160 sqrtP,,,,,,) = IUniswapV3Pool(pool).slot0();
        assertEq(sqrtP, _sqrtPriceX96(price, tokenIsToken0), "pool opens at the final price");
        assertApproxEqAbs(WETH.balanceOf(pool), (raised * LIQUIDITY_BPS) / 10_000, 1e6, "80% of the raise in the pool");

        // The creator's 20% is paid in WETH.
        vm.prank(creator);
        auction.withdrawProceeds(id);
        assertEq(WETH.balanceOf(creator), raised - (raised * LIQUIDITY_BPS) / 10_000);

        // Trade on Uniswap both ways, then collect and claim the fees.
        (address t0, address t1) = tokenIsToken0 ? (address(token), address(WETH)) : (address(WETH), address(token));
        vm.deal(address(swapper), 0.1 ether);
        vm.prank(address(swapper));
        WETH.deposit{value: 0.1 ether}();
        swapper.swap(IUniswapV3Pool(pool), t0, t1, !tokenIsToken0, 0.1 ether); // buy with WETH
        vm.prank(buyer);
        token.transfer(address(swapper), 10_000_000e18);
        swapper.swap(IUniswapV3Pool(pool), t0, t1, tokenIsToken0, 10_000_000e18); // sell tokens

        (uint256 tokenFees, uint256 paymentFees) = auction.collectFees(id);
        assertGt(tokenFees, 0);
        assertGt(paymentFees, 0);
        uint256 protocolWeth = auction.protocolFees(address(WETH));
        vm.prank(creator);
        auction.claim(WETH);
        auction.claimProtocolFees(WETH);
        assertEq(WETH.balanceOf(feeRecipient), protocolWeth, "protocol fees paid in WETH");
        assertEq(WETH.balanceOf(address(auction)), auction.custodied(address(WETH)));
        assertEq(auction.custodied(address(WETH)), 0, "everything paid out or in the pool");
    }
}
