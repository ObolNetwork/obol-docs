---
sidebar_position: 1
description: Charon - The Distributed Validator Client
---

# Introduction

This section introduces and outlines the Charon \[kharon] middleware, Obol's implementation of DVT.

## What is Charon?

Charon is a GoLang-based, HTTP middleware built by Obol to enable any existing Ethereum validator clients to operate together as part of a distributed validator.

Charon sits as a middleware between a normal validating client and its connected beacon node, intercepting and proxying API traffic. Multiple Charon clients are configured to communicate together to come to consensus on validator duties and behave as a single unified proof-of-stake validator together. The nodes form a cluster that is _byzantine-fault tolerant_ and continues to progress assuming a supermajority of working/honest nodes is met.

![Charon Cluster](https://github.com/ObolNetwork/obol-docs/blob/main/img/DVCluster.png)

## Charon architecture

The below graphic visually outlines the internal functionalies of Charon.

![Charon Internals Slide](https://github.com/ObolNetwork/obol-docs/blob/main/img/CharonInternals.png)

The middleware strives to be stateless and statically configured through 777 file systems. The lack of a control-plane API for online reconfiguration is deliberate to keep operations simple and secure by default.

### Ports

The following is an outline of the services that can be exposed by charon.

* **:3600** - The validator REST API. This is the port that serves the consensus layer's [beacon node API](https://ethereum.github.io/beacon-APIs/). This is the port validator clients should talk to instead of their standard consensus client REST API port. Charon subsequently proxies these requests to the upstream consensus client specified by `--beacon-node-endpoints`.
* **:3610** - Charon P2P port. This is the port that charon clients use to communicate with one another via TCP. This endpoint should be port-forwarded on your router and exposed publicly, preferably on a static IP address. This IP address should then be set on the charon run command with `--p2p-external-ip` or `CHARON_P2P_EXTERNAL_IP`.
* **:3620** - Monitoring port. This port hosts a webserver that serves prometheus metrics on `/metrics`, a readiness endpoint on `/readyz` and a liveness endpoint on `/livez`, and a pprof server on `/debug/pprof`. This port should not be exposed publicly.
* **:3630** - UDP discovery port. This port is used by the discv5 discovery protocol for peer discovery of charon nodes.
* **:3640** - Bootnode HTTP server port. This port hosts a HTTP webserver that serves a client's ENR on `/enr`. This is only used by the `charon bootnode` command.

## Getting started

For more information on running charon, take a look at our [Quickstart Guides](../int/quickstart/index.md).
