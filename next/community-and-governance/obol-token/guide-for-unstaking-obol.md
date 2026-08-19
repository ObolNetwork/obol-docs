# Guide for Unstaking OBOL

With the [previous staking interface hosted by Tally being deprecated](https://x.com/tallyxyz/status/2033917127304814802?s=20), you can still unstake your OBOL at any time directly on-chain. All smart contracts remain live and fully functional.

Below is a step-by-step guide to help you withdraw your tokens.

## Overview

If you previously staked OBOL, you received stOBOL in return. To unstake you will:

* interact with the stOBOL contract
* call the unstake function
* receive your OBOL back in your wallet

## Step-by-Step Guide

### 1. Go to the stOBOL Contract

Open the contract on Etherscan:

[https://etherscan.io/address/0x6590cBBCCbE6B83eF3774Ef1904D86A7B02c2fCC#writeContract](https://etherscan.io/address/0x6590cBBCCbE6B83eF3774Ef1904D86A7B02c2fCC#writeContract)

### 2. Connect Your Wallet

* Click “Connect to Web3”
* Select your wallet (e.g. MetaMask)
* Make sure you are on Ethereum Mainnet

### 3. Find the unstake function

In the list of functions, locate:

```
unstake
```

### 4. Enter the Amount

You need to enter the amount in wei (18 decimals).

Examples:

* 1 OBOL → 1000000000000000000
* 2 OBOL → 2000000000000000000

💡 Tip: If you want to fully exit, enter your full stOBOL balance.

### 5. Submit the Transaction

* Click “Write”
* Confirm the transaction in your wallet

## What Happens Next

Once the transaction is confirmed:

* your stOBOL balance decreases
* your OBOL tokens are returned to your wallet

You can verify the transaction on Etherscan.

## Notes

* You do not need to approve anything before unstaking
* You can unstake at any time, there are no lockups
* If you have multiple deposits, the contract handles this automatically

## Coming Soon

We are currently building a lightweight interface to make this process easier.

Until then, you can always unstake using the steps above.
