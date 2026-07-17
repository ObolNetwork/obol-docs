---
description: "Submit and fetch (partial) deposits."
sidebar_label: "Partial Deposits"
slug: /advanced-and-troubleshooting/advanced/partial-deposit
---

# The need of partial deposits

Some operators opt to create a big cluster, even though only a subset of the validators will be activated in the short term.
When there is enough business incentive to activate more validators from the cluster, the business cases might have changed and a different withdrawal addresses to be required for those new validators.

Changing the signed deposit data post- cluster creation and pre- validator activation can be useful in such scenarios. Threshold of nodes need to agree and sign the new deposit data, then the signatures are aggregated and the new deposit data message is created. For convenience, Obol API is used for that purpose.

## Sign partial deposit data

First a partial deposit data signature from the current Charon node should be signed and broadcasted to Obol API.

`validator-public-keys` are the validator public keys for which the new deposit data should be signed.
`withdrawal-addresses` are the new addresses for which the new deposit data should be signed. They should either be the same amount as `validator-public-keys` or a single one, that will be used for all keys.
Optionally, users can also specify different multiple `deposit-amounts` (defaults to only `32`).

**Single public key**

```sh
docker run -u $(id -u):$(id -g) --rm -v "$(pwd)/:/opt/charon" obolnetwork/charon:v1.10.0 deposit sign \
  --validator-public-keys="0xb9171b84a09da7ff983a36e1c6e873e1537e97ad31aa868185d62c68e255baad8c1cfb83f508460ed96572d2a8e9e9da" \
  --withdrawal-addresses="0x0100000000000000000000000d941218c10b055f0907fe1bbe486ccdaa7e332b"
```

**Multiple public keys, multiple withdrawal addresses**

```sh
docker run -u $(id -u):$(id -g) --rm -v "$(pwd)/:/opt/charon" obolnetwork/charon:v1.10.0 deposit sign \
  --validator-public-keys="0xb9171b84a09da7ff983a36e1c6e873e1537e97ad31aa868185d62c68e255baad8c1cfb83f508460ed96572d2a8e9e9da,0xc9171b84a09da7ff983a36e1c6e873e1537e97ad31aa868185d62c68e255baad8c1cfb83f508460ed96572d2a8e9e9da" \
  --withdrawal-addresses="0x0100000000000000000000000d941218c10b055f0907fe1bbe486ccdaa7e332b,0x0100000000000000000000000e941218c10b055f0907fe1bbe486ccdaa7e332b"
```

**Multiple public keys, single withdrawal address**

```sh
docker run -u $(id -u):$(id -g) --rm -v "$(pwd)/:/opt/charon" obolnetwork/charon:v1.10.0 deposit sign \
  --validator-public-keys="0xb9171b84a09da7ff983a36e1c6e873e1537e97ad31aa868185d62c68e255baad8c1cfb83f508460ed96572d2a8e9e9da,0xc9171b84a09da7ff983a36e1c6e873e1537e97ad31aa868185d62c68e255baad8c1cfb83f508460ed96572d2a8e9e9da" \
  --withdrawal-addresses="0x0100000000000000000000000d941218c10b055f0907fe1bbe486ccdaa7e332b"
```

## Fetch full deposit data

After a threshold of operators have submitted partial deposits, a full deposit can be fetched from Obol API.

`validator-public-keys` are the validator public keys for which the new deposit data should be fetched.

```sh
docker run -u $(id -u):$(id -g) --rm -v "$(pwd)/:/opt/charon" obolnetwork/charon:v1.10.0 deposit fetch \
  --validator-public-keys="0xb9171b84a09da7ff983a36e1c6e873e1537e97ad31aa868185d62c68e255baad8c1cfb83f508460ed96572d2a8e9e9da" \
```

After a successful fetch the new deposit data files are saved in `.charon/deposit-data-<TIMESTAMP>`.

If there are not enough partial signatures, an error message will be returned.

```sh
17:18:40.771 ERRO cmd        Application failed to start: fetch full deposit data from Obol API: not enough partial signatures to meet threshold {"submitted_public_keys": "[0x8677e2014a173f72b3d4528893cb01881549631c2a39d90d7c19c230299a57440e73c82c7daf1d72713b1e26e42bae99]", "submitted_public_keys_length": 1, "required_threshold": 3}
```
