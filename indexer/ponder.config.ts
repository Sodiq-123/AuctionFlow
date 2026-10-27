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
      address: "0x990a04ffe0d49356321271629889fa0413ad1bdc",
      startBlock: 51087209,
    },
  },
});
