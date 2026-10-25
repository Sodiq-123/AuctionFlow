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
              "name": "metadataURI",
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
      "name": "launch",
      "inputs": [
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
          "name": "metadataURI",
          "type": "string",
          "internalType": "string"
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
      "name": "launchPreset",
      "inputs": [],
      "outputs": [
        {
          "name": "paymentToken",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "maxSupply",
          "type": "uint256",
          "internalType": "uint256"
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
          "name": "liquidityBps",
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
      "name": "sellTokens",
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
          "name": "minProceeds",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
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
      "name": "setLaunchPreset",
      "inputs": [
        {
          "name": "preset",
          "type": "tuple",
          "internalType": "struct TokenAuction.LaunchPreset",
          "components": [
            {
              "name": "paymentToken",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "maxSupply",
              "type": "uint256",
              "internalType": "uint256"
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
              "name": "liquidityBps",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
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
          "name": "liquidityBps",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "metadataURI",
          "type": "string",
          "indexed": false,
          "internalType": "string"
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
      "name": "LaunchPresetUpdated",
      "inputs": [
        {
          "name": "paymentToken",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "maxSupply",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
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
      "type": "event",
      "name": "TokensSold",
      "inputs": [
        {
          "name": "auctionId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "seller",
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
          "name": "proceeds",
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
    "object": "0x60a060405234801562000010575f80fd5b50604051620052c9380380620052c9833981016040819052620000339162000211565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f005533806200007e57604051631e4fbdf760e01b81525f60048201526024015b60405180910390fd5b6200008981620001aa565b506001600160a01b038316620000d75760405162461bcd60e51b815260206004820152601260248201527116995c9bc8199959481c9958da5c1a595b9d60721b604482015260640162000075565b6001600160a01b0381166200012f5760405162461bcd60e51b815260206004820152601560248201527f5a65726f20706f736974696f6e206d616e616765720000000000000000000000604482015260640162000075565b6001600160a01b0381166080526103e88211156200017f5760405162461bcd60e51b815260206004820152600c60248201526b08ccaca40e8dede40d0d2ced60a31b604482015260640162000075565b50600580546001600160a01b0319166001600160a01b03939093169290921790915560065562000256565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146200020e575f80fd5b50565b5f805f6060848603121562000224575f80fd5b83516200023181620001f9565b6020850151604086015191945092506200024b81620001f9565b809150509250925092565b608051615029620002a05f395f818161051901528181610ddf0152818161184d01528181612a0101528181612a3c01528181612a6401528181612cb00152612ceb01526150295ff3fe608060405234801562000010575f80fd5b506004361062000228575f3560e01c8063715018a6116200012b578063bcae25a411620000b7578063e521cb921162000083578063e521cb921462000606578063efc20dad146200061d578063f2fde38b146200064a578063fa461e331462000661578063fdfae4861462000678575f80fd5b8063bcae25a414620005bc578063d55be8c614620005c6578063d9f1aed914620005d0578063dd1b9c4a14620005e7575f80fd5b80638da5cb5b11620000f75780638da5cb5b1462000566578063a4ce25a71462000577578063b17acdcd146200058e578063b8dc491b14620005a5575f80fd5b8063715018a614620004ff57806375f0c2f01462000509578063791b98bc146200051357806383966021146200053b575f80fd5b80634373a28611620001b7578063571a26a01162000183578063571a26a014620003c45780635c471ad5146200048257806364df049e14620004a4578063683931b414620004d1578063709ef23114620004e8575f80fd5b80634373a286146200033e578063454b0608146200035557806348f719e5146200036c57806354147e9e14620003a2575f80fd5b80633edb917d11620001f75780633edb917d14620002a65780633ef068d214620002b057806342a8151514620002c757806342f78e9114620002de575f80fd5b806309e06259146200022c5780630fda366d1462000245578063121a257f146200026f5780632ad71573146200029c575b5f80fd5b620002436200023d3660046200369d565b62000682565b005b6200025c620002563660046200369d565b62000716565b6040519081526020015b60405180910390f35b6200028662000280366004620036b5565b6200074a565b6040805192835260208301919091520162000266565b6200025c60015481565b6200025c60085481565b62000243620002c1366004620036d6565b620007a7565b6200025c620002d836600462003735565b620008c2565b600c54600d54600e54600f5460105460115462000306956001600160a01b0316949392919086565b604080516001600160a01b0390971687526020870195909552938501929092526060840152608083015260a082015260c00162000266565b620002436200034f3660046200369d565b62000a5d565b62000243620003663660046200369d565b62000aeb565b620003916200037d3660046200369d565b60046020525f908152604090205460ff1681565b604051901515815260200162000266565b6200025c620003b33660046200369d565b60096020525f908152604090205481565b62000470620003d53660046200369d565b600260208181525f92835260409283902083516101208101855281546001600160a01b03908116825260018301548116938201939093529281015493830193909352600383015460608301526004830154608083015260058301541660a0820152600682015460c0820152600782015460e082015260088201546101008201526009820154600a830154600b90930154919260ff9091169184565b60405162000266949392919062003807565b6200025c62000493366004620038db565b60076020525f908152604090205481565b600554620004b8906001600160a01b031681565b6040516001600160a01b03909116815260200162000266565b6200025c620004e2366004620038f9565b62001068565b62000243620004f936600462003934565b62001084565b62000243620013fc565b6200025c6107d081565b620004b87f000000000000000000000000000000000000000000000000000000000000000081565b620004b86200054c3660046200369d565b600a6020525f90815260409020546001600160a01b031681565b5f546001600160a01b0316620004b8565b620002436200058836600462003934565b62001413565b620002866200059f3660046200369d565b6200174c565b62000243620005b63660046200395e565b62001a00565b6200025c60065481565b6200025c6103e881565b62000243620005e13660046200369d565b62001bb9565b620005f161271081565b60405162ffffff909116815260200162000266565b6200024362000617366004620038db565b62001e2f565b6200025c6200062e3660046200399a565b600360209081525f928352604080842090915290825290205481565b620002436200065b366004620038db565b62001ee1565b6200024362000672366004620039c0565b62001f21565b6200025c61138881565b6200068c62001fe6565b611388811115620006d55760405162461bcd60e51b815260206004820152600e60248201526d0a6d0c2e4ca40e8dede40d0d2ced60931b60448201526064015b60405180910390fd5b60085460408051918252602082018390527fafd7016dba95bc0c303b0838ae8e4829497ed18cc6a0ed00eec5fc7c50148e17910160405180910390a1600855565b5f8181526002602081905260408220600b8101549181015460038201549192620007439290919062002014565b9392505050565b5f8281526002602081905260408220600b8101549181015460038201548493620007799290918791906200204a565b60068201549093506127109062000791908562003a27565b6200079d919062003a55565b9150509250929050565b620007b162001fe6565b5f620007c16020830183620038db565b6001600160a01b0316036200080e5760405162461bcd60e51b81526020600482015260126024820152712d32b937903830bcb6b2b73a103a37b5b2b760711b6044820152606401620006cc565b6200083181602001358260400135836060013584608001358560a00135620020e5565b80600c62000840828262003a6b565b507f29f62c75478dac4ea9396c9b5e58b4e29d6f7812c6eb05ceaf5d0c776db6b5769050620008736020830183620038db565b604080516001600160a01b039092168252602080850135908301528084013590820152606080840135908201526080808401359082015260a0808401359082015260c00160405180910390a150565b6040805160c081018252600c546001600160a01b0316808252600d546020830152600e5492820192909252600f546060820152601054608082015260115460a08201525f91620009485760405162461bcd60e51b815260206004820152601060248201526f139bc81b185d5b98da081c1c995cd95d60821b6044820152606401620006cc565b604080516101406020601f8b018190040282018101909252610120810189815262000a51928291908c908c90819085018382808284375f92019190915250505090825250604080516020601f8b0181900481028201810190925289815291810191908a908a90819084018382808284375f92019190915250505090825250604080516020601f8901819004810282018101909252878152918101919088908890819084018382808284375f920191909152505050908252506020848101519082015283516001600160a01b031660408083019190915284015160608083019190915284015160808083019190915284015160a08083019190915284015160c090910152620022d9565b98975050505050505050565b62000a6762001fe6565b6103e881111562000aaa5760405162461bcd60e51b815260206004820152600c60248201526b08ccaca40e8dede40d0d2ced60a31b6044820152606401620006cc565b60065460408051918252602082018390527f3062378541f1b58e0547bfb13e7d7585153e442e477e263c6e63d4775b3072a6910160405180910390a1600655565b62000af56200245e565b5f81815260026020819052604090912090600982015460ff16600381111562000b225762000b22620037d2565b1462000b695760405162461bcd60e51b8152602060048201526015602482015274105d58dd1a5bdb881b9bdd0818dbdb5c1b195d1959605a1b6044820152606401620006cc565b5f62000b75826200247c565b90505f62000b9583600b0154845f0160020154855f016003015462002014565b90505f62000bad83670de0b6b3a764000084620024a4565b6040805160c0810182525f606082018190526080820181905260a082015286546001600160a01b039081168083526001890154909116602083018190529081118284015291516370a0823160e01b8152306004820152929350918591906370a0823190602401602060405180830381865afa15801562000c2f573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000c55919062003aca565b62000c61919062003ae2565b608082015260098501805460ff191660031790556020808201516001600160a01b03165f908152600790915260408120805486929062000ca390849062003ae2565b92505081905550805f01516001600160a01b031663af35c6c76040518163ffffffff1660e01b81526004015f604051808303815f87803b15801562000ce6575f80fd5b505af115801562000cf9573d5f803e3d5ffd5b505050505f8411801562000d0c57505f82115b1562000e765780516040516340c10f1960e01b8152306004820152602481018490526001600160a01b03909116906340c10f19906044015f604051808303815f87803b15801562000d5b575f80fd5b505af115801562000d6e573d5f803e3d5ffd5b5050505062000d828382604001516200255e565b6001600160a01b031660608201525f8062000d9d8362002624565b60608501516040516309f56ab160e11b81526001600160a01b0380851660048301528084166024830152612710604483015291821660648201529294509092507f000000000000000000000000000000000000000000000000000000000000000016906313ead562906084016020604051808303815f875af115801562000e26573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000e4c919062003af8565b6001600160a01b031660a084015262000e678385886200264e565b62000e738884620028ea565b50505b80516040516370a0823160e01b81523060048201525f916001600160a01b0316906370a0823190602401602060405180830381865afa15801562000ebc573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000ee2919062003aca565b9050801562000f46578151604051630852cd8d60e31b8152600481018390526001600160a01b03909116906342966c68906024015f604051808303815f87803b15801562000f2e575f80fd5b505af115801562000f41573d5f803e3d5ffd5b505050505b608082015160208301516040516370a0823160e01b81523060048201525f92916001600160a01b0316906370a0823190602401602060405180830381865afa15801562000f95573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000fbb919062003aca565b62000fc7919062003ae2565b9050801562000ff3576005870154602084015162000ff3916001600160a01b0391821691168362002d11565b825f01516001600160a01b031663715018a66040518163ffffffff1660e01b81526004015f604051808303815f87803b1580156200102f575f80fd5b505af115801562001042573d5f803e3d5ffd5b50505050505050505050506200106560015f8051602062004fd483398151915255565b50565b5f6200107e620010788362003be8565b620022d9565b92915050565b6200108e6200245e565b5f8381526002602052604090206001600982015460ff166003811115620010b957620010b9620037d2565b14620010fd5760405162461bcd60e51b815260206004820152601260248201527141756374696f6e206e6f742061637469766560701b6044820152606401620006cc565b5f83116200113c5760405162461bcd60e51b815260206004820152600b60248201526a16995c9bc8185b5bdd5b9d60aa1b6044820152606401620006cc565b5f848152600360209081526040808320338452909152902054831115620011985760405162461bcd60e51b815260206004820152600f60248201526e457863656564732062616c616e636560881b6044820152606401620006cc565b5f620011b782600b015485845f0160020154855f016003015462002d4a565b90505f612710835f016006015483620011d1919062003a27565b620011dd919062003a55565b905083620011ec828462003ae2565b1015620012305760405162461bcd60e51b815260206004820152601160248201527014db1a5c1c1859d948195e18d959591959607a1b6044820152606401620006cc565b6001830154600a840180546001600160a01b03909216918491905f906200125990849062003ae2565b925050819055508584600b015f82825462001275919062003ae2565b90915550505f87815260036020908152604080832033845290915281208054889290620012a490849062003ae2565b90915550506001600160a01b0381165f9081526007602052604081208054859290620012d290849062003ae2565b9091555050835460405163079cc67960e41b8152336004820152602481018890526001600160a01b03909116906379cc6790906044015f604051808303815f87803b15801562001320575f80fd5b505af115801562001333573d5f803e3d5ffd5b505050505f8211156200135c576005546200135c906001600160a01b0383811691168462002d11565b6200137f336200136d848662003ae2565b6001600160a01b038416919062002d11565b600a840154600b850154604080518981526020810187905290810185905260608101929092526080820152339088907fd7fd93110c86e222ad62b2a786fdc3afd88c4c21f9092614ca01365ba432073c9060a00160405180910390a350505050620013f760015f8051602062004fd483398151915255565b505050565b6200140662001fe6565b620014115f62002ded565b565b6200141d6200245e565b5f8381526002602052604090206001600982015460ff166003811115620014485762001448620037d2565b146200148c5760405162461bcd60e51b815260206004820152601260248201527141756374696f6e206e6f742061637469766560701b6044820152606401620006cc565b5f8311620014cb5760405162461bcd60e51b815260206004820152600b60248201526a16995c9bc8185b5bdd5b9d60aa1b6044820152606401620006cc565b5f80620014d9838662002e3c565b600686015492975090935091505f9061271090620014f8908562003a27565b62001504919062003a55565b90508462001513828562003ccc565b1115620015575760405162461bcd60e51b815260206004820152601160248201527014db1a5c1c1859d948195e18d959591959607a1b6044820152606401620006cc565b8284600a015f8282546200156c919062003ccc565b925050819055508584600b015f82825462001588919062003ccc565b90915550505f87815260036020908152604080832033845290915281208054889290620015b790849062003ccc565b909155505060018401546001600160a01b03165f9081526007602052604081208054859290620015e990849062003ccc565b90915550508115620016055760098401805460ff191660021790555b600184015462001620906001600160a01b0316848362002f21565b83546040516340c10f1960e01b8152336004820152602481018890526001600160a01b03909116906340c10f19906044015f604051808303815f87803b15801562001669575f80fd5b505af11580156200167c573d5f803e3d5ffd5b50505050600a840154600b850154604080518981526020810187905290810184905260608101929092526080820152339088907fc938e879cd47aa84d5893377578d6c211ccd96f382228c42c1bb6a8eaa71a0849060a00160405180910390a381156200173057867fc7502df20ccf846bf5005f01564bb502b56dcec19f0e2d0575c4369cc5e3b53b85600a015486600b015460405162001727929190918252602082015260400190565b60405180910390a25b50505050620013f760015f8051602062004fd483398151915255565b5f80620017586200245e565b5f8381526002602052604090206003600982015460ff166003811115620017835762001783620037d2565b1480156200179d57505f8481526009602052604090205415155b620017d95760405162461bcd60e51b815260206004820152600b60248201526a2737903837b9b4ba34b7b760a91b6044820152606401620006cc565b604080516080810182525f86815260096020908152838220548352309083019081526001600160801b0383850181815260608501828152955163fc6f786560e01b81529451600486015291516001600160a01b039081166024860152915181166044850152935190931660648301529182917f00000000000000000000000000000000000000000000000000000000000000009091169063fc6f78659060840160408051808303815f875af115801562001895573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620018bb919062003ce2565b600185015485549294509092506001600160a01b0390811691161080620018e4578183620018e7565b82825b600886015491975095505f906127109062001903908962003a27565b6200190f919062003a55565b90505f612710865f01600801548862001929919062003a27565b62001935919062003a55565b8654600588015491925062001959916001600160a01b039182169116848b62003098565b600186015460058701546200197d916001600160a01b039081169116838a62003098565b887f8dcde09e464f5c324d7cbf62dbc0c647b8ad9242592ae364153f2549f4898d04620019ab848b62003ae2565b620019b7848b62003ae2565b60408051928352602083019190915281018590526060810184905260800160405180910390a2505050505050620019fb60015f8051602062004fd483398151915255565b915091565b62001a0a62001fe6565b62001a146200245e565b6001600160a01b03811662001a5d5760405162461bcd60e51b815260206004820152600e60248201526d16995c9bc81c9958da5c1a595b9d60921b6044820152606401620006cc565b6040516370a0823160e01b81523060048201525f906001600160a01b038416906370a0823190602401602060405180830381865afa15801562001aa2573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062001ac8919062003aca565b6001600160a01b0384165f9081526007602052604090205490915080821162001b275760405162461bcd60e51b815260206004820152601060248201526f04e6f7468696e6720746f2073776565760841b6044820152606401620006cc565b5f62001b34828462003ae2565b905062001b4c6001600160a01b038616858362002d11565b836001600160a01b0316856001600160a01b03167f7b09c29f9106defeccc9ac3b823f3aad0b470d120e5df7aed033b5c43a4bf7188360405162001b9291815260200190565b60405180910390a350505062001bb560015f8051602062004fd483398151915255565b5050565b62001bc36200245e565b5f81815260026020526040902060058101546001600160a01b0316331462001c1c5760405162461bcd60e51b815260206004820152600b60248201526a2737ba1031b932b0ba37b960a91b6044820152606401620006cc565b6002600982015460ff16600381111562001c3a5762001c3a620037d2565b148062001c6257506003600982015460ff16600381111562001c605762001c60620037d2565b145b62001ca85760405162461bcd60e51b8152602060048201526015602482015274105d58dd1a5bdb881b9bdd0818dbdb5c1b195d1959605a1b6044820152606401620006cc565b5f8281526004602052604090205460ff161562001cfc5760405162461bcd60e51b815260206004820152601160248201527020b63932b0b23c903bb4ba34323930bbb760791b6044820152606401620006cc565b5f62001d08826200247c565b82600a015462001d19919062003ae2565b90505f811162001d625760405162461bcd60e51b81526020600482015260136024820152724e6f7468696e6720746f20776974686472617760681b6044820152606401620006cc565b5f838152600460209081526040808320805460ff191660019081179091558501546001600160a01b0316835260079091528120805483929062001da790849062003ae2565b90915550506005820154600183015462001dcf916001600160a01b0391821691168362002d11565b60058201546040518281526001600160a01b039091169084907f579e0e2d0cfdb23711bb6034ac9f2ba41e8965a8e24589d1c3cf5604868661fc9060200160405180910390a350506200106560015f8051602062004fd483398151915255565b62001e3962001fe6565b6001600160a01b03811662001e865760405162461bcd60e51b815260206004820152601260248201527116995c9bc8199959481c9958da5c1a595b9d60721b6044820152606401620006cc565b6005546040516001600160a01b038084169216907fd3890fc76afcfc31cba1dcf2c27b50e2541e4d75039c981855b5b5e03682aea0905f90a3600580546001600160a01b0319166001600160a01b0392909216919091179055565b62001eeb62001fe6565b6001600160a01b03811662001f1657604051631e4fbdf760e01b81525f6004820152602401620006cc565b620010658162002ded565b600b546001600160a01b03161580159062001f465750600b546001600160a01b031633145b62001f8c5760405162461bcd60e51b8152602060048201526015602482015274556e617574686f72697a65642063616c6c6261636b60581b6044820152606401620006cc565b5f8062001f9c838501856200395e565b915091505f86131562001fbf5762001fbf6001600160a01b038316338862002d11565b5f85131562001fde5762001fde6001600160a01b038216338762002d11565b505050505050565b5f546001600160a01b03163314620014115760405163118cdaa760e01b8152336004820152602401620006cc565b5f670de0b6b3a76400006200202a858462003a27565b62002036919062003a55565b62002042908462003ccc565b949350505050565b5f806200206b6200205c868662003a27565b670de0b6b3a7640000620030e7565b90505f620020cc866200208089600262003a27565b6200208c919062003ccc565b62002098888762003a27565b620020a4919062003a27565b670de0b6b3a7640000620020ba81600262003a27565b620020c6919062003a27565b620030e7565b9050620020da818362003ccc565b979650505050505050565b5f8411620021285760405162461bcd60e51b815260206004820152600f60248201526e5a65726f206261736520707269636560881b6044820152606401620006cc565b5f82116200216a5760405162461bcd60e51b815260206004820152600e60248201526d5a65726f206d617820726169736560901b6044820152606401620006cc565b6107d081101580156200217f57506127108111155b620021cd5760405162461bcd60e51b815260206004820152601760248201527f496e76616c6964206c69717569646974792073686172650000000000000000006044820152606401620006cc565b620021db8585858562003120565b156200221c5760405162461bcd60e51b815260206004820152600f60248201526e4375727665206f766572666c6f777360881b6044820152606401620006cc565b5f6200222c5f8487878a620031b4565b90505f6200223c82878762002014565b90505f6200227061271062002252868862003a27565b6200225e919062003a55565b670de0b6b3a76400008460016200325c565b9050876200227f828562003ccc565b1115620022cf5760405162461bcd60e51b815260206004820152601e60248201527f537570706c7920746f6f20736d616c6c20666f72206c697175696469747900006044820152606401620006cc565b5050505050505050565b5f620022fe82606001518360a001518460c001518560e00151866101000151620020e5565b60018054905f6200230f8362003d05565b9190505590505f825f01518360200151846060015130866040015160405162002338906200368f565b6200234895949392919062003d65565b604051809103905ff08015801562002362573d5f803e3d5ffd5b505f8381526002602081905260409182902080546001600160a01b03199081166001600160a01b0386811691909117835560808901516001808501805485169383169390931790925560a08a015194840185905560c08a01516003850181905560e08b0151600486018190556005860180543396168617905560068054908701556101008c015160078701819055600880549088015560098701805460ff19169095179094558b88015197519899509497889794968b967f78f87bd22347e4e37db1ab310c6ce7e1780121e5e48207cd0b02d39ee87d2834966200244e968d9695939490919062003db9565b60405180910390a3505050919050565b62002468620032b2565b60025f8051602062004fd483398151915255565b5f612710825f016007015483600a015462002498919062003a27565b6200107e919062003a55565b5f805f620024b38686620032e3565b91509150815f03620024dc57838181620024d157620024d162003a41565b049250505062000743565b818411620024f657620024f66003851502601118620032ff565b5f848688095f868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010185841190960395909502919093039390930492909217029150509392505050565b5f808262002585576200257f670de0b6b3a7640000600160c01b86620024a4565b6200259e565b6200259e84600160c01b670de0b6b3a7640000620024a4565b90505f620025ac8262003310565b90506401000276a381118015620025d6575073fffd8963efd1fc6a506488495d951d5263988d2681105b620020425760405162461bcd60e51b815260206004820152601b60248201527f5072696365206f75747369646520556e69737761702072616e676500000000006044820152606401620006cc565b5f8082604001516200263d576020830151835162002645565b825160208401515b91509150915091565b5f8360a0015190505f816001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa15801562002694573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620026ba919062003e1c565b505050505050905084606001516001600160a01b0316816001600160a01b031603620026e7575050505050565b606085015160408601516001600160a01b039182169183169190911190151581145f8162002716578562002723565b6200272360028862003a55565b9050805f0362002737575050505050505050565b5f80620027448a62002624565b600b80546001600160a01b0319166001600160a01b038b811691821790925560608e8101516040805187861660208201529486168582015280518086038201815292850190819052630251596160e31b90529496509294509263128acb0892620027b79230928b928a9260640162003ec4565b60408051808303815f875af1158015620027d3573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620027f9919062003ce2565b5050600b80546001600160a01b031916905583620028de57866001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa1580156200284e573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062002874919062003e1c565b5050505060608d015192985050506001600160a01b03808816911614620028de5760405162461bcd60e51b815260206004820152601860248201527f506f6f6c207072696365206e6f7420636f7272656374656400000000000000006044820152606401620006cc565b50505050505050505050565b80516040516370a0823160e01b81523060048201525f916001600160a01b0316906370a0823190602401602060405180830381865afa15801562002930573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062002956919062003aca565b608083015160208401516040516370a0823160e01b81523060048201529293505f926001600160a01b03909116906370a0823190602401602060405180830381865afa158015620029a9573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620029cf919062003aca565b620029db919062003ae2565b90505f80620029ea8562002624565b8651919350915062002a27906001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000008662003486565b602085015162002a62906001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000008562003486565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166388316456604051806101600160405280856001600160a01b03168152602001846001600160a01b0316815260200161271062ffffff168152602001620d899f1960020b8152602001620d89a060020b8152602001886040015162002af2578662002af4565b875b8152602001886040015162002b0a578762002b0c565b865b81526020015f81526020015f8152602001306001600160a01b03168152602001428152506040518263ffffffff1660e01b815260040162002b4e919062003f00565b6080604051808303815f875af192505050801562002b8b575060408051601f3d908101601f1916820190925262002b889181019062003fc9565b60015b62002bdf57604080515f808252602082018190528183018190526060820152905187917f0d9e69eea1226c3cc6b24c170c2b55d6c198272e003451d42e20a842c1d9b914919081900360800190a262002c9e565b5f8a815260096020908152604080832087905560a08c018051600a9093529281902080546001600160a01b0319166001600160a01b03909316929092179091559051908a01518b917f0d9e69eea1226c3cc6b24c170c2b55d6c198272e003451d42e20a842c1d9b91491879062002c57578462002c59565b855b8d6040015162002c6a578662002c6c565b855b604080516001600160a01b039095168552602085019390935291830152606082015260800160405180910390a2505050505b845162002cd6906001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000005f62003486565b602085015162001fde906001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000005f62003486565b62002d208383836001620034e1565b620013f757604051635274afe760e01b81526001600160a01b0384166004820152602401620006cc565b5f8062002d58858762003ae2565b90505f670de0b6b3a764000062002d70878762003a27565b62002d7c919062003a55565b90505f670de0b6b3a764000062002d9581600262003a27565b62002da1919062003a27565b8762002daf85600262003a27565b62002dbb919062003ccc565b62002dc7898862003a27565b62002dd3919062003a27565b62002ddf919062003a55565b905062000a51818362003ccc565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600b8201546002830154600384015483925f92839262002e5f929186916200204a565b91505f85600a0154865f016004015462002e7a919062003ae2565b90508083101562002e8f57505f905062002f1a565b8083111562002f1457600b8601546002870154600388015462002eb69291849189620031b4565b93505f841162002ef45760405162461bcd60e51b815260206004820152600860248201526714dbdb19081bdd5d60c21b6044820152606401620006cc565b600b8601546002870154600388015462002f11929187916200204a565b92505b50600190505b9250925092565b6040516370a0823160e01b81523060048201525f906001600160a01b038516906370a0823190602401602060405180830381865afa15801562002f66573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062002f8c919062003aca565b905062002fa56001600160a01b03851633308662003545565b6040516370a0823160e01b8152306004820152839082906001600160a01b038716906370a0823190602401602060405180830381865afa15801562002fec573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062003012919062003aca565b6200301e919062003ae2565b146200306d5760405162461bcd60e51b815260206004820152601960248201527f556e737570706f72746564207061796d656e7420746f6b656e000000000000006044820152606401620006cc565b8115620030925760055462003092906001600160a01b03868116913391168562003545565b50505050565b8115620030bb57600554620030bb906001600160a01b0386811691168462002d11565b8181111562003092576200309283620030d5848462003ae2565b6001600160a01b038716919062002d11565b5f815f03620030fc57620030fc6012620032ff565b81600184038162003111576200311162003a41565b04600101831515029392505050565b5f6001600160801b038511156200313a5750600162002042565b5f6200314785876200357f565b509050806200315b57600191505062002042565b6200318084876200316e81600262003a27565b6200317a919062003a27565b6200357f565b509050806200319457600191505062002042565b620031a883670de0b6b3a76400006200357f565b50159695505050505050565b5f8084620031cb670de0b6b3a76400008862003a27565b620031d7919062003a55565b620031e490600162003ccc565b905082811115620031f25750815b5f5b81811015620020da575f60026200320c848462003ccc565b6200321990600162003ccc565b62003225919062003a55565b905087620032368a838a8a6200204a565b11620032455780915062003255565b6200325260018262003ae2565b92505b50620031f4565b5f620032906200326c83620035a3565b80156200328b57505f848062003286576200328662003a41565b868809115b151590565b6200329d868686620024a4565b620032a9919062003ccc565b95945050505050565b5f8051602062004fd4833981519152546002036200141157604051633ee5aeb560e01b815260040160405180910390fd5b5f805f1983850993909202808410938190039390930393915050565b634e487b715f52806020526024601cfd5b5f600182116200331e575090565b816001600160801b8210620033385760809190911c9060401b5b680100000000000000008210620033545760409190911c9060201b5b64010000000082106200336c5760209190911c9060101b5b620100008210620033825760109190911c9060081b5b6101008210620033975760089190911c9060041b5b60108210620033ab5760049190911c9060021b5b60048210620033b85760011b5b600302600190811c90818581620033d357620033d362003a41565b048201901c90506001818581620033ee57620033ee62003a41565b048201901c9050600181858162003409576200340962003a41565b048201901c9050600181858162003424576200342462003a41565b048201901c905060018185816200343f576200343f62003a41565b048201901c905060018185816200345a576200345a62003a41565b048201901c90506200347d81858162003477576200347762003a41565b04821190565b90039392505050565b620034948383835f620035d4565b620013f757620034a883835f6001620035d4565b620034d257604051635274afe760e01b81526001600160a01b0384166004820152602401620006cc565b62002d208383836001620035d4565b60405163a9059cbb60e01b5f8181526001600160a01b038616600452602485905291602083604481808b5af1925060015f51148316620035395783831516156200352d573d5f823e3d81fd5b5f873b113d1516831692505b60405250949350505050565b6200355584848484600162003620565b6200309257604051635274afe760e01b81526001600160a01b0385166004820152602401620006cc565b8181028281048214831517905f906200359783151590565b81029150509250929050565b5f6002826003811115620035bb57620035bb620037d2565b620035c7919062004011565b60ff166001149050919050565b60405163095ea7b360e01b5f8181526001600160a01b038616600452602485905291602083604481808b5af1925060015f51148316620035395783831516156200352d573d5f823e3d81fd5b6040516323b872dd60e01b5f8181526001600160a01b038781166004528616602452604485905291602083606481808c5af1925060015f511483166200367e57838315161562003672573d5f823e3d81fd5b5f883b113d1516831692505b604052505f60605295945050505050565b610f9e806200403683390190565b5f60208284031215620036ae575f80fd5b5035919050565b5f8060408385031215620036c7575f80fd5b50508035926020909101359150565b5f60c08284031215620036e7575f80fd5b50919050565b5f8083601f840112620036fe575f80fd5b50813567ffffffffffffffff81111562003716575f80fd5b6020830191508360208285010111156200372e575f80fd5b9250929050565b5f805f805f80606087890312156200374b575f80fd5b863567ffffffffffffffff8082111562003763575f80fd5b620037718a838b01620036ed565b909850965060208901359150808211156200378a575f80fd5b620037988a838b01620036ed565b90965094506040890135915080821115620037b1575f80fd5b50620037c089828a01620036ed565b979a9699509497509295939492505050565b634e487b7160e01b5f52602160045260245ffd5b600481106200380357634e487b7160e01b5f52602160045260245ffd5b9052565b84516001600160a01b0316815260208086015161018083019162003835908401826001600160a01b03169052565b5060408601516040830152606086015160608301526080860151608083015260a08601516200386f60a08401826001600160a01b03169052565b5060c086015160c083015260e086015160e0830152610100808701518184015250620038a0610120830186620037e6565b610140820193909352610160015292915050565b6001600160a01b038116811462001065575f80fd5b8035620038d681620038b4565b919050565b5f60208284031215620038ec575f80fd5b81356200074381620038b4565b5f602082840312156200390a575f80fd5b813567ffffffffffffffff81111562003921575f80fd5b8201610120818503121562000743575f80fd5b5f805f6060848603121562003947575f80fd5b505081359360208301359350604090920135919050565b5f806040838503121562003970575f80fd5b82356200397d81620038b4565b915060208301356200398f81620038b4565b809150509250929050565b5f8060408385031215620039ac575f80fd5b8235915060208301356200398f81620038b4565b5f805f8060608587031215620039d4575f80fd5b8435935060208501359250604085013567ffffffffffffffff811115620039f9575f80fd5b62003a0787828801620036ed565b95989497509550505050565b634e487b7160e01b5f52601160045260245ffd5b80820281158282048414176200107e576200107e62003a13565b634e487b7160e01b5f52601260045260245ffd5b5f8262003a665762003a6662003a41565b500490565b813562003a7881620038b4565b81546001600160a01b0319166001600160a01b03919091161781556020820135600182015560408201356002820155606082013560038201556080820135600482015560a09190910135600590910155565b5f6020828403121562003adb575f80fd5b5051919050565b818103818111156200107e576200107e62003a13565b5f6020828403121562003b09575f80fd5b81516200074381620038b4565b634e487b7160e01b5f52604160045260245ffd5b604051610120810167ffffffffffffffff8111828210171562003b515762003b5162003b16565b60405290565b5f82601f83011262003b67575f80fd5b813567ffffffffffffffff8082111562003b855762003b8562003b16565b604051601f8301601f19908116603f0116810190828211818310171562003bb05762003bb062003b16565b8160405283815286602085880101111562003bc9575f80fd5b836020870160208301375f602085830101528094505050505092915050565b5f610120823603121562003bfa575f80fd5b62003c0462003b2a565b823567ffffffffffffffff8082111562003c1c575f80fd5b62003c2a3683870162003b57565b8352602085013591508082111562003c40575f80fd5b62003c4e3683870162003b57565b6020840152604085013591508082111562003c67575f80fd5b5062003c763682860162003b57565b6040830152506060830135606082015262003c9460808401620038c9565b608082015260a083013560a082015260c083013560c082015260e083013560e082015261010080840135818301525080915050919050565b808201808211156200107e576200107e62003a13565b5f806040838503121562003cf4575f80fd5b505080516020909101519092909150565b5f6001820162003d195762003d1962003a13565b5060010190565b5f81518084525f5b8181101562003d465760208185018101518683018201520162003d28565b505f602082860101526020601f19601f83011685010191505092915050565b60a081525f62003d7960a083018862003d20565b828103602084015262003d8d818862003d20565b604084018790526001600160a01b03861660608501528381036080850152905062000a51818562003d20565b5f60018060a01b03808a1683528089166020840152508660408301528560608301528460808301528360a083015260e060c083015262003dfd60e083018462003d20565b9998505050505050505050565b805161ffff81168114620038d6575f80fd5b5f805f805f805f60e0888a03121562003e33575f80fd5b875162003e4081620038b4565b8097505060208801518060020b811462003e58575f80fd5b955062003e686040890162003e0a565b945062003e786060890162003e0a565b935062003e886080890162003e0a565b925060a088015160ff8116811462003e9e575f80fd5b60c0890151909250801515811462003eb4575f80fd5b8091505092959891949750929550565b6001600160a01b0386811682528515156020830152604082018590528316606082015260a0608082018190525f90620020da9083018462003d20565b81516001600160a01b031681526101608101602083015162003f2d60208401826001600160a01b03169052565b50604083015162003f45604084018262ffffff169052565b50606083015162003f5b606084018260020b9052565b50608083015162003f71608084018260020b9052565b5060a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015162003fb8828501826001600160a01b03169052565b505061014092830151919092015290565b5f805f806080858703121562003fdd575f80fd5b8451935060208501516001600160801b038116811462003ffb575f80fd5b6040860151606090960151949790965092505050565b5f60ff83168062004026576200402662003a41565b8060ff8416069150509291505056fe608060405234801562000010575f80fd5b5060405162000f9e38038062000f9e8339810160408190526200003391620001c1565b818585600362000044838262000300565b50600462000053828262000300565b5050506001600160a01b0381166200008457604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b6200008f81620000af565b5060068390556007620000a3828262000300565b505050505050620003cc565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b634e487b7160e01b5f52604160045260245ffd5b5f82601f83011262000124575f80fd5b81516001600160401b038082111562000141576200014162000100565b604051601f8301601f19908116603f011681019082821181831017156200016c576200016c62000100565b816040528381526020925086602085880101111562000189575f80fd5b5f91505b83821015620001ac57858201830151818301840152908201906200018d565b5f602085830101528094505050505092915050565b5f805f805f60a08688031215620001d6575f80fd5b85516001600160401b0380821115620001ed575f80fd5b620001fb89838a0162000114565b9650602088015191508082111562000211575f80fd5b6200021f89838a0162000114565b604089015160608a0151919750955091506001600160a01b038216821462000245575f80fd5b6080880151919350808211156200025a575f80fd5b50620002698882890162000114565b9150509295509295909350565b600181811c908216806200028b57607f821691505b602082108103620002aa57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f821115620002fb57805f5260205f20601f840160051c81016020851015620002d75750805b601f840160051c820191505b81811015620002f8575f8155600101620002e3565b50505b505050565b81516001600160401b038111156200031c576200031c62000100565b62000334816200032d845462000276565b84620002b0565b602080601f8311600181146200036a575f8415620003525750858301515b5f19600386901b1c1916600185901b178555620003c4565b5f85815260208120601f198616915b828110156200039a5788860151825594840194600190910190840162000379565b5085821015620003b857878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b610bc480620003da5f395ff3fe608060405234801561000f575f80fd5b506004361061011c575f3560e01c8063715018a6116100a9578063af35c6c71161006e578063af35c6c71461023e578063bef97c8714610246578063d5abeb0114610253578063dd62ed3e1461025c578063f2fde38b14610294575f80fd5b8063715018a6146101ed57806379cc6790146101f55780638da5cb5b1461020857806395d89b4114610223578063a9059cbb1461022b575f80fd5b806323b872dd116100ef57806323b872dd1461017b578063313ce5671461018e57806340c10f191461019d57806342966c68146101b257806370a08231146101c5575f80fd5b806303ee438c1461012057806306fdde031461013e578063095ea7b31461014657806318160ddd14610169575b5f80fd5b6101286102a7565b6040516101359190610a07565b60405180910390f35b610128610333565b610159610154366004610a6e565b6103c3565b6040519015158152602001610135565b6002545b604051908152602001610135565b610159610189366004610a96565b6103dc565b60405160128152602001610135565b6101b06101ab366004610a6e565b6103ff565b005b6101b06101c0366004610acf565b610474565b61016d6101d3366004610ae6565b6001600160a01b03165f9081526020819052604090205490565b6101b0610489565b6101b0610203366004610a6e565b61049c565b6005546040516001600160a01b039091168152602001610135565b6101286104f4565b610159610239366004610a6e565b610503565b6101b0610510565b6008546101599060ff1681565b61016d60065481565b61016d61026a366004610b06565b6001600160a01b039182165f90815260016020908152604080832093909416825291909152205490565b6101b06102a2366004610ae6565b610594565b600780546102b490610b37565b80601f01602080910402602001604051908101604052809291908181526020018280546102e090610b37565b801561032b5780601f106103025761010080835404028352916020019161032b565b820191905f5260205f20905b81548152906001019060200180831161030e57829003601f168201915b505050505081565b60606003805461034290610b37565b80601f016020809104026020016040519081016040528092919081815260200182805461036e90610b37565b80156103b95780601f10610390576101008083540402835291602001916103b9565b820191905f5260205f20905b81548152906001019060200180831161039c57829003601f168201915b5050505050905090565b5f336103d08185856105ce565b60019150505b92915050565b5f336103e98582856105e0565b6103f485858561065c565b506001949350505050565b6104076106b9565b6006548161041460025490565b61041e9190610b6f565b11156104665760405162461bcd60e51b815260206004820152601260248201527145786365656473206d617820737570706c7960701b60448201526064015b60405180910390fd5b61047082826106e6565b5050565b61047c6106b9565b610486338261071a565b50565b6104916106b9565b61049a5f61074e565b565b6104a46106b9565b60085460ff16156104ea5760405162461bcd60e51b815260206004820152601060248201526f151c98591a5b99c81b5a59dc985d195960821b604482015260640161045d565b610470828261071a565b60606004805461034290610b37565b5f336103d081858561065c565b6105186106b9565b60085460ff161561055d5760405162461bcd60e51b815260206004820152600f60248201526e105b1c9958591e48195b98589b1959608a1b604482015260640161045d565b6008805460ff191660011790556040517feadb24812ab3c9a55c774958184293ebdb6c7f6a2dbab11f397d80c86feb65d3905f90a1565b61059c6106b9565b6001600160a01b0381166105c557604051631e4fbdf760e01b81525f600482015260240161045d565b6104868161074e565b6105db838383600161079f565b505050565b6001600160a01b038381165f908152600160209081526040808320938616835292905220545f19811015610656578181101561064857604051637dc7a0d960e11b81526001600160a01b0384166004820152602481018290526044810183905260640161045d565b61065684848484035f61079f565b50505050565b6001600160a01b03831661068557604051634b637e8f60e11b81525f600482015260240161045d565b6001600160a01b0382166106ae5760405163ec442f0560e01b81525f600482015260240161045d565b6105db838383610871565b6005546001600160a01b0316331461049a5760405163118cdaa760e01b815233600482015260240161045d565b6001600160a01b03821661070f5760405163ec442f0560e01b81525f600482015260240161045d565b6104705f8383610871565b6001600160a01b03821661074357604051634b637e8f60e11b81525f600482015260240161045d565b610470825f83610871565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b6001600160a01b0384166107c85760405163e602df0560e01b81525f600482015260240161045d565b6001600160a01b0383166107f157604051634a1406b160e11b81525f600482015260240161045d565b6001600160a01b038085165f908152600160209081526040808320938716835292905220829055801561065657826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161086391815260200190565b60405180910390a350505050565b6001600160a01b0383161580159061089157506001600160a01b03821615155b156108db5760085460ff166108db5760405162461bcd60e51b815260206004820152601060248201526f151c985b9cd9995c9cc81b1bd8dad95960821b604482015260640161045d565b6105db8383836001600160a01b03831661090b578060025f8282546109009190610b6f565b9091555061097b9050565b6001600160a01b0383165f908152602081905260409020548181101561095d5760405163391434e360e21b81526001600160a01b0385166004820152602481018290526044810183905260640161045d565b6001600160a01b0384165f9081526020819052604090209082900390555b6001600160a01b038216610997576002805482900390556109b5565b6001600160a01b0382165f9081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516109fa91815260200190565b60405180910390a3505050565b5f602080835283518060208501525f5b81811015610a3357858101830151858201604001528201610a17565b505f604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610a69575f80fd5b919050565b5f8060408385031215610a7f575f80fd5b610a8883610a53565b946020939093013593505050565b5f805f60608486031215610aa8575f80fd5b610ab184610a53565b9250610abf60208501610a53565b9150604084013590509250925092565b5f60208284031215610adf575f80fd5b5035919050565b5f60208284031215610af6575f80fd5b610aff82610a53565b9392505050565b5f8060408385031215610b17575f80fd5b610b2083610a53565b9150610b2e60208401610a53565b90509250929050565b600181811c90821680610b4b57607f821691505b602082108103610b6957634e487b7160e01b5f52602260045260245ffd5b50919050565b808201808211156103d657634e487b7160e01b5f52601160045260245ffdfea26469706673582212207e87767950411975131c68fbff0eecd8f555a5feafbeb64ba662e7ae7b09e67264736f6c634300081800339b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00a26469706673582212204a220fbb032ec1ebeae6f8ae2175eb9bd0207433431f890623ddad21ef3d8cb464736f6c63430008180033",
    "sourceMap": "413:32283:18:-:0;;;7153:489;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2365:1:11;1505:66;2539;7274:10:18;;1269:95:0;;1322:31;;-1:-1:-1;;;1322:31:0;;1350:1;1322:31;;;783:51:20;756:18;;1322:31:0;;;;;;;;1269:95;1373:32;1392:12;1373:18;:32::i;:::-;-1:-1:-1;;;;;;7308:27:18;::::1;7300:58;;;::::0;-1:-1:-1;;;7300:58:18;;1047:2:20;7300:58:18::1;::::0;::::1;1029:21:20::0;1086:2;1066:18;;;1059:30;-1:-1:-1;;;1105:18:20;;;1098:48;1163:18;;7300:58:18::1;845:342:20::0;7300:58:18::1;-1:-1:-1::0;;;;;7376:39:18;::::1;7368:73;;;::::0;-1:-1:-1;;;7368:73:18;;1394:2:20;7368:73:18::1;::::0;::::1;1376:21:20::0;1433:2;1413:18;;;1406:30;1472:23;1452:18;;;1445:51;1513:18;;7368:73:18::1;1192:345:20::0;7368:73:18::1;-1:-1:-1::0;;;;;7451:34:18;::::1;;::::0;3194:4:::1;7503:29:::0;::::1;;7495:54;;;::::0;-1:-1:-1;;;7495:54:18;;1744:2:20;7495:54:18::1;::::0;::::1;1726:21:20::0;1783:2;1763:18;;;1756:30;-1:-1:-1;;;1802:18:20;;;1795:42;1854:18;;7495:54:18::1;1542:336:20::0;7495:54:18::1;-1:-1:-1::0;7559:20:18::1;:36:::0;;-1:-1:-1;;;;;;7559:36:18::1;-1:-1:-1::0;;;;;7559:36:18;;;::::1;::::0;;;::::1;::::0;;;7605:13:::1;:30:::0;413:32283;;2912:187:0;2985:16;3004:6;;-1:-1:-1;;;;;3020:17:0;;;-1:-1:-1;;;;;;3020:17:0;;;;;;3052:40;;3004:6;;;;;;;3052:40;;2985:16;3052:40;2975:124;2912:187;:::o;14:131:20:-;-1:-1:-1;;;;;89:31:20;;79:42;;69:70;;135:1;132;125:12;69:70;14:131;:::o;150:482::-;274:6;282;290;343:2;331:9;322:7;318:23;314:32;311:52;;;359:1;356;349:12;311:52;391:9;385:16;410:31;435:5;410:31;:::i;:::-;505:2;490:18;;484:25;554:2;539:18;;533:25;460:5;;-1:-1:-1;484:25:20;-1:-1:-1;567:33:20;533:25;567:33;:::i;:::-;619:7;609:17;;;150:482;;;;;:::o;1542:336::-;413:32283:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801562000010575f80fd5b506004361062000228575f3560e01c8063715018a6116200012b578063bcae25a411620000b7578063e521cb921162000083578063e521cb921462000606578063efc20dad146200061d578063f2fde38b146200064a578063fa461e331462000661578063fdfae4861462000678575f80fd5b8063bcae25a414620005bc578063d55be8c614620005c6578063d9f1aed914620005d0578063dd1b9c4a14620005e7575f80fd5b80638da5cb5b11620000f75780638da5cb5b1462000566578063a4ce25a71462000577578063b17acdcd146200058e578063b8dc491b14620005a5575f80fd5b8063715018a614620004ff57806375f0c2f01462000509578063791b98bc146200051357806383966021146200053b575f80fd5b80634373a28611620001b7578063571a26a01162000183578063571a26a014620003c45780635c471ad5146200048257806364df049e14620004a4578063683931b414620004d1578063709ef23114620004e8575f80fd5b80634373a286146200033e578063454b0608146200035557806348f719e5146200036c57806354147e9e14620003a2575f80fd5b80633edb917d11620001f75780633edb917d14620002a65780633ef068d214620002b057806342a8151514620002c757806342f78e9114620002de575f80fd5b806309e06259146200022c5780630fda366d1462000245578063121a257f146200026f5780632ad71573146200029c575b5f80fd5b620002436200023d3660046200369d565b62000682565b005b6200025c620002563660046200369d565b62000716565b6040519081526020015b60405180910390f35b6200028662000280366004620036b5565b6200074a565b6040805192835260208301919091520162000266565b6200025c60015481565b6200025c60085481565b62000243620002c1366004620036d6565b620007a7565b6200025c620002d836600462003735565b620008c2565b600c54600d54600e54600f5460105460115462000306956001600160a01b0316949392919086565b604080516001600160a01b0390971687526020870195909552938501929092526060840152608083015260a082015260c00162000266565b620002436200034f3660046200369d565b62000a5d565b62000243620003663660046200369d565b62000aeb565b620003916200037d3660046200369d565b60046020525f908152604090205460ff1681565b604051901515815260200162000266565b6200025c620003b33660046200369d565b60096020525f908152604090205481565b62000470620003d53660046200369d565b600260208181525f92835260409283902083516101208101855281546001600160a01b03908116825260018301548116938201939093529281015493830193909352600383015460608301526004830154608083015260058301541660a0820152600682015460c0820152600782015460e082015260088201546101008201526009820154600a830154600b90930154919260ff9091169184565b60405162000266949392919062003807565b6200025c62000493366004620038db565b60076020525f908152604090205481565b600554620004b8906001600160a01b031681565b6040516001600160a01b03909116815260200162000266565b6200025c620004e2366004620038f9565b62001068565b62000243620004f936600462003934565b62001084565b62000243620013fc565b6200025c6107d081565b620004b87f000000000000000000000000000000000000000000000000000000000000000081565b620004b86200054c3660046200369d565b600a6020525f90815260409020546001600160a01b031681565b5f546001600160a01b0316620004b8565b620002436200058836600462003934565b62001413565b620002866200059f3660046200369d565b6200174c565b62000243620005b63660046200395e565b62001a00565b6200025c60065481565b6200025c6103e881565b62000243620005e13660046200369d565b62001bb9565b620005f161271081565b60405162ffffff909116815260200162000266565b6200024362000617366004620038db565b62001e2f565b6200025c6200062e3660046200399a565b600360209081525f928352604080842090915290825290205481565b620002436200065b366004620038db565b62001ee1565b6200024362000672366004620039c0565b62001f21565b6200025c61138881565b6200068c62001fe6565b611388811115620006d55760405162461bcd60e51b815260206004820152600e60248201526d0a6d0c2e4ca40e8dede40d0d2ced60931b60448201526064015b60405180910390fd5b60085460408051918252602082018390527fafd7016dba95bc0c303b0838ae8e4829497ed18cc6a0ed00eec5fc7c50148e17910160405180910390a1600855565b5f8181526002602081905260408220600b8101549181015460038201549192620007439290919062002014565b9392505050565b5f8281526002602081905260408220600b8101549181015460038201548493620007799290918791906200204a565b60068201549093506127109062000791908562003a27565b6200079d919062003a55565b9150509250929050565b620007b162001fe6565b5f620007c16020830183620038db565b6001600160a01b0316036200080e5760405162461bcd60e51b81526020600482015260126024820152712d32b937903830bcb6b2b73a103a37b5b2b760711b6044820152606401620006cc565b6200083181602001358260400135836060013584608001358560a00135620020e5565b80600c62000840828262003a6b565b507f29f62c75478dac4ea9396c9b5e58b4e29d6f7812c6eb05ceaf5d0c776db6b5769050620008736020830183620038db565b604080516001600160a01b039092168252602080850135908301528084013590820152606080840135908201526080808401359082015260a0808401359082015260c00160405180910390a150565b6040805160c081018252600c546001600160a01b0316808252600d546020830152600e5492820192909252600f546060820152601054608082015260115460a08201525f91620009485760405162461bcd60e51b815260206004820152601060248201526f139bc81b185d5b98da081c1c995cd95d60821b6044820152606401620006cc565b604080516101406020601f8b018190040282018101909252610120810189815262000a51928291908c908c90819085018382808284375f92019190915250505090825250604080516020601f8b0181900481028201810190925289815291810191908a908a90819084018382808284375f92019190915250505090825250604080516020601f8901819004810282018101909252878152918101919088908890819084018382808284375f920191909152505050908252506020848101519082015283516001600160a01b031660408083019190915284015160608083019190915284015160808083019190915284015160a08083019190915284015160c090910152620022d9565b98975050505050505050565b62000a6762001fe6565b6103e881111562000aaa5760405162461bcd60e51b815260206004820152600c60248201526b08ccaca40e8dede40d0d2ced60a31b6044820152606401620006cc565b60065460408051918252602082018390527f3062378541f1b58e0547bfb13e7d7585153e442e477e263c6e63d4775b3072a6910160405180910390a1600655565b62000af56200245e565b5f81815260026020819052604090912090600982015460ff16600381111562000b225762000b22620037d2565b1462000b695760405162461bcd60e51b8152602060048201526015602482015274105d58dd1a5bdb881b9bdd0818dbdb5c1b195d1959605a1b6044820152606401620006cc565b5f62000b75826200247c565b90505f62000b9583600b0154845f0160020154855f016003015462002014565b90505f62000bad83670de0b6b3a764000084620024a4565b6040805160c0810182525f606082018190526080820181905260a082015286546001600160a01b039081168083526001890154909116602083018190529081118284015291516370a0823160e01b8152306004820152929350918591906370a0823190602401602060405180830381865afa15801562000c2f573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000c55919062003aca565b62000c61919062003ae2565b608082015260098501805460ff191660031790556020808201516001600160a01b03165f908152600790915260408120805486929062000ca390849062003ae2565b92505081905550805f01516001600160a01b031663af35c6c76040518163ffffffff1660e01b81526004015f604051808303815f87803b15801562000ce6575f80fd5b505af115801562000cf9573d5f803e3d5ffd5b505050505f8411801562000d0c57505f82115b1562000e765780516040516340c10f1960e01b8152306004820152602481018490526001600160a01b03909116906340c10f19906044015f604051808303815f87803b15801562000d5b575f80fd5b505af115801562000d6e573d5f803e3d5ffd5b5050505062000d828382604001516200255e565b6001600160a01b031660608201525f8062000d9d8362002624565b60608501516040516309f56ab160e11b81526001600160a01b0380851660048301528084166024830152612710604483015291821660648201529294509092507f000000000000000000000000000000000000000000000000000000000000000016906313ead562906084016020604051808303815f875af115801562000e26573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000e4c919062003af8565b6001600160a01b031660a084015262000e678385886200264e565b62000e738884620028ea565b50505b80516040516370a0823160e01b81523060048201525f916001600160a01b0316906370a0823190602401602060405180830381865afa15801562000ebc573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000ee2919062003aca565b9050801562000f46578151604051630852cd8d60e31b8152600481018390526001600160a01b03909116906342966c68906024015f604051808303815f87803b15801562000f2e575f80fd5b505af115801562000f41573d5f803e3d5ffd5b505050505b608082015160208301516040516370a0823160e01b81523060048201525f92916001600160a01b0316906370a0823190602401602060405180830381865afa15801562000f95573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000fbb919062003aca565b62000fc7919062003ae2565b9050801562000ff3576005870154602084015162000ff3916001600160a01b0391821691168362002d11565b825f01516001600160a01b031663715018a66040518163ffffffff1660e01b81526004015f604051808303815f87803b1580156200102f575f80fd5b505af115801562001042573d5f803e3d5ffd5b50505050505050505050506200106560015f8051602062004fd483398151915255565b50565b5f6200107e620010788362003be8565b620022d9565b92915050565b6200108e6200245e565b5f8381526002602052604090206001600982015460ff166003811115620010b957620010b9620037d2565b14620010fd5760405162461bcd60e51b815260206004820152601260248201527141756374696f6e206e6f742061637469766560701b6044820152606401620006cc565b5f83116200113c5760405162461bcd60e51b815260206004820152600b60248201526a16995c9bc8185b5bdd5b9d60aa1b6044820152606401620006cc565b5f848152600360209081526040808320338452909152902054831115620011985760405162461bcd60e51b815260206004820152600f60248201526e457863656564732062616c616e636560881b6044820152606401620006cc565b5f620011b782600b015485845f0160020154855f016003015462002d4a565b90505f612710835f016006015483620011d1919062003a27565b620011dd919062003a55565b905083620011ec828462003ae2565b1015620012305760405162461bcd60e51b815260206004820152601160248201527014db1a5c1c1859d948195e18d959591959607a1b6044820152606401620006cc565b6001830154600a840180546001600160a01b03909216918491905f906200125990849062003ae2565b925050819055508584600b015f82825462001275919062003ae2565b90915550505f87815260036020908152604080832033845290915281208054889290620012a490849062003ae2565b90915550506001600160a01b0381165f9081526007602052604081208054859290620012d290849062003ae2565b9091555050835460405163079cc67960e41b8152336004820152602481018890526001600160a01b03909116906379cc6790906044015f604051808303815f87803b15801562001320575f80fd5b505af115801562001333573d5f803e3d5ffd5b505050505f8211156200135c576005546200135c906001600160a01b0383811691168462002d11565b6200137f336200136d848662003ae2565b6001600160a01b038416919062002d11565b600a840154600b850154604080518981526020810187905290810185905260608101929092526080820152339088907fd7fd93110c86e222ad62b2a786fdc3afd88c4c21f9092614ca01365ba432073c9060a00160405180910390a350505050620013f760015f8051602062004fd483398151915255565b505050565b6200140662001fe6565b620014115f62002ded565b565b6200141d6200245e565b5f8381526002602052604090206001600982015460ff166003811115620014485762001448620037d2565b146200148c5760405162461bcd60e51b815260206004820152601260248201527141756374696f6e206e6f742061637469766560701b6044820152606401620006cc565b5f8311620014cb5760405162461bcd60e51b815260206004820152600b60248201526a16995c9bc8185b5bdd5b9d60aa1b6044820152606401620006cc565b5f80620014d9838662002e3c565b600686015492975090935091505f9061271090620014f8908562003a27565b62001504919062003a55565b90508462001513828562003ccc565b1115620015575760405162461bcd60e51b815260206004820152601160248201527014db1a5c1c1859d948195e18d959591959607a1b6044820152606401620006cc565b8284600a015f8282546200156c919062003ccc565b925050819055508584600b015f82825462001588919062003ccc565b90915550505f87815260036020908152604080832033845290915281208054889290620015b790849062003ccc565b909155505060018401546001600160a01b03165f9081526007602052604081208054859290620015e990849062003ccc565b90915550508115620016055760098401805460ff191660021790555b600184015462001620906001600160a01b0316848362002f21565b83546040516340c10f1960e01b8152336004820152602481018890526001600160a01b03909116906340c10f19906044015f604051808303815f87803b15801562001669575f80fd5b505af11580156200167c573d5f803e3d5ffd5b50505050600a840154600b850154604080518981526020810187905290810184905260608101929092526080820152339088907fc938e879cd47aa84d5893377578d6c211ccd96f382228c42c1bb6a8eaa71a0849060a00160405180910390a381156200173057867fc7502df20ccf846bf5005f01564bb502b56dcec19f0e2d0575c4369cc5e3b53b85600a015486600b015460405162001727929190918252602082015260400190565b60405180910390a25b50505050620013f760015f8051602062004fd483398151915255565b5f80620017586200245e565b5f8381526002602052604090206003600982015460ff166003811115620017835762001783620037d2565b1480156200179d57505f8481526009602052604090205415155b620017d95760405162461bcd60e51b815260206004820152600b60248201526a2737903837b9b4ba34b7b760a91b6044820152606401620006cc565b604080516080810182525f86815260096020908152838220548352309083019081526001600160801b0383850181815260608501828152955163fc6f786560e01b81529451600486015291516001600160a01b039081166024860152915181166044850152935190931660648301529182917f00000000000000000000000000000000000000000000000000000000000000009091169063fc6f78659060840160408051808303815f875af115801562001895573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620018bb919062003ce2565b600185015485549294509092506001600160a01b0390811691161080620018e4578183620018e7565b82825b600886015491975095505f906127109062001903908962003a27565b6200190f919062003a55565b90505f612710865f01600801548862001929919062003a27565b62001935919062003a55565b8654600588015491925062001959916001600160a01b039182169116848b62003098565b600186015460058701546200197d916001600160a01b039081169116838a62003098565b887f8dcde09e464f5c324d7cbf62dbc0c647b8ad9242592ae364153f2549f4898d04620019ab848b62003ae2565b620019b7848b62003ae2565b60408051928352602083019190915281018590526060810184905260800160405180910390a2505050505050620019fb60015f8051602062004fd483398151915255565b915091565b62001a0a62001fe6565b62001a146200245e565b6001600160a01b03811662001a5d5760405162461bcd60e51b815260206004820152600e60248201526d16995c9bc81c9958da5c1a595b9d60921b6044820152606401620006cc565b6040516370a0823160e01b81523060048201525f906001600160a01b038416906370a0823190602401602060405180830381865afa15801562001aa2573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062001ac8919062003aca565b6001600160a01b0384165f9081526007602052604090205490915080821162001b275760405162461bcd60e51b815260206004820152601060248201526f04e6f7468696e6720746f2073776565760841b6044820152606401620006cc565b5f62001b34828462003ae2565b905062001b4c6001600160a01b038616858362002d11565b836001600160a01b0316856001600160a01b03167f7b09c29f9106defeccc9ac3b823f3aad0b470d120e5df7aed033b5c43a4bf7188360405162001b9291815260200190565b60405180910390a350505062001bb560015f8051602062004fd483398151915255565b5050565b62001bc36200245e565b5f81815260026020526040902060058101546001600160a01b0316331462001c1c5760405162461bcd60e51b815260206004820152600b60248201526a2737ba1031b932b0ba37b960a91b6044820152606401620006cc565b6002600982015460ff16600381111562001c3a5762001c3a620037d2565b148062001c6257506003600982015460ff16600381111562001c605762001c60620037d2565b145b62001ca85760405162461bcd60e51b8152602060048201526015602482015274105d58dd1a5bdb881b9bdd0818dbdb5c1b195d1959605a1b6044820152606401620006cc565b5f8281526004602052604090205460ff161562001cfc5760405162461bcd60e51b815260206004820152601160248201527020b63932b0b23c903bb4ba34323930bbb760791b6044820152606401620006cc565b5f62001d08826200247c565b82600a015462001d19919062003ae2565b90505f811162001d625760405162461bcd60e51b81526020600482015260136024820152724e6f7468696e6720746f20776974686472617760681b6044820152606401620006cc565b5f838152600460209081526040808320805460ff191660019081179091558501546001600160a01b0316835260079091528120805483929062001da790849062003ae2565b90915550506005820154600183015462001dcf916001600160a01b0391821691168362002d11565b60058201546040518281526001600160a01b039091169084907f579e0e2d0cfdb23711bb6034ac9f2ba41e8965a8e24589d1c3cf5604868661fc9060200160405180910390a350506200106560015f8051602062004fd483398151915255565b62001e3962001fe6565b6001600160a01b03811662001e865760405162461bcd60e51b815260206004820152601260248201527116995c9bc8199959481c9958da5c1a595b9d60721b6044820152606401620006cc565b6005546040516001600160a01b038084169216907fd3890fc76afcfc31cba1dcf2c27b50e2541e4d75039c981855b5b5e03682aea0905f90a3600580546001600160a01b0319166001600160a01b0392909216919091179055565b62001eeb62001fe6565b6001600160a01b03811662001f1657604051631e4fbdf760e01b81525f6004820152602401620006cc565b620010658162002ded565b600b546001600160a01b03161580159062001f465750600b546001600160a01b031633145b62001f8c5760405162461bcd60e51b8152602060048201526015602482015274556e617574686f72697a65642063616c6c6261636b60581b6044820152606401620006cc565b5f8062001f9c838501856200395e565b915091505f86131562001fbf5762001fbf6001600160a01b038316338862002d11565b5f85131562001fde5762001fde6001600160a01b038216338762002d11565b505050505050565b5f546001600160a01b03163314620014115760405163118cdaa760e01b8152336004820152602401620006cc565b5f670de0b6b3a76400006200202a858462003a27565b62002036919062003a55565b62002042908462003ccc565b949350505050565b5f806200206b6200205c868662003a27565b670de0b6b3a7640000620030e7565b90505f620020cc866200208089600262003a27565b6200208c919062003ccc565b62002098888762003a27565b620020a4919062003a27565b670de0b6b3a7640000620020ba81600262003a27565b620020c6919062003a27565b620030e7565b9050620020da818362003ccc565b979650505050505050565b5f8411620021285760405162461bcd60e51b815260206004820152600f60248201526e5a65726f206261736520707269636560881b6044820152606401620006cc565b5f82116200216a5760405162461bcd60e51b815260206004820152600e60248201526d5a65726f206d617820726169736560901b6044820152606401620006cc565b6107d081101580156200217f57506127108111155b620021cd5760405162461bcd60e51b815260206004820152601760248201527f496e76616c6964206c69717569646974792073686172650000000000000000006044820152606401620006cc565b620021db8585858562003120565b156200221c5760405162461bcd60e51b815260206004820152600f60248201526e4375727665206f766572666c6f777360881b6044820152606401620006cc565b5f6200222c5f8487878a620031b4565b90505f6200223c82878762002014565b90505f6200227061271062002252868862003a27565b6200225e919062003a55565b670de0b6b3a76400008460016200325c565b9050876200227f828562003ccc565b1115620022cf5760405162461bcd60e51b815260206004820152601e60248201527f537570706c7920746f6f20736d616c6c20666f72206c697175696469747900006044820152606401620006cc565b5050505050505050565b5f620022fe82606001518360a001518460c001518560e00151866101000151620020e5565b60018054905f6200230f8362003d05565b9190505590505f825f01518360200151846060015130866040015160405162002338906200368f565b6200234895949392919062003d65565b604051809103905ff08015801562002362573d5f803e3d5ffd5b505f8381526002602081905260409182902080546001600160a01b03199081166001600160a01b0386811691909117835560808901516001808501805485169383169390931790925560a08a015194840185905560c08a01516003850181905560e08b0151600486018190556005860180543396168617905560068054908701556101008c015160078701819055600880549088015560098701805460ff19169095179094558b88015197519899509497889794968b967f78f87bd22347e4e37db1ab310c6ce7e1780121e5e48207cd0b02d39ee87d2834966200244e968d9695939490919062003db9565b60405180910390a3505050919050565b62002468620032b2565b60025f8051602062004fd483398151915255565b5f612710825f016007015483600a015462002498919062003a27565b6200107e919062003a55565b5f805f620024b38686620032e3565b91509150815f03620024dc57838181620024d157620024d162003a41565b049250505062000743565b818411620024f657620024f66003851502601118620032ff565b5f848688095f868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010185841190960395909502919093039390930492909217029150509392505050565b5f808262002585576200257f670de0b6b3a7640000600160c01b86620024a4565b6200259e565b6200259e84600160c01b670de0b6b3a7640000620024a4565b90505f620025ac8262003310565b90506401000276a381118015620025d6575073fffd8963efd1fc6a506488495d951d5263988d2681105b620020425760405162461bcd60e51b815260206004820152601b60248201527f5072696365206f75747369646520556e69737761702072616e676500000000006044820152606401620006cc565b5f8082604001516200263d576020830151835162002645565b825160208401515b91509150915091565b5f8360a0015190505f816001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa15801562002694573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620026ba919062003e1c565b505050505050905084606001516001600160a01b0316816001600160a01b031603620026e7575050505050565b606085015160408601516001600160a01b039182169183169190911190151581145f8162002716578562002723565b6200272360028862003a55565b9050805f0362002737575050505050505050565b5f80620027448a62002624565b600b80546001600160a01b0319166001600160a01b038b811691821790925560608e8101516040805187861660208201529486168582015280518086038201815292850190819052630251596160e31b90529496509294509263128acb0892620027b79230928b928a9260640162003ec4565b60408051808303815f875af1158015620027d3573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620027f9919062003ce2565b5050600b80546001600160a01b031916905583620028de57866001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa1580156200284e573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062002874919062003e1c565b5050505060608d015192985050506001600160a01b03808816911614620028de5760405162461bcd60e51b815260206004820152601860248201527f506f6f6c207072696365206e6f7420636f7272656374656400000000000000006044820152606401620006cc565b50505050505050505050565b80516040516370a0823160e01b81523060048201525f916001600160a01b0316906370a0823190602401602060405180830381865afa15801562002930573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062002956919062003aca565b608083015160208401516040516370a0823160e01b81523060048201529293505f926001600160a01b03909116906370a0823190602401602060405180830381865afa158015620029a9573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620029cf919062003aca565b620029db919062003ae2565b90505f80620029ea8562002624565b8651919350915062002a27906001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000008662003486565b602085015162002a62906001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000008562003486565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166388316456604051806101600160405280856001600160a01b03168152602001846001600160a01b0316815260200161271062ffffff168152602001620d899f1960020b8152602001620d89a060020b8152602001886040015162002af2578662002af4565b875b8152602001886040015162002b0a578762002b0c565b865b81526020015f81526020015f8152602001306001600160a01b03168152602001428152506040518263ffffffff1660e01b815260040162002b4e919062003f00565b6080604051808303815f875af192505050801562002b8b575060408051601f3d908101601f1916820190925262002b889181019062003fc9565b60015b62002bdf57604080515f808252602082018190528183018190526060820152905187917f0d9e69eea1226c3cc6b24c170c2b55d6c198272e003451d42e20a842c1d9b914919081900360800190a262002c9e565b5f8a815260096020908152604080832087905560a08c018051600a9093529281902080546001600160a01b0319166001600160a01b03909316929092179091559051908a01518b917f0d9e69eea1226c3cc6b24c170c2b55d6c198272e003451d42e20a842c1d9b91491879062002c57578462002c59565b855b8d6040015162002c6a578662002c6c565b855b604080516001600160a01b039095168552602085019390935291830152606082015260800160405180910390a2505050505b845162002cd6906001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000005f62003486565b602085015162001fde906001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000005f62003486565b62002d208383836001620034e1565b620013f757604051635274afe760e01b81526001600160a01b0384166004820152602401620006cc565b5f8062002d58858762003ae2565b90505f670de0b6b3a764000062002d70878762003a27565b62002d7c919062003a55565b90505f670de0b6b3a764000062002d9581600262003a27565b62002da1919062003a27565b8762002daf85600262003a27565b62002dbb919062003ccc565b62002dc7898862003a27565b62002dd3919062003a27565b62002ddf919062003a55565b905062000a51818362003ccc565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600b8201546002830154600384015483925f92839262002e5f929186916200204a565b91505f85600a0154865f016004015462002e7a919062003ae2565b90508083101562002e8f57505f905062002f1a565b8083111562002f1457600b8601546002870154600388015462002eb69291849189620031b4565b93505f841162002ef45760405162461bcd60e51b815260206004820152600860248201526714dbdb19081bdd5d60c21b6044820152606401620006cc565b600b8601546002870154600388015462002f11929187916200204a565b92505b50600190505b9250925092565b6040516370a0823160e01b81523060048201525f906001600160a01b038516906370a0823190602401602060405180830381865afa15801562002f66573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062002f8c919062003aca565b905062002fa56001600160a01b03851633308662003545565b6040516370a0823160e01b8152306004820152839082906001600160a01b038716906370a0823190602401602060405180830381865afa15801562002fec573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062003012919062003aca565b6200301e919062003ae2565b146200306d5760405162461bcd60e51b815260206004820152601960248201527f556e737570706f72746564207061796d656e7420746f6b656e000000000000006044820152606401620006cc565b8115620030925760055462003092906001600160a01b03868116913391168562003545565b50505050565b8115620030bb57600554620030bb906001600160a01b0386811691168462002d11565b8181111562003092576200309283620030d5848462003ae2565b6001600160a01b038716919062002d11565b5f815f03620030fc57620030fc6012620032ff565b81600184038162003111576200311162003a41565b04600101831515029392505050565b5f6001600160801b038511156200313a5750600162002042565b5f6200314785876200357f565b509050806200315b57600191505062002042565b6200318084876200316e81600262003a27565b6200317a919062003a27565b6200357f565b509050806200319457600191505062002042565b620031a883670de0b6b3a76400006200357f565b50159695505050505050565b5f8084620031cb670de0b6b3a76400008862003a27565b620031d7919062003a55565b620031e490600162003ccc565b905082811115620031f25750815b5f5b81811015620020da575f60026200320c848462003ccc565b6200321990600162003ccc565b62003225919062003a55565b905087620032368a838a8a6200204a565b11620032455780915062003255565b6200325260018262003ae2565b92505b50620031f4565b5f620032906200326c83620035a3565b80156200328b57505f848062003286576200328662003a41565b868809115b151590565b6200329d868686620024a4565b620032a9919062003ccc565b95945050505050565b5f8051602062004fd4833981519152546002036200141157604051633ee5aeb560e01b815260040160405180910390fd5b5f805f1983850993909202808410938190039390930393915050565b634e487b715f52806020526024601cfd5b5f600182116200331e575090565b816001600160801b8210620033385760809190911c9060401b5b680100000000000000008210620033545760409190911c9060201b5b64010000000082106200336c5760209190911c9060101b5b620100008210620033825760109190911c9060081b5b6101008210620033975760089190911c9060041b5b60108210620033ab5760049190911c9060021b5b60048210620033b85760011b5b600302600190811c90818581620033d357620033d362003a41565b048201901c90506001818581620033ee57620033ee62003a41565b048201901c9050600181858162003409576200340962003a41565b048201901c9050600181858162003424576200342462003a41565b048201901c905060018185816200343f576200343f62003a41565b048201901c905060018185816200345a576200345a62003a41565b048201901c90506200347d81858162003477576200347762003a41565b04821190565b90039392505050565b620034948383835f620035d4565b620013f757620034a883835f6001620035d4565b620034d257604051635274afe760e01b81526001600160a01b0384166004820152602401620006cc565b62002d208383836001620035d4565b60405163a9059cbb60e01b5f8181526001600160a01b038616600452602485905291602083604481808b5af1925060015f51148316620035395783831516156200352d573d5f823e3d81fd5b5f873b113d1516831692505b60405250949350505050565b6200355584848484600162003620565b6200309257604051635274afe760e01b81526001600160a01b0385166004820152602401620006cc565b8181028281048214831517905f906200359783151590565b81029150509250929050565b5f6002826003811115620035bb57620035bb620037d2565b620035c7919062004011565b60ff166001149050919050565b60405163095ea7b360e01b5f8181526001600160a01b038616600452602485905291602083604481808b5af1925060015f51148316620035395783831516156200352d573d5f823e3d81fd5b6040516323b872dd60e01b5f8181526001600160a01b038781166004528616602452604485905291602083606481808c5af1925060015f511483166200367e57838315161562003672573d5f823e3d81fd5b5f883b113d1516831692505b604052505f60605295945050505050565b610f9e806200403683390190565b5f60208284031215620036ae575f80fd5b5035919050565b5f8060408385031215620036c7575f80fd5b50508035926020909101359150565b5f60c08284031215620036e7575f80fd5b50919050565b5f8083601f840112620036fe575f80fd5b50813567ffffffffffffffff81111562003716575f80fd5b6020830191508360208285010111156200372e575f80fd5b9250929050565b5f805f805f80606087890312156200374b575f80fd5b863567ffffffffffffffff8082111562003763575f80fd5b620037718a838b01620036ed565b909850965060208901359150808211156200378a575f80fd5b620037988a838b01620036ed565b90965094506040890135915080821115620037b1575f80fd5b50620037c089828a01620036ed565b979a9699509497509295939492505050565b634e487b7160e01b5f52602160045260245ffd5b600481106200380357634e487b7160e01b5f52602160045260245ffd5b9052565b84516001600160a01b0316815260208086015161018083019162003835908401826001600160a01b03169052565b5060408601516040830152606086015160608301526080860151608083015260a08601516200386f60a08401826001600160a01b03169052565b5060c086015160c083015260e086015160e0830152610100808701518184015250620038a0610120830186620037e6565b610140820193909352610160015292915050565b6001600160a01b038116811462001065575f80fd5b8035620038d681620038b4565b919050565b5f60208284031215620038ec575f80fd5b81356200074381620038b4565b5f602082840312156200390a575f80fd5b813567ffffffffffffffff81111562003921575f80fd5b8201610120818503121562000743575f80fd5b5f805f6060848603121562003947575f80fd5b505081359360208301359350604090920135919050565b5f806040838503121562003970575f80fd5b82356200397d81620038b4565b915060208301356200398f81620038b4565b809150509250929050565b5f8060408385031215620039ac575f80fd5b8235915060208301356200398f81620038b4565b5f805f8060608587031215620039d4575f80fd5b8435935060208501359250604085013567ffffffffffffffff811115620039f9575f80fd5b62003a0787828801620036ed565b95989497509550505050565b634e487b7160e01b5f52601160045260245ffd5b80820281158282048414176200107e576200107e62003a13565b634e487b7160e01b5f52601260045260245ffd5b5f8262003a665762003a6662003a41565b500490565b813562003a7881620038b4565b81546001600160a01b0319166001600160a01b03919091161781556020820135600182015560408201356002820155606082013560038201556080820135600482015560a09190910135600590910155565b5f6020828403121562003adb575f80fd5b5051919050565b818103818111156200107e576200107e62003a13565b5f6020828403121562003b09575f80fd5b81516200074381620038b4565b634e487b7160e01b5f52604160045260245ffd5b604051610120810167ffffffffffffffff8111828210171562003b515762003b5162003b16565b60405290565b5f82601f83011262003b67575f80fd5b813567ffffffffffffffff8082111562003b855762003b8562003b16565b604051601f8301601f19908116603f0116810190828211818310171562003bb05762003bb062003b16565b8160405283815286602085880101111562003bc9575f80fd5b836020870160208301375f602085830101528094505050505092915050565b5f610120823603121562003bfa575f80fd5b62003c0462003b2a565b823567ffffffffffffffff8082111562003c1c575f80fd5b62003c2a3683870162003b57565b8352602085013591508082111562003c40575f80fd5b62003c4e3683870162003b57565b6020840152604085013591508082111562003c67575f80fd5b5062003c763682860162003b57565b6040830152506060830135606082015262003c9460808401620038c9565b608082015260a083013560a082015260c083013560c082015260e083013560e082015261010080840135818301525080915050919050565b808201808211156200107e576200107e62003a13565b5f806040838503121562003cf4575f80fd5b505080516020909101519092909150565b5f6001820162003d195762003d1962003a13565b5060010190565b5f81518084525f5b8181101562003d465760208185018101518683018201520162003d28565b505f602082860101526020601f19601f83011685010191505092915050565b60a081525f62003d7960a083018862003d20565b828103602084015262003d8d818862003d20565b604084018790526001600160a01b03861660608501528381036080850152905062000a51818562003d20565b5f60018060a01b03808a1683528089166020840152508660408301528560608301528460808301528360a083015260e060c083015262003dfd60e083018462003d20565b9998505050505050505050565b805161ffff81168114620038d6575f80fd5b5f805f805f805f60e0888a03121562003e33575f80fd5b875162003e4081620038b4565b8097505060208801518060020b811462003e58575f80fd5b955062003e686040890162003e0a565b945062003e786060890162003e0a565b935062003e886080890162003e0a565b925060a088015160ff8116811462003e9e575f80fd5b60c0890151909250801515811462003eb4575f80fd5b8091505092959891949750929550565b6001600160a01b0386811682528515156020830152604082018590528316606082015260a0608082018190525f90620020da9083018462003d20565b81516001600160a01b031681526101608101602083015162003f2d60208401826001600160a01b03169052565b50604083015162003f45604084018262ffffff169052565b50606083015162003f5b606084018260020b9052565b50608083015162003f71608084018260020b9052565b5060a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015162003fb8828501826001600160a01b03169052565b505061014092830151919092015290565b5f805f806080858703121562003fdd575f80fd5b8451935060208501516001600160801b038116811462003ffb575f80fd5b6040860151606090960151949790965092505050565b5f60ff83168062004026576200402662003a41565b8060ff8416069150509291505056fe608060405234801562000010575f80fd5b5060405162000f9e38038062000f9e8339810160408190526200003391620001c1565b818585600362000044838262000300565b50600462000053828262000300565b5050506001600160a01b0381166200008457604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b6200008f81620000af565b5060068390556007620000a3828262000300565b505050505050620003cc565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b634e487b7160e01b5f52604160045260245ffd5b5f82601f83011262000124575f80fd5b81516001600160401b038082111562000141576200014162000100565b604051601f8301601f19908116603f011681019082821181831017156200016c576200016c62000100565b816040528381526020925086602085880101111562000189575f80fd5b5f91505b83821015620001ac57858201830151818301840152908201906200018d565b5f602085830101528094505050505092915050565b5f805f805f60a08688031215620001d6575f80fd5b85516001600160401b0380821115620001ed575f80fd5b620001fb89838a0162000114565b9650602088015191508082111562000211575f80fd5b6200021f89838a0162000114565b604089015160608a0151919750955091506001600160a01b038216821462000245575f80fd5b6080880151919350808211156200025a575f80fd5b50620002698882890162000114565b9150509295509295909350565b600181811c908216806200028b57607f821691505b602082108103620002aa57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f821115620002fb57805f5260205f20601f840160051c81016020851015620002d75750805b601f840160051c820191505b81811015620002f8575f8155600101620002e3565b50505b505050565b81516001600160401b038111156200031c576200031c62000100565b62000334816200032d845462000276565b84620002b0565b602080601f8311600181146200036a575f8415620003525750858301515b5f19600386901b1c1916600185901b178555620003c4565b5f85815260208120601f198616915b828110156200039a5788860151825594840194600190910190840162000379565b5085821015620003b857878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b610bc480620003da5f395ff3fe608060405234801561000f575f80fd5b506004361061011c575f3560e01c8063715018a6116100a9578063af35c6c71161006e578063af35c6c71461023e578063bef97c8714610246578063d5abeb0114610253578063dd62ed3e1461025c578063f2fde38b14610294575f80fd5b8063715018a6146101ed57806379cc6790146101f55780638da5cb5b1461020857806395d89b4114610223578063a9059cbb1461022b575f80fd5b806323b872dd116100ef57806323b872dd1461017b578063313ce5671461018e57806340c10f191461019d57806342966c68146101b257806370a08231146101c5575f80fd5b806303ee438c1461012057806306fdde031461013e578063095ea7b31461014657806318160ddd14610169575b5f80fd5b6101286102a7565b6040516101359190610a07565b60405180910390f35b610128610333565b610159610154366004610a6e565b6103c3565b6040519015158152602001610135565b6002545b604051908152602001610135565b610159610189366004610a96565b6103dc565b60405160128152602001610135565b6101b06101ab366004610a6e565b6103ff565b005b6101b06101c0366004610acf565b610474565b61016d6101d3366004610ae6565b6001600160a01b03165f9081526020819052604090205490565b6101b0610489565b6101b0610203366004610a6e565b61049c565b6005546040516001600160a01b039091168152602001610135565b6101286104f4565b610159610239366004610a6e565b610503565b6101b0610510565b6008546101599060ff1681565b61016d60065481565b61016d61026a366004610b06565b6001600160a01b039182165f90815260016020908152604080832093909416825291909152205490565b6101b06102a2366004610ae6565b610594565b600780546102b490610b37565b80601f01602080910402602001604051908101604052809291908181526020018280546102e090610b37565b801561032b5780601f106103025761010080835404028352916020019161032b565b820191905f5260205f20905b81548152906001019060200180831161030e57829003601f168201915b505050505081565b60606003805461034290610b37565b80601f016020809104026020016040519081016040528092919081815260200182805461036e90610b37565b80156103b95780601f10610390576101008083540402835291602001916103b9565b820191905f5260205f20905b81548152906001019060200180831161039c57829003601f168201915b5050505050905090565b5f336103d08185856105ce565b60019150505b92915050565b5f336103e98582856105e0565b6103f485858561065c565b506001949350505050565b6104076106b9565b6006548161041460025490565b61041e9190610b6f565b11156104665760405162461bcd60e51b815260206004820152601260248201527145786365656473206d617820737570706c7960701b60448201526064015b60405180910390fd5b61047082826106e6565b5050565b61047c6106b9565b610486338261071a565b50565b6104916106b9565b61049a5f61074e565b565b6104a46106b9565b60085460ff16156104ea5760405162461bcd60e51b815260206004820152601060248201526f151c98591a5b99c81b5a59dc985d195960821b604482015260640161045d565b610470828261071a565b60606004805461034290610b37565b5f336103d081858561065c565b6105186106b9565b60085460ff161561055d5760405162461bcd60e51b815260206004820152600f60248201526e105b1c9958591e48195b98589b1959608a1b604482015260640161045d565b6008805460ff191660011790556040517feadb24812ab3c9a55c774958184293ebdb6c7f6a2dbab11f397d80c86feb65d3905f90a1565b61059c6106b9565b6001600160a01b0381166105c557604051631e4fbdf760e01b81525f600482015260240161045d565b6104868161074e565b6105db838383600161079f565b505050565b6001600160a01b038381165f908152600160209081526040808320938616835292905220545f19811015610656578181101561064857604051637dc7a0d960e11b81526001600160a01b0384166004820152602481018290526044810183905260640161045d565b61065684848484035f61079f565b50505050565b6001600160a01b03831661068557604051634b637e8f60e11b81525f600482015260240161045d565b6001600160a01b0382166106ae5760405163ec442f0560e01b81525f600482015260240161045d565b6105db838383610871565b6005546001600160a01b0316331461049a5760405163118cdaa760e01b815233600482015260240161045d565b6001600160a01b03821661070f5760405163ec442f0560e01b81525f600482015260240161045d565b6104705f8383610871565b6001600160a01b03821661074357604051634b637e8f60e11b81525f600482015260240161045d565b610470825f83610871565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b6001600160a01b0384166107c85760405163e602df0560e01b81525f600482015260240161045d565b6001600160a01b0383166107f157604051634a1406b160e11b81525f600482015260240161045d565b6001600160a01b038085165f908152600160209081526040808320938716835292905220829055801561065657826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161086391815260200190565b60405180910390a350505050565b6001600160a01b0383161580159061089157506001600160a01b03821615155b156108db5760085460ff166108db5760405162461bcd60e51b815260206004820152601060248201526f151c985b9cd9995c9cc81b1bd8dad95960821b604482015260640161045d565b6105db8383836001600160a01b03831661090b578060025f8282546109009190610b6f565b9091555061097b9050565b6001600160a01b0383165f908152602081905260409020548181101561095d5760405163391434e360e21b81526001600160a01b0385166004820152602481018290526044810183905260640161045d565b6001600160a01b0384165f9081526020819052604090209082900390555b6001600160a01b038216610997576002805482900390556109b5565b6001600160a01b0382165f9081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516109fa91815260200190565b60405180910390a3505050565b5f602080835283518060208501525f5b81811015610a3357858101830151858201604001528201610a17565b505f604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610a69575f80fd5b919050565b5f8060408385031215610a7f575f80fd5b610a8883610a53565b946020939093013593505050565b5f805f60608486031215610aa8575f80fd5b610ab184610a53565b9250610abf60208501610a53565b9150604084013590509250925092565b5f60208284031215610adf575f80fd5b5035919050565b5f60208284031215610af6575f80fd5b610aff82610a53565b9392505050565b5f8060408385031215610b17575f80fd5b610b2083610a53565b9150610b2e60208401610a53565b90509250929050565b600181811c90821680610b4b57607f821691505b602082108103610b6957634e487b7160e01b5f52602260045260245ffd5b50919050565b808201808211156103d657634e487b7160e01b5f52601160045260245ffdfea26469706673582212207e87767950411975131c68fbff0eecd8f555a5feafbeb64ba662e7ae7b09e67264736f6c634300081800339b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00a26469706673582212204a220fbb032ec1ebeae6f8ae2175eb9bd0207433431f890623ddad21ef3d8cb464736f6c63430008180033",
    "sourceMap": "413:32283:18:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30469:261;;;;;;:::i;:::-;;:::i;:::-;;32009:291;;;;;;:::i;:::-;;:::i;:::-;;;345:25:20;;;333:2;318:18;32009:291:18;;;;;;;;32306:388;;;;;;:::i;:::-;;:::i;:::-;;;;808:25:20;;;864:2;849:18;;842:34;;;;781:18;32306:388:18;634:248:20;2699:27:18;;;;;;4652:35;;;;;;30869:463;;;;;;:::i;:::-;;:::i;8107:696::-;;;;;;:::i;:::-;;:::i;5238:32::-;;;;;;;;;;;;;;;-1:-1:-1;;;;;5238:32:18;;;;;;;;;;;;-1:-1:-1;;;;;2873:32:20;;;2855:51;;2937:2;2922:18;;2915:34;;;;2965:18;;;2958:34;;;;3023:2;3008:18;;3001:34;3066:3;3051:19;;3044:35;2893:3;3095:19;;3088:35;2842:3;2827:19;5238:32:18;2568:561:20;30066:214:18;;;;;;:::i;:::-;;:::i;19683:1856::-;;;;;;:::i;:::-;;:::i;2859:49::-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;3299:14:20;;3292:22;3274:41;;3262:2;3247:18;2859:49:18;3134:187:20;4857:45:18;;;;;;:::i;:::-;;;;;;;;;;;;;;2732:47;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2732:47:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;3749:44::-;;;;;;:::i;:::-;;;;;;;;;;;;;;2931:35;;;;;-1:-1:-1;;;;;2931:35:18;;;;;;-1:-1:-1;;;;;5560:32:20;;;5542:51;;5530:2;5515:18;2931:35:18;5396:203:20;7827:127:18;;;;;;:::i;:::-;;:::i;15810:1456::-;;;;;;:::i;:::-;;:::i;2293:101:0:-;;;:::i;3394:48:18:-;;3438:4;3394:48;;4402:60;;;;;4908:41;;;;;;:::i;:::-;;;;;;;;;;;;-1:-1:-1;;;;;4908:41:18;;;1638:85:0;1684:7;1710:6;-1:-1:-1;;;;;1710:6:0;1638:85;;12055:1258:18;;;;;;:::i;:::-;;:::i;25992:1309::-;;;;;;:::i;:::-;;:::i;31557:424::-;;;;;;:::i;:::-;;:::i;2972:28::-;;;;;;3156:42;;3194:4;3156:42;;17665:934;;;;;;:::i;:::-;;:::i;3944:39::-;;3978:5;3944:39;;;;;7245:8:20;7233:21;;;7215:40;;7203:2;7188:18;3944:39:18;7071:190:20;29601:259:18;;;;;;:::i;:::-;;:::i;2785:68::-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;2543:215:0;;;;;;:::i;:::-;;:::i;25355:470:18:-;;;;;;:::i;:::-;;:::i;4595:51::-;;4642:4;4595:51;;30469:261;1531:13:0;:11;:13::i;:::-;4642:4:18::1;30557:8;:32;;30549:59;;;::::0;-1:-1:-1;;;30549:59:18;;8337:2:20;30549:59:18::1;::::0;::::1;8319:21:20::0;8376:2;8356:18;;;8349:30;-1:-1:-1;;;8395:18:20;;;8388:44;8449:18;;30549:59:18::1;;;;;;;;;30651:20;::::0;30623:59:::1;::::0;;808:25:20;;;864:2;849:18;;842:34;;;30623:59:18::1;::::0;781:18:20;30623:59:18::1;;;;;;;30692:20;:31:::0;30469:261::o;32009:291::-;32073:7;32122:19;;;:8;:19;;;;;;;32194:17;;;;32225:24;;;;32263:20;;;;32122:19;;32158:135;;32194:17;;32225:24;32158:22;:135::i;:::-;32151:142;32009:291;-1:-1:-1;;;32009:291:18:o;32306:388::-;32384:12;32451:19;;;:8;:19;;;;;;;32530:17;;;;32569:24;;;;32595:20;;;;32384:12;;32487:138;;32530:17;;32549:6;;32569:24;32487:29;:138::i;:::-;32649:29;;;;32480:145;;-1:-1:-1;32682:5:18;;32642:36;;32480:145;32642:36;:::i;:::-;32641:46;;;;:::i;:::-;32635:52;;32411:283;32306:388;;;;;:::o;30869:463::-;1531:13:0;:11;:13::i;:::-;30992:1:18::1;30961:19;;::::0;::::1;:6:::0;:19:::1;:::i;:::-;-1:-1:-1::0;;;;;30961:33:18::1;::::0;30953:64:::1;;;::::0;-1:-1:-1;;;30953:64:18;;9242:2:20;30953:64:18::1;::::0;::::1;9224:21:20::0;9281:2;9261:18;;;9254:30;-1:-1:-1;;;9300:18:20;;;9293:48;9358:18;;30953:64:18::1;9040:342:20::0;30953:64:18::1;31027:102;31042:6;:16;;;31060:6;:16;;;31078:6;:12;;;31092:6;:15;;;31109:6;:19;;;31027:14;:102::i;:::-;31154:6:::0;31139:12:::1;:21;31154:6:::0;31139:12;:21:::1;:::i;:::-;-1:-1:-1::0;31175:150:18::1;::::0;-1:-1:-1;31208:19:18::1;;::::0;::::1;:6:::0;:19:::1;:::i;:::-;31247:16;31175:150:::0;;-1:-1:-1;;;;;2873:32:20;;;2855:51;;31229:16:18::1;::::0;;::::1;;2922:18:20::0;;;2915:34;31247:16:18;;::::1;;2965:18:20::0;;;2958:34;31265:12:18::1;::::0;;::::1;;3008:18:20::0;;;3001:34;31279:15:18::1;::::0;;::::1;;3051:19:20::0;;;3044:35;31296:19:18::1;::::0;;::::1;;3095::20::0;;;3088:35;2842:3;2827:19;31175:150:18::1;;;;;;;30869:463:::0;:::o;8107:696::-;8265:36;;;;;;;;8289:12;8265:36;-1:-1:-1;;;;;8265:36:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8232:17;;8311:57;;;;-1:-1:-1;;;8311:57:18;;10236:2:20;8311:57:18;;;10218:21:20;10275:2;10255:18;;;10248:30;-1:-1:-1;;;10294:18:20;;;10287:46;10350:18;;8311:57:18;10034:340:20;8311:57:18;8413:373;;;;;;;;;;;;;;;;;;;;;;;;;8385:411;;8413:373;;;8451:4;;;;;;8413:373;;8451:4;;;;8413:373;;;;;;;;;-1:-1:-1;;;8413:373:18;;;-1:-1:-1;8413:373:18;;;;;;;;;;;;;;;;;;;;;;;;;;;8481:6;;;;;;8413:373;;8481:6;;;;8413:373;;;;;;;;;-1:-1:-1;;;8413:373:18;;;-1:-1:-1;8413:373:18;;;;;;;;;;;;;;;;;;;;;;;;;;;8518:11;;;;;;8413:373;;8518:11;;;;8413:373;;;;;;;;;-1:-1:-1;;;8413:373:18;;;-1:-1:-1;8413:373:18;8558:11;;;;8413:373;;;;8601:14;;-1:-1:-1;;;;;8413:373:18;;;;;;;;;8644:11;;;8413:373;;;;;;;;8680:7;;;8413:373;;;;;;;;8715:10;;;8413:373;;;;;;;;8757:14;;;8413:373;;;;;8385:14;:411::i;:::-;8378:418;8107:696;-1:-1:-1;;;;;;;;8107:696:18:o;30066:214::-;1531:13:0;:11;:13::i;:::-;3194:4:18::1;30145:6;:21;;30137:46;;;::::0;-1:-1:-1;;;30137:46:18;;10581:2:20;30137:46:18::1;::::0;::::1;10563:21:20::0;10620:2;10600:18;;;10593:30;-1:-1:-1;;;10639:18:20;;;10632:42;10691:18;;30137:46:18::1;10379:336:20::0;30137:46:18::1;30219:13;::::0;30198:43:::1;::::0;;808:25:20;;;864:2;849:18;;842:34;;;30198:43:18::1;::::0;781:18:20;30198:43:18::1;;;;;;;30251:13;:22:::0;30066:214::o;19683:1856::-;3023:21:11;:19;:21::i;:::-;19751:27:18::1;19781:19:::0;;;:8:::1;:19;::::0;;;;;;;;19818:13:::1;::::0;::::1;::::0;::::1;;:39;::::0;::::1;;;;;;:::i;:::-;;19810:73;;;::::0;-1:-1:-1;;;19810:73:18;;10922:2:20;19810:73:18::1;::::0;::::1;10904:21:20::0;10961:2;10941:18;;;10934:30;-1:-1:-1;;;10980:18:20;;;10973:51;11041:18;;19810:73:18::1;10720:345:20::0;19810:73:18::1;19894:21;19918:24;19934:7;19918:15;:24::i;:::-;19894:48;;19952:13;19968:89;19991:7;:17;;;20010:7;:14;;:24;;;20036:7;:14;;:20;;;19968:22;:89::i;:::-;19952:105;;20067:19;20089:59;20101:13;619:4:17;20142:5:18;20089:11;:59::i;:::-;-1:-1:-1::0;;;;;;;;;;;;;;;;;;;;;;;;;20197:20:18;;-1:-1:-1;;;;;20197:20:18;;::::1;20187:30:::0;;;20197:20;20239:27;::::1;::::0;;;::::1;-1:-1:-1::0;;;20227:39:18;;;-1:-1:-1;;;;;;20276:55:18;20358:34;;-1:-1:-1;;;20358:34:18;;20386:4:::1;20358:34;::::0;::::1;5542:51:20::0;20067:81:18;;-1:-1:-1;;20395:13:18;;20239:27;20358:19:::1;::::0;5515:18:20;;20358:34:18::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:50;;;;:::i;:::-;20341:14;::::0;::::1;:67:::0;20459:13:::1;::::0;::::1;:37:::0;;-1:-1:-1;;20459:37:18::1;20475:21;20459:37;::::0;;20524:9:::1;::::0;;::::1;::::0;-1:-1:-1;;;;;20506:29:18::1;-1:-1:-1::0;20506:29:18;;;:9:::1;:29:::0;;;;;;:46;;20539:13;;-1:-1:-1;20506:46:18::1;::::0;20539:13;;20506:46:::1;:::i;:::-;;;;;;;;20563:1;:7;;;-1:-1:-1::0;;;;;20563:23:18::1;;:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;20619:1;20603:13;:17;:36;;;;;20638:1;20624:11;:15;20603:36;20599:442;;;20655:7:::0;;:40:::1;::::0;-1:-1:-1;;;20655:40:18;;20676:4:::1;20655:40;::::0;::::1;11566:51:20::0;11633:18;;;11626:34;;;-1:-1:-1;;;;;20655:12:18;;::::1;::::0;::::1;::::0;11539:18:20;;20655:40:18::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;20729:37;20743:5;20750:1;:15;;;20729:13;:37::i;:::-;-1:-1:-1::0;;;;;20709:57:18::1;:17;::::0;::::1;:57:::0;20781:10:::1;::::0;20807::::1;20709:1:::0;20807:7:::1;:10::i;:::-;20909:17;::::0;::::1;::::0;20840:87:::1;::::0;-1:-1:-1;;;20840:87:18;;-1:-1:-1;;;;;11956:15:20;;;20840:87:18::1;::::0;::::1;11938:34:20::0;12008:15;;;11988:18;;;11981:43;3978:5:18::1;12040:18:20::0;;;12033:49;12118:15;;;12098:18;;;12091:43;20780:37:18;;-1:-1:-1;20780:37:18;;-1:-1:-1;20840:15:18::1;:50;::::0;::::1;::::0;11872:19:20;;20840:87:18::1;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1::0;;;;;20831:96:18::1;:6;::::0;::::1;:96:::0;20941:48:::1;20831:1:::0;20962:11;20975:13;20941:17:::1;:48::i;:::-;21003:27;21017:9;21028:1;21003:13;:27::i;:::-;20641:400;;20599:442;21155:7:::0;;:32:::1;::::0;-1:-1:-1;;;21155:32:18;;21181:4:::1;21155:32;::::0;::::1;5542:51:20::0;21134:18:18::1;::::0;-1:-1:-1;;;;;21155:17:18::1;::::0;::::1;::::0;5515:18:20;;21155:32:18::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;21134:53:::0;-1:-1:-1;21201:14:18;;21197:44:::1;;21217:7:::0;;:24:::1;::::0;-1:-1:-1;;;21217:24:18;;::::1;::::0;::::1;345:25:20::0;;;-1:-1:-1;;;;;21217:12:18;;::::1;::::0;::::1;::::0;318:18:20;;21217:24:18::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;21197:44;21310:14;::::0;::::1;::::0;21273:9:::1;::::0;::::1;::::0;:34:::1;::::0;-1:-1:-1;;;21273:34:18;;21301:4:::1;21273:34;::::0;::::1;5542:51:20::0;21251:19:18::1;::::0;21310:14;-1:-1:-1;;;;;21273:19:18::1;::::0;::::1;::::0;5515:18:20;;21273:34:18::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:51;;;;:::i;:::-;21251:73:::0;-1:-1:-1;21338:15:18;;21334:80:::1;;21378:22;::::0;::::1;::::0;21355:9:::1;::::0;::::1;::::0;:59:::1;::::0;-1:-1:-1;;;;;21355:22:18;;::::1;::::0;21378::::1;21402:11:::0;21355:22:::1;:59::i;:::-;21505:1;:7;;;-1:-1:-1::0;;;;;21505:25:18::1;;:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;19741:1798;;;;;;;3065:20:11::0;2365:1;-1:-1:-1;;;;;;;;;;;3972:62:11;3749:292;3065:20;19683:1856:18;:::o;7827:127::-;7894:17;7930;;7945:1;7930:17;:::i;:::-;:14;:17::i;:::-;7923:24;7827:127;-1:-1:-1;;7827:127:18:o;15810:1456::-;3023:21:11;:19;:21::i;:::-;15918:27:18::1;15948:19:::0;;;:8:::1;:19;::::0;;;;16002::::1;15985:13;::::0;::::1;::::0;::::1;;:36;::::0;::::1;;;;;;:::i;:::-;;15977:67;;;::::0;-1:-1:-1;;;15977:67:18;;14983:2:20;15977:67:18::1;::::0;::::1;14965:21:20::0;15022:2;15002:18;;;14995:30;-1:-1:-1;;;15041:18:20;;;15034:48;15099:18;;15977:67:18::1;14781:342:20::0;15977:67:18::1;16071:1;16062:6;:10;16054:34;;;::::0;-1:-1:-1;;;16054:34:18;;15330:2:20;16054:34:18::1;::::0;::::1;15312:21:20::0;15369:2;15349:18;;;15342:30;-1:-1:-1;;;15388:18:20;;;15381:41;15439:18;;16054:34:18::1;15128:335:20::0;16054:34:18::1;16229:24;::::0;;;:13:::1;:24;::::0;;;;;;;16254:10:::1;16229:36:::0;;;;;;;;:46;-1:-1:-1;16229:46:18::1;16221:74;;;::::0;-1:-1:-1;;;16221:74:18;;15670:2:20;16221:74:18::1;::::0;::::1;15652:21:20::0;15709:2;15689:18;;;15682:30;-1:-1:-1;;;15728:18:20;;;15721:45;15783:18;;16221:74:18::1;15468:339:20::0;16221:74:18::1;16306:16;16325:131;16373:7;:17;;;16392:6;16400:7;:14;;:24;;;16426:7;:14;;:20;;;16325:34;:131::i;:::-;16306:150;;16466:19;16533:5;16500:7;:14;;:29;;;16489:8;:40;;;;:::i;:::-;16488:50;;;;:::i;:::-;16466:72:::0;-1:-1:-1;16582:11:18;16556:22:::1;16466:72:::0;16556:8;:22:::1;:::i;:::-;:37;;16548:67;;;::::0;-1:-1:-1;;;16548:67:18;;16014:2:20;16548:67:18::1;::::0;::::1;15996:21:20::0;16053:2;16033:18;;;16026:30;-1:-1:-1;;;16072:18:20;;;16065:47;16129:18;;16548:67:18::1;15812:341:20::0;16548:67:18::1;16683:27;::::0;::::1;::::0;16720:19:::1;::::0;::::1;:31:::0;;-1:-1:-1;;;;;16683:27:18;;::::1;::::0;16743:8;;16720:19;16666:14:::1;::::0;16720:31:::1;::::0;16743:8;;16720:31:::1;:::i;:::-;;;;;;;;16782:6;16761:7;:17;;;:27;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;;16798:24:18::1;::::0;;;:13:::1;:24;::::0;;;;;;;16823:10:::1;16798:36:::0;;;;;;;:46;;16838:6;;16798:24;:46:::1;::::0;16838:6;;16798:46:::1;:::i;:::-;::::0;;;-1:-1:-1;;;;;;;16854:27:18;::::1;;::::0;;;:9:::1;:27;::::0;;;;:39;;16885:8;;16854:27;:39:::1;::::0;16885:8;;16854:39:::1;:::i;:::-;::::0;;;-1:-1:-1;;16904:20:18;;:49:::1;::::0;-1:-1:-1;;;16904:49:18;;16934:10:::1;16904:49;::::0;::::1;11566:51:20::0;11633:18;;;11626:34;;;-1:-1:-1;;;;;16904:20:18;;::::1;::::0;:29:::1;::::0;11539:18:20;;16904:49:18::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;16981:1;16967:11;:15;16963:76;;;17005:20;::::0;16984:55:::1;::::0;-1:-1:-1;;;;;16984:20:18;;::::1;::::0;17005::::1;17027:11:::0;16984:20:::1;:55::i;:::-;17049:56;17070:10;17082:22;17093:11:::0;17082:8;:22:::1;:::i;:::-;-1:-1:-1::0;;;;;17049:20:18;::::1;::::0;:56;:20:::1;:56::i;:::-;17211:19;::::0;::::1;::::0;17232:17:::1;::::0;::::1;::::0;17121:138:::1;::::0;;16417:25:20;;;16473:2;16458:18;;16451:34;;;16501:18;;;16494:34;;;16559:2;16544:18;;16537:34;;;;16602:3;16587:19;;16580:35;17156:10:18::1;::::0;17145:9;;17121:138:::1;::::0;16404:3:20;16389:19;17121:138:18::1;;;;;;;15908:1358;;;;3065:20:11::0;2365:1;-1:-1:-1;;;;;;;;;;;3972:62:11;3749:292;3065:20;15810:1456:18;;;:::o;2293:101:0:-;1531:13;:11;:13::i;:::-;2357:30:::1;2384:1;2357:18;:30::i;:::-;2293:101::o:0;12055:1258:18:-;3023:21:11;:19;:21::i;:::-;12158:27:18::1;12188:19:::0;;;:8:::1;:19;::::0;;;;12242::::1;12225:13;::::0;::::1;::::0;::::1;;:36;::::0;::::1;;;;;;:::i;:::-;;12217:67;;;::::0;-1:-1:-1;;;12217:67:18;;14983:2:20;12217:67:18::1;::::0;::::1;14965:21:20::0;15022:2;15002:18;;;14995:30;-1:-1:-1;;;15041:18:20;;;15034:48;15099:18;;12217:67:18::1;14781:342:20::0;12217:67:18::1;12311:1;12302:6;:10;12294:34;;;::::0;-1:-1:-1;;;12294:34:18;;15330:2:20;12294:34:18::1;::::0;::::1;15312:21:20::0;15369:2;15349:18;;;15342:30;-1:-1:-1;;;15388:18:20;;;15381:41;15439:18;;12294:34:18::1;15128:335:20::0;12294:34:18::1;12339:12;12361:13:::0;12411:22:::1;12417:7;12426:6;12411:5;:22::i;:::-;12473:29;::::0;::::1;::::0;12384:49;;-1:-1:-1;12384:49:18;;-1:-1:-1;12384:49:18;-1:-1:-1;12443:19:18::1;::::0;12506:5:::1;::::0;12466:36:::1;::::0;12384:49;12466:36:::1;:::i;:::-;12465:46;;;;:::i;:::-;12443:68:::0;-1:-1:-1;12551:7:18;12529:18:::1;12443:68:::0;12529:4;:18:::1;:::i;:::-;:29;;12521:59;;;::::0;-1:-1:-1;;;12521:59:18;;16014:2:20;12521:59:18::1;::::0;::::1;15996:21:20::0;16053:2;16033:18;;;16026:30;-1:-1:-1;;;16072:18:20;;;16065:47;16129:18;;12521:59:18::1;15812:341:20::0;12521:59:18::1;12654:4;12631:7;:19;;;:27;;;;;;;:::i;:::-;;;;;;;;12689:6;12668:7;:17;;;:27;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;;12705:24:18::1;::::0;;;:13:::1;:24;::::0;;;;;;;12730:10:::1;12705:36:::0;;;;;;;:46;;12745:6;;12705:24;:46:::1;::::0;12745:6;;12705:46:::1;:::i;:::-;::::0;;;-1:-1:-1;;12779:27:18::1;::::0;::::1;::::0;-1:-1:-1;;;;;12779:27:18::1;12761:47;::::0;;;:9:::1;:47;::::0;;;;:55;;12812:4;;12761:47;:55:::1;::::0;12812:4;;12761:55:::1;:::i;:::-;::::0;;;-1:-1:-1;;12826:77:18;::::1;;;12854:13;::::0;::::1;:38:::0;;-1:-1:-1;;12854:38:18::1;12870:22;12854:38;::::0;;12826:77:::1;12929:27;::::0;::::1;::::0;12913:63:::1;::::0;-1:-1:-1;;;;;12929:27:18::1;12958:4:::0;12964:11;12913:15:::1;:63::i;:::-;12986:20:::0;;:45:::1;::::0;-1:-1:-1;;;12986:45:18;;13012:10:::1;12986:45;::::0;::::1;11566:51:20::0;11633:18;;;11626:34;;;-1:-1:-1;;;;;12986:20:18;;::::1;::::0;:25:::1;::::0;11539:18:20;;12986:45:18::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;-1:-1:-1::0;;;;13138:19:18::1;::::0;::::1;::::0;13159:17:::1;::::0;::::1;::::0;13047:139:::1;::::0;;16417:25:20;;;16473:2;16458:18;;16451:34;;;16501:18;;;16494:34;;;16559:2;16544:18;;16537:34;;;;16602:3;16587:19;;16580:35;13087:10:18::1;::::0;13076:9;;13047:139:::1;::::0;16404:3:20;16389:19;13047:139:18::1;;;;;;;13200:8;13196:111;;;13246:9;13229:67;13257:7;:19;;;13278:7;:17;;;13229:67;;;;;;808:25:20::0;;;864:2;849:18;;842:34;796:2;781:18;;634:248;13229:67:18::1;;;;;;;;13196:111;12148:1165;;;;3065:20:11::0;2365:1;-1:-1:-1;;;;;;;;;;;3972:62:11;3749:292;25992:1309:18;26063:17;26082:19;3023:21:11;:19;:21::i;:::-;26113:27:18::1;26143:19:::0;;;:8:::1;:19;::::0;;;;26197:21:::1;26180:13;::::0;::::1;::::0;::::1;;:38;::::0;::::1;;;;;;:::i;:::-;;:68;;;;-1:-1:-1::0;26222:21:18::1;::::0;;;:10:::1;:21;::::0;;;;;:26;::::1;26180:68;26172:92;;;::::0;-1:-1:-1;;;26172:92:18;;16958:2:20;26172:92:18::1;::::0;::::1;16940:21:20::0;16997:2;16977:18;;;16970:30;-1:-1:-1;;;17016:18:20;;;17009:41;17067:18;;26172:92:18::1;16756:335:20::0;26172:92:18::1;26339:241;::::0;;::::1;::::0;::::1;::::0;;-1:-1:-1;26408:21:18;;;:10:::1;:21;::::0;;;;;;;26339:241;;26466:4:::1;26339:241:::0;;::::1;::::0;;;-1:-1:-1;;;;;26339:241:18;;;;;;;;;;;;26302:288;;-1:-1:-1;;;26302:288:18;;17323:13:20;;26302:288:18::1;::::0;::::1;17305:32:20::0;17379:24;;-1:-1:-1;;;;;17375:50:20;;;17353:20;;;17346:80;17455:24;;17570:21;;17548:20;;;17541:51;17634:24;;17630:33;;;17608:20;;;17601:63;-1:-1:-1;;;26302:15:18::1;:23:::0;;::::1;::::0;::::1;::::0;17277:19:20;;26302:288:18::1;::::0;::::1;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;26661:27;::::0;::::1;::::0;26629:20;;26275:315;;-1:-1:-1;26275:315:18;;-1:-1:-1;;;;;;26661:27:18;;::::1;26629:20:::0;::::1;26621:68;::::0;26726:35:::1;;26754:2;26758;26726:35;;;26743:2;26747;26726:35;26809:28;::::0;::::1;::::0;26699:62;;-1:-1:-1;26699:62:18;-1:-1:-1;26772:21:18::1;::::0;26841:5:::1;::::0;26797:40:::1;::::0;26699:62;26797:40:::1;:::i;:::-;26796:50;;;;:::i;:::-;26772:74;;26856:23;26929:5;26897:7;:14;;:28;;;26883:11;:42;;;;:::i;:::-;26882:52;;;;:::i;:::-;26967:20:::0;;26991:22:::1;::::0;::::1;::::0;26856:78;;-1:-1:-1;26944:96:18::1;::::0;-1:-1:-1;;;;;26967:20:18;;::::1;::::0;26991:22:::1;27015:13:::0;27030:9;26944:7:::1;:96::i;:::-;27058:27;::::0;::::1;::::0;27087:22:::1;::::0;::::1;::::0;27050:90:::1;::::0;-1:-1:-1;;;;;27058:27:18;;::::1;::::0;27087:22:::1;27111:15:::0;27128:11;27050:7:::1;:90::i;:::-;27185:9:::0;27156:138:::1;27196:25;27208:13:::0;27196:9;:25:::1;:::i;:::-;27223:29;27237:15:::0;27223:11;:29:::1;:::i;:::-;27156:138;::::0;;18156:25:20;;;18212:2;18197:18;;18190:34;;;;18240:18;;18233:34;;;18298:2;18283:18;;18276:34;;;18143:3;18128:19;27156:138:18::1;;;;;;;26103:1198;;;;;;3065:20:11::0;2365:1;-1:-1:-1;;;;;;;;;;;3972:62:11;3749:292;3065:20;25992:1309:18;;;:::o;31557:424::-;1531:13:0;:11;:13::i;:::-;3023:21:11::1;:19;:21::i;:::-;-1:-1:-1::0;;;;;31648:16:18;::::2;31640:43;;;::::0;-1:-1:-1;;;31640:43:18;;18523:2:20;31640:43:18::2;::::0;::::2;18505:21:20::0;18562:2;18542:18;;;18535:30;-1:-1:-1;;;18581:18:20;;;18574:44;18635:18;;31640:43:18::2;18321:338:20::0;31640:43:18::2;31711:30;::::0;-1:-1:-1;;;31711:30:18;;31735:4:::2;31711:30;::::0;::::2;5542:51:20::0;31693:15:18::2;::::0;-1:-1:-1;;;;;31711:15:18;::::2;::::0;::::2;::::0;5515:18:20;;31711:30:18::2;;;;;;;;;;;;;;;;;::::0;::::2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1::0;;;;;31766:25:18;::::2;31751:12;31766:25:::0;;;:9:::2;:25;::::0;;;;;31693:48;;-1:-1:-1;31809:14:18;;::::2;31801:43;;;::::0;-1:-1:-1;;;31801:43:18;;18866:2:20;31801:43:18::2;::::0;::::2;18848:21:20::0;18905:2;18885:18;;;18878:30;-1:-1:-1;;;18924:18:20;;;18917:46;18980:18;;31801:43:18::2;18664:340:20::0;31801:43:18::2;31855:14;31872;31882:4:::0;31872:7;:14:::2;:::i;:::-;31855:31:::0;-1:-1:-1;31896:30:18::2;-1:-1:-1::0;;;;;31896:18:18;::::2;31915:2:::0;31855:31;31896:18:::2;:30::i;:::-;31963:2;-1:-1:-1::0;;;;;31941:33:18::2;31955:5;-1:-1:-1::0;;;;;31941:33:18::2;;31967:6;31941:33;;;;345:25:20::0;;333:2;318:18;;199:177;31941:33:18::2;;;;;;;;31630:351;;;3065:20:11::1;2365:1:::0;-1:-1:-1;;;;;;;;;;;3972:62:11;3749:292;3065:20:::1;31557:424:18::0;;:::o;17665:934::-;3023:21:11;:19;:21::i;:::-;17742:27:18::1;17772:19:::0;;;:8:::1;:19;::::0;;;;17823:22:::1;::::0;::::1;::::0;-1:-1:-1;;;;;17823:22:18::1;17809:10;:36;17801:60;;;::::0;-1:-1:-1;;;17801:60:18;;19211:2:20;17801:60:18::1;::::0;::::1;19193:21:20::0;19250:2;19230:18;;;19223:30;-1:-1:-1;;;19269:18:20;;;19262:41;19320:18;;17801:60:18::1;19009:335:20::0;17801:60:18::1;17909:22;17892:13;::::0;::::1;::::0;::::1;;:39;::::0;::::1;;;;;;:::i;:::-;;:81;;;-1:-1:-1::0;17952:21:18::1;17935:13;::::0;::::1;::::0;::::1;;:38;::::0;::::1;;;;;;:::i;:::-;;17892:81;17871:149;;;::::0;-1:-1:-1;;;17871:149:18;;10922:2:20;17871:149:18::1;::::0;::::1;10904:21:20::0;10961:2;10941:18;;;10934:30;-1:-1:-1;;;10980:18:20;;;10973:51;11041:18;;17871:149:18::1;10720:345:20::0;17871:149:18::1;18039:28;::::0;;;:17:::1;:28;::::0;;;;;::::1;;18038:29;18030:59;;;::::0;-1:-1:-1;;;18030:59:18;;19551:2:20;18030:59:18::1;::::0;::::1;19533:21:20::0;19590:2;19570:18;;;19563:30;-1:-1:-1;;;19609:18:20;;;19602:47;19666:18;;18030:59:18::1;19349:341:20::0;18030:59:18::1;18167:14;18206:24;18222:7;18206:15;:24::i;:::-;18184:7;:19;;;:46;;;;:::i;:::-;18167:63;;18257:1;18248:6;:10;18240:42;;;::::0;-1:-1:-1;;;18240:42:18;;19897:2:20;18240:42:18::1;::::0;::::1;19879:21:20::0;19936:2;19916:18;;;19909:30;-1:-1:-1;;;19955:18:20;;;19948:49;20014:18;;18240:42:18::1;19695:343:20::0;18240:42:18::1;18332:28;::::0;;;:17:::1;:28;::::0;;;;;;;:35;;-1:-1:-1;;18332:35:18::1;18363:4;18332:35:::0;;::::1;::::0;;;18395:27;::::1;::::0;-1:-1:-1;;;;;18395:27:18::1;18377:47:::0;;:9:::1;:47:::0;;;;;:57;;18428:6;;18332:28;18377:57:::1;::::0;18428:6;;18377:57:::1;:::i;:::-;::::0;;;-1:-1:-1;;18485:22:18::1;::::0;::::1;::::0;;18444:27;::::1;::::0;:72:::1;::::0;-1:-1:-1;;;;;18444:27:18;;::::1;::::0;18485:22:::1;18509:6:::0;18444:40:::1;:72::i;:::-;18561:22;::::0;::::1;::::0;18532:60:::1;::::0;345:25:20;;;-1:-1:-1;;;;;18561:22:18;;::::1;::::0;18550:9;;18532:60:::1;::::0;333:2:20;318:18;18532:60:18::1;;;;;;;17732:867;;3065:20:11::0;2365:1;-1:-1:-1;;;;;;;;;;;3972:62:11;3749:292;29601:259:18;1531:13:0;:11;:13::i;:::-;-1:-1:-1;;;;;29690:23:18;::::1;29682:54;;;::::0;-1:-1:-1;;;29682:54:18;;20245:2:20;29682:54:18::1;::::0;::::1;20227:21:20::0;20284:2;20264:18;;;20257:30;-1:-1:-1;;;20303:18:20;;;20296:48;20361:18;;29682:54:18::1;20043:342:20::0;29682:54:18::1;29779:20;::::0;29751:60:::1;::::0;-1:-1:-1;;;;;29751:60:18;;::::1;::::0;29779:20:::1;::::0;29751:60:::1;::::0;29779:20:::1;::::0;29751:60:::1;29821:20;:32:::0;;-1:-1:-1;;;;;;29821:32:18::1;-1:-1:-1::0;;;;;29821:32:18;;;::::1;::::0;;;::::1;::::0;;29601:259::o;2543:215:0:-;1531:13;:11;:13::i;:::-;-1:-1:-1;;;;;2627:22:0;::::1;2623:91;;2672:31;::::0;-1:-1:-1;;;2672:31:0;;2700:1:::1;2672:31;::::0;::::1;5542:51:20::0;5515:18;;2672:31:0::1;5396:203:20::0;2623:91:0::1;2723:28;2742:8;2723:18;:28::i;25355:470:18:-:0;25485:11;;-1:-1:-1;;;;;25485:11:18;:25;;;;:54;;-1:-1:-1;25528:11:18;;-1:-1:-1;;;;;25528:11:18;25514:10;:25;25485:54;25477:88;;;;-1:-1:-1;;;25477:88:18;;20592:2:20;25477:88:18;;;20574:21:20;20631:2;20611:18;;;20604:30;-1:-1:-1;;;20650:18:20;;;20643:51;20711:18;;25477:88:18;20390:345:20;25477:88:18;25576:10;;25602:36;;;;25613:4;25602:36;:::i;:::-;25575:63;;;;25667:1;25652:12;:16;25648:80;;;25670:58;-1:-1:-1;;;;;25670:23:18;;25694:10;25714:12;25670:23;:58::i;:::-;25757:1;25742:12;:16;25738:80;;;25760:58;-1:-1:-1;;;;;25760:23:18;;25784:10;25804:12;25760:23;:58::i;:::-;25467:358;;25355:470;;;;:::o;1796:162:0:-;1684:7;1710:6;-1:-1:-1;;;;;1710:6:0;735:10:9;1855:23:0;1851:101;;1901:40;;-1:-1:-1;;;1901:40:0;;735:10:9;1901:40:0;;;5542:51:20;5515:18;;1901:40:0;5396:203:20;3168:211:17;3297:7;619:4;3336:21;3344:13;3336:5;:21;:::i;:::-;3335:37;;;;:::i;:::-;3323:49;;:9;:49;:::i;:::-;3316:56;3168:211;-1:-1:-1;;;;3168:211:17:o;1390:583::-;1550:7;;1740:45;1753:18;1765:6;1753:9;:18;:::i;:::-;619:4;1740:12;:45::i;:::-;1719:66;-1:-1:-1;1795:17:17;1815:112;1879:6;1859:17;1863:13;1859:1;:17;:::i;:::-;:26;;;;:::i;:::-;1841:14;1849:6;1841:5;:14;:::i;:::-;:45;;;;:::i;:::-;619:4;1888:15;619:4;1888:1;:15;:::i;:::-;:29;;;;:::i;:::-;1815:12;:112::i;:::-;1795:132;-1:-1:-1;1944:22:17;1795:132;1944:10;:22;:::i;:::-;1937:29;1390:583;-1:-1:-1;;;;;;;1390:583:17:o;10438:927:18:-;10645:1;10633:9;:13;10625:41;;;;-1:-1:-1;;;10625:41:18;;21351:2:20;10625:41:18;;;21333:21:20;21390:2;21370:18;;;21363:30;-1:-1:-1;;;21409:18:20;;;21402:45;21464:18;;10625:41:18;21149:339:20;10625:41:18;10695:1;10684:8;:12;10676:39;;;;-1:-1:-1;;;10676:39:18;;21695:2:20;10676:39:18;;;21677:21:20;21734:2;21714:18;;;21707:30;-1:-1:-1;;;21753:18:20;;;21746:44;21807:18;;10676:39:18;21493:338:20;10676:39:18;3438:4;10746:12;:33;;:58;;;;;10799:5;10783:12;:21;;10746:58;10725:128;;;;-1:-1:-1;;;10725:128:18;;22038:2:20;10725:128:18;;;22020:21:20;22077:2;22057:18;;;22050:30;22116:25;22096:18;;;22089:53;22159:18;;10725:128:18;21836:347:20;10725:128:18;10873:54;10889:9;10900;10911:5;10918:8;10873:15;:54::i;:::-;10872:55;10864:83;;;;-1:-1:-1;;;10864:83:18;;22390:2:20;10864:83:18;;;22372:21:20;22429:2;22409:18;;;22402:30;-1:-1:-1;;;22448:18:20;;;22441:45;22503:18;;10864:83:18;22188:339:20;10864:83:18;10958:15;10976:65;11000:1;11003:8;11013:9;11024:5;11031:9;10976:23;:65::i;:::-;10958:83;;11051:18;11072:49;11095:7;11104:9;11115:5;11072:22;:49::i;:::-;11051:70;-1:-1:-1;11131:15:18;11149:126;11202:5;11175:23;11186:12;11175:8;:23;:::i;:::-;11174:33;;;;:::i;:::-;619:4:17;11235:10:18;11247:18;11149:11;:126::i;:::-;11131:144;-1:-1:-1;11314:9:18;11293:17;11131:144;11293:7;:17;:::i;:::-;:30;;11285:73;;;;-1:-1:-1;;;11285:73:18;;22734:2:20;11285:73:18;;;22716:21:20;22773:2;22753:18;;;22746:30;22812:32;22792:18;;;22785:60;22862:18;;11285:73:18;22532:354:20;11285:73:18;10615:750;;;10438:927;;;;;:::o;8809:1243::-;8875:17;8904:77;8919:1;:11;;;8932:1;:11;;;8945:1;:7;;;8954:1;:10;;;8966:1;:14;;;8904;:77::i;:::-;9004:12;:14;;;:12;:14;;;:::i;:::-;;;;;8992:26;;9094:18;9132:1;:6;;;9140:1;:8;;;9150:1;:11;;;9171:4;9178:1;:13;;;9115:77;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;9335:27:18;9365:19;;;:8;:19;;;;;;;;;9449:20;;-1:-1:-1;;;;;;9449:20:18;;;-1:-1:-1;;;;;9449:20:18;;;;;;;;;9508:14;;;;-1:-1:-1;9479:19:18;;;:44;;;;;;;;;;;;;;9552:11;;;;9533:16;;;:30;;;9588:7;;;;9573:12;;;:22;;;9623:10;;;;9605:15;;;:28;;;9643:14;;;:27;;9660:10;9643:27;;;;;;9704:13;;;9680:21;;;:37;9449:20;9749:14;;;9727:19;;;:36;;;9796:20;;;9773;;;:43;9826:13;;;:35;;-1:-1:-1;;9826:35:18;;;;;;;10022:13;;;;9877:168;;9449:20;;-1:-1:-1;9365:19:18;;;;9660:10;;9365:19;;9877:168;;;;9449:20;;9508:14;9552:11;;9749:14;;10022:13;9877:168;:::i;:::-;;;;;;;;8894:1158;;;8809:1243;;;:::o;3749:292:11:-;3872:25;:23;:25::i;:::-;2407:1;-1:-1:-1;;;;;;;;;;;3972:62:11;3749:292::o;27590:169:18:-;27667:7;27747:5;27716:7;:14;;:27;;;27694:7;:19;;;:49;;;;:::i;:::-;27693:59;;;;:::i;7296:3683:14:-;7378:14;7429:12;7443:11;7458:12;7465:1;7468;7458:6;:12::i;:::-;7428:42;;;;7552:4;7560:1;7552:9;7548:365;;7887:11;7881:3;:17;;;;;:::i;:::-;;7874:24;;;;;;7548:365;8038:4;8023:11;:19;8019:142;;8062:84;5328:5;8082:16;;5327:36;940:4:10;5322:42:14;8062:11;:84::i;:::-;8413:17;8564:11;8561:1;8558;8551:25;8956:12;8986:15;;;8971:31;;9121:22;;;;;9854:1;9835;:15;;9834:21;;10087;;;10083:25;;10072:36;10157:21;;;10153:25;;10142:36;10229:21;;;10225:25;;10214:36;10300:21;;;10296:25;;10285:36;10373:21;;;10369:25;;10358:36;10447:21;;;10443:25;;;10432:36;9363:12;;;;9359:23;;;9384:1;9355:31;8676:18;;;8666:29;;;9470:11;;;;8719:19;;;;9214:14;;;;9463:18;;;;10922:13;;-1:-1:-1;;7296:3683:14;;;;;:::o;28186:469:18:-;28267:7;28286:17;28306:13;:151;;28403:54;619:4:17;-1:-1:-1;;;28451:5:18;28403:11;:54::i;:::-;28306:151;;;28334:54;28346:5;-1:-1:-1;;;619:4:17;28334:11:18;:54::i;:::-;28286:171;;28467:17;28487:20;28497:9;28487;:20::i;:::-;28467:40;-1:-1:-1;4287:10:18;28525:26;;:56;;;;-1:-1:-1;4346:49:18;28555:26;;28525:56;28517:96;;;;-1:-1:-1;;;28517:96:18;;25095:2:20;28517:96:18;;;25077:21:20;25134:2;25114:18;;;25107:30;25173:29;25153:18;;;25146:57;25220:18;;28517:96:18;24893:351:20;27765:237:18;27825:14;27841;27874:1;:15;;;:121;;27966:9;;;;27986:7;;27874:121;;;27913:7;;27931:9;;;;27874:121;27867:128;;;;27765:237;;;:::o;24418:888::-;24528:19;24565:1;:6;;;24528:44;;24583:15;24608:4;-1:-1:-1;;;;;24608:10:18;;:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;24582:38;;;;;;;;24645:1;:17;;;-1:-1:-1;;;;;24634:28:18;:7;-1:-1:-1;;;;;24634:28:18;;24630:41;;24664:7;;24418:888;;;:::o;24630:41::-;24709:17;;;;24802:15;;;;-1:-1:-1;;;;;24699:27:18;;;;;;;;;;;24788:29;;;;24681:15;24788:29;24843:44;;24874:13;24843:44;;;24856:15;24870:1;24856:11;:15;:::i;:::-;24827:60;;24901:5;24910:1;24901:10;24897:23;;24913:7;;;;;24418:888;;;:::o;24897:23::-;24931:10;24943;24957;24965:1;24957:7;:10::i;:::-;24977:11;:27;;-1:-1:-1;;;;;;24977:27:18;-1:-1:-1;;;;;24977:27:18;;;;;;;;;25066:17;;;;;25085:18;;;26638:15:20;;;25085:18:18;;;26620:34:20;26690:15;;;26670:18;;;26663:43;25085:18:18;;;;;;;;;26555::20;;;25085::18;;;;-1:-1:-1;;;25014:90:18;;26638:15:20;;-1:-1:-1;26690:15:20;;-1:-1:-1;24977:27:18;25014:9;;:90;;25032:4;;25039:10;;25058:5;;25014:90;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;25114:11:18;:24;;-1:-1:-1;;;;;;25114:24:18;;;25154:10;25149:151;;25198:4;-1:-1:-1;;;;;25198:10:18;;:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;25243:17:18;;;;25180:30;;-1:-1:-1;;;;;;;;25232:28:18;;;;;;25224:65;;;;-1:-1:-1;;;25224:65:18;;27741:2:20;25224:65:18;;;27723:21:20;27780:2;27760:18;;;27753:30;27819:26;27799:18;;;27792:54;27863:18;;25224:65:18;27539:348:20;25224:65:18;24518:788;;;;;;;24418:888;;;:::o;21698:1749::-;21800:7;;:32;;-1:-1:-1;;;21800:32:18;;21826:4;21800:32;;;5542:51:20;21779:18:18;;-1:-1:-1;;;;;21800:17:18;;;;5515:18:20;;21800:32:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;21902:14;;;;21865:9;;;;:34;;-1:-1:-1;;;21865:34:18;;21893:4;21865:34;;;5542:51:20;21779:53:18;;-1:-1:-1;21842:20:18;;-1:-1:-1;;;;;21865:19:18;;;;;;5515:18:20;;21865:34:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:51;;;;:::i;:::-;21842:74;;21927:10;21939;21953;21961:1;21953:7;:10::i;:::-;21989:7;;21926:37;;-1:-1:-1;21926:37:18;-1:-1:-1;21974:75:18;;-1:-1:-1;;;;;21974:37:18;22020:15;22038:10;21974:37;:75::i;:::-;22059:9;;;;:62;;-1:-1:-1;;;;;22059:22:18;22090:15;22108:12;22059:22;:62::i;:::-;22293:15;-1:-1:-1;;;;;22293:20:18;;22327:530;;;;;;;;22392:2;-1:-1:-1;;;;;22327:530:18;;;;;22420:2;-1:-1:-1;;;;;22327:530:18;;;;;3978:5;22327:530;;;;;;-1:-1:-1;;22327:530:18;;;;;;4232:6;22327:530;;;;;;22575:1;:15;;;:43;;22606:12;22575:43;;;22593:10;22575:43;22327:530;;;;22652:1;:15;;;:43;;22685:10;22652:43;;;22670:12;22652:43;22327:530;;;;22725:1;22327:530;;;;22756:1;22327:530;;;;22794:4;-1:-1:-1;;;;;22327:530:18;;;;;22827:15;22327:530;;;22293:574;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;-1:-1:-1;22293:574:18;;;;;;;;-1:-1:-1;;22293:574:18;;;;;;;;;;;;:::i;:::-;;;22289:1014;;23245:47;;;23280:1;29964:51:20;;;30046:2;30031:18;;30024:34;;;30074:18;;;30067:34;;;30132:2;30117:18;;30110:34;23245:47:18;;23261:9;;23245:47;;;;;;29951:3:20;23245:47:18;;;22289:1014;;;22947:21;;;;:10;:21;;;;;;;;:31;;;23012:6;;;;;22992;:17;;;;;;;:26;;-1:-1:-1;;;;;;22992:26:18;-1:-1:-1;;;;;22992:26:18;;;;;;;;;;23081:6;;23114:15;;;;22947:21;;23037:171;;22947:31;;23114;;23140:5;23114:31;;;23132:5;23114:31;23163:1;:15;;;:31;;23189:5;23163:31;;;23181:5;23163:31;23037:171;;;-1:-1:-1;;;;;29982:32:20;;;29964:51;;30046:2;30031:18;;30024:34;;;;30074:18;;;30067:34;30132:2;30117:18;;30110:34;29951:3;29936:19;23037:171:18;;;;;;;22868:351;;;;22289:1014;23328:7;;23313:66;;-1:-1:-1;;;;;23313:37:18;23359:15;23377:1;23313:37;:66::i;:::-;23389:9;;;;:51;;-1:-1:-1;;;;;23389:22:18;23420:15;23438:1;23389:22;:51::i;1219:204:8:-;1306:37;1320:5;1327:2;1331:5;1338:4;1306:13;:37::i;:::-;1301:116;;1366:40;;-1:-1:-1;;;1366:40:8;;-1:-1:-1;;;;;5560:32:20;;1366:40:8;;;5542:51:20;5515:18;;1366:40:8;5396:203:20;2548:418:17;2713:7;;2747:22;2763:6;2747:13;:22;:::i;:::-;2732:37;-1:-1:-1;2779:14:17;619:4;2797:18;2809:6;2797:9;:18;:::i;:::-;2796:34;;;;:::i;:::-;2779:51;-1:-1:-1;2840:13:17;619:4;2898:15;619:4;2898:1;:15;:::i;:::-;:29;;;;:::i;:::-;2886:6;2875:8;2879:4;2875:1;:8;:::i;:::-;:17;;;;:::i;:::-;2857:14;2865:6;2857:5;:14;:::i;:::-;:36;;;;:::i;:::-;2856:72;;;;:::i;:::-;2840:88;-1:-1:-1;2945:14:17;2840:88;2945:6;:14;:::i;2912:187:0:-;2985:16;3004:6;;-1:-1:-1;;;;;3020:17:0;;;-1:-1:-1;;;;;;3020:17:0;;;;;;3052:40;;3004:6;;;;;;;3052:40;;2985:16;3052:40;2975:124;2912:187;:::o;13626:917:18:-;13873:17;;;;13900:24;;;;13926:20;;;;13804:9;;13736:14;;;;13830:126;;13873:17;13804:9;;13830:29;:126::i;:::-;13823:133;;13966:17;14012:7;:19;;;13986:7;:14;;:23;;;:45;;;;:::i;:::-;13966:65;;14052:9;14045:4;:16;14041:50;;;-1:-1:-1;14085:5:18;;-1:-1:-1;14063:28:18;;14041:50;14113:9;14106:4;:16;14102:398;;;14188:17;;;;14218:24;;;;14244:20;;;;14147:142;;14188:17;14207:9;;14266;14147:23;:142::i;:::-;14138:151;;14320:1;14311:6;:10;14303:31;;;;-1:-1:-1;;;14303:31:18;;30779:2:20;14303:31:18;;;30761:21:20;30818:1;30798:18;;;30791:29;-1:-1:-1;;;30836:18:20;;;30829:38;30884:18;;14303:31:18;30577:331:20;14303:31:18;14402:17;;;;14429:24;;;;14455:20;;;;14355:134;;14402:17;14421:6;;14355:29;:134::i;:::-;14348:141;;14102:398;-1:-1:-1;14531:4:18;;-1:-1:-1;13626:917:18;;;;;;:::o;14829:514::-;14953:37;;-1:-1:-1;;;14953:37:18;;14984:4;14953:37;;;5542:51:20;14929:21:18;;-1:-1:-1;;;;;14953:22:18;;;;;5515:18:20;;14953:37:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;14929:61;-1:-1:-1;15000:62:18;-1:-1:-1;;;;;15000:29:18;;15030:10;15050:4;15057;15000:29;:62::i;:::-;15093:37;;-1:-1:-1;;;15093:37:18;;15124:4;15093:37;;;5542:51:20;15150:4:18;;15133:13;;-1:-1:-1;;;;;15093:22:18;;;;;5515:18:20;;15093:37:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:53;;;;:::i;:::-;:61;15072:133;;;;-1:-1:-1;;;15072:133:18;;31115:2:20;15072:133:18;;;31097:21:20;31154:2;31134:18;;;31127:30;31193:27;31173:18;;;31166:55;31238:18;;15072:133:18;30913:349:20;15072:133:18;15219:15;;15215:122;;15292:20;;15250:76;;-1:-1:-1;;;;;15250:29:18;;;;15280:10;;15292:20;15314:11;15250:29;:76::i;:::-;14919:424;14829:514;;;:::o;27307:277::-;27416:17;;27412:78;;27454:20;;27435:55;;-1:-1:-1;;;;;27435:18:18;;;;27454:20;27476:13;27435:18;:55::i;:::-;27512:13;27504:5;:21;27500:77;;;27527:50;27546:7;27555:21;27563:13;27555:5;:21;:::i;:::-;-1:-1:-1;;;;;27527:18:18;;;:50;:18;:50::i;6269:704:14:-;6331:7;6354:1;6359;6354:6;6350:150;;6454:35;1035:4:10;6454:11:14;:35::i;:::-;6950:1;6945;6941;:5;6940:11;;;;;:::i;:::-;;6954:1;6940:15;6930:5;;;6914:42;;6269:704;-1:-1:-1;;;6269:704:14:o;28981:483:18:-;29124:4;-1:-1:-1;;;;;29148:29:18;;29144:46;;;-1:-1:-1;29186:4:18;29179:11;;29144:46;29201:7;29214:33;29226:9;29237;29214:11;:33::i;:::-;29200:47;;;29262:2;29257:20;;29273:4;29266:11;;;;;29257:20;29296:45;29308:5;29331:9;29315:13;29331:9;29327:1;29315:13;:::i;:::-;:25;;;;:::i;:::-;29296:11;:45::i;:::-;-1:-1:-1;29287:54:18;-1:-1:-1;29287:54:18;29351:20;;29367:4;29360:11;;;;;29351:20;29390:47;29402:8;619:4:17;29390:11:18;:47::i;:::-;-1:-1:-1;29454:3:18;;28981:483;-1:-1:-1;;;;;;28981:483:18:o;3919:721:17:-;4101:7;;4275:9;4251:20;619:4;4251:6;:20;:::i;:::-;4250:34;;;;:::i;:::-;:38;;4287:1;4250:38;:::i;:::-;4237:51;;4307:10;4302:2;:15;4298:36;;;-1:-1:-1;4324:10:17;4298:36;4344:10;4368:247;4380:2;4375;:7;4368:247;;;4398:11;4428:1;4413:7;4418:2;4413;:7;:::i;:::-;:11;;4423:1;4413:11;:::i;:::-;4412:17;;;;:::i;:::-;4398:31;;4505:6;4447:54;4464:13;4479:3;4484:9;4495:5;4447:16;:54::i;:::-;:64;4443:162;;4536:3;4531:8;;4443:162;;;4583:7;4589:1;4583:3;:7;:::i;:::-;4578:12;;4443:162;4384:231;4368:247;;11108:238:14;11209:7;11263:76;11279:26;11296:8;11279:16;:26::i;:::-;:59;;;;;11337:1;11322:11;11309:25;;;;;:::i;:::-;11319:1;11316;11309:25;:29;11279:59;34911:9:15;34904:17;;34792:145;11263:76:14;11235:25;11242:1;11245;11248:11;11235:6;:25::i;:::-;:104;;;;:::i;:::-;11228:111;11108:238;-1:-1:-1;;;;;11108:238:14:o;3586:157:11:-;-1:-1:-1;;;;;;;;;;;4560:52:11;2407:1;4560:63;3644:93;;3696:30;;-1:-1:-1;;;3696:30:11;;;;;;;;;;;1027:550:14;1088:12;;-1:-1:-1;;1471:1:14;1468;1461:20;1501:9;;;;1549:11;;;1535:12;;;;1531:30;;;;;1027:550;-1:-1:-1;;1027:550:14:o;1776:194:10:-;1881:10;1875:4;1868:24;1918:4;1912;1905:18;1949:4;1943;1936:18;20859:5181:14;20907:7;21025:1;21020;:6;21016:53;;-1:-1:-1;21053:1:14;20859:5181::o;21016:53::-;22009:1;22037;-1:-1:-1;;;22057:16:14;;22053:92;;22100:3;22093:10;;;;;22128:2;22121:9;22053:92;22169:7;22162:2;:15;22158:90;;22204:2;22197:9;;;;;22231:2;22224:9;22158:90;22272:7;22265:2;:15;22261:90;;22307:2;22300:9;;;;;22334:2;22327:9;22261:90;22375:7;22368:2;:15;22364:89;;22410:2;22403:9;;;;;22437:1;22430:8;22364:89;22477:6;22470:2;:14;22466:87;;22511:1;22504:8;;;;;22537:1;22530:8;22466:87;22577:6;22570:2;:14;22566:87;;22611:1;22604:8;;;;;22637:1;22630:8;22566:87;22677:6;22670:2;:14;22666:61;;22711:1;22704:8;22666:61;23153:1;:6;23164:1;23152:13;;;;;25063:1;23152:13;25063:6;;;;:::i;:::-;;25058:2;:11;25057:18;;25052:23;;25183:1;25176:2;25172:1;:6;;;;;:::i;:::-;;25167:2;:11;25166:18;;25161:23;;25294:1;25287:2;25283:1;:6;;;;;:::i;:::-;;25278:2;:11;25277:18;;25272:23;;25403:1;25396:2;25392:1;:6;;;;;:::i;:::-;;25387:2;:11;25386:18;;25381:23;;25513:1;25506:2;25502:1;:6;;;;;:::i;:::-;;25497:2;:11;25496:18;;25491:23;;25623:1;25616:2;25612:1;:6;;;;;:::i;:::-;;25607:2;:11;25606:18;;25601:23;;25995:28;26020:2;26016:1;:6;;;;;:::i;:::-;;26011:11;;;34792:145:15;25995:28:14;25990:33;;;20859:5181;-1:-1:-1;;;20859:5181:14:o;5098:367:8:-;5190:42;5203:5;5210:7;5219:5;5226;5190:12;:42::i;:::-;5185:274;;5253:37;5266:5;5273:7;5282:1;5285:4;5253:12;:37::i;:::-;5248:91;;5299:40;;-1:-1:-1;;;5299:40:8;;-1:-1:-1;;;;;5560:32:20;;5299:40:8;;;5542:51:20;5515:18;;5299:40:8;5396:203:20;5248:91:8;5358:41;5371:5;5378:7;5387:5;5394:4;5358:12;:41::i;8373:1244::-;8600:4;8594:11;-1:-1:-1;;;8467:12:8;8618:22;;;-1:-1:-1;;;;;8666:24:8;;8660:4;8653:38;8711:4;8704:19;;;8467:12;8787:4;8467:12;8775:4;8467:12;;8759:5;8752;8747:45;8736:56;;9004:1;8997:4;8991:11;8988:18;8979:7;8975:32;8965:606;;9136:6;9126:7;9119:15;9115:28;9112:165;;;9192:16;9186:4;9181:3;9166:43;9242:16;9237:3;9230:29;9112:165;9553:1;9545:5;9533:18;9530:25;9511:16;9504:24;9500:56;9491:7;9487:70;9476:81;;8965:606;9591:4;9584:17;-1:-1:-1;8373:1244:8;;-1:-1:-1;;;;8373:1244:8:o;1662:232::-;1767:47;1785:5;1792:4;1798:2;1802:5;1809:4;1767:17;:47::i;:::-;1762:126;;1837:40;;-1:-1:-1;;;1837:40:8;;-1:-1:-1;;;;;5560:32:20;;1837:40:8;;;5542:51:20;5515:18;;1837:40:8;5396:203:20;2414:482:14;2551:5;;;2744:9;;;2741:16;;2759:9;;2738:31;;2475:12;;2855:24;2738:31;34911:9:15;34904:17;;34792:145;2855:24:14;2851:1;:28;2842:37;;2515:375;2414:482;;;;;:::o;32337:122::-;32405:4;32446:1;32434:8;32428:15;;;;;;;;:::i;:::-;:19;;;;:::i;:::-;:24;;32451:1;32428:24;32421:31;;32337:122;;;:::o;12059:1252:8:-;12289:4;12283:11;-1:-1:-1;;;12157:12:8;12307:22;;;-1:-1:-1;;;;;12355:29:8;;12349:4;12342:43;12405:4;12398:19;;;12157:12;12481:4;12157:12;12469:4;12157:12;;12453:5;12446;12441:45;12430:56;;12698:1;12691:4;12685:11;12682:18;12673:7;12669:32;12659:606;;12830:6;12820:7;12813:15;12809:28;12806:165;;;12886:16;12880:4;12875:3;12860:43;12936:16;12931:3;12924:29;10165:1393;10460:4;10454:11;-1:-1:-1;;;10323:12:8;10478:22;;;-1:-1:-1;;;;;10526:26:8;;;10520:4;10513:40;10579:24;;10573:4;10566:38;10624:4;10617:19;;;10323:12;10700:4;10323:12;10688:4;10323:12;;10672:5;10665;10660:45;10649:56;;10917:1;10910:4;10904:11;10901:18;10892:7;10888:32;10878:606;;11049:6;11039:7;11032:15;11028:28;11025:165;;;11105:16;11099:4;11094:3;11079:43;11155:16;11150:3;11143:29;11025:165;11466:1;11458:5;11446:18;11443:25;11424:16;11417:24;11413:56;11404:7;11400:70;11389:81;;10878:606;11504:4;11497:17;-1:-1:-1;11540:1:8;11534:4;11527:15;10165:1393;;-1:-1:-1;;;;;10165:1393:8:o;-1:-1:-1:-;;;;;;;;:::o;14:180:20:-;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:20;;14:180;-1:-1:-1;14:180:20:o;381:248::-;449:6;457;510:2;498:9;489:7;485:23;481:32;478:52;;;526:1;523;516:12;478:52;-1:-1:-1;;549:23:20;;;619:2;604:18;;;591:32;;-1:-1:-1;381:248:20:o;887:199::-;978:6;1031:3;1019:9;1010:7;1006:23;1002:33;999:53;;;1048:1;1045;1038:12;999:53;-1:-1:-1;1071:9:20;887:199;-1:-1:-1;887:199:20:o;1091:348::-;1143:8;1153:6;1207:3;1200:4;1192:6;1188:17;1184:27;1174:55;;1225:1;1222;1215:12;1174:55;-1:-1:-1;1248:20:20;;1291:18;1280:30;;1277:50;;;1323:1;1320;1313:12;1277:50;1360:4;1352:6;1348:17;1336:29;;1412:3;1405:4;1396:6;1388;1384:19;1380:30;1377:39;1374:59;;;1429:1;1426;1419:12;1374:59;1091:348;;;;;:::o;1444:1010::-;1557:6;1565;1573;1581;1589;1597;1650:2;1638:9;1629:7;1625:23;1621:32;1618:52;;;1666:1;1663;1656:12;1618:52;1706:9;1693:23;1735:18;1776:2;1768:6;1765:14;1762:34;;;1792:1;1789;1782:12;1762:34;1831:59;1882:7;1873:6;1862:9;1858:22;1831:59;:::i;:::-;1909:8;;-1:-1:-1;1805:85:20;-1:-1:-1;1997:2:20;1982:18;;1969:32;;-1:-1:-1;2013:16:20;;;2010:36;;;2042:1;2039;2032:12;2010:36;2081:61;2134:7;2123:8;2112:9;2108:24;2081:61;:::i;:::-;2161:8;;-1:-1:-1;2055:87:20;-1:-1:-1;2249:2:20;2234:18;;2221:32;;-1:-1:-1;2265:16:20;;;2262:36;;;2294:1;2291;2284:12;2262:36;;2333:61;2386:7;2375:8;2364:9;2360:24;2333:61;:::i;:::-;1444:1010;;;;-1:-1:-1;1444:1010:20;;-1:-1:-1;1444:1010:20;;2413:8;;1444:1010;-1:-1:-1;;;1444:1010:20:o;3326:127::-;3387:10;3382:3;3378:20;3375:1;3368:31;3418:4;3415:1;3408:15;3442:4;3439:1;3432:15;3458:240;3542:1;3535:5;3532:12;3522:143;;3587:10;3582:3;3578:20;3575:1;3568:31;3622:4;3619:1;3612:15;3650:4;3647:1;3640:15;3522:143;3674:18;;3458:240::o;3703:1161::-;4033:13;;-1:-1:-1;;;;;4029:39:20;4011:58;;4116:4;4104:17;;;4098:24;3998:3;3983:19;;;4131:54;;4164:20;;4098:24;-1:-1:-1;;;;;2525:31:20;2513:44;;2459:104;4131:54;;4241:4;4233:6;4229:17;4223:24;4216:4;4205:9;4201:20;4194:54;4304:4;4296:6;4292:17;4286:24;4279:4;4268:9;4264:20;4257:54;4367:4;4359:6;4355:17;4349:24;4342:4;4331:9;4327:20;4320:54;4423:4;4415:6;4411:17;4405:24;4438:56;4488:4;4477:9;4473:20;4457:14;-1:-1:-1;;;;;2525:31:20;2513:44;;2459:104;4438:56;;4550:4;4542:6;4538:17;4532:24;4525:4;4514:9;4510:20;4503:54;4613:4;4605:6;4601:17;4595:24;4588:4;4577:9;4573:20;4566:54;4639:6;4699:2;4691:6;4687:15;4681:22;4676:2;4665:9;4661:18;4654:50;;4713:57;4765:3;4754:9;4750:19;4742:6;4713:57;:::i;:::-;4801:3;4786:19;;4779:35;;;;4845:3;4830:19;4823:35;3703:1161;;-1:-1:-1;;3703:1161:20:o;4869:131::-;-1:-1:-1;;;;;4944:31:20;;4934:42;;4924:70;;4990:1;4987;4980:12;5005:134;5073:20;;5102:31;5073:20;5102:31;:::i;:::-;5005:134;;;:::o;5144:247::-;5203:6;5256:2;5244:9;5235:7;5231:23;5227:32;5224:52;;;5272:1;5269;5262:12;5224:52;5311:9;5298:23;5330:31;5355:5;5330:31;:::i;5604:393::-;5696:6;5749:2;5737:9;5728:7;5724:23;5720:32;5717:52;;;5765:1;5762;5755:12;5717:52;5805:9;5792:23;5838:18;5830:6;5827:30;5824:50;;;5870:1;5867;5860:12;5824:50;5893:22;;5949:3;5931:16;;;5927:26;5924:46;;;5966:1;5963;5956:12;6002:316;6079:6;6087;6095;6148:2;6136:9;6127:7;6123:23;6119:32;6116:52;;;6164:1;6161;6154:12;6116:52;-1:-1:-1;;6187:23:20;;;6257:2;6242:18;;6229:32;;-1:-1:-1;6308:2:20;6293:18;;;6280:32;;6002:316;-1:-1:-1;6002:316:20:o;6567:402::-;6649:6;6657;6710:2;6698:9;6689:7;6685:23;6681:32;6678:52;;;6726:1;6723;6716:12;6678:52;6765:9;6752:23;6784:31;6809:5;6784:31;:::i;:::-;6834:5;-1:-1:-1;6891:2:20;6876:18;;6863:32;6904:33;6863:32;6904:33;:::i;:::-;6956:7;6946:17;;;6567:402;;;;;:::o;7266:315::-;7334:6;7342;7395:2;7383:9;7374:7;7370:23;7366:32;7363:52;;;7411:1;7408;7401:12;7363:52;7447:9;7434:23;7424:33;;7507:2;7496:9;7492:18;7479:32;7520:31;7545:5;7520:31;:::i;7586:544::-;7672:6;7680;7688;7696;7749:2;7737:9;7728:7;7724:23;7720:32;7717:52;;;7765:1;7762;7755:12;7717:52;7801:9;7788:23;7778:33;;7858:2;7847:9;7843:18;7830:32;7820:42;;7913:2;7902:9;7898:18;7885:32;7940:18;7932:6;7929:30;7926:50;;;7972:1;7969;7962:12;7926:50;8011:59;8062:7;8053:6;8042:9;8038:22;8011:59;:::i;:::-;7586:544;;;;-1:-1:-1;8089:8:20;-1:-1:-1;;;;7586:544:20:o;8478:127::-;8539:10;8534:3;8530:20;8527:1;8520:31;8570:4;8567:1;8560:15;8594:4;8591:1;8584:15;8610:168;8683:9;;;8714;;8731:15;;;8725:22;;8711:37;8701:71;;8752:18;;:::i;8783:127::-;8844:10;8839:3;8835:20;8832:1;8825:31;8875:4;8872:1;8865:15;8899:4;8896:1;8889:15;8915:120;8955:1;8981;8971:35;;8986:18;;:::i;:::-;-1:-1:-1;9020:9:20;;8915:120::o;9387:642::-;9562:5;9549:19;9577:33;9602:7;9577:33;:::i;:::-;9639:11;;-1:-1:-1;;;;;;9635:54:20;-1:-1:-1;;;;;9691:33:20;;;;9632:93;9619:107;;9780:2;9769:14;;9756:28;9721:1;9742:12;;9735:50;9839:2;9828:14;;9815:28;9811:1;9801:12;;9794:50;9898:2;9887:14;;9874:28;9870:1;9860:12;;9853:50;9957:3;9946:15;;9933:29;9929:1;9919:12;;9912:51;9712:3;10006:15;;;;9993:29;9989:1;9979:12;;;9972:51;9387:642::o;11070:184::-;11140:6;11193:2;11181:9;11172:7;11168:23;11164:32;11161:52;;;11209:1;11206;11199:12;11161:52;-1:-1:-1;11232:16:20;;11070:184;-1:-1:-1;11070:184:20:o;11259:128::-;11326:9;;;11347:11;;;11344:37;;;11361:18;;:::i;12145:251::-;12215:6;12268:2;12256:9;12247:7;12243:23;12239:32;12236:52;;;12284:1;12281;12274:12;12236:52;12316:9;12310:16;12335:31;12360:5;12335:31;:::i;12401:127::-;12462:10;12457:3;12453:20;12450:1;12443:31;12493:4;12490:1;12483:15;12517:4;12514:1;12507:15;12533:250;12600:2;12594:9;12642:6;12630:19;;12679:18;12664:34;;12700:22;;;12661:62;12658:88;;;12726:18;;:::i;:::-;12762:2;12755:22;12533:250;:::o;12788:719::-;12831:5;12884:3;12877:4;12869:6;12865:17;12861:27;12851:55;;12902:1;12899;12892:12;12851:55;12938:6;12925:20;12964:18;13001:2;12997;12994:10;12991:36;;;13007:18;;:::i;:::-;13082:2;13076:9;13050:2;13136:13;;-1:-1:-1;;13132:22:20;;;13156:2;13128:31;13124:40;13112:53;;;13180:18;;;13200:22;;;13177:46;13174:72;;;13226:18;;:::i;:::-;13266:10;13262:2;13255:22;13301:2;13293:6;13286:18;13347:3;13340:4;13335:2;13327:6;13323:15;13319:26;13316:35;13313:55;;;13364:1;13361;13354:12;13313:55;13428:2;13421:4;13413:6;13409:17;13402:4;13394:6;13390:17;13377:54;13475:1;13468:4;13463:2;13455:6;13451:15;13447:26;13440:37;13495:6;13486:15;;;;;;12788:719;;;;:::o;13512:1264::-;13626:9;13685:6;13677:5;13661:14;13657:26;13653:39;13650:59;;;13705:1;13702;13695:12;13650:59;13733:17;;:::i;:::-;13786:5;13773:19;13811:18;13852:2;13844:6;13841:14;13838:34;;;13868:1;13865;13858:12;13838:34;13897:53;13935:14;13926:6;13919:5;13915:18;13897:53;:::i;:::-;13888:7;13881:70;14000:2;13993:5;13989:14;13976:28;13960:44;;14029:2;14019:8;14016:16;14013:36;;;14045:1;14042;14035:12;14013:36;14083:55;14123:14;14112:8;14105:5;14101:20;14083:55;:::i;:::-;14078:2;14069:7;14065:16;14058:81;14188:2;14181:5;14177:14;14164:28;14148:44;;14217:2;14207:8;14204:16;14201:36;;;14233:1;14230;14223:12;14201:36;;14271:55;14311:14;14300:8;14293:5;14289:20;14271:55;:::i;:::-;14266:2;14257:7;14253:16;14246:81;;14385:2;14378:5;14374:14;14361:28;14356:2;14347:7;14343:16;14336:54;14425:35;14455:3;14448:5;14444:15;14425:35;:::i;:::-;14419:3;14410:7;14406:17;14399:62;14520:3;14513:5;14509:15;14496:29;14490:3;14481:7;14477:17;14470:56;14585:3;14578:5;14574:15;14561:29;14555:3;14546:7;14542:17;14535:56;14650:3;14643:5;14639:15;14626:29;14620:3;14611:7;14607:17;14600:56;14675:3;14736:2;14729:5;14725:14;14712:28;14707:2;14698:7;14694:16;14687:54;;14763:7;14750:20;;;13512:1264;;;:::o;16626:125::-;16691:9;;;16712:10;;;16709:36;;;16725:18;;:::i;17675:245::-;17754:6;17762;17815:2;17803:9;17794:7;17790:23;17786:32;17783:52;;;17831:1;17828;17821:12;17783:52;-1:-1:-1;;17854:16:20;;17910:2;17895:18;;;17889:25;17854:16;;17889:25;;-1:-1:-1;17675:245:20:o;22891:135::-;22930:3;22951:17;;;22948:43;;22971:18;;:::i;:::-;-1:-1:-1;23018:1:20;23007:13;;22891:135::o;23031:423::-;23073:3;23111:5;23105:12;23138:6;23133:3;23126:19;23163:1;23173:162;23187:6;23184:1;23181:13;23173:162;;;23249:4;23305:13;;;23301:22;;23295:29;23277:11;;;23273:20;;23266:59;23202:12;23173:162;;;23177:3;23380:1;23373:4;23364:6;23359:3;23355:16;23351:27;23344:38;23443:4;23436:2;23432:7;23427:2;23419:6;23415:15;23411:29;23406:3;23402:39;23398:50;23391:57;;;23031:423;;;;:::o;23459:717::-;23760:3;23749:9;23742:22;23723:4;23787:46;23828:3;23817:9;23813:19;23805:6;23787:46;:::i;:::-;23881:9;23873:6;23869:22;23864:2;23853:9;23849:18;23842:50;23915:33;23941:6;23933;23915:33;:::i;:::-;23979:2;23964:18;;23957:34;;;-1:-1:-1;;;;;24027:32:20;;24022:2;24007:18;;24000:60;24097:22;;;24091:3;24076:19;;24069:51;23901:47;-1:-1:-1;24137:33:20;23901:47;24155:6;24137:33;:::i;24181:707::-;24461:4;24507:1;24503;24498:3;24494:11;24490:19;24548:2;24540:6;24536:15;24525:9;24518:34;24600:2;24592:6;24588:15;24583:2;24572:9;24568:18;24561:43;;24640:6;24635:2;24624:9;24620:18;24613:34;24683:6;24678:2;24667:9;24663:18;24656:34;24727:6;24721:3;24710:9;24706:19;24699:35;24771:6;24765:3;24754:9;24750:19;24743:35;24815:3;24809;24798:9;24794:19;24787:32;24836:46;24877:3;24866:9;24862:19;24854:6;24836:46;:::i;:::-;24828:54;24181:707;-1:-1:-1;;;;;;;;;24181:707:20:o;25249:163::-;25327:13;;25380:6;25369:18;;25359:29;;25349:57;;25402:1;25399;25392:12;25417:986;25531:6;25539;25547;25555;25563;25571;25579;25632:3;25620:9;25611:7;25607:23;25603:33;25600:53;;;25649:1;25646;25639:12;25600:53;25681:9;25675:16;25700:31;25725:5;25700:31;:::i;:::-;25750:5;25740:15;;;25800:2;25789:9;25785:18;25779:25;25849:7;25846:1;25835:22;25826:7;25823:35;25813:63;;25872:1;25869;25862:12;25813:63;25895:7;-1:-1:-1;25921:48:20;25965:2;25950:18;;25921:48;:::i;:::-;25911:58;;25988:48;26032:2;26021:9;26017:18;25988:48;:::i;:::-;25978:58;;26055:49;26099:3;26088:9;26084:19;26055:49;:::i;:::-;26045:59;;26149:3;26138:9;26134:19;26128:26;26198:4;26189:7;26185:18;26176:7;26173:31;26163:59;;26218:1;26215;26208:12;26163:59;26293:3;26278:19;;26272:26;26241:7;;-1:-1:-1;26336:15:20;;26329:23;26317:36;;26307:64;;26367:1;26364;26357:12;26307:64;26390:7;26380:17;;;25417:986;;;;;;;;;;:::o;26717:569::-;-1:-1:-1;;;;;27006:15:20;;;26988:34;;27065:14;;27058:22;27053:2;27038:18;;27031:50;27112:2;27097:18;;27090:34;;;27160:15;;27155:2;27140:18;;27133:43;26968:3;27207;27192:19;;27185:32;;;26931:4;;27234:46;;27260:19;;27252:6;27234:46;:::i;27988:1222::-;28210:13;;-1:-1:-1;;;;;2525:31:20;2513:44;;28178:3;28163:19;;28282:4;28274:6;28270:17;28264:24;28297:54;28345:4;28334:9;28330:20;28316:12;-1:-1:-1;;;;;2525:31:20;2513:44;;2459:104;28297:54;;28400:4;28392:6;28388:17;28382:24;28415:55;28464:4;28453:9;28449:20;28433:14;7050:8;7039:20;7027:33;;6974:92;28415:55;;28519:4;28511:6;28507:17;28501:24;28534:54;28582:4;28571:9;28567:20;28551:14;27967:1;27956:20;27944:33;;27892:91;28534:54;;28637:4;28629:6;28625:17;28619:24;28652:54;28700:4;28689:9;28685:20;28669:14;27967:1;27956:20;27944:33;;27892:91;28652:54;;28762:4;28754:6;28750:17;28744:24;28737:4;28726:9;28722:20;28715:54;28825:4;28817:6;28813:17;28807:24;28800:4;28789:9;28785:20;28778:54;28888:4;28880:6;28876:17;28870:24;28863:4;28852:9;28848:20;28841:54;28914:6;28974:2;28966:6;28962:15;28956:22;28951:2;28940:9;28936:18;28929:50;;28998:6;29053:2;29045:6;29041:15;29035:22;29066:54;29116:2;29105:9;29101:18;29085:14;-1:-1:-1;;;;;2525:31:20;2513:44;;2459:104;29066:54;-1:-1:-1;;29139:6:20;29187:15;;;29181:22;29161:18;;;;29154:50;27988:1222;:::o;29215:489::-;29312:6;29320;29328;29336;29389:3;29377:9;29368:7;29364:23;29360:33;29357:53;;;29406:1;29403;29396:12;29357:53;29435:9;29429:16;29419:26;;29488:2;29477:9;29473:18;29467:25;-1:-1:-1;;;;;29525:5:20;29521:46;29514:5;29511:57;29501:85;;29582:1;29579;29572:12;29501:85;29650:2;29635:18;;29629:25;29694:2;29679:18;;;29673:25;29215:489;;29605:5;;-1:-1:-1;29215:489:20;-1:-1:-1;;;29215:489:20:o;31267:157::-;31297:1;31331:4;31328:1;31324:12;31355:3;31345:37;;31362:18;;:::i;:::-;31414:3;31407:4;31404:1;31400:12;31396:22;31391:27;;;31267:157;;;;:::o",
    "linkReferences": {},
    "immutableReferences": {
      "5731": [
        {
          "start": 1305,
          "length": 32
        },
        {
          "start": 3551,
          "length": 32
        },
        {
          "start": 6221,
          "length": 32
        },
        {
          "start": 10753,
          "length": 32
        },
        {
          "start": 10812,
          "length": 32
        },
        {
          "start": 10852,
          "length": 32
        },
        {
          "start": 11440,
          "length": 32
        },
        {
          "start": 11499,
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
    "createAuction((string,string,string,uint256,address,uint256,uint256,uint256,uint256))": "683931b4",
    "custodied(address)": "5c471ad5",
    "defaultFeeBps()": "bcae25a4",
    "defaultLpFeeShareBps()": "3edb917d",
    "getBuyCost(uint256,uint256)": "121a257f",
    "getSpotPrice(uint256)": "0fda366d",
    "launch(string,string,string)": "42a81515",
    "launchPreset()": "42f78e91",
    "migrate(uint256)": "454b0608",
    "owner()": "8da5cb5b",
    "poolOf(uint256)": "83966021",
    "positionId(uint256)": "54147e9e",
    "positionManager()": "791b98bc",
    "proceedsWithdrawn(uint256)": "48f719e5",
    "protocolFeeRecipient()": "64df049e",
    "renounceOwnership()": "715018a6",
    "sellTokens(uint256,uint256,uint256)": "709ef231",
    "setDefaultFeeBps(uint256)": "4373a286",
    "setDefaultLpFeeShareBps(uint256)": "09e06259",
    "setLaunchPreset((address,uint256,uint256,uint256,uint256,uint256))": "3ef068d2",
    "setProtocolFeeRecipient(address)": "e521cb92",
    "sweep(address,address)": "b8dc491b",
    "transferOwnership(address)": "f2fde38b",
    "uniswapV3SwapCallback(int256,int256,bytes)": "fa461e33",
    "userPurchases(uint256,address)": "efc20dad",
    "withdrawProceeds(uint256)": "d9f1aed9"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.24+commit.e11b9ed9\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"feeRecipient_\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"defaultFeeBps_\",\"type\":\"uint256\"},{\"internalType\":\"contract INonfungiblePositionManager\",\"name\":\"positionManager_\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnableInvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"OwnableUnauthorizedAccount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"totalRaised\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"totalSold\",\"type\":\"uint256\"}],\"name\":\"AuctionCompleted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"creator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"paymentToken\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"slope\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maxRaise\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"liquidityBps\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"metadataURI\",\"type\":\"string\"}],\"name\":\"AuctionCreated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"pool\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"positionId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenLiquidity\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"paymentLiquidity\",\"type\":\"uint256\"}],\"name\":\"AuctionMigrated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"previous\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"current\",\"type\":\"uint256\"}],\"name\":\"DefaultFeeBpsUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"previous\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"current\",\"type\":\"uint256\"}],\"name\":\"DefaultLpFeeShareBpsUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"paymentToken\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maxSupply\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"slope\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maxRaise\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"liquidityBps\",\"type\":\"uint256\"}],\"name\":\"LaunchPresetUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"creatorTokenFees\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"creatorPaymentFees\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"protocolTokenFees\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"protocolPaymentFees\",\"type\":\"uint256\"}],\"name\":\"LpFeesCollected\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"creator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"ProceedsWithdrawn\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previous\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"current\",\"type\":\"address\"}],\"name\":\"ProtocolFeeRecipientUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Swept\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"buyer\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"cost\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"protocolFee\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newTotalRaised\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newTotalSold\",\"type\":\"uint256\"}],\"name\":\"TokensPurchased\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"seller\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"protocolFee\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newTotalRaised\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newTotalSold\",\"type\":\"uint256\"}],\"name\":\"TokensSold\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"MAX_FEE_BPS\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MAX_LP_FEE_SHARE_BPS\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MIN_LIQUIDITY_BPS\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"POOL_FEE\",\"outputs\":[{\"internalType\":\"uint24\",\"name\":\"\",\"type\":\"uint24\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"auctionCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"auctions\",\"outputs\":[{\"components\":[{\"internalType\":\"contract AuctionToken\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"paymentToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"basePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"slope\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"maxRaise\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"creator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"protocolFeeBps\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"liquidityBps\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpFeeShareBps\",\"type\":\"uint256\"}],\"internalType\":\"struct TokenAuction.AuctionConfig\",\"name\":\"config\",\"type\":\"tuple\"},{\"internalType\":\"enum TokenAuction.AuctionState\",\"name\":\"state\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"totalRaised\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalSold\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"maxCost\",\"type\":\"uint256\"}],\"name\":\"buyTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"}],\"name\":\"collectFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenFees\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"paymentFees\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"metadataURI\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"maxSupply\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"paymentToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"basePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"slope\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"maxRaise\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"liquidityBps\",\"type\":\"uint256\"}],\"internalType\":\"struct TokenAuction.AuctionParams\",\"name\":\"p\",\"type\":\"tuple\"}],\"name\":\"createAuction\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"custodied\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"defaultFeeBps\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"defaultLpFeeShareBps\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"getBuyCost\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"cost\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"fee\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"}],\"name\":\"getSpotPrice\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"metadataURI\",\"type\":\"string\"}],\"name\":\"launch\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"launchPreset\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"paymentToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"maxSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"basePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"slope\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"maxRaise\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"liquidityBps\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"}],\"name\":\"migrate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"poolOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"positionId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"positionManager\",\"outputs\":[{\"internalType\":\"contract INonfungiblePositionManager\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"proceedsWithdrawn\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"protocolFeeRecipient\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minProceeds\",\"type\":\"uint256\"}],\"name\":\"sellTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"feeBps\",\"type\":\"uint256\"}],\"name\":\"setDefaultFeeBps\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shareBps\",\"type\":\"uint256\"}],\"name\":\"setDefaultLpFeeShareBps\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"paymentToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"maxSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"basePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"slope\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"maxRaise\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"liquidityBps\",\"type\":\"uint256\"}],\"internalType\":\"struct TokenAuction.LaunchPreset\",\"name\":\"preset\",\"type\":\"tuple\"}],\"name\":\"setLaunchPreset\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"}],\"name\":\"setProtocolFeeRecipient\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"sweep\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"amount0Delta\",\"type\":\"int256\"},{\"internalType\":\"int256\",\"name\":\"amount1Delta\",\"type\":\"int256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"uniswapV3SwapCallback\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"userPurchases\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"}],\"name\":\"withdrawProceeds\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"OwnableInvalidOwner(address)\":[{\"details\":\"The owner is not a valid owner account. (eg. `address(0)`)\"}],\"OwnableUnauthorizedAccount(address)\":[{\"details\":\"The caller account is not authorized to perform an operation.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC-20 token failed.\"}]},\"kind\":\"dev\",\"methods\":{\"buyTokens(uint256,uint256,uint256)\":{\"details\":\"A purchase that would overshoot `maxRaise` is filled with what the        remaining budget buys and closes the auction, so the buyer may        receive less than `amount`; `TokensPurchased` reports the actual        amount.\",\"params\":{\"maxCost\":\"Most the buyer will pay in total (cost + protocol fee), in        payment-token units. The price rises with every purchase, so a        quote can be stale by the time a transaction lands; this bound        makes the buy revert instead of filling at a worse price.\"}},\"migrate(uint256)\":{\"details\":\"Opens (or corrects) the pool at the auction's final price, adds         full-range liquidity from the reserved share of the raise plus         newly minted tokens, and keeps the position NFT forever. Never         leaves tokens permanently locked: if there is nothing to pair, or         Uniswap rejects the position, transfers are unlocked anyway and         the reserved funds go to the creator.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"sellTokens(uint256,uint256,uint256)\":{\"params\":{\"minProceeds\":\"Least the seller will accept after the fee. Like        `maxCost` on purchases, it protects against the price moving        between quote and transaction.\"}},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"},\"withdrawProceeds(uint256)\":{\"details\":\"Callable once, by the creator, once the auction has completed,      before or after migration. Pays the part of the raise not reserved      for liquidity. Protocol fees are routed to the fee recipient at buy      time, so the contract custodies exactly `totalRaised` per auction.\"}},\"stateVariables\":{\"MIN_USABLE_TICK\":{\"details\":\"Full-range bounds for the 1% tier (tick spacing 200), i.e.      TickMath's MIN/MAX_TICK rounded inward to a multiple of 200.\"},\"_activePool\":{\"details\":\"Set only for the duration of a price-correction swap, so the swap      callback can be authenticated.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"MAX_FEE_BPS()\":{\"notice\":\"Upper bound on the protocol fee, so the owner can never set a         fee that confiscates a meaningful share of a purchase.\"},\"MAX_LP_FEE_SHARE_BPS()\":{\"notice\":\"Upper bound on the protocol's share of trading fees, so a         creator always keeps at least half.\"},\"MIN_LIQUIDITY_BPS()\":{\"notice\":\"Smallest share of the raise a creator may commit to the         Uniswap pool, so no launch ships with a token too thinly         traded to be usable.\"},\"POOL_FEE()\":{\"notice\":\"Pool fee tier for migrated liquidity: 1%, the usual tier for         newly launched, volatile tokens.\"},\"buyTokens(uint256,uint256,uint256)\":{\"notice\":\"Buy `amount` tokens (in token wei) from an auction that hasn't         graduated yet.\"},\"collectFees(uint256)\":{\"notice\":\"Collect the migrated pool's trading fees: the protocol takes its         share and the creator receives the rest. Anyone may trigger it.\"},\"createAuction((string,string,string,uint256,address,uint256,uint256,uint256,uint256))\":{\"notice\":\"Launch a token with custom curve parameters. Trading starts         immediately; the token graduates to Uniswap once `maxRaise` is         raised.\"},\"custodied(address)\":{\"notice\":\"Payment tokens this contract owes to auction creators, per token:         the sum of `totalRaised` across auctions not yet withdrawn.         Anything held above this is excess (e.g. tokens sent here         directly) and can be recovered with `sweep`.\"},\"launch(string,string,string)\":{\"notice\":\"One-click launch: name, symbol and metadata from the creator,         everything else from the protocol's standard preset.\"},\"launchPreset()\":{\"notice\":\"Parameters for one-click launches. Unset (zero payment token)         until the owner configures it.\"},\"migrate(uint256)\":{\"notice\":\"Move a completed auction's liquidity into Uniswap v3 and unlock         its token. Anyone may call it, so a creator can never hold the         token hostage by not migrating.\"},\"positionId(uint256)\":{\"notice\":\"The Uniswap position NFT holding each auction's liquidity. This         contract keeps it forever, so the liquidity is permanently locked.\"},\"sellTokens(uint256,uint256,uint256)\":{\"notice\":\"Sell `amount` tokens (in token wei) back to the curve of an         auction that hasn't graduated yet. The tokens are burned and the         seller is paid from the raise, at the curve price minus the         protocol fee.\"},\"setDefaultFeeBps(uint256)\":{\"notice\":\"Change the fee for auctions created from now on. Existing         auctions keep the fee they were created with, so a creator's         terms can never change mid-sale.\"},\"setDefaultLpFeeShareBps(uint256)\":{\"notice\":\"Change the protocol's share of trading fees for auctions created         from now on. Existing auctions keep the share they were created         with.\"},\"setLaunchPreset((address,uint256,uint256,uint256,uint256,uint256))\":{\"notice\":\"Set the parameters `launch` uses. Applies to launches from now         on; existing auctions are unaffected.\"},\"setProtocolFeeRecipient(address)\":{\"notice\":\"Change where protocol fees are sent. Applies to purchases made         after the change, in every auction.\"},\"sweep(address,address)\":{\"notice\":\"Recover tokens held above what is owed to auction creators,         such as tokens transferred to this contract directly. Funds         backing an unwithdrawn auction can never be swept.\"},\"withdrawProceeds(uint256)\":{\"notice\":\"Transfer an auction's raised payment tokens to its creator.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/TokenAuction.sol\":\"TokenAuction\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/access/Ownable.sol\":{\"keccak256\":\"0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6\",\"dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC1363.sol\":{\"keccak256\":\"0xd5ea07362ab630a6a3dee4285a74cf2377044ca2e4be472755ad64d7c5d4b69d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://da5e832b40fc5c3145d3781e2e5fa60ac2052c9d08af7e300dc8ab80c4343100\",\"dweb:/ipfs/QmTzf7N5ZUdh5raqtzbM11yexiUoLC9z3Ws632MCuycq1d\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC165.sol\":{\"keccak256\":\"0x0afcb7e740d1537b252cb2676f600465ce6938398569f09ba1b9ca240dde2dfc\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1c299900ac4ec268d4570ecef0d697a3013cd11a6eb74e295ee3fbc945056037\",\"dweb:/ipfs/Qmab9owJoxcA7vJT5XNayCMaUR1qxqj1NDzzisduwaJMcZ\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC20.sol\":{\"keccak256\":\"0x1a6221315ce0307746c2c4827c125d821ee796c74a676787762f4778671d4f44\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1bb2332a7ee26dd0b0de9b7fe266749f54820c99ab6a3bcb6f7e6b751d47ee2d\",\"dweb:/ipfs/QmcRWpaBeCYkhy68PR3B4AgD7asuQk7PwkWxrvJbZcikLF\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x1b88b3fb3d85ba5496d7d5f396f83ee1fddcdd6762059ff65992655b67920998\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://89393bb3212da1c0889601b9706a07b39419ddc4d2faab9eaf6e7f9152cf6a1c\",\"dweb:/ipfs/QmcCfzzxv1Bkdz1c1yF4gQCeYb6Us5BJANnzTFqawfd1HL\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0x669464167428061ee0f8618b73b3ee90aff8405683e7ddde8cd77dadaa1afe29\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0dda78587a7358b4fdf6b9fca0fde5a5e34930f36d5268a16028627fc0170195\",\"dweb:/ipfs/QmQ1b6cCceDRWNxti9HifsTCzmVP25Haxs1bWugm52vTqH\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x74ed01eb66b923d0d0cfe3be84604ac04b76482a55f9dd655e1ef4d367f95bc2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5282825a626cfe924e504274b864a652b0023591fa66f06a067b25b51ba9b303\",\"dweb:/ipfs/QmeCfPykghhMc81VJTrHTC7sF6CRvaA1FXVq2pJhwYp1dV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xd6fa4088198f04eef10c5bce8a2f4d60554b7ec4b987f684393c01bf79b94d9f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f95ee0bbd4dd3ac730d066ba3e785ded4565e890dbec2fa7d3b9fe3bad9d0d6e\",\"dweb:/ipfs/QmSLr6bHkPFWT7ntj34jmwfyskpwo97T9jZUrk5sz3sdtR\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x304d732678032a9781ae85c8f204c8fba3d3a5e31c02616964e75cfdc5049098\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://299ced486011781dc98f638059678323c03079fefae1482abaa2135b22fa92d0\",\"dweb:/ipfs/QmbZNbcPTBxNvwChavN2kkZZs7xHhYL7mv51KrxMhsMs3j\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/Panic.sol\":{\"keccak256\":\"0xf7fe324703a64fc51702311dc51562d5cb1497734f074e4f483bfb6717572d7a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c6a5ff4f9fd8649b7ee20800b7fa387d3465bd77cf20c2d1068cd5c98e1ed57a\",\"dweb:/ipfs/QmVSaVJf9FXFhdYEYeCEfjMVHrxDh5qL4CGkxdMWpQCrqG\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xa516cbf1c7d15d3517c2d668601ce016c54395bf5171918a14e2686977465f53\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1e1d079e8edfb58efd23a311e315a4807b01b5d1cf153f8fa2d0608b9dec3e99\",\"dweb:/ipfs/QmTBExeX2SDTkn5xbk5ssbYSx7VqRp9H4Ux1CY4uQM4b9N\"]},\"lib/openzeppelin-contracts/contracts/utils/StorageSlot.sol\":{\"keccak256\":\"0xcf74f855663ce2ae00ed8352666b7935f6cddea2932fdf2c3ecd30a9b1cd0e97\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9f660b1f351b757dfe01438e59888f31f33ded3afcf5cb5b0d9bf9aa6f320a8b\",\"dweb:/ipfs/QmarDJ5hZEgBtCmmrVzEZWjub9769eD686jmzb2XpSU1cM\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x8891738ffe910f0cf2da09566928589bf5d63f4524dd734fd9cedbac3274dd5c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://971f954442df5c2ef5b5ebf1eb245d7105d9fbacc7386ee5c796df1d45b21617\",\"dweb:/ipfs/QmadRjHbkicwqwwh61raUEapaVEtaLMcYbQZWs9gUkgj3u\"]},\"lib/openzeppelin-contracts/contracts/utils/math/Math.sol\":{\"keccak256\":\"0x59973a93b1f983f94e10529f46ca46544a9fec2b5f56fb1390bbe9e0dc79f857\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c55ef8f0b9719790c2ae6f81d80a59ffb89f2f0abe6bc065585bd79edce058c5\",\"dweb:/ipfs/QmNNmCbX9NjPXKqHJN8R1WC2rNeZSQrPZLd6FF6AKLyH5Y\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SafeCast.sol\":{\"keccak256\":\"0xc8cae21c9ae4a46e5162ff9bf5b351d6fa6a6eba72d515f3bc1bdfeda7fdf083\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ce830ebcf28e31643caba318996db3763c36d52cd0f23798ba83c135355d45e9\",\"dweb:/ipfs/QmdGPcvptHN7UBCbUYBbRX3hiRVRFLRwno8b4uga6uFNif\"]},\"src/AuctionToken.sol\":{\"keccak256\":\"0x0634347e8e250d3c04e89745cd0ba0e7871bc788a4a8a2c42e8cbd7e327c7e06\",\"urls\":[\"bzz-raw://66115eca52db2401c6e18c2a3d1ffa385045829fd6651c577fa6f08e99dd578e\",\"dweb:/ipfs/QmX15QCZq5EdGoYx2JAFxJLgZDfv8mFNS7rT4F56ZMcpFK\"]},\"src/BondingCurve.sol\":{\"keccak256\":\"0xe1cb093069f0a9484d7c0d4e0639a64afe4df660d7baf96a1d0f6d34a11c4792\",\"urls\":[\"bzz-raw://f020019531a4c842866f2ed8ab49a87985f747e77d9417c88047a67708279eb0\",\"dweb:/ipfs/QmPsjiHUzYpW7DrZb4tLyRvkvfe71wwYYNTpkAkLiR3csr\"]},\"src/TokenAuction.sol\":{\"keccak256\":\"0x960b5e6dc29362a6fa4091cac588e7f9e1f1e098b59e8394a853feb063a3773c\",\"urls\":[\"bzz-raw://d0c3336bcd1097c163f641e7b316039f6af10fcb64707c9aeb2b8f4654a007be\",\"dweb:/ipfs/QmQ2FAjhCWS3XkDtEoYqtoTJoWArig6yxoP7CJSLkRRbEU\"]},\"src/interfaces/IUniswapV3.sol\":{\"keccak256\":\"0x773e06f4c1ff91c0a1ee79d5fe77a3340b79625edb29773ddad1ed88769d27d0\",\"urls\":[\"bzz-raw://17946a5bd6c253000d6b0a3d5691ac163b40273fde3645534a3ed050a70053de\",\"dweb:/ipfs/QmPLHEnBjx1bbpBmwVAYqiD7KJDMvQY3jWoeWTMs81fwsm\"]}},\"version\":1}",
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
              "name": "liquidityBps",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "string",
              "name": "metadataURI",
              "type": "string",
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
              "internalType": "address",
              "name": "paymentToken",
              "type": "address",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "maxSupply",
              "type": "uint256",
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
              "name": "liquidityBps",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "LaunchPresetUpdated",
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
          "inputs": [
            {
              "internalType": "uint256",
              "name": "auctionId",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "seller",
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
              "name": "proceeds",
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
          "name": "TokensSold",
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
                  "internalType": "string",
                  "name": "metadataURI",
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
              "internalType": "string",
              "name": "metadataURI",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "launch",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "auctionId",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "launchPreset",
          "outputs": [
            {
              "internalType": "address",
              "name": "paymentToken",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "maxSupply",
              "type": "uint256"
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
              "name": "liquidityBps",
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
              "name": "minProceeds",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "sellTokens"
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
              "internalType": "struct TokenAuction.LaunchPreset",
              "name": "preset",
              "type": "tuple",
              "components": [
                {
                  "internalType": "address",
                  "name": "paymentToken",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "maxSupply",
                  "type": "uint256"
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
                  "name": "liquidityBps",
                  "type": "uint256"
                }
              ]
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setLaunchPreset"
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
          "sellTokens(uint256,uint256,uint256)": {
            "params": {
              "minProceeds": "Least the seller will accept after the fee. Like        `maxCost` on purchases, it protects against the price moving        between quote and transaction."
            }
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
            "notice": "Buy `amount` tokens (in token wei) from an auction that hasn't         graduated yet."
          },
          "collectFees(uint256)": {
            "notice": "Collect the migrated pool's trading fees: the protocol takes its         share and the creator receives the rest. Anyone may trigger it."
          },
          "createAuction((string,string,string,uint256,address,uint256,uint256,uint256,uint256))": {
            "notice": "Launch a token with custom curve parameters. Trading starts         immediately; the token graduates to Uniswap once `maxRaise` is         raised."
          },
          "custodied(address)": {
            "notice": "Payment tokens this contract owes to auction creators, per token:         the sum of `totalRaised` across auctions not yet withdrawn.         Anything held above this is excess (e.g. tokens sent here         directly) and can be recovered with `sweep`."
          },
          "launch(string,string,string)": {
            "notice": "One-click launch: name, symbol and metadata from the creator,         everything else from the protocol's standard preset."
          },
          "launchPreset()": {
            "notice": "Parameters for one-click launches. Unset (zero payment token)         until the owner configures it."
          },
          "migrate(uint256)": {
            "notice": "Move a completed auction's liquidity into Uniswap v3 and unlock         its token. Anyone may call it, so a creator can never hold the         token hostage by not migrating."
          },
          "positionId(uint256)": {
            "notice": "The Uniswap position NFT holding each auction's liquidity. This         contract keeps it forever, so the liquidity is permanently locked."
          },
          "sellTokens(uint256,uint256,uint256)": {
            "notice": "Sell `amount` tokens (in token wei) back to the curve of an         auction that hasn't graduated yet. The tokens are burned and the         seller is paid from the raise, at the curve price minus the         protocol fee."
          },
          "setDefaultFeeBps(uint256)": {
            "notice": "Change the fee for auctions created from now on. Existing         auctions keep the fee they were created with, so a creator's         terms can never change mid-sale."
          },
          "setDefaultLpFeeShareBps(uint256)": {
            "notice": "Change the protocol's share of trading fees for auctions created         from now on. Existing auctions keep the share they were created         with."
          },
          "setLaunchPreset((address,uint256,uint256,uint256,uint256,uint256))": {
            "notice": "Set the parameters `launch` uses. Applies to launches from now         on; existing auctions are unaffected."
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
        "enabled": true,
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
        "keccak256": "0x0634347e8e250d3c04e89745cd0ba0e7871bc788a4a8a2c42e8cbd7e327c7e06",
        "urls": [
          "bzz-raw://66115eca52db2401c6e18c2a3d1ffa385045829fd6651c577fa6f08e99dd578e",
          "dweb:/ipfs/QmX15QCZq5EdGoYx2JAFxJLgZDfv8mFNS7rT4F56ZMcpFK"
        ],
        "license": null
      },
      "src/BondingCurve.sol": {
        "keccak256": "0xe1cb093069f0a9484d7c0d4e0639a64afe4df660d7baf96a1d0f6d34a11c4792",
        "urls": [
          "bzz-raw://f020019531a4c842866f2ed8ab49a87985f747e77d9417c88047a67708279eb0",
          "dweb:/ipfs/QmPsjiHUzYpW7DrZb4tLyRvkvfe71wwYYNTpkAkLiR3csr"
        ],
        "license": null
      },
      "src/TokenAuction.sol": {
        "keccak256": "0x960b5e6dc29362a6fa4091cac588e7f9e1f1e098b59e8394a853feb063a3773c",
        "urls": [
          "bzz-raw://d0c3336bcd1097c163f641e7b316039f6af10fcb64707c9aeb2b8f4654a007be",
          "dweb:/ipfs/QmQ2FAjhCWS3XkDtEoYqtoTJoWArig6yxoP7CJSLkRRbEU"
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
