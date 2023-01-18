---
description: Documenting a Distributed Validator Cluster in a standardised file format
sidebar_position: 3
---

# Cluster Configuration

:::caution
These cluster definition and cluster lock files are a work in progress. The intention is for the files to be standardised for operating distributed validators via the [EIP process](https://eips.ethereum.org/) when appropriate.
:::

This document describes the configuration options for running a charon client or cluster.

A charon cluster is configured in two steps:

- `cluster-definition.json` which defines the intended cluster configuration before keys have been created in a distributed key generation ceremony.
- `cluster-lock.json` which includes and extends `cluster-definition.json` with distributed validator BLS public key shares.

In the case of a solo operator running a cluster, the [`charon create cluster`](./charon-cli-reference.md#create-a-full-cluster-locally) command combines both steps into one and just outputs the final `cluster-lock.json` without a DKG step.

## Cluster Definition File

The `cluster-definition.json` is provided as input to the DKG which generates keys and the `cluster-lock.json` file.

### Using the CLI

The [`charon create dkg`](./charon-cli-reference.md#creating-the-configuration-for-a-dkg-ceremony) command is used to create the `cluster-definition.json` file which is used as input to `charon dkg`.

The schema of the `cluster-definition.json` is defined as:

```json
{
  "name": "best cluster", // Optional cosmetic identifier
  "operators": [
    {
      "address": "0x123..abfc", // ETH1 address of the operator
      "enr": "enr://abcdef...12345", // Charon node ENR
      "config_signature": "0x123456...abcdef", // EIP712 Signature of config_hash by ETH1 address priv key
      "enr_signature": "0x123654...abcedf" // EIP712 Signature of ENR by ETH1 address priv key
    }
  ],
  "uuid": "1234-abcdef-1234-abcdef", // Random unique identifier.
  "version": "v1.2.0", // Schema version
  "timestamp": "2022-01-01T12:00:00+00:00", // Creation timestamp
  "num_validators": 100, // Number of distributed validators to be created in cluster-lock.json
  "threshold": 3, // Optional threshold required for signature reconstruction
  "fee_recipient_address": "0x123..abfc", // ETH1 fee_recipient address
  "withdrawal_address": "0x123..abfc", // ETH1 withdrawal address
  "dkg_algorithm": "foo_dkg_v1", // Optional DKG algorithm for key generation
  "fork_version": "0x00112233", // Chain/Network identifier
  "config_hash": "abcfde...acbfed", // Hash of the static (non-changing) fields
  "definition_hash": "abcdef...abcedef" // Final hash of all fields
}
```

### Using the DV Launchpad

- A [`leader/creator`](docs/int/quickstart/group/index.md), that wishes to co-ordinate the creation of a new Distributed Validator Cluster navigates to the launchpad and selects "Create new Cluster"
- The `leader/creator` uses the user interface to configure all of the important details about the cluster including:
  - The `Withdrawal Address` for the created validators
  - The `Fee Recipient Address` for block proposals if it differs from the withdrawal address
  - The number of distributed validators to create
  - The list of participants in the cluster specified by Ethereum address(/ENS)
  - The threshold of fault tolerance required
- These key pieces of information form the basis of the cluster configuration. These fields (and some technical fields like DKG algorithm to use) are serialised and merklised to produce the definition's `cluster_definition_hash`. This merkle root will be used to confirm that their is no ambiguity or deviation between definitions when they are provided to charon nodes.
- Once the `leader/creator` is satisfied with the configuration they publish it to the launchpad's data availability layer for the other participants to access. (For early development the launchpad will use a centralised backend db to store the cluster configuration. Near production, solutions like IPFS or arweave may be more suitable for the long term decentralisation of the launchpad.)

## Cluster Lock File

The `cluster-lock.json` has the following schema:

```json
{
  "cluster_definition": {...},                              // Cluster definiition json, identical schema to above,
  "distributed_validators": [                               // Length equal to cluster_definition.num_validators.
    {
      "distributed_public_key":  "0x123..abfc",             // DV root pubkey
      "public_shares": [ "abc...fed", "cfd...bfe"],         // Length equal to cluster_definition.operators
      "fee_recipient": "0x123..abfc"                        // Defaults to withdrawal address if not set, can be edited manually
    }
  ],
  "lock_hash": "abcdef...abcedef",                          // Config_hash plus distributed_validators
  "signature_aggregate": "abcdef...abcedef"                 // BLS aggregate signature of the lock hash signed by each DV pubkey.
}
```
