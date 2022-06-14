---
description: How do distributed validator clients communicate with one another securely?
---

# Peer discovery

In order to maintain security and sybil-resistance, charon clients need to be able to authenticate one another. We achieve this by giving each charon client a public/private key pair that they can sign with such that other clients in the cluster will be able to recognise them as legitimate no matter which IP address they communicate from.

At the end of a [DKG ceremony](./02_validator-creation.md#stages-of-creating-a-distributed-validator), each operator will have a number of files outputted by their charon client based on how many distributed validators the group chose to generate together.

These files are:

- **Validator keystore(s):** These files will be loaded into the operator's validator client and each file represents one share of a Distributed Validator.
- **A distributed validator cluster lock file:** This `cluster-lock.json` file contains the configuration a distributed validator client like charon needs to join a cluster capable of operating a number of distributed validators.
- **Validator deposit data:** This file is used to activate one or more distributed validators on the Ethereum network. 

### Authenticating a distributed validator client

Before a DKG process begins, all operators must run `charon create enr`, or just `charon enr`, to create or get the Ethereum Node Record for their client. These ENRs are included in the configuration of a Distributed Key Generation ceremony. 

The file that outlines a DKG ceremony is known as a [`cluster-definition`](./08_distributed-validator-cluster-manifest.md) file. This file is passed to `charon dkg` which uses it to create private keys, a cluster lock file and deposit data for the configured number of distributed validators. The cluster-lock file will be made available to `charon run`, and the validator key stores will be made available to the configured validator client. 

When `charon run` starts up and ingests its configuration from the `cluster-lock.json` file, it checks if it's observed/configured public IP address differs from what is listed in the lock file. If it is different; it updates the IP address, increments the nonce of the ENR and reissues it before beginning to establish connections with the other operators in the cluster.

#### Node database

Distributed Validator Clusters are permissioned networks with a fully meshed topology. Each node will permanently store the ENRs of all other known Obol nodes in their node database.

Unlike with node databases of public permissionless networks (such as [Go-Ethereum](https://pkg.go.dev/github.com/ethereum/go-ethereum@v1.10.13/p2p/enode#DB)), there is no inbuilt eviction logic – the database will keep growing indefinitely. This is acceptable as the number of operators in a cluster is expected to stay constant. Mutable cluster operators will be introduced in future. 

#### Node discovery

At boot, a charon client will ingest it's configured `cluster-lock.json` file. This file contains a list of ENRs of the client's peers. The client will attempt to establish a connection with these peers, and will perform a handshake if they connect to establish an end to end encrypted communication channel between the clients. 

However, the IP addresses within an ENR can become stale. This could result in a cluster not being able to establish a connection with all nodes. To be tolerant to operator IP addresses changing, charon also supports the [discv5](https://github.com/ethereum/devp2p/blob/master/discv5/discv5.md) discovery protocol. This allows a charon client to find another operator that might have moved IP address, but still retains the same ENR private key.


