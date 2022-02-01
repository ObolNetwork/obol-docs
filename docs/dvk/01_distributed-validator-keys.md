---
Description: >-
  An Effort to Accelerate and Standardise the Generation of Distributed
  Validators
---

# Distributed Validator Keys

### Obol DVT Working Group

#### Purpose
Obol Network is a distributed consensus protocol and ecosystem for Eth2 with a mission to eliminate single points of technical failure risks on Ethereum via Distributed Validator Technology (DVT). The project has reached the point where increasing the community interaction, participation, and ownership distribution will drive significant impact on the growth of the core technology. 

This document intends to outline what Obol is, how the ecosystem is structured, how it plans to evolve, and where you can get involved.

#### The Obol Ecosystem
Obol Labs is a research and software development team focused on enabling more resilient Proof of Stake validation infrastructure for public blockchain networks through Distributed Validator Technology (DVT).The core team is currently building the Obol Network, a protocol and ecosystem to foster the adoption of DVT and trust minimized staking through multi-operator validation. This will enable low-trust access to Ethereum staking yield, which can be used as a core building block in a variety of Web3 products.

The network consists of 4 public goods that will eventually work together through circular economics.

The Obol Network develops and maintains four core public goods:

- The DVK Launchpad, a CLI tool and User Interface for bootstrapping Distributed Validators

- Charon, a middleware client that enables validators to run in a fault-tolerant, distributed manner

- Obol Managers, a set of solidity smart contracts for the formation of Distributed Validators

- Obol Testnets, a set of on-going public incentivised testnets that enable any sized operator to test their deployment before serving for the mainnet Obol Network.

#### Working Group Formation

Obol is building critical public goods and as a result, has chosen to design the project in a way that enables diversity by opening the project to external participation into structured working groups early on, to collaborate on the standardisation and build of open source components.

This means that each public good component will have a dedicated working group open to participation by members of the Obol Community. The core team is using this first working group, dedicated to the development of the DV LaunchPad, to let participants experiment with participation in the Obol Ecosystem and mutually look for long term alignment with the project.

The Network will utilize a working group formation across the community and will roll out / open different working groups for participation as the ecosystem progresses. For example, the second working group that will be rolled out will be focused on testnets.

#### The DVK Working Group

The first working group that Obol will launch for participation is focused on the distributed validator key generation component of the Obol technology stack. This is an effort to standardize the creation of a distributed validator through EIP’s and build a community launchpad tool similar to the Eth2 Launchpad today (previously built by Obol core team members).

The distributed validator key (DVK) generation is a critical core capability of the protocol and more broadly an important public good for a variety of extended use cases. As a result, the goal of the Working Group is to take a community-led approach in defining, developing and standardizing an open source distributed validator key generation tool and community launchpad.

This effort can be broadly broken down into three phases:
- Phase 0: EIP Specification, Drafting & Submission
- Phase 1: Launchpad Specification and User Feedback
- Phase 1.5: Complimentary Research

#### Working Group Member Responsibilities

##### Obol Working Groups

The overarching responsibility of Working Group members is to help make Obol and Distributed Validator Technology successful and adopted on post-merge Ethereum. Responsibilities will be WG specific as they are rolled out. The first is the DVK Working Group, which is detailed below.

##### DVK Working Group
DVK WG members will have different responsibilities based on their participation phase

###### Phase 0 Participation

Phase 0 is all about applied cryptography and security. The expected output of this phase is a CLI program for taking part in DVK ceremonies.

Obol will spec and build an interactive CLI tool capable of generating distributed validator keys given a standardised configuration file and network access to coordinate with other participant nodes. This tool can be used by a single entity (synchronous) or a group of participants (semi-asynchronous).

The Phase 0 group will draft and submit EIPs for a Distributed Validator Key encoding scheme in line with EIP-2335, and a new EIP for encoding the configuration and secrets needed for a DKG process as the working group outlines.

Responsibilities
- Draft EIP participation and feedback
- DKG Algorithm Feedback
- Ceremony Security Feedback
- Experience in Go, Rust, Solidity, or applied cryptography

##### Phase 1 & Phase 1.5 Participation

Phase 1 & beyond is focused on the development of an open source SPA web interface for facilitating DVK ceremonies with authenticated counterparties and user adoption of distributed validator creation. 

To facilitate the generation of distributed validator keys amongst remote users with high trust, Obol Labs intends to develop and maintain a website that enables a group of users to generate the configuration required for a DVK generation ceremony.

Phase 1.5 is a separate research effort that will be taken place by Georgia Rakusen on the market demand for multi operator validation with the Obol Core Team. This research will be distributed for free to the community. Participation in Phase 1.5 is user interview based and involves psychology based testing.

Responsibilities
- Provide feedback on architecture of launchpad
- Provide front end development or design for the launchpad
- Create Testnet DV’s
- Participate in multi-operator validator study

### Working Group Key Objectives / Deliverables

The deliverables of this working group are: 

#### 1. Standardize the Format of DVKs Through EIPs

One of the many successes in the Ethereum development community is the high levels of support from all client teams around standardised file formats. It is critical that we all work together as a working group on this specific front.

Two examples of such standards in the Consensus client space include:

- EIP-2335: A JSON format for the storage and interchange of BLS12-381 private keys
- EIP-3076: Slashing Protection Interchange Format

It is Obol Labs intention to submit new EIPs for a Distributed Validator Key encoding scheme in line with EIP-2335, and a new EIP for encoding the configuration and secrets needed for a DKG process that is outputs based on the working groups feedback:

- Signed validator deposit data files
- Signed exit validator messages
- Private key shares for each operators validator client
- Authentication certificates for each distributed validator middleware to communicate together in a cluster

2. A CLI program for Distributed Validator Key (DVK) ceremonies 

One of the key successes of Proof of Stake Ethereum's launch was the availability of high quality CLI tools for generating Ethereum validator keys including eth2.0-deposit-cli and ethdo.

Obol Labs intends to coordinate the development of a similar CLI tool capable of generating distributed validator keys given a standardised configuration file and network access to coordinate with other participant nodes.

3. A Distributed Validator LaunchPad

To activate an Ethereum validator you need to deposit 32 ether into the official deposit contract. The vast majority of users that created validators to date have used the "Eth2 Launchpad", a public good open source website built by the Ethereum Foundation and participants that later went on to found Obol. This tool has been wildly successful in the safe and educational creation of the majority of validators on Mainnet.

To facilitate the generation of distributed validator keys amongst remote users with high trust, the Obol Network intends to develop and maintain a website that enables a group of users to generate the configuration required for a DVK generation ceremony. 

#### Working Group Participants
The members of the Phase 0 working group are:

- Coinbase Cloud
- Ethereum Foundation
- Ben Edgington
- Jim McDonald
- Prysmatic Labs 
- Sourav Das 
- Mamy Ratsimbazafy 
- Kobi Gurkan (pending) 

The intended universe of Phase 1 & Phase 1.5 will launch with the initial cohort below but will immediately be available for submission by participants that have joined the Obol Proto Community, at the following link. Everyone can join the proto community, however woorking group participation will be based on relevance and skill set. Below is an abbreviated list of parties that Obol has connected with about collaborating on the project.

- Ethereum Foundation 
- Prysmatic Labs
- Coinbase Cloud
- Lido
- ConsenSys/Teku
- Attestant
- Blockdaemon
- Chorus One
- Figment
- Stakefish
- Staking Facilities
- Stakewise
- Chainflow
- Everstake
- Roxkx
- Skillz
- Stakin
- DappNode
- Beaconscan
- ETH Staker
- Status/Nimbus
- ChainSafe
- Lighthouse
- Stereum
- Flashbots
- Foundry
- P2P

#### Working Group Member Incentives

There will not be incentives directly for participation in the DVK WG.The working group will serve as a mutual test bed for the project and interested participants to begin collaborating and testing where overlap falls so that future collaboration can be incentivized and structured.

#### Next Steps

The Obol core team has begun work on all three phases of the effort and will present draft versions for each phase when relevant and launch Discord channels. Below is a status update of where the core team is with each phase as of today.

Progress

- Phase 0: 40%
- Phase 1: 20%
- Phase 1.5: 30%

The core team will deliver a Phase 0 EIP spec and draft for review on Feb 14th (the earliest). The draft will include a testnet cli tool and documented research to use as a starting point. The core team plans to release the different phases for feedback as they approach 75% completion.


