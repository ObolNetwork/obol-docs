---
sidebar_label: "SUPPORTED_CHAIN_IDS"
slug: /sdk/variables/supported_chain_ids
---

# SUPPORTED\_CHAIN\_IDS

> `const` **SUPPORTED\_CHAIN\_IDS**: readonly `number`[]

Defined in: [constants.ts:180](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/constants.ts#L180)

Chain IDs accepted by the [Client](../classes/Client.md) constructor: Mainnet (1), Hoodi
(560048), Gnosis (100) and Sepolia (11155111).

Mainnet and Hoodi are the recommended networks. Gnosis and Sepolia are
supported for cluster definitions and locks only; splitter and other
contract operations stay limited to the chains that have the contracts.
