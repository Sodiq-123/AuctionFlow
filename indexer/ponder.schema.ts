import { onchainTable } from "ponder";

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
  startTime: t.bigint().notNull(),
  endTime: t.bigint().notNull(),
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
  transactionHash: t.hex().notNull(),
}));

export const purchase = onchainTable("purchase", (t) => ({
  id: t.text().primaryKey(),
  auctionId: t.text().notNull(),
  buyer: t.hex().notNull(),
  amount: t.bigint().notNull(),
  cost: t.bigint().notNull(),
  protocolFee: t.bigint().notNull(),
  pricePerToken: t.bigint().notNull(),
  timestamp: t.bigint().notNull(),
  transactionHash: t.hex().notNull(),
  blockNumber: t.bigint().notNull(),
}));

export const participant = onchainTable("participant", (t) => ({
  id: t.text().primaryKey(),
  auctionId: t.text().notNull(),
  address: t.hex().notNull(),
  totalPurchased: t.bigint().notNull(),
  totalSpent: t.bigint().notNull(),
  purchaseCount: t.integer().notNull(),
  firstPurchaseAt: t.bigint().notNull(),
  lastPurchaseAt: t.bigint().notNull(),
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

export const protocolMetrics = onchainTable("protocol_metrics", (t) => ({
  id: t.text().primaryKey(),
  totalAuctions: t.integer().notNull(),
  activeAuctions: t.integer().notNull(),
  completedAuctions: t.integer().notNull(),
  totalVolumeRaised: t.bigint().notNull(),
  totalFeesCollected: t.bigint().notNull(),
  // Protocol's share of pool trading fees, in the payment token.
  totalLpFeesCollected: t.bigint().notNull().default(0n),
}));
