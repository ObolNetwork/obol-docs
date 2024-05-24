Cluster definition data needed for dkg

## Extends

- [`ClusterPayload`](ClusterPayload.md)

## Properties

| Property | Type | Description | Overrides | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `name` | `string` | The cluster name. | [`ClusterPayload`](ClusterPayload.md).`name` | [`ClusterPayload`](ClusterPayload.md).`name` |
| `operators` | [`ClusterOperator`](ClusterOperator.md)[] | The cluster nodes operators addresses. | [`ClusterPayload`](ClusterPayload.md).`operators` | [`ClusterPayload`](ClusterPayload.md).`operators` |
| `validators` | [`ClusterValidator`](ClusterValidator.md)[] | The cluster validators information. | [`ClusterPayload`](ClusterPayload.md).`validators` | [`ClusterPayload`](ClusterPayload.md).`validators` |
| `creator` | [`ClusterCreator`](ClusterCreator.md) | The creator of the cluster. | - | - |
| `version` | `string` | The cluster configuration version. | - | - |
| `dkg_algorithm` | `string` | The cluster dkg algorithm. | - | - |
| `fork_version` | `string` | The cluster fork version. | - | - |
| `uuid` | `string` | The cluster uuid. | - | - |
| `timestamp` | `string` | The cluster creation timestamp. | - | - |
| `config_hash` | `string` | The cluster configuration hash. | - | - |
| `threshold` | `number` | The distributed validator threshold. | - | - |
| `num_validators` | `number` | The number of distributed validators in the cluster. | - | - |
| `deposit_amounts?` | `string`[] | The cluster partial deposits in gwei or 32000000000. | [`ClusterPayload`](ClusterPayload.md).`deposit_amounts` | [`ClusterPayload`](ClusterPayload.md).`deposit_amounts` |
| `definition_hash?` | `string` | The hash of the cluster definition. | - | - |
