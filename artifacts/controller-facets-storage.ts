import type { StorageLayout } from "@cmichel/assay";

// Controller and the delegatecalled facets use ERC-7201 namespaced storage via explicit
// assembly slot roots. Forge's emitted storage layout is therefore empty/incomplete for the
// deployed Controller address: it does not include ControllerSharedStorage, ControllerStorage,
// OpenZeppelin upgradeable namespaces, or facet namespaces that are written through delegatecall.
//
// This file manually models those namespaces as prefixed top-level storage entries. The prefixes
// keep assertion paths and type ids collision-free while preserving the real absolute root slots.

const commonTypes = {
  t_address: {
    encoding: "inplace",
    label: "address",
    numberOfBytes: "20",
  },
  t_bool: {
    encoding: "inplace",
    label: "bool",
    numberOfBytes: "1",
  },
  t_bytes32: {
    encoding: "inplace",
    label: "bytes32",
    numberOfBytes: "32",
  },
  t_bytes4: {
    encoding: "inplace",
    label: "bytes4",
    numberOfBytes: "4",
  },
  t_int24: {
    encoding: "inplace",
    label: "int24",
    numberOfBytes: "3",
  },
  t_uint24: {
    encoding: "inplace",
    label: "uint24",
    numberOfBytes: "3",
  },
  t_uint32: {
    encoding: "inplace",
    label: "uint32",
    numberOfBytes: "4",
  },
  t_uint64: {
    encoding: "inplace",
    label: "uint64",
    numberOfBytes: "8",
  },
  t_uint256: {
    encoding: "inplace",
    label: "uint256",
    numberOfBytes: "32",
  },
} as const;

const controllerStorageLayout = {
  storage: [
    {
      contract: "src/ControllerSharedStorage.sol:ControllerSharedStorage",
      label: "controllerShared",
      offset: 0,
      slot: "0x77adf60bdbfedf206f8b8310f3d364080b7f61dcc0e46caac13c29bb1eb5cc00",
      type: "t_controllerShared_ControllerSharedStorage",
    },
    {
      contract: "src/Controller.sol:Controller",
      label: "controller",
      offset: 0,
      slot: "0xee25394e09bdf9f095ffaf6289395c59de06e33ff54692b0774d5012253c4d00",
      type: "t_controller_ControllerStorage",
    },
  ],
  types: {
    ...commonTypes,
    t_controllerShared_ControllerSharedStorage: {
      encoding: "inplace",
      label: "struct ControllerSharedStorage.SharedControllerStorage",
      numberOfBytes: "96",
      members: [
        {
          contract: "src/ControllerSharedStorage.sol:ControllerSharedStorage",
          label: "accessControls",
          offset: 0,
          slot: "0",
          type: "t_address",
        },
        {
          contract: "src/ControllerSharedStorage.sol:ControllerSharedStorage",
          label: "proxy",
          offset: 0,
          slot: "1",
          type: "t_address",
        },
        {
          contract: "src/ControllerSharedStorage.sol:ControllerSharedStorage",
          label: "rateLimits",
          offset: 0,
          slot: "2",
          type: "t_address",
        },
      ],
    },
    t_controller_ControllerStorage: {
      encoding: "inplace",
      label: "struct Controller.ControllerStorage",
      numberOfBytes: "128",
      members: [
        {
          contract: "src/Controller.sol:Controller",
          label: "integrationIds",
          offset: 0,
          slot: "0",
          type: "t_controller_Bytes32Set",
        },
        {
          contract: "src/Controller.sol:Controller",
          label: "configs",
          offset: 0,
          slot: "2",
          type: "t_controller_mapping_bytes32_Config",
        },
        {
          contract: "src/Controller.sol:Controller",
          label: "dispatches",
          offset: 0,
          slot: "3",
          type: "t_controller_mapping_bytes4_Dispatch",
        },
      ],
    },
    t_controller_Bytes32Set: {
      encoding: "inplace",
      label: "struct EnumerableSet.Bytes32Set",
      numberOfBytes: "64",
      members: [
        {
          contract: "src/Controller.sol:Controller",
          label: "_inner",
          offset: 0,
          slot: "0",
          type: "t_controller_Set",
        },
      ],
    },
    t_controller_Set: {
      encoding: "inplace",
      label: "struct EnumerableSet.Set",
      numberOfBytes: "64",
      members: [
        {
          contract: "src/Controller.sol:Controller",
          label: "_values",
          offset: 0,
          slot: "0",
          type: "t_controller_array_bytes32_dyn",
        },
        {
          contract: "src/Controller.sol:Controller",
          label: "_positions",
          offset: 0,
          slot: "1",
          type: "t_controller_mapping_bytes32_uint256",
        },
      ],
    },
    t_controller_array_bytes32_dyn: {
      base: "t_bytes32",
      encoding: "dynamic_array",
      label: "bytes32[]",
      numberOfBytes: "32",
    },
    t_controller_mapping_bytes32_uint256: {
      encoding: "mapping",
      key: "t_bytes32",
      label: "mapping(bytes32 => uint256)",
      numberOfBytes: "32",
      value: "t_uint256",
    },
    t_controller_mapping_bytes32_Config: {
      encoding: "mapping",
      key: "t_bytes32",
      label: "mapping(bytes32 => struct IEnumerableIntegrations.Config)",
      numberOfBytes: "32",
      value: "t_controller_Config",
    },
    t_controller_Config: {
      encoding: "inplace",
      label: "struct IEnumerableIntegrations.Config",
      numberOfBytes: "64",
      members: [
        {
          contract: "src/Controller.sol:Controller",
          label: "facet",
          offset: 0,
          slot: "0",
          type: "t_address",
        },
        {
          contract: "src/Controller.sol:Controller",
          label: "wires",
          offset: 0,
          slot: "1",
          type: "t_controller_array_Wire_dyn",
        },
      ],
    },
    t_controller_array_Wire_dyn: {
      base: "t_controller_Wire",
      encoding: "dynamic_array",
      label: "struct IEnumerableIntegrations.Wire[]",
      numberOfBytes: "32",
    },
    t_controller_Wire: {
      encoding: "inplace",
      label: "struct IEnumerableIntegrations.Wire",
      numberOfBytes: "32",
      members: [
        {
          contract: "src/Controller.sol:Controller",
          label: "callSelector",
          offset: 0,
          slot: "0",
          type: "t_bytes4",
        },
        {
          contract: "src/Controller.sol:Controller",
          label: "delegateSelector",
          offset: 4,
          slot: "0",
          type: "t_bytes4",
        },
      ],
    },
    t_controller_mapping_bytes4_Dispatch: {
      encoding: "mapping",
      key: "t_bytes4",
      label: "mapping(bytes4 => struct IEnumerableIntegrations.Dispatch)",
      numberOfBytes: "32",
      value: "t_controller_Dispatch",
    },
    t_controller_Dispatch: {
      encoding: "inplace",
      label: "struct IEnumerableIntegrations.Dispatch",
      numberOfBytes: "32",
      members: [
        {
          contract: "src/Controller.sol:Controller",
          label: "facet",
          offset: 0,
          slot: "0",
          type: "t_address",
        },
        {
          contract: "src/Controller.sol:Controller",
          label: "delegateSelector",
          offset: 20,
          slot: "0",
          type: "t_bytes4",
        },
      ],
    },
  },
} as const satisfies StorageLayout;

const initializableStorageLayout = {
  storage: [
    {
      contract: "lib/oz-upgradeable/contracts/proxy/utils/Initializable.sol:Initializable",
      label: "initializable",
      offset: 0,
      slot: "0xf0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00",
      type: "t_initializable_InitializableStorage",
    },
  ],
  types: {
    ...commonTypes,
    t_initializable_InitializableStorage: {
      encoding: "inplace",
      label: "struct Initializable.InitializableStorage",
      numberOfBytes: "32",
      members: [
        {
          contract: "lib/oz-upgradeable/contracts/proxy/utils/Initializable.sol:Initializable",
          label: "_initialized",
          offset: 0,
          slot: "0",
          type: "t_uint64",
        },
        {
          contract: "lib/oz-upgradeable/contracts/proxy/utils/Initializable.sol:Initializable",
          label: "_initializing",
          offset: 8,
          slot: "0",
          type: "t_bool",
        },
      ],
    },
  },
} as const satisfies StorageLayout;

const reentrancyGuardStorageLayout = {
  storage: [
    {
      contract: "lib/oz-upgradeable/contracts/utils/ReentrancyGuardUpgradeable.sol:ReentrancyGuardUpgradeable",
      label: "reentrancyGuard",
      offset: 0,
      slot: "0x9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00",
      type: "t_reentrancyGuard_ReentrancyGuardStorage",
    },
  ],
  types: {
    ...commonTypes,
    t_reentrancyGuard_ReentrancyGuardStorage: {
      encoding: "inplace",
      label: "struct ReentrancyGuardUpgradeable.ReentrancyGuardStorage",
      numberOfBytes: "32",
      members: [
        {
          contract: "lib/oz-upgradeable/contracts/utils/ReentrancyGuardUpgradeable.sol:ReentrancyGuardUpgradeable",
          label: "_status",
          offset: 0,
          slot: "0",
          type: "t_uint256",
        },
      ],
    },
  },
} as const satisfies StorageLayout;

const erc4626FacetStorageLayout = {
  storage: [
    {
      contract: "src/facets/erc4626/ERC4626Facet.sol:ERC4626Facet",
      label: "erc4626Facet",
      offset: 0,
      slot: "0xff00b7bf03054889656e52db9e9ee5ee36d0a6360e21036fb566f0cbe8c36900",
      type: "t_erc4626Facet_FacetStorage",
    },
  ],
  types: {
    ...commonTypes,
    t_erc4626Facet_FacetStorage: {
      encoding: "inplace",
      label: "struct ERC4626Facet.FacetStorage",
      numberOfBytes: "32",
      members: [
        {
          contract: "src/facets/erc4626/ERC4626Facet.sol:ERC4626Facet",
          label: "maxExchangeRates",
          offset: 0,
          slot: "0",
          type: "t_erc4626Facet_mapping_address_uint256",
        },
      ],
    },
    t_erc4626Facet_mapping_address_uint256: {
      encoding: "mapping",
      key: "t_address",
      label: "mapping(address => uint256)",
      numberOfBytes: "32",
      value: "t_uint256",
    },
  },
} as const satisfies StorageLayout;

const uniswapV3FacetStorageLayout = {
  storage: [
    {
      contract: "src/facets/uniswap-v3/UniswapV3Facet.sol:UniswapV3Facet",
      label: "uniswapV3Facet",
      offset: 0,
      slot: "0xc41601344aaf9df41ecdea44841db009027b523fe5b6592e95408df889815700",
      type: "t_uniswapV3Facet_FacetStorage",
    },
  ],
  types: {
    ...commonTypes,
    t_uniswapV3Facet_FacetStorage: {
      encoding: "inplace",
      label: "struct UniswapV3Facet.FacetStorage",
      numberOfBytes: "64",
      members: [
        {
          contract: "src/facets/uniswap-v3/UniswapV3Facet.sol:UniswapV3Facet",
          label: "maxSlippages",
          offset: 0,
          slot: "0",
          type: "t_uniswapV3Facet_mapping_address_uint256",
        },
        {
          contract: "src/facets/uniswap-v3/UniswapV3Facet.sol:UniswapV3Facet",
          label: "poolParams",
          offset: 0,
          slot: "1",
          type: "t_uniswapV3Facet_mapping_address_PoolParams",
        },
      ],
    },
    t_uniswapV3Facet_mapping_address_uint256: {
      encoding: "mapping",
      key: "t_address",
      label: "mapping(address => uint256)",
      numberOfBytes: "32",
      value: "t_uint256",
    },
    t_uniswapV3Facet_mapping_address_PoolParams: {
      encoding: "mapping",
      key: "t_address",
      label: "mapping(address => struct IUniswapV3Facet.PoolParams)",
      numberOfBytes: "32",
      value: "t_uniswapV3Facet_PoolParams",
    },
    t_uniswapV3Facet_PoolParams: {
      encoding: "inplace",
      label: "struct IUniswapV3Facet.PoolParams",
      numberOfBytes: "96",
      members: [
        {
          contract: "src/facets/uniswap-v3/UniswapV3Facet.sol:UniswapV3Facet",
          label: "swapMaxTickDelta",
          offset: 0,
          slot: "0",
          type: "t_uint24",
        },
        {
          contract: "src/facets/uniswap-v3/UniswapV3Facet.sol:UniswapV3Facet",
          label: "liquidityTickBounds",
          offset: 0,
          slot: "1",
          type: "t_uniswapV3Facet_Ticks",
        },
        {
          contract: "src/facets/uniswap-v3/UniswapV3Facet.sol:UniswapV3Facet",
          label: "twapSecondsAgo",
          offset: 0,
          slot: "2",
          type: "t_uint32",
        },
      ],
    },
    t_uniswapV3Facet_Ticks: {
      encoding: "inplace",
      label: "struct IUniswapV3Facet.Ticks",
      numberOfBytes: "32",
      members: [
        {
          contract: "src/facets/uniswap-v3/UniswapV3Facet.sol:UniswapV3Facet",
          label: "lower",
          offset: 0,
          slot: "0",
          type: "t_int24",
        },
        {
          contract: "src/facets/uniswap-v3/UniswapV3Facet.sol:UniswapV3Facet",
          label: "upper",
          offset: 3,
          slot: "0",
          type: "t_int24",
        },
      ],
    },
  },
} as const satisfies StorageLayout;

export const controllerFacetsStorageLayout = {
  storage: [
    ...controllerStorageLayout.storage,
    ...initializableStorageLayout.storage,
    ...reentrancyGuardStorageLayout.storage,
    ...erc4626FacetStorageLayout.storage,
    ...uniswapV3FacetStorageLayout.storage,
  ],
  types: {
    ...controllerStorageLayout.types,
    ...initializableStorageLayout.types,
    ...reentrancyGuardStorageLayout.types,
    ...erc4626FacetStorageLayout.types,
    ...uniswapV3FacetStorageLayout.types,
  },
} as const satisfies StorageLayout;
