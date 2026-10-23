import { describe, it, expect } from "vitest";
import {
  calculateBuyCost,
  spotPrice,
  calculateBuyQuote,
  applySlippage,
  maxBuyable,
  fillPurchase,
} from "../../src/utils/bonding-curve";

const T = 10n ** 18n;

describe("calculateBuyCost", () => {
  it("matches solidity calculation for 2 tokens from supply=0", () => {
    const cost = calculateBuyCost(0n, 2n * T, 1_000_000n, 1_000n);
    expect(cost).toBe(2_002_000n);
  });

  it("is more expensive to buy the same amount from a higher supply", () => {
    const early = calculateBuyCost(0n, 1_000n * T, 1_000_000n, 1_000n);
    const later = calculateBuyCost(1_000_000n * T, 1_000n * T, 1_000_000n, 1_000n);
    expect(later).toBeGreaterThan(early);
  });

  it("returns only the linear term when slope is 0", () => {
    expect(calculateBuyCost(500n * T, 3n * T, 1_000_000n, 0n)).toBe(3_000_000n);
  });
});

describe("spotPrice", () => {
  it("equals basePrice at supply 0", () => {
    expect(spotPrice(0n, 1_000_000n, 1_000n)).toBe(1_000_000n);
  });

  it("increases linearly with supply", () => {
    expect(spotPrice(10n * T, 1_000_000n, 1_000n)).toBe(1_010_000n);
  });
});

describe("calculateBuyQuote", () => {
  it("adds the protocol fee on top of the raw cost", () => {
    // 250 bps = 2.5%
    const quote = calculateBuyQuote(0n, 2n * T, 1_000_000n, 1_000n, 250n);
    expect(quote.cost).toBe(2_002_000n);
    expect(quote.fee).toBe((2_002_000n * 250n) / 10_000n);
    expect(quote.total).toBe(quote.cost + quote.fee);
  });

  it("reports the spot price after the purchase settles", () => {
    const quote = calculateBuyQuote(100n * T, 50n * T, 1_000_000n, 1_000n, 0n);
    expect(quote.fee).toBe(0n);
    expect(quote.spotPriceAfter).toBe(spotPrice(150n * T, 1_000_000n, 1_000n));
  });
});

describe("applySlippage", () => {
  it("adds the tolerance on top of the quoted total", () => {
    expect(applySlippage(10_762_500n, 100)).toBe(10_870_125n); // +1%
  });

  it("returns the total unchanged at 0 bps", () => {
    expect(applySlippage(10_762_500n, 0)).toBe(10_762_500n);
  });

  it("rounds up so the bound is never tighter than requested", () => {
    // 1 * 1.0001 = 1.0001 -> 2, not 1
    expect(applySlippage(1n, 1)).toBe(2n);
  });

  it("rejects tolerances outside 0..10000 bps", () => {
    expect(() => applySlippage(1n, -1)).toThrow(/slippageBps/);
    expect(() => applySlippage(1n, 10_001)).toThrow(/slippageBps/);
    expect(() => applySlippage(1n, 1.5)).toThrow(/slippageBps/);
  });
});

describe("rounding", () => {
  it("rounds up, matching the contract, so nothing is free", () => {
    // 1 token wei at 0.01 USDC is worth 1e-14 USDC units: each term rounds up to 1.
    expect(calculateBuyCost(0n, 1n, 10_000n, 1n)).toBe(2n);
  });
});

describe("maxBuyable", () => {
  it("finds the largest affordable amount", () => {
    const a = maxBuyable(0n, 10_500_000n, 10_000n, 1n, 10n ** 30n);
    expect(calculateBuyCost(0n, a, 10_000n, 1n)).toBeLessThanOrEqual(10_500_000n);
    expect(calculateBuyCost(0n, a + T, 10_000n, 1n)).toBeGreaterThan(10_500_000n);
    expect(a / T).toBe(1000n); // the walkthrough's 10.5 USDC buys 1,000 tokens
  });

  it("respects the upper bound", () => {
    expect(maxBuyable(0n, 10n ** 12n, 10_000n, 1n, 5n * T)).toBe(5n * T);
  });
});

describe("fillPurchase", () => {
  const BASE = 10_000n; // 0.01 USDC
  const SLOPE = 1n;

  it("fills the full request when it stays under the cap", () => {
    const f = fillPurchase(0n, 100n * T, BASE, SLOPE, 0n, 10_500_000n);
    expect(f.amount).toBe(100n * T);
    expect(f.fillsAuction).toBe(false);
  });

  it("marks an exact fill as closing the auction", () => {
    const cost = calculateBuyCost(0n, 1000n * T, BASE, SLOPE);
    const f = fillPurchase(0n, 1000n * T, BASE, SLOPE, 0n, cost);
    expect(f.amount).toBe(1000n * T);
    expect(f.fillsAuction).toBe(true);
  });

  it("shrinks an overshooting request to what the remaining budget buys", () => {
    const f = fillPurchase(0n, 5000n * T, BASE, SLOPE, 0n, 10_500_000n);
    expect(f.amount).toBeLessThan(5000n * T);
    expect(f.cost).toBeLessThanOrEqual(10_500_000n);
    expect(f.fillsAuction).toBe(true);
  });

  it("throws when nothing is left to buy", () => {
    expect(() => fillPurchase(0n, T, BASE, SLOPE, 10_500_000n, 10_500_000n)).toThrow(/sold out/);
  });
});
