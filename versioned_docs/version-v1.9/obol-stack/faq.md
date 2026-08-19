---
description: "Frequently asked questions about Obol Stack"
sidebar_label: "FAQ"
slug: /obol-stack/faq
---

# FAQ

## General

### What is Obol Stack?

The Obol Stack is a local Kubernetes-based environment for running AI agents alongside blockchain infrastructure. It uses k3d (Kubernetes in Docker) to provide a lightweight cluster where you can deploy an AI agent (OpenClaw), Ethereum nodes, Layer 2 networks, and other applications.

### Is Obol Stack suitable for production?

No. Obol Stack is designed for local development, testing, and experimentation. For production deployments, use dedicated infrastructure with proper security, redundancy, and monitoring.

### What operating systems are supported?

* **macOS** (Darwin) - Intel and Apple Silicon
* **Linux** - amd64 and arm64 architectures

Windows is not currently supported. Windows users can use WSL2 to run the Obol Stack.

### What are the hardware requirements?

| Resource    | Minimum | Recommended                         |
| ----------- | ------- | ----------------------------------- |
| **CPU**     | 4 cores | 8+ cores                            |
| **RAM**     | 8 GB    | 16+ GB                              |
| **Storage** | 50 GB   | 500 GB - 2 TB (depends on networks) |

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

Re-run the installer:

```shell
bash <(curl -s https://stack.obol.org)
```

The installer will update the CLI binary while preserving your configuration and data.

### How do I uninstall Obol Stack?

```shell
obol stack purge -f
rm -f ~/.local/bin/{obol,kubectl,helm,k3d,helmfile,k9s,obolup.sh}
rm -rf ~/.config/obol ~/.local/share/obol
```

### The installer cannot modify /etc/hosts

Manually add the entry:

```shell
echo "127.0.0.1 obol.stack" | sudo tee -a /etc/hosts
```

## AI Agent (OpenClaw)

### How do I set up the agent?

```shell
obol agent init
```

This runs the interactive OpenClaw onboard flow, which prompts you to choose a model provider (Ollama, Anthropic, or OpenAI).

### How do I change the model provider?

```shell
obol openclaw setup
```

Or configure the global model gateway directly:

```shell
obol model setup
```

### How do I open the agent dashboard?

```shell
obol openclaw dashboard
```

This starts a port-forward and opens the web UI in your browser.

### How do I get the gateway token?

```shell
obol openclaw token
```

:::info
When only one OpenClaw instance is installed, the instance ID is auto-selected. With multiple instances, specify the name: `obol openclaw dashboard my-agent`.
:::

## Stack operations

### The cluster fails to start

**Port conflicts:**

Obol Stack uses ports 80, 443, 8080, and 8443. Check for conflicts:

```shell
lsof -i :8080
lsof -i :8443
```

If ports 80/443 conflict, edit `~/.config/obol/k3d.yaml` and remove the `80:80` and `443:443` entries (keep `8080:80` and `8443:443`). Access at `http://obol.stack:8080` instead.

**Previous cluster not cleaned up:**

```shell
k3d cluster delete --all
obol stack init --force
obol stack up
```

### Can I use my existing kubectl configuration?

Obol Stack uses an isolated kubeconfig at `~/.config/obol/kubeconfig.yaml`. To use it with standard kubectl:

```shell
export KUBECONFIG=~/.config/obol/kubeconfig.yaml
kubectl get nodes
```

### How do I persist data across cluster restarts?

Data is automatically persisted. `obol stack down` stops the cluster but keeps data in `~/.local/share/obol/`. Only `obol stack purge -f` deletes persistent data.

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
| ------- | ------ | ---------------- |
| Hoodi   | Reth   | 2-6 hours        |
| Hoodi   | Geth   | 4-12 hours       |
| Mainnet | Reth   | 1-3 days         |
| Mainnet | Geth   | 3-7 days         |

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

## Troubleshooting

### Error: "stack not running, use 'obol stack up' first"

Start the cluster:

```shell
obol stack up
```

### Error: "deployment not found"

Check your deployment ID:

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
* Relevant logs

## Need more help?

Head over to our [Discord](https://discord.gg/n6ebKsX46w) where a member of our team or the community will be happy to assist you.
