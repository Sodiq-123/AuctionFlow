import { formatUnits } from "viem";

/** Up to `digits` significant figures, without exponent notation. */
export function formatAmount(value: number, digits = 4): string {
  if (value === 0) return "0";
  if (Math.abs(value) >= 1e9) return (value / 1e9).toFixed(2) + "B";
  if (Math.abs(value) >= 1e6) return (value / 1e6).toFixed(2) + "M";
  if (Math.abs(value) >= 1e3) return (value / 1e3).toFixed(2) + "K";
  if (Math.abs(value) >= 1) return value.toFixed(2);
  return value.toLocaleString("en-US", { maximumSignificantDigits: digits, maximumFractionDigits: 20 });
}

/** A token or payment amount in base units, for display. */
export function formatToken(amount: bigint | string, decimals: number, digits = 4): string {
  return formatAmount(Number(formatUnits(BigInt(amount), decimals)), digits);
}

/** A curve price (payment units per whole token, × 1e18) in payment-token terms. */
export function priceToNumber(price: bigint | string, paymentDecimals: number): number {
  return Number(formatUnits(BigInt(price), paymentDecimals + 18));
}

export function shortAddress(address: string): string {
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
}

export function timeAgo(seconds: bigint | string | number): string {
  const diff = Math.max(0, Date.now() / 1000 - Number(seconds));
  if (diff < 60) return `${Math.floor(diff)}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

/** Progress toward graduation, 0–100. */
export function progressPercent(raised: bigint | string, maxRaise: bigint | string): number {
  const max = BigInt(maxRaise);
  if (max === 0n) return 0;
  return Number((BigInt(raised) * 10_000n) / max) / 100;
}
