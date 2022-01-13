---
Description: >-
  An Effort to Accelerate and Standardise the Generation of Distributed
  Validators
---

# Distributed Validator Keys

### DVK Working Group

When operating a proof of stake validator, secure key generation and custody processes are an absolute necessity.

As part of Obol Labs efforts to build Distributed Validator Technlology, we are launching a working group to help define and build out open source tools and standards to facilitate the creation of Distributed Validators. The adoption of DVT requires buy in from community members and sustainable open source technology.

The Obol Labs core team will manage and facilitite the working group with participation from a wide variety of participants. We intend to launch with an initial group to decrease overhead and then allow for new members to join based on some pre determined process.

The purpose of this working group is to enable a collective transition to distributed validators that includes standardization and communication across key stakeholders. At Obol we are taking the grass roots approach to the technology.

Our intended outputs are as follows:

- Develop and maintain an open source CLI program for taking part in Distributed Validator Key (DVK) ceremonies
- Develop and maintain an open source SPA web interface for facilitating DVK ceremonies with authenticated counterparties
- Submit Ethereum Improvement Proposals (EIPS) for
  - Standardising the configuration of a key generation ceremony
  - Standardising the encoding of a distributed key share
  - Standardising the encoding of a distributed validator cluster manifest

In addition, as part of the effort Obol will be working with Georgia Rakusen to conduct an industry research report on DVT and Multi-Operator Validation. This will educate Validators on the benefits and risks of running Distributed Validators and provide all of us with a demand guage of multi-operator validation.

#### Intended Working Group Participants

- Ethereum Foundation
- Coinbase Cloud
- Prysmatic Labs
- Attestant
- Lighthouse
- Lodestar
- Nimbus
- Consensys/Teku
- Lido
- Rocketpool
- Blockdaemon
- Figment
- Stakefish
- Stakewise
- Staking Facilities
- Chorus One
- StakeWithUS
- Open to any and all suggestions

## Deliverables

### A CLI program for taking part in DVK ceremonies

One of the key successes of Proof of Stake Ethereum's launch was the availability of high quality CLI tools for generating Ethereum validator keys including [eth2.0-deposit-cli](https://github.com/ethereum/eth2.0-deposit-cli) and [ethdo](https://github.com/wealdtech/ethdo).

Obol Labs intends to coordinate the development of an interactive CLI tool capable of generating distributed validator keys given a standardised configuration file and network access to coordinate with other participant nodes. This tool can be used by a single entity (synchronous) or a group of participants (semi-asynchronous).

Enabling the creation of distributed validators through standardization is imperative for long term adoption and open source experimentation. It is also inline with the current stabdards of the DVT effort which includes formal verification.

### A Distributed Validator Launchpad

To activate an Ethereum validator you need to deposit 32 ether into the official [deposit contract](https://etherscan.io/address/0x00000000219ab540356cbb839cbe05303d7705fa). The vast majority of users that have created validators to date have used the [Eth2 Launchpad](https://launchpad.ethereum.org/en/), a public good, open source website built by the Ethereum Foundation and members of the Obol Labs core team. This tool has been extremely successful at enabling the safe and informed creation of the majority of validators on Mainnet.

To facilitate the generation of distributed validator keys amongst remote users with high trust, Obol Labs intends to develop and maintain a website that enables a group of users to generate the configuration required for a DVK generation ceremony. 

This will be open sourced in similar fashion to the Eth2 Launchpad of today. We intend to host the ceremoony in browser if desired. 

### Standardising the format of DVKs

Another of the many successes in the Ethereum development community is the high levels of support from all client teams around standardised file formats. It is critical that we all work together as a working group on this specific front.

Two examples of such standards in the consensus client space include:

- [EIP-2335](https://eips.ethereum.org/EIPS/eip-2335): A JSON format for the storage and interchange of BLS12-381 private keys.
- [EIP-3076](https://eips.ethereum.org/EIPS/eip-3076): Slashing Protection Interchange Format

Obol Labs with draft EIPs for a Distributed Validator Key encoding scheme in line with EIP-2335, and a new EIP for encoding the configuration and secrets needed for a DKG process as the working group outlines. EIPs will be reviewed by all working group participants before officially submitted. Likely ceremony artifacts include:

- Signed validator deposit data files
- Signed exit validator messages
- Private key shares for each operator's validator client
- Cluster manifests for each distributed validator middleware to communicate together in an authenticated manner

## Next Steps

**Project Management:**

The working group will be coordinated by the Obol Labs team, who will be responsible for the implementation and delivery of the community tools. Participants are welcome to partake in the implementation process if desired.

**Candidate Implementation Language:**
- Rust 
- Go

**DKG Algorithm Options:**
- [Fouque-Stern](https://hal.inria.fr/inria-00565274/document)
- [Practical Asynchronous Distributed Key Generation](https://eprint.iacr.org/2021/1591)

### Phase 0

**EIP Drafting:**

The Obol Core team will draft the initial EIPs in collaboration with the following (desired) sub group of participants prior to opening the working group up to large audience.

**Start Date:** Feb 7, 2022

**Sub Group:**

- EF Members
- Coinbase Cloud
- Jim McDonald
- Ben Edgington
- Raul Jordan
- Sourav Das

### Phase 1

**Design Feedback:**

The Obol Core team will conduct feedback with all working group members based on the draft of the EIPs and proposed architecture. Our goal is to better understand the requirements of adoption and utilization of the key stakeholders in the working group. Our intention is to build a tool that a variety of different staking personas can utilize to accelerate adoption of the primitive. Based on feedback from the working group, the Obol team will iterate accordingly to implement the community determined tooling.

**Start Date:** TBD

### Phase 2

The Obol Core team will begin development of the community tools

**Start Date:** March 2, 2022


