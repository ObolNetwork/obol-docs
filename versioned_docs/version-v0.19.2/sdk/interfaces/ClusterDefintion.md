Cluster definition data needed for dkg

## Extends

- [`ClusterPayload`](../type-aliases/ClusterPayload.md)

## Properties

| Property | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ |
| `name` | `string` | The cluster name. | `ClusterPayload.name` |
| `operators` | [`ClusterOperator`](../type-aliases/ClusterOperator.md)[] | The cluster nodes operators addresses. | `ClusterPayload.operators` |
| `validators` | [`ClusterValidator`](../type-aliases/ClusterValidator.md)[] | The clusters validators information. | `ClusterPayload.validators` |
| `creator` | [`ClusterCreator`](../type-aliases/ClusterCreator.md) | The creator of the cluster. | - |
| `version` | `string` | The cluster configuration version. | - |
| `dkg_algorithm` | `string` | The cluster dkg algorithm. | - |
| `fork_version` | `string` | The cluster fork version. | - |
| `uuid` | `string` | The cluster uuid. | - |
| `timestamp` | `string` | The cluster creation timestamp. | - |
| `config_hash` | `string` | The cluster configuration hash. | - |
| `threshold` | `number` | The distributed validator threshold. | - |
| `num_validators` | `number` | The number of distributed validators in the cluster. | - |
| `definition_hash?` | `string` | The hash of the cluster definition. | - |
