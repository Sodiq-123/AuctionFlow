"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { formatUnits } from "viem";
import type { AuctionRow } from "@/lib/indexer";
import { useAuctions, useRecentVolume } from "@/lib/queries";
import { useEthUsd, toUsd } from "@/lib/prices";
import { isTestnet, paymentLabel } from "@/lib/config";
import { formatAmount, formatUsd, marketCap, percentLabel, progressPercent } from "@/lib/format";
import { useTokenMetadata } from "@/lib/metadata";
import { TokenCard } from "@/components/TokenCard";
import { Coin3D } from "@/components/Coin3D";
import { CoinFrame, EmptyState, Progress, Skeleton, useMounted } from "@/components/ui";

type Tab = "new" | "trending" | "graduating" | "uniswap";
type Sort = "newest" | "cap" | "progress";

const TABS: { id: Tab; label: string }[] = [
  { id: "new", label: "✨ New" },
  { id: "trending", label: "🔥 Trending" },
  { id: "graduating", label: "🏁 About to graduate" },
  { id: "uniswap", label: "🦄 On Uniswap" },
];

/** "About to graduate" starts here. */
const GRADUATING_PERCENT = 75;

export default function HomePage() {
  return (
    <Suspense>
      <Home />
    </Suspense>
  );
}

function Home() {
  const query = (useSearchParams().get("q") ?? "").trim();
  const mounted = useMounted();
  const feed = useAuctions();
  const auctions = mounted ? feed.data : undefined;
  const isLoading = !mounted || feed.isLoading;
  const { error, refetch } = feed;
  const { data: volume } = useRecentVolume();
  const ethUsd = useEthUsd();
  const [tab, setTab] = useState<Tab>("new");
  const [sort, setSort] = useState<Sort>("newest");

  const percent = (a: AuctionRow) => (a.state === "ACTIVE" ? progressPercent(a.totalRaised, a.maxRaise) : 100);
  const usdOf = (a: AuctionRow, amount: bigint) =>
    toUsd(Number(formatUnits(amount, a.paymentDecimals)), a.paymentTokenAddress, ethUsd) ?? 0;
  const capUsd = (a: AuctionRow) =>
    toUsd(marketCap(a.currentPrice, a.maxSupply, a.paymentDecimals), a.paymentTokenAddress, ethUsd) ?? 0;

  const leader = auctions?.filter((a) => a.state === "ACTIVE").sort((x, y) => percent(y) - percent(x))[0];

  let list = auctions ?? [];
  if (query) {
    const q = query.toLowerCase();
    list = list.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        a.symbol.toLowerCase().includes(q) ||
        a.tokenAddress.toLowerCase() === q ||
        a.creator.toLowerCase() === q
    );
  } else if (tab === "trending") {
    list = list
      .filter((a) => (volume?.get(a.id) ?? 0n) > 0n)
      .sort((x, y) => usdOf(y, volume!.get(y.id)!) - usdOf(x, volume!.get(x.id)!));
  } else if (tab === "graduating") {
    list = list.filter((a) => a.state === "ACTIVE" && percent(a) >= GRADUATING_PERCENT);
  } else if (tab === "uniswap") {
    list = list.filter((a) => a.state === "MIGRATED");
  }
  if (tab !== "trending" || query) {
    if (sort === "cap") list = [...list].sort((x, y) => capUsd(y) - capUsd(x));
    if (sort === "progress") list = [...list].sort((x, y) => percent(y) - percent(x));
  }

  return (
    <div className="flex flex-col gap-7">
      {!query && <Hero leader={leader} ethUsd={ethUsd} />}

      {query ? (
        <h1 className="font-display text-[30px] font-extrabold tracking-[-0.035em]">
          Results for &ldquo;{query}&rdquo;
          <Link href="/" className="ml-3 align-middle text-base font-bold text-blue">
            Clear
          </Link>
        </h1>
      ) : (
        <section className="flex flex-wrap items-center justify-between gap-3">
          <div role="tablist" aria-label="Coins" className="-mx-1 flex gap-2.5 overflow-x-auto px-1 pb-2">
            {TABS.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className={`btn h-11 shrink-0 px-4 [--edge:4px] ${tab === t.id ? "btn-ink" : "btn-white"}`}
              >
                {t.label}
              </button>
            ))}
          </div>
          {tab !== "trending" && (
            <label className="flex items-center gap-2 font-bold text-muted">
              Sort
              <span className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as Sort)}
                  className="field h-11 w-auto cursor-pointer appearance-none pr-11 font-bold text-ink"
                >
                  <option value="newest">Newest</option>
                  <option value="cap">Market cap</option>
                  <option value="progress">Closest to Uniswap</option>
                </select>
                <svg
                  className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-muted"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </label>
          )}
        </section>
      )}

      {isLoading ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }, (_, i) => (
            <Skeleton key={i} className="h-[230px] rounded-[28px]" />
          ))}
        </div>
      ) : error ? (
        <EmptyState
          icon={<span className="text-3xl">⚡</span>}
          title="Can't load coins right now"
          body="Our coin list is catching up. Trading still works: coins live on Base, not on this site."
        >
          <button onClick={() => refetch()} className="btn btn-blue h-12 px-6">
            Try again
          </button>
        </EmptyState>
      ) : list.length === 0 ? (
        <EmptyFeed query={query} tab={tab} hasAny={(auctions?.length ?? 0) > 0} />
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((a) => (
            <TokenCard key={a.id} auction={a} ethUsd={ethUsd} />
          ))}
          {!query && tab === "new" && <CreateCard />}
        </div>
      )}
    </div>
  );
}

function EmptyFeed({ query, tab, hasAny }: { query: string; tab: Tab; hasAny: boolean }) {
  if (query) {
    return (
      <EmptyState icon={<span className="text-3xl">🔎</span>} title={`No coins match "${query}"`} body="Check the spelling, or paste the coin's address.">
        <Link href={`/create?name=${encodeURIComponent(query)}`} className="btn btn-blue h-12 px-6">
          Create &ldquo;{query}&rdquo; yourself
        </Link>
      </EmptyState>
    );
  }
  if (!hasAny || tab === "new") {
    return (
      <EmptyState icon={<Coin3D size={52} mark="plus" />} title="No coins yet" body="Be the first. It's free apart from the network fee.">
        <Link href="/create" className="btn btn-blue h-12 px-6">
          Create a coin
        </Link>
      </EmptyState>
    );
  }
  const copy = {
    trending: ["Nothing's trading right now", "Coins with trades in the last 24 hours show up here."],
    graduating: ["Nobody's close yet", `Coins past ${GRADUATING_PERCENT}% of their goal show up here. A few big buys could change that.`],
    uniswap: ["No coins on Uniswap yet", "Coins land here after they graduate and move to Uniswap."],
    new: ["", ""],
  }[tab];
  return <EmptyState icon={<span className="text-3xl">🏁</span>} title={copy[0]} body={copy[1]} />;
}

function CreateCard() {
  return (
    <Link
      href="/create"
      className="flex min-h-[230px] flex-col items-center justify-center gap-2.5 rounded-[28px] border-2 border-dashed border-[#B8CBFF] p-5 text-center hover:bg-white"
    >
      <Coin3D size={72} mark="plus" />
      <span className="font-display text-[21px] font-extrabold tracking-[-0.03em]">Your coin here</span>
      <span className="text-sm text-muted">Free to launch. You only pay the network fee.</span>
    </Link>
  );
}

function Hero({ leader, ethUsd }: { leader?: AuctionRow; ethUsd?: number }) {
  return (
    <section className="relative overflow-hidden rounded-[36px] bg-[linear-gradient(125deg,#0047E0_0%,#2E5BFF_50%,#6B4DFF_100%)] p-7 text-white sm:p-12 lg:min-h-[440px]">
      <div className="pointer-events-none absolute -top-40 left-[52%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.28),rgba(255,255,255,0)_65%)]" />
      <div className="pointer-events-none absolute top-[220px] -left-32 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(91,227,166,.35),rgba(91,227,166,0)_65%)]" />

      <div className="relative flex max-w-[640px] flex-col gap-4">
        <span className="inline-flex h-8 items-center gap-2 self-start rounded-full bg-white/15 px-3 text-[13px] font-bold">
          <span className="h-2 w-2 rounded-full bg-mint-bright shadow-[0_0_0_4px_rgba(91,227,166,.3)]" />
          Live on Base{isTestnet && " · test network"}
        </span>
        <h1 className="font-display text-[44px] leading-[0.98] font-extrabold tracking-[-0.045em] sm:text-[68px]">
          Launch a coin.
          <br />
          Send it to Uniswap.
        </h1>
        <p className="max-w-[500px] text-[17px] leading-relaxed text-blue-soft">
          Every coin starts fair on a price curve. When it hits its goal, it moves to Uniswap with its liquidity locked
          forever, and the creator earns from every trade after.
        </p>
        <div className="mt-1 flex flex-wrap gap-3.5">
          <Link href="/create" className="btn h-14 bg-white px-6 text-base text-blue-edge [--edge-color:#9DB8FF] [--edge:6px]">
            Create a coin
          </Link>
          <Link href="/how-it-works" className="btn h-14 bg-white/15 px-5 text-base text-white [--edge-color:rgba(0,16,70,.35)] [--edge:6px]">
            How it works
          </Link>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[520px] lg:block" aria-hidden="true">
        <Coin3D size={300} mark="curve" className="absolute top-10 left-12 -rotate-12" />
        <Coin3D size={124} color="mint" className="absolute top-6 right-6 rotate-[20deg]" />
        <Coin3D size={88} color="sun" className="absolute bottom-10 left-0 -rotate-[26deg]" />
        <Coin3D size={66} color="violet" className="absolute top-48 right-2 rotate-[8deg]" />
      </div>
      {leader && <LeaderSticker auction={leader} ethUsd={ethUsd} />}
    </section>
  );
}

/** The coin closest to graduating, pinned to the hero like a sticker. */
function LeaderSticker({ auction, ethUsd }: { auction: AuctionRow; ethUsd?: number }) {
  const { data: meta } = useTokenMetadata(auction.metadataUri);
  const percent = progressPercent(auction.totalRaised, auction.maxRaise);
  const cap = marketCap(auction.currentPrice, auction.maxSupply, auction.paymentDecimals);
  const label = paymentLabel(auction.paymentTokenAddress);
  const usd = toUsd(cap, auction.paymentTokenAddress, ethUsd);
  return (
    <Link
      href={`/token/${auction.id}`}
      className="relative mt-8 flex w-full max-w-[300px] flex-col gap-2.5 rounded-[22px] bg-white p-4 text-ink shadow-[0_6px_0_#C9D6F5,0_20px_36px_rgba(0,16,70,.35)] lg:absolute lg:right-8 lg:bottom-8 lg:mt-0 lg:w-[290px] lg:rotate-3"
    >
      <span className="text-xs font-extrabold tracking-wide text-blue-edge">🏁 CLOSEST TO UNISWAP</span>
      <span className="flex items-center gap-2.5">
        <CoinFrame image={meta?.image} symbol={auction.symbol} size={40} />
        <span className="min-w-0 flex-1">
          <b className="block truncate">{auction.name}</b>
          <span className="block text-[13px] text-muted">
            ${auction.symbol} · {formatAmount(cap, 3)} {label}
            {usd !== undefined && label === "ETH" && ` · ${formatUsd(usd)}`}
          </span>
        </span>
        <b className="text-lg">{percentLabel(percent)}</b>
      </span>
      <Progress percent={percent} height={10} />
    </Link>
  );
}
