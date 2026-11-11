---
sidebar_label: "ObolApiErrorInit"
slug: /sdk/interfaces/obolapierrorinit
---

# ObolApiErrorInit

Defined in: [errors.ts:19](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/errors.ts#L19)

Options for constructing an [ObolApiError](../classes/ObolApiError.md).

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="status"></a> `status` | `number` | HTTP status code of the response. | [errors.ts:21](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/errors.ts#L21) |
| <a id="endpoint"></a> `endpoint` | `string` | Request path relative to the base URL (e.g. `/v1/definition`). | [errors.ts:23](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/errors.ts#L23) |
| <a id="method"></a> `method?` | `string` | HTTP method of the request. Defaults to `GET`. | [errors.ts:25](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/errors.ts#L25) |
| <a id="body"></a> `body?` | `unknown` | Parsed JSON error body, or the raw text when the body is not JSON. | [errors.ts:27](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/errors.ts#L27) |
| <a id="hint"></a> `hint?` | `string` | Short, actionable suggestion for the caller. | [errors.ts:29](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/errors.ts#L29) |
| <a id="headers"></a> `headers?` | `Pick`\<`Headers`, `"get"`\> | Response headers, read for `X-Request-Id` ([ObolApiError.requestId](../classes/ObolApiError.md#requestid)) and, on a 429, `Retry-After` ([RateLimitError.retryAfterSeconds](../classes/RateLimitError.md#retryafterseconds)). | [errors.ts:34](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/errors.ts#L34) |
