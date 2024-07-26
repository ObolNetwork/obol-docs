---
sidebar_position: 3
description: Move the private key shares to the nodes and run the cluster
---

# Deploy the cluster
To distribute your cluster physically and start the DV, each node in the cluster needs one of the folders called `node*/` within the output of the `create cluster` command. These folders should be copied to a CDVN repo, and the folder renamed from `node0/` to `.charon/`. (Or you can override `charon run`'s default file locations)

```log title="Output from create cluster"

cluster
├── node0
│   ├── charon-enr-private-key
│   ├── cluster-lock.json
│   ├── deposit-data.json
│   └── validator_keys
│       ├── keystore-0.json
│       └── keystore-0.txt
├── node1
│   ├── charon-enr-private-key
│   ├── cluster-lock.json
│   ├── deposit-data.json
│   └── validator_keys
│       ├── keystore-0.json
│       └── keystore-0.txt
├── node2
│   ├── charon-enr-private-key
│   ├── cluster-lock.json
│   ├── deposit-data.json
│   └── validator_keys
│       ├── keystore-0.json
│       └── keystore-0.txt
└── node3
    ├── charon-enr-private-key
    ├── cluster-lock.json
    ├── deposit-data.json
    └── validator_keys
        ├── keystore-0.json
        └── keystore-0.txt

```

```log title="Folder structure to be placed on each DV node"
└── .charon
    ├── charon-enr-private-key
    ├── cluster-lock.json
    ├── deposit-data.json
    └── validator_keys
        ├── keystore-0.json
        ├── keystore-0.txt
        ├── ...
        ├── keystore-N.json
        └── keystore-N.txt
```

:point_right: Use the single node [docker compose](https://github.com/ObolNetwork/charon-distributed-validator-node), the kubernetes [manifests](https://github.com/ObolNetwork/charon-k8s-distributed-validator-node), or the [helm chart](https://github.com/ObolNetwork/helm-charts) example repos to get your nodes up and connected after loading the `.charon` folder artifacts into them appropriately.

:::warning
Right now, the `charon create cluster` command [used earlier to create the private keys](./create-keys) outputs a folder structure like `cluster/node*/`. Make sure to grab the `./node*/` folders, *rename* them to `.charon` and then move them to one of the single node repos above. Once all nodes are online, synced, and connected, you will be ready to activate your validator.
:::
