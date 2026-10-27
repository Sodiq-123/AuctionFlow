import { AuctionFlowSDK } from "auctionflow-sdk";
import type { WalletClient } from "viem";
import { auctionAddress, chainId, rpcUrl } from "./config";

/** Read-only client, shared by every page. */
export const readSdk = new AuctionFlowSDK({ chainId, rpcUrl, auctionAddress });

/** A client that can send transactions from the connected wallet. */
export function writeSdk(walletClient: WalletClient): AuctionFlowSDK {
  return new AuctionFlowSDK({ chainId, rpcUrl, auctionAddress, walletClient });
}
