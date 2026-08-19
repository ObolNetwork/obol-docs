# RewardsSplitPayload

OWR and Split Proxy Params

### Extends

* [`TotalSplitPayload`](../type-aliases/TotalSplitPayload.md)

### Properties

| Property             | Type                                                     | Description                                                                                                                                                                                                 | Inherited from                        | Defined in   |
| -------------------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | ------------ |
| `splitRecipients`    | [`SplitRecipient`](../type-aliases/SplitRecipient.md)\[] | The split recipients addresses and splits.                                                                                                                                                                  | `TotalSplitPayload.splitRecipients`   | types.ts:136 |
| `ObolRAFSplit?`      | `number`                                                 | Split percentageNumber allocated for Obol protocol development fee, minimum is 1%.                                                                                                                          | `TotalSplitPayload.ObolRAFSplit`      | types.ts:139 |
| `distributorFee?`    | `number`                                                 | The percentageNumber of accrued rewards that is paid to the caller of the distribution function to compensate them for the gas costs of doing so. Cannot be greater than 10%. For example, 5 represents 5%. | `TotalSplitPayload.distributorFee`    | types.ts:142 |
| `controllerAddress?` | `string`                                                 | Address that can mutate the split, should be ZeroAddress for immutable split.                                                                                                                               | `TotalSplitPayload.controllerAddress` | types.ts:145 |
| `principalRecipient` | `string`                                                 | Address that will reclaim validator principal after exit.                                                                                                                                                   | -                                     | types.ts:153 |
| `etherAmount`        | `number`                                                 | Amount needed to deploy all validators expected for the OWR/Splitter configuration.                                                                                                                         | -                                     | types.ts:156 |
| `recoveryAddress?`   | `string`                                                 | Address that can control where the owr erc-20 tokens can be pushed, if set to zero it goes to splitter or principal address.                                                                                | -                                     | types.ts:159 |
