const artifact = {
  "abi": [
    {
      "type": "constructor",
      "inputs": [
        {
          "name": "rate_",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "RATE_PRECISION",
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
      "name": "getConversionRate",
      "inputs": [],
      "outputs": [
        {
          "name": "rate_",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getConversionRateWithAge",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        },
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
      "name": "getRatePrecision",
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
      "name": "rate",
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
      "type": "error",
      "name": "ZeroRate",
      "inputs": []
    }
  ],
  "bytecode": {
    "object": "0x60a060405234801561000f575f80fd5b506040516101d73803806101d783398101604081905261002e91610056565b805f0361004e576040516314cee7cd60e11b815260040160405180910390fd5b60805261006d565b5f60208284031215610066575f80fd5b5051919050565b6080516101476100905f395f818160840152818160be015260ed01526101475ff3fe608060405234801561000f575f80fd5b5060043610610055575f3560e01c80632b3ba681146100595780632c4e722e1461007f57806373595502146100a6578063e2ecac64146100b8578063f36089ec146100eb575b5f80fd5b61006c6b033b2e3c9fd0803ce800000081565b6040519081526020015b60405180910390f35b61006c7f000000000000000000000000000000000000000000000000000000000000000081565b6b033b2e3c9fd0803ce800000061006c565b604080517f0000000000000000000000000000000000000000000000000000000000000000815242602082015201610076565b7f000000000000000000000000000000000000000000000000000000000000000061006c56fea2646970667358221220d567ab702efc85d4774f8b642d246045c7da53b2cf442dfbc180397668c59bf864736f6c63430008180033",
    "sourceMap": "372:1101:68:-:0;;;729:99;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;770:5;779:1;770:10;766:33;;789:10;;-1:-1:-1;;;789:10:68;;;;;;;;;;;766:33;809:12;;372:1101;;14:184:150;84:6;137:2;125:9;116:7;112:23;108:32;105:52;;;153:1;150;143:12;105:52;-1:-1:-1;176:16:150;;14:184;-1:-1:-1;14:184:150:o;:::-;372:1101:68;;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561000f575f80fd5b5060043610610055575f3560e01c80632b3ba681146100595780632c4e722e1461007f57806373595502146100a6578063e2ecac64146100b8578063f36089ec146100eb575b5f80fd5b61006c6b033b2e3c9fd0803ce800000081565b6040519081526020015b60405180910390f35b61006c7f000000000000000000000000000000000000000000000000000000000000000081565b6b033b2e3c9fd0803ce800000061006c565b604080517f0000000000000000000000000000000000000000000000000000000000000000815242602082015201610076565b7f000000000000000000000000000000000000000000000000000000000000000061006c56fea2646970667358221220d567ab702efc85d4774f8b642d246045c7da53b2cf442dfbc180397668c59bf864736f6c63430008180033",
    "sourceMap": "372:1101:68:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;506:45;;547:4;506:45;;;;;160:25:150;;;148:2;133:18;506:45:68;;;;;;;;619:29;;;;;1363:107;547:4;1363:107;;1050:137;;;;1289:4;370:25:150;;1295:15:68;426:2:150;411:18;;404:34;343:18;1050:137:68;196:248:150;873:132:68;1289:4;873:132;",
    "linkReferences": {},
    "immutableReferences": {
      "54643": [
        {
          "start": 132,
          "length": 32
        },
        {
          "start": 190,
          "length": 32
        },
        {
          "start": 237,
          "length": 32
        }
      ]
    }
  },
  "methodIdentifiers": {
    "RATE_PRECISION()": "2b3ba681",
    "getConversionRate()": "f36089ec",
    "getConversionRateWithAge()": "e2ecac64",
    "getRatePrecision()": "73595502",
    "rate()": "2c4e722e"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.24+commit.e11b9ed9\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"rate_\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"ZeroRate\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RATE_PRECISION\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getConversionRate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"rate_\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getConversionRateWithAge\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getRatePrecision\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"rate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"rate_\":\"The fixed conversion rate to use (must be non-zero).\"}},\"getConversionRate()\":{\"returns\":{\"rate_\":\"The conversion rate.\"}},\"getConversionRateWithAge()\":{\"returns\":{\"_0\":\"       The conversion rate in 1e27 precision.\",\"_1\":\"Timestamp of the last rate update.\"}},\"getRatePrecision()\":{\"returns\":{\"_0\":\"The rate precision.\"}}},\"title\":\"FixedRateProvider\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"RATE_PRECISION()\":{\"notice\":\"Precision of the returned rate (1e27).\"},\"getConversionRate()\":{\"notice\":\"Returns the current conversion rate in 1e27 precision.\"},\"getConversionRateWithAge()\":{\"notice\":\"Returns the conversion rate and the timestamp it was last updated.\"},\"getRatePrecision()\":{\"notice\":\"Returns the precision of the rate (1e27).\"},\"rate()\":{\"notice\":\"The fixed conversion rate in 1e27 precision.\"}},\"notice\":\"Rate provider that returns a fixed, immutable conversion rate set at deployment.         Always reports the current block timestamp as the rate age, so it never goes stale.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/rate-providers/FixedRateProvider.sol\":\"FixedRateProvider\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":180},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/grove-address-registry/lib/forge-std/lib/ds-test/src/\",\":erc20-helpers/=lib/erc20-helpers/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":grove-address-registry/=lib/grove-address-registry/src/\",\":halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":sparklend-address-registry/=lib/xchain-ssr-oracle/lib/sparklend-address-registry/\",\":xchain-helpers/=lib/xchain-ssr-oracle/lib/xchain-helpers/src/\",\":xchain-ssr-oracle/=lib/xchain-ssr-oracle/\"]},\"sources\":{\"src/interfaces/IGroveRateProvider.sol\":{\"keccak256\":\"0x0423757279410b1393937b45506391e31f89f3f91de3b7f2d07cc1f2c649a988\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://7595b0663a8dbfc6bcaa5f8ea375fb4b7133dc0481cd66d4b11648f0c7210df2\",\"dweb:/ipfs/QmXLaqiaoB6Vb7qTJBJ1yU1cxkhXiTuJ2ftmauYwjsrCot\"]},\"src/rate-providers/FixedRateProvider.sol\":{\"keccak256\":\"0x8de621b7ea93fcdc65b0e033fddf68594a96aa78766dd1a4130d3aabef109ca5\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://132714d00dca7db3dc9360af2e8349d1d9274449b1593148db0f34f0c74cfaf0\",\"dweb:/ipfs/QmPiYwXEcXEtGuMw3gX6FZZoeH2R9kVAw268JS9iKLmnpC\"]}},\"version\":1}",
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
              "internalType": "uint256",
              "name": "rate_",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ZeroRate"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "RATE_PRECISION",
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
          "name": "getConversionRate",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "rate_",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getConversionRateWithAge",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
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
          "name": "getRatePrecision",
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
          "name": "rate",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "constructor": {
            "params": {
              "rate_": "The fixed conversion rate to use (must be non-zero)."
            }
          },
          "getConversionRate()": {
            "returns": {
              "rate_": "The conversion rate."
            }
          },
          "getConversionRateWithAge()": {
            "returns": {
              "_0": "       The conversion rate in 1e27 precision.",
              "_1": "Timestamp of the last rate update."
            }
          },
          "getRatePrecision()": {
            "returns": {
              "_0": "The rate precision."
            }
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "RATE_PRECISION()": {
            "notice": "Precision of the returned rate (1e27)."
          },
          "getConversionRate()": {
            "notice": "Returns the current conversion rate in 1e27 precision."
          },
          "getConversionRateWithAge()": {
            "notice": "Returns the conversion rate and the timestamp it was last updated."
          },
          "getRatePrecision()": {
            "notice": "Returns the precision of the rate (1e27)."
          },
          "rate()": {
            "notice": "The fixed conversion rate in 1e27 precision."
          }
        },
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
        "ds-test/=lib/grove-address-registry/lib/forge-std/lib/ds-test/src/",
        "erc20-helpers/=lib/erc20-helpers/src/",
        "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "grove-address-registry/=lib/grove-address-registry/src/",
        "halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/",
        "sparklend-address-registry/=lib/xchain-ssr-oracle/lib/sparklend-address-registry/",
        "xchain-helpers/=lib/xchain-ssr-oracle/lib/xchain-helpers/src/",
        "xchain-ssr-oracle/=lib/xchain-ssr-oracle/"
      ],
      "optimizer": {
        "enabled": true,
        "runs": 180
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "src/rate-providers/FixedRateProvider.sol": "FixedRateProvider"
      },
      "evmVersion": "cancun",
      "libraries": {}
    },
    "sources": {
      "src/interfaces/IGroveRateProvider.sol": {
        "keccak256": "0x0423757279410b1393937b45506391e31f89f3f91de3b7f2d07cc1f2c649a988",
        "urls": [
          "bzz-raw://7595b0663a8dbfc6bcaa5f8ea375fb4b7133dc0481cd66d4b11648f0c7210df2",
          "dweb:/ipfs/QmXLaqiaoB6Vb7qTJBJ1yU1cxkhXiTuJ2ftmauYwjsrCot"
        ],
        "license": "AGPL-3.0-or-later"
      },
      "src/rate-providers/FixedRateProvider.sol": {
        "keccak256": "0x8de621b7ea93fcdc65b0e033fddf68594a96aa78766dd1a4130d3aabef109ca5",
        "urls": [
          "bzz-raw://132714d00dca7db3dc9360af2e8349d1d9274449b1593148db0f34f0c74cfaf0",
          "dweb:/ipfs/QmPiYwXEcXEtGuMw3gX6FZZoeH2R9kVAw268JS9iKLmnpC"
        ],
        "license": "AGPL-3.0-or-later"
      }
    },
    "version": 1
  },
  "storageLayout": {
    "storage": [],
    "types": {}
  },
  "ast": {
    "absolutePath": "src/rate-providers/FixedRateProvider.sol",
    "id": 54713,
    "exportedSymbols": {
      "FixedRateProvider": [
        54712
      ],
      "IGroveRateProvider": [
        53247
      ]
    },
    "nodeType": "SourceUnit",
    "src": "46:1428:68",
    "nodes": [
      {
        "id": 54629,
        "nodeType": "PragmaDirective",
        "src": "46:24:68",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".24"
        ]
      },
      {
        "id": 54631,
        "nodeType": "ImportDirective",
        "src": "72:74:68",
        "nodes": [],
        "absolutePath": "src/interfaces/IGroveRateProvider.sol",
        "file": "../interfaces/IGroveRateProvider.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 54713,
        "sourceUnit": 53248,
        "symbolAliases": [
          {
            "foreign": {
              "id": 54630,
              "name": "IGroveRateProvider",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 53247,
              "src": "81:18:68",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 54712,
        "nodeType": "ContractDefinition",
        "src": "372:1101:68",
        "nodes": [
          {
            "id": 54636,
            "nodeType": "ErrorDefinition",
            "src": "428:17:68",
            "nodes": [],
            "errorSelector": "299dcf9a",
            "name": "ZeroRate",
            "nameLocation": "434:8:68",
            "parameters": {
              "id": 54635,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "442:2:68"
            }
          },
          {
            "id": 54640,
            "nodeType": "VariableDeclaration",
            "src": "506:45:68",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 54637,
              "nodeType": "StructuredDocumentation",
              "src": "451:50:68",
              "text": "@notice Precision of the returned rate (1e27)."
            },
            "functionSelector": "2b3ba681",
            "mutability": "constant",
            "name": "RATE_PRECISION",
            "nameLocation": "530:14:68",
            "scope": 54712,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54638,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "506:7:68",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "31653237",
              "id": 54639,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "547:4:68",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1000000000000000000000000000_by_1",
                "typeString": "int_const 1000000000000000000000000000"
              },
              "value": "1e27"
            },
            "visibility": "public"
          },
          {
            "id": 54643,
            "nodeType": "VariableDeclaration",
            "src": "619:29:68",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 54641,
              "nodeType": "StructuredDocumentation",
              "src": "558:56:68",
              "text": "@notice The fixed conversion rate in 1e27 precision."
            },
            "functionSelector": "2c4e722e",
            "mutability": "immutable",
            "name": "rate",
            "nameLocation": "644:4:68",
            "scope": 54712,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54642,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "619:7:68",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "id": 54661,
            "nodeType": "FunctionDefinition",
            "src": "729:99:68",
            "nodes": [],
            "body": {
              "id": 54660,
              "nodeType": "Block",
              "src": "756:72:68",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 54651,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 54649,
                      "name": "rate_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54646,
                      "src": "770:5:68",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 54650,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "779:1:68",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "770:10:68",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 54655,
                  "nodeType": "IfStatement",
                  "src": "766:33:68",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 54652,
                        "name": "ZeroRate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54636,
                        "src": "789:8:68",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 54653,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "789:10:68",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 54654,
                    "nodeType": "RevertStatement",
                    "src": "782:17:68"
                  }
                },
                {
                  "expression": {
                    "id": 54658,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 54656,
                      "name": "rate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54643,
                      "src": "809:4:68",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 54657,
                      "name": "rate_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54646,
                      "src": "816:5:68",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "809:12:68",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 54659,
                  "nodeType": "ExpressionStatement",
                  "src": "809:12:68"
                }
              ]
            },
            "documentation": {
              "id": 54644,
              "nodeType": "StructuredDocumentation",
              "src": "655:69:68",
              "text": "@param rate_ The fixed conversion rate to use (must be non-zero)."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 54647,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54646,
                  "mutability": "mutable",
                  "name": "rate_",
                  "nameLocation": "749:5:68",
                  "nodeType": "VariableDeclaration",
                  "scope": 54661,
                  "src": "741:13:68",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54645,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "741:7:68",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "740:15:68"
            },
            "returnParameters": {
              "id": 54648,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "756:0:68"
            },
            "scope": 54712,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 54675,
            "nodeType": "FunctionDefinition",
            "src": "873:132:68",
            "nodes": [],
            "body": {
              "id": 54674,
              "nodeType": "Block",
              "src": "949:56:68",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 54672,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 54668,
                          "name": "rate_",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 54666,
                          "src": "960:5:68",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        null
                      ],
                      "id": 54669,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "959:9:68",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$__$",
                        "typeString": "tuple(uint256,)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 54670,
                        "name": "_getConversionRateWithAge",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54701,
                        "src": "971:25:68",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$_t_uint256_$",
                          "typeString": "function () view returns (uint256,uint256)"
                        }
                      },
                      "id": 54671,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "971:27:68",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "src": "959:39:68",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 54673,
                  "nodeType": "ExpressionStatement",
                  "src": "959:39:68"
                }
              ]
            },
            "baseFunctions": [
              53232
            ],
            "documentation": {
              "id": 54662,
              "nodeType": "StructuredDocumentation",
              "src": "834:34:68",
              "text": "@inheritdoc IGroveRateProvider"
            },
            "functionSelector": "f36089ec",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getConversionRate",
            "nameLocation": "882:17:68",
            "overrides": {
              "id": 54664,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "916:8:68"
            },
            "parameters": {
              "id": 54663,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "899:2:68"
            },
            "returnParameters": {
              "id": 54667,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54666,
                  "mutability": "mutable",
                  "name": "rate_",
                  "nameLocation": "942:5:68",
                  "nodeType": "VariableDeclaration",
                  "scope": 54675,
                  "src": "934:13:68",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54665,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "934:7:68",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "933:15:68"
            },
            "scope": 54712,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 54688,
            "nodeType": "FunctionDefinition",
            "src": "1050:137:68",
            "nodes": [],
            "body": {
              "id": 54687,
              "nodeType": "Block",
              "src": "1136:51:68",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 54684,
                      "name": "_getConversionRateWithAge",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54701,
                      "src": "1153:25:68",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function () view returns (uint256,uint256)"
                      }
                    },
                    "id": 54685,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1153:27:68",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 54683,
                  "id": 54686,
                  "nodeType": "Return",
                  "src": "1146:34:68"
                }
              ]
            },
            "baseFunctions": [
              53240
            ],
            "documentation": {
              "id": 54676,
              "nodeType": "StructuredDocumentation",
              "src": "1011:34:68",
              "text": "@inheritdoc IGroveRateProvider"
            },
            "functionSelector": "e2ecac64",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getConversionRateWithAge",
            "nameLocation": "1059:24:68",
            "overrides": {
              "id": 54678,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1100:8:68"
            },
            "parameters": {
              "id": 54677,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1083:2:68"
            },
            "returnParameters": {
              "id": 54683,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54680,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 54688,
                  "src": "1118:7:68",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54679,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1118:7:68",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 54682,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 54688,
                  "src": "1127:7:68",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54681,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1127:7:68",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1117:18:68"
            },
            "scope": 54712,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 54701,
            "nodeType": "FunctionDefinition",
            "src": "1193:125:68",
            "nodes": [],
            "body": {
              "id": 54700,
              "nodeType": "Block",
              "src": "1271:47:68",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "components": [
                      {
                        "id": 54695,
                        "name": "rate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54643,
                        "src": "1289:4:68",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 54696,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -4,
                          "src": "1295:5:68",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 54697,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1301:9:68",
                        "memberName": "timestamp",
                        "nodeType": "MemberAccess",
                        "src": "1295:15:68",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 54698,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "1288:23:68",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 54694,
                  "id": 54699,
                  "nodeType": "Return",
                  "src": "1281:30:68"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getConversionRateWithAge",
            "nameLocation": "1202:25:68",
            "parameters": {
              "id": 54689,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1227:2:68"
            },
            "returnParameters": {
              "id": 54694,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54691,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 54701,
                  "src": "1253:7:68",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54690,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1253:7:68",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 54693,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 54701,
                  "src": "1262:7:68",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54692,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1262:7:68",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1252:18:68"
            },
            "scope": 54712,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 54711,
            "nodeType": "FunctionDefinition",
            "src": "1363:107:68",
            "nodes": [],
            "body": {
              "id": 54710,
              "nodeType": "Block",
              "src": "1432:38:68",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 54708,
                    "name": "RATE_PRECISION",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 54640,
                    "src": "1449:14:68",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 54707,
                  "id": 54709,
                  "nodeType": "Return",
                  "src": "1442:21:68"
                }
              ]
            },
            "baseFunctions": [
              53246
            ],
            "documentation": {
              "id": 54702,
              "nodeType": "StructuredDocumentation",
              "src": "1324:34:68",
              "text": "@inheritdoc IGroveRateProvider"
            },
            "functionSelector": "73595502",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getRatePrecision",
            "nameLocation": "1372:16:68",
            "overrides": {
              "id": 54704,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1405:8:68"
            },
            "parameters": {
              "id": 54703,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1388:2:68"
            },
            "returnParameters": {
              "id": 54707,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54706,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 54711,
                  "src": "1423:7:68",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54705,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1423:7:68",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1422:9:68"
            },
            "scope": 54712,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 54633,
              "name": "IGroveRateProvider",
              "nameLocations": [
                "402:18:68"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 53247,
              "src": "402:18:68"
            },
            "id": 54634,
            "nodeType": "InheritanceSpecifier",
            "src": "402:18:68"
          }
        ],
        "canonicalName": "FixedRateProvider",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 54632,
          "nodeType": "StructuredDocumentation",
          "src": "148:223:68",
          "text": " @title  FixedRateProvider\n @notice Rate provider that returns a fixed, immutable conversion rate set at deployment.\n         Always reports the current block timestamp as the rate age, so it never goes stale."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          54712,
          53247
        ],
        "name": "FixedRateProvider",
        "nameLocation": "381:17:68",
        "scope": 54713,
        "usedErrors": [
          54636
        ],
        "usedEvents": []
      }
    ],
    "license": "AGPL-3.0-or-later"
  },
  "id": 68
} as const;

export default artifact;
