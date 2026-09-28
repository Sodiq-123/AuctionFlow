# auctionflow-sdk

## 1.1.0

### Minor Changes

- Add an optional `auctionAddress` constructor parameter so the SDK can target a
  TokenAuction deployment other than the built-in one. Previously the contract
  address was derived solely from a hardcoded per-chain table, so anyone running
  their own deployment — on Base mainnet, another chain, or a local fork — had no
  way to point the SDK at it. Chains without a canonical deployment now say so and
  name the escape hatch.
