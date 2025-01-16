# ClusterLock

> **ClusterLock**: `Object`

Cluster Details after DKG is complete

### Type declaration

| Member                   | Type                                                    | Description                                                 |
| ------------------------ | ------------------------------------------------------- | ----------------------------------------------------------- |
| `cluster_definition`     | [`ClusterDefintion`](../interfaces/clusterdefintion.md) | The cluster definition.                                     |
| `distributed_validators` | [`DistributedValidator`](distributedvalidator.md)\[]    | The cluster distributed validators.                         |
| `signature_aggregate`    | `string`                                                | The cluster bls signature aggregate.                        |
| `lock_hash`              | `string`                                                | The hash of the cluster lock.                               |
| `node_signatures`        | `string`\[]                                             | Node Signature for the lock hash by the node secp256k1 key. |

### Source

types.ts:194
