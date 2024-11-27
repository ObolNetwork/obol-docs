---
sidebar_position: 2
description: Centralization Risks and mitigation
---

# Centralization Risks and Mitigation

## Risk: Obol hosting the relay infrastructure

**Mitigation**: Self-host a relay.

One of the risks associated with Obol hosting the [LibP2P relays](../../learn/charon/networking.mdx) infrastructure allowing peer discovery is that if Obol-hosted relays go down, peers won't be able to discover each other and perform the DKG. To mitigate this risk, external organizations and node operators can consider self-hosting a relay. This way, if Obol's relays go down, the clusters can still operate through other relays in the network. Ensure that all nodes in the cluster use the same relays, or they will not be able to find each other if they are connected to different relays.

The following non-Obol entities run relays that you can consider adding to your cluster (you can have more than one per cluster, see the `--p2p-relays` flag of [`charon run`](../../learn/charon/charon-cli-reference.md#the-run-command)):


| Entity    | Relay URL                                   |
|-----------|---------------------------------------|
| [DSRV](https://www.dsrvlabs.com/)      | https://charon-relay.dsrvlabs.dev     |
| [Infstones](https://infstones.com/) | https://obol-relay.infstones.com/ |
| [Hashquark](https://www.hashquark.io/) | https://relay-2.prod-relay.721.land/  |
| [Figment](https://figment.io/)   | https://relay-1.obol.figment.io/ |
| [Node Guardians](https://nodeguardians.io/)   | https://obol-relay.nodeguardians.io/ |

## Risk: Obol being able to update Charon code

**Mitigation**: Pin specific docker versions or compile from source on a trusted commit.

Another risk associated with Obol is the Labs team having the ability to update the [Charon code](https://github.com/ObolNetwork/charon) used by node operators within DV clusters, which could introduce vulnerabilities or malicious code. To mitigate this risk, operators can consider pinning specific versions of the Docker image or git repo that have been [thoroughly tested](../security/overview.md#list-of-security-audits-and-assessments) and accepted by the network. This would ensure that any updates are carefully vetted and reviewed by the community, and only introduced into a running cluster gradually. The labs team will strive to communicate the security or operational impact any Charon update entails, giving operators the chance to decide whether they want potential performance or quality of experience improvements, or whether they remain on a trusted version for longer.

## Risk: Obol hosting the DV Launchpad

**Mitigation**: Use [`create cluster`](../../learn/charon/charon-cli-reference.md#the-create-command) or [`create dkg`](../../learn/charon/charon-cli-reference.md#creating-the-configuration-for-a-dkg-ceremony) locally and distribute the files manually.

Hosting the first Charon frontend, the [DV Launchpad](../../learn/intro/launchpad.md), on a centralized server could create a single point of failure, as users would have to rely on Obol's server to access the protocol. This could limit the decentralization of the protocol and could make it vulnerable to attacks or downtime. Obol hosting the launchpad on a decentralized network, such as IPFS is a first step but not enough. This is why the Charon code is open-source and contains a CLI interface to interact with the protocol locally.

To mitigate the risk of launchpad failure, consider using the `create cluster` or `create dkg` commands locally and distributing the key shares files manually.

## Risk: Obol going bust/rogue

**Mitigation**: Use key recovery.

The final centralization risk associated with Obol is the possibility of the company going bankrupt or acting maliciously, which would lead to a loss of control over the network and potentially cause damage to the ecosystem. To mitigate this risk, Obol has implemented a key recovery mechanism. This would allow the clusters to continue operating and to retrieve full private keys even if Obol is no longer able to provide support.

A guide to recombine key shares into a single private key can be accessed [here](../advanced/quickstart-combine.md).
