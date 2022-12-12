---
description: Connectivity between Charon instances
sidebar_position: 5
---

# P2P interface

The Charon P2P interface loosely follows the [Eth2 beacon P2P interface](https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/p2p-interface.md).

- Transport: TCP over IPv4/IPv6.
- Identity: [Ethereum Node Records](https://eips.ethereum.org/EIPS/eip-778). 
- Handshake: [noise-libp2p](https://github.com/libp2p/specs/tree/master/noise) with `secp256k1` keys.
  - Each charon client must have their ENR public key authorized in a [`cluster-lock.json`](./cluster-configuration) file in order for the client handshake to succeed.
- Discovery: [Discv5](https://github.com/ethereum/devp2p/blob/master/discv5/discv5.md).
