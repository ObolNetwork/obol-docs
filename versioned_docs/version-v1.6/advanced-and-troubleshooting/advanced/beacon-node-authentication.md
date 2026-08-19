---
description: "Send authenticated requests to a beacon node protected by HTTP Basic, or header-based access control."
sidebar_label: "Beacon node authentication"
slug: /advanced-and-troubleshooting/advanced/beacon-node-authentication
---

# Beacon node authentication

## HTTP Basic Access Authentication

If you want to use Charon with an [HTTP basic access authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) protected beacon node, then you can supply `charon run` with the `--beacon-node-headers` flag. The flag's value should be set like: `Authorization=Basic <credentials>` where `Authorization` will be the header key and `Basic <credentials>` will be the header value. The `<credentials>` are a [Base64](https://en.wikipedia.org/wiki/Base64) encoding of the username and password joined by a single colon `:`.

:::warning
These headers will be sent in every request to every beacon node. This could leak your credentials to the other beacon nodes. Make sure you trust every listed beacon node.
:::

## Usage example

Suppose we have an HTTP Basic access protected beacon node with username `john` and password `doe`. To access it we would construct the credentials by running the following command:

```
echo -n "john:doe" | base64
```

Then you could pass the flag to your Charon instance like this:

```
charon run --beacon-node-headers="Authorization=Basic am9objpkb2U="
```

Or you could specify it as an environment variable like this:

```
CHARON_BEACON_NODE_HEADERS="Authorization=Basic am9objpkb2U="
```

:::info
Note that 'Authorization' is followed with an `=` rather than the usual `:`.
:::
