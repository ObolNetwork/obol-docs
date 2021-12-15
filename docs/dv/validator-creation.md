---
description: Creating a Distributed Validator cluster from scratch
---

# Distributed Validator Creation

![A sample Distributed Validator cluster](/img/ObolCluster.png)

### Stages of creating a Distributed Validator

To create a distributed validator cluster, you and your group of operators need to complete the following steps:

1. Each operator must set up their staking software on their node, expose the necessary ports to the internet, and configure appropriate monitoring, logging and alerting.
2. One operator leads, and all operators participate in a [Distributed Validator Key](../dvk/distributed-validator-keys.md) generation ceremony.
3. All operators load the keys and manifests generated in the ceremony, into their staking deployments.
4. Operators can run a performance test of the configured cluster to ensure connectivity between all operators at a reasonable latency is observed.
5. Once all readiness tests have passed, one person activates the distributed validator(s) with a deposit on chain.
