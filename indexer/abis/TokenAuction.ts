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
        },
        {
          "name": "positionManager_",
          "type": "address",
          "internalType": "contract INonfungiblePositionManager"
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
      "name": "MAX_LP_FEE_SHARE_BPS",
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
      "name": "POOL_FEE",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint24",
          "internalType": "uint24"
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
            },
            {
              "name": "lpFeeShareBps",
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
      "name": "collectFees",
      "inputs": [
        {
          "name": "auctionId",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "tokenFees",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "paymentFees",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
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
      "name": "defaultLpFeeShareBps",
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
      "name": "migrate",
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
      "name": "poolOf",
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
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "positionId",
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
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "positionManager",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "contract INonfungiblePositionManager"
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
      "name": "setDefaultLpFeeShareBps",
      "inputs": [
        {
          "name": "shareBps",
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
      "name": "uniswapV3SwapCallback",
      "inputs": [
        {
          "name": "amount0Delta",
          "type": "int256",
          "internalType": "int256"
        },
        {
          "name": "amount1Delta",
          "type": "int256",
          "internalType": "int256"
        },
        {
          "name": "data",
          "type": "bytes",
          "internalType": "bytes"
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
          "name": "pool",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "positionId",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "tokenLiquidity",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "paymentLiquidity",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
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
      "name": "DefaultLpFeeShareBpsUpdated",
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
      "name": "LpFeesCollected",
      "inputs": [
        {
          "name": "auctionId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "creatorTokenFees",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "creatorPaymentFees",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "protocolTokenFees",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "protocolPaymentFees",
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
    "object": "0x60a060405234801562000010575f80fd5b5060405162008ac938038062008ac9833981810160405281019062000036919062000464565b336001620000596200004d6200029260201b60201c565b620002bb60201b60201c565b5f01819055505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620000d2575f6040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620000c99190620004ce565b60405180910390fd5b620000e381620002c460201b60201c565b505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160362000155576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200014c9062000547565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620001c6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001bd90620005b5565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250506103e882111562000242576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002399062000623565b60405180910390fd5b8260055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160068190555050505062000643565b5f7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f005f1b905090565b5f819050919050565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f620003b48262000389565b9050919050565b620003c681620003a8565b8114620003d1575f80fd5b50565b5f81519050620003e481620003bb565b92915050565b5f819050919050565b620003fe81620003ea565b811462000409575f80fd5b50565b5f815190506200041c81620003f3565b92915050565b5f6200042e82620003a8565b9050919050565b620004408162000422565b81146200044b575f80fd5b50565b5f815190506200045e8162000435565b92915050565b5f805f606084860312156200047e576200047d62000385565b5b5f6200048d86828701620003d4565b9350506020620004a0868287016200040c565b9250506040620004b3868287016200044e565b9150509250925092565b620004c881620003a8565b82525050565b5f602082019050620004e35f830184620004bd565b92915050565b5f82825260208201905092915050565b7f5a65726f2066656520726563697069656e7400000000000000000000000000005f82015250565b5f6200052f601283620004e9565b91506200053c82620004f9565b602082019050919050565b5f6020820190508181035f830152620005608162000521565b9050919050565b7f5a65726f20706f736974696f6e206d616e6167657200000000000000000000005f82015250565b5f6200059d601583620004e9565b9150620005aa8262000567565b602082019050919050565b5f6020820190508181035f830152620005ce816200058f565b9050919050565b7f46656520746f6f206869676800000000000000000000000000000000000000005f82015250565b5f6200060b600c83620004e9565b91506200061882620005d5565b602082019050919050565b5f6020820190508181035f8301526200063c81620005fd565b9050919050565b60805161843c6200068d5f395f8181610f260152818161144001528181611a57015281816132ff0152818161334f0152818161339c0152818161363b015261368b015261843c5ff3fe608060405234801562000010575f80fd5b506004361062000212575f3560e01c8063791b98bc1162000127578063d55be8c611620000af578063efc20dad1162000079578063efc20dad146200063f578063f2fde38b1462000675578063fa461e331462000695578063fdfae48614620006b55762000212565b8063d55be8c614620005bb578063d9f1aed914620005dd578063dd1b9c4a14620005fd578063e521cb92146200061f5762000212565b8063b17acdcd11620000f1578063b17acdcd146200050c578063b8dc491b1462000543578063b905fe561462000563578063bcae25a414620005995762000212565b8063791b98bc14620004725780638396602114620004945780638da5cb5b14620004ca578063a4ce25a714620004ec5762000212565b8063454b060811620001ab5780635c471ad511620001755780635c471ad514620003ec57806364df049e1462000422578063715018a6146200044457806375f0c2f014620004505762000212565b8063454b0608146200032757806348f719e5146200034757806354147e9e146200037d578063571a26a014620003b35762000212565b806321b6288611620001ed57806321b6288614620002a35780632ad7157314620002c35780633edb917d14620002e55780634373a28614620003075762000212565b806309e0625914620002165780630fda366d1462000236578063121a257f146200026c575b5f80fd5b6200023460048036038101906200022e9190620045b3565b620006d7565b005b6200025460048036038101906200024e9190620045b3565b62000770565b604051620002639190620045f4565b60405180910390f35b6200028a60048036038101906200028491906200460f565b620007aa565b6040516200029a92919062004654565b60405180910390f35b620002c16004803603810190620002bb9190620045b3565b6200080d565b005b620002cd62000a39565b604051620002dc9190620045f4565b60405180910390f35b620002ef62000a3f565b604051620002fe9190620045f4565b60405180910390f35b6200032560048036038101906200031f9190620045b3565b62000a45565b005b6200034560048036038101906200033f9190620045b3565b62000ade565b005b6200036560048036038101906200035f9190620045b3565b62001224565b6040516200037491906200469b565b60405180910390f35b6200039b6004803603810190620003959190620045b3565b62001241565b604051620003aa9190620045f4565b60405180910390f35b620003d16004803603810190620003cb9190620045b3565b62001256565b604051620003e3949392919062004906565b60405180910390f35b6200040a600480360381019062000404919062004984565b620013e7565b604051620004199190620045f4565b60405180910390f35b6200042c620013fc565b6040516200043b9190620049c5565b60405180910390f35b6200044e62001421565b005b6200045a62001438565b604051620004699190620045f4565b60405180910390f35b6200047c6200143e565b6040516200048b919062004a04565b60405180910390f35b620004b26004803603810190620004ac9190620045b3565b62001462565b604051620004c19190620049c5565b60405180910390f35b620004d462001492565b604051620004e39190620049c5565b60405180910390f35b6200050a600480360381019062000504919062004a1f565b620014b9565b005b6200052a6004803603810190620005249190620045b3565b62001996565b6040516200053a92919062004654565b60405180910390f35b6200056160048036038101906200055b919062004aba565b62001d5f565b005b6200058160048036038101906200057b919062004b25565b62001fa0565b604051620005909190620045f4565b60405180910390f35b620005a3620022f9565b604051620005b29190620045f4565b60405180910390f35b620005c5620022ff565b604051620005d49190620045f4565b60405180910390f35b620005fb6004803603810190620005f59190620045b3565b62002305565b005b62000607620026e2565b60405162000616919062004b93565b60405180910390f35b6200063d600480360381019062000637919062004984565b620026e8565b005b6200065d600480360381019062000657919062004bae565b62002821565b6040516200066c9190620045f4565b60405180910390f35b6200069360048036038101906200068d919062004984565b62002841565b005b620006b36004803603810190620006ad919062004c95565b620028cc565b005b620006bf62002a45565b604051620006ce9190620045f4565b60405180910390f35b620006e162002a4b565b61138881111562000729576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620007209062004d70565b60405180910390fd5b7fafd7016dba95bc0c303b0838ae8e4829497ed18cc6a0ed00eec5fc7c50148e17600854826040516200075e92919062004654565b60405180910390a18060088190555050565b5f8060025f8481526020019081526020015f209050620007a281600d0154825f0160020154835f016003015462002adb565b915050919050565b5f805f60025f8681526020019081526020015f209050620007de81600d015485835f0160020154845f016003015462002b15565b9250612710815f016008015484620007f7919062004dbd565b62000803919062004e34565b9150509250929050565b5f60025f8381526020019081526020015f209050805f016007015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480620008b557506200088662001492565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b620008f7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620008ee9062004eb9565b60405180910390fd5b805f0160060154421162000942576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620009399062004f27565b60405180910390fd5b600160038111156200095957620009586200488a565b5b81600b015f9054906101000a900460ff1660038111156200097f576200097e6200488a565b5b14620009c2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620009b99062004f95565b60405180910390fd5b600281600b015f6101000a81548160ff02191690836003811115620009ec57620009eb6200488a565b5b0217905550817fc7502df20ccf846bf5005f01564bb502b56dcec19f0e2d0575c4369cc5e3b53b82600c015483600d015460405162000a2d92919062004654565b60405180910390a25050565b60015481565b60085481565b62000a4f62002a4b565b6103e881111562000a97576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000a8e9062005003565b60405180910390fd5b7f3062378541f1b58e0547bfb13e7d7585153e442e477e263c6e63d4775b3072a66006548260405162000acc92919062004654565b60405180910390a18060068190555050565b62000ae862002bbb565b5f60025f8381526020019081526020015f2090506002600381111562000b135762000b126200488a565b5b81600b015f9054906101000a900460ff16600381111562000b395762000b386200488a565b5b1462000b7c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000b739062005071565b60405180910390fd5b5f62000b888262002be3565b90505f62000ba883600d0154845f0160020154855f016003015462002adb565b90505f62000bc083670de0b6b3a76400008462002c12565b905062000bcc620044db565b845f015f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16815f019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050845f016001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16816020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050806020015173ffffffffffffffffffffffffffffffffffffffff16815f015173ffffffffffffffffffffffffffffffffffffffff161081604001901515908115158152505083816020015173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040162000d099190620049c5565b602060405180830381865afa15801562000d25573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000d4b9190620050a7565b62000d579190620050d7565b816080018181525050600385600b015f6101000a81548160ff0219169083600381111562000d8a5762000d896200488a565b5b02179055508360075f836020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825462000de19190620050d7565b92505081905550805f015173ffffffffffffffffffffffffffffffffffffffff1663af35c6c76040518163ffffffff1660e01b81526004015f604051808303815f87803b15801562000e31575f80fd5b505af115801562000e44573d5f803e3d5ffd5b505050505f8411801562000e5757505f82115b156200102157805f015173ffffffffffffffffffffffffffffffffffffffff166340c10f1930846040518363ffffffff1660e01b815260040162000e9d92919062005111565b5f604051808303815f87803b15801562000eb5575f80fd5b505af115801562000ec8573d5f803e3d5ffd5b5050505062000edc83826040015162002cfd565b816060019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250505f8062000f208362002e19565b915091507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166313ead562838361271087606001516040518563ffffffff1660e01b815260040162000f8b94939291906200514d565b6020604051808303815f875af115801562000fa8573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000fce9190620051ae565b8360a0019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250506200101283858862002e47565b6200101e8884620031d0565b50505b5f815f015173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401620010609190620049c5565b602060405180830381865afa1580156200107c573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620010a29190620050a7565b90505f8111156200111b57815f015173ffffffffffffffffffffffffffffffffffffffff166342966c68826040518263ffffffff1660e01b8152600401620010eb9190620045f4565b5f604051808303815f87803b15801562001103575f80fd5b505af115801562001116573d5f803e3d5ffd5b505050505b5f8260800151836020015173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401620011609190620049c5565b602060405180830381865afa1580156200117c573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620011a29190620050a7565b620011ae9190620050d7565b90505f81111562001210576200120f875f016007015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1682856020015173ffffffffffffffffffffffffffffffffffffffff16620036de9092919063ffffffff16565b5b505050505050506200122162003736565b50565b6004602052805f5260405f205f915054906101000a900460ff1681565b6009602052805f5260405f205f915090505481565b6002602052805f5260405f205f91509050805f01604051806101600160405290815f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201548152602001600482015481526020016005820154815260200160068201548152602001600782015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016008820154815260200160098201548152602001600a820154815250509080600b015f9054906101000a900460ff169080600c01549080600d0154905084565b6007602052805f5260405f205f915090505481565b60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6200142b62002a4b565b620014365f62003754565b565b6107d081565b7f000000000000000000000000000000000000000000000000000000000000000081565b600a602052805f5260405f205f915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b620014c362002bbb565b5f60025f8581526020019081526020015f20905060016003811115620014ee57620014ed6200488a565b5b81600b015f9054906101000a900460ff1660038111156200151457620015136200488a565b5b1462001557576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200154e906200522c565b60405180910390fd5b805f0160050154421015620015a3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200159a906200529a565b60405180910390fd5b805f0160060154421115620015ef576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620015e69062005308565b60405180910390fd5b5f831162001634576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200162b9062005376565b60405180910390fd5b5f8062001642838662003815565b8093508194508297505050505f612710845f01600801548462001666919062004dbd565b62001672919062004e34565b905084818462001683919062005396565b1115620016c7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620016be906200541e565b60405180910390fd5b8284600c015f828254620016dc919062005396565b925050819055508584600d015f828254620016f8919062005396565b925050819055508560035f8981526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546200175c919062005396565b925050819055508260075f865f016001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f828254620017d6919062005396565b9250508190555081156200181457600284600b015f6101000a81548160ff021916908360038111156200180e576200180d6200488a565b5b02179055505b62001846845f016001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16848362003912565b835f015f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933886040518363ffffffff1660e01b8152600401620018a792919062005111565b5f604051808303815f87803b158015620018bf575f80fd5b505af1158015620018d2573d5f803e3d5ffd5b505050503373ffffffffffffffffffffffffffffffffffffffff16877fc938e879cd47aa84d5893377578d6c211ccd96f382228c42c1bb6a8eaa71a08488868589600c01548a600d01546040516200192f9594939291906200543e565b60405180910390a381156200198357867fc7502df20ccf846bf5005f01564bb502b56dcec19f0e2d0575c4369cc5e3b53b85600c015486600d01546040516200197a92919062004654565b60405180910390a25b505050506200199162003736565b505050565b5f80620019a262002bbb565b5f60025f8581526020019081526020015f209050600380811115620019cc57620019cb6200488a565b5b81600b015f9054906101000a900460ff166003811115620019f257620019f16200488a565b5b14801562001a1157505f60095f8681526020019081526020015f205414155b62001a53576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162001a4a90620054e7565b60405180910390fd5b5f807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663fc6f7865604051806080016040528060095f8b81526020019081526020015f205481526020013073ffffffffffffffffffffffffffffffffffffffff1681526020016fffffffffffffffffffffffffffffffff801681526020016fffffffffffffffffffffffffffffffff80168152506040518263ffffffff1660e01b815260040162001b1b91906200558e565b60408051808303815f875af115801562001b37573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062001b5d9190620055a9565b915091505f835f016001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16845f015f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161090508062001bea57818362001bed565b82825b80965081975050505f612710855f01600a01548862001c0d919062004dbd565b62001c19919062004e34565b90505f612710865f01600a01548862001c33919062004dbd565b62001c3f919062004e34565b905062001c98865f015f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16875f016007015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16848b62003aef565b62001cf0865f016001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16875f016007015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16838a62003aef565b887f8dcde09e464f5c324d7cbf62dbc0c647b8ad9242592ae364153f2549f4898d04838a62001d209190620050d7565b838a62001d2e9190620050d7565b858560405162001d429493929190620055ee565b60405180910390a250505050505062001d5a62003736565b915091565b62001d6962002a4b565b62001d7362002bbb565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160362001de4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162001ddb9062005687565b60405180910390fd5b5f8273ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040162001e209190620049c5565b602060405180830381865afa15801562001e3c573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062001e629190620050a7565b90505f60075f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905080821162001eea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162001ee190620056f5565b60405180910390fd5b5f818362001ef99190620050d7565b905062001f2884828773ffffffffffffffffffffffffffffffffffffffff16620036de9092919063ffffffff16565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f7b09c29f9106defeccc9ac3b823f3aad0b470d120e5df7aed033b5c43a4bf7188360405162001f879190620045f4565b60405180910390a350505062001f9c62003736565b5050565b5f428260e001351162001fea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162001fe19062005763565b60405180910390fd5b8160e001358261010001351162002038576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200202f90620057d1565b60405180910390fd5b6200205c826040013583608001358460a001358560c0013586610120013562003b91565b60015f8154809291906200207090620057f1565b9190505590505f82805f019062002088919062005849565b8480602001906200209a919062005849565b866040013530604051620020ae9062004565565b620020bf9695949392919062005904565b604051809103905ff080158015620020d9573d5f803e3d5ffd5b5090505f60025f8481526020019081526020015f2090505f815f01905082815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508460600160208101906200214c919062004984565b816001015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550846080013581600201819055508460a0013581600301819055508460c0013581600401819055508460e001358160050181905550846101000135816006018190555033816007015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506006548160080181905550846101200135816009018190555060085481600a0181905550600182600b015f6101000a81548160ff021916908360038111156200225f576200225e6200488a565b5b02179055503373ffffffffffffffffffffffffffffffffffffffff16847f65ae0fe5726dbcbc237789dda3a8e43b7cfba8b334c2668eb5bba82b42e6197885886060016020810190620022b3919062004984565b89608001358a60a001358b60c001358c60e001358d61010001358e6101200135604051620022e998979695949392919062005961565b60405180910390a3505050919050565b60065481565b6103e881565b6200230f62002bbb565b5f60025f8381526020019081526020015f209050805f016007015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614620023b9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620023b09062005a3b565b60405180910390fd5b60026003811115620023d057620023cf6200488a565b5b81600b015f9054906101000a900460ff166003811115620023f657620023f56200488a565b5b14806200243c57506003808111156200241457620024136200488a565b5b81600b015f9054906101000a900460ff1660038111156200243a57620024396200488a565b5b145b6200247e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620024759062005071565b60405180910390fd5b60045f8381526020019081526020015f205f9054906101000a900460ff1615620024df576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620024d69062005aa9565b60405180910390fd5b5f620024eb8262002be3565b82600c0154620024fc9190620050d7565b90505f811162002543576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200253a9062005b17565b60405180910390fd5b600160045f8581526020019081526020015f205f6101000a81548160ff0219169083151502179055508060075f845f016001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f828254620025df9190620050d7565b925050819055506200265d825f016007015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1682845f016001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16620036de9092919063ffffffff16565b815f016007015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16837f579e0e2d0cfdb23711bb6034ac9f2ba41e8965a8e24589d1c3cf5604868661fc83604051620026cb9190620045f4565b60405180910390a35050620026df62003736565b50565b61271081565b620026f262002a4b565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160362002763576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200275a9062005b85565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fd3890fc76afcfc31cba1dcf2c27b50e2541e4d75039c981855b5b5e03682aea060405160405180910390a38060055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6003602052815f5260405f20602052805f5260405f205f91509150505481565b6200284b62002a4b565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620028be575f6040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620028b59190620049c5565b60405180910390fd5b620028c98162003754565b50565b5f73ffffffffffffffffffffffffffffffffffffffff16600b5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614158015620029765750600b5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b620029b8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620029af9062005bf3565b60405180910390fd5b5f808383810190620029cb919062005c55565b915091505f86131562002a065762002a0533878473ffffffffffffffffffffffffffffffffffffffff16620036de9092919063ffffffff16565b5b5f85131562002a3d5762002a3c33868373ffffffffffffffffffffffffffffffffffffffff16620036de9092919063ffffffff16565b5b505050505050565b61138881565b62002a5562003d78565b73ffffffffffffffffffffffffffffffffffffffff1662002a7562001492565b73ffffffffffffffffffffffffffffffffffffffff161462002ad95762002a9b62003d78565b6040517f118cdaa700000000000000000000000000000000000000000000000000000000815260040162002ad09190620049c5565b60405180910390fd5b565b5f670de0b6b3a7640000848362002af3919062004dbd565b62002aff919062004e34565b8362002b0c919062005396565b90509392505050565b5f8062002b38858562002b29919062004dbd565b670de0b6b3a764000062003d7f565b90505f62002b9f8688600262002b4f919062004dbd565b62002b5b919062005396565b878662002b69919062004dbd565b62002b75919062004dbd565b670de0b6b3a764000080600262002b8d919062004dbd565b62002b99919062004dbd565b62003d7f565b9050808262002baf919062005396565b92505050949350505050565b62002bc562003dc5565b600262002bdb62002bd562003e09565b62003e32565b5f0181905550565b5f612710825f016009015483600c015462002bff919062004dbd565b62002c0b919062004e34565b9050919050565b5f805f62002c21868662003e3b565b915091505f820362002c4b5783818162002c405762002c3f62004e07565b5b049250505062002cf6565b81841162002c6f5762002c6e62002c685f86146012601162003e58565b62003e73565b5b5f8486880990508181118303925080820391505f855f038616905080860495508083049250600181825f0304019050808402831792505f600287600302189050808702600203810290508087026002038102905080870260020381029050808702600203810290508087026002038102905080870260020381029050808402955050505050505b9392505050565b5f808262002d395762002d33670de0b6b3a764000078010000000000000000000000000000000000000000000000008662002c12565b62002d68565b62002d67847801000000000000000000000000000000000000000000000000670de0b6b3a764000062002c12565b5b90505f62002d768262003e84565b90506401000276a373ffffffffffffffffffffffffffffffffffffffff168111801562002dcc575073fffd8963efd1fc6a506488495d951d5263988d2673ffffffffffffffffffffffffffffffffffffffff1681105b62002e0e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162002e059062005ce8565b60405180910390fd5b809250505092915050565b5f80826040015162002e34578260200151835f015162002e3e565b825f015183602001515b91509150915091565b5f8360a0015190505f8173ffffffffffffffffffffffffffffffffffffffff16633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa15801562002e9a573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062002ec0919062005e18565b5050505050509050846060015173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160362002f08575050620031cb565b5f856060015173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161190505f866040015115158215151490505f8162002f5a578562002f6a565b60028762002f69919062004e34565b5b90505f810362002f7f575050505050620031cb565b5f8062002f8c8a62002e19565b9150915086600b5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508673ffffffffffffffffffffffffffffffffffffffff1663128acb083087868e6060015187876040516020016200300992919062005ec6565b6040516020818303038152906040526040518663ffffffff1660e01b81526004016200303a95949392919062005f86565b60408051808303815f875af115801562003056573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906200307c919062005ffe565b50505f600b5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083620031c3578673ffffffffffffffffffffffffffffffffffffffff16633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa1580156200310e573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062003134919062005e18565b90919293945090919293509091925090915090505080965050896060015173ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614620031c2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620031b99062006091565b60405180910390fd5b5b505050505050505b505050565b5f815f015173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016200320f9190620049c5565b602060405180830381865afa1580156200322b573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620032519190620050a7565b90505f8260800151836020015173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401620032989190620049c5565b602060405180830381865afa158015620032b4573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620032da9190620050a7565b620032e69190620050d7565b90505f80620032f58562002e19565b91509150620033497f000000000000000000000000000000000000000000000000000000000000000085875f015173ffffffffffffffffffffffffffffffffffffffff166200403e9092919063ffffffff16565b6200339a7f000000000000000000000000000000000000000000000000000000000000000084876020015173ffffffffffffffffffffffffffffffffffffffff166200403e9092919063ffffffff16565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663883164566040518061016001604052808573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff16815260200161271062ffffff1681526020017ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2766060020b8152602001620d89a060020b815260200188604001516200346d57866200346f565b875b8152602001886040015162003485578762003487565b865b81526020015f81526020015f81526020013073ffffffffffffffffffffffffffffffffffffffff168152602001428152506040518263ffffffff1660e01b8152600401620034d69190620061c8565b6080604051808303815f875af19250505080156200351457506040513d601f19601f8201168201806040525081019062003511919062006213565b60015b6200355f57857f0d9e69eea1226c3cc6b24c170c2b55d6c198272e003451d42e20a842c1d9b9145f805f80604051620035519493929190620062c3565b60405180910390a262003635565b8360095f8c81526020019081526020015f20819055508860a00151600a5f8c81526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550897f0d9e69eea1226c3cc6b24c170c2b55d6c198272e003451d42e20a842c1d9b9148a60a00151868c6040015162003601578462003603565b855b8d6040015162003614578662003616565b855b6040516200362894939291906200630e565b60405180910390a2505050505b620036857f00000000000000000000000000000000000000000000000000000000000000005f875f015173ffffffffffffffffffffffffffffffffffffffff166200403e9092919063ffffffff16565b620036d67f00000000000000000000000000000000000000000000000000000000000000005f876020015173ffffffffffffffffffffffffffffffffffffffff166200403e9092919063ffffffff16565b505050505050565b620036ed8383836001620040fd565b6200373157826040517f5274afe7000000000000000000000000000000000000000000000000000000008152600401620037289190620049c5565b60405180910390fd5b505050565b60016200374c6200374662003e09565b62003e32565b5f0181905550565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f805f8392506200383985600d015484875f0160020154885f016003015462002b15565b91505f85600c0154865f0160040154620038549190620050d7565b9050808310156200386f5783835f935093509350506200390b565b80831115620038ff576200389786600d015482885f0160020154895f01600301548962004161565b93505f8411620038de576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620038d590620063a7565b60405180910390fd5b620038fc86600d015485885f0160020154895f016003015462002b15565b92505b83836001935093509350505b9250925092565b5f8373ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016200394e9190620049c5565b602060405180830381865afa1580156200396a573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620039909190620050a7565b9050620039c13330858773ffffffffffffffffffffffffffffffffffffffff1662004220909392919063ffffffff16565b82818573ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401620039fe9190620049c5565b602060405180830381865afa15801562003a1a573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062003a409190620050a7565b62003a4c9190620050d7565b1462003a8f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162003a869062006415565b60405180910390fd5b5f82111562003ae95762003ae83360055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16848773ffffffffffffffffffffffffffffffffffffffff1662004220909392919063ffffffff16565b5b50505050565b5f82111562003b475762003b4660055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16838673ffffffffffffffffffffffffffffffffffffffff16620036de9092919063ffffffff16565b5b8181111562003b8b5762003b8a83838362003b639190620050d7565b8673ffffffffffffffffffffffffffffffffffffffff16620036de9092919063ffffffff16565b5b50505050565b5f841162003bd6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162003bcd9062006483565b60405180910390fd5b5f821162003c1b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162003c1290620064f1565b60405180910390fd5b6107d0811015801562003c3057506127108111155b62003c72576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162003c69906200655f565b60405180910390fd5b62003c80858585856200427a565b1562003cc3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162003cba90620065cd565b60405180910390fd5b5f62003cd35f8487878a62004161565b90505f62003ce382878762002adb565b90505f62003d19612710858762003cfb919062004dbd565b62003d07919062004e34565b670de0b6b3a764000084600162004325565b905087818462003d2a919062005396565b111562003d6e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162003d65906200663b565b60405180910390fd5b5050505050505050565b5f33905090565b5f80820362003d955762003d94601262003e73565b5b600182600185038162003dad5762003dac62004e07565b5b040162003dbc5f85116200437e565b02905092915050565b62003dcf62004389565b1562003e07576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b5f7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f005f1b905090565b5f819050919050565b5f805f198385098385029150818110828203039250509250929050565b5f62003e64846200437e565b82841802821890509392505050565b634e487b715f52806020526024601cfd5b5f6001821162003e975781905062004039565b5f8290505f60019050700100000000000000000000000000000000821062003ec857608082901c9150604081901b90505b68010000000000000000821062003ee857604082901c9150602081901b90505b640100000000821062003f0457602082901c9150601081901b90505b62010000821062003f1e57601082901c9150600881901b90505b610100821062003f3757600882901c9150600481901b90505b6010821062003f4f57600482901c9150600281901b90505b6004821062003f6057600181901b90505b600181600302901c9050600181858162003f7f5762003f7e62004e07565b5b048201901c9050600181858162003f9b5762003f9a62004e07565b5b048201901c9050600181858162003fb75762003fb662004e07565b5b048201901c9050600181858162003fd35762003fd262004e07565b5b048201901c9050600181858162003fef5762003fee62004e07565b5b048201901c905060018185816200400b576200400a62004e07565b5b048201901c90506200403281858162004029576200402862004e07565b5b0482116200437e565b8103925050505b919050565b6200404c8383835f620043a9565b620040f8576200406083835f6001620043a9565b620040a457826040517f5274afe70000000000000000000000000000000000000000000000000000000081526004016200409b9190620049c5565b60405180910390fd5b620040b38383836001620043a9565b620040f757826040517f5274afe7000000000000000000000000000000000000000000000000000000008152600401620040ee9190620049c5565b60405180910390fd5b5b505050565b5f8063a9059cbb60e01b9050604051815f525f1960601c86166004528460245260205f60445f808b5af1925060015f511483166200415357838315161562004147573d5f823e3d81fd5b5f873b113d1516831692505b806040525050949350505050565b5f80600185670de0b6b3a7640000886200417c919062004dbd565b62004188919062004e34565b62004194919062005396565b905082811115620041a3578290505b5f5b8181101562004212575f600260018484620041c1919062005396565b620041cd919062005396565b620041d9919062004e34565b905087620041ea8a838a8a62002b15565b11620041f9578091506200420b565b600181620042089190620050d7565b92505b50620041a5565b809250505095945050505050565b620042308484848460016200440d565b6200427457836040517f5274afe70000000000000000000000000000000000000000000000000000000081526004016200426b9190620049c5565b60405180910390fd5b50505050565b5f6fffffffffffffffffffffffffffffffff8016851115620042a057600190506200431d565b5f620042ad858762004480565b50905080620042c15760019150506200431d565b620042e88487600289620042d6919062004dbd565b620042e2919062004dbd565b62004480565b508091505080620042fe5760019150506200431d565b6200431283670de0b6b3a764000062004480565b508091505080159150505b949350505050565b5f6200435b6200433583620044a9565b80156200435557505f848062004350576200434f62004e07565b5b868809115b6200437e565b6200436886868662002c12565b62004374919062005396565b9050949350505050565b5f8115159050919050565b5f6002620043a06200439a62003e09565b62003e32565b5f015414905090565b5f8063095ea7b360e01b9050604051815f525f1960601c86166004528460245260205f60445f808b5af1925060015f51148316620043ff578383151615620043f3573d5f823e3d81fd5b5f873b113d1516831692505b806040525050949350505050565b5f806323b872dd60e01b9050604051815f525f1960601c87166004525f1960601c86166024528460445260205f60645f808c5af1925060015f511483166200446d57838315161562004461573d5f823e3d81fd5b5f883b113d1516831692505b806040525f606052505095945050505050565b5f805f8385029050841584868304141792506200449d836200437e565b81029150509250929050565b5f60016002836003811115620044c457620044c36200488a565b5b620044d091906200665b565b60ff16149050919050565b6040518060c001604052805f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f151581526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81526020015f73ffffffffffffffffffffffffffffffffffffffff1681525090565b611d74806200669383390190565b5f80fd5b5f80fd5b5f819050919050565b6200458f816200457b565b81146200459a575f80fd5b50565b5f81359050620045ad8162004584565b92915050565b5f60208284031215620045cb57620045ca62004573565b5b5f620045da848285016200459d565b91505092915050565b620045ee816200457b565b82525050565b5f602082019050620046095f830184620045e3565b92915050565b5f806040838503121562004628576200462762004573565b5b5f62004637858286016200459d565b92505060206200464a858286016200459d565b9150509250929050565b5f604082019050620046695f830185620045e3565b620046786020830184620045e3565b9392505050565b5f8115159050919050565b62004695816200467f565b82525050565b5f602082019050620046b05f8301846200468a565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f819050919050565b5f620046fe620046f8620046f284620046b6565b620046d5565b620046b6565b9050919050565b5f6200471182620046de565b9050919050565b5f620047248262004705565b9050919050565b620047368162004718565b82525050565b5f620047488262004705565b9050919050565b6200475a816200473c565b82525050565b6200476b816200457b565b82525050565b5f6200477d82620046b6565b9050919050565b6200478f8162004771565b82525050565b61016082015f820151620047ac5f8501826200472b565b506020820151620047c160208501826200474f565b506040820151620047d6604085018262004760565b506060820151620047eb606085018262004760565b50608082015162004800608085018262004760565b5060a08201516200481560a085018262004760565b5060c08201516200482a60c085018262004760565b5060e08201516200483f60e085018262004784565b506101008201516200485661010085018262004760565b506101208201516200486d61012085018262004760565b506101408201516200488461014085018262004760565b50505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b60048110620048cb57620048ca6200488a565b5b50565b5f819050620048dd82620048b7565b919050565b5f620048ee82620048ce565b9050919050565b6200490081620048e2565b82525050565b5f6101c0820190506200491c5f83018762004795565b6200492c610160830186620048f5565b6200493c610180830185620045e3565b6200494c6101a0830184620045e3565b95945050505050565b620049608162004771565b81146200496b575f80fd5b50565b5f813590506200497e8162004955565b92915050565b5f602082840312156200499c576200499b62004573565b5b5f620049ab848285016200496e565b91505092915050565b620049bf8162004771565b82525050565b5f602082019050620049da5f830184620049b4565b92915050565b5f620049ec8262004705565b9050919050565b620049fe81620049e0565b82525050565b5f60208201905062004a195f830184620049f3565b92915050565b5f805f6060848603121562004a395762004a3862004573565b5b5f62004a48868287016200459d565b935050602062004a5b868287016200459d565b925050604062004a6e868287016200459d565b9150509250925092565b5f62004a848262004771565b9050919050565b62004a968162004a78565b811462004aa1575f80fd5b50565b5f8135905062004ab48162004a8b565b92915050565b5f806040838503121562004ad35762004ad262004573565b5b5f62004ae28582860162004aa4565b925050602062004af5858286016200496e565b9150509250929050565b5f80fd5b5f610140828403121562004b1c5762004b1b62004aff565b5b81905092915050565b5f6020828403121562004b3d5762004b3c62004573565b5b5f82013567ffffffffffffffff81111562004b5d5762004b5c62004577565b5b62004b6b8482850162004b03565b91505092915050565b5f62ffffff82169050919050565b62004b8d8162004b74565b82525050565b5f60208201905062004ba85f83018462004b82565b92915050565b5f806040838503121562004bc75762004bc662004573565b5b5f62004bd6858286016200459d565b925050602062004be9858286016200496e565b9150509250929050565b5f819050919050565b62004c078162004bf3565b811462004c12575f80fd5b50565b5f8135905062004c258162004bfc565b92915050565b5f80fd5b5f80fd5b5f80fd5b5f8083601f84011262004c4f5762004c4e62004c2b565b5b8235905067ffffffffffffffff81111562004c6f5762004c6e62004c2f565b5b60208301915083600182028301111562004c8e5762004c8d62004c33565b5b9250929050565b5f805f806060858703121562004cb05762004caf62004573565b5b5f62004cbf8782880162004c15565b945050602062004cd28782880162004c15565b935050604085013567ffffffffffffffff81111562004cf65762004cf562004577565b5b62004d048782880162004c37565b925092505092959194509250565b5f82825260208201905092915050565b7f536861726520746f6f20686967680000000000000000000000000000000000005f82015250565b5f62004d58600e8362004d12565b915062004d658262004d22565b602082019050919050565b5f6020820190508181035f83015262004d898162004d4a565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f62004dc9826200457b565b915062004dd6836200457b565b925082820262004de6816200457b565b9150828204841483151762004e005762004dff62004d90565b5b5092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f62004e40826200457b565b915062004e4d836200457b565b92508262004e605762004e5f62004e07565b5b828204905092915050565b7f4e6f7420617574686f72697a65640000000000000000000000000000000000005f82015250565b5f62004ea1600e8362004d12565b915062004eae8262004e6b565b602082019050919050565b5f6020820190508181035f83015262004ed28162004e93565b9050919050565b7f41756374696f6e206e6f7420656e6465640000000000000000000000000000005f82015250565b5f62004f0f60118362004d12565b915062004f1c8262004ed9565b602082019050919050565b5f6020820190508181035f83015262004f408162004f01565b9050919050565b7f4e6f7420616374697665000000000000000000000000000000000000000000005f82015250565b5f62004f7d600a8362004d12565b915062004f8a8262004f47565b602082019050919050565b5f6020820190508181035f83015262004fae8162004f6f565b9050919050565b7f46656520746f6f206869676800000000000000000000000000000000000000005f82015250565b5f62004feb600c8362004d12565b915062004ff88262004fb5565b602082019050919050565b5f6020820190508181035f8301526200501c8162004fdd565b9050919050565b7f41756374696f6e206e6f7420636f6d706c6574656400000000000000000000005f82015250565b5f6200505960158362004d12565b9150620050668262005023565b602082019050919050565b5f6020820190508181035f8301526200508a816200504b565b9050919050565b5f81519050620050a18162004584565b92915050565b5f60208284031215620050bf57620050be62004573565b5b5f620050ce8482850162005091565b91505092915050565b5f620050e3826200457b565b9150620050f0836200457b565b92508282039050818111156200510b576200510a62004d90565b5b92915050565b5f604082019050620051265f830185620049b4565b620051356020830184620045e3565b9392505050565b6200514781620046b6565b82525050565b5f608082019050620051625f830187620049b4565b620051716020830186620049b4565b62005180604083018562004b82565b6200518f60608301846200513c565b95945050505050565b5f81519050620051a88162004955565b92915050565b5f60208284031215620051c657620051c562004573565b5b5f620051d58482850162005198565b91505092915050565b7f41756374696f6e206e6f742061637469766500000000000000000000000000005f82015250565b5f6200521460128362004d12565b91506200522182620051de565b602082019050919050565b5f6020820190508181035f830152620052458162005206565b9050919050565b7f4e6f7420737461727465640000000000000000000000000000000000000000005f82015250565b5f62005282600b8362004d12565b91506200528f826200524c565b602082019050919050565b5f6020820190508181035f830152620052b38162005274565b9050919050565b7f456e6465640000000000000000000000000000000000000000000000000000005f82015250565b5f620052f060058362004d12565b9150620052fd82620052ba565b602082019050919050565b5f6020820190508181035f8301526200532181620052e2565b9050919050565b7f5a65726f20616d6f756e740000000000000000000000000000000000000000005f82015250565b5f6200535e600b8362004d12565b91506200536b8262005328565b602082019050919050565b5f6020820190508181035f8301526200538f8162005350565b9050919050565b5f620053a2826200457b565b9150620053af836200457b565b9250828201905080821115620053ca57620053c962004d90565b5b92915050565b7f536c6970706167652065786365656465640000000000000000000000000000005f82015250565b5f6200540660118362004d12565b91506200541382620053d0565b602082019050919050565b5f6020820190508181035f8301526200543781620053f8565b9050919050565b5f60a082019050620054535f830188620045e3565b620054626020830187620045e3565b620054716040830186620045e3565b620054806060830185620045e3565b6200548f6080830184620045e3565b9695505050505050565b7f4e6f20706f736974696f6e0000000000000000000000000000000000000000005f82015250565b5f620054cf600b8362004d12565b9150620054dc8262005499565b602082019050919050565b5f6020820190508181035f8301526200550081620054c1565b9050919050565b5f6fffffffffffffffffffffffffffffffff82169050919050565b6200552d8162005507565b82525050565b608082015f820151620055495f85018262004760565b5060208201516200555e602085018262004784565b50604082015162005573604085018262005522565b50606082015162005588606085018262005522565b50505050565b5f608082019050620055a35f83018462005533565b92915050565b5f8060408385031215620055c257620055c162004573565b5b5f620055d18582860162005091565b9250506020620055e48582860162005091565b9150509250929050565b5f608082019050620056035f830187620045e3565b620056126020830186620045e3565b620056216040830185620045e3565b620056306060830184620045e3565b95945050505050565b7f5a65726f20726563697069656e740000000000000000000000000000000000005f82015250565b5f6200566f600e8362004d12565b91506200567c8262005639565b602082019050919050565b5f6020820190508181035f830152620056a08162005661565b9050919050565b7f4e6f7468696e6720746f207377656570000000000000000000000000000000005f82015250565b5f620056dd60108362004d12565b9150620056ea82620056a7565b602082019050919050565b5f6020820190508181035f8301526200570e81620056cf565b9050919050565b7f5374617274206d75737420626520696e206675747572650000000000000000005f82015250565b5f6200574b60178362004d12565b9150620057588262005715565b602082019050919050565b5f6020820190508181035f8301526200577c816200573d565b9050919050565b7f456e64206d7573742062652061667465722073746172740000000000000000005f82015250565b5f620057b960178362004d12565b9150620057c68262005783565b602082019050919050565b5f6020820190508181035f830152620057ea81620057ab565b9050919050565b5f620057fd826200457b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820362005832576200583162004d90565b5b600182019050919050565b5f80fd5b5f80fd5b5f80fd5b5f80833560016020038436030381126200586857620058676200583d565b5b80840192508235915067ffffffffffffffff8211156200588d576200588c62005841565b5b602083019250600182023603831315620058ac57620058ab62005845565b5b509250929050565b828183375f83830152505050565b5f601f19601f8301169050919050565b5f620058df838562004d12565b9350620058ee838584620058b4565b620058f983620058c2565b840190509392505050565b5f6080820190508181035f8301526200591f81888a620058d2565b9050818103602083015262005936818688620058d2565b9050620059476040830185620045e3565b620059566060830184620049b4565b979650505050505050565b5f61010082019050620059775f83018b620049b4565b62005986602083018a620049b4565b620059956040830189620045e3565b620059a46060830188620045e3565b620059b36080830187620045e3565b620059c260a0830186620045e3565b620059d160c0830185620045e3565b620059e060e0830184620045e3565b9998505050505050505050565b7f4e6f742063726561746f720000000000000000000000000000000000000000005f82015250565b5f62005a23600b8362004d12565b915062005a3082620059ed565b602082019050919050565b5f6020820190508181035f83015262005a548162005a15565b9050919050565b7f416c72656164792077697468647261776e0000000000000000000000000000005f82015250565b5f62005a9160118362004d12565b915062005a9e8262005a5b565b602082019050919050565b5f6020820190508181035f83015262005ac28162005a83565b9050919050565b7f4e6f7468696e6720746f207769746864726177000000000000000000000000005f82015250565b5f62005aff60138362004d12565b915062005b0c8262005ac9565b602082019050919050565b5f6020820190508181035f83015262005b308162005af1565b9050919050565b7f5a65726f2066656520726563697069656e7400000000000000000000000000005f82015250565b5f62005b6d60128362004d12565b915062005b7a8262005b37565b602082019050919050565b5f6020820190508181035f83015262005b9e8162005b5f565b9050919050565b7f556e617574686f72697a65642063616c6c6261636b00000000000000000000005f82015250565b5f62005bdb60158362004d12565b915062005be88262005ba5565b602082019050919050565b5f6020820190508181035f83015262005c0c8162005bcd565b9050919050565b5f62005c1f82620046b6565b9050919050565b62005c318162005c13565b811462005c3c575f80fd5b50565b5f8135905062005c4f8162005c26565b92915050565b5f806040838503121562005c6e5762005c6d62004573565b5b5f62005c7d8582860162005c3f565b925050602062005c908582860162005c3f565b9150509250929050565b7f5072696365206f75747369646520556e69737761702072616e676500000000005f82015250565b5f62005cd0601b8362004d12565b915062005cdd8262005c9a565b602082019050919050565b5f6020820190508181035f83015262005d018162005cc2565b9050919050565b62005d1381620046b6565b811462005d1e575f80fd5b50565b5f8151905062005d318162005d08565b92915050565b5f8160020b9050919050565b62005d4e8162005d37565b811462005d59575f80fd5b50565b5f8151905062005d6c8162005d43565b92915050565b5f61ffff82169050919050565b62005d8a8162005d72565b811462005d95575f80fd5b50565b5f8151905062005da88162005d7f565b92915050565b5f60ff82169050919050565b62005dc58162005dae565b811462005dd0575f80fd5b50565b5f8151905062005de38162005dba565b92915050565b62005df4816200467f565b811462005dff575f80fd5b50565b5f8151905062005e128162005de9565b92915050565b5f805f805f805f60e0888a03121562005e365762005e3562004573565b5b5f62005e458a828b0162005d21565b975050602062005e588a828b0162005d5c565b965050604062005e6b8a828b0162005d98565b955050606062005e7e8a828b0162005d98565b945050608062005e918a828b0162005d98565b93505060a062005ea48a828b0162005dd3565b92505060c062005eb78a828b0162005e02565b91505092959891949750929550565b5f60408201905062005edb5f830185620049b4565b62005eea6020830184620049b4565b9392505050565b62005efc8162004bf3565b82525050565b5f81519050919050565b5f82825260208201905092915050565b5f5b8381101562005f3b57808201518184015260208101905062005f1e565b5f8484015250505050565b5f62005f528262005f02565b62005f5e818562005f0c565b935062005f7081856020860162005f1c565b62005f7b81620058c2565b840191505092915050565b5f60a08201905062005f9b5f830188620049b4565b62005faa60208301876200468a565b62005fb9604083018662005ef1565b62005fc860608301856200513c565b818103608083015262005fdc818462005f46565b90509695505050505050565b5f8151905062005ff88162004bfc565b92915050565b5f806040838503121562006017576200601662004573565b5b5f620060268582860162005fe8565b9250506020620060398582860162005fe8565b9150509250929050565b7f506f6f6c207072696365206e6f7420636f7272656374656400000000000000005f82015250565b5f6200607960188362004d12565b9150620060868262006043565b602082019050919050565b5f6020820190508181035f830152620060aa816200606b565b9050919050565b620060bc8162004b74565b82525050565b620060cd8162005d37565b82525050565b61016082015f820151620060ea5f85018262004784565b506020820151620060ff602085018262004784565b506040820151620061146040850182620060b1565b506060820151620061296060850182620060c2565b5060808201516200613e6080850182620060c2565b5060a08201516200615360a085018262004760565b5060c08201516200616860c085018262004760565b5060e08201516200617d60e085018262004760565b506101008201516200619461010085018262004760565b50610120820151620061ab61012085018262004784565b50610140820151620061c261014085018262004760565b50505050565b5f61016082019050620061de5f830184620060d3565b92915050565b620061ef8162005507565b8114620061fa575f80fd5b50565b5f815190506200620d81620061e4565b92915050565b5f805f80608085870312156200622e576200622d62004573565b5b5f6200623d8782880162005091565b94505060206200625087828801620061fd565b9350506040620062638782880162005091565b9250506060620062768782880162005091565b91505092959194509250565b5f819050919050565b5f620062ab620062a56200629f8462006282565b620046d5565b6200457b565b9050919050565b620062bd816200628b565b82525050565b5f608082019050620062d85f830187620049b4565b620062e76020830186620062b2565b620062f66040830185620062b2565b620063056060830184620062b2565b95945050505050565b5f608082019050620063235f830187620049b4565b620063326020830186620045e3565b620063416040830185620045e3565b620063506060830184620045e3565b95945050505050565b7f536f6c64206f75740000000000000000000000000000000000000000000000005f82015250565b5f6200638f60088362004d12565b91506200639c8262006359565b602082019050919050565b5f6020820190508181035f830152620063c08162006381565b9050919050565b7f556e737570706f72746564207061796d656e7420746f6b656e000000000000005f82015250565b5f620063fd60198362004d12565b91506200640a82620063c7565b602082019050919050565b5f6020820190508181035f8301526200642e81620063ef565b9050919050565b7f5a65726f206261736520707269636500000000000000000000000000000000005f82015250565b5f6200646b600f8362004d12565b9150620064788262006435565b602082019050919050565b5f6020820190508181035f8301526200649c816200645d565b9050919050565b7f5a65726f206d61782072616973650000000000000000000000000000000000005f82015250565b5f620064d9600e8362004d12565b9150620064e682620064a3565b602082019050919050565b5f6020820190508181035f8301526200650a81620064cb565b9050919050565b7f496e76616c6964206c69717569646974792073686172650000000000000000005f82015250565b5f6200654760178362004d12565b9150620065548262006511565b602082019050919050565b5f6020820190508181035f830152620065788162006539565b9050919050565b7f4375727665206f766572666c6f777300000000000000000000000000000000005f82015250565b5f620065b5600f8362004d12565b9150620065c2826200657f565b602082019050919050565b5f6020820190508181035f830152620065e681620065a7565b9050919050565b7f537570706c7920746f6f20736d616c6c20666f72206c697175696469747900005f82015250565b5f62006623601e8362004d12565b91506200663082620065ed565b602082019050919050565b5f6020820190508181035f830152620066548162006615565b9050919050565b5f620066678262005dae565b9150620066748362005dae565b92508262006687576200668662004e07565b5b82820690509291505056fe608060405234801562000010575f80fd5b5060405162001d7438038062001d748339818101604052810190620000369190620003d6565b80848481600390816200004a9190620006b1565b5080600490816200005c9190620006b1565b5050505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620000d2575f6040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620000c99190620007a6565b60405180910390fd5b620000e381620000f560201b60201c565b508160068190555050505050620007c1565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f604051905090565b5f80fd5b5f80fd5b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6200021982620001d1565b810181811067ffffffffffffffff821117156200023b576200023a620001e1565b5b80604052505050565b5f6200024f620001b8565b90506200025d82826200020e565b919050565b5f67ffffffffffffffff8211156200027f576200027e620001e1565b5b6200028a82620001d1565b9050602081019050919050565b5f5b83811015620002b657808201518184015260208101905062000299565b5f8484015250505050565b5f620002d7620002d18462000262565b62000244565b905082815260208101848484011115620002f657620002f5620001cd565b5b6200030384828562000297565b509392505050565b5f82601f830112620003225762000321620001c9565b5b815162000334848260208601620002c1565b91505092915050565b5f819050919050565b62000351816200033d565b81146200035c575f80fd5b50565b5f815190506200036f8162000346565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f620003a08262000375565b9050919050565b620003b28162000394565b8114620003bd575f80fd5b50565b5f81519050620003d081620003a7565b92915050565b5f805f8060808587031215620003f157620003f0620001c1565b5b5f85015167ffffffffffffffff811115620004115762000410620001c5565b5b6200041f878288016200030b565b945050602085015167ffffffffffffffff811115620004435762000442620001c5565b5b62000451878288016200030b565b935050604062000464878288016200035f565b92505060606200047787828801620003c0565b91505092959194509250565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680620004d257607f821691505b602082108103620004e857620004e76200048d565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026200054c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200050f565b6200055886836200050f565b95508019841693508086168417925050509392505050565b5f819050919050565b5f62000599620005936200058d846200033d565b62000570565b6200033d565b9050919050565b5f819050919050565b620005b48362000579565b620005cc620005c382620005a0565b8484546200051b565b825550505050565b5f90565b620005e2620005d4565b620005ef818484620005a9565b505050565b5b8181101562000616576200060a5f82620005d8565b600181019050620005f5565b5050565b601f82111562000665576200062f81620004ee565b6200063a8462000500565b810160208510156200064a578190505b62000662620006598562000500565b830182620005f4565b50505b505050565b5f82821c905092915050565b5f620006875f19846008026200066a565b1980831691505092915050565b5f620006a1838362000676565b9150826002028217905092915050565b620006bc8262000483565b67ffffffffffffffff811115620006d857620006d7620001e1565b5b620006e48254620004ba565b620006f18282856200061a565b5f60209050601f83116001811462000727575f841562000712578287015190505b6200071e858262000694565b8655506200078d565b601f1984166200073786620004ee565b5f5b82811015620007605784890151825560018201915060208501945060208101905062000739565b868310156200078057848901516200077c601f89168262000676565b8355505b6001600288020188555050505b505050505050565b620007a08162000394565b82525050565b5f602082019050620007bb5f83018462000795565b92915050565b6115a580620007cf5f395ff3fe608060405234801561000f575f80fd5b5060043610610109575f3560e01c8063715018a6116100a0578063af35c6c71161006f578063af35c6c7146102a5578063bef97c87146102af578063d5abeb01146102cd578063dd62ed3e146102eb578063f2fde38b1461031b57610109565b8063715018a61461022f5780638da5cb5b1461023957806395d89b4114610257578063a9059cbb1461027557610109565b8063313ce567116100dc578063313ce567146101a957806340c10f19146101c757806342966c68146101e357806370a08231146101ff57610109565b806306fdde031461010d578063095ea7b31461012b57806318160ddd1461015b57806323b872dd14610179575b5f80fd5b610115610337565b60405161012291906110bb565b60405180910390f35b6101456004803603810190610140919061116c565b6103c7565b60405161015291906111c4565b60405180910390f35b6101636103e9565b60405161017091906111ec565b60405180910390f35b610193600480360381019061018e9190611205565b6103f2565b6040516101a091906111c4565b60405180910390f35b6101b1610420565b6040516101be9190611270565b60405180910390f35b6101e160048036038101906101dc919061116c565b610428565b005b6101fd60048036038101906101f89190611289565b610495565b005b610219600480360381019061021491906112b4565b6104aa565b60405161022691906111ec565b60405180910390f35b6102376104ef565b005b610241610502565b60405161024e91906112ee565b60405180910390f35b61025f61052a565b60405161026c91906110bb565b60405180910390f35b61028f600480360381019061028a919061116c565b6105ba565b60405161029c91906111c4565b60405180910390f35b6102ad6105dc565b005b6102b761067b565b6040516102c491906111c4565b60405180910390f35b6102d561068d565b6040516102e291906111ec565b60405180910390f35b61030560048036038101906103009190611307565b610693565b60405161031291906111ec565b60405180910390f35b610335600480360381019061033091906112b4565b610715565b005b60606003805461034690611372565b80601f016020809104026020016040519081016040528092919081815260200182805461037290611372565b80156103bd5780601f10610394576101008083540402835291602001916103bd565b820191905f5260205f20905b8154815290600101906020018083116103a057829003601f168201915b5050505050905090565b5f806103d1610799565b90506103de8185856107a0565b600191505092915050565b5f600254905090565b5f806103fc610799565b90506104098582856107b2565b610414858585610845565b60019150509392505050565b5f6012905090565b610430610935565b6006548161043c6103e9565b61044691906113cf565b1115610487576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047e9061144c565b60405180910390fd5b61049182826109bc565b5050565b61049d610935565b6104a73382610a3b565b50565b5f805f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b6104f7610935565b6105005f610aba565b565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606004805461053990611372565b80601f016020809104026020016040519081016040528092919081815260200182805461056590611372565b80156105b05780601f10610587576101008083540402835291602001916105b0565b820191905f5260205f20905b81548152906001019060200180831161059357829003601f168201915b5050505050905090565b5f806105c4610799565b90506105d1818585610845565b600191505092915050565b6105e4610935565b60075f9054906101000a900460ff1615610633576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062a906114b4565b60405180910390fd5b600160075f6101000a81548160ff0219169083151502179055507feadb24812ab3c9a55c774958184293ebdb6c7f6a2dbab11f397d80c86feb65d360405160405180910390a1565b60075f9054906101000a900460ff1681565b60065481565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b61071d610935565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361078d575f6040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161078491906112ee565b60405180910390fd5b61079681610aba565b50565b5f33905090565b6107ad8383836001610b7d565b505050565b5f6107bd8484610693565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81101561083f5781811015610830578281836040517ffb8f41b2000000000000000000000000000000000000000000000000000000008152600401610827939291906114d2565b60405180910390fd5b61083e84848484035f610b7d565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036108b5575f6040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016108ac91906112ee565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610925575f6040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161091c91906112ee565b60405180910390fd5b610930838383610d4c565b505050565b61093d610799565b73ffffffffffffffffffffffffffffffffffffffff1661095b610502565b73ffffffffffffffffffffffffffffffffffffffff16146109ba5761097e610799565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016109b191906112ee565b60405180910390fd5b565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a2c575f6040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610a2391906112ee565b60405180910390fd5b610a375f8383610d4c565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610aab575f6040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401610aa291906112ee565b60405180910390fd5b610ab6825f83610d4c565b5050565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610bed575f6040517fe602df05000000000000000000000000000000000000000000000000000000008152600401610be491906112ee565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610c5d575f6040517f94280d62000000000000000000000000000000000000000000000000000000008152600401610c5491906112ee565b60405180910390fd5b8160015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055508015610d46578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610d3d91906111ec565b60405180910390a35b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015610db457505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b15610e085760075f9054906101000a900460ff16610e07576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dfe90611551565b60405180910390fd5b5b610e13838383610e18565b505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610e68578060025f828254610e5c91906113cf565b92505081905550610f36565b5f805f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905081811015610ef1578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610ee8939291906114d2565b60405180910390fd5b8181035f808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f7d578060025f8282540392505081905550610fc7565b805f808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161102491906111ec565b60405180910390a3505050565b5f81519050919050565b5f82825260208201905092915050565b5f5b8381101561106857808201518184015260208101905061104d565b5f8484015250505050565b5f601f19601f8301169050919050565b5f61108d82611031565b611097818561103b565b93506110a781856020860161104b565b6110b081611073565b840191505092915050565b5f6020820190508181035f8301526110d38184611083565b905092915050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f611108826110df565b9050919050565b611118816110fe565b8114611122575f80fd5b50565b5f813590506111338161110f565b92915050565b5f819050919050565b61114b81611139565b8114611155575f80fd5b50565b5f8135905061116681611142565b92915050565b5f8060408385031215611182576111816110db565b5b5f61118f85828601611125565b92505060206111a085828601611158565b9150509250929050565b5f8115159050919050565b6111be816111aa565b82525050565b5f6020820190506111d75f8301846111b5565b92915050565b6111e681611139565b82525050565b5f6020820190506111ff5f8301846111dd565b92915050565b5f805f6060848603121561121c5761121b6110db565b5b5f61122986828701611125565b935050602061123a86828701611125565b925050604061124b86828701611158565b9150509250925092565b5f60ff82169050919050565b61126a81611255565b82525050565b5f6020820190506112835f830184611261565b92915050565b5f6020828403121561129e5761129d6110db565b5b5f6112ab84828501611158565b91505092915050565b5f602082840312156112c9576112c86110db565b5b5f6112d684828501611125565b91505092915050565b6112e8816110fe565b82525050565b5f6020820190506113015f8301846112df565b92915050565b5f806040838503121561131d5761131c6110db565b5b5f61132a85828601611125565b925050602061133b85828601611125565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061138957607f821691505b60208210810361139c5761139b611345565b5b50919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6113d982611139565b91506113e483611139565b92508282019050808211156113fc576113fb6113a2565b5b92915050565b7f45786365656473206d617820737570706c7900000000000000000000000000005f82015250565b5f61143660128361103b565b915061144182611402565b602082019050919050565b5f6020820190508181035f8301526114638161142a565b9050919050565b7f416c726561647920656e61626c656400000000000000000000000000000000005f82015250565b5f61149e600f8361103b565b91506114a98261146a565b602082019050919050565b5f6020820190508181035f8301526114cb81611492565b9050919050565b5f6060820190506114e55f8301866112df565b6114f260208301856111dd565b6114ff60408301846111dd565b949350505050565b7f5472616e7366657273206c6f636b6564000000000000000000000000000000005f82015250565b5f61153b60108361103b565b915061154682611507565b602082019050919050565b5f6020820190508181035f8301526115688161152f565b905091905056fea26469706673582212200f4bf8eb53b1861d79dfc4f1860c45af527218628e4b2e5de390eb3222fe560764736f6c63430008180033a2646970667358221220f7d00970c468574967c023a9ef8d390a5dfdced2a854694eb7872053949cc8a764736f6c63430008180033",
    "sourceMap": "413:28349:18:-:0;;;6160:489;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;6281:10;2365:1:11;2539:46;:29;:27;;;:29;;:::i;:::-;:44;;;:46;;:::i;:::-;:52;;:66;;;;1297:1:0;1273:26;;:12;:26;;;1269:95;;1350:1;1322:31;;;;;;;;;;;:::i;:::-;;;;;;;;1269:95;1373:32;1392:12;1373:18;;;:32;;:::i;:::-;1225:187;6340:1:18::1;6315:27;;:13;:27;;::::0;6307:58:::1;;;;;;;;;;;;:::i;:::-;;;;;;;;;6420:1;6383:39;;6391:16;6383:39;;::::0;6375:73:::1;;;;;;;;;;;;:::i;:::-;;;;;;;;;6476:16;6458:34;;;;;;;;::::0;::::1;2738:4;6510:14;:29;;6502:54;;;;;;;;;;;;:::i;:::-;;;;;;;;;6589:13;6566:20;;:36;;;;;;;;;;;;;;;;;;6628:14;6612:13;:30;;;;6160:489:::0;;;413:28349;;4636:127:11;4706:7;1505:66;4732:24;;4725:31;;4636:127;:::o;2679:163:12:-;2740:21;2822:4;2812:14;;2679:163;;;:::o;2912:187:0:-;2985:16;3004:6;;;;;;;;;;;2985:25;;3029:8;3020:6;;:17;;;;;;;;;;;;;;;;;;3083:8;3052:40;;3073:8;3052:40;;;;;;;;;;;;2975:124;2912:187;:::o;88:117:20:-;197:1;194;187:12;334:126;371:7;411:42;404:5;400:54;389:65;;334:126;;;:::o;466:96::-;503:7;532:24;550:5;532:24;:::i;:::-;521:35;;466:96;;;:::o;568:122::-;641:24;659:5;641:24;:::i;:::-;634:5;631:35;621:63;;680:1;677;670:12;621:63;568:122;:::o;696:143::-;753:5;784:6;778:13;769:22;;800:33;827:5;800:33;:::i;:::-;696:143;;;;:::o;845:77::-;882:7;911:5;900:16;;845:77;;;:::o;928:122::-;1001:24;1019:5;1001:24;:::i;:::-;994:5;991:35;981:63;;1040:1;1037;1030:12;981:63;928:122;:::o;1056:143::-;1113:5;1144:6;1138:13;1129:22;;1160:33;1187:5;1160:33;:::i;:::-;1056:143;;;;:::o;1205:132::-;1278:7;1307:24;1325:5;1307:24;:::i;:::-;1296:35;;1205:132;;;:::o;1343:194::-;1452:60;1506:5;1452:60;:::i;:::-;1445:5;1442:71;1432:99;;1527:1;1524;1517:12;1432:99;1343:194;:::o;1543:215::-;1636:5;1667:6;1661:13;1652:22;;1683:69;1746:5;1683:69;:::i;:::-;1543:215;;;;:::o;1764:735::-;1888:6;1896;1904;1953:2;1941:9;1932:7;1928:23;1924:32;1921:119;;;1959:79;;:::i;:::-;1921:119;2079:1;2104:64;2160:7;2151:6;2140:9;2136:22;2104:64;:::i;:::-;2094:74;;2050:128;2217:2;2243:64;2299:7;2290:6;2279:9;2275:22;2243:64;:::i;:::-;2233:74;;2188:129;2356:2;2382:100;2474:7;2465:6;2454:9;2450:22;2382:100;:::i;:::-;2372:110;;2327:165;1764:735;;;;;:::o;2505:118::-;2592:24;2610:5;2592:24;:::i;:::-;2587:3;2580:37;2505:118;;:::o;2629:222::-;2722:4;2760:2;2749:9;2745:18;2737:26;;2773:71;2841:1;2830:9;2826:17;2817:6;2773:71;:::i;:::-;2629:222;;;;:::o;2857:169::-;2941:11;2975:6;2970:3;2963:19;3015:4;3010:3;3006:14;2991:29;;2857:169;;;;:::o;3032:168::-;3172:20;3168:1;3160:6;3156:14;3149:44;3032:168;:::o;3206:366::-;3348:3;3369:67;3433:2;3428:3;3369:67;:::i;:::-;3362:74;;3445:93;3534:3;3445:93;:::i;:::-;3563:2;3558:3;3554:12;3547:19;;3206:366;;;:::o;3578:419::-;3744:4;3782:2;3771:9;3767:18;3759:26;;3831:9;3825:4;3821:20;3817:1;3806:9;3802:17;3795:47;3859:131;3985:4;3859:131;:::i;:::-;3851:139;;3578:419;;;:::o;4003:171::-;4143:23;4139:1;4131:6;4127:14;4120:47;4003:171;:::o;4180:366::-;4322:3;4343:67;4407:2;4402:3;4343:67;:::i;:::-;4336:74;;4419:93;4508:3;4419:93;:::i;:::-;4537:2;4532:3;4528:12;4521:19;;4180:366;;;:::o;4552:419::-;4718:4;4756:2;4745:9;4741:18;4733:26;;4805:9;4799:4;4795:20;4791:1;4780:9;4776:17;4769:47;4833:131;4959:4;4833:131;:::i;:::-;4825:139;;4552:419;;;:::o;4977:162::-;5117:14;5113:1;5105:6;5101:14;5094:38;4977:162;:::o;5145:366::-;5287:3;5308:67;5372:2;5367:3;5308:67;:::i;:::-;5301:74;;5384:93;5473:3;5384:93;:::i;:::-;5502:2;5497:3;5493:12;5486:19;;5145:366;;;:::o;5517:419::-;5683:4;5721:2;5710:9;5706:18;5698:26;;5770:9;5764:4;5760:20;5756:1;5745:9;5741:17;5734:47;5798:131;5924:4;5798:131;:::i;:::-;5790:139;;5517:419;;;:::o;413:28349:18:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801562000010575f80fd5b506004361062000212575f3560e01c8063791b98bc1162000127578063d55be8c611620000af578063efc20dad1162000079578063efc20dad146200063f578063f2fde38b1462000675578063fa461e331462000695578063fdfae48614620006b55762000212565b8063d55be8c614620005bb578063d9f1aed914620005dd578063dd1b9c4a14620005fd578063e521cb92146200061f5762000212565b8063b17acdcd11620000f1578063b17acdcd146200050c578063b8dc491b1462000543578063b905fe561462000563578063bcae25a414620005995762000212565b8063791b98bc14620004725780638396602114620004945780638da5cb5b14620004ca578063a4ce25a714620004ec5762000212565b8063454b060811620001ab5780635c471ad511620001755780635c471ad514620003ec57806364df049e1462000422578063715018a6146200044457806375f0c2f014620004505762000212565b8063454b0608146200032757806348f719e5146200034757806354147e9e146200037d578063571a26a014620003b35762000212565b806321b6288611620001ed57806321b6288614620002a35780632ad7157314620002c35780633edb917d14620002e55780634373a28614620003075762000212565b806309e0625914620002165780630fda366d1462000236578063121a257f146200026c575b5f80fd5b6200023460048036038101906200022e9190620045b3565b620006d7565b005b6200025460048036038101906200024e9190620045b3565b62000770565b604051620002639190620045f4565b60405180910390f35b6200028a60048036038101906200028491906200460f565b620007aa565b6040516200029a92919062004654565b60405180910390f35b620002c16004803603810190620002bb9190620045b3565b6200080d565b005b620002cd62000a39565b604051620002dc9190620045f4565b60405180910390f35b620002ef62000a3f565b604051620002fe9190620045f4565b60405180910390f35b6200032560048036038101906200031f9190620045b3565b62000a45565b005b6200034560048036038101906200033f9190620045b3565b62000ade565b005b6200036560048036038101906200035f9190620045b3565b62001224565b6040516200037491906200469b565b60405180910390f35b6200039b6004803603810190620003959190620045b3565b62001241565b604051620003aa9190620045f4565b60405180910390f35b620003d16004803603810190620003cb9190620045b3565b62001256565b604051620003e3949392919062004906565b60405180910390f35b6200040a600480360381019062000404919062004984565b620013e7565b604051620004199190620045f4565b60405180910390f35b6200042c620013fc565b6040516200043b9190620049c5565b60405180910390f35b6200044e62001421565b005b6200045a62001438565b604051620004699190620045f4565b60405180910390f35b6200047c6200143e565b6040516200048b919062004a04565b60405180910390f35b620004b26004803603810190620004ac9190620045b3565b62001462565b604051620004c19190620049c5565b60405180910390f35b620004d462001492565b604051620004e39190620049c5565b60405180910390f35b6200050a600480360381019062000504919062004a1f565b620014b9565b005b6200052a6004803603810190620005249190620045b3565b62001996565b6040516200053a92919062004654565b60405180910390f35b6200056160048036038101906200055b919062004aba565b62001d5f565b005b6200058160048036038101906200057b919062004b25565b62001fa0565b604051620005909190620045f4565b60405180910390f35b620005a3620022f9565b604051620005b29190620045f4565b60405180910390f35b620005c5620022ff565b604051620005d49190620045f4565b60405180910390f35b620005fb6004803603810190620005f59190620045b3565b62002305565b005b62000607620026e2565b60405162000616919062004b93565b60405180910390f35b6200063d600480360381019062000637919062004984565b620026e8565b005b6200065d600480360381019062000657919062004bae565b62002821565b6040516200066c9190620045f4565b60405180910390f35b6200069360048036038101906200068d919062004984565b62002841565b005b620006b36004803603810190620006ad919062004c95565b620028cc565b005b620006bf62002a45565b604051620006ce9190620045f4565b60405180910390f35b620006e162002a4b565b61138881111562000729576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620007209062004d70565b60405180910390fd5b7fafd7016dba95bc0c303b0838ae8e4829497ed18cc6a0ed00eec5fc7c50148e17600854826040516200075e92919062004654565b60405180910390a18060088190555050565b5f8060025f8481526020019081526020015f209050620007a281600d0154825f0160020154835f016003015462002adb565b915050919050565b5f805f60025f8681526020019081526020015f209050620007de81600d015485835f0160020154845f016003015462002b15565b9250612710815f016008015484620007f7919062004dbd565b62000803919062004e34565b9150509250929050565b5f60025f8381526020019081526020015f209050805f016007015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480620008b557506200088662001492565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b620008f7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620008ee9062004eb9565b60405180910390fd5b805f0160060154421162000942576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620009399062004f27565b60405180910390fd5b600160038111156200095957620009586200488a565b5b81600b015f9054906101000a900460ff1660038111156200097f576200097e6200488a565b5b14620009c2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620009b99062004f95565b60405180910390fd5b600281600b015f6101000a81548160ff02191690836003811115620009ec57620009eb6200488a565b5b0217905550817fc7502df20ccf846bf5005f01564bb502b56dcec19f0e2d0575c4369cc5e3b53b82600c015483600d015460405162000a2d92919062004654565b60405180910390a25050565b60015481565b60085481565b62000a4f62002a4b565b6103e881111562000a97576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000a8e9062005003565b60405180910390fd5b7f3062378541f1b58e0547bfb13e7d7585153e442e477e263c6e63d4775b3072a66006548260405162000acc92919062004654565b60405180910390a18060068190555050565b62000ae862002bbb565b5f60025f8381526020019081526020015f2090506002600381111562000b135762000b126200488a565b5b81600b015f9054906101000a900460ff16600381111562000b395762000b386200488a565b5b1462000b7c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000b739062005071565b60405180910390fd5b5f62000b888262002be3565b90505f62000ba883600d0154845f0160020154855f016003015462002adb565b90505f62000bc083670de0b6b3a76400008462002c12565b905062000bcc620044db565b845f015f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16815f019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050845f016001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16816020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050806020015173ffffffffffffffffffffffffffffffffffffffff16815f015173ffffffffffffffffffffffffffffffffffffffff161081604001901515908115158152505083816020015173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040162000d099190620049c5565b602060405180830381865afa15801562000d25573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000d4b9190620050a7565b62000d579190620050d7565b816080018181525050600385600b015f6101000a81548160ff0219169083600381111562000d8a5762000d896200488a565b5b02179055508360075f836020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825462000de19190620050d7565b92505081905550805f015173ffffffffffffffffffffffffffffffffffffffff1663af35c6c76040518163ffffffff1660e01b81526004015f604051808303815f87803b15801562000e31575f80fd5b505af115801562000e44573d5f803e3d5ffd5b505050505f8411801562000e5757505f82115b156200102157805f015173ffffffffffffffffffffffffffffffffffffffff166340c10f1930846040518363ffffffff1660e01b815260040162000e9d92919062005111565b5f604051808303815f87803b15801562000eb5575f80fd5b505af115801562000ec8573d5f803e3d5ffd5b5050505062000edc83826040015162002cfd565b816060019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250505f8062000f208362002e19565b915091507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166313ead562838361271087606001516040518563ffffffff1660e01b815260040162000f8b94939291906200514d565b6020604051808303815f875af115801562000fa8573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000fce9190620051ae565b8360a0019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250506200101283858862002e47565b6200101e8884620031d0565b50505b5f815f015173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401620010609190620049c5565b602060405180830381865afa1580156200107c573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620010a29190620050a7565b90505f8111156200111b57815f015173ffffffffffffffffffffffffffffffffffffffff166342966c68826040518263ffffffff1660e01b8152600401620010eb9190620045f4565b5f604051808303815f87803b15801562001103575f80fd5b505af115801562001116573d5f803e3d5ffd5b505050505b5f8260800151836020015173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401620011609190620049c5565b602060405180830381865afa1580156200117c573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620011a29190620050a7565b620011ae9190620050d7565b90505f81111562001210576200120f875f016007015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1682856020015173ffffffffffffffffffffffffffffffffffffffff16620036de9092919063ffffffff16565b5b505050505050506200122162003736565b50565b6004602052805f5260405f205f915054906101000a900460ff1681565b6009602052805f5260405f205f915090505481565b6002602052805f5260405f205f91509050805f01604051806101600160405290815f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201548152602001600482015481526020016005820154815260200160068201548152602001600782015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016008820154815260200160098201548152602001600a820154815250509080600b015f9054906101000a900460ff169080600c01549080600d0154905084565b6007602052805f5260405f205f915090505481565b60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6200142b62002a4b565b620014365f62003754565b565b6107d081565b7f000000000000000000000000000000000000000000000000000000000000000081565b600a602052805f5260405f205f915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b620014c362002bbb565b5f60025f8581526020019081526020015f20905060016003811115620014ee57620014ed6200488a565b5b81600b015f9054906101000a900460ff1660038111156200151457620015136200488a565b5b1462001557576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200154e906200522c565b60405180910390fd5b805f0160050154421015620015a3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200159a906200529a565b60405180910390fd5b805f0160060154421115620015ef576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620015e69062005308565b60405180910390fd5b5f831162001634576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200162b9062005376565b60405180910390fd5b5f8062001642838662003815565b8093508194508297505050505f612710845f01600801548462001666919062004dbd565b62001672919062004e34565b905084818462001683919062005396565b1115620016c7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620016be906200541e565b60405180910390fd5b8284600c015f828254620016dc919062005396565b925050819055508584600d015f828254620016f8919062005396565b925050819055508560035f8981526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546200175c919062005396565b925050819055508260075f865f016001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f828254620017d6919062005396565b9250508190555081156200181457600284600b015f6101000a81548160ff021916908360038111156200180e576200180d6200488a565b5b02179055505b62001846845f016001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16848362003912565b835f015f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933886040518363ffffffff1660e01b8152600401620018a792919062005111565b5f604051808303815f87803b158015620018bf575f80fd5b505af1158015620018d2573d5f803e3d5ffd5b505050503373ffffffffffffffffffffffffffffffffffffffff16877fc938e879cd47aa84d5893377578d6c211ccd96f382228c42c1bb6a8eaa71a08488868589600c01548a600d01546040516200192f9594939291906200543e565b60405180910390a381156200198357867fc7502df20ccf846bf5005f01564bb502b56dcec19f0e2d0575c4369cc5e3b53b85600c015486600d01546040516200197a92919062004654565b60405180910390a25b505050506200199162003736565b505050565b5f80620019a262002bbb565b5f60025f8581526020019081526020015f209050600380811115620019cc57620019cb6200488a565b5b81600b015f9054906101000a900460ff166003811115620019f257620019f16200488a565b5b14801562001a1157505f60095f8681526020019081526020015f205414155b62001a53576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162001a4a90620054e7565b60405180910390fd5b5f807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663fc6f7865604051806080016040528060095f8b81526020019081526020015f205481526020013073ffffffffffffffffffffffffffffffffffffffff1681526020016fffffffffffffffffffffffffffffffff801681526020016fffffffffffffffffffffffffffffffff80168152506040518263ffffffff1660e01b815260040162001b1b91906200558e565b60408051808303815f875af115801562001b37573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062001b5d9190620055a9565b915091505f835f016001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16845f015f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161090508062001bea57818362001bed565b82825b80965081975050505f612710855f01600a01548862001c0d919062004dbd565b62001c19919062004e34565b90505f612710865f01600a01548862001c33919062004dbd565b62001c3f919062004e34565b905062001c98865f015f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16875f016007015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16848b62003aef565b62001cf0865f016001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16875f016007015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16838a62003aef565b887f8dcde09e464f5c324d7cbf62dbc0c647b8ad9242592ae364153f2549f4898d04838a62001d209190620050d7565b838a62001d2e9190620050d7565b858560405162001d429493929190620055ee565b60405180910390a250505050505062001d5a62003736565b915091565b62001d6962002a4b565b62001d7362002bbb565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160362001de4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162001ddb9062005687565b60405180910390fd5b5f8273ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040162001e209190620049c5565b602060405180830381865afa15801562001e3c573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062001e629190620050a7565b90505f60075f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905080821162001eea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162001ee190620056f5565b60405180910390fd5b5f818362001ef99190620050d7565b905062001f2884828773ffffffffffffffffffffffffffffffffffffffff16620036de9092919063ffffffff16565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f7b09c29f9106defeccc9ac3b823f3aad0b470d120e5df7aed033b5c43a4bf7188360405162001f879190620045f4565b60405180910390a350505062001f9c62003736565b5050565b5f428260e001351162001fea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162001fe19062005763565b60405180910390fd5b8160e001358261010001351162002038576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200202f90620057d1565b60405180910390fd5b6200205c826040013583608001358460a001358560c0013586610120013562003b91565b60015f8154809291906200207090620057f1565b9190505590505f82805f019062002088919062005849565b8480602001906200209a919062005849565b866040013530604051620020ae9062004565565b620020bf9695949392919062005904565b604051809103905ff080158015620020d9573d5f803e3d5ffd5b5090505f60025f8481526020019081526020015f2090505f815f01905082815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508460600160208101906200214c919062004984565b816001015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550846080013581600201819055508460a0013581600301819055508460c0013581600401819055508460e001358160050181905550846101000135816006018190555033816007015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506006548160080181905550846101200135816009018190555060085481600a0181905550600182600b015f6101000a81548160ff021916908360038111156200225f576200225e6200488a565b5b02179055503373ffffffffffffffffffffffffffffffffffffffff16847f65ae0fe5726dbcbc237789dda3a8e43b7cfba8b334c2668eb5bba82b42e6197885886060016020810190620022b3919062004984565b89608001358a60a001358b60c001358c60e001358d61010001358e6101200135604051620022e998979695949392919062005961565b60405180910390a3505050919050565b60065481565b6103e881565b6200230f62002bbb565b5f60025f8381526020019081526020015f209050805f016007015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614620023b9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620023b09062005a3b565b60405180910390fd5b60026003811115620023d057620023cf6200488a565b5b81600b015f9054906101000a900460ff166003811115620023f657620023f56200488a565b5b14806200243c57506003808111156200241457620024136200488a565b5b81600b015f9054906101000a900460ff1660038111156200243a57620024396200488a565b5b145b6200247e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620024759062005071565b60405180910390fd5b60045f8381526020019081526020015f205f9054906101000a900460ff1615620024df576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620024d69062005aa9565b60405180910390fd5b5f620024eb8262002be3565b82600c0154620024fc9190620050d7565b90505f811162002543576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200253a9062005b17565b60405180910390fd5b600160045f8581526020019081526020015f205f6101000a81548160ff0219169083151502179055508060075f845f016001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f828254620025df9190620050d7565b925050819055506200265d825f016007015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1682845f016001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16620036de9092919063ffffffff16565b815f016007015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16837f579e0e2d0cfdb23711bb6034ac9f2ba41e8965a8e24589d1c3cf5604868661fc83604051620026cb9190620045f4565b60405180910390a35050620026df62003736565b50565b61271081565b620026f262002a4b565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160362002763576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200275a9062005b85565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fd3890fc76afcfc31cba1dcf2c27b50e2541e4d75039c981855b5b5e03682aea060405160405180910390a38060055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6003602052815f5260405f20602052805f5260405f205f91509150505481565b6200284b62002a4b565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620028be575f6040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620028b59190620049c5565b60405180910390fd5b620028c98162003754565b50565b5f73ffffffffffffffffffffffffffffffffffffffff16600b5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614158015620029765750600b5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b620029b8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620029af9062005bf3565b60405180910390fd5b5f808383810190620029cb919062005c55565b915091505f86131562002a065762002a0533878473ffffffffffffffffffffffffffffffffffffffff16620036de9092919063ffffffff16565b5b5f85131562002a3d5762002a3c33868373ffffffffffffffffffffffffffffffffffffffff16620036de9092919063ffffffff16565b5b505050505050565b61138881565b62002a5562003d78565b73ffffffffffffffffffffffffffffffffffffffff1662002a7562001492565b73ffffffffffffffffffffffffffffffffffffffff161462002ad95762002a9b62003d78565b6040517f118cdaa700000000000000000000000000000000000000000000000000000000815260040162002ad09190620049c5565b60405180910390fd5b565b5f670de0b6b3a7640000848362002af3919062004dbd565b62002aff919062004e34565b8362002b0c919062005396565b90509392505050565b5f8062002b38858562002b29919062004dbd565b670de0b6b3a764000062003d7f565b90505f62002b9f8688600262002b4f919062004dbd565b62002b5b919062005396565b878662002b69919062004dbd565b62002b75919062004dbd565b670de0b6b3a764000080600262002b8d919062004dbd565b62002b99919062004dbd565b62003d7f565b9050808262002baf919062005396565b92505050949350505050565b62002bc562003dc5565b600262002bdb62002bd562003e09565b62003e32565b5f0181905550565b5f612710825f016009015483600c015462002bff919062004dbd565b62002c0b919062004e34565b9050919050565b5f805f62002c21868662003e3b565b915091505f820362002c4b5783818162002c405762002c3f62004e07565b5b049250505062002cf6565b81841162002c6f5762002c6e62002c685f86146012601162003e58565b62003e73565b5b5f8486880990508181118303925080820391505f855f038616905080860495508083049250600181825f0304019050808402831792505f600287600302189050808702600203810290508087026002038102905080870260020381029050808702600203810290508087026002038102905080870260020381029050808402955050505050505b9392505050565b5f808262002d395762002d33670de0b6b3a764000078010000000000000000000000000000000000000000000000008662002c12565b62002d68565b62002d67847801000000000000000000000000000000000000000000000000670de0b6b3a764000062002c12565b5b90505f62002d768262003e84565b90506401000276a373ffffffffffffffffffffffffffffffffffffffff168111801562002dcc575073fffd8963efd1fc6a506488495d951d5263988d2673ffffffffffffffffffffffffffffffffffffffff1681105b62002e0e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162002e059062005ce8565b60405180910390fd5b809250505092915050565b5f80826040015162002e34578260200151835f015162002e3e565b825f015183602001515b91509150915091565b5f8360a0015190505f8173ffffffffffffffffffffffffffffffffffffffff16633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa15801562002e9a573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062002ec0919062005e18565b5050505050509050846060015173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160362002f08575050620031cb565b5f856060015173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161190505f866040015115158215151490505f8162002f5a578562002f6a565b60028762002f69919062004e34565b5b90505f810362002f7f575050505050620031cb565b5f8062002f8c8a62002e19565b9150915086600b5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508673ffffffffffffffffffffffffffffffffffffffff1663128acb083087868e6060015187876040516020016200300992919062005ec6565b6040516020818303038152906040526040518663ffffffff1660e01b81526004016200303a95949392919062005f86565b60408051808303815f875af115801562003056573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906200307c919062005ffe565b50505f600b5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083620031c3578673ffffffffffffffffffffffffffffffffffffffff16633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa1580156200310e573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062003134919062005e18565b90919293945090919293509091925090915090505080965050896060015173ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614620031c2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620031b99062006091565b60405180910390fd5b5b505050505050505b505050565b5f815f015173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016200320f9190620049c5565b602060405180830381865afa1580156200322b573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620032519190620050a7565b90505f8260800151836020015173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401620032989190620049c5565b602060405180830381865afa158015620032b4573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620032da9190620050a7565b620032e69190620050d7565b90505f80620032f58562002e19565b91509150620033497f000000000000000000000000000000000000000000000000000000000000000085875f015173ffffffffffffffffffffffffffffffffffffffff166200403e9092919063ffffffff16565b6200339a7f000000000000000000000000000000000000000000000000000000000000000084876020015173ffffffffffffffffffffffffffffffffffffffff166200403e9092919063ffffffff16565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663883164566040518061016001604052808573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff16815260200161271062ffffff1681526020017ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2766060020b8152602001620d89a060020b815260200188604001516200346d57866200346f565b875b8152602001886040015162003485578762003487565b865b81526020015f81526020015f81526020013073ffffffffffffffffffffffffffffffffffffffff168152602001428152506040518263ffffffff1660e01b8152600401620034d69190620061c8565b6080604051808303815f875af19250505080156200351457506040513d601f19601f8201168201806040525081019062003511919062006213565b60015b6200355f57857f0d9e69eea1226c3cc6b24c170c2b55d6c198272e003451d42e20a842c1d9b9145f805f80604051620035519493929190620062c3565b60405180910390a262003635565b8360095f8c81526020019081526020015f20819055508860a00151600a5f8c81526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550897f0d9e69eea1226c3cc6b24c170c2b55d6c198272e003451d42e20a842c1d9b9148a60a00151868c6040015162003601578462003603565b855b8d6040015162003614578662003616565b855b6040516200362894939291906200630e565b60405180910390a2505050505b620036857f00000000000000000000000000000000000000000000000000000000000000005f875f015173ffffffffffffffffffffffffffffffffffffffff166200403e9092919063ffffffff16565b620036d67f00000000000000000000000000000000000000000000000000000000000000005f876020015173ffffffffffffffffffffffffffffffffffffffff166200403e9092919063ffffffff16565b505050505050565b620036ed8383836001620040fd565b6200373157826040517f5274afe7000000000000000000000000000000000000000000000000000000008152600401620037289190620049c5565b60405180910390fd5b505050565b60016200374c6200374662003e09565b62003e32565b5f0181905550565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f805f8392506200383985600d015484875f0160020154885f016003015462002b15565b91505f85600c0154865f0160040154620038549190620050d7565b9050808310156200386f5783835f935093509350506200390b565b80831115620038ff576200389786600d015482885f0160020154895f01600301548962004161565b93505f8411620038de576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620038d590620063a7565b60405180910390fd5b620038fc86600d015485885f0160020154895f016003015462002b15565b92505b83836001935093509350505b9250925092565b5f8373ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016200394e9190620049c5565b602060405180830381865afa1580156200396a573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620039909190620050a7565b9050620039c13330858773ffffffffffffffffffffffffffffffffffffffff1662004220909392919063ffffffff16565b82818573ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401620039fe9190620049c5565b602060405180830381865afa15801562003a1a573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062003a409190620050a7565b62003a4c9190620050d7565b1462003a8f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162003a869062006415565b60405180910390fd5b5f82111562003ae95762003ae83360055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16848773ffffffffffffffffffffffffffffffffffffffff1662004220909392919063ffffffff16565b5b50505050565b5f82111562003b475762003b4660055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16838673ffffffffffffffffffffffffffffffffffffffff16620036de9092919063ffffffff16565b5b8181111562003b8b5762003b8a83838362003b639190620050d7565b8673ffffffffffffffffffffffffffffffffffffffff16620036de9092919063ffffffff16565b5b50505050565b5f841162003bd6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162003bcd9062006483565b60405180910390fd5b5f821162003c1b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162003c1290620064f1565b60405180910390fd5b6107d0811015801562003c3057506127108111155b62003c72576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162003c69906200655f565b60405180910390fd5b62003c80858585856200427a565b1562003cc3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162003cba90620065cd565b60405180910390fd5b5f62003cd35f8487878a62004161565b90505f62003ce382878762002adb565b90505f62003d19612710858762003cfb919062004dbd565b62003d07919062004e34565b670de0b6b3a764000084600162004325565b905087818462003d2a919062005396565b111562003d6e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162003d65906200663b565b60405180910390fd5b5050505050505050565b5f33905090565b5f80820362003d955762003d94601262003e73565b5b600182600185038162003dad5762003dac62004e07565b5b040162003dbc5f85116200437e565b02905092915050565b62003dcf62004389565b1562003e07576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b5f7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f005f1b905090565b5f819050919050565b5f805f198385098385029150818110828203039250509250929050565b5f62003e64846200437e565b82841802821890509392505050565b634e487b715f52806020526024601cfd5b5f6001821162003e975781905062004039565b5f8290505f60019050700100000000000000000000000000000000821062003ec857608082901c9150604081901b90505b68010000000000000000821062003ee857604082901c9150602081901b90505b640100000000821062003f0457602082901c9150601081901b90505b62010000821062003f1e57601082901c9150600881901b90505b610100821062003f3757600882901c9150600481901b90505b6010821062003f4f57600482901c9150600281901b90505b6004821062003f6057600181901b90505b600181600302901c9050600181858162003f7f5762003f7e62004e07565b5b048201901c9050600181858162003f9b5762003f9a62004e07565b5b048201901c9050600181858162003fb75762003fb662004e07565b5b048201901c9050600181858162003fd35762003fd262004e07565b5b048201901c9050600181858162003fef5762003fee62004e07565b5b048201901c905060018185816200400b576200400a62004e07565b5b048201901c90506200403281858162004029576200402862004e07565b5b0482116200437e565b8103925050505b919050565b6200404c8383835f620043a9565b620040f8576200406083835f6001620043a9565b620040a457826040517f5274afe70000000000000000000000000000000000000000000000000000000081526004016200409b9190620049c5565b60405180910390fd5b620040b38383836001620043a9565b620040f757826040517f5274afe7000000000000000000000000000000000000000000000000000000008152600401620040ee9190620049c5565b60405180910390fd5b5b505050565b5f8063a9059cbb60e01b9050604051815f525f1960601c86166004528460245260205f60445f808b5af1925060015f511483166200415357838315161562004147573d5f823e3d81fd5b5f873b113d1516831692505b806040525050949350505050565b5f80600185670de0b6b3a7640000886200417c919062004dbd565b62004188919062004e34565b62004194919062005396565b905082811115620041a3578290505b5f5b8181101562004212575f600260018484620041c1919062005396565b620041cd919062005396565b620041d9919062004e34565b905087620041ea8a838a8a62002b15565b11620041f9578091506200420b565b600181620042089190620050d7565b92505b50620041a5565b809250505095945050505050565b620042308484848460016200440d565b6200427457836040517f5274afe70000000000000000000000000000000000000000000000000000000081526004016200426b9190620049c5565b60405180910390fd5b50505050565b5f6fffffffffffffffffffffffffffffffff8016851115620042a057600190506200431d565b5f620042ad858762004480565b50905080620042c15760019150506200431d565b620042e88487600289620042d6919062004dbd565b620042e2919062004dbd565b62004480565b508091505080620042fe5760019150506200431d565b6200431283670de0b6b3a764000062004480565b508091505080159150505b949350505050565b5f6200435b6200433583620044a9565b80156200435557505f848062004350576200434f62004e07565b5b868809115b6200437e565b6200436886868662002c12565b62004374919062005396565b9050949350505050565b5f8115159050919050565b5f6002620043a06200439a62003e09565b62003e32565b5f015414905090565b5f8063095ea7b360e01b9050604051815f525f1960601c86166004528460245260205f60445f808b5af1925060015f51148316620043ff578383151615620043f3573d5f823e3d81fd5b5f873b113d1516831692505b806040525050949350505050565b5f806323b872dd60e01b9050604051815f525f1960601c87166004525f1960601c86166024528460445260205f60645f808c5af1925060015f511483166200446d57838315161562004461573d5f823e3d81fd5b5f883b113d1516831692505b806040525f606052505095945050505050565b5f805f8385029050841584868304141792506200449d836200437e565b81029150509250929050565b5f60016002836003811115620044c457620044c36200488a565b5b620044d091906200665b565b60ff16149050919050565b6040518060c001604052805f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f151581526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81526020015f73ffffffffffffffffffffffffffffffffffffffff1681525090565b611d74806200669383390190565b5f80fd5b5f80fd5b5f819050919050565b6200458f816200457b565b81146200459a575f80fd5b50565b5f81359050620045ad8162004584565b92915050565b5f60208284031215620045cb57620045ca62004573565b5b5f620045da848285016200459d565b91505092915050565b620045ee816200457b565b82525050565b5f602082019050620046095f830184620045e3565b92915050565b5f806040838503121562004628576200462762004573565b5b5f62004637858286016200459d565b92505060206200464a858286016200459d565b9150509250929050565b5f604082019050620046695f830185620045e3565b620046786020830184620045e3565b9392505050565b5f8115159050919050565b62004695816200467f565b82525050565b5f602082019050620046b05f8301846200468a565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f819050919050565b5f620046fe620046f8620046f284620046b6565b620046d5565b620046b6565b9050919050565b5f6200471182620046de565b9050919050565b5f620047248262004705565b9050919050565b620047368162004718565b82525050565b5f620047488262004705565b9050919050565b6200475a816200473c565b82525050565b6200476b816200457b565b82525050565b5f6200477d82620046b6565b9050919050565b6200478f8162004771565b82525050565b61016082015f820151620047ac5f8501826200472b565b506020820151620047c160208501826200474f565b506040820151620047d6604085018262004760565b506060820151620047eb606085018262004760565b50608082015162004800608085018262004760565b5060a08201516200481560a085018262004760565b5060c08201516200482a60c085018262004760565b5060e08201516200483f60e085018262004784565b506101008201516200485661010085018262004760565b506101208201516200486d61012085018262004760565b506101408201516200488461014085018262004760565b50505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b60048110620048cb57620048ca6200488a565b5b50565b5f819050620048dd82620048b7565b919050565b5f620048ee82620048ce565b9050919050565b6200490081620048e2565b82525050565b5f6101c0820190506200491c5f83018762004795565b6200492c610160830186620048f5565b6200493c610180830185620045e3565b6200494c6101a0830184620045e3565b95945050505050565b620049608162004771565b81146200496b575f80fd5b50565b5f813590506200497e8162004955565b92915050565b5f602082840312156200499c576200499b62004573565b5b5f620049ab848285016200496e565b91505092915050565b620049bf8162004771565b82525050565b5f602082019050620049da5f830184620049b4565b92915050565b5f620049ec8262004705565b9050919050565b620049fe81620049e0565b82525050565b5f60208201905062004a195f830184620049f3565b92915050565b5f805f6060848603121562004a395762004a3862004573565b5b5f62004a48868287016200459d565b935050602062004a5b868287016200459d565b925050604062004a6e868287016200459d565b9150509250925092565b5f62004a848262004771565b9050919050565b62004a968162004a78565b811462004aa1575f80fd5b50565b5f8135905062004ab48162004a8b565b92915050565b5f806040838503121562004ad35762004ad262004573565b5b5f62004ae28582860162004aa4565b925050602062004af5858286016200496e565b9150509250929050565b5f80fd5b5f610140828403121562004b1c5762004b1b62004aff565b5b81905092915050565b5f6020828403121562004b3d5762004b3c62004573565b5b5f82013567ffffffffffffffff81111562004b5d5762004b5c62004577565b5b62004b6b8482850162004b03565b91505092915050565b5f62ffffff82169050919050565b62004b8d8162004b74565b82525050565b5f60208201905062004ba85f83018462004b82565b92915050565b5f806040838503121562004bc75762004bc662004573565b5b5f62004bd6858286016200459d565b925050602062004be9858286016200496e565b9150509250929050565b5f819050919050565b62004c078162004bf3565b811462004c12575f80fd5b50565b5f8135905062004c258162004bfc565b92915050565b5f80fd5b5f80fd5b5f80fd5b5f8083601f84011262004c4f5762004c4e62004c2b565b5b8235905067ffffffffffffffff81111562004c6f5762004c6e62004c2f565b5b60208301915083600182028301111562004c8e5762004c8d62004c33565b5b9250929050565b5f805f806060858703121562004cb05762004caf62004573565b5b5f62004cbf8782880162004c15565b945050602062004cd28782880162004c15565b935050604085013567ffffffffffffffff81111562004cf65762004cf562004577565b5b62004d048782880162004c37565b925092505092959194509250565b5f82825260208201905092915050565b7f536861726520746f6f20686967680000000000000000000000000000000000005f82015250565b5f62004d58600e8362004d12565b915062004d658262004d22565b602082019050919050565b5f6020820190508181035f83015262004d898162004d4a565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f62004dc9826200457b565b915062004dd6836200457b565b925082820262004de6816200457b565b9150828204841483151762004e005762004dff62004d90565b5b5092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f62004e40826200457b565b915062004e4d836200457b565b92508262004e605762004e5f62004e07565b5b828204905092915050565b7f4e6f7420617574686f72697a65640000000000000000000000000000000000005f82015250565b5f62004ea1600e8362004d12565b915062004eae8262004e6b565b602082019050919050565b5f6020820190508181035f83015262004ed28162004e93565b9050919050565b7f41756374696f6e206e6f7420656e6465640000000000000000000000000000005f82015250565b5f62004f0f60118362004d12565b915062004f1c8262004ed9565b602082019050919050565b5f6020820190508181035f83015262004f408162004f01565b9050919050565b7f4e6f7420616374697665000000000000000000000000000000000000000000005f82015250565b5f62004f7d600a8362004d12565b915062004f8a8262004f47565b602082019050919050565b5f6020820190508181035f83015262004fae8162004f6f565b9050919050565b7f46656520746f6f206869676800000000000000000000000000000000000000005f82015250565b5f62004feb600c8362004d12565b915062004ff88262004fb5565b602082019050919050565b5f6020820190508181035f8301526200501c8162004fdd565b9050919050565b7f41756374696f6e206e6f7420636f6d706c6574656400000000000000000000005f82015250565b5f6200505960158362004d12565b9150620050668262005023565b602082019050919050565b5f6020820190508181035f8301526200508a816200504b565b9050919050565b5f81519050620050a18162004584565b92915050565b5f60208284031215620050bf57620050be62004573565b5b5f620050ce8482850162005091565b91505092915050565b5f620050e3826200457b565b9150620050f0836200457b565b92508282039050818111156200510b576200510a62004d90565b5b92915050565b5f604082019050620051265f830185620049b4565b620051356020830184620045e3565b9392505050565b6200514781620046b6565b82525050565b5f608082019050620051625f830187620049b4565b620051716020830186620049b4565b62005180604083018562004b82565b6200518f60608301846200513c565b95945050505050565b5f81519050620051a88162004955565b92915050565b5f60208284031215620051c657620051c562004573565b5b5f620051d58482850162005198565b91505092915050565b7f41756374696f6e206e6f742061637469766500000000000000000000000000005f82015250565b5f6200521460128362004d12565b91506200522182620051de565b602082019050919050565b5f6020820190508181035f830152620052458162005206565b9050919050565b7f4e6f7420737461727465640000000000000000000000000000000000000000005f82015250565b5f62005282600b8362004d12565b91506200528f826200524c565b602082019050919050565b5f6020820190508181035f830152620052b38162005274565b9050919050565b7f456e6465640000000000000000000000000000000000000000000000000000005f82015250565b5f620052f060058362004d12565b9150620052fd82620052ba565b602082019050919050565b5f6020820190508181035f8301526200532181620052e2565b9050919050565b7f5a65726f20616d6f756e740000000000000000000000000000000000000000005f82015250565b5f6200535e600b8362004d12565b91506200536b8262005328565b602082019050919050565b5f6020820190508181035f8301526200538f8162005350565b9050919050565b5f620053a2826200457b565b9150620053af836200457b565b9250828201905080821115620053ca57620053c962004d90565b5b92915050565b7f536c6970706167652065786365656465640000000000000000000000000000005f82015250565b5f6200540660118362004d12565b91506200541382620053d0565b602082019050919050565b5f6020820190508181035f8301526200543781620053f8565b9050919050565b5f60a082019050620054535f830188620045e3565b620054626020830187620045e3565b620054716040830186620045e3565b620054806060830185620045e3565b6200548f6080830184620045e3565b9695505050505050565b7f4e6f20706f736974696f6e0000000000000000000000000000000000000000005f82015250565b5f620054cf600b8362004d12565b9150620054dc8262005499565b602082019050919050565b5f6020820190508181035f8301526200550081620054c1565b9050919050565b5f6fffffffffffffffffffffffffffffffff82169050919050565b6200552d8162005507565b82525050565b608082015f820151620055495f85018262004760565b5060208201516200555e602085018262004784565b50604082015162005573604085018262005522565b50606082015162005588606085018262005522565b50505050565b5f608082019050620055a35f83018462005533565b92915050565b5f8060408385031215620055c257620055c162004573565b5b5f620055d18582860162005091565b9250506020620055e48582860162005091565b9150509250929050565b5f608082019050620056035f830187620045e3565b620056126020830186620045e3565b620056216040830185620045e3565b620056306060830184620045e3565b95945050505050565b7f5a65726f20726563697069656e740000000000000000000000000000000000005f82015250565b5f6200566f600e8362004d12565b91506200567c8262005639565b602082019050919050565b5f6020820190508181035f830152620056a08162005661565b9050919050565b7f4e6f7468696e6720746f207377656570000000000000000000000000000000005f82015250565b5f620056dd60108362004d12565b9150620056ea82620056a7565b602082019050919050565b5f6020820190508181035f8301526200570e81620056cf565b9050919050565b7f5374617274206d75737420626520696e206675747572650000000000000000005f82015250565b5f6200574b60178362004d12565b9150620057588262005715565b602082019050919050565b5f6020820190508181035f8301526200577c816200573d565b9050919050565b7f456e64206d7573742062652061667465722073746172740000000000000000005f82015250565b5f620057b960178362004d12565b9150620057c68262005783565b602082019050919050565b5f6020820190508181035f830152620057ea81620057ab565b9050919050565b5f620057fd826200457b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820362005832576200583162004d90565b5b600182019050919050565b5f80fd5b5f80fd5b5f80fd5b5f80833560016020038436030381126200586857620058676200583d565b5b80840192508235915067ffffffffffffffff8211156200588d576200588c62005841565b5b602083019250600182023603831315620058ac57620058ab62005845565b5b509250929050565b828183375f83830152505050565b5f601f19601f8301169050919050565b5f620058df838562004d12565b9350620058ee838584620058b4565b620058f983620058c2565b840190509392505050565b5f6080820190508181035f8301526200591f81888a620058d2565b9050818103602083015262005936818688620058d2565b9050620059476040830185620045e3565b620059566060830184620049b4565b979650505050505050565b5f61010082019050620059775f83018b620049b4565b62005986602083018a620049b4565b620059956040830189620045e3565b620059a46060830188620045e3565b620059b36080830187620045e3565b620059c260a0830186620045e3565b620059d160c0830185620045e3565b620059e060e0830184620045e3565b9998505050505050505050565b7f4e6f742063726561746f720000000000000000000000000000000000000000005f82015250565b5f62005a23600b8362004d12565b915062005a3082620059ed565b602082019050919050565b5f6020820190508181035f83015262005a548162005a15565b9050919050565b7f416c72656164792077697468647261776e0000000000000000000000000000005f82015250565b5f62005a9160118362004d12565b915062005a9e8262005a5b565b602082019050919050565b5f6020820190508181035f83015262005ac28162005a83565b9050919050565b7f4e6f7468696e6720746f207769746864726177000000000000000000000000005f82015250565b5f62005aff60138362004d12565b915062005b0c8262005ac9565b602082019050919050565b5f6020820190508181035f83015262005b308162005af1565b9050919050565b7f5a65726f2066656520726563697069656e7400000000000000000000000000005f82015250565b5f62005b6d60128362004d12565b915062005b7a8262005b37565b602082019050919050565b5f6020820190508181035f83015262005b9e8162005b5f565b9050919050565b7f556e617574686f72697a65642063616c6c6261636b00000000000000000000005f82015250565b5f62005bdb60158362004d12565b915062005be88262005ba5565b602082019050919050565b5f6020820190508181035f83015262005c0c8162005bcd565b9050919050565b5f62005c1f82620046b6565b9050919050565b62005c318162005c13565b811462005c3c575f80fd5b50565b5f8135905062005c4f8162005c26565b92915050565b5f806040838503121562005c6e5762005c6d62004573565b5b5f62005c7d8582860162005c3f565b925050602062005c908582860162005c3f565b9150509250929050565b7f5072696365206f75747369646520556e69737761702072616e676500000000005f82015250565b5f62005cd0601b8362004d12565b915062005cdd8262005c9a565b602082019050919050565b5f6020820190508181035f83015262005d018162005cc2565b9050919050565b62005d1381620046b6565b811462005d1e575f80fd5b50565b5f8151905062005d318162005d08565b92915050565b5f8160020b9050919050565b62005d4e8162005d37565b811462005d59575f80fd5b50565b5f8151905062005d6c8162005d43565b92915050565b5f61ffff82169050919050565b62005d8a8162005d72565b811462005d95575f80fd5b50565b5f8151905062005da88162005d7f565b92915050565b5f60ff82169050919050565b62005dc58162005dae565b811462005dd0575f80fd5b50565b5f8151905062005de38162005dba565b92915050565b62005df4816200467f565b811462005dff575f80fd5b50565b5f8151905062005e128162005de9565b92915050565b5f805f805f805f60e0888a03121562005e365762005e3562004573565b5b5f62005e458a828b0162005d21565b975050602062005e588a828b0162005d5c565b965050604062005e6b8a828b0162005d98565b955050606062005e7e8a828b0162005d98565b945050608062005e918a828b0162005d98565b93505060a062005ea48a828b0162005dd3565b92505060c062005eb78a828b0162005e02565b91505092959891949750929550565b5f60408201905062005edb5f830185620049b4565b62005eea6020830184620049b4565b9392505050565b62005efc8162004bf3565b82525050565b5f81519050919050565b5f82825260208201905092915050565b5f5b8381101562005f3b57808201518184015260208101905062005f1e565b5f8484015250505050565b5f62005f528262005f02565b62005f5e818562005f0c565b935062005f7081856020860162005f1c565b62005f7b81620058c2565b840191505092915050565b5f60a08201905062005f9b5f830188620049b4565b62005faa60208301876200468a565b62005fb9604083018662005ef1565b62005fc860608301856200513c565b818103608083015262005fdc818462005f46565b90509695505050505050565b5f8151905062005ff88162004bfc565b92915050565b5f806040838503121562006017576200601662004573565b5b5f620060268582860162005fe8565b9250506020620060398582860162005fe8565b9150509250929050565b7f506f6f6c207072696365206e6f7420636f7272656374656400000000000000005f82015250565b5f6200607960188362004d12565b9150620060868262006043565b602082019050919050565b5f6020820190508181035f830152620060aa816200606b565b9050919050565b620060bc8162004b74565b82525050565b620060cd8162005d37565b82525050565b61016082015f820151620060ea5f85018262004784565b506020820151620060ff602085018262004784565b506040820151620061146040850182620060b1565b506060820151620061296060850182620060c2565b5060808201516200613e6080850182620060c2565b5060a08201516200615360a085018262004760565b5060c08201516200616860c085018262004760565b5060e08201516200617d60e085018262004760565b506101008201516200619461010085018262004760565b50610120820151620061ab61012085018262004784565b50610140820151620061c261014085018262004760565b50505050565b5f61016082019050620061de5f830184620060d3565b92915050565b620061ef8162005507565b8114620061fa575f80fd5b50565b5f815190506200620d81620061e4565b92915050565b5f805f80608085870312156200622e576200622d62004573565b5b5f6200623d8782880162005091565b94505060206200625087828801620061fd565b9350506040620062638782880162005091565b9250506060620062768782880162005091565b91505092959194509250565b5f819050919050565b5f620062ab620062a56200629f8462006282565b620046d5565b6200457b565b9050919050565b620062bd816200628b565b82525050565b5f608082019050620062d85f830187620049b4565b620062e76020830186620062b2565b620062f66040830185620062b2565b620063056060830184620062b2565b95945050505050565b5f608082019050620063235f830187620049b4565b620063326020830186620045e3565b620063416040830185620045e3565b620063506060830184620045e3565b95945050505050565b7f536f6c64206f75740000000000000000000000000000000000000000000000005f82015250565b5f6200638f60088362004d12565b91506200639c8262006359565b602082019050919050565b5f6020820190508181035f830152620063c08162006381565b9050919050565b7f556e737570706f72746564207061796d656e7420746f6b656e000000000000005f82015250565b5f620063fd60198362004d12565b91506200640a82620063c7565b602082019050919050565b5f6020820190508181035f8301526200642e81620063ef565b9050919050565b7f5a65726f206261736520707269636500000000000000000000000000000000005f82015250565b5f6200646b600f8362004d12565b9150620064788262006435565b602082019050919050565b5f6020820190508181035f8301526200649c816200645d565b9050919050565b7f5a65726f206d61782072616973650000000000000000000000000000000000005f82015250565b5f620064d9600e8362004d12565b9150620064e682620064a3565b602082019050919050565b5f6020820190508181035f8301526200650a81620064cb565b9050919050565b7f496e76616c6964206c69717569646974792073686172650000000000000000005f82015250565b5f6200654760178362004d12565b9150620065548262006511565b602082019050919050565b5f6020820190508181035f830152620065788162006539565b9050919050565b7f4375727665206f766572666c6f777300000000000000000000000000000000005f82015250565b5f620065b5600f8362004d12565b9150620065c2826200657f565b602082019050919050565b5f6020820190508181035f830152620065e681620065a7565b9050919050565b7f537570706c7920746f6f20736d616c6c20666f72206c697175696469747900005f82015250565b5f62006623601e8362004d12565b91506200663082620065ed565b602082019050919050565b5f6020820190508181035f830152620066548162006615565b9050919050565b5f620066678262005dae565b9150620066748362005dae565b92508262006687576200668662004e07565b5b82820690509291505056fe608060405234801562000010575f80fd5b5060405162001d7438038062001d748339818101604052810190620000369190620003d6565b80848481600390816200004a9190620006b1565b5080600490816200005c9190620006b1565b5050505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620000d2575f6040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620000c99190620007a6565b60405180910390fd5b620000e381620000f560201b60201c565b508160068190555050505050620007c1565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f604051905090565b5f80fd5b5f80fd5b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6200021982620001d1565b810181811067ffffffffffffffff821117156200023b576200023a620001e1565b5b80604052505050565b5f6200024f620001b8565b90506200025d82826200020e565b919050565b5f67ffffffffffffffff8211156200027f576200027e620001e1565b5b6200028a82620001d1565b9050602081019050919050565b5f5b83811015620002b657808201518184015260208101905062000299565b5f8484015250505050565b5f620002d7620002d18462000262565b62000244565b905082815260208101848484011115620002f657620002f5620001cd565b5b6200030384828562000297565b509392505050565b5f82601f830112620003225762000321620001c9565b5b815162000334848260208601620002c1565b91505092915050565b5f819050919050565b62000351816200033d565b81146200035c575f80fd5b50565b5f815190506200036f8162000346565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f620003a08262000375565b9050919050565b620003b28162000394565b8114620003bd575f80fd5b50565b5f81519050620003d081620003a7565b92915050565b5f805f8060808587031215620003f157620003f0620001c1565b5b5f85015167ffffffffffffffff811115620004115762000410620001c5565b5b6200041f878288016200030b565b945050602085015167ffffffffffffffff811115620004435762000442620001c5565b5b62000451878288016200030b565b935050604062000464878288016200035f565b92505060606200047787828801620003c0565b91505092959194509250565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680620004d257607f821691505b602082108103620004e857620004e76200048d565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026200054c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200050f565b6200055886836200050f565b95508019841693508086168417925050509392505050565b5f819050919050565b5f62000599620005936200058d846200033d565b62000570565b6200033d565b9050919050565b5f819050919050565b620005b48362000579565b620005cc620005c382620005a0565b8484546200051b565b825550505050565b5f90565b620005e2620005d4565b620005ef818484620005a9565b505050565b5b8181101562000616576200060a5f82620005d8565b600181019050620005f5565b5050565b601f82111562000665576200062f81620004ee565b6200063a8462000500565b810160208510156200064a578190505b62000662620006598562000500565b830182620005f4565b50505b505050565b5f82821c905092915050565b5f620006875f19846008026200066a565b1980831691505092915050565b5f620006a1838362000676565b9150826002028217905092915050565b620006bc8262000483565b67ffffffffffffffff811115620006d857620006d7620001e1565b5b620006e48254620004ba565b620006f18282856200061a565b5f60209050601f83116001811462000727575f841562000712578287015190505b6200071e858262000694565b8655506200078d565b601f1984166200073786620004ee565b5f5b82811015620007605784890151825560018201915060208501945060208101905062000739565b868310156200078057848901516200077c601f89168262000676565b8355505b6001600288020188555050505b505050505050565b620007a08162000394565b82525050565b5f602082019050620007bb5f83018462000795565b92915050565b6115a580620007cf5f395ff3fe608060405234801561000f575f80fd5b5060043610610109575f3560e01c8063715018a6116100a0578063af35c6c71161006f578063af35c6c7146102a5578063bef97c87146102af578063d5abeb01146102cd578063dd62ed3e146102eb578063f2fde38b1461031b57610109565b8063715018a61461022f5780638da5cb5b1461023957806395d89b4114610257578063a9059cbb1461027557610109565b8063313ce567116100dc578063313ce567146101a957806340c10f19146101c757806342966c68146101e357806370a08231146101ff57610109565b806306fdde031461010d578063095ea7b31461012b57806318160ddd1461015b57806323b872dd14610179575b5f80fd5b610115610337565b60405161012291906110bb565b60405180910390f35b6101456004803603810190610140919061116c565b6103c7565b60405161015291906111c4565b60405180910390f35b6101636103e9565b60405161017091906111ec565b60405180910390f35b610193600480360381019061018e9190611205565b6103f2565b6040516101a091906111c4565b60405180910390f35b6101b1610420565b6040516101be9190611270565b60405180910390f35b6101e160048036038101906101dc919061116c565b610428565b005b6101fd60048036038101906101f89190611289565b610495565b005b610219600480360381019061021491906112b4565b6104aa565b60405161022691906111ec565b60405180910390f35b6102376104ef565b005b610241610502565b60405161024e91906112ee565b60405180910390f35b61025f61052a565b60405161026c91906110bb565b60405180910390f35b61028f600480360381019061028a919061116c565b6105ba565b60405161029c91906111c4565b60405180910390f35b6102ad6105dc565b005b6102b761067b565b6040516102c491906111c4565b60405180910390f35b6102d561068d565b6040516102e291906111ec565b60405180910390f35b61030560048036038101906103009190611307565b610693565b60405161031291906111ec565b60405180910390f35b610335600480360381019061033091906112b4565b610715565b005b60606003805461034690611372565b80601f016020809104026020016040519081016040528092919081815260200182805461037290611372565b80156103bd5780601f10610394576101008083540402835291602001916103bd565b820191905f5260205f20905b8154815290600101906020018083116103a057829003601f168201915b5050505050905090565b5f806103d1610799565b90506103de8185856107a0565b600191505092915050565b5f600254905090565b5f806103fc610799565b90506104098582856107b2565b610414858585610845565b60019150509392505050565b5f6012905090565b610430610935565b6006548161043c6103e9565b61044691906113cf565b1115610487576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047e9061144c565b60405180910390fd5b61049182826109bc565b5050565b61049d610935565b6104a73382610a3b565b50565b5f805f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b6104f7610935565b6105005f610aba565b565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606004805461053990611372565b80601f016020809104026020016040519081016040528092919081815260200182805461056590611372565b80156105b05780601f10610587576101008083540402835291602001916105b0565b820191905f5260205f20905b81548152906001019060200180831161059357829003601f168201915b5050505050905090565b5f806105c4610799565b90506105d1818585610845565b600191505092915050565b6105e4610935565b60075f9054906101000a900460ff1615610633576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062a906114b4565b60405180910390fd5b600160075f6101000a81548160ff0219169083151502179055507feadb24812ab3c9a55c774958184293ebdb6c7f6a2dbab11f397d80c86feb65d360405160405180910390a1565b60075f9054906101000a900460ff1681565b60065481565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b61071d610935565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361078d575f6040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161078491906112ee565b60405180910390fd5b61079681610aba565b50565b5f33905090565b6107ad8383836001610b7d565b505050565b5f6107bd8484610693565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81101561083f5781811015610830578281836040517ffb8f41b2000000000000000000000000000000000000000000000000000000008152600401610827939291906114d2565b60405180910390fd5b61083e84848484035f610b7d565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036108b5575f6040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016108ac91906112ee565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610925575f6040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161091c91906112ee565b60405180910390fd5b610930838383610d4c565b505050565b61093d610799565b73ffffffffffffffffffffffffffffffffffffffff1661095b610502565b73ffffffffffffffffffffffffffffffffffffffff16146109ba5761097e610799565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016109b191906112ee565b60405180910390fd5b565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a2c575f6040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610a2391906112ee565b60405180910390fd5b610a375f8383610d4c565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610aab575f6040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401610aa291906112ee565b60405180910390fd5b610ab6825f83610d4c565b5050565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610bed575f6040517fe602df05000000000000000000000000000000000000000000000000000000008152600401610be491906112ee565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610c5d575f6040517f94280d62000000000000000000000000000000000000000000000000000000008152600401610c5491906112ee565b60405180910390fd5b8160015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055508015610d46578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610d3d91906111ec565b60405180910390a35b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015610db457505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b15610e085760075f9054906101000a900460ff16610e07576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dfe90611551565b60405180910390fd5b5b610e13838383610e18565b505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610e68578060025f828254610e5c91906113cf565b92505081905550610f36565b5f805f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905081811015610ef1578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610ee8939291906114d2565b60405180910390fd5b8181035f808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f7d578060025f8282540392505081905550610fc7565b805f808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161102491906111ec565b60405180910390a3505050565b5f81519050919050565b5f82825260208201905092915050565b5f5b8381101561106857808201518184015260208101905061104d565b5f8484015250505050565b5f601f19601f8301169050919050565b5f61108d82611031565b611097818561103b565b93506110a781856020860161104b565b6110b081611073565b840191505092915050565b5f6020820190508181035f8301526110d38184611083565b905092915050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f611108826110df565b9050919050565b611118816110fe565b8114611122575f80fd5b50565b5f813590506111338161110f565b92915050565b5f819050919050565b61114b81611139565b8114611155575f80fd5b50565b5f8135905061116681611142565b92915050565b5f8060408385031215611182576111816110db565b5b5f61118f85828601611125565b92505060206111a085828601611158565b9150509250929050565b5f8115159050919050565b6111be816111aa565b82525050565b5f6020820190506111d75f8301846111b5565b92915050565b6111e681611139565b82525050565b5f6020820190506111ff5f8301846111dd565b92915050565b5f805f6060848603121561121c5761121b6110db565b5b5f61122986828701611125565b935050602061123a86828701611125565b925050604061124b86828701611158565b9150509250925092565b5f60ff82169050919050565b61126a81611255565b82525050565b5f6020820190506112835f830184611261565b92915050565b5f6020828403121561129e5761129d6110db565b5b5f6112ab84828501611158565b91505092915050565b5f602082840312156112c9576112c86110db565b5b5f6112d684828501611125565b91505092915050565b6112e8816110fe565b82525050565b5f6020820190506113015f8301846112df565b92915050565b5f806040838503121561131d5761131c6110db565b5b5f61132a85828601611125565b925050602061133b85828601611125565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061138957607f821691505b60208210810361139c5761139b611345565b5b50919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6113d982611139565b91506113e483611139565b92508282019050808211156113fc576113fb6113a2565b5b92915050565b7f45786365656473206d617820737570706c7900000000000000000000000000005f82015250565b5f61143660128361103b565b915061144182611402565b602082019050919050565b5f6020820190508181035f8301526114638161142a565b9050919050565b7f416c726561647920656e61626c656400000000000000000000000000000000005f82015250565b5f61149e600f8361103b565b91506114a98261146a565b602082019050919050565b5f6020820190508181035f8301526114cb81611492565b9050919050565b5f6060820190506114e55f8301866112df565b6114f260208301856111dd565b6114ff60408301846111dd565b949350505050565b7f5472616e7366657273206c6f636b6564000000000000000000000000000000005f82015250565b5f61153b60108361103b565b915061154682611507565b602082019050919050565b5f6020820190508181035f8301526115688161152f565b905091905056fea26469706673582212200f4bf8eb53b1861d79dfc4f1860c45af527218628e4b2e5de390eb3222fe560764736f6c63430008180033a2646970667358221220f7d00970c468574967c023a9ef8d390a5dfdced2a854694eb7872053949cc8a764736f6c63430008180033",
    "sourceMap": "413:28349:18:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;27137:261;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;28075:291;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;28372:388;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;13521:531;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2243:27;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4196:35;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;26734:214;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;16469:1738;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2403:49;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4401:45;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2276:47;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;;:::i;:::-;;;;;;;;3293:44;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2475:35;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2293:101:0;;;:::i;:::-;;2938:48:18;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3946:60;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4452:41;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1638:85:0;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;10081:1404:18;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;22660:1309;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;27623:424;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;6655:1458;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2516:28;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2700:42;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;14451:934;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;3488:39;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;26269:259;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2329:68;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2543:215:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;22023:470:18;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;4139:51;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;27137:261;1531:13:0;:11;:13::i;:::-;4186:4:18::1;27225:8;:32;;27217:59;;;;;;;;;;;;:::i;:::-;;;;;;;;;27291;27319:20;;27341:8;27291:59;;;;;;;:::i;:::-;;;;;;;;27383:8;27360:20;:31;;;;27137:261:::0;:::o;28075:291::-;28139:7;28158:27;28188:8;:19;28197:9;28188:19;;;;;;;;;;;28158:49;;28224:135;28260:7;:17;;;28291:7;:14;;:24;;;28329:7;:14;;:20;;;28224:22;:135::i;:::-;28217:142;;;28075:291;;;:::o;28372:388::-;28450:12;28464:11;28487:27;28517:8;:19;28526:9;28517:19;;;;;;;;;;;28487:49;;28553:138;28596:7;:17;;;28615:6;28635:7;:14;;:24;;;28661:7;:14;;:20;;;28553:29;:138::i;:::-;28546:145;;28748:5;28715:7;:14;;:29;;;28708:4;:36;;;;:::i;:::-;28707:46;;;;:::i;:::-;28701:52;;28477:283;28372:388;;;;;:::o;13521:531::-;13584:27;13614:8;:19;13623:9;13614:19;;;;;;;;;;;13584:49;;13678:7;:14;;:22;;;;;;;;;;;;13664:36;;:10;:36;;;:61;;;;13718:7;:5;:7::i;:::-;13704:21;;:10;:21;;;13664:61;13643:122;;;;;;;;;;;;:::i;:::-;;;;;;;;;13801:7;:14;;:22;;;13783:15;:40;13775:70;;;;;;;;;;;;:::i;:::-;;;;;;;;;13880:19;13863:36;;;;;;;;:::i;:::-;;:7;:13;;;;;;;;;;;;:36;;;;;;;;:::i;:::-;;;13855:59;;;;;;;;;;;;:::i;:::-;;;;;;;;;13941:22;13925:7;:13;;;:38;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;13995:9;13978:67;14006:7;:19;;;14027:7;:17;;;13978:67;;;;;;;:::i;:::-;;;;;;;;13574:478;13521:531;:::o;2243:27::-;;;;:::o;4196:35::-;;;;:::o;26734:214::-;1531:13:0;:11;:13::i;:::-;2738:4:18::1;26813:6;:21;;26805:46;;;;;;;;;;;;:::i;:::-;;;;;;;;;26866:43;26887:13;;26902:6;26866:43;;;;;;;:::i;:::-;;;;;;;;26935:6;26919:13;:22;;;;26734:214:::0;:::o;16469:1738::-;3023:21:11;:19;:21::i;:::-;16537:27:18::1;16567:8;:19;16576:9;16567:19;;;;;;;;;;;16537:49;;16621:22;16604:39;;;;;;;;:::i;:::-;;:7;:13;;;;;;;;;;;;:39;;;;;;;;:::i;:::-;;;16596:73;;;;;;;;;;;;:::i;:::-;;;;;;;;;16680:21;16704:24;16720:7;16704:15;:24::i;:::-;16680:48;;16738:13;16754:89;16777:7;:17;;;16796:7;:14;;:24;;;16822:7;:14;;:20;;;16754:22;:89::i;:::-;16738:105;;16853:19;16875:59;16887:13;619:4:17;16928:5:18;16875:11;:59::i;:::-;16853:81;;16945:18;;:::i;:::-;16983:7;:14;;:20;;;;;;;;;;;;16973:1;:7;;:30;;;;;;;;;::::0;::::1;17025:7;:14;;:27;;;;;;;;;;;;17013:1;:9;;:39;;;;;;;;;::::0;::::1;17107:1;:9;;;17080:37;;17088:1;:7;;;17080:37;;;17062:1;:15;;:55;;;;;;;;;::::0;::::1;17181:13;17144:1;:9;;;:19;;;17172:4;17144:34;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:50;;;;:::i;:::-;17127:1;:14;;:67;;;::::0;::::1;17261:21;17245:7;:13;;;:37;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;17325:13;17292:9;:29;17310:1;:9;;;17292:29;;;;;;;;;;;;;;;;:46;;;;;;;:::i;:::-;;;;;;;;17349:1;:7;;;:23;;;:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;17405:1;17389:13;:17;:36;;;;;17424:1;17410:11;:15;17389:36;17385:442;;;17441:1;:7;;;:12;;;17462:4;17469:11;17441:40;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;17515:37;17529:5;17536:1;:15;;;17515:13;:37::i;:::-;17495:1;:17;;:57;;;;;;;;;::::0;::::1;17567:10;17579::::0;17593::::1;17601:1;17593:7;:10::i;:::-;17566:37;;;;17626:15;:50;;;17677:2;17681;3522:5;17695:1;:17;;;17626:87;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;17617:1;:6;;:96;;;;;;;;;::::0;::::1;17727:48;17745:1;17748:11;17761:13;17727:17;:48::i;:::-;17789:27;17803:9;17814:1;17789:13;:27::i;:::-;17427:400;;17385:442;17920:18;17941:1;:7;;;:17;;;17967:4;17941:32;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;17920:53;;18000:1;17987:10;:14;17983:44;;;18003:1;:7;;;:12;;;18016:10;18003:24;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;17983:44;18037:19;18096:1;:14;;;18059:1;:9;;;:19;;;18087:4;18059:34;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:51;;;;:::i;:::-;18037:73;;18138:1;18124:11;:15;18120:80;;;18141:59;18164:7;:14;;:22;;;;;;;;;;;;18188:11;18141:1;:9;;;:22;;;;:59;;;;;:::i;:::-;18120:80;16527:1680;;;;;;;3065:20:11::0;:18;:20::i;:::-;16469:1738:18;:::o;2403:49::-;;;;;;;;;;;;;;;;;;;;;;:::o;4401:45::-;;;;;;;;;;;;;;;;;:::o;2276:47::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;3293:44::-;;;;;;;;;;;;;;;;;:::o;2475:35::-;;;;;;;;;;;;;:::o;2293:101:0:-;1531:13;:11;:13::i;:::-;2357:30:::1;2384:1;2357:18;:30::i;:::-;2293:101::o:0;2938:48:18:-;2982:4;2938:48;:::o;3946:60::-;;;:::o;4452:41::-;;;;;;;;;;;;;;;;;;;;;;:::o;1638:85:0:-;1684:7;1710:6;;;;;;;;;;;1703:13;;1638:85;:::o;10081:1404:18:-;3023:21:11;:19;:21::i;:::-;10184:27:18::1;10214:8;:19;10223:9;10214:19;;;;;;;;;;;10184:49;;10268:19;10251:36;;;;;;;;:::i;:::-;;:7;:13;;;;;;;;;;;;:36;;;;;;;;:::i;:::-;;;10243:67;;;;;;;;;;;;:::i;:::-;;;;;;;;;10347:7;:14;;:24;;;10328:15;:43;;10320:67;;;;;;;;;;;;:::i;:::-;;;;;;;;;10424:7;:14;;:22;;;10405:15;:41;;10397:59;;;;;;;;;;;;:::i;:::-;;;;;;;;;10483:1;10474:6;:10;10466:34;;;;;;;;;;;;:::i;:::-;;;;;;;;;10511:12;10533:13:::0;10583:22:::1;10589:7;10598:6;10583:5;:22::i;:::-;10556:49;;;;;;;;;;;;10615:19;10678:5;10645:7;:14;;:29;;;10638:4;:36;;;;:::i;:::-;10637:46;;;;:::i;:::-;10615:68;;10723:7;10708:11;10701:4;:18;;;;:::i;:::-;:29;;10693:59;;;;;;;;;;;;:::i;:::-;;;;;;;;;10826:4;10803:7;:19;;;:27;;;;;;;:::i;:::-;;;;;;;;10861:6;10840:7;:17;;;:27;;;;;;;:::i;:::-;;;;;;;;10917:6;10877:13;:24;10891:9;10877:24;;;;;;;;;;;:36;10902:10;10877:36;;;;;;;;;;;;;;;;:46;;;;;;;:::i;:::-;;;;;;;;10984:4;10933:9;:47;10951:7;:14;;:27;;;;;;;;;;;;10933:47;;;;;;;;;;;;;;;;:55;;;;;;;:::i;:::-;;;;;;;;11002:8;10998:77;;;11042:22;11026:7;:13;;;:38;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;10998:77;11085:63;11101:7;:14;;:27;;;;;;;;;;;;11130:4;11136:11;11085:15;:63::i;:::-;11158:7;:14;;:20;;;;;;;;;;;;:25;;;11184:10;11196:6;11158:45;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;11259:10;11219:139;;11248:9;11219:139;11271:6;11279:4;11285:11;11310:7;:19;;;11331:7;:17;;;11219:139;;;;;;;;;;:::i;:::-;;;;;;;;11372:8;11368:111;;;11418:9;11401:67;11429:7;:19;;;11450:7;:17;;;11401:67;;;;;;;:::i;:::-;;;;;;;;11368:111;10174:1311;;;;3065:20:11::0;:18;:20::i;:::-;10081:1404:18;;;:::o;22660:1309::-;22731:17;22750:19;3023:21:11;:19;:21::i;:::-;22781:27:18::1;22811:8;:19;22820:9;22811:19;;;;;;;;;;;22781:49;;22865:21;22848:38:::0;::::1;;;;;;;:::i;:::-;;:7;:13;;;;;;;;;;;;:38;;;;;;;;:::i;:::-;;;:68;;;;;22915:1;22890:10;:21;22901:9;22890:21;;;;;;;;;;;;:26;;22848:68;22840:92;;;;;;;;;;;;:::i;:::-;;;;;;;;;22944:10;22956::::0;22970:15:::1;:23;;;23007:241;;;;;;;;23076:10;:21;23087:9;23076:21;;;;;;;;;;;;23007:241;;;;23134:4;23007:241;;;;;;23169:17;23007:241:::0;::::1;;;;;23216:17;23007:241:::0;::::1;;;::::0;22970:288:::1;;;;;;;;;;;;;;;:::i;:::-;;::::0;::::1;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;22943:315;;;;23268:18;23329:7;:14;;:27;;;;;;;;;;;;23289:68;;23297:7;:14;;:20;;;;;;;;;;;;23289:68;;;23268:89;;23394:13;:35;;23422:2;23426;23394:35;;;23411:2;23415;23394:35;23367:62;;;;;;;;23440:21;23509:5;23477:7;:14;;:28;;;23465:9;:40;;;;:::i;:::-;23464:50;;;;:::i;:::-;23440:74;;23524:23;23597:5;23565:7;:14;;:28;;;23551:11;:42;;;;:::i;:::-;23550:52;;;;:::i;:::-;23524:78;;23612:96;23635:7;:14;;:20;;;;;;;;;;;;23659:7;:14;;:22;;;;;;;;;;;;23683:13;23698:9;23612:7;:96::i;:::-;23718:90;23726:7;:14;;:27;;;;;;;;;;;;23755:7;:14;;:22;;;;;;;;;;;;23779:15;23796:11;23718:7;:90::i;:::-;23853:9;23824:138;23876:13;23864:9;:25;;;;:::i;:::-;23905:15;23891:11;:29;;;;:::i;:::-;23922:13;23937:15;23824:138;;;;;;;;;:::i;:::-;;;;;;;;22771:1198;;;;;;3065:20:11::0;:18;:20::i;:::-;22660:1309:18;;;:::o;27623:424::-;1531:13:0;:11;:13::i;:::-;3023:21:11::1;:19;:21::i;:::-;27728:1:18::2;27714:16;;:2;:16;;::::0;27706:43:::2;;;;;;;;;;;;:::i;:::-;;;;;;;;;27759:15;27777:5;:15;;;27801:4;27777:30;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;27759:48;;27817:12;27832:9;:25;27850:5;27832:25;;;;;;;;;;;;;;;;27817:40;;27885:4;27875:7;:14;27867:43;;;;;;;;;;;;:::i;:::-;;;;;;;;;27921:14;27948:4;27938:7;:14;;;;:::i;:::-;27921:31;;27962:30;27981:2;27985:6;27962:5;:18;;;;:30;;;;;:::i;:::-;28029:2;28007:33;;28021:5;28007:33;;;28033:6;28007:33;;;;;;:::i;:::-;;;;;;;;27696:351;;;3065:20:11::1;:18;:20::i;:::-;27623:424:18::0;;:::o;6655:1458::-;6722:17;6773:15;6759:1;:11;;;:29;6751:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;6846:1;:11;;;6834:1;:9;;;:23;6826:59;;;;;;;;;;;;:::i;:::-;;;;;;;;;6895:77;6910:1;:11;;;6923:1;:11;;;6936:1;:7;;;6945:1;:10;;;6957:1;:14;;;6895;:77::i;:::-;6995:12;;:14;;;;;;;;;:::i;:::-;;;;;6983:26;;7085:18;7123:1;:6;;;;;;;;:::i;:::-;7131:1;:8;;;;;;;;:::i;:::-;7141:1;:11;;;7162:4;7106:62;;;;;:::i;:::-;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;7085:83;;7311:27;7341:8;:19;7350:9;7341:19;;;;;;;;;;;7311:49;;7370:28;7401:7;:14;;7370:45;;7440:5;7425:6;:12;;;:20;;;;;;;;;;;;;;;;;;7484:1;:14;;;;;;;;;;:::i;:::-;7455:6;:19;;;:44;;;;;;;;;;;;;;;;;;7528:1;:11;;;7509:6;:16;;:30;;;;7564:1;:7;;;7549:6;:12;;:22;;;;7599:1;:10;;;7581:6;:15;;:28;;;;7638:1;:11;;;7619:6;:16;;:30;;;;7676:1;:9;;;7659:6;:14;;:26;;;;7712:10;7695:6;:14;;;:27;;;;;;;;;;;;;;;;;;7756:13;;7732:6;:21;;:37;;;;7801:1;:14;;;7779:6;:19;;:36;;;;7848:20;;7825:6;:20;;:43;;;;7894:19;7878:7;:13;;;:35;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;7968:10;7929:177;;7957:9;7929:177;7988:5;7996:1;:14;;;;;;;;;;:::i;:::-;8024:1;:11;;;8037:1;:7;;;8046:1;:10;;;8058:1;:11;;;8071:1;:9;;;8082:1;:14;;;7929:177;;;;;;;;;;;;;:::i;:::-;;;;;;;;6741:1372;;;6655:1458;;;:::o;2516:28::-;;;;:::o;2700:42::-;2738:4;2700:42;:::o;14451:934::-;3023:21:11;:19;:21::i;:::-;14528:27:18::1;14558:8;:19;14567:9;14558:19;;;;;;;;;;;14528:49;;14609:7;:14;;:22;;;;;;;;;;;;14595:36;;:10;:36;;;14587:60;;;;;;;;;;;;:::i;:::-;;;;;;;;;14695:22;14678:39;;;;;;;;:::i;:::-;;:7;:13;;;;;;;;;;;;:39;;;;;;;;:::i;:::-;;;:81;;;;14738:21;14721:38:::0;::::1;;;;;;;:::i;:::-;;:7;:13;;;;;;;;;;;;:38;;;;;;;;:::i;:::-;;;14678:81;14657:149;;;;;;;;;;;;:::i;:::-;;;;;;;;;14825:17;:28;14843:9;14825:28;;;;;;;;;;;;;;;;;;;;;14824:29;14816:59;;;;;;;;;;;;:::i;:::-;;;;;;;;;14953:14;14992:24;15008:7;14992:15;:24::i;:::-;14970:7;:19;;;:46;;;;:::i;:::-;14953:63;;15043:1;15034:6;:10;15026:42;;;;;;;;;;;;:::i;:::-;;;;;;;;;15149:4;15118:17;:28;15136:9;15118:28;;;;;;;;;;;;:35;;;;;;;;;;;;;;;;;;15214:6;15163:9;:47;15181:7;:14;;:27;;;;;;;;;;;;15163:47;;;;;;;;;;;;;;;;:57;;;;;;;:::i;:::-;;;;;;;;15230:72;15271:7;:14;;:22;;;;;;;;;;;;15295:6;15230:7;:14;;:27;;;;;;;;;;;;:40;;;;:72;;;;;:::i;:::-;15347:7;:14;;:22;;;;;;;;;;;;15318:60;;15336:9;15318:60;15371:6;15318:60;;;;;;:::i;:::-;;;;;;;;14518:867;;3065:20:11::0;:18;:20::i;:::-;14451:934:18;:::o;3488:39::-;3522:5;3488:39;:::o;26269:259::-;1531:13:0;:11;:13::i;:::-;26379:1:18::1;26358:23;;:9;:23;;::::0;26350:54:::1;;;;;;;;;;;;:::i;:::-;;;;;;;;;26469:9;26419:60;;26447:20;;;;;;;;;;;26419:60;;;;;;;;;;;;26512:9;26489:20;;:32;;;;;;;;;;;;;;;;;;26269:259:::0;:::o;2329:68::-;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2543:215:0:-;1531:13;:11;:13::i;:::-;2647:1:::1;2627:22;;:8;:22;;::::0;2623:91:::1;;2700:1;2672:31;;;;;;;;;;;:::i;:::-;;;;;;;;2623:91;2723:28;2742:8;2723:18;:28::i;:::-;2543:215:::0;:::o;22023:470:18:-;22176:1;22153:25;;:11;;;;;;;;;;;:25;;;;:54;;;;;22196:11;;;;;;;;;;;22182:25;;:10;:25;;;22153:54;22145:88;;;;;;;;;;;;:::i;:::-;;;;;;;;;22244:10;22256;22281:4;;22270:36;;;;;;;:::i;:::-;22243:63;;;;22335:1;22320:12;:16;22316:80;;;22338:58;22362:10;22382:12;22345:2;22338:23;;;;:58;;;;;:::i;:::-;22316:80;22425:1;22410:12;:16;22406:80;;;22428:58;22452:10;22472:12;22435:2;22428:23;;;;:58;;;;;:::i;:::-;22406:80;22135:358;;22023:470;;;;:::o;4139:51::-;4186:4;4139:51;:::o;1796:162:0:-;1866:12;:10;:12::i;:::-;1855:23;;:7;:5;:7::i;:::-;:23;;;1851:101;;1928:12;:10;:12::i;:::-;1901:40;;;;;;;;;;;:::i;:::-;;;;;;;;1851:101;1796:162::o;2175:211:17:-;2304:7;619:4;2351:13;2343:5;:21;;;;:::i;:::-;2342:37;;;;:::i;:::-;2330:9;:49;;;;:::i;:::-;2323:56;;2175:211;;;;;:::o;1390:583::-;1550:7;1719:18;1740:45;1765:6;1753:9;:18;;;;:::i;:::-;619:4;1740:12;:45::i;:::-;1719:66;;1795:17;1815:112;1879:6;1863:13;1859:1;:17;;;;:::i;:::-;:26;;;;:::i;:::-;1849:6;1841:5;:14;;;;:::i;:::-;:45;;;;:::i;:::-;619:4;;1888:1;:15;;;;:::i;:::-;:29;;;;:::i;:::-;1815:12;:112::i;:::-;1795:132;;1957:9;1944:10;:22;;;;:::i;:::-;1937:29;;;;1390:583;;;;;;:::o;3749:292:11:-;3872:25;:23;:25::i;:::-;2407:1;3972:46;:29;:27;:29::i;:::-;:44;:46::i;:::-;:52;;:62;;;;3749:292::o;24258:169:18:-;24335:7;24415:5;24384:7;:14;;:27;;;24362:7;:19;;;:49;;;;:::i;:::-;24361:59;;;;:::i;:::-;24354:66;;24258:169;;;:::o;7296:3683:14:-;7378:14;7429:12;7443:11;7458:12;7465:1;7468;7458:6;:12::i;:::-;7428:42;;;;7560:1;7552:4;:9;7548:365;;7887:11;7881:3;:17;;;;;:::i;:::-;;;7874:24;;;;;;7548:365;8038:4;8023:11;:19;8019:142;;8062:84;8074:71;8097:1;8082:11;:16;1035:4:10;940;8074:7:14;:71::i;:::-;8062:11;:84::i;:::-;8019:142;8413:17;8564:11;8561:1;8558;8551:25;8538:38;;8690:3;8679:9;8676:18;8670:4;8666:29;8658:37;;8728:9;8723:3;8719:19;8712:26;;8956:12;8990:11;8986:1;:15;8971:11;:31;8956:46;;9138:4;9125:11;9121:22;9106:37;;9223:4;9218:3;9214:14;9207:21;;9384:1;9377:4;9370;9367:1;9363:12;9359:23;9355:31;9347:39;;9477:4;9470;:11;9463:18;;;;9816:15;9854:1;9839:11;9835:1;:15;9834:21;9816:39;;10101:7;10087:11;:21;10083:1;:25;10072:36;;;;10171:7;10157:11;:21;10153:1;:25;10142:36;;;;10243:7;10229:11;:21;10225:1;:25;10214:36;;;;10314:7;10300:11;:21;10296:1;:25;10285:36;;;;10387:7;10373:11;:21;10369:1;:25;10358:36;;;;10461:7;10447:11;:21;10443:1;:25;10432:36;;;;10928:7;10922:3;:13;10913:22;;10949:13;;;;;7296:3683;;;;;;:::o;24854:469:18:-;24935:7;24954:17;24974:13;:151;;25071:54;619:4:17;25109:8:18;25119:5;25071:11;:54::i;:::-;24974:151;;;25002:54;25014:5;25021:8;619:4:17;25002:11:18;:54::i;:::-;24974:151;24954:171;;25135:17;25155:20;25165:9;25155;:20::i;:::-;25135:40;;3831:10;25193:26;;:9;:26;:56;;;;;3890:49;25223:26;;:9;:26;25193:56;25185:96;;;;;;;;;;;;:::i;:::-;;;;;;;;;25306:9;25291:25;;;;24854:469;;;;:::o;24433:237::-;24493:14;24509;24542:1;:15;;;:121;;24634:1;:9;;;24654:1;:7;;;24542:121;;;24581:1;:7;;;24599:1;:9;;;24542:121;24535:128;;;;24433:237;;;:::o;21086:888::-;21196:19;21233:1;:6;;;21196:44;;21251:15;21276:4;:10;;;:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;21250:38;;;;;;;;21313:1;:17;;;21302:28;;:7;:28;;;21298:41;;21332:7;;;;21298:41;21349:15;21377:1;:17;;;21367:27;;:7;:27;;;21349:45;;21438:15;21470:1;:15;;;21456:29;;:10;:29;;;21438:47;;21495:13;21511:10;:44;;21542:13;21511:44;;;21538:1;21524:11;:15;;;;:::i;:::-;21511:44;21495:60;;21578:1;21569:5;:10;21565:23;;21581:7;;;;;;;21565:23;21599:10;21611;21625;21633:1;21625:7;:10::i;:::-;21598:37;;;;21667:4;21645:11;;:27;;;;;;;;;;;;;;;;;;21682:4;:9;;;21700:4;21707:10;21726:5;21734:1;:17;;;21764:2;21768;21753:18;;;;;;;;;:::i;:::-;;;;;;;;;;;;;21682:90;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;21804:1;21782:11;;:24;;;;;;;;;;;;;;;;;;21822:10;21817:151;;21866:4;:10;;;:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;21848:30;;;;;;;;;;;;;;;;;;;;;;;;;21911:1;:17;;;21900:28;;:7;:28;;;21892:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;21817:151;21186:788;;;;;;;21086:888;;;;:::o;18366:1749::-;18447:18;18468:1;:7;;;:17;;;18494:4;18468:32;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;18447:53;;18510:20;18570:1;:14;;;18533:1;:9;;;:19;;;18561:4;18533:34;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:51;;;;:::i;:::-;18510:74;;18595:10;18607;18621;18629:1;18621:7;:10::i;:::-;18594:37;;;;18642:75;18688:15;18706:10;18657:1;:7;;;18642:37;;;;:75;;;;;:::i;:::-;18727:62;18758:15;18776:12;18727:1;:9;;;:22;;;;:62;;;;;:::i;:::-;18961:15;:20;;;18995:530;;;;;;;;19060:2;18995:530;;;;;;19088:2;18995:530;;;;;;3522:5;18995:530;;;;;;3721:7;18995:530;;;;;;3776:6;18995:530;;;;;;19243:1;:15;;;:43;;19274:12;19243:43;;;19261:10;19243:43;18995:530;;;;19320:1;:15;;;:43;;19353:10;19320:43;;;19338:12;19320:43;18995:530;;;;19393:1;18995:530;;;;19424:1;18995:530;;;;19462:4;18995:530;;;;;;19495:15;18995:530;;;18961:574;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;18957:1014;;19929:9;19913:47;19948:1;19952;19955;19958;19913:47;;;;;;;;;:::i;:::-;;;;;;;;18957:1014;;;19639:7;19615:10;:21;19626:9;19615:21;;;;;;;;;;;:31;;;;19680:1;:6;;;19660;:17;19667:9;19660:17;;;;;;;;;;;;:26;;;;;;;;;;;;;;;;;;19738:9;19705:171;19749:1;:6;;;19757:7;19782:1;:15;;;:31;;19808:5;19782:31;;;19800:5;19782:31;19831:1;:15;;;:31;;19857:5;19831:31;;;19849:5;19831:31;19705:171;;;;;;;;;:::i;:::-;;;;;;;;19536:351;;;;18957:1014;19981:66;20027:15;20045:1;19996;:7;;;19981:37;;;;:66;;;;;:::i;:::-;20057:51;20088:15;20106:1;20057;:9;;;:22;;;;:51;;;;;:::i;:::-;18437:1678;;;;18366:1749;;:::o;1219:204:8:-;1306:37;1320:5;1327:2;1331:5;1338:4;1306:13;:37::i;:::-;1301:116;;1399:5;1366:40;;;;;;;;;;;:::i;:::-;;;;;;;;1301:116;1219:204;;;:::o;4047:253:11:-;2365:1;4227:46;:29;:27;:29::i;:::-;:44;:46::i;:::-;:52;;:66;;;;4047:253::o;2912:187:0:-;2985:16;3004:6;;;;;;;;;;;2985:25;;3029:8;3020:6;;:17;;;;;;;;;;;;;;;;;;3083:8;3052:40;;3073:8;3052:40;;;;;;;;;;;;2975:124;2912:187;:::o;11798:917:18:-;11908:14;11924:12;11938:13;11976:9;11967:18;;12002:126;12045:7;:17;;;12064:6;12072:7;:14;;:24;;;12098:7;:14;;:20;;;12002:29;:126::i;:::-;11995:133;;12138:17;12184:7;:19;;;12158:7;:14;;:23;;;:45;;;;:::i;:::-;12138:65;;12224:9;12217:4;:16;12213:50;;;12243:6;12251:4;12257:5;12235:28;;;;;;;;;12213:50;12285:9;12278:4;:16;12274:398;;;12319:142;12360:7;:17;;;12379:9;12390:7;:14;;:24;;;12416:7;:14;;:20;;;12438:9;12319:23;:142::i;:::-;12310:151;;12492:1;12483:6;:10;12475:31;;;;;;;;;;;;:::i;:::-;;;;;;;;;12527:134;12574:7;:17;;;12593:6;12601:7;:14;;:24;;;12627:7;:14;;:20;;;12527:29;:134::i;:::-;12520:141;;12274:398;12689:6;12697:4;12703;12681:27;;;;;;;11798:917;;;;;;:::o;13001:514::-;13101:21;13125:12;:22;;;13156:4;13125:37;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;13101:61;;13172:62;13202:10;13222:4;13229;13172:12;:29;;;;:62;;;;;;:::i;:::-;13322:4;13305:13;13265:12;:22;;;13296:4;13265:37;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:53;;;;:::i;:::-;:61;13244:133;;;;;;;;;;;;:::i;:::-;;;;;;;;;13405:1;13391:11;:15;13387:122;;;13422:76;13452:10;13464:20;;;;;;;;;;;13486:11;13422:12;:29;;;;:76;;;;;;:::i;:::-;13387:122;13091:424;13001:514;;;:::o;23975:277::-;24100:1;24084:13;:17;24080:78;;;24103:55;24122:20;;;;;;;;;;;24144:13;24103:5;:18;;;;:55;;;;;:::i;:::-;24080:78;24180:13;24172:5;:21;24168:77;;;24195:50;24214:7;24231:13;24223:5;:21;;;;:::i;:::-;24195:5;:18;;;;:50;;;;;:::i;:::-;24168:77;23975:277;;;;:::o;8499:927::-;8706:1;8694:9;:13;8686:41;;;;;;;;;;;;:::i;:::-;;;;;;;;;8756:1;8745:8;:12;8737:39;;;;;;;;;;;;:::i;:::-;;;;;;;;;2982:4;8807:12;:33;;:58;;;;;8860:5;8844:12;:21;;8807:58;8786:128;;;;;;;;;;;;:::i;:::-;;;;;;;;;8934:54;8950:9;8961;8972:5;8979:8;8934:15;:54::i;:::-;8933:55;8925:83;;;;;;;;;;;;:::i;:::-;;;;;;;;;9019:15;9037:65;9061:1;9064:8;9074:9;9085:5;9092:9;9037:23;:65::i;:::-;9019:83;;9112:18;9133:49;9156:7;9165:9;9176:5;9133:22;:49::i;:::-;9112:70;;9192:15;9210:126;9263:5;9247:12;9236:8;:23;;;;:::i;:::-;9235:33;;;;:::i;:::-;619:4:17;9296:10:18;9308:18;9210:11;:126::i;:::-;9192:144;;9375:9;9364:7;9354;:17;;;;:::i;:::-;:30;;9346:73;;;;;;;;;;;;:::i;:::-;;;;;;;;;8676:750;;;8499:927;;;;;:::o;656:96:9:-;709:7;735:10;728:17;;656:96;:::o;6269:704:14:-;6331:7;6359:1;6354;:6;6350:150;;6454:35;1035:4:10;6454:11:14;:35::i;:::-;6350:150;6954:1;6950;6945;6941;:5;6940:11;;;;;:::i;:::-;;;:15;6914:22;6934:1;6930;:5;6914:15;:22::i;:::-;:42;6907:49;;6269:704;;;;:::o;3586:157:11:-;3648:25;:23;:25::i;:::-;3644:93;;;3696:30;;;;;;;;;;;;;;3644:93;3586:157::o;4636:127::-;4706:7;1505:66;4732:24;;4725:31;;4636:127;:::o;2679:163:12:-;2740:21;2822:4;2812:14;;2679:163;;;:::o;1027:550:14:-;1088:12;1102:11;1478:1;1474:6;1471:1;1468;1461:20;1508:1;1505;1501:9;1494:16;;1556:3;1552:2;1549:11;1543:3;1539:2;1535:12;1531:30;1523:38;;1437:134;1027:550;;;;;:::o;5087:294::-;5165:7;5337:26;5353:9;5337:15;:26::i;:::-;5332:1;5328;:5;5327:36;5322:1;:42;5315:49;;5087:294;;;;;:::o;1776:194:10:-;1881:10;1875:4;1868:24;1918:4;1912;1905:18;1949:4;1943;1936:18;20859:5181:14;20907:7;21025:1;21020;:6;21016:53;;21053:1;21046:8;;;;21016:53;21996:10;22009:1;21996:14;;22024:10;22037:1;22024:14;;22064:8;22057:2;:16;22053:92;;22100:3;22093:10;;;;;22128:2;22121:9;;;;;22053:92;22169:7;22162:2;:15;22158:90;;22204:2;22197:9;;;;;22231:2;22224:9;;;;;22158:90;22272:7;22265:2;:15;22261:90;;22307:2;22300:9;;;;;22334:2;22327:9;;;;;22261:90;22375:7;22368:2;:15;22364:89;;22410:2;22403:9;;;;;22437:1;22430:8;;;;;22364:89;22477:6;22470:2;:14;22466:87;;22511:1;22504:8;;;;;22537:1;22530:8;;;;;22466:87;22577:6;22570:2;:14;22566:87;;22611:1;22604:8;;;;;22637:1;22630:8;;;;;22566:87;22677:6;22670:2;:14;22666:61;;22711:1;22704:8;;;;;22666:61;23164:1;23157:2;23153:1;:6;23152:13;;23147:18;;25074:1;25067:2;25063:1;:6;;;;;:::i;:::-;;;25058:2;:11;25057:18;;25052:23;;25183:1;25176:2;25172:1;:6;;;;;:::i;:::-;;;25167:2;:11;25166:18;;25161:23;;25294:1;25287:2;25283:1;:6;;;;;:::i;:::-;;;25278:2;:11;25277:18;;25272:23;;25403:1;25396:2;25392:1;:6;;;;;:::i;:::-;;;25387:2;:11;25386:18;;25381:23;;25513:1;25506:2;25502:1;:6;;;;;:::i;:::-;;;25497:2;:11;25496:18;;25491:23;;25623:1;25616:2;25612:1;:6;;;;;:::i;:::-;;;25607:2;:11;25606:18;;25601:23;;25995:28;26020:2;26016:1;:6;;;;;:::i;:::-;;;26011:2;:11;25995:15;:28::i;:::-;25990:2;:33;25983:40;;;;20859:5181;;;;:::o;5098:367:8:-;5190:42;5203:5;5210:7;5219:5;5226;5190:12;:42::i;:::-;5185:274;;5253:37;5266:5;5273:7;5282:1;5285:4;5253:12;:37::i;:::-;5248:91;;5332:5;5299:40;;;;;;;;;;;:::i;:::-;;;;;;;;5248:91;5358:41;5371:5;5378:7;5387:5;5394:4;5358:12;:41::i;:::-;5353:95;;5441:5;5408:40;;;;;;;;;;;:::i;:::-;;;;;;;;5353:95;5185:274;5098:367;;;:::o;8373:1244::-;8467:12;8491:15;8509:24;;;8491:42;;8600:4;8594:11;8631:8;8625:4;8618:22;8686:1;8682:6;8678:2;8674:15;8670:2;8666:24;8660:4;8653:38;8717:5;8711:4;8704:19;8787:4;8781;8775;8769;8766:1;8759:5;8752;8747:45;8736:56;;9004:1;8997:4;8991:11;8988:18;8979:7;8975:32;8965:606;;9136:6;9126:7;9119:15;9115:28;9112:165;;;9192:16;9186:4;9181:3;9166:43;9242:16;9237:3;9230:29;9112:165;9553:1;9545:5;9533:18;9530:25;9511:16;9504:24;9500:56;9491:7;9487:70;9476:81;;8965:606;9597:3;9591:4;9584:17;8569:1042;;8373:1244;;;;;;:::o;2926:721:17:-;3108:7;3244:10;3294:1;3282:9;619:4;3258:6;:20;;;;:::i;:::-;3257:34;;;;:::i;:::-;:38;;;;:::i;:::-;3244:51;;3314:10;3309:2;:15;3305:36;;;3331:10;3326:15;;3305:36;3351:10;3375:247;3387:2;3382;:7;3375:247;;;3405:11;3435:1;3430;3425:2;3420;:7;;;;:::i;:::-;:11;;;;:::i;:::-;3419:17;;;;:::i;:::-;3405:31;;3512:6;3454:54;3471:13;3486:3;3491:9;3502:5;3454:16;:54::i;:::-;:64;3450:162;;3543:3;3538:8;;3450:162;;;3596:1;3590:3;:7;;;;:::i;:::-;3585:12;;3450:162;3391:231;3375:247;;;3638:2;3631:9;;;;2926:721;;;;;;;:::o;1662:232:8:-;1767:47;1785:5;1792:4;1798:2;1802:5;1809:4;1767:17;:47::i;:::-;1762:126;;1870:5;1837:40;;;;;;;;;;;:::i;:::-;;;;;;;;1762:126;1662:232;;;;:::o;25649:483:18:-;25792:4;25828:17;25816:29;;:9;:29;25812:46;;;25854:4;25847:11;;;;25812:46;25869:7;25882:33;25894:9;25905;25882:11;:33::i;:::-;25868:47;;;25930:2;25925:20;;25941:4;25934:11;;;;;25925:20;25964:45;25976:5;25999:9;25995:1;25983:9;:13;;;;:::i;:::-;:25;;;;:::i;:::-;25964:11;:45::i;:::-;25955:54;;;;;26024:2;26019:20;;26035:4;26028:11;;;;;26019:20;26058:47;26070:8;619:4:17;26058:11:18;:47::i;:::-;26049:56;;;;;26123:2;26122:3;26115:10;;;25649:483;;;;;;;:::o;11108:238:14:-;11209:7;11263:76;11279:26;11296:8;11279:16;:26::i;:::-;:59;;;;;11337:1;11322:11;11309:25;;;;;:::i;:::-;;11319:1;11316;11309:25;:29;11279:59;11263:15;:76::i;:::-;11235:25;11242:1;11245;11248:11;11235:6;:25::i;:::-;:104;;;;:::i;:::-;11228:111;;11108:238;;;;;;:::o;34792:145:15:-;34839:9;34918:1;34911:9;34904:17;34899:22;;34792:145;;;:::o;4479:151:11:-;4537:4;2407:1;4560:46;:29;:27;:29::i;:::-;:44;:46::i;:::-;:52;;;:63;4553:70;;4479:151;:::o;12059:1252:8:-;12157:12;12181:15;12199:23;;;12181:41;;12289:4;12283:11;12320:8;12314:4;12307:22;12380:1;12376:6;12372:2;12368:15;12359:7;12355:29;12349:4;12342:43;12411:5;12405:4;12398:19;12481:4;12475;12469;12463;12460:1;12453:5;12446;12441:45;12430:56;;12698:1;12691:4;12685:11;12682:18;12673:7;12669:32;12659:606;;12830:6;12820:7;12813:15;12809:28;12806:165;;;12886:16;12880:4;12875:3;12860:43;12936:16;12931:3;12924:29;12806:165;13247:1;13239:5;13227:18;13224:25;13205:16;13198:24;13194:56;13185:7;13181:70;13170:81;;12659:606;13291:3;13285:4;13278:17;12258:1047;;12059:1252;;;;;;:::o;10165:1393::-;10323:12;10347:15;10365:28;;;10347:46;;10460:4;10454:11;10491:8;10485:4;10478:22;10548:1;10544:6;10540:2;10536:15;10530:4;10526:26;10520:4;10513:40;10599:1;10595:6;10591:2;10587:15;10583:2;10579:24;10573:4;10566:38;10630:5;10624:4;10617:19;10700:4;10694;10688;10682;10679:1;10672:5;10665;10660:45;10649:56;;10917:1;10910:4;10904:11;10901:18;10892:7;10888:32;10878:606;;11049:6;11039:7;11032:15;11028:28;11025:165;;;11105:16;11099:4;11094:3;11079:43;11155:16;11150:3;11143:29;11025:165;11466:1;11458:5;11446:18;11443:25;11424:16;11417:24;11413:56;11404:7;11400:70;11389:81;;10878:606;11510:3;11504:4;11497:17;11540:1;11534:4;11527:15;10429:1123;;10165:1393;;;;;;;:::o;2414:482:14:-;2475:12;2489:14;2539:9;2555:1;2551;:5;2539:17;;2766:1;2759:9;2755:1;2751;2748;2744:9;2741:16;2738:31;2727:42;;2855:24;2871:7;2855:15;:24::i;:::-;2851:1;:28;2842:37;;2515:375;2414:482;;;;;:::o;32337:122::-;32405:4;32451:1;32446;32434:8;32428:15;;;;;;;;:::i;:::-;;:19;;;;:::i;:::-;:24;;;32421:31;;32337:122;;;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;:::o;88:117:20:-;197:1;194;187:12;211:117;320:1;317;310:12;334:77;371:7;400:5;389:16;;334:77;;;:::o;417:122::-;490:24;508:5;490:24;:::i;:::-;483:5;480:35;470:63;;529:1;526;519:12;470:63;417:122;:::o;545:139::-;591:5;629:6;616:20;607:29;;645:33;672:5;645:33;:::i;:::-;545:139;;;;:::o;690:329::-;749:6;798:2;786:9;777:7;773:23;769:32;766:119;;;804:79;;:::i;:::-;766:119;924:1;949:53;994:7;985:6;974:9;970:22;949:53;:::i;:::-;939:63;;895:117;690:329;;;;:::o;1025:118::-;1112:24;1130:5;1112:24;:::i;:::-;1107:3;1100:37;1025:118;;:::o;1149:222::-;1242:4;1280:2;1269:9;1265:18;1257:26;;1293:71;1361:1;1350:9;1346:17;1337:6;1293:71;:::i;:::-;1149:222;;;;:::o;1377:474::-;1445:6;1453;1502:2;1490:9;1481:7;1477:23;1473:32;1470:119;;;1508:79;;:::i;:::-;1470:119;1628:1;1653:53;1698:7;1689:6;1678:9;1674:22;1653:53;:::i;:::-;1643:63;;1599:117;1755:2;1781:53;1826:7;1817:6;1806:9;1802:22;1781:53;:::i;:::-;1771:63;;1726:118;1377:474;;;;;:::o;1857:332::-;1978:4;2016:2;2005:9;2001:18;1993:26;;2029:71;2097:1;2086:9;2082:17;2073:6;2029:71;:::i;:::-;2110:72;2178:2;2167:9;2163:18;2154:6;2110:72;:::i;:::-;1857:332;;;;;:::o;2195:90::-;2229:7;2272:5;2265:13;2258:21;2247:32;;2195:90;;;:::o;2291:109::-;2372:21;2387:5;2372:21;:::i;:::-;2367:3;2360:34;2291:109;;:::o;2406:210::-;2493:4;2531:2;2520:9;2516:18;2508:26;;2544:65;2606:1;2595:9;2591:17;2582:6;2544:65;:::i;:::-;2406:210;;;;:::o;2622:126::-;2659:7;2699:42;2692:5;2688:54;2677:65;;2622:126;;;:::o;2754:60::-;2782:3;2803:5;2796:12;;2754:60;;;:::o;2820:142::-;2870:9;2903:53;2921:34;2930:24;2948:5;2930:24;:::i;:::-;2921:34;:::i;:::-;2903:53;:::i;:::-;2890:66;;2820:142;;;:::o;2968:126::-;3018:9;3051:37;3082:5;3051:37;:::i;:::-;3038:50;;2968:126;;;:::o;3100:147::-;3171:9;3204:37;3235:5;3204:37;:::i;:::-;3191:50;;3100:147;;;:::o;3253:163::-;3351:58;3403:5;3351:58;:::i;:::-;3346:3;3339:71;3253:163;;:::o;3422:140::-;3486:9;3519:37;3550:5;3519:37;:::i;:::-;3506:50;;3422:140;;;:::o;3568:149::-;3659:51;3704:5;3659:51;:::i;:::-;3654:3;3647:64;3568:149;;:::o;3723:108::-;3800:24;3818:5;3800:24;:::i;:::-;3795:3;3788:37;3723:108;;:::o;3837:96::-;3874:7;3903:24;3921:5;3903:24;:::i;:::-;3892:35;;3837:96;;;:::o;3939:108::-;4016:24;4034:5;4016:24;:::i;:::-;4011:3;4004:37;3939:108;;:::o;4131:2191::-;4290:6;4285:3;4281:16;4380:4;4373:5;4369:16;4363:23;4399:84;4477:4;4472:3;4468:14;4454:12;4399:84;:::i;:::-;4307:186;4583:4;4576:5;4572:16;4566:23;4602:77;4673:4;4668:3;4664:14;4650:12;4602:77;:::i;:::-;4503:186;4776:4;4769:5;4765:16;4759:23;4795:63;4852:4;4847:3;4843:14;4829:12;4795:63;:::i;:::-;4699:169;4951:4;4944:5;4940:16;4934:23;4970:63;5027:4;5022:3;5018:14;5004:12;4970:63;:::i;:::-;4878:165;5129:4;5122:5;5118:16;5112:23;5148:63;5205:4;5200:3;5196:14;5182:12;5148:63;:::i;:::-;5053:168;5308:4;5301:5;5297:16;5291:23;5327:63;5384:4;5379:3;5375:14;5361:12;5327:63;:::i;:::-;5231:169;5485:4;5478:5;5474:16;5468:23;5504:63;5561:4;5556:3;5552:14;5538:12;5504:63;:::i;:::-;5410:167;5662:4;5655:5;5651:16;5645:23;5681:63;5738:4;5733:3;5729:14;5715:12;5681:63;:::i;:::-;5587:167;5846:6;5839:5;5835:18;5829:25;5867:65;5924:6;5919:3;5915:16;5901:12;5867:65;:::i;:::-;5764:178;6032:6;6025:5;6021:18;6015:25;6053:65;6110:6;6105:3;6101:16;6087:12;6053:65;:::i;:::-;5952:176;6219:6;6212:5;6208:18;6202:25;6240:65;6297:6;6292:3;6288:16;6274:12;6240:65;:::i;:::-;6138:177;4259:2063;4131:2191;;:::o;6328:180::-;6376:77;6373:1;6366:88;6473:4;6470:1;6463:15;6497:4;6494:1;6487:15;6514:122;6604:1;6597:5;6594:12;6584:46;;6610:18;;:::i;:::-;6584:46;6514:122;:::o;6642:145::-;6696:7;6725:5;6714:16;;6731:50;6775:5;6731:50;:::i;:::-;6642:145;;;:::o;6793:::-;6858:9;6891:41;6926:5;6891:41;:::i;:::-;6878:54;;6793:145;;;:::o;6944:161::-;7046:52;7092:5;7046:52;:::i;:::-;7041:3;7034:65;6944:161;;:::o;7111:710::-;7365:4;7403:3;7392:9;7388:19;7380:27;;7417:133;7547:1;7536:9;7532:17;7523:6;7417:133;:::i;:::-;7560:88;7643:3;7632:9;7628:19;7619:6;7560:88;:::i;:::-;7658:73;7726:3;7715:9;7711:19;7702:6;7658:73;:::i;:::-;7741;7809:3;7798:9;7794:19;7785:6;7741:73;:::i;:::-;7111:710;;;;;;;:::o;7827:122::-;7900:24;7918:5;7900:24;:::i;:::-;7893:5;7890:35;7880:63;;7939:1;7936;7929:12;7880:63;7827:122;:::o;7955:139::-;8001:5;8039:6;8026:20;8017:29;;8055:33;8082:5;8055:33;:::i;:::-;7955:139;;;;:::o;8100:329::-;8159:6;8208:2;8196:9;8187:7;8183:23;8179:32;8176:119;;;8214:79;;:::i;:::-;8176:119;8334:1;8359:53;8404:7;8395:6;8384:9;8380:22;8359:53;:::i;:::-;8349:63;;8305:117;8100:329;;;;:::o;8435:118::-;8522:24;8540:5;8522:24;:::i;:::-;8517:3;8510:37;8435:118;;:::o;8559:222::-;8652:4;8690:2;8679:9;8675:18;8667:26;;8703:71;8771:1;8760:9;8756:17;8747:6;8703:71;:::i;:::-;8559:222;;;;:::o;8787:162::-;8873:9;8906:37;8937:5;8906:37;:::i;:::-;8893:50;;8787:162;;;:::o;8955:203::-;9078:73;9145:5;9078:73;:::i;:::-;9073:3;9066:86;8955:203;;:::o;9164:294::-;9293:4;9331:2;9320:9;9316:18;9308:26;;9344:107;9448:1;9437:9;9433:17;9424:6;9344:107;:::i;:::-;9164:294;;;;:::o;9464:619::-;9541:6;9549;9557;9606:2;9594:9;9585:7;9581:23;9577:32;9574:119;;;9612:79;;:::i;:::-;9574:119;9732:1;9757:53;9802:7;9793:6;9782:9;9778:22;9757:53;:::i;:::-;9747:63;;9703:117;9859:2;9885:53;9930:7;9921:6;9910:9;9906:22;9885:53;:::i;:::-;9875:63;;9830:118;9987:2;10013:53;10058:7;10049:6;10038:9;10034:22;10013:53;:::i;:::-;10003:63;;9958:118;9464:619;;;;;:::o;10089:110::-;10140:7;10169:24;10187:5;10169:24;:::i;:::-;10158:35;;10089:110;;;:::o;10205:150::-;10292:38;10324:5;10292:38;:::i;:::-;10285:5;10282:49;10272:77;;10345:1;10342;10335:12;10272:77;10205:150;:::o;10361:167::-;10421:5;10459:6;10446:20;10437:29;;10475:47;10516:5;10475:47;:::i;:::-;10361:167;;;;:::o;10534:502::-;10616:6;10624;10673:2;10661:9;10652:7;10648:23;10644:32;10641:119;;;10679:79;;:::i;:::-;10641:119;10799:1;10824:67;10883:7;10874:6;10863:9;10859:22;10824:67;:::i;:::-;10814:77;;10770:131;10940:2;10966:53;11011:7;11002:6;10991:9;10987:22;10966:53;:::i;:::-;10956:63;;10911:118;10534:502;;;;;:::o;11042:117::-;11151:1;11148;11141:12;11206:238;11285:5;11326:3;11317:6;11312:3;11308:16;11304:26;11301:113;;;11333:79;;:::i;:::-;11301:113;11432:6;11423:15;;11206:238;;;;:::o;11450:555::-;11542:6;11591:2;11579:9;11570:7;11566:23;11562:32;11559:119;;;11597:79;;:::i;:::-;11559:119;11745:1;11734:9;11730:17;11717:31;11775:18;11767:6;11764:30;11761:117;;;11797:79;;:::i;:::-;11761:117;11902:86;11980:7;11971:6;11960:9;11956:22;11902:86;:::i;:::-;11892:96;;11688:310;11450:555;;;;:::o;12011:91::-;12047:7;12087:8;12080:5;12076:20;12065:31;;12011:91;;;:::o;12108:115::-;12193:23;12210:5;12193:23;:::i;:::-;12188:3;12181:36;12108:115;;:::o;12229:218::-;12320:4;12358:2;12347:9;12343:18;12335:26;;12371:69;12437:1;12426:9;12422:17;12413:6;12371:69;:::i;:::-;12229:218;;;;:::o;12453:474::-;12521:6;12529;12578:2;12566:9;12557:7;12553:23;12549:32;12546:119;;;12584:79;;:::i;:::-;12546:119;12704:1;12729:53;12774:7;12765:6;12754:9;12750:22;12729:53;:::i;:::-;12719:63;;12675:117;12831:2;12857:53;12902:7;12893:6;12882:9;12878:22;12857:53;:::i;:::-;12847:63;;12802:118;12453:474;;;;;:::o;12933:76::-;12969:7;12998:5;12987:16;;12933:76;;;:::o;13015:120::-;13087:23;13104:5;13087:23;:::i;:::-;13080:5;13077:34;13067:62;;13125:1;13122;13115:12;13067:62;13015:120;:::o;13141:137::-;13186:5;13224:6;13211:20;13202:29;;13240:32;13266:5;13240:32;:::i;:::-;13141:137;;;;:::o;13284:117::-;13393:1;13390;13383:12;13407:117;13516:1;13513;13506:12;13530:117;13639:1;13636;13629:12;13666:552;13723:8;13733:6;13783:3;13776:4;13768:6;13764:17;13760:27;13750:122;;13791:79;;:::i;:::-;13750:122;13904:6;13891:20;13881:30;;13934:18;13926:6;13923:30;13920:117;;;13956:79;;:::i;:::-;13920:117;14070:4;14062:6;14058:17;14046:29;;14124:3;14116:4;14108:6;14104:17;14094:8;14090:32;14087:41;14084:128;;;14131:79;;:::i;:::-;14084:128;13666:552;;;;;:::o;14224:813::-;14310:6;14318;14326;14334;14383:2;14371:9;14362:7;14358:23;14354:32;14351:119;;;14389:79;;:::i;:::-;14351:119;14509:1;14534:52;14578:7;14569:6;14558:9;14554:22;14534:52;:::i;:::-;14524:62;;14480:116;14635:2;14661:52;14705:7;14696:6;14685:9;14681:22;14661:52;:::i;:::-;14651:62;;14606:117;14790:2;14779:9;14775:18;14762:32;14821:18;14813:6;14810:30;14807:117;;;14843:79;;:::i;:::-;14807:117;14956:64;15012:7;15003:6;14992:9;14988:22;14956:64;:::i;:::-;14938:82;;;;14733:297;14224:813;;;;;;;:::o;15043:169::-;15127:11;15161:6;15156:3;15149:19;15201:4;15196:3;15192:14;15177:29;;15043:169;;;;:::o;15218:164::-;15358:16;15354:1;15346:6;15342:14;15335:40;15218:164;:::o;15388:366::-;15530:3;15551:67;15615:2;15610:3;15551:67;:::i;:::-;15544:74;;15627:93;15716:3;15627:93;:::i;:::-;15745:2;15740:3;15736:12;15729:19;;15388:366;;;:::o;15760:419::-;15926:4;15964:2;15953:9;15949:18;15941:26;;16013:9;16007:4;16003:20;15999:1;15988:9;15984:17;15977:47;16041:131;16167:4;16041:131;:::i;:::-;16033:139;;15760:419;;;:::o;16185:180::-;16233:77;16230:1;16223:88;16330:4;16327:1;16320:15;16354:4;16351:1;16344:15;16371:410;16411:7;16434:20;16452:1;16434:20;:::i;:::-;16429:25;;16468:20;16486:1;16468:20;:::i;:::-;16463:25;;16523:1;16520;16516:9;16545:30;16563:11;16545:30;:::i;:::-;16534:41;;16724:1;16715:7;16711:15;16708:1;16705:22;16685:1;16678:9;16658:83;16635:139;;16754:18;;:::i;:::-;16635:139;16419:362;16371:410;;;;:::o;16787:180::-;16835:77;16832:1;16825:88;16932:4;16929:1;16922:15;16956:4;16953:1;16946:15;16973:185;17013:1;17030:20;17048:1;17030:20;:::i;:::-;17025:25;;17064:20;17082:1;17064:20;:::i;:::-;17059:25;;17103:1;17093:35;;17108:18;;:::i;:::-;17093:35;17150:1;17147;17143:9;17138:14;;16973:185;;;;:::o;17164:164::-;17304:16;17300:1;17292:6;17288:14;17281:40;17164:164;:::o;17334:366::-;17476:3;17497:67;17561:2;17556:3;17497:67;:::i;:::-;17490:74;;17573:93;17662:3;17573:93;:::i;:::-;17691:2;17686:3;17682:12;17675:19;;17334:366;;;:::o;17706:419::-;17872:4;17910:2;17899:9;17895:18;17887:26;;17959:9;17953:4;17949:20;17945:1;17934:9;17930:17;17923:47;17987:131;18113:4;17987:131;:::i;:::-;17979:139;;17706:419;;;:::o;18131:167::-;18271:19;18267:1;18259:6;18255:14;18248:43;18131:167;:::o;18304:366::-;18446:3;18467:67;18531:2;18526:3;18467:67;:::i;:::-;18460:74;;18543:93;18632:3;18543:93;:::i;:::-;18661:2;18656:3;18652:12;18645:19;;18304:366;;;:::o;18676:419::-;18842:4;18880:2;18869:9;18865:18;18857:26;;18929:9;18923:4;18919:20;18915:1;18904:9;18900:17;18893:47;18957:131;19083:4;18957:131;:::i;:::-;18949:139;;18676:419;;;:::o;19101:160::-;19241:12;19237:1;19229:6;19225:14;19218:36;19101:160;:::o;19267:366::-;19409:3;19430:67;19494:2;19489:3;19430:67;:::i;:::-;19423:74;;19506:93;19595:3;19506:93;:::i;:::-;19624:2;19619:3;19615:12;19608:19;;19267:366;;;:::o;19639:419::-;19805:4;19843:2;19832:9;19828:18;19820:26;;19892:9;19886:4;19882:20;19878:1;19867:9;19863:17;19856:47;19920:131;20046:4;19920:131;:::i;:::-;19912:139;;19639:419;;;:::o;20064:162::-;20204:14;20200:1;20192:6;20188:14;20181:38;20064:162;:::o;20232:366::-;20374:3;20395:67;20459:2;20454:3;20395:67;:::i;:::-;20388:74;;20471:93;20560:3;20471:93;:::i;:::-;20589:2;20584:3;20580:12;20573:19;;20232:366;;;:::o;20604:419::-;20770:4;20808:2;20797:9;20793:18;20785:26;;20857:9;20851:4;20847:20;20843:1;20832:9;20828:17;20821:47;20885:131;21011:4;20885:131;:::i;:::-;20877:139;;20604:419;;;:::o;21029:171::-;21169:23;21165:1;21157:6;21153:14;21146:47;21029:171;:::o;21206:366::-;21348:3;21369:67;21433:2;21428:3;21369:67;:::i;:::-;21362:74;;21445:93;21534:3;21445:93;:::i;:::-;21563:2;21558:3;21554:12;21547:19;;21206:366;;;:::o;21578:419::-;21744:4;21782:2;21771:9;21767:18;21759:26;;21831:9;21825:4;21821:20;21817:1;21806:9;21802:17;21795:47;21859:131;21985:4;21859:131;:::i;:::-;21851:139;;21578:419;;;:::o;22003:143::-;22060:5;22091:6;22085:13;22076:22;;22107:33;22134:5;22107:33;:::i;:::-;22003:143;;;;:::o;22152:351::-;22222:6;22271:2;22259:9;22250:7;22246:23;22242:32;22239:119;;;22277:79;;:::i;:::-;22239:119;22397:1;22422:64;22478:7;22469:6;22458:9;22454:22;22422:64;:::i;:::-;22412:74;;22368:128;22152:351;;;;:::o;22509:194::-;22549:4;22569:20;22587:1;22569:20;:::i;:::-;22564:25;;22603:20;22621:1;22603:20;:::i;:::-;22598:25;;22647:1;22644;22640:9;22632:17;;22671:1;22665:4;22662:11;22659:37;;;22676:18;;:::i;:::-;22659:37;22509:194;;;;:::o;22709:332::-;22830:4;22868:2;22857:9;22853:18;22845:26;;22881:71;22949:1;22938:9;22934:17;22925:6;22881:71;:::i;:::-;22962:72;23030:2;23019:9;23015:18;23006:6;22962:72;:::i;:::-;22709:332;;;;;:::o;23047:118::-;23134:24;23152:5;23134:24;:::i;:::-;23129:3;23122:37;23047:118;;:::o;23171:549::-;23346:4;23384:3;23373:9;23369:19;23361:27;;23398:71;23466:1;23455:9;23451:17;23442:6;23398:71;:::i;:::-;23479:72;23547:2;23536:9;23532:18;23523:6;23479:72;:::i;:::-;23561:70;23627:2;23616:9;23612:18;23603:6;23561:70;:::i;:::-;23641:72;23709:2;23698:9;23694:18;23685:6;23641:72;:::i;:::-;23171:549;;;;;;;:::o;23726:143::-;23783:5;23814:6;23808:13;23799:22;;23830:33;23857:5;23830:33;:::i;:::-;23726:143;;;;:::o;23875:351::-;23945:6;23994:2;23982:9;23973:7;23969:23;23965:32;23962:119;;;24000:79;;:::i;:::-;23962:119;24120:1;24145:64;24201:7;24192:6;24181:9;24177:22;24145:64;:::i;:::-;24135:74;;24091:128;23875:351;;;;:::o;24232:168::-;24372:20;24368:1;24360:6;24356:14;24349:44;24232:168;:::o;24406:366::-;24548:3;24569:67;24633:2;24628:3;24569:67;:::i;:::-;24562:74;;24645:93;24734:3;24645:93;:::i;:::-;24763:2;24758:3;24754:12;24747:19;;24406:366;;;:::o;24778:419::-;24944:4;24982:2;24971:9;24967:18;24959:26;;25031:9;25025:4;25021:20;25017:1;25006:9;25002:17;24995:47;25059:131;25185:4;25059:131;:::i;:::-;25051:139;;24778:419;;;:::o;25203:161::-;25343:13;25339:1;25331:6;25327:14;25320:37;25203:161;:::o;25370:366::-;25512:3;25533:67;25597:2;25592:3;25533:67;:::i;:::-;25526:74;;25609:93;25698:3;25609:93;:::i;:::-;25727:2;25722:3;25718:12;25711:19;;25370:366;;;:::o;25742:419::-;25908:4;25946:2;25935:9;25931:18;25923:26;;25995:9;25989:4;25985:20;25981:1;25970:9;25966:17;25959:47;26023:131;26149:4;26023:131;:::i;:::-;26015:139;;25742:419;;;:::o;26167:155::-;26307:7;26303:1;26295:6;26291:14;26284:31;26167:155;:::o;26328:365::-;26470:3;26491:66;26555:1;26550:3;26491:66;:::i;:::-;26484:73;;26566:93;26655:3;26566:93;:::i;:::-;26684:2;26679:3;26675:12;26668:19;;26328:365;;;:::o;26699:419::-;26865:4;26903:2;26892:9;26888:18;26880:26;;26952:9;26946:4;26942:20;26938:1;26927:9;26923:17;26916:47;26980:131;27106:4;26980:131;:::i;:::-;26972:139;;26699:419;;;:::o;27124:161::-;27264:13;27260:1;27252:6;27248:14;27241:37;27124:161;:::o;27291:366::-;27433:3;27454:67;27518:2;27513:3;27454:67;:::i;:::-;27447:74;;27530:93;27619:3;27530:93;:::i;:::-;27648:2;27643:3;27639:12;27632:19;;27291:366;;;:::o;27663:419::-;27829:4;27867:2;27856:9;27852:18;27844:26;;27916:9;27910:4;27906:20;27902:1;27891:9;27887:17;27880:47;27944:131;28070:4;27944:131;:::i;:::-;27936:139;;27663:419;;;:::o;28088:191::-;28128:3;28147:20;28165:1;28147:20;:::i;:::-;28142:25;;28181:20;28199:1;28181:20;:::i;:::-;28176:25;;28224:1;28221;28217:9;28210:16;;28245:3;28242:1;28239:10;28236:36;;;28252:18;;:::i;:::-;28236:36;28088:191;;;;:::o;28285:167::-;28425:19;28421:1;28413:6;28409:14;28402:43;28285:167;:::o;28458:366::-;28600:3;28621:67;28685:2;28680:3;28621:67;:::i;:::-;28614:74;;28697:93;28786:3;28697:93;:::i;:::-;28815:2;28810:3;28806:12;28799:19;;28458:366;;;:::o;28830:419::-;28996:4;29034:2;29023:9;29019:18;29011:26;;29083:9;29077:4;29073:20;29069:1;29058:9;29054:17;29047:47;29111:131;29237:4;29111:131;:::i;:::-;29103:139;;28830:419;;;:::o;29255:664::-;29460:4;29498:3;29487:9;29483:19;29475:27;;29512:71;29580:1;29569:9;29565:17;29556:6;29512:71;:::i;:::-;29593:72;29661:2;29650:9;29646:18;29637:6;29593:72;:::i;:::-;29675;29743:2;29732:9;29728:18;29719:6;29675:72;:::i;:::-;29757;29825:2;29814:9;29810:18;29801:6;29757:72;:::i;:::-;29839:73;29907:3;29896:9;29892:19;29883:6;29839:73;:::i;:::-;29255:664;;;;;;;;:::o;29925:161::-;30065:13;30061:1;30053:6;30049:14;30042:37;29925:161;:::o;30092:366::-;30234:3;30255:67;30319:2;30314:3;30255:67;:::i;:::-;30248:74;;30331:93;30420:3;30331:93;:::i;:::-;30449:2;30444:3;30440:12;30433:19;;30092:366;;;:::o;30464:419::-;30630:4;30668:2;30657:9;30653:18;30645:26;;30717:9;30711:4;30707:20;30703:1;30692:9;30688:17;30681:47;30745:131;30871:4;30745:131;:::i;:::-;30737:139;;30464:419;;;:::o;30889:118::-;30926:7;30966:34;30959:5;30955:46;30944:57;;30889:118;;;:::o;31013:108::-;31090:24;31108:5;31090:24;:::i;:::-;31085:3;31078:37;31013:108;;:::o;31235:887::-;31394:4;31389:3;31385:14;31484:4;31477:5;31473:16;31467:23;31503:63;31560:4;31555:3;31551:14;31537:12;31503:63;:::i;:::-;31409:167;31663:4;31656:5;31652:16;31646:23;31682:63;31739:4;31734:3;31730:14;31716:12;31682:63;:::i;:::-;31586:169;31843:4;31836:5;31832:16;31826:23;31862:63;31919:4;31914:3;31910:14;31896:12;31862:63;:::i;:::-;31765:170;32023:4;32016:5;32012:16;32006:23;32042:63;32099:4;32094:3;32090:14;32076:12;32042:63;:::i;:::-;31945:170;31363:759;31235:887;;:::o;32128:347::-;32283:4;32321:3;32310:9;32306:19;32298:27;;32335:133;32465:1;32454:9;32450:17;32441:6;32335:133;:::i;:::-;32128:347;;;;:::o;32481:507::-;32560:6;32568;32617:2;32605:9;32596:7;32592:23;32588:32;32585:119;;;32623:79;;:::i;:::-;32585:119;32743:1;32768:64;32824:7;32815:6;32804:9;32800:22;32768:64;:::i;:::-;32758:74;;32714:128;32881:2;32907:64;32963:7;32954:6;32943:9;32939:22;32907:64;:::i;:::-;32897:74;;32852:129;32481:507;;;;;:::o;32994:553::-;33171:4;33209:3;33198:9;33194:19;33186:27;;33223:71;33291:1;33280:9;33276:17;33267:6;33223:71;:::i;:::-;33304:72;33372:2;33361:9;33357:18;33348:6;33304:72;:::i;:::-;33386;33454:2;33443:9;33439:18;33430:6;33386:72;:::i;:::-;33468;33536:2;33525:9;33521:18;33512:6;33468:72;:::i;:::-;32994:553;;;;;;;:::o;33553:164::-;33693:16;33689:1;33681:6;33677:14;33670:40;33553:164;:::o;33723:366::-;33865:3;33886:67;33950:2;33945:3;33886:67;:::i;:::-;33879:74;;33962:93;34051:3;33962:93;:::i;:::-;34080:2;34075:3;34071:12;34064:19;;33723:366;;;:::o;34095:419::-;34261:4;34299:2;34288:9;34284:18;34276:26;;34348:9;34342:4;34338:20;34334:1;34323:9;34319:17;34312:47;34376:131;34502:4;34376:131;:::i;:::-;34368:139;;34095:419;;;:::o;34520:166::-;34660:18;34656:1;34648:6;34644:14;34637:42;34520:166;:::o;34692:366::-;34834:3;34855:67;34919:2;34914:3;34855:67;:::i;:::-;34848:74;;34931:93;35020:3;34931:93;:::i;:::-;35049:2;35044:3;35040:12;35033:19;;34692:366;;;:::o;35064:419::-;35230:4;35268:2;35257:9;35253:18;35245:26;;35317:9;35311:4;35307:20;35303:1;35292:9;35288:17;35281:47;35345:131;35471:4;35345:131;:::i;:::-;35337:139;;35064:419;;;:::o;35489:173::-;35629:25;35625:1;35617:6;35613:14;35606:49;35489:173;:::o;35668:366::-;35810:3;35831:67;35895:2;35890:3;35831:67;:::i;:::-;35824:74;;35907:93;35996:3;35907:93;:::i;:::-;36025:2;36020:3;36016:12;36009:19;;35668:366;;;:::o;36040:419::-;36206:4;36244:2;36233:9;36229:18;36221:26;;36293:9;36287:4;36283:20;36279:1;36268:9;36264:17;36257:47;36321:131;36447:4;36321:131;:::i;:::-;36313:139;;36040:419;;;:::o;36465:173::-;36605:25;36601:1;36593:6;36589:14;36582:49;36465:173;:::o;36644:366::-;36786:3;36807:67;36871:2;36866:3;36807:67;:::i;:::-;36800:74;;36883:93;36972:3;36883:93;:::i;:::-;37001:2;36996:3;36992:12;36985:19;;36644:366;;;:::o;37016:419::-;37182:4;37220:2;37209:9;37205:18;37197:26;;37269:9;37263:4;37259:20;37255:1;37244:9;37240:17;37233:47;37297:131;37423:4;37297:131;:::i;:::-;37289:139;;37016:419;;;:::o;37441:233::-;37480:3;37503:24;37521:5;37503:24;:::i;:::-;37494:33;;37549:66;37542:5;37539:77;37536:103;;37619:18;;:::i;:::-;37536:103;37666:1;37659:5;37655:13;37648:20;;37441:233;;;:::o;37680:117::-;37789:1;37786;37779:12;37803:117;37912:1;37909;37902:12;37926:117;38035:1;38032;38025:12;38049:725;38127:4;38133:6;38189:11;38176:25;38289:1;38283:4;38279:12;38268:8;38252:14;38248:29;38244:48;38224:18;38220:73;38210:168;;38297:79;;:::i;:::-;38210:168;38409:18;38399:8;38395:33;38387:41;;38461:4;38448:18;38438:28;;38489:18;38481:6;38478:30;38475:117;;;38511:79;;:::i;:::-;38475:117;38619:2;38613:4;38609:13;38601:21;;38676:4;38668:6;38664:17;38648:14;38644:38;38638:4;38634:49;38631:136;;;38686:79;;:::i;:::-;38631:136;38140:634;38049:725;;;;;:::o;38780:146::-;38877:6;38872:3;38867;38854:30;38918:1;38909:6;38904:3;38900:16;38893:27;38780:146;;;:::o;38932:102::-;38973:6;39024:2;39020:7;39015:2;39008:5;39004:14;39000:28;38990:38;;38932:102;;;:::o;39064:317::-;39162:3;39183:71;39247:6;39242:3;39183:71;:::i;:::-;39176:78;;39264:56;39313:6;39308:3;39301:5;39264:56;:::i;:::-;39345:29;39367:6;39345:29;:::i;:::-;39340:3;39336:39;39329:46;;39064:317;;;;;:::o;39387:775::-;39624:4;39662:3;39651:9;39647:19;39639:27;;39712:9;39706:4;39702:20;39698:1;39687:9;39683:17;39676:47;39740:88;39823:4;39814:6;39806;39740:88;:::i;:::-;39732:96;;39875:9;39869:4;39865:20;39860:2;39849:9;39845:18;39838:48;39903:88;39986:4;39977:6;39969;39903:88;:::i;:::-;39895:96;;40001:72;40069:2;40058:9;40054:18;40045:6;40001:72;:::i;:::-;40083;40151:2;40140:9;40136:18;40127:6;40083:72;:::i;:::-;39387:775;;;;;;;;;:::o;40168:997::-;40457:4;40495:3;40484:9;40480:19;40472:27;;40509:71;40577:1;40566:9;40562:17;40553:6;40509:71;:::i;:::-;40590:72;40658:2;40647:9;40643:18;40634:6;40590:72;:::i;:::-;40672;40740:2;40729:9;40725:18;40716:6;40672:72;:::i;:::-;40754;40822:2;40811:9;40807:18;40798:6;40754:72;:::i;:::-;40836:73;40904:3;40893:9;40889:19;40880:6;40836:73;:::i;:::-;40919;40987:3;40976:9;40972:19;40963:6;40919:73;:::i;:::-;41002;41070:3;41059:9;41055:19;41046:6;41002:73;:::i;:::-;41085;41153:3;41142:9;41138:19;41129:6;41085:73;:::i;:::-;40168:997;;;;;;;;;;;:::o;41171:161::-;41311:13;41307:1;41299:6;41295:14;41288:37;41171:161;:::o;41338:366::-;41480:3;41501:67;41565:2;41560:3;41501:67;:::i;:::-;41494:74;;41577:93;41666:3;41577:93;:::i;:::-;41695:2;41690:3;41686:12;41679:19;;41338:366;;;:::o;41710:419::-;41876:4;41914:2;41903:9;41899:18;41891:26;;41963:9;41957:4;41953:20;41949:1;41938:9;41934:17;41927:47;41991:131;42117:4;41991:131;:::i;:::-;41983:139;;41710:419;;;:::o;42135:167::-;42275:19;42271:1;42263:6;42259:14;42252:43;42135:167;:::o;42308:366::-;42450:3;42471:67;42535:2;42530:3;42471:67;:::i;:::-;42464:74;;42547:93;42636:3;42547:93;:::i;:::-;42665:2;42660:3;42656:12;42649:19;;42308:366;;;:::o;42680:419::-;42846:4;42884:2;42873:9;42869:18;42861:26;;42933:9;42927:4;42923:20;42919:1;42908:9;42904:17;42897:47;42961:131;43087:4;42961:131;:::i;:::-;42953:139;;42680:419;;;:::o;43105:169::-;43245:21;43241:1;43233:6;43229:14;43222:45;43105:169;:::o;43280:366::-;43422:3;43443:67;43507:2;43502:3;43443:67;:::i;:::-;43436:74;;43519:93;43608:3;43519:93;:::i;:::-;43637:2;43632:3;43628:12;43621:19;;43280:366;;;:::o;43652:419::-;43818:4;43856:2;43845:9;43841:18;43833:26;;43905:9;43899:4;43895:20;43891:1;43880:9;43876:17;43869:47;43933:131;44059:4;43933:131;:::i;:::-;43925:139;;43652:419;;;:::o;44077:168::-;44217:20;44213:1;44205:6;44201:14;44194:44;44077:168;:::o;44251:366::-;44393:3;44414:67;44478:2;44473:3;44414:67;:::i;:::-;44407:74;;44490:93;44579:3;44490:93;:::i;:::-;44608:2;44603:3;44599:12;44592:19;;44251:366;;;:::o;44623:419::-;44789:4;44827:2;44816:9;44812:18;44804:26;;44876:9;44870:4;44866:20;44862:1;44851:9;44847:17;44840:47;44904:131;45030:4;44904:131;:::i;:::-;44896:139;;44623:419;;;:::o;45048:171::-;45188:23;45184:1;45176:6;45172:14;45165:47;45048:171;:::o;45225:366::-;45367:3;45388:67;45452:2;45447:3;45388:67;:::i;:::-;45381:74;;45464:93;45553:3;45464:93;:::i;:::-;45582:2;45577:3;45573:12;45566:19;;45225:366;;;:::o;45597:419::-;45763:4;45801:2;45790:9;45786:18;45778:26;;45850:9;45844:4;45840:20;45836:1;45825:9;45821:17;45814:47;45878:131;46004:4;45878:131;:::i;:::-;45870:139;;45597:419;;;:::o;46022:104::-;46067:7;46096:24;46114:5;46096:24;:::i;:::-;46085:35;;46022:104;;;:::o;46132:138::-;46213:32;46239:5;46213:32;:::i;:::-;46206:5;46203:43;46193:71;;46260:1;46257;46250:12;46193:71;46132:138;:::o;46276:155::-;46330:5;46368:6;46355:20;46346:29;;46384:41;46419:5;46384:41;:::i;:::-;46276:155;;;;:::o;46437:506::-;46521:6;46529;46578:2;46566:9;46557:7;46553:23;46549:32;46546:119;;;46584:79;;:::i;:::-;46546:119;46704:1;46729:61;46782:7;46773:6;46762:9;46758:22;46729:61;:::i;:::-;46719:71;;46675:125;46839:2;46865:61;46918:7;46909:6;46898:9;46894:22;46865:61;:::i;:::-;46855:71;;46810:126;46437:506;;;;;:::o;46949:177::-;47089:29;47085:1;47077:6;47073:14;47066:53;46949:177;:::o;47132:366::-;47274:3;47295:67;47359:2;47354:3;47295:67;:::i;:::-;47288:74;;47371:93;47460:3;47371:93;:::i;:::-;47489:2;47484:3;47480:12;47473:19;;47132:366;;;:::o;47504:419::-;47670:4;47708:2;47697:9;47693:18;47685:26;;47757:9;47751:4;47747:20;47743:1;47732:9;47728:17;47721:47;47785:131;47911:4;47785:131;:::i;:::-;47777:139;;47504:419;;;:::o;47929:122::-;48002:24;48020:5;48002:24;:::i;:::-;47995:5;47992:35;47982:63;;48041:1;48038;48031:12;47982:63;47929:122;:::o;48057:143::-;48114:5;48145:6;48139:13;48130:22;;48161:33;48188:5;48161:33;:::i;:::-;48057:143;;;;:::o;48206:90::-;48241:7;48284:5;48281:1;48270:20;48259:31;;48206:90;;;:::o;48302:118::-;48373:22;48389:5;48373:22;:::i;:::-;48366:5;48363:33;48353:61;;48410:1;48407;48400:12;48353:61;48302:118;:::o;48426:139::-;48481:5;48512:6;48506:13;48497:22;;48528:31;48553:5;48528:31;:::i;:::-;48426:139;;;;:::o;48571:89::-;48607:7;48647:6;48640:5;48636:18;48625:29;;48571:89;;;:::o;48666:120::-;48738:23;48755:5;48738:23;:::i;:::-;48731:5;48728:34;48718:62;;48776:1;48773;48766:12;48718:62;48666:120;:::o;48792:141::-;48848:5;48879:6;48873:13;48864:22;;48895:32;48921:5;48895:32;:::i;:::-;48792:141;;;;:::o;48939:86::-;48974:7;49014:4;49007:5;49003:16;48992:27;;48939:86;;;:::o;49031:118::-;49102:22;49118:5;49102:22;:::i;:::-;49095:5;49092:33;49082:61;;49139:1;49136;49129:12;49082:61;49031:118;:::o;49155:139::-;49210:5;49241:6;49235:13;49226:22;;49257:31;49282:5;49257:31;:::i;:::-;49155:139;;;;:::o;49300:116::-;49370:21;49385:5;49370:21;:::i;:::-;49363:5;49360:32;49350:60;;49406:1;49403;49396:12;49350:60;49300:116;:::o;49422:137::-;49476:5;49507:6;49501:13;49492:22;;49523:30;49547:5;49523:30;:::i;:::-;49422:137;;;;:::o;49565:1271::-;49679:6;49687;49695;49703;49711;49719;49727;49776:3;49764:9;49755:7;49751:23;49747:33;49744:120;;;49783:79;;:::i;:::-;49744:120;49903:1;49928:64;49984:7;49975:6;49964:9;49960:22;49928:64;:::i;:::-;49918:74;;49874:128;50041:2;50067:62;50121:7;50112:6;50101:9;50097:22;50067:62;:::i;:::-;50057:72;;50012:127;50178:2;50204:63;50259:7;50250:6;50239:9;50235:22;50204:63;:::i;:::-;50194:73;;50149:128;50316:2;50342:63;50397:7;50388:6;50377:9;50373:22;50342:63;:::i;:::-;50332:73;;50287:128;50454:3;50481:63;50536:7;50527:6;50516:9;50512:22;50481:63;:::i;:::-;50471:73;;50425:129;50593:3;50620:62;50674:7;50665:6;50654:9;50650:22;50620:62;:::i;:::-;50610:72;;50564:128;50731:3;50758:61;50811:7;50802:6;50791:9;50787:22;50758:61;:::i;:::-;50748:71;;50702:127;49565:1271;;;;;;;;;;:::o;50842:332::-;50963:4;51001:2;50990:9;50986:18;50978:26;;51014:71;51082:1;51071:9;51067:17;51058:6;51014:71;:::i;:::-;51095:72;51163:2;51152:9;51148:18;51139:6;51095:72;:::i;:::-;50842:332;;;;;:::o;51180:115::-;51265:23;51282:5;51265:23;:::i;:::-;51260:3;51253:36;51180:115;;:::o;51301:98::-;51352:6;51386:5;51380:12;51370:22;;51301:98;;;:::o;51405:168::-;51488:11;51522:6;51517:3;51510:19;51562:4;51557:3;51553:14;51538:29;;51405:168;;;;:::o;51579:246::-;51660:1;51670:113;51684:6;51681:1;51678:13;51670:113;;;51769:1;51764:3;51760:11;51754:18;51750:1;51745:3;51741:11;51734:39;51706:2;51703:1;51699:10;51694:15;;51670:113;;;51817:1;51808:6;51803:3;51799:16;51792:27;51641:184;51579:246;;;:::o;51831:373::-;51917:3;51945:38;51977:5;51945:38;:::i;:::-;51999:70;52062:6;52057:3;51999:70;:::i;:::-;51992:77;;52078:65;52136:6;52131:3;52124:4;52117:5;52113:16;52078:65;:::i;:::-;52168:29;52190:6;52168:29;:::i;:::-;52163:3;52159:39;52152:46;;51921:283;51831:373;;;;:::o;52210:735::-;52425:4;52463:3;52452:9;52448:19;52440:27;;52477:71;52545:1;52534:9;52530:17;52521:6;52477:71;:::i;:::-;52558:66;52620:2;52609:9;52605:18;52596:6;52558:66;:::i;:::-;52634:70;52700:2;52689:9;52685:18;52676:6;52634:70;:::i;:::-;52714:72;52782:2;52771:9;52767:18;52758:6;52714:72;:::i;:::-;52834:9;52828:4;52824:20;52818:3;52807:9;52803:19;52796:49;52862:76;52933:4;52924:6;52862:76;:::i;:::-;52854:84;;52210:735;;;;;;;;:::o;52951:141::-;53007:5;53038:6;53032:13;53023:22;;53054:32;53080:5;53054:32;:::i;:::-;52951:141;;;;:::o;53098:503::-;53175:6;53183;53232:2;53220:9;53211:7;53207:23;53203:32;53200:119;;;53238:79;;:::i;:::-;53200:119;53358:1;53383:63;53438:7;53429:6;53418:9;53414:22;53383:63;:::i;:::-;53373:73;;53329:127;53495:2;53521:63;53576:7;53567:6;53556:9;53552:22;53521:63;:::i;:::-;53511:73;;53466:128;53098:503;;;;;:::o;53607:174::-;53747:26;53743:1;53735:6;53731:14;53724:50;53607:174;:::o;53787:366::-;53929:3;53950:67;54014:2;54009:3;53950:67;:::i;:::-;53943:74;;54026:93;54115:3;54026:93;:::i;:::-;54144:2;54139:3;54135:12;54128:19;;53787:366;;;:::o;54159:419::-;54325:4;54363:2;54352:9;54348:18;54340:26;;54412:9;54406:4;54402:20;54398:1;54387:9;54383:17;54376:47;54440:131;54566:4;54440:131;:::i;:::-;54432:139;;54159:419;;;:::o;54584:105::-;54659:23;54676:5;54659:23;:::i;:::-;54654:3;54647:36;54584:105;;:::o;54695:102::-;54768:22;54784:5;54768:22;:::i;:::-;54763:3;54756:35;54695:102;;:::o;54905:2137::-;55058:6;55053:3;55049:16;55149:4;55142:5;55138:16;55132:23;55168:63;55225:4;55220:3;55216:14;55202:12;55168:63;:::i;:::-;55075:166;55325:4;55318:5;55314:16;55308:23;55344:63;55401:4;55396:3;55392:14;55378:12;55344:63;:::i;:::-;55251:166;55498:4;55491:5;55487:16;55481:23;55517:61;55572:4;55567:3;55563:14;55549:12;55517:61;:::i;:::-;55427:161;55675:4;55668:5;55664:16;55658:23;55694:59;55747:4;55742:3;55738:14;55724:12;55694:59;:::i;:::-;55598:165;55850:4;55843:5;55839:16;55833:23;55869:59;55922:4;55917:3;55913:14;55899:12;55869:59;:::i;:::-;55773:165;56030:4;56023:5;56019:16;56013:23;56049:63;56106:4;56101:3;56097:14;56083:12;56049:63;:::i;:::-;55948:174;56214:4;56207:5;56203:16;56197:23;56233:63;56290:4;56285:3;56281:14;56267:12;56233:63;:::i;:::-;56132:174;56394:4;56387:5;56383:16;56377:23;56413:63;56470:4;56465:3;56461:14;56447:12;56413:63;:::i;:::-;56316:170;56574:6;56567:5;56563:18;56557:25;56595:65;56652:6;56647:3;56643:16;56629:12;56595:65;:::i;:::-;56496:174;56757:6;56750:5;56746:18;56740:25;56778:65;56835:6;56830:3;56826:16;56812:12;56778:65;:::i;:::-;56680:173;56939:6;56932:5;56928:18;56922:25;56960:65;57017:6;57012:3;57008:16;56994:12;56960:65;:::i;:::-;56863:172;55027:2015;54905:2137;;:::o;57048:335::-;57197:4;57235:3;57224:9;57220:19;57212:27;;57249:127;57373:1;57362:9;57358:17;57349:6;57249:127;:::i;:::-;57048:335;;;;:::o;57389:122::-;57462:24;57480:5;57462:24;:::i;:::-;57455:5;57452:35;57442:63;;57501:1;57498;57491:12;57442:63;57389:122;:::o;57517:143::-;57574:5;57605:6;57599:13;57590:22;;57621:33;57648:5;57621:33;:::i;:::-;57517:143;;;;:::o;57666:820::-;57763:6;57771;57779;57787;57836:3;57824:9;57815:7;57811:23;57807:33;57804:120;;;57843:79;;:::i;:::-;57804:120;57963:1;57988:64;58044:7;58035:6;58024:9;58020:22;57988:64;:::i;:::-;57978:74;;57934:128;58101:2;58127:64;58183:7;58174:6;58163:9;58159:22;58127:64;:::i;:::-;58117:74;;58072:129;58240:2;58266:64;58322:7;58313:6;58302:9;58298:22;58266:64;:::i;:::-;58256:74;;58211:129;58379:2;58405:64;58461:7;58452:6;58441:9;58437:22;58405:64;:::i;:::-;58395:74;;58350:129;57666:820;;;;;;;:::o;58492:85::-;58537:7;58566:5;58555:16;;58492:85;;;:::o;58583:158::-;58641:9;58674:61;58692:42;58701:32;58727:5;58701:32;:::i;:::-;58692:42;:::i;:::-;58674:61;:::i;:::-;58661:74;;58583:158;;;:::o;58747:147::-;58842:45;58881:5;58842:45;:::i;:::-;58837:3;58830:58;58747:147;;:::o;58900:601::-;59101:4;59139:3;59128:9;59124:19;59116:27;;59153:71;59221:1;59210:9;59206:17;59197:6;59153:71;:::i;:::-;59234:80;59310:2;59299:9;59295:18;59286:6;59234:80;:::i;:::-;59324;59400:2;59389:9;59385:18;59376:6;59324:80;:::i;:::-;59414;59490:2;59479:9;59475:18;59466:6;59414:80;:::i;:::-;58900:601;;;;;;;:::o;59507:553::-;59684:4;59722:3;59711:9;59707:19;59699:27;;59736:71;59804:1;59793:9;59789:17;59780:6;59736:71;:::i;:::-;59817:72;59885:2;59874:9;59870:18;59861:6;59817:72;:::i;:::-;59899;59967:2;59956:9;59952:18;59943:6;59899:72;:::i;:::-;59981;60049:2;60038:9;60034:18;60025:6;59981:72;:::i;:::-;59507:553;;;;;;;:::o;60066:158::-;60206:10;60202:1;60194:6;60190:14;60183:34;60066:158;:::o;60230:365::-;60372:3;60393:66;60457:1;60452:3;60393:66;:::i;:::-;60386:73;;60468:93;60557:3;60468:93;:::i;:::-;60586:2;60581:3;60577:12;60570:19;;60230:365;;;:::o;60601:419::-;60767:4;60805:2;60794:9;60790:18;60782:26;;60854:9;60848:4;60844:20;60840:1;60829:9;60825:17;60818:47;60882:131;61008:4;60882:131;:::i;:::-;60874:139;;60601:419;;;:::o;61026:175::-;61166:27;61162:1;61154:6;61150:14;61143:51;61026:175;:::o;61207:366::-;61349:3;61370:67;61434:2;61429:3;61370:67;:::i;:::-;61363:74;;61446:93;61535:3;61446:93;:::i;:::-;61564:2;61559:3;61555:12;61548:19;;61207:366;;;:::o;61579:419::-;61745:4;61783:2;61772:9;61768:18;61760:26;;61832:9;61826:4;61822:20;61818:1;61807:9;61803:17;61796:47;61860:131;61986:4;61860:131;:::i;:::-;61852:139;;61579:419;;;:::o;62004:165::-;62144:17;62140:1;62132:6;62128:14;62121:41;62004:165;:::o;62175:366::-;62317:3;62338:67;62402:2;62397:3;62338:67;:::i;:::-;62331:74;;62414:93;62503:3;62414:93;:::i;:::-;62532:2;62527:3;62523:12;62516:19;;62175:366;;;:::o;62547:419::-;62713:4;62751:2;62740:9;62736:18;62728:26;;62800:9;62794:4;62790:20;62786:1;62775:9;62771:17;62764:47;62828:131;62954:4;62828:131;:::i;:::-;62820:139;;62547:419;;;:::o;62972:164::-;63112:16;63108:1;63100:6;63096:14;63089:40;62972:164;:::o;63142:366::-;63284:3;63305:67;63369:2;63364:3;63305:67;:::i;:::-;63298:74;;63381:93;63470:3;63381:93;:::i;:::-;63499:2;63494:3;63490:12;63483:19;;63142:366;;;:::o;63514:419::-;63680:4;63718:2;63707:9;63703:18;63695:26;;63767:9;63761:4;63757:20;63753:1;63742:9;63738:17;63731:47;63795:131;63921:4;63795:131;:::i;:::-;63787:139;;63514:419;;;:::o;63939:173::-;64079:25;64075:1;64067:6;64063:14;64056:49;63939:173;:::o;64118:366::-;64260:3;64281:67;64345:2;64340:3;64281:67;:::i;:::-;64274:74;;64357:93;64446:3;64357:93;:::i;:::-;64475:2;64470:3;64466:12;64459:19;;64118:366;;;:::o;64490:419::-;64656:4;64694:2;64683:9;64679:18;64671:26;;64743:9;64737:4;64733:20;64729:1;64718:9;64714:17;64707:47;64771:131;64897:4;64771:131;:::i;:::-;64763:139;;64490:419;;;:::o;64915:165::-;65055:17;65051:1;65043:6;65039:14;65032:41;64915:165;:::o;65086:366::-;65228:3;65249:67;65313:2;65308:3;65249:67;:::i;:::-;65242:74;;65325:93;65414:3;65325:93;:::i;:::-;65443:2;65438:3;65434:12;65427:19;;65086:366;;;:::o;65458:419::-;65624:4;65662:2;65651:9;65647:18;65639:26;;65711:9;65705:4;65701:20;65697:1;65686:9;65682:17;65675:47;65739:131;65865:4;65739:131;:::i;:::-;65731:139;;65458:419;;;:::o;65883:180::-;66023:32;66019:1;66011:6;66007:14;66000:56;65883:180;:::o;66069:366::-;66211:3;66232:67;66296:2;66291:3;66232:67;:::i;:::-;66225:74;;66308:93;66397:3;66308:93;:::i;:::-;66426:2;66421:3;66417:12;66410:19;;66069:366;;;:::o;66441:419::-;66607:4;66645:2;66634:9;66630:18;66622:26;;66694:9;66688:4;66684:20;66680:1;66669:9;66665:17;66658:47;66722:131;66848:4;66722:131;:::i;:::-;66714:139;;66441:419;;;:::o;66866:170::-;66896:1;66913:18;66929:1;66913:18;:::i;:::-;66908:23;;66945:18;66961:1;66945:18;:::i;:::-;66940:23;;66982:1;66972:35;;66987:18;;:::i;:::-;66972:35;67028:1;67025;67021:9;67016:14;;66866:170;;;;:::o",
    "linkReferences": {},
    "immutableReferences": {
      "5637": [
        {
          "start": 3878,
          "length": 32
        },
        {
          "start": 5184,
          "length": 32
        },
        {
          "start": 6743,
          "length": 32
        },
        {
          "start": 13055,
          "length": 32
        },
        {
          "start": 13135,
          "length": 32
        },
        {
          "start": 13212,
          "length": 32
        },
        {
          "start": 13883,
          "length": 32
        },
        {
          "start": 13963,
          "length": 32
        }
      ]
    }
  },
  "methodIdentifiers": {
    "MAX_FEE_BPS()": "d55be8c6",
    "MAX_LP_FEE_SHARE_BPS()": "fdfae486",
    "MIN_LIQUIDITY_BPS()": "75f0c2f0",
    "POOL_FEE()": "dd1b9c4a",
    "auctionCount()": "2ad71573",
    "auctions(uint256)": "571a26a0",
    "buyTokens(uint256,uint256,uint256)": "a4ce25a7",
    "collectFees(uint256)": "b17acdcd",
    "completeAuction(uint256)": "21b62886",
    "createAuction((string,string,uint256,address,uint256,uint256,uint256,uint256,uint256,uint256))": "b905fe56",
    "custodied(address)": "5c471ad5",
    "defaultFeeBps()": "bcae25a4",
    "defaultLpFeeShareBps()": "3edb917d",
    "getBuyCost(uint256,uint256)": "121a257f",
    "getSpotPrice(uint256)": "0fda366d",
    "migrate(uint256)": "454b0608",
    "owner()": "8da5cb5b",
    "poolOf(uint256)": "83966021",
    "positionId(uint256)": "54147e9e",
    "positionManager()": "791b98bc",
    "proceedsWithdrawn(uint256)": "48f719e5",
    "protocolFeeRecipient()": "64df049e",
    "renounceOwnership()": "715018a6",
    "setDefaultFeeBps(uint256)": "4373a286",
    "setDefaultLpFeeShareBps(uint256)": "09e06259",
    "setProtocolFeeRecipient(address)": "e521cb92",
    "sweep(address,address)": "b8dc491b",
    "transferOwnership(address)": "f2fde38b",
    "uniswapV3SwapCallback(int256,int256,bytes)": "fa461e33",
    "userPurchases(uint256,address)": "efc20dad",
    "withdrawProceeds(uint256)": "d9f1aed9"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.24+commit.e11b9ed9\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"feeRecipient_\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"defaultFeeBps_\",\"type\":\"uint256\"},{\"internalType\":\"contract INonfungiblePositionManager\",\"name\":\"positionManager_\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnableInvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"OwnableUnauthorizedAccount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"totalRaised\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"totalSold\",\"type\":\"uint256\"}],\"name\":\"AuctionCompleted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"creator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"paymentToken\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"slope\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maxRaise\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"startTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"endTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"liquidityBps\",\"type\":\"uint256\"}],\"name\":\"AuctionCreated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"pool\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"positionId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenLiquidity\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"paymentLiquidity\",\"type\":\"uint256\"}],\"name\":\"AuctionMigrated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"previous\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"current\",\"type\":\"uint256\"}],\"name\":\"DefaultFeeBpsUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"previous\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"current\",\"type\":\"uint256\"}],\"name\":\"DefaultLpFeeShareBpsUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"creatorTokenFees\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"creatorPaymentFees\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"protocolTokenFees\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"protocolPaymentFees\",\"type\":\"uint256\"}],\"name\":\"LpFeesCollected\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"creator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"ProceedsWithdrawn\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previous\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"current\",\"type\":\"address\"}],\"name\":\"ProtocolFeeRecipientUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Swept\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"buyer\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"cost\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"protocolFee\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newTotalRaised\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newTotalSold\",\"type\":\"uint256\"}],\"name\":\"TokensPurchased\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"MAX_FEE_BPS\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MAX_LP_FEE_SHARE_BPS\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MIN_LIQUIDITY_BPS\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"POOL_FEE\",\"outputs\":[{\"internalType\":\"uint24\",\"name\":\"\",\"type\":\"uint24\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"auctionCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"auctions\",\"outputs\":[{\"components\":[{\"internalType\":\"contract AuctionToken\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"paymentToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"basePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"slope\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"maxRaise\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"startTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"endTime\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"creator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"protocolFeeBps\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"liquidityBps\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpFeeShareBps\",\"type\":\"uint256\"}],\"internalType\":\"struct TokenAuction.AuctionConfig\",\"name\":\"config\",\"type\":\"tuple\"},{\"internalType\":\"enum TokenAuction.AuctionState\",\"name\":\"state\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"totalRaised\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalSold\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"maxCost\",\"type\":\"uint256\"}],\"name\":\"buyTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"}],\"name\":\"collectFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenFees\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"paymentFees\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"}],\"name\":\"completeAuction\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"maxSupply\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"paymentToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"basePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"slope\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"maxRaise\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"startTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"endTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"liquidityBps\",\"type\":\"uint256\"}],\"internalType\":\"struct TokenAuction.AuctionParams\",\"name\":\"p\",\"type\":\"tuple\"}],\"name\":\"createAuction\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"custodied\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"defaultFeeBps\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"defaultLpFeeShareBps\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"getBuyCost\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"cost\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"fee\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"}],\"name\":\"getSpotPrice\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"}],\"name\":\"migrate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"poolOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"positionId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"positionManager\",\"outputs\":[{\"internalType\":\"contract INonfungiblePositionManager\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"proceedsWithdrawn\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"protocolFeeRecipient\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"feeBps\",\"type\":\"uint256\"}],\"name\":\"setDefaultFeeBps\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shareBps\",\"type\":\"uint256\"}],\"name\":\"setDefaultLpFeeShareBps\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"}],\"name\":\"setProtocolFeeRecipient\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"sweep\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"amount0Delta\",\"type\":\"int256\"},{\"internalType\":\"int256\",\"name\":\"amount1Delta\",\"type\":\"int256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"uniswapV3SwapCallback\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"userPurchases\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"}],\"name\":\"withdrawProceeds\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"OwnableInvalidOwner(address)\":[{\"details\":\"The owner is not a valid owner account. (eg. `address(0)`)\"}],\"OwnableUnauthorizedAccount(address)\":[{\"details\":\"The caller account is not authorized to perform an operation.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC-20 token failed.\"}]},\"kind\":\"dev\",\"methods\":{\"buyTokens(uint256,uint256,uint256)\":{\"details\":\"A purchase that would overshoot `maxRaise` is filled with what the        remaining budget buys and closes the auction, so the buyer may        receive less than `amount`; `TokensPurchased` reports the actual        amount.\",\"params\":{\"maxCost\":\"Most the buyer will pay in total (cost + protocol fee), in        payment-token units. The price rises with every purchase, so a        quote can be stale by the time a transaction lands; this bound        makes the buy revert instead of filling at a worse price.\"}},\"migrate(uint256)\":{\"details\":\"Opens (or corrects) the pool at the auction's final price, adds         full-range liquidity from the reserved share of the raise plus         newly minted tokens, and keeps the position NFT forever. Never         leaves tokens permanently locked: if there is nothing to pair, or         Uniswap rejects the position, transfers are unlocked anyway and         the reserved funds go to the creator.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"},\"withdrawProceeds(uint256)\":{\"details\":\"Callable once, by the creator, once the auction has completed,      before or after migration. Pays the part of the raise not reserved      for liquidity. Protocol fees are routed to the fee recipient at buy      time, so the contract custodies exactly `totalRaised` per auction.\"}},\"stateVariables\":{\"MIN_USABLE_TICK\":{\"details\":\"Full-range bounds for the 1% tier (tick spacing 200), i.e.      TickMath's MIN/MAX_TICK rounded inward to a multiple of 200.\"},\"_activePool\":{\"details\":\"Set only for the duration of a price-correction swap, so the swap      callback can be authenticated.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"MAX_FEE_BPS()\":{\"notice\":\"Upper bound on the protocol fee, so the owner can never set a         fee that confiscates a meaningful share of a purchase.\"},\"MAX_LP_FEE_SHARE_BPS()\":{\"notice\":\"Upper bound on the protocol's share of trading fees, so a         creator always keeps at least half.\"},\"MIN_LIQUIDITY_BPS()\":{\"notice\":\"Smallest share of the raise a creator may commit to the         Uniswap pool, so no launch ships with a token too thinly         traded to be usable.\"},\"POOL_FEE()\":{\"notice\":\"Pool fee tier for migrated liquidity: 1%, the usual tier for         newly launched, volatile tokens.\"},\"buyTokens(uint256,uint256,uint256)\":{\"notice\":\"Buy `amount` tokens (in token wei) from an active auction.\"},\"collectFees(uint256)\":{\"notice\":\"Collect the migrated pool's trading fees: the protocol takes its         share and the creator receives the rest. Anyone may trigger it.\"},\"custodied(address)\":{\"notice\":\"Payment tokens this contract owes to auction creators, per token:         the sum of `totalRaised` across auctions not yet withdrawn.         Anything held above this is excess (e.g. tokens sent here         directly) and can be recovered with `sweep`.\"},\"migrate(uint256)\":{\"notice\":\"Move a completed auction's liquidity into Uniswap v3 and unlock         its token. Anyone may call it, so a creator can never hold the         token hostage by not migrating.\"},\"positionId(uint256)\":{\"notice\":\"The Uniswap position NFT holding each auction's liquidity. This         contract keeps it forever, so the liquidity is permanently locked.\"},\"setDefaultFeeBps(uint256)\":{\"notice\":\"Change the fee for auctions created from now on. Existing         auctions keep the fee they were created with, so a creator's         terms can never change mid-sale.\"},\"setDefaultLpFeeShareBps(uint256)\":{\"notice\":\"Change the protocol's share of trading fees for auctions created         from now on. Existing auctions keep the share they were created         with.\"},\"setProtocolFeeRecipient(address)\":{\"notice\":\"Change where protocol fees are sent. Applies to purchases made         after the change, in every auction.\"},\"sweep(address,address)\":{\"notice\":\"Recover tokens held above what is owed to auction creators,         such as tokens transferred to this contract directly. Funds         backing an unwithdrawn auction can never be swept.\"},\"withdrawProceeds(uint256)\":{\"notice\":\"Transfer an auction's raised payment tokens to its creator.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/TokenAuction.sol\":\"TokenAuction\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/access/Ownable.sol\":{\"keccak256\":\"0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6\",\"dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC1363.sol\":{\"keccak256\":\"0xd5ea07362ab630a6a3dee4285a74cf2377044ca2e4be472755ad64d7c5d4b69d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://da5e832b40fc5c3145d3781e2e5fa60ac2052c9d08af7e300dc8ab80c4343100\",\"dweb:/ipfs/QmTzf7N5ZUdh5raqtzbM11yexiUoLC9z3Ws632MCuycq1d\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC165.sol\":{\"keccak256\":\"0x0afcb7e740d1537b252cb2676f600465ce6938398569f09ba1b9ca240dde2dfc\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1c299900ac4ec268d4570ecef0d697a3013cd11a6eb74e295ee3fbc945056037\",\"dweb:/ipfs/Qmab9owJoxcA7vJT5XNayCMaUR1qxqj1NDzzisduwaJMcZ\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC20.sol\":{\"keccak256\":\"0x1a6221315ce0307746c2c4827c125d821ee796c74a676787762f4778671d4f44\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1bb2332a7ee26dd0b0de9b7fe266749f54820c99ab6a3bcb6f7e6b751d47ee2d\",\"dweb:/ipfs/QmcRWpaBeCYkhy68PR3B4AgD7asuQk7PwkWxrvJbZcikLF\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x1b88b3fb3d85ba5496d7d5f396f83ee1fddcdd6762059ff65992655b67920998\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://89393bb3212da1c0889601b9706a07b39419ddc4d2faab9eaf6e7f9152cf6a1c\",\"dweb:/ipfs/QmcCfzzxv1Bkdz1c1yF4gQCeYb6Us5BJANnzTFqawfd1HL\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0x669464167428061ee0f8618b73b3ee90aff8405683e7ddde8cd77dadaa1afe29\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0dda78587a7358b4fdf6b9fca0fde5a5e34930f36d5268a16028627fc0170195\",\"dweb:/ipfs/QmQ1b6cCceDRWNxti9HifsTCzmVP25Haxs1bWugm52vTqH\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x74ed01eb66b923d0d0cfe3be84604ac04b76482a55f9dd655e1ef4d367f95bc2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5282825a626cfe924e504274b864a652b0023591fa66f06a067b25b51ba9b303\",\"dweb:/ipfs/QmeCfPykghhMc81VJTrHTC7sF6CRvaA1FXVq2pJhwYp1dV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xd6fa4088198f04eef10c5bce8a2f4d60554b7ec4b987f684393c01bf79b94d9f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f95ee0bbd4dd3ac730d066ba3e785ded4565e890dbec2fa7d3b9fe3bad9d0d6e\",\"dweb:/ipfs/QmSLr6bHkPFWT7ntj34jmwfyskpwo97T9jZUrk5sz3sdtR\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x304d732678032a9781ae85c8f204c8fba3d3a5e31c02616964e75cfdc5049098\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://299ced486011781dc98f638059678323c03079fefae1482abaa2135b22fa92d0\",\"dweb:/ipfs/QmbZNbcPTBxNvwChavN2kkZZs7xHhYL7mv51KrxMhsMs3j\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/Panic.sol\":{\"keccak256\":\"0xf7fe324703a64fc51702311dc51562d5cb1497734f074e4f483bfb6717572d7a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c6a5ff4f9fd8649b7ee20800b7fa387d3465bd77cf20c2d1068cd5c98e1ed57a\",\"dweb:/ipfs/QmVSaVJf9FXFhdYEYeCEfjMVHrxDh5qL4CGkxdMWpQCrqG\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xa516cbf1c7d15d3517c2d668601ce016c54395bf5171918a14e2686977465f53\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1e1d079e8edfb58efd23a311e315a4807b01b5d1cf153f8fa2d0608b9dec3e99\",\"dweb:/ipfs/QmTBExeX2SDTkn5xbk5ssbYSx7VqRp9H4Ux1CY4uQM4b9N\"]},\"lib/openzeppelin-contracts/contracts/utils/StorageSlot.sol\":{\"keccak256\":\"0xcf74f855663ce2ae00ed8352666b7935f6cddea2932fdf2c3ecd30a9b1cd0e97\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9f660b1f351b757dfe01438e59888f31f33ded3afcf5cb5b0d9bf9aa6f320a8b\",\"dweb:/ipfs/QmarDJ5hZEgBtCmmrVzEZWjub9769eD686jmzb2XpSU1cM\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x8891738ffe910f0cf2da09566928589bf5d63f4524dd734fd9cedbac3274dd5c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://971f954442df5c2ef5b5ebf1eb245d7105d9fbacc7386ee5c796df1d45b21617\",\"dweb:/ipfs/QmadRjHbkicwqwwh61raUEapaVEtaLMcYbQZWs9gUkgj3u\"]},\"lib/openzeppelin-contracts/contracts/utils/math/Math.sol\":{\"keccak256\":\"0x59973a93b1f983f94e10529f46ca46544a9fec2b5f56fb1390bbe9e0dc79f857\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c55ef8f0b9719790c2ae6f81d80a59ffb89f2f0abe6bc065585bd79edce058c5\",\"dweb:/ipfs/QmNNmCbX9NjPXKqHJN8R1WC2rNeZSQrPZLd6FF6AKLyH5Y\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SafeCast.sol\":{\"keccak256\":\"0xc8cae21c9ae4a46e5162ff9bf5b351d6fa6a6eba72d515f3bc1bdfeda7fdf083\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ce830ebcf28e31643caba318996db3763c36d52cd0f23798ba83c135355d45e9\",\"dweb:/ipfs/QmdGPcvptHN7UBCbUYBbRX3hiRVRFLRwno8b4uga6uFNif\"]},\"src/AuctionToken.sol\":{\"keccak256\":\"0x251d2a2f146029346379aab2d0ffae6429a8dd8d41bd465c8a120fc6779021db\",\"urls\":[\"bzz-raw://497fcd1086beb7041ec423447b2011b4df75158f60bd46a80359abd3c937f4be\",\"dweb:/ipfs/QmUbKikYGNDGuVrCErWNwbaiRUs3B1W965GHFPutwxhJBq\"]},\"src/BondingCurve.sol\":{\"keccak256\":\"0xa675c9c03d4861e61c3024a1b127b488cc2bf00e59036de34394ff41356b37ba\",\"urls\":[\"bzz-raw://59e2a0190a1bedc586163a9722676d40b78fc6d43eecc9adb9e4492cb052ee83\",\"dweb:/ipfs/QmP6vMBuDFiyrYFPRzVfKLhGYTVEPig8BofrqKGxqEyjJz\"]},\"src/TokenAuction.sol\":{\"keccak256\":\"0x771bf6a33c8b4aee39bbb92fb0471ae212325b10b2a75cdd1dad6071c3c159a2\",\"urls\":[\"bzz-raw://f3a0993888072c3dce76bcdaffd9677c3a9effcbcfa3e15234289ccd08725562\",\"dweb:/ipfs/QmZUN2u9PGqFTLT3bP5AZPZuDMHTC9XMfPAW937zEh3Y3y\"]},\"src/interfaces/IUniswapV3.sol\":{\"keccak256\":\"0x773e06f4c1ff91c0a1ee79d5fe77a3340b79625edb29773ddad1ed88769d27d0\",\"urls\":[\"bzz-raw://17946a5bd6c253000d6b0a3d5691ac163b40273fde3645534a3ed050a70053de\",\"dweb:/ipfs/QmPLHEnBjx1bbpBmwVAYqiD7KJDMvQY3jWoeWTMs81fwsm\"]}},\"version\":1}",
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
            },
            {
              "internalType": "contract INonfungiblePositionManager",
              "name": "positionManager_",
              "type": "address"
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
              "name": "pool",
              "type": "address",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "positionId",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "tokenLiquidity",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "paymentLiquidity",
              "type": "uint256",
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
          "name": "DefaultLpFeeShareBpsUpdated",
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
              "internalType": "uint256",
              "name": "creatorTokenFees",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "creatorPaymentFees",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "protocolTokenFees",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "protocolPaymentFees",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "LpFeesCollected",
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
          "name": "MAX_LP_FEE_SHARE_BPS",
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
          "name": "POOL_FEE",
          "outputs": [
            {
              "internalType": "uint24",
              "name": "",
              "type": "uint24"
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
                },
                {
                  "internalType": "uint256",
                  "name": "lpFeeShareBps",
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
          "name": "collectFees",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "tokenFees",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "paymentFees",
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
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "defaultLpFeeShareBps",
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
          "inputs": [
            {
              "internalType": "uint256",
              "name": "auctionId",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "migrate"
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
          "name": "poolOf",
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
          "name": "positionId",
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
          "name": "positionManager",
          "outputs": [
            {
              "internalType": "contract INonfungiblePositionManager",
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
              "internalType": "uint256",
              "name": "shareBps",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setDefaultLpFeeShareBps"
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
              "internalType": "int256",
              "name": "amount0Delta",
              "type": "int256"
            },
            {
              "internalType": "int256",
              "name": "amount1Delta",
              "type": "int256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "uniswapV3SwapCallback"
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
          "migrate(uint256)": {
            "details": "Opens (or corrects) the pool at the auction's final price, adds         full-range liquidity from the reserved share of the raise plus         newly minted tokens, and keeps the position NFT forever. Never         leaves tokens permanently locked: if there is nothing to pair, or         Uniswap rejects the position, transfers are unlocked anyway and         the reserved funds go to the creator."
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
            "details": "Callable once, by the creator, once the auction has completed,      before or after migration. Pays the part of the raise not reserved      for liquidity. Protocol fees are routed to the fee recipient at buy      time, so the contract custodies exactly `totalRaised` per auction."
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
          "MAX_LP_FEE_SHARE_BPS()": {
            "notice": "Upper bound on the protocol's share of trading fees, so a         creator always keeps at least half."
          },
          "MIN_LIQUIDITY_BPS()": {
            "notice": "Smallest share of the raise a creator may commit to the         Uniswap pool, so no launch ships with a token too thinly         traded to be usable."
          },
          "POOL_FEE()": {
            "notice": "Pool fee tier for migrated liquidity: 1%, the usual tier for         newly launched, volatile tokens."
          },
          "buyTokens(uint256,uint256,uint256)": {
            "notice": "Buy `amount` tokens (in token wei) from an active auction."
          },
          "collectFees(uint256)": {
            "notice": "Collect the migrated pool's trading fees: the protocol takes its         share and the creator receives the rest. Anyone may trigger it."
          },
          "custodied(address)": {
            "notice": "Payment tokens this contract owes to auction creators, per token:         the sum of `totalRaised` across auctions not yet withdrawn.         Anything held above this is excess (e.g. tokens sent here         directly) and can be recovered with `sweep`."
          },
          "migrate(uint256)": {
            "notice": "Move a completed auction's liquidity into Uniswap v3 and unlock         its token. Anyone may call it, so a creator can never hold the         token hostage by not migrating."
          },
          "positionId(uint256)": {
            "notice": "The Uniswap position NFT holding each auction's liquidity. This         contract keeps it forever, so the liquidity is permanently locked."
          },
          "setDefaultFeeBps(uint256)": {
            "notice": "Change the fee for auctions created from now on. Existing         auctions keep the fee they were created with, so a creator's         terms can never change mid-sale."
          },
          "setDefaultLpFeeShareBps(uint256)": {
            "notice": "Change the protocol's share of trading fees for auctions created         from now on. Existing auctions keep the share they were created         with."
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
        "keccak256": "0x251d2a2f146029346379aab2d0ffae6429a8dd8d41bd465c8a120fc6779021db",
        "urls": [
          "bzz-raw://497fcd1086beb7041ec423447b2011b4df75158f60bd46a80359abd3c937f4be",
          "dweb:/ipfs/QmUbKikYGNDGuVrCErWNwbaiRUs3B1W965GHFPutwxhJBq"
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
        "keccak256": "0x771bf6a33c8b4aee39bbb92fb0471ae212325b10b2a75cdd1dad6071c3c159a2",
        "urls": [
          "bzz-raw://f3a0993888072c3dce76bcdaffd9677c3a9effcbcfa3e15234289ccd08725562",
          "dweb:/ipfs/QmZUN2u9PGqFTLT3bP5AZPZuDMHTC9XMfPAW937zEh3Y3y"
        ],
        "license": null
      },
      "src/interfaces/IUniswapV3.sol": {
        "keccak256": "0x773e06f4c1ff91c0a1ee79d5fe77a3340b79625edb29773ddad1ed88769d27d0",
        "urls": [
          "bzz-raw://17946a5bd6c253000d6b0a3d5691ac163b40273fde3645534a3ed050a70053de",
          "dweb:/ipfs/QmPLHEnBjx1bbpBmwVAYqiD7KJDMvQY3jWoeWTMs81fwsm"
        ],
        "license": null
      }
    },
    "version": 1
  },
  "id": 18
} as const;
