"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { fetchAuctions } from "@/lib/indexer";
import { TokenCard } from "@/components/TokenCard";

export default function HomePage() {
  const { data: auctions, isLoading, error } = useQuery({
    queryKey: ["auctions"],
    queryFn: fetchAuctions,
    refetchInterval: 10_000,
  });

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-line bg-panel p-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Launch a token in one click</h1>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          It trades on a bonding curve from the first second. Once it raises enough, it graduates to a Uniswap pool
          whose liquidity is locked forever.
        </p>
        <Link
          href="/launch"
          className="mt-6 inline-block rounded-lg bg-accent px-6 py-3 font-semibold text-accent-ink hover:opacity-90"
        >
          Launch a token
        </Link>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold">Latest launches</h2>
        {isLoading && <p className="text-muted">Loading…</p>}
        {error && <p className="text-danger">Couldn&apos;t load launches: {(error as Error).message}</p>}
        {auctions?.length === 0 && <p className="text-muted">No launches yet. Be the first.</p>}
        <div className="grid gap-4 md:grid-cols-2">
          {auctions?.map((a) => <TokenCard key={a.id} auction={a} />)}
        </div>
      </section>
    </div>
  );
}
