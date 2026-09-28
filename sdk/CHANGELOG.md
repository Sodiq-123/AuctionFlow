# auctionflow-sdk

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
