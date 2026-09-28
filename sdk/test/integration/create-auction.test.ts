import { describe, it, expect } from "vitest";
import { AuctionBuilder } from "../../src/builders/auction-builder";
import { AuctionFlowSDK } from "../../src/client";

const USDC_SEPOLIA = "0x036CbD53842c5426634e7929541eC2318f3dCF7e" as const;

function validBuilder() {
  return new AuctionBuilder()
    .withToken("MyToken", "MTK", 1_000_000n)
    .withPaymentToken(USDC_SEPOLIA)
    .withBondingCurve(1_000_000n, 1_000n)
    .withMaxRaise(50_000_000n)
    .withSchedule(1_000n, 2_000n);
}

describe("AuctionBuilder", () => {
  it("builds a complete config from the fluent API", () => {
    const config = validBuilder().build();
    expect(config).toMatchObject({
      name: "MyToken",
      symbol: "MTK",
      maxSupply: 1_000_000n,
      paymentToken: USDC_SEPOLIA,
      basePrice: 1_000_000n,
      slope: 1_000n,
      maxRaise: 50_000_000n,
      startTime: 1_000n,
      endTime: 2_000n,
    });
  });

  it("throws when a required field is missing", () => {
    expect(() =>
      new AuctionBuilder().withToken("MyToken", "MTK", 1_000_000n).build()
    ).toThrow(/Missing required field/);
  });

  it("rejects a schedule where startTime is not before endTime", () => {
    expect(() => validBuilder().withSchedule(2_000n, 1_000n).build()).toThrow(
      /startTime must be before endTime/
    );
  });

  it("rejects a non-positive basePrice", () => {
    expect(() => validBuilder().withBondingCurve(0n, 1_000n).build()).toThrow(
      /basePrice must be greater than 0/
    );
  });
});

const CUSTOM_AUCTION = "0x1111111111111111111111111111111111111111" as const;

describe("AuctionFlowSDK construction", () => {
  it("throws for a chain without a canonical deployment (Base mainnet)", () => {
    expect(
      () =>
        new AuctionFlowSDK({ chainId: 8453, rpcUrl: "https://mainnet.base.org" })
    ).toThrow(/no canonical deployment/);
  });

  it("tells you about the auctionAddress escape hatch in that error", () => {
    expect(
      () =>
        new AuctionFlowSDK({ chainId: 8453, rpcUrl: "https://mainnet.base.org" })
    ).toThrow(/auctionAddress/);
  });

  it("accepts a custom auctionAddress on a chain with no deployment", () => {
    const sdk = new AuctionFlowSDK({
      chainId: 8453,
      rpcUrl: "https://mainnet.base.org",
      auctionAddress: CUSTOM_AUCTION,
    });
    expect(sdk.auctionAddress).toBe(CUSTOM_AUCTION);
    expect(sdk.chainId).toBe(8453);
  });

  it("lets a custom auctionAddress override the built-in one", () => {
    const sdk = new AuctionFlowSDK({
      chainId: 84532,
      rpcUrl: "https://sepolia.base.org",
      auctionAddress: CUSTOM_AUCTION,
    });
    expect(sdk.auctionAddress).toBe(CUSTOM_AUCTION);
  });

  it("rejects an explicitly zero auctionAddress", () => {
    expect(
      () =>
        new AuctionFlowSDK({
          chainId: 84532,
          rpcUrl: "https://sepolia.base.org",
          auctionAddress: "0x0000000000000000000000000000000000000000",
        })
    ).toThrow(/must not be the zero address/);
  });

  it("constructs against Base Sepolia", () => {
    const sdk = new AuctionFlowSDK({
      chainId: 84532,
      rpcUrl: "https://sepolia.base.org",
    });
    expect(sdk.chainId).toBe(84532);
    expect(sdk.auctionAddress).toBe(
      "0xadc3e02e962eed3856d7bee0315f84d187be1fea"
    );
  });
});
