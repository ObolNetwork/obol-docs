---
description: >-
  An effort to accelerate and standardise the generation of Distributed
  Validators
---

# Distributed Validator Keys

### DVK Working Group

When operating a proof of stake validator, secure key generation and custody processes are an absolute necessity.

As part of Obol Labs efforts to build Distributed Validator Technology, we intend to form a working group amongst key stakeholders in the PoS Ethereum community to help define and build out open source tools as public goods to facilitate the creation of Distributed Validators regardless of use case.

The purpose of this working group is as follows:

- Develop and maintain an open source CLI program for taking part in Distributed Validator Key (DVK) ceremonies
- Develop and maintain an open source SPA web interface for facilitating DVK ceremonies with authenticated counterparties
- Submit Ethereum Improvement Proposals (EIPS) for
  - Standardising the configuration of a key generation ceremony
  - Standardising the encoding of a distributed key share
  - Standardising the encoding of a distributed validator cluster manifest
- Educate PoS Ethereum Validators on the benefits and risks of running Distributed Validators
- Bring the Ethereum community together to collaborate on a tool that will be used by everyone

As part of the effort Obol will be commissioning and open sourcing a far reaching research report on DVT and Multi-Operator Validators.

#### Intended Working Group Participants

- Ethereum Foundation
- Prysmatic Labs
- Lighthouse
- Lodestar
- Nimbus
- Consensys/Teku
- Attestant
- Coinbase Cloud
- Lido
- Rocketpool
- Blockdaemon
- Figment
- Stakefish
- Stakewise
- Staking Facilities

## Deliverables

### A CLI program for taking part in DVK ceremonies

One of the key successes of Proof of Stake Ethereum's launch was the availability of high quality CLI tools for generating Ethereum validator keys including [eth2.0-deposit-cli](https://github.com/ethereum/eth2.0-deposit-cli) and [ethdo](https://github.com/wealdtech/ethdo).

Obol Labs intends to coordinate the development of a similar CLI tool capable of generating distributed validator keys given a standardised configuration file and network access to coordinate with other participant nodes. This tool can be used by a single entity (synchronous) or a group of participants (semi asynchronous).

### A Distributed Validator Launchpad

To activate an Ethereum validator you need to deposit 32 ether into the official [deposit contract](https://etherscan.io/address/0x00000000219ab540356cbb839cbe05303d7705fa). The vast majority of users that have created validators to date have used the [Eth2 Launchpad](https://launchpad.ethereum.org/en/), a public good open source website built by the Ethereum Foundation and members of the Obol Labs core team. This tool has been extremely successful at enabling the safe and informed creation of the majority of validators on Mainnet.

To facilitate the generation of distributed validator keys amongst remote users with high trust, Obol Labs intends to develop and maintain a website that enables a group of users to generate the configuration required for a DVK generation ceremony. It may even host a ceremony in browser if feasible. \
\
This will be open sourced in similar fashion to the Eth2 Launchpad of today.

### Standardising the format of DVKs

Another of the many successes in the Ethereum development community is the high levels of support from all client teams around standardised file formats. It is critical that we all work together as a working group on this specific front.

Two examples of such standards in the consensus client space include:

- [EIP-2335](https://eips.ethereum.org/EIPS/eip-2335): A JSON format for the storage and interchange of BLS12-381 private keys.
- [EIP-3076](https://eips.ethereum.org/EIPS/eip-3076): Slashing Protection Interchange Format

It is Obol Labs intention to submit new EIPs for a Distributed Validator Key encoding scheme in line with EIP-2335, and a new EIP for encoding the configuration and secrets needed for a DKG process as the working group outlines. Likely ceremony artifacts include:

- Signed validator deposit data files
- Signed exit validator messages
- Private key shares for each operator's validator client
- Cluster manifests for each distributed validator middleware to communicate together in an authenticated manner

## Next Steps

**Project Management:**

The working group will be coordinated by the Obol Labs team, who will be responsible for the implementation and delivery of the community tools. Participants are welcome to partake in the implementation process if desired.\

**Implementation Language:**

- Rust (preferred - can target WASM for Browser)
- Go

**DKG Algorithm Options:**

- [Fouque-Stern](https://hal.inria.fr/inria-00565274/document)
- [Practical Asynchronous Distributed Key Generation](https://eprint.iacr.org/2021/1591)
- More to be considered durng the research phase

## Phase 0

**EIP Drafting:**

The Obol Core team will draft the initial EIPs in collaboration with the following (desired) sub group of participants prior to opening the working group up to large audience.\
\
**Start Date:** Jan 6, 2021\
\
**Sub Group:**

- EF Members
- Jim McDonald
- Ben Edgington
- Raul Jordan
- Vasilly (Lido)
- Coinbase Cloud
- Sourav Das

## Phase 1

**Design Feedback:**

The Obol Core team will conduct a user feedback session with all working group members based on the draft of the EIPs and proposed architecture. Our goal is to better understand the requirements of adoption and utilization of the key stakeholders in the working group. Our intention is to build a tool that a variety of different staking personas can utilize to accelerate adoption of the primitive. Based on feedback from the working group, the Obol team will iterate accordingly to implement the community determined tooling.\
\
**Start Date:** TBD

**Completion Date:** Est end of 1Q22
