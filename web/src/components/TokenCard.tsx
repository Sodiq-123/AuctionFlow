"use client";

import Link from "next/link";
import type { AuctionRow } from "@/lib/indexer";
import { useTokenMetadata } from "@/lib/metadata";
import { paymentLabel } from "@/lib/config";
import { formatAmount, formatUsd, marketCap, percentLabel, progressPercent, shortAddress, timeAgo } from "@/lib/format";
import { toUsd } from "@/lib/prices";
import { CoinFrame, Progress } from "./ui";

export function TokenCard({ auction, ethUsd }: { auction: AuctionRow; ethUsd?: number }) {
  const { data: meta } = useTokenMetadata(auction.metadataUri);
  const percent = auction.state === "ACTIVE" ? progressPercent(auction.totalRaised, auction.maxRaise) : 100;
  const cap = marketCap(auction.currentPrice, auction.maxSupply, auction.paymentDecimals);
  const usd = toUsd(cap, auction.paymentTokenAddress, ethUsd);
  const status =
    auction.state === "MIGRATED"
      ? { text: "🦄 On Uniswap", className: "text-unicorn" }
      : auction.state === "COMPLETED"
        ? { text: "Graduated · ready to move", className: "text-up" }
        : { text: `${percentLabel(percent)} to Uniswap`, className: "text-blue-edge" };

  return (
    <Link
      href={`/token/${auction.id}`}
      className="card flex flex-col gap-3.5 p-5 transition-transform hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-violet"
    >
      <span className="flex items-center gap-3">
        <CoinFrame image={meta?.image} symbol={auction.symbol} size={60} graduated={auction.state === "MIGRATED"} />
        <span className="min-w-0">
          <span className="block truncate font-display text-[21px] font-extrabold tracking-[-0.03em]">{auction.name}</span>
          <span className="block truncate text-[13px] font-semibold text-muted">
            ${auction.symbol} · by {shortAddress(auction.creator)} · {timeAgo(auction.createdAt)}
          </span>
        </span>
      </span>
      {meta?.description && <span className="line-clamp-2 text-sm text-muted">{meta.description}</span>}
      <span className="flex items-start justify-between gap-2">
        <span className="text-[13px] font-semibold whitespace-nowrap text-muted">Market cap</span>
        <span className="text-right">
          <b className="block text-[17px] whitespace-nowrap">
            {formatAmount(cap, 3)} {paymentLabel(auction.paymentTokenAddress)}
          </b>
          {usd !== undefined && paymentLabel(auction.paymentTokenAddress) === "ETH" && (
            <span className="text-[13px] text-muted">{formatUsd(usd)}</span>
          )}
        </span>
      </span>
      <Progress percent={percent} />
      <span className={`text-[13px] font-extrabold ${status.className}`}>{status.text}</span>
    </Link>
  );
}
