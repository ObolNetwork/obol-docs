---
sidebar_label: "ClaimableIncentives"
slug: /sdk/type-aliases/claimableincentives
---

# ClaimableIncentives

> **ClaimableIncentives** = `object`

Defined in: [types.ts:396](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L396)

Claimable Obol Incentives

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="operator_address"></a> `operator_address` | `string` | Operator Address. | [types.ts:398](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L398) |
| <a id="amount"></a> `amount` | `string` | The amount the recipient is entitled to. | [types.ts:401](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L401) |
| <a id="index"></a> `index` | `number` | The recipient's index in the Merkle tree. | [types.ts:404](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L404) |
| <a id="merkle_proof"></a> `merkle_proof` | `string`[] | The Merkle proof (an array of hashes) generated for the recipient. | [types.ts:407](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L407) |
| <a id="contract_address"></a> `contract_address` | `string` | The MerkleDistributor contract address. | [types.ts:410](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L410) |
