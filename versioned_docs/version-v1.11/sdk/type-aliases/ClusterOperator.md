---
sidebar_label: "ClusterOperator"
slug: /sdk/type-aliases/clusteroperator
---

# ClusterOperator

> **ClusterOperator** = `object`

Defined in: [types.ts:41](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L41)

Represents a node operator in a distributed validator cluster.

When creating a cluster definition via [Client.createClusterDefinition](../classes/Client.md#createclusterdefinition),
only `address` is required. The remaining fields are populated during the
cluster acceptance and DKG process.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="address"></a> `address` | `string` | The operator address. | [types.ts:43](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L43) |
| <a id="enr"></a> `enr?` | `string` | The operator ethereum node record. | [types.ts:46](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L46) |
| <a id="fork_version"></a> `fork_version?` | `string` | The cluster fork_version. | [types.ts:49](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L49) |
| <a id="version"></a> `version?` | `string` | The cluster version. | [types.ts:52](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L52) |
| <a id="enr_signature"></a> `enr_signature?` | `string` | The operator enr signature. | [types.ts:55](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L55) |
| <a id="config_signature"></a> `config_signature?` | `string` | The operator configuration signature. | [types.ts:58](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L58) |
