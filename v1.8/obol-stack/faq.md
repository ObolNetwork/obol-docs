# Frequently Asked Questions

## General

### What is Obol Stack?

The Obol Stack is a local Kubernetes-based development environment for running blockchain networks. It uses k3d (Kubernetes in Docker) to provide a lightweight cluster where you can deploy Ethereum nodes, Layer 2 networks, and other blockchain infrastructure.

### Is Obol Stack suitable for production?

No. Obol Stack is designed for local development, testing, and experimentation. For production deployments, use dedicated infrastructure with proper security, redundancy, and monitoring. Refer to the specific network documentation for production deployment guidance.

### What operating systems are supported?

Obol Stack supports:

* **macOS** (Darwin) - Intel and Apple Silicon
* **Linux** - amd64 and arm64 architectures

Windows is not currently supported. Windows users can use WSL2 (Windows Subsystem for Linux) to run the Obol Stack.

### What are the hardware requirements?

Minimum requirements:

| Resource | Requirement |
| --- | --- |
| **CPU** | 4 cores |
| **RAM** | 8 GB |
| **Storage** | 50 GB |

Recommended for running full nodes:

| Resource | Requirement |
| --- | --- |
| **CPU** | 8+ cores |
| **RAM** | 16+ GB |
| **Storage** | 500 GB - 2 TB (depends on network) |

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

Re-run the installer to update to the latest version:

```shell
bash <(curl -s https://stack.obol.org)
```

The installer will update the CLI binary while preserving your configuration and data.

### How do I uninstall Obol Stack?

1. Stop and remove the cluster:

```shell
obol stack purge -f
```

2. Remove installed files:

```shell
rm -rf ~/.config/obol
rm -rf ~/.local/share/obol
rm ~/.local/bin/obol
```

3. Optionally remove installed dependencies (kubectl, helm, k3d, etc.) from `~/.local/bin/`.

### The installer cannot modify /etc/hosts

The installer requires sudo access to add `obol.stack` to `/etc/hosts`. If this fails:

1. Run the installer and skip the hosts configuration.
2. Manually add the entry:

```shell
echo "127.0.0.1 obol.stack" | sudo tee -a /etc/hosts
```

## Stack operations

### The cluster fails to start

Common causes and solutions:

**Docker resources insufficient:**

Increase Docker's resource allocation in Docker Desktop settings (CPU, Memory, Disk).

**Port conflicts:**

Obol Stack uses ports 8080 and 8443. Check for conflicts:

```shell
lsof -i :8080
lsof -i :8443
```

Stop any conflicting services before starting the stack.

**Previous cluster not cleaned up:**

```shell
# Force remove any existing cluster
k3d cluster delete --all
obol stack init --force
obol stack up
```

### How do I access the Kubernetes dashboard?

Use k9s for a terminal-based dashboard:

```shell
obol k9s
```

Or use kubectl directly:

```shell
obol kubectl get all -A
```

### Can I use my existing kubectl configuration?

Obol Stack uses an isolated kubeconfig file at `~/.config/obol/kubeconfig.yaml`. This prevents conflicts with your existing Kubernetes configuration.

To use the Obol Stack's cluster with standard kubectl:

```shell
export KUBECONFIG=~/.config/obol/kubeconfig.yaml
kubectl get nodes
```

### How do I persist data across cluster restarts?

Data is automatically persisted. When you run `obol stack down`, the cluster stops but data remains in `~/.local/share/obol/`. Running `obol stack up` restores the cluster with all previous data.

Only `obol stack purge -f` deletes persistent data.

## Networks

### How do I know which deployment ID was generated?

The deployment ID is displayed when you run `obol network install`:

```
Generated deployment ID: knowing-wahoo
```

You can also list your deployments:

```shell
ls ~/.config/obol/networks/
```

### Can I run multiple instances of the same network?

Yes. Each deployment gets a unique namespace. For example:

```shell
obol network install ethereum --id=mainnet --network=mainnet
obol network install ethereum --id=hoodi --network=hoodi
```

This creates two separate deployments: `ethereum-mainnet` and `ethereum-hoodi`.

### How long does it take to sync an Ethereum node?

Sync times vary significantly:

| Network | Execution Client | Approximate Time |
| --- | --- | --- |
| Hoodi | Reth | 2-6 hours |
| Hoodi | Geth | 4-12 hours |
| Mainnet | Reth | 1-3 days |
| Mainnet | Geth | 3-7 days |

:::info
Sync times depend on your hardware, network connection, and current chain state. Consensus clients with checkpoint sync typically sync in minutes.
:::

### My network deployment is stuck in Pending state

Check for resource issues:

```shell
# Check pod status
obol kubectl describe pod -n <namespace> <pod-name>

# Check events
obol kubectl get events -n <namespace>

# Check persistent volume claims
obol kubectl get pvc -n <namespace>
```

Common causes:

* **Insufficient resources** - Increase Docker's allocated resources.
* **PVC not bound** - Storage provisioner issue; try restarting the stack.
* **Image pull errors** - Network connectivity or rate limiting.

### How do I view logs for my network?

```shell
# View all pods in namespace
obol kubectl get pods -n <network>-<id>

# Stream logs from a specific pod
obol kubectl logs -n <network>-<id> <pod-name> -f

# View logs from all pods with a label
obol kubectl logs -n <network>-<id> -l app=execution -f
```

## Troubleshooting

### Error: "stack not running, use 'obol stack up' first"

The cluster is not running. Start it with:

```shell
obol stack up
```

If the cluster was previously initialized, this will restore it. If not, run `obol stack init` first.

### Error: "deployment not found"

The specified network deployment does not exist. Check your deployment ID:

```shell
# List installed networks
ls ~/.config/obol/networks/

# Use the correct format
obol network sync ethereum/correct-id
```

### Grafana shows "No data"

Ensure Prometheus is running and scraping metrics:

```shell
# Check Prometheus pods
obol kubectl get pods -n monitoring

# Check ServiceMonitors
obol kubectl get servicemonitors -A
```

Networks must have the `release: monitoring` label to be discovered by Prometheus.

### How do I report a bug?

Report issues on GitHub: [https://github.com/ObolNetwork/obol-stack/issues](https://github.com/ObolNetwork/obol-stack/issues)

Include:

* Obol Stack version (`obol version`)
* Operating system and architecture
* Docker version (`docker version`)
* Steps to reproduce
* Relevant logs

## Need more help?

If your question is not answered here, head over to our [Discord](https://discord.gg/n6ebKsX46w) where a member of our team or the community will be happy to assist you.
