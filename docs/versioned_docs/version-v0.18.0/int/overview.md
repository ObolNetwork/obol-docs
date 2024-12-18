---
sidebar_position: 2
description: An overview of the Obol network
---

# Overview

### The Network

The network can be best visualized as a work layer that sits directly on top of base layer consensus. This work layer is designed to provide the base layer with more resiliency and promote decentralization as it scales. As Ethereum matures over the coming years, the community will move onto the next great scaling challenge, which is stake centralization. To effectively mitigate these risks, community building and credible neutrality must be used as primary design principles.

Obol is focused on scaling consensus by providing permissionless access to Distributed Validators (DV's). We believe that distributed validators will and should make up a large portion of mainnet validator configurations. In preparation for the first wave of adoption, the network currently utilizes a middleware implementation of Distributed Validator Technology (DVT), to enable the operation of distributed validator clusters that can preserve validators current client and remote signing infrastructure.

Similar to how roll-up technology laid the foundation for L2 scaling implementations, we believe DVT will do the same for scaling consensus while preserving decentralization. Staking infrastructure is entering its protocol phase of evolution, which must include trust-minimized staking networks that can be plugged into at scale. Layers like Obol are critical to the long term viability and resiliency of public networks, especially networks like Ethereum. We believe DVT will evolve into a widely used primitive and will ensure the security, resiliency, and decentralization of the public blockchain networks that adopt it.

The Obol Network consists of four core public goods:

* The [Distributed Validator Launchpad](https://github.com/ObolNetwork/obol-docs/blob/main/versioned_docs/version-v0.18.0/dvl/intro/README.md), a [User Interface](https://goerli.launchpad.obol.tech/) for bootstrapping Distributed Validators
* [Charon](https://github.com/ObolNetwork/obol-docs/blob/main/versioned_docs/version-v0.18.0/charon/intro/README.md), a middleware client that enables validators to run in a fault-tolerant, distributed manner
* [Obol Splits](../sc/introducing-obol-splits.md), a set of solidity smart contracts for the distribution of rewards from Distributed Validators
* [Obol Testnets](../testnet.md), a set of on-going public incentivized testnets that enable any sized operator to test their deployment before serving for the mainnet Obol Network

#### Sustainable Public Goods

The Obol Ecosystem is inspired by previous work on Ethereum public goods and experimenting with circular economics. We believe that to unlock innovation in staking use cases, a credibly neutral layer must exist for innovation to flow and evolve vertically. Without this layer highly available uptime will continue to be a moat and stake will accumulate amongst a few products.

The Obol Network will become an open, community governed, self-sustaining project over the coming months and years. Together we will incentivize, build, and maintain distributed validator technology that makes public networks a more secure and resilient foundation to build on top of.

### The Vision

The road to decentralizing stake is a long one. At Obol we have divided our vision into two key versions of distributed validators.

#### V1 - Trusted Distributed Validators

![Multi Operator DV Cluster](https://github.com/ObolNetwork/obol-docs/blob/main/img/MultiOperator7.png)

The first version of distributed validators will have dispute resolution out of band. Meaning you need to know and communicate with your counterparty operators if there is an issue with your shared cluster.

A DV without in-band dispute resolution/incentivization is still extremely valuable. Individuals and staking as a service providers can deploy DVs on their own to make their validators fault tolerant. Groups can run DVs together, but need to bring their own dispute resolution to the table, whether that be a smart contract of their own, a traditional legal service agreement, or simply high trust between the group.

Obol V1 will utilize retroactive public goods principles to lay the foundation of its economic ecosystem. The Obol Community will responsibly allocate the collected ETH as grants to projects in the staking ecosystem for the entirety of V1.

#### V2 - Trustless Distributed Validators

V1 of charon serves a small by count, large by stake-weight group of individuals. The long tail of home and small stakers also deserve to have access to fault tolerant validation, but they may not know enough other operators personally to a sufficient level of trust to run a DV cluster together.

Version 2 of charon will layer in an incentivization scheme to ensure any operator not online and taking part in validation is not earning any rewards. Further incentivization alignment can be achieved with operator bonding requirements that can be slashed for unacceptable performance.

To add an un-gameable incentivization layer to threshold validation requires complex interactive cryptography schemes, secure off-chain dispute resolution, and EVM support for proofs of the consensus layer state, as a result, this will be a longer and more complex undertaking than V1, hence the delineation between the two.
