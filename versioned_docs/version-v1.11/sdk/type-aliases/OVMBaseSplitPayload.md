---
sidebar_label: "OVMBaseSplitPayload"
slug: /sdk/type-aliases/ovmbasesplitpayload
---

# OVMBaseSplitPayload

> **OVMBaseSplitPayload** = `object`

Defined in: [types.ts:222](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L222)

Base parameters shared by both OVM split scenarios (rewards-only and total split).
Used with [ObolSplits.createValidatorManagerAndRewardsSplit](../classes/ObolSplits.md#createvalidatormanagerandrewardssplit) and
[ObolSplits.createValidatorManagerAndTotalSplit](../classes/ObolSplits.md#createvalidatormanagerandtotalsplit).

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="rewardsplitrecipients"></a> `rewardSplitRecipients` | [`SplitV2Recipient`](SplitV2Recipient.md)[] | The split recipients addresses and splits. | [types.ts:224](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L224) |
| <a id="ovmowneraddress"></a> `OVMOwnerAddress` | `string` | Owner address for the OVM contract. | [types.ts:227](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L227) |
| <a id="splitowneraddress"></a> `splitOwnerAddress?` | `string` | Owner address for the splitter contracts. | [types.ts:230](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L230) |
| <a id="principalthreshold"></a> `principalThreshold?` | `number` | Principal threshold in ETH for OVM contract. | [types.ts:233](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L233) |
| <a id="distributorfeepercent"></a> `distributorFeePercent?` | `number` | Share of each distribution paid to whoever calls `distribute`, in percent (0 to 6.5535, rounded to the nearest 0.0001). Defaults to 0. | [types.ts:239](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L239) |
