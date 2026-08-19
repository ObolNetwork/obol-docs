---
description: "Add a nickname to your Charon node"
sidebar_label: "Set a Nickname"
slug: /advanced-and-troubleshooting/advanced/nicknames
---

# Set a Nickname

By default, Charon assigns each node a name by combining a random adjective with a random name from a predefined list. While these names are human-readable, they are not easily memorable or personalised for operators.

You can set a personalised nickname for your Charon node by using the `--nickname` CLI flag followed by the desired string. This nickname is shared with other Charon nodes in the same cluster and included as a label in your Prometheus metrics.

Nicknames can serve various purposes, such as providing a more memorable identifier, including a Discord ID for alerting, or adding a website URL for publicity.
