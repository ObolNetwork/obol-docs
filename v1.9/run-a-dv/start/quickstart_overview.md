# Quickstart Overview

The quickstart guides are aimed at developers and stakers looking to deploy Distributed Validators in a single or multi-operator setup. To contribute to this documentation, head over to our [Github repository](https://github.com/ObolNetwork/obol-docs) and file a pull request.

There are two ways to set up a distributed validator and each comes with its own quickstart, within the "Getting Started" section:

1. Run a DV cluster as a [**group**](create-a-dv-with-a-group.mdx), where several operators run the nodes that make up the cluster. In this setup, the key shares are created using a distributed key generation process, avoiding the full private keys being stored in full in any one place. This approach can also be used by single operators looking to manage all nodes of a cluster but wanting to create the key shares in a trust-minimised fashion.
2. Run a DV cluster [**alone**](create-a-dv-alone.mdx), where a single operator runs all the nodes of the DV. Depending on trust assumptions, there is not necessarily the need to create the key shares via a DKG process. Instead the key shares can be created in a centralised manner, and distributed securely to the nodes.

## Cluster as a Service (CaaS)

If you want to integrate DVs but are not a node operator yourself, Obol offers **Cluster as a Service (CaaS)**: distributed validators operate deep in the staking stack and are compatible with different staking strategies, and with CaaS you can select your strategy, choose your node operators, and deploy and monitor clusters with confidence.

* [Read the Cluster as a Service offering](https://hubs.ly/Q03Y2Srl0)
* [Contact us](mailto:business@obol.tech)

## Need assistance?

If you have any questions about this documentation or are experiencing technical problems with any Obol-related projects, head on over to our [Discord](https://discord.gg/n6ebKsX46w) where a member of our team or the community will be happy to assist you.
