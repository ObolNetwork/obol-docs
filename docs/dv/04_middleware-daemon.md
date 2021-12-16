---
description: Deployment Architecture for a Distributed Validator Client
---

# Middleware Daemon

The Charon daemon serves as a consensus layer API middleware, and connects to the Obol peer-to-peer network to discover its counterparty charon nodes.

### Operation

The middleware strives to be stateless and statically configured through 777 file systems. The lack of a control-plane API for online reconfiguration is deliberate to keep operations simple and secure by default.

A single instance of the middleware can participate in multiple distributed validator clusters. The amount of validators per middleware is bound by risk management and hardware limits (CPU, memory, bandwidth), but there is no hardcoded limit.

The daemon offers a config reload instruction through Unix signals which is useful to join or leave Obol clusters on-the-fly without interruption.

The _charon_ package will initially be available as a Docker image and through binary builds. An APT package with a systemd integration is planned.

### Initialization

An instance of Charon requires the following pieces of information at minimum in order to operate.

- A DV cluster manifest file in the to be confirmed EIP format. This file contains the required information a DV client needs for joining a Distributed Validator Cluster. This file includes:
  - The total number of shares of the key and the required threshold for reconstruction.
  - An SECP256K1 key pair in an ENR format for Obol consensus messages, this key is signed by the corresponding operators validator key share to legitimise it.
  - A list of all ENR public keys of other operators participating in the cluster.
  - The group public keys representing each distributed validator in the cluster to the Ethereum network.
- Access to an Ethereum Consensus API
  - It is recommended to run at least one Ethereum Consensus client for each Charon middleware client.
  - Any [compliant](https://ethereum.github.io/beacon-APIs/) Beacon node implementation should work – try to establish client diversity.
  - These consensus clients need to be connected to at least one Ethereum Execution clients for block production.
- The public IP address and port the charon client will operate on
  - For now, we make the (naive) assumption that the address will be static.
  - Charon will attempt to auto-discover its address on first use by enumerating network interfaces and using [STUN](https://datatracker.ietf.org/doc/html/rfc5389).
