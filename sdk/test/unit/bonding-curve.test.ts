import { describe, it, expect } from "vitest";
import {
  calculateBuyCost,
  spotPrice,
  calculateBuyQuote,
  applySlippage,
  maxBuyable,
  fillPurchase,
  calculateSellProceeds,
  applySellSlippage,
  parseCurvePrice,
  formatCurvePrice,
} from "../../src/utils/bonding-curve";

const T = 10n ** 18n;
// Prices are payment units per whole token × 1e18: 1_000_000n * P is 1 USDC.
const P = 10n ** 18n;

describe("calculateBuyCost", () => {
  it("matches solidity calculation for 2 tokens from supply=0", () => {
    const cost = calculateBuyCost(0n, 2n * T, 1_000_000n * P, 1_000n * P);
    expect(cost).toBe(2_002_000n);
  });

  it("is more expensive to buy the same amount from a higher supply", () => {
    const early = calculateBuyCost(0n, 1_000n * T, 1_000_000n * P, 1_000n * P);
    const later = calculateBuyCost(1_000_000n * T, 1_000n * T, 1_000_000n * P, 1_000n * P);
    expect(later).toBeGreaterThan(early);
  });

  it("returns only the linear term when slope is 0", () => {
    expect(calculateBuyCost(500n * T, 3n * T, 1_000_000n * P, 0n)).toBe(3_000_000n);
  });
});

describe("spotPrice", () => {
  it("equals basePrice at supply 0", () => {
    expect(spotPrice(0n, 1_000_000n * P, 1_000n * P)).toBe(1_000_000n * P);
  });

  it("increases linearly with supply", () => {
    expect(spotPrice(10n * T, 1_000_000n * P, 1_000n * P)).toBe(1_010_000n * P);
  });
});

describe("calculateBuyQuote", () => {
  it("adds the protocol fee on top of the raw cost", () => {
    // 250 bps = 2.5%
    const quote = calculateBuyQuote(0n, 2n * T, 1_000_000n * P, 1_000n * P, 250n);
    expect(quote.cost).toBe(2_002_000n);
    expect(quote.fee).toBe((2_002_000n * 250n) / 10_000n);
    expect(quote.total).toBe(quote.cost + quote.fee);
  });

  it("reports the spot price after the purchase settles", () => {
    const quote = calculateBuyQuote(100n * T, 50n * T, 1_000_000n * P, 1_000n * P, 0n);
    expect(quote.fee).toBe(0n);
    expect(quote.spotPriceAfter).toBe(spotPrice(150n * T, 1_000_000n * P, 1_000n * P));
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
    expect(calculateBuyCost(0n, 1n, 10_000n * P, P)).toBe(2n);
  });
});

describe("maxBuyable", () => {
  it("finds the largest affordable amount", () => {
    const a = maxBuyable(0n, 10_500_000n, 10_000n * P, P, 10n ** 30n);
    expect(calculateBuyCost(0n, a, 10_000n * P, P)).toBeLessThanOrEqual(10_500_000n);
    expect(calculateBuyCost(0n, a + T, 10_000n * P, P)).toBeGreaterThan(10_500_000n);
    expect(a / T).toBe(1000n); // the walkthrough's 10.5 USDC buys 1,000 tokens
  });

  it("respects the upper bound", () => {
    expect(maxBuyable(0n, 10n ** 12n, 10_000n * P, P, 5n * T)).toBe(5n * T);
  });
});

describe("fillPurchase", () => {
  const BASE = 10_000n * P; // 0.01 USDC
  const SLOPE = P; // +0.000001 USDC per token sold

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

describe("calculateSellProceeds", () => {
  const BASE = 10_000n * P;
  const SLOPE = P; // +0.000001 USDC per token sold

  it("pays the same integral a purchase costs, when there is no remainder", () => {
    // Buying 1,000 from 0 costs exactly 10.5 USDC; selling them back pays it.
    expect(calculateBuyCost(0n, 1000n * T, BASE, SLOPE)).toBe(10_500_000n);
    expect(calculateSellProceeds(1000n * T, 1000n * T, BASE, SLOPE)).toBe(10_500_000n);
  });

  it("rounds down, so a round trip never profits", () => {
    for (const amount of [1n, 7n, 12_345n, T + 3n, 333n * T + 1n]) {
      const cost = calculateBuyCost(0n, amount, BASE, SLOPE);
      const proceeds = calculateSellProceeds(amount, amount, BASE, SLOPE);
      expect(proceeds).toBeLessThanOrEqual(cost);
    }
  });

  it("walks the curve down from the current supply", () => {
    // Selling the top 400 of 1,000 pays for tokens 600..1,000, the expensive end.
    const top = calculateSellProceeds(1000n * T, 400n * T, BASE, SLOPE);
    const bottom = calculateSellProceeds(400n * T, 400n * T, BASE, SLOPE);
    expect(top).toBeGreaterThan(bottom);
  });

  it("refuses to sell more than is outstanding", () => {
    expect(() => calculateSellProceeds(T, 2n * T, BASE, SLOPE)).toThrow(/outstanding/);
  });
});

describe("applySellSlippage", () => {
  it("lowers the minimum by the tolerance", () => {
    expect(applySellSlippage(10_000_000n, 100)).toBe(9_900_000n); // -1%
  });

  it("rounds down so the bound is never tighter than requested", () => {
    expect(applySellSlippage(1n, 1)).toBe(0n);
  });

  it("rejects tolerances outside 0..10000 bps", () => {
    expect(() => applySellSlippage(1n, 10_001)).toThrow(/slippageBps/);
  });
});

describe("price precision", () => {
  it("expresses a pump.fun-shaped curve, matching the contract test", () => {
    // 1B-token launch: $0.000005 rising to $0.00007 over 800M tokens sold.
    const base = 5n * P;
    const slope = 81_250_000_000n; // 8.125e-8 USDC units per token, × 1e18
    const sold = 800_000_000n * T;
    expect(spotPrice(sold, base, slope)).toBe(70n * P);
    expect(calculateBuyCost(0n, sold, base, slope)).toBe(30_000n * 1_000_000n); // $30,000
  });

  it("converts human prices to and from curve units", () => {
    expect(parseCurvePrice("0.01", 6)).toBe(10_000n * P);
    // The pump.fun slope above: +0.00000000000008125 USDC per token sold.
    expect(parseCurvePrice("0.00000000000008125", 6)).toBe(81_250_000_000n);
    expect(formatCurvePrice(70n * P, 6)).toBe("0.00007");
  });
});
