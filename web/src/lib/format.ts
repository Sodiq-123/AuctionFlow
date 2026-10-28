import { formatUnits } from "viem";

/** Up to `digits` significant figures, without exponent notation. */
export function formatAmount(value: number, digits = 4): string {
  if (value === 0) return "0";
  if (Math.abs(value) >= 1e9) return (value / 1e9).toFixed(2) + "B";
  if (Math.abs(value) >= 1e6) return (value / 1e6).toFixed(1) + "M";
  if (Math.abs(value) >= 1e3) return (value / 1e3).toFixed(1) + "K";
  if (Math.abs(value) >= 1) return value.toFixed(2);
  return value.toLocaleString("en-US", { maximumSignificantDigits: digits, maximumFractionDigits: 20 });
}

/** A token or payment amount in base units, for display. */
export function formatToken(amount: bigint | string, decimals: number, digits = 4): string {
  return formatAmount(Number(formatUnits(BigInt(amount), decimals)), digits);
}

/** A payment amount with its unit: "0.0166 ETH", "16.60 USDC". */
export function formatPayment(amount: bigint | string, decimals: number, label: string): string {
  return `${formatToken(amount, decimals)} ${label}`;
}

/** A dollar figure: "$38.92", "$1.2K", "<$0.01". */
export function formatUsd(value: number): string {
  if (value > 0 && value < 0.01) return "<$0.01";
  if (value >= 1e3) return "$" + formatAmount(value);
  return "$" + value.toFixed(2);
}

/** A curve price (payment units per whole token, × 1e18) in payment-token terms. */
export function priceToNumber(price: bigint | string, paymentDecimals: number): number {
  return Number(formatUnits(BigInt(price), paymentDecimals + 18));
}

/** Fully diluted market cap: the price times the whole supply, in payment units. */
export function marketCap(price: bigint | string, maxSupply: bigint | string, paymentDecimals: number): number {
  return priceToNumber(price, paymentDecimals) * Number(formatUnits(BigInt(maxSupply), 18));
}

export function shortAddress(address: string): string {
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
}

export function timeAgo(seconds: bigint | string | number): string {
  const diff = Math.max(0, Date.now() / 1000 - Number(seconds));
  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} h ago`;
  return `${Math.floor(diff / 86400)} d ago`;
}

/** Progress toward graduation, 0–100. */
export function progressPercent(raised: bigint | string, maxRaise: bigint | string): number {
  const max = BigInt(maxRaise);
  if (max === 0n) return 0;
  return Math.min(100, Number((BigInt(raised) * 10_000n) / max) / 100);
}

/** A share as a short percentage: "100%", "5.6%", "0.42%". */
export function formatPercent(value: number): string {
  if (value >= 10) return `${Math.round(value)}%`;
  if (value >= 1) return `${value.toFixed(1).replace(/\.0$/, "")}%`;
  if (value === 0) return "0%";
  return `${value.toPrecision(2)}%`;
}

/** A whole-percent label that never claims 100% before it's reached. */
export function percentLabel(percent: number): string {
  if (percent >= 100) return "100%";
  if (percent > 0 && percent < 1) return "<1%";
  return `${Math.min(99, Math.floor(percent))}%`;
}
