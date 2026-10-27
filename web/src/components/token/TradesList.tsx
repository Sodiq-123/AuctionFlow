"use client";

import type { TradeRow } from "@/lib/indexer";
import { explorerUrl } from "@/lib/config";
import { formatToken, shortAddress, timeAgo } from "@/lib/format";

export function TradesList({
  trades,
  symbol,
  paymentDecimals,
  paymentSymbol,
}: {
  trades: TradeRow[];
  symbol: string;
  paymentDecimals: number;
  paymentSymbol: string;
}) {
  if (trades.length === 0) return <p className="text-sm text-muted">No trades yet.</p>;
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="text-left text-xs text-muted">
          <tr>
            <th className="pb-2 font-normal">Trader</th>
            <th className="pb-2 font-normal">Side</th>
            <th className="pb-2 text-right font-normal">{symbol}</th>
            <th className="pb-2 text-right font-normal">{paymentSymbol}</th>
            <th className="pb-2 text-right font-normal">When</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((t) => (
            <tr key={t.id} className="border-t border-line">
              <td className="py-2 font-mono">{shortAddress(t.trader)}</td>
              <td className={`py-2 ${t.side === "BUY" ? "text-accent" : "text-danger"}`}>{t.side === "BUY" ? "Buy" : "Sell"}</td>
              <td className="py-2 text-right">{formatToken(t.amount, 18)}</td>
              <td className="py-2 text-right">{formatToken(t.value, paymentDecimals)}</td>
              <td className="py-2 text-right">
                <a href={`${explorerUrl}/tx/${t.transactionHash}`} target="_blank" rel="noreferrer" className="text-muted hover:text-white">
                  {timeAgo(t.timestamp)}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
