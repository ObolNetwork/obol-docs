# ClusterDefinition

Cluster definition data needed for dkg

### Extends

* [`ClusterPayload`](clusterpayload.md)

### Properties

| Property           | Type                                         | Description                                          | Overrides                                               | Inherited from                                          |
| ------------------ | -------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `name`             | `string`                                     | The cluster name.                                    | [`ClusterPayload`](clusterpayload.md).`name`            | [`ClusterPayload`](clusterpayload.md).`name`            |
| `operators`        | [`ClusterOperator`](clusteroperator.md)\[]   | The cluster nodes operators addresses.               | [`ClusterPayload`](clusterpayload.md).`operators`       | [`ClusterPayload`](clusterpayload.md).`operators`       |
| `validators`       | [`ClusterValidator`](clustervalidator.md)\[] | The cluster validators information.                  | [`ClusterPayload`](clusterpayload.md).`validators`      | [`ClusterPayload`](clusterpayload.md).`validators`      |
| `creator`          | [`ClusterCreator`](clustercreator.md)        | The creator of the cluster.                          | -                                                       | -                                                       |
| `version`          | `string`                                     | The cluster configuration version.                   | -                                                       | -                                                       |
| `dkg_algorithm`    | `string`                                     | The cluster dkg algorithm.                           | -                                                       | -                                                       |
| `fork_version`     | `string`                                     | The cluster fork version.                            | -                                                       | -                                                       |
| `uuid`             | `string`                                     | The cluster uuid.                                    | -                                                       | -                                                       |
| `timestamp`        | `string`                                     | The cluster creation timestamp.                      | -                                                       | -                                                       |
| `config_hash`      | `string`                                     | The cluster configuration hash.                      | -                                                       | -                                                       |
| `threshold`        | `number`                                     | The distributed validator threshold.                 | -                                                       | -                                                       |
| `num_validators`   | `number`                                     | The number of distributed validators in the cluster. | -                                                       | -                                                       |
| `deposit_amounts?` | `string`\[]                                  | The cluster partial deposits in gwei or 32000000000. | [`ClusterPayload`](clusterpayload.md).`deposit_amounts` | [`ClusterPayload`](clusterpayload.md).`deposit_amounts` |
| `definition_hash?` | `string`                                     | The hash of the cluster definition.                  | -                                                       | -                                                       |
