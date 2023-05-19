---
sidebar_position: 5
description: Exit a validator
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Exit a DV

:::caution
Charon is in an alpha state and should be used with caution according to its [Terms of Use](https://obol.tech/terms.pdf).
:::

Exiting your validator means to stop staking and withdraw your staked ether. This process will take 27 hours or longer depending on the current length of the exit queue. 

:::info
- A threshold of operators needs to run the same exit command for the exit to succeed.
- If a charon client restarts after the exit command is run but before the threshold is reached, it will lose the partial exits it has stored. If all charon clients restart before the required threshold of exit messages are received, operators will have to rebroadcast the exit messages.
:::
## Step 1. Run the `voluntary-exit` command on your validator client

Run the appropriate command to broadcast an exit message from your validator client to its upstream charon client.

:::tip
This command should be executed on your running validator client, not your charon client. It needs to be the validator client that is connected to your charon client taking part in the Distributed Validator Cluster, and not a standalone VC connected to a different consensus layer client, as you are only signing a partial exit message, with a partial private key share, which your charon client will combine with the other partial exit messages from the other operators in the cluster before broadcasting to the consensus layer when it is valid. 
:::
:::info
Confirm the earliest `EXIT_EPOCH` to use to make sure every operator is using the exact same value. Assuming you want to exit as soon as possible, the default epoch of `162304` included in these commands should be sufficient.
:::


<Tabs groupId="validator-clients">
  <TabItem value="teku" label="Teku" default>
    <pre>
      <code>
    {String.raw`docker exec -ti charon-distributed-validator-node-teku-1 /opt/teku/bin/teku voluntary-exit \
    --beacon-node-api-endpoint="http://charon:3600/" \
    --confirmation-enabled=false \
    --validator-keys="/opt/charon/validator_keys:/opt/charon/validator_keys" \
    --epoch=162304`}
      </code>
    </pre>
  </TabItem>
  <TabItem value="lighthouse" label="Lighthouse">
    <pre>
      <code>
    {String.raw`docker exec -ti charon-distributed-validator-node-lighthouse-1 /opt/lighthouse/lighthouse validator exit \
    --beacon-node "http://charon:3600/" \
    --validator-dir "/opt/charon/validator_keys" \
    --epoch 162304`}
      </code>
    </pre>
  </TabItem>
  <TabItem value="nimbus" label="Nimbus">
    <pre>
      <code>
    {String.raw`docker exec -ti charon-distributed-validator-node-nimbus-1 /opt/nimbus-eth2/build/nimbus_beacon_node validator_exit \
    --rpc="http://charon:3600/" \
    --validators-dir="/opt/charon/validator_keys" \
    --exit-epoch=162304`}
      </code>
    </pre>
  </TabItem>
</Tabs>

Once a threshold of exit signatures has been received by any single charon client, it will craft a valid exit message and will submit it to the beacon chain for inclusion.

The process of a validator exiting from staking takes variable amounts of time, depending on how many others are exiting at the same time. Once complete, the DV will no longer be responsible for performing validator network duties, is no longer eligible for rewards, and no longer has their ETH "at stake". At this time the account will be marked as fully “withdrawable”.