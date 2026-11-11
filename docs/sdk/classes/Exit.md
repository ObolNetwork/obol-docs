---
sidebar_label: "Exit"
slug: /sdk/classes/exit
---

# Exit

Defined in: [exits/exit.ts:92](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/exits/exit.ts#L92)

Validates and verifies voluntary exit signatures for Obol distributed validators.

Do not instantiate directly; access via `client.exit`.

Available methods:
- [Exit.verifyPartialExitSignature](#verifypartialexitsignature) – verify a BLS partial exit signature
- [Exit.verifyExitPayloadSignature](#verifyexitpayloadsignature) – verify an ECDSA exit payload signature
- [Exit.validateExitBlobs](#validateexitblobs) – validate exit blobs against cluster config
- [Exit.recombineExitBlobs](#recombineexitblobs) – aggregate partial signatures into a full exit blob, verified against the validator public key

All methods are read-only (no on-chain transactions). No signer is required.

## Example

```typescript
const client = new Client({ chainId: 1 }, signer, provider);

// Verify a partial exit signature
const isValid = await client.exit.verifyPartialExitSignature(
  publicShareKey,
  signedExitMessage,
  forkVersion,
  genesisValidatorsRoot,
);

// Validate exit blobs for a cluster
const validBlobs = await client.exit.validateExitBlobs(
  clusterConfig,
  exitsPayload,
  beaconNodeApiUrl,
  existingBlobData,
);
```

## Constructors

### Constructor

> **new Exit**(`chainId`, `provider`): `Exit`

Defined in: [exits/exit.ts:108](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/exits/exit.ts#L108)

Creates a new Exit instance for validator exit operations.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chainId` | `number` | The Ethereum chain ID (e.g., 1 for mainnet, 5 for goerli) |
| `provider` | `Provider` \| `null` \| `undefined` | Optional Ethereum provider for blockchain interactions |

#### Returns

`Exit`

#### Example

```typescript
const client = new Client({ chainId: 1 }, signer, provider);
const exit = client.exit; // Access via client, do not instantiate directly
```

## Methods

### verifyPartialExitSignature()

> **verifyPartialExitSignature**(`publicShareKey`, `signedExitMessage`, `forkVersion`, `genesisValidatorsRootString`): `Promise`\<`boolean`\>

Defined in: [exits/exit.ts:193](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/exits/exit.ts#L193)

Verifies a partial exit signature from a distributed validator operator.

This method validates that a partial exit signature was correctly signed by the
operator's share of the distributed validator's private key. It performs BLS
signature verification using the appropriate fork version and genesis validators root.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `publicShareKey` | `string` | The operator's public share key (BLS public key, hex string with or without 0x prefix) |
| `signedExitMessage` | [`SignedExitValidationMessage`](../interfaces/SignedExitValidationMessage.md) | The signed exit message containing the exit details and signature |
| `forkVersion` | `string` | The Ethereum fork version (e.g., "0x00000000" for mainnet) |
| `genesisValidatorsRootString` | `string` | The genesis validators root for the network (hex string) |

#### Returns

`Promise`\<`boolean`\>

Promise resolving to true if the signature is valid, false otherwise

#### Throws

When unable to determine the Capella fork version for the given network

#### Throws

When `epoch` or `validator_index` is not a decimal uint64 string

#### Throws

When BLS library initialization or verification fails

#### Example

```typescript
const isValid = await exit.verifyPartialExitSignature(
  "0x1234...abcd", // operator's public share key
  {
    message: { epoch: "12345", validator_index: "67890" },
    signature: "0xabcd...1234"
  },
  "0x00000000", // mainnet fork version
  "0x4b363db94e286120d76eb905340fdd4e54bfe9f06bf33ff6cf5ad27f511bfe95"
);
```

***

### verifyExitPayloadSignature()

> **verifyExitPayloadSignature**(`enrString`, `exitsPayload`): `Promise`\<`boolean`\>

Defined in: [exits/exit.ts:276](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/exits/exit.ts#L276)

Verifies the exit payload signature using the operator's ENR.

This method validates that an exit payload was signed by the correct operator
using ECDSA signature verification. The signature is verified against the
operator's public key extracted from their ENR (Ethereum Node Record).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `enrString` | `string` | The operator's ENR string containing their identity and public key |
| `exitsPayload` | [`ExitValidationPayload`](../interfaces/ExitValidationPayload.md) | The exit validation payload containing partial exits and operator signature |

#### Returns

`Promise`\<`boolean`\>

Promise resolving to true if the payload signature is valid, false otherwise
  (including high-s signatures and public keys that are not valid secp256k1 points)

#### Throws

When the ENR string is invalid or cannot be decoded

#### Throws

When the signature is not 64 or 65 bytes of hex (`r || s`, optionally followed by the recovery id)

#### Example

```typescript
const isValid = await exit.verifyExitPayloadSignature(
  "enr:-LK4QFo_n0dUm4PKejSOXf8JkSWq5EINV0XhG1zY00d...", // operator ENR
  {
    partial_exits: [exitBlob1, exitBlob2],
    share_idx: 1,
    signature: "0x1234...abcd" // ECDSA signature (130 hex chars)
  }
);
```

***

### validateExitBlobs()

> **validateExitBlobs**(`clusterConfig`, `exitsPayload`, `beaconNodeApiUrl`, `existingBlobData`): `Promise`\<[`ExitValidationBlob`](../interfaces/ExitValidationBlob.md)[]\>

Defined in: [exits/exit.ts:548](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/exits/exit.ts#L548)

Validates exit blobs against cluster configuration and existing data.

This method performs comprehensive validation of exit blobs including:
- Operator authorization and payload signature verification
- Network parameter validation (genesis root, fork version)
- Public key validation against cluster configuration
- Partial signature verification for each exit blob
- Duplicate detection and epoch progression validation
- Signature consistency checks for existing exits

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `clusterConfig` | [`ExitClusterConfig`](../interfaces/ExitClusterConfig.md) | The cluster configuration containing operators and distributed validators |
| `exitsPayload` | [`ExitValidationPayload`](../interfaces/ExitValidationPayload.md) | The exit validation payload with partial exits and operator info |
| `beaconNodeApiUrl` | `string` | The beacon node API URL for network parameter retrieval |
| `existingBlobData` | [`ExistingExitValidationBlobData`](../interfaces/ExistingExitValidationBlobData.md) \| `null` | Existing exit blob data for duplicate detection, or null if none exists |

#### Returns

`Promise`\<[`ExitValidationBlob`](../interfaces/ExitValidationBlob.md)[]\>

Promise resolving to an array of validated, non-duplicate exit blobs

#### Throws

When share_idx is invalid or out of bounds for the cluster operators

#### Throws

When payload signature verification fails

#### Throws

When network parameters cannot be retrieved or are invalid

#### Throws

When a public key is not found in the cluster's distributed validators

#### Throws

When a partial exit signature is invalid

#### Throws

When exit epoch validation fails (new epoch not greater than existing)

#### Throws

When validator index mismatches with existing data

#### Throws

When signature mismatches for the same epoch and operator

#### Throws

When an `epoch` or `validator_index` is not a decimal uint64 string

#### Example

```typescript
const validExitBlobs = await exit.validateExitBlobs(
  {
    definition: {
      operators: [{ enr: "enr:-LK4Q..." }],
      fork_version: "0x00000000",
      threshold: 1
    },
    distributed_validators: [{
      distributed_public_key: "0x1234...abcd",
      public_shares: ["0x5678...efgh"]
    }]
  },
  {
    partial_exits: [exitBlob],
    share_idx: 1,
    signature: "0x1234...abcd"
  },
  "http://localhost:5052",
  existingBlobData // or null for new exits
);
```

***

### recombineExitBlobs()

> **recombineExitBlobs**(`exitBlob`, `options?`): `Promise`\<`FullExitBlob`\>

Defined in: [exits/exit.ts:651](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/exits/exit.ts#L651)

Recombines the partial exit signatures of a validator into its signed
voluntary exit, and verifies it.

The partial signatures are threshold-aggregated as Charon's
`tbls.ThresholdAggregate` does: each one is weighted by its Lagrange
coefficient at x=0, where the share index of the signature keyed by
operator index `i` (0-based) is `i + 1`.

**The returned signature is always verified** against `exitBlob.public_key`
for the exit message, in the voluntary exit domain of the client's chain
(`chainId`; Capella fork version and genesis validators root from
[EXIT\_NETWORKS](../variables/EXIT_NETWORKS.md), no beacon node needed). If it does not verify (fewer
than the cluster's threshold of partials, an invalid partial, another
network, another epoch or validator index) the method throws
[ExitRecombineError](ExitRecombineError.md) and returns nothing. There is no way to skip
this check.

`options` add to that:
- `clusterConfig`: each partial is first verified against its operator's
  public share and invalid ones are left out (and named in the error), at
  least `definition.threshold` valid partials are required, and the first
  `threshold` valid partials by share index are aggregated. Its
  `definition.fork_version` must be the client chain's.
- `genesisValidatorsRoot` or `beaconNodeApiUrl` (at most one): on a chain
  in [EXIT\_NETWORKS](../variables/EXIT_NETWORKS.md) the root is only compared with the chain's (a
  mismatch throws). On a chain without an entry (possible only when `Exit`
  is constructed directly), one of them and `clusterConfig` are required:
  they supply the exit domain.

For a set of valid partials the result is the same with and without
`options`, and the same as before 2.16.0.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `exitBlob` | [`ExistingExitValidationBlobData`](../interfaces/ExistingExitValidationBlobData.md) | The stored exit: validator public key, epoch, validator index and the partial exit signatures keyed by 0-based operator index |
| `options` | [`RecombineExitBlobsOptions`](../interfaces/RecombineExitBlobsOptions.md) | Optional cluster (per-partial verification, threshold) and genesis validators root source |

#### Returns

`Promise`\<`FullExitBlob`\>

Promise resolving to the exit blob with the aggregated, verified
  signature. `epoch` and `validator_index` are returned in canonical
  decimal form (leading zeros removed)

#### Throws

`EXIT_PARTIAL_SIGNATURE_INVALID` when the
  aggregate does not verify against the validator public key, or a partial
  is not a valid signature encoding (without `clusterConfig`);
  `EXIT_NOT_ENOUGH_SHARES` when fewer than `threshold` partials verify
  (with `clusterConfig`)

#### Throws

`public_key` is not 48 bytes of hex;
  `epoch` or `validator_index` is not a decimal uint64; `options` are
  inconsistent (both root sources, a malformed root, a threshold that is
  not a positive integer, a validator not in `clusterConfig`, a
  `fork_version` or genesis validators root that is not the client
  chain's)

#### Throws

The client's chain has no entry in
  [EXIT\_NETWORKS](../variables/EXIT_NETWORKS.md) and `options` do not supply the exit domain

#### Throws

No partial signatures; a partial signature that is not 96
  bytes of hex; a share index key that is not a non-negative integer or is
  duplicated; the beacon node did not return a genesis validators root

#### Example

```typescript
// Verified against the validator public key on the client's chain
const exitBlob = await client.exit.recombineExitBlobs(existingBlobData);

// Also checks each partial against its public share and the threshold
const exitBlob = await client.exit.recombineExitBlobs(existingBlobData, {
  clusterConfig, // e.g. the ExitClusterConfig passed to validateExitBlobs
});
```
