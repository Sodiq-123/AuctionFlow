import type { Metadata } from "next";
import { fetchAuction } from "@/lib/indexer";
import { requestOrigin } from "@/lib/origin";
import { TokenView } from "./TokenView";

type Props = { params: Promise<{ id: string }> };

/** The coin's name in the tab and in link previews; the page itself renders in the browser. */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  if (!/^\d+$/.test(id)) return { title: "Coin not found" };
  // Link previews need an absolute image URL on whatever domain served this page.
  const image = { url: `${await requestOrigin()}/og/${id}`, width: 1200, height: 630 };
  try {
    const row = await fetchAuction(id);
    if (!row) return { title: "Coin not found" };
    const title = `${row.name} ($${row.symbol})`;
    const description = `${row.name} on AuctionFlow: a fair-launch coin on Base that graduates to Uniswap with its liquidity locked forever.`;
    return {
      title,
      description,
      openGraph: { title, description, images: [image] },
      twitter: { card: "summary_large_image", title, description, images: [image] },
    };
  } catch {
    return { title: "Coin", openGraph: { images: [image] }, twitter: { card: "summary_large_image", images: [image] } };
  }
}

export default async function TokenPage({ params }: Props) {
  const { id } = await params;
  return <TokenView id={id} />;
}
