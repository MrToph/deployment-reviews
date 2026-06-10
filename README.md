# Deployment verifications

See individual branches for deployment verifications per project.

[![Validate Deployments](https://github.com/MrToph/deployment-reviews/actions/workflows/validate.yml/badge.svg)](https://github.com/MrToph/deployment-reviews/actions/workflows/validate.yml)

Source commits used for Grove Diamond PAU deployment verification.

## Grove Diamond PAU

| Component | Verification artifact/source |
|---|---|
| AccessControls | `https://github.com/sky-ecosystem/diamond-pau` `fd5f09c5254ac7f1931a85e81a8d9036bd257704` (`v1.13.0-beta.0`) |
| Controller | `https://github.com/sky-ecosystem/diamond-pau` `fd5f09c5254ac7f1931a85e81a8d9036bd257704` (`v1.13.0-beta.0`) |
| AdministeredAgent | `https://github.com/sky-ecosystem/pau-administered-agent` `bfaaf709a8664d74d12604455f0365a0a12439cf` (`v1.0.0`) |

Controller prefixed external call selectors were derived from `https://github.com/sky-ecosystem/diamond-pau-deploy` at commit `90df5687155df6ba8ca9b9bcfdf947ff69895405` (`v1.0.0-beta.0`).

Grove deployment output and deployed Grove PAU contract addresses were taken from `https://github.com/sky-ecosystem/grove-pau-deploy` at commit `47f2815ff727ca9e12adc3e66d27c42ca4f8e3c1` (`v1.0.0-beta.0`). Sky PAU Beacon and facet addresses were taken from `https://github.com/sky-ecosystem/sky-pau-registry` at commit `161bac0c17a7d2c4d4e0455e1febe401a7a36edb` (no release tag). Grove address constants were taken from `https://github.com/grove-labs/grove-address-registry` at commit `c99519dec1a01d0c2cf55c8e7816fdb1f9ed7b04` (no release tag).
