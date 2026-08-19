# TotalSplitPayload

> **TotalSplitPayload**: `object`

Split Proxy Params

### Type declaration

| Name                 | Type                                     | Description                                                                                                                                                                                                 | Defined in   |
| -------------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `splitRecipients`    | [`SplitRecipient`](SplitRecipient.md)\[] | The split recipients addresses and splits.                                                                                                                                                                  | types.ts:136 |
| `ObolRAFSplit`?      | `number`                                 | Split percentageNumber allocated for Obol protocol development fee, minimum is 1%.                                                                                                                          | types.ts:139 |
| `distributorFee`?    | `number`                                 | The percentageNumber of accrued rewards that is paid to the caller of the distribution function to compensate them for the gas costs of doing so. Cannot be greater than 10%. For example, 5 represents 5%. | types.ts:142 |
| `controllerAddress`? | `string`                                 | Address that can mutate the split, should be ZeroAddress for immutable split.                                                                                                                               | types.ts:145 |

### Defined in

types.ts:134
