"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { BaseError, type Hash, type TransactionReceipt } from "viem";
import { usePublicClient } from "wagmi";

export type TxStep = { label: string; send: () => Promise<Hash> };

export type TxStatus =
  | { state: "idle" }
  /** Waiting for the wallet to sign step `index` of `total`. */
  | { state: "signing"; label: string; index: number; total: number }
  /** Signed and sent; waiting for Base to include it. */
  | { state: "confirming"; label: string; index: number; total: number; hash: Hash }
  | { state: "done"; hash: Hash }
  | { state: "rejected" }
  | { state: "error"; message: string; priceMoved: boolean };

/** A short, human message for a failed wallet or contract call. */
export function errorMessage(error: unknown): string {
  if (error instanceof BaseError) {
    const reason = error.walk((e) => !!(e as { reason?: string }).reason) as { reason?: string } | null;
    if (reason?.reason) return reason.reason;
    return error.shortMessage;
  }
  return error instanceof Error ? error.message : "Something went wrong.";
}

function isRejection(error: unknown): boolean {
  return (
    error instanceof BaseError &&
    !!error.walk((e) => {
      const err = e as { name?: string; code?: number };
      return err.name === "UserRejectedRequestError" || err.code === 4001;
    })
  );
}

/** The contract's and Uniswap's reverts when the price moved past the limit. */
function isPriceMove(message: string): boolean {
  return /slippage|too little received|price slippage/i.test(message);
}

/**
 * Runs transactions one after another, waits for each to confirm, then
 * refreshes every query so balances and prices update.
 */
export function useTx() {
  const publicClient = usePublicClient();
  const queryClient = useQueryClient();
  const [status, setStatus] = useState<TxStatus>({ state: "idle" });

  async function run(steps: TxStep[]): Promise<TransactionReceipt | null> {
    let receipt: TransactionReceipt | null = null;
    try {
      for (const [index, step] of steps.entries()) {
        setStatus({ state: "signing", label: step.label, index, total: steps.length });
        const hash = await step.send();
        setStatus({ state: "confirming", label: step.label, index, total: steps.length, hash });
        receipt = await publicClient!.waitForTransactionReceipt({ hash });
        if (receipt.status !== "success") throw new Error(`${step.label} failed on-chain.`);
      }
      setStatus({ state: "done", hash: receipt!.transactionHash });
      await queryClient.invalidateQueries();
      for (const delay of [2_500, 6_000]) setTimeout(() => queryClient.invalidateQueries(), delay);
      return receipt;
    } catch (error) {
      if (isRejection(error)) setStatus({ state: "rejected" });
      else {
        const message = errorMessage(error);
        setStatus({ state: "error", message, priceMoved: isPriceMove(message) });
      }
      return null;
    }
  }

  const busy = status.state === "signing" || status.state === "confirming";
  return { status, run, busy, reset: () => setStatus({ state: "idle" }) };
}
