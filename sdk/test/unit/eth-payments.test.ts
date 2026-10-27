import { afterEach, describe, it, expect, vi } from "vitest";
import { encodeFunctionResult, zeroAddress, type Hex, type WalletClient } from "viem";
import { AuctionFlowSDK } from "../../src/client";
import { tokenAuctionAbi } from "../../src/abis/token-auction";
import { WETH_ADDRESSES } from "../../src/constants/addresses";
import { AuctionState } from "../../src/types";

const P = 10n ** 18n;
const WETH = WETH_ADDRESSES[84532];
const config = {
  token: "0x00000000000000000000000000000000000000a1",
  paymentToken: WETH,
  basePrice: 4n * 10n ** 26n,
  slope: 8n * 10n ** 18n,
  maxRaise: 2n * P,
  creator: "0x00000000000000000000000000000000000000c1",
  protocolFeeBps: 100n,
  liquidityBps: 8_000n,
  lpFeeShareBps: 2_000n,
} as const;

afterEach(() => vi.unstubAllGlobals());

/** Answer every eth_call with `data`. */
function stubCall(data: Hex) {
  vi.stubGlobal("fetch", async (_url: string, init: { body: string }) => {
    const { id, method } = JSON.parse(init.body);
    if (method !== "eth_call") throw new Error(`unexpected ${method}`);
    return new Response(JSON.stringify({ jsonrpc: "2.0", id, result: data }), {
      headers: { "content-type": "application/json" },
    });
  });
}

function stubAuction(totalRaised: bigint, totalSold: bigint) {
  stubCall(
    encodeFunctionResult({
      abi: tokenAuctionAbi,
      functionName: "auctions",
      result: [config, AuctionState.ACTIVE, totalRaised, totalSold],
    })
  );
}

/** An SDK whose wallet records what it was asked to send. */
function sdkWithWallet() {
  const writeContract = vi.fn(async () => "0x01" as Hex);
  const walletClient = {
    account: { address: "0x00000000000000000000000000000000000000b1", type: "json-rpc" },
    writeContract,
  } as unknown as WalletClient;
  const sdk = new AuctionFlowSDK({ chainId: 84532, rpcUrl: "http://rpc.test", walletClient });
  return { sdk, writeContract };
}

describe("ETH payments", () => {
  it("buyTokensWithETH sends the quote plus slippage as value, with no approval", async () => {
    stubAuction(0n, 0n);
    const { sdk, writeContract } = sdkWithWallet();
    const quote = await sdk.getQuote(0n, 100_000_000n * P);

    await sdk.buyTokensWithETH(0n, 100_000_000n * P);

    expect(writeContract).toHaveBeenCalledTimes(1);
    const call = writeContract.mock.calls[0][0] as Record<string, unknown>;
    expect(call.functionName).toBe("buyTokensWithETH");
    expect(call.args).toEqual([0n, 100_000_000n * P]);
    expect(call.value).toBe((quote.totalCost * 10_100n + 9_999n) / 10_000n); // 1% above, rounded up
  });

  it("buyTokensWithETH sends an exact maxCost when given", async () => {
    const { sdk, writeContract } = sdkWithWallet();
    await sdk.buyTokensWithETH(3n, 5n * P, { maxCost: 123n });
    const call = writeContract.mock.calls[0][0] as Record<string, unknown>;
    expect(call.value).toBe(123n);
    expect(call.args).toEqual([3n, 5n * P]);
  });

  it("sellTokensForETH derives minProceeds from a fresh quote", async () => {
    stubAuction(10n ** 17n, 100_000_000n * P);
    const { sdk, writeContract } = sdkWithWallet();
    const quote = await sdk.getSellQuote(0n, 40_000_000n * P);

    await sdk.sellTokensForETH(0n, 40_000_000n * P);

    const call = writeContract.mock.calls[0][0] as Record<string, unknown>;
    expect(call.functionName).toBe("sellTokensForETH");
    expect(call.args).toEqual([0n, 40_000_000n * P, (quote.netProceeds * 9_900n) / 10_000n]); // 1% below
  });

  it("launch defaults to WETH and passes another payment token through", async () => {
    const { sdk, writeContract } = sdkWithWallet();
    await sdk.launch("Eth Coin", "ETHC", "ipfs://x");
    await sdk.launch("Usd Coin", "USDC2", "", "0x036CbD53842c5426634e7929541eC2318f3dCF7e");

    expect((writeContract.mock.calls[0][0] as Record<string, unknown>).args).toEqual([
      "Eth Coin", "ETHC", "ipfs://x", WETH,
    ]);
    expect((writeContract.mock.calls[1][0] as Record<string, unknown>).args).toEqual([
      "Usd Coin", "USDC2", "", "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
    ]);
  });

  it("isPricedInETH reads the auction's payment token", async () => {
    stubAuction(0n, 0n);
    const { sdk } = sdkWithWallet();
    expect(await sdk.isPricedInETH(0n)).toBe(true);
  });
});

describe("getLaunchPreset", () => {
  it("decodes a configured preset", async () => {
    const preset = [WETH, 10n ** 27n, config.basePrice, config.slope, config.maxRaise, 8_000n] as const;
    stubCall(encodeFunctionResult({ abi: tokenAuctionAbi, functionName: "launchPresets", result: preset }));
    const { sdk } = sdkWithWallet();
    expect(await sdk.getLaunchPreset(WETH)).toEqual({
      paymentToken: WETH,
      maxSupply: 10n ** 27n,
      basePrice: config.basePrice,
      slope: config.slope,
      maxRaise: config.maxRaise,
      liquidityBps: 8_000n,
    });
  });

  it("returns null when the token has no preset", async () => {
    stubCall(
      encodeFunctionResult({
        abi: tokenAuctionAbi,
        functionName: "launchPresets",
        result: [zeroAddress, 0n, 0n, 0n, 0n, 0n],
      })
    );
    const { sdk } = sdkWithWallet();
    expect(await sdk.getLaunchPreset(WETH)).toBeNull();
  });
});
