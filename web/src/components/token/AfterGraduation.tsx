"use client";

import { useQuery } from "@tanstack/react-query";
import type { Address } from "viem";
import { useAccount, useWalletClient } from "wagmi";
import { AuctionState, type AuctionData } from "auctionflow-sdk";
import { chain, explorerUrl } from "@/lib/config";
import { readSdk, writeSdk } from "@/lib/sdk";
import { useTx } from "@/lib/tx";
import { formatToken } from "@/lib/format";
import { base } from "viem/chains";

type Payment = { address: Address; decimals: number; symbol: string };

/** Migration and the Uniswap market, once the curve has closed. */
export function GraduationPanel({ auction }: { auction: AuctionData }) {
  const { data: walletClient } = useWalletClient();
  const { status, run, busy } = useTx();
  const { data: migration } = useQuery({
    queryKey: ["migration", auction.id.toString()],
    queryFn: () => readSdk.getMigration(auction.id),
    enabled: auction.state === AuctionState.MIGRATED,
  });

  if (auction.state === AuctionState.COMPLETED) {
    return (
      <Panel title="Graduated">
        <p className="text-sm text-muted">
          The curve has closed. Anyone can now open the Uniswap pool at the final price, which also unlocks the
          token for trading.
        </p>
        <ActionButton
          disabled={!walletClient || busy}
          onClick={() => run([{ label: "Move to Uniswap", send: () => writeSdk(walletClient!).migrate(auction.id) }])}
        >
          {busy && status.state === "busy" ? `${status.label}…` : "Move to Uniswap"}
        </ActionButton>
        {status.state === "error" && <p className="text-sm text-danger">{status.message}</p>}
      </Panel>
    );
  }

  const uniswapChain = chain.id === base.id ? "base" : "base_sepolia";
  return (
    <Panel title="Trading on Uniswap">
      <p className="text-sm text-muted">
        The token trades in a Uniswap v3 pool whose liquidity is locked in the auction contract forever.
      </p>
      <div className="flex flex-wrap gap-2">
        <a
          href={`https://app.uniswap.org/swap?chain=${uniswapChain}&outputCurrency=${auction.token}`}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-ink"
        >
          Trade on Uniswap
        </a>
        {migration?.pool && (
          <a
            href={`${explorerUrl}/address/${migration.pool}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-line px-4 py-2 text-sm"
          >
            View pool
          </a>
        )}
      </div>
      {migration?.positionId && (
        <>
          <p className="text-sm text-muted">
            The pool&apos;s trading fees go to the creator, less the protocol&apos;s share. Anyone can collect them.
          </p>
          <ActionButton
            disabled={!walletClient || busy}
            onClick={() => run([{ label: "Collect fees", send: () => writeSdk(walletClient!).collectFees(auction.id) }])}
          >
            {busy && status.state === "busy" ? `${status.label}…` : "Collect pool fees"}
          </ActionButton>
        </>
      )}
      {status.state === "error" && <p className="text-sm text-danger">{status.message}</p>}
    </Panel>
  );
}

/** What the connected account can withdraw: a creator's share of the raise, and credited payouts. */
export function PayoutsPanel({ auction, symbol, payment }: { auction: AuctionData; symbol: string; payment: Payment }) {
  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();
  const { status, run, busy } = useTx();
  const isCreator = !!address && address.toLowerCase() === auction.creator.toLowerCase();
  const graduated = auction.state === AuctionState.COMPLETED || auction.state === AuctionState.MIGRATED;

  const { data } = useQuery({
    queryKey: ["payouts", auction.id.toString(), address],
    enabled: !!address,
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
  return (
    <Panel title="Your payouts">
      {canWithdraw && (
        <PayoutRow
          label="Your share of the raise"
          amount={`${formatToken(creatorShare, payment.decimals)} ${payment.symbol}`}
          action="Withdraw"
          disabled={!sdk || busy}
          onClick={() => run([{ label: "Withdraw", send: () => sdk!.withdrawProceeds(auction.id) }])}
        />
      )}
      {data.claimablePayment > 0n && (
        <PayoutRow
          label="Pool fees and refunds"
          amount={`${formatToken(data.claimablePayment, payment.decimals)} ${payment.symbol}`}
          action="Claim"
          disabled={!sdk || busy}
          onClick={() => run([{ label: `Claim ${payment.symbol}`, send: () => sdk!.claim(payment.address) }])}
        />
      )}
      {data.claimableToken > 0n && (
        <PayoutRow
          label="Pool fees"
          amount={`${formatToken(data.claimableToken, 18)} ${symbol}`}
          action="Claim"
          disabled={!sdk || busy}
          onClick={() => run([{ label: `Claim ${symbol}`, send: () => sdk!.claim(auction.token) }])}
        />
      )}
      {status.state === "busy" && <p className="text-sm text-muted">{status.label}…</p>}
      {status.state === "error" && <p className="text-sm text-danger">{status.message}</p>}
    </Panel>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3 rounded-xl border border-line bg-panel p-4">
      <h3 className="font-semibold">{title}</h3>
      {children}
    </div>
  );
}

function ActionButton(props: { disabled: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className="w-full rounded-lg bg-accent py-2.5 font-semibold text-accent-ink disabled:opacity-50"
    >
      {props.children}
    </button>
  );
}

function PayoutRow(props: { label: string; amount: string; action: string; disabled: boolean; onClick: () => void }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg bg-panel-2 p-3">
      <div>
        <p className="text-xs text-muted">{props.label}</p>
        <p className="font-medium">{props.amount}</p>
      </div>
      <button
        onClick={props.onClick}
        disabled={props.disabled}
        className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-ink disabled:opacity-50"
      >
        {props.action}
      </button>
    </div>
  );
}
