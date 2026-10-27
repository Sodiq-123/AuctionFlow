import { createConfig, factory } from "ponder";
import { getAbiItem } from "viem";

import { TokenAuctionAbi } from "./abis/TokenAuction";
import { AuctionTokenAbi, UniswapV3PoolAbi } from "./abis/children";

/**
 * Multi-chain config — indexes Base Sepolia and Base Mainnet simultaneously.
 * Run with: pnpm dev --config ponder.config.multichain.ts
 *
 * Requires additional env vars:
 *   PONDER_RPC_URL_8453=https://mainnet.base.org
 *   TOKEN_AUCTION_BASE_ADDRESS=0x...   (fill after mainnet deployment)
 *   TOKEN_AUCTION_BASE_START_BLOCK=... (fill after mainnet deployment)
 */
const SEPOLIA_AUCTION = "0x990a04ffe0d49356321271629889fa0413ad1bdc";
const SEPOLIA_START_BLOCK = 51087209;
const BASE_AUCTION = (process.env.TOKEN_AUCTION_BASE_ADDRESS ??
  "0x0000000000000000000000000000000000000000") as `0x${string}`;
const BASE_START_BLOCK = Number(process.env.TOKEN_AUCTION_BASE_START_BLOCK ?? 0);

const created = getAbiItem({ abi: TokenAuctionAbi.abi, name: "AuctionCreated" });
const migrated = getAbiItem({ abi: TokenAuctionAbi.abi, name: "AuctionMigrated" });

export default createConfig({
  chains: {
    baseSepolia: {
      id: 84532,
      rpc: (process.env.PONDER_RPC_URL_84532 || "https://sepolia.base.org").split(","),
    },
    base: {
      id: 8453,
      rpc: (process.env.PONDER_RPC_URL_8453 || "https://mainnet.base.org").split(","),
    },
  },
  contracts: {
    TokenAuction: {
      abi: TokenAuctionAbi.abi,
      chain: {
        baseSepolia: { address: SEPOLIA_AUCTION, startBlock: SEPOLIA_START_BLOCK },
        base: { address: BASE_AUCTION, startBlock: BASE_START_BLOCK },
      },
    },
    // Every token a launch creates, found from AuctionCreated.
    AuctionToken: {
      abi: AuctionTokenAbi,
      chain: {
        baseSepolia: {
          address: factory({ address: SEPOLIA_AUCTION, event: created, parameter: "token" }),
          startBlock: SEPOLIA_START_BLOCK,
        },
        base: {
          address: factory({ address: BASE_AUCTION, event: created, parameter: "token" }),
          startBlock: BASE_START_BLOCK,
        },
      },
    },
    // Every Uniswap pool a migration opens, found from AuctionMigrated.
    UniswapPool: {
      abi: UniswapV3PoolAbi,
      chain: {
        baseSepolia: {
          address: factory({ address: SEPOLIA_AUCTION, event: migrated, parameter: "pool" }),
          startBlock: SEPOLIA_START_BLOCK,
        },
        base: {
          address: factory({ address: BASE_AUCTION, event: migrated, parameter: "pool" }),
          startBlock: BASE_START_BLOCK,
        },
      },
    },
  },
});
