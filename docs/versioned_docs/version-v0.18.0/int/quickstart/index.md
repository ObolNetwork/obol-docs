# Quickstart Guides

:::warning Charon is in a beta state and should be used with caution according to its [Terms of Use](https://obol.tech/terms.pdf). :::

There are two ways to set up a distributed validator and each comes with its own quickstart

1. [Run a DV cluster as a **group**](group/index.md), where several operators run the nodes that make up the cluster. In this setup, the key shares are created using a distributed key generation process, avoiding the full private keys being stored in full in any one place. This approach can also be used by single operators looking to manage all nodes of a cluster but wanting to create the key shares in a trust-minimised fashion.
2. [Run a DV cluster **alone**](https://github.com/ObolNetwork/obol-docs/blob/main/versioned_docs/version-v0.18.0/int/quickstart/quickstart/alone/create-keys/README.md), where a single operator runs all the nodes of the DV. Depending on trust assumptions, there is not necessarily the need to create the key shares via a DKG process. Instead the key shares can be created in a centralised manner, and distributed securely to the nodes.
