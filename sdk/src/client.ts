import {
  createPublicClient,
  http,
  PublicClient,
  WalletClient,
  Chain,
  Address,
  Hash,
  zeroAddress,
} from "viem";
import { AuctionBuilder } from "./builders/auction-builder";
import { AuctionConfig, AuctionData, BuyQuote, SupportedChainId } from "./types";
import { AUCTION_ADDRESSES } from "./constants/addresses";
import { DEFAULT_LIQUIDITY_BPS } from "./constants/protocol";
import { tokenAuctionAbi } from "./abis/token-auction";
import { applySlippage, DEFAULT_SLIPPAGE_BPS, fillPurchase, spotPrice } from "./utils/bonding-curve";
import { CHAINS } from "./utils/chains";

/** Shape of the nested tuple returned by the on-chain `auctions(id)` getter. */
interface RawAuction {
  config: {
    token: Address;
    paymentToken: Address;
    basePrice: bigint;
    slope: bigint;
    maxRaise: bigint;
    startTime: bigint;
    endTime: bigint;
    creator: Address;
    protocolFeeBps: bigint;
    liquidityBps: bigint;
  };
  state: number;
  totalRaised: bigint;
  totalSold: bigint;
}

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
    auctionAddress?: Address;
  }) {
    this.chainId = params.chainId;
    this.chain = CHAINS[params.chainId];
    this.auctionAddress = params.auctionAddress ?? AUCTION_ADDRESSES[params.chainId];

    if (params.auctionAddress === zeroAddress) {
      throw new Error(
        "auctionAddress must not be the zero address."
      );
    }

    if (this.auctionAddress === zeroAddress) {
      throw new Error(
        `AuctionFlow has no canonical deployment on chain ${params.chainId}. ` +
          `Chains with a built-in deployment: ${Object.entries(AUCTION_ADDRESSES)
            .filter(([, addr]) => addr !== zeroAddress)
            .map(([id]) => id)
            .join(", ")}. ` +
          `Pass \`auctionAddress\` to use your own deployment.`
      );
    }

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
        {
          name: config.name,
          symbol: config.symbol,
          maxSupply: config.maxSupply,
          paymentToken: config.paymentToken,
          basePrice: config.basePrice,
          slope: config.slope,
          maxRaise: config.maxRaise,
          startTime: config.startTime,
          endTime: config.endTime,
          liquidityBps: config.liquidityBps ?? BigInt(DEFAULT_LIQUIDITY_BPS),
        },
      ],
    });

    return hash;
  }

  /**
   * Buy `amount` tokens (in token wei). The price rises with every purchase, so
   * the contract takes a maximum total cost and reverts if the price moved past
   * it before the transaction landed.
   *
   * Pass `maxCost` to set that bound exactly, or `slippageBps` to derive it
   * from a fresh quote (default 100 = 1% above the quoted total).
   */
  async buyTokens(
    auctionId: bigint,
    amount: bigint,
    options: { maxCost?: bigint; slippageBps?: number } = {}
  ): Promise<Hash> {
    if (!this.walletClient) throw new Error("Wallet client required");

    const maxCost =
      options.maxCost ??
      applySlippage(
        (await this.getQuote(auctionId, amount)).totalCost,
        options.slippageBps ?? DEFAULT_SLIPPAGE_BPS
      );

    const hash = await this.walletClient.writeContract({
      chain: this.chain,
      account: this.walletClient.account!,
      address: this.auctionAddress,
      abi: tokenAuctionAbi,
      functionName: "buyTokens",
      args: [auctionId, amount, maxCost],
    });

    return hash;
  }

  /**
   * Withdraw a completed auction's raised payment tokens to its creator.
   * Only the auction's creator can call this, and only once.
   */
  async withdrawProceeds(auctionId: bigint): Promise<Hash> {
    if (!this.walletClient) throw new Error("Wallet client required");

    const hash = await this.walletClient.writeContract({
      chain: this.chain,
      account: this.walletClient.account!,
      address: this.auctionAddress,
      abi: tokenAuctionAbi,
      functionName: "withdrawProceeds",
      args: [auctionId],
    });

    return hash;
  }

  // Read: Has an auction's creator already withdrawn its proceeds?
  async hasWithdrawnProceeds(auctionId: bigint): Promise<boolean> {
    return this.publicClient.readContract({
      address: this.auctionAddress,
      abi: tokenAuctionAbi,
      functionName: "proceedsWithdrawn",
      args: [auctionId],
    }) as Promise<boolean>;
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
    return this.parseAuctionResult(auctionId, result as unknown as RawAuction);
  }

  // Read: Get buy quote (off-chain calculation)
  async getQuote(auctionId: bigint, amount: bigint): Promise<BuyQuote> {
    const auction = await this.getAuction(auctionId);
    const fill = fillPurchase(
      auction.totalSold,
      amount,
      auction.basePrice,
      auction.slope,
      auction.totalRaised,
      auction.maxRaise
    );
    const fee = (fill.cost * auction.protocolFeeBps) / 10_000n;

    return {
      amount: fill.amount,
      cost: fill.cost,
      fee,
      totalCost: fill.cost + fee,
      spotPriceAfter: spotPrice(auction.totalSold + fill.amount, auction.basePrice, auction.slope),
      fillsAuction: fill.fillsAuction,
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

  private parseAuctionResult(id: bigint, raw: RawAuction): AuctionData {
    // Mirrors the AuctionData struct returned by the public `auctions` getter.
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
      liquidityBps: raw.config.liquidityBps,
    };
  }
}
