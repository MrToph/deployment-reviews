// Keep this as a TS literal object instead of importing JSON directly.
// TypeScript JSON imports widen to generic string/number/array types, but
// Assay needs literal storage labels, bytecode immutable ids, offsets, and lengths
// to provide proper validation types for the dev experience.
export default {
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
      "name": "getTakeRateLimitKey",
      "inputs": [
        {
          "name": "sparkVault",
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
      "name": "take",
      "inputs": [
        {
          "name": "sparkVault",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "assetAmount",
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
      "name": "SparkVaultTake",
      "inputs": [
        {
          "name": "sparkVault",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "assetAmount",
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
    "object": "0x6080604052348015600e575f5ffd5b5061068f8061001c5f395ff3fe608060405234801561000f575f5ffd5b5060043610610055575f3560e01c80635218020814610059578063557b087c1461006e578063a217fddf14610094578063c81cbaa11461009b578063ffa1ad74146100c2575b5f5ffd5b61006c6100673660046104a9565b6100f3565b005b61008161007c3660046104d1565b610335565b6040519081526020015b60405180910390f35b6100815f81565b6100817f68bf109b95a5c15fb2bb99041323c27d15f8675e11bf7420a1cd6ad64c394f4681565b6100e6604051806040016040528060058152602001640312e302e360dc1b81525081565b60405161008b919061051f565b6100fb610366565b7f68bf109b95a5c15fb2bb99041323c27d15f8675e11bf7420a1cd6ad64c394f465f7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc0054604051632474521560e21b8152600481018490523360248201526001600160a01b03909116915081906391d1485490604401602060405180830381865afa15801561018c573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101b09190610531565b338390916101e65760405163e2517d3f60e01b81526001600160a01b039092166004830152602482015260440160405180910390fd5b50506101fa6101f485610335565b846103b0565b7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc015460408051602480820187905282518083039091018152604490910182526020810180516001600160e01b03166313f67bf160e21b1790529051631d56d26960e11b81526001600160a01b0390921691633aada4d29161028091889190600401610550565b5f604051808303815f875af115801561029b573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f191682016040526102c2919081019061058f565b50836001600160a01b03167fcbad38f70bc5be920ebd8eed95c7d8e22b476d1066ff1ffb28af8fdd08d95181846040516102fe91815260200190565b60405180910390a2505061033160017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b5050565b5f6103607f6308851b8d5124971e470b9e9c2b772d838474c039290fda74a0d3c311748b5b8361044a565b92915050565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f008054600119016103aa57604051633ee5aeb560e01b815260040160405180910390fd5b60029055565b7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc00600201546040516303bf076b60e41b815260048101849052602481018390526001600160a01b0390911690633bf076b0906044016020604051808303815f875af1158015610421573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104459190610642565b505050565b5f82826040516020016104709291909182526001600160a01b0316602082015260400190565b60405160208183030381529060405280519060200120905092915050565b80356001600160a01b03811681146104a4575f5ffd5b919050565b5f5f604083850312156104ba575f5ffd5b6104c38361048e565b946020939093013593505050565b5f602082840312156104e1575f5ffd5b6104ea8261048e565b9392505050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f6104ea60208301846104f1565b5f60208284031215610541575f5ffd5b815180151581146104ea575f5ffd5b6001600160a01b03831681526040602082018190525f90610573908301846104f1565b949350505050565b634e487b7160e01b5f52604160045260245ffd5b5f6020828403121561059f575f5ffd5b815167ffffffffffffffff8111156105b5575f5ffd5b8201601f810184136105c5575f5ffd5b805167ffffffffffffffff8111156105df576105df61057b565b604051601f8201601f19908116603f0116810167ffffffffffffffff8111828210171561060e5761060e61057b565b604052818152828201602001861015610625575f5ffd5b8160208401602083015e5f91810160200191909152949350505050565b5f60208284031215610652575f5ffd5b505191905056fea2646970667358221220c7502738d323761b44653a82364bebf13f04d1d6c4a469b6b88175d6a4b0e8cb64736f6c63430008220033",
    "sourceMap": "427:1816:257:-:0;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561000f575f5ffd5b5060043610610055575f3560e01c80635218020814610059578063557b087c1461006e578063a217fddf14610094578063c81cbaa11461009b578063ffa1ad74146100c2575b5f5ffd5b61006c6100673660046104a9565b6100f3565b005b61008161007c3660046104d1565b610335565b6040519081526020015b60405180910390f35b6100815f81565b6100817f68bf109b95a5c15fb2bb99041323c27d15f8675e11bf7420a1cd6ad64c394f4681565b6100e6604051806040016040528060058152602001640312e302e360dc1b81525081565b60405161008b919061051f565b6100fb610366565b7f68bf109b95a5c15fb2bb99041323c27d15f8675e11bf7420a1cd6ad64c394f465f7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc0054604051632474521560e21b8152600481018490523360248201526001600160a01b03909116915081906391d1485490604401602060405180830381865afa15801561018c573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101b09190610531565b338390916101e65760405163e2517d3f60e01b81526001600160a01b039092166004830152602482015260440160405180910390fd5b50506101fa6101f485610335565b846103b0565b7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc015460408051602480820187905282518083039091018152604490910182526020810180516001600160e01b03166313f67bf160e21b1790529051631d56d26960e11b81526001600160a01b0390921691633aada4d29161028091889190600401610550565b5f604051808303815f875af115801561029b573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f191682016040526102c2919081019061058f565b50836001600160a01b03167fcbad38f70bc5be920ebd8eed95c7d8e22b476d1066ff1ffb28af8fdd08d95181846040516102fe91815260200190565b60405180910390a2505061033160017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b5050565b5f6103607f6308851b8d5124971e470b9e9c2b772d838474c039290fda74a0d3c311748b5b8361044a565b92915050565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f008054600119016103aa57604051633ee5aeb560e01b815260040160405180910390fd5b60029055565b7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc00600201546040516303bf076b60e41b815260048101849052602481018390526001600160a01b0390911690633bf076b0906044016020604051808303815f875af1158015610421573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104459190610642565b505050565b5f82826040516020016104709291909182526001600160a01b0316602082015260400190565b60405160208183030381529060405280519060200120905092915050565b80356001600160a01b03811681146104a4575f5ffd5b919050565b5f5f604083850312156104ba575f5ffd5b6104c38361048e565b946020939093013593505050565b5f602082840312156104e1575f5ffd5b6104ea8261048e565b9392505050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f6104ea60208301846104f1565b5f60208284031215610541575f5ffd5b815180151581146104ea575f5ffd5b6001600160a01b03831681526040602082018190525f90610573908301846104f1565b949350505050565b634e487b7160e01b5f52604160045260245ffd5b5f6020828403121561059f575f5ffd5b815167ffffffffffffffff8111156105b5575f5ffd5b8201601f810184136105c5575f5ffd5b805167ffffffffffffffff8111156105df576105df61057b565b604051601f8201601f19908116603f0116810167ffffffffffffffff8111828210171561060e5761060e61057b565b604052818152828201602001861015610625575f5ffd5b8160208401602083015e5f91810160200191909152949350505050565b5f60208284031215610652575f5ffd5b505191905056fea2646970667358221220c7502738d323761b44653a82364bebf13f04d1d6c4a469b6b88175d6a4b0e8cb64736f6c63430008220033",
    "sourceMap": "427:1816:257:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1296:446;;;;;;:::i;:::-;;:::i;:::-;;2089:151;;;;;;:::i;:::-;;:::i;:::-;;;788:25:388;;;776:2;761:18;2089:151:257;;;;;;;;870:58:218;;924:4;870:58;;962:77;;1012:27;962:77;;899:49:257;;;;;;;;;;;;;;;-1:-1:-1;;;899:49:257;;;;;;;;;;;;:::i;1296:446::-;3251:21:160;:19;:21::i;:::-;1012:27:218::1;1392:22;1053:34:214::0;1417:44:218;1493:57:::1;::::0;-1:-1:-1;;;1493:57:218;;::::1;::::0;::::1;1517:25:388::0;;;1539:10:218::1;1558:18:388::0;;;1551:60;-1:-1:-1;;;;;1417:44:218;;::::1;::::0;-1:-1:-1;1417:44:218;;1493:39:::1;::::0;1490:18:388;;1493:57:218::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1597:10;1609:4;1472:152;;;;;::::0;-1:-1:-1;;;1472:152:218;;-1:-1:-1;;;;;2096:32:388;;;1472:152:218::1;::::0;::::1;2078:51:388::0;2145:18;;;2138:34;2051:18;;1472:152:218::1;;;;;;;;;;1453:64:257::2;1472:31;1492:10;1472:19;:31::i;:::-;1505:11;1453:18;:64::i;:::-;1538:35:::0;;1619:51:::2;::::0;;::::2;::::0;;::::2;788:25:388::0;;;1619:51:257;;;;;;;;;;761:18:388;;;;1619:51:257;;::::2;::::0;::::2;::::0;;-1:-1:-1;;;;;1619:51:257::2;-1:-1:-1::0;;;1619:51:257::2;::::0;;1528:152;;-1:-1:-1;;;1528:152:257;;-1:-1:-1;;;;;1538:35:257;;::::2;::::0;1528:53:::2;::::0;:152:::2;::::0;1595:10;;1619:51;1528:152:::2;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;;::::2;-1:-1:-1::0;;1528:152:257::2;::::0;::::2;;::::0;::::2;::::0;;;::::2;::::0;::::2;:::i;:::-;;1711:10;-1:-1:-1::0;;;;;1696:39:257::2;;1723:11;1696:39;;;;788:25:388::0;;776:2;761:18;;642:177;1696:39:257::2;;;;;;;;1382:261:218::1;3282:1:160;3293:20:::0;1805:1;2388:30;3969:23;3716:283;3293:20;1296:446:257;;:::o;2089:151::-;2168:7;2194:39;830:35;2222:10;2194:14;:39::i;:::-;2187:46;2089:151;-1:-1:-1;;2089:151:257:o;3326:384:160:-;2388:30;3526:9;;-1:-1:-1;;3526:20:160;3522:88;;3569:30;;-1:-1:-1;;;3569:30:160;;;;;;;;;;;3522:88;1847:1;3684:19;;3326:384::o;2133:174:218:-;1053:34:214;2221:40:218;;;2209:91;;-1:-1:-1;;;2209:91:218;;;;;3930:25:388;;;3971:18;;;3964:34;;;-1:-1:-1;;;;;2221:40:218;;;;2209:78;;3903:18:388;;2209:91:218;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;2133:174;;:::o;72:116:289:-;134:7;177:3;182:1;166:18;;;;;;;;1517:25:388;;;-1:-1:-1;;;;;1578:32:388;1573:2;1558:18;;1551:60;1505:2;1490:18;;1343:274;166:18:289;;;;;;;;;;;;;156:29;;;;;;149:36;;72:116;;;;:::o;14:173:388:-;82:20;;-1:-1:-1;;;;;131:31:388;;121:42;;111:70;;177:1;174;167:12;111:70;14:173;;;:::o;192:254::-;260:6;268;321:2;309:9;300:7;296:23;292:32;289:52;;;337:1;334;327:12;289:52;360:29;379:9;360:29;:::i;:::-;350:39;436:2;421:18;;;;408:32;;-1:-1:-1;;;192:254:388:o;451:186::-;510:6;563:2;551:9;542:7;538:23;534:32;531:52;;;579:1;576;569:12;531:52;602:29;621:9;602:29;:::i;:::-;592:39;451:186;-1:-1:-1;;;451:186:388:o;824:289::-;866:3;904:5;898:12;931:6;926:3;919:19;987:6;980:4;973:5;969:16;962:4;957:3;953:14;947:47;1039:1;1032:4;1023:6;1018:3;1014:16;1010:27;1003:38;1102:4;1095:2;1091:7;1086:2;1078:6;1074:15;1070:29;1065:3;1061:39;1057:50;1050:57;;;824:289;;;;:::o;1118:220::-;1267:2;1256:9;1249:21;1230:4;1287:45;1328:2;1317:9;1313:18;1305:6;1287:45;:::i;1622:277::-;1689:6;1742:2;1730:9;1721:7;1717:23;1713:32;1710:52;;;1758:1;1755;1748:12;1710:52;1790:9;1784:16;1843:5;1836:13;1829:21;1822:5;1819:32;1809:60;;1865:1;1862;1855:12;2365:315;-1:-1:-1;;;;;2540:32:388;;2522:51;;2609:2;2604;2589:18;;2582:30;;;-1:-1:-1;;2629:45:388;;2655:18;;2647:6;2629:45;:::i;:::-;2621:53;2365:315;-1:-1:-1;;;;2365:315:388:o;2685:127::-;2746:10;2741:3;2737:20;2734:1;2727:31;2777:4;2774:1;2767:15;2801:4;2798:1;2791:15;2817:934;2896:6;2949:2;2937:9;2928:7;2924:23;2920:32;2917:52;;;2965:1;2962;2955:12;2917:52;2998:9;2992:16;3031:18;3023:6;3020:30;3017:50;;;3063:1;3060;3053:12;3017:50;3086:22;;3139:4;3131:13;;3127:27;-1:-1:-1;3117:55:388;;3168:1;3165;3158:12;3117:55;3201:2;3195:9;3227:18;3219:6;3216:30;3213:56;;;3249:18;;:::i;:::-;3298:2;3292:9;3390:2;3352:17;;-1:-1:-1;;3348:31:388;;;3381:2;3344:40;3340:54;3328:67;;3425:18;3410:34;;3446:22;;;3407:62;3404:88;;;3472:18;;:::i;:::-;3508:2;3501:22;3532;;;3573:15;;;3590:2;3569:24;3566:37;-1:-1:-1;3563:57:388;;;3616:1;3613;3606:12;3563:57;3665:6;3660:2;3656;3652:11;3647:2;3639:6;3635:15;3629:43;3718:1;3692:19;;;3713:2;3688:28;3681:39;;;;3696:6;2817:934;-1:-1:-1;;;;2817:934:388:o;4009:184::-;4079:6;4132:2;4120:9;4111:7;4107:23;4103:32;4100:52;;;4148:1;4145;4138:12;4100:52;-1:-1:-1;4171:16:388;;4009:184;-1:-1:-1;4009:184:388:o",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "ALLOCATOR_ROLE()": "c81cbaa1",
    "DEFAULT_ADMIN_ROLE()": "a217fddf",
    "VERSION()": "ffa1ad74",
    "getTakeRateLimitKey(address)": "557b087c",
    "take(address,uint256)": "52180208"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.34+commit.80d5c536\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"AccessControlUnauthorizedAccount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidInitialization\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotInitializing\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"version\",\"type\":\"uint64\"}],\"name\":\"Initialized\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sparkVault\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assetAmount\",\"type\":\"uint256\"}],\"name\":\"SparkVaultTake\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"ALLOCATOR_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"DEFAULT_ADMIN_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"VERSION\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sparkVault\",\"type\":\"address\"}],\"name\":\"getTakeRateLimitKey\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sparkVault\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"assetAmount\",\"type\":\"uint256\"}],\"name\":\"take\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"InvalidInitialization()\":[{\"details\":\"The contract is already initialized.\"}],\"NotInitializing()\":[{\"details\":\"The contract is not initializing.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"events\":{\"Initialized(uint64)\":{\"details\":\"Triggered when the contract has been initialized or reinitialized.\"},\"SparkVaultTake(address,uint256)\":{\"params\":{\"assetAmount\":\"Amount of assets taken.\",\"sparkVault\":\"Address of the Spark vault.\"}}},\"kind\":\"dev\",\"methods\":{\"getTakeRateLimitKey(address)\":{\"params\":{\"sparkVault\":\"Address of the Spark vault.\"},\"returns\":{\"_0\":\"       Derived rate limit key.\"}},\"take(address,uint256)\":{\"params\":{\"assetAmount\":\"Amount of assets to take.\",\"sparkVault\":\"Address of the Spark vault.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"AccessControlUnauthorizedAccount(address,bytes32)\":[{\"notice\":\"Thrown when a caller lacks the required access control role.\"}]},\"events\":{\"SparkVaultTake(address,uint256)\":{\"notice\":\"Emitted when assets are taken from a Spark vault.\"}},\"kind\":\"user\",\"methods\":{\"ALLOCATOR_ROLE()\":{\"notice\":\"Role identifier for allocator accounts authorized to execute facet operations.\"},\"DEFAULT_ADMIN_ROLE()\":{\"notice\":\"Role identifier for the default admin (bytes32(0)).\"},\"VERSION()\":{\"notice\":\"Semantic version string of the facet.\"},\"getTakeRateLimitKey(address)\":{\"notice\":\"Returns the derived take rate limit key for a Spark vault.\"},\"take(address,uint256)\":{\"notice\":\"Takes (draws) assets from a Spark vault to the proxy.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/facets/spark-vault/SparkVaultFacet.sol\":\"SparkVaultFacet\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@ensdomains/=lib/uniswap-v4-periphery/lib/v4-core/node_modules/@ensdomains/\",\":@layerzerolabs/lz-evm-messagelib-v2/=lib/layerzero-v2/packages/layerzero-v2/evm/messagelib/\",\":@layerzerolabs/lz-evm-protocol-v2/=lib/layerzero-v2/packages/layerzero-v2/evm/protocol/\",\":@layerzerolabs/oft-evm/=lib/grove-xchain-helpers/lib/devtools/packages/oft-evm/\",\":@openzeppelin/contracts-upgradeable/=lib/oz-upgradeable/contracts/\",\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":@uniswap/v4-core/=lib/uniswap-v4-periphery/lib/v4-core/\",\":LayerZero-v2/=lib/grove-xchain-helpers/lib/\",\":aave-v3-core/=lib/aave-v3-origin/src/core/\",\":aave-v3-origin/=lib/aave-v3-origin/\",\":aave-v3-periphery/=lib/aave-v3-origin/src/periphery/\",\":devtools/=lib/grove-xchain-helpers/lib/devtools/packages/toolbox-foundry/src/\",\":ds-test/=lib/grove-address-registry/lib/forge-std/lib/ds-test/src/\",\":dss-allocator/=lib/dss-allocator/\",\":dss-interfaces/=lib/dss-test/lib/dss-interfaces/src/\",\":dss-test/=lib/dss-test/src/\",\":erc20-helpers/=lib/grove-basin/lib/erc20-helpers/src/\",\":erc4626-tests/=lib/metamorpho/lib/erc4626-tests/\",\":forge-gas-snapshot/=lib/uniswap-v4-periphery/lib/permit2/lib/forge-gas-snapshot/src/\",\":forge-std/=lib/forge-std/src/\",\":grove-address-registry/=lib/grove-address-registry/src/\",\":grove-basin/=lib/grove-basin/\",\":grove-xchain-helpers/=lib/grove-xchain-helpers/src/\",\":halmos-cheatcodes/=lib/grove-basin/lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/\",\":hardhat/=lib/uniswap-v4-periphery/lib/v4-core/node_modules/hardhat/\",\":layerzero-v2/=lib/layerzero-v2/\",\":layerzerolabs/oapp-evm/=lib/grove-xchain-helpers/lib/devtools/packages/oapp-evm/\",\":metamorpho/=lib/metamorpho/src/\",\":morpho-blue/=lib/metamorpho/lib/morpho-blue/\",\":murky/=lib/metamorpho/lib/universal-rewards-distributor/lib/murky/src/\",\":openzeppelin-contracts-upgradeable/=lib/spark-vaults-v2/lib/openzeppelin-contracts-upgradeable/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/metamorpho/lib/universal-rewards-distributor/lib/openzeppelin-contracts/contracts/\",\":oz-upgradeable/=lib/oz-upgradeable/\",\":permit2/=lib/uniswap-v4-periphery/lib/permit2/\",\":solidity-bytes-utils/=lib/solidity-bytes-utils/\",\":solidity-utils/=lib/aave-v3-origin/lib/solidity-utils/\",\":solmate/=lib/uniswap-v4-periphery/lib/v4-core/lib/solmate/\",\":spark-address-registry/=lib/spark-address-registry/src/\",\":spark-psm/=lib/spark-psm/\",\":spark-vaults-v2/=lib/spark-vaults-v2/\",\":sparklend-address-registry/=lib/grove-basin/lib/xchain-ssr-oracle/lib/sparklend-address-registry/\",\":token-tests/=lib/spark-vaults-v2/lib/token-tests/src/\",\":uniswap-v4-periphery/=lib/uniswap-v4-periphery/\",\":universal-rewards-distributor/=lib/metamorpho/lib/universal-rewards-distributor/src/\",\":v4-core/=lib/uniswap-v4-periphery/lib/v4-core/src/\",\":xchain-helpers/=lib/xchain-helpers/src/\",\":xchain-ssr-oracle/=lib/grove-basin/lib/xchain-ssr-oracle/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/access/IAccessControl.sol\":{\"keccak256\":\"0xb6b36edd6a2999fd243ff226d6cbf84bd71af2432bbd0dfe19392996a1d9cb41\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1fd2f35495652e57e3f99bc6c510bc5f7dd398a176ea2e72d8ed730aebc6ca26\",\"dweb:/ipfs/QmTQV6X4gkikTib49cho5iDX3JvSQbdsoEChoDwrk3CbbH\"]},\"lib/openzeppelin-contracts/contracts/access/extensions/IAccessControlEnumerable.sol\":{\"keccak256\":\"0xc1435f102633849858e75d7bed14c636f25448ceb3406d82992b0f2df52f4306\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ce1815e3a1da24f91b8e2ec24cf09d0d46e0fbeddcbe2cb0d8b2e05b91ceb7b3\",\"dweb:/ipfs/QmYTy1AQB5EV5jwuGsB49yykng2oG3x5ss4bDjFNxk3He4\"]},\"lib/oz-upgradeable/contracts/proxy/utils/Initializable.sol\":{\"keccak256\":\"0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609\",\"dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM\"]},\"lib/oz-upgradeable/contracts/utils/ReentrancyGuardUpgradeable.sol\":{\"keccak256\":\"0xb44e086e941292cdc7f440de51478493894ef0b1aeccb0c4047445919f667f74\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://942dad22fbdc1669f025540ba63aa3ccfad5f8458fc5d4525b31ebf272e7af45\",\"dweb:/ipfs/Qmdo4X2M82aM3AMoW2kf2jhYkSCyC4T1pHNd6obdsDFnAB\"]},\"src/ControllerSharedStorage.sol\":{\"keccak256\":\"0x08b85a82fbcfb5d837ac222fe71c7a458bab9edd8cfe0df02b3c38d6780b4400\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://577a9d2fc6796614c022fe701c981faa4df931dd5346e21167fbc46f3e199985\",\"dweb:/ipfs/QmYRyEbGum5TJF4yYNksK2H2CbmqYdcqiri5ZtFKrc36k7\"]},\"src/facets/Facet.sol\":{\"keccak256\":\"0xe86c5d5b73af2713e4e6754267af20325421b72c88a1dbf6dfbe9978b259edc2\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://28c6bcfbb07742b4be8f7188a3a9af301a6570616cf97564eb80091c09001ca9\",\"dweb:/ipfs/QmchiTioPPk7YbTtVpLN33hRNu1CKJoTH69He4BtUyXimA\"]},\"src/facets/IFacet.sol\":{\"keccak256\":\"0x0f0acb5faa3c227edc594e69507f89f0f063712847f361fbc51dbc2e9dd51d0a\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://ded1143f96b28d02e5eae73cf84af8e72ac15b31e2737ae29dc962c2975eb34c\",\"dweb:/ipfs/QmNrdGdJkHC2YWBMx4dQmihdwuSs7XDNgf8NYzQUsZifT2\"]},\"src/facets/spark-vault/ISparkVaultFacet.sol\":{\"keccak256\":\"0x829e3a344cd0e9bbbdac9662ff64f5b310040c9bc75f5ec3b6f9acdacd654d23\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://27946777deafdd69d3cef51adbf73121938444ed8bc3615acc355920ee01b52b\",\"dweb:/ipfs/QmdXPt7kk8mXP5bFti1uLDwyuqN1hAmsxt76U1Qw15TpVM\"]},\"src/facets/spark-vault/SparkVaultFacet.sol\":{\"keccak256\":\"0x03a36b2e3005c2b3971d97594a516892591d24de01ec3ea12452e58648a83be8\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://f0a45cd2a58ae0ac6466454f7857e765b3aeeb3342e1ad5241fb9c31ce18314d\",\"dweb:/ipfs/Qmdjc7TCgmSZ9z7hc6tCaTEY8NooCpuz4BF69jcRFQK1T1\"]},\"src/interfaces/IALMProxy.sol\":{\"keccak256\":\"0xa965efa753f8b48b5b08f4b98699a95ab4671c2e6b8c53c514dae9bda250f80e\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://1188a471d62be8e9439a9ac311f4e872288a414348341d7d0095928b846c6d19\",\"dweb:/ipfs/QmcUkHyM2YuZM4UicTBg47oTCYHxmzMf6Hd16hWyfsCJEd\"]},\"src/interfaces/IAccessControls.sol\":{\"keccak256\":\"0x774a4156bb41a733bd219dd14cf7ea7b10007662ab1ea2bdc83ffc197ed09637\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://9e923dced22563718b532893e9a70b2656ed6fbc556539ef5e2fe47fc4cd1c6d\",\"dweb:/ipfs/QmSh9RSdnatrSnMCxhnmyT8m6NFkFzCDDLPnzDVpfKDxYJ\"]},\"src/interfaces/IRateLimits.sol\":{\"keccak256\":\"0x20ea43787a1ad8c78805bdc194e57c5838176c258985342242b7211bfe7e6a4a\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://76555b4d5238e3faa3ebfe6b8eea949623cc5882d3c77835324459b3c664c0d6\",\"dweb:/ipfs/QmcfhxoLBDZrdBweL6PAV74NFHnVCeSDS7geQhYHt4LfhF\"]},\"src/libraries/RateLimitHelpers.sol\":{\"keccak256\":\"0x2aa83bc51a795f37ac31eea7e8c92563ba355f545cfde617d782b145da1f32cf\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://0bed4da7e8f6171839257219f3486f047102f3d7f69999aeeb96091a7d49e4b7\",\"dweb:/ipfs/QmRKHfUNZi6eogCUofurpBTjpWqfCLUsz3t48VXyU64jqs\"]}},\"version\":1}",
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
              "name": "sparkVault",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "assetAmount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "SparkVaultTake",
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
              "name": "sparkVault",
              "type": "address"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "getTakeRateLimitKey",
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
              "name": "sparkVault",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "assetAmount",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "take"
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "getTakeRateLimitKey(address)": {
            "params": {
              "sparkVault": "Address of the Spark vault."
            },
            "returns": {
              "_0": "       Derived rate limit key."
            }
          },
          "take(address,uint256)": {
            "params": {
              "assetAmount": "Amount of assets to take.",
              "sparkVault": "Address of the Spark vault."
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
          "getTakeRateLimitKey(address)": {
            "notice": "Returns the derived take rate limit key for a Spark vault."
          },
          "take(address,uint256)": {
            "notice": "Takes (draws) assets from a Spark vault to the proxy."
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
        "src/facets/spark-vault/SparkVaultFacet.sol": "SparkVaultFacet"
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
      "src/facets/spark-vault/ISparkVaultFacet.sol": {
        "keccak256": "0x829e3a344cd0e9bbbdac9662ff64f5b310040c9bc75f5ec3b6f9acdacd654d23",
        "urls": [
          "bzz-raw://27946777deafdd69d3cef51adbf73121938444ed8bc3615acc355920ee01b52b",
          "dweb:/ipfs/QmdXPt7kk8mXP5bFti1uLDwyuqN1hAmsxt76U1Qw15TpVM"
        ],
        "license": "AGPL-3.0-or-later"
      },
      "src/facets/spark-vault/SparkVaultFacet.sol": {
        "keccak256": "0x03a36b2e3005c2b3971d97594a516892591d24de01ec3ea12452e58648a83be8",
        "urls": [
          "bzz-raw://f0a45cd2a58ae0ac6466454f7857e765b3aeeb3342e1ad5241fb9c31ce18314d",
          "dweb:/ipfs/Qmdjc7TCgmSZ9z7hc6tCaTEY8NooCpuz4BF69jcRFQK1T1"
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
    "absolutePath": "src/facets/spark-vault/SparkVaultFacet.sol",
    "id": 92338,
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
      "ISparkVaultFacet": [
        92246
      ],
      "ISparkVaultLike": [
        92264
      ],
      "SparkVaultFacet": [
        92337
      ],
      "makeAddressKey": [
        100714
      ]
    },
    "nodeType": "SourceUnit",
    "src": "46:2198:257",
    "nodes": [
      {
        "id": 92248,
        "nodeType": "PragmaDirective",
        "src": "46:24:257",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".34"
        ]
      },
      {
        "id": 92250,
        "nodeType": "ImportDirective",
        "src": "72:70:257",
        "nodes": [],
        "absolutePath": "src/libraries/RateLimitHelpers.sol",
        "file": "../../libraries/RateLimitHelpers.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 92338,
        "sourceUnit": 100913,
        "symbolAliases": [
          {
            "foreign": {
              "id": 92249,
              "name": "makeAddressKey",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 100714,
              "src": "81:14:257",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 92252,
        "nodeType": "ImportDirective",
        "src": "144:59:257",
        "nodes": [],
        "absolutePath": "src/interfaces/IALMProxy.sol",
        "file": "../../interfaces/IALMProxy.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 92338,
        "sourceUnit": 100082,
        "symbolAliases": [
          {
            "foreign": {
              "id": 92251,
              "name": "IALMProxy",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 100081,
              "src": "153:9:257",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 92254,
        "nodeType": "ImportDirective",
        "src": "205:39:257",
        "nodes": [],
        "absolutePath": "src/facets/IFacet.sol",
        "file": "../IFacet.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 92338,
        "sourceUnit": 82168,
        "symbolAliases": [
          {
            "foreign": {
              "id": 92253,
              "name": "IFacet",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 82167,
              "src": "214:6:257",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 92256,
        "nodeType": "ImportDirective",
        "src": "246:37:257",
        "nodes": [],
        "absolutePath": "src/facets/Facet.sol",
        "file": "../Facet.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 92338,
        "sourceUnit": 82139,
        "symbolAliases": [
          {
            "foreign": {
              "id": 92255,
              "name": "Facet",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 82138,
              "src": "255:5:257",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 92258,
        "nodeType": "ImportDirective",
        "src": "285:58:257",
        "nodes": [],
        "absolutePath": "src/facets/spark-vault/ISparkVaultFacet.sol",
        "file": "./ISparkVaultFacet.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 92338,
        "sourceUnit": 92247,
        "symbolAliases": [
          {
            "foreign": {
              "id": 92257,
              "name": "ISparkVaultFacet",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 92246,
              "src": "294:16:257",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 92264,
        "nodeType": "ContractDefinition",
        "src": "345:80:257",
        "nodes": [
          {
            "id": 92263,
            "nodeType": "FunctionDefinition",
            "src": "378:44:257",
            "nodes": [],
            "functionSelector": "4fd9efc4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "take",
            "nameLocation": "387:4:257",
            "parameters": {
              "id": 92261,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92260,
                  "mutability": "mutable",
                  "name": "assetAmount",
                  "nameLocation": "400:11:257",
                  "nodeType": "VariableDeclaration",
                  "scope": 92263,
                  "src": "392:19:257",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92259,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "392:7:257",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "391:21:257"
            },
            "returnParameters": {
              "id": 92262,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "421:0:257"
            },
            "scope": 92264,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "ISparkVaultLike",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          92264
        ],
        "name": "ISparkVaultLike",
        "nameLocation": "355:15:257",
        "scope": 92338,
        "usedErrors": [],
        "usedEvents": []
      },
      {
        "id": 92337,
        "nodeType": "ContractDefinition",
        "src": "427:1816:257",
        "nodes": [
          {
            "id": 92273,
            "nodeType": "VariableDeclaration",
            "src": "790:75:257",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_LIMIT_TAKE",
            "nameLocation": "816:11:257",
            "scope": 92337,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 92269,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "790:7:257",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "arguments": [
                {
                  "hexValue": "4c494d49545f535041524b5f5641554c545f54414b45",
                  "id": 92271,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "840:24:257",
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_6308851b8d5124971e470b9e9c2b772d838474c039290fda74a0d3c311748b5b",
                    "typeString": "literal_string \"LIMIT_SPARK_VAULT_TAKE\""
                  },
                  "value": "LIMIT_SPARK_VAULT_TAKE"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_6308851b8d5124971e470b9e9c2b772d838474c039290fda74a0d3c311748b5b",
                    "typeString": "literal_string \"LIMIT_SPARK_VAULT_TAKE\""
                  }
                ],
                "id": 92270,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": -8,
                "src": "830:9:257",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                  "typeString": "function (bytes memory) pure returns (bytes32)"
                }
              },
              "id": 92272,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "830:35:257",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 92278,
            "nodeType": "VariableDeclaration",
            "src": "899:49:257",
            "nodes": [],
            "baseFunctions": [
              82166
            ],
            "constant": true,
            "documentation": {
              "id": 92274,
              "nodeType": "StructuredDocumentation",
              "src": "872:22:257",
              "text": "@inheritdoc IFacet"
            },
            "functionSelector": "ffa1ad74",
            "mutability": "constant",
            "name": "VERSION",
            "nameLocation": "931:7:257",
            "overrides": {
              "id": 92276,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "922:8:257"
            },
            "scope": 92337,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 92275,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "899:6:257",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "312e302e30",
              "id": 92277,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "941:7:257",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_06c015bd22b4c69690933c1058878ebdfef31f9aaae40bbe86d8a09fe1b2972c",
                "typeString": "literal_string \"1.0.0\""
              },
              "value": "1.0.0"
            },
            "visibility": "public"
          },
          {
            "id": 92321,
            "nodeType": "FunctionDefinition",
            "src": "1296:446:257",
            "nodes": [],
            "body": {
              "id": 92320,
              "nodeType": "Block",
              "src": "1443:299:257",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 92294,
                            "name": "sparkVault",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 92281,
                            "src": "1492:10:257",
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
                          "id": 92293,
                          "name": "getTakeRateLimitKey",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 92336,
                          "src": "1472:19:257",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_address_$returns$_t_bytes32_$",
                            "typeString": "function (address) pure returns (bytes32)"
                          }
                        },
                        "id": 92295,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1472:31:257",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 92296,
                        "name": "assetAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92283,
                        "src": "1505:11:257",
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
                      "id": 92292,
                      "name": "_decreaseRateLimit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 82081,
                      "src": "1453:18:257",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_uint256_$returns$__$",
                        "typeString": "function (bytes32,uint256)"
                      }
                    },
                    "id": 92297,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1453:64:257",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 92298,
                  "nodeType": "ExpressionStatement",
                  "src": "1453:64:257"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 92305,
                        "name": "sparkVault",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92281,
                        "src": "1595:10:257",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 92308,
                              "name": "ISparkVaultLike",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 92264,
                              "src": "1634:15:257",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_ISparkVaultLike_$92264_$",
                                "typeString": "type(contract ISparkVaultLike)"
                              }
                            },
                            "id": 92309,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "1650:4:257",
                            "memberName": "take",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 92263,
                            "src": "1634:20:257",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_declaration_nonpayable$_t_uint256_$returns$__$",
                              "typeString": "function ISparkVaultLike.take(uint256)"
                            }
                          },
                          {
                            "components": [
                              {
                                "id": 92310,
                                "name": "assetAmount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 92283,
                                "src": "1657:11:257",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 92311,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "1656:13:257",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_function_declaration_nonpayable$_t_uint256_$returns$__$",
                              "typeString": "function ISparkVaultLike.take(uint256)"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "id": 92306,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "1619:3:257",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 92307,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "1623:10:257",
                          "memberName": "encodeCall",
                          "nodeType": "MemberAccess",
                          "src": "1619:14:257",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 92312,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1619:51:257",
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
                            "expression": {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 92300,
                                "name": "_getSharedControllerStorage",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 81431,
                                "src": "1538:27:257",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_SharedControllerStorage_$81420_storage_ptr_$",
                                  "typeString": "function () pure returns (struct ControllerSharedStorage.SharedControllerStorage storage pointer)"
                                }
                              },
                              "id": 92301,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1538:29:257",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_SharedControllerStorage_$81420_storage_ptr",
                                "typeString": "struct ControllerSharedStorage.SharedControllerStorage storage pointer"
                              }
                            },
                            "id": 92302,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1568:5:257",
                            "memberName": "proxy",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 81417,
                            "src": "1538:35:257",
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
                          "id": 92299,
                          "name": "IALMProxy",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 100081,
                          "src": "1528:9:257",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IALMProxy_$100081_$",
                            "typeString": "type(contract IALMProxy)"
                          }
                        },
                        "id": 92303,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1528:46:257",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IALMProxy_$100081",
                          "typeString": "contract IALMProxy"
                        }
                      },
                      "id": 92304,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1575:6:257",
                      "memberName": "doCall",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 100052,
                      "src": "1528:53:257",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory) external returns (bytes memory)"
                      }
                    },
                    "id": 92313,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1528:152:257",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 92314,
                  "nodeType": "ExpressionStatement",
                  "src": "1528:152:257"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 92316,
                        "name": "sparkVault",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92281,
                        "src": "1711:10:257",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 92317,
                        "name": "assetAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92283,
                        "src": "1723:11:257",
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
                      "id": 92315,
                      "name": "SparkVaultTake",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 92229,
                      "src": "1696:14:257",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 92318,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1696:39:257",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 92319,
                  "nodeType": "EmitStatement",
                  "src": "1691:44:257"
                }
              ]
            },
            "baseFunctions": [
              92237
            ],
            "documentation": {
              "id": 92279,
              "nodeType": "StructuredDocumentation",
              "src": "1259:32:257",
              "text": "@inheritdoc ISparkVaultFacet"
            },
            "functionSelector": "52180208",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 92287,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 92286,
                  "name": "nonReentrant",
                  "nameLocations": [
                    "1393:12:257"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 70780,
                  "src": "1393:12:257"
                },
                "nodeType": "ModifierInvocation",
                "src": "1393:12:257"
              },
              {
                "arguments": [
                  {
                    "id": 92289,
                    "name": "ALLOCATOR_ROLE",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 82017,
                    "src": "1423:14:257",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 92290,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 92288,
                  "name": "onlyRole",
                  "nameLocations": [
                    "1414:8:257"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 82045,
                  "src": "1414:8:257"
                },
                "nodeType": "ModifierInvocation",
                "src": "1414:24:257"
              }
            ],
            "name": "take",
            "nameLocation": "1305:4:257",
            "overrides": {
              "id": 92285,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1376:8:257"
            },
            "parameters": {
              "id": 92284,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92281,
                  "mutability": "mutable",
                  "name": "sparkVault",
                  "nameLocation": "1318:10:257",
                  "nodeType": "VariableDeclaration",
                  "scope": 92321,
                  "src": "1310:18:257",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 92280,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1310:7:257",
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
                  "id": 92283,
                  "mutability": "mutable",
                  "name": "assetAmount",
                  "nameLocation": "1338:11:257",
                  "nodeType": "VariableDeclaration",
                  "scope": 92321,
                  "src": "1330:19:257",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92282,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1330:7:257",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1309:41:257"
            },
            "returnParameters": {
              "id": 92291,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1443:0:257"
            },
            "scope": 92337,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 92336,
            "nodeType": "FunctionDefinition",
            "src": "2089:151:257",
            "nodes": [],
            "body": {
              "id": 92335,
              "nodeType": "Block",
              "src": "2177:63:257",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 92331,
                        "name": "_LIMIT_TAKE",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92273,
                        "src": "2209:11:257",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 92332,
                        "name": "sparkVault",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92324,
                        "src": "2222:10:257",
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
                      "id": 92330,
                      "name": "makeAddressKey",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 100714,
                      "src": "2194:14:257",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_address_$returns$_t_bytes32_$",
                        "typeString": "function (bytes32,address) pure returns (bytes32)"
                      }
                    },
                    "id": 92333,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2194:39:257",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 92329,
                  "id": 92334,
                  "nodeType": "Return",
                  "src": "2187:46:257"
                }
              ]
            },
            "baseFunctions": [
              92245
            ],
            "documentation": {
              "id": 92322,
              "nodeType": "StructuredDocumentation",
              "src": "2052:32:257",
              "text": "@inheritdoc ISparkVaultFacet"
            },
            "functionSelector": "557b087c",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getTakeRateLimitKey",
            "nameLocation": "2098:19:257",
            "overrides": {
              "id": 92326,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2150:8:257"
            },
            "parameters": {
              "id": 92325,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92324,
                  "mutability": "mutable",
                  "name": "sparkVault",
                  "nameLocation": "2126:10:257",
                  "nodeType": "VariableDeclaration",
                  "scope": 92336,
                  "src": "2118:18:257",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 92323,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2118:7:257",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2117:20:257"
            },
            "returnParameters": {
              "id": 92329,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92328,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 92336,
                  "src": "2168:7:257",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 92327,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2168:7:257",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2167:9:257"
            },
            "scope": 92337,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 92265,
              "name": "ISparkVaultFacet",
              "nameLocations": [
                "455:16:257"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 92246,
              "src": "455:16:257"
            },
            "id": 92266,
            "nodeType": "InheritanceSpecifier",
            "src": "455:16:257"
          },
          {
            "baseName": {
              "id": 92267,
              "name": "Facet",
              "nameLocations": [
                "473:5:257"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 82138,
              "src": "473:5:257"
            },
            "id": 92268,
            "nodeType": "InheritanceSpecifier",
            "src": "473:5:257"
          }
        ],
        "canonicalName": "SparkVaultFacet",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          92337,
          82138,
          70840,
          70483,
          81432,
          92246,
          82167
        ],
        "name": "SparkVaultFacet",
        "nameLocation": "436:15:257",
        "scope": 92338,
        "usedErrors": [
          70246,
          70249,
          70742,
          82148
        ],
        "usedEvents": [
          70254,
          92229
        ]
      }
    ],
    "license": "AGPL-3.0-or-later"
  },
  "id": 257
} as const;
