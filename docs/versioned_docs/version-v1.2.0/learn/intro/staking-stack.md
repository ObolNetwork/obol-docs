---
sidebar_position: 3
description: The Obol Modular Staking Stack
---

# Obol's Modular Staking Stack

## The Components

* [Charon](../charon/intro.md) - Obol's DV Middleware client.
* [Obol Splits](https://github.com/ObolNetwork/obol-docs/blob/main/versioned_docs/version-v1.2.0/learn/intro/obol-splits.mdx) - A suite of smart contracts for use with distributed validators.
* [DV Launchpad](launchpad.md) - A website interface for configuring and activating distributed validators.
* [Obol SDK](https://github.com/ObolNetwork/obol-docs/blob/main/versioned_docs/version-v1.2.0/adv/advanced/quickstart-sdk.mdx) - for creating Distributed Validators with the help of the Obol API.

![Obol Stacking Stack](https://github.com/ObolNetwork/obol-docs/blob/main/img/StakingStack.png)

## The Vision

The road to decentralizing stake is a long one. At Obol we have divided our vision into two key versions of distributed validators.

### V1 - Trusted Distributed Validators

![Multi Operator DV Cluster](https://github.com/ObolNetwork/obol-docs/blob/main/img/MultiOperator7.png)

The first version of distributed validators will have dispute resolution out of band. Meaning you need to know and communicate with your other operators if there is an issue with your shared cluster.

A DV without in-band dispute resolution/incentivisation is still extremely valuable. Individuals and staking as a service providers can deploy DVs on their own to make their validators fault tolerant. Groups can run DVs together, but need to bring their own dispute resolution to the table, whether that be a smart contract of their own, a traditional legal service agreement, or simply high trust between the group.

### V2 - Trustless Distributed Validators

As described in our [roadmap blog article](https://blog.obol.org/roadmap-the-distributed-validator-protocol/) published in February 2024, Version 2 of Charon will layer in a (dis)incentivisation scheme to solve the “lazy operator” problem, whereby an offline operator within a DV cluster does not earn any rewards. Further incentivisation alignment can be achieved with operator bonding requirements that can be slashed for unacceptable performance.

To add an un-gameable incentivisation layer to threshold validation requires complex interactive cryptography schemes, secure off-chain dispute resolution, and EVM support for proofs of the consensus layer state, as a result, this will be a longer and more complex undertaking than V1, hence the delineation between the two. Some of the published R\&D material is available in the [further reading](https://docs.obol.org/next/fr/resources#research-and-development) section of the docs.
