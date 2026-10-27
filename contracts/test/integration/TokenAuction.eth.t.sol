pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../../src/TokenAuction.sol";
import "../../src/BondingCurve.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";

/// @dev WETH9's behaviour: deposit mints 1:1, withdraw burns and sends ETH.
contract MockWETH is ERC20 {
    constructor() ERC20("Wrapped Ether", "WETH") {}

    function deposit() external payable {
        _mint(msg.sender, msg.value);
    }

    function withdraw(uint256 amount) external {
        _burn(msg.sender, amount);
        (bool ok,) = msg.sender.call{value: amount}("");
        require(ok, "WETH: ETH transfer failed");
    }
}

contract MockUSDC is ERC20 {
    constructor() ERC20("Mock USDC", "mUSDC") {
        _mint(msg.sender, 1_000_000_000e6);
    }
}

/// @dev A buyer that cannot receive ETH, so any refund to it fails.
contract NoReceiveBuyer {
    function buy(TokenAuction auction, uint256 id, uint256 amount) external payable {
        auction.buyTokensWithETH{value: msg.value}(id, amount);
    }
}

contract TokenAuctionEthTest is Test {
    TokenAuction auction;
    MockWETH weth;
    MockUSDC usdc;

    address creator = makeAddr("creator");
    address feeRecipient = makeAddr("feeRecipient");
    address buyer = makeAddr("buyer");

    uint256 constant FEE_BPS = 100; // 1%
    uint256 constant BASE_PRICE = 1e30; // 0.000001 ETH per token (wei × 1e18)
    uint256 constant SLOPE = 1e21;      // +1,000 wei per whole token sold (× 1e18)
    uint256 constant MAX_RAISE = 5 ether;

    function setUp() public {
        weth = new MockWETH();
        usdc = new MockUSDC();
        auction = new TokenAuction(
            feeRecipient, FEE_BPS, INonfungiblePositionManager(makeAddr("positionManager")), IWETH9(address(weth))
        );
        auction.setPaymentTokenAllowed(address(weth), true);
        auction.setPaymentTokenAllowed(address(usdc), true);
        vm.deal(buyer, 100 ether);
    }

    // --- helpers -------------------------------------------------------------

    function _preset(address paymentToken, uint256 basePrice, uint256 maxRaise)
        internal
        pure
        returns (TokenAuction.LaunchPreset memory)
    {
        return TokenAuction.LaunchPreset({
            paymentToken: paymentToken,
            maxSupply: 1_000_000_000e18,
            basePrice: basePrice,
            slope: SLOPE,
            maxRaise: maxRaise,
            liquidityBps: 8_000
        });
    }

    function _launchEth() internal returns (uint256 id) {
        auction.setLaunchPreset(_preset(address(weth), BASE_PRICE, MAX_RAISE));
        vm.prank(creator);
        id = auction.launch("Eth Coin", "ETHC", "", address(weth));
    }

    function _token(uint256 id) internal view returns (AuctionToken) {
        (TokenAuction.AuctionConfig memory cfg,,,) = auction.auctions(id);
        return cfg.token;
    }

    function _quote(uint256 id, uint256 amount) internal view returns (uint256 total) {
        (uint256 cost, uint256 fee) = auction.getBuyCost(id, amount);
        return cost + fee;
    }

    // --- presets per payment token -------------------------------------------

    function test_launch_usesThePresetForThePaymentToken() public {
        auction.setLaunchPreset(_preset(address(weth), BASE_PRICE, MAX_RAISE));
        auction.setLaunchPreset(_preset(address(usdc), 1e22, 10e6));

        vm.startPrank(creator);
        uint256 ethId = auction.launch("Eth Coin", "ETHC", "", address(weth));
        uint256 usdcId = auction.launch("Usd Coin", "USDC2", "", address(usdc));
        vm.stopPrank();

        (TokenAuction.AuctionConfig memory e,,,) = auction.auctions(ethId);
        (TokenAuction.AuctionConfig memory u,,,) = auction.auctions(usdcId);
        assertEq(address(e.paymentToken), address(weth));
        assertEq(e.maxRaise, MAX_RAISE);
        assertEq(e.basePrice, BASE_PRICE);
        assertEq(address(u.paymentToken), address(usdc));
        assertEq(u.maxRaise, 10e6);
        assertEq(u.basePrice, 1e22);
    }

    function test_launch_revertsForTokenWithoutPreset() public {
        auction.setLaunchPreset(_preset(address(usdc), 1e22, 10e6));
        vm.prank(creator);
        vm.expectRevert("No launch preset");
        auction.launch("Eth Coin", "ETHC", "", address(weth));
    }

    function test_launch_stopsWhenPaymentTokenDisallowed() public {
        auction.setLaunchPreset(_preset(address(weth), BASE_PRICE, MAX_RAISE));
        auction.setPaymentTokenAllowed(address(weth), false);
        vm.prank(creator);
        vm.expectRevert("Payment token not allowed");
        auction.launch("Eth Coin", "ETHC", "", address(weth));
    }

    // --- buying with ETH -----------------------------------------------------

    function test_buyWithETH_wrapsExactCostAndRefundsTheRest() public {
        uint256 id = _launchEth();
        uint256 amount = 100_000e18;
        (uint256 cost, uint256 fee) = auction.getBuyCost(id, amount);

        vm.prank(buyer);
        auction.buyTokensWithETH{value: 1 ether}(id, amount);

        assertEq(_token(id).balanceOf(buyer), amount, "tokens minted");
        assertEq(buyer.balance, 100 ether - cost - fee, "only cost + fee spent, rest refunded");
        assertEq(weth.balanceOf(address(auction)), cost + fee, "payment held as WETH");
        assertEq(address(auction).balance, 0, "no ETH left in the contract");
        assertEq(auction.custodied(address(weth)), cost + fee);
        assertEq(auction.protocolFees(address(weth)), fee);
        (,, uint256 raised,) = auction.auctions(id);
        assertEq(raised, cost);
    }

    function test_buyWithETH_revertsWhenValueBelowCost() public {
        uint256 id = _launchEth();
        uint256 amount = 100_000e18;
        uint256 total = _quote(id, amount);

        vm.prank(buyer);
        vm.expectRevert("Slippage exceeded");
        auction.buyTokensWithETH{value: total - 1}(id, amount);
    }

    function test_buyWithETH_exactValueLeavesNoRefund() public {
        uint256 id = _launchEth();
        uint256 amount = 100_000e18;
        uint256 total = _quote(id, amount);

        vm.prank(buyer);
        auction.buyTokensWithETH{value: total}(id, amount);
        assertEq(buyer.balance, 100 ether - total);
    }

    function test_buyWithETH_revertsForAuctionNotPricedInETH() public {
        auction.setLaunchPreset(_preset(address(usdc), 1e22, 10e6));
        vm.prank(creator);
        uint256 id = auction.launch("Usd Coin", "USDC2", "", address(usdc));

        vm.prank(buyer);
        vm.expectRevert("Not priced in ETH");
        auction.buyTokensWithETH{value: 1 ether}(id, 1e18);
    }

    function test_buyWithETH_disabledWithoutWeth() public {
        TokenAuction noEth = new TokenAuction(
            feeRecipient, FEE_BPS, INonfungiblePositionManager(makeAddr("positionManager")), IWETH9(address(0))
        );
        noEth.setPaymentTokenAllowed(address(weth), true);
        noEth.setLaunchPreset(_preset(address(weth), BASE_PRICE, MAX_RAISE));
        vm.prank(creator);
        uint256 id = noEth.launch("Eth Coin", "ETHC", "", address(weth));

        vm.prank(buyer);
        vm.expectRevert("Not priced in ETH");
        noEth.buyTokensWithETH{value: 1 ether}(id, 1e18);
    }

    function test_buyWithETH_overshootGraduatesAndRefunds() public {
        uint256 id = _launchEth();

        vm.prank(buyer);
        auction.buyTokensWithETH{value: 50 ether}(id, 1_000_000_000e18);

        (, TokenAuction.AuctionState state, uint256 raised,) = auction.auctions(id);
        assertEq(uint256(state), uint256(TokenAuction.AuctionState.COMPLETED), "filled to the threshold");
        uint256 fee = (raised * FEE_BPS) / 10_000;
        assertEq(buyer.balance, 100 ether - raised - fee, "unused ETH refunded");
        assertEq(weth.balanceOf(address(auction)), raised + fee);
    }

    function test_buyWithETH_revertsWhenRefundCannotBeSent() public {
        uint256 id = _launchEth();
        NoReceiveBuyer contractBuyer = new NoReceiveBuyer();
        vm.deal(address(contractBuyer), 0);

        vm.prank(buyer);
        vm.expectRevert("ETH transfer failed");
        contractBuyer.buy{value: 1 ether}(auction, id, 100_000e18);
    }

    function test_buyWithETH_blockedWhilePaused() public {
        uint256 id = _launchEth();
        auction.pause();

        vm.prank(buyer);
        vm.expectRevert(Pausable.EnforcedPause.selector);
        auction.buyTokensWithETH{value: 1 ether}(id, 1e18);
    }

    function test_buyWithWETH_stillWorksThroughBuyTokens() public {
        uint256 id = _launchEth();
        uint256 amount = 100_000e18;
        uint256 total = _quote(id, amount);

        vm.startPrank(buyer);
        weth.deposit{value: total}();
        weth.approve(address(auction), total);
        auction.buyTokens(id, amount, total);
        vm.stopPrank();

        assertEq(_token(id).balanceOf(buyer), amount);
    }

    // --- selling for ETH -----------------------------------------------------

    function test_sellForETH_paysPlainETH() public {
        uint256 id = _launchEth();
        uint256 amount = 200_000e18;
        vm.prank(buyer);
        auction.buyTokensWithETH{value: 1 ether}(id, amount);
        uint256 balanceBefore = buyer.balance;

        (,,, uint256 sold) = auction.auctions(id);
        uint256 proceeds = BondingCurve.calculateSellProceeds(sold, amount / 2, BASE_PRICE, SLOPE);
        uint256 fee = (proceeds * FEE_BPS) / 10_000;

        vm.prank(buyer);
        auction.sellTokensForETH(id, amount / 2, proceeds - fee);

        assertEq(buyer.balance, balanceBefore + proceeds - fee, "paid in ETH");
        assertEq(_token(id).balanceOf(buyer), amount / 2, "sold tokens burned");
        assertEq(address(auction).balance, 0, "no ETH left in the contract");
        assertEq(weth.balanceOf(address(auction)), auction.custodied(address(weth)), "custody matches holdings");
    }

    function test_sellForETH_worksWhilePaused() public {
        uint256 id = _launchEth();
        vm.prank(buyer);
        auction.buyTokensWithETH{value: 1 ether}(id, 100_000e18);
        auction.pause();

        vm.prank(buyer);
        auction.sellTokensForETH(id, 100_000e18, 0);
        assertEq(_token(id).balanceOf(buyer), 0);
    }

    function test_sellForETH_revertsForAuctionNotPricedInETH() public {
        auction.setLaunchPreset(_preset(address(usdc), 1e22, 10e6));
        vm.prank(creator);
        uint256 id = auction.launch("Usd Coin", "USDC2", "", address(usdc));
        usdc.transfer(buyer, 1_000e6);
        vm.startPrank(buyer);
        usdc.approve(address(auction), type(uint256).max);
        auction.buyTokens(id, 1e18, type(uint256).max);

        vm.expectRevert("Not priced in ETH");
        auction.sellTokensForETH(id, 1e18, 0);
        vm.stopPrank();
    }

    function test_sellForETH_respectsMinProceeds() public {
        uint256 id = _launchEth();
        vm.prank(buyer);
        auction.buyTokensWithETH{value: 1 ether}(id, 100_000e18);

        vm.prank(buyer);
        vm.expectRevert("Slippage exceeded");
        auction.sellTokensForETH(id, 100_000e18, 1 ether);
    }

    // --- direct ETH ----------------------------------------------------------

    function test_receive_rejectsDirectETH() public {
        vm.prank(buyer);
        (bool ok,) = address(auction).call{value: 1 ether}("");
        assertFalse(ok, "plain transfers are refused");
        assertEq(address(auction).balance, 0);
    }
}
