pragma solidity ^0.8.24;

import "forge-std/Script.sol";
import "../src/TokenAuction.sol";

contract Deploy is Script {
    function run() external {
        uint256 deployerKey = vm.envUint("PRIVATE_KEY");
        address feeRecipient = vm.envAddress("FEE_RECIPIENT");

        vm.startBroadcast(deployerKey);

        TokenAuction auction = new TokenAuction(feeRecipient, 250); // 2.5% fee

        vm.stopBroadcast();

        console.log("TokenAuction deployed at:", address(auction));
    }
}