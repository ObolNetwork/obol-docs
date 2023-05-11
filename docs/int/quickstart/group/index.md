# Run a cluster with others

:::caution
Charon is in an alpha state and should be used with caution according to its [Terms of Use](https://obol.tech/terms.pdf).
:::

:::warning
Running a Distributed Validator as a group or with others typically means that several operators or entities operate the various nodes of the cluster. In such a case, the keyshares are created  via a trustless DKG, avoiding the private key being stored in full anywhere during the process.

If you are running all the nodes of a cluster and instead are looking to create the keyshares centrally, then distribute them securely between the nodes, follow the [solo guide](docs/int/quickstart/quickstart-alone.md) 
:::

There are two user journeys when setting up a DV cluster with others. Each comes with its own quickstart

1. The [**Leader** & **Creator** Journey](./group/quickstart-group-leader-creator) which outlines the steps to create a cluster configuration for a cluster to be later joined by others. 
    - In the **Leader** case, the person creating the cluster *will* be a node operator in the cluster. 
    - In the **Creator** case, the person creating the cluster *will not* be a node operator in the cluster.

2. The [**Operator** Journey](./group/quickstart-group-operator) which outlines the steps to join an existing cluster created by a leader or creator using the above process.