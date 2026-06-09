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
      "name": "getToggleOperatorRateLimitKey",
      "inputs": [
        {
          "name": "distributor",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "operator",
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
      "name": "toggleOperator",
      "inputs": [
        {
          "name": "distributor",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "operator",
          "type": "address",
          "internalType": "address"
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
      "name": "MerklToggleOperator",
      "inputs": [
        {
          "name": "distributor",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "operator",
          "type": "address",
          "indexed": true,
          "internalType": "address"
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
    "object": "0x6080604052348015600e575f5ffd5b506107398061001c5f395ff3fe608060405234801561000f575f5ffd5b5060043610610055575f3560e01c8063a217fddf14610059578063bdac7ca314610073578063c81cbaa114610088578063ed3596eb146100af578063ffa1ad74146100c2575b5f5ffd5b6100605f81565b6040519081526020015b60405180910390f35b61008661008136600461050c565b6100f3565b005b6100607f68bf109b95a5c15fb2bb99041323c27d15f8675e11bf7420a1cd6ad64c394f4681565b6100606100bd36600461050c565b61038b565b6100e6604051806040016040528060058152602001640312e302e360dc1b81525081565b60405161006a919061056b565b6100fb6103be565b7f68bf109b95a5c15fb2bb99041323c27d15f8675e11bf7420a1cd6ad64c394f465f7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc0054604051632474521560e21b8152600481018490523360248201526001600160a01b03909116915081906391d1485490604401602060405180830381865afa15801561018c573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101b0919061057d565b338390916101e75760405163e2517d3f60e01b81526001600160a01b03909216600483015260248201526044015b60405180910390fd5b50506101fb6101f6858561038b565b610408565b6102475760405162461bcd60e51b815260206004820152601960248201527f4d65726b6c46616365742f696e76616c69642d616374696f6e0000000000000060448201526064016101de565b7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc0154604080516001600160a01b039283166024820181905292861660448083019190915282518083039091018152606490910182526020810180516001600160e01b031663bdac7ca360e01b1790529051631d56d26960e11b81528291633aada4d2916102d891899160040161059c565b5f604051808303815f875af11580156102f3573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f1916820160405261031a919081019061060c565b50836001600160a01b0316856001600160a01b03167f4dbde1466ca262c0e5f5ee092e25929f118d1256b5f4208b27631ae7faf8c5f060405160405180910390a350505061038760017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b5050565b5f6103b77f5480702d45fe3226d1b8018fb14a0a30a695dee70c030e320b3f78c059fb934e83856104a2565b9392505050565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0080546001190161040257604051633ee5aeb560e01b815260040160405180910390fd5b60029055565b5f807f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc006002015460405160016221581760e21b03198152600481018590526001600160a01b039091169063ff7a9fa490602401608060405180830381865afa158015610476573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061049a91906106a0565b511192915050565b5f8383836040516020016104d2939291909283526001600160a01b03918216602084015216604082015260600190565b6040516020818303038152906040528051906020012090509392505050565b80356001600160a01b0381168114610507575f5ffd5b919050565b5f5f6040838503121561051d575f5ffd5b610526836104f1565b9150610534602084016104f1565b90509250929050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f6103b7602083018461053d565b5f6020828403121561058d575f5ffd5b815180151581146103b7575f5ffd5b6001600160a01b03831681526040602082018190525f906105bf9083018461053d565b949350505050565b634e487b7160e01b5f52604160045260245ffd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610604576106046105c7565b604052919050565b5f6020828403121561061c575f5ffd5b815167ffffffffffffffff811115610632575f5ffd5b8201601f81018413610642575f5ffd5b805167ffffffffffffffff81111561065c5761065c6105c7565b61066f601f8201601f19166020016105db565b818152856020838501011115610683575f5ffd5b8160208401602083015e5f91810160200191909152949350505050565b5f60808284031280156106b1575f5ffd5b506040516080810167ffffffffffffffff811182821017156106d5576106d56105c7565b604090815283518252602080850151908301528381015190820152606092830151928101929092525091905056fea264697066735822122009a5672e93adf24f3dec4ff627e6565356ff7ae549dec772274db9f7928ce8b264736f6c63430008220033",
    "sourceMap": "451:2048:245:-:0;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561000f575f5ffd5b5060043610610055575f3560e01c8063a217fddf14610059578063bdac7ca314610073578063c81cbaa114610088578063ed3596eb146100af578063ffa1ad74146100c2575b5f5ffd5b6100605f81565b6040519081526020015b60405180910390f35b61008661008136600461050c565b6100f3565b005b6100607f68bf109b95a5c15fb2bb99041323c27d15f8675e11bf7420a1cd6ad64c394f4681565b6100606100bd36600461050c565b61038b565b6100e6604051806040016040528060058152602001640312e302e360dc1b81525081565b60405161006a919061056b565b6100fb6103be565b7f68bf109b95a5c15fb2bb99041323c27d15f8675e11bf7420a1cd6ad64c394f465f7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc0054604051632474521560e21b8152600481018490523360248201526001600160a01b03909116915081906391d1485490604401602060405180830381865afa15801561018c573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101b0919061057d565b338390916101e75760405163e2517d3f60e01b81526001600160a01b03909216600483015260248201526044015b60405180910390fd5b50506101fb6101f6858561038b565b610408565b6102475760405162461bcd60e51b815260206004820152601960248201527f4d65726b6c46616365742f696e76616c69642d616374696f6e0000000000000060448201526064016101de565b7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc0154604080516001600160a01b039283166024820181905292861660448083019190915282518083039091018152606490910182526020810180516001600160e01b031663bdac7ca360e01b1790529051631d56d26960e11b81528291633aada4d2916102d891899160040161059c565b5f604051808303815f875af11580156102f3573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f1916820160405261031a919081019061060c565b50836001600160a01b0316856001600160a01b03167f4dbde1466ca262c0e5f5ee092e25929f118d1256b5f4208b27631ae7faf8c5f060405160405180910390a350505061038760017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b5050565b5f6103b77f5480702d45fe3226d1b8018fb14a0a30a695dee70c030e320b3f78c059fb934e83856104a2565b9392505050565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0080546001190161040257604051633ee5aeb560e01b815260040160405180910390fd5b60029055565b5f807f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc006002015460405160016221581760e21b03198152600481018590526001600160a01b039091169063ff7a9fa490602401608060405180830381865afa158015610476573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061049a91906106a0565b511192915050565b5f8383836040516020016104d2939291909283526001600160a01b03918216602084015216604082015260600190565b6040516020818303038152906040528051906020012090509392505050565b80356001600160a01b0381168114610507575f5ffd5b919050565b5f5f6040838503121561051d575f5ffd5b610526836104f1565b9150610534602084016104f1565b90509250929050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f6103b7602083018461053d565b5f6020828403121561058d575f5ffd5b815180151581146103b7575f5ffd5b6001600160a01b03831681526040602082018190525f906105bf9083018461053d565b949350505050565b634e487b7160e01b5f52604160045260245ffd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610604576106046105c7565b604052919050565b5f6020828403121561061c575f5ffd5b815167ffffffffffffffff811115610632575f5ffd5b8201601f81018413610642575f5ffd5b805167ffffffffffffffff81111561065c5761065c6105c7565b61066f601f8201601f19166020016105db565b818152856020838501011115610683575f5ffd5b8160208401602083015e5f91810160200191909152949350505050565b5f60808284031280156106b1575f5ffd5b506040516080810167ffffffffffffffff811182821017156106d5576106d56105c7565b604090815283518252602080850151908301528381015190820152606092830151928101929092525091905056fea264697066735822122009a5672e93adf24f3dec4ff627e6565356ff7ae549dec772274db9f7928ce8b264736f6c63430008220033",
    "sourceMap": "451:2048:245:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;870:58:218;;924:4;870:58;;;;;160:25:388;;;148:2;133:18;870:58:218;;;;;;;;1321:588:245;;;;;;:::i;:::-;;:::i;:::-;;962:77:218;;1012:27;962:77;;2251:245:245;;;;;;:::i;:::-;;:::i;929:49::-;;;;;;;;;;;;;;;-1:-1:-1;;;929:49:245;;;;;;;;;;;;:::i;1321:588::-;3251:21:160;:19;:21::i;:::-;1012:27:218::1;1392:22;1053:34:214::0;1417:44:218;1493:57:::1;::::0;-1:-1:-1;;;1493:57:218;;::::1;::::0;::::1;1332:25:388::0;;;1539:10:218::1;1373:18:388::0;;;1366:60;-1:-1:-1;;;;;1417:44:218;;::::1;::::0;-1:-1:-1;1417:44:218;;1493:39:::1;::::0;1305:18:388;;1493:57:218::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1597:10;1609:4;1472:152;;;;;::::0;-1:-1:-1;;;1472:152:218;;-1:-1:-1;;;;;1911:32:388;;;1472:152:218::1;::::0;::::1;1893:51:388::0;1960:18;;;1953:34;1866:18;;1472:152:218::1;;;;;;;;;;;1507:70:245::2;1524:52;1554:11;1567:8;1524:29;:52::i;:::-;1507:16;:70::i;:::-;1486:142;;;::::0;-1:-1:-1;;;1486:142:245;;2200:2:388;1486:142:245::2;::::0;::::2;2182:21:388::0;2239:2;2219:18;;;2212:30;2278:27;2258:18;;;2251:55;2323:18;;1486:142:245::2;1998:349:388::0;1486:142:245::2;1655:35:::0;;1763:71:::2;::::0;;-1:-1:-1;;;;;1655:35:245;;::::2;1763:71;::::0;::::2;2526:51:388::0;;;2613:32;;;2593:18;;;;2586:60;;;;1763:71:245;;;;;;;;;;2499:18:388;;;;1763:71:245;;::::2;::::0;::::2;::::0;;-1:-1:-1;;;;;1763:71:245::2;-1:-1:-1::0;;;1763:71:245::2;::::0;;1701:143;;-1:-1:-1;;;1701:143:245;;1655:35;;1701:23:::2;::::0;:143:::2;::::0;1738:11;;1701:143:::2;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;;::::2;-1:-1:-1::0;;1701:143:245::2;::::0;::::2;;::::0;::::2;::::0;;;::::2;::::0;::::2;:::i;:::-;;1893:8;-1:-1:-1::0;;;;;1860:42:245::2;1880:11;-1:-1:-1::0;;;;;1860:42:245::2;;;;;;;;;;;1476:433;1382:261:218::1;3282:1:160;3293:20:::0;1805:1;2388:30;3969:23;3716:283;3293:20;1321:588:245;;:::o;2251:245::-;2391:7;2421:68;855:40;2467:8;2477:11;2421:21;:68::i;:::-;2414:75;2251:245;-1:-1:-1;;;2251:245:245:o;3326:384:160:-;2388:30;3526:9;;-1:-1:-1;;3526:20:160;3522:88;;3569:30;;-1:-1:-1;;;3569:30:160;;;;;;;;;;;3522:88;1847:1;3684:19;;3326:384::o;2912:203:218:-;2974:4;;1053:34:214;3022:40:218;;;2997:97;;-1:-1:-1;;;;;;2997:97:218;;;;;160:25:388;;;-1:-1:-1;;;;;3022:40:218;;;;2997:92;;133:18:388;;2997:97:218;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:107;:111;;2912:203;-1:-1:-1;;2912:203:218:o;190:137:289:-;270:7;313:3;318:1;321;302:21;;;;;;;;;5244:25:388;;;-1:-1:-1;;;;;5305:32:388;;;5300:2;5285:18;;5278:60;5374:32;5369:2;5354:18;;5347:60;5232:2;5217:18;;5042:371;302:21:289;;;;;;;;;;;;;292:32;;;;;;285:39;;190:137;;;;;:::o;196:173:388:-;264:20;;-1:-1:-1;;;;;313:31:388;;303:42;;293:70;;359:1;356;349:12;293:70;196:173;;;:::o;374:260::-;442:6;450;503:2;491:9;482:7;478:23;474:32;471:52;;;519:1;516;509:12;471:52;542:29;561:9;542:29;:::i;:::-;532:39;;590:38;624:2;613:9;609:18;590:38;:::i;:::-;580:48;;374:260;;;;;:::o;639:289::-;681:3;719:5;713:12;746:6;741:3;734:19;802:6;795:4;788:5;784:16;777:4;772:3;768:14;762:47;854:1;847:4;838:6;833:3;829:16;825:27;818:38;917:4;910:2;906:7;901:2;893:6;889:15;885:29;880:3;876:39;872:50;865:57;;;639:289;;;;:::o;933:220::-;1082:2;1071:9;1064:21;1045:4;1102:45;1143:2;1132:9;1128:18;1120:6;1102:45;:::i;1437:277::-;1504:6;1557:2;1545:9;1536:7;1532:23;1528:32;1525:52;;;1573:1;1570;1563:12;1525:52;1605:9;1599:16;1658:5;1651:13;1644:21;1637:5;1634:32;1624:60;;1680:1;1677;1670:12;2657:315;-1:-1:-1;;;;;2832:32:388;;2814:51;;2901:2;2896;2881:18;;2874:30;;;-1:-1:-1;;2921:45:388;;2947:18;;2939:6;2921:45;:::i;:::-;2913:53;2657:315;-1:-1:-1;;;;2657:315:388:o;2977:127::-;3038:10;3033:3;3029:20;3026:1;3019:31;3069:4;3066:1;3059:15;3093:4;3090:1;3083:15;3109:275;3180:2;3174:9;3245:2;3226:13;;-1:-1:-1;;3222:27:388;3210:40;;3280:18;3265:34;;3301:22;;;3262:62;3259:88;;;3327:18;;:::i;:::-;3363:2;3356:22;3109:275;;-1:-1:-1;3109:275:388:o;3389:755::-;3468:6;3521:2;3509:9;3500:7;3496:23;3492:32;3489:52;;;3537:1;3534;3527:12;3489:52;3570:9;3564:16;3603:18;3595:6;3592:30;3589:50;;;3635:1;3632;3625:12;3589:50;3658:22;;3711:4;3703:13;;3699:27;-1:-1:-1;3689:55:388;;3740:1;3737;3730:12;3689:55;3773:2;3767:9;3799:18;3791:6;3788:30;3785:56;;;3821:18;;:::i;:::-;3863:57;3910:2;3887:17;;-1:-1:-1;;3883:31:388;3916:2;3879:40;3863:57;:::i;:::-;3943:6;3936:5;3929:21;3991:7;3986:2;3977:6;3973:2;3969:15;3965:24;3962:37;3959:57;;;4012:1;4009;4002:12;3959:57;4060:6;4055:2;4051;4047:11;4042:2;4035:5;4031:14;4025:42;4112:1;4087:18;;;4107:2;4083:27;4076:38;;;;4091:5;3389:755;-1:-1:-1;;;;3389:755:388:o;4149:888::-;4252:6;4312:3;4300:9;4291:7;4287:23;4283:33;4328:2;4325:22;;;4343:1;4340;4333:12;4325:22;-1:-1:-1;4412:2:388;4406:9;4454:3;4442:16;;4488:18;4473:34;;4509:22;;;4470:62;4467:88;;;4535:18;;:::i;:::-;4571:2;4564:22;;;4627:16;;4652:21;;4739:2;4724:18;;;4718:25;4759:15;;;4752:32;4835:18;;;4829:25;4870:15;;;4863:32;4961:2;4946:18;;;4940:25;4981:15;;;4974:32;;;;-1:-1:-1;4659:6:388;4149:888;-1:-1:-1;4149:888:388:o",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "ALLOCATOR_ROLE()": "c81cbaa1",
    "DEFAULT_ADMIN_ROLE()": "a217fddf",
    "VERSION()": "ffa1ad74",
    "getToggleOperatorRateLimitKey(address,address)": "ed3596eb",
    "toggleOperator(address,address)": "bdac7ca3"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.34+commit.80d5c536\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"AccessControlUnauthorizedAccount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidInitialization\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotInitializing\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"version\",\"type\":\"uint64\"}],\"name\":\"Initialized\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"distributor\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"MerklToggleOperator\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"ALLOCATOR_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"DEFAULT_ADMIN_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"VERSION\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"distributor\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"getToggleOperatorRateLimitKey\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"distributor\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"toggleOperator\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"InvalidInitialization()\":[{\"details\":\"The contract is already initialized.\"}],\"NotInitializing()\":[{\"details\":\"The contract is not initializing.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"events\":{\"Initialized(uint64)\":{\"details\":\"Triggered when the contract has been initialized or reinitialized.\"},\"MerklToggleOperator(address,address)\":{\"params\":{\"distributor\":\"Address of the Merkl reward distributor contract.\",\"operator\":\"Address of the operator being toggled.\"}}},\"kind\":\"dev\",\"methods\":{\"getToggleOperatorRateLimitKey(address,address)\":{\"params\":{\"distributor\":\"Address of the Merkl reward distributor contract.\",\"operator\":\"Address of the operator being toggled.\"},\"returns\":{\"_0\":\"        Derived rate limit key.\"}},\"toggleOperator(address,address)\":{\"params\":{\"distributor\":\"Address of the Merkl reward distributor contract.\",\"operator\":\"Address of the operator to toggle.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"AccessControlUnauthorizedAccount(address,bytes32)\":[{\"notice\":\"Thrown when a caller lacks the required access control role.\"}]},\"events\":{\"MerklToggleOperator(address,address)\":{\"notice\":\"Emitted when an operator is toggled on the Merkl distributor.\"}},\"kind\":\"user\",\"methods\":{\"ALLOCATOR_ROLE()\":{\"notice\":\"Role identifier for allocator accounts authorized to execute facet operations.\"},\"DEFAULT_ADMIN_ROLE()\":{\"notice\":\"Role identifier for the default admin (bytes32(0)).\"},\"VERSION()\":{\"notice\":\"Semantic version string of the facet.\"},\"getToggleOperatorRateLimitKey(address,address)\":{\"notice\":\"Returns the derived toggle operator rate limit key for a distributor and operator.\"},\"toggleOperator(address,address)\":{\"notice\":\"Toggles an operator's authorization on the Merkl distributor for the proxy.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/facets/merkl/MerklFacet.sol\":\"MerklFacet\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@ensdomains/=lib/uniswap-v4-periphery/lib/v4-core/node_modules/@ensdomains/\",\":@layerzerolabs/lz-evm-messagelib-v2/=lib/layerzero-v2/packages/layerzero-v2/evm/messagelib/\",\":@layerzerolabs/lz-evm-protocol-v2/=lib/layerzero-v2/packages/layerzero-v2/evm/protocol/\",\":@layerzerolabs/oft-evm/=lib/grove-xchain-helpers/lib/devtools/packages/oft-evm/\",\":@openzeppelin/contracts-upgradeable/=lib/oz-upgradeable/contracts/\",\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":@uniswap/v4-core/=lib/uniswap-v4-periphery/lib/v4-core/\",\":LayerZero-v2/=lib/grove-xchain-helpers/lib/\",\":aave-v3-core/=lib/aave-v3-origin/src/core/\",\":aave-v3-origin/=lib/aave-v3-origin/\",\":aave-v3-periphery/=lib/aave-v3-origin/src/periphery/\",\":devtools/=lib/grove-xchain-helpers/lib/devtools/packages/toolbox-foundry/src/\",\":ds-test/=lib/grove-address-registry/lib/forge-std/lib/ds-test/src/\",\":dss-allocator/=lib/dss-allocator/\",\":dss-interfaces/=lib/dss-test/lib/dss-interfaces/src/\",\":dss-test/=lib/dss-test/src/\",\":erc20-helpers/=lib/grove-basin/lib/erc20-helpers/src/\",\":erc4626-tests/=lib/metamorpho/lib/erc4626-tests/\",\":forge-gas-snapshot/=lib/uniswap-v4-periphery/lib/permit2/lib/forge-gas-snapshot/src/\",\":forge-std/=lib/forge-std/src/\",\":grove-address-registry/=lib/grove-address-registry/src/\",\":grove-basin/=lib/grove-basin/\",\":grove-xchain-helpers/=lib/grove-xchain-helpers/src/\",\":halmos-cheatcodes/=lib/grove-basin/lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/\",\":hardhat/=lib/uniswap-v4-periphery/lib/v4-core/node_modules/hardhat/\",\":layerzero-v2/=lib/layerzero-v2/\",\":layerzerolabs/oapp-evm/=lib/grove-xchain-helpers/lib/devtools/packages/oapp-evm/\",\":metamorpho/=lib/metamorpho/src/\",\":morpho-blue/=lib/metamorpho/lib/morpho-blue/\",\":murky/=lib/metamorpho/lib/universal-rewards-distributor/lib/murky/src/\",\":openzeppelin-contracts-upgradeable/=lib/spark-vaults-v2/lib/openzeppelin-contracts-upgradeable/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/metamorpho/lib/universal-rewards-distributor/lib/openzeppelin-contracts/contracts/\",\":oz-upgradeable/=lib/oz-upgradeable/\",\":permit2/=lib/uniswap-v4-periphery/lib/permit2/\",\":solidity-bytes-utils/=lib/solidity-bytes-utils/\",\":solidity-utils/=lib/aave-v3-origin/lib/solidity-utils/\",\":solmate/=lib/uniswap-v4-periphery/lib/v4-core/lib/solmate/\",\":spark-address-registry/=lib/spark-address-registry/src/\",\":spark-psm/=lib/spark-psm/\",\":spark-vaults-v2/=lib/spark-vaults-v2/\",\":sparklend-address-registry/=lib/grove-basin/lib/xchain-ssr-oracle/lib/sparklend-address-registry/\",\":token-tests/=lib/spark-vaults-v2/lib/token-tests/src/\",\":uniswap-v4-periphery/=lib/uniswap-v4-periphery/\",\":universal-rewards-distributor/=lib/metamorpho/lib/universal-rewards-distributor/src/\",\":v4-core/=lib/uniswap-v4-periphery/lib/v4-core/src/\",\":xchain-helpers/=lib/xchain-helpers/src/\",\":xchain-ssr-oracle/=lib/grove-basin/lib/xchain-ssr-oracle/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/access/IAccessControl.sol\":{\"keccak256\":\"0xb6b36edd6a2999fd243ff226d6cbf84bd71af2432bbd0dfe19392996a1d9cb41\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1fd2f35495652e57e3f99bc6c510bc5f7dd398a176ea2e72d8ed730aebc6ca26\",\"dweb:/ipfs/QmTQV6X4gkikTib49cho5iDX3JvSQbdsoEChoDwrk3CbbH\"]},\"lib/openzeppelin-contracts/contracts/access/extensions/IAccessControlEnumerable.sol\":{\"keccak256\":\"0xc1435f102633849858e75d7bed14c636f25448ceb3406d82992b0f2df52f4306\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ce1815e3a1da24f91b8e2ec24cf09d0d46e0fbeddcbe2cb0d8b2e05b91ceb7b3\",\"dweb:/ipfs/QmYTy1AQB5EV5jwuGsB49yykng2oG3x5ss4bDjFNxk3He4\"]},\"lib/oz-upgradeable/contracts/proxy/utils/Initializable.sol\":{\"keccak256\":\"0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609\",\"dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM\"]},\"lib/oz-upgradeable/contracts/utils/ReentrancyGuardUpgradeable.sol\":{\"keccak256\":\"0xb44e086e941292cdc7f440de51478493894ef0b1aeccb0c4047445919f667f74\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://942dad22fbdc1669f025540ba63aa3ccfad5f8458fc5d4525b31ebf272e7af45\",\"dweb:/ipfs/Qmdo4X2M82aM3AMoW2kf2jhYkSCyC4T1pHNd6obdsDFnAB\"]},\"src/ControllerSharedStorage.sol\":{\"keccak256\":\"0x08b85a82fbcfb5d837ac222fe71c7a458bab9edd8cfe0df02b3c38d6780b4400\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://577a9d2fc6796614c022fe701c981faa4df931dd5346e21167fbc46f3e199985\",\"dweb:/ipfs/QmYRyEbGum5TJF4yYNksK2H2CbmqYdcqiri5ZtFKrc36k7\"]},\"src/facets/Facet.sol\":{\"keccak256\":\"0xe86c5d5b73af2713e4e6754267af20325421b72c88a1dbf6dfbe9978b259edc2\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://28c6bcfbb07742b4be8f7188a3a9af301a6570616cf97564eb80091c09001ca9\",\"dweb:/ipfs/QmchiTioPPk7YbTtVpLN33hRNu1CKJoTH69He4BtUyXimA\"]},\"src/facets/IFacet.sol\":{\"keccak256\":\"0x0f0acb5faa3c227edc594e69507f89f0f063712847f361fbc51dbc2e9dd51d0a\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://ded1143f96b28d02e5eae73cf84af8e72ac15b31e2737ae29dc962c2975eb34c\",\"dweb:/ipfs/QmNrdGdJkHC2YWBMx4dQmihdwuSs7XDNgf8NYzQUsZifT2\"]},\"src/facets/merkl/IMerklFacet.sol\":{\"keccak256\":\"0x420a5a91c42b1166a7b66015317a50438f1c2c6087a45c866851ddc67881bae0\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://91abc3da138554f7704475f0d70bc18d26fa3eeb97881a0d35239243ca444607\",\"dweb:/ipfs/QmfMGMKaca8w5j2vGs3QDqTFncLpDnwWxroEWbMBR7Zn7M\"]},\"src/facets/merkl/MerklFacet.sol\":{\"keccak256\":\"0x5bd2790237756b21f1a080522cfd690be5c03fa411ceef81096205571361cdcb\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://0a9b6f221980a1b0a3ec6c96fd27f85214577b885401be6418fcb9ca5339f7bf\",\"dweb:/ipfs/QmQGwH4viTeqvQJdDTZgHHy2XXDvkgwjDLakS1hvgFbth3\"]},\"src/interfaces/IALMProxy.sol\":{\"keccak256\":\"0xa965efa753f8b48b5b08f4b98699a95ab4671c2e6b8c53c514dae9bda250f80e\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://1188a471d62be8e9439a9ac311f4e872288a414348341d7d0095928b846c6d19\",\"dweb:/ipfs/QmcUkHyM2YuZM4UicTBg47oTCYHxmzMf6Hd16hWyfsCJEd\"]},\"src/interfaces/IAccessControls.sol\":{\"keccak256\":\"0x774a4156bb41a733bd219dd14cf7ea7b10007662ab1ea2bdc83ffc197ed09637\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://9e923dced22563718b532893e9a70b2656ed6fbc556539ef5e2fe47fc4cd1c6d\",\"dweb:/ipfs/QmSh9RSdnatrSnMCxhnmyT8m6NFkFzCDDLPnzDVpfKDxYJ\"]},\"src/interfaces/IRateLimits.sol\":{\"keccak256\":\"0x20ea43787a1ad8c78805bdc194e57c5838176c258985342242b7211bfe7e6a4a\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://76555b4d5238e3faa3ebfe6b8eea949623cc5882d3c77835324459b3c664c0d6\",\"dweb:/ipfs/QmcfhxoLBDZrdBweL6PAV74NFHnVCeSDS7geQhYHt4LfhF\"]},\"src/libraries/RateLimitHelpers.sol\":{\"keccak256\":\"0x2aa83bc51a795f37ac31eea7e8c92563ba355f545cfde617d782b145da1f32cf\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://0bed4da7e8f6171839257219f3486f047102f3d7f69999aeeb96091a7d49e4b7\",\"dweb:/ipfs/QmRKHfUNZi6eogCUofurpBTjpWqfCLUsz3t48VXyU64jqs\"]}},\"version\":1}",
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
              "name": "distributor",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "MerklToggleOperator",
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
              "name": "distributor",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "getToggleOperatorRateLimitKey",
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
              "name": "distributor",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "toggleOperator"
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "getToggleOperatorRateLimitKey(address,address)": {
            "params": {
              "distributor": "Address of the Merkl reward distributor contract.",
              "operator": "Address of the operator being toggled."
            },
            "returns": {
              "_0": "        Derived rate limit key."
            }
          },
          "toggleOperator(address,address)": {
            "params": {
              "distributor": "Address of the Merkl reward distributor contract.",
              "operator": "Address of the operator to toggle."
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
          "getToggleOperatorRateLimitKey(address,address)": {
            "notice": "Returns the derived toggle operator rate limit key for a distributor and operator."
          },
          "toggleOperator(address,address)": {
            "notice": "Toggles an operator's authorization on the Merkl distributor for the proxy."
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
        "src/facets/merkl/MerklFacet.sol": "MerklFacet"
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
      "src/facets/merkl/IMerklFacet.sol": {
        "keccak256": "0x420a5a91c42b1166a7b66015317a50438f1c2c6087a45c866851ddc67881bae0",
        "urls": [
          "bzz-raw://91abc3da138554f7704475f0d70bc18d26fa3eeb97881a0d35239243ca444607",
          "dweb:/ipfs/QmfMGMKaca8w5j2vGs3QDqTFncLpDnwWxroEWbMBR7Zn7M"
        ],
        "license": "AGPL-3.0-or-later"
      },
      "src/facets/merkl/MerklFacet.sol": {
        "keccak256": "0x5bd2790237756b21f1a080522cfd690be5c03fa411ceef81096205571361cdcb",
        "urls": [
          "bzz-raw://0a9b6f221980a1b0a3ec6c96fd27f85214577b885401be6418fcb9ca5339f7bf",
          "dweb:/ipfs/QmQGwH4viTeqvQJdDTZgHHy2XXDvkgwjDLakS1hvgFbth3"
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
    "absolutePath": "src/facets/merkl/MerklFacet.sol",
    "id": 89698,
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
      "IMerklDistributorLike": [
        89613
      ],
      "IMerklFacet": [
        89593
      ],
      "MerklFacet": [
        89697
      ],
      "makeAddressAddressKey": [
        100735
      ]
    },
    "nodeType": "SourceUnit",
    "src": "46:2454:245",
    "nodes": [
      {
        "id": 89595,
        "nodeType": "PragmaDirective",
        "src": "46:24:245",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".34"
        ]
      },
      {
        "id": 89597,
        "nodeType": "ImportDirective",
        "src": "72:77:245",
        "nodes": [],
        "absolutePath": "src/libraries/RateLimitHelpers.sol",
        "file": "../../libraries/RateLimitHelpers.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 89698,
        "sourceUnit": 100913,
        "symbolAliases": [
          {
            "foreign": {
              "id": 89596,
              "name": "makeAddressAddressKey",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 100735,
              "src": "81:21:245",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 89599,
        "nodeType": "ImportDirective",
        "src": "151:59:245",
        "nodes": [],
        "absolutePath": "src/interfaces/IALMProxy.sol",
        "file": "../../interfaces/IALMProxy.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 89698,
        "sourceUnit": 100082,
        "symbolAliases": [
          {
            "foreign": {
              "id": 89598,
              "name": "IALMProxy",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 100081,
              "src": "160:9:245",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 89601,
        "nodeType": "ImportDirective",
        "src": "212:39:245",
        "nodes": [],
        "absolutePath": "src/facets/IFacet.sol",
        "file": "../IFacet.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 89698,
        "sourceUnit": 82168,
        "symbolAliases": [
          {
            "foreign": {
              "id": 89600,
              "name": "IFacet",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 82167,
              "src": "221:6:245",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 89603,
        "nodeType": "ImportDirective",
        "src": "253:37:245",
        "nodes": [],
        "absolutePath": "src/facets/Facet.sol",
        "file": "../Facet.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 89698,
        "sourceUnit": 82139,
        "symbolAliases": [
          {
            "foreign": {
              "id": 89602,
              "name": "Facet",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 82138,
              "src": "262:5:245",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 89605,
        "nodeType": "ImportDirective",
        "src": "292:48:245",
        "nodes": [],
        "absolutePath": "src/facets/merkl/IMerklFacet.sol",
        "file": "./IMerklFacet.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 89698,
        "sourceUnit": 89594,
        "symbolAliases": [
          {
            "foreign": {
              "id": 89604,
              "name": "IMerklFacet",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 89593,
              "src": "301:11:245",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 89613,
        "nodeType": "ContractDefinition",
        "src": "342:107:245",
        "nodes": [
          {
            "id": 89612,
            "nodeType": "FunctionDefinition",
            "src": "381:65:245",
            "nodes": [],
            "functionSelector": "bdac7ca3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "toggleOperator",
            "nameLocation": "390:14:245",
            "parameters": {
              "id": 89610,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 89607,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "413:4:245",
                  "nodeType": "VariableDeclaration",
                  "scope": 89612,
                  "src": "405:12:245",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 89606,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "405:7:245",
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
                  "id": 89609,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "427:8:245",
                  "nodeType": "VariableDeclaration",
                  "scope": 89612,
                  "src": "419:16:245",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 89608,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "419:7:245",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "404:32:245"
            },
            "returnParameters": {
              "id": 89611,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "445:0:245"
            },
            "scope": 89613,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IMerklDistributorLike",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          89613
        ],
        "name": "IMerklDistributorLike",
        "nameLocation": "352:21:245",
        "scope": 89698,
        "usedErrors": [],
        "usedEvents": []
      },
      {
        "id": 89697,
        "nodeType": "ContractDefinition",
        "src": "451:2048:245",
        "nodes": [
          {
            "id": 89622,
            "nodeType": "VariableDeclaration",
            "src": "804:91:245",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_LIMIT_TOGGLE_OPERATOR",
            "nameLocation": "830:22:245",
            "scope": 89697,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 89618,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "804:7:245",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "arguments": [
                {
                  "hexValue": "4c494d49545f4d45524b4c5f544f47474c455f4f50455241544f52",
                  "id": 89620,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "865:29:245",
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_5480702d45fe3226d1b8018fb14a0a30a695dee70c030e320b3f78c059fb934e",
                    "typeString": "literal_string \"LIMIT_MERKL_TOGGLE_OPERATOR\""
                  },
                  "value": "LIMIT_MERKL_TOGGLE_OPERATOR"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_5480702d45fe3226d1b8018fb14a0a30a695dee70c030e320b3f78c059fb934e",
                    "typeString": "literal_string \"LIMIT_MERKL_TOGGLE_OPERATOR\""
                  }
                ],
                "id": 89619,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": -8,
                "src": "855:9:245",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                  "typeString": "function (bytes memory) pure returns (bytes32)"
                }
              },
              "id": 89621,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "855:40:245",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 89627,
            "nodeType": "VariableDeclaration",
            "src": "929:49:245",
            "nodes": [],
            "baseFunctions": [
              82166
            ],
            "constant": true,
            "documentation": {
              "id": 89623,
              "nodeType": "StructuredDocumentation",
              "src": "902:22:245",
              "text": "@inheritdoc IFacet"
            },
            "functionSelector": "ffa1ad74",
            "mutability": "constant",
            "name": "VERSION",
            "nameLocation": "961:7:245",
            "overrides": {
              "id": 89625,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "952:8:245"
            },
            "scope": 89697,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 89624,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "929:6:245",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "312e302e30",
              "id": 89626,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "971:7:245",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_06c015bd22b4c69690933c1058878ebdfef31f9aaae40bbe86d8a09fe1b2972c",
                "typeString": "literal_string \"1.0.0\""
              },
              "value": "1.0.0"
            },
            "visibility": "public"
          },
          {
            "id": 89678,
            "nodeType": "FunctionDefinition",
            "src": "1321:588:245",
            "nodes": [],
            "body": {
              "id": 89677,
              "nodeType": "Block",
              "src": "1476:433:245",
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
                                "id": 89644,
                                "name": "distributor",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 89630,
                                "src": "1554:11:245",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 89645,
                                "name": "operator",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 89632,
                                "src": "1567:8:245",
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
                              "id": 89643,
                              "name": "getToggleOperatorRateLimitKey",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 89696,
                              "src": "1524:29:245",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_address_$_t_address_$returns$_t_bytes32_$",
                                "typeString": "function (address,address) pure returns (bytes32)"
                              }
                            },
                            "id": 89646,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1524:52:245",
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
                          "id": 89642,
                          "name": "_rateLimitExists",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 82137,
                          "src": "1507:16:245",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view returns (bool)"
                          }
                        },
                        "id": 89647,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1507:70:245",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4d65726b6c46616365742f696e76616c69642d616374696f6e",
                        "id": 89648,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1591:27:245",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_644733f272459ceb7f4985345dc306c0793af7019b5211bce1f89f0036587c55",
                          "typeString": "literal_string \"MerklFacet/invalid-action\""
                        },
                        "value": "MerklFacet/invalid-action"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_644733f272459ceb7f4985345dc306c0793af7019b5211bce1f89f0036587c55",
                          "typeString": "literal_string \"MerklFacet/invalid-action\""
                        }
                      ],
                      "id": 89641,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1486:7:245",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 89649,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1486:142:245",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 89650,
                  "nodeType": "ExpressionStatement",
                  "src": "1486:142:245"
                },
                {
                  "assignments": [
                    89652
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 89652,
                      "mutability": "mutable",
                      "name": "proxy",
                      "nameLocation": "1647:5:245",
                      "nodeType": "VariableDeclaration",
                      "scope": 89677,
                      "src": "1639:13:245",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 89651,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1639:7:245",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 89656,
                  "initialValue": {
                    "expression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 89653,
                        "name": "_getSharedControllerStorage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 81431,
                        "src": "1655:27:245",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_SharedControllerStorage_$81420_storage_ptr_$",
                          "typeString": "function () pure returns (struct ControllerSharedStorage.SharedControllerStorage storage pointer)"
                        }
                      },
                      "id": 89654,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1655:29:245",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_SharedControllerStorage_$81420_storage_ptr",
                        "typeString": "struct ControllerSharedStorage.SharedControllerStorage storage pointer"
                      }
                    },
                    "id": 89655,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "1685:5:245",
                    "memberName": "proxy",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 81417,
                    "src": "1655:35:245",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1639:51:245"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 89661,
                        "name": "distributor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 89630,
                        "src": "1738:11:245",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 89664,
                              "name": "IMerklDistributorLike",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 89613,
                              "src": "1778:21:245",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IMerklDistributorLike_$89613_$",
                                "typeString": "type(contract IMerklDistributorLike)"
                              }
                            },
                            "id": 89665,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "1800:14:245",
                            "memberName": "toggleOperator",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 89612,
                            "src": "1778:36:245",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_declaration_nonpayable$_t_address_$_t_address_$returns$__$",
                              "typeString": "function IMerklDistributorLike.toggleOperator(address,address)"
                            }
                          },
                          {
                            "components": [
                              {
                                "id": 89666,
                                "name": "proxy",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 89652,
                                "src": "1817:5:245",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 89667,
                                "name": "operator",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 89632,
                                "src": "1824:8:245",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "id": 89668,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "1816:17:245",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$_t_address_$_t_address_$",
                              "typeString": "tuple(address,address)"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_function_declaration_nonpayable$_t_address_$_t_address_$returns$__$",
                              "typeString": "function IMerklDistributorLike.toggleOperator(address,address)"
                            },
                            {
                              "typeIdentifier": "t_tuple$_t_address_$_t_address_$",
                              "typeString": "tuple(address,address)"
                            }
                          ],
                          "expression": {
                            "id": 89662,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "1763:3:245",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 89663,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "1767:10:245",
                          "memberName": "encodeCall",
                          "nodeType": "MemberAccess",
                          "src": "1763:14:245",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 89669,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1763:71:245",
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
                            "id": 89658,
                            "name": "proxy",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 89652,
                            "src": "1711:5:245",
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
                          "id": 89657,
                          "name": "IALMProxy",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 100081,
                          "src": "1701:9:245",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IALMProxy_$100081_$",
                            "typeString": "type(contract IALMProxy)"
                          }
                        },
                        "id": 89659,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1701:16:245",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IALMProxy_$100081",
                          "typeString": "contract IALMProxy"
                        }
                      },
                      "id": 89660,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1718:6:245",
                      "memberName": "doCall",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 100052,
                      "src": "1701:23:245",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory) external returns (bytes memory)"
                      }
                    },
                    "id": 89670,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1701:143:245",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 89671,
                  "nodeType": "ExpressionStatement",
                  "src": "1701:143:245"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 89673,
                        "name": "distributor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 89630,
                        "src": "1880:11:245",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 89674,
                        "name": "operator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 89632,
                        "src": "1893:8:245",
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
                      "id": 89672,
                      "name": "MerklToggleOperator",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 89574,
                      "src": "1860:19:245",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 89675,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1860:42:245",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 89676,
                  "nodeType": "EmitStatement",
                  "src": "1855:47:245"
                }
              ]
            },
            "baseFunctions": [
              89582
            ],
            "documentation": {
              "id": 89628,
              "nodeType": "StructuredDocumentation",
              "src": "1289:27:245",
              "text": "@inheritdoc IMerklFacet"
            },
            "functionSelector": "bdac7ca3",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 89636,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 89635,
                  "name": "nonReentrant",
                  "nameLocations": [
                    "1426:12:245"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 70780,
                  "src": "1426:12:245"
                },
                "nodeType": "ModifierInvocation",
                "src": "1426:12:245"
              },
              {
                "arguments": [
                  {
                    "id": 89638,
                    "name": "ALLOCATOR_ROLE",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 82017,
                    "src": "1456:14:245",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 89639,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 89637,
                  "name": "onlyRole",
                  "nameLocations": [
                    "1447:8:245"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 82045,
                  "src": "1447:8:245"
                },
                "nodeType": "ModifierInvocation",
                "src": "1447:24:245"
              }
            ],
            "name": "toggleOperator",
            "nameLocation": "1330:14:245",
            "overrides": {
              "id": 89634,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1409:8:245"
            },
            "parameters": {
              "id": 89633,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 89630,
                  "mutability": "mutable",
                  "name": "distributor",
                  "nameLocation": "1353:11:245",
                  "nodeType": "VariableDeclaration",
                  "scope": 89678,
                  "src": "1345:19:245",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 89629,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1345:7:245",
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
                  "id": 89632,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "1374:8:245",
                  "nodeType": "VariableDeclaration",
                  "scope": 89678,
                  "src": "1366:16:245",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 89631,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1366:7:245",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1344:39:245"
            },
            "returnParameters": {
              "id": 89640,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1476:0:245"
            },
            "scope": 89697,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 89696,
            "nodeType": "FunctionDefinition",
            "src": "2251:245:245",
            "nodes": [],
            "body": {
              "id": 89695,
              "nodeType": "Block",
              "src": "2404:92:245",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 89690,
                        "name": "_LIMIT_TOGGLE_OPERATOR",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 89622,
                        "src": "2443:22:245",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 89691,
                        "name": "operator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 89683,
                        "src": "2467:8:245",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 89692,
                        "name": "distributor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 89681,
                        "src": "2477:11:245",
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
                      "id": 89689,
                      "name": "makeAddressAddressKey",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 100735,
                      "src": "2421:21:245",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_address_$_t_address_$returns$_t_bytes32_$",
                        "typeString": "function (bytes32,address,address) pure returns (bytes32)"
                      }
                    },
                    "id": 89693,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2421:68:245",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 89688,
                  "id": 89694,
                  "nodeType": "Return",
                  "src": "2414:75:245"
                }
              ]
            },
            "baseFunctions": [
              89592
            ],
            "documentation": {
              "id": 89679,
              "nodeType": "StructuredDocumentation",
              "src": "2219:27:245",
              "text": "@inheritdoc IMerklFacet"
            },
            "functionSelector": "ed3596eb",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getToggleOperatorRateLimitKey",
            "nameLocation": "2260:29:245",
            "overrides": {
              "id": 89685,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2365:8:245"
            },
            "parameters": {
              "id": 89684,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 89681,
                  "mutability": "mutable",
                  "name": "distributor",
                  "nameLocation": "2298:11:245",
                  "nodeType": "VariableDeclaration",
                  "scope": 89696,
                  "src": "2290:19:245",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 89680,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2290:7:245",
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
                  "id": 89683,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "2319:8:245",
                  "nodeType": "VariableDeclaration",
                  "scope": 89696,
                  "src": "2311:16:245",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 89682,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2311:7:245",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2289:39:245"
            },
            "returnParameters": {
              "id": 89688,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 89687,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 89696,
                  "src": "2391:7:245",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 89686,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2391:7:245",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2390:9:245"
            },
            "scope": 89697,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 89614,
              "name": "IMerklFacet",
              "nameLocations": [
                "474:11:245"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 89593,
              "src": "474:11:245"
            },
            "id": 89615,
            "nodeType": "InheritanceSpecifier",
            "src": "474:11:245"
          },
          {
            "baseName": {
              "id": 89616,
              "name": "Facet",
              "nameLocations": [
                "487:5:245"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 82138,
              "src": "487:5:245"
            },
            "id": 89617,
            "nodeType": "InheritanceSpecifier",
            "src": "487:5:245"
          }
        ],
        "canonicalName": "MerklFacet",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          89697,
          82138,
          70840,
          70483,
          81432,
          89593,
          82167
        ],
        "name": "MerklFacet",
        "nameLocation": "460:10:245",
        "scope": 89698,
        "usedErrors": [
          70246,
          70249,
          70742,
          82148
        ],
        "usedEvents": [
          70254,
          89574
        ]
      }
    ],
    "license": "AGPL-3.0-or-later"
  },
  "id": 245
} as const;
