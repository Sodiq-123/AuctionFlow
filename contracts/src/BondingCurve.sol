pragma solidity ^0.8.24;

import "@openzeppelin/contracts/utils/math/Math.sol";

/// @notice A linear bonding curve: the price of the next whole token is
///         `basePrice + slope × tokensSold`.
///
/// Units. Supplies and amounts are in token wei (18 decimals). `basePrice`
/// and `slope` are in payment-token units per whole token, as fixed-point
/// numbers with 18 extra decimals (WAD), and so is the spot price. The extra
/// precision lets a curve rise by far less than one payment unit per token:
/// a billion-token launch whose price climbs from $0.000005 to $0.00007 needs
/// a slope of about 8e-8 USDC units per token, which a plain integer can't
/// hold. Costs and proceeds come back in plain payment-token units.
library BondingCurve {
    /// @dev Auction tokens always use 18 decimals (see AuctionToken).
    uint256 internal constant TOKEN_SCALE = 1e18;
    /// @dev Fixed-point scale of basePrice, slope and spot prices.
    uint256 internal constant PRICE_SCALE = 1e18;
    /// @dev A WAD price times an amount in token wei is in payment units × 1e36.
    uint256 internal constant SCALE = TOKEN_SCALE * PRICE_SCALE;

    /// @notice Cost, in payment-token units, of buying `amount` tokens starting
    ///         from `currentSupply`.
    /// @dev    The integral of the price from s to s + a, with a and s in
    ///         token wei:
    ///           basePrice × a / 1e36  +  slope × a × (2s + a) / (2 × 1e54)
    ///         Both terms round up, so every purchase pays at least the exact
    ///         price. Rounding down would let a sliver of a token cost nothing.
    function calculateBuyCost(
        uint256 currentSupply,
        uint256 amount,
        uint256 basePrice,
        uint256 slope
    ) internal pure returns (uint256) {
        uint256 linear = Math.mulDiv(basePrice, amount, SCALE, Math.Rounding.Ceil);
        uint256 curve = Math.mulDiv(
            slope, amount * (2 * currentSupply + amount), 2 * SCALE * TOKEN_SCALE, Math.Rounding.Ceil
        );
        return linear + curve;
    }

    /// @notice Proceeds, in payment-token units, from selling `amount` tokens
    ///         back to the curve when `currentSupply` tokens are outstanding:
    ///         the same integral as a purchase, from `currentSupply - amount`
    ///         up to `currentSupply`.
    /// @dev    Rounds both terms down, the mirror image of calculateBuyCost.
    ///         Buys pay at least the exact integral and sells receive at most
    ///         it, so an auction's raise never falls below the exact value of
    ///         the tokens outstanding and every seller can always be paid.
    function calculateSellProceeds(
        uint256 currentSupply,
        uint256 amount,
        uint256 basePrice,
        uint256 slope
    ) internal pure returns (uint256) {
        uint256 from = currentSupply - amount;
        uint256 linear = Math.mulDiv(basePrice, amount, SCALE);
        uint256 curve = Math.mulDiv(slope, amount * (2 * from + amount), 2 * SCALE * TOKEN_SCALE);
        return linear + curve;
    }

    /// @notice Price of the next whole token at `currentSupply`, in payment
    ///         units with 18 extra decimals (WAD).
    function spotPrice(
        uint256 currentSupply,
        uint256 basePrice,
        uint256 slope
    ) internal pure returns (uint256) {
        return basePrice + Math.mulDiv(slope, currentSupply, TOKEN_SCALE);
    }

    /// @notice Largest amount (token wei) that can be bought from
    ///         `currentSupply` for at most `budget` payment-token units.
    /// @dev    Binary search over calculateBuyCost rather than the closed-form
    ///         root of the quadratic, which squares terms that can exceed
    ///         uint256. `upperBound` caps the result, e.g. at the remaining
    ///         token supply. ~120 iterations at most.
    function maxBuyable(
        uint256 currentSupply,
        uint256 budget,
        uint256 basePrice,
        uint256 slope,
        uint256 upperBound
    ) internal pure returns (uint256) {
        // The price never falls below basePrice, so this many tokens is always
        // enough to exhaust the budget.
        uint256 hi = Math.mulDiv(budget, SCALE, basePrice) + 1;
        if (hi > upperBound) hi = upperBound;
        uint256 lo = 0;
        while (lo < hi) {
            uint256 mid = (lo + hi + 1) / 2;
            if (calculateBuyCost(currentSupply, mid, basePrice, slope) <= budget) {
                lo = mid;
            } else {
                hi = mid - 1;
            }
        }
        return lo;
    }
}
