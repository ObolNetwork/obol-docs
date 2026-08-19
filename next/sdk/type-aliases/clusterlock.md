# ClusterLock

> **ClusterLock** = `object`

Defined in: [types.ts:341](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L341)

Cluster Details after DKG is complete

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="cluster_definition"></a> `cluster_definition` | [`ClusterDefinition`](../interfaces/ClusterDefinition.md) | The cluster definition. | [types.ts:343](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L343) |
| <a id="distributed_validators"></a> `distributed_validators` | [`DistributedValidator`](DistributedValidator.md)[] | The cluster distributed validators. | [types.ts:346](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L346) |
| <a id="signature_aggregate"></a> `signature_aggregate` | `string` | The cluster bls signature aggregate. | [types.ts:349](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L349) |
| <a id="lock_hash"></a> `lock_hash` | `string` | The hash of the cluster lock. | [types.ts:352](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L352) |
| <a id="node_signatures"></a> `node_signatures?` | `string`[] | Node Signature for the lock hash by the node secp256k1 key. | [types.ts:355](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L355) |
