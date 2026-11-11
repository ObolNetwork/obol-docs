// Examples for obol.ovm. See client.ts for the format.
// #region imports
import { warningsOf } from '@obolnetwork/obol-sdk';
import { parseEther } from 'viem';
// #endregion

export async function examples() {
  // #region ovm.getProvenance
  const provenance = await obol.ovm.getProvenance(ovmAddress);
  if (provenance.status !== 'obol') throw new Error(`not an Obol OVM: ${provenance.reason}`);
  // #endregion

  // #region ovm.getState
  const state = await obol.ovm.getState(ovmAddress); // null when the address is not an OVM
  if (state) console.log(state.distributable, state.principalPayout, state.rewardPayout);
  // #endregion

  // #region ovm.getValidators
  const { validators } = await obol.ovm.getValidators(ovmAddress);
  // #endregion

  // #region ovm.getRoleHolders
  const { owner, holders } = await obol.ovm.getRoleHolders(ovmAddress);
  for (const h of holders) console.log(h.address, h.roleNames);
  // #endregion

  // #region ovm.prepareWithdraw
  const withdraw = await obol.ovm.prepareWithdraw({
    ovm: ovmAddress,
    requests: [{ pubkey, amount: parseEther('1') }], // amount 0 = full exit, needs acknowledgeFullExit: true
  });
  console.log(withdraw.preview.requests, warningsOf(withdraw)); // show warnings before sending
  // #endregion

  // #region ovm.prepareConsolidate
  // Source = target switches a validator to 0x02 (compounding) credentials.
  const consolidate = await obol.ovm.prepareConsolidate({
    ovm: ovmAddress,
    requests: [{ sources: [pubkey], target: pubkey }],
  });
  // #endregion

  // #region ovm.prepareDistribute
  const distribute = await obol.ovm.prepareDistribute({ ovm: ovmAddress }); // NOTHING_TO_DISTRIBUTE if empty
  await (await obol.send(distribute)).wait();
  // #endregion

  // #region ovm.previewDistribute
  // Same reads, no transaction, zeros instead of NOTHING_TO_DISTRIBUTE: for a page with the button disabled.
  const { preview } = await obol.ovm.previewDistribute({ ovm: ovmAddress });
  // #endregion

  // #region ovm.prepareGrantRoles
  const grant = await obol.ovm.prepareGrantRoles({
    ovm: ovmAddress,
    user: account,
    roles: obol.ovm.OVM_ROLES.WITHDRAWAL | obol.ovm.OVM_ROLES.CONSOLIDATION, // CONSOLIDATION carries a warning
  });
  // #endregion

  // #region ovm.prepareRevokeRoles
  const revoke = await obol.ovm.prepareRevokeRoles({ ovm: ovmAddress, user: account, roles: obol.ovm.OVM_ALL_ROLES });
  // #endregion

  // #region ovm.prepareRenounceRoles
  const renounce = await obol.ovm.prepareRenounceRoles({ ovm: ovmAddress, roles: obol.ovm.OVM_ROLES.WITHDRAWAL });
  // #endregion

  // #region ovm.prepareTransfer
  // Changes owner and principal recipient together; roles survive (ROLES_SURVIVE_TRANSFER).
  const transfer = await obol.ovm.prepareTransfer({ ovm: ovmAddress, newOwner: account, newPrincipalRecipient: account });
  // #endregion

  // #region ovm.prepareRequestOwnershipHandover
  // Sent by the future owner; valid for 48 hours.
  const request = await obol.ovm.prepareRequestOwnershipHandover({ ovm: ovmAddress });
  // #endregion

  // #region ovm.prepareCancelOwnershipHandover
  const cancel = await obol.ovm.prepareCancelOwnershipHandover({ ovm: ovmAddress });
  // #endregion

  // #region ovm.prepareCompleteOwnershipHandover
  // Sent by the current owner; OWNERSHIP_HANDOVER_NOT_PENDING without an unexpired request.
  const complete = await obol.ovm.prepareCompleteOwnershipHandover({ ovm: ovmAddress, pendingOwner: account });
  // #endregion

  // #region ovm.prepareSetPrincipalRecipient
  const setPrincipal = await obol.ovm.prepareSetPrincipalRecipient({ ovm: ovmAddress, newPrincipalRecipient: account });
  // #endregion

  // #region ovm.prepareSetRewardRecipient
  const setReward = await obol.ovm.prepareSetRewardRecipient({ ovm: ovmAddress, newRewardRecipient: account });
  // #endregion

  // #region ovm.prepareSetAmountOfPrincipalStake
  const setStake = await obol.ovm.prepareSetAmountOfPrincipalStake({ ovm: ovmAddress, amount: parseEther('64') });
  console.log(setStake.preview.current, '→', setStake.preview.next);
  // #endregion

  // #region ovm.prepareSweep
  const sweep = await obol.ovm.prepareSweep({ ovm: ovmAddress }); // `to` (owner only) sweeps elsewhere
  // #endregion

  // #region ovm.prepareWithdrawPullBalance
  const pull = await obol.ovm.prepareWithdrawPullBalance({ ovm: ovmAddress, account });
  // #endregion

  // #region ovm.prepareRecoverFunds
  const recover = await obol.ovm.prepareRecoverFunds({ ovm: ovmAddress, token: '0x0B010000b7624eb9B3DfBC279673C76E9D29D5F7', recipient: account });
  // #endregion

  // #region ovm.routing
  // Pure (also ovm.routing without a client): how a distribution would route the OVM's balance.
  const routed = obol.ovm.routing({
    balance: parseEther('33'),
    fundsPendingWithdrawal: 0n,
    amountOfPrincipalStake: parseEther('32'),
    principalThreshold: parseEther('16'),
  });
  // #endregion

  // #region ovm.roleNames
  const names = obol.ovm.roleNames(3n); // ['WITHDRAWAL', 'CONSOLIDATION']
  // #endregion

  // #region ovm.expectedWithdrawalCredentials
  const credentials = obol.ovm.expectedWithdrawalCredentials('0x5c2f1a8a6a0b3b0ad7a3d8d5f0b6f4c7e2a1b9c3', '0x02');
  // #endregion

  // #region ovm.OVM_ROLES
  const { WITHDRAWAL, CONSOLIDATION } = obol.ovm.OVM_ROLES;
  // #endregion

  return { provenance, state, validators, owner, consolidate, preview, grant, revoke, renounce, transfer, request, cancel, complete, setPrincipal, setReward, sweep, pull, recover, routed, names, credentials, WITHDRAWAL, CONSOLIDATION };
}
