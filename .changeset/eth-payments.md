---
"auctionflow-sdk": major
---

Pay in ETH, for the contract that adds ETH-priced launches.

- **Breaking:** `launch(name, symbol, metadataURI?, paymentToken?)` takes the
  payment token, defaulting to WETH, since the contract now keeps one launch
  preset per payment token. Pass `USDC_ADDRESSES[chainId]` to launch in USDC.
- `buyTokensWithETH` and `sellTokensForETH` trade a WETH-priced token in plain
  ETH, in one transaction and with no approval. Unused ETH is refunded.
- `getLaunchPreset(paymentToken)`, `isPricedInETH(auctionId)` and
  `WETH_ADDRESSES`.
- `tokenAuctionAbi` covers the new contract, whose constructor takes the WETH
  address.
