# DV Exit

These endpoints store and serve the partial exit signatures that [`charon exit`](../run-a-dv/running/exit-a-dv.mdx) and `lido-dv-exit` submit.

:::warning[The cluster lock must be published first]
The API only stores partial exits for clusters whose cluster lock has been published to it. `charon dkg --publish` publishes the lock; otherwise publish it by POSTing `cluster-lock.json` to `/v1/lock` (see [Publish the cluster lock first](../run-a-dv/running/exit-a-dv.mdx#publish-the-cluster-lock)).

Posting partial exits for a lock that isn't published returns `404` with the message `cluster lock is not found: <lockHash> is not published to this API`, and nothing is stored.
:::

* The exit status endpoints return `404` for a lock hash the API doesn't know.
* The exit status endpoint is paginated with `page` and `limit`; `limit` is clamped to 1–100.
* See [Errors & Rate Limits](errors-and-rate-limits.md) for the error format and how to handle `429` responses.

<ApiEndpoint method="get" path="/v1/exp/exit/{lockHash}/{shareIdx}/{validatorPubkey}" summary="Retrieve Distributed Validator threshold aggregated signed exit msg" href="/api#tag/DV-Exit/operation/ExitController_getClusterExit[1]_v1" />

<ApiEndpoint method="get" path="/v1/exp/exit/status/{lockHash}" summary="Retrieve validators exit status" href="/api#tag/DV-Exit/operation/ExitController_getClusterExitStatus[1]_v1" />

<ApiEndpoint method="get" path="/v1/exp/exit/status/summary/{lockHash}" summary="Retrieve validators exit status summary" href="/api#tag/DV-Exit/operation/ExitController_getClusterExitStatusSummary[1]_v1" />

<ApiEndpoint method="post" path="/v1/exp/partial_exits/{lockHash}" summary="Push Distributed Validator partial signed exit message" href="/api#tag/DV-Exit/operation/ExitController_postPartialExit[1]_v1" />
