---
sidebar_position: 1
description: How and where to run DVs
---

# How and Where To Run DVs

## Launchers and Deployment Tooling

* [Obol CDVN](https://github.com/ObolNetwork/charon-distributed-validator-node)
* [Obol K8s](https://github.com/ObolNetwork/charon-k8s-distributed-validator-node)
* [Obol Helm Charts](https://github.com/ObolNetwork/helm-charts)
* [Obol Ansible Playbooks](https://github.com/ObolNetwork/obol-ansible)
* [Dappnode](https://docs.dappnode.io/docs/user/staking/ethereum/dvt-technologies/obol-network/)
* [Stereum](https://stereum.net/)
* [Sedge](https://github.com/ObolNetwork/sedge/blob/develop/docs/docs/quickstart/charon.mdx)
* [Terraform Charon Relay](https://github.com/ObolNetwork/terraform-charon-relay)
* [Terraform Grafana Charon dashboards](https://github.com/ObolNetwork/terraform-grafana-dashboards)

## Quickstart Guides

* [Run a DV alone](https://github.com/ObolNetwork/obol-docs/blob/main/docs/run/start/quickstart_alone.mdx)
* [Run a DV as a group](https://github.com/ObolNetwork/obol-docs/blob/main/docs/run/start/quickstart_group.mdx)
* [Run a DV using the SDK](https://github.com/ObolNetwork/obol-docs/blob/main/docs/adv/advanced/quickstart-sdk.mdx)

## CL+VC Combinations:

**Legend**

* ✅: All duties succeed in testing
* 🟡: All duties succeed in testing, except non-penalised aggregation duties
* 🟠: Duties may fail for this combination
* 🔴: One or more duties fails consistently

| Consensus 👇 Validator 👉 | Teku v24.8.0 | Lighthouse v5.3.0[^1] | Lodestar v1.20.2 | Nimbus v24.7.0 | Prysm [PR](https://github.com/prysmaticlabs/prysm/pull/13995) | Remarks                                                                                                                                                                                                                                                       |
| ------------------------- | ------------ | --------------------- | ---------------- | -------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Teku v24.8.0              | 🟡           | 🟡                    | ✅                | ✅              | 🟠                                                            | Teku `bn` needs the `--validators-graffiti-client-append-format=DISABLED` flag in order to produce blocks properly. Teku `vc` are only failing aggregation duties 50% of the time, which are not directly penalised but impact network density at high scale. |
| Lighthouse v5.3.0         | 🟡           | 🟡                    | ✅                | ✅              | 🟠                                                            | Lighthouse `vc` are only failing aggregation duties, which are not directly penalised but impact network density at high scale.                                                                                                                               |
| Nimbus v24.7.0            | 🟡           | 🟡                    | ✅                | ✅              | ✅                                                             | Nimbus beacon nodes requires that you add the following flag to **charon run**: `charon run --feature-set-enable=json_requests`                                                                                                                               |
| Prysm v5.0.3              | 🟡           | 🟡                    | ✅                | ✅              | ✅                                                             | Prysm `validator` needs a particular [pull request](https://github.com/prysmaticlabs/prysm/pull/13995) merged and released for aggregation duties to succeed.                                                                                                 |
| Lodestar v1.20.2          | 🟡           | 🟡                    | ✅                | ✅              | 🔴                                                            |                                                                                                                                                                                                                                                               |

### Note:

* Blinded beacon block proposals are only supported from[ cluster lock](https://github.com/ObolNetwork/charon/blob/main/docs/configuration.md#cluster-config-change-log) version v1.7 and [charon release](https://github.com/ObolNetwork/charon/releases) v0.17.0 onwards.
* Prysm VC support is added from prysm version v5.0.0 onwards.

[^1]: sync committee and aggregator duties are not yet supported in a DV setup by Lighthouse, all other duties work as expected.
