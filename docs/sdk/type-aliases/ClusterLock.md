> **ClusterLock**: `object`

Cluster Details after DKG is complete

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `cluster_definition` | [`ClusterDefinition`](../interfaces/ClusterDefinition.md) | The cluster definition. | types.ts:235 |
| `distributed_validators` | [`DistributedValidator`](DistributedValidator.md)[] | The cluster distributed validators. | types.ts:238 |
| `signature_aggregate` | `string` | The cluster bls signature aggregate. | types.ts:241 |
| `lock_hash` | `string` | The hash of the cluster lock. | types.ts:244 |
| `node_signatures`? | `string`[] | Node Signature for the lock hash by the node secp256k1 key. | types.ts:247 |

## Defined in

types.ts:233
