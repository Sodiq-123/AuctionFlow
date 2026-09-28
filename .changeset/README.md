# Changesets

This directory is managed by [Changesets](https://github.com/changesets/changesets).

## How to add a changeset

When making a change to the SDK that should be released:

```bash
pnpm changeset
```

Select the package (`auctionflow-sdk`), choose the semver bump (`patch` / `minor` / `major`), and write a short description. This creates a markdown file here. Commit it with your PR.

## How to release

1. Merge all changeset files into `main`
2. Run `pnpm changeset version` — this bumps `sdk/package.json` and updates `CHANGELOG.md`
3. Commit and push a tag: `git tag sdk-v<version> && git push --tags`
4. The `sdk-release.yml` workflow publishes to npm automatically
