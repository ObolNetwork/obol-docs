---
sidebar_position: 6
description: Exit a validator
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Exit a validator

:::warning
Charon is in an early alpha state and is not ready to be run on mainnet.
:::

Exiting your validator keys can be useful in situations where you want to stop staking and withdraw your staked ETH.

## Pre-requisites

- A quorum of operators needs to run the same exit command for the exit to succeed.
- If a charon client restarts after the exit command is run but before the threshold is reached, it will lose the partial exits it has stored. If all charon clients restart before the required threshold of exit messages are received, operators will have to rebroadcast the exit messages. 

## Step 1. Confirm the `EXIT_EPOCH`

Confirm the earliest `EXIT_EPOCH` to use for your validators. Assuming you want to exit as soon as possible, the default epoch of `162304` is sufficient.
    
    export EXIT_EPOCH=162304

## Step 2. Run the `voluntary-exit` command on your validator client

Run the appropriate command to broadcast an exit message from your validator client to its upstream charon client.

:::tip
This command should be executed on your running validator client, not your charon client. It needs to be the validator client that is connected to your charon client taking part in the Distributed Validator Cluster, and not a standalone VC connected to a different consensus layer client, as you are only signing a partial exit message, with a partial private key share, which charon will combine with the other partial exit messages from the other operators in the cluster before broadcasting to the consensus layer when it valid. 
:::

<Tabs groupId="validator-clients">
  {[
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
  ]}
</Tabs>

Once a threshold of exit signatures has been received by any single charon client, it will craft a valid exit message and will submit it to the beacon chain for inclusion.

## Feedback

If you have gotten this far through the process, and whether you succeeded or failed at exiting a validator, we would like to hear your feedback on the process and where you encountered difficulties. Please let us know by joining and posting on our [Discord](https://discord.gg/n6ebKsX46w). Also, feel free to add issues to our [GitHub repos](https://github.com/ObolNetwork).
