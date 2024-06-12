---
sidebar_position: 7
description: Exit a validator
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Exit a DV

:::caution
Charon is in a beta state and should be used with caution according to its [Terms of Use](https://obol.tech/terms.pdf).
:::

Users looking to exit staking entirely and withdraw their full balance back must also sign and broadcast a "voluntary exit" message with validator keys which will start the process of exiting from staking. This is done with your validator client and submitted to your beacon node, and does not require gas. In the case of a DV, each charon node needs to broadcast a partial exit to the other nodes of the cluster. Once a threshold of partial exits has been received by any node, the full voluntary exit will be sent to the beacon chain.

This process will take 27 hours or longer depending on the current length of the exit queue.

:::info

- A threshold of operators needs to run the exit command for the exit to succeed.
- If a charon client restarts after the exit command is run but before the threshold is reached, it will lose the partial exits it has received from the other nodes. If all charon clients restart and thus all partial exits are lost before the required threshold of exit messages are received, operators will have to rebroadcast their partial exit messages.
  :::

## Run the `voluntary-exit` command on your validator client

Run the appropriate command on your validator client to broadcast an exit message from your validator client to its upstream charon client.

It needs to be the validator client that is connected to your charon client taking part in the DV, as you are only signing a partial exit message, with a partial private key share, which your charon client will combine with the other partial exit messages from the other operators.

:::info

- All operators need to use the same `EXIT_EPOCH` for the exit to be successful. Assuming you want to exit as soon as possible, the default epoch of `162304` included in the below commands should be sufficient.
- Partial exits can be broadcasted by any validator client as long as the sum reaches the threshold for the cluster.
  :::

<Tabs groupId="validator-clients">
  <TabItem value="Goerli" label="Goerli" default>
    <Tabs groupId="validator-clients">
      <TabItem value="teku" label="Teku" default>
        <pre>
          <code>
            {String.raw`docker exec -it charon-distributed-validator-node-teku-1 /opt/teku/bin/teku voluntary-exit \
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
            {String.raw`docker exec -it charon-distributed-validator-node-nimbus-1 /bin/bash -c ' \
        
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
        The following executes an interactive command inside the Lodestar VC container to exit all validators. It executes 
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
            {String.raw`docker exec -it charon-distributed-validator-node-lodestar-1 /bin/sh -c 'node /usr/app/packages/cli/bin/lodestar validator voluntary-exit \
            --beaconNodes="http://charon:3600" \
            --dataDir=/opt/data \
            --exitEpoch=162304 \
            --network=goerli \
            --yes'`}
          </code>
        </pre>
      </TabItem>
      <TabItem value="charon" label="Charon" default>
      Voluntary exit can be submitted directly through Charon as well. The partially signed exit messages are stored (centrally) on Obol's infrastructure. Exits through Charon are submitted per validator. All active validators public keys for a given cluster lock can be listed with:
        <pre>
          <code>
        {String.raw`docker exec -it charon-distributed-validator-node-charon-1 /bin/sh -c 'charon exit active-validator-list \
    --beacon-node-endpoints="http://lighthouse:5052"'`}
          </code>
        </pre>
      Then a signed partial exit for validator can be submitted by:
        <pre>
          <code>
        {String.raw`docker exec -it charon-distributed-validator-node-charon-1 /bin/sh -c 'charon exit sign \
    --beacon-node-endpoints="http://lighthouse:5052" \
    --validator-public-key="<VALIDATOR_PUBLIC_KEY>" \
    --publish-timeout="5m"'`}
          </code>
        </pre>
      After a sufficient amount of signed partial exits from node operators in the cluster is cumulated, a full (complete) exit is created. The threshold is the same as the one submitted during creating of the cluster. After a full exit message is created, any operator from the cluster can broadcast it to the beacon chain with:
        <pre>
          <code>
        {String.raw`docker exec -it charon-distributed-validator-node-charon-1 /bin/sh -c 'charon exit broadcast \
    --beacon-node-endpoints="http://lighthouse:5052" \
    --validator-public-key="<VALIDATOR_PUBLIC_KEY>" \
    --publish-timeout="5m"'`}
          </code>
        </pre>
      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="Holesky" label="Holesky">
    <Tabs groupId="validator-clients">
      <TabItem value="teku" label="Teku" default>
        <pre>
          <code>
            {String.raw`docker exec -it charon-distributed-validator-node-teku-1 /opt/teku/bin/teku voluntary-exit \
            --beacon-node-api-endpoint="http://charon:3600/" \
            --confirmation-enabled=false \
            --validator-keys="/opt/charon/validator_keys:/opt/charon/validator_keys" \
            --epoch=256`}
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
          <li><code>--epoch=256</code> : The epoch upon which to submit the voluntary exit.</li>
          <li><code>--rest-url=http://charon:3600/</code> : Specifies the Charon <code>host:port</code></li>
          <li><code>--data-dir=/home/user/charon/</code> : Specifies the <code>Keystore path</code> which has all the validator keys. There will be a <code>secrets</code> and a <code>validators</code> folder inside it.</li>
        </ul>
        <pre>
          <code>
            {String.raw`docker exec -it charon-distributed-validator-node-nimbus-1 /bin/bash -c ' \
        
            mkdir /home/user/data/wd
            cp -r /home/user/data/charon/ /home/user/data/wd
        
            command=""; \
            for file in /home/user/data/wd/secrets/*; do \
                filename=$(basename "$file" | cut -d. -f1); \
                command+=" --validator=$filename"; \
            done; \
        
            /home/user/nimbus_beacon_node deposits exit $command --epoch=256 --rest-url=http://charon:3600/ --data-dir=/home/user/data/wd/'`}
          </code>
        </pre>
      </TabItem>
        <TabItem value="lodestar" label="Lodestar" default>
        The following executes an interactive command inside the Lodestar VC container to exit all validators. It executes 
        <code>node /usr/app/packages/cli/bin/lodestar validator voluntary-exit</code> with the arguments:
        <ul>
          <li><code>--beaconNodes="http://charon:3600"</code> : Specifies the Charon <code>host:port</code>.</li>
          <li><code>--data-dir=/opt/data</code> : Specifies the folder where the key stores were imported.</li>
          <li><code>--exitEpoch=256</code> : The epoch upon which to submit the voluntary exit.</li>
          <li><code>--network=holesky</code> : Specifies the network.</li>
          <li><code>--yes</code> : Skips confirmation prompt.</li>
        </ul>
        <pre>
          <code>
            {String.raw`docker exec -it charon-distributed-validator-node-lodestar-1 /bin/sh -c 'node /usr/app/packages/cli/bin/lodestar validator voluntary-exit \
            --beaconNodes="http://charon:3600" \
            --dataDir=/opt/data \
            --exitEpoch=256 \
            --network=holesky \
            --yes'`}
          </code>
        </pre>
      </TabItem>
      <TabItem value="charon" label="Charon" default>
      Voluntary exit can be submitted directly through charon as well. The partially signed exit messages are stored (centrally) on Obol's infrastructure. Exits through charon are submitted per validator. All active validators' public keys can be listed with:
        <pre>
          <code>
        {String.raw`docker exec -it charon-distributed-validator-node-charon-1 /bin/sh -c 'charon exit active-validator-list \
    --beacon-node-endpoints="http://lighthouse:5052"'`}
          </code>
        </pre>
      Then a signed partial exit for validator can be submitted by:
        <pre>
          <code>
        {String.raw`docker exec -it charon-distributed-validator-node-charon-1 /bin/sh -c 'charon exit sign \
    --beacon-node-endpoints="http://lighthouse:5052" \
    --validator-public-key="<VALIDATOR_PUBLIC_KEY>" \
    --publish-timeout="5m"'`}
          </code>
        </pre>
      After a sufficient amount of signed partial exits from node operators in the cluster is cumulated, a full (complete) exit is created. The threshold is the same as the one submitted during creating of the cluster. After a full exit message is created, any operator from the cluster can broadcast it to the beacon chain with:
        <pre>
          <code>
        {String.raw`docker exec -it charon-distributed-validator-node-charon-1 /bin/sh -c 'charon exit broadcast \
    --beacon-node-endpoints="http://lighthouse:5052" \
    --validator-public-key="<VALIDATOR_PUBLIC_KEY>" \
    --publish-timeout="5m"'`}
          </code>
        </pre>
      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="Mainnet" label="Mainnet">
    <Tabs groupId="validator-clients">
      <TabItem value="teku" label="Teku" default>
        <pre>
          <code>
            {String.raw`docker exec -it charon-distributed-validator-node-teku-1 /opt/teku/bin/teku voluntary-exit \
            --beacon-node-api-endpoint="http://charon:3600/" \
            --confirmation-enabled=false \
            --validator-keys="/opt/charon/validator_keys:/opt/charon/validator_keys" \
            --epoch=194048`}
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
          <li><code>--epoch=194048</code> : The epoch upon which to submit the voluntary exit.</li>
          <li><code>--rest-url=http://charon:3600/</code> : Specifies the Charon <code>host:port</code></li>
          <li><code>--data-dir=/home/user/charon/</code> : Specifies the <code>Keystore path</code> which has all the validator keys. There will be a <code>secrets</code> and a <code>validators</code> folder inside it.</li>
        </ul>
        <pre>
          <code>
            {String.raw`docker exec -it charon-distributed-validator-node-nimbus-1 /bin/bash -c ' \
        
            mkdir /home/user/data/wd
            cp -r /home/user/data/charon/ /home/user/data/wd
        
            command=""; \
            for file in /home/user/data/wd/secrets/*; do \
                filename=$(basename "$file" | cut -d. -f1); \
                command+=" --validator=$filename"; \
            done; \
        
            /home/user/nimbus_beacon_node deposits exit $command --epoch=194048 --rest-url=http://charon:3600/ --data-dir=/home/user/data/wd/'`}
          </code>
        </pre>
      </TabItem>
        <TabItem value="lodestar" label="Lodestar" default>
        The following executes an interactive command inside the Lodestar VC container to exit all validators. It executes 
        <code>node /usr/app/packages/cli/bin/lodestar validator voluntary-exit</code> with the arguments:
        <ul>
          <li><code>--beaconNodes="http://charon:3600"</code> : Specifies the Charon <code>host:port</code>.</li>
          <li><code>--data-dir=/opt/data</code> : Specifies the folder where the key stores were imported.</li>
          <li><code>--exitEpoch=194048</code> : The epoch upon which to submit the voluntary exit.</li>
          <li><code>--network=mainnet</code> : Specifies the network.</li>
          <li><code>--yes</code> : Skips confirmation prompt.</li>
        </ul>
        <pre>
          <code>
            {String.raw`docker exec -it charon-distributed-validator-node-lodestar-1 /bin/sh -c 'node /usr/app/packages/cli/bin/lodestar validator voluntary-exit \
            --beaconNodes="http://charon:3600" \
            --dataDir=/opt/data \
            --exitEpoch=194048 \
            --network=mainnet \
            --yes'`}
          </code>
        </pre>
      </TabItem>
      <TabItem value="charon" label="Charon" default>
      Voluntary exit can be submitted directly through charon as well. The partially signed exit messages are stored (centrally) on Obol's infrastructure. Exits through charon are submitted per validator. All active validators' public keys can be listed with:
        <pre>
          <code>
        {String.raw`docker exec -it charon-distributed-validator-node-charon-1 /bin/sh -c 'charon exit active-validator-list \
    --beacon-node-endpoints="http://lighthouse:5052"'`}
          </code>
        </pre>
      Then a signed partial exit for validator can be submitted by:
        <pre>
          <code>
        {String.raw`docker exec -it charon-distributed-validator-node-charon-1 /bin/sh -c 'charon exit sign \
    --beacon-node-endpoints="http://lighthouse:5052" \
    --validator-public-key="<VALIDATOR_PUBLIC_KEY>" \
    --publish-timeout="5m"'`}
          </code>
        </pre>
      After a sufficient amount of signed partial exits from node operators in the cluster is cumulated, a full (complete) exit is created. The threshold is the same as the one submitted during creating of the cluster. After a full exit message is created, any operator from the cluster can broadcast it to the beacon chain with:
        <pre>
          <code>
        {String.raw`docker exec -it charon-distributed-validator-node-charon-1 /bin/sh -c 'charon exit broadcast \
    --beacon-node-endpoints="http://lighthouse:5052" \
    --validator-public-key="<VALIDATOR_PUBLIC_KEY>" \
    --publish-timeout="5m"'`}
          </code>
        </pre>
      </TabItem>
    </Tabs>
  </TabItem>
</Tabs>

When submitting through a validator client (not through charon directly), once a threshold of exit signatures has been received by any single charon client, it will craft a valid voluntary exit message and will submit it to the beacon chain for inclusion. You can monitor partial exits stored by each node in the [Grafana Dashboard](https://github.com/ObolNetwork/charon-distributed-validator-node).

## Exit epoch and withdrawable epoch

The process of a validator exiting from staking takes variable amounts of time, depending on how many others are exiting at the same time.

Immediately upon broadcasting a signed voluntary exit message, the exit epoch and withdrawable epoch values are calculated based off the current epoch number. These values determine exactly when the validator will no longer be required to be online performing validation, and when the validator is eligible for a full withdrawal respectively.

1. Exit epoch - epoch at which your validator is no longer active, no longer earning rewards, and is no longer subject to slashing rules.
   :::caution
   Up until this epoch (while "in the queue") your validator is expected to be online and is held to the same slashing rules as always. Do not turn your DV node off until this epoch is reached.
   :::
2. Withdrawable epoch - epoch at which your validator funds are eligible for a full withdrawal during the next validator sweep.
   This occurs 256 epochs after the exit epoch, which takes ~27.3 hours.

## How to verify a validator exit

Consult the examples below and compare them to your validator's monitoring to verify that exits from each operator in the cluster are being received. This example is a cluster of 4 nodes with 2 validators and threshold of 3 nodes broadcasting exits are needed.

1. Operator 1 broadcasts an exit on validator client 1.
   ![Verify in Grafana Exit panel](/img/ExitPromQuery-01.png)
   ![Verify in Grafana Exit panel](/img/DutyExit-01.png)
2. Operator 2 broadcasts an exit on validator client 2.
   ![Verify in Grafana Exit panel](/img/ExitPromQuery-02.png)
   ![Verify in Grafana Exit panel](/img/DutyExit-02.png)
3. Operator 3 broadcasts an exit on validator client 3.
   ![Verify in Grafana Exit panel](/img/ExitPromQuery-03.png)
   ![Verify in Grafana Exit panel](/img/DutyExit-03.png)

At this point, the threshold of 3 has been reached and the validator exit process will start. The logs will show the following:
![Verify in Grafana Exit panel](/img/ExitLogs.png)

:::tip
Once a validator has broadcasted an exit message, it must continue to validate for at least 27 hours or longer. Do not shut off your distributed validator nodes until your validator is fully exited.
:::
