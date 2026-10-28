"use client";

import { useState } from "react";
import type { AuctionData } from "auctionflow-sdk";
import type { AuctionRow, HoldingRow, TradeRow } from "@/lib/indexer";
import type { TokenMetadata } from "@/lib/metadata";
import { safeLink } from "@/lib/metadata";
import { auctionAddress, explorerUrl, paymentLabel } from "@/lib/config";
import { formatPercent, formatToken, shortAddress, timeAgo } from "@/lib/format";
import { Avatar } from "../Wallet";
import { EmptyState, Pill } from "../ui";

type Tab = "activity" | "holders" | "about";

/** A holder's share of the supply above which the Holders tab warns. */
export const CONCENTRATION_PERCENT = 20;

export function TokenTabs({
  row,
  auction,
  trades,
  holders,
  meta,
}: {
  row: AuctionRow;
  auction: AuctionData;
  trades: TradeRow[];
  holders: HoldingRow[];
  meta?: TokenMetadata;
}) {
  const [tab, setTab] = useState<Tab>("activity");
  const label = paymentLabel(row.paymentTokenAddress);
  const supply = holders.reduce((sum, h) => sum + BigInt(h.balance), 0n);
  const people = holders.filter((h) => !isContract(h.holder, row));

  return (
    <section className="card px-6 pt-3 pb-5">
      <div role="tablist" className="flex gap-6 border-b border-[#EEF1F6] font-bold">
        {(
          [
            ["activity", "Activity"],
            ["holders", `Holders · ${people.length}`],
            ["about", "About"],
          ] as const
        ).map(([id, text]) => (
          <button
            key={id}
            role="tab"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={`-mb-px border-b-[3px] py-3.5 ${tab === id ? "border-blue text-ink" : "border-transparent text-muted hover:text-ink"}`}
          >
            {text}
          </button>
        ))}
      </div>

      {tab === "activity" &&
        (trades.length === 0 ? (
          <EmptyState icon={<span className="text-3xl">🌱</span>} title="No trades yet" body="Be the first to buy. Early buyers get the lowest price on the curve." />
        ) : (
          <ul>
            {trades.map((t) => {
              const buy = t.side === "BUY";
              return (
                <li key={t.id} className="flex items-center gap-3 border-b border-[#F3F5F9] py-3 last:border-0">
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-extrabold ${buy ? "bg-up-tint text-up" : "bg-sell-tint text-sell"}`}>
                    {buy ? "↑" : "↓"}
                  </span>
                  <div className="min-w-0 flex-1">
                    <a href={`${explorerUrl}/address/${t.trader}`} target="_blank" rel="noreferrer" className="font-bold hover:text-blue">
                      {who(t.trader, row)}
                    </a>{" "}
                    <span className="text-muted">{buy ? "bought" : "sold"}</span> <b>{formatToken(t.amount, 18)} {row.symbol}</b>
                    <div className="text-[13px] text-muted">
                      <a href={`${explorerUrl}/tx/${t.transactionHash}`} target="_blank" rel="noreferrer" className="hover:text-ink">
                        {timeAgo(t.timestamp)}
                      </a>{" "}
                      · {t.venue === "UNISWAP" ? <span className="font-bold text-unicorn">🦄 Uniswap</span> : <span className="font-bold text-blue-edge">Curve</span>}
                    </div>
                  </div>
                  <b className={buy ? "text-up" : "text-sell"}>
                    {formatToken(t.value, row.paymentDecimals)} {label}
                  </b>
                </li>
              );
            })}
          </ul>
        ))}

      {tab === "holders" && (
        <div className="pt-3">
          {people.some((h) => supply > 0n && Number((BigInt(h.balance) * 10_000n) / supply) / 100 >= CONCENTRATION_PERCENT) && (
            <div className="mb-3 rounded-[18px] bg-warn-tint p-3.5 text-sm text-warn">
              <b>One wallet holds a big share.</b> If it sells, the price can drop sharply.
            </div>
          )}
          {holders.length === 0 ? (
            <EmptyState icon={<span className="text-3xl">👀</span>} title="No holders yet" body="Holders appear here after the first buy." />
          ) : (
            <ul>
              {holders.map((h) => {
                const pct = supply > 0n ? Number((BigInt(h.balance) * 10_000n) / supply) / 100 : 0;
                return (
                  <li key={h.holder} className="flex items-center gap-3 border-b border-[#F3F5F9] py-3 last:border-0">
                    <Avatar address={h.holder} size={32} />
                    <a href={`${explorerUrl}/address/${h.holder}`} target="_blank" rel="noreferrer" className="min-w-0 flex-1 font-bold hover:text-blue">
                      {who(h.holder, row)}
                    </a>
                    <span className="w-24 text-right font-bold">{formatToken(h.balance, 18)}</span>
                    <span className="w-16 text-right text-muted">{formatPercent(pct)}</span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}

      {tab === "about" && <About row={row} auction={auction} meta={meta} />}
    </section>
  );
}

function isContract(address: string, row: AuctionRow) {
  const a = address.toLowerCase();
  return a === auctionAddress.toLowerCase() || a === row.poolAddress?.toLowerCase();
}

/** A friendly name for addresses the page knows. */
function who(address: string, row: AuctionRow): React.ReactNode {
  const a = address.toLowerCase();
  if (a === row.creator.toLowerCase())
    return (
      <>
        {shortAddress(address)} <Pill tone="blue">Creator</Pill>
      </>
    );
  if (a === row.poolAddress?.toLowerCase()) return "🦄 Uniswap pool";
  if (a === auctionAddress.toLowerCase()) return "AuctionFlow (fees to claim)";
  return shortAddress(address);
}

function About({ row, auction, meta }: { row: AuctionRow; auction: AuctionData; meta?: TokenMetadata }) {
  const label = paymentLabel(row.paymentTokenAddress);
  const links = [
    ["Website", safeLink(meta?.website)],
    ["X", safeLink(meta?.twitter)],
    ["Telegram", safeLink(meta?.telegram)],
  ].filter(([, url]) => url) as [string, string][];
  const rules: [string, string][] = [
    ["Supply", `${formatToken(row.maxSupply, 18)} ${row.symbol}`],
    ["Graduates at", `${formatToken(row.maxRaise, row.paymentDecimals)} ${label} raised`],
    ["At graduation", `${Number(auction.liquidityBps) / 100}% to the Uniswap pool, the rest to the creator`],
    ["Trading fee on the curve", `${Number(auction.protocolFeeBps) / 100}%`],
    ["Uniswap pool fees", `1%: ${100 - Number(auction.lpFeeShareBps) / 100}% to the creator, ${Number(auction.lpFeeShareBps) / 100}% to AuctionFlow`],
    ["Pool liquidity", "Locked in the contract forever"],
  ];
  return (
    <div className="flex flex-col gap-4 pt-4">
      {meta?.description ? <p className="leading-relaxed whitespace-pre-line">{meta.description}</p> : <p className="text-muted">The creator didn&apos;t add a description.</p>}
      {links.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {links.map(([name, url]) => (
            <a key={name} href={url} target="_blank" rel="noreferrer nofollow" className="btn btn-white h-10 px-4 text-sm [--edge:3px]">
              {name} ↗
            </a>
          ))}
        </div>
      )}
      <dl className="rounded-[20px] bg-ground px-4 py-1.5 text-sm">
        {rules.map(([k, v]) => (
          <div key={k} className="flex justify-between gap-4 border-b border-line py-2.5 last:border-0">
            <dt className="text-muted">{k}</dt>
            <dd className="text-right font-bold">{v}</dd>
          </div>
        ))}
      </dl>
      <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
        <a href={`${explorerUrl}/token/${row.tokenAddress}`} target="_blank" rel="noreferrer" className="font-bold text-blue">
          Coin contract {shortAddress(row.tokenAddress)} ↗
        </a>
        <a href={`${explorerUrl}/address/${auctionAddress}`} target="_blank" rel="noreferrer" className="font-bold text-blue">
          Launchpad contract ↗
        </a>
      </div>
    </div>
  );
}
