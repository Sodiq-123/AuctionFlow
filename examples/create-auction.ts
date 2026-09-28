/**
 * End-to-end example: create an auction on Base Sepolia using the SDK.
 *
 * Prerequisites:
 *   1. Copy .env.example to .env and fill in PRIVATE_KEY and RPC_URL
 *   2. Your wallet needs Base Sepolia ETH for gas (get from faucet.base.org)
 *   3. Run: npx tsx examples/create-auction.ts
 */

import { createWalletClient, http, parseUnits } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { baseSepolia } from "viem/chains";
import { AuctionFlowSDK } from "../sdk/src";

const PRIVATE_KEY = process.env.PRIVATE_KEY as `0x${string}`;
const RPC_URL = process.env.RPC_URL ?? "https://sepolia.base.org";

if (!PRIVATE_KEY) {
  throw new Error("PRIVATE_KEY env var is required");
}

const account = privateKeyToAccount(PRIVATE_KEY);

const walletClient = createWalletClient({
  account,
  chain: baseSepolia,
  transport: http(RPC_URL),
});

const sdk = new AuctionFlowSDK({
  chainId: 84532,
  rpcUrl: RPC_URL,
  walletClient,
});

async function main() {
  console.log("Creating auction with account:", account.address);

  // Auction starts 5 minutes from now, ends in 3 days
  const now = BigInt(Math.floor(Date.now() / 1000));
  const startTime = now + 300n;
  const endTime = now + 86400n * 3n;

  const config = sdk
    .buildAuction()
    .withToken(
      "Demo Token",
      "DEMO",
      parseUnits("1000000", 18) // 1M max supply
    )
    .withPaymentToken("0x036CbD53842c5426634e7929541eC2318f3dCF7e") // USDC on Base Sepolia
    .withBondingCurve(
      parseUnits("0.01", 6),     // base price: 0.01 USDC
      parseUnits("0.000001", 6)  // slope
    )
    .withMaxRaise(parseUnits("50000", 6)) // 50k USDC max
    .withSchedule(startTime, endTime)
    .build();

  console.log("Auction config:", config);

  const hash = await sdk.createAuction(config);
  console.log("\nTransaction submitted:", hash);
  console.log("Track on Basescan: https://sepolia.basescan.org/tx/" + hash);

  // Wait for receipt and get spot price
  const receipt = await sdk.publicClient.waitForTransactionReceipt({ hash });
  console.log("\nMined in block:", receipt.blockNumber);

  // Read the id back rather than assuming 0 — the contract may already hold auctions.
  const auctionId =
    (await sdk.publicClient.readContract({
      address: sdk.auctionAddress,
      abi: [{ type: "function", name: "auctionCount", inputs: [], outputs: [{ type: "uint256" }], stateMutability: "view" }] as const,
      functionName: "auctionCount",
    })) - 1n;
  console.log("Auction ID:", auctionId.toString());

  const spotPrice = await sdk.getSpotPrice(auctionId);
  console.log("Spot price:", spotPrice.toString(), "USDC units (", Number(spotPrice)/1e6, "USDC )");

  const quote = await sdk.getQuote(auctionId, parseUnits("1000", 18));
  console.log("\nQuote for buying 1,000 tokens:");
  console.log("  Cost:       ", quote.cost.toString(), "USDC units");
  console.log("  Protocol fee:", quote.fee.toString(), "USDC units");
  console.log("  Total:      ", quote.totalCost.toString(), "USDC units");
  console.log("  Price after:", quote.spotPriceAfter.toString(), "USDC units");
}

main().catch(console.error);
