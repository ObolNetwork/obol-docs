---
sidebar_position: 3
description: Centralisation risks and their mitigations
---

# Centralisation risks

The following is an overview of some points of centralisation in a distributed validator, and the actions one can take to protect and harden their validator infrastructure from correlated failures or undue influence. 

## Risk: Obol hosting the relay infrastructure
**Mitigation**: Self-host a relay or use a third party relay

Obol Labs currently hosts the default [libp2p relay](../../charon/networking.md) infrastructure for charon clients. These relays enable peer discovery between charon clients in a cluster. If the Obol-hosted relays go down, peers won't be able to discover each other and establish a direct connection with one another. This would impact the ability for operators to perform a DKG, and for nodes to find one another after they restart. To mitigate this risk; node operators should consider [self-hosting a relay](../../charon/charon-cli-reference#host-a-relay). Operators can also list multiple relays for a client to connect to and use, needing just one working relay between a pair of nodes to establish a direct connection. With multiple relays specified, if Obol's relays go down, the clusters can still operate through the other working relays. 

## Risk: Obol being able to update Charon's codebase
**Mitigation**: Pin a specific docker version or commit

Obol Labs is the current maintainer of the [charon codebase](https://github.com/ObolNetwork/charon). Obol Labs could introduce vulnerabilities or malicious code in a future update. To mitigate this risk, an operator should pin specific versions of the docker image or commits of the repository that have been thoroughly tested and accepted by the community and the operator's security team. Due to the independent nature of Distributed Validator Clusters, every cluster does not need to upgrade versions in lock-step, allowing a cautious operator or cluster to vet and test any potential release candidate for as long as they need. Further, it is possible to gradually roll out new versions of the charon software to a subset of your production nodes before upgrading a signing supermajority of the nodes in your cluster. 

## Risk: Obol hosting the DV Launchpad
**Mitigation**: Use [`create cluster`](../../charon/charon-cli-reference#create-a-full-cluster-locally) or [`create dkg`](../../charon/charon-cli-reference#creating-the-configuration-for-a-dkg-ceremony) locally and distribute the files manually

Obol Labs develops and hosts a web application known as the [Distributed Validator (DV) Launchpad](../../dvl/intro.md) for facilitating the creation of Distributed Validators. [This site](https://goerli.launchpad.obol.tech/) is intended to educate users on the risks associated with running a Distributed Validator, and is inspired by the original Ethereum [Staking Launchpad](https://launchpad.ethereum.org/). If an Operator does not wish to depend on the DV Launchpad, charon has the [`create cluster`](../../charon/charon-cli-reference#create-a-full-cluster-locally), [`create dkg`](../../charon/charon-cli-reference#creating-the-configuration-for-a-dkg-ceremony), and [`dkg`](../../charon/charon-cli-reference#the-dkg-subcommand) commands for creating a Distributed Validator without any external dependencies. 

## Risk: Obol having a total failure
**Mitigation**: Either [exit](../../int/quickstart/quickstart-exit) the validator, or use the [`combine`](../../charon/charon-cli-reference#the-combine-subcommand) command to create the validator private key from its key shares

If Obol Labs were to cease operating, and if [charon](https://github.com/ObolNetwork/charon) was to go unmaintained or suffered a complete failure, a node operator could [exit](../../int/quickstart/quickstart-exit) the validator in the normal manner, or if needed, operators could collect their private key shares into one location, and use the [`combine`](../../charon/charon-cli-reference#the-combine-subcommand) subcommand to merge a threshold of the [Distributed Validator private key shares](../../int/key-concepts#distributed-validator-key) into a standard validator private key. 

:::caution
Please use caution in the event of combining private key shares into a single validator private key, if the distributed validator cluster is still online and validating when the newly assembled private key also begins to validate, **the validator is likely to be slashed**.
:::