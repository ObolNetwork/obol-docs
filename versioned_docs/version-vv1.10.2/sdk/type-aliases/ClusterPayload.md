> **ClusterPayload**: `object`

Cluster configuration

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `name` | `string` | The cluster name. | types.ts:73 |
| `operators` | [`ClusterOperator`](ClusterOperator.md)[] | The cluster nodes operators addresses. | types.ts:76 |
| `validators` | [`ClusterValidator`](ClusterValidator.md)[] | The cluster validators information. | types.ts:79 |
| `deposit_amounts`? | `string`[] \| `null` | The cluster partial deposits in gwei or 32000000000. | types.ts:82 |

## Defined in

types.ts:71
