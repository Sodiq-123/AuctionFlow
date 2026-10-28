import { AUCTION_ADDRESSES, USDC_ADDRESSES, WETH_ADDRESSES, type SupportedChainId } from "auctionflow-sdk";
import type { Address } from "viem";
import { base, baseSepolia } from "viem/chains";

export const chain = process.env.NEXT_PUBLIC_CHAIN_ID === "8453" ? base : baseSepolia;
export const chainId = chain.id as SupportedChainId;
export const isTestnet = chain.id === baseSepolia.id;
export const rpcUrl = process.env.NEXT_PUBLIC_RPC_URL || chain.rpcUrls.default.http[0];
export const auctionAddress = AUCTION_ADDRESSES[chainId];
export const usdcAddress = USDC_ADDRESSES[chainId];
export const wethAddress = WETH_ADDRESSES[chainId];
export const explorerUrl = chain.blockExplorers.default.url;

/**
 * The site's own address. In the browser, wherever the page is open; on the
 * server, SITE_URL if set (the coin pages read it from the request instead,
 * see lib/origin.ts).
 */
export function siteOrigin(): string {
  return typeof window !== "undefined" ? window.location.origin : process.env.SITE_URL || "http://localhost:3000";
}

/** Uniswap v3 periphery, for trading a token after it migrates. */
export const uniswap: { router: Address; quoter: Address; appChain: string } =
  chain.id === base.id
    ? { router: "0x2626664c2603336E57B271c5C0b26F421741e481", quoter: "0x3d4e44Eb1374240CE5F1B871ab261CD16335B76a", appChain: "base" }
    : { router: "0x94cC0AaC535CCDB3C01d6787D6413C739ae12bc4", quoter: "0xC5290058841028F1614F3A6F0F5816cAd0df5E27", appChain: "base_sepolia" };

/** Chainlink's ETH / USD feed, for showing ETH amounts in dollars. */
export const ethUsdFeed: Address =
  chain.id === base.id ? "0x71041dddad3595F9CEd3DcCFBe3D1F4b0a16Bb70" : "0x4aDC67696bA383F43DD60A9e78F2C97Fbbfc7cb1";

/** The Uniswap v3 pool fee migration uses: 1%. */
export const POOL_FEE = 10_000;

const gateway = process.env.NEXT_PUBLIC_IPFS_GATEWAY || "https://ipfs.io/ipfs/";

/** An http(s) URL for an ipfs:// URI; other URIs pass through. */
export function resolveUri(uri: string): string {
  return uri.startsWith("ipfs://") ? gateway + uri.slice("ipfs://".length) : uri;
}

/** Is `token` wrapped ETH, so its amounts are shown and traded as ETH? */
export function isWeth(token: string): boolean {
  return token.toLowerCase() === wethAddress.toLowerCase();
}

/** How a payment token is shown: ETH for WETH, which users never see. */
export function paymentLabel(token: string): string {
  return isWeth(token) ? "ETH" : token.toLowerCase() === usdcAddress.toLowerCase() ? "USDC" : "tokens";
}
