import { AUCTION_ADDRESSES, USDC_ADDRESSES, type SupportedChainId } from "auctionflow-sdk";
import { base, baseSepolia } from "viem/chains";

export const chain = process.env.NEXT_PUBLIC_CHAIN_ID === "8453" ? base : baseSepolia;
export const chainId = chain.id as SupportedChainId;
export const rpcUrl = process.env.NEXT_PUBLIC_RPC_URL || chain.rpcUrls.default.http[0];
export const auctionAddress = AUCTION_ADDRESSES[chainId];
export const usdcAddress = USDC_ADDRESSES[chainId];
export const explorerUrl = chain.blockExplorers.default.url;

const gateway = process.env.NEXT_PUBLIC_IPFS_GATEWAY || "https://ipfs.io/ipfs/";

/** An http(s) URL for an ipfs:// URI; other URIs pass through. */
export function resolveUri(uri: string): string {
  return uri.startsWith("ipfs://") ? gateway + uri.slice("ipfs://".length) : uri;
}
