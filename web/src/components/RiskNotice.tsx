"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Sheet } from "./ui";

const KEY = "auctionflow:risk-accepted:v1";

const POINTS = [
  ["Anyone can launch a coin.", "We don't check who's behind it or what it's for."],
  ["Most coins lose value.", "Prices can drop to almost zero in minutes."],
  ["Trades can't be undone.", "They happen on Base, not on this site."],
  ["Not available everywhere.", "Don't use it where it isn't legal for you."],
];

/** Shown once per browser, before anything else. */
export function RiskNotice() {
  const [open, setOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem(KEY, new Date().toISOString());
    } catch {
      // Private browsing: ask again next visit.
    }
    setOpen(false);
  }

  return (
    <Sheet open={open} onClose={() => agreed && accept()} title="Before you start">
      <ul className="flex flex-col gap-3 text-sm leading-relaxed">
        {POINTS.map(([bold, rest]) => (
          <li key={bold} className="flex gap-2.5">
            <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-blue" />
            <span>
              <b>{bold}</b> {rest}
            </span>
          </li>
        ))}
      </ul>
      <label className="mt-4 flex items-start gap-2.5 text-sm leading-relaxed">
        <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-0.5 h-5 w-5 accent-blue" />
        <span>
          I understand, and I agree to the{" "}
          <Link href="/terms" className="font-bold text-blue" target="_blank">
            terms
          </Link>
          .
        </span>
      </label>
      <button onClick={accept} disabled={!agreed} className="btn btn-blue mt-4 h-14 w-full text-base">
        Continue
      </button>
    </Sheet>
  );
}
