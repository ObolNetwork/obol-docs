---
sidebar_label: "MERKLE_DISTRIBUTOR_RUNTIME"
slug: /sdk/variables/merkle_distributor_runtime
---

# MERKLE\_DISTRIBUTOR\_RUNTIME

> `const` **MERKLE\_DISTRIBUTOR\_RUNTIME**: `object`

Defined in: [constants.ts:312](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/constants.ts#L312)

Reference runtime code of `MerkleDistributorWithDeadline` from
ObolNetwork/merkle-distributor (solc 0.8.17, via-IR, 200 runs, london).

Each incentives round is a separate deployment whose runtime code embeds its
own `token`, `merkleRoot` and `endTime` immutables, and the CBOR metadata
trailer depends on build paths. `codeHash` is the keccak256 of the runtime
code with the `immutableOffsets` (32 bytes each) and the metadata trailer
(all but its 2-byte length suffix) zeroed.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="property-codelength"></a> `codeLength` | `2437` | `2437` | [constants.ts:313](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/constants.ts#L313) |
| <a id="property-metadatalength"></a> `metadataLength` | `51` | `51` | [constants.ts:314](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/constants.ts#L314) |
| <a id="property-immutableoffsets"></a> `immutableOffsets` | readonly \[`155`, `656`, `715`, `893`, `952`, `1103`, `1386`, `1496`\] | - | [constants.ts:315](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/constants.ts#L315) |
| <a id="property-codehash"></a> `codeHash` | `"0x24b74a2b834aa0d14e312af3a4d4be7e62ceb7fc67c822bc3612cff4329d04c8"` | `'0x24b74a2b834aa0d14e312af3a4d4be7e62ceb7fc67c822bc3612cff4329d04c8'` | [constants.ts:316](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/constants.ts#L316) |
