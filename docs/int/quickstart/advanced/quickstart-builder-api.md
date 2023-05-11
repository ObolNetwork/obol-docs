---
sidebar_position: 1
description: Run a distributed validator cluster with the builder API (MEV-Boost)
---

# Run a cluster with MEV-Boost

:::caution
Charon is in an alpha state and should be used with caution according to its [Terms of Use](https://obol.tech/terms.pdf).

Charon's integration with MEV-Boost is also in an alpha state and requires a non-trivial amount of configuration to get working successfully. In future this process aims to be much more automated and seamless from the users perspective.
:::

This quickstart guide focuses on configuring the builder API for a validator and assumes you already [have a cluster up and running](./index.md).

## Getting started with Charon & the Builder API

Running a distributed validator cluster with the builder API enabled will give the validators in the cluster access to the builder network. This builder network is a network of "Block Builders" who work with MEV searchers to produce the most valuable blocks a validator can propose. [MEV-Boost](https://boost.flashbots.net/) is a product from flashbots that enables you to ask multiple block relays (who communicate with the "Block Builders") for blocks to propose. The block that pays the largest reward to the validator will be signed and returned to the relay for broadcasting to the wider network. The end result for the validator is generally an increased APY as they receive some share of the MEV.

## Configuring Charon

To configure Charon to use the builder API you simply need to add one flag to the `charon run` command.

```
charon run --builder-api
```

## Configuring Validator Clients

Currently Charon with the builder API enabled is comaptible with two validator clients, Teku (develop branch) & Lighthouse (unstable branch) and requires a decent amount of manual configuration. Work is underway [to support](https://github.com/ObolNetwork/charon#project-status) all validator client implementations in an mev-enabled distributed validator cluster seamlessly.

### Teku Validator Client

For now you must use the [develop branch / container image](https://hub.docker.com/r/consensys/teku/tags) of Teku to have access to the changes that enable compatibility.

Configuring the Teku validator client with Charon follows exactly the same process as their [official guide](https://hackmd.io/@StefanBratanov/BkMlo1RO9) with 2 further conditions.

- First the validator client must be set up to use the `proposerConfig.json` structure. This involves including the [`--validators-proposer-config`](https://docs.teku.consensys.net/en/latest/Reference/CLI/CLI-Syntax/#validators-proposer-config) flag on the validator client.
- Second the `--validators-proposer-config` flag must be equal to `http://$CHARON_ENDPOINT:3600/teku_proposer_config`

With these 2 conditions in places Charon validators will be able to register to the builder network, submit blinded block and gain a share of the MEV profits.

### Lighthouse Validator Client

For Lighthouse we are currently waiting on the following [PR](https://github.com/sigp/lighthouse/pull/3445) to be merged into their unstable branch to enable compatability, please review the PR's status.

If the PR has been merged Lighthouse can be used with Charon. You must use the [unstable branch / container image](https://hub.docker.com/r/sigp/lighthouse/tags) to have access to the changes that enable compatibility.

Configuring the Lightouse validator client with Charon follows exactly the same process as their [official guide](https://lighthouse-book.sigmaprime.io/builders.html) with some additional conditions.

- The validator client must be set up to use a custom [validator_definitions.yml](https://lighthouse-book.sigmaprime.io/validator-management.html).
- The flag `--builder-registration-timestamp-override` must be set and the assigned value must be the same across all validator clients.
- The custom validator_definitions.yml must be placed in the `--validators-dir` of lighthouse.
- The custom validator_definitions.yml must follow the structure below, where `voting_public_key` is the pubkeyshare on the validator client and `builder_pubkey_override` is the associated aggregate pubkey the network will find. You can find these pubkeyshare to aggregate pubkey mapping in the `cluster-lock.json` file created during the DKG process.

```yaml
---
- enabled: true
  voting_public_key: 0xa6469d287f26ecb36049b79b408e25738a0e159980f32fb659174416b9e0e8f7f8ecc55d01a54528c16c138bb1201eaf
  type: local_keystore
  voting_keystore_path: /data/lighthouse/validator_keys/keystore-0.json
  voting_keystore_password_path: /data/lighthouse/validator_keys/keystore-0.txt
  suggested_fee_recipient: 0x000000000000000000000000dec0ded0b0115ace
  gas_limit: 30000000
  builder_proposals: true
  builder_pubkey_override: 0xa878c8ec402799536f0b94967e578fdbcd84828f564d604f0db491979438357b797491399be1f22de8a44673f14c087e
- enabled: true
  voting_public_key: 0x821ec75ca12057b484906a492ea3448387065a9466c348e81e72f23139e7abdf2f38854cc9dea8d51ca615cbe15f9d2c
  type: local_keystore
  voting_keystore_path: /data/lighthouse/validator_keys/keystore-1.json
  voting_keystore_password_path: /data/lighthouse/validator_keys/keystore-1.txt
  suggested_fee_recipient: 0x000000000000000000000000dec0ded0b0115ace
  gas_limit: 30000000
  builder_proposals: true
  builder_pubkey_override: 0x93e600b9836acda0e7781dc50268478b13c2a73fa470728b8e7fd06f31d62ddbdf831cbf5b7a828276a2218f2016a2fa
- enabled: true
  voting_public_key: 0xa5581286066c5251fbc7c2a6685a9ccce951ccb9b6e449a3f90c33c971dac9b297f9a7a3f9394c8a43822ff0f2cfded1
  type: local_keystore
  voting_keystore_path: /data/lighthouse/validator_keys/keystore-2.json
  voting_keystore_password_path: /data/lighthouse/validator_keys/keystore-2.txt
  suggested_fee_recipient: 0x000000000000000000000000dec0ded0b0115ace
  gas_limit: 30000000
  builder_proposals: true
  builder_pubkey_override: 0x8793b522c8197c047b95b6f4b3c7fd1582a2466ff96eb274ee51fc699c99cbdfeb41cf576bbbbdecf2454527083edf34
```

Note the pubkeyshares in the `cluster-lock.json` are base64 encoded and decode to hex. Below is a decoding example for the first `voting_public_key` seen above.

```sh
echo pkadKH8m7LNgSbebQI4lc4oOFZmA8y+2WRdEFrng6Pf47MVdAaVFKMFsE4uxIB6v | base64 -d | hexdump -v -e '/1 "%02x" ' | (echo -n 0x && cat)

-> 0xa6469d287f26ecb36049b79b408e25738a0e159980f32fb659174416b9e0e8f7f8ecc55d01a54528c16c138bb1201eaf
```

Feel free to update the `voting_keystore_path`, `suggested_fee_recipient` etc. to whatever you have set up for your environment. Note that there either needs to be a different `validator_definitions.yml` on each distributed validator based on the keys it holds or a single `validator_definitions.yml` file can be used but you must ensure no collisions on the `voting_keystore_path` & `voting_keystore_password_path`.

### Verify Charon + Builder API is Functional

Once you have Charon and your Validator Client set up you can verify the set up is functional by reviewing your proposed blocks on Etherscan testnets or on via the Relay API endpoints.

As an example if my validator was the block proposer for block 12853375 on Ropsten I can review the following resources.

[Etherscan Ropsten Block 12853375](https://ropsten.etherscan.io/block/12853375), if we check the `Extra Data` field on this page we will see the tag `Flashbots flashblock (Hex:0x466c617368626f747320666c617368626c6f636b)`. Relays will generally add a tag to the block, this block was submitted via the Flashbots Relay and as a result it has the tag: `Flashbots flashblock`.

[Relay Data API](https://flashbots.notion.site/Relay-API-Spec-5fb0819366954962bc02e81cb33840f5), if you navigate to the `Data API` section on the Relay Data API you will see an endpoint labeled `proposerPayloadsDelivered`. You are able to add a query argument of `block_number` to this call to see if a block was submitted via that Relay. [Here](https://builder-relay-ropsten.flashbots.net/relay/v1/data/bidtraces/proposer_payload_delivered?block_number=12853375) is the query for the example block 12853375. Blocks that have not been submitted to the Relay will return an empty array `[]`.
