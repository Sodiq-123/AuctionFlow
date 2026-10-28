"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState, type FormEvent } from "react";
import { chain, isTestnet } from "@/lib/config";
import { Ticker } from "./Ticker";
import { WalletButton } from "./Wallet";
import { LogoMark, Wordmark } from "./ui";

const NAV = [
  { href: "/", label: "Explore" },
  { href: "/create", label: "Create" },
  { href: "/portfolio", label: "Portfolio" },
];

function SearchBox({ className = "" }: { className?: string }) {
  const router = useRouter();
  const params = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? "");
  useEffect(() => setQuery(params.get("q") ?? ""), [params]);

  function submit(event: FormEvent) {
    event.preventDefault();
    const q = query.trim();
    router.push(q ? `/?q=${encodeURIComponent(q)}` : "/");
  }

  return (
    <form onSubmit={submit} role="search" className={className}>
      <label className="flex h-11 items-center gap-2 rounded-[14px] bg-white px-3.5 text-muted shadow-[inset_0_0_0_2px_var(--color-line)] focus-within:shadow-[inset_0_0_0_2px_var(--color-blue)]">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-4-4" />
        </svg>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search coins or paste an address"
          aria-label="Search coins"
          className="min-w-0 flex-1 bg-transparent text-ink outline-none placeholder:text-faint"
        />
      </label>
    </form>
  );
}

export function NetworkPill() {
  return (
    <span className="hidden h-11 items-center gap-2 rounded-[14px] bg-white px-3.5 text-sm font-bold shadow-[inset_0_0_0_2px_var(--color-line)] lg:inline-flex">
      <span className="inline-block h-4 w-4 rounded-[4px] bg-blue" />
      {chain.name}
    </span>
  );
}

export function Header() {
  const pathname = usePathname();
  return (
    <>
      <Ticker />
      {isTestnet && (
        <div className="bg-warn-tint px-4 py-2 text-center text-[13px] font-semibold text-warn">
          Test network: coins here have no real value.{" "}
          <Link href="/how-it-works" className="font-extrabold underline">
            How it works
          </Link>
        </div>
      )}
      <header className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2.5" aria-label="AuctionFlow home">
            <LogoMark />
            <Wordmark className="hidden text-[26px] sm:inline" />
          </Link>
          <nav className="hidden gap-6 font-bold md:flex" aria-label="Main">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={pathname === item.href ? "text-ink" : "text-muted hover:text-ink"}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2.5">
          <Suspense>
            <SearchBox className="hidden w-[300px] md:block" />
          </Suspense>
          <NetworkPill />
          <WalletButton />
        </div>
      </header>
      <Suspense>
        <SearchBox className="px-4 pb-3 md:hidden" />
      </Suspense>
    </>
  );
}

/** The phone's floating bottom bar: explore, create, portfolio. */
export function MobileNav() {
  const pathname = usePathname();
  const tab = (href: string, label: string, icon: React.ReactNode) => (
    <Link
      href={href}
      aria-current={pathname === href ? "page" : undefined}
      className={`flex flex-1 flex-col items-center gap-0.5 text-[11px] font-bold ${pathname === href ? "text-ink" : "text-faint"}`}
    >
      {icon}
      {label}
    </Link>
  );
  return (
    <nav aria-label="Main" className="fixed inset-x-4 bottom-4 z-40 flex items-center rounded-[24px] bg-white px-4 py-2.5 shadow-[0_6px_0_#E1E6F0,0_12px_32px_rgba(10,11,13,.12)] md:hidden">
      {tab(
        "/",
        "Explore",
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
          <path d="M4 11l8-7 8 7v9H4z" />
        </svg>
      )}
      <Link href="/create" aria-label="Create a coin" className="btn btn-blue -mt-1 h-12 w-14 rounded-2xl text-2xl [--edge:4px]">
        +
      </Link>
      {tab(
        "/portfolio",
        "You",
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
          <circle cx="12" cy="9" r="4" />
          <path d="M5 20c1-4 4-6 7-6s6 2 7 6" />
        </svg>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto mt-10 flex max-w-[1200px] flex-wrap items-center justify-between gap-4 border-t border-line px-4 pt-6 pb-28 text-sm text-muted sm:px-6 md:pb-10">
      <div className="flex items-center gap-2">
        <LogoMark size={24} />
        <Wordmark className="text-lg text-ink" />
      </div>
      <nav className="flex flex-wrap gap-5 font-semibold" aria-label="Footer">
        <Link href="/how-it-works" className="hover:text-ink">
          How it works
        </Link>
        <a href="https://github.com/Sodiq-123/AuctionFlow" target="_blank" rel="noreferrer" className="hover:text-ink">
          Code and security notes
        </a>
        <Link href="/terms" className="hover:text-ink">
          Terms
        </Link>
      </nav>
    </footer>
  );
}
