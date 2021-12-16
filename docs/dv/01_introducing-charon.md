---
description: Charon -  The Distributed Validator Client
---

# Introducing Charon

### What is a Distributed Validator?

![A Distributed Validator is a group of validator clients working together to stake](/img/ObolCluster.png)

A distributed validator is an Ethereum proof of stake validator that runs on more than one node/machine. How does this validator not get slashed for doing that? It relies on **Distributed Validator Technology** (DVT).

Distributed Validator Technology is \*ahem\* _the application of cryptography and consensus algorithms to enable threshold signing of a proof of stake validator's duties in a trust minimized configuration_. \*breathe\* Let me break that sentence down a bit.

**Consensus:** A collection of machines coming to agreement on what to sign together

**Threshold Signing:** Being able to sign a message with only a subset of key holders taking part - giving the collection of machines a level of fault tolerance.

So the idea behind distributed validator technology is that provided less than 33% of the nodes in your cluster crash or go offline at the same time, your Ethereum validator can stay online. The remaining active nodes are still able to come to consensus on what to sign, and can still produce valid signatures for their staking duties. This is known as Active/Active redundancy, a common pattern for minimizing downtime in mission critical systems.

### What is Charon?

Charon is a GoLang-based, HTTP middleware built by Obol to enable any existing Ethereum validator client to operate as part of a distributed validator.

Charon sits as a middleware between a normal validating client and it's connected beacon node, intercepting and proxying API traffic. Multiple charon clients are configured to communicate together to come to consensus on validator duties and behave as a single unified proof of stake validator together. The nodes form a cluster that is _byzantine-fault tolerant_ and continues to progress assuming a supermajority of working/honest nodes is met.

### Get Started

The `charon` client is not yet ready for use, but you can play around with the dummy commands by running the following.

```
docker run docker.pkg.github.com/obolnetwork/charon/charon:v0.0.2 charon --help
```
