"use client";

import { useState } from "react";
import { explorerUrl } from "@/lib/config";
import type { TxStatus } from "@/lib/tx";
import { Sheet } from "./ui";

/** Where a transaction is: in the wallet, on its way, done or failed. */
export function TxStatusView({ status, onRetry, doneText }: { status: TxStatus; onRetry?: () => void; doneText?: string }) {
  if (status.state === "idle") return null;

  if (status.state === "signing" || status.state === "confirming") {
    const step = status.total > 1 ? `Step ${status.index + 1} of ${status.total} · ` : "";
    return (
      <div className="flex items-center gap-3 rounded-[18px] bg-blue-tint p-3.5 text-sm" role="status" aria-live="polite">
        <span className="h-5 w-5 shrink-0 animate-spin rounded-full border-[3px] border-blue/25 border-t-blue" />
        <span className="flex-1">
          <b className="text-blue-edge">
            {step}
            {status.state === "signing" ? `${status.label}: confirm in your wallet` : `${status.label}: waiting for Base`}
          </b>
          {status.state === "confirming" && (
            <a href={`${explorerUrl}/tx/${status.hash}`} target="_blank" rel="noreferrer" className="block font-semibold text-muted underline">
              View on Basescan
            </a>
          )}
        </span>
      </div>
    );
  }

  if (status.state === "done") {
    return (
      <div className="rounded-[18px] bg-up-tint p-3.5 text-sm text-up-ink" role="status" aria-live="polite">
        <b>{doneText ?? "Done."}</b>{" "}
        <a href={`${explorerUrl}/tx/${status.hash}`} target="_blank" rel="noreferrer" className="font-semibold underline">
          View on Basescan
        </a>
      </div>
    );
  }

  if (status.state === "rejected") {
    return (
      <div className="rounded-[18px] bg-ground p-3.5 text-sm" role="status">
        <b>Cancelled in your wallet.</b> Nothing was sent.
      </div>
    );
  }

  return (
    <div className="rounded-[18px] bg-danger-tint p-3.5 text-sm text-danger" role="alert">
      <b>{status.priceMoved ? "The price moved before your trade landed." : "That didn't go through."}</b>{" "}
      {status.priceMoved ? "Nothing was spent apart from the network fee. Try again with a fresh price." : status.message}
      {onRetry && (
        <button onClick={onRetry} className="ml-1 font-extrabold underline">
          Try again
        </button>
      )}
    </div>
  );
}

const PRESETS = [50, 100, 300];

/** Price protection: how far the price may move before a trade cancels itself. */
export function SlippageSetting({ bps, onChange }: { bps: number; onChange: (bps: number) => void }) {
  const [open, setOpen] = useState(false);
  const [custom, setCustom] = useState("");
  return (
    <>
      <button onClick={() => setOpen(true)} className="font-extrabold text-blue">
        {bps / 100}% ›
      </button>
      <Sheet open={open} onClose={() => setOpen(false)} title="Price protection">
        <p className="text-sm leading-relaxed text-muted">
          Prices move with every trade. If the price moves more than this before your trade lands, it cancels itself and
          you only pay the network fee.
        </p>
        <div className="mt-4 grid grid-cols-4 gap-2">
          {PRESETS.map((p) => (
            <button
              key={p}
              onClick={() => {
                onChange(p);
                setCustom("");
              }}
              className={`btn h-12 [--edge:4px] ${bps === p && !custom ? "btn-tint shadow-[inset_0_0_0_2px_var(--color-blue)]" : "btn-white"}`}
            >
              {p / 100}%
            </button>
          ))}
          <label className="relative">
            <input
              inputMode="decimal"
              placeholder="Custom"
              value={custom}
              onChange={(e) => {
                setCustom(e.target.value);
                const value = Number(e.target.value);
                if (value > 0 && value <= 50) onChange(Math.round(value * 100));
              }}
              className="field h-12 text-center font-bold"
              aria-label="Custom price protection, percent"
            />
          </label>
        </div>
        {bps > 500 && <p className="mt-3 text-sm font-semibold text-warn">Above 5%, someone could trade just before you at your expense.</p>}
        <button onClick={() => setOpen(false)} className="btn btn-blue mt-4 h-13 w-full py-3.5">
          Save
        </button>
      </Sheet>
    </>
  );
}
