export const TokenAuctionAbi =
{
  "abi": [
    {
      "type": "constructor",
      "inputs": [
        {
          "name": "feeRecipient_",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "defaultFeeBps_",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "MAX_FEE_BPS",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "MIN_LIQUIDITY_BPS",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "auctionCount",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "auctions",
      "inputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "config",
          "type": "tuple",
          "internalType": "struct TokenAuction.AuctionConfig",
          "components": [
            {
              "name": "token",
              "type": "address",
              "internalType": "contract AuctionToken"
            },
            {
              "name": "paymentToken",
              "type": "address",
              "internalType": "contract IERC20"
            },
            {
              "name": "basePrice",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "slope",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "maxRaise",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "startTime",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "endTime",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "creator",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "protocolFeeBps",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "liquidityBps",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        },
        {
          "name": "state",
          "type": "uint8",
          "internalType": "enum TokenAuction.AuctionState"
        },
        {
          "name": "totalRaised",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "totalSold",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "buyTokens",
      "inputs": [
        {
          "name": "auctionId",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "amount",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "maxCost",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "completeAuction",
      "inputs": [
        {
          "name": "auctionId",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "createAuction",
      "inputs": [
        {
          "name": "p",
          "type": "tuple",
          "internalType": "struct TokenAuction.AuctionParams",
          "components": [
            {
              "name": "name",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "symbol",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "maxSupply",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "paymentToken",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "basePrice",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "slope",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "maxRaise",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "startTime",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "endTime",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "liquidityBps",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        }
      ],
      "outputs": [
        {
          "name": "auctionId",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "custodied",
      "inputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "defaultFeeBps",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getBuyCost",
      "inputs": [
        {
          "name": "auctionId",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "amount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "cost",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "fee",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getSpotPrice",
      "inputs": [
        {
          "name": "auctionId",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "owner",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "proceedsWithdrawn",
      "inputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "protocolFeeRecipient",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "renounceOwnership",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setDefaultFeeBps",
      "inputs": [
        {
          "name": "feeBps",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setProtocolFeeRecipient",
      "inputs": [
        {
          "name": "recipient",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "sweep",
      "inputs": [
        {
          "name": "token",
          "type": "address",
          "internalType": "contract IERC20"
        },
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "transferOwnership",
      "inputs": [
        {
          "name": "newOwner",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "userPurchases",
      "inputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "withdrawProceeds",
      "inputs": [
        {
          "name": "auctionId",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "AuctionCompleted",
      "inputs": [
        {
          "name": "auctionId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "totalRaised",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "totalSold",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "AuctionCreated",
      "inputs": [
        {
          "name": "auctionId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "creator",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "token",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "paymentToken",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "basePrice",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "slope",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "maxRaise",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "startTime",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "endTime",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "liquidityBps",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "AuctionMigrated",
      "inputs": [
        {
          "name": "auctionId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "liquidityPool",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "DefaultFeeBpsUpdated",
      "inputs": [
        {
          "name": "previous",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "current",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "OwnershipTransferred",
      "inputs": [
        {
          "name": "previousOwner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "newOwner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "ProceedsWithdrawn",
      "inputs": [
        {
          "name": "auctionId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "creator",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "ProtocolFeeRecipientUpdated",
      "inputs": [
        {
          "name": "previous",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "current",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Swept",
      "inputs": [
        {
          "name": "token",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "to",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "TokensPurchased",
      "inputs": [
        {
          "name": "auctionId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "buyer",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "cost",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "protocolFee",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "newTotalRaised",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "newTotalSold",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "OwnableInvalidOwner",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "OwnableUnauthorizedAccount",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "ReentrancyGuardReentrantCall",
      "inputs": []
    },
    {
      "type": "error",
      "name": "SafeERC20FailedOperation",
      "inputs": [
        {
          "name": "token",
          "type": "address",
          "internalType": "address"
        }
      ]
    }
  ],
  "bytecode": {
    "object": "0x608060405234801562000010575f80fd5b5060405162005dc538038062005dc583398181016040528101906200003691906200037c565b336001620000596200004d620001ec60201b60201c565b6200021560201b60201c565b5f01819055505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620000d2575f6040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620000c99190620003d2565b60405180910390fd5b620000e3816200021e60201b60201c565b505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160362000155576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200014c906200044b565b60405180910390fd5b6103e88111156200019d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200019490620004b9565b60405180910390fd5b8160055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806006819055505050620004d9565b5f7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f005f1b905090565b5f819050919050565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6200030e82620002e3565b9050919050565b620003208162000302565b81146200032b575f80fd5b50565b5f815190506200033e8162000315565b92915050565b5f819050919050565b620003588162000344565b811462000363575f80fd5b50565b5f8151905062000376816200034d565b92915050565b5f8060408385031215620003955762000394620002df565b5b5f620003a4858286016200032e565b9250506020620003b78582860162000366565b9150509250929050565b620003cc8162000302565b82525050565b5f602082019050620003e75f830184620003c1565b92915050565b5f82825260208201905092915050565b7f5a65726f2066656520726563697069656e7400000000000000000000000000005f82015250565b5f62000433601283620003ed565b91506200044082620003fd565b602082019050919050565b5f6020820190508181035f830152620004648162000425565b9050919050565b7f46656520746f6f206869676800000000000000000000000000000000000000005f82015250565b5f620004a1600c83620003ed565b9150620004ae826200046b565b602082019050919050565b5f6020820190508181035f830152620004d28162000493565b9050919050565b6158de80620004e75f395ff3fe608060405234801562000010575f80fd5b506004361062000152575f3560e01c806375f0c2f011620000c7578063bcae25a41162000085578063bcae25a414620003b2578063d55be8c614620003d4578063d9f1aed914620003f6578063e521cb921462000416578063efc20dad1462000436578063f2fde38b146200046c5762000152565b806375f0c2f014620002f85780638da5cb5b146200031a578063a4ce25a7146200033c578063b8dc491b146200035c578063b905fe56146200037c5762000152565b806348f719e5116200011557806348f719e51462000225578063571a26a0146200025b5780635c471ad5146200029457806364df049e14620002ca578063715018a614620002ec5762000152565b80630fda366d1462000156578063121a257f146200018c57806321b6288614620001c35780632ad7157314620001e35780634373a2861462000205575b5f80fd5b6200017460048036038101906200016e919062002742565b6200048c565b60405162000183919062002783565b60405180910390f35b620001aa6004803603810190620001a491906200279e565b620004c6565b604051620001ba929190620027e3565b60405180910390f35b620001e16004803603810190620001db919062002742565b62000529565b005b620001ed62000755565b604051620001fc919062002783565b60405180910390f35b6200022360048036038101906200021d919062002742565b6200075b565b005b6200024360048036038101906200023d919062002742565b620007f4565b6040516200025291906200282a565b60405180910390f35b62000279600480360381019062000273919062002742565b62000811565b6040516200028b949392919062002a7e565b60405180910390f35b620002b26004803603810190620002ac919062002afc565b62000998565b604051620002c1919062002783565b60405180910390f35b620002d4620009ad565b604051620002e3919062002b3d565b60405180910390f35b620002f6620009d2565b005b62000302620009e9565b60405162000311919062002783565b60405180910390f35b62000324620009ef565b60405162000333919062002b3d565b60405180910390f35b6200035a600480360381019062000354919062002b58565b62000a16565b005b6200037a600480360381019062000374919062002bf3565b62000ef3565b005b6200039a600480360381019062000394919062002c5e565b62001134565b604051620003a9919062002783565b60405180910390f35b620003bc62001482565b604051620003cb919062002783565b60405180910390f35b620003de62001488565b604051620003ed919062002783565b60405180910390f35b6200041460048036038101906200040e919062002742565b6200148e565b005b6200043460048036038101906200042e919062002afc565b6200180f565b005b6200045460048036038101906200044e919062002cad565b62001948565b60405162000463919062002783565b60405180910390f35b6200048a600480360381019062000484919062002afc565b62001968565b005b5f8060025f8481526020019081526020015f209050620004be81600c0154825f0160020154835f0160030154620019f3565b915050919050565b5f805f60025f8681526020019081526020015f209050620004fa81600c015485835f0160020154845f016003015462001a2d565b9250612710815f01600801548462000513919062002d1f565b6200051f919062002d96565b9150509250929050565b5f60025f8381526020019081526020015f209050805f016007015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480620005d15750620005a2620009ef565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b62000613576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200060a9062002e2b565b60405180910390fd5b805f016006015442116200065e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620006559062002e99565b60405180910390fd5b6001600381111562000675576200067462002a02565b5b81600a015f9054906101000a900460ff1660038111156200069b576200069a62002a02565b5b14620006de576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620006d59062002f07565b60405180910390fd5b600281600a015f6101000a81548160ff0219169083600381111562000708576200070762002a02565b5b0217905550817fc7502df20ccf846bf5005f01564bb502b56dcec19f0e2d0575c4369cc5e3b53b82600b015483600c015460405162000749929190620027e3565b60405180910390a25050565b60015481565b6200076562001ad3565b6103e8811115620007ad576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620007a49062002f75565b60405180910390fd5b7f3062378541f1b58e0547bfb13e7d7585153e442e477e263c6e63d4775b3072a660065482604051620007e2929190620027e3565b60405180910390a18060068190555050565b6004602052805f5260405f205f915054906101000a900460ff1681565b6002602052805f5260405f205f91509050805f01604051806101400160405290815f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201548152602001600482015481526020016005820154815260200160068201548152602001600782015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600882015481526020016009820154815250509080600a015f9054906101000a900460ff169080600b01549080600c0154905084565b6007602052805f5260405f205f915090505481565b60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b620009dc62001ad3565b620009e75f62001b63565b565b6107d081565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b62000a2062001c24565b5f60025f8581526020019081526020015f2090506001600381111562000a4b5762000a4a62002a02565b5b81600a015f9054906101000a900460ff16600381111562000a715762000a7062002a02565b5b1462000ab4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000aab9062002fe3565b60405180910390fd5b805f016005015442101562000b00576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000af79062003051565b60405180910390fd5b805f016006015442111562000b4c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000b4390620030bf565b60405180910390fd5b5f831162000b91576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000b88906200312d565b60405180910390fd5b5f8062000b9f838662001c4c565b8093508194508297505050505f612710845f01600801548462000bc3919062002d1f565b62000bcf919062002d96565b905084818462000be091906200314d565b111562000c24576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000c1b90620031d5565b60405180910390fd5b8284600b015f82825462000c3991906200314d565b925050819055508584600c015f82825462000c5591906200314d565b925050819055508560035f8981526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825462000cb991906200314d565b925050819055508260075f865f016001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825462000d3391906200314d565b92505081905550811562000d7157600284600a015f6101000a81548160ff0219169083600381111562000d6b5762000d6a62002a02565b5b02179055505b62000da3845f016001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16848362001d49565b835f015f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933886040518363ffffffff1660e01b815260040162000e04929190620031f5565b5f604051808303815f87803b15801562000e1c575f80fd5b505af115801562000e2f573d5f803e3d5ffd5b505050503373ffffffffffffffffffffffffffffffffffffffff16877fc938e879cd47aa84d5893377578d6c211ccd96f382228c42c1bb6a8eaa71a08488868589600b01548a600c015460405162000e8c95949392919062003220565b60405180910390a3811562000ee057867fc7502df20ccf846bf5005f01564bb502b56dcec19f0e2d0575c4369cc5e3b53b85600b015486600c015460405162000ed7929190620027e3565b60405180910390a25b5050505062000eee62001f26565b505050565b62000efd62001ad3565b62000f0762001c24565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160362000f78576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000f6f90620032c9565b60405180910390fd5b5f8273ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040162000fb4919062002b3d565b602060405180830381865afa15801562000fd0573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000ff69190620032ff565b90505f60075f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205490508082116200107e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162001075906200337d565b60405180910390fd5b5f81836200108d91906200339d565b9050620010bc84828773ffffffffffffffffffffffffffffffffffffffff1662001f449092919063ffffffff16565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f7b09c29f9106defeccc9ac3b823f3aad0b470d120e5df7aed033b5c43a4bf718836040516200111b919062002783565b60405180910390a35050506200113062001f26565b5050565b5f428260e00135116200117e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620011759062003425565b60405180910390fd5b8160e0013582610100013511620011cc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620011c39062003493565b60405180910390fd5b620011f0826040013583608001358460a001358560c0013586610120013562001f9c565b60015f8154809291906200120490620034b3565b9190505590505f82805f01906200121c91906200350b565b8480602001906200122e91906200350b565b8660400135306040516200124290620026f4565b6200125396959493929190620035c6565b604051809103905ff0801580156200126d573d5f803e3d5ffd5b5090505f60025f8481526020019081526020015f2090505f815f01905082815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550846060016020810190620012e0919062002afc565b816001015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550846080013581600201819055508460a0013581600301819055508460c0013581600401819055508460e001358160050181905550846101000135816006018190555033816007015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060065481600801819055508461012001358160090181905550600182600a015f6101000a81548160ff02191690836003811115620013e857620013e762002a02565b5b02179055503373ffffffffffffffffffffffffffffffffffffffff16847f65ae0fe5726dbcbc237789dda3a8e43b7cfba8b334c2668eb5bba82b42e61978858860600160208101906200143c919062002afc565b89608001358a60a001358b60c001358c60e001358d61010001358e61012001356040516200147298979695949392919062003623565b60405180910390a3505050919050565b60065481565b6103e881565b6200149862001c24565b5f60025f8381526020019081526020015f209050805f016007015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161462001542576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200153990620036fd565b60405180910390fd5b6002600381111562001559576200155862002a02565b5b81600a015f9054906101000a900460ff1660038111156200157f576200157e62002a02565b5b14620015c2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620015b9906200376b565b60405180910390fd5b60045f8381526020019081526020015f205f9054906101000a900460ff161562001623576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200161a90620037d9565b60405180910390fd5b5f81600b015490505f811162001670576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620016679062003847565b60405180910390fd5b600160045f8581526020019081526020015f205f6101000a81548160ff0219169083151502179055508060075f845f016001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546200170c91906200339d565b925050819055506200178a825f016007015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1682845f016001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1662001f449092919063ffffffff16565b815f016007015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16837f579e0e2d0cfdb23711bb6034ac9f2ba41e8965a8e24589d1c3cf5604868661fc83604051620017f8919062002783565b60405180910390a350506200180c62001f26565b50565b6200181962001ad3565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036200188a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200188190620038b5565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fd3890fc76afcfc31cba1dcf2c27b50e2541e4d75039c981855b5b5e03682aea060405160405180910390a38060055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6003602052815f5260405f20602052805f5260405f205f91509150505481565b6200197262001ad3565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620019e5575f6040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620019dc919062002b3d565b60405180910390fd5b620019f08162001b63565b50565b5f670de0b6b3a7640000848362001a0b919062002d1f565b62001a17919062002d96565b8362001a2491906200314d565b90509392505050565b5f8062001a50858562001a41919062002d1f565b670de0b6b3a764000062002183565b90505f62001ab78688600262001a67919062002d1f565b62001a7391906200314d565b878662001a81919062002d1f565b62001a8d919062002d1f565b670de0b6b3a764000080600262001aa5919062002d1f565b62001ab1919062002d1f565b62002183565b9050808262001ac791906200314d565b92505050949350505050565b62001add620021c9565b73ffffffffffffffffffffffffffffffffffffffff1662001afd620009ef565b73ffffffffffffffffffffffffffffffffffffffff161462001b615762001b23620021c9565b6040517f118cdaa700000000000000000000000000000000000000000000000000000000815260040162001b58919062002b3d565b60405180910390fd5b565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b62001c2e620021d0565b600262001c4462001c3e62002214565b6200223d565b5f0181905550565b5f805f83925062001c7085600c015484875f0160020154885f016003015462001a2d565b91505f85600b0154865f016004015462001c8b91906200339d565b90508083101562001ca65783835f9350935093505062001d42565b8083111562001d365762001cce86600c015482885f0160020154895f01600301548962002246565b93505f841162001d15576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162001d0c9062003923565b60405180910390fd5b62001d3386600c015485885f0160020154895f016003015462001a2d565b92505b83836001935093509350505b9250925092565b5f8373ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040162001d85919062002b3d565b602060405180830381865afa15801562001da1573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062001dc79190620032ff565b905062001df83330858773ffffffffffffffffffffffffffffffffffffffff1662002305909392919063ffffffff16565b82818573ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040162001e35919062002b3d565b602060405180830381865afa15801562001e51573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062001e779190620032ff565b62001e8391906200339d565b1462001ec6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162001ebd9062003991565b60405180910390fd5b5f82111562001f205762001f1f3360055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16848773ffffffffffffffffffffffffffffffffffffffff1662002305909392919063ffffffff16565b5b50505050565b600162001f3c62001f3662002214565b6200223d565b5f0181905550565b62001f5383838360016200235f565b62001f9757826040517f5274afe700000000000000000000000000000000000000000000000000000000815260040162001f8e919062002b3d565b60405180910390fd5b505050565b5f841162001fe1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162001fd890620039ff565b60405180910390fd5b5f821162002026576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200201d9062003a6d565b60405180910390fd5b6107d081101580156200203b57506127108111155b6200207d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620020749062003adb565b60405180910390fd5b6200208b85858585620023c3565b15620020ce576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620020c59062003b49565b60405180910390fd5b5f620020de5f8487878a62002246565b90505f620020ee828787620019f3565b90505f62002124612710858762002106919062002d1f565b62002112919062002d96565b670de0b6b3a76400008460016200246e565b90508781846200213591906200314d565b111562002179576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620021709062003bb7565b60405180910390fd5b5050505050505050565b5f8082036200219957620021986012620024c7565b5b6001826001850381620021b157620021b062002d69565b5b0401620021c05f8511620024d8565b02905092915050565b5f33905090565b620021da620024e3565b1562002212576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b5f7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f005f1b905090565b5f819050919050565b5f80600185670de0b6b3a76400008862002261919062002d1f565b6200226d919062002d96565b6200227991906200314d565b90508281111562002288578290505b5f5b81811015620022f7575f600260018484620022a691906200314d565b620022b291906200314d565b620022be919062002d96565b905087620022cf8a838a8a62001a2d565b11620022de57809150620022f0565b600181620022ed91906200339d565b92505b506200228a565b809250505095945050505050565b6200231584848484600162002503565b6200235957836040517f5274afe700000000000000000000000000000000000000000000000000000000815260040162002350919062002b3d565b60405180910390fd5b50505050565b5f8063a9059cbb60e01b9050604051815f525f1960601c86166004528460245260205f60445f808b5af1925060015f51148316620023b5578383151615620023a9573d5f823e3d81fd5b5f873b113d1516831692505b806040525050949350505050565b5f6fffffffffffffffffffffffffffffffff8016851115620023e9576001905062002466565b5f620023f6858762002576565b509050806200240a57600191505062002466565b6200243184876002896200241f919062002d1f565b6200242b919062002d1f565b62002576565b5080915050806200244757600191505062002466565b6200245b83670de0b6b3a764000062002576565b508091505080159150505b949350505050565b5f620024a46200247e836200259f565b80156200249e57505f848062002499576200249862002d69565b5b868809115b620024d8565b620024b1868686620025d1565b620024bd91906200314d565b9050949350505050565b634e487b715f52806020526024601cfd5b5f8115159050919050565b5f6002620024fa620024f462002214565b6200223d565b5f015414905090565b5f806323b872dd60e01b9050604051815f525f1960601c87166004525f1960601c86166024528460445260205f60645f808c5af1925060015f511483166200256357838315161562002557573d5f823e3d81fd5b5f883b113d1516831692505b806040525f606052505095945050505050565b5f805f8385029050841584868304141792506200259383620024d8565b81029150509250929050565b5f60016002836003811115620025ba57620025b962002a02565b5b620025c6919062003be3565b60ff16149050919050565b5f805f620025e08686620026bc565b915091505f82036200260a57838181620025ff57620025fe62002d69565b5b0492505050620026b5565b8184116200262e576200262d620026275f861460126011620026d9565b620024c7565b5b5f8486880990508181118303925080820391505f855f038616905080860495508083049250600181825f0304019050808402831792505f600287600302189050808702600203810290508087026002038102905080870260020381029050808702600203810290508087026002038102905080870260020381029050808402955050505050505b9392505050565b5f805f198385098385029150818110828203039250509250929050565b5f620026e584620024d8565b82841802821890509392505050565b611c8e8062003c1b83390190565b5f80fd5b5f80fd5b5f819050919050565b6200271e816200270a565b811462002729575f80fd5b50565b5f813590506200273c8162002713565b92915050565b5f602082840312156200275a576200275962002702565b5b5f62002769848285016200272c565b91505092915050565b6200277d816200270a565b82525050565b5f602082019050620027985f83018462002772565b92915050565b5f8060408385031215620027b757620027b662002702565b5b5f620027c6858286016200272c565b9250506020620027d9858286016200272c565b9150509250929050565b5f604082019050620027f85f83018562002772565b62002807602083018462002772565b9392505050565b5f8115159050919050565b62002824816200280e565b82525050565b5f6020820190506200283f5f83018462002819565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f819050919050565b5f6200288d62002887620028818462002845565b62002864565b62002845565b9050919050565b5f620028a0826200286d565b9050919050565b5f620028b38262002894565b9050919050565b620028c581620028a7565b82525050565b5f620028d78262002894565b9050919050565b620028e981620028cb565b82525050565b620028fa816200270a565b82525050565b5f6200290c8262002845565b9050919050565b6200291e8162002900565b82525050565b61014082015f8201516200293b5f850182620028ba565b506020820151620029506020850182620028de565b506040820151620029656040850182620028ef565b5060608201516200297a6060850182620028ef565b5060808201516200298f6080850182620028ef565b5060a0820151620029a460a0850182620028ef565b5060c0820151620029b960c0850182620028ef565b5060e0820151620029ce60e085018262002913565b50610100820151620029e5610100850182620028ef565b50610120820151620029fc610120850182620028ef565b50505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b6004811062002a435762002a4262002a02565b5b50565b5f81905062002a558262002a2f565b919050565b5f62002a668262002a46565b9050919050565b62002a788162002a5a565b82525050565b5f6101a08201905062002a945f83018762002924565b62002aa461014083018662002a6d565b62002ab461016083018562002772565b62002ac461018083018462002772565b95945050505050565b62002ad88162002900565b811462002ae3575f80fd5b50565b5f8135905062002af68162002acd565b92915050565b5f6020828403121562002b145762002b1362002702565b5b5f62002b238482850162002ae6565b91505092915050565b62002b378162002900565b82525050565b5f60208201905062002b525f83018462002b2c565b92915050565b5f805f6060848603121562002b725762002b7162002702565b5b5f62002b81868287016200272c565b935050602062002b94868287016200272c565b925050604062002ba7868287016200272c565b9150509250925092565b5f62002bbd8262002900565b9050919050565b62002bcf8162002bb1565b811462002bda575f80fd5b50565b5f8135905062002bed8162002bc4565b92915050565b5f806040838503121562002c0c5762002c0b62002702565b5b5f62002c1b8582860162002bdd565b925050602062002c2e8582860162002ae6565b9150509250929050565b5f80fd5b5f610140828403121562002c555762002c5462002c38565b5b81905092915050565b5f6020828403121562002c765762002c7562002702565b5b5f82013567ffffffffffffffff81111562002c965762002c9562002706565b5b62002ca48482850162002c3c565b91505092915050565b5f806040838503121562002cc65762002cc562002702565b5b5f62002cd5858286016200272c565b925050602062002ce88582860162002ae6565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f62002d2b826200270a565b915062002d38836200270a565b925082820262002d48816200270a565b9150828204841483151762002d625762002d6162002cf2565b5b5092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f62002da2826200270a565b915062002daf836200270a565b92508262002dc25762002dc162002d69565b5b828204905092915050565b5f82825260208201905092915050565b7f4e6f7420617574686f72697a65640000000000000000000000000000000000005f82015250565b5f62002e13600e8362002dcd565b915062002e208262002ddd565b602082019050919050565b5f6020820190508181035f83015262002e448162002e05565b9050919050565b7f41756374696f6e206e6f7420656e6465640000000000000000000000000000005f82015250565b5f62002e8160118362002dcd565b915062002e8e8262002e4b565b602082019050919050565b5f6020820190508181035f83015262002eb28162002e73565b9050919050565b7f4e6f7420616374697665000000000000000000000000000000000000000000005f82015250565b5f62002eef600a8362002dcd565b915062002efc8262002eb9565b602082019050919050565b5f6020820190508181035f83015262002f208162002ee1565b9050919050565b7f46656520746f6f206869676800000000000000000000000000000000000000005f82015250565b5f62002f5d600c8362002dcd565b915062002f6a8262002f27565b602082019050919050565b5f6020820190508181035f83015262002f8e8162002f4f565b9050919050565b7f41756374696f6e206e6f742061637469766500000000000000000000000000005f82015250565b5f62002fcb60128362002dcd565b915062002fd88262002f95565b602082019050919050565b5f6020820190508181035f83015262002ffc8162002fbd565b9050919050565b7f4e6f7420737461727465640000000000000000000000000000000000000000005f82015250565b5f62003039600b8362002dcd565b9150620030468262003003565b602082019050919050565b5f6020820190508181035f8301526200306a816200302b565b9050919050565b7f456e6465640000000000000000000000000000000000000000000000000000005f82015250565b5f620030a760058362002dcd565b9150620030b48262003071565b602082019050919050565b5f6020820190508181035f830152620030d88162003099565b9050919050565b7f5a65726f20616d6f756e740000000000000000000000000000000000000000005f82015250565b5f62003115600b8362002dcd565b91506200312282620030df565b602082019050919050565b5f6020820190508181035f830152620031468162003107565b9050919050565b5f62003159826200270a565b915062003166836200270a565b925082820190508082111562003181576200318062002cf2565b5b92915050565b7f536c6970706167652065786365656465640000000000000000000000000000005f82015250565b5f620031bd60118362002dcd565b9150620031ca8262003187565b602082019050919050565b5f6020820190508181035f830152620031ee81620031af565b9050919050565b5f6040820190506200320a5f83018562002b2c565b62003219602083018462002772565b9392505050565b5f60a082019050620032355f83018862002772565b62003244602083018762002772565b62003253604083018662002772565b62003262606083018562002772565b62003271608083018462002772565b9695505050505050565b7f5a65726f20726563697069656e740000000000000000000000000000000000005f82015250565b5f620032b1600e8362002dcd565b9150620032be826200327b565b602082019050919050565b5f6020820190508181035f830152620032e281620032a3565b9050919050565b5f81519050620032f98162002713565b92915050565b5f6020828403121562003317576200331662002702565b5b5f6200332684828501620032e9565b91505092915050565b7f4e6f7468696e6720746f207377656570000000000000000000000000000000005f82015250565b5f6200336560108362002dcd565b915062003372826200332f565b602082019050919050565b5f6020820190508181035f830152620033968162003357565b9050919050565b5f620033a9826200270a565b9150620033b6836200270a565b9250828203905081811115620033d157620033d062002cf2565b5b92915050565b7f5374617274206d75737420626520696e206675747572650000000000000000005f82015250565b5f6200340d60178362002dcd565b91506200341a82620033d7565b602082019050919050565b5f6020820190508181035f8301526200343e81620033ff565b9050919050565b7f456e64206d7573742062652061667465722073746172740000000000000000005f82015250565b5f6200347b60178362002dcd565b9150620034888262003445565b602082019050919050565b5f6020820190508181035f830152620034ac816200346d565b9050919050565b5f620034bf826200270a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203620034f457620034f362002cf2565b5b600182019050919050565b5f80fd5b5f80fd5b5f80fd5b5f80833560016020038436030381126200352a5762003529620034ff565b5b80840192508235915067ffffffffffffffff8211156200354f576200354e62003503565b5b6020830192506001820236038313156200356e576200356d62003507565b5b509250929050565b828183375f83830152505050565b5f601f19601f8301169050919050565b5f620035a1838562002dcd565b9350620035b083858462003576565b620035bb8362003584565b840190509392505050565b5f6080820190508181035f830152620035e181888a62003594565b90508181036020830152620035f881868862003594565b905062003609604083018562002772565b62003618606083018462002b2c565b979650505050505050565b5f61010082019050620036395f83018b62002b2c565b62003648602083018a62002b2c565b62003657604083018962002772565b62003666606083018862002772565b62003675608083018762002772565b6200368460a083018662002772565b6200369360c083018562002772565b620036a260e083018462002772565b9998505050505050505050565b7f4e6f742063726561746f720000000000000000000000000000000000000000005f82015250565b5f620036e5600b8362002dcd565b9150620036f282620036af565b602082019050919050565b5f6020820190508181035f8301526200371681620036d7565b9050919050565b7f41756374696f6e206e6f7420636f6d706c6574656400000000000000000000005f82015250565b5f6200375360158362002dcd565b915062003760826200371d565b602082019050919050565b5f6020820190508181035f830152620037848162003745565b9050919050565b7f416c72656164792077697468647261776e0000000000000000000000000000005f82015250565b5f620037c160118362002dcd565b9150620037ce826200378b565b602082019050919050565b5f6020820190508181035f830152620037f281620037b3565b9050919050565b7f4e6f7468696e6720746f207769746864726177000000000000000000000000005f82015250565b5f6200382f60138362002dcd565b91506200383c82620037f9565b602082019050919050565b5f6020820190508181035f830152620038608162003821565b9050919050565b7f5a65726f2066656520726563697069656e7400000000000000000000000000005f82015250565b5f6200389d60128362002dcd565b9150620038aa8262003867565b602082019050919050565b5f6020820190508181035f830152620038ce816200388f565b9050919050565b7f536f6c64206f75740000000000000000000000000000000000000000000000005f82015250565b5f6200390b60088362002dcd565b91506200391882620038d5565b602082019050919050565b5f6020820190508181035f8301526200393c81620038fd565b9050919050565b7f556e737570706f72746564207061796d656e7420746f6b656e000000000000005f82015250565b5f6200397960198362002dcd565b9150620039868262003943565b602082019050919050565b5f6020820190508181035f830152620039aa816200396b565b9050919050565b7f5a65726f206261736520707269636500000000000000000000000000000000005f82015250565b5f620039e7600f8362002dcd565b9150620039f482620039b1565b602082019050919050565b5f6020820190508181035f83015262003a1881620039d9565b9050919050565b7f5a65726f206d61782072616973650000000000000000000000000000000000005f82015250565b5f62003a55600e8362002dcd565b915062003a628262003a1f565b602082019050919050565b5f6020820190508181035f83015262003a868162003a47565b9050919050565b7f496e76616c6964206c69717569646974792073686172650000000000000000005f82015250565b5f62003ac360178362002dcd565b915062003ad08262003a8d565b602082019050919050565b5f6020820190508181035f83015262003af48162003ab5565b9050919050565b7f4375727665206f766572666c6f777300000000000000000000000000000000005f82015250565b5f62003b31600f8362002dcd565b915062003b3e8262003afb565b602082019050919050565b5f6020820190508181035f83015262003b628162003b23565b9050919050565b7f537570706c7920746f6f20736d616c6c20666f72206c697175696469747900005f82015250565b5f62003b9f601e8362002dcd565b915062003bac8262003b69565b602082019050919050565b5f6020820190508181035f83015262003bd08162003b91565b9050919050565b5f60ff82169050919050565b5f62003bef8262003bd7565b915062003bfc8362003bd7565b92508262003c0f5762003c0e62002d69565b5b82820690509291505056fe608060405234801562000010575f80fd5b5060405162001c8e38038062001c8e8339818101604052810190620000369190620003d6565b80848481600390816200004a9190620006b1565b5080600490816200005c9190620006b1565b5050505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620000d2575f6040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620000c99190620007a6565b60405180910390fd5b620000e381620000f560201b60201c565b508160068190555050505050620007c1565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f604051905090565b5f80fd5b5f80fd5b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6200021982620001d1565b810181811067ffffffffffffffff821117156200023b576200023a620001e1565b5b80604052505050565b5f6200024f620001b8565b90506200025d82826200020e565b919050565b5f67ffffffffffffffff8211156200027f576200027e620001e1565b5b6200028a82620001d1565b9050602081019050919050565b5f5b83811015620002b657808201518184015260208101905062000299565b5f8484015250505050565b5f620002d7620002d18462000262565b62000244565b905082815260208101848484011115620002f657620002f5620001cd565b5b6200030384828562000297565b509392505050565b5f82601f830112620003225762000321620001c9565b5b815162000334848260208601620002c1565b91505092915050565b5f819050919050565b62000351816200033d565b81146200035c575f80fd5b50565b5f815190506200036f8162000346565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f620003a08262000375565b9050919050565b620003b28162000394565b8114620003bd575f80fd5b50565b5f81519050620003d081620003a7565b92915050565b5f805f8060808587031215620003f157620003f0620001c1565b5b5f85015167ffffffffffffffff811115620004115762000410620001c5565b5b6200041f878288016200030b565b945050602085015167ffffffffffffffff811115620004435762000442620001c5565b5b62000451878288016200030b565b935050604062000464878288016200035f565b92505060606200047787828801620003c0565b91505092959194509250565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680620004d257607f821691505b602082108103620004e857620004e76200048d565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026200054c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200050f565b6200055886836200050f565b95508019841693508086168417925050509392505050565b5f819050919050565b5f62000599620005936200058d846200033d565b62000570565b6200033d565b9050919050565b5f819050919050565b620005b48362000579565b620005cc620005c382620005a0565b8484546200051b565b825550505050565b5f90565b620005e2620005d4565b620005ef818484620005a9565b505050565b5b8181101562000616576200060a5f82620005d8565b600181019050620005f5565b5050565b601f82111562000665576200062f81620004ee565b6200063a8462000500565b810160208510156200064a578190505b62000662620006598562000500565b830182620005f4565b50505b505050565b5f82821c905092915050565b5f620006875f19846008026200066a565b1980831691505092915050565b5f620006a1838362000676565b9150826002028217905092915050565b620006bc8262000483565b67ffffffffffffffff811115620006d857620006d7620001e1565b5b620006e48254620004ba565b620006f18282856200061a565b5f60209050601f83116001811462000727575f841562000712578287015190505b6200071e858262000694565b8655506200078d565b601f1984166200073786620004ee565b5f5b82811015620007605784890151825560018201915060208501945060208101905062000739565b868310156200078057848901516200077c601f89168262000676565b8355505b6001600288020188555050505b505050505050565b620007a08162000394565b82525050565b5f602082019050620007bb5f83018462000795565b92915050565b6114bf80620007cf5f395ff3fe608060405234801561000f575f80fd5b50600436106100fe575f3560e01c80638da5cb5b11610095578063bef97c8711610064578063bef97c8714610288578063d5abeb01146102a6578063dd62ed3e146102c4578063f2fde38b146102f4576100fe565b80638da5cb5b1461021257806395d89b4114610230578063a9059cbb1461024e578063af35c6c71461027e576100fe565b8063313ce567116100d1578063313ce5671461019e57806340c10f19146101bc57806370a08231146101d8578063715018a614610208576100fe565b806306fdde0314610102578063095ea7b31461012057806318160ddd1461015057806323b872dd1461016e575b5f80fd5b61010a610310565b6040516101179190611000565b60405180910390f35b61013a600480360381019061013591906110b1565b6103a0565b6040516101479190611109565b60405180910390f35b6101586103c2565b6040516101659190611131565b60405180910390f35b6101886004803603810190610183919061114a565b6103cb565b6040516101959190611109565b60405180910390f35b6101a66103f9565b6040516101b391906111b5565b60405180910390f35b6101d660048036038101906101d191906110b1565b610401565b005b6101f260048036038101906101ed91906111ce565b61046e565b6040516101ff9190611131565b60405180910390f35b6102106104b3565b005b61021a6104c6565b6040516102279190611208565b60405180910390f35b6102386104ee565b6040516102459190611000565b60405180910390f35b610268600480360381019061026391906110b1565b61057e565b6040516102759190611109565b60405180910390f35b6102866105a0565b005b61029061063f565b60405161029d9190611109565b60405180910390f35b6102ae610651565b6040516102bb9190611131565b60405180910390f35b6102de60048036038101906102d99190611221565b610657565b6040516102eb9190611131565b60405180910390f35b61030e600480360381019061030991906111ce565b6106d9565b005b60606003805461031f9061128c565b80601f016020809104026020016040519081016040528092919081815260200182805461034b9061128c565b80156103965780601f1061036d57610100808354040283529160200191610396565b820191905f5260205f20905b81548152906001019060200180831161037957829003601f168201915b5050505050905090565b5f806103aa61075d565b90506103b7818585610764565b600191505092915050565b5f600254905090565b5f806103d561075d565b90506103e2858285610776565b6103ed858585610809565b60019150509392505050565b5f6012905090565b6104096108f9565b600654816104156103c2565b61041f91906112e9565b1115610460576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045790611366565b60405180910390fd5b61046a8282610980565b5050565b5f805f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b6104bb6108f9565b6104c45f6109ff565b565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546104fd9061128c565b80601f01602080910402602001604051908101604052809291908181526020018280546105299061128c565b80156105745780601f1061054b57610100808354040283529160200191610574565b820191905f5260205f20905b81548152906001019060200180831161055757829003601f168201915b5050505050905090565b5f8061058861075d565b9050610595818585610809565b600191505092915050565b6105a86108f9565b60075f9054906101000a900460ff16156105f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ee906113ce565b60405180910390fd5b600160075f6101000a81548160ff0219169083151502179055507feadb24812ab3c9a55c774958184293ebdb6c7f6a2dbab11f397d80c86feb65d360405160405180910390a1565b60075f9054906101000a900460ff1681565b60065481565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b6106e16108f9565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610751575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016107489190611208565b60405180910390fd5b61075a816109ff565b50565b5f33905090565b6107718383836001610ac2565b505050565b5f6107818484610657565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81101561080357818110156107f4578281836040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526004016107eb939291906113ec565b60405180910390fd5b61080284848484035f610ac2565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610879575f6040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016108709190611208565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108e9575f6040517fec442f050000000000000000000000000000000000000000000000000000000081526004016108e09190611208565b60405180910390fd5b6108f4838383610c91565b505050565b61090161075d565b73ffffffffffffffffffffffffffffffffffffffff1661091f6104c6565b73ffffffffffffffffffffffffffffffffffffffff161461097e5761094261075d565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016109759190611208565b60405180910390fd5b565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109f0575f6040517fec442f050000000000000000000000000000000000000000000000000000000081526004016109e79190611208565b60405180910390fd5b6109fb5f8383610c91565b5050565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610b32575f6040517fe602df05000000000000000000000000000000000000000000000000000000008152600401610b299190611208565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610ba2575f6040517f94280d62000000000000000000000000000000000000000000000000000000008152600401610b999190611208565b60405180910390fd5b8160015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055508015610c8b578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610c829190611131565b60405180910390a35b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015610cf957505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b15610d4d5760075f9054906101000a900460ff16610d4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d439061146b565b60405180910390fd5b5b610d58838383610d5d565b505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610dad578060025f828254610da191906112e9565b92505081905550610e7b565b5f805f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905081811015610e36578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610e2d939291906113ec565b60405180910390fd5b8181035f808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ec2578060025f8282540392505081905550610f0c565b805f808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610f699190611131565b60405180910390a3505050565b5f81519050919050565b5f82825260208201905092915050565b5f5b83811015610fad578082015181840152602081019050610f92565b5f8484015250505050565b5f601f19601f8301169050919050565b5f610fd282610f76565b610fdc8185610f80565b9350610fec818560208601610f90565b610ff581610fb8565b840191505092915050565b5f6020820190508181035f8301526110188184610fc8565b905092915050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61104d82611024565b9050919050565b61105d81611043565b8114611067575f80fd5b50565b5f8135905061107881611054565b92915050565b5f819050919050565b6110908161107e565b811461109a575f80fd5b50565b5f813590506110ab81611087565b92915050565b5f80604083850312156110c7576110c6611020565b5b5f6110d48582860161106a565b92505060206110e58582860161109d565b9150509250929050565b5f8115159050919050565b611103816110ef565b82525050565b5f60208201905061111c5f8301846110fa565b92915050565b61112b8161107e565b82525050565b5f6020820190506111445f830184611122565b92915050565b5f805f6060848603121561116157611160611020565b5b5f61116e8682870161106a565b935050602061117f8682870161106a565b92505060406111908682870161109d565b9150509250925092565b5f60ff82169050919050565b6111af8161119a565b82525050565b5f6020820190506111c85f8301846111a6565b92915050565b5f602082840312156111e3576111e2611020565b5b5f6111f08482850161106a565b91505092915050565b61120281611043565b82525050565b5f60208201905061121b5f8301846111f9565b92915050565b5f806040838503121561123757611236611020565b5b5f6112448582860161106a565b92505060206112558582860161106a565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806112a357607f821691505b6020821081036112b6576112b561125f565b5b50919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6112f38261107e565b91506112fe8361107e565b9250828201905080821115611316576113156112bc565b5b92915050565b7f45786365656473206d617820737570706c7900000000000000000000000000005f82015250565b5f611350601283610f80565b915061135b8261131c565b602082019050919050565b5f6020820190508181035f83015261137d81611344565b9050919050565b7f416c726561647920656e61626c656400000000000000000000000000000000005f82015250565b5f6113b8600f83610f80565b91506113c382611384565b602082019050919050565b5f6020820190508181035f8301526113e5816113ac565b9050919050565b5f6060820190506113ff5f8301866111f9565b61140c6020830185611122565b6114196040830184611122565b949350505050565b7f5472616e7366657273206c6f636b6564000000000000000000000000000000005f82015250565b5f611455601083610f80565b915061146082611421565b602082019050919050565b5f6020820190508181035f83015261148281611449565b905091905056fea26469706673582212202e477ee583dd88ef6c8d3ab628bc3697270a4ab82b4cf23148704e166140d1ce64736f6c63430008180033a2646970667358221220f7cde6647b72db80be32a4129f5426e5b5d5d4b0411884764f079af0bbca0c3664736f6c63430008180033",
    "sourceMap": "375:15655:39:-:0;;;4309:304;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4376:10;2365:1:31;2539:46;:29;:27;;;:29;;:::i;:::-;:44;;;:46;;:::i;:::-;:52;;:66;;;;1297:1:20;1273:26;;:12;:26;;;1269:95;;1350:1;1322:31;;;;;;;;;;;:::i;:::-;;;;;;;;1269:95;1373:32;1392:12;1373:18;;;:32;;:::i;:::-;1225:187;4431:1:39::1;4406:27;;:13;:27;;::::0;4398:58:::1;;;;;;;;;;;;:::i;:::-;;;;;;;;;2591:4;4474:14;:29;;4466:54;;;;;;;;;;;;:::i;:::-;;;;;;;;;4553:13;4530:20;;:36;;;;;;;;;;;;;;;;;;4592:14;4576:13;:30;;;;4309:304:::0;;375:15655;;4636:127:31;4706:7;1505:66;4732:24;;4725:31;;4636:127;:::o;2679:163:32:-;2740:21;2822:4;2812:14;;2679:163;;;:::o;2912:187:20:-;2985:16;3004:6;;;;;;;;;;;2985:25;;3029:8;3020:6;;:17;;;;;;;;;;;;;;;;;;3083:8;3052:40;;3073:8;3052:40;;;;;;;;;;;;2975:124;2912:187;:::o;88:117:48:-;197:1;194;187:12;334:126;371:7;411:42;404:5;400:54;389:65;;334:126;;;:::o;466:96::-;503:7;532:24;550:5;532:24;:::i;:::-;521:35;;466:96;;;:::o;568:122::-;641:24;659:5;641:24;:::i;:::-;634:5;631:35;621:63;;680:1;677;670:12;621:63;568:122;:::o;696:143::-;753:5;784:6;778:13;769:22;;800:33;827:5;800:33;:::i;:::-;696:143;;;;:::o;845:77::-;882:7;911:5;900:16;;845:77;;;:::o;928:122::-;1001:24;1019:5;1001:24;:::i;:::-;994:5;991:35;981:63;;1040:1;1037;1030:12;981:63;928:122;:::o;1056:143::-;1113:5;1144:6;1138:13;1129:22;;1160:33;1187:5;1160:33;:::i;:::-;1056:143;;;;:::o;1205:507::-;1284:6;1292;1341:2;1329:9;1320:7;1316:23;1312:32;1309:119;;;1347:79;;:::i;:::-;1309:119;1467:1;1492:64;1548:7;1539:6;1528:9;1524:22;1492:64;:::i;:::-;1482:74;;1438:128;1605:2;1631:64;1687:7;1678:6;1667:9;1663:22;1631:64;:::i;:::-;1621:74;;1576:129;1205:507;;;;;:::o;1718:118::-;1805:24;1823:5;1805:24;:::i;:::-;1800:3;1793:37;1718:118;;:::o;1842:222::-;1935:4;1973:2;1962:9;1958:18;1950:26;;1986:71;2054:1;2043:9;2039:17;2030:6;1986:71;:::i;:::-;1842:222;;;;:::o;2070:169::-;2154:11;2188:6;2183:3;2176:19;2228:4;2223:3;2219:14;2204:29;;2070:169;;;;:::o;2245:168::-;2385:20;2381:1;2373:6;2369:14;2362:44;2245:168;:::o;2419:366::-;2561:3;2582:67;2646:2;2641:3;2582:67;:::i;:::-;2575:74;;2658:93;2747:3;2658:93;:::i;:::-;2776:2;2771:3;2767:12;2760:19;;2419:366;;;:::o;2791:419::-;2957:4;2995:2;2984:9;2980:18;2972:26;;3044:9;3038:4;3034:20;3030:1;3019:9;3015:17;3008:47;3072:131;3198:4;3072:131;:::i;:::-;3064:139;;2791:419;;;:::o;3216:162::-;3356:14;3352:1;3344:6;3340:14;3333:38;3216:162;:::o;3384:366::-;3526:3;3547:67;3611:2;3606:3;3547:67;:::i;:::-;3540:74;;3623:93;3712:3;3623:93;:::i;:::-;3741:2;3736:3;3732:12;3725:19;;3384:366;;;:::o;3756:419::-;3922:4;3960:2;3949:9;3945:18;3937:26;;4009:9;4003:4;3999:20;3995:1;3984:9;3980:17;3973:47;4037:131;4163:4;4037:131;:::i;:::-;4029:139;;3756:419;;;:::o;375:15655:39:-;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801562000010575f80fd5b506004361062000152575f3560e01c806375f0c2f011620000c7578063bcae25a41162000085578063bcae25a414620003b2578063d55be8c614620003d4578063d9f1aed914620003f6578063e521cb921462000416578063efc20dad1462000436578063f2fde38b146200046c5762000152565b806375f0c2f014620002f85780638da5cb5b146200031a578063a4ce25a7146200033c578063b8dc491b146200035c578063b905fe56146200037c5762000152565b806348f719e5116200011557806348f719e51462000225578063571a26a0146200025b5780635c471ad5146200029457806364df049e14620002ca578063715018a614620002ec5762000152565b80630fda366d1462000156578063121a257f146200018c57806321b6288614620001c35780632ad7157314620001e35780634373a2861462000205575b5f80fd5b6200017460048036038101906200016e919062002742565b6200048c565b60405162000183919062002783565b60405180910390f35b620001aa6004803603810190620001a491906200279e565b620004c6565b604051620001ba929190620027e3565b60405180910390f35b620001e16004803603810190620001db919062002742565b62000529565b005b620001ed62000755565b604051620001fc919062002783565b60405180910390f35b6200022360048036038101906200021d919062002742565b6200075b565b005b6200024360048036038101906200023d919062002742565b620007f4565b6040516200025291906200282a565b60405180910390f35b62000279600480360381019062000273919062002742565b62000811565b6040516200028b949392919062002a7e565b60405180910390f35b620002b26004803603810190620002ac919062002afc565b62000998565b604051620002c1919062002783565b60405180910390f35b620002d4620009ad565b604051620002e3919062002b3d565b60405180910390f35b620002f6620009d2565b005b62000302620009e9565b60405162000311919062002783565b60405180910390f35b62000324620009ef565b60405162000333919062002b3d565b60405180910390f35b6200035a600480360381019062000354919062002b58565b62000a16565b005b6200037a600480360381019062000374919062002bf3565b62000ef3565b005b6200039a600480360381019062000394919062002c5e565b62001134565b604051620003a9919062002783565b60405180910390f35b620003bc62001482565b604051620003cb919062002783565b60405180910390f35b620003de62001488565b604051620003ed919062002783565b60405180910390f35b6200041460048036038101906200040e919062002742565b6200148e565b005b6200043460048036038101906200042e919062002afc565b6200180f565b005b6200045460048036038101906200044e919062002cad565b62001948565b60405162000463919062002783565b60405180910390f35b6200048a600480360381019062000484919062002afc565b62001968565b005b5f8060025f8481526020019081526020015f209050620004be81600c0154825f0160020154835f0160030154620019f3565b915050919050565b5f805f60025f8681526020019081526020015f209050620004fa81600c015485835f0160020154845f016003015462001a2d565b9250612710815f01600801548462000513919062002d1f565b6200051f919062002d96565b9150509250929050565b5f60025f8381526020019081526020015f209050805f016007015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480620005d15750620005a2620009ef565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b62000613576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200060a9062002e2b565b60405180910390fd5b805f016006015442116200065e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620006559062002e99565b60405180910390fd5b6001600381111562000675576200067462002a02565b5b81600a015f9054906101000a900460ff1660038111156200069b576200069a62002a02565b5b14620006de576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620006d59062002f07565b60405180910390fd5b600281600a015f6101000a81548160ff0219169083600381111562000708576200070762002a02565b5b0217905550817fc7502df20ccf846bf5005f01564bb502b56dcec19f0e2d0575c4369cc5e3b53b82600b015483600c015460405162000749929190620027e3565b60405180910390a25050565b60015481565b6200076562001ad3565b6103e8811115620007ad576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620007a49062002f75565b60405180910390fd5b7f3062378541f1b58e0547bfb13e7d7585153e442e477e263c6e63d4775b3072a660065482604051620007e2929190620027e3565b60405180910390a18060068190555050565b6004602052805f5260405f205f915054906101000a900460ff1681565b6002602052805f5260405f205f91509050805f01604051806101400160405290815f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201548152602001600482015481526020016005820154815260200160068201548152602001600782015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600882015481526020016009820154815250509080600a015f9054906101000a900460ff169080600b01549080600c0154905084565b6007602052805f5260405f205f915090505481565b60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b620009dc62001ad3565b620009e75f62001b63565b565b6107d081565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b62000a2062001c24565b5f60025f8581526020019081526020015f2090506001600381111562000a4b5762000a4a62002a02565b5b81600a015f9054906101000a900460ff16600381111562000a715762000a7062002a02565b5b1462000ab4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000aab9062002fe3565b60405180910390fd5b805f016005015442101562000b00576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000af79062003051565b60405180910390fd5b805f016006015442111562000b4c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000b4390620030bf565b60405180910390fd5b5f831162000b91576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000b88906200312d565b60405180910390fd5b5f8062000b9f838662001c4c565b8093508194508297505050505f612710845f01600801548462000bc3919062002d1f565b62000bcf919062002d96565b905084818462000be091906200314d565b111562000c24576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000c1b90620031d5565b60405180910390fd5b8284600b015f82825462000c3991906200314d565b925050819055508584600c015f82825462000c5591906200314d565b925050819055508560035f8981526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825462000cb991906200314d565b925050819055508260075f865f016001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825462000d3391906200314d565b92505081905550811562000d7157600284600a015f6101000a81548160ff0219169083600381111562000d6b5762000d6a62002a02565b5b02179055505b62000da3845f016001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16848362001d49565b835f015f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933886040518363ffffffff1660e01b815260040162000e04929190620031f5565b5f604051808303815f87803b15801562000e1c575f80fd5b505af115801562000e2f573d5f803e3d5ffd5b505050503373ffffffffffffffffffffffffffffffffffffffff16877fc938e879cd47aa84d5893377578d6c211ccd96f382228c42c1bb6a8eaa71a08488868589600b01548a600c015460405162000e8c95949392919062003220565b60405180910390a3811562000ee057867fc7502df20ccf846bf5005f01564bb502b56dcec19f0e2d0575c4369cc5e3b53b85600b015486600c015460405162000ed7929190620027e3565b60405180910390a25b5050505062000eee62001f26565b505050565b62000efd62001ad3565b62000f0762001c24565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160362000f78576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000f6f90620032c9565b60405180910390fd5b5f8273ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040162000fb4919062002b3d565b602060405180830381865afa15801562000fd0573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000ff69190620032ff565b90505f60075f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205490508082116200107e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162001075906200337d565b60405180910390fd5b5f81836200108d91906200339d565b9050620010bc84828773ffffffffffffffffffffffffffffffffffffffff1662001f449092919063ffffffff16565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f7b09c29f9106defeccc9ac3b823f3aad0b470d120e5df7aed033b5c43a4bf718836040516200111b919062002783565b60405180910390a35050506200113062001f26565b5050565b5f428260e00135116200117e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620011759062003425565b60405180910390fd5b8160e0013582610100013511620011cc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620011c39062003493565b60405180910390fd5b620011f0826040013583608001358460a001358560c0013586610120013562001f9c565b60015f8154809291906200120490620034b3565b9190505590505f82805f01906200121c91906200350b565b8480602001906200122e91906200350b565b8660400135306040516200124290620026f4565b6200125396959493929190620035c6565b604051809103905ff0801580156200126d573d5f803e3d5ffd5b5090505f60025f8481526020019081526020015f2090505f815f01905082815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550846060016020810190620012e0919062002afc565b816001015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550846080013581600201819055508460a0013581600301819055508460c0013581600401819055508460e001358160050181905550846101000135816006018190555033816007015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060065481600801819055508461012001358160090181905550600182600a015f6101000a81548160ff02191690836003811115620013e857620013e762002a02565b5b02179055503373ffffffffffffffffffffffffffffffffffffffff16847f65ae0fe5726dbcbc237789dda3a8e43b7cfba8b334c2668eb5bba82b42e61978858860600160208101906200143c919062002afc565b89608001358a60a001358b60c001358c60e001358d61010001358e61012001356040516200147298979695949392919062003623565b60405180910390a3505050919050565b60065481565b6103e881565b6200149862001c24565b5f60025f8381526020019081526020015f209050805f016007015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161462001542576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200153990620036fd565b60405180910390fd5b6002600381111562001559576200155862002a02565b5b81600a015f9054906101000a900460ff1660038111156200157f576200157e62002a02565b5b14620015c2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620015b9906200376b565b60405180910390fd5b60045f8381526020019081526020015f205f9054906101000a900460ff161562001623576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200161a90620037d9565b60405180910390fd5b5f81600b015490505f811162001670576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620016679062003847565b60405180910390fd5b600160045f8581526020019081526020015f205f6101000a81548160ff0219169083151502179055508060075f845f016001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546200170c91906200339d565b925050819055506200178a825f016007015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1682845f016001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1662001f449092919063ffffffff16565b815f016007015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16837f579e0e2d0cfdb23711bb6034ac9f2ba41e8965a8e24589d1c3cf5604868661fc83604051620017f8919062002783565b60405180910390a350506200180c62001f26565b50565b6200181962001ad3565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036200188a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200188190620038b5565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fd3890fc76afcfc31cba1dcf2c27b50e2541e4d75039c981855b5b5e03682aea060405160405180910390a38060055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6003602052815f5260405f20602052805f5260405f205f91509150505481565b6200197262001ad3565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620019e5575f6040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620019dc919062002b3d565b60405180910390fd5b620019f08162001b63565b50565b5f670de0b6b3a7640000848362001a0b919062002d1f565b62001a17919062002d96565b8362001a2491906200314d565b90509392505050565b5f8062001a50858562001a41919062002d1f565b670de0b6b3a764000062002183565b90505f62001ab78688600262001a67919062002d1f565b62001a7391906200314d565b878662001a81919062002d1f565b62001a8d919062002d1f565b670de0b6b3a764000080600262001aa5919062002d1f565b62001ab1919062002d1f565b62002183565b9050808262001ac791906200314d565b92505050949350505050565b62001add620021c9565b73ffffffffffffffffffffffffffffffffffffffff1662001afd620009ef565b73ffffffffffffffffffffffffffffffffffffffff161462001b615762001b23620021c9565b6040517f118cdaa700000000000000000000000000000000000000000000000000000000815260040162001b58919062002b3d565b60405180910390fd5b565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b62001c2e620021d0565b600262001c4462001c3e62002214565b6200223d565b5f0181905550565b5f805f83925062001c7085600c015484875f0160020154885f016003015462001a2d565b91505f85600b0154865f016004015462001c8b91906200339d565b90508083101562001ca65783835f9350935093505062001d42565b8083111562001d365762001cce86600c015482885f0160020154895f01600301548962002246565b93505f841162001d15576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162001d0c9062003923565b60405180910390fd5b62001d3386600c015485885f0160020154895f016003015462001a2d565b92505b83836001935093509350505b9250925092565b5f8373ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040162001d85919062002b3d565b602060405180830381865afa15801562001da1573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062001dc79190620032ff565b905062001df83330858773ffffffffffffffffffffffffffffffffffffffff1662002305909392919063ffffffff16565b82818573ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040162001e35919062002b3d565b602060405180830381865afa15801562001e51573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062001e779190620032ff565b62001e8391906200339d565b1462001ec6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162001ebd9062003991565b60405180910390fd5b5f82111562001f205762001f1f3360055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16848773ffffffffffffffffffffffffffffffffffffffff1662002305909392919063ffffffff16565b5b50505050565b600162001f3c62001f3662002214565b6200223d565b5f0181905550565b62001f5383838360016200235f565b62001f9757826040517f5274afe700000000000000000000000000000000000000000000000000000000815260040162001f8e919062002b3d565b60405180910390fd5b505050565b5f841162001fe1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162001fd890620039ff565b60405180910390fd5b5f821162002026576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200201d9062003a6d565b60405180910390fd5b6107d081101580156200203b57506127108111155b6200207d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620020749062003adb565b60405180910390fd5b6200208b85858585620023c3565b15620020ce576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620020c59062003b49565b60405180910390fd5b5f620020de5f8487878a62002246565b90505f620020ee828787620019f3565b90505f62002124612710858762002106919062002d1f565b62002112919062002d96565b670de0b6b3a76400008460016200246e565b90508781846200213591906200314d565b111562002179576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620021709062003bb7565b60405180910390fd5b5050505050505050565b5f8082036200219957620021986012620024c7565b5b6001826001850381620021b157620021b062002d69565b5b0401620021c05f8511620024d8565b02905092915050565b5f33905090565b620021da620024e3565b1562002212576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b5f7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f005f1b905090565b5f819050919050565b5f80600185670de0b6b3a76400008862002261919062002d1f565b6200226d919062002d96565b6200227991906200314d565b90508281111562002288578290505b5f5b81811015620022f7575f600260018484620022a691906200314d565b620022b291906200314d565b620022be919062002d96565b905087620022cf8a838a8a62001a2d565b11620022de57809150620022f0565b600181620022ed91906200339d565b92505b506200228a565b809250505095945050505050565b6200231584848484600162002503565b6200235957836040517f5274afe700000000000000000000000000000000000000000000000000000000815260040162002350919062002b3d565b60405180910390fd5b50505050565b5f8063a9059cbb60e01b9050604051815f525f1960601c86166004528460245260205f60445f808b5af1925060015f51148316620023b5578383151615620023a9573d5f823e3d81fd5b5f873b113d1516831692505b806040525050949350505050565b5f6fffffffffffffffffffffffffffffffff8016851115620023e9576001905062002466565b5f620023f6858762002576565b509050806200240a57600191505062002466565b6200243184876002896200241f919062002d1f565b6200242b919062002d1f565b62002576565b5080915050806200244757600191505062002466565b6200245b83670de0b6b3a764000062002576565b508091505080159150505b949350505050565b5f620024a46200247e836200259f565b80156200249e57505f848062002499576200249862002d69565b5b868809115b620024d8565b620024b1868686620025d1565b620024bd91906200314d565b9050949350505050565b634e487b715f52806020526024601cfd5b5f8115159050919050565b5f6002620024fa620024f462002214565b6200223d565b5f015414905090565b5f806323b872dd60e01b9050604051815f525f1960601c87166004525f1960601c86166024528460445260205f60645f808c5af1925060015f511483166200256357838315161562002557573d5f823e3d81fd5b5f883b113d1516831692505b806040525f606052505095945050505050565b5f805f8385029050841584868304141792506200259383620024d8565b81029150509250929050565b5f60016002836003811115620025ba57620025b962002a02565b5b620025c6919062003be3565b60ff16149050919050565b5f805f620025e08686620026bc565b915091505f82036200260a57838181620025ff57620025fe62002d69565b5b0492505050620026b5565b8184116200262e576200262d620026275f861460126011620026d9565b620024c7565b5b5f8486880990508181118303925080820391505f855f038616905080860495508083049250600181825f0304019050808402831792505f600287600302189050808702600203810290508087026002038102905080870260020381029050808702600203810290508087026002038102905080870260020381029050808402955050505050505b9392505050565b5f805f198385098385029150818110828203039250509250929050565b5f620026e584620024d8565b82841802821890509392505050565b611c8e8062003c1b83390190565b5f80fd5b5f80fd5b5f819050919050565b6200271e816200270a565b811462002729575f80fd5b50565b5f813590506200273c8162002713565b92915050565b5f602082840312156200275a576200275962002702565b5b5f62002769848285016200272c565b91505092915050565b6200277d816200270a565b82525050565b5f602082019050620027985f83018462002772565b92915050565b5f8060408385031215620027b757620027b662002702565b5b5f620027c6858286016200272c565b9250506020620027d9858286016200272c565b9150509250929050565b5f604082019050620027f85f83018562002772565b62002807602083018462002772565b9392505050565b5f8115159050919050565b62002824816200280e565b82525050565b5f6020820190506200283f5f83018462002819565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f819050919050565b5f6200288d62002887620028818462002845565b62002864565b62002845565b9050919050565b5f620028a0826200286d565b9050919050565b5f620028b38262002894565b9050919050565b620028c581620028a7565b82525050565b5f620028d78262002894565b9050919050565b620028e981620028cb565b82525050565b620028fa816200270a565b82525050565b5f6200290c8262002845565b9050919050565b6200291e8162002900565b82525050565b61014082015f8201516200293b5f850182620028ba565b506020820151620029506020850182620028de565b506040820151620029656040850182620028ef565b5060608201516200297a6060850182620028ef565b5060808201516200298f6080850182620028ef565b5060a0820151620029a460a0850182620028ef565b5060c0820151620029b960c0850182620028ef565b5060e0820151620029ce60e085018262002913565b50610100820151620029e5610100850182620028ef565b50610120820151620029fc610120850182620028ef565b50505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b6004811062002a435762002a4262002a02565b5b50565b5f81905062002a558262002a2f565b919050565b5f62002a668262002a46565b9050919050565b62002a788162002a5a565b82525050565b5f6101a08201905062002a945f83018762002924565b62002aa461014083018662002a6d565b62002ab461016083018562002772565b62002ac461018083018462002772565b95945050505050565b62002ad88162002900565b811462002ae3575f80fd5b50565b5f8135905062002af68162002acd565b92915050565b5f6020828403121562002b145762002b1362002702565b5b5f62002b238482850162002ae6565b91505092915050565b62002b378162002900565b82525050565b5f60208201905062002b525f83018462002b2c565b92915050565b5f805f6060848603121562002b725762002b7162002702565b5b5f62002b81868287016200272c565b935050602062002b94868287016200272c565b925050604062002ba7868287016200272c565b9150509250925092565b5f62002bbd8262002900565b9050919050565b62002bcf8162002bb1565b811462002bda575f80fd5b50565b5f8135905062002bed8162002bc4565b92915050565b5f806040838503121562002c0c5762002c0b62002702565b5b5f62002c1b8582860162002bdd565b925050602062002c2e8582860162002ae6565b9150509250929050565b5f80fd5b5f610140828403121562002c555762002c5462002c38565b5b81905092915050565b5f6020828403121562002c765762002c7562002702565b5b5f82013567ffffffffffffffff81111562002c965762002c9562002706565b5b62002ca48482850162002c3c565b91505092915050565b5f806040838503121562002cc65762002cc562002702565b5b5f62002cd5858286016200272c565b925050602062002ce88582860162002ae6565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f62002d2b826200270a565b915062002d38836200270a565b925082820262002d48816200270a565b9150828204841483151762002d625762002d6162002cf2565b5b5092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f62002da2826200270a565b915062002daf836200270a565b92508262002dc25762002dc162002d69565b5b828204905092915050565b5f82825260208201905092915050565b7f4e6f7420617574686f72697a65640000000000000000000000000000000000005f82015250565b5f62002e13600e8362002dcd565b915062002e208262002ddd565b602082019050919050565b5f6020820190508181035f83015262002e448162002e05565b9050919050565b7f41756374696f6e206e6f7420656e6465640000000000000000000000000000005f82015250565b5f62002e8160118362002dcd565b915062002e8e8262002e4b565b602082019050919050565b5f6020820190508181035f83015262002eb28162002e73565b9050919050565b7f4e6f7420616374697665000000000000000000000000000000000000000000005f82015250565b5f62002eef600a8362002dcd565b915062002efc8262002eb9565b602082019050919050565b5f6020820190508181035f83015262002f208162002ee1565b9050919050565b7f46656520746f6f206869676800000000000000000000000000000000000000005f82015250565b5f62002f5d600c8362002dcd565b915062002f6a8262002f27565b602082019050919050565b5f6020820190508181035f83015262002f8e8162002f4f565b9050919050565b7f41756374696f6e206e6f742061637469766500000000000000000000000000005f82015250565b5f62002fcb60128362002dcd565b915062002fd88262002f95565b602082019050919050565b5f6020820190508181035f83015262002ffc8162002fbd565b9050919050565b7f4e6f7420737461727465640000000000000000000000000000000000000000005f82015250565b5f62003039600b8362002dcd565b9150620030468262003003565b602082019050919050565b5f6020820190508181035f8301526200306a816200302b565b9050919050565b7f456e6465640000000000000000000000000000000000000000000000000000005f82015250565b5f620030a760058362002dcd565b9150620030b48262003071565b602082019050919050565b5f6020820190508181035f830152620030d88162003099565b9050919050565b7f5a65726f20616d6f756e740000000000000000000000000000000000000000005f82015250565b5f62003115600b8362002dcd565b91506200312282620030df565b602082019050919050565b5f6020820190508181035f830152620031468162003107565b9050919050565b5f62003159826200270a565b915062003166836200270a565b925082820190508082111562003181576200318062002cf2565b5b92915050565b7f536c6970706167652065786365656465640000000000000000000000000000005f82015250565b5f620031bd60118362002dcd565b9150620031ca8262003187565b602082019050919050565b5f6020820190508181035f830152620031ee81620031af565b9050919050565b5f6040820190506200320a5f83018562002b2c565b62003219602083018462002772565b9392505050565b5f60a082019050620032355f83018862002772565b62003244602083018762002772565b62003253604083018662002772565b62003262606083018562002772565b62003271608083018462002772565b9695505050505050565b7f5a65726f20726563697069656e740000000000000000000000000000000000005f82015250565b5f620032b1600e8362002dcd565b9150620032be826200327b565b602082019050919050565b5f6020820190508181035f830152620032e281620032a3565b9050919050565b5f81519050620032f98162002713565b92915050565b5f6020828403121562003317576200331662002702565b5b5f6200332684828501620032e9565b91505092915050565b7f4e6f7468696e6720746f207377656570000000000000000000000000000000005f82015250565b5f6200336560108362002dcd565b915062003372826200332f565b602082019050919050565b5f6020820190508181035f830152620033968162003357565b9050919050565b5f620033a9826200270a565b9150620033b6836200270a565b9250828203905081811115620033d157620033d062002cf2565b5b92915050565b7f5374617274206d75737420626520696e206675747572650000000000000000005f82015250565b5f6200340d60178362002dcd565b91506200341a82620033d7565b602082019050919050565b5f6020820190508181035f8301526200343e81620033ff565b9050919050565b7f456e64206d7573742062652061667465722073746172740000000000000000005f82015250565b5f6200347b60178362002dcd565b9150620034888262003445565b602082019050919050565b5f6020820190508181035f830152620034ac816200346d565b9050919050565b5f620034bf826200270a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203620034f457620034f362002cf2565b5b600182019050919050565b5f80fd5b5f80fd5b5f80fd5b5f80833560016020038436030381126200352a5762003529620034ff565b5b80840192508235915067ffffffffffffffff8211156200354f576200354e62003503565b5b6020830192506001820236038313156200356e576200356d62003507565b5b509250929050565b828183375f83830152505050565b5f601f19601f8301169050919050565b5f620035a1838562002dcd565b9350620035b083858462003576565b620035bb8362003584565b840190509392505050565b5f6080820190508181035f830152620035e181888a62003594565b90508181036020830152620035f881868862003594565b905062003609604083018562002772565b62003618606083018462002b2c565b979650505050505050565b5f61010082019050620036395f83018b62002b2c565b62003648602083018a62002b2c565b62003657604083018962002772565b62003666606083018862002772565b62003675608083018762002772565b6200368460a083018662002772565b6200369360c083018562002772565b620036a260e083018462002772565b9998505050505050505050565b7f4e6f742063726561746f720000000000000000000000000000000000000000005f82015250565b5f620036e5600b8362002dcd565b9150620036f282620036af565b602082019050919050565b5f6020820190508181035f8301526200371681620036d7565b9050919050565b7f41756374696f6e206e6f7420636f6d706c6574656400000000000000000000005f82015250565b5f6200375360158362002dcd565b915062003760826200371d565b602082019050919050565b5f6020820190508181035f830152620037848162003745565b9050919050565b7f416c72656164792077697468647261776e0000000000000000000000000000005f82015250565b5f620037c160118362002dcd565b9150620037ce826200378b565b602082019050919050565b5f6020820190508181035f830152620037f281620037b3565b9050919050565b7f4e6f7468696e6720746f207769746864726177000000000000000000000000005f82015250565b5f6200382f60138362002dcd565b91506200383c82620037f9565b602082019050919050565b5f6020820190508181035f830152620038608162003821565b9050919050565b7f5a65726f2066656520726563697069656e7400000000000000000000000000005f82015250565b5f6200389d60128362002dcd565b9150620038aa8262003867565b602082019050919050565b5f6020820190508181035f830152620038ce816200388f565b9050919050565b7f536f6c64206f75740000000000000000000000000000000000000000000000005f82015250565b5f6200390b60088362002dcd565b91506200391882620038d5565b602082019050919050565b5f6020820190508181035f8301526200393c81620038fd565b9050919050565b7f556e737570706f72746564207061796d656e7420746f6b656e000000000000005f82015250565b5f6200397960198362002dcd565b9150620039868262003943565b602082019050919050565b5f6020820190508181035f830152620039aa816200396b565b9050919050565b7f5a65726f206261736520707269636500000000000000000000000000000000005f82015250565b5f620039e7600f8362002dcd565b9150620039f482620039b1565b602082019050919050565b5f6020820190508181035f83015262003a1881620039d9565b9050919050565b7f5a65726f206d61782072616973650000000000000000000000000000000000005f82015250565b5f62003a55600e8362002dcd565b915062003a628262003a1f565b602082019050919050565b5f6020820190508181035f83015262003a868162003a47565b9050919050565b7f496e76616c6964206c69717569646974792073686172650000000000000000005f82015250565b5f62003ac360178362002dcd565b915062003ad08262003a8d565b602082019050919050565b5f6020820190508181035f83015262003af48162003ab5565b9050919050565b7f4375727665206f766572666c6f777300000000000000000000000000000000005f82015250565b5f62003b31600f8362002dcd565b915062003b3e8262003afb565b602082019050919050565b5f6020820190508181035f83015262003b628162003b23565b9050919050565b7f537570706c7920746f6f20736d616c6c20666f72206c697175696469747900005f82015250565b5f62003b9f601e8362002dcd565b915062003bac8262003b69565b602082019050919050565b5f6020820190508181035f83015262003bd08162003b91565b9050919050565b5f60ff82169050919050565b5f62003bef8262003bd7565b915062003bfc8362003bd7565b92508262003c0f5762003c0e62002d69565b5b82820690509291505056fe608060405234801562000010575f80fd5b5060405162001c8e38038062001c8e8339818101604052810190620000369190620003d6565b80848481600390816200004a9190620006b1565b5080600490816200005c9190620006b1565b5050505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620000d2575f6040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620000c99190620007a6565b60405180910390fd5b620000e381620000f560201b60201c565b508160068190555050505050620007c1565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f604051905090565b5f80fd5b5f80fd5b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6200021982620001d1565b810181811067ffffffffffffffff821117156200023b576200023a620001e1565b5b80604052505050565b5f6200024f620001b8565b90506200025d82826200020e565b919050565b5f67ffffffffffffffff8211156200027f576200027e620001e1565b5b6200028a82620001d1565b9050602081019050919050565b5f5b83811015620002b657808201518184015260208101905062000299565b5f8484015250505050565b5f620002d7620002d18462000262565b62000244565b905082815260208101848484011115620002f657620002f5620001cd565b5b6200030384828562000297565b509392505050565b5f82601f830112620003225762000321620001c9565b5b815162000334848260208601620002c1565b91505092915050565b5f819050919050565b62000351816200033d565b81146200035c575f80fd5b50565b5f815190506200036f8162000346565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f620003a08262000375565b9050919050565b620003b28162000394565b8114620003bd575f80fd5b50565b5f81519050620003d081620003a7565b92915050565b5f805f8060808587031215620003f157620003f0620001c1565b5b5f85015167ffffffffffffffff811115620004115762000410620001c5565b5b6200041f878288016200030b565b945050602085015167ffffffffffffffff811115620004435762000442620001c5565b5b62000451878288016200030b565b935050604062000464878288016200035f565b92505060606200047787828801620003c0565b91505092959194509250565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680620004d257607f821691505b602082108103620004e857620004e76200048d565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026200054c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200050f565b6200055886836200050f565b95508019841693508086168417925050509392505050565b5f819050919050565b5f62000599620005936200058d846200033d565b62000570565b6200033d565b9050919050565b5f819050919050565b620005b48362000579565b620005cc620005c382620005a0565b8484546200051b565b825550505050565b5f90565b620005e2620005d4565b620005ef818484620005a9565b505050565b5b8181101562000616576200060a5f82620005d8565b600181019050620005f5565b5050565b601f82111562000665576200062f81620004ee565b6200063a8462000500565b810160208510156200064a578190505b62000662620006598562000500565b830182620005f4565b50505b505050565b5f82821c905092915050565b5f620006875f19846008026200066a565b1980831691505092915050565b5f620006a1838362000676565b9150826002028217905092915050565b620006bc8262000483565b67ffffffffffffffff811115620006d857620006d7620001e1565b5b620006e48254620004ba565b620006f18282856200061a565b5f60209050601f83116001811462000727575f841562000712578287015190505b6200071e858262000694565b8655506200078d565b601f1984166200073786620004ee565b5f5b82811015620007605784890151825560018201915060208501945060208101905062000739565b868310156200078057848901516200077c601f89168262000676565b8355505b6001600288020188555050505b505050505050565b620007a08162000394565b82525050565b5f602082019050620007bb5f83018462000795565b92915050565b6114bf80620007cf5f395ff3fe608060405234801561000f575f80fd5b50600436106100fe575f3560e01c80638da5cb5b11610095578063bef97c8711610064578063bef97c8714610288578063d5abeb01146102a6578063dd62ed3e146102c4578063f2fde38b146102f4576100fe565b80638da5cb5b1461021257806395d89b4114610230578063a9059cbb1461024e578063af35c6c71461027e576100fe565b8063313ce567116100d1578063313ce5671461019e57806340c10f19146101bc57806370a08231146101d8578063715018a614610208576100fe565b806306fdde0314610102578063095ea7b31461012057806318160ddd1461015057806323b872dd1461016e575b5f80fd5b61010a610310565b6040516101179190611000565b60405180910390f35b61013a600480360381019061013591906110b1565b6103a0565b6040516101479190611109565b60405180910390f35b6101586103c2565b6040516101659190611131565b60405180910390f35b6101886004803603810190610183919061114a565b6103cb565b6040516101959190611109565b60405180910390f35b6101a66103f9565b6040516101b391906111b5565b60405180910390f35b6101d660048036038101906101d191906110b1565b610401565b005b6101f260048036038101906101ed91906111ce565b61046e565b6040516101ff9190611131565b60405180910390f35b6102106104b3565b005b61021a6104c6565b6040516102279190611208565b60405180910390f35b6102386104ee565b6040516102459190611000565b60405180910390f35b610268600480360381019061026391906110b1565b61057e565b6040516102759190611109565b60405180910390f35b6102866105a0565b005b61029061063f565b60405161029d9190611109565b60405180910390f35b6102ae610651565b6040516102bb9190611131565b60405180910390f35b6102de60048036038101906102d99190611221565b610657565b6040516102eb9190611131565b60405180910390f35b61030e600480360381019061030991906111ce565b6106d9565b005b60606003805461031f9061128c565b80601f016020809104026020016040519081016040528092919081815260200182805461034b9061128c565b80156103965780601f1061036d57610100808354040283529160200191610396565b820191905f5260205f20905b81548152906001019060200180831161037957829003601f168201915b5050505050905090565b5f806103aa61075d565b90506103b7818585610764565b600191505092915050565b5f600254905090565b5f806103d561075d565b90506103e2858285610776565b6103ed858585610809565b60019150509392505050565b5f6012905090565b6104096108f9565b600654816104156103c2565b61041f91906112e9565b1115610460576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045790611366565b60405180910390fd5b61046a8282610980565b5050565b5f805f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b6104bb6108f9565b6104c45f6109ff565b565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546104fd9061128c565b80601f01602080910402602001604051908101604052809291908181526020018280546105299061128c565b80156105745780601f1061054b57610100808354040283529160200191610574565b820191905f5260205f20905b81548152906001019060200180831161055757829003601f168201915b5050505050905090565b5f8061058861075d565b9050610595818585610809565b600191505092915050565b6105a86108f9565b60075f9054906101000a900460ff16156105f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ee906113ce565b60405180910390fd5b600160075f6101000a81548160ff0219169083151502179055507feadb24812ab3c9a55c774958184293ebdb6c7f6a2dbab11f397d80c86feb65d360405160405180910390a1565b60075f9054906101000a900460ff1681565b60065481565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b6106e16108f9565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610751575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016107489190611208565b60405180910390fd5b61075a816109ff565b50565b5f33905090565b6107718383836001610ac2565b505050565b5f6107818484610657565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81101561080357818110156107f4578281836040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526004016107eb939291906113ec565b60405180910390fd5b61080284848484035f610ac2565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610879575f6040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016108709190611208565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108e9575f6040517fec442f050000000000000000000000000000000000000000000000000000000081526004016108e09190611208565b60405180910390fd5b6108f4838383610c91565b505050565b61090161075d565b73ffffffffffffffffffffffffffffffffffffffff1661091f6104c6565b73ffffffffffffffffffffffffffffffffffffffff161461097e5761094261075d565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016109759190611208565b60405180910390fd5b565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109f0575f6040517fec442f050000000000000000000000000000000000000000000000000000000081526004016109e79190611208565b60405180910390fd5b6109fb5f8383610c91565b5050565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610b32575f6040517fe602df05000000000000000000000000000000000000000000000000000000008152600401610b299190611208565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610ba2575f6040517f94280d62000000000000000000000000000000000000000000000000000000008152600401610b999190611208565b60405180910390fd5b8160015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055508015610c8b578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610c829190611131565b60405180910390a35b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015610cf957505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b15610d4d5760075f9054906101000a900460ff16610d4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d439061146b565b60405180910390fd5b5b610d58838383610d5d565b505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610dad578060025f828254610da191906112e9565b92505081905550610e7b565b5f805f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905081811015610e36578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610e2d939291906113ec565b60405180910390fd5b8181035f808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ec2578060025f8282540392505081905550610f0c565b805f808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610f699190611131565b60405180910390a3505050565b5f81519050919050565b5f82825260208201905092915050565b5f5b83811015610fad578082015181840152602081019050610f92565b5f8484015250505050565b5f601f19601f8301169050919050565b5f610fd282610f76565b610fdc8185610f80565b9350610fec818560208601610f90565b610ff581610fb8565b840191505092915050565b5f6020820190508181035f8301526110188184610fc8565b905092915050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61104d82611024565b9050919050565b61105d81611043565b8114611067575f80fd5b50565b5f8135905061107881611054565b92915050565b5f819050919050565b6110908161107e565b811461109a575f80fd5b50565b5f813590506110ab81611087565b92915050565b5f80604083850312156110c7576110c6611020565b5b5f6110d48582860161106a565b92505060206110e58582860161109d565b9150509250929050565b5f8115159050919050565b611103816110ef565b82525050565b5f60208201905061111c5f8301846110fa565b92915050565b61112b8161107e565b82525050565b5f6020820190506111445f830184611122565b92915050565b5f805f6060848603121561116157611160611020565b5b5f61116e8682870161106a565b935050602061117f8682870161106a565b92505060406111908682870161109d565b9150509250925092565b5f60ff82169050919050565b6111af8161119a565b82525050565b5f6020820190506111c85f8301846111a6565b92915050565b5f602082840312156111e3576111e2611020565b5b5f6111f08482850161106a565b91505092915050565b61120281611043565b82525050565b5f60208201905061121b5f8301846111f9565b92915050565b5f806040838503121561123757611236611020565b5b5f6112448582860161106a565b92505060206112558582860161106a565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806112a357607f821691505b6020821081036112b6576112b561125f565b5b50919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6112f38261107e565b91506112fe8361107e565b9250828201905080821115611316576113156112bc565b5b92915050565b7f45786365656473206d617820737570706c7900000000000000000000000000005f82015250565b5f611350601283610f80565b915061135b8261131c565b602082019050919050565b5f6020820190508181035f83015261137d81611344565b9050919050565b7f416c726561647920656e61626c656400000000000000000000000000000000005f82015250565b5f6113b8600f83610f80565b91506113c382611384565b602082019050919050565b5f6020820190508181035f8301526113e5816113ac565b9050919050565b5f6060820190506113ff5f8301866111f9565b61140c6020830185611122565b6114196040830184611122565b949350505050565b7f5472616e7366657273206c6f636b6564000000000000000000000000000000005f82015250565b5f611455601083610f80565b915061146082611421565b602082019050919050565b5f6020820190508181035f83015261148281611449565b905091905056fea26469706673582212202e477ee583dd88ef6c8d3ab628bc3697270a4ab82b4cf23148704e166140d1ce64736f6c63430008180033a2646970667358221220f7cde6647b72db80be32a4129f5426e5b5d5d4b0411884764f079af0bbca0c3664736f6c63430008180033",
    "sourceMap": "375:15655:39:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;15343:291;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;15640:388;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;11432:531;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2096:27;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;14452:214;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2256:49;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2129:47;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;;:::i;:::-;;;;;;;;3146:44;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2328:35;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2293:101:20;;;:::i;:::-;;2791:48:39;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1638:85:20;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;7992:1404:39;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;14891:424;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;4619:1405;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2369:28;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2553:42;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;12277:764;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;13987:259;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2182:68;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2543:215:20;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;15343:291:39;15407:7;15426:27;15456:8;:19;15465:9;15456:19;;;;;;;;;;;15426:49;;15492:135;15528:7;:17;;;15559:7;:14;;:24;;;15597:7;:14;;:20;;;15492:22;:135::i;:::-;15485:142;;;15343:291;;;:::o;15640:388::-;15718:12;15732:11;15755:27;15785:8;:19;15794:9;15785:19;;;;;;;;;;;15755:49;;15821:138;15864:7;:17;;;15883:6;15903:7;:14;;:24;;;15929:7;:14;;:20;;;15821:29;:138::i;:::-;15814:145;;16016:5;15983:7;:14;;:29;;;15976:4;:36;;;;:::i;:::-;15975:46;;;;:::i;:::-;15969:52;;15745:283;15640:388;;;;;:::o;11432:531::-;11495:27;11525:8;:19;11534:9;11525:19;;;;;;;;;;;11495:49;;11589:7;:14;;:22;;;;;;;;;;;;11575:36;;:10;:36;;;:61;;;;11629:7;:5;:7::i;:::-;11615:21;;:10;:21;;;11575:61;11554:122;;;;;;;;;;;;:::i;:::-;;;;;;;;;11712:7;:14;;:22;;;11694:15;:40;11686:70;;;;;;;;;;;;:::i;:::-;;;;;;;;;11791:19;11774:36;;;;;;;;:::i;:::-;;:7;:13;;;;;;;;;;;;:36;;;;;;;;:::i;:::-;;;11766:59;;;;;;;;;;;;:::i;:::-;;;;;;;;;11852:22;11836:7;:13;;;:38;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;11906:9;11889:67;11917:7;:19;;;11938:7;:17;;;11889:67;;;;;;;:::i;:::-;;;;;;;;11485:478;11432:531;:::o;2096:27::-;;;;:::o;14452:214::-;1531:13:20;:11;:13::i;:::-;2591:4:39::1;14531:6;:21;;14523:46;;;;;;;;;;;;:::i;:::-;;;;;;;;;14584:43;14605:13;;14620:6;14584:43;;;;;;;:::i;:::-;;;;;;;;14653:6;14637:13;:22;;;;14452:214:::0;:::o;2256:49::-;;;;;;;;;;;;;;;;;;;;;;:::o;2129:47::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;3146:44::-;;;;;;;;;;;;;;;;;:::o;2328:35::-;;;;;;;;;;;;;:::o;2293:101:20:-;1531:13;:11;:13::i;:::-;2357:30:::1;2384:1;2357:18;:30::i;:::-;2293:101::o:0;2791:48:39:-;2835:4;2791:48;:::o;1638:85:20:-;1684:7;1710:6;;;;;;;;;;;1703:13;;1638:85;:::o;7992:1404:39:-;3023:21:31;:19;:21::i;:::-;8095:27:39::1;8125:8;:19;8134:9;8125:19;;;;;;;;;;;8095:49;;8179:19;8162:36;;;;;;;;:::i;:::-;;:7;:13;;;;;;;;;;;;:36;;;;;;;;:::i;:::-;;;8154:67;;;;;;;;;;;;:::i;:::-;;;;;;;;;8258:7;:14;;:24;;;8239:15;:43;;8231:67;;;;;;;;;;;;:::i;:::-;;;;;;;;;8335:7;:14;;:22;;;8316:15;:41;;8308:59;;;;;;;;;;;;:::i;:::-;;;;;;;;;8394:1;8385:6;:10;8377:34;;;;;;;;;;;;:::i;:::-;;;;;;;;;8422:12;8444:13:::0;8494:22:::1;8500:7;8509:6;8494:5;:22::i;:::-;8467:49;;;;;;;;;;;;8526:19;8589:5;8556:7;:14;;:29;;;8549:4;:36;;;;:::i;:::-;8548:46;;;;:::i;:::-;8526:68;;8634:7;8619:11;8612:4;:18;;;;:::i;:::-;:29;;8604:59;;;;;;;;;;;;:::i;:::-;;;;;;;;;8737:4;8714:7;:19;;;:27;;;;;;;:::i;:::-;;;;;;;;8772:6;8751:7;:17;;;:27;;;;;;;:::i;:::-;;;;;;;;8828:6;8788:13;:24;8802:9;8788:24;;;;;;;;;;;:36;8813:10;8788:36;;;;;;;;;;;;;;;;:46;;;;;;;:::i;:::-;;;;;;;;8895:4;8844:9;:47;8862:7;:14;;:27;;;;;;;;;;;;8844:47;;;;;;;;;;;;;;;;:55;;;;;;;:::i;:::-;;;;;;;;8913:8;8909:77;;;8953:22;8937:7;:13;;;:38;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;8909:77;8996:63;9012:7;:14;;:27;;;;;;;;;;;;9041:4;9047:11;8996:15;:63::i;:::-;9069:7;:14;;:20;;;;;;;;;;;;:25;;;9095:10;9107:6;9069:45;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;9170:10;9130:139;;9159:9;9130:139;9182:6;9190:4;9196:11;9221:7;:19;;;9242:7;:17;;;9130:139;;;;;;;;;;:::i;:::-;;;;;;;;9283:8;9279:111;;;9329:9;9312:67;9340:7;:19;;;9361:7;:17;;;9312:67;;;;;;;:::i;:::-;;;;;;;;9279:111;8085:1311;;;;3065:20:31::0;:18;:20::i;:::-;7992:1404:39;;;:::o;14891:424::-;1531:13:20;:11;:13::i;:::-;3023:21:31::1;:19;:21::i;:::-;14996:1:39::2;14982:16;;:2;:16;;::::0;14974:43:::2;;;;;;;;;;;;:::i;:::-;;;;;;;;;15027:15;15045:5;:15;;;15069:4;15045:30;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;15027:48;;15085:12;15100:9;:25;15118:5;15100:25;;;;;;;;;;;;;;;;15085:40;;15153:4;15143:7;:14;15135:43;;;;;;;;;;;;:::i;:::-;;;;;;;;;15189:14;15216:4;15206:7;:14;;;;:::i;:::-;15189:31;;15230:30;15249:2;15253:6;15230:5;:18;;;;:30;;;;;:::i;:::-;15297:2;15275:33;;15289:5;15275:33;;;15301:6;15275:33;;;;;;:::i;:::-;;;;;;;;14964:351;;;3065:20:31::1;:18;:20::i;:::-;14891:424:39::0;;:::o;4619:1405::-;4686:17;4737:15;4723:1;:11;;;:29;4715:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;4810:1;:11;;;4798:1;:9;;;:23;4790:59;;;;;;;;;;;;:::i;:::-;;;;;;;;;4859:77;4874:1;:11;;;4887:1;:11;;;4900:1;:7;;;4909:1;:10;;;4921:1;:14;;;4859;:77::i;:::-;4959:12;;:14;;;;;;;;;:::i;:::-;;;;;4947:26;;5049:18;5087:1;:6;;;;;;;;:::i;:::-;5095:1;:8;;;;;;;;:::i;:::-;5105:1;:11;;;5126:4;5070:62;;;;;:::i;:::-;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;5049:83;;5275:27;5305:8;:19;5314:9;5305:19;;;;;;;;;;;5275:49;;5334:28;5365:7;:14;;5334:45;;5404:5;5389:6;:12;;;:20;;;;;;;;;;;;;;;;;;5448:1;:14;;;;;;;;;;:::i;:::-;5419:6;:19;;;:44;;;;;;;;;;;;;;;;;;5492:1;:11;;;5473:6;:16;;:30;;;;5528:1;:7;;;5513:6;:12;;:22;;;;5563:1;:10;;;5545:6;:15;;:28;;;;5602:1;:11;;;5583:6;:16;;:30;;;;5640:1;:9;;;5623:6;:14;;:26;;;;5676:10;5659:6;:14;;;:27;;;;;;;;;;;;;;;;;;5720:13;;5696:6;:21;;:37;;;;5765:1;:14;;;5743:6;:19;;:36;;;;5805:19;5789:7;:13;;;:35;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;5879:10;5840:177;;5868:9;5840:177;5899:5;5907:1;:14;;;;;;;;;;:::i;:::-;5935:1;:11;;;5948:1;:7;;;5957:1;:10;;;5969:1;:11;;;5982:1;:9;;;5993:1;:14;;;5840:177;;;;;;;;;;;;;:::i;:::-;;;;;;;;4705:1319;;;4619:1405;;;:::o;2369:28::-;;;;:::o;2553:42::-;2591:4;2553:42;:::o;12277:764::-;3023:21:31;:19;:21::i;:::-;12354:27:39::1;12384:8;:19;12393:9;12384:19;;;;;;;;;;;12354:49;;12435:7;:14;;:22;;;;;;;;;;;;12421:36;;:10;:36;;;12413:60;;;;;;;;;;;;:::i;:::-;;;;;;;;;12508:22;12491:39;;;;;;;;:::i;:::-;;:7;:13;;;;;;;;;;;;:39;;;;;;;;:::i;:::-;;;12483:73;;;;;;;;;;;;:::i;:::-;;;;;;;;;12575:17;:28;12593:9;12575:28;;;;;;;;;;;;;;;;;;;;;12574:29;12566:59;;;;;;;;;;;;:::i;:::-;;;;;;;;;12636:14;12653:7;:19;;;12636:36;;12699:1;12690:6;:10;12682:42;;;;;;;;;;;;:::i;:::-;;;;;;;;;12805:4;12774:17;:28;12792:9;12774:28;;;;;;;;;;;;:35;;;;;;;;;;;;;;;;;;12870:6;12819:9;:47;12837:7;:14;;:27;;;;;;;;;;;;12819:47;;;;;;;;;;;;;;;;:57;;;;;;;:::i;:::-;;;;;;;;12886:72;12927:7;:14;;:22;;;;;;;;;;;;12951:6;12886:7;:14;;:27;;;;;;;;;;;;:40;;;;:72;;;;;:::i;:::-;13003:7;:14;;:22;;;;;;;;;;;;12974:60;;12992:9;12974:60;13027:6;12974:60;;;;;;:::i;:::-;;;;;;;;12344:697;;3065:20:31::0;:18;:20::i;:::-;12277:764:39;:::o;13987:259::-;1531:13:20;:11;:13::i;:::-;14097:1:39::1;14076:23;;:9;:23;;::::0;14068:54:::1;;;;;;;;;;;;:::i;:::-;;;;;;;;;14187:9;14137:60;;14165:20;;;;;;;;;;;14137:60;;;;;;;;;;;;14230:9;14207:20;;:32;;;;;;;;;;;;;;;;;;13987:259:::0;:::o;2182:68::-;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2543:215:20:-;1531:13;:11;:13::i;:::-;2647:1:::1;2627:22;;:8;:22;;::::0;2623:91:::1;;2700:1;2672:31;;;;;;;;;;;:::i;:::-;;;;;;;;2623:91;2723:28;2742:8;2723:18;:28::i;:::-;2543:215:::0;:::o;2175:211:38:-;2304:7;619:4;2351:13;2343:5;:21;;;;:::i;:::-;2342:37;;;;:::i;:::-;2330:9;:49;;;;:::i;:::-;2323:56;;2175:211;;;;;:::o;1390:583::-;1550:7;1719:18;1740:45;1765:6;1753:9;:18;;;;:::i;:::-;619:4;1740:12;:45::i;:::-;1719:66;;1795:17;1815:112;1879:6;1863:13;1859:1;:17;;;;:::i;:::-;:26;;;;:::i;:::-;1849:6;1841:5;:14;;;;:::i;:::-;:45;;;;:::i;:::-;619:4;;1888:1;:15;;;;:::i;:::-;:29;;;;:::i;:::-;1815:12;:112::i;:::-;1795:132;;1957:9;1944:10;:22;;;;:::i;:::-;1937:29;;;;1390:583;;;;;;:::o;1796:162:20:-;1866:12;:10;:12::i;:::-;1855:23;;:7;:5;:7::i;:::-;:23;;;1851:101;;1928:12;:10;:12::i;:::-;1901:40;;;;;;;;;;;:::i;:::-;;;;;;;;1851:101;1796:162::o;2912:187::-;2985:16;3004:6;;;;;;;;;;;2985:25;;3029:8;3020:6;;:17;;;;;;;;;;;;;;;;;;3083:8;3052:40;;3073:8;3052:40;;;;;;;;;;;;2975:124;2912:187;:::o;3749:292:31:-;3872:25;:23;:25::i;:::-;2407:1;3972:46;:29;:27;:29::i;:::-;:44;:46::i;:::-;:52;;:62;;;;3749:292::o;9709:917:39:-;9819:14;9835:12;9849:13;9887:9;9878:18;;9913:126;9956:7;:17;;;9975:6;9983:7;:14;;:24;;;10009:7;:14;;:20;;;9913:29;:126::i;:::-;9906:133;;10049:17;10095:7;:19;;;10069:7;:14;;:23;;;:45;;;;:::i;:::-;10049:65;;10135:9;10128:4;:16;10124:50;;;10154:6;10162:4;10168:5;10146:28;;;;;;;;;10124:50;10196:9;10189:4;:16;10185:398;;;10230:142;10271:7;:17;;;10290:9;10301:7;:14;;:24;;;10327:7;:14;;:20;;;10349:9;10230:23;:142::i;:::-;10221:151;;10403:1;10394:6;:10;10386:31;;;;;;;;;;;;:::i;:::-;;;;;;;;;10438:134;10485:7;:17;;;10504:6;10512:7;:14;;:24;;;10538:7;:14;;:20;;;10438:29;:134::i;:::-;10431:141;;10185:398;10600:6;10608:4;10614;10592:27;;;;;;;9709:917;;;;;;:::o;10912:514::-;11012:21;11036:12;:22;;;11067:4;11036:37;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;11012:61;;11083:62;11113:10;11133:4;11140;11083:12;:29;;;;:62;;;;;;:::i;:::-;11233:4;11216:13;11176:12;:22;;;11207:4;11176:37;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:53;;;;:::i;:::-;:61;11155:133;;;;;;;;;;;;:::i;:::-;;;;;;;;;11316:1;11302:11;:15;11298:122;;;11333:76;11363:10;11375:20;;;;;;;;;;;11397:11;11333:12;:29;;;;:76;;;;;;:::i;:::-;11298:122;11002:424;10912:514;;;:::o;4047:253:31:-;2365:1;4227:46;:29;:27;:29::i;:::-;:44;:46::i;:::-;:52;;:66;;;;4047:253::o;1219:204:28:-;1306:37;1320:5;1327:2;1331:5;1338:4;1306:13;:37::i;:::-;1301:116;;1399:5;1366:40;;;;;;;;;;;:::i;:::-;;;;;;;;1301:116;1219:204;;;:::o;6410:927:39:-;6617:1;6605:9;:13;6597:41;;;;;;;;;;;;:::i;:::-;;;;;;;;;6667:1;6656:8;:12;6648:39;;;;;;;;;;;;:::i;:::-;;;;;;;;;2835:4;6718:12;:33;;:58;;;;;6771:5;6755:12;:21;;6718:58;6697:128;;;;;;;;;;;;:::i;:::-;;;;;;;;;6845:54;6861:9;6872;6883:5;6890:8;6845:15;:54::i;:::-;6844:55;6836:83;;;;;;;;;;;;:::i;:::-;;;;;;;;;6930:15;6948:65;6972:1;6975:8;6985:9;6996:5;7003:9;6948:23;:65::i;:::-;6930:83;;7023:18;7044:49;7067:7;7076:9;7087:5;7044:22;:49::i;:::-;7023:70;;7103:15;7121:126;7174:5;7158:12;7147:8;:23;;;;:::i;:::-;7146:33;;;;:::i;:::-;619:4:38;7207:10:39;7219:18;7121:11;:126::i;:::-;7103:144;;7286:9;7275:7;7265;:17;;;;:::i;:::-;:30;;7257:73;;;;;;;;;;;;:::i;:::-;;;;;;;;;6587:750;;;6410:927;;;;;:::o;6269:704:34:-;6331:7;6359:1;6354;:6;6350:150;;6454:35;1035:4:30;6454:11:34;:35::i;:::-;6350:150;6954:1;6950;6945;6941;:5;6940:11;;;;;:::i;:::-;;;:15;6914:22;6934:1;6930;:5;6914:15;:22::i;:::-;:42;6907:49;;6269:704;;;;:::o;656:96:29:-;709:7;735:10;728:17;;656:96;:::o;3586:157:31:-;3648:25;:23;:25::i;:::-;3644:93;;;3696:30;;;;;;;;;;;;;;3644:93;3586:157::o;4636:127::-;4706:7;1505:66;4732:24;;4725:31;;4636:127;:::o;2679:163:32:-;2740:21;2822:4;2812:14;;2679:163;;;:::o;2926:721:38:-;3108:7;3244:10;3294:1;3282:9;619:4;3258:6;:20;;;;:::i;:::-;3257:34;;;;:::i;:::-;:38;;;;:::i;:::-;3244:51;;3314:10;3309:2;:15;3305:36;;;3331:10;3326:15;;3305:36;3351:10;3375:247;3387:2;3382;:7;3375:247;;;3405:11;3435:1;3430;3425:2;3420;:7;;;;:::i;:::-;:11;;;;:::i;:::-;3419:17;;;;:::i;:::-;3405:31;;3512:6;3454:54;3471:13;3486:3;3491:9;3502:5;3454:16;:54::i;:::-;:64;3450:162;;3543:3;3538:8;;3450:162;;;3596:1;3590:3;:7;;;;:::i;:::-;3585:12;;3450:162;3391:231;3375:247;;;3638:2;3631:9;;;;2926:721;;;;;;;:::o;1662:232:28:-;1767:47;1785:5;1792:4;1798:2;1802:5;1809:4;1767:17;:47::i;:::-;1762:126;;1870:5;1837:40;;;;;;;;;;;:::i;:::-;;;;;;;;1762:126;1662:232;;;;:::o;8373:1244::-;8467:12;8491:15;8509:24;;;8491:42;;8600:4;8594:11;8631:8;8625:4;8618:22;8686:1;8682:6;8678:2;8674:15;8670:2;8666:24;8660:4;8653:38;8717:5;8711:4;8704:19;8787:4;8781;8775;8769;8766:1;8759:5;8752;8747:45;8736:56;;9004:1;8997:4;8991:11;8988:18;8979:7;8975:32;8965:606;;9136:6;9126:7;9119:15;9115:28;9112:165;;;9192:16;9186:4;9181:3;9166:43;9242:16;9237:3;9230:29;9112:165;9553:1;9545:5;9533:18;9530:25;9511:16;9504:24;9500:56;9491:7;9487:70;9476:81;;8965:606;9597:3;9591:4;9584:17;8569:1042;;8373:1244;;;;;;:::o;13367:483:39:-;13510:4;13546:17;13534:29;;:9;:29;13530:46;;;13572:4;13565:11;;;;13530:46;13587:7;13600:33;13612:9;13623;13600:11;:33::i;:::-;13586:47;;;13648:2;13643:20;;13659:4;13652:11;;;;;13643:20;13682:45;13694:5;13717:9;13713:1;13701:9;:13;;;;:::i;:::-;:25;;;;:::i;:::-;13682:11;:45::i;:::-;13673:54;;;;;13742:2;13737:20;;13753:4;13746:11;;;;;13737:20;13776:47;13788:8;619:4:38;13776:11:39;:47::i;:::-;13767:56;;;;;13841:2;13840:3;13833:10;;;13367:483;;;;;;;:::o;11108:238:34:-;11209:7;11263:76;11279:26;11296:8;11279:16;:26::i;:::-;:59;;;;;11337:1;11322:11;11309:25;;;;;:::i;:::-;;11319:1;11316;11309:25;:29;11279:59;11263:15;:76::i;:::-;11235:25;11242:1;11245;11248:11;11235:6;:25::i;:::-;:104;;;;:::i;:::-;11228:111;;11108:238;;;;;;:::o;1776:194:30:-;1881:10;1875:4;1868:24;1918:4;1912;1905:18;1949:4;1943;1936:18;34792:145:35;34839:9;34918:1;34911:9;34904:17;34899:22;;34792:145;;;:::o;4479:151:31:-;4537:4;2407:1;4560:46;:29;:27;:29::i;:::-;:44;:46::i;:::-;:52;;;:63;4553:70;;4479:151;:::o;10165:1393:28:-;10323:12;10347:15;10365:28;;;10347:46;;10460:4;10454:11;10491:8;10485:4;10478:22;10548:1;10544:6;10540:2;10536:15;10530:4;10526:26;10520:4;10513:40;10599:1;10595:6;10591:2;10587:15;10583:2;10579:24;10573:4;10566:38;10630:5;10624:4;10617:19;10700:4;10694;10688;10682;10679:1;10672:5;10665;10660:45;10649:56;;10917:1;10910:4;10904:11;10901:18;10892:7;10888:32;10878:606;;11049:6;11039:7;11032:15;11028:28;11025:165;;;11105:16;11099:4;11094:3;11079:43;11155:16;11150:3;11143:29;11025:165;11466:1;11458:5;11446:18;11443:25;11424:16;11417:24;11413:56;11404:7;11400:70;11389:81;;10878:606;11510:3;11504:4;11497:17;11540:1;11534:4;11527:15;10429:1123;;10165:1393;;;;;;;:::o;2414:482:34:-;2475:12;2489:14;2539:9;2555:1;2551;:5;2539:17;;2766:1;2759:9;2755:1;2751;2748;2744:9;2741:16;2738:31;2727:42;;2855:24;2871:7;2855:15;:24::i;:::-;2851:1;:28;2842:37;;2515:375;2414:482;;;;;:::o;32337:122::-;32405:4;32451:1;32446;32434:8;32428:15;;;;;;;;:::i;:::-;;:19;;;;:::i;:::-;:24;;;32421:31;;32337:122;;;:::o;7296:3683::-;7378:14;7429:12;7443:11;7458:12;7465:1;7468;7458:6;:12::i;:::-;7428:42;;;;7560:1;7552:4;:9;7548:365;;7887:11;7881:3;:17;;;;;:::i;:::-;;;7874:24;;;;;;7548:365;8038:4;8023:11;:19;8019:142;;8062:84;8074:71;8097:1;8082:11;:16;1035:4:30;940;8074:7:34;:71::i;:::-;8062:11;:84::i;:::-;8019:142;8413:17;8564:11;8561:1;8558;8551:25;8538:38;;8690:3;8679:9;8676:18;8670:4;8666:29;8658:37;;8728:9;8723:3;8719:19;8712:26;;8956:12;8990:11;8986:1;:15;8971:11;:31;8956:46;;9138:4;9125:11;9121:22;9106:37;;9223:4;9218:3;9214:14;9207:21;;9384:1;9377:4;9370;9367:1;9363:12;9359:23;9355:31;9347:39;;9477:4;9470;:11;9463:18;;;;9816:15;9854:1;9839:11;9835:1;:15;9834:21;9816:39;;10101:7;10087:11;:21;10083:1;:25;10072:36;;;;10171:7;10157:11;:21;10153:1;:25;10142:36;;;;10243:7;10229:11;:21;10225:1;:25;10214:36;;;;10314:7;10300:11;:21;10296:1;:25;10285:36;;;;10387:7;10373:11;:21;10369:1;:25;10358:36;;;;10461:7;10447:11;:21;10443:1;:25;10432:36;;;;10928:7;10922:3;:13;10913:22;;10949:13;;;;;7296:3683;;;;;;:::o;1027:550::-;1088:12;1102:11;1478:1;1474:6;1471:1;1468;1461:20;1508:1;1505;1501:9;1494:16;;1556:3;1552:2;1549:11;1543:3;1539:2;1535:12;1531:30;1523:38;;1437:134;1027:550;;;;;:::o;5087:294::-;5165:7;5337:26;5353:9;5337:15;:26::i;:::-;5332:1;5328;:5;5327:36;5322:1;:42;5315:49;;5087:294;;;;;:::o;-1:-1:-1:-;;;;;;;;:::o;88:117:48:-;197:1;194;187:12;211:117;320:1;317;310:12;334:77;371:7;400:5;389:16;;334:77;;;:::o;417:122::-;490:24;508:5;490:24;:::i;:::-;483:5;480:35;470:63;;529:1;526;519:12;470:63;417:122;:::o;545:139::-;591:5;629:6;616:20;607:29;;645:33;672:5;645:33;:::i;:::-;545:139;;;;:::o;690:329::-;749:6;798:2;786:9;777:7;773:23;769:32;766:119;;;804:79;;:::i;:::-;766:119;924:1;949:53;994:7;985:6;974:9;970:22;949:53;:::i;:::-;939:63;;895:117;690:329;;;;:::o;1025:118::-;1112:24;1130:5;1112:24;:::i;:::-;1107:3;1100:37;1025:118;;:::o;1149:222::-;1242:4;1280:2;1269:9;1265:18;1257:26;;1293:71;1361:1;1350:9;1346:17;1337:6;1293:71;:::i;:::-;1149:222;;;;:::o;1377:474::-;1445:6;1453;1502:2;1490:9;1481:7;1477:23;1473:32;1470:119;;;1508:79;;:::i;:::-;1470:119;1628:1;1653:53;1698:7;1689:6;1678:9;1674:22;1653:53;:::i;:::-;1643:63;;1599:117;1755:2;1781:53;1826:7;1817:6;1806:9;1802:22;1781:53;:::i;:::-;1771:63;;1726:118;1377:474;;;;;:::o;1857:332::-;1978:4;2016:2;2005:9;2001:18;1993:26;;2029:71;2097:1;2086:9;2082:17;2073:6;2029:71;:::i;:::-;2110:72;2178:2;2167:9;2163:18;2154:6;2110:72;:::i;:::-;1857:332;;;;;:::o;2195:90::-;2229:7;2272:5;2265:13;2258:21;2247:32;;2195:90;;;:::o;2291:109::-;2372:21;2387:5;2372:21;:::i;:::-;2367:3;2360:34;2291:109;;:::o;2406:210::-;2493:4;2531:2;2520:9;2516:18;2508:26;;2544:65;2606:1;2595:9;2591:17;2582:6;2544:65;:::i;:::-;2406:210;;;;:::o;2622:126::-;2659:7;2699:42;2692:5;2688:54;2677:65;;2622:126;;;:::o;2754:60::-;2782:3;2803:5;2796:12;;2754:60;;;:::o;2820:142::-;2870:9;2903:53;2921:34;2930:24;2948:5;2930:24;:::i;:::-;2921:34;:::i;:::-;2903:53;:::i;:::-;2890:66;;2820:142;;;:::o;2968:126::-;3018:9;3051:37;3082:5;3051:37;:::i;:::-;3038:50;;2968:126;;;:::o;3100:148::-;3172:9;3205:37;3236:5;3205:37;:::i;:::-;3192:50;;3100:148;;;:::o;3254:165::-;3353:59;3406:5;3353:59;:::i;:::-;3348:3;3341:72;3254:165;;:::o;3425:142::-;3491:9;3524:37;3555:5;3524:37;:::i;:::-;3511:50;;3425:142;;;:::o;3573:153::-;3666:53;3713:5;3666:53;:::i;:::-;3661:3;3654:66;3573:153;;:::o;3732:108::-;3809:24;3827:5;3809:24;:::i;:::-;3804:3;3797:37;3732:108;;:::o;3846:96::-;3883:7;3912:24;3930:5;3912:24;:::i;:::-;3901:35;;3846:96;;;:::o;3948:108::-;4025:24;4043:5;4025:24;:::i;:::-;4020:3;4013:37;3948:108;;:::o;4140:2009::-;4301:6;4296:3;4292:16;4391:4;4384:5;4380:16;4374:23;4410:85;4489:4;4484:3;4480:14;4466:12;4410:85;:::i;:::-;4318:187;4595:4;4588:5;4584:16;4578:23;4614:79;4687:4;4682:3;4678:14;4664:12;4614:79;:::i;:::-;4515:188;4790:4;4783:5;4779:16;4773:23;4809:63;4866:4;4861:3;4857:14;4843:12;4809:63;:::i;:::-;4713:169;4965:4;4958:5;4954:16;4948:23;4984:63;5041:4;5036:3;5032:14;5018:12;4984:63;:::i;:::-;4892:165;5143:4;5136:5;5132:16;5126:23;5162:63;5219:4;5214:3;5210:14;5196:12;5162:63;:::i;:::-;5067:168;5322:4;5315:5;5311:16;5305:23;5341:63;5398:4;5393:3;5389:14;5375:12;5341:63;:::i;:::-;5245:169;5499:4;5492:5;5488:16;5482:23;5518:63;5575:4;5570:3;5566:14;5552:12;5518:63;:::i;:::-;5424:167;5676:4;5669:5;5665:16;5659:23;5695:63;5752:4;5747:3;5743:14;5729:12;5695:63;:::i;:::-;5601:167;5860:6;5853:5;5849:18;5843:25;5881:65;5938:6;5933:3;5929:16;5915:12;5881:65;:::i;:::-;5778:178;6046:6;6039:5;6035:18;6029:25;6067:65;6124:6;6119:3;6115:16;6101:12;6067:65;:::i;:::-;5966:176;4270:1879;4140:2009;;:::o;6155:180::-;6203:77;6200:1;6193:88;6300:4;6297:1;6290:15;6324:4;6321:1;6314:15;6341:123;6432:1;6425:5;6422:12;6412:46;;6438:18;;:::i;:::-;6412:46;6341:123;:::o;6470:147::-;6525:7;6554:5;6543:16;;6560:51;6605:5;6560:51;:::i;:::-;6470:147;;;:::o;6623:::-;6689:9;6722:42;6758:5;6722:42;:::i;:::-;6709:55;;6623:147;;;:::o;6776:163::-;6879:53;6926:5;6879:53;:::i;:::-;6874:3;6867:66;6776:163;;:::o;6945:716::-;7202:4;7240:3;7229:9;7225:19;7217:27;;7254:135;7386:1;7375:9;7371:17;7362:6;7254:135;:::i;:::-;7399:89;7483:3;7472:9;7468:19;7459:6;7399:89;:::i;:::-;7498:73;7566:3;7555:9;7551:19;7542:6;7498:73;:::i;:::-;7581;7649:3;7638:9;7634:19;7625:6;7581:73;:::i;:::-;6945:716;;;;;;;:::o;7667:122::-;7740:24;7758:5;7740:24;:::i;:::-;7733:5;7730:35;7720:63;;7779:1;7776;7769:12;7720:63;7667:122;:::o;7795:139::-;7841:5;7879:6;7866:20;7857:29;;7895:33;7922:5;7895:33;:::i;:::-;7795:139;;;;:::o;7940:329::-;7999:6;8048:2;8036:9;8027:7;8023:23;8019:32;8016:119;;;8054:79;;:::i;:::-;8016:119;8174:1;8199:53;8244:7;8235:6;8224:9;8220:22;8199:53;:::i;:::-;8189:63;;8145:117;7940:329;;;;:::o;8275:118::-;8362:24;8380:5;8362:24;:::i;:::-;8357:3;8350:37;8275:118;;:::o;8399:222::-;8492:4;8530:2;8519:9;8515:18;8507:26;;8543:71;8611:1;8600:9;8596:17;8587:6;8543:71;:::i;:::-;8399:222;;;;:::o;8627:619::-;8704:6;8712;8720;8769:2;8757:9;8748:7;8744:23;8740:32;8737:119;;;8775:79;;:::i;:::-;8737:119;8895:1;8920:53;8965:7;8956:6;8945:9;8941:22;8920:53;:::i;:::-;8910:63;;8866:117;9022:2;9048:53;9093:7;9084:6;9073:9;9069:22;9048:53;:::i;:::-;9038:63;;8993:118;9150:2;9176:53;9221:7;9212:6;9201:9;9197:22;9176:53;:::i;:::-;9166:63;;9121:118;8627:619;;;;;:::o;9252:112::-;9305:7;9334:24;9352:5;9334:24;:::i;:::-;9323:35;;9252:112;;;:::o;9370:154::-;9459:40;9493:5;9459:40;:::i;:::-;9452:5;9449:51;9439:79;;9514:1;9511;9504:12;9439:79;9370:154;:::o;9530:171::-;9592:5;9630:6;9617:20;9608:29;;9646:49;9689:5;9646:49;:::i;:::-;9530:171;;;;:::o;9707:506::-;9791:6;9799;9848:2;9836:9;9827:7;9823:23;9819:32;9816:119;;;9854:79;;:::i;:::-;9816:119;9974:1;9999:69;10060:7;10051:6;10040:9;10036:22;9999:69;:::i;:::-;9989:79;;9945:133;10117:2;10143:53;10188:7;10179:6;10168:9;10164:22;10143:53;:::i;:::-;10133:63;;10088:118;9707:506;;;;;:::o;10219:117::-;10328:1;10325;10318:12;10383:239;10463:5;10504:3;10495:6;10490:3;10486:16;10482:26;10479:113;;;10511:79;;:::i;:::-;10479:113;10610:6;10601:15;;10383:239;;;;:::o;10628:557::-;10721:6;10770:2;10758:9;10749:7;10745:23;10741:32;10738:119;;;10776:79;;:::i;:::-;10738:119;10924:1;10913:9;10909:17;10896:31;10954:18;10946:6;10943:30;10940:117;;;10976:79;;:::i;:::-;10940:117;11081:87;11160:7;11151:6;11140:9;11136:22;11081:87;:::i;:::-;11071:97;;10867:311;10628:557;;;;:::o;11191:474::-;11259:6;11267;11316:2;11304:9;11295:7;11291:23;11287:32;11284:119;;;11322:79;;:::i;:::-;11284:119;11442:1;11467:53;11512:7;11503:6;11492:9;11488:22;11467:53;:::i;:::-;11457:63;;11413:117;11569:2;11595:53;11640:7;11631:6;11620:9;11616:22;11595:53;:::i;:::-;11585:63;;11540:118;11191:474;;;;;:::o;11671:180::-;11719:77;11716:1;11709:88;11816:4;11813:1;11806:15;11840:4;11837:1;11830:15;11857:410;11897:7;11920:20;11938:1;11920:20;:::i;:::-;11915:25;;11954:20;11972:1;11954:20;:::i;:::-;11949:25;;12009:1;12006;12002:9;12031:30;12049:11;12031:30;:::i;:::-;12020:41;;12210:1;12201:7;12197:15;12194:1;12191:22;12171:1;12164:9;12144:83;12121:139;;12240:18;;:::i;:::-;12121:139;11905:362;11857:410;;;;:::o;12273:180::-;12321:77;12318:1;12311:88;12418:4;12415:1;12408:15;12442:4;12439:1;12432:15;12459:185;12499:1;12516:20;12534:1;12516:20;:::i;:::-;12511:25;;12550:20;12568:1;12550:20;:::i;:::-;12545:25;;12589:1;12579:35;;12594:18;;:::i;:::-;12579:35;12636:1;12633;12629:9;12624:14;;12459:185;;;;:::o;12650:169::-;12734:11;12768:6;12763:3;12756:19;12808:4;12803:3;12799:14;12784:29;;12650:169;;;;:::o;12825:164::-;12965:16;12961:1;12953:6;12949:14;12942:40;12825:164;:::o;12995:366::-;13137:3;13158:67;13222:2;13217:3;13158:67;:::i;:::-;13151:74;;13234:93;13323:3;13234:93;:::i;:::-;13352:2;13347:3;13343:12;13336:19;;12995:366;;;:::o;13367:419::-;13533:4;13571:2;13560:9;13556:18;13548:26;;13620:9;13614:4;13610:20;13606:1;13595:9;13591:17;13584:47;13648:131;13774:4;13648:131;:::i;:::-;13640:139;;13367:419;;;:::o;13792:167::-;13932:19;13928:1;13920:6;13916:14;13909:43;13792:167;:::o;13965:366::-;14107:3;14128:67;14192:2;14187:3;14128:67;:::i;:::-;14121:74;;14204:93;14293:3;14204:93;:::i;:::-;14322:2;14317:3;14313:12;14306:19;;13965:366;;;:::o;14337:419::-;14503:4;14541:2;14530:9;14526:18;14518:26;;14590:9;14584:4;14580:20;14576:1;14565:9;14561:17;14554:47;14618:131;14744:4;14618:131;:::i;:::-;14610:139;;14337:419;;;:::o;14762:160::-;14902:12;14898:1;14890:6;14886:14;14879:36;14762:160;:::o;14928:366::-;15070:3;15091:67;15155:2;15150:3;15091:67;:::i;:::-;15084:74;;15167:93;15256:3;15167:93;:::i;:::-;15285:2;15280:3;15276:12;15269:19;;14928:366;;;:::o;15300:419::-;15466:4;15504:2;15493:9;15489:18;15481:26;;15553:9;15547:4;15543:20;15539:1;15528:9;15524:17;15517:47;15581:131;15707:4;15581:131;:::i;:::-;15573:139;;15300:419;;;:::o;15725:162::-;15865:14;15861:1;15853:6;15849:14;15842:38;15725:162;:::o;15893:366::-;16035:3;16056:67;16120:2;16115:3;16056:67;:::i;:::-;16049:74;;16132:93;16221:3;16132:93;:::i;:::-;16250:2;16245:3;16241:12;16234:19;;15893:366;;;:::o;16265:419::-;16431:4;16469:2;16458:9;16454:18;16446:26;;16518:9;16512:4;16508:20;16504:1;16493:9;16489:17;16482:47;16546:131;16672:4;16546:131;:::i;:::-;16538:139;;16265:419;;;:::o;16690:168::-;16830:20;16826:1;16818:6;16814:14;16807:44;16690:168;:::o;16864:366::-;17006:3;17027:67;17091:2;17086:3;17027:67;:::i;:::-;17020:74;;17103:93;17192:3;17103:93;:::i;:::-;17221:2;17216:3;17212:12;17205:19;;16864:366;;;:::o;17236:419::-;17402:4;17440:2;17429:9;17425:18;17417:26;;17489:9;17483:4;17479:20;17475:1;17464:9;17460:17;17453:47;17517:131;17643:4;17517:131;:::i;:::-;17509:139;;17236:419;;;:::o;17661:161::-;17801:13;17797:1;17789:6;17785:14;17778:37;17661:161;:::o;17828:366::-;17970:3;17991:67;18055:2;18050:3;17991:67;:::i;:::-;17984:74;;18067:93;18156:3;18067:93;:::i;:::-;18185:2;18180:3;18176:12;18169:19;;17828:366;;;:::o;18200:419::-;18366:4;18404:2;18393:9;18389:18;18381:26;;18453:9;18447:4;18443:20;18439:1;18428:9;18424:17;18417:47;18481:131;18607:4;18481:131;:::i;:::-;18473:139;;18200:419;;;:::o;18625:155::-;18765:7;18761:1;18753:6;18749:14;18742:31;18625:155;:::o;18786:365::-;18928:3;18949:66;19013:1;19008:3;18949:66;:::i;:::-;18942:73;;19024:93;19113:3;19024:93;:::i;:::-;19142:2;19137:3;19133:12;19126:19;;18786:365;;;:::o;19157:419::-;19323:4;19361:2;19350:9;19346:18;19338:26;;19410:9;19404:4;19400:20;19396:1;19385:9;19381:17;19374:47;19438:131;19564:4;19438:131;:::i;:::-;19430:139;;19157:419;;;:::o;19582:161::-;19722:13;19718:1;19710:6;19706:14;19699:37;19582:161;:::o;19749:366::-;19891:3;19912:67;19976:2;19971:3;19912:67;:::i;:::-;19905:74;;19988:93;20077:3;19988:93;:::i;:::-;20106:2;20101:3;20097:12;20090:19;;19749:366;;;:::o;20121:419::-;20287:4;20325:2;20314:9;20310:18;20302:26;;20374:9;20368:4;20364:20;20360:1;20349:9;20345:17;20338:47;20402:131;20528:4;20402:131;:::i;:::-;20394:139;;20121:419;;;:::o;20546:191::-;20586:3;20605:20;20623:1;20605:20;:::i;:::-;20600:25;;20639:20;20657:1;20639:20;:::i;:::-;20634:25;;20682:1;20679;20675:9;20668:16;;20703:3;20700:1;20697:10;20694:36;;;20710:18;;:::i;:::-;20694:36;20546:191;;;;:::o;20743:167::-;20883:19;20879:1;20871:6;20867:14;20860:43;20743:167;:::o;20916:366::-;21058:3;21079:67;21143:2;21138:3;21079:67;:::i;:::-;21072:74;;21155:93;21244:3;21155:93;:::i;:::-;21273:2;21268:3;21264:12;21257:19;;20916:366;;;:::o;21288:419::-;21454:4;21492:2;21481:9;21477:18;21469:26;;21541:9;21535:4;21531:20;21527:1;21516:9;21512:17;21505:47;21569:131;21695:4;21569:131;:::i;:::-;21561:139;;21288:419;;;:::o;21713:332::-;21834:4;21872:2;21861:9;21857:18;21849:26;;21885:71;21953:1;21942:9;21938:17;21929:6;21885:71;:::i;:::-;21966:72;22034:2;22023:9;22019:18;22010:6;21966:72;:::i;:::-;21713:332;;;;;:::o;22051:664::-;22256:4;22294:3;22283:9;22279:19;22271:27;;22308:71;22376:1;22365:9;22361:17;22352:6;22308:71;:::i;:::-;22389:72;22457:2;22446:9;22442:18;22433:6;22389:72;:::i;:::-;22471;22539:2;22528:9;22524:18;22515:6;22471:72;:::i;:::-;22553;22621:2;22610:9;22606:18;22597:6;22553:72;:::i;:::-;22635:73;22703:3;22692:9;22688:19;22679:6;22635:73;:::i;:::-;22051:664;;;;;;;;:::o;22721:164::-;22861:16;22857:1;22849:6;22845:14;22838:40;22721:164;:::o;22891:366::-;23033:3;23054:67;23118:2;23113:3;23054:67;:::i;:::-;23047:74;;23130:93;23219:3;23130:93;:::i;:::-;23248:2;23243:3;23239:12;23232:19;;22891:366;;;:::o;23263:419::-;23429:4;23467:2;23456:9;23452:18;23444:26;;23516:9;23510:4;23506:20;23502:1;23491:9;23487:17;23480:47;23544:131;23670:4;23544:131;:::i;:::-;23536:139;;23263:419;;;:::o;23688:143::-;23745:5;23776:6;23770:13;23761:22;;23792:33;23819:5;23792:33;:::i;:::-;23688:143;;;;:::o;23837:351::-;23907:6;23956:2;23944:9;23935:7;23931:23;23927:32;23924:119;;;23962:79;;:::i;:::-;23924:119;24082:1;24107:64;24163:7;24154:6;24143:9;24139:22;24107:64;:::i;:::-;24097:74;;24053:128;23837:351;;;;:::o;24194:166::-;24334:18;24330:1;24322:6;24318:14;24311:42;24194:166;:::o;24366:366::-;24508:3;24529:67;24593:2;24588:3;24529:67;:::i;:::-;24522:74;;24605:93;24694:3;24605:93;:::i;:::-;24723:2;24718:3;24714:12;24707:19;;24366:366;;;:::o;24738:419::-;24904:4;24942:2;24931:9;24927:18;24919:26;;24991:9;24985:4;24981:20;24977:1;24966:9;24962:17;24955:47;25019:131;25145:4;25019:131;:::i;:::-;25011:139;;24738:419;;;:::o;25163:194::-;25203:4;25223:20;25241:1;25223:20;:::i;:::-;25218:25;;25257:20;25275:1;25257:20;:::i;:::-;25252:25;;25301:1;25298;25294:9;25286:17;;25325:1;25319:4;25316:11;25313:37;;;25330:18;;:::i;:::-;25313:37;25163:194;;;;:::o;25363:173::-;25503:25;25499:1;25491:6;25487:14;25480:49;25363:173;:::o;25542:366::-;25684:3;25705:67;25769:2;25764:3;25705:67;:::i;:::-;25698:74;;25781:93;25870:3;25781:93;:::i;:::-;25899:2;25894:3;25890:12;25883:19;;25542:366;;;:::o;25914:419::-;26080:4;26118:2;26107:9;26103:18;26095:26;;26167:9;26161:4;26157:20;26153:1;26142:9;26138:17;26131:47;26195:131;26321:4;26195:131;:::i;:::-;26187:139;;25914:419;;;:::o;26339:173::-;26479:25;26475:1;26467:6;26463:14;26456:49;26339:173;:::o;26518:366::-;26660:3;26681:67;26745:2;26740:3;26681:67;:::i;:::-;26674:74;;26757:93;26846:3;26757:93;:::i;:::-;26875:2;26870:3;26866:12;26859:19;;26518:366;;;:::o;26890:419::-;27056:4;27094:2;27083:9;27079:18;27071:26;;27143:9;27137:4;27133:20;27129:1;27118:9;27114:17;27107:47;27171:131;27297:4;27171:131;:::i;:::-;27163:139;;26890:419;;;:::o;27315:233::-;27354:3;27377:24;27395:5;27377:24;:::i;:::-;27368:33;;27423:66;27416:5;27413:77;27410:103;;27493:18;;:::i;:::-;27410:103;27540:1;27533:5;27529:13;27522:20;;27315:233;;;:::o;27554:117::-;27663:1;27660;27653:12;27677:117;27786:1;27783;27776:12;27800:117;27909:1;27906;27899:12;27923:725;28001:4;28007:6;28063:11;28050:25;28163:1;28157:4;28153:12;28142:8;28126:14;28122:29;28118:48;28098:18;28094:73;28084:168;;28171:79;;:::i;:::-;28084:168;28283:18;28273:8;28269:33;28261:41;;28335:4;28322:18;28312:28;;28363:18;28355:6;28352:30;28349:117;;;28385:79;;:::i;:::-;28349:117;28493:2;28487:4;28483:13;28475:21;;28550:4;28542:6;28538:17;28522:14;28518:38;28512:4;28508:49;28505:136;;;28560:79;;:::i;:::-;28505:136;28014:634;27923:725;;;;;:::o;28654:146::-;28751:6;28746:3;28741;28728:30;28792:1;28783:6;28778:3;28774:16;28767:27;28654:146;;;:::o;28806:102::-;28847:6;28898:2;28894:7;28889:2;28882:5;28878:14;28874:28;28864:38;;28806:102;;;:::o;28938:317::-;29036:3;29057:71;29121:6;29116:3;29057:71;:::i;:::-;29050:78;;29138:56;29187:6;29182:3;29175:5;29138:56;:::i;:::-;29219:29;29241:6;29219:29;:::i;:::-;29214:3;29210:39;29203:46;;28938:317;;;;;:::o;29261:775::-;29498:4;29536:3;29525:9;29521:19;29513:27;;29586:9;29580:4;29576:20;29572:1;29561:9;29557:17;29550:47;29614:88;29697:4;29688:6;29680;29614:88;:::i;:::-;29606:96;;29749:9;29743:4;29739:20;29734:2;29723:9;29719:18;29712:48;29777:88;29860:4;29851:6;29843;29777:88;:::i;:::-;29769:96;;29875:72;29943:2;29932:9;29928:18;29919:6;29875:72;:::i;:::-;29957;30025:2;30014:9;30010:18;30001:6;29957:72;:::i;:::-;29261:775;;;;;;;;;:::o;30042:997::-;30331:4;30369:3;30358:9;30354:19;30346:27;;30383:71;30451:1;30440:9;30436:17;30427:6;30383:71;:::i;:::-;30464:72;30532:2;30521:9;30517:18;30508:6;30464:72;:::i;:::-;30546;30614:2;30603:9;30599:18;30590:6;30546:72;:::i;:::-;30628;30696:2;30685:9;30681:18;30672:6;30628:72;:::i;:::-;30710:73;30778:3;30767:9;30763:19;30754:6;30710:73;:::i;:::-;30793;30861:3;30850:9;30846:19;30837:6;30793:73;:::i;:::-;30876;30944:3;30933:9;30929:19;30920:6;30876:73;:::i;:::-;30959;31027:3;31016:9;31012:19;31003:6;30959:73;:::i;:::-;30042:997;;;;;;;;;;;:::o;31045:161::-;31185:13;31181:1;31173:6;31169:14;31162:37;31045:161;:::o;31212:366::-;31354:3;31375:67;31439:2;31434:3;31375:67;:::i;:::-;31368:74;;31451:93;31540:3;31451:93;:::i;:::-;31569:2;31564:3;31560:12;31553:19;;31212:366;;;:::o;31584:419::-;31750:4;31788:2;31777:9;31773:18;31765:26;;31837:9;31831:4;31827:20;31823:1;31812:9;31808:17;31801:47;31865:131;31991:4;31865:131;:::i;:::-;31857:139;;31584:419;;;:::o;32009:171::-;32149:23;32145:1;32137:6;32133:14;32126:47;32009:171;:::o;32186:366::-;32328:3;32349:67;32413:2;32408:3;32349:67;:::i;:::-;32342:74;;32425:93;32514:3;32425:93;:::i;:::-;32543:2;32538:3;32534:12;32527:19;;32186:366;;;:::o;32558:419::-;32724:4;32762:2;32751:9;32747:18;32739:26;;32811:9;32805:4;32801:20;32797:1;32786:9;32782:17;32775:47;32839:131;32965:4;32839:131;:::i;:::-;32831:139;;32558:419;;;:::o;32983:167::-;33123:19;33119:1;33111:6;33107:14;33100:43;32983:167;:::o;33156:366::-;33298:3;33319:67;33383:2;33378:3;33319:67;:::i;:::-;33312:74;;33395:93;33484:3;33395:93;:::i;:::-;33513:2;33508:3;33504:12;33497:19;;33156:366;;;:::o;33528:419::-;33694:4;33732:2;33721:9;33717:18;33709:26;;33781:9;33775:4;33771:20;33767:1;33756:9;33752:17;33745:47;33809:131;33935:4;33809:131;:::i;:::-;33801:139;;33528:419;;;:::o;33953:169::-;34093:21;34089:1;34081:6;34077:14;34070:45;33953:169;:::o;34128:366::-;34270:3;34291:67;34355:2;34350:3;34291:67;:::i;:::-;34284:74;;34367:93;34456:3;34367:93;:::i;:::-;34485:2;34480:3;34476:12;34469:19;;34128:366;;;:::o;34500:419::-;34666:4;34704:2;34693:9;34689:18;34681:26;;34753:9;34747:4;34743:20;34739:1;34728:9;34724:17;34717:47;34781:131;34907:4;34781:131;:::i;:::-;34773:139;;34500:419;;;:::o;34925:168::-;35065:20;35061:1;35053:6;35049:14;35042:44;34925:168;:::o;35099:366::-;35241:3;35262:67;35326:2;35321:3;35262:67;:::i;:::-;35255:74;;35338:93;35427:3;35338:93;:::i;:::-;35456:2;35451:3;35447:12;35440:19;;35099:366;;;:::o;35471:419::-;35637:4;35675:2;35664:9;35660:18;35652:26;;35724:9;35718:4;35714:20;35710:1;35699:9;35695:17;35688:47;35752:131;35878:4;35752:131;:::i;:::-;35744:139;;35471:419;;;:::o;35896:158::-;36036:10;36032:1;36024:6;36020:14;36013:34;35896:158;:::o;36060:365::-;36202:3;36223:66;36287:1;36282:3;36223:66;:::i;:::-;36216:73;;36298:93;36387:3;36298:93;:::i;:::-;36416:2;36411:3;36407:12;36400:19;;36060:365;;;:::o;36431:419::-;36597:4;36635:2;36624:9;36620:18;36612:26;;36684:9;36678:4;36674:20;36670:1;36659:9;36655:17;36648:47;36712:131;36838:4;36712:131;:::i;:::-;36704:139;;36431:419;;;:::o;36856:175::-;36996:27;36992:1;36984:6;36980:14;36973:51;36856:175;:::o;37037:366::-;37179:3;37200:67;37264:2;37259:3;37200:67;:::i;:::-;37193:74;;37276:93;37365:3;37276:93;:::i;:::-;37394:2;37389:3;37385:12;37378:19;;37037:366;;;:::o;37409:419::-;37575:4;37613:2;37602:9;37598:18;37590:26;;37662:9;37656:4;37652:20;37648:1;37637:9;37633:17;37626:47;37690:131;37816:4;37690:131;:::i;:::-;37682:139;;37409:419;;;:::o;37834:165::-;37974:17;37970:1;37962:6;37958:14;37951:41;37834:165;:::o;38005:366::-;38147:3;38168:67;38232:2;38227:3;38168:67;:::i;:::-;38161:74;;38244:93;38333:3;38244:93;:::i;:::-;38362:2;38357:3;38353:12;38346:19;;38005:366;;;:::o;38377:419::-;38543:4;38581:2;38570:9;38566:18;38558:26;;38630:9;38624:4;38620:20;38616:1;38605:9;38601:17;38594:47;38658:131;38784:4;38658:131;:::i;:::-;38650:139;;38377:419;;;:::o;38802:164::-;38942:16;38938:1;38930:6;38926:14;38919:40;38802:164;:::o;38972:366::-;39114:3;39135:67;39199:2;39194:3;39135:67;:::i;:::-;39128:74;;39211:93;39300:3;39211:93;:::i;:::-;39329:2;39324:3;39320:12;39313:19;;38972:366;;;:::o;39344:419::-;39510:4;39548:2;39537:9;39533:18;39525:26;;39597:9;39591:4;39587:20;39583:1;39572:9;39568:17;39561:47;39625:131;39751:4;39625:131;:::i;:::-;39617:139;;39344:419;;;:::o;39769:173::-;39909:25;39905:1;39897:6;39893:14;39886:49;39769:173;:::o;39948:366::-;40090:3;40111:67;40175:2;40170:3;40111:67;:::i;:::-;40104:74;;40187:93;40276:3;40187:93;:::i;:::-;40305:2;40300:3;40296:12;40289:19;;39948:366;;;:::o;40320:419::-;40486:4;40524:2;40513:9;40509:18;40501:26;;40573:9;40567:4;40563:20;40559:1;40548:9;40544:17;40537:47;40601:131;40727:4;40601:131;:::i;:::-;40593:139;;40320:419;;;:::o;40745:165::-;40885:17;40881:1;40873:6;40869:14;40862:41;40745:165;:::o;40916:366::-;41058:3;41079:67;41143:2;41138:3;41079:67;:::i;:::-;41072:74;;41155:93;41244:3;41155:93;:::i;:::-;41273:2;41268:3;41264:12;41257:19;;40916:366;;;:::o;41288:419::-;41454:4;41492:2;41481:9;41477:18;41469:26;;41541:9;41535:4;41531:20;41527:1;41516:9;41512:17;41505:47;41569:131;41695:4;41569:131;:::i;:::-;41561:139;;41288:419;;;:::o;41713:180::-;41853:32;41849:1;41841:6;41837:14;41830:56;41713:180;:::o;41899:366::-;42041:3;42062:67;42126:2;42121:3;42062:67;:::i;:::-;42055:74;;42138:93;42227:3;42138:93;:::i;:::-;42256:2;42251:3;42247:12;42240:19;;41899:366;;;:::o;42271:419::-;42437:4;42475:2;42464:9;42460:18;42452:26;;42524:9;42518:4;42514:20;42510:1;42499:9;42495:17;42488:47;42552:131;42678:4;42552:131;:::i;:::-;42544:139;;42271:419;;;:::o;42696:86::-;42731:7;42771:4;42764:5;42760:16;42749:27;;42696:86;;;:::o;42788:170::-;42818:1;42835:18;42851:1;42835:18;:::i;:::-;42830:23;;42867:18;42883:1;42867:18;:::i;:::-;42862:23;;42904:1;42894:35;;42909:18;;:::i;:::-;42894:35;42950:1;42947;42943:9;42938:14;;42788:170;;;;:::o",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "MAX_FEE_BPS()": "d55be8c6",
    "MIN_LIQUIDITY_BPS()": "75f0c2f0",
    "auctionCount()": "2ad71573",
    "auctions(uint256)": "571a26a0",
    "buyTokens(uint256,uint256,uint256)": "a4ce25a7",
    "completeAuction(uint256)": "21b62886",
    "createAuction((string,string,uint256,address,uint256,uint256,uint256,uint256,uint256,uint256))": "b905fe56",
    "custodied(address)": "5c471ad5",
    "defaultFeeBps()": "bcae25a4",
    "getBuyCost(uint256,uint256)": "121a257f",
    "getSpotPrice(uint256)": "0fda366d",
    "owner()": "8da5cb5b",
    "proceedsWithdrawn(uint256)": "48f719e5",
    "protocolFeeRecipient()": "64df049e",
    "renounceOwnership()": "715018a6",
    "setDefaultFeeBps(uint256)": "4373a286",
    "setProtocolFeeRecipient(address)": "e521cb92",
    "sweep(address,address)": "b8dc491b",
    "transferOwnership(address)": "f2fde38b",
    "userPurchases(uint256,address)": "efc20dad",
    "withdrawProceeds(uint256)": "d9f1aed9"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.24+commit.e11b9ed9\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"feeRecipient_\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"defaultFeeBps_\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnableInvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"OwnableUnauthorizedAccount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"totalRaised\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"totalSold\",\"type\":\"uint256\"}],\"name\":\"AuctionCompleted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"creator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"paymentToken\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"slope\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maxRaise\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"startTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"endTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"liquidityBps\",\"type\":\"uint256\"}],\"name\":\"AuctionCreated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"liquidityPool\",\"type\":\"address\"}],\"name\":\"AuctionMigrated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"previous\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"current\",\"type\":\"uint256\"}],\"name\":\"DefaultFeeBpsUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"creator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"ProceedsWithdrawn\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previous\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"current\",\"type\":\"address\"}],\"name\":\"ProtocolFeeRecipientUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Swept\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"buyer\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"cost\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"protocolFee\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newTotalRaised\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newTotalSold\",\"type\":\"uint256\"}],\"name\":\"TokensPurchased\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"MAX_FEE_BPS\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MIN_LIQUIDITY_BPS\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"auctionCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"auctions\",\"outputs\":[{\"components\":[{\"internalType\":\"contract AuctionToken\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"paymentToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"basePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"slope\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"maxRaise\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"startTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"endTime\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"creator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"protocolFeeBps\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"liquidityBps\",\"type\":\"uint256\"}],\"internalType\":\"struct TokenAuction.AuctionConfig\",\"name\":\"config\",\"type\":\"tuple\"},{\"internalType\":\"enum TokenAuction.AuctionState\",\"name\":\"state\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"totalRaised\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalSold\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"maxCost\",\"type\":\"uint256\"}],\"name\":\"buyTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"}],\"name\":\"completeAuction\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"maxSupply\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"paymentToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"basePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"slope\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"maxRaise\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"startTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"endTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"liquidityBps\",\"type\":\"uint256\"}],\"internalType\":\"struct TokenAuction.AuctionParams\",\"name\":\"p\",\"type\":\"tuple\"}],\"name\":\"createAuction\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"custodied\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"defaultFeeBps\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"getBuyCost\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"cost\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"fee\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"}],\"name\":\"getSpotPrice\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"proceedsWithdrawn\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"protocolFeeRecipient\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"feeBps\",\"type\":\"uint256\"}],\"name\":\"setDefaultFeeBps\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"}],\"name\":\"setProtocolFeeRecipient\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"sweep\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"userPurchases\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"}],\"name\":\"withdrawProceeds\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"OwnableInvalidOwner(address)\":[{\"details\":\"The owner is not a valid owner account. (eg. `address(0)`)\"}],\"OwnableUnauthorizedAccount(address)\":[{\"details\":\"The caller account is not authorized to perform an operation.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC-20 token failed.\"}]},\"kind\":\"dev\",\"methods\":{\"buyTokens(uint256,uint256,uint256)\":{\"details\":\"A purchase that would overshoot `maxRaise` is filled with what the        remaining budget buys and closes the auction, so the buyer may        receive less than `amount`; `TokensPurchased` reports the actual        amount.\",\"params\":{\"maxCost\":\"Most the buyer will pay in total (cost + protocol fee), in        payment-token units. The price rises with every purchase, so a        quote can be stale by the time a transaction lands; this bound        makes the buy revert instead of filling at a worse price.\"}},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"},\"withdrawProceeds(uint256)\":{\"details\":\"Callable once, by the creator, after the auction reaches COMPLETED.      Protocol fees are routed to the fee recipient at buy time, so the      contract custodies exactly `totalRaised` for this auction.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"MAX_FEE_BPS()\":{\"notice\":\"Upper bound on the protocol fee, so the owner can never set a         fee that confiscates a meaningful share of a purchase.\"},\"MIN_LIQUIDITY_BPS()\":{\"notice\":\"Smallest share of the raise a creator may commit to the         Uniswap pool, so no launch ships with a token too thinly         traded to be usable.\"},\"buyTokens(uint256,uint256,uint256)\":{\"notice\":\"Buy `amount` tokens (in token wei) from an active auction.\"},\"custodied(address)\":{\"notice\":\"Payment tokens this contract owes to auction creators, per token:         the sum of `totalRaised` across auctions not yet withdrawn.         Anything held above this is excess (e.g. tokens sent here         directly) and can be recovered with `sweep`.\"},\"setDefaultFeeBps(uint256)\":{\"notice\":\"Change the fee for auctions created from now on. Existing         auctions keep the fee they were created with, so a creator's         terms can never change mid-sale.\"},\"setProtocolFeeRecipient(address)\":{\"notice\":\"Change where protocol fees are sent. Applies to purchases made         after the change, in every auction.\"},\"sweep(address,address)\":{\"notice\":\"Recover tokens held above what is owed to auction creators,         such as tokens transferred to this contract directly. Funds         backing an unwithdrawn auction can never be swept.\"},\"withdrawProceeds(uint256)\":{\"notice\":\"Transfer an auction's raised payment tokens to its creator.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/TokenAuction.sol\":\"TokenAuction\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/access/Ownable.sol\":{\"keccak256\":\"0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6\",\"dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC1363.sol\":{\"keccak256\":\"0xd5ea07362ab630a6a3dee4285a74cf2377044ca2e4be472755ad64d7c5d4b69d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://da5e832b40fc5c3145d3781e2e5fa60ac2052c9d08af7e300dc8ab80c4343100\",\"dweb:/ipfs/QmTzf7N5ZUdh5raqtzbM11yexiUoLC9z3Ws632MCuycq1d\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC165.sol\":{\"keccak256\":\"0x0afcb7e740d1537b252cb2676f600465ce6938398569f09ba1b9ca240dde2dfc\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1c299900ac4ec268d4570ecef0d697a3013cd11a6eb74e295ee3fbc945056037\",\"dweb:/ipfs/Qmab9owJoxcA7vJT5XNayCMaUR1qxqj1NDzzisduwaJMcZ\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC20.sol\":{\"keccak256\":\"0x1a6221315ce0307746c2c4827c125d821ee796c74a676787762f4778671d4f44\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1bb2332a7ee26dd0b0de9b7fe266749f54820c99ab6a3bcb6f7e6b751d47ee2d\",\"dweb:/ipfs/QmcRWpaBeCYkhy68PR3B4AgD7asuQk7PwkWxrvJbZcikLF\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x1b88b3fb3d85ba5496d7d5f396f83ee1fddcdd6762059ff65992655b67920998\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://89393bb3212da1c0889601b9706a07b39419ddc4d2faab9eaf6e7f9152cf6a1c\",\"dweb:/ipfs/QmcCfzzxv1Bkdz1c1yF4gQCeYb6Us5BJANnzTFqawfd1HL\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0x669464167428061ee0f8618b73b3ee90aff8405683e7ddde8cd77dadaa1afe29\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0dda78587a7358b4fdf6b9fca0fde5a5e34930f36d5268a16028627fc0170195\",\"dweb:/ipfs/QmQ1b6cCceDRWNxti9HifsTCzmVP25Haxs1bWugm52vTqH\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x74ed01eb66b923d0d0cfe3be84604ac04b76482a55f9dd655e1ef4d367f95bc2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5282825a626cfe924e504274b864a652b0023591fa66f06a067b25b51ba9b303\",\"dweb:/ipfs/QmeCfPykghhMc81VJTrHTC7sF6CRvaA1FXVq2pJhwYp1dV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xd6fa4088198f04eef10c5bce8a2f4d60554b7ec4b987f684393c01bf79b94d9f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f95ee0bbd4dd3ac730d066ba3e785ded4565e890dbec2fa7d3b9fe3bad9d0d6e\",\"dweb:/ipfs/QmSLr6bHkPFWT7ntj34jmwfyskpwo97T9jZUrk5sz3sdtR\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x304d732678032a9781ae85c8f204c8fba3d3a5e31c02616964e75cfdc5049098\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://299ced486011781dc98f638059678323c03079fefae1482abaa2135b22fa92d0\",\"dweb:/ipfs/QmbZNbcPTBxNvwChavN2kkZZs7xHhYL7mv51KrxMhsMs3j\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/Panic.sol\":{\"keccak256\":\"0xf7fe324703a64fc51702311dc51562d5cb1497734f074e4f483bfb6717572d7a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c6a5ff4f9fd8649b7ee20800b7fa387d3465bd77cf20c2d1068cd5c98e1ed57a\",\"dweb:/ipfs/QmVSaVJf9FXFhdYEYeCEfjMVHrxDh5qL4CGkxdMWpQCrqG\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xa516cbf1c7d15d3517c2d668601ce016c54395bf5171918a14e2686977465f53\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1e1d079e8edfb58efd23a311e315a4807b01b5d1cf153f8fa2d0608b9dec3e99\",\"dweb:/ipfs/QmTBExeX2SDTkn5xbk5ssbYSx7VqRp9H4Ux1CY4uQM4b9N\"]},\"lib/openzeppelin-contracts/contracts/utils/StorageSlot.sol\":{\"keccak256\":\"0xcf74f855663ce2ae00ed8352666b7935f6cddea2932fdf2c3ecd30a9b1cd0e97\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9f660b1f351b757dfe01438e59888f31f33ded3afcf5cb5b0d9bf9aa6f320a8b\",\"dweb:/ipfs/QmarDJ5hZEgBtCmmrVzEZWjub9769eD686jmzb2XpSU1cM\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x8891738ffe910f0cf2da09566928589bf5d63f4524dd734fd9cedbac3274dd5c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://971f954442df5c2ef5b5ebf1eb245d7105d9fbacc7386ee5c796df1d45b21617\",\"dweb:/ipfs/QmadRjHbkicwqwwh61raUEapaVEtaLMcYbQZWs9gUkgj3u\"]},\"lib/openzeppelin-contracts/contracts/utils/math/Math.sol\":{\"keccak256\":\"0x59973a93b1f983f94e10529f46ca46544a9fec2b5f56fb1390bbe9e0dc79f857\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c55ef8f0b9719790c2ae6f81d80a59ffb89f2f0abe6bc065585bd79edce058c5\",\"dweb:/ipfs/QmNNmCbX9NjPXKqHJN8R1WC2rNeZSQrPZLd6FF6AKLyH5Y\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SafeCast.sol\":{\"keccak256\":\"0xc8cae21c9ae4a46e5162ff9bf5b351d6fa6a6eba72d515f3bc1bdfeda7fdf083\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ce830ebcf28e31643caba318996db3763c36d52cd0f23798ba83c135355d45e9\",\"dweb:/ipfs/QmdGPcvptHN7UBCbUYBbRX3hiRVRFLRwno8b4uga6uFNif\"]},\"src/AuctionToken.sol\":{\"keccak256\":\"0x506263a01a783c0fb88c65605ca17775193010e317c7b0c2616b7dc728c41e77\",\"urls\":[\"bzz-raw://186d5227664c8493ff55f514ecc0a0342bf045e0be3b5b938bb6060927060015\",\"dweb:/ipfs/Qme5vLYEh2eLTAXpCGyzUz9PfvBEquvqhnAJe3iKgEmLvF\"]},\"src/BondingCurve.sol\":{\"keccak256\":\"0xa675c9c03d4861e61c3024a1b127b488cc2bf00e59036de34394ff41356b37ba\",\"urls\":[\"bzz-raw://59e2a0190a1bedc586163a9722676d40b78fc6d43eecc9adb9e4492cb052ee83\",\"dweb:/ipfs/QmP6vMBuDFiyrYFPRzVfKLhGYTVEPig8BofrqKGxqEyjJz\"]},\"src/TokenAuction.sol\":{\"keccak256\":\"0x4a493f2ca2965ea79c0143c695bf1f1b4aab5f74fac9def4e71fd1f4a6a1defd\",\"urls\":[\"bzz-raw://5b258024c67705ced4bd890a251cba318394862730450b0affb55b1a81ab3058\",\"dweb:/ipfs/QmbKVcqSGrnQcCawETCaPFemw298FPMnQcjDCdh3KUDHkk\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.24+commit.e11b9ed9"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "feeRecipient_",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "defaultFeeBps_",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "OwnableInvalidOwner"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "OwnableUnauthorizedAccount"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ReentrancyGuardReentrantCall"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "SafeERC20FailedOperation"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "auctionId",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "totalRaised",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "totalSold",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "AuctionCompleted",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "auctionId",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "creator",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "token",
              "type": "address",
              "indexed": false
            },
            {
              "internalType": "address",
              "name": "paymentToken",
              "type": "address",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "basePrice",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "slope",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "maxRaise",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "startTime",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "endTime",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "liquidityBps",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "AuctionCreated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "auctionId",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "liquidityPool",
              "type": "address",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "AuctionMigrated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "previous",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "current",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "DefaultFeeBpsUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "previousOwner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "OwnershipTransferred",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "auctionId",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "creator",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "ProceedsWithdrawn",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "previous",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "current",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "ProtocolFeeRecipientUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Swept",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "auctionId",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "buyer",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "cost",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "protocolFee",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "newTotalRaised",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "newTotalSold",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "TokensPurchased",
          "anonymous": false
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "MAX_FEE_BPS",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "MIN_LIQUIDITY_BPS",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "auctionCount",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "auctions",
          "outputs": [
            {
              "internalType": "struct TokenAuction.AuctionConfig",
              "name": "config",
              "type": "tuple",
              "components": [
                {
                  "internalType": "contract AuctionToken",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "contract IERC20",
                  "name": "paymentToken",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "basePrice",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "slope",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "maxRaise",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "startTime",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "endTime",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "creator",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "protocolFeeBps",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "liquidityBps",
                  "type": "uint256"
                }
              ]
            },
            {
              "internalType": "enum TokenAuction.AuctionState",
              "name": "state",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "totalRaised",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalSold",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "auctionId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "maxCost",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "buyTokens"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "auctionId",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "completeAuction"
        },
        {
          "inputs": [
            {
              "internalType": "struct TokenAuction.AuctionParams",
              "name": "p",
              "type": "tuple",
              "components": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "symbol",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "maxSupply",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "paymentToken",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "basePrice",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "slope",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "maxRaise",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "startTime",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "endTime",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "liquidityBps",
                  "type": "uint256"
                }
              ]
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "createAuction",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "auctionId",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "custodied",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "defaultFeeBps",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "auctionId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getBuyCost",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "cost",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "auctionId",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getSpotPrice",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "proceedsWithdrawn",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "protocolFeeRecipient",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "renounceOwnership"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "feeBps",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setDefaultFeeBps"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setProtocolFeeRecipient"
        },
        {
          "inputs": [
            {
              "internalType": "contract IERC20",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "sweep"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferOwnership"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "userPurchases",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "auctionId",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "withdrawProceeds"
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "buyTokens(uint256,uint256,uint256)": {
            "details": "A purchase that would overshoot `maxRaise` is filled with what the        remaining budget buys and closes the auction, so the buyer may        receive less than `amount`; `TokensPurchased` reports the actual        amount.",
            "params": {
              "maxCost": "Most the buyer will pay in total (cost + protocol fee), in        payment-token units. The price rises with every purchase, so a        quote can be stale by the time a transaction lands; this bound        makes the buy revert instead of filling at a worse price."
            }
          },
          "owner()": {
            "details": "Returns the address of the current owner."
          },
          "renounceOwnership()": {
            "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."
          },
          "transferOwnership(address)": {
            "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
          },
          "withdrawProceeds(uint256)": {
            "details": "Callable once, by the creator, after the auction reaches COMPLETED.      Protocol fees are routed to the fee recipient at buy time, so the      contract custodies exactly `totalRaised` for this auction."
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "MAX_FEE_BPS()": {
            "notice": "Upper bound on the protocol fee, so the owner can never set a         fee that confiscates a meaningful share of a purchase."
          },
          "MIN_LIQUIDITY_BPS()": {
            "notice": "Smallest share of the raise a creator may commit to the         Uniswap pool, so no launch ships with a token too thinly         traded to be usable."
          },
          "buyTokens(uint256,uint256,uint256)": {
            "notice": "Buy `amount` tokens (in token wei) from an active auction."
          },
          "custodied(address)": {
            "notice": "Payment tokens this contract owes to auction creators, per token:         the sum of `totalRaised` across auctions not yet withdrawn.         Anything held above this is excess (e.g. tokens sent here         directly) and can be recovered with `sweep`."
          },
          "setDefaultFeeBps(uint256)": {
            "notice": "Change the fee for auctions created from now on. Existing         auctions keep the fee they were created with, so a creator's         terms can never change mid-sale."
          },
          "setProtocolFeeRecipient(address)": {
            "notice": "Change where protocol fees are sent. Applies to purchases made         after the change, in every auction."
          },
          "sweep(address,address)": {
            "notice": "Recover tokens held above what is owed to auction creators,         such as tokens transferred to this contract directly. Funds         backing an unwithdrawn auction can never be swept."
          },
          "withdrawProceeds(uint256)": {
            "notice": "Transfer an auction's raised payment tokens to its creator."
          }
        },
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
        "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/"
      ],
      "optimizer": {
        "enabled": false,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "src/TokenAuction.sol": "TokenAuction"
      },
      "evmVersion": "cancun",
      "libraries": {}
    },
    "sources": {
      "lib/openzeppelin-contracts/contracts/access/Ownable.sol": {
        "keccak256": "0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb",
        "urls": [
          "bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6",
          "dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/interfaces/IERC1363.sol": {
        "keccak256": "0xd5ea07362ab630a6a3dee4285a74cf2377044ca2e4be472755ad64d7c5d4b69d",
        "urls": [
          "bzz-raw://da5e832b40fc5c3145d3781e2e5fa60ac2052c9d08af7e300dc8ab80c4343100",
          "dweb:/ipfs/QmTzf7N5ZUdh5raqtzbM11yexiUoLC9z3Ws632MCuycq1d"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/interfaces/IERC165.sol": {
        "keccak256": "0x0afcb7e740d1537b252cb2676f600465ce6938398569f09ba1b9ca240dde2dfc",
        "urls": [
          "bzz-raw://1c299900ac4ec268d4570ecef0d697a3013cd11a6eb74e295ee3fbc945056037",
          "dweb:/ipfs/Qmab9owJoxcA7vJT5XNayCMaUR1qxqj1NDzzisduwaJMcZ"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/interfaces/IERC20.sol": {
        "keccak256": "0x1a6221315ce0307746c2c4827c125d821ee796c74a676787762f4778671d4f44",
        "urls": [
          "bzz-raw://1bb2332a7ee26dd0b0de9b7fe266749f54820c99ab6a3bcb6f7e6b751d47ee2d",
          "dweb:/ipfs/QmcRWpaBeCYkhy68PR3B4AgD7asuQk7PwkWxrvJbZcikLF"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol": {
        "keccak256": "0x1b88b3fb3d85ba5496d7d5f396f83ee1fddcdd6762059ff65992655b67920998",
        "urls": [
          "bzz-raw://89393bb3212da1c0889601b9706a07b39419ddc4d2faab9eaf6e7f9152cf6a1c",
          "dweb:/ipfs/QmcCfzzxv1Bkdz1c1yF4gQCeYb6Us5BJANnzTFqawfd1HL"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol": {
        "keccak256": "0x669464167428061ee0f8618b73b3ee90aff8405683e7ddde8cd77dadaa1afe29",
        "urls": [
          "bzz-raw://0dda78587a7358b4fdf6b9fca0fde5a5e34930f36d5268a16028627fc0170195",
          "dweb:/ipfs/QmQ1b6cCceDRWNxti9HifsTCzmVP25Haxs1bWugm52vTqH"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
        "keccak256": "0x74ed01eb66b923d0d0cfe3be84604ac04b76482a55f9dd655e1ef4d367f95bc2",
        "urls": [
          "bzz-raw://5282825a626cfe924e504274b864a652b0023591fa66f06a067b25b51ba9b303",
          "dweb:/ipfs/QmeCfPykghhMc81VJTrHTC7sF6CRvaA1FXVq2pJhwYp1dV"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol": {
        "keccak256": "0xd6fa4088198f04eef10c5bce8a2f4d60554b7ec4b987f684393c01bf79b94d9f",
        "urls": [
          "bzz-raw://f95ee0bbd4dd3ac730d066ba3e785ded4565e890dbec2fa7d3b9fe3bad9d0d6e",
          "dweb:/ipfs/QmSLr6bHkPFWT7ntj34jmwfyskpwo97T9jZUrk5sz3sdtR"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
        "keccak256": "0x304d732678032a9781ae85c8f204c8fba3d3a5e31c02616964e75cfdc5049098",
        "urls": [
          "bzz-raw://299ced486011781dc98f638059678323c03079fefae1482abaa2135b22fa92d0",
          "dweb:/ipfs/QmbZNbcPTBxNvwChavN2kkZZs7xHhYL7mv51KrxMhsMs3j"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
        "keccak256": "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2",
        "urls": [
          "bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12",
          "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/Panic.sol": {
        "keccak256": "0xf7fe324703a64fc51702311dc51562d5cb1497734f074e4f483bfb6717572d7a",
        "urls": [
          "bzz-raw://c6a5ff4f9fd8649b7ee20800b7fa387d3465bd77cf20c2d1068cd5c98e1ed57a",
          "dweb:/ipfs/QmVSaVJf9FXFhdYEYeCEfjMVHrxDh5qL4CGkxdMWpQCrqG"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol": {
        "keccak256": "0xa516cbf1c7d15d3517c2d668601ce016c54395bf5171918a14e2686977465f53",
        "urls": [
          "bzz-raw://1e1d079e8edfb58efd23a311e315a4807b01b5d1cf153f8fa2d0608b9dec3e99",
          "dweb:/ipfs/QmTBExeX2SDTkn5xbk5ssbYSx7VqRp9H4Ux1CY4uQM4b9N"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/StorageSlot.sol": {
        "keccak256": "0xcf74f855663ce2ae00ed8352666b7935f6cddea2932fdf2c3ecd30a9b1cd0e97",
        "urls": [
          "bzz-raw://9f660b1f351b757dfe01438e59888f31f33ded3afcf5cb5b0d9bf9aa6f320a8b",
          "dweb:/ipfs/QmarDJ5hZEgBtCmmrVzEZWjub9769eD686jmzb2XpSU1cM"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol": {
        "keccak256": "0x8891738ffe910f0cf2da09566928589bf5d63f4524dd734fd9cedbac3274dd5c",
        "urls": [
          "bzz-raw://971f954442df5c2ef5b5ebf1eb245d7105d9fbacc7386ee5c796df1d45b21617",
          "dweb:/ipfs/QmadRjHbkicwqwwh61raUEapaVEtaLMcYbQZWs9gUkgj3u"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/math/Math.sol": {
        "keccak256": "0x59973a93b1f983f94e10529f46ca46544a9fec2b5f56fb1390bbe9e0dc79f857",
        "urls": [
          "bzz-raw://c55ef8f0b9719790c2ae6f81d80a59ffb89f2f0abe6bc065585bd79edce058c5",
          "dweb:/ipfs/QmNNmCbX9NjPXKqHJN8R1WC2rNeZSQrPZLd6FF6AKLyH5Y"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/math/SafeCast.sol": {
        "keccak256": "0xc8cae21c9ae4a46e5162ff9bf5b351d6fa6a6eba72d515f3bc1bdfeda7fdf083",
        "urls": [
          "bzz-raw://ce830ebcf28e31643caba318996db3763c36d52cd0f23798ba83c135355d45e9",
          "dweb:/ipfs/QmdGPcvptHN7UBCbUYBbRX3hiRVRFLRwno8b4uga6uFNif"
        ],
        "license": "MIT"
      },
      "src/AuctionToken.sol": {
        "keccak256": "0x506263a01a783c0fb88c65605ca17775193010e317c7b0c2616b7dc728c41e77",
        "urls": [
          "bzz-raw://186d5227664c8493ff55f514ecc0a0342bf045e0be3b5b938bb6060927060015",
          "dweb:/ipfs/Qme5vLYEh2eLTAXpCGyzUz9PfvBEquvqhnAJe3iKgEmLvF"
        ],
        "license": null
      },
      "src/BondingCurve.sol": {
        "keccak256": "0xa675c9c03d4861e61c3024a1b127b488cc2bf00e59036de34394ff41356b37ba",
        "urls": [
          "bzz-raw://59e2a0190a1bedc586163a9722676d40b78fc6d43eecc9adb9e4492cb052ee83",
          "dweb:/ipfs/QmP6vMBuDFiyrYFPRzVfKLhGYTVEPig8BofrqKGxqEyjJz"
        ],
        "license": null
      },
      "src/TokenAuction.sol": {
        "keccak256": "0x4a493f2ca2965ea79c0143c695bf1f1b4aab5f74fac9def4e71fd1f4a6a1defd",
        "urls": [
          "bzz-raw://5b258024c67705ced4bd890a251cba318394862730450b0affb55b1a81ab3058",
          "dweb:/ipfs/QmbKVcqSGrnQcCawETCaPFemw298FPMnQcjDCdh3KUDHkk"
        ],
        "license": null
      }
    },
    "version": 1
  },
  "id": 39
} as const;
