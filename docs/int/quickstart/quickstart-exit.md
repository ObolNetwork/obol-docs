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

## Run the `voluntary-exit` command on your validator client

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
  <TabItem value="nimbus" label="Nimbus">
    The following executes an interactive command inside the Nimbus VC container. It copies all files and directories from the Keystore path <code>/home/user/data/charon</code> to the newly created <code>/home/user/data/wd</code> directory.
    <br/><br/>
    For each file in the <code>/home/user/data/wd/secrets</code> directory, it:
    <li>Extracts the filename without the extension as the file name is the public key</li>
    <li>Appends <code>{String.raw`--validator=<filename>`}</code> to the <code>command</code> variable.</li>
    <li>Executes a program called <code>nimbus_beacon_node</code> with the following arguments:</li>
    <ul>
      <li><code>deposits exit</code> : Exits validators</li>
      <li><code>$command</code> : The generated command string from the loop.</li>
      <li><code>--epoch=162304</code> : The epoch upon which to submit the voluntary exit.</li>
      <li><code>--rest-url=http://charon:3600/</code> : Specifies the Charon <code>host:port</code></li>
      <li><code>--data-dir=/home/user/charon/</code> : Specifies the <code>Keystore path</code> which has all the validator keys. There will be a <code>secrets</code> and a <code>validators</code> folder inside it.</li>
    </ul>
    <pre>
      <code>
        {String.raw`docker exec -it charon-distributed-validator-node-nimbus-1 /bin/bash -c '\
    
        mkdir /home/user/data/wd
        cp -r /home/user/data/charon/ /home/user/data/wd
    
        command=""; \
        for file in /home/user/data/wd/secrets/*; do \
            filename=$(basename "$file" | cut -d. -f1); \
            command+=" --validator=$filename"; \
        done; \
    
/home/user/nimbus_beacon_node deposits exit $command --epoch=162304 --rest-url=http://charon:3600/ --data-dir=/home/user/data/wd/'`}
      </code>
    </pre>
  </TabItem>
    <TabItem value="lodestar" label="Lodestar" default>
    The following executes an interactive command inside the Loestar VC container to exit all validators. It executes 
    <code>node /usr/app/packages/cli/bin/lodestar validator voluntary-exit</code> with the arguments:
    <ul>
      <li><code>--beaconNodes="http://charon:3600"</code> : Specifies the Charon <code>host:port</code>.</li>
      <li><code>--data-dir=/opt/data</code> : Specifies the folder where the key stores were imported.</li>
      <li><code>--exitEpoch=162304</code> : The epoch upon which to submit the voluntary exit.</li>
      <li><code>--network=goerli</code> : Specifies the network.</li>
      <li><code>--yes</code> : Skips confirmation prompt.</li>
    </ul>
    <pre>
      <code>
    {String.raw`docker exec -it charon-distributed-validator-node-lodestar-1 /bin/sh -c 'node /usr/app/packages/cli/bin/lodestar validator voluntary-exit --beaconNodes="http://charon:3600" --dataDir=/opt/data --exitEpoch=162304 --network=goerli --yes'`}
      </code>
    </pre>
  </TabItem>
</Tabs>

Once a threshold of exit signatures has been received by any single charon client, it will craft a valid exit message and will submit it to the beacon chain for inclusion. You can monitor partial exits stored by each node in the [Grafana Dashboard](https://github.com/ObolNetwork/charon-distributed-validator-node).

The process of a validator exiting from staking takes variable amounts of time, depending on how many others are exiting at the same time. Once complete, the DV will no longer be responsible for performing validator network duties, is no longer eligible for rewards, and no longer has their ETH "at stake". At this time the account will be marked as fully “withdrawable”.
