---
sidebar_position: 1
description: Quickstart Overview
---

# Quickstart Overview

The quickstart guides are aimed at developers and stakers looking to utilize Distributed Validators for solo or multi-operator staking. To contribute to this documentation, head over to our [Github repository](https://github.com/ObolNetwork/obol-docs) and file a pull request.

There are two ways to set up a distributed validator and each comes with its own quickstart, within the "Getting Started" section:

1. Run a DV cluster as a [**group**](./quickstart_group.mdx), where several operators run the nodes that make up the cluster. In this setup, the key shares are created using a distributed key generation process, avoiding the full private keys being stored in full in any one place.
This approach can also be used by single operators looking to manage all nodes of a cluster but wanting to create the key shares in a trust-minimised fashion.

2. Run a DV cluster [**alone**](./quickstart_alone.mdx), where a single operator runs all the nodes of the DV. Depending on trust assumptions, there is not necessarily the need to create the key shares via a DKG process. Instead the key shares can be created in a centralised manner, and distributed securely to the nodes.

## Need assistance?

If you have any questions about this documentation or are experiencing technical problems with any Obol-related projects, head on over to our [Discord](https://discord.gg/n6ebKsX46w) where a member of our team or the community will be happy to assist you.
