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
