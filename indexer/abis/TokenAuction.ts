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
      "name": "claim",
      "inputs": [
        {
          "name": "token",
          "type": "address",
          "internalType": "contract IERC20"
        }
      ],
      "outputs": [
        {
          "name": "amount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "claimProtocolFees",
      "inputs": [
        {
          "name": "token",
          "type": "address",
          "internalType": "contract IERC20"
        }
      ],
      "outputs": [
        {
          "name": "amount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "claimable",
      "inputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
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
      "name": "paymentTokenAllowed",
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
      "name": "protocolFees",
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
      "name": "setPaymentTokenAllowed",
      "inputs": [
        {
          "name": "token",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "allowed",
          "type": "bool",
          "internalType": "bool"
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
      "name": "Claimed",
      "inputs": [
        {
          "name": "token",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "account",
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
      "name": "PaymentTokenAllowedUpdated",
      "inputs": [
        {
          "name": "token",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "allowed",
          "type": "bool",
          "indexed": false,
          "internalType": "bool"
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
      "name": "ProtocolFeesClaimed",
      "inputs": [
        {
          "name": "token",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "recipient",
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
    "object": "0x60a060405234801562000010575f80fd5b5060405162005aec38038062005aec83398101604081905262000033916200022c565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f005533806200007e57604051631e4fbdf760e01b81525f60048201526024015b60405180910390fd5b6200008981620001aa565b506001600160a01b038316620000d75760405162461bcd60e51b815260206004820152601260248201527116995c9bc8199959481c9958da5c1a595b9d60721b604482015260640162000075565b6001600160a01b0381166200012f5760405162461bcd60e51b815260206004820152601560248201527f5a65726f20706f736974696f6e206d616e616765720000000000000000000000604482015260640162000075565b6001600160a01b0381166080526103e88211156200017f5760405162461bcd60e51b815260206004820152600c60248201526b08ccaca40e8dede40d0d2ced60a31b604482015260640162000075565b50600680546001600160a01b0319166001600160a01b03939093169290921790915560075562000271565b600180546001600160a01b0319169055620001c581620001c8565b50565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0381168114620001c5575f80fd5b5f805f606084860312156200023f575f80fd5b83516200024c8162000217565b602085015160408601519194509250620002668162000217565b809150509250925092565b608051615831620002bb5f395f8181610623015281816111de01528181611e70015281816132240152818161325f01528181613287015281816134d3015261350e01526158315ff3fe608060405234801562000010575f80fd5b5060043610620002ac575f3560e01c8063709ef2311162000173578063bcae25a411620000db578063e30c3978116200008f578063e30c39781462000773578063e521cb921462000785578063efc20dad146200079c578063f2fde38b14620007c9578063fa461e3314620007e0578063fdfae48614620007f7575f80fd5b8063bcae25a414620006da578063d4570c1c14620006e4578063d55be8c61462000711578063d9f1aed9146200071b578063dcf844a71462000732578063dd1b9c4a1462000754575f80fd5b806383966021116200013357806383966021146200064f5780638456cb59146200067a5780638da5cb5b1462000684578063a4ce25a71462000695578063b17acdcd14620006ac578063b8dc491b14620006c3575f80fd5b8063709ef23114620005f2578063715018a6146200060957806375f0c2f01462000613578063791b98bc146200061d57806379ba50971462000645575f80fd5b806342f78e911162000217578063571a26a011620001d7578063571a26a014620004a55780635c471ad514620005625780635c975abb146200058457806364df049e1462000597578063683931b414620005c457806369ce6d4714620005db575f80fd5b806342f78e9114620003d05780634373a2861462000430578063454b0608146200044757806348f719e5146200045e57806354147e9e1462000483575f80fd5b806328336098116200026f57806328336098146200036d5780632ad7157314620003845780633edb917d146200038e5780633ef068d214620003985780633f4ba83a14620003af57806342a8151514620003b9575f80fd5b806306d49f9214620002b057806309e0625914620002ea5780630fda366d1462000303578063121a257f14620003295780631e83409a1462000356575b5f80fd5b620002d5620002c136600462003e42565b600b6020525f908152604090205460ff1681565b60405190151581526020015b60405180910390f35b62000301620002fb36600462003e60565b62000801565b005b6200031a6200031436600462003e60565b62000895565b604051908152602001620002e1565b620003406200033a36600462003e78565b620008c6565b60408051928352602083019190915201620002e1565b6200031a6200036736600462003e42565b62000922565b620003016200037e36600462003ea7565b62000a4e565b6200031a60025481565b6200031a600c5481565b62000301620003a936600462003ee3565b62000b03565b6200030162000c96565b6200031a620003ca36600462003f42565b62000cac565b601054601154601254601354601454601554620003f8956001600160a01b0316949392919086565b604080516001600160a01b0390971687526020870195909552938501929092526060840152608083015260a082015260c001620002e1565b620003016200044136600462003e60565b62000e51565b620003016200045836600462003e60565b62000edf565b620002d56200046f36600462003e60565b60056020525f908152604090205460ff1681565b6200031a6200049436600462003e60565b600d6020525f908152604090205481565b62000550620004b636600462003e60565b600360208181525f92835260409283902083516101208101855281546001600160a01b03908116825260018301548116938201939093526002820154948101949094529182015460608401526004820154608084015260058201541660a0830152600681015460c0830152600781015460e083015260088101546101008301526009810154600a820154600b9092015460ff909116919084565b604051620002e1949392919062004014565b6200031a6200057336600462003e42565b60086020525f908152604090205481565b600154600160a01b900460ff16620002d5565b600654620005ab906001600160a01b031681565b6040516001600160a01b039091168152602001620002e1565b6200031a620005d5366004620040c1565b620014bd565b6200031a620005ec36600462003e42565b620014e3565b6200030162000603366004620040fc565b620015e3565b6200030162001973565b6200031a6107d081565b620005ab7f000000000000000000000000000000000000000000000000000000000000000081565b6200030162001988565b620005ab6200066036600462003e60565b600e6020525f90815260409020546001600160a01b031681565b62000301620019cd565b5f546001600160a01b0316620005ab565b62000301620006a6366004620040fc565b620019e1565b62000340620006bd36600462003e60565b62001d6d565b62000301620006d436600462004126565b62002023565b6200031a60075481565b6200031a620006f536600462004126565b600a60209081525f928352604080842090915290825290205481565b6200031a6103e881565b620003016200072c36600462003e60565b620021dc565b6200031a6200074336600462003e42565b60096020525f908152604090205481565b6200075e61271081565b60405162ffffff9091168152602001620002e1565b6001546001600160a01b0316620005ab565b620003016200079636600462003e42565b62002452565b6200031a620007ad36600462004157565b600460209081525f928352604080842090915290825290205481565b62000301620007da36600462003e42565b62002504565b62000301620007f13660046200417d565b62002577565b6200031a61138881565b6200080b6200263c565b611388811115620008545760405162461bcd60e51b815260206004820152600e60248201526d0a6d0c2e4ca40e8dede40d0d2ced60931b60448201526064015b60405180910390fd5b600c5460408051918252602082018390527fafd7016dba95bc0c303b0838ae8e4829497ed18cc6a0ed00eec5fc7c50148e17910160405180910390a1600c55565b5f8181526003602081905260408220600b8101546002820154928201549192620008bf926200266a565b9392505050565b5f8281526003602081905260408220600b8101546002820154928201548493620008f4929187919062002694565b6006820154909350612710906200090c9085620041e4565b62000918919062004212565b9150509250929050565b5f6200092d6200272d565b506001600160a01b0381165f908152600a6020908152604080832033845290915290205480620009935760405162461bcd60e51b815260206004820152601060248201526f4e6f7468696e6720746f20636c61696d60801b60448201526064016200084b565b6001600160a01b0382165f818152600a602090815260408083203384528252808320839055928252600890529081208054839290620009d490849062004228565b90915550620009f090506001600160a01b03831633836200274b565b60405181815233906001600160a01b038416907ff7a40077ff7a04c7e61f6f26fb13774259ddf1b6bce9ecf26a8276cdd3992683906020015b60405180910390a362000a4960015f80516020620057dc83398151915255565b919050565b62000a586200263c565b6001600160a01b03821662000aa55760405162461bcd60e51b81526020600482015260126024820152712d32b937903830bcb6b2b73a103a37b5b2b760711b60448201526064016200084b565b6001600160a01b0382165f818152600b6020908152604091829020805460ff191685151590811790915591519182527f359d3f0085554124a1c9fc8f53602b98df473a1d955d73500399fb2ef8b8cf18910160405180910390a25050565b62000b0d6200263c565b5f62000b1d602083018362003e42565b6001600160a01b03160362000b6a5760405162461bcd60e51b81526020600482015260126024820152712d32b937903830bcb6b2b73a103a37b5b2b760711b60448201526064016200084b565b600b5f62000b7c602084018462003e42565b6001600160a01b0316815260208101919091526040015f205460ff1662000be25760405162461bcd60e51b815260206004820152601960248201527814185e5b595b9d081d1bdad95b881b9bdd08185b1b1bddd959603a1b60448201526064016200084b565b62000c0581602001358260400135836060013584608001358560a0013562002784565b80601062000c1482826200423e565b507f29f62c75478dac4ea9396c9b5e58b4e29d6f7812c6eb05ceaf5d0c776db6b576905062000c47602083018362003e42565b604080516001600160a01b039092168252602080850135908301528084013590820152606080840135908201526080808401359082015260a0808401359082015260c00160405180910390a150565b62000ca06200263c565b62000caa620029e5565b565b5f62000cb762002a3c565b6040805160c0810182526010546001600160a01b03168082526011546020830152601254928201929092526013546060820152601454608082015260155460a08201529062000d3c5760405162461bcd60e51b815260206004820152601060248201526f139bc81b185d5b98da081c1c995cd95d60821b60448201526064016200084b565b604080516101406020601f8b018190040282018101909252610120810189815262000e45928291908c908c90819085018382808284375f92019190915250505090825250604080516020601f8b0181900481028201810190925289815291810191908a908a90819084018382808284375f92019190915250505090825250604080516020601f8901819004810282018101909252878152918101919088908890819084018382808284375f920191909152505050908252506020848101519082015283516001600160a01b031660408083019190915284015160608083019190915284015160808083019190915284015160a08083019190915284015160c09091015262002a68565b98975050505050505050565b62000e5b6200263c565b6103e881111562000e9e5760405162461bcd60e51b815260206004820152600c60248201526b08ccaca40e8dede40d0d2ced60a31b60448201526064016200084b565b60075460408051918252602082018390527f3062378541f1b58e0547bfb13e7d7585153e442e477e263c6e63d4775b3072a6910160405180910390a1600755565b62000ee96200272d565b5f8181526003602052604090206002600982015460ff16600381111562000f145762000f1462003fdf565b1462000f5b5760405162461bcd60e51b8152602060048201526015602482015274105d58dd1a5bdb881b9bdd0818dbdb5c1b195d1959605a1b60448201526064016200084b565b5f62000f678262002c54565b90505f62000f8783600b0154845f0160020154855f01600301546200266a565b90505f62000faa8362000fa3670de0b6b3a764000080620041e4565b8462002c7c565b6040805160c0810182525f606082018190526080820181905260a0820181905287546001600160a01b0390811680845260018a015490911660208085018290529181118486015260098a01805460ff19166003179055825260089052918220805493945090928692906200102090849062004228565b909155505060208101516040516370a0823160e01b815230600482015285916001600160a01b0316906370a0823190602401602060405180830381865afa1580156200106e573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906200109491906200429d565b620010a0919062004228565b816080018181525050805f01516001600160a01b031663af35c6c76040518163ffffffff1660e01b81526004015f604051808303815f87803b158015620010e5575f80fd5b505af1158015620010f8573d5f803e3d5ffd5b505050505f841180156200110b57505f82115b15620012755780516040516340c10f1960e01b8152306004820152602481018490526001600160a01b03909116906340c10f19906044015f604051808303815f87803b1580156200115a575f80fd5b505af11580156200116d573d5f803e3d5ffd5b505050506200118183826040015162002d36565b6001600160a01b031660608201525f806200119c8362002e47565b60608501516040516309f56ab160e11b81526001600160a01b0380851660048301528084166024830152612710604483015291821660648201529294509092507f000000000000000000000000000000000000000000000000000000000000000016906313ead562906084016020604051808303815f875af115801562001225573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906200124b9190620042b5565b6001600160a01b031660a08401526200126683858862002e71565b6200127288846200310d565b50505b80516040516370a0823160e01b81523060048201525f916001600160a01b0316906370a0823190602401602060405180830381865afa158015620012bb573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620012e191906200429d565b9050801562001345578151604051630852cd8d60e31b8152600481018390526001600160a01b03909116906342966c68906024015f604051808303815f87803b1580156200132d575f80fd5b505af115801562001340573d5f803e3d5ffd5b505050505b608082015160208301516040516370a0823160e01b81523060048201525f92916001600160a01b0316906370a0823190602401602060405180830381865afa15801562001394573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620013ba91906200429d565b620013c6919062004228565b9050801562001448576020808401516001600160a01b039081165f908152600a8352604080822060058c0154909316825291909252812080548392906200140f908490620042d3565b90915550506020808401516001600160a01b03165f908152600890915260408120805483929062001442908490620042d3565b90915550505b825f01516001600160a01b031663715018a66040518163ffffffff1660e01b81526004015f604051808303815f87803b15801562001484575f80fd5b505af115801562001497573d5f803e3d5ffd5b5050505050505050505050620014ba60015f80516020620057dc83398151915255565b50565b5f620014c862002a3c565b620014dd620014d783620043bb565b62002a68565b92915050565b5f620014ee6200272d565b506001600160a01b0381165f9081526009602052604090205480620015495760405162461bcd60e51b815260206004820152601060248201526f4e6f7468696e6720746f20636c61696d60801b60448201526064016200084b565b6001600160a01b0382165f9081526009602090815260408083208390556008909152812080548392906200157f90849062004228565b9091555050600654620015a0906001600160a01b038481169116836200274b565b6006546040518281526001600160a01b03918216918416907f4f8a50ec1fe3d316970fdadd1f94e0b822f92d31e2bac3c9dc2c6c287de071079060200162000a29565b620015ed6200272d565b5f8381526003602052604090206001600982015460ff16600381111562001618576200161862003fdf565b146200165c5760405162461bcd60e51b815260206004820152601260248201527141756374696f6e206e6f742061637469766560701b60448201526064016200084b565b5f83116200169b5760405162461bcd60e51b815260206004820152600b60248201526a16995c9bc8185b5bdd5b9d60aa1b60448201526064016200084b565b5f848152600460209081526040808320338452909152902054831115620016f75760405162461bcd60e51b815260206004820152600f60248201526e457863656564732062616c616e636560881b60448201526064016200084b565b5f6200171682600b015485845f0160020154855f016003015462003534565b90505f612710835f016006015483620017309190620041e4565b6200173c919062004212565b9050836200174b828462004228565b10156200178f5760405162461bcd60e51b815260206004820152601160248201527014db1a5c1c1859d948195e18d959591959607a1b60448201526064016200084b565b6001830154600a840180546001600160a01b03909216918491905f90620017b890849062004228565b925050819055508584600b015f828254620017d4919062004228565b90915550505f878152600460209081526040808320338452909152812080548892906200180390849062004228565b90915550620018159050828462004228565b6001600160a01b0382165f90815260086020526040812080549091906200183e90849062004228565b90915550506001600160a01b0381165f90815260096020526040812080548492906200186c908490620042d3565b9091555050835460405163079cc67960e41b8152336004820152602481018890526001600160a01b03909116906379cc6790906044015f604051808303815f87803b158015620018ba575f80fd5b505af1158015620018cd573d5f803e3d5ffd5b50505050620018f6338385620018e4919062004228565b6001600160a01b03841691906200274b565b600a840154600b850154604080518981526020810187905290810185905260608101929092526080820152339088907fd7fd93110c86e222ad62b2a786fdc3afd88c4c21f9092614ca01365ba432073c9060a00160405180910390a3505050506200196e60015f80516020620057dc83398151915255565b505050565b6200197d6200263c565b62000caa5f620035cf565b60015433906001600160a01b03168114620019c25760405163118cdaa760e01b81526001600160a01b03821660048201526024016200084b565b620014ba81620035cf565b620019d76200263c565b62000caa620035ea565b620019eb6200272d565b620019f562002a3c565b5f8381526003602052604090206001600982015460ff16600381111562001a205762001a2062003fdf565b1462001a645760405162461bcd60e51b815260206004820152601260248201527141756374696f6e206e6f742061637469766560701b60448201526064016200084b565b5f831162001aa35760405162461bcd60e51b815260206004820152600b60248201526a16995c9bc8185b5bdd5b9d60aa1b60448201526064016200084b565b5f8062001ab1838662003630565b600686015492975090935091505f906127109062001ad09085620041e4565b62001adc919062004212565b90508462001aeb8285620042d3565b111562001b2f5760405162461bcd60e51b815260206004820152601160248201527014db1a5c1c1859d948195e18d959591959607a1b60448201526064016200084b565b8284600a015f82825462001b449190620042d3565b925050819055508584600b015f82825462001b609190620042d3565b90915550505f8781526004602090815260408083203384529091528120805488929062001b8f908490620042d3565b9091555062001ba190508184620042d3565b60018501546001600160a01b03165f908152600860205260408120805490919062001bce908490620042d3565b909155505060018401546001600160a01b03165f908152600960205260408120805483929062001c00908490620042d3565b9091555050811562001c1c5760098401805460ff191660021790555b600184015462001c41906001600160a01b031662001c3b8386620042d3565b620036f2565b83546040516340c10f1960e01b8152336004820152602481018890526001600160a01b03909116906340c10f19906044015f604051808303815f87803b15801562001c8a575f80fd5b505af115801562001c9d573d5f803e3d5ffd5b50505050600a840154600b850154604080518981526020810187905290810184905260608101929092526080820152339088907fc938e879cd47aa84d5893377578d6c211ccd96f382228c42c1bb6a8eaa71a0849060a00160405180910390a3811562001d5157867fc7502df20ccf846bf5005f01564bb502b56dcec19f0e2d0575c4369cc5e3b53b85600a015486600b015460405162001d48929190918252602082015260400190565b60405180910390a25b505050506200196e60015f80516020620057dc83398151915255565b5f8062001d796200272d565b5f83815260036020819052604090912090600982015460ff16600381111562001da65762001da662003fdf565b14801562001dc057505f848152600d602052604090205415155b62001dfc5760405162461bcd60e51b815260206004820152600b60248201526a2737903837b9b4ba34b7b760a91b60448201526064016200084b565b604080516080810182525f868152600d6020908152838220548352309083019081526001600160801b0383850181815260608501828152955163fc6f786560e01b81529451600486015291516001600160a01b039081166024860152915181166044850152935190931660648301529182917f00000000000000000000000000000000000000000000000000000000000000009091169063fc6f78659060840160408051808303815f875af115801562001eb8573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062001ede91906200449f565b600185015485549294509092506001600160a01b039081169116108062001f0757818362001f0a565b82825b600886015491975095505f906127109062001f269089620041e4565b62001f32919062004212565b90505f612710865f01600801548862001f4c9190620041e4565b62001f58919062004212565b8654600588015491925062001f7c916001600160a01b039182169116848b6200383e565b6001860154600587015462001fa0916001600160a01b039081169116838a6200383e565b887f8dcde09e464f5c324d7cbf62dbc0c647b8ad9242592ae364153f2549f4898d0462001fce848b62004228565b62001fda848b62004228565b60408051928352602083019190915281018590526060810184905260800160405180910390a25050505050506200201e60015f80516020620057dc83398151915255565b915091565b6200202d6200272d565b620020376200263c565b6001600160a01b038116620020805760405162461bcd60e51b815260206004820152600e60248201526d16995c9bc81c9958da5c1a595b9d60921b60448201526064016200084b565b6040516370a0823160e01b81523060048201525f906001600160a01b038416906370a0823190602401602060405180830381865afa158015620020c5573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620020eb91906200429d565b6001600160a01b0384165f908152600860205260409020549091508082116200214a5760405162461bcd60e51b815260206004820152601060248201526f04e6f7468696e6720746f2073776565760841b60448201526064016200084b565b5f62002157828462004228565b90506200216f6001600160a01b03861685836200274b565b836001600160a01b0316856001600160a01b03167f7b09c29f9106defeccc9ac3b823f3aad0b470d120e5df7aed033b5c43a4bf71883604051620021b591815260200190565b60405180910390a3505050620021d860015f80516020620057dc83398151915255565b5050565b620021e66200272d565b5f81815260036020526040902060058101546001600160a01b031633146200223f5760405162461bcd60e51b815260206004820152600b60248201526a2737ba1031b932b0ba37b960a91b60448201526064016200084b565b6002600982015460ff1660038111156200225d576200225d62003fdf565b14806200228557506003600982015460ff16600381111562002283576200228362003fdf565b145b620022cb5760405162461bcd60e51b8152602060048201526015602482015274105d58dd1a5bdb881b9bdd0818dbdb5c1b195d1959605a1b60448201526064016200084b565b5f8281526005602052604090205460ff16156200231f5760405162461bcd60e51b815260206004820152601160248201527020b63932b0b23c903bb4ba34323930bbb760791b60448201526064016200084b565b5f6200232b8262002c54565b82600a01546200233c919062004228565b90505f8111620023855760405162461bcd60e51b81526020600482015260136024820152724e6f7468696e6720746f20776974686472617760681b60448201526064016200084b565b5f838152600560209081526040808320805460ff191660019081179091558501546001600160a01b03168352600890915281208054839290620023ca90849062004228565b909155505060058201546001830154620023f2916001600160a01b039182169116836200274b565b60058201546040518281526001600160a01b039091169084907f579e0e2d0cfdb23711bb6034ac9f2ba41e8965a8e24589d1c3cf5604868661fc9060200160405180910390a35050620014ba60015f80516020620057dc83398151915255565b6200245c6200263c565b6001600160a01b038116620024a95760405162461bcd60e51b815260206004820152601260248201527116995c9bc8199959481c9958da5c1a595b9d60721b60448201526064016200084b565b6006546040516001600160a01b038084169216907fd3890fc76afcfc31cba1dcf2c27b50e2541e4d75039c981855b5b5e03682aea0905f90a3600680546001600160a01b0319166001600160a01b0392909216919091179055565b6200250e6200263c565b600180546001600160a01b0383166001600160a01b031990911681179091556200253f5f546001600160a01b031690565b6001600160a01b03167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b600f546001600160a01b0316158015906200259c5750600f546001600160a01b031633145b620025e25760405162461bcd60e51b8152602060048201526015602482015274556e617574686f72697a65642063616c6c6261636b60581b60448201526064016200084b565b5f80620025f28385018562004126565b915091505f8613156200261557620026156001600160a01b03831633886200274b565b5f8513156200263457620026346001600160a01b03821633876200274b565b505050505050565b5f546001600160a01b0316331462000caa5760405163118cdaa760e01b81523360048201526024016200084b565b5f620026808285670de0b6b3a764000062002c7c565b6200268c9084620042d3565b949350505050565b5f80620026b88486620026b0670de0b6b3a764000080620041e4565b6001620038ea565b90505f620027148487620026ce8a6002620041e4565b620026da9190620042d3565b620026e69089620041e4565b670de0b6b3a7640000620026fb8180620041e4565b62002708906002620041e4565b620026b09190620041e4565b9050620027228183620042d3565b979650505050505050565b6200273762003937565b60025f80516020620057dc83398151915255565b6200275a838383600162003968565b6200196e57604051635274afe760e01b81526001600160a01b03841660048201526024016200084b565b5f8411620027c75760405162461bcd60e51b815260206004820152600f60248201526e5a65726f206261736520707269636560881b60448201526064016200084b565b5f8211620028095760405162461bcd60e51b815260206004820152600e60248201526d5a65726f206d617820726169736560901b60448201526064016200084b565b6107d081101580156200281e57506127108111155b6200286c5760405162461bcd60e51b815260206004820152601760248201527f496e76616c6964206c697175696469747920736861726500000000000000000060448201526064016200084b565b6ec097ce7bc90715b34b9f100000000085111580156200289f5750722cd76fe086b93ce2f768a00b22a000000000008411155b8015620028bf5750722cd76fe086b93ce2f768a00b22a000000000008311155b8015620028dd5750701d6329f1c35ca4bfabb9f56100000000008211155b6200291d5760405162461bcd60e51b815260206004820152600f60248201526e4375727665206f766572666c6f777360881b60448201526064016200084b565b5f6200292d5f8487878a620039cc565b90505f6200293d8287876200266a565b90505f6200297c612710620029538688620041e4565b6200295f919062004212565b62002973670de0b6b3a764000080620041e4565b846001620038ea565b9050876200298b8285620042d3565b1115620029db5760405162461bcd60e51b815260206004820152601e60248201527f537570706c7920746f6f20736d616c6c20666f72206c6971756964697479000060448201526064016200084b565b5050505050505050565b620029ef62003a73565b6001805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b600154600160a01b900460ff161562000caa5760405163d93c066560e01b815260040160405180910390fd5b60808101516001600160a01b03165f908152600b602052604081205460ff1662002ad15760405162461bcd60e51b815260206004820152601960248201527814185e5b595b9d081d1bdad95b881b9bdd08185b1b1bddd959603a1b60448201526064016200084b565b62002af582606001518360a001518460c001518560e0015186610100015162002784565b60028054905f62002b0683620044c2565b9190505590505f825f01518360200151846060015130866040015160405162002b2f9062003e12565b62002b3f95949392919062004522565b604051809103905ff08015801562002b59573d5f803e3d5ffd5b505f8381526003602081905260409182902080546001600160a01b03199081166001600160a01b0386811691909117835560808901516001808501805485169383169390931790925560a08a01516002850181905560c08b015195850186905560e08b015160048601819055600586018054339616861790556007805460068801556101008d0151908701819055600c54600888015560098701805460ff19169095179094558b88015197519899509497889794968b967f78f87bd22347e4e37db1ab310c6ce7e1780121e5e48207cd0b02d39ee87d28349662002c44968d96959490919062004576565b60405180910390a3505050919050565b5f612710825f016007015483600a015462002c709190620041e4565b620014dd919062004212565b5f805f62002c8b868662003a9e565b91509150815f0362002cb45783818162002ca95762002ca9620041fe565b0492505050620008bf565b81841162002cce5762002cce600385150260111862003aba565b5f848688095f868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010185841190960395909502919093039390930492909217029150509392505050565b5f805f8362002d5a5762002d53670de0b6b3a764000080620041e4565b8562002d6f565b8462002d6f670de0b6b3a764000080620041e4565b90925090505f600160401b62002d86838562004212565b1062002db157604062002da962002da385600160401b8662002c7c565b62003acb565b901b62002dc6565b62002dc662002da384600160c01b8562002c7c565b90506401000276a38111801562002df0575073fffd8963efd1fc6a506488495d951d5263988d2681105b62002e3e5760405162461bcd60e51b815260206004820152601b60248201527f5072696365206f75747369646520556e69737761702072616e6765000000000060448201526064016200084b565b95945050505050565b5f80826040015162002e60576020830151835162002e68565b825160208401515b91509150915091565b5f8360a0015190505f816001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa15801562002eb7573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062002edd9190620045d9565b505050505050905084606001516001600160a01b0316816001600160a01b03160362002f0a575050505050565b606085015160408601516001600160a01b039182169183169190911190151581145f8162002f39578562002f46565b62002f4660028862004212565b9050805f0362002f5a575050505050505050565b5f8062002f678a62002e47565b600f80546001600160a01b0319166001600160a01b038b811691821790925560608e8101516040805187861660208201529486168582015280518086038201815292850190819052630251596160e31b90529496509294509263128acb089262002fda9230928b928a926064016200467e565b60408051808303815f875af115801562002ff6573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906200301c91906200449f565b5050600f80546001600160a01b0319169055836200310157866001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa15801562003071573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620030979190620045d9565b5050505060608d015192985050506001600160a01b03808816911614620031015760405162461bcd60e51b815260206004820152601860248201527f506f6f6c207072696365206e6f7420636f72726563746564000000000000000060448201526064016200084b565b50505050505050505050565b80516040516370a0823160e01b81523060048201525f916001600160a01b0316906370a0823190602401602060405180830381865afa15801562003153573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906200317991906200429d565b608083015160208401516040516370a0823160e01b81523060048201529293505f926001600160a01b03909116906370a0823190602401602060405180830381865afa158015620031cc573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620031f291906200429d565b620031fe919062004228565b90505f806200320d8562002e47565b865191935091506200324a906001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000008662003c3c565b602085015162003285906001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000008562003c3c565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166388316456604051806101600160405280856001600160a01b03168152602001846001600160a01b0316815260200161271062ffffff168152602001620d899f1960020b8152602001620d89a060020b8152602001886040015162003315578662003317565b875b815260200188604001516200332d57876200332f565b865b81526020015f81526020015f8152602001306001600160a01b03168152602001428152506040518263ffffffff1660e01b8152600401620033719190620046ba565b6080604051808303815f875af1925050508015620033ae575060408051601f3d908101601f19168201909252620033ab9181019062004783565b60015b6200340257604080515f808252602082018190528183018190526060820152905187917f0d9e69eea1226c3cc6b24c170c2b55d6c198272e003451d42e20a842c1d9b914919081900360800190a2620034c1565b5f8a8152600d6020908152604080832087905560a08c018051600e9093529281902080546001600160a01b0319166001600160a01b03909316929092179091559051908a01518b917f0d9e69eea1226c3cc6b24c170c2b55d6c198272e003451d42e20a842c1d9b9149187906200347a57846200347c565b855b8d604001516200348d57866200348f565b855b604080516001600160a01b039095168552602085019390935291830152606082015260800160405180910390a2505050505b8451620034f9906001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000005f62003c3c565b602085015162002634906001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000005f62003c3c565b5f8062003542858762004228565b90505f6200356585876200355f670de0b6b3a764000080620041e4565b62002c7c565b90505f620035c185886200357b866002620041e4565b620035879190620042d3565b62003593908a620041e4565b670de0b6b3a7640000620035a88180620041e4565b620035b5906002620041e4565b6200355f9190620041e4565b905062000e458183620042d3565b600180546001600160a01b0319169055620014ba8162003c97565b620035f462002a3c565b6001805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25862002a1f3390565b600b8201546002830154600384015483925f928392620036539291869162002694565b91505f85600a0154865f01600401546200366e919062004228565b9050808310156200368357505f9050620036eb565b80831115620036e557600b86015460028701546003880154620036aa9291849189620039cc565b9350835f03620036c5575f80600193509350935050620036eb565b600b86015460028701546003880154620036e29291879162002694565b92505b50600190505b9250925092565b6040516370a0823160e01b81523060048201525f906001600160a01b038416906370a0823190602401602060405180830381865afa15801562003737573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906200375d91906200429d565b9050620037766001600160a01b03841633308562003ce6565b6040516370a0823160e01b8152306004820152829082906001600160a01b038616906370a0823190602401602060405180830381865afa158015620037bd573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620037e391906200429d565b620037ef919062004228565b146200196e5760405162461bcd60e51b815260206004820152601960248201527f556e737570706f72746564207061796d656e7420746f6b656e0000000000000060448201526064016200084b565b6001600160a01b0384165f908152600960205260408120805484929062003867908490620042d3565b90915550620038799050828262004228565b6001600160a01b038086165f908152600a6020908152604080832093881683529290529081208054909190620038b1908490620042d3565b90915550506001600160a01b0384165f9081526008602052604081208054839290620038df908490620042d3565b909155505050505050565b5f6200391e620038fa8362003d26565b80156200391957505f8480620039145762003914620041fe565b868809115b151590565b6200392b86868662002c7c565b62002e3e9190620042d3565b5f80516020620057dc8339815191525460020362000caa57604051633ee5aeb560e01b815260040160405180910390fd5b60405163a9059cbb60e01b5f8181526001600160a01b038616600452602485905291602083604481808b5af1925060015f51148316620039c0578383151615620039b4573d5f823e3d81fd5b5f873b113d1516831692505b60405250949350505050565b5f80620039ee86620039e7670de0b6b3a764000080620041e4565b8762002c7c565b620039fb906001620042d3565b90508281111562003a095750815b5f5b8181101562002722575f600262003a238484620042d3565b62003a30906001620042d3565b62003a3c919062004212565b90508762003a4d8a838a8a62002694565b1162003a5c5780915062003a6c565b62003a6960018262004228565b92505b5062003a0b565b600154600160a01b900460ff1662000caa57604051638dfc202b60e01b815260040160405180910390fd5b5f805f1983850993909202808410938190039390930393915050565b634e487b715f52806020526024601cfd5b5f6001821162003ad9575090565b816001600160801b821062003af35760809190911c9060401b5b600160401b821062003b0a5760409190911c9060201b5b640100000000821062003b225760209190911c9060101b5b62010000821062003b385760109190911c9060081b5b610100821062003b4d5760089190911c9060041b5b6010821062003b615760049190911c9060021b5b6004821062003b6e5760011b5b600302600190811c9081858162003b895762003b89620041fe565b048201901c9050600181858162003ba45762003ba4620041fe565b048201901c9050600181858162003bbf5762003bbf620041fe565b048201901c9050600181858162003bda5762003bda620041fe565b048201901c9050600181858162003bf55762003bf5620041fe565b048201901c9050600181858162003c105762003c10620041fe565b048201901c905062003c3381858162003c2d5762003c2d620041fe565b04821190565b90039392505050565b62003c4a8383835f62003d57565b6200196e5762003c5e83835f600162003d57565b62003c8857604051635274afe760e01b81526001600160a01b03841660048201526024016200084b565b6200275a838383600162003d57565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b62003cf684848484600162003da3565b62003d2057604051635274afe760e01b81526001600160a01b03851660048201526024016200084b565b50505050565b5f600282600381111562003d3e5762003d3e62003fdf565b62003d4a9190620047cb565b60ff166001149050919050565b60405163095ea7b360e01b5f8181526001600160a01b038616600452602485905291602083604481808b5af1925060015f51148316620039c0578383151615620039b4573d5f823e3d81fd5b6040516323b872dd60e01b5f8181526001600160a01b038781166004528616602452604485905291602083606481808c5af1925060015f5114831662003e0157838315161562003df5573d5f823e3d81fd5b5f883b113d1516831692505b604052505f60605295945050505050565b610fec80620047f083390190565b6001600160a01b0381168114620014ba575f80fd5b803562000a498162003e20565b5f6020828403121562003e53575f80fd5b8135620008bf8162003e20565b5f6020828403121562003e71575f80fd5b5035919050565b5f806040838503121562003e8a575f80fd5b50508035926020909101359150565b8015158114620014ba575f80fd5b5f806040838503121562003eb9575f80fd5b823562003ec68162003e20565b9150602083013562003ed88162003e99565b809150509250929050565b5f60c0828403121562003ef4575f80fd5b50919050565b5f8083601f84011262003f0b575f80fd5b50813567ffffffffffffffff81111562003f23575f80fd5b60208301915083602082850101111562003f3b575f80fd5b9250929050565b5f805f805f806060878903121562003f58575f80fd5b863567ffffffffffffffff8082111562003f70575f80fd5b62003f7e8a838b0162003efa565b9098509650602089013591508082111562003f97575f80fd5b62003fa58a838b0162003efa565b9096509450604089013591508082111562003fbe575f80fd5b5062003fcd89828a0162003efa565b979a9699509497509295939492505050565b634e487b7160e01b5f52602160045260245ffd5b600481106200401057634e487b7160e01b5f52602160045260245ffd5b9052565b84516001600160a01b0316815260208086015161018083019162004042908401826001600160a01b03169052565b5060408601516040830152606086015160608301526080860151608083015260a08601516200407c60a08401826001600160a01b03169052565b5060c086015160c083015260e086015160e0830152610100808701518184015250620040ad61012083018662003ff3565b610140820193909352610160015292915050565b5f60208284031215620040d2575f80fd5b813567ffffffffffffffff811115620040e9575f80fd5b82016101208185031215620008bf575f80fd5b5f805f606084860312156200410f575f80fd5b505081359360208301359350604090920135919050565b5f806040838503121562004138575f80fd5b8235620041458162003e20565b9150602083013562003ed88162003e20565b5f806040838503121562004169575f80fd5b82359150602083013562003ed88162003e20565b5f805f806060858703121562004191575f80fd5b8435935060208501359250604085013567ffffffffffffffff811115620041b6575f80fd5b620041c48782880162003efa565b95989497509550505050565b634e487b7160e01b5f52601160045260245ffd5b8082028115828204841417620014dd57620014dd620041d0565b634e487b7160e01b5f52601260045260245ffd5b5f82620042235762004223620041fe565b500490565b81810381811115620014dd57620014dd620041d0565b81356200424b8162003e20565b81546001600160a01b0319166001600160a01b03919091161781556020820135600182015560408201356002820155606082013560038201556080820135600482015560a09190910135600590910155565b5f60208284031215620042ae575f80fd5b5051919050565b5f60208284031215620042c6575f80fd5b8151620008bf8162003e20565b80820180821115620014dd57620014dd620041d0565b634e487b7160e01b5f52604160045260245ffd5b604051610120810167ffffffffffffffff81118282101715620043245762004324620042e9565b60405290565b5f82601f8301126200433a575f80fd5b813567ffffffffffffffff80821115620043585762004358620042e9565b604051601f8301601f19908116603f01168101908282118183101715620043835762004383620042e9565b816040528381528660208588010111156200439c575f80fd5b836020870160208301375f602085830101528094505050505092915050565b5f6101208236031215620043cd575f80fd5b620043d7620042fd565b823567ffffffffffffffff80821115620043ef575f80fd5b620043fd368387016200432a565b8352602085013591508082111562004413575f80fd5b62004421368387016200432a565b602084015260408501359150808211156200443a575f80fd5b5062004449368286016200432a565b60408301525060608301356060820152620044676080840162003e35565b608082015260a083013560a082015260c083013560c082015260e083013560e082015261010080840135818301525080915050919050565b5f8060408385031215620044b1575f80fd5b505080516020909101519092909150565b5f60018201620044d657620044d6620041d0565b5060010190565b5f81518084525f5b818110156200450357602081850181015186830182015201620044e5565b505f602082860101526020601f19601f83011685010191505092915050565b60a081525f6200453660a0830188620044dd565b82810360208401526200454a8188620044dd565b604084018790526001600160a01b03861660608501528381036080850152905062000e458185620044dd565b5f60018060a01b03808a1683528089166020840152508660408301528560608301528460808301528360a083015260e060c0830152620045ba60e0830184620044dd565b9998505050505050505050565b805161ffff8116811462000a49575f80fd5b5f805f805f805f60e0888a031215620045f0575f80fd5b8751620045fd8162003e20565b8097505060208801518060020b811462004615575f80fd5b95506200462560408901620045c7565b94506200463560608901620045c7565b93506200464560808901620045c7565b925060a088015160ff811681146200465b575f80fd5b60c08901519092506200466e8162003e99565b8091505092959891949750929550565b6001600160a01b0386811682528515156020830152604082018590528316606082015260a0608082018190525f906200272290830184620044dd565b81516001600160a01b0316815261016081016020830151620046e760208401826001600160a01b03169052565b506040830151620046ff604084018262ffffff169052565b50606083015162004715606084018260020b9052565b5060808301516200472b608084018260020b9052565b5060a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015162004772828501826001600160a01b03169052565b505061014092830151919092015290565b5f805f806080858703121562004797575f80fd5b8451935060208501516001600160801b0381168114620047b5575f80fd5b6040860151606090960151949790965092505050565b5f60ff831680620047e057620047e0620041fe565b8060ff8416069150509291505056fe60a060405234801562000010575f80fd5b5060405162000fec38038062000fec8339810160408190526200003391620001c1565b818585600362000044838262000300565b50600462000053828262000300565b5050506001600160a01b0381166200008457604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b6200008f81620000af565b5060808390526006620000a3828262000300565b505050505050620003cc565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b634e487b7160e01b5f52604160045260245ffd5b5f82601f83011262000124575f80fd5b81516001600160401b038082111562000141576200014162000100565b604051601f8301601f19908116603f011681019082821181831017156200016c576200016c62000100565b816040528381526020925086602085880101111562000189575f80fd5b5f91505b83821015620001ac57858201830151818301840152908201906200018d565b5f602085830101528094505050505092915050565b5f805f805f60a08688031215620001d6575f80fd5b85516001600160401b0380821115620001ed575f80fd5b620001fb89838a0162000114565b9650602088015191508082111562000211575f80fd5b6200021f89838a0162000114565b604089015160608a0151919750955091506001600160a01b038216821462000245575f80fd5b6080880151919350808211156200025a575f80fd5b50620002698882890162000114565b9150509295509295909350565b600181811c908216806200028b57607f821691505b602082108103620002aa57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f821115620002fb57805f5260205f20601f840160051c81016020851015620002d75750805b601f840160051c820191505b81811015620002f8575f8155600101620002e3565b50505b505050565b81516001600160401b038111156200031c576200031c62000100565b62000334816200032d845462000276565b84620002b0565b602080601f8311600181146200036a575f8415620003525750858301515b5f19600386901b1c1916600185901b178555620003c4565b5f85815260208120601f198616915b828110156200039a5788860151825594840194600190910190840162000379565b5085821015620003b857878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b608051610c00620003ec5f395f818161025801526104270152610c005ff3fe608060405234801561000f575f80fd5b506004361061011c575f3560e01c8063715018a6116100a9578063af35c6c71161006e578063af35c6c71461023e578063bef97c8714610246578063d5abeb0114610253578063dd62ed3e1461027a578063f2fde38b146102b2575f80fd5b8063715018a6146101ed57806379cc6790146101f55780638da5cb5b1461020857806395d89b4114610223578063a9059cbb1461022b575f80fd5b806323b872dd116100ef57806323b872dd1461017b578063313ce5671461018e57806340c10f191461019d57806342966c68146101b257806370a08231146101c5575f80fd5b806303ee438c1461012057806306fdde031461013e578063095ea7b31461014657806318160ddd14610169575b5f80fd5b6101286102c5565b6040516101359190610a43565b60405180910390f35b610128610351565b610159610154366004610aaa565b6103e1565b6040519015158152602001610135565b6002545b604051908152602001610135565b610159610189366004610ad2565b6103fa565b60405160128152602001610135565b6101b06101ab366004610aaa565b61041d565b005b6101b06101c0366004610b0b565b6104b0565b61016d6101d3366004610b22565b6001600160a01b03165f9081526020819052604090205490565b6101b06104c5565b6101b0610203366004610aaa565b6104d8565b6005546040516001600160a01b039091168152602001610135565b610128610530565b610159610239366004610aaa565b61053f565b6101b061054c565b6007546101599060ff1681565b61016d7f000000000000000000000000000000000000000000000000000000000000000081565b61016d610288366004610b42565b6001600160a01b039182165f90815260016020908152604080832093909416825291909152205490565b6101b06102c0366004610b22565b6105d0565b600680546102d290610b73565b80601f01602080910402602001604051908101604052809291908181526020018280546102fe90610b73565b80156103495780601f1061032057610100808354040283529160200191610349565b820191905f5260205f20905b81548152906001019060200180831161032c57829003601f168201915b505050505081565b60606003805461036090610b73565b80601f016020809104026020016040519081016040528092919081815260200182805461038c90610b73565b80156103d75780601f106103ae576101008083540402835291602001916103d7565b820191905f5260205f20905b8154815290600101906020018083116103ba57829003601f168201915b5050505050905090565b5f336103ee81858561060a565b60019150505b92915050565b5f3361040785828561061c565b610412858585610698565b506001949350505050565b6104256106f5565b7f00000000000000000000000000000000000000000000000000000000000000008161045060025490565b61045a9190610bab565b11156104a25760405162461bcd60e51b815260206004820152601260248201527145786365656473206d617820737570706c7960701b60448201526064015b60405180910390fd5b6104ac8282610722565b5050565b6104b86106f5565b6104c23382610756565b50565b6104cd6106f5565b6104d65f61078a565b565b6104e06106f5565b60075460ff16156105265760405162461bcd60e51b815260206004820152601060248201526f151c98591a5b99c81b5a59dc985d195960821b6044820152606401610499565b6104ac8282610756565b60606004805461036090610b73565b5f336103ee818585610698565b6105546106f5565b60075460ff16156105995760405162461bcd60e51b815260206004820152600f60248201526e105b1c9958591e48195b98589b1959608a1b6044820152606401610499565b6007805460ff191660011790556040517feadb24812ab3c9a55c774958184293ebdb6c7f6a2dbab11f397d80c86feb65d3905f90a1565b6105d86106f5565b6001600160a01b03811661060157604051631e4fbdf760e01b81525f6004820152602401610499565b6104c28161078a565b61061783838360016107db565b505050565b6001600160a01b038381165f908152600160209081526040808320938616835292905220545f19811015610692578181101561068457604051637dc7a0d960e11b81526001600160a01b03841660048201526024810182905260448101839052606401610499565b61069284848484035f6107db565b50505050565b6001600160a01b0383166106c157604051634b637e8f60e11b81525f6004820152602401610499565b6001600160a01b0382166106ea5760405163ec442f0560e01b81525f6004820152602401610499565b6106178383836108ad565b6005546001600160a01b031633146104d65760405163118cdaa760e01b8152336004820152602401610499565b6001600160a01b03821661074b5760405163ec442f0560e01b81525f6004820152602401610499565b6104ac5f83836108ad565b6001600160a01b03821661077f57604051634b637e8f60e11b81525f6004820152602401610499565b6104ac825f836108ad565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b6001600160a01b0384166108045760405163e602df0560e01b81525f6004820152602401610499565b6001600160a01b03831661082d57604051634a1406b160e11b81525f6004820152602401610499565b6001600160a01b038085165f908152600160209081526040808320938716835292905220829055801561069257826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161089f91815260200190565b60405180910390a350505050565b6001600160a01b038316158015906108cd57506001600160a01b03821615155b156109175760075460ff166109175760405162461bcd60e51b815260206004820152601060248201526f151c985b9cd9995c9cc81b1bd8dad95960821b6044820152606401610499565b6106178383836001600160a01b038316610947578060025f82825461093c9190610bab565b909155506109b79050565b6001600160a01b0383165f90815260208190526040902054818110156109995760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610499565b6001600160a01b0384165f9081526020819052604090209082900390555b6001600160a01b0382166109d3576002805482900390556109f1565b6001600160a01b0382165f9081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610a3691815260200190565b60405180910390a3505050565b5f602080835283518060208501525f5b81811015610a6f57858101830151858201604001528201610a53565b505f604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610aa5575f80fd5b919050565b5f8060408385031215610abb575f80fd5b610ac483610a8f565b946020939093013593505050565b5f805f60608486031215610ae4575f80fd5b610aed84610a8f565b9250610afb60208501610a8f565b9150604084013590509250925092565b5f60208284031215610b1b575f80fd5b5035919050565b5f60208284031215610b32575f80fd5b610b3b82610a8f565b9392505050565b5f8060408385031215610b53575f80fd5b610b5c83610a8f565b9150610b6a60208401610a8f565b90509250929050565b600181811c90821680610b8757607f821691505b602082108103610ba557634e487b7160e01b5f52602260045260245ffd5b50919050565b808201808211156103f457634e487b7160e01b5f52601160045260245ffdfea264697066735822122090ddc87471e0ddf973a593ecb42949413d62fd9a4d0b7b7eed4e63589596f38964736f6c634300081800339b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00a2646970667358221220911cd40b3b7ab2a80cc272a4d28b40114c2d7e36243882110b0a2134b026996d64736f6c63430008180033",
    "sourceMap": "471:36907:20:-:0;;;9023:489;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2365:1:13;1505:66;2539;9144:10:20;;1269:95:0;;1322:31;;-1:-1:-1;;;1322:31:0;;1350:1;1322:31;;;783:51:22;756:18;;1322:31:0;;;;;;;;1269:95;1373:32;1392:12;1373:18;:32::i;:::-;-1:-1:-1;;;;;;9178:27:20;::::1;9170:58;;;::::0;-1:-1:-1;;;9170:58:20;;1047:2:22;9170:58:20::1;::::0;::::1;1029:21:22::0;1086:2;1066:18;;;1059:30;-1:-1:-1;;;1105:18:22;;;1098:48;1163:18;;9170:58:20::1;845:342:22::0;9170:58:20::1;-1:-1:-1::0;;;;;9246:39:20;::::1;9238:73;;;::::0;-1:-1:-1;;;9238:73:20;;1394:2:22;9238:73:20::1;::::0;::::1;1376:21:22::0;1433:2;1413:18;;;1406:30;1472:23;1452:18;;;1445:51;1513:18;;9238:73:20::1;1192:345:22::0;9238:73:20::1;-1:-1:-1::0;;;;;9321:34:20;::::1;;::::0;3340:4:::1;9373:29:::0;::::1;;9365:54;;;::::0;-1:-1:-1;;;9365:54:20;;1744:2:22;9365:54:20::1;::::0;::::1;1726:21:22::0;1783:2;1763:18;;;1756:30;-1:-1:-1;;;1802:18:22;;;1795:42;1854:18;;9365:54:20::1;1542:336:22::0;9365:54:20::1;-1:-1:-1::0;9429:20:20::1;:36:::0;;-1:-1:-1;;;;;;9429:36:20::1;-1:-1:-1::0;;;;;9429:36:20;;;::::1;::::0;;;::::1;::::0;;;9475:13:::1;:30:::0;471:36907;;2011:153:1;2100:13;2093:20;;-1:-1:-1;;;;;;2093:20:1;;;2123:34;2148:8;2123:24;:34::i;:::-;2011:153;:::o;2912:187:0:-;2985:16;3004:6;;-1:-1:-1;;;;;3020:17:0;;;-1:-1:-1;;;;;;3020:17:0;;;;;;3052:40;;3004:6;;;;;;;3052:40;;2985:16;3052:40;2975:124;2912:187;:::o;14:131:22:-;-1:-1:-1;;;;;89:31:22;;79:42;;69:70;;135:1;132;125:12;150:482;274:6;282;290;343:2;331:9;322:7;318:23;314:32;311:52;;;359:1;356;349:12;311:52;391:9;385:16;410:31;435:5;410:31;:::i;:::-;505:2;490:18;;484:25;554:2;539:18;;533:25;460:5;;-1:-1:-1;484:25:22;-1:-1:-1;567:33:22;533:25;567:33;:::i;:::-;619:7;609:17;;;150:482;;;;;:::o;1542:336::-;471:36907:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801562000010575f80fd5b5060043610620002ac575f3560e01c8063709ef2311162000173578063bcae25a411620000db578063e30c3978116200008f578063e30c39781462000773578063e521cb921462000785578063efc20dad146200079c578063f2fde38b14620007c9578063fa461e3314620007e0578063fdfae48614620007f7575f80fd5b8063bcae25a414620006da578063d4570c1c14620006e4578063d55be8c61462000711578063d9f1aed9146200071b578063dcf844a71462000732578063dd1b9c4a1462000754575f80fd5b806383966021116200013357806383966021146200064f5780638456cb59146200067a5780638da5cb5b1462000684578063a4ce25a71462000695578063b17acdcd14620006ac578063b8dc491b14620006c3575f80fd5b8063709ef23114620005f2578063715018a6146200060957806375f0c2f01462000613578063791b98bc146200061d57806379ba50971462000645575f80fd5b806342f78e911162000217578063571a26a011620001d7578063571a26a014620004a55780635c471ad514620005625780635c975abb146200058457806364df049e1462000597578063683931b414620005c457806369ce6d4714620005db575f80fd5b806342f78e9114620003d05780634373a2861462000430578063454b0608146200044757806348f719e5146200045e57806354147e9e1462000483575f80fd5b806328336098116200026f57806328336098146200036d5780632ad7157314620003845780633edb917d146200038e5780633ef068d214620003985780633f4ba83a14620003af57806342a8151514620003b9575f80fd5b806306d49f9214620002b057806309e0625914620002ea5780630fda366d1462000303578063121a257f14620003295780631e83409a1462000356575b5f80fd5b620002d5620002c136600462003e42565b600b6020525f908152604090205460ff1681565b60405190151581526020015b60405180910390f35b62000301620002fb36600462003e60565b62000801565b005b6200031a6200031436600462003e60565b62000895565b604051908152602001620002e1565b620003406200033a36600462003e78565b620008c6565b60408051928352602083019190915201620002e1565b6200031a6200036736600462003e42565b62000922565b620003016200037e36600462003ea7565b62000a4e565b6200031a60025481565b6200031a600c5481565b62000301620003a936600462003ee3565b62000b03565b6200030162000c96565b6200031a620003ca36600462003f42565b62000cac565b601054601154601254601354601454601554620003f8956001600160a01b0316949392919086565b604080516001600160a01b0390971687526020870195909552938501929092526060840152608083015260a082015260c001620002e1565b620003016200044136600462003e60565b62000e51565b620003016200045836600462003e60565b62000edf565b620002d56200046f36600462003e60565b60056020525f908152604090205460ff1681565b6200031a6200049436600462003e60565b600d6020525f908152604090205481565b62000550620004b636600462003e60565b600360208181525f92835260409283902083516101208101855281546001600160a01b03908116825260018301548116938201939093526002820154948101949094529182015460608401526004820154608084015260058201541660a0830152600681015460c0830152600781015460e083015260088101546101008301526009810154600a820154600b9092015460ff909116919084565b604051620002e1949392919062004014565b6200031a6200057336600462003e42565b60086020525f908152604090205481565b600154600160a01b900460ff16620002d5565b600654620005ab906001600160a01b031681565b6040516001600160a01b039091168152602001620002e1565b6200031a620005d5366004620040c1565b620014bd565b6200031a620005ec36600462003e42565b620014e3565b6200030162000603366004620040fc565b620015e3565b6200030162001973565b6200031a6107d081565b620005ab7f000000000000000000000000000000000000000000000000000000000000000081565b6200030162001988565b620005ab6200066036600462003e60565b600e6020525f90815260409020546001600160a01b031681565b62000301620019cd565b5f546001600160a01b0316620005ab565b62000301620006a6366004620040fc565b620019e1565b62000340620006bd36600462003e60565b62001d6d565b62000301620006d436600462004126565b62002023565b6200031a60075481565b6200031a620006f536600462004126565b600a60209081525f928352604080842090915290825290205481565b6200031a6103e881565b620003016200072c36600462003e60565b620021dc565b6200031a6200074336600462003e42565b60096020525f908152604090205481565b6200075e61271081565b60405162ffffff9091168152602001620002e1565b6001546001600160a01b0316620005ab565b620003016200079636600462003e42565b62002452565b6200031a620007ad36600462004157565b600460209081525f928352604080842090915290825290205481565b62000301620007da36600462003e42565b62002504565b62000301620007f13660046200417d565b62002577565b6200031a61138881565b6200080b6200263c565b611388811115620008545760405162461bcd60e51b815260206004820152600e60248201526d0a6d0c2e4ca40e8dede40d0d2ced60931b60448201526064015b60405180910390fd5b600c5460408051918252602082018390527fafd7016dba95bc0c303b0838ae8e4829497ed18cc6a0ed00eec5fc7c50148e17910160405180910390a1600c55565b5f8181526003602081905260408220600b8101546002820154928201549192620008bf926200266a565b9392505050565b5f8281526003602081905260408220600b8101546002820154928201548493620008f4929187919062002694565b6006820154909350612710906200090c9085620041e4565b62000918919062004212565b9150509250929050565b5f6200092d6200272d565b506001600160a01b0381165f908152600a6020908152604080832033845290915290205480620009935760405162461bcd60e51b815260206004820152601060248201526f4e6f7468696e6720746f20636c61696d60801b60448201526064016200084b565b6001600160a01b0382165f818152600a602090815260408083203384528252808320839055928252600890529081208054839290620009d490849062004228565b90915550620009f090506001600160a01b03831633836200274b565b60405181815233906001600160a01b038416907ff7a40077ff7a04c7e61f6f26fb13774259ddf1b6bce9ecf26a8276cdd3992683906020015b60405180910390a362000a4960015f80516020620057dc83398151915255565b919050565b62000a586200263c565b6001600160a01b03821662000aa55760405162461bcd60e51b81526020600482015260126024820152712d32b937903830bcb6b2b73a103a37b5b2b760711b60448201526064016200084b565b6001600160a01b0382165f818152600b6020908152604091829020805460ff191685151590811790915591519182527f359d3f0085554124a1c9fc8f53602b98df473a1d955d73500399fb2ef8b8cf18910160405180910390a25050565b62000b0d6200263c565b5f62000b1d602083018362003e42565b6001600160a01b03160362000b6a5760405162461bcd60e51b81526020600482015260126024820152712d32b937903830bcb6b2b73a103a37b5b2b760711b60448201526064016200084b565b600b5f62000b7c602084018462003e42565b6001600160a01b0316815260208101919091526040015f205460ff1662000be25760405162461bcd60e51b815260206004820152601960248201527814185e5b595b9d081d1bdad95b881b9bdd08185b1b1bddd959603a1b60448201526064016200084b565b62000c0581602001358260400135836060013584608001358560a0013562002784565b80601062000c1482826200423e565b507f29f62c75478dac4ea9396c9b5e58b4e29d6f7812c6eb05ceaf5d0c776db6b576905062000c47602083018362003e42565b604080516001600160a01b039092168252602080850135908301528084013590820152606080840135908201526080808401359082015260a0808401359082015260c00160405180910390a150565b62000ca06200263c565b62000caa620029e5565b565b5f62000cb762002a3c565b6040805160c0810182526010546001600160a01b03168082526011546020830152601254928201929092526013546060820152601454608082015260155460a08201529062000d3c5760405162461bcd60e51b815260206004820152601060248201526f139bc81b185d5b98da081c1c995cd95d60821b60448201526064016200084b565b604080516101406020601f8b018190040282018101909252610120810189815262000e45928291908c908c90819085018382808284375f92019190915250505090825250604080516020601f8b0181900481028201810190925289815291810191908a908a90819084018382808284375f92019190915250505090825250604080516020601f8901819004810282018101909252878152918101919088908890819084018382808284375f920191909152505050908252506020848101519082015283516001600160a01b031660408083019190915284015160608083019190915284015160808083019190915284015160a08083019190915284015160c09091015262002a68565b98975050505050505050565b62000e5b6200263c565b6103e881111562000e9e5760405162461bcd60e51b815260206004820152600c60248201526b08ccaca40e8dede40d0d2ced60a31b60448201526064016200084b565b60075460408051918252602082018390527f3062378541f1b58e0547bfb13e7d7585153e442e477e263c6e63d4775b3072a6910160405180910390a1600755565b62000ee96200272d565b5f8181526003602052604090206002600982015460ff16600381111562000f145762000f1462003fdf565b1462000f5b5760405162461bcd60e51b8152602060048201526015602482015274105d58dd1a5bdb881b9bdd0818dbdb5c1b195d1959605a1b60448201526064016200084b565b5f62000f678262002c54565b90505f62000f8783600b0154845f0160020154855f01600301546200266a565b90505f62000faa8362000fa3670de0b6b3a764000080620041e4565b8462002c7c565b6040805160c0810182525f606082018190526080820181905260a0820181905287546001600160a01b0390811680845260018a015490911660208085018290529181118486015260098a01805460ff19166003179055825260089052918220805493945090928692906200102090849062004228565b909155505060208101516040516370a0823160e01b815230600482015285916001600160a01b0316906370a0823190602401602060405180830381865afa1580156200106e573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906200109491906200429d565b620010a0919062004228565b816080018181525050805f01516001600160a01b031663af35c6c76040518163ffffffff1660e01b81526004015f604051808303815f87803b158015620010e5575f80fd5b505af1158015620010f8573d5f803e3d5ffd5b505050505f841180156200110b57505f82115b15620012755780516040516340c10f1960e01b8152306004820152602481018490526001600160a01b03909116906340c10f19906044015f604051808303815f87803b1580156200115a575f80fd5b505af11580156200116d573d5f803e3d5ffd5b505050506200118183826040015162002d36565b6001600160a01b031660608201525f806200119c8362002e47565b60608501516040516309f56ab160e11b81526001600160a01b0380851660048301528084166024830152612710604483015291821660648201529294509092507f000000000000000000000000000000000000000000000000000000000000000016906313ead562906084016020604051808303815f875af115801562001225573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906200124b9190620042b5565b6001600160a01b031660a08401526200126683858862002e71565b6200127288846200310d565b50505b80516040516370a0823160e01b81523060048201525f916001600160a01b0316906370a0823190602401602060405180830381865afa158015620012bb573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620012e191906200429d565b9050801562001345578151604051630852cd8d60e31b8152600481018390526001600160a01b03909116906342966c68906024015f604051808303815f87803b1580156200132d575f80fd5b505af115801562001340573d5f803e3d5ffd5b505050505b608082015160208301516040516370a0823160e01b81523060048201525f92916001600160a01b0316906370a0823190602401602060405180830381865afa15801562001394573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620013ba91906200429d565b620013c6919062004228565b9050801562001448576020808401516001600160a01b039081165f908152600a8352604080822060058c0154909316825291909252812080548392906200140f908490620042d3565b90915550506020808401516001600160a01b03165f908152600890915260408120805483929062001442908490620042d3565b90915550505b825f01516001600160a01b031663715018a66040518163ffffffff1660e01b81526004015f604051808303815f87803b15801562001484575f80fd5b505af115801562001497573d5f803e3d5ffd5b5050505050505050505050620014ba60015f80516020620057dc83398151915255565b50565b5f620014c862002a3c565b620014dd620014d783620043bb565b62002a68565b92915050565b5f620014ee6200272d565b506001600160a01b0381165f9081526009602052604090205480620015495760405162461bcd60e51b815260206004820152601060248201526f4e6f7468696e6720746f20636c61696d60801b60448201526064016200084b565b6001600160a01b0382165f9081526009602090815260408083208390556008909152812080548392906200157f90849062004228565b9091555050600654620015a0906001600160a01b038481169116836200274b565b6006546040518281526001600160a01b03918216918416907f4f8a50ec1fe3d316970fdadd1f94e0b822f92d31e2bac3c9dc2c6c287de071079060200162000a29565b620015ed6200272d565b5f8381526003602052604090206001600982015460ff16600381111562001618576200161862003fdf565b146200165c5760405162461bcd60e51b815260206004820152601260248201527141756374696f6e206e6f742061637469766560701b60448201526064016200084b565b5f83116200169b5760405162461bcd60e51b815260206004820152600b60248201526a16995c9bc8185b5bdd5b9d60aa1b60448201526064016200084b565b5f848152600460209081526040808320338452909152902054831115620016f75760405162461bcd60e51b815260206004820152600f60248201526e457863656564732062616c616e636560881b60448201526064016200084b565b5f6200171682600b015485845f0160020154855f016003015462003534565b90505f612710835f016006015483620017309190620041e4565b6200173c919062004212565b9050836200174b828462004228565b10156200178f5760405162461bcd60e51b815260206004820152601160248201527014db1a5c1c1859d948195e18d959591959607a1b60448201526064016200084b565b6001830154600a840180546001600160a01b03909216918491905f90620017b890849062004228565b925050819055508584600b015f828254620017d4919062004228565b90915550505f878152600460209081526040808320338452909152812080548892906200180390849062004228565b90915550620018159050828462004228565b6001600160a01b0382165f90815260086020526040812080549091906200183e90849062004228565b90915550506001600160a01b0381165f90815260096020526040812080548492906200186c908490620042d3565b9091555050835460405163079cc67960e41b8152336004820152602481018890526001600160a01b03909116906379cc6790906044015f604051808303815f87803b158015620018ba575f80fd5b505af1158015620018cd573d5f803e3d5ffd5b50505050620018f6338385620018e4919062004228565b6001600160a01b03841691906200274b565b600a840154600b850154604080518981526020810187905290810185905260608101929092526080820152339088907fd7fd93110c86e222ad62b2a786fdc3afd88c4c21f9092614ca01365ba432073c9060a00160405180910390a3505050506200196e60015f80516020620057dc83398151915255565b505050565b6200197d6200263c565b62000caa5f620035cf565b60015433906001600160a01b03168114620019c25760405163118cdaa760e01b81526001600160a01b03821660048201526024016200084b565b620014ba81620035cf565b620019d76200263c565b62000caa620035ea565b620019eb6200272d565b620019f562002a3c565b5f8381526003602052604090206001600982015460ff16600381111562001a205762001a2062003fdf565b1462001a645760405162461bcd60e51b815260206004820152601260248201527141756374696f6e206e6f742061637469766560701b60448201526064016200084b565b5f831162001aa35760405162461bcd60e51b815260206004820152600b60248201526a16995c9bc8185b5bdd5b9d60aa1b60448201526064016200084b565b5f8062001ab1838662003630565b600686015492975090935091505f906127109062001ad09085620041e4565b62001adc919062004212565b90508462001aeb8285620042d3565b111562001b2f5760405162461bcd60e51b815260206004820152601160248201527014db1a5c1c1859d948195e18d959591959607a1b60448201526064016200084b565b8284600a015f82825462001b449190620042d3565b925050819055508584600b015f82825462001b609190620042d3565b90915550505f8781526004602090815260408083203384529091528120805488929062001b8f908490620042d3565b9091555062001ba190508184620042d3565b60018501546001600160a01b03165f908152600860205260408120805490919062001bce908490620042d3565b909155505060018401546001600160a01b03165f908152600960205260408120805483929062001c00908490620042d3565b9091555050811562001c1c5760098401805460ff191660021790555b600184015462001c41906001600160a01b031662001c3b8386620042d3565b620036f2565b83546040516340c10f1960e01b8152336004820152602481018890526001600160a01b03909116906340c10f19906044015f604051808303815f87803b15801562001c8a575f80fd5b505af115801562001c9d573d5f803e3d5ffd5b50505050600a840154600b850154604080518981526020810187905290810184905260608101929092526080820152339088907fc938e879cd47aa84d5893377578d6c211ccd96f382228c42c1bb6a8eaa71a0849060a00160405180910390a3811562001d5157867fc7502df20ccf846bf5005f01564bb502b56dcec19f0e2d0575c4369cc5e3b53b85600a015486600b015460405162001d48929190918252602082015260400190565b60405180910390a25b505050506200196e60015f80516020620057dc83398151915255565b5f8062001d796200272d565b5f83815260036020819052604090912090600982015460ff16600381111562001da65762001da662003fdf565b14801562001dc057505f848152600d602052604090205415155b62001dfc5760405162461bcd60e51b815260206004820152600b60248201526a2737903837b9b4ba34b7b760a91b60448201526064016200084b565b604080516080810182525f868152600d6020908152838220548352309083019081526001600160801b0383850181815260608501828152955163fc6f786560e01b81529451600486015291516001600160a01b039081166024860152915181166044850152935190931660648301529182917f00000000000000000000000000000000000000000000000000000000000000009091169063fc6f78659060840160408051808303815f875af115801562001eb8573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062001ede91906200449f565b600185015485549294509092506001600160a01b039081169116108062001f0757818362001f0a565b82825b600886015491975095505f906127109062001f269089620041e4565b62001f32919062004212565b90505f612710865f01600801548862001f4c9190620041e4565b62001f58919062004212565b8654600588015491925062001f7c916001600160a01b039182169116848b6200383e565b6001860154600587015462001fa0916001600160a01b039081169116838a6200383e565b887f8dcde09e464f5c324d7cbf62dbc0c647b8ad9242592ae364153f2549f4898d0462001fce848b62004228565b62001fda848b62004228565b60408051928352602083019190915281018590526060810184905260800160405180910390a25050505050506200201e60015f80516020620057dc83398151915255565b915091565b6200202d6200272d565b620020376200263c565b6001600160a01b038116620020805760405162461bcd60e51b815260206004820152600e60248201526d16995c9bc81c9958da5c1a595b9d60921b60448201526064016200084b565b6040516370a0823160e01b81523060048201525f906001600160a01b038416906370a0823190602401602060405180830381865afa158015620020c5573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620020eb91906200429d565b6001600160a01b0384165f908152600860205260409020549091508082116200214a5760405162461bcd60e51b815260206004820152601060248201526f04e6f7468696e6720746f2073776565760841b60448201526064016200084b565b5f62002157828462004228565b90506200216f6001600160a01b03861685836200274b565b836001600160a01b0316856001600160a01b03167f7b09c29f9106defeccc9ac3b823f3aad0b470d120e5df7aed033b5c43a4bf71883604051620021b591815260200190565b60405180910390a3505050620021d860015f80516020620057dc83398151915255565b5050565b620021e66200272d565b5f81815260036020526040902060058101546001600160a01b031633146200223f5760405162461bcd60e51b815260206004820152600b60248201526a2737ba1031b932b0ba37b960a91b60448201526064016200084b565b6002600982015460ff1660038111156200225d576200225d62003fdf565b14806200228557506003600982015460ff16600381111562002283576200228362003fdf565b145b620022cb5760405162461bcd60e51b8152602060048201526015602482015274105d58dd1a5bdb881b9bdd0818dbdb5c1b195d1959605a1b60448201526064016200084b565b5f8281526005602052604090205460ff16156200231f5760405162461bcd60e51b815260206004820152601160248201527020b63932b0b23c903bb4ba34323930bbb760791b60448201526064016200084b565b5f6200232b8262002c54565b82600a01546200233c919062004228565b90505f8111620023855760405162461bcd60e51b81526020600482015260136024820152724e6f7468696e6720746f20776974686472617760681b60448201526064016200084b565b5f838152600560209081526040808320805460ff191660019081179091558501546001600160a01b03168352600890915281208054839290620023ca90849062004228565b909155505060058201546001830154620023f2916001600160a01b039182169116836200274b565b60058201546040518281526001600160a01b039091169084907f579e0e2d0cfdb23711bb6034ac9f2ba41e8965a8e24589d1c3cf5604868661fc9060200160405180910390a35050620014ba60015f80516020620057dc83398151915255565b6200245c6200263c565b6001600160a01b038116620024a95760405162461bcd60e51b815260206004820152601260248201527116995c9bc8199959481c9958da5c1a595b9d60721b60448201526064016200084b565b6006546040516001600160a01b038084169216907fd3890fc76afcfc31cba1dcf2c27b50e2541e4d75039c981855b5b5e03682aea0905f90a3600680546001600160a01b0319166001600160a01b0392909216919091179055565b6200250e6200263c565b600180546001600160a01b0383166001600160a01b031990911681179091556200253f5f546001600160a01b031690565b6001600160a01b03167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b600f546001600160a01b0316158015906200259c5750600f546001600160a01b031633145b620025e25760405162461bcd60e51b8152602060048201526015602482015274556e617574686f72697a65642063616c6c6261636b60581b60448201526064016200084b565b5f80620025f28385018562004126565b915091505f8613156200261557620026156001600160a01b03831633886200274b565b5f8513156200263457620026346001600160a01b03821633876200274b565b505050505050565b5f546001600160a01b0316331462000caa5760405163118cdaa760e01b81523360048201526024016200084b565b5f620026808285670de0b6b3a764000062002c7c565b6200268c9084620042d3565b949350505050565b5f80620026b88486620026b0670de0b6b3a764000080620041e4565b6001620038ea565b90505f620027148487620026ce8a6002620041e4565b620026da9190620042d3565b620026e69089620041e4565b670de0b6b3a7640000620026fb8180620041e4565b62002708906002620041e4565b620026b09190620041e4565b9050620027228183620042d3565b979650505050505050565b6200273762003937565b60025f80516020620057dc83398151915255565b6200275a838383600162003968565b6200196e57604051635274afe760e01b81526001600160a01b03841660048201526024016200084b565b5f8411620027c75760405162461bcd60e51b815260206004820152600f60248201526e5a65726f206261736520707269636560881b60448201526064016200084b565b5f8211620028095760405162461bcd60e51b815260206004820152600e60248201526d5a65726f206d617820726169736560901b60448201526064016200084b565b6107d081101580156200281e57506127108111155b6200286c5760405162461bcd60e51b815260206004820152601760248201527f496e76616c6964206c697175696469747920736861726500000000000000000060448201526064016200084b565b6ec097ce7bc90715b34b9f100000000085111580156200289f5750722cd76fe086b93ce2f768a00b22a000000000008411155b8015620028bf5750722cd76fe086b93ce2f768a00b22a000000000008311155b8015620028dd5750701d6329f1c35ca4bfabb9f56100000000008211155b6200291d5760405162461bcd60e51b815260206004820152600f60248201526e4375727665206f766572666c6f777360881b60448201526064016200084b565b5f6200292d5f8487878a620039cc565b90505f6200293d8287876200266a565b90505f6200297c612710620029538688620041e4565b6200295f919062004212565b62002973670de0b6b3a764000080620041e4565b846001620038ea565b9050876200298b8285620042d3565b1115620029db5760405162461bcd60e51b815260206004820152601e60248201527f537570706c7920746f6f20736d616c6c20666f72206c6971756964697479000060448201526064016200084b565b5050505050505050565b620029ef62003a73565b6001805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b600154600160a01b900460ff161562000caa5760405163d93c066560e01b815260040160405180910390fd5b60808101516001600160a01b03165f908152600b602052604081205460ff1662002ad15760405162461bcd60e51b815260206004820152601960248201527814185e5b595b9d081d1bdad95b881b9bdd08185b1b1bddd959603a1b60448201526064016200084b565b62002af582606001518360a001518460c001518560e0015186610100015162002784565b60028054905f62002b0683620044c2565b9190505590505f825f01518360200151846060015130866040015160405162002b2f9062003e12565b62002b3f95949392919062004522565b604051809103905ff08015801562002b59573d5f803e3d5ffd5b505f8381526003602081905260409182902080546001600160a01b03199081166001600160a01b0386811691909117835560808901516001808501805485169383169390931790925560a08a01516002850181905560c08b015195850186905560e08b015160048601819055600586018054339616861790556007805460068801556101008d0151908701819055600c54600888015560098701805460ff19169095179094558b88015197519899509497889794968b967f78f87bd22347e4e37db1ab310c6ce7e1780121e5e48207cd0b02d39ee87d28349662002c44968d96959490919062004576565b60405180910390a3505050919050565b5f612710825f016007015483600a015462002c709190620041e4565b620014dd919062004212565b5f805f62002c8b868662003a9e565b91509150815f0362002cb45783818162002ca95762002ca9620041fe565b0492505050620008bf565b81841162002cce5762002cce600385150260111862003aba565b5f848688095f868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010185841190960395909502919093039390930492909217029150509392505050565b5f805f8362002d5a5762002d53670de0b6b3a764000080620041e4565b8562002d6f565b8462002d6f670de0b6b3a764000080620041e4565b90925090505f600160401b62002d86838562004212565b1062002db157604062002da962002da385600160401b8662002c7c565b62003acb565b901b62002dc6565b62002dc662002da384600160c01b8562002c7c565b90506401000276a38111801562002df0575073fffd8963efd1fc6a506488495d951d5263988d2681105b62002e3e5760405162461bcd60e51b815260206004820152601b60248201527f5072696365206f75747369646520556e69737761702072616e6765000000000060448201526064016200084b565b95945050505050565b5f80826040015162002e60576020830151835162002e68565b825160208401515b91509150915091565b5f8360a0015190505f816001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa15801562002eb7573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062002edd9190620045d9565b505050505050905084606001516001600160a01b0316816001600160a01b03160362002f0a575050505050565b606085015160408601516001600160a01b039182169183169190911190151581145f8162002f39578562002f46565b62002f4660028862004212565b9050805f0362002f5a575050505050505050565b5f8062002f678a62002e47565b600f80546001600160a01b0319166001600160a01b038b811691821790925560608e8101516040805187861660208201529486168582015280518086038201815292850190819052630251596160e31b90529496509294509263128acb089262002fda9230928b928a926064016200467e565b60408051808303815f875af115801562002ff6573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906200301c91906200449f565b5050600f80546001600160a01b0319169055836200310157866001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa15801562003071573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620030979190620045d9565b5050505060608d015192985050506001600160a01b03808816911614620031015760405162461bcd60e51b815260206004820152601860248201527f506f6f6c207072696365206e6f7420636f72726563746564000000000000000060448201526064016200084b565b50505050505050505050565b80516040516370a0823160e01b81523060048201525f916001600160a01b0316906370a0823190602401602060405180830381865afa15801562003153573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906200317991906200429d565b608083015160208401516040516370a0823160e01b81523060048201529293505f926001600160a01b03909116906370a0823190602401602060405180830381865afa158015620031cc573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620031f291906200429d565b620031fe919062004228565b90505f806200320d8562002e47565b865191935091506200324a906001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000008662003c3c565b602085015162003285906001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000008562003c3c565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166388316456604051806101600160405280856001600160a01b03168152602001846001600160a01b0316815260200161271062ffffff168152602001620d899f1960020b8152602001620d89a060020b8152602001886040015162003315578662003317565b875b815260200188604001516200332d57876200332f565b865b81526020015f81526020015f8152602001306001600160a01b03168152602001428152506040518263ffffffff1660e01b8152600401620033719190620046ba565b6080604051808303815f875af1925050508015620033ae575060408051601f3d908101601f19168201909252620033ab9181019062004783565b60015b6200340257604080515f808252602082018190528183018190526060820152905187917f0d9e69eea1226c3cc6b24c170c2b55d6c198272e003451d42e20a842c1d9b914919081900360800190a2620034c1565b5f8a8152600d6020908152604080832087905560a08c018051600e9093529281902080546001600160a01b0319166001600160a01b03909316929092179091559051908a01518b917f0d9e69eea1226c3cc6b24c170c2b55d6c198272e003451d42e20a842c1d9b9149187906200347a57846200347c565b855b8d604001516200348d57866200348f565b855b604080516001600160a01b039095168552602085019390935291830152606082015260800160405180910390a2505050505b8451620034f9906001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000005f62003c3c565b602085015162002634906001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000005f62003c3c565b5f8062003542858762004228565b90505f6200356585876200355f670de0b6b3a764000080620041e4565b62002c7c565b90505f620035c185886200357b866002620041e4565b620035879190620042d3565b62003593908a620041e4565b670de0b6b3a7640000620035a88180620041e4565b620035b5906002620041e4565b6200355f9190620041e4565b905062000e458183620042d3565b600180546001600160a01b0319169055620014ba8162003c97565b620035f462002a3c565b6001805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25862002a1f3390565b600b8201546002830154600384015483925f928392620036539291869162002694565b91505f85600a0154865f01600401546200366e919062004228565b9050808310156200368357505f9050620036eb565b80831115620036e557600b86015460028701546003880154620036aa9291849189620039cc565b9350835f03620036c5575f80600193509350935050620036eb565b600b86015460028701546003880154620036e29291879162002694565b92505b50600190505b9250925092565b6040516370a0823160e01b81523060048201525f906001600160a01b038416906370a0823190602401602060405180830381865afa15801562003737573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906200375d91906200429d565b9050620037766001600160a01b03841633308562003ce6565b6040516370a0823160e01b8152306004820152829082906001600160a01b038616906370a0823190602401602060405180830381865afa158015620037bd573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620037e391906200429d565b620037ef919062004228565b146200196e5760405162461bcd60e51b815260206004820152601960248201527f556e737570706f72746564207061796d656e7420746f6b656e0000000000000060448201526064016200084b565b6001600160a01b0384165f908152600960205260408120805484929062003867908490620042d3565b90915550620038799050828262004228565b6001600160a01b038086165f908152600a6020908152604080832093881683529290529081208054909190620038b1908490620042d3565b90915550506001600160a01b0384165f9081526008602052604081208054839290620038df908490620042d3565b909155505050505050565b5f6200391e620038fa8362003d26565b80156200391957505f8480620039145762003914620041fe565b868809115b151590565b6200392b86868662002c7c565b62002e3e9190620042d3565b5f80516020620057dc8339815191525460020362000caa57604051633ee5aeb560e01b815260040160405180910390fd5b60405163a9059cbb60e01b5f8181526001600160a01b038616600452602485905291602083604481808b5af1925060015f51148316620039c0578383151615620039b4573d5f823e3d81fd5b5f873b113d1516831692505b60405250949350505050565b5f80620039ee86620039e7670de0b6b3a764000080620041e4565b8762002c7c565b620039fb906001620042d3565b90508281111562003a095750815b5f5b8181101562002722575f600262003a238484620042d3565b62003a30906001620042d3565b62003a3c919062004212565b90508762003a4d8a838a8a62002694565b1162003a5c5780915062003a6c565b62003a6960018262004228565b92505b5062003a0b565b600154600160a01b900460ff1662000caa57604051638dfc202b60e01b815260040160405180910390fd5b5f805f1983850993909202808410938190039390930393915050565b634e487b715f52806020526024601cfd5b5f6001821162003ad9575090565b816001600160801b821062003af35760809190911c9060401b5b600160401b821062003b0a5760409190911c9060201b5b640100000000821062003b225760209190911c9060101b5b62010000821062003b385760109190911c9060081b5b610100821062003b4d5760089190911c9060041b5b6010821062003b615760049190911c9060021b5b6004821062003b6e5760011b5b600302600190811c9081858162003b895762003b89620041fe565b048201901c9050600181858162003ba45762003ba4620041fe565b048201901c9050600181858162003bbf5762003bbf620041fe565b048201901c9050600181858162003bda5762003bda620041fe565b048201901c9050600181858162003bf55762003bf5620041fe565b048201901c9050600181858162003c105762003c10620041fe565b048201901c905062003c3381858162003c2d5762003c2d620041fe565b04821190565b90039392505050565b62003c4a8383835f62003d57565b6200196e5762003c5e83835f600162003d57565b62003c8857604051635274afe760e01b81526001600160a01b03841660048201526024016200084b565b6200275a838383600162003d57565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b62003cf684848484600162003da3565b62003d2057604051635274afe760e01b81526001600160a01b03851660048201526024016200084b565b50505050565b5f600282600381111562003d3e5762003d3e62003fdf565b62003d4a9190620047cb565b60ff166001149050919050565b60405163095ea7b360e01b5f8181526001600160a01b038616600452602485905291602083604481808b5af1925060015f51148316620039c0578383151615620039b4573d5f823e3d81fd5b6040516323b872dd60e01b5f8181526001600160a01b038781166004528616602452604485905291602083606481808c5af1925060015f5114831662003e0157838315161562003df5573d5f823e3d81fd5b5f883b113d1516831692505b604052505f60605295945050505050565b610fec80620047f083390190565b6001600160a01b0381168114620014ba575f80fd5b803562000a498162003e20565b5f6020828403121562003e53575f80fd5b8135620008bf8162003e20565b5f6020828403121562003e71575f80fd5b5035919050565b5f806040838503121562003e8a575f80fd5b50508035926020909101359150565b8015158114620014ba575f80fd5b5f806040838503121562003eb9575f80fd5b823562003ec68162003e20565b9150602083013562003ed88162003e99565b809150509250929050565b5f60c0828403121562003ef4575f80fd5b50919050565b5f8083601f84011262003f0b575f80fd5b50813567ffffffffffffffff81111562003f23575f80fd5b60208301915083602082850101111562003f3b575f80fd5b9250929050565b5f805f805f806060878903121562003f58575f80fd5b863567ffffffffffffffff8082111562003f70575f80fd5b62003f7e8a838b0162003efa565b9098509650602089013591508082111562003f97575f80fd5b62003fa58a838b0162003efa565b9096509450604089013591508082111562003fbe575f80fd5b5062003fcd89828a0162003efa565b979a9699509497509295939492505050565b634e487b7160e01b5f52602160045260245ffd5b600481106200401057634e487b7160e01b5f52602160045260245ffd5b9052565b84516001600160a01b0316815260208086015161018083019162004042908401826001600160a01b03169052565b5060408601516040830152606086015160608301526080860151608083015260a08601516200407c60a08401826001600160a01b03169052565b5060c086015160c083015260e086015160e0830152610100808701518184015250620040ad61012083018662003ff3565b610140820193909352610160015292915050565b5f60208284031215620040d2575f80fd5b813567ffffffffffffffff811115620040e9575f80fd5b82016101208185031215620008bf575f80fd5b5f805f606084860312156200410f575f80fd5b505081359360208301359350604090920135919050565b5f806040838503121562004138575f80fd5b8235620041458162003e20565b9150602083013562003ed88162003e20565b5f806040838503121562004169575f80fd5b82359150602083013562003ed88162003e20565b5f805f806060858703121562004191575f80fd5b8435935060208501359250604085013567ffffffffffffffff811115620041b6575f80fd5b620041c48782880162003efa565b95989497509550505050565b634e487b7160e01b5f52601160045260245ffd5b8082028115828204841417620014dd57620014dd620041d0565b634e487b7160e01b5f52601260045260245ffd5b5f82620042235762004223620041fe565b500490565b81810381811115620014dd57620014dd620041d0565b81356200424b8162003e20565b81546001600160a01b0319166001600160a01b03919091161781556020820135600182015560408201356002820155606082013560038201556080820135600482015560a09190910135600590910155565b5f60208284031215620042ae575f80fd5b5051919050565b5f60208284031215620042c6575f80fd5b8151620008bf8162003e20565b80820180821115620014dd57620014dd620041d0565b634e487b7160e01b5f52604160045260245ffd5b604051610120810167ffffffffffffffff81118282101715620043245762004324620042e9565b60405290565b5f82601f8301126200433a575f80fd5b813567ffffffffffffffff80821115620043585762004358620042e9565b604051601f8301601f19908116603f01168101908282118183101715620043835762004383620042e9565b816040528381528660208588010111156200439c575f80fd5b836020870160208301375f602085830101528094505050505092915050565b5f6101208236031215620043cd575f80fd5b620043d7620042fd565b823567ffffffffffffffff80821115620043ef575f80fd5b620043fd368387016200432a565b8352602085013591508082111562004413575f80fd5b62004421368387016200432a565b602084015260408501359150808211156200443a575f80fd5b5062004449368286016200432a565b60408301525060608301356060820152620044676080840162003e35565b608082015260a083013560a082015260c083013560c082015260e083013560e082015261010080840135818301525080915050919050565b5f8060408385031215620044b1575f80fd5b505080516020909101519092909150565b5f60018201620044d657620044d6620041d0565b5060010190565b5f81518084525f5b818110156200450357602081850181015186830182015201620044e5565b505f602082860101526020601f19601f83011685010191505092915050565b60a081525f6200453660a0830188620044dd565b82810360208401526200454a8188620044dd565b604084018790526001600160a01b03861660608501528381036080850152905062000e458185620044dd565b5f60018060a01b03808a1683528089166020840152508660408301528560608301528460808301528360a083015260e060c0830152620045ba60e0830184620044dd565b9998505050505050505050565b805161ffff8116811462000a49575f80fd5b5f805f805f805f60e0888a031215620045f0575f80fd5b8751620045fd8162003e20565b8097505060208801518060020b811462004615575f80fd5b95506200462560408901620045c7565b94506200463560608901620045c7565b93506200464560808901620045c7565b925060a088015160ff811681146200465b575f80fd5b60c08901519092506200466e8162003e99565b8091505092959891949750929550565b6001600160a01b0386811682528515156020830152604082018590528316606082015260a0608082018190525f906200272290830184620044dd565b81516001600160a01b0316815261016081016020830151620046e760208401826001600160a01b03169052565b506040830151620046ff604084018262ffffff169052565b50606083015162004715606084018260020b9052565b5060808301516200472b608084018260020b9052565b5060a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015162004772828501826001600160a01b03169052565b505061014092830151919092015290565b5f805f806080858703121562004797575f80fd5b8451935060208501516001600160801b0381168114620047b5575f80fd5b6040860151606090960151949790965092505050565b5f60ff831680620047e057620047e0620041fe565b8060ff8416069150509291505056fe60a060405234801562000010575f80fd5b5060405162000fec38038062000fec8339810160408190526200003391620001c1565b818585600362000044838262000300565b50600462000053828262000300565b5050506001600160a01b0381166200008457604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b6200008f81620000af565b5060808390526006620000a3828262000300565b505050505050620003cc565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b634e487b7160e01b5f52604160045260245ffd5b5f82601f83011262000124575f80fd5b81516001600160401b038082111562000141576200014162000100565b604051601f8301601f19908116603f011681019082821181831017156200016c576200016c62000100565b816040528381526020925086602085880101111562000189575f80fd5b5f91505b83821015620001ac57858201830151818301840152908201906200018d565b5f602085830101528094505050505092915050565b5f805f805f60a08688031215620001d6575f80fd5b85516001600160401b0380821115620001ed575f80fd5b620001fb89838a0162000114565b9650602088015191508082111562000211575f80fd5b6200021f89838a0162000114565b604089015160608a0151919750955091506001600160a01b038216821462000245575f80fd5b6080880151919350808211156200025a575f80fd5b50620002698882890162000114565b9150509295509295909350565b600181811c908216806200028b57607f821691505b602082108103620002aa57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f821115620002fb57805f5260205f20601f840160051c81016020851015620002d75750805b601f840160051c820191505b81811015620002f8575f8155600101620002e3565b50505b505050565b81516001600160401b038111156200031c576200031c62000100565b62000334816200032d845462000276565b84620002b0565b602080601f8311600181146200036a575f8415620003525750858301515b5f19600386901b1c1916600185901b178555620003c4565b5f85815260208120601f198616915b828110156200039a5788860151825594840194600190910190840162000379565b5085821015620003b857878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b608051610c00620003ec5f395f818161025801526104270152610c005ff3fe608060405234801561000f575f80fd5b506004361061011c575f3560e01c8063715018a6116100a9578063af35c6c71161006e578063af35c6c71461023e578063bef97c8714610246578063d5abeb0114610253578063dd62ed3e1461027a578063f2fde38b146102b2575f80fd5b8063715018a6146101ed57806379cc6790146101f55780638da5cb5b1461020857806395d89b4114610223578063a9059cbb1461022b575f80fd5b806323b872dd116100ef57806323b872dd1461017b578063313ce5671461018e57806340c10f191461019d57806342966c68146101b257806370a08231146101c5575f80fd5b806303ee438c1461012057806306fdde031461013e578063095ea7b31461014657806318160ddd14610169575b5f80fd5b6101286102c5565b6040516101359190610a43565b60405180910390f35b610128610351565b610159610154366004610aaa565b6103e1565b6040519015158152602001610135565b6002545b604051908152602001610135565b610159610189366004610ad2565b6103fa565b60405160128152602001610135565b6101b06101ab366004610aaa565b61041d565b005b6101b06101c0366004610b0b565b6104b0565b61016d6101d3366004610b22565b6001600160a01b03165f9081526020819052604090205490565b6101b06104c5565b6101b0610203366004610aaa565b6104d8565b6005546040516001600160a01b039091168152602001610135565b610128610530565b610159610239366004610aaa565b61053f565b6101b061054c565b6007546101599060ff1681565b61016d7f000000000000000000000000000000000000000000000000000000000000000081565b61016d610288366004610b42565b6001600160a01b039182165f90815260016020908152604080832093909416825291909152205490565b6101b06102c0366004610b22565b6105d0565b600680546102d290610b73565b80601f01602080910402602001604051908101604052809291908181526020018280546102fe90610b73565b80156103495780601f1061032057610100808354040283529160200191610349565b820191905f5260205f20905b81548152906001019060200180831161032c57829003601f168201915b505050505081565b60606003805461036090610b73565b80601f016020809104026020016040519081016040528092919081815260200182805461038c90610b73565b80156103d75780601f106103ae576101008083540402835291602001916103d7565b820191905f5260205f20905b8154815290600101906020018083116103ba57829003601f168201915b5050505050905090565b5f336103ee81858561060a565b60019150505b92915050565b5f3361040785828561061c565b610412858585610698565b506001949350505050565b6104256106f5565b7f00000000000000000000000000000000000000000000000000000000000000008161045060025490565b61045a9190610bab565b11156104a25760405162461bcd60e51b815260206004820152601260248201527145786365656473206d617820737570706c7960701b60448201526064015b60405180910390fd5b6104ac8282610722565b5050565b6104b86106f5565b6104c23382610756565b50565b6104cd6106f5565b6104d65f61078a565b565b6104e06106f5565b60075460ff16156105265760405162461bcd60e51b815260206004820152601060248201526f151c98591a5b99c81b5a59dc985d195960821b6044820152606401610499565b6104ac8282610756565b60606004805461036090610b73565b5f336103ee818585610698565b6105546106f5565b60075460ff16156105995760405162461bcd60e51b815260206004820152600f60248201526e105b1c9958591e48195b98589b1959608a1b6044820152606401610499565b6007805460ff191660011790556040517feadb24812ab3c9a55c774958184293ebdb6c7f6a2dbab11f397d80c86feb65d3905f90a1565b6105d86106f5565b6001600160a01b03811661060157604051631e4fbdf760e01b81525f6004820152602401610499565b6104c28161078a565b61061783838360016107db565b505050565b6001600160a01b038381165f908152600160209081526040808320938616835292905220545f19811015610692578181101561068457604051637dc7a0d960e11b81526001600160a01b03841660048201526024810182905260448101839052606401610499565b61069284848484035f6107db565b50505050565b6001600160a01b0383166106c157604051634b637e8f60e11b81525f6004820152602401610499565b6001600160a01b0382166106ea5760405163ec442f0560e01b81525f6004820152602401610499565b6106178383836108ad565b6005546001600160a01b031633146104d65760405163118cdaa760e01b8152336004820152602401610499565b6001600160a01b03821661074b5760405163ec442f0560e01b81525f6004820152602401610499565b6104ac5f83836108ad565b6001600160a01b03821661077f57604051634b637e8f60e11b81525f6004820152602401610499565b6104ac825f836108ad565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b6001600160a01b0384166108045760405163e602df0560e01b81525f6004820152602401610499565b6001600160a01b03831661082d57604051634a1406b160e11b81525f6004820152602401610499565b6001600160a01b038085165f908152600160209081526040808320938716835292905220829055801561069257826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161089f91815260200190565b60405180910390a350505050565b6001600160a01b038316158015906108cd57506001600160a01b03821615155b156109175760075460ff166109175760405162461bcd60e51b815260206004820152601060248201526f151c985b9cd9995c9cc81b1bd8dad95960821b6044820152606401610499565b6106178383836001600160a01b038316610947578060025f82825461093c9190610bab565b909155506109b79050565b6001600160a01b0383165f90815260208190526040902054818110156109995760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610499565b6001600160a01b0384165f9081526020819052604090209082900390555b6001600160a01b0382166109d3576002805482900390556109f1565b6001600160a01b0382165f9081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610a3691815260200190565b60405180910390a3505050565b5f602080835283518060208501525f5b81811015610a6f57858101830151858201604001528201610a53565b505f604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610aa5575f80fd5b919050565b5f8060408385031215610abb575f80fd5b610ac483610a8f565b946020939093013593505050565b5f805f60608486031215610ae4575f80fd5b610aed84610a8f565b9250610afb60208501610a8f565b9150604084013590509250925092565b5f60208284031215610b1b575f80fd5b5035919050565b5f60208284031215610b32575f80fd5b610b3b82610a8f565b9392505050565b5f8060408385031215610b53575f80fd5b610b5c83610a8f565b9150610b6a60208401610a8f565b90509250929050565b600181811c90821680610b8757607f821691505b602082108103610ba557634e487b7160e01b5f52602260045260245ffd5b50919050565b808201808211156103f457634e487b7160e01b5f52601160045260245ffdfea264697066735822122090ddc87471e0ddf973a593ecb42949413d62fd9a4d0b7b7eed4e63589596f38964736f6c634300081800339b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00a2646970667358221220911cd40b3b7ab2a80cc272a4d28b40114c2d7e36243882110b0a2134b026996d64736f6c63430008180033",
    "sourceMap": "471:36907:20:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5357:51;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;706:14:22;;699:22;681:41;;669:2;654:18;5357:51:20;;;;;;;;34143:261;;;;;;:::i;:::-;;:::i;:::-;;36691:291;;;;;;:::i;:::-;;:::i;:::-;;;1064:25:22;;;1052:2;1037:18;36691:291:20;918:177:22;36988:388:20;;;;;;:::i;:::-;;:::i;:::-;;;;1527:25:22;;;1583:2;1568:18;;1561:34;;;;1500:18;36988:388:20;1353:248:22;30460:390:20;;;;;;:::i;:::-;;:::i;35249:250::-;;;;;;:::i;:::-;;:::i;2845:27::-;;;;;;6267:35;;;;;;34543:551;;;;;;:::i;:::-;;:::i;36525:65::-;;;:::i;9991:718::-;;;;;;:::i;:::-;;:::i;6853:32::-;;;;;;;;;;;;;;;-1:-1:-1;;;;;6853:32:20;;;;;;;;;;;;-1:-1:-1;;;;;4369:32:22;;;4351:51;;4433:2;4418:18;;4411:34;;;;4461:18;;;4454:34;;;;4519:2;4504:18;;4497:34;4562:3;4547:19;;4540:35;4389:3;4591:19;;4584:35;4338:3;4323:19;6853:32:20;4064:561:22;33740:214:20;;;;;;:::i;:::-;;:::i;21982:2091::-;;;;;;:::i;:::-;;:::i;3005:49::-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;6472:45;;;;;;:::i;:::-;;;;;;;;;;;;;;2878:47;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2878:47:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;4314:44::-;;;;;;:::i;:::-;;;;;;;;;;;;;;1726:84:12;1796:7;;-1:-1:-1;;;1796:7:12;;;;1726:84;;3077:35:20;;;;;-1:-1:-1;;;;;3077:35:20;;;;;;-1:-1:-1;;;;;6337:32:22;;;6319:51;;6307:2;6292:18;3077:35:20;6173:203:22;9697:141:20;;;;;;:::i;:::-;;:::i;30979:416::-;;;;;;:::i;:::-;;:::i;18105:1439::-;;;;;;:::i;:::-;;:::i;2293:101:0:-;;;:::i;3540:48:20:-;;3584:4;3540:48;;6017:60;;;;;2244:229:1;;;:::i;6523:41:20:-;;;;;;:::i;:::-;;;;;;;;;;;;-1:-1:-1;;;;;6523:41:20;;;36458:61;;;:::i;1638:85:0:-;1684:7;1710:6;-1:-1:-1;;;;;1710:6:0;1638:85;;14153:1362:20;;;;;;:::i;:::-;;:::i;28737:1318::-;;;;;;:::i;:::-;;:::i;35724:424::-;;;;;;:::i;:::-;;:::i;3118:28::-;;;;;;5071:64;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;3302:42;;3340:4;3302:42;;19943:934;;;;;;:::i;:::-;;:::i;4510:47::-;;;;;;:::i;:::-;;;;;;;;;;;;;;5559:39;;5593:5;5559:39;;;;;8416:8:22;8404:21;;;8386:40;;8374:2;8359:18;5559:39:20;8242:190:22;1232:99:1;1311:13;;-1:-1:-1;;;;;1311:13:1;1232:99;;33275:259:20;;;;;;:::i;:::-;;:::i;2931:68::-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;1649:178:1;;;;;;:::i;:::-;;:::i;28048:470:20:-;;;;;;:::i;:::-;;:::i;6210:51::-;;6257:4;6210:51;;34143:261;1531:13:0;:11;:13::i;:::-;6257:4:20::1;34231:8;:32;;34223:59;;;::::0;-1:-1:-1;;;34223:59:20;;9508:2:22;34223:59:20::1;::::0;::::1;9490:21:22::0;9547:2;9527:18;;;9520:30;-1:-1:-1;;;9566:18:22;;;9559:44;9620:18;;34223:59:20::1;;;;;;;;;34325:20;::::0;34297:59:::1;::::0;;1527:25:22;;;1583:2;1568:18;;1561:34;;;34297:59:20::1;::::0;1500:18:22;34297:59:20::1;;;;;;;34366:20;:31:::0;34143:261::o;36691:291::-;36755:7;36804:19;;;:8;:19;;;;;;;36876:17;;;;36907:24;;;;36945:20;;;;36804:19;;36840:135;;:22;:135::i;:::-;36833:142;36691:291;-1:-1:-1;;;36691:291:20:o;36988:388::-;37066:12;37133:19;;;:8;:19;;;;;;;37212:17;;;;37251:24;;;;37277:20;;;;37066:12;;37169:138;;37212:17;37231:6;;37251:24;37169:29;:138::i;:::-;37331:29;;;;37162:145;;-1:-1:-1;37364:5:20;;37324:36;;37162:145;37324:36;:::i;:::-;37323:46;;;;:::i;:::-;37317:52;;37093:283;36988:388;;;;;:::o;30460:390::-;30520:14;3023:21:13;:19;:21::i;:::-;-1:-1:-1;;;;;;30555:25:20;::::1;;::::0;;;:9:::1;:25;::::0;;;;;;;30581:10:::1;30555:37:::0;;;;;;;;30610:10;30602:39:::1;;;::::0;-1:-1:-1;;;30602:39:20;;10413:2:22;30602:39:20::1;::::0;::::1;10395:21:22::0;10452:2;10432:18;;;10425:30;-1:-1:-1;;;10471:18:22;;;10464:46;10527:18;;30602:39:20::1;10211:340:22::0;30602:39:20::1;-1:-1:-1::0;;;;;30651:25:20;::::1;30691:1;30651:25:::0;;;:9:::1;:25;::::0;;;;;;;30677:10:::1;30651:37:::0;;;;;;;:41;;;30702:25;;;:9:::1;:25:::0;;;;;:35;;30731:6;;30691:1;30702:35:::1;::::0;30731:6;;30702:35:::1;:::i;:::-;::::0;;;-1:-1:-1;30747:38:20::1;::::0;-1:-1:-1;;;;;;30747:18:20;::::1;30766:10;30778:6:::0;30747:18:::1;:38::i;:::-;30800:43;::::0;1064:25:22;;;30824:10:20::1;::::0;-1:-1:-1;;;;;30800:43:20;::::1;::::0;::::1;::::0;1052:2:22;1037:18;30800:43:20::1;;;;;;;;3065:20:13::0;2365:1;-1:-1:-1;;;;;;;;;;;3972:62:13;3749:292;3065:20;30460:390:20;;;:::o;35249:250::-;1531:13:0;:11;:13::i;:::-;-1:-1:-1;;;;;35347:19:20;::::1;35339:50;;;::::0;-1:-1:-1;;;35339:50:20;;10891:2:22;35339:50:20::1;::::0;::::1;10873:21:22::0;10930:2;10910:18;;;10903:30;-1:-1:-1;;;10949:18:22;;;10942:48;11007:18;;35339:50:20::1;10689:342:22::0;35339:50:20::1;-1:-1:-1::0;;;;;35399:26:20;::::1;;::::0;;;:19:::1;:26;::::0;;;;;;;;:36;;-1:-1:-1;;35399:36:20::1;::::0;::::1;;::::0;;::::1;::::0;;;35450:42;;681:41:22;;;35450:42:20::1;::::0;654:18:22;35450:42:20::1;;;;;;;35249:250:::0;;:::o;34543:551::-;1531:13:0;:11;:13::i;:::-;34666:1:20::1;34635:19;;::::0;::::1;:6:::0;:19:::1;:::i;:::-;-1:-1:-1::0;;;;;34635:33:20::1;::::0;34627:64:::1;;;::::0;-1:-1:-1;;;34627:64:20;;10891:2:22;34627:64:20::1;::::0;::::1;10873:21:22::0;10930:2;10910:18;;;10903:30;-1:-1:-1;;;10949:18:22;;;10942:48;11007:18;;34627:64:20::1;10689:342:22::0;34627:64:20::1;34709:19;:40;34729:19;;::::0;::::1;:6:::0;:19:::1;:::i;:::-;-1:-1:-1::0;;;;;34709:40:20::1;::::0;;::::1;::::0;::::1;::::0;;;;;;-1:-1:-1;34709:40:20;;::::1;;34701:78;;;::::0;-1:-1:-1;;;34701:78:20;;11238:2:22;34701:78:20::1;::::0;::::1;11220:21:22::0;11277:2;11257:18;;;11250:30;-1:-1:-1;;;11296:18:22;;;11289:55;11361:18;;34701:78:20::1;11036:349:22::0;34701:78:20::1;34789:102;34804:6;:16;;;34822:6;:16;;;34840:6;:12;;;34854:6;:15;;;34871:6;:19;;;34789:14;:102::i;:::-;34916:6:::0;34901:12:::1;:21;34916:6:::0;34901:12;:21:::1;:::i;:::-;-1:-1:-1::0;34937:150:20::1;::::0;-1:-1:-1;34970:19:20::1;;::::0;::::1;:6:::0;:19:::1;:::i;:::-;35009:16;34937:150:::0;;-1:-1:-1;;;;;4369:32:22;;;4351:51;;34991:16:20::1;::::0;;::::1;;4418:18:22::0;;;4411:34;35009:16:20;;::::1;;4461:18:22::0;;;4454:34;35027:12:20::1;::::0;;::::1;;4504:18:22::0;;;4497:34;35041:15:20::1;::::0;;::::1;;4547:19:22::0;;;4540:35;35058:19:20::1;::::0;;::::1;;4591::22::0;;;4584:35;4338:3;4323:19;34937:150:20::1;;;;;;;34543:551:::0;:::o;36525:65::-;1531:13:0;:11;:13::i;:::-;36573:10:20::1;:8;:10::i;:::-;36525:65::o:0;9991:718::-;10138:17;1350:19:12;:17;:19::i;:::-;10171:36:20::1;::::0;;::::1;::::0;::::1;::::0;;10195:12:::1;10171:36:::0;-1:-1:-1;;;;;10171:36:20::1;::::0;;;;;::::1;::::0;::::1;::::0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10217:57:::1;;;::::0;-1:-1:-1;;;10217:57:20;;12239:2:22;10217:57:20::1;::::0;::::1;12221:21:22::0;12278:2;12258:18;;;12251:30;-1:-1:-1;;;12297:18:22;;;12290:46;12353:18;;10217:57:20::1;12037:340:22::0;10217:57:20::1;10319:373;::::0;;;::::1;;::::0;::::1;::::0;;::::1;;::::0;;;;;;;::::1;::::0;::::1;::::0;;;10291:411:::1;::::0;10319:373;;;10357:4;;;;;;10319:373;;10357:4;;;;10319:373;::::1;;::::0;::::1;::::0;;;;-1:-1:-1;;;10319:373:20;;;-1:-1:-1;10319:373:20::1;::::0;;::::1;;::::0;::::1;::::0;;::::1;::::0;::::1;::::0;;;;;;;;;;;;::::1;::::0;;10387:6;;;;;;10319:373;::::1;10387:6:::0;;;;10319:373;::::1;;::::0;::::1;::::0;;;;-1:-1:-1;;;10319:373:20;;;-1:-1:-1;10319:373:20::1;::::0;;::::1;;::::0;::::1;::::0;;::::1;::::0;::::1;::::0;;;;;;;;;;;;::::1;::::0;;10424:11;;;;;;10319:373;::::1;10424:11:::0;;;;10319:373;::::1;;::::0;::::1;::::0;;;;-1:-1:-1;;;10319:373:20;;;-1:-1:-1;10319:373:20::1;10464:11:::0;;::::1;::::0;10319:373;;::::1;::::0;10507:14;;-1:-1:-1;;;;;10319:373:20::1;::::0;;;;;;;;10550:11;::::1;::::0;10319:373;;;;;;;;10586:7;::::1;::::0;10319:373;;;;;;;;10621:10;::::1;::::0;10319:373;;;;;;;;10663:14;::::1;::::0;10319:373;;;;;10291:14:::1;:411::i;:::-;10284:418:::0;9991:718;-1:-1:-1;;;;;;;;9991:718:20:o;33740:214::-;1531:13:0;:11;:13::i;:::-;3340:4:20::1;33819:6;:21;;33811:46;;;::::0;-1:-1:-1;;;33811:46:20;;12584:2:22;33811:46:20::1;::::0;::::1;12566:21:22::0;12623:2;12603:18;;;12596:30;-1:-1:-1;;;12642:18:22;;;12635:42;12694:18;;33811:46:20::1;12382:336:22::0;33811:46:20::1;33893:13;::::0;33872:43:::1;::::0;;1527:25:22;;;1583:2;1568:18;;1561:34;;;33872:43:20::1;::::0;1500:18:22;33872:43:20::1;;;;;;;33925:13;:22:::0;33740:214::o;21982:2091::-;3023:21:13;:19;:21::i;:::-;22050:27:20::1;22080:19:::0;;;:8:::1;:19;::::0;;;;22134:22:::1;22117:13;::::0;::::1;::::0;::::1;;:39;::::0;::::1;;;;;;:::i;:::-;;22109:73;;;::::0;-1:-1:-1;;;22109:73:20;;12925:2:22;22109:73:20::1;::::0;::::1;12907:21:22::0;12964:2;12944:18;;;12937:30;-1:-1:-1;;;12983:18:22;;;12976:51;13044:18;;22109:73:20::1;12723:345:22::0;22109:73:20::1;22193:21;22217:24;22233:7;22217:15;:24::i;:::-;22193:48;;22251:13;22267:89;22290:7;:17;;;22309:7;:14;;:24;;;22335:7;:14;;:20;;;22267:22;:89::i;:::-;22251:105:::0;-1:-1:-1;22515:19:20::1;22537:53;22549:13:::0;1118:25:19::1;991:4;::::0;1118:25:::1;:::i;:::-;22584:5:20;22537:11;:53::i;:::-;-1:-1:-1::0;;;;;;;;;;;;;;;;;;;;;;;;;;;22639:20:20;;-1:-1:-1;;;;;22639:20:20;;::::1;22629:30:::0;;;22639:20;22681:27;::::1;::::0;;;::::1;-1:-1:-1::0;;;;22669:39:20;;;-1:-1:-1;;;;;;22718:55:20;22824:13:::1;::::0;::::1;:37:::0;;-1:-1:-1;;22824:37:20::1;22840:21;22824:37;::::0;;22871:29;;:9:::1;:29:::0;;;;;:46;;22515:75;;-1:-1:-1;;;22904:13:20;;-1:-1:-1;22871:46:20::1;::::0;22904:13;;22871:46:::1;:::i;:::-;::::0;;;-1:-1:-1;;22945:9:20::1;::::0;::::1;::::0;:34:::1;::::0;-1:-1:-1;;;22945:34:20;;22973:4:::1;22945:34;::::0;::::1;6319:51:22::0;22982:13:20;;-1:-1:-1;;;;;22945:19:20::1;::::0;::::1;::::0;6292:18:22;;22945:34:20::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:50;;;;:::i;:::-;22928:1;:14;;:67;;;::::0;::::1;23006:1;:7;;;-1:-1:-1::0;;;;;23006:23:20::1;;:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;23062:1;23046:13;:17;:36;;;;;23081:1;23067:11;:15;23046:36;23042:442;;;23098:7:::0;;:40:::1;::::0;-1:-1:-1;;;23098:40:20;;23119:4:::1;23098:40;::::0;::::1;13436:51:22::0;13503:18;;;13496:34;;;-1:-1:-1;;;;;23098:12:20;;::::1;::::0;::::1;::::0;13409:18:22;;23098:40:20::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;23172:37;23186:5;23193:1;:15;;;23172:13;:37::i;:::-;-1:-1:-1::0;;;;;23152:57:20::1;:17;::::0;::::1;:57:::0;23224:10:::1;::::0;23250::::1;23152:1:::0;23250:7:::1;:10::i;:::-;23352:17;::::0;::::1;::::0;23283:87:::1;::::0;-1:-1:-1;;;23283:87:20;;-1:-1:-1;;;;;13826:15:22;;;23283:87:20::1;::::0;::::1;13808:34:22::0;13878:15;;;13858:18;;;13851:43;5593:5:20::1;13910:18:22::0;;;13903:49;13988:15;;;13968:18;;;13961:43;23223:37:20;;-1:-1:-1;23223:37:20;;-1:-1:-1;23283:15:20::1;:50;::::0;::::1;::::0;13742:19:22;;23283:87:20::1;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1::0;;;;;23274:96:20::1;:6;::::0;::::1;:96:::0;23384:48:::1;23274:1:::0;23405:11;23418:13;23384:17:::1;:48::i;:::-;23446:27;23460:9;23471:1;23446:13;:27::i;:::-;23084:400;;23042:442;23598:7:::0;;:32:::1;::::0;-1:-1:-1;;;23598:32:20;;23624:4:::1;23598:32;::::0;::::1;6319:51:22::0;23577:18:20::1;::::0;-1:-1:-1;;;;;23598:17:20::1;::::0;::::1;::::0;6292:18:22;;23598:32:20::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;23577:53:::0;-1:-1:-1;23644:14:20;;23640:44:::1;;23660:7:::0;;:24:::1;::::0;-1:-1:-1;;;23660:24:20;;::::1;::::0;::::1;1064:25:22::0;;;-1:-1:-1;;;;;23660:12:20;;::::1;::::0;::::1;::::0;1037:18:22;;23660:24:20::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;23640:44;23753:14;::::0;::::1;::::0;23716:9:::1;::::0;::::1;::::0;:34:::1;::::0;-1:-1:-1;;;23716:34:20;;23744:4:::1;23716:34;::::0;::::1;6319:51:22::0;23694:19:20::1;::::0;23753:14;-1:-1:-1;;;;;23716:19:20::1;::::0;::::1;::::0;6292:18:22;;23716:34:20::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:51;;;;:::i;:::-;23694:73:::0;-1:-1:-1;23781:15:20;;23777:172:::1;;23830:9;::::0;;::::1;::::0;-1:-1:-1;;;;;23812:29:20;;::::1;;::::0;;;:9:::1;:29:::0;;;;;;23842:22:::1;::::0;::::1;::::0;;;::::1;23812:53:::0;;;;;;;;:68;;23869:11;;23812:29;:68:::1;::::0;23869:11;;23812:68:::1;:::i;:::-;::::0;;;-1:-1:-1;;23912:9:20::1;::::0;;::::1;::::0;-1:-1:-1;;;;;23894:29:20::1;;::::0;;;:9:::1;:29:::0;;;;;;:44;;23927:11;;23894:29;:44:::1;::::0;23927:11;;23894:44:::1;:::i;:::-;::::0;;;-1:-1:-1;;23777:172:20::1;24039:1;:7;;;-1:-1:-1::0;;;;;24039:25:20::1;;:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;22040:2033;;;;;;;3065:20:13::0;2365:1;-1:-1:-1;;;;;;;;;;;3972:62:13;3749:292;3065:20;21982:2091:20;:::o;9697:141::-;9778:17;1350:19:12;:17;:19::i;:::-;9814:17:20::1;;9829:1:::0;9814:17:::1;:::i;:::-;:14;:17::i;:::-;9807:24:::0;9697:141;-1:-1:-1;;9697:141:20:o;30979:416::-;31051:14;3023:21:13;:19;:21::i;:::-;-1:-1:-1;;;;;;31086:28:20;::::1;;::::0;;;:12:::1;:28;::::0;;;;;31132:10;31124:39:::1;;;::::0;-1:-1:-1;;;31124:39:20;;10413:2:22;31124:39:20::1;::::0;::::1;10395:21:22::0;10452:2;10432:18;;;10425:30;-1:-1:-1;;;10471:18:22;;;10464:46;10527:18;;31124:39:20::1;10211:340:22::0;31124:39:20::1;-1:-1:-1::0;;;;;31173:28:20;::::1;31204:1;31173:28:::0;;;:12:::1;:28;::::0;;;;;;;:32;;;31215:9:::1;:25:::0;;;;;:35;;31244:6;;31204:1;31215:35:::1;::::0;31244:6;;31215:35:::1;:::i;:::-;::::0;;;-1:-1:-1;;31279:20:20::1;::::0;31260:48:::1;::::0;-1:-1:-1;;;;;31260:18:20;;::::1;::::0;31279:20:::1;31301:6:::0;31260:18:::1;:48::i;:::-;31359:20;::::0;31323:65:::1;::::0;1064:25:22;;;-1:-1:-1;;;;;31359:20:20;;::::1;::::0;31323:65;::::1;::::0;::::1;::::0;1052:2:22;1037:18;31323:65:20::1;918:177:22::0;18105:1439:20;3023:21:13;:19;:21::i;:::-;18213:27:20::1;18243:19:::0;;;:8:::1;:19;::::0;;;;18297::::1;18280:13;::::0;::::1;::::0;::::1;;:36;::::0;::::1;;;;;;:::i;:::-;;18272:67;;;::::0;-1:-1:-1;;;18272:67:20;;16983:2:22;18272:67:20::1;::::0;::::1;16965:21:22::0;17022:2;17002:18;;;16995:30;-1:-1:-1;;;17041:18:22;;;17034:48;17099:18;;18272:67:20::1;16781:342:22::0;18272:67:20::1;18366:1;18357:6;:10;18349:34;;;::::0;-1:-1:-1;;;18349:34:20;;17330:2:22;18349:34:20::1;::::0;::::1;17312:21:22::0;17369:2;17349:18;;;17342:30;-1:-1:-1;;;17388:18:22;;;17381:41;17439:18;;18349:34:20::1;17128:335:22::0;18349:34:20::1;18524:24;::::0;;;:13:::1;:24;::::0;;;;;;;18549:10:::1;18524:36:::0;;;;;;;;:46;-1:-1:-1;18524:46:20::1;18516:74;;;::::0;-1:-1:-1;;;18516:74:20;;17670:2:22;18516:74:20::1;::::0;::::1;17652:21:22::0;17709:2;17689:18;;;17682:30;-1:-1:-1;;;17728:18:22;;;17721:45;17783:18;;18516:74:20::1;17468:339:22::0;18516:74:20::1;18601:16;18620:131;18668:7;:17;;;18687:6;18695:7;:14;;:24;;;18721:7;:14;;:20;;;18620:34;:131::i;:::-;18601:150;;18761:19;18828:5;18795:7;:14;;:29;;;18784:8;:40;;;;:::i;:::-;18783:50;;;;:::i;:::-;18761:72:::0;-1:-1:-1;18877:11:20;18851:22:::1;18761:72:::0;18851:8;:22:::1;:::i;:::-;:37;;18843:67;;;::::0;-1:-1:-1;;;18843:67:20;;18014:2:22;18843:67:20::1;::::0;::::1;17996:21:22::0;18053:2;18033:18;;;18026:30;-1:-1:-1;;;18072:18:22;;;18065:47;18129:18;;18843:67:20::1;17812:341:22::0;18843:67:20::1;18978:27;::::0;::::1;::::0;19015:19:::1;::::0;::::1;:31:::0;;-1:-1:-1;;;;;18978:27:20;;::::1;::::0;19038:8;;19015:19;18961:14:::1;::::0;19015:31:::1;::::0;19038:8;;19015:31:::1;:::i;:::-;;;;;;;;19077:6;19056:7;:17;;;:27;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;;19093:24:20::1;::::0;;;:13:::1;:24;::::0;;;;;;;19118:10:::1;19093:36:::0;;;;;;;:46;;19133:6;;19093:24;:46:::1;::::0;19133:6;;19093:46:::1;:::i;:::-;::::0;;;-1:-1:-1;19180:22:20::1;::::0;-1:-1:-1;19191:11:20;19180:8;:22:::1;:::i;:::-;-1:-1:-1::0;;;;;19149:27:20;::::1;;::::0;;;:9:::1;:27;::::0;;;;:53;;:27;;;:53:::1;::::0;;;::::1;:::i;:::-;::::0;;;-1:-1:-1;;;;;;;19212:30:20;::::1;;::::0;;;:12:::1;:30;::::0;;;;:45;;19246:11;;19212:30;:45:::1;::::0;19246:11;;19212:45:::1;:::i;:::-;::::0;;;-1:-1:-1;;19268:20:20;;:49:::1;::::0;-1:-1:-1;;;19268:49:20;;19298:10:::1;19268:49;::::0;::::1;13436:51:22::0;13503:18;;;13496:34;;;-1:-1:-1;;;;;19268:20:20;;::::1;::::0;:29:::1;::::0;13409:18:22;;19268:49:20::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;19327:56;19348:10;19371:11;19360:8;:22;;;;:::i;:::-;-1:-1:-1::0;;;;;19327:20:20;::::1;::::0;:56;:20:::1;:56::i;:::-;19489:19;::::0;::::1;::::0;19510:17:::1;::::0;::::1;::::0;19399:138:::1;::::0;;18417:25:22;;;18473:2;18458:18;;18451:34;;;18501:18;;;18494:34;;;18559:2;18544:18;;18537:34;;;;18602:3;18587:19;;18580:35;19434:10:20::1;::::0;19423:9;;19399:138:::1;::::0;18404:3:22;18389:19;19399:138:20::1;;;;;;;18203:1341;;;;3065:20:13::0;2365:1;-1:-1:-1;;;;;;;;;;;3972:62:13;3749:292;3065:20;18105:1439:20;;;:::o;2293:101:0:-;1531:13;:11;:13::i;:::-;2357:30:::1;2384:1;2357:18;:30::i;2244:229:1:-:0;1311:13;;735:10:10;;-1:-1:-1;;;;;1311:13:1;2339:24;;2335:96;;2386:34;;-1:-1:-1;;;2386:34:1;;-1:-1:-1;;;;;6337:32:22;;2386:34:1;;;6319:51:22;6292:18;;2386:34:1;6173:203:22;2335:96:1;2440:26;2459:6;2440:18;:26::i;36458:61:20:-;1531:13:0;:11;:13::i;:::-;36504:8:20::1;:6;:8::i;14153:1362::-:0;3023:21:13;:19;:21::i;:::-;1350:19:12::1;:17;:19::i;:::-;14270:27:20::2;14300:19:::0;;;:8:::2;:19;::::0;;;;14354::::2;14337:13;::::0;::::2;::::0;::::2;;:36;::::0;::::2;;;;;;:::i;:::-;;14329:67;;;::::0;-1:-1:-1;;;14329:67:20;;16983:2:22;14329:67:20::2;::::0;::::2;16965:21:22::0;17022:2;17002:18;;;16995:30;-1:-1:-1;;;17041:18:22;;;17034:48;17099:18;;14329:67:20::2;16781:342:22::0;14329:67:20::2;14423:1;14414:6;:10;14406:34;;;::::0;-1:-1:-1;;;14406:34:20;;17330:2:22;14406:34:20::2;::::0;::::2;17312:21:22::0;17369:2;17349:18;;;17342:30;-1:-1:-1;;;17388:18:22;;;17381:41;17439:18;;14406:34:20::2;17128:335:22::0;14406:34:20::2;14451:12;14473:13:::0;14523:22:::2;14529:7;14538:6;14523:5;:22::i;:::-;14585:29;::::0;::::2;::::0;14496:49;;-1:-1:-1;14496:49:20;;-1:-1:-1;14496:49:20;-1:-1:-1;14555:19:20::2;::::0;14618:5:::2;::::0;14578:36:::2;::::0;14496:49;14578:36:::2;:::i;:::-;14577:46;;;;:::i;:::-;14555:68:::0;-1:-1:-1;14663:7:20;14641:18:::2;14555:68:::0;14641:4;:18:::2;:::i;:::-;:29;;14633:59;;;::::0;-1:-1:-1;;;14633:59:20;;18014:2:22;14633:59:20::2;::::0;::::2;17996:21:22::0;18053:2;18033:18;;;18026:30;-1:-1:-1;;;18072:18:22;;;18065:47;18129:18;;14633:59:20::2;17812:341:22::0;14633:59:20::2;14766:4;14743:7;:19;;;:27;;;;;;;:::i;:::-;;;;;;;;14801:6;14780:7;:17;;;:27;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;;14817:24:20::2;::::0;;;:13:::2;:24;::::0;;;;;;;14842:10:::2;14817:36:::0;;;;;;;:46;;14857:6;;14817:24;:46:::2;::::0;14857:6;;14817:46:::2;:::i;:::-;::::0;;;-1:-1:-1;14924:18:20::2;::::0;-1:-1:-1;14931:11:20;14924:4;:18:::2;:::i;:::-;14891:27;::::0;::::2;::::0;-1:-1:-1;;;;;14891:27:20::2;14873:47;::::0;;;:9:::2;:47;::::0;;;;:69;;:47;;;:69:::2;::::0;;;::::2;:::i;:::-;::::0;;;-1:-1:-1;;14973:27:20::2;::::0;::::2;::::0;-1:-1:-1;;;;;14973:27:20::2;14952:50;::::0;;;:12:::2;:50;::::0;;;;:65;;15006:11;;14952:50;:65:::2;::::0;15006:11;;14952:65:::2;:::i;:::-;::::0;;;-1:-1:-1;;15027:77:20;::::2;;;15055:13;::::0;::::2;:38:::0;;-1:-1:-1;;15055:38:20::2;15071:22;15055:38;::::0;;15027:77:::2;15130:27;::::0;::::2;::::0;15114:64:::2;::::0;-1:-1:-1;;;;;15130:27:20::2;15159:18;15166:11:::0;15159:4;:18:::2;:::i;:::-;15114:15;:64::i;:::-;15188:20:::0;;:45:::2;::::0;-1:-1:-1;;;15188:45:20;;15214:10:::2;15188:45;::::0;::::2;13436:51:22::0;13503:18;;;13496:34;;;-1:-1:-1;;;;;15188:20:20;;::::2;::::0;:25:::2;::::0;13409:18:22;;15188:45:20::2;;;;;;;;;;;;;;;;;::::0;::::2;;;;;;;;;;;;::::0;::::2;;;;;-1:-1:-1::0;;;;15340:19:20::2;::::0;::::2;::::0;15361:17:::2;::::0;::::2;::::0;15249:139:::2;::::0;;18417:25:22;;;18473:2;18458:18;;18451:34;;;18501:18;;;18494:34;;;18559:2;18544:18;;18537:34;;;;18602:3;18587:19;;18580:35;15289:10:20::2;::::0;15278:9;;15249:139:::2;::::0;18404:3:22;18389:19;15249:139:20::2;;;;;;;15402:8;15398:111;;;15448:9;15431:67;15459:7;:19;;;15480:7;:17;;;15431:67;;;;;;1527:25:22::0;;;1583:2;1568:18;;1561:34;1515:2;1500:18;;1353:248;15431:67:20::2;;;;;;;;15398:111;14260:1255;;;;3065:20:13::0;2365:1;-1:-1:-1;;;;;;;;;;;3972:62:13;3749:292;28737:1318:20;28808:17;28827:19;3023:21:13;:19;:21::i;:::-;28858:27:20::1;28888:19:::0;;;:8:::1;:19;::::0;;;;;;;;28925:13:::1;::::0;::::1;::::0;::::1;;:38;::::0;::::1;;;;;;:::i;:::-;;:68;;;;-1:-1:-1::0;28967:21:20::1;::::0;;;:10:::1;:21;::::0;;;;;:26;::::1;28925:68;28917:92;;;::::0;-1:-1:-1;;;28917:92:20;;18828:2:22;28917:92:20::1;::::0;::::1;18810:21:22::0;18867:2;18847:18;;;18840:30;-1:-1:-1;;;18886:18:22;;;18879:41;18937:18;;28917:92:20::1;18626:335:22::0;28917:92:20::1;29084:241;::::0;;::::1;::::0;::::1;::::0;;-1:-1:-1;29153:21:20;;;:10:::1;:21;::::0;;;;;;;29084:241;;29211:4:::1;29084:241:::0;;::::1;::::0;;;-1:-1:-1;;;;;29084:241:20;;;;;;;;;;;;29047:288;;-1:-1:-1;;;29047:288:20;;19193:13:22;;29047:288:20::1;::::0;::::1;19175:32:22::0;19249:24;;-1:-1:-1;;;;;19245:50:22;;;19223:20;;;19216:80;19325:24;;19440:21;;19418:20;;;19411:51;19504:24;;19500:33;;;19478:20;;;19471:63;-1:-1:-1;;;29047:15:20::1;:23:::0;;::::1;::::0;::::1;::::0;19147:19:22;;29047:288:20::1;::::0;::::1;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;29406:27;::::0;::::1;::::0;29374:20;;29020:315;;-1:-1:-1;29020:315:20;;-1:-1:-1;;;;;;29406:27:20;;::::1;29374:20:::0;::::1;29366:68;::::0;29471:35:::1;;29499:2;29503;29471:35;;;29488:2;29492;29471:35;29554:28;::::0;::::1;::::0;29444:62;;-1:-1:-1;29444:62:20;-1:-1:-1;29517:21:20::1;::::0;29586:5:::1;::::0;29542:40:::1;::::0;29444:62;29542:40:::1;:::i;:::-;29541:50;;;;:::i;:::-;29517:74;;29601:23;29674:5;29642:7;:14;;:28;;;29628:11;:42;;;;:::i;:::-;29627:52;;;;:::i;:::-;29709:20:::0;;29732:22:::1;::::0;::::1;::::0;29601:78;;-1:-1:-1;29689:92:20::1;::::0;-1:-1:-1;;;;;29709:20:20;;::::1;::::0;29732:22:::1;29756:13:::0;29771:9;29689:11:::1;:92::i;:::-;29811:27;::::0;::::1;::::0;29841:22:::1;::::0;::::1;::::0;29791:103:::1;::::0;-1:-1:-1;;;;;29811:27:20;;::::1;::::0;29841:22:::1;29865:15:::0;29882:11;29791::::1;:103::i;:::-;29939:9:::0;29910:138:::1;29950:25;29962:13:::0;29950:9;:25:::1;:::i;:::-;29977:29;29991:15:::0;29977:11;:29:::1;:::i;:::-;29910:138;::::0;;20026:25:22;;;20082:2;20067:18;;20060:34;;;;20110:18;;20103:34;;;20168:2;20153:18;;20146:34;;;20013:3;19998:19;29910:138:20::1;;;;;;;28848:1207;;;;;;3065:20:13::0;2365:1;-1:-1:-1;;;;;;;;;;;3972:62:13;3749:292;3065:20;28737:1318:20;;;:::o;35724:424::-;3023:21:13;:19;:21::i;:::-;1531:13:0::1;:11;:13::i;:::-;-1:-1:-1::0;;;;;35815:16:20;::::2;35807:43;;;::::0;-1:-1:-1;;;35807:43:20;;20393:2:22;35807:43:20::2;::::0;::::2;20375:21:22::0;20432:2;20412:18;;;20405:30;-1:-1:-1;;;20451:18:22;;;20444:44;20505:18;;35807:43:20::2;20191:338:22::0;35807:43:20::2;35878:30;::::0;-1:-1:-1;;;35878:30:20;;35902:4:::2;35878:30;::::0;::::2;6319:51:22::0;35860:15:20::2;::::0;-1:-1:-1;;;;;35878:15:20;::::2;::::0;::::2;::::0;6292:18:22;;35878:30:20::2;;;;;;;;;;;;;;;;;::::0;::::2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1::0;;;;;35933:25:20;::::2;35918:12;35933:25:::0;;;:9:::2;:25;::::0;;;;;35860:48;;-1:-1:-1;35976:14:20;;::::2;35968:43;;;::::0;-1:-1:-1;;;35968:43:20;;20736:2:22;35968:43:20::2;::::0;::::2;20718:21:22::0;20775:2;20755:18;;;20748:30;-1:-1:-1;;;20794:18:22;;;20787:46;20850:18;;35968:43:20::2;20534:340:22::0;35968:43:20::2;36022:14;36039;36049:4:::0;36039:7;:14:::2;:::i;:::-;36022:31:::0;-1:-1:-1;36063:30:20::2;-1:-1:-1::0;;;;;36063:18:20;::::2;36082:2:::0;36022:31;36063:18:::2;:30::i;:::-;36130:2;-1:-1:-1::0;;;;;36108:33:20::2;36122:5;-1:-1:-1::0;;;;;36108:33:20::2;;36134:6;36108:33;;;;1064:25:22::0;;1052:2;1037:18;;918:177;36108:33:20::2;;;;;;;;35797:351;;;3065:20:13::0;2365:1;-1:-1:-1;;;;;;;;;;;3972:62:13;3749:292;3065:20;35724:424:20;;:::o;19943:934::-;3023:21:13;:19;:21::i;:::-;20020:27:20::1;20050:19:::0;;;:8:::1;:19;::::0;;;;20101:22:::1;::::0;::::1;::::0;-1:-1:-1;;;;;20101:22:20::1;20087:10;:36;20079:60;;;::::0;-1:-1:-1;;;20079:60:20;;21081:2:22;20079:60:20::1;::::0;::::1;21063:21:22::0;21120:2;21100:18;;;21093:30;-1:-1:-1;;;21139:18:22;;;21132:41;21190:18;;20079:60:20::1;20879:335:22::0;20079:60:20::1;20187:22;20170:13;::::0;::::1;::::0;::::1;;:39;::::0;::::1;;;;;;:::i;:::-;;:81;;;-1:-1:-1::0;20230:21:20::1;20213:13;::::0;::::1;::::0;::::1;;:38;::::0;::::1;;;;;;:::i;:::-;;20170:81;20149:149;;;::::0;-1:-1:-1;;;20149:149:20;;12925:2:22;20149:149:20::1;::::0;::::1;12907:21:22::0;12964:2;12944:18;;;12937:30;-1:-1:-1;;;12983:18:22;;;12976:51;13044:18;;20149:149:20::1;12723:345:22::0;20149:149:20::1;20317:28;::::0;;;:17:::1;:28;::::0;;;;;::::1;;20316:29;20308:59;;;::::0;-1:-1:-1;;;20308:59:20;;21421:2:22;20308:59:20::1;::::0;::::1;21403:21:22::0;21460:2;21440:18;;;21433:30;-1:-1:-1;;;21479:18:22;;;21472:47;21536:18;;20308:59:20::1;21219:341:22::0;20308:59:20::1;20445:14;20484:24;20500:7;20484:15;:24::i;:::-;20462:7;:19;;;:46;;;;:::i;:::-;20445:63;;20535:1;20526:6;:10;20518:42;;;::::0;-1:-1:-1;;;20518:42:20;;21767:2:22;20518:42:20::1;::::0;::::1;21749:21:22::0;21806:2;21786:18;;;21779:30;-1:-1:-1;;;21825:18:22;;;21818:49;21884:18;;20518:42:20::1;21565:343:22::0;20518:42:20::1;20610:28;::::0;;;:17:::1;:28;::::0;;;;;;;:35;;-1:-1:-1;;20610:35:20::1;20641:4;20610:35:::0;;::::1;::::0;;;20673:27;::::1;::::0;-1:-1:-1;;;;;20673:27:20::1;20655:47:::0;;:9:::1;:47:::0;;;;;:57;;20706:6;;20610:28;20655:57:::1;::::0;20706:6;;20655:57:::1;:::i;:::-;::::0;;;-1:-1:-1;;20763:22:20::1;::::0;::::1;::::0;;20722:27;::::1;::::0;:72:::1;::::0;-1:-1:-1;;;;;20722:27:20;;::::1;::::0;20763:22:::1;20787:6:::0;20722:40:::1;:72::i;:::-;20839:22;::::0;::::1;::::0;20810:60:::1;::::0;1064:25:22;;;-1:-1:-1;;;;;20839:22:20;;::::1;::::0;20828:9;;20810:60:::1;::::0;1052:2:22;1037:18;20810:60:20::1;;;;;;;20010:867;;3065:20:13::0;2365:1;-1:-1:-1;;;;;;;;;;;3972:62:13;3749:292;33275:259:20;1531:13:0;:11;:13::i;:::-;-1:-1:-1;;;;;33364:23:20;::::1;33356:54;;;::::0;-1:-1:-1;;;33356:54:20;;22115:2:22;33356:54:20::1;::::0;::::1;22097:21:22::0;22154:2;22134:18;;;22127:30;-1:-1:-1;;;22173:18:22;;;22166:48;22231:18;;33356:54:20::1;21913:342:22::0;33356:54:20::1;33453:20;::::0;33425:60:::1;::::0;-1:-1:-1;;;;;33425:60:20;;::::1;::::0;33453:20:::1;::::0;33425:60:::1;::::0;33453:20:::1;::::0;33425:60:::1;33495:20;:32:::0;;-1:-1:-1;;;;;;33495:32:20::1;-1:-1:-1::0;;;;;33495:32:20;;;::::1;::::0;;;::::1;::::0;;33275:259::o;1649:178:1:-;1531:13:0;:11;:13::i;:::-;1738::1::1;:24:::0;;-1:-1:-1;;;;;1738:24:1;::::1;-1:-1:-1::0;;;;;;1738:24:1;;::::1;::::0;::::1;::::0;;;1802:7:::1;1684::0::0;1710:6;-1:-1:-1;;;;;1710:6:0;;1638:85;1802:7:1::1;-1:-1:-1::0;;;;;1777:43:1::1;;;;;;;;;;;1649:178:::0;:::o;28048:470:20:-;28178:11;;-1:-1:-1;;;;;28178:11:20;:25;;;;:54;;-1:-1:-1;28221:11:20;;-1:-1:-1;;;;;28221:11:20;28207:10;:25;28178:54;28170:88;;;;-1:-1:-1;;;28170:88:20;;22462:2:22;28170:88:20;;;22444:21:22;22501:2;22481:18;;;22474:30;-1:-1:-1;;;22520:18:22;;;22513:51;22581:18;;28170:88:20;22260:345:22;28170:88:20;28269:10;;28295:36;;;;28306:4;28295:36;:::i;:::-;28268:63;;;;28360:1;28345:12;:16;28341:80;;;28363:58;-1:-1:-1;;;;;28363:23:20;;28387:10;28407:12;28363:23;:58::i;:::-;28450:1;28435:12;:16;28431:80;;;28453:58;-1:-1:-1;;;;;28453:23:20;;28477:10;28497:12;28453:23;:58::i;:::-;28160:358;;28048:470;;;;:::o;1796:162:0:-;1684:7;1710:6;-1:-1:-1;;;;;1710:6:0;735:10:10;1855:23:0;1851:101;;1901:40;;-1:-1:-1;;;1901:40:0;;735:10:10;1901:40:0;;;6319:51:22;6292:18;;1901:40:0;6173:203:22;3204:220:19;3333:7;3371:46;3383:5;3390:13;873:4;3371:11;:46::i;:::-;3359:58;;:9;:58;:::i;:::-;3352:65;3204:220;-1:-1:-1;;;;3204:220:19:o;1612:441::-;1772:7;;1808:57;1820:9;1831:6;1118:25;991:4;;1118:25;:::i;:::-;1846:18;1808:11;:57::i;:::-;1791:74;-1:-1:-1;1875:13:19;1891:124;1916:5;1953:6;1933:17;1937:13;1933:1;:17;:::i;:::-;:26;;;;:::i;:::-;1923:37;;:6;:37;:::i;:::-;873:4;1118:25;873:4;;1118:25;:::i;:::-;1962:9;;:1;:9;:::i;:::-;:23;;;;:::i;1891:124::-;1875:140;-1:-1:-1;2032:14:19;1875:140;2032:6;:14;:::i;:::-;2025:21;1612:441;-1:-1:-1;;;;;;;1612:441:19:o;3749:292:13:-;3872:25;:23;:25::i;:::-;2407:1;-1:-1:-1;;;;;;;;;;;3972:62:13;3749:292::o;1219:204:9:-;1306:37;1320:5;1327:2;1331:5;1338:4;1306:13;:37::i;:::-;1301:116;;1366:40;;-1:-1:-1;;;1366:40:9;;-1:-1:-1;;;;;6337:32:22;;1366:40:9;;;6319:51:22;6292:18;;1366:40:9;6173:203:22;12427:1036:20;12634:1;12622:9;:13;12614:41;;;;-1:-1:-1;;;12614:41:20;;23221:2:22;12614:41:20;;;23203:21:22;23260:2;23240:18;;;23233:30;-1:-1:-1;;;23279:18:22;;;23272:45;23334:18;;12614:41:20;23019:339:22;12614:41:20;12684:1;12673:8;:12;12665:39;;;;-1:-1:-1;;;12665:39:20;;23565:2:22;12665:39:20;;;23547:21:22;23604:2;23584:18;;;23577:30;-1:-1:-1;;;23623:18:22;;;23616:44;23677:18;;12665:39:20;23363:338:22;12665:39:20;3584:4;12735:12;:33;;:58;;;;;12788:5;12772:12;:21;;12735:58;12714:128;;;;-1:-1:-1;;;12714:128:20;;23908:2:22;12714:128:20;;;23890:21:22;23947:2;23927:18;;;23920:30;23986:25;23966:18;;;23959:53;24029:18;;12714:128:20;23706:347:22;12714:128:20;3905:4;12874:9;:29;;:61;;;;;3959:4;12907:9;:28;;12874:61;:89;;;;;3959:4;12939:5;:24;;12874:89;:136;;;;;4013:4;12983:8;:27;;12874:136;12853:198;;;;-1:-1:-1;;;12853:198:20;;24260:2:22;12853:198:20;;;24242:21:22;24299:2;24279:18;;;24272:30;-1:-1:-1;;;24318:18:22;;;24311:45;24373:18;;12853:198:20;24058:339:22;12853:198:20;13062:15;13080:65;13104:1;13107:8;13117:9;13128:5;13135:9;13080:23;:65::i;:::-;13062:83;;13155:18;13176:49;13199:7;13208:9;13219:5;13176:22;:49::i;:::-;13155:70;-1:-1:-1;13235:15:20;13253:120;13306:5;13279:23;13290:12;13279:8;:23;:::i;:::-;13278:33;;;;:::i;:::-;1118:25:19;991:4;;1118:25;:::i;:::-;13333:10:20;13345:18;13253:11;:120::i;:::-;13235:138;-1:-1:-1;13412:9:20;13391:17;13235:138;13391:7;:17;:::i;:::-;:30;;13383:73;;;;-1:-1:-1;;;13383:73:20;;24604:2:22;13383:73:20;;;24586:21:22;24643:2;24623:18;;;24616:30;24682:32;24662:18;;;24655:60;24732:18;;13383:73:20;24402:354:22;13383:73:20;12604:859;;;12427:1036;;;;;:::o;2586:117:12:-;1597:16;:14;:16::i;:::-;2644:7:::1;:15:::0;;-1:-1:-1;;;;2644:15:12::1;::::0;;2674:22:::1;735:10:10::0;2683:12:12::1;2674:22;::::0;-1:-1:-1;;;;;6337:32:22;;;6319:51;;6307:2;6292:18;2674:22:12::1;;;;;;;2586:117::o:0;1878:128::-;1796:7;;-1:-1:-1;;;1796:7:12;;;;1939:61;;;1974:15;;-1:-1:-1;;;1974:15:12;;;;;;;;;;;10715:1326:20;10838:14;;;;-1:-1:-1;;;;;10818:35:20;10781:17;10818:35;;;:19;:35;;;;;;;;10810:73;;;;-1:-1:-1;;;10810:73:20;;11238:2:22;10810:73:20;;;11220:21:22;11277:2;11257:18;;;11250:30;-1:-1:-1;;;11296:18:22;;;11289:55;11361:18;;10810:73:20;11036:349:22;10810:73:20;10893:77;10908:1;:11;;;10921:1;:11;;;10934:1;:7;;;10943:1;:10;;;10955:1;:14;;;10893;:77::i;:::-;10993:12;:14;;;:12;:14;;;:::i;:::-;;;;;10981:26;;11083:18;11121:1;:6;;;11129:1;:8;;;11139:1;:11;;;11160:4;11167:1;:13;;;11104:77;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;11324:27:20;11354:19;;;:8;:19;;;;;;;;;11438:20;;-1:-1:-1;;;;;;11438:20:20;;;-1:-1:-1;;;;;11438:20:20;;;;;;;;;11497:14;;;;-1:-1:-1;11468:19:20;;;:44;;;;;;;;;;;;;;11541:11;;;;11522:16;;;:30;;;11577:7;;;;11562:12;;;:22;;;11612:10;;;;11594:15;;;:28;;;11632:14;;;:27;;11649:10;11632:27;;;;;;11693:13;;;11669:21;;;:37;11438:20;11738:14;;;11716:19;;;:36;;;11785:20;;11762;;;:43;11815:13;;;:35;;-1:-1:-1;;11815:35:20;;;;;;;12011:13;;;;11866:168;;11438:20;;-1:-1:-1;11354:19:20;;;;11649:10;;11354:19;;11866:168;;;;11438:20;;11497:14;11541:11;11738:14;;12011:13;11866:168;:::i;:::-;;;;;;;;10800:1241;;;10715:1326;;;:::o;31401:169::-;31478:7;31558:5;31527:7;:14;;:27;;;31505:7;:19;;;:49;;;;:::i;:::-;31504:59;;;;:::i;7296:3683:16:-;7378:14;7429:12;7443:11;7458:12;7465:1;7468;7458:6;:12::i;:::-;7428:42;;;;7552:4;7560:1;7552:9;7548:365;;7887:11;7881:3;:17;;;;;:::i;:::-;;7874:24;;;;;;7548:365;8038:4;8023:11;:19;8019:142;;8062:84;5328:5;8082:16;;5327:36;940:4:11;5322:42:16;8062:11;:84::i;:::-;8413:17;8564:11;8561:1;8558;8551:25;8956:12;8986:15;;;8971:31;;9121:22;;;;;9854:1;9835;:15;;9834:21;;10087;;;10083:25;;10072:36;10157:21;;;10153:25;;10142:36;10229:21;;;10225:25;;10214:36;10300:21;;;10296:25;;10285:36;10373:21;;;10369:25;;10358:36;10447:21;;;10443:25;;;10432:36;9363:12;;;;9359:23;;;9384:1;9355:31;8676:18;;;8666:29;;;9470:11;;;;8719:19;;;;9214:14;;;;9463:18;;;;10922:13;;-1:-1:-1;;7296:3683:16;;;;;:::o;32637:520:20:-;32718:7;32738:11;32751;32766:13;:73;;1118:25:19;991:4;;1118:25;:::i;:::-;32833:5:20;32766:73;;;32783:5;1118:25:19;991:4;;1118:25;:::i;:::-;32737:102:20;;-1:-1:-1;32737:102:20;-1:-1:-1;32849:17:20;-1:-1:-1;;;32869:9:20;32737:102;;32869:9;:::i;:::-;:21;:140;;33007:2;32962:41;32972:30;32984:3;-1:-1:-1;;;32998:3:20;32972:11;:30::i;:::-;32962:9;:41::i;:::-;:47;;32869:140;;;32905:42;32915:31;32927:3;-1:-1:-1;;;32942:3:20;32915:11;:31::i;32905:42::-;32849:160;-1:-1:-1;5902:10:20;33027:26;;:56;;;;-1:-1:-1;5961:49:20;33057:26;;33027:56;33019:96;;;;-1:-1:-1;;;33019:96:20;;26965:2:22;33019:96:20;;;26947:21:22;27004:2;26984:18;;;26977:30;27043:29;27023:18;;;27016:57;27090:18;;33019:96:20;26763:351:22;33019:96:20;33140:9;32637:520;-1:-1:-1;;;;;32637:520:20:o;31576:237::-;31636:14;31652;31685:1;:15;;;:121;;31777:9;;;;31797:7;;31685:121;;;31724:7;;31742:9;;;;31685:121;31678:128;;;;31576:237;;;:::o;26952:1047::-;27062:19;27099:1;:6;;;27062:44;;27117:15;27142:4;-1:-1:-1;;;;;27142:10:20;;:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;27116:38;;;;;;;;27179:1;:17;;;-1:-1:-1;;;;;27168:28:20;:7;-1:-1:-1;;;;;27168:28:20;;27164:41;;27198:7;;26952:1047;;;:::o;27164:41::-;27243:17;;;;27336:15;;;;-1:-1:-1;;;;;27233:27:20;;;;;;;;;;;27322:29;;;;27215:15;27322:29;27377:44;;27408:13;27377:44;;;27390:15;27404:1;27390:11;:15;:::i;:::-;27361:60;;27435:5;27444:1;27435:10;27431:23;;27447:7;;;;;26952:1047;;;:::o;27431:23::-;27465:10;27477;27491;27499:1;27491:7;:10::i;:::-;27511:11;:27;;-1:-1:-1;;;;;;27511:27:20;-1:-1:-1;;;;;27511:27:20;;;;;;;;;27759:17;;;;;27778:18;;;28474:15:22;;;27778:18:20;;;28456:34:22;28526:15;;;28506:18;;;28499:43;27778:18:20;;;;;;;;;28391::22;;;27778::20;;;;-1:-1:-1;;;27707:90:20;;28474:15:22;;-1:-1:-1;28526:15:22;;-1:-1:-1;27511:27:20;27707:9;;:90;;27725:4;;27732:10;;27751:5;;27707:90;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;27807:11:20;:24;;-1:-1:-1;;;;;;27807:24:20;;;27847:10;27842:151;;27891:4;-1:-1:-1;;;;;27891:10:20;;:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;27936:17:20;;;;27873:30;;-1:-1:-1;;;;;;;;27925:28:20;;;;;;27917:65;;;;-1:-1:-1;;;27917:65:20;;29577:2:22;27917:65:20;;;29559:21:22;29616:2;29596:18;;;29589:30;29655:26;29635:18;;;29628:54;29699:18;;27917:65:20;29375:348:22;27917:65:20;27052:947;;;;;;;26952:1047;;;:::o;24232:1749::-;24334:7;;:32;;-1:-1:-1;;;24334:32:20;;24360:4;24334:32;;;6319:51:22;24313:18:20;;-1:-1:-1;;;;;24334:17:20;;;;6292:18:22;;24334:32:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;24436:14;;;;24399:9;;;;:34;;-1:-1:-1;;;24399:34:20;;24427:4;24399:34;;;6319:51:22;24313:53:20;;-1:-1:-1;24376:20:20;;-1:-1:-1;;;;;24399:19:20;;;;;;6292:18:22;;24399:34:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:51;;;;:::i;:::-;24376:74;;24461:10;24473;24487;24495:1;24487:7;:10::i;:::-;24523:7;;24460:37;;-1:-1:-1;24460:37:20;-1:-1:-1;24508:75:20;;-1:-1:-1;;;;;24508:37:20;24554:15;24572:10;24508:37;:75::i;:::-;24593:9;;;;:62;;-1:-1:-1;;;;;24593:22:20;24624:15;24642:12;24593:22;:62::i;:::-;24827:15;-1:-1:-1;;;;;24827:20:20;;24861:530;;;;;;;;24926:2;-1:-1:-1;;;;;24861:530:20;;;;;24954:2;-1:-1:-1;;;;;24861:530:20;;;;;5593:5;24861:530;;;;;;-1:-1:-1;;24861:530:20;;;;;;5847:6;24861:530;;;;;;25109:1;:15;;;:43;;25140:12;25109:43;;;25127:10;25109:43;24861:530;;;;25186:1;:15;;;:43;;25219:10;25186:43;;;25204:12;25186:43;24861:530;;;;25259:1;24861:530;;;;25290:1;24861:530;;;;25328:4;-1:-1:-1;;;;;24861:530:20;;;;;25361:15;24861:530;;;24827:574;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;-1:-1:-1;24827:574:20;;;;;;;;-1:-1:-1;;24827:574:20;;;;;;;;;;;;:::i;:::-;;;24823:1014;;25779:47;;;25814:1;31800:51:22;;;31882:2;31867:18;;31860:34;;;31910:18;;;31903:34;;;31968:2;31953:18;;31946:34;25779:47:20;;25795:9;;25779:47;;;;;;31787:3:22;25779:47:20;;;24823:1014;;;25481:21;;;;:10;:21;;;;;;;;:31;;;25546:6;;;;;25526;:17;;;;;;;:26;;-1:-1:-1;;;;;;25526:26:20;-1:-1:-1;;;;;25526:26:20;;;;;;;;;;25615:6;;25648:15;;;;25481:21;;25571:171;;25481:31;;25648;;25674:5;25648:31;;;25666:5;25648:31;25697:1;:15;;;:31;;25723:5;25697:31;;;25715:5;25697:31;25571:171;;;-1:-1:-1;;;;;31818:32:22;;;31800:51;;31882:2;31867:18;;31860:34;;;;31910:18;;;31903:34;31968:2;31953:18;;31946:34;31787:3;31772:19;25571:171:20;;;;;;;25402:351;;;;24823:1014;25862:7;;25847:66;;-1:-1:-1;;;;;25847:37:20;25893:15;25911:1;25847:37;:66::i;:::-;25923:9;;;;:51;;-1:-1:-1;;;;;25923:22:20;25954:15;25972:1;25923:22;:51::i;2647:422:19:-;2812:7;;2846:22;2862:6;2846:13;:22;:::i;:::-;2831:37;-1:-1:-1;2878:14:19;2895:37;2907:9;2918:6;1118:25;991:4;;1118:25;:::i;:::-;2895:11;:37::i;:::-;2878:54;-1:-1:-1;2942:13:19;2958:73;2970:5;2998:6;2987:8;2991:4;2987:1;:8;:::i;:::-;:17;;;;:::i;:::-;2977:28;;:6;:28;:::i;:::-;873:4;1118:25;873:4;;1118:25;:::i;:::-;3007:9;;:1;:9;:::i;:::-;:23;;;;:::i;2958:73::-;2942:89;-1:-1:-1;3048:14:19;2942:89;3048:6;:14;:::i;2011:153:1:-;2100:13;2093:20;;-1:-1:-1;;;;;;2093:20:1;;;2123:34;2148:8;2123:24;:34::i;2339:115:12:-;1350:19;:17;:19::i;:::-;2408:4:::1;2398:14:::0;;-1:-1:-1;;;;2398:14:12::1;-1:-1:-1::0;;;2398:14:12::1;::::0;;2427:20:::1;2434:12;735:10:10::0;;656:96;15828:1158:20;16075:17;;;;16102:24;;;;16128:20;;;;16006:9;;15938:14;;;;16032:126;;16075:17;16006:9;;16032:29;:126::i;:::-;16025:133;;16168:17;16214:7;:19;;;16188:7;:14;;:23;;;:45;;;;:::i;:::-;16168:65;;16254:9;16247:4;:16;16243:50;;;-1:-1:-1;16287:5:20;;-1:-1:-1;16265:28:20;;16243:50;16315:9;16308:4;:16;16304:639;;;16390:17;;;;16420:24;;;;16446:20;;;;16349:142;;16390:17;16409:9;;16468;16349:23;:142::i;:::-;16340:151;;16745:6;16755:1;16745:11;16741:36;;16766:1;16769;16772:4;16758:19;;;;;;;;;16741:36;16845:17;;;;16872:24;;;;16898:20;;;;16798:134;;16845:17;16864:6;;16798:29;:134::i;:::-;16791:141;;16304:639;-1:-1:-1;16974:4:20;;-1:-1:-1;15828:1158:20;;;;;;:::o;17273:365::-;17377:37;;-1:-1:-1;;;17377:37:20;;17408:4;17377:37;;;6319:51:22;17353:21:20;;-1:-1:-1;;;;;17377:22:20;;;;;6292:18:22;;17377:37:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;17353:61;-1:-1:-1;17424:63:20;-1:-1:-1;;;;;17424:29:20;;17454:10;17474:4;17481:5;17424:29;:63::i;:::-;17518:37;;-1:-1:-1;;;17518:37:20;;17549:4;17518:37;;;6319:51:22;17575:5:20;;17558:13;;-1:-1:-1;;;;;17518:22:20;;;;;6292:18:22;;17518:37:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:53;;;;:::i;:::-;:62;17497:134;;;;-1:-1:-1;;;17497:134:20;;32615:2:22;17497:134:20;;;32597:21:22;32654:2;32634:18;;;32627:30;32693:27;32673:18;;;32666:55;32738:18;;17497:134:20;32413:349:22;30061:248:20;-1:-1:-1;;;;;30171:19:20;;;;;;:12;:19;;;;;:36;;30194:13;;30171:19;:36;;30194:13;;30171:36;:::i;:::-;;;;-1:-1:-1;30246:21:20;;-1:-1:-1;30254:13:20;30246:5;:21;:::i;:::-;-1:-1:-1;;;;;30217:16:20;;;;;;;:9;:16;;;;;;;;:25;;;;;;;;;;;:50;;:25;;:16;:50;;;;;:::i;:::-;;;;-1:-1:-1;;;;;;;30277:16:20;;;;;;:9;:16;;;;;:25;;30297:5;;30277:16;:25;;30297:5;;30277:25;:::i;:::-;;;;-1:-1:-1;;;;;;30061:248:20:o;11108:238:16:-;11209:7;11263:76;11279:26;11296:8;11279:16;:26::i;:::-;:59;;;;;11337:1;11322:11;11309:25;;;;;:::i;:::-;11319:1;11316;11309:25;:29;11279:59;34911:9:17;34904:17;;34792:145;11263:76:16;11235:25;11242:1;11245;11248:11;11235:6;:25::i;:::-;:104;;;;:::i;3586:157:13:-;-1:-1:-1;;;;;;;;;;;4560:52:13;2407:1;4560:63;3644:93;;3696:30;;-1:-1:-1;;;3696:30:13;;;;;;;;;;;8373:1244:9;8600:4;8594:11;-1:-1:-1;;;8467:12:9;8618:22;;;-1:-1:-1;;;;;8666:24:9;;8660:4;8653:38;8711:4;8704:19;;;8467:12;8787:4;8467:12;8775:4;8467:12;;8759:5;8752;8747:45;8736:56;;9004:1;8997:4;8991:11;8988:18;8979:7;8975:32;8965:606;;9136:6;9126:7;9119:15;9115:28;9112:165;;;9192:16;9186:4;9181:3;9166:43;9242:16;9237:3;9230:29;9112:165;9553:1;9545:5;9533:18;9530:25;9511:16;9504:24;9500:56;9491:7;9487:70;9476:81;;8965:606;9591:4;9584:17;-1:-1:-1;8373:1244:9;;-1:-1:-1;;;;8373:1244:9:o;3858:728:19:-;4040:7;;4193:37;4205:6;1118:25;991:4;;1118:25;:::i;:::-;4220:9;4193:11;:37::i;:::-;:41;;4233:1;4193:41;:::i;:::-;4180:54;;4253:10;4248:2;:15;4244:36;;;-1:-1:-1;4270:10:19;4244:36;4290:10;4314:247;4326:2;4321;:7;4314:247;;;4344:11;4374:1;4359:7;4364:2;4359;:7;:::i;:::-;:11;;4369:1;4359:11;:::i;:::-;4358:17;;;;:::i;:::-;4344:31;;4451:6;4393:54;4410:13;4425:3;4430:9;4441:5;4393:16;:54::i;:::-;:64;4389:162;;4482:3;4477:8;;4389:162;;;4529:7;4535:1;4529:3;:7;:::i;:::-;4524:12;;4389:162;4330:231;4314:247;;2078:126:12;1796:7;;-1:-1:-1;;;1796:7:12;;;;2136:62;;2172:15;;-1:-1:-1;;;2172:15:12;;;;;;;;;;;1027:550:16;1088:12;;-1:-1:-1;;1471:1:16;1468;1461:20;1501:9;;;;1549:11;;;1535:12;;;;1531:30;;;;;1027:550;-1:-1:-1;;1027:550:16:o;1776:194:11:-;1881:10;1875:4;1868:24;1918:4;1912;1905:18;1949:4;1943;1936:18;20859:5181:16;20907:7;21025:1;21020;:6;21016:53;;-1:-1:-1;21053:1:16;20859:5181::o;21016:53::-;22009:1;22037;-1:-1:-1;;;22057:16:16;;22053:92;;22100:3;22093:10;;;;;22128:2;22121:9;22053:92;-1:-1:-1;;;22162:2:16;:15;22158:90;;22204:2;22197:9;;;;;22231:2;22224:9;22158:90;22272:7;22265:2;:15;22261:90;;22307:2;22300:9;;;;;22334:2;22327:9;22261:90;22375:7;22368:2;:15;22364:89;;22410:2;22403:9;;;;;22437:1;22430:8;22364:89;22477:6;22470:2;:14;22466:87;;22511:1;22504:8;;;;;22537:1;22530:8;22466:87;22577:6;22570:2;:14;22566:87;;22611:1;22604:8;;;;;22637:1;22630:8;22566:87;22677:6;22670:2;:14;22666:61;;22711:1;22704:8;22666:61;23153:1;:6;23164:1;23152:13;;;;;25063:1;23152:13;25063:6;;;;:::i;:::-;;25058:2;:11;25057:18;;25052:23;;25183:1;25176:2;25172:1;:6;;;;;:::i;:::-;;25167:2;:11;25166:18;;25161:23;;25294:1;25287:2;25283:1;:6;;;;;:::i;:::-;;25278:2;:11;25277:18;;25272:23;;25403:1;25396:2;25392:1;:6;;;;;:::i;:::-;;25387:2;:11;25386:18;;25381:23;;25513:1;25506:2;25502:1;:6;;;;;:::i;:::-;;25497:2;:11;25496:18;;25491:23;;25623:1;25616:2;25612:1;:6;;;;;:::i;:::-;;25607:2;:11;25606:18;;25601:23;;25995:28;26020:2;26016:1;:6;;;;;:::i;:::-;;26011:11;;;34792:145:17;25995:28:16;25990:33;;;20859:5181;-1:-1:-1;;;20859:5181:16:o;5098:367:9:-;5190:42;5203:5;5210:7;5219:5;5226;5190:12;:42::i;:::-;5185:274;;5253:37;5266:5;5273:7;5282:1;5285:4;5253:12;:37::i;:::-;5248:91;;5299:40;;-1:-1:-1;;;5299:40:9;;-1:-1:-1;;;;;6337:32:22;;5299:40:9;;;6319:51:22;6292:18;;5299:40:9;6173:203:22;5248:91:9;5358:41;5371:5;5378:7;5387:5;5394:4;5358:12;:41::i;2912:187:0:-;2985:16;3004:6;;-1:-1:-1;;;;;3020:17:0;;;-1:-1:-1;;;;;;3020:17:0;;;;;;3052:40;;3004:6;;;;;;;3052:40;;2985:16;3052:40;2975:124;2912:187;:::o;1662:232:9:-;1767:47;1785:5;1792:4;1798:2;1802:5;1809:4;1767:17;:47::i;:::-;1762:126;;1837:40;;-1:-1:-1;;;1837:40:9;;-1:-1:-1;;;;;6337:32:22;;1837:40:9;;;6319:51:22;6292:18;;1837:40:9;6173:203:22;1762:126:9;1662:232;;;;:::o;32337:122:16:-;32405:4;32446:1;32434:8;32428:15;;;;;;;;:::i;:::-;:19;;;;:::i;:::-;:24;;32451:1;32428:24;32421:31;;32337:122;;;:::o;12059:1252:9:-;12289:4;12283:11;-1:-1:-1;;;12157:12:9;12307:22;;;-1:-1:-1;;;;;12355:29:9;;12349:4;12342:43;12405:4;12398:19;;;12157:12;12481:4;12157:12;12469:4;12157:12;;12453:5;12446;12441:45;12430:56;;12698:1;12691:4;12685:11;12682:18;12673:7;12669:32;12659:606;;12830:6;12820:7;12813:15;12809:28;12806:165;;;12886:16;12880:4;12875:3;12860:43;12936:16;12931:3;12924:29;10165:1393;10460:4;10454:11;-1:-1:-1;;;10323:12:9;10478:22;;;-1:-1:-1;;;;;10526:26:9;;;10520:4;10513:40;10579:24;;10573:4;10566:38;10624:4;10617:19;;;10323:12;10700:4;10323:12;10688:4;10323:12;;10672:5;10665;10660:45;10649:56;;10917:1;10910:4;10904:11;10901:18;10892:7;10888:32;10878:606;;11049:6;11039:7;11032:15;11028:28;11025:165;;;11105:16;11099:4;11094:3;11079:43;11155:16;11150:3;11143:29;11025:165;11466:1;11458:5;11446:18;11443:25;11424:16;11417:24;11413:56;11404:7;11400:70;11389:81;;10878:606;11504:4;11497:17;-1:-1:-1;11540:1:9;11534:4;11527:15;10165:1393;;-1:-1:-1;;;;;10165:1393:9:o;-1:-1:-1:-;;;;;;;;:::o;14:131:22:-;-1:-1:-1;;;;;89:31:22;;79:42;;69:70;;135:1;132;125:12;150:134;218:20;;247:31;218:20;247:31;:::i;289:247::-;348:6;401:2;389:9;380:7;376:23;372:32;369:52;;;417:1;414;407:12;369:52;456:9;443:23;475:31;500:5;475:31;:::i;733:180::-;792:6;845:2;833:9;824:7;820:23;816:32;813:52;;;861:1;858;851:12;813:52;-1:-1:-1;884:23:22;;733:180;-1:-1:-1;733:180:22:o;1100:248::-;1168:6;1176;1229:2;1217:9;1208:7;1204:23;1200:32;1197:52;;;1245:1;1242;1235:12;1197:52;-1:-1:-1;;1268:23:22;;;1338:2;1323:18;;;1310:32;;-1:-1:-1;1100:248:22:o;1873:118::-;1959:5;1952:13;1945:21;1938:5;1935:32;1925:60;;1981:1;1978;1971:12;1996:382;2061:6;2069;2122:2;2110:9;2101:7;2097:23;2093:32;2090:52;;;2138:1;2135;2128:12;2090:52;2177:9;2164:23;2196:31;2221:5;2196:31;:::i;:::-;2246:5;-1:-1:-1;2303:2:22;2288:18;;2275:32;2316:30;2275:32;2316:30;:::i;:::-;2365:7;2355:17;;;1996:382;;;;;:::o;2383:199::-;2474:6;2527:3;2515:9;2506:7;2502:23;2498:33;2495:53;;;2544:1;2541;2534:12;2495:53;-1:-1:-1;2567:9:22;2383:199;-1:-1:-1;2383:199:22:o;2587:348::-;2639:8;2649:6;2703:3;2696:4;2688:6;2684:17;2680:27;2670:55;;2721:1;2718;2711:12;2670:55;-1:-1:-1;2744:20:22;;2787:18;2776:30;;2773:50;;;2819:1;2816;2809:12;2773:50;2856:4;2848:6;2844:17;2832:29;;2908:3;2901:4;2892:6;2884;2880:19;2876:30;2873:39;2870:59;;;2925:1;2922;2915:12;2870:59;2587:348;;;;;:::o;2940:1010::-;3053:6;3061;3069;3077;3085;3093;3146:2;3134:9;3125:7;3121:23;3117:32;3114:52;;;3162:1;3159;3152:12;3114:52;3202:9;3189:23;3231:18;3272:2;3264:6;3261:14;3258:34;;;3288:1;3285;3278:12;3258:34;3327:59;3378:7;3369:6;3358:9;3354:22;3327:59;:::i;:::-;3405:8;;-1:-1:-1;3301:85:22;-1:-1:-1;3493:2:22;3478:18;;3465:32;;-1:-1:-1;3509:16:22;;;3506:36;;;3538:1;3535;3528:12;3506:36;3577:61;3630:7;3619:8;3608:9;3604:24;3577:61;:::i;:::-;3657:8;;-1:-1:-1;3551:87:22;-1:-1:-1;3745:2:22;3730:18;;3717:32;;-1:-1:-1;3761:16:22;;;3758:36;;;3790:1;3787;3780:12;3758:36;;3829:61;3882:7;3871:8;3860:9;3856:24;3829:61;:::i;:::-;2940:1010;;;;-1:-1:-1;2940:1010:22;;-1:-1:-1;2940:1010:22;;3909:8;;2940:1010;-1:-1:-1;;;2940:1010:22:o;4630:127::-;4691:10;4686:3;4682:20;4679:1;4672:31;4722:4;4719:1;4712:15;4746:4;4743:1;4736:15;4762:240;4846:1;4839:5;4836:12;4826:143;;4891:10;4886:3;4882:20;4879:1;4872:31;4926:4;4923:1;4916:15;4954:4;4951:1;4944:15;4826:143;4978:18;;4762:240::o;5007:1161::-;5337:13;;-1:-1:-1;;;;;5333:39:22;5315:58;;5420:4;5408:17;;;5402:24;5302:3;5287:19;;;5435:54;;5468:20;;5402:24;-1:-1:-1;;;;;4021:31:22;4009:44;;3955:104;5435:54;;5545:4;5537:6;5533:17;5527:24;5520:4;5509:9;5505:20;5498:54;5608:4;5600:6;5596:17;5590:24;5583:4;5572:9;5568:20;5561:54;5671:4;5663:6;5659:17;5653:24;5646:4;5635:9;5631:20;5624:54;5727:4;5719:6;5715:17;5709:24;5742:56;5792:4;5781:9;5777:20;5761:14;-1:-1:-1;;;;;4021:31:22;4009:44;;3955:104;5742:56;;5854:4;5846:6;5842:17;5836:24;5829:4;5818:9;5814:20;5807:54;5917:4;5909:6;5905:17;5899:24;5892:4;5881:9;5877:20;5870:54;5943:6;6003:2;5995:6;5991:15;5985:22;5980:2;5969:9;5965:18;5958:50;;6017:57;6069:3;6058:9;6054:19;6046:6;6017:57;:::i;:::-;6105:3;6090:19;;6083:35;;;;6149:3;6134:19;6127:35;5007:1161;;-1:-1:-1;;5007:1161:22:o;6381:393::-;6473:6;6526:2;6514:9;6505:7;6501:23;6497:32;6494:52;;;6542:1;6539;6532:12;6494:52;6582:9;6569:23;6615:18;6607:6;6604:30;6601:50;;;6647:1;6644;6637:12;6601:50;6670:22;;6726:3;6708:16;;;6704:26;6701:46;;;6743:1;6740;6733:12;6779:316;6856:6;6864;6872;6925:2;6913:9;6904:7;6900:23;6896:32;6893:52;;;6941:1;6938;6931:12;6893:52;-1:-1:-1;;6964:23:22;;;7034:2;7019:18;;7006:32;;-1:-1:-1;7085:2:22;7070:18;;;7057:32;;6779:316;-1:-1:-1;6779:316:22:o;7344:403::-;7427:6;7435;7488:2;7476:9;7467:7;7463:23;7459:32;7456:52;;;7504:1;7501;7494:12;7456:52;7543:9;7530:23;7562:31;7587:5;7562:31;:::i;:::-;7612:5;-1:-1:-1;7669:2:22;7654:18;;7641:32;7682:33;7641:32;7682:33;:::i;8437:315::-;8505:6;8513;8566:2;8554:9;8545:7;8541:23;8537:32;8534:52;;;8582:1;8579;8572:12;8534:52;8618:9;8605:23;8595:33;;8678:2;8667:9;8663:18;8650:32;8691:31;8716:5;8691:31;:::i;8757:544::-;8843:6;8851;8859;8867;8920:2;8908:9;8899:7;8895:23;8891:32;8888:52;;;8936:1;8933;8926:12;8888:52;8972:9;8959:23;8949:33;;9029:2;9018:9;9014:18;9001:32;8991:42;;9084:2;9073:9;9069:18;9056:32;9111:18;9103:6;9100:30;9097:50;;;9143:1;9140;9133:12;9097:50;9182:59;9233:7;9224:6;9213:9;9209:22;9182:59;:::i;:::-;8757:544;;;;-1:-1:-1;9260:8:22;-1:-1:-1;;;;8757:544:22:o;9649:127::-;9710:10;9705:3;9701:20;9698:1;9691:31;9741:4;9738:1;9731:15;9765:4;9762:1;9755:15;9781:168;9854:9;;;9885;;9902:15;;;9896:22;;9882:37;9872:71;;9923:18;;:::i;9954:127::-;10015:10;10010:3;10006:20;10003:1;9996:31;10046:4;10043:1;10036:15;10070:4;10067:1;10060:15;10086:120;10126:1;10152;10142:35;;10157:18;;:::i;:::-;-1:-1:-1;10191:9:22;;10086:120::o;10556:128::-;10623:9;;;10644:11;;;10641:37;;;10658:18;;:::i;11390:642::-;11565:5;11552:19;11580:33;11605:7;11580:33;:::i;:::-;11642:11;;-1:-1:-1;;;;;;11638:54:22;-1:-1:-1;;;;;11694:33:22;;;;11635:93;11622:107;;11783:2;11772:14;;11759:28;11724:1;11745:12;;11738:50;11842:2;11831:14;;11818:28;11814:1;11804:12;;11797:50;11901:2;11890:14;;11877:28;11873:1;11863:12;;11856:50;11960:3;11949:15;;11936:29;11932:1;11922:12;;11915:51;11715:3;12009:15;;;;11996:29;11992:1;11982:12;;;11975:51;11390:642::o;13073:184::-;13143:6;13196:2;13184:9;13175:7;13171:23;13167:32;13164:52;;;13212:1;13209;13202:12;13164:52;-1:-1:-1;13235:16:22;;13073:184;-1:-1:-1;13073:184:22:o;14015:251::-;14085:6;14138:2;14126:9;14117:7;14113:23;14109:32;14106:52;;;14154:1;14151;14144:12;14106:52;14186:9;14180:16;14205:31;14230:5;14205:31;:::i;14271:125::-;14336:9;;;14357:10;;;14354:36;;;14370:18;;:::i;14401:127::-;14462:10;14457:3;14453:20;14450:1;14443:31;14493:4;14490:1;14483:15;14517:4;14514:1;14507:15;14533:250;14600:2;14594:9;14642:6;14630:19;;14679:18;14664:34;;14700:22;;;14661:62;14658:88;;;14726:18;;:::i;:::-;14762:2;14755:22;14533:250;:::o;14788:719::-;14831:5;14884:3;14877:4;14869:6;14865:17;14861:27;14851:55;;14902:1;14899;14892:12;14851:55;14938:6;14925:20;14964:18;15001:2;14997;14994:10;14991:36;;;15007:18;;:::i;:::-;15082:2;15076:9;15050:2;15136:13;;-1:-1:-1;;15132:22:22;;;15156:2;15128:31;15124:40;15112:53;;;15180:18;;;15200:22;;;15177:46;15174:72;;;15226:18;;:::i;:::-;15266:10;15262:2;15255:22;15301:2;15293:6;15286:18;15347:3;15340:4;15335:2;15327:6;15323:15;15319:26;15316:35;15313:55;;;15364:1;15361;15354:12;15313:55;15428:2;15421:4;15413:6;15409:17;15402:4;15394:6;15390:17;15377:54;15475:1;15468:4;15463:2;15455:6;15451:15;15447:26;15440:37;15495:6;15486:15;;;;;;14788:719;;;;:::o;15512:1264::-;15626:9;15685:6;15677:5;15661:14;15657:26;15653:39;15650:59;;;15705:1;15702;15695:12;15650:59;15733:17;;:::i;:::-;15786:5;15773:19;15811:18;15852:2;15844:6;15841:14;15838:34;;;15868:1;15865;15858:12;15838:34;15897:53;15935:14;15926:6;15919:5;15915:18;15897:53;:::i;:::-;15888:7;15881:70;16000:2;15993:5;15989:14;15976:28;15960:44;;16029:2;16019:8;16016:16;16013:36;;;16045:1;16042;16035:12;16013:36;16083:55;16123:14;16112:8;16105:5;16101:20;16083:55;:::i;:::-;16078:2;16069:7;16065:16;16058:81;16188:2;16181:5;16177:14;16164:28;16148:44;;16217:2;16207:8;16204:16;16201:36;;;16233:1;16230;16223:12;16201:36;;16271:55;16311:14;16300:8;16293:5;16289:20;16271:55;:::i;:::-;16266:2;16257:7;16253:16;16246:81;;16385:2;16378:5;16374:14;16361:28;16356:2;16347:7;16343:16;16336:54;16425:35;16455:3;16448:5;16444:15;16425:35;:::i;:::-;16419:3;16410:7;16406:17;16399:62;16520:3;16513:5;16509:15;16496:29;16490:3;16481:7;16477:17;16470:56;16585:3;16578:5;16574:15;16561:29;16555:3;16546:7;16542:17;16535:56;16650:3;16643:5;16639:15;16626:29;16620:3;16611:7;16607:17;16600:56;16675:3;16736:2;16729:5;16725:14;16712:28;16707:2;16698:7;16694:16;16687:54;;16763:7;16750:20;;;15512:1264;;;:::o;19545:245::-;19624:6;19632;19685:2;19673:9;19664:7;19660:23;19656:32;19653:52;;;19701:1;19698;19691:12;19653:52;-1:-1:-1;;19724:16:22;;19780:2;19765:18;;;19759:25;19724:16;;19759:25;;-1:-1:-1;19545:245:22:o;24761:135::-;24800:3;24821:17;;;24818:43;;24841:18;;:::i;:::-;-1:-1:-1;24888:1:22;24877:13;;24761:135::o;24901:423::-;24943:3;24981:5;24975:12;25008:6;25003:3;24996:19;25033:1;25043:162;25057:6;25054:1;25051:13;25043:162;;;25119:4;25175:13;;;25171:22;;25165:29;25147:11;;;25143:20;;25136:59;25072:12;25043:162;;;25047:3;25250:1;25243:4;25234:6;25229:3;25225:16;25221:27;25214:38;25313:4;25306:2;25302:7;25297:2;25289:6;25285:15;25281:29;25276:3;25272:39;25268:50;25261:57;;;24901:423;;;;:::o;25329:717::-;25630:3;25619:9;25612:22;25593:4;25657:46;25698:3;25687:9;25683:19;25675:6;25657:46;:::i;:::-;25751:9;25743:6;25739:22;25734:2;25723:9;25719:18;25712:50;25785:33;25811:6;25803;25785:33;:::i;:::-;25849:2;25834:18;;25827:34;;;-1:-1:-1;;;;;25897:32:22;;25892:2;25877:18;;25870:60;25967:22;;;25961:3;25946:19;;25939:51;25771:47;-1:-1:-1;26007:33:22;25771:47;26025:6;26007:33;:::i;26051:707::-;26331:4;26377:1;26373;26368:3;26364:11;26360:19;26418:2;26410:6;26406:15;26395:9;26388:34;26470:2;26462:6;26458:15;26453:2;26442:9;26438:18;26431:43;;26510:6;26505:2;26494:9;26490:18;26483:34;26553:6;26548:2;26537:9;26533:18;26526:34;26597:6;26591:3;26580:9;26576:19;26569:35;26641:6;26635:3;26624:9;26620:19;26613:35;26685:3;26679;26668:9;26664:19;26657:32;26706:46;26747:3;26736:9;26732:19;26724:6;26706:46;:::i;:::-;26698:54;26051:707;-1:-1:-1;;;;;;;;;26051:707:22:o;27119:163::-;27197:13;;27250:6;27239:18;;27229:29;;27219:57;;27272:1;27269;27262:12;27287:952;27401:6;27409;27417;27425;27433;27441;27449;27502:3;27490:9;27481:7;27477:23;27473:33;27470:53;;;27519:1;27516;27509:12;27470:53;27551:9;27545:16;27570:31;27595:5;27570:31;:::i;:::-;27620:5;27610:15;;;27670:2;27659:9;27655:18;27649:25;27719:7;27716:1;27705:22;27696:7;27693:35;27683:63;;27742:1;27739;27732:12;27683:63;27765:7;-1:-1:-1;27791:48:22;27835:2;27820:18;;27791:48;:::i;:::-;27781:58;;27858:48;27902:2;27891:9;27887:18;27858:48;:::i;:::-;27848:58;;27925:49;27969:3;27958:9;27954:19;27925:49;:::i;:::-;27915:59;;28019:3;28008:9;28004:19;27998:26;28068:4;28059:7;28055:18;28046:7;28043:31;28033:59;;28088:1;28085;28078:12;28033:59;28163:3;28148:19;;28142:26;28111:7;;-1:-1:-1;28177:30:22;28142:26;28177:30;:::i;:::-;28226:7;28216:17;;;27287:952;;;;;;;;;;:::o;28553:569::-;-1:-1:-1;;;;;28842:15:22;;;28824:34;;28901:14;;28894:22;28889:2;28874:18;;28867:50;28948:2;28933:18;;28926:34;;;28996:15;;28991:2;28976:18;;28969:43;28804:3;29043;29028:19;;29021:32;;;28767:4;;29070:46;;29096:19;;29088:6;29070:46;:::i;29824:1222::-;30046:13;;-1:-1:-1;;;;;4021:31:22;4009:44;;30014:3;29999:19;;30118:4;30110:6;30106:17;30100:24;30133:54;30181:4;30170:9;30166:20;30152:12;-1:-1:-1;;;;;4021:31:22;4009:44;;3955:104;30133:54;;30236:4;30228:6;30224:17;30218:24;30251:55;30300:4;30289:9;30285:20;30269:14;8221:8;8210:20;8198:33;;8145:92;30251:55;;30355:4;30347:6;30343:17;30337:24;30370:54;30418:4;30407:9;30403:20;30387:14;29803:1;29792:20;29780:33;;29728:91;30370:54;;30473:4;30465:6;30461:17;30455:24;30488:54;30536:4;30525:9;30521:20;30505:14;29803:1;29792:20;29780:33;;29728:91;30488:54;;30598:4;30590:6;30586:17;30580:24;30573:4;30562:9;30558:20;30551:54;30661:4;30653:6;30649:17;30643:24;30636:4;30625:9;30621:20;30614:54;30724:4;30716:6;30712:17;30706:24;30699:4;30688:9;30684:20;30677:54;30750:6;30810:2;30802:6;30798:15;30792:22;30787:2;30776:9;30772:18;30765:50;;30834:6;30889:2;30881:6;30877:15;30871:22;30902:54;30952:2;30941:9;30937:18;30921:14;-1:-1:-1;;;;;4021:31:22;4009:44;;3955:104;30902:54;-1:-1:-1;;30975:6:22;31023:15;;;31017:22;30997:18;;;;30990:50;29824:1222;:::o;31051:489::-;31148:6;31156;31164;31172;31225:3;31213:9;31204:7;31200:23;31196:33;31193:53;;;31242:1;31239;31232:12;31193:53;31271:9;31265:16;31255:26;;31324:2;31313:9;31309:18;31303:25;-1:-1:-1;;;;;31361:5:22;31357:46;31350:5;31347:57;31337:85;;31418:1;31415;31408:12;31337:85;31486:2;31471:18;;31465:25;31530:2;31515:18;;;31509:25;31051:489;;31441:5;;-1:-1:-1;31051:489:22;-1:-1:-1;;;31051:489:22:o;32767:157::-;32797:1;32831:4;32828:1;32824:12;32855:3;32845:37;;32862:18;;:::i;:::-;32914:3;32907:4;32904:1;32900:12;32896:22;32891:27;;;32767:157;;;;:::o",
    "linkReferences": {},
    "immutableReferences": {
      "5969": [
        {
          "start": 1571,
          "length": 32
        },
        {
          "start": 4574,
          "length": 32
        },
        {
          "start": 7792,
          "length": 32
        },
        {
          "start": 12836,
          "length": 32
        },
        {
          "start": 12895,
          "length": 32
        },
        {
          "start": 12935,
          "length": 32
        },
        {
          "start": 13523,
          "length": 32
        },
        {
          "start": 13582,
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
    "claim(address)": "1e83409a",
    "claimProtocolFees(address)": "69ce6d47",
    "claimable(address,address)": "d4570c1c",
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
    "paymentTokenAllowed(address)": "06d49f92",
    "pendingOwner()": "e30c3978",
    "poolOf(uint256)": "83966021",
    "positionId(uint256)": "54147e9e",
    "positionManager()": "791b98bc",
    "proceedsWithdrawn(uint256)": "48f719e5",
    "protocolFeeRecipient()": "64df049e",
    "protocolFees(address)": "dcf844a7",
    "renounceOwnership()": "715018a6",
    "sellTokens(uint256,uint256,uint256)": "709ef231",
    "setDefaultFeeBps(uint256)": "4373a286",
    "setDefaultLpFeeShareBps(uint256)": "09e06259",
    "setLaunchPreset((address,uint256,uint256,uint256,uint256,uint256))": "3ef068d2",
    "setPaymentTokenAllowed(address,bool)": "28336098",
    "setProtocolFeeRecipient(address)": "e521cb92",
    "sweep(address,address)": "b8dc491b",
    "transferOwnership(address)": "f2fde38b",
    "uniswapV3SwapCallback(int256,int256,bytes)": "fa461e33",
    "unpause()": "3f4ba83a",
    "userPurchases(uint256,address)": "efc20dad",
    "withdrawProceeds(uint256)": "d9f1aed9"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.24+commit.e11b9ed9\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"feeRecipient_\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"defaultFeeBps_\",\"type\":\"uint256\"},{\"internalType\":\"contract INonfungiblePositionManager\",\"name\":\"positionManager_\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"EnforcedPause\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpectedPause\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnableInvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"OwnableUnauthorizedAccount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"totalRaised\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"totalSold\",\"type\":\"uint256\"}],\"name\":\"AuctionCompleted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"creator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"paymentToken\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"slope\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maxRaise\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"liquidityBps\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"metadataURI\",\"type\":\"string\"}],\"name\":\"AuctionCreated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"pool\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"positionId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenLiquidity\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"paymentLiquidity\",\"type\":\"uint256\"}],\"name\":\"AuctionMigrated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Claimed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"previous\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"current\",\"type\":\"uint256\"}],\"name\":\"DefaultFeeBpsUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"previous\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"current\",\"type\":\"uint256\"}],\"name\":\"DefaultLpFeeShareBpsUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"paymentToken\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maxSupply\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"slope\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maxRaise\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"liquidityBps\",\"type\":\"uint256\"}],\"name\":\"LaunchPresetUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"creatorTokenFees\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"creatorPaymentFees\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"protocolTokenFees\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"protocolPaymentFees\",\"type\":\"uint256\"}],\"name\":\"LpFeesCollected\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferStarted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Paused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"allowed\",\"type\":\"bool\"}],\"name\":\"PaymentTokenAllowedUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"creator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"ProceedsWithdrawn\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previous\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"current\",\"type\":\"address\"}],\"name\":\"ProtocolFeeRecipientUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"ProtocolFeesClaimed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Swept\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"buyer\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"cost\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"protocolFee\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newTotalRaised\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newTotalSold\",\"type\":\"uint256\"}],\"name\":\"TokensPurchased\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"seller\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"protocolFee\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newTotalRaised\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newTotalSold\",\"type\":\"uint256\"}],\"name\":\"TokensSold\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Unpaused\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"MAX_FEE_BPS\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MAX_LP_FEE_SHARE_BPS\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MIN_LIQUIDITY_BPS\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"POOL_FEE\",\"outputs\":[{\"internalType\":\"uint24\",\"name\":\"\",\"type\":\"uint24\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"auctionCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"auctions\",\"outputs\":[{\"components\":[{\"internalType\":\"contract AuctionToken\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"paymentToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"basePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"slope\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"maxRaise\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"creator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"protocolFeeBps\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"liquidityBps\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpFeeShareBps\",\"type\":\"uint256\"}],\"internalType\":\"struct TokenAuction.AuctionConfig\",\"name\":\"config\",\"type\":\"tuple\"},{\"internalType\":\"enum TokenAuction.AuctionState\",\"name\":\"state\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"totalRaised\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalSold\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"maxCost\",\"type\":\"uint256\"}],\"name\":\"buyTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"claim\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"claimProtocolFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"claimable\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"}],\"name\":\"collectFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenFees\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"paymentFees\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"metadataURI\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"maxSupply\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"paymentToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"basePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"slope\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"maxRaise\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"liquidityBps\",\"type\":\"uint256\"}],\"internalType\":\"struct TokenAuction.AuctionParams\",\"name\":\"p\",\"type\":\"tuple\"}],\"name\":\"createAuction\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"custodied\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"defaultFeeBps\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"defaultLpFeeShareBps\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"getBuyCost\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"cost\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"fee\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"}],\"name\":\"getSpotPrice\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"metadataURI\",\"type\":\"string\"}],\"name\":\"launch\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"launchPreset\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"paymentToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"maxSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"basePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"slope\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"maxRaise\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"liquidityBps\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"}],\"name\":\"migrate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"paused\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"paymentTokenAllowed\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pendingOwner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"poolOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"positionId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"positionManager\",\"outputs\":[{\"internalType\":\"contract INonfungiblePositionManager\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"proceedsWithdrawn\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"protocolFeeRecipient\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"protocolFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minProceeds\",\"type\":\"uint256\"}],\"name\":\"sellTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"feeBps\",\"type\":\"uint256\"}],\"name\":\"setDefaultFeeBps\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shareBps\",\"type\":\"uint256\"}],\"name\":\"setDefaultLpFeeShareBps\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"paymentToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"maxSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"basePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"slope\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"maxRaise\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"liquidityBps\",\"type\":\"uint256\"}],\"internalType\":\"struct TokenAuction.LaunchPreset\",\"name\":\"preset\",\"type\":\"tuple\"}],\"name\":\"setLaunchPreset\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"allowed\",\"type\":\"bool\"}],\"name\":\"setPaymentTokenAllowed\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"}],\"name\":\"setProtocolFeeRecipient\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"sweep\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"amount0Delta\",\"type\":\"int256\"},{\"internalType\":\"int256\",\"name\":\"amount1Delta\",\"type\":\"int256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"uniswapV3SwapCallback\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"unpause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"userPurchases\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"}],\"name\":\"withdrawProceeds\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"EnforcedPause()\":[{\"details\":\"The operation failed because the contract is paused.\"}],\"ExpectedPause()\":[{\"details\":\"The operation failed because the contract is not paused.\"}],\"OwnableInvalidOwner(address)\":[{\"details\":\"The owner is not a valid owner account. (eg. `address(0)`)\"}],\"OwnableUnauthorizedAccount(address)\":[{\"details\":\"The caller account is not authorized to perform an operation.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC-20 token failed.\"}]},\"events\":{\"Paused(address)\":{\"details\":\"Emitted when the pause is triggered by `account`.\"},\"Unpaused(address)\":{\"details\":\"Emitted when the pause is lifted by `account`.\"}},\"kind\":\"dev\",\"methods\":{\"acceptOwnership()\":{\"details\":\"The new owner accepts the ownership transfer.\"},\"buyTokens(uint256,uint256,uint256)\":{\"details\":\"A purchase that would overshoot `maxRaise` is filled with what the        remaining budget buys and closes the auction, so the buyer may        receive less than `amount`; `TokensPurchased` reports the actual        amount.\",\"params\":{\"maxCost\":\"Most the buyer will pay in total (cost + protocol fee), in        payment-token units. The price rises with every purchase, so a        quote can be stale by the time a transaction lands; this bound        makes the buy revert instead of filling at a worse price.\"}},\"migrate(uint256)\":{\"details\":\"Opens (or corrects) the pool at the auction's final price, adds         full-range liquidity from the reserved share of the raise plus         newly minted tokens, and keeps the position NFT forever. Never         leaves tokens permanently locked: if there is nothing to pair, or         Uniswap rejects the position, transfers are unlocked anyway and         the reserved funds are credited to the creator to `claim`.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"paused()\":{\"details\":\"Returns true if the contract is paused, and false otherwise.\"},\"pendingOwner()\":{\"details\":\"Returns the address of the pending owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"sellTokens(uint256,uint256,uint256)\":{\"params\":{\"minProceeds\":\"Least the seller will accept after the fee. Like        `maxCost` on purchases, it protects against the price moving        between quote and transaction.\"}},\"transferOwnership(address)\":{\"details\":\"Starts the ownership transfer of the contract to a new account. Replaces the pending transfer if there is one. Can only be called by the current owner. Setting `newOwner` to the zero address is allowed; this can be used to cancel an initiated ownership transfer.\"},\"withdrawProceeds(uint256)\":{\"details\":\"Callable once, by the creator, once the auction has completed,      before or after migration. Pays the part of the raise not reserved      for liquidity. Protocol fees are routed to the fee recipient at buy      time, so the contract custodies exactly `totalRaised` per auction.\"}},\"stateVariables\":{\"MAX_SUPPLY_BOUND\":{\"details\":\"Parameter bounds that keep every curve computation inside      uint256: supply up to 10^18 whole tokens, prices up to 10^27      payment units per token, and raises up to 10^40 units. All far      beyond any real launch.\"},\"MIN_USABLE_TICK\":{\"details\":\"Full-range bounds for the 1% tier (tick spacing 200), i.e.      TickMath's MIN/MAX_TICK rounded inward to a multiple of 200.\"},\"_activePool\":{\"details\":\"Set only for the duration of a price-correction swap, so the swap      callback can be authenticated.\"},\"claimable\":{\"details\":\"Credited rather than sent so that no recipient can block a         trade or a migration. USDC can blacklist an address, and a         transfer to a blacklisted creator would otherwise revert the         migration and leave every holder's tokens locked.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"MAX_FEE_BPS()\":{\"notice\":\"Upper bound on the protocol fee, so the owner can never set a         fee that confiscates a meaningful share of a purchase.\"},\"MAX_LP_FEE_SHARE_BPS()\":{\"notice\":\"Upper bound on the protocol's share of trading fees, so a         creator always keeps at least half.\"},\"MIN_LIQUIDITY_BPS()\":{\"notice\":\"Smallest share of the raise a creator may commit to the         Uniswap pool, so no launch ships with a token too thinly         traded to be usable.\"},\"POOL_FEE()\":{\"notice\":\"Pool fee tier for migrated liquidity: 1%, the usual tier for         newly launched, volatile tokens.\"},\"buyTokens(uint256,uint256,uint256)\":{\"notice\":\"Buy `amount` tokens (in token wei) from an auction that hasn't         graduated yet.\"},\"claim(address)\":{\"notice\":\"Withdraw everything credited to you in `token`.\"},\"claimProtocolFees(address)\":{\"notice\":\"Send the protocol's unclaimed fees in `token` to the fee         recipient. Anyone may trigger it.\"},\"claimable(address,address)\":{\"notice\":\"Payouts credited to an account and not yet claimed, by token         then account: a creator's share of pool fees, and any reserve         that migration couldn't place in the pool.\"},\"collectFees(uint256)\":{\"notice\":\"Collect the migrated pool's trading fees: the protocol's share         is added to `protocolFees` and the rest is credited to the         creator to `claim`. Anyone may trigger it.\"},\"createAuction((string,string,string,uint256,address,uint256,uint256,uint256,uint256))\":{\"notice\":\"Launch a token with custom curve parameters. Trading starts         immediately; the token graduates to Uniswap once `maxRaise` is         raised.\"},\"custodied(address)\":{\"notice\":\"Tokens this contract owes, per token: raises not yet withdrawn,         payouts not yet claimed and protocol fees not yet claimed.         Anything held above this is excess (e.g. tokens sent here         directly) and can be recovered with `sweep`.\"},\"getSpotPrice(uint256)\":{\"notice\":\"Price of the next whole token, in payment units \\u00d7 1e18.\"},\"launch(string,string,string)\":{\"notice\":\"One-click launch: name, symbol and metadata from the creator,         everything else from the protocol's standard preset.\"},\"launchPreset()\":{\"notice\":\"Parameters for one-click launches. Unset (zero payment token)         until the owner configures it.\"},\"migrate(uint256)\":{\"notice\":\"Move a completed auction's liquidity into Uniswap v3 and unlock         its token. Anyone may call it, so a creator can never hold the         token hostage by not migrating.\"},\"pause()\":{\"notice\":\"Emergency stop for new money: blocks launches and curve buys.         Every way out keeps working while paused (selling back to the         curve, migration, withdrawals, fee collection and claims), so         pausing can never trap a holder's or creator's funds.\"},\"paymentTokenAllowed(address)\":{\"notice\":\"Payment tokens new auctions may be priced in. A token the         creator controls could block transfers and strand buyers, so         only tokens the owner has approved can be used.\"},\"positionId(uint256)\":{\"notice\":\"The Uniswap position NFT holding each auction's liquidity. This         contract keeps it forever, so the liquidity is permanently locked.\"},\"protocolFees(address)\":{\"notice\":\"Protocol fees earned and not yet claimed, per token.         `claimProtocolFees` pays them to the current fee recipient.\"},\"sellTokens(uint256,uint256,uint256)\":{\"notice\":\"Sell `amount` tokens (in token wei) back to the curve of an         auction that hasn't graduated yet. The tokens are burned and the         seller is paid from the raise, at the curve price minus the         protocol fee.\"},\"setDefaultFeeBps(uint256)\":{\"notice\":\"Change the fee for auctions created from now on. Existing         auctions keep the fee they were created with, so a creator's         terms can never change mid-sale.\"},\"setDefaultLpFeeShareBps(uint256)\":{\"notice\":\"Change the protocol's share of trading fees for auctions created         from now on. Existing auctions keep the share they were created         with.\"},\"setLaunchPreset((address,uint256,uint256,uint256,uint256,uint256))\":{\"notice\":\"Set the parameters `launch` uses. Applies to launches from now         on; existing auctions are unaffected.\"},\"setPaymentTokenAllowed(address,bool)\":{\"notice\":\"Allow or disallow a payment token for new auctions. Auctions         already priced in a token carry on if it is disallowed.\"},\"setProtocolFeeRecipient(address)\":{\"notice\":\"Change where protocol fees are sent, including fees earned but         not yet claimed.\"},\"sweep(address,address)\":{\"notice\":\"Recover tokens held above what is owed, such as tokens         transferred to this contract directly. Unwithdrawn raises,         unclaimed payouts and unclaimed fees can never be swept.\"},\"withdrawProceeds(uint256)\":{\"notice\":\"Transfer an auction's raised payment tokens to its creator.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/TokenAuction.sol\":\"TokenAuction\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/access/Ownable.sol\":{\"keccak256\":\"0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6\",\"dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a\"]},\"lib/openzeppelin-contracts/contracts/access/Ownable2Step.sol\":{\"keccak256\":\"0xdcad8898fda432696597752e8ec361b87d85c82cb258115427af006dacf7128c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e2c9d517f0c136d54bd00cd57959d25681d4d6273f5bbbc263afe228303772f0\",\"dweb:/ipfs/QmReNFjXBiufByiAAzfSQ2SM5r3qeUErn46BmN3yVRvrek\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC1363.sol\":{\"keccak256\":\"0xd5ea07362ab630a6a3dee4285a74cf2377044ca2e4be472755ad64d7c5d4b69d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://da5e832b40fc5c3145d3781e2e5fa60ac2052c9d08af7e300dc8ab80c4343100\",\"dweb:/ipfs/QmTzf7N5ZUdh5raqtzbM11yexiUoLC9z3Ws632MCuycq1d\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC165.sol\":{\"keccak256\":\"0x0afcb7e740d1537b252cb2676f600465ce6938398569f09ba1b9ca240dde2dfc\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1c299900ac4ec268d4570ecef0d697a3013cd11a6eb74e295ee3fbc945056037\",\"dweb:/ipfs/Qmab9owJoxcA7vJT5XNayCMaUR1qxqj1NDzzisduwaJMcZ\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC20.sol\":{\"keccak256\":\"0x1a6221315ce0307746c2c4827c125d821ee796c74a676787762f4778671d4f44\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1bb2332a7ee26dd0b0de9b7fe266749f54820c99ab6a3bcb6f7e6b751d47ee2d\",\"dweb:/ipfs/QmcRWpaBeCYkhy68PR3B4AgD7asuQk7PwkWxrvJbZcikLF\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x1b88b3fb3d85ba5496d7d5f396f83ee1fddcdd6762059ff65992655b67920998\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://89393bb3212da1c0889601b9706a07b39419ddc4d2faab9eaf6e7f9152cf6a1c\",\"dweb:/ipfs/QmcCfzzxv1Bkdz1c1yF4gQCeYb6Us5BJANnzTFqawfd1HL\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0x669464167428061ee0f8618b73b3ee90aff8405683e7ddde8cd77dadaa1afe29\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0dda78587a7358b4fdf6b9fca0fde5a5e34930f36d5268a16028627fc0170195\",\"dweb:/ipfs/QmQ1b6cCceDRWNxti9HifsTCzmVP25Haxs1bWugm52vTqH\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x74ed01eb66b923d0d0cfe3be84604ac04b76482a55f9dd655e1ef4d367f95bc2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5282825a626cfe924e504274b864a652b0023591fa66f06a067b25b51ba9b303\",\"dweb:/ipfs/QmeCfPykghhMc81VJTrHTC7sF6CRvaA1FXVq2pJhwYp1dV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xd6fa4088198f04eef10c5bce8a2f4d60554b7ec4b987f684393c01bf79b94d9f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f95ee0bbd4dd3ac730d066ba3e785ded4565e890dbec2fa7d3b9fe3bad9d0d6e\",\"dweb:/ipfs/QmSLr6bHkPFWT7ntj34jmwfyskpwo97T9jZUrk5sz3sdtR\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x304d732678032a9781ae85c8f204c8fba3d3a5e31c02616964e75cfdc5049098\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://299ced486011781dc98f638059678323c03079fefae1482abaa2135b22fa92d0\",\"dweb:/ipfs/QmbZNbcPTBxNvwChavN2kkZZs7xHhYL7mv51KrxMhsMs3j\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/Panic.sol\":{\"keccak256\":\"0xf7fe324703a64fc51702311dc51562d5cb1497734f074e4f483bfb6717572d7a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c6a5ff4f9fd8649b7ee20800b7fa387d3465bd77cf20c2d1068cd5c98e1ed57a\",\"dweb:/ipfs/QmVSaVJf9FXFhdYEYeCEfjMVHrxDh5qL4CGkxdMWpQCrqG\"]},\"lib/openzeppelin-contracts/contracts/utils/Pausable.sol\":{\"keccak256\":\"0xdb484371dfbb848cb6f5d70464e9ac9b2900e4164ead76bbce4fef0b44bcc68f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f9d6f6f6600a2bec622f699081b58350873b5e63ce05464d17d674a290bb8a7c\",\"dweb:/ipfs/QmQKVzSQY1PM3Bid4QhgVVZyx6B4Jx7XgaQzLKHj38vJz8\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xa516cbf1c7d15d3517c2d668601ce016c54395bf5171918a14e2686977465f53\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1e1d079e8edfb58efd23a311e315a4807b01b5d1cf153f8fa2d0608b9dec3e99\",\"dweb:/ipfs/QmTBExeX2SDTkn5xbk5ssbYSx7VqRp9H4Ux1CY4uQM4b9N\"]},\"lib/openzeppelin-contracts/contracts/utils/StorageSlot.sol\":{\"keccak256\":\"0xcf74f855663ce2ae00ed8352666b7935f6cddea2932fdf2c3ecd30a9b1cd0e97\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9f660b1f351b757dfe01438e59888f31f33ded3afcf5cb5b0d9bf9aa6f320a8b\",\"dweb:/ipfs/QmarDJ5hZEgBtCmmrVzEZWjub9769eD686jmzb2XpSU1cM\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x8891738ffe910f0cf2da09566928589bf5d63f4524dd734fd9cedbac3274dd5c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://971f954442df5c2ef5b5ebf1eb245d7105d9fbacc7386ee5c796df1d45b21617\",\"dweb:/ipfs/QmadRjHbkicwqwwh61raUEapaVEtaLMcYbQZWs9gUkgj3u\"]},\"lib/openzeppelin-contracts/contracts/utils/math/Math.sol\":{\"keccak256\":\"0x59973a93b1f983f94e10529f46ca46544a9fec2b5f56fb1390bbe9e0dc79f857\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c55ef8f0b9719790c2ae6f81d80a59ffb89f2f0abe6bc065585bd79edce058c5\",\"dweb:/ipfs/QmNNmCbX9NjPXKqHJN8R1WC2rNeZSQrPZLd6FF6AKLyH5Y\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SafeCast.sol\":{\"keccak256\":\"0xc8cae21c9ae4a46e5162ff9bf5b351d6fa6a6eba72d515f3bc1bdfeda7fdf083\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ce830ebcf28e31643caba318996db3763c36d52cd0f23798ba83c135355d45e9\",\"dweb:/ipfs/QmdGPcvptHN7UBCbUYBbRX3hiRVRFLRwno8b4uga6uFNif\"]},\"src/AuctionToken.sol\":{\"keccak256\":\"0xb95a51fbf0d9f1b9fd907333184e49bbd9ed3d3483bff1d3b2219257b99f5489\",\"urls\":[\"bzz-raw://36ea7fdd539dbfb02f2fbfc86acf86c3292cda6b122ea0c142c8215bce742876\",\"dweb:/ipfs/QmcwmYt4GcLrAiQ9f66okET6LpBYnDmQPLNWKG8meKTZ4x\"]},\"src/BondingCurve.sol\":{\"keccak256\":\"0xcecf8452b4874a79822fb9220c7214bf457e68ed07930a0d4825859c2604cd52\",\"urls\":[\"bzz-raw://bd4f77a78f63bf53544a45cd0d37e1da20a0e1aac5a893a62aca3aaeecad5101\",\"dweb:/ipfs/QmYtjpeLoTpTZuZxvr3yZRkAQ7dmtewXmRnoY63Rp5Jd9X\"]},\"src/TokenAuction.sol\":{\"keccak256\":\"0x53226d77f43154f24444e421b361564b9af9a2b0c4edae4ba555475f1840f211\",\"urls\":[\"bzz-raw://0aa683f1a1d38967fdfdc894d22174d9f8f52389fa44d1e938eb44453b994577\",\"dweb:/ipfs/QmPSjAYKmwy3kF28xuTz4hV3f5MjL76BdDH4KeK4a6MHpn\"]},\"src/interfaces/IUniswapV3.sol\":{\"keccak256\":\"0x773e06f4c1ff91c0a1ee79d5fe77a3340b79625edb29773ddad1ed88769d27d0\",\"urls\":[\"bzz-raw://17946a5bd6c253000d6b0a3d5691ac163b40273fde3645534a3ed050a70053de\",\"dweb:/ipfs/QmPLHEnBjx1bbpBmwVAYqiD7KJDMvQY3jWoeWTMs81fwsm\"]}},\"version\":1}",
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
              "internalType": "address",
              "name": "token",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "account",
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
          "name": "Claimed",
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
              "internalType": "address",
              "name": "token",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "bool",
              "name": "allowed",
              "type": "bool",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "PaymentTokenAllowedUpdated",
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
              "name": "recipient",
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
          "name": "ProtocolFeesClaimed",
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
              "internalType": "contract IERC20",
              "name": "token",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "claim",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "contract IERC20",
              "name": "token",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "claimProtocolFees",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amount",
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
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "claimable",
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
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "paymentTokenAllowed",
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
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "protocolFees",
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
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "allowed",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setPaymentTokenAllowed"
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
            "details": "Opens (or corrects) the pool at the auction's final price, adds         full-range liquidity from the reserved share of the raise plus         newly minted tokens, and keeps the position NFT forever. Never         leaves tokens permanently locked: if there is nothing to pair, or         Uniswap rejects the position, transfers are unlocked anyway and         the reserved funds are credited to the creator to `claim`."
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
          "claim(address)": {
            "notice": "Withdraw everything credited to you in `token`."
          },
          "claimProtocolFees(address)": {
            "notice": "Send the protocol's unclaimed fees in `token` to the fee         recipient. Anyone may trigger it."
          },
          "claimable(address,address)": {
            "notice": "Payouts credited to an account and not yet claimed, by token         then account: a creator's share of pool fees, and any reserve         that migration couldn't place in the pool."
          },
          "collectFees(uint256)": {
            "notice": "Collect the migrated pool's trading fees: the protocol's share         is added to `protocolFees` and the rest is credited to the         creator to `claim`. Anyone may trigger it."
          },
          "createAuction((string,string,string,uint256,address,uint256,uint256,uint256,uint256))": {
            "notice": "Launch a token with custom curve parameters. Trading starts         immediately; the token graduates to Uniswap once `maxRaise` is         raised."
          },
          "custodied(address)": {
            "notice": "Tokens this contract owes, per token: raises not yet withdrawn,         payouts not yet claimed and protocol fees not yet claimed.         Anything held above this is excess (e.g. tokens sent here         directly) and can be recovered with `sweep`."
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
            "notice": "Emergency stop for new money: blocks launches and curve buys.         Every way out keeps working while paused (selling back to the         curve, migration, withdrawals, fee collection and claims), so         pausing can never trap a holder's or creator's funds."
          },
          "paymentTokenAllowed(address)": {
            "notice": "Payment tokens new auctions may be priced in. A token the         creator controls could block transfers and strand buyers, so         only tokens the owner has approved can be used."
          },
          "positionId(uint256)": {
            "notice": "The Uniswap position NFT holding each auction's liquidity. This         contract keeps it forever, so the liquidity is permanently locked."
          },
          "protocolFees(address)": {
            "notice": "Protocol fees earned and not yet claimed, per token.         `claimProtocolFees` pays them to the current fee recipient."
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
          "setPaymentTokenAllowed(address,bool)": {
            "notice": "Allow or disallow a payment token for new auctions. Auctions         already priced in a token carry on if it is disallowed."
          },
          "setProtocolFeeRecipient(address)": {
            "notice": "Change where protocol fees are sent, including fees earned but         not yet claimed."
          },
          "sweep(address,address)": {
            "notice": "Recover tokens held above what is owed, such as tokens         transferred to this contract directly. Unwithdrawn raises,         unclaimed payouts and unclaimed fees can never be swept."
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
        "keccak256": "0x53226d77f43154f24444e421b361564b9af9a2b0c4edae4ba555475f1840f211",
        "urls": [
          "bzz-raw://0aa683f1a1d38967fdfdc894d22174d9f8f52389fa44d1e938eb44453b994577",
          "dweb:/ipfs/QmPSjAYKmwy3kF28xuTz4hV3f5MjL76BdDH4KeK4a6MHpn"
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
  "id": 20
} as const;
