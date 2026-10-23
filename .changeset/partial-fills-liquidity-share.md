---
"auctionflow-sdk": minor
---

Partial fills, a liquidity share per auction, and exact rounding.

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
