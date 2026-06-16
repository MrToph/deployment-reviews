import { encodeAbiParameters, keccak256, stringToHex } from "viem";
import type { Address, Hex } from "viem";
import {
  defineCreationBytecodeLayout,
  defineDeployedBytecodeLayout,
  defineStorageLayout,
  validateEVM,
} from "@cmichel/assay";
import type { StorageAssertion } from "@cmichel/assay";
import TimelockControllerArtifact from "../artifacts/timelock-controller/TimelockController.js";
import { chain, contracts, thirdParty, verificationBlock } from "./constants.js";

const DEFAULT_ADMIN_ROLE = stringToHex("", { size: 32 });
const PROPOSER_ROLE = keccak256(stringToHex("PROPOSER_ROLE"));
const EXECUTOR_ROLE = keccak256(stringToHex("EXECUTOR_ROLE"));
const CANCELLER_ROLE = keccak256(stringToHex("CANCELLER_ROLE"));

const MIN_DELAY = 7n * 24n * 60n * 60n;

const storageLayout = defineStorageLayout(TimelockControllerArtifact.storageLayout);
const creationBytecodeLayout = defineCreationBytecodeLayout(TimelockControllerArtifact.bytecode);
const deployedBytecodeLayout = defineDeployedBytecodeLayout({
  ...TimelockControllerArtifact.deployedBytecode,
  immutableReferences: {},
});

type TimelockStorageAssertion = StorageAssertion<typeof storageLayout>;

type TimelockValidation = {
  readonly contractName: string;
  readonly address: Address;
  readonly deploymentTxHash: Hex;
  readonly constructorProposer: Address;
  readonly issuerMultisig: Address;
  readonly pendingOperationId: Hex;
  readonly pendingOperationReadyAt: bigint;
};

type TimelockConstructorArgs = {
  readonly proposer: Address;
  readonly executor: Address;
  readonly admin: Address;
};

function assertHasRole(s: TimelockStorageAssertion, role: Hex, account: Address): void {
  s.add(`_roles.${role}.hasRole.${account}`, true);
}

function encodeTimelockConstructorArgs({ proposer, executor, admin }: TimelockConstructorArgs): Hex {
  return encodeAbiParameters(
    [{ type: "uint256" }, { type: "address[]" }, { type: "address[]" }, { type: "address" }],
    [MIN_DELAY, [proposer], [executor], admin],
  );
}

async function validateTimelock(config: TimelockValidation): Promise<void> {
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
          constructorArgs: encodeTimelockConstructorArgs({
            proposer: config.constructorProposer,
            executor: thirdParty.GROVE_PROXY,
            // storage validation below ensures the final roles are correct
            admin: thirdParty.DEPLOYER,
          }),
        }),
      },
      runtimeCode: {
        layout: deployedBytecodeLayout,
      },
    },
    storage: {
      layout: storageLayout,
      assertions: (s) => {
        s.add("_minDelay", MIN_DELAY);

        // Pending TimelockController.schedule(...) operation left in _timestamps.
        // The concrete no-op schedule call, operation id, and ready timestamp are passed below.
        s.add(`_timestamps.${config.pendingOperationId}`, config.pendingOperationReadyAt);

        // Timelock is self-administered after deployer cleanup.
        assertHasRole(s, DEFAULT_ADMIN_ROLE, config.address);

        // Issuer multisig proposes and can cancel its own queued operations.
        assertHasRole(s, PROPOSER_ROLE, config.issuerMultisig);
        assertHasRole(s, CANCELLER_ROLE, config.issuerMultisig);
        // Grove ALM Freezer can cancel queued operations.
        assertHasRole(s, CANCELLER_ROLE, thirdParty.ALM_FREEZER);

        // Grove Proxy executes queued operations.
        assertHasRole(s, EXECUTOR_ROLE, thirdParty.GROVE_PROXY);
      },
    },
  });
}

await validateTimelock({
  contractName: "JTRSY Admin TimelockController",
  address: contracts.JTRSY_ADMIN_TIMELOCK,
  deploymentTxHash: "0xec51cda57fcb7698dbc3fb9a7da1bd8eb0fca506332700546a311ffd3b265b9d",
  constructorProposer: thirdParty.JTRSY_ISSUER_MULTISIG,
  issuerMultisig: thirdParty.JTRSY_ISSUER_MULTISIG,
  // Tx 0xcb534ea4d3379ad43147e07d4beb7f61ecc9bf49854534b571f7df310aa3b09b
  // TimelockController.schedule(
  //   target = 0x9184DdBCc4824B76CE2AEFA72534a1a87aA5037c, // JTRSY issuer multisig
  //   value = 0,
  //   data = "",
  //   predecessor = 0x00,
  //   salt = 0x00,
  //   delay = 604800
  // )
  // readyAt = block.timestamp 1_778_872_667 + minDelay 604_800 = 1_779_477_467.
  pendingOperationId: "0x918594c78acdd8baaceca8187f0000d489cfcd20f2b46f2558ec1a2d04e3e21a",
  pendingOperationReadyAt: 1_779_477_467n,
});
await validateTimelock({
  contractName: "BUIDL Admin TimelockController",
  address: contracts.BUIDL_ADMIN_TIMELOCK,
  deploymentTxHash: "0x63a9952301836480eea0f6fe830243eaa2a71ca23457f4c8a2792e015df526d8",
  // The creation tx constructor proposer was the deployer; final live proposer/canceller roles are
  // validated below from storage after follow-up role configuration.
  constructorProposer: thirdParty.DEPLOYER,
  issuerMultisig: thirdParty.SECURITIZE_ISSUER_MULTISIG,
  // Tx 0xb4b00a311f9a5edcdec2cdfc8ea69fda6e0974c95ca11cc286cb640f356c4dea
  // TimelockController.schedule(
  //   target = 0x453A28B31fdc31858C35B02bc3A42BCD8bfbAd3a, // Securitize/BUIDL issuer multisig
  //   value = 0,
  //   data = "",
  //   predecessor = 0x00,
  //   salt = 0x00,
  //   delay = 604800
  // )
  // readyAt = block.timestamp 1_779_393_479 + minDelay 604_800 = 1_779_998_279.
  pendingOperationId: "0x13bdfcbacee698fdfbc8de83e0ce86a238900e77348b0fa964df0efce295892e",
  pendingOperationReadyAt: 1_779_998_279n,
});
