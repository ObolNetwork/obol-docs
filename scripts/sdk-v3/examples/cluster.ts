// Examples for obol.terms and obol.cluster. See client.ts for the format.
// #region imports
import { cluster, terms } from '@obolnetwork/obol-sdk';
import { createWalletClient, custom } from 'viem';
import { hoodi } from 'viem/chains';
// #endregion

export async function examples() {
  // #region terms.hasAccepted
  const accepted = await obol.terms.hasAccepted(); // the wallet account; or pass an address
  // #endregion

  // #region terms.accept
  await obol.terms.accept({ ifNotAccepted: true }); // signs only if not accepted yet
  // #endregion

  // #region cluster.prepareDefinition
  const prepared = obol.cluster.prepareDefinition({
    name: 'my-cluster',
    creator: account,
    operators: operatorAddresses.map(address => ({ address })), // at least 4
    validators: [{ feeRecipientAddress: ovmAddress, withdrawalAddress: ovmAddress }],
  });
  console.log(prepared.configHash); // nothing is signed or sent yet
  // #endregion

  // #region cluster.create
  // Takes what prepareDefinition returned, or its input (creator: the wallet account).
  const created = await obol.cluster.create({
    name: 'my-cluster',
    operators: operatorAddresses.map(address => ({ address })),
    validators: [{ feeRecipientAddress: ovmAddress, withdrawalAddress: ovmAddress }],
  }); // signs the config hash, posts the definition, returns the config hash
  // #endregion

  // #region cluster.accept
  // As an operator: verifies the definition, then signs it and your ENR.
  const updated = await obol.cluster.accept({ configHash, enr });
  // #endregion

  // #region cluster.get
  const def = await obol.cluster.get(configHash);
  // #endregion

  // #region cluster.watch
  const controller = new AbortController();
  for await (const event of obol.cluster.watch(configHash, { signal: controller.signal })) {
    if (event.type === 'operator_signed') console.log(`${event.signed}/${event.total} signed`);
    if (event.type === 'lock_published') console.log('lock', event.lockHash); // the iterator ends here
  }
  // #endregion

  // #region cluster.getLock
  const published = await obol.cluster.getLock({ configHash }); // or { lockHash }
  // #endregion

  // #region cluster.verifyDefinition
  const check = await obol.cluster.verifyDefinition({ definition, configHash });
  if (!check.ok) console.log(check.issues);
  // #endregion

  // #region cluster.verifyLock
  const result = await obol.cluster.verifyLock(lock); // level 'full' by default
  if (!result.ok) console.log(result.step, result.issue, result.validator);
  // #endregion

  // #region cluster.isValidLock
  const valid = await obol.cluster.isValidLock(lock); // false, never a throw, for a bad lock
  // #endregion

  // #region cluster.computeConfigHash
  const hash = cluster.computeConfigHash(definition); // pure: no client needed
  // #endregion

  // #region cluster.computeDefinitionHash
  const definitionHash = cluster.computeDefinitionHash(definition);
  // #endregion

  // #region cluster.computeLockHash
  const lockHashOf = cluster.computeLockHash(lock);
  // #endregion

  // #region cluster.parseEnr
  const { publicKey } = cluster.parseEnr(enr); // 0x-prefixed compressed key; PAYLOAD_INVALID if malformed
  // #endregion

  // #region cluster.isValidEnr
  const enrOk = cluster.isValidEnr(enr);
  // #endregion

  // #region cluster.creatorConfigHashTypedData
  // The EIP-712 payloads the SDK signs, for signing with your own wallet layer.
  const wallet = createWalletClient({ account, chain: hoodi, transport: custom(window.ethereum!) });
  const creatorSig = await wallet.signTypedData(cluster.creatorConfigHashTypedData(configHash, 560048));
  // #endregion

  // #region cluster.operatorConfigHashTypedData
  const operatorTyped = cluster.operatorConfigHashTypedData(configHash, 560048);
  // #endregion

  // #region cluster.enrTypedData
  const enrTyped = cluster.enrTypedData(enr, 560048);
  // #endregion

  // #region terms.termsTypedData
  const termsTyped = terms.termsTypedData(); // no chain id, by design
  // #endregion

  return { creatorSig, operatorTyped, enrTyped, termsTyped, accepted, created, updated, def, published, check, result, valid, hash, definitionHash, lockHashOf, publicKey, enrOk };
}
