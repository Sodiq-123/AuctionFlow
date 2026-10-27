// Queries the indexer's GraphQL API through this app's /indexer route, so the
// browser never needs to reach the indexer directly.

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
  state: "ACTIVE" | "COMPLETED" | "MIGRATED";
  totalRaised: string;
  totalSold: string;
  maxRaise: string;
  currentPrice: string;
  createdAt: string;
  poolAddress: `0x${string}` | null;
};

export type TradeRow = {
  id: string;
  trader: `0x${string}`;
  side: "BUY" | "SELL";
  amount: string;
  value: string;
  timestamp: string;
  transactionHash: `0x${string}`;
};

export type PricePoint = { price: string; timestamp: string };

async function gql<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const res = await fetch("/indexer/graphql", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`Indexer responded ${res.status}`);
  const json = await res.json();
  if (json.errors?.length) throw new Error(json.errors[0].message);
  return json.data as T;
}

const AUCTION_FIELDS = `
  id creator tokenAddress paymentTokenAddress name symbol maxSupply paymentDecimals metadataUri state
  totalRaised totalSold maxRaise currentPrice createdAt poolAddress
`;

export async function fetchAuctions(): Promise<AuctionRow[]> {
  const data = await gql<{ auctions: { items: AuctionRow[] } }>(`{
    auctions(orderBy: "createdAt", orderDirection: "desc", limit: 100) { items { ${AUCTION_FIELDS} } }
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
      trades(where: { auctionId: $id }, orderBy: "timestamp", orderDirection: "desc", limit: 50) {
        items { id trader side amount value timestamp transactionHash }
      }
    }`,
    { id: auctionId }
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
