---
sidebar_position: 1
description: Frequently asked questions
---

# Frequently asked questions

## General

### Does Obol have a token?

No. Distributed validators use only Ether.

### Where can I learn more about Distributed Validators?

Have you checked out our [blog site](https://blog.obol.tech) and [twitter](https://twitter.com/ObolNetwork) yet? Maybe join our [discord](https://discord.gg/n6ebKsX46w) too.

### Where does the name Charon come from?

[Charon](https://www.theoi.com/Khthonios/Kharon.html) \[kharon] is the Ancient Greek Ferryman of the Dead. He was tasked with bringing people across the Acheron river to the underworld. His fee was one Obol coin, placed in the mouth of the deceased. This tradition of placing a coin or Obol in the mouth of the deceased continues to this day across the Greek world.

### What are the hardware requirements for running a Charon node?

Charon alone uses negligible disk space of not more than a few MBs. However, if you are running your consensus client and execution client on the same server as charon, then you will typically need the same hardware as running a full Ethereum node:

At minimum:

* A CPU with 2+ physical cores (or 4 vCPUs)
* 8GB RAM
* 1.5TB+ free SSD disk space (for mainnet)
* 10mb/s internet bandwidth

Recommended specifications:

* A CPU with 4+ physical cores
* 16GB+ RAM
* 2TB+ free disk on a high performance SSD (e.g. NVMe)
* 25mb/s internet bandwidth

For more hardware considerations, check out the [ethereum.org guides](https://ethereum.org/en/developers/docs/nodes-and-clients/run-a-node/#environment-and-hardware) which explores various setups and trade-offs, such as running the node locally or in the cloud.

For now, Geth, Teku & Lighthouse clients are packaged within the docker compose file provided in the [quickstart guides](https://github.com/ObolNetwork/obol-docs/blob/main/versioned_docs/version-v0.17.0/int/quickstart/group/README.md), so you don't have to install anything else to run a cluster. Just make sure you give them some time to sync once you start running your node.

### What is the difference between a node, a validator and a cluster?

A node is a single instance of Ethereum EL+CL clients that can communicate with other nodes to maintain the Ethereum blockchain.

A validator is a node that participates in the consensus process by verifying transactions and creating new blocks. Multiple validators can run from the same node.

A cluster is a group of nodes that act together as one or several validators, which allows for a more efficient use of resources, reduces operational costs, and provides better reliability and fault tolerance.

### Can I migrate an existing Charon node to a new machine?

It is possible to migrate your Charon node to another machine running the same config by moving the `.charon` folder with its contents to your new machine. Make sure the EL and CL on the new machine are synced before proceeding to the move to minimize downtime.

## Distributed Key Generation

### What are the min and max numbers of operators for a Distributed Validator?

Currently, the minimum is 4 operators with a threshold of 3.

The threshold (aka quorum) corresponds to the minimum numbers of operators that need to be active for the validator(s) to be able to perform its duties. It is defined by the following formula `n-(ceil(n/3)-1)`. We strongly recommend using this default threshold in your DKG as it maximises liveness while maintaining BFT safety. Setting a 4 out of 4 cluster for example, would make your validator more vulnerable to going offline instead of less vulnerable. You can check the recommended threshold values for a cluster [here](../key-concepts.md#distributed-validator-threshold).

## Debugging Errors in Logs

You can check if the containers on your node are outputting errors by running `docker compose logs` on a machine with a running cluster.

Diagnose some common errors and view their resolutions [here](https://github.com/ObolNetwork/obol-docs/blob/main/versioned_docs/version-v0.17.0/int/faq/errors.mdx).
