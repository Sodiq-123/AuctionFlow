# auctionflow-sdk

Type-safe TypeScript SDK for the [AuctionFlow](https://github.com/Sodiq-123/AuctionFlow) bonding-curve token auction protocol, built on [viem](https://viem.sh).

Create auctions, buy tokens, and read on-chain state with a fluent builder API and off-chain price quotes that mirror the Solidity bonding-curve math exactly.

## Install

```bash
npm install auctionflow-sdk viem
# or
pnpm add auctionflow-sdk viem
```

`viem` is a peer of everyday usage — you supply the wallet client.

## Quick start

```typescript
import { AuctionFlowSDK } from "auctionflow-sdk";
import { createWalletClient, http, parseUnits } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { baseSepolia } from "viem/chains";

const account = privateKeyToAccount("0x...");
const walletClient = createWalletClient({
  account,
  chain: baseSepolia,
  transport: http("https://sepolia.base.org"),
});

const sdk = new AuctionFlowSDK({
  chainId: 84532, // Base Sepolia
  rpcUrl: "https://sepolia.base.org",
  walletClient,
});
```

## Create an auction

The builder validates required fields and basic invariants (`startTime < endTime`,
positive `basePrice` / `maxSupply` / `maxRaise`) before producing a config.

```typescript
const config = sdk
  .buildAuction()
  .withToken("MyToken", "MTK", parseUnits("1000000", 18))
  .withPaymentToken("0x036CbD53842c5426634e7929541eC2318f3dCF7e") // USDC Sepolia
  .withBondingCurve(
    parseUnits("0.01", 6), // base price: 0.01 USDC
    parseUnits("0.000001", 6) // slope
  )
  .withMaxRaise(parseUnits("50000", 6))
  .withSchedule(
    BigInt(Math.floor(Date.now() / 1000) + 3600),
    BigInt(Math.floor(Date.now() / 1000) + 3600 * 72)
  )
  .build();

const hash = await sdk.createAuction(config);
```

## Buy tokens

```typescript
const hash = await sdk.buyTokens(0n, parseUnits("1000", 18));
```

## Read state & quotes

```typescript
// On-chain reads
const auction = await sdk.getAuction(0n);
const spot = await sdk.getSpotPrice(0n);

// Off-chain quote — no gas, mirrors BondingCurve.sol
const quote = await sdk.getQuote(0n, parseUnits("1000", 18));
console.log(quote.cost, quote.fee, quote.totalCost, quote.spotPriceAfter);
```

The bonding-curve helpers are also exported directly for UI/preview use:

```typescript
import { calculateBuyQuote, spotPrice } from "auctionflow-sdk";
```

## Withdraw proceeds

Once an auction reaches `COMPLETED` — either by hitting `maxRaise` or via
`completeAuction` after `endTime` — its creator claims the raised payment
tokens. Callable once, by the creator only.

```typescript
if (!(await sdk.hasWithdrawnProceeds(0n))) {
  const hash = await sdk.withdrawProceeds(0n);
}
```

Protocol fees are routed to the fee recipient at buy time, so the amount paid
out is exactly the auction's `totalRaised`.

## How the bonding curve works

Each auction uses a **linear bonding curve** — price rises as tokens are sold:

```text
price = basePrice + slope × totalSold
```

The cost to buy `n` tokens from current supply `s` is the integral:

```text
cost = basePrice × n + slope × n × (2s + n) / 2
```

Early buyers pay less; later buyers pay more.

## Supported chains

| Chain | Chain ID | Status |
| --- | --- | --- |
| Base Sepolia | `84532` | Deployed |
| Base Mainnet | `8453` | Not yet deployed — the SDK throws on construction |

## API

| Member | Description |
| --- | --- |
| `new AuctionFlowSDK({ chainId, rpcUrl, walletClient? })` | Construct against a supported chain. Throws if the chain has no deployment. |
| `buildAuction()` | Returns an `AuctionBuilder` (fluent config builder). |
| `createAuction(config)` | Send the `createAuction` transaction. Requires a wallet client. |
| `buyTokens(auctionId, amount)` | Send the `buyTokens` transaction. Requires a wallet client. |
| `getAuction(auctionId)` | Read the full auction struct. |
| `getSpotPrice(auctionId)` | Read the current on-chain spot price. |
| `getQuote(auctionId, amount)` | Off-chain cost + fee + post-trade spot price. |
| `withdrawProceeds(auctionId)` | Pay a completed auction's `totalRaised` to its creator. Creator-only, once. Requires a wallet client. |
| `hasWithdrawnProceeds(auctionId)` | Whether the creator has already claimed the proceeds. |

## License

[MIT](https://github.com/Sodiq-123/AuctionFlow/blob/main/LICENSE) — Sodiq Agunbiade
