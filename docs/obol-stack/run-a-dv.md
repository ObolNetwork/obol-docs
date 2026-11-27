---
description: "Run your share of an Obol distributed validator in the Obol Stack: a local Ethereum node, the dv-pod Helm chart, DKG, monitoring, and the Hermes agent watching it."
sidebar_label: "Run Your Part of a DV"
slug: /obol-stack/run-a-dv
---

# Run your part of a DV in the Obol Stack

A [distributed validator](../learn/intro/key-concepts.md) (DV) is split across several operators, and each one runs a Charon node and a validator client. The Obol Stack can host **your** part: a synced Ethereum node from `obol network`, a [`dv-pod`](https://github.com/ObolNetwork/helm-charts/tree/main/charts/dv-pod) app that runs Charon and a validator client against it, the Stack's Prometheus collecting its metrics, and the Hermes agent keeping an eye on all of it.

:::info
This page needs **Obol Stack v0.19.0 or later** and **`dv-pod` chart 0.24.0 or later**. Check your versions with `obol version` and `obol helm search repo obol/dv-pod --versions`. Running a dv-pod you installed with `obol helm` on an earlier version? See [Existing Helm installs](#existing-helm-installs).
:::

:::warning
The Obol Stack is alpha software. It works on mainnet, but start on Hoodi, and on mainnet run less than a threshold of your cluster's nodes in Stacks. Everything below uses `obol` commands, which always target the Stack's own cluster and never your default kubeconfig.
:::

:::warning[Gloas]
Charon v1.11 (in `dv-pod` chart 0.24.0) doesn't support the Gloas fork yet; that comes with Charon v2.0.0. Sepolia has already forked, so don't start a new DV there. Hoodi's fork is planned for 2026-12-15: before then, your Ethereum node and your dv-pod both need a release that supports it (see [Hoodi's Gloas/Amsterdam fork](installing-networks.mdx#client-versions)).
:::

## Before you start

* A running Stack (`obol stack up`, see the [Quickstart](quickstart.mdx)) on a machine with room for an Ethereum node. Hoodi needs about 150 GB of disk. Mainnet needs about 2 TB of fast SSD and 32 GB of RAM to run the node and a dv-pod together.
* The network you'll validate on, agreed with the other operators. This guide uses `hoodi`.
* For the Launchpad route: the Ethereum address you'll connect to the [Launchpad](../learn/intro/launchpad.md) with (your operator address).
* Your cluster-mates, and how you'll create the cluster: a [Launchpad invite](#launchpad-invite), or a [cluster definition](#cluster-definition-from-the-cli) made with `charon create dkg`.
* The Charon version everyone will run. Charon's DKG only connects peers on the same minor version (for example, all `v1.11.x`). The `dv-pod` chart runs the DKG with the same Charon image it runs afterwards (chart 0.24.0 runs `v1.11.4`), so compare it with the other operators before the DKG.

## Step 1: Install and sync an Ethereum node

Install a full node for the cluster's network, then deploy it:

```shell
obol network install ethereum --network=hoodi
obol network sync ethereum/hoodi
```

The deployment ID defaults to the network name (`hoodi` here), so the node runs in namespace `ethereum-hoodi`. Charon reaches its beacon API at `http://ethereum-beacon.ethereum-hoodi.svc.cluster.local:5052`. Use [`--execution-client` and `--consensus-client`](installing-networks.mdx#configuration-options) to pick clients. On mainnet, prefer minority clients.

The Stack doesn't run MEV-boost (see [MEV](installing-networks.mdx#mev)), so your dv-pod keeps `charon.builderApi=false`, and your cluster must agree to run without MEV.

Wait for the node to sync before you install the dv-pod:

```shell
obol network status ethereum/hoodi
```

This shows the execution and consensus clients' sync state, peers and versions, and a one-line verdict. Continue when it says `synced`. Hoodi usually takes a few hours, and mainnet can take days. `obol network list` shows your installed nodes.

:::info
On a testnet you can install the dv-pod before the node finishes syncing: the chart falls back to the public [publicnode.com](https://publicnode.com) beacon API for the network while yours catches up (`charon.publicnodeFallback`, on by default). Never let mainnet duties depend on that fallback.
:::

## Step 2: Install the dv-pod

Install the chart as an [app](installing-apps.md), then deploy it. Run **one** of these, depending on how you'll create the cluster.

For a [Launchpad invite](#launchpad-invite), with your operator address:

```shell
obol app install obol/dv-pod@0.24.0 --name dv-pod --id hoodi \
  --set network=hoodi \
  --set charon.operatorAddress=<YOUR_OPERATOR_ADDRESS>
obol app sync dv-pod/hoodi
```

For a [cluster definition from the CLI](#cluster-definition-from-the-cli) that doesn't exist yet, publish your ENR first:

```shell
obol app install obol/dv-pod@0.24.0 --name dv-pod --id hoodi \
  --set network=hoodi \
  --set mode=enr
obol app sync dv-pod/hoodi
```

* The release and the namespace are both `dv-pod-hoodi`. The pod is `dv-pod-hoodi-0`, and the ConfigMaps are `dv-pod-hoodi-enr` and `dv-pod-hoodi-dkg-status`.
* Always set `network`. It must match your node's network; the chart's default is `mainnet`.
* The app's settings live in `~/.config/obol/applications/dv-pod/hoodi/values.yaml`. It starts from the chart's Obol Stack example, which sets:
  * `mode: launchpad`
  * the in-cluster beacon node for `network`, with the publicnode fallback
  * `charon.builderApi: false`
  * a `ServiceMonitor` labelled `release: monitoring`, so the Stack's Prometheus scrapes Charon
  * `statusReaders` for the Hermes agent (service account `hermes` in namespace `hermes-obol-agent`), so it can read this release's DKG status and ENR ConfigMaps. It gets no access to Secrets.
  * a placeholder nickname, `obol-stack` (see [Nickname](#nickname))
* The beacon node defaults to the Stack's node for `network` (`ethereum-hoodi` here). If `obol network list` shows your node under another id, add `--set 'charon.beaconNodeEndpoints[0]=http://ethereum-beacon.ethereum-<id>.svc.cluster.local:5052'`.

To change the dv-pod later, edit that `values.yaml` and run `obol app sync dv-pod/hoodi`. Don't use `obol helm upgrade` on it: the next sync refuses because the release changed outside `obol app`, and `--force` would undo your change.

The chart generates this node's ENR private key (in the Secret `dv-pod-hoodi-enr-key`) and publishes the public ENR to a ConfigMap. Read it with:

```shell
obol kubectl get configmap dv-pod-hoodi-enr -n dv-pod-hoodi -o jsonpath='{.data.enr}'
```

:::warning
The ENR private key is your node's identity in the cluster, and it can't change once the cluster exists. The chart never overwrites it, and `obol app delete` keeps it. Keep a copy somewhere safe (`obol kubectl get secret dv-pod-hoodi-enr-key -n dv-pod-hoodi -o yaml`).
:::

## Step 3: Create or join the cluster

All operators in a cluster should use the same route.

### Launchpad invite {#launchpad-invite}

The pod waits in its `dkg-sidecar` init container (`Init:0/N` in `obol kubectl get pod dv-pod-hoodi-0 -n dv-pod-hoodi`) until your cluster is ready on the Launchpad.

1. Open the Launchpad for your network ([Hoodi](https://hoodi.launchpad.obol.org), [mainnet](https://launchpad.obol.org)) and connect the wallet for your operator address.
2. Create the cluster, or accept the invite you were sent, following [Create a DV With a Group](../run-a-dv/start/create-a-dv-with-a-group.mdx#step-2-create-a-cluster-or-accept-an-invitation-to-a-cluster).
3. When the Launchpad asks for your ENR, paste **this pod's** ENR from Step 2. The sidecar only accepts a cluster definition that contains it.
4. Sign with your wallet. The chart and its sidecar never sign anything for you.

Once every operator has signed, the DKG starts on its own.

### Cluster definition from the CLI {#cluster-definition-from-the-cli}

If your group makes the definition with `charon create dkg` instead (see [Create a DV With a Group](../run-a-dv/start/create-a-dv-with-a-group.mdx), **CDVN** tabs), install with `mode=enr` in Step 2. In that mode the chart only publishes your ENR: no pod runs, nothing polls the Obol API, and the status reads `WaitingForDefinition`. Don't use a placeholder Launchpad invite to get an ENR.

1. Send your ENR from Step 2 to the cluster creator.
2. The creator runs `charon create dkg ... --operator-enrs=<all operators' ENRs> --publish` and shares the config hash it prints. With `--publish`, the definition is posted to the Obol API, so everyone can fetch and check the same file.
3. Point your dv-pod at it. In `~/.config/obol/applications/dv-pod/hoodi/values.yaml`, set:

   ```yaml
   mode: definition
   dkg:
     definition:
       configHash: "0x<CONFIG_HASH>"
   ```

   Then run `obol app sync dv-pod/hoodi`. The pod starts now and keeps the ENR you shared.

Definitions made with operator ENRs need no signatures. If the definition lists operator addresses, every operator still signs it on the Launchpad.

:::warning
Never switch a running validator to `mode: enr`: it stops Charon and the validator client.
:::

## Step 4: Watch the DKG

The sidecar records its progress in the `dv-pod-hoodi-dkg-status` ConfigMap:

```shell
obol kubectl get configmap dv-pod-hoodi-dkg-status -n dv-pod-hoodi \
  -o jsonpath='{.data.phase}{"\n"}{.data.message}{"\n"}{.data.signatures}{"\n"}'
```

| Phase | Meaning |
| --- | --- |
| `WaitingForDefinition` | `mode: enr`: your ENR is published and nothing else runs yet |
| `WaitingForInvite` | No definition containing this pod's ENR yet |
| `WaitingForSignatures` | Found it; `signatures` shows how many operators have signed (for example `3/4`) |
| `DefinitionReady` | Everyone has signed; the DKG runs next |
| `Complete` | The DKG finished; `lockHash` and `numValidators` are set |
| `LockPresent` | A cluster-lock was already there, so no DKG ran |
| `Failed` | Read `message`, then the logs below |

Every operator's node must be online at the same time for the ceremony. To follow it in detail:

```shell
obol kubectl logs dv-pod-hoodi-0 -n dv-pod-hoodi -c dkg-sidecar -f   # waiting for the invite and signatures
obol kubectl logs dv-pod-hoodi-0 -n dv-pod-hoodi -c charon-dkg -f    # the ceremony
obol kubectl logs dv-pod-hoodi-0 -n dv-pod-hoodi -c dv-pod -f        # Charon, once the cluster-lock exists
```

If the DKG keeps retrying, check that every operator is online and runs the same Charon minor version. The chart's [troubleshooting guide](https://github.com/ObolNetwork/helm-charts/blob/main/charts/dv-pod/TROUBLESHOOT.md) covers the other cases.

### How peers reach your node

The Stack doesn't publish a peer-to-peer port, so operators outside your machine reach your dv-pod through Charon relays (Obol's by default). The DKG and validator duties work over relays, with one extra hop. dv-pods in the same Stack connect to each other directly. Accepting direct connections from other machines needs host and router changes that the Stack doesn't make for you; see [Peer connectivity](https://github.com/ObolNetwork/obol-stack/blob/main/docs/guides/apps.md#peer-connectivity-relays-only-by-default) in the Obol Stack repository.

## Step 5: Back up and verify

After the DKG, the pod's `charon-data` volume holds `cluster-lock.json`, `deposit-data*.json` and your key shares in `validator_keys/`. Copy it off the Stack and store it encrypted before you deposit. Copy from the `validator-client` container: since chart 0.23 the Charon container (`dv-pod`) sees an empty `validator_keys/`, so a copy from it has no key shares.

```shell
obol kubectl cp dv-pod-hoodi/dv-pod-hoodi-0:/charon-data ./dv-pod-hoodi-charon-data -c validator-client
ls dv-pod-hoodi-charon-data/validator_keys   # must list keystore-*.json; if empty, the backup has no key shares
tar czf dv-pod-hoodi-charon-data.tgz dv-pod-hoodi-charon-data && rm -rf dv-pod-hoodi-charon-data
```

With the Prysm validator client (its image has no `tar`, which `kubectl cp` needs) or `validatorClient.enabled: false`, use the short-lived pod in the chart README's [Backing up charon-data](https://github.com/ObolNetwork/helm-charts/tree/main/charts/dv-pod#backing-up-charon-data) section.

`obol stack export` doesn't replace this backup. The volume and the ENR Secret survive `obol app delete`, but not `obol stack purge`.

Then check the cluster before any deposit:

* Compare the cluster-lock with what you agreed: operators, threshold, number of validators, withdrawal and fee recipient addresses, and network. Every operator should have the same `lock_hash` (the `lockHash` key in the status ConfigMap).
* Run the [Charon test suites](../run-a-dv/prepare/test-a-cluster.mdx) from inside the pod:

  ```shell
  obol kubectl exec dv-pod-hoodi-0 -n dv-pod-hoodi -c dv-pod -- charon alpha test peers \
    --lock-file=/charon-data/cluster-lock.json --private-key-file=/data/charon-enr-private-key
  obol kubectl exec dv-pod-hoodi-0 -n dv-pod-hoodi -c dv-pod -- charon alpha test beacon \
    --endpoints=http://ethereum-beacon.ethereum-hoodi.svc.cluster.local:5052
  ```

Then [activate your validators](../run-a-dv/running/activate-a-dv.md).

## Monitor your node

With the `ServiceMonitor` from the values file, the Stack's Prometheus scrapes Charon. The Stack doesn't ship Grafana, so query Prometheus directly:

```shell
obol kubectl -n monitoring port-forward svc/monitoring-kube-prometheus-prometheus 9090:9090
```

Then open `http://localhost:9090` and try queries such as `app_monitoring_readyz{namespace="dv-pod-hoodi"}` (1 means Charon is ready), `p2p_ping_success{namespace="dv-pod-hoodi"}` (peer reachability) or `increase(core_tracker_failed_duties_total{namespace="dv-pod-hoodi"}[1h])`. See [Monitoring](../run-a-dv/running/monitoring.md) for what the metrics mean, and `obol network status` for the Ethereum node.

## Show your node on the Launchpad

Two optional settings make your node show up properly on the Launchpad cluster page and in Obol's hosted dashboards: a nickname and Obol monitoring. Each one is an `obol app sync` that restarts the pod. Set them at install, or, once validators are active, when the rest of the cluster can cover a short restart.

### Nickname

`charon.nickname` (up to 32 characters) is how your node appears on the Launchpad, in Obol's dashboards and in the other operators' logs. It is public.

* Running for an organisation? Use its name, for example `DV Labs`. A recognisable name builds trust with the other operators and with stakers.
The Obol Stack example sets the placeholder `obol-stack`; replace it with your own.

* Running privately? Use a pseudonym that doesn't reveal your name, your machine's hostname or your wallet address, for example your stack id plus the network (`obol doctor` prints `stack <id> running`).

### Obol monitoring

With a monitoring credential from the Obol team (it looks like `obol20tnt8UC...`), the chart runs a small Prometheus that sends Charon's metrics to Obol. That powers the performance view on the Launchpad and Obol's hosted dashboards. This needs `dv-pod` chart **0.22.1** or later.

Keep the credential out of your Helm values and command lines. Values are stored in the Helm release, and `helm get values` prints them. Put it in a file instead, and load the file into a Kubernetes Secret:

1. Create a private file and paste the credential into it, with nothing else:

   ```shell
   f=~/.config/obol/obol-monitoring-credential
   (umask 077 && mkdir -p "$(dirname "$f")" && touch "$f")
   open -e "$f"    # macOS; or any editor. Paste, save, close.
   ```

2. Load it into a Secret in the dv-pod's namespace. `obol` reads the file itself and never prints it:

   ```shell
   obol app secret set dv-pod/hoodi obol-monitoring --from-file token="$f"
   ```

3. Point the dv-pod at the Secret, and set your nickname, in `~/.config/obol/applications/dv-pod/hoodi/values.yaml`:

   ```yaml
   centralMonitoring:
     enabled: true
     existingSecret: obol-monitoring
   charon:
     nickname: "DV Labs"
   ```

   Keep the other `charon` settings that are already in the file. Then run `obol app sync dv-pod/hoodi`.

4. Check that Obol accepts the credential: the logs of the new Prometheus pod should show no `401` or `403` errors.

   ```shell
   obol kubectl logs deploy/dv-pod-hoodi-prometheus -n dv-pod-hoodi --tail=50
   ```

   If they do, fix the file and rerun step 2. Prometheus reads the credential again on every send, so it needs no restart.

Once the Secret exists you can delete the file. To change the credential later, repeat steps 1 and 2. If you use Claude Code with the Obol skills, it follows this flow: it creates the file for you to paste into, and never reads it.

To also send logs, see [push metrics and logs to Obol](../run-a-dv/start/obol-monitoring.mdx).

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

Move to a new chart version with `obol app upgrade`:

```shell
obol helm repo update
obol app upgrade dv-pod/hoodi --version <NEW_VERSION>
```

It checks that the version exists, sets it in the app's `helmfile.yaml` and syncs. If the release was changed outside `obol app`, the sync is refused and the old version is put back. Your `values.yaml` holds only your own settings, so the new chart's defaults, including its Charon version, apply. `values.yaml` itself isn't changed: check the new chart's notes for settings you may want to add.

(By hand: edit `version:` in `~/.config/obol/applications/dv-pod/hoodi/helmfile.yaml`, then run `obol app sync dv-pod/hoodi`.)

 Read [Update a DV](../run-a-dv/running/update-a-dv.mdx) and the chart's upgrade notes first. Once validators are active, don't upgrade or restart more than one node of the cluster at a time.

`obol app delete dv-pod/hoodi` removes the Helm release but keeps the namespace, the `charon-data` volume, the ENR Secret and the app's configuration; `obol app sync dv-pod/hoodi` brings the same node back. `--delete-data` deletes all of it: only use it once you have a backup and no longer need this node's keys. Never run the same validator keys in two places at once: that can get the validators slashed.

## Existing Helm installs {#existing-helm-installs}

Before v0.19.0, this page installed the dv-pod with `obol helm upgrade --install dv-pod-hoodi … --namespace dv-pod`. You can move such a release to `obol app`, or keep managing it with Helm.

**Move it to `obol app`.** `obol app` adopts the release where it is, so the namespace, ENR Secret and `charon-data` volume stay the same. Adopt it at the chart version it runs now, then upgrade:

```shell
obol helm list -n dv-pod                     # the release name and its chart version
obol app install obol/dv-pod@<CURRENT_VERSION> --name dv-pod --id hoodi \
  --namespace dv-pod --release dv-pod-hoodi --adopt
obol app sync dv-pod/hoodi
obol app upgrade dv-pod/hoodi --version 0.24.0
```

`values.yaml` starts from the release's current values. From then on, manage it as this page describes, with `dv-pod/hoodi` and namespace `dv-pod` instead of `dv-pod-hoodi`. If other Helm releases share the namespace, `obol app delete` removes only this one.

**Or keep it on Helm.** Upgrade with a pinned version and `--reset-then-reuse-values`, which picks up the new chart's defaults (plain `--reuse-values` would keep the old Charon version):

```shell
obol helm repo update
obol helm upgrade dv-pod-hoodi obol/dv-pod --version 0.24.0 -n dv-pod --reset-then-reuse-values --timeout=10m
```

For Obol monitoring on such a release, create the Secret with `obol kubectl create secret generic obol-monitoring -n dv-pod --from-file=token="$f"` and add `--set centralMonitoring.enabled=true --set centralMonitoring.existingSecret=obol-monitoring` to the upgrade. `obol helm uninstall dv-pod-hoodi -n dv-pod` keeps the `charon-data` volume and the ENR Secret. Don't run `obol app delete` on it.

## Run Charon outside the Stack

To run a Charon node in Docker on the same machine (for example a [CDVN](https://github.com/ObolNetwork/charon-distributed-validator-node) setup) against the Stack's Ethereum node, forward the node's beacon API with [`obol network expose`](installing-networks.mdx#use-the-node-from-docker-containers) and point Charon's beacon node endpoint at it.
