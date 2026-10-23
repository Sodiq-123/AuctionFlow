import { Address } from "viem";
import { SupportedChainId } from "../types";

export const AUCTION_ADDRESSES: Record<SupportedChainId, Address> = {
  84532: "0x722f4521b96aca1df7c65a1dbe3b1713803ccea9",
  8453: "0x0000000000000000000000000000000000000000", // not yet deployed
};

export const USDC_ADDRESSES: Record<SupportedChainId, Address> = {
  84532: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
  8453: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
};
