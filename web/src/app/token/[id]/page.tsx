import type { Metadata } from "next";
import { fetchAuction } from "@/lib/indexer";
import { TokenView } from "./TokenView";

type Props = { params: Promise<{ id: string }> };

/** The coin's name in the tab and in link previews; the page itself renders in the browser. */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  if (!/^\d+$/.test(id)) return { title: "Coin not found" };
  try {
    const row = await fetchAuction(id);
    if (!row) return { title: "Coin not found" };
    return {
      title: `${row.name} ($${row.symbol})`,
      description: `${row.name} on AuctionFlow: a fair-launch coin on Base that graduates to Uniswap with its liquidity locked forever.`,
    };
  } catch {
    return { title: "Coin" };
  }
}

export default async function TokenPage({ params }: Props) {
  const { id } = await params;
  return <TokenView id={id} />;
}
