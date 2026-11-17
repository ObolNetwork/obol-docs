---
sidebar_label: "ValidatorDeposit"
slug: /sdk/type-aliases/validatordeposit
---

# ValidatorDeposit

> **ValidatorDeposit** = `object`

Defined in: [types.ts:787](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L787)

One deposit as taken by [EOA.deposit](../classes/EOA.md#deposit) and [ObolSplits.deposit](../classes/ObolSplits.md#deposit),
and as returned by [Client.getDepositData](../classes/Client.md#getdepositdata) (`amount` in wei).

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="pubkey"></a> `pubkey` | `string` | Validator public key in hex format (48 bytes) | [types.ts:789](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L789) |
| <a id="withdrawal_credentials"></a> `withdrawal_credentials` | `string` | Withdrawal credentials in hex format | [types.ts:791](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L791) |
| <a id="signature"></a> `signature` | `string` | Deposit signature in hex format | [types.ts:793](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L793) |
| <a id="deposit_data_root"></a> `deposit_data_root` | `string` | Deposit data root in hex format (32 bytes) | [types.ts:795](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L795) |
| <a id="amount"></a> `amount` | `string` | Deposit amount in wei as string | [types.ts:797](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L797) |
