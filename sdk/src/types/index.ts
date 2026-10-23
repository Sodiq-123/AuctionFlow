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
  /**
   * Share of the raise seeded into Uniswap at migration, in basis points
   * (2000..10000). Defaults to 5000 (50%).
   */
  liquidityBps?: bigint;
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
  liquidityBps: bigint;
}

export interface BuyQuote {
  /** Tokens the purchase would actually deliver: less than requested if it fills the auction. */
  amount: bigint;
  cost: bigint;
  fee: bigint;
  totalCost: bigint;
  spotPriceAfter: bigint;
  /** True if this purchase reaches the cap and closes the auction. */
  fillsAuction: boolean;
}

export interface TransactionResult {
  hash: Hash;
}

export type SupportedChainId = 8453 | 84532; // Base, Base Sepolia
