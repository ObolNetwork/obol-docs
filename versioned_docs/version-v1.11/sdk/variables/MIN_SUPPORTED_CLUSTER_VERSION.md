---
sidebar_label: "MIN_SUPPORTED_CLUSTER_VERSION"
slug: /sdk/variables/min_supported_cluster_version
---

# MIN\_SUPPORTED\_CLUSTER\_VERSION

> `const` **MIN\_SUPPORTED\_CLUSTER\_VERSION**: `"v1.10.0"` = `'v1.10.0'`

Defined in: [constants.ts:142](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/constants.ts#L142)

Minimum cluster definition version the SDK creates or joins.
[Client.createClusterDefinition](../classes/Client.md#createclusterdefinition) and
[Client.acceptClusterDefinition](../classes/Client.md#acceptclusterdefinition) reject older versions. Existing
v1.6.0 to v1.8.0 locks are still hashed and verified by
`validateClusterLock`, so running clusters keep working (e.g.
`getDepositData`). obol-api applies the same minimum to new locks.
