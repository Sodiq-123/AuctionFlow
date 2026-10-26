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
      address: "0x24a702f10f17a522b9b5511ec2970ee029195ee4",
      startBlock: 50485840,
    },
  },
});
