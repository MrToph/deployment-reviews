const artifact = {
  "abi": [
    {
      "type": "constructor",
      "inputs": [
        {
          "name": "creditToken_",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "redemptionAddress_",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "basin_",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "basin",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "contract IGroveBasin"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "collateralToken",
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
      "name": "completeRedeem",
      "inputs": [
        {
          "name": "",
          "type": "tuple",
          "internalType": "struct RedeemRequest",
          "components": [
            {
              "name": "blockNumber",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "redeemer",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "creditTokenAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "collateralTokenAmount",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        }
      ],
      "outputs": [
        {
          "name": "collateralTokenReturned",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "creditToken",
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
      "name": "initiateRedeem",
      "inputs": [
        {
          "name": "creditTokenAmount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "redemptionActive",
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
      "name": "redemptionAddress",
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
      "name": "setUp",
      "inputs": [
        {
          "name": "",
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
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "tearDown",
      "inputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "vault",
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
      "type": "event",
      "name": "RedeemCompleted",
      "inputs": [
        {
          "name": "collateralTokenAmount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RedeemInitiated",
      "inputs": [
        {
          "name": "creditTokenAmount",
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
          "name": "amount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "CreditTokenMismatch",
      "inputs": []
    },
    {
      "type": "error",
      "name": "InvalidBasin",
      "inputs": []
    },
    {
      "type": "error",
      "name": "InvalidCreditToken",
      "inputs": []
    },
    {
      "type": "error",
      "name": "InvalidRedemptionAddress",
      "inputs": []
    },
    {
      "type": "error",
      "name": "InvalidToken",
      "inputs": []
    },
    {
      "type": "error",
      "name": "NoCollateralBalance",
      "inputs": []
    },
    {
      "type": "error",
      "name": "NotAuthorized",
      "inputs": []
    },
    {
      "type": "error",
      "name": "OnlyBasin",
      "inputs": []
    },
    {
      "type": "error",
      "name": "RedemptionAlreadyActive",
      "inputs": []
    },
    {
      "type": "error",
      "name": "ZeroBalance",
      "inputs": []
    }
  ],
  "bytecode": {
    "object": "0x61010060405234801562000011575f80fd5b5060405162000dc538038062000dc58339810160408190526200003491620001f9565b6001600160a01b0383166200005c57604051636e95088f60e11b815260040160405180910390fd5b6001600160a01b03821662000084576040516383d52c1b60e01b815260040160405180910390fd5b6001600160a01b038116620000ac57604051631486056b60e01b815260040160405180910390fd5b826001600160a01b0316816001600160a01b031663899e5d856040518163ffffffff1660e01b8152600401602060405180830381865afa158015620000f3573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000119919062000240565b6001600160a01b031614620001415760405163b8c15fc960e01b815260040160405180910390fd5b826001600160a01b03166080816001600160a01b031681525050806001600160a01b031663b2016bd46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000198573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620001be919062000240565b6001600160a01b0390811660a05291821660c0521660e0525062000263565b80516001600160a01b0381168114620001f4575f80fd5b919050565b5f805f606084860312156200020c575f80fd5b6200021784620001dd565b92506200022760208501620001dd565b91506200023760408501620001dd565b90509250925092565b5f6020828403121562000251575f80fd5b6200025c82620001dd565b9392505050565b60805160a05160c05160e051610abf620003065f395f818161014a0152818161020c015281816102a801528181610363015281816103a6015281816103d5015281816105950152818161060d015261072b01525f818160d7015281816101dd01526102fd01525f81816101b90152818161051301528181610660015261070901525f818161017101528181610286015281816102db01526104d60152610abf5ff3fe608060405234801561000f575f80fd5b50600436106100a6575f3560e01c80637a02d0391161006e5780637a02d03914610145578063899e5d851461016c578063aa251f4d146100bf578063afe9a2d814610193578063b2016bd4146101b4578063fbfa77cf146101db575f80fd5b8063010252f8146100aa5780633f2601ef146100bf5780634dde3fe1146100d25780634ecc1f77146101165780636ea056a914610132575b5f80fd5b6100bd6100b8366004610997565b610201565b005b6100bd6100cd3660046109c9565b610358565b6100f97f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b5f546101229060ff1681565b604051901515815260200161010d565b6100bd6101403660046109e9565b6103a4565b6100f97f000000000000000000000000000000000000000000000000000000000000000081565b6100f97f000000000000000000000000000000000000000000000000000000000000000081565b6101a66101a1366004610a11565b610601565b60405190815260200161010d565b6100f97f000000000000000000000000000000000000000000000000000000000000000081565b7f00000000000000000000000000000000000000000000000000000000000000006100f9565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461024a576040516304c43e5160e51b815260040160405180910390fd5b5f5460ff161561026d576040516319fd53f960e21b815260040160405180910390fd5b5f805460ff191660011790556102ce6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000167f00000000000000000000000000000000000000000000000000000000000000003084610788565b6103226001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000167f00000000000000000000000000000000000000000000000000000000000000008361079a565b6040518181527f82bc492997ad0548fc8d1efacc586df2673d58dcf009a2bc370bbbfd17bf58bb9060200160405180910390a150565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103a1576040516304c43e5160e51b815260040160405180910390fd5b50565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166391d148547f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166383e3416b6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561042f573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104539190610a27565b6040516001600160e01b031960e084901b1681526004810191909152336024820152604401602060405180830381865afa158015610493573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104b79190610a3e565b6104d45760405163ea8e4eb560e01b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b03161415801561054857507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b031614155b156105665760405163c1ab6dc160e01b815260040160405180910390fd5b805f036105865760405163334ab3f560e11b815260040160405180910390fd5b6105ba6001600160a01b0383167f00000000000000000000000000000000000000000000000000000000000000008361079a565b816001600160a01b03167fc36b5179cb9c303b200074996eab2b3473eac370fdd7eba3bec636fe35109696826040516105f591815260200190565b60405180910390a25050565b5f336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461064b576040516304c43e5160e51b815260040160405180910390fd5b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156106ad573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106d19190610a27565b9050805f036106f3576040516322691a9160e01b815260040160405180910390fd5b5f805460ff191690556107506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000167f00000000000000000000000000000000000000000000000000000000000000008361079a565b6040518181527fe91bd60487cf3a9799fb86c28aa98742ff4d822408d03f7b0943bce0b3f30d029060200160405180910390a1919050565b610794848484846107aa565b50505050565b6107a5838383610854565b505050565b6040516001600160a01b038085166024830152831660448201526064810182905261080390859060840160408051601f198184030181529190526020810180516001600160e01b03166323b872dd60e01b1790526108f1565b6107945760405162461bcd60e51b815260206004820152601e60248201527f5361666545524332302f7472616e736665722d66726f6d2d6661696c6564000060448201526064015b60405180910390fd5b6040516001600160a01b0383166024820152604481018290526108a590849060640160408051601f198184030181529190526020810180516001600160e01b031663a9059cbb60e01b1790526108f1565b6107a55760405162461bcd60e51b815260206004820152601960248201527f5361666545524332302f7472616e736665722d6661696c656400000000000000604482015260640161084b565b5f826001600160a01b03163b5f0361090a57505f610991565b6060836001600160a01b0316836040516109249190610a5d565b5f604051808303815f865af19150503d805f811461095d576040519150601f19603f3d011682016040523d82523d5f602084013e610962565b606091505b50909250905081801561098d57508051158061098d57508080602001905181019061098d9190610a3e565b9150505b92915050565b5f602082840312156109a7575f80fd5b5035919050565b80356001600160a01b03811681146109c4575f80fd5b919050565b5f602082840312156109d9575f80fd5b6109e2826109ae565b9392505050565b5f80604083850312156109fa575f80fd5b610a03836109ae565b946020939093013593505050565b5f60808284031215610a21575f80fd5b50919050565b5f60208284031215610a37575f80fd5b5051919050565b5f60208284031215610a4e575f80fd5b815180151581146109e2575f80fd5b5f82515f5b81811015610a7c5760208186018101518583015201610a62565b505f92019182525091905056fea264697066735822122025ab4e3d7b3a4f63e6656df06225c59f98613e21ee1f65356f16663d8471bd0764736f6c63430008180033",
    "sourceMap": "1003:3989:69:-:0;;;2604:611;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;2696:32:69;;2692:65;;2737:20;;-1:-1:-1;;;2737:20:69;;;;;;;;;;;2692:65;-1:-1:-1;;;;;2771:32:69;;2767:71;;2812:26;;-1:-1:-1;;;2812:26:69;;;;;;;;;;;2767:71;-1:-1:-1;;;;;2852:32:69;;2848:59;;2893:14;;-1:-1:-1;;;2893:14:69;;;;;;;;;;;2848:59;2959:12;-1:-1:-1;;;;;2922:49:69;2934:6;-1:-1:-1;;;;;2922:31:69;;:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;2922:49:69;;2918:83;;2980:21;;-1:-1:-1;;;2980:21:69;;;;;;;;;;;2918:83;3032:12;-1:-1:-1;;;;;3012:32:69;;;-1:-1:-1;;;;;3012:32:69;;;;;3086:6;-1:-1:-1;;;;;3074:35:69;;:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;3054:57:69;;;;;3121:38;;;;;3169:39;;;-1:-1:-1;1003:3989:69;;14:177:150;93:13;;-1:-1:-1;;;;;135:31:150;;125:42;;115:70;;181:1;178;171:12;115:70;14:177;;;:::o;196:378::-;284:6;292;300;353:2;341:9;332:7;328:23;324:32;321:52;;;369:1;366;359:12;321:52;392:40;422:9;392:40;:::i;:::-;382:50;;451:49;496:2;485:9;481:18;451:49;:::i;:::-;441:59;;519:49;564:2;553:9;549:18;519:49;:::i;:::-;509:59;;196:378;;;;;:::o;579:208::-;649:6;702:2;690:9;681:7;677:23;673:32;670:52;;;718:1;715;708:12;670:52;741:40;771:9;741:40;:::i;:::-;731:50;579:208;-1:-1:-1;;;579:208:150:o;:::-;1003:3989:69;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561000f575f80fd5b50600436106100a6575f3560e01c80637a02d0391161006e5780637a02d03914610145578063899e5d851461016c578063aa251f4d146100bf578063afe9a2d814610193578063b2016bd4146101b4578063fbfa77cf146101db575f80fd5b8063010252f8146100aa5780633f2601ef146100bf5780634dde3fe1146100d25780634ecc1f77146101165780636ea056a914610132575b5f80fd5b6100bd6100b8366004610997565b610201565b005b6100bd6100cd3660046109c9565b610358565b6100f97f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b5f546101229060ff1681565b604051901515815260200161010d565b6100bd6101403660046109e9565b6103a4565b6100f97f000000000000000000000000000000000000000000000000000000000000000081565b6100f97f000000000000000000000000000000000000000000000000000000000000000081565b6101a66101a1366004610a11565b610601565b60405190815260200161010d565b6100f97f000000000000000000000000000000000000000000000000000000000000000081565b7f00000000000000000000000000000000000000000000000000000000000000006100f9565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461024a576040516304c43e5160e51b815260040160405180910390fd5b5f5460ff161561026d576040516319fd53f960e21b815260040160405180910390fd5b5f805460ff191660011790556102ce6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000167f00000000000000000000000000000000000000000000000000000000000000003084610788565b6103226001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000167f00000000000000000000000000000000000000000000000000000000000000008361079a565b6040518181527f82bc492997ad0548fc8d1efacc586df2673d58dcf009a2bc370bbbfd17bf58bb9060200160405180910390a150565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103a1576040516304c43e5160e51b815260040160405180910390fd5b50565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166391d148547f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166383e3416b6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561042f573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104539190610a27565b6040516001600160e01b031960e084901b1681526004810191909152336024820152604401602060405180830381865afa158015610493573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104b79190610a3e565b6104d45760405163ea8e4eb560e01b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b03161415801561054857507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b031614155b156105665760405163c1ab6dc160e01b815260040160405180910390fd5b805f036105865760405163334ab3f560e11b815260040160405180910390fd5b6105ba6001600160a01b0383167f00000000000000000000000000000000000000000000000000000000000000008361079a565b816001600160a01b03167fc36b5179cb9c303b200074996eab2b3473eac370fdd7eba3bec636fe35109696826040516105f591815260200190565b60405180910390a25050565b5f336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461064b576040516304c43e5160e51b815260040160405180910390fd5b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156106ad573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106d19190610a27565b9050805f036106f3576040516322691a9160e01b815260040160405180910390fd5b5f805460ff191690556107506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000167f00000000000000000000000000000000000000000000000000000000000000008361079a565b6040518181527fe91bd60487cf3a9799fb86c28aa98742ff4d822408d03f7b0943bce0b3f30d029060200160405180910390a1919050565b610794848484846107aa565b50505050565b6107a5838383610854565b505050565b6040516001600160a01b038085166024830152831660448201526064810182905261080390859060840160408051601f198184030181529190526020810180516001600160e01b03166323b872dd60e01b1790526108f1565b6107945760405162461bcd60e51b815260206004820152601e60248201527f5361666545524332302f7472616e736665722d66726f6d2d6661696c6564000060448201526064015b60405180910390fd5b6040516001600160a01b0383166024820152604481018290526108a590849060640160408051601f198184030181529190526020810180516001600160e01b031663a9059cbb60e01b1790526108f1565b6107a55760405162461bcd60e51b815260206004820152601960248201527f5361666545524332302f7472616e736665722d6661696c656400000000000000604482015260640161084b565b5f826001600160a01b03163b5f0361090a57505f610991565b6060836001600160a01b0316836040516109249190610a5d565b5f604051808303815f865af19150503d805f811461095d576040519150601f19603f3d011682016040523d82523d5f602084013e610962565b606091505b50909250905081801561098d57508051158061098d57508080602001905181019061098d9190610a3e565b9150505b92915050565b5f602082840312156109a7575f80fd5b5035919050565b80356001600160a01b03811681146109c4575f80fd5b919050565b5f602082840312156109d9575f80fd5b6109e2826109ae565b9392505050565b5f80604083850312156109fa575f80fd5b610a03836109ae565b946020939093013593505050565b5f60808284031215610a21575f80fd5b50919050565b5f60208284031215610a37575f80fd5b5051919050565b5f60208284031215610a4e575f80fd5b815180151581146109e2575f80fd5b5f82515f5b81811015610a7c5760208186018101518583015201610a62565b505f92019182525091905056fea264697066735822122025ab4e3d7b3a4f63e6656df06225c59f98613e21ee1f65356f16663d8471bd0764736f6c63430008180033",
    "sourceMap": "1003:3989:69:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3589:410;;;;;;:::i;:::-;;:::i;:::-;;3396:54;;;;;;:::i;:::-;;:::i;1940:42::-;;;;;;;;-1:-1:-1;;;;;732:32:150;;;714:51;;702:2;687:18;1940:42:69;;;;;;;;2160:28;;;;;;;;;;;;941:14:150;;934:22;916:41;;904:2;889:18;2160:28:69;776:187:150;4541:448:69;;;;;;:::i;:::-;;:::i;2024:43::-;;;;;1841:45;;;;;4040:460;;;;;;:::i;:::-;;:::i;:::-;;;1808:25:150;;;1796:2;1781:18;4040:460:69;1662:177:150;1893:40:69;;;;;3256:99;3331:17;3256:99;;3589:410;2283:10;-1:-1:-1;;;;;2305:5:69;2283:28;;2279:52;;2320:11;;-1:-1:-1;;;2320:11:69;;;;;;;;;;;2279:52;3682:16:::1;::::0;::::1;;3678:54;;;3707:25;;-1:-1:-1::0;;;3707:25:69::1;;;;;;;;;;;3678:54;3743:16;:23:::0;;-1:-1:-1;;3743:23:69::1;3762:4;3743:23;::::0;;3777:86:::1;-1:-1:-1::0;;;;;3784:11:69::1;3777:36;3822:5;3838:4;3845:17:::0;3777:36:::1;:86::i;:::-;3873:70;-1:-1:-1::0;;;;;3880:11:69::1;3873:32;3906:17;3925::::0;3873:32:::1;:70::i;:::-;3958:34;::::0;1808:25:150;;;3958:34:69::1;::::0;1796:2:150;1781:18;3958:34:69::1;;;;;;;3589:410:::0;:::o;3396:54::-;2283:10;-1:-1:-1;;;;;2305:5:69;2283:28;;2279:52;;2320:11;;-1:-1:-1;;;2320:11:69;;;;;;;;;;;2279:52;3396:54;:::o;4541:448::-;4643:5;-1:-1:-1;;;;;4620:38:69;;4659:5;-1:-1:-1;;;;;4659:24:69;;:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4620:78;;-1:-1:-1;;;;;;4620:78:69;;;;;;;;;;2207:25:150;;;;4687:10:69;2248:18:150;;;2241:60;2180:18;;4620:78:69;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4615:107;;4707:15;;-1:-1:-1;;;4707:15:69;;;;;;;;;;;4615:107;4745:11;-1:-1:-1;;;;;4736:20:69;:5;-1:-1:-1;;;;;4736:20:69;;;:48;;;;;4769:15;-1:-1:-1;;;;;4760:24:69;:5;-1:-1:-1;;;;;4760:24:69;;;4736:48;4732:106;;;4824:14;;-1:-1:-1;;;4824:14:69;;;;;;;;;;;4732:106;4853:6;4863:1;4853:11;4849:37;;4873:13;;-1:-1:-1;;;4873:13:69;;;;;;;;;;;4849:37;4897:50;-1:-1:-1;;;;;4897:26:69;;4932:5;4940:6;4897:26;:50::i;:::-;4968:5;-1:-1:-1;;;;;4962:20:69;;4975:6;4962:20;;;;1808:25:150;;1796:2;1781:18;;1662:177;4962:20:69;;;;;;;;4541:448;;:::o;4040:460::-;4125:31;2283:10;-1:-1:-1;;;;;2305:5:69;2283:28;;2279:52;;2320:11;;-1:-1:-1;;;2320:11:69;;;;;;;;;;;2279:52;4194:48:::1;::::0;-1:-1:-1;;;4194:48:69;;4236:4:::1;4194:48;::::0;::::1;714:51:150::0;4201:15:69::1;-1:-1:-1::0;;;;;4194:33:69::1;::::0;::::1;::::0;687:18:150;;4194:48:69::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4168:74;;4257:23;4284:1;4257:28:::0;4253:62:::1;;4294:21;;-1:-1:-1::0;;;4294:21:69::1;;;;;;;;;;;4253:62;4345:5;4326:24:::0;;-1:-1:-1;;4326:24:69::1;::::0;;4361:77:::1;-1:-1:-1::0;;;;;4368:15:69::1;4361:36;4406:5;4414:23:::0;4361:36:::1;:77::i;:::-;4453:40;::::0;1808:25:150;;;4453:40:69::1;::::0;1796:2:150;1781:18;4453:40:69::1;;;;;;;4040:460:::0;;;:::o;1147:158:1:-;1248:50;1273:5;1281:4;1287:2;1291:6;1248:16;:50::i;:::-;1147:158;;;;:::o;750:130::-;833:40;854:5;862:2;866:6;833:12;:40::i;:::-;750:130;;;:::o;886:255::-;1022:55;;-1:-1:-1;;;;;3041:15:150;;;1022:55:1;;;3023:34:150;3093:15;;3073:18;;;3066:43;3125:18;;;3118:34;;;1009:69:1;;1015:5;;2958:18:150;;1022:55:1;;;-1:-1:-1;;1022:55:1;;;;;;;;;;;;;;-1:-1:-1;;;;;1022:55:1;-1:-1:-1;;;1022:55:1;;;1009:5;:69::i;:::-;988:146;;;;-1:-1:-1;;;988:146:1;;3365:2:150;988:146:1;;;3347:21:150;3404:2;3384:18;;;3377:30;3443:32;3423:18;;;3416:60;3493:18;;988:146:1;;;;;;;;522:222;640:45;;-1:-1:-1;;;;;3714:32:150;;640:45:1;;;3696:51:150;3763:18;;;3756:34;;;627:59:1;;633:5;;3669:18:150;;640:45:1;;;-1:-1:-1;;640:45:1;;;;;;;;;;;;;;-1:-1:-1;;;;;640:45:1;-1:-1:-1;;;640:45:1;;;627:5;:59::i;:::-;606:131;;;;-1:-1:-1;;;606:131:1;;4003:2:150;606:131:1;;;3985:21:150;4042:2;4022:18;;;4015:30;4081:27;4061:18;;;4054:55;4126:18;;606:131:1;3801:349:150;2388:312:1;2455:12;2483:5;-1:-1:-1;;;;;2483:17:1;;2504:1;2483:22;2479:40;;-1:-1:-1;2514:5:1;2507:12;;2479:40;2530:23;2589:5;-1:-1:-1;;;;;2589:10:1;2600:5;2589:17;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;2563:43:1;;-1:-1:-1;2563:43:1;-1:-1:-1;2563:43:1;2624:69;;;;-1:-1:-1;2636:17:1;;:22;;:56;;;2673:10;2662:30;;;;;;;;;;;;:::i;:::-;2617:76;;;2388:312;;;;;:::o;14:180:150:-;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:150;;14:180;-1:-1:-1;14:180:150:o;199:173::-;267:20;;-1:-1:-1;;;;;316:31:150;;306:42;;296:70;;362:1;359;352:12;296:70;199:173;;;:::o;377:186::-;436:6;489:2;477:9;468:7;464:23;460:32;457:52;;;505:1;502;495:12;457:52;528:29;547:9;528:29;:::i;:::-;518:39;377:186;-1:-1:-1;;;377:186:150:o;968:254::-;1036:6;1044;1097:2;1085:9;1076:7;1072:23;1068:32;1065:52;;;1113:1;1110;1103:12;1065:52;1136:29;1155:9;1136:29;:::i;:::-;1126:39;1212:2;1197:18;;;;1184:32;;-1:-1:-1;;;968:254:150:o;1456:201::-;1549:6;1602:3;1590:9;1581:7;1577:23;1573:33;1570:53;;;1619:1;1616;1609:12;1570:53;-1:-1:-1;1642:9:150;1456:201;-1:-1:-1;1456:201:150:o;1844:184::-;1914:6;1967:2;1955:9;1946:7;1942:23;1938:32;1935:52;;;1983:1;1980;1973:12;1935:52;-1:-1:-1;2006:16:150;;1844:184;-1:-1:-1;1844:184:150:o;2312:277::-;2379:6;2432:2;2420:9;2411:7;2407:23;2403:32;2400:52;;;2448:1;2445;2438:12;2400:52;2480:9;2474:16;2533:5;2526:13;2519:21;2512:5;2509:32;2499:60;;2555:1;2552;2545:12;4155:412;4284:3;4322:6;4316:13;4347:1;4357:129;4371:6;4368:1;4365:13;4357:129;;;4469:4;4453:14;;;4449:25;;4443:32;4430:11;;;4423:53;4386:12;4357:129;;;-1:-1:-1;4541:1:150;4505:16;;4530:13;;;-1:-1:-1;4505:16:150;4155:412;-1:-1:-1;4155:412:150:o",
    "linkReferences": {},
    "immutableReferences": {
      "54742": [
        {
          "start": 369,
          "length": 32
        },
        {
          "start": 646,
          "length": 32
        },
        {
          "start": 731,
          "length": 32
        },
        {
          "start": 1238,
          "length": 32
        }
      ],
      "54744": [
        {
          "start": 441,
          "length": 32
        },
        {
          "start": 1299,
          "length": 32
        },
        {
          "start": 1632,
          "length": 32
        },
        {
          "start": 1801,
          "length": 32
        }
      ],
      "54746": [
        {
          "start": 215,
          "length": 32
        },
        {
          "start": 477,
          "length": 32
        },
        {
          "start": 765,
          "length": 32
        }
      ],
      "54751": [
        {
          "start": 330,
          "length": 32
        },
        {
          "start": 524,
          "length": 32
        },
        {
          "start": 680,
          "length": 32
        },
        {
          "start": 867,
          "length": 32
        },
        {
          "start": 934,
          "length": 32
        },
        {
          "start": 981,
          "length": 32
        },
        {
          "start": 1429,
          "length": 32
        },
        {
          "start": 1549,
          "length": 32
        },
        {
          "start": 1835,
          "length": 32
        }
      ]
    }
  },
  "methodIdentifiers": {
    "basin()": "7a02d039",
    "collateralToken()": "b2016bd4",
    "completeRedeem((uint256,address,uint256,uint256))": "afe9a2d8",
    "creditToken()": "899e5d85",
    "initiateRedeem(uint256)": "010252f8",
    "redemptionActive()": "4ecc1f77",
    "redemptionAddress()": "4dde3fe1",
    "setUp(address)": "3f2601ef",
    "sweep(address,uint256)": "6ea056a9",
    "tearDown(address)": "aa251f4d",
    "vault()": "fbfa77cf"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.24+commit.e11b9ed9\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"creditToken_\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"redemptionAddress_\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"basin_\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"CreditTokenMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidBasin\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCreditToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidRedemptionAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NoCollateralBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotAuthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OnlyBasin\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RedemptionAlreadyActive\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ZeroBalance\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"collateralTokenAmount\",\"type\":\"uint256\"}],\"name\":\"RedeemCompleted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"creditTokenAmount\",\"type\":\"uint256\"}],\"name\":\"RedeemInitiated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Swept\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"basin\",\"outputs\":[{\"internalType\":\"contract IGroveBasin\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"collateralToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"redeemer\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"creditTokenAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"collateralTokenAmount\",\"type\":\"uint256\"}],\"internalType\":\"struct RedeemRequest\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"completeRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"collateralTokenReturned\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"creditToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"creditTokenAmount\",\"type\":\"uint256\"}],\"name\":\"initiateRedeem\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"redemptionActive\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"redemptionAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setUp\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"sweep\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"tearDown\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"vault\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Only callable by the Basin contract. To reset a stuck redemption, send any non-zero         amount of collateral token to this contract and call completeRedeem.\",\"events\":{\"RedeemCompleted(uint256)\":{\"details\":\"Emitted when a redemption is completed.\",\"params\":{\"collateralTokenAmount\":\"Amount of collateral assets received from the vault.\"}},\"RedeemInitiated(uint256)\":{\"details\":\"Emitted when a redemption is initiated.\",\"params\":{\"creditTokenAmount\":\"Amount of credit tokens sent to the vault for redemption.\"}},\"Swept(address,uint256)\":{\"details\":\"Emitted when tokens are swept from the redeemer to the basin.\",\"params\":{\"amount\":\"Amount of tokens swept.\",\"token\":\"Address of the token swept.\"}}},\"kind\":\"dev\",\"methods\":{\"completeRedeem((uint256,address,uint256,uint256))\":{\"details\":\"Completes a redemption by withdrawing collateral assets from the vault and          transferring them back to the caller.\",\"params\":{\"request\":\"The RedeemRequest struct containing the redemption details.\"},\"returns\":{\"collateralTokenReturned\":\"Amount of collateral assets sent back to the caller.\"}},\"constructor\":{\"params\":{\"basin_\":\"Address of the GroveBasin contract.\",\"creditToken_\":\"Address of the credit token (BUIDL).\",\"redemptionAddress_\":\"Address that receives credit tokens for offchain settlement.\"}},\"initiateRedeem(uint256)\":{\"details\":\"Initiates a redemption by transferring credit tokens from the caller and calling         requestRedeem on the vault.\",\"params\":{\"creditTokenAmount\":\"Amount of credit tokens to redeem.\"}},\"setUp(address)\":{\"details\":\"Performs any redeemer-specific setup. Called by the basin when adding a redeemer.\",\"params\":{\"basin\":\"The address of the basin.\"}},\"sweep(address,uint256)\":{\"details\":\"Transfers tokens to the basin. The token must be the credit token or the collateral         token. Callable only by MANAGER_ADMIN_ROLE holders. Reverts if amount is zero.         Should only be called when there are no pending redemptions.\",\"params\":{\"amount\":\"Amount of tokens to sweep.\",\"token\":\"Address of the token to sweep (must be creditToken or collateralToken).\"}},\"tearDown(address)\":{\"details\":\"Performs any redeemer-specific teardown. Called by the basin when removing a redeemer.\",\"params\":{\"basin\":\"The address of the basin.\"}},\"vault()\":{\"details\":\"Returns the address of the async vault used for redemption.\",\"returns\":{\"_0\":\"The address of the vault.\"}}},\"stateVariables\":{\"basin\":{\"details\":\"Returns the IGroveBasin interface of the basin contract that this redeemer is bound to.\",\"return\":\"The IGroveBasin interface of the basin.\",\"returns\":{\"_0\":\"The IGroveBasin interface of the basin.\"}},\"creditToken\":{\"details\":\"Returns the address of the credit token that this redeemer handles.\",\"return\":\"The address of the credit token.\",\"returns\":{\"_0\":\"The address of the credit token.\"}},\"redemptionActive\":{\"details\":\"Whether a redemption is currently in flight. Only one allowed at a time.\"}},\"title\":\"BUIDLTokenRedeemer\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Token redeemer that handles BUIDL credit token redemptions through an offchain         settlement process. Only one redemption may be active at a time. Transfers credit         tokens to the redemption address on initiation and returns the redeemer's entire         collateral token balance to the basin on completion.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/redeemers/BUIDLTokenRedeemer.sol\":\"BUIDLTokenRedeemer\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":180},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/grove-address-registry/lib/forge-std/lib/ds-test/src/\",\":erc20-helpers/=lib/erc20-helpers/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":grove-address-registry/=lib/grove-address-registry/src/\",\":halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":sparklend-address-registry/=lib/xchain-ssr-oracle/lib/sparklend-address-registry/\",\":xchain-helpers/=lib/xchain-ssr-oracle/lib/xchain-helpers/src/\",\":xchain-ssr-oracle/=lib/xchain-ssr-oracle/\"]},\"sources\":{\"lib/erc20-helpers/src/SafeERC20.sol\":{\"keccak256\":\"0xcd4373a866867daa3d1b75c41d94539de45ee0b2063621856e61f342225905e7\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://30be3fd0b56e2deae03dc14d805c155c59b38507427e7b73765c0578676c98b3\",\"dweb:/ipfs/QmcwDJ8jnTGftwzrcfcDVv6GcUt91aErwh2sZhzK6gHTbb\"]},\"lib/erc20-helpers/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x09fb40ad87c7447060c07b241ef6b04e0e5991f87c528e7c7c4f8f065522f1ea\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://f67d90a605bd0f6e53bcbc516289eb5d1cf3c86bfbd9c8206d9e8ee002aafc05\",\"dweb:/ipfs/QmSauwsEbU59qcXGxJQN9PMKobA3ELZkDgZnP1ophrAtwL\"]},\"lib/openzeppelin-contracts/contracts/access/IAccessControl.sol\":{\"keccak256\":\"0xbff9f59c84e5337689161ce7641c0ef8e872d6a7536fbc1f5133f128887aba3c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b308f882e796f7b79c9502deacb0a62983035c6f6f4e962b319ba6a1f4a77d3d\",\"dweb:/ipfs/QmaWCW7ahEQqFjwhSUhV7Ae7WhfNvzSpE7DQ58hvEooqPL\"]},\"src/interfaces/IGroveBasin.sol\":{\"keccak256\":\"0xba9f12b46b59d33e7bef11285b2b58c854f1fd32099c841182f32ea1c2792cc6\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://637e2903a50126c6023b82db1a4870937e72e30a5ab2cfb33311cc478b06ebc0\",\"dweb:/ipfs/QmaFkbL5b6kdYrjGo7m2XuBcFWrFnprJRNZfSh5TzLRRTs\"]},\"src/interfaces/ITokenRedeemer.sol\":{\"keccak256\":\"0x38408e03c84f7a818170d77542fc82b1b6b4169b5e965c59fbf04d1bc8fc42a5\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://f7501a617cb831300ef5289167d023c2cc4c11cf32d272d32bcd7947355a7762\",\"dweb:/ipfs/QmdJk3BzXwHcwjTAkjU5nuoC4MLrAAVYDmnr8s1HqiFrAz\"]},\"src/redeemers/BUIDLTokenRedeemer.sol\":{\"keccak256\":\"0xc91f10c10d4e2a22ffbcc60869d69b59f1991af535cfee879959b19b33dd13cd\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://49b9c785cbbaabdbedcb0910e29532ce4941cc52ff76826810e99277402f77ee\",\"dweb:/ipfs/QmTBd4qB5MiA1KHQHz6LPqUao8CergfRuev5BPLoLASCDm\"]}},\"version\":1}",
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
              "name": "creditToken_",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "redemptionAddress_",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "basin_",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "CreditTokenMismatch"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidBasin"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidCreditToken"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidRedemptionAddress"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidToken"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NoCollateralBalance"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NotAuthorized"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "OnlyBasin"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "RedemptionAlreadyActive"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ZeroBalance"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "collateralTokenAmount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "RedeemCompleted",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "creditTokenAmount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "RedeemInitiated",
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
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "basin",
          "outputs": [
            {
              "internalType": "contract IGroveBasin",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "collateralToken",
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
              "internalType": "struct RedeemRequest",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "uint256",
                  "name": "blockNumber",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "redeemer",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "creditTokenAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "collateralTokenAmount",
                  "type": "uint256"
                }
              ]
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "completeRedeem",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "collateralTokenReturned",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "creditToken",
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
              "name": "creditTokenAmount",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "initiateRedeem"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "redemptionActive",
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
          "name": "redemptionAddress",
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
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setUp"
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
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "tearDown"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "vault",
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
          "completeRedeem((uint256,address,uint256,uint256))": {
            "details": "Completes a redemption by withdrawing collateral assets from the vault and          transferring them back to the caller.",
            "params": {
              "request": "The RedeemRequest struct containing the redemption details."
            },
            "returns": {
              "collateralTokenReturned": "Amount of collateral assets sent back to the caller."
            }
          },
          "constructor": {
            "params": {
              "basin_": "Address of the GroveBasin contract.",
              "creditToken_": "Address of the credit token (BUIDL).",
              "redemptionAddress_": "Address that receives credit tokens for offchain settlement."
            }
          },
          "initiateRedeem(uint256)": {
            "details": "Initiates a redemption by transferring credit tokens from the caller and calling         requestRedeem on the vault.",
            "params": {
              "creditTokenAmount": "Amount of credit tokens to redeem."
            }
          },
          "setUp(address)": {
            "details": "Performs any redeemer-specific setup. Called by the basin when adding a redeemer.",
            "params": {
              "basin": "The address of the basin."
            }
          },
          "sweep(address,uint256)": {
            "details": "Transfers tokens to the basin. The token must be the credit token or the collateral         token. Callable only by MANAGER_ADMIN_ROLE holders. Reverts if amount is zero.         Should only be called when there are no pending redemptions.",
            "params": {
              "amount": "Amount of tokens to sweep.",
              "token": "Address of the token to sweep (must be creditToken or collateralToken)."
            }
          },
          "tearDown(address)": {
            "details": "Performs any redeemer-specific teardown. Called by the basin when removing a redeemer.",
            "params": {
              "basin": "The address of the basin."
            }
          },
          "vault()": {
            "details": "Returns the address of the async vault used for redemption.",
            "returns": {
              "_0": "The address of the vault."
            }
          }
        },
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
        "src/redeemers/BUIDLTokenRedeemer.sol": "BUIDLTokenRedeemer"
      },
      "evmVersion": "cancun",
      "libraries": {}
    },
    "sources": {
      "lib/erc20-helpers/src/SafeERC20.sol": {
        "keccak256": "0xcd4373a866867daa3d1b75c41d94539de45ee0b2063621856e61f342225905e7",
        "urls": [
          "bzz-raw://30be3fd0b56e2deae03dc14d805c155c59b38507427e7b73765c0578676c98b3",
          "dweb:/ipfs/QmcwDJ8jnTGftwzrcfcDVv6GcUt91aErwh2sZhzK6gHTbb"
        ],
        "license": "AGPL-3.0-only"
      },
      "lib/erc20-helpers/src/interfaces/IERC20.sol": {
        "keccak256": "0x09fb40ad87c7447060c07b241ef6b04e0e5991f87c528e7c7c4f8f065522f1ea",
        "urls": [
          "bzz-raw://f67d90a605bd0f6e53bcbc516289eb5d1cf3c86bfbd9c8206d9e8ee002aafc05",
          "dweb:/ipfs/QmSauwsEbU59qcXGxJQN9PMKobA3ELZkDgZnP1ophrAtwL"
        ],
        "license": "AGPL-3.0-only"
      },
      "lib/openzeppelin-contracts/contracts/access/IAccessControl.sol": {
        "keccak256": "0xbff9f59c84e5337689161ce7641c0ef8e872d6a7536fbc1f5133f128887aba3c",
        "urls": [
          "bzz-raw://b308f882e796f7b79c9502deacb0a62983035c6f6f4e962b319ba6a1f4a77d3d",
          "dweb:/ipfs/QmaWCW7ahEQqFjwhSUhV7Ae7WhfNvzSpE7DQ58hvEooqPL"
        ],
        "license": "MIT"
      },
      "src/interfaces/IGroveBasin.sol": {
        "keccak256": "0xba9f12b46b59d33e7bef11285b2b58c854f1fd32099c841182f32ea1c2792cc6",
        "urls": [
          "bzz-raw://637e2903a50126c6023b82db1a4870937e72e30a5ab2cfb33311cc478b06ebc0",
          "dweb:/ipfs/QmaFkbL5b6kdYrjGo7m2XuBcFWrFnprJRNZfSh5TzLRRTs"
        ],
        "license": "AGPL-3.0-or-later"
      },
      "src/interfaces/ITokenRedeemer.sol": {
        "keccak256": "0x38408e03c84f7a818170d77542fc82b1b6b4169b5e965c59fbf04d1bc8fc42a5",
        "urls": [
          "bzz-raw://f7501a617cb831300ef5289167d023c2cc4c11cf32d272d32bcd7947355a7762",
          "dweb:/ipfs/QmdJk3BzXwHcwjTAkjU5nuoC4MLrAAVYDmnr8s1HqiFrAz"
        ],
        "license": "AGPL-3.0-or-later"
      },
      "src/redeemers/BUIDLTokenRedeemer.sol": {
        "keccak256": "0xc91f10c10d4e2a22ffbcc60869d69b59f1991af535cfee879959b19b33dd13cd",
        "urls": [
          "bzz-raw://49b9c785cbbaabdbedcb0910e29532ce4941cc52ff76826810e99277402f77ee",
          "dweb:/ipfs/QmTBd4qB5MiA1KHQHz6LPqUao8CergfRuev5BPLoLASCDm"
        ],
        "license": "AGPL-3.0-or-later"
      }
    },
    "version": 1
  },
  "storageLayout": {
    "storage": [
      {
        "astId": 54754,
        "contract": "src/redeemers/BUIDLTokenRedeemer.sol:BUIDLTokenRedeemer",
        "label": "redemptionActive",
        "offset": 0,
        "slot": "0",
        "type": "t_bool"
      }
    ],
    "types": {
      "t_bool": {
        "encoding": "inplace",
        "label": "bool",
        "numberOfBytes": "1"
      }
    }
  },
  "ast": {
    "absolutePath": "src/redeemers/BUIDLTokenRedeemer.sol",
    "id": 55035,
    "exportedSymbols": {
      "BUIDLTokenRedeemer": [
        55034
      ],
      "IAccessControl": [
        41409
      ],
      "IERC20": [
        815
      ],
      "IGroveBasin": [
        53162
      ],
      "ITokenRedeemer": [
        53376
      ],
      "RedeemRequest": [
        53290
      ],
      "SafeERC20": [
        662
      ]
    },
    "nodeType": "SourceUnit",
    "src": "46:4947:69",
    "nodes": [
      {
        "id": 54714,
        "nodeType": "PragmaDirective",
        "src": "46:24:69",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".24"
        ]
      },
      {
        "id": 54716,
        "nodeType": "ImportDirective",
        "src": "72:64:69",
        "nodes": [],
        "absolutePath": "lib/erc20-helpers/src/interfaces/IERC20.sol",
        "file": "erc20-helpers/interfaces/IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 55035,
        "sourceUnit": 816,
        "symbolAliases": [
          {
            "foreign": {
              "id": 54715,
              "name": "IERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 815,
              "src": "81:6:69",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 54718,
        "nodeType": "ImportDirective",
        "src": "137:56:69",
        "nodes": [],
        "absolutePath": "lib/erc20-helpers/src/SafeERC20.sol",
        "file": "erc20-helpers/SafeERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 55035,
        "sourceUnit": 663,
        "symbolAliases": [
          {
            "foreign": {
              "id": 54717,
              "name": "SafeERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 662,
              "src": "146:9:69",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 54720,
        "nodeType": "ImportDirective",
        "src": "195:92:69",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/access/IAccessControl.sol",
        "file": "openzeppelin-contracts/contracts/access/IAccessControl.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 55035,
        "sourceUnit": 41410,
        "symbolAliases": [
          {
            "foreign": {
              "id": 54719,
              "name": "IAccessControl",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 41409,
              "src": "204:14:69",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 54722,
        "nodeType": "ImportDirective",
        "src": "289:77:69",
        "nodes": [],
        "absolutePath": "src/interfaces/IGroveBasin.sol",
        "file": "src/interfaces/IGroveBasin.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 55035,
        "sourceUnit": 53163,
        "symbolAliases": [
          {
            "foreign": {
              "id": 54721,
              "name": "IGroveBasin",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 53162,
              "src": "298:11:69",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 54725,
        "nodeType": "ImportDirective",
        "src": "367:82:69",
        "nodes": [],
        "absolutePath": "src/interfaces/ITokenRedeemer.sol",
        "file": "src/interfaces/ITokenRedeemer.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 55035,
        "sourceUnit": 53377,
        "symbolAliases": [
          {
            "foreign": {
              "id": 54723,
              "name": "ITokenRedeemer",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 53376,
              "src": "376:14:69",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 54724,
              "name": "RedeemRequest",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 53290,
              "src": "392:13:69",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 55034,
        "nodeType": "ContractDefinition",
        "src": "1003:3989:69",
        "nodes": [
          {
            "id": 54732,
            "nodeType": "UsingForDirective",
            "src": "1056:27:69",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 54729,
              "name": "SafeERC20",
              "nameLocations": [
                "1062:9:69"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 662,
              "src": "1062:9:69"
            },
            "typeName": {
              "id": 54731,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 54730,
                "name": "IERC20",
                "nameLocations": [
                  "1076:6:69"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 815,
                "src": "1076:6:69"
              },
              "referencedDeclaration": 815,
              "src": "1076:6:69",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC20_$815",
                "typeString": "contract IERC20"
              }
            }
          },
          {
            "id": 54734,
            "nodeType": "ErrorDefinition",
            "src": "1393:33:69",
            "nodes": [],
            "errorSelector": "83d52c1b",
            "name": "InvalidRedemptionAddress",
            "nameLocation": "1399:24:69",
            "parameters": {
              "id": 54733,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1423:2:69"
            }
          },
          {
            "id": 54736,
            "nodeType": "ErrorDefinition",
            "src": "1431:32:69",
            "nodes": [],
            "errorSelector": "67f54fe4",
            "name": "RedemptionAlreadyActive",
            "nameLocation": "1437:23:69",
            "parameters": {
              "id": 54735,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1460:2:69"
            }
          },
          {
            "id": 54738,
            "nodeType": "ErrorDefinition",
            "src": "1468:28:69",
            "nodes": [],
            "errorSelector": "22691a91",
            "name": "NoCollateralBalance",
            "nameLocation": "1474:19:69",
            "parameters": {
              "id": 54737,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1493:2:69"
            }
          },
          {
            "id": 54742,
            "nodeType": "VariableDeclaration",
            "src": "1841:45:69",
            "nodes": [],
            "baseFunctions": [
              53327
            ],
            "constant": false,
            "documentation": {
              "id": 54739,
              "nodeType": "StructuredDocumentation",
              "src": "1806:30:69",
              "text": "@inheritdoc ITokenRedeemer"
            },
            "functionSelector": "899e5d85",
            "mutability": "immutable",
            "name": "creditToken",
            "nameLocation": "1875:11:69",
            "overrides": {
              "id": 54741,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1866:8:69"
            },
            "scope": 55034,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 54740,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "1841:7:69",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 54744,
            "nodeType": "VariableDeclaration",
            "src": "1893:40:69",
            "nodes": [],
            "constant": false,
            "functionSelector": "b2016bd4",
            "mutability": "immutable",
            "name": "collateralToken",
            "nameLocation": "1918:15:69",
            "scope": 55034,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 54743,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "1893:7:69",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 54746,
            "nodeType": "VariableDeclaration",
            "src": "1940:42:69",
            "nodes": [],
            "constant": false,
            "functionSelector": "4dde3fe1",
            "mutability": "immutable",
            "name": "redemptionAddress",
            "nameLocation": "1965:17:69",
            "scope": 55034,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 54745,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "1940:7:69",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 54751,
            "nodeType": "VariableDeclaration",
            "src": "2024:43:69",
            "nodes": [],
            "baseFunctions": [
              53340
            ],
            "constant": false,
            "documentation": {
              "id": 54747,
              "nodeType": "StructuredDocumentation",
              "src": "1989:30:69",
              "text": "@inheritdoc ITokenRedeemer"
            },
            "functionSelector": "7a02d039",
            "mutability": "immutable",
            "name": "basin",
            "nameLocation": "2062:5:69",
            "overrides": {
              "id": 54750,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2053:8:69"
            },
            "scope": 55034,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IGroveBasin_$53162",
              "typeString": "contract IGroveBasin"
            },
            "typeName": {
              "id": 54749,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 54748,
                "name": "IGroveBasin",
                "nameLocations": [
                  "2024:11:69"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 53162,
                "src": "2024:11:69"
              },
              "referencedDeclaration": 53162,
              "src": "2024:11:69",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IGroveBasin_$53162",
                "typeString": "contract IGroveBasin"
              }
            },
            "visibility": "public"
          },
          {
            "id": 54754,
            "nodeType": "VariableDeclaration",
            "src": "2160:28:69",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 54752,
              "nodeType": "StructuredDocumentation",
              "src": "2074:81:69",
              "text": "@dev Whether a redemption is currently in flight. Only one allowed at a time."
            },
            "functionSelector": "4ecc1f77",
            "mutability": "mutable",
            "name": "redemptionActive",
            "nameLocation": "2172:16:69",
            "scope": 55034,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 54753,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "2160:4:69",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "visibility": "public"
          },
          {
            "id": 54770,
            "nodeType": "ModifierDefinition",
            "src": "2248:101:69",
            "nodes": [],
            "body": {
              "id": 54769,
              "nodeType": "Block",
              "src": "2269:80:69",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 54763,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 54757,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "2283:3:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 54758,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2287:6:69",
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "src": "2283:10:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [
                        {
                          "id": 54761,
                          "name": "basin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 54751,
                          "src": "2305:5:69",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IGroveBasin_$53162",
                            "typeString": "contract IGroveBasin"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_IGroveBasin_$53162",
                            "typeString": "contract IGroveBasin"
                          }
                        ],
                        "id": 54760,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2297:7:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 54759,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2297:7:69",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 54762,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2297:14:69",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2283:28:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 54767,
                  "nodeType": "IfStatement",
                  "src": "2279:52:69",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 54764,
                        "name": "OnlyBasin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 53292,
                        "src": "2320:9:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 54765,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2320:11:69",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 54766,
                    "nodeType": "RevertStatement",
                    "src": "2313:18:69"
                  }
                },
                {
                  "id": 54768,
                  "nodeType": "PlaceholderStatement",
                  "src": "2341:1:69"
                }
              ]
            },
            "documentation": {
              "id": 54755,
              "nodeType": "StructuredDocumentation",
              "src": "2195:48:69",
              "text": "@dev Restricts access to the basin contract."
            },
            "name": "onlyBasin",
            "nameLocation": "2257:9:69",
            "parameters": {
              "id": 54756,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2266:2:69"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 54844,
            "nodeType": "FunctionDefinition",
            "src": "2604:611:69",
            "nodes": [],
            "body": {
              "id": 54843,
              "nodeType": "Block",
              "src": "2682:533:69",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 54785,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 54780,
                      "name": "creditToken_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54773,
                      "src": "2696:12:69",
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
                          "id": 54783,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2726:1:69",
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
                        "id": 54782,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2718:7:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 54781,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2718:7:69",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 54784,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2718:10:69",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2696:32:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 54789,
                  "nodeType": "IfStatement",
                  "src": "2692:65:69",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 54786,
                        "name": "InvalidCreditToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 53296,
                        "src": "2737:18:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 54787,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2737:20:69",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 54788,
                    "nodeType": "RevertStatement",
                    "src": "2730:27:69"
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 54795,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 54790,
                      "name": "redemptionAddress_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54775,
                      "src": "2771:18:69",
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
                          "id": 54793,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2801:1:69",
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
                        "id": 54792,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2793:7:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 54791,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2793:7:69",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 54794,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2793:10:69",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2771:32:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 54799,
                  "nodeType": "IfStatement",
                  "src": "2767:71:69",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 54796,
                        "name": "InvalidRedemptionAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54734,
                        "src": "2812:24:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 54797,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2812:26:69",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 54798,
                    "nodeType": "RevertStatement",
                    "src": "2805:33:69"
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 54805,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 54800,
                      "name": "basin_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54777,
                      "src": "2852:6:69",
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
                          "id": 54803,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2882:1:69",
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
                        "id": 54802,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2874:7:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 54801,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2874:7:69",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 54804,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2874:10:69",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2852:32:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 54809,
                  "nodeType": "IfStatement",
                  "src": "2848:59:69",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 54806,
                        "name": "InvalidBasin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 53298,
                        "src": "2893:12:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 54807,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2893:14:69",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 54808,
                    "nodeType": "RevertStatement",
                    "src": "2886:21:69"
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 54816,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "arguments": [
                            {
                              "id": 54811,
                              "name": "basin_",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 54777,
                              "src": "2934:6:69",
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
                            "id": 54810,
                            "name": "IGroveBasin",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53162,
                            "src": "2922:11:69",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_IGroveBasin_$53162_$",
                              "typeString": "type(contract IGroveBasin)"
                            }
                          },
                          "id": 54812,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2922:19:69",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IGroveBasin_$53162",
                            "typeString": "contract IGroveBasin"
                          }
                        },
                        "id": 54813,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2942:11:69",
                        "memberName": "creditToken",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 52643,
                        "src": "2922:31:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$__$returns$_t_address_$",
                          "typeString": "function () view external returns (address)"
                        }
                      },
                      "id": 54814,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2922:33:69",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 54815,
                      "name": "creditToken_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54773,
                      "src": "2959:12:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2922:49:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 54820,
                  "nodeType": "IfStatement",
                  "src": "2918:83:69",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 54817,
                        "name": "CreditTokenMismatch",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 53304,
                        "src": "2980:19:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 54818,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2980:21:69",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 54819,
                    "nodeType": "RevertStatement",
                    "src": "2973:28:69"
                  }
                },
                {
                  "expression": {
                    "id": 54823,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 54821,
                      "name": "creditToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54742,
                      "src": "3012:11:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 54822,
                      "name": "creditToken_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54773,
                      "src": "3032:12:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3012:32:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 54824,
                  "nodeType": "ExpressionStatement",
                  "src": "3012:32:69"
                },
                {
                  "expression": {
                    "id": 54831,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 54825,
                      "name": "collateralToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54744,
                      "src": "3054:15:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "arguments": [
                            {
                              "id": 54827,
                              "name": "basin_",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 54777,
                              "src": "3086:6:69",
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
                            "id": 54826,
                            "name": "IGroveBasin",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53162,
                            "src": "3074:11:69",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_IGroveBasin_$53162_$",
                              "typeString": "type(contract IGroveBasin)"
                            }
                          },
                          "id": 54828,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3074:19:69",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IGroveBasin_$53162",
                            "typeString": "contract IGroveBasin"
                          }
                        },
                        "id": 54829,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3094:15:69",
                        "memberName": "collateralToken",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 52637,
                        "src": "3074:35:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$__$returns$_t_address_$",
                          "typeString": "function () view external returns (address)"
                        }
                      },
                      "id": 54830,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3074:37:69",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3054:57:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 54832,
                  "nodeType": "ExpressionStatement",
                  "src": "3054:57:69"
                },
                {
                  "expression": {
                    "id": 54835,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 54833,
                      "name": "redemptionAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54746,
                      "src": "3121:17:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 54834,
                      "name": "redemptionAddress_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54775,
                      "src": "3141:18:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3121:38:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 54836,
                  "nodeType": "ExpressionStatement",
                  "src": "3121:38:69"
                },
                {
                  "expression": {
                    "id": 54841,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 54837,
                      "name": "basin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54751,
                      "src": "3169:5:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IGroveBasin_$53162",
                        "typeString": "contract IGroveBasin"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 54839,
                          "name": "basin_",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 54777,
                          "src": "3201:6:69",
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
                        "id": 54838,
                        "name": "IGroveBasin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 53162,
                        "src": "3189:11:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IGroveBasin_$53162_$",
                          "typeString": "type(contract IGroveBasin)"
                        }
                      },
                      "id": 54840,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3189:19:69",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IGroveBasin_$53162",
                        "typeString": "contract IGroveBasin"
                      }
                    },
                    "src": "3169:39:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IGroveBasin_$53162",
                      "typeString": "contract IGroveBasin"
                    }
                  },
                  "id": 54842,
                  "nodeType": "ExpressionStatement",
                  "src": "3169:39:69"
                }
              ]
            },
            "documentation": {
              "id": 54771,
              "nodeType": "StructuredDocumentation",
              "src": "2355:244:69",
              "text": " @param creditToken_       Address of the credit token (BUIDL).\n @param redemptionAddress_ Address that receives credit tokens for offchain settlement.\n @param basin_             Address of the GroveBasin contract."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 54778,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54773,
                  "mutability": "mutable",
                  "name": "creditToken_",
                  "nameLocation": "2624:12:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 54844,
                  "src": "2616:20:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 54772,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2616:7:69",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 54775,
                  "mutability": "mutable",
                  "name": "redemptionAddress_",
                  "nameLocation": "2646:18:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 54844,
                  "src": "2638:26:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 54774,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2638:7:69",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 54777,
                  "mutability": "mutable",
                  "name": "basin_",
                  "nameLocation": "2674:6:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 54844,
                  "src": "2666:14:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 54776,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2666:7:69",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2615:66:69"
            },
            "returnParameters": {
              "id": 54779,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2682:0:69"
            },
            "scope": 55034,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 54854,
            "nodeType": "FunctionDefinition",
            "src": "3256:99:69",
            "nodes": [],
            "body": {
              "id": 54853,
              "nodeType": "Block",
              "src": "3314:41:69",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 54851,
                    "name": "redemptionAddress",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 54746,
                    "src": "3331:17:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 54850,
                  "id": 54852,
                  "nodeType": "Return",
                  "src": "3324:24:69"
                }
              ]
            },
            "baseFunctions": [
              53333
            ],
            "documentation": {
              "id": 54845,
              "nodeType": "StructuredDocumentation",
              "src": "3221:30:69",
              "text": "@inheritdoc ITokenRedeemer"
            },
            "functionSelector": "fbfa77cf",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "vault",
            "nameLocation": "3265:5:69",
            "overrides": {
              "id": 54847,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "3287:8:69"
            },
            "parameters": {
              "id": 54846,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3270:2:69"
            },
            "returnParameters": {
              "id": 54850,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54849,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 54854,
                  "src": "3305:7:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 54848,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3305:7:69",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3304:9:69"
            },
            "scope": 55034,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 54864,
            "nodeType": "FunctionDefinition",
            "src": "3396:54:69",
            "nodes": [],
            "body": {
              "id": 54863,
              "nodeType": "Block",
              "src": "3448:2:69",
              "nodes": [],
              "statements": []
            },
            "baseFunctions": [
              53346
            ],
            "documentation": {
              "id": 54855,
              "nodeType": "StructuredDocumentation",
              "src": "3361:30:69",
              "text": "@inheritdoc ITokenRedeemer"
            },
            "functionSelector": "3f2601ef",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 54861,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 54860,
                  "name": "onlyBasin",
                  "nameLocations": [
                    "3438:9:69"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 54770,
                  "src": "3438:9:69"
                },
                "nodeType": "ModifierInvocation",
                "src": "3438:9:69"
              }
            ],
            "name": "setUp",
            "nameLocation": "3405:5:69",
            "overrides": {
              "id": 54859,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "3429:8:69"
            },
            "parameters": {
              "id": 54858,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54857,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 54864,
                  "src": "3411:7:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 54856,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3411:7:69",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3410:9:69"
            },
            "returnParameters": {
              "id": 54862,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3448:0:69"
            },
            "scope": 55034,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 54874,
            "nodeType": "FunctionDefinition",
            "src": "3491:57:69",
            "nodes": [],
            "body": {
              "id": 54873,
              "nodeType": "Block",
              "src": "3546:2:69",
              "nodes": [],
              "statements": []
            },
            "baseFunctions": [
              53352
            ],
            "documentation": {
              "id": 54865,
              "nodeType": "StructuredDocumentation",
              "src": "3456:30:69",
              "text": "@inheritdoc ITokenRedeemer"
            },
            "functionSelector": "aa251f4d",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 54871,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 54870,
                  "name": "onlyBasin",
                  "nameLocations": [
                    "3536:9:69"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 54770,
                  "src": "3536:9:69"
                },
                "nodeType": "ModifierInvocation",
                "src": "3536:9:69"
              }
            ],
            "name": "tearDown",
            "nameLocation": "3500:8:69",
            "overrides": {
              "id": 54869,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "3527:8:69"
            },
            "parameters": {
              "id": 54868,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54867,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 54874,
                  "src": "3509:7:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 54866,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3509:7:69",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3508:9:69"
            },
            "returnParameters": {
              "id": 54872,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3546:0:69"
            },
            "scope": 55034,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 54920,
            "nodeType": "FunctionDefinition",
            "src": "3589:410:69",
            "nodes": [],
            "body": {
              "id": 54919,
              "nodeType": "Block",
              "src": "3668:331:69",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 54883,
                    "name": "redemptionActive",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 54754,
                    "src": "3682:16:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 54887,
                  "nodeType": "IfStatement",
                  "src": "3678:54:69",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 54884,
                        "name": "RedemptionAlreadyActive",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54736,
                        "src": "3707:23:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 54885,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3707:25:69",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 54886,
                    "nodeType": "RevertStatement",
                    "src": "3700:32:69"
                  }
                },
                {
                  "expression": {
                    "id": 54890,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 54888,
                      "name": "redemptionActive",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54754,
                      "src": "3743:16:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 54889,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3762:4:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "3743:23:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 54891,
                  "nodeType": "ExpressionStatement",
                  "src": "3743:23:69"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 54898,
                            "name": "basin",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 54751,
                            "src": "3822:5:69",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IGroveBasin_$53162",
                              "typeString": "contract IGroveBasin"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IGroveBasin_$53162",
                              "typeString": "contract IGroveBasin"
                            }
                          ],
                          "id": 54897,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3814:7:69",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 54896,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "3814:7:69",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 54899,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3814:14:69",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 54902,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "3838:4:69",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_BUIDLTokenRedeemer_$55034",
                              "typeString": "contract BUIDLTokenRedeemer"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_BUIDLTokenRedeemer_$55034",
                              "typeString": "contract BUIDLTokenRedeemer"
                            }
                          ],
                          "id": 54901,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3830:7:69",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 54900,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "3830:7:69",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 54903,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3830:13:69",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 54904,
                        "name": "creditTokenAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54877,
                        "src": "3845:17:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "arguments": [
                          {
                            "id": 54893,
                            "name": "creditToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 54742,
                            "src": "3784:11:69",
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
                          "id": 54892,
                          "name": "IERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 815,
                          "src": "3777:6:69",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC20_$815_$",
                            "typeString": "type(contract IERC20)"
                          }
                        },
                        "id": 54894,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3777:19:69",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$815",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 54895,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3797:16:69",
                      "memberName": "safeTransferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 544,
                      "src": "3777:36:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$815_$_t_address_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_IERC20_$815_$",
                        "typeString": "function (contract IERC20,address,address,uint256)"
                      }
                    },
                    "id": 54905,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3777:86:69",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 54906,
                  "nodeType": "ExpressionStatement",
                  "src": "3777:86:69"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 54911,
                        "name": "redemptionAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54746,
                        "src": "3906:17:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 54912,
                        "name": "creditTokenAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54877,
                        "src": "3925:17:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "arguments": [
                          {
                            "id": 54908,
                            "name": "creditToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 54742,
                            "src": "3880:11:69",
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
                          "id": 54907,
                          "name": "IERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 815,
                          "src": "3873:6:69",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC20_$815_$",
                            "typeString": "type(contract IERC20)"
                          }
                        },
                        "id": 54909,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3873:19:69",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$815",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 54910,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3893:12:69",
                      "memberName": "safeTransfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 493,
                      "src": "3873:32:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$815_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_IERC20_$815_$",
                        "typeString": "function (contract IERC20,address,uint256)"
                      }
                    },
                    "id": 54913,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3873:70:69",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 54914,
                  "nodeType": "ExpressionStatement",
                  "src": "3873:70:69"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 54916,
                        "name": "creditTokenAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54877,
                        "src": "3974:17:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 54915,
                      "name": "RedeemInitiated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 53309,
                      "src": "3958:15:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 54917,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3958:34:69",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 54918,
                  "nodeType": "EmitStatement",
                  "src": "3953:39:69"
                }
              ]
            },
            "baseFunctions": [
              53358
            ],
            "documentation": {
              "id": 54875,
              "nodeType": "StructuredDocumentation",
              "src": "3554:30:69",
              "text": "@inheritdoc ITokenRedeemer"
            },
            "functionSelector": "010252f8",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 54881,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 54880,
                  "name": "onlyBasin",
                  "nameLocations": [
                    "3658:9:69"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 54770,
                  "src": "3658:9:69"
                },
                "nodeType": "ModifierInvocation",
                "src": "3658:9:69"
              }
            ],
            "name": "initiateRedeem",
            "nameLocation": "3598:14:69",
            "overrides": {
              "id": 54879,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "3649:8:69"
            },
            "parameters": {
              "id": 54878,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54877,
                  "mutability": "mutable",
                  "name": "creditTokenAmount",
                  "nameLocation": "3621:17:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 54920,
                  "src": "3613:25:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54876,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3613:7:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3612:27:69"
            },
            "returnParameters": {
              "id": 54882,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3668:0:69"
            },
            "scope": 55034,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 54971,
            "nodeType": "FunctionDefinition",
            "src": "4040:460:69",
            "nodes": [],
            "body": {
              "id": 54970,
              "nodeType": "Block",
              "src": "4158:342:69",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 54942,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 54932,
                      "name": "collateralTokenReturned",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54930,
                      "src": "4168:23:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 54939,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -28,
                              "src": "4236:4:69",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_BUIDLTokenRedeemer_$55034",
                                "typeString": "contract BUIDLTokenRedeemer"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_BUIDLTokenRedeemer_$55034",
                                "typeString": "contract BUIDLTokenRedeemer"
                              }
                            ],
                            "id": 54938,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "4228:7:69",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 54937,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "4228:7:69",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 54940,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4228:13:69",
                          "tryCall": false,
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
                        "expression": {
                          "arguments": [
                            {
                              "id": 54934,
                              "name": "collateralToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 54744,
                              "src": "4201:15:69",
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
                            "id": 54933,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 815,
                            "src": "4194:6:69",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_IERC20_$815_$",
                              "typeString": "type(contract IERC20)"
                            }
                          },
                          "id": 54935,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4194:23:69",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$815",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 54936,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4218:9:69",
                        "memberName": "balanceOf",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 770,
                        "src": "4194:33:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                          "typeString": "function (address) view external returns (uint256)"
                        }
                      },
                      "id": 54941,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4194:48:69",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4168:74:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 54943,
                  "nodeType": "ExpressionStatement",
                  "src": "4168:74:69"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 54946,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 54944,
                      "name": "collateralTokenReturned",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54930,
                      "src": "4257:23:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 54945,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4284:1:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "4257:28:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 54950,
                  "nodeType": "IfStatement",
                  "src": "4253:62:69",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 54947,
                        "name": "NoCollateralBalance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54738,
                        "src": "4294:19:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 54948,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4294:21:69",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 54949,
                    "nodeType": "RevertStatement",
                    "src": "4287:28:69"
                  }
                },
                {
                  "expression": {
                    "id": 54953,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 54951,
                      "name": "redemptionActive",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54754,
                      "src": "4326:16:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "66616c7365",
                      "id": 54952,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4345:5:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "4326:24:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 54954,
                  "nodeType": "ExpressionStatement",
                  "src": "4326:24:69"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 54961,
                            "name": "basin",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 54751,
                            "src": "4406:5:69",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IGroveBasin_$53162",
                              "typeString": "contract IGroveBasin"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IGroveBasin_$53162",
                              "typeString": "contract IGroveBasin"
                            }
                          ],
                          "id": 54960,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4398:7:69",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 54959,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "4398:7:69",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 54962,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4398:14:69",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 54963,
                        "name": "collateralTokenReturned",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54930,
                        "src": "4414:23:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "arguments": [
                          {
                            "id": 54956,
                            "name": "collateralToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 54744,
                            "src": "4368:15:69",
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
                          "id": 54955,
                          "name": "IERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 815,
                          "src": "4361:6:69",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC20_$815_$",
                            "typeString": "type(contract IERC20)"
                          }
                        },
                        "id": 54957,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4361:23:69",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$815",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 54958,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4385:12:69",
                      "memberName": "safeTransfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 493,
                      "src": "4361:36:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$815_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_IERC20_$815_$",
                        "typeString": "function (contract IERC20,address,uint256)"
                      }
                    },
                    "id": 54964,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4361:77:69",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 54965,
                  "nodeType": "ExpressionStatement",
                  "src": "4361:77:69"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 54967,
                        "name": "collateralTokenReturned",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54930,
                        "src": "4469:23:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 54966,
                      "name": "RedeemCompleted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 53314,
                      "src": "4453:15:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 54968,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4453:40:69",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 54969,
                  "nodeType": "EmitStatement",
                  "src": "4448:45:69"
                }
              ]
            },
            "baseFunctions": [
              53367
            ],
            "documentation": {
              "id": 54921,
              "nodeType": "StructuredDocumentation",
              "src": "4005:30:69",
              "text": "@inheritdoc ITokenRedeemer"
            },
            "functionSelector": "afe9a2d8",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 54928,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 54927,
                  "name": "onlyBasin",
                  "nameLocations": [
                    "4106:9:69"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 54770,
                  "src": "4106:9:69"
                },
                "nodeType": "ModifierInvocation",
                "src": "4106:9:69"
              }
            ],
            "name": "completeRedeem",
            "nameLocation": "4049:14:69",
            "overrides": {
              "id": 54926,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "4097:8:69"
            },
            "parameters": {
              "id": 54925,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54924,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 54971,
                  "src": "4064:22:69",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_RedeemRequest_$53290_calldata_ptr",
                    "typeString": "struct RedeemRequest"
                  },
                  "typeName": {
                    "id": 54923,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 54922,
                      "name": "RedeemRequest",
                      "nameLocations": [
                        "4064:13:69"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 53290,
                      "src": "4064:13:69"
                    },
                    "referencedDeclaration": 53290,
                    "src": "4064:13:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_RedeemRequest_$53290_storage_ptr",
                      "typeString": "struct RedeemRequest"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4063:24:69"
            },
            "returnParameters": {
              "id": 54931,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54930,
                  "mutability": "mutable",
                  "name": "collateralTokenReturned",
                  "nameLocation": "4133:23:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 54971,
                  "src": "4125:31:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54929,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4125:7:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4124:33:69"
            },
            "scope": 55034,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 55033,
            "nodeType": "FunctionDefinition",
            "src": "4541:448:69",
            "nodes": [],
            "body": {
              "id": 55032,
              "nodeType": "Block",
              "src": "4605:384:69",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 54993,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "4619:79:69",
                    "subExpression": {
                      "arguments": [
                        {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 54987,
                              "name": "basin",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 54751,
                              "src": "4659:5:69",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IGroveBasin_$53162",
                                "typeString": "contract IGroveBasin"
                              }
                            },
                            "id": 54988,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4665:18:69",
                            "memberName": "MANAGER_ADMIN_ROLE",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 52741,
                            "src": "4659:24:69",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$__$returns$_t_bytes32_$",
                              "typeString": "function () view external returns (bytes32)"
                            }
                          },
                          "id": 54989,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4659:26:69",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        {
                          "expression": {
                            "id": 54990,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "4687:3:69",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 54991,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4691:6:69",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "4687:10:69",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 54983,
                                  "name": "basin",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 54751,
                                  "src": "4643:5:69",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_IGroveBasin_$53162",
                                    "typeString": "contract IGroveBasin"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_IGroveBasin_$53162",
                                    "typeString": "contract IGroveBasin"
                                  }
                                ],
                                "id": 54982,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "4635:7:69",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 54981,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "4635:7:69",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 54984,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4635:14:69",
                              "tryCall": false,
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
                            "id": 54980,
                            "name": "IAccessControl",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 41409,
                            "src": "4620:14:69",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_IAccessControl_$41409_$",
                              "typeString": "type(contract IAccessControl)"
                            }
                          },
                          "id": 54985,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4620:30:69",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IAccessControl_$41409",
                            "typeString": "contract IAccessControl"
                          }
                        },
                        "id": 54986,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4651:7:69",
                        "memberName": "hasRole",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 41376,
                        "src": "4620:38:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                          "typeString": "function (bytes32,address) view external returns (bool)"
                        }
                      },
                      "id": 54992,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4620:78:69",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 54997,
                  "nodeType": "IfStatement",
                  "src": "4615:107:69",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 54994,
                        "name": "NotAuthorized",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 53294,
                        "src": "4707:13:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 54995,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4707:15:69",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 54996,
                    "nodeType": "RevertStatement",
                    "src": "4700:22:69"
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 55004,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 55000,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 54998,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54974,
                        "src": "4736:5:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "id": 54999,
                        "name": "creditToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54742,
                        "src": "4745:11:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "4736:20:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 55003,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 55001,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54974,
                        "src": "4760:5:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "id": 55002,
                        "name": "collateralToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54744,
                        "src": "4769:15:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "4760:24:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "4736:48:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 55008,
                  "nodeType": "IfStatement",
                  "src": "4732:106:69",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 55005,
                        "name": "InvalidToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 53300,
                        "src": "4824:12:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 55006,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4824:14:69",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 55007,
                    "nodeType": "RevertStatement",
                    "src": "4817:21:69"
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 55011,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 55009,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54976,
                      "src": "4853:6:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 55010,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4863:1:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "4853:11:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 55015,
                  "nodeType": "IfStatement",
                  "src": "4849:37:69",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 55012,
                        "name": "ZeroBalance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 53302,
                        "src": "4873:11:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 55013,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4873:13:69",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 55014,
                    "nodeType": "RevertStatement",
                    "src": "4866:20:69"
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 55022,
                            "name": "basin",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 54751,
                            "src": "4932:5:69",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IGroveBasin_$53162",
                              "typeString": "contract IGroveBasin"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IGroveBasin_$53162",
                              "typeString": "contract IGroveBasin"
                            }
                          ],
                          "id": 55021,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4924:7:69",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 55020,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "4924:7:69",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 55023,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4924:14:69",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 55024,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54976,
                        "src": "4940:6:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "arguments": [
                          {
                            "id": 55017,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 54974,
                            "src": "4904:5:69",
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
                          "id": 55016,
                          "name": "IERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 815,
                          "src": "4897:6:69",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC20_$815_$",
                            "typeString": "type(contract IERC20)"
                          }
                        },
                        "id": 55018,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4897:13:69",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$815",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 55019,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4911:12:69",
                      "memberName": "safeTransfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 493,
                      "src": "4897:26:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$815_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_IERC20_$815_$",
                        "typeString": "function (contract IERC20,address,uint256)"
                      }
                    },
                    "id": 55025,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4897:50:69",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 55026,
                  "nodeType": "ExpressionStatement",
                  "src": "4897:50:69"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 55028,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54974,
                        "src": "4968:5:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 55029,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54976,
                        "src": "4975:6:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 55027,
                      "name": "Swept",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 53321,
                      "src": "4962:5:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 55030,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4962:20:69",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 55031,
                  "nodeType": "EmitStatement",
                  "src": "4957:25:69"
                }
              ]
            },
            "baseFunctions": [
              53375
            ],
            "documentation": {
              "id": 54972,
              "nodeType": "StructuredDocumentation",
              "src": "4506:30:69",
              "text": "@inheritdoc ITokenRedeemer"
            },
            "functionSelector": "6ea056a9",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sweep",
            "nameLocation": "4550:5:69",
            "overrides": {
              "id": 54978,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "4596:8:69"
            },
            "parameters": {
              "id": 54977,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54974,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "4564:5:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 55033,
                  "src": "4556:13:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 54973,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4556:7:69",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 54976,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "4579:6:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 55033,
                  "src": "4571:14:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54975,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4571:7:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4555:31:69"
            },
            "returnParameters": {
              "id": 54979,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4605:0:69"
            },
            "scope": 55034,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 54727,
              "name": "ITokenRedeemer",
              "nameLocations": [
                "1034:14:69"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 53376,
              "src": "1034:14:69"
            },
            "id": 54728,
            "nodeType": "InheritanceSpecifier",
            "src": "1034:14:69"
          }
        ],
        "canonicalName": "BUIDLTokenRedeemer",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 54726,
          "nodeType": "StructuredDocumentation",
          "src": "451:551:69",
          "text": " @title  BUIDLTokenRedeemer\n @notice Token redeemer that handles BUIDL credit token redemptions through an offchain\n         settlement process. Only one redemption may be active at a time. Transfers credit\n         tokens to the redemption address on initiation and returns the redeemer's entire\n         collateral token balance to the basin on completion.\n @dev    Only callable by the Basin contract. To reset a stuck redemption, send any non-zero\n         amount of collateral token to this contract and call completeRedeem."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          55034,
          53376
        ],
        "name": "BUIDLTokenRedeemer",
        "nameLocation": "1012:18:69",
        "scope": 55035,
        "usedErrors": [
          53292,
          53294,
          53296,
          53298,
          53300,
          53302,
          53304,
          54734,
          54736,
          54738
        ],
        "usedEvents": [
          53309,
          53314,
          53321
        ]
      }
    ],
    "license": "AGPL-3.0-or-later"
  },
  "id": 69
} as const;

export default artifact;
