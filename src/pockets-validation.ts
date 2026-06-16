import { encodeAbiParameters } from "viem";
import type { Address, Hex } from "viem";
import {
  defineCreationBytecodeLayout,
  defineDeployedBytecodeLayout,
  defineStorageLayout,
  validateEVM,
} from "@cmichel/assay";
import UsdsUsdcPocketArtifact from "../artifacts/pockets/UsdsUsdcPocket.js";
import { chain, contracts, thirdParty, verificationBlock } from "./constants.js";

const storageLayout = defineStorageLayout(UsdsUsdcPocketArtifact.storageLayout);
const creationBytecodeLayout = defineCreationBytecodeLayout(UsdsUsdcPocketArtifact.bytecode);
const deployedBytecodeLayout = defineDeployedBytecodeLayout(UsdsUsdcPocketArtifact.deployedBytecode);

type UsdsUsdcPocketValidation = {
  readonly contractName: string;
  readonly address: Address;
  readonly deploymentTxHash: Hex;
  readonly basin: Address;
};

function encodeUsdsUsdcPocketConstructorArgs(basin: Address): Hex {
  return encodeAbiParameters(
    [
      { type: "address" },
      { type: "address" },
      { type: "address" },
      { type: "address" },
      { type: "address" },
    ],
    [basin, thirdParty.USDC, thirdParty.USDS, thirdParty.USDS_PSM_WRAPPER, thirdParty.GROVE_PROXY],
  );
}

async function validateUsdsUsdcPocket(config: UsdsUsdcPocketValidation): Promise<void> {
  await validateEVM({
    deployment: {
      chain,
      address: config.address,
      blockNumber: verificationBlock,
    },
    meta: {
      contractName: config.contractName,
    },
    creation: {
      initCode: {
        layout: creationBytecodeLayout,
        source: {
          type: "transaction",
          hash: config.deploymentTxHash,
        },
        assertions: () => ({
          constructorArgs: encodeUsdsUsdcPocketConstructorArgs(config.basin),
        }),
      },
      runtimeCode: {
        layout: deployedBytecodeLayout,
        assertions: () => ({
          immutables: [
            {
              astId: "53728",
              varName: "_basin",
              value: config.basin,
            },
            {
              astId: "54120",
              varName: "usdc",
              value: thirdParty.USDC,
            },
            {
              astId: "54123",
              varName: "usds",
              value: thirdParty.USDS,
            },
            {
              astId: "54125",
              varName: "psm",
              value: thirdParty.USDS_PSM_WRAPPER,
            },
            {
              astId: "54127",
              varName: "groveProxy",
              value: thirdParty.GROVE_PROXY,
            },
          ],
        }),
      },
    },
    storage: {
      layout: storageLayout,
      assertions: () => {
        // UsdsUsdcPocket stores all configuration as immutables.
        // Constructor-time token approvals are covered by initcode validation
      },
    },
  });
}

await validateUsdsUsdcPocket({
  contractName: "JTRSY UsdsUsdcPocket",
  address: contracts.JTRSY_USDS_USDC_POCKET,
  deploymentTxHash: "0xa7d03ed1f6ec5f718858a1c5c53cbf693604b7050cba4692de150a87b86a42a0",
  basin: contracts.JTRSY_GROVE_BASIN,
});
await validateUsdsUsdcPocket({
  contractName: "BUIDL UsdsUsdcPocket",
  address: contracts.BUIDL_USDS_USDC_POCKET,
  deploymentTxHash: "0x77f6e80c7819d585ffb2e1f4bd8172edf19c89b12ca0b3ac0f02ec69f8d6c05f",
  basin: contracts.BUIDL_GROVE_BASIN,
});
