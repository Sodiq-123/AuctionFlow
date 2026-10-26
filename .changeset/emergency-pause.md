---
"auctionflow-sdk": minor
---

`isPaused()` reports whether the protocol is paused. The contract gains an
emergency pause that blocks launches and curve buys only: selling back,
migration, withdrawals and fee collection keep working while paused. The
ABI also adds two-step ownership (`pendingOwner`, `acceptOwnership`).
