// Curated structure for the SDK v3 reference: how a user thinks about the SDK
// (client namespaces in lifecycle order), not how src/ is laid out. Everything
// else on the generated pages (signatures, parameters, types, codes, spec
// text) comes from the SDK source and spec/ at generation time.
//
// A method that exists in the source but is not listed here is still
// rendered (in source order, after the listed ones); a listed method that no
// longer exists is reported and skipped, so a rename never breaks the build.

/** Lifecycle stages, in the order a cluster lives through them. */
export const STAGES = [
  {
    id: 'setup',
    title: 'Set up the client',
    blurb: 'Pick the chain, pass viem clients, accept the terms once per address.',
  },
  {
    id: 'rewards',
    title: 'Withdrawal and reward contracts',
    blurb:
      'Deploy an OVM (with splits) first: its address is the withdrawal address the cluster definition commits to.',
  },
  {
    id: 'create',
    title: 'Create and join the cluster',
    blurb: 'Creator prepares and posts the definition; each operator accepts with its ENR.',
  },
  {
    id: 'dkg',
    title: 'DKG and lock',
    blurb: 'Operators run the DKG with Charon (outside the SDK); the lock is published and verified.',
  },
  {
    id: 'deposit',
    title: 'Deposit',
    blurb: 'Verified deposit data from the lock, status from the API or a beacon node, then deposit via the OVM.',
  },
  {
    id: 'operate',
    title: 'Operate',
    blurb: 'Read OVM state, roles and validators; manage roles and ownership.',
  },
  {
    id: 'exit',
    title: 'Exit, withdraw, consolidate',
    blurb: 'EIP-7002 withdrawals and exits, EIP-7251 consolidations, and Charon partial-exit aggregation.',
  },
  {
    id: 'distribute',
    title: 'Distribute and claim',
    blurb: 'Pay out what the OVM and its splits hold; claim Obol incentives.',
  },
];

/**
 * Pages of the reference. `module` is the bound `XModule` interface (client
 * namespace); `namespace` is the export of the same name with the pure
 * functions and types. `stages` maps method names to lifecycle stages.
 */
export const PAGES = [
  {
    id: 'client',
    title: 'Client and chains',
    sidebarLabel: 'Client & chains',
    access: 'createObolClient(config)',
    subpath: '@obolnetwork/obol-sdk',
    purpose:
      'One client binds every module to one chain, a viem `PublicClient`, an optional `WalletClient` (for EIP-712 signatures and `send`) and the Obol API (or `api: false` for chain-only). Mainnet (1) and Hoodi (560048) have the Obol contracts; Gnosis (100) and Sepolia (11155111) are accepted for cluster files and terms only. Each module is also its own entry point (`@obolnetwork/obol-sdk/ovm`, …) with `createObolContext` and `create<Module>Module`, so a page that needs one module loads only that one.',
    lifecycle: 'setup',
    rootFunctions: ['createObolClient', 'createObolContext', 'getObolChain', 'currentEpoch', 'isAddressInput'],
    rootConstants: ['CHAINS'],
    rootTypes: ['ObolClient', 'ObolClientConfig', 'ExperimentalModule', 'Context', 'ObolChain', 'ChainContracts', 'PublicForwarder'],
    specSections: { createObolClient: 'createObolClient' },
    stages: { createObolClient: 'setup', createObolContext: 'setup' },
    seeAlso: ['terms', 'send'],
  },
  {
    id: 'terms',
    title: 'obol.terms',
    namespace: 'terms',
    module: 'TermsModule',
    access: 'obol.terms',
    subpath: '@obolnetwork/obol-sdk/terms',
    purpose:
      'The Obol terms and conditions must be accepted once per address before it can create a cluster definition or accept an invite. Acceptance is an EIP-712 signature (without a chain id) posted to the Obol API.',
    lifecycle: 'setup',
    order: ['hasAccepted', 'accept'],
    stages: { hasAccepted: 'setup', accept: 'setup' },
    seeAlso: ['cluster'],
  },
  {
    id: 'setup',
    title: 'obol.setup',
    namespace: 'setup',
    module: 'SetupModule',
    access: 'obol.setup',
    subpath: '@obolnetwork/obol-sdk/setup',
    purpose:
      'Deploys an Obol Validator Manager (OVM) and the SplitV2 splits behind its principal and reward recipients, in one transaction where possible. The presets (`rewardsSplit`, `totalSplit`, `solo`) turn a list of recipients into the `prepareOvmWithSplits` input with the Obol RAF share added. The OVM address is the withdrawal address the cluster definition commits to, so this usually comes first.',
    lifecycle: 'rewards',
    order: ['rewardsSplit', 'totalSplit', 'solo', 'ovmSplitParams', 'prepareOvmWithSplits', 'prepareCreateOvm', 'ovmFromReceipt'],
    groupTitles: { helpers: 'Presets and helpers' },
    groupOrder: ['helpers', 'transactions', 'constants'],
    stages: { prepareOvmWithSplits: 'rewards', prepareCreateOvm: 'rewards', ovmFromReceipt: 'rewards' },
    specGroups: { 'setup presets': ['rewardsSplit', 'totalSplit', 'solo', 'ovmSplitParams'] },
    seeAlso: ['splits', 'ovm'],
  },
  {
    id: 'cluster',
    title: 'obol.cluster',
    namespace: 'cluster',
    module: 'ClusterModule',
    access: 'obol.cluster',
    subpath: '@obolnetwork/obol-sdk/cluster',
    purpose:
      'Cluster definitions and locks: build and post a definition, accept it as an operator, follow it until the lock is published, and verify definitions and locks (hashes, EIP-712 and EIP-1271 signatures, BLS share binding and deposit signatures) without running Charon. The verifiers also work without a client, from the `cluster` namespace.',
    lifecycle: 'create',
    order: [
      'prepareDefinition', 'create', 'accept', 'get', 'watch', 'getLock',
      'verifyDefinition', 'verifyLock', 'isValidLock',
      'computeConfigHash', 'computeDefinitionHash', 'computeLockHash',
    ],
    stages: {
      prepareDefinition: 'create', create: 'create', accept: 'create', get: 'create', watch: 'create',
      verifyDefinition: 'create', getLock: 'dkg', verifyLock: 'dkg', isValidLock: 'dkg',
    },
    groupOf: { prepareDefinition: 'signing' },
    groupTitles: { signing: 'Create and join a cluster', reads: 'Follow it and read the files' },
    groupOrder: ['signing', 'reads', 'checks', 'helpers', 'constants'],
    specGroups: {
      'cluster.get / cluster.getLock': ['get', 'getLock'],
      'cluster.computeConfigHash / cluster.computeLockHash': ['computeConfigHash', 'computeDefinitionHash', 'computeLockHash'],
      'cluster.parseEnr / cluster.isValidEnr': ['parseEnr', 'isValidEnr'],
    },
    seeAlso: ['deposits', 'terms'],
  },
  {
    id: 'deposits',
    title: 'obol.deposits',
    namespace: 'deposits',
    module: 'DepositsModule',
    access: 'obol.deposits',
    subpath: '@obolnetwork/obol-sdk/deposits',
    purpose:
      'Turns a verified lock into deposits and sends them safely: `fromLock` verifies the lock and returns the deposit data for one amount, `status` reads what the beacon chain already has for each pubkey (Obol API with EIP-6110 pending deposits, or a beacon node), and `prepareDeposit` checks credentials, signatures, OVM provenance and roles, and that a new validator does not exist yet, before building the batch or OVM deposit transactions.',
    lifecycle: 'deposit',
    order: ['fromLock', 'assertDepositData', 'status', 'prepareDeposit'],
    groupOf: { fromLock: 'reads' },
    groupTitles: { reads: 'Deposit data and status' },
    groupOrder: ['reads', 'checks', 'transactions', 'helpers', 'constants'],
    stages: { fromLock: 'deposit', assertDepositData: 'deposit', status: 'deposit', prepareDeposit: 'deposit' },
    seeAlso: ['cluster', 'ovm', 'send'],
  },
  {
    id: 'ovm',
    title: 'obol.ovm',
    namespace: 'ovm',
    module: 'OvmModule',
    access: 'obol.ovm',
    subpath: '@obolnetwork/obol-sdk/ovm',
    purpose:
      'Reads and writes for an Obol Validator Manager: where a contract came from (`getProvenance`), its state, roles and validators, EIP-7002 withdrawal and exit requests, EIP-7251 consolidations, distributions, and the role and ownership writes. Every write checks the beacon chain request rules it can, so a request the chain would ignore (and keep the fee of) is refused before it is signed.',
    lifecycle: 'operate',
    order: [
      'getProvenance', 'getState', 'getValidators', 'getRoleHolders',
      'prepareWithdraw', 'prepareConsolidate', 'prepareDistribute', 'previewDistribute',
      'prepareGrantRoles', 'prepareRevokeRoles', 'prepareRenounceRoles',
      'prepareTransfer', 'prepareRequestOwnershipHandover', 'prepareCancelOwnershipHandover', 'prepareCompleteOwnershipHandover',
      'prepareSetPrincipalRecipient', 'prepareSetRewardRecipient', 'prepareSetAmountOfPrincipalStake',
      'prepareSweep', 'prepareWithdrawPullBalance', 'prepareRecoverFunds',
      'routing', 'roleNames', 'expectedWithdrawalCredentials', 'OVM_ROLES', 'OVM_ALL_ROLES',
    ],
    stages: {
      getProvenance: 'operate', getState: 'operate', getValidators: 'operate', getRoleHolders: 'operate',
      prepareGrantRoles: 'operate', prepareTransfer: 'operate',
      prepareWithdraw: 'exit', prepareConsolidate: 'exit',
      prepareDistribute: 'distribute', previewDistribute: 'distribute',
    },
    specGroups: {
      'ovm role and ownership writes': [
        'prepareGrantRoles', 'prepareRevokeRoles', 'prepareRenounceRoles', 'prepareTransfer',
        'prepareRequestOwnershipHandover', 'prepareCancelOwnershipHandover', 'prepareCompleteOwnershipHandover',
        'prepareSetPrincipalRecipient', 'prepareSetRewardRecipient', 'prepareSetAmountOfPrincipalStake',
        'prepareSweep', 'prepareWithdrawPullBalance', 'prepareRecoverFunds',
      ],
      'ovm.OVM_ROLES / ovm.expectedWithdrawalCredentials': ['OVM_ROLES', 'OVM_ALL_ROLES', 'roleNames', 'expectedWithdrawalCredentials', 'routing'],
      'ovm.prepareDistribute': ['prepareDistribute', 'previewDistribute'],
    },
    seeAlso: ['splits', 'withdrawals', 'send'],
  },
  {
    id: 'splits',
    title: 'obol.splits',
    namespace: 'splits',
    module: 'SplitsModule',
    access: 'obol.splits',
    subpath: '@obolnetwork/obol-sdk/splits',
    purpose:
      'SplitV2 splits: share math in parts per million (`percent`, `splitParams`), deterministic addresses (`predictSplit`), creation, reads, and `prepareDistributeAll`, which distributes an OVM, the splits behind its recipients and the recipients\' Warehouse balances in one transaction.',
    lifecycle: 'distribute',
    order: [
      'percent', 'formatPercent', 'splitParams', 'predictSplit', 'prepareCreateSplit', 'getSplit',
      'prepareDistributeAll', 'previewDistributeAll', 'distributionFromReceipt',
    ],
    stages: {
      predictSplit: 'rewards', prepareCreateSplit: 'rewards',
      getSplit: 'distribute', prepareDistributeAll: 'distribute', previewDistributeAll: 'distribute', distributionFromReceipt: 'distribute',
    },
    specGroups: {
      'splits.percent / splits.formatPercent / splits.splitParams': ['percent', 'formatPercent', 'splitParams'],
      'splits.prepareDistributeAll': ['prepareDistributeAll', 'previewDistributeAll', 'distributionFromReceipt'],
    },
    seeAlso: ['setup', 'ovm'],
  },
  {
    id: 'incentives',
    title: 'obol.incentives',
    namespace: 'incentives',
    module: 'IncentivesModule',
    access: 'obol.incentives',
    subpath: '@obolnetwork/obol-sdk/incentives',
    purpose:
      'Obol incentives paid in OBOL through Merkle distributors: read what an address can claim, run every claim check without sending (`preflight`), and prepare the claim.',
    lifecycle: 'distribute',
    order: ['get', 'isClaimed', 'preflight', 'prepareClaim'],
    stages: { get: 'distribute', isClaimed: 'distribute', preflight: 'distribute', prepareClaim: 'distribute' },
    specGroups: { 'incentives.prepareClaim': ['preflight', 'prepareClaim'] },
    seeAlso: ['send'],
  },
  {
    id: 'exits',
    title: 'obol.exits',
    namespace: 'exits',
    module: 'ExitsModule',
    access: 'obol.exits',
    subpath: '@obolnetwork/obol-sdk/exits',
    purpose:
      'Charon partial exits as the Obol API stores them: `assertPartialExit` runs the checks the API runs before storing an operator\'s partial exit signatures, and `aggregate` combines a threshold of them into a signed voluntary exit (EIP-7044 domain, mainnet and Hoodi). The BLS helpers work on hex strings.',
    lifecycle: 'exit',
    order: ['assertPartialExit', 'aggregate', 'blsVerify', 'blsAggregate', 'blsThresholdAggregate', 'blsRecoverPubkey'],
    stages: { assertPartialExit: 'exit', aggregate: 'exit' },
    specGroups: { 'exits BLS helpers': ['blsVerify', 'blsAggregate', 'blsThresholdAggregate', 'blsRecoverPubkey'] },
    seeAlso: ['ovm', 'withdrawals'],
  },
  {
    id: 'withdrawals',
    title: 'obol.withdrawals',
    namespace: 'withdrawals',
    module: 'WithdrawalsModule',
    access: 'obol.withdrawals',
    subpath: '@obolnetwork/obol-sdk/withdrawals',
    purpose:
      'EIP-7002 withdrawal and exit requests for a validator whose withdrawal credentials point at an EOA, sent by that address straight to the predeploy. For OVM-credentialed validators use `ovm.prepareWithdraw`.',
    lifecycle: 'exit',
    order: ['prepareEoaWithdraw'],
    stages: { prepareEoaWithdraw: 'exit' },
    specSections: { prepareEoaWithdraw: 'withdrawals.prepareEoaWithdraw (2.15 `eoa.requestWithdrawal`)' },
    seeAlso: ['ovm'],
  },
  {
    id: 'send',
    title: 'send and acknowledgements',
    sidebarLabel: 'send & acknowledgements',
    access: 'obol.send(prepared, options)',
    subpath: '@obolnetwork/obol-sdk',
    purpose:
      '`send` is the one place a transaction leaves the SDK. It checks the chain, refuses a `Prepared` whose `warning` findings (or those of a simulation passed with it) are not acknowledged by code, sends `prepared.request` with the wallet and returns the hash at once, with `wait()` for the receipt (or, for a Safe, its execution). The helpers show the warnings and compute the codes; `findingsToAcknowledge` applies the same rule when your own wallet layer sends `request`.',
    lifecycle: 'all',
    rootFunctions: ['send', 'warningsOf', 'warningCodes', 'findingsToAcknowledge', 'isStale', 'waitForContractWalletExecution'],
    rootConstants: ['UNCHECKED_WARNING_CODES', 'FINDINGS', 'FINDING_CODES', 'FINDING_CODES_BY_KIND', 'SIMULATION_FINDING_CODES', 'PREPARED_KINDS'],
    rootTypes: [
      'SendOptions', 'Sent', 'WaitOptions', 'SimulationForSend', 'WarningCodeFor', 'SimulationWarningCode',
      'Prepared', 'AnyPrepared', 'PreparedKind', 'PreparedRequest', 'PreviewByKind', 'PreviewResult',
      'Finding', 'FindingsOf', 'FindingSubject', 'FindingCode', 'FindingCodeFor', 'WarningCode', 'SimulationFindingCode',
      'FindingInfo', 'FindingSeverity', 'FindingGroup',
    ],
    specSections: { send: 'send' },
    boundAs: { send: 'obol.send(prepared, options?)' },
    seeAlso: ['experimental'],
  },
  {
    id: 'experimental',
    title: 'obol.experimental',
    namespace: 'experimental',
    module: 'ExperimentalModule',
    access: 'obol.experimental',
    subpath: '@obolnetwork/obol-sdk/experimental',
    purpose:
      'Features whose result shapes may still change in a minor release. `simulate` runs a `Prepared` request on the node without sending it (`eth_simulateV1`, else `debug_traceCall`, else `eth_call`) and returns balance changes, events, state changes, plain-language `summary` lines and a comparison with the operation\'s own preview. `legacy` reads 2.x-era OWR contracts.',
    lifecycle: 'all',
    order: ['simulate', 'legacy'],
    extraModules: { legacy: { module: 'LegacyModule', namespace: 'legacy', access: 'obol.experimental.legacy' } },
    specSections: { simulate: 'simulate', getOwrTranches: 'legacy.getOwrTranches (2.15 `getOWRTranches`)' },
    seeAlso: ['send'],
  },
  {
    id: 'checks',
    title: 'Standalone checks',
    sidebarLabel: 'Standalone checks',
    access: "import { isValidLock } from '@obolnetwork/obol-sdk'",
    subpath: '@obolnetwork/obol-sdk',
    purpose:
      'Root exports that need no client, for servers that verify what users send them (the Obol API uses them): `isValidLock` (a boolean; `cluster.verifyLock` returns the failing step), `isValidTypedDataSignature` (an EIP-712 bearer signature from an account or, through EIP-1271, a Safe), and the error helpers. On a Node server pass the native BLS backend from `@obolnetwork/obol-sdk/blst`.',
    lifecycle: 'dkg',
    rootFunctions: ['isValidLock', 'isValidTypedDataSignature', 'isObolError'],
    rootConstants: ['OBOL_ERROR_CODES'],
    rootTypes: ['EIP712TypedData', 'PublicClients', 'SignatureClients', 'BlsBackend', 'BlsBatch'],
    specSections: { isValidLock: 'cluster.isValidLock', isValidTypedDataSignature: 'isValidTypedDataSignature' },
    seeAlso: ['blst', 'cluster'],
  },
  {
    id: 'blst',
    title: '@obolnetwork/obol-sdk/blst',
    sidebarLabel: '/blst (Node)',
    access: "import { loadBlstBackend } from '@obolnetwork/obol-sdk/blst'",
    subpath: '@obolnetwork/obol-sdk/blst',
    entry: 'src/blst/index.ts',
    purpose:
      'Node-only entry with the native BLS backend over the optional peer dependency `@chainsafe/blst`. Pass it as `bls` to `verifyLock`, `isValidLock`, `assertDepositData` and the exit helpers: a 1,000-validator lock at `full` takes about 1.3 s instead of 80 s of event-loop time. No other entry imports it, and the browser build has none.',
    lifecycle: 'dkg',
    rootFunctions: ['loadBlstBackend', 'blstBackendFrom'],
    rootTypes: ['BlstModule', 'BlstPublicKey', 'BlstSignature'],
    specSections: { loadBlstBackend: '@obolnetwork/obol-sdk/blst', blstBackendFrom: '@obolnetwork/obol-sdk/blst' },
    seeAlso: ['checks', 'cluster'],
  },
];
