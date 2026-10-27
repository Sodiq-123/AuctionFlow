"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { erc20Abi, parseUnits, type Address } from "viem";
import { useAccount, useReadContract, useSwitchChain, useWalletClient, useWriteContract } from "wagmi";
import {
  applySellSlippage,
  applySlippage,
  calculateSellProceeds,
  fillPurchase,
  maxBuyable,
  spotPrice,
  type AuctionData,
} from "auctionflow-sdk";
import { auctionAddress, chain } from "@/lib/config";
import { readSdk, writeSdk } from "@/lib/sdk";
import { useTx } from "@/lib/tx";
import { formatToken, priceToNumber } from "@/lib/format";

/** Every trade allows the price to move this far before it reverts. */
const SLIPPAGE_BPS = 100;

type Payment = { address: Address; decimals: number; symbol: string };

function parseInput(value: string, decimals: number): bigint | null {
  if (!/^\d*\.?\d*$/.test(value) || value === "" || value === ".") return null;
  try {
    const parsed = parseUnits(value, decimals);
    return parsed > 0n ? parsed : null;
  } catch {
    return null;
  }
}

export function TradePanel({
  auction,
  symbol,
  maxSupply,
  payment,
}: {
  auction: AuctionData;
  symbol: string;
  maxSupply: bigint;
  payment: Payment;
}) {
  const { address, chainId } = useAccount();
  const { data: walletClient } = useWalletClient();
  const { writeContractAsync } = useWriteContract();
  const { switchChain } = useSwitchChain();
  const { status, run, busy } = useTx();
  const [side, setSide] = useState<"buy" | "sell">("buy");
  const [input, setInput] = useState("");

  const { data: paused } = useQuery({ queryKey: ["paused"], queryFn: () => readSdk.isPaused() });
  const balanceArgs = { query: { enabled: !!address, refetchInterval: 10_000 } } as const;
  const { data: paymentBalance } = useReadContract({
    address: payment.address,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [address!],
    ...balanceArgs,
  });
  const { data: tokenBalance } = useReadContract({
    address: auction.token,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [address!],
    ...balanceArgs,
  });
  const { data: allowance } = useReadContract({
    address: payment.address,
    abi: erc20Abi,
    functionName: "allowance",
    args: [address!, auctionAddress],
    ...balanceArgs,
  });

  const { totalSold, totalRaised, maxRaise, basePrice, slope, protocolFeeBps } = auction;

  // Buy: the input is what the buyer spends, fee included.
  const buyQuote = (() => {
    const budget = side === "buy" ? parseInput(input, payment.decimals) : null;
    if (budget === null) return null;
    const costBudget = (budget * 10_000n) / (10_000n + protocolFeeBps);
    const amount = maxBuyable(totalSold, costBudget, basePrice, slope, maxSupply - totalSold);
    if (amount === 0n) return null;
    const fill = fillPurchase(totalSold, amount, basePrice, slope, totalRaised, maxRaise);
    const fee = (fill.cost * protocolFeeBps) / 10_000n;
    return { ...fill, fee, total: fill.cost + fee, maxCost: applySlippage(fill.cost + fee, SLIPPAGE_BPS) };
  })();

  // Sell: the input is the number of tokens.
  const sellQuote = (() => {
    const amount = side === "sell" ? parseInput(input, 18) : null;
    if (amount === null || amount > totalSold) return null;
    const proceeds = calculateSellProceeds(totalSold, amount, basePrice, slope);
    const fee = (proceeds * protocolFeeBps) / 10_000n;
    const net = proceeds - fee;
    return { amount, fee, net, minProceeds: applySellSlippage(net, SLIPPAGE_BPS) };
  })();

  const wrongChain = !!address && chainId !== chain.id;
  const insufficient =
    side === "buy"
      ? buyQuote !== null && paymentBalance !== undefined && buyQuote.total > paymentBalance
      : sellQuote !== null && tokenBalance !== undefined && sellQuote.amount > tokenBalance;

  async function submit() {
    if (!walletClient) return;
    const sdk = writeSdk(walletClient);
    if (side === "buy" && buyQuote) {
      const steps = [];
      if ((allowance ?? 0n) < buyQuote.maxCost) {
        steps.push({
          label: `Approve ${payment.symbol}`,
          send: () =>
            writeContractAsync({
              address: payment.address,
              abi: erc20Abi,
              functionName: "approve",
              args: [auctionAddress, buyQuote.maxCost],
            }),
        });
      }
      steps.push({
        label: `Buy ${symbol}`,
        send: () => sdk.buyTokens(auction.id, buyQuote.amount, { maxCost: buyQuote.maxCost }),
      });
      if (await run(steps)) setInput("");
    } else if (side === "sell" && sellQuote) {
      const ok = await run([
        {
          label: `Sell ${symbol}`,
          send: () => sdk.sellTokens(auction.id, sellQuote.amount, { minProceeds: sellQuote.minProceeds }),
        },
      ]);
      if (ok) setInput("");
    }
  }

  const priceAfter =
    side === "buy" && buyQuote
      ? spotPrice(totalSold + buyQuote.amount, basePrice, slope)
      : side === "sell" && sellQuote
        ? spotPrice(totalSold - sellQuote.amount, basePrice, slope)
        : null;

  const buttonLabel = !address
    ? "Connect a wallet to trade"
    : wrongChain
      ? `Switch to ${chain.name}`
      : busy && status.state === "busy"
        ? `${status.label}…`
        : side === "buy" && paused
          ? "Buying is paused"
          : insufficient
            ? `Not enough ${side === "buy" ? payment.symbol : symbol}`
            : side === "buy"
              ? `Buy ${symbol}`
              : `Sell ${symbol}`;

  const canSubmit =
    !!walletClient && !wrongChain && !busy && !insufficient && (side === "buy" ? !!buyQuote && !paused : !!sellQuote);

  return (
    <div className="rounded-xl border border-line bg-panel p-4">
      <div className="grid grid-cols-2 gap-2 rounded-lg bg-panel-2 p-1">
        {(["buy", "sell"] as const).map((s) => (
          <button
            key={s}
            onClick={() => {
              setSide(s);
              setInput("");
            }}
            className={`rounded-md py-2 text-sm font-semibold capitalize ${
              side === s ? (s === "buy" ? "bg-accent text-accent-ink" : "bg-danger text-black") : "text-muted"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <label className="mt-4 block text-xs text-muted">
        {side === "buy" ? `You pay (${payment.symbol})` : `You sell (${symbol})`}
      </label>
      <input
        inputMode="decimal"
        placeholder="0.0"
        value={input}
        onChange={(e) => setInput(e.target.value.trim())}
        className="mt-1 w-full rounded-lg border border-line bg-panel-2 px-3 py-3 text-lg outline-none focus:border-accent"
      />
      <div className="mt-2 flex items-center justify-between text-xs text-muted">
        <span>
          Balance:{" "}
          {side === "buy"
            ? paymentBalance !== undefined
              ? `${formatToken(paymentBalance, payment.decimals)} ${payment.symbol}`
              : "–"
            : tokenBalance !== undefined
              ? `${formatToken(tokenBalance, 18)} ${symbol}`
              : "–"}
        </span>
        <div className="flex gap-1">
          {side === "buy"
            ? ["1", "5", "10"].map((v) => (
                <button key={v} onClick={() => setInput(v)} className="rounded bg-panel-2 px-2 py-0.5 hover:text-white">
                  {v}
                </button>
              ))
            : [25n, 50n, 100n].map((pct) => (
                <button
                  key={pct.toString()}
                  disabled={!tokenBalance}
                  onClick={() => tokenBalance && setInput(formatPlain((tokenBalance * pct) / 100n))}
                  className="rounded bg-panel-2 px-2 py-0.5 hover:text-white"
                >
                  {pct.toString()}%
                </button>
              ))}
        </div>
      </div>

      {(buyQuote || sellQuote) && (
        <dl className="mt-4 space-y-1.5 rounded-lg bg-panel-2 p-3 text-sm">
          {buyQuote && (
            <>
              <Row label="You receive" value={`${formatToken(buyQuote.amount, 18)} ${symbol}`} />
              <Row label="Fee" value={`${formatToken(buyQuote.fee, payment.decimals)} ${payment.symbol}`} />
              {buyQuote.fillsAuction && (
                <p className="pt-1 text-xs text-accent">This buy reaches the threshold and graduates the token.</p>
              )}
            </>
          )}
          {sellQuote && (
            <>
              <Row label="You receive" value={`${formatToken(sellQuote.net, payment.decimals)} ${payment.symbol}`} />
              <Row label="Fee" value={`${formatToken(sellQuote.fee, payment.decimals)} ${payment.symbol}`} />
            </>
          )}
          {priceAfter !== null && (
            <Row label="Price after" value={`${priceToNumber(priceAfter, payment.decimals).toPrecision(3)} ${payment.symbol}`} />
          )}
          <Row label="Max slippage" value={`${SLIPPAGE_BPS / 100}%`} />
        </dl>
      )}

      <button
        onClick={wrongChain ? () => switchChain({ chainId: chain.id }) : submit}
        disabled={!wrongChain && !canSubmit}
        className={`mt-4 w-full rounded-lg py-3 font-semibold disabled:cursor-not-allowed disabled:opacity-50 ${
          side === "buy" ? "bg-accent text-accent-ink" : "bg-danger text-black"
        }`}
      >
        {buttonLabel}
      </button>
      {status.state === "error" && <p className="mt-2 text-sm text-danger">{status.message}</p>}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="text-muted">{label}</dt>
      <dd className="text-right">{value}</dd>
    </div>
  );
}

/** Token wei as a plain decimal string an input can parse back exactly. */
function formatPlain(amount: bigint): string {
  const whole = amount / 10n ** 18n;
  const frac = (amount % 10n ** 18n).toString().padStart(18, "0").replace(/0+$/, "");
  return frac ? `${whole}.${frac}` : whole.toString();
}
