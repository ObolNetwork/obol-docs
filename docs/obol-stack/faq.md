---
description: "Frequently asked questions about the Obol Stack"
sidebar_label: "FAQ"
slug: /obol-stack/faq
---

# Frequently Asked Questions

## General

### What is the Obol Stack?

The Obol Stack is a local Kubernetes-based environment for running AI agents alongside blockchain infrastructure. It uses k3d (Kubernetes in Docker) to provide a lightweight cluster where you can deploy a default AI agent (Hermes), Ethereum nodes, Layer 2 networks, payment-gated services, and other applications.

### Is the Obol Stack suitable for production?

It is not yet advised. The Obol Stack works on mainnet, as do DV pods, but it would be wise to only use it with less than a threshold amount of validator nodes, or with only as much crypto assets under management that you would be okay with an Obol Agent losing. For production validator deployments, see the [Run a DV](../run-a-dv/start/quickstart_overview.md) docs for the latest mainnet guides.

### What operating systems are supported?

* **macOS** (Darwin) — Intel and Apple Silicon
* **Linux** — amd64 and arm64 architectures

Windows is not currently supported. Windows users may be able to use WSL2, but it is not yet tested.

### What are the hardware requirements?

| Resource | Minimum | Recommended |
| --- | --- | --- |
| **CPU** | 4 cores | 8+ cores |
| **RAM** | 8 GB | 16+ GB |
| **Storage** | 50 GB | 500 GB – 2 TB (depends on networks) |

:::info
Running multiple networks or full Ethereum mainnet nodes significantly increases resource requirements.
:::

## Installation

### The installer fails with "Docker daemon not running"

Ensure Docker is installed and running:

```shell
# Check Docker status
docker info

# Start Docker (macOS)
open -a Docker

# Start Docker (Linux)
sudo systemctl start docker
```

### How do I update the Obol Stack?

Back up first, then re-run the installer and upgrade the running stack:

```shell
obol stack export --file ~/obol-stack-backup.tar.gz   # full backup before upgrading
curl -fsSL https://stack.obol.org | bash              # update the obol CLI
obol upgrade                                          # pinned tools, then CRDs, then charts
```

The installer updates the CLI binary while preserving your configuration and data. `obol upgrade` installs any missing or outdated pinned tools (kubectl, helm, k3d, helmfile, k9s, helm-diff), applies chart CRDs first (Helm never upgrades CRDs by itself), then upgrades the charts in the running cluster. `obol update` shows what's out of date without changing anything, and `obol upgrade --tools-only` updates only the tools (no cluster needed). Tools you point `obol` at with `OBOL_<TOOL>` or that it finds on your `PATH` are never modified.

A Homebrew package is planned for a stable release; for now, use the installer above.

### How do I uninstall the Obol Stack?

```shell
obol stack purge -f
rm -f ~/.local/bin/{obol,kubectl,helm,k3d,helmfile,k9s,obolup.sh}
rm -rf ~/.config/obol ~/.local/share/obol
```

### The installer cannot modify /etc/hosts

Manually add the entry, then start (or re-start) the stack:

```shell
echo "127.0.0.1 obol.stack" | sudo tee -a /etc/hosts
obol stack init
obol stack up
# If no LLM was configured, Hermes was skipped:
obol model setup
obol agent init
```

A failed hosts write during install or `obol stack up` is a **warning**, not a hard failure — the CLI and cluster can still be installed. `stack up` will also try to register agent hostnames (`obol-agent.obol.stack`, …).

### How do I skip sudo password prompts (CI / automation)?

Set:

```shell
export OBOL_NONINTERACTIVE=true
```

Hosts updates then fail fast if sudo is not already cached (or NOPASSWD). Pre-write `/etc/hosts`, or run `sudo -v` once in the same TTY before non-interactive commands.

### Why is there no Hermes agent after install?

Usually there is **no model in LiteLLM**: Ollama was skipped at install and no cloud provider was configured. Configure a model, then create the agent:

```shell
obol model setup
obol agent init
obol hermes chat
```

### Why does `http://localhost:8080` return 404?

Traefik serves the frontend only for **`Host: obol.stack`**. Open **`http://obol.stack:8080`** (or `http://obol.stack/` if port 80 is mapped). Ensure `/etc/hosts` contains `127.0.0.1 obol.stack`.

### Is the Cloudflare tunnel always on?

No. After a plain `obol stack up`, the tunnel is **dormant**. It activates on the first selling workflow (e.g. `obol sell demo`) or with `obol tunnel restart`. For a permanent hostname, use `obol tunnel setup` — see [Set up a permanent URL](permanent-url.md).

## The Obol Agent

### What's the default agent?

[Hermes](https://github.com/NousResearch/hermes-agent) is the default Obol Agent runtime. `obol stack up` provisions a default Hermes instance in the `hermes-obol-agent` namespace (when a model is available), with its own Ethereum signing wallet and a built-in skill library.

OpenClaw (`obol openclaw …`, `--runtime openclaw`) is deprecated and will be removed in v0.16. See [Agents & Skills](agents-and-skills.md) to move an OpenClaw wallet to Hermes.

### How do I chat with the agent?

```shell
obol hermes chat
```

That command passes through to the in-cluster Hermes CLI and gives you an interactive chat TUI. Other useful pass-throughs:

```shell
obol hermes skills list           # see installed skills
obol hermes config show           # inspect config
obol hermes -- --help             # full Hermes CLI surface
```

To talk to an agent other than the default, put `--agent <name>` first (`obol hermes --agent research chat`) or set `OBOL_AGENT=<name>`.

### How do I get my agent to message me on Telegram / Discord / Slack?

```shell
obol hermes setup
```

This walks through Hermes' messaging integrations. Once configured, the agent can ping you when long-running work finishes, when a paid service settles a transaction, or any time it decides it needs your attention.

### How do I change the model provider?

```shell
obol model setup
```

Or set up a specific provider:

```shell
obol model setup --provider ollama
obol model setup --provider anthropic
obol model setup --provider openai
obol model setup custom --name my-vllm --endpoint http://192.168.1.10:8000/v1 --model qwen36
```

Custom endpoints work with any OpenAI-compatible server (vLLM, sglang, mlx-lm, etc.).

### Where's the agent's Ethereum wallet?

Each agent instance gets a unique Ethereum signing wallet, backed by a remote-signer service. To inspect:

```shell
obol agent wallet address          # print the address
obol agent wallet list             # list wallets across all instances
```

Back it up — losing it means losing the agent's on-chain identity:

```shell
obol agent wallet backup --file ~/obol-wallet-backup.json --passphrase "..."
```

## Selling services

### What is `obol sell demo`?

`obol sell demo` deploys a small HTTP service behind an x402 payment gate and prints copy-paste instructions for paying it. It's the canonical "first paid endpoint" experience on the Obol Stack.

```shell
obol sell demo                    # 1 OBOL/req on Ethereum mainnet
obol sell demo blocks             # 0.0001 USDC/req on base-sepolia
obol sell demo quant              # 0.01 USDC/req on base-sepolia
```

Use it to see the full sell → discover → pay → receive loop end-to-end before you wrap your own services with `obol sell http` or `obol sell inference`.

### Why pay in $OBOL on mainnet?

Buyers paying in `$OBOL` on Ethereum mainnet sign an EIP-2612 permit off-chain. The Obol-operated x402 facilitator batches that permit with the transfer at settlement time, **so buyers never spend ETH on gas** and never need to do a one-time `approve`. They just sign a message, the seller gets paid in OBOL, the facilitator covers the on-chain cost.

USDC and other tokens settle on the rail their issuer supports (EIP-3009 for USDC).

### How do I list my service on a public agent registry?

```shell
obol sell register --chain mainnet --name my-service
```

This publishes the agent's wallet + service catalog to the [ERC-8004](https://eips.ethereum.org/EIPS/eip-8004) Identity Registry on the chain you specify. Note that this requires ETH on the registering wallet for gas.

`obol sell demo` deliberately skips registration by default — run `obol sell register` later when you want on-chain discovery.

### How do I buy inference from another stack?

```shell
obol buy inference https://seller.example/
```

The command walks the seller's catalog, previews the cost, pre-signs payment authorizations from your agent's wallet, and publishes the remote model as `paid/<model>` through your LiteLLM — your agents can then use it like any local model, with spend bounded by what you pre-authorized. See [Buying Services](buying-services.md).

## Stack operations

### The cluster fails to start

**Port conflicts:**

The Obol Stack uses ports 80, 443, 8080, and 8443. Check for conflicts:

```shell
lsof -i :8080
lsof -i :8443
```

If ports 80/443 are taken (common on macOS where they require root), edit `~/.config/obol/k3d.yaml` and remove the `80:80` and `443:443` entries (keep `8080:80` and `8443:443`). Access at `http://obol.stack:8080` instead.

**Previous cluster not cleaned up:**

```shell
k3d cluster delete --all
obol stack init --force
obol stack up
```

### Can I use my existing kubectl configuration?

The Obol Stack uses an isolated kubeconfig at `~/.config/obol/kubeconfig.yaml` and never writes to `~/.kube/config`. The simplest option is the passthrough: `obol kubectl get nodes` (likewise `obol helm`, `obol helmfile`, `obol k9s`). These run the real tool with the same flags and exit codes, and always target the stack, even if you've exported `KUBECONFIG`; pass `--kubeconfig` to target another cluster. Commands that don't need a cluster, such as `obol helm template` or `obol kubectl version --client`, work before `obol stack up`.

To use your standard `kubectl`, `helm` and `k9s` (with their own completion and plugins) against the stack, load the stack environment into your shell:

```shell
eval "$(obol env)"          # bash/zsh; fish: obol env --shell fish | source
kubectl get nodes
eval "$(obol env --unset)"  # undo
```

### How do I persist data across cluster restarts?

Data is automatically persisted. `obol stack down` stops the cluster but keeps data in `~/.local/share/obol/`. Only `obol stack purge -f` deletes persistent data.

If the cluster itself is deleted and recreated, `obol stack up` restores it from your config directory: models, local networks, RPC upstreams, x402 pricing, ERC-8004 identity, agents, storefront branding, apps, and sell offers.

To move a stack to another machine, or to keep a backup, run `obol stack export --file ~/obol-stack-backup.tar.gz` while the stack is running, and restore it with `obol stack import ~/obol-stack-backup.tar.gz`. The archive contains keystore passwords and API keys; store it like a secret.

## Networks

### How do I know which deployment ID was generated?

The deployment ID is displayed when you run `obol network install`. You can also list deployments:

```shell
ls ~/.config/obol/networks/
```

### Can I run multiple instances of the same network?

Yes. Each deployment gets a unique namespace:

```shell
obol network install ethereum --id=mainnet --network=mainnet
obol network install ethereum --id=hoodi --network=hoodi
```

### How long does it take to sync an Ethereum node?

| Network | Client | Approximate Time |
| --- | --- | --- |
| Hoodi | Reth | 2–6 hours |
| Hoodi | Geth | 4–12 hours |
| Mainnet | Reth | 1–3 days |
| Mainnet | Geth | 3–7 days |

:::info
Sync times depend on hardware, network connection, and chain state.
:::

### My network deployment is stuck in Pending state

```shell
obol kubectl describe pod -n <namespace> <pod-name>
obol kubectl get events -n <namespace>
obol kubectl get pvc -n <namespace>
```

Common causes: insufficient Docker resources, PVC not bound, image pull errors.

## Claude Code plugin

### How do I use the Obol skills with Claude Code?

```
/plugin marketplace add ObolNetwork/skills
/plugin install obol@obol
```

The `run-obol-stack` skill teaches Claude how to drive the CLI: bring-up, agent setup, debugging, deploying networks, and walking through `obol sell demo`. Source: [github.com/ObolNetwork/skills](https://github.com/ObolNetwork/skills).

## Troubleshooting

### Error: "stack not running, use 'obol stack up' first"

Start the cluster:

```shell
obol stack up
```

### Error: "deployment not found" or "multiple deployments found"

If you have a single deployment, `obol network sync` auto-selects it. With multiple deployments, specify which one:

```shell
ls ~/.config/obol/networks/
obol network sync ethereum/correct-id
```

### How do I report a bug?

Report issues on GitHub: [https://github.com/ObolNetwork/obol-stack/issues](https://github.com/ObolNetwork/obol-stack/issues)

Include:

* Obol Stack version (`obol version`)
* Operating system and architecture
* Docker version (`docker version`)
* Steps to reproduce
* Relevant logs (`obol kubectl logs -n <ns> <pod>`)

## Need more help?

Head over to our [Discord](https://discord.gg/n6ebKsX46w) where a member of our team or the community will be happy to assist you.
