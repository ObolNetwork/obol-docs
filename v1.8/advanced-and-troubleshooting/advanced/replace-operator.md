# Replacing an Operator

:::warning
This is an alpha feature and is not yet recommended for production use.
:::

You can replace an operator in your cluster using the `charon alpha edit replace-operator` command. This operation keeps all validators intact whilst swapping one operator for another in the cluster.

## Prerequisites

1. Review the `edit replace-operator` command [CLI reference](../../learn/charon/charon-cli-reference.md).
2. **For continuing operators**: Keep the DV node running during the process and ensure you have a copy of the current cluster lock file and validator private key shares.
3. **For the new operator**: Obtain a copy of the existing cluster lock file from the continuing operators and have your Charon ENR private key file ready.
4. **For the old operator being replaced**: The operator being replaced should NOT participate in the ceremony.
5. Identify the Charon ENR address of the operator you wish to replace and have the new operator's ENR ready.

:::info
The ceremony uses a different p2p relay from your running cluster to avoid conflicts. The default relay address is already configured differently, so no special action is required.
:::

## Understanding the Replacement Process

The replace-operator ceremony performs a one-for-one swap:

- The **old operator** is completely removed from the cluster and does not participate in the ceremony
- The **new operator** takes over at the same index position as the old operator
- All **continuing operators** must participate with their existing validator keys
- All validator public keys remain unchanged

This is different from remove-operators followed by add-operators, as it maintains the cluster size and threshold in a single atomic operation.

## Replacing an Operator

All continuing operators and the new operator must run this command. The old operator being replaced should NOT run the command.

### For Continuing Operators

```bash
# Standard usage
charon alpha edit replace-operator --old-operator-enr=enr:-JG4QH... --new-operator-enr=enr:-JG4QK... --output-dir=output

# Docker version
docker run --rm -v "$(pwd):/opt/charon" -w "/opt/charon" obolnetwork/charon:latest alpha edit replace-operator --old-operator-enr=enr:-JG4QH... --new-operator-enr=enr:-JG4QK... --output-dir=/opt/charon/output
```

### For the New Operator

The new operator being added should run the same command but only needs to provide their private key file and the cluster lock file (they won't have validator keys yet):

```bash
# Standard usage
charon alpha edit replace-operator --old-operator-enr=enr:-JG4QH... --new-operator-enr=enr:-JG4QK... --output-dir=output --lock-file=cluster-lock.json --private-key-file=charon-enr-private-key

# Docker version
docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:latest alpha edit replace-operator --old-operator-enr=enr:-JG4QH... --new-operator-enr=enr:-JG4QK... --private-key-file=/opt/charon/charon-enr-private-key --lock-file=/opt/charon/cluster-lock.json --output-dir=/opt/charon/output
```

### For the Old Operator Being Replaced

The old operator **should not participate** in the ceremony. Simply do not run the command.

:::danger
The old operator's ENR and new operator's ENR must be different. The command will fail if they are the same.
:::

## Making the DV Stack Use the New Configuration

The example below is designed for the [CDVN repository](https://github.com/ObolNetwork/charon-distributed-validator-node), but the process is similar for other setups.

### For Continuing Operators and New Operator

1. Stop the current Charon and validator client instances:

```bash
docker compose stop charon lodestar
```

2. Back up and remove the existing `.charon` directory, then move the `output` directory to `.charon`:

```bash
mv .charon .charon-backup
mv output .charon
```

3. Restart the Charon and validator client instances:

```bash
docker compose up -d charon lodestar
```

:::warning
All continuing operators must fully shut down their existing cluster nodes before starting with the new configuration. The old cluster must be completely stopped before the new cluster with the replaced operator can begin operating.
:::

### For the Old Operator Being Replaced

The operator who has been replaced can safely shut down their node after the ceremony completes:

```bash
docker compose down
```

## Current Limitations

- The new cluster configuration will not be reflected on the Launchpad.
- The new cluster configuration will have a new cluster hash, so the observability stack will display new cluster data under a different identifier.
- All continuing operators must have valid validator keys to participate in the replacement ceremony.
- The cluster's threshold value remains unchanged after replacing an operator.
- The new operator's ENR must not already exist in the cluster.
- The old operator's ENR must exist in the current cluster.
