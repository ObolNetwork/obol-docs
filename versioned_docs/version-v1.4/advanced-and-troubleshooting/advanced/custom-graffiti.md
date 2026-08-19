---
description: "Add custom graffiti to your block proposals"
sidebar_label: "Custom Graffiti"
slug: /advanced-and-troubleshooting/advanced/custom-graffiti
unlisted: true
---

# Custom Graffiti

By default, Charon adds a `charon/<version>-<commitSHA>` graffiti to all block proposals. This can be customized using the `--graffiti` and `--graffiti-disable-client-append` CLI flags.

The `--graffiti` flag accepts either:
- A single string, which will be used by all validators, or
- A comma-separated list of strings, allowing each validator to have a unique graffiti (one string per validator).

Each graffiti has a maximum length of 28 bytes to leave room for Charon to append a suffix containing the Obol signature, `OB`, and the specific consensus client type used, `<CL_TYPE>`. This behavior can be disabled by setting the `--graffiti-disable-client-append` flag which also increases the maximum graffiti length to 32 bytes.