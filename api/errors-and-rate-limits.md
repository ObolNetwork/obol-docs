# Errors & Rate Limits

This page describes how the Obol API reports errors and what it expects from clients that call it. The [API reference](pathname:///api/) lists the status codes each endpoint can return.

## Error responses {#error-responses}

Every error response has a JSON body with at least a `statusCode` and a `message`:

```json
{
  "statusCode": 404,
  "message": "Data is not found"
}
```

* `statusCode` repeats the HTTP status code.
* `message` is a human-readable description. Request validation failures can return `message` as an array of strings, one per problem.
* Some responses carry extra fields, such as `error` with the status name (`"Not Found"`).

Branch on the HTTP status code rather than on the `message` text, which is meant for people and may be reworded.

### Status codes {#status-codes}

| Status | Meaning | What to do |
|--------|---------|------------|
| `400` | The request is invalid, for example a malformed address, an unsupported network or a body that fails validation. | Fix the request; retrying it unchanged will fail again. |
| `401`, `403` | A required signature or authorization is missing or doesn't verify. | Check what you signed and who signed it. |
| `404` | The resource doesn't exist on this API, for example a cluster lock that has not been published. | Check the identifier, and that the resource was published to the API you are calling. |
| `409` | The request conflicts with data the API already holds, for example publishing something that already exists. | Fetch the existing resource instead of creating it again. |
| `429` | Too many requests from your client. | Wait for the `Retry-After` period, then retry. See [Rate limits](#rate-limits). |
| `500` | An unexpected error in the API. The body is always `{"statusCode": 500, "message": "Internal server error"}`; details are not exposed. | Retry later with backoff. If it persists, contact support with the time of the request and the endpoint. |
| `502`, `503`, `504` | An upstream dependency, such as a beacon node, is unavailable or the API is temporarily over capacity. The `message` describes the problem. | Retry later with backoff. |

## Rate limits {#rate-limits}

Requests may be rate limited. When a client sends too many requests, the API answers `429 Too Many Requests` with a `Retry-After` header giving the number of seconds to wait.

* Honour `Retry-After` before retrying. Without it, back off exponentially.
* Limits apply per client and can change at any time, so don't hard-code them. Design your client to cope with a `429` on any request.
* Don't poll faster than the data changes. Cluster state changes at most once per slot (12 seconds), and exit status responses can be a few seconds old.
* Page through large lists sequentially rather than in parallel.

## Identify your client {#user-agent}

Send a descriptive `User-Agent` header that names your tool, its version and, ideally, a way to contact you, for example:

```text
User-Agent: my-cluster-monitor/1.4.0 (+https://example.com/contact)
```

This lets Obol tell your traffic apart from anonymous scrapers and reach you if your client misbehaves. Charon and `lido-dv-exit` already send their own `User-Agent`.

## Pagination {#pagination}

Most endpoints that take `page` and `limit` query parameters return at most 100 items per page, and treat a `limit` outside the range 1 to 100 as the nearest end of that range. A few endpoints check `limit` strictly instead: they reject a value that isn't a positive whole number, or is above 1000, with `400 Bad Request`. Some of these, such as the detailed TVS endpoint, return up to 1000 items per page.
