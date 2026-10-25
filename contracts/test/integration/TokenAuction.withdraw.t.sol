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

contract TokenAuctionWithdrawTest is Test {
    TokenAuction auction;
    MockUSDC usdc;

    address creator = makeAddr("creator");
    address feeRecipient = makeAddr("feeRecipient");
    address buyer = makeAddr("buyer");
    address stranger = makeAddr("stranger");

    uint256 constant FEE_BPS = 250;
    uint256 constant BASE_PRICE = 1e6;
    uint256 constant SLOPE = 1e3;
    uint256 constant MAX_RAISE = 50_000e6;

    function setUp() public {
        usdc = new MockUSDC();
        auction = new TokenAuction(feeRecipient, FEE_BPS, INonfungiblePositionManager(makeAddr("positionManager")));
        usdc.transfer(buyer, 10_000_000 * 1e6);
    }

    function _createAuction(string memory symbol) internal returns (uint256 id) {
        vm.prank(creator);
        id = auction.createAuction(
            TokenAuction.AuctionParams({
                name: "TestToken",
                symbol: symbol,
                metadataURI: "",
                maxSupply: 1_000_000_000e18,
                paymentToken: address(usdc),
                basePrice: BASE_PRICE,
                slope: SLOPE,
                maxRaise: MAX_RAISE,
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

    /// Buy far more than the threshold allows: the purchase partially fills
    /// up to `maxRaise` and graduates the auction.
    function _graduate(uint256 id) internal {
        _buy(id, 1_000_000e18);
        (, TokenAuction.AuctionState state,,) = auction.auctions(id);
        assertEq(uint256(state), uint256(TokenAuction.AuctionState.COMPLETED), "graduated");
    }

    function _raised(uint256 id) internal view returns (uint256 raised) {
        (,, raised,) = auction.auctions(id);
    }

    /// The creator's share of a raise: what isn't reserved for the Uniswap
    /// pool (these tests use a 50% liquidity share).
    function _creatorShare(uint256 raised) internal pure returns (uint256) {
        return raised - (raised * 5_000) / 10_000;
    }

    // --- happy path ----------------------------------------------------------

    function test_withdrawProceeds_paysCreatorAfterGraduation() public {
        uint256 id = _createAuction("TT");
        _graduate(id);
        uint256 raised = _raised(id);
        assertEq(raised, MAX_RAISE, "raised exactly the threshold");
        assertEq(usdc.balanceOf(address(auction)), raised, "contract custodies proceeds");

        uint256 before = usdc.balanceOf(creator);
        vm.expectEmit(true, true, false, true);
        emit TokenAuction.ProceedsWithdrawn(id, creator, _creatorShare(raised));
        vm.prank(creator);
        auction.withdrawProceeds(id);

        assertEq(usdc.balanceOf(creator) - before, _creatorShare(raised), "creator received their share");
        assertEq(
            usdc.balanceOf(address(auction)), raised - _creatorShare(raised),
            "liquidity share stays reserved for the pool"
        );
        assertTrue(auction.proceedsWithdrawn(id), "withdrawn flag set");
    }

    // --- guards --------------------------------------------------------------

    function test_withdrawProceeds_revertsForNonCreator() public {
        uint256 id = _createAuction("TT");
        _graduate(id);

        vm.prank(stranger);
        vm.expectRevert("Not creator");
        auction.withdrawProceeds(id);
    }

    /// Before graduation the raise isn't final: holders can still sell back
    /// into it.
    function test_withdrawProceeds_revertsBeforeGraduation() public {
        uint256 id = _createAuction("TT");
        _buy(id, 1_000e18);

        vm.prank(creator);
        vm.expectRevert("Auction not completed");
        auction.withdrawProceeds(id);
    }

    function test_withdrawProceeds_revertsOnSecondWithdrawal() public {
        uint256 id = _createAuction("TT");
        _graduate(id);

        vm.prank(creator);
        auction.withdrawProceeds(id);

        vm.prank(creator);
        vm.expectRevert("Already withdrawn");
        auction.withdrawProceeds(id);
    }

    // --- isolation between auctions -----------------------------------------

    function test_withdrawProceeds_doesNotTouchOtherAuctionsFunds() public {
        uint256 first = _createAuction("ONE");
        _graduate(first);
        uint256 firstRaised = _raised(first);

        // A second auction from the same creator, funded but still trading.
        uint256 second = _createAuction("TWO");
        _buy(second, 500e18);
        uint256 secondRaised = _raised(second);

        vm.prank(creator);
        auction.withdrawProceeds(first);

        assertEq(usdc.balanceOf(creator), _creatorShare(firstRaised), "only first auction paid out");
        assertEq(
            usdc.balanceOf(address(auction)),
            secondRaised + (firstRaised - _creatorShare(firstRaised)),
            "second auction's funds and first auction's liquidity share untouched"
        );
        assertFalse(auction.proceedsWithdrawn(second), "second still unwithdrawn");
    }
}
