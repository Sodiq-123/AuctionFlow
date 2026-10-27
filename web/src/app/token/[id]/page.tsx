"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { erc20Abi, formatUnits, zeroAddress } from "viem";
import { useReadContract } from "wagmi";
import { AuctionState } from "auctionflow-sdk";
import { readSdk } from "@/lib/sdk";
import { fetchAuction, fetchPriceHistory, fetchTrades } from "@/lib/indexer";
import { useTokenMetadata, safeLink } from "@/lib/metadata";
import { explorerUrl } from "@/lib/config";
import { formatAmount, formatToken, priceToNumber, progressPercent, shortAddress } from "@/lib/format";
import { TokenImage } from "@/components/TokenImage";
import { ProgressBar } from "@/components/ProgressBar";
import { PriceChart } from "@/components/token/PriceChart";
import { TradePanel } from "@/components/token/TradePanel";
import { TradesList } from "@/components/token/TradesList";
import { GraduationPanel, PayoutsPanel } from "@/components/token/AfterGraduation";

export default function TokenPage() {
  const { id } = useParams<{ id: string }>();
  const validId = /^\d+$/.test(id);

  // The indexer has the name, metadata and history; the chain has the live state.
  const { data: row } = useQuery({
    queryKey: ["auction-row", id],
    queryFn: () => fetchAuction(id),
    enabled: validId,
    // A launch takes a few seconds to reach the indexer.
    refetchInterval: (query) => (query.state.data ? false : 3_000),
  });
  const { data: auction, isLoading } = useQuery({
    queryKey: ["auction", id],
    queryFn: () => readSdk.getAuction(BigInt(id)),
    enabled: validId,
    refetchInterval: 5_000,
  });
  const { data: prices } = useQuery({
    queryKey: ["prices", id],
    queryFn: () => fetchPriceHistory(id),
    enabled: validId,
    refetchInterval: 10_000,
  });
  const { data: trades } = useQuery({
    queryKey: ["trades", id],
    queryFn: () => fetchTrades(id),
    enabled: validId,
    refetchInterval: 10_000,
  });
  const { data: paymentSymbol } = useReadContract({
    address: auction?.paymentToken,
    abi: erc20Abi,
    functionName: "symbol",
    query: { enabled: !!auction },
  });
  const { data: meta } = useTokenMetadata(row?.metadataUri);

  if (!validId || (!isLoading && (!auction || auction.token === zeroAddress))) {
    return <p className="text-muted">This launch doesn&apos;t exist.</p>;
  }
  if (!auction || !row) return <p className="text-muted">Loading…</p>;

  const payment = { address: auction.paymentToken, decimals: row.paymentDecimals, symbol: paymentSymbol ?? "" };
  const maxSupply = BigInt(row.maxSupply);
  const price = auction.basePrice + (auction.slope * auction.totalSold) / 10n ** 18n;
  const marketCap = priceToNumber(price, payment.decimals) * Number(formatUnits(maxSupply, 18));
  const percent = progressPercent(auction.totalRaised, auction.maxRaise);
  const links = [
    ["Website", safeLink(meta?.website)],
    ["X", safeLink(meta?.twitter)],
    ["Telegram", safeLink(meta?.telegram)],
  ].filter(([, url]) => url) as [string, string][];

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="space-y-6 lg:col-span-2">
        <div className="flex gap-4">
          <TokenImage image={meta?.image} symbol={row.symbol} size={72} />
          <div className="min-w-0">
            <h1 className="truncate text-2xl font-bold">
              {row.name} <span className="text-muted">${row.symbol}</span>
            </h1>
            <p className="mt-1 text-sm text-muted">
              Created by{" "}
              <a href={`${explorerUrl}/address/${auction.creator}`} target="_blank" rel="noreferrer" className="font-mono hover:text-white">
                {shortAddress(auction.creator)}
              </a>{" "}
              · Token{" "}
              <a href={`${explorerUrl}/token/${auction.token}`} target="_blank" rel="noreferrer" className="font-mono hover:text-white">
                {shortAddress(auction.token)}
              </a>
            </p>
            {links.length > 0 && (
              <div className="mt-2 flex gap-3 text-sm">
                {links.map(([label, url]) => (
                  <a key={label} href={url} target="_blank" rel="noreferrer nofollow" className="text-accent hover:underline">
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {meta?.description && <p className="whitespace-pre-line text-muted">{meta.description}</p>}

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <Stat label="Price" value={`${priceToNumber(price, payment.decimals).toPrecision(3)} ${payment.symbol}`} />
          <Stat label="Market cap" value={`${formatAmount(marketCap)} ${payment.symbol}`} />
          <Stat label="Sold" value={`${formatToken(auction.totalSold, 18)} ${row.symbol}`} />
        </div>

        <div className="rounded-xl border border-line bg-panel p-4">
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-muted">Progress to graduation</span>
            <span>
              {formatToken(auction.totalRaised, payment.decimals)} / {formatToken(auction.maxRaise, payment.decimals)}{" "}
              {payment.symbol} ({percent.toFixed(1)}%)
            </span>
          </div>
          <ProgressBar percent={percent} />
          <p className="mt-2 text-xs text-muted">
            When the raise reaches the threshold, {Number(auction.liquidityBps) / 100}% of it and newly minted tokens open a
            Uniswap pool at the final price, with the liquidity locked forever.
          </p>
        </div>

        <div className="rounded-xl border border-line bg-panel p-4">
          <h2 className="mb-2 font-semibold">Price</h2>
          {prices && prices.length > 0 ? (
            <PriceChart points={prices} paymentDecimals={payment.decimals} />
          ) : (
            <p className="text-sm text-muted">No trades yet.</p>
          )}
        </div>

        <div className="rounded-xl border border-line bg-panel p-4">
          <h2 className="mb-3 font-semibold">Trades</h2>
          <TradesList trades={trades ?? []} symbol={row.symbol} paymentDecimals={payment.decimals} paymentSymbol={payment.symbol} />
        </div>
      </div>

      <div className="space-y-4">
        {auction.state === AuctionState.ACTIVE ? (
          <TradePanel auction={auction} symbol={row.symbol} maxSupply={maxSupply} payment={payment} />
        ) : (
          <GraduationPanel auction={auction} />
        )}
        <PayoutsPanel auction={auction} symbol={row.symbol} payment={payment} />
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-line bg-panel p-3">
      <p className="text-xs text-muted">{label}</p>
      <p className="mt-1 truncate font-semibold">{value}</p>
    </div>
  );
}
