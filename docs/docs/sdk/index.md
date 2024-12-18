---
hide_title: true
---

# index

**SDK Version:** v2.1.0

![Obol Logo](https://obol.org/obolnetwork.png)

## Obol SDK

This repo contains the Obol Software Development Kit, for creating Distributed Validators with the help of the [Obol API](https://docs.obol.org/api).

### Getting Started

Checkout our [docs](https://docs.obol.org/advanced/quickstart-sdk), [examples](https://github.com/ObolNetwork/obol-sdk-examples/), and SDK [reference](https://obolnetwork.github.io/obol-sdk). Further guides and walkthroughs coming soon.

### Terms and Conditions

To use obol-sdk and in order to be able to create a cluster definition or accept an invite to join a cluster, you must accept the [latest Obol terms and conditions](https://obol.org/terms.pdf) by calling acceptObolLatestTermsAndConditions.

### ⚠️ Important Security Notice:

If you're integrating this SDK with a **backend** (e.g., in Node.js), and you store a private key for executing splitter transactions, handle it with extreme caution. Ensure that:

* The private key is securely stored (e.g., in an `.env` file).
* Never commit or push your `.env` file containing the private key to version control.

### Contributing

Please review the following guidelines:

* [How to Report Bugs](index.md#how-to-report-bugs)
* [How to Propose Changes](index.md#how-to-propose-changes)
* [Code Review Process](index.md#code-review-process)

#### How to Report Bugs

If you encounter a bug or unexpected behavior, please follow these steps to report it:

1. Go to the "Issues" tab of this repository.
2. Click on the "Get started" button in the Bug report section.
3. Provide a clear title and description of the issue following the format provided.

#### How to Propose Changes

If you'd like to propose improvements or new features, please follow these steps:

1. Fork this repository.
2. Create a new branch for your changes.
3. Make your changes and commit them with clear messages.
4. Open a pull request with a detailed description of the changes.

#### Code Review Process

All contributions are reviewed before they are merged into the main branch. Please address any feedback provided during the review process.

Thank you for contributing to Obol-SDK!

### Enumerations

* [FORK\_MAPPING](enumerations/fork_mapping.md)

### Classes

* [Client](classes/client.md)

### Interfaces

* [ClusterDefinition](interfaces/clusterdefinition.md)
* [RewardsSplitPayload](interfaces/rewardssplitpayload.md)

### Type Aliases

* [ClusterOperator](type-aliases/clusteroperator.md)
* [OperatorPayload](type-aliases/operatorpayload.md)
* [ClusterCreator](type-aliases/clustercreator.md)
* [ClusterValidator](type-aliases/clustervalidator.md)
* [ClusterPayload](type-aliases/clusterpayload.md)
* [SplitRecipient](type-aliases/splitrecipient.md)
* [TotalSplitPayload](type-aliases/totalsplitpayload.md)
* [BuilderRegistrationMessage](type-aliases/builderregistrationmessage.md)
* [BuilderRegistration](type-aliases/builderregistration.md)
* [DepositData](type-aliases/depositdata.md)
* [DistributedValidator](type-aliases/distributedvalidator.md)
* [ClusterLock](type-aliases/clusterlock.md)
* [ETH\_ADDRESS](type-aliases/eth_address.md)

### Functions

* [validateClusterLock](functions/validateclusterlock.md)
