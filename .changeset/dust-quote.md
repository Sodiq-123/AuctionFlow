---
"auctionflow-sdk": patch
---

`fillPurchase` (and so `getQuote`) matches the contract when only dust is left
to raise: it reports a purchase of nothing that graduates the auction, rather
than throwing "sold out".
