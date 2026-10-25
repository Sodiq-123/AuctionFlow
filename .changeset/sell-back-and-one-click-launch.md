---
"auctionflow-sdk": major
---

pump.fun-style trading: sell back into the curve, one-click launches, and
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
