/**
 * Off-chain bonding curve calculations (mirrors BondingCurve.sol)
 *
 * `basePrice` and `slope` are denominated in payment-token units per *whole*
 * token, while supplies and amounts are in token wei (18 decimals). Every term
 * is normalised by TOKEN_SCALE so results come back in payment-token units.
 */
const TOKEN_SCALE = 10n ** 18n;

export function calculateBuyCost(
  currentSupply: bigint,
  amount: bigint,
  basePrice: bigint,
  slope: bigint
): bigint {
  const linearCost = (basePrice * amount) / TOKEN_SCALE;
  const curveCost =
    (slope * amount * (2n * currentSupply + amount)) /
    (2n * TOKEN_SCALE * TOKEN_SCALE);
  return linearCost + curveCost;
}

export function spotPrice(
  currentSupply: bigint,
  basePrice: bigint,
  slope: bigint
): bigint {
  return basePrice + (slope * currentSupply) / TOKEN_SCALE;
}

export function calculateBuyQuote(
  currentSupply: bigint,
  amount: bigint,
  basePrice: bigint,
  slope: bigint,
  feeBps: bigint
): { cost: bigint; fee: bigint; total: bigint; spotPriceAfter: bigint } {
  const cost = calculateBuyCost(currentSupply, amount, basePrice, slope);
  const fee = (cost * feeBps) / 10000n;
  return {
    cost,
    fee,
    total: cost + fee,
    spotPriceAfter: spotPrice(currentSupply + amount, basePrice, slope),
  };
}

/** Default slippage tolerance for `buyTokens`, in basis points (100 = 1%). */
export const DEFAULT_SLIPPAGE_BPS = 100;

/**
 * Upper bound a buyer will accept for a quoted total, given a tolerance in
 * basis points. Rounds up so a tolerance never comes out tighter than asked.
 */
export function applySlippage(total: bigint, slippageBps: number): bigint {
  if (!Number.isInteger(slippageBps) || slippageBps < 0 || slippageBps > 10_000) {
    throw new Error("slippageBps must be an integer between 0 and 10000");
  }
  return (total * BigInt(10_000 + slippageBps) + 9_999n) / 10_000n;
}
