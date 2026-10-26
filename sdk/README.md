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
import { AuctionFlowSDK, parseCurvePrice } from "auctionflow-sdk";
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

### Using your own deployment

AuctionFlow only has a canonical deployment on Base Sepolia. To point the SDK at
a deployment you run yourself — on Base mainnet, a local fork, or anywhere else
`TokenAuction.sol` is deployed — pass `auctionAddress`:

```typescript
const sdk = new AuctionFlowSDK({
  chainId: 8453, // Base mainnet
  rpcUrl: "https://mainnet.base.org",
  walletClient,
  auctionAddress: "0xYourTokenAuctionDeployment",
});
```

Without it, constructing on a chain that has no built-in deployment throws.

## How a launch works

1. **Launch.** A token is created and trading starts immediately on a bonding
   curve: every buy raises the price, every sell lowers it.
2. **Trade.** Anyone can buy, and sell back to the curve, until the auction has
   raised its **graduation threshold** (`maxRaise`). Tokens can't be transferred
   in the meantime; selling back is how you exit.
3. **Graduate.** The purchase that reaches the threshold closes the curve, and
   the token migrates to a Uniswap v3 pool where it trades freely.

## Launch a token (one click)

```typescript
const hash = await sdk.launch("My Token", "MTK", "ipfs://<metadata-json>");
```

Everything except the name, symbol and metadata (such as the token image) comes
from the protocol's standard launch preset: the payment token, supply, curve,
graduation threshold and liquidity share.

## Create an auction with custom parameters

The builder validates required fields and basic invariants (positive
`basePrice` / `maxSupply` / `maxRaise`, a liquidity share between 20% and 100%)
before producing a config.

```typescript
const config = sdk
  .buildAuction()
  .withToken("MyToken", "MTK", parseUnits("1000000", 18))
  .withPaymentToken("0x036CbD53842c5426634e7929541eC2318f3dCF7e") // USDC Sepolia
  .withBondingCurve(
    parseCurvePrice("0.01", 6), // base price: 0.01 USDC per token
    parseCurvePrice("0.000001", 6) // slope: +0.000001 USDC per token sold
  )
  .withMaxRaise(parseUnits("50000", 6)) // graduation threshold
  .withLiquidity(5_000) // 50% of the raise seeds the Uniswap pool (the default)
  .withMetadata("ipfs://<metadata-json>")
  .build();

const hash = await sdk.createAuction(config);
```

Prices are per whole token, stored with 18 extra decimals so a curve can rise
by far less than one USDC unit per token, as a billion-token memecoin needs.
`parseCurvePrice(price, paymentDecimals)` converts a human price into those
units, and `formatCurvePrice` converts back (for example, a `getSpotPrice`
result for display).

`withLiquidity` sets the share of the raise, in basis points, that is paired
with newly minted tokens to open a Uniswap pool when the auction ends; the
creator receives the rest. The token supply must leave room for those tokens on
top of a sold-out sale, so the contract rejects a `maxSupply` that is too small.

Auction tokens can't be transferred until the auction migrates. That stops any
holder from creating or pricing the Uniswap pool ahead of the auction. Holders
can always exit before then by selling back to the curve.

## Buy tokens

```typescript
const hash = await sdk.buyTokens(0n, parseUnits("1000", 18));
```

Every purchase raises the price, so another buyer can move it between your
quote and your transaction. `buyTokens` sends a maximum total cost (cost plus
fee) and the contract reverts if the price moved past it. By default the SDK
quotes the purchase and allows 1% above that quote. To change the tolerance, or
set the bound yourself:

```typescript
await sdk.buyTokens(0n, amount, { slippageBps: 50 });        // 0.5% tolerance
await sdk.buyTokens(0n, amount, { maxCost: 11_000_000n });   // exact bound, in USDC units
```

A purchase that would take the auction past its `maxRaise` is filled with what
the remaining budget buys, and closes the auction. `getQuote` reports this up
front: `quote.amount` is what you'll actually receive and `quote.fillsAuction`
says whether your purchase completes the sale.

## Sell tokens

Until graduation, anyone can sell tokens back to the curve at the curve price,
minus the protocol fee. The tokens are burned and the seller is paid from the
raise, so the price falls by exactly what the purchase raised it.

```typescript
const quote = await sdk.getSellQuote(0n, parseUnits("400", 18));
console.log(quote.proceeds, quote.fee, quote.netProceeds);

await sdk.sellTokens(0n, parseUnits("400", 18));                       // 1% below the quote
await sdk.sellTokens(0n, parseUnits("400", 18), { slippageBps: 50 });  // 0.5% tolerance
await sdk.sellTokens(0n, parseUnits("400", 18), { minProceeds: 4_000_000n });
```

Like `buyTokens`, the contract reverts if the price moved past your bound before
the transaction landed. Purchases round up and sales round down, so a round
trip can never profit, and the contract always holds enough to buy back every
outstanding token.

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
import { calculateBuyQuote, calculateSellProceeds, spotPrice, formatCurvePrice } from "auctionflow-sdk";
```

## After graduation: migrate, withdraw, collect fees

Once an auction graduates, three things happen. Each can be called by anyone
except the withdrawal, which only the creator can make.

```typescript
// 1. Open the Uniswap v3 pool and unlock the token for trading.
await sdk.migrate(0n);
const { pool, positionId } = await sdk.getMigration(0n);

// 2. The creator claims their share of the raise.
if (!(await sdk.hasWithdrawnProceeds(0n))) {
  await sdk.withdrawProceeds(0n);
}

// 3. Later, collect the pool's trading fees.
await sdk.collectFees(0n);
```

**Migration** pairs the auction's liquidity share of the raise with newly
minted tokens and opens a 1% Uniswap v3 pool **at the auction's final price**,
so there is no price jump to arbitrage. If someone initialised the pool
beforehand at a different price, migration corrects it first. The position NFT
stays in the auction contract forever, so the liquidity can never be pulled.
Tokens Uniswap doesn't use are burned, and leftover funds go to the creator.

**Withdrawal** pays the creator everything not reserved for liquidity: with the
default 50% share, half the raise. It works before or after migration.

**Trading fees** from the pool go to the creator, minus the protocol's share
(`lpFeeShareBps`, at most 50%), fixed when the auction is created.

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
| Base Mainnet | `8453` | No canonical deployment — pass `auctionAddress` to use your own |

## API

| Member | Description |
| --- | --- |
| `new AuctionFlowSDK({ chainId, rpcUrl, walletClient?, auctionAddress? })` | Construct against a supported chain. `auctionAddress` overrides the built-in deployment; without it, a chain with no canonical deployment throws. |
| `launch(name, symbol, metadataURI?)` | One-click launch with the protocol's standard preset. Requires a wallet client. |
| `buildAuction()` | Returns an `AuctionBuilder` (fluent config builder). |
| `createAuction(config)` | Launch with custom parameters. Requires a wallet client. |
| `buyTokens(auctionId, amount, { maxCost?, slippageBps? })` | Send the `buyTokens` transaction with a maximum total cost; reverts if the price moved past it. Defaults to the quote plus 1%. Requires a wallet client. |
| `getAuction(auctionId)` | Read the full auction struct. |
| `getSpotPrice(auctionId)` | Read the current on-chain spot price. |
| `getQuote(auctionId, amount)` | Tokens actually filled, cost, fee, post-trade spot price, and whether the purchase completes the auction. |
| `applySlippage(total, slippageBps)` | The maximum cost `buyTokens` would send for a quoted total. |
| `sellTokens(auctionId, amount, { minProceeds?, slippageBps? })` | Sell back to the curve before graduation, with a minimum payout; defaults to the quote minus 1%. Requires a wallet client. |
| `getSellQuote(auctionId, amount)` | Proceeds, fee, net payout, and post-trade spot price for a sale. |
| `applySellSlippage(netProceeds, slippageBps)` | The minimum payout `sellTokens` would send for a quoted sale. |
| `migrate(auctionId)` | Open the Uniswap v3 pool at the final price, lock the liquidity, unlock the token. Anyone may call. |
| `getMigration(auctionId)` | The pool address and position NFT id, or `null` before migration. |
| `withdrawProceeds(auctionId)` | Pay the creator their share of the raise (what isn't reserved for liquidity). Creator-only, once. |
| `collectFees(auctionId)` | Collect the pool's trading fees: protocol share to the protocol, the rest to the creator. Anyone may call. |
| `hasWithdrawnProceeds(auctionId)` | Whether the creator has already claimed the proceeds. |

## License

[MIT](https://github.com/Sodiq-123/AuctionFlow/blob/main/LICENSE) — Sodiq Agunbiade
