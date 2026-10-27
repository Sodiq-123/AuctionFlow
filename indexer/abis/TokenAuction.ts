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
        },
        {
          "name": "weth_",
          "type": "address",
          "internalType": "contract IWETH9"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "receive",
      "stateMutability": "payable"
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
      "name": "buyTokensWithETH",
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
      "outputs": [],
      "stateMutability": "payable"
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
        },
        {
          "name": "paymentToken",
          "type": "address",
          "internalType": "address"
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
      "name": "launchPresets",
      "inputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
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
      "name": "sellTokensForETH",
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
      "name": "weth",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "contract IWETH9"
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
    "object": "0x60c060405234801562000010575f80fd5b506040516200620638038062006206833981016040819052620000339162000233565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f005533806200007e57604051631e4fbdf760e01b81525f60048201526024015b60405180910390fd5b6200008981620001b1565b506001600160a01b038416620000d75760405162461bcd60e51b815260206004820152601260248201527116995c9bc8199959481c9958da5c1a595b9d60721b604482015260640162000075565b6001600160a01b0382166200012f5760405162461bcd60e51b815260206004820152601560248201527f5a65726f20706f736974696f6e206d616e616765720000000000000000000000604482015260640162000075565b6001600160a01b03808316608052811660a0526103e8831115620001855760405162461bcd60e51b815260206004820152600c60248201526b08ccaca40e8dede40d0d2ced60a31b604482015260640162000075565b5050600680546001600160a01b0319166001600160a01b0393909316929092179091556007556200028c565b600180546001600160a01b0319169055620001cc81620001cf565b50565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0381168114620001cc575f80fd5b5f805f806080858703121562000247575f80fd5b845162000254816200021e565b6020860151604087015191955093506200026e816200021e565b606086015190925062000281816200021e565b939692955090935050565b60805160a051615f04620003025f395f81816102d7015281816104fa0152818161170f0152818161179a015281816126b1015261289a01525f81816107e90152818161141101528181611cf00152818161331f0152818161335a01528181613382015281816135ce01526136090152615f045ff3fe608060405260043610620002c6575f3560e01c8063715018a61162000172578063bcae25a411620000ce578063e30c39781162000082578063e30c39781462000a9a578063e521cb921462000ab9578063efc20dad1462000add578063f2fde38b1462000b17578063fa461e331462000b3b578063fdfae4861462000b5f575f80fd5b8063bcae25a414620009b3578063d4570c1c14620009ca578063d55be8c61462000a04578063d9f1aed91462000a1b578063dcf844a71462000a3f578063dd1b9c4a1462000a6e575f80fd5b80638663efa411620001265780638663efa414620008715780638da5cb5b1462000905578063a4ce25a71462000923578063ac8139161462000947578063b17acdcd146200096b578063b8dc491b146200098f575f80fd5b8063715018a614620007a857806375f0c2f014620007bf578063791b98bc14620007d657806379ba5097146200080b5780638396602114620008225780638456cb59146200085a575f80fd5b80634373a28611620002225780635c975abb11620001d65780635c975abb14620006d75780635e0a4acd14620006f757806364df049e146200071b578063683931b4146200073c57806369ce6d471462000760578063709ef2311462000784575f80fd5b80634373a2861462000535578063454b0608146200055957806348f719e5146200057d57806354147e9e14620005af578063571a26a014620005de5780635c471ad514620006a8575f80fd5b806328336098116200027a57806328336098146200045a5780632ad71573146200047e5780633edb917d14620004955780633ef068d214620004ac5780633f4ba83a14620004d05780633fc8cef314620004e7575f80fd5b806306d49f92146200034757806309e06259146200038e5780630fda366d14620003b2578063121a257f14620003e55780631ae9898f146200041f5780631e83409a1462000436575f80fd5b366200034357336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614620003415760405162461bcd60e51b81526020600482015260146024820152730aae6ca40c4eaf2a8ded6cadce6aed2e8d08aa8960631b60448201526064015b60405180910390fd5b005b5f80fd5b34801562000353575f80fd5b5062000379620003653660046200451d565b600b6020525f908152604090205460ff1681565b60405190151581526020015b60405180910390f35b3480156200039a575f80fd5b5062000341620003ac3660046200453b565b62000b76565b348015620003be575f80fd5b50620003d6620003d03660046200453b565b62000c06565b60405190815260200162000385565b348015620003f1575f80fd5b50620004096200040336600462004553565b62000c37565b6040805192835260208301919091520162000385565b620003416200043036600462004553565b62000c93565b34801562000442575f80fd5b50620003d6620004543660046200451d565b62000cd2565b34801562000466575f80fd5b50620003416200047836600462004582565b62000dfe565b3480156200048a575f80fd5b50620003d660025481565b348015620004a1575f80fd5b50620003d6600c5481565b348015620004b8575f80fd5b5062000341620004ca366004620045be565b62000eb3565b348015620004dc575f80fd5b50620003416200106e565b348015620004f3575f80fd5b506200051c7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200162000385565b34801562000541575f80fd5b5062000341620005533660046200453b565b62001084565b34801562000565575f80fd5b5062000341620005773660046200453b565b62001112565b34801562000589575f80fd5b50620003796200059b3660046200453b565b60056020525f908152604090205460ff1681565b348015620005bb575f80fd5b50620003d6620005cd3660046200453b565b600d6020525f908152604090205481565b348015620005ea575f80fd5b5062000696620005fc3660046200453b565b600360208181525f92835260409283902083516101208101855281546001600160a01b03908116825260018301548116938201939093526002820154948101949094529182015460608401526004820154608084015260058201541660a0830152600681015460c0830152600781015460e083015260088101546101008301526009810154600a820154600b9092015460ff909116919084565b6040516200038594939291906200460a565b348015620006b4575f80fd5b50620003d6620006c63660046200451d565b60086020525f908152604090205481565b348015620006e3575f80fd5b50600154600160a01b900460ff1662000379565b34801562000703575f80fd5b506200034162000715366004620046b7565b620016f0565b34801562000727575f80fd5b506006546200051c906001600160a01b031681565b34801562000748575f80fd5b50620003d66200075a366004620046e1565b62001826565b3480156200076c575f80fd5b50620003d66200077e3660046200451d565b6200184c565b34801562000790575f80fd5b5062000341620007a2366004620046b7565b6200194c565b348015620007b4575f80fd5b506200034162001980565b348015620007cb575f80fd5b50620003d66107d081565b348015620007e2575f80fd5b506200051c7f000000000000000000000000000000000000000000000000000000000000000081565b34801562000817575f80fd5b506200034162001995565b3480156200082e575f80fd5b506200051c620008403660046200453b565b600e6020525f90815260409020546001600160a01b031681565b34801562000866575f80fd5b5062000341620019da565b3480156200087d575f80fd5b50620008cd6200088f3660046200451d565b60106020525f90815260409020805460018201546002830154600384015460048501546005909501546001600160a01b039094169492939192909186565b604080516001600160a01b0390971687526020870195909552938501929092526060840152608083015260a082015260c00162000385565b34801562000911575f80fd5b505f546001600160a01b03166200051c565b3480156200092f575f80fd5b506200034162000941366004620046b7565b620019ee565b34801562000953575f80fd5b50620003d66200096536600462004764565b62001a28565b34801562000977575f80fd5b5062000409620009893660046200453b565b62001bed565b3480156200099b575f80fd5b5062000341620009ad36600462004816565b62001ea3565b348015620009bf575f80fd5b50620003d660075481565b348015620009d6575f80fd5b50620003d6620009e836600462004816565b600a60209081525f928352604080842090915290825290205481565b34801562000a10575f80fd5b50620003d66103e881565b34801562000a27575f80fd5b506200034162000a393660046200453b565b62002058565b34801562000a4b575f80fd5b50620003d662000a5d3660046200451d565b60096020525f908152604090205481565b34801562000a7a575f80fd5b5062000a8561271081565b60405162ffffff909116815260200162000385565b34801562000aa6575f80fd5b506001546001600160a01b03166200051c565b34801562000ac5575f80fd5b506200034162000ad73660046200451d565b620022ce565b34801562000ae9575f80fd5b50620003d662000afb36600462004847565b600460209081525f928352604080842090915290825290205481565b34801562000b23575f80fd5b506200034162000b353660046200451d565b62002380565b34801562000b47575f80fd5b506200034162000b593660046200486d565b620023f3565b34801562000b6b575f80fd5b50620003d661138881565b62000b80620024b8565b61138881111562000bc55760405162461bcd60e51b815260206004820152600e60248201526d0a6d0c2e4ca40e8dede40d0d2ced60931b604482015260640162000338565b600c5460408051918252602082018390527fafd7016dba95bc0c303b0838ae8e4829497ed18cc6a0ed00eec5fc7c50148e17910160405180910390a1600c55565b5f8181526003602081905260408220600b810154600282015492820154919262000c3092620024e6565b9392505050565b5f8281526003602081905260408220600b810154600282015492820154849362000c65929187919062002510565b60068201549093506127109062000c7d9085620048d4565b62000c89919062004902565b9150509250929050565b62000c9d620025a9565b62000ca7620025c7565b62000cb68282346001620025f3565b62000cce60015f8051602062005eaf83398151915255565b5050565b5f62000cdd620025a9565b506001600160a01b0381165f908152600a602090815260408083203384529091529020548062000d435760405162461bcd60e51b815260206004820152601060248201526f4e6f7468696e6720746f20636c61696d60801b604482015260640162000338565b6001600160a01b0382165f818152600a60209081526040808320338452825280832083905592825260089052908120805483929062000d8490849062004918565b9091555062000da090506001600160a01b038316338362002a5e565b60405181815233906001600160a01b038416907ff7a40077ff7a04c7e61f6f26fb13774259ddf1b6bce9ecf26a8276cdd3992683906020015b60405180910390a362000df960015f8051602062005eaf83398151915255565b919050565b62000e08620024b8565b6001600160a01b03821662000e555760405162461bcd60e51b81526020600482015260126024820152712d32b937903830bcb6b2b73a103a37b5b2b760711b604482015260640162000338565b6001600160a01b0382165f818152600b6020908152604091829020805460ff191685151590811790915591519182527f359d3f0085554124a1c9fc8f53602b98df473a1d955d73500399fb2ef8b8cf18910160405180910390a25050565b62000ebd620024b8565b5f62000ecd60208301836200451d565b6001600160a01b03160362000f1a5760405162461bcd60e51b81526020600482015260126024820152712d32b937903830bcb6b2b73a103a37b5b2b760711b604482015260640162000338565b600b5f62000f2c60208401846200451d565b6001600160a01b0316815260208101919091526040015f205460ff1662000f925760405162461bcd60e51b815260206004820152601960248201527814185e5b595b9d081d1bdad95b881b9bdd08185b1b1bddd959603a1b604482015260640162000338565b62000fb581602001358260400135836060013584608001358560a0013562002a97565b8060105f62000fc860208401846200451d565b6001600160a01b0316815260208101919091526040015f2062000fec82826200492e565b507f29f62c75478dac4ea9396c9b5e58b4e29d6f7812c6eb05ceaf5d0c776db6b57690506200101f60208301836200451d565b604080516001600160a01b039092168252602080850135908301528084013590820152606080840135908201526080808401359082015260a0808401359082015260c00160405180910390a150565b62001078620024b8565b6200108262002cf8565b565b6200108e620024b8565b6103e8811115620010d15760405162461bcd60e51b815260206004820152600c60248201526b08ccaca40e8dede40d0d2ced60a31b604482015260640162000338565b60075460408051918252602082018390527f3062378541f1b58e0547bfb13e7d7585153e442e477e263c6e63d4775b3072a6910160405180910390a1600755565b6200111c620025a9565b5f8181526003602052604090206002600982015460ff166003811115620011475762001147620045d5565b146200118e5760405162461bcd60e51b8152602060048201526015602482015274105d58dd1a5bdb881b9bdd0818dbdb5c1b195d1959605a1b604482015260640162000338565b5f6200119a8262002d4f565b90505f620011ba83600b0154845f0160020154855f0160030154620024e6565b90505f620011dd83620011d6670de0b6b3a764000080620048d4565b8462002d77565b6040805160c0810182525f606082018190526080820181905260a0820181905287546001600160a01b0390811680845260018a015490911660208085018290529181118486015260098a01805460ff19166003179055825260089052918220805493945090928692906200125390849062004918565b909155505060208101516040516370a0823160e01b815230600482015285916001600160a01b0316906370a0823190602401602060405180830381865afa158015620012a1573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620012c791906200498d565b620012d3919062004918565b816080018181525050805f01516001600160a01b031663af35c6c76040518163ffffffff1660e01b81526004015f604051808303815f87803b15801562001318575f80fd5b505af11580156200132b573d5f803e3d5ffd5b505050505f841180156200133e57505f82115b15620014a85780516040516340c10f1960e01b8152306004820152602481018490526001600160a01b03909116906340c10f19906044015f604051808303815f87803b1580156200138d575f80fd5b505af1158015620013a0573d5f803e3d5ffd5b50505050620013b483826040015162002e31565b6001600160a01b031660608201525f80620013cf8362002f42565b60608501516040516309f56ab160e11b81526001600160a01b0380851660048301528084166024830152612710604483015291821660648201529294509092507f000000000000000000000000000000000000000000000000000000000000000016906313ead562906084016020604051808303815f875af115801562001458573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906200147e9190620049a5565b6001600160a01b031660a08401526200149983858862002f6c565b620014a5888462003208565b50505b80516040516370a0823160e01b81523060048201525f916001600160a01b0316906370a0823190602401602060405180830381865afa158015620014ee573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906200151491906200498d565b9050801562001578578151604051630852cd8d60e31b8152600481018390526001600160a01b03909116906342966c68906024015f604051808303815f87803b15801562001560575f80fd5b505af115801562001573573d5f803e3d5ffd5b505050505b608082015160208301516040516370a0823160e01b81523060048201525f92916001600160a01b0316906370a0823190602401602060405180830381865afa158015620015c7573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620015ed91906200498d565b620015f9919062004918565b905080156200167b576020808401516001600160a01b039081165f908152600a8352604080822060058c01549093168252919092528120805483929062001642908490620049c3565b90915550506020808401516001600160a01b03165f908152600890915260408120805483929062001675908490620049c3565b90915550505b825f01516001600160a01b031663715018a66040518163ffffffff1660e01b81526004015f604051808303815f87803b158015620016b7575f80fd5b505af1158015620016ca573d5f803e3d5ffd5b5050505050505050505050620016ed60015f8051602062005eaf83398151915255565b50565b620016fa620025a9565b5f80620017098585856200362f565b915091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b031614620017845760405162461bcd60e51b815260206004820152601160248201527009cdee840e0e4d2c6cac840d2dc408aa89607b1b604482015260640162000338565b604051632e1a7d4d60e01b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690632e1a7d4d906024015f604051808303815f87803b158015620017e4575f80fd5b505af1158015620017f7573d5f803e3d5ffd5b5050505062001807338262003972565b50506200182160015f8051602062005eaf83398151915255565b505050565b5f62001831620025c7565b62001846620018408362004aab565b62003a17565b92915050565b5f62001857620025a9565b506001600160a01b0381165f9081526009602052604090205480620018b25760405162461bcd60e51b815260206004820152601060248201526f4e6f7468696e6720746f20636c61696d60801b604482015260640162000338565b6001600160a01b0382165f908152600960209081526040808320839055600890915281208054839290620018e890849062004918565b909155505060065462001909906001600160a01b0384811691168362002a5e565b6006546040518281526001600160a01b03918216918416907f4f8a50ec1fe3d316970fdadd1f94e0b822f92d31e2bac3c9dc2c6c287de071079060200162000dd9565b62001956620025a9565b5f80620019658585856200362f565b9092509050620018076001600160a01b038316338362002a5e565b6200198a620024b8565b620010825f62003c03565b60015433906001600160a01b03168114620019cf5760405163118cdaa760e01b81526001600160a01b038216600482015260240162000338565b620016ed8162003c03565b620019e4620024b8565b6200108262003c1e565b620019f8620025a9565b62001a02620025c7565b62001a108383835f620025f3565b6200182160015f8051602062005eaf83398151915255565b5f62001a33620025c7565b6001600160a01b038083165f90815260106020908152604091829020825160c0810184528154909416808552600182015492850192909252600281015492840192909252600382015460608401526004820154608084015260059091015460a083015262001ad75760405162461bcd60e51b815260206004820152601060248201526f139bc81b185d5b98da081c1c995cd95d60821b604482015260640162000338565b604080516101406020601f8c01819004028201810190925261012081018a815262001be0928291908d908d90819085018382808284375f92019190915250505090825250604080516020601f8c018190048102820181019092528a815291810191908b908b90819084018382808284375f92019190915250505090825250604080516020601f8a01819004810282018101909252888152918101919089908990819084018382808284375f920191909152505050908252506020848101519082015283516001600160a01b031660408083019190915284015160608083019190915284015160808083019190915284015160a08083019190915284015160c09091015262003a17565b9998505050505050505050565b5f8062001bf9620025a9565b5f83815260036020819052604090912090600982015460ff16600381111562001c265762001c26620045d5565b14801562001c4057505f848152600d602052604090205415155b62001c7c5760405162461bcd60e51b815260206004820152600b60248201526a2737903837b9b4ba34b7b760a91b604482015260640162000338565b604080516080810182525f868152600d6020908152838220548352309083019081526001600160801b0383850181815260608501828152955163fc6f786560e01b81529451600486015291516001600160a01b039081166024860152915181166044850152935190931660648301529182917f00000000000000000000000000000000000000000000000000000000000000009091169063fc6f78659060840160408051808303815f875af115801562001d38573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062001d5e919062004b8f565b600185015485549294509092506001600160a01b039081169116108062001d8757818362001d8a565b82825b600886015491975095505f906127109062001da69089620048d4565b62001db2919062004902565b90505f612710865f01600801548862001dcc9190620048d4565b62001dd8919062004902565b8654600588015491925062001dfc916001600160a01b039182169116848b62003c64565b6001860154600587015462001e20916001600160a01b039081169116838a62003c64565b887f8dcde09e464f5c324d7cbf62dbc0c647b8ad9242592ae364153f2549f4898d0462001e4e848b62004918565b62001e5a848b62004918565b60408051928352602083019190915281018590526060810184905260800160405180910390a250505050505062001e9e60015f8051602062005eaf83398151915255565b915091565b62001ead620025a9565b62001eb7620024b8565b6001600160a01b03811662001f005760405162461bcd60e51b815260206004820152600e60248201526d16995c9bc81c9958da5c1a595b9d60921b604482015260640162000338565b6040516370a0823160e01b81523060048201525f906001600160a01b038416906370a0823190602401602060405180830381865afa15801562001f45573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062001f6b91906200498d565b6001600160a01b0384165f9081526008602052604090205490915080821162001fca5760405162461bcd60e51b815260206004820152601060248201526f04e6f7468696e6720746f2073776565760841b604482015260640162000338565b5f62001fd7828462004918565b905062001fef6001600160a01b038616858362002a5e565b836001600160a01b0316856001600160a01b03167f7b09c29f9106defeccc9ac3b823f3aad0b470d120e5df7aed033b5c43a4bf718836040516200203591815260200190565b60405180910390a350505062000cce60015f8051602062005eaf83398151915255565b62002062620025a9565b5f81815260036020526040902060058101546001600160a01b03163314620020bb5760405162461bcd60e51b815260206004820152600b60248201526a2737ba1031b932b0ba37b960a91b604482015260640162000338565b6002600982015460ff166003811115620020d957620020d9620045d5565b14806200210157506003600982015460ff166003811115620020ff57620020ff620045d5565b145b620021475760405162461bcd60e51b8152602060048201526015602482015274105d58dd1a5bdb881b9bdd0818dbdb5c1b195d1959605a1b604482015260640162000338565b5f8281526005602052604090205460ff16156200219b5760405162461bcd60e51b815260206004820152601160248201527020b63932b0b23c903bb4ba34323930bbb760791b604482015260640162000338565b5f620021a78262002d4f565b82600a0154620021b8919062004918565b90505f8111620022015760405162461bcd60e51b81526020600482015260136024820152724e6f7468696e6720746f20776974686472617760681b604482015260640162000338565b5f838152600560209081526040808320805460ff191660019081179091558501546001600160a01b031683526008909152812080548392906200224690849062004918565b9091555050600582015460018301546200226e916001600160a01b0391821691168362002a5e565b60058201546040518281526001600160a01b039091169084907f579e0e2d0cfdb23711bb6034ac9f2ba41e8965a8e24589d1c3cf5604868661fc9060200160405180910390a35050620016ed60015f8051602062005eaf83398151915255565b620022d8620024b8565b6001600160a01b038116620023255760405162461bcd60e51b815260206004820152601260248201527116995c9bc8199959481c9958da5c1a595b9d60721b604482015260640162000338565b6006546040516001600160a01b038084169216907fd3890fc76afcfc31cba1dcf2c27b50e2541e4d75039c981855b5b5e03682aea0905f90a3600680546001600160a01b0319166001600160a01b0392909216919091179055565b6200238a620024b8565b600180546001600160a01b0383166001600160a01b03199091168117909155620023bb5f546001600160a01b031690565b6001600160a01b03167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b600f546001600160a01b031615801590620024185750600f546001600160a01b031633145b6200245e5760405162461bcd60e51b8152602060048201526015602482015274556e617574686f72697a65642063616c6c6261636b60581b604482015260640162000338565b5f806200246e8385018562004816565b915091505f8613156200249157620024916001600160a01b038316338862002a5e565b5f851315620024b057620024b06001600160a01b038216338762002a5e565b505050505050565b5f546001600160a01b03163314620010825760405163118cdaa760e01b815233600482015260240162000338565b5f620024fc8285670de0b6b3a764000062002d77565b620025089084620049c3565b949350505050565b5f806200253484866200252c670de0b6b3a764000080620048d4565b600162003d10565b90505f6200259084876200254a8a6002620048d4565b620025569190620049c3565b620025629089620048d4565b670de0b6b3a7640000620025778180620048d4565b62002584906002620048d4565b6200252c9190620048d4565b90506200259e8183620049c3565b979650505050505050565b620025b362003d5d565b60025f8051602062005eaf83398151915255565b600154600160a01b900460ff1615620010825760405163d93c066560e01b815260040160405180910390fd5b5f8481526003602052604090206001600982015460ff1660038111156200261e576200261e620045d5565b14620026625760405162461bcd60e51b815260206004820152601260248201527141756374696f6e206e6f742061637469766560701b604482015260640162000338565b5f8411620026a15760405162461bcd60e51b815260206004820152600b60248201526a16995c9bc8185b5bdd5b9d60aa1b604482015260640162000338565b811580620026df575060018101547f00000000000000000000000000000000000000000000000000000000000000006001600160a01b039081169116145b620027215760405162461bcd60e51b815260206004820152601160248201527009cdee840e0e4d2c6cac840d2dc408aa89607b1b604482015260640162000338565b5f806200272f838762003d8e565b600686015492985090935091505f90612710906200274e9085620048d4565b6200275a919062004902565b90505f620027698285620049c3565b905086811115620027b15760405162461bcd60e51b815260206004820152601160248201527014db1a5c1c1859d948195e18d959591959607a1b604482015260640162000338565b8385600a015f828254620027c69190620049c3565b925050819055508785600b015f828254620027e29190620049c3565b90915550505f898152600460209081526040808320338452909152812080548a929062002811908490620049c3565b909155505060018501546001600160a01b03165f908152600860205260408120805483929062002843908490620049c3565b909155505060018501546001600160a01b03165f908152600960205260408120805484929062002875908490620049c3565b90915550508215620028915760098501805460ff191660021790555b851562002929577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004015f604051808303818588803b158015620028f2575f80fd5b505af115801562002905573d5f803e3d5ffd5b5050505050620029233382896200291d919062004918565b62003972565b62002943565b600185015462002943906001600160a01b03168262003e50565b84546040516340c10f1960e01b8152336004820152602481018a90526001600160a01b03909116906340c10f19906044015f604051808303815f87803b1580156200298c575f80fd5b505af11580156200299f573d5f803e3d5ffd5b50505050600a850154600b860154604080518b8152602081018890529081018590526060810192909252608082015233908a907fc938e879cd47aa84d5893377578d6c211ccd96f382228c42c1bb6a8eaa71a0849060a00160405180910390a3821562002a5357887fc7502df20ccf846bf5005f01564bb502b56dcec19f0e2d0575c4369cc5e3b53b86600a015487600b015460405162002a4a929190918252602082015260400190565b60405180910390a25b505050505050505050565b62002a6d838383600162003f9c565b6200182157604051635274afe760e01b81526001600160a01b038416600482015260240162000338565b5f841162002ada5760405162461bcd60e51b815260206004820152600f60248201526e5a65726f206261736520707269636560881b604482015260640162000338565b5f821162002b1c5760405162461bcd60e51b815260206004820152600e60248201526d5a65726f206d617820726169736560901b604482015260640162000338565b6107d0811015801562002b3157506127108111155b62002b7f5760405162461bcd60e51b815260206004820152601760248201527f496e76616c6964206c6971756964697479207368617265000000000000000000604482015260640162000338565b6ec097ce7bc90715b34b9f1000000000851115801562002bb25750722cd76fe086b93ce2f768a00b22a000000000008411155b801562002bd25750722cd76fe086b93ce2f768a00b22a000000000008311155b801562002bf05750701d6329f1c35ca4bfabb9f56100000000008211155b62002c305760405162461bcd60e51b815260206004820152600f60248201526e4375727665206f766572666c6f777360881b604482015260640162000338565b5f62002c405f8487878a62004000565b90505f62002c50828787620024e6565b90505f62002c8f61271062002c668688620048d4565b62002c72919062004902565b62002c86670de0b6b3a764000080620048d4565b84600162003d10565b90508762002c9e8285620049c3565b111562002cee5760405162461bcd60e51b815260206004820152601e60248201527f537570706c7920746f6f20736d616c6c20666f72206c69717569646974790000604482015260640162000338565b5050505050505050565b62002d02620040a7565b6001805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b5f612710825f016007015483600a015462002d6b9190620048d4565b62001846919062004902565b5f805f62002d868686620040d2565b91509150815f0362002daf5783818162002da45762002da4620048ee565b049250505062000c30565b81841162002dc95762002dc96003851502601118620040ee565b5f848688095f868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010185841190960395909502919093039390930492909217029150509392505050565b5f805f8362002e555762002e4e670de0b6b3a764000080620048d4565b8562002e6a565b8462002e6a670de0b6b3a764000080620048d4565b90925090505f600160401b62002e81838562004902565b1062002eac57604062002ea462002e9e85600160401b8662002d77565b620040ff565b901b62002ec1565b62002ec162002e9e84600160c01b8562002d77565b90506401000276a38111801562002eeb575073fffd8963efd1fc6a506488495d951d5263988d2681105b62002f395760405162461bcd60e51b815260206004820152601b60248201527f5072696365206f75747369646520556e69737761702072616e67650000000000604482015260640162000338565b95945050505050565b5f80826040015162002f5b576020830151835162002f63565b825160208401515b91509150915091565b5f8360a0015190505f816001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa15801562002fb2573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062002fd8919062004bc4565b505050505050905084606001516001600160a01b0316816001600160a01b03160362003005575050505050565b606085015160408601516001600160a01b039182169183169190911190151581145f8162003034578562003041565b6200304160028862004902565b9050805f0362003055575050505050505050565b5f80620030628a62002f42565b600f80546001600160a01b0319166001600160a01b038b811691821790925560608e8101516040805187861660208201529486168582015280518086038201815292850190819052630251596160e31b90529496509294509263128acb0892620030d59230928b928a9260640162004c9e565b60408051808303815f875af1158015620030f1573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062003117919062004b8f565b5050600f80546001600160a01b031916905583620031fc57866001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa1580156200316c573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062003192919062004bc4565b5050505060608d015192985050506001600160a01b03808816911614620031fc5760405162461bcd60e51b815260206004820152601860248201527f506f6f6c207072696365206e6f7420636f727265637465640000000000000000604482015260640162000338565b50505050505050505050565b80516040516370a0823160e01b81523060048201525f916001600160a01b0316906370a0823190602401602060405180830381865afa1580156200324e573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906200327491906200498d565b608083015160208401516040516370a0823160e01b81523060048201529293505f926001600160a01b03909116906370a0823190602401602060405180830381865afa158015620032c7573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620032ed91906200498d565b620032f9919062004918565b90505f80620033088562002f42565b8651919350915062003345906001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000008662004270565b602085015162003380906001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000008562004270565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166388316456604051806101600160405280856001600160a01b03168152602001846001600160a01b0316815260200161271062ffffff168152602001620d899f1960020b8152602001620d89a060020b8152602001886040015162003410578662003412565b875b815260200188604001516200342857876200342a565b865b81526020015f81526020015f8152602001306001600160a01b03168152602001428152506040518263ffffffff1660e01b81526004016200346c919062004cda565b6080604051808303815f875af1925050508015620034a9575060408051601f3d908101601f19168201909252620034a69181019062004da3565b60015b620034fd57604080515f808252602082018190528183018190526060820152905187917f0d9e69eea1226c3cc6b24c170c2b55d6c198272e003451d42e20a842c1d9b914919081900360800190a2620035bc565b5f8a8152600d6020908152604080832087905560a08c018051600e9093529281902080546001600160a01b0319166001600160a01b03909316929092179091559051908a01518b917f0d9e69eea1226c3cc6b24c170c2b55d6c198272e003451d42e20a842c1d9b91491879062003575578462003577565b855b8d604001516200358857866200358a565b855b604080516001600160a01b039095168552602085019390935291830152606082015260800160405180910390a2505050505b8451620035f4906001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000005f62004270565b6020850151620024b0906001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000005f62004270565b5f83815260036020526040812081906001600982015460ff1660038111156200365c576200365c620045d5565b14620036a05760405162461bcd60e51b815260206004820152601260248201527141756374696f6e206e6f742061637469766560701b604482015260640162000338565b5f8511620036df5760405162461bcd60e51b815260206004820152600b60248201526a16995c9bc8185b5bdd5b9d60aa1b604482015260640162000338565b5f8681526004602090815260408083203384529091529020548511156200373b5760405162461bcd60e51b815260206004820152600f60248201526e457863656564732062616c616e636560881b604482015260640162000338565b5f6200375a82600b015487845f0160020154855f0160030154620042cb565b90505f612710835f016006015483620037749190620048d4565b62003780919062004902565b90506200378e818362004918565b935085841015620037d65760405162461bcd60e51b815260206004820152601160248201527014db1a5c1c1859d948195e18d959591959607a1b604482015260640162000338565b6001830154600a840180546001600160a01b03909216965083915f90620037ff90849062004918565b925050819055508683600b015f8282546200381b919062004918565b90915550505f888152600460209081526040808320338452909152812080548992906200384a90849062004918565b90915550506001600160a01b0385165f90815260086020526040812080548692906200387890849062004918565b90915550506001600160a01b0385165f9081526009602052604081208054839290620038a6908490620049c3565b9091555050825460405163079cc67960e41b8152336004820152602481018990526001600160a01b03909116906379cc6790906044015f604051808303815f87803b158015620038f4575f80fd5b505af115801562003907573d5f803e3d5ffd5b50505050600a830154600b840154604080518a81526020810186905290810184905260608101929092526080820152339089907fd7fd93110c86e222ad62b2a786fdc3afd88c4c21f9092614ca01365ba432073c9060a00160405180910390a3505050935093915050565b805f036200397e575050565b5f826001600160a01b0316826040515f6040518083038185875af1925050503d805f8114620039c9576040519150601f19603f3d011682016040523d82523d5f602084013e620039ce565b606091505b5050905080620018215760405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b604482015260640162000338565b60808101516001600160a01b03165f908152600b602052604081205460ff1662003a805760405162461bcd60e51b815260206004820152601960248201527814185e5b595b9d081d1bdad95b881b9bdd08185b1b1bddd959603a1b604482015260640162000338565b62003aa482606001518360a001518460c001518560e0015186610100015162002a97565b60028054905f62003ab58362004deb565b9190505590505f825f01518360200151846060015130866040015160405162003ade90620044ed565b62003aee95949392919062004e06565b604051809103905ff08015801562003b08573d5f803e3d5ffd5b505f8381526003602081905260409182902080546001600160a01b03199081166001600160a01b0386811691909117835560808901516001808501805485169383169390931790925560a08a01516002850181905560c08b015195850186905560e08b015160048601819055600586018054339616861790556007805460068801556101008d0151908701819055600c54600888015560098701805460ff19169095179094558b88015197519899509497889794968b967f78f87bd22347e4e37db1ab310c6ce7e1780121e5e48207cd0b02d39ee87d28349662003bf3968d96959490919062004e5a565b60405180910390a3505050919050565b600180546001600160a01b0319169055620016ed8162004372565b62003c28620025c7565b6001805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25862002d323390565b6001600160a01b0384165f908152600960205260408120805484929062003c8d908490620049c3565b9091555062003c9f9050828262004918565b6001600160a01b038086165f908152600a602090815260408083209388168352929052908120805490919062003cd7908490620049c3565b90915550506001600160a01b0384165f908152600860205260408120805483929062003d05908490620049c3565b909155505050505050565b5f62003d4462003d2083620043c1565b801562003d3f57505f848062003d3a5762003d3a620048ee565b868809115b151590565b62003d5186868662002d77565b62002f399190620049c3565b5f8051602062005eaf833981519152546002036200108257604051633ee5aeb560e01b815260040160405180910390fd5b600b8201546002830154600384015483925f92839262003db19291869162002510565b91505f85600a0154865f016004015462003dcc919062004918565b90508083101562003de157505f905062003e49565b8083111562003e4357600b8601546002870154600388015462003e08929184918962004000565b9350835f0362003e23575f8060019350935093505062003e49565b600b8601546002870154600388015462003e409291879162002510565b92505b50600190505b9250925092565b6040516370a0823160e01b81523060048201525f906001600160a01b038416906370a0823190602401602060405180830381865afa15801562003e95573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062003ebb91906200498d565b905062003ed46001600160a01b038416333085620043f2565b6040516370a0823160e01b8152306004820152829082906001600160a01b038616906370a0823190602401602060405180830381865afa15801562003f1b573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062003f4191906200498d565b62003f4d919062004918565b14620018215760405162461bcd60e51b815260206004820152601960248201527f556e737570706f72746564207061796d656e7420746f6b656e00000000000000604482015260640162000338565b60405163a9059cbb60e01b5f8181526001600160a01b038616600452602485905291602083604481808b5af1925060015f5114831662003ff457838315161562003fe8573d5f823e3d81fd5b5f873b113d1516831692505b60405250949350505050565b5f8062004022866200401b670de0b6b3a764000080620048d4565b8762002d77565b6200402f906001620049c3565b9050828111156200403d5750815b5f5b818110156200259e575f6002620040578484620049c3565b62004064906001620049c3565b62004070919062004902565b905087620040818a838a8a62002510565b116200409057809150620040a0565b6200409d60018262004918565b92505b506200403f565b600154600160a01b900460ff166200108257604051638dfc202b60e01b815260040160405180910390fd5b5f805f1983850993909202808410938190039390930393915050565b634e487b715f52806020526024601cfd5b5f600182116200410d575090565b816001600160801b8210620041275760809190911c9060401b5b600160401b82106200413e5760409190911c9060201b5b6401000000008210620041565760209190911c9060101b5b6201000082106200416c5760109190911c9060081b5b6101008210620041815760089190911c9060041b5b60108210620041955760049190911c9060021b5b60048210620041a25760011b5b600302600190811c90818581620041bd57620041bd620048ee565b048201901c90506001818581620041d857620041d8620048ee565b048201901c90506001818581620041f357620041f3620048ee565b048201901c905060018185816200420e576200420e620048ee565b048201901c90506001818581620042295762004229620048ee565b048201901c90506001818581620042445762004244620048ee565b048201901c905062004267818581620042615762004261620048ee565b04821190565b90039392505050565b6200427e8383835f62004432565b62001821576200429283835f600162004432565b620042bc57604051635274afe760e01b81526001600160a01b038416600482015260240162000338565b62002a6d838383600162004432565b5f80620042d9858762004918565b90505f620042fc8587620042f6670de0b6b3a764000080620048d4565b62002d77565b90505f62004358858862004312866002620048d4565b6200431e9190620049c3565b6200432a908a620048d4565b670de0b6b3a76400006200433f8180620048d4565b6200434c906002620048d4565b620042f69190620048d4565b9050620043668183620049c3565b98975050505050505050565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b5f6002826003811115620043d957620043d9620045d5565b620043e5919062004e9e565b60ff166001149050919050565b620044028484848460016200447e565b6200442c57604051635274afe760e01b81526001600160a01b038516600482015260240162000338565b50505050565b60405163095ea7b360e01b5f8181526001600160a01b038616600452602485905291602083604481808b5af1925060015f5114831662003ff457838315161562003fe8573d5f823e3d81fd5b6040516323b872dd60e01b5f8181526001600160a01b038781166004528616602452604485905291602083606481808c5af1925060015f51148316620044dc578383151615620044d0573d5f823e3d81fd5b5f883b113d1516831692505b604052505f60605295945050505050565b610fec8062004ec383390190565b6001600160a01b0381168114620016ed575f80fd5b803562000df981620044fb565b5f602082840312156200452e575f80fd5b813562000c3081620044fb565b5f602082840312156200454c575f80fd5b5035919050565b5f806040838503121562004565575f80fd5b50508035926020909101359150565b8015158114620016ed575f80fd5b5f806040838503121562004594575f80fd5b8235620045a181620044fb565b91506020830135620045b38162004574565b809150509250929050565b5f60c08284031215620045cf575f80fd5b50919050565b634e487b7160e01b5f52602160045260245ffd5b600481106200460657634e487b7160e01b5f52602160045260245ffd5b9052565b84516001600160a01b0316815260208086015161018083019162004638908401826001600160a01b03169052565b5060408601516040830152606086015160608301526080860151608083015260a08601516200467260a08401826001600160a01b03169052565b5060c086015160c083015260e086015160e0830152610100808701518184015250620046a3610120830186620045e9565b610140820193909352610160015292915050565b5f805f60608486031215620046ca575f80fd5b505081359360208301359350604090920135919050565b5f60208284031215620046f2575f80fd5b813567ffffffffffffffff81111562004709575f80fd5b8201610120818503121562000c30575f80fd5b5f8083601f8401126200472d575f80fd5b50813567ffffffffffffffff81111562004745575f80fd5b6020830191508360208285010111156200475d575f80fd5b9250929050565b5f805f805f805f6080888a0312156200477b575f80fd5b873567ffffffffffffffff8082111562004793575f80fd5b620047a18b838c016200471c565b909950975060208a0135915080821115620047ba575f80fd5b620047c88b838c016200471c565b909750955060408a0135915080821115620047e1575f80fd5b50620047f08a828b016200471c565b90945092505060608801356200480681620044fb565b8091505092959891949750929550565b5f806040838503121562004828575f80fd5b82356200483581620044fb565b91506020830135620045b381620044fb565b5f806040838503121562004859575f80fd5b823591506020830135620045b381620044fb565b5f805f806060858703121562004881575f80fd5b8435935060208501359250604085013567ffffffffffffffff811115620048a6575f80fd5b620048b4878288016200471c565b95989497509550505050565b634e487b7160e01b5f52601160045260245ffd5b8082028115828204841417620018465762001846620048c0565b634e487b7160e01b5f52601260045260245ffd5b5f82620049135762004913620048ee565b500490565b81810381811115620018465762001846620048c0565b81356200493b81620044fb565b81546001600160a01b0319166001600160a01b03919091161781556020820135600182015560408201356002820155606082013560038201556080820135600482015560a09190910135600590910155565b5f602082840312156200499e575f80fd5b5051919050565b5f60208284031215620049b6575f80fd5b815162000c3081620044fb565b80820180821115620018465762001846620048c0565b634e487b7160e01b5f52604160045260245ffd5b604051610120810167ffffffffffffffff8111828210171562004a145762004a14620049d9565b60405290565b5f82601f83011262004a2a575f80fd5b813567ffffffffffffffff8082111562004a485762004a48620049d9565b604051601f8301601f19908116603f0116810190828211818310171562004a735762004a73620049d9565b8160405283815286602085880101111562004a8c575f80fd5b836020870160208301375f602085830101528094505050505092915050565b5f610120823603121562004abd575f80fd5b62004ac7620049ed565b823567ffffffffffffffff8082111562004adf575f80fd5b62004aed3683870162004a1a565b8352602085013591508082111562004b03575f80fd5b62004b113683870162004a1a565b6020840152604085013591508082111562004b2a575f80fd5b5062004b393682860162004a1a565b6040830152506060830135606082015262004b576080840162004510565b608082015260a083013560a082015260c083013560c082015260e083013560e082015261010080840135818301525080915050919050565b5f806040838503121562004ba1575f80fd5b505080516020909101519092909150565b805161ffff8116811462000df9575f80fd5b5f805f805f805f60e0888a03121562004bdb575f80fd5b875162004be881620044fb565b8097505060208801518060020b811462004c00575f80fd5b955062004c106040890162004bb2565b945062004c206060890162004bb2565b935062004c306080890162004bb2565b925060a088015160ff8116811462004c46575f80fd5b60c0890151909250620048068162004574565b5f81518084525f5b8181101562004c7f5760208185018101518683018201520162004c61565b505f602082860101526020601f19601f83011685010191505092915050565b6001600160a01b0386811682528515156020830152604082018590528316606082015260a0608082018190525f906200259e9083018462004c59565b81516001600160a01b031681526101608101602083015162004d0760208401826001600160a01b03169052565b50604083015162004d1f604084018262ffffff169052565b50606083015162004d35606084018260020b9052565b50608083015162004d4b608084018260020b9052565b5060a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015162004d92828501826001600160a01b03169052565b505061014092830151919092015290565b5f805f806080858703121562004db7575f80fd5b8451935060208501516001600160801b038116811462004dd5575f80fd5b6040860151606090960151949790965092505050565b5f6001820162004dff5762004dff620048c0565b5060010190565b60a081525f62004e1a60a083018862004c59565b828103602084015262004e2e818862004c59565b604084018790526001600160a01b03861660608501528381036080850152905062004366818562004c59565b5f60018060a01b03808a1683528089166020840152508660408301528560608301528460808301528360a083015260e060c083015262001be060e083018462004c59565b5f60ff83168062004eb35762004eb3620048ee565b8060ff8416069150509291505056fe60a060405234801562000010575f80fd5b5060405162000fec38038062000fec8339810160408190526200003391620001c1565b818585600362000044838262000300565b50600462000053828262000300565b5050506001600160a01b0381166200008457604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b6200008f81620000af565b5060808390526006620000a3828262000300565b505050505050620003cc565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b634e487b7160e01b5f52604160045260245ffd5b5f82601f83011262000124575f80fd5b81516001600160401b038082111562000141576200014162000100565b604051601f8301601f19908116603f011681019082821181831017156200016c576200016c62000100565b816040528381526020925086602085880101111562000189575f80fd5b5f91505b83821015620001ac57858201830151818301840152908201906200018d565b5f602085830101528094505050505092915050565b5f805f805f60a08688031215620001d6575f80fd5b85516001600160401b0380821115620001ed575f80fd5b620001fb89838a0162000114565b9650602088015191508082111562000211575f80fd5b6200021f89838a0162000114565b604089015160608a0151919750955091506001600160a01b038216821462000245575f80fd5b6080880151919350808211156200025a575f80fd5b50620002698882890162000114565b9150509295509295909350565b600181811c908216806200028b57607f821691505b602082108103620002aa57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f821115620002fb57805f5260205f20601f840160051c81016020851015620002d75750805b601f840160051c820191505b81811015620002f8575f8155600101620002e3565b50505b505050565b81516001600160401b038111156200031c576200031c62000100565b62000334816200032d845462000276565b84620002b0565b602080601f8311600181146200036a575f8415620003525750858301515b5f19600386901b1c1916600185901b178555620003c4565b5f85815260208120601f198616915b828110156200039a5788860151825594840194600190910190840162000379565b5085821015620003b857878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b608051610c00620003ec5f395f818161025801526104270152610c005ff3fe608060405234801561000f575f80fd5b506004361061011c575f3560e01c8063715018a6116100a9578063af35c6c71161006e578063af35c6c71461023e578063bef97c8714610246578063d5abeb0114610253578063dd62ed3e1461027a578063f2fde38b146102b2575f80fd5b8063715018a6146101ed57806379cc6790146101f55780638da5cb5b1461020857806395d89b4114610223578063a9059cbb1461022b575f80fd5b806323b872dd116100ef57806323b872dd1461017b578063313ce5671461018e57806340c10f191461019d57806342966c68146101b257806370a08231146101c5575f80fd5b806303ee438c1461012057806306fdde031461013e578063095ea7b31461014657806318160ddd14610169575b5f80fd5b6101286102c5565b6040516101359190610a43565b60405180910390f35b610128610351565b610159610154366004610aaa565b6103e1565b6040519015158152602001610135565b6002545b604051908152602001610135565b610159610189366004610ad2565b6103fa565b60405160128152602001610135565b6101b06101ab366004610aaa565b61041d565b005b6101b06101c0366004610b0b565b6104b0565b61016d6101d3366004610b22565b6001600160a01b03165f9081526020819052604090205490565b6101b06104c5565b6101b0610203366004610aaa565b6104d8565b6005546040516001600160a01b039091168152602001610135565b610128610530565b610159610239366004610aaa565b61053f565b6101b061054c565b6007546101599060ff1681565b61016d7f000000000000000000000000000000000000000000000000000000000000000081565b61016d610288366004610b42565b6001600160a01b039182165f90815260016020908152604080832093909416825291909152205490565b6101b06102c0366004610b22565b6105d0565b600680546102d290610b73565b80601f01602080910402602001604051908101604052809291908181526020018280546102fe90610b73565b80156103495780601f1061032057610100808354040283529160200191610349565b820191905f5260205f20905b81548152906001019060200180831161032c57829003601f168201915b505050505081565b60606003805461036090610b73565b80601f016020809104026020016040519081016040528092919081815260200182805461038c90610b73565b80156103d75780601f106103ae576101008083540402835291602001916103d7565b820191905f5260205f20905b8154815290600101906020018083116103ba57829003601f168201915b5050505050905090565b5f336103ee81858561060a565b60019150505b92915050565b5f3361040785828561061c565b610412858585610698565b506001949350505050565b6104256106f5565b7f00000000000000000000000000000000000000000000000000000000000000008161045060025490565b61045a9190610bab565b11156104a25760405162461bcd60e51b815260206004820152601260248201527145786365656473206d617820737570706c7960701b60448201526064015b60405180910390fd5b6104ac8282610722565b5050565b6104b86106f5565b6104c23382610756565b50565b6104cd6106f5565b6104d65f61078a565b565b6104e06106f5565b60075460ff16156105265760405162461bcd60e51b815260206004820152601060248201526f151c98591a5b99c81b5a59dc985d195960821b6044820152606401610499565b6104ac8282610756565b60606004805461036090610b73565b5f336103ee818585610698565b6105546106f5565b60075460ff16156105995760405162461bcd60e51b815260206004820152600f60248201526e105b1c9958591e48195b98589b1959608a1b6044820152606401610499565b6007805460ff191660011790556040517feadb24812ab3c9a55c774958184293ebdb6c7f6a2dbab11f397d80c86feb65d3905f90a1565b6105d86106f5565b6001600160a01b03811661060157604051631e4fbdf760e01b81525f6004820152602401610499565b6104c28161078a565b61061783838360016107db565b505050565b6001600160a01b038381165f908152600160209081526040808320938616835292905220545f19811015610692578181101561068457604051637dc7a0d960e11b81526001600160a01b03841660048201526024810182905260448101839052606401610499565b61069284848484035f6107db565b50505050565b6001600160a01b0383166106c157604051634b637e8f60e11b81525f6004820152602401610499565b6001600160a01b0382166106ea5760405163ec442f0560e01b81525f6004820152602401610499565b6106178383836108ad565b6005546001600160a01b031633146104d65760405163118cdaa760e01b8152336004820152602401610499565b6001600160a01b03821661074b5760405163ec442f0560e01b81525f6004820152602401610499565b6104ac5f83836108ad565b6001600160a01b03821661077f57604051634b637e8f60e11b81525f6004820152602401610499565b6104ac825f836108ad565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b6001600160a01b0384166108045760405163e602df0560e01b81525f6004820152602401610499565b6001600160a01b03831661082d57604051634a1406b160e11b81525f6004820152602401610499565b6001600160a01b038085165f908152600160209081526040808320938716835292905220829055801561069257826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161089f91815260200190565b60405180910390a350505050565b6001600160a01b038316158015906108cd57506001600160a01b03821615155b156109175760075460ff166109175760405162461bcd60e51b815260206004820152601060248201526f151c985b9cd9995c9cc81b1bd8dad95960821b6044820152606401610499565b6106178383836001600160a01b038316610947578060025f82825461093c9190610bab565b909155506109b79050565b6001600160a01b0383165f90815260208190526040902054818110156109995760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610499565b6001600160a01b0384165f9081526020819052604090209082900390555b6001600160a01b0382166109d3576002805482900390556109f1565b6001600160a01b0382165f9081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610a3691815260200190565b60405180910390a3505050565b5f602080835283518060208501525f5b81811015610a6f57858101830151858201604001528201610a53565b505f604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610aa5575f80fd5b919050565b5f8060408385031215610abb575f80fd5b610ac483610a8f565b946020939093013593505050565b5f805f60608486031215610ae4575f80fd5b610aed84610a8f565b9250610afb60208501610a8f565b9150604084013590509250925092565b5f60208284031215610b1b575f80fd5b5035919050565b5f60208284031215610b32575f80fd5b610b3b82610a8f565b9392505050565b5f8060408385031215610b53575f80fd5b610b5c83610a8f565b9150610b6a60208401610a8f565b90509250929050565b600181811c90821680610b8757607f821691505b602082108103610ba557634e487b7160e01b5f52602260045260245ffd5b50919050565b808201808211156103f457634e487b7160e01b5f52601160045260245ffdfea264697066735822122090ddc87471e0ddf973a593ecb42949413d62fd9a4d0b7b7eed4e63589596f38964736f6c634300081800339b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00a2646970667358221220f9460c4460567769b6f154c10f9442125aef716d0683a090e10d2f6a4f49461b64736f6c63430008180033",
    "sourceMap": "505:39529:20:-:0;;;9354:551;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2365:1:13;1505:66;2539;9519:10:20;;1269:95:0;;1322:31;;-1:-1:-1;;;1322:31:0;;1350:1;1322:31;;;933:51:23;906:18;;1322:31:0;;;;;;;;1269:95;1373:32;1392:12;1373:18;:32::i;:::-;-1:-1:-1;;;;;;9549:27:20;::::1;9541:58;;;::::0;-1:-1:-1;;;9541:58:20;;1197:2:23;9541:58:20::1;::::0;::::1;1179:21:23::0;1236:2;1216:18;;;1209:30;-1:-1:-1;;;1255:18:23;;;1248:48;1313:18;;9541:58:20::1;995:342:23::0;9541:58:20::1;-1:-1:-1::0;;;;;9617:39:20;::::1;9609:73;;;::::0;-1:-1:-1;;;9609:73:20;;1544:2:23;9609:73:20::1;::::0;::::1;1526:21:23::0;1583:2;1563:18;;;1556:30;1622:23;1602:18;;;1595:51;1663:18;;9609:73:20::1;1342:345:23::0;9609:73:20::1;-1:-1:-1::0;;;;;9692:34:20;;::::1;;::::0;9736:12;::::1;;::::0;3374:4:::1;9766:29:::0;::::1;;9758:54;;;::::0;-1:-1:-1;;;9758:54:20;;1894:2:23;9758:54:20::1;::::0;::::1;1876:21:23::0;1933:2;1913:18;;;1906:30;-1:-1:-1;;;1952:18:23;;;1945:42;2004:18;;9758:54:20::1;1692:336:23::0;9758:54:20::1;-1:-1:-1::0;;9822:20:20::1;:36:::0;;-1:-1:-1;;;;;;9822:36:20::1;-1:-1:-1::0;;;;;9822:36:20;;;::::1;::::0;;;::::1;::::0;;;9868:13:::1;:30:::0;505:39529;;2011:153:1;2100:13;2093:20;;-1:-1:-1;;;;;;2093:20:1;;;2123:34;2148:8;2123:24;:34::i;:::-;2011:153;:::o;2912:187:0:-;2985:16;3004:6;;-1:-1:-1;;;;;3020:17:0;;;-1:-1:-1;;;;;;3020:17:0;;;;;;3052:40;;3004:6;;;;;;;3052:40;;2985:16;3052:40;2975:124;2912:187;:::o;14:131:23:-;-1:-1:-1;;;;;89:31:23;;79:42;;69:70;;135:1;132;125:12;150:632;298:6;306;314;322;375:3;363:9;354:7;350:23;346:33;343:53;;;392:1;389;382:12;343:53;424:9;418:16;443:31;468:5;443:31;:::i;:::-;538:2;523:18;;517:25;587:2;572:18;;566:25;493:5;;-1:-1:-1;517:25:23;-1:-1:-1;600:33:23;566:25;600:33;:::i;:::-;704:2;689:18;;683:25;652:7;;-1:-1:-1;717:33:23;683:25;717:33;:::i;:::-;150:632;;;;-1:-1:-1;150:632:23;;-1:-1:-1;;150:632:23:o;1692:336::-;505:39529:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405260043610620002c6575f3560e01c8063715018a61162000172578063bcae25a411620000ce578063e30c39781162000082578063e30c39781462000a9a578063e521cb921462000ab9578063efc20dad1462000add578063f2fde38b1462000b17578063fa461e331462000b3b578063fdfae4861462000b5f575f80fd5b8063bcae25a414620009b3578063d4570c1c14620009ca578063d55be8c61462000a04578063d9f1aed91462000a1b578063dcf844a71462000a3f578063dd1b9c4a1462000a6e575f80fd5b80638663efa411620001265780638663efa414620008715780638da5cb5b1462000905578063a4ce25a71462000923578063ac8139161462000947578063b17acdcd146200096b578063b8dc491b146200098f575f80fd5b8063715018a614620007a857806375f0c2f014620007bf578063791b98bc14620007d657806379ba5097146200080b5780638396602114620008225780638456cb59146200085a575f80fd5b80634373a28611620002225780635c975abb11620001d65780635c975abb14620006d75780635e0a4acd14620006f757806364df049e146200071b578063683931b4146200073c57806369ce6d471462000760578063709ef2311462000784575f80fd5b80634373a2861462000535578063454b0608146200055957806348f719e5146200057d57806354147e9e14620005af578063571a26a014620005de5780635c471ad514620006a8575f80fd5b806328336098116200027a57806328336098146200045a5780632ad71573146200047e5780633edb917d14620004955780633ef068d214620004ac5780633f4ba83a14620004d05780633fc8cef314620004e7575f80fd5b806306d49f92146200034757806309e06259146200038e5780630fda366d14620003b2578063121a257f14620003e55780631ae9898f146200041f5780631e83409a1462000436575f80fd5b366200034357336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614620003415760405162461bcd60e51b81526020600482015260146024820152730aae6ca40c4eaf2a8ded6cadce6aed2e8d08aa8960631b60448201526064015b60405180910390fd5b005b5f80fd5b34801562000353575f80fd5b5062000379620003653660046200451d565b600b6020525f908152604090205460ff1681565b60405190151581526020015b60405180910390f35b3480156200039a575f80fd5b5062000341620003ac3660046200453b565b62000b76565b348015620003be575f80fd5b50620003d6620003d03660046200453b565b62000c06565b60405190815260200162000385565b348015620003f1575f80fd5b50620004096200040336600462004553565b62000c37565b6040805192835260208301919091520162000385565b620003416200043036600462004553565b62000c93565b34801562000442575f80fd5b50620003d6620004543660046200451d565b62000cd2565b34801562000466575f80fd5b50620003416200047836600462004582565b62000dfe565b3480156200048a575f80fd5b50620003d660025481565b348015620004a1575f80fd5b50620003d6600c5481565b348015620004b8575f80fd5b5062000341620004ca366004620045be565b62000eb3565b348015620004dc575f80fd5b50620003416200106e565b348015620004f3575f80fd5b506200051c7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200162000385565b34801562000541575f80fd5b5062000341620005533660046200453b565b62001084565b34801562000565575f80fd5b5062000341620005773660046200453b565b62001112565b34801562000589575f80fd5b50620003796200059b3660046200453b565b60056020525f908152604090205460ff1681565b348015620005bb575f80fd5b50620003d6620005cd3660046200453b565b600d6020525f908152604090205481565b348015620005ea575f80fd5b5062000696620005fc3660046200453b565b600360208181525f92835260409283902083516101208101855281546001600160a01b03908116825260018301548116938201939093526002820154948101949094529182015460608401526004820154608084015260058201541660a0830152600681015460c0830152600781015460e083015260088101546101008301526009810154600a820154600b9092015460ff909116919084565b6040516200038594939291906200460a565b348015620006b4575f80fd5b50620003d6620006c63660046200451d565b60086020525f908152604090205481565b348015620006e3575f80fd5b50600154600160a01b900460ff1662000379565b34801562000703575f80fd5b506200034162000715366004620046b7565b620016f0565b34801562000727575f80fd5b506006546200051c906001600160a01b031681565b34801562000748575f80fd5b50620003d66200075a366004620046e1565b62001826565b3480156200076c575f80fd5b50620003d66200077e3660046200451d565b6200184c565b34801562000790575f80fd5b5062000341620007a2366004620046b7565b6200194c565b348015620007b4575f80fd5b506200034162001980565b348015620007cb575f80fd5b50620003d66107d081565b348015620007e2575f80fd5b506200051c7f000000000000000000000000000000000000000000000000000000000000000081565b34801562000817575f80fd5b506200034162001995565b3480156200082e575f80fd5b506200051c620008403660046200453b565b600e6020525f90815260409020546001600160a01b031681565b34801562000866575f80fd5b5062000341620019da565b3480156200087d575f80fd5b50620008cd6200088f3660046200451d565b60106020525f90815260409020805460018201546002830154600384015460048501546005909501546001600160a01b039094169492939192909186565b604080516001600160a01b0390971687526020870195909552938501929092526060840152608083015260a082015260c00162000385565b34801562000911575f80fd5b505f546001600160a01b03166200051c565b3480156200092f575f80fd5b506200034162000941366004620046b7565b620019ee565b34801562000953575f80fd5b50620003d66200096536600462004764565b62001a28565b34801562000977575f80fd5b5062000409620009893660046200453b565b62001bed565b3480156200099b575f80fd5b5062000341620009ad36600462004816565b62001ea3565b348015620009bf575f80fd5b50620003d660075481565b348015620009d6575f80fd5b50620003d6620009e836600462004816565b600a60209081525f928352604080842090915290825290205481565b34801562000a10575f80fd5b50620003d66103e881565b34801562000a27575f80fd5b506200034162000a393660046200453b565b62002058565b34801562000a4b575f80fd5b50620003d662000a5d3660046200451d565b60096020525f908152604090205481565b34801562000a7a575f80fd5b5062000a8561271081565b60405162ffffff909116815260200162000385565b34801562000aa6575f80fd5b506001546001600160a01b03166200051c565b34801562000ac5575f80fd5b506200034162000ad73660046200451d565b620022ce565b34801562000ae9575f80fd5b50620003d662000afb36600462004847565b600460209081525f928352604080842090915290825290205481565b34801562000b23575f80fd5b506200034162000b353660046200451d565b62002380565b34801562000b47575f80fd5b506200034162000b593660046200486d565b620023f3565b34801562000b6b575f80fd5b50620003d661138881565b62000b80620024b8565b61138881111562000bc55760405162461bcd60e51b815260206004820152600e60248201526d0a6d0c2e4ca40e8dede40d0d2ced60931b604482015260640162000338565b600c5460408051918252602082018390527fafd7016dba95bc0c303b0838ae8e4829497ed18cc6a0ed00eec5fc7c50148e17910160405180910390a1600c55565b5f8181526003602081905260408220600b810154600282015492820154919262000c3092620024e6565b9392505050565b5f8281526003602081905260408220600b810154600282015492820154849362000c65929187919062002510565b60068201549093506127109062000c7d9085620048d4565b62000c89919062004902565b9150509250929050565b62000c9d620025a9565b62000ca7620025c7565b62000cb68282346001620025f3565b62000cce60015f8051602062005eaf83398151915255565b5050565b5f62000cdd620025a9565b506001600160a01b0381165f908152600a602090815260408083203384529091529020548062000d435760405162461bcd60e51b815260206004820152601060248201526f4e6f7468696e6720746f20636c61696d60801b604482015260640162000338565b6001600160a01b0382165f818152600a60209081526040808320338452825280832083905592825260089052908120805483929062000d8490849062004918565b9091555062000da090506001600160a01b038316338362002a5e565b60405181815233906001600160a01b038416907ff7a40077ff7a04c7e61f6f26fb13774259ddf1b6bce9ecf26a8276cdd3992683906020015b60405180910390a362000df960015f8051602062005eaf83398151915255565b919050565b62000e08620024b8565b6001600160a01b03821662000e555760405162461bcd60e51b81526020600482015260126024820152712d32b937903830bcb6b2b73a103a37b5b2b760711b604482015260640162000338565b6001600160a01b0382165f818152600b6020908152604091829020805460ff191685151590811790915591519182527f359d3f0085554124a1c9fc8f53602b98df473a1d955d73500399fb2ef8b8cf18910160405180910390a25050565b62000ebd620024b8565b5f62000ecd60208301836200451d565b6001600160a01b03160362000f1a5760405162461bcd60e51b81526020600482015260126024820152712d32b937903830bcb6b2b73a103a37b5b2b760711b604482015260640162000338565b600b5f62000f2c60208401846200451d565b6001600160a01b0316815260208101919091526040015f205460ff1662000f925760405162461bcd60e51b815260206004820152601960248201527814185e5b595b9d081d1bdad95b881b9bdd08185b1b1bddd959603a1b604482015260640162000338565b62000fb581602001358260400135836060013584608001358560a0013562002a97565b8060105f62000fc860208401846200451d565b6001600160a01b0316815260208101919091526040015f2062000fec82826200492e565b507f29f62c75478dac4ea9396c9b5e58b4e29d6f7812c6eb05ceaf5d0c776db6b57690506200101f60208301836200451d565b604080516001600160a01b039092168252602080850135908301528084013590820152606080840135908201526080808401359082015260a0808401359082015260c00160405180910390a150565b62001078620024b8565b6200108262002cf8565b565b6200108e620024b8565b6103e8811115620010d15760405162461bcd60e51b815260206004820152600c60248201526b08ccaca40e8dede40d0d2ced60a31b604482015260640162000338565b60075460408051918252602082018390527f3062378541f1b58e0547bfb13e7d7585153e442e477e263c6e63d4775b3072a6910160405180910390a1600755565b6200111c620025a9565b5f8181526003602052604090206002600982015460ff166003811115620011475762001147620045d5565b146200118e5760405162461bcd60e51b8152602060048201526015602482015274105d58dd1a5bdb881b9bdd0818dbdb5c1b195d1959605a1b604482015260640162000338565b5f6200119a8262002d4f565b90505f620011ba83600b0154845f0160020154855f0160030154620024e6565b90505f620011dd83620011d6670de0b6b3a764000080620048d4565b8462002d77565b6040805160c0810182525f606082018190526080820181905260a0820181905287546001600160a01b0390811680845260018a015490911660208085018290529181118486015260098a01805460ff19166003179055825260089052918220805493945090928692906200125390849062004918565b909155505060208101516040516370a0823160e01b815230600482015285916001600160a01b0316906370a0823190602401602060405180830381865afa158015620012a1573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620012c791906200498d565b620012d3919062004918565b816080018181525050805f01516001600160a01b031663af35c6c76040518163ffffffff1660e01b81526004015f604051808303815f87803b15801562001318575f80fd5b505af11580156200132b573d5f803e3d5ffd5b505050505f841180156200133e57505f82115b15620014a85780516040516340c10f1960e01b8152306004820152602481018490526001600160a01b03909116906340c10f19906044015f604051808303815f87803b1580156200138d575f80fd5b505af1158015620013a0573d5f803e3d5ffd5b50505050620013b483826040015162002e31565b6001600160a01b031660608201525f80620013cf8362002f42565b60608501516040516309f56ab160e11b81526001600160a01b0380851660048301528084166024830152612710604483015291821660648201529294509092507f000000000000000000000000000000000000000000000000000000000000000016906313ead562906084016020604051808303815f875af115801562001458573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906200147e9190620049a5565b6001600160a01b031660a08401526200149983858862002f6c565b620014a5888462003208565b50505b80516040516370a0823160e01b81523060048201525f916001600160a01b0316906370a0823190602401602060405180830381865afa158015620014ee573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906200151491906200498d565b9050801562001578578151604051630852cd8d60e31b8152600481018390526001600160a01b03909116906342966c68906024015f604051808303815f87803b15801562001560575f80fd5b505af115801562001573573d5f803e3d5ffd5b505050505b608082015160208301516040516370a0823160e01b81523060048201525f92916001600160a01b0316906370a0823190602401602060405180830381865afa158015620015c7573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620015ed91906200498d565b620015f9919062004918565b905080156200167b576020808401516001600160a01b039081165f908152600a8352604080822060058c01549093168252919092528120805483929062001642908490620049c3565b90915550506020808401516001600160a01b03165f908152600890915260408120805483929062001675908490620049c3565b90915550505b825f01516001600160a01b031663715018a66040518163ffffffff1660e01b81526004015f604051808303815f87803b158015620016b7575f80fd5b505af1158015620016ca573d5f803e3d5ffd5b5050505050505050505050620016ed60015f8051602062005eaf83398151915255565b50565b620016fa620025a9565b5f80620017098585856200362f565b915091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b031614620017845760405162461bcd60e51b815260206004820152601160248201527009cdee840e0e4d2c6cac840d2dc408aa89607b1b604482015260640162000338565b604051632e1a7d4d60e01b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690632e1a7d4d906024015f604051808303815f87803b158015620017e4575f80fd5b505af1158015620017f7573d5f803e3d5ffd5b5050505062001807338262003972565b50506200182160015f8051602062005eaf83398151915255565b505050565b5f62001831620025c7565b62001846620018408362004aab565b62003a17565b92915050565b5f62001857620025a9565b506001600160a01b0381165f9081526009602052604090205480620018b25760405162461bcd60e51b815260206004820152601060248201526f4e6f7468696e6720746f20636c61696d60801b604482015260640162000338565b6001600160a01b0382165f908152600960209081526040808320839055600890915281208054839290620018e890849062004918565b909155505060065462001909906001600160a01b0384811691168362002a5e565b6006546040518281526001600160a01b03918216918416907f4f8a50ec1fe3d316970fdadd1f94e0b822f92d31e2bac3c9dc2c6c287de071079060200162000dd9565b62001956620025a9565b5f80620019658585856200362f565b9092509050620018076001600160a01b038316338362002a5e565b6200198a620024b8565b620010825f62003c03565b60015433906001600160a01b03168114620019cf5760405163118cdaa760e01b81526001600160a01b038216600482015260240162000338565b620016ed8162003c03565b620019e4620024b8565b6200108262003c1e565b620019f8620025a9565b62001a02620025c7565b62001a108383835f620025f3565b6200182160015f8051602062005eaf83398151915255565b5f62001a33620025c7565b6001600160a01b038083165f90815260106020908152604091829020825160c0810184528154909416808552600182015492850192909252600281015492840192909252600382015460608401526004820154608084015260059091015460a083015262001ad75760405162461bcd60e51b815260206004820152601060248201526f139bc81b185d5b98da081c1c995cd95d60821b604482015260640162000338565b604080516101406020601f8c01819004028201810190925261012081018a815262001be0928291908d908d90819085018382808284375f92019190915250505090825250604080516020601f8c018190048102820181019092528a815291810191908b908b90819084018382808284375f92019190915250505090825250604080516020601f8a01819004810282018101909252888152918101919089908990819084018382808284375f920191909152505050908252506020848101519082015283516001600160a01b031660408083019190915284015160608083019190915284015160808083019190915284015160a08083019190915284015160c09091015262003a17565b9998505050505050505050565b5f8062001bf9620025a9565b5f83815260036020819052604090912090600982015460ff16600381111562001c265762001c26620045d5565b14801562001c4057505f848152600d602052604090205415155b62001c7c5760405162461bcd60e51b815260206004820152600b60248201526a2737903837b9b4ba34b7b760a91b604482015260640162000338565b604080516080810182525f868152600d6020908152838220548352309083019081526001600160801b0383850181815260608501828152955163fc6f786560e01b81529451600486015291516001600160a01b039081166024860152915181166044850152935190931660648301529182917f00000000000000000000000000000000000000000000000000000000000000009091169063fc6f78659060840160408051808303815f875af115801562001d38573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062001d5e919062004b8f565b600185015485549294509092506001600160a01b039081169116108062001d8757818362001d8a565b82825b600886015491975095505f906127109062001da69089620048d4565b62001db2919062004902565b90505f612710865f01600801548862001dcc9190620048d4565b62001dd8919062004902565b8654600588015491925062001dfc916001600160a01b039182169116848b62003c64565b6001860154600587015462001e20916001600160a01b039081169116838a62003c64565b887f8dcde09e464f5c324d7cbf62dbc0c647b8ad9242592ae364153f2549f4898d0462001e4e848b62004918565b62001e5a848b62004918565b60408051928352602083019190915281018590526060810184905260800160405180910390a250505050505062001e9e60015f8051602062005eaf83398151915255565b915091565b62001ead620025a9565b62001eb7620024b8565b6001600160a01b03811662001f005760405162461bcd60e51b815260206004820152600e60248201526d16995c9bc81c9958da5c1a595b9d60921b604482015260640162000338565b6040516370a0823160e01b81523060048201525f906001600160a01b038416906370a0823190602401602060405180830381865afa15801562001f45573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062001f6b91906200498d565b6001600160a01b0384165f9081526008602052604090205490915080821162001fca5760405162461bcd60e51b815260206004820152601060248201526f04e6f7468696e6720746f2073776565760841b604482015260640162000338565b5f62001fd7828462004918565b905062001fef6001600160a01b038616858362002a5e565b836001600160a01b0316856001600160a01b03167f7b09c29f9106defeccc9ac3b823f3aad0b470d120e5df7aed033b5c43a4bf718836040516200203591815260200190565b60405180910390a350505062000cce60015f8051602062005eaf83398151915255565b62002062620025a9565b5f81815260036020526040902060058101546001600160a01b03163314620020bb5760405162461bcd60e51b815260206004820152600b60248201526a2737ba1031b932b0ba37b960a91b604482015260640162000338565b6002600982015460ff166003811115620020d957620020d9620045d5565b14806200210157506003600982015460ff166003811115620020ff57620020ff620045d5565b145b620021475760405162461bcd60e51b8152602060048201526015602482015274105d58dd1a5bdb881b9bdd0818dbdb5c1b195d1959605a1b604482015260640162000338565b5f8281526005602052604090205460ff16156200219b5760405162461bcd60e51b815260206004820152601160248201527020b63932b0b23c903bb4ba34323930bbb760791b604482015260640162000338565b5f620021a78262002d4f565b82600a0154620021b8919062004918565b90505f8111620022015760405162461bcd60e51b81526020600482015260136024820152724e6f7468696e6720746f20776974686472617760681b604482015260640162000338565b5f838152600560209081526040808320805460ff191660019081179091558501546001600160a01b031683526008909152812080548392906200224690849062004918565b9091555050600582015460018301546200226e916001600160a01b0391821691168362002a5e565b60058201546040518281526001600160a01b039091169084907f579e0e2d0cfdb23711bb6034ac9f2ba41e8965a8e24589d1c3cf5604868661fc9060200160405180910390a35050620016ed60015f8051602062005eaf83398151915255565b620022d8620024b8565b6001600160a01b038116620023255760405162461bcd60e51b815260206004820152601260248201527116995c9bc8199959481c9958da5c1a595b9d60721b604482015260640162000338565b6006546040516001600160a01b038084169216907fd3890fc76afcfc31cba1dcf2c27b50e2541e4d75039c981855b5b5e03682aea0905f90a3600680546001600160a01b0319166001600160a01b0392909216919091179055565b6200238a620024b8565b600180546001600160a01b0383166001600160a01b03199091168117909155620023bb5f546001600160a01b031690565b6001600160a01b03167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b600f546001600160a01b031615801590620024185750600f546001600160a01b031633145b6200245e5760405162461bcd60e51b8152602060048201526015602482015274556e617574686f72697a65642063616c6c6261636b60581b604482015260640162000338565b5f806200246e8385018562004816565b915091505f8613156200249157620024916001600160a01b038316338862002a5e565b5f851315620024b057620024b06001600160a01b038216338762002a5e565b505050505050565b5f546001600160a01b03163314620010825760405163118cdaa760e01b815233600482015260240162000338565b5f620024fc8285670de0b6b3a764000062002d77565b620025089084620049c3565b949350505050565b5f806200253484866200252c670de0b6b3a764000080620048d4565b600162003d10565b90505f6200259084876200254a8a6002620048d4565b620025569190620049c3565b620025629089620048d4565b670de0b6b3a7640000620025778180620048d4565b62002584906002620048d4565b6200252c9190620048d4565b90506200259e8183620049c3565b979650505050505050565b620025b362003d5d565b60025f8051602062005eaf83398151915255565b600154600160a01b900460ff1615620010825760405163d93c066560e01b815260040160405180910390fd5b5f8481526003602052604090206001600982015460ff1660038111156200261e576200261e620045d5565b14620026625760405162461bcd60e51b815260206004820152601260248201527141756374696f6e206e6f742061637469766560701b604482015260640162000338565b5f8411620026a15760405162461bcd60e51b815260206004820152600b60248201526a16995c9bc8185b5bdd5b9d60aa1b604482015260640162000338565b811580620026df575060018101547f00000000000000000000000000000000000000000000000000000000000000006001600160a01b039081169116145b620027215760405162461bcd60e51b815260206004820152601160248201527009cdee840e0e4d2c6cac840d2dc408aa89607b1b604482015260640162000338565b5f806200272f838762003d8e565b600686015492985090935091505f90612710906200274e9085620048d4565b6200275a919062004902565b90505f620027698285620049c3565b905086811115620027b15760405162461bcd60e51b815260206004820152601160248201527014db1a5c1c1859d948195e18d959591959607a1b604482015260640162000338565b8385600a015f828254620027c69190620049c3565b925050819055508785600b015f828254620027e29190620049c3565b90915550505f898152600460209081526040808320338452909152812080548a929062002811908490620049c3565b909155505060018501546001600160a01b03165f908152600860205260408120805483929062002843908490620049c3565b909155505060018501546001600160a01b03165f908152600960205260408120805484929062002875908490620049c3565b90915550508215620028915760098501805460ff191660021790555b851562002929577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004015f604051808303818588803b158015620028f2575f80fd5b505af115801562002905573d5f803e3d5ffd5b5050505050620029233382896200291d919062004918565b62003972565b62002943565b600185015462002943906001600160a01b03168262003e50565b84546040516340c10f1960e01b8152336004820152602481018a90526001600160a01b03909116906340c10f19906044015f604051808303815f87803b1580156200298c575f80fd5b505af11580156200299f573d5f803e3d5ffd5b50505050600a850154600b860154604080518b8152602081018890529081018590526060810192909252608082015233908a907fc938e879cd47aa84d5893377578d6c211ccd96f382228c42c1bb6a8eaa71a0849060a00160405180910390a3821562002a5357887fc7502df20ccf846bf5005f01564bb502b56dcec19f0e2d0575c4369cc5e3b53b86600a015487600b015460405162002a4a929190918252602082015260400190565b60405180910390a25b505050505050505050565b62002a6d838383600162003f9c565b6200182157604051635274afe760e01b81526001600160a01b038416600482015260240162000338565b5f841162002ada5760405162461bcd60e51b815260206004820152600f60248201526e5a65726f206261736520707269636560881b604482015260640162000338565b5f821162002b1c5760405162461bcd60e51b815260206004820152600e60248201526d5a65726f206d617820726169736560901b604482015260640162000338565b6107d0811015801562002b3157506127108111155b62002b7f5760405162461bcd60e51b815260206004820152601760248201527f496e76616c6964206c6971756964697479207368617265000000000000000000604482015260640162000338565b6ec097ce7bc90715b34b9f1000000000851115801562002bb25750722cd76fe086b93ce2f768a00b22a000000000008411155b801562002bd25750722cd76fe086b93ce2f768a00b22a000000000008311155b801562002bf05750701d6329f1c35ca4bfabb9f56100000000008211155b62002c305760405162461bcd60e51b815260206004820152600f60248201526e4375727665206f766572666c6f777360881b604482015260640162000338565b5f62002c405f8487878a62004000565b90505f62002c50828787620024e6565b90505f62002c8f61271062002c668688620048d4565b62002c72919062004902565b62002c86670de0b6b3a764000080620048d4565b84600162003d10565b90508762002c9e8285620049c3565b111562002cee5760405162461bcd60e51b815260206004820152601e60248201527f537570706c7920746f6f20736d616c6c20666f72206c69717569646974790000604482015260640162000338565b5050505050505050565b62002d02620040a7565b6001805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b5f612710825f016007015483600a015462002d6b9190620048d4565b62001846919062004902565b5f805f62002d868686620040d2565b91509150815f0362002daf5783818162002da45762002da4620048ee565b049250505062000c30565b81841162002dc95762002dc96003851502601118620040ee565b5f848688095f868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010185841190960395909502919093039390930492909217029150509392505050565b5f805f8362002e555762002e4e670de0b6b3a764000080620048d4565b8562002e6a565b8462002e6a670de0b6b3a764000080620048d4565b90925090505f600160401b62002e81838562004902565b1062002eac57604062002ea462002e9e85600160401b8662002d77565b620040ff565b901b62002ec1565b62002ec162002e9e84600160c01b8562002d77565b90506401000276a38111801562002eeb575073fffd8963efd1fc6a506488495d951d5263988d2681105b62002f395760405162461bcd60e51b815260206004820152601b60248201527f5072696365206f75747369646520556e69737761702072616e67650000000000604482015260640162000338565b95945050505050565b5f80826040015162002f5b576020830151835162002f63565b825160208401515b91509150915091565b5f8360a0015190505f816001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa15801562002fb2573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062002fd8919062004bc4565b505050505050905084606001516001600160a01b0316816001600160a01b03160362003005575050505050565b606085015160408601516001600160a01b039182169183169190911190151581145f8162003034578562003041565b6200304160028862004902565b9050805f0362003055575050505050505050565b5f80620030628a62002f42565b600f80546001600160a01b0319166001600160a01b038b811691821790925560608e8101516040805187861660208201529486168582015280518086038201815292850190819052630251596160e31b90529496509294509263128acb0892620030d59230928b928a9260640162004c9e565b60408051808303815f875af1158015620030f1573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062003117919062004b8f565b5050600f80546001600160a01b031916905583620031fc57866001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa1580156200316c573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062003192919062004bc4565b5050505060608d015192985050506001600160a01b03808816911614620031fc5760405162461bcd60e51b815260206004820152601860248201527f506f6f6c207072696365206e6f7420636f727265637465640000000000000000604482015260640162000338565b50505050505050505050565b80516040516370a0823160e01b81523060048201525f916001600160a01b0316906370a0823190602401602060405180830381865afa1580156200324e573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906200327491906200498d565b608083015160208401516040516370a0823160e01b81523060048201529293505f926001600160a01b03909116906370a0823190602401602060405180830381865afa158015620032c7573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620032ed91906200498d565b620032f9919062004918565b90505f80620033088562002f42565b8651919350915062003345906001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000008662004270565b602085015162003380906001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000008562004270565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166388316456604051806101600160405280856001600160a01b03168152602001846001600160a01b0316815260200161271062ffffff168152602001620d899f1960020b8152602001620d89a060020b8152602001886040015162003410578662003412565b875b815260200188604001516200342857876200342a565b865b81526020015f81526020015f8152602001306001600160a01b03168152602001428152506040518263ffffffff1660e01b81526004016200346c919062004cda565b6080604051808303815f875af1925050508015620034a9575060408051601f3d908101601f19168201909252620034a69181019062004da3565b60015b620034fd57604080515f808252602082018190528183018190526060820152905187917f0d9e69eea1226c3cc6b24c170c2b55d6c198272e003451d42e20a842c1d9b914919081900360800190a2620035bc565b5f8a8152600d6020908152604080832087905560a08c018051600e9093529281902080546001600160a01b0319166001600160a01b03909316929092179091559051908a01518b917f0d9e69eea1226c3cc6b24c170c2b55d6c198272e003451d42e20a842c1d9b91491879062003575578462003577565b855b8d604001516200358857866200358a565b855b604080516001600160a01b039095168552602085019390935291830152606082015260800160405180910390a2505050505b8451620035f4906001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000005f62004270565b6020850151620024b0906001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000005f62004270565b5f83815260036020526040812081906001600982015460ff1660038111156200365c576200365c620045d5565b14620036a05760405162461bcd60e51b815260206004820152601260248201527141756374696f6e206e6f742061637469766560701b604482015260640162000338565b5f8511620036df5760405162461bcd60e51b815260206004820152600b60248201526a16995c9bc8185b5bdd5b9d60aa1b604482015260640162000338565b5f8681526004602090815260408083203384529091529020548511156200373b5760405162461bcd60e51b815260206004820152600f60248201526e457863656564732062616c616e636560881b604482015260640162000338565b5f6200375a82600b015487845f0160020154855f0160030154620042cb565b90505f612710835f016006015483620037749190620048d4565b62003780919062004902565b90506200378e818362004918565b935085841015620037d65760405162461bcd60e51b815260206004820152601160248201527014db1a5c1c1859d948195e18d959591959607a1b604482015260640162000338565b6001830154600a840180546001600160a01b03909216965083915f90620037ff90849062004918565b925050819055508683600b015f8282546200381b919062004918565b90915550505f888152600460209081526040808320338452909152812080548992906200384a90849062004918565b90915550506001600160a01b0385165f90815260086020526040812080548692906200387890849062004918565b90915550506001600160a01b0385165f9081526009602052604081208054839290620038a6908490620049c3565b9091555050825460405163079cc67960e41b8152336004820152602481018990526001600160a01b03909116906379cc6790906044015f604051808303815f87803b158015620038f4575f80fd5b505af115801562003907573d5f803e3d5ffd5b50505050600a830154600b840154604080518a81526020810186905290810184905260608101929092526080820152339089907fd7fd93110c86e222ad62b2a786fdc3afd88c4c21f9092614ca01365ba432073c9060a00160405180910390a3505050935093915050565b805f036200397e575050565b5f826001600160a01b0316826040515f6040518083038185875af1925050503d805f8114620039c9576040519150601f19603f3d011682016040523d82523d5f602084013e620039ce565b606091505b5050905080620018215760405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b604482015260640162000338565b60808101516001600160a01b03165f908152600b602052604081205460ff1662003a805760405162461bcd60e51b815260206004820152601960248201527814185e5b595b9d081d1bdad95b881b9bdd08185b1b1bddd959603a1b604482015260640162000338565b62003aa482606001518360a001518460c001518560e0015186610100015162002a97565b60028054905f62003ab58362004deb565b9190505590505f825f01518360200151846060015130866040015160405162003ade90620044ed565b62003aee95949392919062004e06565b604051809103905ff08015801562003b08573d5f803e3d5ffd5b505f8381526003602081905260409182902080546001600160a01b03199081166001600160a01b0386811691909117835560808901516001808501805485169383169390931790925560a08a01516002850181905560c08b015195850186905560e08b015160048601819055600586018054339616861790556007805460068801556101008d0151908701819055600c54600888015560098701805460ff19169095179094558b88015197519899509497889794968b967f78f87bd22347e4e37db1ab310c6ce7e1780121e5e48207cd0b02d39ee87d28349662003bf3968d96959490919062004e5a565b60405180910390a3505050919050565b600180546001600160a01b0319169055620016ed8162004372565b62003c28620025c7565b6001805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25862002d323390565b6001600160a01b0384165f908152600960205260408120805484929062003c8d908490620049c3565b9091555062003c9f9050828262004918565b6001600160a01b038086165f908152600a602090815260408083209388168352929052908120805490919062003cd7908490620049c3565b90915550506001600160a01b0384165f908152600860205260408120805483929062003d05908490620049c3565b909155505050505050565b5f62003d4462003d2083620043c1565b801562003d3f57505f848062003d3a5762003d3a620048ee565b868809115b151590565b62003d5186868662002d77565b62002f399190620049c3565b5f8051602062005eaf833981519152546002036200108257604051633ee5aeb560e01b815260040160405180910390fd5b600b8201546002830154600384015483925f92839262003db19291869162002510565b91505f85600a0154865f016004015462003dcc919062004918565b90508083101562003de157505f905062003e49565b8083111562003e4357600b8601546002870154600388015462003e08929184918962004000565b9350835f0362003e23575f8060019350935093505062003e49565b600b8601546002870154600388015462003e409291879162002510565b92505b50600190505b9250925092565b6040516370a0823160e01b81523060048201525f906001600160a01b038416906370a0823190602401602060405180830381865afa15801562003e95573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062003ebb91906200498d565b905062003ed46001600160a01b038416333085620043f2565b6040516370a0823160e01b8152306004820152829082906001600160a01b038616906370a0823190602401602060405180830381865afa15801562003f1b573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062003f4191906200498d565b62003f4d919062004918565b14620018215760405162461bcd60e51b815260206004820152601960248201527f556e737570706f72746564207061796d656e7420746f6b656e00000000000000604482015260640162000338565b60405163a9059cbb60e01b5f8181526001600160a01b038616600452602485905291602083604481808b5af1925060015f5114831662003ff457838315161562003fe8573d5f823e3d81fd5b5f873b113d1516831692505b60405250949350505050565b5f8062004022866200401b670de0b6b3a764000080620048d4565b8762002d77565b6200402f906001620049c3565b9050828111156200403d5750815b5f5b818110156200259e575f6002620040578484620049c3565b62004064906001620049c3565b62004070919062004902565b905087620040818a838a8a62002510565b116200409057809150620040a0565b6200409d60018262004918565b92505b506200403f565b600154600160a01b900460ff166200108257604051638dfc202b60e01b815260040160405180910390fd5b5f805f1983850993909202808410938190039390930393915050565b634e487b715f52806020526024601cfd5b5f600182116200410d575090565b816001600160801b8210620041275760809190911c9060401b5b600160401b82106200413e5760409190911c9060201b5b6401000000008210620041565760209190911c9060101b5b6201000082106200416c5760109190911c9060081b5b6101008210620041815760089190911c9060041b5b60108210620041955760049190911c9060021b5b60048210620041a25760011b5b600302600190811c90818581620041bd57620041bd620048ee565b048201901c90506001818581620041d857620041d8620048ee565b048201901c90506001818581620041f357620041f3620048ee565b048201901c905060018185816200420e576200420e620048ee565b048201901c90506001818581620042295762004229620048ee565b048201901c90506001818581620042445762004244620048ee565b048201901c905062004267818581620042615762004261620048ee565b04821190565b90039392505050565b6200427e8383835f62004432565b62001821576200429283835f600162004432565b620042bc57604051635274afe760e01b81526001600160a01b038416600482015260240162000338565b62002a6d838383600162004432565b5f80620042d9858762004918565b90505f620042fc8587620042f6670de0b6b3a764000080620048d4565b62002d77565b90505f62004358858862004312866002620048d4565b6200431e9190620049c3565b6200432a908a620048d4565b670de0b6b3a76400006200433f8180620048d4565b6200434c906002620048d4565b620042f69190620048d4565b9050620043668183620049c3565b98975050505050505050565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b5f6002826003811115620043d957620043d9620045d5565b620043e5919062004e9e565b60ff166001149050919050565b620044028484848460016200447e565b6200442c57604051635274afe760e01b81526001600160a01b038516600482015260240162000338565b50505050565b60405163095ea7b360e01b5f8181526001600160a01b038616600452602485905291602083604481808b5af1925060015f5114831662003ff457838315161562003fe8573d5f823e3d81fd5b6040516323b872dd60e01b5f8181526001600160a01b038781166004528616602452604485905291602083606481808c5af1925060015f51148316620044dc578383151615620044d0573d5f823e3d81fd5b5f883b113d1516831692505b604052505f60605295945050505050565b610fec8062004ec383390190565b6001600160a01b0381168114620016ed575f80fd5b803562000df981620044fb565b5f602082840312156200452e575f80fd5b813562000c3081620044fb565b5f602082840312156200454c575f80fd5b5035919050565b5f806040838503121562004565575f80fd5b50508035926020909101359150565b8015158114620016ed575f80fd5b5f806040838503121562004594575f80fd5b8235620045a181620044fb565b91506020830135620045b38162004574565b809150509250929050565b5f60c08284031215620045cf575f80fd5b50919050565b634e487b7160e01b5f52602160045260245ffd5b600481106200460657634e487b7160e01b5f52602160045260245ffd5b9052565b84516001600160a01b0316815260208086015161018083019162004638908401826001600160a01b03169052565b5060408601516040830152606086015160608301526080860151608083015260a08601516200467260a08401826001600160a01b03169052565b5060c086015160c083015260e086015160e0830152610100808701518184015250620046a3610120830186620045e9565b610140820193909352610160015292915050565b5f805f60608486031215620046ca575f80fd5b505081359360208301359350604090920135919050565b5f60208284031215620046f2575f80fd5b813567ffffffffffffffff81111562004709575f80fd5b8201610120818503121562000c30575f80fd5b5f8083601f8401126200472d575f80fd5b50813567ffffffffffffffff81111562004745575f80fd5b6020830191508360208285010111156200475d575f80fd5b9250929050565b5f805f805f805f6080888a0312156200477b575f80fd5b873567ffffffffffffffff8082111562004793575f80fd5b620047a18b838c016200471c565b909950975060208a0135915080821115620047ba575f80fd5b620047c88b838c016200471c565b909750955060408a0135915080821115620047e1575f80fd5b50620047f08a828b016200471c565b90945092505060608801356200480681620044fb565b8091505092959891949750929550565b5f806040838503121562004828575f80fd5b82356200483581620044fb565b91506020830135620045b381620044fb565b5f806040838503121562004859575f80fd5b823591506020830135620045b381620044fb565b5f805f806060858703121562004881575f80fd5b8435935060208501359250604085013567ffffffffffffffff811115620048a6575f80fd5b620048b4878288016200471c565b95989497509550505050565b634e487b7160e01b5f52601160045260245ffd5b8082028115828204841417620018465762001846620048c0565b634e487b7160e01b5f52601260045260245ffd5b5f82620049135762004913620048ee565b500490565b81810381811115620018465762001846620048c0565b81356200493b81620044fb565b81546001600160a01b0319166001600160a01b03919091161781556020820135600182015560408201356002820155606082013560038201556080820135600482015560a09190910135600590910155565b5f602082840312156200499e575f80fd5b5051919050565b5f60208284031215620049b6575f80fd5b815162000c3081620044fb565b80820180821115620018465762001846620048c0565b634e487b7160e01b5f52604160045260245ffd5b604051610120810167ffffffffffffffff8111828210171562004a145762004a14620049d9565b60405290565b5f82601f83011262004a2a575f80fd5b813567ffffffffffffffff8082111562004a485762004a48620049d9565b604051601f8301601f19908116603f0116810190828211818310171562004a735762004a73620049d9565b8160405283815286602085880101111562004a8c575f80fd5b836020870160208301375f602085830101528094505050505092915050565b5f610120823603121562004abd575f80fd5b62004ac7620049ed565b823567ffffffffffffffff8082111562004adf575f80fd5b62004aed3683870162004a1a565b8352602085013591508082111562004b03575f80fd5b62004b113683870162004a1a565b6020840152604085013591508082111562004b2a575f80fd5b5062004b393682860162004a1a565b6040830152506060830135606082015262004b576080840162004510565b608082015260a083013560a082015260c083013560c082015260e083013560e082015261010080840135818301525080915050919050565b5f806040838503121562004ba1575f80fd5b505080516020909101519092909150565b805161ffff8116811462000df9575f80fd5b5f805f805f805f60e0888a03121562004bdb575f80fd5b875162004be881620044fb565b8097505060208801518060020b811462004c00575f80fd5b955062004c106040890162004bb2565b945062004c206060890162004bb2565b935062004c306080890162004bb2565b925060a088015160ff8116811462004c46575f80fd5b60c0890151909250620048068162004574565b5f81518084525f5b8181101562004c7f5760208185018101518683018201520162004c61565b505f602082860101526020601f19601f83011685010191505092915050565b6001600160a01b0386811682528515156020830152604082018590528316606082015260a0608082018190525f906200259e9083018462004c59565b81516001600160a01b031681526101608101602083015162004d0760208401826001600160a01b03169052565b50604083015162004d1f604084018262ffffff169052565b50606083015162004d35606084018260020b9052565b50608083015162004d4b608084018260020b9052565b5060a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015162004d92828501826001600160a01b03169052565b505061014092830151919092015290565b5f805f806080858703121562004db7575f80fd5b8451935060208501516001600160801b038116811462004dd5575f80fd5b6040860151606090960151949790965092505050565b5f6001820162004dff5762004dff620048c0565b5060010190565b60a081525f62004e1a60a083018862004c59565b828103602084015262004e2e818862004c59565b604084018790526001600160a01b03861660608501528381036080850152905062004366818562004c59565b5f60018060a01b03808a1683528089166020840152508660408301528560608301528460808301528360a083015260e060c083015262001be060e083018462004c59565b5f60ff83168062004eb35762004eb3620048ee565b8060ff8416069150509291505056fe60a060405234801562000010575f80fd5b5060405162000fec38038062000fec8339810160408190526200003391620001c1565b818585600362000044838262000300565b50600462000053828262000300565b5050506001600160a01b0381166200008457604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b6200008f81620000af565b5060808390526006620000a3828262000300565b505050505050620003cc565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b634e487b7160e01b5f52604160045260245ffd5b5f82601f83011262000124575f80fd5b81516001600160401b038082111562000141576200014162000100565b604051601f8301601f19908116603f011681019082821181831017156200016c576200016c62000100565b816040528381526020925086602085880101111562000189575f80fd5b5f91505b83821015620001ac57858201830151818301840152908201906200018d565b5f602085830101528094505050505092915050565b5f805f805f60a08688031215620001d6575f80fd5b85516001600160401b0380821115620001ed575f80fd5b620001fb89838a0162000114565b9650602088015191508082111562000211575f80fd5b6200021f89838a0162000114565b604089015160608a0151919750955091506001600160a01b038216821462000245575f80fd5b6080880151919350808211156200025a575f80fd5b50620002698882890162000114565b9150509295509295909350565b600181811c908216806200028b57607f821691505b602082108103620002aa57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f821115620002fb57805f5260205f20601f840160051c81016020851015620002d75750805b601f840160051c820191505b81811015620002f8575f8155600101620002e3565b50505b505050565b81516001600160401b038111156200031c576200031c62000100565b62000334816200032d845462000276565b84620002b0565b602080601f8311600181146200036a575f8415620003525750858301515b5f19600386901b1c1916600185901b178555620003c4565b5f85815260208120601f198616915b828110156200039a5788860151825594840194600190910190840162000379565b5085821015620003b857878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b608051610c00620003ec5f395f818161025801526104270152610c005ff3fe608060405234801561000f575f80fd5b506004361061011c575f3560e01c8063715018a6116100a9578063af35c6c71161006e578063af35c6c71461023e578063bef97c8714610246578063d5abeb0114610253578063dd62ed3e1461027a578063f2fde38b146102b2575f80fd5b8063715018a6146101ed57806379cc6790146101f55780638da5cb5b1461020857806395d89b4114610223578063a9059cbb1461022b575f80fd5b806323b872dd116100ef57806323b872dd1461017b578063313ce5671461018e57806340c10f191461019d57806342966c68146101b257806370a08231146101c5575f80fd5b806303ee438c1461012057806306fdde031461013e578063095ea7b31461014657806318160ddd14610169575b5f80fd5b6101286102c5565b6040516101359190610a43565b60405180910390f35b610128610351565b610159610154366004610aaa565b6103e1565b6040519015158152602001610135565b6002545b604051908152602001610135565b610159610189366004610ad2565b6103fa565b60405160128152602001610135565b6101b06101ab366004610aaa565b61041d565b005b6101b06101c0366004610b0b565b6104b0565b61016d6101d3366004610b22565b6001600160a01b03165f9081526020819052604090205490565b6101b06104c5565b6101b0610203366004610aaa565b6104d8565b6005546040516001600160a01b039091168152602001610135565b610128610530565b610159610239366004610aaa565b61053f565b6101b061054c565b6007546101599060ff1681565b61016d7f000000000000000000000000000000000000000000000000000000000000000081565b61016d610288366004610b42565b6001600160a01b039182165f90815260016020908152604080832093909416825291909152205490565b6101b06102c0366004610b22565b6105d0565b600680546102d290610b73565b80601f01602080910402602001604051908101604052809291908181526020018280546102fe90610b73565b80156103495780601f1061032057610100808354040283529160200191610349565b820191905f5260205f20905b81548152906001019060200180831161032c57829003601f168201915b505050505081565b60606003805461036090610b73565b80601f016020809104026020016040519081016040528092919081815260200182805461038c90610b73565b80156103d75780601f106103ae576101008083540402835291602001916103d7565b820191905f5260205f20905b8154815290600101906020018083116103ba57829003601f168201915b5050505050905090565b5f336103ee81858561060a565b60019150505b92915050565b5f3361040785828561061c565b610412858585610698565b506001949350505050565b6104256106f5565b7f00000000000000000000000000000000000000000000000000000000000000008161045060025490565b61045a9190610bab565b11156104a25760405162461bcd60e51b815260206004820152601260248201527145786365656473206d617820737570706c7960701b60448201526064015b60405180910390fd5b6104ac8282610722565b5050565b6104b86106f5565b6104c23382610756565b50565b6104cd6106f5565b6104d65f61078a565b565b6104e06106f5565b60075460ff16156105265760405162461bcd60e51b815260206004820152601060248201526f151c98591a5b99c81b5a59dc985d195960821b6044820152606401610499565b6104ac8282610756565b60606004805461036090610b73565b5f336103ee818585610698565b6105546106f5565b60075460ff16156105995760405162461bcd60e51b815260206004820152600f60248201526e105b1c9958591e48195b98589b1959608a1b6044820152606401610499565b6007805460ff191660011790556040517feadb24812ab3c9a55c774958184293ebdb6c7f6a2dbab11f397d80c86feb65d3905f90a1565b6105d86106f5565b6001600160a01b03811661060157604051631e4fbdf760e01b81525f6004820152602401610499565b6104c28161078a565b61061783838360016107db565b505050565b6001600160a01b038381165f908152600160209081526040808320938616835292905220545f19811015610692578181101561068457604051637dc7a0d960e11b81526001600160a01b03841660048201526024810182905260448101839052606401610499565b61069284848484035f6107db565b50505050565b6001600160a01b0383166106c157604051634b637e8f60e11b81525f6004820152602401610499565b6001600160a01b0382166106ea5760405163ec442f0560e01b81525f6004820152602401610499565b6106178383836108ad565b6005546001600160a01b031633146104d65760405163118cdaa760e01b8152336004820152602401610499565b6001600160a01b03821661074b5760405163ec442f0560e01b81525f6004820152602401610499565b6104ac5f83836108ad565b6001600160a01b03821661077f57604051634b637e8f60e11b81525f6004820152602401610499565b6104ac825f836108ad565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b6001600160a01b0384166108045760405163e602df0560e01b81525f6004820152602401610499565b6001600160a01b03831661082d57604051634a1406b160e11b81525f6004820152602401610499565b6001600160a01b038085165f908152600160209081526040808320938716835292905220829055801561069257826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161089f91815260200190565b60405180910390a350505050565b6001600160a01b038316158015906108cd57506001600160a01b03821615155b156109175760075460ff166109175760405162461bcd60e51b815260206004820152601060248201526f151c985b9cd9995c9cc81b1bd8dad95960821b6044820152606401610499565b6106178383836001600160a01b038316610947578060025f82825461093c9190610bab565b909155506109b79050565b6001600160a01b0383165f90815260208190526040902054818110156109995760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610499565b6001600160a01b0384165f9081526020819052604090209082900390555b6001600160a01b0382166109d3576002805482900390556109f1565b6001600160a01b0382165f9081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610a3691815260200190565b60405180910390a3505050565b5f602080835283518060208501525f5b81811015610a6f57858101830151858201604001528201610a53565b505f604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610aa5575f80fd5b919050565b5f8060408385031215610abb575f80fd5b610ac483610a8f565b946020939093013593505050565b5f805f60608486031215610ae4575f80fd5b610aed84610a8f565b9250610afb60208501610a8f565b9150604084013590509250925092565b5f60208284031215610b1b575f80fd5b5035919050565b5f60208284031215610b32575f80fd5b610b3b82610a8f565b9392505050565b5f8060408385031215610b53575f80fd5b610b5c83610a8f565b9150610b6a60208401610a8f565b90509250929050565b600181811c90821680610b8757607f821691505b602082108103610ba557634e487b7160e01b5f52602260045260245ffd5b50919050565b808201808211156103f457634e487b7160e01b5f52601160045260245ffdfea264697066735822122090ddc87471e0ddf973a593ecb42949413d62fd9a4d0b7b7eed4e63589596f38964736f6c634300081800339b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00a2646970667358221220f9460c4460567769b6f154c10f9442125aef716d0683a090e10d2f6a4f49461b64736f6c63430008180033",
    "sourceMap": "505:39529:20:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;33886:10;-1:-1:-1;;;;;33908:4:20;33886:27;;33878:60;;;;-1:-1:-1;;;33878:60:20;;216:2:23;33878:60:20;;;198:21:23;255:2;235:18;;;228:30;-1:-1:-1;;;274:18:23;;;267:50;334:18;;33878:60:20;;;;;;;;;505:39529;;;;;5391:51;;;;;;;;;;-1:-1:-1;5391:51:20;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1055:14:23;;1048:22;1030:41;;1018:2;1003:18;5391:51:20;;;;;;;;36693:261;;;;;;;;;;-1:-1:-1;36693:261:20;;;;;:::i;:::-;;:::i;39347:291::-;;;;;;;;;;-1:-1:-1;39347:291:20;;;;;:::i;:::-;;:::i;:::-;;;1413:25:23;;;1401:2;1386:18;39347:291:20;1267:177:23;39644:388:20;;;;;;;;;;-1:-1:-1;39644:388:20;;;;;:::i;:::-;;:::i;:::-;;;;1876:25:23;;;1932:2;1917:18;;1910:34;;;;1849:18;39644:388:20;1702:248:23;15022:162:20;;;;;;:::i;:::-;;:::i;32494:390::-;;;;;;;;;;-1:-1:-1;32494:390:20;;;;;:::i;:::-;;:::i;37905:250::-;;;;;;;;;;-1:-1:-1;37905:250:20;;;;;:::i;:::-;;:::i;2879:27::-;;;;;;;;;;;;;;;;6301:35;;;;;;;;;;;;;;;;37177:573;;;;;;;;;;-1:-1:-1;37177:573:20;;;;;:::i;:::-;;:::i;39181:65::-;;;;;;;;;;;;;:::i;7188:28::-;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;3232:32:23;;;3214:51;;3202:2;3187:18;7188:28:20;3053:218:23;36290:214:20;;;;;;;;;;-1:-1:-1;36290:214:20;;;;;:::i;:::-;;:::i;24016:2091::-;;;;;;;;;;-1:-1:-1;24016:2091:20;;;;;:::i;:::-;;:::i;3039:49::-;;;;;;;;;;-1:-1:-1;3039:49:20;;;;;:::i;:::-;;;;;;;;;;;;;;;;6506:45;;;;;;;;;;-1:-1:-1;6506:45:20;;;;;:::i;:::-;;;;;;;;;;;;;;2912:47;;;;;;;;;;-1:-1:-1;2912:47:20;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2912:47:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;4348:44::-;;;;;;;;;;-1:-1:-1;4348:44:20;;;;;:::i;:::-;;;;;;;;;;;;;;1726:84:12;;;;;;;;;;-1:-1:-1;1796:7:12;;-1:-1:-1;;;1796:7:12;;;;1726:84;;19701:326:20;;;;;;;;;;-1:-1:-1;19701:326:20;;;;;:::i;:::-;;:::i;3111:35::-;;;;;;;;;;-1:-1:-1;3111:35:20;;;;-1:-1:-1;;;;;3111:35:20;;;10090:141;;;;;;;;;;-1:-1:-1;10090:141:20;;;;;:::i;:::-;;:::i;33013:416::-;;;;;;;;;;-1:-1:-1;33013:416:20;;;;;:::i;:::-;;:::i;19381:231::-;;;;;;;;;;-1:-1:-1;19381:231:20;;;;;:::i;:::-;;:::i;2293:101:0:-;;;;;;;;;;;;;:::i;3574:48:20:-;;;;;;;;;;;;3618:4;3574:48;;6051:60;;;;;;;;;;;;;;;2244:229:1;;;;;;;;;;;;;:::i;6557:41:20:-;;;;;;;;;;-1:-1:-1;6557:41:20;;;;;:::i;:::-;;;;;;;;;;;;-1:-1:-1;;;;;6557:41:20;;;39114:61;;;;;;;;;;;;;:::i;6926:53::-;;;;;;;;;;-1:-1:-1;6926:53:20;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;6926:53:20;;;;;;;;;;;;;;;;-1:-1:-1;;;;;6311:32:23;;;6293:51;;6375:2;6360:18;;6353:34;;;;6403:18;;;6396:34;;;;6461:2;6446:18;;6439:34;6504:3;6489:19;;6482:35;6331:3;6533:19;;6526:35;6280:3;6265:19;6926:53:20;6006:561:23;1638:85:0;;;;;;;;;;-1:-1:-1;1684:7:0;1710:6;-1:-1:-1;;;;;1710:6:0;1638:85;;14643:163:20;;;;;;;;;;-1:-1:-1;14643:163:20;;;;;:::i;:::-;;:::i;10434:765::-;;;;;;;;;;-1:-1:-1;10434:765:20;;;;;:::i;:::-;;:::i;30771:1318::-;;;;;;;;;;-1:-1:-1;30771:1318:20;;;;;:::i;:::-;;:::i;38380:424::-;;;;;;;;;;-1:-1:-1;38380:424:20;;;;;:::i;:::-;;:::i;3152:28::-;;;;;;;;;;;;;;;;5105:64;;;;;;;;;;-1:-1:-1;5105:64:20;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;3336:42;;;;;;;;;;;;3374:4;3336:42;;21977:934;;;;;;;;;;-1:-1:-1;21977:934:20;;;;;:::i;:::-;;:::i;4544:47::-;;;;;;;;;;-1:-1:-1;4544:47:20;;;;;:::i;:::-;;;;;;;;;;;;;;5593:39;;;;;;;;;;;;5627:5;5593:39;;;;;9148:8:23;9136:21;;;9118:40;;9106:2;9091:18;5593:39:20;8974:190:23;1232:99:1;;;;;;;;;;-1:-1:-1;1311:13:1;;-1:-1:-1;;;;;1311:13:1;1232:99;;35825:259:20;;;;;;;;;;-1:-1:-1;35825:259:20;;;;;:::i;:::-;;:::i;2965:68::-;;;;;;;;;;-1:-1:-1;2965:68:20;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;1649:178:1;;;;;;;;;;-1:-1:-1;1649:178:1;;;;;:::i;:::-;;:::i;30082:470:20:-;;;;;;;;;;-1:-1:-1;30082:470:20;;;;;:::i;:::-;;:::i;6244:51::-;;;;;;;;;;;;6291:4;6244:51;;36693:261;1531:13:0;:11;:13::i;:::-;6291:4:20::1;36781:8;:32;;36773:59;;;::::0;-1:-1:-1;;;36773:59:20;;10240:2:23;36773:59:20::1;::::0;::::1;10222:21:23::0;10279:2;10259:18;;;10252:30;-1:-1:-1;;;10298:18:23;;;10291:44;10352:18;;36773:59:20::1;10038:338:23::0;36773:59:20::1;36875:20;::::0;36847:59:::1;::::0;;1876:25:23;;;1932:2;1917:18;;1910:34;;;36847:59:20::1;::::0;1849:18:23;36847:59:20::1;;;;;;;36916:20;:31:::0;36693:261::o;39347:291::-;39411:7;39460:19;;;:8;:19;;;;;;;39532:17;;;;39563:24;;;;39601:20;;;;39460:19;;39496:135;;:22;:135::i;:::-;39489:142;39347:291;-1:-1:-1;;;39347:291:20:o;39644:388::-;39722:12;39789:19;;;:8;:19;;;;;;;39868:17;;;;39907:24;;;;39933:20;;;;39722:12;;39825:138;;39868:17;39887:6;;39907:24;39825:29;:138::i;:::-;39987:29;;;;39818:145;;-1:-1:-1;40020:5:20;;39980:36;;39818:145;39980:36;:::i;:::-;39979:46;;;;:::i;:::-;39973:52;;39749:283;39644:388;;;;;:::o;15022:162::-;3023:21:13;:19;:21::i;:::-;1350:19:12::1;:17;:19::i;:::-;15137:40:20::2;15142:9;15153:6;15161:9;15172:4;15137;:40::i;:::-;3065:20:13::0;2365:1;-1:-1:-1;;;;;;;;;;;3972:62:13;3749:292;3065:20;15022:162:20;;:::o;32494:390::-;32554:14;3023:21:13;:19;:21::i;:::-;-1:-1:-1;;;;;;32589:25:20;::::1;;::::0;;;:9:::1;:25;::::0;;;;;;;32615:10:::1;32589:37:::0;;;;;;;;32644:10;32636:39:::1;;;::::0;-1:-1:-1;;;32636:39:20;;11145:2:23;32636:39:20::1;::::0;::::1;11127:21:23::0;11184:2;11164:18;;;11157:30;-1:-1:-1;;;11203:18:23;;;11196:46;11259:18;;32636:39:20::1;10943:340:23::0;32636:39:20::1;-1:-1:-1::0;;;;;32685:25:20;::::1;32725:1;32685:25:::0;;;:9:::1;:25;::::0;;;;;;;32711:10:::1;32685:37:::0;;;;;;;:41;;;32736:25;;;:9:::1;:25:::0;;;;;:35;;32765:6;;32725:1;32736:35:::1;::::0;32765:6;;32736:35:::1;:::i;:::-;::::0;;;-1:-1:-1;32781:38:20::1;::::0;-1:-1:-1;;;;;;32781:18:20;::::1;32800:10;32812:6:::0;32781:18:::1;:38::i;:::-;32834:43;::::0;1413:25:23;;;32858:10:20::1;::::0;-1:-1:-1;;;;;32834:43:20;::::1;::::0;::::1;::::0;1401:2:23;1386:18;32834:43:20::1;;;;;;;;3065:20:13::0;2365:1;-1:-1:-1;;;;;;;;;;;3972:62:13;3749:292;3065:20;32494:390:20;;;:::o;37905:250::-;1531:13:0;:11;:13::i;:::-;-1:-1:-1;;;;;38003:19:20;::::1;37995:50;;;::::0;-1:-1:-1;;;37995:50:20;;11623:2:23;37995:50:20::1;::::0;::::1;11605:21:23::0;11662:2;11642:18;;;11635:30;-1:-1:-1;;;11681:18:23;;;11674:48;11739:18;;37995:50:20::1;11421:342:23::0;37995:50:20::1;-1:-1:-1::0;;;;;38055:26:20;::::1;;::::0;;;:19:::1;:26;::::0;;;;;;;;:36;;-1:-1:-1;;38055:36:20::1;::::0;::::1;;::::0;;::::1;::::0;;;38106:42;;1030:41:23;;;38106:42:20::1;::::0;1003:18:23;38106:42:20::1;;;;;;;37905:250:::0;;:::o;37177:573::-;1531:13:0;:11;:13::i;:::-;37300:1:20::1;37269:19;;::::0;::::1;:6:::0;:19:::1;:::i;:::-;-1:-1:-1::0;;;;;37269:33:20::1;::::0;37261:64:::1;;;::::0;-1:-1:-1;;;37261:64:20;;11623:2:23;37261:64:20::1;::::0;::::1;11605:21:23::0;11662:2;11642:18;;;11635:30;-1:-1:-1;;;11681:18:23;;;11674:48;11739:18;;37261:64:20::1;11421:342:23::0;37261:64:20::1;37343:19;:40;37363:19;;::::0;::::1;:6:::0;:19:::1;:::i;:::-;-1:-1:-1::0;;;;;37343:40:20::1;::::0;;::::1;::::0;::::1;::::0;;;;;;-1:-1:-1;37343:40:20;;::::1;;37335:78;;;::::0;-1:-1:-1;;;37335:78:20;;11970:2:23;37335:78:20::1;::::0;::::1;11952:21:23::0;12009:2;11989:18;;;11982:30;-1:-1:-1;;;12028:18:23;;;12021:55;12093:18;;37335:78:20::1;11768:349:23::0;37335:78:20::1;37423:102;37438:6;:16;;;37456:6;:16;;;37474:6;:12;;;37488:6;:15;;;37505:6;:19;;;37423:14;:102::i;:::-;37572:6:::0;37535:13:::1;:34;37549:19;;::::0;::::1;37572:6:::0;37549:19:::1;:::i;:::-;-1:-1:-1::0;;;;;37535:34:20::1;::::0;;::::1;::::0;::::1;::::0;;;;;;-1:-1:-1;37535:34:20;:43:::1;::::0;:34;:43:::1;:::i;:::-;-1:-1:-1::0;37593:150:20::1;::::0;-1:-1:-1;37626:19:20::1;;::::0;::::1;:6:::0;:19:::1;:::i;:::-;37665:16;37593:150:::0;;-1:-1:-1;;;;;6311:32:23;;;6293:51;;37647:16:20::1;::::0;;::::1;;6360:18:23::0;;;6353:34;37665:16:20;;::::1;;6403:18:23::0;;;6396:34;37683:12:20::1;::::0;;::::1;;6446:18:23::0;;;6439:34;37697:15:20::1;::::0;;::::1;;6489:19:23::0;;;6482:35;37714:19:20::1;::::0;;::::1;;6533::23::0;;;6526:35;6280:3;6265:19;37593:150:20::1;;;;;;;37177:573:::0;:::o;39181:65::-;1531:13:0;:11;:13::i;:::-;39229:10:20::1;:8;:10::i;:::-;39181:65::o:0;36290:214::-;1531:13:0;:11;:13::i;:::-;3374:4:20::1;36369:6;:21;;36361:46;;;::::0;-1:-1:-1;;;36361:46:20;;12971:2:23;36361:46:20::1;::::0;::::1;12953:21:23::0;13010:2;12990:18;;;12983:30;-1:-1:-1;;;13029:18:23;;;13022:42;13081:18;;36361:46:20::1;12769:336:23::0;36361:46:20::1;36443:13;::::0;36422:43:::1;::::0;;1876:25:23;;;1932:2;1917:18;;1910:34;;;36422:43:20::1;::::0;1849:18:23;36422:43:20::1;;;;;;;36475:13;:22:::0;36290:214::o;24016:2091::-;3023:21:13;:19;:21::i;:::-;24084:27:20::1;24114:19:::0;;;:8:::1;:19;::::0;;;;24168:22:::1;24151:13;::::0;::::1;::::0;::::1;;:39;::::0;::::1;;;;;;:::i;:::-;;24143:73;;;::::0;-1:-1:-1;;;24143:73:20;;13312:2:23;24143:73:20::1;::::0;::::1;13294:21:23::0;13351:2;13331:18;;;13324:30;-1:-1:-1;;;13370:18:23;;;13363:51;13431:18;;24143:73:20::1;13110:345:23::0;24143:73:20::1;24227:21;24251:24;24267:7;24251:15;:24::i;:::-;24227:48;;24285:13;24301:89;24324:7;:17;;;24343:7;:14;;:24;;;24369:7;:14;;:20;;;24301:22;:89::i;:::-;24285:105:::0;-1:-1:-1;24549:19:20::1;24571:53;24583:13:::0;1118:25:19::1;991:4;::::0;1118:25:::1;:::i;:::-;24618:5:20;24571:11;:53::i;:::-;-1:-1:-1::0;;;;;;;;;;;;;;;;;;;;;;;;;;;24673:20:20;;-1:-1:-1;;;;;24673:20:20;;::::1;24663:30:::0;;;24673:20;24715:27;::::1;::::0;;;::::1;-1:-1:-1::0;;;;24703:39:20;;;-1:-1:-1;;;;;;24752:55:20;24858:13:::1;::::0;::::1;:37:::0;;-1:-1:-1;;24858:37:20::1;24874:21;24858:37;::::0;;24905:29;;:9:::1;:29:::0;;;;;:46;;24549:75;;-1:-1:-1;;;24938:13:20;;-1:-1:-1;24905:46:20::1;::::0;24938:13;;24905:46:::1;:::i;:::-;::::0;;;-1:-1:-1;;24979:9:20::1;::::0;::::1;::::0;:34:::1;::::0;-1:-1:-1;;;24979:34:20;;25007:4:::1;24979:34;::::0;::::1;3214:51:23::0;25016:13:20;;-1:-1:-1;;;;;24979:19:20::1;::::0;::::1;::::0;3187:18:23;;24979:34:20::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:50;;;;:::i;:::-;24962:1;:14;;:67;;;::::0;::::1;25040:1;:7;;;-1:-1:-1::0;;;;;25040:23:20::1;;:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;25096:1;25080:13;:17;:36;;;;;25115:1;25101:11;:15;25080:36;25076:442;;;25132:7:::0;;:40:::1;::::0;-1:-1:-1;;;25132:40:20;;25153:4:::1;25132:40;::::0;::::1;13823:51:23::0;13890:18;;;13883:34;;;-1:-1:-1;;;;;25132:12:20;;::::1;::::0;::::1;::::0;13796:18:23;;25132:40:20::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;25206:37;25220:5;25227:1;:15;;;25206:13;:37::i;:::-;-1:-1:-1::0;;;;;25186:57:20::1;:17;::::0;::::1;:57:::0;25258:10:::1;::::0;25284::::1;25186:1:::0;25284:7:::1;:10::i;:::-;25386:17;::::0;::::1;::::0;25317:87:::1;::::0;-1:-1:-1;;;25317:87:20;;-1:-1:-1;;;;;14213:15:23;;;25317:87:20::1;::::0;::::1;14195:34:23::0;14265:15;;;14245:18;;;14238:43;5627:5:20::1;14297:18:23::0;;;14290:49;14375:15;;;14355:18;;;14348:43;25257:37:20;;-1:-1:-1;25257:37:20;;-1:-1:-1;25317:15:20::1;:50;::::0;::::1;::::0;14129:19:23;;25317:87:20::1;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1::0;;;;;25308:96:20::1;:6;::::0;::::1;:96:::0;25418:48:::1;25308:1:::0;25439:11;25452:13;25418:17:::1;:48::i;:::-;25480:27;25494:9;25505:1;25480:13;:27::i;:::-;25118:400;;25076:442;25632:7:::0;;:32:::1;::::0;-1:-1:-1;;;25632:32:20;;25658:4:::1;25632:32;::::0;::::1;3214:51:23::0;25611:18:20::1;::::0;-1:-1:-1;;;;;25632:17:20::1;::::0;::::1;::::0;3187:18:23;;25632:32:20::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;25611:53:::0;-1:-1:-1;25678:14:20;;25674:44:::1;;25694:7:::0;;:24:::1;::::0;-1:-1:-1;;;25694:24:20;;::::1;::::0;::::1;1413:25:23::0;;;-1:-1:-1;;;;;25694:12:20;;::::1;::::0;::::1;::::0;1386:18:23;;25694:24:20::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;25674:44;25787:14;::::0;::::1;::::0;25750:9:::1;::::0;::::1;::::0;:34:::1;::::0;-1:-1:-1;;;25750:34:20;;25778:4:::1;25750:34;::::0;::::1;3214:51:23::0;25728:19:20::1;::::0;25787:14;-1:-1:-1;;;;;25750:19:20::1;::::0;::::1;::::0;3187:18:23;;25750:34:20::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:51;;;;:::i;:::-;25728:73:::0;-1:-1:-1;25815:15:20;;25811:172:::1;;25864:9;::::0;;::::1;::::0;-1:-1:-1;;;;;25846:29:20;;::::1;;::::0;;;:9:::1;:29:::0;;;;;;25876:22:::1;::::0;::::1;::::0;;;::::1;25846:53:::0;;;;;;;;:68;;25903:11;;25846:29;:68:::1;::::0;25903:11;;25846:68:::1;:::i;:::-;::::0;;;-1:-1:-1;;25946:9:20::1;::::0;;::::1;::::0;-1:-1:-1;;;;;25928:29:20::1;;::::0;;;:9:::1;:29:::0;;;;;;:44;;25961:11;;25928:29;:44:::1;::::0;25961:11;;25928:44:::1;:::i;:::-;::::0;;;-1:-1:-1;;25811:172:20::1;26073:1;:7;;;-1:-1:-1::0;;;;;26073:25:20::1;;:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;24074:2033;;;;;;;3065:20:13::0;2365:1;-1:-1:-1;;;;;;;;;;;3972:62:13;3749:292;3065:20;24016:2091:20;:::o;19701:326::-;3023:21:13;:19;:21::i;:::-;19816:14:20::1;19832:11:::0;19847:37:::1;19853:9;19864:6;19872:11;19847:5;:37::i;:::-;19815:69;;;;19930:4;-1:-1:-1::0;;;;;19902:33:20::1;19910:7;-1:-1:-1::0;;;;;19902:33:20::1;;19894:63;;;::::0;-1:-1:-1;;;19894:63:20;;14990:2:23;19894:63:20::1;::::0;::::1;14972:21:23::0;15029:2;15009:18;;;15002:30;-1:-1:-1;;;15048:18:23;;;15041:47;15105:18;;19894:63:20::1;14788:341:23::0;19894:63:20::1;19967:18;::::0;-1:-1:-1;;;19967:18:20;;::::1;::::0;::::1;1413:25:23::0;;;19967:4:20::1;-1:-1:-1::0;;;;;19967:13:20::1;::::0;::::1;::::0;1386:18:23;;19967::20::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;19995:25;20004:10;20016:3;19995:8;:25::i;:::-;19805:222;;3065:20:13::0;2365:1;-1:-1:-1;;;;;;;;;;;3972:62:13;3749:292;3065:20;19701:326:20;;;:::o;10090:141::-;10171:17;1350:19:12;:17;:19::i;:::-;10207:17:20::1;;10222:1:::0;10207:17:::1;:::i;:::-;:14;:17::i;:::-;10200:24:::0;10090:141;-1:-1:-1;;10090:141:20:o;33013:416::-;33085:14;3023:21:13;:19;:21::i;:::-;-1:-1:-1;;;;;;33120:28:20;::::1;;::::0;;;:12:::1;:28;::::0;;;;;33166:10;33158:39:::1;;;::::0;-1:-1:-1;;;33158:39:20;;11145:2:23;33158:39:20::1;::::0;::::1;11127:21:23::0;11184:2;11164:18;;;11157:30;-1:-1:-1;;;11203:18:23;;;11196:46;11259:18;;33158:39:20::1;10943:340:23::0;33158:39:20::1;-1:-1:-1::0;;;;;33207:28:20;::::1;33238:1;33207:28:::0;;;:12:::1;:28;::::0;;;;;;;:32;;;33249:9:::1;:25:::0;;;;;:35;;33278:6;;33238:1;33249:35:::1;::::0;33278:6;;33249:35:::1;:::i;:::-;::::0;;;-1:-1:-1;;33313:20:20::1;::::0;33294:48:::1;::::0;-1:-1:-1;;;;;33294:18:20;;::::1;::::0;33313:20:::1;33335:6:::0;33294:18:::1;:48::i;:::-;33393:20;::::0;33357:65:::1;::::0;1413:25:23;;;-1:-1:-1;;;;;33393:20:20;;::::1;::::0;33357:65;::::1;::::0;::::1;::::0;1401:2:23;1386:18;33357:65:20::1;1267:177:23::0;19381:231:20;3023:21:13;:19;:21::i;:::-;19490:14:20::1;19506:11:::0;19521:37:::1;19527:9;19538:6;19546:11;19521:5;:37::i;:::-;19489:69:::0;;-1:-1:-1;19489:69:20;-1:-1:-1;19568:37:20::1;-1:-1:-1::0;;;;;19568:20:20;::::1;19589:10;19489:69:::0;19568:20:::1;:37::i;2293:101:0:-:0;1531:13;:11;:13::i;:::-;2357:30:::1;2384:1;2357:18;:30::i;2244:229:1:-:0;1311:13;;735:10:10;;-1:-1:-1;;;;;1311:13:1;2339:24;;2335:96;;2386:34;;-1:-1:-1;;;2386:34:1;;-1:-1:-1;;;;;3232:32:23;;2386:34:1;;;3214:51:23;3187:18;;2386:34:1;3053:218:23;2335:96:1;2440:26;2459:6;2440:18;:26::i;39114:61:20:-;1531:13:0;:11;:13::i;:::-;39160:8:20::1;:6;:8::i;14643:163::-:0;3023:21:13;:19;:21::i;:::-;1350:19:12::1;:17;:19::i;:::-;14760:39:20::2;14765:9;14776:6;14784:7;14793:5;14760:4;:39::i;:::-;3065:20:13::0;2365:1;-1:-1:-1;;;;;;;;;;;3972:62:13;3749:292;10434:765:20;10617:17;1350:19:12;:17;:19::i;:::-;-1:-1:-1;;;;;10670:27:20;;::::1;10646:21;10670:27:::0;;;:13:::1;:27;::::0;;;;;;;;10646:51;;::::1;::::0;::::1;::::0;;;;;;::::1;::::0;;;;;::::1;::::0;;;::::1;::::0;;;;::::1;::::0;::::1;::::0;;;;;;;;::::1;::::0;::::1;::::0;;;;;::::1;::::0;::::1;::::0;;;;;::::1;::::0;;::::1;::::0;;;;;10707:57:::1;;;::::0;-1:-1:-1;;;10707:57:20;;17716:2:23;10707:57:20::1;::::0;::::1;17698:21:23::0;17755:2;17735:18;;;17728:30;-1:-1:-1;;;17774:18:23;;;17767:46;17830:18;;10707:57:20::1;17514:340:23::0;10707:57:20::1;10809:373;::::0;;;::::1;;::::0;::::1;::::0;;::::1;;::::0;;;;;;;::::1;::::0;::::1;::::0;;;10781:411:::1;::::0;10809:373;;;10847:4;;;;;;10809:373;;10847:4;;;;10809:373;::::1;;::::0;::::1;::::0;;;;-1:-1:-1;;;10809:373:20;;;-1:-1:-1;10809:373:20::1;::::0;;::::1;;::::0;::::1;::::0;;::::1;::::0;::::1;::::0;;;;;;;;;;;;::::1;::::0;;10877:6;;;;;;10809:373;::::1;10877:6:::0;;;;10809:373;::::1;;::::0;::::1;::::0;;;;-1:-1:-1;;;10809:373:20;;;-1:-1:-1;10809:373:20::1;::::0;;::::1;;::::0;::::1;::::0;;::::1;::::0;::::1;::::0;;;;;;;;;;;;::::1;::::0;;10914:11;;;;;;10809:373;::::1;10914:11:::0;;;;10809:373;::::1;;::::0;::::1;::::0;;;;-1:-1:-1;;;10809:373:20;;;-1:-1:-1;10809:373:20::1;10954:11:::0;;::::1;::::0;10809:373;;::::1;::::0;10997:14;;-1:-1:-1;;;;;10809:373:20::1;::::0;;;;;;;;11040:11;::::1;::::0;10809:373;;;;;;;;11076:7;::::1;::::0;10809:373;;;;;;;;11111:10;::::1;::::0;10809:373;;;;;;;;11153:14;::::1;::::0;10809:373;;;;;10781:14:::1;:411::i;:::-;10774:418:::0;10434:765;-1:-1:-1;;;;;;;;;10434:765:20:o;30771:1318::-;30842:17;30861:19;3023:21:13;:19;:21::i;:::-;30892:27:20::1;30922:19:::0;;;:8:::1;:19;::::0;;;;;;;;30959:13:::1;::::0;::::1;::::0;::::1;;:38;::::0;::::1;;;;;;:::i;:::-;;:68;;;;-1:-1:-1::0;31001:21:20::1;::::0;;;:10:::1;:21;::::0;;;;;:26;::::1;30959:68;30951:92;;;::::0;-1:-1:-1;;;30951:92:20;;18061:2:23;30951:92:20::1;::::0;::::1;18043:21:23::0;18100:2;18080:18;;;18073:30;-1:-1:-1;;;18119:18:23;;;18112:41;18170:18;;30951:92:20::1;17859:335:23::0;30951:92:20::1;31118:241;::::0;;::::1;::::0;::::1;::::0;;-1:-1:-1;31187:21:20;;;:10:::1;:21;::::0;;;;;;;31118:241;;31245:4:::1;31118:241:::0;;::::1;::::0;;;-1:-1:-1;;;;;31118:241:20;;;;;;;;;;;;31081:288;;-1:-1:-1;;;31081:288:20;;18426:13:23;;31081:288:20::1;::::0;::::1;18408:32:23::0;18482:24;;-1:-1:-1;;;;;18478:50:23;;;18456:20;;;18449:80;18558:24;;18673:21;;18651:20;;;18644:51;18737:24;;18733:33;;;18711:20;;;18704:63;-1:-1:-1;;;31081:15:20::1;:23:::0;;::::1;::::0;::::1;::::0;18380:19:23;;31081:288:20::1;::::0;::::1;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;31440:27;::::0;::::1;::::0;31408:20;;31054:315;;-1:-1:-1;31054:315:20;;-1:-1:-1;;;;;;31440:27:20;;::::1;31408:20:::0;::::1;31400:68;::::0;31505:35:::1;;31533:2;31537;31505:35;;;31522:2;31526;31505:35;31588:28;::::0;::::1;::::0;31478:62;;-1:-1:-1;31478:62:20;-1:-1:-1;31551:21:20::1;::::0;31620:5:::1;::::0;31576:40:::1;::::0;31478:62;31576:40:::1;:::i;:::-;31575:50;;;;:::i;:::-;31551:74;;31635:23;31708:5;31676:7;:14;;:28;;;31662:11;:42;;;;:::i;:::-;31661:52;;;;:::i;:::-;31743:20:::0;;31766:22:::1;::::0;::::1;::::0;31635:78;;-1:-1:-1;31723:92:20::1;::::0;-1:-1:-1;;;;;31743:20:20;;::::1;::::0;31766:22:::1;31790:13:::0;31805:9;31723:11:::1;:92::i;:::-;31845:27;::::0;::::1;::::0;31875:22:::1;::::0;::::1;::::0;31825:103:::1;::::0;-1:-1:-1;;;;;31845:27:20;;::::1;::::0;31875:22:::1;31899:15:::0;31916:11;31825::::1;:103::i;:::-;31973:9:::0;31944:138:::1;31984:25;31996:13:::0;31984:9;:25:::1;:::i;:::-;32011:29;32025:15:::0;32011:11;:29:::1;:::i;:::-;31944:138;::::0;;19259:25:23;;;19315:2;19300:18;;19293:34;;;;19343:18;;19336:34;;;19401:2;19386:18;;19379:34;;;19246:3;19231:19;31944:138:20::1;;;;;;;30882:1207;;;;;;3065:20:13::0;2365:1;-1:-1:-1;;;;;;;;;;;3972:62:13;3749:292;3065:20;30771:1318:20;;;:::o;38380:424::-;3023:21:13;:19;:21::i;:::-;1531:13:0::1;:11;:13::i;:::-;-1:-1:-1::0;;;;;38471:16:20;::::2;38463:43;;;::::0;-1:-1:-1;;;38463:43:20;;19626:2:23;38463:43:20::2;::::0;::::2;19608:21:23::0;19665:2;19645:18;;;19638:30;-1:-1:-1;;;19684:18:23;;;19677:44;19738:18;;38463:43:20::2;19424:338:23::0;38463:43:20::2;38534:30;::::0;-1:-1:-1;;;38534:30:20;;38558:4:::2;38534:30;::::0;::::2;3214:51:23::0;38516:15:20::2;::::0;-1:-1:-1;;;;;38534:15:20;::::2;::::0;::::2;::::0;3187:18:23;;38534:30:20::2;;;;;;;;;;;;;;;;;::::0;::::2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1::0;;;;;38589:25:20;::::2;38574:12;38589:25:::0;;;:9:::2;:25;::::0;;;;;38516:48;;-1:-1:-1;38632:14:20;;::::2;38624:43;;;::::0;-1:-1:-1;;;38624:43:20;;19969:2:23;38624:43:20::2;::::0;::::2;19951:21:23::0;20008:2;19988:18;;;19981:30;-1:-1:-1;;;20027:18:23;;;20020:46;20083:18;;38624:43:20::2;19767:340:23::0;38624:43:20::2;38678:14;38695;38705:4:::0;38695:7;:14:::2;:::i;:::-;38678:31:::0;-1:-1:-1;38719:30:20::2;-1:-1:-1::0;;;;;38719:18:20;::::2;38738:2:::0;38678:31;38719:18:::2;:30::i;:::-;38786:2;-1:-1:-1::0;;;;;38764:33:20::2;38778:5;-1:-1:-1::0;;;;;38764:33:20::2;;38790:6;38764:33;;;;1413:25:23::0;;1401:2;1386:18;;1267:177;38764:33:20::2;;;;;;;;38453:351;;;3065:20:13::0;2365:1;-1:-1:-1;;;;;;;;;;;3972:62:13;3749:292;21977:934:20;3023:21:13;:19;:21::i;:::-;22054:27:20::1;22084:19:::0;;;:8:::1;:19;::::0;;;;22135:22:::1;::::0;::::1;::::0;-1:-1:-1;;;;;22135:22:20::1;22121:10;:36;22113:60;;;::::0;-1:-1:-1;;;22113:60:20;;20314:2:23;22113:60:20::1;::::0;::::1;20296:21:23::0;20353:2;20333:18;;;20326:30;-1:-1:-1;;;20372:18:23;;;20365:41;20423:18;;22113:60:20::1;20112:335:23::0;22113:60:20::1;22221:22;22204:13;::::0;::::1;::::0;::::1;;:39;::::0;::::1;;;;;;:::i;:::-;;:81;;;-1:-1:-1::0;22264:21:20::1;22247:13;::::0;::::1;::::0;::::1;;:38;::::0;::::1;;;;;;:::i;:::-;;22204:81;22183:149;;;::::0;-1:-1:-1;;;22183:149:20;;13312:2:23;22183:149:20::1;::::0;::::1;13294:21:23::0;13351:2;13331:18;;;13324:30;-1:-1:-1;;;13370:18:23;;;13363:51;13431:18;;22183:149:20::1;13110:345:23::0;22183:149:20::1;22351:28;::::0;;;:17:::1;:28;::::0;;;;;::::1;;22350:29;22342:59;;;::::0;-1:-1:-1;;;22342:59:20;;20654:2:23;22342:59:20::1;::::0;::::1;20636:21:23::0;20693:2;20673:18;;;20666:30;-1:-1:-1;;;20712:18:23;;;20705:47;20769:18;;22342:59:20::1;20452:341:23::0;22342:59:20::1;22479:14;22518:24;22534:7;22518:15;:24::i;:::-;22496:7;:19;;;:46;;;;:::i;:::-;22479:63;;22569:1;22560:6;:10;22552:42;;;::::0;-1:-1:-1;;;22552:42:20;;21000:2:23;22552:42:20::1;::::0;::::1;20982:21:23::0;21039:2;21019:18;;;21012:30;-1:-1:-1;;;21058:18:23;;;21051:49;21117:18;;22552:42:20::1;20798:343:23::0;22552:42:20::1;22644:28;::::0;;;:17:::1;:28;::::0;;;;;;;:35;;-1:-1:-1;;22644:35:20::1;22675:4;22644:35:::0;;::::1;::::0;;;22707:27;::::1;::::0;-1:-1:-1;;;;;22707:27:20::1;22689:47:::0;;:9:::1;:47:::0;;;;;:57;;22740:6;;22644:28;22689:57:::1;::::0;22740:6;;22689:57:::1;:::i;:::-;::::0;;;-1:-1:-1;;22797:22:20::1;::::0;::::1;::::0;;22756:27;::::1;::::0;:72:::1;::::0;-1:-1:-1;;;;;22756:27:20;;::::1;::::0;22797:22:::1;22821:6:::0;22756:40:::1;:72::i;:::-;22873:22;::::0;::::1;::::0;22844:60:::1;::::0;1413:25:23;;;-1:-1:-1;;;;;22873:22:20;;::::1;::::0;22862:9;;22844:60:::1;::::0;1401:2:23;1386:18;22844:60:20::1;;;;;;;22044:867;;3065:20:13::0;2365:1;-1:-1:-1;;;;;;;;;;;3972:62:13;3749:292;35825:259:20;1531:13:0;:11;:13::i;:::-;-1:-1:-1;;;;;35914:23:20;::::1;35906:54;;;::::0;-1:-1:-1;;;35906:54:20;;21348:2:23;35906:54:20::1;::::0;::::1;21330:21:23::0;21387:2;21367:18;;;21360:30;-1:-1:-1;;;21406:18:23;;;21399:48;21464:18;;35906:54:20::1;21146:342:23::0;35906:54:20::1;36003:20;::::0;35975:60:::1;::::0;-1:-1:-1;;;;;35975:60:20;;::::1;::::0;36003:20:::1;::::0;35975:60:::1;::::0;36003:20:::1;::::0;35975:60:::1;36045:20;:32:::0;;-1:-1:-1;;;;;;36045:32:20::1;-1:-1:-1::0;;;;;36045:32:20;;;::::1;::::0;;;::::1;::::0;;35825:259::o;1649:178:1:-;1531:13:0;:11;:13::i;:::-;1738::1::1;:24:::0;;-1:-1:-1;;;;;1738:24:1;::::1;-1:-1:-1::0;;;;;;1738:24:1;;::::1;::::0;::::1;::::0;;;1802:7:::1;1684::0::0;1710:6;-1:-1:-1;;;;;1710:6:0;;1638:85;1802:7:1::1;-1:-1:-1::0;;;;;1777:43:1::1;;;;;;;;;;;1649:178:::0;:::o;30082:470:20:-;30212:11;;-1:-1:-1;;;;;30212:11:20;:25;;;;:54;;-1:-1:-1;30255:11:20;;-1:-1:-1;;;;;30255:11:20;30241:10;:25;30212:54;30204:88;;;;-1:-1:-1;;;30204:88:20;;21695:2:23;30204:88:20;;;21677:21:23;21734:2;21714:18;;;21707:30;-1:-1:-1;;;21753:18:23;;;21746:51;21814:18;;30204:88:20;21493:345:23;30204:88:20;30303:10;;30329:36;;;;30340:4;30329:36;:::i;:::-;30302:63;;;;30394:1;30379:12;:16;30375:80;;;30397:58;-1:-1:-1;;;;;30397:23:20;;30421:10;30441:12;30397:23;:58::i;:::-;30484:1;30469:12;:16;30465:80;;;30487:58;-1:-1:-1;;;;;30487:23:20;;30511:10;30531:12;30487:23;:58::i;:::-;30194:358;;30082:470;;;;:::o;1796:162:0:-;1684:7;1710:6;-1:-1:-1;;;;;1710:6:0;735:10:10;1855:23:0;1851:101;;1901:40;;-1:-1:-1;;;1901:40:0;;735:10:10;1901:40:0;;;3214:51:23;3187:18;;1901:40:0;3053:218:23;3204:220:19;3333:7;3371:46;3383:5;3390:13;873:4;3371:11;:46::i;:::-;3359:58;;:9;:58;:::i;:::-;3352:65;3204:220;-1:-1:-1;;;;3204:220:19:o;1612:441::-;1772:7;;1808:57;1820:9;1831:6;1118:25;991:4;;1118:25;:::i;:::-;1846:18;1808:11;:57::i;:::-;1791:74;-1:-1:-1;1875:13:19;1891:124;1916:5;1953:6;1933:17;1937:13;1933:1;:17;:::i;:::-;:26;;;;:::i;:::-;1923:37;;:6;:37;:::i;:::-;873:4;1118:25;873:4;;1118:25;:::i;:::-;1962:9;;:1;:9;:::i;:::-;:23;;;;:::i;1891:124::-;1875:140;-1:-1:-1;2032:14:19;1875:140;2032:6;:14;:::i;:::-;2025:21;1612:441;-1:-1:-1;;;;;;;1612:441:19:o;3749:292:13:-;3872:25;:23;:25::i;:::-;2407:1;-1:-1:-1;;;;;;;;;;;3972:62:13;3749:292::o;1878:128:12:-;1796:7;;-1:-1:-1;;;1796:7:12;;;;1939:61;;;1974:15;;-1:-1:-1;;;1974:15:12;;;;;;;;;;;15190:1601:20;15289:27;15319:19;;;:8;:19;;;;;15373;15356:13;;;;;;:36;;;;;;;;:::i;:::-;;15348:67;;;;-1:-1:-1;;;15348:67:20;;22454:2:23;15348:67:20;;;22436:21:23;22493:2;22473:18;;;22466:30;-1:-1:-1;;;22512:18:23;;;22505:48;22570:18;;15348:67:20;22252:342:23;15348:67:20;15442:1;15433:6;:10;15425:34;;;;-1:-1:-1;;;15425:34:20;;22801:2:23;15425:34:20;;;22783:21:23;22840:2;22820:18;;;22813:30;-1:-1:-1;;;22859:18:23;;;22852:41;22910:18;;15425:34:20;22599:335:23;15425:34:20;15478:7;15477:8;:65;;;-1:-1:-1;15497:27:20;;;;15537:4;-1:-1:-1;;;;;15489:53:20;;;15497:27;;15489:53;15477:65;15469:95;;;;-1:-1:-1;;;15469:95:20;;14990:2:23;15469:95:20;;;14972:21:23;15029:2;15009:18;;;15002:30;-1:-1:-1;;;15048:18:23;;;15041:47;15105:18;;15469:95:20;14788:341:23;15469:95:20;15575:12;15597:13;15647:22;15653:7;15662:6;15647:5;:22::i;:::-;15709:29;;;;15620:49;;-1:-1:-1;15620:49:20;;-1:-1:-1;15620:49:20;-1:-1:-1;15679:19:20;;15742:5;;15702:36;;15620:49;15702:36;:::i;:::-;15701:46;;;;:::i;:::-;15679:68;-1:-1:-1;15757:13:20;15773:18;15679:68;15773:4;:18;:::i;:::-;15757:34;;15818:7;15809:5;:16;;15801:46;;;;-1:-1:-1;;;15801:46:20;;23141:2:23;15801:46:20;;;23123:21:23;23180:2;23160:18;;;23153:30;-1:-1:-1;;;23199:18:23;;;23192:47;23256:18;;15801:46:20;22939:341:23;15801:46:20;15921:4;15898:7;:19;;;:27;;;;;;;:::i;:::-;;;;;;;;15956:6;15935:7;:17;;;:27;;;;;;;:::i;:::-;;;;-1:-1:-1;;15972:24:20;;;;:13;:24;;;;;;;;15997:10;15972:36;;;;;;;:46;;16012:6;;15972:24;:46;;16012:6;;15972:46;:::i;:::-;;;;-1:-1:-1;;16046:27:20;;;;-1:-1:-1;;;;;16046:27:20;16028:47;;;;:9;:47;;;;;:56;;16079:5;;16028:47;:56;;16079:5;;16028:56;:::i;:::-;;;;-1:-1:-1;;16115:27:20;;;;-1:-1:-1;;;;;16115:27:20;16094:50;;;;:12;:50;;;;;:65;;16148:11;;16094:50;:65;;16148:11;;16094:65;:::i;:::-;;;;-1:-1:-1;;16169:77:20;;;;16197:13;;;:38;;-1:-1:-1;;16197:38:20;16213:22;16197:38;;;16169:77;16260:7;16256:199;;;16283:4;-1:-1:-1;;;;;16283:12:20;;16303:5;16283:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;16325:37;16334:10;16356:5;16346:7;:15;;;;:::i;:::-;16325:8;:37::i;:::-;16256:199;;;16409:27;;;;16393:51;;-1:-1:-1;;;;;16409:27:20;16438:5;16393:15;:51::i;:::-;16464:20;;:45;;-1:-1:-1;;;16464:45:20;;16490:10;16464:45;;;13823:51:23;13890:18;;;13883:34;;;-1:-1:-1;;;;;16464:20:20;;;;:25;;13796:18:23;;16464:45:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;16616:19:20;;;;16637:17;;;;16525:139;;;23544:25:23;;;23600:2;23585:18;;23578:34;;;23628:18;;;23621:34;;;23686:2;23671:18;;23664:34;;;;23729:3;23714:19;;23707:35;16565:10:20;;16554:9;;16525:139;;23531:3:23;23516:19;16525:139:20;;;;;;;16678:8;16674:111;;;16724:9;16707:67;16735:7;:19;;;16756:7;:17;;;16707:67;;;;;;1876:25:23;;;1932:2;1917:18;;1910:34;1864:2;1849:18;;1702:248;16707:67:20;;;;;;;;16674:111;15279:1512;;;;;15190:1601;;;;:::o;1219:204:9:-;1306:37;1320:5;1327:2;1331:5;1338:4;1306:13;:37::i;:::-;1301:116;;1366:40;;-1:-1:-1;;;1366:40:9;;-1:-1:-1;;;;;3232:32:23;;1366:40:9;;;3214:51:23;3187:18;;1366:40:9;3053:218:23;12917:1036:20;13124:1;13112:9;:13;13104:41;;;;-1:-1:-1;;;13104:41:20;;23955:2:23;13104:41:20;;;23937:21:23;23994:2;23974:18;;;23967:30;-1:-1:-1;;;24013:18:23;;;24006:45;24068:18;;13104:41:20;23753:339:23;13104:41:20;13174:1;13163:8;:12;13155:39;;;;-1:-1:-1;;;13155:39:20;;24299:2:23;13155:39:20;;;24281:21:23;24338:2;24318:18;;;24311:30;-1:-1:-1;;;24357:18:23;;;24350:44;24411:18;;13155:39:20;24097:338:23;13155:39:20;3618:4;13225:12;:33;;:58;;;;;13278:5;13262:12;:21;;13225:58;13204:128;;;;-1:-1:-1;;;13204:128:20;;24642:2:23;13204:128:20;;;24624:21:23;24681:2;24661:18;;;24654:30;24720:25;24700:18;;;24693:53;24763:18;;13204:128:20;24440:347:23;13204:128:20;3939:4;13364:9;:29;;:61;;;;;3993:4;13397:9;:28;;13364:61;:89;;;;;3993:4;13429:5;:24;;13364:89;:136;;;;;4047:4;13473:8;:27;;13364:136;13343:198;;;;-1:-1:-1;;;13343:198:20;;24994:2:23;13343:198:20;;;24976:21:23;25033:2;25013:18;;;25006:30;-1:-1:-1;;;25052:18:23;;;25045:45;25107:18;;13343:198:20;24792:339:23;13343:198:20;13552:15;13570:65;13594:1;13597:8;13607:9;13618:5;13625:9;13570:23;:65::i;:::-;13552:83;;13645:18;13666:49;13689:7;13698:9;13709:5;13666:22;:49::i;:::-;13645:70;-1:-1:-1;13725:15:20;13743:120;13796:5;13769:23;13780:12;13769:8;:23;:::i;:::-;13768:33;;;;:::i;:::-;1118:25:19;991:4;;1118:25;:::i;:::-;13823:10:20;13835:18;13743:11;:120::i;:::-;13725:138;-1:-1:-1;13902:9:20;13881:17;13725:138;13881:7;:17;:::i;:::-;:30;;13873:73;;;;-1:-1:-1;;;13873:73:20;;25338:2:23;13873:73:20;;;25320:21:23;25377:2;25357:18;;;25350:30;25416:32;25396:18;;;25389:60;25466:18;;13873:73:20;25136:354:23;13873:73:20;13094:859;;;12917:1036;;;;;:::o;2586:117:12:-;1597:16;:14;:16::i;:::-;2644:7:::1;:15:::0;;-1:-1:-1;;;;2644:15:12::1;::::0;;2674:22:::1;735:10:10::0;2683:12:12::1;2674:22;::::0;-1:-1:-1;;;;;3232:32:23;;;3214:51;;3202:2;3187:18;2674:22:12::1;;;;;;;2586:117::o:0;33951:169:20:-;34028:7;34108:5;34077:7;:14;;:27;;;34055:7;:19;;;:49;;;;:::i;:::-;34054:59;;;;:::i;7296:3683:16:-;7378:14;7429:12;7443:11;7458:12;7465:1;7468;7458:6;:12::i;:::-;7428:42;;;;7552:4;7560:1;7552:9;7548:365;;7887:11;7881:3;:17;;;;;:::i;:::-;;7874:24;;;;;;7548:365;8038:4;8023:11;:19;8019:142;;8062:84;5328:5;8082:16;;5327:36;940:4:11;5322:42:16;8062:11;:84::i;:::-;8413:17;8564:11;8561:1;8558;8551:25;8956:12;8986:15;;;8971:31;;9121:22;;;;;9854:1;9835;:15;;9834:21;;10087;;;10083:25;;10072:36;10157:21;;;10153:25;;10142:36;10229:21;;;10225:25;;10214:36;10300:21;;;10296:25;;10285:36;10373:21;;;10369:25;;10358:36;10447:21;;;10443:25;;;10432:36;9363:12;;;;9359:23;;;9384:1;9355:31;8676:18;;;8666:29;;;9470:11;;;;8719:19;;;;9214:14;;;;9463:18;;;;10922:13;;-1:-1:-1;;7296:3683:16;;;;;:::o;35187:520:20:-;35268:7;35288:11;35301;35316:13;:73;;1118:25:19;991:4;;1118:25;:::i;:::-;35383:5:20;35316:73;;;35333:5;1118:25:19;991:4;;1118:25;:::i;:::-;35287:102:20;;-1:-1:-1;35287:102:20;-1:-1:-1;35399:17:20;-1:-1:-1;;;35419:9:20;35287:102;;35419:9;:::i;:::-;:21;:140;;35557:2;35512:41;35522:30;35534:3;-1:-1:-1;;;35548:3:20;35522:11;:30::i;:::-;35512:9;:41::i;:::-;:47;;35419:140;;;35455:42;35465:31;35477:3;-1:-1:-1;;;35492:3:20;35465:11;:31::i;35455:42::-;35399:160;-1:-1:-1;5936:10:20;35577:26;;:56;;;;-1:-1:-1;5995:49:20;35607:26;;35577:56;35569:96;;;;-1:-1:-1;;;35569:96:20;;25697:2:23;35569:96:20;;;25679:21:23;25736:2;25716:18;;;25709:30;25775:29;25755:18;;;25748:57;25822:18;;35569:96:20;25495:351:23;35569:96:20;35690:9;35187:520;-1:-1:-1;;;;;35187:520:20:o;34126:237::-;34186:14;34202;34235:1;:15;;;:121;;34327:9;;;;34347:7;;34235:121;;;34274:7;;34292:9;;;;34235:121;34228:128;;;;34126:237;;;:::o;28986:1047::-;29096:19;29133:1;:6;;;29096:44;;29151:15;29176:4;-1:-1:-1;;;;;29176:10:20;;:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;29150:38;;;;;;;;29213:1;:17;;;-1:-1:-1;;;;;29202:28:20;:7;-1:-1:-1;;;;;29202:28:20;;29198:41;;29232:7;;28986:1047;;;:::o;29198:41::-;29277:17;;;;29370:15;;;;-1:-1:-1;;;;;29267:27:20;;;;;;;;;;;29356:29;;;;29249:15;29356:29;29411:44;;29442:13;29411:44;;;29424:15;29438:1;29424:11;:15;:::i;:::-;29395:60;;29469:5;29478:1;29469:10;29465:23;;29481:7;;;;;28986:1047;;;:::o;29465:23::-;29499:10;29511;29525;29533:1;29525:7;:10::i;:::-;29545:11;:27;;-1:-1:-1;;;;;;29545:27:20;-1:-1:-1;;;;;29545:27:20;;;;;;;;;29793:17;;;;;29812:18;;;27206:15:23;;;29812:18:20;;;27188:34:23;27258:15;;;27238:18;;;27231:43;29812:18:20;;;;;;;;;27123::23;;;29812::20;;;;-1:-1:-1;;;29741:90:20;;27206:15:23;;-1:-1:-1;27258:15:23;;-1:-1:-1;29545:27:20;29741:9;;:90;;29759:4;;29766:10;;29785:5;;29741:90;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;29841:11:20;:24;;-1:-1:-1;;;;;;29841:24:20;;;29881:10;29876:151;;29925:4;-1:-1:-1;;;;;29925:10:20;;:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;29970:17:20;;;;29907:30;;-1:-1:-1;;;;;;;;29959:28:20;;;;;;29951:65;;;;-1:-1:-1;;;29951:65:20;;28735:2:23;29951:65:20;;;28717:21:23;28774:2;28754:18;;;28747:30;28813:26;28793:18;;;28786:54;28857:18;;29951:65:20;28533:348:23;29951:65:20;29086:947;;;;;;;28986:1047;;;:::o;26266:1749::-;26368:7;;:32;;-1:-1:-1;;;26368:32:20;;26394:4;26368:32;;;3214:51:23;26347:18:20;;-1:-1:-1;;;;;26368:17:20;;;;3187:18:23;;26368:32:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;26470:14;;;;26433:9;;;;:34;;-1:-1:-1;;;26433:34:20;;26461:4;26433:34;;;3214:51:23;26347:53:20;;-1:-1:-1;26410:20:20;;-1:-1:-1;;;;;26433:19:20;;;;;;3187:18:23;;26433:34:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:51;;;;:::i;:::-;26410:74;;26495:10;26507;26521;26529:1;26521:7;:10::i;:::-;26557:7;;26494:37;;-1:-1:-1;26494:37:20;-1:-1:-1;26542:75:20;;-1:-1:-1;;;;;26542:37:20;26588:15;26606:10;26542:37;:75::i;:::-;26627:9;;;;:62;;-1:-1:-1;;;;;26627:22:20;26658:15;26676:12;26627:22;:62::i;:::-;26861:15;-1:-1:-1;;;;;26861:20:20;;26895:530;;;;;;;;26960:2;-1:-1:-1;;;;;26895:530:20;;;;;26988:2;-1:-1:-1;;;;;26895:530:20;;;;;5627:5;26895:530;;;;;;-1:-1:-1;;26895:530:20;;;;;;5881:6;26895:530;;;;;;27143:1;:15;;;:43;;27174:12;27143:43;;;27161:10;27143:43;26895:530;;;;27220:1;:15;;;:43;;27253:10;27220:43;;;27238:12;27220:43;26895:530;;;;27293:1;26895:530;;;;27324:1;26895:530;;;;27362:4;-1:-1:-1;;;;;26895:530:20;;;;;27395:15;26895:530;;;26861:574;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;-1:-1:-1;26861:574:20;;;;;;;;-1:-1:-1;;26861:574:20;;;;;;;;;;;;:::i;:::-;;;26857:1014;;27813:47;;;27848:1;30982:51:23;;;31064:2;31049:18;;31042:34;;;31092:18;;;31085:34;;;31150:2;31135:18;;31128:34;27813:47:20;;27829:9;;27813:47;;;;;;30969:3:23;27813:47:20;;;26857:1014;;;27515:21;;;;:10;:21;;;;;;;;:31;;;27580:6;;;;;27560;:17;;;;;;;:26;;-1:-1:-1;;;;;;27560:26:20;-1:-1:-1;;;;;27560:26:20;;;;;;;;;;27649:6;;27682:15;;;;27515:21;;27605:171;;27515:31;;27682;;27708:5;27682:31;;;27700:5;27682:31;27731:1;:15;;;:31;;27757:5;27731:31;;;27749:5;27731:31;27605:171;;;-1:-1:-1;;;;;31000:32:23;;;30982:51;;31064:2;31049:18;;31042:34;;;;31092:18;;;31085:34;31150:2;31135:18;;31128:34;30969:3;30954:19;27605:171:20;;;;;;;27436:351;;;;26857:1014;27896:7;;27881:66;;-1:-1:-1;;;;;27881:37:20;27927:15;27945:1;27881:37;:66::i;:::-;27957:9;;;;:51;;-1:-1:-1;;;;;27957:22:20;27988:15;28006:1;27957:22;:51::i;20172:1406::-;20277:14;20350:19;;;:8;:19;;;;;20277:14;;20404:19;20387:13;;;;;;:36;;;;;;;;:::i;:::-;;20379:67;;;;-1:-1:-1;;;20379:67:20;;22454:2:23;20379:67:20;;;22436:21:23;22493:2;22473:18;;;22466:30;-1:-1:-1;;;22512:18:23;;;22505:48;22570:18;;20379:67:20;22252:342:23;20379:67:20;20473:1;20464:6;:10;20456:34;;;;-1:-1:-1;;;20456:34:20;;22801:2:23;20456:34:20;;;22783:21:23;22840:2;22820:18;;;22813:30;-1:-1:-1;;;22859:18:23;;;22852:41;22910:18;;20456:34:20;22599:335:23;20456:34:20;20631:24;;;;:13;:24;;;;;;;;20656:10;20631:36;;;;;;;;:46;-1:-1:-1;20631:46:20;20623:74;;;;-1:-1:-1;;;20623:74:20;;31797:2:23;20623:74:20;;;31779:21:23;31836:2;31816:18;;;31809:30;-1:-1:-1;;;31855:18:23;;;31848:45;31910:18;;20623:74:20;31595:339:23;20623:74:20;20708:16;20727:131;20775:7;:17;;;20794:6;20802:7;:14;;:24;;;20828:7;:14;;:20;;;20727:34;:131::i;:::-;20708:150;;20868:19;20935:5;20902:7;:14;;:29;;;20891:8;:40;;;;:::i;:::-;20890:50;;;;:::i;:::-;20868:72;-1:-1:-1;20956:22:20;20868:72;20956:8;:22;:::i;:::-;20950:28;;21003:11;20996:3;:18;;20988:48;;;;-1:-1:-1;;;20988:48:20;;23141:2:23;20988:48:20;;;23123:21:23;23180:2;23160:18;;;23153:30;-1:-1:-1;;;23199:18:23;;;23192:47;23256:18;;20988:48:20;22939:341:23;20988:48:20;21097:27;;;;21134:19;;;:31;;-1:-1:-1;;;;;21097:27:20;;;;-1:-1:-1;21157:8:20;;21097:14;;21134:31;;21157:8;;21134:31;:::i;:::-;;;;;;;;21196:6;21175:7;:17;;;:27;;;;;;;:::i;:::-;;;;-1:-1:-1;;21212:24:20;;;;:13;:24;;;;;;;;21237:10;21212:36;;;;;;;:46;;21252:6;;21212:24;:46;;21252:6;;21212:46;:::i;:::-;;;;-1:-1:-1;;;;;;;21268:27:20;;;;;;:9;:27;;;;;:34;;21299:3;;21268:27;:34;;21299:3;;21268:34;:::i;:::-;;;;-1:-1:-1;;;;;;;21312:30:20;;;;;;:12;:30;;;;;:45;;21346:11;;21312:30;:45;;21346:11;;21312:45;:::i;:::-;;;;-1:-1:-1;;21368:20:20;;:49;;-1:-1:-1;;;21368:49:20;;21398:10;21368:49;;;13823:51:23;13890:18;;;13883:34;;;-1:-1:-1;;;;;21368:20:20;;;;:29;;13796:18:23;;21368:49:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;21523:19:20;;;;21544:17;;;;21433:138;;;23544:25:23;;;23600:2;23585:18;;23578:34;;;23628:18;;;23621:34;;;23686:2;23671:18;;23664:34;;;;23729:3;23714:19;;23707:35;21468:10:20;;21457:9;;21433:138;;23531:3:23;23516:19;21433:138:20;;;;;;;20310:1268;;;20172:1406;;;;;;:::o;33435:188::-;33504:6;33514:1;33504:11;33500:24;;33435:188;;:::o;33500:24::-;33534:7;33546:2;-1:-1:-1;;;;;33546:7:20;33561:6;33546:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;33533:39;;;33590:2;33582:34;;;;-1:-1:-1;;;33582:34:20;;32351:2:23;33582:34:20;;;32333:21:23;32390:2;32370:18;;;32363:30;-1:-1:-1;;;32409:18:23;;;32402:49;32468:18;;33582:34:20;32149:343:23;11205:1326:20;11328:14;;;;-1:-1:-1;;;;;11308:35:20;11271:17;11308:35;;;:19;:35;;;;;;;;11300:73;;;;-1:-1:-1;;;11300:73:20;;11970:2:23;11300:73:20;;;11952:21:23;12009:2;11989:18;;;11982:30;-1:-1:-1;;;12028:18:23;;;12021:55;12093:18;;11300:73:20;11768:349:23;11300:73:20;11383:77;11398:1;:11;;;11411:1;:11;;;11424:1;:7;;;11433:1;:10;;;11445:1;:14;;;11383;:77::i;:::-;11483:12;:14;;;:12;:14;;;:::i;:::-;;;;;11471:26;;11573:18;11611:1;:6;;;11619:1;:8;;;11629:1;:11;;;11650:4;11657:1;:13;;;11594:77;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;11814:27:20;11844:19;;;:8;:19;;;;;;;;;11928:20;;-1:-1:-1;;;;;;11928:20:20;;;-1:-1:-1;;;;;11928:20:20;;;;;;;;;11987:14;;;;-1:-1:-1;11958:19:20;;;:44;;;;;;;;;;;;;;12031:11;;;;12012:16;;;:30;;;12067:7;;;;12052:12;;;:22;;;12102:10;;;;12084:15;;;:28;;;12122:14;;;:27;;12139:10;12122:27;;;;;;12183:13;;;12159:21;;;:37;11928:20;12228:14;;;12206:19;;;:36;;;12275:20;;12252;;;:43;12305:13;;;:35;;-1:-1:-1;;12305:35:20;;;;;;;12501:13;;;;12356:168;;11928:20;;-1:-1:-1;11844:19:20;;;;12139:10;;11844:19;;12356:168;;;;11928:20;;11987:14;12031:11;12228:14;;12501:13;12356:168;:::i;:::-;;;;;;;;11290:1241;;;11205:1326;;;:::o;2011:153:1:-;2100:13;2093:20;;-1:-1:-1;;;;;;2093:20:1;;;2123:34;2148:8;2123:24;:34::i;2339:115:12:-;1350:19;:17;:19::i;:::-;2408:4:::1;2398:14:::0;;-1:-1:-1;;;;2398:14:12::1;-1:-1:-1::0;;;2398:14:12::1;::::0;;2427:20:::1;2434:12;735:10:10::0;;656:96;32095:248:20;-1:-1:-1;;;;;32205:19:20;;;;;;:12;:19;;;;;:36;;32228:13;;32205:19;:36;;32228:13;;32205:36;:::i;:::-;;;;-1:-1:-1;32280:21:20;;-1:-1:-1;32288:13:20;32280:5;:21;:::i;:::-;-1:-1:-1;;;;;32251:16:20;;;;;;;:9;:16;;;;;;;;:25;;;;;;;;;;;:50;;:25;;:16;:50;;;;;:::i;:::-;;;;-1:-1:-1;;;;;;;32311:16:20;;;;;;:9;:16;;;;;:25;;32331:5;;32311:16;:25;;32331:5;;32311:25;:::i;:::-;;;;-1:-1:-1;;;;;;32095:248:20:o;11108:238:16:-;11209:7;11263:76;11279:26;11296:8;11279:16;:26::i;:::-;:59;;;;;11337:1;11322:11;11309:25;;;;;:::i;:::-;11319:1;11316;11309:25;:29;11279:59;34911:9:17;34904:17;;34792:145;11263:76:16;11235:25;11242:1;11245;11248:11;11235:6;:25::i;:::-;:104;;;;:::i;3586:157:13:-;-1:-1:-1;;;;;;;;;;;4560:52:13;2407:1;4560:63;3644:93;;3696:30;;-1:-1:-1;;;3696:30:13;;;;;;;;;;;17104:1158:20;17351:17;;;;17378:24;;;;17404:20;;;;17282:9;;17214:14;;;;17308:126;;17351:17;17282:9;;17308:29;:126::i;:::-;17301:133;;17444:17;17490:7;:19;;;17464:7;:14;;:23;;;:45;;;;:::i;:::-;17444:65;;17530:9;17523:4;:16;17519:50;;;-1:-1:-1;17563:5:20;;-1:-1:-1;17541:28:20;;17519:50;17591:9;17584:4;:16;17580:639;;;17666:17;;;;17696:24;;;;17722:20;;;;17625:142;;17666:17;17685:9;;17744;17625:23;:142::i;:::-;17616:151;;18021:6;18031:1;18021:11;18017:36;;18042:1;18045;18048:4;18034:19;;;;;;;;;18017:36;18121:17;;;;18148:24;;;;18174:20;;;;18074:134;;18121:17;18140:6;;18074:29;:134::i;:::-;18067:141;;17580:639;-1:-1:-1;18250:4:20;;-1:-1:-1;17104:1158:20;;;;;;:::o;18549:365::-;18653:37;;-1:-1:-1;;;18653:37:20;;18684:4;18653:37;;;3214:51:23;18629:21:20;;-1:-1:-1;;;;;18653:22:20;;;;;3187:18:23;;18653:37:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;18629:61;-1:-1:-1;18700:63:20;-1:-1:-1;;;;;18700:29:20;;18730:10;18750:4;18757:5;18700:29;:63::i;:::-;18794:37;;-1:-1:-1;;;18794:37:20;;18825:4;18794:37;;;3214:51:23;18851:5:20;;18834:13;;-1:-1:-1;;;;;18794:22:20;;;;;3187:18:23;;18794:37:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:53;;;;:::i;:::-;:62;18773:134;;;;-1:-1:-1;;;18773:134:20;;34269:2:23;18773:134:20;;;34251:21:23;34308:2;34288:18;;;34281:30;34347:27;34327:18;;;34320:55;34392:18;;18773:134:20;34067:349:23;8373:1244:9;8600:4;8594:11;-1:-1:-1;;;8467:12:9;8618:22;;;-1:-1:-1;;;;;8666:24:9;;8660:4;8653:38;8711:4;8704:19;;;8467:12;8787:4;8467:12;8775:4;8467:12;;8759:5;8752;8747:45;8736:56;;9004:1;8997:4;8991:11;8988:18;8979:7;8975:32;8965:606;;9136:6;9126:7;9119:15;9115:28;9112:165;;;9192:16;9186:4;9181:3;9166:43;9242:16;9237:3;9230:29;9112:165;9553:1;9545:5;9533:18;9530:25;9511:16;9504:24;9500:56;9491:7;9487:70;9476:81;;8965:606;9591:4;9584:17;-1:-1:-1;8373:1244:9;;-1:-1:-1;;;;8373:1244:9:o;3858:728:19:-;4040:7;;4193:37;4205:6;1118:25;991:4;;1118:25;:::i;:::-;4220:9;4193:11;:37::i;:::-;:41;;4233:1;4193:41;:::i;:::-;4180:54;;4253:10;4248:2;:15;4244:36;;;-1:-1:-1;4270:10:19;4244:36;4290:10;4314:247;4326:2;4321;:7;4314:247;;;4344:11;4374:1;4359:7;4364:2;4359;:7;:::i;:::-;:11;;4369:1;4359:11;:::i;:::-;4358:17;;;;:::i;:::-;4344:31;;4451:6;4393:54;4410:13;4425:3;4430:9;4441:5;4393:16;:54::i;:::-;:64;4389:162;;4482:3;4477:8;;4389:162;;;4529:7;4535:1;4529:3;:7;:::i;:::-;4524:12;;4389:162;4330:231;4314:247;;2078:126:12;1796:7;;-1:-1:-1;;;1796:7:12;;;;2136:62;;2172:15;;-1:-1:-1;;;2172:15:12;;;;;;;;;;;1027:550:16;1088:12;;-1:-1:-1;;1471:1:16;1468;1461:20;1501:9;;;;1549:11;;;1535:12;;;;1531:30;;;;;1027:550;-1:-1:-1;;1027:550:16:o;1776:194:11:-;1881:10;1875:4;1868:24;1918:4;1912;1905:18;1949:4;1943;1936:18;20859:5181:16;20907:7;21025:1;21020;:6;21016:53;;-1:-1:-1;21053:1:16;20859:5181::o;21016:53::-;22009:1;22037;-1:-1:-1;;;22057:16:16;;22053:92;;22100:3;22093:10;;;;;22128:2;22121:9;22053:92;-1:-1:-1;;;22162:2:16;:15;22158:90;;22204:2;22197:9;;;;;22231:2;22224:9;22158:90;22272:7;22265:2;:15;22261:90;;22307:2;22300:9;;;;;22334:2;22327:9;22261:90;22375:7;22368:2;:15;22364:89;;22410:2;22403:9;;;;;22437:1;22430:8;22364:89;22477:6;22470:2;:14;22466:87;;22511:1;22504:8;;;;;22537:1;22530:8;22466:87;22577:6;22570:2;:14;22566:87;;22611:1;22604:8;;;;;22637:1;22630:8;22566:87;22677:6;22670:2;:14;22666:61;;22711:1;22704:8;22666:61;23153:1;:6;23164:1;23152:13;;;;;25063:1;23152:13;25063:6;;;;:::i;:::-;;25058:2;:11;25057:18;;25052:23;;25183:1;25176:2;25172:1;:6;;;;;:::i;:::-;;25167:2;:11;25166:18;;25161:23;;25294:1;25287:2;25283:1;:6;;;;;:::i;:::-;;25278:2;:11;25277:18;;25272:23;;25403:1;25396:2;25392:1;:6;;;;;:::i;:::-;;25387:2;:11;25386:18;;25381:23;;25513:1;25506:2;25502:1;:6;;;;;:::i;:::-;;25497:2;:11;25496:18;;25491:23;;25623:1;25616:2;25612:1;:6;;;;;:::i;:::-;;25607:2;:11;25606:18;;25601:23;;25995:28;26020:2;26016:1;:6;;;;;:::i;:::-;;26011:11;;;34792:145:17;25995:28:16;25990:33;;;20859:5181;-1:-1:-1;;;20859:5181:16:o;5098:367:9:-;5190:42;5203:5;5210:7;5219:5;5226;5190:12;:42::i;:::-;5185:274;;5253:37;5266:5;5273:7;5282:1;5285:4;5253:12;:37::i;:::-;5248:91;;5299:40;;-1:-1:-1;;;5299:40:9;;-1:-1:-1;;;;;3232:32:23;;5299:40:9;;;3214:51:23;3187:18;;5299:40:9;3053:218:23;5248:91:9;5358:41;5371:5;5378:7;5387:5;5394:4;5358:12;:41::i;2647:422:19:-;2812:7;;2846:22;2862:6;2846:13;:22;:::i;:::-;2831:37;-1:-1:-1;2878:14:19;2895:37;2907:9;2918:6;1118:25;991:4;;1118:25;:::i;:::-;2895:11;:37::i;:::-;2878:54;-1:-1:-1;2942:13:19;2958:73;2970:5;2998:6;2987:8;2991:4;2987:1;:8;:::i;:::-;:17;;;;:::i;:::-;2977:28;;:6;:28;:::i;:::-;873:4;1118:25;873:4;;1118:25;:::i;:::-;3007:9;;:1;:9;:::i;:::-;:23;;;;:::i;2958:73::-;2942:89;-1:-1:-1;3048:14:19;2942:89;3048:6;:14;:::i;:::-;3041:21;2647:422;-1:-1:-1;;;;;;;;2647:422:19:o;2912:187:0:-;2985:16;3004:6;;-1:-1:-1;;;;;3020:17:0;;;-1:-1:-1;;;;;;3020:17:0;;;;;;3052:40;;3004:6;;;;;;;3052:40;;2985:16;3052:40;2975:124;2912:187;:::o;32337:122:16:-;32405:4;32446:1;32434:8;32428:15;;;;;;;;:::i;:::-;:19;;;;:::i;:::-;:24;;32451:1;32428:24;32421:31;;32337:122;;;:::o;1662:232:9:-;1767:47;1785:5;1792:4;1798:2;1802:5;1809:4;1767:17;:47::i;:::-;1762:126;;1837:40;;-1:-1:-1;;;1837:40:9;;-1:-1:-1;;;;;3232:32:23;;1837:40:9;;;3214:51:23;3187:18;;1837:40:9;3053:218:23;1762:126:9;1662:232;;;;:::o;12059:1252::-;12289:4;12283:11;-1:-1:-1;;;12157:12:9;12307:22;;;-1:-1:-1;;;;;12355:29:9;;12349:4;12342:43;12405:4;12398:19;;;12157:12;12481:4;12157:12;12469:4;12157:12;;12453:5;12446;12441:45;12430:56;;12698:1;12691:4;12685:11;12682:18;12673:7;12669:32;12659:606;;12830:6;12820:7;12813:15;12809:28;12806:165;;;12886:16;12880:4;12875:3;12860:43;12936:16;12931:3;12924:29;10165:1393;10460:4;10454:11;-1:-1:-1;;;10323:12:9;10478:22;;;-1:-1:-1;;;;;10526:26:9;;;10520:4;10513:40;10579:24;;10573:4;10566:38;10624:4;10617:19;;;10323:12;10700:4;10323:12;10688:4;10323:12;;10672:5;10665;10660:45;10649:56;;10917:1;10910:4;10904:11;10901:18;10892:7;10888:32;10878:606;;11049:6;11039:7;11032:15;11028:28;11025:165;;;11105:16;11099:4;11094:3;11079:43;11155:16;11150:3;11143:29;11025:165;11466:1;11458:5;11446:18;11443:25;11424:16;11417:24;11413:56;11404:7;11400:70;11389:81;;10878:606;11504:4;11497:17;-1:-1:-1;11540:1:9;11534:4;11527:15;10165:1393;;-1:-1:-1;;;;;10165:1393:9:o;-1:-1:-1:-;;;;;;;;:::o;363:131:23:-;-1:-1:-1;;;;;438:31:23;;428:42;;418:70;;484:1;481;474:12;499:134;567:20;;596:31;567:20;596:31;:::i;638:247::-;697:6;750:2;738:9;729:7;725:23;721:32;718:52;;;766:1;763;756:12;718:52;805:9;792:23;824:31;849:5;824:31;:::i;1082:180::-;1141:6;1194:2;1182:9;1173:7;1169:23;1165:32;1162:52;;;1210:1;1207;1200:12;1162:52;-1:-1:-1;1233:23:23;;1082:180;-1:-1:-1;1082:180:23:o;1449:248::-;1517:6;1525;1578:2;1566:9;1557:7;1553:23;1549:32;1546:52;;;1594:1;1591;1584:12;1546:52;-1:-1:-1;;1617:23:23;;;1687:2;1672:18;;;1659:32;;-1:-1:-1;1449:248:23:o;2222:118::-;2308:5;2301:13;2294:21;2287:5;2284:32;2274:60;;2330:1;2327;2320:12;2345:382;2410:6;2418;2471:2;2459:9;2450:7;2446:23;2442:32;2439:52;;;2487:1;2484;2477:12;2439:52;2526:9;2513:23;2545:31;2570:5;2545:31;:::i;:::-;2595:5;-1:-1:-1;2652:2:23;2637:18;;2624:32;2665:30;2624:32;2665:30;:::i;:::-;2714:7;2704:17;;;2345:382;;;;;:::o;2732:199::-;2823:6;2876:3;2864:9;2855:7;2851:23;2847:33;2844:53;;;2893:1;2890;2883:12;2844:53;-1:-1:-1;2916:9:23;2732:199;-1:-1:-1;2732:199:23:o;3276:127::-;3337:10;3332:3;3328:20;3325:1;3318:31;3368:4;3365:1;3358:15;3392:4;3389:1;3382:15;3408:240;3492:1;3485:5;3482:12;3472:143;;3537:10;3532:3;3528:20;3525:1;3518:31;3572:4;3569:1;3562:15;3600:4;3597:1;3590:15;3472:143;3624:18;;3408:240::o;3653:1177::-;3983:13;;-1:-1:-1;;;;;3979:39:23;3961:58;;4066:4;4054:17;;;4048:24;3948:3;3933:19;;;4081:62;;4122:20;;4048:24;-1:-1:-1;;;;;3010:31:23;2998:44;;2936:112;4081:62;;4199:4;4191:6;4187:17;4181:24;4174:4;4163:9;4159:20;4152:54;4262:4;4254:6;4250:17;4244:24;4237:4;4226:9;4222:20;4215:54;4325:4;4317:6;4313:17;4307:24;4300:4;4289:9;4285:20;4278:54;4381:4;4373:6;4369:17;4363:24;4396:64;4454:4;4443:9;4439:20;4423:14;-1:-1:-1;;;;;3010:31:23;2998:44;;2936:112;4396:64;;4516:4;4508:6;4504:17;4498:24;4491:4;4480:9;4476:20;4469:54;4579:4;4571:6;4567:17;4561:24;4554:4;4543:9;4539:20;4532:54;4605:6;4665:2;4657:6;4653:15;4647:22;4642:2;4631:9;4627:18;4620:50;;4679:57;4731:3;4720:9;4716:19;4708:6;4679:57;:::i;:::-;4767:3;4752:19;;4745:35;;;;4811:3;4796:19;4789:35;3653:1177;;-1:-1:-1;;3653:1177:23:o;4835:316::-;4912:6;4920;4928;4981:2;4969:9;4960:7;4956:23;4952:32;4949:52;;;4997:1;4994;4987:12;4949:52;-1:-1:-1;;5020:23:23;;;5090:2;5075:18;;5062:32;;-1:-1:-1;5141:2:23;5126:18;;;5113:32;;4835:316;-1:-1:-1;4835:316:23:o;5364:393::-;5456:6;5509:2;5497:9;5488:7;5484:23;5480:32;5477:52;;;5525:1;5522;5515:12;5477:52;5565:9;5552:23;5598:18;5590:6;5587:30;5584:50;;;5630:1;5627;5620:12;5584:50;5653:22;;5709:3;5691:16;;;5687:26;5684:46;;;5726:1;5723;5716:12;6572:348;6624:8;6634:6;6688:3;6681:4;6673:6;6669:17;6665:27;6655:55;;6706:1;6703;6696:12;6655:55;-1:-1:-1;6729:20:23;;6772:18;6761:30;;6758:50;;;6804:1;6801;6794:12;6758:50;6841:4;6833:6;6829:17;6817:29;;6893:3;6886:4;6877:6;6869;6865:19;6861:30;6858:39;6855:59;;;6910:1;6907;6900:12;6855:59;6572:348;;;;;:::o;6925:1146::-;7047:6;7055;7063;7071;7079;7087;7095;7148:3;7136:9;7127:7;7123:23;7119:33;7116:53;;;7165:1;7162;7155:12;7116:53;7205:9;7192:23;7234:18;7275:2;7267:6;7264:14;7261:34;;;7291:1;7288;7281:12;7261:34;7330:59;7381:7;7372:6;7361:9;7357:22;7330:59;:::i;:::-;7408:8;;-1:-1:-1;7304:85:23;-1:-1:-1;7496:2:23;7481:18;;7468:32;;-1:-1:-1;7512:16:23;;;7509:36;;;7541:1;7538;7531:12;7509:36;7580:61;7633:7;7622:8;7611:9;7607:24;7580:61;:::i;:::-;7660:8;;-1:-1:-1;7554:87:23;-1:-1:-1;7748:2:23;7733:18;;7720:32;;-1:-1:-1;7764:16:23;;;7761:36;;;7793:1;7790;7783:12;7761:36;;7832:61;7885:7;7874:8;7863:9;7859:24;7832:61;:::i;:::-;7912:8;;-1:-1:-1;7806:87:23;-1:-1:-1;;7997:2:23;7982:18;;7969:32;8010:31;7969:32;8010:31;:::i;:::-;8060:5;8050:15;;;6925:1146;;;;;;;;;;:::o;8076:403::-;8159:6;8167;8220:2;8208:9;8199:7;8195:23;8191:32;8188:52;;;8236:1;8233;8226:12;8188:52;8275:9;8262:23;8294:31;8319:5;8294:31;:::i;:::-;8344:5;-1:-1:-1;8401:2:23;8386:18;;8373:32;8414:33;8373:32;8414:33;:::i;9169:315::-;9237:6;9245;9298:2;9286:9;9277:7;9273:23;9269:32;9266:52;;;9314:1;9311;9304:12;9266:52;9350:9;9337:23;9327:33;;9410:2;9399:9;9395:18;9382:32;9423:31;9448:5;9423:31;:::i;9489:544::-;9575:6;9583;9591;9599;9652:2;9640:9;9631:7;9627:23;9623:32;9620:52;;;9668:1;9665;9658:12;9620:52;9704:9;9691:23;9681:33;;9761:2;9750:9;9746:18;9733:32;9723:42;;9816:2;9805:9;9801:18;9788:32;9843:18;9835:6;9832:30;9829:50;;;9875:1;9872;9865:12;9829:50;9914:59;9965:7;9956:6;9945:9;9941:22;9914:59;:::i;:::-;9489:544;;;;-1:-1:-1;9992:8:23;-1:-1:-1;;;;9489:544:23:o;10381:127::-;10442:10;10437:3;10433:20;10430:1;10423:31;10473:4;10470:1;10463:15;10497:4;10494:1;10487:15;10513:168;10586:9;;;10617;;10634:15;;;10628:22;;10614:37;10604:71;;10655:18;;:::i;10686:127::-;10747:10;10742:3;10738:20;10735:1;10728:31;10778:4;10775:1;10768:15;10802:4;10799:1;10792:15;10818:120;10858:1;10884;10874:35;;10889:18;;:::i;:::-;-1:-1:-1;10923:9:23;;10818:120::o;11288:128::-;11355:9;;;11376:11;;;11373:37;;;11390:18;;:::i;12122:642::-;12297:5;12284:19;12312:33;12337:7;12312:33;:::i;:::-;12374:11;;-1:-1:-1;;;;;;12370:54:23;-1:-1:-1;;;;;12426:33:23;;;;12367:93;12354:107;;12515:2;12504:14;;12491:28;12456:1;12477:12;;12470:50;12574:2;12563:14;;12550:28;12546:1;12536:12;;12529:50;12633:2;12622:14;;12609:28;12605:1;12595:12;;12588:50;12692:3;12681:15;;12668:29;12664:1;12654:12;;12647:51;12447:3;12741:15;;;;12728:29;12724:1;12714:12;;;12707:51;12122:642::o;13460:184::-;13530:6;13583:2;13571:9;13562:7;13558:23;13554:32;13551:52;;;13599:1;13596;13589:12;13551:52;-1:-1:-1;13622:16:23;;13460:184;-1:-1:-1;13460:184:23:o;14402:251::-;14472:6;14525:2;14513:9;14504:7;14500:23;14496:32;14493:52;;;14541:1;14538;14531:12;14493:52;14573:9;14567:16;14592:31;14617:5;14592:31;:::i;14658:125::-;14723:9;;;14744:10;;;14741:36;;;14757:18;;:::i;15134:127::-;15195:10;15190:3;15186:20;15183:1;15176:31;15226:4;15223:1;15216:15;15250:4;15247:1;15240:15;15266:250;15333:2;15327:9;15375:6;15363:19;;15412:18;15397:34;;15433:22;;;15394:62;15391:88;;;15459:18;;:::i;:::-;15495:2;15488:22;15266:250;:::o;15521:719::-;15564:5;15617:3;15610:4;15602:6;15598:17;15594:27;15584:55;;15635:1;15632;15625:12;15584:55;15671:6;15658:20;15697:18;15734:2;15730;15727:10;15724:36;;;15740:18;;:::i;:::-;15815:2;15809:9;15783:2;15869:13;;-1:-1:-1;;15865:22:23;;;15889:2;15861:31;15857:40;15845:53;;;15913:18;;;15933:22;;;15910:46;15907:72;;;15959:18;;:::i;:::-;15999:10;15995:2;15988:22;16034:2;16026:6;16019:18;16080:3;16073:4;16068:2;16060:6;16056:15;16052:26;16049:35;16046:55;;;16097:1;16094;16087:12;16046:55;16161:2;16154:4;16146:6;16142:17;16135:4;16127:6;16123:17;16110:54;16208:1;16201:4;16196:2;16188:6;16184:15;16180:26;16173:37;16228:6;16219:15;;;;;;15521:719;;;;:::o;16245:1264::-;16359:9;16418:6;16410:5;16394:14;16390:26;16386:39;16383:59;;;16438:1;16435;16428:12;16383:59;16466:17;;:::i;:::-;16519:5;16506:19;16544:18;16585:2;16577:6;16574:14;16571:34;;;16601:1;16598;16591:12;16571:34;16630:53;16668:14;16659:6;16652:5;16648:18;16630:53;:::i;:::-;16621:7;16614:70;16733:2;16726:5;16722:14;16709:28;16693:44;;16762:2;16752:8;16749:16;16746:36;;;16778:1;16775;16768:12;16746:36;16816:55;16856:14;16845:8;16838:5;16834:20;16816:55;:::i;:::-;16811:2;16802:7;16798:16;16791:81;16921:2;16914:5;16910:14;16897:28;16881:44;;16950:2;16940:8;16937:16;16934:36;;;16966:1;16963;16956:12;16934:36;;17004:55;17044:14;17033:8;17026:5;17022:20;17004:55;:::i;:::-;16999:2;16990:7;16986:16;16979:81;;17118:2;17111:5;17107:14;17094:28;17089:2;17080:7;17076:16;17069:54;17158:35;17188:3;17181:5;17177:15;17158:35;:::i;:::-;17152:3;17143:7;17139:17;17132:62;17253:3;17246:5;17242:15;17229:29;17223:3;17214:7;17210:17;17203:56;17318:3;17311:5;17307:15;17294:29;17288:3;17279:7;17275:17;17268:56;17383:3;17376:5;17372:15;17359:29;17353:3;17344:7;17340:17;17333:56;17408:3;17469:2;17462:5;17458:14;17445:28;17440:2;17431:7;17427:16;17420:54;;17496:7;17483:20;;;16245:1264;;;:::o;18778:245::-;18857:6;18865;18918:2;18906:9;18897:7;18893:23;18889:32;18886:52;;;18934:1;18931;18924:12;18886:52;-1:-1:-1;;18957:16:23;;19013:2;18998:18;;;18992:25;18957:16;;18992:25;;-1:-1:-1;18778:245:23:o;25851:163::-;25929:13;;25982:6;25971:18;;25961:29;;25951:57;;26004:1;26001;25994:12;26019:952;26133:6;26141;26149;26157;26165;26173;26181;26234:3;26222:9;26213:7;26209:23;26205:33;26202:53;;;26251:1;26248;26241:12;26202:53;26283:9;26277:16;26302:31;26327:5;26302:31;:::i;:::-;26352:5;26342:15;;;26402:2;26391:9;26387:18;26381:25;26451:7;26448:1;26437:22;26428:7;26425:35;26415:63;;26474:1;26471;26464:12;26415:63;26497:7;-1:-1:-1;26523:48:23;26567:2;26552:18;;26523:48;:::i;:::-;26513:58;;26590:48;26634:2;26623:9;26619:18;26590:48;:::i;:::-;26580:58;;26657:49;26701:3;26690:9;26686:19;26657:49;:::i;:::-;26647:59;;26751:3;26740:9;26736:19;26730:26;26800:4;26791:7;26787:18;26778:7;26775:31;26765:59;;26820:1;26817;26810:12;26765:59;26895:3;26880:19;;26874:26;26843:7;;-1:-1:-1;26909:30:23;26874:26;26909:30;:::i;27285:422::-;27326:3;27364:5;27358:12;27391:6;27386:3;27379:19;27416:1;27426:162;27440:6;27437:1;27434:13;27426:162;;;27502:4;27558:13;;;27554:22;;27548:29;27530:11;;;27526:20;;27519:59;27455:12;27426:162;;;27430:3;27633:1;27626:4;27617:6;27612:3;27608:16;27604:27;27597:38;27696:4;27689:2;27685:7;27680:2;27672:6;27668:15;27664:29;27659:3;27655:39;27651:50;27644:57;;;27285:422;;;;:::o;27712:568::-;-1:-1:-1;;;;;28001:15:23;;;27983:34;;28060:14;;28053:22;28048:2;28033:18;;28026:50;28107:2;28092:18;;28085:34;;;28155:15;;28150:2;28135:18;;28128:43;27963:3;28202;28187:19;;28180:32;;;27926:4;;28229:45;;28254:19;;28246:6;28229:45;:::i;28982:1246::-;29212:13;;-1:-1:-1;;;;;3010:31:23;2998:44;;29172:3;29157:19;;29284:4;29276:6;29272:17;29266:24;29299:62;29355:4;29344:9;29340:20;29326:12;-1:-1:-1;;;;;3010:31:23;2998:44;;2936:112;29299:62;;29410:4;29402:6;29398:17;29392:24;29425:55;29474:4;29463:9;29459:20;29443:14;8953:8;8942:20;8930:33;;8877:92;29425:55;;29529:4;29521:6;29517:17;29511:24;29544:54;29592:4;29581:9;29577:20;29561:14;28961:1;28950:20;28938:33;;28886:91;29544:54;;29647:4;29639:6;29635:17;29629:24;29662:54;29710:4;29699:9;29695:20;29679:14;28961:1;28950:20;28938:33;;28886:91;29662:54;;29772:4;29764:6;29760:17;29754:24;29747:4;29736:9;29732:20;29725:54;29835:4;29827:6;29823:17;29817:24;29810:4;29799:9;29795:20;29788:54;29898:4;29890:6;29886:17;29880:24;29873:4;29862:9;29858:20;29851:54;29924:6;29984:2;29976:6;29972:15;29966:22;29961:2;29950:9;29946:18;29939:50;;30008:6;30063:2;30055:6;30051:15;30045:22;30076:62;30134:2;30123:9;30119:18;30103:14;-1:-1:-1;;;;;3010:31:23;2998:44;;2936:112;30076:62;-1:-1:-1;;30157:6:23;30205:15;;;30199:22;30179:18;;;;30172:50;28982:1246;:::o;30233:489::-;30330:6;30338;30346;30354;30407:3;30395:9;30386:7;30382:23;30378:33;30375:53;;;30424:1;30421;30414:12;30375:53;30453:9;30447:16;30437:26;;30506:2;30495:9;30491:18;30485:25;-1:-1:-1;;;;;30543:5:23;30539:46;30532:5;30529:57;30519:85;;30600:1;30597;30590:12;30519:85;30668:2;30653:18;;30647:25;30712:2;30697:18;;;30691:25;30233:489;;30623:5;;-1:-1:-1;30233:489:23;-1:-1:-1;;;30233:489:23:o;32497:135::-;32536:3;32557:17;;;32554:43;;32577:18;;:::i;:::-;-1:-1:-1;32624:1:23;32613:13;;32497:135::o;32637:714::-;32938:3;32927:9;32920:22;32901:4;32965:45;33005:3;32994:9;32990:19;32982:6;32965:45;:::i;:::-;33058:9;33050:6;33046:22;33041:2;33030:9;33026:18;33019:50;33092:32;33117:6;33109;33092:32;:::i;:::-;33155:2;33140:18;;33133:34;;;-1:-1:-1;;;;;33203:32:23;;33198:2;33183:18;;33176:60;33273:22;;;33267:3;33252:19;;33245:51;33078:46;-1:-1:-1;33313:32:23;33078:46;33330:6;33313:32;:::i;33356:706::-;33636:4;33682:1;33678;33673:3;33669:11;33665:19;33723:2;33715:6;33711:15;33700:9;33693:34;33775:2;33767:6;33763:15;33758:2;33747:9;33743:18;33736:43;;33815:6;33810:2;33799:9;33795:18;33788:34;33858:6;33853:2;33842:9;33838:18;33831:34;33902:6;33896:3;33885:9;33881:19;33874:35;33946:6;33940:3;33929:9;33925:19;33918:35;33990:3;33984;33973:9;33969:19;33962:32;34011:45;34051:3;34040:9;34036:19;34028:6;34011:45;:::i;34421:157::-;34451:1;34485:4;34482:1;34478:12;34509:3;34499:37;;34516:18;;:::i;:::-;34568:3;34561:4;34558:1;34554:12;34550:22;34545:27;;;34421:157;;;;:::o",
    "linkReferences": {},
    "immutableReferences": {
      "5970": [
        {
          "start": 2025,
          "length": 32
        },
        {
          "start": 5137,
          "length": 32
        },
        {
          "start": 7408,
          "length": 32
        },
        {
          "start": 13087,
          "length": 32
        },
        {
          "start": 13146,
          "length": 32
        },
        {
          "start": 13186,
          "length": 32
        },
        {
          "start": 13774,
          "length": 32
        },
        {
          "start": 13833,
          "length": 32
        }
      ],
      "5998": [
        {
          "start": 727,
          "length": 32
        },
        {
          "start": 1274,
          "length": 32
        },
        {
          "start": 5903,
          "length": 32
        },
        {
          "start": 6042,
          "length": 32
        },
        {
          "start": 9905,
          "length": 32
        },
        {
          "start": 10394,
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
    "buyTokensWithETH(uint256,uint256)": "1ae9898f",
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
    "launch(string,string,string,address)": "ac813916",
    "launchPresets(address)": "8663efa4",
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
    "sellTokensForETH(uint256,uint256,uint256)": "5e0a4acd",
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
    "weth()": "3fc8cef3",
    "withdrawProceeds(uint256)": "d9f1aed9"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.24+commit.e11b9ed9\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"feeRecipient_\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"defaultFeeBps_\",\"type\":\"uint256\"},{\"internalType\":\"contract INonfungiblePositionManager\",\"name\":\"positionManager_\",\"type\":\"address\"},{\"internalType\":\"contract IWETH9\",\"name\":\"weth_\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"EnforcedPause\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpectedPause\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnableInvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"OwnableUnauthorizedAccount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"totalRaised\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"totalSold\",\"type\":\"uint256\"}],\"name\":\"AuctionCompleted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"creator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"paymentToken\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"slope\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maxRaise\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"liquidityBps\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"metadataURI\",\"type\":\"string\"}],\"name\":\"AuctionCreated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"pool\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"positionId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenLiquidity\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"paymentLiquidity\",\"type\":\"uint256\"}],\"name\":\"AuctionMigrated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Claimed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"previous\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"current\",\"type\":\"uint256\"}],\"name\":\"DefaultFeeBpsUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"previous\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"current\",\"type\":\"uint256\"}],\"name\":\"DefaultLpFeeShareBpsUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"paymentToken\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maxSupply\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"slope\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maxRaise\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"liquidityBps\",\"type\":\"uint256\"}],\"name\":\"LaunchPresetUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"creatorTokenFees\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"creatorPaymentFees\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"protocolTokenFees\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"protocolPaymentFees\",\"type\":\"uint256\"}],\"name\":\"LpFeesCollected\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferStarted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Paused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"allowed\",\"type\":\"bool\"}],\"name\":\"PaymentTokenAllowedUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"creator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"ProceedsWithdrawn\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previous\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"current\",\"type\":\"address\"}],\"name\":\"ProtocolFeeRecipientUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"ProtocolFeesClaimed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Swept\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"buyer\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"cost\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"protocolFee\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newTotalRaised\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newTotalSold\",\"type\":\"uint256\"}],\"name\":\"TokensPurchased\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"seller\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"protocolFee\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newTotalRaised\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newTotalSold\",\"type\":\"uint256\"}],\"name\":\"TokensSold\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Unpaused\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"MAX_FEE_BPS\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MAX_LP_FEE_SHARE_BPS\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MIN_LIQUIDITY_BPS\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"POOL_FEE\",\"outputs\":[{\"internalType\":\"uint24\",\"name\":\"\",\"type\":\"uint24\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"auctionCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"auctions\",\"outputs\":[{\"components\":[{\"internalType\":\"contract AuctionToken\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"paymentToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"basePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"slope\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"maxRaise\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"creator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"protocolFeeBps\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"liquidityBps\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpFeeShareBps\",\"type\":\"uint256\"}],\"internalType\":\"struct TokenAuction.AuctionConfig\",\"name\":\"config\",\"type\":\"tuple\"},{\"internalType\":\"enum TokenAuction.AuctionState\",\"name\":\"state\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"totalRaised\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalSold\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"maxCost\",\"type\":\"uint256\"}],\"name\":\"buyTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"buyTokensWithETH\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"claim\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"claimProtocolFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"claimable\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"}],\"name\":\"collectFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenFees\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"paymentFees\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"metadataURI\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"maxSupply\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"paymentToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"basePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"slope\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"maxRaise\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"liquidityBps\",\"type\":\"uint256\"}],\"internalType\":\"struct TokenAuction.AuctionParams\",\"name\":\"p\",\"type\":\"tuple\"}],\"name\":\"createAuction\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"custodied\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"defaultFeeBps\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"defaultLpFeeShareBps\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"getBuyCost\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"cost\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"fee\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"}],\"name\":\"getSpotPrice\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"metadataURI\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"paymentToken\",\"type\":\"address\"}],\"name\":\"launch\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"launchPresets\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"paymentToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"maxSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"basePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"slope\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"maxRaise\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"liquidityBps\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"}],\"name\":\"migrate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"paused\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"paymentTokenAllowed\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pendingOwner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"poolOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"positionId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"positionManager\",\"outputs\":[{\"internalType\":\"contract INonfungiblePositionManager\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"proceedsWithdrawn\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"protocolFeeRecipient\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"protocolFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minProceeds\",\"type\":\"uint256\"}],\"name\":\"sellTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minProceeds\",\"type\":\"uint256\"}],\"name\":\"sellTokensForETH\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"feeBps\",\"type\":\"uint256\"}],\"name\":\"setDefaultFeeBps\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shareBps\",\"type\":\"uint256\"}],\"name\":\"setDefaultLpFeeShareBps\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"paymentToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"maxSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"basePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"slope\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"maxRaise\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"liquidityBps\",\"type\":\"uint256\"}],\"internalType\":\"struct TokenAuction.LaunchPreset\",\"name\":\"preset\",\"type\":\"tuple\"}],\"name\":\"setLaunchPreset\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"allowed\",\"type\":\"bool\"}],\"name\":\"setPaymentTokenAllowed\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"}],\"name\":\"setProtocolFeeRecipient\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"sweep\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"amount0Delta\",\"type\":\"int256\"},{\"internalType\":\"int256\",\"name\":\"amount1Delta\",\"type\":\"int256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"uniswapV3SwapCallback\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"unpause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"userPurchases\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"weth\",\"outputs\":[{\"internalType\":\"contract IWETH9\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"auctionId\",\"type\":\"uint256\"}],\"name\":\"withdrawProceeds\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}],\"devdoc\":{\"errors\":{\"EnforcedPause()\":[{\"details\":\"The operation failed because the contract is paused.\"}],\"ExpectedPause()\":[{\"details\":\"The operation failed because the contract is not paused.\"}],\"OwnableInvalidOwner(address)\":[{\"details\":\"The owner is not a valid owner account. (eg. `address(0)`)\"}],\"OwnableUnauthorizedAccount(address)\":[{\"details\":\"The caller account is not authorized to perform an operation.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC-20 token failed.\"}]},\"events\":{\"Paused(address)\":{\"details\":\"Emitted when the pause is triggered by `account`.\"},\"Unpaused(address)\":{\"details\":\"Emitted when the pause is lifted by `account`.\"}},\"kind\":\"dev\",\"methods\":{\"acceptOwnership()\":{\"details\":\"The new owner accepts the ownership transfer.\"},\"buyTokens(uint256,uint256,uint256)\":{\"details\":\"A purchase that would overshoot `maxRaise` is filled with what the        remaining budget buys and closes the auction, so the buyer may        receive less than `amount`; `TokensPurchased` reports the actual        amount.\",\"params\":{\"maxCost\":\"Most the buyer will pay in total (cost + protocol fee), in        payment-token units. The price rises with every purchase, so a        quote can be stale by the time a transaction lands; this bound        makes the buy revert instead of filling at a worse price.\"}},\"migrate(uint256)\":{\"details\":\"Opens (or corrects) the pool at the auction's final price, adds         full-range liquidity from the reserved share of the raise plus         newly minted tokens, and keeps the position NFT forever. Never         leaves tokens permanently locked: if there is nothing to pair, or         Uniswap rejects the position, transfers are unlocked anyway and         the reserved funds are credited to the creator to `claim`.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"paused()\":{\"details\":\"Returns true if the contract is paused, and false otherwise.\"},\"pendingOwner()\":{\"details\":\"Returns the address of the pending owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"sellTokens(uint256,uint256,uint256)\":{\"params\":{\"minProceeds\":\"Least the seller will accept after the fee. Like        `maxCost` on purchases, it protects against the price moving        between quote and transaction.\"}},\"transferOwnership(address)\":{\"details\":\"Starts the ownership transfer of the contract to a new account. Replaces the pending transfer if there is one. Can only be called by the current owner. Setting `newOwner` to the zero address is allowed; this can be used to cancel an initiated ownership transfer.\"},\"withdrawProceeds(uint256)\":{\"details\":\"Callable once, by the creator, once the auction has completed,      before or after migration. Pays the part of the raise not reserved      for liquidity. Protocol fees are routed to the fee recipient at buy      time, so the contract custodies exactly `totalRaised` per auction.\"}},\"stateVariables\":{\"MAX_SUPPLY_BOUND\":{\"details\":\"Parameter bounds that keep every curve computation inside      uint256: supply up to 10^18 whole tokens, prices up to 10^27      payment units per token, and raises up to 10^40 units. All far      beyond any real launch.\"},\"MIN_USABLE_TICK\":{\"details\":\"Full-range bounds for the 1% tier (tick spacing 200), i.e.      TickMath's MIN/MAX_TICK rounded inward to a multiple of 200.\"},\"_activePool\":{\"details\":\"Set only for the duration of a price-correction swap, so the swap      callback can be authenticated.\"},\"claimable\":{\"details\":\"Credited rather than sent so that no recipient can block a         trade or a migration. USDC can blacklist an address, and a         transfer to a blacklisted creator would otherwise revert the         migration and leave every holder's tokens locked.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"MAX_FEE_BPS()\":{\"notice\":\"Upper bound on the protocol fee, so the owner can never set a         fee that confiscates a meaningful share of a purchase.\"},\"MAX_LP_FEE_SHARE_BPS()\":{\"notice\":\"Upper bound on the protocol's share of trading fees, so a         creator always keeps at least half.\"},\"MIN_LIQUIDITY_BPS()\":{\"notice\":\"Smallest share of the raise a creator may commit to the         Uniswap pool, so no launch ships with a token too thinly         traded to be usable.\"},\"POOL_FEE()\":{\"notice\":\"Pool fee tier for migrated liquidity: 1%, the usual tier for         newly launched, volatile tokens.\"},\"buyTokens(uint256,uint256,uint256)\":{\"notice\":\"Buy `amount` tokens (in token wei) from an auction that hasn't         graduated yet.\"},\"buyTokensWithETH(uint256,uint256)\":{\"notice\":\"`buyTokens` for an auction priced in WETH, paid in plain ETH.         The ETH sent is the most the buyer will pay (`maxCost`); what         the purchase doesn't use is refunded.\"},\"claim(address)\":{\"notice\":\"Withdraw everything credited to you in `token`.\"},\"claimProtocolFees(address)\":{\"notice\":\"Send the protocol's unclaimed fees in `token` to the fee         recipient. Anyone may trigger it.\"},\"claimable(address,address)\":{\"notice\":\"Payouts credited to an account and not yet claimed, by token         then account: a creator's share of pool fees, and any reserve         that migration couldn't place in the pool.\"},\"collectFees(uint256)\":{\"notice\":\"Collect the migrated pool's trading fees: the protocol's share         is added to `protocolFees` and the rest is credited to the         creator to `claim`. Anyone may trigger it.\"},\"createAuction((string,string,string,uint256,address,uint256,uint256,uint256,uint256))\":{\"notice\":\"Launch a token with custom curve parameters. Trading starts         immediately; the token graduates to Uniswap once `maxRaise` is         raised.\"},\"custodied(address)\":{\"notice\":\"Tokens this contract owes, per token: raises not yet withdrawn,         payouts not yet claimed and protocol fees not yet claimed.         Anything held above this is excess (e.g. tokens sent here         directly) and can be recovered with `sweep`.\"},\"getSpotPrice(uint256)\":{\"notice\":\"Price of the next whole token, in payment units \\u00d7 1e18.\"},\"launch(string,string,string,address)\":{\"notice\":\"One-click launch: name, symbol, metadata and the payment token         from the creator, everything else from the protocol's standard         preset for that token.\"},\"launchPresets(address)\":{\"notice\":\"Parameters for one-click launches, per payment token. A token's         preset is unset (zero payment token) until the owner configures it.\"},\"migrate(uint256)\":{\"notice\":\"Move a completed auction's liquidity into Uniswap v3 and unlock         its token. Anyone may call it, so a creator can never hold the         token hostage by not migrating.\"},\"pause()\":{\"notice\":\"Emergency stop for new money: blocks launches and curve buys.         Every way out keeps working while paused (selling back to the         curve, migration, withdrawals, fee collection and claims), so         pausing can never trap a holder's or creator's funds.\"},\"paymentTokenAllowed(address)\":{\"notice\":\"Payment tokens new auctions may be priced in. A token the         creator controls could block transfers and strand buyers, so         only tokens the owner has approved can be used.\"},\"positionId(uint256)\":{\"notice\":\"The Uniswap position NFT holding each auction's liquidity. This         contract keeps it forever, so the liquidity is permanently locked.\"},\"protocolFees(address)\":{\"notice\":\"Protocol fees earned and not yet claimed, per token.         `claimProtocolFees` pays them to the current fee recipient.\"},\"sellTokens(uint256,uint256,uint256)\":{\"notice\":\"Sell `amount` tokens (in token wei) back to the curve of an         auction that hasn't graduated yet. The tokens are burned and the         seller is paid from the raise, at the curve price minus the         protocol fee.\"},\"sellTokensForETH(uint256,uint256,uint256)\":{\"notice\":\"`sellTokens` for an auction priced in WETH, paid out in plain ETH.\"},\"setDefaultFeeBps(uint256)\":{\"notice\":\"Change the fee for auctions created from now on. Existing         auctions keep the fee they were created with, so a creator's         terms can never change mid-sale.\"},\"setDefaultLpFeeShareBps(uint256)\":{\"notice\":\"Change the protocol's share of trading fees for auctions created         from now on. Existing auctions keep the share they were created         with.\"},\"setLaunchPreset((address,uint256,uint256,uint256,uint256,uint256))\":{\"notice\":\"Set the parameters `launch` uses for `preset.paymentToken`.         Applies to launches from now on; existing auctions are         unaffected. Disallowing the token stops its launches.\"},\"setPaymentTokenAllowed(address,bool)\":{\"notice\":\"Allow or disallow a payment token for new auctions. Auctions         already priced in a token carry on if it is disallowed.\"},\"setProtocolFeeRecipient(address)\":{\"notice\":\"Change where protocol fees are sent, including fees earned but         not yet claimed.\"},\"sweep(address,address)\":{\"notice\":\"Recover tokens held above what is owed, such as tokens         transferred to this contract directly. Unwithdrawn raises,         unclaimed payouts and unclaimed fees can never be swept.\"},\"weth()\":{\"notice\":\"Wrapped ether. Auctions priced in it can also be bought and         sold with plain ETH, which is wrapped and unwrapped here. Zero         disables the ETH entry points.\"},\"withdrawProceeds(uint256)\":{\"notice\":\"Transfer an auction's raised payment tokens to its creator.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/TokenAuction.sol\":\"TokenAuction\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/access/Ownable.sol\":{\"keccak256\":\"0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6\",\"dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a\"]},\"lib/openzeppelin-contracts/contracts/access/Ownable2Step.sol\":{\"keccak256\":\"0xdcad8898fda432696597752e8ec361b87d85c82cb258115427af006dacf7128c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e2c9d517f0c136d54bd00cd57959d25681d4d6273f5bbbc263afe228303772f0\",\"dweb:/ipfs/QmReNFjXBiufByiAAzfSQ2SM5r3qeUErn46BmN3yVRvrek\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC1363.sol\":{\"keccak256\":\"0xd5ea07362ab630a6a3dee4285a74cf2377044ca2e4be472755ad64d7c5d4b69d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://da5e832b40fc5c3145d3781e2e5fa60ac2052c9d08af7e300dc8ab80c4343100\",\"dweb:/ipfs/QmTzf7N5ZUdh5raqtzbM11yexiUoLC9z3Ws632MCuycq1d\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC165.sol\":{\"keccak256\":\"0x0afcb7e740d1537b252cb2676f600465ce6938398569f09ba1b9ca240dde2dfc\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1c299900ac4ec268d4570ecef0d697a3013cd11a6eb74e295ee3fbc945056037\",\"dweb:/ipfs/Qmab9owJoxcA7vJT5XNayCMaUR1qxqj1NDzzisduwaJMcZ\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC20.sol\":{\"keccak256\":\"0x1a6221315ce0307746c2c4827c125d821ee796c74a676787762f4778671d4f44\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1bb2332a7ee26dd0b0de9b7fe266749f54820c99ab6a3bcb6f7e6b751d47ee2d\",\"dweb:/ipfs/QmcRWpaBeCYkhy68PR3B4AgD7asuQk7PwkWxrvJbZcikLF\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x1b88b3fb3d85ba5496d7d5f396f83ee1fddcdd6762059ff65992655b67920998\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://89393bb3212da1c0889601b9706a07b39419ddc4d2faab9eaf6e7f9152cf6a1c\",\"dweb:/ipfs/QmcCfzzxv1Bkdz1c1yF4gQCeYb6Us5BJANnzTFqawfd1HL\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0x669464167428061ee0f8618b73b3ee90aff8405683e7ddde8cd77dadaa1afe29\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0dda78587a7358b4fdf6b9fca0fde5a5e34930f36d5268a16028627fc0170195\",\"dweb:/ipfs/QmQ1b6cCceDRWNxti9HifsTCzmVP25Haxs1bWugm52vTqH\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x74ed01eb66b923d0d0cfe3be84604ac04b76482a55f9dd655e1ef4d367f95bc2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5282825a626cfe924e504274b864a652b0023591fa66f06a067b25b51ba9b303\",\"dweb:/ipfs/QmeCfPykghhMc81VJTrHTC7sF6CRvaA1FXVq2pJhwYp1dV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xd6fa4088198f04eef10c5bce8a2f4d60554b7ec4b987f684393c01bf79b94d9f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f95ee0bbd4dd3ac730d066ba3e785ded4565e890dbec2fa7d3b9fe3bad9d0d6e\",\"dweb:/ipfs/QmSLr6bHkPFWT7ntj34jmwfyskpwo97T9jZUrk5sz3sdtR\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x304d732678032a9781ae85c8f204c8fba3d3a5e31c02616964e75cfdc5049098\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://299ced486011781dc98f638059678323c03079fefae1482abaa2135b22fa92d0\",\"dweb:/ipfs/QmbZNbcPTBxNvwChavN2kkZZs7xHhYL7mv51KrxMhsMs3j\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/Panic.sol\":{\"keccak256\":\"0xf7fe324703a64fc51702311dc51562d5cb1497734f074e4f483bfb6717572d7a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c6a5ff4f9fd8649b7ee20800b7fa387d3465bd77cf20c2d1068cd5c98e1ed57a\",\"dweb:/ipfs/QmVSaVJf9FXFhdYEYeCEfjMVHrxDh5qL4CGkxdMWpQCrqG\"]},\"lib/openzeppelin-contracts/contracts/utils/Pausable.sol\":{\"keccak256\":\"0xdb484371dfbb848cb6f5d70464e9ac9b2900e4164ead76bbce4fef0b44bcc68f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f9d6f6f6600a2bec622f699081b58350873b5e63ce05464d17d674a290bb8a7c\",\"dweb:/ipfs/QmQKVzSQY1PM3Bid4QhgVVZyx6B4Jx7XgaQzLKHj38vJz8\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xa516cbf1c7d15d3517c2d668601ce016c54395bf5171918a14e2686977465f53\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1e1d079e8edfb58efd23a311e315a4807b01b5d1cf153f8fa2d0608b9dec3e99\",\"dweb:/ipfs/QmTBExeX2SDTkn5xbk5ssbYSx7VqRp9H4Ux1CY4uQM4b9N\"]},\"lib/openzeppelin-contracts/contracts/utils/StorageSlot.sol\":{\"keccak256\":\"0xcf74f855663ce2ae00ed8352666b7935f6cddea2932fdf2c3ecd30a9b1cd0e97\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9f660b1f351b757dfe01438e59888f31f33ded3afcf5cb5b0d9bf9aa6f320a8b\",\"dweb:/ipfs/QmarDJ5hZEgBtCmmrVzEZWjub9769eD686jmzb2XpSU1cM\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x8891738ffe910f0cf2da09566928589bf5d63f4524dd734fd9cedbac3274dd5c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://971f954442df5c2ef5b5ebf1eb245d7105d9fbacc7386ee5c796df1d45b21617\",\"dweb:/ipfs/QmadRjHbkicwqwwh61raUEapaVEtaLMcYbQZWs9gUkgj3u\"]},\"lib/openzeppelin-contracts/contracts/utils/math/Math.sol\":{\"keccak256\":\"0x59973a93b1f983f94e10529f46ca46544a9fec2b5f56fb1390bbe9e0dc79f857\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c55ef8f0b9719790c2ae6f81d80a59ffb89f2f0abe6bc065585bd79edce058c5\",\"dweb:/ipfs/QmNNmCbX9NjPXKqHJN8R1WC2rNeZSQrPZLd6FF6AKLyH5Y\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SafeCast.sol\":{\"keccak256\":\"0xc8cae21c9ae4a46e5162ff9bf5b351d6fa6a6eba72d515f3bc1bdfeda7fdf083\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ce830ebcf28e31643caba318996db3763c36d52cd0f23798ba83c135355d45e9\",\"dweb:/ipfs/QmdGPcvptHN7UBCbUYBbRX3hiRVRFLRwno8b4uga6uFNif\"]},\"src/AuctionToken.sol\":{\"keccak256\":\"0xb95a51fbf0d9f1b9fd907333184e49bbd9ed3d3483bff1d3b2219257b99f5489\",\"urls\":[\"bzz-raw://36ea7fdd539dbfb02f2fbfc86acf86c3292cda6b122ea0c142c8215bce742876\",\"dweb:/ipfs/QmcwmYt4GcLrAiQ9f66okET6LpBYnDmQPLNWKG8meKTZ4x\"]},\"src/BondingCurve.sol\":{\"keccak256\":\"0xcecf8452b4874a79822fb9220c7214bf457e68ed07930a0d4825859c2604cd52\",\"urls\":[\"bzz-raw://bd4f77a78f63bf53544a45cd0d37e1da20a0e1aac5a893a62aca3aaeecad5101\",\"dweb:/ipfs/QmYtjpeLoTpTZuZxvr3yZRkAQ7dmtewXmRnoY63Rp5Jd9X\"]},\"src/TokenAuction.sol\":{\"keccak256\":\"0x4dd62ccf98ee42aebef0ffbd54154aca557e57c550773debb65bdcd8a6dacdc9\",\"urls\":[\"bzz-raw://bc00ea15a350399e0fe05ca0a2cb4d1002d0d18066976c3819655e8de342a009\",\"dweb:/ipfs/QmeRy6bsY9HwN2JdQ6XxW65NFigsUCmg3BngMxGaMNrWHS\"]},\"src/interfaces/IUniswapV3.sol\":{\"keccak256\":\"0x773e06f4c1ff91c0a1ee79d5fe77a3340b79625edb29773ddad1ed88769d27d0\",\"urls\":[\"bzz-raw://17946a5bd6c253000d6b0a3d5691ac163b40273fde3645534a3ed050a70053de\",\"dweb:/ipfs/QmPLHEnBjx1bbpBmwVAYqiD7KJDMvQY3jWoeWTMs81fwsm\"]},\"src/interfaces/IWETH9.sol\":{\"keccak256\":\"0x7d420d99e9b9363324ee2fa56de4b3182a463e97195377b8621ee723529a1b9c\",\"urls\":[\"bzz-raw://67011c9c2b8eda3184bf647d902b548fa31a75a0453aec9de1a86b0df8ca42e2\",\"dweb:/ipfs/QmfMG45f3nhCzWRfE2HXxoUNrcPtoopALnZhvcdHfwvaSt\"]}},\"version\":1}",
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
            },
            {
              "internalType": "contract IWETH9",
              "name": "weth_",
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
          "stateMutability": "payable",
          "type": "function",
          "name": "buyTokensWithETH"
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
            },
            {
              "internalType": "address",
              "name": "paymentToken",
              "type": "address"
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
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "launchPresets",
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
          "name": "sellTokensForETH"
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
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "weth",
          "outputs": [
            {
              "internalType": "contract IWETH9",
              "name": "",
              "type": "address"
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
        },
        {
          "inputs": [],
          "stateMutability": "payable",
          "type": "receive"
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
          "buyTokensWithETH(uint256,uint256)": {
            "notice": "`buyTokens` for an auction priced in WETH, paid in plain ETH.         The ETH sent is the most the buyer will pay (`maxCost`); what         the purchase doesn't use is refunded."
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
          "launch(string,string,string,address)": {
            "notice": "One-click launch: name, symbol, metadata and the payment token         from the creator, everything else from the protocol's standard         preset for that token."
          },
          "launchPresets(address)": {
            "notice": "Parameters for one-click launches, per payment token. A token's         preset is unset (zero payment token) until the owner configures it."
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
          "sellTokensForETH(uint256,uint256,uint256)": {
            "notice": "`sellTokens` for an auction priced in WETH, paid out in plain ETH."
          },
          "setDefaultFeeBps(uint256)": {
            "notice": "Change the fee for auctions created from now on. Existing         auctions keep the fee they were created with, so a creator's         terms can never change mid-sale."
          },
          "setDefaultLpFeeShareBps(uint256)": {
            "notice": "Change the protocol's share of trading fees for auctions created         from now on. Existing auctions keep the share they were created         with."
          },
          "setLaunchPreset((address,uint256,uint256,uint256,uint256,uint256))": {
            "notice": "Set the parameters `launch` uses for `preset.paymentToken`.         Applies to launches from now on; existing auctions are         unaffected. Disallowing the token stops its launches."
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
          "weth()": {
            "notice": "Wrapped ether. Auctions priced in it can also be bought and         sold with plain ETH, which is wrapped and unwrapped here. Zero         disables the ETH entry points."
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
        "keccak256": "0x4dd62ccf98ee42aebef0ffbd54154aca557e57c550773debb65bdcd8a6dacdc9",
        "urls": [
          "bzz-raw://bc00ea15a350399e0fe05ca0a2cb4d1002d0d18066976c3819655e8de342a009",
          "dweb:/ipfs/QmeRy6bsY9HwN2JdQ6XxW65NFigsUCmg3BngMxGaMNrWHS"
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
      },
      "src/interfaces/IWETH9.sol": {
        "keccak256": "0x7d420d99e9b9363324ee2fa56de4b3182a463e97195377b8621ee723529a1b9c",
        "urls": [
          "bzz-raw://67011c9c2b8eda3184bf647d902b548fa31a75a0453aec9de1a86b0df8ca42e2",
          "dweb:/ipfs/QmfMG45f3nhCzWRfE2HXxoUNrcPtoopALnZhvcdHfwvaSt"
        ],
        "license": null
      }
    },
    "version": 1
  },
  "id": 20
} as const;
