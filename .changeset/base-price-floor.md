---
"auctionflow-sdk": patch
---

`AuctionBuilder` rejects a `basePrice` below 1,000,000 (`MIN_BASE_PRICE`, now
exported), matching the contract's new floor, and the docs describe the new
migration: it never pays the creator, and reverts if Uniswap refuses the
position.
