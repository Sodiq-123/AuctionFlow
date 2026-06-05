import { Address, Hash } from "viem";

export enum AuctionState {
  PENDING = 0,
  ACTIVE = 1,
  COMPLETED = 2,
  MIGRATED = 3,
}

export interface AuctionConfig {
  name: string;
  symbol: string;
  maxSupply: bigint;
  paymentToken: Address;
  basePrice: bigint;
  slope: bigint;
  maxRaise: bigint;
  startTime: bigint;
  endTime: bigint;
}

export interface AuctionData {
  id: bigint;
  token: Address;
  paymentToken: Address;
  creator: Address;
  basePrice: bigint;
  slope: bigint;
  maxRaise: bigint;
  startTime: bigint;
  endTime: bigint;
  state: AuctionState;
  totalRaised: bigint;
  totalSold: bigint;
  protocolFeeBps: bigint;
}

export interface BuyQuote {
  cost: bigint;
  fee: bigint;
  totalCost: bigint;
  spotPriceAfter: bigint;
}

export interface TransactionResult {
  hash: Hash;
}

export type SupportedChainId = 8453 | 84532; // Base, Base Sepolia
