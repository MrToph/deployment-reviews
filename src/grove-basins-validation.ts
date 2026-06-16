import { keccak256, stringToHex } from "viem";
import type { Address, Hex } from "viem";
import {
  defineDeployedBytecodeLayout,
  defineStorageLayout,
  validateEVM,
} from "@cmichel/assay";
import type { StorageAssertion } from "@cmichel/assay";
import GroveBasinArtifact from "../artifacts/grove-basin/GroveBasin.js";
import { chain, contracts, thirdParty, verificationBlock } from "./constants.js";

const OWNER_ROLE = stringToHex("", { size: 32 });
const MANAGER_ADMIN_ROLE = keccak256(stringToHex("MANAGER_ADMIN_ROLE"));
const MANAGER_ROLE = keccak256(stringToHex("MANAGER_ROLE"));
const PAUSER_ROLE = keccak256(stringToHex("PAUSER_ROLE"));
const REDEEMER_ROLE = keccak256(stringToHex("REDEEMER_ROLE"));
const REDEEMER_CONTRACT_ROLE = keccak256(stringToHex("REDEEMER_CONTRACT_ROLE"));

const PAUSED_SWAP_COLLATERAL_TO_CREDIT = pauseKey("PAUSED_SWAP_COLLATERAL_TO_CREDIT");
const PAUSED_SWAP_SWAP_TO_CREDIT = pauseKey("PAUSED_SWAP_SWAP_TO_CREDIT");
const PAUSED_DEPOSIT_CREDIT = pauseKey("PAUSED_DEPOSIT_CREDIT");
const PAUSED_WITHDRAW_CREDIT = pauseKey("PAUSED_WITHDRAW_CREDIT");

// USDS
const SWAP_TOKEN_PRECISION = 10n ** 18n;
// USDC
const COLLATERAL_TOKEN_PRECISION = 10n ** 6n;
// both BUIDL and JTRSY have 6 decimals
const CREDIT_TOKEN_PRECISION = 10n ** 6n;
const INITIAL_TOTAL_SHARES = 10n ** 18n;
const MAX_SWAP_SIZE = 50_000_000n * 10n ** 18n;
const MAX_SWAP_SIZE_UPPER_BOUND = 1_000_000_000n * 10n ** 18n;
const MIN_STALENESS_THRESHOLD = 5n * 60n;
const STALENESS_THRESHOLD = 7n * 24n * 60n * 60n;
const MAX_STALENESS_THRESHOLD = 14n * 24n * 60n * 60n;
const MAX_FEE_BPS = 500n;

const storageLayout = defineStorageLayout(GroveBasinArtifact.storageLayout);
const deployedBytecodeLayout = defineDeployedBytecodeLayout(GroveBasinArtifact.deployedBytecode);

type GroveBasinStorageAssertion = StorageAssertion<typeof storageLayout>;

type GroveBasinValidation = {
  readonly contractName: string;
  readonly address: Address;
  readonly creditToken: Address;
  readonly creditTokenRateProvider: Address;
  readonly owner: Address;
  readonly pocket: Address;
  readonly issuerRedeemer: Address;
  readonly tokenRedeemer: Address;
};

function pauseKey(label: string): Hex {
  return keccak256(stringToHex(label)).slice(0, 10) as Hex;
}

function assertHasRole(s: GroveBasinStorageAssertion, role: Hex, account: Address): void {
  s.add(`_roles.${role}.hasRole.${account}`, true);
}

function assertRoleAdmin(s: GroveBasinStorageAssertion, role: Hex, adminRole: Hex): void {
  s.add(`_roles.${role}.adminRole`, adminRole);
}

async function validateGroveBasin(config: GroveBasinValidation): Promise<void> {
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
      // This Basin was confirmed to be deployed by the already-validated GroveBasinFactory.
      // For factory deployments, runtime bytecode plus storage validation is sufficient here.
      runtimeCode: {
        layout: deployedBytecodeLayout,
        assertions: () => ({
          immutables: [
            {
              astId: "48905",
              varName: "_swapTokenPrecision",
              value: SWAP_TOKEN_PRECISION,
            },
            {
              astId: "48907",
              varName: "_collateralTokenPrecision",
              value: COLLATERAL_TOKEN_PRECISION,
            },
            {
              astId: "48909",
              varName: "_creditTokenPrecision",
              value: CREDIT_TOKEN_PRECISION,
            },
            {
              astId: "48912",
              varName: "liquidityProvider",
              value: thirdParty.DPAU_ALM_PROXY,
            },
            {
              astId: "48915",
              varName: "swapToken",
              value: thirdParty.USDS,
            },
            {
              astId: "48918",
              varName: "collateralToken",
              value: thirdParty.USDC,
            },
            {
              astId: "48921",
              varName: "creditToken",
              value: config.creditToken,
            },
          ],
        }),
      },
    },
    storage: {
      layout: storageLayout,
      assertions: (s) => {
        s.add("swapTokenRateProvider", contracts.USDS_USDC_FIXED_RATE_PROVIDER);
        s.add("collateralTokenRateProvider", contracts.USDS_USDC_FIXED_RATE_PROVIDER);
        s.add("creditTokenRateProvider", config.creditTokenRateProvider);
        s.add("pocket", config.pocket);
        s.add("totalShares", INITIAL_TOTAL_SHARES);
        s.add("shares.0x0000000000000000000000000000000000000000", INITIAL_TOTAL_SHARES);

        s.add("maxSwapSize", MAX_SWAP_SIZE);
        s.add("maxSwapSizeUpperBound", MAX_SWAP_SIZE_UPPER_BOUND);
        s.add("stalenessThreshold", STALENESS_THRESHOLD);
        s.add("minStalenessThreshold", MIN_STALENESS_THRESHOLD);
        s.add("maxStalenessThreshold", MAX_STALENESS_THRESHOLD);
        s.add("maxFee", MAX_FEE_BPS);

        s.add(`paused.${PAUSED_SWAP_COLLATERAL_TO_CREDIT}`, true);
        s.add(`paused.${PAUSED_SWAP_SWAP_TO_CREDIT}`, true);
        s.add(`paused.${PAUSED_DEPOSIT_CREDIT}`, true);
        s.add(`paused.${PAUSED_WITHDRAW_CREDIT}`, true);

        assertHasRole(s, OWNER_ROLE, config.owner);
        assertHasRole(s, MANAGER_ADMIN_ROLE, thirdParty.GROVE_PROXY);
        assertHasRole(s, MANAGER_ROLE, thirdParty.ALM_RELAYER);
        assertHasRole(s, PAUSER_ROLE, thirdParty.ALM_FREEZER);
        assertHasRole(s, REDEEMER_ROLE, config.issuerRedeemer);
        assertHasRole(s, REDEEMER_CONTRACT_ROLE, config.tokenRedeemer);

        assertRoleAdmin(s, MANAGER_ROLE, MANAGER_ADMIN_ROLE);
        assertRoleAdmin(s, PAUSER_ROLE, MANAGER_ADMIN_ROLE);
        assertRoleAdmin(s, REDEEMER_ROLE, MANAGER_ADMIN_ROLE);
        assertRoleAdmin(s, REDEEMER_CONTRACT_ROLE, MANAGER_ADMIN_ROLE);
      },
    },
  });
}

// Confirmed factory deployment tx: 0x17e4e472d6a5874fd057f7e34c2e3cb8d29fa5544b373ef371e46ff6ce6332da.
await validateGroveBasin({
  contractName: "JTRSY GroveBasin",
  address: contracts.JTRSY_GROVE_BASIN,
  creditToken: thirdParty.JTRSY_TOKEN,
  creditTokenRateProvider: contracts.JTRSY_CHRONICLE_RATE_PROVIDER,
  owner: contracts.JTRSY_ADMIN_TIMELOCK,
  pocket: contracts.JTRSY_USDS_USDC_POCKET,
  issuerRedeemer: thirdParty.JTRSY_REDEEMER,
  tokenRedeemer: contracts.JTRSY_TOKEN_REDEEMER,
});

// Confirmed factory deployment tx: 0x990afcd93b55b0fe5463bb91d0dc66dcfad685f3c47b393cedfbceae20e82340.
await validateGroveBasin({
  contractName: "BUIDL GroveBasin",
  address: contracts.BUIDL_GROVE_BASIN,
  creditToken: thirdParty.BUIDL_TOKEN,
  creditTokenRateProvider: contracts.BUIDL_CHRONICLE_RATE_PROVIDER,
  owner: contracts.BUIDL_ADMIN_TIMELOCK,
  pocket: contracts.BUIDL_USDS_USDC_POCKET,
  issuerRedeemer: thirdParty.SECURITIZE_REDEEMER,
  tokenRedeemer: contracts.BUIDL_TOKEN_REDEEMER,
});
