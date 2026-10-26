---
"auctionflow-sdk": minor
---

Payouts are now claimed rather than sent. The creator's share of pool fees,
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
