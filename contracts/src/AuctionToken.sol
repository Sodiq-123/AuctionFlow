pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AuctionToken is ERC20, Ownable {
    uint256 public maxSupply;

    constructor(
        string memory name_,
        string memory symbol_,
        uint256 maxSupply_,
        address owner_
    ) ERC20(name_, symbol_) Ownable(owner_) {
        maxSupply = maxSupply_;
    }

    function mint(address to, uint256 amount) external onlyOwner {
        require(totalSupply() + amount <= maxSupply, "Exceeds max supply");
        _mint(to, amount);
    }
}
