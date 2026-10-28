"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";
import { AuctionState, calculateSellProceeds } from "auctionflow-sdk";
import { fetchHoldings, fetchTraderHistory, type AuctionRow } from "@/lib/indexer";
import { useAuctions } from "@/lib/queries";
import { useEthUsd, toUsd } from "@/lib/prices";
import { readSdk } from "@/lib/sdk";
import { useTokenMetadata } from "@/lib/metadata";
import { explorerUrl, isWeth, paymentLabel } from "@/lib/config";
import { formatAmount, formatToken, formatUsd, percentLabel, progressPercent, timeAgo } from "@/lib/format";
import { CoinFrame, EmptyState, Progress, Skeleton } from "@/components/ui";
import { Avatar, SignInSheet } from "@/components/Wallet";
import { Coin3D } from "@/components/Coin3D";
import { CollectFees, MoveToUniswap, Payouts } from "@/components/token/AfterGraduation";

type Tab = "holdings" | "created" | "history";

/** What `balance` of a coin would fetch now, in its payment token's base units. */
function worth(a: AuctionRow, balance: bigint): bigint {
  if (a.state === "ACTIVE") {
    // Selling back to the curve, before its fee.
    const sold = BigInt(a.totalSold);
    return calculateSellProceeds(sold, balance > sold ? sold : balance, BigInt(a.basePrice), BigInt(a.slope));
  }
  // At the latest price: the pool's after migration, the final curve price before.
  return (balance * BigInt(a.currentPrice)) / 10n ** 36n;
}

export default function PortfolioPage() {
  const { address, isConnected } = useAccount();
  const [signIn, setSignIn] = useState(false);
  const [tab, setTab] = useState<Tab>("holdings");
  const ethUsd = useEthUsd();
  const { data: auctions } = useAuctions();
  const { data: holdings, isLoading } = useQuery({
    queryKey: ["holdings", address],
    queryFn: () => fetchHoldings(address!),
    enabled: !!address,
    refetchInterval: 15_000,
  });
  const { data: history } = useQuery({
    queryKey: ["history", address],
    queryFn: () => fetchTraderHistory(address!),
    enabled: !!address && tab === "history",
  });

  if (!isConnected || !address) {
    return (
      <>
        <EmptyState
          icon={
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="9" r="4" />
              <path d="M5 20c1-4 4-6 7-6s6 2 7 6" />
            </svg>
          }
          title="Sign in to see your coins"
          body="We read your wallet's balances. We never hold your money."
        >
          <button onClick={() => setSignIn(true)} className="btn btn-blue h-14 px-8 text-base">
            Sign in
          </button>
        </EmptyState>
        <SignInSheet open={signIn} onClose={() => setSignIn(false)} />
      </>
    );
  }

  const byId = new Map((auctions ?? []).map((a) => [a.id, a]));
  const rows = (holdings ?? [])
    .map((h) => {
      const a = byId.get(h.auctionId);
      if (!a) return null;
      const value = worth(a, BigInt(h.balance));
      const usd = toUsd(Number(formatUnits(value, a.paymentDecimals)), a.paymentTokenAddress, ethUsd);
      return { a, balance: BigInt(h.balance), value, usd };
    })
    .filter((r): r is NonNullable<typeof r> => r !== null)
    .sort((x, y) => (y.usd ?? 0) - (x.usd ?? 0));
  const created = (auctions ?? []).filter((a) => a.creator.toLowerCase() === address.toLowerCase());
  const totalUsd = rows.reduce((sum, r) => sum + (r.usd ?? 0), 0);
  const totalEth = rows.filter((r) => isWeth(r.a.paymentTokenAddress)).reduce((sum, r) => sum + r.value, 0n);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Avatar address={address} size={44} />
        <h1 className="font-display text-[34px] font-extrabold tracking-[-0.04em]">Your coins</h1>
      </div>

      <section className="grid gap-5 md:grid-cols-2">
        <div className="card p-7">
          <div className="font-bold text-muted">Your coins are worth</div>
          <div className="font-display text-[44px] font-extrabold tracking-[-0.045em] sm:text-[52px]">
            {ethUsd === undefined && totalEth > 0n ? `${formatToken(totalEth, 18)} ETH` : formatUsd(totalUsd)}
          </div>
          <div className="text-muted">
            across {rows.length} {rows.length === 1 ? "coin" : "coins"}
            {totalEth > 0n && ethUsd !== undefined && ` · ${formatToken(totalEth, 18)} ETH in ETH-priced coins`}
          </div>
        </div>
        <div className="relative flex flex-col justify-center gap-2 overflow-hidden rounded-[32px] bg-[linear-gradient(125deg,#0047E0,#2E5BFF_55%,#6B4DFF)] p-7 text-white">
          <Coin3D size={150} className="pointer-events-none absolute -top-4 -right-3 rotate-[16deg] opacity-90" />
          <div className="relative font-bold text-blue-soft">Coins you made</div>
          <div className="relative font-display text-[40px] font-extrabold tracking-[-0.04em]">{created.length}</div>
          <div className="relative max-w-[340px] text-sm text-blue-soft">
            {created.length ? "Your earnings and claims are under Created." : "Make one and earn 20% of its raise plus 80% of its Uniswap fees."}
          </div>
        </div>
      </section>

      <div role="tablist" className="flex gap-2.5">
        {(
          [
            ["holdings", `Holdings · ${rows.length}`],
            ["created", `Created · ${created.length}`],
            ["history", "History"],
          ] as const
        ).map(([id, label]) => (
          <button key={id} role="tab" aria-selected={tab === id} onClick={() => setTab(id)} className={`btn h-11 px-4 [--edge:4px] ${tab === id ? "btn-ink" : "btn-white"}`}>
            {label}
          </button>
        ))}
      </div>

      {tab === "holdings" &&
        (isLoading ? (
          <Skeleton className="h-[240px] rounded-[28px]" />
        ) : rows.length === 0 ? (
          <EmptyState icon={<Coin3D size={52} color="violet" />} title="Your stack is empty" body="Coins you buy or create land here, with anything you can claim.">
            <Link href="/" className="btn btn-blue h-12 px-6">
              Explore coins
            </Link>
            <Link href="/create" className="btn btn-white h-12 px-6">
              Create one
            </Link>
          </EmptyState>
        ) : (
          <section className="card px-5 py-2 sm:px-7">
            {rows.map((r) => (
              <HoldingRow key={r.a.id} a={r.a} balance={r.balance} value={r.value} usd={r.usd} />
            ))}
          </section>
        ))}

      {tab === "created" &&
        (created.length === 0 ? (
          <EmptyState icon={<Coin3D size={52} mark="plus" />} title="You haven't made a coin yet" body="It's free apart from the network fee, and you earn from it for good.">
            <Link href="/create" className="btn btn-blue h-12 px-6">
              Create a coin
            </Link>
          </EmptyState>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {created.map((a) => (
              <CreatedCard key={a.id} a={a} />
            ))}
          </div>
        ))}

      {tab === "history" && (
        <section className="card px-5 py-2 sm:px-7">
          {!history ? (
            <Skeleton className="my-4 h-24" />
          ) : history.length === 0 ? (
            <p className="py-8 text-center text-muted">No trades yet.</p>
          ) : (
            history.map((t) => {
              const a = byId.get(t.auctionId);
              if (!a) return null;
              const buy = t.side === "BUY";
              return (
                <div key={t.id} className="flex items-center gap-3 border-b border-[#F3F5F9] py-3 last:border-0">
                  <span className={`flex h-9 w-9 items-center justify-center rounded-xl font-extrabold ${buy ? "bg-up-tint text-up" : "bg-sell-tint text-sell"}`}>{buy ? "↑" : "↓"}</span>
                  <div className="flex-1">
                    {buy ? "Bought" : "Sold"} <b>{formatToken(t.amount, 18)} {a.symbol}</b>
                    <div className="text-[13px] text-muted">
                      <a href={`${explorerUrl}/tx/${t.transactionHash}`} target="_blank" rel="noreferrer" className="hover:text-ink">
                        {timeAgo(t.timestamp)}
                      </a>{" "}
                      · {t.venue === "UNISWAP" ? "🦄 Uniswap" : "Curve"}
                    </div>
                  </div>
                  <b className={buy ? "text-up" : "text-sell"}>
                    {formatToken(t.value, a.paymentDecimals)} {paymentLabel(a.paymentTokenAddress)}
                  </b>
                </div>
              );
            })
          )}
        </section>
      )}
    </div>
  );
}

function HoldingRow({ a, balance, value, usd }: { a: AuctionRow; balance: bigint; value: bigint; usd?: number }) {
  const { data: meta } = useTokenMetadata(a.metadataUri);
  const status =
    a.state === "MIGRATED"
      ? { text: "🦄 On Uniswap", className: "text-unicorn" }
      : a.state === "COMPLETED"
        ? { text: "Graduated · locked until moved", className: "text-up" }
        : { text: `${percentLabel(progressPercent(a.totalRaised, a.maxRaise))} to Uniswap`, className: "text-blue-edge" };
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-[#F3F5F9] py-4 last:border-0">
      <Link href={`/token/${a.id}`} className="flex min-w-[200px] flex-1 items-center gap-3">
        <CoinFrame image={meta?.image} symbol={a.symbol} size={48} graduated={a.state === "MIGRATED"} />
        <span>
          <b className="font-display text-[19px] tracking-[-0.02em]">{a.name}</b>
          <span className={`block text-[13px] font-extrabold ${status.className}`}>{status.text}</span>
        </span>
      </Link>
      <span className="w-28 text-right">
        <span className="block text-xs text-muted">You hold</span>
        <b>
          {formatToken(balance, 18)} {a.symbol}
        </b>
      </span>
      <span className="w-36 text-right">
        <span className="block text-xs text-muted">{a.state === "ACTIVE" ? "Sells back for" : "Worth at today's price"}</span>
        <b>
          {formatToken(value, a.paymentDecimals)} {paymentLabel(a.paymentTokenAddress)}
        </b>
        {usd !== undefined && isWeth(a.paymentTokenAddress) && <span className="block text-xs text-muted">{formatUsd(usd)}</span>}
      </span>
      <Link href={`/token/${a.id}`} className="btn btn-tint h-10 px-4 text-sm [--edge:3px]">
        Trade
      </Link>
    </div>
  );
}

/** A coin the wallet made: progress, and what the creator can do or take now. */
function CreatedCard({ a }: { a: AuctionRow }) {
  const { data: meta } = useTokenMetadata(a.metadataUri);
  const { data: auction } = useQuery({ queryKey: ["auction", a.id], queryFn: () => readSdk.getAuction(BigInt(a.id)), refetchInterval: 15_000 });
  const payment = { address: a.paymentTokenAddress, decimals: a.paymentDecimals, label: paymentLabel(a.paymentTokenAddress) };
  const percent = a.state === "ACTIVE" ? progressPercent(a.totalRaised, a.maxRaise) : 100;
  const share = (BigInt(a.maxRaise) * (10_000n - BigInt(a.liquidityBps))) / 10_000n;

  return (
    <div className="card flex flex-col gap-4 p-5">
      <Link href={`/token/${a.id}`} className="flex items-center gap-3">
        <CoinFrame image={meta?.image} symbol={a.symbol} size={56} graduated={a.state === "MIGRATED"} />
        <span>
          <b className="font-display text-[21px] tracking-[-0.02em]">{a.name}</b>
          <span className="block text-[13px] font-extrabold text-muted">
            {a.state === "ACTIVE"
              ? `${percentLabel(percent)} to Uniswap · ${formatToken(a.totalRaised, a.paymentDecimals)} ${payment.label} raised`
              : a.state === "COMPLETED"
                ? "Graduated 🎉"
                : "🦄 On Uniswap"}
          </span>
        </span>
      </Link>
      {a.state === "ACTIVE" && (
        <>
          <Progress percent={percent} />
          <p className="rounded-[18px] bg-ground p-3.5 text-sm leading-relaxed">
            At graduation you can withdraw <b>{formatToken(share, payment.decimals)} {payment.label}</b>, your{" "}
            {100 - Number(a.liquidityBps) / 100}% of the raise. Then you earn 80% of its Uniswap fees.
          </p>
          <ShareButton id={a.id} />
        </>
      )}
      {auction && (
        <>
          <Payouts auction={auction} symbol={a.symbol} payment={payment} compact />
          {auction.state === AuctionState.COMPLETED && <MoveToUniswap auction={auction} name={a.name} />}
          {auction.state === AuctionState.MIGRATED && a.poolAddress && <CollectFees auction={auction} />}
        </>
      )}
      {a.state !== "ACTIVE" && (
        <div className="flex justify-between text-sm">
          <span className="text-muted">Traded, all time</span>
          <b>
            {formatAmount(Number(formatUnits(BigInt(a.volume), a.paymentDecimals)))} {payment.label}
          </b>
        </div>
      )}
    </div>
  );
}

function ShareButton({ id }: { id: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(`${window.location.origin}/token/${id}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="btn btn-white h-12"
    >
      {copied ? "Link copied" : "Share to reach the goal"}
    </button>
  );
}
