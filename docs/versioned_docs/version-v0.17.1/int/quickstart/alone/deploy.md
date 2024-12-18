---
sidebar_position: 3
description: Move the private key shares to the nodes and run the cluster
---

# Deploy the cluster

To distribute your cluster physically and start the DV, each node needs a directory called `.charon` with one (or several) private key shares within it as per the structure below.

```
├── .charon
│   ├── charon-enr-private-key
│   ├── cluster-lock.json
│   ├── deposit-data.json
│   └── validator_keys
│       ├── keystore-0.json
│       ├── keystore-0.txt
│       ├── ...
│       ├── keystore-N.json
│       └── keystore-N.txt
```

:point\_right: Use the single node [docker compose](https://github.com/ObolNetwork/charon-distributed-validator-node), the kubernetes [manifests](https://github.com/ObolNetwork/charon-k8s-distributed-validator-node), or the [helm chart](https://github.com/ObolNetwork/helm-charts) example repos to get your nodes up and connected after loading the `.charon` folder artifacts into them appropriately.

:::warning Right now, the `charon-distributed-node-cluster` repo [used earlier to create the private keys](https://github.com/ObolNetwork/obol-docs/blob/main/versioned_docs/version-v0.17.1/int/quickstart/alone/create-keys/README.md) outputs a folder structure like `.charon/ cluster/node0/validator_keys`. Make sure to grab the `./node0/*` folder, RENAME it to `.charon` and then move it to one of the single node repo above to have a working cluster as per the folder structure shown above. :::
