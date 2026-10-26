---
"auctionflow-sdk": major
---

Curve prices are now fixed-point with 18 extra decimals.

`basePrice`, `slope` and spot prices (`getSpotPrice`, `quote.spotPriceAfter`)
are in payment-token units per whole token × 1e18. Previously they were whole
payment units, so the slope's smallest step was 1 unit per token: a
billion-token launch needs a slope around 1e-7 units per token, which couldn't
be expressed. Use `parseCurvePrice("0.01", 6)` for 0.01 USDC per token, and
`formatCurvePrice` to display a price.

Migration also prices the Uniswap pool from the full-precision final price,
rather than one rounded to whole payment units.
