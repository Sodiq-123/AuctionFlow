# AuctionFlow

An open-source token price discovery & indexing platform — a TypeScript SDK, Ponder-based blockchain indexer with GraphQL API, and Solidity smart contracts for token auctions via bonding curves on EVM chains.

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

**Deployed contract (Base Sepolia):** [`0xadc3e02e962eed3856d7bee0315f84d187be1fea`](https://sepolia.basescan.org/address/0xadc3e02e962eed3856d7bee0315f84d187be1fea)

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

```text
contracts/src/
├── AuctionToken.sol    ERC-20 with owner-controlled minting
├── BondingCurve.sol    Pure math library (integral of linear curve)
└── TokenAuction.sol    Main auction contract
```

### Run tests

```bash
cd contracts
forge test -vvv
```

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

// Build and create an auction
const config = sdk
  .buildAuction()
  .withToken("MyToken", "MTK", parseUnits("1000000", 18))
  .withPaymentToken("0x036CbD53842c5426634e7929541eC2318f3dCF7e") // USDC Sepolia
  .withBondingCurve(
    parseUnits("0.01", 6),      // base price: 0.01 USDC
    parseUnits("0.000001", 6)   // slope
  )
  .withMaxRaise(parseUnits("50000", 6))
  .withSchedule(
    BigInt(Math.floor(Date.now() / 1000) + 3600),
    BigInt(Math.floor(Date.now() / 1000) + 3600 * 72)
  )
  .build();

const hash = await sdk.createAuction(config);

// Get a buy quote (off-chain, no gas)
const quote = await sdk.getQuote(0n, parseUnits("1000", 18));
console.log(`Cost: ${quote.totalCost} USDC units (fee: ${quote.fee})`);

// After the auction completes, the creator claims the raised funds
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
docker compose up -d        # start PostgreSQL
pnpm dev                    # start Ponder (hot reload)
# GraphQL playground: http://localhost:42069/graphql
```

### Multi-chain (Base + Base Sepolia)

```bash
pnpm dev --config ponder.config.multichain.ts
```

### Example queries

```graphql
# All active auctions
query ActiveAuctions {
  auctions(orderBy: "createdAt", orderDirection: "desc") {
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

# Price chart data for an auction
query AuctionPriceChart($id: String!) {
  auction(id: $id) {
    priceSnapshots(orderBy: "blockNumber", orderDirection: "asc") {
      items {
        price
        totalSold
        timestamp
      }
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
