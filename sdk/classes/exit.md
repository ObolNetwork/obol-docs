# Exit

Defined in: [exits/exit.ts:85](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/exits/exit.ts#L85)

Exit validation and verification class for Obol distributed validators.

This class provides functionality to validate and verify voluntary exit signatures
for distributed validators in an Obol cluster. It handles both partial exit signatures
from individual operators and payload signatures that authorize exit operations.

The class supports:
- Verification of BLS signatures for partial exit messages
- Verification of ECDSA signatures for exit payload authorization
- Validation of exit blobs against cluster configuration
- Duplicate detection and epoch validation

## Example

```typescript
const exit = new Exit(1, provider); // Mainnet with provider

// Verify a partial exit signature
const isValid = await exit.verifyPartialExitSignature(
  publicShareKey,
  signedExitMessage,
  forkVersion,
  genesisValidatorsRoot
);

// Validate exit blobs for a cluster
const validBlobs = await exit.validateExitBlobs(
  clusterConfig,
  exitsPayload,
  beaconNodeApiUrl,
  existingBlobData
);
```

## Constructors

### Constructor

> **new Exit**(`chainId`, `provider`): `Exit`

Defined in: [exits/exit.ts:104](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/exits/exit.ts#L104)

Creates a new Exit instance for validator exit operations.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chainId` | `number` | The Ethereum chain ID (e.g., 1 for mainnet, 5 for goerli) |
| `provider` | [`ProviderType`](../type-aliases/ProviderType.md) \| `null` \| `undefined` | Optional Ethereum provider for blockchain interactions |

#### Returns

`Exit`

#### Example

```typescript
// For mainnet with a provider
const exit = new Exit(1, provider);

// For goerli testnet without provider
const exit = new Exit(5, null);
```

## Methods

### verifyPartialExitSignature()

> **verifyPartialExitSignature**(`publicShareKey`, `signedExitMessage`, `forkVersion`, `genesisValidatorsRootString`): `Promise`\<`boolean`\>

Defined in: [exits/exit.ts:192](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/exits/exit.ts#L192)

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

Defined in: [exits/exit.ts:256](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/exits/exit.ts#L256)

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

#### Throws

When the ENR string is invalid or cannot be decoded

#### Throws

When the signature format is invalid (must be 130 hex characters)

#### Throws

When signature verification encounters an error

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

Defined in: [exits/exit.ts:533](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/exits/exit.ts#L533)

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

> **recombineExitBlobs**(`exitBlob`): `Promise`\<`FullExitBlob`\>

Defined in: [exits/exit.ts:585](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/exits/exit.ts#L585)

Recombines exit blobs into a single exit blob.

This method aggregates partial exit signatures from multiple operators into a single exit blob.
It ensures that the signatures are properly ordered and aggregated according to the operator indices.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `exitBlob` | [`ExistingExitValidationBlobData`](../interfaces/ExistingExitValidationBlobData.md) | The existing exit blob data containing partial exit signatures |

#### Returns

`Promise`\<`FullExitBlob`\>

Promise resolving to a single exit blob with aggregated signatures

#### Throws

When no valid signatures are found for aggregation

#### Throws

When signature length is invalid

#### Throws

When signature parsing fails

#### Example

```typescript
const aggregatedExitBlob = await exit.recombineExitBlobs(existingBlobData);
```
