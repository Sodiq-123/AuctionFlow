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
