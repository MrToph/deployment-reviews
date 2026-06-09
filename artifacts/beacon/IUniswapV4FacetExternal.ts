// Keep this as a TS literal object instead of importing JSON directly.
// TypeScript JSON imports widen to generic string/number/array types, but
// Assay needs literal storage labels, bytecode immutable ids, offsets, and lengths
// to provide proper validation types for the dev experience.
export default {
  "abi": [
    {
      "type": "function",
      "name": "uniswapV4_VERSION",
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
      "name": "uniswapV4_decreasePosition",
      "inputs": [
        {
          "name": "poolId",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "tokenId",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "liquidityDecrease",
          "type": "uint128",
          "internalType": "uint128"
        },
        {
          "name": "amount0Min",
          "type": "uint128",
          "internalType": "uint128"
        },
        {
          "name": "amount1Min",
          "type": "uint128",
          "internalType": "uint128"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "uniswapV4_getAggregateDepositRateLimitKey",
      "inputs": [
        {
          "name": "poolId",
          "type": "bytes32",
          "internalType": "bytes32"
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
      "name": "uniswapV4_getAggregateWithdrawRateLimitKey",
      "inputs": [
        {
          "name": "poolId",
          "type": "bytes32",
          "internalType": "bytes32"
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
      "name": "uniswapV4_getAssetDepositRateLimitKey",
      "inputs": [
        {
          "name": "poolId",
          "type": "bytes32",
          "internalType": "bytes32"
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
      "name": "uniswapV4_getAssetWithdrawRateLimitKey",
      "inputs": [
        {
          "name": "poolId",
          "type": "bytes32",
          "internalType": "bytes32"
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
      "name": "uniswapV4_getMaxSlippage",
      "inputs": [
        {
          "name": "poolId",
          "type": "bytes32",
          "internalType": "bytes32"
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
      "name": "uniswapV4_getSwapRateLimitKey",
      "inputs": [
        {
          "name": "poolId",
          "type": "bytes32",
          "internalType": "bytes32"
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
      "name": "uniswapV4_getTickLimits",
      "inputs": [
        {
          "name": "poolId",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "outputs": [
        {
          "name": "tickLowerMin",
          "type": "int24",
          "internalType": "int24"
        },
        {
          "name": "tickUpperMax",
          "type": "int24",
          "internalType": "int24"
        },
        {
          "name": "maxTickSpacing",
          "type": "uint24",
          "internalType": "uint24"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "uniswapV4_increasePosition",
      "inputs": [
        {
          "name": "poolId",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "tokenId",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "liquidityIncrease",
          "type": "uint128",
          "internalType": "uint128"
        },
        {
          "name": "amount0Max",
          "type": "uint128",
          "internalType": "uint128"
        },
        {
          "name": "amount1Max",
          "type": "uint128",
          "internalType": "uint128"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "uniswapV4_mintPosition",
      "inputs": [
        {
          "name": "poolId",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "tickLower",
          "type": "int24",
          "internalType": "int24"
        },
        {
          "name": "tickUpper",
          "type": "int24",
          "internalType": "int24"
        },
        {
          "name": "liquidity",
          "type": "uint128",
          "internalType": "uint128"
        },
        {
          "name": "amount0Max",
          "type": "uint128",
          "internalType": "uint128"
        },
        {
          "name": "amount1Max",
          "type": "uint128",
          "internalType": "uint128"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "uniswapV4_permit2",
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
      "name": "uniswapV4_positionManager",
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
      "name": "uniswapV4_router",
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
      "name": "uniswapV4_setMaxSlippage",
      "inputs": [
        {
          "name": "poolId",
          "type": "bytes32",
          "internalType": "bytes32"
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
      "name": "uniswapV4_setTickLimits",
      "inputs": [
        {
          "name": "poolId",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "tickLowerMin",
          "type": "int24",
          "internalType": "int24"
        },
        {
          "name": "tickUpperMax",
          "type": "int24",
          "internalType": "int24"
        },
        {
          "name": "maxTickSpacing",
          "type": "uint24",
          "internalType": "uint24"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "uniswapV4_swap",
      "inputs": [
        {
          "name": "poolId",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "tokenIn",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "amountIn",
          "type": "uint128",
          "internalType": "uint128"
        },
        {
          "name": "amountOutMin",
          "type": "uint128",
          "internalType": "uint128"
        }
      ],
      "outputs": [],
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
    "uniswapV4_VERSION()": "b76ec87f",
    "uniswapV4_decreasePosition(bytes32,uint256,uint128,uint128,uint128)": "5a357fcc",
    "uniswapV4_getAggregateDepositRateLimitKey(bytes32)": "0debfb26",
    "uniswapV4_getAggregateWithdrawRateLimitKey(bytes32)": "765aa9d3",
    "uniswapV4_getAssetDepositRateLimitKey(bytes32,address)": "d3284dcb",
    "uniswapV4_getAssetWithdrawRateLimitKey(bytes32,address)": "51090fb2",
    "uniswapV4_getMaxSlippage(bytes32)": "a5311f06",
    "uniswapV4_getSwapRateLimitKey(bytes32,address)": "3f3a7101",
    "uniswapV4_getTickLimits(bytes32)": "316de3b7",
    "uniswapV4_increasePosition(bytes32,uint256,uint128,uint128,uint128)": "cdb5c82b",
    "uniswapV4_mintPosition(bytes32,int24,int24,uint128,uint128,uint128)": "0dea72c8",
    "uniswapV4_permit2()": "63d2e5d1",
    "uniswapV4_positionManager()": "9fc61963",
    "uniswapV4_router()": "b045211b",
    "uniswapV4_setMaxSlippage(bytes32,uint256)": "a2db9f6a",
    "uniswapV4_setTickLimits(bytes32,int24,int24,uint24)": "01950d50",
    "uniswapV4_swap(bytes32,address,uint128,uint128)": "878ccb9c"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.34+commit.80d5c536\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"uniswapV4_VERSION\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"poolId\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"uint128\",\"name\":\"liquidityDecrease\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"amount0Min\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"amount1Min\",\"type\":\"uint128\"}],\"name\":\"uniswapV4_decreasePosition\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"poolId\",\"type\":\"bytes32\"}],\"name\":\"uniswapV4_getAggregateDepositRateLimitKey\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"key\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"poolId\",\"type\":\"bytes32\"}],\"name\":\"uniswapV4_getAggregateWithdrawRateLimitKey\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"key\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"poolId\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"uniswapV4_getAssetDepositRateLimitKey\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"key\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"poolId\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"uniswapV4_getAssetWithdrawRateLimitKey\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"key\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"poolId\",\"type\":\"bytes32\"}],\"name\":\"uniswapV4_getMaxSlippage\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"poolId\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"uniswapV4_getSwapRateLimitKey\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"key\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"poolId\",\"type\":\"bytes32\"}],\"name\":\"uniswapV4_getTickLimits\",\"outputs\":[{\"internalType\":\"int24\",\"name\":\"tickLowerMin\",\"type\":\"int24\"},{\"internalType\":\"int24\",\"name\":\"tickUpperMax\",\"type\":\"int24\"},{\"internalType\":\"uint24\",\"name\":\"maxTickSpacing\",\"type\":\"uint24\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"poolId\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"uint128\",\"name\":\"liquidityIncrease\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"amount0Max\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"amount1Max\",\"type\":\"uint128\"}],\"name\":\"uniswapV4_increasePosition\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"poolId\",\"type\":\"bytes32\"},{\"internalType\":\"int24\",\"name\":\"tickLower\",\"type\":\"int24\"},{\"internalType\":\"int24\",\"name\":\"tickUpper\",\"type\":\"int24\"},{\"internalType\":\"uint128\",\"name\":\"liquidity\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"amount0Max\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"amount1Max\",\"type\":\"uint128\"}],\"name\":\"uniswapV4_mintPosition\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"uniswapV4_permit2\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"uniswapV4_positionManager\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"uniswapV4_router\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"poolId\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"maxSlippage\",\"type\":\"uint256\"}],\"name\":\"uniswapV4_setMaxSlippage\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"poolId\",\"type\":\"bytes32\"},{\"internalType\":\"int24\",\"name\":\"tickLowerMin\",\"type\":\"int24\"},{\"internalType\":\"int24\",\"name\":\"tickUpperMax\",\"type\":\"int24\"},{\"internalType\":\"uint24\",\"name\":\"maxTickSpacing\",\"type\":\"uint24\"}],\"name\":\"uniswapV4_setTickLimits\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"poolId\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"tokenIn\",\"type\":\"address\"},{\"internalType\":\"uint128\",\"name\":\"amountIn\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"amountOutMin\",\"type\":\"uint128\"}],\"name\":\"uniswapV4_swap\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"script/interfaces/ExternalFacetInterfaces.sol\":\"IUniswapV4FacetExternal\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@ensdomains/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/v4-core/node_modules/@ensdomains/\",\":@layerzerolabs/lz-evm-messagelib-v2/=lib/diamond-pau/lib/layerzero-v2/packages/layerzero-v2/evm/messagelib/\",\":@layerzerolabs/lz-evm-protocol-v2/=lib/diamond-pau/lib/layerzero-v2/packages/layerzero-v2/evm/protocol/\",\":@layerzerolabs/oft-evm/=lib/diamond-pau/lib/grove-xchain-helpers/lib/devtools/packages/oft-evm/\",\":@openzeppelin/contracts-upgradeable/=lib/diamond-pau/lib/oz-upgradeable/contracts/\",\":@openzeppelin/contracts/=lib/diamond-pau/lib/openzeppelin-contracts/contracts/\",\":@uniswap/v4-core/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/v4-core/\",\":LayerZero-v2/=lib/diamond-pau/lib/grove-xchain-helpers/lib/\",\":aave-v3-core/=lib/diamond-pau/lib/aave-v3-origin/src/core/\",\":aave-v3-origin/=lib/diamond-pau/lib/aave-v3-origin/\",\":aave-v3-periphery/=lib/diamond-pau/lib/aave-v3-origin/src/periphery/\",\":devtools/=lib/diamond-pau/lib/grove-xchain-helpers/lib/devtools/packages/toolbox-foundry/src/\",\":diamond-pau/=lib/diamond-pau/src/\",\":ds-test/=lib/diamond-pau/lib/grove-address-registry/lib/forge-std/lib/ds-test/src/\",\":dss-allocator/=lib/diamond-pau/lib/dss-allocator/\",\":dss-interfaces/=lib/dss-test/lib/dss-interfaces/src/\",\":dss-test/=lib/dss-test/src/\",\":erc20-helpers/=lib/diamond-pau/lib/grove-basin/lib/erc20-helpers/src/\",\":erc4626-tests/=lib/diamond-pau/lib/metamorpho/lib/erc4626-tests/\",\":forge-gas-snapshot/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/permit2/lib/forge-gas-snapshot/src/\",\":forge-std/=lib/forge-std/src/\",\":grove-address-registry/=lib/diamond-pau/lib/grove-address-registry/src/\",\":grove-basin/=lib/diamond-pau/lib/grove-basin/\",\":grove-xchain-helpers/=lib/diamond-pau/lib/grove-xchain-helpers/src/\",\":halmos-cheatcodes/=lib/diamond-pau/lib/grove-basin/lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/\",\":hardhat/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/v4-core/node_modules/hardhat/\",\":layerzero-v2/=lib/diamond-pau/lib/\",\":layerzerolabs/oapp-evm/=lib/diamond-pau/lib/grove-xchain-helpers/lib/devtools/packages/oapp-evm/\",\":metamorpho/=lib/diamond-pau/lib/metamorpho/src/\",\":morpho-blue/=lib/diamond-pau/lib/metamorpho/lib/morpho-blue/\",\":murky/=lib/diamond-pau/lib/metamorpho/lib/universal-rewards-distributor/lib/murky/src/\",\":openzeppelin-contracts-upgradeable/=lib/diamond-pau/lib/spark-vaults-v2/lib/openzeppelin-contracts-upgradeable/\",\":openzeppelin-contracts/=lib/diamond-pau/lib/openzeppelin-contracts/\",\":openzeppelin/=lib/diamond-pau/lib/metamorpho/lib/universal-rewards-distributor/lib/openzeppelin-contracts/contracts/\",\":oz-upgradeable/=lib/diamond-pau/lib/oz-upgradeable/\",\":permit2/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/permit2/\",\":solidity-bytes-utils/=lib/diamond-pau/lib/solidity-bytes-utils/\",\":solidity-utils/=lib/diamond-pau/lib/aave-v3-origin/lib/solidity-utils/\",\":solmate/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/v4-core/lib/solmate/\",\":spark-address-registry/=lib/diamond-pau/lib/spark-address-registry/src/\",\":spark-psm/=lib/diamond-pau/lib/spark-psm/\",\":spark-vaults-v2/=lib/diamond-pau/lib/spark-vaults-v2/\",\":sparklend-address-registry/=lib/diamond-pau/lib/grove-basin/lib/xchain-ssr-oracle/lib/sparklend-address-registry/\",\":token-tests/=lib/diamond-pau/lib/spark-vaults-v2/lib/token-tests/src/\",\":uniswap-v4-periphery/=lib/diamond-pau/lib/uniswap-v4-periphery/\",\":universal-rewards-distributor/=lib/diamond-pau/lib/metamorpho/lib/universal-rewards-distributor/src/\",\":v4-core/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/v4-core/src/\",\":xchain-helpers/=lib/diamond-pau/lib/xchain-helpers/src/\",\":xchain-ssr-oracle/=lib/diamond-pau/lib/grove-basin/lib/xchain-ssr-oracle/\",\"lib/diamond-pau/:dss-test/=lib/diamond-pau/lib/dss-test/src/\"]},\"sources\":{\"lib/diamond-pau/src/facets/IFacet.sol\":{\"keccak256\":\"0x0f0acb5faa3c227edc594e69507f89f0f063712847f361fbc51dbc2e9dd51d0a\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://ded1143f96b28d02e5eae73cf84af8e72ac15b31e2737ae29dc962c2975eb34c\",\"dweb:/ipfs/QmNrdGdJkHC2YWBMx4dQmihdwuSs7XDNgf8NYzQUsZifT2\"]},\"lib/diamond-pau/src/facets/layer-zero/ILayerZeroFacet.sol\":{\"keccak256\":\"0x6df3f92d9a36b4caf02a2f452c5fb63be8a42e800e7c41b69f6dc93bfca743af\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://12b602fddd72faf45bd911ea8d5feb6dd90e128bbcafe4bdb928f04db4234a67\",\"dweb:/ipfs/QmcHmPBo9NZ8Y3nSEay6HitizrvuX86wRU58DVwLAoCsm4\"]},\"lib/diamond-pau/src/facets/uniswap-v3/IUniswapV3Facet.sol\":{\"keccak256\":\"0x39bc467c9e7a0f420225f5cc71ea316c24caf512fc285d85bfdbcb99f1687e89\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://37d8ee74e25b14ba26b9850a064e8a0028d476caa085a5ae0046afc11a00dc3f\",\"dweb:/ipfs/QmTp7H356UcGbceyDzeZPWtAthcSLp88NN4Bk5g4scfiHw\"]},\"script/interfaces/ExternalFacetInterfaces.sol\":{\"keccak256\":\"0xf04136c2bc35f321b9cf134e0713e7a34818153a991102229afc93d07ceb45fe\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://99b23d8faeb52daf3d9c88fc44b72501c8bae8b0f9bd1d7230c2858d728353c8\",\"dweb:/ipfs/Qmb1EaaUzRYDkhZrUkMJgfyU7x3pwgZxUjCSFDmaJ5SJCg\"]}},\"version\":1}",
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
          "name": "uniswapV4_VERSION",
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
              "internalType": "bytes32",
              "name": "poolId",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint128",
              "name": "liquidityDecrease",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "amount0Min",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "amount1Min",
              "type": "uint128"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "uniswapV4_decreasePosition"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "poolId",
              "type": "bytes32"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "uniswapV4_getAggregateDepositRateLimitKey",
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
              "internalType": "bytes32",
              "name": "poolId",
              "type": "bytes32"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "uniswapV4_getAggregateWithdrawRateLimitKey",
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
              "internalType": "bytes32",
              "name": "poolId",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "uniswapV4_getAssetDepositRateLimitKey",
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
              "internalType": "bytes32",
              "name": "poolId",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "uniswapV4_getAssetWithdrawRateLimitKey",
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
              "internalType": "bytes32",
              "name": "poolId",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "uniswapV4_getMaxSlippage",
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
              "internalType": "bytes32",
              "name": "poolId",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "uniswapV4_getSwapRateLimitKey",
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
              "internalType": "bytes32",
              "name": "poolId",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "uniswapV4_getTickLimits",
          "outputs": [
            {
              "internalType": "int24",
              "name": "tickLowerMin",
              "type": "int24"
            },
            {
              "internalType": "int24",
              "name": "tickUpperMax",
              "type": "int24"
            },
            {
              "internalType": "uint24",
              "name": "maxTickSpacing",
              "type": "uint24"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "poolId",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint128",
              "name": "liquidityIncrease",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "amount0Max",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "amount1Max",
              "type": "uint128"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "uniswapV4_increasePosition"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "poolId",
              "type": "bytes32"
            },
            {
              "internalType": "int24",
              "name": "tickLower",
              "type": "int24"
            },
            {
              "internalType": "int24",
              "name": "tickUpper",
              "type": "int24"
            },
            {
              "internalType": "uint128",
              "name": "liquidity",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "amount0Max",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "amount1Max",
              "type": "uint128"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "uniswapV4_mintPosition"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "uniswapV4_permit2",
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
          "stateMutability": "view",
          "type": "function",
          "name": "uniswapV4_positionManager",
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
          "stateMutability": "view",
          "type": "function",
          "name": "uniswapV4_router",
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
              "internalType": "bytes32",
              "name": "poolId",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "maxSlippage",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "uniswapV4_setMaxSlippage"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "poolId",
              "type": "bytes32"
            },
            {
              "internalType": "int24",
              "name": "tickLowerMin",
              "type": "int24"
            },
            {
              "internalType": "int24",
              "name": "tickUpperMax",
              "type": "int24"
            },
            {
              "internalType": "uint24",
              "name": "maxTickSpacing",
              "type": "uint24"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "uniswapV4_setTickLimits"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "poolId",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "tokenIn",
              "type": "address"
            },
            {
              "internalType": "uint128",
              "name": "amountIn",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "amountOutMin",
              "type": "uint128"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "uniswapV4_swap"
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
        "script/interfaces/ExternalFacetInterfaces.sol": "IUniswapV4FacetExternal"
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
