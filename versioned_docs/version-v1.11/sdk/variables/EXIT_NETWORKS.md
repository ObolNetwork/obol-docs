---
sidebar_label: "EXIT_NETWORKS"
slug: /sdk/variables/exit_networks
---

# EXIT\_NETWORKS

> `const` **EXIT\_NETWORKS**: `Readonly`\<`Record`\<`number`, [`ExitNetwork`](../interfaces/ExitNetwork.md)\>\>

Defined in: [constants.ts:360](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/constants.ts#L360)

Voluntary exit signing domain inputs by chain ID. `Exit.recombineExitBlobs`
uses the entry for the client's chain to verify the exit signature it
returns, so no beacon node is needed.

Each entry stands alone: removing a chain's line removes its exit support.
