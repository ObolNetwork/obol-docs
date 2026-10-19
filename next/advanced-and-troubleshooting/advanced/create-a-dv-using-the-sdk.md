# Create a DV Using the SDK

This is a walkthrough of using the [Obol SDK](https://www.npmjs.com/package/@obolnetwork/obol-sdk) to create a four-node distributed validator cluster on the Hoodi testnet, from code instead of the [DV Launchpad](../../learn/intro/launchpad.md) UI. By the end you will have:

1. Accepted the Obol terms and conditions.
2. Optionally deployed an [Obol Validator Manager (OVM)](ovm-predeploy.mdx) and a rewards split.
3. Created a cluster definition and invited four operators to it.
4. Had the operators accept the invite and run the Distributed Key Generation (DKG) ceremony.
5. Deposited 32 ETH per validator to activate them.

:::info
This guide needs `@obolnetwork/obol-sdk` v2.15 or later. Earlier versions do not have `hasAcceptedTerms`, `getDepositData`, deposit verification (with `kind: 'topUp'` for top-ups) or the typed errors used below. The full API is in the [SDK reference](../../sdk/index.md).
:::

### Pre-requisites {#pre-requisites}
* [Node.js](https://nodejs.org/en) 20 or later.
* A private key for the cluster creator with Hoodi ETH: some for gas, plus 32 ETH per validator if the same key makes the deposits. Use a throwaway testnet key, never a key that holds mainnet funds.
* The Ethereum addresses of the four node operators. Each operator needs a Charon ENR (see [Get your ENR](../../run-a-dv/start/create-a-dv-with-a-group.mdx#step-1-get-your-enr)) and their own key with a little Hoodi ETH if they accept the invite with the SDK.
* Optional: a Hoodi execution RPC URL. The examples fall back to the public `publicnode.com` endpoint.

### Install the package {#install-the-package}
Create a project and install the SDK, `ethers` and [`tsx`](https://tsx.is/) to run the TypeScript files directly:

<Tabs>
<TabItem value="npm" label="NPM">
```sh
mkdir obol-sdk-demo && cd obol-sdk-demo
npm init -y
npm install @obolnetwork/obol-sdk ethers
npm install --save-dev tsx typescript @types/node
```
</TabItem>

<TabItem value="yarn" label="Yarn">
```sh
mkdir obol-sdk-demo && cd obol-sdk-demo
yarn init -y
yarn add @obolnetwork/obol-sdk ethers
yarn add --dev tsx typescript @types/node
```
</TabItem>
</Tabs>

### Instantiate the client {#instantiate-the-client}
Every script below imports its client from a shared `client.ts`. The `Client` constructor takes:

* A config object with the `chainId`: `560048` for Hoodi or `1` for Mainnet. Gnosis (`100`) and Sepolia (`11155111`) are accepted for cluster definitions and locks only, without splitter contracts. Other chain IDs throw `UnsupportedChainError`.
* A signer, which is needed for anything that signs or sends a transaction. Any ethers v6 `Signer` works.
* Optionally, a provider for on-chain reads. It defaults to the signer's provider.

Read-only calls such as `getClusterDefinition`, `getClusterLock` and `getDepositData` work without a signer: `new Client({ chainId: 560048 })`.

```ts title="client.ts"


export const HOODI_CHAIN_ID = 560048;

export function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Set the ${name} environment variable`);
  }
  return value;
}

const provider = new JsonRpcProvider(
  process.env.RPC_HOODI ?? 'https://ethereum-hoodi-rpc.publicnode.com',
);

export const signer = new Wallet(requireEnv('PRIVATE_KEY'), provider);

export const client = new Client({ chainId: HOODI_CHAIN_ID }, signer);
```

Before it sends a transaction or signs chain-bound data, the SDK checks that the signer's provider is on the client's chain and throws `ChainMismatchError` if it is not.

Add the shared error handler that every script uses. It is explained in [Handle errors](#handle-errors).

```ts title="errors.ts"

export function reportError(err: unknown): void {
  if (err instanceof ObolApiError) {
    // The Obol API rejected the request (400, 401/403, 404, 409, 429, ...).
    console.error(
      `Obol API error ${err.status} on ${err.method} ${err.endpoint}: ${err.message}`,
    );
    if (err.hint) console.error(`Hint: ${err.hint}`);
  } else if (err instanceof ObolSdkError) {
    // A check the SDK runs locally failed; nothing was signed or sent.
    console.error(`${err.name} (${err.code}): ${err.message}`);
    if (err.hint) console.error(`Hint: ${err.hint}`);
  } else {
    console.error(err);
  }
  process.exitCode = 1;
}
```

### Accept the terms and conditions {#accept-the-terms-and-conditions}
Each address must accept the [latest Obol terms and conditions](https://obol.org/terms.pdf) once before it can create or accept a cluster definition. Accepting signs an EIP-712 message; no transaction is sent. `hasAcceptedTerms()` checks the signer's address (or the address you pass), and `{ ifNotAccepted: true }` makes accepting a no-op when the address has already accepted, so it is safe to call at the start of every script:

```ts title="terms.ts"


async function main(): Promise<void> {
  console.log('Terms accepted:', await client.hasAcceptedTerms());

  // Signs the terms (EIP-712, no transaction) only if this address has not already accepted them.
  const message = await client.acceptObolLatestTermsAndConditions({
    ifNotAccepted: true,
  });
  console.log(message);
}

main().catch(reportError);
```

```sh
PRIVATE_KEY=0x... npx tsx terms.ts
```

Without `ifNotAccepted`, accepting again throws a `ConflictError`.

### Propose the cluster {#propose-the-cluster}
A cluster definition lists the operators' addresses and, for each validator, a withdrawal address (principal and skimmed rewards) and a fee recipient (block rewards and MEV). You can use plain addresses, or deploy an Obol Validator Manager (OVM) and rewards split first and use those:

* `client.splits.createValidatorManagerAndRewardsSplit` deploys an [OVM](ovm-predeploy.mdx) as the withdrawal address and a split contract as the fee recipient. The principal goes to `principalRecipient` and rewards are split between `rewardSplitRecipients`. Their allocations must add up to 99%, because the SDK adds 1% for Obol's [Retroactive Funding](../../learn/intro/obol-collective.md). `OVMOwnerAddress` can request withdrawals and [assign OVM roles](assign-ovm-roles.md). Deploying sends transactions, so the creator pays the gas.
* `client.splits.createValidatorManagerAndTotalSplit` also splits the principal, between `principalSplitRecipients`.

`createClusterDefinition` validates the payload before signing anything: the operator addresses (format, duplicates, at least four), the withdrawal and fee recipients, and the signer's chain. A failed check throws `PayloadValidationError` or `ChainMismatchError`. It then signs the payload and returns the definition's `config_hash`, which identifies the cluster from now on. The threshold is set to two thirds of the operators, rounded up.

```ts title="create.ts"



// The Ethereum addresses of the four node operators. Replace with your own.
const OPERATORS = [
  '0xC35CfCd67b9C27345a54EDEcC1033F2284148c81',
  '0x33807D6F1DCe44b9C599fFE03640762A6F08C496',
  '0xc6e76F72Ea672FAe05C357157CfC37720F0aF26f',
  '0x86B8145c98e5BD25BA722645b15eD65f024a87EC',
];

const NUMBER_OF_VALIDATORS = 1;

// true: deploy an Obol Validator Manager (OVM) and a rewards split, and use
// them as the withdrawal address and fee recipient.
// false: send principal and rewards straight to the creator's address.
const USE_OVM = true;

async function main(): Promise<void> {
  const creator = await signer.getAddress();

  // Required once per address before creating a cluster.
  await client.acceptObolLatestTermsAndConditions({ ifNotAccepted: true });

  let withdrawalAddress = creator;
  let feeRecipientAddress = creator;

  if (USE_OVM) {
    // Sends transactions on Hoodi; the creator pays the gas.
    const ovm = await client.splits.createValidatorManagerAndRewardsSplit({
      // Allocations must add up to 99%: the SDK adds 1% for Obol's
      // Retroactive Funding.
      rewardSplitRecipients: OPERATORS.map(address => ({
        address,
        percentAllocation: 24.75,
      })),
      // Receives the validators' principal when they exit.
      principalRecipient: creator,
      // Can request withdrawals and manage the OVM.
      OVMOwnerAddress: creator,
    });
    withdrawalAddress = ovm.withdrawal_address; // the OVM
    feeRecipientAddress = ovm.fee_recipient_address; // the rewards split
    console.log(`OVM: ${withdrawalAddress}`);
    console.log(`Rewards split: ${feeRecipientAddress}`);
  }

  const payload: ClusterPayload = {
    name: 'SDK Demo Cluster',
    operators: OPERATORS.map(address => ({ address })),
    validators: Array.from({ length: NUMBER_OF_VALIDATORS }, () => ({
      withdrawal_address: withdrawalAddress,
      fee_recipient_address: feeRecipientAddress,
    })),
  };

  // Validates the payload, signs it and posts the definition to the Obol API.
  const configHash = await client.createClusterDefinition(payload);

  console.log(`Config hash: ${configHash}`);
  console.log(
    `Invite the operators: https://hoodi.launchpad.obol.org/dv?configHash=${configHash}`,
  );
}

main().catch(reportError);
```

```sh
PRIVATE_KEY=0x... npx tsx create.ts
```

Note the printed config hash, and the OVM address if you deployed one: you need it to deposit.

If a later step of your own script fails after `createClusterDefinition` returned, do not create the cluster again: that makes a second definition with a new config hash. Continue with the config hash you already have. Re-running the OVM step is safe: an OVM and split that are already deployed are reused, not deployed again.

### Invite the Operators to complete the DKG {#invite-the-operators-to-complete-the-dkg}
Share the config hash, or the invite link, with the four operators. Each operator accepts the definition with their own address and ENR, in either of two ways:

* **DV Launchpad:** open `https://hoodi.launchpad.obol.org/dv?configHash=<CONFIG_HASH>` and follow the [run a DV with others](../../run-a-dv/start/create-a-dv-with-a-group.mdx) flow.
* **SDK:** run the script below with their own `client.ts` and `PRIVATE_KEY`.

`getClusterDefinition` fetches the definition, so you can show the operators and the withdrawal and fee recipient addresses to the operator before they accept: the validators' principal and rewards go to those addresses. `acceptClusterDefinition` then verifies the definition locally (it recomputes the config hash and checks the network, throwing `DefinitionVerificationError` otherwise), checks that the signer is one of the operators (`NotAnOperatorError` otherwise), and signs the config hash and the ENR. Running it again with the same ENR does nothing.

```ts title="accept.ts"




async function main(): Promise<void> {
  const configHash = requireEnv('CONFIG_HASH');
  const enr = requireEnv('ENR'); // from `charon create enr`

  await client.acceptObolLatestTermsAndConditions({ ifNotAccepted: true });

  const definition = await client.getClusterDefinition(configHash);
  const unique = (values: string[]): string => [...new Set(values)].join(', ');
  console.log(`Cluster: ${definition.name}`);
  console.log(`Operators: ${definition.operators.map(o => o.address).join(', ')}`);
  console.log(`Threshold: ${definition.threshold} of ${definition.operators.length}`);
  console.log(`Validators: ${definition.num_validators}`);
  console.log(
    `Withdrawal addresses: ${unique(definition.validators.map(v => v.withdrawal_address))}`,
  );
  console.log(
    `Fee recipients: ${unique(definition.validators.map(v => v.fee_recipient_address))}`,
  );

  const rl = createInterface({ input: stdin, output: stdout });
  const answer = await rl.question('Accept this cluster definition? (yes/no) ');
  rl.close();
  if (answer.trim().toLowerCase() !== 'yes') {
    console.log('Not accepted.');
    return;
  }

  // Verifies the definition, then signs the config hash and your ENR. Safe to
  // re-run with the same ENR.
  await client.acceptClusterDefinition({ enr }, configHash);
  console.log('Accepted. Wait for the other operators, then run the DKG.');
}

main().catch(reportError);
```

```sh
PRIVATE_KEY=0x... CONFIG_HASH=0x... ENR=enr:-... npx tsx accept.ts
```

Once every operator has accepted, the operators run the DKG together, at the same time, from the directory that holds their `.charon/charon-enr-private-key`. With `--publish`, Charon uploads the resulting cluster lock to the Obol API:

```sh
docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v1.11.0 dkg \
  --definition-file="https://api.obol.tech/v1/definition/<CONFIG_HASH>" \
  --publish
```

Operators who accepted on the Launchpad can copy the same command from its DKG step instead. After the DKG, each operator has a `cluster-lock.json` and their `validator_keys/` in `.charon`. Back these up and [start the cluster](../../run-a-dv/start/create-a-dv-with-a-group.mdx).

### Retrieve the created Distributed Validators using the SDK {#retrieve-the-created-distributed-validators-using-the-sdk}
The creator, or anyone else, can check the cluster's progress without a signer. Each operator that has accepted has a `config_signature` in the definition, and once the DKG has completed, `getClusterLock(configHash)` returns the published lock; until then it throws `NotFoundError`.

```ts title="status.ts"



async function main(): Promise<void> {
  const configHash = requireEnv('CONFIG_HASH');

  const definition = await client.getClusterDefinition(configHash);
  const accepted = definition.operators.filter(o => o.config_signature).length;
  console.log(`${accepted}/${definition.operators.length} operators accepted`);

  try {
    const lock = await client.getClusterLock(configHash);
    console.log(`Lock hash: ${lock.lock_hash}`);
    for (const validator of lock.distributed_validators) {
      console.log(`Validator: ${validator.distributed_public_key}`);
    }
  } catch (err) {
    if (err instanceof NotFoundError) {
      console.log('No lock yet: the DKG has not completed.');
      return;
    }
    throw err;
  }
}

main().catch(reportError);
```

```sh
PRIVATE_KEY=0x... CONFIG_HASH=0x... npx tsx status.ts
```

You can also fetch a lock by its hash with `client.getClusterLockByHash(lockHash)`. To check a lock file without the API or Charon, use the standalone `validateClusterLock(lock)` export.

### Activate the DVs using the deposit contract {#activate-the-dvs-using-the-deposit-contract}
To activate the validators, deposit 32 ETH for each one. Do not build deposit transactions by hand from the lock:

* `getDepositData(lockHash)` fetches the lock and validates it first (operator signatures, lock hash, every deposit signature). It checks that the lock is for the client's chain and returns the deposits with amounts in wei. This can take up to a minute for locks with hundreds of validators. A lock can hold several deposit amounts per validator (for example 1 ETH and 32 ETH); passing `amount` picks one.
* `client.eoa.deposit` sends the deposits in batches through the batch deposit contract. `client.splits.deposit` deposits through the cluster's OVM, and checks that the withdrawal credentials point at it. Both verify each deposit before sending ETH: deposit data root, BLS signature for the chain, and an amount between 1 and 32 ETH (up to 2048 ETH for compounding validators). Pass `expectedWithdrawalAddress` to `eoa.deposit` to check the withdrawal credentials as well.

```ts title="deposit.ts"



async function main(): Promise<void> {
  const lockHash = requireEnv('LOCK_HASH');
  // Set OVM_ADDRESS if the cluster's withdrawal address is an OVM.
  const ovmAddress = process.env.OVM_ADDRESS;

  // Validates the lock (signatures, lock hash, deposit signatures) and
  // returns one 32 ETH deposit per validator, amounts in wei.
  const { deposits } = await client.getDepositData(lockHash, {
    amount: parseEther('32').toString(),
  });
  if (!deposits) {
    throw new Error('The lock has no 32 ETH deposit data');
  }

  // Both methods verify every deposit before sending ETH.
  const { txHashes } = ovmAddress
    ? await client.splits.deposit({ ovmAddress, deposits })
    : await client.eoa.deposit({ deposits });
  console.log(`Deposit transactions: ${txHashes.join(', ')}`);
}

main().catch(reportError);
```

```sh
PRIVATE_KEY=0x... LOCK_HASH=0x... OVM_ADDRESS=0x... npx tsx deposit.ts
```

Leave out `OVM_ADDRESS` if you set `USE_OVM = false`.

**Top-ups:** a deposit to a validator that already exists has no valid deposit signature for the SDK to check, and may use all-zero withdrawal credentials. Pass `kind: 'topUp'` to assert that every deposit tops up an existing validator: the SDK then skips the signature check, accepts the expected or all-zero withdrawal credentials, and allows up to 2048 ETH per deposit. A top-up to a validator that does not exist yet is lost, so check the validators on a beacon node first. Without `kind: 'topUp'`, a deposit with an all-zero signature is refused with code `DEPOSIT_LOOKS_LIKE_TOP_UP`.

This guide targets Hoodi. Gnosis and Sepolia remain usable for cluster definitions and locks, but splits and OVMs are not available on them. The depositing key needs 32 ETH per validator plus gas. Once the deposits are processed, the validators enter the activation queue. Follow their status on the cluster's page in the [DV Launchpad](../../learn/intro/launchpad.md) at `https://hoodi.launchpad.obol.org/cluster/details?lockHash=<LOCK_HASH>`, and see [Activate a DV](../../run-a-dv/running/activate-a-dv.md) for what happens next.

### Handle errors {#handle-errors}
The SDK throws typed errors, so you can tell an API rejection from a failed local check. `reportError` in `errors.ts` above handles both:

* **`ObolApiError`**: the Obol API returned an error. It carries `status`, `method`, `endpoint`, the response `body` and, where the SDK has one, a `hint`. The subclasses are `ValidationError` (400/422), `UnauthorizedError` (401/403), `NotFoundError` (404), `ConflictError` (409, for example a definition that already exists) and `RateLimitError` (429).
* **`ObolSdkError`**: a check the SDK runs locally failed, in all cases but `TransactionSubmissionError` before anything was signed or sent. It carries a stable `code` and a `hint`:

| Error | `code` | When |
|-------|--------|------|
| `ChainMismatchError` | `CHAIN_MISMATCH` | The signer's provider is on a different chain than the client. |
| `DefinitionVerificationError` | `DEFINITION_VERIFICATION_FAILED` | The definition fetched from the API does not match its config hash or the client's network. Do not accept it. |
| `NotAnOperatorError` | `NOT_AN_OPERATOR` | The signer is not one of the definition's operators. |
| `TransactionSubmissionError` | `TX_FAILED_AFTER_SEND` | A deposit, withdrawal or claim failed after a transaction was broadcast. `txHashes` and `pendingTxHash` say what was sent. A `pendingStatus` of `reverted` means nothing moved and a retry is safe; `unconfirmed` means it may still be mined, so check it first. Pass `{ onSent }` to get each hash as soon as it is broadcast. |
| `PayloadValidationError` | `PAYLOAD_INVALID` | A payload failed schema validation, for example split allocations that do not add up or duplicate operator addresses. See `errors`. |
| `InvalidArgumentError` | `INVALID_ARGUMENT` | A hash or address argument is malformed. |
| `ObolSdkError` | `DEPOSIT_LOOKS_LIKE_TOP_UP` | A deposit has an all-zero signature, but `kind: 'topUp'` was not given. |

Other errors: `RequestTimeoutError` when an API request takes longer than `timeoutMs` (30 seconds by default, set it in the `Client` config), `SignerRequiredError` when a write method is called on a client without a signer, and `UnsupportedChainError` for an unsupported `chainId`.

### Usage Examples {#usage-examples}
* Working TypeScript and JavaScript examples are in [obol-sdk-examples](https://github.com/ObolNetwork/obol-sdk-examples).
* Every method and type is listed in the [SDK reference](../../sdk/index.md).
* To run on Mainnet, use `chainId: 1`, a Mainnet RPC, and `https://launchpad.obol.org` in place of `https://hoodi.launchpad.obol.org`.
