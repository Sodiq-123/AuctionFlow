/** Smallest share of the raise an auction may commit to Uniswap liquidity (20%). Mirrors TokenAuction.MIN_LIQUIDITY_BPS. */
export const MIN_LIQUIDITY_BPS = 2_000;

/**
 * Lowest base price a curve may start at, in payment units × 1e18 per whole
 * token. Mirrors TokenAuction.MIN_BASE_PRICE.
 */
export const MIN_BASE_PRICE = 1_000_000n;

/** Liquidity share the builder uses when none is given (50%). */
export const DEFAULT_LIQUIDITY_BPS = 5_000;
