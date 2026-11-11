---
sidebar_label: "ProviderType"
slug: /sdk/type-aliases/providertype
---

# ProviderType

> **ProviderType** = `Provider`

Defined in: [types.ts:423](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L423)

Accepted ethers provider types for on-chain reads: any ethers v6 `Provider`
(`JsonRpcProvider`, `BrowserProvider`, `FallbackProvider`, ...).
Pass as the third argument to `new Client(config, signer, provider)`.
