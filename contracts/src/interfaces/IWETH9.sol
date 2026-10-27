pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/// @notice Wrapped ether, as deployed at 0x4200…0006 on Base.
interface IWETH9 is IERC20 {
    function deposit() external payable;
    function withdraw(uint256 amount) external;
}
