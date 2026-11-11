---
sidebar_label: "HttpRequestFunc"
slug: /sdk/type-aliases/httprequestfunc
---

# HttpRequestFunc

> **HttpRequestFunc** = (`url`, `config?`) => `Promise`\<`any`\>

Defined in: [types.ts:676](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L676)

Generic HTTP request function type.
Args:
 url: string - The URL to request.
 config?: Record<string, any> - Optional request configuration (e.g., method, headers, body for POST).
Returns:
 Promise<any> - The response data.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |
| `config?` | `Record`\<`string`, `any`\> |

## Returns

`Promise`\<`any`\>
