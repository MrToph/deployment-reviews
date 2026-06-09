import {
  defineDeployedBytecodeLayout,
  defineStorageLayout,
  validateEVM,
} from "@cmichel/assay";
import AaveFacetArtifact from "../artifacts/facets/AaveFacet.js";
import BasinFacetArtifact from "../artifacts/facets/BasinFacet.js";
import CCTPFacetArtifact from "../artifacts/facets/CCTPFacet.js";
import CentrifugeFacetArtifact from "../artifacts/facets/CentrifugeFacet.js";
import CurveFacetArtifact from "../artifacts/facets/CurveFacet.js";
import DAIUSDSFacetArtifact from "../artifacts/facets/DAIUSDSFacet.js";
import ERC4626FacetArtifact from "../artifacts/facets/ERC4626Facet.js";
import ERC7540FacetArtifact from "../artifacts/facets/ERC7540Facet.js";
import EthenaFacetArtifact from "../artifacts/facets/EthenaFacet.js";
import FarmFacetArtifact from "../artifacts/facets/FarmFacet.js";
import LayerZeroFacetArtifact from "../artifacts/facets/LayerZeroFacet.js";
import MapleFacetArtifact from "../artifacts/facets/MapleFacet.js";
import MerklFacetArtifact from "../artifacts/facets/MerklFacet.js";
import OTCFacetArtifact from "../artifacts/facets/OTCFacet.js";
import PendleFacetArtifact from "../artifacts/facets/PendleFacet.js";
import PSMFacetArtifact from "../artifacts/facets/PSMFacet.js";
import SparkVaultFacetArtifact from "../artifacts/facets/SparkVaultFacet.js";
import SuperstateFacetArtifact from "../artifacts/facets/SuperstateFacet.js";
import TransferAssetFacetArtifact from "../artifacts/facets/TransferAssetFacet.js";
import UniswapV3FacetArtifact from "../artifacts/facets/UniswapV3Facet.js";
import UniswapV4FacetArtifact from "../artifacts/facets/UniswapV4Facet.js";
import USDSFacetArtifact from "../artifacts/facets/USDSFacet.js";
import WEETHFacetArtifact from "../artifacts/facets/WEETHFacet.js";
import WrapProxyETHFacetArtifact from "../artifacts/facets/WrapProxyETHFacet.js";
import WSTETHFacetArtifact from "../artifacts/facets/WSTETHFacet.js";
import { constants, facets } from "./constants.js";

const BLOCK_NUMBER = 25280924;

const AaveFacetMeta = {
  contractName: "AaveFacet",
  storageLayout: defineStorageLayout(AaveFacetArtifact.storageLayout),
  deployedBytecodeLayout: defineDeployedBytecodeLayout({
    ...AaveFacetArtifact.deployedBytecode,
    immutableReferences: {},
  }),
};

const BasinFacetMeta = {
  contractName: "BasinFacet",
  storageLayout: defineStorageLayout(BasinFacetArtifact.storageLayout),
  deployedBytecodeLayout: defineDeployedBytecodeLayout({
    ...BasinFacetArtifact.deployedBytecode,
    immutableReferences: {},
  }),
};

const CCTPFacetMeta = {
  contractName: "CCTPFacet",
  storageLayout: defineStorageLayout(CCTPFacetArtifact.storageLayout),
  deployedBytecodeLayout: defineDeployedBytecodeLayout(CCTPFacetArtifact.deployedBytecode),
};

const CentrifugeFacetMeta = {
  contractName: "CentrifugeFacet",
  storageLayout: defineStorageLayout(CentrifugeFacetArtifact.storageLayout),
  deployedBytecodeLayout: defineDeployedBytecodeLayout({
    ...CentrifugeFacetArtifact.deployedBytecode,
    immutableReferences: {},
  }),
};

const CurveFacetMeta = {
  contractName: "CurveFacet",
  storageLayout: defineStorageLayout(CurveFacetArtifact.storageLayout),
  deployedBytecodeLayout: defineDeployedBytecodeLayout({
    ...CurveFacetArtifact.deployedBytecode,
    immutableReferences: {},
  }),
};

const DAIUSDSFacetMeta = {
  contractName: "DAIUSDSFacet",
  storageLayout: defineStorageLayout(DAIUSDSFacetArtifact.storageLayout),
  deployedBytecodeLayout: defineDeployedBytecodeLayout(DAIUSDSFacetArtifact.deployedBytecode),
};

const ERC4626FacetMeta = {
  contractName: "ERC4626Facet",
  storageLayout: defineStorageLayout(ERC4626FacetArtifact.storageLayout),
  deployedBytecodeLayout: defineDeployedBytecodeLayout({
    ...ERC4626FacetArtifact.deployedBytecode,
    immutableReferences: {},
  }),
};

const ERC7540FacetMeta = {
  contractName: "ERC7540Facet",
  storageLayout: defineStorageLayout(ERC7540FacetArtifact.storageLayout),
  deployedBytecodeLayout: defineDeployedBytecodeLayout({
    ...ERC7540FacetArtifact.deployedBytecode,
    immutableReferences: {},
  }),
};

const EthenaFacetMeta = {
  contractName: "EthenaFacet",
  storageLayout: defineStorageLayout(EthenaFacetArtifact.storageLayout),
  deployedBytecodeLayout: defineDeployedBytecodeLayout(EthenaFacetArtifact.deployedBytecode),
};

const FarmFacetMeta = {
  contractName: "FarmFacet",
  storageLayout: defineStorageLayout(FarmFacetArtifact.storageLayout),
  deployedBytecodeLayout: defineDeployedBytecodeLayout({
    ...FarmFacetArtifact.deployedBytecode,
    immutableReferences: {},
  }),
};

const LayerZeroFacetMeta = {
  contractName: "LayerZeroFacet",
  storageLayout: defineStorageLayout(LayerZeroFacetArtifact.storageLayout),
  deployedBytecodeLayout: defineDeployedBytecodeLayout({
    ...LayerZeroFacetArtifact.deployedBytecode,
    immutableReferences: {},
  }),
};

const MapleFacetMeta = {
  contractName: "MapleFacet",
  storageLayout: defineStorageLayout(MapleFacetArtifact.storageLayout),
  deployedBytecodeLayout: defineDeployedBytecodeLayout({
    ...MapleFacetArtifact.deployedBytecode,
    immutableReferences: {},
  }),
};

const MerklFacetMeta = {
  contractName: "MerklFacet",
  storageLayout: defineStorageLayout(MerklFacetArtifact.storageLayout),
  deployedBytecodeLayout: defineDeployedBytecodeLayout({
    ...MerklFacetArtifact.deployedBytecode,
    immutableReferences: {},
  }),
};

const OTCFacetMeta = {
  contractName: "OTCFacet",
  storageLayout: defineStorageLayout(OTCFacetArtifact.storageLayout),
  deployedBytecodeLayout: defineDeployedBytecodeLayout({
    ...OTCFacetArtifact.deployedBytecode,
    immutableReferences: {},
  }),
};

const PendleFacetMeta = {
  contractName: "PendleFacet",
  storageLayout: defineStorageLayout(PendleFacetArtifact.storageLayout),
  deployedBytecodeLayout: defineDeployedBytecodeLayout(PendleFacetArtifact.deployedBytecode),
};

const PSMFacetMeta = {
  contractName: "PSMFacet",
  storageLayout: defineStorageLayout(PSMFacetArtifact.storageLayout),
  deployedBytecodeLayout: defineDeployedBytecodeLayout(PSMFacetArtifact.deployedBytecode),
};

const SparkVaultFacetMeta = {
  contractName: "SparkVaultFacet",
  storageLayout: defineStorageLayout(SparkVaultFacetArtifact.storageLayout),
  deployedBytecodeLayout: defineDeployedBytecodeLayout({
    ...SparkVaultFacetArtifact.deployedBytecode,
    immutableReferences: {},
  }),
};

const SuperstateFacetMeta = {
  contractName: "SuperstateFacet",
  storageLayout: defineStorageLayout(SuperstateFacetArtifact.storageLayout),
  deployedBytecodeLayout: defineDeployedBytecodeLayout(SuperstateFacetArtifact.deployedBytecode),
};

const TransferAssetFacetMeta = {
  contractName: "TransferAssetFacet",
  storageLayout: defineStorageLayout(TransferAssetFacetArtifact.storageLayout),
  deployedBytecodeLayout: defineDeployedBytecodeLayout({
    ...TransferAssetFacetArtifact.deployedBytecode,
    immutableReferences: {},
  }),
};

const UniswapV3FacetMeta = {
  contractName: "UniswapV3Facet",
  storageLayout: defineStorageLayout(UniswapV3FacetArtifact.storageLayout),
  deployedBytecodeLayout: defineDeployedBytecodeLayout(UniswapV3FacetArtifact.deployedBytecode),
};

const UniswapV4FacetMeta = {
  contractName: "UniswapV4Facet",
  storageLayout: defineStorageLayout(UniswapV4FacetArtifact.storageLayout),
  deployedBytecodeLayout: defineDeployedBytecodeLayout(UniswapV4FacetArtifact.deployedBytecode),
};

const USDSFacetMeta = {
  contractName: "USDSFacet",
  storageLayout: defineStorageLayout(USDSFacetArtifact.storageLayout),
  deployedBytecodeLayout: defineDeployedBytecodeLayout(USDSFacetArtifact.deployedBytecode),
};

const WEETHFacetMeta = {
  contractName: "WEETHFacet",
  storageLayout: defineStorageLayout(WEETHFacetArtifact.storageLayout),
  deployedBytecodeLayout: defineDeployedBytecodeLayout(WEETHFacetArtifact.deployedBytecode),
};

const WrapProxyETHFacetMeta = {
  contractName: "WrapProxyETHFacet",
  storageLayout: defineStorageLayout(WrapProxyETHFacetArtifact.storageLayout),
  deployedBytecodeLayout: defineDeployedBytecodeLayout(WrapProxyETHFacetArtifact.deployedBytecode),
};

const WSTETHFacetMeta = {
  contractName: "WSTETHFacet",
  storageLayout: defineStorageLayout(WSTETHFacetArtifact.storageLayout),
  deployedBytecodeLayout: defineDeployedBytecodeLayout(WSTETHFacetArtifact.deployedBytecode),
};

async function main(): Promise<void> {
  await validateEVM({
    deployment: {
      chain: "ethereum",
      address: facets.AaveFacet,
      blockNumber: BLOCK_NUMBER,
    },
    meta: AaveFacetMeta,
    bytecode: () => ({
      immutables: [],
    }),
    storage: () => {},
  });

  await validateEVM({
    deployment: {
      chain: "ethereum",
      address: facets.BasinFacet,
      blockNumber: BLOCK_NUMBER,
    },
    meta: BasinFacetMeta,
    bytecode: () => ({
      immutables: [],
    }),
    storage: () => {},
  });

  await validateEVM({
    deployment: {
      chain: "ethereum",
      address: facets.CCTPFacet,
      blockNumber: BLOCK_NUMBER,
    },
    meta: CCTPFacetMeta,
    bytecode: () => ({
      immutables: [
        {
          astId: "83171",
          varName: "cctp",
          value: constants.CCTP_TOKEN_MESSENGER,
        },
        {
          astId: "83175",
          varName: "usdc",
          value: constants.USDC,
        },
      ],
    }),
    storage: () => {},
  });

  await validateEVM({
    deployment: {
      chain: "ethereum",
      address: facets.CentrifugeFacet,
      blockNumber: BLOCK_NUMBER,
    },
    meta: CentrifugeFacetMeta,
    bytecode: () => ({
      immutables: [],
    }),
    storage: () => {},
  });

  await validateEVM({
    deployment: {
      chain: "ethereum",
      address: facets.CurveFacet,
      blockNumber: BLOCK_NUMBER,
    },
    meta: CurveFacetMeta,
    bytecode: () => ({
      immutables: [],
    }),
    storage: () => {},
  });

  await validateEVM({
    deployment: {
      chain: "ethereum",
      address: facets.DAIUSDSFacet,
      blockNumber: BLOCK_NUMBER,
    },
    meta: DAIUSDSFacetMeta,
    bytecode: () => ({
      immutables: [
        {
          astId: "86175",
          varName: "dai",
          value: constants.DAI,
        },
        {
          astId: "86179",
          varName: "daiUSDS",
          value: constants.DAI_USDS,
        },
        {
          astId: "86183",
          varName: "usds",
          value: constants.USDS,
        },
      ],
    }),
    storage: () => {},
  });

  await validateEVM({
    deployment: {
      chain: "ethereum",
      address: facets.ERC4626Facet,
      blockNumber: BLOCK_NUMBER,
    },
    meta: ERC4626FacetMeta,
    bytecode: () => ({
      immutables: [],
    }),
    storage: () => {},
  });

  await validateEVM({
    deployment: {
      chain: "ethereum",
      address: facets.ERC7540Facet,
      blockNumber: BLOCK_NUMBER,
    },
    meta: ERC7540FacetMeta,
    bytecode: () => ({
      immutables: [],
    }),
    storage: () => {},
  });

  await validateEVM({
    deployment: {
      chain: "ethereum",
      address: facets.EthenaFacet,
      blockNumber: BLOCK_NUMBER,
    },
    meta: EthenaFacetMeta,
    bytecode: () => ({
      immutables: [
        {
          astId: "87745",
          varName: "minter",
          value: constants.ETHENA_MINTER,
        },
        {
          astId: "87749",
          varName: "susde",
          value: constants.SUSDE,
        },
        {
          astId: "87753",
          varName: "usdc",
          value: constants.USDC,
        },
        {
          astId: "87757",
          varName: "usde",
          value: constants.USDE,
        },
      ],
    }),
    storage: () => {},
  });

  await validateEVM({
    deployment: {
      chain: "ethereum",
      address: facets.FarmFacet,
      blockNumber: BLOCK_NUMBER,
    },
    meta: FarmFacetMeta,
    bytecode: () => ({
      immutables: [],
    }),
    storage: () => {},
  });

  await validateEVM({
    deployment: {
      chain: "ethereum",
      address: facets.LayerZeroFacet,
      blockNumber: BLOCK_NUMBER,
    },
    meta: LayerZeroFacetMeta,
    bytecode: () => ({
      immutables: [],
    }),
    storage: () => {},
  });

  await validateEVM({
    deployment: {
      chain: "ethereum",
      address: facets.MapleFacet,
      blockNumber: BLOCK_NUMBER,
    },
    meta: MapleFacetMeta,
    bytecode: () => ({
      immutables: [],
    }),
    storage: () => {},
  });

  await validateEVM({
    deployment: {
      chain: "ethereum",
      address: facets.MerklFacet,
      blockNumber: BLOCK_NUMBER,
    },
    meta: MerklFacetMeta,
    bytecode: () => ({
      immutables: [],
    }),
    storage: () => {},
  });

  await validateEVM({
    deployment: {
      chain: "ethereum",
      address: facets.OTCFacet,
      blockNumber: BLOCK_NUMBER,
    },
    meta: OTCFacetMeta,
    bytecode: () => ({
      immutables: [],
    }),
    storage: () => {},
  });

  await validateEVM({
    deployment: {
      chain: "ethereum",
      address: facets.PendleFacet,
      blockNumber: BLOCK_NUMBER,
    },
    meta: PendleFacetMeta,
    bytecode: () => ({
      immutables: [
        {
          astId: "91029",
          varName: "router",
          value: constants.PENDLE_ROUTER,
        },
      ],
    }),
    storage: () => {},
  });

  await validateEVM({
    deployment: {
      chain: "ethereum",
      address: facets.PSMFacet,
      blockNumber: BLOCK_NUMBER,
    },
    meta: PSMFacetMeta,
    bytecode: () => ({
      immutables: [
        {
          astId: "91421",
          varName: "dai",
          value: constants.DAI,
        },
        {
          astId: "91425",
          varName: "daiUSDS",
          value: constants.DAI_USDS,
        },
        {
          astId: "91429",
          varName: "psm",
          value: constants.PSM,
        },
        {
          astId: "91433",
          varName: "usdc",
          value: constants.USDC,
        },
        {
          astId: "91437",
          varName: "usds",
          value: constants.USDS,
        },
      ],
    }),
    storage: () => {},
  });

  await validateEVM({
    deployment: {
      chain: "ethereum",
      address: facets.SparkVaultFacet,
      blockNumber: BLOCK_NUMBER,
    },
    meta: SparkVaultFacetMeta,
    bytecode: () => ({
      immutables: [],
    }),
    storage: () => {},
  });

  await validateEVM({
    deployment: {
      chain: "ethereum",
      address: facets.SuperstateFacet,
      blockNumber: BLOCK_NUMBER,
    },
    meta: SuperstateFacetMeta,
    bytecode: () => ({
      immutables: [
        {
          astId: "92412",
          varName: "usdc",
          value: constants.USDC,
        },
        {
          astId: "92416",
          varName: "ustb",
          value: constants.USTB,
        },
      ],
    }),
    storage: () => {},
  });

  await validateEVM({
    deployment: {
      chain: "ethereum",
      address: facets.TransferAssetFacet,
      blockNumber: BLOCK_NUMBER,
    },
    meta: TransferAssetFacetMeta,
    bytecode: () => ({
      immutables: [],
    }),
    storage: () => {},
  });

  await validateEVM({
    deployment: {
      chain: "ethereum",
      address: facets.UniswapV3Facet,
      blockNumber: BLOCK_NUMBER,
    },
    meta: UniswapV3FacetMeta,
    bytecode: () => ({
      immutables: [
        {
          astId: "93287",
          varName: "positionManager",
          value: constants.UNISWAP_V3_POSITION_MANAGER,
        },
        {
          astId: "93291",
          varName: "router",
          value: constants.UNISWAP_V3_ROUTER,
        },
      ],
    }),
    storage: () => {},
  });

  await validateEVM({
    deployment: {
      chain: "ethereum",
      address: facets.UniswapV4Facet,
      blockNumber: BLOCK_NUMBER,
    },
    meta: UniswapV4FacetMeta,
    bytecode: () => ({
      immutables: [
        {
          astId: "96229",
          varName: "permit2",
          value: constants.PERMIT2,
        },
        {
          astId: "96233",
          varName: "positionManager",
          value: constants.UNISWAP_V4_POSITION_MANAGER,
        },
        {
          astId: "96237",
          varName: "router",
          value: constants.UNISWAP_V4_ROUTER,
        },
      ],
    }),
    storage: () => {},
  });

  await validateEVM({
    deployment: {
      chain: "ethereum",
      address: facets.USDSFacet,
      blockNumber: BLOCK_NUMBER,
    },
    meta: USDSFacetMeta,
    bytecode: () => ({
      immutables: [
        {
          astId: "98057",
          varName: "usds",
          value: constants.USDS,
        },
      ],
    }),
    storage: () => {},
  });

  await validateEVM({
    deployment: {
      chain: "ethereum",
      address: facets.WEETHFacet,
      blockNumber: BLOCK_NUMBER,
    },
    meta: WEETHFacetMeta,
    bytecode: () => ({
      immutables: [
        {
          astId: "98585",
          varName: "weeth",
          value: constants.WEETH,
        },
        {
          astId: "98589",
          varName: "weth",
          value: constants.WETH,
        },
      ],
    }),
    storage: () => {},
  });

  await validateEVM({
    deployment: {
      chain: "ethereum",
      address: facets.WrapProxyETHFacet,
      blockNumber: BLOCK_NUMBER,
    },
    meta: WrapProxyETHFacetMeta,
    bytecode: () => ({
      immutables: [
        {
          astId: "99483",
          varName: "weth",
          value: constants.WETH,
        },
      ],
    }),
    storage: () => {},
  });

  await validateEVM({
    deployment: {
      chain: "ethereum",
      address: facets.WSTETHFacet,
      blockNumber: BLOCK_NUMBER,
    },
    meta: WSTETHFacetMeta,
    bytecode: () => ({
      immutables: [
        {
          astId: "99720",
          varName: "weth",
          value: constants.WETH,
        },
        {
          astId: "99724",
          varName: "withdrawQueue",
          value: constants.WSTETH_WITHDRAW_QUEUE,
        },
        {
          astId: "99728",
          varName: "wsteth",
          value: constants.WSTETH,
        },
      ],
    }),
    storage: () => {},
  });
}

await main();
