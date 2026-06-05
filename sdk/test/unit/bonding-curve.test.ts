import { describe, it, expect } from "vitest";
import { calculateBuyCost, spotPrice } from "../../src/utils/bonding-curve";

describe("calculateBuyCost", () => {
  it("matches solidity calculation for 2 tokens from supply=0", () => {
    const cost = calculateBuyCost(0n, 2n, 1_000_000n, 1_000n);
    expect(cost).toBe(2_002_000n);
  });
});
