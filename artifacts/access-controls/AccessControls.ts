const artifact = {
  "abi": [
    {
      "type": "constructor",
      "inputs": [
        {
          "name": "admin",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "nonpayable"
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
      "name": "getRoleAdmin",
      "inputs": [
        {
          "name": "role",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
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
      "name": "getRoleMember",
      "inputs": [
        {
          "name": "role",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "index",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
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
      "name": "getRoleMemberCount",
      "inputs": [
        {
          "name": "role",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
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
      "name": "grantRole",
      "inputs": [
        {
          "name": "role",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "hasRole",
      "inputs": [
        {
          "name": "role",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        }
      ],
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
      "name": "renounceRole",
      "inputs": [
        {
          "name": "role",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "callerConfirmation",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "revokeRole",
      "inputs": [
        {
          "name": "role",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setRoleAdmin",
      "inputs": [
        {
          "name": "role",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "adminRole",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "supportsInterface",
      "inputs": [
        {
          "name": "interfaceId",
          "type": "bytes4",
          "internalType": "bytes4"
        }
      ],
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
      "type": "event",
      "name": "RoleAdminChanged",
      "inputs": [
        {
          "name": "role",
          "type": "bytes32",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "name": "previousAdminRole",
          "type": "bytes32",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "name": "newAdminRole",
          "type": "bytes32",
          "indexed": true,
          "internalType": "bytes32"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RoleGranted",
      "inputs": [
        {
          "name": "role",
          "type": "bytes32",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "name": "account",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "sender",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RoleRevoked",
      "inputs": [
        {
          "name": "role",
          "type": "bytes32",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "name": "account",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "sender",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "AccessControlBadConfirmation",
      "inputs": []
    },
    {
      "type": "error",
      "name": "AccessControlUnauthorizedAccount",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "neededRole",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ]
    },
    {
      "type": "error",
      "name": "ZeroAdmin",
      "inputs": []
    }
  ],
  "bytecode": {
    "object": "0x608060405234801561000f575f5ffd5b5060405161096b38038061096b83398101604081905261002e91610197565b6001600160a01b03811661005557604051633944ed8760e11b815260040160405180910390fd5b61005f5f82610066565b50506101bd565b5f80610072848461009c565b90508015610093575f8481526001602052604090206100919084610143565b505b90505b92915050565b5f828152602081815260408083206001600160a01b038516845290915281205460ff1661013c575f838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556100f43390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610096565b505f610096565b5f610093836001600160a01b0384165f81815260018301602052604081205461013c57508154600181810184555f848152602080822090930184905584548482528286019093526040902091909155610096565b5f602082840312156101a7575f5ffd5b81516001600160a01b0381168114610093575f5ffd5b6107a1806101ca5f395ff3fe608060405234801561000f575f5ffd5b506004361061009b575f3560e01c80639010d07c116100635780639010d07c1461013257806391d148541461015d578063a217fddf14610170578063ca15c87314610177578063d547741f1461018a575f5ffd5b806301ffc9a71461009f5780631e4e0091146100c7578063248a9ca3146100dc5780632f2ff15d1461010c57806336568abe1461011f575b5f5ffd5b6100b26100ad36600461068d565b61019d565b60405190151581526020015b60405180910390f35b6100da6100d53660046106b4565b6101c7565b005b6100fe6100ea3660046106d4565b5f9081526020819052604090206001015490565b6040519081526020016100be565b6100da61011a3660046106eb565b6101e0565b6100da61012d3660046106eb565b61020a565b6101456101403660046106b4565b61023d565b6040516001600160a01b0390911681526020016100be565b6100b261016b3660046106eb565b61025b565b6100fe5f81565b6100fe6101853660046106d4565b610283565b6100da6101983660046106eb565b610299565b5f6001600160e01b03198216630fd8e49b60e11b14806101c157506101c1826102bd565b92915050565b5f6101d1816102e1565b6101db83836102ee565b505050565b5f828152602081905260409020600101546101fa816102e1565b6102048383610338565b50505050565b6001600160a01b03811633146102335760405163334bd91960e11b815260040160405180910390fd5b6101db828261036b565b5f8281526001602052604081206102549083610396565b9392505050565b5f918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b5f8181526001602052604081206101c1906103a1565b5f828152602081905260409020600101546102b3816102e1565b610204838361036b565b5f6001600160e01b03198216635a05180f60e01b14806101c157506101c1826103aa565b6102eb81336103de565b50565b5f82815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b5f5f610344848461041f565b90508015610254575f84815260016020526040902061036390846104ae565b509392505050565b5f5f61037784846104c2565b90508015610254575f848152600160205260409020610363908461052b565b5f610254838361053f565b5f6101c1825490565b5f6001600160e01b03198216637965db0b60e01b14806101c157506301ffc9a760e01b6001600160e01b03198316146101c1565b6103e8828261025b565b61041b5760405163e2517d3f60e01b81526001600160a01b03821660048201526024810183905260440160405180910390fd5b5050565b5f61042a838361025b565b6104a7575f838152602081815260408083206001600160a01b03861684529091529020805460ff1916600117905561045f3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016101c1565b505f6101c1565b5f610254836001600160a01b038416610565565b5f6104cd838361025b565b156104a7575f838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45060016101c1565b5f610254836001600160a01b0384166105aa565b5f825f01828154811061055457610554610724565b905f5260205f200154905092915050565b5f8181526001830160205260408120546104a757508154600181810184555f8481526020808220909301849055845484825282860190935260409020919091556101c1565b5f8181526001830160205260408120548015610684575f6105cc600183610738565b85549091505f906105df90600190610738565b905080821461063e575f865f0182815481106105fd576105fd610724565b905f5260205f200154905080875f01848154811061061d5761061d610724565b5f918252602080832090910192909255918252600188019052604090208390555b855486908061064f5761064f610757565b600190038181905f5260205f20015f90559055856001015f8681526020019081526020015f205f9055600193505050506101c1565b5f9150506101c1565b5f6020828403121561069d575f5ffd5b81356001600160e01b031981168114610254575f5ffd5b5f5f604083850312156106c5575f5ffd5b50508035926020909101359150565b5f602082840312156106e4575f5ffd5b5035919050565b5f5f604083850312156106fc575f5ffd5b8235915060208301356001600160a01b0381168114610719575f5ffd5b809150509250929050565b634e487b7160e01b5f52603260045260245ffd5b818103818111156101c157634e487b7160e01b5f52601160045260245ffd5b634e487b7160e01b5f52603160045260245ffdfea2646970667358221220068cf7de248ac6a80603300d07455429f6306c54da5b0b12ee528a527617c04d64736f6c63430008220033",
    "sourceMap": "275:1608:206:-:0;;;654:133;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;699:19:206;;691:41;;;;-1:-1:-1;;;691:41:206;;;;;;;;;;;;743:37;2232:4:126;774:5:206;743:10;:37::i;:::-;;654:133;275:1608;;2069:257:129;2155:4;;2186:31;2203:4;2209:7;2186:16;:31::i;:::-;2171:46;;2231:7;2227:69;;;2254:18;;;;:12;:18;;;;;:31;;2277:7;2254:22;:31::i;:::-;;2227:69;2312:7;-1:-1:-1;2069:257:129;;;;;:::o;6179:316:126:-;6256:4;2954:12;;;;;;;;;;;-1:-1:-1;;;;;2954:29:126;;;;;;;;;;;;6272:217;;6315:6;:12;;;;;;;;;;;-1:-1:-1;;;;;6315:29:126;;;;;;;;;:36;;-1:-1:-1;;6315:36:126;6347:4;6315:36;;;6397:12;735:10:147;;656:96;6397:12:126;-1:-1:-1;;;;;6370:40:126;6388:7;-1:-1:-1;;;;;6370:40:126;6382:4;6370:40;;;;;;;;;;-1:-1:-1;6431:4:126;6424:11;;6272:217;-1:-1:-1;6473:5:126;6466:12;;8316:150:154;8386:4;8409:50;8414:3;-1:-1:-1;;;;;8434:23:154;;2304:4;4360:21;;;:14;;;:21;;;;;;2320:321;;-1:-1:-1;2362:23:154;;;;;;;;:11;:23;;;;;;;;;;;;;2544:18;;2520:21;;;:14;;;:21;;;;;;:42;;;;2576:11;;14:290:388;84:6;137:2;125:9;116:7;112:23;108:32;105:52;;;153:1;150;143:12;105:52;179:16;;-1:-1:-1;;;;;224:31:388;;214:42;;204:70;;270:1;267;260:12;14:290;275:1608:206;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561000f575f5ffd5b506004361061009b575f3560e01c80639010d07c116100635780639010d07c1461013257806391d148541461015d578063a217fddf14610170578063ca15c87314610177578063d547741f1461018a575f5ffd5b806301ffc9a71461009f5780631e4e0091146100c7578063248a9ca3146100dc5780632f2ff15d1461010c57806336568abe1461011f575b5f5ffd5b6100b26100ad36600461068d565b61019d565b60405190151581526020015b60405180910390f35b6100da6100d53660046106b4565b6101c7565b005b6100fe6100ea3660046106d4565b5f9081526020819052604090206001015490565b6040519081526020016100be565b6100da61011a3660046106eb565b6101e0565b6100da61012d3660046106eb565b61020a565b6101456101403660046106b4565b61023d565b6040516001600160a01b0390911681526020016100be565b6100b261016b3660046106eb565b61025b565b6100fe5f81565b6100fe6101853660046106d4565b610283565b6100da6101983660046106eb565b610299565b5f6001600160e01b03198216630fd8e49b60e11b14806101c157506101c1826102bd565b92915050565b5f6101d1816102e1565b6101db83836102ee565b505050565b5f828152602081905260409020600101546101fa816102e1565b6102048383610338565b50505050565b6001600160a01b03811633146102335760405163334bd91960e11b815260040160405180910390fd5b6101db828261036b565b5f8281526001602052604081206102549083610396565b9392505050565b5f918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b5f8181526001602052604081206101c1906103a1565b5f828152602081905260409020600101546102b3816102e1565b610204838361036b565b5f6001600160e01b03198216635a05180f60e01b14806101c157506101c1826103aa565b6102eb81336103de565b50565b5f82815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b5f5f610344848461041f565b90508015610254575f84815260016020526040902061036390846104ae565b509392505050565b5f5f61037784846104c2565b90508015610254575f848152600160205260409020610363908461052b565b5f610254838361053f565b5f6101c1825490565b5f6001600160e01b03198216637965db0b60e01b14806101c157506301ffc9a760e01b6001600160e01b03198316146101c1565b6103e8828261025b565b61041b5760405163e2517d3f60e01b81526001600160a01b03821660048201526024810183905260440160405180910390fd5b5050565b5f61042a838361025b565b6104a7575f838152602081815260408083206001600160a01b03861684529091529020805460ff1916600117905561045f3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016101c1565b505f6101c1565b5f610254836001600160a01b038416610565565b5f6104cd838361025b565b156104a7575f838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45060016101c1565b5f610254836001600160a01b0384166105aa565b5f825f01828154811061055457610554610724565b905f5260205f200154905092915050565b5f8181526001830160205260408120546104a757508154600181810184555f8481526020808220909301849055845484825282860190935260409020919091556101c1565b5f8181526001830160205260408120548015610684575f6105cc600183610738565b85549091505f906105df90600190610738565b905080821461063e575f865f0182815481106105fd576105fd610724565b905f5260205f200154905080875f01848154811061061d5761061d610724565b5f918252602080832090910192909255918252600188019052604090208390555b855486908061064f5761064f610757565b600190038181905f5260205f20015f90559055856001015f8681526020019081526020015f205f9055600193505050506101c1565b5f9150506101c1565b5f6020828403121561069d575f5ffd5b81356001600160e01b031981168114610254575f5ffd5b5f5f604083850312156106c5575f5ffd5b50508035926020909101359150565b5f602082840312156106e4575f5ffd5b5035919050565b5f5f604083850312156106fc575f5ffd5b8235915060208301356001600160a01b0381168114610719575f5ffd5b809150509250929050565b634e487b7160e01b5f52603260045260245ffd5b818103818111156101c157634e487b7160e01b5f52601160045260245ffd5b634e487b7160e01b5f52603160045260245ffdfea2646970667358221220068cf7de248ac6a80603300d07455429f6306c54da5b0b12ee528a527617c04d64736f6c63430008220033",
    "sourceMap": "275:1608:206:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1583:297;;;;;;:::i;:::-;;:::i;:::-;;;470:14:388;;463:22;445:41;;433:2;418:18;1583:297:206;;;;;;;;1097:140;;;;;;:::i;:::-;;:::i;:::-;;3810:120:126;;;;;;:::i;:::-;3875:7;3901:12;;;;;;;;;;:22;;;;3810:120;;;;1225:25:388;;;1213:2;1198:18;3810:120:126;1079:177:388;4226:136:126;;;;;;:::i;:::-;;:::i;5328:245::-;;;;;;:::i;:::-;;:::i;1526:142:129:-;;;;;;:::i;:::-;;:::i;:::-;;;-1:-1:-1;;;;;2137:32:388;;;2119:51;;2107:2;2092:18;1526:142:129;1973:203:388;2854:136:126;;;;;;:::i;:::-;;:::i;2187:49::-;;2232:4;2187:49;;1836:131:129;;;;;;:::i;:::-;;:::i;4642:138:126:-;;;;;;:::i;:::-;;:::i;1583:297:206:-;1734:4;-1:-1:-1;;;;;;1773:48:206;;-1:-1:-1;;;1773:48:206;;:100;;;1837:36;1861:11;1837:23;:36::i;:::-;1754:119;1583:297;-1:-1:-1;;1583:297:206:o;1097:140::-;2232:4:126;2464:16;2232:4;2464:10;:16::i;:::-;1200:30:206::1;1214:4;1220:9;1200:13;:30::i;:::-;1097:140:::0;;;:::o;4226:136:126:-;3875:7;3901:12;;;;;;;;;;:22;;;2464:16;2475:4;2464:10;:16::i;:::-;4330:25:::1;4341:4;4347:7;4330:10;:25::i;:::-;;4226:136:::0;;;:::o;5328:245::-;-1:-1:-1;;;;;5421:34:126;;735:10:147;5421:34:126;5417:102;;5478:30;;-1:-1:-1;;;5478:30:126;;;;;;;;;;;5417:102;5529:37;5541:4;5547:18;5529:11;:37::i;1526:142:129:-;1607:7;1633:18;;;:12;:18;;;;;:28;;1655:5;1633:21;:28::i;:::-;1626:35;1526:142;-1:-1:-1;;;1526:142:129:o;2854:136:126:-;2931:4;2954:12;;;;;;;;;;;-1:-1:-1;;;;;2954:29:126;;;;;;;;;;;;;;;2854:136::o;1836:131:129:-;1907:7;1933:18;;;:12;:18;;;;;:27;;:25;:27::i;4642:138:126:-;3875:7;3901:12;;;;;;;;;;:22;;;2464:16;2475:4;2464:10;:16::i;:::-;4747:26:::1;4759:4;4765:7;4747:11;:26::i;729:212:129:-:0;814:4;-1:-1:-1;;;;;;837:57:129;;-1:-1:-1;;;837:57:129;;:97;;;898:36;922:11;898:23;:36::i;3199:103:126:-;3265:30;3276:4;735:10:147;3265::126;:30::i;:::-;3199:103;:::o;5698:247::-;5781:25;3901:12;;;;;;;;;;;:22;;;;5837:34;;;;5886:52;;3901:22;;5837:34;;3901:22;;:12;;5886:52;;5781:25;5886:52;5771:174;5698:247;;:::o;2069:257:129:-;2155:4;2171:12;2186:31;2203:4;2209:7;2186:16;:31::i;:::-;2171:46;;2231:7;2227:69;;;2254:18;;;;:12;:18;;;;;:31;;2277:7;2254:22;:31::i;:::-;;2312:7;2069:257;-1:-1:-1;;;2069:257:129:o;2429:262::-;2516:4;2532:12;2547:32;2565:4;2571:7;2547:17;:32::i;:::-;2532:47;;2593:7;2589:72;;;2616:18;;;;:12;:18;;;;;:34;;2642:7;2616:25;:34::i;9574:156:154:-;9648:7;9698:22;9702:3;9714:5;9698:3;:22::i;9117:115::-;9180:7;9206:19;9214:3;4556:18;;4474:107;2565:202:126;2650:4;-1:-1:-1;;;;;;2673:47:126;;-1:-1:-1;;;2673:47:126;;:87;;-1:-1:-1;;;;;;;;;;861:40:150;;;2724:36:126;762:146:150;3432:197:126;3520:22;3528:4;3534:7;3520;:22::i;:::-;3515:108;;3565:47;;-1:-1:-1;;;3565:47:126;;-1:-1:-1;;;;;2555:32:388;;3565:47:126;;;2537:51:388;2604:18;;;2597:34;;;2510:18;;3565:47:126;;;;;;;3515:108;3432:197;;:::o;6179:316::-;6256:4;6277:22;6285:4;6291:7;6277;:22::i;:::-;6272:217;;6315:6;:12;;;;;;;;;;;-1:-1:-1;;;;;6315:29:126;;;;;;;;;:36;;-1:-1:-1;;6315:36:126;6347:4;6315:36;;;6397:12;735:10:147;;656:96;6397:12:126;-1:-1:-1;;;;;6370:40:126;6388:7;-1:-1:-1;;;;;6370:40:126;6382:4;6370:40;;;;;;;;;;-1:-1:-1;6431:4:126;6424:11;;6272:217;-1:-1:-1;6473:5:126;6466:12;;8316:150:154;8386:4;8409:50;8414:3;-1:-1:-1;;;;;8434:23:154;;8409:4;:50::i;6730:317:126:-;6808:4;6828:22;6836:4;6842:7;6828;:22::i;:::-;6824:217;;;6898:5;6866:12;;;;;;;;;;;-1:-1:-1;;;;;6866:29:126;;;;;;;;;;:37;;-1:-1:-1;;6866:37:126;;;6922:40;735:10:147;;6866:12:126;;6922:40;;6898:5;6922:40;-1:-1:-1;6983:4:126;6976:11;;8634:156:154;8707:4;8730:53;8738:3;-1:-1:-1;;;;;8758:23:154;;8730:7;:53::i;4923:118::-;4990:7;5016:3;:11;;5028:5;5016:18;;;;;;;;:::i;:::-;;;;;;;;;5009:25;;4923:118;;;;:::o;2241:406::-;2304:4;4360:21;;;:14;;;:21;;;;;;2320:321;;-1:-1:-1;2362:23:154;;;;;;;;:11;:23;;;;;;;;;;;;;2544:18;;2520:21;;;:14;;;:21;;;;;;:42;;;;2576:11;;2815:1368;2881:4;3010:21;;;:14;;;:21;;;;;;3046:13;;3042:1135;;3413:18;3434:12;3445:1;3434:8;:12;:::i;:::-;3480:18;;3413:33;;-1:-1:-1;3460:17:154;;3480:22;;3501:1;;3480:22;:::i;:::-;3460:42;;3535:9;3521:10;:23;3517:378;;3564:17;3584:3;:11;;3596:9;3584:22;;;;;;;;:::i;:::-;;;;;;;;;3564:42;;3731:9;3705:3;:11;;3717:10;3705:23;;;;;;;;:::i;:::-;;;;;;;;;;;;:35;;;;3844:25;;;:14;;;:25;;;;;:36;;;3517:378;3973:17;;:3;;:17;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;4076:3;:14;;:21;4091:5;4076:21;;;;;;;;;;;4069:28;;;4119:4;4112:11;;;;;;;3042:1135;4161:5;4154:12;;;;;14:286:388;72:6;125:2;113:9;104:7;100:23;96:32;93:52;;;141:1;138;131:12;93:52;167:23;;-1:-1:-1;;;;;;219:32:388;;209:43;;199:71;;266:1;263;256:12;497:346;565:6;573;626:2;614:9;605:7;601:23;597:32;594:52;;;642:1;639;632:12;594:52;-1:-1:-1;;687:23:388;;;807:2;792:18;;;779:32;;-1:-1:-1;497:346:388:o;848:226::-;907:6;960:2;948:9;939:7;935:23;931:32;928:52;;;976:1;973;966:12;928:52;-1:-1:-1;1021:23:388;;848:226;-1:-1:-1;848:226:388:o;1261:408::-;1329:6;1337;1390:2;1378:9;1369:7;1365:23;1361:32;1358:52;;;1406:1;1403;1396:12;1358:52;1451:23;;;-1:-1:-1;1550:2:388;1535:18;;1522:32;-1:-1:-1;;;;;1585:33:388;;1573:46;;1563:74;;1633:1;1630;1623:12;1563:74;1656:7;1646:17;;;1261:408;;;;;:::o;2642:127::-;2703:10;2698:3;2694:20;2691:1;2684:31;2734:4;2731:1;2724:15;2758:4;2755:1;2748:15;2774:225;2841:9;;;2862:11;;;2859:134;;;2915:10;2910:3;2906:20;2903:1;2896:31;2950:4;2947:1;2940:15;2978:4;2975:1;2968:15;3004:127;3065:10;3060:3;3056:20;3053:1;3046:31;3096:4;3093:1;3086:15;3120:4;3117:1;3110:15",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "DEFAULT_ADMIN_ROLE()": "a217fddf",
    "getRoleAdmin(bytes32)": "248a9ca3",
    "getRoleMember(bytes32,uint256)": "9010d07c",
    "getRoleMemberCount(bytes32)": "ca15c873",
    "grantRole(bytes32,address)": "2f2ff15d",
    "hasRole(bytes32,address)": "91d14854",
    "renounceRole(bytes32,address)": "36568abe",
    "revokeRole(bytes32,address)": "d547741f",
    "setRoleAdmin(bytes32,bytes32)": "1e4e0091",
    "supportsInterface(bytes4)": "01ffc9a7"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.34+commit.80d5c536\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"admin\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"AccessControlBadConfirmation\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"neededRole\",\"type\":\"bytes32\"}],\"name\":\"AccessControlUnauthorizedAccount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ZeroAdmin\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"previousAdminRole\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newAdminRole\",\"type\":\"bytes32\"}],\"name\":\"RoleAdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleGranted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleRevoked\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DEFAULT_ADMIN_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleAdmin\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"getRoleMember\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleMemberCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"grantRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"hasRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"callerConfirmation\",\"type\":\"address\"}],\"name\":\"renounceRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"revokeRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"adminRole\",\"type\":\"bytes32\"}],\"name\":\"setRoleAdmin\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"AccessControlBadConfirmation()\":[{\"details\":\"The caller of a function is not the expected one. NOTE: Don't confuse with {AccessControlUnauthorizedAccount}.\"}],\"AccessControlUnauthorizedAccount(address,bytes32)\":[{\"details\":\"The `account` is missing a role.\"}]},\"events\":{\"RoleAdminChanged(bytes32,bytes32,bytes32)\":{\"details\":\"Emitted when `newAdminRole` is set as ``role``'s admin role, replacing `previousAdminRole` `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite {RoleAdminChanged} not being emitted signaling this.\"},\"RoleGranted(bytes32,address,address)\":{\"details\":\"Emitted when `account` is granted `role`. `sender` is the account that originated the contract call, an admin role bearer except when using {AccessControl-_setupRole}.\"},\"RoleRevoked(bytes32,address,address)\":{\"details\":\"Emitted when `account` is revoked `role`. `sender` is the account that originated the contract call:   - if using `revokeRole`, it is the admin role bearer   - if using `renounceRole`, it is the role bearer (i.e. `account`)\"}},\"kind\":\"dev\",\"methods\":{\"getRoleAdmin(bytes32)\":{\"details\":\"Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.\"},\"getRoleMember(bytes32,uint256)\":{\"details\":\"Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information.\"},\"getRoleMemberCount(bytes32)\":{\"details\":\"Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role.\"},\"grantRole(bytes32,address)\":{\"details\":\"Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleGranted} event.\"},\"hasRole(bytes32,address)\":{\"details\":\"Returns `true` if `account` has been granted `role`.\"},\"renounceRole(bytes32,address)\":{\"details\":\"Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `callerConfirmation`. May emit a {RoleRevoked} event.\"},\"revokeRole(bytes32,address)\":{\"details\":\"Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleRevoked} event.\"},\"setRoleAdmin(bytes32,bytes32)\":{\"params\":{\"adminRole\":\"The admin role for the given role.\",\"role\":\"The role to set the admin for.\"}},\"supportsInterface(bytes4)\":{\"params\":{\"interfaceId\":\"The 4-byte interface identifier (ERC-165).\"},\"returns\":{\"_0\":\"isSupported True if the interface is supported, false otherwise.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"ZeroAdmin()\":[{\"notice\":\"Thrown when the admin is the zero address.\"}]},\"kind\":\"user\",\"methods\":{\"setRoleAdmin(bytes32,bytes32)\":{\"notice\":\"Sets the admin role for a given role.\"},\"supportsInterface(bytes4)\":{\"notice\":\"Returns true if the contract supports the given interface.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/AccessControls.sol\":\"AccessControls\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@ensdomains/=lib/uniswap-v4-periphery/lib/v4-core/node_modules/@ensdomains/\",\":@layerzerolabs/lz-evm-messagelib-v2/=lib/layerzero-v2/packages/layerzero-v2/evm/messagelib/\",\":@layerzerolabs/lz-evm-protocol-v2/=lib/layerzero-v2/packages/layerzero-v2/evm/protocol/\",\":@layerzerolabs/oft-evm/=lib/grove-xchain-helpers/lib/devtools/packages/oft-evm/\",\":@openzeppelin/contracts-upgradeable/=lib/oz-upgradeable/contracts/\",\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":@uniswap/v4-core/=lib/uniswap-v4-periphery/lib/v4-core/\",\":LayerZero-v2/=lib/grove-xchain-helpers/lib/\",\":aave-v3-core/=lib/aave-v3-origin/src/core/\",\":aave-v3-origin/=lib/aave-v3-origin/\",\":aave-v3-periphery/=lib/aave-v3-origin/src/periphery/\",\":devtools/=lib/grove-xchain-helpers/lib/devtools/packages/toolbox-foundry/src/\",\":ds-test/=lib/grove-address-registry/lib/forge-std/lib/ds-test/src/\",\":dss-allocator/=lib/dss-allocator/\",\":dss-interfaces/=lib/dss-test/lib/dss-interfaces/src/\",\":dss-test/=lib/dss-test/src/\",\":erc20-helpers/=lib/grove-basin/lib/erc20-helpers/src/\",\":erc4626-tests/=lib/metamorpho/lib/erc4626-tests/\",\":forge-gas-snapshot/=lib/uniswap-v4-periphery/lib/permit2/lib/forge-gas-snapshot/src/\",\":forge-std/=lib/forge-std/src/\",\":grove-address-registry/=lib/grove-address-registry/src/\",\":grove-basin/=lib/grove-basin/\",\":grove-xchain-helpers/=lib/grove-xchain-helpers/src/\",\":halmos-cheatcodes/=lib/grove-basin/lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/\",\":hardhat/=lib/uniswap-v4-periphery/lib/v4-core/node_modules/hardhat/\",\":layerzero-v2/=lib/layerzero-v2/\",\":layerzerolabs/oapp-evm/=lib/grove-xchain-helpers/lib/devtools/packages/oapp-evm/\",\":metamorpho/=lib/metamorpho/src/\",\":morpho-blue/=lib/metamorpho/lib/morpho-blue/\",\":murky/=lib/metamorpho/lib/universal-rewards-distributor/lib/murky/src/\",\":openzeppelin-contracts-upgradeable/=lib/spark-vaults-v2/lib/openzeppelin-contracts-upgradeable/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/metamorpho/lib/universal-rewards-distributor/lib/openzeppelin-contracts/contracts/\",\":oz-upgradeable/=lib/oz-upgradeable/\",\":permit2/=lib/uniswap-v4-periphery/lib/permit2/\",\":solidity-bytes-utils/=lib/solidity-bytes-utils/\",\":solidity-utils/=lib/aave-v3-origin/lib/solidity-utils/\",\":solmate/=lib/uniswap-v4-periphery/lib/v4-core/lib/solmate/\",\":spark-address-registry/=lib/spark-address-registry/src/\",\":spark-psm/=lib/spark-psm/\",\":spark-vaults-v2/=lib/spark-vaults-v2/\",\":sparklend-address-registry/=lib/grove-basin/lib/xchain-ssr-oracle/lib/sparklend-address-registry/\",\":token-tests/=lib/spark-vaults-v2/lib/token-tests/src/\",\":uniswap-v4-periphery/=lib/uniswap-v4-periphery/\",\":universal-rewards-distributor/=lib/metamorpho/lib/universal-rewards-distributor/src/\",\":v4-core/=lib/uniswap-v4-periphery/lib/v4-core/src/\",\":xchain-helpers/=lib/xchain-helpers/src/\",\":xchain-ssr-oracle/=lib/grove-basin/lib/xchain-ssr-oracle/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/access/AccessControl.sol\":{\"keccak256\":\"0xa0e92d42942f4f57c5be50568dac11e9d00c93efcb458026e18d2d9b9b2e7308\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://46326c0bb1e296b67185e81c918e0b40501b8b6386165855df0a3f3c634b6a80\",\"dweb:/ipfs/QmTwyrDYtsxsk6pymJTK94PnEpzsmkpUxFuzEiakDopy4Z\"]},\"lib/openzeppelin-contracts/contracts/access/IAccessControl.sol\":{\"keccak256\":\"0xb6b36edd6a2999fd243ff226d6cbf84bd71af2432bbd0dfe19392996a1d9cb41\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1fd2f35495652e57e3f99bc6c510bc5f7dd398a176ea2e72d8ed730aebc6ca26\",\"dweb:/ipfs/QmTQV6X4gkikTib49cho5iDX3JvSQbdsoEChoDwrk3CbbH\"]},\"lib/openzeppelin-contracts/contracts/access/extensions/AccessControlEnumerable.sol\":{\"keccak256\":\"0xb1c906fcd870fc8dfedb63bfb1bc58b4d2a7469bc13cc44d996fda430693850a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bd98c7779af61b220166cf952a05f6aca82ec859744d407d29043f8100adfb9c\",\"dweb:/ipfs/Qmd6ftRk6cJgdooybM6F1X26R4SSUeNksv6Gni2NwEnKDw\"]},\"lib/openzeppelin-contracts/contracts/access/extensions/IAccessControlEnumerable.sol\":{\"keccak256\":\"0xc1435f102633849858e75d7bed14c636f25448ceb3406d82992b0f2df52f4306\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ce1815e3a1da24f91b8e2ec24cf09d0d46e0fbeddcbe2cb0d8b2e05b91ceb7b3\",\"dweb:/ipfs/QmYTy1AQB5EV5jwuGsB49yykng2oG3x5ss4bDjFNxk3He4\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0x9e8778b14317ba9e256c30a76fd6c32b960af621987f56069e1e819c77c6a133\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1777404f1dcd0fac188e55a288724ec3c67b45288e49cc64723e95e702b49ab8\",\"dweb:/ipfs/QmZFdC626GButBApwDUvvTnUzdinevC3B24d7yyh57XkiA\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x4296879f55019b23e135000eb36896057e7101fb7fb859c5ef690cf14643757b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://87b3541437c8c443ccd36795e56a338ed12855eec17f8da624511b8d1a7e14df\",\"dweb:/ipfs/QmeJQCtZrQjtJLr6u7ZHWeH3pBnjtLWzvRrKViAi7UZqxL\"]},\"lib/openzeppelin-contracts/contracts/utils/structs/EnumerableSet.sol\":{\"keccak256\":\"0x86c1470cbfd878491e5de030072b647352d36bd27122cffb928970b1945282aa\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ad85dd393ee0a1917c57046abc5155f51f77844b2c6a42c05c1b8dd26d6ff3c1\",\"dweb:/ipfs/QmNqYc8To2NdnpP6E1tGz7t6A7beuENde5yovwov5pW1fA\"]},\"src/AccessControls.sol\":{\"keccak256\":\"0x84272add4c47990cfab1ec0794e21542c78a1f6b5025f31d219c344b2d023e7b\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://e590263b741f3771666a349547de28ac766eca95f2c52aeef6389fbcc3ebe2ea\",\"dweb:/ipfs/QmPjVD4VqwXLPKWxGB8RFe158kQdGE1jL4itBYUggKBXgc\"]},\"src/interfaces/IAccessControls.sol\":{\"keccak256\":\"0x774a4156bb41a733bd219dd14cf7ea7b10007662ab1ea2bdc83ffc197ed09637\",\"license\":\"AGPL-3.0-or-later\",\"urls\":[\"bzz-raw://9e923dced22563718b532893e9a70b2656ed6fbc556539ef5e2fe47fc4cd1c6d\",\"dweb:/ipfs/QmSh9RSdnatrSnMCxhnmyT8m6NFkFzCDDLPnzDVpfKDxYJ\"]}},\"version\":1}",
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
              "name": "admin",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "AccessControlBadConfirmation"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "neededRole",
              "type": "bytes32"
            }
          ],
          "type": "error",
          "name": "AccessControlUnauthorizedAccount"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ZeroAdmin"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32",
              "indexed": true
            },
            {
              "internalType": "bytes32",
              "name": "previousAdminRole",
              "type": "bytes32",
              "indexed": true
            },
            {
              "internalType": "bytes32",
              "name": "newAdminRole",
              "type": "bytes32",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "RoleAdminChanged",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "sender",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "RoleGranted",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "sender",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "RoleRevoked",
          "anonymous": false
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
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getRoleAdmin",
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
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getRoleMember",
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
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getRoleMemberCount",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "grantRole"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "hasRole",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "callerConfirmation",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "renounceRole"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "revokeRole"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "adminRole",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setRoleAdmin"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "getRoleAdmin(bytes32)": {
            "details": "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}."
          },
          "getRoleMember(bytes32,uint256)": {
            "details": "Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information."
          },
          "getRoleMemberCount(bytes32)": {
            "details": "Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role."
          },
          "grantRole(bytes32,address)": {
            "details": "Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleGranted} event."
          },
          "hasRole(bytes32,address)": {
            "details": "Returns `true` if `account` has been granted `role`."
          },
          "renounceRole(bytes32,address)": {
            "details": "Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `callerConfirmation`. May emit a {RoleRevoked} event."
          },
          "revokeRole(bytes32,address)": {
            "details": "Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleRevoked} event."
          },
          "setRoleAdmin(bytes32,bytes32)": {
            "params": {
              "adminRole": "The admin role for the given role.",
              "role": "The role to set the admin for."
            }
          },
          "supportsInterface(bytes4)": {
            "params": {
              "interfaceId": "The 4-byte interface identifier (ERC-165)."
            },
            "returns": {
              "_0": "isSupported True if the interface is supported, false otherwise."
            }
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "setRoleAdmin(bytes32,bytes32)": {
            "notice": "Sets the admin role for a given role."
          },
          "supportsInterface(bytes4)": {
            "notice": "Returns true if the contract supports the given interface."
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
        "src/AccessControls.sol": "AccessControls"
      },
      "evmVersion": "cancun",
      "libraries": {}
    },
    "sources": {
      "lib/openzeppelin-contracts/contracts/access/AccessControl.sol": {
        "keccak256": "0xa0e92d42942f4f57c5be50568dac11e9d00c93efcb458026e18d2d9b9b2e7308",
        "urls": [
          "bzz-raw://46326c0bb1e296b67185e81c918e0b40501b8b6386165855df0a3f3c634b6a80",
          "dweb:/ipfs/QmTwyrDYtsxsk6pymJTK94PnEpzsmkpUxFuzEiakDopy4Z"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/access/IAccessControl.sol": {
        "keccak256": "0xb6b36edd6a2999fd243ff226d6cbf84bd71af2432bbd0dfe19392996a1d9cb41",
        "urls": [
          "bzz-raw://1fd2f35495652e57e3f99bc6c510bc5f7dd398a176ea2e72d8ed730aebc6ca26",
          "dweb:/ipfs/QmTQV6X4gkikTib49cho5iDX3JvSQbdsoEChoDwrk3CbbH"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/access/extensions/AccessControlEnumerable.sol": {
        "keccak256": "0xb1c906fcd870fc8dfedb63bfb1bc58b4d2a7469bc13cc44d996fda430693850a",
        "urls": [
          "bzz-raw://bd98c7779af61b220166cf952a05f6aca82ec859744d407d29043f8100adfb9c",
          "dweb:/ipfs/Qmd6ftRk6cJgdooybM6F1X26R4SSUeNksv6Gni2NwEnKDw"
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
      "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
        "keccak256": "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2",
        "urls": [
          "bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12",
          "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol": {
        "keccak256": "0x9e8778b14317ba9e256c30a76fd6c32b960af621987f56069e1e819c77c6a133",
        "urls": [
          "bzz-raw://1777404f1dcd0fac188e55a288724ec3c67b45288e49cc64723e95e702b49ab8",
          "dweb:/ipfs/QmZFdC626GButBApwDUvvTnUzdinevC3B24d7yyh57XkiA"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol": {
        "keccak256": "0x4296879f55019b23e135000eb36896057e7101fb7fb859c5ef690cf14643757b",
        "urls": [
          "bzz-raw://87b3541437c8c443ccd36795e56a338ed12855eec17f8da624511b8d1a7e14df",
          "dweb:/ipfs/QmeJQCtZrQjtJLr6u7ZHWeH3pBnjtLWzvRrKViAi7UZqxL"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/structs/EnumerableSet.sol": {
        "keccak256": "0x86c1470cbfd878491e5de030072b647352d36bd27122cffb928970b1945282aa",
        "urls": [
          "bzz-raw://ad85dd393ee0a1917c57046abc5155f51f77844b2c6a42c05c1b8dd26d6ff3c1",
          "dweb:/ipfs/QmNqYc8To2NdnpP6E1tGz7t6A7beuENde5yovwov5pW1fA"
        ],
        "license": "MIT"
      },
      "src/AccessControls.sol": {
        "keccak256": "0x84272add4c47990cfab1ec0794e21542c78a1f6b5025f31d219c344b2d023e7b",
        "urls": [
          "bzz-raw://e590263b741f3771666a349547de28ac766eca95f2c52aeef6389fbcc3ebe2ea",
          "dweb:/ipfs/QmPjVD4VqwXLPKWxGB8RFe158kQdGE1jL4itBYUggKBXgc"
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
      }
    },
    "version": 1
  },
  "storageLayout": {
    "storage": [
      {
        "astId": 63362,
        "contract": "src/AccessControls.sol:AccessControls",
        "label": "_roles",
        "offset": 0,
        "slot": "0",
        "type": "t_mapping(t_bytes32,t_struct(RoleData)63357_storage)"
      },
      {
        "astId": 63884,
        "contract": "src/AccessControls.sol:AccessControls",
        "label": "_roleMembers",
        "offset": 0,
        "slot": "1",
        "type": "t_mapping(t_bytes32,t_struct(AddressSet)69378_storage)"
      }
    ],
    "types": {
      "t_address": {
        "encoding": "inplace",
        "label": "address",
        "numberOfBytes": "20"
      },
      "t_array(t_bytes32)dyn_storage": {
        "encoding": "dynamic_array",
        "label": "bytes32[]",
        "numberOfBytes": "32",
        "base": "t_bytes32"
      },
      "t_bool": {
        "encoding": "inplace",
        "label": "bool",
        "numberOfBytes": "1"
      },
      "t_bytes32": {
        "encoding": "inplace",
        "label": "bytes32",
        "numberOfBytes": "32"
      },
      "t_mapping(t_address,t_bool)": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => bool)",
        "numberOfBytes": "32",
        "value": "t_bool"
      },
      "t_mapping(t_bytes32,t_struct(AddressSet)69378_storage)": {
        "encoding": "mapping",
        "key": "t_bytes32",
        "label": "mapping(bytes32 => struct EnumerableSet.AddressSet)",
        "numberOfBytes": "32",
        "value": "t_struct(AddressSet)69378_storage"
      },
      "t_mapping(t_bytes32,t_struct(RoleData)63357_storage)": {
        "encoding": "mapping",
        "key": "t_bytes32",
        "label": "mapping(bytes32 => struct AccessControl.RoleData)",
        "numberOfBytes": "32",
        "value": "t_struct(RoleData)63357_storage"
      },
      "t_mapping(t_bytes32,t_uint256)": {
        "encoding": "mapping",
        "key": "t_bytes32",
        "label": "mapping(bytes32 => uint256)",
        "numberOfBytes": "32",
        "value": "t_uint256"
      },
      "t_struct(AddressSet)69378_storage": {
        "encoding": "inplace",
        "label": "struct EnumerableSet.AddressSet",
        "numberOfBytes": "64",
        "members": [
          {
            "astId": 69377,
            "contract": "src/AccessControls.sol:AccessControls",
            "label": "_inner",
            "offset": 0,
            "slot": "0",
            "type": "t_struct(Set)69063_storage"
          }
        ]
      },
      "t_struct(RoleData)63357_storage": {
        "encoding": "inplace",
        "label": "struct AccessControl.RoleData",
        "numberOfBytes": "64",
        "members": [
          {
            "astId": 63354,
            "contract": "src/AccessControls.sol:AccessControls",
            "label": "hasRole",
            "offset": 0,
            "slot": "0",
            "type": "t_mapping(t_address,t_bool)"
          },
          {
            "astId": 63356,
            "contract": "src/AccessControls.sol:AccessControls",
            "label": "adminRole",
            "offset": 0,
            "slot": "1",
            "type": "t_bytes32"
          }
        ]
      },
      "t_struct(Set)69063_storage": {
        "encoding": "inplace",
        "label": "struct EnumerableSet.Set",
        "numberOfBytes": "64",
        "members": [
          {
            "astId": 69058,
            "contract": "src/AccessControls.sol:AccessControls",
            "label": "_values",
            "offset": 0,
            "slot": "0",
            "type": "t_array(t_bytes32)dyn_storage"
          },
          {
            "astId": 69062,
            "contract": "src/AccessControls.sol:AccessControls",
            "label": "_positions",
            "offset": 0,
            "slot": "1",
            "type": "t_mapping(t_bytes32,t_uint256)"
          }
        ]
      },
      "t_uint256": {
        "encoding": "inplace",
        "label": "uint256",
        "numberOfBytes": "32"
      }
    }
  },
  "ast": {
    "absolutePath": "src/AccessControls.sol",
    "id": 80026,
    "exportedSymbols": {
      "AccessControlEnumerable": [
        64004
      ],
      "AccessControls": [
        80025
      ],
      "IAccessControls": [
        100164
      ]
    },
    "nodeType": "SourceUnit",
    "src": "46:1838:206",
    "nodes": [
      {
        "id": 79954,
        "nodeType": "PragmaDirective",
        "src": "46:24:206",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".34"
        ]
      },
      {
        "id": 79956,
        "nodeType": "ImportDirective",
        "src": "72:132:206",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/access/extensions/AccessControlEnumerable.sol",
        "file": "../lib/openzeppelin-contracts/contracts/access/extensions/AccessControlEnumerable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 80026,
        "sourceUnit": 64005,
        "symbolAliases": [
          {
            "foreign": {
              "id": 79955,
              "name": "AccessControlEnumerable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 64004,
              "src": "85:23:206",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 79958,
        "nodeType": "ImportDirective",
        "src": "206:67:206",
        "nodes": [],
        "absolutePath": "src/interfaces/IAccessControls.sol",
        "file": "./interfaces/IAccessControls.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 80026,
        "sourceUnit": 100165,
        "symbolAliases": [
          {
            "foreign": {
              "id": 79957,
              "name": "IAccessControls",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 100164,
              "src": "215:15:206",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 80025,
        "nodeType": "ContractDefinition",
        "src": "275:1608:206",
        "nodes": [
          {
            "id": 79984,
            "nodeType": "FunctionDefinition",
            "src": "654:133:206",
            "nodes": [],
            "body": {
              "id": 79983,
              "nodeType": "Block",
              "src": "681:106:206",
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
                        "id": 79973,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 79968,
                          "name": "admin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 79964,
                          "src": "699:5:206",
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
                              "id": 79971,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "716:1:206",
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
                            "id": 79970,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "708:7:206",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 79969,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "708:7:206",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 79972,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "708:10:206",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "699:19:206",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 79974,
                          "name": "ZeroAdmin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 100147,
                          "src": "720:9:206",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_error_pure$__$returns$_t_error_$",
                            "typeString": "function () pure returns (error)"
                          }
                        },
                        "id": 79975,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "720:11:206",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_error",
                          "typeString": "error"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_error",
                          "typeString": "error"
                        }
                      ],
                      "id": 79967,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "691:7:206",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_error_$returns$__$",
                        "typeString": "function (bool,error) pure"
                      }
                    },
                    "id": 79976,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "691:41:206",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 79977,
                  "nodeType": "ExpressionStatement",
                  "src": "691:41:206"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 79979,
                        "name": "DEFAULT_ADMIN_ROLE",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63365,
                        "src": "754:18:206",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 79980,
                        "name": "admin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79964,
                        "src": "774:5:206",
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
                      "id": 79978,
                      "name": "_grantRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        63971
                      ],
                      "referencedDeclaration": 63971,
                      "src": "743:10:206",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$_t_bool_$",
                        "typeString": "function (bytes32,address) returns (bool)"
                      }
                    },
                    "id": 79981,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "743:37:206",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 79982,
                  "nodeType": "ExpressionStatement",
                  "src": "743:37:206"
                }
              ]
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 79965,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 79964,
                  "mutability": "mutable",
                  "name": "admin",
                  "nameLocation": "674:5:206",
                  "nodeType": "VariableDeclaration",
                  "scope": 79984,
                  "src": "666:13:206",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 79963,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "666:7:206",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "665:15:206"
            },
            "returnParameters": {
              "id": 79966,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "681:0:206"
            },
            "scope": 80025,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 80000,
            "nodeType": "FunctionDefinition",
            "src": "1097:140:206",
            "nodes": [],
            "body": {
              "id": 79999,
              "nodeType": "Block",
              "src": "1190:47:206",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 79995,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79986,
                        "src": "1214:4:206",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 79996,
                        "name": "adminRole",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79988,
                        "src": "1220:9:206",
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
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 79994,
                      "name": "_setRoleAdmin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63553,
                      "src": "1200:13:206",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32,bytes32)"
                      }
                    },
                    "id": 79997,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1200:30:206",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 79998,
                  "nodeType": "ExpressionStatement",
                  "src": "1200:30:206"
                }
              ]
            },
            "baseFunctions": [
              100155
            ],
            "functionSelector": "1e4e0091",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 79991,
                    "name": "DEFAULT_ADMIN_ROLE",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 63365,
                    "src": "1170:18:206",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 79992,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 79990,
                  "name": "onlyRole",
                  "nameLocations": [
                    "1161:8:206"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 63376,
                  "src": "1161:8:206"
                },
                "nodeType": "ModifierInvocation",
                "src": "1161:28:206"
              }
            ],
            "name": "setRoleAdmin",
            "nameLocation": "1106:12:206",
            "parameters": {
              "id": 79989,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 79986,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "1127:4:206",
                  "nodeType": "VariableDeclaration",
                  "scope": 80000,
                  "src": "1119:12:206",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 79985,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1119:7:206",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 79988,
                  "mutability": "mutable",
                  "name": "adminRole",
                  "nameLocation": "1141:9:206",
                  "nodeType": "VariableDeclaration",
                  "scope": 80000,
                  "src": "1133:17:206",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 79987,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1133:7:206",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1118:33:206"
            },
            "returnParameters": {
              "id": 79993,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1190:0:206"
            },
            "scope": 80025,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 80024,
            "nodeType": "FunctionDefinition",
            "src": "1583:297:206",
            "nodes": [],
            "body": {
              "id": 80023,
              "nodeType": "Block",
              "src": "1744:136:206",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 80021,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      },
                      "id": 80016,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 80011,
                        "name": "interfaceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 80003,
                        "src": "1773:11:206",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "expression": {
                          "arguments": [
                            {
                              "id": 80013,
                              "name": "IAccessControls",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 100164,
                              "src": "1793:15:206",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IAccessControls_$100164_$",
                                "typeString": "type(contract IAccessControls)"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_type$_t_contract$_IAccessControls_$100164_$",
                                "typeString": "type(contract IAccessControls)"
                              }
                            ],
                            "id": 80012,
                            "name": "type",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -27,
                            "src": "1788:4:206",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 80014,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1788:21:206",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_meta_type_t_contract$_IAccessControls_$100164",
                            "typeString": "type(contract IAccessControls)"
                          }
                        },
                        "id": 80015,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "1810:11:206",
                        "memberName": "interfaceId",
                        "nodeType": "MemberAccess",
                        "src": "1788:33:206",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "src": "1773:48:206",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "arguments": [
                        {
                          "id": 80019,
                          "name": "interfaceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 80003,
                          "src": "1861:11:206",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        ],
                        "expression": {
                          "id": 80017,
                          "name": "super",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -25,
                          "src": "1837:5:206",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_super$_AccessControls_$80025_$",
                            "typeString": "type(contract super AccessControls)"
                          }
                        },
                        "id": 80018,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1843:17:206",
                        "memberName": "supportsInterface",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 63906,
                        "src": "1837:23:206",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_bytes4_$returns$_t_bool_$",
                          "typeString": "function (bytes4) view returns (bool)"
                        }
                      },
                      "id": 80020,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1837:36:206",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "1773:100:206",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 80010,
                  "id": 80022,
                  "nodeType": "Return",
                  "src": "1754:119:206"
                }
              ]
            },
            "baseFunctions": [
              63906,
              100163
            ],
            "documentation": {
              "id": 80001,
              "nodeType": "StructuredDocumentation",
              "src": "1547:31:206",
              "text": "@inheritdoc IAccessControls"
            },
            "functionSelector": "01ffc9a7",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "supportsInterface",
            "nameLocation": "1592:17:206",
            "overrides": {
              "id": 80007,
              "nodeType": "OverrideSpecifier",
              "overrides": [
                {
                  "id": 80005,
                  "name": "IAccessControls",
                  "nameLocations": [
                    "1675:15:206"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 100164,
                  "src": "1675:15:206"
                },
                {
                  "id": 80006,
                  "name": "AccessControlEnumerable",
                  "nameLocations": [
                    "1692:23:206"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 64004,
                  "src": "1692:23:206"
                }
              ],
              "src": "1666:50:206"
            },
            "parameters": {
              "id": 80004,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 80003,
                  "mutability": "mutable",
                  "name": "interfaceId",
                  "nameLocation": "1617:11:206",
                  "nodeType": "VariableDeclaration",
                  "scope": 80024,
                  "src": "1610:18:206",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 80002,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "1610:6:206",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1609:20:206"
            },
            "returnParameters": {
              "id": 80010,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 80009,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 80024,
                  "src": "1734:4:206",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 80008,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1734:4:206",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1733:6:206"
            },
            "scope": 80025,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 79959,
              "name": "IAccessControls",
              "nameLocations": [
                "302:15:206"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 100164,
              "src": "302:15:206"
            },
            "id": 79960,
            "nodeType": "InheritanceSpecifier",
            "src": "302:15:206"
          },
          {
            "baseName": {
              "id": 79961,
              "name": "AccessControlEnumerable",
              "nameLocations": [
                "319:23:206"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 64004,
              "src": "319:23:206"
            },
            "id": 79962,
            "nodeType": "InheritanceSpecifier",
            "src": "319:23:206"
          }
        ],
        "canonicalName": "AccessControls",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          80025,
          64004,
          63631,
          66231,
          66243,
          100164,
          64030,
          63714,
          66028
        ],
        "name": "AccessControls",
        "nameLocation": "284:14:206",
        "scope": 80026,
        "usedErrors": [
          63641,
          63644,
          100147
        ],
        "usedEvents": [
          63653,
          63662,
          63671
        ]
      }
    ],
    "license": "AGPL-3.0-or-later"
  },
  "id": 206
} as const;

export default artifact;
