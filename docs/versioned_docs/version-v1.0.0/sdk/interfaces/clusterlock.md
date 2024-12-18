# ClusterLock

Cluster Details after DKG is complete

### Properties

| Property                 | Type                                                 | Description                                                 |
| ------------------------ | ---------------------------------------------------- | ----------------------------------------------------------- |
| `cluster_definition`     | [`ClusterDefinition`](clusterdefinition.md)          | The cluster definition.                                     |
| `distributed_validators` | [`DistributedValidator`](distributedvalidator.md)\[] | The cluster distributed validators.                         |
| `signature_aggregate`    | `string`                                             | The cluster bls signature aggregate.                        |
| `lock_hash`              | `string`                                             | The hash of the cluster lock.                               |
| `node_signatures?`       | `string`\[]                                          | Node Signature for the lock hash by the node secp256k1 key. |
