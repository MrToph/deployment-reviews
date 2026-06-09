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
          "name": "weth_",
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
      "name": "weth",
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
      "name": "wrapAll",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "wrapRateLimitKey",
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
      "name": "WrapProxyETHWrap",
      "inputs": [
        {
          "name": "ethAmount",
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
    "object": "0x60a060405234801561000f575f5ffd5b5060405161078638038061078683398101604081905261002e91610099565b6001600160a01b0381166100885760405162461bcd60e51b815260206004820152601b60248201527f5772617050726f787945544846616365742f7a65726f2d776574680000000000604482015260640160405180910390fd5b6001600160a01b03166080526100c6565b5f602082840312156100a9575f5ffd5b81516001600160a01b03811681146100bf575f5ffd5b9392505050565b6080516106a26100e45f395f81816069015261030501526106a25ff3fe608060405234801561000f575f5ffd5b5060043610610060575f3560e01c80633fc8cef3146100645780634c84c1c8146100a85780639ee2e58a146100b2578063a217fddf146100e2578063c81cbaa1146100e9578063ffa1ad7414610110575b5f5ffd5b61008b7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b6100b0610141565b005b7f7b111df2df6f5a9b268b1bd644ca4cc91320a3b71dec030a7152e738a45d30255b60405190815260200161009f565b6100d45f81565b6100d47f68bf109b95a5c15fb2bb99041323c27d15f8675e11bf7420a1cd6ad64c394f4681565b610134604051806040016040528060058152602001640312e302e360dc1b81525081565b60405161009f91906104d5565b6101496103f1565b7f68bf109b95a5c15fb2bb99041323c27d15f8675e11bf7420a1cd6ad64c394f465f7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc0054604051632474521560e21b8152600481018490523360248201526001600160a01b03909116915081906391d1485490604401602060405180830381865afa1580156101da573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101fe919061050a565b338390916102355760405163e2517d3f60e01b81526001600160a01b03909216600483015260248201526044015b60405180910390fd5b50506102666102617f7b111df2df6f5a9b268b1bd644ca4cc91320a3b71dec030a7152e738a45d302590565b61043b565b6102b25760405162461bcd60e51b815260206004820181905260248201527f5772617050726f787945544846616365742f696e76616c69642d616374696f6e604482015260640161022c565b7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc01546001600160a01b031680315f8190036102ee5750506103c4565b604051631ae3f27f60e31b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152606060248301525f60648301526044820183905283169063d71f93f8906084015f604051808303815f875af1158015610366573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f1916820160405261038d9190810190610575565b506040518181527fc6090583b96fe69e99eb4c5ac69d772e1b3a309373a42482993d5dc2d92c9a9b9060200160405180910390a150505b50506103ef60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0080546001190161043557604051633ee5aeb560e01b815260040160405180910390fd5b60029055565b5f807f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc006002015460405160016221581760e21b03198152600481018590526001600160a01b039091169063ff7a9fa490602401608060405180830381865afa1580156104a9573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104cd9190610609565b511192915050565b602081525f82518060208401528060208501604085015e5f604082850101526040601f19601f83011684010191505092915050565b5f6020828403121561051a575f5ffd5b81518015158114610529575f5ffd5b9392505050565b634e487b7160e01b5f52604160045260245ffd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561056d5761056d610530565b604052919050565b5f60208284031215610585575f5ffd5b815167ffffffffffffffff81111561059b575f5ffd5b8201601f810184136105ab575f5ffd5b805167ffffffffffffffff8111156105c5576105c5610530565b6105d8601f8201601f1916602001610544565b8181528560208385010111156105ec575f5ffd5b8160208401602083015e5f91810160200191909152949350505050565b5f608082840312801561061a575f5ffd5b506040516080810167ffffffffffffffff8111828210171561063e5761063e610530565b604090815283518252602080850151908301528381015190820152606092830151928101929092525091905056fea264697066735822122023f23583a13bcfa59b333273080d16babd137f53a17423449d2172749a83334664736f6c63430008220033",
    "sourceMap": "277:2574:274:-:0;;;1499:126;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;1544:19:274;;1536:59;;;;-1:-1:-1;;;1536:59:274;;511:2:388;1536:59:274;;;493:21:388;550:2;530:18;;;523:30;589:29;569:18;;;562:57;636:18;;1536:59:274;;;;;;;;-1:-1:-1;;;;;1606:12:274;;;277:2574;;14:290:388;84:6;137:2;125:9;116:7;112:23;108:32;105:52;;;153:1;150;143:12;105:52;179:16;;-1:-1:-1;;;;;224:31:388;;214:42;;204:70;;270:1;267;260:12;204:70;293:5;14:290;-1:-1:-1;;;14:290:388:o;309:351::-;277:2574:274;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561000f575f5ffd5b5060043610610060575f3560e01c80633fc8cef3146100645780634c84c1c8146100a85780639ee2e58a146100b2578063a217fddf146100e2578063c81cbaa1146100e9578063ffa1ad7414610110575b5f5ffd5b61008b7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b6100b0610141565b005b7f7b111df2df6f5a9b268b1bd644ca4cc91320a3b71dec030a7152e738a45d30255b60405190815260200161009f565b6100d45f81565b6100d47f68bf109b95a5c15fb2bb99041323c27d15f8675e11bf7420a1cd6ad64c394f4681565b610134604051806040016040528060058152602001640312e302e360dc1b81525081565b60405161009f91906104d5565b6101496103f1565b7f68bf109b95a5c15fb2bb99041323c27d15f8675e11bf7420a1cd6ad64c394f465f7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc0054604051632474521560e21b8152600481018490523360248201526001600160a01b03909116915081906391d1485490604401602060405180830381865afa1580156101da573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101fe919061050a565b338390916102355760405163e2517d3f60e01b81526001600160a01b03909216600483015260248201526044015b60405180910390fd5b50506102666102617f7b111df2df6f5a9b268b1bd644ca4cc91320a3b71dec030a7152e738a45d302590565b61043b565b6102b25760405162461bcd60e51b815260206004820181905260248201527f5772617050726f787945544846616365742f696e76616c69642d616374696f6e604482015260640161022c565b7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc01546001600160a01b031680315f8190036102ee5750506103c4565b604051631ae3f27f60e31b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152606060248301525f60648301526044820183905283169063d71f93f8906084015f604051808303815f875af1158015610366573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f1916820160405261038d9190810190610575565b506040518181527fc6090583b96fe69e99eb4c5ac69d772e1b3a309373a42482993d5dc2d92c9a9b9060200160405180910390a150505b50506103ef60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0080546001190161043557604051633ee5aeb560e01b815260040160405180910390fd5b60029055565b5f807f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc006002015460405160016221581760e21b03198152600481018590526001600160a01b039091169063ff7a9fa490602401608060405180830381865afa1580156104a9573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104cd9190610609565b511192915050565b602081525f82518060208401528060208501604085015e5f604082850101526040601f19601f83011684010191505092915050565b5f6020828403121561051a575f5ffd5b81518015158114610529575f5ffd5b9392505050565b634e487b7160e01b5f52604160045260245ffd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561056d5761056d610530565b604052919050565b5f60208284031215610585575f5ffd5b815167ffffffffffffffff81111561059b575f5ffd5b8201601f810184136105ab575f5ffd5b805167ffffffffffffffff8111156105c5576105c5610530565b6105d8601f8201601f1916602001610544565b8181528560208385010111156105ec575f5ffd5b8160208401602083015e5f91810160200191909152949350505050565b5f608082840312801561061a575f5ffd5b506040516080810167ffffffffffffffff8111828210171561063e5761063e610530565b604090815283518252602080850151908301528381015190820152606092830151928101929092525091905056fea264697066735822122023f23583a13bcfa59b333273080d16babd137f53a17423449d2172749a83334664736f6c63430008220033",
    "sourceMap": "277:2574:274:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1150:38;;;;;;;;-1:-1:-1;;;;;178:32:388;;;160:51;;148:2;133:18;1150:38:274;;;;;;;;1974:423;;;:::i;:::-;;2746:102;684:33;2746:102;;;368:25:388;;;356:2;341:18;2746:102:274;222:177:388;870:58:218;;924:4;870:58;;962:77;;1012:27;962:77;;751:49:274;;;;;;;;;;;;;;;-1:-1:-1;;;751:49:274;;;;;;;;;;;;:::i;1974:423::-;3251:21:160;:19;:21::i;:::-;1012:27:218::1;1392:22;1053:34:214::0;1417:44:218;1493:57:::1;::::0;-1:-1:-1;;;1493:57:218;;::::1;::::0;::::1;1001:25:388::0;;;1539:10:218::1;1042:18:388::0;;;1035:60;-1:-1:-1;;;;;1417:44:218;;::::1;::::0;-1:-1:-1;1417:44:218;;1493:39:::1;::::0;974:18:388;;1493:57:218::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1597:10;1609:4;1472:152;;;;;::::0;-1:-1:-1;;;1472:152:218;;-1:-1:-1;;;;;1580:32:388;;;1472:152:218::1;::::0;::::1;1562:51:388::0;1629:18;;;1622:34;1535:18;;1472:152:218::1;;;;;;;;;;;2067:36:274::2;2084:18;684:33:::0;;2746:102;2084:18:::2;2067:16;:36::i;:::-;2059:81;;;::::0;-1:-1:-1;;;2059:81:274;;1869:2:388;2059:81:274::2;::::0;::::2;1851:21:388::0;;;1888:18;;;1881:30;1947:34;1927:18;;;1920:62;1999:18;;2059:81:274::2;1667:356:388::0;2059:81:274::2;2167:35:::0;;-1:-1:-1;;;;;2167:35:274::2;2233:13:::0;::::2;2151;2261:14:::0;;;2257:27:::2;;2277:7;;;;2257:27;2294:53;::::0;-1:-1:-1;;;2294:53:274;;-1:-1:-1;;;;;2327:4:274::2;2285:32:388::0;;2294:53:274::2;::::0;::::2;2267:51:388::0;2354:2;2334:18;;;2327:30;-1:-1:-1;2373:18:388;;;2366:29;2447:18;;;2440:34;;;2294:32:274;::::2;::::0;::::2;::::0;2412:19:388;;2294:53:274::2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;;::::2;-1:-1:-1::0;;2294:53:274::2;::::0;::::2;;::::0;::::2;::::0;;;::::2;::::0;::::2;:::i;:::-;-1:-1:-1::0;2363:27:274::2;::::0;368:25:388;;;2363:27:274::2;::::0;356:2:388;341:18;2363:27:274::2;;;;;;;2049:348;;1635:1:218;1382:261:::1;3282:1:160;3293:20:::0;1805:1;2388:30;3969:23;3716:283;3293:20;1974:423:274:o;3326:384:160:-;2388:30;3526:9;;-1:-1:-1;;3526:20:160;3522:88;;3569:30;;-1:-1:-1;;;3569:30:160;;;;;;;;;;;3522:88;1847:1;3684:19;;3326:384::o;2912:203:218:-;2974:4;;1053:34:214;3022:40:218;;;2997:97;;-1:-1:-1;;;;;;2997:97:218;;;;;368:25:388;;;-1:-1:-1;;;;;3022:40:218;;;;2997:92;;341:18:388;;2997:97:218;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:107;:111;;2912:203;-1:-1:-1;;2912:203:218:o;404:418:388:-;553:2;542:9;535:21;516:4;585:6;579:13;628:6;623:2;612:9;608:18;601:34;687:6;682:2;674:6;670:15;665:2;654:9;650:18;644:50;743:1;738:2;729:6;718:9;714:22;710:31;703:42;813:2;806;802:7;797:2;789:6;785:15;781:29;770:9;766:45;762:54;754:62;;;404:418;;;;:::o;1106:277::-;1173:6;1226:2;1214:9;1205:7;1201:23;1197:32;1194:52;;;1242:1;1239;1232:12;1194:52;1274:9;1268:16;1327:5;1320:13;1313:21;1306:5;1303:32;1293:60;;1349:1;1346;1339:12;1293:60;1372:5;1106:277;-1:-1:-1;;;1106:277:388:o;2485:127::-;2546:10;2541:3;2537:20;2534:1;2527:31;2577:4;2574:1;2567:15;2601:4;2598:1;2591:15;2617:275;2688:2;2682:9;2753:2;2734:13;;-1:-1:-1;;2730:27:388;2718:40;;2788:18;2773:34;;2809:22;;;2770:62;2767:88;;;2835:18;;:::i;:::-;2871:2;2864:22;2617:275;;-1:-1:-1;2617:275:388:o;2897:755::-;2976:6;3029:2;3017:9;3008:7;3004:23;3000:32;2997:52;;;3045:1;3042;3035:12;2997:52;3078:9;3072:16;3111:18;3103:6;3100:30;3097:50;;;3143:1;3140;3133:12;3097:50;3166:22;;3219:4;3211:13;;3207:27;-1:-1:-1;3197:55:388;;3248:1;3245;3238:12;3197:55;3281:2;3275:9;3307:18;3299:6;3296:30;3293:56;;;3329:18;;:::i;:::-;3371:57;3418:2;3395:17;;-1:-1:-1;;3391:31:388;3424:2;3387:40;3371:57;:::i;:::-;3451:6;3444:5;3437:21;3499:7;3494:2;3485:6;3481:2;3477:15;3473:24;3470:37;3467:57;;;3520:1;3517;3510:12;3467:57;3568:6;3563:2;3559;3555:11;3550:2;3543:5;3539:14;3533:42;3620:1;3595:18;;;3615:2;3591:27;3584:38;;;;3599:5;2897:755;-1:-1:-1;;;;2897:755:388:o;3839:888::-;3942:6;4002:3;3990:9;3981:7;3977:23;3973:33;4018:2;4015:22;;;4033:1;4030;4023:12;4015:22;-1:-1:-1;4102:2:388;4096:9;4144:3;4132:16;;4178:18;4163:34;;4199:22;;;4160:62;4157:88;;;4225:18;;:::i;:::-;4261:2;4254:22;;;4317:16;;4342:21;;4429:2;4414:18;;;4408:25;4449:15;;;4442:32;4525:18;;;4519:25;4560:15;;;4553:32;4651:2;4636:18;;;4630:25;4671:15;;;4664:32;;;;-1:-1:-1;4349:6:388;3839:888;-1:-1:-1;3839:888:388:o",
    "linkReferences": {},
    "immutableReferences": {
      "99483": [
        {
          "start": 105,
          "length": 32
        },
        {
          "start": 773,
          "length": 32
        }
      ]
    }
  },
  "methodIdentifiers": {
    "ALLOCATOR_ROLE()": "c81cbaa1",
    "DEFAULT_ADMIN_ROLE()": "a217fddf",
    "VERSION()": "ffa1ad74",
    "weth()": "3fc8cef3",
    "wrapAll()": "4c84c1c8",
    "wrapRateLimitKey()": "9ee2e58a"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.34+commit.80d5c536\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"weth_\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"AccessControlUnauthorizedAccount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidInitialization\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotInitializing\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"version\",\"type\":\"uint64\"}],\"name\":\"Initialized\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"ethAmount\",\"type\":\"uint256\"}],\"name\":\"WrapProxyETHWrap\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"ALLOCATOR_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"DEFAULT_ADMIN_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"VERSION\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"weth\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"wrapAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"wrapRateLimitKey\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"InvalidInitialization()\":[{\"details\":\"The contract is already initialized.\"}],\"NotInitializing()\":[{\"details\":\"The contract is not initializing.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"events\":{\"Initialized(uint64)\":{\"details\":\"Triggered when the contract has been initialized or reinitialized.\"},\"WrapProxyETHWrap(uint256)\":{\"params\":{\"ethAmount\":\"Amount of ETH wrapped.\"}}},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"AccessControlUnauthorizedAccount(address,bytes32)\":[{\"notice\":\"Thrown when a caller lacks the required access control role.\"}]},\"events\":{\"WrapProxyETHWrap(uint256)\":{\"notice\":\"Emitted when the proxy's native ETH balance is wrapped to WETH.\"}},\"kind\":\"user\",\"methods\":{\"ALLOCATOR_ROLE()\":{\"notice\":\"Role identifier for allocator accounts authorized to execute facet operations.\"},\"DEFAULT_ADMIN_ROLE()\":{\"notice\":\"Role identifier for the default admin (bytes32(0)).\"},\"VERSION()\":{\"notice\":\"Semantic version string of the facet.\"},\"weth()\":{\"notice\":\"Address of the WETH token contract (immutable).\"},\"wrapAll()\":{\"notice\":\"Wraps the proxy's entire native ETH balance into WETH. No-op if the proxy has no ETH.\"},\"wrapRateLimitKey()\":{\"notice\":\"The derived rate limit key for wrap operations.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/facets/wrap-proxy-eth/WrapProxyETHFacet.sol\":\"WrapProxyETHFacet\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@ensdomains/=lib/uniswap-v4-periphery/lib/v4-core/node_modules/@ensdomains/\",\":@layerzerolabs/lz-evm-messagelib-v2/=lib/layerzero-v2/packages/layerzero-v2/evm/messagelib/\",\":@layerzerolabs/lz-evm-protocol-v2/=lib/layerzero-v2/packages/layerzero-v2/evm/protocol/\",\":@layerzerolabs/oft-evm/=lib/grove-xchain-helpers/lib/devtools/packages/oft-evm/\",\":@openzeppelin/contracts-upgradeable/=lib/oz-upgradeable/contracts/\",\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":@uniswap/v4-core/=lib/uniswap-v4-periphery/lib/v4-core/\",\":LayerZero-v2/=lib/grove-xchain-helpers/lib/\",\":aave-v3-core/=lib/aave-v3-origin/src/core/\",\":aave-v3-origin/=lib/aave-v3-origin/\",\":aave-v3-periphery/=lib/aave-v3-origin/src/periphery/\",\":devtools/=lib/grove-xchain-helpers/lib/devtools/packages/toolbox-foundry/src/\",\":ds-test/=lib/grove-address-registry/lib/forge-std/lib/ds-test/src/\",\":dss-allocator/=lib/dss-allocator/\",\":dss-interfaces/=lib/dss-test/lib/dss-interfaces/src/\",\":dss-test/=lib/dss-test/src/\",\":erc20-helpers/=lib/grove-basin/lib/erc20-helpers/src/\",\":erc4626-tests/=lib/metamorpho/lib/erc4626-tests/\",\":forge-gas-snapshot/=lib/uniswap-v4-periphery/lib/permit2/lib/forge-gas-snapshot/src/\",\":forge-std/=lib/forge-std/src/\",\":grove-address-registry/=lib/grove-address-registry/src/\",\":grove-basin/=lib/grove-basin/\",\":grove-xchain-helpers/=lib/grove-xchain-helpers/src/\",\":halmos-cheatcodes/=lib/grove-basin/lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/\",\":hardhat/=lib/uniswap-v4-periphery/lib/v4-core/node_modules/hardhat/\",\":layerzero-v2/=lib/layerzero-v2/\",\":layerzerolabs/oapp-evm/=lib/grove-xchain-helpers/lib/devtools/packages/oapp-evm/\",\":metamorpho/=lib/metamorpho/src/\",\":morpho-blue/=lib/metamorpho/lib/morpho-blue/\",\":murky/=lib/metamorpho/lib/universal-rewards-distributor/lib/murky/src/\",\":openzeppelin-contracts-upgradeable/=lib/spark-vaults-v2/lib/openzeppelin-contracts-upgradeable/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/metamorpho/lib/universal-rewards-distributor/lib/openzeppelin-contracts/contracts/\",\":oz-upgradeable/=lib/oz-upgradeable/\",\":permit2/=lib/uniswap-v4-periphery/lib/permit2/\",\":solidity-bytes-utils/=lib/solidity-bytes-utils/\",\":solidity-utils/=lib/aave-v3-origin/lib/solidity-utils/\",\":solmate/=lib/uniswap-v4-periphery/lib/v4-core/lib/solmate/\",\":spark-address-registry/=lib/spark-address-registry/src/\",\":spark-psm/=lib/spark-psm/\",\":spark-vaults-v2/=lib/spark-vaults-v2/\",\":sparklend-address-registry/=lib/grove-basin/lib/xchain-ssr-oracle/lib/sparklend-address-registry/\",\":token-tests/=lib/spark-vaults-v2/lib/token-tests/src/\",\":uniswap-v4-periphery/=lib/uniswap-v4-periphery/\",\":universal-rewards-distributor/=lib/metamorpho/lib/universal-rewards-distributor/src/\",\":v4-core/=lib/uniswap-v4-periphery/lib/v4-core/src/\",\":xchain-helpers/=lib/xchain-helpers/src/\",\":xchain-ssr-oracle/=lib/grove-basin/lib/xchain-ssr-oracle/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/access/IAccessControl.sol\":{\"keccak256\":\"0xb6b36edd6a2999fd243ff226d6cbf84bd71af2432bbd0dfe19392996a1d9cb41\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1fd2f35495652e57e3f99bc6c510bc5f7dd398a176ea2e72d8ed730aebc6ca26\",\"dweb:/ipfs/QmTQV6X4gkikTib49cho5iDX3JvSQbdsoEChoDwrk3CbbH\"]},\"lib/openzeppelin-contracts/contracts/access/extensions/IAccessControlEnumerable.sol\":{\"keccak256\":\"0xc1435f102633849858e75d7bed14c636f25448ceb3406d82992b0f2df52f4306\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ce1815e3a1da24f91b8e2ec24cf09d0d46e0fbeddcbe2cb0d8b2e05b91ceb7b3\",\"dweb:/ipfs/QmYTy1AQB5EV5jwuGsB49yykng2oG3x5ss4bDjFNxk3He4\"]},\"lib/oz-upgradeable/contracts/proxy/utils/Initializable.sol\":{\"keccak256\":\"0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609\",\"dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM\"]},\"lib/oz-upgradeable/contracts/utils/ReentrancyGuardUpgradeable.sol\":{\"keccak256\":\"0xb44e086e941292cdc7f440de51478493894ef0b1aeccb0c4047445919f667f74\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://942dad22fbdc1669f025540ba63aa3ccfad5f8458fc5d4525b31ebf272e7af45\",\"dweb:/ipfs/Qmdo4X2M82aM3AMoW2kf2jhYkSCyC4T1pHNd6obdsDFnAB\"]},\"src/ControllerSharedStorage.sol\":{\"keccak256\":\"0x08b85a82fbcfb5d837ac222fe71c7a458bab9edd8cfe0df02b3c38d6780b4400\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://577a9d2fc6796614c022fe701c981faa4df931dd5346e21167fbc46f3e199985\",\"dweb:/ipfs/QmYRyEbGum5TJF4yYNksK2H2CbmqYdcqiri5ZtFKrc36k7\"]},\"src/facets/Facet.sol\":{\"keccak256\":\"0xe86c5d5b73af2713e4e6754267af20325421b72c88a1dbf6dfbe9978b259edc2\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://28c6bcfbb07742b4be8f7188a3a9af301a6570616cf97564eb80091c09001ca9\",\"dweb:/ipfs/QmchiTioPPk7YbTtVpLN33hRNu1CKJoTH69He4BtUyXimA\"]},\"src/facets/IFacet.sol\":{\"keccak256\":\"0x0f0acb5faa3c227edc594e69507f89f0f063712847f361fbc51dbc2e9dd51d0a\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://ded1143f96b28d02e5eae73cf84af8e72ac15b31e2737ae29dc962c2975eb34c\",\"dweb:/ipfs/QmNrdGdJkHC2YWBMx4dQmihdwuSs7XDNgf8NYzQUsZifT2\"]},\"src/facets/wrap-proxy-eth/IWrapProxyETHFacet.sol\":{\"keccak256\":\"0x4b16779c49595d7039cac032b4af379ba5463b86a5758876dc5121340cc182aa\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://a216523204a9fc3de3bfe2d5fcefef59d65edd896fd96e045f0f9ae01aaaf366\",\"dweb:/ipfs/QmWYT9GvHtqaVBKFGHwj3SA7iTyQzb4uVYS4NZhhPrSNCt\"]},\"src/facets/wrap-proxy-eth/WrapProxyETHFacet.sol\":{\"keccak256\":\"0x63769467dfb1793e493eefce145ad2729bee02064b177f85a22c347aaa0c096e\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://72415de8b7db8a928b2386cdc24ecc3e12350dfd885762fc41803f5131e73812\",\"dweb:/ipfs/QmdcE6TwA1poyD7RNS7SxBmQ4SwWtc35NVRa7ToKkz4cYZ\"]},\"src/interfaces/IALMProxy.sol\":{\"keccak256\":\"0xa965efa753f8b48b5b08f4b98699a95ab4671c2e6b8c53c514dae9bda250f80e\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://1188a471d62be8e9439a9ac311f4e872288a414348341d7d0095928b846c6d19\",\"dweb:/ipfs/QmcUkHyM2YuZM4UicTBg47oTCYHxmzMf6Hd16hWyfsCJEd\"]},\"src/interfaces/IAccessControls.sol\":{\"keccak256\":\"0x774a4156bb41a733bd219dd14cf7ea7b10007662ab1ea2bdc83ffc197ed09637\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://9e923dced22563718b532893e9a70b2656ed6fbc556539ef5e2fe47fc4cd1c6d\",\"dweb:/ipfs/QmSh9RSdnatrSnMCxhnmyT8m6NFkFzCDDLPnzDVpfKDxYJ\"]},\"src/interfaces/IRateLimits.sol\":{\"keccak256\":\"0x20ea43787a1ad8c78805bdc194e57c5838176c258985342242b7211bfe7e6a4a\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://76555b4d5238e3faa3ebfe6b8eea949623cc5882d3c77835324459b3c664c0d6\",\"dweb:/ipfs/QmcfhxoLBDZrdBweL6PAV74NFHnVCeSDS7geQhYHt4LfhF\"]}},\"version\":1}",
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
              "name": "weth_",
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
              "internalType": "uint256",
              "name": "ethAmount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "WrapProxyETHWrap",
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
          "name": "weth",
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
          "name": "wrapAll"
        },
        {
          "inputs": [],
          "stateMutability": "pure",
          "type": "function",
          "name": "wrapRateLimitKey",
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
        "methods": {},
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
          "weth()": {
            "notice": "Address of the WETH token contract (immutable)."
          },
          "wrapAll()": {
            "notice": "Wraps the proxy's entire native ETH balance into WETH. No-op if the proxy has no ETH."
          },
          "wrapRateLimitKey()": {
            "notice": "The derived rate limit key for wrap operations."
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
        "src/facets/wrap-proxy-eth/WrapProxyETHFacet.sol": "WrapProxyETHFacet"
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
      "src/facets/wrap-proxy-eth/IWrapProxyETHFacet.sol": {
        "keccak256": "0x4b16779c49595d7039cac032b4af379ba5463b86a5758876dc5121340cc182aa",
        "urls": [
          "bzz-raw://a216523204a9fc3de3bfe2d5fcefef59d65edd896fd96e045f0f9ae01aaaf366",
          "dweb:/ipfs/QmWYT9GvHtqaVBKFGHwj3SA7iTyQzb4uVYS4NZhhPrSNCt"
        ],
        "license": "AGPL-3.0-or-later"
      },
      "src/facets/wrap-proxy-eth/WrapProxyETHFacet.sol": {
        "keccak256": "0x63769467dfb1793e493eefce145ad2729bee02064b177f85a22c347aaa0c096e",
        "urls": [
          "bzz-raw://72415de8b7db8a928b2386cdc24ecc3e12350dfd885762fc41803f5131e73812",
          "dweb:/ipfs/QmdcE6TwA1poyD7RNS7SxBmQ4SwWtc35NVRa7ToKkz4cYZ"
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
      }
    },
    "version": 1
  },
  "storageLayout": {
    "storage": [],
    "types": {}
  },
  "ast": {
    "absolutePath": "src/facets/wrap-proxy-eth/WrapProxyETHFacet.sol",
    "id": 99563,
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
      "IWrapProxyETHFacet": [
        99455
      ],
      "WrapProxyETHFacet": [
        99562
      ]
    },
    "nodeType": "SourceUnit",
    "src": "46:2806:274",
    "nodes": [
      {
        "id": 99457,
        "nodeType": "PragmaDirective",
        "src": "46:24:274",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".34"
        ]
      },
      {
        "id": 99459,
        "nodeType": "ImportDirective",
        "src": "72:59:274",
        "nodes": [],
        "absolutePath": "src/interfaces/IALMProxy.sol",
        "file": "../../interfaces/IALMProxy.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 99563,
        "sourceUnit": 100082,
        "symbolAliases": [
          {
            "foreign": {
              "id": 99458,
              "name": "IALMProxy",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 100081,
              "src": "81:9:274",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 99461,
        "nodeType": "ImportDirective",
        "src": "133:39:274",
        "nodes": [],
        "absolutePath": "src/facets/IFacet.sol",
        "file": "../IFacet.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 99563,
        "sourceUnit": 82168,
        "symbolAliases": [
          {
            "foreign": {
              "id": 99460,
              "name": "IFacet",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 82167,
              "src": "142:6:274",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 99463,
        "nodeType": "ImportDirective",
        "src": "174:37:274",
        "nodes": [],
        "absolutePath": "src/facets/Facet.sol",
        "file": "../Facet.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 99563,
        "sourceUnit": 82139,
        "symbolAliases": [
          {
            "foreign": {
              "id": 99462,
              "name": "Facet",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 82138,
              "src": "183:5:274",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 99465,
        "nodeType": "ImportDirective",
        "src": "213:62:274",
        "nodes": [],
        "absolutePath": "src/facets/wrap-proxy-eth/IWrapProxyETHFacet.sol",
        "file": "./IWrapProxyETHFacet.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 99563,
        "sourceUnit": 99456,
        "symbolAliases": [
          {
            "foreign": {
              "id": 99464,
              "name": "IWrapProxyETHFacet",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 99455,
              "src": "222:18:274",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 99562,
        "nodeType": "ContractDefinition",
        "src": "277:2574:274",
        "nodes": [
          {
            "id": 99474,
            "nodeType": "VariableDeclaration",
            "src": "644:73:274",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_LIMIT_WRAP",
            "nameLocation": "670:11:274",
            "scope": 99562,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 99470,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "644:7:274",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "arguments": [
                {
                  "hexValue": "4c494d49545f575241505f50524f58595f455448",
                  "id": 99472,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "694:22:274",
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_7b111df2df6f5a9b268b1bd644ca4cc91320a3b71dec030a7152e738a45d3025",
                    "typeString": "literal_string \"LIMIT_WRAP_PROXY_ETH\""
                  },
                  "value": "LIMIT_WRAP_PROXY_ETH"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_7b111df2df6f5a9b268b1bd644ca4cc91320a3b71dec030a7152e738a45d3025",
                    "typeString": "literal_string \"LIMIT_WRAP_PROXY_ETH\""
                  }
                ],
                "id": 99471,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": -8,
                "src": "684:9:274",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                  "typeString": "function (bytes memory) pure returns (bytes32)"
                }
              },
              "id": 99473,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "684:33:274",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 99479,
            "nodeType": "VariableDeclaration",
            "src": "751:49:274",
            "nodes": [],
            "baseFunctions": [
              82166
            ],
            "constant": true,
            "documentation": {
              "id": 99475,
              "nodeType": "StructuredDocumentation",
              "src": "724:22:274",
              "text": "@inheritdoc IFacet"
            },
            "functionSelector": "ffa1ad74",
            "mutability": "constant",
            "name": "VERSION",
            "nameLocation": "783:7:274",
            "overrides": {
              "id": 99477,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "774:8:274"
            },
            "scope": 99562,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 99476,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "751:6:274",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "312e302e30",
              "id": 99478,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "793:7:274",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_06c015bd22b4c69690933c1058878ebdfef31f9aaae40bbe86d8a09fe1b2972c",
                "typeString": "literal_string \"1.0.0\""
              },
              "value": "1.0.0"
            },
            "visibility": "public"
          },
          {
            "id": 99483,
            "nodeType": "VariableDeclaration",
            "src": "1150:38:274",
            "nodes": [],
            "baseFunctions": [
              99448
            ],
            "constant": false,
            "documentation": {
              "id": 99480,
              "nodeType": "StructuredDocumentation",
              "src": "1111:34:274",
              "text": "@inheritdoc IWrapProxyETHFacet"
            },
            "functionSelector": "3fc8cef3",
            "mutability": "immutable",
            "name": "weth",
            "nameLocation": "1184:4:274",
            "overrides": {
              "id": 99482,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1175:8:274"
            },
            "scope": 99562,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 99481,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "1150:7:274",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 99503,
            "nodeType": "FunctionDefinition",
            "src": "1499:126:274",
            "nodes": [],
            "body": {
              "id": 99502,
              "nodeType": "Block",
              "src": "1526:99:274",
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
                        "id": 99494,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 99489,
                          "name": "weth_",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 99485,
                          "src": "1544:5:274",
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
                              "id": 99492,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1561:1:274",
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
                            "id": 99491,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1553:7:274",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 99490,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1553:7:274",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 99493,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1553:10:274",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1544:19:274",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5772617050726f787945544846616365742f7a65726f2d77657468",
                        "id": 99495,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1565:29:274",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_962f759c92a5e16282d8727d7a99da416edf132542d7cda2ce3e38f4d8869c02",
                          "typeString": "literal_string \"WrapProxyETHFacet/zero-weth\""
                        },
                        "value": "WrapProxyETHFacet/zero-weth"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_962f759c92a5e16282d8727d7a99da416edf132542d7cda2ce3e38f4d8869c02",
                          "typeString": "literal_string \"WrapProxyETHFacet/zero-weth\""
                        }
                      ],
                      "id": 99488,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1536:7:274",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 99496,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1536:59:274",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 99497,
                  "nodeType": "ExpressionStatement",
                  "src": "1536:59:274"
                },
                {
                  "expression": {
                    "id": 99500,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 99498,
                      "name": "weth",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 99483,
                      "src": "1606:4:274",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 99499,
                      "name": "weth_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 99485,
                      "src": "1613:5:274",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1606:12:274",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 99501,
                  "nodeType": "ExpressionStatement",
                  "src": "1606:12:274"
                }
              ]
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 99486,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 99485,
                  "mutability": "mutable",
                  "name": "weth_",
                  "nameLocation": "1519:5:274",
                  "nodeType": "VariableDeclaration",
                  "scope": 99503,
                  "src": "1511:13:274",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 99484,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1511:7:274",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1510:15:274"
            },
            "returnParameters": {
              "id": 99487,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1526:0:274"
            },
            "scope": 99562,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 99551,
            "nodeType": "FunctionDefinition",
            "src": "1974:423:274",
            "nodes": [],
            "body": {
              "id": 99550,
              "nodeType": "Block",
              "src": "2049:348:274",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 99515,
                              "name": "wrapRateLimitKey",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 99561,
                              "src": "2084:16:274",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 99516,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2084:18:274",
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
                          "id": 99514,
                          "name": "_rateLimitExists",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 82137,
                          "src": "2067:16:274",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view returns (bool)"
                          }
                        },
                        "id": 99517,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2067:36:274",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5772617050726f787945544846616365742f696e76616c69642d616374696f6e",
                        "id": 99518,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2105:34:274",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_13f6158e6f488b6b4fa9dc625d8a31dfc8915fe096cdd057e1051c85f0c1a4f1",
                          "typeString": "literal_string \"WrapProxyETHFacet/invalid-action\""
                        },
                        "value": "WrapProxyETHFacet/invalid-action"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_13f6158e6f488b6b4fa9dc625d8a31dfc8915fe096cdd057e1051c85f0c1a4f1",
                          "typeString": "literal_string \"WrapProxyETHFacet/invalid-action\""
                        }
                      ],
                      "id": 99513,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2059:7:274",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 99519,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2059:81:274",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 99520,
                  "nodeType": "ExpressionStatement",
                  "src": "2059:81:274"
                },
                {
                  "assignments": [
                    99522
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 99522,
                      "mutability": "mutable",
                      "name": "proxy",
                      "nameLocation": "2159:5:274",
                      "nodeType": "VariableDeclaration",
                      "scope": 99550,
                      "src": "2151:13:274",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 99521,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "2151:7:274",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 99526,
                  "initialValue": {
                    "expression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 99523,
                        "name": "_getSharedControllerStorage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 81431,
                        "src": "2167:27:274",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_SharedControllerStorage_$81420_storage_ptr_$",
                          "typeString": "function () pure returns (struct ControllerSharedStorage.SharedControllerStorage storage pointer)"
                        }
                      },
                      "id": 99524,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2167:29:274",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_SharedControllerStorage_$81420_storage_ptr",
                        "typeString": "struct ControllerSharedStorage.SharedControllerStorage storage pointer"
                      }
                    },
                    "id": 99525,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "2197:5:274",
                    "memberName": "proxy",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 81417,
                    "src": "2167:35:274",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2151:51:274"
                },
                {
                  "assignments": [
                    99528
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 99528,
                      "mutability": "mutable",
                      "name": "ethAmount",
                      "nameLocation": "2221:9:274",
                      "nodeType": "VariableDeclaration",
                      "scope": 99550,
                      "src": "2213:17:274",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 99527,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2213:7:274",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 99531,
                  "initialValue": {
                    "expression": {
                      "id": 99529,
                      "name": "proxy",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 99522,
                      "src": "2233:5:274",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 99530,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "2239:7:274",
                    "memberName": "balance",
                    "nodeType": "MemberAccess",
                    "src": "2233:13:274",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2213:33:274"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 99534,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 99532,
                      "name": "ethAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 99528,
                      "src": "2261:9:274",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 99533,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2274:1:274",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "2261:14:274",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 99536,
                  "nodeType": "IfStatement",
                  "src": "2257:27:274",
                  "trueBody": {
                    "functionReturnParameters": 99512,
                    "id": 99535,
                    "nodeType": "Return",
                    "src": "2277:7:274"
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 99541,
                        "name": "weth",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 99483,
                        "src": "2327:4:274",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "hexValue": "",
                        "id": 99542,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2333:2:274",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      },
                      {
                        "id": 99543,
                        "name": "ethAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 99528,
                        "src": "2337:9:274",
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
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "arguments": [
                          {
                            "id": 99538,
                            "name": "proxy",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 99522,
                            "src": "2304:5:274",
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
                          "id": 99537,
                          "name": "IALMProxy",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 100081,
                          "src": "2294:9:274",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IALMProxy_$100081_$",
                            "typeString": "type(contract IALMProxy)"
                          }
                        },
                        "id": 99539,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2294:16:274",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IALMProxy_$100081",
                          "typeString": "contract IALMProxy"
                        }
                      },
                      "id": 99540,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2311:15:274",
                      "memberName": "doCallWithValue",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 100064,
                      "src": "2294:32:274",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_payable$_t_address_$_t_bytes_memory_ptr_$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory,uint256) payable external returns (bytes memory)"
                      }
                    },
                    "id": 99544,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2294:53:274",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 99545,
                  "nodeType": "ExpressionStatement",
                  "src": "2294:53:274"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 99547,
                        "name": "ethAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 99528,
                        "src": "2380:9:274",
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
                      "id": 99546,
                      "name": "WrapProxyETHWrap",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 99438,
                      "src": "2363:16:274",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 99548,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2363:27:274",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 99549,
                  "nodeType": "EmitStatement",
                  "src": "2358:32:274"
                }
              ]
            },
            "baseFunctions": [
              99442
            ],
            "documentation": {
              "id": 99504,
              "nodeType": "StructuredDocumentation",
              "src": "1935:34:274",
              "text": "@inheritdoc IWrapProxyETHFacet"
            },
            "functionSelector": "4c84c1c8",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 99508,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 99507,
                  "name": "nonReentrant",
                  "nameLocations": [
                    "2011:12:274"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 70780,
                  "src": "2011:12:274"
                },
                "nodeType": "ModifierInvocation",
                "src": "2011:12:274"
              },
              {
                "arguments": [
                  {
                    "id": 99510,
                    "name": "ALLOCATOR_ROLE",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 82017,
                    "src": "2033:14:274",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 99511,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 99509,
                  "name": "onlyRole",
                  "nameLocations": [
                    "2024:8:274"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 82045,
                  "src": "2024:8:274"
                },
                "nodeType": "ModifierInvocation",
                "src": "2024:24:274"
              }
            ],
            "name": "wrapAll",
            "nameLocation": "1983:7:274",
            "overrides": {
              "id": 99506,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2002:8:274"
            },
            "parameters": {
              "id": 99505,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1990:2:274"
            },
            "returnParameters": {
              "id": 99512,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2049:0:274"
            },
            "scope": 99562,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 99561,
            "nodeType": "FunctionDefinition",
            "src": "2746:102:274",
            "nodes": [],
            "body": {
              "id": 99560,
              "nodeType": "Block",
              "src": "2813:35:274",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 99558,
                    "name": "_LIMIT_WRAP",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 99474,
                    "src": "2830:11:274",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 99557,
                  "id": 99559,
                  "nodeType": "Return",
                  "src": "2823:18:274"
                }
              ]
            },
            "baseFunctions": [
              99454
            ],
            "documentation": {
              "id": 99552,
              "nodeType": "StructuredDocumentation",
              "src": "2707:34:274",
              "text": "@inheritdoc IWrapProxyETHFacet"
            },
            "functionSelector": "9ee2e58a",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "wrapRateLimitKey",
            "nameLocation": "2755:16:274",
            "overrides": {
              "id": 99554,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2786:8:274"
            },
            "parameters": {
              "id": 99553,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2771:2:274"
            },
            "returnParameters": {
              "id": 99557,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 99556,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 99561,
                  "src": "2804:7:274",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 99555,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2804:7:274",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2803:9:274"
            },
            "scope": 99562,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 99466,
              "name": "IWrapProxyETHFacet",
              "nameLocations": [
                "307:18:274"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 99455,
              "src": "307:18:274"
            },
            "id": 99467,
            "nodeType": "InheritanceSpecifier",
            "src": "307:18:274"
          },
          {
            "baseName": {
              "id": 99468,
              "name": "Facet",
              "nameLocations": [
                "327:5:274"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 82138,
              "src": "327:5:274"
            },
            "id": 99469,
            "nodeType": "InheritanceSpecifier",
            "src": "327:5:274"
          }
        ],
        "canonicalName": "WrapProxyETHFacet",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          99562,
          82138,
          70840,
          70483,
          81432,
          99455,
          82167
        ],
        "name": "WrapProxyETHFacet",
        "nameLocation": "286:17:274",
        "scope": 99563,
        "usedErrors": [
          70246,
          70249,
          70742,
          82148
        ],
        "usedEvents": [
          70254,
          99438
        ]
      }
    ],
    "license": "AGPL-3.0-or-later"
  },
  "id": 274
} as const;
