---
sidebar_position: 2
description: Combine distributed validator keyshares
---

# Combine distributed validator keyshares into an Ethereum validator key

:::caution
Combining keyshares into an Ethereum validator key is a security hazard, and can potentially get you slashed.

Only combine keyshares for a cluster that's about to be shut down.
:::

## Pre-requisites

- Ensure you have all the `.charon` directories of all the cluster node operators
- Ensure you have [docker](https://docs.docker.com/engine/install/) installed.
- Make sure `docker` is running before executing the commands below.

## Step 1. Set up the key combination directory tree

Rename each cluster node operator `.charon` directory in a different way.

We suggest to name them in a clear and distinct way, to avoid confusion.

At the end of this process, you should have a tree like this:

```shell
$ tree ./validators-to-be-combined

validators-to-be-combined/
├── node0
│   ├── charon-enr-private-key
│   ├── cluster-lock.json
│   ├── deposit-data.json
│   └── validator_keys
│       ├── keystore-0.json
│       ├── keystore-0.txt
│       ├── keystore-1.json
│       └── keystore-1.txt
├── node1
│   ├── charon-enr-private-key
│   ├── cluster-lock.json
│   ├── deposit-data.json
│   └── validator_keys
│       ├── keystore-0.json
│       ├── keystore-0.txt
│       ├── keystore-1.json
│       └── keystore-1.txt
├── node2
│   ├── charon-enr-private-key
│   ├── cluster-lock.json
│   ├── deposit-data.json
│   └── validator_keys
│       ├── keystore-0.json
│       ├── keystore-0.txt
│       ├── keystore-1.json
│       └── keystore-1.txt
└── node3
    ├── charon-enr-private-key
    ├── cluster-lock.json
    ├── deposit-data.json
    └── validator_keys
        ├── keystore-0.json
        ├── keystore-0.txt
        ├── keystore-1.json
        └── keystore-1.txt
```

:::caution
Make sure to never mix the various `.charon` directories one with another!

Doing can potentially mix the keyshares in an unsupported way, and the combination process will fail.
:::

## Step 2. Combine the keyshares

Run the following command:

```sh
# Create a distributed validator cluster
docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:latest combine --cluster-dir /opt/charon/validators-to-be-combined
```

This command will create one subdirectory for each validator private key that has been combined, named after its public key.
 
```shell
$ tree ./validators-to-be-combined

validators-to-be-combined/
├── 0x822c5310674f4fc4ec595642d0eab73d01c62b588f467da6f98564f292a975a0ac4c3a10f1b3a00ccc166a28093c2dcd
│   └── validator_keys
│       ├── keystore-0.json
│       └── keystore-0.txt
├── 0x8929b4c8af2d2eb222d377cac2aa7be950e71d2b247507d19b5fdec838f0fb045ea8910075f191fd468da4be29690106
│   └── validator_keys
│       ├── keystore-0.json
│       └── keystore-0.txt
├── node0
│   ├── charon-enr-private-key
│   ├── cluster-lock.json
│   ├── deposit-data.json
│   └── validator_keys
│       ├── keystore-0.json
│       ├── keystore-0.txt
│       ├── keystore-1.json
│       └── keystore-1.txt
├── node1
│   ├── charon-enr-private-key
│   ├── cluster-lock.json
│   ├── deposit-data.json
│   └── validator_keys
│       ├── keystore-0.json
│       ├── keystore-0.txt
│       ├── keystore-1.json
│       └── keystore-1.txt
├── node2
│   ├── charon-enr-private-key
│   ├── cluster-lock.json
│   ├── deposit-data.json
│   └── validator_keys
│       ├── keystore-0.json
│       ├── keystore-0.txt
│       ├── keystore-1.json
│       └── keystore-1.txt
└── node3
    ├── charon-enr-private-key
    ├── cluster-lock.json
    ├── deposit-data.json
    └── validator_keys
        ├── keystore-0.json
        ├── keystore-0.txt
        ├── keystore-1.json
        └── keystore-1.txt
```

We can verify that the directory names are correct by looking at the lock file:

```shell
$ jq .distributed_validators[].distributed_public_key  validators-to-be-combined//node0/cluster-lock.json
"0x822c5310674f4fc4ec595642d0eab73d01c62b588f467da6f98564f292a975a0ac4c3a10f1b3a00ccc166a28093c2dcd"
"0x8929b4c8af2d2eb222d377cac2aa7be950e71d2b247507d19b5fdec838f0fb045ea8910075f191fd468da4be29690106"

```

:::info

The generated private keys are in the standard [EIP-2335](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-2335.md) format, and can be imported in any Ethereum validator client that supports it.

:::

## Feedback

If you have gotten this far through the process, and whether you succeeded or failed at recombining a set of keyshares, we would like to hear your feedback on the process and where you encountered difficulties. Please let us know by joining and posting on our [Discord](https://discord.gg/n6ebKsX46w). Also, feel free to add issues to our [GitHub repos](https://github.com/ObolNetwork).