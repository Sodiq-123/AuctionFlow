import { ponder } from "ponder:registry";
import * as schema from "../ponder.schema";
import { erc20Abi, parseAbi, zeroAddress } from "viem";

// Mirrors BondingCurve: supplies and amounts are in token wei (18 decimals);
// prices are payment units per whole token with 18 extra decimals (WAD), so
// currentPrice and pricePerToken are both in those units.
const TOKEN_SCALE = 10n ** 18n;

const AuctionTokenAbi = parseAbi(["function maxSupply() view returns (uint256)"]);
const SCALE = TOKEN_SCALE * 10n ** 18n;
const Q192 = 2n ** 192n;

const abs = (x: bigint) => (x < 0n ? -x : x);

// ─── AuctionCreated ───

ponder.on("TokenAuction:AuctionCreated", async ({ event, context }) => {
  const { db } = context;
  const {
    auctionId, creator, token, paymentToken,
    basePrice, slope, maxRaise, liquidityBps, metadataURI,
  } = event.args;

  const id = auctionId.toString();

  // AuctionCreated doesn't carry them, and a feed of launches needs them to
  // show names and market caps.
  const [name, symbol, maxSupply, paymentDecimals] = await Promise.all([
    context.client.readContract({ abi: erc20Abi, address: token, functionName: "name" }),
    context.client.readContract({ abi: erc20Abi, address: token, functionName: "symbol" }),
    context.client.readContract({ abi: AuctionTokenAbi, address: token, functionName: "maxSupply" }),
    context.client.readContract({ abi: erc20Abi, address: paymentToken, functionName: "decimals" }),
  ]);

  await db.insert(schema.auction).values({
    id,
    auctionId,
    creator,
    tokenAddress: token,
    paymentTokenAddress: paymentToken,
    basePrice,
    slope,
    maxRaise,
    metadataUri: metadataURI,
    name,
    symbol,
    maxSupply,
    paymentDecimals,
    liquidityBps,
    state: "ACTIVE",
    totalRaised: 0n,
    totalSold: 0n,
    currentPrice: basePrice,
    createdAt: event.block.timestamp,
    transactionHash: event.transaction.hash,
  });

  await db.insert(schema.tokenLookup).values({ id: token, auctionId: id });

  await db.insert(schema.priceSnapshot).values({
    id: `${id}-${event.block.number}`,
    auctionId: id,
    price: basePrice,
    totalSold: 0n,
    totalRaised: 0n,
    timestamp: event.block.timestamp,
    blockNumber: event.block.number,
  });

  await db
    .insert(schema.protocolMetrics)
    .values({
      id: paymentToken,
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

// ─── Volume, shared by both venues ───

// Adds a trade to the auction's running totals and its hour's volume, which
// is what "trending" ranks by.
async function addVolume(db: any, auctionId: string, value: bigint, timestamp: bigint) {
  await db.update(schema.auction, { id: auctionId }).set((row: any) => ({
    volume: row.volume + value,
    tradeCount: row.tradeCount + 1,
    lastTradeAt: timestamp,
  }));

  const hour = timestamp / 3600n;
  await db
    .insert(schema.volumeHour)
    .values({ id: `${auctionId}-${hour}`, auctionId, hour, volume: value, trades: 1 })
    .onConflictDoUpdate((row: any) => ({ volume: row.volume + value, trades: row.trades + 1 }));
}

// ─── Curve trades: TokensPurchased and TokensSold ───

type TradeArgs = {
  side: "BUY" | "SELL";
  auctionId: bigint;
  trader: `0x${string}`;
  amount: bigint;
  value: bigint; // cost of a buy, proceeds of a sell, before the fee
  protocolFee: bigint;
  newTotalRaised: bigint;
  newTotalSold: bigint;
};

// Both sides move the price along the same curve, so one function records
// the trade, the auction's new totals, the holder and the price snapshot.
async function recordTrade({ event, context }: any, t: TradeArgs) {
  const { db } = context;
  const auctionId = t.auctionId.toString();
  const tradeId = `${event.transaction.hash}-${event.log.logIndex}`;
  const isBuy = t.side === "BUY";

  const auctionRecord = await db.find(schema.auction, { id: auctionId });
  if (!auctionRecord) return;
  const newPrice = auctionRecord.basePrice + (auctionRecord.slope * t.newTotalSold) / TOKEN_SCALE;

  // Average price per whole token for this trade, in WAD like the curve's prices.
  const pricePerToken = t.amount > 0n ? (t.value * SCALE) / t.amount : 0n;

  await db.insert(schema.trade).values({
    id: tradeId,
    auctionId,
    trader: t.trader,
    side: t.side,
    venue: "CURVE",
    amount: t.amount,
    value: t.value,
    protocolFee: t.protocolFee,
    pricePerToken,
    timestamp: event.block.timestamp,
    transactionHash: event.transaction.hash,
    blockNumber: event.block.number,
  });

  await db
    .update(schema.auction, { id: auctionId })
    .set({ totalRaised: t.newTotalRaised, totalSold: t.newTotalSold, currentPrice: newPrice });
  await addVolume(db, auctionId, t.value, event.block.timestamp);

  await db
    .insert(schema.participant)
    .values({
      id: `${auctionId}-${t.trader}`,
      auctionId,
      address: t.trader,
      totalPurchased: isBuy ? t.amount : 0n,
      totalSpent: isBuy ? t.value : 0n,
      purchaseCount: isBuy ? 1 : 0,
      totalSoldBack: isBuy ? 0n : t.amount,
      totalProceeds: isBuy ? 0n : t.value,
      sellCount: isBuy ? 0 : 1,
      firstTradeAt: event.block.timestamp,
      lastTradeAt: event.block.timestamp,
    })
    .onConflictDoUpdate((row: any) =>
      isBuy
        ? {
            totalPurchased: row.totalPurchased + t.amount,
            totalSpent: row.totalSpent + t.value,
            purchaseCount: row.purchaseCount + 1,
            lastTradeAt: event.block.timestamp,
          }
        : {
            totalSoldBack: row.totalSoldBack + t.amount,
            totalProceeds: row.totalProceeds + t.value,
            sellCount: row.sellCount + 1,
            lastTradeAt: event.block.timestamp,
          }
    );

  await db.insert(schema.priceSnapshot).values({
    id: tradeId,
    auctionId,
    price: newPrice,
    totalSold: t.newTotalSold,
    totalRaised: t.newTotalRaised,
    timestamp: event.block.timestamp,
    blockNumber: event.block.number,
  });

  await db
    .update(schema.protocolMetrics, { id: auctionRecord.paymentTokenAddress })
    .set((row: any) => ({
      totalVolumeRaised: row.totalVolumeRaised + (isBuy ? t.value : 0n),
      totalSellVolume: row.totalSellVolume + (isBuy ? 0n : t.value),
      totalFeesCollected: row.totalFeesCollected + t.protocolFee,
    }));
}

ponder.on("TokenAuction:TokensPurchased", async (ctx) => {
  const a = ctx.event.args;
  await recordTrade(ctx, {
    side: "BUY",
    auctionId: a.auctionId,
    trader: a.buyer,
    amount: a.amount,
    value: a.cost,
    protocolFee: a.protocolFee,
    newTotalRaised: a.newTotalRaised,
    newTotalSold: a.newTotalSold,
  });
});

ponder.on("TokenAuction:TokensSold", async (ctx) => {
  const a = ctx.event.args;
  await recordTrade(ctx, {
    side: "SELL",
    auctionId: a.auctionId,
    trader: a.seller,
    amount: a.amount,
    value: a.proceeds,
    protocolFee: a.protocolFee,
    newTotalRaised: a.newTotalRaised,
    newTotalSold: a.newTotalSold,
  });
});

// ─── AuctionCompleted ───

ponder.on("TokenAuction:AuctionCompleted", async ({ event, context }) => {
  const { db } = context;
  const auctionId = event.args.auctionId.toString();

  const record = await db.update(schema.auction, { id: auctionId }).set({
    state: "COMPLETED",
    completedAt: event.block.timestamp,
  });

  await db
    .update(schema.protocolMetrics, { id: record.paymentTokenAddress })
    .set((row) => ({
      activeAuctions: row.activeAuctions - 1,
      completedAuctions: row.completedAuctions + 1,
    }));
});

// ─── AuctionMigrated ───

ponder.on("TokenAuction:AuctionMigrated", async ({ event, context }) => {
  const { db } = context;
  const { auctionId: rawAuctionId, pool, positionId, tokenLiquidity, paymentLiquidity } = event.args;
  const auctionId = rawAuctionId.toString();
  const hasPool = pool !== zeroAddress;

  const record = await db.update(schema.auction, { id: auctionId }).set({
    state: "MIGRATED",
    migratedAt: event.block.timestamp,
    poolAddress: hasPool ? pool : null,
    positionId: hasPool ? positionId : null,
    liquidityTokens: tokenLiquidity,
    liquidityPayment: paymentLiquidity,
  });

  if (hasPool) {
    // Uniswap orders a pair by address.
    const tokenIsToken0 = BigInt(record.tokenAddress) < BigInt(record.paymentTokenAddress);
    await db.insert(schema.poolLookup).values({ id: pool, auctionId, tokenIsToken0 });
  }
});

// ─── Uniswap trades, after migration ───

ponder.on("UniswapPool:Swap", async ({ event, context }) => {
  const { db } = context;
  // Swaps before AuctionMigrated are the migration's own price correction,
  // in the same transaction, not trades.
  const pool = await db.find(schema.poolLookup, { id: event.log.address });
  if (!pool) return;

  // The pool's balance changes: positive is what it received.
  const { amount0, amount1, sqrtPriceX96 } = event.args;
  const tokenDelta = pool.tokenIsToken0 ? amount0 : amount1;
  const paymentDelta = pool.tokenIsToken0 ? amount1 : amount0;
  if (tokenDelta === 0n) return;
  const side = tokenDelta < 0n ? "BUY" : "SELL";
  const amount = abs(tokenDelta);
  const value = abs(paymentDelta);

  // The pool's price after the swap, as payment units per whole token (WAD)
  // like the curve's: Uniswap's is token1 per token0, as sqrt(ratio) * 2^96.
  const sq = sqrtPriceX96 * sqrtPriceX96;
  const price = sq === 0n ? 0n : pool.tokenIsToken0 ? (sq * SCALE) / Q192 : (Q192 * SCALE) / sq;

  const tradeId = `${event.transaction.hash}-${event.log.logIndex}`;
  await db.insert(schema.trade).values({
    id: tradeId,
    auctionId: pool.auctionId,
    trader: event.transaction.from,
    side,
    venue: "UNISWAP",
    amount,
    value,
    protocolFee: 0n,
    pricePerToken: (value * SCALE) / amount,
    timestamp: event.block.timestamp,
    transactionHash: event.transaction.hash,
    blockNumber: event.block.number,
  });

  const record = await db.update(schema.auction, { id: pool.auctionId }).set({ currentPrice: price });
  await addVolume(db, pool.auctionId, value, event.block.timestamp);

  await db.insert(schema.priceSnapshot).values({
    id: tradeId,
    auctionId: pool.auctionId,
    price,
    totalSold: record.totalSold,
    totalRaised: record.totalRaised,
    timestamp: event.block.timestamp,
    blockNumber: event.block.number,
  });

  await db
    .update(schema.protocolMetrics, { id: record.paymentTokenAddress })
    .set((row) => ({ totalUniswapVolume: row.totalUniswapVolume + value }));
});

// ─── Token transfers: holders ───

ponder.on("AuctionToken:Transfer", async ({ event, context }) => {
  const { db } = context;
  const { from, to, value } = event.args;
  if (value === 0n) return;
  const token = event.log.address;
  const lookup = await db.find(schema.tokenLookup, { id: token });
  if (!lookup) return;

  // Mints come from the zero address and burns go to it; neither is a holder.
  const moves: [`0x${string}`, bigint][] = [];
  if (from !== zeroAddress) moves.push([from, -value]);
  if (to !== zeroAddress) moves.push([to, value]);

  for (const [holder, delta] of moves) {
    await db
      .insert(schema.holding)
      .values({
        id: `${token}-${holder}`,
        auctionId: lookup.auctionId,
        tokenAddress: token,
        holder,
        balance: delta,
        updatedAt: event.block.timestamp,
      })
      .onConflictDoUpdate((row) => ({ balance: row.balance + delta, updatedAt: event.block.timestamp }));
  }
});

// ─── LpFeesCollected ───

ponder.on("TokenAuction:LpFeesCollected", async ({ event, context }) => {
  const { db } = context;
  const { auctionId: rawAuctionId, creatorPaymentFees, protocolPaymentFees } = event.args;
  const auctionId = rawAuctionId.toString();

  const record = await db.update(schema.auction, { id: auctionId }).set((row) => ({
    lpFeesCreatorPayment: row.lpFeesCreatorPayment + creatorPaymentFees,
    lpFeesProtocolPayment: row.lpFeesProtocolPayment + protocolPaymentFees,
  }));

  await db
    .update(schema.protocolMetrics, { id: record.paymentTokenAddress })
    .set((row) => ({
      totalLpFeesCollected: row.totalLpFeesCollected + protocolPaymentFees,
    }));
});

// ─── ProceedsWithdrawn ───

ponder.on("TokenAuction:ProceedsWithdrawn", async ({ event, context }) => {
  const { db } = context;
  const auctionId = event.args.auctionId.toString();

  await db
    .update(schema.auction, { id: auctionId })
    .set({
      proceedsWithdrawn: true,
      proceedsWithdrawnAt: event.block.timestamp,
    });
});
