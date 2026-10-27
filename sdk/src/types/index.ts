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
  /** Graduation threshold: once this much is raised, trading moves to Uniswap. */
  maxRaise: bigint;
  /** Off-chain metadata for the token, such as its image (e.g. an IPFS URI). */
  metadataURI?: string;
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
  state: AuctionState;
  totalRaised: bigint;
  totalSold: bigint;
  protocolFeeBps: bigint;
  liquidityBps: bigint;
  /** Protocol's share of the Uniswap pool's trading fees, in basis points. */
  lpFeeShareBps: bigint;
}

export interface SellQuote {
  /** Curve value of the tokens being sold, before the protocol fee. */
  proceeds: bigint;
  fee: bigint;
  /** What the seller receives: proceeds minus fee. */
  netProceeds: bigint;
  spotPriceAfter: bigint;
}

/** The protocol's standard launch for one payment token, as `launch` uses it. */
export interface LaunchPreset {
  paymentToken: Address;
  maxSupply: bigint;
  basePrice: bigint;
  slope: bigint;
  /** Graduation threshold, in payment-token units. */
  maxRaise: bigint;
  liquidityBps: bigint;
}

export interface MigrationInfo {
  /** The Uniswap v3 pool, or null if the auction unlocked without one. */
  pool: Address | null;
  /** The Uniswap position NFT, held by the auction contract forever. */
  positionId: bigint | null;
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
