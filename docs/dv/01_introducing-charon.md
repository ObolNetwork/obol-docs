---
description: Charon - The Distributed Validator Client
---

# Introducing Charon

This section introduces and outlines the Charon middleware. For additional context regarding distributed validator technology, see [this section](../int/key-concepts#distributed-validator) of the key concept page.

## What is Charon?

Charon is a GoLang-based, HTTP middleware built by Obol to enable any existing Ethereum validator clients to operate together as part of a distributed validator.

Charon sits as a middleware between a normal validating client and it's connected beacon node, intercepting and proxying API traffic. Multiple Charon clients are configured to communicate together to come to consensus on validator duties and behave as a single unified proof-of-stake validator together. The nodes form a cluster that is _byzantine-fault tolerant_ and continues to progress assuming a supermajority of working/honest nodes is met.

![Charon Cluster](/img/DVCluster.png)

## Charon architecture
The below graphic visually outlines the internal functionalies of Charon.

![Charon Internals Slide](/img/CharonInternals.png)

The middleware strives to be stateless and statically configured through 777 file systems. The lack of a control-plane API for online reconfiguration is deliberate to keep operations simple and secure by default. 

### Ports

The following is an outline of the services that can be exposed by charon.

- **:3600** - The validator API. This is the endpoint that serves the consensus layer's [beacon node API](https://ethereum.github.io/beacon-APIs/). This is the port validator clients should talk to instead of their standard consensus client REST API port. Charon subsequently proxies these requests to the upstream consensus client specified by `--beacon-node-endpoints`.

- **:3610** - Charon P2P port. This is the port that charon clients use to communicate with one another via TCP. Should this endpoint be exposed publicly? **Yes**.

- **:3620** - Monitoring port. This port hosts a webserver that serves prometheus metrics on `/metrics`, a readiness endpoint on `/readyz` and a liveness endpoint on `/livez`, and a pprof server on `/debug/pprof`.

- **:3630** - UDP discovery port. This port is used by the discv5 discovery protocol for peer discovery of charon nodes.

- **:3640**  - HTTP server port. This port hosts a HTTP webserver that serves a client's ENR on `/enr`. This is used by charon startup to find an ENR to connect to for peering. 

## Getting started

The `charon` client is in an early alpha state, and is not ready for mainnet, see [here](https://github.com/ObolNetwork/charon#supported-consensus-layer-clients) for the latest on charon's readiness.

```
docker run obolnetwork/charon:v0.9.0 --help
```

For more information on running charon, take a look at our [quickstart guide](../int/quickstart/index.md). 
