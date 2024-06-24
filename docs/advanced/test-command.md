---
sidebar_position: 1
description: Test networking between Charon dependant services
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Network tests

:::caution
The charon test command is in alpha state and is still in development. It can not do any harm, but there is no guarantee it is stable and working as expected.
:::

Charon test command evaluates network performance and effectiveness of the machine it is running on and the targeted external service - other Charon peers, beacon node(s), etc.. It prints a performance report to the standard output and a machine-readable TOML format of the report if `output-toml` flag is set.

## Peers

Run tests towards other Charon peers to evaluate the effectiveness of a potential cluster setup. The command sets up a libp2p node, similarly to what Charon originally does. This test command **has to be running simultaneously with other peers**. After the node is up it waits for other peers to get their nodes up and running, retrying connection every 3 seconds. The libp2p node connects to relays (configurable with `p2p-relays` flag) and to other libp2p nodes via TCP. Other peer nodes are discoverable by using their ENRs. Note that for a peer to be successfully discovered, it needs to be connected to the same relay. After completion of the test suite the libp2p node stays alive (duration configurable with `keep-alive` flag) for other peers to continue testing against it. The node can be forcefully stopped as well.

To be able to establish direct connection, you have to ensure:

- Your machine is publicly accessible on the internet or at least a specific port is.
- You add flag `p2p-tcp-address` (i.e.: `127.0.0.1:9001`) flag and the port specified in it is free and publicly accessible.
- You add the flag `p2p-external-ip` (i.e.: `8.8.8.8`) and specify your public ip.

If all points are satisfied by you and the other peers, you should be able to establish a direct TCP connection between each other. Note that a relay is still required, as it is used for peer discovery. 

### Pre-requisites

- [Create ENR](../charon/charon-cli-reference#creating-an-enr-for-charon).
- Share your ENR with other peers which will test against you.
- Obtain the ENRs of the other peers against which you will test.

### Run

```shell
charon alpha test peers \
  --enrs="enr:-HW4QNDXi9MzdH9Af65g20jDfelAJ0kJhclitkYYgFziYHXhRFF6JyB_CnVnimB7VxKBGBSkHbmy-Tu8BJq8JQkfptiAgmlkgnY0iXNlY3AyNTZrMaEDBVt5pk6x0A2fjth25pjLOEE9DpqCG-BCYyvutY04TZ,enr:-HW4QO2vefLueTBEUGly5hkcpL7NWdMKWx7Nuy9f7z6XZInCbFAc0IZj6bsnmj-Wi4ElS6jNa0Mge5Rkc2WGTVemas2AgmlkgnY0iXNlY3AyNTZrMaECR9SmYQ_1HRgJmNxvh_ER2Sxx78HgKKgKaOkCROYwaDY"
```

### Run with Docker

```shell
docker run -v /Users/obol/charon/.charon:/opt/charon/.charon obolnetwork/charon:v1.0.0 alpha test peers \
  --enrs="enr:-HW4QNDXi9MzdH9Af65g20jDfelAJ0kJhclitkYYgFziYHXhRFF6JyB_CnVnimB7VxKBGBSkHbmy-Tu8BJq8JQkfptiAgmlkgnY0iXNlY3AyNTZrMaEDBVt5pk6x0A2fjth25pjLOEE9DpqCG-BCYyvutY04TZs,enr:-HW4QO2vefLueTBEUGly5hkcpL7NWdMKWx7Nuy9f7z6XZInCbFAc0IZj6bsnmj-Wi4ElS6jNa0Mge5Rkc2WGTVemas2AgmlkgnY0iXNlY3AyNTZrMaECR9SmYQ_1HRgJmNxvh_ER2Sxx78HgKKgKaOkCROYwaDY"
```

## Beacon

Run tests towards beacon node(s), evaluating the effectiveness of a potential connection of a Charon node running on the same machine.

### Pre-requisites

- Running beacon node(s) towards which tests will be executed.

### Run

```shell
charon alpha test beacon \
  --endpoints="https://ethereum-holesky-beacon-api.publicnode.com,https://ethereum-sepolia-beacon-api.publicnode.com"
```

### Run with Docker

```shell
docker run obolnetwork/charon:v1.0.0 alpha test beacon \
  --endpoints="https://ethereum-holesky-beacon-api.publicnode.com,https://ethereum-sepolia-beacon-api.publicnode.com"
```
