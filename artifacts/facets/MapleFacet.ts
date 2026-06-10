const artifact = {
  "abi": [
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
      "name": "cancelRedemption",
      "inputs": [
        {
          "name": "mapleToken",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "shares",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "getCancelRedeemRateLimitKey",
      "inputs": [
        {
          "name": "mapleToken",
          "type": "address",
          "internalType": "address"
        }
      ],
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
      "name": "getRequestRedeemRateLimitKey",
      "inputs": [
        {
          "name": "mapleToken",
          "type": "address",
          "internalType": "address"
        }
      ],
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
      "name": "requestRedemption",
      "inputs": [
        {
          "name": "mapleToken",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "shares",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
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
      "type": "event",
      "name": "MapleCancelRedemption",
      "inputs": [
        {
          "name": "mapleToken",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "shares",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "MapleRequestRedemption",
      "inputs": [
        {
          "name": "mapleToken",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "shares",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
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
    "object": "0x6080604052348015600e575f5ffd5b50610ab28061001c5f395ff3fe608060405234801561000f575f5ffd5b506004361061007a575f3560e01c8063a217fddf11610058578063a217fddf146100cc578063c6529f84146100d3578063c81cbaa1146100e6578063ffa1ad741461010d575f5ffd5b806357e1aa901461007e578063635403f6146100a457806365d8480b146100b9575b5f5ffd5b61009161008c366004610837565b61013e565b6040519081526020015b60405180910390f35b6100b76100b2366004610857565b61016f565b005b6100b76100c7366004610857565b6103f5565b6100915f81565b6100916100e1366004610837565b610659565b6100917f68bf109b95a5c15fb2bb99041323c27d15f8675e11bf7420a1cd6ad64c394f4681565b610131604051806040016040528060058152602001640312e302e360dc1b81525081565b60405161009b91906108ad565b5f6101697f9c8d9d6cfcb0a4789ce44a2475c0f0903310fb8b18acc826952cdc0c921e2e7f83610680565b92915050565b6101776106c4565b7f68bf109b95a5c15fb2bb99041323c27d15f8675e11bf7420a1cd6ad64c394f465f5f516020610a5d5f395f51905f5254604051632474521560e21b8152600481018490523360248201526001600160a01b03909116915081906391d1485490604401602060405180830381865afa1580156101f5573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061021991906108bf565b338390916102505760405163e2517d3f60e01b81526001600160a01b03909216600483015260248201526044015b60405180910390fd5b505061026361025e85610659565b61070e565b6102af5760405162461bcd60e51b815260206004820152601960248201527f4d61706c6546616365742f696e76616c69642d616374696f6e000000000000006044820152606401610247565b7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc015460408051602481018690526001600160a01b03909216604480840182905282518085039091018152606490930182526020830180516001600160e01b03166301b8f18360e41b1790529051631d56d26960e11b815290918291633aada4d29161033f918991906004016108de565b5f604051808303815f875af115801561035a573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f19168201604052610381919081019061094e565b50846001600160a01b03167f62e98951622e280cdff08448fda901f0c9e813be1d78d29fbd142eba1fdc228b856040516103bd91815260200190565b60405180910390a25050506103f160017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b5050565b6103fd6106c4565b7f68bf109b95a5c15fb2bb99041323c27d15f8675e11bf7420a1cd6ad64c394f465f5f516020610a5d5f395f51905f5254604051632474521560e21b8152600481018490523360248201526001600160a01b03909116915081906391d1485490604401602060405180830381865afa15801561047b573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061049f91906108bf565b338390916104d15760405163e2517d3f60e01b81526001600160a01b0390921660048301526024820152604401610247565b505061054b6104df8561013e565b6040516303d1689d60e11b8152600481018690526001600160a01b038716906307a2d13a90602401602060405180830381865afa158015610522573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061054691906109e2565b610795565b7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc015460408051602481018690526001600160a01b03909216604480840182905282518085039091018152606490930182526020830180516001600160e01b031663107703ab60e01b1790529051631d56d26960e11b815290918291633aada4d2916105db918991906004016108de565b5f604051808303815f875af11580156105f6573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f1916820160405261061d919081019061094e565b50846001600160a01b03167f77bd9df45653e37e78f6efadd8c9e4d473b82b8bfc250bc5bf69c44aa0b2570f856040516103bd91815260200190565b5f6101697f9377cb96fae9362552eb66c782a412253c1d7fdcb415d32bf9eff6816da88dfc835b5f82826040516020016106a69291909182526001600160a01b0316602082015260400190565b60405160208183030381529060405280519060200120905092915050565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0080546001190161070857604051633ee5aeb560e01b815260040160405180910390fd5b60029055565b5f805f516020610a5d5f395f51905f526002015460405160016221581760e21b03198152600481018590526001600160a01b039091169063ff7a9fa490602401608060405180830381865afa158015610769573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061078d91906109f9565b511192915050565b5f516020610a5d5f395f51905f52600201546040516303bf076b60e41b815260048101849052602481018390526001600160a01b0390911690633bf076b0906044016020604051808303815f875af11580156107f3573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061081791906109e2565b505050565b80356001600160a01b0381168114610832575f5ffd5b919050565b5f60208284031215610847575f5ffd5b6108508261081c565b9392505050565b5f5f60408385031215610868575f5ffd5b6108718361081c565b946020939093013593505050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f610850602083018461087f565b5f602082840312156108cf575f5ffd5b81518015158114610850575f5ffd5b6001600160a01b03831681526040602082018190525f906109019083018461087f565b949350505050565b634e487b7160e01b5f52604160045260245ffd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561094657610946610909565b604052919050565b5f6020828403121561095e575f5ffd5b815167ffffffffffffffff811115610974575f5ffd5b8201601f81018413610984575f5ffd5b805167ffffffffffffffff81111561099e5761099e610909565b6109b1601f8201601f191660200161091d565b8181528560208385010111156109c5575f5ffd5b8160208401602083015e5f91810160200191909152949350505050565b5f602082840312156109f2575f5ffd5b5051919050565b5f6080828403128015610a0a575f5ffd5b506040516080810167ffffffffffffffff81118282101715610a2e57610a2e610909565b604090815283518252602080850151908301528381015190820152606092830151928101929092525091905056fe77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc00a2646970667358221220142b5371ea7896ff9d090da4d28576b7a1f65316a157362abe49439d38bd6ad764736f6c63430008220033",
    "sourceMap": "596:2866:243:-:0;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561000f575f5ffd5b506004361061007a575f3560e01c8063a217fddf11610058578063a217fddf146100cc578063c6529f84146100d3578063c81cbaa1146100e6578063ffa1ad741461010d575f5ffd5b806357e1aa901461007e578063635403f6146100a457806365d8480b146100b9575b5f5ffd5b61009161008c366004610837565b61013e565b6040519081526020015b60405180910390f35b6100b76100b2366004610857565b61016f565b005b6100b76100c7366004610857565b6103f5565b6100915f81565b6100916100e1366004610837565b610659565b6100917f68bf109b95a5c15fb2bb99041323c27d15f8675e11bf7420a1cd6ad64c394f4681565b610131604051806040016040528060058152602001640312e302e360dc1b81525081565b60405161009b91906108ad565b5f6101697f9c8d9d6cfcb0a4789ce44a2475c0f0903310fb8b18acc826952cdc0c921e2e7f83610680565b92915050565b6101776106c4565b7f68bf109b95a5c15fb2bb99041323c27d15f8675e11bf7420a1cd6ad64c394f465f5f516020610a5d5f395f51905f5254604051632474521560e21b8152600481018490523360248201526001600160a01b03909116915081906391d1485490604401602060405180830381865afa1580156101f5573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061021991906108bf565b338390916102505760405163e2517d3f60e01b81526001600160a01b03909216600483015260248201526044015b60405180910390fd5b505061026361025e85610659565b61070e565b6102af5760405162461bcd60e51b815260206004820152601960248201527f4d61706c6546616365742f696e76616c69642d616374696f6e000000000000006044820152606401610247565b7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc015460408051602481018690526001600160a01b03909216604480840182905282518085039091018152606490930182526020830180516001600160e01b03166301b8f18360e41b1790529051631d56d26960e11b815290918291633aada4d29161033f918991906004016108de565b5f604051808303815f875af115801561035a573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f19168201604052610381919081019061094e565b50846001600160a01b03167f62e98951622e280cdff08448fda901f0c9e813be1d78d29fbd142eba1fdc228b856040516103bd91815260200190565b60405180910390a25050506103f160017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b5050565b6103fd6106c4565b7f68bf109b95a5c15fb2bb99041323c27d15f8675e11bf7420a1cd6ad64c394f465f5f516020610a5d5f395f51905f5254604051632474521560e21b8152600481018490523360248201526001600160a01b03909116915081906391d1485490604401602060405180830381865afa15801561047b573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061049f91906108bf565b338390916104d15760405163e2517d3f60e01b81526001600160a01b0390921660048301526024820152604401610247565b505061054b6104df8561013e565b6040516303d1689d60e11b8152600481018690526001600160a01b038716906307a2d13a90602401602060405180830381865afa158015610522573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061054691906109e2565b610795565b7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc015460408051602481018690526001600160a01b03909216604480840182905282518085039091018152606490930182526020830180516001600160e01b031663107703ab60e01b1790529051631d56d26960e11b815290918291633aada4d2916105db918991906004016108de565b5f604051808303815f875af11580156105f6573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f1916820160405261061d919081019061094e565b50846001600160a01b03167f77bd9df45653e37e78f6efadd8c9e4d473b82b8bfc250bc5bf69c44aa0b2570f856040516103bd91815260200190565b5f6101697f9377cb96fae9362552eb66c782a412253c1d7fdcb415d32bf9eff6816da88dfc835b5f82826040516020016106a69291909182526001600160a01b0316602082015260400190565b60405160208183030381529060405280519060200120905092915050565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0080546001190161070857604051633ee5aeb560e01b815260040160405180910390fd5b60029055565b5f805f516020610a5d5f395f51905f526002015460405160016221581760e21b03198152600481018590526001600160a01b039091169063ff7a9fa490602401608060405180830381865afa158015610769573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061078d91906109f9565b511192915050565b5f516020610a5d5f395f51905f52600201546040516303bf076b60e41b815260048101849052602481018390526001600160a01b0390911690633bf076b0906044016020604051808303815f875af11580156107f3573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061081791906109e2565b505050565b80356001600160a01b0381168114610832575f5ffd5b919050565b5f60208284031215610847575f5ffd5b6108508261081c565b9392505050565b5f5f60408385031215610868575f5ffd5b6108718361081c565b946020939093013593505050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f610850602083018461087f565b5f602082840312156108cf575f5ffd5b81518015158114610850575f5ffd5b6001600160a01b03831681526040602082018190525f906109019083018461087f565b949350505050565b634e487b7160e01b5f52604160045260245ffd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561094657610946610909565b604052919050565b5f6020828403121561095e575f5ffd5b815167ffffffffffffffff811115610974575f5ffd5b8201601f81018413610984575f5ffd5b805167ffffffffffffffff81111561099e5761099e610909565b6109b1601f8201601f191660200161091d565b8181528560208385010111156109c5575f5ffd5b8160208401602083015e5f91810160200191909152949350505050565b5f602082840312156109f2575f5ffd5b5051919050565b5f6080828403128015610a0a575f5ffd5b506040516080810167ffffffffffffffff81118282101715610a2e57610a2e610909565b604090815283518252602080850151908301528381015190820152606092830151928101929092525091905056fe77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc00a2646970667358221220142b5371ea7896ff9d090da4d28576b7a1f65316a157362abe49439d38bd6ad764736f6c63430008220033",
    "sourceMap": "596:2866:243:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3083:170;;;;;;:::i;:::-;;:::i;:::-;;;529:25:388;;;517:2;502:18;3083:170:243;;;;;;;;2179:562;;;;;;:::i;:::-;;:::i;:::-;;1558:583;;;;;;:::i;:::-;;:::i;870:58:218:-;;924:4;870:58;;3291:168:243;;;;;;:::i;:::-;;:::i;962:77:218:-;;1012:27;962:77;;1166:49:243;;;;;;;;;;;;;;;-1:-1:-1;;;1166:49:243;;;;;;;;;;;;:::i;3083:170::-;3171:7;3197:49;999:39;3235:10;3197:14;:49::i;:::-;3190:56;3083:170;-1:-1:-1;;3083:170:243:o;2179:562::-;3251:21:160;:19;:21::i;:::-;1012:27:218::1;1392:22;-1:-1:-1::0;;;;;;;;;;;1417:44:218;1493:57:::1;::::0;-1:-1:-1;;;1493:57:218;;::::1;::::0;::::1;1517:25:388::0;;;1539:10:218::1;1558:18:388::0;;;1551:60;-1:-1:-1;;;;;1417:44:218;;::::1;::::0;-1:-1:-1;1417:44:218;;1493:39:::1;::::0;1490:18:388;;1493:57:218::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1597:10;1609:4;1472:152;;;;;::::0;-1:-1:-1;;;1472:152:218;;-1:-1:-1;;;;;2096:32:388;;;1472:152:218::1;::::0;::::1;2078:51:388::0;2145:18;;;2138:34;2051:18;;1472:152:218::1;;;;;;;;;;;2364:57:243::2;2381:39;2409:10;2381:27;:39::i;:::-;2364:16;:57::i;:::-;2343:129;;;::::0;-1:-1:-1;;;2343:129:243;;2385:2:388;2343:129:243::2;::::0;::::2;2367:21:388::0;2424:2;2404:18;;;2397:30;2463:27;2443:18;;;2436:55;2508:18;;2343:129:243::2;2183:349:388::0;2343:129:243::2;2499:35:::0;;2606:61:::2;::::0;;::::2;::::0;::::2;1517:25:388::0;;;-1:-1:-1;;;;;2499:35:243;;::::2;1558:18:388::0;;;;1551:60;;;2606:61:243;;;;;;;;;;1490:18:388;;;;2606:61:243;;::::2;::::0;::::2;::::0;;-1:-1:-1;;;;;2606:61:243::2;-1:-1:-1::0;;;2606:61:243::2;::::0;;2545:132;;-1:-1:-1;;;2545:132:243;;2499:35;;;;2545:23:::2;::::0;:132:::2;::::0;2582:10;;2606:61;2545:132:::2;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;;::::2;-1:-1:-1::0;;2545:132:243::2;::::0;::::2;;::::0;::::2;::::0;;;::::2;::::0;::::2;:::i;:::-;;2715:10;-1:-1:-1::0;;;;;2693:41:243::2;;2727:6;2693:41;;;;529:25:388::0;;517:2;502:18;;383:177;2693:41:243::2;;;;;;;;2333:408;1382:261:218::1;3282:1:160;3293:20:::0;1805:1;2388:30;3969:23;3716:283;3293:20;2179:562:243;;:::o;1558:583::-;3251:21:160;:19;:21::i;:::-;1012:27:218::1;1392:22;-1:-1:-1::0;;;;;;;;;;;1417:44:218;1493:57:::1;::::0;-1:-1:-1;;;1493:57:218;;::::1;::::0;::::1;1517:25:388::0;;;1539:10:218::1;1558:18:388::0;;;1551:60;-1:-1:-1;;;;;1417:44:218;;::::1;::::0;-1:-1:-1;1417:44:218;;1493:39:::1;::::0;1490:18:388;;1493:57:218::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1597:10;1609:4;1472:152;;;;;::::0;-1:-1:-1;;;1472:152:218;;-1:-1:-1;;;;;2096:32:388;;;1472:152:218::1;::::0;::::1;2078:51:388::0;2145:18;;;2138:34;2051:18;;1472:152:218::1;1904:274:388::0;1472:152:218::1;;;1723:147:243::2;1755:40;1784:10;1755:28;:40::i;:::-;1809:51;::::0;-1:-1:-1;;;1809:51:243;;::::2;::::0;::::2;529:25:388::0;;;-1:-1:-1;;;;;1809:43:243;::::2;::::0;::::2;::::0;502:18:388;;1809:51:243::2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1723:18;:147::i;:::-;1897:35:::0;;2004:62:::2;::::0;;::::2;::::0;::::2;1517:25:388::0;;;-1:-1:-1;;;;;1897:35:243;;::::2;1558:18:388::0;;;;1551:60;;;2004:62:243;;;;;;;;;;1490:18:388;;;;2004:62:243;;::::2;::::0;::::2;::::0;;-1:-1:-1;;;;;2004:62:243::2;-1:-1:-1::0;;;2004:62:243::2;::::0;;1943:133;;-1:-1:-1;;;1943:133:243;;1897:35;;;;1943:23:::2;::::0;:133:::2;::::0;1980:10;;2004:62;1943:133:::2;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;;::::2;-1:-1:-1::0;;1943:133:243::2;::::0;::::2;;::::0;::::2;::::0;;;::::2;::::0;::::2;:::i;:::-;;2115:10;-1:-1:-1::0;;;;;2092:42:243::2;;2127:6;2092:42;;;;529:25:388::0;;517:2;502:18;;383:177;3291:168:243;3378:7;3404:48;1094:38;3441:10;72:116:289;134:7;177:3;182:1;166:18;;;;;;;;1517:25:388;;;-1:-1:-1;;;;;1578:32:388;1573:2;1558:18;;1551:60;1505:2;1490:18;;1343:274;166:18:289;;;;;;;;;;;;;156:29;;;;;;149:36;;72:116;;;;:::o;3326:384:160:-;2388:30;3526:9;;-1:-1:-1;;3526:20:160;3522:88;;3569:30;;-1:-1:-1;;;3569:30:160;;;;;;;;;;;3522:88;1847:1;3684:19;;3326:384::o;2912:203:218:-;2974:4;;-1:-1:-1;;;;;;;;;;;3022:40:218;;;2997:97;;-1:-1:-1;;;;;;2997:97:218;;;;;529:25:388;;;-1:-1:-1;;;;;3022:40:218;;;;2997:92;;502:18:388;;2997:97:218;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:107;:111;;2912:203;-1:-1:-1;;2912:203:218:o;2133:174::-;-1:-1:-1;;;;;;;;;;;2221:40:218;;;2209:91;;-1:-1:-1;;;2209:91:218;;;;;5792:25:388;;;5833:18;;;5826:34;;;-1:-1:-1;;;;;2221:40:218;;;;2209:78;;5765:18:388;;2209:91:218;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;2133:174;;:::o;14:173:388:-;82:20;;-1:-1:-1;;;;;131:31:388;;121:42;;111:70;;177:1;174;167:12;111:70;14:173;;;:::o;192:186::-;251:6;304:2;292:9;283:7;279:23;275:32;272:52;;;320:1;317;310:12;272:52;343:29;362:9;343:29;:::i;:::-;333:39;192:186;-1:-1:-1;;;192:186:388:o;565:254::-;633:6;641;694:2;682:9;673:7;669:23;665:32;662:52;;;710:1;707;700:12;662:52;733:29;752:9;733:29;:::i;:::-;723:39;809:2;794:18;;;;781:32;;-1:-1:-1;;;565:254:388:o;824:289::-;866:3;904:5;898:12;931:6;926:3;919:19;987:6;980:4;973:5;969:16;962:4;957:3;953:14;947:47;1039:1;1032:4;1023:6;1018:3;1014:16;1010:27;1003:38;1102:4;1095:2;1091:7;1086:2;1078:6;1074:15;1070:29;1065:3;1061:39;1057:50;1050:57;;;824:289;;;;:::o;1118:220::-;1267:2;1256:9;1249:21;1230:4;1287:45;1328:2;1317:9;1313:18;1305:6;1287:45;:::i;1622:277::-;1689:6;1742:2;1730:9;1721:7;1717:23;1713:32;1710:52;;;1758:1;1755;1748:12;1710:52;1790:9;1784:16;1843:5;1836:13;1829:21;1822:5;1819:32;1809:60;;1865:1;1862;1855:12;2816:315;-1:-1:-1;;;;;2991:32:388;;2973:51;;3060:2;3055;3040:18;;3033:30;;;-1:-1:-1;;3080:45:388;;3106:18;;3098:6;3080:45;:::i;:::-;3072:53;2816:315;-1:-1:-1;;;;2816:315:388:o;3136:127::-;3197:10;3192:3;3188:20;3185:1;3178:31;3228:4;3225:1;3218:15;3252:4;3249:1;3242:15;3268:275;3339:2;3333:9;3404:2;3385:13;;-1:-1:-1;;3381:27:388;3369:40;;3439:18;3424:34;;3460:22;;;3421:62;3418:88;;;3486:18;;:::i;:::-;3522:2;3515:22;3268:275;;-1:-1:-1;3268:275:388:o;3548:755::-;3627:6;3680:2;3668:9;3659:7;3655:23;3651:32;3648:52;;;3696:1;3693;3686:12;3648:52;3729:9;3723:16;3762:18;3754:6;3751:30;3748:50;;;3794:1;3791;3784:12;3748:50;3817:22;;3870:4;3862:13;;3858:27;-1:-1:-1;3848:55:388;;3899:1;3896;3889:12;3848:55;3932:2;3926:9;3958:18;3950:6;3947:30;3944:56;;;3980:18;;:::i;:::-;4022:57;4069:2;4046:17;;-1:-1:-1;;4042:31:388;4075:2;4038:40;4022:57;:::i;:::-;4102:6;4095:5;4088:21;4150:7;4145:2;4136:6;4132:2;4128:15;4124:24;4121:37;4118:57;;;4171:1;4168;4161:12;4118:57;4219:6;4214:2;4210;4206:11;4201:2;4194:5;4190:14;4184:42;4271:1;4246:18;;;4266:2;4242:27;4235:38;;;;4250:5;3548:755;-1:-1:-1;;;;3548:755:388:o;4490:230::-;4560:6;4613:2;4601:9;4592:7;4588:23;4584:32;4581:52;;;4629:1;4626;4619:12;4581:52;-1:-1:-1;4674:16:388;;4490:230;-1:-1:-1;4490:230:388:o;4725:888::-;4828:6;4888:3;4876:9;4867:7;4863:23;4859:33;4904:2;4901:22;;;4919:1;4916;4909:12;4901:22;-1:-1:-1;4988:2:388;4982:9;5030:3;5018:16;;5064:18;5049:34;;5085:22;;;5046:62;5043:88;;;5111:18;;:::i;:::-;5147:2;5140:22;;;5203:16;;5228:21;;5315:2;5300:18;;;5294:25;5335:15;;;5328:32;5411:18;;;5405:25;5446:15;;;5439:32;5537:2;5522:18;;;5516:25;5557:15;;;5550:32;;;;-1:-1:-1;5235:6:388;4725:888;-1:-1:-1;4725:888:388:o",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "ALLOCATOR_ROLE()": "c81cbaa1",
    "DEFAULT_ADMIN_ROLE()": "a217fddf",
    "VERSION()": "ffa1ad74",
    "cancelRedemption(address,uint256)": "635403f6",
    "getCancelRedeemRateLimitKey(address)": "c6529f84",
    "getRequestRedeemRateLimitKey(address)": "57e1aa90",
    "requestRedemption(address,uint256)": "65d8480b"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.34+commit.80d5c536\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"AccessControlUnauthorizedAccount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidInitialization\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotInitializing\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"version\",\"type\":\"uint64\"}],\"name\":\"Initialized\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"mapleToken\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"MapleCancelRedemption\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"mapleToken\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"MapleRequestRedemption\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"ALLOCATOR_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"DEFAULT_ADMIN_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"VERSION\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"mapleToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"cancelRedemption\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"mapleToken\",\"type\":\"address\"}],\"name\":\"getCancelRedeemRateLimitKey\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"mapleToken\",\"type\":\"address\"}],\"name\":\"getRequestRedeemRateLimitKey\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"mapleToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"requestRedemption\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"InvalidInitialization()\":[{\"details\":\"The contract is already initialized.\"}],\"NotInitializing()\":[{\"details\":\"The contract is not initializing.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"events\":{\"Initialized(uint64)\":{\"details\":\"Triggered when the contract has been initialized or reinitialized.\"},\"MapleCancelRedemption(address,uint256)\":{\"params\":{\"mapleToken\":\"Address of the Maple pool token.\",\"shares\":\"Amount of shares removed from the redemption queue.\"}},\"MapleRequestRedemption(address,uint256)\":{\"params\":{\"mapleToken\":\"Address of the Maple pool token.\",\"shares\":\"Amount of shares submitted for redemption.\"}}},\"kind\":\"dev\",\"methods\":{\"cancelRedemption(address,uint256)\":{\"params\":{\"mapleToken\":\"Address of the Maple pool token.\",\"shares\":\"Amount of shares to cancel from redemption.\"}},\"getCancelRedeemRateLimitKey(address)\":{\"params\":{\"mapleToken\":\"Address of the Maple pool token.\"},\"returns\":{\"_0\":\"       Derived rate limit key.\"}},\"getRequestRedeemRateLimitKey(address)\":{\"params\":{\"mapleToken\":\"Address of the Maple pool token.\"},\"returns\":{\"_0\":\"       Derived rate limit key.\"}},\"requestRedemption(address,uint256)\":{\"params\":{\"mapleToken\":\"Address of the Maple pool token.\",\"shares\":\"Amount of shares to request for redemption.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"AccessControlUnauthorizedAccount(address,bytes32)\":[{\"notice\":\"Thrown when a caller lacks the required access control role.\"}]},\"events\":{\"MapleCancelRedemption(address,uint256)\":{\"notice\":\"Emitted when a pending redemption request is cancelled.\"},\"MapleRequestRedemption(address,uint256)\":{\"notice\":\"Emitted when a redemption request is submitted.\"}},\"kind\":\"user\",\"methods\":{\"ALLOCATOR_ROLE()\":{\"notice\":\"Role identifier for allocator accounts authorized to execute facet operations.\"},\"DEFAULT_ADMIN_ROLE()\":{\"notice\":\"Role identifier for the default admin (bytes32(0)).\"},\"VERSION()\":{\"notice\":\"Semantic version string of the facet.\"},\"cancelRedemption(address,uint256)\":{\"notice\":\"Cancels a pending redemption by removing shares from the queue.\"},\"getCancelRedeemRateLimitKey(address)\":{\"notice\":\"Returns the derived cancel redeem rate limit key for a Maple pool token.\"},\"getRequestRedeemRateLimitKey(address)\":{\"notice\":\"Returns the derived request redeem rate limit key for a Maple pool token.\"},\"requestRedemption(address,uint256)\":{\"notice\":\"Requests a redemption of Maple pool shares. Rate limited by the asset value of the         shares.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/facets/maple/MapleFacet.sol\":\"MapleFacet\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@ensdomains/=lib/uniswap-v4-periphery/lib/v4-core/node_modules/@ensdomains/\",\":@layerzerolabs/lz-evm-messagelib-v2/=lib/layerzero-v2/packages/layerzero-v2/evm/messagelib/\",\":@layerzerolabs/lz-evm-protocol-v2/=lib/layerzero-v2/packages/layerzero-v2/evm/protocol/\",\":@layerzerolabs/oft-evm/=lib/grove-xchain-helpers/lib/devtools/packages/oft-evm/\",\":@openzeppelin/contracts-upgradeable/=lib/oz-upgradeable/contracts/\",\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":@uniswap/v4-core/=lib/uniswap-v4-periphery/lib/v4-core/\",\":LayerZero-v2/=lib/grove-xchain-helpers/lib/\",\":aave-v3-core/=lib/aave-v3-origin/src/core/\",\":aave-v3-origin/=lib/aave-v3-origin/\",\":aave-v3-periphery/=lib/aave-v3-origin/src/periphery/\",\":devtools/=lib/grove-xchain-helpers/lib/devtools/packages/toolbox-foundry/src/\",\":ds-test/=lib/grove-address-registry/lib/forge-std/lib/ds-test/src/\",\":dss-allocator/=lib/dss-allocator/\",\":dss-interfaces/=lib/dss-test/lib/dss-interfaces/src/\",\":dss-test/=lib/dss-test/src/\",\":erc20-helpers/=lib/grove-basin/lib/erc20-helpers/src/\",\":erc4626-tests/=lib/metamorpho/lib/erc4626-tests/\",\":forge-gas-snapshot/=lib/uniswap-v4-periphery/lib/permit2/lib/forge-gas-snapshot/src/\",\":forge-std/=lib/forge-std/src/\",\":grove-address-registry/=lib/grove-address-registry/src/\",\":grove-basin/=lib/grove-basin/\",\":grove-xchain-helpers/=lib/grove-xchain-helpers/src/\",\":halmos-cheatcodes/=lib/grove-basin/lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/\",\":hardhat/=lib/uniswap-v4-periphery/lib/v4-core/node_modules/hardhat/\",\":layerzero-v2/=lib/layerzero-v2/\",\":layerzerolabs/oapp-evm/=lib/grove-xchain-helpers/lib/devtools/packages/oapp-evm/\",\":metamorpho/=lib/metamorpho/src/\",\":morpho-blue/=lib/metamorpho/lib/morpho-blue/\",\":murky/=lib/metamorpho/lib/universal-rewards-distributor/lib/murky/src/\",\":openzeppelin-contracts-upgradeable/=lib/spark-vaults-v2/lib/openzeppelin-contracts-upgradeable/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/metamorpho/lib/universal-rewards-distributor/lib/openzeppelin-contracts/contracts/\",\":oz-upgradeable/=lib/oz-upgradeable/\",\":permit2/=lib/uniswap-v4-periphery/lib/permit2/\",\":solidity-bytes-utils/=lib/solidity-bytes-utils/\",\":solidity-utils/=lib/aave-v3-origin/lib/solidity-utils/\",\":solmate/=lib/uniswap-v4-periphery/lib/v4-core/lib/solmate/\",\":spark-address-registry/=lib/spark-address-registry/src/\",\":spark-psm/=lib/spark-psm/\",\":spark-vaults-v2/=lib/spark-vaults-v2/\",\":sparklend-address-registry/=lib/grove-basin/lib/xchain-ssr-oracle/lib/sparklend-address-registry/\",\":token-tests/=lib/spark-vaults-v2/lib/token-tests/src/\",\":uniswap-v4-periphery/=lib/uniswap-v4-periphery/\",\":universal-rewards-distributor/=lib/metamorpho/lib/universal-rewards-distributor/src/\",\":v4-core/=lib/uniswap-v4-periphery/lib/v4-core/src/\",\":xchain-helpers/=lib/xchain-helpers/src/\",\":xchain-ssr-oracle/=lib/grove-basin/lib/xchain-ssr-oracle/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/access/IAccessControl.sol\":{\"keccak256\":\"0xb6b36edd6a2999fd243ff226d6cbf84bd71af2432bbd0dfe19392996a1d9cb41\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1fd2f35495652e57e3f99bc6c510bc5f7dd398a176ea2e72d8ed730aebc6ca26\",\"dweb:/ipfs/QmTQV6X4gkikTib49cho5iDX3JvSQbdsoEChoDwrk3CbbH\"]},\"lib/openzeppelin-contracts/contracts/access/extensions/IAccessControlEnumerable.sol\":{\"keccak256\":\"0xc1435f102633849858e75d7bed14c636f25448ceb3406d82992b0f2df52f4306\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ce1815e3a1da24f91b8e2ec24cf09d0d46e0fbeddcbe2cb0d8b2e05b91ceb7b3\",\"dweb:/ipfs/QmYTy1AQB5EV5jwuGsB49yykng2oG3x5ss4bDjFNxk3He4\"]},\"lib/oz-upgradeable/contracts/proxy/utils/Initializable.sol\":{\"keccak256\":\"0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609\",\"dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM\"]},\"lib/oz-upgradeable/contracts/utils/ReentrancyGuardUpgradeable.sol\":{\"keccak256\":\"0xb44e086e941292cdc7f440de51478493894ef0b1aeccb0c4047445919f667f74\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://942dad22fbdc1669f025540ba63aa3ccfad5f8458fc5d4525b31ebf272e7af45\",\"dweb:/ipfs/Qmdo4X2M82aM3AMoW2kf2jhYkSCyC4T1pHNd6obdsDFnAB\"]},\"src/ControllerSharedStorage.sol\":{\"keccak256\":\"0x08b85a82fbcfb5d837ac222fe71c7a458bab9edd8cfe0df02b3c38d6780b4400\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://577a9d2fc6796614c022fe701c981faa4df931dd5346e21167fbc46f3e199985\",\"dweb:/ipfs/QmYRyEbGum5TJF4yYNksK2H2CbmqYdcqiri5ZtFKrc36k7\"]},\"src/facets/Facet.sol\":{\"keccak256\":\"0xe86c5d5b73af2713e4e6754267af20325421b72c88a1dbf6dfbe9978b259edc2\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://28c6bcfbb07742b4be8f7188a3a9af301a6570616cf97564eb80091c09001ca9\",\"dweb:/ipfs/QmchiTioPPk7YbTtVpLN33hRNu1CKJoTH69He4BtUyXimA\"]},\"src/facets/IFacet.sol\":{\"keccak256\":\"0x0f0acb5faa3c227edc594e69507f89f0f063712847f361fbc51dbc2e9dd51d0a\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://ded1143f96b28d02e5eae73cf84af8e72ac15b31e2737ae29dc962c2975eb34c\",\"dweb:/ipfs/QmNrdGdJkHC2YWBMx4dQmihdwuSs7XDNgf8NYzQUsZifT2\"]},\"src/facets/maple/IMapleFacet.sol\":{\"keccak256\":\"0x827997d9e5ab52053335ab165cdc253d6f3d4bdcaa25a15ab03cfcc3960c6d5e\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://db7799d18c6c30800b0b7bff9d188f2de30903140dbfef13482f1c265c430b7f\",\"dweb:/ipfs/QmYxFkuGz2UDbnRTffPwYaM946Q5YniS4v9bH5yeyDPjGT\"]},\"src/facets/maple/MapleFacet.sol\":{\"keccak256\":\"0x8521c3945306b355b06d84293f3d5f81cdbb3648d311fa3a64254c18ea2c95a2\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://84ff0ae32070411d4a8eeeecfffca5a7372984c3b27eb3c4164d781c06141b31\",\"dweb:/ipfs/QmQKC3duDJcjQUqrRynnuB4tdC6tZuu8yYuSov6TtACBwe\"]},\"src/interfaces/IALMProxy.sol\":{\"keccak256\":\"0xa965efa753f8b48b5b08f4b98699a95ab4671c2e6b8c53c514dae9bda250f80e\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://1188a471d62be8e9439a9ac311f4e872288a414348341d7d0095928b846c6d19\",\"dweb:/ipfs/QmcUkHyM2YuZM4UicTBg47oTCYHxmzMf6Hd16hWyfsCJEd\"]},\"src/interfaces/IAccessControls.sol\":{\"keccak256\":\"0x774a4156bb41a733bd219dd14cf7ea7b10007662ab1ea2bdc83ffc197ed09637\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://9e923dced22563718b532893e9a70b2656ed6fbc556539ef5e2fe47fc4cd1c6d\",\"dweb:/ipfs/QmSh9RSdnatrSnMCxhnmyT8m6NFkFzCDDLPnzDVpfKDxYJ\"]},\"src/interfaces/IRateLimits.sol\":{\"keccak256\":\"0x20ea43787a1ad8c78805bdc194e57c5838176c258985342242b7211bfe7e6a4a\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://76555b4d5238e3faa3ebfe6b8eea949623cc5882d3c77835324459b3c664c0d6\",\"dweb:/ipfs/QmcfhxoLBDZrdBweL6PAV74NFHnVCeSDS7geQhYHt4LfhF\"]},\"src/libraries/RateLimitHelpers.sol\":{\"keccak256\":\"0x2aa83bc51a795f37ac31eea7e8c92563ba355f545cfde617d782b145da1f32cf\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://0bed4da7e8f6171839257219f3486f047102f3d7f69999aeeb96091a7d49e4b7\",\"dweb:/ipfs/QmRKHfUNZi6eogCUofurpBTjpWqfCLUsz3t48VXyU64jqs\"]}},\"version\":1}",
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
          "inputs": [
            {
              "internalType": "address",
              "name": "mapleToken",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "MapleCancelRedemption",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "mapleToken",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "MapleRequestRedemption",
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
          "inputs": [
            {
              "internalType": "address",
              "name": "mapleToken",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "cancelRedemption"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "mapleToken",
              "type": "address"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "getCancelRedeemRateLimitKey",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "mapleToken",
              "type": "address"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "getRequestRedeemRateLimitKey",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "mapleToken",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "requestRedemption"
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "cancelRedemption(address,uint256)": {
            "params": {
              "mapleToken": "Address of the Maple pool token.",
              "shares": "Amount of shares to cancel from redemption."
            }
          },
          "getCancelRedeemRateLimitKey(address)": {
            "params": {
              "mapleToken": "Address of the Maple pool token."
            },
            "returns": {
              "_0": "       Derived rate limit key."
            }
          },
          "getRequestRedeemRateLimitKey(address)": {
            "params": {
              "mapleToken": "Address of the Maple pool token."
            },
            "returns": {
              "_0": "       Derived rate limit key."
            }
          },
          "requestRedemption(address,uint256)": {
            "params": {
              "mapleToken": "Address of the Maple pool token.",
              "shares": "Amount of shares to request for redemption."
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
          "cancelRedemption(address,uint256)": {
            "notice": "Cancels a pending redemption by removing shares from the queue."
          },
          "getCancelRedeemRateLimitKey(address)": {
            "notice": "Returns the derived cancel redeem rate limit key for a Maple pool token."
          },
          "getRequestRedeemRateLimitKey(address)": {
            "notice": "Returns the derived request redeem rate limit key for a Maple pool token."
          },
          "requestRedemption(address,uint256)": {
            "notice": "Requests a redemption of Maple pool shares. Rate limited by the asset value of the         shares."
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
        "src/facets/maple/MapleFacet.sol": "MapleFacet"
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
      "src/facets/maple/IMapleFacet.sol": {
        "keccak256": "0x827997d9e5ab52053335ab165cdc253d6f3d4bdcaa25a15ab03cfcc3960c6d5e",
        "urls": [
          "bzz-raw://db7799d18c6c30800b0b7bff9d188f2de30903140dbfef13482f1c265c430b7f",
          "dweb:/ipfs/QmYxFkuGz2UDbnRTffPwYaM946Q5YniS4v9bH5yeyDPjGT"
        ],
        "license": "AGPL-3.0-or-later"
      },
      "src/facets/maple/MapleFacet.sol": {
        "keccak256": "0x8521c3945306b355b06d84293f3d5f81cdbb3648d311fa3a64254c18ea2c95a2",
        "urls": [
          "bzz-raw://84ff0ae32070411d4a8eeeecfffca5a7372984c3b27eb3c4164d781c06141b31",
          "dweb:/ipfs/QmQKC3duDJcjQUqrRynnuB4tdC6tZuu8yYuSov6TtACBwe"
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
      "src/libraries/RateLimitHelpers.sol": {
        "keccak256": "0x2aa83bc51a795f37ac31eea7e8c92563ba355f545cfde617d782b145da1f32cf",
        "urls": [
          "bzz-raw://0bed4da7e8f6171839257219f3486f047102f3d7f69999aeeb96091a7d49e4b7",
          "dweb:/ipfs/QmRKHfUNZi6eogCUofurpBTjpWqfCLUsz3t48VXyU64jqs"
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
    "absolutePath": "src/facets/maple/MapleFacet.sol",
    "id": 89561,
    "exportedSymbols": {
      "Facet": [
        82138
      ],
      "IALMProxy": [
        100081
      ],
      "IFacet": [
        82167
      ],
      "IMapleFacet": [
        89373
      ],
      "IMapleTokenLike": [
        89407
      ],
      "MapleFacet": [
        89560
      ],
      "makeAddressKey": [
        100714
      ]
    },
    "nodeType": "SourceUnit",
    "src": "46:3417:243",
    "nodes": [
      {
        "id": 89375,
        "nodeType": "PragmaDirective",
        "src": "46:24:243",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".34"
        ]
      },
      {
        "id": 89377,
        "nodeType": "ImportDirective",
        "src": "72:70:243",
        "nodes": [],
        "absolutePath": "src/libraries/RateLimitHelpers.sol",
        "file": "../../libraries/RateLimitHelpers.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 89561,
        "sourceUnit": 100913,
        "symbolAliases": [
          {
            "foreign": {
              "id": 89376,
              "name": "makeAddressKey",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 100714,
              "src": "81:14:243",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 89379,
        "nodeType": "ImportDirective",
        "src": "144:59:243",
        "nodes": [],
        "absolutePath": "src/interfaces/IALMProxy.sol",
        "file": "../../interfaces/IALMProxy.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 89561,
        "sourceUnit": 100082,
        "symbolAliases": [
          {
            "foreign": {
              "id": 89378,
              "name": "IALMProxy",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 100081,
              "src": "153:9:243",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 89381,
        "nodeType": "ImportDirective",
        "src": "205:39:243",
        "nodes": [],
        "absolutePath": "src/facets/IFacet.sol",
        "file": "../IFacet.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 89561,
        "sourceUnit": 82168,
        "symbolAliases": [
          {
            "foreign": {
              "id": 89380,
              "name": "IFacet",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 82167,
              "src": "214:6:243",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 89383,
        "nodeType": "ImportDirective",
        "src": "246:37:243",
        "nodes": [],
        "absolutePath": "src/facets/Facet.sol",
        "file": "../Facet.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 89561,
        "sourceUnit": 82139,
        "symbolAliases": [
          {
            "foreign": {
              "id": 89382,
              "name": "Facet",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 82138,
              "src": "255:5:243",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 89385,
        "nodeType": "ImportDirective",
        "src": "285:48:243",
        "nodes": [],
        "absolutePath": "src/facets/maple/IMapleFacet.sol",
        "file": "./IMapleFacet.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 89561,
        "sourceUnit": 89374,
        "symbolAliases": [
          {
            "foreign": {
              "id": 89384,
              "name": "IMapleFacet",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 89373,
              "src": "294:11:243",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 89407,
        "nodeType": "ContractDefinition",
        "src": "335:259:243",
        "nodes": [
          {
            "id": 89392,
            "nodeType": "FunctionDefinition",
            "src": "368:66:243",
            "nodes": [],
            "functionSelector": "107703ab",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "requestRedeem",
            "nameLocation": "377:13:243",
            "parameters": {
              "id": 89390,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 89387,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "399:6:243",
                  "nodeType": "VariableDeclaration",
                  "scope": 89392,
                  "src": "391:14:243",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 89386,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "391:7:243",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 89389,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "415:8:243",
                  "nodeType": "VariableDeclaration",
                  "scope": 89392,
                  "src": "407:16:243",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 89388,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "407:7:243",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "390:34:243"
            },
            "returnParameters": {
              "id": 89391,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "433:0:243"
            },
            "scope": 89407,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 89399,
            "nodeType": "FunctionDefinition",
            "src": "440:65:243",
            "nodes": [],
            "functionSelector": "1b8f1830",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "removeShares",
            "nameLocation": "449:12:243",
            "parameters": {
              "id": 89397,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 89394,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "470:6:243",
                  "nodeType": "VariableDeclaration",
                  "scope": 89399,
                  "src": "462:14:243",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 89393,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "462:7:243",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 89396,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "486:8:243",
                  "nodeType": "VariableDeclaration",
                  "scope": 89399,
                  "src": "478:16:243",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 89395,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "478:7:243",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "461:34:243"
            },
            "returnParameters": {
              "id": 89398,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "504:0:243"
            },
            "scope": 89407,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 89406,
            "nodeType": "FunctionDefinition",
            "src": "511:80:243",
            "nodes": [],
            "functionSelector": "07a2d13a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "convertToAssets",
            "nameLocation": "520:15:243",
            "parameters": {
              "id": 89402,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 89401,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "544:6:243",
                  "nodeType": "VariableDeclaration",
                  "scope": 89406,
                  "src": "536:14:243",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 89400,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "536:7:243",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "535:16:243"
            },
            "returnParameters": {
              "id": 89405,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 89404,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "583:6:243",
                  "nodeType": "VariableDeclaration",
                  "scope": 89406,
                  "src": "575:14:243",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 89403,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "575:7:243",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "574:16:243"
            },
            "scope": 89407,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IMapleTokenLike",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          89407
        ],
        "name": "IMapleTokenLike",
        "nameLocation": "345:15:243",
        "scope": 89561,
        "usedErrors": [],
        "usedEvents": []
      },
      {
        "id": 89560,
        "nodeType": "ContractDefinition",
        "src": "596:2866:243",
        "nodes": [
          {
            "id": 89416,
            "nodeType": "VariableDeclaration",
            "src": "949:89:243",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_LIMIT_REQUEST_REDEEM",
            "nameLocation": "975:21:243",
            "scope": 89560,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 89412,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "949:7:243",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "arguments": [
                {
                  "hexValue": "4c494d49545f4d41504c455f524551554553545f52454445454d",
                  "id": 89414,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "1009:28:243",
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_9c8d9d6cfcb0a4789ce44a2475c0f0903310fb8b18acc826952cdc0c921e2e7f",
                    "typeString": "literal_string \"LIMIT_MAPLE_REQUEST_REDEEM\""
                  },
                  "value": "LIMIT_MAPLE_REQUEST_REDEEM"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_9c8d9d6cfcb0a4789ce44a2475c0f0903310fb8b18acc826952cdc0c921e2e7f",
                    "typeString": "literal_string \"LIMIT_MAPLE_REQUEST_REDEEM\""
                  }
                ],
                "id": 89413,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": -8,
                "src": "999:9:243",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                  "typeString": "function (bytes memory) pure returns (bytes32)"
                }
              },
              "id": 89415,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "999:39:243",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 89421,
            "nodeType": "VariableDeclaration",
            "src": "1044:88:243",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_LIMIT_CANCEL_REDEEM",
            "nameLocation": "1070:20:243",
            "scope": 89560,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 89417,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "1044:7:243",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "arguments": [
                {
                  "hexValue": "4c494d49545f4d41504c455f43414e43454c5f52454445454d",
                  "id": 89419,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "1104:27:243",
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_9377cb96fae9362552eb66c782a412253c1d7fdcb415d32bf9eff6816da88dfc",
                    "typeString": "literal_string \"LIMIT_MAPLE_CANCEL_REDEEM\""
                  },
                  "value": "LIMIT_MAPLE_CANCEL_REDEEM"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_9377cb96fae9362552eb66c782a412253c1d7fdcb415d32bf9eff6816da88dfc",
                    "typeString": "literal_string \"LIMIT_MAPLE_CANCEL_REDEEM\""
                  }
                ],
                "id": 89418,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": -8,
                "src": "1094:9:243",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                  "typeString": "function (bytes memory) pure returns (bytes32)"
                }
              },
              "id": 89420,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "1094:38:243",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 89426,
            "nodeType": "VariableDeclaration",
            "src": "1166:49:243",
            "nodes": [],
            "baseFunctions": [
              82166
            ],
            "constant": true,
            "documentation": {
              "id": 89422,
              "nodeType": "StructuredDocumentation",
              "src": "1139:22:243",
              "text": "@inheritdoc IFacet"
            },
            "functionSelector": "ffa1ad74",
            "mutability": "constant",
            "name": "VERSION",
            "nameLocation": "1198:7:243",
            "overrides": {
              "id": 89424,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1189:8:243"
            },
            "scope": 89560,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 89423,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1166:6:243",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "312e302e30",
              "id": 89425,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1208:7:243",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_06c015bd22b4c69690933c1058878ebdfef31f9aaae40bbe86d8a09fe1b2972c",
                "typeString": "literal_string \"1.0.0\""
              },
              "value": "1.0.0"
            },
            "visibility": "public"
          },
          {
            "id": 89479,
            "nodeType": "FunctionDefinition",
            "src": "1558:583:243",
            "nodes": [],
            "body": {
              "id": 89478,
              "nodeType": "Block",
              "src": "1713:428:243",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 89442,
                            "name": "mapleToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 89429,
                            "src": "1784:10:243",
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
                          "id": 89441,
                          "name": "getRequestRedeemRateLimitKey",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 89544,
                          "src": "1755:28:243",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_address_$returns$_t_bytes32_$",
                            "typeString": "function (address) pure returns (bytes32)"
                          }
                        },
                        "id": 89443,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1755:40:243",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 89448,
                            "name": "shares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 89431,
                            "src": "1853:6:243",
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
                          "expression": {
                            "arguments": [
                              {
                                "id": 89445,
                                "name": "mapleToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 89429,
                                "src": "1825:10:243",
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
                              "id": 89444,
                              "name": "IMapleTokenLike",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 89407,
                              "src": "1809:15:243",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IMapleTokenLike_$89407_$",
                                "typeString": "type(contract IMapleTokenLike)"
                              }
                            },
                            "id": 89446,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1809:27:243",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IMapleTokenLike_$89407",
                              "typeString": "contract IMapleTokenLike"
                            }
                          },
                          "id": 89447,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1837:15:243",
                          "memberName": "convertToAssets",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 89406,
                          "src": "1809:43:243",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256) view external returns (uint256)"
                          }
                        },
                        "id": 89449,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1809:51:243",
                        "tryCall": false,
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
                      "id": 89440,
                      "name": "_decreaseRateLimit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 82081,
                      "src": "1723:18:243",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_uint256_$returns$__$",
                        "typeString": "function (bytes32,uint256)"
                      }
                    },
                    "id": 89450,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1723:147:243",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 89451,
                  "nodeType": "ExpressionStatement",
                  "src": "1723:147:243"
                },
                {
                  "assignments": [
                    89453
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 89453,
                      "mutability": "mutable",
                      "name": "proxy",
                      "nameLocation": "1889:5:243",
                      "nodeType": "VariableDeclaration",
                      "scope": 89478,
                      "src": "1881:13:243",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 89452,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1881:7:243",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 89457,
                  "initialValue": {
                    "expression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 89454,
                        "name": "_getSharedControllerStorage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 81431,
                        "src": "1897:27:243",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_SharedControllerStorage_$81420_storage_ptr_$",
                          "typeString": "function () pure returns (struct ControllerSharedStorage.SharedControllerStorage storage pointer)"
                        }
                      },
                      "id": 89455,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1897:29:243",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_SharedControllerStorage_$81420_storage_ptr",
                        "typeString": "struct ControllerSharedStorage.SharedControllerStorage storage pointer"
                      }
                    },
                    "id": 89456,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "1927:5:243",
                    "memberName": "proxy",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 81417,
                    "src": "1897:35:243",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1881:51:243"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 89462,
                        "name": "mapleToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 89429,
                        "src": "1980:10:243",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 89465,
                              "name": "IMapleTokenLike",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 89407,
                              "src": "2019:15:243",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IMapleTokenLike_$89407_$",
                                "typeString": "type(contract IMapleTokenLike)"
                              }
                            },
                            "id": 89466,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2035:13:243",
                            "memberName": "requestRedeem",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 89392,
                            "src": "2019:29:243",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_declaration_nonpayable$_t_uint256_$_t_address_$returns$__$",
                              "typeString": "function IMapleTokenLike.requestRedeem(uint256,address)"
                            }
                          },
                          {
                            "components": [
                              {
                                "id": 89467,
                                "name": "shares",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 89431,
                                "src": "2051:6:243",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 89468,
                                "name": "proxy",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 89453,
                                "src": "2059:5:243",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "id": 89469,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "2050:15:243",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$_t_uint256_$_t_address_$",
                              "typeString": "tuple(uint256,address)"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_function_declaration_nonpayable$_t_uint256_$_t_address_$returns$__$",
                              "typeString": "function IMapleTokenLike.requestRedeem(uint256,address)"
                            },
                            {
                              "typeIdentifier": "t_tuple$_t_uint256_$_t_address_$",
                              "typeString": "tuple(uint256,address)"
                            }
                          ],
                          "expression": {
                            "id": 89463,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "2004:3:243",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 89464,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "2008:10:243",
                          "memberName": "encodeCall",
                          "nodeType": "MemberAccess",
                          "src": "2004:14:243",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 89470,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2004:62:243",
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
                            "id": 89459,
                            "name": "proxy",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 89453,
                            "src": "1953:5:243",
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
                          "id": 89458,
                          "name": "IALMProxy",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 100081,
                          "src": "1943:9:243",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IALMProxy_$100081_$",
                            "typeString": "type(contract IALMProxy)"
                          }
                        },
                        "id": 89460,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1943:16:243",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IALMProxy_$100081",
                          "typeString": "contract IALMProxy"
                        }
                      },
                      "id": 89461,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1960:6:243",
                      "memberName": "doCall",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 100052,
                      "src": "1943:23:243",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory) external returns (bytes memory)"
                      }
                    },
                    "id": 89471,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1943:133:243",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 89472,
                  "nodeType": "ExpressionStatement",
                  "src": "1943:133:243"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 89474,
                        "name": "mapleToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 89429,
                        "src": "2115:10:243",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 89475,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 89431,
                        "src": "2127:6:243",
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
                      "id": 89473,
                      "name": "MapleRequestRedemption",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 89340,
                      "src": "2092:22:243",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 89476,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2092:42:243",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 89477,
                  "nodeType": "EmitStatement",
                  "src": "2087:47:243"
                }
              ]
            },
            "baseFunctions": [
              89356
            ],
            "documentation": {
              "id": 89427,
              "nodeType": "StructuredDocumentation",
              "src": "1526:27:243",
              "text": "@inheritdoc IMapleFacet"
            },
            "functionSelector": "65d8480b",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 89435,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 89434,
                  "name": "nonReentrant",
                  "nameLocations": [
                    "1663:12:243"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 70780,
                  "src": "1663:12:243"
                },
                "nodeType": "ModifierInvocation",
                "src": "1663:12:243"
              },
              {
                "arguments": [
                  {
                    "id": 89437,
                    "name": "ALLOCATOR_ROLE",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 82017,
                    "src": "1693:14:243",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 89438,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 89436,
                  "name": "onlyRole",
                  "nameLocations": [
                    "1684:8:243"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 82045,
                  "src": "1684:8:243"
                },
                "nodeType": "ModifierInvocation",
                "src": "1684:24:243"
              }
            ],
            "name": "requestRedemption",
            "nameLocation": "1567:17:243",
            "overrides": {
              "id": 89433,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1646:8:243"
            },
            "parameters": {
              "id": 89432,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 89429,
                  "mutability": "mutable",
                  "name": "mapleToken",
                  "nameLocation": "1593:10:243",
                  "nodeType": "VariableDeclaration",
                  "scope": 89479,
                  "src": "1585:18:243",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 89428,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1585:7:243",
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
                  "id": 89431,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "1613:6:243",
                  "nodeType": "VariableDeclaration",
                  "scope": 89479,
                  "src": "1605:14:243",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 89430,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1605:7:243",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1584:36:243"
            },
            "returnParameters": {
              "id": 89439,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1713:0:243"
            },
            "scope": 89560,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 89529,
            "nodeType": "FunctionDefinition",
            "src": "2179:562:243",
            "nodes": [],
            "body": {
              "id": 89528,
              "nodeType": "Block",
              "src": "2333:408:243",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 89496,
                                "name": "mapleToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 89482,
                                "src": "2409:10:243",
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
                              "id": 89495,
                              "name": "getCancelRedeemRateLimitKey",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 89559,
                              "src": "2381:27:243",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_address_$returns$_t_bytes32_$",
                                "typeString": "function (address) pure returns (bytes32)"
                              }
                            },
                            "id": 89497,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2381:39:243",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "id": 89494,
                          "name": "_rateLimitExists",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 82137,
                          "src": "2364:16:243",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view returns (bool)"
                          }
                        },
                        "id": 89498,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2364:57:243",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4d61706c6546616365742f696e76616c69642d616374696f6e",
                        "id": 89499,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2435:27:243",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_70f641b4895e4622a5d1dc838728697d810778c9d3aadd00cdec006171efa5e5",
                          "typeString": "literal_string \"MapleFacet/invalid-action\""
                        },
                        "value": "MapleFacet/invalid-action"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_70f641b4895e4622a5d1dc838728697d810778c9d3aadd00cdec006171efa5e5",
                          "typeString": "literal_string \"MapleFacet/invalid-action\""
                        }
                      ],
                      "id": 89493,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2343:7:243",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 89500,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2343:129:243",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 89501,
                  "nodeType": "ExpressionStatement",
                  "src": "2343:129:243"
                },
                {
                  "assignments": [
                    89503
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 89503,
                      "mutability": "mutable",
                      "name": "proxy",
                      "nameLocation": "2491:5:243",
                      "nodeType": "VariableDeclaration",
                      "scope": 89528,
                      "src": "2483:13:243",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 89502,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "2483:7:243",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 89507,
                  "initialValue": {
                    "expression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 89504,
                        "name": "_getSharedControllerStorage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 81431,
                        "src": "2499:27:243",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_SharedControllerStorage_$81420_storage_ptr_$",
                          "typeString": "function () pure returns (struct ControllerSharedStorage.SharedControllerStorage storage pointer)"
                        }
                      },
                      "id": 89505,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2499:29:243",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_SharedControllerStorage_$81420_storage_ptr",
                        "typeString": "struct ControllerSharedStorage.SharedControllerStorage storage pointer"
                      }
                    },
                    "id": 89506,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "2529:5:243",
                    "memberName": "proxy",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 81417,
                    "src": "2499:35:243",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2483:51:243"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 89512,
                        "name": "mapleToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 89482,
                        "src": "2582:10:243",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 89515,
                              "name": "IMapleTokenLike",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 89407,
                              "src": "2621:15:243",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IMapleTokenLike_$89407_$",
                                "typeString": "type(contract IMapleTokenLike)"
                              }
                            },
                            "id": 89516,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2637:12:243",
                            "memberName": "removeShares",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 89399,
                            "src": "2621:28:243",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_declaration_nonpayable$_t_uint256_$_t_address_$returns$__$",
                              "typeString": "function IMapleTokenLike.removeShares(uint256,address)"
                            }
                          },
                          {
                            "components": [
                              {
                                "id": 89517,
                                "name": "shares",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 89484,
                                "src": "2652:6:243",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 89518,
                                "name": "proxy",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 89503,
                                "src": "2660:5:243",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "id": 89519,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "2651:15:243",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$_t_uint256_$_t_address_$",
                              "typeString": "tuple(uint256,address)"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_function_declaration_nonpayable$_t_uint256_$_t_address_$returns$__$",
                              "typeString": "function IMapleTokenLike.removeShares(uint256,address)"
                            },
                            {
                              "typeIdentifier": "t_tuple$_t_uint256_$_t_address_$",
                              "typeString": "tuple(uint256,address)"
                            }
                          ],
                          "expression": {
                            "id": 89513,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "2606:3:243",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 89514,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "2610:10:243",
                          "memberName": "encodeCall",
                          "nodeType": "MemberAccess",
                          "src": "2606:14:243",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 89520,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2606:61:243",
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
                            "id": 89509,
                            "name": "proxy",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 89503,
                            "src": "2555:5:243",
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
                          "id": 89508,
                          "name": "IALMProxy",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 100081,
                          "src": "2545:9:243",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IALMProxy_$100081_$",
                            "typeString": "type(contract IALMProxy)"
                          }
                        },
                        "id": 89510,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2545:16:243",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IALMProxy_$100081",
                          "typeString": "contract IALMProxy"
                        }
                      },
                      "id": 89511,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2562:6:243",
                      "memberName": "doCall",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 100052,
                      "src": "2545:23:243",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory) external returns (bytes memory)"
                      }
                    },
                    "id": 89521,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2545:132:243",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 89522,
                  "nodeType": "ExpressionStatement",
                  "src": "2545:132:243"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 89524,
                        "name": "mapleToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 89482,
                        "src": "2715:10:243",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 89525,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 89484,
                        "src": "2727:6:243",
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
                      "id": 89523,
                      "name": "MapleCancelRedemption",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 89333,
                      "src": "2693:21:243",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 89526,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2693:41:243",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 89527,
                  "nodeType": "EmitStatement",
                  "src": "2688:46:243"
                }
              ]
            },
            "baseFunctions": [
              89348
            ],
            "documentation": {
              "id": 89480,
              "nodeType": "StructuredDocumentation",
              "src": "2147:27:243",
              "text": "@inheritdoc IMapleFacet"
            },
            "functionSelector": "635403f6",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 89488,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 89487,
                  "name": "nonReentrant",
                  "nameLocations": [
                    "2283:12:243"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 70780,
                  "src": "2283:12:243"
                },
                "nodeType": "ModifierInvocation",
                "src": "2283:12:243"
              },
              {
                "arguments": [
                  {
                    "id": 89490,
                    "name": "ALLOCATOR_ROLE",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 82017,
                    "src": "2313:14:243",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 89491,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 89489,
                  "name": "onlyRole",
                  "nameLocations": [
                    "2304:8:243"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 82045,
                  "src": "2304:8:243"
                },
                "nodeType": "ModifierInvocation",
                "src": "2304:24:243"
              }
            ],
            "name": "cancelRedemption",
            "nameLocation": "2188:16:243",
            "overrides": {
              "id": 89486,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2266:8:243"
            },
            "parameters": {
              "id": 89485,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 89482,
                  "mutability": "mutable",
                  "name": "mapleToken",
                  "nameLocation": "2213:10:243",
                  "nodeType": "VariableDeclaration",
                  "scope": 89529,
                  "src": "2205:18:243",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 89481,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2205:7:243",
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
                  "id": 89484,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "2233:6:243",
                  "nodeType": "VariableDeclaration",
                  "scope": 89529,
                  "src": "2225:14:243",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 89483,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2225:7:243",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2204:36:243"
            },
            "returnParameters": {
              "id": 89492,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2333:0:243"
            },
            "scope": 89560,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 89544,
            "nodeType": "FunctionDefinition",
            "src": "3083:170:243",
            "nodes": [],
            "body": {
              "id": 89543,
              "nodeType": "Block",
              "src": "3180:73:243",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 89539,
                        "name": "_LIMIT_REQUEST_REDEEM",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 89416,
                        "src": "3212:21:243",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 89540,
                        "name": "mapleToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 89532,
                        "src": "3235:10:243",
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
                      "id": 89538,
                      "name": "makeAddressKey",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 100714,
                      "src": "3197:14:243",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_address_$returns$_t_bytes32_$",
                        "typeString": "function (bytes32,address) pure returns (bytes32)"
                      }
                    },
                    "id": 89541,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3197:49:243",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 89537,
                  "id": 89542,
                  "nodeType": "Return",
                  "src": "3190:56:243"
                }
              ]
            },
            "baseFunctions": [
              89372
            ],
            "documentation": {
              "id": 89530,
              "nodeType": "StructuredDocumentation",
              "src": "3051:27:243",
              "text": "@inheritdoc IMapleFacet"
            },
            "functionSelector": "57e1aa90",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getRequestRedeemRateLimitKey",
            "nameLocation": "3092:28:243",
            "overrides": {
              "id": 89534,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "3153:8:243"
            },
            "parameters": {
              "id": 89533,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 89532,
                  "mutability": "mutable",
                  "name": "mapleToken",
                  "nameLocation": "3129:10:243",
                  "nodeType": "VariableDeclaration",
                  "scope": 89544,
                  "src": "3121:18:243",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 89531,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3121:7:243",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3120:20:243"
            },
            "returnParameters": {
              "id": 89537,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 89536,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 89544,
                  "src": "3171:7:243",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 89535,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3171:7:243",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3170:9:243"
            },
            "scope": 89560,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 89559,
            "nodeType": "FunctionDefinition",
            "src": "3291:168:243",
            "nodes": [],
            "body": {
              "id": 89558,
              "nodeType": "Block",
              "src": "3387:72:243",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 89554,
                        "name": "_LIMIT_CANCEL_REDEEM",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 89421,
                        "src": "3419:20:243",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 89555,
                        "name": "mapleToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 89547,
                        "src": "3441:10:243",
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
                      "id": 89553,
                      "name": "makeAddressKey",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 100714,
                      "src": "3404:14:243",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_address_$returns$_t_bytes32_$",
                        "typeString": "function (bytes32,address) pure returns (bytes32)"
                      }
                    },
                    "id": 89556,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3404:48:243",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 89552,
                  "id": 89557,
                  "nodeType": "Return",
                  "src": "3397:55:243"
                }
              ]
            },
            "baseFunctions": [
              89364
            ],
            "documentation": {
              "id": 89545,
              "nodeType": "StructuredDocumentation",
              "src": "3259:27:243",
              "text": "@inheritdoc IMapleFacet"
            },
            "functionSelector": "c6529f84",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getCancelRedeemRateLimitKey",
            "nameLocation": "3300:27:243",
            "overrides": {
              "id": 89549,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "3360:8:243"
            },
            "parameters": {
              "id": 89548,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 89547,
                  "mutability": "mutable",
                  "name": "mapleToken",
                  "nameLocation": "3336:10:243",
                  "nodeType": "VariableDeclaration",
                  "scope": 89559,
                  "src": "3328:18:243",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 89546,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3328:7:243",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3327:20:243"
            },
            "returnParameters": {
              "id": 89552,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 89551,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 89559,
                  "src": "3378:7:243",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 89550,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3378:7:243",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3377:9:243"
            },
            "scope": 89560,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 89408,
              "name": "IMapleFacet",
              "nameLocations": [
                "619:11:243"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 89373,
              "src": "619:11:243"
            },
            "id": 89409,
            "nodeType": "InheritanceSpecifier",
            "src": "619:11:243"
          },
          {
            "baseName": {
              "id": 89410,
              "name": "Facet",
              "nameLocations": [
                "632:5:243"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 82138,
              "src": "632:5:243"
            },
            "id": 89411,
            "nodeType": "InheritanceSpecifier",
            "src": "632:5:243"
          }
        ],
        "canonicalName": "MapleFacet",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          89560,
          82138,
          70840,
          70483,
          81432,
          89373,
          82167
        ],
        "name": "MapleFacet",
        "nameLocation": "605:10:243",
        "scope": 89561,
        "usedErrors": [
          70246,
          70249,
          70742,
          82148
        ],
        "usedEvents": [
          70254,
          89333,
          89340
        ]
      }
    ],
    "license": "AGPL-3.0-or-later"
  },
  "id": 243
} as const;

export default artifact;
