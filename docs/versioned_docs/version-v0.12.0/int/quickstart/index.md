# Quickstart Guides

:::warning
Charon is in an early alpha state and is not ready to be run on mainnet
:::

There are two ways to test out a distributed validator; on your own, by running all of the required software as containers within docker, or you can run a distributed validator with a group of other node operators, where you each run only one validator client and charon client, and the charon clients communicate with one another over the public internet to operate the distributed validator. The second manner requires each operator to open a port on the internet for all charon nodes to communicate with one another optimally. 

The following are guides to getting started with our template repositories. The intention is to support every combination of beacon clients and validator clients with compose files. 

- [Running the full cluster alone.](./quickstart-alone.md)
- [Running one node in a cluster with a group of other node operators.](./group/quickstart-group-launchpad.md)