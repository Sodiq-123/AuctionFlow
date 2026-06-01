pragma solidity ^0.8.24;

import "@openzeppelin/contracts/utils/math/Math.sol";

library BondingCurve {
    /// @notice Calculate cost to buy `amount` tokens starting from `currentSupply`
    /// @dev Uses integral of linear curve: ∫(basePrice + slope * x)dx from s to s+a
    ///      = basePrice * a + slope * (a * (2s + a)) / 2
    function calculateBuyCost(
        uint256 currentSupply,
        uint256 amount,
        uint256 basePrice,
        uint256 slope
    ) internal pure returns (uint256) {
        // Cost = basePrice * amount + slope * amount * (2 * currentSupply + amount) / 2
        uint256 linearCost = basePrice * amount;
        uint256 curveCost = (slope * amount * (2 * currentSupply + amount)) / 2;
        return linearCost + curveCost;
    }

    /// @notice Calculate current spot price at a given supply
    function spotPrice(
        uint256 currentSupply,
        uint256 basePrice,
        uint256 slope
    ) internal pure returns (uint256) {
        return basePrice + (slope * currentSupply);
    }
}
