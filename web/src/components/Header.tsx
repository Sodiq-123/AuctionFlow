import Link from "next/link";
import { ConnectButton } from "./ConnectButton";
import { chain } from "@/lib/config";
import { baseSepolia } from "viem/chains";

export function Header() {
  return (
    <header className="border-b border-line">
      {chain.id === baseSepolia.id && (
        <div className="bg-panel-2 py-1.5 text-center text-xs text-muted">
          Testnet: tokens on Base Sepolia have no real value.
        </div>
      )}
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="text-lg font-bold tracking-tight">
          Auction<span className="text-accent">Flow</span>
        </Link>
        <nav className="flex items-center gap-3">
          <Link
            href="/launch"
            className="hidden rounded-lg border border-line px-4 py-2 text-sm font-medium hover:bg-panel sm:block"
          >
            Launch a token
          </Link>
          <ConnectButton />
        </nav>
      </div>
    </header>
  );
}
