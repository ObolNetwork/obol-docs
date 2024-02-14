> **ClusterLock**: `Object`

Cluster Details after DKG is complete

## Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `cluster_definition` | [`ClusterDefintion`](../interfaces/ClusterDefintion.md) | The cluster definition. |
| `distributed_validators` | [`DistributedValidator`](DistributedValidator.md)[] | The cluster distributed validators. |
| `lock_hash` | `string` | The hash of the cluster lock. |
| `node_signatures` | `string`[] | Node Signature for the lock hash by the node secp256k1 key. |
| `signature_aggregate` | `string` | The cluster bls signature aggregate. |

## Source

types.ts:194
