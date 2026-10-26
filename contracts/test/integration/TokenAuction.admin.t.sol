pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../../src/TokenAuction.sol";
import "../../src/BondingCurve.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockUSDC is ERC20 {
    constructor() ERC20("Mock USDC", "mUSDC") {
        _mint(msg.sender, 1_000_000_000 * 1e6);
    }
}

/// Burns 1% of every transfer, so the recipient receives less than was sent.
contract FeeOnTransferToken is ERC20 {
    constructor() ERC20("Taxed", "TAX") {
        _mint(msg.sender, 1_000_000_000 * 1e6);
    }

    function _update(address from, address to, uint256 value) internal override {
        if (from != address(0) && to != address(0)) {
            uint256 burned = value / 100;
            super._update(from, address(0), burned);
            value -= burned;
        }
        super._update(from, to, value);
    }
}

contract TokenAuctionAdminTest is Test {
    TokenAuction auction;
    MockUSDC usdc;

    address creator = makeAddr("creator");
    address feeRecipient = makeAddr("feeRecipient");
    address buyer = makeAddr("buyer");
    address stranger = makeAddr("stranger");
    address treasury = makeAddr("treasury");

    uint256 constant FEE_BPS = 250;
    uint256 constant BASE_PRICE = 1e24; // 1 USDC per token (payment units × 1e18)
    uint256 constant SLOPE = 1e21;      // +0.001 USDC per token sold (× 1e18)
    uint256 constant MAX_RAISE = 50_000e6;

    function setUp() public {
        usdc = new MockUSDC();
        auction = new TokenAuction(feeRecipient, FEE_BPS, INonfungiblePositionManager(makeAddr("positionManager")));
        auction.setPaymentTokenAllowed(address(usdc), true);
        usdc.transfer(buyer, 10_000_000e6);
    }

    function _createAuction(address paymentToken, uint256 maxRaise) internal returns (uint256 id) {
        vm.prank(creator);
        id = auction.createAuction(
            TokenAuction.AuctionParams({
                name: "TestToken",
                symbol: "TT",
                metadataURI: "",
                maxSupply: 1_000_000_000e18,
                paymentToken: paymentToken,
                basePrice: BASE_PRICE,
                slope: SLOPE,
                maxRaise: maxRaise,
                liquidityBps: 5_000
            })
        );
    }

    function _buy(uint256 id, uint256 amount) internal {
        vm.startPrank(buyer);
        usdc.approve(address(auction), type(uint256).max);
        auction.buyTokens(id, amount, type(uint256).max);
        vm.stopPrank();
    }

    // --- constructor --------------------------------------------------------

    function test_constructor_rejectsZeroFeeRecipient() public {
        vm.expectRevert("Zero fee recipient");
        new TokenAuction(address(0), FEE_BPS, INonfungiblePositionManager(makeAddr("positionManager")));
    }

    function test_constructor_rejectsZeroPositionManager() public {
        vm.expectRevert("Zero position manager");
        new TokenAuction(feeRecipient, FEE_BPS, INonfungiblePositionManager(address(0)));
    }

    function test_constructor_rejectsFeeAboveCap() public {
        uint256 cap = auction.MAX_FEE_BPS();
        vm.expectRevert("Fee too high");
        new TokenAuction(feeRecipient, cap + 1, INonfungiblePositionManager(makeAddr("positionManager")));
    }

    // --- fee recipient ------------------------------------------------------

    /// Fees accrue until claimed, so a new recipient also receives fees
    /// earned before the change: a blacklisted or lost recipient can be
    /// replaced without losing anything.
    function test_setProtocolFeeRecipient_redirectsUnclaimedFees() public {
        uint256 id = _createAuction(address(usdc), MAX_RAISE);
        _buy(id, 1_000e18);

        vm.expectEmit(true, true, false, false);
        emit TokenAuction.ProtocolFeeRecipientUpdated(feeRecipient, treasury);
        auction.setProtocolFeeRecipient(treasury);

        vm.expectEmit(true, true, false, true);
        uint256 cost = BondingCurve.calculateBuyCost(0, 1_000e18, BASE_PRICE, SLOPE);
        emit TokenAuction.ProtocolFeesClaimed(address(usdc), treasury, (cost * FEE_BPS) / 10_000);
        auction.claimProtocolFees(usdc);
        assertEq(usdc.balanceOf(treasury), (cost * FEE_BPS) / 10_000, "new recipient paid");
        assertEq(usdc.balanceOf(feeRecipient), 0, "old recipient not paid");
    }

    function test_claimProtocolFees_revertsWhenNothingAccrued() public {
        vm.expectRevert("Nothing to claim");
        auction.claimProtocolFees(usdc);
    }

    function test_setProtocolFeeRecipient_onlyOwner() public {
        vm.prank(stranger);
        vm.expectRevert(abi.encodeWithSelector(Ownable.OwnableUnauthorizedAccount.selector, stranger));
        auction.setProtocolFeeRecipient(stranger);
    }

    function test_setProtocolFeeRecipient_rejectsZero() public {
        vm.expectRevert("Zero fee recipient");
        auction.setProtocolFeeRecipient(address(0));
    }

    // --- default fee --------------------------------------------------------

    function test_setDefaultFeeBps_onlyAffectsNewAuctions() public {
        uint256 before = _createAuction(address(usdc), MAX_RAISE);
        auction.setDefaultFeeBps(100);
        uint256 later = _createAuction(address(usdc), MAX_RAISE);

        (TokenAuction.AuctionConfig memory a,,,) = auction.auctions(before);
        (TokenAuction.AuctionConfig memory b,,,) = auction.auctions(later);
        assertEq(a.protocolFeeBps, FEE_BPS, "existing auction keeps its terms");
        assertEq(b.protocolFeeBps, 100, "new auction uses new fee");
    }

    function test_setDefaultFeeBps_rejectsAboveCap() public {
        uint256 cap = auction.MAX_FEE_BPS();
        vm.expectRevert("Fee too high");
        auction.setDefaultFeeBps(cap + 1);
    }

    function test_setDefaultFeeBps_onlyOwner() public {
        vm.prank(stranger);
        vm.expectRevert(abi.encodeWithSelector(Ownable.OwnableUnauthorizedAccount.selector, stranger));
        auction.setDefaultFeeBps(0);
    }

    // --- custody + sweep ----------------------------------------------------

    function test_custodied_tracksRaisedAndWithdrawn() public {
        uint256 cost = BondingCurve.calculateBuyCost(0, 1_000e18, BASE_PRICE, SLOPE);
        uint256 id = _createAuction(address(usdc), cost); // the purchase graduates it
        _buy(id, 1_000e18);
        uint256 fee = (cost * FEE_BPS) / 10_000;
        assertEq(auction.custodied(address(usdc)), cost + fee, "raise and unclaimed fee");

        vm.prank(creator);
        auction.withdrawProceeds(id);
        // The liquidity share stays owed until migration moves it into the pool.
        assertEq(auction.custodied(address(usdc)), (cost * 5_000) / 10_000 + fee);

        auction.claimProtocolFees(usdc);
        assertEq(auction.custodied(address(usdc)), (cost * 5_000) / 10_000);
    }

    function test_sweep_recoversDirectTransfer() public {
        usdc.transfer(address(auction), 20e6); // e.g. a faucet sent to the contract

        vm.expectEmit(true, true, false, true);
        emit TokenAuction.Swept(address(usdc), treasury, 20e6);
        auction.sweep(usdc, treasury);

        assertEq(usdc.balanceOf(treasury), 20e6);
        assertEq(usdc.balanceOf(address(auction)), 0);
    }

    function test_sweep_neverTouchesCreatorFunds() public {
        uint256 cost = BondingCurve.calculateBuyCost(0, 1_000e18, BASE_PRICE, SLOPE);
        uint256 id = _createAuction(address(usdc), cost); // the purchase graduates it
        _buy(id, 1_000e18);
        uint256 owed = auction.custodied(address(usdc));
        usdc.transfer(address(auction), 20e6);

        auction.sweep(usdc, treasury);
        assertEq(usdc.balanceOf(treasury), 20e6, "only the excess moved");
        assertEq(usdc.balanceOf(address(auction)), owed, "creator funds intact");

        // The creator can still withdraw in full afterwards.
        vm.prank(creator);
        auction.withdrawProceeds(id);
        assertEq(usdc.balanceOf(creator), cost - (cost * 5_000) / 10_000, "creator's share, liquidity still reserved");
    }

    function test_sweep_revertsWithNoExcess() public {
        uint256 id = _createAuction(address(usdc), MAX_RAISE);
        _buy(id, 1_000e18);
        vm.expectRevert("Nothing to sweep");
        auction.sweep(usdc, treasury);
    }

    function test_sweep_onlyOwner() public {
        usdc.transfer(address(auction), 20e6);
        vm.prank(stranger);
        vm.expectRevert(abi.encodeWithSelector(Ownable.OwnableUnauthorizedAccount.selector, stranger));
        auction.sweep(usdc, stranger);
    }

    function test_sweep_rejectsZeroRecipient() public {
        usdc.transfer(address(auction), 20e6);
        vm.expectRevert("Zero recipient");
        auction.sweep(usdc, address(0));
    }

    // --- payment token safety ----------------------------------------------

    function test_buyTokens_rejectsFeeOnTransferPaymentToken() public {
        FeeOnTransferToken taxed = new FeeOnTransferToken();
        taxed.transfer(buyer, 10_000_000e6);
        auction.setPaymentTokenAllowed(address(taxed), true);
        uint256 id = _createAuction(address(taxed), MAX_RAISE);

        vm.startPrank(buyer);
        taxed.approve(address(auction), type(uint256).max);
        vm.expectRevert("Unsupported payment token");
        auction.buyTokens(id, 1_000e18, type(uint256).max);
        vm.stopPrank();
    }

    // --- payment token allowlist ----------------------------------------------

    function test_createAuction_rejectsUnapprovedPaymentToken() public {
        MockUSDC other = new MockUSDC();
        vm.prank(creator);
        vm.expectRevert("Payment token not allowed");
        auction.createAuction(
            TokenAuction.AuctionParams({
                name: "TestToken",
                symbol: "TT",
                metadataURI: "",
                maxSupply: 1_000_000_000e18,
                paymentToken: address(other),
                basePrice: BASE_PRICE,
                slope: SLOPE,
                maxRaise: MAX_RAISE,
                liquidityBps: 5_000
            })
        );
    }

    function test_setLaunchPreset_rejectsUnapprovedPaymentToken() public {
        MockUSDC other = new MockUSDC();
        vm.expectRevert("Payment token not allowed");
        auction.setLaunchPreset(
            TokenAuction.LaunchPreset({
                paymentToken: address(other),
                maxSupply: 1_000_000_000e18,
                basePrice: BASE_PRICE,
                slope: SLOPE,
                maxRaise: MAX_RAISE,
                liquidityBps: 5_000
            })
        );
    }

    /// Disallowing a token stops new launches in it; auctions already priced
    /// in it trade on.
    function test_setPaymentTokenAllowed_disallowOnlyAffectsNewAuctions() public {
        uint256 id = _createAuction(address(usdc), MAX_RAISE);

        vm.expectEmit(true, false, false, true);
        emit TokenAuction.PaymentTokenAllowedUpdated(address(usdc), false);
        auction.setPaymentTokenAllowed(address(usdc), false);

        _buy(id, 1_000e18);
        assertEq(auction.userPurchases(id, buyer), 1_000e18, "existing auction still trades");

        vm.expectRevert("Payment token not allowed");
        _createAuction(address(usdc), MAX_RAISE);
    }

    function test_setPaymentTokenAllowed_onlyOwner() public {
        vm.prank(stranger);
        vm.expectRevert(abi.encodeWithSelector(Ownable.OwnableUnauthorizedAccount.selector, stranger));
        auction.setPaymentTokenAllowed(address(usdc), false);
    }

    function test_setPaymentTokenAllowed_rejectsZero() public {
        vm.expectRevert("Zero payment token");
        auction.setPaymentTokenAllowed(address(0), true);
    }

    // --- ownership ------------------------------------------------------------

    /// Ownership moves in two steps, so a mistyped address (say, a Safe on the
    /// wrong chain) can't take the contract: nothing changes until the new
    /// owner accepts.
    function test_transferOwnership_takesEffectOnlyWhenAccepted() public {
        auction.transferOwnership(treasury);
        assertEq(auction.owner(), address(this), "still the old owner");
        assertEq(auction.pendingOwner(), treasury);

        vm.prank(treasury);
        auction.acceptOwnership();
        assertEq(auction.owner(), treasury);
        assertEq(auction.pendingOwner(), address(0));
    }

    function test_acceptOwnership_onlyPendingOwner() public {
        auction.transferOwnership(treasury);
        vm.prank(stranger);
        vm.expectRevert(abi.encodeWithSelector(Ownable.OwnableUnauthorizedAccount.selector, stranger));
        auction.acceptOwnership();
    }
}
