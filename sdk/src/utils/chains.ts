import { Chain } from "viem";
import { base, baseSepolia } from "viem/chains";
import { SupportedChainId } from "../types";

export const CHAINS: Record<SupportedChainId, Chain> = {
  84532: baseSepolia,
  8453: base,
};

export function getChain(chainId: SupportedChainId): Chain {
  return CHAINS[chainId];
}
