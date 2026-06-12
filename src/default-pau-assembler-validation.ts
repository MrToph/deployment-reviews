import {
  defineDeployedBytecodeLayout,
  defineStorageLayout,
  validateEVM,
} from "@cmichel/assay";
import DefaultPAUAssemblerArtifact from "../artifacts/default-pau-assembler/DefaultPAUAssembler.js";
import { contracts } from "./constants.js";

const BLOCK_NUMBER = 25295657;

const meta = {
  contractName: "DefaultPAUAssembler",
  storageLayout: defineStorageLayout(DefaultPAUAssemblerArtifact.storageLayout),
  deployedBytecodeLayout: defineDeployedBytecodeLayout(DefaultPAUAssemblerArtifact.deployedBytecode),
};

await validateEVM({
  deployment: {
    chain: "ethereum",
    address: contracts.DEFAULT_PAU_ASSEMBLER,
    blockNumber: BLOCK_NUMBER,
  },
  meta,
  bytecode: () => ({
    immutables: [
      {
        astId: "40611",
        varName: "administeredAgentFactory",
        value: contracts.ADMINISTERED_AGENT_FACTORY,
      },
      {
        astId: "40614",
        varName: "pauFactory",
        value: contracts.PAU_FACTORY,
      },
    ],
  }),
  storage: () => {},
});
