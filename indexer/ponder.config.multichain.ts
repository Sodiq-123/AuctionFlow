import { createConfig } from "ponder";

import { TokenAuctionAbi } from "./abis/TokenAuction";

/**
 * Multi-chain config — indexes Base Sepolia and Base Mainnet simultaneously.
 * Run with: pnpm dev --config ponder.config.multichain.ts
 *
 * Requires additional env vars:
 *   PONDER_RPC_URL_8453=https://mainnet.base.org
 *   TOKEN_AUCTION_BASE_ADDRESS=0x...   (fill after mainnet deployment)
 *   TOKEN_AUCTION_BASE_START_BLOCK=... (fill after mainnet deployment)
 */
export default createConfig({
  chains: {
    baseSepolia: {
      id: 84532,
      rpc: process.env.PONDER_RPC_URL_84532 || "https://sepolia.base.org",
    },
    base: {
      id: 8453,
      rpc: process.env.PONDER_RPC_URL_8453 || "https://mainnet.base.org",
    },
  },
  contracts: {
    TokenAuction: {
      abi: TokenAuctionAbi.abi,
      chain: {
        baseSepolia: {
          address: "0xc6db1c900faeb4079281ecd6ec538c027cd18c28",
          startBlock: 50414898,
        },
        base: {
          address: (process.env.TOKEN_AUCTION_BASE_ADDRESS ?? "0x0000000000000000000000000000000000000000") as `0x${string}`,
          startBlock: Number(process.env.TOKEN_AUCTION_BASE_START_BLOCK ?? 0),
        },
      },
    },
  },
});
