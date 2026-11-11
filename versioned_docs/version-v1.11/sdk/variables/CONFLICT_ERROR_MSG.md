---
sidebar_label: "CONFLICT_ERROR_MSG"
slug: /sdk/variables/conflict_error_msg
---

# ~~CONFLICT\_ERROR\_MSG~~

> `const` **CONFLICT\_ERROR\_MSG**: `"Conflict"` = `'Conflict'`

Defined in: [constants.ts:24](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/constants.ts#L24)

## Deprecated

Conflicts are detected by HTTP status (409) and thrown as
[ConflictError](../classes/ConflictError.md); this message is no longer matched.
