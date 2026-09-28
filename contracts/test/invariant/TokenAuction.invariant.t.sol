pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../../src/TokenAuction.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockUSDC is ERC20 {
    constructor() ERC20("Mock USDC", "mUSDC") {}

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
}

/// @dev Drives randomized buys against a single live auction so the fuzzer can
///      probe for state that violates the protocol's accounting invariants.
contract BuyHandler is Test {
    TokenAuction public auction;
    MockUSDC public usdc;
    uint256 public auctionId;

    address[] public actors;
    uint256 public ghostSold; // sum of amounts from every successful buy

    constructor(TokenAuction _auction, MockUSDC _usdc, uint256 _auctionId) {
        auction = _auction;
        usdc = _usdc;
        auctionId = _auctionId;

        for (uint256 i = 0; i < 3; i++) {
            address actor = makeAddr(string(abi.encodePacked("actor", vm.toString(i))));
            actors.push(actor);
            usdc.mint(actor, 1e30);
            vm.prank(actor);
            usdc.approve(address(auction), type(uint256).max);
        }
    }

    function buy(uint256 actorSeed, uint256 amount) external {
        address actor = actors[actorSeed % actors.length];
        amount = bound(amount, 1e15, 1e21); // 0.001 .. 1,000 tokens

        vm.prank(actor);
        try auction.buyTokens(auctionId, amount) {
            ghostSold += amount;
        } catch {
            // Expected reverts (exceeds max raise, auction completed) are fine —
            // the invariants must still hold whether or not a buy succeeds.
        }
    }
}

contract TokenAuctionInvariantTest is Test {
    TokenAuction auction;
    MockUSDC usdc;
    BuyHandler handler;
    uint256 auctionId;

    address creator = makeAddr("creator");
    address feeRecipient = makeAddr("feeRecipient");

    uint256 constant BASE_PRICE = 1e6;
    uint256 constant SLOPE = 1e3;
    uint256 constant MAX_RAISE = 1e10; // 10,000 USDC — reachable under fuzzing
    uint256 constant MAX_SUPPLY = 1_000_000_000e18;

    function setUp() public {
        usdc = new MockUSDC();
        auction = new TokenAuction(feeRecipient, 250);

        uint256 startTime = block.timestamp + 1;
        vm.prank(creator);
        auctionId = auction.createAuction(
            "TestToken", "TT", MAX_SUPPLY,
            address(usdc), BASE_PRICE, SLOPE, MAX_RAISE,
            startTime, block.timestamp + 3650 days
        );
        vm.warp(startTime);

        handler = new BuyHandler(auction, usdc, auctionId);

        // Only fuzz through the handler's buy entrypoint.
        bytes4[] memory selectors = new bytes4[](1);
        selectors[0] = BuyHandler.buy.selector;
        targetSelector(FuzzSelector({addr: address(handler), selectors: selectors}));
        targetContract(address(handler));
    }

    function _token() internal view returns (AuctionToken) {
        (TokenAuction.AuctionConfig memory cfg,,,) = auction.auctions(auctionId);
        return cfg.token;
    }

    function _totals() internal view returns (uint256 raised, uint256 sold) {
        (,, raised, sold) = auction.auctions(auctionId);
    }

    /// totalRaised must never exceed the configured max raise.
    function invariant_raisedNeverExceedsMaxRaise() public view {
        (uint256 raised,) = _totals();
        assertLe(raised, MAX_RAISE);
    }

    /// Every sold token is minted 1:1, so supply must equal totalSold.
    function invariant_tokenSupplyEqualsTotalSold() public view {
        (, uint256 sold) = _totals();
        assertEq(_token().totalSupply(), sold);
    }

    /// Sold tokens can never exceed the token's max supply.
    function invariant_soldNeverExceedsMaxSupply() public view {
        (, uint256 sold) = _totals();
        assertLe(sold, MAX_SUPPLY);
    }

    /// Solvency: the contract must custody exactly the funds it says it raised.
    /// The handler never withdraws, so the balance must track totalRaised 1:1.
    function invariant_contractCustodiesRaisedFunds() public view {
        (uint256 raised,) = _totals();
        assertEq(usdc.balanceOf(address(auction)), raised);
    }

    /// The contract's own accounting must match the handler's independent tally.
    function invariant_totalSoldMatchesGhost() public view {
        (, uint256 sold) = _totals();
        assertEq(sold, handler.ghostSold());
    }
}
