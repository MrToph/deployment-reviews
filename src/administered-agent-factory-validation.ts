import {
  defineDeployedBytecodeLayout,
  defineStorageLayout,
  validateEVM,
} from "@cmichel/assay";
import AdministeredAgentFactoryArtifact from "../artifacts/administered-agent-factory/AdministeredAgentFactory.js";
import { contracts } from "./constants.js";

const BLOCK_NUMBER = 25280924;

const SOLIDITY_CBOR_IPFS_PREFIX = Uint8Array.from([
  0xa2, 0x64, 0x69, 0x70, 0x66, 0x73, 0x58, 0x22, 0x12, 0x20,
]);
const SOLIDITY_CBOR_SOLC_SUFFIX = Uint8Array.from([
  0x64, 0x73, 0x6f, 0x6c, 0x63, 0x43, 0x00, 0x08, 0x22, 0x00, 0x33,
]);

const NESTED_CBOR_DIGEST_REGIONS = [
  { contractName: "AdministeredAgent", offset: 5584, length: 32 },
] as const;

function assertBytes(actualCode: Uint8Array, offset: number, expected: Uint8Array, label: string) {
  const actual = actualCode.slice(offset, offset + expected.length);

  if (actual.length !== expected.length || !expected.every((byte, index) => byte === actual[index])) {
    throw new Error(`Unexpected ${label} at AdministeredAgentFactory bytecode offset ${offset}.`);
  }
}

function assertNestedSolidityCborMetadata(actualCode: Uint8Array) {
  for (const region of NESTED_CBOR_DIGEST_REGIONS) {
    assertBytes(
      actualCode,
      region.offset - SOLIDITY_CBOR_IPFS_PREFIX.length,
      SOLIDITY_CBOR_IPFS_PREFIX,
      `${region.contractName} CBOR IPFS prefix`,
    );
    assertBytes(
      actualCode,
      region.offset + region.length,
      SOLIDITY_CBOR_SOLC_SUFFIX,
      `${region.contractName} CBOR solc suffix`,
    );
  }
}

const meta = {
  contractName: "AdministeredAgentFactory",
  storageLayout: defineStorageLayout(AdministeredAgentFactoryArtifact.storageLayout),
  deployedBytecodeLayout: defineDeployedBytecodeLayout({
    ...AdministeredAgentFactoryArtifact.deployedBytecode,
    immutableReferences: {},
  }),
};

await validateEVM({
  deployment: {
    chain: "ethereum",
    address: contracts.ADMINISTERED_AGENT_FACTORY,
    blockNumber: BLOCK_NUMBER,
  },
  meta,
  bytecode: (actualCode) => {
    assertNestedSolidityCborMetadata(actualCode);

    return {
      // the AdministeredAgent contract has a different IPFS hash
      ignoredRegions: NESTED_CBOR_DIGEST_REGIONS,
    };
  },
  storage: () => {},
});
