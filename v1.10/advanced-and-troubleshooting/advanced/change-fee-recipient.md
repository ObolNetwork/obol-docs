# Change Fee Recipient

The fee recipient address determines where transaction tips and MEV rewards are sent when a validator proposes a block. In a distributed validator cluster, the fee recipient and gas limit are set at cluster creation time and stored in the `cluster-lock.json` file. The `charon feerecipient` commands allow a threshold of operators to collaboratively update the fee recipient address and optionally the gas limit for one or more validators after the cluster has been created.

:::info
The updated fee recipient address applies to both MEV (builder API) and non-MEV block proposals.
:::

## Prerequisites

- A running distributed validator cluster with Charon `v1.10.3` or later.
- Access to validator private key shares on each operator's node.
- Agreement among a threshold of operators on the new fee recipient address and which validator public keys to update.

## Overview

The workflow involves three steps:

1. **Sign** — A threshold of operators each sign new builder registration messages specifying the new fee recipient address (and optionally a new gas limit).
2. **Fetch** — Any operator fetches the aggregated registrations from the remote API once enough partial signatures have been submitted.
3. **Apply** — Charon automatically detects and applies the updated overrides file. No restart is required.

## 1. Check current fee recipients

Before making changes, list the current fee recipient details for your validators:

```sh
docker run -u $(id -u):$(id -g) --rm -v "$(pwd)/:/opt/charon" obolnetwork/charon:v1.10.3 feerecipient list
```

To check specific validators only:

```sh
docker run -u $(id -u):$(id -g) --rm -v "$(pwd)/:/opt/charon" obolnetwork/charon:v1.10.3 feerecipient list \
  --validator-public-keys="0xYOUR_VALIDATOR_PUBKEY"
```

This displays the most recent builder registration for each validator, selecting the entry with the highest timestamp from the cluster lock file, the overrides file, or the remote API.

## 2. Sign new fee recipient registrations

A threshold of operators must each run the `feerecipient sign` command with matching parameters. For example, in a 4-node cluster, at least 3 operators must sign.

Each participating operator runs:

```sh
docker run -u $(id -u):$(id -g) --rm -v "$(pwd)/:/opt/charon" obolnetwork/charon:v1.10.3 feerecipient sign \
  --fee-recipient="0xNEW_FEE_RECIPIENT_ADDRESS" \
  --validator-public-keys="0xVALIDATOR_PUBKEY_1,0xVALIDATOR_PUBKEY_2"
```

:::info
`validator-public-keys` are the distributed validator public keys for which the fee recipient should be updated (find them in your `cluster-lock.json` file or on the DV Launchpad). `fee-recipient` is the new Ethereum address that will receive transaction tips and MEV rewards for the specified validators. The address must not be the zero address, and if supplied in mixed case it must match its EIP-55 checksum — both protect against typos that would irrecoverably send rewards to the wrong address.
:::

:::info
Operators do not need to sign simultaneously. The first operator to sign sets the timestamp to the current time. Subsequent operators automatically adopt the first signer's timestamp and registration data from the remote API, ensuring all partial signatures are compatible. If operators prefer to coordinate explicitly, they can agree on a Unix timestamp beforehand and pass it with the `--timestamp` flag.
:::

:::warning
Builder registrations are applied by timestamp. If you set `--timestamp` manually, choose a timestamp later than the current latest registration for the validators being updated. You can check the latest timestamp with `charon feerecipient list`. The `sign` command rejects a timestamp that is not later than the registration that currently has quorum on the remote API, since the resulting registration would never be applied. When joining an in-progress registration started by another operator, the in-progress timestamp and gas limit are adopted even if you pass different values, so all partial signatures aggregate — a warning is logged when your explicit flags are overridden.
:::

### Updating the gas limit

Besides the fee recipient address, the `sign` command also allows you to modify the gas limit for builder registrations by passing the `--gas-limit` flag. If not set, the gas limit is taken from whichever source is most recent for the validator: the cluster lock, the local overrides file, or the registration that currently has quorum on the remote API. Consulting the remote API keeps operators with divergent local files signing the same gas limit.

```sh
docker run -u $(id -u):$(id -g) --rm -v "$(pwd)/:/opt/charon" obolnetwork/charon:v1.10.3 feerecipient sign \
  --fee-recipient="0xNEW_FEE_RECIPIENT_ADDRESS" \
  --gas-limit=36000000 \
  --validator-public-keys="0xVALIDATOR_PUBKEY_1"
```

## 3. Fetch the aggregated registrations

Once a threshold of operators have submitted their partial signatures, any operator can fetch the fully aggregated builder registrations:

```sh
docker run -u $(id -u):$(id -g) --rm -v "$(pwd)/:/opt/charon" obolnetwork/charon:v1.10.3 feerecipient fetch \
  --validator-public-keys="0xVALIDATOR_PUBKEY_1,0xVALIDATOR_PUBKEY_2"
```

This merges the aggregated registrations into the overrides file at `.charon/builder_registrations_overrides.json`. Existing overrides for validators that are not included in the fetch are preserved. If the file already contains an override for a fetched validator, Charon keeps the registration with the latest timestamp.

:::info
If not enough operators have signed yet, the command logs that no fully signed builder registrations are available and does not write or update the overrides file. Coordinate with your cluster peers to ensure the threshold is met, then run `fetch` again.
:::

:::info
The `--validator-public-keys` flag is optional for the `fetch` command. If omitted, it fetches registrations for all validators in the cluster.
:::

:::info
Fetched builder registrations are signature-verified before they are written or applied. A registration that fails verification is skipped and logged as a warning; registrations for other validators in the same fetch are still merged and written. A fetched registration that is not newer than the existing override for the same validator is discarded with a warning.
:::

:::info
A corrupt or invalid overrides file does not block fetching: `fetch` logs a warning, discards the unreadable content, and rebuilds the file from the valid existing entries and the fetched registrations. The file is written atomically, so an interrupted fetch cannot leave a truncated file behind.
:::

## 4. Verify the change

After fetching, confirm the updated fee recipients are in place:

```sh
docker run -u $(id -u):$(id -g) --rm -v "$(pwd)/:/opt/charon" obolnetwork/charon:v1.10.3 feerecipient list
```

You should see the new fee recipient address reflected for the updated validators. If a validator still shows the previous fee recipient, check whether enough operators signed the same fee recipient, gas limit, and timestamp, and whether a newer registration already exists for that validator.

## Automatic application by Charon

A running `charon run` process watches the overrides file for changes using filesystem events and automatically reloads it — **no restart is required**.

Additionally, `charon run` can periodically fetch updated builder registrations from the remote API automatically. To enable this, set the flag `--fetch-feerecipient-updates`:

```sh
charon run --fetch-feerecipient-updates ...
```

When enabled, the background fetch runs on the following schedule:

- Every **24 hours** under normal conditions.
- Every **1 hour** if partial (not yet fully aggregated) entries are detected.
- On every **restart**.

This means that in most cases, once a threshold of operators have signed, a running Charon node with `--fetch-feerecipient-updates` enabled will automatically pick up the new fee recipient without any manual `fetch` step. The manual `charon feerecipient fetch` command is useful for applying the change immediately or for verifying the result before relying on the automatic background fetch.

## Further reading

- [CLI Reference](../../learn/charon/charon-cli-reference.md#the-feerecipient-command) for the full list of `feerecipient` command flags.
- [Enable MEV](enable-mev.mdx) for configuring the builder API in your cluster.
