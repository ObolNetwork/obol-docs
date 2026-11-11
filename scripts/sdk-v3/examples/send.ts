// Examples for send, the acknowledgement helpers, obol.exits and obol.experimental.
// See client.ts for the format.
// #region imports
import { warningsOf, warningCodes, findingsToAcknowledge, isStale, waitForContractWalletExecution, UNCHECKED_WARNING_CODES, FINDINGS, exits, type FindingCodeFor } from '@obolnetwork/obol-sdk';
import { formatEth } from '@obolnetwork/obol-sdk/experimental';
import { keccak256 } from 'viem';
// #endregion

export async function examples() {
  // #region send
  const distribution = await obol.ovm.prepareDistribute({ ovm: ovmAddress });
  // Show warningsOf(distribution) first; acknowledge only what was shown and accepted.
  const sent = await obol.send(distribution, { acknowledge: warningCodes(distribution) });
  console.log(sent.hash); // keep it before waiting
  const receipt = await sent.wait(); // TX_REVERTED, TX_REPLACED or TX_UNCONFIRMED otherwise
  // #endregion

  // #region warningsOf
  for (const w of warningsOf(tx, sim)) console.log(w.code, w.message, w.hint);
  // #endregion

  // #region warningCodes
  await obol.send(tx, { simulation: sim, acknowledge: warningCodes(tx, sim) }); // after showing them
  // #endregion

  // #region findingsToAcknowledge
  // Sending tx.request with your own wallet layer (wagmi, a Safe app): same rule as send.
  const policy: FindingCodeFor<'withdraw'>[] = ['VALIDATOR_STATUS_UNCHECKED'];
  const open = findingsToAcknowledge(tx, { acknowledge: policy });
  if (open.length > 0) throw new Error(open.map(f => `${f.code}: ${FINDINGS[f.code].guidance}`).join('\n'));
  // #endregion

  // #region isStale
  const head = await publicClient.getBlockNumber();
  if (isStale(tx, head, 32)) console.log('prepare again before showing the review');
  // #endregion

  // #region waitForContractWalletExecution
  // What sent.wait() does for a Safe: follow ExecutionSuccess / ExecutionFailure for the safeTxHash.
  const safeTxHash = '0x…' as `0x${string}`; // what the Safe returned
  const executed = await waitForContractWalletExecution({
    publicClient,
    account, // the Safe
    safeTxHash,
    fromBlock: await publicClient.getBlockNumber(),
  });
  // #endregion

  // #region UNCHECKED_WARNING_CODES
  // Every warning that only means "a check could not run". Read the list before you use it.
  await obol.send(tx, { acknowledge: UNCHECKED_WARNING_CODES });
  // #endregion

  // #region FINDINGS
  const { severity, meaning, guidance } = FINDINGS.CONSOLIDATION_CREDENTIALS_DIFFER;
  // #endregion

  // #region experimental.simulate
  const prepared = await obol.ovm.prepareDistribute({ ovm: ovmAddress });
  const simulation = await obol.experimental.simulate(prepared, { from: account });
  if (!simulation.success) throw new Error(simulation.summary[0]); // "Reverts: …"
  simulation.summary.forEach(line => console.log(line));
  await obol.send(prepared, { simulation, acknowledge: warningCodes(prepared, simulation) });
  // #endregion

  // #region legacy.getOwrTranches
  const tranches = await obol.experimental.legacy.getOwrTranches('0x5c2f1a8a6a0b3b0ad7a3d8d5f0b6f4c7e2a1b9c3');
  // #endregion

  // #region experimental.formatEth
  const text = formatEth(1_200_000_000_000_000_000n); // '1.200000 ETH'
  // #endregion

  // #region exits.assertPartialExit
  // What the Obol API checks before storing an operator's partial exits; throws EXIT_* codes.
  const blobs = obol.exits.assertPartialExit({ cluster: exitCluster, payload: exitPayload });
  // #endregion

  // #region exits.aggregate
  const validator = exitCluster.validators[0];
  const fullExit = obol.exits.aggregate({ validator, exit: storedExit, threshold: 3 }); // EXIT_NOT_ENOUGH_SHARES below it
  // #endregion

  // #region exits.blsVerify
  const valid = exits.blsVerify(pubkey as `0x${string}`, keccak256('0x01'), '0x…' as `0x${string}`);
  // #endregion

  // #region exits.blsAggregate
  const aggregate = exits.blsAggregate(['0x…', '0x…'] as `0x${string}`[]);
  // #endregion

  // #region exits.blsThresholdAggregate
  const signature = exits.blsThresholdAggregate([
    { index: 1, signature: '0x…' as `0x${string}` },
    { index: 3, signature: '0x…' as `0x${string}` },
  ]);
  // #endregion

  // #region exits.blsRecoverPubkey
  const { publicShares } = exitCluster.validators[0];
  const groupKey = exits.blsRecoverPubkey(publicShares.slice(0, 3).map((pubshare, i) => ({ index: i + 1, pubshare: pubshare as `0x${string}` })));
  // #endregion

  return { receipt, executed, severity, meaning, guidance, tranches, text, blobs, fullExit, valid, aggregate, signature, groupKey };
}
