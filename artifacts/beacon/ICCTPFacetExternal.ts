// Keep this as a TS literal object instead of importing JSON directly.
// TypeScript JSON imports widen to generic string/number/array types, but
// Assay needs literal storage labels, bytecode immutable ids, offsets, and lengths
// to provide proper validation types for the dev experience.
export default {
  "abi": [
    {
      "type": "function",
      "name": "cctp_DESTINATION_CALLER",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "cctp_MIN_FINALITY_THRESHOLD",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint32",
          "internalType": "uint32"
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "cctp_VERSION",
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
      "name": "cctp_cctp",
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
      "name": "cctp_getDomainParameters",
      "inputs": [
        {
          "name": "destinationDomain",
          "type": "uint32",
          "internalType": "uint32"
        }
      ],
      "outputs": [
        {
          "name": "mintRecipient",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "minFeeCapRate",
          "type": "uint32",
          "internalType": "uint32"
        },
        {
          "name": "maxFeeCapRate",
          "type": "uint32",
          "internalType": "uint32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "cctp_getToDomainRateLimitKey",
      "inputs": [
        {
          "name": "destinationDomain",
          "type": "uint32",
          "internalType": "uint32"
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
      "name": "cctp_setDomainParameters",
      "inputs": [
        {
          "name": "destinationDomain",
          "type": "uint32",
          "internalType": "uint32"
        },
        {
          "name": "recipient",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "minFeeCapRate",
          "type": "uint32",
          "internalType": "uint32"
        },
        {
          "name": "maxFeeCapRate",
          "type": "uint32",
          "internalType": "uint32"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "cctp_toCCTPRateLimitKey",
      "inputs": [],
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
      "name": "cctp_transfer",
      "inputs": [
        {
          "name": "usdcAmount",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "destinationDomain",
          "type": "uint32",
          "internalType": "uint32"
        },
        {
          "name": "feeCapRate",
          "type": "uint64",
          "internalType": "uint64"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "cctp_usdc",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
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
    "cctp_DESTINATION_CALLER()": "2c7389a0",
    "cctp_MIN_FINALITY_THRESHOLD()": "75ef4015",
    "cctp_VERSION()": "87bd715a",
    "cctp_cctp()": "f9b8d11c",
    "cctp_getDomainParameters(uint32)": "3c7020e9",
    "cctp_getToDomainRateLimitKey(uint32)": "b2a4d06f",
    "cctp_setDomainParameters(uint32,bytes32,uint32,uint32)": "6969ad0b",
    "cctp_toCCTPRateLimitKey()": "9bbb03f2",
    "cctp_transfer(uint256,uint32,uint64)": "d82592c1",
    "cctp_usdc()": "3520c914"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.34+commit.80d5c536\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"cctp_DESTINATION_CALLER\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"cctp_MIN_FINALITY_THRESHOLD\",\"outputs\":[{\"internalType\":\"uint32\",\"name\":\"\",\"type\":\"uint32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"cctp_VERSION\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"cctp_cctp\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint32\",\"name\":\"destinationDomain\",\"type\":\"uint32\"}],\"name\":\"cctp_getDomainParameters\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"mintRecipient\",\"type\":\"bytes32\"},{\"internalType\":\"uint32\",\"name\":\"minFeeCapRate\",\"type\":\"uint32\"},{\"internalType\":\"uint32\",\"name\":\"maxFeeCapRate\",\"type\":\"uint32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint32\",\"name\":\"destinationDomain\",\"type\":\"uint32\"}],\"name\":\"cctp_getToDomainRateLimitKey\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"key\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint32\",\"name\":\"destinationDomain\",\"type\":\"uint32\"},{\"internalType\":\"bytes32\",\"name\":\"recipient\",\"type\":\"bytes32\"},{\"internalType\":\"uint32\",\"name\":\"minFeeCapRate\",\"type\":\"uint32\"},{\"internalType\":\"uint32\",\"name\":\"maxFeeCapRate\",\"type\":\"uint32\"}],\"name\":\"cctp_setDomainParameters\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"cctp_toCCTPRateLimitKey\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"key\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"usdcAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint32\",\"name\":\"destinationDomain\",\"type\":\"uint32\"},{\"internalType\":\"uint64\",\"name\":\"feeCapRate\",\"type\":\"uint64\"}],\"name\":\"cctp_transfer\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"cctp_usdc\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"script/interfaces/ExternalFacetInterfaces.sol\":\"ICCTPFacetExternal\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@ensdomains/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/v4-core/node_modules/@ensdomains/\",\":@layerzerolabs/lz-evm-messagelib-v2/=lib/diamond-pau/lib/layerzero-v2/packages/layerzero-v2/evm/messagelib/\",\":@layerzerolabs/lz-evm-protocol-v2/=lib/diamond-pau/lib/layerzero-v2/packages/layerzero-v2/evm/protocol/\",\":@layerzerolabs/oft-evm/=lib/diamond-pau/lib/grove-xchain-helpers/lib/devtools/packages/oft-evm/\",\":@openzeppelin/contracts-upgradeable/=lib/diamond-pau/lib/oz-upgradeable/contracts/\",\":@openzeppelin/contracts/=lib/diamond-pau/lib/openzeppelin-contracts/contracts/\",\":@uniswap/v4-core/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/v4-core/\",\":LayerZero-v2/=lib/diamond-pau/lib/grove-xchain-helpers/lib/\",\":aave-v3-core/=lib/diamond-pau/lib/aave-v3-origin/src/core/\",\":aave-v3-origin/=lib/diamond-pau/lib/aave-v3-origin/\",\":aave-v3-periphery/=lib/diamond-pau/lib/aave-v3-origin/src/periphery/\",\":devtools/=lib/diamond-pau/lib/grove-xchain-helpers/lib/devtools/packages/toolbox-foundry/src/\",\":diamond-pau/=lib/diamond-pau/src/\",\":ds-test/=lib/diamond-pau/lib/grove-address-registry/lib/forge-std/lib/ds-test/src/\",\":dss-allocator/=lib/diamond-pau/lib/dss-allocator/\",\":dss-interfaces/=lib/dss-test/lib/dss-interfaces/src/\",\":dss-test/=lib/dss-test/src/\",\":erc20-helpers/=lib/diamond-pau/lib/grove-basin/lib/erc20-helpers/src/\",\":erc4626-tests/=lib/diamond-pau/lib/metamorpho/lib/erc4626-tests/\",\":forge-gas-snapshot/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/permit2/lib/forge-gas-snapshot/src/\",\":forge-std/=lib/forge-std/src/\",\":grove-address-registry/=lib/diamond-pau/lib/grove-address-registry/src/\",\":grove-basin/=lib/diamond-pau/lib/grove-basin/\",\":grove-xchain-helpers/=lib/diamond-pau/lib/grove-xchain-helpers/src/\",\":halmos-cheatcodes/=lib/diamond-pau/lib/grove-basin/lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/\",\":hardhat/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/v4-core/node_modules/hardhat/\",\":layerzero-v2/=lib/diamond-pau/lib/\",\":layerzerolabs/oapp-evm/=lib/diamond-pau/lib/grove-xchain-helpers/lib/devtools/packages/oapp-evm/\",\":metamorpho/=lib/diamond-pau/lib/metamorpho/src/\",\":morpho-blue/=lib/diamond-pau/lib/metamorpho/lib/morpho-blue/\",\":murky/=lib/diamond-pau/lib/metamorpho/lib/universal-rewards-distributor/lib/murky/src/\",\":openzeppelin-contracts-upgradeable/=lib/diamond-pau/lib/spark-vaults-v2/lib/openzeppelin-contracts-upgradeable/\",\":openzeppelin-contracts/=lib/diamond-pau/lib/openzeppelin-contracts/\",\":openzeppelin/=lib/diamond-pau/lib/metamorpho/lib/universal-rewards-distributor/lib/openzeppelin-contracts/contracts/\",\":oz-upgradeable/=lib/diamond-pau/lib/oz-upgradeable/\",\":permit2/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/permit2/\",\":solidity-bytes-utils/=lib/diamond-pau/lib/solidity-bytes-utils/\",\":solidity-utils/=lib/diamond-pau/lib/aave-v3-origin/lib/solidity-utils/\",\":solmate/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/v4-core/lib/solmate/\",\":spark-address-registry/=lib/diamond-pau/lib/spark-address-registry/src/\",\":spark-psm/=lib/diamond-pau/lib/spark-psm/\",\":spark-vaults-v2/=lib/diamond-pau/lib/spark-vaults-v2/\",\":sparklend-address-registry/=lib/diamond-pau/lib/grove-basin/lib/xchain-ssr-oracle/lib/sparklend-address-registry/\",\":token-tests/=lib/diamond-pau/lib/spark-vaults-v2/lib/token-tests/src/\",\":uniswap-v4-periphery/=lib/diamond-pau/lib/uniswap-v4-periphery/\",\":universal-rewards-distributor/=lib/diamond-pau/lib/metamorpho/lib/universal-rewards-distributor/src/\",\":v4-core/=lib/diamond-pau/lib/uniswap-v4-periphery/lib/v4-core/src/\",\":xchain-helpers/=lib/diamond-pau/lib/xchain-helpers/src/\",\":xchain-ssr-oracle/=lib/diamond-pau/lib/grove-basin/lib/xchain-ssr-oracle/\",\"lib/diamond-pau/:dss-test/=lib/diamond-pau/lib/dss-test/src/\"]},\"sources\":{\"lib/diamond-pau/src/facets/IFacet.sol\":{\"keccak256\":\"0x0f0acb5faa3c227edc594e69507f89f0f063712847f361fbc51dbc2e9dd51d0a\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://ded1143f96b28d02e5eae73cf84af8e72ac15b31e2737ae29dc962c2975eb34c\",\"dweb:/ipfs/QmNrdGdJkHC2YWBMx4dQmihdwuSs7XDNgf8NYzQUsZifT2\"]},\"lib/diamond-pau/src/facets/layer-zero/ILayerZeroFacet.sol\":{\"keccak256\":\"0x6df3f92d9a36b4caf02a2f452c5fb63be8a42e800e7c41b69f6dc93bfca743af\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://12b602fddd72faf45bd911ea8d5feb6dd90e128bbcafe4bdb928f04db4234a67\",\"dweb:/ipfs/QmcHmPBo9NZ8Y3nSEay6HitizrvuX86wRU58DVwLAoCsm4\"]},\"lib/diamond-pau/src/facets/uniswap-v3/IUniswapV3Facet.sol\":{\"keccak256\":\"0x39bc467c9e7a0f420225f5cc71ea316c24caf512fc285d85bfdbcb99f1687e89\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://37d8ee74e25b14ba26b9850a064e8a0028d476caa085a5ae0046afc11a00dc3f\",\"dweb:/ipfs/QmTp7H356UcGbceyDzeZPWtAthcSLp88NN4Bk5g4scfiHw\"]},\"script/interfaces/ExternalFacetInterfaces.sol\":{\"keccak256\":\"0xf04136c2bc35f321b9cf134e0713e7a34818153a991102229afc93d07ceb45fe\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://99b23d8faeb52daf3d9c88fc44b72501c8bae8b0f9bd1d7230c2858d728353c8\",\"dweb:/ipfs/Qmb1EaaUzRYDkhZrUkMJgfyU7x3pwgZxUjCSFDmaJ5SJCg\"]}},\"version\":1}",
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
          "name": "cctp_DESTINATION_CALLER",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "pure",
          "type": "function",
          "name": "cctp_MIN_FINALITY_THRESHOLD",
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
          "stateMutability": "pure",
          "type": "function",
          "name": "cctp_VERSION",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "cctp_cctp",
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
              "internalType": "uint32",
              "name": "destinationDomain",
              "type": "uint32"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "cctp_getDomainParameters",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "mintRecipient",
              "type": "bytes32"
            },
            {
              "internalType": "uint32",
              "name": "minFeeCapRate",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "maxFeeCapRate",
              "type": "uint32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint32",
              "name": "destinationDomain",
              "type": "uint32"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "cctp_getToDomainRateLimitKey",
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
              "internalType": "uint32",
              "name": "destinationDomain",
              "type": "uint32"
            },
            {
              "internalType": "bytes32",
              "name": "recipient",
              "type": "bytes32"
            },
            {
              "internalType": "uint32",
              "name": "minFeeCapRate",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "maxFeeCapRate",
              "type": "uint32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "cctp_setDomainParameters"
        },
        {
          "inputs": [],
          "stateMutability": "pure",
          "type": "function",
          "name": "cctp_toCCTPRateLimitKey",
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
              "internalType": "uint256",
              "name": "usdcAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint32",
              "name": "destinationDomain",
              "type": "uint32"
            },
            {
              "internalType": "uint64",
              "name": "feeCapRate",
              "type": "uint64"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "cctp_transfer"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "cctp_usdc",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
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
        "script/interfaces/ExternalFacetInterfaces.sol": "ICCTPFacetExternal"
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
