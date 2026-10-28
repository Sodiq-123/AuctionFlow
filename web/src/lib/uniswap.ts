// Trading a migrated token in its Uniswap v3 pool, through Uniswap's own
// QuoterV2 and SwapRouter02, so the app keeps working after graduation.

import { encodeFunctionData, parseAbi, type Address } from "viem";
import { chain, isWeth, POOL_FEE, uniswap } from "./config";

const quoterAbi = parseAbi([
  "function quoteExactInputSingle((address tokenIn, address tokenOut, uint256 amountIn, uint24 fee, uint160 sqrtPriceLimitX96) params) returns (uint256 amountOut, uint160 sqrtPriceX96After, uint32 initializedTicksCrossed, uint256 gasEstimate)",
]);

const routerAbi = parseAbi([
  "function exactInputSingle((address tokenIn, address tokenOut, uint24 fee, address recipient, uint256 amountIn, uint256 amountOutMinimum, uint160 sqrtPriceLimitX96) params) payable returns (uint256 amountOut)",
  "function unwrapWETH9(uint256 amountMinimum, address recipient) payable",
  "function multicall(bytes[] data) payable returns (bytes[] results)",
]);

/** SwapRouter02's stand-in for "the router itself", for a swap it unwraps afterwards. */
const ROUTER_ITSELF = "0x0000000000000000000000000000000000000002";

/**
 * The call that quotes swapping `amountIn` of `tokenIn` for `tokenOut`. QuoterV2
 * isn't a view function (it reverts internally to report), so simulate it and
 * read `result[0]`.
 */
export function quoteCall(tokenIn: Address, tokenOut: Address, amountIn: bigint) {
  return {
    address: uniswap.quoter,
    abi: quoterAbi,
    functionName: "quoteExactInputSingle",
    args: [{ tokenIn, tokenOut, amountIn, fee: POOL_FEE, sqrtPriceLimitX96: 0n }],
  } as const;
}

/**
 * The call that swaps exactly `amountIn` of `tokenIn` for at least `minOut`
 * of `tokenOut`, paid to `recipient`. Paying with WETH sends plain ETH, which
 * the router wraps; receiving WETH is unwrapped to plain ETH in the same
 * transaction.
 */
export function swapCall(
  recipient: Address,
  params: { tokenIn: Address; tokenOut: Address; amountIn: bigint; minOut: bigint }
) {
  const ethIn = isWeth(params.tokenIn);
  const ethOut = isWeth(params.tokenOut);
  const exactIn = encodeFunctionData({
    abi: routerAbi,
    functionName: "exactInputSingle",
    args: [
      {
        tokenIn: params.tokenIn,
        tokenOut: params.tokenOut,
        fee: POOL_FEE,
        recipient: ethOut ? ROUTER_ITSELF : recipient,
        amountIn: params.amountIn,
        amountOutMinimum: params.minOut,
        sqrtPriceLimitX96: 0n,
      },
    ],
  });
  const calls = ethOut
    ? [exactIn, encodeFunctionData({ abi: routerAbi, functionName: "unwrapWETH9", args: [params.minOut, recipient] })]
    : [exactIn];
  return {
    chain,
    address: uniswap.router,
    abi: routerAbi,
    functionName: "multicall",
    args: [calls],
    value: ethIn ? params.amountIn : 0n,
  } as const;
}

/** A Uniswap app link for trading `token`, for anyone who prefers it. */
export function uniswapUrl(token: Address): string {
  return `https://app.uniswap.org/swap?chain=${uniswap.appChain}&outputCurrency=${token}`;
}
