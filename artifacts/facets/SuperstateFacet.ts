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
          "name": "usdc_",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "ustb_",
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
      "name": "subscribe",
      "inputs": [
        {
          "name": "usdcAmount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "subscribeRateLimitKey",
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
      "name": "usdc",
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
      "name": "ustb",
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
      "name": "SuperstateSubscribe",
      "inputs": [
        {
          "name": "usdcAmount",
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
    "object": "0x60c060405234801561000f575f5ffd5b50604051610bfc380380610bfc83398101604081905261002e91610111565b6001600160a01b0382166100895760405162461bcd60e51b815260206004820152601960248201527f5375706572737461746546616365742f7a65726f2d757364630000000000000060448201526064015b60405180910390fd5b6001600160a01b0381166100df5760405162461bcd60e51b815260206004820152601960248201527f5375706572737461746546616365742f7a65726f2d75737462000000000000006044820152606401610080565b6001600160a01b039182166080521660a052610142565b80516001600160a01b038116811461010c575f5ffd5b919050565b5f5f60408385031215610122575f5ffd5b61012b836100f6565b9150610139602084016100f6565b90509250929050565b60805160a051610a7061018c5f395f818161010c015281816103050152818161033b015261045301525f818160cd015281816102e30152818161035d01526104310152610a705ff3fe608060405234801561000f575f5ffd5b506004361061007a575f3560e01c806395f4324e1161005857806395f4324e14610107578063a217fddf1461012e578063c81cbaa114610135578063ffa1ad741461015c575f5ffd5b80630f574ba71461007e5780633a9758b2146100935780633e413bee146100c8575b5f5ffd5b61009161008c36600461089e565b61018d565b005b7f213c645fc0f2b08264743dd819fb1d54d9a3d9d1eab0fa654e1a7bf7b22ee7965b6040519081526020015b60405180910390f35b6100ef7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100bf565b6100ef7f000000000000000000000000000000000000000000000000000000000000000081565b6100b55f81565b6100b57f68bf109b95a5c15fb2bb99041323c27d15f8675e11bf7420a1cd6ad64c394f4681565b610180604051806040016040528060058152602001640312e302e360dc1b81525081565b6040516100bf91906108e3565b6101956104da565b7f68bf109b95a5c15fb2bb99041323c27d15f8675e11bf7420a1cd6ad64c394f465f7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc0054604051632474521560e21b8152600481018490523360248201526001600160a01b03909116915081906391d1485490604401602060405180830381865afa158015610226573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061024a91906108fc565b338390916102815760405163e2517d3f60e01b81526001600160a01b03909216600483015260248201526044015b60405180910390fd5b50506102b36102ad7f213c645fc0f2b08264743dd819fb1d54d9a3d9d1eab0fa654e1a7bf7b22ee79690565b84610524565b7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc01546001600160a01b031661032a7f0000000000000000000000000000000000000000000000000000000000000000827f0000000000000000000000000000000000000000000000000000000000000000876105be565b806001600160a01b0316633aada4d27f0000000000000000000000000000000000000000000000000000000000000000867f000000000000000000000000000000000000000000000000000000000000000060405160240161039f9291909182526001600160a01b0316602082015260400190565b60408051601f198184030181529181526020820180516001600160e01b03166359e6951d60e01b179052516001600160e01b031960e085901b1681526103e992919060040161091b565b5f604051808303815f875af1158015610404573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f1916820160405261042b919081019061095a565b506104787f0000000000000000000000000000000000000000000000000000000000000000827f00000000000000000000000000000000000000000000000000000000000000005f6105be565b6040518481527fd71b433ff92d6455c6e9ae41422abbaf7a9413dd6ec74bbbc99094c073fed8489060200160405180910390a15050506104d760017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b50565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0080546001190161051e57604051633ee5aeb560e01b815260040160405180910390fd5b60029055565b7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc00600201546040516303bf076b60e41b815260048101849052602481018390526001600160a01b0390911690633bf076b0906044016020604051808303815f875af1158015610595573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105b99190610a0d565b505050565b6040516001600160a01b0383166024820152604481018290525f9060640160408051601f198184030181529181526020820180516001600160e01b031663095ea7b360e01b179052519091505f9081906001600160a01b03871690610629908990869060240161091b565b60408051601f198184030181529181526020820180516001600160e01b0316631d56d26960e11b1790525161065e9190610a24565b5f604051808303815f865af19150503d805f8114610697576040519150601f19603f3d011682016040523d82523d5f602084013e61069c565b606091505b5091509150606082156106f757818060200190518101906106bd919061095a565b905080515f14806106e95750805160201480156106e95750808060200190518101906106e991906108fc565b156106f75750505050610898565b6040516001600160a01b0387811660248301525f6044830152881690633aada4d2908a9060640160408051601f198184030181529181526020820180516001600160e01b031663095ea7b360e01b179052516001600160e01b031960e085901b16815261076892919060040161091b565b5f604051808303815f875af1158015610783573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f191682016040526107aa919081019061095a565b50604051631d56d26960e11b81526001600160a01b03881690633aada4d2906107d9908b90889060040161091b565b5f604051808303815f875af11580156107f4573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f1916820160405261081b919081019061095a565b905080515f148061084757508051602014801561084757508080602001905181019061084791906108fc565b6108935760405162461bcd60e51b815260206004820152601960248201527f417070726f76654c69622f617070726f76652d6661696c6564000000000000006044820152606401610278565b505050505b50505050565b5f602082840312156108ae575f5ffd5b5035919050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f6108f560208301846108b5565b9392505050565b5f6020828403121561090c575f5ffd5b815180151581146108f5575f5ffd5b6001600160a01b03831681526040602082018190525f9061093e908301846108b5565b949350505050565b634e487b7160e01b5f52604160045260245ffd5b5f6020828403121561096a575f5ffd5b815167ffffffffffffffff811115610980575f5ffd5b8201601f81018413610990575f5ffd5b805167ffffffffffffffff8111156109aa576109aa610946565b604051601f8201601f19908116603f0116810167ffffffffffffffff811182821017156109d9576109d9610946565b6040528181528282016020018610156109f0575f5ffd5b8160208401602083015e5f91810160200191909152949350505050565b5f60208284031215610a1d575f5ffd5b5051919050565b5f82518060208501845e5f92019182525091905056fea26469706673582212207019b2316a874fb2db961af76f1854d0513cf824f951f3aa095908bc90c58eed64736f6c63430008220033",
    "sourceMap": "495:2857:259:-:0;;;1804:228;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;1864:19:259;;1856:57;;;;-1:-1:-1;;;1856:57:259;;696:2:388;1856:57:259;;;678:21:388;735:2;715:18;;;708:30;774:27;754:18;;;747:55;819:18;;1856:57:259;;;;;;;;;-1:-1:-1;;;;;1931:19:259;;1923:57;;;;-1:-1:-1;;;1923:57:259;;1050:2:388;1923:57:259;;;1032:21:388;1089:2;1069:18;;;1062:30;1128:27;1108:18;;;1101:55;1173:18;;1923:57:259;848:349:388;1923:57:259;-1:-1:-1;;;;;1991:12:259;;;;;2013;;;495:2857;;14:177:388;93:13;;-1:-1:-1;;;;;135:31:388;;125:42;;115:70;;181:1;178;171:12;115:70;14:177;;;:::o;196:293::-;275:6;283;336:2;324:9;315:7;311:23;307:32;304:52;;;352:1;349;342:12;304:52;375:40;405:9;375:40;:::i;:::-;365:50;;434:49;479:2;468:9;464:18;434:49;:::i;:::-;424:59;;196:293;;;;;:::o;848:349::-;495:2857:259;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561000f575f5ffd5b506004361061007a575f3560e01c806395f4324e1161005857806395f4324e14610107578063a217fddf1461012e578063c81cbaa114610135578063ffa1ad741461015c575f5ffd5b80630f574ba71461007e5780633a9758b2146100935780633e413bee146100c8575b5f5ffd5b61009161008c36600461089e565b61018d565b005b7f213c645fc0f2b08264743dd819fb1d54d9a3d9d1eab0fa654e1a7bf7b22ee7965b6040519081526020015b60405180910390f35b6100ef7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100bf565b6100ef7f000000000000000000000000000000000000000000000000000000000000000081565b6100b55f81565b6100b57f68bf109b95a5c15fb2bb99041323c27d15f8675e11bf7420a1cd6ad64c394f4681565b610180604051806040016040528060058152602001640312e302e360dc1b81525081565b6040516100bf91906108e3565b6101956104da565b7f68bf109b95a5c15fb2bb99041323c27d15f8675e11bf7420a1cd6ad64c394f465f7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc0054604051632474521560e21b8152600481018490523360248201526001600160a01b03909116915081906391d1485490604401602060405180830381865afa158015610226573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061024a91906108fc565b338390916102815760405163e2517d3f60e01b81526001600160a01b03909216600483015260248201526044015b60405180910390fd5b50506102b36102ad7f213c645fc0f2b08264743dd819fb1d54d9a3d9d1eab0fa654e1a7bf7b22ee79690565b84610524565b7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc01546001600160a01b031661032a7f0000000000000000000000000000000000000000000000000000000000000000827f0000000000000000000000000000000000000000000000000000000000000000876105be565b806001600160a01b0316633aada4d27f0000000000000000000000000000000000000000000000000000000000000000867f000000000000000000000000000000000000000000000000000000000000000060405160240161039f9291909182526001600160a01b0316602082015260400190565b60408051601f198184030181529181526020820180516001600160e01b03166359e6951d60e01b179052516001600160e01b031960e085901b1681526103e992919060040161091b565b5f604051808303815f875af1158015610404573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f1916820160405261042b919081019061095a565b506104787f0000000000000000000000000000000000000000000000000000000000000000827f00000000000000000000000000000000000000000000000000000000000000005f6105be565b6040518481527fd71b433ff92d6455c6e9ae41422abbaf7a9413dd6ec74bbbc99094c073fed8489060200160405180910390a15050506104d760017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b50565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0080546001190161051e57604051633ee5aeb560e01b815260040160405180910390fd5b60029055565b7f77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc00600201546040516303bf076b60e41b815260048101849052602481018390526001600160a01b0390911690633bf076b0906044016020604051808303815f875af1158015610595573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105b99190610a0d565b505050565b6040516001600160a01b0383166024820152604481018290525f9060640160408051601f198184030181529181526020820180516001600160e01b031663095ea7b360e01b179052519091505f9081906001600160a01b03871690610629908990869060240161091b565b60408051601f198184030181529181526020820180516001600160e01b0316631d56d26960e11b1790525161065e9190610a24565b5f604051808303815f865af19150503d805f8114610697576040519150601f19603f3d011682016040523d82523d5f602084013e61069c565b606091505b5091509150606082156106f757818060200190518101906106bd919061095a565b905080515f14806106e95750805160201480156106e95750808060200190518101906106e991906108fc565b156106f75750505050610898565b6040516001600160a01b0387811660248301525f6044830152881690633aada4d2908a9060640160408051601f198184030181529181526020820180516001600160e01b031663095ea7b360e01b179052516001600160e01b031960e085901b16815261076892919060040161091b565b5f604051808303815f875af1158015610783573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f191682016040526107aa919081019061095a565b50604051631d56d26960e11b81526001600160a01b03881690633aada4d2906107d9908b90889060040161091b565b5f604051808303815f875af11580156107f4573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f1916820160405261081b919081019061095a565b905080515f148061084757508051602014801561084757508080602001905181019061084791906108fc565b6108935760405162461bcd60e51b815260206004820152601960248201527f417070726f76654c69622f617070726f76652d6661696c6564000000000000006044820152606401610278565b505050505b50505050565b5f602082840312156108ae575f5ffd5b5035919050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f6108f560208301846108b5565b9392505050565b5f6020828403121561090c575f5ffd5b815180151581146108f5575f5ffd5b6001600160a01b03831681526040602082018190525f9061093e908301846108b5565b949350505050565b634e487b7160e01b5f52604160045260245ffd5b5f6020828403121561096a575f5ffd5b815167ffffffffffffffff811115610980575f5ffd5b8201601f81018413610990575f5ffd5b805167ffffffffffffffff8111156109aa576109aa610946565b604051601f8201601f19908116603f0116810167ffffffffffffffff811182821017156109d9576109d9610946565b6040528181528282016020018610156109f0575f5ffd5b8160208401602083015e5f91810160200191909152949350505050565b5f60208284031215610a1d575f5ffd5b5051919050565b5f82518060208501845e5f92019182525091905056fea26469706673582212207019b2316a874fb2db961af76f1854d0513cf824f951f3aa095908bc90c58eed64736f6c63430008220033",
    "sourceMap": "495:2857:259:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2379:511;;;;;;:::i;:::-;;:::i;:::-;;3237:112;903:39;3237:112;;;345:25:388;;;333:2;318:18;3237:112:259;;;;;;;;1373:38;;;;;;;;-1:-1:-1;;;;;545:32:388;;;527:51;;515:2;500:18;1373:38:259;381:203:388;1455:38:259;;;;;870:58:218;;924:4;870:58;;962:77;;1012:27;962:77;;976:49:259;;;;;;;;;;;;;;;-1:-1:-1;;;976:49:259;;;;;;;;;;;;:::i;2379:511::-;3251:21:160;:19;:21::i;:::-;1012:27:218::1;1392:22;1053:34:214::0;1417:44:218;1493:57:::1;::::0;-1:-1:-1;;;1493:57:218;;::::1;::::0;::::1;1282:25:388::0;;;1539:10:218::1;1323:18:388::0;;;1316:60;-1:-1:-1;;;;;1417:44:218;;::::1;::::0;-1:-1:-1;1417:44:218;;1493:39:::1;::::0;1255:18:388;;1493:57:218::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1597:10;1609:4;1472:152;;;;;::::0;-1:-1:-1;;;1472:152:218;;-1:-1:-1;;;;;1861:32:388;;;1472:152:218::1;::::0;::::1;1843:51:388::0;1910:18;;;1903:34;1816:18;;1472:152:218::1;;;;;;;;;;;2484:55:259::2;2503:23;903:39:::0;;3237:112;2503:23:::2;2528:10;2484:18;:55::i;:::-;2566:35:::0;;-1:-1:-1;;;;;2566:35:259::2;2612:49;2631:4;2566:35:::0;2644:4:::2;2650:10:::0;2612:18:::2;:49::i;:::-;2682:5;-1:-1:-1::0;;;;;2672:23:259::2;;2696:4;2739:10;2751:4;2702:55;;;;;;;;1282:25:388::0;;;-1:-1:-1;;;;;1343:32:388;1338:2;1323:18;;1316:60;1270:2;1255:18;;1108:274;2702:55:259::2;;::::0;;-1:-1:-1;;2702:55:259;;::::2;::::0;;;;;;::::2;::::0;::::2;::::0;;-1:-1:-1;;;;;2702:55:259::2;-1:-1:-1::0;;;2702:55:259::2;::::0;;2672:86;-1:-1:-1;;;;;;2702:55:259::2;2672:86:::0;;;;;;::::2;::::0;;2702:55;2672:86:::2;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;;::::2;-1:-1:-1::0;;2672:86:259::2;::::0;::::2;;::::0;::::2;::::0;;;::::2;::::0;::::2;:::i;:::-;;2796:40;2815:4;2821:5;2828:4;2834:1;2796:18;:40::i;:::-;2852:31;::::0;345:25:388;;;2852:31:259::2;::::0;333:2:388;318:18;2852:31:259::2;;;;;;;2474:416;1382:261:218::1;3282:1:160;3293:20:::0;1805:1;2388:30;3969:23;3716:283;3293:20;2379:511:259;:::o;3326:384:160:-;2388:30;3526:9;;-1:-1:-1;;3526:20:160;3522:88;;3569:30;;-1:-1:-1;;;3569:30:160;;;;;;;;;;;3522:88;1847:1;3684:19;;3326:384::o;2133:174:218:-;1053:34:214;2221:40:218;;;2209:91;;-1:-1:-1;;;2209:91:218;;;;;3974:25:388;;;4015:18;;;4008:34;;;-1:-1:-1;;;;;2221:40:218;;;;2209:78;;3947:18:388;;2209:91:218;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;2133:174;;:::o;361:1248:288:-;487:53;;-1:-1:-1;;;;;1861:32:388;;487:53:288;;;1843:51:388;1910:18;;;1903:34;;;460:24:288;;1816:18:388;;487:53:288;;;-1:-1:-1;;487:53:288;;;;;;;;;;;;;;-1:-1:-1;;;;;487:53:288;-1:-1:-1;;;487:53:288;;;666:54;487:53;;-1:-1:-1;;;;;;;;;;655:10:288;;;666:54;;700:5;;487:53;;666:54;;;:::i;:::-;;;;-1:-1:-1;;666:54:288;;;;;;;;;;;;;;-1:-1:-1;;;;;666:54:288;-1:-1:-1;;;666:54:288;;;655:66;;;666:54;655:66;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;605:116;;;;732:23;770:7;766:403;;;901:4;890:25;;;;;;;;;;;;:::i;:::-;877:38;;1036:10;:17;1057:1;1036:22;:101;;;;1079:10;:17;1100:2;1079:23;:57;;;;;1117:10;1106:30;;;;;;;;;;;;:::i;:::-;1015:144;;;1152:7;;;;;;1015:144;1274:48;;-1:-1:-1;;;;;1861:32:388;;;1274:48:288;;;1843:51:388;1319:1:288;1910:18:388;;;1903:34;1243:23:288;;;;;1267:5;;1816:18:388;;1274:48:288;;;-1:-1:-1;;1274:48:288;;;;;;;;;;;;;;-1:-1:-1;;;;;1274:48:288;-1:-1:-1;;;1274:48:288;;;1243:80;-1:-1:-1;;;;;;1274:48:288;1243:80;;;;;;;;;1274:48;1243:80;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1243:80:288;;;;;;;;;;;;:::i;:::-;-1:-1:-1;1347:43:288;;-1:-1:-1;;;1347:43:288;;-1:-1:-1;;;;;1347:23:288;;;;;:43;;1371:5;;1378:11;;1347:43;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1347:43:288;;;;;;;;;;;;:::i;:::-;1334:56;;1466:10;:17;1487:1;1466:22;:85;;;;1493:10;:17;1514:2;1493:23;:57;;;;;1531:10;1520:30;;;;;;;;;;;;:::i;:::-;1445:157;;;;-1:-1:-1;;;1445:157:288;;5316:2:388;1445:157:288;;;5298:21:388;5355:2;5335:18;;;5328:30;5394:27;5374:18;;;5367:55;5439:18;;1445:157:288;5114:349:388;1445:157:288;450:1159;;;;361:1248;;;;;:::o;14:180:388:-;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:388;;14:180;-1:-1:-1;14:180:388:o;589:289::-;631:3;669:5;663:12;696:6;691:3;684:19;752:6;745:4;738:5;734:16;727:4;722:3;718:14;712:47;804:1;797:4;788:6;783:3;779:16;775:27;768:38;867:4;860:2;856:7;851:2;843:6;839:15;835:29;830:3;826:39;822:50;815:57;;;589:289;;;;:::o;883:220::-;1032:2;1021:9;1014:21;995:4;1052:45;1093:2;1082:9;1078:18;1070:6;1052:45;:::i;:::-;1044:53;883:220;-1:-1:-1;;;883:220:388:o;1387:277::-;1454:6;1507:2;1495:9;1486:7;1482:23;1478:32;1475:52;;;1523:1;1520;1513:12;1475:52;1555:9;1549:16;1608:5;1601:13;1594:21;1587:5;1584:32;1574:60;;1630:1;1627;1620:12;2227:315;-1:-1:-1;;;;;2402:32:388;;2384:51;;2471:2;2466;2451:18;;2444:30;;;-1:-1:-1;;2491:45:388;;2517:18;;2509:6;2491:45;:::i;:::-;2483:53;2227:315;-1:-1:-1;;;;2227:315:388:o;2547:127::-;2608:10;2603:3;2599:20;2596:1;2589:31;2639:4;2636:1;2629:15;2663:4;2660:1;2653:15;2679:934;2758:6;2811:2;2799:9;2790:7;2786:23;2782:32;2779:52;;;2827:1;2824;2817:12;2779:52;2860:9;2854:16;2893:18;2885:6;2882:30;2879:50;;;2925:1;2922;2915:12;2879:50;2948:22;;3001:4;2993:13;;2989:27;-1:-1:-1;2979:55:388;;3030:1;3027;3020:12;2979:55;3063:2;3057:9;3089:18;3081:6;3078:30;3075:56;;;3111:18;;:::i;:::-;3160:2;3154:9;3252:2;3214:17;;-1:-1:-1;;3210:31:388;;;3243:2;3206:40;3202:54;3190:67;;3287:18;3272:34;;3308:22;;;3269:62;3266:88;;;3334:18;;:::i;:::-;3370:2;3363:22;3394;;;3435:15;;;3452:2;3431:24;3428:37;-1:-1:-1;3425:57:388;;;3478:1;3475;3468:12;3425:57;3527:6;3522:2;3518;3514:11;3509:2;3501:6;3497:15;3491:43;3580:1;3554:19;;;3575:2;3550:28;3543:39;;;;3558:6;2679:934;-1:-1:-1;;;;2679:934:388:o;4053:184::-;4123:6;4176:2;4164:9;4155:7;4151:23;4147:32;4144:52;;;4192:1;4189;4182:12;4144:52;-1:-1:-1;4215:16:388;;4053:184;-1:-1:-1;4053:184:388:o;4521:301::-;4650:3;4688:6;4682:13;4734:6;4727:4;4719:6;4715:17;4710:3;4704:37;4796:1;4760:16;;4785:13;;;-1:-1:-1;4760:16:388;4521:301;-1:-1:-1;4521:301:388:o",
    "linkReferences": {},
    "immutableReferences": {
      "92412": [
        {
          "start": 205,
          "length": 32
        },
        {
          "start": 739,
          "length": 32
        },
        {
          "start": 861,
          "length": 32
        },
        {
          "start": 1073,
          "length": 32
        }
      ],
      "92416": [
        {
          "start": 268,
          "length": 32
        },
        {
          "start": 773,
          "length": 32
        },
        {
          "start": 827,
          "length": 32
        },
        {
          "start": 1107,
          "length": 32
        }
      ]
    }
  },
  "methodIdentifiers": {
    "ALLOCATOR_ROLE()": "c81cbaa1",
    "DEFAULT_ADMIN_ROLE()": "a217fddf",
    "VERSION()": "ffa1ad74",
    "subscribe(uint256)": "0f574ba7",
    "subscribeRateLimitKey()": "3a9758b2",
    "usdc()": "3e413bee",
    "ustb()": "95f4324e"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.34+commit.80d5c536\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"usdc_\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"ustb_\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"AccessControlUnauthorizedAccount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidInitialization\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotInitializing\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"version\",\"type\":\"uint64\"}],\"name\":\"Initialized\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"usdcAmount\",\"type\":\"uint256\"}],\"name\":\"SuperstateSubscribe\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"ALLOCATOR_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"DEFAULT_ADMIN_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"VERSION\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"usdcAmount\",\"type\":\"uint256\"}],\"name\":\"subscribe\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"subscribeRateLimitKey\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"usdc\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"ustb\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"InvalidInitialization()\":[{\"details\":\"The contract is already initialized.\"}],\"NotInitializing()\":[{\"details\":\"The contract is not initializing.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"events\":{\"Initialized(uint64)\":{\"details\":\"Triggered when the contract has been initialized or reinitialized.\"},\"SuperstateSubscribe(uint256)\":{\"params\":{\"usdcAmount\":\"Amount of USDC subscribed (6-decimal precision).\"}}},\"kind\":\"dev\",\"methods\":{\"subscribe(uint256)\":{\"params\":{\"usdcAmount\":\"Amount of USDC to subscribe (6-decimal precision).\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"AccessControlUnauthorizedAccount(address,bytes32)\":[{\"notice\":\"Thrown when a caller lacks the required access control role.\"}]},\"events\":{\"SuperstateSubscribe(uint256)\":{\"notice\":\"Emitted when USDC is subscribed to Superstate USTB.\"}},\"kind\":\"user\",\"methods\":{\"ALLOCATOR_ROLE()\":{\"notice\":\"Role identifier for allocator accounts authorized to execute facet operations.\"},\"DEFAULT_ADMIN_ROLE()\":{\"notice\":\"Role identifier for the default admin (bytes32(0)).\"},\"VERSION()\":{\"notice\":\"Semantic version string of the facet.\"},\"subscribe(uint256)\":{\"notice\":\"Subscribes USDC to Superstate USTB.\"},\"subscribeRateLimitKey()\":{\"notice\":\"The derived rate limit key for subscribe operations.\"},\"usdc()\":{\"notice\":\"Address of the USDC token contract (immutable).\"},\"ustb()\":{\"notice\":\"Address of the Superstate USTB token contract (immutable).\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/facets/superstate/SuperstateFacet.sol\":\"SuperstateFacet\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@ensdomains/=lib/uniswap-v4-periphery/lib/v4-core/node_modules/@ensdomains/\",\":@layerzerolabs/lz-evm-messagelib-v2/=lib/layerzero-v2/packages/layerzero-v2/evm/messagelib/\",\":@layerzerolabs/lz-evm-protocol-v2/=lib/layerzero-v2/packages/layerzero-v2/evm/protocol/\",\":@layerzerolabs/oft-evm/=lib/grove-xchain-helpers/lib/devtools/packages/oft-evm/\",\":@openzeppelin/contracts-upgradeable/=lib/oz-upgradeable/contracts/\",\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":@uniswap/v4-core/=lib/uniswap-v4-periphery/lib/v4-core/\",\":LayerZero-v2/=lib/grove-xchain-helpers/lib/\",\":aave-v3-core/=lib/aave-v3-origin/src/core/\",\":aave-v3-origin/=lib/aave-v3-origin/\",\":aave-v3-periphery/=lib/aave-v3-origin/src/periphery/\",\":devtools/=lib/grove-xchain-helpers/lib/devtools/packages/toolbox-foundry/src/\",\":ds-test/=lib/grove-address-registry/lib/forge-std/lib/ds-test/src/\",\":dss-allocator/=lib/dss-allocator/\",\":dss-interfaces/=lib/dss-test/lib/dss-interfaces/src/\",\":dss-test/=lib/dss-test/src/\",\":erc20-helpers/=lib/grove-basin/lib/erc20-helpers/src/\",\":erc4626-tests/=lib/metamorpho/lib/erc4626-tests/\",\":forge-gas-snapshot/=lib/uniswap-v4-periphery/lib/permit2/lib/forge-gas-snapshot/src/\",\":forge-std/=lib/forge-std/src/\",\":grove-address-registry/=lib/grove-address-registry/src/\",\":grove-basin/=lib/grove-basin/\",\":grove-xchain-helpers/=lib/grove-xchain-helpers/src/\",\":halmos-cheatcodes/=lib/grove-basin/lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/\",\":hardhat/=lib/uniswap-v4-periphery/lib/v4-core/node_modules/hardhat/\",\":layerzero-v2/=lib/layerzero-v2/\",\":layerzerolabs/oapp-evm/=lib/grove-xchain-helpers/lib/devtools/packages/oapp-evm/\",\":metamorpho/=lib/metamorpho/src/\",\":morpho-blue/=lib/metamorpho/lib/morpho-blue/\",\":murky/=lib/metamorpho/lib/universal-rewards-distributor/lib/murky/src/\",\":openzeppelin-contracts-upgradeable/=lib/spark-vaults-v2/lib/openzeppelin-contracts-upgradeable/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/metamorpho/lib/universal-rewards-distributor/lib/openzeppelin-contracts/contracts/\",\":oz-upgradeable/=lib/oz-upgradeable/\",\":permit2/=lib/uniswap-v4-periphery/lib/permit2/\",\":solidity-bytes-utils/=lib/solidity-bytes-utils/\",\":solidity-utils/=lib/aave-v3-origin/lib/solidity-utils/\",\":solmate/=lib/uniswap-v4-periphery/lib/v4-core/lib/solmate/\",\":spark-address-registry/=lib/spark-address-registry/src/\",\":spark-psm/=lib/spark-psm/\",\":spark-vaults-v2/=lib/spark-vaults-v2/\",\":sparklend-address-registry/=lib/grove-basin/lib/xchain-ssr-oracle/lib/sparklend-address-registry/\",\":token-tests/=lib/spark-vaults-v2/lib/token-tests/src/\",\":uniswap-v4-periphery/=lib/uniswap-v4-periphery/\",\":universal-rewards-distributor/=lib/metamorpho/lib/universal-rewards-distributor/src/\",\":v4-core/=lib/uniswap-v4-periphery/lib/v4-core/src/\",\":xchain-helpers/=lib/xchain-helpers/src/\",\":xchain-ssr-oracle/=lib/grove-basin/lib/xchain-ssr-oracle/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/access/IAccessControl.sol\":{\"keccak256\":\"0xb6b36edd6a2999fd243ff226d6cbf84bd71af2432bbd0dfe19392996a1d9cb41\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1fd2f35495652e57e3f99bc6c510bc5f7dd398a176ea2e72d8ed730aebc6ca26\",\"dweb:/ipfs/QmTQV6X4gkikTib49cho5iDX3JvSQbdsoEChoDwrk3CbbH\"]},\"lib/openzeppelin-contracts/contracts/access/extensions/IAccessControlEnumerable.sol\":{\"keccak256\":\"0xc1435f102633849858e75d7bed14c636f25448ceb3406d82992b0f2df52f4306\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ce1815e3a1da24f91b8e2ec24cf09d0d46e0fbeddcbe2cb0d8b2e05b91ceb7b3\",\"dweb:/ipfs/QmYTy1AQB5EV5jwuGsB49yykng2oG3x5ss4bDjFNxk3He4\"]},\"lib/oz-upgradeable/contracts/proxy/utils/Initializable.sol\":{\"keccak256\":\"0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609\",\"dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM\"]},\"lib/oz-upgradeable/contracts/utils/ReentrancyGuardUpgradeable.sol\":{\"keccak256\":\"0xb44e086e941292cdc7f440de51478493894ef0b1aeccb0c4047445919f667f74\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://942dad22fbdc1669f025540ba63aa3ccfad5f8458fc5d4525b31ebf272e7af45\",\"dweb:/ipfs/Qmdo4X2M82aM3AMoW2kf2jhYkSCyC4T1pHNd6obdsDFnAB\"]},\"src/ControllerSharedStorage.sol\":{\"keccak256\":\"0x08b85a82fbcfb5d837ac222fe71c7a458bab9edd8cfe0df02b3c38d6780b4400\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://577a9d2fc6796614c022fe701c981faa4df931dd5346e21167fbc46f3e199985\",\"dweb:/ipfs/QmYRyEbGum5TJF4yYNksK2H2CbmqYdcqiri5ZtFKrc36k7\"]},\"src/facets/Facet.sol\":{\"keccak256\":\"0xe86c5d5b73af2713e4e6754267af20325421b72c88a1dbf6dfbe9978b259edc2\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://28c6bcfbb07742b4be8f7188a3a9af301a6570616cf97564eb80091c09001ca9\",\"dweb:/ipfs/QmchiTioPPk7YbTtVpLN33hRNu1CKJoTH69He4BtUyXimA\"]},\"src/facets/IFacet.sol\":{\"keccak256\":\"0x0f0acb5faa3c227edc594e69507f89f0f063712847f361fbc51dbc2e9dd51d0a\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://ded1143f96b28d02e5eae73cf84af8e72ac15b31e2737ae29dc962c2975eb34c\",\"dweb:/ipfs/QmNrdGdJkHC2YWBMx4dQmihdwuSs7XDNgf8NYzQUsZifT2\"]},\"src/facets/superstate/ISuperstateFacet.sol\":{\"keccak256\":\"0x4e22bfff977b2a7a2557d70c6a6b4e28df28a252de7de0fb13456a1050d90dba\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://5d08b5745f7b912f656919dbec58d897de3f9c67b9d7470d3c7690385cef3fb4\",\"dweb:/ipfs/QmeiRQofZ5xTFhE5qjjRNtTntFACz6qR8NDDn6XskHZ5A2\"]},\"src/facets/superstate/SuperstateFacet.sol\":{\"keccak256\":\"0x1ceb9a8045d9dcce6f273e0cdc360b4e54b51ca04f2904e9beb47a1282645009\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://d1ba893d8bc10c6a94f9fe715dfa917ecf5d3cffcbd0c001f91333384e0ca0bf\",\"dweb:/ipfs/QmSB2UTv91o4nwRNdFM3gA4jkC12BYVQBAfaPkCkKLLSeE\"]},\"src/interfaces/IALMProxy.sol\":{\"keccak256\":\"0xa965efa753f8b48b5b08f4b98699a95ab4671c2e6b8c53c514dae9bda250f80e\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://1188a471d62be8e9439a9ac311f4e872288a414348341d7d0095928b846c6d19\",\"dweb:/ipfs/QmcUkHyM2YuZM4UicTBg47oTCYHxmzMf6Hd16hWyfsCJEd\"]},\"src/interfaces/IAccessControls.sol\":{\"keccak256\":\"0x774a4156bb41a733bd219dd14cf7ea7b10007662ab1ea2bdc83ffc197ed09637\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://9e923dced22563718b532893e9a70b2656ed6fbc556539ef5e2fe47fc4cd1c6d\",\"dweb:/ipfs/QmSh9RSdnatrSnMCxhnmyT8m6NFkFzCDDLPnzDVpfKDxYJ\"]},\"src/interfaces/IRateLimits.sol\":{\"keccak256\":\"0x20ea43787a1ad8c78805bdc194e57c5838176c258985342242b7211bfe7e6a4a\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://76555b4d5238e3faa3ebfe6b8eea949623cc5882d3c77835324459b3c664c0d6\",\"dweb:/ipfs/QmcfhxoLBDZrdBweL6PAV74NFHnVCeSDS7geQhYHt4LfhF\"]},\"src/libraries/ApproveLib.sol\":{\"keccak256\":\"0xd583574bdc0710bffc6431c803ec0cd8351aa9a6c1e4e551bf33c0cc4c65d5ea\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://02c32c18429a0133a9dfe53b5e756a28961eee83b83aae5eea13b30bda8ae64d\",\"dweb:/ipfs/QmXauAb7KoKtzochg91Pqdtp1DdbZaF21Fwjp4C2WAasSH\"]}},\"version\":1}",
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
              "name": "usdc_",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "ustb_",
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
              "name": "usdcAmount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "SuperstateSubscribe",
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
              "internalType": "uint256",
              "name": "usdcAmount",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "subscribe"
        },
        {
          "inputs": [],
          "stateMutability": "pure",
          "type": "function",
          "name": "subscribeRateLimitKey",
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
          "name": "usdc",
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
          "stateMutability": "view",
          "type": "function",
          "name": "ustb",
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
          "subscribe(uint256)": {
            "params": {
              "usdcAmount": "Amount of USDC to subscribe (6-decimal precision)."
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
          "subscribe(uint256)": {
            "notice": "Subscribes USDC to Superstate USTB."
          },
          "subscribeRateLimitKey()": {
            "notice": "The derived rate limit key for subscribe operations."
          },
          "usdc()": {
            "notice": "Address of the USDC token contract (immutable)."
          },
          "ustb()": {
            "notice": "Address of the Superstate USTB token contract (immutable)."
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
        "src/facets/superstate/SuperstateFacet.sol": "SuperstateFacet"
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
      "src/facets/superstate/ISuperstateFacet.sol": {
        "keccak256": "0x4e22bfff977b2a7a2557d70c6a6b4e28df28a252de7de0fb13456a1050d90dba",
        "urls": [
          "bzz-raw://5d08b5745f7b912f656919dbec58d897de3f9c67b9d7470d3c7690385cef3fb4",
          "dweb:/ipfs/QmeiRQofZ5xTFhE5qjjRNtTntFACz6qR8NDDn6XskHZ5A2"
        ],
        "license": "AGPL-3.0-or-later"
      },
      "src/facets/superstate/SuperstateFacet.sol": {
        "keccak256": "0x1ceb9a8045d9dcce6f273e0cdc360b4e54b51ca04f2904e9beb47a1282645009",
        "urls": [
          "bzz-raw://d1ba893d8bc10c6a94f9fe715dfa917ecf5d3cffcbd0c001f91333384e0ca0bf",
          "dweb:/ipfs/QmSB2UTv91o4nwRNdFM3gA4jkC12BYVQBAfaPkCkKLLSeE"
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
    "absolutePath": "src/facets/superstate/SuperstateFacet.sol",
    "id": 92526,
    "exportedSymbols": {
      "ApproveLib": [
        100694
      ],
      "Facet": [
        82138
      ],
      "IALMProxy": [
        100081
      ],
      "IFacet": [
        82167
      ],
      "ISuperstateFacet": [
        92374
      ],
      "IUSTBLike": [
        92394
      ],
      "SuperstateFacet": [
        92525
      ]
    },
    "nodeType": "SourceUnit",
    "src": "46:3307:259",
    "nodes": [
      {
        "id": 92376,
        "nodeType": "PragmaDirective",
        "src": "46:24:259",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".34"
        ]
      },
      {
        "id": 92378,
        "nodeType": "ImportDirective",
        "src": "72:60:259",
        "nodes": [],
        "absolutePath": "src/libraries/ApproveLib.sol",
        "file": "../../libraries/ApproveLib.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 92526,
        "sourceUnit": 100695,
        "symbolAliases": [
          {
            "foreign": {
              "id": 92377,
              "name": "ApproveLib",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 100694,
              "src": "81:10:259",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 92380,
        "nodeType": "ImportDirective",
        "src": "134:59:259",
        "nodes": [],
        "absolutePath": "src/interfaces/IALMProxy.sol",
        "file": "../../interfaces/IALMProxy.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 92526,
        "sourceUnit": 100082,
        "symbolAliases": [
          {
            "foreign": {
              "id": 92379,
              "name": "IALMProxy",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 100081,
              "src": "143:9:259",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 92382,
        "nodeType": "ImportDirective",
        "src": "195:39:259",
        "nodes": [],
        "absolutePath": "src/facets/IFacet.sol",
        "file": "../IFacet.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 92526,
        "sourceUnit": 82168,
        "symbolAliases": [
          {
            "foreign": {
              "id": 92381,
              "name": "IFacet",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 82167,
              "src": "204:6:259",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 92384,
        "nodeType": "ImportDirective",
        "src": "236:37:259",
        "nodes": [],
        "absolutePath": "src/facets/Facet.sol",
        "file": "../Facet.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 92526,
        "sourceUnit": 82139,
        "symbolAliases": [
          {
            "foreign": {
              "id": 92383,
              "name": "Facet",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 82138,
              "src": "245:5:259",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 92386,
        "nodeType": "ImportDirective",
        "src": "275:58:259",
        "nodes": [],
        "absolutePath": "src/facets/superstate/ISuperstateFacet.sol",
        "file": "./ISuperstateFacet.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 92526,
        "sourceUnit": 92375,
        "symbolAliases": [
          {
            "foreign": {
              "id": 92385,
              "name": "ISuperstateFacet",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 92374,
              "src": "284:16:259",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 92394,
        "nodeType": "ContractDefinition",
        "src": "335:96:259",
        "nodes": [
          {
            "id": 92393,
            "nodeType": "FunctionDefinition",
            "src": "362:66:259",
            "nodes": [],
            "functionSelector": "59e6951d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "subscribe",
            "nameLocation": "371:9:259",
            "parameters": {
              "id": 92391,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92388,
                  "mutability": "mutable",
                  "name": "inAmount",
                  "nameLocation": "389:8:259",
                  "nodeType": "VariableDeclaration",
                  "scope": 92393,
                  "src": "381:16:259",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92387,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "381:7:259",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 92390,
                  "mutability": "mutable",
                  "name": "stablecoin",
                  "nameLocation": "407:10:259",
                  "nodeType": "VariableDeclaration",
                  "scope": 92393,
                  "src": "399:18:259",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 92389,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "399:7:259",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "380:38:259"
            },
            "returnParameters": {
              "id": 92392,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "427:0:259"
            },
            "scope": 92394,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IUSTBLike",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          92394
        ],
        "name": "IUSTBLike",
        "nameLocation": "345:9:259",
        "scope": 92526,
        "usedErrors": [],
        "usedEvents": []
      },
      {
        "id": 92525,
        "nodeType": "ContractDefinition",
        "src": "495:2857:259",
        "nodes": [
          {
            "id": 92403,
            "nodeType": "VariableDeclaration",
            "src": "858:84:259",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_LIMIT_SUBSCRIBE",
            "nameLocation": "884:16:259",
            "scope": 92525,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 92399,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "858:7:259",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "arguments": [
                {
                  "hexValue": "4c494d49545f535550455253544154455f535542534352494245",
                  "id": 92401,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "913:28:259",
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_213c645fc0f2b08264743dd819fb1d54d9a3d9d1eab0fa654e1a7bf7b22ee796",
                    "typeString": "literal_string \"LIMIT_SUPERSTATE_SUBSCRIBE\""
                  },
                  "value": "LIMIT_SUPERSTATE_SUBSCRIBE"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_213c645fc0f2b08264743dd819fb1d54d9a3d9d1eab0fa654e1a7bf7b22ee796",
                    "typeString": "literal_string \"LIMIT_SUPERSTATE_SUBSCRIBE\""
                  }
                ],
                "id": 92400,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": -8,
                "src": "903:9:259",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                  "typeString": "function (bytes memory) pure returns (bytes32)"
                }
              },
              "id": 92402,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "903:39:259",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 92408,
            "nodeType": "VariableDeclaration",
            "src": "976:49:259",
            "nodes": [],
            "baseFunctions": [
              82166
            ],
            "constant": true,
            "documentation": {
              "id": 92404,
              "nodeType": "StructuredDocumentation",
              "src": "949:22:259",
              "text": "@inheritdoc IFacet"
            },
            "functionSelector": "ffa1ad74",
            "mutability": "constant",
            "name": "VERSION",
            "nameLocation": "1008:7:259",
            "overrides": {
              "id": 92406,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "999:8:259"
            },
            "scope": 92525,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 92405,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "976:6:259",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "312e302e30",
              "id": 92407,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1018:7:259",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_06c015bd22b4c69690933c1058878ebdfef31f9aaae40bbe86d8a09fe1b2972c",
                "typeString": "literal_string \"1.0.0\""
              },
              "value": "1.0.0"
            },
            "visibility": "public"
          },
          {
            "id": 92412,
            "nodeType": "VariableDeclaration",
            "src": "1373:38:259",
            "nodes": [],
            "baseFunctions": [
              92367
            ],
            "constant": false,
            "documentation": {
              "id": 92409,
              "nodeType": "StructuredDocumentation",
              "src": "1336:32:259",
              "text": "@inheritdoc ISuperstateFacet"
            },
            "functionSelector": "3e413bee",
            "mutability": "immutable",
            "name": "usdc",
            "nameLocation": "1407:4:259",
            "overrides": {
              "id": 92411,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1398:8:259"
            },
            "scope": 92525,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 92410,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "1373:7:259",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 92416,
            "nodeType": "VariableDeclaration",
            "src": "1455:38:259",
            "nodes": [],
            "baseFunctions": [
              92373
            ],
            "constant": false,
            "documentation": {
              "id": 92413,
              "nodeType": "StructuredDocumentation",
              "src": "1418:32:259",
              "text": "@inheritdoc ISuperstateFacet"
            },
            "functionSelector": "95f4324e",
            "mutability": "immutable",
            "name": "ustb",
            "nameLocation": "1489:4:259",
            "overrides": {
              "id": 92415,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1480:8:259"
            },
            "scope": 92525,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 92414,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "1455:7:259",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 92452,
            "nodeType": "FunctionDefinition",
            "src": "1804:228:259",
            "nodes": [],
            "body": {
              "id": 92451,
              "nodeType": "Block",
              "src": "1846:186:259",
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
                        "id": 92429,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 92424,
                          "name": "usdc_",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 92418,
                          "src": "1864:5:259",
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
                              "id": 92427,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1881:1:259",
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
                            "id": 92426,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1873:7:259",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 92425,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1873:7:259",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 92428,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1873:10:259",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1864:19:259",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5375706572737461746546616365742f7a65726f2d75736463",
                        "id": 92430,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1885:27:259",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_9b4073cf234e38bcdcce9421ffba1fd9196640627a26eafa29e723839960ac01",
                          "typeString": "literal_string \"SuperstateFacet/zero-usdc\""
                        },
                        "value": "SuperstateFacet/zero-usdc"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_9b4073cf234e38bcdcce9421ffba1fd9196640627a26eafa29e723839960ac01",
                          "typeString": "literal_string \"SuperstateFacet/zero-usdc\""
                        }
                      ],
                      "id": 92423,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1856:7:259",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 92431,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1856:57:259",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 92432,
                  "nodeType": "ExpressionStatement",
                  "src": "1856:57:259"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 92439,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 92434,
                          "name": "ustb_",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 92420,
                          "src": "1931:5:259",
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
                              "id": 92437,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1948:1:259",
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
                            "id": 92436,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1940:7:259",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 92435,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1940:7:259",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 92438,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1940:10:259",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1931:19:259",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5375706572737461746546616365742f7a65726f2d75737462",
                        "id": 92440,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1952:27:259",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_568b1cf5392a9996782edb7ec370d77cc63e904180769bdac3d24d7bfd4dd936",
                          "typeString": "literal_string \"SuperstateFacet/zero-ustb\""
                        },
                        "value": "SuperstateFacet/zero-ustb"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_568b1cf5392a9996782edb7ec370d77cc63e904180769bdac3d24d7bfd4dd936",
                          "typeString": "literal_string \"SuperstateFacet/zero-ustb\""
                        }
                      ],
                      "id": 92433,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1923:7:259",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 92441,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1923:57:259",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 92442,
                  "nodeType": "ExpressionStatement",
                  "src": "1923:57:259"
                },
                {
                  "expression": {
                    "id": 92445,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 92443,
                      "name": "usdc",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 92412,
                      "src": "1991:4:259",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 92444,
                      "name": "usdc_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 92418,
                      "src": "1998:5:259",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1991:12:259",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 92446,
                  "nodeType": "ExpressionStatement",
                  "src": "1991:12:259"
                },
                {
                  "expression": {
                    "id": 92449,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 92447,
                      "name": "ustb",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 92416,
                      "src": "2013:4:259",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 92448,
                      "name": "ustb_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 92420,
                      "src": "2020:5:259",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2013:12:259",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 92450,
                  "nodeType": "ExpressionStatement",
                  "src": "2013:12:259"
                }
              ]
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 92421,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92418,
                  "mutability": "mutable",
                  "name": "usdc_",
                  "nameLocation": "1824:5:259",
                  "nodeType": "VariableDeclaration",
                  "scope": 92452,
                  "src": "1816:13:259",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 92417,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1816:7:259",
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
                  "id": 92420,
                  "mutability": "mutable",
                  "name": "ustb_",
                  "nameLocation": "1839:5:259",
                  "nodeType": "VariableDeclaration",
                  "scope": 92452,
                  "src": "1831:13:259",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 92419,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1831:7:259",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1815:30:259"
            },
            "returnParameters": {
              "id": 92422,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1846:0:259"
            },
            "scope": 92525,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 92514,
            "nodeType": "FunctionDefinition",
            "src": "2379:511:259",
            "nodes": [],
            "body": {
              "id": 92513,
              "nodeType": "Block",
              "src": "2474:416:259",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 92465,
                          "name": "subscribeRateLimitKey",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 92524,
                          "src": "2503:21:259",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 92466,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2503:23:259",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 92467,
                        "name": "usdcAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92455,
                        "src": "2528:10:259",
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
                      "id": 92464,
                      "name": "_decreaseRateLimit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 82081,
                      "src": "2484:18:259",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_uint256_$returns$__$",
                        "typeString": "function (bytes32,uint256)"
                      }
                    },
                    "id": 92468,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2484:55:259",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 92469,
                  "nodeType": "ExpressionStatement",
                  "src": "2484:55:259"
                },
                {
                  "assignments": [
                    92471
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 92471,
                      "mutability": "mutable",
                      "name": "proxy",
                      "nameLocation": "2558:5:259",
                      "nodeType": "VariableDeclaration",
                      "scope": 92513,
                      "src": "2550:13:259",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 92470,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "2550:7:259",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 92475,
                  "initialValue": {
                    "expression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 92472,
                        "name": "_getSharedControllerStorage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 81431,
                        "src": "2566:27:259",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_SharedControllerStorage_$81420_storage_ptr_$",
                          "typeString": "function () pure returns (struct ControllerSharedStorage.SharedControllerStorage storage pointer)"
                        }
                      },
                      "id": 92473,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2566:29:259",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_SharedControllerStorage_$81420_storage_ptr",
                        "typeString": "struct ControllerSharedStorage.SharedControllerStorage storage pointer"
                      }
                    },
                    "id": 92474,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "2596:5:259",
                    "memberName": "proxy",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 81417,
                    "src": "2566:35:259",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2550:51:259"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 92479,
                        "name": "usdc",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92412,
                        "src": "2631:4:259",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 92480,
                        "name": "proxy",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92471,
                        "src": "2637:5:259",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 92481,
                        "name": "ustb",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92416,
                        "src": "2644:4:259",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 92482,
                        "name": "usdcAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92455,
                        "src": "2650:10:259",
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
                        "id": 92476,
                        "name": "ApproveLib",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 100694,
                        "src": "2612:10:259",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ApproveLib_$100694_$",
                          "typeString": "type(library ApproveLib)"
                        }
                      },
                      "id": 92478,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2623:7:259",
                      "memberName": "approve",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 100693,
                      "src": "2612:18:259",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,address,uint256)"
                      }
                    },
                    "id": 92483,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2612:49:259",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 92484,
                  "nodeType": "ExpressionStatement",
                  "src": "2612:49:259"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 92489,
                        "name": "ustb",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92416,
                        "src": "2696:4:259",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 92492,
                              "name": "IUSTBLike",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 92394,
                              "src": "2717:9:259",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IUSTBLike_$92394_$",
                                "typeString": "type(contract IUSTBLike)"
                              }
                            },
                            "id": 92493,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2727:9:259",
                            "memberName": "subscribe",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 92393,
                            "src": "2717:19:259",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_declaration_nonpayable$_t_uint256_$_t_address_$returns$__$",
                              "typeString": "function IUSTBLike.subscribe(uint256,address)"
                            }
                          },
                          {
                            "components": [
                              {
                                "id": 92494,
                                "name": "usdcAmount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 92455,
                                "src": "2739:10:259",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 92495,
                                "name": "usdc",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 92412,
                                "src": "2751:4:259",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "id": 92496,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "2738:18:259",
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
                              "typeString": "function IUSTBLike.subscribe(uint256,address)"
                            },
                            {
                              "typeIdentifier": "t_tuple$_t_uint256_$_t_address_$",
                              "typeString": "tuple(uint256,address)"
                            }
                          ],
                          "expression": {
                            "id": 92490,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "2702:3:259",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 92491,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "2706:10:259",
                          "memberName": "encodeCall",
                          "nodeType": "MemberAccess",
                          "src": "2702:14:259",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 92497,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2702:55:259",
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
                            "id": 92486,
                            "name": "proxy",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 92471,
                            "src": "2682:5:259",
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
                          "id": 92485,
                          "name": "IALMProxy",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 100081,
                          "src": "2672:9:259",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IALMProxy_$100081_$",
                            "typeString": "type(contract IALMProxy)"
                          }
                        },
                        "id": 92487,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2672:16:259",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IALMProxy_$100081",
                          "typeString": "contract IALMProxy"
                        }
                      },
                      "id": 92488,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2689:6:259",
                      "memberName": "doCall",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 100052,
                      "src": "2672:23:259",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory) external returns (bytes memory)"
                      }
                    },
                    "id": 92498,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2672:86:259",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 92499,
                  "nodeType": "ExpressionStatement",
                  "src": "2672:86:259"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 92503,
                        "name": "usdc",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92412,
                        "src": "2815:4:259",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 92504,
                        "name": "proxy",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92471,
                        "src": "2821:5:259",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 92505,
                        "name": "ustb",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92416,
                        "src": "2828:4:259",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "hexValue": "30",
                        "id": 92506,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2834:1:259",
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
                        "id": 92500,
                        "name": "ApproveLib",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 100694,
                        "src": "2796:10:259",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ApproveLib_$100694_$",
                          "typeString": "type(library ApproveLib)"
                        }
                      },
                      "id": 92502,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2807:7:259",
                      "memberName": "approve",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 100693,
                      "src": "2796:18:259",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,address,uint256)"
                      }
                    },
                    "id": 92507,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2796:40:259",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 92508,
                  "nodeType": "ExpressionStatement",
                  "src": "2796:40:259"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 92510,
                        "name": "usdcAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92455,
                        "src": "2872:10:259",
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
                      "id": 92509,
                      "name": "SuperstateSubscribe",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 92349,
                      "src": "2852:19:259",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 92511,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2852:31:259",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 92512,
                  "nodeType": "EmitStatement",
                  "src": "2847:36:259"
                }
              ]
            },
            "baseFunctions": [
              92355
            ],
            "documentation": {
              "id": 92453,
              "nodeType": "StructuredDocumentation",
              "src": "2342:32:259",
              "text": "@inheritdoc ISuperstateFacet"
            },
            "functionSelector": "0f574ba7",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 92459,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 92458,
                  "name": "nonReentrant",
                  "nameLocations": [
                    "2436:12:259"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 70780,
                  "src": "2436:12:259"
                },
                "nodeType": "ModifierInvocation",
                "src": "2436:12:259"
              },
              {
                "arguments": [
                  {
                    "id": 92461,
                    "name": "ALLOCATOR_ROLE",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 82017,
                    "src": "2458:14:259",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 92462,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 92460,
                  "name": "onlyRole",
                  "nameLocations": [
                    "2449:8:259"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 82045,
                  "src": "2449:8:259"
                },
                "nodeType": "ModifierInvocation",
                "src": "2449:24:259"
              }
            ],
            "name": "subscribe",
            "nameLocation": "2388:9:259",
            "overrides": {
              "id": 92457,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2427:8:259"
            },
            "parameters": {
              "id": 92456,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92455,
                  "mutability": "mutable",
                  "name": "usdcAmount",
                  "nameLocation": "2406:10:259",
                  "nodeType": "VariableDeclaration",
                  "scope": 92514,
                  "src": "2398:18:259",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92454,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2398:7:259",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2397:20:259"
            },
            "returnParameters": {
              "id": 92463,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2474:0:259"
            },
            "scope": 92525,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 92524,
            "nodeType": "FunctionDefinition",
            "src": "3237:112:259",
            "nodes": [],
            "body": {
              "id": 92523,
              "nodeType": "Block",
              "src": "3309:40:259",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 92521,
                    "name": "_LIMIT_SUBSCRIBE",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 92403,
                    "src": "3326:16:259",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 92520,
                  "id": 92522,
                  "nodeType": "Return",
                  "src": "3319:23:259"
                }
              ]
            },
            "baseFunctions": [
              92361
            ],
            "documentation": {
              "id": 92515,
              "nodeType": "StructuredDocumentation",
              "src": "3200:32:259",
              "text": "@inheritdoc ISuperstateFacet"
            },
            "functionSelector": "3a9758b2",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "subscribeRateLimitKey",
            "nameLocation": "3246:21:259",
            "overrides": {
              "id": 92517,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "3282:8:259"
            },
            "parameters": {
              "id": 92516,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3267:2:259"
            },
            "returnParameters": {
              "id": 92520,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92519,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 92524,
                  "src": "3300:7:259",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 92518,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3300:7:259",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3299:9:259"
            },
            "scope": 92525,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 92395,
              "name": "ISuperstateFacet",
              "nameLocations": [
                "523:16:259"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 92374,
              "src": "523:16:259"
            },
            "id": 92396,
            "nodeType": "InheritanceSpecifier",
            "src": "523:16:259"
          },
          {
            "baseName": {
              "id": 92397,
              "name": "Facet",
              "nameLocations": [
                "541:5:259"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 82138,
              "src": "541:5:259"
            },
            "id": 92398,
            "nodeType": "InheritanceSpecifier",
            "src": "541:5:259"
          }
        ],
        "canonicalName": "SuperstateFacet",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          92525,
          82138,
          70840,
          70483,
          81432,
          92374,
          82167
        ],
        "name": "SuperstateFacet",
        "nameLocation": "504:15:259",
        "scope": 92526,
        "usedErrors": [
          70246,
          70249,
          70742,
          82148
        ],
        "usedEvents": [
          70254,
          92349
        ]
      }
    ],
    "license": "AGPL-3.0-or-later"
  },
  "id": 259
} as const;
