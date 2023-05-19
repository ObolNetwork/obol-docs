---
sidebar_position: 2
description: Test the solo cluster locally
---

# Test the cluster locally

:::warning
This is a demo repo to understand how Distributed Validators work and is not suitable for a production deployment.

This guide only runs one Execution Client, one Consensus Client, and 6 Distributed Validator Charon Client + Validator Client pairs on a single docker instance. As a consequence, if this machine fails, there will not be fault tolerance. 
:::

The `charon-distributed-validator-cluster` repo used [earlier](./create-keys) to create the key shares also contains six charon clients in separate docker containers along with an execution client and consensus client, simulating a Distributed Validator cluster running.

The default cluster consists of:
- [Nethermind](https://github.com/NethermindEth/nethermind), an execution layer client
- [Lighthouse](https://github.com/sigp/lighthouse), a consensus layer client
- Six [charon](https://github.com/ObolNetwork/charon) nodes
- A mixture of validator clients:
   - vc0: [Lighthouse](https://github.com/sigp/lighthouse)
   - vc1: [Teku](https://github.com/ConsenSys/teku)
   - vc2: [Nimbus](https://github.com/status-im/nimbus-eth2)
   - vc3: [Lighthouse](https://github.com/sigp/lighthouse)
   - vc4: [Teku](https://github.com/ConsenSys/teku)
   - vc5: [Nimbus](https://github.com/status-im/nimbus-eth2)

Run this command to start your cluster containers

```sh
# Start the distributed validator cluster
docker compose up --build
```
Check the monitoring dashboard and see if things look all right

```sh
# Open Grafana
open http://localhost:3000/d/laEp8vupp
```