---
sidebar_label: "DepositData"
slug: /sdk/type-aliases/depositdata
---

# DepositData

> **DepositData** = `object`

Defined in: [types.ts:330](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L330)

Required deposit data for validator activation

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="pubkey"></a> `pubkey` | `string` | The public key of the distributed validator. | [types.ts:332](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L332) |
| <a id="withdrawal_credentials"></a> `withdrawal_credentials` | `string` | The 0x01 withdrawal address of the DV. | [types.ts:335](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L335) |
| <a id="amount"></a> `amount` | `string` | 32 ethers. | [types.ts:338](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L338) |
| <a id="deposit_data_root"></a> `deposit_data_root` | `string` | A checksum for DepositData fields . | [types.ts:341](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L341) |
| <a id="signature"></a> `signature` | `string` | BLS signature of the deposit message. | [types.ts:344](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L344) |
