import { Address } from "viem";
import { SupportedChainId } from "../types";

export const AUCTION_ADDRESSES: Record<SupportedChainId, Address> = {
  84532: "0xadc3e02e962eed3856d7bee0315f84d187be1fea",
  8453: "0x0000000000000000000000000000000000000000", // not yet deployed
};

export const USDC_ADDRESSES: Record<SupportedChainId, Address> = {
  84532: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
  8453: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
};
