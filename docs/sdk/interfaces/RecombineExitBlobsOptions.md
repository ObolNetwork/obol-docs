---
sidebar_label: "RecombineExitBlobsOptions"
slug: /sdk/interfaces/recombineexitblobsoptions
---

# RecombineExitBlobsOptions

Defined in: [types.ts:639](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L639)

Options for [Exit.recombineExitBlobs](../classes/Exit.md#recombineexitblobs). All are optional: without
them the aggregated signature is still verified against the validator
public key on the client's chain.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="clusterconfig"></a> `clusterConfig?` | `object` | The cluster from its lock (an [ExitClusterConfig](ExitClusterConfig.md) works). With it, each partial signature is verified against its operator's public share (`distributed_validators[].public_shares`, in operator order), invalid ones are left out, and at least `definition.threshold` valid ones are required. `definition.fork_version` must be the genesis fork version of the client's chain. | [types.ts:648](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L648) |
| `clusterConfig.definition` | `Pick`\<[`ExitClusterDefinition`](ExitClusterDefinition.md), `"fork_version"` \| `"threshold"`\> | - | [types.ts:649](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L649) |
| `clusterConfig.distributed_validators` | [`ExitDistributedValidator`](ExitDistributedValidator.md)[] | - | [types.ts:650](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L650) |
| <a id="genesisvalidatorsroot"></a> `genesisValidatorsRoot?` | `string` | The chain's genesis validators root (32-byte hex). Not needed on the chains in [EXIT\_NETWORKS](../variables/EXIT_NETWORKS.md), where it is only compared with the chain's; required (or `beaconNodeApiUrl`), with `clusterConfig`, on any other chain. Pass at most one of the two. | [types.ts:659](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L659) |
| <a id="beaconnodeapiurl"></a> `beaconNodeApiUrl?` | `string` | A beacon node API URL to read the genesis validators root from; see `genesisValidatorsRoot`. | [types.ts:665](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L665) |
