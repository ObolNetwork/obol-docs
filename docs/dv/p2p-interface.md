---
description: Connectivity between Charon instances
---

# P2P interface

The Charon P2P interface loosely follows the [Eth2 beacon P2P interface](https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/p2p-interface.md).

* Transport: TCP over IPv4/IPv6.&#x20;
* Handshake: [noise-libp2p](https://github.com/libp2p/specs/tree/master/noise) with `secp256k1` keys.
  * Nodes must have their keys authorized in a [cluster manifest](distributed-validator-cluster-manifest.md) in order for the handshake to succeed.&#x20;
