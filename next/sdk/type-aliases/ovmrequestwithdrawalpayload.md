# OVMRequestWithdrawalPayload

> **OVMRequestWithdrawalPayload** = `object`

Defined in: [types.ts:620](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L620)

Payload for requesting withdrawal from OVM contract

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="withdrawalfees"></a> `withdrawalFees` | `string` | request withdrawal fees in wei | [types.ts:622](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L622) |
| <a id="ovmaddress"></a> `ovmAddress` | `string` | OVM contract address | [types.ts:625](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L625) |
| <a id="pubkeys"></a> `pubKeys` | `string`[] | Array of validator public keys in bytes format | [types.ts:628](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L628) |
| <a id="amounts"></a> `amounts` | `string`[] | Array of withdrawal amounts in gwei (uint64) as strings | [types.ts:631](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L631) |
