// Examples for obol.splits, obol.setup and obol.incentives. See client.ts for the format.
// #region imports
import { splits, setup } from '@obolnetwork/obol-sdk';
import { parseEther } from 'viem';
// #endregion

export async function examples() {
  // #region splits.percent
  const share = splits.percent('33.3333'); // 333333n parts per million
  // #endregion

  // #region splits.formatPercent
  const label = splits.formatPercent(333_333n); // '33.3333'
  // #endregion

  // #region splits.splitParams
  const params = splits.splitParams([
    { address: '0x5c2f1a8a6a0b3b0ad7a3d8d5f0b6f4c7e2a1b9c3', share: splits.percent(50) },
    { address: '0x9a1b2c3d4e5f60718293a4b5c6d7e8f901234567', share: splits.percent(50) },
  ]);
  // #endregion

  // #region splits.predictSplit
  const recipients = [
    { address: '0x5c2f1a8a6a0b3b0ad7a3d8d5f0b6f4c7e2a1b9c3', share: splits.percent(50) },
    { address: '0x9a1b2c3d4e5f60718293a4b5c6d7e8f901234567', share: splits.percent(50) },
  ];
  const { address, exists } = await obol.splits.predictSplit({ params: splits.splitParams(recipients), owner: '0x0000000000000000000000000000000000000000' });
  // #endregion

  // #region splits.prepareCreateSplit
  const create = await obol.splits.prepareCreateSplit({
    recipients: [
      { address: '0x5c2f1a8a6a0b3b0ad7a3d8d5f0b6f4c7e2a1b9c3', share: 500_000 },
      { address: '0x9a1b2c3d4e5f60718293a4b5c6d7e8f901234567', share: 500_000 },
    ],
  }); // SPLIT_ALREADY_EXISTS when it is deployed already
  console.log(create.preview.address);
  // #endregion

  // #region splits.getSplit
  const split = await obol.splits.getSplit({ address: '0x5c2f1a8a6a0b3b0ad7a3d8d5f0b6f4c7e2a1b9c3' }); // null when not a SplitV2 split
  // #endregion

  // #region splits.prepareDistributeAll
  // The OVM, the splits behind its recipients and the recipients' Warehouse balances, in one transaction.
  const all = await obol.splits.prepareDistributeAll({ ovm: ovmAddress });
  await (await obol.send(all)).wait();
  // #endregion

  // #region splits.previewDistributeAll
  const { preview } = await obol.splits.previewDistributeAll({ ovm: ovmAddress });
  // #endregion

  // #region splits.distributionFromReceipt
  const paid = obol.splits.distributionFromReceipt(receipt, { ovm: ovmAddress });
  // #endregion

  // #region splits.hashSplitParams
  const splitHash = splits.hashSplitParams(splits.splitParams([{ address: account, share: 1_000_000 }])); // what the split stores on chain
  // #endregion

  // #region splits.splitAmounts
  const twoWay = splits.splitParams([
    { address: '0x5c2f1a8a6a0b3b0ad7a3d8d5f0b6f4c7e2a1b9c3', share: 500_000 },
    { address: '0x9a1b2c3d4e5f60718293a4b5c6d7e8f901234567', share: 500_000 },
  ]);
  const { amounts, distributorReward } = splits.splitAmounts(twoWay, parseEther('1'));
  // #endregion

  // #region setup.rewardsSplit
  // Rewards to the operators (shares sum to 99%; the Obol RAF gets 1%), principal to one address.
  const input = obol.setup.rewardsSplit({
    owner: account,
    principalRecipient: account,
    recipients: [
      { address: '0x5c2f1a8a6a0b3b0ad7a3d8d5f0b6f4c7e2a1b9c3', share: 495_000 },
      { address: '0x9a1b2c3d4e5f60718293a4b5c6d7e8f901234567', share: 495_000 },
    ],
  });
  // #endregion

  // #region setup.totalSplit
  const total = obol.setup.totalSplit({
    owner: account,
    recipients: [
      { address: '0x5c2f1a8a6a0b3b0ad7a3d8d5f0b6f4c7e2a1b9c3', share: 495_000 },
      { address: '0x9a1b2c3d4e5f60718293a4b5c6d7e8f901234567', share: 495_000 },
    ],
  });
  // #endregion

  // #region setup.solo
  const soloInput = obol.setup.solo({ owner: account, recipient: account });
  // #endregion

  // #region setup.ovmSplitParams
  const { rewardSplit } = obol.setup.ovmSplitParams({
    kind: 'rewards',
    rewardRecipients: [{ address: account, share: 990_000 }],
  });
  // #endregion

  // #region setup.prepareOvmWithSplits
  const tx = await obol.setup.prepareOvmWithSplits(
    obol.setup.solo({ owner: account, recipient: account }), // or rewardsSplit / totalSplit, or your own input
  ); // splits that exist already are reused (SPLIT_REUSED)
  const sent = await obol.send(tx);
  const created = obol.setup.ovmFromReceipt(await sent.wait());
  console.log('OVM', created.ovm); // the withdrawal address for the cluster definition
  // #endregion

  // #region setup.prepareCreateOvm
  const ovmTx = await obol.setup.prepareCreateOvm({
    owner: account,
    principalRecipient: account,
    rewardRecipient: '0x5c2f1a8a6a0b3b0ad7a3d8d5f0b6f4c7e2a1b9c3', // a split you created, or any address
  });
  // #endregion

  // #region setup.ovmFromReceipt
  const { ovm: newOvm, owner } = obol.setup.ovmFromReceipt(receipt); // OVM_CREATE_EVENT_MISSING if none
  // #endregion

  // #region setup.DEFAULT_PRINCIPAL_THRESHOLD
  console.log(setup.DEFAULT_PRINCIPAL_THRESHOLD); // 16 ETH in wei
  // #endregion

  // #region incentives.get
  const incentives = await obol.incentives.get(account); // null when there is nothing for the address
  // #endregion

  // #region incentives.isClaimed
  const mine = await obol.incentives.get(account);
  const claimed = mine && (await obol.incentives.isClaimed({ contractAddress: mine.contractAddress, index: mine.index }));
  // #endregion

  // #region incentives.preflight
  const check = await obol.incentives.preflight(account); // every claim check, nothing sent
  if (!check.ok) console.log(check.issues.map(i => i.code));
  // #endregion

  // #region incentives.prepareClaim
  const claim = await obol.incentives.prepareClaim(account); // INCENTIVES_PREFLIGHT_FAILED, ALREADY_CLAIMED
  await (await obol.send(claim)).wait();
  // #endregion

  return { share, label, exists, split, preview, paid, splitHash, amounts, distributorReward, total, soloInput, rewardSplit, ovmTx, newOvm, owner, claimed };
}
