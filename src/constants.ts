// https://github.com/sky-ecosystem/sky-pau-registry/blob/161bac0c17a7d2c4d4e0455e1febe401a7a36edb/src/Ethereum.sol
export const contracts = {
  BEACON: "0x829dC2b7E94B1954F0764E573f2E0d45Afa28199",
  PAU_FACTORY: "0x69A5d548830AC2A4Ba90A44a2C75BDA71f97fc66",
  ADMINISTERED_AGENT_FACTORY: "0x2968c3b5478cF93B70aB1e24255d4EDBBd27a089",
} as const;

// https://github.com/sky-ecosystem/sky-pau-registry/blob/161bac0c17a7d2c4d4e0455e1febe401a7a36edb/src/Ethereum.sol
export const facets = {
  AaveFacet: "0x8CE890A96a193ff2DD4B2eA3C682326F655f6b62",
  BasinFacet: "0xC84825BCD13AEddc372400239499380376a44A39",
  CCTPFacet: "0xADf62692340e46EF90336f2e75ce3b37f1148873",
  CentrifugeFacet: "0xa0A10BA97be1412730D694B8dE1afe7eff20eC31",
  CurveFacet: "0x139D81d7d6040fAeF7cF0EF5A2636Ca8a97a30d8",
  DAIUSDSFacet: "0x3817F734CAe6AD2BDb79F9ff23091F2AD478da5F",
  ERC4626Facet: "0x1dCA18608c89174181153E786778705b4A0E1a06",
  ERC7540Facet: "0x4f7e0E3612b0e1E156A2B6570a51d4BD709F1315",
  EthenaFacet: "0xEc48D773CEef1c6b07CdA1afA2716C478b55187B",
  FarmFacet: "0xF24E91f5D8529436c9fB92dd94F80d4A6C25d0f0",
  LayerZeroFacet: "0xA0c323a0acb20F259eA4ff343319D450BE6472e5",
  MapleFacet: "0x691b5c26aD2B74d2376f4eD87904E9D3E47bD630",
  MerklFacet: "0x321138Db5E056e9d0080D4c278e10A1EdC091Eb0",
  OTCFacet: "0x46b24ba00B65CB4f603447590e539b08097fb7Ac",
  PendleFacet: "0xcC9dD4c9B2a9c08f2692e7060F43d29A03E87348",
  PSMFacet: "0xE4A5dAc768a310cc2316f258901b32E499653064",
  SparkVaultFacet: "0xff0d19920E207e3A17eb5A2E5bA3AFA44836362b",
  SuperstateFacet: "0xeE197475607E9a27cCAA4786e740d2F0d0E706A7",
  TransferAssetFacet: "0x4DA7608C331b8f135df5b985018933780eCd089D",
  UniswapV3Facet: "0x445D9Dc752F269Be48250f1A180CAC4c61cE4bab",
  UniswapV4Facet: "0x75D35ffB8e6B871E12EB549CcF6afD324c46E47D",
  USDSFacet: "0x1221CC4B85Ab260660aD21C2829e0EB516dffBc7",
  WEETHFacet: "0x1d8D089EB7D558F5dc6aA0cf98DDe13B77b3F641",
  WrapProxyETHFacet: "0x081506DE21C695Af5e61a81aD288C8A96B6b59B9",
  WSTETHFacet: "0x3a82D11Cd37Fb0098363262Dc69425d07Fa05516",
} as const;

export const constants = {
  // https://chainlog.skyeco.com/api/mainnet/active.json - key `MCD_PAUSE_PROXY`.
  SKY_PAUSE_PROXY: "0xBE8E3e3618f7474F8cB1d074A26afFef007E98FB",
  // https://developers.circle.com/cctp/references/contract-addresses - Ethereum TokenMessengerV2.
  CCTP_TOKEN_MESSENGER: "0x28b5a0e9C621a5BadaA536219b3a228C8168cf5d",
  // https://chainlog.skyeco.com/api/mainnet/active.json - key `USDC`.
  USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  // https://chainlog.skyeco.com/api/mainnet/active.json - key `MCD_DAI`.
  DAI: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  // https://chainlog.skyeco.com/api/mainnet/active.json - key `DAI_USDS`.
  DAI_USDS: "0x3225737a9Bbb6473CB4a45b7244ACa2BeFdB276A",
  // https://chainlog.skyeco.com/api/mainnet/active.json - key `USDS`.
  USDS: "0xdC035D45d973E3EC169d2276DDab16f1e407384F",
  // https://docs.ethena.fi/solution-design/minting-usde/mint-and-redeem-contract-v2 - mint/redeem contract v2.
  ETHENA_MINTER: "0xe3490297a08d6fC8Da46Edb7B6142E4F461b62D3",
  // https://tokens.coingecko.com/ethereum/all.json - symbol `SUSDE`, name `Ethena Staked USDe`.
  SUSDE: "0x9D39A5DE30e57443BfF2A8307A4256c8797A3497",
  // https://tokens.coingecko.com/ethereum/all.json - symbol `USDE`, name `Ethena USDe`.
  USDE: "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3",
  // https://docs.pendle.finance/pendle-v2-dev/Contracts/PendleRouter/PendleRouterOverview - Router V4.
  PENDLE_ROUTER: "0x888888888889758F76e7103c6CbF23ABbF58F946",
  // https://chainlog.skyeco.com/api/mainnet/active.json - key `MCD_LITE_PSM_USDC_A`.
  PSM: "0xf6e72Db5454dd049d0788e411b06CfAF16853042",
  // https://tokens.coingecko.com/ethereum/all.json - symbol `USTB`, name `Superstate Short Duration U.S. Government Securities Fund`.
  USTB: "0x43415eB6ff9DB7E26A15b704e7A3eDCe97d31C4e",
  // https://docs.uniswap.org/contracts/v3/reference/deployments/ethereum-deployments - NonfungiblePositionManager.
  UNISWAP_V3_POSITION_MANAGER: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
  // https://docs.uniswap.org/contracts/v3/reference/deployments/ethereum-deployments - SwapRouter02.
  UNISWAP_V3_ROUTER: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
  // https://docs.uniswap.org/contracts/v4/deployments - Ethereum mainnet Permit2.
  PERMIT2: "0x000000000022D473030F116dDEE9F6B43aC78BA3",
  // https://docs.uniswap.org/contracts/v4/deployments - Ethereum mainnet PositionManager.
  UNISWAP_V4_POSITION_MANAGER: "0xbD216513d74C8cf14cf4747E6AaA6420FF64ee9e",
  // https://docs.uniswap.org/contracts/v4/deployments - Ethereum mainnet UniversalRouter.
  UNISWAP_V4_ROUTER: "0x66a9893cC07D91D95644AEDD05D03f95e1dBA8Af",
  // https://tokens.coingecko.com/ethereum/all.json - symbol `WEETH`, name `Wrapped eETH`.
  WEETH: "0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee",
  // https://tokens.coingecko.com/ethereum/all.json - symbol `WETH`, name `WETH`.
  WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  // https://docs.lido.fi/deployed-contracts/ - Ethereum Withdrawal Queue ERC721.
  WSTETH_WITHDRAW_QUEUE: "0x889edC2eDab5f40e902b864aD4d7AdE8E412F9B1",
  // https://chainlog.skyeco.com/api/mainnet/active.json - key `WSTETH`.
  WSTETH: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
} as const;
