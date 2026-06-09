// Keep this as a TS literal object instead of importing JSON directly.
// TypeScript JSON imports widen to generic string/number/array types, but
// Assay needs literal storage labels, bytecode immutable ids, offsets, and lengths
// to provide proper validation types for the dev experience.
export default {
  "abi": [
    {
      "type": "function",
      "name": "uniswapV3_MAX_TICK",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "int24",
          "internalType": "int24"
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "uniswapV3_MAX_TICK_DELTA",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint24",
          "internalType": "uint24"
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "uniswapV3_MIN_TICK",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "int24",
          "internalType": "int24"
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "uniswapV3_VERSION",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "string",
          "internalType": "string"
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "uniswapV3_addLiquidity",
      "inputs": [
        {
          "name": "pool",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "ticks",
          "type": "tuple",
          "internalType": "struct IUniswapV3Facet.Ticks",
          "components": [
            {
              "name": "lower",
              "type": "int24",
              "internalType": "int24"
            },
            {
              "name": "upper",
              "type": "int24",
              "internalType": "int24"
            }
          ]
        },
        {
          "name": "target",
          "type": "tuple",
          "internalType": "struct IUniswapV3Facet.TokenAmounts",
          "components": [
            {
              "name": "amount0",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "amount1",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        },
        {
          "name": "min",
          "type": "tuple",
          "internalType": "struct IUniswapV3Facet.TokenAmounts",
          "components": [
            {
              "name": "amount0",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "amount1",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        },
        {
          "name": "deadline",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "",
          "type": "uint128",
          "internalType": "uint128"
        },
        {
          "name": "",
          "type": "tuple",
          "internalType": "struct IUniswapV3Facet.TokenAmounts",
          "components": [
            {
              "name": "amount0",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "amount1",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "uniswapV3_getAggregateDepositRateLimitKey",
      "inputs": [
        {
          "name": "pool",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "key",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "uniswapV3_getAggregateWithdrawRateLimitKey",
      "inputs": [
        {
          "name": "pool",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "key",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "uniswapV3_getAssetDepositRateLimitKey",
      "inputs": [
        {
          "name": "pool",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "token",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "key",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "uniswapV3_getAssetWithdrawRateLimitKey",
      "inputs": [
        {
          "name": "pool",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "token",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "key",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "uniswapV3_getLiquidityTickBounds",
      "inputs": [
        {
          "name": "pool",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "lower",
          "type": "int24",
          "internalType": "int24"
        },
        {
          "name": "upper",
          "type": "int24",
          "internalType": "int24"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "uniswapV3_getMaxSlippage",
      "inputs": [
        {
          "name": "pool",
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
      "name": "uniswapV3_getMaxTickDelta",
      "inputs": [
        {
          "name": "pool",
          "type": "address",
          "internalType": "address"
        }
      ],
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
      "name": "uniswapV3_getSwapRateLimitKey",
      "inputs": [
        {
          "name": "pool",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "token",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "key",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "uniswapV3_getTWAPSecondsAgo",
      "inputs": [
        {
          "name": "pool",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint32",
          "internalType": "uint32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "uniswapV3_positionManager",
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
      "name": "uniswapV3_removeLiquidity",
      "inputs": [
        {
          "name": "pool",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "liquidity",
          "type": "uint128",
          "internalType": "uint128"
        },
        {
          "name": "min",
          "type": "tuple",
          "internalType": "struct IUniswapV3Facet.TokenAmounts",
          "components": [
            {
              "name": "amount0",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "amount1",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        },
        {
          "name": "deadline",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "tuple",
          "internalType": "struct IUniswapV3Facet.TokenAmounts",
          "components": [
            {
              "name": "amount0",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "amount1",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "uniswapV3_router",
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
      "name": "uniswapV3_setLiquidityLowerTickBound",
      "inputs": [
        {
          "name": "pool",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "lowerTickBound",
          "type": "int24",
          "internalType": "int24"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "uniswapV3_setLiquidityUpperTickBound",
      "inputs": [
        {
          "name": "pool",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "upperTickBound",
          "type": "int24",
          "internalType": "int24"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "uniswapV3_setMaxSlippage",
      "inputs": [
        {
          "name": "pool",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "maxSlippage",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "uniswapV3_setMaxTickDelta",
      "inputs": [
        {
          "name": "pool",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "maxTickDelta",
          "type": "uint24",
          "internalType": "uint24"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "uniswapV3_setTWAPSecondsAgo",
      "inputs": [
        {
          "name": "pool",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "twapSecondsAgo",
          "type": "uint32",
          "internalType": "uint32"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "uniswapV3_swap",
      "inputs": [
        {
          "name": "pool",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "tokenIn",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "amountIn",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "minAmountOut",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "tickDelta",
          "type": "uint24",
          "internalType": "uint24"
        }
      ],
      "outputs": [
        {
          "name": "amountOut",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "nonpayable"
    }
  ],
  "bytecode": {
    "object": "0x",
    "sourceMap": "",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x",
    "sourceMap": "",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "uniswapV3_MAX_TICK()": "03b3902e",
    "uniswapV3_MAX_TICK_DELTA()": "83d76441",
    "uniswapV3_MIN_TICK()": "da256b1b",
    "uniswapV3_VERSION()": "48f43741",
    "uniswapV3_addLiquidity(address,uint256,(int24,int24),(uint256,uint256),(uint256,uint256),uint256)": "1c72ed54",
    "uniswapV3_getAggregateDepositRateLimitKey(address)": "396aff85",
    "uniswapV3_getAggregateWithdrawRateLimitKey(address)": "1d45115a",
    "uniswapV3_getAssetDepositRateLimitKey(address,address)": "36a18e59",
    "uniswapV3_getAssetWithdrawRateLimitKey(address,address)": "a8e7eff1",
    "uniswapV3_getLiquidityTickBounds(address)": "6e0137d7",
    "uniswapV3_getMaxSlippage(address)": "a91abea2",
    "uniswapV3_getMaxTickDelta(address)": "98616f93",
    "uniswapV3_getSwapRateLimitKey(address,address)": "6f9d3ee2",
    "uniswapV3_getTWAPSecondsAgo(address)": "c0a1fcb7",
    "uniswapV3_positionManager()": "b659d553",
    "uniswapV3_removeLiquidity(address,uint256,uint128,(uint256,uint256),uint256)": "669ca079",
    "uniswapV3_router()": "ee85a53d",
    "uniswapV3_setLiquidityLowerTickBound(address,int24)": "59301309",
    "uniswapV3_setLiquidityUpperTickBound(address,int24)": "b1068e83",
    "uniswapV3_setMaxSlippage(address,uint256)": "140aad6a",
    "uniswapV3_setMaxTickDelta(address,uint24)": "25eb3da5",
    "uniswapV3_setTWAPSecondsAgo(address,uint32)": "3c32faa3",
    "uniswapV3_swap(address,address,uint256,uint256,uint24)": "f8692e56"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.34+commit.80d5c536\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"uniswapV3_MAX_TICK\",\"outputs\":[{\"internalType\":\"int24\",\"name\":\"\",\"type\":\"int24\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"uniswapV3_MAX_TICK_DELTA\",\"outputs\":[{\"internalType\":\"uint24\",\"name\":\"\",\"type\":\"uint24\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"uniswapV3_MIN_TICK\",\"outputs\":[{\"internalType\":\"int24\",\"name\":\"\",\"type\":\"int24\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"uniswapV3_VERSION\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pool\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"int24\",\"name\":\"lower\",\"type\":\"int24\"},{\"internalType\":\"int24\",\"name\":\"upper\",\"type\":\"int24\"}],\"internalType\":\"struct IUniswapV3Facet.Ticks\",\"name\":\"ticks\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"amount0\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount1\",\"type\":\"uint256\"}],\"internalType\":\"struct IUniswapV3Facet.TokenAmounts\",\"name\":\"target\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"amount0\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount1\",\"type\":\"uint256\"}],\"internalType\":\"struct IUniswapV3Facet.TokenAmounts\",\"name\":\"min\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"}],\"name\":\"uniswapV3_addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint128\",\"name\":\"\",\"type\":\"uint128\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"amount0\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount1\",\"type\":\"uint256\"}],\"internalType\":\"struct IUniswapV3Facet.TokenAmounts\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pool\",\"type\":\"address\"}],\"name\":\"uniswapV3_getAggregateDepositRateLimitKey\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"key\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pool\",\"type\":\"address\"}],\"name\":\"uniswapV3_getAggregateWithdrawRateLimitKey\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"key\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pool\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"uniswapV3_getAssetDepositRateLimitKey\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"key\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pool\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"uniswapV3_getAssetWithdrawRateLimitKey\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"key\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pool\",\"type\":\"address\"}],\"name\":\"uniswapV3_getLiquidityTickBounds\",\"outputs\":[{\"internalType\":\"int24\",\"name\":\"lower\",\"type\":\"int24\"},{\"internalType\":\"int24\",\"name\":\"upper\",\"type\":\"int24\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pool\",\"type\":\"address\"}],\"name\":\"uniswapV3_getMaxSlippage\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pool\",\"type\":\"address\"}],\"name\":\"uniswapV3_getMaxTickDelta\",\"outputs\":[{\"internalType\":\"uint24\",\"name\":\"\",\"type\":\"uint24\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pool\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"uniswapV3_getSwapRateLimitKey\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"key\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pool\",\"type\":\"address\"}],\"name\":\"uniswapV3_getTWAPSecondsAgo\",\"outputs\":[{\"internalType\":\"uint32\",\"name\":\"\",\"type\":\"uint32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"uniswapV3_positionManager\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pool\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"uint128\",\"name\":\"liquidity\",\"type\":\"uint128\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"amount0\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount1\",\"type\":\"uint256\"}],\"internalType\":\"struct IUniswapV3Facet.TokenAmounts\",\"name\":\"min\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"}],\"name\":\"uniswapV3_removeLiquidity\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"amount0\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount1\",\"type\":\"uint256\"}],\"internalType\":\"struct IUniswapV3Facet.TokenAmounts\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"uniswapV3_router\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pool\",\"type\":\"address\"},{\"internalType\":\"int24\",\"name\":\"lowerTickBound\",\"type\":\"int24\"}],\"name\":\"uniswapV3_setLiquidityLowerTickBound\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pool\",\"type\":\"address\"},{\"internalType\":\"int24\",\"name\":\"upperTickBound\",\"type\":\"int24\"}],\"name\":\"uniswapV3_setLiquidityUpperTickBound\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pool\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"maxSlippage\",\"type\":\"uint256\"}],\"name\":\"uniswapV3_setMaxSlippage\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pool\",\"type\":\"address\"},{\"internalType\":\"uint24\",\"name\":\"maxTickDelta\",\"type\":\"uint24\"}],\"name\":\"uniswapV3_setMaxTickDelta\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pool\",\"type\":\"address\"},{\"internalType\":\"uint32\",\"name\":\"twapSecondsAgo\",\"type\":\"uint32\"}],\"name\":\"uniswapV3_setTWAPSecondsAgo\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pool\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"tokenIn\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amountIn\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minAmountOut\",\"type\":\"uint256\"},{\"internalType\":\"uint24\",\"name\":\"tickDelta\",\"type\":\"uint24\"}],\"name\":\"uniswapV3_swap\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"amountOut\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"script/interfaces/ExternalFacetInterfaces.sol\":\"IUniswapV3FacetExternal\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@ensdomains/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/v4-core/node_modules/@ensdomains/\",\":@layerzerolabs/lz-evm-messagelib-v2/=lib/diamond-pau/lib/layerzero-v2/packages/layerzero-v2/evm/messagelib/\",\":@layerzerolabs/lz-evm-protocol-v2/=lib/diamond-pau/lib/layerzero-v2/packages/layerzero-v2/evm/protocol/\",\":@layerzerolabs/oft-evm/=lib/diamond-pau/lib/grove-xchain-helpers/lib/devtools/packages/oft-evm/\",\":@openzeppelin/contracts-upgradeable/=lib/diamond-pau/lib/oz-upgradeable/contracts/\",\":@openzeppelin/contracts/=lib/diamond-pau/lib/openzeppelin-contracts/contracts/\",\":@uniswap/v4-core/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/v4-core/\",\":LayerZero-v2/=lib/diamond-pau/lib/grove-xchain-helpers/lib/\",\":aave-v3-core/=lib/diamond-pau/lib/aave-v3-origin/src/core/\",\":aave-v3-origin/=lib/diamond-pau/lib/aave-v3-origin/\",\":aave-v3-periphery/=lib/diamond-pau/lib/aave-v3-origin/src/periphery/\",\":devtools/=lib/diamond-pau/lib/grove-xchain-helpers/lib/devtools/packages/toolbox-foundry/src/\",\":diamond-pau/=lib/diamond-pau/src/\",\":ds-test/=lib/diamond-pau/lib/grove-address-registry/lib/forge-std/lib/ds-test/src/\",\":dss-allocator/=lib/diamond-pau/lib/dss-allocator/\",\":dss-interfaces/=lib/dss-test/lib/dss-interfaces/src/\",\":dss-test/=lib/dss-test/src/\",\":erc20-helpers/=lib/diamond-pau/lib/grove-basin/lib/erc20-helpers/src/\",\":erc4626-tests/=lib/diamond-pau/lib/metamorpho/lib/erc4626-tests/\",\":forge-gas-snapshot/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/permit2/lib/forge-gas-snapshot/src/\",\":forge-std/=lib/forge-std/src/\",\":grove-address-registry/=lib/diamond-pau/lib/grove-address-registry/src/\",\":grove-basin/=lib/diamond-pau/lib/grove-basin/\",\":grove-xchain-helpers/=lib/diamond-pau/lib/grove-xchain-helpers/src/\",\":halmos-cheatcodes/=lib/diamond-pau/lib/grove-basin/lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/\",\":hardhat/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/v4-core/node_modules/hardhat/\",\":layerzero-v2/=lib/diamond-pau/lib/\",\":layerzerolabs/oapp-evm/=lib/diamond-pau/lib/grove-xchain-helpers/lib/devtools/packages/oapp-evm/\",\":metamorpho/=lib/diamond-pau/lib/metamorpho/src/\",\":morpho-blue/=lib/diamond-pau/lib/metamorpho/lib/morpho-blue/\",\":murky/=lib/diamond-pau/lib/metamorpho/lib/universal-rewards-distributor/lib/murky/src/\",\":openzeppelin-contracts-upgradeable/=lib/diamond-pau/lib/spark-vaults-v2/lib/openzeppelin-contracts-upgradeable/\",\":openzeppelin-contracts/=lib/diamond-pau/lib/openzeppelin-contracts/\",\":openzeppelin/=lib/diamond-pau/lib/metamorpho/lib/universal-rewards-distributor/lib/openzeppelin-contracts/contracts/\",\":oz-upgradeable/=lib/diamond-pau/lib/oz-upgradeable/\",\":permit2/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/permit2/\",\":solidity-bytes-utils/=lib/diamond-pau/lib/solidity-bytes-utils/\",\":solidity-utils/=lib/diamond-pau/lib/aave-v3-origin/lib/solidity-utils/\",\":solmate/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/v4-core/lib/solmate/\",\":spark-address-registry/=lib/diamond-pau/lib/spark-address-registry/src/\",\":spark-psm/=lib/diamond-pau/lib/spark-psm/\",\":spark-vaults-v2/=lib/diamond-pau/lib/spark-vaults-v2/\",\":sparklend-address-registry/=lib/diamond-pau/lib/grove-basin/lib/xchain-ssr-oracle/lib/sparklend-address-registry/\",\":token-tests/=lib/diamond-pau/lib/spark-vaults-v2/lib/token-tests/src/\",\":uniswap-v4-periphery/=lib/diamond-pau/lib/uniswap-v4-periphery/\",\":universal-rewards-distributor/=lib/diamond-pau/lib/metamorpho/lib/universal-rewards-distributor/src/\",\":v4-core/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/v4-core/src/\",\":xchain-helpers/=lib/diamond-pau/lib/xchain-helpers/src/\",\":xchain-ssr-oracle/=lib/diamond-pau/lib/grove-basin/lib/xchain-ssr-oracle/\",\"lib/diamond-pau/:dss-test/=lib/diamond-pau/lib/dss-test/src/\"]},\"sources\":{\"lib/diamond-pau/src/facets/IFacet.sol\":{\"keccak256\":\"0x0f0acb5faa3c227edc594e69507f89f0f063712847f361fbc51dbc2e9dd51d0a\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://ded1143f96b28d02e5eae73cf84af8e72ac15b31e2737ae29dc962c2975eb34c\",\"dweb:/ipfs/QmNrdGdJkHC2YWBMx4dQmihdwuSs7XDNgf8NYzQUsZifT2\"]},\"lib/diamond-pau/src/facets/layer-zero/ILayerZeroFacet.sol\":{\"keccak256\":\"0x6df3f92d9a36b4caf02a2f452c5fb63be8a42e800e7c41b69f6dc93bfca743af\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://12b602fddd72faf45bd911ea8d5feb6dd90e128bbcafe4bdb928f04db4234a67\",\"dweb:/ipfs/QmcHmPBo9NZ8Y3nSEay6HitizrvuX86wRU58DVwLAoCsm4\"]},\"lib/diamond-pau/src/facets/uniswap-v3/IUniswapV3Facet.sol\":{\"keccak256\":\"0x39bc467c9e7a0f420225f5cc71ea316c24caf512fc285d85bfdbcb99f1687e89\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://37d8ee74e25b14ba26b9850a064e8a0028d476caa085a5ae0046afc11a00dc3f\",\"dweb:/ipfs/QmTp7H356UcGbceyDzeZPWtAthcSLp88NN4Bk5g4scfiHw\"]},\"script/interfaces/ExternalFacetInterfaces.sol\":{\"keccak256\":\"0xf04136c2bc35f321b9cf134e0713e7a34818153a991102229afc93d07ceb45fe\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://99b23d8faeb52daf3d9c88fc44b72501c8bae8b0f9bd1d7230c2858d728353c8\",\"dweb:/ipfs/Qmb1EaaUzRYDkhZrUkMJgfyU7x3pwgZxUjCSFDmaJ5SJCg\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.34+commit.80d5c536"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [],
          "stateMutability": "pure",
          "type": "function",
          "name": "uniswapV3_MAX_TICK",
          "outputs": [
            {
              "internalType": "int24",
              "name": "",
              "type": "int24"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "pure",
          "type": "function",
          "name": "uniswapV3_MAX_TICK_DELTA",
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
          "stateMutability": "pure",
          "type": "function",
          "name": "uniswapV3_MIN_TICK",
          "outputs": [
            {
              "internalType": "int24",
              "name": "",
              "type": "int24"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "pure",
          "type": "function",
          "name": "uniswapV3_VERSION",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "pool",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "struct IUniswapV3Facet.Ticks",
              "name": "ticks",
              "type": "tuple",
              "components": [
                {
                  "internalType": "int24",
                  "name": "lower",
                  "type": "int24"
                },
                {
                  "internalType": "int24",
                  "name": "upper",
                  "type": "int24"
                }
              ]
            },
            {
              "internalType": "struct IUniswapV3Facet.TokenAmounts",
              "name": "target",
              "type": "tuple",
              "components": [
                {
                  "internalType": "uint256",
                  "name": "amount0",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amount1",
                  "type": "uint256"
                }
              ]
            },
            {
              "internalType": "struct IUniswapV3Facet.TokenAmounts",
              "name": "min",
              "type": "tuple",
              "components": [
                {
                  "internalType": "uint256",
                  "name": "amount0",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amount1",
                  "type": "uint256"
                }
              ]
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "uniswapV3_addLiquidity",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint128",
              "name": "",
              "type": "uint128"
            },
            {
              "internalType": "struct IUniswapV3Facet.TokenAmounts",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "uint256",
                  "name": "amount0",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amount1",
                  "type": "uint256"
                }
              ]
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "pool",
              "type": "address"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "uniswapV3_getAggregateDepositRateLimitKey",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "key",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "pool",
              "type": "address"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "uniswapV3_getAggregateWithdrawRateLimitKey",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "key",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "pool",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "uniswapV3_getAssetDepositRateLimitKey",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "key",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "pool",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "uniswapV3_getAssetWithdrawRateLimitKey",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "key",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "pool",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "uniswapV3_getLiquidityTickBounds",
          "outputs": [
            {
              "internalType": "int24",
              "name": "lower",
              "type": "int24"
            },
            {
              "internalType": "int24",
              "name": "upper",
              "type": "int24"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "pool",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "uniswapV3_getMaxSlippage",
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
              "internalType": "address",
              "name": "pool",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "uniswapV3_getMaxTickDelta",
          "outputs": [
            {
              "internalType": "uint24",
              "name": "",
              "type": "uint24"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "pool",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "uniswapV3_getSwapRateLimitKey",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "key",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "pool",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "uniswapV3_getTWAPSecondsAgo",
          "outputs": [
            {
              "internalType": "uint32",
              "name": "",
              "type": "uint32"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "uniswapV3_positionManager",
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
              "name": "pool",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint128",
              "name": "liquidity",
              "type": "uint128"
            },
            {
              "internalType": "struct IUniswapV3Facet.TokenAmounts",
              "name": "min",
              "type": "tuple",
              "components": [
                {
                  "internalType": "uint256",
                  "name": "amount0",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amount1",
                  "type": "uint256"
                }
              ]
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "uniswapV3_removeLiquidity",
          "outputs": [
            {
              "internalType": "struct IUniswapV3Facet.TokenAmounts",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "uint256",
                  "name": "amount0",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amount1",
                  "type": "uint256"
                }
              ]
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "uniswapV3_router",
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
              "name": "pool",
              "type": "address"
            },
            {
              "internalType": "int24",
              "name": "lowerTickBound",
              "type": "int24"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "uniswapV3_setLiquidityLowerTickBound"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "pool",
              "type": "address"
            },
            {
              "internalType": "int24",
              "name": "upperTickBound",
              "type": "int24"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "uniswapV3_setLiquidityUpperTickBound"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "pool",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "maxSlippage",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "uniswapV3_setMaxSlippage"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "pool",
              "type": "address"
            },
            {
              "internalType": "uint24",
              "name": "maxTickDelta",
              "type": "uint24"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "uniswapV3_setMaxTickDelta"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "pool",
              "type": "address"
            },
            {
              "internalType": "uint32",
              "name": "twapSecondsAgo",
              "type": "uint32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "uniswapV3_setTWAPSecondsAgo"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "pool",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "tokenIn",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minAmountOut",
              "type": "uint256"
            },
            {
              "internalType": "uint24",
              "name": "tickDelta",
              "type": "uint24"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "uniswapV3_swap",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountOut",
              "type": "uint256"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {},
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {},
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "@ensdomains/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/v4-core/node_modules/@ensdomains/",
        "@layerzerolabs/lz-evm-messagelib-v2/=lib/diamond-pau/lib/layerzero-v2/packages/layerzero-v2/evm/messagelib/",
        "@layerzerolabs/lz-evm-protocol-v2/=lib/diamond-pau/lib/layerzero-v2/packages/layerzero-v2/evm/protocol/",
        "@layerzerolabs/oft-evm/=lib/diamond-pau/lib/grove-xchain-helpers/lib/devtools/packages/oft-evm/",
        "@openzeppelin/contracts-upgradeable/=lib/diamond-pau/lib/oz-upgradeable/contracts/",
        "@openzeppelin/contracts/=lib/diamond-pau/lib/openzeppelin-contracts/contracts/",
        "@uniswap/v4-core/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/v4-core/",
        "LayerZero-v2/=lib/diamond-pau/lib/grove-xchain-helpers/lib/",
        "aave-v3-core/=lib/diamond-pau/lib/aave-v3-origin/src/core/",
        "aave-v3-origin/=lib/diamond-pau/lib/aave-v3-origin/",
        "aave-v3-periphery/=lib/diamond-pau/lib/aave-v3-origin/src/periphery/",
        "devtools/=lib/diamond-pau/lib/grove-xchain-helpers/lib/devtools/packages/toolbox-foundry/src/",
        "diamond-pau/=lib/diamond-pau/src/",
        "ds-test/=lib/diamond-pau/lib/grove-address-registry/lib/forge-std/lib/ds-test/src/",
        "dss-allocator/=lib/diamond-pau/lib/dss-allocator/",
        "dss-interfaces/=lib/dss-test/lib/dss-interfaces/src/",
        "dss-test/=lib/dss-test/src/",
        "erc20-helpers/=lib/diamond-pau/lib/grove-basin/lib/erc20-helpers/src/",
        "erc4626-tests/=lib/diamond-pau/lib/metamorpho/lib/erc4626-tests/",
        "forge-gas-snapshot/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/permit2/lib/forge-gas-snapshot/src/",
        "forge-std/=lib/forge-std/src/",
        "grove-address-registry/=lib/diamond-pau/lib/grove-address-registry/src/",
        "grove-basin/=lib/diamond-pau/lib/grove-basin/",
        "grove-xchain-helpers/=lib/diamond-pau/lib/grove-xchain-helpers/src/",
        "halmos-cheatcodes/=lib/diamond-pau/lib/grove-basin/lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/",
        "hardhat/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/v4-core/node_modules/hardhat/",
        "layerzero-v2/=lib/diamond-pau/lib/",
        "layerzerolabs/oapp-evm/=lib/diamond-pau/lib/grove-xchain-helpers/lib/devtools/packages/oapp-evm/",
        "metamorpho/=lib/diamond-pau/lib/metamorpho/src/",
        "morpho-blue/=lib/diamond-pau/lib/metamorpho/lib/morpho-blue/",
        "murky/=lib/diamond-pau/lib/metamorpho/lib/universal-rewards-distributor/lib/murky/src/",
        "openzeppelin-contracts-upgradeable/=lib/diamond-pau/lib/spark-vaults-v2/lib/openzeppelin-contracts-upgradeable/",
        "openzeppelin-contracts/=lib/diamond-pau/lib/openzeppelin-contracts/",
        "openzeppelin/=lib/diamond-pau/lib/metamorpho/lib/universal-rewards-distributor/lib/openzeppelin-contracts/contracts/",
        "oz-upgradeable/=lib/diamond-pau/lib/oz-upgradeable/",
        "permit2/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/permit2/",
        "solidity-bytes-utils/=lib/diamond-pau/lib/solidity-bytes-utils/",
        "solidity-utils/=lib/diamond-pau/lib/aave-v3-origin/lib/solidity-utils/",
        "solmate/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/v4-core/lib/solmate/",
        "spark-address-registry/=lib/diamond-pau/lib/spark-address-registry/src/",
        "spark-psm/=lib/diamond-pau/lib/spark-psm/",
        "spark-vaults-v2/=lib/diamond-pau/lib/spark-vaults-v2/",
        "sparklend-address-registry/=lib/diamond-pau/lib/grove-basin/lib/xchain-ssr-oracle/lib/sparklend-address-registry/",
        "token-tests/=lib/diamond-pau/lib/spark-vaults-v2/lib/token-tests/src/",
        "uniswap-v4-periphery/=lib/diamond-pau/lib/uniswap-v4-periphery/",
        "universal-rewards-distributor/=lib/diamond-pau/lib/metamorpho/lib/universal-rewards-distributor/src/",
        "v4-core/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/v4-core/src/",
        "xchain-helpers/=lib/diamond-pau/lib/xchain-helpers/src/",
        "xchain-ssr-oracle/=lib/diamond-pau/lib/grove-basin/lib/xchain-ssr-oracle/",
        "lib/diamond-pau/:dss-test/=lib/diamond-pau/lib/dss-test/src/"
      ],
      "optimizer": {
        "enabled": true,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "script/interfaces/ExternalFacetInterfaces.sol": "IUniswapV3FacetExternal"
      },
      "evmVersion": "cancun",
      "libraries": {}
    },
    "sources": {
      "lib/diamond-pau/src/facets/IFacet.sol": {
        "keccak256": "0x0f0acb5faa3c227edc594e69507f89f0f063712847f361fbc51dbc2e9dd51d0a",
        "urls": [
          "bzz-raw://ded1143f96b28d02e5eae73cf84af8e72ac15b31e2737ae29dc962c2975eb34c",
          "dweb:/ipfs/QmNrdGdJkHC2YWBMx4dQmihdwuSs7XDNgf8NYzQUsZifT2"
        ],
        "license": "AGPL-3.0-or-later"
      },
      "lib/diamond-pau/src/facets/layer-zero/ILayerZeroFacet.sol": {
        "keccak256": "0x6df3f92d9a36b4caf02a2f452c5fb63be8a42e800e7c41b69f6dc93bfca743af",
        "urls": [
          "bzz-raw://12b602fddd72faf45bd911ea8d5feb6dd90e128bbcafe4bdb928f04db4234a67",
          "dweb:/ipfs/QmcHmPBo9NZ8Y3nSEay6HitizrvuX86wRU58DVwLAoCsm4"
        ],
        "license": "AGPL-3.0-or-later"
      },
      "lib/diamond-pau/src/facets/uniswap-v3/IUniswapV3Facet.sol": {
        "keccak256": "0x39bc467c9e7a0f420225f5cc71ea316c24caf512fc285d85bfdbcb99f1687e89",
        "urls": [
          "bzz-raw://37d8ee74e25b14ba26b9850a064e8a0028d476caa085a5ae0046afc11a00dc3f",
          "dweb:/ipfs/QmTp7H356UcGbceyDzeZPWtAthcSLp88NN4Bk5g4scfiHw"
        ],
        "license": "AGPL-3.0-or-later"
      },
      "script/interfaces/ExternalFacetInterfaces.sol": {
        "keccak256": "0xf04136c2bc35f321b9cf134e0713e7a34818153a991102229afc93d07ceb45fe",
        "urls": [
          "bzz-raw://99b23d8faeb52daf3d9c88fc44b72501c8bae8b0f9bd1d7230c2858d728353c8",
          "dweb:/ipfs/Qmb1EaaUzRYDkhZrUkMJgfyU7x3pwgZxUjCSFDmaJ5SJCg"
        ],
        "license": "AGPL-3.0-or-later"
      }
    },
    "version": 1
  },
  "id": 225
} as const;
