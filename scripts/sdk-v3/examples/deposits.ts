// Examples for obol.deposits and obol.withdrawals. See client.ts for the format.
// #region imports
import { deposits } from '@obolnetwork/obol-sdk';
import { parseEther } from 'viem';
// #endregion

export async function examples() {
  // #region deposits.fromLock
  // Verifies the lock (level 'attested' plus the deposits it returns), then
  // returns the deposit data for one amount. Charon's default locks hold
  // 1 ETH and 32 ETH per validator: without `amount`, DEPOSIT_AMOUNT_REQUIRED.
  const { deposits: data, lockHash: hash } = await obol.deposits.fromLock(lock, { amount: parseEther('32') });
  // #endregion

  // #region deposits.assertDepositData
  // Throws DEPOSIT_INVALID with the failing `index` and `issue`; resolves otherwise.
  await deposits.assertDepositData(depositData, { chainId: 560048, expectedWithdrawalAddress: ovmAddress });
  // #endregion

  // #region deposits.status
  const statuses = await obol.deposits.status(pubkeys, { lockHash });
  for (const s of statuses) console.log(s.pubkey, s.status, s.beaconStatus);
  // #endregion

  // #region deposits.prepareDeposit
  const prepared = await obol.deposits.prepareDeposit({
    deposits: depositData,
    via: { ovm: ovmAddress }, // or { batch: true } with expectedWithdrawalAddress
    // kind: 'topUp', // to add stake to validators that exist
  });
  for (const tx of prepared) {
    const sent = await obol.send(tx); // FINDINGS_NOT_ACKNOWLEDGED if tx.checks has a warning
    await sent.wait();
  }
  // #endregion

  // #region withdrawals.prepareEoaWithdraw
  // From the EOA the validator's withdrawal credentials point at. Amount 0 is a full exit.
  const tx = await obol.withdrawals.prepareEoaWithdraw({ pubkey, amount: parseEther('1') });
  await (await obol.send(tx)).wait();
  // #endregion

  // #region deposits.depositDataRoot
  const d = depositData[0];
  const root = deposits.depositDataRoot({
    pubkey: d.pubkey,
    withdrawalCredentials: d.withdrawalCredentials,
    amountGwei: d.amount / 1_000_000_000n,
    signature: d.signature,
  });
  if (root !== d.depositDataRoot) throw new Error('deposit data root mismatch');
  // #endregion

  return { data, hash, statuses };
}
