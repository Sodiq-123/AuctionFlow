"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { zeroAddress } from "viem";
import { AuctionState } from "auctionflow-sdk";
import { readSdk } from "@/lib/sdk";
import { fetchAuction, fetchHolders, fetchPriceHistory, fetchTrades } from "@/lib/indexer";
import { useTokenMetadata } from "@/lib/metadata";
import { useEthUsd, toUsd } from "@/lib/prices";
import { explorerUrl, isWeth, paymentLabel } from "@/lib/config";
import { formatAmount, formatPercent, formatUsd, marketCap, percentLabel, progressPercent, shortAddress, timeAgo } from "@/lib/format";
import { CoinFrame, CurrencyBadge, EmptyState, Pill, Progress, Skeleton } from "@/components/ui";
import { PriceChart } from "@/components/token/PriceChart";
import { TokenTabs, CONCENTRATION_PERCENT } from "@/components/token/TokenTabs";
import { CurveTrade } from "@/components/token/CurveTrade";
import { CollectFees, MoveToUniswap, Payouts, UniswapTrade } from "@/components/token/AfterGraduation";

export function TokenView({ id }: { id: string }) {
  const validId = /^\d+$/.test(id);
  const ethUsd = useEthUsd();
  const [copied, setCopied] = useState(false);

  // The indexer has the name, metadata and history; the chain has the live state.
  const { data: row } = useQuery({
    queryKey: ["auction-row", id],
    queryFn: () => fetchAuction(id),
    enabled: validId,
    // A launch takes a few seconds to reach the indexer.
    refetchInterval: (query) => (query.state.data ? 10_000 : 3_000),
  });
  const { data: auction, isLoading } = useQuery({
    queryKey: ["auction", id],
    queryFn: () => readSdk.getAuction(BigInt(id)),
    enabled: validId,
    refetchInterval: 5_000,
  });
  const { data: prices } = useQuery({ queryKey: ["prices", id], queryFn: () => fetchPriceHistory(id), enabled: validId, refetchInterval: 10_000 });
  const { data: trades } = useQuery({ queryKey: ["trades", id], queryFn: () => fetchTrades(id), enabled: validId, refetchInterval: 8_000 });
  const { data: holders } = useQuery({ queryKey: ["holders", id], queryFn: () => fetchHolders(id), enabled: validId, refetchInterval: 15_000 });
  const { data: paused } = useQuery({ queryKey: ["paused"], queryFn: () => readSdk.isPaused(), refetchInterval: 30_000 });
  const { data: meta } = useTokenMetadata(row?.metadataUri);

  if (!validId || (!isLoading && (!auction || auction.token === zeroAddress))) {
    return (
      <EmptyState icon={<span className="text-3xl">🫥</span>} title={`There's no coin #${id}`} body="It may not exist yet, or the link is wrong.">
        <Link href="/" className="btn btn-blue h-12 px-6">
          Explore coins
        </Link>
      </EmptyState>
    );
  }
  if (!auction || !row) return <TokenSkeleton />;

  const payment = { address: auction.paymentToken, decimals: row.paymentDecimals, label: paymentLabel(auction.paymentToken) };
  const maxSupply = BigInt(row.maxSupply);
  const migrated = auction.state === AuctionState.MIGRATED;
  // On the curve the chain's price is exact; after migration the indexer follows the pool.
  const price = migrated ? BigInt(row.currentPrice) : auction.basePrice + (auction.slope * auction.totalSold) / 10n ** 18n;
  const cap = marketCap(price, maxSupply, payment.decimals);
  const capUsd = toUsd(cap, payment.address, ethUsd);
  const growth = Number(price) / Number(auction.basePrice);
  const percent = auction.state === AuctionState.ACTIVE ? progressPercent(auction.totalRaised, auction.maxRaise) : 100;
  const holderSupply = (holders ?? []).reduce((sum, h) => sum + BigInt(h.balance), 0n);
  const creatorHolding = holders?.find((h) => h.holder.toLowerCase() === auction.creator.toLowerCase());
  const creatorPct = creatorHolding && holderSupply > 0n ? Number((BigInt(creatorHolding.balance) * 10_000n) / holderSupply) / 100 : 0;

  function share() {
    const url = window.location.href;
    if (navigator.share) navigator.share({ title: `${row!.name} on AuctionFlow`, url }).catch(() => {});
    else {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  }

  return (
    <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_380px] lg:grid-rows-[auto_auto_1fr] lg:gap-x-6">
      <section className="flex min-w-0 flex-col gap-5 rounded-[32px] lg:col-start-1 bg-[linear-gradient(160deg,#E4ECFF,#FFFFFF_60%)] p-5 shadow-[0_6px_0_#E1E6F0] sm:p-7">
        <div className="flex flex-wrap items-center gap-4 sm:gap-5">
          <CoinFrame image={meta?.image} symbol={row.symbol} size={96} graduated={migrated} />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <h1 className="font-display text-[34px] leading-none font-extrabold tracking-[-0.045em] sm:text-[40px]">{row.name}</h1>
              <span className="inline-flex h-7 items-center gap-1.5 rounded-full bg-white px-2.5 text-[13px] font-semibold text-muted">
                Priced in <CurrencyBadge token={payment.address} size={18} className="text-[13px] text-ink" />
              </span>
            </div>
            <p className="mt-1.5 font-semibold text-muted">
              ${row.symbol} · by{" "}
              <a href={`${explorerUrl}/address/${auction.creator}`} target="_blank" rel="noreferrer" className="text-blue">
                {shortAddress(auction.creator)}
              </a>{" "}
              · {timeAgo(row.createdAt)}
            </p>
          </div>
          <button onClick={share} className="btn btn-ink h-11 px-4 [--edge:3px]">
            {copied ? "Link copied" : "Share"}
          </button>
        </div>

        <div className="flex flex-wrap items-baseline gap-x-3.5 gap-y-1">
          <span className="font-display text-[40px] font-extrabold tracking-[-0.045em] sm:text-[48px]">
            {formatAmount(cap)} {payment.label}
          </span>
          <span className="font-semibold text-muted">
            market cap{capUsd !== undefined && isWeth(payment.address) ? ` · ≈ ${formatUsd(capUsd)}` : ""}
          </span>
          {growth >= 1.1 && <Pill tone="up">▲ {formatAmount(growth, 2)}× since launch</Pill>}
        </div>

        {prices && prices.length > 1 ? (
          <PriceChart points={prices} maxSupply={row.maxSupply} paymentDecimals={payment.decimals} unit={payment.label} />
        ) : (
          <div className="flex h-[200px] items-center justify-center rounded-[20px] bg-white/60 text-sm text-muted">The chart starts with the first trade.</div>
        )}
      </section>

      <aside className="flex flex-col gap-5 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-3 lg:row-start-1">
        {auction.state === AuctionState.ACTIVE && (
          <CurveTrade auction={auction} symbol={row.symbol} maxSupply={maxSupply} payment={payment} paused={!!paused} />
        )}
        {auction.state === AuctionState.COMPLETED && <MoveToUniswap auction={auction} name={row.name} />}
        {migrated && row.poolAddress && <UniswapTrade auction={auction} symbol={row.symbol} payment={payment} />}
        <Payouts auction={auction} symbol={row.symbol} payment={payment} />
        {migrated && row.poolAddress && <CollectFees auction={auction} />}

        <section className="card flex flex-col gap-3 p-5 text-sm">
          <h2 className="text-base font-extrabold">Before you buy</h2>
          <Check ok>At graduation, the Uniswap liquidity is locked forever. Nobody can pull it.</Check>
          {auction.state === AuctionState.ACTIVE && <Check ok>You can sell back to the curve any time before graduation.</Check>}
          <Check ok={creatorPct < CONCENTRATION_PERCENT}>
            The creator holds {formatPercent(creatorPct)} of the coins{creatorPct >= CONCENTRATION_PERCENT ? ". If they sell, the price drops." : "."}
          </Check>
          <Check ok={false}>Anyone can launch a coin. Most lose value.</Check>
        </section>
      </aside>

      <div className="min-w-0 lg:col-start-1">
        <ProgressCard state={auction.state} percent={percent} raised={formatAmount(Number(auction.totalRaised) / 10 ** payment.decimals)} goal={formatAmount(Number(auction.maxRaise) / 10 ** payment.decimals)} unit={payment.label} />
      </div>
      <div className="min-w-0 lg:col-start-1">
        <TokenTabs row={row} auction={auction} trades={trades ?? []} holders={holders ?? []} meta={meta} />
      </div>
    </div>
  );
}

function Check({ ok, children }: { ok: boolean; children: React.ReactNode }) {
  return (
    <div className="flex gap-2.5">
      <span className={`font-extrabold ${ok ? "text-up" : "text-sell"}`}>{ok ? "✓" : "!"}</span>
      <span>{children}</span>
    </div>
  );
}

function ProgressCard({ state, percent, raised, goal, unit }: { state: AuctionState; percent: number; raised: string; goal: string; unit: string }) {
  const step = state === AuctionState.ACTIVE ? 0 : state === AuctionState.COMPLETED ? 1 : 2;
  const steps = [
    ["1 · On the curve", step === 0 ? "Now. Buy and sell here." : "Done."],
    ["2 · Graduates", step === 1 ? "Now. Waiting to move." : `At ${goal} ${unit} raised.`],
    ["3 · On Uniswap", step === 2 ? "Now. Liquidity locked forever." : "Liquidity locked forever."],
  ];
  return (
    <section className="card flex flex-col gap-3.5 p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <span className="font-display text-2xl font-extrabold tracking-[-0.03em]">
          {state === AuctionState.ACTIVE ? `🏁 ${percentLabel(percent)} to Uniswap` : state === AuctionState.COMPLETED ? "🎉 Goal reached" : "🦄 On Uniswap"}
        </span>
        <span className="font-bold text-muted">
          {state === AuctionState.ACTIVE ? `${raised} of ${goal} ${unit} raised` : `${goal} ${unit} raised`}
        </span>
      </div>
      <Progress percent={percent} height={16} />
      <ol className="grid gap-2.5 text-sm sm:grid-cols-3">
        {steps.map(([title, body], i) => (
          <li key={title} className={`rounded-[18px] px-3.5 py-3 ${i === step ? "bg-blue-tint" : "bg-ground"}`}>
            <b className={i === step ? "text-blue-edge" : i < step ? "text-up" : ""}>{title}</b>
            <div className="mt-0.5 text-muted">{body}</div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function TokenSkeleton() {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
      <div className="flex flex-col gap-5">
        <Skeleton className="h-[420px] rounded-[32px]" />
        <Skeleton className="h-[160px] rounded-[28px]" />
      </div>
      <Skeleton className="h-[520px] rounded-[28px]" />
    </div>
  );
}
