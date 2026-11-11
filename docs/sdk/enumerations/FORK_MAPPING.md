---
sidebar_label: "FORK_MAPPING"
slug: /sdk/enumerations/fork_mapping
---

# FORK\_MAPPING

Defined in: [types.ts:13](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L13)

Maps Ethereum consensus-layer fork versions (hex) to execution-layer chain IDs.

- `0x00000000` → 1 (Mainnet)
- `0x10000910` → 560048 (Hoodi)
- `0x00000064` → 100 (Gnosis; definitions and locks only, no splits)
- `0x90000069` → 11155111 (Sepolia; definitions and locks only, no splits)

The [Client](../classes/Client.md) accepts the chain IDs in [SUPPORTED\_CHAIN\_IDS](../variables/SUPPORTED_CHAIN_IDS.md).

## Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="enumeration-member-0x00000000"></a> `0x00000000` | `1` | Mainnet. | [types.ts:15](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L15) |
| <a id="enumeration-member-0x00000064"></a> `0x00000064` | `100` | Gnosis Chain. | [types.ts:18](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L18) |
| <a id="enumeration-member-0x90000069"></a> `0x90000069` | `11155111` | Sepolia. | [types.ts:21](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L21) |
| <a id="enumeration-member-0x10000910"></a> `0x10000910` | `560048` | Hoodi Chain. | [types.ts:24](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L24) |
