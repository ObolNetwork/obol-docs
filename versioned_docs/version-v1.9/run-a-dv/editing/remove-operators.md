---
description: "Remove operators from your existing distributed validator cluster using the charon alpha edit remove-operators command."
sidebar_label: "Removing Operators"
slug: /run-a-dv/editing/remove-operators
---

# Removing Operators

:::warning
This is an alpha feature and is not yet recommended for production use.
:::

You can remove operators from your cluster using the `charon alpha edit remove-operators` command. This operation leaves all validators intact whilst removing specified operators from the cluster.

## Prerequisites

1. Review the `edit remove-operators` command [CLI reference](../../learn/charon/charon-cli-reference.md#remove-operators-from-a-cluster).
2. **For remaining operators**: Keep the DV node running during the process and ensure you have a copy of the current cluster lock file and validator private key shares.
3. **For operators being removed**: A copy of the cluster lock file is required to participate in the ceremony (if participating).
4. Identify the Charon ENR addresses of the operators you wish to remove from the cluster.

:::info
The ceremony uses a different p2p relay from your running cluster to avoid conflicts. The default relay address is already configured differently, so no special action is required.
:::

## Understanding Fault Tolerance

Before removing operators, it's crucial to understand your cluster's fault tolerance:

* **Fault tolerance (f)** = `number of operators - threshold`
* If you're removing **more operators than the fault tolerance**, you must use the `--participating-operator-enrs` flag to specify which operators will participate in the ceremony.

For example, if your cluster has 4 operators with a threshold of 3 (f=1), removing 2 operators requires specifying at least 3 participating operators.

## Removing Operators Process

### Standard Removal (Within Fault Tolerance)

If you're removing operators within the fault tolerance, all remaining operators can participate automatically:

```bash
# For remaining operators
charon alpha edit remove-operators --operator-enrs-to-remove=enr:-JG4QH... --output-dir=output

# Docker version
docker run --rm -v "$(pwd):/opt/charon" -w "/opt/charon" obolnetwork/charon:latest alpha edit remove-operators --operator-enrs-to-remove=enr:-JG4QH... --output-dir=/opt/charon/output
```

### Advanced Removal (Exceeding Fault Tolerance)

If you're removing more operators than the fault tolerance allows, you must specify participating operators:

```bash
# For participating operators (both remaining and being removed)
charon alpha edit remove-operators --operator-enrs-to-remove=enr:-JG4QH...,enr:-JG4QK... --participating-operator-enrs=enr:-JG4QL...,enr:-JG4QM...,enr:-JG4QN... --output-dir=output

# Docker version
docker run --rm -v "$(pwd):/opt/charon" -w "/opt/charon" obolnetwork/charon:latest alpha edit remove-operators --operator-enrs-to-remove=enr:-JG4QH...,enr:-JG4QK... --participating-operator-enrs=enr:-JG4QL...,enr:-JG4QM...,enr:-JG4QN... --output-dir=/opt/charon/output
```

:::info
When using `--participating-operator-enrs`, you must have at least `threshold` number of operators participating. Operators being removed can participate if explicitly included in this list.
:::

### For Operators Being Removed

Operators being removed have two options:

1. **If participating** (when explicitly included in `--participating-operator-enrs`): Run the same command as other participants with the `--output-dir` flag
2. **If not participating**: Do not run the command at all; simply ignore the ceremony

```bash
# For removed operators who are participating in the ceremony
charon alpha edit remove-operators --operator-enrs-to-remove=enr:-JG4QH... --participating-operator-enrs=enr:-JG4QH...,enr:-JG4QK...,enr:-JG4QL... --private-key-file=.charon/charon-enr-private-key --lock-file=.charon/cluster-lock.json --validator-keys-dir=.charon/validator_keys --output-dir=output
```

## Customising the Threshold

By default, the new threshold is calculated as `ceil(n * 2 / 3)`, where `n` is the new number of operators. You can override this with the `--new-threshold` flag:

```bash
charon alpha edit remove-operators --operator-enrs-to-remove=enr:-JG4QH... --new-threshold=3 --output-dir=output
```

:::danger
Using a non-default threshold value decreases security. All operators must use the same value. Only override this if you fully understand the implications.
:::

## Making the DV Stack Use the New Configuration

The example below is designed for the [CDVN repository](https://github.com/ObolNetwork/charon-distributed-validator-node), but the process is similar for other setups.

### For Remaining Operators

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
All remaining operators must fully shut down their existing cluster nodes before starting with the new configuration. The old cluster must be completely stopped before the new cluster with the reduced operator set can begin operating.
:::

### For Removed Operators

Operators who have been removed can safely shut down their nodes after the ceremony completes:

```bash
docker compose down
```

## Current Limitations

* The new cluster configuration will not be reflected on the Launchpad.
* The new cluster configuration will have a new cluster hash, so the observability stack will display new cluster data under a different identifier.
* All remaining operators must have valid validator keys to participate in the removal ceremony.
* When removing more operators than the fault tolerance, at least `threshold` operators must participate in the ceremony.
