---
sidebar_label: "getWithdrawalRequestFee"
slug: /sdk/functions/getwithdrawalrequestfee
---

# getWithdrawalRequestFee()

> **getWithdrawalRequestFee**(`provider`, `contractAddress?`): `Promise`\<`bigint`\>

Defined in: [withdrawalFee.ts:19](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/withdrawalFee.ts#L19)

Reads the current per-request fee (wei) from the EIP-7002 withdrawal
request contract. A call with empty calldata returns the fee.

## Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `provider` | `Provider` | `undefined` |
| `contractAddress` | `string` | `WITHDRAWAL_REQUEST_CONTRACT_ADDRESS` |

## Returns

`Promise`\<`bigint`\>
