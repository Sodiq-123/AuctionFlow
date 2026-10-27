# auctionflow-sdk

## 3.0.0

### Major Changes

- 70277a4: Pay in ETH, for the contract that adds ETH-priced launches.

  - **Breaking:** `launch(name, symbol, metadataURI?, paymentToken?)` takes the
    payment token, defaulting to WETH, since the contract now keeps one launch
    preset per payment token. Pass `USDC_ADDRESSES[chainId]` to launch in USDC.
  - `buyTokensWithETH` and `sellTokensForETH` trade a WETH-priced token in plain
    ETH, in one transaction and with no approval. Unused ETH is refunded.
  - `getLaunchPreset(paymentToken)`, `isPricedInETH(auctionId)` and
    `WETH_ADDRESSES`.
  - `tokenAuctionAbi` covers the new contract, whose constructor takes the WETH
    address.

### Minor Changes

- 0ec84a2: `tokenAuctionAbi` is exported, for decoding the contract's events (for
  example the auction id in a launch's `AuctionCreated` log) and for calls the
  SDK doesn't wrap.

### Patch Changes

- 0ec84a2: `fillPurchase` (and so `getQuote`) matches the contract when only dust is left
  to raise: it reports a purchase of nothing that graduates the auction, rather
  than throwing "sold out".
- 0ec84a2: Fix `getAuction`, and with it `getQuote` and `getSellQuote`: they read the
  contract's `auctions` getter as named fields, but viem returns a getter with
  several return values as an array, so every call threw "Cannot read
  properties of undefined". They now decode it correctly.
- c3f839a: Base Sepolia now points at `0x990a04FFE0D49356321271629889fA0413AD1BDC`, the
  deployment that adds paying in ETH, with presets for 10 USDC and 0.01 ETH
  launches.

## 2.1.0

### Minor Changes

- 2ed2818: Payouts are now claimed rather than sent. The creator's share of pool fees,
  and any reserve migration couldn't place, are credited to the creator, who
  withdraws them with `claim(token)`. Protocol fees accrue in the contract and
  `claimProtocolFees(token)` pays them to the fee recipient. A blacklisted
  address can therefore only block its own claim, never a holder's sell or a
  token's migration. `getClaimable` and `getProtocolFees` read the balances.

  New auctions can only be priced in owner-approved payment tokens;
  `isPaymentTokenAllowed(token)` checks one.

  Also fixed in the contract: a buyer could stop the raise one unit short of the
  threshold, after which every purchase reverted. Such a buy now graduates the
  auction.

- fbb6722: `isPaused()` reports whether the protocol is paused. The contract gains an
  emergency pause that blocks launches and curve buys only: selling back,
  migration, withdrawals and fee collection keep working while paused. The
  ABI also adds two-step ownership (`pendingOwner`, `acceptOwnership`).

### Patch Changes

- Base Sepolia now points at `0xE57fE62e31666A9B749E89086A8a5487A530153b`, the
  deployment with the emergency pause, two-step ownership, claim-based payouts
  and the payment-token allowlist. It is owned by a Safe multisig.

## 2.0.1

### Patch Changes

- Base Sepolia now points at `0x24a702F10f17A522B9B5511EC2970EE029195Ee4`. The
  previous deployment could not migrate cheap tokens to Uniswap: opening the
  pool overflowed whenever the token sorted after USDC, which includes tokens
  from the standard launch preset.

## 2.0.0

### Major Changes

- 87bea09: Curve prices are now fixed-point with 18 extra decimals.

  `basePrice`, `slope` and spot prices (`getSpotPrice`, `quote.spotPriceAfter`)
  are in payment-token units per whole token × 1e18. Previously they were whole
  payment units, so the slope's smallest step was 1 unit per token: a
  billion-token launch needs a slope around 1e-7 units per token, which couldn't
  be expressed. Use `parseCurvePrice("0.01", 6)` for 0.01 USDC per token, and
  `formatCurvePrice` to display a price.

  Migration also prices the Uniswap pool from the full-precision final price,
  rather than one rounded to whole payment units.

- 2428d74: pump.fun-style trading: sell back into the curve, one-click launches, and
  graduation by raise threshold instead of a sale window.

  Breaking changes:

  - Auctions no longer have a start or end time. Trading starts as soon as an
    auction is created, and it graduates to Uniswap when `maxRaise` is raised.
    `AuctionBuilder.withSchedule` is removed, and `startTime` / `endTime` are gone
    from `AuctionConfig` and `AuctionData`. Use `withMetadata(uri)` to attach token
    metadata such as an image.
  - Requires the redeployed contract this release points at: `createAuction`'s
    parameters changed, so earlier deployments can't be used.

  New:

  - `sellTokens(auctionId, amount, { minProceeds?, slippageBps? })` sells back to
    the curve before graduation, burning the tokens and paying the curve price
    minus the protocol fee. `getSellQuote` quotes it; `calculateSellProceeds` and
    `applySellSlippage` are exported. Purchases round up and sales round down, so
    a round trip never profits.
  - `launch(name, symbol, metadataURI)` creates a token with the protocol's
    standard launch preset.

### Patch Changes

- 9b3e4cc: Base Sepolia now points at `0xc6DB1c900FAEB4079281Ecd6Ec538C027cD18c28`, the
  deployment with sell-back, one-click `launch` and fixed-point curve prices.

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
