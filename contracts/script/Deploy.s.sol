pragma solidity ^0.8.24;

import "forge-std/Script.sol";
import "../src/TokenAuction.sol";

contract Deploy is Script {
    function run() external {
        uint256 deployerKey = vm.envUint("PRIVATE_KEY");
        address feeRecipient = vm.envAddress("FEE_RECIPIENT");
        INonfungiblePositionManager positionManager = INonfungiblePositionManager(_positionManager());

        vm.startBroadcast(deployerKey);
        TokenAuction auction = new TokenAuction(feeRecipient, 250, positionManager); // 2.5% fee
        vm.stopBroadcast();

        console.log("TokenAuction deployed at:", address(auction));
        console.log("Uniswap v3 position manager:", address(positionManager));
    }

    /// @dev Uniswap v3 NonfungiblePositionManager per chain. Override with
    ///      UNISWAP_POSITION_MANAGER for any other chain.
    function _positionManager() internal view returns (address) {
        if (block.chainid == 8453) return 0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1; // Base
        if (block.chainid == 84532) return 0x27F971cb582BF9E50F397e4d29a5C7A34f11faA2; // Base Sepolia
        return vm.envAddress("UNISWAP_POSITION_MANAGER");
    }
}
