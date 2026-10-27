---
"auctionflow-sdk": patch
---

Fix `getAuction`, and with it `getQuote` and `getSellQuote`: they read the
contract's `auctions` getter as named fields, but viem returns a getter with
several return values as an array, so every call threw "Cannot read
properties of undefined". They now decode it correctly.
