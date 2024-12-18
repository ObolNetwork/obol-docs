---
sidebar_position: 6
description: Exit a validator
---

# quickstart-exit

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

## Exit a DV

:::warning Charon is in a beta state and should be used with caution according to its [Terms of Use](https://obol.tech/terms.pdf). :::

Users looking to exit staking entirely and withdraw their full balance back must also sign and broadcast a "voluntary exit" message with validator keys which will start the process of exiting from staking. This is done with your validator client and submitted to your beacon node, and does not require gas. In the case of a DV, each charon node needs to broadcast a partial exit to the other nodes of the cluster. Once a threshold of partial exits has been received by any node, the full voluntary exit will be sent to the beacon chain.

This process will take 27 hours or longer depending on the current length of the exit queue.

:::info

* A threshold of operators needs to run the exit command for the exit to succeed.
* If a charon client restarts after the exit command is run but before the threshold is reached, it will lose the partial exits it has received from the other nodes. If all charon clients restart and thus all partial exits are lost before the required threshold of exit messages are received, operators will have to rebroadcast their partial exit messages. :::

### Run the `voluntary-exit` command on your validator client

Run the appropriate command on your validator client to broadcast an exit message from your validator client to its upstream charon client.

It needs to be the validator client that is connected to your charon client taking part in the DV, as you are only signing a partial exit message, with a partial private key share, which your charon client will combine with the other partial exit messages from the other operators.

:::info

* All operators need to use the same `EXIT_EPOCH` for the exit to be successful. Assuming you want to exit as soon as possible, the default epoch of `162304` included in the below commands should be sufficient.
* Partial exits can be broadcasted by any validator client as long as the sum reaches the threshold for the cluster. :::

```
      
    {String.raw`docker exec -ti charon-distributed-validator-node-teku-1 /opt/teku/bin/teku voluntary-exit \
    --beacon-node-api-endpoint="http://charon:3600/" \
    --confirmation-enabled=false \
    --validator-keys="/opt/charon/validator_keys:/opt/charon/validator_keys" \
    --epoch=162304`}
      
    
```

The following executes an interactive command inside the Nimbus VC container. It copies all files and directories from the Keystore path `/home/user/data/charon` to the newly created `/home/user/data/wd` directory.\
\
For each file in the `/home/user/data/wd/secrets` directory, it:

* Extracts the filename without the extension as the file name is the public key
* Appends ``{String.raw`--validator=`}`` to the `command` variable.
* Executes a program called `nimbus_beacon_node` with the following arguments:
* `deposits exit` : Exits validators
* `$command` : The generated command string from the loop.
* `--epoch=162304` : The epoch upon which to submit the voluntary exit.
* `--rest-url=http://charon:3600/` : Specifies the Charon `host:port`
* `--data-dir=/home/user/charon/` : Specifies the `Keystore path` which has all the validator keys. There will be a `secrets` and a `validators` folder inside it.

```
      
        {String.raw`docker exec -it charon-distributed-validator-node-nimbus-1 /bin/bash -c '\
    mkdir /home/user/data/wd    cp -r /home/user/data/charon/ /home/user/data/wd    command=""; \    for file in /home/user/data/wd/secrets/*; do \        filename=$(basename "$file" | cut -d. -f1); \        command+=" --validator=$filename"; \    done; \
/home/user/nimbus_beacon_node deposits exit $command --epoch=162304 --rest-url=http://charon:3600/ --data-dir=/home/user/data/wd/'}       </code>     </pre>   </TabItem>     <TabItem value="lodestar" label="Lodestar" default>     The following executes an interactive command inside the Loestar VC container to exit all validators. It executes      <code>node /usr/app/packages/cli/bin/lodestar validator voluntary-exit</code> with the arguments:     <ul>       <li><code>--beaconNodes="http://charon:3600"</code> : Specifies the Charon <code>host:port</code>.</li>       <li><code>--data-dir=/opt/data</code> : Specifies the folder where the key stores were imported.</li>       <li><code>--exitEpoch=162304</code> : The epoch upon which to submit the voluntary exit.</li>       <li><code>--network=goerli</code> : Specifies the network.</li>       <li><code>--yes</code> : Skips confirmation prompt.</li>     </ul>     <pre>       <code>     {String.rawdocker exec -it charon-distributed-validator-node-lodestar-1 /bin/sh -c 'node /usr/app/packages/cli/bin/lodestar validator voluntary-exit --beaconNodes="http://charon:3600" --dataDir=/opt/data --exitEpoch=162304 --network=goerli --yes'`}

```

Once a threshold of exit signatures has been received by any single charon client, it will craft a valid voluntary exit message and will submit it to the beacon chain for inclusion. You can monitor partial exits stored by each node in the [Grafana Dashboard](https://github.com/ObolNetwork/charon-distributed-validator-node).

### Exit epoch and withdrawable epoch

The process of a validator exiting from staking takes variable amounts of time, depending on how many others are exiting at the same time.

Immediately upon broadcasting a signed voluntary exit message, the exit epoch and withdrawable epoch values are calculated based off the current epoch number. These values determine exactly when the validator will no longer be required to be online performing validation, and when the validator is eligible for a full withdrawal respectively.

1. Exit epoch - epoch at which your validator is no longer active, no longer earning rewards, and is no longer subject to slashing rules. :::warning Up until this epoch (while "in the queue") your validator is expected to be online and is held to the same slashing rules as always. Do not turn your DV node off until this epoch is reached. :::
2. Withdrawable epoch - epoch at which your validator funds are eligible for a full withdrawal during the next validator sweep. This occurs 256 epochs after the exit epoch, which takes \~27.3 hours.

### How to verify a validator exit

Consult the examples below and compare them to your validator's monitoring to verify that exits from each operator in the cluster are being received. This example is a cluster of 4 nodes with 2 validators and threshold of 3 nodes broadcasting exits are needed.

1. Operator 1 broadcasts an exit on validator client 1. ![Verify in Grafana Exit panel](https://github.com/ObolNetwork/obol-docs/blob/main/img/ExitPromQuery-01.png) ![Verify in Grafana Exit panel](https://github.com/ObolNetwork/obol-docs/blob/main/img/DutyExit-01.png)
2. Operator 2 broadcasts an exit on validator client 2. ![Verify in Grafana Exit panel](https://github.com/ObolNetwork/obol-docs/blob/main/img/ExitPromQuery-02.png) ![Verify in Grafana Exit panel](https://github.com/ObolNetwork/obol-docs/blob/main/img/DutyExit-02.png)
3. Operator 3 broadcasts an exit on validator client 3. ![Verify in Grafana Exit panel](https://github.com/ObolNetwork/obol-docs/blob/main/img/ExitPromQuery-03.png) ![Verify in Grafana Exit panel](https://github.com/ObolNetwork/obol-docs/blob/main/img/DutyExit-03.png)

At this point, the threshold of 3 has been reached and the validator exit process will start. The logs will show the following: ![Verify in Grafana Exit panel](https://github.com/ObolNetwork/obol-docs/blob/main/img/ExitLogs.png)

:::tip Once a validator has broadcasted an exit message, it must continue to validate for at least 27 hours or longer. Do not shut off your distributed validator nodes until your validator is fully exited. :::