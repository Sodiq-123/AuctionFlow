pragma solidity ^0.8.24;

import "@openzeppelin/contracts/utils/math/Math.sol";

library BondingCurve {
    /// @dev Auction tokens always use 18 decimals (see AuctionToken), while
    ///      `basePrice` and `slope` are denominated in payment-token units per
    ///      *whole* token. Amounts and supplies arrive in token wei, so every
    ///      term is normalised by this scale to keep the result in payment-token
    ///      units. Without it, prices would be charged per wei and a purchase of
    ///      one whole token would cost 1e18 times its intended price.
    uint256 internal constant TOKEN_SCALE = 1e18;

    /// @notice Calculate cost to buy `amount` tokens starting from `currentSupply`
    /// @dev Uses integral of linear curve: ∫(basePrice + slope * x)dx from s to s+a
    ///      = basePrice * a + slope * (a * (2s + a)) / 2, with a and s expressed
    ///      in whole tokens. Working in wei, that is:
    ///        basePrice * amount / 1e18
    ///      + slope * amount * (2 * currentSupply + amount) / (2 * 1e18 * 1e18)
    /// @param currentSupply Tokens already sold, in token wei
    /// @param amount Tokens to buy, in token wei
    /// @param basePrice Price of the first whole token, in payment-token units
    /// @param slope Price increase per whole token sold, in payment-token units
    /// @return Cost in payment-token units, rounded up
    function calculateBuyCost(
        uint256 currentSupply,
        uint256 amount,
        uint256 basePrice,
        uint256 slope
    ) internal pure returns (uint256) {
        // Both terms round up, so every purchase pays at least the exact
        // price. Rounding down would let a sliver of a token cost nothing.
        uint256 linearCost = Math.ceilDiv(basePrice * amount, TOKEN_SCALE);
        uint256 curveCost = Math.ceilDiv(
            slope * amount * (2 * currentSupply + amount), 2 * TOKEN_SCALE * TOKEN_SCALE
        );
        return linearCost + curveCost;
    }

    /// @notice Proceeds from selling `amount` tokens back to the curve when
    ///         `currentSupply` tokens are outstanding: the same integral as a
    ///         purchase, taken from `currentSupply - amount` up to
    ///         `currentSupply`.
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
        uint256 linear = (basePrice * amount) / TOKEN_SCALE;
        uint256 curve = (slope * amount * (2 * from + amount)) / (2 * TOKEN_SCALE * TOKEN_SCALE);
        return linear + curve;
    }

    /// @notice Calculate current spot price at a given supply
    /// @param currentSupply Tokens already sold, in token wei
    /// @return Price of the next whole token, in payment-token units
    function spotPrice(
        uint256 currentSupply,
        uint256 basePrice,
        uint256 slope
    ) internal pure returns (uint256) {
        return basePrice + (slope * currentSupply) / TOKEN_SCALE;
    }

    /// @notice Largest amount (token wei) that can be bought from
    ///         `currentSupply` for at most `budget` payment-token units.
    /// @dev    Binary search over calculateBuyCost rather than the closed-form
    ///         root of the quadratic: the closed form squares terms that can
    ///         exceed uint256 for realistic parameters, while the search only
    ///         ever evaluates the cost function. `upperBound` caps the result,
    ///         e.g. at the remaining token supply. ~90 iterations at most.
    function maxBuyable(
        uint256 currentSupply,
        uint256 budget,
        uint256 basePrice,
        uint256 slope,
        uint256 upperBound
    ) internal pure returns (uint256) {
        // Price never falls below basePrice, so this many tokens is always
        // enough to exhaust the budget.
        uint256 hi = (budget * TOKEN_SCALE) / basePrice + 1;
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
