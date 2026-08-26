# RewardsSplitPayload

Defined in: [types.ts:193](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L193)

OWR and Split Proxy Params

## Extends

- [`TotalSplitPayload`](../type-aliases/TotalSplitPayload.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="splitrecipients"></a> `splitRecipients` | [`SplitRecipient`](../type-aliases/SplitRecipient.md)[] | The split recipients addresses and splits. | `TotalSplitPayload.splitRecipients` | [types.ts:178](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L178) |
| <a id="obolrafsplit"></a> `ObolRAFSplit?` | `number` | Split percentageNumber allocated for obol retroactive funding, minimum is 1%. | `TotalSplitPayload.ObolRAFSplit` | [types.ts:181](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L181) |
| <a id="distributorfee"></a> `distributorFee?` | `number` | The percentageNumber of accrued rewards that is paid to the caller of the distribution function to compensate them for the gas costs of doing so. Cannot be greater than 10%. For example, 5 represents 5%. | `TotalSplitPayload.distributorFee` | [types.ts:184](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L184) |
| <a id="controlleraddress"></a> `controllerAddress?` | `string` | Address that can mutate the split, should be ZeroAddress for immutable split. | `TotalSplitPayload.controllerAddress` | [types.ts:187](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L187) |
| <a id="principalrecipient"></a> `principalRecipient` | `string` | Address that will reclaim validator principal after exit. | - | [types.ts:195](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L195) |
| <a id="etheramount"></a> `etherAmount` | `number` | Amount needed to deploy all validators expected for the OWR/Splitter configuration. | - | [types.ts:198](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L198) |
| <a id="recoveryaddress"></a> `recoveryAddress?` | `string` | Address that can control where the owr erc-20 tokens can be pushed, if set to zero it goes to splitter or principal address. | - | [types.ts:201](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L201) |
