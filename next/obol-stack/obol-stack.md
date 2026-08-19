# Introduction to the Obol Stack

The Obol Stack is a local-first agent harness: a Kubernetes cluster on your laptop, a default AI agent ([Hermes](https://github.com/NousResearch/hermes-agent)) with its own Ethereum wallet, dynamically-deployable blockchain networks, a Cloudflare tunnel for public exposure, and an [x402](https://www.x402.org/) payment gateway so agents can charge for what they serve.

The thesis is simple: **agents should be able to run real infrastructure, build something valuable on top of it, and sell access to it for micropayments — without asking permission and without standing up cloud accounts.**

:::info
The Obol Stack is alpha software. For production validator deployments, use the [Run a DV](../run-a-dv/start/) docs and dedicated infrastructure.
:::

## What's in the box

Obol Stack is a two-part system:

1. **`obolup.sh`** — bootstrap installer that lays down pinned dependencies (`kubectl`, `helm`, `k3d`, `helmfile`, `k9s`) and the `obol` CLI.
2. **`obol` CLI** — Go binary that drives everything: cluster lifecycle, the agent, networks, payment-gated services, and the tunnel.

The cluster runs entirely on your machine via [k3d](https://k3d.io/) (Kubernetes in Docker).

## Key features

* **Agent-first** — `obol stack up` brings up a default Hermes agent with its own Ethereum signing wallet (backed by a remote-signer), a chat TUI, and a growing skill set. Talk to it with `obol hermes chat`.
* **Sell what your agent builds** — `obol sell demo` deploys a payment-gated HTTP service in one command. Use it as the starting point for selling inference, indexed data, or any HTTP API for $OBOL or USDC micropayments.
* **Native $OBOL micropayments with sponsored gas on mainnet** — when buyers pay in $OBOL on Ethereum mainnet, the Obol facilitator sponsors the on-chain settlement gas. Buyers sign an [EIP-2612](https://eips.ethereum.org/EIPS/eip-2612) permit off-chain and never need ETH. Sellers receive $OBOL directly to their agent wallet.
* **Multiple network support** — sync local Ethereum nodes (mainnet, sepolia, hoodi), Aztec sequencers, and more. Built-in eRPC routes to public RPCs when no local node is present.
* **Public access** — when you sell, a Cloudflare tunnel exposes only the routes you choose (`/services/<name>/*` and discovery metadata). The tunnel stays **dormant** after a plain `obol stack up` until the first sell workflow or `obol tunnel restart` / `obol tunnel setup`. Internal routes (frontend, eRPC) stay locked to `obol.stack`.
* **Unique deployments** — every install gets a uniquely-namespaced deployment, so multiple stacks coexist on one machine.

## CLI overview

| Command | Description |
| --- | --- |
| `obol stack init / up / down / purge` | Cluster lifecycle |
| `obol agent init / new / setup / sync / list / delete` | Manage agent instances (default runtime: Hermes) |
| `obol hermes chat / skills / config / ...` | Pass-through to the in-cluster Hermes CLI |
| `obol model setup / status` | Configure LLM providers (Ollama, Anthropic, OpenAI, custom) |
| `obol network list / install / sync / delete` | Manage blockchain networks |
| `obol sell demo / inference / http / list / status / register` | Create payment-gated services and register on ERC-8004 |
| `obol app install / sync / list / delete` | Install arbitrary Helm charts |
| `obol tunnel status / setup / restart` | Manage the Cloudflare tunnel (`setup` creates a permanent URL) |
| `obol kubectl / helm / helmfile / k9s` | Kubernetes tool passthroughs (auto-configured `KUBECONFIG`) |

## Default infrastructure

When you run `obol stack up`, the following services are deployed automatically:

| Service | Namespace | Purpose |
| --- | --- | --- |
| **Hermes (default agent)** | `hermes-obol-agent` | AI agent + dashboard, with its own Ethereum signing wallet (skipped if no LLM is configured) |
| **Traefik** | `traefik` | Gateway API ingress controller |
| **Cloudflared** | `traefik` | Tunnel connector chart — **dormant** until first sell / `obol tunnel restart` / permanent `tunnel setup` |
| **eRPC** | `erpc` | Unified RPC load balancer (local nodes + public fallbacks) |
| **Obol Frontend** | `obol-frontend` | Web management dashboard (local-only; `Host: obol.stack`) |
| **Monitoring** | `monitoring` | Prometheus + kube-prometheus-stack |
| **LiteLLM** | `llm` | OpenAI-compatible LLM gateway (Ollama, Anthropic, OpenAI, OpenRouter, custom endpoints) |
| **x402 verifier + ServiceOffer controller** | `x402` | Payment gating + reconciliation of payment-gated services |

## Use it from Claude Code

The Obol team publishes a Claude Code plugin with skills for installing, operating, and selling on the Obol Stack.

```
/plugin marketplace add ObolNetwork/skills
/plugin install obol@obol
```

Once installed, Claude Code can drive `obol stack up`, set up the agent, troubleshoot pods, and walk you through `obol sell demo`. Source: [github.com/ObolNetwork/skills](https://github.com/ObolNetwork/skills).

## System requirements

### Prerequisites

* **Docker** 20.10.0 or later (daemon must be running)
* **macOS** (Darwin) or **Linux**
* **amd64** or **arm64** architecture

### Resource recommendations

| Component | Minimum | Recommended |
| --- | --- | --- |
| **CPU** | 4 cores | 8 cores |
| **RAM** | 8 GB | 16 GB |
| **Storage** | 50 GB | 500+ GB (varies by network) |

:::warning
Running full Ethereum nodes requires significant disk space. Mainnet execution clients can require 1+ TB of storage.
:::

## Architecture overview

```
+---------------------------------------------------------+
|                      Obol Stack                         |
+---------------------------------------------------------+
|  obol CLI                                               |
|  +-- stack     (init, up, down, purge)                  |
|  +-- agent     (init, new, setup, sync, list, delete)   |
|  +-- hermes    (passthrough — chat, skills, config)     |
|  +-- model     (setup, status)                          |
|  +-- network   (list, install, sync, delete)            |
|  +-- sell      (demo, inference, http, register, ...)   |
|  +-- app       (install, sync, list, delete)            |
|  +-- tunnel    (status, login, provision)               |
|  +-- kubectl / helm / helmfile / k9s                    |
+---------------------------------------------------------+
|  k3d Cluster                                            |
|  +-- Traefik Gateway (ports 80, 8080, 443, 8443)        |
|  +-- Cloudflared (dormant until sell / tunnel setup)    |
|  +-- LiteLLM (LLM gateway)                              |
|  +-- eRPC (RPC load balancer)                           |
|  +-- Obol Frontend (web dashboard, local-only)          |
|  +-- x402 verifier + ServiceOffer controller            |
|  +-- Monitoring (Prometheus)                            |
+---------------------------------------------------------+
|  Deployments                                            |
|  +-- hermes-obol-agent     (default agent + signer)     |
|  +-- ethereum-<id>         (blockchain network)         |
|  +-- aztec-<id>            (blockchain network)         |
|  +-- demo                  (services from `obol sell`)  |
+---------------------------------------------------------+
```

## Where next

- [Quickstart](quickstart.mdx) — install the stack, talk to your agent, and run `obol sell demo`.
- [Build a profitable Obol Stack](build-a-profitable-stack.md) — end-to-end: bounded archive node → index → paid service → specialized agent → listed on marketplaces.
- [Agents & Skills](agents-and-skills.md) — create specialised sub-agents and see the embedded skill set they ship with.
- [Selling agent services](selling-services.md) — full orientation on the three `sell` shapes, x402 economics, ERC-8004 registration, and Telegram notifications.
- [Buying services](buying-services.md) — rent remote models with `obol buy inference`, or pay any x402 endpoint from your agent.
- [Installing Networks](installing-networks.mdx) — sync Ethereum / Aztec, including bounded archives via `--since`.

## Need assistance?

If you have questions or encounter issues with the Obol Stack, head over to our [Discord](https://discord.gg/n6ebKsX46w) where a member of our team or the community will be happy to assist.
