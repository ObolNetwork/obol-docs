# ClusterPayload

Cluster configuration

### Extended by

* [`ClusterDefinition`](clusterdefinition.md)

### Properties

| Property           | Type                                         | Description                                          |
| ------------------ | -------------------------------------------- | ---------------------------------------------------- |
| `name`             | `string`                                     | The cluster name.                                    |
| `operators`        | [`ClusterOperator`](clusteroperator.md)\[]   | The cluster nodes operators addresses.               |
| `validators`       | [`ClusterValidator`](clustervalidator.md)\[] | The cluster validators information.                  |
| `deposit_amounts?` | `string`\[]                                  | The cluster partial deposits in gwei or 32000000000. |
