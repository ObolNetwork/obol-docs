Cluster definition data needed for dkg

## Extends

- [`ClusterPayload`](../type-aliases/ClusterPayload.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `name` | `string` | The cluster name. | `ClusterPayload.name` | types.ts:73 |
| `operators` | [`ClusterOperator`](../type-aliases/ClusterOperator.md)[] | The cluster nodes operators addresses. | `ClusterPayload.operators` | types.ts:76 |
| `validators` | [`ClusterValidator`](../type-aliases/ClusterValidator.md)[] | The cluster validators information. | `ClusterPayload.validators` | types.ts:79 |
| `deposit_amounts?` | `null` \| `string`[] | The cluster partial deposits in gwei or 32000000000. | `ClusterPayload.deposit_amounts` | types.ts:82 |
| `creator` | [`ClusterCreator`](../type-aliases/ClusterCreator.md) | The creator of the cluster. | - | types.ts:90 |
| `version` | `string` | The cluster configuration version. | - | types.ts:93 |
| `dkg_algorithm` | `string` | The cluster dkg algorithm. | - | types.ts:96 |
| `fork_version` | `string` | The cluster fork version. | - | types.ts:99 |
| `uuid` | `string` | The cluster uuid. | - | types.ts:102 |
| `timestamp` | `string` | The cluster creation timestamp. | - | types.ts:105 |
| `config_hash` | `string` | The cluster configuration hash. | - | types.ts:108 |
| `threshold` | `number` | The distributed validator threshold. | - | types.ts:111 |
| `num_validators` | `number` | The number of distributed validators in the cluster. | - | types.ts:114 |
| `definition_hash?` | `string` | The hash of the cluster definition. | - | types.ts:117 |
