# Test Commands

This page aims to give guidance on the causes, and potential for troubleshooting or improvement, of failed tests or low test scores from the [Charon Test commands](../../run-a-dv/prepare/test-a-cluster.mdx).

## Running test commands

Below are sample invocations for each deployment method, using `test peers` as the worked example because it needs access to your `.charon` files (the cluster file and the ENR private key), which is why the Docker examples mount a volume. Other test commands take endpoint flags instead (e.g. `--beacon-endpoints`, `--endpoints`) and generally don't need the volume mount. For each command's flags refer to the [Test a Cluster](../../run-a-dv/prepare/test-a-cluster.mdx) page.

:::info
Only the `peers` command uses your cluster files to identify peers. There is no default value for these flags, so you must specify them explicitly: if you have completed DKG use `--lock-file`; if you have only created a cluster definition use `--definition-file`. For `test all` the equivalents are `--peers-lock-file` and `--peers-definition-file`. The `beacon`, `validator`, `mev` and `infra` commands do not accept these flags: `beacon`, `validator` and `mev` target the endpoints you pass them, while `infra` tests the local machine and internet connection.
:::

<Tabs>
<TabItem value="l-cdvn" label="(L)CDVN">
If you are using the [CDVN](https://github.com/ObolNetwork/charon-distributed-validator-node) or [LCDVN](https://github.com/ObolNetwork/lido-charon-distributed-validator-node) repo, run test commands with Docker from within the repo directory.

```sh
# Run from within the charon-distributed-validator-node/ directory
docker run --rm -u $(id -u):$(id -g) -v "$(pwd):/opt/charon" obolnetwork/charon:v1.10.0 alpha test peers \
  --lock-file="/opt/charon/.charon/cluster-lock.json" \
  --private-key-file="/opt/charon/.charon/charon-enr-private-key"
  # add any other flags here, e.g. --timeout=1h or --keep-alive=30m
```
</TabItem>

<TabItem value="dappnode" label="DappNode">
On DappNode, you can run test commands by executing them inside the Charon container via the DappNode UI terminal or SSH.

```sh
# Via docker exec (find your container name with `docker ps`)
docker exec -it DAppNodePackage-hoodi-obol.dnp.dappnode.eth charon alpha test peers \
  --lock-file=".charon/cluster-lock.json"
  # add any other flags here, e.g. --timeout=1h or --keep-alive=30m
```

:::info
The container name depends on the network package you installed (e.g. `DAppNodePackage-hoodi-obol.dnp.dappnode.eth` for Hoodi or `DAppNodePackage-obol.dnp.dappnode.eth` for Mainnet). Verify using `docker ps`.
:::
</TabItem>

<TabItem value="helm" label="Helm">
For Kubernetes deployments using the [Obol Helm charts](https://github.com/ObolNetwork/helm-charts), exec into the Charon pod to run test commands. Replace the namespace and release name if you used different values during installation.

```sh
# Find your Charon pod (default namespace: dv-pod, default release: my-dv-pod)
kubectl get pods -n dv-pod -l app.kubernetes.io/instance=my-dv-pod

# Exec into the pod and run the test
kubectl exec -it -n dv-pod my-dv-pod-0 -- charon alpha test peers \
  --lock-file=".charon/cluster-lock.json"
  # add any other flags here, e.g. --timeout=1h or --keep-alive=30m
```
</TabItem>

<TabItem value="executable" label="Executable">
If you have the Charon binary installed directly, run test commands from the directory containing your `.charon` folder.

```sh
charon alpha test peers \
  --lock-file=".charon/cluster-lock.json"
  # add any other flags here, e.g. --timeout=1h or --keep-alive=30m
```
</TabItem>
</Tabs>

## Peers

### Charon Peers

#### Ping

* Peers might have not started their nodes or are not reachable.

#### PingMeasure

* Peer might be too far away (geographically) from you.
* If the connection to the peer is indirect, the route is from your node, to the relay, to the peer. Meaning you are measuring the travel time from you to the relay, and from the relay to the peer: (your node -> relay -> peer). This means, even if your peer's node is right next to yours, if the connection is being transmitted through a relay far away, the latency between your nodes might be too high to be effective.
* Your general network latency to the public internet might be high. Verify with the [`charon test infra`](../../run-a-dv/prepare/test-a-cluster.mdx#test-machine-and-network-performance) tests.
* If the connection to the peer is indirect, there is a potential that the relay might be overloaded or under-resourced, consider adding [alternative relays](../security/risks.md#risk-obol-hosting-the-relay-infrastructure), or preferably [opening charon's p2p port](../../learn/charon/charon-networking.md#libp2p-relays-and-peer-discovery) to the internet to establish direct peer to peer connections.

#### PingLoad

Same causes as PingMeasure test apply here.

#### DirectConn

* Your or your peer's port might not be publicly exposed.
* Your or your peer's port might be behind a firewall.
* Your or your peer's port might be behind a strict NAT gateway.

### Charon Relays

#### PingRelay

* Relay might be down or uncontactable for other reasons.

#### PingMeasureRelay

* Relay might be under heavy load.
* Your network latency might be high. Verify with the `charon test infra` tests.

### Self

#### Libp2pTCPPortOpen

* This test only performs a real check when you pass `--p2p-tcp-address` (there is no default). If you omit the flag, the test has no address to dial, so it is effectively skipped but still reports `OK` — do not read that as a successful port check. Always provide `--p2p-tcp-address` when you want the port-open check to actually run.
* The port specified in `--p2p-tcp-address` might already be in use by another process, or be blocked by a firewall.
* The process might have died.

## Beacon

#### Ping

* Beacon node might not be started or is not reachable.

#### PingMeasure

* Beacon node might be too far away (geographically) from you.
* Your network latency might be high. Verify with the `charon test infra` tests.

#### Version

* This test fetches and records the beacon node's version string; it does not assess compatibility with charon. A failure means the version endpoint could not be reached or its response could not be parsed.

#### Synced

* Beacon node is not synced to the network.

#### PeerCount

* Beacon node does not have enough peers. This may result in slower fetching and broadcasting of slots and duties.

#### PingLoad

This is a load test, to enable it add the `--load-test` flag.

Same causes as PingMeasure test apply here.

#### Simulate1, Simulate10, Simulate100, Simulate500, Simulate1000

These are load tests, enabled by adding the `--load-test` flag. Each test simulates the workload for the number of validators in its name. (Setting `--simulation-custom=<N>` runs an additional simulation for N validators, reported as `Simulate<N>`.)

Same causes as PingMeasure test apply here and additionally:

* The infrastructure on which the beacon node runs (amount of RAM, disk IOPS) might not be enough to handle the number of simulated validators supplied in this test.

## Validator

#### Ping

* Validator client might not be started or is not reachable.

#### PingMeasure

* Validator client might be too far away (geographically) from the Charon client. Generally a low latency between a validator client and its Charon client is important for timely signing.

#### PingLoad

Same causes as PingMeasure test apply here.

## MEV

#### Ping

* MEV relay might not be started or is not reachable.

#### PingMeasure

* MEV relay might be too far away (geographically) from you.
* Your network latency might be high. Verify with the `charon test infra` tests.

#### CreateBlock

Same causes as PingMeasure test apply here and additionally:

* MEV relay might be too slow in block production.
* Setting `--number-of-payloads` greater than 1 requests that many blocks; the result is still reported under the `CreateBlock` name.

## Infra

#### DiskWriteSpeed

* Read more in our [Deployment Best Practices](../../run-a-dv/prepare/deployment-best-practices.md#hardware-specifications).

#### DiskWriteIOPS

* Read more in our [Deployment Best Practices](../../run-a-dv/prepare/deployment-best-practices.md#hardware-specifications).

#### DiskReadSpeed

* Read more in our [Deployment Best Practices](../../run-a-dv/prepare/deployment-best-practices.md#hardware-specifications).

#### DiskReadIOPS

* Read more in our [Deployment Best Practices](../../run-a-dv/prepare/deployment-best-practices.md#hardware-specifications).

#### AvailableMemory

* Your available memory (RAM) is not enough to run Charon. The minimum available memory should be 2GB, the recommended available memory is 4GB. Note that this test is a best estimate, as memory availability can be hard to predict, particularly if the command is run in a virtualized environment (i.e.: a Docker container).

#### TotalMemory

* Your total memory (RAM) may not be enough to run a full validating node. The recommended minimum total memory is 16GB. Specialized, or optimized deployments can use less RAM than the recommended minimum, but may require some monitoring to assert sufficient stability and performance. Read more in our [Deployment Best Practices](../../run-a-dv/prepare/deployment-best-practices.md#hardware-specifications)

#### InternetLatency

* Your internet latency to the nearest server is too high. Latency is expected to be at least less than 50ms and at best less than 20ms.

#### InternetDownloadSpeed

* Your internet download speed from the nearest test server is too low. Download speed is expected to be at least above 15Mb/s and at best above 50Mb/s.

#### InternetUploadSpeed

* Your internet upload speed to the nearest test server is too low. Upload speed is expected to be at least above 15Mb/s and at best above 50Mb/s.
