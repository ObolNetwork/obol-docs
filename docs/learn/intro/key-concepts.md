---
sidebar_position: 2
description: Some of the key terms in the field of Distributed Validator Technology
---

# Key Staking Concepts

This page outlines a number of the key concepts behind the various technologies that Obol is developing.

## Distributed validator

![A Distributed Validator](/img/32Eth.png)

A distributed validator is an Ethereum proof-of-stake validator that runs on more than one node/machine. This functionality is possible with the use of **Distributed Validator Technology** (DVT).

Distributed validator technology removes some of the single points of failure in validation. Should &lt;33% of the participating nodes in a DV cluster go offline, the remaining active nodes can still come to consensus on what to sign and can produce valid signatures for their staking duties. This is known as Active/Active redundancy, a common pattern for minimizing downtime in mission critical systems.

## Distributed Validator Node

![A Distributed Validator Node](/img/DVNode.png)

A distributed validator node is the set of clients an operator needs to configure and run to fulfil the duties of a Distributed Validator Operator. An operator may also run redundant execution and consensus clients, an execution payload relayer like [mev-boost](https://github.com/flashbots/mev-boost), or other monitoring or telemetry services on the same hardware to ensure optimal performance.

In the above example, the stack includes Geth, Lighthouse, Charon and Teku.

### Execution Client

![A Geth Client](/img/POWNodeV2.png)

An execution client (formerly known as an Eth1 client) specializes in running the EVM and managing the transaction pool for the Ethereum network. These clients provide execution payloads to consensus clients for inclusion into blocks.

Examples of execution clients include:

- [Go-Ethereum](https://geth.ethereum.org/)
- [Nethermind](https://docs.nethermind.io/)
- [Erigon](https://github.com/ledgerwatch/erigon)

### Consensus Client

![A Geth Client](/img/POSClient.png)

A consensus client's duty is to run the proof of stake consensus layer of Ethereum, often referred to as the beacon chain.

Examples of Consensus clients include:

- [Prysm](https://docs.prylabs.network/docs/how-prysm-works/beacon-node)
- [Teku](https://docs.teku.consensys.net/en/stable/)
- [Lighthouse](https://lighthouse-book.sigmaprime.io/api-bn.html)
- [Nimbus](https://nimbus.guide/)
- [Lodestar](https://github.com/ChainSafe/lodestar)

### Distributed Validator Client

![A Charon Client](/img/CharonBrick.png)

A distributed validator client intercepts the validator client ↔ consensus client communication flow over the [standardised REST API](https://ethereum.github.io/beacon-APIs/#/ValidatorRequiredApi), and focuses on two core duties:

- Coming to consensus on a candidate duty for all validators to sign.
- Combining signatures from all validators into a distributed validator signature.

The only example of a distributed validator client built with a non-custodial middleware architecture to date is [Charon](../charon/intro).

### Validator Client

![A Lighthouse Client](/img/ValidatorBrick.png)

A validator client is a piece of code that operates one or more Ethereum validators.

Examples of validator clients include:

- [Vouch](https://www.attestant.io/posts/introducing-vouch/)
- [Prysm](https://docs.prylabs.network/docs/how-prysm-works/prysm-validator-client/)
- [Teku](https://docs.teku.consensys.net/en/stable/)
- [Lighthouse](https://lighthouse-book.sigmaprime.io/api-vc.html)

## Distributed Validator Cluster

![A Distributed Validator Cluster](/img/DVCluster.png)

A distributed validator cluster is a collection of distributed validator nodes connected together to service a set of distributed validators generated during a DVK ceremony.

### Distributed Validator Key

![A Distributed Validator Key](/img/ThresholdSigning.png)

A distributed validator key is a group of BLS private keys, that together operate as a threshold key for participating in proof of stake consensus.

### Distributed Validator Key Share

One piece of the distributed validator private key.

### Distributed Validator Threshold

The number of nodes in a cluster that needs to be online and honest for their distributed validators to be online is outlined in the following table.

| Cluster Size | Threshold | Note              |
|:------------:|:---------:|:------------------|
| 4            |  3/4      | Minimum threshold |
| 5            |  4/5      |                   |
| 6            |  4/6      | Minimum to tolerate two offline nodes|
| 7            |  5/7      | Minimum to tolerate two **malicious** nodes |
| 8            |  6/8      |                   |
| 9            |  6/9      | Minimum to tolerate three offline nodes |
| 10           |  7/10     | Minimum to tolerate three **malicious** nodes |

### Distributed Validator Key Generation Ceremony

To achieve fault tolerance in a distributed validator, the individual private key shares need to be generated together. Rather than have a trusted dealer produce a private key, split it and distribute it, the preferred approach is to never construct the full private key at any point, by having each operator in the distributed validator cluster participate in what is known as a Distributed Key Generation ceremony.

A distributed validator key generation ceremony is a type of DKG ceremony. A ceremony produces signed validator deposit and exit data, along with all of the validator key shares and their associated metadata. Read more about these ceremonies [here](../charon/dkg).
