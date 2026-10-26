# AuctionFlow

An open-source token launchpad for EVM chains: launch a token in one call, trade it on a bonding curve, and graduate it to a Uniswap v3 pool. Built from Solidity contracts, a TypeScript SDK, and a Ponder indexer with a GraphQL API.

[![Contracts](https://github.com/Sodiq-123/AuctionFlow/actions/workflows/contracts-test.yml/badge.svg)](https://github.com/Sodiq-123/AuctionFlow/actions/workflows/contracts-test.yml)
[![SDK](https://github.com/Sodiq-123/AuctionFlow/actions/workflows/sdk-test.yml/badge.svg)](https://github.com/Sodiq-123/AuctionFlow/actions/workflows/sdk-test.yml)
[![npm](https://img.shields.io/npm/v/auctionflow-sdk)](https://www.npmjs.com/package/auctionflow-sdk)

---

## Architecture

```text
┌─────────────────────────────────────────────────────────┐
│                    AuctionFlow                          │
├──────────────┬──────────────────┬───────────────────────┤
│  Contracts   │      SDK         │      Indexer          │
│  (Solidity)  │   (TypeScript)   │   (TypeScript)        │
│              │                  │                       │
│  AuctionToken│  viem client     │  Ponder framework     │
│  BondingCurve│  Builder API     │  PostgreSQL           │
│  TokenAuction│  Type-safe       │  GraphQL API          │
│              │  params          │  Multi-chain          │
│  Foundry     │  tsup + vitest   │  Real-time events     │
└──────────────┴──────────────────┴───────────────────────┘
        │               │                    │
        └───────────────┼────────────────────┘
                        │
               Base + Base Sepolia
```

**Deployed contract (Base Sepolia):** [`0x24a702F10f17A522B9B5511EC2970EE029195Ee4`](https://sepolia.basescan.org/address/0x24a702F10f17A522B9B5511EC2970EE029195Ee4)

---

## Live on Base Sepolia

One complete launch, from a one-click `launch` to a trading Uniswap market, run against the deployed contract with the standard launch preset and picked up by the indexer. The preset: 1 billion tokens priced in USDC, starting at 0.000000002 USDC each, graduating at 10 USDC raised with 80% of the raise going to the pool, a 1% protocol fee on curve trades, and 20% of pool trading fees to the protocol.

| Step | What happened | Transaction |
| --- | --- | --- |
| Launch | `launch("Flow Demo", "FLOW", "ipfs://flow-demo")` created auction 0 and its [FLOW token](https://sepolia.basescan.org/address/0xfd776239debaac00ce0704980e422de3199d2680) from the preset | [`0x93630a…`](https://sepolia.basescan.org/tx/0x93630a0ccef08a3740161f25853aad57c7c25245d988cc98e506aa61b7e5bd89) |
| Buy | 200M FLOW (20% of the supply) for 1.20 USDC plus a 0.012 USDC fee | [`0x802fa6…`](https://sepolia.basescan.org/tx/0x802fa6c02071838c298f638d87b2cc66b022736a095c7fc621e68d5cf1a7c240) |
| Sell | 50M FLOW **sold back to the curve** for 0.45 USDC less a 0.0045 USDC fee; the tokens were burned | [`0x0deba3…`](https://sepolia.basescan.org/tx/0x0deba34cc3af2394eec93956990721c6723bc283f39fbafd34b3831f2a49e01d) |
| Graduate | Asked for 600M FLOW; 508.9M fitted under the threshold, so the purchase was **partially filled** for 9.25 USDC, bringing the raise to exactly 10 USDC and closing the curve | [`0xfd72e4…`](https://sepolia.basescan.org/tx/0xfd72e403fa475fc278f02ab7a712f031ada2e7e27f21e1998a1ce07a555fc46b) |
| Migrate | Opened a 1% Uniswap v3 [pool](https://sepolia.basescan.org/address/0x81A8e61E073d080B3Aa42Ab6FC9CD6F7aeC91F1d) at the curve's final price (0.0000000284 USDC) with 8 USDC and 282.1M newly minted FLOW, locked the position in the contract, unlocked the token and renounced its ownership | [`0xf3b8f3…`](https://sepolia.basescan.org/tx/0xf3b8f36e49f54e8acbbfe34194b8222bcae702bd6042ab39fc9749347303c194) |
| Trade | Sold 50M FLOW for 1.19 USDC, then bought 42.1M FLOW with 1 USDC, through Uniswap's router | [`0x580ddc…`](https://sepolia.basescan.org/tx/0x580ddc1cede19e7339c7a10445481d424cb74eb8974a22a0333d596fb5d7527b), [`0x2ebb92…`](https://sepolia.basescan.org/tx/0x2ebb92a9f484e5c534cc25fc05e472d7acbcc34b1a4a92e58e907f9a54712373) |
| Collect fees | The pool's 1% trading fees (500,000 FLOW and 0.009999 USDC), split 80% to the creator and 20% to the protocol | [`0xe83e37…`](https://sepolia.basescan.org/tx/0xe83e37e6b1a2d75fbabfe0077b57942e802d2e65be068d0da7c69e1cc28c7ff5) |
| Withdraw | The creator claimed their 20% of the raise, 2 USDC | [`0x257529…`](https://sepolia.basescan.org/tx/0x257529d7ea5aafe52ecb5c85a0b3cd04b594e6fb96e0d75d0cc14a51cd4c671a) |

The indexer turned those events into queryable data:

```graphql
{
  auctions {
    items {
      id state totalRaised totalSold currentPrice liquidityBps metadataUri
      poolAddress positionId liquidityTokens liquidityPayment
      proceedsWithdrawn lpFeesCreatorPayment lpFeesProtocolPayment
    }
  }
  trades(orderBy: "blockNumber") {
    items { side amount value protocolFee }
  }
  protocolMetricss {
    items { totalVolumeRaised totalSellVolume totalFeesCollected totalLpFeesCollected }
  }
}
```

```json
{
  "data": {
    "auctions": {
      "items": [
        {
          "id": "0",
          "state": "MIGRATED",
          "totalRaised": "10000000",
          "totalSold": "658872332094769327778525365",
          "currentPrice": "28354893283790773",
          "liquidityBps": "8000",
          "metadataUri": "ipfs://flow-demo",
          "poolAddress": "0x81a8e61e073d080b3aa42ab6fc9cd6f7aec91f1d",
          "positionId": "83360",
          "liquidityTokens": "282138251057119753498348315",
          "liquidityPayment": "8000000",
          "proceedsWithdrawn": true,
          "lpFeesCreatorPayment": "8000",
          "lpFeesProtocolPayment": "1999"
        }
      ]
    },
    "trades": {
      "items": [
        { "side": "BUY", "amount": "200000000000000000000000000", "value": "1200000", "protocolFee": "12000" },
        { "side": "SELL", "amount": "50000000000000000000000000", "value": "450000", "protocolFee": "4500" },
        { "side": "BUY", "amount": "508872332094769327778525365", "value": "9250000", "protocolFee": "92500" }
      ]
    },
    "protocolMetricss": {
      "items": [
        {
          "totalVolumeRaised": "10450000",
          "totalSellVolume": "450000",
          "totalFeesCollected": "109000",
          "totalLpFeesCollected": "1999"
        }
      ]
    }
  }
}
```

Amounts are in base units: USDC has 6 decimals and FLOW has 18. `currentPrice` is a fixed-point price with 18 extra decimals, so `28354893283790773` is 0.0000000284 USDC per FLOW. The raise is 10 USDC: 10.45 USDC of buys less the 0.45 USDC paid out on the sell. On the protocol's side, `totalFeesCollected` is 0.109 USDC of curve fees across the three trades and `totalLpFeesCollected` is its 0.001999 USDC share of pool fees; it also received 100,000 FLOW, its share of the token-side fees. Large integers come back as strings because GraphQL's `Int` type is limited to 32 bits.

---

## Packages

| Package | Description |
| --- | --- |
| [`contracts/`](contracts/) | Solidity contracts built with Foundry |
| [`sdk/`](sdk/) | TypeScript SDK — install as `auctionflow-sdk` |
| [`indexer/`](indexer/) | Ponder indexer exposing a GraphQL API |
| [`examples/`](examples/) | End-to-end usage scripts |

---

## Quick Start

### Requirements

- Node.js v20+, pnpm v10+
- Foundry — `curl -L https://foundry.paradigm.xyz | bash && foundryup`
- Docker (for indexer's PostgreSQL)

### Install

```bash
git clone https://github.com/Sodiq-123/AuctionFlow.git
cd AuctionFlow
pnpm install
cd contracts && forge install
```

---

## Contracts

Linear bonding curve price discovery. Price = `basePrice + slope × currentSupply`.

An auction's life:

1. **Launch.** One call creates the token, either with the protocol's standard preset (`launch(name, symbol, metadataURI)`) or with custom curve parameters (`createAuction`). Trading starts immediately.
2. **Trading on the curve.** Anyone can buy, and sell back to the curve, with slippage bounds (`maxCost`, `minProceeds`). Buys round up and sells round down, so the contract can always buy back every outstanding token. Tokens can't be transferred until graduation; selling back is how holders exit.
3. **Graduation.** The purchase that reaches the threshold (`maxRaise`) is partially filled and closes the curve.
4. **Migration.** Anyone calls `migrate`. A creator-chosen share of the raise (20–100%) is paired with newly minted tokens in a 1% Uniswap v3 pool at the auction's final price, and the position is locked in the contract forever. The token unlocks for trading.
5. **Payouts.** The creator withdraws the rest of the raise. Anyone can collect the pool's trading fees; the creator claims their share, and the protocol's share is paid to its fee recipient. Payouts are claimed rather than sent, so no recipient can block a trade or a migration.

New launches can only be priced in payment tokens the owner has approved (USDC). The owner can pause new launches and curve buys in an emergency, but never selling back, migration, withdrawals or claims.

**Security:** [`contracts/THREAT_MODEL.md`](contracts/THREAT_MODEL.md) covers what's at risk, what the owner can and cannot do, the attacks considered and how each is handled. The contracts have not been externally audited.

```text
contracts/src/
├── AuctionToken.sol             ERC-20 with capped minting and a transfer lock until migration
├── BondingCurve.sol             Pure math library (integral of linear curve, rounded up)
├── TokenAuction.sol             Main auction contract: sale, migration, payouts
└── interfaces/IUniswapV3.sol    The Uniswap v3 calls migration needs
```

### Run tests

```bash
cd contracts
forge test -vvv
```

The migration tests in `test/fork/` run against real Uniswap v3 on a fork of Base mainnet. They read `BASE_RPC_URL` from `contracts/.env` and are skipped when it's unset.

### Deploy to Base Sepolia

```bash
cd contracts
cp .env.example .env   # fill in PRIVATE_KEY, BASE_SEPOLIA_RPC_URL, FEE_RECIPIENT

forge script script/Deploy.s.sol \
  --rpc-url $BASE_SEPOLIA_RPC_URL \
  --broadcast \
  --verify
```

---

## SDK

Type-safe TypeScript wrapper around the contracts using [viem](https://viem.sh).

### npm install

```bash
npm install auctionflow-sdk viem
# or
pnpm add auctionflow-sdk viem
```

### Usage

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
  chainId: 84532,
  rpcUrl: "https://sepolia.base.org",
  walletClient,
  // auctionAddress: "0x..."  // to target your own deployment instead
});

// One-click launch with the protocol's standard preset
await sdk.launch("My Token", "MTK", "ipfs://<metadata-json>");

// ...or choose the curve yourself
const config = sdk
  .buildAuction()
  .withToken("MyToken", "MTK", parseUnits("1000000", 18))
  .withPaymentToken("0x036CbD53842c5426634e7929541eC2318f3dCF7e") // USDC Sepolia
  .withBondingCurve(
    parseCurvePrice("0.01", 6),      // base price: 0.01 USDC per token
    parseCurvePrice("0.000001", 6)   // slope: +0.000001 USDC per token sold
  )
  .withMaxRaise(parseUnits("50000", 6)) // graduation threshold
  .build();
await sdk.createAuction(config);

// Trade on the curve (quotes are off-chain, no gas)
const quote = await sdk.getQuote(0n, parseUnits("1000", 18));
console.log(`Cost: ${quote.totalCost} USDC units (fee: ${quote.fee})`);
await sdk.buyTokens(0n, parseUnits("1000", 18));
await sdk.sellTokens(0n, parseUnits("400", 18));

// After graduation: open the Uniswap pool, then the creator claims their
// share of the raise
await sdk.migrate(0n);
if (!(await sdk.hasWithdrawnProceeds(0n))) {
  await sdk.withdrawProceeds(0n);
}
```

---

## Indexer

Ponder-based indexer that listens to on-chain events and exposes a **GraphQL API** over PostgreSQL.

### Run locally

```bash
cd indexer
cp .env.example .env.local  # then set PONDER_RPC_URL_84532
pnpm dev                    # start Ponder (hot reload)
# GraphQL playground: http://localhost:42069/graphql
```

With no `DATABASE_URL`, Ponder stores its data in an embedded Postgres (PGlite) under `indexer/.ponder`, so nothing else needs to run. To index into a real Postgres, set `DATABASE_URL` in `.env.local` — either to your own server, or to the bundled container (`docker compose up -d`, exposed on port 5433 so it can't collide with a local install on 5432).

### Multi-chain (Base + Base Sepolia)

```bash
pnpm dev --config ponder.config.multichain.ts
```

### Example queries

```graphql
# Active auctions, newest first
query ActiveAuctions {
  auctions(where: { state: "ACTIVE" }, orderBy: "createdAt", orderDirection: "desc") {
    items {
      id
      creator
      tokenAddress
      currentPrice
      totalRaised
      maxRaise
      state
    }
  }
}

# Live trade feed for a token: buys and sells on the curve, newest first
query TradeFeed($id: String!) {
  trades(where: { auctionId: $id }, orderBy: "timestamp", orderDirection: "desc", limit: 20) {
    items {
      side
      trader
      amount
      value
      pricePerToken
      timestamp
    }
  }
}

# Price chart data for an auction
query AuctionPriceChart($id: String!) {
  priceSnapshots(where: { auctionId: $id }, orderBy: "blockNumber", orderDirection: "asc") {
    items {
      price
      totalSold
      timestamp
    }
  }
}

# Protocol-wide metrics
query ProtocolStats {
  protocolMetricss {
    items {
      totalAuctions
      activeAuctions
      completedAuctions
      totalVolumeRaised
      totalFeesCollected
    }
  }
}

# Top buyers leaderboard
query TopBuyers {
  participants(orderBy: "totalSpent", orderDirection: "desc") {
    items {
      address
      totalSpent
      totalPurchased
      purchaseCount
    }
  }
}
```

---

## How the bonding curve works

Each auction uses a **linear bonding curve**: price increases as more tokens are sold.

```text
price = basePrice + slope × totalSold
```

The cost to buy `n` tokens from current supply `s` is the integral:

```text
cost = basePrice × n + slope × n × (2s + n) / 2
```

This means early buyers pay less; later buyers pay more. The off-chain SDK calculation in [`sdk/src/utils/bonding-curve.ts`](sdk/src/utils/bonding-curve.ts) mirrors the Solidity library exactly.

---

## CI / CD

| Workflow | Trigger | What it does |
| --- | --- | --- |
| `contracts-test.yml` | PR touching `contracts/` | `forge test -vvv` |
| `sdk-test.yml` | PR touching `sdk/` | Type check + vitest + build |
| `indexer-test.yml` | PR touching `indexer/` | TypeScript type check |
| `sdk-release.yml` | Tag `sdk-v*` | Build + test + publish to npm |

### Releasing the SDK

```bash
# 1. Add a changeset
pnpm changeset

# 2. Version the package
pnpm changeset version

# 3. Commit + tag
git add . && git commit -m "chore: release sdk-v1.1.0"
git tag sdk-v1.1.0
git push && git push --tags
# CI publishes to npm automatically
```

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE) — Sodiq Agunbiade
