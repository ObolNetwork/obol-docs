---
sidebar_position: 5
description: Test the performance of a candidate Distributed Validator Cluster setup.
---

# test-command

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

## Test a Cluster

:::warning The `charon alpha test` command is in an alpha state and is subject to change until it is made available as `charon test` in a future version. :::

Charon test commands are designed to help you evaluate the performance and readiness of your candidate cluster. It allows you to test your connection to other Charon peers, the performance of your beacon node(s), and the readiness of your validator client. It prints a performance report to the standard output (which can be omitted by with the `--quiet` flag) and a machine-readable TOML format of the report if the `--output-toml` flag is set.

### Test your connection to peers

Run tests towards other Charon peers to evaluate the effectiveness of a potential cluster setup. The command sets up a libp2p node, similarly to what Charon normally does. This test command **has to be running simultaneously with the other peers**. After the node is up it waits for other peers to get their nodes up and running, retrying the connection every 3 seconds. The libp2p node connects to relays (configurable with `p2p-relays` flag) and to other libp2p nodes via TCP. Other peer nodes are discoverable by using their ENRs. Note that for a peer to be successfully discovered, it needs to be connected to the same relay. After completion of the test suite the libp2p node stays alive (duration configurable with `keep-alive` flag) for other peers to continue testing against it. The node can be forcefully stopped as well.

To be able to establish direct connection, you have to ensure:

* Your machine is publicly accessible on the internet or at least a specific port is.
* You add flag `p2p-tcp-address` (i.e.: `127.0.0.1:9001`) flag and the port specified in it is free and publicly accessible.
* You add the flag `p2p-external-ip` (i.e.: `8.8.8.8`) and specify your public ip.

If all points are satisfied by you and the other peers, you should be able to establish a direct TCP connection between each other. Note that a relay is still required, as it is used for peer discovery.

At least 1 enr is required to be supplied to the `--enrs` flag.

#### Pre-requisites

* [Create an ENR](https://github.com/ObolNetwork/obol-docs/blob/main/versioned_docs/version-v1.1.0/charon/charon-cli-reference/README.md#creating-an-enr-for-charon).
* Share your ENR with the other peers which will test with you.
* Obtain the ENRs of the other peers with which you will test.

#### Run

```shell
charon alpha test peers \
  --enrs="enr:-HW4QNDXi9MzdH9Af65g20jDfelAJ0kJhclitkYYgFziYHXhRFF6JyB_CnVnimB7VxKBGBSkHbmy-Tu8BJq8JQkfptiAgmlkgnY0iXNlY3AyNTZrMaEDBVt5pk6x0A2fjth25pjLOEE9DpqCG-BCYyvutY04TZ,enr:-HW4QO2vefLueTBEUGly5hkcpL7NWdMKWx7Nuy9f7z6XZInCbFAc0IZj6bsnmj-Wi4ElS6jNa0Mge5Rkc2WGTVemas2AgmlkgnY0iXNlY3AyNTZrMaECR9SmYQ_1HRgJmNxvh_ER2Sxx78HgKKgKaOkCROYwaDY"
```

#### Run with Docker

```shell
docker run -v /Users/obol/charon/.charon:/opt/charon/.charon obolnetwork/charon:v1.1.0 alpha test peers \
  --enrs="enr:-HW4QNDXi9MzdH9Af65g20jDfelAJ0kJhclitkYYgFziYHXhRFF6JyB_CnVnimB7VxKBGBSkHbmy-Tu8BJq8JQkfptiAgmlkgnY0iXNlY3AyNTZrMaEDBVt5pk6x0A2fjth25pjLOEE9DpqCG-BCYyvutY04TZs,enr:-HW4QO2vefLueTBEUGly5hkcpL7NWdMKWx7Nuy9f7z6XZInCbFAc0IZj6bsnmj-Wi4ElS6jNa0Mge5Rkc2WGTVemas2AgmlkgnY0iXNlY3AyNTZrMaECR9SmYQ_1HRgJmNxvh_ER2Sxx78HgKKgKaOkCROYwaDY"
```

### Test your beacon node

Run tests towards beacon node(s), to evaluate its effectiveness for a Distributed Validator cluster. The beacon node is usually the instance getting the most load, especially with high number of validators serviced by the validator client and Charon. If the beacon node is self-hosted (which is highly recommended), the flag `--enable-load-test` can be added.

At least 1 endpoint is required to be supplied to the `--endpoints` flag.

#### Pre-requisites

* Running beacon node(s) towards which tests will be executed.

#### Run

```shell
charon alpha test beacon \
  --endpoints="https://ethereum-holesky-beacon-api.publicnode.com,https://ethereum-sepolia-beacon-api.publicnode.com"
```

#### Run with Docker

```shell
docker run obolnetwork/charon:v1.1.0 alpha test beacon \
  --endpoints="https://ethereum-holesky-beacon-api.publicnode.com,https://ethereum-sepolia-beacon-api.publicnode.com"
```

### Test your validator client

Run tests towards your validator client, to evaluate its effectiveness for a Distributed Validator cluster.

Default endpoint for validator and port is used at `127.0.0.1:3600`. This can be changed by supplying different endpoint to the `--validator-api-address` flag.

#### Pre-requisites

* Running validator client towards which tests will be executed.

#### Run

```shell
charon alpha test validator
```

#### Run with Docker

```shell
docker run obolnetwork/charon:v1.1.0 alpha test validator
```

### Test MEV relay

Run tests towards MEV relay(s), to evaluate its effectiveness for a Distributed Validator cluster. If a MEV boost instance is configured for the validator node, it is of utmost importance that the connection to it is fast. If not, the chance of missing a block proposal raises significantly, because of a slow building of the block from the MEV.

At least 1 endpoint is required to be supplied to the `--endpoints` flag.

#### Pre-requisites

* Running MEV relay(s) towards which tests will be executed.

#### Run

```shell
charon alpha test mev \
  --endpoints="https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c0205200f2f8e2e3ad3b71d3499c54ad14d6c21b41a37ae@boost-relay.flashbots.net"
```

#### Run with Docker

```shell
docker run obolnetwork/charon:v1.1.0 alpha test mev \
  --endpoints="https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c0205200f2f8e2e3ad3b71d3499c54ad14d6c21b41a37ae@boost-relay.flashbots.net"
```

### Test your machine and network performance

Run tests towards your machine and network, to evaluate its effectiveness for a Distributed Validator cluster. While Charon does not require highly performant hardware, the network connectivity of the machine it is running on should be good. In comparison, the beacon node requires not only good connectivity, but also performant storage with high input-output operations per second, enough memory and also good network connectivity. This test aims to address all those requirements and give a good overview of the system.

Note that the storage tests require `fio` installed. `fio` is already pre-installed in the Docker images. Read more about `fio` [here](https://fio.readthedocs.io/en/latest/fio_doc.html).

#### Pre-requisites

None.

#### Run

```shell
charon alpha test performance
```

#### Run with Docker

```shell
docker run obolnetwork/charon:v1.1.0 alpha test performance
```

For proper examination of the disk performance, it is advised to run the tests in a Docker volume.

```shell
docker run -v ${HOME}/charon/test:/opt/charon/test obolnetwork/charon:v1.1.0 alpha test performance \
  --disk-io-test-file-dir=/opt/charon/test
```
