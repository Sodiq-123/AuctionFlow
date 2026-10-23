import { describe, it, expect } from "vitest";
import {
  calculateBuyCost,
  spotPrice,
  calculateBuyQuote,
  applySlippage,
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
