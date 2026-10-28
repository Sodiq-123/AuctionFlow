"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { erc20Abi, type Address } from "viem";
import { useAccount, usePublicClient, useSwitchChain, useWalletClient, useWriteContract } from "wagmi";
import { AuctionState, type AuctionData } from "auctionflow-sdk";
import { chain, explorerUrl, isWeth, uniswap } from "@/lib/config";
import { readSdk, writeSdk } from "@/lib/sdk";
import { useTx, type TxStep } from "@/lib/tx";
import { formatToken } from "@/lib/format";
import { quoteCall, swapCall, uniswapUrl } from "@/lib/uniswap";
import { SignInSheet } from "../Wallet";
import { SlippageSetting, TxStatusView } from "../TxStatus";
import { CurrencyBadge, Pill } from "../ui";
import { parseInput, useWalletFunds, type Payment } from "./CurveTrade";

/** The goal is reached and the curve is closed: anyone moves it to Uniswap. */
export function MoveToUniswap({ auction, name }: { auction: AuctionData; name: string }) {
  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();
  const { status, run, busy } = useTx();
  const [signIn, setSignIn] = useState(false);

  return (
    <section className="card flex flex-col gap-3.5 p-5">
      <Pill tone="up">Graduated 🎉</Pill>
      <h2 className="font-display text-[26px] leading-tight font-extrabold tracking-[-0.035em]">{name} made it.</h2>
      <p className="text-sm leading-relaxed text-muted">
        Trading on the curve is closed. Anyone can now move it to Uniswap, where its liquidity is locked forever. Coins stay
        locked in wallets until this is done.
      </p>
      <button
        onClick={() => (address ? run([{ label: "Move to Uniswap", send: () => writeSdk(walletClient!).migrate(auction.id) }]) : setSignIn(true))}
        disabled={busy || (!!address && !walletClient)}
        className="btn btn-blue h-14 text-base [--edge:6px]"
      >
        {busy ? "Moving…" : address ? "Move to Uniswap" : "Sign in to move it"}
      </button>
      <TxStatusView status={status} doneText="It's on Uniswap. Trading is open." />
      <SignInSheet open={signIn} onClose={() => setSignIn(false)} />
    </section>
  );
}

/** Buy and sell a migrated token through its Uniswap pool, without leaving the app. */
export function UniswapTrade({ auction, symbol, payment }: { auction: AuctionData; symbol: string; payment: Payment }) {
  const { address, chainId } = useAccount();
  const client = usePublicClient();
  const { data: walletClient } = useWalletClient();
  const { writeContractAsync } = useWriteContract();
  const { switchChain } = useSwitchChain();
  const { status, run, busy, reset } = useTx();
  const [side, setSide] = useState<"buy" | "sell">("buy");
  const [input, setInput] = useState("");
  const [slippageBps, setSlippageBps] = useState(100);
  const [signIn, setSignIn] = useState(false);

  const eth = isWeth(payment.address);
  const funds = useWalletFunds(payment.address, uniswap.router);
  const tokenFunds = useWalletFunds(auction.token, uniswap.router);
  const tokenIn: Address = side === "buy" ? payment.address : auction.token;
  const tokenOut: Address = side === "buy" ? auction.token : payment.address;
  const amountIn = parseInput(input, side === "buy" ? payment.decimals : 18);

  const { data: quoted, isFetching, error: quoteError } = useQuery({
    queryKey: ["uni-quote", tokenIn, tokenOut, amountIn?.toString()],
    enabled: !!client && amountIn !== null,
    queryFn: async () => (await client!.simulateContract(quoteCall(tokenIn, tokenOut, amountIn!))).result[0],
    refetchInterval: 15_000,
  });
  const minOut = quoted !== undefined ? (quoted * BigInt(10_000 - slippageBps)) / 10_000n : undefined;

  const balance = side === "buy" ? funds.balance : tokenFunds.balance;
  const allowance = side === "buy" ? funds.allowance : tokenFunds.allowance;
  const needsApproval = amountIn !== null && !(side === "buy" && eth) && (allowance ?? 0n) < amountIn;
  const insufficient = amountIn !== null && balance !== undefined && amountIn > balance;
  const wrongChain = !!address && chainId !== chain.id;
  const outLabel = side === "buy" ? symbol : payment.label;

  async function submit() {
    if (!walletClient || amountIn === null || minOut === undefined) return;
    const steps: TxStep[] = [];
    if (needsApproval) {
      steps.push({
        label: `Allow ${side === "buy" ? payment.label : symbol}`,
        send: () => writeContractAsync({ address: tokenIn, abi: erc20Abi, functionName: "approve", args: [uniswap.router, amountIn] }),
      });
    }
    steps.push({ label: side === "buy" ? `Buy ${symbol}` : `Sell ${symbol}`, send: () => walletClient.writeContract({ ...swapCall(walletClient.account.address, { tokenIn, tokenOut, amountIn, minOut }), account: walletClient.account }) });
    if (await run(steps)) setInput("");
  }

  const label = !address
    ? `Sign in to ${side}`
    : wrongChain
      ? `Switch to ${chain.name}`
      : insufficient
        ? `Not enough ${side === "buy" ? payment.label : symbol}`
        : needsApproval
          ? `Allow ${side === "buy" ? payment.label : symbol}, then ${side}`
          : side === "buy"
            ? `Buy ${symbol}`
            : `Sell for ${payment.label}`;
  const canSubmit = !!walletClient && !wrongChain && !busy && !insufficient && minOut !== undefined && minOut > 0n;

  return (
    <section className="card flex flex-col gap-3.5 p-5" aria-label="Trade on Uniswap">
      <div className="flex items-center justify-between">
        <Pill tone="unicorn">🦄 On Uniswap</Pill>
        <a href={uniswapUrl(auction.token)} target="_blank" rel="noreferrer" className="text-[13px] font-bold text-blue">
          Open on Uniswap ↗
        </a>
      </div>
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
      <p className="text-[13px] text-muted">
        Balance: {balance !== undefined ? `${formatToken(balance, side === "buy" ? payment.decimals : 18)} ${side === "buy" ? payment.label : symbol}` : "–"}
      </p>
      <dl className="flex flex-col gap-2 rounded-[18px] bg-ground p-3.5 text-sm">
        {amountIn === null ? (
          <p className="text-muted">Enter an amount to see what you get.</p>
        ) : quoteError ? (
          <p className="font-semibold text-danger">Uniswap can&apos;t fill this right now. Try a smaller amount.</p>
        ) : (
          <>
            <div className="flex justify-between">
              <dt className="text-muted">You get about</dt>
              <dd className="font-bold">{quoted === undefined || isFetching ? "…" : `${formatToken(quoted, side === "buy" ? 18 : payment.decimals)} ${outLabel}`}</dd>
            </div>
            {minOut !== undefined && (
              <div className="flex justify-between">
                <dt className="text-muted">At least</dt>
                <dd className="font-bold">{`${formatToken(minOut, side === "buy" ? 18 : payment.decimals)} ${outLabel}`}</dd>
              </div>
            )}
            <div className="flex justify-between">
              <dt className="text-muted">Route</dt>
              <dd className="font-bold">Uniswap v3 · 1% pool</dd>
            </div>
          </>
        )}
        <div className="flex items-center justify-between">
          <dt className="text-muted">Price protection</dt>
          <dd>
            <SlippageSetting bps={slippageBps} onChange={setSlippageBps} />
          </dd>
        </div>
      </dl>
      <button
        onClick={() => (!address ? setSignIn(true) : wrongChain ? switchChain({ chainId: chain.id }) : submit())}
        disabled={!!address && !wrongChain && !canSubmit}
        className={`btn h-[60px] text-[17px] [--edge:6px] ${side === "buy" ? "btn-blue" : "btn-sell"}`}
      >
        {busy && (status.state === "signing" || status.state === "confirming") ? `${status.label}…` : label}
      </button>
      <TxStatusView status={status} onRetry={submit} doneText={side === "buy" ? `You bought ${symbol}.` : `Sold. ${payment.label} is in your wallet.`} />
      <p className="text-[13px] leading-snug text-muted">The pool&apos;s 1% fee is shared: 80% to the creator, 20% to AuctionFlow.</p>
      <SignInSheet open={signIn} onClose={() => setSignIn(false)} />
    </section>
  );
}

const wethAbi = [{ type: "function", name: "withdraw", stateMutability: "nonpayable", inputs: [{ name: "amount", type: "uint256" }], outputs: [] }] as const;

/**
 * What the connected account can take out of one auction: a creator's share
 * of the raise, and credited pool fees. Wrapped ETH is unwrapped on request.
 */
export function Payouts({ auction, symbol, payment, compact = false }: { auction: AuctionData; symbol: string; payment: Payment; compact?: boolean }) {
  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();
  const { writeContractAsync } = useWriteContract();
  const { status, run, busy } = useTx();
  const [unwrap, setUnwrap] = useState(true);
  const eth = isWeth(payment.address);
  const isCreator = !!address && address.toLowerCase() === auction.creator.toLowerCase();
  const graduated = auction.state === AuctionState.COMPLETED || auction.state === AuctionState.MIGRATED;

  const { data } = useQuery({
    queryKey: ["payouts", auction.id.toString(), address],
    enabled: !!address,
    refetchInterval: 20_000,
    queryFn: async () => {
      const [withdrawn, claimablePayment, claimableToken] = await Promise.all([
        readSdk.hasWithdrawnProceeds(auction.id),
        readSdk.getClaimable(payment.address, address!),
        readSdk.getClaimable(auction.token, address!),
      ]);
      return { withdrawn, claimablePayment, claimableToken };
    },
  });
  if (!address || !data) return null;

  const creatorShare = auction.totalRaised - (auction.totalRaised * auction.liquidityBps) / 10_000n;
  const canWithdraw = isCreator && graduated && !data.withdrawn && creatorShare > 0n;
  if (!canWithdraw && data.claimablePayment === 0n && data.claimableToken === 0n) return null;

  const sdk = walletClient ? writeSdk(walletClient) : null;
  /** Pay out `amount` of WETH as plain ETH, when asked to. */
  const unwrapStep = (amount: bigint): TxStep[] =>
    eth && unwrap ? [{ label: "Unwrap to ETH", send: () => writeContractAsync({ address: payment.address, abi: wethAbi, functionName: "withdraw", args: [amount] }) }] : [];

  return (
    <section className={compact ? "flex flex-col gap-3" : "card flex flex-col gap-3 p-5"}>
      {!compact && <h2 className="text-base font-extrabold">Yours to take</h2>}
      {canWithdraw && (
        <PayoutRow
          title="Your 20% of the raise"
          amount={`${formatToken(creatorShare, payment.decimals)} ${payment.label}`}
          action="Withdraw"
          disabled={!sdk || busy}
          onClick={() => run([{ label: "Withdraw", send: () => sdk!.withdrawProceeds(auction.id) }, ...unwrapStep(creatorShare)])}
        />
      )}
      {data.claimablePayment > 0n && (
        <PayoutRow
          title="Pool fees ready to claim"
          amount={`${formatToken(data.claimablePayment, payment.decimals)} ${payment.label}`}
          action="Claim"
          disabled={!sdk || busy}
          onClick={() => run([{ label: `Claim ${payment.label}`, send: () => sdk!.claim(payment.address) }, ...unwrapStep(data.claimablePayment)])}
        />
      )}
      {data.claimableToken > 0n && (
        <PayoutRow
          title="Pool fees in the coin"
          amount={`${formatToken(data.claimableToken, 18)} ${symbol}`}
          action="Claim"
          disabled={!sdk || busy}
          onClick={() => run([{ label: `Claim ${symbol}`, send: () => sdk!.claim(auction.token) }])}
        />
      )}
      {eth && (canWithdraw || data.claimablePayment > 0n) && (
        <label className="flex items-center gap-2 text-[13px] font-semibold text-muted">
          <input type="checkbox" checked={unwrap} onChange={(e) => setUnwrap(e.target.checked)} className="h-4 w-4 accent-blue" />
          Unwrap to plain ETH (one more wallet prompt)
        </label>
      )}
      <TxStatusView status={status} doneText="Sent to your wallet." />
    </section>
  );
}

function PayoutRow(props: { title: string; amount: string; action: string; disabled: boolean; onClick: () => void }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-[18px] bg-up-tint p-3.5">
      <div>
        <p className="text-[13px] font-semibold text-up-ink">{props.title}</p>
        <p className="font-display text-xl font-extrabold tracking-[-0.02em] text-up-ink">{props.amount}</p>
      </div>
      <button onClick={props.onClick} disabled={props.disabled} className="btn btn-blue h-11 px-4 [--edge:4px]">
        {props.action}
      </button>
    </div>
  );
}

/** Pool fees build up in the position until someone collects them. Anyone can. */
export function CollectFees({ auction }: { auction: AuctionData }) {
  const { data: walletClient } = useWalletClient();
  const { status, run, busy } = useTx();
  return (
    <section className="card flex flex-col gap-3 p-5">
      <h2 className="text-base font-extrabold">Pool fees</h2>
      <p className="text-sm leading-relaxed text-muted">
        Every Uniswap trade pays a 1% fee into the locked position. Collecting moves it out: 80% to the creator to claim, 20% to
        AuctionFlow. Anyone can collect.
      </p>
      <button
        onClick={() => run([{ label: "Collect fees", send: () => writeSdk(walletClient!).collectFees(auction.id) }])}
        disabled={!walletClient || busy}
        className="btn btn-tint h-12 [--edge:4px]"
      >
        {busy ? "Collecting…" : "Collect pool fees"}
      </button>
      <TxStatusView status={status} doneText="Collected." />
      <a href={`${explorerUrl}/address/${auction.token}`} target="_blank" rel="noreferrer" className="text-[13px] font-bold text-blue">
        Token on Basescan ↗
      </a>
    </section>
  );
}
