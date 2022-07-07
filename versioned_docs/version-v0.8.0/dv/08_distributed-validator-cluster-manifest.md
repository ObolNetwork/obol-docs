---
description: Documenting a Distributed Validator Cluster in a standardised file format
---

# Cluster Configuration

:::caution
These cluster definition and cluster lock files are a work in progress. The intention is for the files to be standardised for operating distributed validators via the [EIP process](https://eips.ethereum.org/) when appropriate.
:::

This document describes the configuration options for running a charon client (or cluster) locally or in production.

## Cluster Configuration Files

A charon cluster is configured in two steps:
- `cluster-definition.json` which defines the intended cluster configuration before keys have been created in a distributed key generation ceremony.
- `cluster-lock.json` which includes and extends `cluster-definition.json` with distributed validator BLS public key shares.

The `charon create dkg` command is used to create `cluster-definition.json` file which is used as input to `charon dkg`.

The `charon create cluster` command combines both steps into one and just outputs the final `cluster-lock.json` without a DKG step.

The schema of the `cluster-definition.json` is defined as:
```json
{
  "name": "best cluster",                       // Optional cosmetic identifier
  "operators": [
    {
      "address": "0x123..abfc",                 // ETH1 address of the operator
      "enr": "enr://abcdef...12345",            // Charon node ENR
      "nonce": 1,                               // Nonce (incremented each time the ENR is added/signed)
      "config_signature": "123456...abcdef",    // EIP712 Signature of config_hash by ETH1 address priv key
      "enr_signature": "123654...abcedf"        // EIP712 Signature of ENR by ETH1 address priv key
    }
  ],
  "uuid": "1234-abcdef-1234-abcdef",            // Random unique identifier.
  "version": "v1.0.0",                          // Schema version
  "num_validators": 100,                        // Number of distributed validators to be created in cluster.lock
  "threshold": 3,                               // Optional threshold required for signature reconstruction
  "fee_recipient_address":"0x123..abfc",        // ETH1 fee_recipient address
  "withdrawal_address": "0x123..abfc",          // ETH1 withdrawal address
  "dkg_algorithm": "foo_dkg_v1" ,               // Optional DKG algorithm for key generation
  "fork_version": "0x00112233",                 // Chain/Network identifier
  "config_hash": "abcfde...acbfed",             // Hash of the static (non-changing) fields
  "definition_hash": "abcdef...abcedef"         // Final Hash of all fields
}
```

The above `cluster-definition.json` is provided as input to the DKG which generates keys and the `cluster-lock.json` file.

The `cluster-lock.json` has the following schema:
```json
{
  "cluster_definition": {...},                              // Cluster definiition json, identical schema to above,
  "distributed_validators": [                               // Length equaled to num_validators.
    {
      "distributed_public_key":  "0x123..abfc",             // DV root pubkey
      "public_shares": [ "oA8Z...2XyT", "g1q...icu"],       // Public Key Shares
      "fee_recipient": "0x123..abfc"                        // Defaults to withdrawal address if not set, can be edited manually
    }
  ],
  "lock_hash": "abcdef...abcedef",                          // Config_hash plus distributed_validators
  "signature_aggregate": "abcdef...abcedef"                 // BLS aggregate signature of the lock hash signed by each DV pubkey.
}
```
