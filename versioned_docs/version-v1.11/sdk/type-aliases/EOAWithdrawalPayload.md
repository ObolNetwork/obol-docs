---
sidebar_label: "EOAWithdrawalPayload"
slug: /sdk/type-aliases/eoawithdrawalpayload
---

# EOAWithdrawalPayload

> **EOAWithdrawalPayload** = `object`

Defined in: [types.ts:768](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L768)

Input payload for [EOA.requestWithdrawal](../classes/EOA.md#requestwithdrawal).

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="pubkey"></a> `pubkey` | `string` | Validator public key in hex format | [types.ts:770](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L770) |
| <a id="allocation"></a> `allocation` | `number` | Withdrawal amount in ETH | [types.ts:773](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L773) |
| <a id="requiredfee"></a> `requiredFee?` | `string` | Fee in wei. Optional: if omitted, the current EIP-7002 fee is sent (the contract does not refund excess, so no headroom is added). If given, it must cover the current fee and be at most max(10x the current fee, 1 gwei). | [types.ts:780](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L780) |
