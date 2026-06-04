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
      address: "0xadc3e02e962eed3856d7bee0315f84d187be1fea",
      startBlock: 42293225,
    },
  },
});
