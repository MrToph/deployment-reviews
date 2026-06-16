import { encodeAbiParameters } from "viem";
import {
  defineCreationBytecodeLayout,
  defineDeployedBytecodeLayout,
  defineStorageLayout,
  validateEVM,
} from "@cmichel/assay";
import ChronicleRateProviderArtifact from "../artifacts/rate-providers/ChronicleRateProvider.js";
import FixedRateProviderArtifact from "../artifacts/rate-providers/FixedRateProvider.js";
import { chain, contracts, thirdParty, verificationBlock } from "./constants.js";

const FIXED_RATE = 10n ** 27n;

const fixedRateProviderStorageLayout = defineStorageLayout(FixedRateProviderArtifact.storageLayout);
const fixedRateProviderCreationBytecodeLayout = defineCreationBytecodeLayout(
  FixedRateProviderArtifact.bytecode,
);
const fixedRateProviderDeployedBytecodeLayout = defineDeployedBytecodeLayout(
  FixedRateProviderArtifact.deployedBytecode,
);

const chronicleRateProviderStorageLayout = defineStorageLayout(
  ChronicleRateProviderArtifact.storageLayout,
);
const chronicleRateProviderCreationBytecodeLayout = defineCreationBytecodeLayout(
  ChronicleRateProviderArtifact.bytecode,
);
const chronicleRateProviderDeployedBytecodeLayout = defineDeployedBytecodeLayout(
  ChronicleRateProviderArtifact.deployedBytecode,
);

await validateEVM({
  deployment: {
    chain,
    address: contracts.USDS_USDC_FIXED_RATE_PROVIDER,
    blockNumber: verificationBlock,
  },
  meta: {
    contractName: "FixedRateProvider (USDS/USDC 1:1)",
  },
  creation: {
    initCode: {
      layout: fixedRateProviderCreationBytecodeLayout,
      source: {
        type: "transaction",
        hash: "0xfc222a7bc6442a387de4b1cc9abba93c796783ca8b720ef521e559688e37a271",
      },
      assertions: () => ({
        constructorArgs: encodeAbiParameters([{ type: "uint256" }], [FIXED_RATE]),
      }),
    },
    runtimeCode: {
      layout: fixedRateProviderDeployedBytecodeLayout,
      assertions: () => ({
        immutables: [
          {
            astId: "54643",
            varName: "rate",
            value: FIXED_RATE,
          },
        ],
      }),
    },
  },
  storage: {
    layout: fixedRateProviderStorageLayout,
    assertions: () => {
      // FixedRateProvider only stores `rate` as an immutable embedded in bytecode.
    },
  },
});

await validateEVM({
  deployment: {
    chain,
    address: contracts.BUIDL_CHRONICLE_RATE_PROVIDER,
    blockNumber: verificationBlock,
  },
  meta: {
    contractName: "BUIDL ChronicleRateProvider",
  },
  creation: {
    initCode: {
      layout: chronicleRateProviderCreationBytecodeLayout,
      source: {
        type: "transaction",
        hash: "0xf92bfcada2976746a9b7fce8bd98636895db6a6046da44bc710abe42c6efd248",
      },
      assertions: () => ({
        constructorArgs: encodeAbiParameters(
          [{ type: "address" }],
          [thirdParty.BUIDL_CHRONICLE_ORACLE],
        ),
      }),
    },
    runtimeCode: {
      layout: chronicleRateProviderDeployedBytecodeLayout,
      assertions: () => ({
        immutables: [
          {
            astId: "54542",
            varName: "oracle",
            value: thirdParty.BUIDL_CHRONICLE_ORACLE,
          },
        ],
      }),
    },
  },
  storage: {
    layout: chronicleRateProviderStorageLayout,
    assertions: () => {
      // ChronicleRateProvider only stores `oracle` as an immutable embedded in bytecode.
    },
  },
});

await validateEVM({
  deployment: {
    chain,
    address: contracts.JTRSY_CHRONICLE_RATE_PROVIDER,
    blockNumber: verificationBlock,
  },
  meta: {
    contractName: "JTRSY ChronicleRateProvider",
  },
  creation: {
    initCode: {
      layout: chronicleRateProviderCreationBytecodeLayout,
      source: {
        type: "transaction",
        hash: "0xabaaf7e7f32c02e68029f16cb10cbf6cdc45371220072e4acaaf9bfcf1713a73",
      },
      assertions: () => ({
        constructorArgs: encodeAbiParameters(
          [{ type: "address" }],
          [thirdParty.JTRSY_CHRONICLE_ORACLE],
        ),
      }),
    },
    runtimeCode: {
      layout: chronicleRateProviderDeployedBytecodeLayout,
      assertions: () => ({
        immutables: [
          {
            astId: "54542",
            varName: "oracle",
            value: thirdParty.JTRSY_CHRONICLE_ORACLE,
          },
        ],
      }),
    },
  },
  storage: {
    layout: chronicleRateProviderStorageLayout,
    assertions: () => {
      // ChronicleRateProvider only stores `oracle` as an immutable embedded in bytecode.
    },
  },
});
