"use client";

import { useState } from "react";
import { erc20Abi, formatUnits, parseUnits, type Address } from "viem";
import { useAccount, useBalance, useReadContract, useSwitchChain, useWalletClient, useWriteContract } from "wagmi";
import { applySellSlippage, applySlippage, calculateSellProceeds, fillPurchase, maxBuyable, type AuctionData } from "auctionflow-sdk";
import { auctionAddress, chain, isWeth } from "@/lib/config";
import { writeSdk } from "@/lib/sdk";
import { useTx, type TxStep } from "@/lib/tx";
import { formatPercent, formatToken } from "@/lib/format";
import { SignInSheet } from "../Wallet";
import { SlippageSetting, TxStatusView } from "../TxStatus";
import { CurrencyBadge } from "../ui";

export type Payment = { address: Address; decimals: number; label: string };

/** ETH kept back for network fees when "Max" spends a wallet's ETH. */
const GAS_RESERVE = parseUnits("0.0003", 18);

export function parseInput(value: string, decimals: number): bigint | null {
  if (!/^\d*\.?\d*$/.test(value) || value === "" || value === ".") return null;
  try {
    const parsed = parseUnits(value, decimals);
    return parsed > 0n ? parsed : null;
  } catch {
    return null;
  }
}

function plain(amount: bigint, decimals: number): string {
  return formatUnits(amount, decimals).replace(/\.?0+$/, "") || "0";
}

/** The balance of `token` (plain ETH for WETH) and the curve's allowance, for the connected wallet. */
export function useWalletFunds(token: Address, spender: Address) {
  const { address } = useAccount();
  const eth = isWeth(token);
  const query = { enabled: !!address, refetchInterval: 10_000 } as const;
  const { data: ethBalance } = useBalance({ address, query: { ...query, enabled: !!address && eth } });
  const { data: tokenBalance } = useReadContract({
    address: token,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [address!],
    query: { ...query, enabled: !!address && !eth },
  });
  const { data: allowance } = useReadContract({
    address: token,
    abi: erc20Abi,
    functionName: "allowance",
    args: [address!, spender],
    query: { ...query, enabled: !!address && !eth },
  });
  return { balance: eth ? ethBalance?.value : tokenBalance, allowance: eth ? undefined : allowance };
}

/** Buy and sell on the bonding curve, before graduation. */
export function CurveTrade({
  auction,
  symbol,
  maxSupply,
  payment,
  paused,
}: {
  auction: AuctionData;
  symbol: string;
  maxSupply: bigint;
  payment: Payment;
  paused: boolean;
}) {
  const { address, chainId } = useAccount();
  const { data: walletClient } = useWalletClient();
  const { writeContractAsync } = useWriteContract();
  const { switchChain } = useSwitchChain();
  const { status, run, busy, reset } = useTx();
  const [side, setSide] = useState<"buy" | "sell">("buy");
  const [input, setInput] = useState("");
  const [slippageBps, setSlippageBps] = useState(100);
  const [signIn, setSignIn] = useState(false);

  const eth = isWeth(payment.address);
  const funds = useWalletFunds(payment.address, auctionAddress);
  const { data: tokenBalance } = useReadContract({
    address: auction.token,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [address!],
    query: { enabled: !!address, refetchInterval: 10_000 },
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
    return { ...fill, fee, total: fill.cost + fee, maxCost: applySlippage(fill.cost + fee, slippageBps) };
  })();

  // Sell: the input is the number of tokens.
  const sellQuote = (() => {
    const amount = side === "sell" ? parseInput(input, 18) : null;
    if (amount === null || amount > totalSold) return null;
    const proceeds = calculateSellProceeds(totalSold, amount, basePrice, slope);
    const fee = (proceeds * protocolFeeBps) / 10_000n;
    const net = proceeds - fee;
    return { amount, fee, net, minProceeds: applySellSlippage(net, slippageBps) };
  })();

  const wrongChain = !!address && chainId !== chain.id;
  const insufficient =
    side === "buy"
      ? buyQuote !== null && funds.balance !== undefined && (eth ? buyQuote.maxCost : buyQuote.total) > funds.balance
      : sellQuote !== null && tokenBalance !== undefined && sellQuote.amount > tokenBalance;

  async function submit() {
    if (!walletClient) return;
    const sdk = writeSdk(walletClient);
    const steps: TxStep[] = [];
    if (side === "buy" && buyQuote) {
      if (eth) {
        steps.push({ label: `Buy ${symbol}`, send: () => sdk.buyTokensWithETH(auction.id, buyQuote.amount, { maxCost: buyQuote.maxCost }) });
      } else {
        if ((funds.allowance ?? 0n) < buyQuote.maxCost) {
          steps.push({
            label: `Allow ${payment.label}`,
            send: () => writeContractAsync({ address: payment.address, abi: erc20Abi, functionName: "approve", args: [auctionAddress, buyQuote.maxCost] }),
          });
        }
        steps.push({ label: `Buy ${symbol}`, send: () => sdk.buyTokens(auction.id, buyQuote.amount, { maxCost: buyQuote.maxCost }) });
      }
    } else if (side === "sell" && sellQuote) {
      steps.push({
        label: `Sell ${symbol}`,
        send: () =>
          eth
            ? sdk.sellTokensForETH(auction.id, sellQuote.amount, { minProceeds: sellQuote.minProceeds })
            : sdk.sellTokens(auction.id, sellQuote.amount, { minProceeds: sellQuote.minProceeds }),
      });
    }
    if (steps.length && (await run(steps))) setInput("");
  }

  const quick =
    side === "buy"
      ? (eth ? ["0.001", "0.005", "0.01"] : ["1", "5", "10"]).map((v) => ({ label: v, value: v }))
      : [25n, 50n, 75n].map((pct) => ({ label: `${pct}%`, value: tokenBalance ? plain((tokenBalance * pct) / 100n, 18) : "" }));
  const max =
    side === "buy"
      ? funds.balance !== undefined
        ? plain(eth ? (funds.balance > GAS_RESERVE ? funds.balance - GAS_RESERVE : 0n) : funds.balance, payment.decimals)
        : ""
      : tokenBalance
        ? plain(tokenBalance, 18)
        : "";

  const needsApproval = side === "buy" && !eth && buyQuote !== null && (funds.allowance ?? 0n) < buyQuote.maxCost;
  const label = !address
    ? `Sign in to ${side}`
    : wrongChain
      ? `Switch to ${chain.name}`
      : side === "buy" && paused
        ? "Buying is paused"
        : insufficient
          ? `Not enough ${side === "buy" ? payment.label : symbol}`
          : needsApproval
            ? `Allow ${payment.label}, then buy`
            : side === "buy"
              ? `Buy ${symbol}`
              : `Sell for ${payment.label}`;
  const canSubmit = !!walletClient && !wrongChain && !busy && !insufficient && (side === "buy" ? !!buyQuote && !paused : !!sellQuote);

  function onButton() {
    if (!address) return setSignIn(true);
    if (wrongChain) return switchChain({ chainId: chain.id });
    submit();
  }

  return (
    <section className="card flex flex-col gap-3.5 p-5" aria-label="Trade">
      <div className="grid grid-cols-2 gap-1.5 rounded-2xl bg-[#F0F3F9] p-1.5" role="tablist">
        {(["buy", "sell"] as const).map((s) => (
          <button
            key={s}
            role="tab"
            aria-selected={side === s}
            onClick={() => {
              setSide(s);
              setInput("");
              reset();
            }}
            className={`h-11 rounded-xl font-extrabold capitalize ${
              side === s ? (s === "buy" ? "bg-blue text-white shadow-[0_3px_0_var(--color-blue-edge)]" : "bg-sell-tint text-sell shadow-[0_3px_0_var(--color-sell-edge)]") : "text-muted"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {paused && side === "buy" && (
        <div className="rounded-[18px] bg-warn-tint p-3.5 text-sm text-warn">
          <b>Buying is paused for now.</b> You can still sell back to the curve.
        </div>
      )}

      <label className="flex flex-col gap-2 text-sm font-bold">
        {side === "buy" ? "You pay" : "You sell"}
        <span className="flex h-[68px] items-center gap-2.5 rounded-[20px] bg-ground px-4 shadow-[inset_0_0_0_2px_var(--color-line)] focus-within:shadow-[inset_0_0_0_2px_var(--color-blue)]">
          <input
            inputMode="decimal"
            placeholder="0"
            value={input}
            onChange={(e) => {
              setInput(e.target.value.trim());
              reset();
            }}
            className="min-w-0 flex-1 bg-transparent font-display text-[30px] font-extrabold tracking-[-0.03em] outline-none"
            aria-label={side === "buy" ? `Amount of ${payment.label} to pay` : `Amount of ${symbol} to sell`}
          />
          <span className="inline-flex h-9 items-center rounded-full bg-white px-3 shadow-[0_2px_0_#D5DAE3]">
            {side === "buy" ? <CurrencyBadge token={payment.address} size={22} /> : <b>{symbol}</b>}
          </span>
        </span>
      </label>
      <div className="flex items-center justify-between text-[13px] text-muted">
        <span>
          Balance:{" "}
          {side === "buy"
            ? funds.balance !== undefined
              ? `${formatToken(funds.balance, payment.decimals)} ${payment.label}`
              : "–"
            : tokenBalance !== undefined
              ? `${formatToken(tokenBalance, 18)} ${symbol}`
              : "–"}
        </span>
      </div>
      <div className="grid grid-cols-4 gap-1.5">
        {[...quick, { label: side === "buy" ? "Max" : "All", value: max }].map((q) => (
          <button
            key={q.label}
            disabled={!q.value}
            onClick={() => {
              setInput(q.value);
              reset();
            }}
            className={`btn h-9 text-[13px] [--edge:3px] ${input && input === q.value ? (side === "buy" ? "btn-tint" : "btn-sell") : "btn-white"}`}
          >
            {q.label}
          </button>
        ))}
      </div>

      <dl className="flex flex-col gap-2 rounded-[18px] bg-ground p-3.5 text-sm">
        {buyQuote ? (
          <>
            <Row label="You get about" value={`${formatToken(buyQuote.amount, 18)} ${symbol}`} />
            <Row label="Share of supply" value={formatPercent((Number(buyQuote.amount) / Number(maxSupply)) * 100)} />
            <Row label={`Fee (${Number(protocolFeeBps) / 100}%)`} value={`${formatToken(buyQuote.fee, payment.decimals)} ${payment.label}`} />
            {buyQuote.fillsAuction && <p className="font-semibold text-up">This buy reaches the goal and graduates the coin. 🎉</p>}
          </>
        ) : sellQuote ? (
          <>
            <Row label="You get about" value={`${formatToken(sellQuote.net, payment.decimals)} ${payment.label}`} />
            <Row label="At least" value={`${formatToken(sellQuote.minProceeds, payment.decimals)} ${payment.label}`} />
            <Row label={`Fee (${Number(protocolFeeBps) / 100}%)`} value={`${formatToken(sellQuote.fee, payment.decimals)} ${payment.label}`} />
          </>
        ) : (
          <p className="text-muted">Enter an amount to see what you get.</p>
        )}
        <div className="flex items-center justify-between">
          <dt className="text-muted">Price protection</dt>
          <dd>
            <SlippageSetting bps={slippageBps} onChange={setSlippageBps} />
          </dd>
        </div>
      </dl>

      <button onClick={onButton} disabled={!!address && !wrongChain && !canSubmit} className={`btn h-[60px] text-[17px] [--edge:6px] ${side === "buy" ? "btn-blue" : "btn-sell"}`}>
        {busy && (status.state === "signing" || status.state === "confirming") ? `${status.label}…` : label}
      </button>
      <TxStatusView status={status} onRetry={submit} doneText={side === "buy" ? `You bought ${symbol}.` : `Sold. ${payment.label} is in your wallet.`} />
      {status.state === "idle" && side === "buy" && buyQuote && (
        <p className="text-[13px] leading-snug text-muted">
          {eth
            ? `One wallet prompt. You send at most ${formatToken(buyQuote.maxCost, payment.decimals)} ETH and get back anything unused.`
            : needsApproval
              ? `Your wallet asks twice: allow ${payment.label}, then buy. Most you'll pay: ${formatToken(buyQuote.maxCost, payment.decimals)} ${payment.label}.`
              : `Most you'll pay: ${formatToken(buyQuote.maxCost, payment.decimals)} ${payment.label}.`}
        </p>
      )}
      <SignInSheet open={signIn} onClose={() => setSignIn(false)} />
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-3">
      <dt className="text-muted">{label}</dt>
      <dd className="text-right font-bold">{value}</dd>
    </div>
  );
}
