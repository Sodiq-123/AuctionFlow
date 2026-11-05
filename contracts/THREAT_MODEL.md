# AuctionFlow threat model

This document covers the contracts in `src/`: `TokenAuction` (the launchpad), `AuctionToken` (the token each launch creates), `BondingCurve` (the pricing library) and `ReservePlacement` (the library that places migration's liquidity). It lists what is at risk, whom the system trusts, what the owner can and cannot do, which attacks were considered and how each is handled. It reflects the code at the commit it ships with. The contracts have not had an external audit.

## How it works

1. A creator calls `launch` (the standard preset for the chosen payment token, USDC or WETH) or `createAuction` (custom curve). The contract deploys an `AuctionToken` it owns, and trading opens at once.
2. Buyers buy from a linear bonding curve and can sell back to it. Auctions priced in WETH can also be bought and sold with plain ETH (`buyTokensWithETH`, `sellTokensForETH`), which the contract wraps and unwraps in the same call. Tokens cannot be transferred until migration.
3. When the raise reaches `maxRaise`, the auction graduates (`COMPLETED`) and the curve closes.
4. Anyone calls `migrate`. It opens a 1% Uniswap v3 pool at the curve's final price and adds the reserved share of the raise plus newly minted tokens, from the final price down to 1/10,000 of it and up without limit. It keeps the position NFT forever, unlocks transfers and renounces the token's ownership. If Uniswap refuses the position, `migrate` reverts.
5. The creator withdraws their share of the raise. Anyone can call `collectFees` to move pool fees into the contract, where the creator and the protocol claim their shares.

## Assets at risk

| Asset | Where it sits |
| --- | --- |
| Buyers' payment tokens (USDC or WETH) | In `TokenAuction` while an auction trades, owed back to holders who sell. ETH is always held wrapped; the contract keeps no ETH between calls |
| Creators' proceeds | In `TokenAuction` from graduation until `withdrawProceeds` |
| Pool liquidity | A Uniswap v3 position NFT held by `TokenAuction`, permanently |
| Unclaimed payouts and protocol fees | In `TokenAuction`, tracked by `claimable` and `protocolFees` |
| Token supply integrity | `AuctionToken` mint and burn rights, held by `TokenAuction` until migration |

`custodied[token]` is everything the contract owes in a token: unwithdrawn raises, unclaimed payouts and unclaimed protocol fees. The contract's balance must always be at least that.

## Actors and trust

| Actor | Trusted for | Not trusted for |
| --- | --- | --- |
| Buyers and holders | Nothing | Anything: any address can buy, sell, migrate, collect fees or claim protocol fees |
| Creators | Nothing beyond their own launch | Their launch's curve parameters are validated; they cannot change them after creation |
| Owner (a Safe multisig before mainnet) | Fee levels within caps, the launch preset, the payment-token allowlist, pausing entries, sweeping excess | Users' funds: see "What the owner cannot do" |
| Uniswap v3 (position manager, factory, pools) | Correct pool behaviour; the position manager address is immutable | Pool state. Anyone can create or initialise the pool first, at any price, and add liquidity to it, so migration never relies on its price or its ticks being untouched |
| Payment token (USDC) | Standard ERC-20 behaviour, enforced by the owner's allowlist | Circle can blacklist addresses and pause USDC itself (see "Accepted risks") |
| WETH (Base predeploy `0x4200…0006`, immutable) | 1:1 wrapping and unwrapping | Nothing else: it has no admin, blacklist or pause |

## What the owner can and cannot do

The owner can:

- set the protocol fee for **new** auctions, capped at 10% (`MAX_FEE_BPS`);
- set the protocol's share of pool fees for **new** auctions, capped at 50% (`MAX_LP_FEE_SHARE_BPS`);
- change the fee recipient. Unclaimed protocol fees go to the new recipient;
- set the one-click launch preset for each payment token, validated exactly like a custom launch;
- allow or disallow payment tokens for **new** auctions;
- pause and unpause `launch`, `createAuction`, `buyTokens` and `buyTokensWithETH`;
- sweep tokens held **above** `custodied`, such as tokens sent to the contract by mistake;
- transfer ownership, in two steps (`Ownable2Step`).

The owner cannot:

- change any term of an existing auction. Fee, pool-fee share, curve, threshold and liquidity share are fixed when the auction is created;
- move funds owed to anyone. `sweep` is limited to the excess over `custodied`;
- block a way out. Pausing never stops `sellTokens`, `sellTokensForETH`, `migrate`, `withdrawProceeds`, `collectFees`, `claim` or `claimProtocolFees`;
- move or withdraw pool liquidity. No function transfers a position NFT or decreases its liquidity;
- mint tokens. Only `TokenAuction` can mint, only within an auction's `maxSupply`, and token ownership is renounced at migration;
- change the Uniswap position manager or the WETH address, which are immutable.

## Invariants

Each is checked by the stateful fuzzing suite (`test/invariant/TokenAuction.invariant.t.sol`) unless noted.

1. `totalRaised` never exceeds `maxRaise`.
2. A token's supply equals the auction's `totalSold` until migration.
3. `totalSold` never exceeds `maxSupply`.
4. `custodied` equals the raise plus unclaimed protocol fees, with no withdrawals in the suite.
5. The balance always covers `custodied`, whatever is donated or swept.
6. The balance equals the raise plus unclaimed fees, plus donations, minus sweeps. Sweeping only ever removes donated excess.
7. Every fee a trader pays is either still accrued or was paid to the fee recipient.
8. The raise always covers selling every outstanding token back to the curve at once.
9. A buy followed by a sell never makes a profit (`test/unit/BondingCurve.t.sol`, fuzzed).
10. The contract holds no ETH between calls; ETH-priced auctions keep invariants 4 to 8 whether traders use ETH or WETH (`test/invariant/TokenAuction.eth.invariant.t.sol`).

## Threats and mitigations

| # | Threat | Mitigation | Tests |
| --- | --- | --- | --- |
| 1 | **Pool pre-initialisation.** Anyone can create the Uniswap pool for a known token address and initialise it at any price, then add USDC (or WETH) liquidity to it: no one holds tokens before migration, so liquidity on the payment side is all they can add. Too low, the reserve's tokens would sell cheaply. Too high, the reserve's payment would buy tokens dearly. Two earlier designs lowered a price that was too high by selling into it. A creator could then park USDC just above the target and be credited the sale's proceeds, about half the reserve for free. Found in a later review. The sale also had to cross every position parked in its way: 620 dust positions, about $1–2 of gas, pushed `migrate` past Base's 16.7M per-transaction gas cap for good. Found in the review after. | A price that is too low is raised to the target by buying the token, which is free and crosses no liquidity, because no one can hold tokens to sell into the pool. A price that is too high is left alone. The reserve's payment goes into a position ending at the target (within one tick spacing below it), and its tokens into one starting above the pool's price. No one can buy the reserve's tokens below the auction price or sell into its payment above it, and nothing is sold, so there are no proceeds. The party that parks, the creator and every curve buyer together never end up ahead of an honest migration. | `test_migrate_correctsPoolInitializedTooLow`, `test_migrate_poolOpenedTooHighKeepsReserveAtAuctionPrice`, `…cannotBeBlockedByLiquidityAboveAuctionPrice`, `testFuzz_migrate_parkingLiquidityAboveAuctionPriceNeverPays`, `…parkingNeverPaysOnStandardLaunch`, `test_attack_dustPositionsCannotPushMigratePastTheGasCap`, `testFuzz_attack_anyStartingPool` (pool opened anywhere from 1,000,000× below to 1,000,000× above, with or without parked USDC) (fork, both token orderings) |
| 2 | **Sniping the pool before migration**, by seeding it with tokens or pricing it. | `AuctionToken` blocks all transfers until migration. Holders can only sell back to the curve. | `test/unit/AuctionToken.t.sol` |
| 3 | **Front-running and stale quotes** on curve trades. | `buyTokens` takes `maxCost` and `sellTokens` takes `minProceeds`, and each reverts if the price moved past the limit. Migration reads its pool price in the same transaction, so its zero minimums cannot be exploited. | `test_buyTokens_protectsAgainstFrontRun`, `test_sell_respectsMinProceeds` |
| 4 | **Rounding extraction.** Many small round trips draining the raise. | Buy costs round up and sale proceeds round down, so the raise never falls below the exact value of the tokens outstanding. | Invariants 8 and 9; `test_sell_everyoneCanExit` |
| 5 | **Reentrancy.** | Every function that moves value or touches `custodied`, `claimable` or `protocolFees` is `nonReentrant`, and state changes come before transfers. `launch` and `createAuction` are not guarded but touch none of that state. The Uniswap swap callback only accepts the pool currently being migrated. | `test_swapCallback_rejectsUnauthorizedCaller` |
| 6 | **Fee-on-transfer or rebasing payment tokens** leaving `custodied` above the real balance. | `_collectPayment` requires the balance to rise by exactly the amount pulled. | `test_buyTokens_rejectsFeeOnTransferPaymentToken` |
| 7 | **A creator pricing a launch in a token they control**, then blocking its transfers to freeze sells and migration. Found in this review. | New auctions can only use owner-approved payment tokens (`paymentTokenAllowed`). The deploy script approves Circle's USDC. | `test_createAuction_rejectsUnapprovedPaymentToken`, `test_setLaunchPreset_rejectsUnapprovedPaymentToken` |
| 8 | **A blacklisted recipient blocking exits.** USDC can blacklist addresses. When payouts were pushed, a blacklisted fee recipient made every sell revert, and a blacklisted creator made migration revert, leaving every holder's tokens locked. It also let an owner freeze sells by pointing fees at a blacklisted address. Found in this review. | Payouts are credited and claimed. Protocol fees accrue to `protocolFees` and `claimProtocolFees` pays the current recipient. A creator's pool fees go to `claimable`, and migration pays no one, so a blacklisted creator cannot affect it. A blacklisted address can only block its own claim, and a blocked fee recipient can be replaced without losing fees. | `test/integration/TokenAuction.blacklist.t.sol` |
| 9 | **Stalling graduation with dust.** A buyer stops the raise one unit short of the threshold. The smallest purchase costs two units, so every later buy reverted. Found in this review. | A buy that can afford nothing graduates the auction and charges nothing. | `test_buyTokens_graduatesWhenOnlyDustRemains` |
| 10 | **Arithmetic overflow** mid-sale or at migration. | Curve parameters are bounded at creation (`MAX_SUPPLY_BOUND`, `MAX_PRICE_PARAM`, `MAX_RAISE_BOUND`), and every product goes through `Math.mulDiv`. The pool-price encoding overflowed for cheap tokens paired as token1, which the testnet walkthrough found. It now takes the root at a lower scale for large ratios. | `test/unit/SqrtPrice.t.sol` (fuzzed over every reachable price), `test_migrate_cheapStandardLaunch` (fork) |
| 11 | **Forcing Uniswap to refuse the position.** Each tick holds at most ~3.8e34 liquidity. The reserve once ran to Uniswap's extreme tick, where a payment-only position fills that cap for about 2e13 raw units: 0.00002 ETH, or a USDC flash loan repaid in the same transaction. Uniswap then refused the position, and the fallback credited the reserve to the creator: the whole raise for them, a token with no pool for holders. Found in the review after threat 1's fix. | Migration never pays anyone in place of the pool: if Uniswap refuses the position, `migrate` reverts and can be retried, so forcing a refusal is worth nothing. The reserve stops at 1/10,000 of the final price (`ReservePlacement.RESERVE_SPAN`) instead of the extreme tick. Launch validation bounds the pool's liquidity (`MIN_POOL_LIQUIDITY`, `MAX_POOL_LIQUIDITY`) and the base price (`MIN_BASE_PRICE`), so filling a tick the reserve uses costs over ~380,000 times the reserve. For the standard USDC preset that is about $643 trillion. And it only stalls migration, for as long as the money stays parked. The token side cannot be filled, since no one holds tokens. `migrate` is permissionless, so a creator cannot hold a token hostage. | `test_attack_fillingTheExtremeTickNoLongerRefusesThePosition`, `test_attack_fillingTheReservesTickCostsOverWhatItBlocks` (fork), `test_migrate_revertsWhenUniswapRefuses` (unit and fork), `testFuzz_tickAt_matchesUniswap` (fork), `test_createAuction_rejectsPoolLiquidityTooHigh`, `…TooLow` |
| 12 | **Liquidity rug**: pulling the pool's liquidity after migration. | The position NFT stays in `TokenAuction`, and no function can transfer it or decrease its liquidity. | `test_migrate_opensPoolAtAuctionPriceAndLocksLiquidity` (fork) |
| 13 | **Minting after migration.** | `AuctionToken` ownership is renounced at the end of `migrate`, so its supply is fixed for good. `burnFrom` also refuses once transfers are enabled. | `test_noMintOrBurnAfterMigration` |
| 14 | **Owner key compromise or mistakes.** | Every owner power is capped or limited to new auctions, as listed above. Ownership transfers need the new owner to accept, so a mistyped address cannot take the contract. Before mainnet, ownership moves to a Safe multisig. | `test/integration/TokenAuction.admin.t.sol`, `…pause.t.sol` |
| 15 | **ETH left behind or refunds lost.** A buyer sends more ETH than the purchase costs, or sends ETH to the contract directly. | `buyTokensWithETH` treats the ETH sent as `maxCost`, wraps exactly the cost plus fee and refunds the rest in the same call. If the refund can't be delivered the whole buy reverts, so nothing is kept. `receive` accepts ETH only from WETH (the unwrap in `sellTokensForETH`, forwarded at once), so direct transfers are refused. The ETH entry points require the auction to be priced in WETH, and are disabled when WETH is unset. | `test/integration/TokenAuction.eth.t.sol`, `test_ethLaunch_fullLifecycle` (fork, real WETH and Uniswap) |

## Accepted risks

- **USDC itself.** Circle can pause USDC or blacklist this contract's address, which would freeze every USDC auction. Nothing the contract does can prevent that.
- **The creator's own buys.** A creator can buy their own launch early and sell after migration. The protocol does not cap holdings. A frontend should show holder concentration.
- **Names and symbols** are not unique. Anyone can launch a token with any name, so impersonation has to be handled by the frontend.
- **Fees on tiny trades round to zero.** A trade costing under 100 units ($0.0001 in USDC) pays no fee at a 1% rate. Splitting trades to avoid fees costs far more gas than it saves.
- **Other Uniswap fee tiers.** Anyone can create pools for a migrated token at other fee tiers. Only the 1% pool holds the locked liquidity.
- **Base's sequencer** can delay or reorder transactions. The slippage limits bound the price risk; censorship is out of scope.
- **Gas.** `migrate` costs about 5.3M gas, most of it creating the pool, well within Base's 16.7M per-transaction cap. No one can add to it: the only swap it makes crosses no liquidity.
- **A pool opened just above the target.** Anyone can open the pool a hair above the final price for free, so the reserve is split around it (threat 1). Until someone trades, there is a gap of up to one tick spacing (about 2%) below the price, and the reserve's tokens start at the pool's price. Holders can still sell within about 2% of the final price. The trading fees of the tokens' own position, which only trades if the price climbs past where the pool was opened, are not collected.

## Static analysis

Slither 0.11.6 and Aderyn 0.6.8 were run on `src/`, and Slither 0.11.3 again after each fix to migration (Aderyn not yet). Neither reports a finding that holds up. Neither caught the attacks in threats 1 and 11, which depend on Uniswap's state and economics; they were found by manual review and proved with fork tests. The items they raise are dispositioned here:

- **Reentrancy** (Slither `reentrancy-no-eth` and `reentrancy-benign`; Aderyn H-1): state written after external calls in `migrate` (and `_addLiquidity` and `_raisePoolPrice`, parts of it) and `collectFees`. Every function that reads or writes that state is `nonReentrant`, and the calls go to the auction's own token, the immutable position manager, its pools, an allowlisted payment token and the `ReservePlacement` library.
- **Strict equalities**: deliberate. One is the exact balance check that rejects fee-on-transfer tokens; the others are exact pool-price checks.
- **Ignored return values**: deliberate (`slot0` fields, the swap's amounts, the minted liquidity).
- **Uninitialized local** (`m` in `migrate`): a struct whose fields are set before use.
- **Low-level call** (Slither `low-level-calls`): `_sendETH` sends refunds and sell proceeds with `call`, the only way to send ETH without a gas limit. Its result is checked, and every caller is `nonReentrant`.
- **Unsafe typecasts** (forge lint): the tick estimate's casts stay within ±1.4M, far inside `int24`; the others predate it and are bounded by `_validateCurve`.
- **Centralization**: covered by "What the owner can and cannot do", and by the Safe multisig.
- **Floating pragma, PUSH0**: Foundry pins solc 0.8.24, and Base supports PUSH0.

## Before mainnet

- [ ] Ownership transferred to a Safe multisig with at least two signers, and accepted by it
- [ ] External audit, or at least an independent review, of this commit
- [ ] A public way to report vulnerabilities (`SECURITY.md` with a contact)
- [ ] Mainnet preset chosen and simulated end to end on a Base mainnet fork
- [ ] Optional caps during a beta (a lower `maxRaise` in the preset)
- [ ] Terms of service and a legal check for the target markets
