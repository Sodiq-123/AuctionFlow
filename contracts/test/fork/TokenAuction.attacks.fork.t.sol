pragma solidity ^0.8.24;

import "./TokenAuction.migrate.fork.t.sol";
import "../../src/ReservePlacement.sol";

interface IPoolRaw {
    function mint(address recipient, int24 tickLower, int24 tickUpper, uint128 amount, bytes calldata data)
        external
        returns (uint256 amount0, uint256 amount1);
    function maxLiquidityPerTick() external view returns (uint128);
    function token0() external view returns (address);
    function token1() external view returns (address);
}

/// Adds raw liquidity straight to a pool, paying from its own balance.
contract RawMinter {
    function mint(address pool, int24 lower, int24 upper, uint128 liquidity) external returns (uint256, uint256) {
        return IPoolRaw(pool).mint(address(this), lower, upper, liquidity, "");
    }

    function uniswapV3MintCallback(uint256 owed0, uint256 owed1, bytes calldata) external {
        if (owed0 > 0) IERC20(IPoolRaw(msg.sender).token0()).transfer(msg.sender, owed0);
        if (owed1 > 0) IERC20(IPoolRaw(msg.sender).token1()).transfer(msg.sender, owed1);
    }
}

/// Attacks on migration found in review, against real Uniswap v3 on a Base
/// mainnet fork. Each once worked; these keep them from coming back.
abstract contract MigrateAttacksForkBase is MigrateForkBase {
    /// Base's per-transaction gas cap (EIP-7825), less the 21k intrinsic cost.
    uint256 constant TX_GAS = 16_777_216 - 21_000;

    function _reserve(uint256 id) internal view returns (uint256) {
        (TokenAuction.AuctionConfig memory cfg,, uint256 raised,) = auction.auctions(id);
        return (raised * cfg.liquidityBps) / 10_000;
    }

    function _token(uint256 id) internal view returns (AuctionToken) {
        (TokenAuction.AuctionConfig memory cfg,,,) = auction.auctions(id);
        return cfg.token;
    }

    /// Migrate as one Base transaction would: within its gas cap.
    function _migrateWithinGasCap(uint256 id) internal returns (bool ok) {
        (ok,) = address(auction).call{gas: TX_GAS}(abi.encodeCall(auction.migrate, (id)));
    }

    /// Fill a tick to Uniswap's per-tick liquidity cap with a payment-only
    /// range next to it. Returns the payment it took.
    function _fillTick(address pool, AuctionToken token, int24 tick) internal returns (uint256 spent) {
        RawMinter minter = new RawMinter();
        usdc.mint(address(minter), 1e40);
        uint128 cap = IPoolRaw(pool).maxLiquidityPerTick();
        (uint256 a0, uint256 a1) = _tokenIsToken0(token)
            ? minter.mint(pool, tick, tick + 200, cap) // below the price: USDC only
            : minter.mint(pool, tick - 200, tick, cap); // above it: USDC only
        spent = a0 + a1;
    }

    /// The reserve's far tick, as ReservePlacement computes it.
    function _farTick(uint256 id, AuctionToken token) internal view returns (int24) {
        bool t0 = _tokenIsToken0(token);
        int24 t = ReservePlacement.tickAt(_sqrtPriceX96(_spot(id), t0));
        int24 edge = t0 ? ReservePlacement.floorTick(t - 2) : ReservePlacement.floorTick(t + 2) + 200;
        return t0 ? edge - 92_200 : edge + 92_200;
    }

    /// Buy with `spend` USDC straight from the pool; returns tokens received.
    function _buyFrom(address pool, AuctionToken token, uint256 spend) internal returns (uint256 got) {
        (address t0, address t1) = _sorted(token);
        uint256 before = token.balanceOf(address(swapper));
        swapper.swap(IUniswapV3Pool(pool), t0, t1, !_tokenIsToken0(token), spend);
        got = token.balanceOf(address(swapper)) - before;
    }

    // --- Uniswap refusing the position -------------------------------------

    /// The reserve once ran to Uniswap's extreme tick, where a payment-only
    /// position fills the tick's liquidity cap for ~2e13 raw units (0.00002
    /// ETH, or a $21M flash loan of USDC). Uniswap then refused migration's
    /// position and the reserve was credited to the creator: the whole raise
    /// for them, no pool for holders.
    function test_attack_fillingTheExtremeTickNoLongerRefusesThePosition() public {
        uint256 id = _launchCheap();
        AuctionToken token = _token(id);
        address pool = _preInitialize(token, _spot(id));
        uint256 spent = _fillTick(pool, token, _tokenIsToken0(token) ? int24(-887200) : int24(887200));
        assertLt(spent, 1e14, "the extreme tick is cheap to fill");

        assertTrue(_migrateWithinGasCap(id), "migration completes");
        assertTrue(auction.positionId(id) != 0, "position placed");
        assertEq(auction.claimable(address(usdc), creator), 0, "nothing credited to the creator");
        assertApproxEqAbs(usdc.balanceOf(pool) - spent, _reserve(id), 2, "the whole reserve is in the pool");
    }

    /// The tick the reserve does use costs far more to fill than the reserve
    /// is worth, and filling it only stalls migration: nothing is paid out.
    function test_attack_fillingTheReservesTickCostsOverWhatItBlocks() public {
        uint256 id = _launchCheap();
        AuctionToken token = _token(id);
        address pool = _preInitialize(token, _spot(id));
        uint256 spent = _fillTick(pool, token, _farTick(id, token));
        emit log_named_uint("USDC raw units to fill the reserve's tick", spent);
        assertGt(spent, _reserve(id) * 100_000, "over 100,000 times the reserve");

        vm.expectRevert("Liquidity not placed");
        auction.migrate(id);
        assertEq(auction.claimable(address(usdc), creator), 0, "nothing credited");
    }

    // --- gas ----------------------------------------------------------------

    /// Correcting a pool opened too high once sold through every position
    /// parked above the target, ~27k gas each: 620 dust positions (~$1-2 of
    /// gas) pushed migration past Base's transaction gas cap for good. A pool
    /// opened too high is no longer corrected.
    function test_attack_dustPositionsCannotPushMigratePastTheGasCap() public {
        uint256 id = _launchCheap();
        AuctionToken token = _token(id);
        bool t0 = _tokenIsToken0(token);
        int24 target = _tickAt(token, _sqrtPriceX96(_spot(id), t0));
        address pool = _preInitialize(token, _spot(id) * 1_000_000);
        RawMinter minter = new RawMinter();
        usdc.mint(address(minter), 1e30);
        int24 start = t0 ? _ceilTick(target) : _floorTick(target);
        for (uint256 i; i < 620; i++) {
            int24 lo = t0 ? start + int24(int256(i)) * 200 : start - int24(int256(i + 1)) * 200;
            minter.mint(pool, lo, lo + 200, 1);
        }

        uint256 gasBefore = gasleft();
        assertTrue(_migrateWithinGasCap(id), "migration fits in one transaction");
        emit log_named_uint("migrate gas", gasBefore - gasleft());
        assertTrue(auction.positionId(id) != 0, "position placed");
    }

    // --- any starting pool ----------------------------------------------------

    /// Whatever price the pool was opened at, and whatever USDC was parked
    /// beside it, migration fits in one transaction, puts the whole reserve
    /// in the pool, pays the creator nothing, never sells the reserve's
    /// tokens below the auction price, and lets a holder sell near it.
    function testFuzz_attack_anyStartingPool(uint256 factorBps, bool above, uint256 parked) public {
        uint256 id = _launchCheap();
        AuctionToken token = _token(id);
        uint256 price = _spot(id);
        factorBps = bound(factorBps, 10_001, 10_000 * 1_000_000); // 1.0001x to 1,000,000x
        uint256 opened = above ? (price * factorBps) / 10_000 : (price * 10_000) / factorBps;
        parked = bound(parked, 0, 1_000_000e6);
        // Parking needs room between the two prices for a tick-spaced range.
        if (above && parked > 1e3 && factorBps >= 10_500) {
            _park(token, price, factorBps - 10_000, parked);
        } else {
            _preInitialize(token, opened);
        }

        assertTrue(_migrateWithinGasCap(id), "migration fits in one transaction");
        address pool = auction.poolOf(id);
        assertTrue(auction.positionId(id) != 0, "position placed");
        assertEq(auction.claimable(address(usdc), creator), 0, "nothing credited to the creator");
        assertEq(token.balanceOf(address(auction)), 0, "spare tokens burned");
        assertGe(usdc.balanceOf(pool) + 2, _reserve(id), "the whole reserve is in the pool");

        // 0.01 USDC buys no more tokens than the auction price allows.
        uint256 got = _buyFrom(pool, token, 10_000);
        assertLe(got * price, 10_000 * 1e36, "no tokens below the auction price");

        // A holder can sell near the auction price (within the pool's fee,
        // the reserve's edge and the trade's impact).
        uint256 sale = 1_000e18;
        uint256 received = _sellInto(pool, token, sale);
        assertGe(received, (sale * price * 96) / 100 / 1e36, "holders exit near the auction price");
    }

    // --- the tick estimate ----------------------------------------------------

    /// ReservePlacement.tickAt agrees with Uniswap's own tick for any price,
    /// to within one tick (the margin ReservePlacement allows for).
    function testFuzz_tickAt_matchesUniswap(uint160 sqrtP) public {
        sqrtP = uint160(bound(sqrtP, 4295128739, 1461446703485210103287273052203988822378723970342 - 1));
        ForkUSDC a = new ForkUSDC();
        ForkUSDC b = new ForkUSDC();
        (address t0, address t1) = address(a) < address(b) ? (address(a), address(b)) : (address(b), address(a));
        (, int24 tick,,,,,) = IUniswapV3Pool(NPM.createAndInitializePoolIfNecessary(t0, t1, 3000, sqrtP)).slot0();
        int24 estimate = ReservePlacement.tickAt(sqrtP);
        assertGe(estimate, tick - 1, "at most one tick low");
        assertLe(estimate, tick + 1, "at most one tick high");
    }
}

contract MigrateAttacksForkPaymentToken0 is MigrateAttacksForkBase {
    function paymentAddress() internal pure override returns (address) {
        return address(uint160(0x10000));
    }
}

contract MigrateAttacksForkPaymentToken1 is MigrateAttacksForkBase {
    function paymentAddress() internal pure override returns (address) {
        return address(uint160(type(uint160).max - 0xFFFF));
    }
}
