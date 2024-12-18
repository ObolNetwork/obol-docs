# ClusterDefintion

Cluster Definition

### Extends

* [`ClusterPayload`](clusterpayload.md)

### Properties

| Property           | Type                                                         | Description                                          | Inherited from                                     |
| ------------------ | ------------------------------------------------------------ | ---------------------------------------------------- | -------------------------------------------------- |
| `config_hash`      | `string`                                                     | The cluster configuration hash.                      | -                                                  |
| `creator`          | [`ClusterCreator`](../type-aliases/clustercreator.md)        | The creator of the cluster.                          | -                                                  |
| `definition_hash?` | `string`                                                     | The hash of the cluster definition.                  | -                                                  |
| `dkg_algorithm`    | `string`                                                     | The cluster dkg algorithm.                           | -                                                  |
| `fork_version`     | `string`                                                     | The cluster fork version.                            | -                                                  |
| `name`             | `string`                                                     | The cluster name.                                    | [`ClusterPayload`](clusterpayload.md).`name`       |
| `num_validators`   | `number`                                                     | The number of distributed validators in the cluster. | -                                                  |
| `operators`        | [`ClusterOperator`](../type-aliases/clusteroperator.md)\[]   | The cluster nodes operators addresses.               | [`ClusterPayload`](clusterpayload.md).`operators`  |
| `threshold`        | `number`                                                     | The distributed validator threshold.                 | -                                                  |
| `timestamp`        | `string`                                                     | The cluster creation timestamp.                      | -                                                  |
| `uuid`             | `string`                                                     | The cluster uuid.                                    | -                                                  |
| `validators`       | [`ClusterValidator`](../type-aliases/clustervalidator.md)\[] | The clusters validators information.                 | [`ClusterPayload`](clusterpayload.md).`validators` |
| `version`          | `string`                                                     | The cluster configuration version.                   | -                                                  |
