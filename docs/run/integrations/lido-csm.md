---
sidebar_position: 2
description: Setup and run a DV within the Lido Community Staking Module 
---
# Create a Lido CSM DV

This is a guide on taking part in Lido's [Community Staking Module](https://operatorportal.lido.fi/modules/community-staking-module) (CSM) with a squad as part of a [Distributed Validator Cluster](../../learn/intro/key-concepts.md#distributed-validator-cluster).

To start, this guide makes a couple assumptions:

1.  You're running a Linux distribution and you've installed [Git](https://git-scm.com/downloads) and [Docker](https://docs.docker.com/engine/install/) (as a [non-root user](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user)). 
2.  You will be deploying on Ethereum mainnet. Some screenshots in this guide are from Holesky just for demonstration purposes, so please verify you are using the correct [mainnet addresses](https://operatorportal.lido.fi/modules/community-staking-module#block-d8e94f551b2e47029a54e6cedea914a7).

## Getting started

This guide is broken down into 3 parts:

Part 1: Creating a shared [SAFE](https://safe.global/) wallet for the cluster, and a [Splits.org](https://splits.org) reward splitting contract

Part 2: Using the [Obol DV Launchpad](https://launchpad.obol.org/) + CLI to create the cluster

Part 3: Deploying the validator to Lido's CSM using their UI.

:::info
In this guide we'll be using CSM UI in advanced mode, using the `extendedManagerPermissions` to set the `managerAddress` to the cluster multi-sig (SAFE) and the `rewardAddress` to the Splits.org splitting contract. 
:::

## Part 1: Creating the Cluster SAFE + Splitter Contract
### Deploy the SAFE 

Detailed instructions on how to create a SAFE Wallet can be found [here](https://help.safe.global/en/articles/40868-creating-a-safe-on-a-web-browser). 

The squad leader should obtain signing addresses for all the cluster members, to create a new SAFE with the operators all as owners. 

![SAFE UI Login Screen](/img/CSM_walkthrough1.png)

After giving the Safe a name and selecting the appropriate network, continue by clicking the **Next** button.

![Create SAFE UI](/img/CSM_walkthrough2.png)

Add all the signer addresses of the cluster members, select a threshold, and proceed to the final step by clicking the **Next** button.

:::tip
Don't require 100% of signers to approve transactions, in case someone loses access to their address. Using the same [threshold](../../learn/intro/key-concepts.md#distributed-validator-threshold) as your cluster will use is a reasonable starting point.
:::

![Setting SAFE Threshold](/img/CSM_walkthrough3.png)

Finally, submit the transaction to create the Safe by clicking on the **Create** button.

![Creating the SAFE](/img/CSM_walkthrough4.png)

### Deploy the Splitter Contract

The squad leader should obtain the reward addresses from all the cluster members (if members want to use a distinct address to the one they sign with for receiving rewards). Open https://app.splits.org and create a `New contract`. Make sure to select the appropriate network. 

![Choosing Network](/img/CSM_walkthrough5.png)

Select `Split` for the contract type.

![Selecting Split Contract](/img/CSM_walkthrough6.png)

Add the reward addresses of all cluster members. Choose whether the contract is immutable (reccommended option), whether to sponsor the maintainers of [splits.org](https://splits.org), and optionally whether to set a distribution bounty such that third parties could pay the gas costs of distributing the accrued rewards in exchange for a small fee.

:::tip
If your cluster would like to contribute a portion of its rewards to Obol’s '[1% for Decentralisation](https://blog.obol.org/1-percent-for-decentralisation/)' Retroactive Fund, thereby earning [Obol Contributions](https://obol.org/contributions) as part of Lido's [integration of CSM](https://research.lido.fi/t/integrate-csm-into-the-decentralized-validator-vault/8621) into the  DV Vault, you must add [retroactivefunding.obol.eth](https://etherscan.io/address/0xDe5aE4De36c966747Ea7DF13BD9589642e2B1D0d) as a recipient of 0.1% of the splitter contract. This will contribute 0.1% of rewards **and your CSM bond** to Obol's RAF. Future versions of CSM integrations will enable contributing exactly 1% of accruing CSM rewards.
:::

![Adding recipients](/img/CSM_walkthrough7.png)

Finally, click the **Create Split** button, execute the transaction and share the created split contract with all cluster members for review.


## Part 2: Use the DV Launchpad + CLI to create the cluster keys

`Charon` is the middleware client that enables validators to be run by a group of independent node operators - a cluster or squad. A complete multi-container `Docker` setup including execution client, consensus client, validator client, MEV-Boost, the `Charon` client and monitoring tools can be found in [this repository](https://github.com/ObolNetwork/charon-distributed-validator-node). 


### Step 1: Clone the repo

```sh
git clone https://github.com/ObolNetwork/charon-distributed-validator-node.git
```

### Step 2: Create ENR and Backup your Private Key

Enter the CDVN directory:

```sh
cd charon-distributed-validator-node
```

Use docker to create an ENR

```sh
docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v1.2.0 create enr
```

### Back up the private key located in `.charon/charon-enr-private-key`

![Creating a charon ENR key pair](/img/CSM_walkthrough8.png)

:::caution
What you see in the console starting with `enr:-` is the **public key** for your Charon node (known as an ENR). The **private key** is in the file `.charon/charon-enr-private-key`, be sure to back it up securely. 
:::


### Step 3: Create the DV cluster configuration using the Launchpad

Obol has integrated a CSM details into the DV Launchpad. Choosing the "Lido CSM" withdrawal configuration allows you to create up to 12 validator keys (CSM's Early Access limit) with Lido's required withdrawal and fee recipient addresses.

To start, the squad leader opens the [DV Launchpad](https://launchpad.obol.org), then connects their wallet and chooses **Create a cluster with a group**.

![DV Launchpad Home Page](/img/CSM_walkthrough9.png)

Then click **Get Started**.

![Creation Summary Screen](/img/CSM_walkthrough10.png)

Accept all the necessary advisories and sign to confirm.

![Obol Warnings, Terms, and Advisories](/img/CSM_walkthrough11.png)

Cluster configuration begins next. First, select the cluster name and size, then enter all cluster members signer addresses.

![Configure Cluster Page](/img/CSM_walkthrough12.png)

- Select the number of validators to create (CSM's Early Access phase is capped at a maximum 12 validators).
- (If the cluster creator is taking part in the cluster) Enter your Charon node's ENR which was generated during [step 2](#step-2-create-enr-and-backup-your-private-key) above.
- In the **Withdrawal Configuration** field, select `LIDO CSM`. This will automatically fill the required Withdrawal Address and Fee Recipient Addresss per [Lido's Documentation](https://operatorportal.lido.fi/modules/community-staking-module#block-d8e94f551b2e47029a54e6cedea914a7).
- Finally, click on the **Create Cluster Configuration** button.

![Further Cluster Configuration](/img/CSM_walkthrough13.png)

Lastly, share the cluster invite link with the other cluster members.

![Cluster Invitation Page](/img/CSM_walkthrough14.png)


### Step 4: Distributed Key Generation (DKG)

All squad members need to open the cluster invitation link, connect their wallet, accept all necessary advisories, and to verify the cluster configuration is correct with a signature. Each squad member will also need to upload and sign an ENR to represent their charon client, so see [steps 1](#step-1-clone-the-repo) and [2](#step-2-create-enr-and-backup-your-private-key) above.

![Cluster Invitation Acceptance Page](/img/CSM_walkthrough15.png)

Once all members confirm the configuration they will see the **Continue** button.

![Prepare for DKG Page](/img/CSM_walkthrough16.png)

On the next page, they will find a CLI command which is used to begin the Distributed Key Generation (DKG) ceremony. All members need to synchronously complete this step. 

![DKG Command to Run](/img/CSM_walkthrough17.png)

:::tip
Go back to the terminal and make sure you're in the `charon-distributed-validator-node` directory before running the DKG command:

```sh
pwd
```

If you are not, navigate to it using the `cd` command.
:::

Paste the DKG command into your terminal and wait for all the other squad members to connect and complete the DKG ceremony.

![Completed DKG CLI Output](/img/CSM_walkthrough18.png)

New files were generated:  `cluster-lock.json`, `deposit-data.json`, `validator_keys` are all found in the  `.charon` folder (hidden by default). This contains each operator's partial key signatures for the validators.

:::danger
At this point, **each operator must make a backup of the `.charon` folder and keep it safe, as validator keys cannot be recreated if lost**.
:::

### Step 5: Create a `.env` file for Mainnet

Copy and rename the `.env.sample.mainnet` file to `.env`

```sh
cp .env.sample.mainnet .env
```

Open the `.env` file using you favourite editor:

```sh
nano .env
```

Uncomment and set `BUILDER_API_ENABLED=true`.

Uncomment `MEVBOOST_RELAYS=` and set it to the URL of at least one of Lido's approved MEV relays [here](https://enchanted-direction-844.notion.site/6d369eb33f664487800b0dedfe32171e?v=8e5d1f1276b0493caea8a2aa1517ed65). Multiple relays must be separated by a comma. Consult our [deployment best practices](../prepare/deployment-best-practices.md#mev-boost-relays) for further info on MEV relay selection. 


### Step 6: Starting the Node

Each cluster member should start the node with the following command:

```sh
docker compose up -d
```

At this point, execution and consensus clients should start syncing. Charon and the validator client should start waiting for the consensus client to be synced and the validator to be activated. 


## Part 3: Upload the public keys and deposit to Lido CSM

CSM is launching with a whitelisted set of approved operators (Early Access). The squad member with EA should be the one to create the node through the CSM widget. 

The EA member will head to [CSM Extended Mode](https://csm.lido.fi/?mode=extended) and connect their wallet. (Note the `mode=extended` parameter.) This allows the Lido CSM reward address to be set to the split contract created earlier. 

![CSM Connect Wallet Modal](/img/CSM_walkthrough19.png)

The EA member clicks on the **Create Node Operator** button.

![CSM Create Node Operator Modal](/img/CSM_walkthrough20.png)

- The EA member pastes the contents of the `deposit-data.json` file into the `Upload deposit data` field. The EA member should have enough ETH/stETH/wstETH to cover the bond.

- Expand the **Specify custom addresses** section.

    - Set the **Reward Address** field to the `Split` contract address and the **Manager Address** field to the `Safe` wallet address. (These were created previously in [part 1](#part-1-creating-the-cluster-safe--splitter-contract))

    - Verify that the **Extended** box is outlined. This ensures that the `Safe` address has the ability to change the reward address if necessary. 

- Check that the correct addresses are set and click the **Create Node Operator** button.

![CSM Extended Mode Settings](/img/CSM_walkthrough21.png)

Sign the transaction. The cluster is ready for deposit from Lido CSM. At this point, your job is finished.

:::warning
When claiming your cluster's rewards, **be sure to claim in wstETH**. Claiming native ETH will result in loss of funds. Rebasing tokens like stETH may not receive the incremental yield you’re expecting. More information can be found in the [splits.org documentation](https://docs.splits.org/core/split#how-it-works).
:::
