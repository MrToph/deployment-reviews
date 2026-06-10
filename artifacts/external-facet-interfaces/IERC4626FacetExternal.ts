const artifact = {
  "abi": [
    {
      "type": "function",
      "name": "erc4626_EXCHANGE_RATE_PRECISION",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "erc4626_VERSION",
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
      "name": "erc4626_deposit",
      "inputs": [
        {
          "name": "token",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "minSharesOut",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "shares",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "erc4626_getDepositRateLimitKey",
      "inputs": [
        {
          "name": "token",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "asset",
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
      "name": "erc4626_getMaxExchangeRate",
      "inputs": [
        {
          "name": "token",
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
      "name": "erc4626_getWithdrawRateLimitKey",
      "inputs": [
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
      "name": "erc4626_redeem",
      "inputs": [
        {
          "name": "token",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "shares",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "minAssetsOut",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "assets",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "erc4626_setMaxExchangeRate",
      "inputs": [
        {
          "name": "token",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "shares",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "maxExpectedAssets",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "erc4626_withdraw",
      "inputs": [
        {
          "name": "token",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "maxSharesIn",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "shares",
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
    "erc4626_EXCHANGE_RATE_PRECISION()": "d9aa77a8",
    "erc4626_VERSION()": "8727e305",
    "erc4626_deposit(address,uint256,uint256)": "fc78974a",
    "erc4626_getDepositRateLimitKey(address,address)": "4f3c9dd9",
    "erc4626_getMaxExchangeRate(address)": "9d6e4747",
    "erc4626_getWithdrawRateLimitKey(address)": "b2d5ea4b",
    "erc4626_redeem(address,uint256,uint256)": "e7accdce",
    "erc4626_setMaxExchangeRate(address,uint256,uint256)": "a3124407",
    "erc4626_withdraw(address,uint256,uint256)": "d04771b8"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.34+commit.80d5c536\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"erc4626_EXCHANGE_RATE_PRECISION\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"erc4626_VERSION\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minSharesOut\",\"type\":\"uint256\"}],\"name\":\"erc4626_deposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"asset\",\"type\":\"address\"}],\"name\":\"erc4626_getDepositRateLimitKey\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"key\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"erc4626_getMaxExchangeRate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"erc4626_getWithdrawRateLimitKey\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"key\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minAssetsOut\",\"type\":\"uint256\"}],\"name\":\"erc4626_redeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"maxExpectedAssets\",\"type\":\"uint256\"}],\"name\":\"erc4626_setMaxExchangeRate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"maxSharesIn\",\"type\":\"uint256\"}],\"name\":\"erc4626_withdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"script/interfaces/ExternalFacetInterfaces.sol\":\"IERC4626FacetExternal\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@ensdomains/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/v4-core/node_modules/@ensdomains/\",\":@layerzerolabs/lz-evm-messagelib-v2/=lib/diamond-pau/lib/layerzero-v2/packages/layerzero-v2/evm/messagelib/\",\":@layerzerolabs/lz-evm-protocol-v2/=lib/diamond-pau/lib/layerzero-v2/packages/layerzero-v2/evm/protocol/\",\":@layerzerolabs/oft-evm/=lib/diamond-pau/lib/grove-xchain-helpers/lib/devtools/packages/oft-evm/\",\":@openzeppelin/contracts-upgradeable/=lib/diamond-pau/lib/oz-upgradeable/contracts/\",\":@openzeppelin/contracts/=lib/diamond-pau/lib/openzeppelin-contracts/contracts/\",\":@uniswap/v4-core/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/v4-core/\",\":LayerZero-v2/=lib/diamond-pau/lib/grove-xchain-helpers/lib/\",\":aave-v3-core/=lib/diamond-pau/lib/aave-v3-origin/src/core/\",\":aave-v3-origin/=lib/diamond-pau/lib/aave-v3-origin/\",\":aave-v3-periphery/=lib/diamond-pau/lib/aave-v3-origin/src/periphery/\",\":devtools/=lib/diamond-pau/lib/grove-xchain-helpers/lib/devtools/packages/toolbox-foundry/src/\",\":diamond-pau/=lib/diamond-pau/src/\",\":ds-test/=lib/diamond-pau/lib/grove-address-registry/lib/forge-std/lib/ds-test/src/\",\":dss-allocator/=lib/diamond-pau/lib/dss-allocator/\",\":dss-interfaces/=lib/dss-test/lib/dss-interfaces/src/\",\":dss-test/=lib/dss-test/src/\",\":erc20-helpers/=lib/diamond-pau/lib/grove-basin/lib/erc20-helpers/src/\",\":erc4626-tests/=lib/diamond-pau/lib/metamorpho/lib/erc4626-tests/\",\":forge-gas-snapshot/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/permit2/lib/forge-gas-snapshot/src/\",\":forge-std/=lib/forge-std/src/\",\":grove-address-registry/=lib/diamond-pau/lib/grove-address-registry/src/\",\":grove-basin/=lib/diamond-pau/lib/grove-basin/\",\":grove-xchain-helpers/=lib/diamond-pau/lib/grove-xchain-helpers/src/\",\":halmos-cheatcodes/=lib/diamond-pau/lib/grove-basin/lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/\",\":hardhat/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/v4-core/node_modules/hardhat/\",\":layerzero-v2/=lib/diamond-pau/lib/\",\":layerzerolabs/oapp-evm/=lib/diamond-pau/lib/grove-xchain-helpers/lib/devtools/packages/oapp-evm/\",\":metamorpho/=lib/diamond-pau/lib/metamorpho/src/\",\":morpho-blue/=lib/diamond-pau/lib/metamorpho/lib/morpho-blue/\",\":murky/=lib/diamond-pau/lib/metamorpho/lib/universal-rewards-distributor/lib/murky/src/\",\":openzeppelin-contracts-upgradeable/=lib/diamond-pau/lib/spark-vaults-v2/lib/openzeppelin-contracts-upgradeable/\",\":openzeppelin-contracts/=lib/diamond-pau/lib/openzeppelin-contracts/\",\":openzeppelin/=lib/diamond-pau/lib/metamorpho/lib/universal-rewards-distributor/lib/openzeppelin-contracts/contracts/\",\":oz-upgradeable/=lib/diamond-pau/lib/oz-upgradeable/\",\":permit2/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/permit2/\",\":solidity-bytes-utils/=lib/diamond-pau/lib/solidity-bytes-utils/\",\":solidity-utils/=lib/diamond-pau/lib/aave-v3-origin/lib/solidity-utils/\",\":solmate/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/v4-core/lib/solmate/\",\":spark-address-registry/=lib/diamond-pau/lib/spark-address-registry/src/\",\":spark-psm/=lib/diamond-pau/lib/spark-psm/\",\":spark-vaults-v2/=lib/diamond-pau/lib/spark-vaults-v2/\",\":sparklend-address-registry/=lib/diamond-pau/lib/grove-basin/lib/xchain-ssr-oracle/lib/sparklend-address-registry/\",\":token-tests/=lib/diamond-pau/lib/spark-vaults-v2/lib/token-tests/src/\",\":uniswap-v4-periphery/=lib/diamond-pau/lib/uniswap-v4-periphery/\",\":universal-rewards-distributor/=lib/diamond-pau/lib/metamorpho/lib/universal-rewards-distributor/src/\",\":v4-core/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/v4-core/src/\",\":xchain-helpers/=lib/diamond-pau/lib/xchain-helpers/src/\",\":xchain-ssr-oracle/=lib/diamond-pau/lib/grove-basin/lib/xchain-ssr-oracle/\",\"lib/diamond-pau/:dss-test/=lib/diamond-pau/lib/dss-test/src/\"]},\"sources\":{\"lib/diamond-pau/src/facets/IFacet.sol\":{\"keccak256\":\"0x0f0acb5faa3c227edc594e69507f89f0f063712847f361fbc51dbc2e9dd51d0a\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://ded1143f96b28d02e5eae73cf84af8e72ac15b31e2737ae29dc962c2975eb34c\",\"dweb:/ipfs/QmNrdGdJkHC2YWBMx4dQmihdwuSs7XDNgf8NYzQUsZifT2\"]},\"lib/diamond-pau/src/facets/layer-zero/ILayerZeroFacet.sol\":{\"keccak256\":\"0x6df3f92d9a36b4caf02a2f452c5fb63be8a42e800e7c41b69f6dc93bfca743af\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://12b602fddd72faf45bd911ea8d5feb6dd90e128bbcafe4bdb928f04db4234a67\",\"dweb:/ipfs/QmcHmPBo9NZ8Y3nSEay6HitizrvuX86wRU58DVwLAoCsm4\"]},\"lib/diamond-pau/src/facets/uniswap-v3/IUniswapV3Facet.sol\":{\"keccak256\":\"0x39bc467c9e7a0f420225f5cc71ea316c24caf512fc285d85bfdbcb99f1687e89\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://37d8ee74e25b14ba26b9850a064e8a0028d476caa085a5ae0046afc11a00dc3f\",\"dweb:/ipfs/QmTp7H356UcGbceyDzeZPWtAthcSLp88NN4Bk5g4scfiHw\"]},\"script/interfaces/ExternalFacetInterfaces.sol\":{\"keccak256\":\"0xf04136c2bc35f321b9cf134e0713e7a34818153a991102229afc93d07ceb45fe\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://99b23d8faeb52daf3d9c88fc44b72501c8bae8b0f9bd1d7230c2858d728353c8\",\"dweb:/ipfs/Qmb1EaaUzRYDkhZrUkMJgfyU7x3pwgZxUjCSFDmaJ5SJCg\"]}},\"version\":1}",
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
          "name": "erc4626_EXCHANGE_RATE_PRECISION",
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
          "stateMutability": "pure",
          "type": "function",
          "name": "erc4626_VERSION",
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
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minSharesOut",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "erc4626_deposit",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "asset",
              "type": "address"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "erc4626_getDepositRateLimitKey",
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
              "name": "token",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "erc4626_getMaxExchangeRate",
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
              "name": "token",
              "type": "address"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "erc4626_getWithdrawRateLimitKey",
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
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minAssetsOut",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "erc4626_redeem",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "assets",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "maxExpectedAssets",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "erc4626_setMaxExchangeRate"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "maxSharesIn",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "erc4626_withdraw",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "shares",
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
        "script/interfaces/ExternalFacetInterfaces.sol": "IERC4626FacetExternal"
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

export default artifact;
