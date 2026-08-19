# validateClusterLock()

> **validateClusterLock**(`lock`, `safeRpcUrl?`): `Promise`\<`boolean`\>

Defined in: [services.ts:14](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/services.ts#L14)

Verifies Cluster Lock's validity.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `lock` | [`ClusterLock`](../type-aliases/ClusterLock.md) | cluster lock |
| `safeRpcUrl?` | `string` | optional safeRpcUrl for safe wallet verification |

## Returns

`Promise`\<`boolean`\>

boolean result to indicate if lock is valid

## Throws

on missing keys or values.

An example of how to use validateClusterLock:
[validateClusterLock](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts#L127)
