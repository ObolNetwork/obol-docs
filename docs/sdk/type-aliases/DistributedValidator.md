---
sidebar_label: "DistributedValidator"
slug: /sdk/type-aliases/distributedvalidator
---

# DistributedValidator

> **DistributedValidator** = `object`

Defined in: [types.ts:351](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L351)

A distributed validator within a cluster lock.
Contains the aggregate public key, per-operator public shares, and deposit data.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="distributed_public_key"></a> `distributed_public_key` | `string` | The public key of the distributed validator. | [types.ts:353](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L353) |
| <a id="public_shares"></a> `public_shares` | `string`[] | The public key of the node distributed validator share. | [types.ts:356](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L356) |
| <a id="deposit_data"></a> `deposit_data?` | `Partial`\<[`DepositData`](DepositData.md)\> | The deposit data for activating the DV. | [types.ts:359](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L359) |
| <a id="partial_deposit_data"></a> `partial_deposit_data?` | `Partial`\<[`DepositData`](DepositData.md)\>[] | The deposit data with partial amounts or full amount for activating the DV. | [types.ts:362](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L362) |
| <a id="builder_registration"></a> `builder_registration?` | [`BuilderRegistration`](BuilderRegistration.md) | pre-generated signed validator builder registration to be sent to builder network. | [types.ts:365](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L365) |
