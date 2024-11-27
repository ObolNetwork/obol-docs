---
sidebar_position: 3
description: Troubleshoot issues spotted by the test command
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
# Test Commands
This page aims to give guidance on the causes, and potential for troubleshooting or improvement, of failed tests or low test scores from the [Charon Test commands](../../run/prepare/test-command.md).

## Peers

### Charon Peers

#### Ping

- Peers might have not started their nodes or are not reachable.

#### PingMeasure

- Peer might be too far away (geographically) from you.
- If the connection to the peer is indirect, the route is from your node, to the relay, to the peer. Meaning you are measuring the travel time from you to the relay, and from the relay to the peer: (your node -> relay -> peer). This means, even if your peer's node is right next to yours, if the connection is being transmitted through a relay far away, the latency between your nodes might be too high to be effective.
- Your general network latency to the public internet might be high. Verify with the [`charon test infra`](../../run/prepare/test-command.md#test-machine-and-network-performance) tests.
- If the connection to the peer is indirect, there is a potential that the relay might be overloaded or under-resourced, consider adding [alternative relays](../../adv/security/risks.md#risk-obol-hosting-the-relay-infrastructure), or preferably [opening charon's p2p port](../../learn/charon/networking.mdx#libp2p-relays-and-peer-discovery) to the internet to establish direct peer to peer connections.

#### PingLoad

Same causes as PingMeasure test apply here.

#### DirectConn

- Your or your peer's port might not be publicly exposed.
- Your or your peer's port might be behind a firewall.
- Your or your peer's port might be behind a strict NAT gateway.

### Charon Relays

#### PingRelay

- Relay might be down or un-conctactable for other reasons.

#### PingMeasureRelay

- Relay might be under heavy load.
- Your network latency might be high. Verify with the `charon test infra` tests.

### Self

#### Libp2pTCPPortOpenTest

- There might be another process running on the designated port (tcp/3610 by default).
- The process might have died.

## Beacon

#### Ping

- Beacon node might not be started or is not reachable.

#### PingMeasure

- Beacon node might be too far away (geographically) from you.
- Your network latency might be high. Verify with the `charon test infra` tests.

#### Version

- The beacon node version is not compatible with charon.

#### IsSynced

- Beacon node is not synced to the network.

#### PeerCount

- Beacon node does not have enough peers. This may result in slower fetching and broadcasting of slots and duties.

#### PingLoad

This is a load test, to enable it add the `--load-test` flag.

Same causes as PingMeasure test apply here.

#### Simulation

This is a load test, to enable it add the `--load-test` flag.

Same causes as PingMeasure test apply here and additionally:

- The infrastructure on which the beacon node runs (amount of RAM, disk IOPS) might not be enough to handle the number of simulated validators supplied in this test.

## Validator

#### Ping

- Validator client might not be started or is not reachable.

#### PingMeasure

- Validator client might be too far away (geographically) from the charon client. Generally a low latency between a validator client and its charon client is important for timely signing. 

#### PingLoad

Same causes as PingMeasure test apply here.

## MEV

#### Ping

- MEV relay might not be started or is not reachable.

#### PingMeasure

- MEV relay might be too far away (geographically) from you.
- Your network latency might be high. Verify with the `charon test infra` tests.

#### CreateBlock

Same causes as PingMeasure test apply here and additionally:

- MEV relay might be too slow in block production.

#### CreateMultipleBlocks

Same causes as CreateBlock test apply here.

## Infra

#### DiskWriteSpeed

- Your SSD/HDD write speed is too low. Minimum write speed is 500MBs, recommended write speed is 1000MBs.

#### DiskWriteIOPS

- Your SSD/HDD write operations per second are too low. Minimum write IOPS are 1000, recommended write IOPS are 2000.

#### DiskReadSpeed

- Your SSD/HDD read speed is too low. Minimum read speed is 500MBs, recommended read speed is 1000MBs.

#### DiskReadIOPS

- Your SSD/HDD read operations per second are too low. Minimum read IOPS are 1000, recommended read IOPS are 2000.

#### AvailableMemory

- Your available memory (RAM) is not enough to run Charon. The minimum available memory should be 2GB, the recommended available memory is 4GB. Note that this test is a best estimate, as memory availability can be hard to predict, particularly if the command is run in a virtualised environment (i.e.: a Docker container).

#### TotalMemory

- Your total memory (RAM) may not be enough to run a full validating node. The recommended minimum total memory is 16GB. Specialised, or optimised deployments can use less RAM than the recommended minimum, but may require some monitoring to assert sufficient stability and performance. Read more in our [Deployment Best Practices](../../run/prepare/deployment-best-practices#hardware-specifications)

#### InternetLatency

- Your internet latency to the nearest server is too high. Latency is expected to be at least less than 50ms and at best less than 20ms.

#### InternetDownloadSpeed

- Your internet download speed from the nearest test server is too low. Download speed is expected to be at least above 10Mb/s and at best above 50Mb/s.

#### InternetUploadSpeed

- Your internet upload speed to the nearest test server is too low. Upload speed is expected to be at least above 10Mb/s and at best above 50Mb/s.
