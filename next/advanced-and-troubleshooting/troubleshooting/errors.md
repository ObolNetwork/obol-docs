# Errors & Resolutions

All operators should try to restart their nodes and should check if they are on the latest stable version before attempting any other configuration change. You can restart and update with the following commands:

```shell
docker compose down
git pull
docker compose up
```

You can check your logs using
```shell
docker compose logs
```

If your logs show a failed duty with a specific reason code, see [Duty Failure Reasons](duty-failure-reasons.md) for an explanation of every reason Charon's tracker component can report.

## ENRs & Keys

### How do I get my ENR if I want to generate it again?

`cd` to the directory where your private keys are located (ex: `cd /path/to/charon/enr/private/key`)

Run `docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v1.10.0 enr`. This prints the ENR on your screen.

### What do I do if lose my `charon-enr-private-key`?

If an ENR is lost, a new cluster operator can be created replacing the operator with the lost ENR. The steps to recover from a lost key are:
1. Generate a new ENR with `charon create enr`
2. Complete the [replace-operator ceremony](../../run-a-dv/editing/replace-operator.md) within the cluster, using the new ENR public key as the `new-operator` and the lost ENR as the `old-operator`. Consult the `cluster-lock.json` file if you don't know the lost ENR public key.
3. Shut down the existing cluster across all operators. Wait at least two epochs fully offline to minimize any slashing risk. Have all operators replace their previous cluster artifacts with the new artifacts created in the replacement ceremony. 
4. Bring the cluster nodes back online with the new artifacts. The lost ENR has now been cycled out of the cluster.

To avoid having to disrupt cluster operation, it's recommended to make a secure backup of your ENR.

### I can't find the keys anywhere
The `charon-enr-private-key` is generated inside a hidden folder `.charon`. To view it, run `ls -al` in your terminal. This step may be a bit different for Windows.
Else, if you are on macOS, press `Cmd + Shift + .` to view the `.charon` folder in the Finder application.


## Lighthouse


### Lighthouse says "downloading historical blocks"

This means that Lighthouse is still syncing which will throw a lot of errors down the line. Wait for the sync before moving further.


### Lighthouse gives the error `failed to request attester duties`

This indicates there is something wrong with your Lighthouse beacon node. This might be because the request buffer is full as your node is never starting consensus since it never gets the duties.


### Lighthouse gives the error `not enough time for a discovery search`

This could be linked to a internet connection being too slow or relying on a slow third-party service such as Infura.


## Beacon Node

### `Error communicating with Beacon Node API` & `Error while connecting to beacon node event stream`

This is likely due to Lighthouse not done syncing, wait and try again once synced. Can also be linked to Teku keystore issue.

### Clock sync issues
Either your clock server time is off, or you are talking to a remote beacon client that is super slow (this is why we advise against using services like Infura).


### My beacon node API is flaky with lots of errors and timeouts

A good quality beacon node API is critical to validator performance. It is always advised to run your own beacon node to ensure low latencies to boost validator performance.
Using 3rd-party services like Infura's beacon node API has significant disadvantages since the quality is often low. Requests often return 500s or timeout. This results in lots of warnings and errors and failed duties. Running a local beacon node is always preferred.

## Charon Errors

### `Can't connect to Beacon API`

If you are running EL and CL outside Obol on the same machine, you might need to open ports in your firewall to allow connections incoming from the docker instance.
In order to know the IP of the docker network, run:
`docker network inspect <NETWORK ID>`

### `Attester failed in consensus component`

The required number of operators defined in your cluster-lock file is
probably not online to sign successfully. Make sure all operators are
running the latest version of Charon. To check if some peers are not online:
`docker logs charon-distributed-validator-node-charon-1 2>&1 | grep 'absent'`

### `Load private key` 

Make sure you have successfully run a DKG before running the node. The key
should be created and placed in the right directory during the ceremony.
Also, make sure you are working in the right directory:
`charon-distributed-validator-node`.

### `Failed to confirm node connection` 
Wait for Teku & Lighthouse sync to be complete.


### `Reserve relay circuit: reservation failed`

`RESERVATION_REFUSED` is returned by the libp2p relay when some maximum
limit has been reached. This is most often due to "maximum reservations per IP/peer".
This is when your Charon node is restarting or in some error loop and constantly
attempting to create new relay reservations reaching the maximum.

To fix this error, stop your Charon node for 30mins before restarting it.
This should allow the relay enough time to reset your IP/peer limits and
should then allow new reservations. This could also be due to the relay
being overloaded in general, so reaching a server wide "maximum connections"
limit. This is an issue with relay scalability and we are working in a long
term fix for this.

### `Error opening relay circuit: NO_RESERVATION`

Error opening relay circuit NO_RESERVATION (204)` indicates the peer
isn't connected to the relay, so the the Charon client cannot connect to the
peer via the relay. That might be because the peer is offline or the peer is
configured to connect to a different relay.

To fix this error, ensure the peer is online and configured with the exact
same `--p2p-relays` flag.

### `Beacon Node is unreachable`

This error indicates that Charon cannot establish a connection to the configured beacon node API endpoint. Common causes include:
- The beacon node process has crashed or is not running. Check its status with `docker ps` or `docker compose ps` and inspect the beacon node container logs for crash messages.
- The beacon node API endpoint URL in your configuration is incorrect. Verify that `CHARON_BEACON_NODE_ENDPOINTS` in your `docker-compose.yml` points to the correct host and port.
- A firewall or network rule is blocking the connection between the Charon container and the beacon node. If you are running the beacon node outside of the Charon docker compose stack on the same machine, you may need to use the host's docker network IP rather than `localhost`. Run `docker network inspect <NETWORK ID>` to find the correct IP.
- The beacon node API port is not exposed or is bound to a different interface. Ensure the beacon node is listening on an interface accessible from the Charon container (e.g., `0.0.0.0` rather than `127.0.0.1`).

Restart the beacon node, confirm it is healthy, and verify network connectivity before restarting Charon.

### Beacon Node is syncing

This error occurs when Charon detects that the connected beacon node has not finished its initial sync with the Ethereum network. While the beacon node is syncing, it cannot provide accurate duty data, attestation information, or block proposals, which causes cascading failures across Charon and the validator client.

- Check your beacon node logs to monitor sync progress. For Lighthouse, look for messages like `Syncing` with slot progress indicators. For Teku, look for `Slot Event` logs showing the current sync state.
- Do not attempt to troubleshoot other Charon errors until the beacon node is fully synced. Most duty failures, fetcher errors, and consensus errors will resolve themselves once the beacon node reaches the head of the chain.
- If syncing is taking an unusually long time, ensure your execution layer (EL) client is also fully synced, as the beacon node depends on it. Check that your machine has sufficient disk I/O, CPU, and memory resources.

### Beacon Node has zero peers

This error indicates that your beacon node is running but has not discovered or connected to any peers on the Ethereum p2p network. Without peers, the beacon node cannot sync or stay up to date with the chain head.

- Check that the beacon node's p2p port (typically `9000` for both TCP and UDP) is open and reachable from the internet. Verify any firewall, security group, or router/NAT port-forwarding rules are correctly configured.
- Ensure that the beacon node's discovery port (UDP) is not being blocked. Some cloud providers or ISPs may block UDP traffic by default.
- If running behind a NAT, confirm that the beacon node is configured with the correct external IP address (e.g., `--enr-address` for Lighthouse).
- Restart the beacon node to re-trigger peer discovery. If the issue persists, try adding known bootstrap nodes or peers manually via the beacon node's CLI flags.
- Check that your system clock is accurate, as significant clock drift can cause peers to reject connections.

### Beacon Node is too far behind the current slot

This error indicates that the beacon node is running and has peers but is lagging significantly behind the current head of the chain. This means duties fetched from the beacon node are stale, leading to missed attestations and proposals.

- Check the beacon node logs for warnings about slow processing, database errors, or resource exhaustion (CPU, memory, disk I/O).
- Ensure your execution layer (EL) client is healthy and fully synced. A degraded or lagging EL client will cause the beacon node to fall behind as it cannot verify payloads.
- Review system resource utilization. Insufficient disk I/O is a common cause, particularly on spinning disks or under-provisioned cloud instances. SSDs are mandatory for beacon node operation.
- If the beacon node has fallen far behind, it may be faster to resync from scratch using checkpoint sync rather than waiting for it to catch up incrementally.

### Insufficient peers to reach the required cluster threshold

This error indicates that Charon cannot communicate with enough peer operators to meet the threshold required for signing duties. In a distributed validator cluster, a minimum number of operators (the [threshold](../../learn/charon/cluster-configuration.md#cluster-size-and-resilience) must be online and participating for any duty to succeed.

- Check which peers are absent by inspecting Charon logs
- Coordinate with your fellow cluster operators to ensure they are online and running. Peers may be offline due to maintenance, crashes, or misconfiguration.
- Verify that all operators are running the same compatible version of Charon. Version mismatches can cause p2p communication failures that prevent peers from being recognized.
- Check for p2p connectivity issues. If operators are behind restrictive firewalls or NATs, relay connections may be failing. Look for relay-related errors in the logs.
- If a peer's node has permanently failed and cannot be recovered, consider initiating the [replace-operator ceremony](../../run-a-dv/editing/replace-operator.md) to cycle the offline operator out of the cluster.

### Validator Client is not connected

This error indicates that Charon is not receiving any requests from the local validator client (VC). The validator client must be connected to Charon's validator API in order to submit partial signatures for cluster duties.

- Verify that the validator client container is running by checking `docker ps` or `docker compose ps`. If it has exited, inspect the logs with `docker compose logs <vc-container-name>` to determine the cause of the crash.
- Ensure the validator client is configured to point to Charon's validator API endpoint, not directly to the beacon node. The VC should be using the Charon API address (typically `http://charon:3600` within the docker compose network) as its beacon node URL.
- Check for port conflicts or network misconfigurations if using the docker compose stack. The Charon container must expose its validator API port, and the VC container must be able to reach it.
- If the validator client is running but Charon still reports no connection, check the VC logs for authentication errors, TLS issues, or repeated connection timeouts that may indicate a configuration mismatch.
- Restart the validator client after verifying the configuration.

### Validator Client is missing validator private keys

This error indicates that the validator client cannot find or load the validator key shares required for signing duties. Without these keys, the VC cannot submit partial signatures to Charon.

- Ensure a DKG ceremony has been completed successfully before starting the node.
- Verify that the keystore files (`keystore-*.json`) and their corresponding password files exist in the directory mounted into the validator client container. Check your `docker-compose.yml` volume mounts to confirm the correct path is being used.
- Ensure file permissions allow the validator client to read the keystore files. Run `ls -la` on the validator keys directory to check ownership and permissions. If necessary, adjust file permissions.
- If you have recently moved or redeployed your node, double-check that you copied the correct key shares for your specific operator index. Each operator in the cluster has unique key shares — using another operator's keys will result in mismatching key share errors.

### `Couldnt fetch duty data from the beacon node`

`msgFetcher` indicates a duty failed in the fetcher component when
it failed to fetch the required data from the beacon node API. This indicates
a problem with the upstream beacon node.

### `Couldnt aggregate attestation due to failed attester duty`

`msgFetcherAggregatorNoAttData` indicates an attestation aggregation
duty failed in the fetcher component since it couldn't fetch the prerequisite
attestation data. This indicates the associated attestation duty failed to obtain
a cluster agreed upon value.

### `Couldnt aggregate attestation due to insufficient partial v2 committee subscriptions`

`msgFetcherAggregatorZeroPrepares` indicates an attestation aggregation
duty failed in the fetcher component since it couldn't fetch the prerequisite
aggregated v2 committee subscription. This indicates the associated prepare aggregation
duty failed due to no partial v2 committee subscription submitted by the cluster
validator clients.

### `Couldnt aggregate attestation due to failed prepare aggregator duty`

`msgFetcherAggregatorFailedPrepare` indicates an attestation aggregation
duty failed in the fetcher component since it couldn't fetch the prerequisite
aggregated v2 committee subscription. This indicates the associated prepare aggregation
duty failed.

### `Couldnt propose block due to insufficient partial randao signatures`

`msgFetcherProposerFewRandaos` indicates a block proposer duty failed
in the fetcher component since it couldn't fetch the prerequisite aggregated
RANDAO. This indicates the associated randao duty failed due to insufficient
partial randao signatures submitted by the cluster validator clients.

### `Couldnt propose block due to zero partial randao signatures`

`msgFetcherProposerZeroRandaos` indicates a block proposer duty failed
in the fetcher component since it couldn't fetch the prerequisite aggregated
RANDAO. This indicates the associated randao duty failed due to no partial randao
signatures submitted by the cluster validator clients.

### `Couldnt propose block due to failed randao duty` 

`msgFetcherProposerZeroRandaos` indicates a block proposer duty failed
in the fetcher component since it couldn't fetch the prerequisite aggregated
RANDAO. This indicates the associated randao duty failed.

### `Consensus algorithm didn't complete`

`msgConsensus` indicates a duty failed in consensus component. This
could indicate that insufficient honest peers participated in consensus or p2p
network connection problems.

### `Signed duty not submitted by local validator client` error

`msgValidatorAPI` indicates that partial signature were never submitted
by the local validator client. This could indicate that the local validator client
is offline, or has connection problems with Charon, or has some other problem.
See validator client logs for more details.

### `Bug: partial signature database didn't trigger partial signature exchange`

`msgParSigDBInternal` indicates a bug in the partial signature database
as it is unexpected.

### `No partial signatures received from peers`

`msgParSigEx` indicates that no partial signature for the duty was
received from any peer. This indicates all peers are offline or p2p network connection
problems.

### `Insufficient partial signatures received, minimum required threshold not reached`

`msgParSigDBThreshold` indicates that insufficient partial signatures
for the duty was received from peers. This indicates problems with peers or p2p
network connection problems.

### `Bug: threshold aggregation of partial signatures failed due to inconsistent signed data`

`msgSigAgg` indicates that BLS threshold aggregation of sufficient
partial signatures failed. This indicates inconsistent signed data. This indicates
a bug in Charon as it is unexpected.

### `Existing private key lock file found, another charon instance may be running on your machine`

When you turn on the `--private-key-file-lock` option in Charon, it
checks for a special file called the private key lock file. This file has the
same name as the ENR private key file but with a `.lock` extension.
If the private key lock file exists and is not older than 5 seconds, Charon won't
run. It doesn't allow running multiple Charon instances with the same ENR private
key. If the private key lock file has a timestamp older than 5 seconds, Charon
will replace it and continue with its work. If you`re sure that no other Charon
instances are running, you can delete the private key lock file.

### `Validator api 5xx response: mismatching validator client key share index, Mth key share submitted to Nth charon peer`

The issue revolves around an invalid setup or deployment, where the
validators private key shares don't match the ENR private key. There may
have been a mix-up during deployment, leading to a mismatching validator
client key share index.

For example: Imagine node N is Alice, and node M is Bob, the error would read:
` mismatching validator client key share index, Bob's key share submitted to Alice's charon node `
Bob's private key share(s) are imported to a VC that is connected to
Alice's Charon node. This is an invalid setup/deployment. 
Alice`s Charon node should only be connected to Alice`s VC.

Check the partial public key shares of each node inside
cluster-lock.json and see that matches with the public key inside
`node(num)/validator_keys/keystore-0.json`.

## Grafana

### How to fix the Grafana dashboard?

Sometimes, Grafana dashboard doesn't load any data the first time.
You can solve this by following the steps below:
- Click the Wheel Icon > Datasources.
- Click prometheus.
- Change the "Access" field from `Server (default)` to `Browser`. Press "Save & Test". It should fail.
- Change the "Access" field back to `Server (default)` and press "Save & Test". You should be presented with a green success icon saying "Data source is working" and you can return to the dashboard page.

### `N/A` & `No data` in validator info panel
Can be linked to a Teku keystore issue.


## Prometheus

### `Unauthorized: authentication error: invalid token`
    You can ignore this error unless you have been contacted by the Obol Team
    with monitoring credentials. In that case, follow [Monitoring your Node](../../run-a-dv/running/monitoring.md) in our guides. It does not affect cluster performance or prevent the cluster from running.


## Docker

### How to fix `permission denied` errors?

Permission denied errors can come up in a variety of manners, particularly
on Linux and WSL for Windows systems. In the interest of security, the
charon docker image runs as a non-root user, and this user often does not
have the permissions to write in the directory you have checked out the code
to. This can be generally be fixed with some of the following:
- Running docker commands with `sudo`, if you haven't [set up docker to be run as a non-root user](https://docs.docker.com/engine/install/linux-postinstall/)
- Changing the permissions of the `.charon` folder with the commands:
  - `mkdir .charon` (if it doesn't already exist);
  - `sudo chmod -R 666 .charon`.

### I see a lot of errors after running `docker compose up`

This is because both EL and CL clients start syncing, causing connectivity issues among the containers. Simply let the containers run for
a while. You won't observe frequent errors when the EL client finishes syncing. You
can also add a second beacon node endpoint for something like Infura by
adding a comma separated API URL to the end of
`CHARON_BEACON_NODE_ENDPOINTS` in the docker-compose.yml.

### How do I fix the `plugin "loki" not found` error?
  If you get the following error when calling `docker compose up`:

`Error response from daemon: error looking up logging plugin loki: plugin "loki" not found`.

Then it probably means that the Loki docker driver isn't installed. In that case, run the following command to install loki:

`docker plugin install grafana/loki-docker-driver:latest --alias loki --grant-all-permissions`.


## Relay

### ` Resolve IP of p2p external host flag: lookup replace.with.public.ip.or.hostname:no such host`

Replace `replace.with.public.ip.or.hostname` in the
relay/docker-compose.yml with your real public IP or DNS hostname.

### ` Timeout resolving bootnode ENR: context deadline exceeded`
The relay you are trying to connect to your peers via is offline or
unreachable.
