---
sidebar_label: "Intro"
slug: /sdk/index
---

# Intro

**SDK Version:** v2.16.1

![Obol Logo](https://obol.org/obolnetwork.png)

## Obol SDK

This repo contains the Obol Software Development Kit, for creating Distributed Validators with the help of the [Obol API](../api/what-is-this-api.md).

## Quick Start

```typescript
import { Client } from "@obolnetwork/obol-sdk";
import { Wallet } from "ethers";

// 1. Create a client (Hoodi testnet)
const signer = new Wallet(process.env.PRIVATE_KEY!);
const client = new Client({ chainId: 560048 }, signer);

// 2. Accept terms and conditions (required once per address)
await client.acceptObolLatestTermsAndConditions();

// 3. Create a cluster definition
const configHash = await client.createClusterDefinition({
  name: "my-cluster",
  operators: [{ address: "0xOperator1..." }, { address: "0xOperator2..." }],
  validators: [{
    fee_recipient_address: "0xFeeRecipient...",
    withdrawal_address: "0xWithdrawal...",
  }],
});

// 4. Retrieve the definition / lock (read-only, no signer needed)
const definition = await client.getClusterDefinition(configHash);
const lock = await client.getClusterLock(configHash);
```

### Signers

The `signer` can be any ethers v6 `Signer` (`Wallet`, `HDNodeWallet`, `JsonRpcSigner`, `NonceManager`, or a custom `AbstractSigner`).

## Getting Started

Checkout our [docs](../advanced-and-troubleshooting/advanced/create-a-dv-using-the-sdk.mdx), [examples](https://github.com/ObolNetwork/obol-sdk-examples/), and SDK [reference](https://docs.obol.org/sdk). Further guides and walkthroughs coming soon.

## Terms and Conditions
To use obol-sdk and in order to be able to create a cluster definition or accept an invite to join a cluster, you must accept the [latest Obol terms and conditions](https://obol.org/terms.pdf) by calling acceptObolLatestTermsAndConditions.

## Security

**API host:** `baseUrl` must be one of `https://api.obol.tech`, `https://obol-api-nonprod-dev.dev.obol.tech`, or `https://obol-api-nonprod-qa.dev.obol.tech` (no path suffix). Endpoints are still called as `/v1/...` as before. Any other value throws `InvalidBaseUrlError`.

**RPC URLs:** Set `RPC_MAINNET`, `RPC_HOODI`, etc. in your own app or pass an explicit provider/RPC to the client. The SDK does not load a `.env` file on import.

**Private keys:** If you use a backend signer, store keys securely (KMS, HSM, or env vars your app loads explicitly). Never commit secrets to version control.

## ⚡️ Integration with Safe Wallet

When integrating the Obol SDK with a **Safe Wallet**, you can either pass an RPC URL OR provide the `RPC_MAINNET` or `RPC_HOODI` environment variable, pointing to the correct network's RPC URL. This is required to interact with Safe kit.

## Contributing

Please review the following guidelines:

- [How to Report Bugs](#how-to-report-bugs)
- [How to Propose Changes](#how-to-propose-changes)
- [Code Review Process](#code-review-process)

### How to Report Bugs

If you encounter a bug or unexpected behavior, please follow these steps to report it:

1. Go to the "Issues" tab of this repository.
2. Click on the "Get started" button in the Bug report section.
3. Provide a clear title and description of the issue following the format provided.

### How to Propose Changes

If you'd like to propose improvements or new features, please follow these steps:

1. Fork this repository.
2. Create a new branch for your changes.
3. Make your changes and commit them with clear messages.
4. Open a pull request with a detailed description of the changes.

### Code Review Process

All contributions are reviewed before they are merged into the main branch. Please address any feedback provided during the review process.

Thank you for contributing to Obol-SDK!

## For AI Agents and Code Generators

If you are an LLM, code-generation agent, or tool using this SDK programmatically, follow these guidelines to avoid common mistakes:

- **Primary entrypoint:** `Client` from `@obolnetwork/obol-sdk`.
- **Constructor:** `new Client({ chainId }, signer?, provider?)` – `chainId` defaults to `560048` (Hoodi). `signer` is any ethers v6 `Signer`; no `as any` cast is needed.
- **All operations are namespaced** under the client instance. Do **not** construct HTTP requests manually.

### Client API Surface

| Namespace | Method | Description |
|-----------|--------|-------------|
| *(root)* | `acceptObolLatestTermsAndConditions()` | Accept T&C (required once before writes) |
| *(root)* | `createClusterDefinition(payload)` | Create a new cluster → returns `config_hash` |
| *(root)* | `acceptClusterDefinition(operatorPayload, configHash)` | Join a cluster as an operator (verifies the definition and operator membership first) |
| *(root)* | `getClusterDefinition(configHash)` | Fetch cluster definition (read-only) |
| *(root)* | `getClusterLock(configHash)` | Fetch cluster lock by config hash (read-only) |
| *(root)* | `getClusterLockByHash(lockHash)` | Fetch cluster lock by lock hash (read-only) |
| *(root)* | `getDepositData(lockHash)` | Validated deposit payloads (wei) from a lock, for `eoa.deposit` / `splits.deposit` (read-only) |
| *(root)* | `createObolRewardsSplit(payload)` | Deploy OWR + splitter (rewards-only split) |
| *(root)* | `createObolTotalSplit(payload)` | Deploy splitter (total split) |
| *(root)* | `getOWRTranches(owrAddress)` | Read OWR tranche info (read-only on-chain) |
| `client.splits` | `createValidatorManagerAndRewardsSplit(payload)` | Deploy OVM + SplitV2 (rewards-only) |
| `client.splits` | `createValidatorManagerAndTotalSplit(payload)` | Deploy OVM + SplitV2 (total) |
| `client.splits` | `requestWithdrawal(payload)` | Request withdrawal from OVM |
| `client.splits` | `deposit(payload)` | Deposit to OVM contract (verified first; `kind: 'topUp'` for top-ups) |
| `client.incentives` | `getIncentivesByAddress(address)` | Fetch claimable incentives (read-only) |
| `client.incentives` | `isClaimed(contractAddress, index)` | Check if incentives claimed (read-only) |
| `client.incentives` | `claimIncentives(address)` | Claim incentives on-chain |
| `client.eoa` | `requestWithdrawal(payload)` | Request EOA withdrawal |
| `client.eoa` | `deposit(payload)` | Batch deposit validators (verified first; `kind: 'topUp'` for top-ups) |
| `client.exit` | `verifyPartialExitSignature(...)` | Verify BLS partial exit signature |
| `client.exit` | `verifyExitPayloadSignature(...)` | Verify ECDSA exit payload signature |
| `client.exit` | `validateExitBlobs(...)` | Validate exit blobs against cluster config |
| `client.exit` | `recombineExitBlobs(...)` | Aggregate partial exit signatures into the signed exit; always verified against the validator public key (throws `ExitRecombineError` otherwise) |

### Standalone Utilities

| Export | Description |
|--------|-------------|
| `validateClusterLock(lock, safeRpcUrl?)` | Cryptographic verification (signatures, hashes). Does not mirror every Charon runtime check—passing here is necessary, not sufficient, for Charon. |

### Key Rules

1. All request/response types are exported from the package root.
2. Error types exported: `ConflictError`, `SignerRequiredError`, `UnsupportedChainError`.
3. Methods that **write** (create, deploy, claim) require a `signer`. Methods that **read** (get, fetch) do not.
4. Supported chain IDs: `1` (Mainnet), `560048` (Hoodi); `100` (Gnosis) and `11155111` (Sepolia) for cluster definitions and locks only.
5. Splitter/OVM deployment is only supported on chains 1 and 560048.

## Next.js / SSR Configuration

If using this SDK in **Next.js** or other SSR frameworks, add this minimal config to your `next.config.js`:

```javascript
webpack: (config, { isServer, webpack }) => {
  if (!isServer) {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.stdout.isTTY': 'false',
        'process.stderr.isTTY': 'false',
      })
    );
  } else {
    // Server: Externalize native dependencies
    config.externals = config.externals || [];
    config.externals.push({
      '@chainsafe/bls': 'commonjs @chainsafe/bls',
      'bcrypto': 'commonjs bcrypto',
    });
  }
  
  // Ignore .node files
  config.plugins.push(
    new webpack.IgnorePlugin({ resourceRegExp: /\.node$/ })
  );
  
  return config;
}
```

## Enumerations

- [FORK\_MAPPING](enumerations/FORK_MAPPING.md)

## Classes

- [ENR](classes/ENR.md)
- [EOA](classes/EOA.md)
- [ObolApiError](classes/ObolApiError.md)
- [ValidationError](classes/ValidationError.md)
- [UnauthorizedError](classes/UnauthorizedError.md)
- [NotFoundError](classes/NotFoundError.md)
- [RateLimitError](classes/RateLimitError.md)
- [ConflictError](classes/ConflictError.md)
- [RequestTimeoutError](classes/RequestTimeoutError.md)
- [SignerRequiredError](classes/SignerRequiredError.md)
- [UnsupportedChainError](classes/UnsupportedChainError.md)
- [ObolSdkError](classes/ObolSdkError.md)
- [ChainMismatchError](classes/ChainMismatchError.md)
- [DefinitionVerificationError](classes/DefinitionVerificationError.md)
- [NotAnOperatorError](classes/NotAnOperatorError.md)
- [IncentivesPreflightError](classes/IncentivesPreflightError.md)
- [PayloadValidationError](classes/PayloadValidationError.md)
- [InvalidArgumentError](classes/InvalidArgumentError.md)
- [ExitRecombineError](classes/ExitRecombineError.md)
- [InvalidBaseUrlError](classes/InvalidBaseUrlError.md)
- [ClusterLockValidationTimeoutError](classes/ClusterLockValidationTimeoutError.md)
- [ClusterLockValidationBusyError](classes/ClusterLockValidationBusyError.md)
- [TransactionSubmissionError](classes/TransactionSubmissionError.md)
- [Exit](classes/Exit.md)
- [Incentives](classes/Incentives.md)
- [Client](classes/Client.md)
- [ObolSplits](classes/ObolSplits.md)

## Interfaces

- [ExitNetwork](interfaces/ExitNetwork.md)
- [ObolApiErrorInit](interfaces/ObolApiErrorInit.md)
- [ClusterDefinition](interfaces/ClusterDefinition.md)
- [RewardsSplitPayload](interfaces/RewardsSplitPayload.md)
- [ExitOperator](interfaces/ExitOperator.md)
- [ExitClusterDefinition](interfaces/ExitClusterDefinition.md)
- [ExitDistributedValidator](interfaces/ExitDistributedValidator.md)
- [ExitClusterConfig](interfaces/ExitClusterConfig.md)
- [ExitValidationMessage](interfaces/ExitValidationMessage.md)
- [SignedExitValidationMessage](interfaces/SignedExitValidationMessage.md)
- [ExitValidationBlob](interfaces/ExitValidationBlob.md)
- [ExitValidationPayload](interfaces/ExitValidationPayload.md)
- [ExistingExitValidationBlobData](interfaces/ExistingExitValidationBlobData.md)
- [RecombineExitBlobsOptions](interfaces/RecombineExitBlobsOptions.md)

## Type Aliases

- [GetDepositDataOptions](type-aliases/GetDepositDataOptions.md)
- [LockDepositData](type-aliases/LockDepositData.md)
- [ExitRecombineErrorCode](type-aliases/ExitRecombineErrorCode.md)
- [ClusterOperator](type-aliases/ClusterOperator.md)
- [OperatorPayload](type-aliases/OperatorPayload.md)
- [ClusterCreator](type-aliases/ClusterCreator.md)
- [ClusterValidator](type-aliases/ClusterValidator.md)
- [ClusterPayload](type-aliases/ClusterPayload.md)
- [SplitRecipient](type-aliases/SplitRecipient.md)
- [TotalSplitPayload](type-aliases/TotalSplitPayload.md)
- [OVMBaseSplitPayload](type-aliases/OVMBaseSplitPayload.md)
- [OVMRewardsSplitPayload](type-aliases/OVMRewardsSplitPayload.md)
- [OVMTotalSplitPayload](type-aliases/OVMTotalSplitPayload.md)
- [OVMSplitPayload](type-aliases/OVMSplitPayload.md)
- [SplitV2Recipient](type-aliases/SplitV2Recipient.md)
- [OWRTranches](type-aliases/OWRTranches.md)
- [BuilderRegistrationMessage](type-aliases/BuilderRegistrationMessage.md)
- [BuilderRegistration](type-aliases/BuilderRegistration.md)
- [BlsSignatureCheck](type-aliases/BlsSignatureCheck.md)
- [DepositData](type-aliases/DepositData.md)
- [DistributedValidator](type-aliases/DistributedValidator.md)
- [ClusterLock](type-aliases/ClusterLock.md)
- [ClaimableIncentives](type-aliases/ClaimableIncentives.md)
- [ETH\_ADDRESS](type-aliases/ETH_ADDRESS.md)
- [ProviderType](type-aliases/ProviderType.md)
- [SafeRpcUrl](type-aliases/SafeRpcUrl.md)
- [SignerType](type-aliases/SignerType.md)
- [ClaimIncentivesResponse](type-aliases/ClaimIncentivesResponse.md)
- [TransactionSentInfo](type-aliases/TransactionSentInfo.md)
- [WriteOptions](type-aliases/WriteOptions.md)
- [PreflightIssue](type-aliases/PreflightIssue.md)
- [PreflightResult](type-aliases/PreflightResult.md)
- [HttpRequestFunc](type-aliases/HttpRequestFunc.md)
- [OVMArgs](type-aliases/OVMArgs.md)
- [OVMRequestWithdrawalPayload](type-aliases/OVMRequestWithdrawalPayload.md)
- [EOAWithdrawalPayload](type-aliases/EOAWithdrawalPayload.md)
- [ValidatorDeposit](type-aliases/ValidatorDeposit.md)
- [DepositKind](type-aliases/DepositKind.md)
- [OVMDepositPayload](type-aliases/OVMDepositPayload.md)
- [EOADepositPayload](type-aliases/EOADepositPayload.md)

## Variables

- [ALLOWED\_OBOL\_API\_BASE\_URLS](variables/ALLOWED_OBOL_API_BASE_URLS.md)
- [DEFAULT\_REQUEST\_TIMEOUT\_MS](variables/DEFAULT_REQUEST_TIMEOUT_MS.md)
- [~~CONFLICT\_ERROR\_MSG~~](variables/CONFLICT_ERROR_MSG.md)
- [TERMS\_ACCEPTED\_MSG](variables/TERMS_ACCEPTED_MSG.md)
- [MIN\_SUPPORTED\_CLUSTER\_VERSION](variables/MIN_SUPPORTED_CLUSTER_VERSION.md)
- [SUPPORTED\_DEFINITION\_VERSIONS](variables/SUPPORTED_DEFINITION_VERSIONS.md)
- [SUPPORTED\_CHAIN\_IDS](variables/SUPPORTED_CHAIN_IDS.md)
- [OBOL\_TOKEN\_ADDRESS](variables/OBOL_TOKEN_ADDRESS.md)
- [MERKLE\_DISTRIBUTOR\_RUNTIME](variables/MERKLE_DISTRIBUTOR_RUNTIME.md)
- [CAPELLA\_FORK\_MAPPING](variables/CAPELLA_FORK_MAPPING.md)
- [EXIT\_NETWORKS](variables/EXIT_NETWORKS.md)
- [WITHDRAWAL\_REQUEST\_CONTRACT\_ADDRESS](variables/WITHDRAWAL_REQUEST_CONTRACT_ADDRESS.md)

## Functions

- [validateClusterLock](functions/validateClusterLock.md)
- [clusterConfigOrDefinitionHash](functions/clusterConfigOrDefinitionHash.md)
- [clusterLockHash](functions/clusterLockHash.md)
- [validateDepositDataStructure](functions/validateDepositDataStructure.md)
- [depositBlsCheck](functions/depositBlsCheck.md)
- [verifyDepositData](functions/verifyDepositData.md)
- [builderBlsCheck](functions/builderBlsCheck.md)
- [hasUniqueDistributedKeys](functions/hasUniqueDistributedKeys.md)
- [isSupportedClusterVersion](functions/isSupportedClusterVersion.md)
- [getWithdrawalRequestFee](functions/getWithdrawalRequestFee.md)
- [resolveWithdrawalFee](functions/resolveWithdrawalFee.md)
