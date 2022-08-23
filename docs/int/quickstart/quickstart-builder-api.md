---
sidebar_position: 6
description: Run a distributed validator cluster with the builder api (mev-boost)
---

# Run a cluster with the builder api

:::caution
Charon is in an early alpha state and is not ready to be run on mainnet
:::

This quickstart guide with be focusing on builder api configuration assumes you already have a cluster up and running if not see "[Run a cluster with others](./quickstart-group.md)"


## Getting started with Charon & Builder API

For those who aren't aware running charon with the builder api enabled will give the validators charon controls access to the builder network. This builder network is a network of "Block Builders" who work with MEV searchers to produce the most valuable blocks. MEV-Boost a product from flashbot enables you hook into multiple relays who communicate with the "Block Builders". The end result for the validator is generally an increased APY as they receive some share of the MEV.


## Configuring Charon

To configure Charon to use the builder api you simply need to add one flag to the `charon run` command.

```
charon run --builder-api=true
```

## Configuring Validator Clients

Currently Charon with the builder api enabled is comaptible with 2 validator clients, Teku (develop branch) & Lighthouse (unstable branch).

### Teku Validator Client

For Teku currently you must use the develop branch / container image to have access to the changes that enable compatibility. 

[consensys/teku:develop](https://hub.docker.com/r/consensys/teku/tags)

Configuring the Teku validator client with Charon follows exactly the same process as their [official guide](https://hackmd.io/@StefanBratanov/BkMlo1RO9) with 2 conditions.

- First the validator client must be set up to use the proposerConfig.json this involves including the [--validators-proposer-config](https://docs.teku.consensys.net/en/latest/Reference/CLI/CLI-Syntax/#validators-proposer-config)
- Second the --validators-proposer-config flag must be equal to https://$CHARON_ENDPOINT:3600/teku_proposer_config

With these 2 conditions in places Charon validators will be able to register to the builder network, submit blinded block and gain a share of the MEV profits.

### Lighthouse Validator Client

For Lighthouse currently you must use the unstable branch / container image to have access to the changes that enable compatibility.

[sigp/lighthouse:latest-unstable](https://hub.docker.com/r/sigp/lighthouse/tags)

Configuring the Lightouse validator client with Charon follows exactly the same process as their [official guide](https://lighthouse-book.sigmaprime.io/builders.html) with some additional conditions.

- The validator client must be set up to use a custom [validator_definitions.yml](https://lighthouse-book.sigmaprime.io/validator-management.html).
- The flag --builder-registration-timestamp-override must be set and the assigned value must be the same across all validator clients.
- The custom validator_definitions.yml must be placed in the --validators-dir of lighthouse.
- The custom validator_definitions.yml must follow the structure below, where voting_public_key is the pubkeyshare on the validator client and builder_pubkey_override is the associated aggregate pubkey the network will find. You can find these pubkeyshare to aggregate pubkey mapping in the cluster-lock.json created during the DKG process. 

```
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

Note the pubkeyshares in the cluster-lock.json are base64 encoded and decode to hex. Below is a decoding example for the first voting_public_key seen above.

```
echo pkadKH8m7LNgSbebQI4lc4oOFZmA8y+2WRdEFrng6Pf47MVdAaVFKMFsE4uxIB6v | base64 -d | hexdump -v -e '/1 "%02x" ' | (echo -n 0x && cat)

-> 0xa6469d287f26ecb36049b79b408e25738a0e159980f32fb659174416b9e0e8f7f8ecc55d01a54528c16c138bb1201eaf
```

Feel free to update the voting_keystore_path, suggested_fee_recipient etc. to whatever you have set up for you're environment. Note that there either needs to be a different validator_definitions.yml on each distributed validator based on the keys it holds or a single validator_definitions.yml file can be used but you must ensure no collisions on the voting_keystore_path & voting_keystore_password_path.  

:::tip
Don't forget to be a good testnet steward and exit your validator when you are finished testing with it.
:::
