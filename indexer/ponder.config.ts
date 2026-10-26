import { createConfig } from "ponder";

import { TokenAuctionAbi } from "./abis/TokenAuction";

export default createConfig({
  chains: {
    baseSepolia: {
      id: 84532,
      rpc: process.env.PONDER_RPC_URL_84532 || "https://sepolia.base.org",
    },
  },
  contracts: {
    TokenAuction: {
      chain: "baseSepolia",
      abi: TokenAuctionAbi.abi,
      address: "0xe57fe62e31666a9b749e89086a8a5487a530153b",
      startBlock: 50588273,
    },
  },
});
