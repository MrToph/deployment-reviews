// Keep this as a TS literal object instead of importing JSON directly.
// TypeScript JSON imports widen to generic string/number/array types, but
// Assay needs literal storage labels, bytecode immutable ids, offsets, and lengths
// to provide proper validation types for the dev experience.
export default {
  "abi": [
    {
      "type": "constructor",
      "inputs": [
        {
          "name": "dai_",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "daiUSDS_",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "usds_",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "ALLOCATOR_ROLE",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "DEFAULT_ADMIN_ROLE",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "VERSION",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "string",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "dai",
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
      "name": "daiToUSDSSwapRateLimitKey",
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
      "name": "daiUSDS",
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
      "name": "swapDAIToUSDS",
      "inputs": [
        {
          "name": "daiAmount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "swapUSDSToDAI",
      "inputs": [
        {
          "name": "usdsAmount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "usds",
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
      "name": "usdsToDAISwapRateLimitKey",
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
      "type": "event",
      "name": "DAIUSDSSwapDAIToUSDS",
      "inputs": [
        {
          "name": "daiAmount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "DAIUSDSSwapUSDSToDAI",
      "inputs": [
        {
          "name": "usdsAmount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Initialized",
      "inputs": [
        {
          "name": "version",
          "type": "uint64",
          "indexed": false,
          "internalType": "uint64"
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "AccessControlUnauthorizedAccount",
      "inputs": [
        {
          "name": "caller",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "role",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ]
    },
    {
      "type": "error",
      "name": "InvalidInitialization",
      "inputs": []
    },
    {
      "type": "error",
      "name": "NotInitializing",
      "inputs": []
    },
    {
      "type": "error",
      "name": "ReentrancyGuardReentrantCall",
      "inputs": []
    }
  ],
  "bytecode": {
    "object": "0x60e060405234801561000f575f5ffd5b50604051610fb2380380610fb283398101604081905261002e9161016d565b6001600160a01b0383166100895760405162461bcd60e51b815260206004820152601560248201527f4441495553445346616365742f7a65726f2d646169000000000000000000000060448201526064015b60405180910390fd5b6001600160a01b0382166100df5760405162461bcd60e51b815260206004820152601960248201527f4441495553445346616365742f7a65726f2d64616955534453000000000000006044820152606401610080565b6001600160a01b0381166101355760405162461bcd60e51b815260206004820152601660248201527f4441495553445346616365742f7a65726f2d75736473000000000000000000006044820152606401610080565b6001600160a01b0392831660805290821660a0521660c0526101ad565b80516001600160a01b0381168114610168575f5ffd5b919050565b5f5f5f6060848603121561017f575f5ffd5b61018884610152565b925061019660208501610152565b91506101a460408501610152565b90509250925092565b60805160a05160c051610d9661021c5f395f818160b901528181610364015261047c01525f818161016d015281816103860152818161040b0152818161049e015281816106930152818161071801526107ab01525f81816101bb0152818161067101526107890152610d965ff3fe608060405234801561000f575f5ffd5b506004361061009b575f3560e01c8063a217fddf11610063578063a217fddf14610161578063c5237ab014610168578063c81cbaa11461018f578063f4b9fa75146101b6578063ffa1ad74146101dd575f5ffd5b80630d0152361461009f5780634cf282fb146100b45780637b65461c146100f857806381a84a371461010b57806391a0cf771461013b575b5f5ffd5b6100b26100ad366004610bc4565b61020e565b005b6100db7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b6100b2610106366004610bc4565b610526565b7fb65200a5af970cf1b215a3e708a047714ded77838ecf2fe3c8744af3c938ef765b6040519081526020016100ef565b7f76c9c284c778ccc8c58c6163f3a965b4a004e2eb0a9ee4e7892a5f8cf8a8499761012d565b61012d5f81565b6100db7f000000000000000000000000000000000000000000000000000000000000000081565b61012d7f68bf109b95a5c15fb2bb99041323c27d15f8675e11bf7420a1cd6ad64c394f4681565b6100db7f000000000000000000000000000000000000000000000000000000000000000081565b610201604051806040016040528060058152602001640312e302e360dc1b81525081565b6040516100ef9190610c09565b610216610800565b7f68bf109b95a5c15fb2bb99041323c27d15f8675e11bf7420a1cd6ad64c394f465f7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc0054604051632474521560e21b8152600481018490523360248201526001600160a01b03909116915081906391d1485490604401602060405180830381865afa1580156102a7573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102cb9190610c22565b338390916103025760405163e2517d3f60e01b81526001600160a01b03909216600483015260248201526044015b60405180910390fd5b505061033461032e7fb65200a5af970cf1b215a3e708a047714ded77838ecf2fe3c8744af3c938ef7690565b8461084a565b7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc01546001600160a01b03166103ab7f0000000000000000000000000000000000000000000000000000000000000000827f0000000000000000000000000000000000000000000000000000000000000000876108e4565b604080516001600160a01b03831660248201819052604480830188905283518084039091018152606490920183526020820180516001600160e01b031663068f301560e41b1790529151631d56d26960e11b8152633aada4d291610434917f00000000000000000000000000000000000000000000000000000000000000009190600401610c41565b5f604051808303815f875af115801561044f573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f191682016040526104769190810190610c80565b506104c37f0000000000000000000000000000000000000000000000000000000000000000827f00000000000000000000000000000000000000000000000000000000000000005f6108e4565b6040518481527f5838ec17cb016cf45fd2b4427dd61db6ef1287a8c21e292dac7223360c9b1881906020015b60405180910390a150505061052360017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b50565b61052e610800565b7f68bf109b95a5c15fb2bb99041323c27d15f8675e11bf7420a1cd6ad64c394f465f7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc0054604051632474521560e21b8152600481018490523360248201526001600160a01b03909116915081906391d1485490604401602060405180830381865afa1580156105bf573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105e39190610c22565b338390916106155760405163e2517d3f60e01b81526001600160a01b03909216600483015260248201526044016102f9565b505061064161032e7f76c9c284c778ccc8c58c6163f3a965b4a004e2eb0a9ee4e7892a5f8cf8a8499790565b7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc01546001600160a01b03166106b87f0000000000000000000000000000000000000000000000000000000000000000827f0000000000000000000000000000000000000000000000000000000000000000876108e4565b604080516001600160a01b03831660248201819052604480830188905283518084039091018152606490920183526020820180516001600160e01b03166379603d5760e11b1790529151631d56d26960e11b8152633aada4d291610741917f00000000000000000000000000000000000000000000000000000000000000009190600401610c41565b5f604051808303815f875af115801561075c573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f191682016040526107839190810190610c80565b506107d07f0000000000000000000000000000000000000000000000000000000000000000827f00000000000000000000000000000000000000000000000000000000000000005f6108e4565b6040518481527f154c43a1aa9aeb213573f6834160b16991b50aa5f0b90a414ccb0e04d802f3e6906020016104ef565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0080546001190161084457604051633ee5aeb560e01b815260040160405180910390fd5b60029055565b7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc00600201546040516303bf076b60e41b815260048101849052602481018390526001600160a01b0390911690633bf076b0906044016020604051808303815f875af11580156108bb573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108df9190610d33565b505050565b6040516001600160a01b0383166024820152604481018290525f9060640160408051601f198184030181529181526020820180516001600160e01b031663095ea7b360e01b179052519091505f9081906001600160a01b0387169061094f9089908690602401610c41565b60408051601f198184030181529181526020820180516001600160e01b0316631d56d26960e11b179052516109849190610d4a565b5f604051808303815f865af19150503d805f81146109bd576040519150601f19603f3d011682016040523d82523d5f602084013e6109c2565b606091505b509150915060608215610a1d57818060200190518101906109e39190610c80565b905080515f1480610a0f575080516020148015610a0f575080806020019051810190610a0f9190610c22565b15610a1d5750505050610bbe565b6040516001600160a01b0387811660248301525f6044830152881690633aada4d2908a9060640160408051601f198184030181529181526020820180516001600160e01b031663095ea7b360e01b179052516001600160e01b031960e085901b168152610a8e929190600401610c41565b5f604051808303815f875af1158015610aa9573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f19168201604052610ad09190810190610c80565b50604051631d56d26960e11b81526001600160a01b03881690633aada4d290610aff908b908890600401610c41565b5f604051808303815f875af1158015610b1a573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f19168201604052610b419190810190610c80565b905080515f1480610b6d575080516020148015610b6d575080806020019051810190610b6d9190610c22565b610bb95760405162461bcd60e51b815260206004820152601960248201527f417070726f76654c69622f617070726f76652d6661696c65640000000000000060448201526064016102f9565b505050505b50505050565b5f60208284031215610bd4575f5ffd5b5035919050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f610c1b6020830184610bdb565b9392505050565b5f60208284031215610c32575f5ffd5b81518015158114610c1b575f5ffd5b6001600160a01b03831681526040602082018190525f90610c6490830184610bdb565b949350505050565b634e487b7160e01b5f52604160045260245ffd5b5f60208284031215610c90575f5ffd5b815167ffffffffffffffff811115610ca6575f5ffd5b8201601f81018413610cb6575f5ffd5b805167ffffffffffffffff811115610cd057610cd0610c6c565b604051601f8201601f19908116603f0116810167ffffffffffffffff81118282101715610cff57610cff610c6c565b604052818152828201602001861015610d16575f5ffd5b8160208401602083015e5f91810160200191909152949350505050565b5f60208284031215610d43575f5ffd5b5051919050565b5f82518060208501845e5f92019182525091905056fea26469706673582212209b959242e45ba6f2e8d3172baf56227cdb4e0d657692478d5cff4a86aa3b7aa364736f6c63430008220033",
    "sourceMap": "478:4033:230:-:0;;;1958:347;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;2035:22:230;;2027:56;;;;-1:-1:-1;;;2027:56:230;;781:2:388;2027:56:230;;;763:21:388;820:2;800:18;;;793:30;859:23;839:18;;;832:51;900:18;;2027:56:230;;;;;;;;;-1:-1:-1;;;;;2101:22:230;;2093:60;;;;-1:-1:-1;;;2093:60:230;;1131:2:388;2093:60:230;;;1113:21:388;1170:2;1150:18;;;1143:30;1209:27;1189:18;;;1182:55;1254:18;;2093:60:230;929:349:388;2093:60:230;-1:-1:-1;;;;;2171:22:230;;2163:57;;;;-1:-1:-1;;;2163:57:230;;1485:2:388;2163:57:230;;;1467:21:388;1524:2;1504:18;;;1497:30;1563:24;1543:18;;;1536:52;1605:18;;2163:57:230;1283:346:388;2163:57:230;-1:-1:-1;;;;;2231:14:230;;;;;2255:18;;;;;2283:15;;;478:4033;;14:177:388;93:13;;-1:-1:-1;;;;;135:31:388;;125:42;;115:70;;181:1;178;171:12;115:70;14:177;;;:::o;196:378::-;284:6;292;300;353:2;341:9;332:7;328:23;324:32;321:52;;;369:1;366;359:12;321:52;392:40;422:9;392:40;:::i;:::-;382:50;;451:49;496:2;485:9;481:18;451:49;:::i;:::-;441:59;;519:49;564:2;553:9;549:18;519:49;:::i;:::-;509:59;;196:378;;;;;:::o;1283:346::-;478:4033:230;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561000f575f5ffd5b506004361061009b575f3560e01c8063a217fddf11610063578063a217fddf14610161578063c5237ab014610168578063c81cbaa11461018f578063f4b9fa75146101b6578063ffa1ad74146101dd575f5ffd5b80630d0152361461009f5780634cf282fb146100b45780637b65461c146100f857806381a84a371461010b57806391a0cf771461013b575b5f5ffd5b6100b26100ad366004610bc4565b61020e565b005b6100db7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b6100b2610106366004610bc4565b610526565b7fb65200a5af970cf1b215a3e708a047714ded77838ecf2fe3c8744af3c938ef765b6040519081526020016100ef565b7f76c9c284c778ccc8c58c6163f3a965b4a004e2eb0a9ee4e7892a5f8cf8a8499761012d565b61012d5f81565b6100db7f000000000000000000000000000000000000000000000000000000000000000081565b61012d7f68bf109b95a5c15fb2bb99041323c27d15f8675e11bf7420a1cd6ad64c394f4681565b6100db7f000000000000000000000000000000000000000000000000000000000000000081565b610201604051806040016040528060058152602001640312e302e360dc1b81525081565b6040516100ef9190610c09565b610216610800565b7f68bf109b95a5c15fb2bb99041323c27d15f8675e11bf7420a1cd6ad64c394f465f7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc0054604051632474521560e21b8152600481018490523360248201526001600160a01b03909116915081906391d1485490604401602060405180830381865afa1580156102a7573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102cb9190610c22565b338390916103025760405163e2517d3f60e01b81526001600160a01b03909216600483015260248201526044015b60405180910390fd5b505061033461032e7fb65200a5af970cf1b215a3e708a047714ded77838ecf2fe3c8744af3c938ef7690565b8461084a565b7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc01546001600160a01b03166103ab7f0000000000000000000000000000000000000000000000000000000000000000827f0000000000000000000000000000000000000000000000000000000000000000876108e4565b604080516001600160a01b03831660248201819052604480830188905283518084039091018152606490920183526020820180516001600160e01b031663068f301560e41b1790529151631d56d26960e11b8152633aada4d291610434917f00000000000000000000000000000000000000000000000000000000000000009190600401610c41565b5f604051808303815f875af115801561044f573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f191682016040526104769190810190610c80565b506104c37f0000000000000000000000000000000000000000000000000000000000000000827f00000000000000000000000000000000000000000000000000000000000000005f6108e4565b6040518481527f5838ec17cb016cf45fd2b4427dd61db6ef1287a8c21e292dac7223360c9b1881906020015b60405180910390a150505061052360017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b50565b61052e610800565b7f68bf109b95a5c15fb2bb99041323c27d15f8675e11bf7420a1cd6ad64c394f465f7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc0054604051632474521560e21b8152600481018490523360248201526001600160a01b03909116915081906391d1485490604401602060405180830381865afa1580156105bf573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105e39190610c22565b338390916106155760405163e2517d3f60e01b81526001600160a01b03909216600483015260248201526044016102f9565b505061064161032e7f76c9c284c778ccc8c58c6163f3a965b4a004e2eb0a9ee4e7892a5f8cf8a8499790565b7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc01546001600160a01b03166106b87f0000000000000000000000000000000000000000000000000000000000000000827f0000000000000000000000000000000000000000000000000000000000000000876108e4565b604080516001600160a01b03831660248201819052604480830188905283518084039091018152606490920183526020820180516001600160e01b03166379603d5760e11b1790529151631d56d26960e11b8152633aada4d291610741917f00000000000000000000000000000000000000000000000000000000000000009190600401610c41565b5f604051808303815f875af115801561075c573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f191682016040526107839190810190610c80565b506107d07f0000000000000000000000000000000000000000000000000000000000000000827f00000000000000000000000000000000000000000000000000000000000000005f6108e4565b6040518481527f154c43a1aa9aeb213573f6834160b16991b50aa5f0b90a414ccb0e04d802f3e6906020016104ef565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0080546001190161084457604051633ee5aeb560e01b815260040160405180910390fd5b60029055565b7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc00600201546040516303bf076b60e41b815260048101849052602481018390526001600160a01b0390911690633bf076b0906044016020604051808303815f875af11580156108bb573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108df9190610d33565b505050565b6040516001600160a01b0383166024820152604481018290525f9060640160408051601f198184030181529181526020820180516001600160e01b031663095ea7b360e01b179052519091505f9081906001600160a01b0387169061094f9089908690602401610c41565b60408051601f198184030181529181526020820180516001600160e01b0316631d56d26960e11b179052516109849190610d4a565b5f604051808303815f865af19150503d805f81146109bd576040519150601f19603f3d011682016040523d82523d5f602084013e6109c2565b606091505b509150915060608215610a1d57818060200190518101906109e39190610c80565b905080515f1480610a0f575080516020148015610a0f575080806020019051810190610a0f9190610c22565b15610a1d5750505050610bbe565b6040516001600160a01b0387811660248301525f6044830152881690633aada4d2908a9060640160408051601f198184030181529181526020820180516001600160e01b031663095ea7b360e01b179052516001600160e01b031960e085901b168152610a8e929190600401610c41565b5f604051808303815f875af1158015610aa9573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f19168201604052610ad09190810190610c80565b50604051631d56d26960e11b81526001600160a01b03881690633aada4d290610aff908b908890600401610c41565b5f604051808303815f875af1158015610b1a573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f19168201604052610b419190810190610c80565b905080515f1480610b6d575080516020148015610b6d575080806020019051810190610b6d9190610c22565b610bb95760405162461bcd60e51b815260206004820152601960248201527f417070726f76654c69622f617070726f76652d6661696c65640000000000000060448201526064016102f9565b505050505b50505050565b5f60208284031215610bd4575f5ffd5b5035919050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f610c1b6020830184610bdb565b9392505050565b5f60208284031215610c32575f5ffd5b81518015158114610c1b575f5ffd5b6001600160a01b03831681526040602082018190525f90610c6490830184610bdb565b949350505050565b634e487b7160e01b5f52604160045260245ffd5b5f60208284031215610c90575f5ffd5b815167ffffffffffffffff811115610ca6575f5ffd5b8201601f81018413610cb6575f5ffd5b805167ffffffffffffffff811115610cd057610cd0610c6c565b604051601f8201601f19908116603f0116810167ffffffffffffffff81118282101715610cff57610cff610c6c565b604052818152828201602001861015610d16575f5ffd5b8160208401602083015e5f91810160200191909152949350505050565b5f60208284031215610d43575f5ffd5b5051919050565b5f82518060208501845e5f92019182525091905056fea26469706673582212209b959242e45ba6f2e8d3172baf56227cdb4e0d657692478d5cff4a86aa3b7aa364736f6c63430008220033",
    "sourceMap": "478:4033:230:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2649:603;;;;;;:::i;:::-;;:::i;:::-;;1609:38;;;;;;;;-1:-1:-1;;;;;363:32:388;;;345:51;;333:2;318:18;1609:38:230;;;;;;;;3292:596;;;;;;:::i;:::-;;:::i;4232:118::-;882:43;4232:118;;;553:25:388;;;541:2;526:18;4232:118:230;407:177:388;4390:118:230;978:43;4390:118;;870:58:218;;924:4;870:58;;1527:41:230;;;;;962:77:218;;1012:27;962:77;;1449:37:230;;;;;1055:49;;;;;;;;;;;;;;;-1:-1:-1;;;1055:49:230;;;;;;;;;;;;:::i;2649:603::-;3251:21:160;:19;:21::i;:::-;1012:27:218::1;1392:22;1053:34:214::0;1417:44:218;1493:57:::1;::::0;-1:-1:-1;;;1493:57:218;;::::1;::::0;::::1;1282:25:388::0;;;1539:10:218::1;1323:18:388::0;;;1316:60;-1:-1:-1;;;;;1417:44:218;;::::1;::::0;-1:-1:-1;1417:44:218;;1493:39:::1;::::0;1255:18:388;;1493:57:218::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1597:10;1609:4;1472:152;;;;;::::0;-1:-1:-1;;;1472:152:218;;-1:-1:-1;;;;;1861:32:388;;;1472:152:218::1;::::0;::::1;1843:51:388::0;1910:18;;;1903:34;1816:18;;1472:152:218::1;;;;;;;;;;;2794:59:230::2;2813:27;882:43:::0;;4232:118;2813:27:::2;2842:10;2794:18;:59::i;:::-;2880:35:::0;;-1:-1:-1;;;;;2880:35:230::2;2926:52;2945:4;2880:35:::0;2958:7:::2;2967:10:::0;2926:18:::2;:52::i;:::-;3047:59;::::0;;-1:-1:-1;;;;;2989:23:230;::::2;3047:59;::::0;::::2;1843:51:388::0;;;1910:18;;;;1903:34;;;3047:59:230;;;;;;;;;;1816:18:388;;;;3047:59:230;;::::2;::::0;::::2;::::0;;-1:-1:-1;;;;;3047:59:230::2;-1:-1:-1::0;;;3047:59:230::2;::::0;;2989:127;;-1:-1:-1;;;2989:127:230;;:23:::2;::::0;:127:::2;::::0;3026:7:::2;::::0;3047:59;2989:127:::2;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;;::::2;-1:-1:-1::0;;2989:127:230::2;::::0;::::2;;::::0;::::2;::::0;;;::::2;::::0;::::2;:::i;:::-;;3154:43;3173:4;3179:5;3186:7;3195:1;3154:18;:43::i;:::-;3213:32;::::0;553:25:388;;;3213:32:230::2;::::0;541:2:388;526:18;3213:32:230::2;;;;;;;;2784:468;1382:261:218::1;3282:1:160;3293:20:::0;1805:1;2388:30;3969:23;3716:283;3293:20;2649:603:230;:::o;3292:596::-;3251:21:160;:19;:21::i;:::-;1012:27:218::1;1392:22;1053:34:214::0;1417:44:218;1493:57:::1;::::0;-1:-1:-1;;;1493:57:218;;::::1;::::0;::::1;1282:25:388::0;;;1539:10:218::1;1323:18:388::0;;;1316:60;-1:-1:-1;;;;;1417:44:218;;::::1;::::0;-1:-1:-1;1417:44:218;;1493:39:::1;::::0;1255:18:388;;1493:57:218::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1597:10;1609:4;1472:152;;;;;::::0;-1:-1:-1;;;1472:152:218;;-1:-1:-1;;;;;1861:32:388;;;1472:152:218::1;::::0;::::1;1843:51:388::0;1910:18;;;1903:34;1816:18;;1472:152:218::1;1669:274:388::0;1472:152:218::1;;;3436:58:230::2;3455:27;978:43:::0;;4390:118;3436:58:::2;3521:35:::0;;-1:-1:-1;;;;;3521:35:230::2;3567:50;3586:3;3521:35:::0;3598:7:::2;3607:9:::0;3567:18:::2;:50::i;:::-;3686:58;::::0;;-1:-1:-1;;;;;3628:23:230;::::2;3686:58;::::0;::::2;1843:51:388::0;;;1910:18;;;;1903:34;;;3686:58:230;;;;;;;;;;1816:18:388;;;;3686:58:230;;::::2;::::0;::::2;::::0;;-1:-1:-1;;;;;3686:58:230::2;-1:-1:-1::0;;;3686:58:230::2;::::0;;3628:126;;-1:-1:-1;;;3628:126:230;;:23:::2;::::0;:126:::2;::::0;3665:7:::2;::::0;3686:58;3628:126:::2;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;;::::2;-1:-1:-1::0;;3628:126:230::2;::::0;::::2;;::::0;::::2;::::0;;;::::2;::::0;::::2;:::i;:::-;;3792:42;3811:3;3816:5;3823:7;3832:1;3792:18;:42::i;:::-;3850:31;::::0;553:25:388;;;3850:31:230::2;::::0;541:2:388;526:18;3850:31:230::2;407:177:388::0;3326:384:160;2388:30;3526:9;;-1:-1:-1;;3526:20:160;3522:88;;3569:30;;-1:-1:-1;;;3569:30:160;;;;;;;;;;;3522:88;1847:1;3684:19;;3326:384::o;2133:174:218:-;1053:34:214;2221:40:218;;;2209:91;;-1:-1:-1;;;2209:91:218;;;;;3974:25:388;;;4015:18;;;4008:34;;;-1:-1:-1;;;;;2221:40:218;;;;2209:78;;3947:18:388;;2209:91:218;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;2133:174;;:::o;361:1248:288:-;487:53;;-1:-1:-1;;;;;1861:32:388;;487:53:288;;;1843:51:388;1910:18;;;1903:34;;;460:24:288;;1816:18:388;;487:53:288;;;-1:-1:-1;;487:53:288;;;;;;;;;;;;;;-1:-1:-1;;;;;487:53:288;-1:-1:-1;;;487:53:288;;;666:54;487:53;;-1:-1:-1;;;;;;;;;;655:10:288;;;666:54;;700:5;;487:53;;666:54;;;:::i;:::-;;;;-1:-1:-1;;666:54:288;;;;;;;;;;;;;;-1:-1:-1;;;;;666:54:288;-1:-1:-1;;;666:54:288;;;655:66;;;666:54;655:66;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;605:116;;;;732:23;770:7;766:403;;;901:4;890:25;;;;;;;;;;;;:::i;:::-;877:38;;1036:10;:17;1057:1;1036:22;:101;;;;1079:10;:17;1100:2;1079:23;:57;;;;;1117:10;1106:30;;;;;;;;;;;;:::i;:::-;1015:144;;;1152:7;;;;;;1015:144;1274:48;;-1:-1:-1;;;;;1861:32:388;;;1274:48:288;;;1843:51:388;1319:1:288;1910:18:388;;;1903:34;1243:23:288;;;;;1267:5;;1816:18:388;;1274:48:288;;;-1:-1:-1;;1274:48:288;;;;;;;;;;;;;;-1:-1:-1;;;;;1274:48:288;-1:-1:-1;;;1274:48:288;;;1243:80;-1:-1:-1;;;;;;1274:48:288;1243:80;;;;;;;;;1274:48;1243:80;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1243:80:288;;;;;;;;;;;;:::i;:::-;-1:-1:-1;1347:43:288;;-1:-1:-1;;;1347:43:288;;-1:-1:-1;;;;;1347:23:288;;;;;:43;;1371:5;;1378:11;;1347:43;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1347:43:288;;;;;;;;;;;;:::i;:::-;1334:56;;1466:10;:17;1487:1;1466:22;:85;;;;1493:10;:17;1514:2;1493:23;:57;;;;;1531:10;1520:30;;;;;;;;;;;;:::i;:::-;1445:157;;;;-1:-1:-1;;;1445:157:288;;5037:2:388;1445:157:288;;;5019:21:388;5076:2;5056:18;;;5049:30;5115:27;5095:18;;;5088:55;5160:18;;1445:157:288;4835:349:388;1445:157:288;450:1159;;;;361:1248;;;;;:::o;14:180:388:-;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:388;;14:180;-1:-1:-1;14:180:388:o;589:289::-;631:3;669:5;663:12;696:6;691:3;684:19;752:6;745:4;738:5;734:16;727:4;722:3;718:14;712:47;804:1;797:4;788:6;783:3;779:16;775:27;768:38;867:4;860:2;856:7;851:2;843:6;839:15;835:29;830:3;826:39;822:50;815:57;;;589:289;;;;:::o;883:220::-;1032:2;1021:9;1014:21;995:4;1052:45;1093:2;1082:9;1078:18;1070:6;1052:45;:::i;:::-;1044:53;883:220;-1:-1:-1;;;883:220:388:o;1387:277::-;1454:6;1507:2;1495:9;1486:7;1482:23;1478:32;1475:52;;;1523:1;1520;1513:12;1475:52;1555:9;1549:16;1608:5;1601:13;1594:21;1587:5;1584:32;1574:60;;1630:1;1627;1620:12;2227:315;-1:-1:-1;;;;;2402:32:388;;2384:51;;2471:2;2466;2451:18;;2444:30;;;-1:-1:-1;;2491:45:388;;2517:18;;2509:6;2491:45;:::i;:::-;2483:53;2227:315;-1:-1:-1;;;;2227:315:388:o;2547:127::-;2608:10;2603:3;2599:20;2596:1;2589:31;2639:4;2636:1;2629:15;2663:4;2660:1;2653:15;2679:934;2758:6;2811:2;2799:9;2790:7;2786:23;2782:32;2779:52;;;2827:1;2824;2817:12;2779:52;2860:9;2854:16;2893:18;2885:6;2882:30;2879:50;;;2925:1;2922;2915:12;2879:50;2948:22;;3001:4;2993:13;;2989:27;-1:-1:-1;2979:55:388;;3030:1;3027;3020:12;2979:55;3063:2;3057:9;3089:18;3081:6;3078:30;3075:56;;;3111:18;;:::i;:::-;3160:2;3154:9;3252:2;3214:17;;-1:-1:-1;;3210:31:388;;;3243:2;3206:40;3202:54;3190:67;;3287:18;3272:34;;3308:22;;;3269:62;3266:88;;;3334:18;;:::i;:::-;3370:2;3363:22;3394;;;3435:15;;;3452:2;3431:24;3428:37;-1:-1:-1;3425:57:388;;;3478:1;3475;3468:12;3425:57;3527:6;3522:2;3518;3514:11;3509:2;3501:6;3497:15;3491:43;3580:1;3554:19;;;3575:2;3550:28;3543:39;;;;3558:6;2679:934;-1:-1:-1;;;;2679:934:388:o;4053:184::-;4123:6;4176:2;4164:9;4155:7;4151:23;4147:32;4144:52;;;4192:1;4189;4182:12;4144:52;-1:-1:-1;4215:16:388;;4053:184;-1:-1:-1;4053:184:388:o;4242:301::-;4371:3;4409:6;4403:13;4455:6;4448:4;4440:6;4436:17;4431:3;4425:37;4517:1;4481:16;;4506:13;;;-1:-1:-1;4481:16:388;4242:301;-1:-1:-1;4242:301:388:o",
    "linkReferences": {},
    "immutableReferences": {
      "86175": [
        {
          "start": 443,
          "length": 32
        },
        {
          "start": 1649,
          "length": 32
        },
        {
          "start": 1929,
          "length": 32
        }
      ],
      "86179": [
        {
          "start": 365,
          "length": 32
        },
        {
          "start": 902,
          "length": 32
        },
        {
          "start": 1035,
          "length": 32
        },
        {
          "start": 1182,
          "length": 32
        },
        {
          "start": 1683,
          "length": 32
        },
        {
          "start": 1816,
          "length": 32
        },
        {
          "start": 1963,
          "length": 32
        }
      ],
      "86183": [
        {
          "start": 185,
          "length": 32
        },
        {
          "start": 868,
          "length": 32
        },
        {
          "start": 1148,
          "length": 32
        }
      ]
    }
  },
  "methodIdentifiers": {
    "ALLOCATOR_ROLE()": "c81cbaa1",
    "DEFAULT_ADMIN_ROLE()": "a217fddf",
    "VERSION()": "ffa1ad74",
    "dai()": "f4b9fa75",
    "daiToUSDSSwapRateLimitKey()": "91a0cf77",
    "daiUSDS()": "c5237ab0",
    "swapDAIToUSDS(uint256)": "7b65461c",
    "swapUSDSToDAI(uint256)": "0d015236",
    "usds()": "4cf282fb",
    "usdsToDAISwapRateLimitKey()": "81a84a37"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.34+commit.80d5c536\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"dai_\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"daiUSDS_\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"usds_\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"AccessControlUnauthorizedAccount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidInitialization\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotInitializing\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"daiAmount\",\"type\":\"uint256\"}],\"name\":\"DAIUSDSSwapDAIToUSDS\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"usdsAmount\",\"type\":\"uint256\"}],\"name\":\"DAIUSDSSwapUSDSToDAI\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"version\",\"type\":\"uint64\"}],\"name\":\"Initialized\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"ALLOCATOR_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"DEFAULT_ADMIN_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"VERSION\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"dai\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"daiToUSDSSwapRateLimitKey\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"daiUSDS\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"daiAmount\",\"type\":\"uint256\"}],\"name\":\"swapDAIToUSDS\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"usdsAmount\",\"type\":\"uint256\"}],\"name\":\"swapUSDSToDAI\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"usds\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"usdsToDAISwapRateLimitKey\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"InvalidInitialization()\":[{\"details\":\"The contract is already initialized.\"}],\"NotInitializing()\":[{\"details\":\"The contract is not initializing.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"events\":{\"DAIUSDSSwapDAIToUSDS(uint256)\":{\"params\":{\"daiAmount\":\"Amount of DAI swapped (18-decimal precision).\"}},\"DAIUSDSSwapUSDSToDAI(uint256)\":{\"params\":{\"usdsAmount\":\"Amount of USDS swapped (18-decimal precision).\"}},\"Initialized(uint64)\":{\"details\":\"Triggered when the contract has been initialized or reinitialized.\"}},\"kind\":\"dev\",\"methods\":{\"swapDAIToUSDS(uint256)\":{\"params\":{\"daiAmount\":\"Amount of DAI to swap (18-decimal precision).\"}},\"swapUSDSToDAI(uint256)\":{\"params\":{\"usdsAmount\":\"Amount of USDS to swap (18-decimal precision).\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"AccessControlUnauthorizedAccount(address,bytes32)\":[{\"notice\":\"Thrown when a caller lacks the required access control role.\"}]},\"events\":{\"DAIUSDSSwapDAIToUSDS(uint256)\":{\"notice\":\"Emitted when DAI is converted to USDS.\"},\"DAIUSDSSwapUSDSToDAI(uint256)\":{\"notice\":\"Emitted when USDS is converted to DAI.\"}},\"kind\":\"user\",\"methods\":{\"ALLOCATOR_ROLE()\":{\"notice\":\"Role identifier for allocator accounts authorized to execute facet operations.\"},\"DEFAULT_ADMIN_ROLE()\":{\"notice\":\"Role identifier for the default admin (bytes32(0)).\"},\"VERSION()\":{\"notice\":\"Semantic version string of the facet.\"},\"dai()\":{\"notice\":\"Address of the DAI token contract (immutable).\"},\"daiToUSDSSwapRateLimitKey()\":{\"notice\":\"The derived rate limit key for DAI-to-USDS swap operations.\"},\"daiUSDS()\":{\"notice\":\"Address of the DAI-USDS migrator contract (immutable).\"},\"swapDAIToUSDS(uint256)\":{\"notice\":\"Converts DAI to USDS 1:1 via the DAI-USDS migrator.\"},\"swapUSDSToDAI(uint256)\":{\"notice\":\"Converts USDS to DAI 1:1 via the DAI-USDS migrator.\"},\"usds()\":{\"notice\":\"Address of the USDS token contract (immutable).\"},\"usdsToDAISwapRateLimitKey()\":{\"notice\":\"The derived rate limit key for USDS-to-DAI swap operations.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/facets/dai-usds/DAIUSDSFacet.sol\":\"DAIUSDSFacet\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@ensdomains/=lib/uniswap-v4-periphery/lib/v4-core/node_modules/@ensdomains/\",\":@layerzerolabs/lz-evm-messagelib-v2/=lib/layerzero-v2/packages/layerzero-v2/evm/messagelib/\",\":@layerzerolabs/lz-evm-protocol-v2/=lib/layerzero-v2/packages/layerzero-v2/evm/protocol/\",\":@layerzerolabs/oft-evm/=lib/grove-xchain-helpers/lib/devtools/packages/oft-evm/\",\":@openzeppelin/contracts-upgradeable/=lib/oz-upgradeable/contracts/\",\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":@uniswap/v4-core/=lib/uniswap-v4-periphery/lib/v4-core/\",\":LayerZero-v2/=lib/grove-xchain-helpers/lib/\",\":aave-v3-core/=lib/aave-v3-origin/src/core/\",\":aave-v3-origin/=lib/aave-v3-origin/\",\":aave-v3-periphery/=lib/aave-v3-origin/src/periphery/\",\":devtools/=lib/grove-xchain-helpers/lib/devtools/packages/toolbox-foundry/src/\",\":ds-test/=lib/grove-address-registry/lib/forge-std/lib/ds-test/src/\",\":dss-allocator/=lib/dss-allocator/\",\":dss-interfaces/=lib/dss-test/lib/dss-interfaces/src/\",\":dss-test/=lib/dss-test/src/\",\":erc20-helpers/=lib/grove-basin/lib/erc20-helpers/src/\",\":erc4626-tests/=lib/metamorpho/lib/erc4626-tests/\",\":forge-gas-snapshot/=lib/uniswap-v4-periphery/lib/permit2/lib/forge-gas-snapshot/src/\",\":forge-std/=lib/forge-std/src/\",\":grove-address-registry/=lib/grove-address-registry/src/\",\":grove-basin/=lib/grove-basin/\",\":grove-xchain-helpers/=lib/grove-xchain-helpers/src/\",\":halmos-cheatcodes/=lib/grove-basin/lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/\",\":hardhat/=lib/uniswap-v4-periphery/lib/v4-core/node_modules/hardhat/\",\":layerzero-v2/=lib/layerzero-v2/\",\":layerzerolabs/oapp-evm/=lib/grove-xchain-helpers/lib/devtools/packages/oapp-evm/\",\":metamorpho/=lib/metamorpho/src/\",\":morpho-blue/=lib/metamorpho/lib/morpho-blue/\",\":murky/=lib/metamorpho/lib/universal-rewards-distributor/lib/murky/src/\",\":openzeppelin-contracts-upgradeable/=lib/spark-vaults-v2/lib/openzeppelin-contracts-upgradeable/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/metamorpho/lib/universal-rewards-distributor/lib/openzeppelin-contracts/contracts/\",\":oz-upgradeable/=lib/oz-upgradeable/\",\":permit2/=lib/uniswap-v4-periphery/lib/permit2/\",\":solidity-bytes-utils/=lib/solidity-bytes-utils/\",\":solidity-utils/=lib/aave-v3-origin/lib/solidity-utils/\",\":solmate/=lib/uniswap-v4-periphery/lib/v4-core/lib/solmate/\",\":spark-address-registry/=lib/spark-address-registry/src/\",\":spark-psm/=lib/spark-psm/\",\":spark-vaults-v2/=lib/spark-vaults-v2/\",\":sparklend-address-registry/=lib/grove-basin/lib/xchain-ssr-oracle/lib/sparklend-address-registry/\",\":token-tests/=lib/spark-vaults-v2/lib/token-tests/src/\",\":uniswap-v4-periphery/=lib/uniswap-v4-periphery/\",\":universal-rewards-distributor/=lib/metamorpho/lib/universal-rewards-distributor/src/\",\":v4-core/=lib/uniswap-v4-periphery/lib/v4-core/src/\",\":xchain-helpers/=lib/xchain-helpers/src/\",\":xchain-ssr-oracle/=lib/grove-basin/lib/xchain-ssr-oracle/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/access/IAccessControl.sol\":{\"keccak256\":\"0xb6b36edd6a2999fd243ff226d6cbf84bd71af2432bbd0dfe19392996a1d9cb41\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1fd2f35495652e57e3f99bc6c510bc5f7dd398a176ea2e72d8ed730aebc6ca26\",\"dweb:/ipfs/QmTQV6X4gkikTib49cho5iDX3JvSQbdsoEChoDwrk3CbbH\"]},\"lib/openzeppelin-contracts/contracts/access/extensions/IAccessControlEnumerable.sol\":{\"keccak256\":\"0xc1435f102633849858e75d7bed14c636f25448ceb3406d82992b0f2df52f4306\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ce1815e3a1da24f91b8e2ec24cf09d0d46e0fbeddcbe2cb0d8b2e05b91ceb7b3\",\"dweb:/ipfs/QmYTy1AQB5EV5jwuGsB49yykng2oG3x5ss4bDjFNxk3He4\"]},\"lib/oz-upgradeable/contracts/proxy/utils/Initializable.sol\":{\"keccak256\":\"0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609\",\"dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM\"]},\"lib/oz-upgradeable/contracts/utils/ReentrancyGuardUpgradeable.sol\":{\"keccak256\":\"0xb44e086e941292cdc7f440de51478493894ef0b1aeccb0c4047445919f667f74\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://942dad22fbdc1669f025540ba63aa3ccfad5f8458fc5d4525b31ebf272e7af45\",\"dweb:/ipfs/Qmdo4X2M82aM3AMoW2kf2jhYkSCyC4T1pHNd6obdsDFnAB\"]},\"src/ControllerSharedStorage.sol\":{\"keccak256\":\"0x08b85a82fbcfb5d837ac222fe71c7a458bab9edd8cfe0df02b3c38d6780b4400\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://577a9d2fc6796614c022fe701c981faa4df931dd5346e21167fbc46f3e199985\",\"dweb:/ipfs/QmYRyEbGum5TJF4yYNksK2H2CbmqYdcqiri5ZtFKrc36k7\"]},\"src/facets/Facet.sol\":{\"keccak256\":\"0xe86c5d5b73af2713e4e6754267af20325421b72c88a1dbf6dfbe9978b259edc2\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://28c6bcfbb07742b4be8f7188a3a9af301a6570616cf97564eb80091c09001ca9\",\"dweb:/ipfs/QmchiTioPPk7YbTtVpLN33hRNu1CKJoTH69He4BtUyXimA\"]},\"src/facets/IFacet.sol\":{\"keccak256\":\"0x0f0acb5faa3c227edc594e69507f89f0f063712847f361fbc51dbc2e9dd51d0a\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://ded1143f96b28d02e5eae73cf84af8e72ac15b31e2737ae29dc962c2975eb34c\",\"dweb:/ipfs/QmNrdGdJkHC2YWBMx4dQmihdwuSs7XDNgf8NYzQUsZifT2\"]},\"src/facets/dai-usds/DAIUSDSFacet.sol\":{\"keccak256\":\"0x250634d4847069522e8e6f63079e8b7fa2f1c19ef28ba58072c73f859bee7264\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://66f3c63a24ad354a0fc4e22934a784518d527ac62b8dbd5e9fc2baa50d6fa134\",\"dweb:/ipfs/QmTVLFCZnBdVXtKNv1Ss8o7Sf7vVgGRHE2BgzFpEL5apWK\"]},\"src/facets/dai-usds/IDAIUSDSFacet.sol\":{\"keccak256\":\"0x08ce95e2da3e0b31f5b8997d794a80d305c728cc53fd9cae8a10f5eced23b277\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://135b9a9c79586f94e4033696181795f46c2edf5a4289501bc77664238a7fe7ca\",\"dweb:/ipfs/QmegqZEo91NGo5uKDTVGhyxMyyfmf2ingMWP4pGyjiPawT\"]},\"src/interfaces/IALMProxy.sol\":{\"keccak256\":\"0xa965efa753f8b48b5b08f4b98699a95ab4671c2e6b8c53c514dae9bda250f80e\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://1188a471d62be8e9439a9ac311f4e872288a414348341d7d0095928b846c6d19\",\"dweb:/ipfs/QmcUkHyM2YuZM4UicTBg47oTCYHxmzMf6Hd16hWyfsCJEd\"]},\"src/interfaces/IAccessControls.sol\":{\"keccak256\":\"0x774a4156bb41a733bd219dd14cf7ea7b10007662ab1ea2bdc83ffc197ed09637\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://9e923dced22563718b532893e9a70b2656ed6fbc556539ef5e2fe47fc4cd1c6d\",\"dweb:/ipfs/QmSh9RSdnatrSnMCxhnmyT8m6NFkFzCDDLPnzDVpfKDxYJ\"]},\"src/interfaces/IRateLimits.sol\":{\"keccak256\":\"0x20ea43787a1ad8c78805bdc194e57c5838176c258985342242b7211bfe7e6a4a\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://76555b4d5238e3faa3ebfe6b8eea949623cc5882d3c77835324459b3c664c0d6\",\"dweb:/ipfs/QmcfhxoLBDZrdBweL6PAV74NFHnVCeSDS7geQhYHt4LfhF\"]},\"src/libraries/ApproveLib.sol\":{\"keccak256\":\"0xd583574bdc0710bffc6431c803ec0cd8351aa9a6c1e4e551bf33c0cc4c65d5ea\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://02c32c18429a0133a9dfe53b5e756a28961eee83b83aae5eea13b30bda8ae64d\",\"dweb:/ipfs/QmXauAb7KoKtzochg91Pqdtp1DdbZaF21Fwjp4C2WAasSH\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.34+commit.80d5c536"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "dai_",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "daiUSDS_",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "usds_",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "caller",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            }
          ],
          "type": "error",
          "name": "AccessControlUnauthorizedAccount"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidInitialization"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NotInitializing"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ReentrancyGuardReentrantCall"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "daiAmount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "DAIUSDSSwapDAIToUSDS",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "usdsAmount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "DAIUSDSSwapUSDSToDAI",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint64",
              "name": "version",
              "type": "uint64",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Initialized",
          "anonymous": false
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "ALLOCATOR_ROLE",
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
          "stateMutability": "view",
          "type": "function",
          "name": "DEFAULT_ADMIN_ROLE",
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
          "stateMutability": "view",
          "type": "function",
          "name": "VERSION",
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
          "name": "dai",
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
          "stateMutability": "pure",
          "type": "function",
          "name": "daiToUSDSSwapRateLimitKey",
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
          "stateMutability": "view",
          "type": "function",
          "name": "daiUSDS",
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
              "name": "daiAmount",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "swapDAIToUSDS"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "usdsAmount",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "swapUSDSToDAI"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "usds",
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
          "stateMutability": "pure",
          "type": "function",
          "name": "usdsToDAISwapRateLimitKey",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "swapDAIToUSDS(uint256)": {
            "params": {
              "daiAmount": "Amount of DAI to swap (18-decimal precision)."
            }
          },
          "swapUSDSToDAI(uint256)": {
            "params": {
              "usdsAmount": "Amount of USDS to swap (18-decimal precision)."
            }
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "ALLOCATOR_ROLE()": {
            "notice": "Role identifier for allocator accounts authorized to execute facet operations."
          },
          "DEFAULT_ADMIN_ROLE()": {
            "notice": "Role identifier for the default admin (bytes32(0))."
          },
          "VERSION()": {
            "notice": "Semantic version string of the facet."
          },
          "dai()": {
            "notice": "Address of the DAI token contract (immutable)."
          },
          "daiToUSDSSwapRateLimitKey()": {
            "notice": "The derived rate limit key for DAI-to-USDS swap operations."
          },
          "daiUSDS()": {
            "notice": "Address of the DAI-USDS migrator contract (immutable)."
          },
          "swapDAIToUSDS(uint256)": {
            "notice": "Converts DAI to USDS 1:1 via the DAI-USDS migrator."
          },
          "swapUSDSToDAI(uint256)": {
            "notice": "Converts USDS to DAI 1:1 via the DAI-USDS migrator."
          },
          "usds()": {
            "notice": "Address of the USDS token contract (immutable)."
          },
          "usdsToDAISwapRateLimitKey()": {
            "notice": "The derived rate limit key for USDS-to-DAI swap operations."
          }
        },
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "@ensdomains/=lib/uniswap-v4-periphery/lib/v4-core/node_modules/@ensdomains/",
        "@layerzerolabs/lz-evm-messagelib-v2/=lib/layerzero-v2/packages/layerzero-v2/evm/messagelib/",
        "@layerzerolabs/lz-evm-protocol-v2/=lib/layerzero-v2/packages/layerzero-v2/evm/protocol/",
        "@layerzerolabs/oft-evm/=lib/grove-xchain-helpers/lib/devtools/packages/oft-evm/",
        "@openzeppelin/contracts-upgradeable/=lib/oz-upgradeable/contracts/",
        "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
        "@uniswap/v4-core/=lib/uniswap-v4-periphery/lib/v4-core/",
        "LayerZero-v2/=lib/grove-xchain-helpers/lib/",
        "aave-v3-core/=lib/aave-v3-origin/src/core/",
        "aave-v3-origin/=lib/aave-v3-origin/",
        "aave-v3-periphery/=lib/aave-v3-origin/src/periphery/",
        "devtools/=lib/grove-xchain-helpers/lib/devtools/packages/toolbox-foundry/src/",
        "ds-test/=lib/grove-address-registry/lib/forge-std/lib/ds-test/src/",
        "dss-allocator/=lib/dss-allocator/",
        "dss-interfaces/=lib/dss-test/lib/dss-interfaces/src/",
        "dss-test/=lib/dss-test/src/",
        "erc20-helpers/=lib/grove-basin/lib/erc20-helpers/src/",
        "erc4626-tests/=lib/metamorpho/lib/erc4626-tests/",
        "forge-gas-snapshot/=lib/uniswap-v4-periphery/lib/permit2/lib/forge-gas-snapshot/src/",
        "forge-std/=lib/forge-std/src/",
        "grove-address-registry/=lib/grove-address-registry/src/",
        "grove-basin/=lib/grove-basin/",
        "grove-xchain-helpers/=lib/grove-xchain-helpers/src/",
        "halmos-cheatcodes/=lib/grove-basin/lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/",
        "hardhat/=lib/uniswap-v4-periphery/lib/v4-core/node_modules/hardhat/",
        "layerzero-v2/=lib/layerzero-v2/",
        "layerzerolabs/oapp-evm/=lib/grove-xchain-helpers/lib/devtools/packages/oapp-evm/",
        "metamorpho/=lib/metamorpho/src/",
        "morpho-blue/=lib/metamorpho/lib/morpho-blue/",
        "murky/=lib/metamorpho/lib/universal-rewards-distributor/lib/murky/src/",
        "openzeppelin-contracts-upgradeable/=lib/spark-vaults-v2/lib/openzeppelin-contracts-upgradeable/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/",
        "openzeppelin/=lib/metamorpho/lib/universal-rewards-distributor/lib/openzeppelin-contracts/contracts/",
        "oz-upgradeable/=lib/oz-upgradeable/",
        "permit2/=lib/uniswap-v4-periphery/lib/permit2/",
        "solidity-bytes-utils/=lib/solidity-bytes-utils/",
        "solidity-utils/=lib/aave-v3-origin/lib/solidity-utils/",
        "solmate/=lib/uniswap-v4-periphery/lib/v4-core/lib/solmate/",
        "spark-address-registry/=lib/spark-address-registry/src/",
        "spark-psm/=lib/spark-psm/",
        "spark-vaults-v2/=lib/spark-vaults-v2/",
        "sparklend-address-registry/=lib/grove-basin/lib/xchain-ssr-oracle/lib/sparklend-address-registry/",
        "token-tests/=lib/spark-vaults-v2/lib/token-tests/src/",
        "uniswap-v4-periphery/=lib/uniswap-v4-periphery/",
        "universal-rewards-distributor/=lib/metamorpho/lib/universal-rewards-distributor/src/",
        "v4-core/=lib/uniswap-v4-periphery/lib/v4-core/src/",
        "xchain-helpers/=lib/xchain-helpers/src/",
        "xchain-ssr-oracle/=lib/grove-basin/lib/xchain-ssr-oracle/"
      ],
      "optimizer": {
        "enabled": true,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "src/facets/dai-usds/DAIUSDSFacet.sol": "DAIUSDSFacet"
      },
      "evmVersion": "cancun",
      "libraries": {}
    },
    "sources": {
      "lib/openzeppelin-contracts/contracts/access/IAccessControl.sol": {
        "keccak256": "0xb6b36edd6a2999fd243ff226d6cbf84bd71af2432bbd0dfe19392996a1d9cb41",
        "urls": [
          "bzz-raw://1fd2f35495652e57e3f99bc6c510bc5f7dd398a176ea2e72d8ed730aebc6ca26",
          "dweb:/ipfs/QmTQV6X4gkikTib49cho5iDX3JvSQbdsoEChoDwrk3CbbH"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/access/extensions/IAccessControlEnumerable.sol": {
        "keccak256": "0xc1435f102633849858e75d7bed14c636f25448ceb3406d82992b0f2df52f4306",
        "urls": [
          "bzz-raw://ce1815e3a1da24f91b8e2ec24cf09d0d46e0fbeddcbe2cb0d8b2e05b91ceb7b3",
          "dweb:/ipfs/QmYTy1AQB5EV5jwuGsB49yykng2oG3x5ss4bDjFNxk3He4"
        ],
        "license": "MIT"
      },
      "lib/oz-upgradeable/contracts/proxy/utils/Initializable.sol": {
        "keccak256": "0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b",
        "urls": [
          "bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609",
          "dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM"
        ],
        "license": "MIT"
      },
      "lib/oz-upgradeable/contracts/utils/ReentrancyGuardUpgradeable.sol": {
        "keccak256": "0xb44e086e941292cdc7f440de51478493894ef0b1aeccb0c4047445919f667f74",
        "urls": [
          "bzz-raw://942dad22fbdc1669f025540ba63aa3ccfad5f8458fc5d4525b31ebf272e7af45",
          "dweb:/ipfs/Qmdo4X2M82aM3AMoW2kf2jhYkSCyC4T1pHNd6obdsDFnAB"
        ],
        "license": "MIT"
      },
      "src/ControllerSharedStorage.sol": {
        "keccak256": "0x08b85a82fbcfb5d837ac222fe71c7a458bab9edd8cfe0df02b3c38d6780b4400",
        "urls": [
          "bzz-raw://577a9d2fc6796614c022fe701c981faa4df931dd5346e21167fbc46f3e199985",
          "dweb:/ipfs/QmYRyEbGum5TJF4yYNksK2H2CbmqYdcqiri5ZtFKrc36k7"
        ],
        "license": "AGPL-3.0-or-later"
      },
      "src/facets/Facet.sol": {
        "keccak256": "0xe86c5d5b73af2713e4e6754267af20325421b72c88a1dbf6dfbe9978b259edc2",
        "urls": [
          "bzz-raw://28c6bcfbb07742b4be8f7188a3a9af301a6570616cf97564eb80091c09001ca9",
          "dweb:/ipfs/QmchiTioPPk7YbTtVpLN33hRNu1CKJoTH69He4BtUyXimA"
        ],
        "license": "AGPL-3.0-or-later"
      },
      "src/facets/IFacet.sol": {
        "keccak256": "0x0f0acb5faa3c227edc594e69507f89f0f063712847f361fbc51dbc2e9dd51d0a",
        "urls": [
          "bzz-raw://ded1143f96b28d02e5eae73cf84af8e72ac15b31e2737ae29dc962c2975eb34c",
          "dweb:/ipfs/QmNrdGdJkHC2YWBMx4dQmihdwuSs7XDNgf8NYzQUsZifT2"
        ],
        "license": "AGPL-3.0-or-later"
      },
      "src/facets/dai-usds/DAIUSDSFacet.sol": {
        "keccak256": "0x250634d4847069522e8e6f63079e8b7fa2f1c19ef28ba58072c73f859bee7264",
        "urls": [
          "bzz-raw://66f3c63a24ad354a0fc4e22934a784518d527ac62b8dbd5e9fc2baa50d6fa134",
          "dweb:/ipfs/QmTVLFCZnBdVXtKNv1Ss8o7Sf7vVgGRHE2BgzFpEL5apWK"
        ],
        "license": "AGPL-3.0-or-later"
      },
      "src/facets/dai-usds/IDAIUSDSFacet.sol": {
        "keccak256": "0x08ce95e2da3e0b31f5b8997d794a80d305c728cc53fd9cae8a10f5eced23b277",
        "urls": [
          "bzz-raw://135b9a9c79586f94e4033696181795f46c2edf5a4289501bc77664238a7fe7ca",
          "dweb:/ipfs/QmegqZEo91NGo5uKDTVGhyxMyyfmf2ingMWP4pGyjiPawT"
        ],
        "license": "AGPL-3.0-or-later"
      },
      "src/interfaces/IALMProxy.sol": {
        "keccak256": "0xa965efa753f8b48b5b08f4b98699a95ab4671c2e6b8c53c514dae9bda250f80e",
        "urls": [
          "bzz-raw://1188a471d62be8e9439a9ac311f4e872288a414348341d7d0095928b846c6d19",
          "dweb:/ipfs/QmcUkHyM2YuZM4UicTBg47oTCYHxmzMf6Hd16hWyfsCJEd"
        ],
        "license": "AGPL-3.0-or-later"
      },
      "src/interfaces/IAccessControls.sol": {
        "keccak256": "0x774a4156bb41a733bd219dd14cf7ea7b10007662ab1ea2bdc83ffc197ed09637",
        "urls": [
          "bzz-raw://9e923dced22563718b532893e9a70b2656ed6fbc556539ef5e2fe47fc4cd1c6d",
          "dweb:/ipfs/QmSh9RSdnatrSnMCxhnmyT8m6NFkFzCDDLPnzDVpfKDxYJ"
        ],
        "license": "AGPL-3.0-or-later"
      },
      "src/interfaces/IRateLimits.sol": {
        "keccak256": "0x20ea43787a1ad8c78805bdc194e57c5838176c258985342242b7211bfe7e6a4a",
        "urls": [
          "bzz-raw://76555b4d5238e3faa3ebfe6b8eea949623cc5882d3c77835324459b3c664c0d6",
          "dweb:/ipfs/QmcfhxoLBDZrdBweL6PAV74NFHnVCeSDS7geQhYHt4LfhF"
        ],
        "license": "AGPL-3.0-or-later"
      },
      "src/libraries/ApproveLib.sol": {
        "keccak256": "0xd583574bdc0710bffc6431c803ec0cd8351aa9a6c1e4e551bf33c0cc4c65d5ea",
        "urls": [
          "bzz-raw://02c32c18429a0133a9dfe53b5e756a28961eee83b83aae5eea13b30bda8ae64d",
          "dweb:/ipfs/QmXauAb7KoKtzochg91Pqdtp1DdbZaF21Fwjp4C2WAasSH"
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
    "absolutePath": "src/facets/dai-usds/DAIUSDSFacet.sol",
    "id": 86381,
    "exportedSymbols": {
      "ApproveLib": [
        100694
      ],
      "DAIUSDSFacet": [
        86380
      ],
      "Facet": [
        82138
      ],
      "IALMProxy": [
        100081
      ],
      "IDAIUSDSFacet": [
        86440
      ],
      "IDAIUSDSLike": [
        86152
      ],
      "IFacet": [
        82167
      ]
    },
    "nodeType": "SourceUnit",
    "src": "46:4466:230",
    "nodes": [
      {
        "id": 86127,
        "nodeType": "PragmaDirective",
        "src": "46:24:230",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".34"
        ]
      },
      {
        "id": 86129,
        "nodeType": "ImportDirective",
        "src": "72:60:230",
        "nodes": [],
        "absolutePath": "src/libraries/ApproveLib.sol",
        "file": "../../libraries/ApproveLib.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 86381,
        "sourceUnit": 100695,
        "symbolAliases": [
          {
            "foreign": {
              "id": 86128,
              "name": "ApproveLib",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 100694,
              "src": "81:10:230",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 86131,
        "nodeType": "ImportDirective",
        "src": "134:59:230",
        "nodes": [],
        "absolutePath": "src/interfaces/IALMProxy.sol",
        "file": "../../interfaces/IALMProxy.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 86381,
        "sourceUnit": 100082,
        "symbolAliases": [
          {
            "foreign": {
              "id": 86130,
              "name": "IALMProxy",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 100081,
              "src": "143:9:230",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 86133,
        "nodeType": "ImportDirective",
        "src": "195:39:230",
        "nodes": [],
        "absolutePath": "src/facets/IFacet.sol",
        "file": "../IFacet.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 86381,
        "sourceUnit": 82168,
        "symbolAliases": [
          {
            "foreign": {
              "id": 86132,
              "name": "IFacet",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 82167,
              "src": "204:6:230",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 86135,
        "nodeType": "ImportDirective",
        "src": "236:37:230",
        "nodes": [],
        "absolutePath": "src/facets/Facet.sol",
        "file": "../Facet.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 86381,
        "sourceUnit": 82139,
        "symbolAliases": [
          {
            "foreign": {
              "id": 86134,
              "name": "Facet",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 82138,
              "src": "245:5:230",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 86137,
        "nodeType": "ImportDirective",
        "src": "275:52:230",
        "nodes": [],
        "absolutePath": "src/facets/dai-usds/IDAIUSDSFacet.sol",
        "file": "./IDAIUSDSFacet.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 86381,
        "sourceUnit": 86441,
        "symbolAliases": [
          {
            "foreign": {
              "id": 86136,
              "name": "IDAIUSDSFacet",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 86440,
              "src": "284:13:230",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 86152,
        "nodeType": "ContractDefinition",
        "src": "329:147:230",
        "nodes": [
          {
            "id": 86144,
            "nodeType": "FunctionDefinition",
            "src": "359:54:230",
            "nodes": [],
            "functionSelector": "f2c07aae",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "daiToUsds",
            "nameLocation": "368:9:230",
            "parameters": {
              "id": 86142,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 86139,
                  "mutability": "mutable",
                  "name": "usr",
                  "nameLocation": "386:3:230",
                  "nodeType": "VariableDeclaration",
                  "scope": 86144,
                  "src": "378:11:230",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 86138,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "378:7:230",
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
                  "id": 86141,
                  "mutability": "mutable",
                  "name": "wad",
                  "nameLocation": "399:3:230",
                  "nodeType": "VariableDeclaration",
                  "scope": 86144,
                  "src": "391:11:230",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 86140,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "391:7:230",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "377:26:230"
            },
            "returnParameters": {
              "id": 86143,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "412:0:230"
            },
            "scope": 86152,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 86151,
            "nodeType": "FunctionDefinition",
            "src": "419:54:230",
            "nodes": [],
            "functionSelector": "68f30150",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "usdsToDai",
            "nameLocation": "428:9:230",
            "parameters": {
              "id": 86149,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 86146,
                  "mutability": "mutable",
                  "name": "usr",
                  "nameLocation": "446:3:230",
                  "nodeType": "VariableDeclaration",
                  "scope": 86151,
                  "src": "438:11:230",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 86145,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "438:7:230",
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
                  "id": 86148,
                  "mutability": "mutable",
                  "name": "wad",
                  "nameLocation": "459:3:230",
                  "nodeType": "VariableDeclaration",
                  "scope": 86151,
                  "src": "451:11:230",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 86147,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "451:7:230",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "437:26:230"
            },
            "returnParameters": {
              "id": 86150,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "472:0:230"
            },
            "scope": 86152,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IDAIUSDSLike",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          86152
        ],
        "name": "IDAIUSDSLike",
        "nameLocation": "339:12:230",
        "scope": 86381,
        "usedErrors": [],
        "usedEvents": []
      },
      {
        "id": 86380,
        "nodeType": "ContractDefinition",
        "src": "478:4033:230",
        "nodes": [
          {
            "id": 86161,
            "nodeType": "VariableDeclaration",
            "src": "835:90:230",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_LIMIT_USDS_TO_DAI",
            "nameLocation": "861:18:230",
            "scope": 86380,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 86157,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "835:7:230",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "arguments": [
                {
                  "hexValue": "4c494d49545f444149555344535f535741505f555344535f544f5f444149",
                  "id": 86159,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "892:32:230",
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_b65200a5af970cf1b215a3e708a047714ded77838ecf2fe3c8744af3c938ef76",
                    "typeString": "literal_string \"LIMIT_DAIUSDS_SWAP_USDS_TO_DAI\""
                  },
                  "value": "LIMIT_DAIUSDS_SWAP_USDS_TO_DAI"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_b65200a5af970cf1b215a3e708a047714ded77838ecf2fe3c8744af3c938ef76",
                    "typeString": "literal_string \"LIMIT_DAIUSDS_SWAP_USDS_TO_DAI\""
                  }
                ],
                "id": 86158,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": -8,
                "src": "882:9:230",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                  "typeString": "function (bytes memory) pure returns (bytes32)"
                }
              },
              "id": 86160,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "882:43:230",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 86166,
            "nodeType": "VariableDeclaration",
            "src": "931:90:230",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_LIMIT_DAI_TO_USDS",
            "nameLocation": "957:18:230",
            "scope": 86380,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 86162,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "931:7:230",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "arguments": [
                {
                  "hexValue": "4c494d49545f444149555344535f535741505f4441495f544f5f55534453",
                  "id": 86164,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "988:32:230",
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_76c9c284c778ccc8c58c6163f3a965b4a004e2eb0a9ee4e7892a5f8cf8a84997",
                    "typeString": "literal_string \"LIMIT_DAIUSDS_SWAP_DAI_TO_USDS\""
                  },
                  "value": "LIMIT_DAIUSDS_SWAP_DAI_TO_USDS"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_76c9c284c778ccc8c58c6163f3a965b4a004e2eb0a9ee4e7892a5f8cf8a84997",
                    "typeString": "literal_string \"LIMIT_DAIUSDS_SWAP_DAI_TO_USDS\""
                  }
                ],
                "id": 86163,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": -8,
                "src": "978:9:230",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                  "typeString": "function (bytes memory) pure returns (bytes32)"
                }
              },
              "id": 86165,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "978:43:230",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 86171,
            "nodeType": "VariableDeclaration",
            "src": "1055:49:230",
            "nodes": [],
            "baseFunctions": [
              82166
            ],
            "constant": true,
            "documentation": {
              "id": 86167,
              "nodeType": "StructuredDocumentation",
              "src": "1028:22:230",
              "text": "@inheritdoc IFacet"
            },
            "functionSelector": "ffa1ad74",
            "mutability": "constant",
            "name": "VERSION",
            "nameLocation": "1087:7:230",
            "overrides": {
              "id": 86169,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1078:8:230"
            },
            "scope": 86380,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 86168,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1055:6:230",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "312e302e30",
              "id": 86170,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1097:7:230",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_06c015bd22b4c69690933c1058878ebdfef31f9aaae40bbe86d8a09fe1b2972c",
                "typeString": "literal_string \"1.0.0\""
              },
              "value": "1.0.0"
            },
            "visibility": "public"
          },
          {
            "id": 86175,
            "nodeType": "VariableDeclaration",
            "src": "1449:37:230",
            "nodes": [],
            "baseFunctions": [
              86415
            ],
            "constant": false,
            "documentation": {
              "id": 86172,
              "nodeType": "StructuredDocumentation",
              "src": "1415:29:230",
              "text": "@inheritdoc IDAIUSDSFacet"
            },
            "functionSelector": "f4b9fa75",
            "mutability": "immutable",
            "name": "dai",
            "nameLocation": "1483:3:230",
            "overrides": {
              "id": 86174,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1474:8:230"
            },
            "scope": 86380,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 86173,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "1449:7:230",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 86179,
            "nodeType": "VariableDeclaration",
            "src": "1527:41:230",
            "nodes": [],
            "baseFunctions": [
              86427
            ],
            "constant": false,
            "documentation": {
              "id": 86176,
              "nodeType": "StructuredDocumentation",
              "src": "1493:29:230",
              "text": "@inheritdoc IDAIUSDSFacet"
            },
            "functionSelector": "c5237ab0",
            "mutability": "immutable",
            "name": "daiUSDS",
            "nameLocation": "1561:7:230",
            "overrides": {
              "id": 86178,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1552:8:230"
            },
            "scope": 86380,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 86177,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "1527:7:230",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 86183,
            "nodeType": "VariableDeclaration",
            "src": "1609:38:230",
            "nodes": [],
            "baseFunctions": [
              86433
            ],
            "constant": false,
            "documentation": {
              "id": 86180,
              "nodeType": "StructuredDocumentation",
              "src": "1575:29:230",
              "text": "@inheritdoc IDAIUSDSFacet"
            },
            "functionSelector": "4cf282fb",
            "mutability": "immutable",
            "name": "usds",
            "nameLocation": "1643:4:230",
            "overrides": {
              "id": 86182,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1634:8:230"
            },
            "scope": 86380,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 86181,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "1609:7:230",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 86235,
            "nodeType": "FunctionDefinition",
            "src": "1958:347:230",
            "nodes": [],
            "body": {
              "id": 86234,
              "nodeType": "Block",
              "src": "2017:288:230",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 86198,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 86193,
                          "name": "dai_",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 86185,
                          "src": "2035:4:230",
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
                              "hexValue": "30",
                              "id": 86196,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2055:1:230",
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
                            "id": 86195,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2047:7:230",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 86194,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2047:7:230",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 86197,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2047:10:230",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2035:22:230",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4441495553445346616365742f7a65726f2d646169",
                        "id": 86199,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2059:23:230",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_d3d99b545d5c1d0a475250d4135921a9be20555734d1f19ab32d474fa6489afe",
                          "typeString": "literal_string \"DAIUSDSFacet/zero-dai\""
                        },
                        "value": "DAIUSDSFacet/zero-dai"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_d3d99b545d5c1d0a475250d4135921a9be20555734d1f19ab32d474fa6489afe",
                          "typeString": "literal_string \"DAIUSDSFacet/zero-dai\""
                        }
                      ],
                      "id": 86192,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2027:7:230",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 86200,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2027:56:230",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 86201,
                  "nodeType": "ExpressionStatement",
                  "src": "2027:56:230"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 86208,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 86203,
                          "name": "daiUSDS_",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 86187,
                          "src": "2101:8:230",
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
                              "hexValue": "30",
                              "id": 86206,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2121:1:230",
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
                            "id": 86205,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2113:7:230",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 86204,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2113:7:230",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 86207,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2113:10:230",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2101:22:230",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4441495553445346616365742f7a65726f2d64616955534453",
                        "id": 86209,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2125:27:230",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_405ca08674b51695ba3a1458b097d70c6aef0ab715dd3c749910cf640fae7e6f",
                          "typeString": "literal_string \"DAIUSDSFacet/zero-daiUSDS\""
                        },
                        "value": "DAIUSDSFacet/zero-daiUSDS"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_405ca08674b51695ba3a1458b097d70c6aef0ab715dd3c749910cf640fae7e6f",
                          "typeString": "literal_string \"DAIUSDSFacet/zero-daiUSDS\""
                        }
                      ],
                      "id": 86202,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2093:7:230",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 86210,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2093:60:230",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 86211,
                  "nodeType": "ExpressionStatement",
                  "src": "2093:60:230"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 86218,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 86213,
                          "name": "usds_",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 86189,
                          "src": "2171:5:230",
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
                              "hexValue": "30",
                              "id": 86216,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2191:1:230",
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
                            "id": 86215,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2183:7:230",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 86214,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2183:7:230",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 86217,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2183:10:230",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2171:22:230",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4441495553445346616365742f7a65726f2d75736473",
                        "id": 86219,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2195:24:230",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_46b63bd61ebb71b97281ff5314f09452d6bad5b5e0b1efacf02b713e91f547d2",
                          "typeString": "literal_string \"DAIUSDSFacet/zero-usds\""
                        },
                        "value": "DAIUSDSFacet/zero-usds"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_46b63bd61ebb71b97281ff5314f09452d6bad5b5e0b1efacf02b713e91f547d2",
                          "typeString": "literal_string \"DAIUSDSFacet/zero-usds\""
                        }
                      ],
                      "id": 86212,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2163:7:230",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 86220,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2163:57:230",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 86221,
                  "nodeType": "ExpressionStatement",
                  "src": "2163:57:230"
                },
                {
                  "expression": {
                    "id": 86224,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 86222,
                      "name": "dai",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 86175,
                      "src": "2231:3:230",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 86223,
                      "name": "dai_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 86185,
                      "src": "2241:4:230",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2231:14:230",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 86225,
                  "nodeType": "ExpressionStatement",
                  "src": "2231:14:230"
                },
                {
                  "expression": {
                    "id": 86228,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 86226,
                      "name": "daiUSDS",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 86179,
                      "src": "2255:7:230",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 86227,
                      "name": "daiUSDS_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 86187,
                      "src": "2265:8:230",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2255:18:230",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 86229,
                  "nodeType": "ExpressionStatement",
                  "src": "2255:18:230"
                },
                {
                  "expression": {
                    "id": 86232,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 86230,
                      "name": "usds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 86183,
                      "src": "2283:4:230",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 86231,
                      "name": "usds_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 86189,
                      "src": "2293:5:230",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2283:15:230",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 86233,
                  "nodeType": "ExpressionStatement",
                  "src": "2283:15:230"
                }
              ]
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 86190,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 86185,
                  "mutability": "mutable",
                  "name": "dai_",
                  "nameLocation": "1978:4:230",
                  "nodeType": "VariableDeclaration",
                  "scope": 86235,
                  "src": "1970:12:230",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 86184,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1970:7:230",
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
                  "id": 86187,
                  "mutability": "mutable",
                  "name": "daiUSDS_",
                  "nameLocation": "1992:8:230",
                  "nodeType": "VariableDeclaration",
                  "scope": 86235,
                  "src": "1984:16:230",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 86186,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1984:7:230",
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
                  "id": 86189,
                  "mutability": "mutable",
                  "name": "usds_",
                  "nameLocation": "2010:5:230",
                  "nodeType": "VariableDeclaration",
                  "scope": 86235,
                  "src": "2002:13:230",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 86188,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2002:7:230",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1969:47:230"
            },
            "returnParameters": {
              "id": 86191,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2017:0:230"
            },
            "scope": 86380,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 86297,
            "nodeType": "FunctionDefinition",
            "src": "2649:603:230",
            "nodes": [],
            "body": {
              "id": 86296,
              "nodeType": "Block",
              "src": "2784:468:230",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 86248,
                          "name": "usdsToDAISwapRateLimitKey",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 86369,
                          "src": "2813:25:230",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 86249,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2813:27:230",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 86250,
                        "name": "usdsAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86238,
                        "src": "2842:10:230",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 86247,
                      "name": "_decreaseRateLimit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 82081,
                      "src": "2794:18:230",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_uint256_$returns$__$",
                        "typeString": "function (bytes32,uint256)"
                      }
                    },
                    "id": 86251,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2794:59:230",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 86252,
                  "nodeType": "ExpressionStatement",
                  "src": "2794:59:230"
                },
                {
                  "assignments": [
                    86254
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 86254,
                      "mutability": "mutable",
                      "name": "proxy",
                      "nameLocation": "2872:5:230",
                      "nodeType": "VariableDeclaration",
                      "scope": 86296,
                      "src": "2864:13:230",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 86253,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "2864:7:230",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 86258,
                  "initialValue": {
                    "expression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 86255,
                        "name": "_getSharedControllerStorage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 81431,
                        "src": "2880:27:230",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_SharedControllerStorage_$81420_storage_ptr_$",
                          "typeString": "function () pure returns (struct ControllerSharedStorage.SharedControllerStorage storage pointer)"
                        }
                      },
                      "id": 86256,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2880:29:230",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_SharedControllerStorage_$81420_storage_ptr",
                        "typeString": "struct ControllerSharedStorage.SharedControllerStorage storage pointer"
                      }
                    },
                    "id": 86257,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "2910:5:230",
                    "memberName": "proxy",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 81417,
                    "src": "2880:35:230",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2864:51:230"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 86262,
                        "name": "usds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86183,
                        "src": "2945:4:230",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 86263,
                        "name": "proxy",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86254,
                        "src": "2951:5:230",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 86264,
                        "name": "daiUSDS",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86179,
                        "src": "2958:7:230",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 86265,
                        "name": "usdsAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86238,
                        "src": "2967:10:230",
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
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 86259,
                        "name": "ApproveLib",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 100694,
                        "src": "2926:10:230",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ApproveLib_$100694_$",
                          "typeString": "type(library ApproveLib)"
                        }
                      },
                      "id": 86261,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2937:7:230",
                      "memberName": "approve",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 100693,
                      "src": "2926:18:230",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,address,uint256)"
                      }
                    },
                    "id": 86266,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2926:52:230",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 86267,
                  "nodeType": "ExpressionStatement",
                  "src": "2926:52:230"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 86272,
                        "name": "daiUSDS",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86179,
                        "src": "3026:7:230",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 86275,
                              "name": "IDAIUSDSLike",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 86152,
                              "src": "3062:12:230",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IDAIUSDSLike_$86152_$",
                                "typeString": "type(contract IDAIUSDSLike)"
                              }
                            },
                            "id": 86276,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "3075:9:230",
                            "memberName": "usdsToDai",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 86151,
                            "src": "3062:22:230",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_declaration_nonpayable$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function IDAIUSDSLike.usdsToDai(address,uint256)"
                            }
                          },
                          {
                            "components": [
                              {
                                "id": 86277,
                                "name": "proxy",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 86254,
                                "src": "3087:5:230",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 86278,
                                "name": "usdsAmount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 86238,
                                "src": "3094:10:230",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 86279,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "3086:19:230",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$_t_address_$_t_uint256_$",
                              "typeString": "tuple(address,uint256)"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_function_declaration_nonpayable$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function IDAIUSDSLike.usdsToDai(address,uint256)"
                            },
                            {
                              "typeIdentifier": "t_tuple$_t_address_$_t_uint256_$",
                              "typeString": "tuple(address,uint256)"
                            }
                          ],
                          "expression": {
                            "id": 86273,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "3047:3:230",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 86274,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "3051:10:230",
                          "memberName": "encodeCall",
                          "nodeType": "MemberAccess",
                          "src": "3047:14:230",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 86280,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3047:59:230",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
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
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "arguments": [
                          {
                            "id": 86269,
                            "name": "proxy",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 86254,
                            "src": "2999:5:230",
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
                          "id": 86268,
                          "name": "IALMProxy",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 100081,
                          "src": "2989:9:230",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IALMProxy_$100081_$",
                            "typeString": "type(contract IALMProxy)"
                          }
                        },
                        "id": 86270,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2989:16:230",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IALMProxy_$100081",
                          "typeString": "contract IALMProxy"
                        }
                      },
                      "id": 86271,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3006:6:230",
                      "memberName": "doCall",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 100052,
                      "src": "2989:23:230",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory) external returns (bytes memory)"
                      }
                    },
                    "id": 86281,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2989:127:230",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 86282,
                  "nodeType": "ExpressionStatement",
                  "src": "2989:127:230"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 86286,
                        "name": "usds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86183,
                        "src": "3173:4:230",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 86287,
                        "name": "proxy",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86254,
                        "src": "3179:5:230",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 86288,
                        "name": "daiUSDS",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86179,
                        "src": "3186:7:230",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "hexValue": "30",
                        "id": 86289,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3195:1:230",
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
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        }
                      ],
                      "expression": {
                        "id": 86283,
                        "name": "ApproveLib",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 100694,
                        "src": "3154:10:230",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ApproveLib_$100694_$",
                          "typeString": "type(library ApproveLib)"
                        }
                      },
                      "id": 86285,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3165:7:230",
                      "memberName": "approve",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 100693,
                      "src": "3154:18:230",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,address,uint256)"
                      }
                    },
                    "id": 86290,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3154:43:230",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 86291,
                  "nodeType": "ExpressionStatement",
                  "src": "3154:43:230"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 86293,
                        "name": "usdsAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86238,
                        "src": "3234:10:230",
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
                      "id": 86292,
                      "name": "DAIUSDSSwapUSDSToDAI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 86397,
                      "src": "3213:20:230",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 86294,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3213:32:230",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 86295,
                  "nodeType": "EmitStatement",
                  "src": "3208:37:230"
                }
              ]
            },
            "baseFunctions": [
              86409
            ],
            "documentation": {
              "id": 86236,
              "nodeType": "StructuredDocumentation",
              "src": "2615:29:230",
              "text": "@inheritdoc IDAIUSDSFacet"
            },
            "functionSelector": "0d015236",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 86242,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 86241,
                  "name": "nonReentrant",
                  "nameLocations": [
                    "2734:12:230"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 70780,
                  "src": "2734:12:230"
                },
                "nodeType": "ModifierInvocation",
                "src": "2734:12:230"
              },
              {
                "arguments": [
                  {
                    "id": 86244,
                    "name": "ALLOCATOR_ROLE",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 82017,
                    "src": "2764:14:230",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 86245,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 86243,
                  "name": "onlyRole",
                  "nameLocations": [
                    "2755:8:230"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 82045,
                  "src": "2755:8:230"
                },
                "nodeType": "ModifierInvocation",
                "src": "2755:24:230"
              }
            ],
            "name": "swapUSDSToDAI",
            "nameLocation": "2658:13:230",
            "overrides": {
              "id": 86240,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2717:8:230"
            },
            "parameters": {
              "id": 86239,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 86238,
                  "mutability": "mutable",
                  "name": "usdsAmount",
                  "nameLocation": "2680:10:230",
                  "nodeType": "VariableDeclaration",
                  "scope": 86297,
                  "src": "2672:18:230",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 86237,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2672:7:230",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2671:20:230"
            },
            "returnParameters": {
              "id": 86246,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2784:0:230"
            },
            "scope": 86380,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 86359,
            "nodeType": "FunctionDefinition",
            "src": "3292:596:230",
            "nodes": [],
            "body": {
              "id": 86358,
              "nodeType": "Block",
              "src": "3426:462:230",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 86310,
                          "name": "daiToUSDSSwapRateLimitKey",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 86379,
                          "src": "3455:25:230",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 86311,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3455:27:230",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 86312,
                        "name": "daiAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86300,
                        "src": "3484:9:230",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 86309,
                      "name": "_decreaseRateLimit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 82081,
                      "src": "3436:18:230",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_uint256_$returns$__$",
                        "typeString": "function (bytes32,uint256)"
                      }
                    },
                    "id": 86313,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3436:58:230",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 86314,
                  "nodeType": "ExpressionStatement",
                  "src": "3436:58:230"
                },
                {
                  "assignments": [
                    86316
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 86316,
                      "mutability": "mutable",
                      "name": "proxy",
                      "nameLocation": "3513:5:230",
                      "nodeType": "VariableDeclaration",
                      "scope": 86358,
                      "src": "3505:13:230",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 86315,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3505:7:230",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 86320,
                  "initialValue": {
                    "expression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 86317,
                        "name": "_getSharedControllerStorage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 81431,
                        "src": "3521:27:230",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_SharedControllerStorage_$81420_storage_ptr_$",
                          "typeString": "function () pure returns (struct ControllerSharedStorage.SharedControllerStorage storage pointer)"
                        }
                      },
                      "id": 86318,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3521:29:230",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_SharedControllerStorage_$81420_storage_ptr",
                        "typeString": "struct ControllerSharedStorage.SharedControllerStorage storage pointer"
                      }
                    },
                    "id": 86319,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "3551:5:230",
                    "memberName": "proxy",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 81417,
                    "src": "3521:35:230",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3505:51:230"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 86324,
                        "name": "dai",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86175,
                        "src": "3586:3:230",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 86325,
                        "name": "proxy",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86316,
                        "src": "3591:5:230",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 86326,
                        "name": "daiUSDS",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86179,
                        "src": "3598:7:230",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 86327,
                        "name": "daiAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86300,
                        "src": "3607:9:230",
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
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 86321,
                        "name": "ApproveLib",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 100694,
                        "src": "3567:10:230",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ApproveLib_$100694_$",
                          "typeString": "type(library ApproveLib)"
                        }
                      },
                      "id": 86323,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3578:7:230",
                      "memberName": "approve",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 100693,
                      "src": "3567:18:230",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,address,uint256)"
                      }
                    },
                    "id": 86328,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3567:50:230",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 86329,
                  "nodeType": "ExpressionStatement",
                  "src": "3567:50:230"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 86334,
                        "name": "daiUSDS",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86179,
                        "src": "3665:7:230",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 86337,
                              "name": "IDAIUSDSLike",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 86152,
                              "src": "3701:12:230",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IDAIUSDSLike_$86152_$",
                                "typeString": "type(contract IDAIUSDSLike)"
                              }
                            },
                            "id": 86338,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "3714:9:230",
                            "memberName": "daiToUsds",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 86144,
                            "src": "3701:22:230",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_declaration_nonpayable$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function IDAIUSDSLike.daiToUsds(address,uint256)"
                            }
                          },
                          {
                            "components": [
                              {
                                "id": 86339,
                                "name": "proxy",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 86316,
                                "src": "3726:5:230",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 86340,
                                "name": "daiAmount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 86300,
                                "src": "3733:9:230",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 86341,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "3725:18:230",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$_t_address_$_t_uint256_$",
                              "typeString": "tuple(address,uint256)"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_function_declaration_nonpayable$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function IDAIUSDSLike.daiToUsds(address,uint256)"
                            },
                            {
                              "typeIdentifier": "t_tuple$_t_address_$_t_uint256_$",
                              "typeString": "tuple(address,uint256)"
                            }
                          ],
                          "expression": {
                            "id": 86335,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "3686:3:230",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 86336,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "3690:10:230",
                          "memberName": "encodeCall",
                          "nodeType": "MemberAccess",
                          "src": "3686:14:230",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 86342,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3686:58:230",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
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
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "arguments": [
                          {
                            "id": 86331,
                            "name": "proxy",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 86316,
                            "src": "3638:5:230",
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
                          "id": 86330,
                          "name": "IALMProxy",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 100081,
                          "src": "3628:9:230",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IALMProxy_$100081_$",
                            "typeString": "type(contract IALMProxy)"
                          }
                        },
                        "id": 86332,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3628:16:230",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IALMProxy_$100081",
                          "typeString": "contract IALMProxy"
                        }
                      },
                      "id": 86333,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3645:6:230",
                      "memberName": "doCall",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 100052,
                      "src": "3628:23:230",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory) external returns (bytes memory)"
                      }
                    },
                    "id": 86343,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3628:126:230",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 86344,
                  "nodeType": "ExpressionStatement",
                  "src": "3628:126:230"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 86348,
                        "name": "dai",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86175,
                        "src": "3811:3:230",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 86349,
                        "name": "proxy",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86316,
                        "src": "3816:5:230",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 86350,
                        "name": "daiUSDS",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86179,
                        "src": "3823:7:230",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "hexValue": "30",
                        "id": 86351,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3832:1:230",
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
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        }
                      ],
                      "expression": {
                        "id": 86345,
                        "name": "ApproveLib",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 100694,
                        "src": "3792:10:230",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ApproveLib_$100694_$",
                          "typeString": "type(library ApproveLib)"
                        }
                      },
                      "id": 86347,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3803:7:230",
                      "memberName": "approve",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 100693,
                      "src": "3792:18:230",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,address,uint256)"
                      }
                    },
                    "id": 86352,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3792:42:230",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 86353,
                  "nodeType": "ExpressionStatement",
                  "src": "3792:42:230"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 86355,
                        "name": "daiAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86300,
                        "src": "3871:9:230",
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
                      "id": 86354,
                      "name": "DAIUSDSSwapDAIToUSDS",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 86392,
                      "src": "3850:20:230",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 86356,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3850:31:230",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 86357,
                  "nodeType": "EmitStatement",
                  "src": "3845:36:230"
                }
              ]
            },
            "baseFunctions": [
              86403
            ],
            "documentation": {
              "id": 86298,
              "nodeType": "StructuredDocumentation",
              "src": "3258:29:230",
              "text": "@inheritdoc IDAIUSDSFacet"
            },
            "functionSelector": "7b65461c",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 86304,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 86303,
                  "name": "nonReentrant",
                  "nameLocations": [
                    "3376:12:230"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 70780,
                  "src": "3376:12:230"
                },
                "nodeType": "ModifierInvocation",
                "src": "3376:12:230"
              },
              {
                "arguments": [
                  {
                    "id": 86306,
                    "name": "ALLOCATOR_ROLE",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 82017,
                    "src": "3406:14:230",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 86307,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 86305,
                  "name": "onlyRole",
                  "nameLocations": [
                    "3397:8:230"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 82045,
                  "src": "3397:8:230"
                },
                "nodeType": "ModifierInvocation",
                "src": "3397:24:230"
              }
            ],
            "name": "swapDAIToUSDS",
            "nameLocation": "3301:13:230",
            "overrides": {
              "id": 86302,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "3359:8:230"
            },
            "parameters": {
              "id": 86301,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 86300,
                  "mutability": "mutable",
                  "name": "daiAmount",
                  "nameLocation": "3323:9:230",
                  "nodeType": "VariableDeclaration",
                  "scope": 86359,
                  "src": "3315:17:230",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 86299,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3315:7:230",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3314:19:230"
            },
            "returnParameters": {
              "id": 86308,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3426:0:230"
            },
            "scope": 86380,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 86369,
            "nodeType": "FunctionDefinition",
            "src": "4232:118:230",
            "nodes": [],
            "body": {
              "id": 86368,
              "nodeType": "Block",
              "src": "4308:42:230",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 86366,
                    "name": "_LIMIT_USDS_TO_DAI",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 86161,
                    "src": "4325:18:230",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 86365,
                  "id": 86367,
                  "nodeType": "Return",
                  "src": "4318:25:230"
                }
              ]
            },
            "baseFunctions": [
              86439
            ],
            "documentation": {
              "id": 86360,
              "nodeType": "StructuredDocumentation",
              "src": "4198:29:230",
              "text": "@inheritdoc IDAIUSDSFacet"
            },
            "functionSelector": "81a84a37",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "usdsToDAISwapRateLimitKey",
            "nameLocation": "4241:25:230",
            "overrides": {
              "id": 86362,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "4281:8:230"
            },
            "parameters": {
              "id": 86361,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4266:2:230"
            },
            "returnParameters": {
              "id": 86365,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 86364,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 86369,
                  "src": "4299:7:230",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 86363,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4299:7:230",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4298:9:230"
            },
            "scope": 86380,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 86379,
            "nodeType": "FunctionDefinition",
            "src": "4390:118:230",
            "nodes": [],
            "body": {
              "id": 86378,
              "nodeType": "Block",
              "src": "4466:42:230",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 86376,
                    "name": "_LIMIT_DAI_TO_USDS",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 86166,
                    "src": "4483:18:230",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 86375,
                  "id": 86377,
                  "nodeType": "Return",
                  "src": "4476:25:230"
                }
              ]
            },
            "baseFunctions": [
              86421
            ],
            "documentation": {
              "id": 86370,
              "nodeType": "StructuredDocumentation",
              "src": "4356:29:230",
              "text": "@inheritdoc IDAIUSDSFacet"
            },
            "functionSelector": "91a0cf77",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "daiToUSDSSwapRateLimitKey",
            "nameLocation": "4399:25:230",
            "overrides": {
              "id": 86372,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "4439:8:230"
            },
            "parameters": {
              "id": 86371,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4424:2:230"
            },
            "returnParameters": {
              "id": 86375,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 86374,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 86379,
                  "src": "4457:7:230",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 86373,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4457:7:230",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4456:9:230"
            },
            "scope": 86380,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 86153,
              "name": "IDAIUSDSFacet",
              "nameLocations": [
                "503:13:230"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 86440,
              "src": "503:13:230"
            },
            "id": 86154,
            "nodeType": "InheritanceSpecifier",
            "src": "503:13:230"
          },
          {
            "baseName": {
              "id": 86155,
              "name": "Facet",
              "nameLocations": [
                "518:5:230"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 82138,
              "src": "518:5:230"
            },
            "id": 86156,
            "nodeType": "InheritanceSpecifier",
            "src": "518:5:230"
          }
        ],
        "canonicalName": "DAIUSDSFacet",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          86380,
          82138,
          70840,
          70483,
          81432,
          86440,
          82167
        ],
        "name": "DAIUSDSFacet",
        "nameLocation": "487:12:230",
        "scope": 86381,
        "usedErrors": [
          70246,
          70249,
          70742,
          82148
        ],
        "usedEvents": [
          70254,
          86392,
          86397
        ]
      }
    ],
    "license": "AGPL-3.0-or-later"
  },
  "id": 230
} as const;
