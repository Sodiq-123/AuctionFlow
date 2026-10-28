// Queries the indexer's GraphQL API through this app's /indexer route, so the
// browser never needs to reach the indexer directly.

export type AuctionState = "ACTIVE" | "COMPLETED" | "MIGRATED";

export type AuctionRow = {
  id: string;
  creator: `0x${string}`;
  tokenAddress: `0x${string}`;
  paymentTokenAddress: `0x${string}`;
  name: string;
  symbol: string;
  maxSupply: string;
  paymentDecimals: number;
  metadataUri: string;
  state: AuctionState;
  totalRaised: string;
  totalSold: string;
  maxRaise: string;
  liquidityBps: string;
  currentPrice: string;
  basePrice: string;
  slope: string;
  createdAt: string;
  completedAt: string | null;
  migratedAt: string | null;
  poolAddress: `0x${string}` | null;
  volume: string;
  tradeCount: number;
  lastTradeAt: string | null;
};

export type TradeRow = {
  id: string;
  auctionId: string;
  trader: `0x${string}`;
  side: "BUY" | "SELL";
  venue: "CURVE" | "UNISWAP";
  amount: string;
  value: string;
  timestamp: string;
  transactionHash: `0x${string}`;
};

export type HoldingRow = { auctionId: string; tokenAddress: `0x${string}`; holder: `0x${string}`; balance: string };
export type PricePoint = { price: string; timestamp: string };

/** Where the indexer is: this app's proxy in the browser, the indexer itself on the server. */
function endpoint(): string {
  if (typeof window !== "undefined") return "/indexer/graphql";
  return `${process.env.INDEXER_URL ?? "http://localhost:42069"}/graphql`;
}

async function gql<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const res = await fetch(endpoint(), {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Indexer responded ${res.status}`);
  const json = await res.json();
  if (json.errors?.length) throw new Error(json.errors[0].message);
  return json.data as T;
}

const AUCTION_FIELDS = `
  id creator tokenAddress paymentTokenAddress name symbol maxSupply paymentDecimals metadataUri state
  totalRaised totalSold maxRaise liquidityBps currentPrice basePrice slope createdAt completedAt migratedAt poolAddress
  volume tradeCount lastTradeAt
`;
const TRADE_FIELDS = "id auctionId trader side venue amount value timestamp transactionHash";

export async function fetchAuctions(): Promise<AuctionRow[]> {
  const data = await gql<{ auctions: { items: AuctionRow[] } }>(`{
    auctions(orderBy: "createdAt", orderDirection: "desc", limit: 500) { items { ${AUCTION_FIELDS} } }
  }`);
  return data.auctions.items;
}

export async function fetchAuction(id: string): Promise<AuctionRow | null> {
  const data = await gql<{ auction: AuctionRow | null }>(
    `query ($id: String!) { auction(id: $id) { ${AUCTION_FIELDS} } }`,
    { id }
  );
  return data.auction;
}

export async function fetchTrades(auctionId: string): Promise<TradeRow[]> {
  const data = await gql<{ trades: { items: TradeRow[] } }>(
    `query ($id: String!) {
      trades(where: { auctionId: $id }, orderBy: "timestamp", orderDirection: "desc", limit: 50) { items { ${TRADE_FIELDS} } }
    }`,
    { id: auctionId }
  );
  return data.trades.items;
}

/** The newest trades across every token, for the ticker. */
export async function fetchRecentTrades(limit = 20): Promise<TradeRow[]> {
  const data = await gql<{ trades: { items: TradeRow[] } }>(
    `query ($limit: Int!) { trades(orderBy: "timestamp", orderDirection: "desc", limit: $limit) { items { ${TRADE_FIELDS} } } }`,
    { limit }
  );
  return data.trades.items;
}

/** A wallet's trades, newest first. */
export async function fetchTraderHistory(trader: string): Promise<TradeRow[]> {
  const data = await gql<{ trades: { items: TradeRow[] } }>(
    `query ($trader: String!) {
      trades(where: { trader: $trader }, orderBy: "timestamp", orderDirection: "desc", limit: 100) { items { ${TRADE_FIELDS} } }
    }`,
    { trader: trader.toLowerCase() }
  );
  return data.trades.items;
}

export async function fetchPriceHistory(auctionId: string): Promise<PricePoint[]> {
  const data = await gql<{ priceSnapshots: { items: PricePoint[] } }>(
    `query ($id: String!) {
      priceSnapshots(where: { auctionId: $id }, orderBy: "blockNumber", orderDirection: "asc", limit: 1000) {
        items { price timestamp }
      }
    }`,
    { id: auctionId }
  );
  return data.priceSnapshots.items;
}

/** A token's holders, largest first. */
export async function fetchHolders(auctionId: string): Promise<HoldingRow[]> {
  const data = await gql<{ holdings: { items: HoldingRow[] } }>(
    `query ($id: String!) {
      holdings(where: { auctionId: $id, balance_gt: "0" }, orderBy: "balance", orderDirection: "desc", limit: 100) {
        items { auctionId tokenAddress holder balance }
      }
    }`,
    { id: auctionId }
  );
  return data.holdings.items;
}

/** Every token a wallet holds. */
export async function fetchHoldings(holder: string): Promise<HoldingRow[]> {
  const data = await gql<{ holdings: { items: HoldingRow[] } }>(
    `query ($holder: String!) {
      holdings(where: { holder: $holder, balance_gt: "0" }, limit: 200) { items { auctionId tokenAddress holder balance } }
    }`,
    { holder: holder.toLowerCase() }
  );
  return data.holdings.items;
}

/** Trading volume per auction over the last `hours`, in payment units. */
export async function fetchRecentVolume(hours = 24): Promise<Map<string, bigint>> {
  const since = Math.floor(Date.now() / 3_600_000) - hours + 1;
  const data = await gql<{ volumeHours: { items: { auctionId: string; volume: string }[] } }>(
    `query ($since: BigInt!) { volumeHours(where: { hour_gte: $since }, limit: 1000) { items { auctionId volume } } }`,
    { since: since.toString() }
  );
  const totals = new Map<string, bigint>();
  for (const row of data.volumeHours.items) totals.set(row.auctionId, (totals.get(row.auctionId) ?? 0n) + BigInt(row.volume));
  return totals;
}
