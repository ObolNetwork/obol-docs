# HttpRequestFunc()

> **HttpRequestFunc** = (`url`, `config?`) => `Promise`\<`any`\>

Defined in: [types.ts:558](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L558)

Generic HTTP request function type.
Args:
 url: string - The URL to request.
 config?: Record\<string, any> - Optional request configuration (e.g., method, headers, body for POST).
Returns:
 Promise\<any> - The response data.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |
| `config?` | `Record`\<`string`, `any`\> |

## Returns

`Promise`\<`any`\>
