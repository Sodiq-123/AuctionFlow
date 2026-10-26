pragma solidity ^0.8.24;
import "forge-std/Test.sol";
import "../../src/BondingCurve.sol";

/// Prices are payment units per whole token × 1e18 (WAD). With USDC
/// (6 decimals), 1e24 is 1 USDC per token and 1e18 is 0.000001 USDC.
contract BondingCurveTest is Test {
    function _cost(uint256 s, uint256 a, uint256 b, uint256 m) internal pure returns (uint256) {
        return BondingCurve.calculateBuyCost(s, a, b, m);
    }

    function test_spotPriceAtZeroSupply() public pure {
        assertEq(BondingCurve.spotPrice(0, 1e24, 1e18), 1e24);
    }

    function test_spotPriceRisesLinearly() public pure {
        // 10 tokens sold at +0.001 USDC each: 1 + 0.01 = 1.01 USDC
        assertEq(BondingCurve.spotPrice(10e18, 1e24, 1e21), 1.01e24);
    }

    // Buying 2 tokens from supply 0 at 1 USDC base, +0.001 USDC per token:
    //   linear = 1e24 × 2e18 / 1e36             = 2,000,000
    //   curve  = 1e21 × 2e18 × 2e18 / (2 × 1e54) = 2,000
    function test_buyCostIsIntegral() public pure {
        assertEq(_cost(0, 2e18, 1e24, 1e21), 2_002_000);
    }

    /// Rounding up means even the smallest purchase pays something.
    function test_buyCost_roundsUpSoNothingIsFree() public pure {
        // 1 token wei at 0.01 USDC per token is worth 1e-14 USDC units.
        assertEq(_cost(0, 1, 1e22, 1e18), 2); // 1 (linear) + 1 (curve), each rounded up
    }

    function test_sellProceeds_roundDown() public pure {
        // The same sliver sold back pays nothing: a round trip can't profit.
        assertEq(BondingCurve.calculateSellProceeds(1, 1, 1e22, 1e18), 0);
        // With no remainder, selling pays exactly what buying cost.
        assertEq(BondingCurve.calculateSellProceeds(2e18, 2e18, 1e24, 1e21), 2_002_000);
    }

    /// The reason prices are fixed-point: a pump.fun-shaped launch. A billion
    /// tokens, 800 million sold on the curve while the price climbs from
    /// $0.000005 to about $0.00007. The slope is ~8e-8 USDC units per token,
    /// which an integer price couldn't represent.
    function test_pumpFunShapedCurveIsExpressible() public pure {
        uint256 basePrice = 5e18;      // 0.000005 USDC = 5 units, × 1e18
        uint256 slope = 8.125e10;      // 0.00000008125 units per token, × 1e18
        uint256 sold = 800_000_000e18;

        uint256 finalPrice = BondingCurve.spotPrice(sold, basePrice, slope);
        assertEq(finalPrice, 70e18, "ends at 70 units = $0.00007 per token");

        uint256 raised = _cost(0, sold, basePrice, slope);
        // 5 × 8e8 + 8.125e-8 × (8e8)^2 / 2 = 4e9 + 2.6e10 = 3.0e10 units = $30,000
        assertEq(raised, 30_000e6, "raises $30,000 over the curve");
    }

    /// maxBuyable never returns an amount that costs more than the budget,
    /// and is tight: one more whole token would not fit.
    function testFuzz_maxBuyable_isAffordableAndTight(
        uint256 supply, uint256 budget, uint256 basePrice, uint256 slope
    ) public pure {
        supply = bound(supply, 0, 1e27);          // up to 1B tokens sold
        budget = bound(budget, 1, 1e15);          // up to 1B USDC
        basePrice = bound(basePrice, 1e21, 1e27); // 0.001 .. 1,000 USDC
        slope = bound(slope, 0, 1e24);

        uint256 a = BondingCurve.maxBuyable(supply, budget, basePrice, slope, type(uint128).max);
        assertLe(_cost(supply, a, basePrice, slope), budget, "affordable");
        assertGt(_cost(supply, a + 1e18, basePrice, slope), budget, "tight");
    }

    function test_maxBuyable_respectsUpperBound() public pure {
        assertEq(BondingCurve.maxBuyable(0, 1e12, 1e22, 1e18, 5e18), 5e18);
    }

    function test_maxBuyable_zeroBudgetBuysNothing() public pure {
        assertEq(BondingCurve.maxBuyable(0, 0, 1e22, 1e18, type(uint128).max), 0);
    }
}
