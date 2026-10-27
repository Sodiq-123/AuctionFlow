import { parseAbi } from "viem";

// Only the events the indexer reads from the contracts each launch creates.

/** Every launched token: balances, for holders and portfolios. */
export const AuctionTokenAbi = parseAbi([
  "event Transfer(address indexed from, address indexed to, uint256 value)",
]);

/** Each migrated token's Uniswap v3 pool: trades after graduation. */
export const UniswapV3PoolAbi = parseAbi([
  "event Swap(address indexed sender, address indexed recipient, int256 amount0, int256 amount1, uint160 sqrtPriceX96, uint128 liquidity, int24 tick)",
]);
