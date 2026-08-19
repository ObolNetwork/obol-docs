# Introduction

The Obol Stack is a local development environment for running AI agents alongside blockchain infrastructure. It provides a simplified CLI for managing a Kubernetes cluster with an AI agent ([OpenClaw](https://openclaw.ai)), dynamically deployable blockchain networks, and public access via Cloudflare tunnels.

:::info
The Obol Stack is alpha software. For production deployments, refer to the respective network documentation and use appropriate infrastructure.
:::

## What is the Obol Stack?

Obol Stack is a two-part system:

1. **obolup.sh** - A bootstrap installer that sets up your environment
2. **obol CLI** - A Go-based binary for stack, agent, and network management

The stack runs entirely on your local machine using [k3d](https://k3d.io/) (Kubernetes in Docker), providing a lightweight yet fully-featured Kubernetes environment.

## Key features

* **Agent-first** - Deploy an AI agent (OpenClaw) that can interact with blockchain networks and expose services.
* **Multiple network support** - Deploy Ethereum nodes, Aztec sequencers, and more.
* **Unique deployments** - Each installation creates a uniquely-namespaced deployment, allowing multiple instances to run simultaneously.
* **Public access** - Expose services to the internet via Cloudflare tunnels and x402 payment gateways.
* **Simplified tooling** - Wraps kubectl, helm, and other Kubernetes tools with automatic configuration.

## CLI overview

| Command                                       | Description                    |
| --------------------------------------------- | ------------------------------ |
| `obol stack init / up / down / purge`         | Cluster lifecycle management   |
| `obol agent init`                             | Set up the AI agent (OpenClaw) |
| `obol openclaw dashboard / setup / ...`       | Manage OpenClaw instances      |
| `obol model setup / status`                   | Configure LLM providers        |
| `obol network list / install / sync / delete` | Manage blockchain networks     |
| `obol app install / sync / list / delete`     | Install arbitrary Helm charts  |
| `obol tunnel status / login / provision`      | Manage Cloudflare tunnels      |
| `obol kubectl / helm / k9s`                   | Kubernetes tool passthroughs   |

## Default infrastructure

When you start the stack, the following services are deployed automatically:

| Service           | Namespace       | Description                                      |
| ----------------- | --------------- | ------------------------------------------------ |
| **Traefik**       | `traefik`       | Gateway API ingress controller                   |
| **Cloudflared**   | `traefik`       | Cloudflare tunnel connector                      |
| **ERPC**          | `erpc`          | Unified RPC load balancer for Ethereum endpoints |
| **Obol Frontend** | `obol-frontend` | Web management dashboard                         |
| **Monitoring**    | `monitoring`    | Prometheus + kube-prometheus-stack               |
| **llmspy**        | `llm`           | LLM proxy/router for AI agent traffic            |

## System requirements

### Prerequisites

* **Docker** 20.10.0 or later (daemon must be running)
* **macOS** (Darwin) or **Linux**
* **amd64** or **arm64** architecture

### Resource recommendations

| Component   | Minimum | Recommended                 |
| ----------- | ------- | --------------------------- |
| **CPU**     | 4 cores | 8 cores                     |
| **RAM**     | 8 GB    | 16 GB                       |
| **Storage** | 50 GB   | 500+ GB (varies by network) |

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
|  +-- agent     (init)                                   |
|  +-- openclaw  (dashboard, setup, sync, skills, ...)     |
|  +-- model     (configure, status)                      |
|  +-- network   (list, install, sync, delete)            |
|  +-- app       (install, sync, list, delete)            |
|  +-- tunnel    (status, login, provision)               |
|  +-- kubectl / helm / helmfile / k9s                    |
+---------------------------------------------------------+
|  k3d Cluster                                            |
|  +-- Traefik Gateway (ports 80, 8080, 443, 8443)       |
|  +-- Cloudflared (public tunnel)                        |
|  +-- llmspy (LLM gateway)                               |
|  +-- ERPC (RPC load balancer)                           |
|  +-- Obol Frontend (web dashboard)                      |
|  +-- Monitoring (Prometheus)                            |
+---------------------------------------------------------+
|  Deployments                                            |
|  +-- openclaw-<id>        (AI agent + remote-signer)    |
|  +-- ethereum-<id>        (blockchain network)          |
|  +-- aztec-<id>           (blockchain network)          |
|  +-- redis-<id>           (installed app)               |
+---------------------------------------------------------+
```

## Need assistance?

If you have questions or encounter issues with Obol Stack, head over to our [Discord](https://discord.gg/n6ebKsX46w) where a member of our team or the community will be happy to assist you.
