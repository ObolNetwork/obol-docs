---
sidebar_label: "OVMRequestWithdrawalPayload"
slug: /sdk/type-aliases/ovmrequestwithdrawalpayload
---

# OVMRequestWithdrawalPayload

> **OVMRequestWithdrawalPayload** = `object`

Defined in: [types.ts:739](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L739)

Input payload for [ObolSplits.requestWithdrawal](../classes/ObolSplits.md#requestwithdrawal).
Requests withdrawal of validator funds from an OVM contract.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="withdrawalfees"></a> `withdrawalFees?` | `string` | Total withdrawal request fees in wei for all `pubKeys`. Optional: if omitted, twice the current EIP-7002 fee per request is sent. If given, it must cover the current fee and be at most max(10x the current fee, 1 gwei) per request. Any excess is refunded to `excessFeeRecipient`. | [types.ts:746](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L746) |
| <a id="ovmaddress"></a> `ovmAddress` | `string` | OVM contract address | [types.ts:749](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L749) |
| <a id="excessfeerecipient"></a> `excessFeeRecipient?` | `string` | Address the OVM refunds unused withdrawal fees to. Defaults to the signer's address. A refund sent to the OVM itself would be distributed as rewards. | [types.ts:756](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L756) |
| <a id="pubkeys"></a> `pubKeys` | `string`[] | Array of validator public keys in bytes format | [types.ts:759](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L759) |
| <a id="amounts"></a> `amounts` | `string`[] | Array of withdrawal amounts in gwei (uint64) as strings | [types.ts:762](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L762) |
