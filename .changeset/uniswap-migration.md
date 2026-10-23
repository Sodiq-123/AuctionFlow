---
"auctionflow-sdk": minor
---

Migrate completed auctions into Uniswap v3, and split proceeds between the
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
