Cluster configuration

## Extended by

- [`ClusterDefinition`](ClusterDefinition.md)

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The cluster name. |
| `operators` | [`ClusterOperator`](ClusterOperator.md)[] | The cluster nodes operators addresses. |
| `validators` | [`ClusterValidator`](ClusterValidator.md)[] | The cluster validators information. |
| `deposit_amounts?` | `string`[] | The cluster partial deposits in gwei or 32000000000. |
