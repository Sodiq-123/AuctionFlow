import {
  createPublicClient,
  createWalletClient,
  http,
  PublicClient,
  WalletClient,
  Chain,
  Address,
  Hash,
} from "viem";
import { AuctionBuilder } from "./builders/auction-builder";
import { AuctionConfig, AuctionData, BuyQuote, SupportedChainId } from "./types";
import { AUCTION_ADDRESSES } from "./constants/addresses";
import { tokenAuctionAbi } from "./abis/token-auction";
import { calculateBuyQuote } from "./utils/bonding-curve";
import { CHAINS } from "./utils/chains";

export class AuctionFlowSDK {
  public readonly publicClient: PublicClient;
  public readonly walletClient?: WalletClient;
  public readonly auctionAddress: Address;
  public readonly chainId: SupportedChainId;
  private readonly chain: Chain;

  constructor(params: {
    chainId: SupportedChainId;
    rpcUrl: string;
    walletClient?: WalletClient;
  }) {
    this.chainId = params.chainId;
    this.chain = CHAINS[params.chainId];
    this.auctionAddress = AUCTION_ADDRESSES[params.chainId];

    this.publicClient = createPublicClient({
      chain: this.chain,
      transport: http(params.rpcUrl),
    });

    this.walletClient = params.walletClient;
  }

  // Builder
  buildAuction(): AuctionBuilder {
    return new AuctionBuilder();
  }

  async createAuction(config: AuctionConfig): Promise<Hash> {
    if (!this.walletClient) throw new Error("Wallet client required");

    const hash = await this.walletClient.writeContract({
      chain: this.chain,
      account: this.walletClient.account!,
      address: this.auctionAddress,
      abi: tokenAuctionAbi,
      functionName: "createAuction",
      args: [
        config.name,
        config.symbol,
        config.maxSupply,
        config.paymentToken,
        config.basePrice,
        config.slope,
        config.maxRaise,
        config.startTime,
        config.endTime,
      ],
    });

    return hash;
  }

  async buyTokens(auctionId: bigint, amount: bigint): Promise<Hash> {
    if (!this.walletClient) throw new Error("Wallet client required");

    const hash = await this.walletClient.writeContract({
      chain: this.chain,
      account: this.walletClient.account!,
      address: this.auctionAddress,
      abi: tokenAuctionAbi,
      functionName: "buyTokens",
      args: [auctionId, amount],
    });

    return hash;
  }

  // Read: Get auction data
  async getAuction(auctionId: bigint): Promise<AuctionData> {
    const result = await this.publicClient.readContract({
      address: this.auctionAddress,
      abi: tokenAuctionAbi,
      functionName: "auctions",
      args: [auctionId],
    });

    // Parse the tuple returned by the contract
    return this.parseAuctionResult(auctionId, result);
  }

  // Read: Get buy quote (off-chain calculation)
  async getQuote(auctionId: bigint, amount: bigint): Promise<BuyQuote> {
    const auction = await this.getAuction(auctionId);
    const quote = calculateBuyQuote(
      auction.totalSold,
      amount,
      auction.basePrice,
      auction.slope,
      auction.protocolFeeBps
    );

    return {
      cost: quote.cost,
      fee: quote.fee,
      totalCost: quote.total,
      spotPriceAfter: quote.spotPriceAfter,
    };
  }

  // Read: Get spot price
  async getSpotPrice(auctionId: bigint): Promise<bigint> {
    return this.publicClient.readContract({
      address: this.auctionAddress,
      abi: tokenAuctionAbi,
      functionName: "getSpotPrice",
      args: [auctionId],
    }) as Promise<bigint>;
  }

  private parseAuctionResult(id: bigint, raw: any): AuctionData {
    // Adapt based on actual struct layout from ABI
    return {
      id,
      token: raw.config.token,
      paymentToken: raw.config.paymentToken,
      creator: raw.config.creator,
      basePrice: raw.config.basePrice,
      slope: raw.config.slope,
      maxRaise: raw.config.maxRaise,
      startTime: raw.config.startTime,
      endTime: raw.config.endTime,
      state: raw.state,
      totalRaised: raw.totalRaised,
      totalSold: raw.totalSold,
      protocolFeeBps: raw.config.protocolFeeBps,
    };
  }
}
