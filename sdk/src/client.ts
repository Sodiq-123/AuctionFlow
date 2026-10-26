import {
  createPublicClient,
  http,
  PublicClient,
  WalletClient,
  Chain,
  Address,
  Hash,
  zeroAddress,
  ContractFunctionArgs,
  WriteContractParameters,
} from "viem";
import { AuctionBuilder } from "./builders/auction-builder";
import { AuctionConfig, AuctionData, BuyQuote, MigrationInfo, SellQuote, SupportedChainId } from "./types";
import { AUCTION_ADDRESSES } from "./constants/addresses";
import { DEFAULT_LIQUIDITY_BPS } from "./constants/protocol";
import { tokenAuctionAbi } from "./abis/token-auction";
import {
  applySellSlippage,
  applySlippage,
  calculateSellProceeds,
  DEFAULT_SLIPPAGE_BPS,
  fillPurchase,
  spotPrice,
} from "./utils/bonding-curve";
import { CHAINS } from "./utils/chains";

/** Shape of the nested tuple returned by the on-chain `auctions(id)` getter. */
interface RawAuction {
  config: {
    token: Address;
    paymentToken: Address;
    basePrice: bigint;
    slope: bigint;
    maxRaise: bigint;
    creator: Address;
    protocolFeeBps: bigint;
    liquidityBps: bigint;
    lpFeeShareBps: bigint;
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
          metadataURI: config.metadataURI ?? "",
          maxSupply: config.maxSupply,
          paymentToken: config.paymentToken,
          basePrice: config.basePrice,
          slope: config.slope,
          maxRaise: config.maxRaise,
          liquidityBps: config.liquidityBps ?? BigInt(DEFAULT_LIQUIDITY_BPS),
        },
      ],
    });

    return hash;
  }

  /**
   * One-click launch: a token with the protocol's standard curve, threshold
   * and liquidity share. Trading starts immediately.
   */
  async launch(name: string, symbol: string, metadataURI = ""): Promise<Hash> {
    if (!this.walletClient) throw new Error("Wallet client required");
    return this.walletClient.writeContract({
      chain: this.chain,
      account: this.walletClient.account!,
      address: this.auctionAddress,
      abi: tokenAuctionAbi,
      functionName: "launch",
      args: [name, symbol, metadataURI],
    });
  }

  /**
   * Sell `amount` tokens (in token wei) back to the curve before graduation.
   * The contract reverts if the price fell below the bound before the
   * transaction landed: pass `minProceeds` to set it exactly, or `slippageBps`
   * to derive it from a fresh quote (default 100 = 1% below it).
   */
  async sellTokens(
    auctionId: bigint,
    amount: bigint,
    options: { minProceeds?: bigint; slippageBps?: number } = {}
  ): Promise<Hash> {
    if (!this.walletClient) throw new Error("Wallet client required");

    const minProceeds =
      options.minProceeds ??
      applySellSlippage(
        (await this.getSellQuote(auctionId, amount)).netProceeds,
        options.slippageBps ?? DEFAULT_SLIPPAGE_BPS
      );

    return this.walletClient.writeContract({
      chain: this.chain,
      account: this.walletClient.account!,
      address: this.auctionAddress,
      abi: tokenAuctionAbi,
      functionName: "sellTokens",
      args: [auctionId, amount, minProceeds],
    });
  }

  /** What selling `amount` tokens back to the curve would pay right now. */
  async getSellQuote(auctionId: bigint, amount: bigint): Promise<SellQuote> {
    const auction = await this.getAuction(auctionId);
    const proceeds = calculateSellProceeds(auction.totalSold, amount, auction.basePrice, auction.slope);
    const fee = (proceeds * auction.protocolFeeBps) / 10_000n;
    return {
      proceeds,
      fee,
      netProceeds: proceeds - fee,
      spotPriceAfter: spotPrice(auction.totalSold - amount, auction.basePrice, auction.slope),
    };
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
   * Pay a completed auction's creator their share of the raise: everything
   * not reserved for Uniswap liquidity. Creator only, once, before or after
   * migration.
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

  /**
   * Move a completed auction's liquidity into a Uniswap v3 pool at the
   * auction's final price, lock it, and unlock the token for trading. Anyone
   * may call it.
   */
  async migrate(auctionId: bigint): Promise<Hash> {
    return this.write("migrate", [auctionId]);
  }

  /**
   * Collect the migrated pool's trading fees. The protocol's share accrues to
   * the protocol and the rest is credited to the creator, who withdraws it
   * with `claim`. Anyone may call it.
   */
  async collectFees(auctionId: bigint): Promise<Hash> {
    return this.write("collectFees", [auctionId]);
  }

  /**
   * Withdraw everything credited to the connected account in `token`: a
   * creator's share of pool fees, and any reserve migration couldn't place.
   */
  async claim(token: Address): Promise<Hash> {
    return this.write("claim", [token]);
  }

  /** Send the protocol's unclaimed fees in `token` to the fee recipient. Anyone may call it. */
  async claimProtocolFees(token: Address): Promise<Hash> {
    return this.write("claimProtocolFees", [token]);
  }

  /** The Uniswap pool and position for a migrated auction. */
  async getMigration(auctionId: bigint): Promise<MigrationInfo> {
    const [pool, positionId] = await Promise.all([
      this.publicClient.readContract({
        address: this.auctionAddress,
        abi: tokenAuctionAbi,
        functionName: "poolOf",
        args: [auctionId],
      }),
      this.publicClient.readContract({
        address: this.auctionAddress,
        abi: tokenAuctionAbi,
        functionName: "positionId",
        args: [auctionId],
      }),
    ]);
    return {
      pool: pool === zeroAddress ? null : pool,
      positionId: positionId === 0n ? null : positionId,
    };
  }

  private async write<F extends "migrate" | "collectFees" | "claim" | "claimProtocolFees">(
    functionName: F,
    args: ContractFunctionArgs<typeof tokenAuctionAbi, "nonpayable", F>
  ): Promise<Hash> {
    if (!this.walletClient) throw new Error("Wallet client required");
    return this.walletClient.writeContract({
      chain: this.chain,
      account: this.walletClient.account!,
      address: this.auctionAddress,
      abi: tokenAuctionAbi,
      functionName,
      args,
    } as WriteContractParameters<typeof tokenAuctionAbi, F>);
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

  // Read: Is the protocol paused? While paused, launches and curve buys
  // revert; selling back, migration, withdrawals, fee collection and claims
  // still work.
  async isPaused(): Promise<boolean> {
    return this.publicClient.readContract({
      address: this.auctionAddress,
      abi: tokenAuctionAbi,
      functionName: "paused",
    }) as Promise<boolean>;
  }

  // Read: How much of `token` is credited to `account`, waiting for `claim`?
  async getClaimable(token: Address, account: Address): Promise<bigint> {
    return this.publicClient.readContract({
      address: this.auctionAddress,
      abi: tokenAuctionAbi,
      functionName: "claimable",
      args: [token, account],
    }) as Promise<bigint>;
  }

  // Read: Protocol fees in `token` earned and not yet claimed.
  async getProtocolFees(token: Address): Promise<bigint> {
    return this.publicClient.readContract({
      address: this.auctionAddress,
      abi: tokenAuctionAbi,
      functionName: "protocolFees",
      args: [token],
    }) as Promise<bigint>;
  }

  // Read: May new auctions be priced in `token`?
  async isPaymentTokenAllowed(token: Address): Promise<boolean> {
    return this.publicClient.readContract({
      address: this.auctionAddress,
      abi: tokenAuctionAbi,
      functionName: "paymentTokenAllowed",
      args: [token],
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
      state: raw.state,
      totalRaised: raw.totalRaised,
      totalSold: raw.totalSold,
      protocolFeeBps: raw.config.protocolFeeBps,
      liquidityBps: raw.config.liquidityBps,
      lpFeeShareBps: raw.config.lpFeeShareBps,
    };
  }
}
