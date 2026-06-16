import {
  defineCreationBytecodeLayout,
  defineDeployedBytecodeLayout,
  defineStorageLayout,
  validateEVM,
} from "@cmichel/assay";
import GroveBasinFactoryArtifact from "../artifacts/grove-basin-factory/GroveBasinFactory.js";
import { chain, contracts, verificationBlock } from "./constants.js";

const storageLayout = defineStorageLayout(GroveBasinFactoryArtifact.storageLayout);
const creationBytecodeLayout = defineCreationBytecodeLayout(GroveBasinFactoryArtifact.bytecode);
const deployedBytecodeLayout = defineDeployedBytecodeLayout({
  ...GroveBasinFactoryArtifact.deployedBytecode,
  immutableReferences: {},
});

await validateEVM({
  deployment: {
    chain,
    address: contracts.GROVE_BASIN_FACTORY,
    blockNumber: verificationBlock,
  },
  meta: {
    contractName: "GroveBasinFactory",
  },
  creation: {
    initCode: {
      layout: creationBytecodeLayout,
      source: {
        type: "transaction",
        hash: "0x6154253c2283e32872ab8c3ead1658eefa2f30b0916236ca5ef649b1bdde1679",
      },
    },
    runtimeCode: {
      layout: deployedBytecodeLayout,
    },
  },
  storage: {
    layout: storageLayout,
    assertions: () => {
      // GroveBasinFactory has no storage variables. Deployment-script effects are validated on the
      // Basin instances created through the factory in subsequent sections.
    },
  },
});
