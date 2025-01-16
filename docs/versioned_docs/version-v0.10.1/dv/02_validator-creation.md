---
description: Creating a Distributed Validator cluster from scratch
---

# Distributed validator creation

![A sample Distributed Validator cluster](https://github.com/ObolNetwork/obol-docs/blob/main/img/ObolCluster.png)

### Stages of creating a distributed validator

To create a distributed validator cluster, you and your group of operators need to complete the following steps:

1. One operator begins the cluster setup on the [Distributed Validator Launchpad](../dvk/02_distributed_validator_launchpad.md).
   * This involves setting all of the terms for the cluster, including; withdrawal address, fee recipient, validator count, operator addresses, etc. This information is known as a _cluster configuration_.
   * This operator also sets their charon client's Ethereum Node Record ([ENR](https://github.com/ObolNetwork/obol-docs/blob/main/versioned_docs/version-v0.10.1/int/faq/errors.mdx#what-is-an-enr)).
   * This operator signs both the hash of the cluster config and the ENR to prove custody of their address.
   * This data is stored in the DV Launchpad data layer and a shareable URL is generated. This is a link for the other operators to join and complete the ceremony.
2. The other operators in the cluster follow this URL to the launchpad.
   * They review the terms of the cluster configuration.
   * They submit the ENR of their charon client.
   * They sign both the hash of the cluster config and their charon ENR to indicate acceptance of the terms.
3. Once all operators have submitted signatures for the cluster configuration and ENRs, they can all download the cluster definition file.
4. Every operator passes this cluster definition file to the `charon dkg` command. The definition provides the charon process with the information it needs to find and complete the DKG ceremony with the other charon clients involved.
5. Once all charon clients can communicate with one another, the DKG process completes. All operators end up with:
   * A `cluster-lock.json` file, which contains the original cluster configuration data, combined with the newly generated group public keys and their associated public key shares. This file is needed by the `charon run` command.
   * Validator deposit data
   * Validator private key shares
6. Operators can now take backups of the generated private key shares, their ENR private key if they have not yet done so, and the `cluster-lock.json` file.
7. All operators load the keys and cluster lockfiles generated in the ceremony, into their staking deployments.
8. Operators can run a performance test of the configured cluster to ensure connectivity between all operators at a reasonable latency is observed.
9. Once all readiness tests have passed, one operator activates the distributed validator(s) with an on-chain deposit.
