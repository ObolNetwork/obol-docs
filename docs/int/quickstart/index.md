# Quickstart Guides

:::caution
Charon is in an alpha state and should be used with caution according to its [Terms of Use](https://obol.tech/terms.pdf).
:::

There are two ways to set up a distributed validator and each comes with its own quickstart
1. [Run a DV cluster as a **group**](./group/index.md), where typically several operators or entities operate the various nodes of the cluster. In this setup, the keyshares are created via a trustless DKG, avoiding the full private keys being stored in full anywhere during the process. 
This approach is this also suited for single entities operating all nodes of a cluster but wishing to create the keyshares in a trustless fashion.

2. [Run a DV cluster **alone**](./quickstart-alone.md), where a single operator or entity runs all the nodes of the DV. In such a case and depending on the objective, there not necessarily the need to create the keyshares via a trustless DKG. Instead the keyshares are created centrally, then distributed securely to the nodes.