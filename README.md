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

**Deployed contract (Base Sepolia):** [`0x722F4521b96acA1df7C65a1DbE3B1713803ccEa9`](https://sepolia.basescan.org/address/0x722F4521b96acA1df7C65a1DbE3B1713803ccEa9)

---

## Live on Base Sepolia

One complete auction, from launch to a trading Uniswap market, run against the deployed contract and picked up by the indexer.

| Step | What happened | Transaction |
| --- | --- | --- |
| Create | Auction 0 for a new DEMO token: 0.01 USDC per token to start, capped at 10.5 USDC raised, 50% of the raise reserved for liquidity, 20% of trading fees to the protocol | [`0x494692…`](https://sepolia.basescan.org/tx/0x4946922c6a15321cc85ff8d202ee0565da8305aead545a5c82fd33510c3eb14b) |
| Buy | Asked for 1,500 DEMO; the cap allowed 1,000, so the purchase was **partially filled** for 10.5 USDC plus a 0.2625 USDC protocol fee, and closed the auction | [`0x956418…`](https://sepolia.basescan.org/tx/0x9564185c830f8ab0a1a093ccfaf3447266fc0c3dc99302d86ee199d94901bf3d) |
| Migrate | Opened a 1% Uniswap v3 [pool](https://sepolia.basescan.org/address/0x657f7d0834f98d828Dd977F17Dbc9b5156Da858e) at the auction's final price (0.011 USDC) with 5.25 USDC and 477.27 newly minted DEMO, locked the position in the contract, and unlocked the token | [`0x41704b…`](https://sepolia.basescan.org/tx/0x41704b6339a7113edd3591e515b603c8e5de035adc90e1cd379749bc674093c3) |
| Withdraw | The creator claimed the other half of the raise, 5.25 USDC | [`0x7b6ee5…`](https://sepolia.basescan.org/tx/0x7b6ee5017750347fa52d2766ff0aa4ec4fcabc696d3c5b85ba579ceb0f146172) |
| Trade | Sold 100 DEMO, then bought with 1 USDC, through Uniswap's router | [`0x769c05…`](https://sepolia.basescan.org/tx/0x769c05e3ce51f202ddadff7d9833ae9f9784ad75f8ea672a8f45abdd6eed711b), [`0xceb6c7…`](https://sepolia.basescan.org/tx/0xceb6c7fdb837ddbb027df057bef75481c2f13f656bf72a5f5667e7652c17a3ee) |
| Collect fees | The pool's 1% trading fees, split 80% to the creator and 20% to the protocol | [`0x620e4f…`](https://sepolia.basescan.org/tx/0x620e4f74fcd00352088e676405dceac9dbf1ae2a0bdf226e4fbfe06044ba96e1) |

The indexer turned those events into queryable data:

```graphql
{
  auctions {
    items {
      id state totalRaised totalSold currentPrice liquidityBps
      poolAddress positionId liquidityTokens liquidityPayment
      proceedsWithdrawn lpFeesCreatorPayment lpFeesProtocolPayment
    }
  }
  protocolMetricss {
    items { totalVolumeRaised totalFeesCollected totalLpFeesCollected }
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
          "totalRaised": "10500000",
          "totalSold": "1000000000000000000000",
          "currentPrice": "11000",
          "liquidityBps": "5000",
          "poolAddress": "0x657f7d0834f98d828dd977f17dbc9b5156da858e",
          "positionId": "83164",
          "liquidityTokens": "477272727272721584742",
          "liquidityPayment": "5250000",
          "proceedsWithdrawn": true,
          "lpFeesCreatorPayment": "8000",
          "lpFeesProtocolPayment": "1999"
        }
      ]
    },
    "protocolMetricss": {
      "items": [
        {
          "totalVolumeRaised": "10500000",
          "totalFeesCollected": "262500",
          "totalLpFeesCollected": "1999"
        }
      ]
    }
  }
}
```

Amounts are in base units: USDC has 6 decimals and DEMO has 18. So the raise was 10.5 USDC for 1,000 DEMO, and the pool holds 5.25 USDC and 477.27 DEMO. The DEMO figure ends in `…21584742` rather than a round number because Uniswap rounds in its own favour; the contract burned the unused remainder. On the protocol's side, `totalFeesCollected` is the 0.2625 USDC purchase fee and `totalLpFeesCollected` is its 0.001999 USDC share of trading fees. Large integers come back as strings because GraphQL's `Int` type is limited to 32 bits.

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
5. **Payouts.** The creator withdraws the rest of the raise, and collects the pool's trading fees minus the protocol's share.

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
    parseUnits("0.01", 6),      // base price: 0.01 USDC
    parseUnits("0.000001", 6)   // slope
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
