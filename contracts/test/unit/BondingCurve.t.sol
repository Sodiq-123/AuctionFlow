pragma solidity ^0.8.24;
import "forge-std/Test.sol";
import "../../src/BondingCurve.sol";

contract BondingCurveTest is Test {
    // Test: buying 1 token at supply = 0 should cost exactly basePrice
    function test_spotPriceAtZeroSupply() public pure {
        uint256 price = BondingCurve.spotPrice(0, 1e6, 1);
        assertEq(price, 1e6);
    }

    // Test: the integral formula — buying 2 tokens from supply = 0
    // Two whole tokens from supply 0, normalised by 1e18:
    function test_buyCostIsIntegral() public pure {
        uint256 cost = BondingCurve.calculateBuyCost(0, 2e18, 1e6, 1e3);
        // linearCost = 1e6 * 2e18 / 1e18 = 2e6
        // curveCost  = 1e3 * 2e18 * 2e18 / (2 * 1e36) = 2000
        assertEq(cost, 2_002_000);
    }

    // Shorthand for the library call in assertions below.
    function _cost(uint256 s, uint256 a, uint256 b, uint256 m) internal pure returns (uint256) {
        return BondingCurve.calculateBuyCost(s, a, b, m);
    }

    /// Rounding up means even the smallest purchase pays something.
    function test_buyCost_roundsUpSoNothingIsFree() public pure {
        // 1 token wei at 0.01 USDC per token is worth 1e-14 units of USDC.
        assertEq(BondingCurve.calculateBuyCost(0, 1, 1e4, 1), 2); // 1 (linear) + 1 (curve), each rounded up
    }

    function test_buyCost_exactWhenDivisible() public pure {
        // Rounding only ever adds when there is a remainder.
        assertEq(BondingCurve.calculateBuyCost(0, 2e18, 1e6, 1e3), 2_002_000);
    }

    /// maxBuyable never returns an amount that costs more than the budget,
    /// and is tight: one more whole token would not fit.
    function testFuzz_maxBuyable_isAffordableAndTight(
        uint256 supply, uint256 budget, uint256 basePrice, uint256 slope
    ) public pure {
        supply = bound(supply, 0, 1e27);        // up to 1B tokens sold
        budget = bound(budget, 1, 1e15);        // up to 1B USDC
        basePrice = bound(basePrice, 1e3, 1e9); // 0.001 .. 1,000 USDC
        slope = bound(slope, 0, 1e6);

        uint256 a = BondingCurve.maxBuyable(supply, budget, basePrice, slope, type(uint128).max);
        assertLe(_cost(supply, a, basePrice, slope), budget, "affordable");
        assertGt(_cost(supply, a + 1e18, basePrice, slope), budget, "tight");
    }

    function test_maxBuyable_respectsUpperBound() public pure {
        uint256 a = BondingCurve.maxBuyable(0, 1e12, 1e4, 1, 5e18);
        assertEq(a, 5e18);
    }

    function test_maxBuyable_zeroBudgetBuysNothing() public pure {
        assertEq(BondingCurve.maxBuyable(0, 0, 1e4, 1, type(uint128).max), 0);
    }
}
