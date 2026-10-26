pragma solidity ^0.8.24;

import "forge-std/Script.sol";
import "../src/TokenAuction.sol";

contract Deploy is Script {
    function run() external {
        uint256 deployerKey = vm.envUint("PRIVATE_KEY");
        address feeRecipient = vm.envAddress("FEE_RECIPIENT");
        INonfungiblePositionManager positionManager = INonfungiblePositionManager(_positionManager());

        address usdc = _usdc();

        vm.startBroadcast(deployerKey);
        TokenAuction auction = new TokenAuction(feeRecipient, 250, positionManager); // 2.5% fee
        if (usdc != address(0)) auction.setPaymentTokenAllowed(usdc, true);
        vm.stopBroadcast();

        console.log("TokenAuction deployed at:", address(auction));
        console.log("Uniswap v3 position manager:", address(positionManager));
        console.log("Allowed payment token (USDC):", usdc);
    }

    /// @dev Circle's USDC per chain, approved as a payment token at deploy.
    ///      Elsewhere set PAYMENT_TOKEN, or approve tokens after deploying.
    function _usdc() internal view returns (address) {
        if (block.chainid == 8453) return 0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913; // Base
        if (block.chainid == 84532) return 0x036CbD53842c5426634e7929541eC2318f3dCF7e; // Base Sepolia
        return vm.envOr("PAYMENT_TOKEN", address(0));
    }

    /// @dev Uniswap v3 NonfungiblePositionManager per chain. Override with
    ///      UNISWAP_POSITION_MANAGER for any other chain.
    function _positionManager() internal view returns (address) {
        if (block.chainid == 8453) return 0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1; // Base
        if (block.chainid == 84532) return 0x27F971cb582BF9E50F397e4d29a5C7A34f11faA2; // Base Sepolia
        return vm.envAddress("UNISWAP_POSITION_MANAGER");
    }
}
