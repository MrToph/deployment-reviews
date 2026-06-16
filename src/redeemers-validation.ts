import { encodeAbiParameters } from "viem";
import {
  defineCreationBytecodeLayout,
  defineDeployedBytecodeLayout,
  defineStorageLayout,
  validateEVM,
} from "@cmichel/assay";
import BUIDLTokenRedeemerArtifact from "../artifacts/redeemers/BUIDLTokenRedeemer.js";
import JTRSYTokenRedeemerArtifact from "../artifacts/redeemers/JTRSYTokenRedeemer.js";
import { chain, contracts, thirdParty, verificationBlock } from "./constants.js";

const jtrsyTokenRedeemerStorageLayout = defineStorageLayout(JTRSYTokenRedeemerArtifact.storageLayout);
const jtrsyTokenRedeemerCreationBytecodeLayout = defineCreationBytecodeLayout(
  JTRSYTokenRedeemerArtifact.bytecode,
);
const jtrsyTokenRedeemerDeployedBytecodeLayout = defineDeployedBytecodeLayout(
  JTRSYTokenRedeemerArtifact.deployedBytecode,
);

const buidlTokenRedeemerStorageLayout = defineStorageLayout(BUIDLTokenRedeemerArtifact.storageLayout);
const buidlTokenRedeemerCreationBytecodeLayout = defineCreationBytecodeLayout(
  BUIDLTokenRedeemerArtifact.bytecode,
);
const buidlTokenRedeemerDeployedBytecodeLayout = defineDeployedBytecodeLayout(
  BUIDLTokenRedeemerArtifact.deployedBytecode,
);

await validateEVM({
  deployment: {
    chain,
    address: contracts.JTRSY_TOKEN_REDEEMER,
    blockNumber: verificationBlock,
  },
  meta: {
    contractName: "JTRSY JTRSYTokenRedeemer",
  },
  creation: {
    initCode: {
      layout: jtrsyTokenRedeemerCreationBytecodeLayout,
      source: {
        type: "transaction",
        hash: "0x17bf9bd8e28c8ca2ffeb39baaada6615c75c749a1bfaf2596172df531e6289af",
      },
      assertions: () => ({
        constructorArgs: encodeAbiParameters(
          [{ type: "address" }, { type: "address" }, { type: "address" }],
          [thirdParty.JTRSY_TOKEN, thirdParty.CENTRIFUGE_JTRSY, contracts.JTRSY_GROVE_BASIN],
        ),
      }),
    },
    runtimeCode: {
      layout: jtrsyTokenRedeemerDeployedBytecodeLayout,
      assertions: () => ({
        immutables: [
          {
            astId: "55068",
            varName: "creditToken",
            value: thirdParty.JTRSY_TOKEN,
          },
          {
            astId: "55072",
            varName: "vault",
            value: thirdParty.CENTRIFUGE_JTRSY,
          },
          {
            astId: "55077",
            varName: "basin",
            value: contracts.JTRSY_GROVE_BASIN,
          },
        ],
      }),
    },
  },
  storage: {
    layout: jtrsyTokenRedeemerStorageLayout,
    assertions: (s) => {
      s.add("redemptionActive", false);
    },
  },
});

await validateEVM({
  deployment: {
    chain,
    address: contracts.BUIDL_TOKEN_REDEEMER,
    blockNumber: verificationBlock,
  },
  meta: {
    contractName: "BUIDL BUIDLTokenRedeemer",
  },
  creation: {
    initCode: {
      layout: buidlTokenRedeemerCreationBytecodeLayout,
      source: {
        type: "transaction",
        hash: "0x888266d7097dbd63221f7087e33dad9abf6b11c31bd8ce5799b5993b12bc5a99",
      },
      assertions: () => ({
        constructorArgs: encodeAbiParameters(
          [{ type: "address" }, { type: "address" }, { type: "address" }],
          [thirdParty.BUIDL_TOKEN, thirdParty.SECURITIZE_REDEMPTION_ADDRESS, contracts.BUIDL_GROVE_BASIN],
        ),
      }),
    },
    runtimeCode: {
      layout: buidlTokenRedeemerDeployedBytecodeLayout,
      assertions: () => ({
        immutables: [
          {
            astId: "54742",
            varName: "creditToken",
            value: thirdParty.BUIDL_TOKEN,
          },
          {
            astId: "54744",
            varName: "collateralToken",
            value: thirdParty.USDC,
          },
          {
            astId: "54746",
            varName: "redemptionAddress",
            value: thirdParty.SECURITIZE_REDEMPTION_ADDRESS,
          },
          {
            astId: "54751",
            varName: "basin",
            value: contracts.BUIDL_GROVE_BASIN,
          },
        ],
      }),
    },
  },
  storage: {
    layout: buidlTokenRedeemerStorageLayout,
    assertions: (s) => {
      s.add("redemptionActive", false);
    },
  },
});
