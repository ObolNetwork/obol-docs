---
description: "How Charon's feature flags gate alpha and beta functionality, and how operators can enable, disable, or observe them."
sidebar_label: "Charon Feature Flags"
slug: /advanced-and-troubleshooting/advanced/feature-flags
---

# Charon Feature Flags

Charon ships in-development functionality behind feature flags before it becomes the default behavior. This lets the Obol team roll out new consensus timers, client integrations, and other changes gradually, and lets operators opt in to (or out of) specific behavior on their own nodes.

## Maturity Statuses

Every feature flag has a maturity status:

- **Alpha** - for internal devnet testing. Behavior may change or be removed without notice.
- **Beta** - for internal and external testnet testing. More stable than alpha, but not yet proven in production.
- **Stable** - ready for production. Stable features are enabled by default.

Charon only enables features at or above a configured minimum status. By default, that minimum is `stable`, so only stable features run unless an operator explicitly changes the configuration.

:::warning
Enabling alpha or beta features on a mainnet cluster is done at the operator's own risk — these features are still being validated and may change or be withdrawn in a future release. Because Charon nodes reach agreement through consensus, features that affect consensus-relevant behavior (for example, round timers or attestation data fetching) generally need to be enabled consistently across all nodes in a cluster; mismatched feature sets between operators can cause the affected nodes to diverge from the rest of the cluster.
:::

## Enabling and Disabling Feature Flags

Feature flags are controlled with three `charon run` flags (each with a matching `CHARON_` environment variable, following Charon's standard flag-to-env-var convention):

| Flag | Environment Variable | Description |
|---|---|---|
| `--feature-set` | `CHARON_FEATURE_SET` | Minimum feature set to enable by default: `alpha`, `beta`, or `stable`. Defaults to `stable`. |
| `--feature-set-enable` | `CHARON_FEATURE_SET_ENABLE` | Comma-separated list of individual features to enable, overriding the default minimum feature set. |
| `--feature-set-disable` | `CHARON_FEATURE_SET_DISABLE` | Comma-separated list of individual features to disable, overriding the default minimum feature set. |

`--feature-set-enable` and `--feature-set-disable` take precedence over `--feature-set` on a per-feature basis, so an operator can, for example, run with the default `stable` minimum while explicitly enabling a single alpha feature for testing.

Example `docker-compose.yml` snippet enabling one alpha feature while leaving everything else at the stable default:

```yaml
services:
  charon:
    environment:
      - CHARON_FEATURE_SET=stable
      - CHARON_FEATURE_SET_ENABLE=json_requests
```

## Current Feature Flags

This table reflects Charon `v1.10.0-dev` (commit [`094953a`](https://github.com/ObolNetwork/charon/commit/094953a)). Feature flags are added and removed between releases as functionality graduates to stable and is eventually always-on, so check the [CLI reference](../../learn/charon/charon-cli-reference.md) or run `charon run --help` for the current, authoritative list.

| Flag Name | Status | Default | Description |
|---|---|---|---|
| `eager_double_linear` | Stable | Enabled | Uses an eager double-linear round timer for consensus rounds. |
| `consensus_participate` | Stable | Enabled | Lets a node participate in an ongoing consensus round while it is still waiting for unsigned duty data from its beacon node. |
| `proposal_timeout` | Stable | Enabled | Uses a longer, 1.5-second first consensus round timeout for proposal duties. |
| `fetch_only_commidx_0` | Stable | Enabled | Queries the beacon node for attestation data only for committee index 0. |
| `linear` | Alpha | Disabled | Uses a linear round timer for consensus rounds; takes precedence over `eager_double_linear` when both are active. |
| `aggsigdb_v2` | Alpha | Disabled | Uses a newer, simpler implementation of the `aggsigdb` component. |
| `json_requests` | Alpha | Disabled | Uses JSON (instead of SSZ) requests when talking to the eth2 beacon node client. |
| `gnosis_block_hotfix` | Alpha | Disabled (auto-enabled on Gnosis/Chiado) | Applies an SSZ fix required by the Gnosis and Chiado networks. Charon automatically enables this feature when the configured network is Gnosis or Chiado, unless an operator explicitly disables it. |
| `sse_reorg_duties` | Alpha | Disabled | Lets the scheduler refresh duties when a chain reorg occurs. |
| `attestation_inclusion` | Alpha | Disabled | Tracks on-chain inclusion of attestations. This was previously always-on behavior, but tracking inclusion after the Electra upgrade adds enough load on the beacon node that it can throttle other duties, so it is now opt-in. |
| `quic` | Alpha | Disabled | Enables the QUIC transport protocol in libp2p networking. |
| `chain_split_halt` | Alpha | Disabled | Compares the locally fetched attestation's target and source against the leader's proposed attestation; if they differ, Charon does not sign the attestation. |
| `fetch_att_on_block` | Alpha | Disabled | Fetches attestation data as soon as a block-processing event is received from the beacon node over SSE, falling back to the standard one-third-of-slot timing if no block event arrives in time. |
| `fetch_att_on_block_with_delay` | Alpha | Disabled | Fetches attestation data with an added 300ms delay. Combined with `fetch_att_on_block`, uses one-third-of-slot-plus-300ms as the fallback timeout; used alone, it uses that same timeout directly. |
| `disable_duties_cache` | Alpha | Disabled | Safety switch to disable the internal duties cache. |
| `mock_alpha` | Alpha | Disabled | Internal/experimental placeholder feature used only for testing the feature flag system itself; it has no functional effect. |

## Observing Enabled Feature Flags

Charon exposes the `app_feature_flags` Prometheus metric, a constant gauge labeled with any non-default (custom-enabled) feature flags currently active on a node. See the [Charon Metrics Reference](../../run-a-dv/running/metrics.md) for the full metrics list and label details. Comparing this metric across nodes in a cluster is a quick way to confirm that operators have matching feature sets for consensus-relevant flags.

## Related Reading

- [CLI Reference](../../learn/charon/charon-cli-reference.md) - full list of `charon run` flags, including `--feature-set`, `--feature-set-enable`, and `--feature-set-disable`.
- [Consensus Protocols](consensus-protocols.md) - background on Charon's consensus layer, relevant to feature flags like `eager_double_linear`, `linear`, and `consensus_participate`.
