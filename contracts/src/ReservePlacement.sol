pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";
import "./AuctionToken.sol";
import "./interfaces/IUniswapV3.sol";

/// @notice Where migration puts an auction's reserve in its Uniswap v3 pool.
/// @dev    An external library: deployed once and called with DELEGATECALL,
///         so it runs as TokenAuction (which holds the tokens, the approvals
///         and the positions) without counting against its size limit.
library ReservePlacement {
    /// @dev Pool fee tier for migrated liquidity: 1% (tick spacing 200).
    uint24 internal constant POOL_FEE = 10000;
    /// @dev TickMath's MIN/MAX_TICK rounded inward to a multiple of 200.
    int24 internal constant MIN_USABLE_TICK = -887200;
    int24 internal constant MAX_USABLE_TICK = 887200;
    /// @dev log2(sqrt(1.0001)) × 2^64: converts a binary logarithm of a
    ///      sqrt price to Uniswap ticks.
    int256 internal constant LOG2_SQRT_TICK_X64 = 1330584781654114;

    /// @dev The reserve covers prices from the auction's final price down to
    ///      1/10,000 of it (1.0001^-92200 ≈ 0.0001), not all the way to
    ///      Uniswap's lowest tick. Each tick holds at most ~3.8e34 liquidity,
    ///      and near the extreme ticks a payment-only position can fill that
    ///      cap for almost nothing, after which Uniswap refuses any position
    ///      using the tick. Here, filling it costs at least ~380,000 times the
    ///      reserve (see TokenAuction.MAX_POOL_LIQUIDITY), for no gain.
    int24 internal constant RESERVE_SPAN = 92200;

    /// @dev Working state for a migration, bundled to keep the stack shallow.
    struct Migration {
        AuctionToken token;
        IERC20 payment;
        bool tokenIsToken0;
        uint160 targetSqrtPrice;
        address pool;
    }

    /// @notice Add the reserve to the pool, never selling tokens below the
    ///         auction price or buying them above it. Returns the position
    ///         holding the payment, or id 0 if Uniswap refused it.
    /// @dev    If the pool is at the target price, that is one position from
    ///         RESERVE_SPAN below the price out to the end of the token side.
    ///         If it was opened above the target (see
    ///         TokenAuction._raisePoolPrice), the payment goes in a position
    ///         ending at the target and the tokens in one starting above the
    ///         pool's price. The token one is optional and skipped if Uniswap
    ///         refuses it, which only burns tokens no one could buy cheaply.
    ///
    ///         Ticks: a range wholly below the pool's tick holds only token1,
    ///         wholly above it only token0. When the token is token1 its price
    ///         rises as the tick falls, so every range is mirrored.
    function place(INonfungiblePositionManager positionManager, Migration memory m, uint256 tokens, uint256 payment)
        external
        returns (uint256 tokenId, uint256 usedToken, uint256 usedPayment)
    {
        (int24 edge, int24 far) = _reserveTicks(m);
        (uint160 sqrtP, int24 tick,,,,,) = IUniswapV3Pool(m.pool).slot0();
        if (sqrtP == m.targetSqrtPrice) {
            (int24 lower, int24 upper) = m.tokenIsToken0 ? (far, MAX_USABLE_TICK) : (MIN_USABLE_TICK, far);
            return _mint(positionManager, m, lower, upper, tokens, payment);
        }
        (int24 lo, int24 hi) = m.tokenIsToken0 ? (far, edge) : (edge, far);
        (tokenId,, usedPayment) = _mint(positionManager, m, lo, hi, 0, payment);
        tick = floorTick(tick);
        (lo, hi) = m.tokenIsToken0 ? (tick + 200, MAX_USABLE_TICK) : (MIN_USABLE_TICK, tick);
        if (lo < hi) (, usedToken,) = _mint(positionManager, m, lo, hi, tokens, 0);
    }

    /// @dev The reserve's two ends: `edge` at the target's tick, pushed past
    ///      tickAt's one-tick error to the payment side and rounded outward
    ///      to the tick spacing, and `far` RESERVE_SPAN beyond it.
    function _reserveTicks(Migration memory m) private pure returns (int24 edge, int24 far) {
        int24 t = tickAt(m.targetSqrtPrice);
        edge = m.tokenIsToken0 ? floorTick(t - 2) : floorTick(t + 2) + 200;
        far = m.tokenIsToken0 ? edge - RESERVE_SPAN : edge + RESERVE_SPAN;
        if (far < MIN_USABLE_TICK) far = MIN_USABLE_TICK;
        if (far > MAX_USABLE_TICK) far = MAX_USABLE_TICK;
    }

    /// @notice Uniswap's tick for a sqrt price, to within one tick: the log
    ///         base sqrt(1.0001) of sqrtPriceX96 / 2^96, from a binary
    ///         logarithm with 24 fractional bits (the integer part from the
    ///         highest set bit, each fractional bit by squaring the mantissa).
    function tickAt(uint160 sqrtPriceX96) public pure returns (int24) {
        uint256 msb = Math.log2(sqrtPriceX96);
        // The mantissa, in [1, 2) with 127 fractional bits.
        uint256 r = msb > 127 ? uint256(sqrtPriceX96) >> (msb - 127) : uint256(sqrtPriceX96) << (127 - msb);
        int256 log2 = (int256(msb) - 96) << 64;
        for (uint256 bit = 1 << 63; bit > 1 << 39; bit >>= 1) {
            r = (r * r) >> 127;
            if (r >= 1 << 128) {
                log2 |= int256(bit);
                r >>= 1;
            }
        }
        return int24(log2 / LOG2_SQRT_TICK_X64);
    }

    /// @dev Round a tick down to a multiple of the 1% tier's spacing.
    function floorTick(int24 tick) internal pure returns (int24) {
        int24 r = tick % 200;
        return r < 0 ? tick - r - 200 : tick - r;
    }

    function sorted(Migration memory m) internal pure returns (address token0, address token1) {
        return m.tokenIsToken0 ? (address(m.token), address(m.payment)) : (address(m.payment), address(m.token));
    }

    /// @dev Mint a position held for good. Returns id 0 if Uniswap rejects
    ///      it. Minimums can be zero: the pool's price was read in this same
    ///      transaction, so there is no window in which it can move.
    function _mint(
        INonfungiblePositionManager positionManager,
        Migration memory m,
        int24 lower,
        int24 upper,
        uint256 tokens,
        uint256 payment
    ) private returns (uint256 tokenId, uint256 usedToken, uint256 usedPayment) {
        (address t0, address t1) = sorted(m);
        try positionManager.mint(
            INonfungiblePositionManager.MintParams({
                token0: t0,
                token1: t1,
                fee: POOL_FEE,
                tickLower: lower,
                tickUpper: upper,
                amount0Desired: m.tokenIsToken0 ? tokens : payment,
                amount1Desired: m.tokenIsToken0 ? payment : tokens,
                amount0Min: 0,
                amount1Min: 0,
                recipient: address(this),
                deadline: block.timestamp
            })
        ) returns (uint256 id, uint128, uint256 used0, uint256 used1) {
            (tokenId, usedToken, usedPayment) = m.tokenIsToken0 ? (id, used0, used1) : (id, used1, used0);
        } catch {}
    }
}
