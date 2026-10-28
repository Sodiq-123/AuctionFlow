"use client";

import Link from "next/link";
import { paymentLabel } from "@/lib/config";
import { formatToken } from "@/lib/format";
import { useAuctions, useRecentTrades } from "@/lib/queries";

type Item = { key: string; time: number; verb: string; color: string; what: string; href: string; uniswap?: boolean };

/** The live strip of buys, sells, launches and graduations across every coin. */
export function Ticker() {
  const { data: auctions } = useAuctions();
  const { data: trades } = useRecentTrades();
  if (!auctions || auctions.length === 0) return <div className="h-[34px] bg-ink" />;

  const byId = new Map(auctions.map((a) => [a.id, a]));
  const items: Item[] = [];
  for (const t of trades ?? []) {
    const a = byId.get(t.auctionId);
    if (!a) continue;
    items.push({
      key: t.id,
      time: Number(t.timestamp),
      verb: t.side === "BUY" ? "Bought" : "Sold",
      color: t.side === "BUY" ? "#5BE3A6" : "#FFB27A",
      what: `${formatToken(t.value, a.paymentDecimals)} ${paymentLabel(a.paymentTokenAddress)} of ${a.symbol}`,
      href: `/token/${a.id}`,
      uniswap: t.venue === "UNISWAP",
    });
  }
  for (const a of auctions.slice(0, 10)) {
    items.push({ key: `new-${a.id}`, time: Number(a.createdAt), verb: "New", color: "#9DB8FF", what: `${a.name} launched`, href: `/token/${a.id}` });
    if (a.completedAt) {
      items.push({ key: `grad-${a.id}`, time: Number(a.completedAt), verb: "Graduated", color: "#5BE3A6", what: `${a.name} reached its goal`, href: `/token/${a.id}` });
    }
  }
  items.sort((x, y) => y.time - x.time);
  const shown = items.slice(0, 16);

  // Two copies side by side scroll as one seamless loop.
  const strip = (copy: number) =>
    shown.map((item) => (
      <Link
        key={`${copy}-${item.key}`}
        href={item.href}
        tabIndex={copy === 0 ? 0 : -1}
        aria-hidden={copy === 1}
        className="inline-flex shrink-0 items-center gap-2 hover:text-white"
      >
        <span className="inline-block h-3.5 w-3.5 rounded-full" style={{ background: `radial-gradient(circle at 32% 28%, #fff 0 10%, ${item.color} 45%, #0A0B0D 130%)` }} />
        <span style={{ color: item.color }}>{item.verb}</span>
        {item.what}
        {item.uniswap && <span title="On Uniswap">🦄</span>}
      </Link>
    ));

  return (
    <div className="h-[34px] overflow-hidden bg-ink text-xs font-semibold whitespace-nowrap text-[#C9CED8]" aria-label="Latest activity">
      <div className="animate-ticker flex h-full w-max items-center gap-8 px-6" style={{ animation: `ticker ${Math.max(30, shown.length * 5)}s linear infinite` }}>
        {strip(0)}
        {strip(1)}
      </div>
    </div>
  );
}
