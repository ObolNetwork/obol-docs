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

### What's with the name Charon?

[Charon](https://www.theoi.com/Khthonios/Kharon.html) [kharon] is the Ancient Greek Ferryman of the Dead. He was tasked with bringing people across the Acheron river to the underworld. His fee was one Obol coin, placed in the mouth of the deceased. This tradition of placing a coin or Obol in the mouth of the deceased continues to this day across the Greek world.

### What are the hardware requirements for running a Charon node?
Charon alone uses negligible disk space of not more than a few MBs. However, if you are running your consensus client and execution client on the same server as charon, then you will typically need the same hardware as running a full Ethereum node: 

At minimum:
- A CPU with 2+ physical cores (or 4 vCPUs)
- 8GB RAM
- >1.5TB free SSD disk space (for mainnet)
- 10mb/s internet bandwidth

Recommended specifications:
- A CPU with 4+ physical cores
- 16GB+ RAM
- >2TB free disk on a high performance SSD (e.g. NVMe)
- 25mb/s internet bandwidth

For more hardware considerations, check out the [ethereum.org guides](https://ethereum.org/en/developers/docs/nodes-and-clients/run-a-node/#environment-and-hardware) which explores various setups and trade-offs, such as running the node locally or in the cloud.

## Migrating existing validators

### Can I keep my existing validator client?

Yes. Charon sits as a middleware between a validator client and it's beacon node. All validators that implement the standard REST API will be supported, along with all popular client delivery software such as Dappnode [packages](https://dappnode.github.io/explorer/#/), Rocket Pool's [smart node](https://github.com/rocket-pool/smartnode), StakeHouse's [wagyu](https://github.com/stake-house/wagyu), and Stereum's [node launcher](https://stereum.net/development/#roadmap).

### Can I migrate my existing validator into a distributed validator?

It is possible to split an existing validator keystore into a set of key shares suitable for a distributed validator cluster, but it is a trusted distribution process which is not ideal compared to setting up a fresh cluster using a DKG ceremony where no operator ever has the full private key. Furthermore, if the old staking system is not safely shut down, it could pose a risk of slashing by double signing alongside the new distributed validator, please use extreme caution if migrating a validator, and make sure to wait at least three epochs offline to reduce the risk of double signing or surround voting.

In an ideal scenario, a distributed validator's private key should never exist in full in a single location.

You can split an existing EIP-2335 keystore for a validator to migrate it to a distributed validator architecture with the `charon create cluster --split-existing-keys` command documented [here](docs/charon/charon-cli-reference.md#create-a-full-cluster-locally).

### Can I migrate an existing Charon node to a new machine?

It is possible to migrate your Charon node to another machine running the same config by moving the `.charon` folder with its contents to your new machine. Make sure the EL and CL on the new machine are synced before proceeding to the move to minimize downtime. 

## Distributed Key Generation

### What are the min and max numbers of operators for a Distributed Validator?

Currently, the minimum is 4 operators with a threshold of 3.

The threshold (aka quorum) corresponds to the minimum numbers of operators that need to be active for the validator(s) to be able to perform its duties. It is defined by the following formula `n-(ceil(n/3)-1)`. We strongly recommend using this default threshold in your DKG as it maximises liveness while maintaining BFT safety. Setting a 4 out of 4 cluster for example, would make your validator more vulnerable to going offline instead of less vulnerable. You can check the recommended threshold values for a cluster [here](../key-concepts.md#distributed-validator-threshold).

## Debugging Errors in Logs 

You can check if the containers on your node are outputting errors by running `docker compose logs` on a machine with a running cluster.

Diagnose some common errors and view their resolutions [here](./errors.mdx).

## Self-Host a Relay

If you are experiencing connectivity issues with the Obol hosted relays, or you want to improve your clusters latency and decentralization, you can opt to host your own relay on a separate open and static internet port.

```
# Figure out your public IP
curl v4.ident.me

# Clone the repo and cd into it.
git clone https://github.com/ObolNetwork/charon-distributed-validator-node.git

cd charon-distributed-validator-node

# Replace 'replace.with.public.ip.or.hostname' in relay/docker-compose.yml with your public IPv4 or DNS hostname # Replace 'replace.with.public.ip.or.hostname' in relay/docker-compose.yml with your public IPv4 or DNS hostname

nano relay/docker-compose.yml

docker compose -f relay/docker-compose.yml up
```

Test whether the relay is publicly accessible. This should return an ENR:
`curl http://replace.with.public.ip.or.hostname:3640/enr`

Ensure the ENR returned by the relay contains the correct public IP and port by decoding it with https://enr-viewer.com/.

Configure **ALL** charon nodes in your cluster to use this relay:

- Either by adding a flag: `--p2p-relays=http://replace.with.public.ip.or.hostname:3640/enr`
- Or by setting the environment variable: `CHARON_P2P_RELAYS=http://replace.with.public.ip.or.hostname:3640/enr`

Note that a local `relay/.charon/charon-enr-private-key` file will be created next to `relay/docker-compose.yml` to ensure a persisted relay ENR across restarts.
