pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../../src/TokenAuction.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// Behaves like USDC's blacklist: transfers to or from a blacklisted address
/// revert.
contract BlacklistableUSDC is ERC20 {
    mapping(address => bool) public blacklisted;

    constructor() ERC20("Mock USDC", "mUSDC") {
        _mint(msg.sender, 1_000_000_000e6);
    }

    function decimals() public pure override returns (uint8) {
        return 6;
    }

    function blacklist(address account) external {
        blacklisted[account] = true;
    }

    function _update(address from, address to, uint256 value) internal override {
        require(!blacklisted[from] && !blacklisted[to], "Blacklisted");
        super._update(from, to, value);
    }
}

/// Creates pools but rejects every position, so migration returns the whole
/// reserve to the creator: the path where a payout to the creator is certain.
contract RejectingPositionManager {
    function createAndInitializePoolIfNecessary(address, address, uint24, uint160 sqrtPriceX96)
        external
        returns (address)
    {
        return address(new FixedPricePool(sqrtPriceX96));
    }

    function mint(INonfungiblePositionManager.MintParams calldata)
        external
        pure
        returns (uint256, uint128, uint256, uint256)
    {
        revert("position rejected");
    }
}

contract FixedPricePool {
    uint160 public sqrtPriceX96;

    constructor(uint160 price) {
        sqrtPriceX96 = price;
    }

    function slot0() external view returns (uint160, int24, uint16, uint16, uint16, uint8, bool) {
        return (sqrtPriceX96, 0, 0, 0, 0, 0, true);
    }
}

/// A blacklisted fee recipient or creator can only block its own claim, never
/// a holder's exit or a token's migration.
contract TokenAuctionBlacklistTest is Test {
    TokenAuction auction;
    BlacklistableUSDC usdc;

    address feeRecipient = makeAddr("feeRecipient");
    address creator = makeAddr("creator");
    address buyer = makeAddr("buyer");

    function setUp() public {
        usdc = new BlacklistableUSDC();
        auction = new TokenAuction(
            feeRecipient, 100, INonfungiblePositionManager(address(new RejectingPositionManager()))
        , IWETH9(address(0)));
        auction.setPaymentTokenAllowed(address(usdc), true);
        auction.setLaunchPreset(
            TokenAuction.LaunchPreset({
                paymentToken: address(usdc),
                maxSupply: 1_000_000_000e18,
                basePrice: 2e15,
                slope: 4e7,
                maxRaise: 10e6,
                liquidityBps: 8_000
            })
        );
        usdc.transfer(buyer, 1_000e6);
        vm.prank(buyer);
        usdc.approve(address(auction), type(uint256).max);
    }

    function _launch() internal returns (uint256 id) {
        vm.prank(creator);
        id = auction.launch("TestToken", "TT", "", address(usdc));
    }

    function test_blacklistedFeeRecipient_cannotBlockSells() public {
        uint256 id = _launch();
        vm.prank(buyer);
        auction.buyTokens(id, 100_000_000e18, type(uint256).max);
        usdc.blacklist(feeRecipient);

        uint256 before = usdc.balanceOf(buyer);
        vm.prank(buyer);
        auction.sellTokens(id, 100_000_000e18, 0);
        assertGt(usdc.balanceOf(buyer), before, "holder exited");

        // Only the recipient's own claim is blocked, and replacing the
        // recipient recovers the fees.
        vm.expectRevert("Blacklisted");
        auction.claimProtocolFees(usdc);
        address replacement = makeAddr("replacement");
        auction.setProtocolFeeRecipient(replacement);
        auction.claimProtocolFees(usdc);
        assertGt(usdc.balanceOf(replacement), 0, "fees recovered");
    }

    function test_blacklistedCreator_cannotBlockMigration() public {
        uint256 id = _launch();
        vm.prank(buyer);
        auction.buyTokens(id, 1_000_000_000e18, type(uint256).max); // graduates
        usdc.blacklist(creator);

        auction.migrate(id);
        (, TokenAuction.AuctionState state,,) = auction.auctions(id);
        assertEq(uint256(state), uint256(TokenAuction.AuctionState.MIGRATED));
        (TokenAuction.AuctionConfig memory cfg,,,) = auction.auctions(id);
        assertTrue(cfg.token.transfersEnabled(), "holders' tokens unlocked");
        assertEq(auction.claimable(address(usdc), creator), 8e6, "reserve credited, not sent");

        vm.prank(creator);
        vm.expectRevert("Blacklisted");
        auction.claim(usdc);
    }
}
