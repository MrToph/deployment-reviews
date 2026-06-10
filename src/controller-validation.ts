import { getAbiItem, stringToHex, toFunctionSelector } from "viem";
import type { AbiFunction, Address, Hex } from "viem";
import {
  defineDeployedBytecodeLayout,
  defineStorageLayout,
  validateEVM,
} from "@cmichel/assay";
import type { StorageAssertion } from "@cmichel/assay";
import ControllerArtifact from "../artifacts/controller/Controller.js";
import { controllerFacetsStorageLayout } from "../artifacts/controller-facets-storage.js";
import BasinFacetArtifact from "../artifacts/facets/BasinFacet.js";
import ERC4626FacetArtifact from "../artifacts/facets/ERC4626Facet.js";
import MapleFacetArtifact from "../artifacts/facets/MapleFacet.js";
import UniswapV3FacetArtifact from "../artifacts/facets/UniswapV3Facet.js";
import IBasinFacetExternalArtifact from "../artifacts/external-facet-interfaces/IBasinFacetExternal.js";
import IERC4626FacetExternalArtifact from "../artifacts/external-facet-interfaces/IERC4626FacetExternal.js";
import IMapleFacetExternalArtifact from "../artifacts/external-facet-interfaces/IMapleFacetExternal.js";
import IUniswapV3FacetExternalArtifact from "../artifacts/external-facet-interfaces/IUniswapV3FacetExternal.js";
import { constants, contracts, facets } from "./constants.js";

const BLOCK_NUMBER = 25280924;

const META = {
  contractName: "Controller",
  storageLayout: defineStorageLayout(controllerFacetsStorageLayout),
  deployedBytecodeLayout: defineDeployedBytecodeLayout(ControllerArtifact.deployedBytecode),
};

type ControllerStorageAssertion = StorageAssertion<typeof META.storageLayout>;

type Abi = readonly unknown[];

type Wire = {
  callSelector: Hex;
  delegateSelector: Hex;
};

type Integration = {
  name: string;
  facet: Address;
  wires: readonly Wire[];
};

function selector(abi: Abi, name: string): Hex {
  const item = getAbiItem({ abi, name });

  if (item === undefined || item.type !== "function") {
    throw new Error(`Missing ABI function: ${name}`);
  }

  return toFunctionSelector(item as AbiFunction);
}

function wire(callAbi: Abi, callName: string, delegateAbi: Abi, delegateName: string): Wire {
  return {
    callSelector: selector(callAbi, callName),
    delegateSelector: selector(delegateAbi, delegateName),
  };
}

function integration(
  name: string,
  facet: Address,
  externalAbi: Abi,
  externalSelectorPrefix: string,
  facetAbi: Abi,
  functionNamesOrdered: readonly string[],
): Integration {
  return {
    name,
    facet,
    wires: functionNamesOrdered.map((functionName) =>
      wire(externalAbi, `${externalSelectorPrefix}_${functionName}`, facetAbi, functionName),
    ),
  };
}

const INTEGRATIONS = [
  integration(
    "BASIN_FACET",
    facets.BasinFacet,
    IBasinFacetExternalArtifact.abi,
    "basin",
    BasinFacetArtifact.abi,
    ["VERSION", "deposit", "withdraw", "getDepositRateLimitKey", "getWithdrawRateLimitKey"],
  ),
  integration(
    "ERC4626_FACET",
    facets.ERC4626Facet,
    IERC4626FacetExternalArtifact.abi,
    "erc4626",
    ERC4626FacetArtifact.abi,
    [
      "VERSION",
      "setMaxExchangeRate",
      "deposit",
      "withdraw",
      "redeem",
      "EXCHANGE_RATE_PRECISION",
      "getMaxExchangeRate",
      "getDepositRateLimitKey",
      "getWithdrawRateLimitKey",
    ],
  ),
  integration(
    "MAPLE_FACET",
    facets.MapleFacet,
    IMapleFacetExternalArtifact.abi,
    "maple",
    MapleFacetArtifact.abi,
    [
      "VERSION",
      "requestRedemption",
      "cancelRedemption",
      "getCancelRedeemRateLimitKey",
      "getRequestRedeemRateLimitKey",
    ],
  ),
  integration(
    "UNISWAP_V3_FACET",
    facets.UniswapV3Facet,
    IUniswapV3FacetExternalArtifact.abi,
    "uniswapV3",
    UniswapV3FacetArtifact.abi,
    [
      "VERSION",
      "MAX_TICK_DELTA",
      "MIN_TICK",
      "MAX_TICK",
      "positionManager",
      "router",
      "setMaxSlippage",
      "setMaxTickDelta",
      "setLiquidityLowerTickBound",
      "setLiquidityUpperTickBound",
      "setTWAPSecondsAgo",
      "swap",
      "addLiquidity",
      "removeLiquidity",
      "getAggregateDepositRateLimitKey",
      "getAssetDepositRateLimitKey",
      "getLiquidityTickBounds",
      "getMaxSlippage",
      "getMaxTickDelta",
      "getSwapRateLimitKey",
      "getTWAPSecondsAgo",
      "getAggregateWithdrawRateLimitKey",
      "getAssetWithdrawRateLimitKey",
    ],
  ),
] as const satisfies readonly Integration[];

function integrationId(name: string): Hex {
  return stringToHex(name, { size: 32 });
}

function assertIntegration(
  s: ControllerStorageAssertion,
  integration: Integration,
  integrationIndex: number,
): void {
  const id = integrationId(integration.name);

  s.add(`controller.integrationIds._inner._values.${BigInt(integrationIndex)}`, id);
  s.add(`controller.integrationIds._inner._positions.${id}`, BigInt(integrationIndex + 1));
  s.add(`controller.configs.${id}.facet`, integration.facet);
  s.add(`controller.configs.${id}.wires.length`, BigInt(integration.wires.length));

  integration.wires.forEach((wire, wireIndex) => {
    s.add(`controller.configs.${id}.wires.${BigInt(wireIndex)}.callSelector`, wire.callSelector);
    s.add(`controller.configs.${id}.wires.${BigInt(wireIndex)}.delegateSelector`, wire.delegateSelector);
    s.add(`controller.dispatches.${wire.callSelector}.facet`, integration.facet);
    s.add(`controller.dispatches.${wire.callSelector}.delegateSelector`, wire.delegateSelector);
  });
}

await validateEVM({
  deployment: {
    chain: "ethereum",
    address: contracts.CONTROLLER,
    blockNumber: BLOCK_NUMBER,
  },
  meta: META,
  bytecode: () => ({
    immutables: [
      {
        astId: "80654",
        varName: "beacon",
        value: constants.BEACON,
      },
    ],
  }),
  storage: (s) => {
    // Shared Controller storage.
    s.add("controllerShared.accessControls", contracts.ACCESS_CONTROLS);
    s.add("controllerShared.proxy", constants.ALM_PROXY);
    s.add("controllerShared.rateLimits", constants.ALM_RATE_LIMITS);

    // OpenZeppelin upgradeable namespaces used by the Controller constructor/nonReentrant modifier.
    s.add("initializable._initialized", 1n);
    s.add("initializable._initializing", false);
    s.add("reentrancyGuard._status", 1n);

    // Controller integration registry and selector dispatch table. (from Beacon.updateIntegrations call)
    s.add("controller.integrationIds._inner._values.length", BigInt(INTEGRATIONS.length));
    INTEGRATIONS.forEach((integration, index) => assertIntegration(s, integration, index));

    // ERC4626 facet storage written through Controller delegatecall.
    s.add(
      `erc4626Facet.maxExchangeRates.${constants.MAPLE_SYRUP_USDC}`,
      3_000_000_000_000_000_000_000_000_000_000_000_000n,
    );

    // Uniswap V3 facet storage written through Controller delegatecall.
    s.add(`uniswapV3Facet.maxSlippages.${constants.UNISWAP_V3_AUSD_USDC}`, 999_000_000_000_000_000n);
    s.add(`uniswapV3Facet.poolParams.${constants.UNISWAP_V3_AUSD_USDC}.swapMaxTickDelta`, 200n);
    s.add(`uniswapV3Facet.poolParams.${constants.UNISWAP_V3_AUSD_USDC}.liquidityTickBounds.lower`, -10n);
    s.add(`uniswapV3Facet.poolParams.${constants.UNISWAP_V3_AUSD_USDC}.liquidityTickBounds.upper`, 10n);
    s.add(`uniswapV3Facet.poolParams.${constants.UNISWAP_V3_AUSD_USDC}.twapSecondsAgo`, 600n);
  },
});
