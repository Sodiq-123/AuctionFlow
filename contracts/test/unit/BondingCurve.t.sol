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
}
