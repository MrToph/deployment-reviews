import {
  defineDeployedBytecodeLayout,
  defineStorageLayout,
  validateEVM,
} from "@cmichel/assay";
import PAUFactoryArtifact from "../artifacts/pau-factory/PAUFactory.js";
import { contracts } from "./constants.js";

const BLOCK_NUMBER = 25280924;

const SOLIDITY_CBOR_IPFS_PREFIX = Uint8Array.from([
  0xa2, 0x64, 0x69, 0x70, 0x66, 0x73, 0x58, 0x22, 0x12, 0x20,
]);
const SOLIDITY_CBOR_SOLC_SUFFIX = Uint8Array.from([
  0x64, 0x73, 0x6f, 0x6c, 0x63, 0x43, 0x00, 0x08, 0x22, 0x00, 0x33,
]);

const NESTED_CBOR_DIGEST_REGIONS = [
  { contractName: "ALMProxy", offset: 3749, length: 32 },
  { contractName: "Controller", offset: 10969, length: 32 },
  { contractName: "ALMProxyFreezable", offset: 13769, length: 32 },
  { contractName: "AccessControls", offset: 16180, length: 32 },
  { contractName: "RateLimits", offset: 19314, length: 32 },
] as const;

function assertBytes(actualCode: Uint8Array, offset: number, expected: Uint8Array, label: string) {
  const actual = actualCode.slice(offset, offset + expected.length);

  if (actual.length !== expected.length || !expected.every((byte, index) => byte === actual[index])) {
    throw new Error(`Unexpected ${label} at PAUFactory bytecode offset ${offset}.`);
  }
}

function assertNestedSolidityCborMetadata(actualCode: Uint8Array) {
  // safety check that the regions we ignore are surround by the expected CBOR data
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
  contractName: "PAUFactory",
  storageLayout: defineStorageLayout(PAUFactoryArtifact.storageLayout),
  deployedBytecodeLayout: defineDeployedBytecodeLayout(PAUFactoryArtifact.deployedBytecode),
};

await validateEVM({
  deployment: {
    chain: "ethereum",
    address: contracts.PAU_FACTORY,
    blockNumber: BLOCK_NUMBER,
  },
  meta,
  bytecode: (actualCode) => {
    assertNestedSolidityCborMetadata(actualCode);

    return {
      immutables: [
        {
          astId: "81426",
          varName: "beacon",
          value: contracts.BEACON,
        },
      ],
      // the contract was apparently deployed from diamond-pau-deploy repo instead of diamond-pau repo
      // which leads to using different path remappings which changes the IPFS metadata
      ignoredRegions: NESTED_CBOR_DIGEST_REGIONS,
    };
  },
  storage: () => {},
});
