# Installing Networks

The Obol Stack supports installing multiple blockchain networks on your local Kubernetes cluster. Each network installation creates a unique deployment with its own namespace, allowing you to run multiple instances simultaneously.

## Available networks

View all available networks:

```shell
obol network list
```

Currently supported networks:

| Network      | Description                                        |
| ------------ | -------------------------------------------------- |
| **ethereum** | Full Ethereum node (execution + consensus clients) |
| **aztec**    | Aztec Layer 2 sequencer node                       |

## Network installation workflow

Installing a network follows a two-step process:

1. **Install** - Generate configuration and save to disk
2. **Sync** - Deploy the configuration to the cluster

This separation allows you to review and modify configuration before deployment.

### Install command

```shell
obol network install <network> [flags]
```

This creates a deployment directory at `~/.config/obol/networks/<network>/<id>/` containing:

* `values.yaml` - Configuration values (editable)
* `helmfile.yaml` - Deployment definition

### Sync command

```shell
obol network sync <network>/<id>
```

This deploys the configuration to your Kubernetes cluster using Helmfile.

### Delete command

```shell
obol network delete <network>/<id>
```

This removes both the Kubernetes resources and local configuration.

## Ethereum network

Deploy a full Ethereum node with configurable execution and consensus clients.

### Configuration options

| Flag                 | Description            | Options                                             | Default        |
| -------------------- | ---------------------- | --------------------------------------------------- | -------------- |
| `--id`               | Deployment identifier  | Any string                                          | Auto-generated |
| `--network`          | Ethereum network       | mainnet, hoodi                                      | mainnet        |
| `--execution-client` | Execution layer client | reth, geth, nethermind, besu, erigon, ethereumjs    | reth           |
| `--consensus-client` | Consensus layer client | lighthouse, prysm, teku, nimbus, lodestar, grandine | lighthouse     |

### Examples

<Tabs>
<TabItem value="hoodi-testnet" label="Hoodi testnet">
Deploy an Ethereum node on Hoodi testnet with default clients:

```shell
# Install configuration
obol network install ethereum --network=hoodi

# Deploy to cluster (replace with your deployment ID)
obol network sync ethereum/knowing-wahoo
```
</TabItem>

<TabItem value="mainnet-with-specific-clients" label="Mainnet with specific clients">
Deploy a mainnet node with Geth and Prysm:

```shell
obol network install ethereum \
  --id=mainnet-prod \
  --network=mainnet \
  --execution-client=geth \
  --consensus-client=prysm

obol network sync ethereum/mainnet-prod
```
</TabItem>

<TabItem value="multiple-deployments" label="Multiple deployments">
Run mainnet and testnet nodes simultaneously:

```shell
obol network install ethereum --id=mainnet --network=mainnet
obol network install ethereum --id=hoodi --network=hoodi

obol network sync ethereum/mainnet
obol network sync ethereum/hoodi
```
</TabItem>
</Tabs>

:::warning
Full Ethereum nodes require significant resources. Mainnet execution clients need 1+ TB of storage and can take days to sync. Consider using testnets for development.
:::

### Check sync status

```shell
# View pod status
obol kubectl get pods -n ethereum-<id>

# Check execution client logs
obol kubectl logs -n ethereum-<id> -l app=execution -f

# Check consensus client logs
obol kubectl logs -n ethereum-<id> -l app=consensus -f
```

## Aztec network

Deploy an Aztec Layer 2 sequencer node for the privacy-focused Ethereum rollup.

### Configuration options

| Flag                     | Description                | Options    | Default         |
| ------------------------ | -------------------------- | ---------- | --------------- |
| `--id`                   | Deployment identifier      | Any string | Auto-generated  |
| `--network`              | Aztec network              | mainnet    | mainnet         |
| `--attester-private-key` | Attester private key (hex) | Required   | None            |
| `--l1-execution-url`     | L1 execution RPC URL       | URL        | ERPC endpoint   |
| `--l1-consensus-url`     | L1 consensus RPC URL       | URL        | Public endpoint |

### Example

```shell
obol network install aztec \
  --attester-private-key=<YOUR_PRIVATE_KEY> \
  --l1-execution-url=https://geth-prysm-mainnet-1.gcp.obol.tech/ \
  --l1-consensus-url=https://prysm-geth-mainnet-1.gcp.obol.tech/
```

Deploy to the cluster:

```shell
obol network sync aztec/<id>
```

:::info
You can use your own Ethereum node endpoints or the in-cluster ERPC endpoint by changing the L1 URL flags.
:::

### Resource requirements

| Resource    | Request | Limit   |
| ----------- | ------- | ------- |
| **CPU**     | 4 cores | 8 cores |
| **Memory**  | 16 GB   | 32 GB   |
| **Storage** | 1 TB    | -       |

:::warning
Ensure your machine has sufficient resources before deploying an Aztec node.
:::

## Managing deployments

### View deployment status

```shell
obol kubectl get namespaces | grep -E "ethereum|aztec"
```

### Modify configuration

```shell
$EDITOR ~/.config/obol/networks/<network>/<id>/values.yaml
obol network sync <network>/<id>
```

### Delete a deployment

```shell
obol network delete <network>/<id>
```

:::warning
Deletion is permanent. All blockchain data stored in the deployment will be lost.
:::
