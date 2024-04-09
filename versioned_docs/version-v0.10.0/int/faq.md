---
sidebar_position: 10
description: Frequently asked questions
---

# Frequently asked questions

## General

### Does Obol have a token?

No. Distributed validators use only ether.

### Where can I learn more about Distributed Validators?

Have you checked out our [blog site](https://blog.obol.tech) and [twitter](https://twitter.com/ObolNetwork) yet? Maybe join our [discord](https://discord.gg/obol) too.

### What's with the name Charon?

[Charon](https://www.theoi.com/Khthonios/Kharon.html) is the Ancient Greek Ferryman of the Dead. He was tasked with bringing people across the Acheron river to the underworld. His fee was one Obol coin, placed in the mouth of the deceased. This tradition of placing a coin or Obol in the mouth of the deceased continues to this day across the Greek world.

### What are the hardware requirements for running a Charon node?

It should be the same as running a normal post-merge Ethereum node. It would be easiest with 16GB of RAM, 500GB of disk and 8MB/s of internet bandwidth, though lower resourced machines can probably be used with some effort.

Charon alone uses negligible disk space of not more than a few MBs. However if you are running your consensus client and execution client on the same server with charon then you will need 500GB of free SSD disk space (assuming you are running a testnet chain, mainnet requires 1TB or more disk space ideally).

For now, Teku & Lighthouse clients are packaged within the docker compose file provided in the [quickstart guides](./quickstart/), so you don't have to install anything else to run a cluster. Just make sure you give them some time to sync once you start running your node.

## Migrating existing validators

### Can I keep my existing validator client?

Yes. Charon sits as a middleware between a validator client and it's beacon node. All validators that implement the standard REST API will be supported, along with all popular client delivery software such as DAppNode [packages](https://dappnode.github.io/explorer/#/), Rocket Pool's [smart node](https://github.com/rocket-pool/smartnode), StakeHouse's [wagyu](https://github.com/stake-house/wagyu), and Stereum's [node launcher](https://stereum.net/development/#roadmap).

### Can I migrate my existing validator into a distributed validator?

It is possible to split an existing validator keystore into a set of key shares suitable for a distributed validator cluster, but it is a trusted distribution process which is not ideal compared to setting up a fresh cluster using a DKG ceremony where no operator ever has the full private key. Furthermore, if the old staking system is not safely shut down, it could pose a risk of slashing by double signing alongside the new distributed validator, please use extreme caution if migrating a validator, and make sure to wait at least three epochs offline to reduce the risk of double signing or surround voting.

In an ideal scenario, a distributed validator's private key should never exist in full in a single location.

You can split an existing EIP-2335 keystore for a validator to migrate it to a distributed validator architecture with the `charon create cluster --split-existing-keys` command documented [here](../dv/09_charon_cli_reference.md#create-a-full-cluster-locally).

## ENR & Keys

### What is an ENR?

An ENR is shorthand for an [Ethereum Node Record](https://eips.ethereum.org/EIPS/eip-778). It is a way to represent a node on a public network, with a reliable mechanism to update its information. At Obol we use ENRs to identify charon nodes to one another such that they can form clusters with the right charon nodes and not impostors.

ENRs have private keys they use to sign updates to the [data contained](https://enr-viewer.com/) in their ENR. This private key is by default found at `.charon/charon-enr-private-key`, and should be kept secure, and not checked into version control. An ENR looks something like this:

```
enr:-JG4QAgAOXjGFcTIkXBO30aUMzg2YSo1CYV0OH8Sf2s7zA2kFjVC9ZQ_jZZItdE8gA-tUXW-rWGDqEcoQkeJ98Pw7GaGAYFI7eoegmlkgnY0gmlwhCKNyGGJc2VjcDI1NmsxoQI6SQlzw3WGZ_VxFHLhawQFhCK8Aw7Z0zq8IABksuJEJIN0Y3CCPoODdWRwgj6E
```

### How do I get my ENR if I want to generate it again?

- `cd` to the directory where your `.charon` folder is located (ex: `cd /path/to/charon-distributed-validator-node/`)
- Run `docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:latest enr`. This prints the ENR to your console.

### What do I do if lose my charon-enr-private-key?

For now, ENR rotation/replacement is not supported, it will be supported in a future release. Therefore, it's advised to always keep a backup of your private-key in a secure location (e.g. a USB Flash drive)

### I have run the command in Step 1 of the [quickstart](./quickstart/quickstart-group#step-1-creating-and-backing-up-a-private-key-for-charon) but I can't find the created private key anywhere.

- The `charon-enr-private-key` is generated inside a hidden folder `.charon`.
- To view it, run `ls -al` in your terminal.
- You can then copy the key to your `~/Downloads` folder for easy access by running `cp .charon/charon-enr-private-key ~/Downloads`. (This copy command will be different for Windows)
- Alternatively, if you are on macOS, press `Cmd + Shift + .` to make the `.charon` folder visible in the finder application.

## Distributed Key Generation

### How to run a successful DKG?

- Here is a helpful [video walkthrough](https://www.youtube.com/watch?v=94Pkovp5zoQ&ab_channel=ObolNetwork).
- You can also use [this worksheet](https://docs.google.com/spreadsheets/d/1A-ncCgasaRZwRPlvrUqRFovNaUTOksNuQLFOqGCaxf8/edit#gid=0) to easily follow the steps it outlines.

### What are the min and max numbers of operators for a Distributed Validator?

Currently, the minimum is 4 operators with a threshold of 3.

The threshold (aka quorum) corresponds to the minimum numbers of operators that need to be active for the validator(s) to be able to perform its(their) duties. It is defined by the following formula `n-(ceil(n/3)-1)`. We strongly recommend using this default threshold in your DKG as it maximises liveness while maintaing BFT safety. Setting a 4 out of 4 cluster for example, would make your validator more vulnerable to going offline instead of less vulnerable. You can check threshold value in your [`cluster-lock.json`](../dv/08_distributed-validator-cluster-manifest.md#cluster-lock-file) file.

The maximum, honest answer, we don't know yet! It will depend heavily on your nodes network latency to talk to one another. The CLI caps out at 31 for now for a sane maximum. In practice, 10 nodes allows 3 nodes to fail at any one time, and probably is the largest cluster you should attempt for now unless you you're really experimenting 😅.

By the way, the more operators, the longer the DKG, but don't worry, there is no limit in the timing for connecting nodes during the DKG.

## Debugging Errors in Logs 

You can check if the containers on your node are outputting errors by running `docker-compose logs --tail 100 -f` on a machine with a running cluster.

Diagnose some common errors and view their resolutions [here](https://github.com/ObolNetwork/charon-distributed-validator-node#faqs).
