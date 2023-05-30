---
sidebar_position: 1
description: Run a distributed validator cluster with the builder API (MEV-Boost)
---

# Run a cluster with MEV-Boost

:::caution
Charon is in an alpha state and should be used with caution according to its [Terms of Use](https://obol.tech/terms.pdf).

Charon's integration with MEV-Boost is also in an alpha state and requires a non-trivial amount of configuration to get working successfully. In the future, this process aims to be much more automated and seamless from a user's perspective.
:::

This quickstart guide focuses on configuring the builder API for a validator and assumes you already [have a cluster up and running](docs/int/quickstart/group/index.md).

## Getting started with Charon & the Builder API

Running a distributed validator cluster with the builder API enabled will give the validators in the cluster access to the builder network. This builder network is a network of "Block Builders" who work with MEV searchers to produce the most valuable blocks a validator can propose. [MEV-Boost](https://boost.flashbots.net/) is a product from flashbots that enables you to ask multiple block relays (who communicate with the "Block Builders") for blocks to propose. The block that pays the largest reward to the validator will be signed and returned to the relay for broadcasting to the wider network. The end result for the validator is generally an increased APY as they receive some share of the MEV.

## Configuring Charon

To configure Charon to use the builder API you simply need to add one flag to the `charon run` command.

```
charon run --builder-api
```

## Configuring Validator Clients

Currently, Charon with the builder API enabled, is compatible only with [Teku](https://github.com/ConsenSys/teku) and requires a decent amount of manual configuration. Work is underway [to support](https://dvt.obol.tech/) all validator client implementations in a mev-enabled distributed validator cluster seamlessly.

### Teku Validator Client

Configuring the Teku validator client with Charon follows exactly the same process as their [official guide](https://docs.teku.consensys.net/how-to/configure/use-proposer-config-file).

The validator client must be set up to use the `--validators-proposer-config` [flag](https://docs.teku.consensys.net/reference/cli#validators-proposer-config) with a value equal to `http://$CHARON_ENDPOINT:3600/teku_proposer_config`.

Once the flag is set up, Obol distributed validators will be able to register to the builder network, submit blinded beacon blocks and gain a share of the MEV profits.

### Lighthouse Validator Client

For Lighthouse, we are currently waiting on the following [PR](https://github.com/sigp/lighthouse/pull/4306) to be merged into their unstable branch to enable compatability, please review the PR's status.

## Run MEV Boost

If you want to run [mev-boost](https://boost.flashbots.net/) and if you are already running the [cluster](docs/int/quickstart/group/index.md), you can follow these steps:

- Set `BUILDER_API_ENABLED=true` in `.env`
- Restart your stack
```
docker compose -f docker-compose.yml -f mevboost-compose.yml up
```

### Verify Charon + Builder API is Functional

Once you have Charon and your Validator Client set up, you can verify if your setup is functional by reviewing your proposed blocks on [beaconcha.in](https://beaconcha.in) dashboards or via the Relay API endpoints.

As an example, if my validator was the block proposer for block `17370078` on mainnet, I can review the following resources:

* [Beaconcha.in](https://beaconcha.in):
  * Consider this [Mainnet block 17370078](https://beaconcha.in/block/17370078).
  * If we check the `Block Extra Data` field under `Execution Payload`, we will see the tag `Illuminate Dmocratize Dstribute` (Hex:`0x496c6c756d696e61746520446d6f63726174697a6520447374726962757465`). 
  * Relays will generally add a tag to the block. Since this block was submitted via the Flashbots Relay, as a result it has the tag.
  * All mainnet flashbots blocks have this tag `Illuminate Dmocratize Dstribute`.
* [Relay API](https://flashbots.github.io/relay-specs/):
  * If you navigate to the `Data API` section on the Relay API page, you will see an endpoint labeled `/relay/v1/data/bidtraces/proposer_payload_delivered`.
  * You can add a query argument of `block_number` to this call to see if a block was submitted via that Relay.
  * [Here](https://boost-relay.flashbots.net/relay/v1/data/bidtraces/proposer_payload_delivered?block_number=17370078) is the query for the example block 17370078.
  * Blocks that have not been submitted to the Relay will return an empty array `[]`.

:::caution
Note that the mainnet block in the above description is taken only for representation, and not actually proposed by a distributed validator.
:::caution
