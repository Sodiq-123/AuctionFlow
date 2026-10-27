"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { BaseError, type Hash, type TransactionReceipt } from "viem";
import { usePublicClient } from "wagmi";

export type TxStatus = { state: "idle" } | { state: "busy"; label: string } | { state: "error"; message: string };

/** A short, human message for a failed wallet or contract call. */
export function errorMessage(error: unknown): string {
  if (error instanceof BaseError) {
    if (error.walk((e) => (e as { name?: string }).name === "UserRejectedRequestError")) return "Rejected in your wallet.";
    const reason = error.walk((e) => !!(e as { reason?: string }).reason) as { reason?: string } | null;
    if (reason?.reason) return reason.reason;
    return error.shortMessage;
  }
  return error instanceof Error ? error.message : "Something went wrong.";
}

/**
 * Runs transactions one after another, waits for each to confirm, then
 * refreshes every query so balances and prices update.
 */
export function useTx() {
  const publicClient = usePublicClient();
  const queryClient = useQueryClient();
  const [status, setStatus] = useState<TxStatus>({ state: "idle" });

  async function run(steps: { label: string; send: () => Promise<Hash> }[]): Promise<TransactionReceipt | null> {
    let receipt: TransactionReceipt | null = null;
    try {
      for (const step of steps) {
        setStatus({ state: "busy", label: step.label });
        const hash = await step.send();
        receipt = await publicClient!.waitForTransactionReceipt({ hash });
        if (receipt.status !== "success") throw new Error(`${step.label} failed on-chain.`);
      }
      setStatus({ state: "idle" });
      await queryClient.invalidateQueries();
      return receipt;
    } catch (error) {
      setStatus({ state: "error", message: errorMessage(error) });
      return null;
    }
  }

  return { status, run, busy: status.state === "busy" };
}
