---
sidebar_position: 1
description: Errors & Resolution 
---

# Errors & resolution
All operators should try to restart their node before attempting anything else as we are still in beta and frequently releasing fixes. You can restart and update with the following:
```
docker-compose down
git pull
docker-compose up
```
You can check your logs using
```
docker-compose logs
```

<details open>
<summary><h2>ENR & Keys</h2></summary>
<details>

<summary><h4>What is an ENR?</h4></summary>

An ENR is shorthand for an <a href="https://eips.ethereum.org/EIPS/eip-778">Ethereum Node Record</a>. It is a way to represent a node on a public network, with a reliable mechanism to update its information. 

At Obol we use ENRs to identify charon nodes to one another such that they can form clusters with the right charon nodes and not impostors.

ENRs have private keys they use to sign updates to the [data contained](https://enr-viewer.com/) in their ENR. This private key is by default found at `.charon/charon-enr-private-key`, and should be kept secure, and not checked into version control. An ENR looks something like this:

```
enr:-JG4QAgAOXjGFcTIkXBO30aUMzg2YSo1CYV0OH8Sf2s7zA2kFjVC9ZQ_jZZItdE8gA-tUXW-rWGDqEcoQkeJ98Pw7GaGAYFI7eoegmlkgnY0gmlwhCKNyGGJc2VjcDI1NmsxoQI6SQlzw3WGZ_VxFHLhawQFhCK8Aw7Z0zq8IABksuJEJIN0Y3CCPoODdWRwgj6E
```
</details>
<details>
<summary><h4>How do I get my ENR if I want to generate it again?</h4></summary>
<ul>
<li><code>cd</code> to the directory where your private keys are located (ex: <code>cd /path/to/charon/enr/private/key</code>)</li>
<li>Run <code>docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:latest enr</code>. This prints the ENR on your screen.</li>
<li>Please note that this ENR is not the same as the one generated when you created it for the first time. This is because the process of generating ENRs includes the current timestamp.</li></ul>
</details>

<details>
    <summary><h4>What do I do if lose my <code>charon-enr-private-key</code>?</h4></summary>
<ul>
<li>For now, ENR rotation/replacement is not supported, it will be supported in a future release.</li>
<li>Therefore, it's advised to always keep a backup of your <code>private-key</code> in a secure location (ex: cloud storage, USB Flash drive etc.)</li></ul>
</details>

<details>
<summary><h4>I can't find the keys anywhere.</h4></summary>
<ul>
<li>The <code>charon-enr-private-key</code> is generated inside a hidden folder <code>.charon</code>.</li>
<li>To view it, run <code>ls -al</code> in your terminal.</li>
<li>You can then copy the key to your <code>~/Downloads</code> folder for easy access by running <code>cp .charon/charon-enr-private-key ~/Downloads</code>. This step maybe a bit different for windows.</li>
<li>Else, if you are on <code>macOS</code>, press <code>Cmd + Shift + . </code> to view the <code>.charon</code> folder in the finder application.</li></ul>
</details>
</details>

<details open>
<summary><h2>Lighthouse</h2></summary>
<details>
<summary><h4>Downloading historical blocks</h4></summary>
This means that Lighthouse is still syncing which will throw a lot of errors down the line. Wait for the sync before moving further.
</details>

<details>
<summary><h4><code>Failed to request attester duties</code> error</h4></summary>
Indicates there is something wrong with your lighthouse beacon node.

This might be because the request buffer is full as your node is never starting consensus since it never gets the duties.
</details>

<details>
<summary><h4><code>Not enough time for a discovery seach</code> error</h4></summary>
This could be linked to a internet connection being to slow or relying on a slow third-party service such as Infura.
</details>
</details>

<details open>
<summary><h2>Beacon Node</h2></summary>
<details>
<summary><h4><code>Error communicating with Beacon Node API</code> & <code>Error while connecting to beacon node event stream</code></h4></summary>
This is likely due to lighthouse not done syncing, wait and try again once synced.

Can also be linked to Teku keystore issue.
</details>

<details>
<summary><h4>Clock sync issues</h4></summary>
Either your clock server time is off, or you are talking to a remote beacon client that is super slow (this is why we advise against using services like infura).
</details>

<details>
<summary><h4>My beacon node API is flaky with lots of errors and timeouts</h4></summary>
A good quality beacon node API is critical to validator performance. It is always advised to run your own beacon node to ensure low latencies to boost validator performance. 

Using 3rd party services like Infura's beacon node API has significant disadvantages since the quality is often low. Requests often return 500s or timeout (Charon times out after 2s). This results in lots of warnings and errors and failed duties. 

We are working on an [issue](https://github.com/ObolNetwork/charon/issues/960) to mitigate against this, but running a local beacon node is still always preferred. We are not yet considering increasing the 2s timeout since that can have knock-on effects.
</details>

</details>

<details open>
<summary><h2>Charon</h2></summary>
<details>
<summary><h4><code>Attester failed in consensus component</code> error</h4></summary>
The required number of operators defined in your cluster-lock file is probably not online to sign successfully. Make sure all operators are running the latest version of charon.

To check if some peers are not online:

<code>docker logs charon-distributed-validator-node-charon-1 2>&1 | grep 'absent'</code>
</details>

<details>
<summary><h4><code>Attester failed in parSigDBThreshold component</code> error</h4></summary>
Should be fixed in the latest version of Charon, upgrade and restart your node.
</details>

<details>
<summary><h4><code>Peer connection failing and dropping</code> error</h4></summary>

Should be fixed in the latest version of Charon, upgrade and restart your node. Likely linked to Obol bootnode infrastructure. You can also try to [run your own bootnode](https://docs.obol.tech/docs/next/int/quickstart/group/quickstart-group-launchpad#self-host-a-bootnode).
</details>

<details>
<summary><h4><code>Load private key</code> error</h4></summary>
Make sure you have successfully run a DKG before running the node. The key should be created and placed in the right directory during the ceremony

Also, make sure you are working in the right directory: <code>charon-distributed-validator-node</code>
</details>

<details>
<summary><h4><code>Failed to confirm node connection</code> error</h4></summary>
Wait for Teku & Lighthouse sync to be complete.
</details>

<details>
<summary><h4><code>Reserve relay circuit: reservation failed</code> error</h4></summary>
<code>RESERVATION_REFUSED</code> is returned by the bootnode libp2p relay when some maximum limit has been reached. 

This is most often due to "maximum reservations per IP/peer". This is when your charon node is restarting or in some error loop and constantly attempting to create new relay reservations reaching the maximum. To fix this error, stop your charon node for 30mins before restarting it. This should allow the bootnode enough time to reset your ip/peer limits and should then allow new reservations.

This could also be due to the bootnode being overloaded in general, so reaching a server wide "maximum connections" limit. This is an issue with bootnode scalability and we are working in a long term fix for this. If stopping your node for 30min doesn't solve <code>RESERVATION_REFUSED</code>, then it is a problem the Obol team needs to solve.
</details>
</details>

<details open>
<summary><h2>Teku</h2></summary>
<details>
<summary><h4>Teku <code>keystore file</code> error</h4></summary>
Teku sometimes logs an error which looks like <code>Keystore file /opt/charon/validator_keys/keystore-0.json.lock already in use.</code>

This can be solved by deleting the file(s) ending with <code>.lock</code> in the folder <code>.charon/validator_keys</code>.

It is caused by an unsafe shut down of Teku (usually by double pressing `Ctrl+C` to shutdown containers faster).

</details>
</details>

<details open>
<summary><h2>Grafana</h2></summary>
<details>
<summary><h4>How to fix the grafana dashboard?</h4></summary>
Sometimes, grafana dashboard doesn't load any data first time around.You can solve this by following the steps below:
<ul>
<li>Click the Wheel Icon > Datasources</li>
<li>Click prometheus</li>
<li>Change the "Access" field from <code>Server (default)</code> to <code>Browser</code>. Press "Save & Test". It should fail.</li>
<li>Change the "Access" field back to <code>Server (default)</code> and press "Save & Test". You should be presented with a green success icon saying "Data source is working" and you can return to the dashboard page.</li>
</ul>
</details>

<details>
<summary><h4><code>N/A</code> & <code>No data</code> in validator info panel</h4></summary>
Can be linked to the <a href="https://github.com/ObolNetwork/charon-distributed-validator-node#teku-keystore-file-error">Teku Keystore issue</a>.
</details>
</details>

<details open>
<summary><h2>Prometheus</h2></summary>
<details>
<summary><h4><code>Unauthorized: authentication error: invalid token</code></h4></summary>
Get the monitoring token and following <a href="https://github.com/ObolNetwork/charon-distributed-validator-node#step-6-leader-adds-central-monitoring-token">Step 6 of the quickstart</a>. This is not mandatory and should not prevent the cluster from running. Only the cluster captain/leader should do this step and resolve this error.

Check <a href="https://discord.com/channels/849256203614945310/1003921582965674104/1005569855698768066">these instructions</a> from our Discord to get the monitoring token.
</details>

</details>

<details open>
<summary><h2>Docker</h2></summary>
<details>
<summary><h4>How to fix <code>permission denied</code> errors?</h4></summary>
Permission denied errors can come up in a variety of manners, particularly on Linux and WSL for Windows systems. In the interest of security, the charon docker image runs as a non-root user, and this user often does not have the permissions to write in the directory you have checked out the code to. This can be generally be fixed with some of the following:
<ul>
<li>Running docker commands with <code>sudo</code>, if you haven't <a href= "https://docs.docker.com/engine/install/linux-postinstall/">setup docker to be run as a non-root user</a>.</li>
<li>Changing the permissions of the <code>.charon</code> folder with the commands:</li>
<ul>
<li><code>mkdir .charon</code> (if it doesn't already exist)</li>
<li><code>sudo chmod -R 666 .charon</code></li>
</ul></ul>
</details>

<details>
<summary><h4>I see a lot of errors after running <code>docker-compose up</code></h4></summary>
It's because both geth and lighthouse start syncing and so there's connectivity issues among the containers. Simply let the containers run for a while. You won't observe frequent errors when geth finishes syncing. 

You can also add a second beacon node endpoint for something like infura by adding a comma separated API URL to the end of <code>CHARON_BEACON_NODE_ENDPOINTS</code> in the docker-compose(./docker-compose.yml#84).
</details>

</details>

<details open>
<summary><h2>Standalone Bootnode</h2></summary>
<details>
<summary><h4><code>Resolve IP of p2p external host flag: lookup replace.with.public.ip.or.hostname: no such host</code> error</h4></summary>
Replace <code>replace.with.public.ip.or.hostname</code> in the bootnode/docker-compose.yml with your real public IP or DNS hostname.
</details>

</details>
