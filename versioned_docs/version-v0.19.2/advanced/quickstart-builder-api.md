---
sidebar_position: 2
description: Run a distributed validator cluster with the builder API (MEV-Boost)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Enable MEV

:::caution
Charon is in a beta state and should be used with caution according to its [Terms of Use](https://obol.tech/terms.pdf).
:::

This quickstart guide focuses on configuring the builder API for Charon and supported validator and consensus clients.

## Getting started with Charon & the Builder API

Running a distributed validator cluster with the builder API enabled will give the validators in the cluster access to the builder network. This builder network is a network of "Block Builders"
who work with MEV searchers to produce the most valuable blocks a validator can propose.

[MEV-Boost](https://boost.flashbots.net/) is one such product from flashbots that enables you to ask multiple
block relays (who communicate with the "Block Builders") for blocks to propose. The block that pays the largest reward to the validator will be signed and returned to the relay for broadcasting to the wider
network. The end result for the validator is generally an increased APR as they receive some share of the MEV.

:::info 
Before completing this guide, please check your cluster version, which can be found inside the `cluster-lock.json` file. If you are using cluster-lock version `1.7.0` or higher release verions, Obol seamlessly accommodates all validator client implementations within a mev-enabled distributed validator cluster.

For clusters with a cluster-lock version `1.6.0` and below, charon is compatible only with [Teku](https://github.com/ConsenSys/teku). Use the version history feature of this documentation to see the instructions for configuring a cluster in that manner (`v0.16.0`).
:::

## Client configuration

:::note
You need to add CLI flags to your consensus client, charon client, and validator client, to enable the builder API.

You need all operators in the cluster to have their nodes properly configured to use the builder API, or you risk missing a proposal. 
:::

### Charon

Charon supports builder API with the `--builder-api` flag. To use builder API, one simply needs to add this flag to the `charon run` command:

```
charon run --builder-api
```

### Consensus Clients

The following flags need to be configured on your chosen consensus client. A flashbots relay URL is provided for example purposes, you should choose a relay that suits your preferences from [this list](https://github.com/eth-educators/ethstaker-guides/blob/main/MEV-relay-list.md#mev-relay-list-for-mainnet). 

<Tabs groupId="consensus-clients">
  <TabItem value="teku" label="Teku" default>
    Teku can communicate with a single relay directly:
    <pre>
      <code>
    {String.raw`--builder-endpoint="https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c0205200f2f8e2e3ad3b71d3499c54ad14d6c21b41a37ae@boost-relay.flashbots.net"`}
      </code>
    </pre>
    Or you can configure it to communicate with a local <a href="https://github.com/flashbots/mev-boost" target="_blank">MEV-boost</a> sidecar to configure multiple relays:
    <pre>
      <code>
    {String.raw`--builder-endpoint=http://mev-boost:18550`}
      </code>
    </pre>
  </TabItem>
  <TabItem value="lighthouse" label="Lighthouse">
    Lighthouse can communicate with a single relay directly:
    <pre>
      <code>
    {String.raw`lighthouse bn --builder "https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c0205200f2f8e2e3ad3b71d3499c54ad14d6c21b41a37ae@boost-relay.flashbots.net"`}
      </code>
    </pre>
    Or you can configure it to communicate with a local <a href="https://github.com/flashbots/mev-boost" target="_blank">MEV-boost</a> sidecar to configure multiple relays:
    <pre>
      <code>
    {String.raw`lighthouse bn --builder "http://mev-boost:18550"`}
      </code>
    </pre>
  </TabItem>
  <TabItem value="prysm" label="Prysm">
    <pre>
      <code>
    {String.raw`prysm beacon-chain --http-mev-relay "https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c0205200f2f8e2e3ad3b71d3499c54ad14d6c21b41a37ae@boost-relay.flashbots.net"`}
      </code>
    </pre>
  </TabItem>
  <TabItem value="nimbus" label="Nimbus">
    <pre>
      <code>
        {String.raw`--payload-builder=true --payload-builder-url="https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c0205200f2f8e2e3ad3b71d3499c54ad14d6c21b41a37ae@boost-relay.flashbots.net"`}
      </code>
    </pre>
    You should also consider adding <code>--local-block-value-boost 3</code> as a flag, to favour locally built blocks if they are withing 3% in value of the relay block, to improve the chances of a successful proposal.
  </TabItem>
  <TabItem value="lodestar" label="Lodestar">
    <pre>
      <code>
    {String.raw`--builder --builder.urls "https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c0205200f2f8e2e3ad3b71d3499c54ad14d6c21b41a37ae@boost-relay.flashbots.net"`}
      </code>
    </pre>
  </TabItem>
</Tabs>

### Validator Clients

The following flags need to be configured on your chosen validator client

<Tabs groupId="validator-clients">
  <TabItem value="teku" label="Teku" default>
    <pre>
      <code>
    {String.raw`teku validator-client --validators-builder-registration-default-enabled=true`}
      </code>
    </pre>

  </TabItem>
  <TabItem value="lighthouse" label="Lighthouse">
    <pre>
      <code>
    {String.raw`lighthouse vc --builder-proposals`}
      </code>
    </pre>
  </TabItem>
  <TabItem value="prysm" label="Prysm">
    <pre>
      <code>
    {String.raw`prysm validator --enable-builder`}
      </code>
    </pre>
  </TabItem>
  <TabItem value="nimbus" label="Nimbus">
    <pre>
      <code>
        {String.raw`--payload-builder=true`}
      </code>
    </pre>
  </TabItem>
  <TabItem value="lodestar" label="Lodestar">
    <pre>
      <code>
    {String.raw`--builder="true" --builder.selection="builderonly"`}
      </code>
    </pre>
  </TabItem>
</Tabs>

## Verify your cluster is correctly configured

It can be difficult to confirm everything is configured correctly with your cluster until a proposal opportunity arrives, but here are some things you can check. 

When your cluster is running, you should see if charon is logging something like this each epoch:
```
13:10:47.094 INFO bcast      Successfully submitted validator registration to beacon node {"delay": "24913h10m12.094667699s", "pubkey": "84b_713", "duty": "1/builder_registration"}
```

This indicates that your charon node is successfully registering with the relay for a blinded block when the time comes. 

If you are using the [ultrasound relay](https://relay.ultrasound.money), you can enter your cluster's distributed validator public key(s) into their website, to confirm they also see the validator as correctly registered. 

You should check that your validator client's logs look healthy, and ensure that you haven't added a `fee-recipient` address that conflicts with what has been selected by your cluster in your cluster-lock file, as that may prevent your validator from producing a signature for the block when the opportunity arises. You should also confirm the same for all of the other peers in your cluster. 

Once a proposal has been made, you should look at the `Block Extra Data` field under `Execution Payload` for the block on [Beaconcha.in](https://beaconcha.in/block/18450364), and confirm there is text present, this generally suggests the block came from a builder, and was not a locally constructed block. 