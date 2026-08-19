---
sidebar_label: "ClusterPayload"
slug: /sdk/type-aliases/clusterpayload
---

# ClusterPayload

> **ClusterPayload** = `object`

Defined in: [types.ts:95](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L95)

Cluster configuration

## Extended by

* [`ClusterDefinition`](../interfaces/ClusterDefinition.md)

## Properties

| Property              | Type                                         | Description                                              | Defined in                                                                                                              |
| --------------------- | -------------------------------------------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `name`                | `string`                                     | The cluster name.                                        | [types.ts:97](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L97)   |
| `operators`           | [`ClusterOperator`](ClusterOperator.md)\[]   | The cluster nodes operators addresses.                   | [types.ts:100](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L100) |
| `validators`          | [`ClusterValidator`](ClusterValidator.md)\[] | The cluster validators information.                      | [types.ts:103](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L103) |
| `deposit_amounts?`    | `string`\[] \| `null`                        | The cluster partial deposits in gwei or 32000000000.     | [types.ts:106](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L106) |
| `compounding?`        | `boolean`                                    | A withdrawal mechanism with 0x02 withdrawal credentials. | [types.ts:109](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L109) |
| `target_gas_limit?`   | `number`                                     | The target gas limit where default is 36M.               | [types.ts:112](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L112) |
| `consensus_protocol?` | `string`                                     | The consensus protocol e.g qbft.                         | [types.ts:115](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L115) |
