---
sidebar_label: "RewardsSplitPayload"
slug: /sdk/interfaces/rewardssplitpayload
---

# RewardsSplitPayload

Defined in: [types.ts:206](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L206)

Input payload for [Client.createObolRewardsSplit](../classes/Client.md#createobolrewardssplit).
Deploys an OWR (principal goes to one address) and a splitter (rewards split among recipients).

## Extends

- [`TotalSplitPayload`](../type-aliases/TotalSplitPayload.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="splitrecipients"></a> `splitRecipients` | [`SplitRecipient`](../type-aliases/SplitRecipient.md)[] | The split recipients addresses and splits. | `TotalSplitPayload.splitRecipients` | [types.ts:190](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L190) |
| <a id="obolrafsplit"></a> `ObolRAFSplit?` | `number` | Split percentageNumber allocated for obol retroactive funding, minimum is 1%. | `TotalSplitPayload.ObolRAFSplit` | [types.ts:193](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L193) |
| <a id="distributorfee"></a> `distributorFee?` | `number` | The percentageNumber of accrued rewards that is paid to the caller of the distribution function to compensate them for the gas costs of doing so. Cannot be greater than 10%. For example, 5 represents 5%. | `TotalSplitPayload.distributorFee` | [types.ts:196](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L196) |
| <a id="controlleraddress"></a> `controllerAddress?` | `string` | Address that can mutate the split, should be ZeroAddress for immutable split. | `TotalSplitPayload.controllerAddress` | [types.ts:199](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L199) |
| <a id="principalrecipient"></a> `principalRecipient` | `string` | Address that will reclaim validator principal after exit. | - | [types.ts:208](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L208) |
| <a id="etheramount"></a> `etherAmount` | `number` | Amount needed to deploy all validators expected for the OWR/Splitter configuration. | - | [types.ts:211](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L211) |
| <a id="recoveryaddress"></a> `recoveryAddress?` | `string` | Address that can control where the owr erc-20 tokens can be pushed, if set to zero it goes to splitter or principal address. | - | [types.ts:214](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L214) |
