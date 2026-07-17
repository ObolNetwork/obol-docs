---
description: "Create new private key shares for your existing distributed validator cluster using the charon alpha edit recreate-private-keys command."
sidebar_label: "Recreating Private Keys"
slug: /run-a-dv/editing/recreate-private-keys
---

# Recreating Private Keys

You can recreate the private key shares for your cluster using the `charon alpha edit recreate-private-keys` command. This operation creates new private key shares to replace the existing validator private keys while retaining the same operator identities and validator public keys.

## When to Use This Feature

You might need to recreate private key shares in several scenarios:

- **Security concerns**: If you suspect that private key shares may have been compromised
- **Key rotation**: As part of regular security practices to rotate cryptographic material
- **Recovery**: After a security incident where you want to refresh all key material
- **Compliance**: Meeting organisational policies that require periodic key rotation

:::info
This operation maintains the same validator public keys, so your validators remain registered on the beacon chain without any changes. Only the underlying private key shares held by operators are refreshed.
:::

## Prerequisites

1. Review the `edit recreate-private-keys` command [CLI reference](../../learn/charon/charon-cli-reference.md#recreate-private-key-shares).
2. Keep the DV node running during the process and ensure you have a copy of the current cluster lock file and validator private key shares.
3. All operators in the cluster must participate in this ceremony.
4. Each operator must have their current validator private key shares available.

:::info
The ceremony uses a different p2p relay from your running cluster to avoid conflicts. The default relay address is already configured differently, so no special action is required.
:::

## Recreating Private Keys Process

All operators must run this command simultaneously. The ceremony will coordinate between all operators to generate new private key shares.

```bash
# If you prefer running a pre-built charon binary
charon alpha edit recreate-private-keys --output-dir=output

# Or, if you prefer running it in Docker
# (replace 'latest' with the most recent version if needed: https://hub.docker.com/r/obolnetwork/charon/tags)
docker run --rm -v "$(pwd):/opt/charon" -w "/opt/charon" obolnetwork/charon:v1.10.3 alpha edit recreate-private-keys --output-dir=/opt/charon/output
```

This command will:
1. Use the existing cluster configuration and operator identities
2. Generate new private key shares for all validators
3. Create a new cluster lock file with updated key shares
4. Save the new configuration in the `output` directory

:::info
The ceremony requires all operators to participate. If any operator is unavailable, the ceremony cannot complete.
:::

## Making the DV Stack Use the New Keys

The example below is designed for the [CDVN repository](https://github.com/ObolNetwork/charon-distributed-validator-node), but the process is similar for other setups.

:::danger
**Critical Security Step**: All operators must coordinate to switch to the new keys at approximately the same time to avoid validation failures. Plan a maintenance window and communicate clearly with all operators.
:::

1. To start using the new keys, stop the current Charon and validator client instances:

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

Lodestar's boot script (`lodestar/run.sh`) will automatically import all keys, removing any existing keys and cache. Charon will load the new `cluster-lock.json` with the recreated private key shares.

:::warning
All operators must fully shut down their existing cluster nodes before starting with the new configuration. The old cluster must be completely stopped before the new cluster with the recreated private keys can begin operating. Steps 1–3 must be performed by all node operators within a coordinated maintenance window to minimize downtime.
:::

## Verifying the New Configuration

After all operators have restarted with the new keys, verify that:

1. All Charon nodes are connected and healthy
2. The cluster is successfully producing attestations
3. No error messages appear in the logs related to signature verification

```bash
# Check Charon logs
docker compose logs -f charon

# Verify cluster health in the monitoring dashboard
# Check that all validators are attesting normally
```

## Security Best Practices

- **Secure deletion**: After successfully transitioning to the new keys and verifying operation, securely delete the old key shares
- **Coordination**: Ensure all operators are prepared and available during the planned maintenance window
- **Communication**: Maintain clear communication channels between all operators throughout the process
- **Backup**: Keep the backup until you've verified that the cluster is operating normally with the new keys for at least several epochs

## Current Limitations

- The new cluster configuration will not be reflected on the Launchpad.
- The new cluster configuration will have a new cluster hash, so the observability stack will display new cluster data under a different identifier.
- All operators must participate in the ceremony; there is no option for partial participation.
- All operators must have their current validator private key shares available for the ceremony to succeed.
- The transition period requires coordination to minimize validator downtime.
