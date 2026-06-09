import { getAbiItem, padHex, stringToHex, toFunctionSelector } from "viem";
import type { AbiFunction, Hex } from "viem";
import {
  defineDeployedBytecodeLayout,
  defineStorageLayout,
  validateEVM,
} from "@cmichel/assay";
import type { StorageAssertion } from "@cmichel/assay";
import AaveFacetArtifact from "../artifacts/facets/AaveFacet.js";
import BasinFacetArtifact from "../artifacts/facets/BasinFacet.js";
import CCTPFacetArtifact from "../artifacts/facets/CCTPFacet.js";
import CentrifugeFacetArtifact from "../artifacts/facets/CentrifugeFacet.js";
import CurveFacetArtifact from "../artifacts/facets/CurveFacet.js";
import DAIUSDSFacetArtifact from "../artifacts/facets/DAIUSDSFacet.js";
import ERC4626FacetArtifact from "../artifacts/facets/ERC4626Facet.js";
import ERC7540FacetArtifact from "../artifacts/facets/ERC7540Facet.js";
import EthenaFacetArtifact from "../artifacts/facets/EthenaFacet.js";
import FarmFacetArtifact from "../artifacts/facets/FarmFacet.js";
import LayerZeroFacetArtifact from "../artifacts/facets/LayerZeroFacet.js";
import MapleFacetArtifact from "../artifacts/facets/MapleFacet.js";
import MerklFacetArtifact from "../artifacts/facets/MerklFacet.js";
import OTCFacetArtifact from "../artifacts/facets/OTCFacet.js";
import PendleFacetArtifact from "../artifacts/facets/PendleFacet.js";
import PSMFacetArtifact from "../artifacts/facets/PSMFacet.js";
import SparkVaultFacetArtifact from "../artifacts/facets/SparkVaultFacet.js";
import SuperstateFacetArtifact from "../artifacts/facets/SuperstateFacet.js";
import TransferAssetFacetArtifact from "../artifacts/facets/TransferAssetFacet.js";
import UniswapV3FacetArtifact from "../artifacts/facets/UniswapV3Facet.js";
import UniswapV4FacetArtifact from "../artifacts/facets/UniswapV4Facet.js";
import USDSFacetArtifact from "../artifacts/facets/USDSFacet.js";
import WEETHFacetArtifact from "../artifacts/facets/WEETHFacet.js";
import WrapProxyETHFacetArtifact from "../artifacts/facets/WrapProxyETHFacet.js";
import WSTETHFacetArtifact from "../artifacts/facets/WSTETHFacet.js";
import BeaconArtifact from "../artifacts/beacon/Beacon.js";
import IAaveFacetExternalArtifact from "../artifacts/beacon/IAaveFacetExternal.js";
import IBasinFacetExternalArtifact from "../artifacts/beacon/IBasinFacetExternal.js";
import ICCTPFacetExternalArtifact from "../artifacts/beacon/ICCTPFacetExternal.js";
import ICentrifugeFacetExternalArtifact from "../artifacts/beacon/ICentrifugeFacetExternal.js";
import ICurveFacetExternalArtifact from "../artifacts/beacon/ICurveFacetExternal.js";
import IDAIUSDSFacetExternalArtifact from "../artifacts/beacon/IDAIUSDSFacetExternal.js";
import IERC4626FacetExternalArtifact from "../artifacts/beacon/IERC4626FacetExternal.js";
import IERC7540FacetExternalArtifact from "../artifacts/beacon/IERC7540FacetExternal.js";
import IEthenaFacetExternalArtifact from "../artifacts/beacon/IEthenaFacetExternal.js";
import IFarmFacetExternalArtifact from "../artifacts/beacon/IFarmFacetExternal.js";
import ILayerZeroFacetExternalArtifact from "../artifacts/beacon/ILayerZeroFacetExternal.js";
import IMapleFacetExternalArtifact from "../artifacts/beacon/IMapleFacetExternal.js";
import IMerklFacetExternalArtifact from "../artifacts/beacon/IMerklFacetExternal.js";
import IOTCFacetExternalArtifact from "../artifacts/beacon/IOTCFacetExternal.js";
import IPendleFacetExternalArtifact from "../artifacts/beacon/IPendleFacetExternal.js";
import IPSMFacetExternalArtifact from "../artifacts/beacon/IPSMFacetExternal.js";
import ISparkVaultFacetExternalArtifact from "../artifacts/beacon/ISparkVaultFacetExternal.js";
import ISuperstateFacetExternalArtifact from "../artifacts/beacon/ISuperstateFacetExternal.js";
import ITransferAssetFacetExternalArtifact from "../artifacts/beacon/ITransferAssetFacetExternal.js";
import IUniswapV3FacetExternalArtifact from "../artifacts/beacon/IUniswapV3FacetExternal.js";
import IUniswapV4FacetExternalArtifact from "../artifacts/beacon/IUniswapV4FacetExternal.js";
import IUSDSFacetExternalArtifact from "../artifacts/beacon/IUSDSFacetExternal.js";
import IWEETHFacetExternalArtifact from "../artifacts/beacon/IWEETHFacetExternal.js";
import IWrapProxyETHFacetExternalArtifact from "../artifacts/beacon/IWrapProxyETHFacetExternal.js";
import IWSTETHFacetExternalArtifact from "../artifacts/beacon/IWSTETHFacetExternal.js";
import { constants, contracts, facets } from "./constants.js";

const BLOCK_NUMBER = 25280924;

const SKY_PAUSE_PROXY_BYTES32 = padHex(constants.SKY_PAUSE_PROXY, { size: 32 });
const DEFAULT_ADMIN_ROLE = stringToHex("", { size: 32 });

type Abi = readonly unknown[];

type Wire = {
  callSelector: Hex;
  delegateSelector: Hex;
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

const meta = {
  storageLayout: defineStorageLayout(BeaconArtifact.storageLayout),
  deployedBytecodeLayout: defineDeployedBytecodeLayout({
    ...BeaconArtifact.deployedBytecode,
    immutableReferences: {},
  }),
};

await validateEVM({
  deployment: {
    chain: "ethereum",
    address: contracts.BEACON,
    blockNumber: BLOCK_NUMBER,
  },
  meta,
  bytecode: () => ({}),
  storage: (s) => {
    // ReentrancyGuard | status after all nonReentrant calls have completed.
    s.add("_status", 1n);

    // AccessControl
    s.add(`_roles.${DEFAULT_ADMIN_ROLE}.hasRole.${constants.SKY_PAUSE_PROXY}`, true);
    s.add(`_roleMembers.${DEFAULT_ADMIN_ROLE}._inner._values.length`, 1n);
    s.add(`_roleMembers.${DEFAULT_ADMIN_ROLE}._inner._values.0`, SKY_PAUSE_PROXY_BYTES32);
    s.add(`_roleMembers.${DEFAULT_ADMIN_ROLE}._inner._positions.${SKY_PAUSE_PROXY_BYTES32}`, 1n);

    // 25 facets registered
    s.add("_integrationIds._inner._values.length", 25n);

    aaveAssertions(s);
    basinAssertions(s);
    cctpAssertions(s);
    centrifugeAssertions(s);
    curveAssertions(s);
    daiUSDSAssertions(s);
    erc4626Assertions(s);
    erc7540Assertions(s);
    ethenaAssertions(s);
    farmAssertions(s);
    layerZeroAssertions(s);
    mapleAssertions(s);
    merklAssertions(s);
    otcAssertions(s);
    pendleAssertions(s);
    psmAssertions(s);
    sparkVaultAssertions(s);
    superstateAssertions(s);
    transferAssetAssertions(s);
    uniswapV3Assertions(s);
    uniswapV4Assertions(s);
    usdsAssertions(s);
    weethAssertions(s);
    wrapProxyETHAssertions(s);
    wstethAssertions(s);
  },
});

function facetAssertions(
  s: StorageAssertion<typeof meta.storageLayout>,
  integrationIndex: number,
  integrationName: string,
  facet: Hex,
  externalAbi: Abi,
  externalSelectorPrefix: string,
  facetAbi: Abi,
  functionNamesOrdered: readonly string[],
): void {
  const integrationId = stringToHex(integrationName, { size: 32 });
  const integrationIndexBigInt = BigInt(integrationIndex);
  const wiresOrdered = functionNamesOrdered.map((functionName) =>
    wire(externalAbi, `${externalSelectorPrefix}_${functionName}`, facetAbi, functionName),
  );

  s.add(`_integrationIds._inner._values.${integrationIndexBigInt}`, integrationId);
  s.add(`_integrationIds._inner._positions.${integrationId}`, BigInt(integrationIndex + 1));
  s.add(`_configs.${integrationId}.facet`, facet);
  s.add(`_configs.${integrationId}.wires.length`, BigInt(wiresOrdered.length));

  wiresOrdered.forEach((wire, index) => {
    const indexBigInt = BigInt(index);

    s.add(`_configs.${integrationId}.wires.${indexBigInt}.callSelector`, wire.callSelector);
    s.add(`_configs.${integrationId}.wires.${indexBigInt}.delegateSelector`, wire.delegateSelector);
    s.add(`_dispatches.${wire.callSelector}`, {
      facet,
      delegateSelector: wire.delegateSelector,
    });
  });
}

function aaveAssertions(s: StorageAssertion<typeof meta.storageLayout>): void {
  facetAssertions(
    s,
    0,
    "AAVE_FACET",
    facets.AaveFacet,
    IAaveFacetExternalArtifact.abi,
    "aave",
    AaveFacetArtifact.abi,
    [
      "VERSION",
      "setMaxSlippage",
      "getMaxSlippage",
      "deposit",
      "withdraw",
      "getDepositRateLimitKey",
      "getWithdrawRateLimitKey",
    ],
  );
}

function basinAssertions(s: StorageAssertion<typeof meta.storageLayout>): void {
  facetAssertions(
    s,
    1,
    "BASIN_FACET",
    facets.BasinFacet,
    IBasinFacetExternalArtifact.abi,
    "basin",
    BasinFacetArtifact.abi,
    ["VERSION", "deposit", "withdraw", "getDepositRateLimitKey", "getWithdrawRateLimitKey"],
  );
}

function cctpAssertions(s: StorageAssertion<typeof meta.storageLayout>): void {
  facetAssertions(
    s,
    2,
    "CCTP_FACET",
    facets.CCTPFacet,
    ICCTPFacetExternalArtifact.abi,
    "cctp",
    CCTPFacetArtifact.abi,
    [
      "VERSION",
      "DESTINATION_CALLER",
      "MIN_FINALITY_THRESHOLD",
      "cctp",
      "usdc",
      "setDomainParameters",
      "transfer",
      "toCCTPRateLimitKey",
      "getDomainParameters",
      "getToDomainRateLimitKey",
    ],
  );
}

function centrifugeAssertions(s: StorageAssertion<typeof meta.storageLayout>): void {
  facetAssertions(
    s,
    3,
    "CENTRIFUGE_FACET",
    facets.CentrifugeFacet,
    ICentrifugeFacetExternalArtifact.abi,
    "centrifuge",
    CentrifugeFacetArtifact.abi,
    [
      "VERSION",
      "REQUEST_ID",
      "setRecipient",
      "cancelDepositRequest",
      "claimCancelDepositRequest",
      "cancelRedeemRequest",
      "claimCancelRedeemRequest",
      "transferShares",
      "getRecipient",
      "getCancelDepositRateLimitKey",
      "getClaimCancelDepositRateLimitKey",
      "getCancelRedeemRateLimitKey",
      "getClaimCancelRedeemRateLimitKey",
      "getTransferRateLimitKey",
    ],
  );
}

function curveAssertions(s: StorageAssertion<typeof meta.storageLayout>): void {
  facetAssertions(
    s,
    4,
    "CURVE_FACET",
    facets.CurveFacet,
    ICurveFacetExternalArtifact.abi,
    "curve",
    CurveFacetArtifact.abi,
    [
      "VERSION",
      "setMaxSlippage",
      "getMaxSlippage",
      "swap",
      "addLiquidity",
      "removeLiquidity",
      "getAggregateDepositRateLimitKey",
      "getAssetDepositRateLimitKey",
      "getSwapRateLimitKey",
      "getAggregateWithdrawRateLimitKey",
      "getAssetWithdrawRateLimitKey",
    ],
  );
}

function daiUSDSAssertions(s: StorageAssertion<typeof meta.storageLayout>): void {
  facetAssertions(
    s,
    5,
    "DAIUSDS_FACET",
    facets.DAIUSDSFacet,
    IDAIUSDSFacetExternalArtifact.abi,
    "daiUSDS",
    DAIUSDSFacetArtifact.abi,
    [
      "VERSION",
      "dai",
      "daiUSDS",
      "usds",
      "swapUSDSToDAI",
      "swapDAIToUSDS",
      "daiToUSDSSwapRateLimitKey",
      "usdsToDAISwapRateLimitKey",
    ],
  );
}

function erc4626Assertions(s: StorageAssertion<typeof meta.storageLayout>): void {
  facetAssertions(
    s,
    6,
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
  );
}

function erc7540Assertions(s: StorageAssertion<typeof meta.storageLayout>): void {
  facetAssertions(
    s,
    7,
    "ERC7540_FACET",
    facets.ERC7540Facet,
    IERC7540FacetExternalArtifact.abi,
    "erc7540",
    ERC7540FacetArtifact.abi,
    [
      "VERSION",
      "requestDeposit",
      "claimDeposit",
      "requestRedeem",
      "claimRedeem",
      "getRequestDepositRateLimitKey",
      "getClaimDepositRateLimitKey",
      "getRequestRedeemRateLimitKey",
      "getClaimRedeemRateLimitKey",
    ],
  );
}

function ethenaAssertions(s: StorageAssertion<typeof meta.storageLayout>): void {
  facetAssertions(
    s,
    8,
    "ETHENA_FACET",
    facets.EthenaFacet,
    IEthenaFacetExternalArtifact.abi,
    "ethena",
    EthenaFacetArtifact.abi,
    [
      "VERSION",
      "minter",
      "susde",
      "usdc",
      "usde",
      "setDelegatedSigner",
      "removeDelegatedSigner",
      "prepareMint",
      "prepareBurn",
      "cooldownAssets",
      "cooldownShares",
      "unstake",
      "setDelegatedSignerRateLimitKey",
      "removeDelegatedSignerRateLimitKey",
      "mintRateLimitKey",
      "burnRateLimitKey",
      "cooldownRateLimitKey",
      "unstakeRateLimitKey",
    ],
  );
}

function farmAssertions(s: StorageAssertion<typeof meta.storageLayout>): void {
  facetAssertions(
    s,
    9,
    "FARM_FACET",
    facets.FarmFacet,
    IFarmFacetExternalArtifact.abi,
    "farm",
    FarmFacetArtifact.abi,
    [
      "VERSION",
      "deposit",
      "claimReward",
      "withdraw",
      "getClaimRewardRateLimitKey",
      "getDepositRateLimitKey",
      "getWithdrawRateLimitKey",
    ],
  );
}

function layerZeroAssertions(s: StorageAssertion<typeof meta.storageLayout>): void {
  facetAssertions(
    s,
    10,
    "LAYER_ZERO_FACET",
    facets.LayerZeroFacet,
    ILayerZeroFacetExternalArtifact.abi,
    "layerZero",
    LayerZeroFacetArtifact.abi,
    [
      "VERSION",
      "setRecipient",
      "transfer",
      "getRecipient",
      "getTransferRateLimitKey",
      "quoteTransfer",
    ],
  );
}

function mapleAssertions(s: StorageAssertion<typeof meta.storageLayout>): void {
  facetAssertions(
    s,
    11,
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
  );
}

function merklAssertions(s: StorageAssertion<typeof meta.storageLayout>): void {
  facetAssertions(
    s,
    12,
    "MERKL_FACET",
    facets.MerklFacet,
    IMerklFacetExternalArtifact.abi,
    "merkl",
    MerklFacetArtifact.abi,
    ["VERSION", "toggleOperator", "getToggleOperatorRateLimitKey"],
  );
}

function otcAssertions(s: StorageAssertion<typeof meta.storageLayout>): void {
  facetAssertions(
    s,
    13,
    "OTC_FACET",
    facets.OTCFacet,
    IOTCFacetExternalArtifact.abi,
    "otc",
    OTCFacetArtifact.abi,
    [
      "VERSION",
      "setMaxSlippage",
      "setBuffer",
      "setRechargeRate",
      "send",
      "claim",
      "getBuffer",
      "getMaxSlippage",
      "getRechargeRate",
      "getState",
      "getClaimWithRecharge",
      "getIsSwapReady",
      "getSendRateLimitKey",
      "getClaimRateLimitKey",
    ],
  );
}

function pendleAssertions(s: StorageAssertion<typeof meta.storageLayout>): void {
  facetAssertions(
    s,
    14,
    "PENDLE_FACET",
    facets.PendleFacet,
    IPendleFacetExternalArtifact.abi,
    "pendle",
    PendleFacetArtifact.abi,
    ["VERSION", "router", "redeem", "getRedeemRateLimitKey"],
  );
}

function psmAssertions(s: StorageAssertion<typeof meta.storageLayout>): void {
  facetAssertions(
    s,
    15,
    "PSM_FACET",
    facets.PSMFacet,
    IPSMFacetExternalArtifact.abi,
    "psm",
    PSMFacetArtifact.abi,
    [
      "VERSION",
      "dai",
      "daiUSDS",
      "psm",
      "usdc",
      "usds",
      "swapUSDSToUSDC",
      "swapUSDCToUSDS",
      "to18ConversionFactor",
      "usdcToUSDSSwapRateLimitKey",
      "usdsToUSDCSwapRateLimitKey",
    ],
  );
}

function sparkVaultAssertions(s: StorageAssertion<typeof meta.storageLayout>): void {
  facetAssertions(
    s,
    16,
    "SPARK_VAULT_FACET",
    facets.SparkVaultFacet,
    ISparkVaultFacetExternalArtifact.abi,
    "sparkVault",
    SparkVaultFacetArtifact.abi,
    ["VERSION", "take", "getTakeRateLimitKey"],
  );
}

function superstateAssertions(s: StorageAssertion<typeof meta.storageLayout>): void {
  facetAssertions(
    s,
    17,
    "SUPERSTATE_FACET",
    facets.SuperstateFacet,
    ISuperstateFacetExternalArtifact.abi,
    "superstate",
    SuperstateFacetArtifact.abi,
    ["VERSION", "usdc", "ustb", "subscribe", "subscribeRateLimitKey"],
  );
}

function transferAssetAssertions(s: StorageAssertion<typeof meta.storageLayout>): void {
  facetAssertions(
    s,
    18,
    "TRANSFER_ASSET_FACET",
    facets.TransferAssetFacet,
    ITransferAssetFacetExternalArtifact.abi,
    "transferAsset",
    TransferAssetFacetArtifact.abi,
    ["VERSION", "transfer", "getTransferRateLimitKey"],
  );
}

function uniswapV3Assertions(s: StorageAssertion<typeof meta.storageLayout>): void {
  facetAssertions(
    s,
    19,
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
  );
}

function uniswapV4Assertions(s: StorageAssertion<typeof meta.storageLayout>): void {
  facetAssertions(
    s,
    20,
    "UNISWAP_V4_FACET",
    facets.UniswapV4Facet,
    IUniswapV4FacetExternalArtifact.abi,
    "uniswapV4",
    UniswapV4FacetArtifact.abi,
    [
      "VERSION",
      "permit2",
      "positionManager",
      "router",
      "setMaxSlippage",
      "setTickLimits",
      "mintPosition",
      "increasePosition",
      "decreasePosition",
      "swap",
      "getAggregateDepositRateLimitKey",
      "getAssetDepositRateLimitKey",
      "getMaxSlippage",
      "getSwapRateLimitKey",
      "getTickLimits",
      "getAggregateWithdrawRateLimitKey",
      "getAssetWithdrawRateLimitKey",
    ],
  );
}

function usdsAssertions(s: StorageAssertion<typeof meta.storageLayout>): void {
  facetAssertions(
    s,
    21,
    "USDS_FACET",
    facets.USDSFacet,
    IUSDSFacetExternalArtifact.abi,
    "usds",
    USDSFacetArtifact.abi,
    [
      "VERSION",
      "usds",
      "setVault",
      "mint",
      "burn",
      "vault",
      "mintRateLimitKey",
      "burnRateLimitKey",
    ],
  );
}

function weethAssertions(s: StorageAssertion<typeof meta.storageLayout>): void {
  facetAssertions(
    s,
    22,
    "WEETH_FACET",
    facets.WEETHFacet,
    IWEETHFacetExternalArtifact.abi,
    "weeth",
    WEETHFacetArtifact.abi,
    [
      "VERSION",
      "weeth",
      "weth",
      "deposit",
      "requestWithdraw",
      "claimWithdrawal",
      "getDepositRateLimitKey",
      "getRequestWithdrawRateLimitKey",
      "getClaimWithdrawRateLimitKey",
    ],
  );
}

function wrapProxyETHAssertions(s: StorageAssertion<typeof meta.storageLayout>): void {
  facetAssertions(
    s,
    23,
    "WRAP_PROXY_ETH_FACET",
    facets.WrapProxyETHFacet,
    IWrapProxyETHFacetExternalArtifact.abi,
    "wrapProxyETH",
    WrapProxyETHFacetArtifact.abi,
    ["VERSION", "weth", "wrapAll", "wrapRateLimitKey"],
  );
}

function wstethAssertions(s: StorageAssertion<typeof meta.storageLayout>): void {
  facetAssertions(
    s,
    24,
    "WSTETH_FACET",
    facets.WSTETHFacet,
    IWSTETHFacetExternalArtifact.abi,
    "wsteth",
    WSTETHFacetArtifact.abi,
    [
      "VERSION",
      "weth",
      "withdrawQueue",
      "wsteth",
      "deposit",
      "requestWithdraw",
      "claimWithdrawal",
      "depositRateLimitKey",
      "requestWithdrawRateLimitKey",
      "claimWithdrawRateLimitKey",
    ],
  );
}
