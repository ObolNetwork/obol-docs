# Quickstart

This guide walks you through installing the Obol Stack and running your first blockchain network locally.

## Prerequisites

* Docker installed and running on your machine.
* macOS or Linux operating system.
* At least 8 GB of RAM available.
* Terminal access.

:::info
Ensure Docker is running before proceeding. You can verify this by running `docker info` in your terminal.
:::

## Step 1: Install Obol Stack

Run the bootstrap installer to set up your environment:

```shell
bash <(curl -s https://stack.obol.org)
```

The installer will:

1. Validate prerequisites (Docker daemon).
2. Create the directory structure.
3. Install the `obol` CLI binary.
4. Install pinned versions of dependencies (kubectl, helm, k3d, helmfile, k9s).
5. Configure your PATH.
6. Add `obol.stack` to `/etc/hosts` (requires sudo).

:::tip
The installer supports both interactive and non-interactive modes. For scripted installations, use environment variables like `OBOL_MODIFY_PATH=yes`.
:::

### Installation options

<Tabs>
<TabItem value="default-installation" label="Default installation">
Standard installation using XDG Base Directory specification:

```shell
bash <(curl -s https://stack.obol.org)
```

Files are installed to:

* Config: `~/.config/obol/`
* Data: `~/.local/share/obol/`
* Binaries: `~/.local/bin/`
</TabItem>

<TabItem value="specific-version" label="Specific version">
Install a specific release version:

```shell
OBOL_RELEASE=v0.1.0 bash <(curl -s https://stack.obol.org)
```
</TabItem>

<TabItem value="development-mode" label="Development mode">
For contributors working on the Obol Stack codebase:

```shell
git clone https://github.com/ObolNetwork/obol-stack.git
cd obol-stack
OBOL_DEVELOPMENT=true ./obolup.sh
```

Development mode uses a local `.workspace/` directory and runs `go run` instead of a compiled binary.
</TabItem>
</Tabs>

## Step 2: Initialize and start the cluster

Initialize the stack configuration:

```shell
obol stack init
```

This generates a unique cluster ID and prepares the k3d configuration.

Start the Kubernetes cluster:

```shell
obol stack up
```

:::info
The first startup may take a few minutes as Docker pulls the required images for k3d and the default applications.
:::

## Step 3: Verify the installation

Check that the cluster is running:

```shell
obol kubectl get nodes
```

You should see output similar to:

```
NAME                            STATUS   ROLES                  AGE   VERSION
k3d-obol-stack-xxxxx-server-0   Ready    control-plane,master   1m    v1.31.4+k3s1
k3d-obol-stack-xxxxx-agent-0    Ready    <none>                 1m    v1.31.4+k3s1
k3d-obol-stack-xxxxx-agent-1    Ready    <none>                 1m    v1.31.4+k3s1
k3d-obol-stack-xxxxx-agent-2    Ready    <none>                 1m    v1.31.4+k3s1
```

List available networks:

```shell
obol network list
```

## Step 4: Install a network

Install an Ethereum node on the Hoodi testnet:

```shell
obol network install ethereum --network=hoodi
```

This creates a network configuration with an auto-generated deployment ID (e.g., `knowing-wahoo`).

Deploy the network to the cluster:

```shell
obol network sync ethereum/knowing-wahoo
```

:::warning
Replace `knowing-wahoo` with the actual deployment ID shown in your terminal output.
:::

Check the deployment status:

```shell
obol kubectl get pods -n ethereum-knowing-wahoo
```

## Step 5: Explore your cluster

Use k9s for a visual interface to explore your cluster:

```shell
obol k9s
```

Or check specific resources:

```shell
# View all pods across namespaces
obol kubectl get pods -A

# View logs for a specific pod
obol kubectl logs -n ethereum-knowing-wahoo <pod-name>

# View persistent volume claims
obol kubectl get pvc -A
```

## Stopping and cleaning up

### Stop the cluster

To stop the cluster while preserving all data:

```shell
obol stack down
```

### Restart the cluster

To restart a previously initialized cluster:

```shell
obol stack up
```

### Remove everything

To completely remove the cluster and configuration:

```shell
obol stack purge
```

:::warning
The `purge` command removes the cluster configuration. To also remove persistent data (blockchain data, PVCs), add the `-f` flag:

```shell
obol stack purge -f
```

This action is irreversible.
:::

## Next steps

* [Installing networks](installing-networks.mdx) - Learn how to deploy different blockchain networks.
* [Installing apps](installing-apps.md) - Deploy additional applications on your stack.
* [FAQ](faq.md) - Common questions and troubleshooting.
