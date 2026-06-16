const artifact = {
  "abi": [
    {
      "type": "constructor",
      "inputs": [
        {
          "name": "oracle_",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "CHRONICLE_PRECISION",
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
          "name": "rate",
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
      "name": "oracle",
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
      "type": "error",
      "name": "ZeroOracle",
      "inputs": []
    }
  ],
  "bytecode": {
    "object": "0x60a060405234801561000f575f80fd5b5060405161033b38038061033b83398101604081905261002e91610066565b6001600160a01b03811661005557604051636ab74eb360e11b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f80fd5b81516001600160a01b038116811461008c575f80fd5b9392505050565b60805161028a6100b15f395f818160a10152610136015261028a5ff3fe608060405234801561000f575f80fd5b5060043610610060575f3560e01c80632b3ba68114610064578063735955021461008a5780637dc0d1d01461009c578063e2ecac64146100db578063ee6e5974146100f8578063f36089ec14610107575b5f80fd5b6100776b033b2e3c9fd0803ce800000081565b6040519081526020015b60405180910390f35b6b033b2e3c9fd0803ce8000000610077565b6100c37f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610081565b6100e361010f565b60408051928352602083019190915201610081565b610077670de0b6b3a764000081565b610077610121565b5f80610119610130565b915091509091565b5f61012a610130565b50919050565b5f805f807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663393e5ede6040518163ffffffff1660e01b81526004016040805180830381865afa15801561018f573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101b391906101ea565b9092509050670de0b6b3a76400006101d76b033b2e3c9fd0803ce80000008461020c565b6101e19190610235565b94909350915050565b5f80604083850312156101fb575f80fd5b505080516020909101519092909150565b808202811582820484141761022f57634e487b7160e01b5f52601160045260245ffd5b92915050565b5f8261024f57634e487b7160e01b5f52601260045260245ffd5b50049056fea2646970667358221220cc5a36e8f59f956e6fe5257a281b8769a3cc6eb9026eba0de4c461d531d65cf764736f6c63430008180033",
    "sourceMap": "457:1353:67:-:0;;;942:118;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;985:21:67;;981:46;;1015:12;;-1:-1:-1;;;1015:12:67;;;;;;;;;;;981:46;-1:-1:-1;;;;;1037:16:67;;;457:1353;;14:290:150;84:6;137:2;125:9;116:7;112:23;108:32;105:52;;;153:1;150;143:12;105:52;179:16;;-1:-1:-1;;;;;224:31:150;;214:42;;204:70;;270:1;267;260:12;204:70;293:5;14:290;-1:-1:-1;;;14:290:150:o;:::-;457:1353:67;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561000f575f80fd5b5060043610610060575f3560e01c80632b3ba68114610064578063735955021461008a5780637dc0d1d01461009c578063e2ecac64146100db578063ee6e5974146100f8578063f36089ec14610107575b5f80fd5b6100776b033b2e3c9fd0803ce800000081565b6040519081526020015b60405180910390f35b6b033b2e3c9fd0803ce8000000610077565b6100c37f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610081565b6100e361010f565b60408051928352602083019190915201610081565b610077670de0b6b3a764000081565b610077610121565b5f80610119610130565b915091509091565b5f61012a610130565b50919050565b5f805f807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663393e5ede6040518163ffffffff1660e01b81526004016040805180830381865afa15801561018f573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101b391906101ea565b9092509050670de0b6b3a76400006101d76b033b2e3c9fd0803ce80000008461020c565b6101e19190610235565b94909350915050565b5f80604083850312156101fb575f80fd5b505080516020909101519092909150565b808202811582820484141761022f57634e487b7160e01b5f52601160045260245ffd5b92915050565b5f8261024f57634e487b7160e01b5f52601260045260245ffd5b50049056fea2646970667358221220cc5a36e8f59f956e6fe5257a281b8769a3cc6eb9026eba0de4c461d531d65cf764736f6c63430008180033",
    "sourceMap": "457:1353:67:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;597:45;;638:4;597:45;;;;;160:25:150;;;148:2;133:18;597:45:67;;;;;;;;1700:107;638:4;1700:107;;829:31;;;;;;;;-1:-1:-1;;;;;360:32:150;;;342:51;;330:2;315:18;829:31:67;196:203:150;1280:137:67;;;:::i;:::-;;;;578:25:150;;;634:2;619:18;;612:34;;;;551:18;1280:137:67;404:248:150;714:50:67;;760:4;714:50;;1105:130;;;:::i;1280:137::-;1348:7;1357;1383:27;:25;:27::i;:::-;1376:34;;;;1280:137;;:::o;1105:130::-;1166:12;1201:27;:25;:27::i;:::-;-1:-1:-1;1190:38:67;1105:130;-1:-1:-1;1105:130:67:o;1423:232::-;1483:7;1492;1512:11;1525;1561:6;-1:-1:-1;;;;;1540:40:67;;:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1511:71;;-1:-1:-1;1511:71:67;-1:-1:-1;760:4:67;1600:20;638:4;1511:71;1600:20;:::i;:::-;:42;;;;:::i;:::-;1592:56;1644:3;;-1:-1:-1;1423:232:67;-1:-1:-1;;1423:232:67:o;657:245:150:-;736:6;744;797:2;785:9;776:7;772:23;768:32;765:52;;;813:1;810;803:12;765:52;-1:-1:-1;;836:16:150;;892:2;877:18;;;871:25;836:16;;871:25;;-1:-1:-1;657:245:150:o;907:265::-;980:9;;;1011;;1028:15;;;1022:22;;1008:37;998:168;;1088:10;1083:3;1079:20;1076:1;1069:31;1123:4;1120:1;1113:15;1151:4;1148:1;1141:15;998:168;907:265;;;;:::o;1177:217::-;1217:1;1243;1233:132;;1287:10;1282:3;1278:20;1275:1;1268:31;1322:4;1319:1;1312:15;1350:4;1347:1;1340:15;1233:132;-1:-1:-1;1379:9:150;;1177:217::o",
    "linkReferences": {},
    "immutableReferences": {
      "54542": [
        {
          "start": 161,
          "length": 32
        },
        {
          "start": 310,
          "length": 32
        }
      ]
    }
  },
  "methodIdentifiers": {
    "CHRONICLE_PRECISION()": "ee6e5974",
    "RATE_PRECISION()": "2b3ba681",
    "getConversionRate()": "f36089ec",
    "getConversionRateWithAge()": "e2ecac64",
    "getRatePrecision()": "73595502",
    "oracle()": "7dc0d1d0"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.24+commit.e11b9ed9\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"oracle_\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"ZeroOracle\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"CHRONICLE_PRECISION\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"RATE_PRECISION\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getConversionRate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"rate\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getConversionRateWithAge\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getRatePrecision\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"oracle\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"oracle_\":\"Address of the Chronicle oracle (must be non-zero).\"}},\"getConversionRate()\":{\"returns\":{\"rate\":\"The conversion rate.\"}},\"getConversionRateWithAge()\":{\"returns\":{\"_0\":\"       The conversion rate in 1e27 precision.\",\"_1\":\"Timestamp of the last rate update.\"}},\"getRatePrecision()\":{\"returns\":{\"_0\":\"The rate precision.\"}}},\"title\":\"ChronicleRateProvider\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"CHRONICLE_PRECISION()\":{\"notice\":\"Native precision of the Chronicle oracle (1e18).\"},\"RATE_PRECISION()\":{\"notice\":\"Precision of the returned rate (1e27).\"},\"getConversionRate()\":{\"notice\":\"Returns the current conversion rate in 1e27 precision.\"},\"getConversionRateWithAge()\":{\"notice\":\"Returns the conversion rate and the timestamp it was last updated.\"},\"getRatePrecision()\":{\"notice\":\"Returns the precision of the rate (1e27).\"},\"oracle()\":{\"notice\":\"Address of the Chronicle oracle contract.\"}},\"notice\":\"Rate provider that fetches conversion rates from a Chronicle oracle, scaling the         returned value from 1e18 (Chronicle precision) to 1e27 (rate provider precision).\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/rate-providers/ChronicleRateProvider.sol\":\"ChronicleRateProvider\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":180},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/grove-address-registry/lib/forge-std/lib/ds-test/src/\",\":erc20-helpers/=lib/erc20-helpers/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":grove-address-registry/=lib/grove-address-registry/src/\",\":halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":sparklend-address-registry/=lib/xchain-ssr-oracle/lib/sparklend-address-registry/\",\":xchain-helpers/=lib/xchain-ssr-oracle/lib/xchain-helpers/src/\",\":xchain-ssr-oracle/=lib/xchain-ssr-oracle/\"]},\"sources\":{\"src/interfaces/IChronicleOracleLike.sol\":{\"keccak256\":\"0xebb2ced5b23dbca95fae6ccb7b349a98fc2d0197c2cfda0e9496b184f3ce8c99\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://ad5d104a2474a72efccf71e38cda39cce928a985f6770fb9b8ba8aed2f5ed8f8\",\"dweb:/ipfs/QmQTTJV4Da3CpBfdJRbWyecwSSQBfSgH1isXTbYLhCtfEN\"]},\"src/interfaces/IGroveRateProvider.sol\":{\"keccak256\":\"0x0423757279410b1393937b45506391e31f89f3f91de3b7f2d07cc1f2c649a988\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://7595b0663a8dbfc6bcaa5f8ea375fb4b7133dc0481cd66d4b11648f0c7210df2\",\"dweb:/ipfs/QmXLaqiaoB6Vb7qTJBJ1yU1cxkhXiTuJ2ftmauYwjsrCot\"]},\"src/rate-providers/ChronicleRateProvider.sol\":{\"keccak256\":\"0x2704f396c158d6e5c74394d096a9f819e385d4eaeb23444b3ee295b3299bbf69\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://d253ae8c3a1ce24a4cd462fcf31550f7601779583d7159b8542c20e8086b6ef6\",\"dweb:/ipfs/Qma53i1L98RZbJxuhwXjNoaAnLDTrxQLn2kLb8HchWR83G\"]}},\"version\":1}",
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
              "name": "oracle_",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ZeroOracle"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "CHRONICLE_PRECISION",
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
              "name": "rate",
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
          "name": "oracle",
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
        "methods": {
          "constructor": {
            "params": {
              "oracle_": "Address of the Chronicle oracle (must be non-zero)."
            }
          },
          "getConversionRate()": {
            "returns": {
              "rate": "The conversion rate."
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
          "CHRONICLE_PRECISION()": {
            "notice": "Native precision of the Chronicle oracle (1e18)."
          },
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
          "oracle()": {
            "notice": "Address of the Chronicle oracle contract."
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
        "src/rate-providers/ChronicleRateProvider.sol": "ChronicleRateProvider"
      },
      "evmVersion": "cancun",
      "libraries": {}
    },
    "sources": {
      "src/interfaces/IChronicleOracleLike.sol": {
        "keccak256": "0xebb2ced5b23dbca95fae6ccb7b349a98fc2d0197c2cfda0e9496b184f3ce8c99",
        "urls": [
          "bzz-raw://ad5d104a2474a72efccf71e38cda39cce928a985f6770fb9b8ba8aed2f5ed8f8",
          "dweb:/ipfs/QmQTTJV4Da3CpBfdJRbWyecwSSQBfSgH1isXTbYLhCtfEN"
        ],
        "license": "AGPL-3.0-or-later"
      },
      "src/interfaces/IGroveRateProvider.sol": {
        "keccak256": "0x0423757279410b1393937b45506391e31f89f3f91de3b7f2d07cc1f2c649a988",
        "urls": [
          "bzz-raw://7595b0663a8dbfc6bcaa5f8ea375fb4b7133dc0481cd66d4b11648f0c7210df2",
          "dweb:/ipfs/QmXLaqiaoB6Vb7qTJBJ1yU1cxkhXiTuJ2ftmauYwjsrCot"
        ],
        "license": "AGPL-3.0-or-later"
      },
      "src/rate-providers/ChronicleRateProvider.sol": {
        "keccak256": "0x2704f396c158d6e5c74394d096a9f819e385d4eaeb23444b3ee295b3299bbf69",
        "urls": [
          "bzz-raw://d253ae8c3a1ce24a4cd462fcf31550f7601779583d7159b8542c20e8086b6ef6",
          "dweb:/ipfs/Qma53i1L98RZbJxuhwXjNoaAnLDTrxQLn2kLb8HchWR83G"
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
    "absolutePath": "src/rate-providers/ChronicleRateProvider.sol",
    "id": 54628,
    "exportedSymbols": {
      "ChronicleRateProvider": [
        54627
      ],
      "IChronicleOracleLike": [
        52319
      ],
      "IGroveRateProvider": [
        53247
      ]
    },
    "nodeType": "SourceUnit",
    "src": "46:1765:67",
    "nodes": [
      {
        "id": 54522,
        "nodeType": "PragmaDirective",
        "src": "46:24:67",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".24"
        ]
      },
      {
        "id": 54524,
        "nodeType": "ImportDirective",
        "src": "72:78:67",
        "nodes": [],
        "absolutePath": "src/interfaces/IGroveRateProvider.sol",
        "file": "../interfaces/IGroveRateProvider.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 54628,
        "sourceUnit": 53248,
        "symbolAliases": [
          {
            "foreign": {
              "id": 54523,
              "name": "IGroveRateProvider",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 53247,
              "src": "81:18:67",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 54526,
        "nodeType": "ImportDirective",
        "src": "151:78:67",
        "nodes": [],
        "absolutePath": "src/interfaces/IChronicleOracleLike.sol",
        "file": "../interfaces/IChronicleOracleLike.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 54628,
        "sourceUnit": 52320,
        "symbolAliases": [
          {
            "foreign": {
              "id": 54525,
              "name": "IChronicleOracleLike",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 52319,
              "src": "160:20:67",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 54627,
        "nodeType": "ContractDefinition",
        "src": "457:1353:67",
        "nodes": [
          {
            "id": 54531,
            "nodeType": "ErrorDefinition",
            "src": "517:19:67",
            "nodes": [],
            "errorSelector": "d56e9d66",
            "name": "ZeroOracle",
            "nameLocation": "523:10:67",
            "parameters": {
              "id": 54530,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "533:2:67"
            }
          },
          {
            "id": 54535,
            "nodeType": "VariableDeclaration",
            "src": "597:45:67",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 54532,
              "nodeType": "StructuredDocumentation",
              "src": "542:50:67",
              "text": "@notice Precision of the returned rate (1e27)."
            },
            "functionSelector": "2b3ba681",
            "mutability": "constant",
            "name": "RATE_PRECISION",
            "nameLocation": "621:14:67",
            "scope": 54627,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54533,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "597:7:67",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "31653237",
              "id": 54534,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "638:4:67",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1000000000000000000000000000_by_1",
                "typeString": "int_const 1000000000000000000000000000"
              },
              "value": "1e27"
            },
            "visibility": "public"
          },
          {
            "id": 54539,
            "nodeType": "VariableDeclaration",
            "src": "714:50:67",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 54536,
              "nodeType": "StructuredDocumentation",
              "src": "649:60:67",
              "text": "@notice Native precision of the Chronicle oracle (1e18)."
            },
            "functionSelector": "ee6e5974",
            "mutability": "constant",
            "name": "CHRONICLE_PRECISION",
            "nameLocation": "738:19:67",
            "scope": 54627,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54537,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "714:7:67",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "31653138",
              "id": 54538,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "760:4:67",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1000000000000000000_by_1",
                "typeString": "int_const 1000000000000000000"
              },
              "value": "1e18"
            },
            "visibility": "public"
          },
          {
            "id": 54542,
            "nodeType": "VariableDeclaration",
            "src": "829:31:67",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 54540,
              "nodeType": "StructuredDocumentation",
              "src": "771:53:67",
              "text": "@notice Address of the Chronicle oracle contract."
            },
            "functionSelector": "7dc0d1d0",
            "mutability": "immutable",
            "name": "oracle",
            "nameLocation": "854:6:67",
            "scope": 54627,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 54541,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "829:7:67",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 54563,
            "nodeType": "FunctionDefinition",
            "src": "942:118:67",
            "nodes": [],
            "body": {
              "id": 54562,
              "nodeType": "Block",
              "src": "971:89:67",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 54553,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 54548,
                      "name": "oracle_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54545,
                      "src": "985:7:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 54551,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1004:1:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 54550,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "996:7:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 54549,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "996:7:67",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 54552,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "996:10:67",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "985:21:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 54557,
                  "nodeType": "IfStatement",
                  "src": "981:46:67",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 54554,
                        "name": "ZeroOracle",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54531,
                        "src": "1015:10:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 54555,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1015:12:67",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 54556,
                    "nodeType": "RevertStatement",
                    "src": "1008:19:67"
                  }
                },
                {
                  "expression": {
                    "id": 54560,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 54558,
                      "name": "oracle",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54542,
                      "src": "1037:6:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 54559,
                      "name": "oracle_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54545,
                      "src": "1046:7:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1037:16:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 54561,
                  "nodeType": "ExpressionStatement",
                  "src": "1037:16:67"
                }
              ]
            },
            "documentation": {
              "id": 54543,
              "nodeType": "StructuredDocumentation",
              "src": "867:70:67",
              "text": "@param oracle_ Address of the Chronicle oracle (must be non-zero)."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 54546,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54545,
                  "mutability": "mutable",
                  "name": "oracle_",
                  "nameLocation": "962:7:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 54563,
                  "src": "954:15:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 54544,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "954:7:67",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "953:17:67"
            },
            "returnParameters": {
              "id": 54547,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "971:0:67"
            },
            "scope": 54627,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 54577,
            "nodeType": "FunctionDefinition",
            "src": "1105:130:67",
            "nodes": [],
            "body": {
              "id": 54576,
              "nodeType": "Block",
              "src": "1180:55:67",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 54574,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 54570,
                          "name": "rate",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 54568,
                          "src": "1191:4:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        null
                      ],
                      "id": 54571,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "1190:8:67",
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
                        "id": 54572,
                        "name": "_getConversionRateWithAge",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54616,
                        "src": "1201:25:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$_t_uint256_$",
                          "typeString": "function () view returns (uint256,uint256)"
                        }
                      },
                      "id": 54573,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1201:27:67",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "src": "1190:38:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 54575,
                  "nodeType": "ExpressionStatement",
                  "src": "1190:38:67"
                }
              ]
            },
            "baseFunctions": [
              53232
            ],
            "documentation": {
              "id": 54564,
              "nodeType": "StructuredDocumentation",
              "src": "1066:34:67",
              "text": "@inheritdoc IGroveRateProvider"
            },
            "functionSelector": "f36089ec",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getConversionRate",
            "nameLocation": "1114:17:67",
            "overrides": {
              "id": 54566,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1148:8:67"
            },
            "parameters": {
              "id": 54565,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1131:2:67"
            },
            "returnParameters": {
              "id": 54569,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54568,
                  "mutability": "mutable",
                  "name": "rate",
                  "nameLocation": "1174:4:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 54577,
                  "src": "1166:12:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54567,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1166:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1165:14:67"
            },
            "scope": 54627,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 54590,
            "nodeType": "FunctionDefinition",
            "src": "1280:137:67",
            "nodes": [],
            "body": {
              "id": 54589,
              "nodeType": "Block",
              "src": "1366:51:67",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 54586,
                      "name": "_getConversionRateWithAge",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54616,
                      "src": "1383:25:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function () view returns (uint256,uint256)"
                      }
                    },
                    "id": 54587,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1383:27:67",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 54585,
                  "id": 54588,
                  "nodeType": "Return",
                  "src": "1376:34:67"
                }
              ]
            },
            "baseFunctions": [
              53240
            ],
            "documentation": {
              "id": 54578,
              "nodeType": "StructuredDocumentation",
              "src": "1241:34:67",
              "text": "@inheritdoc IGroveRateProvider"
            },
            "functionSelector": "e2ecac64",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getConversionRateWithAge",
            "nameLocation": "1289:24:67",
            "overrides": {
              "id": 54580,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1330:8:67"
            },
            "parameters": {
              "id": 54579,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1313:2:67"
            },
            "returnParameters": {
              "id": 54585,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54582,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 54590,
                  "src": "1348:7:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54581,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1348:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 54584,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 54590,
                  "src": "1357:7:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54583,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1357:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1347:18:67"
            },
            "scope": 54627,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 54616,
            "nodeType": "FunctionDefinition",
            "src": "1423:232:67",
            "nodes": [],
            "body": {
              "id": 54615,
              "nodeType": "Block",
              "src": "1501:154:67",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    54598,
                    54600
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 54598,
                      "mutability": "mutable",
                      "name": "val",
                      "nameLocation": "1520:3:67",
                      "nodeType": "VariableDeclaration",
                      "scope": 54615,
                      "src": "1512:11:67",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 54597,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1512:7:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 54600,
                      "mutability": "mutable",
                      "name": "age",
                      "nameLocation": "1533:3:67",
                      "nodeType": "VariableDeclaration",
                      "scope": 54615,
                      "src": "1525:11:67",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 54599,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1525:7:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 54606,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "arguments": [
                          {
                            "id": 54602,
                            "name": "oracle",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 54542,
                            "src": "1561:6:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 54601,
                          "name": "IChronicleOracleLike",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52319,
                          "src": "1540:20:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IChronicleOracleLike_$52319_$",
                            "typeString": "type(contract IChronicleOracleLike)"
                          }
                        },
                        "id": 54603,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1540:28:67",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IChronicleOracleLike_$52319",
                          "typeString": "contract IChronicleOracleLike"
                        }
                      },
                      "id": 54604,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1569:11:67",
                      "memberName": "readWithAge",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 52308,
                      "src": "1540:40:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function () view external returns (uint256,uint256)"
                      }
                    },
                    "id": 54605,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1540:42:67",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1511:71:67"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 54611,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 54609,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 54607,
                            "name": "val",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 54598,
                            "src": "1600:3:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "id": 54608,
                            "name": "RATE_PRECISION",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 54535,
                            "src": "1606:14:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1600:20:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "id": 54610,
                          "name": "CHRONICLE_PRECISION",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 54539,
                          "src": "1623:19:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1600:42:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 54612,
                        "name": "age",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54600,
                        "src": "1644:3:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 54613,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "1599:49:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 54596,
                  "id": 54614,
                  "nodeType": "Return",
                  "src": "1592:56:67"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getConversionRateWithAge",
            "nameLocation": "1432:25:67",
            "parameters": {
              "id": 54591,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1457:2:67"
            },
            "returnParameters": {
              "id": 54596,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54593,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 54616,
                  "src": "1483:7:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54592,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1483:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 54595,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 54616,
                  "src": "1492:7:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54594,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1492:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1482:18:67"
            },
            "scope": 54627,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 54626,
            "nodeType": "FunctionDefinition",
            "src": "1700:107:67",
            "nodes": [],
            "body": {
              "id": 54625,
              "nodeType": "Block",
              "src": "1769:38:67",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 54623,
                    "name": "RATE_PRECISION",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 54535,
                    "src": "1786:14:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 54622,
                  "id": 54624,
                  "nodeType": "Return",
                  "src": "1779:21:67"
                }
              ]
            },
            "baseFunctions": [
              53246
            ],
            "documentation": {
              "id": 54617,
              "nodeType": "StructuredDocumentation",
              "src": "1661:34:67",
              "text": "@inheritdoc IGroveRateProvider"
            },
            "functionSelector": "73595502",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getRatePrecision",
            "nameLocation": "1709:16:67",
            "overrides": {
              "id": 54619,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1742:8:67"
            },
            "parameters": {
              "id": 54618,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1725:2:67"
            },
            "returnParameters": {
              "id": 54622,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54621,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 54626,
                  "src": "1760:7:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54620,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1760:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1759:9:67"
            },
            "scope": 54627,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 54528,
              "name": "IGroveRateProvider",
              "nameLocations": [
                "491:18:67"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 53247,
              "src": "491:18:67"
            },
            "id": 54529,
            "nodeType": "InheritanceSpecifier",
            "src": "491:18:67"
          }
        ],
        "canonicalName": "ChronicleRateProvider",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 54527,
          "nodeType": "StructuredDocumentation",
          "src": "231:225:67",
          "text": " @title  ChronicleRateProvider\n @notice Rate provider that fetches conversion rates from a Chronicle oracle, scaling the\n         returned value from 1e18 (Chronicle precision) to 1e27 (rate provider precision)."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          54627,
          53247
        ],
        "name": "ChronicleRateProvider",
        "nameLocation": "466:21:67",
        "scope": 54628,
        "usedErrors": [
          54531
        ],
        "usedEvents": []
      }
    ],
    "license": "AGPL-3.0-or-later"
  },
  "id": 67
} as const;

export default artifact;
