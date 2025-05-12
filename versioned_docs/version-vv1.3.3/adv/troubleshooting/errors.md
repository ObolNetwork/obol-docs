---
sidebar_position: 1
description: Errors & Resolutions
---

# Errors & Resolutions

All operators should try to restart their nodes and should check if they are on the latest stable version before attempting anything other configuration change. You can restart and update with the following commands:

```shell
docker compose down
git pull
docker compose up
```

You can check your logs using
```shell
docker compose logs
```

## ENRs & Keys

### How do I get my ENR if I want to generate it again?

`cd` to the directory where your private keys are located (ex: `cd /path/to/charon/enr/private/key`)

Run `docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v1.3.3 enr`. This prints the ENR on your screen.

### What do I do if lose my `charon-enr-private-key`?

For now, ENR rotation/replacement is not supported, it will be supported in a future release. Therefore, its advised to always keep a backup of your `charon-enr-private-key ` in a secure location (ex: cloud storage, USB Flash drive, etc.).

### I can't find the keys anywhere
The `charon-enr-private-key` is generated inside a hidden folder `.charon`. To view it, run `ls -al` in your terminal. This step may be a bit different for Windows.
Else, if you are on macOS, press `Cmd + Shift + .` to view the `.charon` folder in the Finder application.


## Lighthouse


### Lighthouse says "downloading historical blocks"

This means that Lighthouse is still syncing which will throw a lot of errors down the line. Wait for the sync before moving further.


### Lighthouse gives the error `failed to request attester duties`

This indicates there is something wrong with your Lighthouse beacon node. This might be because the request buffer is full as your node is never starting consensus since it never gets the duties.


### Lighthouse gives the error `not enough time for a discovery seach`

This could be linked to a internet connection being too slow or relying on a slow third-party service such as Infura.


## Beacon Node

### `Error communicating with Beacon Node API` & `Error while connecting to beacon node event stream`

This is likely due to Lighthouse not done syncing, wait and try again once synced. Can also be linked to Teku keystore issue.

### Clock sync issues
Either your clock server time is off, or you are talking to a remote beacon client that is super slow (this is why we advise against using services like Infura).


### My beacon node API is flaky with lots of errors and timeouts

A good quality beacon node API is critical to validator performance. It is always advised to run your own beacon node to ensure low latencies to boost validator performance.
Using 3rd party services like Infura's beacon node API has significant disadvantages since the quality is often low. Requests often return 500s or timeout. This results in lots of warnings and errors and failed duties. Running a local beacon node is always preferred.

## Charon Errors

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

For example:Imagine node N is Alice, and node M is Bob, the error would read:
` mismatching validator client key share index, Bob`s key share submitted to Alice`s charon node `
Bob`s private key share(s) are imported to a VC that is connected to
Alice`s Charon node. This is a invalid setup/deployment. 
Alice`s Charon node should only be connected to Alice`s VC.

Check the partial public key shares of each node inside
cluster-lock.json and see that matches with the public key inside
`node(num)/validator_keys/keystore-0.json`.

## Grafana

### How to fix the Grafana dashboard?

Sometimes, Grafana dashboard doesn't load any data first time around.
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
    with monitoring credentials. In that case, follow [Monitoring your Node](../../run/running/monitoring.md) in our guides. It does not affect cluster performance or prevent the cluster from running.


## Docker

### How to fix `permission denied` errors?

Permission denied errors can come up in a variety of manners, particularly
on Linux and WSL for Windows systems. In the interest of security, the
charon docker image runs as a non-root user, and this user often does not
have the permissions to write in the directory you have checked out the code
to. This can be generally be fixed with some of the following:
- Running docker commands with `sudo`, if you haven't [setup docker to be run as a non-root user](https://docs.docker.com/engine/install/linux-postinstall/)
- Changing the permissions of the `.charon` folder with the commands:
  - `mkdir .charon` (if it doesn't already exist);
  - `sudo chmod -R 666 .charon`.

### I see a lot of errors after running `docker compose up`
    It`s because both Nethermind and Lighthouse start syncing and so there's
    connectivity issues among the containers. Simply let the containers run for
    a while. You won't observe frequent errors when Nethermind finishes syncing. You
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

