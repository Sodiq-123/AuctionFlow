import { createConfig, factory } from "ponder";
import { getAbiItem } from "viem";

import { TokenAuctionAbi } from "./abis/TokenAuction";
import { AuctionTokenAbi, UniswapV3PoolAbi } from "./abis/children";

const TOKEN_AUCTION = "0xad786651dcf1405bf636ce7dcdc9c8afbab420c2";
const START_BLOCK = 54923635;

export default createConfig({
  chains: {
    baseSepolia: {
      id: 84532,
      // One URL, or several separated by commas: Ponder spreads requests
      // across them and keeps going when one is rate-limited.
      rpc: (process.env.PONDER_RPC_URL_84532 || "https://sepolia.base.org").split(","),
    },
  },
  contracts: {
    TokenAuction: {
      chain: "baseSepolia",
      abi: TokenAuctionAbi.abi,
      address: TOKEN_AUCTION,
      startBlock: START_BLOCK,
    },
    // Every token a launch creates, found from AuctionCreated.
    AuctionToken: {
      chain: "baseSepolia",
      abi: AuctionTokenAbi,
      address: factory({
        address: TOKEN_AUCTION,
        event: getAbiItem({ abi: TokenAuctionAbi.abi, name: "AuctionCreated" }),
        // Launches only exist from the deployment block on.
        startBlock: START_BLOCK,
        parameter: "token",
      }),
      startBlock: START_BLOCK,
    },
    // Every Uniswap pool a migration opens, found from AuctionMigrated.
    UniswapPool: {
      chain: "baseSepolia",
      abi: UniswapV3PoolAbi,
      address: factory({
        address: TOKEN_AUCTION,
        event: getAbiItem({ abi: TokenAuctionAbi.abi, name: "AuctionMigrated" }),
        // Launches only exist from the deployment block on.
        startBlock: START_BLOCK,
        parameter: "pool",
      }),
      startBlock: START_BLOCK,
    },
  },
});
