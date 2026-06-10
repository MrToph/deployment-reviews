// Grove PAU deployment output to verify:
// https://github.com/sky-ecosystem/grove-pau-deploy/commit/47f2815ff727ca9e12adc3e66d27c42ca4f8e3c1 (v1.0.0-beta.0)
export const contracts = {
  ACCESS_CONTROLS: "0x10d1AdE77F1b81Ef95057bb2fACE292313F66277",
  ADMINISTERED_AGENT: "0x0f7ca6616CC38132530dC4695778a54de42C21F4",
  CONTROLLER: "0x0DD65461610Fe5b65cE50A870B10ED0F3d24d8C2",
} as const;

// Sky PAU registry:
// https://github.com/sky-ecosystem/sky-pau-registry/blob/161bac0c17a7d2c4d4e0455e1febe401a7a36edb/src/Ethereum.sol
export const facets = {
  BasinFacet: "0xC84825BCD13AEddc372400239499380376a44A39",
  ERC4626Facet: "0x1dCA18608c89174181153E786778705b4A0E1a06",
  MapleFacet: "0x691b5c26aD2B74d2376f4eD87904E9D3E47bD630",
  UniswapV3Facet: "0x445D9Dc752F269Be48250f1A180CAC4c61cE4bab",
} as const;

export const constants = {
  // Sky PAU registry:
  // https://github.com/sky-ecosystem/sky-pau-registry/blob/161bac0c17a7d2c4d4e0455e1febe401a7a36edb/src/Ethereum.sol
  BEACON: "0x829dC2b7E94B1954F0764E573f2E0d45Afa28199",

  // Grove address registry:
  // https://github.com/grove-labs/grove-address-registry/blob/c99519dec1a01d0c2cf55c8e7816fdb1f9ed7b04/src/Ethereum.sol
  ALM_PROXY: "0x491EDFB0B8b608044e227225C715981a30F3A44E",
  ALM_RATE_LIMITS: "0x5F5cfCB8a463868E37Ab27B5eFF3ba02112dF19a",
  GROVE_PROXY: "0x1369f7b2b38c76B6478c0f0E66D94923421891Ba",
  ALM_FREEZER: "0xB0113804960345fd0a245788b3423319c86940e5",
  ALM_RELAYER: "0x0eEC86649E756a23CBc68d9EFEd756f16aD5F85f",
  GROVE_PRIMARY_RELAYER_OPERATOR: "0x4364D17B578b0eD1c42Be9075D774D1d6AeAFe96",
  GROVE_SECONDARY_RELAYER_OPERATOR: "0x9187807e07112359C481870feB58f0c117a29179",
  MAPLE_SYRUP_USDC: "0x80ac24aA929eaF5013f6436cdA2a7ba190f5Cc0b",
  UNISWAP_V3_AUSD_USDC: "0xbAFeAd7c60Ea473758ED6c6021505E8BBd7e8E5d",
} as const;
