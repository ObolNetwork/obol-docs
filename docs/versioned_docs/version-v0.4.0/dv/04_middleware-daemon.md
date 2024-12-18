---
description: Deployment Architecture for a Distributed Validator Client
---

# Middleware Architecture

<div align="center"><img src="https://github.com/ObolNetwork/obol-docs/blob/main/img/DistributedValidatorCluster.svg" alt=""></div>

The Charon daemon sits as a middleware between the consensus layer's [beacon node API](https://ethereum.github.io/beacon-APIs/) and any downstream validator clients.

### Operation

The middleware strives to be stateless and statically configured through 777 file systems. The lack of a control-plane API for online reconfiguration is deliberate to keep operations simple and secure by default.

The daemon offers a config reload instruction through Unix signals which is useful to join or leave Obol clusters on-the-fly without interruption.

The `charon` package will initially be available as a Docker image and through binary builds. An APT package with a systemd integration is planned.
