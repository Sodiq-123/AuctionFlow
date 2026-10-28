"use client";

import { useEffect, useId, useState, type ReactNode } from "react";
import { isWeth, resolveUri } from "@/lib/config";
import { percentLabel } from "@/lib/format";

/** The Curve coin: a raised blue coin with the price curve on its face. */
export function LogoMark({ size = 38 }: { size?: number }) {
  const id = useId();
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" aria-hidden="true">
      <defs>
        <radialGradient id={`${id}f`} cx="34%" cy="28%" r="80%">
          <stop offset="0" stopColor="#A9C2FF" />
          <stop offset=".42" stopColor="#2E6BFF" />
          <stop offset="1" stopColor="#0039B3" />
        </radialGradient>
        <linearGradient id={`${id}e`} x1="0" x2="1">
          <stop offset="0" stopColor="#001F66" />
          <stop offset=".5" stopColor="#0A45C9" />
          <stop offset="1" stopColor="#001F66" />
        </linearGradient>
      </defs>
      <circle cx="80" cy="82" r="62" fill={`url(#${id}e)`} />
      <circle cx="80" cy="74" r="62" fill={`url(#${id}f)`} />
      <path d="M50 98 C66 98 72 88 80 74 S96 52 110 50" fill="none" stroke="#fff" strokeWidth="13" strokeLinecap="round" />
      <circle cx="110" cy="50" r="10" fill="#5BE3A6" />
    </svg>
  );
}

export function Wordmark({ className = "text-[26px]" }: { className?: string }) {
  return <span className={`font-display font-extrabold tracking-[-0.045em] ${className}`}>auctionflow</span>;
}

/** Coin colours for tokens without an image, picked from the symbol so each stays the same. */
const PLACEHOLDERS = [
  ["#FFD66B", "#FF8A5B"],
  ["#C4B5FF", "#7B5CFF"],
  ["#A9F0D1", "#2E9BFF"],
  ["#FFB3D1", "#FF5C8A"],
  ["#B8F5A1", "#3FBF86"],
];

/**
 * A token's image minted into a raised coin: blue rim on the curve, green
 * once the token trades on Uniswap.
 */
export function CoinFrame({
  image,
  symbol,
  size = 56,
  graduated = false,
}: {
  image?: string;
  symbol: string;
  size?: number;
  graduated?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const src = image && (image.startsWith("ipfs://") || image.startsWith("https://")) && !failed ? resolveUri(image) : null;
  const rim = graduated
    ? { bg: "linear-gradient(160deg, #D9FBEA, #3FBF86 45%, #0A7A4B)", edge: "#075C38" }
    : { bg: "linear-gradient(160deg, #E0E9FF, #6E9BFF 40%, #0039B3)", edge: "#00287F" };
  const pad = Math.max(3, Math.round(size * 0.08));
  const edge = Math.max(3, Math.round(size * 0.075));
  const [from, to] = PLACEHOLDERS[[...symbol].reduce((n, c) => n + c.charCodeAt(0), 0) % PLACEHOLDERS.length];

  return (
    <span
      className="relative inline-block shrink-0 rounded-full"
      style={{
        width: size,
        height: size,
        padding: pad,
        background: rim.bg,
        boxShadow: `0 ${edge}px 0 ${rim.edge}, 0 ${edge * 2}px ${edge * 3}px rgba(0,30,100,.22)`,
      }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element -- arbitrary IPFS hosts
        <img
          src={src}
          alt=""
          onError={() => setFailed(true)}
          className="block h-full w-full rounded-full bg-white object-cover"
          style={{ boxShadow: "inset 0 3px 8px rgba(0,30,100,.3)" }}
        />
      ) : (
        <span
          className="flex h-full w-full items-center justify-center rounded-full font-display font-extrabold text-white"
          style={{ background: `linear-gradient(135deg, ${from}, ${to})`, fontSize: size * 0.32 }}
        >
          {symbol.slice(0, 1).toUpperCase()}
        </span>
      )}
      <span
        className="pointer-events-none absolute rounded-full bg-white opacity-50"
        style={{ left: "18%", top: "12%", width: "32%", height: "11%", transform: "rotate(-30deg)" }}
      />
    </span>
  );
}

function EthGlyph({ size = 20 }: { size?: number }) {
  return (
    <span className="inline-flex items-center justify-center rounded-full bg-ink" style={{ width: size, height: size }}>
      <svg width={size * 0.45} height={size * 0.7} viewBox="0 0 10 16" aria-hidden="true">
        <path d="M5 0L0 8l5 3 5-3z" fill="#fff" />
        <path d="M5 12L0 9l5 7 5-7z" fill="#C9CED8" />
      </svg>
    </span>
  );
}

function UsdcGlyph({ size = 20 }: { size?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full bg-[#2775CA] font-extrabold text-white"
      style={{ width: size, height: size, fontSize: size * 0.55 }}
    >
      $
    </span>
  );
}

/** "ETH" or "USDC" with its round icon. */
export function CurrencyBadge({ token, size = 20, className = "" }: { token: string; size?: number; className?: string }) {
  const eth = isWeth(token);
  return (
    <span className={`inline-flex items-center gap-1.5 font-extrabold ${className}`}>
      {eth ? <EthGlyph size={size} /> : <UsdcGlyph size={size} />}
      {eth ? "ETH" : "USDC"}
    </span>
  );
}

export function Pill({ children, tone = "blue" }: { children: ReactNode; tone?: "blue" | "up" | "warn" | "unicorn" | "sell" | "ink" }) {
  const tones = {
    blue: "bg-blue-tint text-blue-edge",
    up: "bg-up-tint text-up-ink",
    warn: "bg-warn-tint text-warn",
    unicorn: "bg-unicorn-tint text-unicorn",
    sell: "bg-sell-tint text-sell",
    ink: "bg-ink text-white",
  };
  return <span className={`inline-flex h-7 items-center rounded-full px-2.5 text-[13px] font-extrabold ${tones[tone]}`}>{children}</span>;
}

/** Progress toward graduation: a glowing gradient, mint once complete. */
export function Progress({ percent, height = 12 }: { percent: number; height?: number }) {
  const done = percent >= 100;
  return (
    <div
      className="w-full rounded-full bg-blue-tint"
      style={{ height }}
      role="progressbar"
      aria-valuenow={Math.round(percent)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`${percentLabel(percent)} to Uniswap`}
    >
      <div
        className="h-full rounded-full transition-[width] duration-500"
        style={{
          width: `${Math.max(percent > 0 ? 2 : 0, Math.min(100, percent))}%`,
          background: done ? "linear-gradient(90deg, #3FBF86, #5BE3A6)" : "linear-gradient(90deg, #0052FF, #7B5CFF)",
          boxShadow: done ? "0 0 12px rgba(63,191,134,.5)" : "0 0 12px rgba(91,92,255,.5)",
        }}
      />
    </div>
  );
}

/**
 * A dialog: a bottom sheet on phones, a centred card on wider screens.
 * Closes on Escape or a click outside it.
 */
export function Sheet({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: ReactNode }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-[#0A0B0D]/55 sm:items-center sm:p-6"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="max-h-[92vh] w-full overflow-y-auto rounded-t-[28px] bg-white px-5 pt-3 pb-6 sm:max-w-[440px] sm:rounded-[28px] sm:pt-5"
      >
        <div className="mx-auto mb-3 h-[5px] w-10 rounded-full bg-[#D5DAE3] sm:hidden" />
        <div className="mb-3 flex items-center justify-between gap-3">
          <h2 className="font-display text-[22px] font-extrabold tracking-[-0.03em]">{title}</h2>
          <button onClick={onClose} aria-label="Close" className="flex h-10 w-10 items-center justify-center rounded-xl bg-ground text-muted hover:text-ink">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

/**
 * False on the server and during hydration, true after. For parts that read
 * shared query data inside a Suspense boundary: that data can arrive before
 * the boundary hydrates, and rendering it then wouldn't match the server.
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

export function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded-2xl bg-board ${className}`} />;
}

/** An empty or error state: a soft icon tile, a title, a line and actions. */
export function EmptyState({ icon, title, body, children }: { icon: ReactNode; title: string; body: ReactNode; children?: ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-3 px-4 py-14 text-center">
      <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[22px] bg-blue-tint text-blue">{icon}</div>
      <h2 className="font-display text-[26px] font-extrabold tracking-[-0.035em]">{title}</h2>
      <p className="max-w-md leading-relaxed text-muted">{body}</p>
      {children && <div className="mt-2 flex flex-wrap justify-center gap-3">{children}</div>}
    </div>
  );
}
