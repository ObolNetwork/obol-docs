---
description: "Add validators to your existing distributed validator cluster using the charon alpha add-validators command."
sidebar_label: "Adding Validators"
slug: /advanced-and-troubleshooting/advanced/add-validators
---

# Adding Validators

:::warning
This is an experimental feature available starting with Charon v1.6 and should not be used in production (Mainnet) yet.
:::

You can add validators to your cluster using the `charon alpha add-validators` command. The example below is designed for the default configuration provided by this repository and assumes that the stack uses the Lodestar validator client.

## Prerequisites

1. Review the `add-validators` command [CLI reference](https://docs.obol.org/docs/learn/charon/charon-cli-reference).
2. Ensure this folder contains a valid `.charon` directory currently used by the running node. Keep the DV node running during the process.

## Adding Validators Process

The examples below are for adding 10 validators. You can use them with any number of validators you would like to add. Run the following command to collectively generate and add 10 new validators with other node operators (similar to DKG):

```bash
# If you prefer running a pre-built charon binary
charon alpha add-validators --num-validators 10 --withdrawal-addresses=0x<your_withdrawal_address> --fee-recipient-addresses=0x<your_fee_recipient_address> --output-dir=output

# Or, if you prefer running it in Docker
# (replace 'latest' with the most recent version if needed: https://hub.docker.com/r/obolnetwork/charon/tags)
docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:latest alpha add-validators --num-validators 10 --withdrawal-addresses=0x<your_withdrawal_address> --fee-recipient-addresses=0x<your_fee_recipient_address> --data-dir=/opt/charon/.charon --output-dir=/opt/charon/output
```

This command will create a new cluster configuration that includes both existing and new validators. It will also generate the necessary keys for the new validators and deposit data files. The new configuration will be saved in the `output` directory.

## Making the DV Stack Use the New Validators

The example below is designed for the [CDVN repository](https://github.com/ObolNetwork/charon-distributed-validator-node), but the process is similar for other setups.

1. To start using the new configuration (with the added validators), stop the current Charon and validator client instances:

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

Lodestar's boot script (`lodestar/run.sh`) will automatically import all keys, removing any existing keys and cache. Charon will load the new `cluster-lock.json` and recognise all validators in the cluster.

:::info
Steps 1–3 must be performed independently by all node operators, likely at different times. During this process, some nodes will use the old configuration and others the new one. Once the number of upgraded nodes reaches the BFT threshold, the newly added validators will begin participating in the cluster.
:::

## Current Limitations

- The new cluster configuration will not be reflected on the Launchpad.
- The new cluster configuration will have a new cluster hash, so the observability stack will display new cluster data under a different identifier.
- The `add-validators` command supports the KeyManager API (similar to the `dkg` command), but since it may not have direct access to the original private keys if they're not still in the `.charon` folder you are adding validators to, it cannot produce valid cluster lock signatures. In this case, you must use the `--unverified` flag, which means Charon does not hash and sign the new cluster lock file with all the private keys to prove their existence. This requires adding the `--no-verify` flag or `CHARON_NO_VERIFY=true` environment variable to the `charon run` command/container.
- If you use different validator clients, review the keys import script. The old keys in `.charon/validator_keys` remain unchanged, so verify that importing the same keys will not disrupt the validator client's state.
