import { keccak256, padHex, stringToHex } from "viem";
import {
  defineDeployedBytecodeLayout,
  defineStorageLayout,
  validateEVM,
} from "@cmichel/assay";
import AccessControlsArtifact from "../artifacts/access-controls/AccessControls.js";
import { constants, contracts } from "./constants.js";

const BLOCK_NUMBER = 25280924;

const DEFAULT_ADMIN_ROLE = stringToHex("", { size: 32 });
const ALLOCATOR_ROLE = keccak256(stringToHex("ALLOCATOR_ROLE"));

const GROVE_PROXY_BYTES32 = padHex(constants.GROVE_PROXY, { size: 32 });
const ADMINISTERED_AGENT_BYTES32 = padHex(contracts.ADMINISTERED_AGENT, { size: 32 });

const meta = {
  storageLayout: defineStorageLayout(AccessControlsArtifact.storageLayout),
  deployedBytecodeLayout: defineDeployedBytecodeLayout({
    ...AccessControlsArtifact.deployedBytecode,
    immutableReferences: {},
  }),
};

await validateEVM({
  deployment: {
    chain: "ethereum",
    address: contracts.ACCESS_CONTROLS,
    blockNumber: BLOCK_NUMBER,
  },
  meta,
  bytecode: () => ({}),
  storage: (s) => {
    // Grove Proxy is the only DEFAULT_ADMIN_ROLE member.
    s.add(`_roles.${DEFAULT_ADMIN_ROLE}.adminRole`, DEFAULT_ADMIN_ROLE);
    s.add(`_roles.${DEFAULT_ADMIN_ROLE}.hasRole.${constants.GROVE_PROXY}`, true);
    s.add(`_roleMembers.${DEFAULT_ADMIN_ROLE}._inner._values.length`, 1n);
    s.add(`_roleMembers.${DEFAULT_ADMIN_ROLE}._inner._values.0`, GROVE_PROXY_BYTES32);
    s.add(`_roleMembers.${DEFAULT_ADMIN_ROLE}._inner._positions.${GROVE_PROXY_BYTES32}`, 1n);

    // AdministeredAgent is the only allocator.
    s.add(`_roles.${ALLOCATOR_ROLE}.adminRole`, DEFAULT_ADMIN_ROLE);
    s.add(`_roles.${ALLOCATOR_ROLE}.hasRole.${contracts.ADMINISTERED_AGENT}`, true);
    s.add(`_roleMembers.${ALLOCATOR_ROLE}._inner._values.length`, 1n);
    s.add(`_roleMembers.${ALLOCATOR_ROLE}._inner._values.0`, ADMINISTERED_AGENT_BYTES32);
    s.add(`_roleMembers.${ALLOCATOR_ROLE}._inner._positions.${ADMINISTERED_AGENT_BYTES32}`, 1n);
  },
});
