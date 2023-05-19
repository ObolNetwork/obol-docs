# Run a cluster as a group

:::caution
Charon is in an alpha state and should be used with caution according to its [Terms of Use](https://obol.tech/terms.pdf).
:::

:::info
Running a Distributed Validator with others typically means that several operators run the various nodes of the cluster. In such a case, the key shares should be created with a [distributed key generation process](../../key-concepts.md#distributed-validator-key-generation-ceremony), avoiding the private key being stored in full, anywhere.
:::

There are two sequential user journeys when setting up a DV cluster with others. Each comes with its own quickstart:

1. The [**Creator** (**Leader**) Journey](./group/quickstart-group-leader-creator), which outlines the steps to propose a Distributed Validator Cluster. 
    - In the **Creator** case, the person creating the cluster *will NOT* be a node operator in the cluster.
    - In the **Leader** case, the person creating the cluster *will* be a node operator in the cluster. 
    

2. The [**Operator** Journey](./group/quickstart-group-operator) which outlines the steps to create a Distributed Validator Cluster proposed by a leader or creator using the above process.