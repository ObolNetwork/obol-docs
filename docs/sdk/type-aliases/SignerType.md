---
sidebar_label: "SignerType"
slug: /sdk/type-aliases/signertype
---

# SignerType

> **SignerType** = `Signer`

Defined in: [types.ts:436](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L436)

Accepted ethers signer types for signing transactions and EIP-712 messages:
any ethers v6 `Signer` (`Wallet`, `HDNodeWallet`, `JsonRpcSigner`,
`NonceManager`, or a custom `AbstractSigner`).
Pass as the second argument to `new Client(config, signer)`.
