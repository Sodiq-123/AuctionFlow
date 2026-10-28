"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchAuctions, fetchRecentTrades, fetchRecentVolume } from "./indexer";

/** Every launch, newest first, shared by the feed, the ticker and the portfolio. */
export function useAuctions() {
  return useQuery({ queryKey: ["auctions"], queryFn: fetchAuctions, refetchInterval: 10_000 });
}

export function useRecentTrades() {
  return useQuery({ queryKey: ["recent-trades"], queryFn: () => fetchRecentTrades(20), refetchInterval: 8_000 });
}

/** 24-hour volume per auction, for "Trending". */
export function useRecentVolume() {
  return useQuery({ queryKey: ["volume-24h"], queryFn: () => fetchRecentVolume(24), refetchInterval: 30_000 });
}
