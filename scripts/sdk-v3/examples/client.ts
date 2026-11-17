// Examples for the "Client and chains" and "Standalone checks" pages. Each
// `#region <key>` becomes the Example of that method; the imports region is
// trimmed to what each example uses. Checked by check-samples.mjs.
// #region imports
import { createObolClient, createObolContext, getObolChain, currentEpoch, isAddressInput, isValidLock, isValidTypedDataSignature, isObolError, cluster } from '@obolnetwork/obol-sdk';
import { createOvmModule } from '@obolnetwork/obol-sdk/ovm';
import { loadBlstBackend, blstBackendFrom } from '@obolnetwork/obol-sdk/blst';
import { createPublicClient, createWalletClient, custom, http } from 'viem';
import { hoodi } from 'viem/chains';
// #endregion

export async function examples() {
  // #region createObolClient
  const obol = createObolClient({
    chain: hoodi,
    publicClient: createPublicClient({ chain: hoodi, transport: http() }),
    walletClient: createWalletClient({ chain: hoodi, transport: custom(window.ethereum!) }), // optional
    // api: false, // chain-only; the default is the Obol API at api.obol.tech
  });
  // #endregion

  // #region createObolContext
  // Load one module only: no BLS or SSZ code for OVM reads.
  const ovmModule = createOvmModule(createObolContext({ chain: hoodi, publicClient }));
  const state = await ovmModule.getState(ovmAddress); // null when the address is not an OVM
  // #endregion

  // #region getObolChain
  const { contracts } = getObolChain(560048); // Hoodi
  console.log(contracts?.batchDeposit, contracts?.ovmFactory);
  // #endregion

  // #region currentEpoch
  const epoch = currentEpoch(getObolChain(1)); // from genesis time and the clock; no request
  // #endregion

  // #region isAddressInput
  if (!isAddressInput('0x5c2f1a8a6a0b3b0ad7a3d8d5f0b6f4c7e2a1b9c3')) throw new Error('not an address');
  // #endregion

  // #region isValidLock
  const bls = await loadBlstBackend(); // once, at boot (Node)
  const valid = await isValidLock(lock, {
    bls,
    publicClients: { 1: mainnetClient, 560048: hoodiClient }, // Safe-signed definitions
    signal: AbortSignal.timeout(10_000), // throws ABORTED after 10 s
  });
  // #endregion

  // #region isValidTypedDataSignature
  const ok = await isValidTypedDataSignature({
    address: account,
    signature: '0x…' as string,
    typedData: cluster.enrTypedData(enr, 560048),
    publicClients: { 560048: hoodiClient }, // needed when the signer is a Safe
  });
  // #endregion

  // #region isObolError
  try {
    await obol.deposits.fromLock(lock);
  } catch (error) {
    if (isObolError(error, 'DEPOSIT_AMOUNT_REQUIRED')) {
      console.log('pick one of', error.details.available); // typed per code
    } else throw error;
  }
  // #endregion

  // #region loadBlstBackend
  const native = await loadBlstBackend(); // BLS_BACKEND_UNAVAILABLE without @chainsafe/blst
  const result = await cluster.verifyLock(lock, { bls: native });
  // #endregion

  // #region blstBackendFrom
  // When you load @chainsafe/blst yourself (a bundler, a custom build):
  const backend = blstBackendFrom(await import('@chainsafe/blst'));
  // #endregion

  return { obol, state, epoch, valid, ok, result, backend };
}
