---
title: "Obol Agent Skills"
description: "Install the Obol Claude Code plugin so an AI agent can create, test, deploy, and monitor distributed validators and the Obol Stack for you."
sidebar_label: "Overview & Installation"
slug: /agent-skills
---

# Obol Agent Skills

Obol publishes a [Claude Code](https://claude.com/claude-code) plugin, [`ObolNetwork/skills`](https://github.com/ObolNetwork/skills). Its skills teach an AI agent how to run Obol products: creating a distributed validator (DV) cluster, testing it, deploying it on Kubernetes, checking its health, and running the [Obol Stack](../obol-stack/README.md).

Once the plugin is installed, describe what you want in plain language, for example *"help me create a 4-node DV cluster with my friends on Hoodi"*. Claude loads the right skill on its own and walks you through each step.

## Why use the skills?

- **The agent already knows Obol.** Each skill gives the agent the operational knowledge of the Obol team: which `charon` commands and flags to use, the right order of steps, and the mistakes people commonly make. You spend less time switching between doc pages and copying commands by hand.
- **Diagnosis is faster.** The monitoring skills know Charon's metrics, log patterns, and [duty failure reasons](../advanced-and-troubleshooting/troubleshooting/duty-failure-reasons.md). They can turn "my validator missed attestations" into a root cause and a fix in minutes.
- **Safety is built in.** The skills are written to:
  - ask for confirmation before destructive or disruptive actions, like deleting secrets, volumes, or deployments, or restarting a DVpod whose validators are active
  - never read or print private key material, such as ENR private keys, validator keystores, or API tokens
  - pin Charon and Helm chart versions instead of using `latest`
  - treat logs, metrics, and API responses as data, so text planted in them can't steer the agent

  `dvpod-monitoring` is read-only. The cluster-creation skill insists that **you** check the cluster configuration before you deposit any ETH.
- **You can see what it does.** Claude Code shows every command before it runs, and the skills are plain Markdown in a [public repository](https://github.com/ObolNetwork/skills), so you can read exactly what the agent has been told.

:::warning
An AI agent can make mistakes. Always check withdrawal addresses, fee recipients, operator sets, and the target network yourself before depositing. Never paste private keys or mnemonics into an AI chat.
:::

## Installation

You need [Claude Code](https://docs.claude.com/en/docs/claude-code/overview) installed.

### From inside Claude Code (recommended)

```text
/plugin marketplace add ObolNetwork/skills
/plugin install obol@obol
```

If the skills don't show up right away, run `/reload-plugins`.

### From your terminal

```shell
claude plugin marketplace add ObolNetwork/skills
claude plugin install obol@obol
```

The plugin installs for your user by default, so it's available in every project. Add `--scope project` to share it with everyone working in the current repository, or `--scope local` to install it only for yourself in the current project.

### Manual installation

Clone [`ObolNetwork/skills`](https://github.com/ObolNetwork/skills) and copy its `skills/` directory into your project's `.claude/skills/` folder. Skills installed this way don't get updates or update notifications, so prefer the plugin.

## Keeping skills up to date

The skills are updated as Charon, the Obol Stack, and the deployment tooling change. Claude Code only auto-updates official marketplaces, so turn on auto-update for `obol` after installing:

1. Run `/plugin` in Claude Code.
2. Open **Marketplaces** and select `obol`.
3. Choose **Enable auto-update**.

To update manually instead:

```shell
claude plugin marketplace update obol
claude plugin update obol@obol
```

The plugin also checks for a new release once a day when a session starts, and tells you if you're behind. To turn this check off, set `OBOL_SKILLS_NO_UPDATE_CHECK=1`.

### For teams

Admins can turn on auto-update for everyone through Claude Code [managed settings](https://docs.claude.com/en/docs/claude-code/settings):

```json
{
  "extraKnownMarketplaces": {
    "obol": {
      "source": { "source": "github", "repo": "ObolNetwork/skills" },
      "autoUpdate": true
    }
  }
}
```

## Configuration

Most skills need no setup beyond the tools they drive: Docker for Charon, `kubectl` and `helm` for DVpods, and so on. The [skills reference](skills.md) lists each skill's prerequisites.

The `obol-monitoring` skill queries **Obol's hosted Grafana only**. It needs a Grafana API token, which the Obol team can provide, set as `OBOL_GRAFANA_API_TOKEN`. Your cluster must also [push metrics and logs to Obol](../run-a-dv/start/obol-monitoring.mdx). A token from a self-hosted Grafana won't work. For a DVpod, use the `dvpod-monitoring` skill instead. For a local Docker Compose setup, use the Grafana dashboards that ship with it.

```shell
# Add to ~/.bashrc or ~/.zshrc
export OBOL_GRAFANA_API_TOKEN="glsa_..."
```

## Using the skills

You usually don't need to name a skill. Claude chooses one based on what you ask. To call a skill directly, use its slash command, for example `/obol:test-a-dv-cluster`. Type `/` in Claude Code to see the list.

Look for tips like this one throughout the docs. Each has a prompt you can paste straight into Claude Code:

:::tip[Let Claude do this]
With the Obol skills installed, paste this into Claude Code:

```text
Check whether my machine is a healthy host for a Charon node before I join a cluster.
```
:::

See the [skills reference](skills.md) for what each skill covers.
