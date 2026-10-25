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

contract TokenAuctionSellTest is Test {
    TokenAuction auction;
    MockUSDC usdc;

    address creator = makeAddr("creator");
    address feeRecipient = makeAddr("feeRecipient");
    address buyer = makeAddr("buyer");

    uint256 constant FEE_BPS = 250;
    uint256 constant BASE_PRICE = 1e6;
    uint256 constant SLOPE = 1e3;
    uint256 constant MAX_RAISE = 50_000e6;

    function setUp() public {
        usdc = new MockUSDC();
        auction = new TokenAuction(feeRecipient, FEE_BPS, INonfungiblePositionManager(makeAddr("positionManager")));
        usdc.transfer(buyer, 10_000_000e6);
    }

    function _create(uint256 maxRaise) internal returns (uint256 id) {
        vm.prank(creator);
        id = auction.createAuction(
            TokenAuction.AuctionParams({
                name: "TestToken",
                symbol: "TT",
                metadataURI: "",
                maxSupply: 1_000_000_000e18,
                paymentToken: address(usdc),
                basePrice: BASE_PRICE,
                slope: SLOPE,
                maxRaise: maxRaise,
                liquidityBps: 5_000
            })
        );
    }

    function _buy(address who, uint256 id, uint256 amount) internal {
        vm.startPrank(who);
        usdc.approve(address(auction), type(uint256).max);
        auction.buyTokens(id, amount, type(uint256).max);
        vm.stopPrank();
    }

    function _token(uint256 id) internal view returns (AuctionToken) {
        (TokenAuction.AuctionConfig memory cfg,,,) = auction.auctions(id);
        return cfg.token;
    }

    function _totals(uint256 id) internal view returns (uint256 raised, uint256 sold) {
        (,, raised, sold) = auction.auctions(id);
    }

    function test_sell_paysCurvePriceMinusFeeAndBurns() public {
        uint256 id = _create(MAX_RAISE);
        _buy(buyer, id, 1_000e18);
        (uint256 raisedBefore,) = _totals(id);

        uint256 proceeds = BondingCurve.calculateSellProceeds(1_000e18, 400e18, BASE_PRICE, SLOPE);
        uint256 fee = (proceeds * FEE_BPS) / 10_000;
        uint256 usdcBefore = usdc.balanceOf(buyer);

        vm.expectEmit(true, true, false, true);
        emit TokenAuction.TokensSold(id, buyer, 400e18, proceeds, fee, raisedBefore - proceeds, 600e18);
        vm.prank(buyer);
        auction.sellTokens(id, 400e18, 0);

        assertEq(usdc.balanceOf(buyer) - usdcBefore, proceeds - fee, "seller paid curve price minus fee");
        assertEq(usdc.balanceOf(feeRecipient), (BondingCurve.calculateBuyCost(0, 1_000e18, BASE_PRICE, SLOPE) * FEE_BPS) / 10_000 + fee, "fee on buy and on sell");
        assertEq(_token(id).balanceOf(buyer), 600e18, "sold tokens burned");
        assertEq(_token(id).totalSupply(), 600e18);
        (uint256 raised, uint256 sold) = _totals(id);
        assertEq(sold, 600e18);
        assertEq(raised, raisedBefore - proceeds);
        assertEq(auction.custodied(address(usdc)), raised, "custody tracks the raise");
        assertEq(usdc.balanceOf(address(auction)), raised, "contract holds exactly the raise");
    }

    function test_sell_lowersThePrice() public {
        uint256 id = _create(MAX_RAISE);
        _buy(buyer, id, 1_000e18);
        uint256 before = auction.getSpotPrice(id);
        vm.prank(buyer);
        auction.sellTokens(id, 500e18, 0);
        assertLt(auction.getSpotPrice(id), before);
    }

    /// Buy then sell the same amount: the buyer never ends up with more money.
    /// Buys round up and sells round down, so even with fees set to zero a
    /// round trip cannot profit.
    function testFuzz_sell_roundTripNeverProfits(uint256 amount, uint256 priorSupply, bool zeroFee) public {
        // Stay below the graduation threshold: 8,000 tokens cost 40,000 USDC
        // against a 50,000 USDC threshold, so the curve stays open.
        amount = bound(amount, 1, 4_000e18);
        priorSupply = bound(priorSupply, 0, 4_000e18);
        if (zeroFee) auction.setDefaultFeeBps(0);
        uint256 id = _create(MAX_RAISE);
        address other = makeAddr("other");
        usdc.transfer(other, 1_000_000e6);
        if (priorSupply > 0) _buy(other, id, priorSupply);

        uint256 start = usdc.balanceOf(buyer);
        _buy(buyer, id, amount);
        vm.prank(buyer);
        auction.sellTokens(id, amount, 0);
        assertLe(usdc.balanceOf(buyer), start, "no profit from a round trip");
    }

    /// Every holder can always sell everything back, in any order, and the
    /// contract never runs short.
    function test_sell_everyoneCanExit() public {
        uint256 id = _create(MAX_RAISE);
        address[3] memory holders = [makeAddr("a"), makeAddr("b"), makeAddr("c")];
        uint256[3] memory sizes = [uint256(1_234e18), 7e18 + 3, 999e18];
        for (uint256 i; i < 3; i++) {
            usdc.transfer(holders[i], 1_000_000e6);
            _buy(holders[i], id, sizes[i]);
        }
        // Sell back in a different order than bought, partly in pieces.
        vm.prank(holders[1]);
        auction.sellTokens(id, sizes[1], 0);
        vm.prank(holders[0]);
        auction.sellTokens(id, 600e18, 0);
        vm.prank(holders[2]);
        auction.sellTokens(id, sizes[2], 0);
        vm.prank(holders[0]);
        auction.sellTokens(id, sizes[0] - 600e18, 0);

        (uint256 raised, uint256 sold) = _totals(id);
        assertEq(sold, 0, "every token sold back");
        assertEq(_token(id).totalSupply(), 0);
        assertEq(usdc.balanceOf(address(auction)), raised, "only rounding dust remains, and it is accounted for");
        // Each trade rounds by under 2 units (one per term): 7 trades, under 14.
        assertLt(raised, 14, "only rounding dust remains");
    }

    function test_sell_respectsMinProceeds() public {
        uint256 id = _create(MAX_RAISE);
        _buy(buyer, id, 1_000e18);
        uint256 proceeds = BondingCurve.calculateSellProceeds(1_000e18, 400e18, BASE_PRICE, SLOPE);
        uint256 net = proceeds - (proceeds * FEE_BPS) / 10_000;

        vm.prank(buyer);
        vm.expectRevert("Slippage exceeded");
        auction.sellTokens(id, 400e18, net + 1);

        vm.prank(buyer);
        auction.sellTokens(id, 400e18, net); // exactly at the bound succeeds
    }

    function test_sell_revertsBeyondBalance() public {
        uint256 id = _create(MAX_RAISE);
        _buy(buyer, id, 100e18);
        vm.prank(buyer);
        vm.expectRevert("Exceeds balance");
        auction.sellTokens(id, 100e18 + 1, 0);
    }

    function test_sell_revertsOnZeroAmount() public {
        uint256 id = _create(MAX_RAISE);
        vm.prank(buyer);
        vm.expectRevert("Zero amount");
        auction.sellTokens(id, 0, 0);
    }

    /// Once the threshold is reached the curve is closed: holders wait for the
    /// Uniswap pool instead.
    function test_sell_revertsAfterGraduation() public {
        uint256 cost = BondingCurve.calculateBuyCost(0, 1_000e18, BASE_PRICE, SLOPE);
        uint256 id = _create(cost);
        _buy(buyer, id, 1_000e18); // fills the threshold
        vm.prank(buyer);
        vm.expectRevert("Auction not active");
        auction.sellTokens(id, 1e18, 0);
    }

    function test_burnFrom_onlyByAuctionContract() public {
        uint256 id = _create(MAX_RAISE);
        _buy(buyer, id, 100e18);
        AuctionToken token = _token(id);
        vm.prank(buyer);
        vm.expectRevert(abi.encodeWithSelector(Ownable.OwnableUnauthorizedAccount.selector, buyer));
        token.burnFrom(buyer, 1e18);
    }
}
