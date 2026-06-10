import { padHex } from "viem";
import {
  defineDeployedBytecodeLayout,
  defineStorageLayout,
  validateEVM,
} from "@cmichel/assay";
import AdministeredAgentArtifact from "../artifacts/administered-agent/AdministeredAgent.js";
import { constants, contracts } from "./constants.js";

const BLOCK_NUMBER = 25280924;

const GROVE_PROXY_BYTES32 = padHex(constants.GROVE_PROXY, { size: 32 });
const ALM_RELAYER_BYTES32 = padHex(constants.ALM_RELAYER, { size: 32 });
const GROVE_PRIMARY_RELAYER_OPERATOR_BYTES32 = padHex(constants.GROVE_PRIMARY_RELAYER_OPERATOR, { size: 32 });
const GROVE_SECONDARY_RELAYER_OPERATOR_BYTES32 = padHex(constants.GROVE_SECONDARY_RELAYER_OPERATOR, { size: 32 });
const ALM_FREEZER_BYTES32 = padHex(constants.ALM_FREEZER, { size: 32 });

const meta = {
  storageLayout: defineStorageLayout(AdministeredAgentArtifact.storageLayout),
  deployedBytecodeLayout: defineDeployedBytecodeLayout({
    ...AdministeredAgentArtifact.deployedBytecode,
    immutableReferences: {},
  }),
};

await validateEVM({
  deployment: {
    chain: "ethereum",
    address: contracts.ADMINISTERED_AGENT,
    blockNumber: BLOCK_NUMBER,
  },
  meta,
  bytecode: () => ({}),
  storage: (s) => {
    // Final admin is Grove Proxy; deployer was removed.
    s.add("_admins._inner._values.length", 1n);
    s.add("_admins._inner._values.0", GROVE_PROXY_BYTES32);
    s.add(`_admins._inner._positions.${GROVE_PROXY_BYTES32}`, 1n);

    // Actors are the relayer plus primary and secondary relayer operators.
    s.add("_actors._inner._values.length", 3n);
    s.add("_actors._inner._values.0", ALM_RELAYER_BYTES32);
    s.add("_actors._inner._values.1", GROVE_PRIMARY_RELAYER_OPERATOR_BYTES32);
    s.add("_actors._inner._values.2", GROVE_SECONDARY_RELAYER_OPERATOR_BYTES32);
    s.add(`_actors._inner._positions.${ALM_RELAYER_BYTES32}`, 1n);
    s.add(`_actors._inner._positions.${GROVE_PRIMARY_RELAYER_OPERATOR_BYTES32}`, 2n);
    s.add(`_actors._inner._positions.${GROVE_SECONDARY_RELAYER_OPERATOR_BYTES32}`, 3n);

    // Freezer can revoke actors.
    s.add("_revokers._inner._values.length", 1n);
    s.add("_revokers._inner._values.0", ALM_FREEZER_BYTES32);
    s.add(`_revokers._inner._positions.${ALM_FREEZER_BYTES32}`, 1n);

    // No grantors configured; admin can still add actors.
    s.add("_grantors._inner._values.length", 0n);
  },
});
