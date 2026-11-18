---
description: "How Charon's pluggable consensus layer lets a cluster agree on duty data, and how operators can select a preferred protocol."
sidebar_label: "Consensus Protocols"
slug: /advanced-and-troubleshooting/advanced/consensus-protocols
---

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

## Round Timers

Consensus runs in rounds. If a round does not reach a decision before its timer expires, the nodes move to the next round with a new leader. Charon has three round timers, selected with [feature flags](feature-flags.md). Every node in a cluster should use the same timer, otherwise nodes disagree about when rounds start and end.

| Timer | How to select it | Behaviour |
| --- | --- | --- |
| Eager double linear | Default (`eager_double_linear`, enabled) | Rounds start at an absolute time derived from the slot start, so every node's rounds line up. Round durations grow linearly (1s, 2s, 3s, …), and a round's timeout is doubled once a leader is active, rather than resetting the timer. This stops leaders drifting out of sync with the rest of the cluster. |
| Increasing | `--feature-set-disable=eager_double_linear` | The original timer. Round 1 lasts 750ms, and each later round lasts 250ms longer than the one before. |
| Linear | `--feature-set-enable=linear` | Applies **only to proposer duties before the Gloas fork**. From the fork, the flag selects the [Gloas proposer timer](#gloas-proposer-timer) instead. All other duties still use the eager double linear timer, or the increasing timer if that is disabled. The first round is long (1s) because fetching the block happens inside it. Later rounds are short and grow by 200ms each, so a slow leader is skipped quickly. Takes precedence over `eager_double_linear` for proposals, so you don't need to disable it. |

The `timer` label on the consensus metrics below shows which timer decided, or timed out, each consensus instance.

### Gloas Proposer Timer

From the Gloas fork, attestations are due 3 seconds into the slot. A block that the cluster agrees on later than that is late: attesters may already have voted for the previous block, so it is more likely to be reorged out. Charon therefore uses a dedicated timer for proposer duties from the fork, regardless of the `eager_double_linear` and `proposal_timeout` flags. It comes in two shapes, and the whole cluster always uses the same one:

| Shape | How to select it | Round ends | Leaders with a chance at a timely block |
| --- | --- | --- | --- |
| Default | Nothing to configure | 1.5s, 3.0s, 4.5s, … | Two |
| Linear | `--feature-set-enable=linear` on every node | 1.5s, 2.1s, 3.0s, 4.2s, … | Three |

![Timeline of the Gloas proposer consensus rounds. By default, rounds end at 1.5s, 3s and 4.5s, so only the first two leaders start before the 3s attestation due time. With linear, rounds end at 1.5s, 2.1s, 3s and 4.2s, so three leaders start before it.](/img/consensus/gloas-proposer-rounds.svg)

The cluster has to agree on a block by about 2.7s, which leaves time to exchange partial signatures and broadcast the signed block before the 3s attestation due time. A round that starts at 3s or later can't produce a timely block. By default, only the first two leaders of a slot get a chance, while `linear` gives a third leader one. Before the fork, attestations are due at 4s and the default rounds end at 1.5s, 2.5s and 3.5s, so the default from Gloas tolerates one fewer unresponsive leader.

#### Why the First Round Lasts 1.5 Seconds

In the first round every node aggregates its RANDAO reveal and fetches a block from its beacon node, and the leader proposes it. Block production can be slow, especially in the first slot of an epoch, when beacon nodes process the epoch transition. A shorter first round would often expire before the leader's block is ready and cause needless round changes. By the second round nodes usually already have a block, so later leaders need less time, which is why `linear` can use shorter later rounds.

#### Which Outages Delay Proposals

Each round's leader is chosen by rotating through the operators in their cluster lock order: the leader is `(slot + duty type + round) mod n`, where `n` is the number of operators. So the leaders of consecutive rounds are operators with consecutive indices, and the last operator is followed by the first.

With the default shape, a proposal is only late when the first two leaders of its slot are both down. That takes two operators with **adjacent** indices to be down at the same time. With `linear`, it takes three operators with consecutive indices.

![Leader rotation in a 7 node cluster. With operators 3 and 4 down, the slots whose first leader is operator 3 have their second leader down too, so 1 in 7 proposals is late by default, while with linear, operator 5 still proposes in time. With operators 1 and 4 down, no two consecutive leaders are down, so all proposals are timely with either shape.](/img/consensus/gloas-proposer-leaders.svg)

| Cluster | Operators down | Default | Linear |
| --- | --- | --- | --- |
| 4 nodes | Any 1 | All timely | All timely |
| 7 nodes | Any 1 | All timely | All timely |
| 7 nodes | 2 not adjacent, for example 1 and 4 | All timely | All timely |
| 7 nodes | 2 adjacent, for example 3 and 4 | 1 in 7 late | All timely |
| 10 nodes | 2 adjacent | 1 in 10 late | All timely |
| 10 nodes | 3 consecutive | 2 in 10 late | 1 in 10 late |

The table assumes the remaining nodes are healthy and quick enough. A late block is more likely to be reorged out, but it isn't necessarily missed.

#### Choosing a Shape

The default suits most clusters, in particular those of up to 5 nodes, which stop signing altogether with two operators down. Consider enabling `linear` if:

- Your cluster has 6 or more nodes, so it keeps signing with two or more operators down.
- Operators share a hosting provider, a data centre, or a maintenance window, so they tend to go down together.
- Operators with adjacent indices in the cluster lock are likely to fail together.

The cost of `linear` is that its second and third rounds are shorter, 600ms and 900ms, so a leader that is up but slow is more likely to be skipped.

#### How the Cluster Agrees on a Shape

Nodes with different round ends would disagree on who leads each round, so the whole cluster must use the same shape, even though `linear` is set per node. Nodes agree on it with the [Priority protocol](#the-priority-protocol): in the last slot of each epoch, every node proposes the shape it is configured with. Once a threshold of nodes propose `linear`, every node uses it from the next epoch, including nodes that didn't enable it. Otherwise, every node uses the default.

:::tip
Enable `linear` on every node, not only on a threshold of them. With exactly a threshold, a single node that restarts or misses an agreement switches the cluster back to the default for an epoch.
:::

A node uses the default after it starts, until the cluster next agrees, which is at most one epoch. Before the Gloas fork, the `linear` flag keeps its earlier meaning, described in the table above, and only affects the node it is set on.

To check which shape your cluster is using, look at the `timer` label on the consensus metrics for proposer duties: `linear` or `eager_dlinear` for the default. `core_consensus_decided_rounds` shows how often proposals need more than one round.

## Observability

The following consensus metrics are exposed by Charon:

- `core_consensus_decided_rounds`.
- `core_consensus_decided_leader_index`.
- `core_consensus_duration_seconds`.
- `core_consensus_error_total`.
- `core_consensus_insufficient_round_changes_total`.
- `core_consensus_timeout_total`.

Each of these metrics carries a `protocol` label, which lets operators distinguish consensus activity between different protocols running on the same cluster. A cluster may currently run at most two consensus protocols at the same time, for example, QBFT v2.0 for the Priority protocol and another protocol for duty consensus, so the `protocol` label may take multiple distinct values. Some protocols may also export their own protocol-specific metrics, prefixed with the protocol's name.

For debugging, Charon exposes a `/debug/consensus` HTTP endpoint on the [debug address](../../learn/charon/charon-cli-reference.md), which returns a `consensus_messages.pb.gz` file containing the most recent consensus messages. Each message is tagged with the protocol it belongs to, which is useful when a cluster is running more than one protocol at once.

## Related Topics

- [Introduction to Charon](../../learn/charon/intro.md).
- [CLI Reference](../../learn/charon/charon-cli-reference.md).
- [Charon Networking](../../learn/charon/charon-networking.md).
