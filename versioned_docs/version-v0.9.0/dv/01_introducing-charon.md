---
description: Charon -  The Distributed Validator Client
---

# Introducing Charon

This section introduces and outlines the Charon middleware. For additional context regarding distributed validator technology, see [this section](../int/key-concepts#distributed-validator) of the key concept page.

### What is Charon?

Charon is a GoLang-based, HTTP middleware built by Obol to enable any existing Ethereum validator clients to operate together as part of a distributed validator.

Charon sits as a middleware between a normal validating client and it's connected beacon node, intercepting and proxying API traffic. Multiple Charon clients are configured to communicate together to come to consensus on validator duties and behave as a single unified proof-of-stake validator together. The nodes form a cluster that is _byzantine-fault tolerant_ and continues to progress assuming a supermajority of working/honest nodes is met.

### Charon architecture

The below graphic visually outlines the internal functionalies of Charon.

![Charon Internals Slide](/img/CharonInternals.png)

### Get started

The `charon` client is in an early alpha state, and is not ready for mainnet, see [here](https://github.com/ObolNetwork/charon#supported-consensus-layer-clients) for the latest on charon's readiness.

```
docker run obolnetwork/charon:v0.10.0 --help
```

For more information on running charon, take a look at our [quickstart guide](../int/quickstart/index.md).
