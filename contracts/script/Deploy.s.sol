pragma solidity ^0.8.24;

import "forge-std/Script.sol";
import "../src/TokenAuction.sol";

/// Deploys TokenAuction and configures it in one broadcast: payment tokens,
/// fees, the standard launch presets and, if NEW_OWNER is set, the start of
/// the ownership handover. The new owner (a Safe) must then call
/// `acceptOwnership`.
///
/// Env: PRIVATE_KEY, FEE_RECIPIENT; optional DEFAULT_FEE_BPS (default 100),
/// LP_FEE_SHARE_BPS (default 2000), NEW_OWNER.
contract Deploy is Script {
    function run() external {
        uint256 deployerKey = vm.envUint("PRIVATE_KEY");
        address feeRecipient = vm.envAddress("FEE_RECIPIENT");
        uint256 feeBps = vm.envOr("DEFAULT_FEE_BPS", uint256(100));
        uint256 lpFeeShareBps = vm.envOr("LP_FEE_SHARE_BPS", uint256(2000));
        address newOwner = vm.envOr("NEW_OWNER", address(0));
        INonfungiblePositionManager positionManager = INonfungiblePositionManager(_positionManager());

        address usdc = _usdc();
        address weth = _weth();

        vm.startBroadcast(deployerKey);
        TokenAuction auction = new TokenAuction(feeRecipient, feeBps, positionManager, IWETH9(weth));
        auction.setDefaultLpFeeShareBps(lpFeeShareBps);
        if (usdc != address(0)) auction.setPaymentTokenAllowed(usdc, true);
        if (weth != address(0)) auction.setPaymentTokenAllowed(weth, true);
        if (block.chainid == 84532) {
            auction.setLaunchPreset(_testnetPreset(usdc, 10e6));        // 10 USDC
            auction.setLaunchPreset(_testnetPreset(weth, 0.01 ether));  // 0.01 ETH
        }
        if (newOwner != address(0)) auction.transferOwnership(newOwner);
        vm.stopBroadcast();

        console.log("TokenAuction deployed at:", address(auction));
        console.log("Uniswap v3 position manager:", address(positionManager));
        console.log("Allowed payment token (USDC):", usdc);
        console.log("Allowed payment token (WETH):", weth);
        console.log("Protocol fee (bps):", feeBps);
        console.log("Protocol share of pool fees (bps):", lpFeeShareBps);
        if (newOwner != address(0)) console.log("Pending owner (must acceptOwnership):", newOwner);
    }

    /// @dev The testnet launch: a billion tokens, 80% of the raise to the
    ///      pool, graduating at `maxRaise`. The curve is the 10 USDC curve
    ///      (base 2e15, slope 4e7) scaled to the goal, so every preset sells
    ///      ~659M tokens at graduation with a 14.2x price rise. Mainnet
    ///      presets are set by the owner once their goals are decided.
    function _testnetPreset(address paymentToken, uint256 maxRaise)
        internal
        pure
        returns (TokenAuction.LaunchPreset memory)
    {
        return TokenAuction.LaunchPreset({
            paymentToken: paymentToken,
            maxSupply: 1_000_000_000e18,
            basePrice: (2e15 * maxRaise) / 10e6,
            slope: (4e7 * maxRaise) / 10e6,
            maxRaise: maxRaise,
            liquidityBps: 8_000
        });
    }

    /// @dev Circle's USDC per chain, approved as a payment token at deploy.
    ///      Elsewhere set PAYMENT_TOKEN, or approve tokens after deploying.
    function _usdc() internal view returns (address) {
        if (block.chainid == 8453) return 0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913; // Base
        if (block.chainid == 84532) return 0x036CbD53842c5426634e7929541eC2318f3dCF7e; // Base Sepolia
        return vm.envOr("PAYMENT_TOKEN", address(0));
    }

    /// @dev WETH, the same predeploy on Base and Base Sepolia. Elsewhere set
    ///      WETH; leaving it unset disables buying and selling with ETH.
    function _weth() internal view returns (address) {
        if (block.chainid == 8453 || block.chainid == 84532) return 0x4200000000000000000000000000000000000006;
        return vm.envOr("WETH", address(0));
    }

    /// @dev Uniswap v3 NonfungiblePositionManager per chain. Override with
    ///      UNISWAP_POSITION_MANAGER for any other chain.
    function _positionManager() internal view returns (address) {
        if (block.chainid == 8453) return 0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1; // Base
        if (block.chainid == 84532) return 0x27F971cb582BF9E50F397e4d29a5C7A34f11faA2; // Base Sepolia
        return vm.envAddress("UNISWAP_POSITION_MANAGER");
    }
}
