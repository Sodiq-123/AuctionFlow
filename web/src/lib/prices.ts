"use client";

import { useQuery } from "@tanstack/react-query";
import { parseAbi } from "viem";
import { usePublicClient } from "wagmi";
import { ethUsdFeed, isWeth } from "./config";

const feedAbi = parseAbi([
  "function latestRoundData() view returns (uint80, int256 answer, uint256, uint256 updatedAt, uint80)",
  "function decimals() view returns (uint8)",
]);

/** Dollars per ETH from Chainlink, or undefined while loading or if the feed is stale. */
export function useEthUsd(): number | undefined {
  const client = usePublicClient();
  const { data } = useQuery({
    queryKey: ["eth-usd"],
    enabled: !!client,
    staleTime: 60_000,
    refetchInterval: 60_000,
    queryFn: async () => {
      const [[, answer, , updatedAt], decimals] = await Promise.all([
        client!.readContract({ address: ethUsdFeed, abi: feedAbi, functionName: "latestRoundData" }),
        client!.readContract({ address: ethUsdFeed, abi: feedAbi, functionName: "decimals" }),
      ]);
      // The feed updates at least daily; an older answer isn't worth showing.
      if (Date.now() / 1000 - Number(updatedAt) > 2 * 86_400) return null;
      return Number(answer) / 10 ** decimals;
    },
  });
  return data ?? undefined;
}

/** Dollars for an amount of a payment token (already in whole units), if known. */
export function toUsd(amount: number, paymentToken: string, ethUsd: number | undefined): number | undefined {
  if (isWeth(paymentToken)) return ethUsd === undefined ? undefined : amount * ethUsd;
  return amount; // USDC
}
