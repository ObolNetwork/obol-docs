---
sidebar_position: 7
description: Run Prysm VCs in a DV
---

# Run Prysm validators as part of a DV Cluster


:::info 
Support for prysm validator clients is in an experimental phase as prysm doesn't provide [complete support](https://github.com/prysmaticlabs/prysm/issues/11580)
for running their validator client on a beacon node REST API yet. Stay up to date on the latest support information for all validator clients at [dvt.obol.tech](https://dvt.obol.tech).
:::

We have provided experimental support of prysm validator client through [compose-prysm.yml](https://github.com/ObolNetwork/charon-distributed-validator-cluster/blob/main/compose-prysm.yml) 
which needs a prysm beacon node to work alongside a REST based beacon node. Here are the steps to test prysm in a DV Cluster:

1. Run the following command:
   ```sh
   cp docker-compose.override.yml.sample docker-compose.override.yml
   ```
2. **Disable** the VCs in `docker-compose.override.yml` that are to be replaced by corresponding prysm VCs by un-commenting the `profiles` field
([more details on profiles](https://docs.docker.com/compose/profiles/)). Also disable the prysm VCs that are not required in the cluster in `docker-compose.override.yml`.
3. Run the following command:
   ```sh
   docker compose -f docker-compose.yml -f compose-prysm.yml -f docker-compose.override.yml up --build
   ```
