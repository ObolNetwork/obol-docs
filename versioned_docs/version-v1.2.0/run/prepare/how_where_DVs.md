---
sidebar_position: 1
description: How and where to run DVs
---

# How and Where To Run DVs

## Launchers and Deployment Tooling

- [Obol CDVN](https://github.com/ObolNetwork/charon-distributed-validator-node)
- [Obol K8s](https://github.com/ObolNetwork/charon-k8s-distributed-validator-node)
- [Obol Helm Charts](https://github.com/ObolNetwork/helm-charts)
- [Obol Ansible Playbooks](https://github.com/ObolNetwork/obol-ansible)
- [Dappnode](https://docs.dappnode.io/docs/user/staking/ethereum/dvt-technologies/obol-network/)
- [Stereum](https://stereum.net/)
- [Sedge](https://github.com/ObolNetwork/sedge/blob/develop/docs/docs/quickstart/charon.mdx)
- [Terraform Charon Relay](https://github.com/ObolNetwork/terraform-charon-relay)
- [Terraform Grafana Charon dashboards](https://github.com/ObolNetwork/terraform-grafana-dashboards)

## Quickstart Guides 
- [Run a DV alone](../start/quickstart_alone.mdx)
- [Run a DV as a group](../start/quickstart_group.mdx)
- [Run a DV using the SDK](../../adv/advanced/quickstart-sdk.mdx)

## CL+VC Combinations:


**Legend**
- ✅: All duties succeed in testing
- 🟡: All duties succeed in testing, except non-penalised aggregation duties
- 🟠: Duties may fail for this combination
- 🔴: One or more duties fails consistently

| Validator 👉 Consensus 👇 | Teku v24.10.3 | Lighthouse v5.3.0 | Lodestar v1.23.0 | Nimbus v24.10.0 | Prysm v5.1.2 | Remarks |
|---------------------------|---------------|-------------------|------------------|-----------------|--------------|---------|
| Teku v24.10.3                     |           ✅          |              🟡              |              ✅            |           ✅             |         🟠          | Teku `beacon node` needs the `--validators-graffiti-client-append-format=DISABLED` flag in order to produce blocks properly. Teku `validator client` is only failing aggregation duties 50% of the time, which are not directly penalised but impact network density at high scale. |
| Lighthouse v5.3.0              |           ✅          |              🟡              |              ✅            |           ✅             |         ✅          | Lighthouse `validator client` is only failing aggregation duties, which are not directly penalised but impact network density at high scale. |
| Lodestar v1.23.0                |           ✅          |              🟡              |              ✅            |           ✅             |         🟠          |               |
| Nimbus v24.10.0                |           ✅          |              🟡              |              ✅            |           ✅             |         🟠          |               |
| Prysm v5.1.2                       |           ✅          |              🟡              |              ✅            |           ✅             |         ✅          | Prysm `validator client` is failing aggregation duties 50% of the time, which are not directly penalised but impact network density at high scale. In some combinations rare failures of attestation and proposal duties were observed (0-2% per epoch). |

Note: for the most recent compatability information, please see the [release notes](https://github.com/ObolNetwork/charon/releases/) from the most recent release of Charon. 