---
sidebar_label: "ExitNetwork"
slug: /sdk/interfaces/exitnetwork
---

# ExitNetwork

Defined in: [constants.ts:339](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/constants.ts#L339)

The voluntary exit signing domain inputs of a chain.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="name"></a> `name` | `string` | Network name, for error messages. | [constants.ts:341](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/constants.ts#L341) |
| <a id="forkversion"></a> `forkVersion` | `string` | Genesis fork version (`definition.fork_version` of a cluster on it). | [constants.ts:343](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/constants.ts#L343) |
| <a id="capellaforkversion"></a> `capellaForkVersion` | `string` | Capella fork version. Since EIP-7044 (Deneb) voluntary exits are always signed in the Capella exit domain, whatever the current fork. | [constants.ts:348](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/constants.ts#L348) |
| <a id="genesisvalidatorsroot"></a> `genesisValidatorsRoot` | `string` | Genesis validators root of the beacon chain. | [constants.ts:350](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/constants.ts#L350) |
