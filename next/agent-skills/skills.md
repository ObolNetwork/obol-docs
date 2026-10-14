# Skills Reference

The [Obol plugin](README.md) contains the skills below. Claude picks the right one from your request. You can also call one directly with `/obol:<skill-name>`.

| Skill | Use it to | Runs against |
| --- | --- | --- |
| [`create-cluster-invitation`](#create-cluster-invitation) | Create a DV cluster invitation and coordinate the DKG | Docker (`charon` image) or the Obol SDK |
| [`test-a-dv-cluster`](#test-a-dv-cluster) | Run `charon alpha test` suites against a node or cluster | A running Charon, or Docker |
| [`dvpod`](#dvpod) | Deploy, upgrade, back up, and troubleshoot a DV on Kubernetes | `kubectl` + `helm` |
| [`dvpod-monitoring`](#dvpod-monitoring) | Query the metrics and logs of a deployed DVpod (read-only) | `kubectl` + `helm` |
| [`obol-monitoring`](#obol-monitoring) | Triage cluster health and duty failures in Obol's hosted Grafana | Python 3, Grafana API token |
| [`run-obol-stack`](#run-obol-stack) | Install, operate, and sell services from the Obol Stack, and run your part of a DV in it | Docker |
| [`distributed-validators`](#distributed-validators) | Check DV cluster health, validator performance, operators and exits via the Obol API (read-only) | `curl` |
| [`dv-steward`](#dv-steward) | Let the Obol Stack's Hermes agent watch the Stack's own DV node and alert you (read-only) | An Obol Stack agent |

## `create-cluster-invitation`

This skill walks a cluster creator through making the `cluster-definition.json` that other operators accept, and then through the [DKG ceremony](../learn/charon/dkg.md) that produces the key shares and `cluster-lock.json`. It works for solo operators, groups of friends, squads, and institutional or Lido Simple DVT clusters. It also covers the choice between inviting operators by Ethereum address (they accept on the [Launchpad](https://launchpad.obol.org)) and inviting them by ENR (they accept on the CLI), and hands the result to a `dv-pod` by Launchpad invite or by the definition's config hash. Before anything is created, it checks that every operator runs the same Charon minor version, which the DKG requires. It explains what it means to use an [OVM or splits contract](../learn/intro/obol-splits.md) as the withdrawal address.

The skill uses the `charon` Docker image by default. It turns to the [Obol SDK](../sdk/index.md) only when you need to integrate programmatically. It pins the Charon version and keeps key material out of git repositories and cloud-synced folders. Before any deposit, it walks you through checking the cluster-lock, the withdrawal and fee recipient addresses, and the deposit data.

**Needs:** Docker. Have the operator addresses or ENRs, the withdrawal and fee recipient addresses, and the target network ready.

**Try:**

```text
Help me create a 4-operator DV cluster on Hoodi with my friends, inviting them by Ethereum address.
```

Related docs: [Create a DV With a Group](../run-a-dv/start/create-a-dv-with-a-group.mdx), [Create a DV Alone](../run-a-dv/start/create-a-dv-alone.mdx).

## `test-a-dv-cluster`

This skill runs the [`charon alpha test`](../advanced-and-troubleshooting/troubleshooting/test_command.mdx) suites (`infra`, `peers`, `beacon`, `validator`, `mev`, `all`) and picks the right suite for where you are. A solo operator waiting on cluster-mates starts with `infra`, while the full suite is the final check before activation. Where it can, it runs the tests inside your running Charon container with `--publish`, so the signed results are tied to your node's real ENR. It reads `Poor` and `Fail` results back to you along with Charon's own suggestions.

**Needs:** a running Charon (Docker Compose or Kubernetes), or Docker for a one-off `infra` run.

**Try:**

```text
Run the Charon test suites against my node and tell me if anything needs fixing before activation.
```

Related docs: [Test a Cluster](../run-a-dv/prepare/test-a-cluster.mdx).

## `dvpod`

This skill deploys and manages a DVpod, which runs a distributed validator on Kubernetes using the [`dv-pod` Helm chart](https://github.com/ObolNetwork/helm-charts/tree/main/charts/dv-pod). It handles the following actions:

- `deploy`: create a new cluster or join an existing one
- `status` and `logs`
- `troubleshoot`
- `upgrade`
- `enr`: retrieve your node's ENR
- `backup` and `recover`
- `destroy`

It also sets up monitoring, either by remote-writing metrics to Obol, through a `ServiceMonitor`, or by shipping logs to Loki. It pins chart versions, sets the network at install, and reads your node's ENR and DKG progress from the chart's ConfigMaps. In the [Obol Stack](../obol-stack/run-a-dv.md) it installs with `obol helm` from the chart's Obol Stack values file, after the local node has synced. It always asks before deleting a release, a secret, or a persistent volume, before upgrading a release whose validators are active, and before restoring keys during `recover`. It never reads private keys out of Kubernetes secrets.

**Needs:** a Kubernetes cluster, `kubectl`, `helm`, and a reachable beacon node endpoint.

**Try:**

```text
Deploy a DVpod on my Kubernetes cluster to join an existing Obol cluster on mainnet.
```

## `dvpod-monitoring`

This skill investigates a running DVpod. It checks health, Charon errors, peer connectivity, duty performance, and beacon node behaviour. It queries the bundled Prometheus, the Obol Stack's Prometheus, Charon's `/metrics` endpoint, `kubectl logs`, or Loki, depending on what is set up. It is strictly read-only and passes any change over to `dvpod`.

**Needs:** `kubectl` and `helm` access to a deployed DVpod.

**Try:**

```text
Give me a health snapshot of my DVpod and explain any Charon errors from the last hour.
```

## `obol-monitoring`

This skill diagnoses clusters through Obol's hosted Grafana, using Prometheus metrics and Loki logs. It runs a first-pass cluster triage, analyses failed duties slot by slot to rebuild a consensus timeline, and gives a fleet overview across many clusters. It maps [failure reasons](../advanced-and-troubleshooting/troubleshooting/duty-failure-reasons.md) to concrete fixes.

**Needs:** Python 3.6 or later and `OBOL_GRAFANA_API_TOKEN` (see [Configuration](README.md#configuration)). Your cluster must [push metrics and logs to Obol](../run-a-dv/start/obol-monitoring.mdx). The skill doesn't work with a self-hosted Grafana.

**Try:**

```text
Triage my Obol cluster "<cluster name>" on mainnet and explain why attestations are failing.
```

## `run-obol-stack`

This skill helps you install, boot, and operate the [Obol Stack](../obol-stack/README.md). It covers prerequisites, `obol stack up`, model setup, syncing networks, and Cloudflare tunnels. To [run your part of a DV in the Stack](../obol-stack/run-a-dv.md), it syncs a local Ethereum node, waits for `obol network status` to report `synced`, and then hands over to `dvpod`, `create-cluster-invitation` and `test-a-dv-cluster`. It then helps you turn your agent into a paid service with x402 payments and ERC-8004 registration. Once your agent is live in the Stack's dashboard, the agents inside the Stack take over with their own [built-in skills](../obol-stack/agents-and-skills.md).

**Needs:** Docker. Ollama, an Anthropic API key, or an OpenAI API key for model inference.

**Try:**

```text
Install the Obol Stack on this machine and help me sell my first paid agent service.
```

Related docs: [Obol Stack Quickstart](../obol-stack/quickstart.mdx), [Build a Profitable Obol Stack](../obol-stack/build-a-profitable-stack.md).

## `distributed-validators`

This skill reads public data about DV clusters from the Obol API: cluster configuration, validator effectiveness and beacon chain states, operator details, and exit progress. It looks clusters up by lock hash, config hash or operator address, and it can't create clusters or submit exits.

It works as a Claude Code skill, and you can also add it to an Obol Stack agent with `obol agent skills add distributed-validators` (Obol Stack v0.16 and later).

**Needs:** `curl`. No API key.

**Try:**

```text
How are the validators in my cluster with lock hash 0x... performing this week?
```

## `dv-steward`

This skill is for the Hermes agent inside the Obol Stack, not for Claude Code. It watches the Stack's own Ethereum node and `dv-pod` releases: sync, peers, Charon readiness, cluster peers, duties, DKG status, restarts and disk. It alerts you only when something needs you, for example on Telegram, on a schedule you set with `obol hermes cron`. It's strictly read-only: it never restarts anything or reads keys, and gives you the command to run instead.

**Needs:** Obol Stack v0.16 or later, a `dv-pod` installed with the chart's Obol Stack values (so Prometheus scrapes it and Hermes can read its status), and `obol agent skills add dv-steward`.

Related docs: [Run Your Part of a DV](../obol-stack/run-a-dv.md#let-hermes-watch-your-node).
