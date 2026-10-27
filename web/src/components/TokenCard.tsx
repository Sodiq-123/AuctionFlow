"use client";

import Link from "next/link";
import type { AuctionRow } from "@/lib/indexer";
import { useTokenMetadata } from "@/lib/metadata";
import { formatUnits } from "viem";
import { formatAmount, priceToNumber, progressPercent, shortAddress, timeAgo } from "@/lib/format";
import { TokenImage } from "./TokenImage";
import { ProgressBar } from "./ProgressBar";

export function TokenCard({ auction }: { auction: AuctionRow }) {
  const { data: meta } = useTokenMetadata(auction.metadataUri);
  const percent = progressPercent(auction.totalRaised, auction.maxRaise);
  // Fully diluted: the curve price times the token's whole supply.
  const marketCap =
    priceToNumber(auction.currentPrice, auction.paymentDecimals) * Number(formatUnits(BigInt(auction.maxSupply), 18));

  return (
    <Link
      href={`/token/${auction.id}`}
      className="flex gap-4 rounded-xl border border-line bg-panel p-4 transition hover:border-accent/50 hover:bg-panel-2"
    >
      <TokenImage image={meta?.image} symbol={auction.symbol} />
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="truncate font-semibold">
            {auction.name} <span className="text-muted">${auction.symbol}</span>
          </h3>
          {auction.state !== "ACTIVE" && (
            <span className="shrink-0 rounded bg-accent/15 px-2 py-0.5 text-xs font-medium text-accent">
              {auction.state === "MIGRATED" ? "On Uniswap" : "Graduated"}
            </span>
          )}
        </div>
        <p className="mt-0.5 text-xs text-muted">
          by {shortAddress(auction.creator)} · {timeAgo(auction.createdAt)}
        </p>
        {meta?.description && <p className="mt-1 line-clamp-2 text-sm text-muted">{meta.description}</p>}
        <div className="mt-3 flex items-center justify-between text-xs text-muted">
          <span>Market cap ${formatAmount(marketCap)}</span>
          <span>{percent.toFixed(1)}% to graduation</span>
        </div>
        <div className="mt-1.5">
          <ProgressBar percent={percent} />
        </div>
      </div>
    </Link>
  );
}
