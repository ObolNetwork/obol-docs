---
sidebar_position: 3
description: Obol Network's working group structure.
---

# Working groups

The Obol Network is a distributed consensus protocol and ecosystem with a mission to eliminate single points of technical failure risks on Ethereum via Distributed Validator Technology (DVT). The project has reached the point where increasing the community coordination, participation, and ownership will drive significant impact on the growth of the core technology. As a result, the Obol Labs team will open workstreams and incentives to the community, with the first working group being dedicated to the creation process of distributed validators.

This document intends to outline what Obol is, how the ecosystem is structured, how it plans to evolve, and what the first working group will consist.

## The Obol ecosystem

The Obol Network consists of four core public goods:

- **The DVK Launchpad** - a CLI tool and user interface for bootstrapping Distributed Validators

- **Charon** - a middleware client that enables validators to run in a fault-tolerant, distributed manner

- **Obol Managers** - a set of solidity smart contracts for the formation of Distributed Validators

- **Obol Testnets** - a set of on-going public incentivised testnets that enable any sized operator to test their deployment before serving for the mainnet Obol Network

## Working group formation

Obol Labs aims to enable contributor diversity by opening the project to external participation. The contributors are then sorted into structured working groups early on, allowing many voices to collaborate on the standardisation and building of open source components.

Each public good component will have a dedicated working group open to participation by members of the Obol community. The first working group is dedicated to the development of distributed validator keys and the DV Launchpad. This will allow participants to experiment with the Obol ecosystem and look for mutual long-term alignment with the project.

The second working group will be focused on testnets after the first is completed.

## The DVK working group

The first working group that Obol will launch for participation is focused on the distributed validator key generation component of the Obol technology stack. This is an effort to standardize the creation of a distributed validator through EIPs and build a community launchpad tool, similar to the Eth2 Launchpad today (previously built by Obol core team members).

The distributed validator key (DVK) generation is a critical core capability of the protocol and more broadly an important public good for a variety of extended use cases. As a result, the goal of the working group is to take a community-led approach in defining, developing, and standardizing an open source distributed validator key generation tool and community launchpad.

This effort can be broadly broken down into three phases:
- Phase 0: POC testing, POC feedback, DKG implementation, EIP specification & submission
- Phase 1: Launchpad specification and user feedback
- Phase 1.5: Complimentary research (Multi-operator validation)


## Phases
DVK WG members will have different responsibilities depending on their participation phase.

### Phase 0 participation

Phase 0 is focused on applied cryptography and security. The expected output of this phase is a CLI program for taking part in DVK ceremonies.

Obol will specify and build an interactive CLI tool capable of generating distributed validator keys given a standardised configuration file and network access to coordinate with other participant nodes. This tool can be used by a single entity (synchronous) or a group of participants (semi-asynchronous).

The Phase 0 group is in the process of submitting EIPs for a Distributed Validator Key encoding scheme in line with EIP-2335, and a new EIP for encoding the configuration and secrets needed for a DKG process as the working group outlines.

**Participant responsibilities:**
- Implementation testing and feedback
- DKG Algorithm feedback
- Ceremony security feedback
- Experience in Go, Rust, Solidity, or applied cryptography

### Phase 1 participation

Phase 1 is focused on the development of the DV LaunchPad, an open source SPA web interface for facilitating DVK ceremonies with authenticated counterparties.

To facilitate the generation of distributed validator keys amongst remote users with high trust, Obol Labs intends to develop and maintain a website that enables a group of users to generate the configuration required for a DVK generation ceremony.

The Obol Labs team is collaborating with Deep Work Studio on a multi-week design and user feedback session that began on April 1st. The collaborative design and prototyping sessions include the Obol core team and genesis community members. All sessions will be recorded and published publicly. 

**Participant responsibilities:**
- DV LaunchPad architecture feedback
- Participate in 2 rounds of syncronous user testing with the Deep Work team (April 6-10 & April 18-22)
- Testnet Validator creation

### Phase 1.5 participation

Phase 1.5 is focused on formal research on the demand and understanding of multi-operator validation. This will be a separate research effort that will be taken place by Georgia Rakusen. This research will be turned into a formal report and distributed for free to the ethereum community. Participation in Phase 1.5 is user interview based and involves psychology based testing. This effort began in early April.

**Participant responsibilities:**
- Complete asyncronous survey
- Pass the survery to profile users to enhance the depth of the research effort
- Produce design assets for the final resarch artifact

## Phase progress

The Obol core team has begun work on all three phases of the effort, and will present draft versions as well as launch Discord channels for each phase when relevant. Below is a status update of where the core team is with each phase as of today.

**Progress:**

- Phase 0: 60%
- Phase 1: 25%
- Phase 1.5: 30%

The core team plans to release the different phases for proto community feedback as they approach 75% completion.

## Working group key objectives

The deliverables of this working group are: 

### 1. Standardize the format of DVKs through EIPs

One of the many successes in the Ethereum development community is the high levels of support from all client teams around standardised file formats. It is critical that we all work together as a working group on this specific front.

Two examples of such standards in the consensus client space include:

- EIP-2335: A JSON format for the storage and interchange of BLS12-381 private keys
- EIP-3076: Slashing Protection Interchange Format
distributed validator key encoding scheme in line with EIP-2335, and a new EIP for encoding the configuration and secrets needed for a DV Cluster that has outputs based on the working groups feedback. Outputs from the DVK ceremony may include:

- Signed validator deposit data files
- Signed exit validator messages
- Private key shares for each operator's validator client
- Distributed Validator Cluster manifests to bind each node together

### 2. A CLI program for distributed validator key (DVK) ceremonies 

One of the key successes of Proof of Stake Ethereum's launch was the availability of high quality CLI tools for generating Ethereum validator keys including eth2.0-deposit-cli and ethdo.

The working group will ship a similar CLI tool capable of generating distributed validator keys given a standardised configuration and network access to coordinate with other participant nodes.

As of March 1st, the WG is testing a POC DKG CLI based on Kobi Gurkan's previous work. In the coming weeks we will submit EIPs and begin to implement our DKG CLI in line with our V0.5 specs and the WG's feedback.

### 3. A Distributed validator launchpad

To activate an Ethereum validator you need to deposit 32 ether into the official deposit contract. The vast majority of users that created validators to date have used the **[~~Eth2~~ Staking Launchpad](https://launchpad.ethereum.org/)**, a public good open source website built by the Ethereum Foundation and participants that later went on to found Obol. This tool has been wildly successful in the safe and educational creation of a significant number of validators on the Ethereum mainnet.

To facilitate the generation of distributed validator keys amongst remote users with high trust, Obol Labs will host and maintain a website that enables a group of users to generate distributed validator keys together using a DKG ceremony in-browser. 

Over time, the DV LaunchPads features will primarily extended the spectrum of trustless key generation. The V1 featues of the launchpad can be user tested and commented on by anyone in the Obol Proto Community!

## Working group participants

The members of the Phase 0 working group are:

- The Obol genesis community
- Ethereum Foundation (Carl, Dankrad, Aditya)
- Ben Edgington
- Jim McDonald
- Prysmatic Labs
- Sourav Das 
- Mamy Ratsimbazafy 
- Kobi Gurkan
- Coinbase Cloud

The intended universe of Phase 1 & Phase 1.5 will launch with no initial members, though they will immediately be available for submission by participants that have joined the Obol Proto community right [here](https://pwxy2mff03w.typeform.com/to/Kk0TfaYF). Everyone can join the proto community; however, working group participation will be based on relevance and skill set.


