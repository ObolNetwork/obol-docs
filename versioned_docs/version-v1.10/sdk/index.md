---
sidebar_label: "Intro"
slug: /sdk/index
---

# Intro

**SDK Version:** v2.11.8

![Obol Logo](https://obol.org/obolnetwork.png)

## Obol SDK

This repo contains the Obol Software Development Kit, for creating Distributed Validators with the help of the [Obol API](../api/what-is-this-api.md).

## Getting Started

Checkout our [docs](../advanced-and-troubleshooting/advanced/create-a-dv-using-the-sdk.mdx), [examples](https://github.com/ObolNetwork/obol-sdk-examples/), and SDK [reference](https://obolnetwork.github.io/obol-sdk). Further guides and walkthroughs coming soon.

### Terms and Conditions

## Terms and Conditions
To use obol-sdk and in order to be able to create a cluster definition or accept an invite to join a cluster, you must accept the [latest Obol terms and conditions](https://obol.org/terms.pdf) by calling acceptObolLatestTermsAndConditions.

## ⚠️ Important Security Notice:
If you're integrating this SDK with a **backend** (e.g., in Node.js), and you store a private key for executing splitter transactions, handle it with extreme caution. Ensure that:

- The private key is securely stored (e.g., in an `.env` file).
- Never commit or push your `.env` file containing the private key to version control.

## ⚡️ Integration with Safe Wallet

When integrating the Obol SDK with a **Safe Wallet**, you can either pass an RPC URL OR provide the `RPC_MAINNET` or `RPC_HOLESKY` or `RPC_GNOSIS` or `RPC_SEPOLIA` or `RPC_HOODI` environment variable, pointing to the correct network's RPC URL. This is required to interact with Safe kit.

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
      '@chainsafe/blst': 'commonjs @chainsafe/blst',
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

- [EOA](classes/EOA.md)
- [Exit](classes/Exit.md)
- [Incentives](classes/Incentives.md)
- [Client](classes/Client.md)
- [ObolSplits](classes/ObolSplits.md)

## Interfaces

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

## Type Aliases

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
- [DepositData](type-aliases/DepositData.md)
- [DistributedValidator](type-aliases/DistributedValidator.md)
- [ClusterLock](type-aliases/ClusterLock.md)
- [ClaimableIncentives](type-aliases/ClaimableIncentives.md)
- [ETH\_ADDRESS](type-aliases/ETH_ADDRESS.md)
- [ProviderType](type-aliases/ProviderType.md)
- [SafeRpcUrl](type-aliases/SafeRpcUrl.md)
- [SignerType](type-aliases/SignerType.md)
- [ClaimIncentivesResponse](type-aliases/ClaimIncentivesResponse.md)
- [HttpRequestFunc](type-aliases/HttpRequestFunc.md)
- [OVMArgs](type-aliases/OVMArgs.md)
- [OVMRequestWithdrawalPayload](type-aliases/OVMRequestWithdrawalPayload.md)
- [EOAWithdrawalPayload](type-aliases/EOAWithdrawalPayload.md)
- [OVMDepositPayload](type-aliases/OVMDepositPayload.md)
- [EOADepositPayload](type-aliases/EOADepositPayload.md)

## Variables

- [CAPELLA\_FORK\_MAPPING](variables/CAPELLA_FORK_MAPPING.md)

## Functions

- [validateClusterLock](functions/validateClusterLock.md)
- [clusterConfigOrDefinitionHash](functions/clusterConfigOrDefinitionHash.md)
- [clusterLockHash](functions/clusterLockHash.md)
- [verifyDepositData](functions/verifyDepositData.md)
