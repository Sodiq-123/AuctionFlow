import { createConfig } from "ponder";

import { TokenAuctionAbi } from "./abis/TokenAuction";

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
      address: "0xe57fe62e31666a9b749e89086a8a5487a530153b",
      startBlock: 50588273,
    },
  },
});
