pragma solidity ^0.8.24;
import "forge-std/Test.sol";
import "../../src/TokenAuction.sol";

contract SqrtPriceHarness is TokenAuction {
    constructor() TokenAuction(address(1), 0, INonfungiblePositionManager(address(1))) {}

    function sqrtPriceX96(uint256 price, bool tokenIsToken0) external pure returns (uint160) {
        return _sqrtPriceX96(price, tokenIsToken0);
    }
}

/// The Uniswap price a pool opens at, from a curve price in payment units per
/// whole token × 1e18 (WAD). With USDC, 1e24 is 1 USDC per token.
contract SqrtPriceTest is Test {
    /// The highest spot price _validateCurve allows:
    /// MAX_PRICE_PARAM + MAX_PRICE_PARAM × MAX_SUPPLY_BOUND / 1e18.
    uint256 constant MAX_SPOT = 1e63;

    SqrtPriceHarness harness;

    function setUp() public {
        harness = new SqrtPriceHarness();
    }

    /// Back from sqrtPriceX96 to a WAD price, without squaring a root that
    /// may not fit in 128 bits.
    function _decode(uint160 sqrtP, bool tokenIsToken0) internal pure returns (uint256) {
        uint256 s = sqrtP;
        if (tokenIsToken0) {
            return s < (1 << 128)
                ? Math.mulDiv(s * s, 1e36, 1 << 192)
                : Math.mulDiv(Math.mulDiv(s, s, 1 << 96), 1e36, 1 << 96);
        }
        return s < (1 << 128)
            ? Math.mulDiv(1 << 192, 1e36, s * s)
            : Math.mulDiv(Math.mulDiv(1e36, 1 << 96, s), 1 << 96, s);
    }

    /// The standard launch on Base Sepolia graduates at this price, and its
    /// migration overflowed: USDC's address sorts first, so the token is
    /// token1 and the pool price is the inverse, ~3.5e19 token wei per unit.
    function test_cheapTokenAsToken1() public view {
        uint256 price = 28_354_893_283_790_773; // ~0.0000000284 USDC per token
        uint160 sqrtP = harness.sqrtPriceX96(price, false);
        assertApproxEqRel(_decode(sqrtP, false), price, 1e3, "decodes to the curve price");
    }

    function test_expensiveTokenAsToken0() public view {
        uint160 sqrtP = harness.sqrtPriceX96(MAX_SPOT, true);
        assertApproxEqRel(_decode(sqrtP, true), MAX_SPOT, 1e3, "decodes to the curve price");
    }

    /// Every price a curve can reach encodes, in either ordering, to within
    /// a billionth of itself.
    function testFuzz_encodesEveryReachablePrice(uint256 price, bool tokenIsToken0) public view {
        price = bound(price, 1e12, MAX_SPOT);
        uint160 sqrtP = harness.sqrtPriceX96(price, tokenIsToken0);
        assertApproxEqRel(_decode(sqrtP, tokenIsToken0), price, 1e9);
    }

    /// Below 1e12 (a trillionth of a USDC unit per token) the decode above
    /// loses precision, but the encoding must still succeed.
    function testFuzz_tinyPricesStillEncode(uint256 price, bool tokenIsToken0) public view {
        price = bound(price, 1, 1e12);
        harness.sqrtPriceX96(price, tokenIsToken0);
    }

    /// The root is rounded down, never up.
    function test_roundsDown() public view {
        assertEq(harness.sqrtPriceX96(1e36, true), 1 << 96, "a ratio of 1 is exact");
        assertEq(harness.sqrtPriceX96(1e36, false), 1 << 96, "a ratio of 1 is exact");
    }
}
