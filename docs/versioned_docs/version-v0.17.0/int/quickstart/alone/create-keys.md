---
sidebar_position: 2
description: Run all nodes in a distributed validator cluster
---

# create-keys

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

## Create the private key shares

:::warning Charon is in an alpha state and should be used with caution according to its [Terms of Use](https://obol.tech/terms.pdf). :::

:::info Running a Distributed Validator alone means that a single operator manages all of the nodes of the DV. Depending on the operators security preferences, the private key shares can be created centrally, and distributed securely to each node. This is the focus of the below guide.

Alternatively, the private key shares can be created in a lower-trust manner with a [Distributed Key Generation](../../key-concepts.md#distributed-validator-key-generation-ceremony) process, which avoids the validator private key being stored in full anywhere, at any point in its lifecycle. Follow the [group quickstart](../group/index.md) instead for this latter case. :::

### Pre-requisites

* Ensure you have [docker](https://docs.docker.com/engine/install/) installed.
* Make sure `docker` is running before executing the commands below.

### Create the key shares locally

Create the artifacts needed to run a DV cluster by running the following command to setup the inputs for the DV. Check the [Charon CLI reference](https://github.com/ObolNetwork/obol-docs/blob/main/versioned_docs/version-v0.17.0/charon/charon-cli-reference/README.md) for additional optional flags to set.\
\


```
      
      WITHDRAWAL_ADDR=[ENTER YOUR WITHDRAWAL ADDRESS HERE]
      

      FEE_RECIPIENT_ADDR=[ENTER YOUR FEE RECIPIENT ADDRESS HERE]
      

      NB_NODES=[ENTER AMOUNT OF DESIRED NODES]
      
    
```

Then, run this command to create all the key shares and cluster artifacts locally:\
\


```
      
      docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.17.0 create cluster --name="Quickstart Cluster" --withdrawal-addresses="{'\$\{WITHDRAWAL_ADDR\}'}" --fee-recipient-addresses="{'\$\{FEE_RECIPIENT_ADDR\}'}" --nodes="{'\$\{NB_NODES\}'}" --network="goerli" --num-validators=1 --cluster-dir="cluster"
      
    
```

Go to the [Obol Launchpad](https://goerli.launchpad.obol.tech) and select `Create a distributed validator alone`. Follow the steps to configure your DV cluster.

After successful completion, a subdirectory `.charon/cluster` should be created. In it are as many folders as nodes of the cluster. Each folder contains partial private keys that together make up the distributed validator described in `.charon/cluster/cluster-lock.json`.

Once ready, you can move to [deploying this cluster physically](deploy.md).
