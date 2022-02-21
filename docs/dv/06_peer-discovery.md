---
description: How do distributed validator clients communicate with one another securely?
---

# Peer Discovery

How do you identify legitimate consensus messages between distributed validator clients in a manner that is resilient to spoofing or griefing?

Middleware clients need to be able to authenticate one another. We achieve this by giving each middleware client something they can use that other clients in the cluster will be able to recognise as legitimate.

At the end of a [DVK generation ceremony](./02_validator-creation.md#stages-of-creating-a-distributed-validator), each operator will have a number of files outputted by their CLI program/browser based on how many distributed validators the group chose to generate together. These files are:

- **Validator keystore(s):** These files will be loaded into the operator's validator client and each file represents one share of a distributed validator.
- **A distributed validator cluster manifest:** This file contains the configuration a distributed validator client like charon needs to join a cluster capable of operating a number of distributed validators.

### Authenticating a Distributed Validator Client

So how does the authentication of these DV clients work?

During the final stage of the DVK ceremony, after the validator key shares are generated for each operator; the ceremony program will generate a random SECP256K1 key pair to be used by a charon client for its ENR. The program will sign this ENR public key with every keystore this validator will service, to indicate to all other operators that this randomly generated key is directly authorised by the current operator to communicate at the consensus layer for their distributed validator key shares.

This sensitive ENR private key, and the general configuration of the distributed validator cluster will be the outputs of a DVK ceremony known shorthand as a `cluster manifest`.

This manifest file will be made available to a charon client, and the validator key stores will be made available to the configured validator client. When charon starts up and ingests its configuration from the manifest file, it will use the provided keypair for its ENR. If its configured IP address is different from what is embedded in the ENR to begin with, it reissues the ENR as needed and begins to establish connections with the other operators in the cluster as recorded in the manifest file.

#### Node database

Obol DV clusters are permissioned networks with a fully meshed topology. Each node will permanently store the ENRs of all other known Obol nodes in their node database.

Unlike with node databases of public permissionless networks (such as [Go-Ethereum](https://pkg.go.dev/github.com/ethereum/go-ethereum@v1.10.13/p2p/enode#DB)), there is no inbuilt eviction logic – the database will keep growing indefinitely.

#### Node Discovery

In early versions of charon, operator nodes will be seeded in the node database from cluster manifest files. Updates to the node database can be made in realtime as a charon client receives messages from these authorised ENRs containing a higher nonce value than present in our node database. Usually representing an IP address update.

In future, charon is intended to discover counterparty nodes using the [discv5](https://github.com/ethereum/devp2p/blob/master/discv5/discv5.md) protocol. All DVCs connecting to the Obol Network will join a public node discovery peer-to-peer network to find the latest ENR records for their DV peers.

This dynamic discovery serves two purposes:

- Bootstrapping a node database in the event of data loss when peers no longer listen on the IP addresseses specified in the manifest and need to be located.
- Periodically refreshing ENRs to follow IP address changes, e.g. AWS EC2 IPs or NAT on residential broadband.
