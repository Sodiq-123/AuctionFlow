pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AuctionToken is ERC20, Ownable {
    uint256 public maxSupply;

    /// @notice Off-chain metadata for the token, such as its image, usually an
    ///         IPFS or HTTPS URI pointing at JSON. Set once at launch.
    string public metadataURI;

    /// @notice False until the auction migrates liquidity to Uniswap. While
    ///         false, tokens can be minted but not moved, so no holder can
    ///         seed or price the Uniswap pool before the auction does.
    bool public transfersEnabled;

    event TransfersEnabled();

    constructor(
        string memory name_,
        string memory symbol_,
        uint256 maxSupply_,
        address owner_,
        string memory metadataURI_
    ) ERC20(name_, symbol_) Ownable(owner_) {
        maxSupply = maxSupply_;
        metadataURI = metadataURI_;
    }

    function mint(address to, uint256 amount) external onlyOwner {
        require(totalSupply() + amount <= maxSupply, "Exceeds max supply");
        _mint(to, amount);
    }

    /// @notice Burn tokens held by the owner (the auction contract), such as
    ///         liquidity tokens Uniswap didn't use.
    function burn(uint256 amount) external onlyOwner {
        _burn(msg.sender, amount);
    }

    /// @notice Burn a holder's tokens when they sell them back to the curve.
    ///         Only possible before migration: the auction contract renounces
    ///         ownership when it migrates, after which no one can burn or mint.
    function burnFrom(address account, uint256 amount) external onlyOwner {
        require(!transfersEnabled, "Trading migrated");
        _burn(account, amount);
    }

    /// @notice Permanently unlock transfers. Called by the auction contract
    ///         as part of migration.
    function enableTransfers() external onlyOwner {
        require(!transfersEnabled, "Already enabled");
        transfersEnabled = true;
        emit TransfersEnabled();
    }

    /// @dev Mints (from == 0) and burns (to == 0) are always allowed; ordinary
    ///      transfers wait for migration.
    function _update(address from, address to, uint256 value) internal override {
        if (from != address(0) && to != address(0)) {
            require(transfersEnabled, "Transfers locked");
        }
        super._update(from, to, value);
    }
}
