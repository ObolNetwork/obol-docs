---
sidebar_label: "ClusterDefinition"
slug: /sdk/interfaces/clusterdefinition
---

# ClusterDefinition

Defined in: [types.ts:121](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L121)

Cluster definition data needed for dkg

## Extends

* [`ClusterPayload`](../type-aliases/ClusterPayload.md)

## Properties

| Property              | Type                                                         | Description                                              | Overrides                           | Inherited from                   | Defined in                                                                                                              |
| --------------------- | ------------------------------------------------------------ | -------------------------------------------------------- | ----------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `name`                | `string`                                                     | The cluster name.                                        | -                                   | `ClusterPayload.name`            | [types.ts:97](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L97)   |
| `operators`           | [`ClusterOperator`](../type-aliases/ClusterOperator.md)\[]   | The cluster nodes operators addresses.                   | -                                   | `ClusterPayload.operators`       | [types.ts:100](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L100) |
| `validators`          | [`ClusterValidator`](../type-aliases/ClusterValidator.md)\[] | The cluster validators information.                      | -                                   | `ClusterPayload.validators`      | [types.ts:103](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L103) |
| `deposit_amounts?`    | `string`\[] \| `null`                                        | The cluster partial deposits in gwei or 32000000000.     | -                                   | `ClusterPayload.deposit_amounts` | [types.ts:106](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L106) |
| `creator`             | [`ClusterCreator`](../type-aliases/ClusterCreator.md)        | The creator of the cluster.                              | -                                   | -                                | [types.ts:123](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L123) |
| `version`             | `string`                                                     | The cluster configuration version.                       | -                                   | -                                | [types.ts:126](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L126) |
| `dkg_algorithm`       | `string`                                                     | The cluster dkg algorithm.                               | -                                   | -                                | [types.ts:129](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L129) |
| `fork_version`        | `string`                                                     | The cluster fork version.                                | -                                   | -                                | [types.ts:132](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L132) |
| `uuid`                | `string`                                                     | The cluster uuid.                                        | -                                   | -                                | [types.ts:135](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L135) |
| `timestamp`           | `string`                                                     | The cluster creation timestamp.                          | -                                   | -                                | [types.ts:138](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L138) |
| `config_hash`         | `string`                                                     | The cluster configuration hash.                          | -                                   | -                                | [types.ts:141](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L141) |
| `threshold`           | `number`                                                     | The distributed validator threshold.                     | -                                   | -                                | [types.ts:144](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L144) |
| `num_validators`      | `number`                                                     | The number of distributed validators in the cluster.     | -                                   | -                                | [types.ts:147](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L147) |
| `definition_hash?`    | `string`                                                     | The hash of the cluster definition.                      | -                                   | -                                | [types.ts:150](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L150) |
| `consensus_protocol?` | `string`                                                     | The consensus protocol e.g qbft.                         | `ClusterPayload.consensus_protocol` | -                                | [types.ts:153](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L153) |
| `target_gas_limit?`   | `number`                                                     | The target gas limit where default is 36M.               | `ClusterPayload.target_gas_limit`   | -                                | [types.ts:156](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L156) |
| `compounding?`        | `boolean`                                                    | A withdrawal mechanism with 0x02 withdrawal credentials. | `ClusterPayload.compounding`        | -                                | [types.ts:159](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L159) |
