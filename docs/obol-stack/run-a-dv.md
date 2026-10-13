---
description: "Run your share of an Obol distributed validator in the Obol Stack: a local Ethereum node, the dv-pod Helm chart, DKG, monitoring, and the Hermes agent watching it."
sidebar_label: "Run Your Part of a DV"
slug: /obol-stack/run-a-dv
---

# Run your part of a DV in the Obol Stack

A [distributed validator](../learn/intro/key-concepts.md) (DV) is split across several operators, and each one runs a Charon node and a validator client. The Obol Stack can host **your** part: a synced Ethereum node from `obol network`, a [`dv-pod`](https://github.com/ObolNetwork/helm-charts/tree/main/charts/dv-pod) Helm release that runs Charon and a validator client against it, the Stack's Prometheus collecting its metrics, and the Hermes agent keeping an eye on all of it.

:::info
This page needs **Obol Stack v0.16 or later** and **`dv-pod` chart 0.22.0 or later**. Check your versions with `obol version` and `obol helm search repo obol/dv-pod --versions`.
:::

:::warning
The Obol Stack is alpha software. It works on mainnet, but start on Hoodi, and on mainnet run less than a threshold of your cluster's nodes in Stacks. Everything below uses `obol kubectl` and `obol helm`, which always target the Stack's own cluster and never your default kubeconfig.
:::

## Before you start

* A running Stack (`obol stack up`, see the [Quickstart](quickstart.mdx)) on a machine with room for an Ethereum node. Hoodi needs about 150 GB of disk. Mainnet needs about 2 TB of fast SSD and 32 GB of RAM to run the node and a dv-pod together.
* The network you'll validate on, agreed with the other operators. This guide uses `hoodi`.
* For the Launchpad route: the Ethereum address you'll connect to the [Launchpad](../learn/intro/launchpad.md) with (your operator address).
* Your cluster-mates, and how you'll create the cluster: a [Launchpad invite](#launchpad-invite), or a [cluster definition](#cluster-definition-from-the-cli) made with `charon create dkg`.
* The Charon version everyone will run. Charon's DKG only connects peers on the same minor version (for example, all `v1.11.x`). The `dv-pod` chart runs the DKG with the same Charon image it runs afterwards, so compare your chart's Charon version with the other operators before the DKG.

## Step 1: Install and sync an Ethereum node

Install a full node for the cluster's network, then deploy it:

```shell
obol network install ethereum --network=hoodi
obol network sync ethereum/hoodi
```

The deployment ID defaults to the network name (`hoodi` here), so the node runs in namespace `ethereum-hoodi`. Charon reaches its beacon API at `http://ethereum-beacon.ethereum-hoodi.svc.cluster.local:5052`. Use [`--execution-client` and `--consensus-client`](installing-networks.mdx#configuration-options) to pick clients. On mainnet, prefer minority clients.

Add `--mev` to the install command only if your whole cluster has agreed to use MEV-boost. It runs `mev-boost` next to the beacon node and connects the beacon node's builder API to it. Your dv-pod then needs `charon.builderApi=true`. Without `--mev`, keep `charon.builderApi=false`.

Wait for the node to sync before you install the dv-pod:

```shell
obol network status ethereum/hoodi
```

This shows the execution and consensus clients' sync state, peers and versions, mev-boost health if enabled, and a one-line verdict. Continue when it says `synced`. Hoodi usually takes a few hours, and mainnet can take days. `obol network list` shows your installed nodes, including whether they run MEV-boost.

:::info
On a testnet you can install the dv-pod before the node finishes syncing: the chart falls back to the public [publicnode.com](https://publicnode.com) beacon API for the network while yours catches up (`charon.publicnodeFallback`, on by default). Never let mainnet duties depend on that fallback.
:::

## Step 2: Install the dv-pod

Use `obol helm` to install the chart. `obol app install` also works, but `obol app delete` deletes the whole namespace, including the volume that holds your key shares.

Add the Obol chart repository and download the chart's Obol Stack values file, pinned to the version you'll install:

```shell
obol helm repo add obol https://obolnetwork.github.io/helm-charts
obol helm repo update
obol helm pull obol/dv-pod --version 0.22.0 --untar --untardir ./dv-pod-chart
```

`./dv-pod-chart/dv-pod/values-examples/obol-stack.yaml` sets the Stack defaults:

* `mode: launchpad` and `network: hoodi`
* the in-cluster beacon node, with the publicnode fallback
* `charon.builderApi: false`
* a `ServiceMonitor` labelled `release: monitoring`, so the Stack's Prometheus scrapes Charon
* `statusReaders` for the Hermes agent (service account `hermes` in namespace `hermes-obol-agent`), so it can read this release's DKG status and ENR ConfigMaps. It gets no access to Secrets.

Install it, and set everything that's specific to you on the command line:

```shell
obol helm upgrade --install dv-pod-hoodi obol/dv-pod --version 0.22.0 \
  --namespace dv-pod --create-namespace \
  -f ./dv-pod-chart/dv-pod/values-examples/obol-stack.yaml \
  --set network=hoodi \
  --set charon.operatorAddress=<YOUR_OPERATOR_ADDRESS> \
  --set charon.builderApi=false \
  --timeout=10m
```

* `network` must match your node's network. The DKG sidecar only looks for cluster invites on this network.
* The beacon node defaults to the Stack's node for `network` (`ethereum-hoodi` here): the first `obol network install ethereum --network <network>` is named after the network. If `obol network list` shows your node under another id, add `--set 'charon.beaconNodeEndpoints[0]=http://ethereum-beacon.ethereum-<id>.svc.cluster.local:5052'`.
* A release name containing `dv-pod` keeps the resource names short: the pod is `dv-pod-hoodi-0`, and the ConfigMaps are `dv-pod-hoodi-enr` and `dv-pod-hoodi-dkg-status`.

The chart generates this node's ENR private key (in the Secret `dv-pod-hoodi-enr-key`) and publishes the public ENR to a ConfigMap. Read it with:

```shell
obol kubectl get configmap dv-pod-hoodi-enr -n dv-pod -o jsonpath='{.data.enr}'
```

`obol helm get notes dv-pod-hoodi -n dv-pod` prints the release's own next steps and commands at any time.

:::warning
The ENR private key is your node's identity in the cluster, and it can't change once the cluster exists. The chart never overwrites it, and the Secret survives `helm uninstall`. Keep a copy somewhere safe (`obol kubectl get secret dv-pod-hoodi-enr-key -n dv-pod -o yaml`).
:::

## Step 3: Create or join the cluster

The pod now waits in its `dkg-sidecar` init container (`Init:0/N` in `obol kubectl get pod dv-pod-hoodi-0 -n dv-pod`). All operators in a cluster should use the same route.

### Launchpad invite {#launchpad-invite}

1. Open the Launchpad for your network ([Hoodi](https://hoodi.launchpad.obol.org), [mainnet](https://launchpad.obol.org)) and connect the wallet for your operator address.
2. Create the cluster, or accept the invite you were sent, following [Create a DV With a Group](../run-a-dv/start/create-a-dv-with-a-group.mdx#step-2-create-a-cluster-or-accept-an-invitation-to-a-cluster).
3. When the Launchpad asks for your ENR, paste **this pod's** ENR from Step 2. The sidecar only accepts a cluster definition that contains it.
4. Sign with your wallet. The chart and its sidecar never sign anything for you.

Once every operator has signed, the DKG starts on its own.

### Cluster definition from the CLI {#cluster-definition-from-the-cli}

If your group makes the definition with `charon create dkg` instead (see [Create a DV With a Group](../run-a-dv/start/create-a-dv-with-a-group.mdx), **CDVN** tabs):

1. Send this pod's ENR from Step 2 to the cluster creator.
2. The creator runs `charon create dkg ... --operator-enrs=<all operators' ENRs> --publish` and shares the config hash it prints. With `--publish`, the definition is posted to the Obol API, so everyone can fetch and check the same file.
3. Point your release at it. The pod keeps its ENR across the upgrade:

   ```shell
   obol helm upgrade dv-pod-hoodi obol/dv-pod --version 0.22.0 -n dv-pod --reuse-values \
     --set mode=definition \
     --set dkg.definition.configHash=0x<CONFIG_HASH> \
     --timeout=10m
   ```

Definitions made with operator ENRs need no signatures. If the definition lists operator addresses, every operator still signs it on the Launchpad.

## Step 4: Watch the DKG

The sidecar records its progress in the `dv-pod-hoodi-dkg-status` ConfigMap:

```shell
obol kubectl get configmap dv-pod-hoodi-dkg-status -n dv-pod \
  -o jsonpath='{.data.phase}{"\n"}{.data.message}{"\n"}{.data.signatures}{"\n"}'
```

| Phase | Meaning |
| --- | --- |
| `WaitingForInvite` | No definition containing this pod's ENR yet |
| `WaitingForSignatures` | Found it; `signatures` shows how many operators have signed (for example `3/4`) |
| `DefinitionReady` | Everyone has signed; the DKG runs next |
| `Complete` | The DKG finished; `lockHash` and `numValidators` are set |
| `LockPresent` | A cluster-lock was already there, so no DKG ran |
| `Failed` | Read `message`, then the logs below |

Every operator's node must be online at the same time for the ceremony. To follow it in detail:

```shell
obol kubectl logs dv-pod-hoodi-0 -n dv-pod -c dkg-sidecar -f   # waiting for the invite and signatures
obol kubectl logs dv-pod-hoodi-0 -n dv-pod -c charon-dkg -f    # the ceremony
obol kubectl logs dv-pod-hoodi-0 -n dv-pod -c dv-pod -f        # Charon, once the cluster-lock exists
```

If the DKG keeps retrying, check that every operator is online and runs the same Charon minor version. The chart's [troubleshooting guide](https://github.com/ObolNetwork/helm-charts/blob/main/charts/dv-pod/TROUBLESHOOT.md) covers the other cases.

## Step 5: Back up and verify

After the DKG, the pod's `charon-data` volume holds `cluster-lock.json`, `deposit-data*.json` and your key shares in `validator_keys/`. Copy it off the Stack and store it encrypted before you deposit:

```shell
obol kubectl cp dv-pod/dv-pod-hoodi-0:/charon-data ./dv-pod-hoodi-charon-data -c dv-pod
tar czf dv-pod-hoodi-charon-data.tgz dv-pod-hoodi-charon-data && rm -rf dv-pod-hoodi-charon-data
```

`obol stack export` doesn't replace this backup. The volume and the ENR Secret survive `helm uninstall`, but not `obol stack purge`.

Then check the cluster before any deposit:

* Compare the cluster-lock with what you agreed: operators, threshold, number of validators, withdrawal and fee recipient addresses, and network. Every operator should have the same `lock_hash` (the `lockHash` key in the status ConfigMap).
* Run the [Charon test suites](../run-a-dv/prepare/test-a-cluster.mdx) from inside the pod:

  ```shell
  obol kubectl exec dv-pod-hoodi-0 -n dv-pod -c dv-pod -- charon alpha test peers \
    --lock-file=/charon-data/cluster-lock.json --private-key-file=/data/charon-enr-private-key
  obol kubectl exec dv-pod-hoodi-0 -n dv-pod -c dv-pod -- charon alpha test beacon \
    --endpoints=http://ethereum-beacon.ethereum-hoodi.svc.cluster.local:5052
  ```

Then [activate your validators](../run-a-dv/running/activate-a-dv.md).

## Monitor your node

With the `ServiceMonitor` from the values file, the Stack's Prometheus scrapes Charon. The Stack doesn't ship Grafana, so query Prometheus directly:

```shell
obol kubectl -n monitoring port-forward svc/monitoring-kube-prometheus-prometheus 9090:9090
```

Then open `http://localhost:9090` and try queries such as `app_monitoring_readyz{namespace="dv-pod"}` (1 means Charon is ready), `p2p_ping_success{namespace="dv-pod"}` (peer reachability) or `increase(core_tracker_failed_duties_total{namespace="dv-pod"}[1h])`. See [Monitoring](../run-a-dv/running/monitoring.md) for what the metrics mean, and `obol network status` for the Ethereum node.

To also see your node in Obol's hosted dashboards, [push metrics and logs to Obol](../run-a-dv/start/obol-monitoring.mdx).

## Let Hermes watch your node

The Stack's Hermes agent can read pods, logs and events across the cluster. With `statusReaders`, it can also read your release's DKG status and ENR ConfigMaps. It can't read Secrets or change anything. Give it the DV skills:

```shell
obol agent skills add distributed-validators dv-steward
```

* `distributed-validators` reads public cluster data from the Obol API: cluster health, validator effectiveness, and exits.
* `dv-steward` checks this Stack's own node and dv-pods: sync, peers, Charon readiness, duties, DKG status, restarts and disk. It only reports and never restarts anything.

If `dv-steward` isn't found, your Stack's skills release doesn't include it yet: `obol agent skills list --available` shows what you can add.

Ask in chat (`obol hermes chat`), for example *"How is my DV doing?"*. To get alerts, connect Hermes to Telegram and schedule the checks:

```shell
obol hermes gateway setup     # choose Telegram and paste the bot token here, never in a chat
```

:::danger
Set `TELEGRAM_ALLOWED_USERS` to your numeric Telegram user ID, and `TELEGRAM_HOME_CHANNEL` to where alerts should go. The Stack's Hermes accepts messages from any gateway user by default, so without an allow-list anyone who finds your bot can talk to an agent that holds a wallet.
:::

```shell
obol hermes cron create "every 15m" "Run the dv-steward checks for this stack's DV. Report only WARN/CRIT findings that are new or still unresolved since the last report; otherwise reply exactly [SILENT]." \
  --name dv-watch --skill dv-steward --deliver telegram
obol hermes cron create "0 9 * * *" "dv-steward daily summary for this stack's DV." \
  --name dv-daily --skill dv-steward --skill distributed-validators --deliver telegram
```

Hermes only watches and alerts. Launchpad signatures, deposits, exits and restarts stay with you.

## Use Claude Code

The [Obol agent skills](../agent-skills/README.md) plugin for Claude Code knows this whole flow. `run-obol-stack` handles the Stack and the node sync, `dvpod` installs the chart, `create-cluster-invitation` handles the Launchpad or CLI route and the Charon version check, and `test-a-dv-cluster` runs the checks before a deposit. Install the plugin, then ask, for example:

```text
Help me run my part of a 4-operator Hoodi DV in my Obol Stack. Sync a local node first, then install the dv-pod for the Launchpad route with my operator address 0x..., and set up Hermes to watch it.
```

Claude shows each command before running it. Don't paste private keys, mnemonics or bot tokens into the chat. Check the cluster's addresses and operators yourself before depositing.

## Upgrade or remove

Upgrade with a pinned chart version, and keep your values:

```shell
obol helm repo update
obol helm upgrade dv-pod-hoodi obol/dv-pod --version <NEW_VERSION> -n dv-pod --reuse-values
```

Read [Update a DV](../run-a-dv/running/update-a-dv.mdx) first. Once validators are active, don't upgrade or restart more than one node of the cluster at a time.

`obol helm uninstall dv-pod-hoodi -n dv-pod` removes the release but keeps the `charon-data` volume and the ENR Secret. Only delete them, or the `dv-pod` namespace, once you have a backup and no longer need this node's keys. Never run the same validator keys in two places at once: that can get the validators slashed.
