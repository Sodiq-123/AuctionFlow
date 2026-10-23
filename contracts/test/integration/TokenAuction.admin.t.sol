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
    uint256 constant BASE_PRICE = 1e6;
    uint256 constant SLOPE = 1e3;
    uint256 constant MAX_RAISE = 50_000e6;

    uint256 startTime;
    uint256 endTime;

    function setUp() public {
        usdc = new MockUSDC();
        auction = new TokenAuction(feeRecipient, FEE_BPS);
        usdc.transfer(buyer, 10_000_000e6);
    }

    function _createAuction(address paymentToken, uint256 maxRaise) internal returns (uint256 id) {
        startTime = block.timestamp + 1;
        endTime = block.timestamp + 72 hours;
        vm.prank(creator);
        id = auction.createAuction(
            TokenAuction.AuctionParams({
                name: "TestToken",
                symbol: "TT",
                maxSupply: 1_000_000_000e18,
                paymentToken: paymentToken,
                basePrice: BASE_PRICE,
                slope: SLOPE,
                maxRaise: maxRaise,
                startTime: startTime,
                endTime: endTime,
                liquidityBps: 5_000
            })
        );
        vm.warp(startTime);
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
        new TokenAuction(address(0), FEE_BPS);
    }

    function test_constructor_rejectsFeeAboveCap() public {
        uint256 cap = auction.MAX_FEE_BPS();
        vm.expectRevert("Fee too high");
        new TokenAuction(feeRecipient, cap + 1);
    }

    // --- fee recipient ------------------------------------------------------

    function test_setProtocolFeeRecipient_redirectsLaterFees() public {
        uint256 id = _createAuction(address(usdc), MAX_RAISE);

        vm.expectEmit(true, true, false, false);
        emit TokenAuction.ProtocolFeeRecipientUpdated(feeRecipient, treasury);
        auction.setProtocolFeeRecipient(treasury);

        _buy(id, 1_000e18);
        uint256 cost = BondingCurve.calculateBuyCost(0, 1_000e18, BASE_PRICE, SLOPE);
        assertEq(usdc.balanceOf(treasury), (cost * FEE_BPS) / 10_000, "new recipient paid");
        assertEq(usdc.balanceOf(feeRecipient), 0, "old recipient not paid");
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
        uint256 id = _createAuction(address(usdc), MAX_RAISE);
        _buy(id, 1_000e18);
        uint256 cost = BondingCurve.calculateBuyCost(0, 1_000e18, BASE_PRICE, SLOPE);
        assertEq(auction.custodied(address(usdc)), cost);

        vm.warp(endTime + 1);
        vm.prank(creator);
        auction.completeAuction(id);
        vm.prank(creator);
        auction.withdrawProceeds(id);
        assertEq(auction.custodied(address(usdc)), 0);
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
        uint256 id = _createAuction(address(usdc), MAX_RAISE);
        _buy(id, 1_000e18);
        uint256 owed = auction.custodied(address(usdc));
        usdc.transfer(address(auction), 20e6);

        auction.sweep(usdc, treasury);
        assertEq(usdc.balanceOf(treasury), 20e6, "only the excess moved");
        assertEq(usdc.balanceOf(address(auction)), owed, "creator funds intact");

        // The creator can still withdraw in full afterwards.
        vm.warp(endTime + 1);
        vm.startPrank(creator);
        auction.completeAuction(id);
        auction.withdrawProceeds(id);
        vm.stopPrank();
        assertEq(usdc.balanceOf(creator), owed);
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
        uint256 id = _createAuction(address(taxed), MAX_RAISE);

        vm.startPrank(buyer);
        taxed.approve(address(auction), type(uint256).max);
        vm.expectRevert("Unsupported payment token");
        auction.buyTokens(id, 1_000e18, type(uint256).max);
        vm.stopPrank();
    }
}
