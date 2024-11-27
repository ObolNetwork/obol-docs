---
sidebar_position: 3
description: Test the performance of a candidate Distributed Validator Cluster setup.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Test a Cluster

Charon test commands are designed to help you evaluate the performance and readiness of your candidate cluster. It allows you to test your connection to other Charon peers, the performance of your beacon node(s), the readiness of your validator client, the performance of the MEV relays you will be using and the infrastructure on which you will run the cluster. It prints a performance report to the standard output (which can be omitted with the `--quiet` flag) and a machine-readable TOML format of the report if the `--output-toml` flag is set.

## Test all

Intended for running tests across all categories. Each flag should have a prefix for its category (i.e.: the flag `--endpoints` from the beacon tests becomes `--beacon-endpoints`). For details about each category refer to their respective sections.

### Pre-requisites

#### Running after you have started cluster creation

All prerequisites for each category apply to `test all`.

### Run

```shell
./charon test all \
  --beacon-endpoints="https://ethereum-holesky-beacon-api.publicnode.com,https://ethereum-sepolia-beacon-api.publicnode.com" \
  --mev-endpoints="https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c0205200f2f8e2e3ad3b71d3499c54ad14d6c21b41a37ae@boost-relay.flashbots.net" \
  --peers-enrs="enr:-HW4QNDXi9MzdH9Af65g20jDfelAJ0kJhclitkYYgFziYHXhRFF6JyB_CnVnimB7VxKBGBSkHbmy-Tu8BJq8JQkfptiAgmlkgnY0iXNlY3AyNTZrMaEDBVt5pk6x0A2fjth25pjLOEE9DpqCG-BCYyvutY04TZ,enr:-HW4QO2vefLueTBEUGly5hkcpL7NWdMKWx7Nuy9f7z6XZInCbFAc0IZj6bsnmj-Wi4ElS6jNa0Mge5Rkc2WGTVemas2AgmlkgnY0iXNlY3AyNTZrMaECR9SmYQ_1HRgJmNxvh_ER2Sxx78HgKKgKaOkCROYwaDY" \
  --output-json="/opt/charon/test/test-result.json"
```

Load test

```shell
./charon test all \
  --beacon-endpoints="https://ethereum-holesky-beacon-api.publicnode.com,https://ethereum-sepolia-beacon-api.publicnode.com" \
  --beacon-load-test \
  --mev-endpoints="https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c0205200f2f8e2e3ad3b71d3499c54ad14d6c21b41a37ae@boost-relay.flashbots.net" \
  --mev-beacon-node-endpoint="https://ethereum-beacon-api.publicnode.com" \
  --mev-load-test \
  --peers-enrs="enr:-HW4QNDXi9MzdH9Af65g20jDfelAJ0kJhclitkYYgFziYHXhRFF6JyB_CnVnimB7VxKBGBSkHbmy-Tu8BJq8JQkfptiAgmlkgnY0iXNlY3AyNTZrMaEDBVt5pk6x0A2fjth25pjLOEE9DpqCG-BCYyvutY04TZ,enr:-HW4QO2vefLueTBEUGly5hkcpL7NWdMKWx7Nuy9f7z6XZInCbFAc0IZj6bsnmj-Wi4ElS6jNa0Mge5Rkc2WGTVemas2AgmlkgnY0iXNlY3AyNTZrMaECR9SmYQ_1HRgJmNxvh_ER2Sxx78HgKKgKaOkCROYwaDY" \
  --output-json="/opt/charon/test/test-result.json"
```

### Run with Docker

```shell
docker run -v "$(pwd):/opt/charon/test" obolnetwork/charon:v1.1.2 test all \
  --beacon-endpoints="https://ethereum-holesky-beacon-api.publicnode.com,https://ethereum-sepolia-beacon-api.publicnode.com" \
  --beacon-simulation-file-dir="/opt/charon/test" \
  --mev-endpoints="https://0xa7ab7a996c8584251c8f925da3170bdfd6ebc75d50f5ddc4050a6fdc77f2a3b5fce2cc750d0865e05d7228af97d69561@agnostic-relay.net,https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c0205200f2f8e2e3ad3b71d3499c54ad14d6c21b41a37ae@boost-relay.flashbots.net,global.titanrelay.xyz" \
  --peers-enrs="enr:-HW4QBHlcyD3fYWUMADiOv4OxODaL5wJG0a7P7d_ltu4VZe1MibZ1N-twFaoaq0BoCtXcY71etxLJGeEZT5p3XCO6GOAgmlkgnY0iXNlY3AyNTZrMaEDI2HRUlVBag__njkOWEEQRLlC9ylIVCrIXOuNBSlrx6o,enr:-HW4QDwUF804f4WhUjwcp4JJ-PrRH0glQZv8s2cVHlBRPJ3SYcYO-dvJGsKhztffrski5eujJkl8oAc983MZy6-PqF2AgmlkgnY0iXNlY3AyNTZrMaECPEPryjkmUBnQFyjmMw9rl7DVtKL0243nN5iepqsvKDw" \
  --infra-disk-io-test-file-dir="/opt/charon/test" \
  --data-dir="/opt/charon/test/.charon" \
  --output-json="/opt/charon/test/test-result.json"
```

Load test

```shell
docker run -v "$(pwd):/opt/charon/test" obolnetwork/charon:v1.1.2 test all \
  --beacon-endpoints="https://ethereum-holesky-beacon-api.publicnode.com,https://ethereum-sepolia-beacon-api.publicnode.com" \
  --beacon-simulation-file-dir="/opt/charon/test" \
  --beacon-load-test \
  --mev-endpoints="https://0xa7ab7a996c8584251c8f925da3170bdfd6ebc75d50f5ddc4050a6fdc77f2a3b5fce2cc750d0865e05d7228af97d69561@agnostic-relay.net,https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c0205200f2f8e2e3ad3b71d3499c54ad14d6c21b41a37ae@boost-relay.flashbots.net,global.titanrelay.xyz" \
  --mev-beacon-node-endpoint="https://ethereum-beacon-api.publicnode.com" \
  --mev-load-test \
  --peers-enrs="enr:-HW4QBHlcyD3fYWUMADiOv4OxODaL5wJG0a7P7d_ltu4VZe1MibZ1N-twFaoaq0BoCtXcY71etxLJGeEZT5p3XCO6GOAgmlkgnY0iXNlY3AyNTZrMaEDI2HRUlVBag__njkOWEEQRLlC9ylIVCrIXOuNBSlrx6o,enr:-HW4QDwUF804f4WhUjwcp4JJ-PrRH0glQZv8s2cVHlBRPJ3SYcYO-dvJGsKhztffrski5eujJkl8oAc983MZy6-PqF2AgmlkgnY0iXNlY3AyNTZrMaECPEPryjkmUBnQFyjmMw9rl7DVtKL0243nN5iepqsvKDw" \
  --infra-disk-io-test-file-dir="/opt/charon/test" \
  --data-dir="/opt/charon/test" \
  --output-json="/opt/charon/test/test-result.json"
```

## Test connection to peers

Run tests towards other Charon peers to evaluate the effectiveness of a potential cluster setup. The command sets up a libp2p node, similarly to what Charon normally does. This test command **has to be run simultaneously with the other peers**. After the node is up it waits for other peers to get their nodes up and running, retrying the connection every 3 seconds. The libp2p node connects to relays (configurable with `p2p-relays` flag) and to other libp2p nodes via TCP. Other peer nodes are discoverable by using their ENRs. Note that for a peer to be successfully discovered, it needs to be connected to the same relay. After completion of the test suite the libp2p node stays alive (duration configurable with `keep-alive` flag) for other peers to continue testing against it. The node can be forcefully stopped as well.

To be able to establish direct connection, you have to ensure:

- Your machine is publicly accessible on the internet or at least a specific port is.
- You add flag `p2p-tcp-address` (i.e.: `127.0.0.1:9001`) flag and the port specified in it is free and publicly accessible.
- You add the flag `p2p-external-ip` (i.e.: `8.8.8.8`) and specify your public IP.

If all points are satisfied by you and the other peers, you should be able to establish a direct TCP connection between each other. Note that a relay is still required, as it is used for peer discovery.

### Pre-requisites

#### Running before you have started cluster creation

- [Create an ENR](../../learn/charon/charon-cli-reference#creating-an-enr-for-charon).
- Share your ENR with the other peers which will test with you.
- Obtain the ENRs of the other peers with which you will test.
- Supply the peers' ENRS to the command with the `--enrs` flag.

#### Running after you have started cluster creation

- Supply either `cluster-definition.json` or `cluster-lock.json` file (depending on which stage of cluster creation you are) to `--cluster-definition-file-path` or `--cluster-lock-file-path` flag, respectively.

### Run

```shell
charon test peers \
  --enrs="enr:-HW4QNDXi9MzdH9Af65g20jDfelAJ0kJhclitkYYgFziYHXhRFF6JyB_CnVnimB7VxKBGBSkHbmy-Tu8BJq8JQkfptiAgmlkgnY0iXNlY3AyNTZrMaEDBVt5pk6x0A2fjth25pjLOEE9DpqCG-BCYyvutY04TZ,enr:-HW4QO2vefLueTBEUGly5hkcpL7NWdMKWx7Nuy9f7z6XZInCbFAc0IZj6bsnmj-Wi4ElS6jNa0Mge5Rkc2WGTVemas2AgmlkgnY0iXNlY3AyNTZrMaECR9SmYQ_1HRgJmNxvh_ER2Sxx78HgKKgKaOkCROYwaDY"
```

### Run with Docker

```shell
docker run -v "$(pwd)/.charon:/opt/charon/.charon" obolnetwork/charon:v1.1.2 test peers \
  --enrs="enr:-HW4QNDXi9MzdH9Af65g20jDfelAJ0kJhclitkYYgFziYHXhRFF6JyB_CnVnimB7VxKBGBSkHbmy-Tu8BJq8JQkfptiAgmlkgnY0iXNlY3AyNTZrMaEDBVt5pk6x0A2fjth25pjLOEE9DpqCG-BCYyvutY04TZs,enr:-HW4QO2vefLueTBEUGly5hkcpL7NWdMKWx7Nuy9f7z6XZInCbFAc0IZj6bsnmj-Wi4ElS6jNa0Mge5Rkc2WGTVemas2AgmlkgnY0iXNlY3AyNTZrMaECR9SmYQ_1HRgJmNxvh_ER2Sxx78HgKKgKaOkCROYwaDY"
```

## Test beacon node

Run tests on beacon node(s), to evaluate their effectiveness for a Distributed Validator cluster. The beacon node is usually the client doing the most work in a validating stack, especially with a high number of validators being serviced by the validator client(s) and Charon(s) that depend on it. If the beacon node you are testing is self-hosted (which is highly recommended for production), the flag `--load-test` can be added. These tests include simulated workloads for an increasing number of validators, and the process takes some time (approximately ~33 minutes). It is normal to observe some warnings during the simulations.

At least 1 endpoint is required to be supplied to the `--endpoints` flag.

### Pre-requisites

- Running beacon node(s) towards which tests will be executed.

### Run

```shell
charon test beacon \
  --endpoints="https://ethereum-holesky-beacon-api.publicnode.com,https://ethereum-sepolia-beacon-api.publicnode.com"
```

Load test

```shell
charon test beacon \
  --endpoints="https://ethereum-holesky-beacon-api.publicnode.com,https://ethereum-sepolia-beacon-api.publicnode.com" \
  --load-test
```

### Run with Docker

```shell
docker run obolnetwork/charon:v1.1.2 test beacon \
  --endpoints="https://ethereum-holesky-beacon-api.publicnode.com,https://ethereum-sepolia-beacon-api.publicnode.com"
```

Load test

```shell
docker run obolnetwork/charon:v1.1.2 test beacon \
  --endpoints="https://ethereum-holesky-beacon-api.publicnode.com,https://ethereum-sepolia-beacon-api.publicnode.com" \
  --load-test
```

## Test validator client

Run tests towards your validator client, to evaluate its effectiveness for a Distributed Validator cluster.

Default endpoint for validator and port is used at `127.0.0.1:3600`. This can be changed by supplying different endpoint to the `--validator-api-address` flag.

### Pre-requisites

- Running validator client towards which tests will be executed.

### Run

```shell
charon test validator
```

### Run with Docker

```shell
docker run obolnetwork/charon:v1.1.2 test validator
```

## Test MEV relay

Run tests towards MEV relay(s), to evaluate its effectiveness for a Distributed Validator cluster. If a MEV-Boost instance is configured for the validator node, it is of utmost importance that the connection to the relays it connects to is fast and reliable. If not, the chance of missing a block proposal increases significantly, because of a slow building of the block from the MEV. It is possible to also run a load test towards the MEV relay(s), where an actual block building will take place. This can be done by supplying `--load-test` flag and a second flog where beacon node endpoint is specified: `--beacon-node-endpoint`.

At least 1 endpoint is required to be supplied to the `--endpoints` flag.

### Pre-requisites

- Running MEV relay(s) towards which tests will be executed.

### Run

```shell
charon test mev \
  --endpoints="https://0xa15b52576bcbf1072f4a011c0f99f9fb6c66f3e1ff321f11f461d15e31b1cb359caa092c71bbded0bae5b5ea401aab7e@aestus.live,https://0xa7ab7a996c8584251c8f925da3170bdfd6ebc75d50f5ddc4050a6fdc77f2a3b5fce2cc750d0865e05d7228af97d69561@agnostic-relay.net,https://0x8b5d2e73e2a3a55c6c87b8b6eb92e0149a125c852751db1422fa951e42a09b82c142c3ea98d0d9930b056a3bc9896b8f@bloxroute.max-profit.blxrbdn.com,.io,https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c0205200f2f8e2e3ad3b71d3499c54ad14d6c21b41a37ae@boost-relay.flashbots.net,https://0xa1559ace749633b997cb3fdacffb890aeebdb0f5a3b6aaa7eeeaf1a38af0a8fe88b9e4b1f61f236d2e64d95733327a62@relay.ultrasound.money,https://0x8c4ed5e24fe5c6ae21018437bde147693f68cda427cd1122cf20819c30eda7ed74f72dece09bb313f2a1855595ab677d@regional.titanrelay.xyz,https://0x8c4ed5e24fe5c6ae21018437bde147693f68cda427cd1122cf20819c30eda7ed74f72dece09bb313f2a1855595ab677d@global.titanrelay.xyz"
```

Load test

```shell
charon test mev \
  --endpoints="https://0xa15b52576bcbf1072f4a011c0f99f9fb6c66f3e1ff321f11f461d15e31b1cb359caa092c71bbded0bae5b5ea401aab7e@aestus.live,https://0xa7ab7a996c8584251c8f925da3170bdfd6ebc75d50f5ddc4050a6fdc77f2a3b5fce2cc750d0865e05d7228af97d69561@agnostic-relay.net,https://0x8b5d2e73e2a3a55c6c87b8b6eb92e0149a125c852751db1422fa951e42a09b82c142c3ea98d0d9930b056a3bc9896b8f@bloxroute.max-profit.blxrbdn.com,.io,https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c0205200f2f8e2e3ad3b71d3499c54ad14d6c21b41a37ae@boost-relay.flashbots.net,https://0xa1559ace749633b997cb3fdacffb890aeebdb0f5a3b6aaa7eeeaf1a38af0a8fe88b9e4b1f61f236d2e64d95733327a62@relay.ultrasound.money,https://0x8c4ed5e24fe5c6ae21018437bde147693f68cda427cd1122cf20819c30eda7ed74f72dece09bb313f2a1855595ab677d@regional.titanrelay.xyz,https://0x8c4ed5e24fe5c6ae21018437bde147693f68cda427cd1122cf20819c30eda7ed74f72dece09bb313f2a1855595ab677d@global.titanrelay.xyz" \
  --load-test \
  --beacon-node-endpoint="https://ethereum-beacon-api.publicnode.com"
```

### Run with Docker

```shell
docker run -it obolnetwork/charon:v1.1.2 test mev \
  --endpoints="https://0xa15b52576bcbf1072f4a011c0f99f9fb6c66f3e1ff321f11f461d15e31b1cb359caa092c71bbded0bae5b5ea401aab7e@aestus.live,https://0xa7ab7a996c8584251c8f925da3170bdfd6ebc75d50f5ddc4050a6fdc77f2a3b5fce2cc750d0865e05d7228af97d69561@agnostic-relay.net,https://0x8b5d2e73e2a3a55c6c87b8b6eb92e0149a125c852751db1422fa951e42a09b82c142c3ea98d0d9930b056a3bc9896b8f@bloxroute.max-profit.blxrbdn.com,https://0xb0b07cd0abef743db4260b0ed50619cf6ad4d82064cb4fbec9d3ec530f7c5e6793d9f286c4e082c0244ffb9f2658fe88@bloxroute.regulated.blxrbdn.com,https://0xb3ee7afcf27f1f1259ac1787876318c6584ee353097a50ed84f51a1f21a323b3736f271a895c7ce918c038e4265918be@relay.edennetwork.io,https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c0205200f2f8e2e3ad3b71d3499c54ad14d6c21b41a37ae@boost-relay.flashbots.net,https://0xa1559ace749633b997cb3fdacffb890aeebdb0f5a3b6aaa7eeeaf1a38af0a8fe88b9e4b1f61f236d2e64d95733327a62@relay.ultrasound.money,https://0x8c4ed5e24fe5c6ae21018437bde147693f68cda427cd1122cf20819c30eda7ed74f72dece09bb313f2a1855595ab677d@titanrelay.xyz"
```

Load test

```shell
docker run -it obolnetwork/charon:v1.1.2 test mev \
  --endpoints="https://0xa15b52576bcbf1072f4a011c0f99f9fb6c66f3e1ff321f11f461d15e31b1cb359caa092c71bbded0bae5b5ea401aab7e@aestus.live,https://0xa7ab7a996c8584251c8f925da3170bdfd6ebc75d50f5ddc4050a6fdc77f2a3b5fce2cc750d0865e05d7228af97d69561@agnostic-relay.net,https://0x8b5d2e73e2a3a55c6c87b8b6eb92e0149a125c852751db1422fa951e42a09b82c142c3ea98d0d9930b056a3bc9896b8f@bloxroute.max-profit.blxrbdn.com,.io,https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c0205200f2f8e2e3ad3b71d3499c54ad14d6c21b41a37ae@boost-relay.flashbots.net,https://0xa1559ace749633b997cb3fdacffb890aeebdb0f5a3b6aaa7eeeaf1a38af0a8fe88b9e4b1f61f236d2e64d95733327a62@relay.ultrasound.money,https://0x8c4ed5e24fe5c6ae21018437bde147693f68cda427cd1122cf20819c30eda7ed74f72dece09bb313f2a1855595ab677d@regional.titanrelay.xyz,https://0x8c4ed5e24fe5c6ae21018437bde147693f68cda427cd1122cf20819c30eda7ed74f72dece09bb313f2a1855595ab677d@global.titanrelay.xyz" \
  --load-test \
  --beacon-node-endpoint="https://ethereum-beacon-api.publicnode.com"
```

## Test machine and network performance

Run tests of your machine and network, to evaluate their effectiveness for a Distributed Validator cluster. Distributed Validators need stable, low-latency, internet, a reasonable amount of RAM, and a highly performant disk drive for storage. This test aims to analyse these requirements to give an overview of the systems suitability.




### Pre-requisites

The storage tests require `fio` to be installed. `fio` is already pre-installed in the charon Docker image if you choose to [run with Docker](#run-with-docker-4). Read more about `fio` [here](https://fio.readthedocs.io/en/latest/fio_doc.html).

### Run

```shell
charon test infra
```

### Run with Docker

```shell
docker run obolnetwork/charon:v1.1.2 test infra
```

For proper examination of the disk performance, it is advised to run the tests in a Docker volume.

```shell
docker run -v "$(pwd)/test:/opt/charon/test" obolnetwork/charon:v1.1.2 test infra \
  --disk-io-test-file-dir=/opt/charon/test
```
