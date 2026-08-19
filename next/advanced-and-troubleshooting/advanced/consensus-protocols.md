# Consensus Protocols

Before a distributed validator cluster can sign anything, its nodes must agree on exactly what they are signing. Charon's consensus layer is the component responsible for that agreement, and it is designed to support more than one consensus protocol.

## Overview

Every duty a distributed validator performs (attesting, proposing a block, and so on) requires the operators in a cluster to independently arrive at the same view of the duty data before they produce their threshold signature shares. Without this step, different nodes could sign different data for the same duty, which would produce an invalid aggregate signature or, worse, contribute to a slashable offense.

Charon uses a Byzantine fault-tolerant consensus protocol to solve this problem: as long as a threshold of nodes are online and honest, the cluster reaches agreement on duty data even if some nodes are offline, slow, or malicious.

Historically, Charon has supported a single consensus protocol, QBFT v2.0. Charon's consensus layer now exposes a pluggable interface, which means a cluster can run different consensus protocols as long as they are available and accepted by a majority of the cluster. A cluster can also run multiple consensus protocols at the same time, for example, using one protocol for duty consensus and another for internal coordination.

## QBFT: The Default Consensus Protocol

QBFT is an implementation of the Istanbul Byzantine Fault Tolerant (BFT) consensus algorithm, and it has been Charon's consensus protocol since early releases. QBFT v2.0 remains present in every Charon version and cannot be deprecated, because it serves two purposes:

- It runs the Priority protocol, described below, which the cluster uses to agree on which consensus protocol to use.
- It acts as the fallback protocol whenever no other protocol has been selected by the cluster.

Because every node is guaranteed to support QBFT v2.0, it is effectively the cluster's default and safety-net protocol.

## How Protocol Selection Works

All nodes in a cluster must agree on the same consensus protocol, otherwise consensus fails entirely. Each node has its own list of preferred protocols, in order of precedence, based on its configuration and software version. Charon resolves these individual preferences into a single cluster-wide choice using a dedicated protocol called Priority.

### The Priority Protocol

The Priority protocol itself runs on top of QBFT v2.0. It takes each node's ordered list of preferred protocols as input, for example:

```json
[
  "/charon/consensus/hotstuff/1.0.0",
  "/charon/consensus/abft/2.0.0",
  "/charon/consensus/abft/1.0.0",
  "/charon/consensus/qbft/2.0.0"
]
```

The output is the common subset of protocols supported by a majority of nodes, respecting the original order of precedence, for example:

```json
[
  "/charon/consensus/abft/1.0.0",
  "/charon/consensus/qbft/2.0.0"
]
```

Because every node always supports QBFT v2.0, it is guaranteed to remain the fallback entry at the bottom of this list, so the Priority protocol can never produce an empty result. The Priority protocol runs once per epoch, during the epoch's last slot. If a different protocol rises to the top of the list, for example, because enough nodes have upgraded, Charon switches the whole cluster over to that protocol starting in the next epoch.

### Protocol Mismatch and Fallback Behavior

A node's preferred protocols come from two sources, applied in order: the cluster configuration and, with higher precedence, the node's own CLI flag. Until the Priority protocol reaches agreement on a shared protocol, the cluster falls back to QBFT v2.0 for all duties. This means a cluster is never blocked from performing duties while nodes negotiate or upgrade to a new consensus protocol.

## Configuring a Preferred Consensus Protocol

A cluster creator can set a preferred consensus protocol for the whole cluster with the `consensus_protocol` field in the cluster definition file. This field is optional. When it is not set, the cluster definition does not influence protocol selection.

A node operator can also set a preferred protocol for their own node with the [`--consensus-protocol`](../../learn/charon/charon-cli-reference.md) flag on `charon run`, `charon create cluster`, and `charon create dkg`. This flag is also optional, and it takes precedence over the cluster definition file for that node.

In both cases, specify the protocol family name only, for example, `abft`, rather than a fully qualified protocol ID. The exact version is determined by the Priority protocol, which always tries to select the latest available version. To list all consensus protocols available in a given Charon build, along with their versions, run `charon version --verbose`.

:::info
Setting a preferred protocol expresses a preference, not a guarantee. The cluster only switches to a protocol once a majority of nodes support it, as determined by the Priority protocol.
:::

## Observability

The following consensus metrics are exposed by Charon:

- `core_consensus_decided_rounds`.
- `core_consensus_decided_leader_index`.
- `core_consensus_duration_seconds`.
- `core_consensus_error_total`.
- `core_consensus_timeout_total`.

Each of these metrics carries a `protocol` label, which lets operators distinguish consensus activity between different protocols running on the same cluster. A cluster may currently run at most two consensus protocols at the same time, for example, QBFT v2.0 for the Priority protocol and another protocol for duty consensus, so the `protocol` label may take multiple distinct values. Some protocols may also export their own protocol-specific metrics, prefixed with the protocol's name.

For debugging, Charon exposes a `/debug/consensus` HTTP endpoint on the [debug address](../../learn/charon/charon-cli-reference.md), which returns a `consensus_messages.pb.gz` file containing the most recent consensus messages. Each message is tagged with the protocol it belongs to, which is useful when a cluster is running more than one protocol at once.

## Related Topics

- [Introduction to Charon](../../learn/charon/intro.md).
- [CLI Reference](../../learn/charon/charon-cli-reference.md).
- [Charon Networking](../../learn/charon/charon-networking.md).
