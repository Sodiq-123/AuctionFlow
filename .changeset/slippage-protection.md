---
"auctionflow-sdk": minor
---

Protect purchases against price movement, and point Base Sepolia at the
hardened contract.

`buyTokens` now sends a maximum total cost to the contract, which reverts if
another purchase moved the price past it before the transaction landed.
Without this, a buyer could be filled at any price. By default the SDK quotes
the purchase and allows 1% above the quote; pass `{ slippageBps }` to change
the tolerance or `{ maxCost }` to set the bound exactly. Existing
`buyTokens(auctionId, amount)` calls keep compiling, but a purchase can now
revert with `Slippage exceeded` when the price moves more than the tolerance.

Also exports `applySlippage`, the helper that computes that bound.
