---
sidebar_position: 1
description: An overview of the Obol network
---

# Overview of Obol

## What is the Obol Collective?

The Obol Collective is a collection of tools, teams, and communities dedicated to scaling Ethereum by strengthening the security, resiliency, and decentralisation of the consensus layer through the development and deployment of distributed validators. The Distributed Validator middleware client, Charon, boosts the security, resilience, and decentralisation of the Ethereum validator network by enabling “squad staking”. The Collective is fueled by Obol’s economic model, which directs 1% of staking rewards from DVs to ecosystem projects via retroactive funding - a positive flywheel to accelerate adoption of DVs and scale the consensus layer.

The list of Obol Collective participants includes 50+ staking protocols, client teams, software tools, education & community projects, professional node operators, home operators, and stakers, including names like EigenLayer, Lido, EtherFi, Figment, Bitcoin Suisse, Stakewise, Nethermind, Blockdaemon, Chorus One, DappNode, and many more. Learn more at [Obol.org](https://obol.org).

## What is DV Labs?​

DV Labs (originally “Obol Labs”) is one of the core research and software development teams building DVT for Ethereum. DV Labs’ mission is to build shared web3 technologies for Ethereum infrastructure operators, to establish a credibly neutral and trust-minimised infrastructure layer. DV Labs’ Distributed Validator middleware client, Charon, boosts the security, resilience, and decentralisation of the Ethereum validator network by enabling “squad staking”. Learn more at [DVLabs.tech](https://dvlabs.tech).

## Scaling Ethereum’s Consensus Layer​

Obol is focused on scaling consensus by providing permissionless access to Distributed Validators (DVs), which offer not only protection against client issues and key mismanagement, but also byzantine fault tolerance. We believe that distributed validators should and will make up a large portion of mainnet validator configurations. The transition of the Ethereum community to DVs will enable a new trust paradigm, finally allowing the validator to become the most credible cash flow stream in the world.

Similar to how roll-up technology laid the foundation for L2 scaling implementations, we believe DVT will do the same for scaling consensus while preserving decentralization. Layers like Obol are critical to the long term viability and resiliency of public networks like Ethereum. We believe DVT will evolve into a widely used primitive and will ensure the security, resiliency, and decentralization of the public blockchain networks that adopt it.

### Sustainable Public Goods

Obol is inspired by previous work on Ethereum public goods and experimenting with circular economics. We believe that to unlock innovation in staking use cases, a [credibly neutral](https://blog.obol.org/why-we-built-charon-as-a-middleware/) layer must exist for innovation to flow and evolve vertically. The Obol staking stack consists of four core public goods:

The Obol Network consists of four core public goods:

* [Charon](../charon/intro.md), a middleware client that enables validators to run in a fault-tolerant, distributed manner;
* The [Distributed Validator Launchpad](../dvl/intro.md), a user interface for configuring Distributed Validators;
* [Obol Splits](https://github.com/ObolNetwork/obol-docs/blob/main/versioned_docs/version-v1.1.2/sc/introducing-obol-splits.mdx), a set of solidity smart contracts for the distribution of rewards from Distributed Validators;
* Obol [SDK](../sdk/index.md) & [API](https://docs.obol.org/api), allowing Distributed Validator clusters to be configured and run at scale, for example within staking protocols.

The [launch of the Obol Collective](https://blog.obol.org/announcing-the-obol-collective/) began the journey to becoming an open, community governed, self-sustaining project. Together we will incentivize, build, and maintain distributed validator technology that makes public networks a more secure and resilient foundation to build on top of. Read more about our economic model in our [One Percent For Decentralisation](https://blog.obol.tech/1-percent-for-decentralisation/) announcement.

## The Vision

The road to decentralizing stake is a long one. At Obol we have divided our vision into two key versions of distributed validators.

### V1 - Trusted Distributed Validators

![Multi Operator DV Cluster](https://github.com/ObolNetwork/obol-docs/blob/main/img/MultiOperator7.png)

The first version of distributed validators will have dispute resolution out of band. Meaning you need to know and communicate with your other operators if there is an issue with your shared cluster.

A DV without in-band dispute resolution/incentivisation is still extremely valuable. Individuals and staking as a service providers can deploy DVs on their own to make their validators fault tolerant. Groups can run DVs together, but need to bring their own dispute resolution to the table, whether that be a smart contract of their own, a traditional legal service agreement, or simply high trust between the group.

### V2 - Trustless Distributed Validators

As described in our [roadmap blog article](https://blog.obol.org/roadmap-the-distributed-validator-protocol/) published in February 2024, Version 2 of Charon will layer in a (dis)incentivisation scheme to solve the “lazy operator” problem, whereby an offline operator within a DV cluster does not earn any rewards. Further incentivisation alignment can be achieved with operator bonding requirements that can be slashed for unacceptable performance.

To add an un-gameable incentivisation layer to threshold validation requires complex interactive cryptography schemes, secure off-chain dispute resolution, and EVM support for proofs of the consensus layer state, as a result, this will be a longer and more complex undertaking than V1, hence the delineation between the two. Some of the published R\&D material is available in the [further reading](https://docs.obol.org/docs/next/fr/resources#research-and-development) section of the docs.
