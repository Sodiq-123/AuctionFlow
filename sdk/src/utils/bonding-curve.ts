/**
 * Off-chain bonding curve calculations (mirrors BondingCurve.sol)
 *
 * `basePrice` and `slope` are denominated in payment-token units per *whole*
 * token, while supplies and amounts are in token wei (18 decimals). Every term
 * is normalised by TOKEN_SCALE so results come back in payment-token units.
 */
const TOKEN_SCALE = 10n ** 18n;

const ceilDiv = (a: bigint, b: bigint): bigint => (a + b - 1n) / b;

export function calculateBuyCost(
  currentSupply: bigint,
  amount: bigint,
  basePrice: bigint,
  slope: bigint
): bigint {
  // Rounds up, like the contract, so a purchase always pays at least the exact price.
  const linearCost = ceilDiv(basePrice * amount, TOKEN_SCALE);
  const curveCost = ceilDiv(
    slope * amount * (2n * currentSupply + amount),
    2n * TOKEN_SCALE * TOKEN_SCALE
  );
  return linearCost + curveCost;
}

/**
 * Proceeds from selling `amount` tokens back to the curve when `currentSupply`
 * are outstanding. Mirrors BondingCurve.calculateSellProceeds: the same
 * integral as a purchase, but rounded down, so a round trip never profits.
 */
export function calculateSellProceeds(
  currentSupply: bigint,
  amount: bigint,
  basePrice: bigint,
  slope: bigint
): bigint {
  if (amount > currentSupply) throw new Error("Cannot sell more than is outstanding");
  const from = currentSupply - amount;
  const linear = (basePrice * amount) / TOKEN_SCALE;
  const curve = (slope * amount * (2n * from + amount)) / (2n * TOKEN_SCALE * TOKEN_SCALE);
  return linear + curve;
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

/** Default slippage tolerance for `buyTokens` and `sellTokens`, in basis points (100 = 1%). */
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

/**
 * Largest amount (token wei) buyable from `currentSupply` for at most `budget`,
 * capped at `upperBound`. Mirrors BondingCurve.maxBuyable (binary search).
 */
export function maxBuyable(
  currentSupply: bigint,
  budget: bigint,
  basePrice: bigint,
  slope: bigint,
  upperBound: bigint
): bigint {
  let hi = (budget * TOKEN_SCALE) / basePrice + 1n;
  if (hi > upperBound) hi = upperBound;
  let lo = 0n;
  while (lo < hi) {
    const mid = (lo + hi + 1n) / 2n;
    if (calculateBuyCost(currentSupply, mid, basePrice, slope) <= budget) lo = mid;
    else hi = mid - 1n;
  }
  return lo;
}

/**
 * What a purchase of `requested` tokens actually fills, given how much the
 * auction has left to raise. Mirrors TokenAuction._fill: a purchase that would
 * overshoot the cap delivers what the remaining budget buys and closes the
 * auction.
 */
export function fillPurchase(
  currentSupply: bigint,
  requested: bigint,
  basePrice: bigint,
  slope: bigint,
  totalRaised: bigint,
  maxRaise: bigint
): { amount: bigint; cost: bigint; fillsAuction: boolean } {
  const remaining = maxRaise - totalRaised;
  const cost = calculateBuyCost(currentSupply, requested, basePrice, slope);
  if (cost < remaining) return { amount: requested, cost, fillsAuction: false };
  if (cost === remaining) return { amount: requested, cost, fillsAuction: true };

  const amount = maxBuyable(currentSupply, remaining, basePrice, slope, requested);
  if (amount === 0n) throw new Error("Auction is sold out");
  return {
    amount,
    cost: calculateBuyCost(currentSupply, amount, basePrice, slope),
    fillsAuction: true,
  };
}

/**
 * Least a seller will accept for a quoted amount, given a tolerance in basis
 * points. Rounds down so a tolerance never comes out tighter than asked.
 */
export function applySellSlippage(netProceeds: bigint, slippageBps: number): bigint {
  if (!Number.isInteger(slippageBps) || slippageBps < 0 || slippageBps > 10_000) {
    throw new Error("slippageBps must be an integer between 0 and 10000");
  }
  return (netProceeds * BigInt(10_000 - slippageBps)) / 10_000n;
}
