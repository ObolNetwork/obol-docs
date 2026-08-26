---
description: "Swap EL, CL, VC and MEV clients in the stack."
sidebar_label: "Swapping Clients"
slug: /advanced-and-troubleshooting/advanced/client-swap
---

# Client swap

If you are using CDVN, the default stack is:

| Execution layer | Consensus layer | Distributed validator | Validator client | MEV       |
| --------------- | --------------- | --------------------- | ---------------- | --------- |
| Nethermind      | Lighthouse      | Charon                | Lodestar         | MEV boost |

However, to achieve greater resilience through client diversity, it is preferred to run a variety of clients across your cluster, ideally ensuring no single EL/CL/VC runs on one third of the nodes or more. CDVN supports changing from the default clients.

Currently supported client options are:

| Execution layer | Consensus layer | Distributed validator | Validator client | MEV          |
| --------------- | --------------- | --------------------- | ---------------- | ------------ |
| Nethermind      | Lighthouse      | Charon                | Lodestar         | MEV boost    |
| Reth            | Grandine        |                       | Nimbus           | Commit boost |
|                 | Lodestar        |                       | Prysm            |              |
|                 | Teku            |                       | Teku             |              |

For support between different combinations, refer to Charon's compatibility matrix, found in the [prepare section of the docs](../../run-a-dv/prepare/how_where_dvs.md) or under [release notes](https://github.com/ObolNetwork/charon/releases/) for each release.

:::info
As CDVN natively supports more clients, the number of possible combinations grows quickly.
We test extensively, but cannot guarantee the performance of all possible client combos.
If you run a mixed-client cluster, monitor performance and be ready to swap to another client if you observe issues.
:::

:::info
There is currently an incompatibility between validator clients that may cause attestation aggregation duties to fail. Aggregation duties are not economically rewarded nor punished for their completion.

To ensure aggregations succeed; have at least threshold of nodes in the cluster running one of Lodestar, Lighthouse, and Nimbus, or alternatively; have a threshold of nodes in the cluster running one of Teku and Prysm. This incompatibility will be remediated in upcoming client releases.
:::

:::warning
**Lodestar's validator** client's default behavior is to skip the next slot if it fails an attestation or aggregation. This can impact your cluster's performance, particularly if you have more than the fault tolerance threshold of your cluster running Lodestar's validator client, and many validators running in the cluster. 

If your cluster is not successfully aggregating, you should ideally swap to a set of compatible validator clients listed above, along with ensuring your clients have the appropriate [`--distributed` flag](../troubleshooting/client_configurations.md) set to enable distributed aggregation mode. Failing that, you can add the flag `--slotSkip false` to your `lodestar vc` process, (requires lodestar to be version `v1.37.0` and newer) or set `VC_LODESTAR_DISABLE_SLOT_SKIP=true` in your `.env` file if you're using (L)[CDVN](https://github.com/ObolNetwork/charon-distributed-validator-node). This disables the slot skipping feature.
:::

## Choosing clients in fresh cluster

In order to choose which clients to use in a new cluster, simply leave uncommented (only) the desired `EL`, `CL`, `MEV` or `VC` variables in the `.env` file. There must be only one client per component. The cluster will use the respective client for each component.

## Swapping clients in an already running cluster

:::warning
For ([L](https://github.com/obolNetwork/lido-charon-distributed-validator-node))[CDVN](https://github.com/obolNetwork/charon-distributed-validator-node) users who created their `.env` file before the release of charon `v1.8.0`, there are breaking changes between then and the current multi-client `.env` file setup.
The minimal addition to an older version of the `.env` file compatible with the current versions of the repos is to add `COMPOSE_PROFILES=el_nethermind,cl_lighthouse,dv_charon,vc_lodestar,mev_mevboost` to your existing `.env` file.
Some environment variables were renamed in order to be client-agnostic. **If you had set these environment variables to custom values in your `.env`, you need to set the new variables to your custom values**. They serve the same purpose.

| Old                           | New                              |
|-------------------------------|--------------------------------- |
| NETHERMIND_PORT_P2P           | EL_PORT_P2P                      |
| NETHERMIND_IP_HTTP            | EL_IP_HTTP                       |
| NETHERMIND_PORT_HTTP          | EL_PORT_HTTP                     |
| NETHERMIND_IP_ENGINE          | EL_IP_ENGINE                     |
| NETHERMIND_PORT_ENGINE        | EL_PORT_ENGINE                   |
| LIGHTHOUSE_PORT_P2P           | CL_PORT_P2P                      |
| LODESTAR_PORT_METRICS         | VC_PORT_METRICS                  |
| MEVBOOST_TIMEOUT_GETHEADER    | MEV_TIMEOUT_GETHEADER            |
| MEVBOOST_TIMEOUT_GETPAYLOAD   | MEV_TIMEOUT_GETPAYLOAD           |
| MEVBOOST_TIMEOUT_REGVAL       | MEV_TIMEOUT_REGVAL               |
| MEVBOOST_RELAYS               | MEV_RELAYS                       |
| NETHERMIND_PROMTAIL_MONITORED | EL_NETHERMIND_PROMTAIL_MONITORED |
| LIGHTHOUSE_PROMTAIL_MONITORED | CL_LIGHTHOUSE_PROMTAIL_MONITORED |
| LODESTAR_PROMTAIL_MONITORED   | VC_LODESTAR_PROMTAIL_MONITORED   |
| MEV_BOOST_PROMTAIL_MONITORED  | MEV_MEV_BOOST_PROMTAIL_MONITORED |

:::

1. Copy the new `.env.sample.<NETWORK>` file to `.env`.
2. Comment or uncomment your preferred Execution, Consensus, Validator, and MEV clients and save the file.
3. Stop the existing cluster that uses the old environment file.

```sh
docker compose --profile "" down
```

3. Start the node again to pick up the changes to the `.env` file.

```sh
docker compose up -d
```

Your node should start up with the new clients.

### Swap Consensus layer

:::info
The code snippets under those steps are assuming you are swapping from Lighthouse CL to Grandine CL and you.
:::

1. Stop the existing consensus layer client container.

:::info
If you do not want to experience downtime while the new beacon node is syncing, you can set a fallback beacon node for Charon (`CHARON_FALLBACK_BEACON_NODE_ENDPOINTS` env variable) that will be used while the new BN is syncing.
Note that you need to restart Charon as well in order for it to take effect.
:::

```sh
docker compose down cl-lighthouse
```

1. Comment out the currently set `CL` environment variable in `.env` (i.e.: `CL=cl-lighthouse` -> `#CL=cl-lighthouse`). Uncomment the desired CL (i.e.: `#CL=cl-grandine` -> `CL=cl-grandine`).

2. Start the new consensus layer client container.

```sh
docker compose up cl-grandine -d
```

4. Restart Charon in order to update the CL client it's querying.

```sh
docker compose down charon
docker compose up charon -d
```

5. After the new consensus layer client is synced and you are assured the new setup is working, you can delete the previous CL client's data in order to save resources.

```sh
rm -rf ./data/lighthouse
```

### Swap Validator client

:::info
The code snippets under those steps are assuming you are swapping from Lodestar VC to Teku VC.
:::

1. Stop the existing validator client container.

```sh
docker compose down vc-lodestar
```

2. Comment out the currently set `VC` environment variable in `.env` (i.e.: `VC=vc-lodestar` -> `#VC=vc-lodestar`). Uncomment the desired VC (i.e.: `#VC=vc-teku` -> `VC=vc-teku`).

3. Start the new validator client container.

```sh
docker compose up vc-teku -d
```

4. After the new validator client is started and you are assured the new setup is working, you can delete the previous VC's data in order to save resources

```sh
rm -rf ./data/lodestar
```

### SWAP MEV client

:::info
The code snippets under those steps are assuming you are swapping from MEV Boost to Commit Boost and you are using Lighthouse CL.
:::

:::info
If switching to Commit Boost, you will need to copy a Commit Boost TOML config `commit-boost/config.toml.sample.<NETWORK>` to `commit-boost/config.toml`, as it does not support `.env` configurations yet. Make sure the configuration matches what you have had set for mev-boost, in terms of relays and timeouts.
:::

1. Stop the existing MEV client container.

```sh
docker compose down mev-mevboost
```

2. Comment out the currently set `MEV` environment variable in `.env` (i.e.: `MEV=mev-mevboost` -> `#MEV=mev-mevboost`). Uncomment the desired MEV (i.e.: `#MEV=mev-commitboost` -> `MEV=mev-commitboost`).

3. Start the new MEV client container.

```sh
docker compose up mev-commitboost -d
```

4. Restart the beacon node in order to update the MEV it's querying.

```sh
docker compose down cl-lighthouse
docker compose up cl-lighthouse -d
```
