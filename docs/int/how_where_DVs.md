---
sidebar_position: 3
description: How and where to run DVs
---

# How and where to run DVs

:::caution
Charon is in a beta state and should be used with caution on mainnet according to its [Terms of Use](https://obol.tech/terms.pdf).
:::


## Launcher Support
UI and CLI validator provisioning software

| Launcher/Flow         |      Solo        | Group              | Creator           |
|:---------------------:|:----------------:|:------------------:|:-----------------:|
|[DV Launchpad - Mainnet (beta)](../dvl/intro.md)|:white_check_mark:|:white_check_mark:|:white_check_mark:|
|[DV Launchpad - Holesky](../dvl/intro.md)|:white_check_mark:|:white_check_mark:|:white_check_mark:|
|[Rocketpool Smartnode](https://github.com/rocket-pool/smartnode)|:red_circle:|:construction:|:red_circle:|
|[Dappnode](https://github.com/dappnode/DAppNodePackage-obol-distributed-validator-goerli)|:red_circle:|:construction:|:construction:|
|[Avado](https://ava.do/)|:construction:|:construction:|:red_circle:|
|[Stereum Launcher](https://stereum.net/)|:construction:|:red_circle:|:red_circle:|
|[Eth-docker](https://eth-docker.net/)|:red_circle:|:construction:|:red_circle:|
|[Nethermind Sedge](https://github.com/NethermindEth/sedge)|:red_circle:|:construction:|:red_circle:|
|[NiceNode](https://www.nicenode.xyz/)|:red_circle:|:red_circle:|:red_circle:|
|[EthereumOnArm](https://ethereum-on-arm-documentation.readthedocs.io/en/latest/)|:red_circle:|:construction:|:red_circle:|
|[DeBoot](https://github.com/awmacpherson/deboot)|:red_circle:|:red_circle:|:red_circle:|


## CL+VC Combinations:
|Consensus:point_down:Validator:point_right:| Teku     | Lighthouse | Nimbus     | Prysm     | Lodestar   | Vouch     |
|:------------:|:--------:|:----------:|:----------:|:---------:|:----------:|:---------:|
|Teku       |:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:grey_question:|:white_check_mark:|
|Lighthouse |:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|
|Nimbus     |:white_check_mark:|:white_check_mark:|:grey_question:|:grey_question:|:grey_question:|:grey_question:|
|Prysm      |:white_check_mark:|:grey_question:|:grey_question:|:white_check_mark:|:grey_question:|:grey_question:|
|Lodestar   |:grey_question:|:white_check_mark:|:grey_question:|:grey_question:|:white_check_mark:|:white_check_mark:|


### Note:
  <ul>
    <li><a href="https://github.com/sigp/lighthouse"> Lighthouse CL</a> v4.3.0 is not compatible with <a href="https://github.com/Consensys/teku">Teku VC</a> versions after v23.6.0.</li>
  </ul>

## Successful Duties Observed on a Public Testnet 
| Duty / VC    | Teku     | Lighthouse | Nimbus     | Prysm     | Lodestar   | Vouch     |
|:------------:|:--------:|:----------:|:----------:|:---------:|:----------:|:---------:|
|Attestation|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|
|Attestation Aggregation|:construction:|:construction:|:construction:|:white_check_mark:|:white_check_mark:|:red_circle:|
|Block Proposal|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|
|BlindedBeaconBlock Proposal|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:red_circle:|
|Sync Committee Message|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|
|Sync Committee Contribution|:construction:|:construction:|:construction:|:construction:|:white_check_mark:|:red_circle:|

### Note:
  <ul>
    <li>Blinded beacon block proposals are only supported from<a href="https://github.com/ObolNetwork/charon/blob/main/docs/configuration.md#cluster-config-change-log"> cluster lock</a> version v1.7 and <a href="https://github.com/ObolNetwork/charon/releases"> charon release</a> v0.17.0 onwards.</li>
    <li>Prysm VC support is added from prysm version v5.0.0 onwards.</li>
  </ul>



## Key Managers Tested
| Key Manager           | Tested           |
|:---------------------:|:----------------:|
|[Web3Signer](https://github.com/Consensys/web3signer)|:construction:    |
|[Dirk](https://github.com/attestantio/dirk/)|:red_circle:      |
|[Secure-signer](https://github.com/PufferFinance/secure-signer)|:construction:    |

