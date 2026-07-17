---
description: "Prepare an alternative deposit for an unused validator"
sidebar_label: "Alter Withdrawal Addresses"
slug: /advanced-and-troubleshooting/advanced/alter-withdrawal-addresses
---

# Altering a Withdrawal Address for an unused validator

:::warning
Please take care when changing a withdrawal address for an inactivated validator. Activating a validator that exits to a withdrawal address you don't control likely means your funds are lost.

A signed deposit message is a public bearer artifact: anyone who has the bytes can submit it to the canonical Ethereum deposit contract. If a previous valid deposit message exists for the same validator pubkey — for instance the original one signed by the operators at cluster creation time — it [could be used to front-run](https://medium.com/immunefi/rocketpool-lido-frontrunning-bug-fix-postmortem-e701f26d7971) the alternative deposit, and the validator would activate with the original withdrawal credentials instead of the new ones.

Once a deposit has been processed for a validator pubkey, its withdrawal credentials are fixed — every subsequent deposit ignores the `withdrawal_credentials` field and follows the originally activated ones. A re-signed deposit message for a pubkey that has already been deposited is therefore wasted: the funds sent with it will land at the original withdrawal address, not the new one. Before using a re-signed deposit, verify on-chain that no `DepositEvent` for the validator pubkey exists on the canonical deposit contract (`0x00000000219ab540356cBB839Cbe05303d7705Fa`).
:::

On occasion it can be useful to be able to change the withdrawal address specified for an already created but unused distributed validator. For example if they are unneeded extra capacity, or if the withdrawal address to be used was not known at cluster creation time and a trusted placeholder address was used instead. The `charon deposit` commands allow you to sign alternative deposit messages for **inactive validators** with the help of the Obol [API](../../api/what-is-this-api.md).

:::info
If you want to change the withdrawal address of a running validator, consider a validator [consolidation](../../run-a-dv/editing/replace-operator.md#method-2-validator-consolidation) instead.
:::

## Sign an alternative deposit message

A threshold of operators must decide which public keys they are changing the withdrawal address for, and what the new withdrawal address will be. Then each run the `charon deposit sign` command with their partial private keys and the appropriate (identical) flags.

**Single public key**

```sh
docker run -u $(id -u):$(id -g) --rm -v "$(pwd)/:/opt/charon" obolnetwork/charon:v1.10.3 deposit sign \
  --validator-public-keys="0xb9171b84a09da7ff983a36e1c6e873e1537e97ad31aa868185d62c68e255baad8c1cfb83f508460ed96572d2a8e9e9da" \
  --withdrawal-addresses="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
```

:::info
`validator-public-keys` are the distributed validator public keys for which the alternative deposit data should be signed (find them in your cluster_lock.json file in the `distributed_validator_public_keys` mapping or on the DV Launchpad). `withdrawal-addresses` are the new withdrawal address(es) for which the new deposit data should be signed. There should either be the same amount as `validator-public-keys` specified, or a single address that will be used for all public keys specified. 

Optionally, users can also specify multiple different `deposit-amounts` (defaults to only `32`) to be prepared.
:::

**Multiple public keys, multiple withdrawal addresses**

```sh
docker run -u $(id -u):$(id -g) --rm -v "$(pwd)/:/opt/charon" obolnetwork/charon:v1.10.3 deposit sign \
  --validator-public-keys="0xb9171b84a09da7ff983a36e1c6e873e1537e97ad31aa868185d62c68e255baad8c1cfb83f508460ed96572d2a8e9e9da,0xc9171b84a09da7ff983a36e1c6e873e1537e97ad31aa868185d62c68e255baad8c1cfb83f508460ed96572d2a8e9e9da" \
  --withdrawal-addresses="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045,0x1db3439a222c519ab44bb1144fc28167b4fa6ee6"
```

**Multiple public keys, single withdrawal address**

```sh
docker run -u $(id -u):$(id -g) --rm -v "$(pwd)/:/opt/charon" obolnetwork/charon:v1.10.3 deposit sign \
  --validator-public-keys="0xb9171b84a09da7ff983a36e1c6e873e1537e97ad31aa868185d62c68e255baad8c1cfb83f508460ed96572d2a8e9e9da,0xc9171b84a09da7ff983a36e1c6e873e1537e97ad31aa868185d62c68e255baad8c1cfb83f508460ed96572d2a8e9e9da" \
  --withdrawal-addresses="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
```

## Fetch full deposit data

After a threshold of operators have submitted partial alternative deposits, a full aggregated deposit message can be fetched from Obol API.

```sh
docker run -u $(id -u):$(id -g) --rm -v "$(pwd)/:/opt/charon" obolnetwork/charon:v1.10.3 deposit fetch \
  --validator-public-keys="0xb9171b84a09da7ff983a36e1c6e873e1537e97ad31aa868185d62c68e255baad8c1cfb83f508460ed96572d2a8e9e9da" \
```

:::info
`validator-public-keys` are the validator public keys for which the new deposit data should be fetched.
:::

After a successful fetch the new deposit data files are saved in `.charon/deposit-data-<TIMESTAMP>.json`.

If there are not enough partial signatures, an error message will be returned.

```sh
17:18:40.771 ERRO cmd        Application failed to start: fetch full deposit data from Obol API: not enough partial signatures to meet threshold {"submitted_public_keys": "[0x8677e2014a173f72b3d4528893cb01881549631c2a39d90d7c19c230299a57440e73c82c7daf1d72713b1e26e42bae99]", "submitted_public_keys_length": 1, "required_threshold": 3}
```

This deposit message file can be used with a deposit interface, to activate the validator on the Ethereum deposit contract. 

:::danger
Please take care not to mistakenly activate the old `deposit-data.json` file when the cluster was originally created, containing the withdrawal address you hope to replace. If you activate a validator with a withdrawal address you don't control, your funds are likely lost.
:::