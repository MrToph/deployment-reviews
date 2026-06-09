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
      "name": "getTransferRateLimitKey",
      "inputs": [
        {
          "name": "asset",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "destination",
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
      "name": "transfer",
      "inputs": [
        {
          "name": "asset",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "destination",
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
      "name": "TransferAssetTransfer",
      "inputs": [
        {
          "name": "asset",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "destination",
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
    "object": "0x6080604052348015600e575f5ffd5b5061075c8061001c5f395ff3fe608060405234801561000f575f5ffd5b5060043610610055575f3560e01c8063a217fddf14610059578063a7811f5614610073578063beabacc814610086578063c81cbaa11461009b578063ffa1ad74146100c2575b5f5ffd5b6100605f81565b6040519081526020015b60405180910390f35b610060610081366004610554565b6100f3565b610099610094366004610585565b610126565b005b6100607f68bf109b95a5c15fb2bb99041323c27d15f8675e11bf7420a1cd6ad64c394f4681565b6100e6604051806040016040528060058152602001640312e302e360dc1b81525081565b60405161006a91906105ec565b5f61011f7f48f98264e3feb9c04c94251c86b84a95f369fb2973906e457f22ec9080cb6755848461040b565b9392505050565b61012e61045a565b7f68bf109b95a5c15fb2bb99041323c27d15f8675e11bf7420a1cd6ad64c394f465f7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc0054604051632474521560e21b8152600481018490523360248201526001600160a01b03909116915081906391d1485490604401602060405180830381865afa1580156101bf573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101e391906105fe565b3383909161021a5760405163e2517d3f60e01b81526001600160a01b03909216600483015260248201526044015b60405180910390fd5b505061022f61022986866100f3565b846104a4565b5f7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc00600101546040516001600160a01b0387811660248301526044820187905290911690633aada4d290889060640160408051601f198184030181529181526020820180516001600160e01b031663a9059cbb60e01b179052516001600160e01b031960e085901b1681526102c892919060040161061d565b5f604051808303815f875af11580156102e3573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f1916820160405261030a919081019061065c565b905080515f148061033657508051602014801561033657508080602001905181019061033691906105fe565b61038d5760405162461bcd60e51b815260206004820152602260248201527f5472616e73666572417373657446616365742f7472616e736665722d6661696c604482015261195960f21b6064820152608401610211565b846001600160a01b0316866001600160a01b03167fff364e1ef6190841ba9dfd518157372a542d1a297893d3d0a7e9beda04cb0cd0866040516103d291815260200190565b60405180910390a350505061040660017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b505050565b5f83838360405160200161043b939291909283526001600160a01b03918216602084015216604082015260600190565b6040516020818303038152906040528051906020012090509392505050565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0080546001190161049e57604051633ee5aeb560e01b815260040160405180910390fd5b60029055565b7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc00600201546040516303bf076b60e41b815260048101849052602481018390526001600160a01b0390911690633bf076b0906044016020604051808303815f875af1158015610515573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610406919061070f565b80356001600160a01b038116811461054f575f5ffd5b919050565b5f5f60408385031215610565575f5ffd5b61056e83610539565b915061057c60208401610539565b90509250929050565b5f5f5f60608486031215610597575f5ffd5b6105a084610539565b92506105ae60208501610539565b9150604084013590509250925092565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f61011f60208301846105be565b5f6020828403121561060e575f5ffd5b8151801515811461011f575f5ffd5b6001600160a01b03831681526040602082018190525f90610640908301846105be565b949350505050565b634e487b7160e01b5f52604160045260245ffd5b5f6020828403121561066c575f5ffd5b815167ffffffffffffffff811115610682575f5ffd5b8201601f81018413610692575f5ffd5b805167ffffffffffffffff8111156106ac576106ac610648565b604051601f8201601f19908116603f0116810167ffffffffffffffff811182821017156106db576106db610648565b6040528181528282016020018610156106f2575f5ffd5b8160208401602083015e5f91810160200191909152949350505050565b5f6020828403121561071f575f5ffd5b505191905056fea264697066735822122098ec13abe835c80fea419783c7787fe3d9751e0e38255689951de4eb9591c2a164736f6c63430008220033",
    "sourceMap": "469:2142:261:-:0;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561000f575f5ffd5b5060043610610055575f3560e01c8063a217fddf14610059578063a7811f5614610073578063beabacc814610086578063c81cbaa11461009b578063ffa1ad74146100c2575b5f5ffd5b6100605f81565b6040519081526020015b60405180910390f35b610060610081366004610554565b6100f3565b610099610094366004610585565b610126565b005b6100607f68bf109b95a5c15fb2bb99041323c27d15f8675e11bf7420a1cd6ad64c394f4681565b6100e6604051806040016040528060058152602001640312e302e360dc1b81525081565b60405161006a91906105ec565b5f61011f7f48f98264e3feb9c04c94251c86b84a95f369fb2973906e457f22ec9080cb6755848461040b565b9392505050565b61012e61045a565b7f68bf109b95a5c15fb2bb99041323c27d15f8675e11bf7420a1cd6ad64c394f465f7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc0054604051632474521560e21b8152600481018490523360248201526001600160a01b03909116915081906391d1485490604401602060405180830381865afa1580156101bf573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101e391906105fe565b3383909161021a5760405163e2517d3f60e01b81526001600160a01b03909216600483015260248201526044015b60405180910390fd5b505061022f61022986866100f3565b846104a4565b5f7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc00600101546040516001600160a01b0387811660248301526044820187905290911690633aada4d290889060640160408051601f198184030181529181526020820180516001600160e01b031663a9059cbb60e01b179052516001600160e01b031960e085901b1681526102c892919060040161061d565b5f604051808303815f875af11580156102e3573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f1916820160405261030a919081019061065c565b905080515f148061033657508051602014801561033657508080602001905181019061033691906105fe565b61038d5760405162461bcd60e51b815260206004820152602260248201527f5472616e73666572417373657446616365742f7472616e736665722d6661696c604482015261195960f21b6064820152608401610211565b846001600160a01b0316866001600160a01b03167fff364e1ef6190841ba9dfd518157372a542d1a297893d3d0a7e9beda04cb0cd0866040516103d291815260200190565b60405180910390a350505061040660017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b505050565b5f83838360405160200161043b939291909283526001600160a01b03918216602084015216604082015260600190565b6040516020818303038152906040528051906020012090509392505050565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0080546001190161049e57604051633ee5aeb560e01b815260040160405180910390fd5b60029055565b7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc00600201546040516303bf076b60e41b815260048101849052602481018390526001600160a01b0390911690633bf076b0906044016020604051808303815f875af1158015610515573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610406919061070f565b80356001600160a01b038116811461054f575f5ffd5b919050565b5f5f60408385031215610565575f5ffd5b61056e83610539565b915061057c60208401610539565b90509250929050565b5f5f5f60608486031215610597575f5ffd5b6105a084610539565b92506105ae60208501610539565b9150604084013590509250925092565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f61011f60208301846105be565b5f6020828403121561060e575f5ffd5b8151801515811461011f575f5ffd5b6001600160a01b03831681526040602082018190525f90610640908301846105be565b949350505050565b634e487b7160e01b5f52604160045260245ffd5b5f6020828403121561066c575f5ffd5b815167ffffffffffffffff811115610682575f5ffd5b8201601f81018413610692575f5ffd5b805167ffffffffffffffff8111156106ac576106ac610648565b604051601f8201601f19908116603f0116810167ffffffffffffffff811182821017156106db576106db610648565b6040528181528282016020018610156106f2575f5ffd5b8160208401602083015e5f91810160200191909152949350505050565b5f6020828403121561071f575f5ffd5b505191905056fea264697066735822122098ec13abe835c80fea419783c7787fe3d9751e0e38255689951de4eb9591c2a164736f6c63430008220033",
    "sourceMap": "469:2142:261:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;870:58:218;;924:4;870:58;;;;;160:25:388;;;148:2;133:18;870:58:218;;;;;;;;2382:226:261;;;;;;:::i;:::-;;:::i;1349:683::-;;;;;;:::i;:::-;;:::i;:::-;;962:77:218;;1012:27;962:77;;949:49:261;;;;;;;;;;;;;;;-1:-1:-1;;;949:49:261;;;;;;;;;;;;:::i;2382:226::-;2513:7;2543:58;882:33;2582:5;2589:11;2543:21;:58::i;:::-;2536:65;2382:226;-1:-1:-1;;;2382:226:261:o;1349:683::-;3251:21:160;:19;:21::i;:::-;1012:27:218::1;1392:22;1053:34:214::0;1417:44:218;1493:57:::1;::::0;-1:-1:-1;;;1493:57:218;;::::1;::::0;::::1;1665:25:388::0;;;1539:10:218::1;1706:18:388::0;;;1699:60;-1:-1:-1;;;;;1417:44:218;;::::1;::::0;-1:-1:-1;1417:44:218;;1493:39:::1;::::0;1638:18:388;;1493:57:218::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1597:10;1609:4;1472:152;;;;;::::0;-1:-1:-1;;;1472:152:218;;-1:-1:-1;;;;;2244:32:388;;;1472:152:218::1;::::0;::::1;2226:51:388::0;2293:18;;;2286:34;2199:18;;1472:152:218::1;;;;;;;;;;;1521:71:261::2;1540:43;1564:5;1571:11;1540:23;:43::i;:::-;1585:6;1521:18;:71::i;:::-;1603:23;1053:34:214::0;1639:35:261::2;;::::0;1715:58:::2;::::0;-1:-1:-1;;;;;2244:32:388;;;1715:58:261::2;::::0;::::2;2226:51:388::0;2293:18;;;2286:34;;;1639:35:261;;::::2;::::0;1629:53:::2;::::0;1696:5;;2199:18:388;;1715:58:261::2;::::0;;-1:-1:-1;;1715:58:261;;::::2;::::0;;;;;;::::2;::::0;::::2;::::0;;-1:-1:-1;;;;;1715:58:261::2;-1:-1:-1::0;;;1715:58:261::2;::::0;;1629:154;-1:-1:-1;;;;;;1715:58:261::2;1629:154:::0;;;;;;::::2;::::0;;1715:58;1629:154:::2;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;;::::2;-1:-1:-1::0;;1629:154:261::2;::::0;::::2;;::::0;::::2;::::0;;;::::2;::::0;::::2;:::i;:::-;1603:180;;1815:10;:17;1836:1;1815:22;:85;;;;1842:10;:17;1863:2;1842:23;:57;;;;;1880:10;1869:30;;;;;;;;;;;;:::i;:::-;1794:166;;;::::0;-1:-1:-1;;;1794:166:261;;4203:2:388;1794:166:261::2;::::0;::::2;4185:21:388::0;4242:2;4222:18;;;4215:30;4281:34;4261:18;;;4254:62;-1:-1:-1;;;4332:18:388;;;4325:32;4374:19;;1794:166:261::2;4001:398:388::0;1794:166:261::2;2005:11;-1:-1:-1::0;;;;;1976:49:261::2;1998:5;-1:-1:-1::0;;;;;1976:49:261::2;;2018:6;1976:49;;;;160:25:388::0;;148:2;133:18;;14:177;1976:49:261::2;;;;;;;;1511:521;1382:261:218::1;3282:1:160;3293:20:::0;1805:1;2388:30;3969:23;3716:283;3293:20;1349:683:261;;;:::o;190:137:289:-;270:7;313:3;318:1;321;302:21;;;;;;;;;4788:25:388;;;-1:-1:-1;;;;;4849:32:388;;;4844:2;4829:18;;4822:60;4918:32;4913:2;4898:18;;4891:60;4776:2;4761:18;;4586:371;302:21:289;;;;;;;;;;;;;292:32;;;;;;285:39;;190:137;;;;;:::o;3326:384:160:-;2388:30;3526:9;;-1:-1:-1;;3526:20:160;3522:88;;3569:30;;-1:-1:-1;;;3569:30:160;;;;;;;;;;;3522:88;1847:1;3684:19;;3326:384::o;2133:174:218:-;1053:34:214;2221:40:218;;;2209:91;;-1:-1:-1;;;2209:91:218;;;;;5136:25:388;;;5177:18;;;5170:34;;;-1:-1:-1;;;;;2221:40:218;;;;2209:78;;5109:18:388;;2209:91:218;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;196:173:388:-;264:20;;-1:-1:-1;;;;;313:31:388;;303:42;;293:70;;359:1;356;349:12;293:70;196:173;;;:::o;374:260::-;442:6;450;503:2;491:9;482:7;478:23;474:32;471:52;;;519:1;516;509:12;471:52;542:29;561:9;542:29;:::i;:::-;532:39;;590:38;624:2;613:9;609:18;590:38;:::i;:::-;580:48;;374:260;;;;;:::o;639:328::-;716:6;724;732;785:2;773:9;764:7;760:23;756:32;753:52;;;801:1;798;791:12;753:52;824:29;843:9;824:29;:::i;:::-;814:39;;872:38;906:2;895:9;891:18;872:38;:::i;:::-;862:48;;957:2;946:9;942:18;929:32;919:42;;639:328;;;;;:::o;972:289::-;1014:3;1052:5;1046:12;1079:6;1074:3;1067:19;1135:6;1128:4;1121:5;1117:16;1110:4;1105:3;1101:14;1095:47;1187:1;1180:4;1171:6;1166:3;1162:16;1158:27;1151:38;1250:4;1243:2;1239:7;1234:2;1226:6;1222:15;1218:29;1213:3;1209:39;1205:50;1198:57;;;972:289;;;;:::o;1266:220::-;1415:2;1404:9;1397:21;1378:4;1435:45;1476:2;1465:9;1461:18;1453:6;1435:45;:::i;1770:277::-;1837:6;1890:2;1878:9;1869:7;1865:23;1861:32;1858:52;;;1906:1;1903;1896:12;1858:52;1938:9;1932:16;1991:5;1984:13;1977:21;1970:5;1967:32;1957:60;;2013:1;2010;2003:12;2610:315;-1:-1:-1;;;;;2785:32:388;;2767:51;;2854:2;2849;2834:18;;2827:30;;;-1:-1:-1;;2874:45:388;;2900:18;;2892:6;2874:45;:::i;:::-;2866:53;2610:315;-1:-1:-1;;;;2610:315:388:o;2930:127::-;2991:10;2986:3;2982:20;2979:1;2972:31;3022:4;3019:1;3012:15;3046:4;3043:1;3036:15;3062:934;3141:6;3194:2;3182:9;3173:7;3169:23;3165:32;3162:52;;;3210:1;3207;3200:12;3162:52;3243:9;3237:16;3276:18;3268:6;3265:30;3262:50;;;3308:1;3305;3298:12;3262:50;3331:22;;3384:4;3376:13;;3372:27;-1:-1:-1;3362:55:388;;3413:1;3410;3403:12;3362:55;3446:2;3440:9;3472:18;3464:6;3461:30;3458:56;;;3494:18;;:::i;:::-;3543:2;3537:9;3635:2;3597:17;;-1:-1:-1;;3593:31:388;;;3626:2;3589:40;3585:54;3573:67;;3670:18;3655:34;;3691:22;;;3652:62;3649:88;;;3717:18;;:::i;:::-;3753:2;3746:22;3777;;;3818:15;;;3835:2;3814:24;3811:37;-1:-1:-1;3808:57:388;;;3861:1;3858;3851:12;3808:57;3910:6;3905:2;3901;3897:11;3892:2;3884:6;3880:15;3874:43;3963:1;3937:19;;;3958:2;3933:28;3926:39;;;;3941:6;3062:934;-1:-1:-1;;;;3062:934:388:o;5215:184::-;5285:6;5338:2;5326:9;5317:7;5313:23;5309:32;5306:52;;;5354:1;5351;5344:12;5306:52;-1:-1:-1;5377:16:388;;5215:184;-1:-1:-1;5215:184:388:o",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "ALLOCATOR_ROLE()": "c81cbaa1",
    "DEFAULT_ADMIN_ROLE()": "a217fddf",
    "VERSION()": "ffa1ad74",
    "getTransferRateLimitKey(address,address)": "a7811f56",
    "transfer(address,address,uint256)": "beabacc8"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.34+commit.80d5c536\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"AccessControlUnauthorizedAccount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidInitialization\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotInitializing\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"version\",\"type\":\"uint64\"}],\"name\":\"Initialized\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"asset\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"TransferAssetTransfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"ALLOCATOR_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"DEFAULT_ADMIN_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"VERSION\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"asset\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"}],\"name\":\"getTransferRateLimitKey\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"asset\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"InvalidInitialization()\":[{\"details\":\"The contract is already initialized.\"}],\"NotInitializing()\":[{\"details\":\"The contract is not initializing.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"events\":{\"Initialized(uint64)\":{\"details\":\"Triggered when the contract has been initialized or reinitialized.\"},\"TransferAssetTransfer(address,address,uint256)\":{\"params\":{\"amount\":\"Amount of asset transferred (native token decimals).\",\"asset\":\"Address of the transferred asset token.\",\"destination\":\"Address that received the asset.\"}}},\"kind\":\"dev\",\"methods\":{\"getTransferRateLimitKey(address,address)\":{\"params\":{\"asset\":\"Address of the asset token.\",\"destination\":\"Address of the destination.\"},\"returns\":{\"_0\":\"        Derived rate limit key.\"}},\"transfer(address,address,uint256)\":{\"params\":{\"amount\":\"Amount of asset to transfer (native token decimals).\",\"asset\":\"Address of the asset token to transfer.\",\"destination\":\"Address to receive the asset.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"AccessControlUnauthorizedAccount(address,bytes32)\":[{\"notice\":\"Thrown when a caller lacks the required access control role.\"}]},\"events\":{\"TransferAssetTransfer(address,address,uint256)\":{\"notice\":\"Emitted when an ERC-20 asset is transferred from the proxy.\"}},\"kind\":\"user\",\"methods\":{\"ALLOCATOR_ROLE()\":{\"notice\":\"Role identifier for allocator accounts authorized to execute facet operations.\"},\"DEFAULT_ADMIN_ROLE()\":{\"notice\":\"Role identifier for the default admin (bytes32(0)).\"},\"VERSION()\":{\"notice\":\"Semantic version string of the facet.\"},\"getTransferRateLimitKey(address,address)\":{\"notice\":\"Returns the derived transfer rate limit key for an asset and destination.\"},\"transfer(address,address,uint256)\":{\"notice\":\"Transfers an ERC-20 asset from the proxy to a destination.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/facets/transfer-asset/TransferAssetFacet.sol\":\"TransferAssetFacet\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@ensdomains/=lib/uniswap-v4-periphery/lib/v4-core/node_modules/@ensdomains/\",\":@layerzerolabs/lz-evm-messagelib-v2/=lib/layerzero-v2/packages/layerzero-v2/evm/messagelib/\",\":@layerzerolabs/lz-evm-protocol-v2/=lib/layerzero-v2/packages/layerzero-v2/evm/protocol/\",\":@layerzerolabs/oft-evm/=lib/grove-xchain-helpers/lib/devtools/packages/oft-evm/\",\":@openzeppelin/contracts-upgradeable/=lib/oz-upgradeable/contracts/\",\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":@uniswap/v4-core/=lib/uniswap-v4-periphery/lib/v4-core/\",\":LayerZero-v2/=lib/grove-xchain-helpers/lib/\",\":aave-v3-core/=lib/aave-v3-origin/src/core/\",\":aave-v3-origin/=lib/aave-v3-origin/\",\":aave-v3-periphery/=lib/aave-v3-origin/src/periphery/\",\":devtools/=lib/grove-xchain-helpers/lib/devtools/packages/toolbox-foundry/src/\",\":ds-test/=lib/grove-address-registry/lib/forge-std/lib/ds-test/src/\",\":dss-allocator/=lib/dss-allocator/\",\":dss-interfaces/=lib/dss-test/lib/dss-interfaces/src/\",\":dss-test/=lib/dss-test/src/\",\":erc20-helpers/=lib/grove-basin/lib/erc20-helpers/src/\",\":erc4626-tests/=lib/metamorpho/lib/erc4626-tests/\",\":forge-gas-snapshot/=lib/uniswap-v4-periphery/lib/permit2/lib/forge-gas-snapshot/src/\",\":forge-std/=lib/forge-std/src/\",\":grove-address-registry/=lib/grove-address-registry/src/\",\":grove-basin/=lib/grove-basin/\",\":grove-xchain-helpers/=lib/grove-xchain-helpers/src/\",\":halmos-cheatcodes/=lib/grove-basin/lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/\",\":hardhat/=lib/uniswap-v4-periphery/lib/v4-core/node_modules/hardhat/\",\":layerzero-v2/=lib/layerzero-v2/\",\":layerzerolabs/oapp-evm/=lib/grove-xchain-helpers/lib/devtools/packages/oapp-evm/\",\":metamorpho/=lib/metamorpho/src/\",\":morpho-blue/=lib/metamorpho/lib/morpho-blue/\",\":murky/=lib/metamorpho/lib/universal-rewards-distributor/lib/murky/src/\",\":openzeppelin-contracts-upgradeable/=lib/spark-vaults-v2/lib/openzeppelin-contracts-upgradeable/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/metamorpho/lib/universal-rewards-distributor/lib/openzeppelin-contracts/contracts/\",\":oz-upgradeable/=lib/oz-upgradeable/\",\":permit2/=lib/uniswap-v4-periphery/lib/permit2/\",\":solidity-bytes-utils/=lib/solidity-bytes-utils/\",\":solidity-utils/=lib/aave-v3-origin/lib/solidity-utils/\",\":solmate/=lib/uniswap-v4-periphery/lib/v4-core/lib/solmate/\",\":spark-address-registry/=lib/spark-address-registry/src/\",\":spark-psm/=lib/spark-psm/\",\":spark-vaults-v2/=lib/spark-vaults-v2/\",\":sparklend-address-registry/=lib/grove-basin/lib/xchain-ssr-oracle/lib/sparklend-address-registry/\",\":token-tests/=lib/spark-vaults-v2/lib/token-tests/src/\",\":uniswap-v4-periphery/=lib/uniswap-v4-periphery/\",\":universal-rewards-distributor/=lib/metamorpho/lib/universal-rewards-distributor/src/\",\":v4-core/=lib/uniswap-v4-periphery/lib/v4-core/src/\",\":xchain-helpers/=lib/xchain-helpers/src/\",\":xchain-ssr-oracle/=lib/grove-basin/lib/xchain-ssr-oracle/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/access/IAccessControl.sol\":{\"keccak256\":\"0xb6b36edd6a2999fd243ff226d6cbf84bd71af2432bbd0dfe19392996a1d9cb41\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1fd2f35495652e57e3f99bc6c510bc5f7dd398a176ea2e72d8ed730aebc6ca26\",\"dweb:/ipfs/QmTQV6X4gkikTib49cho5iDX3JvSQbdsoEChoDwrk3CbbH\"]},\"lib/openzeppelin-contracts/contracts/access/extensions/IAccessControlEnumerable.sol\":{\"keccak256\":\"0xc1435f102633849858e75d7bed14c636f25448ceb3406d82992b0f2df52f4306\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ce1815e3a1da24f91b8e2ec24cf09d0d46e0fbeddcbe2cb0d8b2e05b91ceb7b3\",\"dweb:/ipfs/QmYTy1AQB5EV5jwuGsB49yykng2oG3x5ss4bDjFNxk3He4\"]},\"lib/oz-upgradeable/contracts/proxy/utils/Initializable.sol\":{\"keccak256\":\"0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609\",\"dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM\"]},\"lib/oz-upgradeable/contracts/utils/ReentrancyGuardUpgradeable.sol\":{\"keccak256\":\"0xb44e086e941292cdc7f440de51478493894ef0b1aeccb0c4047445919f667f74\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://942dad22fbdc1669f025540ba63aa3ccfad5f8458fc5d4525b31ebf272e7af45\",\"dweb:/ipfs/Qmdo4X2M82aM3AMoW2kf2jhYkSCyC4T1pHNd6obdsDFnAB\"]},\"src/ControllerSharedStorage.sol\":{\"keccak256\":\"0x08b85a82fbcfb5d837ac222fe71c7a458bab9edd8cfe0df02b3c38d6780b4400\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://577a9d2fc6796614c022fe701c981faa4df931dd5346e21167fbc46f3e199985\",\"dweb:/ipfs/QmYRyEbGum5TJF4yYNksK2H2CbmqYdcqiri5ZtFKrc36k7\"]},\"src/facets/Facet.sol\":{\"keccak256\":\"0xe86c5d5b73af2713e4e6754267af20325421b72c88a1dbf6dfbe9978b259edc2\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://28c6bcfbb07742b4be8f7188a3a9af301a6570616cf97564eb80091c09001ca9\",\"dweb:/ipfs/QmchiTioPPk7YbTtVpLN33hRNu1CKJoTH69He4BtUyXimA\"]},\"src/facets/IFacet.sol\":{\"keccak256\":\"0x0f0acb5faa3c227edc594e69507f89f0f063712847f361fbc51dbc2e9dd51d0a\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://ded1143f96b28d02e5eae73cf84af8e72ac15b31e2737ae29dc962c2975eb34c\",\"dweb:/ipfs/QmNrdGdJkHC2YWBMx4dQmihdwuSs7XDNgf8NYzQUsZifT2\"]},\"src/facets/transfer-asset/ITransferAssetFacet.sol\":{\"keccak256\":\"0x01043a7464f51e32670692602543c2f86ab2516d2deeb39d9653fe9e8f1a0814\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://2dd75dcddc7744be57f6dec00c5835af074fd3168da786510990a078bda62b34\",\"dweb:/ipfs/QmV9aGKGZtfmWi7BEs4B8VoNuCjNYr8KB1YAKuXW54CD8t\"]},\"src/facets/transfer-asset/TransferAssetFacet.sol\":{\"keccak256\":\"0x1a0f044f22469206e32172635574f1fd7e10136e626d9aef7565226a4658e3d5\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://69f975e4522fb66ac03473e869c41612f120007cbfde95396846e467c3248597\",\"dweb:/ipfs/QmNZGKWakDJJnJSDSvGT4CeL35NzohB1ZNmsiY3b7tMUeU\"]},\"src/interfaces/IALMProxy.sol\":{\"keccak256\":\"0xa965efa753f8b48b5b08f4b98699a95ab4671c2e6b8c53c514dae9bda250f80e\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://1188a471d62be8e9439a9ac311f4e872288a414348341d7d0095928b846c6d19\",\"dweb:/ipfs/QmcUkHyM2YuZM4UicTBg47oTCYHxmzMf6Hd16hWyfsCJEd\"]},\"src/interfaces/IAccessControls.sol\":{\"keccak256\":\"0x774a4156bb41a733bd219dd14cf7ea7b10007662ab1ea2bdc83ffc197ed09637\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://9e923dced22563718b532893e9a70b2656ed6fbc556539ef5e2fe47fc4cd1c6d\",\"dweb:/ipfs/QmSh9RSdnatrSnMCxhnmyT8m6NFkFzCDDLPnzDVpfKDxYJ\"]},\"src/interfaces/IRateLimits.sol\":{\"keccak256\":\"0x20ea43787a1ad8c78805bdc194e57c5838176c258985342242b7211bfe7e6a4a\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://76555b4d5238e3faa3ebfe6b8eea949623cc5882d3c77835324459b3c664c0d6\",\"dweb:/ipfs/QmcfhxoLBDZrdBweL6PAV74NFHnVCeSDS7geQhYHt4LfhF\"]},\"src/libraries/RateLimitHelpers.sol\":{\"keccak256\":\"0x2aa83bc51a795f37ac31eea7e8c92563ba355f545cfde617d782b145da1f32cf\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://0bed4da7e8f6171839257219f3486f047102f3d7f69999aeeb96091a7d49e4b7\",\"dweb:/ipfs/QmRKHfUNZi6eogCUofurpBTjpWqfCLUsz3t48VXyU64jqs\"]}},\"version\":1}",
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
              "name": "asset",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "destination",
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
          "name": "TransferAssetTransfer",
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
              "name": "asset",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "destination",
              "type": "address"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "getTransferRateLimitKey",
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
              "name": "asset",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "destination",
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
          "name": "transfer"
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "getTransferRateLimitKey(address,address)": {
            "params": {
              "asset": "Address of the asset token.",
              "destination": "Address of the destination."
            },
            "returns": {
              "_0": "        Derived rate limit key."
            }
          },
          "transfer(address,address,uint256)": {
            "params": {
              "amount": "Amount of asset to transfer (native token decimals).",
              "asset": "Address of the asset token to transfer.",
              "destination": "Address to receive the asset."
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
          "getTransferRateLimitKey(address,address)": {
            "notice": "Returns the derived transfer rate limit key for an asset and destination."
          },
          "transfer(address,address,uint256)": {
            "notice": "Transfers an ERC-20 asset from the proxy to a destination."
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
        "src/facets/transfer-asset/TransferAssetFacet.sol": "TransferAssetFacet"
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
      "src/facets/transfer-asset/ITransferAssetFacet.sol": {
        "keccak256": "0x01043a7464f51e32670692602543c2f86ab2516d2deeb39d9653fe9e8f1a0814",
        "urls": [
          "bzz-raw://2dd75dcddc7744be57f6dec00c5835af074fd3168da786510990a078bda62b34",
          "dweb:/ipfs/QmV9aGKGZtfmWi7BEs4B8VoNuCjNYr8KB1YAKuXW54CD8t"
        ],
        "license": "AGPL-3.0-or-later"
      },
      "src/facets/transfer-asset/TransferAssetFacet.sol": {
        "keccak256": "0x1a0f044f22469206e32172635574f1fd7e10136e626d9aef7565226a4658e3d5",
        "urls": [
          "bzz-raw://69f975e4522fb66ac03473e869c41612f120007cbfde95396846e467c3248597",
          "dweb:/ipfs/QmNZGKWakDJJnJSDSvGT4CeL35NzohB1ZNmsiY3b7tMUeU"
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
    "absolutePath": "src/facets/transfer-asset/TransferAssetFacet.sol",
    "id": 92690,
    "exportedSymbols": {
      "Facet": [
        82138
      ],
      "IALMProxy": [
        100081
      ],
      "IERC20Like": [
        92584
      ],
      "IFacet": [
        82167
      ],
      "ITransferAssetFacet": [
        92562
      ],
      "TransferAssetFacet": [
        92689
      ],
      "makeAddressAddressKey": [
        100735
      ]
    },
    "nodeType": "SourceUnit",
    "src": "46:2566:261",
    "nodes": [
      {
        "id": 92564,
        "nodeType": "PragmaDirective",
        "src": "46:24:261",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".34"
        ]
      },
      {
        "id": 92566,
        "nodeType": "ImportDirective",
        "src": "72:77:261",
        "nodes": [],
        "absolutePath": "src/libraries/RateLimitHelpers.sol",
        "file": "../../libraries/RateLimitHelpers.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 92690,
        "sourceUnit": 100913,
        "symbolAliases": [
          {
            "foreign": {
              "id": 92565,
              "name": "makeAddressAddressKey",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 100735,
              "src": "81:21:261",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 92568,
        "nodeType": "ImportDirective",
        "src": "151:59:261",
        "nodes": [],
        "absolutePath": "src/interfaces/IALMProxy.sol",
        "file": "../../interfaces/IALMProxy.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 92690,
        "sourceUnit": 100082,
        "symbolAliases": [
          {
            "foreign": {
              "id": 92567,
              "name": "IALMProxy",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 100081,
              "src": "160:9:261",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 92570,
        "nodeType": "ImportDirective",
        "src": "212:39:261",
        "nodes": [],
        "absolutePath": "src/facets/IFacet.sol",
        "file": "../IFacet.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 92690,
        "sourceUnit": 82168,
        "symbolAliases": [
          {
            "foreign": {
              "id": 92569,
              "name": "IFacet",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 82167,
              "src": "221:6:261",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 92572,
        "nodeType": "ImportDirective",
        "src": "253:37:261",
        "nodes": [],
        "absolutePath": "src/facets/Facet.sol",
        "file": "../Facet.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 92690,
        "sourceUnit": 82139,
        "symbolAliases": [
          {
            "foreign": {
              "id": 92571,
              "name": "Facet",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 82138,
              "src": "262:5:261",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 92574,
        "nodeType": "ImportDirective",
        "src": "292:64:261",
        "nodes": [],
        "absolutePath": "src/facets/transfer-asset/ITransferAssetFacet.sol",
        "file": "./ITransferAssetFacet.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 92690,
        "sourceUnit": 92563,
        "symbolAliases": [
          {
            "foreign": {
              "id": 92573,
              "name": "ITransferAssetFacet",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 92562,
              "src": "301:19:261",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 92584,
        "nodeType": "ContractDefinition",
        "src": "358:109:261",
        "nodes": [
          {
            "id": 92583,
            "nodeType": "FunctionDefinition",
            "src": "386:78:261",
            "nodes": [],
            "functionSelector": "a9059cbb",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transfer",
            "nameLocation": "395:8:261",
            "parameters": {
              "id": 92579,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92576,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "412:2:261",
                  "nodeType": "VariableDeclaration",
                  "scope": 92583,
                  "src": "404:10:261",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 92575,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "404:7:261",
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
                  "id": 92578,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "424:6:261",
                  "nodeType": "VariableDeclaration",
                  "scope": 92583,
                  "src": "416:14:261",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92577,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "416:7:261",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "403:28:261"
            },
            "returnParameters": {
              "id": 92582,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92581,
                  "mutability": "mutable",
                  "name": "success",
                  "nameLocation": "455:7:261",
                  "nodeType": "VariableDeclaration",
                  "scope": 92583,
                  "src": "450:12:261",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 92580,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "450:4:261",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "449:14:261"
            },
            "scope": 92584,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IERC20Like",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          92584
        ],
        "name": "IERC20Like",
        "nameLocation": "368:10:261",
        "scope": 92690,
        "usedErrors": [],
        "usedEvents": []
      },
      {
        "id": 92689,
        "nodeType": "ContractDefinition",
        "src": "469:2142:261",
        "nodes": [
          {
            "id": 92593,
            "nodeType": "VariableDeclaration",
            "src": "838:77:261",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_LIMIT_TRANSFER",
            "nameLocation": "864:15:261",
            "scope": 92689,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 92589,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "838:7:261",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "arguments": [
                {
                  "hexValue": "4c494d49545f41535345545f5452414e53464552",
                  "id": 92591,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "892:22:261",
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_48f98264e3feb9c04c94251c86b84a95f369fb2973906e457f22ec9080cb6755",
                    "typeString": "literal_string \"LIMIT_ASSET_TRANSFER\""
                  },
                  "value": "LIMIT_ASSET_TRANSFER"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_48f98264e3feb9c04c94251c86b84a95f369fb2973906e457f22ec9080cb6755",
                    "typeString": "literal_string \"LIMIT_ASSET_TRANSFER\""
                  }
                ],
                "id": 92590,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": -8,
                "src": "882:9:261",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                  "typeString": "function (bytes memory) pure returns (bytes32)"
                }
              },
              "id": 92592,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "882:33:261",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 92598,
            "nodeType": "VariableDeclaration",
            "src": "949:49:261",
            "nodes": [],
            "baseFunctions": [
              82166
            ],
            "constant": true,
            "documentation": {
              "id": 92594,
              "nodeType": "StructuredDocumentation",
              "src": "922:22:261",
              "text": "@inheritdoc IFacet"
            },
            "functionSelector": "ffa1ad74",
            "mutability": "constant",
            "name": "VERSION",
            "nameLocation": "981:7:261",
            "overrides": {
              "id": 92596,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "972:8:261"
            },
            "scope": 92689,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 92595,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "949:6:261",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "312e302e30",
              "id": 92597,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "991:7:261",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_06c015bd22b4c69690933c1058878ebdfef31f9aaae40bbe86d8a09fe1b2972c",
                "typeString": "literal_string \"1.0.0\""
              },
              "value": "1.0.0"
            },
            "visibility": "public"
          },
          {
            "id": 92670,
            "nodeType": "FunctionDefinition",
            "src": "1349:683:261",
            "nodes": [],
            "body": {
              "id": 92669,
              "nodeType": "Block",
              "src": "1511:521:261",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 92616,
                            "name": "asset",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 92601,
                            "src": "1564:5:261",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 92617,
                            "name": "destination",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 92603,
                            "src": "1571:11:261",
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
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 92615,
                          "name": "getTransferRateLimitKey",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 92688,
                          "src": "1540:23:261",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_address_$_t_address_$returns$_t_bytes32_$",
                            "typeString": "function (address,address) pure returns (bytes32)"
                          }
                        },
                        "id": 92618,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1540:43:261",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 92619,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92605,
                        "src": "1585:6:261",
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
                      "id": 92614,
                      "name": "_decreaseRateLimit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 82081,
                      "src": "1521:18:261",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_uint256_$returns$__$",
                        "typeString": "function (bytes32,uint256)"
                      }
                    },
                    "id": 92620,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1521:71:261",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 92621,
                  "nodeType": "ExpressionStatement",
                  "src": "1521:71:261"
                },
                {
                  "assignments": [
                    92623
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 92623,
                      "mutability": "mutable",
                      "name": "returnData",
                      "nameLocation": "1616:10:261",
                      "nodeType": "VariableDeclaration",
                      "scope": 92669,
                      "src": "1603:23:261",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 92622,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "1603:5:261",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 92640,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 92630,
                        "name": "asset",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92601,
                        "src": "1696:5:261",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 92633,
                              "name": "IERC20Like",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 92584,
                              "src": "1730:10:261",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IERC20Like_$92584_$",
                                "typeString": "type(contract IERC20Like)"
                              }
                            },
                            "id": 92634,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "1741:8:261",
                            "memberName": "transfer",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 92583,
                            "src": "1730:19:261",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_declaration_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                              "typeString": "function IERC20Like.transfer(address,uint256) returns (bool)"
                            }
                          },
                          {
                            "components": [
                              {
                                "id": 92635,
                                "name": "destination",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 92603,
                                "src": "1752:11:261",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 92636,
                                "name": "amount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 92605,
                                "src": "1765:6:261",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 92637,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "1751:21:261",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$_t_address_$_t_uint256_$",
                              "typeString": "tuple(address,uint256)"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_function_declaration_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                              "typeString": "function IERC20Like.transfer(address,uint256) returns (bool)"
                            },
                            {
                              "typeIdentifier": "t_tuple$_t_address_$_t_uint256_$",
                              "typeString": "tuple(address,uint256)"
                            }
                          ],
                          "expression": {
                            "id": 92631,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "1715:3:261",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 92632,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "1719:10:261",
                          "memberName": "encodeCall",
                          "nodeType": "MemberAccess",
                          "src": "1715:14:261",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 92638,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1715:58:261",
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
                                "id": 92625,
                                "name": "_getSharedControllerStorage",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 81431,
                                "src": "1639:27:261",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_SharedControllerStorage_$81420_storage_ptr_$",
                                  "typeString": "function () pure returns (struct ControllerSharedStorage.SharedControllerStorage storage pointer)"
                                }
                              },
                              "id": 92626,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1639:29:261",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_SharedControllerStorage_$81420_storage_ptr",
                                "typeString": "struct ControllerSharedStorage.SharedControllerStorage storage pointer"
                              }
                            },
                            "id": 92627,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1669:5:261",
                            "memberName": "proxy",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 81417,
                            "src": "1639:35:261",
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
                          "id": 92624,
                          "name": "IALMProxy",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 100081,
                          "src": "1629:9:261",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IALMProxy_$100081_$",
                            "typeString": "type(contract IALMProxy)"
                          }
                        },
                        "id": 92628,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1629:46:261",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IALMProxy_$100081",
                          "typeString": "contract IALMProxy"
                        }
                      },
                      "id": 92629,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1676:6:261",
                      "memberName": "doCall",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 100052,
                      "src": "1629:53:261",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory) external returns (bytes memory)"
                      }
                    },
                    "id": 92639,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1629:154:261",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1603:180:261"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 92659,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 92645,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 92642,
                              "name": "returnData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 92623,
                              "src": "1815:10:261",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            "id": 92643,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1826:6:261",
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "src": "1815:17:261",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 92644,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1836:1:261",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "1815:22:261",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
                          "components": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "id": 92657,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 92649,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "expression": {
                                    "id": 92646,
                                    "name": "returnData",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 92623,
                                    "src": "1842:10:261",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  "id": 92647,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "1853:6:261",
                                  "memberName": "length",
                                  "nodeType": "MemberAccess",
                                  "src": "1842:17:261",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "==",
                                "rightExpression": {
                                  "hexValue": "3332",
                                  "id": 92648,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "1863:2:261",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_32_by_1",
                                    "typeString": "int_const 32"
                                  },
                                  "value": "32"
                                },
                                "src": "1842:23:261",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "&&",
                              "rightExpression": {
                                "arguments": [
                                  {
                                    "id": 92652,
                                    "name": "returnData",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 92623,
                                    "src": "1880:10:261",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  {
                                    "components": [
                                      {
                                        "id": 92654,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "1893:4:261",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_bool_$",
                                          "typeString": "type(bool)"
                                        },
                                        "typeName": {
                                          "id": 92653,
                                          "name": "bool",
                                          "nodeType": "ElementaryTypeName",
                                          "src": "1893:4:261",
                                          "typeDescriptions": {}
                                        }
                                      }
                                    ],
                                    "id": 92655,
                                    "isConstant": false,
                                    "isInlineArray": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "TupleExpression",
                                    "src": "1892:6:261",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_bool_$",
                                      "typeString": "type(bool)"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    },
                                    {
                                      "typeIdentifier": "t_type$_t_bool_$",
                                      "typeString": "type(bool)"
                                    }
                                  ],
                                  "expression": {
                                    "id": 92650,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -1,
                                    "src": "1869:3:261",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 92651,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberLocation": "1873:6:261",
                                  "memberName": "decode",
                                  "nodeType": "MemberAccess",
                                  "src": "1869:10:261",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                                    "typeString": "function () pure"
                                  }
                                },
                                "id": 92656,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1869:30:261",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "src": "1842:57:261",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            }
                          ],
                          "id": 92658,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "1841:59:261",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "1815:85:261",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5472616e73666572417373657446616365742f7472616e736665722d6661696c6564",
                        "id": 92660,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1914:36:261",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_084b2d9a9c5584d0c87b3c68f0e1ab498e8df57371dc33af0d129fb7975f91cc",
                          "typeString": "literal_string \"TransferAssetFacet/transfer-failed\""
                        },
                        "value": "TransferAssetFacet/transfer-failed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_084b2d9a9c5584d0c87b3c68f0e1ab498e8df57371dc33af0d129fb7975f91cc",
                          "typeString": "literal_string \"TransferAssetFacet/transfer-failed\""
                        }
                      ],
                      "id": 92641,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1794:7:261",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 92661,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1794:166:261",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 92662,
                  "nodeType": "ExpressionStatement",
                  "src": "1794:166:261"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 92664,
                        "name": "asset",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92601,
                        "src": "1998:5:261",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 92665,
                        "name": "destination",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92603,
                        "src": "2005:11:261",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 92666,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92605,
                        "src": "2018:6:261",
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
                      "id": 92663,
                      "name": "TransferAssetTransfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 92541,
                      "src": "1976:21:261",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 92667,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1976:49:261",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 92668,
                  "nodeType": "EmitStatement",
                  "src": "1971:54:261"
                }
              ]
            },
            "baseFunctions": [
              92551
            ],
            "documentation": {
              "id": 92599,
              "nodeType": "StructuredDocumentation",
              "src": "1309:35:261",
              "text": "@inheritdoc ITransferAssetFacet"
            },
            "functionSelector": "beabacc8",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 92609,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 92608,
                  "name": "nonReentrant",
                  "nameLocations": [
                    "1461:12:261"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 70780,
                  "src": "1461:12:261"
                },
                "nodeType": "ModifierInvocation",
                "src": "1461:12:261"
              },
              {
                "arguments": [
                  {
                    "id": 92611,
                    "name": "ALLOCATOR_ROLE",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 82017,
                    "src": "1491:14:261",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 92612,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 92610,
                  "name": "onlyRole",
                  "nameLocations": [
                    "1482:8:261"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 82045,
                  "src": "1482:8:261"
                },
                "nodeType": "ModifierInvocation",
                "src": "1482:24:261"
              }
            ],
            "name": "transfer",
            "nameLocation": "1358:8:261",
            "overrides": {
              "id": 92607,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1444:8:261"
            },
            "parameters": {
              "id": 92606,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92601,
                  "mutability": "mutable",
                  "name": "asset",
                  "nameLocation": "1375:5:261",
                  "nodeType": "VariableDeclaration",
                  "scope": 92670,
                  "src": "1367:13:261",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 92600,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1367:7:261",
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
                  "id": 92603,
                  "mutability": "mutable",
                  "name": "destination",
                  "nameLocation": "1390:11:261",
                  "nodeType": "VariableDeclaration",
                  "scope": 92670,
                  "src": "1382:19:261",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 92602,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1382:7:261",
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
                  "id": 92605,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "1411:6:261",
                  "nodeType": "VariableDeclaration",
                  "scope": 92670,
                  "src": "1403:14:261",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92604,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1403:7:261",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1366:52:261"
            },
            "returnParameters": {
              "id": 92613,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1511:0:261"
            },
            "scope": 92689,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 92688,
            "nodeType": "FunctionDefinition",
            "src": "2382:226:261",
            "nodes": [],
            "body": {
              "id": 92687,
              "nodeType": "Block",
              "src": "2526:82:261",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 92682,
                        "name": "_LIMIT_TRANSFER",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92593,
                        "src": "2565:15:261",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 92683,
                        "name": "asset",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92673,
                        "src": "2582:5:261",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 92684,
                        "name": "destination",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92675,
                        "src": "2589:11:261",
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
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 92681,
                      "name": "makeAddressAddressKey",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 100735,
                      "src": "2543:21:261",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_address_$_t_address_$returns$_t_bytes32_$",
                        "typeString": "function (bytes32,address,address) pure returns (bytes32)"
                      }
                    },
                    "id": 92685,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2543:58:261",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 92680,
                  "id": 92686,
                  "nodeType": "Return",
                  "src": "2536:65:261"
                }
              ]
            },
            "baseFunctions": [
              92561
            ],
            "documentation": {
              "id": 92671,
              "nodeType": "StructuredDocumentation",
              "src": "2342:35:261",
              "text": "@inheritdoc ITransferAssetFacet"
            },
            "functionSelector": "a7811f56",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getTransferRateLimitKey",
            "nameLocation": "2391:23:261",
            "overrides": {
              "id": 92677,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2487:8:261"
            },
            "parameters": {
              "id": 92676,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92673,
                  "mutability": "mutable",
                  "name": "asset",
                  "nameLocation": "2423:5:261",
                  "nodeType": "VariableDeclaration",
                  "scope": 92688,
                  "src": "2415:13:261",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 92672,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2415:7:261",
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
                  "id": 92675,
                  "mutability": "mutable",
                  "name": "destination",
                  "nameLocation": "2438:11:261",
                  "nodeType": "VariableDeclaration",
                  "scope": 92688,
                  "src": "2430:19:261",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 92674,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2430:7:261",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2414:36:261"
            },
            "returnParameters": {
              "id": 92680,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92679,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 92688,
                  "src": "2513:7:261",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 92678,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2513:7:261",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2512:9:261"
            },
            "scope": 92689,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 92585,
              "name": "ITransferAssetFacet",
              "nameLocations": [
                "500:19:261"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 92562,
              "src": "500:19:261"
            },
            "id": 92586,
            "nodeType": "InheritanceSpecifier",
            "src": "500:19:261"
          },
          {
            "baseName": {
              "id": 92587,
              "name": "Facet",
              "nameLocations": [
                "521:5:261"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 82138,
              "src": "521:5:261"
            },
            "id": 92588,
            "nodeType": "InheritanceSpecifier",
            "src": "521:5:261"
          }
        ],
        "canonicalName": "TransferAssetFacet",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          92689,
          82138,
          70840,
          70483,
          81432,
          92562,
          82167
        ],
        "name": "TransferAssetFacet",
        "nameLocation": "478:18:261",
        "scope": 92690,
        "usedErrors": [
          70246,
          70249,
          70742,
          82148
        ],
        "usedEvents": [
          70254,
          92541
        ]
      }
    ],
    "license": "AGPL-3.0-or-later"
  },
  "id": 261
} as const;
