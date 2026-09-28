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
    /// @return Cost in payment-token units
    function calculateBuyCost(
        uint256 currentSupply,
        uint256 amount,
        uint256 basePrice,
        uint256 slope
    ) internal pure returns (uint256) {
        uint256 linearCost = (basePrice * amount) / TOKEN_SCALE;
        uint256 curveCost =
            (slope * amount * (2 * currentSupply + amount)) / (2 * TOKEN_SCALE * TOKEN_SCALE);
        return linearCost + curveCost;
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
}
