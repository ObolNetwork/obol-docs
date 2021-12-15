---
sidebar_position: 2
description: Some of the key terms in the field of Distributed Validator Technology
---

# 💡 Key Concepts

## Distributed Validator

![A Distributed Validator](/img/WhatIsADistributedValidator.png)

A Distributed Validator is one validator public key on the Ethereum network, being operated in an Active/Active manner through the use of Distributed Validator Technology.
​

## Distributed Validator Node

![A Distributed Validator Node](/img/WhatIsADistributedValidatorNode.png)

A distributed validator node is the set of clients an operator needs to configure and run to fulfil the duties of a Distributed Validator Operator. An operator may also run redundant execution and consensus clients, an execution payload relayer like
, or other monitoring or telemetry clients on the same hardware to ensure optimal performance.

In the above example, the stack includes geth, lighthouse, charon and lodestar.

### Execution Client

An execution client (formerly known as an Eth1 client) specialises in simulating the EVM and managing the transaction pool.
Examples of execution clients include
​

- Nethermind
- Erigon
- Consensus Quorum

### Consensus Client

A consensus client focusing on running the proof of stake consensus layer of Ethereum, often referred to as the beacon chain.
Examples of Consensus clients include:

### Distributed Validator Client

A distributed validator client intercepts the standard validator client <-> consensus client communication flow, and focuses on two core duties.

- Coming to consensus on a candidate duty for all validators to sign
- Combining signatures from all validators into a distributed validator signature

The only example of a distributed validator client built with a non-custodial middleware architecture to date is [charon](./dv/introducing-charon.md).

### Validator Client

A validator client is a piece of code that operates one or more Ethereum validators.
Examples of validator clients include:

## Distributed Validator Cluster

![A Distributed Validator Cluster](/img/WhatIsADistributedValidatorCluster.png)

A distributed validator cluster is a collection of distributed validator nodes connected together to service a set of distributed validators generated during a DVK ceremony.

### Distributed Validator Key

A distributed validator key is a group of BLS private keys, that together operate as a threshold key for participating in proof of stake consensus with.

### Distributed Validator Key Shard

One piece of the distributed validator private key.

### Distributed Validator Key Generation Ceremony

To achieve fault tolerance in a distributed validator, the individual private key shards need to be generated together. Rather than have a trusted dealer produce a private key, split it and distribute it, the preferred approach is to never construct the full private key ever by having each operator in the distributed validator cluster produce the keys together in what is known as a Distributed Key Generation ceremony. A distributed validator key generation ceremony is a type of DKG ceremony. A DVK ceremony produces signed validator deposit and exit data, along with all of the validator key shards and their associated metadata.
