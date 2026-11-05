pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../../src/interfaces/IUniswapV3.sol";

/// A pool that reports whatever price it was initialised with.
contract MockPool {
    uint160 public sqrtPriceX96;

    constructor(uint160 price) {
        sqrtPriceX96 = price;
    }

    function slot0() external view returns (uint160, int24, uint16, uint16, uint16, uint8, bool) {
        return (sqrtPriceX96, 0, 0, 0, 0, 0, true);
    }
}

/// Lets migration run without Uniswap: pools open at the price asked for and
/// every position is accepted, taking all the tokens offered.
contract AcceptingPositionManager {
    uint256 public nextId = 1;

    function createAndInitializePoolIfNecessary(address, address, uint24, uint160 sqrtPriceX96)
        external
        returns (address)
    {
        return address(new MockPool(sqrtPriceX96));
    }

    function mint(INonfungiblePositionManager.MintParams calldata p)
        external
        returns (uint256, uint128, uint256, uint256)
    {
        if (p.amount0Desired > 0) IERC20(p.token0).transferFrom(msg.sender, address(this), p.amount0Desired);
        if (p.amount1Desired > 0) IERC20(p.token1).transferFrom(msg.sender, address(this), p.amount1Desired);
        return (nextId++, 1, p.amount0Desired, p.amount1Desired);
    }
}

/// Opens pools but refuses every position.
contract RefusingPositionManager {
    function createAndInitializePoolIfNecessary(address, address, uint24, uint160 sqrtPriceX96)
        external
        returns (address)
    {
        return address(new MockPool(sqrtPriceX96));
    }

    function mint(INonfungiblePositionManager.MintParams calldata)
        external
        pure
        returns (uint256, uint128, uint256, uint256)
    {
        revert("position rejected");
    }
}
