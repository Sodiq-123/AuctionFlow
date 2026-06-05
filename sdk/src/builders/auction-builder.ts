import { Address } from "viem";
import { AuctionConfig } from "../types";

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

    return this.config as AuctionConfig;
  }
}
