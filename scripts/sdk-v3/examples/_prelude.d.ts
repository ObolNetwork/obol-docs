// Free variables the documentation samples use. Every ```ts block on the
// SDK v3 pages and every example region is type-checked with these in scope
// (scripts/sdk-v3/check-samples.mjs). A sample that declares its own `obol`
// (or any other name) shadows the one here.
import type { ObolClient, WarningCode, AnyPrepared, cluster, deposits, exits } from '@obolnetwork/obol-sdk';
import type { Simulation } from '@obolnetwork/obol-sdk/experimental';
import type { Address, PublicClient, TransactionReceipt } from 'viem';

declare global {
  interface Window {
    ethereum?: import('viem').EIP1193Provider;
  }
  /** A client bound to Hoodi with a wallet. */
  const obol: ObolClient;
  const publicClient: PublicClient;
  const mainnetClient: PublicClient;
  const hoodiClient: PublicClient;
  /** The connected account. */
  const account: Address;
  const ovm: string;
  const ovmAddress: string;
  const configHash: string;
  const lockHash: string;
  const lock: cluster.ClusterLock;
  const definition: cluster.ClusterDefinition;
  const enr: string;
  const pubkey: string;
  const pubkeys: string[];
  const operatorAddresses: string[];
  const tx: AnyPrepared;
  const sim: Simulation;
  const receipt: TransactionReceipt;
  const depositData: deposits.LockDeposits['deposits'];
  const exitPayload: exits.AssertPartialExitInput['payload'];
  const exitCluster: exits.ExitCluster;
  const storedExit: exits.AggregateInput['exit'];
  // Fits both prepareWithdraw and prepareConsolidate, as the README samples use one name for both.
  const requests: Array<{ pubkey: string; amount: bigint } & { sources: string[]; target: string }>;
  function askOperator(report: unknown[]): Promise<WarningCode[]>;
}

export {};
