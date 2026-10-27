import { afterEach, describe, it, expect, vi } from "vitest";
import { encodeFunctionResult, getAddress, type Hex } from "viem";
import { AuctionFlowSDK } from "../../src/client";
import { tokenAuctionAbi } from "../../src/abis/token-auction";
import { AuctionState } from "../../src/types";

const P = 10n ** 18n;
const config = {
  token: "0x00000000000000000000000000000000000000a1",
  paymentToken: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
  basePrice: 2n * 10n ** 15n,
  slope: 4n * 10n ** 7n,
  maxRaise: 10_000_000n,
  creator: "0x00000000000000000000000000000000000000c1",
  protocolFeeBps: 100n,
  liquidityBps: 8_000n,
  lpFeeShareBps: 2_000n,
} as const;

afterEach(() => vi.unstubAllGlobals());

/** An SDK whose RPC answers eth_call with a real ABI-encoded `auctions` result. */
function sdkReturning(state: number, totalRaised: bigint, totalSold: bigint) {
  const data: Hex = encodeFunctionResult({
    abi: tokenAuctionAbi,
    functionName: "auctions",
    result: [config, state, totalRaised, totalSold],
  });
  vi.stubGlobal("fetch", async (_url: string, init: { body: string }) => {
    const { id, method } = JSON.parse(init.body);
    if (method !== "eth_call") throw new Error(`unexpected ${method}`);
    return new Response(JSON.stringify({ jsonrpc: "2.0", id, result: data }), {
      headers: { "content-type": "application/json" },
    });
  });
  return new AuctionFlowSDK({ chainId: 84532, rpcUrl: "http://rpc.test" });
}

// The `auctions` getter has several return values, which viem decodes as an
// array. The SDK once read them as named fields and returned undefined.
describe("getAuction", () => {
  it("decodes the contract's auctions getter", async () => {
    const auction = await sdkReturning(AuctionState.ACTIVE, 1_750_000n, 250_000_000n * P).getAuction(0n);
    expect(auction).toEqual({
      id: 0n,
      token: getAddress(config.token),
      paymentToken: getAddress(config.paymentToken),
      creator: getAddress(config.creator),
      basePrice: config.basePrice,
      slope: config.slope,
      maxRaise: config.maxRaise,
      state: AuctionState.ACTIVE,
      totalRaised: 1_750_000n,
      totalSold: 250_000_000n * P,
      protocolFeeBps: 100n,
      liquidityBps: 8_000n,
      lpFeeShareBps: 2_000n,
    });
  });

  it("feeds getQuote", async () => {
    const quote = await sdkReturning(AuctionState.ACTIVE, 0n, 0n).getQuote(0n, 200_000_000n * P);
    expect(quote.cost).toBe(1_200_000n); // 1.20 USDC, as on Base Sepolia
    expect(quote.fee).toBe(12_000n);
    expect(quote.fillsAuction).toBe(false);
  });
});
