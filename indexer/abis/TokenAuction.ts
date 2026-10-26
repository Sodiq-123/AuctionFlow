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
      "name": "acceptOwnership",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
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
      "name": "pause",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "paused",
      "inputs": [],
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
      "name": "pendingOwner",
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
      "name": "unpause",
      "inputs": [],
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
      "name": "OwnershipTransferStarted",
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
      "name": "Paused",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "indexed": false,
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
      "type": "event",
      "name": "Unpaused",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "EnforcedPause",
      "inputs": []
    },
    {
      "type": "error",
      "name": "ExpectedPause",
      "inputs": []
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
    "object": "0x60a060405234801562000010575f80fd5b506040516200552e3803806200552e83398101604081905262000033916200022c565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f005533806200007e57604051631e4fbdf760e01b81525f60048201526024015b60405180910390fd5b6200008981620001aa565b506001600160a01b038316620000d75760405162461bcd60e51b815260206004820152601260248201527116995c9bc8199959481c9958da5c1a595b9d60721b604482015260640162000075565b6001600160a01b0381166200012f5760405162461bcd60e51b815260206004820152601560248201527f5a65726f20706f736974696f6e206d616e616765720000000000000000000000604482015260640162000075565b6001600160a01b0381166080526103e88211156200017f5760405162461bcd60e51b815260206004820152600c60248201526b08ccaca40e8dede40d0d2ced60a31b604482015260640162000075565b50600680546001600160a01b0319166001600160a01b03939093169290921790915560075562000271565b600180546001600160a01b0319169055620001c581620001c8565b50565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0381168114620001c5575f80fd5b5f805f606084860312156200023f575f80fd5b83516200024c8162000217565b602085015160408601519194509250620002668162000217565b809150509250925092565b608051615273620002bb5f395f818161057101528181610e840152818161196101528181612c7501528181612cb001528181612cd801528181612f240152612f5f01526152735ff3fe608060405234801562000010575f80fd5b506004361062000264575f3560e01c8063715018a6116200014f578063bcae25a411620000c3578063e521cb921162000083578063e521cb921462000684578063efc20dad146200069b578063f2fde38b14620006c8578063fa461e3314620006df578063fdfae48614620006f6575f80fd5b8063bcae25a41462000628578063d55be8c61462000632578063d9f1aed9146200063c578063dd1b9c4a1462000653578063e30c39781462000672575f80fd5b80638456cb59116200010f5780638456cb5914620005c85780638da5cb5b14620005d2578063a4ce25a714620005e3578063b17acdcd14620005fa578063b8dc491b1462000611575f80fd5b8063715018a6146200055757806375f0c2f01462000561578063791b98bc146200056b57806379ba5097146200059357806383966021146200059d575f80fd5b80634373a28611620001e75780635c471ad511620001a75780635c471ad514620004c75780635c975abb14620004e957806364df049e14620004fc578063683931b41462000529578063709ef2311462000540575f80fd5b80634373a2861462000384578063454b0608146200039b57806348f719e514620003b257806354147e9e14620003e8578063571a26a0146200040a575f80fd5b80633edb917d11620002335780633edb917d14620002e25780633ef068d214620002ec5780633f4ba83a146200030357806342a81515146200030d57806342f78e911462000324575f80fd5b806309e0625914620002685780630fda366d1462000281578063121a257f14620002ab5780632ad7157314620002d8575b5f80fd5b6200027f620002793660046200389e565b62000700565b005b62000298620002923660046200389e565b62000794565b6040519081526020015b60405180910390f35b620002c2620002bc366004620038b6565b620007c5565b60408051928352602083019190915201620002a2565b6200029860025481565b6200029860095481565b6200027f620002fd366004620038d7565b62000821565b6200027f6200093c565b620002986200031e36600462003936565b62000952565b600d54600e54600f546010546011546012546200034c956001600160a01b0316949392919086565b604080516001600160a01b0390971687526020870195909552938501929092526060840152608083015260a082015260c001620002a2565b6200027f620003953660046200389e565b62000af7565b6200027f620003ac3660046200389e565b62000b85565b620003d7620003c33660046200389e565b60056020525f908152604090205460ff1681565b6040519015158152602001620002a2565b62000298620003f93660046200389e565b600a6020525f908152604090205481565b620004b56200041b3660046200389e565b600360208181525f92835260409283902083516101208101855281546001600160a01b03908116825260018301548116938201939093526002820154948101949094529182015460608401526004820154608084015260058201541660a0830152600681015460c0830152600781015460e083015260088101546101008301526009810154600a820154600b9092015460ff909116919084565b604051620002a2949392919062003a08565b62000298620004d836600462003ad7565b60086020525f908152604090205481565b600154600160a01b900460ff16620003d7565b60065462000510906001600160a01b031681565b6040516001600160a01b039091168152602001620002a2565b620002986200053a36600462003af5565b6200110d565b6200027f6200055136600462003b30565b62001135565b6200027f620014ad565b620002986107d081565b620005107f000000000000000000000000000000000000000000000000000000000000000081565b6200027f620014c2565b62000510620005ae3660046200389e565b600b6020525f90815260409020546001600160a01b031681565b6200027f62001507565b5f546001600160a01b031662000510565b6200027f620005f436600462003b30565b6200151b565b620002c26200060b3660046200389e565b6200185e565b6200027f6200062236600462003b5a565b62001b14565b6200029860075481565b620002986103e881565b6200027f6200064d3660046200389e565b62001ccd565b6200065d61271081565b60405162ffffff9091168152602001620002a2565b6001546001600160a01b031662000510565b6200027f6200069536600462003ad7565b62001f43565b62000298620006ac36600462003b96565b600460209081525f928352604080842090915290825290205481565b6200027f620006d936600462003ad7565b62001ff5565b6200027f620006f036600462003bbc565b62002068565b6200029861138881565b6200070a6200212d565b611388811115620007535760405162461bcd60e51b815260206004820152600e60248201526d0a6d0c2e4ca40e8dede40d0d2ced60931b60448201526064015b60405180910390fd5b60095460408051918252602082018390527fafd7016dba95bc0c303b0838ae8e4829497ed18cc6a0ed00eec5fc7c50148e17910160405180910390a1600955565b5f8181526003602081905260408220600b8101546002820154928201549192620007be926200215b565b9392505050565b5f8281526003602081905260408220600b8101546002820154928201548493620007f3929187919062002185565b6006820154909350612710906200080b908562003c23565b62000817919062003c51565b9150509250929050565b6200082b6200212d565b5f6200083b602083018362003ad7565b6001600160a01b031603620008885760405162461bcd60e51b81526020600482015260126024820152712d32b937903830bcb6b2b73a103a37b5b2b760711b60448201526064016200074a565b620008ab81602001358260400135836060013584608001358560a001356200221e565b80600d620008ba828262003c67565b507f29f62c75478dac4ea9396c9b5e58b4e29d6f7812c6eb05ceaf5d0c776db6b5769050620008ed602083018362003ad7565b604080516001600160a01b039092168252602080850135908301528084013590820152606080840135908201526080808401359082015260a0808401359082015260c00160405180910390a150565b620009466200212d565b620009506200247f565b565b5f6200095d620024d6565b6040805160c081018252600d546001600160a01b0316808252600e546020830152600f54928201929092526010546060820152601154608082015260125460a082015290620009e25760405162461bcd60e51b815260206004820152601060248201526f139bc81b185d5b98da081c1c995cd95d60821b60448201526064016200074a565b604080516101406020601f8b018190040282018101909252610120810189815262000aeb928291908c908c90819085018382808284375f92019190915250505090825250604080516020601f8b0181900481028201810190925289815291810191908a908a90819084018382808284375f92019190915250505090825250604080516020601f8901819004810282018101909252878152918101919088908890819084018382808284375f920191909152505050908252506020848101519082015283516001600160a01b031660408083019190915284015160608083019190915284015160808083019190915284015160a08083019190915284015160c09091015262002502565b98975050505050505050565b62000b016200212d565b6103e881111562000b445760405162461bcd60e51b815260206004820152600c60248201526b08ccaca40e8dede40d0d2ced60a31b60448201526064016200074a565b60075460408051918252602082018390527f3062378541f1b58e0547bfb13e7d7585153e442e477e263c6e63d4775b3072a6910160405180910390a1600755565b62000b8f62002685565b5f8181526003602052604090206002600982015460ff16600381111562000bba5762000bba620039d3565b1462000c015760405162461bcd60e51b8152602060048201526015602482015274105d58dd1a5bdb881b9bdd0818dbdb5c1b195d1959605a1b60448201526064016200074a565b5f62000c0d82620026a3565b90505f62000c2d83600b0154845f0160020154855f01600301546200215b565b90505f62000c508362000c49670de0b6b3a76400008062003c23565b84620026cb565b6040805160c0810182525f606082018190526080820181905260a0820181905287546001600160a01b0390811680845260018a015490911660208085018290529181118486015260098a01805460ff191660031790558252600890529182208054939450909286929062000cc690849062003cc6565b909155505060208101516040516370a0823160e01b815230600482015285916001600160a01b0316906370a0823190602401602060405180830381865afa15801562000d14573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000d3a919062003cdc565b62000d46919062003cc6565b816080018181525050805f01516001600160a01b031663af35c6c76040518163ffffffff1660e01b81526004015f604051808303815f87803b15801562000d8b575f80fd5b505af115801562000d9e573d5f803e3d5ffd5b505050505f8411801562000db157505f82115b1562000f1b5780516040516340c10f1960e01b8152306004820152602481018490526001600160a01b03909116906340c10f19906044015f604051808303815f87803b15801562000e00575f80fd5b505af115801562000e13573d5f803e3d5ffd5b5050505062000e2783826040015162002785565b6001600160a01b031660608201525f8062000e428362002898565b60608501516040516309f56ab160e11b81526001600160a01b0380851660048301528084166024830152612710604483015291821660648201529294509092507f000000000000000000000000000000000000000000000000000000000000000016906313ead562906084016020604051808303815f875af115801562000ecb573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000ef1919062003cf4565b6001600160a01b031660a084015262000f0c838588620028c2565b62000f18888462002b5e565b50505b80516040516370a0823160e01b81523060048201525f916001600160a01b0316906370a0823190602401602060405180830381865afa15801562000f61573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000f87919062003cdc565b9050801562000feb578151604051630852cd8d60e31b8152600481018390526001600160a01b03909116906342966c68906024015f604051808303815f87803b15801562000fd3575f80fd5b505af115801562000fe6573d5f803e3d5ffd5b505050505b608082015160208301516040516370a0823160e01b81523060048201525f92916001600160a01b0316906370a0823190602401602060405180830381865afa1580156200103a573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062001060919062003cdc565b6200106c919062003cc6565b9050801562001098576005870154602084015162001098916001600160a01b0391821691168362002f85565b825f01516001600160a01b031663715018a66040518163ffffffff1660e01b81526004015f604051808303815f87803b158015620010d4575f80fd5b505af1158015620010e7573d5f803e3d5ffd5b50505050505050505050506200110a60015f805160206200521e83398151915255565b50565b5f62001118620024d6565b6200112d620011278362003de4565b62002502565b90505b919050565b6200113f62002685565b5f8381526003602052604090206001600982015460ff1660038111156200116a576200116a620039d3565b14620011ae5760405162461bcd60e51b815260206004820152601260248201527141756374696f6e206e6f742061637469766560701b60448201526064016200074a565b5f8311620011ed5760405162461bcd60e51b815260206004820152600b60248201526a16995c9bc8185b5bdd5b9d60aa1b60448201526064016200074a565b5f848152600460209081526040808320338452909152902054831115620012495760405162461bcd60e51b815260206004820152600f60248201526e457863656564732062616c616e636560881b60448201526064016200074a565b5f6200126882600b015485845f0160020154855f016003015462002fbe565b90505f612710835f01600601548362001282919062003c23565b6200128e919062003c51565b9050836200129d828462003cc6565b1015620012e15760405162461bcd60e51b815260206004820152601160248201527014db1a5c1c1859d948195e18d959591959607a1b60448201526064016200074a565b6001830154600a840180546001600160a01b03909216918491905f906200130a90849062003cc6565b925050819055508584600b015f82825462001326919062003cc6565b90915550505f878152600460209081526040808320338452909152812080548892906200135590849062003cc6565b90915550506001600160a01b0381165f90815260086020526040812080548592906200138390849062003cc6565b9091555050835460405163079cc67960e41b8152336004820152602481018890526001600160a01b03909116906379cc6790906044015f604051808303815f87803b158015620013d1575f80fd5b505af1158015620013e4573d5f803e3d5ffd5b505050505f8211156200140d576006546200140d906001600160a01b0383811691168462002f85565b62001430336200141e848662003cc6565b6001600160a01b038416919062002f85565b600a840154600b850154604080518981526020810187905290810185905260608101929092526080820152339088907fd7fd93110c86e222ad62b2a786fdc3afd88c4c21f9092614ca01365ba432073c9060a00160405180910390a350505050620014a860015f805160206200521e83398151915255565b505050565b620014b76200212d565b620009505f62003059565b60015433906001600160a01b03168114620014fc5760405163118cdaa760e01b81526001600160a01b03821660048201526024016200074a565b6200110a8162003059565b620015116200212d565b6200095062003074565b6200152562002685565b6200152f620024d6565b5f8381526003602052604090206001600982015460ff1660038111156200155a576200155a620039d3565b146200159e5760405162461bcd60e51b815260206004820152601260248201527141756374696f6e206e6f742061637469766560701b60448201526064016200074a565b5f8311620015dd5760405162461bcd60e51b815260206004820152600b60248201526a16995c9bc8185b5bdd5b9d60aa1b60448201526064016200074a565b5f80620015eb8386620030ba565b600686015492975090935091505f90612710906200160a908562003c23565b62001616919062003c51565b90508462001625828562003ec8565b1115620016695760405162461bcd60e51b815260206004820152601160248201527014db1a5c1c1859d948195e18d959591959607a1b60448201526064016200074a565b8284600a015f8282546200167e919062003ec8565b925050819055508584600b015f8282546200169a919062003ec8565b90915550505f87815260046020908152604080832033845290915281208054889290620016c990849062003ec8565b909155505060018401546001600160a01b03165f9081526008602052604081208054859290620016fb90849062003ec8565b90915550508115620017175760098401805460ff191660021790555b600184015462001732906001600160a01b031684836200319f565b83546040516340c10f1960e01b8152336004820152602481018890526001600160a01b03909116906340c10f19906044015f604051808303815f87803b1580156200177b575f80fd5b505af11580156200178e573d5f803e3d5ffd5b50505050600a840154600b850154604080518981526020810187905290810184905260608101929092526080820152339088907fc938e879cd47aa84d5893377578d6c211ccd96f382228c42c1bb6a8eaa71a0849060a00160405180910390a381156200184257867fc7502df20ccf846bf5005f01564bb502b56dcec19f0e2d0575c4369cc5e3b53b85600a015486600b015460405162001839929190918252602082015260400190565b60405180910390a25b50505050620014a860015f805160206200521e83398151915255565b5f806200186a62002685565b5f83815260036020819052604090912090600982015460ff166003811115620018975762001897620039d3565b148015620018b157505f848152600a602052604090205415155b620018ed5760405162461bcd60e51b815260206004820152600b60248201526a2737903837b9b4ba34b7b760a91b60448201526064016200074a565b604080516080810182525f868152600a6020908152838220548352309083019081526001600160801b0383850181815260608501828152955163fc6f786560e01b81529451600486015291516001600160a01b039081166024860152915181166044850152935190931660648301529182917f00000000000000000000000000000000000000000000000000000000000000009091169063fc6f78659060840160408051808303815f875af1158015620019a9573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620019cf919062003ede565b600185015485549294509092506001600160a01b0390811691161080620019f8578183620019fb565b82825b600886015491975095505f906127109062001a17908962003c23565b62001a23919062003c51565b90505f612710865f01600801548862001a3d919062003c23565b62001a49919062003c51565b8654600588015491925062001a6d916001600160a01b039182169116848b62003316565b6001860154600587015462001a91916001600160a01b039081169116838a62003316565b887f8dcde09e464f5c324d7cbf62dbc0c647b8ad9242592ae364153f2549f4898d0462001abf848b62003cc6565b62001acb848b62003cc6565b60408051928352602083019190915281018590526060810184905260800160405180910390a250505050505062001b0f60015f805160206200521e83398151915255565b915091565b62001b1e62002685565b62001b286200212d565b6001600160a01b03811662001b715760405162461bcd60e51b815260206004820152600e60248201526d16995c9bc81c9958da5c1a595b9d60921b60448201526064016200074a565b6040516370a0823160e01b81523060048201525f906001600160a01b038416906370a0823190602401602060405180830381865afa15801562001bb6573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062001bdc919062003cdc565b6001600160a01b0384165f9081526008602052604090205490915080821162001c3b5760405162461bcd60e51b815260206004820152601060248201526f04e6f7468696e6720746f2073776565760841b60448201526064016200074a565b5f62001c48828462003cc6565b905062001c606001600160a01b038616858362002f85565b836001600160a01b0316856001600160a01b03167f7b09c29f9106defeccc9ac3b823f3aad0b470d120e5df7aed033b5c43a4bf7188360405162001ca691815260200190565b60405180910390a350505062001cc960015f805160206200521e83398151915255565b5050565b62001cd762002685565b5f81815260036020526040902060058101546001600160a01b0316331462001d305760405162461bcd60e51b815260206004820152600b60248201526a2737ba1031b932b0ba37b960a91b60448201526064016200074a565b6002600982015460ff16600381111562001d4e5762001d4e620039d3565b148062001d7657506003600982015460ff16600381111562001d745762001d74620039d3565b145b62001dbc5760405162461bcd60e51b8152602060048201526015602482015274105d58dd1a5bdb881b9bdd0818dbdb5c1b195d1959605a1b60448201526064016200074a565b5f8281526005602052604090205460ff161562001e105760405162461bcd60e51b815260206004820152601160248201527020b63932b0b23c903bb4ba34323930bbb760791b60448201526064016200074a565b5f62001e1c82620026a3565b82600a015462001e2d919062003cc6565b90505f811162001e765760405162461bcd60e51b81526020600482015260136024820152724e6f7468696e6720746f20776974686472617760681b60448201526064016200074a565b5f838152600560209081526040808320805460ff191660019081179091558501546001600160a01b0316835260089091528120805483929062001ebb90849062003cc6565b90915550506005820154600183015462001ee3916001600160a01b0391821691168362002f85565b60058201546040518281526001600160a01b039091169084907f579e0e2d0cfdb23711bb6034ac9f2ba41e8965a8e24589d1c3cf5604868661fc9060200160405180910390a350506200110a60015f805160206200521e83398151915255565b62001f4d6200212d565b6001600160a01b03811662001f9a5760405162461bcd60e51b815260206004820152601260248201527116995c9bc8199959481c9958da5c1a595b9d60721b60448201526064016200074a565b6006546040516001600160a01b038084169216907fd3890fc76afcfc31cba1dcf2c27b50e2541e4d75039c981855b5b5e03682aea0905f90a3600680546001600160a01b0319166001600160a01b0392909216919091179055565b62001fff6200212d565b600180546001600160a01b0383166001600160a01b03199091168117909155620020305f546001600160a01b031690565b6001600160a01b03167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b600c546001600160a01b0316158015906200208d5750600c546001600160a01b031633145b620020d35760405162461bcd60e51b8152602060048201526015602482015274556e617574686f72697a65642063616c6c6261636b60581b60448201526064016200074a565b5f80620020e38385018562003b5a565b915091505f8613156200210657620021066001600160a01b038316338862002f85565b5f8513156200212557620021256001600160a01b038216338762002f85565b505050505050565b5f546001600160a01b03163314620009505760405163118cdaa760e01b81523360048201526024016200074a565b5f620021718285670de0b6b3a7640000620026cb565b6200217d908462003ec8565b949350505050565b5f80620021a98486620021a1670de0b6b3a76400008062003c23565b600162003365565b90505f620022058487620021bf8a600262003c23565b620021cb919062003ec8565b620021d7908962003c23565b670de0b6b3a7640000620021ec818062003c23565b620021f990600262003c23565b620021a1919062003c23565b905062002213818362003ec8565b979650505050505050565b5f8411620022615760405162461bcd60e51b815260206004820152600f60248201526e5a65726f206261736520707269636560881b60448201526064016200074a565b5f8211620022a35760405162461bcd60e51b815260206004820152600e60248201526d5a65726f206d617820726169736560901b60448201526064016200074a565b6107d08110158015620022b857506127108111155b620023065760405162461bcd60e51b815260206004820152601760248201527f496e76616c6964206c697175696469747920736861726500000000000000000060448201526064016200074a565b6ec097ce7bc90715b34b9f10000000008511158015620023395750722cd76fe086b93ce2f768a00b22a000000000008411155b8015620023595750722cd76fe086b93ce2f768a00b22a000000000008311155b8015620023775750701d6329f1c35ca4bfabb9f56100000000008211155b620023b75760405162461bcd60e51b815260206004820152600f60248201526e4375727665206f766572666c6f777360881b60448201526064016200074a565b5f620023c75f8487878a620033bb565b90505f620023d78287876200215b565b90505f62002416612710620023ed868862003c23565b620023f9919062003c51565b6200240d670de0b6b3a76400008062003c23565b84600162003365565b90508762002425828562003ec8565b1115620024755760405162461bcd60e51b815260206004820152601e60248201527f537570706c7920746f6f20736d616c6c20666f72206c6971756964697479000060448201526064016200074a565b5050505050505050565b6200248962003462565b6001805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b600154600160a01b900460ff1615620009505760405163d93c066560e01b815260040160405180910390fd5b5f6200252782606001518360a001518460c001518560e001518661010001516200221e565b60028054905f620025388362003f01565b9190505590505f825f015183602001518460600151308660400151604051620025619062003890565b6200257195949392919062003f61565b604051809103905ff0801580156200258b573d5f803e3d5ffd5b505f8381526003602081905260409182902080546001600160a01b03199081166001600160a01b0386811691909117835560808901516001808501805485169383169390931790925560a08a01516002850181905560c08b015195850186905560e08b015160048601819055600586018054339616861790556007805460068801556101008d01519087018190556009805460088901558701805460ff19169095179094558b88015197519899509497889794968b967f78f87bd22347e4e37db1ab310c6ce7e1780121e5e48207cd0b02d39ee87d28349662002675968d96959490919062003fb5565b60405180910390a3505050919050565b6200268f6200348d565b60025f805160206200521e83398151915255565b5f612710825f016007015483600a0154620026bf919062003c23565b6200112d919062003c51565b5f805f620026da8686620034be565b91509150815f036200270357838181620026f857620026f862003c3d565b0492505050620007be565b8184116200271d576200271d6003851502601118620034da565b5f848688095f868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010185841190960395909502919093039390930492909217029150509392505050565b5f805f83620027a957620027a2670de0b6b3a76400008062003c23565b85620027be565b84620027be670de0b6b3a76400008062003c23565b90925090505f600160401b620027d5838562003c51565b1062002800576040620027f8620027f285600160401b86620026cb565b620034eb565b901b62002815565b62002815620027f284600160c01b85620026cb565b90506401000276a3811180156200283f575073fffd8963efd1fc6a506488495d951d5263988d2681105b6200288d5760405162461bcd60e51b815260206004820152601b60248201527f5072696365206f75747369646520556e69737761702072616e6765000000000060448201526064016200074a565b925050505b92915050565b5f808260400151620028b15760208301518351620028b9565b825160208401515b91509150915091565b5f8360a0015190505f816001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa15801562002908573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906200292e919062004018565b505050505050905084606001516001600160a01b0316816001600160a01b0316036200295b575050505050565b606085015160408601516001600160a01b039182169183169190911190151581145f816200298a578562002997565b6200299760028862003c51565b9050805f03620029ab575050505050505050565b5f80620029b88a62002898565b600c80546001600160a01b0319166001600160a01b038b811691821790925560608e8101516040805187861660208201529486168582015280518086038201815292850190819052630251596160e31b90529496509294509263128acb089262002a2b9230928b928a92606401620040c0565b60408051808303815f875af115801562002a47573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062002a6d919062003ede565b5050600c80546001600160a01b03191690558362002b5257866001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa15801562002ac2573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062002ae8919062004018565b5050505060608d015192985050506001600160a01b0380881691161462002b525760405162461bcd60e51b815260206004820152601860248201527f506f6f6c207072696365206e6f7420636f72726563746564000000000000000060448201526064016200074a565b50505050505050505050565b80516040516370a0823160e01b81523060048201525f916001600160a01b0316906370a0823190602401602060405180830381865afa15801562002ba4573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062002bca919062003cdc565b608083015160208401516040516370a0823160e01b81523060048201529293505f926001600160a01b03909116906370a0823190602401602060405180830381865afa15801562002c1d573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062002c43919062003cdc565b62002c4f919062003cc6565b90505f8062002c5e8562002898565b8651919350915062002c9b906001600160a01b03167f0000000000000000000000000000000000000000000000000000000000000000866200365c565b602085015162002cd6906001600160a01b03167f0000000000000000000000000000000000000000000000000000000000000000856200365c565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166388316456604051806101600160405280856001600160a01b03168152602001846001600160a01b0316815260200161271062ffffff168152602001620d899f1960020b8152602001620d89a060020b8152602001886040015162002d66578662002d68565b875b8152602001886040015162002d7e578762002d80565b865b81526020015f81526020015f8152602001306001600160a01b03168152602001428152506040518263ffffffff1660e01b815260040162002dc29190620040fc565b6080604051808303815f875af192505050801562002dff575060408051601f3d908101601f1916820190925262002dfc91810190620041c5565b60015b62002e5357604080515f808252602082018190528183018190526060820152905187917f0d9e69eea1226c3cc6b24c170c2b55d6c198272e003451d42e20a842c1d9b914919081900360800190a262002f12565b5f8a8152600a6020908152604080832087905560a08c018051600b9093529281902080546001600160a01b0319166001600160a01b03909316929092179091559051908a01518b917f0d9e69eea1226c3cc6b24c170c2b55d6c198272e003451d42e20a842c1d9b91491879062002ecb578462002ecd565b855b8d6040015162002ede578662002ee0565b855b604080516001600160a01b039095168552602085019390935291830152606082015260800160405180910390a2505050505b845162002f4a906001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000005f6200365c565b602085015162002125906001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000005f6200365c565b62002f948383836001620036b7565b620014a857604051635274afe760e01b81526001600160a01b03841660048201526024016200074a565b5f8062002fcc858762003cc6565b90505f62002fef858762002fe9670de0b6b3a76400008062003c23565b620026cb565b90505f6200304b85886200300586600262003c23565b62003011919062003ec8565b6200301d908a62003c23565b670de0b6b3a764000062003032818062003c23565b6200303f90600262003c23565b62002fe9919062003c23565b905062000aeb818362003ec8565b600180546001600160a01b03191690556200110a816200371b565b6200307e620024d6565b6001805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258620024b93390565b600b8201546002830154600384015483925f928392620030dd9291869162002185565b91505f85600a0154865f0160040154620030f8919062003cc6565b9050808310156200310d57505f905062003198565b808311156200319257600b86015460028701546003880154620031349291849189620033bb565b93505f8411620031725760405162461bcd60e51b815260206004820152600860248201526714dbdb19081bdd5d60c21b60448201526064016200074a565b600b860154600287015460038801546200318f9291879162002185565b92505b50600190505b9250925092565b6040516370a0823160e01b81523060048201525f906001600160a01b038516906370a0823190602401602060405180830381865afa158015620031e4573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906200320a919062003cdc565b9050620032236001600160a01b0385163330866200376a565b6040516370a0823160e01b8152306004820152839082906001600160a01b038716906370a0823190602401602060405180830381865afa1580156200326a573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062003290919062003cdc565b6200329c919062003cc6565b14620032eb5760405162461bcd60e51b815260206004820152601960248201527f556e737570706f72746564207061796d656e7420746f6b656e0000000000000060448201526064016200074a565b8115620033105760065462003310906001600160a01b0386811691339116856200376a565b50505050565b8115620033395760065462003339906001600160a01b0386811691168462002f85565b818111156200331057620033108362003353848462003cc6565b6001600160a01b038716919062002f85565b5f620033996200337583620037a4565b80156200339457505f84806200338f576200338f62003c3d565b868809115b151590565b620033a6868686620026cb565b620033b2919062003ec8565b95945050505050565b5f80620033dd86620033d6670de0b6b3a76400008062003c23565b87620026cb565b620033ea90600162003ec8565b905082811115620033f85750815b5f5b8181101562002213575f600262003412848462003ec8565b6200341f90600162003ec8565b6200342b919062003c51565b9050876200343c8a838a8a62002185565b116200344b578091506200345b565b6200345860018262003cc6565b92505b50620033fa565b600154600160a01b900460ff166200095057604051638dfc202b60e01b815260040160405180910390fd5b5f805160206200521e833981519152546002036200095057604051633ee5aeb560e01b815260040160405180910390fd5b5f805f1983850993909202808410938190039390930393915050565b634e487b715f52806020526024601cfd5b5f60018211620034f9575090565b816001600160801b8210620035135760809190911c9060401b5b600160401b82106200352a5760409190911c9060201b5b6401000000008210620035425760209190911c9060101b5b620100008210620035585760109190911c9060081b5b61010082106200356d5760089190911c9060041b5b60108210620035815760049190911c9060021b5b600482106200358e5760011b5b600302600190811c90818581620035a957620035a962003c3d565b048201901c90506001818581620035c457620035c462003c3d565b048201901c90506001818581620035df57620035df62003c3d565b048201901c90506001818581620035fa57620035fa62003c3d565b048201901c9050600181858162003615576200361562003c3d565b048201901c9050600181858162003630576200363062003c3d565b048201901c9050620036538185816200364d576200364d62003c3d565b04821190565b90039392505050565b6200366a8383835f620037d5565b620014a8576200367e83835f6001620037d5565b620036a857604051635274afe760e01b81526001600160a01b03841660048201526024016200074a565b62002f948383836001620037d5565b60405163a9059cbb60e01b5f8181526001600160a01b038616600452602485905291602083604481808b5af1925060015f511483166200370f57838315161562003703573d5f823e3d81fd5b5f873b113d1516831692505b60405250949350505050565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6200377a84848484600162003821565b6200331057604051635274afe760e01b81526001600160a01b03851660048201526024016200074a565b5f6002826003811115620037bc57620037bc620039d3565b620037c891906200420d565b60ff166001149050919050565b60405163095ea7b360e01b5f8181526001600160a01b038616600452602485905291602083604481808b5af1925060015f511483166200370f57838315161562003703573d5f823e3d81fd5b6040516323b872dd60e01b5f8181526001600160a01b038781166004528616602452604485905291602083606481808c5af1925060015f511483166200387f57838315161562003873573d5f823e3d81fd5b5f883b113d1516831692505b604052505f60605295945050505050565b610fec806200423283390190565b5f60208284031215620038af575f80fd5b5035919050565b5f8060408385031215620038c8575f80fd5b50508035926020909101359150565b5f60c08284031215620038e8575f80fd5b50919050565b5f8083601f840112620038ff575f80fd5b50813567ffffffffffffffff81111562003917575f80fd5b6020830191508360208285010111156200392f575f80fd5b9250929050565b5f805f805f80606087890312156200394c575f80fd5b863567ffffffffffffffff8082111562003964575f80fd5b620039728a838b01620038ee565b909850965060208901359150808211156200398b575f80fd5b620039998a838b01620038ee565b90965094506040890135915080821115620039b2575f80fd5b50620039c189828a01620038ee565b979a9699509497509295939492505050565b634e487b7160e01b5f52602160045260245ffd5b6004811062003a0457634e487b7160e01b5f52602160045260245ffd5b9052565b84516001600160a01b0316815260208086015161018083019162003a36908401826001600160a01b03169052565b5060408601516040830152606086015160608301526080860151608083015260a086015162003a7060a08401826001600160a01b03169052565b5060c086015160c083015260e086015160e083015261010080870151818401525062003aa1610120830186620039e7565b610140820193909352610160015292915050565b6001600160a01b03811681146200110a575f80fd5b8035620011308162003ab5565b5f6020828403121562003ae8575f80fd5b8135620007be8162003ab5565b5f6020828403121562003b06575f80fd5b813567ffffffffffffffff81111562003b1d575f80fd5b82016101208185031215620007be575f80fd5b5f805f6060848603121562003b43575f80fd5b505081359360208301359350604090920135919050565b5f806040838503121562003b6c575f80fd5b823562003b798162003ab5565b9150602083013562003b8b8162003ab5565b809150509250929050565b5f806040838503121562003ba8575f80fd5b82359150602083013562003b8b8162003ab5565b5f805f806060858703121562003bd0575f80fd5b8435935060208501359250604085013567ffffffffffffffff81111562003bf5575f80fd5b62003c0387828801620038ee565b95989497509550505050565b634e487b7160e01b5f52601160045260245ffd5b808202811582820484141762002892576200289262003c0f565b634e487b7160e01b5f52601260045260245ffd5b5f8262003c625762003c6262003c3d565b500490565b813562003c748162003ab5565b81546001600160a01b0319166001600160a01b03919091161781556020820135600182015560408201356002820155606082013560038201556080820135600482015560a09190910135600590910155565b8181038181111562002892576200289262003c0f565b5f6020828403121562003ced575f80fd5b5051919050565b5f6020828403121562003d05575f80fd5b8151620007be8162003ab5565b634e487b7160e01b5f52604160045260245ffd5b604051610120810167ffffffffffffffff8111828210171562003d4d5762003d4d62003d12565b60405290565b5f82601f83011262003d63575f80fd5b813567ffffffffffffffff8082111562003d815762003d8162003d12565b604051601f8301601f19908116603f0116810190828211818310171562003dac5762003dac62003d12565b8160405283815286602085880101111562003dc5575f80fd5b836020870160208301375f602085830101528094505050505092915050565b5f610120823603121562003df6575f80fd5b62003e0062003d26565b823567ffffffffffffffff8082111562003e18575f80fd5b62003e263683870162003d53565b8352602085013591508082111562003e3c575f80fd5b62003e4a3683870162003d53565b6020840152604085013591508082111562003e63575f80fd5b5062003e723682860162003d53565b6040830152506060830135606082015262003e906080840162003aca565b608082015260a083013560a082015260c083013560c082015260e083013560e082015261010080840135818301525080915050919050565b8082018082111562002892576200289262003c0f565b5f806040838503121562003ef0575f80fd5b505080516020909101519092909150565b5f6001820162003f155762003f1562003c0f565b5060010190565b5f81518084525f5b8181101562003f425760208185018101518683018201520162003f24565b505f602082860101526020601f19601f83011685010191505092915050565b60a081525f62003f7560a083018862003f1c565b828103602084015262003f89818862003f1c565b604084018790526001600160a01b03861660608501528381036080850152905062000aeb818562003f1c565b5f60018060a01b03808a1683528089166020840152508660408301528560608301528460808301528360a083015260e060c083015262003ff960e083018462003f1c565b9998505050505050505050565b805161ffff8116811462001130575f80fd5b5f805f805f805f60e0888a0312156200402f575f80fd5b87516200403c8162003ab5565b8097505060208801518060020b811462004054575f80fd5b9550620040646040890162004006565b9450620040746060890162004006565b9350620040846080890162004006565b925060a088015160ff811681146200409a575f80fd5b60c08901519092508015158114620040b0575f80fd5b8091505092959891949750929550565b6001600160a01b0386811682528515156020830152604082018590528316606082015260a0608082018190525f90620022139083018462003f1c565b81516001600160a01b03168152610160810160208301516200412960208401826001600160a01b03169052565b50604083015162004141604084018262ffffff169052565b50606083015162004157606084018260020b9052565b5060808301516200416d608084018260020b9052565b5060a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151620041b4828501826001600160a01b03169052565b505061014092830151919092015290565b5f805f8060808587031215620041d9575f80fd5b8451935060208501516001600160801b0381168114620041f7575f80fd5b6040860151606090960151949790965092505050565b5f60ff83168062004222576200422262003c3d565b8060ff8416069150509291505056fe60a060405234801562000010575f80fd5b5060405162000fec38038062000fec8339810160408190526200003391620001c1565b818585600362000044838262000300565b50600462000053828262000300565b5050506001600160a01b0381166200008457604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b6200008f81620000af565b5060808390526006620000a3828262000300565b505050505050620003cc565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b634e487b7160e01b5f52604160045260245ffd5b5f82601f83011262000124575f80fd5b81516001600160401b038082111562000141576200014162000100565b604051601f8301601f19908116603f011681019082821181831017156200016c576200016c62000100565b816040528381526020925086602085880101111562000189575f80fd5b5f91505b83821015620001ac57858201830151818301840152908201906200018d565b5f602085830101528094505050505092915050565b5f805f805f60a08688031215620001d6575f80fd5b85516001600160401b0380821115620001ed575f80fd5b620001fb89838a0162000114565b9650602088015191508082111562000211575f80fd5b6200021f89838a0162000114565b604089015160608a0151919750955091506001600160a01b038216821462000245575f80fd5b6080880151919350808211156200025a575f80fd5b50620002698882890162000114565b9150509295509295909350565b600181811c908216806200028b57607f821691505b602082108103620002aa57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f821115620002fb57805f5260205f20601f840160051c81016020851015620002d75750805b601f840160051c820191505b81811015620002f8575f8155600101620002e3565b50505b505050565b81516001600160401b038111156200031c576200031c62000100565b62000334816200032d845462000276565b84620002b0565b602080601f8311600181146200036a575f8415620003525750858301515b5f19600386901b1c1916600185901b178555620003c4565b5f85815260208120601f198616915b828110156200039a5788860151825594840194600190910190840162000379565b5085821015620003b857878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b608051610c00620003ec5f395f818161025801526104270152610c005ff3fe608060405234801561000f575f80fd5b506004361061011c575f3560e01c8063715018a6116100a9578063af35c6c71161006e578063af35c6c71461023e578063bef97c8714610246578063d5abeb0114610253578063dd62ed3e1461027a578063f2fde38b146102b2575f80fd5b8063715018a6146101ed57806379cc6790146101f55780638da5cb5b1461020857806395d89b4114610223578063a9059cbb1461022b575f80fd5b806323b872dd116100ef57806323b872dd1461017b578063313ce5671461018e57806340c10f191461019d57806342966c68146101b257806370a08231146101c5575f80fd5b806303ee438c1461012057806306fdde031461013e578063095ea7b31461014657806318160ddd14610169575b5f80fd5b6101286102c5565b6040516101359190610a43565b60405180910390f35b610128610351565b610159610154366004610aaa565b6103e1565b6040519015158152602001610135565b6002545b604051908152602001610135565b610159610189366004610ad2565b6103fa565b60405160128152602001610135565b6101b06101ab366004610aaa565b61041d565b005b6101b06101c0366004610b0b565b6104b0565b61016d6101d3366004610b22565b6001600160a01b03165f9081526020819052604090205490565b6101b06104c5565b6101b0610203366004610aaa565b6104d8565b6005546040516001600160a01b039091168152602001610135565b610128610530565b610159610239366004610aaa565b61053f565b6101b061054c565b6007546101599060ff1681565b61016d7f000000000000000000000000000000000000000000000000000000000000000081565b61016d610288366004610b42565b6001600160a01b039182165f90815260016020908152604080832093909416825291909152205490565b6101b06102c0366004610b22565b6105d0565b600680546102d290610b73565b80601f01602080910402602001604051908101604052809291908181526020018280546102fe90610b73565b80156103495780601f1061032057610100808354040283529160200191610349565b820191905f5260205f20905b81548152906001019060200180831161032c57829003601f168201915b505050505081565b60606003805461036090610b73565b80601f016020809104026020016040519081016040528092919081815260200182805461038c90610b73565b80156103d75780601f106103ae576101008083540402835291602001916103d7565b820191905f5260205f20905b8154815290600101906020018083116103ba57829003601f168201915b5050505050905090565b5f336103ee81858561060a565b60019150505b92915050565b5f3361040785828561061c565b610412858585610698565b506001949350505050565b6104256106f5565b7f00000000000000000000000000000000000000000000000000000000000000008161045060025490565b61045a9190610bab565b11156104a25760405162461bcd60e51b815260206004820152601260248201527145786365656473206d617820737570706c7960701b60448201526064015b60405180910390fd5b6104ac8282610722565b5050565b6104b86106f5565b6104c23382610756565b50565b6104cd6106f5565b6104d65f61078a565b565b6104e06106f5565b60075460ff16156105265760405162461bcd60e51b815260206004820152601060248201526f151c98591a5b99c81b5a59dc985d195960821b6044820152606401610499565b6104ac8282610756565b60606004805461036090610b73565b5f336103ee818585610698565b6105546106f5565b60075460ff16156105995760405162461bcd60e51b815260206004820152600f60248201526e105b1c9958591e48195b98589b1959608a1b6044820152606401610499565b6007805460ff191660011790556040517feadb24812ab3c9a55c774958184293ebdb6c7f6a2dbab11f397d80c86feb65d3905f90a1565b6105d86106f5565b6001600160a01b03811661060157604051631e4fbdf760e01b81525f6004820152602401610499565b6104c28161078a565b61061783838360016107db565b505050565b6001600160a01b038381165f908152600160209081526040808320938616835292905220545f19811015610692578181101561068457604051637dc7a0d960e11b81526001600160a01b03841660048201526024810182905260448101839052606401610499565b61069284848484035f6107db565b50505050565b6001600160a01b0383166106c157604051634b637e8f60e11b81525f6004820152602401610499565b6001600160a01b0382166106ea5760405163ec442f0560e01b81525f6004820152602401610499565b6106178383836108ad565b6005546001600160a01b031633146104d65760405163118cdaa760e01b8152336004820152602401610499565b6001600160a01b03821661074b5760405163ec442f0560e01b81525f6004820152602401610499565b6104ac5f83836108ad565b6001600160a01b03821661077f57604051634b637e8f60e11b81525f6004820152602401610499565b6104ac825f836108ad565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b6001600160a01b0384166108045760405163e602df0560e01b81525f6004820152602401610499565b6001600160a01b03831661082d57604051634a1406b160e11b81525f6004820152602401610499565b6001600160a01b038085165f908152600160209081526040808320938716835292905220829055801561069257826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161089f91815260200190565b60405180910390a350505050565b6001600160a01b038316158015906108cd57506001600160a01b03821615155b156109175760075460ff166109175760405162461bcd60e51b815260206004820152601060248201526f151c985b9cd9995c9cc81b1bd8dad95960821b6044820152606401610499565b6106178383836001600160a01b038316610947578060025f82825461093c9190610bab565b909155506109b79050565b6001600160a01b0383165f90815260208190526040902054818110156109995760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610499565b6001600160a01b0384165f9081526020819052604090209082900390555b6001600160a01b0382166109d3576002805482900390556109f1565b6001600160a01b0382165f9081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610a3691815260200190565b60405180910390a3505050565b5f602080835283518060208501525f5b81811015610a6f57858101830151858201604001528201610a53565b505f604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610aa5575f80fd5b919050565b5f8060408385031215610abb575f80fd5b610ac483610a8f565b946020939093013593505050565b5f805f60608486031215610ae4575f80fd5b610aed84610a8f565b9250610afb60208501610a8f565b9150604084013590509250925092565b5f60208284031215610b1b575f80fd5b5035919050565b5f60208284031215610b32575f80fd5b610b3b82610a8f565b9392505050565b5f8060408385031215610b53575f80fd5b610b5c83610a8f565b9150610b6a60208401610a8f565b90509250929050565b600181811c90821680610b8757607f821691505b602082108103610ba557634e487b7160e01b5f52602260045260245ffd5b50919050565b808201808211156103f457634e487b7160e01b5f52601160045260245ffdfea264697066735822122090ddc87471e0ddf973a593ecb42949413d62fd9a4d0b7b7eed4e63589596f38964736f6c634300081800339b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00a2646970667358221220e7a56a46e75eaa6bce527b76db07ade55795cd1207869ffef0a52f3a630f277c64736f6c63430008180033",
    "sourceMap": "471:33644:39:-:0;;;7721:489;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2365:1:32;1505:66;2539;7842:10:39;;1269:95:19;;1322:31;;-1:-1:-1;;;1322:31:19;;1350:1;1322:31;;;784:51:42;757:18;;1322:31:19;;;;;;;;1269:95;1373:32;1392:12;1373:18;:32::i;:::-;-1:-1:-1;;;;;;7876:27:39;::::1;7868:58;;;::::0;-1:-1:-1;;;7868:58:39;;1048:2:42;7868:58:39::1;::::0;::::1;1030:21:42::0;1087:2;1067:18;;;1060:30;-1:-1:-1;;;1106:18:42;;;1099:48;1164:18;;7868:58:39::1;846:342:42::0;7868:58:39::1;-1:-1:-1::0;;;;;7944:39:39;::::1;7936:73;;;::::0;-1:-1:-1;;;7936:73:39;;1395:2:42;7936:73:39::1;::::0;::::1;1377:21:42::0;1434:2;1414:18;;;1407:30;1473:23;1453:18;;;1446:51;1514:18;;7936:73:39::1;1193:345:42::0;7936:73:39::1;-1:-1:-1::0;;;;;8019:34:39;::::1;;::::0;3340:4:::1;8071:29:::0;::::1;;8063:54;;;::::0;-1:-1:-1;;;8063:54:39;;1745:2:42;8063:54:39::1;::::0;::::1;1727:21:42::0;1784:2;1764:18;;;1757:30;-1:-1:-1;;;1803:18:42;;;1796:42;1855:18;;8063:54:39::1;1543:336:42::0;8063:54:39::1;-1:-1:-1::0;8127:20:39::1;:36:::0;;-1:-1:-1;;;;;;8127:36:39::1;-1:-1:-1::0;;;;;8127:36:39;;;::::1;::::0;;;::::1;::::0;;;8173:13:::1;:30:::0;471:33644;;2011:153:20;2100:13;2093:20;;-1:-1:-1;;;;;;2093:20:20;;;2123:34;2148:8;2123:24;:34::i;:::-;2011:153;:::o;2912:187:19:-;2985:16;3004:6;;-1:-1:-1;;;;;3020:17:19;;;-1:-1:-1;;;;;;3020:17:19;;;;;;3052:40;;3004:6;;;;;;;3052:40;;2985:16;3052:40;2975:124;2912:187;:::o;14:131:42:-;-1:-1:-1;;;;;89:31:42;;79:42;;69:70;;135:1;132;125:12;150:483;275:6;283;291;344:2;332:9;323:7;319:23;315:32;312:52;;;360:1;357;350:12;312:52;392:9;386:16;411:31;436:5;411:31;:::i;:::-;506:2;491:18;;485:25;555:2;540:18;;534:25;461:5;;-1:-1:-1;485:25:42;-1:-1:-1;568:33:42;534:25;568:33;:::i;:::-;620:7;610:17;;;150:483;;;;;:::o;1543:336::-;471:33644:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801562000010575f80fd5b506004361062000264575f3560e01c8063715018a6116200014f578063bcae25a411620000c3578063e521cb921162000083578063e521cb921462000684578063efc20dad146200069b578063f2fde38b14620006c8578063fa461e3314620006df578063fdfae48614620006f6575f80fd5b8063bcae25a41462000628578063d55be8c61462000632578063d9f1aed9146200063c578063dd1b9c4a1462000653578063e30c39781462000672575f80fd5b80638456cb59116200010f5780638456cb5914620005c85780638da5cb5b14620005d2578063a4ce25a714620005e3578063b17acdcd14620005fa578063b8dc491b1462000611575f80fd5b8063715018a6146200055757806375f0c2f01462000561578063791b98bc146200056b57806379ba5097146200059357806383966021146200059d575f80fd5b80634373a28611620001e75780635c471ad511620001a75780635c471ad514620004c75780635c975abb14620004e957806364df049e14620004fc578063683931b41462000529578063709ef2311462000540575f80fd5b80634373a2861462000384578063454b0608146200039b57806348f719e514620003b257806354147e9e14620003e8578063571a26a0146200040a575f80fd5b80633edb917d11620002335780633edb917d14620002e25780633ef068d214620002ec5780633f4ba83a146200030357806342a81515146200030d57806342f78e911462000324575f80fd5b806309e0625914620002685780630fda366d1462000281578063121a257f14620002ab5780632ad7157314620002d8575b5f80fd5b6200027f620002793660046200389e565b62000700565b005b62000298620002923660046200389e565b62000794565b6040519081526020015b60405180910390f35b620002c2620002bc366004620038b6565b620007c5565b60408051928352602083019190915201620002a2565b6200029860025481565b6200029860095481565b6200027f620002fd366004620038d7565b62000821565b6200027f6200093c565b620002986200031e36600462003936565b62000952565b600d54600e54600f546010546011546012546200034c956001600160a01b0316949392919086565b604080516001600160a01b0390971687526020870195909552938501929092526060840152608083015260a082015260c001620002a2565b6200027f620003953660046200389e565b62000af7565b6200027f620003ac3660046200389e565b62000b85565b620003d7620003c33660046200389e565b60056020525f908152604090205460ff1681565b6040519015158152602001620002a2565b62000298620003f93660046200389e565b600a6020525f908152604090205481565b620004b56200041b3660046200389e565b600360208181525f92835260409283902083516101208101855281546001600160a01b03908116825260018301548116938201939093526002820154948101949094529182015460608401526004820154608084015260058201541660a0830152600681015460c0830152600781015460e083015260088101546101008301526009810154600a820154600b9092015460ff909116919084565b604051620002a2949392919062003a08565b62000298620004d836600462003ad7565b60086020525f908152604090205481565b600154600160a01b900460ff16620003d7565b60065462000510906001600160a01b031681565b6040516001600160a01b039091168152602001620002a2565b620002986200053a36600462003af5565b6200110d565b6200027f6200055136600462003b30565b62001135565b6200027f620014ad565b620002986107d081565b620005107f000000000000000000000000000000000000000000000000000000000000000081565b6200027f620014c2565b62000510620005ae3660046200389e565b600b6020525f90815260409020546001600160a01b031681565b6200027f62001507565b5f546001600160a01b031662000510565b6200027f620005f436600462003b30565b6200151b565b620002c26200060b3660046200389e565b6200185e565b6200027f6200062236600462003b5a565b62001b14565b6200029860075481565b620002986103e881565b6200027f6200064d3660046200389e565b62001ccd565b6200065d61271081565b60405162ffffff9091168152602001620002a2565b6001546001600160a01b031662000510565b6200027f6200069536600462003ad7565b62001f43565b62000298620006ac36600462003b96565b600460209081525f928352604080842090915290825290205481565b6200027f620006d936600462003ad7565b62001ff5565b6200027f620006f036600462003bbc565b62002068565b6200029861138881565b6200070a6200212d565b611388811115620007535760405162461bcd60e51b815260206004820152600e60248201526d0a6d0c2e4ca40e8dede40d0d2ced60931b60448201526064015b60405180910390fd5b60095460408051918252602082018390527fafd7016dba95bc0c303b0838ae8e4829497ed18cc6a0ed00eec5fc7c50148e17910160405180910390a1600955565b5f8181526003602081905260408220600b8101546002820154928201549192620007be926200215b565b9392505050565b5f8281526003602081905260408220600b8101546002820154928201548493620007f3929187919062002185565b6006820154909350612710906200080b908562003c23565b62000817919062003c51565b9150509250929050565b6200082b6200212d565b5f6200083b602083018362003ad7565b6001600160a01b031603620008885760405162461bcd60e51b81526020600482015260126024820152712d32b937903830bcb6b2b73a103a37b5b2b760711b60448201526064016200074a565b620008ab81602001358260400135836060013584608001358560a001356200221e565b80600d620008ba828262003c67565b507f29f62c75478dac4ea9396c9b5e58b4e29d6f7812c6eb05ceaf5d0c776db6b5769050620008ed602083018362003ad7565b604080516001600160a01b039092168252602080850135908301528084013590820152606080840135908201526080808401359082015260a0808401359082015260c00160405180910390a150565b620009466200212d565b620009506200247f565b565b5f6200095d620024d6565b6040805160c081018252600d546001600160a01b0316808252600e546020830152600f54928201929092526010546060820152601154608082015260125460a082015290620009e25760405162461bcd60e51b815260206004820152601060248201526f139bc81b185d5b98da081c1c995cd95d60821b60448201526064016200074a565b604080516101406020601f8b018190040282018101909252610120810189815262000aeb928291908c908c90819085018382808284375f92019190915250505090825250604080516020601f8b0181900481028201810190925289815291810191908a908a90819084018382808284375f92019190915250505090825250604080516020601f8901819004810282018101909252878152918101919088908890819084018382808284375f920191909152505050908252506020848101519082015283516001600160a01b031660408083019190915284015160608083019190915284015160808083019190915284015160a08083019190915284015160c09091015262002502565b98975050505050505050565b62000b016200212d565b6103e881111562000b445760405162461bcd60e51b815260206004820152600c60248201526b08ccaca40e8dede40d0d2ced60a31b60448201526064016200074a565b60075460408051918252602082018390527f3062378541f1b58e0547bfb13e7d7585153e442e477e263c6e63d4775b3072a6910160405180910390a1600755565b62000b8f62002685565b5f8181526003602052604090206002600982015460ff16600381111562000bba5762000bba620039d3565b1462000c015760405162461bcd60e51b8152602060048201526015602482015274105d58dd1a5bdb881b9bdd0818dbdb5c1b195d1959605a1b60448201526064016200074a565b5f62000c0d82620026a3565b90505f62000c2d83600b0154845f0160020154855f01600301546200215b565b90505f62000c508362000c49670de0b6b3a76400008062003c23565b84620026cb565b6040805160c0810182525f606082018190526080820181905260a0820181905287546001600160a01b0390811680845260018a015490911660208085018290529181118486015260098a01805460ff191660031790558252600890529182208054939450909286929062000cc690849062003cc6565b909155505060208101516040516370a0823160e01b815230600482015285916001600160a01b0316906370a0823190602401602060405180830381865afa15801562000d14573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000d3a919062003cdc565b62000d46919062003cc6565b816080018181525050805f01516001600160a01b031663af35c6c76040518163ffffffff1660e01b81526004015f604051808303815f87803b15801562000d8b575f80fd5b505af115801562000d9e573d5f803e3d5ffd5b505050505f8411801562000db157505f82115b1562000f1b5780516040516340c10f1960e01b8152306004820152602481018490526001600160a01b03909116906340c10f19906044015f604051808303815f87803b15801562000e00575f80fd5b505af115801562000e13573d5f803e3d5ffd5b5050505062000e2783826040015162002785565b6001600160a01b031660608201525f8062000e428362002898565b60608501516040516309f56ab160e11b81526001600160a01b0380851660048301528084166024830152612710604483015291821660648201529294509092507f000000000000000000000000000000000000000000000000000000000000000016906313ead562906084016020604051808303815f875af115801562000ecb573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000ef1919062003cf4565b6001600160a01b031660a084015262000f0c838588620028c2565b62000f18888462002b5e565b50505b80516040516370a0823160e01b81523060048201525f916001600160a01b0316906370a0823190602401602060405180830381865afa15801562000f61573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000f87919062003cdc565b9050801562000feb578151604051630852cd8d60e31b8152600481018390526001600160a01b03909116906342966c68906024015f604051808303815f87803b15801562000fd3575f80fd5b505af115801562000fe6573d5f803e3d5ffd5b505050505b608082015160208301516040516370a0823160e01b81523060048201525f92916001600160a01b0316906370a0823190602401602060405180830381865afa1580156200103a573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062001060919062003cdc565b6200106c919062003cc6565b9050801562001098576005870154602084015162001098916001600160a01b0391821691168362002f85565b825f01516001600160a01b031663715018a66040518163ffffffff1660e01b81526004015f604051808303815f87803b158015620010d4575f80fd5b505af1158015620010e7573d5f803e3d5ffd5b50505050505050505050506200110a60015f805160206200521e83398151915255565b50565b5f62001118620024d6565b6200112d620011278362003de4565b62002502565b90505b919050565b6200113f62002685565b5f8381526003602052604090206001600982015460ff1660038111156200116a576200116a620039d3565b14620011ae5760405162461bcd60e51b815260206004820152601260248201527141756374696f6e206e6f742061637469766560701b60448201526064016200074a565b5f8311620011ed5760405162461bcd60e51b815260206004820152600b60248201526a16995c9bc8185b5bdd5b9d60aa1b60448201526064016200074a565b5f848152600460209081526040808320338452909152902054831115620012495760405162461bcd60e51b815260206004820152600f60248201526e457863656564732062616c616e636560881b60448201526064016200074a565b5f6200126882600b015485845f0160020154855f016003015462002fbe565b90505f612710835f01600601548362001282919062003c23565b6200128e919062003c51565b9050836200129d828462003cc6565b1015620012e15760405162461bcd60e51b815260206004820152601160248201527014db1a5c1c1859d948195e18d959591959607a1b60448201526064016200074a565b6001830154600a840180546001600160a01b03909216918491905f906200130a90849062003cc6565b925050819055508584600b015f82825462001326919062003cc6565b90915550505f878152600460209081526040808320338452909152812080548892906200135590849062003cc6565b90915550506001600160a01b0381165f90815260086020526040812080548592906200138390849062003cc6565b9091555050835460405163079cc67960e41b8152336004820152602481018890526001600160a01b03909116906379cc6790906044015f604051808303815f87803b158015620013d1575f80fd5b505af1158015620013e4573d5f803e3d5ffd5b505050505f8211156200140d576006546200140d906001600160a01b0383811691168462002f85565b62001430336200141e848662003cc6565b6001600160a01b038416919062002f85565b600a840154600b850154604080518981526020810187905290810185905260608101929092526080820152339088907fd7fd93110c86e222ad62b2a786fdc3afd88c4c21f9092614ca01365ba432073c9060a00160405180910390a350505050620014a860015f805160206200521e83398151915255565b505050565b620014b76200212d565b620009505f62003059565b60015433906001600160a01b03168114620014fc5760405163118cdaa760e01b81526001600160a01b03821660048201526024016200074a565b6200110a8162003059565b620015116200212d565b6200095062003074565b6200152562002685565b6200152f620024d6565b5f8381526003602052604090206001600982015460ff1660038111156200155a576200155a620039d3565b146200159e5760405162461bcd60e51b815260206004820152601260248201527141756374696f6e206e6f742061637469766560701b60448201526064016200074a565b5f8311620015dd5760405162461bcd60e51b815260206004820152600b60248201526a16995c9bc8185b5bdd5b9d60aa1b60448201526064016200074a565b5f80620015eb8386620030ba565b600686015492975090935091505f90612710906200160a908562003c23565b62001616919062003c51565b90508462001625828562003ec8565b1115620016695760405162461bcd60e51b815260206004820152601160248201527014db1a5c1c1859d948195e18d959591959607a1b60448201526064016200074a565b8284600a015f8282546200167e919062003ec8565b925050819055508584600b015f8282546200169a919062003ec8565b90915550505f87815260046020908152604080832033845290915281208054889290620016c990849062003ec8565b909155505060018401546001600160a01b03165f9081526008602052604081208054859290620016fb90849062003ec8565b90915550508115620017175760098401805460ff191660021790555b600184015462001732906001600160a01b031684836200319f565b83546040516340c10f1960e01b8152336004820152602481018890526001600160a01b03909116906340c10f19906044015f604051808303815f87803b1580156200177b575f80fd5b505af11580156200178e573d5f803e3d5ffd5b50505050600a840154600b850154604080518981526020810187905290810184905260608101929092526080820152339088907fc938e879cd47aa84d5893377578d6c211ccd96f382228c42c1bb6a8eaa71a0849060a00160405180910390a381156200184257867fc7502df20ccf846bf5005f01564bb502b56dcec19f0e2d0575c4369cc5e3b53b85600a015486600b015460405162001839929190918252602082015260400190565b60405180910390a25b50505050620014a860015f805160206200521e83398151915255565b5f806200186a62002685565b5f83815260036020819052604090912090600982015460ff166003811115620018975762001897620039d3565b148015620018b157505f848152600a602052604090205415155b620018ed5760405162461bcd60e51b815260206004820152600b60248201526a2737903837b9b4ba34b7b760a91b60448201526064016200074a565b604080516080810182525f868152600a6020908152838220548352309083019081526001600160801b0383850181815260608501828152955163fc6f786560e01b81529451600486015291516001600160a01b039081166024860152915181166044850152935190931660648301529182917f00000000000000000000000000000000000000000000000000000000000000009091169063fc6f78659060840160408051808303815f875af1158015620019a9573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620019cf919062003ede565b600185015485549294509092506001600160a01b0390811691161080620019f8578183620019fb565b82825b600886015491975095505f906127109062001a17908962003c23565b62001a23919062003c51565b90505f612710865f01600801548862001a3d919062003c23565b62001a49919062003c51565b8654600588015491925062001a6d916001600160a01b039182169116848b62003316565b6001860154600587015462001a91916001600160a01b039081169116838a62003316565b887f8dcde09e464f5c324d7cbf62dbc0c647b8ad9242592ae364153f2549f4898d0462001abf848b62003cc6565b62001acb848b62003cc6565b60408051928352602083019190915281018590526060810184905260800160405180910390a250505050505062001b0f60015f805160206200521e83398151915255565b915091565b62001b1e62002685565b62001b286200212d565b6001600160a01b03811662001b715760405162461bcd60e51b815260206004820152600e60248201526d16995c9bc81c9958da5c1a595b9d60921b60448201526064016200074a565b6040516370a0823160e01b81523060048201525f906001600160a01b038416906370a0823190602401602060405180830381865afa15801562001bb6573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062001bdc919062003cdc565b6001600160a01b0384165f9081526008602052604090205490915080821162001c3b5760405162461bcd60e51b815260206004820152601060248201526f04e6f7468696e6720746f2073776565760841b60448201526064016200074a565b5f62001c48828462003cc6565b905062001c606001600160a01b038616858362002f85565b836001600160a01b0316856001600160a01b03167f7b09c29f9106defeccc9ac3b823f3aad0b470d120e5df7aed033b5c43a4bf7188360405162001ca691815260200190565b60405180910390a350505062001cc960015f805160206200521e83398151915255565b5050565b62001cd762002685565b5f81815260036020526040902060058101546001600160a01b0316331462001d305760405162461bcd60e51b815260206004820152600b60248201526a2737ba1031b932b0ba37b960a91b60448201526064016200074a565b6002600982015460ff16600381111562001d4e5762001d4e620039d3565b148062001d7657506003600982015460ff16600381111562001d745762001d74620039d3565b145b62001dbc5760405162461bcd60e51b8152602060048201526015602482015274105d58dd1a5bdb881b9bdd0818dbdb5c1b195d1959605a1b60448201526064016200074a565b5f8281526005602052604090205460ff161562001e105760405162461bcd60e51b815260206004820152601160248201527020b63932b0b23c903bb4ba34323930bbb760791b60448201526064016200074a565b5f62001e1c82620026a3565b82600a015462001e2d919062003cc6565b90505f811162001e765760405162461bcd60e51b81526020600482015260136024820152724e6f7468696e6720746f20776974686472617760681b60448201526064016200074a565b5f838152600560209081526040808320805460ff191660019081179091558501546001600160a01b0316835260089091528120805483929062001ebb90849062003cc6565b90915550506005820154600183015462001ee3916001600160a01b0391821691168362002f85565b60058201546040518281526001600160a01b039091169084907f579e0e2d0cfdb23711bb6034ac9f2ba41e8965a8e24589d1c3cf5604868661fc9060200160405180910390a350506200110a60015f805160206200521e83398151915255565b62001f4d6200212d565b6001600160a01b03811662001f9a5760405162461bcd60e51b815260206004820152601260248201527116995c9bc8199959481c9958da5c1a595b9d60721b60448201526064016200074a565b6006546040516001600160a01b038084169216907fd3890fc76afcfc31cba1dcf2c27b50e2541e4d75039c981855b5b5e03682aea0905f90a3600680546001600160a01b0319166001600160a01b0392909216919091179055565b62001fff6200212d565b600180546001600160a01b0383166001600160a01b03199091168117909155620020305f546001600160a01b031690565b6001600160a01b03167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b600c546001600160a01b0316158015906200208d5750600c546001600160a01b031633145b620020d35760405162461bcd60e51b8152602060048201526015602482015274556e617574686f72697a65642063616c6c6261636b60581b60448201526064016200074a565b5f80620020e38385018562003b5a565b915091505f8613156200210657620021066001600160a01b038316338862002f85565b5f8513156200212557620021256001600160a01b038216338762002f85565b505050505050565b5f546001600160a01b03163314620009505760405163118cdaa760e01b81523360048201526024016200074a565b5f620021718285670de0b6b3a7640000620026cb565b6200217d908462003ec8565b949350505050565b5f80620021a98486620021a1670de0b6b3a76400008062003c23565b600162003365565b90505f620022058487620021bf8a600262003c23565b620021cb919062003ec8565b620021d7908962003c23565b670de0b6b3a7640000620021ec818062003c23565b620021f990600262003c23565b620021a1919062003c23565b905062002213818362003ec8565b979650505050505050565b5f8411620022615760405162461bcd60e51b815260206004820152600f60248201526e5a65726f206261736520707269636560881b60448201526064016200074a565b5f8211620022a35760405162461bcd60e51b815260206004820152600e60248201526d5a65726f206d617820726169736560901b60448201526064016200074a565b6107d08110158015620022b857506127108111155b620023065760405162461bcd60e51b815260206004820152601760248201527f496e76616c6964206c697175696469747920736861726500000000000000000060448201526064016200074a565b6ec097ce7bc90715b34b9f10000000008511158015620023395750722cd76fe086b93ce2f768a00b22a000000000008411155b8015620023595750722cd76fe086b93ce2f768a00b22a000000000008311155b8015620023775750701d6329f1c35ca4bfabb9f56100000000008211155b620023b75760405162461bcd60e51b815260206004820152600f60248201526e4375727665206f766572666c6f777360881b60448201526064016200074a565b5f620023c75f8487878a620033bb565b90505f620023d78287876200215b565b90505f62002416612710620023ed868862003c23565b620023f9919062003c51565b6200240d670de0b6b3a76400008062003c23565b84600162003365565b90508762002425828562003ec8565b1115620024755760405162461bcd60e51b815260206004820152601e60248201527f537570706c7920746f6f20736d616c6c20666f72206c6971756964697479000060448201526064016200074a565b5050505050505050565b6200248962003462565b6001805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b600154600160a01b900460ff1615620009505760405163d93c066560e01b815260040160405180910390fd5b5f6200252782606001518360a001518460c001518560e001518661010001516200221e565b60028054905f620025388362003f01565b9190505590505f825f015183602001518460600151308660400151604051620025619062003890565b6200257195949392919062003f61565b604051809103905ff0801580156200258b573d5f803e3d5ffd5b505f8381526003602081905260409182902080546001600160a01b03199081166001600160a01b0386811691909117835560808901516001808501805485169383169390931790925560a08a01516002850181905560c08b015195850186905560e08b015160048601819055600586018054339616861790556007805460068801556101008d01519087018190556009805460088901558701805460ff19169095179094558b88015197519899509497889794968b967f78f87bd22347e4e37db1ab310c6ce7e1780121e5e48207cd0b02d39ee87d28349662002675968d96959490919062003fb5565b60405180910390a3505050919050565b6200268f6200348d565b60025f805160206200521e83398151915255565b5f612710825f016007015483600a0154620026bf919062003c23565b6200112d919062003c51565b5f805f620026da8686620034be565b91509150815f036200270357838181620026f857620026f862003c3d565b0492505050620007be565b8184116200271d576200271d6003851502601118620034da565b5f848688095f868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010185841190960395909502919093039390930492909217029150509392505050565b5f805f83620027a957620027a2670de0b6b3a76400008062003c23565b85620027be565b84620027be670de0b6b3a76400008062003c23565b90925090505f600160401b620027d5838562003c51565b1062002800576040620027f8620027f285600160401b86620026cb565b620034eb565b901b62002815565b62002815620027f284600160c01b85620026cb565b90506401000276a3811180156200283f575073fffd8963efd1fc6a506488495d951d5263988d2681105b6200288d5760405162461bcd60e51b815260206004820152601b60248201527f5072696365206f75747369646520556e69737761702072616e6765000000000060448201526064016200074a565b925050505b92915050565b5f808260400151620028b15760208301518351620028b9565b825160208401515b91509150915091565b5f8360a0015190505f816001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa15801562002908573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906200292e919062004018565b505050505050905084606001516001600160a01b0316816001600160a01b0316036200295b575050505050565b606085015160408601516001600160a01b039182169183169190911190151581145f816200298a578562002997565b6200299760028862003c51565b9050805f03620029ab575050505050505050565b5f80620029b88a62002898565b600c80546001600160a01b0319166001600160a01b038b811691821790925560608e8101516040805187861660208201529486168582015280518086038201815292850190819052630251596160e31b90529496509294509263128acb089262002a2b9230928b928a92606401620040c0565b60408051808303815f875af115801562002a47573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062002a6d919062003ede565b5050600c80546001600160a01b03191690558362002b5257866001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa15801562002ac2573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062002ae8919062004018565b5050505060608d015192985050506001600160a01b0380881691161462002b525760405162461bcd60e51b815260206004820152601860248201527f506f6f6c207072696365206e6f7420636f72726563746564000000000000000060448201526064016200074a565b50505050505050505050565b80516040516370a0823160e01b81523060048201525f916001600160a01b0316906370a0823190602401602060405180830381865afa15801562002ba4573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062002bca919062003cdc565b608083015160208401516040516370a0823160e01b81523060048201529293505f926001600160a01b03909116906370a0823190602401602060405180830381865afa15801562002c1d573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062002c43919062003cdc565b62002c4f919062003cc6565b90505f8062002c5e8562002898565b8651919350915062002c9b906001600160a01b03167f0000000000000000000000000000000000000000000000000000000000000000866200365c565b602085015162002cd6906001600160a01b03167f0000000000000000000000000000000000000000000000000000000000000000856200365c565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166388316456604051806101600160405280856001600160a01b03168152602001846001600160a01b0316815260200161271062ffffff168152602001620d899f1960020b8152602001620d89a060020b8152602001886040015162002d66578662002d68565b875b8152602001886040015162002d7e578762002d80565b865b81526020015f81526020015f8152602001306001600160a01b03168152602001428152506040518263ffffffff1660e01b815260040162002dc29190620040fc565b6080604051808303815f875af192505050801562002dff575060408051601f3d908101601f1916820190925262002dfc91810190620041c5565b60015b62002e5357604080515f808252602082018190528183018190526060820152905187917f0d9e69eea1226c3cc6b24c170c2b55d6c198272e003451d42e20a842c1d9b914919081900360800190a262002f12565b5f8a8152600a6020908152604080832087905560a08c018051600b9093529281902080546001600160a01b0319166001600160a01b03909316929092179091559051908a01518b917f0d9e69eea1226c3cc6b24c170c2b55d6c198272e003451d42e20a842c1d9b91491879062002ecb578462002ecd565b855b8d6040015162002ede578662002ee0565b855b604080516001600160a01b039095168552602085019390935291830152606082015260800160405180910390a2505050505b845162002f4a906001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000005f6200365c565b602085015162002125906001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000005f6200365c565b62002f948383836001620036b7565b620014a857604051635274afe760e01b81526001600160a01b03841660048201526024016200074a565b5f8062002fcc858762003cc6565b90505f62002fef858762002fe9670de0b6b3a76400008062003c23565b620026cb565b90505f6200304b85886200300586600262003c23565b62003011919062003ec8565b6200301d908a62003c23565b670de0b6b3a764000062003032818062003c23565b6200303f90600262003c23565b62002fe9919062003c23565b905062000aeb818362003ec8565b600180546001600160a01b03191690556200110a816200371b565b6200307e620024d6565b6001805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258620024b93390565b600b8201546002830154600384015483925f928392620030dd9291869162002185565b91505f85600a0154865f0160040154620030f8919062003cc6565b9050808310156200310d57505f905062003198565b808311156200319257600b86015460028701546003880154620031349291849189620033bb565b93505f8411620031725760405162461bcd60e51b815260206004820152600860248201526714dbdb19081bdd5d60c21b60448201526064016200074a565b600b860154600287015460038801546200318f9291879162002185565b92505b50600190505b9250925092565b6040516370a0823160e01b81523060048201525f906001600160a01b038516906370a0823190602401602060405180830381865afa158015620031e4573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906200320a919062003cdc565b9050620032236001600160a01b0385163330866200376a565b6040516370a0823160e01b8152306004820152839082906001600160a01b038716906370a0823190602401602060405180830381865afa1580156200326a573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062003290919062003cdc565b6200329c919062003cc6565b14620032eb5760405162461bcd60e51b815260206004820152601960248201527f556e737570706f72746564207061796d656e7420746f6b656e0000000000000060448201526064016200074a565b8115620033105760065462003310906001600160a01b0386811691339116856200376a565b50505050565b8115620033395760065462003339906001600160a01b0386811691168462002f85565b818111156200331057620033108362003353848462003cc6565b6001600160a01b038716919062002f85565b5f620033996200337583620037a4565b80156200339457505f84806200338f576200338f62003c3d565b868809115b151590565b620033a6868686620026cb565b620033b2919062003ec8565b95945050505050565b5f80620033dd86620033d6670de0b6b3a76400008062003c23565b87620026cb565b620033ea90600162003ec8565b905082811115620033f85750815b5f5b8181101562002213575f600262003412848462003ec8565b6200341f90600162003ec8565b6200342b919062003c51565b9050876200343c8a838a8a62002185565b116200344b578091506200345b565b6200345860018262003cc6565b92505b50620033fa565b600154600160a01b900460ff166200095057604051638dfc202b60e01b815260040160405180910390fd5b5f805160206200521e833981519152546002036200095057604051633ee5aeb560e01b815260040160405180910390fd5b5f805f1983850993909202808410938190039390930393915050565b634e487b715f52806020526024601cfd5b5f60018211620034f9575090565b816001600160801b8210620035135760809190911c9060401b5b600160401b82106200352a5760409190911c9060201b5b6401000000008210620035425760209190911c9060101b5b620100008210620035585760109190911c9060081b5b61010082106200356d5760089190911c9060041b5b60108210620035815760049190911c9060021b5b600482106200358e5760011b5b600302600190811c90818581620035a957620035a962003c3d565b048201901c90506001818581620035c457620035c462003c3d565b048201901c90506001818581620035df57620035df62003c3d565b048201901c90506001818581620035fa57620035fa62003c3d565b048201901c9050600181858162003615576200361562003c3d565b048201901c9050600181858162003630576200363062003c3d565b048201901c9050620036538185816200364d576200364d62003c3d565b04821190565b90039392505050565b6200366a8383835f620037d5565b620014a8576200367e83835f6001620037d5565b620036a857604051635274afe760e01b81526001600160a01b03841660048201526024016200074a565b62002f948383836001620037d5565b60405163a9059cbb60e01b5f8181526001600160a01b038616600452602485905291602083604481808b5af1925060015f511483166200370f57838315161562003703573d5f823e3d81fd5b5f873b113d1516831692505b60405250949350505050565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6200377a84848484600162003821565b6200331057604051635274afe760e01b81526001600160a01b03851660048201526024016200074a565b5f6002826003811115620037bc57620037bc620039d3565b620037c891906200420d565b60ff166001149050919050565b60405163095ea7b360e01b5f8181526001600160a01b038616600452602485905291602083604481808b5af1925060015f511483166200370f57838315161562003703573d5f823e3d81fd5b6040516323b872dd60e01b5f8181526001600160a01b038781166004528616602452604485905291602083606481808c5af1925060015f511483166200387f57838315161562003873573d5f823e3d81fd5b5f883b113d1516831692505b604052505f60605295945050505050565b610fec806200423283390190565b5f60208284031215620038af575f80fd5b5035919050565b5f8060408385031215620038c8575f80fd5b50508035926020909101359150565b5f60c08284031215620038e8575f80fd5b50919050565b5f8083601f840112620038ff575f80fd5b50813567ffffffffffffffff81111562003917575f80fd5b6020830191508360208285010111156200392f575f80fd5b9250929050565b5f805f805f80606087890312156200394c575f80fd5b863567ffffffffffffffff8082111562003964575f80fd5b620039728a838b01620038ee565b909850965060208901359150808211156200398b575f80fd5b620039998a838b01620038ee565b90965094506040890135915080821115620039b2575f80fd5b50620039c189828a01620038ee565b979a9699509497509295939492505050565b634e487b7160e01b5f52602160045260245ffd5b6004811062003a0457634e487b7160e01b5f52602160045260245ffd5b9052565b84516001600160a01b0316815260208086015161018083019162003a36908401826001600160a01b03169052565b5060408601516040830152606086015160608301526080860151608083015260a086015162003a7060a08401826001600160a01b03169052565b5060c086015160c083015260e086015160e083015261010080870151818401525062003aa1610120830186620039e7565b610140820193909352610160015292915050565b6001600160a01b03811681146200110a575f80fd5b8035620011308162003ab5565b5f6020828403121562003ae8575f80fd5b8135620007be8162003ab5565b5f6020828403121562003b06575f80fd5b813567ffffffffffffffff81111562003b1d575f80fd5b82016101208185031215620007be575f80fd5b5f805f6060848603121562003b43575f80fd5b505081359360208301359350604090920135919050565b5f806040838503121562003b6c575f80fd5b823562003b798162003ab5565b9150602083013562003b8b8162003ab5565b809150509250929050565b5f806040838503121562003ba8575f80fd5b82359150602083013562003b8b8162003ab5565b5f805f806060858703121562003bd0575f80fd5b8435935060208501359250604085013567ffffffffffffffff81111562003bf5575f80fd5b62003c0387828801620038ee565b95989497509550505050565b634e487b7160e01b5f52601160045260245ffd5b808202811582820484141762002892576200289262003c0f565b634e487b7160e01b5f52601260045260245ffd5b5f8262003c625762003c6262003c3d565b500490565b813562003c748162003ab5565b81546001600160a01b0319166001600160a01b03919091161781556020820135600182015560408201356002820155606082013560038201556080820135600482015560a09190910135600590910155565b8181038181111562002892576200289262003c0f565b5f6020828403121562003ced575f80fd5b5051919050565b5f6020828403121562003d05575f80fd5b8151620007be8162003ab5565b634e487b7160e01b5f52604160045260245ffd5b604051610120810167ffffffffffffffff8111828210171562003d4d5762003d4d62003d12565b60405290565b5f82601f83011262003d63575f80fd5b813567ffffffffffffffff8082111562003d815762003d8162003d12565b604051601f8301601f19908116603f0116810190828211818310171562003dac5762003dac62003d12565b8160405283815286602085880101111562003dc5575f80fd5b836020870160208301375f602085830101528094505050505092915050565b5f610120823603121562003df6575f80fd5b62003e0062003d26565b823567ffffffffffffffff8082111562003e18575f80fd5b62003e263683870162003d53565b8352602085013591508082111562003e3c575f80fd5b62003e4a3683870162003d53565b6020840152604085013591508082111562003e63575f80fd5b5062003e723682860162003d53565b6040830152506060830135606082015262003e906080840162003aca565b608082015260a083013560a082015260c083013560c082015260e083013560e082015261010080840135818301525080915050919050565b8082018082111562002892576200289262003c0f565b5f806040838503121562003ef0575f80fd5b505080516020909101519092909150565b5f6001820162003f155762003f1562003c0f565b5060010190565b5f81518084525f5b8181101562003f425760208185018101518683018201520162003f24565b505f602082860101526020601f19601f83011685010191505092915050565b60a081525f62003f7560a083018862003f1c565b828103602084015262003f89818862003f1c565b604084018790526001600160a01b03861660608501528381036080850152905062000aeb818562003f1c565b5f60018060a01b03808a1683528089166020840152508660408301528560608301528460808301528360a083015260e060c083015262003ff960e083018462003f1c565b9998505050505050505050565b805161ffff8116811462001130575f80fd5b5f805f805f805f60e0888a0312156200402f575f80fd5b87516200403c8162003ab5565b8097505060208801518060020b811462004054575f80fd5b9550620040646040890162004006565b9450620040746060890162004006565b9350620040846080890162004006565b925060a088015160ff811681146200409a575f80fd5b60c08901519092508015158114620040b0575f80fd5b8091505092959891949750929550565b6001600160a01b0386811682528515156020830152604082018590528316606082015260a0608082018190525f90620022139083018462003f1c565b81516001600160a01b03168152610160810160208301516200412960208401826001600160a01b03169052565b50604083015162004141604084018262ffffff169052565b50606083015162004157606084018260020b9052565b5060808301516200416d608084018260020b9052565b5060a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151620041b4828501826001600160a01b03169052565b505061014092830151919092015290565b5f805f8060808587031215620041d9575f80fd5b8451935060208501516001600160801b0381168114620041f7575f80fd5b6040860151606090960151949790965092505050565b5f60ff83168062004222576200422262003c3d565b8060ff8416069150509291505056fe60a060405234801562000010575f80fd5b5060405162000fec38038062000fec8339810160408190526200003391620001c1565b818585600362000044838262000300565b50600462000053828262000300565b5050506001600160a01b0381166200008457604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b6200008f81620000af565b5060808390526006620000a3828262000300565b505050505050620003cc565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b634e487b7160e01b5f52604160045260245ffd5b5f82601f83011262000124575f80fd5b81516001600160401b038082111562000141576200014162000100565b604051601f8301601f19908116603f011681019082821181831017156200016c576200016c62000100565b816040528381526020925086602085880101111562000189575f80fd5b5f91505b83821015620001ac57858201830151818301840152908201906200018d565b5f602085830101528094505050505092915050565b5f805f805f60a08688031215620001d6575f80fd5b85516001600160401b0380821115620001ed575f80fd5b620001fb89838a0162000114565b9650602088015191508082111562000211575f80fd5b6200021f89838a0162000114565b604089015160608a0151919750955091506001600160a01b038216821462000245575f80fd5b6080880151919350808211156200025a575f80fd5b50620002698882890162000114565b9150509295509295909350565b600181811c908216806200028b57607f821691505b602082108103620002aa57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f821115620002fb57805f5260205f20601f840160051c81016020851015620002d75750805b601f840160051c820191505b81811015620002f8575f8155600101620002e3565b50505b505050565b81516001600160401b038111156200031c576200031c62000100565b62000334816200032d845462000276565b84620002b0565b602080601f8311600181146200036a575f8415620003525750858301515b5f19600386901b1c1916600185901b178555620003c4565b5f85815260208120601f198616915b828110156200039a5788860151825594840194600190910190840162000379565b5085821015620003b857878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b608051610c00620003ec5f395f818161025801526104270152610c005ff3fe608060405234801561000f575f80fd5b506004361061011c575f3560e01c8063715018a6116100a9578063af35c6c71161006e578063af35c6c71461023e578063bef97c8714610246578063d5abeb0114610253578063dd62ed3e1461027a578063f2fde38b146102b2575f80fd5b8063715018a6146101ed57806379cc6790146101f55780638da5cb5b1461020857806395d89b4114610223578063a9059cbb1461022b575f80fd5b806323b872dd116100ef57806323b872dd1461017b578063313ce5671461018e57806340c10f191461019d57806342966c68146101b257806370a08231146101c5575f80fd5b806303ee438c1461012057806306fdde031461013e578063095ea7b31461014657806318160ddd14610169575b5f80fd5b6101286102c5565b6040516101359190610a43565b60405180910390f35b610128610351565b610159610154366004610aaa565b6103e1565b6040519015158152602001610135565b6002545b604051908152602001610135565b610159610189366004610ad2565b6103fa565b60405160128152602001610135565b6101b06101ab366004610aaa565b61041d565b005b6101b06101c0366004610b0b565b6104b0565b61016d6101d3366004610b22565b6001600160a01b03165f9081526020819052604090205490565b6101b06104c5565b6101b0610203366004610aaa565b6104d8565b6005546040516001600160a01b039091168152602001610135565b610128610530565b610159610239366004610aaa565b61053f565b6101b061054c565b6007546101599060ff1681565b61016d7f000000000000000000000000000000000000000000000000000000000000000081565b61016d610288366004610b42565b6001600160a01b039182165f90815260016020908152604080832093909416825291909152205490565b6101b06102c0366004610b22565b6105d0565b600680546102d290610b73565b80601f01602080910402602001604051908101604052809291908181526020018280546102fe90610b73565b80156103495780601f1061032057610100808354040283529160200191610349565b820191905f5260205f20905b81548152906001019060200180831161032c57829003601f168201915b505050505081565b60606003805461036090610b73565b80601f016020809104026020016040519081016040528092919081815260200182805461038c90610b73565b80156103d75780601f106103ae576101008083540402835291602001916103d7565b820191905f5260205f20905b8154815290600101906020018083116103ba57829003601f168201915b5050505050905090565b5f336103ee81858561060a565b60019150505b92915050565b5f3361040785828561061c565b610412858585610698565b506001949350505050565b6104256106f5565b7f00000000000000000000000000000000000000000000000000000000000000008161045060025490565b61045a9190610bab565b11156104a25760405162461bcd60e51b815260206004820152601260248201527145786365656473206d617820737570706c7960701b60448201526064015b60405180910390fd5b6104ac8282610722565b5050565b6104b86106f5565b6104c23382610756565b50565b6104cd6106f5565b6104d65f61078a565b565b6104e06106f5565b60075460ff16156105265760405162461bcd60e51b815260206004820152601060248201526f151c98591a5b99c81b5a59dc985d195960821b6044820152606401610499565b6104ac8282610756565b60606004805461036090610b73565b5f336103ee818585610698565b6105546106f5565b60075460ff16156105995760405162461bcd60e51b815260206004820152600f60248201526e105b1c9958591e48195b98589b1959608a1b6044820152606401610499565b6007805460ff191660011790556040517feadb24812ab3c9a55c774958184293ebdb6c7f6a2dbab11f397d80c86feb65d3905f90a1565b6105d86106f5565b6001600160a01b03811661060157604051631e4fbdf760e01b81525f6004820152602401610499565b6104c28161078a565b61061783838360016107db565b505050565b6001600160a01b038381165f908152600160209081526040808320938616835292905220545f19811015610692578181101561068457604051637dc7a0d960e11b81526001600160a01b03841660048201526024810182905260448101839052606401610499565b61069284848484035f6107db565b50505050565b6001600160a01b0383166106c157604051634b637e8f60e11b81525f6004820152602401610499565b6001600160a01b0382166106ea5760405163ec442f0560e01b81525f6004820152602401610499565b6106178383836108ad565b6005546001600160a01b031633146104d65760405163118cdaa760e01b8152336004820152602401610499565b6001600160a01b03821661074b5760405163ec442f0560e01b81525f6004820152602401610499565b6104ac5f83836108ad565b6001600160a01b03821661077f57604051634b637e8f60e11b81525f6004820152602401610499565b6104ac825f836108ad565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b6001600160a01b0384166108045760405163e602df0560e01b81525f6004820152602401610499565b6001600160a01b03831661082d57604051634a1406b160e11b81525f6004820152602401610499565b6001600160a01b038085165f908152600160209081526040808320938716835292905220829055801561069257826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161089f91815260200190565b60405180910390a350505050565b6001600160a01b038316158015906108cd57506001600160a01b03821615155b156109175760075460ff166109175760405162461bcd60e51b815260206004820152601060248201526f151c985b9cd9995c9cc81b1bd8dad95960821b6044820152606401610499565b6106178383836001600160a01b038316610947578060025f82825461093c9190610bab565b909155506109b79050565b6001600160a01b0383165f90815260208190526040902054818110156109995760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610499565b6001600160a01b0384165f9081526020819052604090209082900390555b6001600160a01b0382166109d3576002805482900390556109f1565b6001600160a01b0382165f9081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610a3691815260200190565b60405180910390a3505050565b5f602080835283518060208501525f5b81811015610a6f57858101830151858201604001528201610a53565b505f604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610aa5575f80fd5b919050565b5f8060408385031215610abb575f80fd5b610ac483610a8f565b946020939093013593505050565b5f805f60608486031215610ae4575f80fd5b610aed84610a8f565b9250610afb60208501610a8f565b9150604084013590509250925092565b5f60208284031215610b1b575f80fd5b5035919050565b5f60208284031215610b32575f80fd5b610b3b82610a8f565b9392505050565b5f8060408385031215610b53575f80fd5b610b5c83610a8f565b9150610b6a60208401610a8f565b90509250929050565b600181811c90821680610b8757607f821691505b602082108103610ba557634e487b7160e01b5f52602260045260245ffd5b50919050565b808201808211156103f457634e487b7160e01b5f52601160045260245ffdfea264697066735822122090ddc87471e0ddf973a593ecb42949413d62fd9a4d0b7b7eed4e63589596f38964736f6c634300081800339b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00a2646970667358221220e7a56a46e75eaa6bce527b76db07ade55795cd1207869ffef0a52f3a630f277c64736f6c63430008180033",
    "sourceMap": "471:33644:39:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;31381:261;;;;;;:::i;:::-;;:::i;:::-;;33428:291;;;;;;:::i;:::-;;:::i;:::-;;;345:25:42;;;333:2;318:18;33428:291:39;;;;;;;;33725:388;;;;;;:::i;:::-;;:::i;:::-;;;;808:25:42;;;864:2;849:18;;842:34;;;;781:18;33725:388:39;634:248:42;2845:27:39;;;;;;5220:35;;;;;;31781:463;;;;;;:::i;:::-;;:::i;33262:65::-;;;:::i;8689:718::-;;;;;;:::i;:::-;;:::i;5806:32::-;;;;;;;;;;;;;;;-1:-1:-1;;;;;5806:32:39;;;;;;;;;;;;-1:-1:-1;;;;;2874:32:42;;;2856:51;;2938:2;2923:18;;2916:34;;;;2966:18;;;2959:34;;;;3024:2;3009:18;;3002:34;3067:3;3052:19;;3045:35;2894:3;3096:19;;3089:35;2843:3;2828:19;5806:32:39;2569:561:42;30978:214:39;;;;;;:::i;:::-;;:::i;20410:2000::-;;;;;;:::i;:::-;;:::i;3005:49::-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;3300:14:42;;3293:22;3275:41;;3263:2;3248:18;3005:49:39;3135:187:42;5425:45:39;;;;;;:::i;:::-;;;;;;;;;;;;;;2878:47;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2878:47:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;4317:44::-;;;;;;:::i;:::-;;;;;;;;;;;;;;1726:84:31;1796:7;;-1:-1:-1;;;1796:7:31;;;;1726:84;;3077:35:39;;;;;-1:-1:-1;;;;;3077:35:39;;;;;;-1:-1:-1;;;;;5564:32:42;;;5546:51;;5534:2;5519:18;3077:35:39;5400:203:42;8395:141:39;;;;;;:::i;:::-;;:::i;16537:1456::-;;;;;;:::i;:::-;;:::i;2293:101:19:-;;;:::i;3540:48:39:-;;3584:4;3540:48;;4970:60;;;;;2244:229:20;;;:::i;5476:41:39:-;;;;;;:::i;:::-;;;;;;;;;;;;-1:-1:-1;;;;;5476:41:39;;;33195:61;;;:::i;1638:85:19:-;1684:7;1710:6;-1:-1:-1;;;;;1710:6:19;1638:85;;12768:1272:39;;;;;;:::i;:::-;;:::i;27022:1309::-;;;;;;:::i;:::-;;:::i;32469:424::-;;;;;;:::i;:::-;;:::i;3118:28::-;;;;;;3302:42;;3340:4;3302:42;;18392:934;;;;;;:::i;:::-;;:::i;4512:39::-;;4546:5;4512:39;;;;;7253:8:42;7241:21;;;7223:40;;7211:2;7196:18;4512:39:39;7079:190:42;1232:99:20;1311:13;;-1:-1:-1;;;;;1311:13:20;1232:99;;30513:259:39;;;;;;:::i;:::-;;:::i;2931:68::-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;1649:178:20;;;;;;:::i;:::-;;:::i;26385:470:39:-;;;;;;:::i;:::-;;:::i;5163:51::-;;5210:4;5163:51;;31381:261;1531:13:19;:11;:13::i;:::-;5210:4:39::1;31469:8;:32;;31461:59;;;::::0;-1:-1:-1;;;31461:59:39;;8345:2:42;31461:59:39::1;::::0;::::1;8327:21:42::0;8384:2;8364:18;;;8357:30;-1:-1:-1;;;8403:18:42;;;8396:44;8457:18;;31461:59:39::1;;;;;;;;;31563:20;::::0;31535:59:::1;::::0;;808:25:42;;;864:2;849:18;;842:34;;;31535:59:39::1;::::0;781:18:42;31535:59:39::1;;;;;;;31604:20;:31:::0;31381:261::o;33428:291::-;33492:7;33541:19;;;:8;:19;;;;;;;33613:17;;;;33644:24;;;;33682:20;;;;33541:19;;33577:135;;:22;:135::i;:::-;33570:142;33428:291;-1:-1:-1;;;33428:291:39:o;33725:388::-;33803:12;33870:19;;;:8;:19;;;;;;;33949:17;;;;33988:24;;;;34014:20;;;;33803:12;;33906:138;;33949:17;33968:6;;33988:24;33906:29;:138::i;:::-;34068:29;;;;33899:145;;-1:-1:-1;34101:5:39;;34061:36;;33899:145;34061:36;:::i;:::-;34060:46;;;;:::i;:::-;34054:52;;33830:283;33725:388;;;;;:::o;31781:463::-;1531:13:19;:11;:13::i;:::-;31904:1:39::1;31873:19;;::::0;::::1;:6:::0;:19:::1;:::i;:::-;-1:-1:-1::0;;;;;31873:33:39::1;::::0;31865:64:::1;;;::::0;-1:-1:-1;;;31865:64:39;;9250:2:42;31865:64:39::1;::::0;::::1;9232:21:42::0;9289:2;9269:18;;;9262:30;-1:-1:-1;;;9308:18:42;;;9301:48;9366:18;;31865:64:39::1;9048:342:42::0;31865:64:39::1;31939:102;31954:6;:16;;;31972:6;:16;;;31990:6;:12;;;32004:6;:15;;;32021:6;:19;;;31939:14;:102::i;:::-;32066:6:::0;32051:12:::1;:21;32066:6:::0;32051:12;:21:::1;:::i;:::-;-1:-1:-1::0;32087:150:39::1;::::0;-1:-1:-1;32120:19:39::1;;::::0;::::1;:6:::0;:19:::1;:::i;:::-;32159:16;32087:150:::0;;-1:-1:-1;;;;;2874:32:42;;;2856:51;;32141:16:39::1;::::0;;::::1;;2923:18:42::0;;;2916:34;32159:16:39;;::::1;;2966:18:42::0;;;2959:34;32177:12:39::1;::::0;;::::1;;3009:18:42::0;;;3002:34;32191:15:39::1;::::0;;::::1;;3052:19:42::0;;;3045:35;32208:19:39::1;::::0;;::::1;;3096::42::0;;;3089:35;2843:3;2828:19;32087:150:39::1;;;;;;;31781:463:::0;:::o;33262:65::-;1531:13:19;:11;:13::i;:::-;33310:10:39::1;:8;:10::i;:::-;33262:65::o:0;8689:718::-;8836:17;1350:19:31;:17;:19::i;:::-;8869:36:39::1;::::0;;::::1;::::0;::::1;::::0;;8893:12:::1;8869:36:::0;-1:-1:-1;;;;;8869:36:39::1;::::0;;;;;::::1;::::0;::::1;::::0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8915:57:::1;;;::::0;-1:-1:-1;;;8915:57:39;;10246:2:42;8915:57:39::1;::::0;::::1;10228:21:42::0;10285:2;10265:18;;;10258:30;-1:-1:-1;;;10304:18:42;;;10297:46;10360:18;;8915:57:39::1;10044:340:42::0;8915:57:39::1;9017:373;::::0;;;::::1;;::::0;::::1;::::0;;::::1;;::::0;;;;;;;::::1;::::0;::::1;::::0;;;8989:411:::1;::::0;9017:373;;;9055:4;;;;;;9017:373;;9055:4;;;;9017:373;::::1;;::::0;::::1;::::0;;;;-1:-1:-1;;;9017:373:39;;;-1:-1:-1;9017:373:39::1;::::0;;::::1;;::::0;::::1;::::0;;::::1;::::0;::::1;::::0;;;;;;;;;;;;::::1;::::0;;9085:6;;;;;;9017:373;::::1;9085:6:::0;;;;9017:373;::::1;;::::0;::::1;::::0;;;;-1:-1:-1;;;9017:373:39;;;-1:-1:-1;9017:373:39::1;::::0;;::::1;;::::0;::::1;::::0;;::::1;::::0;::::1;::::0;;;;;;;;;;;;::::1;::::0;;9122:11;;;;;;9017:373;::::1;9122:11:::0;;;;9017:373;::::1;;::::0;::::1;::::0;;;;-1:-1:-1;;;9017:373:39;;;-1:-1:-1;9017:373:39::1;9162:11:::0;;::::1;::::0;9017:373;;::::1;::::0;9205:14;;-1:-1:-1;;;;;9017:373:39::1;::::0;;;;;;;;9248:11;::::1;::::0;9017:373;;;;;;;;9284:7;::::1;::::0;9017:373;;;;;;;;9319:10;::::1;::::0;9017:373;;;;;;;;9361:14;::::1;::::0;9017:373;;;;;8989:14:::1;:411::i;:::-;8982:418:::0;8689:718;-1:-1:-1;;;;;;;;8689:718:39:o;30978:214::-;1531:13:19;:11;:13::i;:::-;3340:4:39::1;31057:6;:21;;31049:46;;;::::0;-1:-1:-1;;;31049:46:39;;10591:2:42;31049:46:39::1;::::0;::::1;10573:21:42::0;10630:2;10610:18;;;10603:30;-1:-1:-1;;;10649:18:42;;;10642:42;10701:18;;31049:46:39::1;10389:336:42::0;31049:46:39::1;31131:13;::::0;31110:43:::1;::::0;;808:25:42;;;864:2;849:18;;842:34;;;31110:43:39::1;::::0;781:18:42;31110:43:39::1;;;;;;;31163:13;:22:::0;30978:214::o;20410:2000::-;3023:21:32;:19;:21::i;:::-;20478:27:39::1;20508:19:::0;;;:8:::1;:19;::::0;;;;20562:22:::1;20545:13;::::0;::::1;::::0;::::1;;:39;::::0;::::1;;;;;;:::i;:::-;;20537:73;;;::::0;-1:-1:-1;;;20537:73:39;;10932:2:42;20537:73:39::1;::::0;::::1;10914:21:42::0;10971:2;10951:18;;;10944:30;-1:-1:-1;;;10990:18:42;;;10983:51;11051:18;;20537:73:39::1;10730:345:42::0;20537:73:39::1;20621:21;20645:24;20661:7;20645:15;:24::i;:::-;20621:48;;20679:13;20695:89;20718:7;:17;;;20737:7;:14;;:24;;;20763:7;:14;;:20;;;20695:22;:89::i;:::-;20679:105:::0;-1:-1:-1;20943:19:39::1;20965:53;20977:13:::0;1118:25:38::1;991:4;::::0;1118:25:::1;:::i;:::-;21012:5:39;20965:11;:53::i;:::-;-1:-1:-1::0;;;;;;;;;;;;;;;;;;;;;;;;;;;21067:20:39;;-1:-1:-1;;;;;21067:20:39;;::::1;21057:30:::0;;;21067:20;21109:27;::::1;::::0;;;::::1;-1:-1:-1::0;;;;21097:39:39;;;-1:-1:-1;;;;;;21146:55:39;21252:13:::1;::::0;::::1;:37:::0;;-1:-1:-1;;21252:37:39::1;21268:21;21252:37;::::0;;21299:29;;:9:::1;:29:::0;;;;;:46;;20943:75;;-1:-1:-1;;;21332:13:39;;-1:-1:-1;21299:46:39::1;::::0;21332:13;;21299:46:::1;:::i;:::-;::::0;;;-1:-1:-1;;21373:9:39::1;::::0;::::1;::::0;:34:::1;::::0;-1:-1:-1;;;21373:34:39;;21401:4:::1;21373:34;::::0;::::1;5546:51:42::0;21410:13:39;;-1:-1:-1;;;;;21373:19:39::1;::::0;::::1;::::0;5519:18:42;;21373:34:39::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:50;;;;:::i;:::-;21356:1;:14;;:67;;;::::0;::::1;21434:1;:7;;;-1:-1:-1::0;;;;;21434:23:39::1;;:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;21490:1;21474:13;:17;:36;;;;;21509:1;21495:11;:15;21474:36;21470:442;;;21526:7:::0;;:40:::1;::::0;-1:-1:-1;;;21526:40:39;;21547:4:::1;21526:40;::::0;::::1;11576:51:42::0;11643:18;;;11636:34;;;-1:-1:-1;;;;;21526:12:39;;::::1;::::0;::::1;::::0;11549:18:42;;21526:40:39::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;21600:37;21614:5;21621:1;:15;;;21600:13;:37::i;:::-;-1:-1:-1::0;;;;;21580:57:39::1;:17;::::0;::::1;:57:::0;21652:10:::1;::::0;21678::::1;21580:1:::0;21678:7:::1;:10::i;:::-;21780:17;::::0;::::1;::::0;21711:87:::1;::::0;-1:-1:-1;;;21711:87:39;;-1:-1:-1;;;;;11966:15:42;;;21711:87:39::1;::::0;::::1;11948:34:42::0;12018:15;;;11998:18;;;11991:43;4546:5:39::1;12050:18:42::0;;;12043:49;12128:15;;;12108:18;;;12101:43;21651:37:39;;-1:-1:-1;21651:37:39;;-1:-1:-1;21711:15:39::1;:50;::::0;::::1;::::0;11882:19:42;;21711:87:39::1;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1::0;;;;;21702:96:39::1;:6;::::0;::::1;:96:::0;21812:48:::1;21702:1:::0;21833:11;21846:13;21812:17:::1;:48::i;:::-;21874:27;21888:9;21899:1;21874:13;:27::i;:::-;21512:400;;21470:442;22026:7:::0;;:32:::1;::::0;-1:-1:-1;;;22026:32:39;;22052:4:::1;22026:32;::::0;::::1;5546:51:42::0;22005:18:39::1;::::0;-1:-1:-1;;;;;22026:17:39::1;::::0;::::1;::::0;5519:18:42;;22026:32:39::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;22005:53:::0;-1:-1:-1;22072:14:39;;22068:44:::1;;22088:7:::0;;:24:::1;::::0;-1:-1:-1;;;22088:24:39;;::::1;::::0;::::1;345:25:42::0;;;-1:-1:-1;;;;;22088:12:39;;::::1;::::0;::::1;::::0;318:18:42;;22088:24:39::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;22068:44;22181:14;::::0;::::1;::::0;22144:9:::1;::::0;::::1;::::0;:34:::1;::::0;-1:-1:-1;;;22144:34:39;;22172:4:::1;22144:34;::::0;::::1;5546:51:42::0;22122:19:39::1;::::0;22181:14;-1:-1:-1;;;;;22144:19:39::1;::::0;::::1;::::0;5519:18:42;;22144:34:39::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:51;;;;:::i;:::-;22122:73:::0;-1:-1:-1;22209:15:39;;22205:80:::1;;22249:22;::::0;::::1;::::0;22226:9:::1;::::0;::::1;::::0;:59:::1;::::0;-1:-1:-1;;;;;22226:22:39;;::::1;::::0;22249::::1;22273:11:::0;22226:22:::1;:59::i;:::-;22376:1;:7;;;-1:-1:-1::0;;;;;22376:25:39::1;;:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;20468:1942;;;;;;;3065:20:32::0;2365:1;-1:-1:-1;;;;;;;;;;;3972:62:32;3749:292;3065:20;20410:2000:39;:::o;8395:141::-;8476:17;1350:19:31;:17;:19::i;:::-;8512:17:39::1;;8527:1:::0;8512:17:::1;:::i;:::-;:14;:17::i;:::-;8505:24;;1379:1:31;8395:141:39::0;;;:::o;16537:1456::-;3023:21:32;:19;:21::i;:::-;16645:27:39::1;16675:19:::0;;;:8:::1;:19;::::0;;;;16729::::1;16712:13;::::0;::::1;::::0;::::1;;:36;::::0;::::1;;;;;;:::i;:::-;;16704:67;;;::::0;-1:-1:-1;;;16704:67:39;;14995:2:42;16704:67:39::1;::::0;::::1;14977:21:42::0;15034:2;15014:18;;;15007:30;-1:-1:-1;;;15053:18:42;;;15046:48;15111:18;;16704:67:39::1;14793:342:42::0;16704:67:39::1;16798:1;16789:6;:10;16781:34;;;::::0;-1:-1:-1;;;16781:34:39;;15342:2:42;16781:34:39::1;::::0;::::1;15324:21:42::0;15381:2;15361:18;;;15354:30;-1:-1:-1;;;15400:18:42;;;15393:41;15451:18;;16781:34:39::1;15140:335:42::0;16781:34:39::1;16956:24;::::0;;;:13:::1;:24;::::0;;;;;;;16981:10:::1;16956:36:::0;;;;;;;;:46;-1:-1:-1;16956:46:39::1;16948:74;;;::::0;-1:-1:-1;;;16948:74:39;;15682:2:42;16948:74:39::1;::::0;::::1;15664:21:42::0;15721:2;15701:18;;;15694:30;-1:-1:-1;;;15740:18:42;;;15733:45;15795:18;;16948:74:39::1;15480:339:42::0;16948:74:39::1;17033:16;17052:131;17100:7;:17;;;17119:6;17127:7;:14;;:24;;;17153:7;:14;;:20;;;17052:34;:131::i;:::-;17033:150;;17193:19;17260:5;17227:7;:14;;:29;;;17216:8;:40;;;;:::i;:::-;17215:50;;;;:::i;:::-;17193:72:::0;-1:-1:-1;17309:11:39;17283:22:::1;17193:72:::0;17283:8;:22:::1;:::i;:::-;:37;;17275:67;;;::::0;-1:-1:-1;;;17275:67:39;;16026:2:42;17275:67:39::1;::::0;::::1;16008:21:42::0;16065:2;16045:18;;;16038:30;-1:-1:-1;;;16084:18:42;;;16077:47;16141:18;;17275:67:39::1;15824:341:42::0;17275:67:39::1;17410:27;::::0;::::1;::::0;17447:19:::1;::::0;::::1;:31:::0;;-1:-1:-1;;;;;17410:27:39;;::::1;::::0;17470:8;;17447:19;17393:14:::1;::::0;17447:31:::1;::::0;17470:8;;17447:31:::1;:::i;:::-;;;;;;;;17509:6;17488:7;:17;;;:27;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;;17525:24:39::1;::::0;;;:13:::1;:24;::::0;;;;;;;17550:10:::1;17525:36:::0;;;;;;;:46;;17565:6;;17525:24;:46:::1;::::0;17565:6;;17525:46:::1;:::i;:::-;::::0;;;-1:-1:-1;;;;;;;17581:27:39;::::1;;::::0;;;:9:::1;:27;::::0;;;;:39;;17612:8;;17581:27;:39:::1;::::0;17612:8;;17581:39:::1;:::i;:::-;::::0;;;-1:-1:-1;;17631:20:39;;:49:::1;::::0;-1:-1:-1;;;17631:49:39;;17661:10:::1;17631:49;::::0;::::1;11576:51:42::0;11643:18;;;11636:34;;;-1:-1:-1;;;;;17631:20:39;;::::1;::::0;:29:::1;::::0;11549:18:42;;17631:49:39::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;17708:1;17694:11;:15;17690:76;;;17732:20;::::0;17711:55:::1;::::0;-1:-1:-1;;;;;17711:20:39;;::::1;::::0;17732::::1;17754:11:::0;17711:20:::1;:55::i;:::-;17776:56;17797:10;17809:22;17820:11:::0;17809:8;:22:::1;:::i;:::-;-1:-1:-1::0;;;;;17776:20:39;::::1;::::0;:56;:20:::1;:56::i;:::-;17938:19;::::0;::::1;::::0;17959:17:::1;::::0;::::1;::::0;17848:138:::1;::::0;;16429:25:42;;;16485:2;16470:18;;16463:34;;;16513:18;;;16506:34;;;16571:2;16556:18;;16549:34;;;;16614:3;16599:19;;16592:35;17883:10:39::1;::::0;17872:9;;17848:138:::1;::::0;16416:3:42;16401:19;17848:138:39::1;;;;;;;16635:1358;;;;3065:20:32::0;2365:1;-1:-1:-1;;;;;;;;;;;3972:62:32;3749:292;3065:20;16537:1456:39;;;:::o;2293:101:19:-;1531:13;:11;:13::i;:::-;2357:30:::1;2384:1;2357:18;:30::i;2244:229:20:-:0;1311:13;;735:10:29;;-1:-1:-1;;;;;1311:13:20;2339:24;;2335:96;;2386:34;;-1:-1:-1;;;2386:34:20;;-1:-1:-1;;;;;5564:32:42;;2386:34:20;;;5546:51:42;5519:18;;2386:34:20;5400:203:42;2335:96:20;2440:26;2459:6;2440:18;:26::i;33195:61:39:-;1531:13:19;:11;:13::i;:::-;33241:8:39::1;:6;:8::i;12768:1272::-:0;3023:21:32;:19;:21::i;:::-;1350:19:31::1;:17;:19::i;:::-;12885:27:39::2;12915:19:::0;;;:8:::2;:19;::::0;;;;12969::::2;12952:13;::::0;::::2;::::0;::::2;;:36;::::0;::::2;;;;;;:::i;:::-;;12944:67;;;::::0;-1:-1:-1;;;12944:67:39;;14995:2:42;12944:67:39::2;::::0;::::2;14977:21:42::0;15034:2;15014:18;;;15007:30;-1:-1:-1;;;15053:18:42;;;15046:48;15111:18;;12944:67:39::2;14793:342:42::0;12944:67:39::2;13038:1;13029:6;:10;13021:34;;;::::0;-1:-1:-1;;;13021:34:39;;15342:2:42;13021:34:39::2;::::0;::::2;15324:21:42::0;15381:2;15361:18;;;15354:30;-1:-1:-1;;;15400:18:42;;;15393:41;15451:18;;13021:34:39::2;15140:335:42::0;13021:34:39::2;13066:12;13088:13:::0;13138:22:::2;13144:7;13153:6;13138:5;:22::i;:::-;13200:29;::::0;::::2;::::0;13111:49;;-1:-1:-1;13111:49:39;;-1:-1:-1;13111:49:39;-1:-1:-1;13170:19:39::2;::::0;13233:5:::2;::::0;13193:36:::2;::::0;13111:49;13193:36:::2;:::i;:::-;13192:46;;;;:::i;:::-;13170:68:::0;-1:-1:-1;13278:7:39;13256:18:::2;13170:68:::0;13256:4;:18:::2;:::i;:::-;:29;;13248:59;;;::::0;-1:-1:-1;;;13248:59:39;;16026:2:42;13248:59:39::2;::::0;::::2;16008:21:42::0;16065:2;16045:18;;;16038:30;-1:-1:-1;;;16084:18:42;;;16077:47;16141:18;;13248:59:39::2;15824:341:42::0;13248:59:39::2;13381:4;13358:7;:19;;;:27;;;;;;;:::i;:::-;;;;;;;;13416:6;13395:7;:17;;;:27;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;;13432:24:39::2;::::0;;;:13:::2;:24;::::0;;;;;;;13457:10:::2;13432:36:::0;;;;;;;:46;;13472:6;;13432:24;:46:::2;::::0;13472:6;;13432:46:::2;:::i;:::-;::::0;;;-1:-1:-1;;13506:27:39::2;::::0;::::2;::::0;-1:-1:-1;;;;;13506:27:39::2;13488:47;::::0;;;:9:::2;:47;::::0;;;;:55;;13539:4;;13488:47;:55:::2;::::0;13539:4;;13488:55:::2;:::i;:::-;::::0;;;-1:-1:-1;;13553:77:39;::::2;;;13581:13;::::0;::::2;:38:::0;;-1:-1:-1;;13581:38:39::2;13597:22;13581:38;::::0;;13553:77:::2;13656:27;::::0;::::2;::::0;13640:63:::2;::::0;-1:-1:-1;;;;;13656:27:39::2;13685:4:::0;13691:11;13640:15:::2;:63::i;:::-;13713:20:::0;;:45:::2;::::0;-1:-1:-1;;;13713:45:39;;13739:10:::2;13713:45;::::0;::::2;11576:51:42::0;11643:18;;;11636:34;;;-1:-1:-1;;;;;13713:20:39;;::::2;::::0;:25:::2;::::0;11549:18:42;;13713:45:39::2;;;;;;;;;;;;;;;;;::::0;::::2;;;;;;;;;;;;::::0;::::2;;;;;-1:-1:-1::0;;;;13865:19:39::2;::::0;::::2;::::0;13886:17:::2;::::0;::::2;::::0;13774:139:::2;::::0;;16429:25:42;;;16485:2;16470:18;;16463:34;;;16513:18;;;16506:34;;;16571:2;16556:18;;16549:34;;;;16614:3;16599:19;;16592:35;13814:10:39::2;::::0;13803:9;;13774:139:::2;::::0;16416:3:42;16401:19;13774:139:39::2;;;;;;;13927:8;13923:111;;;13973:9;13956:67;13984:7;:19;;;14005:7;:17;;;13956:67;;;;;;808:25:42::0;;;864:2;849:18;;842:34;796:2;781:18;;634:248;13956:67:39::2;;;;;;;;13923:111;12875:1165;;;;3065:20:32::0;2365:1;-1:-1:-1;;;;;;;;;;;3972:62:32;3749:292;27022:1309:39;27093:17;27112:19;3023:21:32;:19;:21::i;:::-;27143:27:39::1;27173:19:::0;;;:8:::1;:19;::::0;;;;;;;;27210:13:::1;::::0;::::1;::::0;::::1;;:38;::::0;::::1;;;;;;:::i;:::-;;:68;;;;-1:-1:-1::0;27252:21:39::1;::::0;;;:10:::1;:21;::::0;;;;;:26;::::1;27210:68;27202:92;;;::::0;-1:-1:-1;;;27202:92:39;;16970:2:42;27202:92:39::1;::::0;::::1;16952:21:42::0;17009:2;16989:18;;;16982:30;-1:-1:-1;;;17028:18:42;;;17021:41;17079:18;;27202:92:39::1;16768:335:42::0;27202:92:39::1;27369:241;::::0;;::::1;::::0;::::1;::::0;;-1:-1:-1;27438:21:39;;;:10:::1;:21;::::0;;;;;;;27369:241;;27496:4:::1;27369:241:::0;;::::1;::::0;;;-1:-1:-1;;;;;27369:241:39;;;;;;;;;;;;27332:288;;-1:-1:-1;;;27332:288:39;;17337:13:42;;27332:288:39::1;::::0;::::1;17319:32:42::0;17393:24;;-1:-1:-1;;;;;17389:50:42;;;17367:20;;;17360:80;17469:24;;17584:21;;17562:20;;;17555:51;17648:24;;17644:33;;;17622:20;;;17615:63;-1:-1:-1;;;27332:15:39::1;:23:::0;;::::1;::::0;::::1;::::0;17291:19:42;;27332:288:39::1;::::0;::::1;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;27691:27;::::0;::::1;::::0;27659:20;;27305:315;;-1:-1:-1;27305:315:39;;-1:-1:-1;;;;;;27691:27:39;;::::1;27659:20:::0;::::1;27651:68;::::0;27756:35:::1;;27784:2;27788;27756:35;;;27773:2;27777;27756:35;27839:28;::::0;::::1;::::0;27729:62;;-1:-1:-1;27729:62:39;-1:-1:-1;27802:21:39::1;::::0;27871:5:::1;::::0;27827:40:::1;::::0;27729:62;27827:40:::1;:::i;:::-;27826:50;;;;:::i;:::-;27802:74;;27886:23;27959:5;27927:7;:14;;:28;;;27913:11;:42;;;;:::i;:::-;27912:52;;;;:::i;:::-;27997:20:::0;;28021:22:::1;::::0;::::1;::::0;27886:78;;-1:-1:-1;27974:96:39::1;::::0;-1:-1:-1;;;;;27997:20:39;;::::1;::::0;28021:22:::1;28045:13:::0;28060:9;27974:7:::1;:96::i;:::-;28088:27;::::0;::::1;::::0;28117:22:::1;::::0;::::1;::::0;28080:90:::1;::::0;-1:-1:-1;;;;;28088:27:39;;::::1;::::0;28117:22:::1;28141:15:::0;28158:11;28080:7:::1;:90::i;:::-;28215:9:::0;28186:138:::1;28226:25;28238:13:::0;28226:9;:25:::1;:::i;:::-;28253:29;28267:15:::0;28253:11;:29:::1;:::i;:::-;28186:138;::::0;;18170:25:42;;;18226:2;18211:18;;18204:34;;;;18254:18;;18247:34;;;18312:2;18297:18;;18290:34;;;18157:3;18142:19;28186:138:39::1;;;;;;;27133:1198;;;;;;3065:20:32::0;2365:1;-1:-1:-1;;;;;;;;;;;3972:62:32;3749:292;3065:20;27022:1309:39;;;:::o;32469:424::-;3023:21:32;:19;:21::i;:::-;1531:13:19::1;:11;:13::i;:::-;-1:-1:-1::0;;;;;32560:16:39;::::2;32552:43;;;::::0;-1:-1:-1;;;32552:43:39;;18537:2:42;32552:43:39::2;::::0;::::2;18519:21:42::0;18576:2;18556:18;;;18549:30;-1:-1:-1;;;18595:18:42;;;18588:44;18649:18;;32552:43:39::2;18335:338:42::0;32552:43:39::2;32623:30;::::0;-1:-1:-1;;;32623:30:39;;32647:4:::2;32623:30;::::0;::::2;5546:51:42::0;32605:15:39::2;::::0;-1:-1:-1;;;;;32623:15:39;::::2;::::0;::::2;::::0;5519:18:42;;32623:30:39::2;;;;;;;;;;;;;;;;;::::0;::::2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1::0;;;;;32678:25:39;::::2;32663:12;32678:25:::0;;;:9:::2;:25;::::0;;;;;32605:48;;-1:-1:-1;32721:14:39;;::::2;32713:43;;;::::0;-1:-1:-1;;;32713:43:39;;18880:2:42;32713:43:39::2;::::0;::::2;18862:21:42::0;18919:2;18899:18;;;18892:30;-1:-1:-1;;;18938:18:42;;;18931:46;18994:18;;32713:43:39::2;18678:340:42::0;32713:43:39::2;32767:14;32784;32794:4:::0;32784:7;:14:::2;:::i;:::-;32767:31:::0;-1:-1:-1;32808:30:39::2;-1:-1:-1::0;;;;;32808:18:39;::::2;32827:2:::0;32767:31;32808:18:::2;:30::i;:::-;32875:2;-1:-1:-1::0;;;;;32853:33:39::2;32867:5;-1:-1:-1::0;;;;;32853:33:39::2;;32879:6;32853:33;;;;345:25:42::0;;333:2;318:18;;199:177;32853:33:39::2;;;;;;;;32542:351;;;3065:20:32::0;2365:1;-1:-1:-1;;;;;;;;;;;3972:62:32;3749:292;3065:20;32469:424:39;;:::o;18392:934::-;3023:21:32;:19;:21::i;:::-;18469:27:39::1;18499:19:::0;;;:8:::1;:19;::::0;;;;18550:22:::1;::::0;::::1;::::0;-1:-1:-1;;;;;18550:22:39::1;18536:10;:36;18528:60;;;::::0;-1:-1:-1;;;18528:60:39;;19225:2:42;18528:60:39::1;::::0;::::1;19207:21:42::0;19264:2;19244:18;;;19237:30;-1:-1:-1;;;19283:18:42;;;19276:41;19334:18;;18528:60:39::1;19023:335:42::0;18528:60:39::1;18636:22;18619:13;::::0;::::1;::::0;::::1;;:39;::::0;::::1;;;;;;:::i;:::-;;:81;;;-1:-1:-1::0;18679:21:39::1;18662:13;::::0;::::1;::::0;::::1;;:38;::::0;::::1;;;;;;:::i;:::-;;18619:81;18598:149;;;::::0;-1:-1:-1;;;18598:149:39;;10932:2:42;18598:149:39::1;::::0;::::1;10914:21:42::0;10971:2;10951:18;;;10944:30;-1:-1:-1;;;10990:18:42;;;10983:51;11051:18;;18598:149:39::1;10730:345:42::0;18598:149:39::1;18766:28;::::0;;;:17:::1;:28;::::0;;;;;::::1;;18765:29;18757:59;;;::::0;-1:-1:-1;;;18757:59:39;;19565:2:42;18757:59:39::1;::::0;::::1;19547:21:42::0;19604:2;19584:18;;;19577:30;-1:-1:-1;;;19623:18:42;;;19616:47;19680:18;;18757:59:39::1;19363:341:42::0;18757:59:39::1;18894:14;18933:24;18949:7;18933:15;:24::i;:::-;18911:7;:19;;;:46;;;;:::i;:::-;18894:63;;18984:1;18975:6;:10;18967:42;;;::::0;-1:-1:-1;;;18967:42:39;;19911:2:42;18967:42:39::1;::::0;::::1;19893:21:42::0;19950:2;19930:18;;;19923:30;-1:-1:-1;;;19969:18:42;;;19962:49;20028:18;;18967:42:39::1;19709:343:42::0;18967:42:39::1;19059:28;::::0;;;:17:::1;:28;::::0;;;;;;;:35;;-1:-1:-1;;19059:35:39::1;19090:4;19059:35:::0;;::::1;::::0;;;19122:27;::::1;::::0;-1:-1:-1;;;;;19122:27:39::1;19104:47:::0;;:9:::1;:47:::0;;;;;:57;;19155:6;;19059:28;19104:57:::1;::::0;19155:6;;19104:57:::1;:::i;:::-;::::0;;;-1:-1:-1;;19212:22:39::1;::::0;::::1;::::0;;19171:27;::::1;::::0;:72:::1;::::0;-1:-1:-1;;;;;19171:27:39;;::::1;::::0;19212:22:::1;19236:6:::0;19171:40:::1;:72::i;:::-;19288:22;::::0;::::1;::::0;19259:60:::1;::::0;345:25:42;;;-1:-1:-1;;;;;19288:22:39;;::::1;::::0;19277:9;;19259:60:::1;::::0;333:2:42;318:18;19259:60:39::1;;;;;;;18459:867;;3065:20:32::0;2365:1;-1:-1:-1;;;;;;;;;;;3972:62:32;3749:292;30513:259:39;1531:13:19;:11;:13::i;:::-;-1:-1:-1;;;;;30602:23:39;::::1;30594:54;;;::::0;-1:-1:-1;;;30594:54:39;;20259:2:42;30594:54:39::1;::::0;::::1;20241:21:42::0;20298:2;20278:18;;;20271:30;-1:-1:-1;;;20317:18:42;;;20310:48;20375:18;;30594:54:39::1;20057:342:42::0;30594:54:39::1;30691:20;::::0;30663:60:::1;::::0;-1:-1:-1;;;;;30663:60:39;;::::1;::::0;30691:20:::1;::::0;30663:60:::1;::::0;30691:20:::1;::::0;30663:60:::1;30733:20;:32:::0;;-1:-1:-1;;;;;;30733:32:39::1;-1:-1:-1::0;;;;;30733:32:39;;;::::1;::::0;;;::::1;::::0;;30513:259::o;1649:178:20:-;1531:13:19;:11;:13::i;:::-;1738::20::1;:24:::0;;-1:-1:-1;;;;;1738:24:20;::::1;-1:-1:-1::0;;;;;;1738:24:20;;::::1;::::0;::::1;::::0;;;1802:7:::1;1684::19::0;1710:6;-1:-1:-1;;;;;1710:6:19;;1638:85;1802:7:20::1;-1:-1:-1::0;;;;;1777:43:20::1;;;;;;;;;;;1649:178:::0;:::o;26385:470:39:-;26515:11;;-1:-1:-1;;;;;26515:11:39;:25;;;;:54;;-1:-1:-1;26558:11:39;;-1:-1:-1;;;;;26558:11:39;26544:10;:25;26515:54;26507:88;;;;-1:-1:-1;;;26507:88:39;;20606:2:42;26507:88:39;;;20588:21:42;20645:2;20625:18;;;20618:30;-1:-1:-1;;;20664:18:42;;;20657:51;20725:18;;26507:88:39;20404:345:42;26507:88:39;26606:10;;26632:36;;;;26643:4;26632:36;:::i;:::-;26605:63;;;;26697:1;26682:12;:16;26678:80;;;26700:58;-1:-1:-1;;;;;26700:23:39;;26724:10;26744:12;26700:23;:58::i;:::-;26787:1;26772:12;:16;26768:80;;;26790:58;-1:-1:-1;;;;;26790:23:39;;26814:10;26834:12;26790:23;:58::i;:::-;26497:358;;26385:470;;;;:::o;1796:162:19:-;1684:7;1710:6;-1:-1:-1;;;;;1710:6:19;735:10:29;1855:23:19;1851:101;;1901:40;;-1:-1:-1;;;1901:40:19;;735:10:29;1901:40:19;;;5546:51:42;5519:18;;1901:40:19;5400:203:42;3204:220:38;3333:7;3371:46;3383:5;3390:13;873:4;3371:11;:46::i;:::-;3359:58;;:9;:58;:::i;:::-;3352:65;3204:220;-1:-1:-1;;;;3204:220:38:o;1612:441::-;1772:7;;1808:57;1820:9;1831:6;1118:25;991:4;;1118:25;:::i;:::-;1846:18;1808:11;:57::i;:::-;1791:74;-1:-1:-1;1875:13:38;1891:124;1916:5;1953:6;1933:17;1937:13;1933:1;:17;:::i;:::-;:26;;;;:::i;:::-;1923:37;;:6;:37;:::i;:::-;873:4;1118:25;873:4;;1118:25;:::i;:::-;1962:9;;:1;:9;:::i;:::-;:23;;;;:::i;1891:124::-;1875:140;-1:-1:-1;2032:14:38;1875:140;2032:6;:14;:::i;:::-;2025:21;1612:441;-1:-1:-1;;;;;;;1612:441:38:o;11042:1036:39:-;11249:1;11237:9;:13;11229:41;;;;-1:-1:-1;;;11229:41:39;;21365:2:42;11229:41:39;;;21347:21:42;21404:2;21384:18;;;21377:30;-1:-1:-1;;;21423:18:42;;;21416:45;21478:18;;11229:41:39;21163:339:42;11229:41:39;11299:1;11288:8;:12;11280:39;;;;-1:-1:-1;;;11280:39:39;;21709:2:42;11280:39:39;;;21691:21:42;21748:2;21728:18;;;21721:30;-1:-1:-1;;;21767:18:42;;;21760:44;21821:18;;11280:39:39;21507:338:42;11280:39:39;3584:4;11350:12;:33;;:58;;;;;11403:5;11387:12;:21;;11350:58;11329:128;;;;-1:-1:-1;;;11329:128:39;;22052:2:42;11329:128:39;;;22034:21:42;22091:2;22071:18;;;22064:30;22130:25;22110:18;;;22103:53;22173:18;;11329:128:39;21850:347:42;11329:128:39;3905:4;11489:9;:29;;:61;;;;;3959:4;11522:9;:28;;11489:61;:89;;;;;3959:4;11554:5;:24;;11489:89;:136;;;;;4013:4;11598:8;:27;;11489:136;11468:198;;;;-1:-1:-1;;;11468:198:39;;22404:2:42;11468:198:39;;;22386:21:42;22443:2;22423:18;;;22416:30;-1:-1:-1;;;22462:18:42;;;22455:45;22517:18;;11468:198:39;22202:339:42;11468:198:39;11677:15;11695:65;11719:1;11722:8;11732:9;11743:5;11750:9;11695:23;:65::i;:::-;11677:83;;11770:18;11791:49;11814:7;11823:9;11834:5;11791:22;:49::i;:::-;11770:70;-1:-1:-1;11850:15:39;11868:120;11921:5;11894:23;11905:12;11894:8;:23;:::i;:::-;11893:33;;;;:::i;:::-;1118:25:38;991:4;;1118:25;:::i;:::-;11948:10:39;11960:18;11868:11;:120::i;:::-;11850:138;-1:-1:-1;12027:9:39;12006:17;11850:138;12006:7;:17;:::i;:::-;:30;;11998:73;;;;-1:-1:-1;;;11998:73:39;;22748:2:42;11998:73:39;;;22730:21:42;22787:2;22767:18;;;22760:30;22826:32;22806:18;;;22799:60;22876:18;;11998:73:39;22546:354:42;11998:73:39;11219:859;;;11042:1036;;;;;:::o;2586:117:31:-;1597:16;:14;:16::i;:::-;2644:7:::1;:15:::0;;-1:-1:-1;;;;2644:15:31::1;::::0;;2674:22:::1;735:10:29::0;2683:12:31::1;2674:22;::::0;-1:-1:-1;;;;;5564:32:42;;;5546:51;;5534:2;5519:18;2674:22:31::1;;;;;;;2586:117::o:0;1878:128::-;1796:7;;-1:-1:-1;;;1796:7:31;;;;1939:61;;;1974:15;;-1:-1:-1;;;1974:15:31;;;;;;;;;;;9413:1243:39;9479:17;9508:77;9523:1;:11;;;9536:1;:11;;;9549:1;:7;;;9558:1;:10;;;9570:1;:14;;;9508;:77::i;:::-;9608:12;:14;;;:12;:14;;;:::i;:::-;;;;;9596:26;;9698:18;9736:1;:6;;;9744:1;:8;;;9754:1;:11;;;9775:4;9782:1;:13;;;9719:77;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;9939:27:39;9969:19;;;:8;:19;;;;;;;;;10053:20;;-1:-1:-1;;;;;;10053:20:39;;;-1:-1:-1;;;;;10053:20:39;;;;;;;;;10112:14;;;;-1:-1:-1;10083:19:39;;;:44;;;;;;;;;;;;;;10156:11;;;;10137:16;;;:30;;;10192:7;;;;10177:12;;;:22;;;10227:10;;;;10209:15;;;:28;;;10247:14;;;:27;;10264:10;10247:27;;;;;;10308:13;;;10284:21;;;:37;10053:20;10353:14;;;10331:19;;;:36;;;10400:20;;;10377;;;:43;10430:13;;:35;;-1:-1:-1;;10430:35:39;;;;;;;10626:13;;;;10481:168;;10053:20;;-1:-1:-1;9969:19:39;;;;10264:10;;9969:19;;10481:168;;;;10053:20;;10112:14;10156:11;10353:14;;10626:13;10481:168;:::i;:::-;;;;;;;;9498:1158;;;9413:1243;;;:::o;3749:292:32:-;3872:25;:23;:25::i;:::-;2407:1;-1:-1:-1;;;;;;;;;;;3972:62:32;3749:292::o;28620:169:39:-;28697:7;28777:5;28746:7;:14;;:27;;;28724:7;:19;;;:49;;;;:::i;:::-;28723:59;;;;:::i;7296:3683:35:-;7378:14;7429:12;7443:11;7458:12;7465:1;7468;7458:6;:12::i;:::-;7428:42;;;;7552:4;7560:1;7552:9;7548:365;;7887:11;7881:3;:17;;;;;:::i;:::-;;7874:24;;;;;;7548:365;8038:4;8023:11;:19;8019:142;;8062:84;5328:5;8082:16;;5327:36;940:4:30;5322:42:35;8062:11;:84::i;:::-;8413:17;8564:11;8561:1;8558;8551:25;8956:12;8986:15;;;8971:31;;9121:22;;;;;9854:1;9835;:15;;9834:21;;10087;;;10083:25;;10072:36;10157:21;;;10153:25;;10142:36;10229:21;;;10225:25;;10214:36;10300:21;;;10296:25;;10285:36;10373:21;;;10369:25;;10358:36;10447:21;;;10443:25;;;10432:36;9363:12;;;;9359:23;;;9384:1;9355:31;8676:18;;;8666:29;;;9470:11;;;;8719:19;;;;9214:14;;;;9463:18;;;;10922:13;;-1:-1:-1;;7296:3683:35;;;;;:::o;29856:520:39:-;29937:7;29957:11;29970;29985:13;:73;;1118:25:38;991:4;;1118:25;:::i;:::-;30052:5:39;29985:73;;;30002:5;1118:25:38;991:4;;1118:25;:::i;:::-;29956:102:39;;-1:-1:-1;29956:102:39;-1:-1:-1;30068:17:39;-1:-1:-1;;;30088:9:39;29956:102;;30088:9;:::i;:::-;:21;:140;;30226:2;30181:41;30191:30;30203:3;-1:-1:-1;;;30217:3:39;30191:11;:30::i;:::-;30181:9;:41::i;:::-;:47;;30088:140;;;30124:42;30134:31;30146:3;-1:-1:-1;;;30161:3:39;30134:11;:31::i;30124:42::-;30068:160;-1:-1:-1;4855:10:39;30246:26;;:56;;;;-1:-1:-1;4914:49:39;30276:26;;30246:56;30238:96;;;;-1:-1:-1;;;30238:96:39;;25109:2:42;30238:96:39;;;25091:21:42;25148:2;25128:18;;;25121:30;25187:29;25167:18;;;25160:57;25234:18;;30238:96:39;24907:351:42;30238:96:39;30359:9;-1:-1:-1;;;29856:520:39;;;;;:::o;28795:237::-;28855:14;28871;28904:1;:15;;;:121;;28996:9;;;;29016:7;;28904:121;;;28943:7;;28961:9;;;;28904:121;28897:128;;;;28795:237;;;:::o;25289:1047::-;25399:19;25436:1;:6;;;25399:44;;25454:15;25479:4;-1:-1:-1;;;;;25479:10:39;;:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;25453:38;;;;;;;;25516:1;:17;;;-1:-1:-1;;;;;25505:28:39;:7;-1:-1:-1;;;;;25505:28:39;;25501:41;;25535:7;;25289:1047;;;:::o;25501:41::-;25580:17;;;;25673:15;;;;-1:-1:-1;;;;;25570:27:39;;;;;;;;;;;25659:29;;;;25552:15;25659:29;25714:44;;25745:13;25714:44;;;25727:15;25741:1;25727:11;:15;:::i;:::-;25698:60;;25772:5;25781:1;25772:10;25768:23;;25784:7;;;;;25289:1047;;;:::o;25768:23::-;25802:10;25814;25828;25836:1;25828:7;:10::i;:::-;25848:11;:27;;-1:-1:-1;;;;;;25848:27:39;-1:-1:-1;;;;;25848:27:39;;;;;;;;;26096:17;;;;;26115:18;;;26652:15:42;;;26115:18:39;;;26634:34:42;26704:15;;;26684:18;;;26677:43;26115:18:39;;;;;;;;;26569::42;;;26115::39;;;;-1:-1:-1;;;26044:90:39;;26652:15:42;;-1:-1:-1;26704:15:42;;-1:-1:-1;25848:27:39;26044:9;;:90;;26062:4;;26069:10;;26088:5;;26044:90;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;26144:11:39;:24;;-1:-1:-1;;;;;;26144:24:39;;;26184:10;26179:151;;26228:4;-1:-1:-1;;;;;26228:10:39;;:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;26273:17:39;;;;26210:30;;-1:-1:-1;;;;;;;;26262:28:39;;;;;;26254:65;;;;-1:-1:-1;;;26254:65:39;;27755:2:42;26254:65:39;;;27737:21:42;27794:2;27774:18;;;27767:30;27833:26;27813:18;;;27806:54;27877:18;;26254:65:39;27553:348:42;26254:65:39;25389:947;;;;;;;25289:1047;;;:::o;22569:1749::-;22671:7;;:32;;-1:-1:-1;;;22671:32:39;;22697:4;22671:32;;;5546:51:42;22650:18:39;;-1:-1:-1;;;;;22671:17:39;;;;5519:18:42;;22671:32:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;22773:14;;;;22736:9;;;;:34;;-1:-1:-1;;;22736:34:39;;22764:4;22736:34;;;5546:51:42;22650:53:39;;-1:-1:-1;22713:20:39;;-1:-1:-1;;;;;22736:19:39;;;;;;5519:18:42;;22736:34:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:51;;;;:::i;:::-;22713:74;;22798:10;22810;22824;22832:1;22824:7;:10::i;:::-;22860:7;;22797:37;;-1:-1:-1;22797:37:39;-1:-1:-1;22845:75:39;;-1:-1:-1;;;;;22845:37:39;22891:15;22909:10;22845:37;:75::i;:::-;22930:9;;;;:62;;-1:-1:-1;;;;;22930:22:39;22961:15;22979:12;22930:22;:62::i;:::-;23164:15;-1:-1:-1;;;;;23164:20:39;;23198:530;;;;;;;;23263:2;-1:-1:-1;;;;;23198:530:39;;;;;23291:2;-1:-1:-1;;;;;23198:530:39;;;;;4546:5;23198:530;;;;;;-1:-1:-1;;23198:530:39;;;;;;4800:6;23198:530;;;;;;23446:1;:15;;;:43;;23477:12;23446:43;;;23464:10;23446:43;23198:530;;;;23523:1;:15;;;:43;;23556:10;23523:43;;;23541:12;23523:43;23198:530;;;;23596:1;23198:530;;;;23627:1;23198:530;;;;23665:4;-1:-1:-1;;;;;23198:530:39;;;;;23698:15;23198:530;;;23164:574;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;-1:-1:-1;23164:574:39;;;;;;;;-1:-1:-1;;23164:574:39;;;;;;;;;;;;:::i;:::-;;;23160:1014;;24116:47;;;24151:1;29980:51:42;;;30062:2;30047:18;;30040:34;;;30090:18;;;30083:34;;;30148:2;30133:18;;30126:34;24116:47:39;;24132:9;;24116:47;;;;;;29967:3:42;24116:47:39;;;23160:1014;;;23818:21;;;;:10;:21;;;;;;;;:31;;;23883:6;;;;;23863;:17;;;;;;;:26;;-1:-1:-1;;;;;;23863:26:39;-1:-1:-1;;;;;23863:26:39;;;;;;;;;;23952:6;;23985:15;;;;23818:21;;23908:171;;23818:31;;23985;;24011:5;23985:31;;;24003:5;23985:31;24034:1;:15;;;:31;;24060:5;24034:31;;;24052:5;24034:31;23908:171;;;-1:-1:-1;;;;;29998:32:42;;;29980:51;;30062:2;30047:18;;30040:34;;;;30090:18;;;30083:34;30148:2;30133:18;;30126:34;29967:3;29952:19;23908:171:39;;;;;;;23739:351;;;;23160:1014;24199:7;;24184:66;;-1:-1:-1;;;;;24184:37:39;24230:15;24248:1;24184:37;:66::i;:::-;24260:9;;;;:51;;-1:-1:-1;;;;;24260:22:39;24291:15;24309:1;24260:22;:51::i;1219:204:28:-;1306:37;1320:5;1327:2;1331:5;1338:4;1306:13;:37::i;:::-;1301:116;;1366:40;;-1:-1:-1;;;1366:40:28;;-1:-1:-1;;;;;5564:32:42;;1366:40:28;;;5546:51:42;5519:18;;1366:40:28;5400:203:42;2647:422:38;2812:7;;2846:22;2862:6;2846:13;:22;:::i;:::-;2831:37;-1:-1:-1;2878:14:38;2895:37;2907:9;2918:6;1118:25;991:4;;1118:25;:::i;:::-;2895:11;:37::i;:::-;2878:54;-1:-1:-1;2942:13:38;2958:73;2970:5;2998:6;2987:8;2991:4;2987:1;:8;:::i;:::-;:17;;;;:::i;:::-;2977:28;;:6;:28;:::i;:::-;873:4;1118:25;873:4;;1118:25;:::i;:::-;3007:9;;:1;:9;:::i;:::-;:23;;;;:::i;2958:73::-;2942:89;-1:-1:-1;3048:14:38;2942:89;3048:6;:14;:::i;2011:153:20:-;2100:13;2093:20;;-1:-1:-1;;;;;;2093:20:20;;;2123:34;2148:8;2123:24;:34::i;2339:115:31:-;1350:19;:17;:19::i;:::-;2408:4:::1;2398:14:::0;;-1:-1:-1;;;;2398:14:31::1;-1:-1:-1::0;;;2398:14:31::1;::::0;;2427:20:::1;2434:12;735:10:29::0;;656:96;14353:917:39;14600:17;;;;14627:24;;;;14653:20;;;;14531:9;;14463:14;;;;14557:126;;14600:17;14531:9;;14557:29;:126::i;:::-;14550:133;;14693:17;14739:7;:19;;;14713:7;:14;;:23;;;:45;;;;:::i;:::-;14693:65;;14779:9;14772:4;:16;14768:50;;;-1:-1:-1;14812:5:39;;-1:-1:-1;14790:28:39;;14768:50;14840:9;14833:4;:16;14829:398;;;14915:17;;;;14945:24;;;;14971:20;;;;14874:142;;14915:17;14934:9;;14993;14874:23;:142::i;:::-;14865:151;;15047:1;15038:6;:10;15030:31;;;;-1:-1:-1;;;15030:31:39;;30795:2:42;15030:31:39;;;30777:21:42;30834:1;30814:18;;;30807:29;-1:-1:-1;;;30852:18:42;;;30845:38;30900:18;;15030:31:39;30593:331:42;15030:31:39;15129:17;;;;15156:24;;;;15182:20;;;;15082:134;;15129:17;15148:6;;15082:29;:134::i;:::-;15075:141;;14829:398;-1:-1:-1;15258:4:39;;-1:-1:-1;14353:917:39;;;;;;:::o;15556:514::-;15680:37;;-1:-1:-1;;;15680:37:39;;15711:4;15680:37;;;5546:51:42;15656:21:39;;-1:-1:-1;;;;;15680:22:39;;;;;5519:18:42;;15680:37:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;15656:61;-1:-1:-1;15727:62:39;-1:-1:-1;;;;;15727:29:39;;15757:10;15777:4;15784;15727:29;:62::i;:::-;15820:37;;-1:-1:-1;;;15820:37:39;;15851:4;15820:37;;;5546:51:42;15877:4:39;;15860:13;;-1:-1:-1;;;;;15820:22:39;;;;;5519:18:42;;15820:37:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:53;;;;:::i;:::-;:61;15799:133;;;;-1:-1:-1;;;15799:133:39;;31131:2:42;15799:133:39;;;31113:21:42;31170:2;31150:18;;;31143:30;31209:27;31189:18;;;31182:55;31254:18;;15799:133:39;30929:349:42;15799:133:39;15946:15;;15942:122;;16019:20;;15977:76;;-1:-1:-1;;;;;15977:29:39;;;;16007:10;;16019:20;16041:11;15977:29;:76::i;:::-;15646:424;15556:514;;;:::o;28337:277::-;28446:17;;28442:78;;28484:20;;28465:55;;-1:-1:-1;;;;;28465:18:39;;;;28484:20;28506:13;28465:18;:55::i;:::-;28542:13;28534:5;:21;28530:77;;;28557:50;28576:7;28585:21;28593:13;28585:5;:21;:::i;:::-;-1:-1:-1;;;;;28557:18:39;;;:50;:18;:50::i;11108:238:35:-;11209:7;11263:76;11279:26;11296:8;11279:16;:26::i;:::-;:59;;;;;11337:1;11322:11;11309:25;;;;;:::i;:::-;11319:1;11316;11309:25;:29;11279:59;34911:9:36;34904:17;;34792:145;11263:76:35;11235:25;11242:1;11245;11248:11;11235:6;:25::i;:::-;:104;;;;:::i;:::-;11228:111;11108:238;-1:-1:-1;;;;;11108:238:35:o;3858:728:38:-;4040:7;;4193:37;4205:6;1118:25;991:4;;1118:25;:::i;:::-;4220:9;4193:11;:37::i;:::-;:41;;4233:1;4193:41;:::i;:::-;4180:54;;4253:10;4248:2;:15;4244:36;;;-1:-1:-1;4270:10:38;4244:36;4290:10;4314:247;4326:2;4321;:7;4314:247;;;4344:11;4374:1;4359:7;4364:2;4359;:7;:::i;:::-;:11;;4369:1;4359:11;:::i;:::-;4358:17;;;;:::i;:::-;4344:31;;4451:6;4393:54;4410:13;4425:3;4430:9;4441:5;4393:16;:54::i;:::-;:64;4389:162;;4482:3;4477:8;;4389:162;;;4529:7;4535:1;4529:3;:7;:::i;:::-;4524:12;;4389:162;4330:231;4314:247;;2078:126:31;1796:7;;-1:-1:-1;;;1796:7:31;;;;2136:62;;2172:15;;-1:-1:-1;;;2172:15:31;;;;;;;;;;;3586:157:32;-1:-1:-1;;;;;;;;;;;4560:52:32;2407:1;4560:63;3644:93;;3696:30;;-1:-1:-1;;;3696:30:32;;;;;;;;;;;1027:550:35;1088:12;;-1:-1:-1;;1471:1:35;1468;1461:20;1501:9;;;;1549:11;;;1535:12;;;;1531:30;;;;;1027:550;-1:-1:-1;;1027:550:35:o;1776:194:30:-;1881:10;1875:4;1868:24;1918:4;1912;1905:18;1949:4;1943;1936:18;20859:5181:35;20907:7;21025:1;21020;:6;21016:53;;-1:-1:-1;21053:1:35;20859:5181::o;21016:53::-;22009:1;22037;-1:-1:-1;;;22057:16:35;;22053:92;;22100:3;22093:10;;;;;22128:2;22121:9;22053:92;-1:-1:-1;;;22162:2:35;:15;22158:90;;22204:2;22197:9;;;;;22231:2;22224:9;22158:90;22272:7;22265:2;:15;22261:90;;22307:2;22300:9;;;;;22334:2;22327:9;22261:90;22375:7;22368:2;:15;22364:89;;22410:2;22403:9;;;;;22437:1;22430:8;22364:89;22477:6;22470:2;:14;22466:87;;22511:1;22504:8;;;;;22537:1;22530:8;22466:87;22577:6;22570:2;:14;22566:87;;22611:1;22604:8;;;;;22637:1;22630:8;22566:87;22677:6;22670:2;:14;22666:61;;22711:1;22704:8;22666:61;23153:1;:6;23164:1;23152:13;;;;;25063:1;23152:13;25063:6;;;;:::i;:::-;;25058:2;:11;25057:18;;25052:23;;25183:1;25176:2;25172:1;:6;;;;;:::i;:::-;;25167:2;:11;25166:18;;25161:23;;25294:1;25287:2;25283:1;:6;;;;;:::i;:::-;;25278:2;:11;25277:18;;25272:23;;25403:1;25396:2;25392:1;:6;;;;;:::i;:::-;;25387:2;:11;25386:18;;25381:23;;25513:1;25506:2;25502:1;:6;;;;;:::i;:::-;;25497:2;:11;25496:18;;25491:23;;25623:1;25616:2;25612:1;:6;;;;;:::i;:::-;;25607:2;:11;25606:18;;25601:23;;25995:28;26020:2;26016:1;:6;;;;;:::i;:::-;;26011:11;;;34792:145:36;25995:28:35;25990:33;;;20859:5181;-1:-1:-1;;;20859:5181:35:o;5098:367:28:-;5190:42;5203:5;5210:7;5219:5;5226;5190:12;:42::i;:::-;5185:274;;5253:37;5266:5;5273:7;5282:1;5285:4;5253:12;:37::i;:::-;5248:91;;5299:40;;-1:-1:-1;;;5299:40:28;;-1:-1:-1;;;;;5564:32:42;;5299:40:28;;;5546:51:42;5519:18;;5299:40:28;5400:203:42;5248:91:28;5358:41;5371:5;5378:7;5387:5;5394:4;5358:12;:41::i;8373:1244::-;8600:4;8594:11;-1:-1:-1;;;8467:12:28;8618:22;;;-1:-1:-1;;;;;8666:24:28;;8660:4;8653:38;8711:4;8704:19;;;8467:12;8787:4;8467:12;8775:4;8467:12;;8759:5;8752;8747:45;8736:56;;9004:1;8997:4;8991:11;8988:18;8979:7;8975:32;8965:606;;9136:6;9126:7;9119:15;9115:28;9112:165;;;9192:16;9186:4;9181:3;9166:43;9242:16;9237:3;9230:29;9112:165;9553:1;9545:5;9533:18;9530:25;9511:16;9504:24;9500:56;9491:7;9487:70;9476:81;;8965:606;9591:4;9584:17;-1:-1:-1;8373:1244:28;;-1:-1:-1;;;;8373:1244:28:o;2912:187:19:-;2985:16;3004:6;;-1:-1:-1;;;;;3020:17:19;;;-1:-1:-1;;;;;;3020:17:19;;;;;;3052:40;;3004:6;;;;;;;3052:40;;2985:16;3052:40;2975:124;2912:187;:::o;1662:232:28:-;1767:47;1785:5;1792:4;1798:2;1802:5;1809:4;1767:17;:47::i;:::-;1762:126;;1837:40;;-1:-1:-1;;;1837:40:28;;-1:-1:-1;;;;;5564:32:42;;1837:40:28;;;5546:51:42;5519:18;;1837:40:28;5400:203:42;32337:122:35;32405:4;32446:1;32434:8;32428:15;;;;;;;;:::i;:::-;:19;;;;:::i;:::-;:24;;32451:1;32428:24;32421:31;;32337:122;;;:::o;12059:1252:28:-;12289:4;12283:11;-1:-1:-1;;;12157:12:28;12307:22;;;-1:-1:-1;;;;;12355:29:28;;12349:4;12342:43;12405:4;12398:19;;;12157:12;12481:4;12157:12;12469:4;12157:12;;12453:5;12446;12441:45;12430:56;;12698:1;12691:4;12685:11;12682:18;12673:7;12669:32;12659:606;;12830:6;12820:7;12813:15;12809:28;12806:165;;;12886:16;12880:4;12875:3;12860:43;12936:16;12931:3;12924:29;10165:1393;10460:4;10454:11;-1:-1:-1;;;10323:12:28;10478:22;;;-1:-1:-1;;;;;10526:26:28;;;10520:4;10513:40;10579:24;;10573:4;10566:38;10624:4;10617:19;;;10323:12;10700:4;10323:12;10688:4;10323:12;;10672:5;10665;10660:45;10649:56;;10917:1;10910:4;10904:11;10901:18;10892:7;10888:32;10878:606;;11049:6;11039:7;11032:15;11028:28;11025:165;;;11105:16;11099:4;11094:3;11079:43;11155:16;11150:3;11143:29;11025:165;11466:1;11458:5;11446:18;11443:25;11424:16;11417:24;11413:56;11404:7;11400:70;11389:81;;10878:606;11504:4;11497:17;-1:-1:-1;11540:1:28;11534:4;11527:15;10165:1393;;-1:-1:-1;;;;;10165:1393:28:o;-1:-1:-1:-;;;;;;;;:::o;14:180:42:-;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:42;;14:180;-1:-1:-1;14:180:42:o;381:248::-;449:6;457;510:2;498:9;489:7;485:23;481:32;478:52;;;526:1;523;516:12;478:52;-1:-1:-1;;549:23:42;;;619:2;604:18;;;591:32;;-1:-1:-1;381:248:42:o;887:200::-;979:6;1032:3;1020:9;1011:7;1007:23;1003:33;1000:53;;;1049:1;1046;1039:12;1000:53;-1:-1:-1;1072:9:42;887:200;-1:-1:-1;887:200:42:o;1092:348::-;1144:8;1154:6;1208:3;1201:4;1193:6;1189:17;1185:27;1175:55;;1226:1;1223;1216:12;1175:55;-1:-1:-1;1249:20:42;;1292:18;1281:30;;1278:50;;;1324:1;1321;1314:12;1278:50;1361:4;1353:6;1349:17;1337:29;;1413:3;1406:4;1397:6;1389;1385:19;1381:30;1378:39;1375:59;;;1430:1;1427;1420:12;1375:59;1092:348;;;;;:::o;1445:1010::-;1558:6;1566;1574;1582;1590;1598;1651:2;1639:9;1630:7;1626:23;1622:32;1619:52;;;1667:1;1664;1657:12;1619:52;1707:9;1694:23;1736:18;1777:2;1769:6;1766:14;1763:34;;;1793:1;1790;1783:12;1763:34;1832:59;1883:7;1874:6;1863:9;1859:22;1832:59;:::i;:::-;1910:8;;-1:-1:-1;1806:85:42;-1:-1:-1;1998:2:42;1983:18;;1970:32;;-1:-1:-1;2014:16:42;;;2011:36;;;2043:1;2040;2033:12;2011:36;2082:61;2135:7;2124:8;2113:9;2109:24;2082:61;:::i;:::-;2162:8;;-1:-1:-1;2056:87:42;-1:-1:-1;2250:2:42;2235:18;;2222:32;;-1:-1:-1;2266:16:42;;;2263:36;;;2295:1;2292;2285:12;2263:36;;2334:61;2387:7;2376:8;2365:9;2361:24;2334:61;:::i;:::-;1445:1010;;;;-1:-1:-1;1445:1010:42;;-1:-1:-1;1445:1010:42;;2414:8;;1445:1010;-1:-1:-1;;;1445:1010:42:o;3327:127::-;3388:10;3383:3;3379:20;3376:1;3369:31;3419:4;3416:1;3409:15;3443:4;3440:1;3433:15;3459:240;3543:1;3536:5;3533:12;3523:143;;3588:10;3583:3;3579:20;3576:1;3569:31;3623:4;3620:1;3613:15;3651:4;3648:1;3641:15;3523:143;3675:18;;3459:240::o;3704:1164::-;4037:13;;-1:-1:-1;;;;;4033:39:42;4015:58;;4120:4;4108:17;;;4102:24;4002:3;3987:19;;;4135:54;;4168:20;;4102:24;-1:-1:-1;;;;;2526:31:42;2514:44;;2460:104;4135:54;;4245:4;4237:6;4233:17;4227:24;4220:4;4209:9;4205:20;4198:54;4308:4;4300:6;4296:17;4290:24;4283:4;4272:9;4268:20;4261:54;4371:4;4363:6;4359:17;4353:24;4346:4;4335:9;4331:20;4324:54;4427:4;4419:6;4415:17;4409:24;4442:56;4492:4;4481:9;4477:20;4461:14;-1:-1:-1;;;;;2526:31:42;2514:44;;2460:104;4442:56;;4554:4;4546:6;4542:17;4536:24;4529:4;4518:9;4514:20;4507:54;4617:4;4609:6;4605:17;4599:24;4592:4;4581:9;4577:20;4570:54;4643:6;4703:2;4695:6;4691:15;4685:22;4680:2;4669:9;4665:18;4658:50;;4717:57;4769:3;4758:9;4754:19;4746:6;4717:57;:::i;:::-;4805:3;4790:19;;4783:35;;;;4849:3;4834:19;4827:35;3704:1164;;-1:-1:-1;;3704:1164:42:o;4873:131::-;-1:-1:-1;;;;;4948:31:42;;4938:42;;4928:70;;4994:1;4991;4984:12;5009:134;5077:20;;5106:31;5077:20;5106:31;:::i;5148:247::-;5207:6;5260:2;5248:9;5239:7;5235:23;5231:32;5228:52;;;5276:1;5273;5266:12;5228:52;5315:9;5302:23;5334:31;5359:5;5334:31;:::i;5608:394::-;5701:6;5754:2;5742:9;5733:7;5729:23;5725:32;5722:52;;;5770:1;5767;5760:12;5722:52;5810:9;5797:23;5843:18;5835:6;5832:30;5829:50;;;5875:1;5872;5865:12;5829:50;5898:22;;5954:3;5936:16;;;5932:26;5929:46;;;5971:1;5968;5961:12;6007:316;6084:6;6092;6100;6153:2;6141:9;6132:7;6128:23;6124:32;6121:52;;;6169:1;6166;6159:12;6121:52;-1:-1:-1;;6192:23:42;;;6262:2;6247:18;;6234:32;;-1:-1:-1;6313:2:42;6298:18;;;6285:32;;6007:316;-1:-1:-1;6007:316:42:o;6573:404::-;6657:6;6665;6718:2;6706:9;6697:7;6693:23;6689:32;6686:52;;;6734:1;6731;6724:12;6686:52;6773:9;6760:23;6792:31;6817:5;6792:31;:::i;:::-;6842:5;-1:-1:-1;6899:2:42;6884:18;;6871:32;6912:33;6871:32;6912:33;:::i;:::-;6964:7;6954:17;;;6573:404;;;;;:::o;7274:315::-;7342:6;7350;7403:2;7391:9;7382:7;7378:23;7374:32;7371:52;;;7419:1;7416;7409:12;7371:52;7455:9;7442:23;7432:33;;7515:2;7504:9;7500:18;7487:32;7528:31;7553:5;7528:31;:::i;7594:544::-;7680:6;7688;7696;7704;7757:2;7745:9;7736:7;7732:23;7728:32;7725:52;;;7773:1;7770;7763:12;7725:52;7809:9;7796:23;7786:33;;7866:2;7855:9;7851:18;7838:32;7828:42;;7921:2;7910:9;7906:18;7893:32;7948:18;7940:6;7937:30;7934:50;;;7980:1;7977;7970:12;7934:50;8019:59;8070:7;8061:6;8050:9;8046:22;8019:59;:::i;:::-;7594:544;;;;-1:-1:-1;8097:8:42;-1:-1:-1;;;;7594:544:42:o;8486:127::-;8547:10;8542:3;8538:20;8535:1;8528:31;8578:4;8575:1;8568:15;8602:4;8599:1;8592:15;8618:168;8691:9;;;8722;;8739:15;;;8733:22;;8719:37;8709:71;;8760:18;;:::i;8791:127::-;8852:10;8847:3;8843:20;8840:1;8833:31;8883:4;8880:1;8873:15;8907:4;8904:1;8897:15;8923:120;8963:1;8989;8979:35;;8994:18;;:::i;:::-;-1:-1:-1;9028:9:42;;8923:120::o;9395:644::-;9572:5;9559:19;9587:33;9612:7;9587:33;:::i;:::-;9649:11;;-1:-1:-1;;;;;;9645:54:42;-1:-1:-1;;;;;9701:33:42;;;;9642:93;9629:107;;9790:2;9779:14;;9766:28;9731:1;9752:12;;9745:50;9849:2;9838:14;;9825:28;9821:1;9811:12;;9804:50;9908:2;9897:14;;9884:28;9880:1;9870:12;;9863:50;9967:3;9956:15;;9943:29;9939:1;9929:12;;9922:51;9722:3;10016:15;;;;10003:29;9999:1;9989:12;;;9982:51;9395:644::o;11080:128::-;11147:9;;;11168:11;;;11165:37;;;11182:18;;:::i;11213:184::-;11283:6;11336:2;11324:9;11315:7;11311:23;11307:32;11304:52;;;11352:1;11349;11342:12;11304:52;-1:-1:-1;11375:16:42;;11213:184;-1:-1:-1;11213:184:42:o;12155:251::-;12225:6;12278:2;12266:9;12257:7;12253:23;12249:32;12246:52;;;12294:1;12291;12284:12;12246:52;12326:9;12320:16;12345:31;12370:5;12345:31;:::i;12411:127::-;12472:10;12467:3;12463:20;12460:1;12453:31;12503:4;12500:1;12493:15;12527:4;12524:1;12517:15;12543:250;12610:2;12604:9;12652:6;12640:19;;12689:18;12674:34;;12710:22;;;12671:62;12668:88;;;12736:18;;:::i;:::-;12772:2;12765:22;12543:250;:::o;12798:719::-;12841:5;12894:3;12887:4;12879:6;12875:17;12871:27;12861:55;;12912:1;12909;12902:12;12861:55;12948:6;12935:20;12974:18;13011:2;13007;13004:10;13001:36;;;13017:18;;:::i;:::-;13092:2;13086:9;13060:2;13146:13;;-1:-1:-1;;13142:22:42;;;13166:2;13138:31;13134:40;13122:53;;;13190:18;;;13210:22;;;13187:46;13184:72;;;13236:18;;:::i;:::-;13276:10;13272:2;13265:22;13311:2;13303:6;13296:18;13357:3;13350:4;13345:2;13337:6;13333:15;13329:26;13326:35;13323:55;;;13374:1;13371;13364:12;13323:55;13438:2;13431:4;13423:6;13419:17;13412:4;13404:6;13400:17;13387:54;13485:1;13478:4;13473:2;13465:6;13461:15;13457:26;13450:37;13505:6;13496:15;;;;;;12798:719;;;;:::o;13522:1266::-;13638:9;13697:6;13689:5;13673:14;13669:26;13665:39;13662:59;;;13717:1;13714;13707:12;13662:59;13745:17;;:::i;:::-;13798:5;13785:19;13823:18;13864:2;13856:6;13853:14;13850:34;;;13880:1;13877;13870:12;13850:34;13909:53;13947:14;13938:6;13931:5;13927:18;13909:53;:::i;:::-;13900:7;13893:70;14012:2;14005:5;14001:14;13988:28;13972:44;;14041:2;14031:8;14028:16;14025:36;;;14057:1;14054;14047:12;14025:36;14095:55;14135:14;14124:8;14117:5;14113:20;14095:55;:::i;:::-;14090:2;14081:7;14077:16;14070:81;14200:2;14193:5;14189:14;14176:28;14160:44;;14229:2;14219:8;14216:16;14213:36;;;14245:1;14242;14235:12;14213:36;;14283:55;14323:14;14312:8;14305:5;14301:20;14283:55;:::i;:::-;14278:2;14269:7;14265:16;14258:81;;14397:2;14390:5;14386:14;14373:28;14368:2;14359:7;14355:16;14348:54;14437:35;14467:3;14460:5;14456:15;14437:35;:::i;:::-;14431:3;14422:7;14418:17;14411:62;14532:3;14525:5;14521:15;14508:29;14502:3;14493:7;14489:17;14482:56;14597:3;14590:5;14586:15;14573:29;14567:3;14558:7;14554:17;14547:56;14662:3;14655:5;14651:15;14638:29;14632:3;14623:7;14619:17;14612:56;14687:3;14748:2;14741:5;14737:14;14724:28;14719:2;14710:7;14706:16;14699:54;;14775:7;14762:20;;;13522:1266;;;:::o;16638:125::-;16703:9;;;16724:10;;;16721:36;;;16737:18;;:::i;17689:245::-;17768:6;17776;17829:2;17817:9;17808:7;17804:23;17800:32;17797:52;;;17845:1;17842;17835:12;17797:52;-1:-1:-1;;17868:16:42;;17924:2;17909:18;;;17903:25;17868:16;;17903:25;;-1:-1:-1;17689:245:42:o;22905:135::-;22944:3;22965:17;;;22962:43;;22985:18;;:::i;:::-;-1:-1:-1;23032:1:42;23021:13;;22905:135::o;23045:423::-;23087:3;23125:5;23119:12;23152:6;23147:3;23140:19;23177:1;23187:162;23201:6;23198:1;23195:13;23187:162;;;23263:4;23319:13;;;23315:22;;23309:29;23291:11;;;23287:20;;23280:59;23216:12;23187:162;;;23191:3;23394:1;23387:4;23378:6;23373:3;23369:16;23365:27;23358:38;23457:4;23450:2;23446:7;23441:2;23433:6;23429:15;23425:29;23420:3;23416:39;23412:50;23405:57;;;23045:423;;;;:::o;23473:717::-;23774:3;23763:9;23756:22;23737:4;23801:46;23842:3;23831:9;23827:19;23819:6;23801:46;:::i;:::-;23895:9;23887:6;23883:22;23878:2;23867:9;23863:18;23856:50;23929:33;23955:6;23947;23929:33;:::i;:::-;23993:2;23978:18;;23971:34;;;-1:-1:-1;;;;;24041:32:42;;24036:2;24021:18;;24014:60;24111:22;;;24105:3;24090:19;;24083:51;23915:47;-1:-1:-1;24151:33:42;23915:47;24169:6;24151:33;:::i;24195:707::-;24475:4;24521:1;24517;24512:3;24508:11;24504:19;24562:2;24554:6;24550:15;24539:9;24532:34;24614:2;24606:6;24602:15;24597:2;24586:9;24582:18;24575:43;;24654:6;24649:2;24638:9;24634:18;24627:34;24697:6;24692:2;24681:9;24677:18;24670:34;24741:6;24735:3;24724:9;24720:19;24713:35;24785:6;24779:3;24768:9;24764:19;24757:35;24829:3;24823;24812:9;24808:19;24801:32;24850:46;24891:3;24880:9;24876:19;24868:6;24850:46;:::i;:::-;24842:54;24195:707;-1:-1:-1;;;;;;;;;24195:707:42:o;25263:163::-;25341:13;;25394:6;25383:18;;25373:29;;25363:57;;25416:1;25413;25406:12;25431:986;25545:6;25553;25561;25569;25577;25585;25593;25646:3;25634:9;25625:7;25621:23;25617:33;25614:53;;;25663:1;25660;25653:12;25614:53;25695:9;25689:16;25714:31;25739:5;25714:31;:::i;:::-;25764:5;25754:15;;;25814:2;25803:9;25799:18;25793:25;25863:7;25860:1;25849:22;25840:7;25837:35;25827:63;;25886:1;25883;25876:12;25827:63;25909:7;-1:-1:-1;25935:48:42;25979:2;25964:18;;25935:48;:::i;:::-;25925:58;;26002:48;26046:2;26035:9;26031:18;26002:48;:::i;:::-;25992:58;;26069:49;26113:3;26102:9;26098:19;26069:49;:::i;:::-;26059:59;;26163:3;26152:9;26148:19;26142:26;26212:4;26203:7;26199:18;26190:7;26187:31;26177:59;;26232:1;26229;26222:12;26177:59;26307:3;26292:19;;26286:26;26255:7;;-1:-1:-1;26350:15:42;;26343:23;26331:36;;26321:64;;26381:1;26378;26371:12;26321:64;26404:7;26394:17;;;25431:986;;;;;;;;;;:::o;26731:569::-;-1:-1:-1;;;;;27020:15:42;;;27002:34;;27079:14;;27072:22;27067:2;27052:18;;27045:50;27126:2;27111:18;;27104:34;;;27174:15;;27169:2;27154:18;;27147:43;26982:3;27221;27206:19;;27199:32;;;26945:4;;27248:46;;27274:19;;27266:6;27248:46;:::i;28002:1224::-;28226:13;;-1:-1:-1;;;;;2526:31:42;2514:44;;28194:3;28179:19;;28298:4;28290:6;28286:17;28280:24;28313:54;28361:4;28350:9;28346:20;28332:12;-1:-1:-1;;;;;2526:31:42;2514:44;;2460:104;28313:54;;28416:4;28408:6;28404:17;28398:24;28431:55;28480:4;28469:9;28465:20;28449:14;7058:8;7047:20;7035:33;;6982:92;28431:55;;28535:4;28527:6;28523:17;28517:24;28550:54;28598:4;28587:9;28583:20;28567:14;27981:1;27970:20;27958:33;;27906:91;28550:54;;28653:4;28645:6;28641:17;28635:24;28668:54;28716:4;28705:9;28701:20;28685:14;27981:1;27970:20;27958:33;;27906:91;28668:54;;28778:4;28770:6;28766:17;28760:24;28753:4;28742:9;28738:20;28731:54;28841:4;28833:6;28829:17;28823:24;28816:4;28805:9;28801:20;28794:54;28904:4;28896:6;28892:17;28886:24;28879:4;28868:9;28864:20;28857:54;28930:6;28990:2;28982:6;28978:15;28972:22;28967:2;28956:9;28952:18;28945:50;;29014:6;29069:2;29061:6;29057:15;29051:22;29082:54;29132:2;29121:9;29117:18;29101:14;-1:-1:-1;;;;;2526:31:42;2514:44;;2460:104;29082:54;-1:-1:-1;;29155:6:42;29203:15;;;29197:22;29177:18;;;;29170:50;28002:1224;:::o;29231:489::-;29328:6;29336;29344;29352;29405:3;29393:9;29384:7;29380:23;29376:33;29373:53;;;29422:1;29419;29412:12;29373:53;29451:9;29445:16;29435:26;;29504:2;29493:9;29489:18;29483:25;-1:-1:-1;;;;;29541:5:42;29537:46;29530:5;29527:57;29517:85;;29598:1;29595;29588:12;29517:85;29666:2;29651:18;;29645:25;29710:2;29695:18;;;29689:25;29231:489;;29621:5;;-1:-1:-1;29231:489:42;-1:-1:-1;;;29231:489:42:o;31283:157::-;31313:1;31347:4;31344:1;31340:12;31371:3;31361:37;;31378:18;;:::i;:::-;31430:3;31423:4;31420:1;31416:12;31412:22;31407:27;;;31283:157;;;;:::o",
    "linkReferences": {},
    "immutableReferences": {
      "46739": [
        {
          "start": 1393,
          "length": 32
        },
        {
          "start": 3716,
          "length": 32
        },
        {
          "start": 6497,
          "length": 32
        },
        {
          "start": 11381,
          "length": 32
        },
        {
          "start": 11440,
          "length": 32
        },
        {
          "start": 11480,
          "length": 32
        },
        {
          "start": 12068,
          "length": 32
        },
        {
          "start": 12127,
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
    "acceptOwnership()": "79ba5097",
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
    "pause()": "8456cb59",
    "paused()": "5c975abb",
    "pendingOwner()": "e30c3978",
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
    "unpause()": "3f4ba83a",
    "userPurchases(uint256,address)": "efc20dad",
    "withdrawProceeds(uint256)": "d9f1aed9"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.24+commit.e11b9ed9\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"feeRecipient_\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"defaultFeeBps_\",\"type\":\"uint256\"},{\"internalType\":\"contract INonfungiblePositionManager\",\"name\":\"positionManager_\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"EnforcedPause\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpectedPause\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnableInvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"OwnableUnauthorizedAccount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"totalRaised\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"totalSold\",\"type\":\"uint256\"}],\"name\":\"AuctionCompleted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"creator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"paymentToken\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"slope\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maxRaise\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"liquidityBps\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"metadataURI\",\"type\":\"string\"}],\"name\":\"AuctionCreated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"pool\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"positionId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenLiquidity\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"paymentLiquidity\",\"type\":\"uint256\"}],\"name\":\"AuctionMigrated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"previous\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"current\",\"type\":\"uint256\"}],\"name\":\"DefaultFeeBpsUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"previous\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"current\",\"type\":\"uint256\"}],\"name\":\"DefaultLpFeeShareBpsUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"paymentToken\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maxSupply\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"slope\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maxRaise\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"liquidityBps\",\"type\":\"uint256\"}],\"name\":\"LaunchPresetUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"creatorTokenFees\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"creatorPaymentFees\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"protocolTokenFees\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"protocolPaymentFees\",\"type\":\"uint256\"}],\"name\":\"LpFeesCollected\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferStarted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Paused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"creator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"ProceedsWithdrawn\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previous\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"current\",\"type\":\"address\"}],\"name\":\"ProtocolFeeRecipientUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Swept\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"buyer\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"cost\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"protocolFee\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newTotalRaised\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newTotalSold\",\"type\":\"uint256\"}],\"name\":\"TokensPurchased\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"seller\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"protocolFee\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newTotalRaised\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newTotalSold\",\"type\":\"uint256\"}],\"name\":\"TokensSold\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Unpaused\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"MAX_FEE_BPS\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MAX_LP_FEE_SHARE_BPS\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MIN_LIQUIDITY_BPS\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"POOL_FEE\",\"outputs\":[{\"internalType\":\"uint24\",\"name\":\"\",\"type\":\"uint24\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"auctionCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"auctions\",\"outputs\":[{\"components\":[{\"internalType\":\"contract AuctionToken\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"paymentToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"basePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"slope\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"maxRaise\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"creator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"protocolFeeBps\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"liquidityBps\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpFeeShareBps\",\"type\":\"uint256\"}],\"internalType\":\"struct TokenAuction.AuctionConfig\",\"name\":\"config\",\"type\":\"tuple\"},{\"internalType\":\"enum TokenAuction.AuctionState\",\"name\":\"state\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"totalRaised\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalSold\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"maxCost\",\"type\":\"uint256\"}],\"name\":\"buyTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"}],\"name\":\"collectFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenFees\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"paymentFees\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"metadataURI\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"maxSupply\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"paymentToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"basePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"slope\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"maxRaise\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"liquidityBps\",\"type\":\"uint256\"}],\"internalType\":\"struct TokenAuction.AuctionParams\",\"name\":\"p\",\"type\":\"tuple\"}],\"name\":\"createAuction\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"custodied\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"defaultFeeBps\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"defaultLpFeeShareBps\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"getBuyCost\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"cost\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"fee\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"}],\"name\":\"getSpotPrice\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"metadataURI\",\"type\":\"string\"}],\"name\":\"launch\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"launchPreset\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"paymentToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"maxSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"basePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"slope\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"maxRaise\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"liquidityBps\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"}],\"name\":\"migrate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"paused\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pendingOwner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"poolOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"positionId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"positionManager\",\"outputs\":[{\"internalType\":\"contract INonfungiblePositionManager\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"proceedsWithdrawn\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"protocolFeeRecipient\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minProceeds\",\"type\":\"uint256\"}],\"name\":\"sellTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"feeBps\",\"type\":\"uint256\"}],\"name\":\"setDefaultFeeBps\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shareBps\",\"type\":\"uint256\"}],\"name\":\"setDefaultLpFeeShareBps\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"paymentToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"maxSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"basePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"slope\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"maxRaise\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"liquidityBps\",\"type\":\"uint256\"}],\"internalType\":\"struct TokenAuction.LaunchPreset\",\"name\":\"preset\",\"type\":\"tuple\"}],\"name\":\"setLaunchPreset\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"}],\"name\":\"setProtocolFeeRecipient\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"sweep\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"amount0Delta\",\"type\":\"int256\"},{\"internalType\":\"int256\",\"name\":\"amount1Delta\",\"type\":\"int256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"uniswapV3SwapCallback\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"unpause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"userPurchases\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"}],\"name\":\"withdrawProceeds\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"EnforcedPause()\":[{\"details\":\"The operation failed because the contract is paused.\"}],\"ExpectedPause()\":[{\"details\":\"The operation failed because the contract is not paused.\"}],\"OwnableInvalidOwner(address)\":[{\"details\":\"The owner is not a valid owner account. (eg. `address(0)`)\"}],\"OwnableUnauthorizedAccount(address)\":[{\"details\":\"The caller account is not authorized to perform an operation.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC-20 token failed.\"}]},\"events\":{\"Paused(address)\":{\"details\":\"Emitted when the pause is triggered by `account`.\"},\"Unpaused(address)\":{\"details\":\"Emitted when the pause is lifted by `account`.\"}},\"kind\":\"dev\",\"methods\":{\"acceptOwnership()\":{\"details\":\"The new owner accepts the ownership transfer.\"},\"buyTokens(uint256,uint256,uint256)\":{\"details\":\"A purchase that would overshoot `maxRaise` is filled with what the        remaining budget buys and closes the auction, so the buyer may        receive less than `amount`; `TokensPurchased` reports the actual        amount.\",\"params\":{\"maxCost\":\"Most the buyer will pay in total (cost + protocol fee), in        payment-token units. The price rises with every purchase, so a        quote can be stale by the time a transaction lands; this bound        makes the buy revert instead of filling at a worse price.\"}},\"migrate(uint256)\":{\"details\":\"Opens (or corrects) the pool at the auction's final price, adds         full-range liquidity from the reserved share of the raise plus         newly minted tokens, and keeps the position NFT forever. Never         leaves tokens permanently locked: if there is nothing to pair, or         Uniswap rejects the position, transfers are unlocked anyway and         the reserved funds go to the creator.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"paused()\":{\"details\":\"Returns true if the contract is paused, and false otherwise.\"},\"pendingOwner()\":{\"details\":\"Returns the address of the pending owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"sellTokens(uint256,uint256,uint256)\":{\"params\":{\"minProceeds\":\"Least the seller will accept after the fee. Like        `maxCost` on purchases, it protects against the price moving        between quote and transaction.\"}},\"transferOwnership(address)\":{\"details\":\"Starts the ownership transfer of the contract to a new account. Replaces the pending transfer if there is one. Can only be called by the current owner. Setting `newOwner` to the zero address is allowed; this can be used to cancel an initiated ownership transfer.\"},\"withdrawProceeds(uint256)\":{\"details\":\"Callable once, by the creator, once the auction has completed,      before or after migration. Pays the part of the raise not reserved      for liquidity. Protocol fees are routed to the fee recipient at buy      time, so the contract custodies exactly `totalRaised` per auction.\"}},\"stateVariables\":{\"MAX_SUPPLY_BOUND\":{\"details\":\"Parameter bounds that keep every curve computation inside      uint256: supply up to 10^18 whole tokens, prices up to 10^27      payment units per token, and raises up to 10^40 units. All far      beyond any real launch.\"},\"MIN_USABLE_TICK\":{\"details\":\"Full-range bounds for the 1% tier (tick spacing 200), i.e.      TickMath's MIN/MAX_TICK rounded inward to a multiple of 200.\"},\"_activePool\":{\"details\":\"Set only for the duration of a price-correction swap, so the swap      callback can be authenticated.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"MAX_FEE_BPS()\":{\"notice\":\"Upper bound on the protocol fee, so the owner can never set a         fee that confiscates a meaningful share of a purchase.\"},\"MAX_LP_FEE_SHARE_BPS()\":{\"notice\":\"Upper bound on the protocol's share of trading fees, so a         creator always keeps at least half.\"},\"MIN_LIQUIDITY_BPS()\":{\"notice\":\"Smallest share of the raise a creator may commit to the         Uniswap pool, so no launch ships with a token too thinly         traded to be usable.\"},\"POOL_FEE()\":{\"notice\":\"Pool fee tier for migrated liquidity: 1%, the usual tier for         newly launched, volatile tokens.\"},\"buyTokens(uint256,uint256,uint256)\":{\"notice\":\"Buy `amount` tokens (in token wei) from an auction that hasn't         graduated yet.\"},\"collectFees(uint256)\":{\"notice\":\"Collect the migrated pool's trading fees: the protocol takes its         share and the creator receives the rest. Anyone may trigger it.\"},\"createAuction((string,string,string,uint256,address,uint256,uint256,uint256,uint256))\":{\"notice\":\"Launch a token with custom curve parameters. Trading starts         immediately; the token graduates to Uniswap once `maxRaise` is         raised.\"},\"custodied(address)\":{\"notice\":\"Payment tokens this contract owes to auction creators, per token:         the sum of `totalRaised` across auctions not yet withdrawn.         Anything held above this is excess (e.g. tokens sent here         directly) and can be recovered with `sweep`.\"},\"getSpotPrice(uint256)\":{\"notice\":\"Price of the next whole token, in payment units \\u00d7 1e18.\"},\"launch(string,string,string)\":{\"notice\":\"One-click launch: name, symbol and metadata from the creator,         everything else from the protocol's standard preset.\"},\"launchPreset()\":{\"notice\":\"Parameters for one-click launches. Unset (zero payment token)         until the owner configures it.\"},\"migrate(uint256)\":{\"notice\":\"Move a completed auction's liquidity into Uniswap v3 and unlock         its token. Anyone may call it, so a creator can never hold the         token hostage by not migrating.\"},\"pause()\":{\"notice\":\"Emergency stop for new money: blocks launches and curve buys.         Every way out keeps working while paused (selling back to the         curve, migration, withdrawals and fee collection), so pausing         can never trap a holder's or creator's funds.\"},\"positionId(uint256)\":{\"notice\":\"The Uniswap position NFT holding each auction's liquidity. This         contract keeps it forever, so the liquidity is permanently locked.\"},\"sellTokens(uint256,uint256,uint256)\":{\"notice\":\"Sell `amount` tokens (in token wei) back to the curve of an         auction that hasn't graduated yet. The tokens are burned and the         seller is paid from the raise, at the curve price minus the         protocol fee.\"},\"setDefaultFeeBps(uint256)\":{\"notice\":\"Change the fee for auctions created from now on. Existing         auctions keep the fee they were created with, so a creator's         terms can never change mid-sale.\"},\"setDefaultLpFeeShareBps(uint256)\":{\"notice\":\"Change the protocol's share of trading fees for auctions created         from now on. Existing auctions keep the share they were created         with.\"},\"setLaunchPreset((address,uint256,uint256,uint256,uint256,uint256))\":{\"notice\":\"Set the parameters `launch` uses. Applies to launches from now         on; existing auctions are unaffected.\"},\"setProtocolFeeRecipient(address)\":{\"notice\":\"Change where protocol fees are sent. Applies to purchases made         after the change, in every auction.\"},\"sweep(address,address)\":{\"notice\":\"Recover tokens held above what is owed to auction creators,         such as tokens transferred to this contract directly. Funds         backing an unwithdrawn auction can never be swept.\"},\"withdrawProceeds(uint256)\":{\"notice\":\"Transfer an auction's raised payment tokens to its creator.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/TokenAuction.sol\":\"TokenAuction\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/access/Ownable.sol\":{\"keccak256\":\"0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6\",\"dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a\"]},\"lib/openzeppelin-contracts/contracts/access/Ownable2Step.sol\":{\"keccak256\":\"0xdcad8898fda432696597752e8ec361b87d85c82cb258115427af006dacf7128c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e2c9d517f0c136d54bd00cd57959d25681d4d6273f5bbbc263afe228303772f0\",\"dweb:/ipfs/QmReNFjXBiufByiAAzfSQ2SM5r3qeUErn46BmN3yVRvrek\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC1363.sol\":{\"keccak256\":\"0xd5ea07362ab630a6a3dee4285a74cf2377044ca2e4be472755ad64d7c5d4b69d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://da5e832b40fc5c3145d3781e2e5fa60ac2052c9d08af7e300dc8ab80c4343100\",\"dweb:/ipfs/QmTzf7N5ZUdh5raqtzbM11yexiUoLC9z3Ws632MCuycq1d\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC165.sol\":{\"keccak256\":\"0x0afcb7e740d1537b252cb2676f600465ce6938398569f09ba1b9ca240dde2dfc\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1c299900ac4ec268d4570ecef0d697a3013cd11a6eb74e295ee3fbc945056037\",\"dweb:/ipfs/Qmab9owJoxcA7vJT5XNayCMaUR1qxqj1NDzzisduwaJMcZ\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC20.sol\":{\"keccak256\":\"0x1a6221315ce0307746c2c4827c125d821ee796c74a676787762f4778671d4f44\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1bb2332a7ee26dd0b0de9b7fe266749f54820c99ab6a3bcb6f7e6b751d47ee2d\",\"dweb:/ipfs/QmcRWpaBeCYkhy68PR3B4AgD7asuQk7PwkWxrvJbZcikLF\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x1b88b3fb3d85ba5496d7d5f396f83ee1fddcdd6762059ff65992655b67920998\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://89393bb3212da1c0889601b9706a07b39419ddc4d2faab9eaf6e7f9152cf6a1c\",\"dweb:/ipfs/QmcCfzzxv1Bkdz1c1yF4gQCeYb6Us5BJANnzTFqawfd1HL\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0x669464167428061ee0f8618b73b3ee90aff8405683e7ddde8cd77dadaa1afe29\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0dda78587a7358b4fdf6b9fca0fde5a5e34930f36d5268a16028627fc0170195\",\"dweb:/ipfs/QmQ1b6cCceDRWNxti9HifsTCzmVP25Haxs1bWugm52vTqH\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x74ed01eb66b923d0d0cfe3be84604ac04b76482a55f9dd655e1ef4d367f95bc2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5282825a626cfe924e504274b864a652b0023591fa66f06a067b25b51ba9b303\",\"dweb:/ipfs/QmeCfPykghhMc81VJTrHTC7sF6CRvaA1FXVq2pJhwYp1dV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xd6fa4088198f04eef10c5bce8a2f4d60554b7ec4b987f684393c01bf79b94d9f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f95ee0bbd4dd3ac730d066ba3e785ded4565e890dbec2fa7d3b9fe3bad9d0d6e\",\"dweb:/ipfs/QmSLr6bHkPFWT7ntj34jmwfyskpwo97T9jZUrk5sz3sdtR\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x304d732678032a9781ae85c8f204c8fba3d3a5e31c02616964e75cfdc5049098\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://299ced486011781dc98f638059678323c03079fefae1482abaa2135b22fa92d0\",\"dweb:/ipfs/QmbZNbcPTBxNvwChavN2kkZZs7xHhYL7mv51KrxMhsMs3j\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/Panic.sol\":{\"keccak256\":\"0xf7fe324703a64fc51702311dc51562d5cb1497734f074e4f483bfb6717572d7a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c6a5ff4f9fd8649b7ee20800b7fa387d3465bd77cf20c2d1068cd5c98e1ed57a\",\"dweb:/ipfs/QmVSaVJf9FXFhdYEYeCEfjMVHrxDh5qL4CGkxdMWpQCrqG\"]},\"lib/openzeppelin-contracts/contracts/utils/Pausable.sol\":{\"keccak256\":\"0xdb484371dfbb848cb6f5d70464e9ac9b2900e4164ead76bbce4fef0b44bcc68f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f9d6f6f6600a2bec622f699081b58350873b5e63ce05464d17d674a290bb8a7c\",\"dweb:/ipfs/QmQKVzSQY1PM3Bid4QhgVVZyx6B4Jx7XgaQzLKHj38vJz8\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xa516cbf1c7d15d3517c2d668601ce016c54395bf5171918a14e2686977465f53\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1e1d079e8edfb58efd23a311e315a4807b01b5d1cf153f8fa2d0608b9dec3e99\",\"dweb:/ipfs/QmTBExeX2SDTkn5xbk5ssbYSx7VqRp9H4Ux1CY4uQM4b9N\"]},\"lib/openzeppelin-contracts/contracts/utils/StorageSlot.sol\":{\"keccak256\":\"0xcf74f855663ce2ae00ed8352666b7935f6cddea2932fdf2c3ecd30a9b1cd0e97\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9f660b1f351b757dfe01438e59888f31f33ded3afcf5cb5b0d9bf9aa6f320a8b\",\"dweb:/ipfs/QmarDJ5hZEgBtCmmrVzEZWjub9769eD686jmzb2XpSU1cM\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x8891738ffe910f0cf2da09566928589bf5d63f4524dd734fd9cedbac3274dd5c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://971f954442df5c2ef5b5ebf1eb245d7105d9fbacc7386ee5c796df1d45b21617\",\"dweb:/ipfs/QmadRjHbkicwqwwh61raUEapaVEtaLMcYbQZWs9gUkgj3u\"]},\"lib/openzeppelin-contracts/contracts/utils/math/Math.sol\":{\"keccak256\":\"0x59973a93b1f983f94e10529f46ca46544a9fec2b5f56fb1390bbe9e0dc79f857\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c55ef8f0b9719790c2ae6f81d80a59ffb89f2f0abe6bc065585bd79edce058c5\",\"dweb:/ipfs/QmNNmCbX9NjPXKqHJN8R1WC2rNeZSQrPZLd6FF6AKLyH5Y\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SafeCast.sol\":{\"keccak256\":\"0xc8cae21c9ae4a46e5162ff9bf5b351d6fa6a6eba72d515f3bc1bdfeda7fdf083\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ce830ebcf28e31643caba318996db3763c36d52cd0f23798ba83c135355d45e9\",\"dweb:/ipfs/QmdGPcvptHN7UBCbUYBbRX3hiRVRFLRwno8b4uga6uFNif\"]},\"src/AuctionToken.sol\":{\"keccak256\":\"0xb95a51fbf0d9f1b9fd907333184e49bbd9ed3d3483bff1d3b2219257b99f5489\",\"urls\":[\"bzz-raw://36ea7fdd539dbfb02f2fbfc86acf86c3292cda6b122ea0c142c8215bce742876\",\"dweb:/ipfs/QmcwmYt4GcLrAiQ9f66okET6LpBYnDmQPLNWKG8meKTZ4x\"]},\"src/BondingCurve.sol\":{\"keccak256\":\"0xcecf8452b4874a79822fb9220c7214bf457e68ed07930a0d4825859c2604cd52\",\"urls\":[\"bzz-raw://bd4f77a78f63bf53544a45cd0d37e1da20a0e1aac5a893a62aca3aaeecad5101\",\"dweb:/ipfs/QmYtjpeLoTpTZuZxvr3yZRkAQ7dmtewXmRnoY63Rp5Jd9X\"]},\"src/TokenAuction.sol\":{\"keccak256\":\"0x66580ec331c362438086bab6d5d13a8e1ffdb848b7065f03075e329e10923034\",\"urls\":[\"bzz-raw://cd63f8675bd35f3a3a44ee683e4a16f65401d79ac8dbe12dae6e4cac827aca4c\",\"dweb:/ipfs/QmccQcRVhdtqupc85FopdDwJbEpUixA8y8Jn9XSye8m2VQ\"]},\"src/interfaces/IUniswapV3.sol\":{\"keccak256\":\"0x773e06f4c1ff91c0a1ee79d5fe77a3340b79625edb29773ddad1ed88769d27d0\",\"urls\":[\"bzz-raw://17946a5bd6c253000d6b0a3d5691ac163b40273fde3645534a3ed050a70053de\",\"dweb:/ipfs/QmPLHEnBjx1bbpBmwVAYqiD7KJDMvQY3jWoeWTMs81fwsm\"]}},\"version\":1}",
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
          "inputs": [],
          "type": "error",
          "name": "EnforcedPause"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ExpectedPause"
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
          "name": "OwnershipTransferStarted",
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
              "internalType": "address",
              "name": "account",
              "type": "address",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Paused",
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
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Unpaused",
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
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "acceptOwnership"
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
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "pause"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "paused",
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
          "name": "pendingOwner",
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
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "unpause"
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
          "acceptOwnership()": {
            "details": "The new owner accepts the ownership transfer."
          },
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
          "paused()": {
            "details": "Returns true if the contract is paused, and false otherwise."
          },
          "pendingOwner()": {
            "details": "Returns the address of the pending owner."
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
            "details": "Starts the ownership transfer of the contract to a new account. Replaces the pending transfer if there is one. Can only be called by the current owner. Setting `newOwner` to the zero address is allowed; this can be used to cancel an initiated ownership transfer."
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
          "getSpotPrice(uint256)": {
            "notice": "Price of the next whole token, in payment units \u00d7 1e18."
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
          "pause()": {
            "notice": "Emergency stop for new money: blocks launches and curve buys.         Every way out keeps working while paused (selling back to the         curve, migration, withdrawals and fee collection), so pausing         can never trap a holder's or creator's funds."
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
      "lib/openzeppelin-contracts/contracts/access/Ownable2Step.sol": {
        "keccak256": "0xdcad8898fda432696597752e8ec361b87d85c82cb258115427af006dacf7128c",
        "urls": [
          "bzz-raw://e2c9d517f0c136d54bd00cd57959d25681d4d6273f5bbbc263afe228303772f0",
          "dweb:/ipfs/QmReNFjXBiufByiAAzfSQ2SM5r3qeUErn46BmN3yVRvrek"
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
      "lib/openzeppelin-contracts/contracts/utils/Pausable.sol": {
        "keccak256": "0xdb484371dfbb848cb6f5d70464e9ac9b2900e4164ead76bbce4fef0b44bcc68f",
        "urls": [
          "bzz-raw://f9d6f6f6600a2bec622f699081b58350873b5e63ce05464d17d674a290bb8a7c",
          "dweb:/ipfs/QmQKVzSQY1PM3Bid4QhgVVZyx6B4Jx7XgaQzLKHj38vJz8"
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
        "keccak256": "0xb95a51fbf0d9f1b9fd907333184e49bbd9ed3d3483bff1d3b2219257b99f5489",
        "urls": [
          "bzz-raw://36ea7fdd539dbfb02f2fbfc86acf86c3292cda6b122ea0c142c8215bce742876",
          "dweb:/ipfs/QmcwmYt4GcLrAiQ9f66okET6LpBYnDmQPLNWKG8meKTZ4x"
        ],
        "license": null
      },
      "src/BondingCurve.sol": {
        "keccak256": "0xcecf8452b4874a79822fb9220c7214bf457e68ed07930a0d4825859c2604cd52",
        "urls": [
          "bzz-raw://bd4f77a78f63bf53544a45cd0d37e1da20a0e1aac5a893a62aca3aaeecad5101",
          "dweb:/ipfs/QmYtjpeLoTpTZuZxvr3yZRkAQ7dmtewXmRnoY63Rp5Jd9X"
        ],
        "license": null
      },
      "src/TokenAuction.sol": {
        "keccak256": "0x66580ec331c362438086bab6d5d13a8e1ffdb848b7065f03075e329e10923034",
        "urls": [
          "bzz-raw://cd63f8675bd35f3a3a44ee683e4a16f65401d79ac8dbe12dae6e4cac827aca4c",
          "dweb:/ipfs/QmccQcRVhdtqupc85FopdDwJbEpUixA8y8Jn9XSye8m2VQ"
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
  "id": 39
} as const;
