---
description: "Add operators to your existing distributed validator cluster using the charon alpha edit add-operators command."
sidebar_label: "Adding Operators"
slug: /advanced-and-troubleshooting/advanced/add-operators
---

# Adding Operators

:::warning
This is an alpha feature and is not yet recommended for production use.
:::

You can add operators to your cluster using the `charon alpha edit add-operators` command. This operation keeps all distributed validator public keys unchanged whilst adding new operators to the cluster.

## Prerequisites

1. Review the `edit add-operators` command [CLI reference](../../learn/charon/charon-cli-reference.md#add-operators-to-a-cluster).
2. **For existing operators**: Keep the DV node running during the process and ensure you have a copy of the current [cluster lock file](../../learn/charon/cluster-configuration#cluster-lock-file) and validator private key shares.
3. **For new operators**: Obtain a copy of the existing cluster lock file from the existing operators and have your Charon ENR private key file ready.
4. Obtain the Charon ENR addresses of all new operators being added to the cluster.

:::info
The command uses a different set of p2p-relays to `charon run` to avoid conflicts with your running cluster.
:::

## Adding Operators Process

The examples below demonstrate adding new operators to an existing cluster. All existing operators must run this command, along with the new operators being added.

### For Existing Operators

```bash
# If you prefer running a pre-built charon binary
charon alpha edit add-operators --new-operator-enrs=enr:-JG4QH... --output-dir=output

# Or, if you prefer running it in Docker
# (replace 'latest' with the most recent version if needed: https://hub.docker.com/r/obolnetwork/charon/tags)
docker run --rm -v "$(pwd):/opt/charon" -w "/opt/charon" obolnetwork/charon:latest alpha edit add-operators --new-operator-enrs=enr:-JG4QH... --output-dir=/opt/charon/output
```

### For New Operators

New operators being added should run the same command but only need to provide their private key file and the cluster lock file (they won't have validator keys yet):

```bash
# If you prefer running a pre-built charon binary
charon alpha edit add-operators --new-operator-enrs=enr:-JG4QH... --output-dir=output --lock-file=cluster-lock.json --private-key-file=charon-enr-private-key

# Or, if you prefer running it in Docker
docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:latest alpha edit add-operators --new-operator-enrs=enr:-JG4QH... --private-key-file=/opt/charon/charon-enr-private-key --lock-file=/opt/charon/cluster-lock.json --output-dir=/opt/charon/output
```

:::info
To add multiple operators at once, provide a comma-separated list: `--new-operator-enrs=enr:-JG4QH...,enr:-JG4QK...,enr:-JG4QL...`
:::

This command will create a new cluster configuration with the additional operators whilst keeping all validator public keys unchanged. The new configuration will be saved in the `output` directory.

## Making the DV Stack Use the New Configuration

The example below is designed for the [CDVN repository](https://github.com/ObolNetwork/charon-distributed-validator-node), but the process is similar for other setups.

1. To start using the new configuration (with the added operators), stop the current Charon and validator client instances:

```bash
# Stop the containers
docker compose stop charon lodestar
```

2. Back up and remove the existing `.charon` directory, then move the `output` directory to `.charon`:

```bash
# Put the original artifacts in a backup location
mv .charon .charon-backup
# Copy the output from the add-operators command into the location of the original files
mv output .charon
```

3. Restart the Charon and validator client instances:

```bash
# Restart charon and the validator client with the new data
docker compose up -d charon lodestar
```

Lodestar's boot script (`lodestar/run.sh`) will automatically import all keys, removing any existing keys and cache. Charon will load the new `cluster-lock.json` and recognise all validators in the cluster with the updated operator set.

:::warning
All existing operators must fully shut down their cluster nodes before starting with the new configuration. The old cluster must be completely stopped before the new cluster with the expanded operator set can begin operating. Unlike add-validators, this is not a gradual migration.

It is advisable to shut the cluster down for at least two epochs, to minimise any risk of unintended double signing during the controlled restart.
:::

## Current Considerations

- The new cluster configuration will not yet be reflected on the Obol Launchpad.
- The new cluster configuration will have a new cluster hash, so the observability stack will display new cluster data under a different identifier.
- All operators (both existing and new) must participate in the add-operators ceremony for it to complete successfully.
- The cluster's threshold value remains unchanged after adding operators because the existing set of operators already possesses enough shares to create full signatures.
