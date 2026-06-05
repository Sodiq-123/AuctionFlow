/**
 * Off-chain bonding curve calculations (mirrors BondingCurve.sol)
 */
export function calculateBuyCost(
  currentSupply: bigint,
  amount: bigint,
  basePrice: bigint,
  slope: bigint
): bigint {
  const linearCost = basePrice * amount;
  const curveCost =
    (slope * amount * (2n * currentSupply + amount)) / 2n;
  return linearCost + curveCost;
}

export function spotPrice(
  currentSupply: bigint,
  basePrice: bigint,
  slope: bigint
): bigint {
  return basePrice + slope * currentSupply;
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
