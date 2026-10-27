import { index, onchainTable } from "ponder";

export const auction = onchainTable("auction", (t) => ({
  id: t.text().primaryKey(),
  auctionId: t.bigint().notNull(),
  creator: t.hex().notNull(),
  tokenAddress: t.hex().notNull(),
  paymentTokenAddress: t.hex().notNull(),
  basePrice: t.bigint().notNull(),
  slope: t.bigint().notNull(),
  maxRaise: t.bigint().notNull(),
  liquidityBps: t.bigint().notNull(),
  // Off-chain metadata for the token, such as its image.
  metadataUri: t.text().notNull().default(""),
  // Read from the token contract once, at creation: both are immutable.
  name: t.text().notNull().default(""),
  symbol: t.text().notNull().default(""),
  maxSupply: t.bigint().notNull().default(0n),
  paymentDecimals: t.integer().notNull().default(18),
  state: t.text().notNull(),
  totalRaised: t.bigint().notNull(),
  totalSold: t.bigint().notNull(),
  currentPrice: t.bigint().notNull(),
  createdAt: t.bigint().notNull(),
  completedAt: t.bigint(),
  proceedsWithdrawn: t.boolean().notNull().default(false),
  proceedsWithdrawnAt: t.bigint(),
  // Set at migration. poolAddress/positionId stay null if the auction had
  // nothing to pair and unlocked without a pool.
  migratedAt: t.bigint(),
  poolAddress: t.hex(),
  positionId: t.bigint(),
  liquidityTokens: t.bigint(),
  liquidityPayment: t.bigint(),
  // Trading fees collected from the pool, in the payment token.
  lpFeesCreatorPayment: t.bigint().notNull().default(0n),
  lpFeesProtocolPayment: t.bigint().notNull().default(0n),
  // Trading on the curve and, after migration, in the Uniswap pool: payment
  // tokens exchanged before fees, the number of trades and the latest one.
  volume: t.bigint().notNull().default(0n),
  tradeCount: t.integer().notNull().default(0),
  lastTradeAt: t.bigint(),
  transactionHash: t.hex().notNull(),
}));

// Which auction a token or pool address belongs to: Transfer and Swap events
// carry only the address that emitted them.
export const tokenLookup = onchainTable("token_lookup", (t) => ({
  id: t.hex().primaryKey(), // token address
  auctionId: t.text().notNull(),
}));

export const poolLookup = onchainTable("pool_lookup", (t) => ({
  id: t.hex().primaryKey(), // Uniswap pool address
  auctionId: t.text().notNull(),
  tokenIsToken0: t.boolean().notNull(),
}));

// Every holder's balance of every launched token, from its Transfer events.
// Includes the auction contract and the Uniswap pool, which hold tokens
// during and after migration.
export const holding = onchainTable(
  "holding",
  (t) => ({
    id: t.text().primaryKey(), // `${token}-${holder}`
    auctionId: t.text().notNull(),
    tokenAddress: t.hex().notNull(),
    holder: t.hex().notNull(),
    balance: t.bigint().notNull(),
    updatedAt: t.bigint().notNull(),
  }),
  (table) => ({
    auctionIdx: index().on(table.auctionId),
    holderIdx: index().on(table.holder),
  })
);

// Trading volume per auction per hour, for "trending": sum the last 24.
export const volumeHour = onchainTable(
  "volume_hour",
  (t) => ({
    id: t.text().primaryKey(), // `${auctionId}-${hour}`
    auctionId: t.text().notNull(),
    hour: t.bigint().notNull(), // unix time / 3600
    volume: t.bigint().notNull(),
    trades: t.integer().notNull(),
  }),
  (table) => ({
    hourIdx: index().on(table.hour),
  })
);

// Every buy and sell, on the curve and then in the Uniswap pool: the live
// trade feed for a token.
export const trade = onchainTable("trade", (t) => ({
  id: t.text().primaryKey(),
  auctionId: t.text().notNull(),
  // The account that sent the transaction. For a Uniswap trade made through
  // a router or aggregator, that's the user, not the contract that swapped.
  trader: t.hex().notNull(),
  side: t.text().notNull(), // "BUY" | "SELL"
  venue: t.text().notNull().default("CURVE"), // "CURVE" | "UNISWAP"
  amount: t.bigint().notNull(),
  // Payment tokens exchanged before the fee: the cost of a buy, the proceeds of a sell.
  value: t.bigint().notNull(),
  // The protocol's fee on a curve trade; zero for Uniswap, whose 1% pool fee
  // is shared when collected (LpFeesCollected).
  protocolFee: t.bigint().notNull(),
  pricePerToken: t.bigint().notNull(),
  timestamp: t.bigint().notNull(),
  transactionHash: t.hex().notNull(),
  blockNumber: t.bigint().notNull(),
}))

export const participant = onchainTable("participant", (t) => ({
  id: t.text().primaryKey(),
  auctionId: t.text().notNull(),
  address: t.hex().notNull(),
  totalPurchased: t.bigint().notNull(),
  totalSpent: t.bigint().notNull(),
  purchaseCount: t.integer().notNull(),
  // Tokens sold back to the curve, and the proceeds before fees.
  totalSoldBack: t.bigint().notNull().default(0n),
  totalProceeds: t.bigint().notNull().default(0n),
  sellCount: t.integer().notNull().default(0),
  firstTradeAt: t.bigint().notNull(),
  lastTradeAt: t.bigint().notNull(),
}));

export const priceSnapshot = onchainTable("price_snapshot", (t) => ({
  id: t.text().primaryKey(),
  auctionId: t.text().notNull(),
  price: t.bigint().notNull(),
  totalSold: t.bigint().notNull(),
  totalRaised: t.bigint().notNull(),
  timestamp: t.bigint().notNull(),
  blockNumber: t.bigint().notNull(),
}));

// Totals per payment token (the row's id is its address): amounts in USDC
// and in ETH can't be added together.
export const protocolMetrics = onchainTable("protocol_metrics", (t) => ({
  id: t.text().primaryKey(),
  totalAuctions: t.integer().notNull(),
  activeAuctions: t.integer().notNull(),
  completedAuctions: t.integer().notNull(),
  totalVolumeRaised: t.bigint().notNull(),
  totalFeesCollected: t.bigint().notNull(),
  // Protocol's share of pool trading fees, in the payment token.
  totalLpFeesCollected: t.bigint().notNull().default(0n),
  // Payment tokens paid out to sellers on the curve, before fees.
  totalSellVolume: t.bigint().notNull().default(0n),
  // Payment tokens traded in migrated tokens' Uniswap pools.
  totalUniswapVolume: t.bigint().notNull().default(0n),
}));
