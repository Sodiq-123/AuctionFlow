import { Address } from "viem";
import { AuctionConfig } from "../types";
import { DEFAULT_LIQUIDITY_BPS, MIN_LIQUIDITY_BPS } from "../constants/protocol";

export class AuctionBuilder {
  private config: Partial<AuctionConfig> = {};

  withToken(name: string, symbol: string, maxSupply: bigint): this {
    this.config.name = name;
    this.config.symbol = symbol;
    this.config.maxSupply = maxSupply;
    return this;
  }

  withPaymentToken(address: Address): this {
    this.config.paymentToken = address;
    return this;
  }

  withBondingCurve(basePrice: bigint, slope: bigint): this {
    this.config.basePrice = basePrice;
    this.config.slope = slope;
    return this;
  }

  withMaxRaise(maxRaise: bigint): this {
    this.config.maxRaise = maxRaise;
    return this;
  }

  /**
   * Share of the raise, in basis points, seeded into a Uniswap pool when the
   * auction migrates (5000 = 50%). The rest goes to the creator. Defaults to
   * 50%; must be between 20% and 100%.
   */
  withLiquidity(liquidityBps: number): this {
    if (!Number.isInteger(liquidityBps)) throw new Error("liquidityBps must be an integer");
    this.config.liquidityBps = BigInt(liquidityBps);
    return this;
  }

  withSchedule(startTime: bigint, endTime: bigint): this {
    this.config.startTime = startTime;
    this.config.endTime = endTime;
    return this;
  }

  build(): AuctionConfig {
    const required: (keyof AuctionConfig)[] = [
      "name", "symbol", "maxSupply", "paymentToken",
      "basePrice", "slope", "maxRaise", "startTime", "endTime",
    ];

    for (const key of required) {
      if (this.config[key] === undefined) {
        throw new Error(`Missing required field: ${key}`);
      }
    }

    const config = { liquidityBps: BigInt(DEFAULT_LIQUIDITY_BPS), ...this.config } as AuctionConfig;

    if (config.maxSupply <= 0n) throw new Error("maxSupply must be greater than 0");
    if (config.basePrice <= 0n) throw new Error("basePrice must be greater than 0");
    if (config.slope < 0n) throw new Error("slope must not be negative");
    if (config.maxRaise <= 0n) throw new Error("maxRaise must be greater than 0");
    const liquidityBps = config.liquidityBps!;
    if (liquidityBps < BigInt(MIN_LIQUIDITY_BPS) || liquidityBps > 10_000n) {
      throw new Error(`liquidityBps must be between ${MIN_LIQUIDITY_BPS} and 10000`);
    }
    if (config.startTime >= config.endTime) {
      throw new Error("startTime must be before endTime");
    }

    return config;
  }
}
