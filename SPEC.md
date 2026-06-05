# Project: AuctionFlow — An Open-Source Token Price Discovery & Indexing Platform

> A portfolio project that mirrors Doppler's architecture: a TypeScript SDK, a Ponder-based blockchain indexer with GraphQL API, and Solidity smart contracts for token auctions via bonding curves on EVM chains.

---

## Why This Project

This project directly demonstrates every skill Whetstone is hiring for:

| Whetstone Requirement | What This Project Proves |
|---|---|
| Reliable, scalable backend data services | You build a production-grade indexer with PostgreSQL |
| Deep TypeScript + GraphQL proficiency | Entire stack is TypeScript; indexer exposes GraphQL |
| Blockchain/multichain indexer deployments | Ponder-based indexer across Base + Base Sepolia |
| Open-source project management | Public repo with versioning, changelogs, docs, CI |
| EVM-based protocol familiarity | Solidity contracts using Uniswap-style patterns |

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                    AuctionFlow                          │
├──────────────┬──────────────────┬───────────────────────┤
│  Contracts   │      SDK         │      Indexer          │
│  (Solidity)  │   (TypeScript)   │   (TypeScript)        │
│              │                  │                       │
│  - Auction   │  - viem client   │  - Ponder framework   │
│  - Token     │  - Builder API   │  - PostgreSQL         │
│  - Bonding   │  - Type-safe     │  - GraphQL API        │
│    Curve     │    params        │  - Multi-chain        │
│  - Migration │  - Simulation    │    config             │
│              │    support       │  - Real-time          │
│  Foundry     │  tsup + vitest   │    event indexing     │
└──────────────┴──────────────────┴───────────────────────┘
        │               │                    │
        └───────────────┼────────────────────┘
                        │
                   Base Sepolia
                   (testnet)
```

---

## Part 1: Smart Contracts (Solidity + Foundry)

### What You're Building

A simplified token auction protocol with bonding curve price discovery — the same core concept as Doppler but scoped to be buildable in 1-2 weeks.

### Contracts to Implement

#### 1. `AuctionToken.sol` — ERC-20 with Controlled Minting

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AuctionToken is ERC20, Ownable {
    uint256 public maxSupply;

    constructor(
        string memory name_,
        string memory symbol_,
        uint256 maxSupply_,
        address owner_
    ) ERC20(name_, symbol_) Ownable(owner_) {
        maxSupply = maxSupply_;
    }

    function mint(address to, uint256 amount) external onlyOwner {
        require(totalSupply() + amount <= maxSupply, "Exceeds max supply");
        _mint(to, amount);
    }
}
```

#### 2. `BondingCurve.sol` — Price Discovery Engine

This is the core — it determines the token price based on supply using a linear bonding curve: `price = basePrice + (slope * currentSupply)`.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/utils/math/Math.sol";

library BondingCurve {
    /// @notice Calculate cost to buy `amount` tokens starting from `currentSupply`
    /// @dev Uses integral of linear curve: ∫(basePrice + slope * x)dx from s to s+a
    ///      = basePrice * a + slope * (a * (2s + a)) / 2
    function calculateBuyCost(
        uint256 currentSupply,
        uint256 amount,
        uint256 basePrice,
        uint256 slope
    ) internal pure returns (uint256) {
        // Cost = basePrice * amount + slope * amount * (2 * currentSupply + amount) / 2
        uint256 linearCost = basePrice * amount;
        uint256 curveCost = (slope * amount * (2 * currentSupply + amount)) / 2;
        return linearCost + curveCost;
    }

    /// @notice Calculate current spot price at a given supply
    function spotPrice(
        uint256 currentSupply,
        uint256 basePrice,
        uint256 slope
    ) internal pure returns (uint256) {
        return basePrice + (slope * currentSupply);
    }
}
```

#### 3. `TokenAuction.sol` — The Main Auction Contract

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./AuctionToken.sol";
import "./BondingCurve.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenAuction is ReentrancyGuard, Ownable {
    using SafeERC20 for IERC20;

    enum AuctionState { PENDING, ACTIVE, COMPLETED, MIGRATED }

    struct AuctionConfig {
        AuctionToken token;           // The token being auctioned
        IERC20 paymentToken;          // e.g., USDC
        uint256 basePrice;            // Starting price in payment token units
        uint256 slope;                // Bonding curve slope
        uint256 maxRaise;             // Max payment tokens to collect
        uint256 startTime;
        uint256 endTime;
        address creator;              // Token creator address
        uint256 protocolFeeBps;       // Protocol fee in basis points (e.g., 250 = 2.5%)
    }

    struct AuctionData {
        AuctionConfig config;
        AuctionState state;
        uint256 totalRaised;          // Total payment tokens collected
        uint256 totalSold;            // Total auction tokens sold
    }

    // State
    uint256 public auctionCount;
    mapping(uint256 => AuctionData) public auctions;
    mapping(uint256 => mapping(address => uint256)) public userPurchases;

    // Protocol
    address public protocolFeeRecipient;
    uint256 public defaultFeeBps;

    // Events — these are what the indexer will listen to
    event AuctionCreated(
        uint256 indexed auctionId,
        address indexed creator,
        address token,
        address paymentToken,
        uint256 basePrice,
        uint256 slope,
        uint256 maxRaise,
        uint256 startTime,
        uint256 endTime
    );

    event TokensPurchased(
        uint256 indexed auctionId,
        address indexed buyer,
        uint256 amount,
        uint256 cost,
        uint256 protocolFee,
        uint256 newTotalRaised,
        uint256 newTotalSold
    );

    event AuctionCompleted(uint256 indexed auctionId, uint256 totalRaised, uint256 totalSold);
    event AuctionMigrated(uint256 indexed auctionId, address liquidityPool);

    constructor(address feeRecipient_, uint256 defaultFeeBps_) Ownable(msg.sender) {
        protocolFeeRecipient = feeRecipient_;
        defaultFeeBps = defaultFeeBps_;
    }

    function createAuction(
        string memory name,
        string memory symbol,
        uint256 maxSupply,
        address paymentToken,
        uint256 basePrice,
        uint256 slope,
        uint256 maxRaise,
        uint256 startTime,
        uint256 endTime
    ) external returns (uint256 auctionId) {
        require(startTime > block.timestamp, "Start must be in future");
        require(endTime > startTime, "End must be after start");

        auctionId = auctionCount++;

        // Deploy token — auction contract owns it for minting
        AuctionToken token = new AuctionToken(name, symbol, maxSupply, address(this));

        auctions[auctionId] = AuctionData({
            config: AuctionConfig({
                token: token,
                paymentToken: IERC20(paymentToken),
                basePrice: basePrice,
                slope: slope,
                maxRaise: maxRaise,
                startTime: startTime,
                endTime: endTime,
                creator: msg.sender,
                protocolFeeBps: defaultFeeBps
            }),
            state: AuctionState.ACTIVE,
            totalRaised: 0,
            totalSold: 0
        });

        emit AuctionCreated(
            auctionId, msg.sender, address(token), paymentToken,
            basePrice, slope, maxRaise, startTime, endTime
        );
    }

    function buyTokens(uint256 auctionId, uint256 amount) external nonReentrant {
        AuctionData storage auction = auctions[auctionId];
        require(auction.state == AuctionState.ACTIVE, "Auction not active");
        require(block.timestamp >= auction.config.startTime, "Not started");
        require(block.timestamp <= auction.config.endTime, "Ended");

        uint256 cost = BondingCurve.calculateBuyCost(
            auction.totalSold,
            amount,
            auction.config.basePrice,
            auction.config.slope
        );

        uint256 protocolFee = (cost * auction.config.protocolFeeBps) / 10000;
        uint256 totalCost = cost + protocolFee;

        require(auction.totalRaised + cost <= auction.config.maxRaise, "Exceeds max raise");

        // Collect payment
        auction.config.paymentToken.safeTransferFrom(msg.sender, address(this), cost);
        if (protocolFee > 0) {
            auction.config.paymentToken.safeTransferFrom(msg.sender, protocolFeeRecipient, protocolFee);
        }

        // Mint tokens to buyer
        auction.config.token.mint(msg.sender, amount);

        // Update state
        auction.totalRaised += cost;
        auction.totalSold += amount;
        userPurchases[auctionId][msg.sender] += amount;

        emit TokensPurchased(
            auctionId, msg.sender, amount, cost, protocolFee,
            auction.totalRaised, auction.totalSold
        );

        // Auto-complete if max raise hit
        if (auction.totalRaised >= auction.config.maxRaise) {
            auction.state = AuctionState.COMPLETED;
            emit AuctionCompleted(auctionId, auction.totalRaised, auction.totalSold);
        }
    }

    function completeAuction(uint256 auctionId) external {
        AuctionData storage auction = auctions[auctionId];
        require(
            msg.sender == auction.config.creator || msg.sender == owner(),
            "Not authorized"
        );
        require(block.timestamp > auction.config.endTime, "Auction not ended");
        require(auction.state == AuctionState.ACTIVE, "Not active");

        auction.state = AuctionState.COMPLETED;
        emit AuctionCompleted(auctionId, auction.totalRaised, auction.totalSold);
    }

    // View functions
    function getSpotPrice(uint256 auctionId) external view returns (uint256) {
        AuctionData storage auction = auctions[auctionId];
        return BondingCurve.spotPrice(
            auction.totalSold,
            auction.config.basePrice,
            auction.config.slope
        );
    }

    function getBuyCost(uint256 auctionId, uint256 amount) external view returns (uint256 cost, uint256 fee) {
        AuctionData storage auction = auctions[auctionId];
        cost = BondingCurve.calculateBuyCost(
            auction.totalSold, amount,
            auction.config.basePrice, auction.config.slope
        );
        fee = (cost * auction.config.protocolFeeBps) / 10000;
    }
}
```

### Foundry Project Setup

```bash
# Initialize
mkdir auctionflow && cd auctionflow
mkdir contracts sdk indexer

# Contracts
cd contracts
forge init --no-commit
forge install OpenZeppelin/openzeppelin-contracts

# foundry.toml
# [profile.default]
# src = "src"
# out = "out"
# libs = ["lib"]
# solc = "0.8.24"
# evm_version = "cancun"
#
# [rpc_endpoints]
# base_sepolia = "${BASE_SEPOLIA_RPC_URL}"
```

### Tests to Write

```
test/
├── unit/
│   ├── BondingCurve.t.sol        # Test curve math in isolation
│   └── AuctionToken.t.sol        # Test mint/maxSupply constraints
├── integration/
│   ├── TokenAuction.create.t.sol # Create auction + verify state
│   ├── TokenAuction.buy.t.sol    # Buy tokens + verify pricing
│   └── TokenAuction.complete.t.sol
└── invariant/
    └── TokenAuction.invariant.t.sol  # totalRaised <= maxRaise, etc.
```

### Deployment Script

```solidity
// script/Deploy.s.sol
pragma solidity ^0.8.24;

import "forge-std/Script.sol";
import "../src/TokenAuction.sol";

contract Deploy is Script {
    function run() external {
        uint256 deployerKey = vm.envUint("PRIVATE_KEY");
        address feeRecipient = vm.envAddress("FEE_RECIPIENT");

        vm.startBroadcast(deployerKey);

        TokenAuction auction = new TokenAuction(feeRecipient, 250); // 2.5% fee

        vm.stopBroadcast();

        console.log("TokenAuction deployed at:", address(auction));
    }
}
```

Deploy to Base Sepolia:
```bash
forge script script/Deploy.s.sol --rpc-url $BASE_SEPOLIA_RPC_URL --broadcast --verify
```

---

## Part 2: TypeScript SDK

### What You're Building

A type-safe SDK that wraps contract interactions using `viem` (same as Doppler SDK). Uses builder pattern for auction creation.

### Project Setup

```bash
cd ../sdk
pnpm init
pnpm add viem
pnpm add -D typescript tsup vitest @types/node
```

### `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist", "test"]
}
```

### `tsup.config.ts`

```typescript
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
});
```

### Directory Structure

```
sdk/
├── src/
│   ├── index.ts                    # Public exports
│   ├── client.ts                   # AuctionFlowSDK main class
│   ├── builders/
│   │   └── auction-builder.ts      # Fluent builder for auction creation
│   ├── actions/
│   │   ├── create-auction.ts       # createAuction transaction
│   │   ├── buy-tokens.ts           # buyTokens transaction
│   │   ├── complete-auction.ts     # completeAuction transaction
│   │   └── get-auction.ts          # Read auction state
│   ├── abis/
│   │   ├── token-auction.ts        # TokenAuction ABI (from forge)
│   │   └── auction-token.ts        # AuctionToken ABI
│   ├── types/
│   │   └── index.ts                # All TypeScript types
│   ├── constants/
│   │   └── addresses.ts            # Deployed addresses per chain
│   └── utils/
│       ├── bonding-curve.ts        # Off-chain curve calculations
│       └── chains.ts               # Supported chain configs
├── test/
│   ├── unit/
│   │   └── bonding-curve.test.ts
│   └── integration/
│       └── create-auction.test.ts
├── tsconfig.json
├── tsup.config.ts
├── vitest.config.ts
└── package.json
```

### Core SDK Code

#### `src/types/index.ts`

```typescript
import { Address, Hash } from "viem";

export enum AuctionState {
  PENDING = 0,
  ACTIVE = 1,
  COMPLETED = 2,
  MIGRATED = 3,
}

export interface AuctionConfig {
  name: string;
  symbol: string;
  maxSupply: bigint;
  paymentToken: Address;
  basePrice: bigint;
  slope: bigint;
  maxRaise: bigint;
  startTime: bigint;
  endTime: bigint;
}

export interface AuctionData {
  id: bigint;
  token: Address;
  paymentToken: Address;
  creator: Address;
  basePrice: bigint;
  slope: bigint;
  maxRaise: bigint;
  startTime: bigint;
  endTime: bigint;
  state: AuctionState;
  totalRaised: bigint;
  totalSold: bigint;
  protocolFeeBps: bigint;
}

export interface BuyQuote {
  cost: bigint;
  fee: bigint;
  totalCost: bigint;
  spotPriceAfter: bigint;
}

export interface TransactionResult {
  hash: Hash;
}

export type SupportedChainId = 8453 | 84532; // Base, Base Sepolia
```

#### `src/constants/addresses.ts`

```typescript
import { Address } from "viem";
import { SupportedChainId } from "../types";

export const AUCTION_ADDRESSES: Record<SupportedChainId, Address> = {
  84532: "0x...", // Base Sepolia — fill after deployment
  8453: "0x...",  // Base Mainnet — fill after deployment
};

export const USDC_ADDRESSES: Record<SupportedChainId, Address> = {
  84532: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
  8453: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
};
```

#### `src/utils/bonding-curve.ts`

```typescript
/**
 * Off-chain bonding curve calculations (mirrors BondingCurve.sol)
 */
export function calculateBuyCost(
  currentSupply: bigint,
  amount: bigint,
  basePrice: bigint,
  slope: bigint
): bigint {
  const linearCost = basePrice * amount;
  const curveCost =
    (slope * amount * (2n * currentSupply + amount)) / 2n;
  return linearCost + curveCost;
}

export function spotPrice(
  currentSupply: bigint,
  basePrice: bigint,
  slope: bigint
): bigint {
  return basePrice + slope * currentSupply;
}

export function calculateBuyQuote(
  currentSupply: bigint,
  amount: bigint,
  basePrice: bigint,
  slope: bigint,
  feeBps: bigint
): { cost: bigint; fee: bigint; total: bigint; spotPriceAfter: bigint } {
  const cost = calculateBuyCost(currentSupply, amount, basePrice, slope);
  const fee = (cost * feeBps) / 10000n;
  return {
    cost,
    fee,
    total: cost + fee,
    spotPriceAfter: spotPrice(currentSupply + amount, basePrice, slope),
  };
}
```

#### `src/builders/auction-builder.ts`

```typescript
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
```

#### `src/client.ts`

```typescript
import {
  createPublicClient,
  createWalletClient,
  http,
  PublicClient,
  WalletClient,
  Chain,
  Address,
  Hash,
} from "viem";
import { baseSepolia, base } from "viem/chains";
import { AuctionBuilder } from "./builders/auction-builder";
import { AuctionConfig, AuctionData, BuyQuote, SupportedChainId } from "./types";
import { AUCTION_ADDRESSES } from "./constants/addresses";
import { tokenAuctionAbi } from "./abis/token-auction";
import { calculateBuyQuote } from "./utils/bonding-curve";

const CHAINS: Record<SupportedChainId, Chain> = {
  84532: baseSepolia,
  8453: base,
};

export class AuctionFlowSDK {
  public readonly publicClient: PublicClient;
  public readonly walletClient?: WalletClient;
  public readonly auctionAddress: Address;
  public readonly chainId: SupportedChainId;

  constructor(params: {
    chainId: SupportedChainId;
    rpcUrl: string;
    walletClient?: WalletClient;
  }) {
    this.chainId = params.chainId;
    this.auctionAddress = AUCTION_ADDRESSES[params.chainId];

    this.publicClient = createPublicClient({
      chain: CHAINS[params.chainId],
      transport: http(params.rpcUrl),
    });

    this.walletClient = params.walletClient;
  }

  // Builder
  buildAuction(): AuctionBuilder {
    return new AuctionBuilder();
  }

  // Write: Create auction
  async createAuction(config: AuctionConfig): Promise<Hash> {
    if (!this.walletClient) throw new Error("Wallet client required");

    const hash = await this.walletClient.writeContract({
      address: this.auctionAddress,
      abi: tokenAuctionAbi,
      functionName: "createAuction",
      args: [
        config.name,
        config.symbol,
        config.maxSupply,
        config.paymentToken,
        config.basePrice,
        config.slope,
        config.maxRaise,
        config.startTime,
        config.endTime,
      ],
    });

    return hash;
  }

  // Write: Buy tokens
  async buyTokens(auctionId: bigint, amount: bigint): Promise<Hash> {
    if (!this.walletClient) throw new Error("Wallet client required");

    const hash = await this.walletClient.writeContract({
      address: this.auctionAddress,
      abi: tokenAuctionAbi,
      functionName: "buyTokens",
      args: [auctionId, amount],
    });

    return hash;
  }

  // Read: Get auction data
  async getAuction(auctionId: bigint): Promise<AuctionData> {
    const result = await this.publicClient.readContract({
      address: this.auctionAddress,
      abi: tokenAuctionAbi,
      functionName: "auctions",
      args: [auctionId],
    });

    // Parse the tuple returned by the contract
    return this.parseAuctionResult(auctionId, result);
  }

  // Read: Get buy quote (off-chain calculation)
  async getQuote(auctionId: bigint, amount: bigint): Promise<BuyQuote> {
    const auction = await this.getAuction(auctionId);
    const quote = calculateBuyQuote(
      auction.totalSold,
      amount,
      auction.basePrice,
      auction.slope,
      auction.protocolFeeBps
    );

    return {
      cost: quote.cost,
      fee: quote.fee,
      totalCost: quote.total,
      spotPriceAfter: quote.spotPriceAfter,
    };
  }

  // Read: Get spot price
  async getSpotPrice(auctionId: bigint): Promise<bigint> {
    return this.publicClient.readContract({
      address: this.auctionAddress,
      abi: tokenAuctionAbi,
      functionName: "getSpotPrice",
      args: [auctionId],
    }) as Promise<bigint>;
  }

  private parseAuctionResult(id: bigint, raw: any): AuctionData {
    // Adapt based on actual struct layout from ABI
    return {
      id,
      token: raw.config.token,
      paymentToken: raw.config.paymentToken,
      creator: raw.config.creator,
      basePrice: raw.config.basePrice,
      slope: raw.config.slope,
      maxRaise: raw.config.maxRaise,
      startTime: raw.config.startTime,
      endTime: raw.config.endTime,
      state: raw.state,
      totalRaised: raw.totalRaised,
      totalSold: raw.totalSold,
      protocolFeeBps: raw.config.protocolFeeBps,
    };
  }
}
```

#### `src/index.ts`

```typescript
export { AuctionFlowSDK } from "./client";
export { AuctionBuilder } from "./builders/auction-builder";
export * from "./types";
export * from "./constants/addresses";
export * from "./utils/bonding-curve";
```

### SDK Usage Example (for README)

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
});

// Build auction config
const config = sdk
  .buildAuction()
  .withToken("MyToken", "MTK", parseUnits("1000000", 18))
  .withPaymentToken("0x036CbD53842c5426634e7929541eC2318f3dCF7e") // USDC Sepolia
  .withBondingCurve(
    parseUnits("0.01", 6),   // Base price: 0.01 USDC
    parseUnits("0.000001", 6) // Slope
  )
  .withMaxRaise(parseUnits("50000", 6))  // 50k USDC max
  .withSchedule(
    BigInt(Math.floor(Date.now() / 1000) + 3600),      // Starts in 1 hour
    BigInt(Math.floor(Date.now() / 1000) + 3600 * 72)  // Ends in 3 days
  )
  .build();

// Create auction
const hash = await sdk.createAuction(config);
console.log("Auction created:", hash);

// Get a buy quote
const quote = await sdk.getQuote(0n, parseUnits("1000", 18));
console.log(`Cost for 1000 tokens: ${quote.totalCost} (fee: ${quote.fee})`);
```

---

## Part 3: Blockchain Indexer (Ponder + GraphQL + PostgreSQL)

### What You're Building

A Ponder-based indexer that listens to on-chain events from your TokenAuction contract and exposes a **GraphQL API** for querying auction state, purchase history, price charts, and leaderboards.

This is the most important part for the Whetstone role.

### Project Setup

```bash
cd ../indexer
pnpm create ponder

# When prompted:
# - Template: empty
# - Network: Base Sepolia
```

### Directory Structure

```
indexer/
├── ponder.config.ts          # Network + contract config
├── ponder.schema.ts          # GraphQL schema (database tables)
├── src/
│   ├── TokenAuction.ts       # Event handlers for TokenAuction
│   └── utils/
│       └── pricing.ts        # Price calculation helpers
├── abis/
│   └── TokenAuction.json     # ABI from Foundry build
├── .env.local                # RPC URLs
├── docker-compose.yml        # PostgreSQL for local dev
├── package.json
└── tsconfig.json
```

### `docker-compose.yml`

```yaml
version: "3.8"
services:
  postgres:
    image: postgres:16
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: auctionflow
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:
```

### `.env.local`

```
PONDER_RPC_URL_84532=https://sepolia.base.org
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/auctionflow
```

### `ponder.config.ts`

```typescript
import { createConfig } from "ponder";
import { http } from "viem";
import { baseSepolia } from "viem/chains";
import { TokenAuctionAbi } from "./abis/TokenAuction";

export default createConfig({
  networks: {
    baseSepolia: {
      chainId: 84532,
      transport: http(process.env.PONDER_RPC_URL_84532),
    },
  },
  contracts: {
    TokenAuction: {
      network: "baseSepolia",
      abi: TokenAuctionAbi,
      address: "0x...", // Fill after deployment
      startBlock: 0,    // Fill with deployment block
    },
  },
});
```

### `ponder.schema.ts` — This Defines Your GraphQL API

```typescript
import { onchainTable, relations } from "ponder";

// ─── Tables (each becomes a GraphQL type) ───

export const auction = onchainTable("auction", (t) => ({
  id: t.text().primaryKey(),                    // auctionId as string
  auctionId: t.bigint().notNull(),
  creator: t.hex().notNull(),
  tokenAddress: t.hex().notNull(),
  paymentTokenAddress: t.hex().notNull(),
  basePrice: t.bigint().notNull(),
  slope: t.bigint().notNull(),
  maxRaise: t.bigint().notNull(),
  startTime: t.bigint().notNull(),
  endTime: t.bigint().notNull(),
  state: t.text().notNull(),                    // ACTIVE, COMPLETED, MIGRATED
  totalRaised: t.bigint().notNull(),
  totalSold: t.bigint().notNull(),
  currentPrice: t.bigint().notNull(),           // Computed spot price
  createdAt: t.bigint().notNull(),              // Block timestamp
  completedAt: t.bigint(),
  transactionHash: t.hex().notNull(),
}));

export const purchase = onchainTable("purchase", (t) => ({
  id: t.text().primaryKey(),                    // txHash-logIndex
  auctionId: t.text().notNull(),
  buyer: t.hex().notNull(),
  amount: t.bigint().notNull(),
  cost: t.bigint().notNull(),
  protocolFee: t.bigint().notNull(),
  pricePerToken: t.bigint().notNull(),          // cost / amount
  timestamp: t.bigint().notNull(),
  transactionHash: t.hex().notNull(),
  blockNumber: t.bigint().notNull(),
}));

export const participant = onchainTable("participant", (t) => ({
  id: t.text().primaryKey(),                    // auctionId-buyerAddress
  auctionId: t.text().notNull(),
  address: t.hex().notNull(),
  totalPurchased: t.bigint().notNull(),
  totalSpent: t.bigint().notNull(),
  purchaseCount: t.integer().notNull(),
  firstPurchaseAt: t.bigint().notNull(),
  lastPurchaseAt: t.bigint().notNull(),
}));

export const priceSnapshot = onchainTable("price_snapshot", (t) => ({
  id: t.text().primaryKey(),                    // auctionId-blockNumber
  auctionId: t.text().notNull(),
  price: t.bigint().notNull(),
  totalSold: t.bigint().notNull(),
  totalRaised: t.bigint().notNull(),
  timestamp: t.bigint().notNull(),
  blockNumber: t.bigint().notNull(),
}));

export const protocolMetrics = onchainTable("protocol_metrics", (t) => ({
  id: t.text().primaryKey(),                    // "global"
  totalAuctions: t.integer().notNull(),
  activeAuctions: t.integer().notNull(),
  completedAuctions: t.integer().notNull(),
  totalVolumeRaised: t.bigint().notNull(),
  totalFeesCollected: t.bigint().notNull(),
}));

// ─── Relations ───

export const auctionRelations = relations(auction, ({ many }) => ({
  purchases: many(purchase),
  participants: many(participant),
  priceSnapshots: many(priceSnapshot),
}));

export const purchaseRelations = relations(purchase, ({ one }) => ({
  auction: one(auction, { fields: [purchase.auctionId], references: [auction.id] }),
}));

export const participantRelations = relations(participant, ({ one }) => ({
  auction: one(auction, { fields: [participant.auctionId], references: [auction.id] }),
}));

export const priceSnapshotRelations = relations(priceSnapshot, ({ one }) => ({
  auction: one(auction, { fields: [priceSnapshot.auctionId], references: [auction.id] }),
}));
```

### `src/TokenAuction.ts` — Event Handlers

```typescript
import { ponder } from "ponder:registry";
import * as schema from "../ponder.schema";

// ─── AuctionCreated ───

ponder.on("TokenAuction:AuctionCreated", async ({ event, context }) => {
  const { db } = context;
  const {
    auctionId, creator, token, paymentToken,
    basePrice, slope, maxRaise, startTime, endTime,
  } = event.args;

  const id = auctionId.toString();

  // Upsert auction record
  await db.insert(schema.auction).values({
    id,
    auctionId,
    creator,
    tokenAddress: token,
    paymentTokenAddress: paymentToken,
    basePrice,
    slope,
    maxRaise,
    startTime,
    endTime,
    state: "ACTIVE",
    totalRaised: 0n,
    totalSold: 0n,
    currentPrice: basePrice,
    createdAt: event.block.timestamp,
    transactionHash: event.transaction.hash,
  });

  // Initial price snapshot
  await db.insert(schema.priceSnapshot).values({
    id: `${id}-${event.block.number}`,
    auctionId: id,
    price: basePrice,
    totalSold: 0n,
    totalRaised: 0n,
    timestamp: event.block.timestamp,
    blockNumber: event.block.number,
  });

  // Update protocol metrics
  await db
    .insert(schema.protocolMetrics)
    .values({
      id: "global",
      totalAuctions: 1,
      activeAuctions: 1,
      completedAuctions: 0,
      totalVolumeRaised: 0n,
      totalFeesCollected: 0n,
    })
    .onConflictDoUpdate((row) => ({
      totalAuctions: row.totalAuctions + 1,
      activeAuctions: row.activeAuctions + 1,
    }));
});

// ─── TokensPurchased ───

ponder.on("TokenAuction:TokensPurchased", async ({ event, context }) => {
  const { db } = context;
  const {
    auctionId: rawAuctionId, buyer, amount, cost,
    protocolFee, newTotalRaised, newTotalSold,
  } = event.args;

  const auctionId = rawAuctionId.toString();
  const purchaseId = `${event.transaction.hash}-${event.log.logIndex}`;
  const participantId = `${auctionId}-${buyer}`;

  // Get auction for spot price calc
  const auctionRecord = await db.find(schema.auction, { id: auctionId });
  const newPrice = auctionRecord
    ? auctionRecord.basePrice + auctionRecord.slope * newTotalSold
    : 0n;

  const pricePerToken = amount > 0n ? cost / amount : 0n;

  // Insert purchase
  await db.insert(schema.purchase).values({
    id: purchaseId,
    auctionId,
    buyer,
    amount,
    cost,
    protocolFee,
    pricePerToken,
    timestamp: event.block.timestamp,
    transactionHash: event.transaction.hash,
    blockNumber: event.block.number,
  });

  // Update auction state
  await db
    .update(schema.auction, { id: auctionId })
    .set({
      totalRaised: newTotalRaised,
      totalSold: newTotalSold,
      currentPrice: newPrice,
    });

  // Upsert participant
  await db
    .insert(schema.participant)
    .values({
      id: participantId,
      auctionId,
      address: buyer,
      totalPurchased: amount,
      totalSpent: cost,
      purchaseCount: 1,
      firstPurchaseAt: event.block.timestamp,
      lastPurchaseAt: event.block.timestamp,
    })
    .onConflictDoUpdate((row) => ({
      totalPurchased: row.totalPurchased + amount,
      totalSpent: row.totalSpent + cost,
      purchaseCount: row.purchaseCount + 1,
      lastPurchaseAt: event.block.timestamp,
    }));

  // Price snapshot
  await db.insert(schema.priceSnapshot).values({
    id: `${auctionId}-${event.block.number}`,
    auctionId,
    price: newPrice,
    totalSold: newTotalSold,
    totalRaised: newTotalRaised,
    timestamp: event.block.timestamp,
    blockNumber: event.block.number,
  });

  // Update protocol metrics
  await db
    .update(schema.protocolMetrics, { id: "global" })
    .set((row) => ({
      totalVolumeRaised: row.totalVolumeRaised + cost,
      totalFeesCollected: row.totalFeesCollected + protocolFee,
    }));
});

// ─── AuctionCompleted ───

ponder.on("TokenAuction:AuctionCompleted", async ({ event, context }) => {
  const { db } = context;
  const { auctionId: rawAuctionId } = event.args;
  const auctionId = rawAuctionId.toString();

  await db
    .update(schema.auction, { id: auctionId })
    .set({
      state: "COMPLETED",
      completedAt: event.block.timestamp,
    });

  await db
    .update(schema.protocolMetrics, { id: "global" })
    .set((row) => ({
      activeAuctions: row.activeAuctions - 1,
      completedAuctions: row.completedAuctions + 1,
    }));
});

// ─── AuctionMigrated ───

ponder.on("TokenAuction:AuctionMigrated", async ({ event, context }) => {
  const { db } = context;
  const { auctionId: rawAuctionId } = event.args;
  const auctionId = rawAuctionId.toString();

  await db
    .update(schema.auction, { id: auctionId })
    .set({ state: "MIGRATED" });
});
```

### GraphQL Queries You'll Get Automatically

Once running, Ponder serves a GraphQL API at `http://localhost:42069`. Example queries:

```graphql
# Get all active auctions
query ActiveAuctions {
  auctions(where: { state: "ACTIVE" }, orderBy: "createdAt", orderDirection: "desc") {
    items {
      id
      auctionId
      creator
      tokenAddress
      basePrice
      slope
      currentPrice
      totalRaised
      totalSold
      maxRaise
      startTime
      endTime
    }
  }
}

# Get purchase history for an auction with price chart data
query AuctionDetail($auctionId: String!) {
  auction(id: $auctionId) {
    id
    creator
    tokenAddress
    currentPrice
    totalRaised
    totalSold
    state
    purchases(orderBy: "timestamp", orderDirection: "asc") {
      items {
        buyer
        amount
        cost
        pricePerToken
        timestamp
      }
    }
    priceSnapshots(orderBy: "blockNumber", orderDirection: "asc") {
      items {
        price
        totalSold
        timestamp
      }
    }
    participants(orderBy: "totalSpent", orderDirection: "desc") {
      items {
        address
        totalPurchased
        totalSpent
        purchaseCount
      }
    }
  }
}

# Protocol-wide metrics
query ProtocolStats {
  protocolMetrics(id: "global") {
    totalAuctions
    activeAuctions
    completedAuctions
    totalVolumeRaised
    totalFeesCollected
  }
}

# Top buyers across all auctions
query TopBuyers {
  participants(orderBy: "totalSpent", orderDirection: "desc", limit: 20) {
    items {
      address
      auctionId
      totalSpent
      totalPurchased
      purchaseCount
    }
  }
}
```

### Running the Indexer

```bash
# Start PostgreSQL
docker compose up -d

# Development mode (hot reload)
ponder dev

# Production
ponder start
```

---

## Part 4: Multi-Chain Configuration (Bonus — Shows Multichain Indexer Skills)

Create a second config to index both Base Sepolia and Base Mainnet:

### `ponder.config.multichain.ts`

```typescript
import { createConfig } from "ponder";
import { http } from "viem";
import { TokenAuctionAbi } from "./abis/TokenAuction";

export default createConfig({
  networks: {
    baseSepolia: {
      chainId: 84532,
      transport: http(process.env.PONDER_RPC_URL_84532),
    },
    base: {
      chainId: 8453,
      transport: http(process.env.PONDER_RPC_URL_8453),
    },
  },
  contracts: {
    TokenAuction: {
      abi: TokenAuctionAbi,
      network: {
        baseSepolia: {
          address: "0x...",  // Sepolia deployment
          startBlock: 0,
        },
        base: {
          address: "0x...",  // Mainnet deployment
          startBlock: 0,
        },
      },
    },
  },
});
```

Run with: `ponder dev --config ponder.config.multichain.ts`

---

## Part 5: Open-Source Project Management (Shows OSS Skills)

### Repository Structure

```
auctionflow/
├── contracts/          # Foundry project
├── sdk/                # TypeScript SDK (npm package)
├── indexer/            # Ponder indexer
├── examples/           # Usage examples
│   ├── create-auction.ts
│   └── query-indexer.ts
├── .github/
│   └── workflows/
│       ├── contracts-test.yml     # Forge test on PR
│       ├── sdk-test.yml           # Vitest on PR
│       ├── indexer-test.yml       # Indexer tests on PR
│       └── sdk-release.yml        # Publish SDK to npm on tag
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE             # MIT
├── README.md
└── package.json        # pnpm workspace root
```

### `pnpm-workspace.yaml`

```yaml
packages:
  - "contracts"
  - "sdk"
  - "indexer"
  - "examples"
```

### GitHub Actions: SDK Release (`.github/workflows/sdk-release.yml`)

```yaml
name: Release SDK
on:
  push:
    tags:
      - "sdk-v*"

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          registry-url: https://registry.npmjs.org
      - run: pnpm install --frozen-lockfile
      - run: pnpm --filter sdk build
      - run: pnpm --filter sdk test
      - run: pnpm --filter sdk publish --no-git-checks
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

### Versioning Strategy

Use [Changesets](https://github.com/changesets/changesets) for versioning:
```bash
pnpm add -Dw @changesets/cli
pnpm changeset init
```

Each PR includes a changeset file describing the change and its semver impact.

---

## Execution Order & Timeline

| Phase | What | Priority |
|---|---|---|
| **Week 1** | Contracts: Write, test, deploy to Base Sepolia | Start here |
| **Week 1** | Indexer: Set up Ponder, define schema, write event handlers | Can parallel with contracts |
| **Week 2** | SDK: Build client, builder, actions, tests | After contracts deployed |
| **Week 2** | Indexer: Connect to deployed contract, verify GraphQL queries work | After contracts deployed |
| **Week 3** | Polish: README, examples, CHANGELOG, GitHub Actions, npm publish | Final week |
| **Week 3** | Multi-chain config, add Base Mainnet support | Bonus |

---

## What to Highlight When Applying

After building this, your application can say:

> "I recently built AuctionFlow, an open-source token price discovery protocol with a bonding curve auction system. It includes Solidity smart contracts (Foundry), a TypeScript SDK using viem with builder pattern, and a Ponder-based multi-chain indexer exposing a GraphQL API over PostgreSQL — deployed on Base Sepolia. The architecture mirrors Doppler's stack closely. Repo: github.com/[you]/auctionflow"

This single project fills every gap identified in your application: custom indexer, GraphQL, DeFi primitives, EVM protocols, and OSS management.
