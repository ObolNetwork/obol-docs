---
description: "DV Deployment best practices, for running an optimal Distributed Validator setup at scale."
sidebar_label: "Deployment Best Practices"
slug: /run-a-dv/prepare/deployment-best-practices
---

# Deployment Best Practices

The following are a selection of best practices for deploying Distributed Validator Clusters at scale on mainnet.

## Hardware Specifications

The following specifications are recommended for bare metal machines for clusters intending to run a significant number of mainnet validators:

### Minimum Specs

* A CPU with 4+ cores, favoring high clock speed over more cores. ( >3.0GHz and higher or a cpubenchmark [single thread](https://www.cpubenchmark.net/singleThread.html) score of >2,500)
* 16GB of RAM
* 2TB+ free SSD disk space (for mainnet)
* 1000 read/write SSD IOPS
* 500MB/s read/write SSD speed
* 10Mbps internet bandwidth

### Recommended Specs for extremely large clusters

* A CPU with 8+ physical cores, with clock speeds >3.5Ghz
* 32GB+ RAM (depending on the EL+CL clients)
* 4TB+ NVMe storage
* 2000 read/write SSD IOPS
* 1000MB/s read/write SSD speed
* 25Mbps internet bandwidth

An NVMe storage device is **highly recommended for optimal performance**, offering nearly 10x more random read/writes per second than a standard SSD.

Inadequate hardware (low-performance virtualized servers and/or slow HDD storage) has been observed to hinder performance, indicating the necessity of provisioning adequate resources. **CPU clock speed and Disk throughput+latency are the most important factors for running a performant validator.**

Note that the Charon client itself takes less than 1GB of RAM and minimal CPU load. In order to optimize both performance and cost-effectiveness, it is recommended to prioritize physical over virtualized setups. Such configurations typically offer greater performance and minimize overhead associated with virtualization, contributing to improved efficiency and reliability.

When constructing a DV cluster, it is important to be conscious of whether a cluster runs across cloud providers or stays within a single provider's private networking. This likely can impact the bandwidth and latency of the connections between nodes, as well as the egress costs of the cluster (Charon has a relatively low communication with its peers, averaging 10s of kb/s in large mainnet clusters). Ideally, bare metal machines in different locations within the same continent and with at least two providers, balances redundancy and performance.

## Intra-cluster Latency

It is recommended to **keep peer ping latency below 235 milliseconds for all peers in a cluster**. Charon should report a consensus duration averaging under 1 second through its prometheus metric `core_consensus_duration_seconds_bucket` and associated grafana panel titled "Consensus Duration".

In cases where latencies exceed these thresholds, efforts should be made to reduce the physical distance between nodes or optimize Internet Service Provider (ISP) settings accordingly. Ensure all nodes are connecting to one another directly rather than through a relay.

For high-scale, performance deployments; inter-peer latency of < 25ms is optimal, along with an average consensus duration under 100ms.

## Peer Connections

Charon clients can establish connections with one another in two ways: either through a third publicly accessible server known as [a relay](../../learn/charon/charon-cli-reference.md#host-a-relay) or directly with one another if they can establish a connection. The former is known as a relay connection and the latter is known as a direct connection.

It is important that all nodes in a cluster be directly connected to one another - this can halve the latency between them and reduces bandwidth constraints significantly. Opening Charon’s p2p port (the default is `3610`) to the Internet, or configuring your routers NAT gateway to permit connections to your Charon client, are what are required to facilitate a direct connection between clients. Confirm direct peer reachability with `charon alpha test peers`.

## Node Locations

For optimal performance and high availability, it is recommended to provision machines or virtual machines (VMs) within the same continent. This practice helps minimize potential latency issues ensuring efficient communication and responsiveness. Consider maps of [undersea internet cables](https://www.submarinecablemap.com/) when selecting locations across oceans with low latency.

When operating multiple nodes within a cloud environment, care must be taken to distribute nodes across availability zones to avoid AZ outages becoming cluster outages.

## Instance Independence

Each node in the cluster should have its own independent beacon node (EL+CL) and validator client as well as Charon client. Sharing beacon nodes between the different nodes significantly hinders the benefits of running a Charon cluster by reintroducing a single point of failure to the distributed architecture.

## Beacon Node Redundancy

In cases where multiple beacon nodes are available to a node, Charon should be configured to use both in parallel by adding them to `--beacon-node-endpoints`. This will query each beacon node and use the fastest response, improving both performance and availability. Only in situations where this is not economically feasible should `--fallback-beacon-node-endpoints` be used instead, which will query beacon nodes sequentially. Sequential querying will decrease performance due to timeouts being required before failover.

## Placement of Charon clients

If you wish to divide a Distributed Validator node across multiple physical or virtual machines; locate the Charon client on the EL/CL machine instead of the VC machine. This setup reduces latency from Charon to the consensus layer, as well as keeping the public-internet connected clients separate from the clients that hold the validator private keys. If Charon and the VC connect over an untrusted network, the connection should be encrypted (VPN, Kubernetes [CNI](https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/) etc).

## Node Configuration

Cluster sizes that allow for Byzantine Fault Tolerance are recommended as they are safer than clusters with simply Crash Fault Tolerance (See this guide for reference - [Cluster Size and Resilience](../../learn/charon/cluster-configuration.md#cluster-size-and-resilience)). A minimum of four Charon nodes is strongly recommended for this reason.

## MEV-Boost Relays

MEV relays are configured at the Consensus Layer or MEV-boost client level. Refer to our [guide](../../advanced-and-troubleshooting/advanced/enable-mev.mdx) to ensure all necessary configuration has been applied to your clients. As with all validators, low latency during proposal opportunities is extremely important. By default, MEV-Boost waits for all configured relays to return a bid, or will timeout if any have not returned a bid within 950ms. This default timeout is generally too slow for a distributed cluster (think of this time as additive to the time it takes the cluster to come to consensus, both of which need to happen within a 2 second window for optimal proposal broadcasting). It is likely better to only list relays that are located geographically near your node, so that once all relays respond (e.g. in < 50ms) your cluster will move forward with the proposal.

Use Charon's [`test mev` command](./test-a-cluster.mdx#test-mev-relay) to test a number of your preferred relays, and select the two or three relays with the lowest latency to your node(s), you do not need to have the same relays on each node in a cluster.

## Builder Block Selection

By default, most consensus clients apply a comparison factor or value boost when evaluating builder bids against locally-built blocks, which can cause a local block to be selected even when a builder bid is available. For at-scale deployments aiming to maximize MEV capture and consistent proposal behavior, configure your consensus client to never prefer locally-built blocks over builder bids.

The relevant flags vary by consensus client. The flags below either force builder-always selection or remove the default local-block bias, depending on what the client supports:

- **Teku**: `--builder-bid-compare-factor=BUILDER_ALWAYS` (set on the beacon node). Forces builder-always selection.
- **Lighthouse**: `--prefer-builder-proposals` (set on the validator client). Forces builder-always selection.
- **Lodestar**: `--builder.selection=builderalways` (set on the validator client). Forces builder-always selection.
- **Prysm**: `--local-block-value-boost=0` (set on the beacon node). Removes the default 10% local-block bias so builder and local bids compete on equal value, but a higher-value local block can still be selected. Prysm has no builder-always mode.
- **Nimbus**: `--local-block-value-boost=0` (set on the beacon node). Same caveat as Prysm. Note that the Nimbus team recommends a non-zero value to mitigate the risk of a relay failing to publish the advertised block.

Always preferring the builder maximizes MEV capture but increases the risk of a missed proposal if a relay is slow, returns a bad bid, or fails to publish the block. Operators that prioritize proposal reliability over MEV capture may instead keep a small local-block boost (e.g. `--local-block-value-boost=3` on Prysm/Nimbus, or a comparable percentage factor on Teku) as a liveness safety margin.

## Client Diversity

Obol clusters should consist of a mix of different consensus, execution, and validator clients. Charon can't [detect client failures](../../learn/further-reading/ethereum_and_dvt.md#deep-dive-into-dvt-and-charons-architecture) if all nodes are using the same client. At a minimum, no single client should comprise the [threshold](../../learn/charon/cluster-configuration.md#cluster-size-and-resilience) of nodes in the cluster.
For example:

A 7 node cluster with 4 Teku, 2 Lodestar and 1 Nimbus for validator clients **does not** have client error safety since the threshold (4) of votes can be met with just the Teku client.

A 7 node cluster with 3 Teku, 3 Lodestar and 1 Nimbus for validator clients **is safe against a single client bug** as the threshold is not met by any one client.

Keep in mind that client diversity includes EL, CL and VC clients and each layer needs an appropriate mix for optimal security.

Remote signers can be included as well, such as Web3signer or Dirk. A diversity of private key infrastructure setups further reduces the risk of total key compromise.

Tested client combinations can be found in the [release notes](https://github.com/ObolNetwork/charon/releases) for each Charon version.

As an additional safeguard against client bugs that could produce a chain split, Charon's `chain_split_halt` feature has peers compare the leader's source and target votes against attester data from their own beacon node before participating in QBFT consensus. If the votes disagree, the peer refuses to participate, preventing the cluster from signing an attestation on the wrong fork. This trades some liveness (peers may need to wait for their local beacon node, and contentious forks can result in no attestation) for stronger safety against signing through a chain split.

The feature is currently in alpha and is not enabled by default. To enable it, add `--feature-set-enable=chain_split_halt` to your `charon run` command.

## Execution Layer Configuration

When available on the EL client (e.g [Nethermind](../../advanced-and-troubleshooting/troubleshooting/client_configurations.md#nethermind)), blob inclusion for locally-built blocks should be set to 0. Setting blob count to 0 for locally-built blocks avoids the additional latency of gathering blob transactions, which matters when falling back from MEV relay blocks under time pressure.

For Nethermind:
```shell
--Blocks.BlockProductionBlobLimit 0
```

## Metrics Monitoring

Node operators should push [standard monitoring](../start/obol-monitoring.mdx) (Prometheus) and logging (Loki) data to Obol Labs' core team's cloud infrastructure for in-depth analysis of performance data and to assist during potential issues that may arise. The logging and metrics configuration values will be provided by the Obol team during onboarding.

It is recommended that operators independently store information on their node health over the course of the validator lifecycle as well as any information on validator performance that they collect during the normal life cycle of a validator.

## Obol Splits

Leveraging [Obol Splits](../../learn/intro/obol-splits.md) smart contracts allows for non-custodial fund handling and allows for net customer payouts in an ongoing manner. Obol Splits ensure no commingling of funds across customers, and maintain full non-custodial integrity. Read more about Obol Splits [here](../../learn/intro/frequently-asked-questions.mdx#obol-splits).

## Deposit Process

Deposit processes can be done via an automated script. This can be used for DV clusters until they reach the desired number of validators.

It is important to allow time for the validators to be activated (see current [queue](https://beaconcha.in/validators/queues)).

Consider using batching smart contracts to reduce the gas cost of a script, but take caution in their integration not to make an invalid deposit.
