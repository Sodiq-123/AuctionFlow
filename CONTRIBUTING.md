# Contributing to AuctionFlow

Thank you for your interest in contributing.

## Prerequisites

- Node.js v20+
- pnpm v10+
- Foundry (`curl -L https://foundry.paradigm.xyz | bash && foundryup`)
- Docker (for the indexer's PostgreSQL)

## Project structure

```
contracts/   Solidity + Foundry
sdk/         TypeScript SDK (npm: auctionflow-sdk)
indexer/     Ponder indexer + GraphQL API
examples/    End-to-end usage scripts
```

## Setup

```bash
git clone https://github.com/Sodiq-123/AuctionFlow.git
cd AuctionFlow
pnpm install
cd contracts && forge install
```

## Running tests

```bash
# Contracts
pnpm test:contracts

# SDK
pnpm test:sdk

# Type-check everything
pnpm typecheck
```

## Submitting a pull request

1. Fork the repo and create a branch from `main`
2. Make your changes
3. Add a changeset describing your change:
   ```bash
   pnpm changeset
   ```
4. Ensure all tests pass
5. Open a PR — CI will run forge tests, vitest, and type checks automatically

## Changesets

This project uses [Changesets](https://github.com/changesets/changesets) for versioning the SDK.

- `patch` — bug fixes, no API change
- `minor` — new backwards-compatible feature
- `major` — breaking API change

Only changes to `sdk/` require a changeset. Contract and indexer changes do not need one.

## Code style

- TypeScript: strict mode, no `any` except in ABI parsing
- Solidity: NatSpec on all public functions, events documented
- No comments that describe *what* the code does — only *why* if non-obvious
