---
sidebar_label: "ClusterDefinition"
slug: /sdk/interfaces/clusterdefinition
---

# ClusterDefinition

Defined in: [types.ts:131](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L131)

Full cluster definition as stored by the Obol API. Extends [ClusterPayload](../type-aliases/ClusterPayload.md)
with server-generated metadata (uuid, timestamp, config_hash, etc.).

Returned by [Client.createClusterDefinition](../classes/Client.md#createclusterdefinition),
[Client.acceptClusterDefinition](../classes/Client.md#acceptclusterdefinition), and [Client.getClusterDefinition](../classes/Client.md#getclusterdefinition).

## Extends

- [`ClusterPayload`](../type-aliases/ClusterPayload.md)

## Properties

| Property | Type | Description | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="name"></a> `name` | `string` | The cluster name. | - | `ClusterPayload.name` | [types.ts:103](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L103) |
| <a id="operators"></a> `operators` | [`ClusterOperator`](../type-aliases/ClusterOperator.md)[] | The cluster nodes operators addresses. | - | `ClusterPayload.operators` | [types.ts:106](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L106) |
| <a id="validators"></a> `validators` | [`ClusterValidator`](../type-aliases/ClusterValidator.md)[] | The cluster validators information. | - | `ClusterPayload.validators` | [types.ts:109](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L109) |
| <a id="deposit_amounts"></a> `deposit_amounts?` | `string`[] \| `null` | The cluster partial deposits in gwei or 32000000000. | - | `ClusterPayload.deposit_amounts` | [types.ts:112](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L112) |
| <a id="creator"></a> `creator` | [`ClusterCreator`](../type-aliases/ClusterCreator.md) | The creator of the cluster. | - | - | [types.ts:133](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L133) |
| <a id="version"></a> `version` | `string` | The cluster configuration version. | - | - | [types.ts:136](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L136) |
| <a id="dkg_algorithm"></a> `dkg_algorithm` | `string` | The cluster dkg algorithm. | - | - | [types.ts:139](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L139) |
| <a id="fork_version"></a> `fork_version` | `string` | The cluster fork version. | - | - | [types.ts:142](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L142) |
| <a id="uuid"></a> `uuid` | `string` | The cluster uuid. | - | - | [types.ts:145](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L145) |
| <a id="timestamp"></a> `timestamp` | `string` | The cluster creation timestamp. | - | - | [types.ts:148](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L148) |
| <a id="config_hash"></a> `config_hash` | `string` | The cluster configuration hash. | - | - | [types.ts:151](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L151) |
| <a id="threshold"></a> `threshold` | `number` | The distributed validator threshold. | - | - | [types.ts:154](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L154) |
| <a id="num_validators"></a> `num_validators` | `number` | The number of distributed validators in the cluster. | - | - | [types.ts:157](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L157) |
| <a id="definition_hash"></a> `definition_hash?` | `string` | The hash of the cluster definition. | - | - | [types.ts:160](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L160) |
| <a id="consensus_protocol"></a> `consensus_protocol?` | `string` | The consensus protocol e.g qbft. | `ClusterPayload.consensus_protocol` | - | [types.ts:163](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L163) |
| <a id="target_gas_limit"></a> `target_gas_limit?` | `number` | The target gas limit where default is 36M. | `ClusterPayload.target_gas_limit` | - | [types.ts:166](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L166) |
| <a id="compounding"></a> `compounding?` | `boolean` | A withdrawal mechanism with 0x02 withdrawal credentials. | `ClusterPayload.compounding` | - | [types.ts:169](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L169) |
