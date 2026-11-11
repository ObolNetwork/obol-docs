---
sidebar_label: "ClusterPayload"
slug: /sdk/type-aliases/clusterpayload
---

# ClusterPayload

> **ClusterPayload** = `object`

Defined in: [types.ts:101](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L101)

Input payload for creating a new cluster definition via
[Client.createClusterDefinition](../classes/Client.md#createclusterdefinition).

Required fields: `name`, `operators`, `validators`.
Optional fields have sensible defaults applied by the SDK.

## Extended by

- [`ClusterDefinition`](../interfaces/ClusterDefinition.md)

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="name"></a> `name` | `string` | The cluster name. | [types.ts:103](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L103) |
| <a id="operators"></a> `operators` | [`ClusterOperator`](ClusterOperator.md)[] | The cluster nodes operators addresses. | [types.ts:106](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L106) |
| <a id="validators"></a> `validators` | [`ClusterValidator`](ClusterValidator.md)[] | The cluster validators information. | [types.ts:109](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L109) |
| <a id="deposit_amounts"></a> `deposit_amounts?` | `string`[] \| `null` | The cluster partial deposits in gwei or 32000000000. | [types.ts:112](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L112) |
| <a id="compounding"></a> `compounding?` | `boolean` | A withdrawal mechanism with 0x02 withdrawal credentials. | [types.ts:115](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L115) |
| <a id="target_gas_limit"></a> `target_gas_limit?` | `number` | The target gas limit where default is 36M. | [types.ts:118](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L118) |
| <a id="consensus_protocol"></a> `consensus_protocol?` | `string` | The consensus protocol e.g qbft. | [types.ts:121](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L121) |
