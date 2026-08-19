---
description: "A local Kubernetes-based framework for running blockchain networks"
sidebar_label: "Introduction"
slug: /obol-stack/obol-stack
---

# Introduction to the Obol Stack

The Obol Stack is a local development environment for running blockchain networks on your machine. It provides a simplified CLI experience for managing a Kubernetes cluster with dynamically deployable network instances, allowing developers and operators to run Ethereum nodes, Layer 2 networks, and other blockchain infrastructure locally.

:::info
The Obol Stack is designed for local development and testing. For production deployments, refer to the respective network documentation and use appropriate infrastructure.
:::

## What is the Obol Stack?

Obol Stack is a two-part system:

1. **obolup.sh** - A bootstrap installer that sets up your environment
2. **obol CLI** - A Go-based binary for stack and network management

The stack runs entirely on your local machine using [k3d](https://k3d.io/) (Kubernetes in Docker), providing a lightweight yet fully-featured Kubernetes environment for blockchain development.

## Key features

* **Local-first architecture** - Run everything on your machine without cloud dependencies.
* **Multiple network support** - Deploy Ethereum nodes, Helios light clients, Aztec sequencers, and more.
* **Unique deployments** - Each network installation creates a uniquely-namespaced deployment, allowing multiple instances of the same network type to run simultaneously.
* **Simplified tooling** - Wraps kubectl, helm, and other Kubernetes tools with automatic configuration.
* **Persistent storage** - Data persists across cluster restarts.

## Core concepts

### Stack lifecycle

The Obol Stack follows a simple lifecycle:

| Command | Description |
| --- | --- |
| `obol stack init` | Initialize cluster configuration |
| `obol stack up` | Start the Kubernetes cluster |
| `obol stack down` | Stop the cluster (preserves data) |
| `obol stack purge` | Remove cluster and configuration |

### Network deployments

Networks are deployed as isolated Kubernetes namespaces. Each deployment gets a unique identifier (either user-specified or auto-generated), enabling:

* Multiple deployments of the same network type (e.g., mainnet and testnet Ethereum nodes)
* Isolated resources per deployment
* Independent lifecycle management
* Simple cleanup via namespace deletion

### Passthrough commands

Obol Stack wraps common Kubernetes tools with automatic kubeconfig configuration:

```shell
obol kubectl get pods -A          # kubectl with stack kubeconfig
obol helm list -A                 # helm with stack kubeconfig
obol k9s                          # k9s terminal UI
```

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
Running full Ethereum nodes requires significant disk space. Mainnet execution clients can require 1+ TB of storage. Plan your storage accordingly based on which networks you intend to run.
:::

## Architecture overview

```
┌─────────────────────────────────────────────────────────────┐
│                        Obol Stack                           │
├─────────────────────────────────────────────────────────────┤
│  obol CLI                                                   │
│  ├── stack (init, up, down, purge)                         │
│  ├── network (list, install, sync, delete)                 │
│  └── passthrough (kubectl, helm, helmfile, k9s)            │
├─────────────────────────────────────────────────────────────┤
│  k3d Cluster                                                │
│  ├── 1 Server + 3 Agent Nodes                              │
│  ├── Traefik Ingress (ports 8080, 8443)                    │
│  └── Local Path Storage                                     │
├─────────────────────────────────────────────────────────────┤
│  Network Deployments                                        │
│  ├── ethereum-mainnet-prod (namespace)                     │
│  ├── ethereum-hoodi-test (namespace)                     │
│  ├── aztec-mainnet-node (namespace)                        │
│  └── helios-knowing-wahoo (namespace)                      │
└─────────────────────────────────────────────────────────────┘
```

## Need assistance?

If you have questions or encounter issues with Obol Stack, head over to our [Discord](https://discord.gg/n6ebKsX46w) where a member of our team or the community will be happy to assist you.
