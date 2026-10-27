pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../../src/TokenAuction.sol";
import "../../src/BondingCurve.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @dev WETH9's behaviour: deposit mints 1:1, withdraw burns and sends ETH.
contract InvariantWETH is ERC20 {
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

/// @dev Drives a WETH-priced auction through every way in and out: plain ETH
///      and WETH buys, sells paid in ETH or WETH, direct ETH and WETH
///      transfers, fee claims and sweeps.
contract EthTradeHandler is Test {
    TokenAuction public auction;
    InvariantWETH public weth;
    uint256 public auctionId;
    address public owner;

    address[] public actors;
    uint256 public ghostSold;    // tokens outstanding: bought minus sold back
    uint256 public ghostDonated; // WETH sent to the auction directly
    uint256 public ghostSwept;   // WETH the owner recovered
    uint256 public ghostFeesPaid;
    uint256 public ghostFeesClaimed;

    constructor(TokenAuction _auction, InvariantWETH _weth, uint256 _auctionId, address _owner) {
        auction = _auction;
        weth = _weth;
        auctionId = _auctionId;
        owner = _owner;

        for (uint256 i = 0; i < 3; i++) {
            address actor = makeAddr(string(abi.encodePacked("ethActor", vm.toString(i))));
            actors.push(actor);
            vm.deal(actor, 1_000_000 ether);
            vm.startPrank(actor);
            weth.deposit{value: 500_000 ether}();
            weth.approve(address(auction), type(uint256).max);
            vm.stopPrank();
        }
    }

    function _token() internal view returns (AuctionToken) {
        (TokenAuction.AuctionConfig memory cfg,,,) = auction.auctions(auctionId);
        return cfg.token;
    }

    function _raised() internal view returns (uint256 raised) {
        (,, raised,) = auction.auctions(auctionId);
    }

    /// What an actor holds in ETH and WETH together.
    function _wealth(address actor) internal view returns (uint256) {
        return actor.balance + weth.balanceOf(actor);
    }

    function buy(uint256 actorSeed, uint256 amount, uint256 overpay, bool withETH) external {
        address actor = actors[actorSeed % actors.length];
        amount = bound(amount, 1e15, 1e24);
        (uint256 cost, uint256 fee) = auction.getBuyCost(auctionId, amount);
        uint256 value = cost + fee + bound(overpay, 0, 10 ether);

        uint256 tokensBefore = _token().balanceOf(actor);
        uint256 wealthBefore = _wealth(actor);
        uint256 raisedBefore = _raised();
        vm.prank(actor);
        bool ok;
        if (withETH) {
            try auction.buyTokensWithETH{value: value}(auctionId, amount) { ok = true; } catch {}
        } else {
            try auction.buyTokens(auctionId, amount, type(uint256).max) { ok = true; } catch {}
        }
        if (!ok) return; // graduated: expected
        ghostSold += _token().balanceOf(actor) - tokensBefore;
        ghostFeesPaid += (wealthBefore - _wealth(actor)) - (_raised() - raisedBefore);
    }

    function sell(uint256 actorSeed, uint256 amount, bool forETH) external {
        address actor = actors[actorSeed % actors.length];
        uint256 held = _token().balanceOf(actor);
        if (held == 0) return;
        amount = bound(amount, 1, held);

        uint256 wealthBefore = _wealth(actor);
        uint256 raisedBefore = _raised();
        vm.prank(actor);
        bool ok;
        if (forETH) {
            try auction.sellTokensForETH(auctionId, amount, 0) { ok = true; } catch {}
        } else {
            try auction.sellTokens(auctionId, amount, 0) { ok = true; } catch {}
        }
        if (!ok) return; // graduated: expected
        ghostSold -= held - _token().balanceOf(actor);
        ghostFeesPaid += (raisedBefore - _raised()) - (_wealth(actor) - wealthBefore);
    }

    /// Plain ETH sent straight to the contract must always be refused.
    function sendETH(uint256 actorSeed, uint256 amount) external {
        address actor = actors[actorSeed % actors.length];
        amount = bound(amount, 1, 1 ether);
        vm.prank(actor);
        (bool ok,) = address(auction).call{value: amount}("");
        require(!ok, "direct ETH accepted");
    }

    function donateWETH(uint256 actorSeed, uint256 amount) external {
        address actor = actors[actorSeed % actors.length];
        amount = bound(amount, 1, 1 ether);
        vm.prank(actor);
        weth.transfer(address(auction), amount);
        ghostDonated += amount;
    }

    function claimFees() external {
        address recipient = auction.protocolFeeRecipient();
        uint256 before = weth.balanceOf(recipient);
        try auction.claimProtocolFees(weth) {
            ghostFeesClaimed += weth.balanceOf(recipient) - before;
        } catch {}
    }

    function sweep() external {
        uint256 before = weth.balanceOf(owner);
        vm.prank(owner);
        try auction.sweep(weth, owner) {
            ghostSwept += weth.balanceOf(owner) - before;
        } catch {}
    }
}

contract TokenAuctionEthInvariantTest is Test {
    TokenAuction auction;
    InvariantWETH weth;
    EthTradeHandler handler;
    uint256 auctionId;

    address creator = makeAddr("creator");
    address feeRecipient = makeAddr("feeRecipient");

    uint256 constant BASE_PRICE = 1e30; // 0.000001 ETH per token (wei × 1e18)
    uint256 constant SLOPE = 1e21;      // +1,000 wei per whole token sold (× 1e18)
    uint256 constant MAX_RAISE = 200 ether; // reachable under fuzzing

    function setUp() public {
        weth = new InvariantWETH();
        auction = new TokenAuction(
            feeRecipient, 100, INonfungiblePositionManager(makeAddr("positionManager")), IWETH9(address(weth))
        );
        auction.setPaymentTokenAllowed(address(weth), true);
        auction.setLaunchPreset(
            TokenAuction.LaunchPreset({
                paymentToken: address(weth),
                maxSupply: 1_000_000_000e18,
                basePrice: BASE_PRICE,
                slope: SLOPE,
                maxRaise: MAX_RAISE,
                liquidityBps: 8_000
            })
        );
        vm.prank(creator);
        auctionId = auction.launch("Eth Coin", "ETHC", "", address(weth));

        handler = new EthTradeHandler(auction, weth, auctionId, address(this));
        bytes4[] memory selectors = new bytes4[](6);
        selectors[0] = EthTradeHandler.buy.selector;
        selectors[1] = EthTradeHandler.sell.selector;
        selectors[2] = EthTradeHandler.sendETH.selector;
        selectors[3] = EthTradeHandler.donateWETH.selector;
        selectors[4] = EthTradeHandler.claimFees.selector;
        selectors[5] = EthTradeHandler.sweep.selector;
        targetSelector(FuzzSelector({addr: address(handler), selectors: selectors}));
        targetContract(address(handler));
    }

    function _totals() internal view returns (uint256 raised, uint256 sold) {
        (,, raised, sold) = auction.auctions(auctionId);
    }

    /// ETH is only ever held wrapped: nothing stays behind between calls.
    function invariant_holdsNoETH() public view {
        assertEq(address(auction).balance, 0);
    }

    function invariant_custodiedEqualsRaisedPlusFees() public view {
        (uint256 raised,) = _totals();
        assertEq(auction.custodied(address(weth)), raised + auction.protocolFees(address(weth)));
    }

    function invariant_balanceFullyAccounted() public view {
        (uint256 raised,) = _totals();
        assertEq(
            weth.balanceOf(address(auction)),
            raised + auction.protocolFees(address(weth)) + handler.ghostDonated() - handler.ghostSwept()
        );
        assertLe(handler.ghostSwept(), handler.ghostDonated());
    }

    /// Whether paid in ETH or WETH, every fee is still accrued or was paid out,
    /// and buyers were charged exactly cost plus fee, with the rest refunded.
    function invariant_feesFullyAccounted() public view {
        assertEq(auction.protocolFees(address(weth)) + handler.ghostFeesClaimed(), handler.ghostFeesPaid());
    }

    function invariant_raiseCoversFullSellBack() public view {
        (uint256 raised, uint256 sold) = _totals();
        assertGe(raised, BondingCurve.calculateSellProceeds(sold, sold, BASE_PRICE, SLOPE));
    }

    function invariant_totalSoldMatchesGhost() public view {
        (, uint256 sold) = _totals();
        assertEq(sold, handler.ghostSold());
    }
}
