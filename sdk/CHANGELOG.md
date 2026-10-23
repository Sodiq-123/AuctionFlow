# auctionflow-sdk

## 1.3.0

### Minor Changes

- cf360f6: Partial fills, a liquidity share per auction, and exact rounding.

  - A purchase that would take an auction past its `maxRaise` now fills with what
    the remaining budget buys and closes the auction, instead of reverting.
    Previously the last buyer had to hit the cap exactly, so auctions rarely
    completed by filling up. `getQuote` returns the filled `amount` and a
    `fillsAuction` flag.
  - Auctions carry a `liquidityBps`: the share of the raise (20% to 100%, default
    50%) reserved for Uniswap liquidity at migration. Set it with
    `buildAuction().withLiquidity(bps)`. It is optional on `AuctionConfig`.
  - `calculateBuyCost` rounds up, matching the contract, so a purchase always
    pays at least the exact price. Results can be up to 2 payment-token units
    higher than before.
  - New exports: `maxBuyable`, `fillPurchase`, `MIN_LIQUIDITY_BPS`,
    `DEFAULT_LIQUIDITY_BPS`.

- 2317204: Protect purchases against price movement, and point Base Sepolia at the
  hardened contract.

  `buyTokens` now sends a maximum total cost to the contract, which reverts if
  another purchase moved the price past it before the transaction landed.
  Without this, a buyer could be filled at any price. By default the SDK quotes
  the purchase and allows 1% above the quote; pass `{ slippageBps }` to change
  the tolerance or `{ maxCost }` to set the bound exactly. Existing
  `buyTokens(auctionId, amount)` calls keep compiling, but a purchase can now
  revert with `Slippage exceeded` when the price moves more than the tolerance.

  Also exports `applySlippage`, the helper that computes that bound.

- 2e64baf: Migrate completed auctions into Uniswap v3, and split proceeds between the
  pool and the creator.

  - `migrate(auctionId)` opens a 1% Uniswap v3 pool at the auction's final price,
    pairs the auction's liquidity share of the raise with newly minted tokens,
    locks the position in the contract permanently, and unlocks the token for
    trading. Anyone may call it. `getMigration(auctionId)` returns the pool and
    position.
  - `withdrawProceeds` now pays the creator their share of the raise: everything
    not reserved for liquidity (half, at the default 50% share), rather than the
    whole raise.
  - `collectFees(auctionId)` collects the pool's trading fees: the protocol takes
    `lpFeeShareBps` (at most 50%, fixed per auction) and the creator receives the
    rest. `AuctionData` gains `lpFeeShareBps`.
  - Auction tokens can't be transferred until the auction migrates, so no holder
    can create or price the pool ahead of it.

  The canonical Base Sepolia deployment moves to
  `0x722F4521b96acA1df7C65a1DbE3B1713803ccEa9`, the first that supports
  migration, slippage bounds and partial fills. Earlier deployments don't, so
  this release can't be used against them.

## 1.2.0

### Minor Changes

- Fix bonding-curve pricing, which was off by a factor of 1e18, and point Base
  Sepolia at the corrected contract deployment.

  `basePrice` and `slope` are denominated per whole token, but the cost and spot
  price formulas multiplied them by amounts in token wei without normalising. As a
  result a quote for 1,000 tokens at a 0.01 USDC base price came back as roughly
  5e38 USDC, and 10 USDC bought less than one billionth of a token.
  `calculateBuyCost`, `spotPrice` and `calculateBuyQuote` now divide by 1e18,
  matching the corrected `BondingCurve.sol`: that same 1,000-token quote is now
  10.5 USDC.

  The canonical Base Sepolia deployment moves to
  `0x91519Ca6C0B7a0E116A590C89A095199FF9f0054`, which contains the pricing fix and
  `withdrawProceeds`. The previous address predates both.

## 1.1.0

### Minor Changes

- Add an optional `auctionAddress` constructor parameter so the SDK can target a
  TokenAuction deployment other than the built-in one. Previously the contract
  address was derived solely from a hardcoded per-chain table, so anyone running
  their own deployment — on Base mainnet, another chain, or a local fork — had no
  way to point the SDK at it. Chains without a canonical deployment now say so and
  name the escape hatch.
