---
sidebar_position: 11
description: DV Deployment best practices, for running an optimal Distributed Validator setup.
---

# Deployment Best Practices

The following are a selection of best practices for deploying Distributed Validator Clusters at scale on mainnet.

## Deposit Process

Deposit processes can be done via an automated script. This can be used for DV clusters until they reach the desired number of validators.

It is important to allow time for the validators to be activated (usually <24 hours).

Consider using batching smart contracts to reduce the gas cost of a script, but take caution in their integration not to make an invalid deposit.

## Hardware Specifications

The following specifications are recommended for bare metal machines for clusters intending to run a significant number of mainnet validators:

- For 1000 validators or above, an 8 core 16 thread CPU with a single thread rating above 2500 on cpubenchmark and 32GB of RAM.
- Similar specifications should be targeted in the case of virtual cloud instances being used.

### Reference Setup for a 4-node cluster capable of running 5,000 validators

- 32GB RAM
- 2TB NVMe storage (4TB to future proof)
- 25000 IOPS
- 16 CPU cores

An NVMe storage device is highly recommended for optimal performance.

Inadequate hardware (low-performance virtualized servers and/or slow HDD storage) has been observed to hinder performance, indicating the necessity of provisioning adequate resources. **CPU clock speed and Disk throughput+latency are the most important factors for running a performant validator.**

Note that the Charon client itself takes less than 1GB of RAM and minimal CPU load. In order to optimize both performance and cost-effectiveness, it is recommended to prioritize physical over virtualized setups. Such configurations typically offer greater performance and minimize overhead associated with virtualization, contributing to improved efficiency and reliability.

When constructing a DV cluster, it is important to be conscious of whether a cluster runs across cloud providers or stays within a single provider's private networking. This likely can impact the bandwidth and latency of the connections between nodes, as well as the egress costs of the cluster (Charon has a relatively low communication with its peers, averaging 10s of kb/s in large mainnet clusters). Ideally, bare metal machines in different locations within the same continent and with at least two providers, balances redundancy and performance.

## Intra-cluster Latency

It is recommended to keep peer ping latency below 235 milliseconds for all peers in a cluster. Charon should report a consensus duration averaging under 1 second through its prometheus metric and associated grafana panel. 

In cases where latencies exceed these thresholds, efforts should be made to reduce the physical distance between nodes or optimize Internet Service Provider (ISP) settings accordingly.

For high-scale, performance deployments; inter-peer latency of <25ms is optimal, along with an average consensus duration under 100ms.

## Node Locations: Performance Optimization

For optimal performance and high availability, it is recommended to provision machines or virtual machines (VMs) within the same continent. This practice helps minimize potential latency issues ensuring efficient communication and responsiveness.

## Peer Connections

Charon clients can establish connections with one another in two ways: either through a third publicly accessible server known as a relay or directly with one another if they can establish a connection. The former is known as a relay connection and the latter is known as a direct connection.

It is important that all nodes in a cluster be directly connected to one another - this halves the latency between them and reduces bandwidth constraints significantly. Opening Charon’s port 3610 to the Internet is what is required to facilitate a direct connection between clients.

## Instance Independence

Each instance should have its own independent beacon node and validator client as well as Charon. Sharing beacon nodes between the different nodes would potentially impact the fault tolerance of the cluster and as a result should be avoided.

## Placement of Charon Clients

Install the Charon clients on the EL/CL machines instead of the VC machine (if separate). This setup reduces latency to the CL.

## Obol Splits

Leveraging Obol Splits smart contracts allows for non-custodial fund handling and allows smooth transaction management for customer payouts while maintaining security and compliance. It ensures non-commingling of funds across customers maintaining full non-custodial integrity.

To proceed during the setup of the clusters, withdrawal credentials for validators need to be directed to Obol Splits in order to manage reward distribution across operators.

## Node Configuration

Cluster sizes that allow for Byzantine Fault Tolerance are recommended as they are safer than clusters with simply Crash Fault Tolerance (See this guide for reference - [Cluster Size and Resilience](https://docs.obol.tech/docs/charon/cluster-configuration#cluster-size-and-resilience)).

Operators should have an EL/CL pair for each node. Ensure to finalize the machine size based on the separate system requirement for VC.

## MEV-Boost Relays

Integration of MEV-Boost and relay functionalities highlighted potential optimizations to mitigate latency and relay performance disparities. More research is needed in this area but it is recommended that a thorough analysis of performant low latency relays be done before selecting which ones to include as part of your DV node configuration.

All MEV relays work with the Obol Charon middleware client. Please consult with the team for the most performant ones with Obol DV software.

## Client Diversity

The clusters should consist of a combination of preferred consensus and execution clients. It is recommended to include a combination of multiple clients in order to have a healthy client diversity within the cluster.

Remote signers can be included as well, such as Web3signer.

Supported clients can be found here - [DVT Clients](https://dvt.obol.tech/)

## Metrics Monitoring

As requested by Obol Labs, node operators can push standard monitoring (Prometheus) and logging (Loki) data to Obol Labs' core team's cloud infrastructure for in-depth analysis of performance data and to assist during potential issues that may arise. Our recommendation for operators is to independently store information on their node health over the course of the validator lifecycle as well as any information on validator performance that they collect during the normal life cycle of a validator.

## Reference Reports

- Miga Labs Report - Available here
- Lido Performance Report #1 - Available here
- Lido Performance Report #2 - Available here
- Lido Performance Report #3 - Available here
