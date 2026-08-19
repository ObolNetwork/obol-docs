# CLI Reference

The following is a reference for Charon version [`v1.8.0`](https://github.com/ObolNetwork/charon/releases/tag/v1.8.0). Find the latest release on [our Github](https://github.com/ObolNetwork/charon/releases).

The following are the top-level commands available to use.

```markdown
charon --help
Charon enables the operation of Ethereum validators in a fault tolerant manner by splitting the validating keys across a group of trusted parties using threshold cryptography.

Usage:
  charon [command]

Available Commands:
  alpha       Alpha subcommands provide early access to in-development features
  combine     Combine the private key shares of a distributed validator cluster into a set of standard validator private keys
  completion  Generate the autocompletion script for the specified shell
  create      Create artifacts for a distributed validator cluster
  deposit     Sign and fetch a new partial deposit.
  dkg         Participate in a Distributed Key Generation ceremony
  enr         Print the ENR that identifies this client
  exit        Exit a distributed validator.
  help        Help about any command
  relay       Start a libp2p relay server
  run         Run the charon middleware client
  version     Print version and exit

Flags:
  -h, --help   Help for charon

Use "charon [command] --help" for more information about a command.
```

## The `create` command

The `create` command handles the creation of artifacts needed by Charon to operate.

```markdown
charon create --help
Create artifacts for a distributed validator cluster. These commands can be used to facilitate the creation of a distributed validator cluster between a group of operators by performing a distributed key generation ceremony, or they can be used to create a local cluster for single operator use cases.

Usage:
  charon create [command]

Available Commands:
  cluster     Create private keys and configuration files needed to run a distributed validator cluster locally
  dkg         Create the configuration for a new Distributed Key Generation ceremony using charon dkg
  enr         Create an Ethereum Node Record (ENR) private key to identify this charon client

Flags:
  -h, --help   Help for create

Use "charon create [command] --help" for more information about a command.
```

### Creating an ENR for Charon

An `enr` is an Ethereum Node Record. It is used to identify this Charon client to its other counterparty Charon clients across the internet.

```markdown
charon create enr --help
Create an Ethereum Node Record (ENR) private key to identify this charon client

Usage:
  charon create enr [flags]

Flags:
      --data-dir string   The directory where charon will store all its internal data. (default ".charon")
  -h, --help              Help for enr
```

### Create a full cluster locally

The `charon create cluster` command creates a set of distributed validators locally; including the private keys, a `cluster-lock.json` file, and deposit data. This command should only be used for solo-operation of distributed validators. To run a distributed validator cluster with a group of operators, it is preferable to create these artifacts using the [DV Launchpad](../intro/launchpad.md) and the `charon dkg` command. That way, no single operator custodies all of the private keys to a distributed validator.

:::warning
This command produces new distributed validator private keys or handles and splits pre-existing traditional validator private keys, please use caution and keep these private keys securely backed up and secret.
:::

```markdown
charon create cluster --help
Creates a local charon cluster configuration including validator keys, charon p2p keys, cluster-lock.json and deposit-data.json file(s). See flags for supported features.

Usage:
  charon create cluster [flags]

Flags:
      --cluster-dir string                     The target folder to create the cluster in. (default "./")
      --compounding                            Enable compounding rewards for validators by using 0x02 withdrawal credentials.
      --consensus-protocol string              Preferred consensus protocol name for the cluster. Selected automatically when not specified.
      --definition-file string                 Optional path to a cluster definition file or an HTTP URL. This overrides all other configuration flags.
      --deposit-amounts ints                   List of partial deposit amounts (integers) in ETH. Values must sum up to at least 32ETH.
      --execution-client-rpc-endpoint string   The address of the execution engine JSON-RPC API.
      --fee-recipient-addresses strings        Comma separated list of Ethereum addresses of the fee recipient for each validator. Either provide a single fee recipient address or fee recipient addresses for each validator.
  -h, --help                                   Help for cluster
      --insecure-keys                          Generates insecure keystore files. This should never be used. It is not supported on mainnet.
      --keymanager-addresses strings           Comma separated list of keymanager URLs to import validator key shares to. Note that multiple addresses are required, one for each node in the cluster, with node0's keyshares being imported to the first address, node1's keyshares to the second, and so on.
      --keymanager-auth-tokens strings         Authentication bearer tokens to interact with the keymanager URLs. Don't include the "Bearer" symbol, only include the api-token.
      --name string                            The cluster name
      --network string                         Ethereum network to create validators for. Options: mainnet, goerli, sepolia, hoodi, holesky, gnosis, chiado.
      --nodes int                              The number of charon nodes in the cluster. Minimum is 3.
      --num-validators int                     The number of distributed validators needed in the cluster.
      --publish                                Publish lock file to obol-api.
      --publish-address string                 The URL to publish the lock file to. (default "https://api.obol.tech/v1")
      --split-existing-keys                    Split an existing validator's private key into a set of distributed validator private key shares. Does not re-create deposit data for this key.
      --split-keys-dir string                  Directory containing keys to split. Expects keys in keystore-*.json and passwords in keystore-*.txt. Requires --split-existing-keys.
      --target-gas-limit uint                  Preferred target gas limit for transactions. (default 60000000)
      --testnet-chain-id uint                  Chain ID of the custom test network.
      --testnet-fork-version string            Genesis fork version of the custom test network (in hex).
      --testnet-genesis-timestamp int          Genesis timestamp of the custom test network.
      --testnet-name string                    Name of the custom test network.
      --threshold int                          Optional override of threshold required for signature reconstruction. Defaults to ceil(n*2/3) if zero. Warning, non-default values decrease security.
      --withdrawal-addresses strings           Comma separated list of Ethereum addresses to receive the returned stake and accrued rewards for each validator. Either provide a single withdrawal address or withdrawal addresses for each validator.
      --zipped                                 Create a tar archive compressed with gzip of the cluster directory after creation.
```

### Creating the configuration for a DKG Ceremony

This `charon create dkg` command creates a `cluster_definition.json` file used for the `charon dkg` command.

```markdown
charon create dkg --help
Create a cluster definition file that will be used by all participants of a DKG.

Usage:
  charon create dkg [flags]

Flags:
      --compounding                            Enable compounding rewards for validators by using 0x02 withdrawal credentials.
      --consensus-protocol string              Preferred consensus protocol name for the cluster. Selected automatically when not specified.
      --deposit-amounts ints                   List of partial deposit amounts (integers) in ETH. Values must sum up to at least 32ETH.
      --dkg-algorithm string                   DKG algorithm to use; default, frost or pedersen. (default "default")
      --execution-client-rpc-endpoint string   The address of the execution engine JSON-RPC API.
      --fee-recipient-addresses strings        Comma separated list of Ethereum addresses of the fee recipient for each validator. Either provide a single fee recipient address or fee recipient addresses for each validator.
  -h, --help                                   Help for dkg
      --name string                            Optional cosmetic cluster name
      --network string                         Ethereum network to create validators for. Options: mainnet, goerli, sepolia, hoodi, holesky, gnosis, chiado. (default "mainnet")
      --num-validators int                     The number of distributed validators the cluster will manage (32ETH+ staked for each). (default 1)
      --operator-addresses strings             Comma-separated list of each operator's Ethereum address.
      --operator-enrs strings                  Comma-separated list of each operator's Charon ENR address.
      --output-dir string                      The folder to write the output cluster-definition.json file to. (default ".charon")
      --publish                                Creates an invitation to the DKG ceremony on the DV Launchpad. Terms and conditions apply.
      --publish-address string                 The URL to publish the cluster to. (default "https://api.obol.tech/v1")
      --target-gas-limit uint                  Preferred target gas limit for transactions. (default 60000000)
  -t, --threshold int                          Optional override of threshold required for signature reconstruction. Defaults to ceil(n*2/3) if zero. Warning, non-default values decrease security.
      --withdrawal-addresses strings           Comma separated list of Ethereum addresses to receive the returned stake and accrued rewards for each validator. Either provide a single withdrawal address or withdrawal addresses for each validator.
```

## The `dkg` command

### Performing a DKG Ceremony

The `charon dkg` command takes a `cluster_definition.json` file that instructs Charon on the terms of a new distributed validator cluster to be created. Charon establishes communication with the other nodes identified in the file, performs a distributed key generation ceremony to create the required threshold private keys, and signs deposit data for each new distributed validator. The command outputs the `cluster-lock.json` file and key shares for each Distributed Validator created.

```markdown
charon dkg --help
Participate in a distributed key generation ceremony for a specific cluster definition that creates
distributed validator key shares and a final cluster lock configuration. Note that all other cluster operators should run
this command at the same time.

Usage:
  charon dkg [flags]

Flags:
      --data-dir string                        The directory where charon will store all its internal data. (default ".charon")
      --definition-file string                 The path to the cluster definition file or an HTTP URL. (default ".charon/cluster-definition.json")
      --execution-client-rpc-endpoint string   Optional address of an execution engine JSON-RPC API. Used to validate smart contract signatures for Node Operators in the cluster.
  -h, --help                                   Help for dkg
      --keymanager-address string              The keymanager URL to import validator keyshares.
      --keymanager-auth-token string           Authentication bearer token to interact with keymanager API. Don't include the "Bearer" symbol, only include the api-token.
      --log-color string                       Log color; auto, force, disable. (default "auto")
      --log-format string                      Log format; console, logfmt or json (default "console")
      --log-level string                       Log level; debug, info, warn or error (default "info")
      --log-output-path string                 Path in which to write on-disk logs.
      --no-verify                              Disables cluster definition and lock file verification.
      --p2p-disable-reuseport                  Disables TCP port reuse for outgoing libp2p connections.
      --p2p-external-hostname string           The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.
      --p2p-external-ip string                 The IP address advertised by libp2p. This may be used to advertise an external IP.
      --p2p-relays strings                     Comma-separated list of libp2p relay URLs or multiaddrs. (default [https://0.relay.obol.tech,https://1.relay.obol.tech,https://2.relay.obol.dev])
      --p2p-tcp-address strings                Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. Empty default doesn't bind to local port therefore only supports outgoing connections.
      --p2p-udp-address strings                Comma-separated list of listening UDP addresses (ip and port) for libP2P traffic. Empty default doesn't bind to local port therefore only supports outgoing connections.
      --publish                                Publish the created cluster to a remote API.
      --publish-address string                 The URL to publish the cluster to. (default "https://api.obol.tech/v1")
      --publish-timeout duration               Timeout for publishing a cluster, consider increasing if the cluster contains more than 200 validators. (default 30s)
      --shutdown-delay duration                Graceful shutdown delay. (default 1s)
      --timeout duration                       Timeout for the DKG process, should be increased if DKG times out. (default 1m0s)
      --zipped                                 Create a tar archive compressed with gzip of the target directory after creation.
```

## The `run` command

### Run the Charon middleware

This `run` command accepts a `cluster-lock.json` file that was created either via a `charon create cluster` command or `charon dkg`. This lock file outlines the nodes in the cluster and the distributed validators they operate on behalf of.

```markdown
charon run --help
Starts the long-running Charon middleware process to perform distributed validator duties.

Usage:
  charon run [flags]

Flags:
      --beacon-node-endpoints strings            Comma separated list of one or more beacon node endpoint URLs.
      --beacon-node-headers strings              Comma separated list of headers formatted as header=value
      --beacon-node-submit-timeout duration      Timeout for the submission-related HTTP requests Charon makes to the configured beacon nodes. (default 2s)
      --beacon-node-timeout duration             Timeout for the HTTP requests Charon makes to the configured beacon nodes. (default 2s)
      --builder-api                              Enables the builder api. Will only produce builder blocks. Builder API must also be enabled on the validator client. Beacon node must be connected to a builder-relay to access the builder network.
      --consensus-protocol string                Preferred consensus protocol name for the node. Selected automatically when not specified.
      --debug-address string                     Listening address (ip and port) for the pprof and QBFT debug API. It is not enabled by default.
      --execution-client-rpc-endpoint string     The address of the execution engine JSON-RPC API.
      --fallback-beacon-node-endpoints strings   A list of beacon nodes to use if the primary list are offline or unhealthy.
      --feature-set string                       Minimum feature set to enable by default: alpha, beta, or stable. Warning: modify at own risk. (default "stable")
      --feature-set-disable strings              Comma-separated list of features to disable, overriding the default minimum feature set.
      --feature-set-enable strings               Comma-separated list of features to enable, overriding the default minimum feature set.
      --graffiti strings                         Comma-separated list or single graffiti string to include in block proposals. List maps to validator's public key in cluster lock. Appends "OB<CL_TYPE>" suffix to graffiti. Maximum 28 bytes per graffiti.
      --graffiti-disable-client-append           Disables appending "OB<CL_TYPE>" suffix to graffiti. Increases maximum bytes per graffiti to 32.
  -h, --help                                     Help for run
      --jaeger-address string                    [DISABLED] Listening address for jaeger tracing.
      --jaeger-service string                    [DISABLED] Service name used for jaeger tracing.
      --lock-file string                         The path to the cluster lock file defining the distributed validator cluster. If both cluster manifest and cluster lock files are provided, the cluster manifest file takes precedence. (default ".charon/cluster-lock.json")
      --log-color string                         Log color; auto, force, disable. (default "auto")
      --log-format string                        Log format; console, logfmt or json (default "console")
      --log-level string                         Log level; debug, info, warn or error (default "info")
      --log-output-path string                   Path in which to write on-disk logs.
      --loki-addresses strings                   Enables sending of logfmt structured logs to these Loki log aggregation server addresses. This is in addition to normal stderr logs.
      --loki-service string                      Service label sent with logs to Loki. (default "charon")
      --manifest-file string                     The path to the cluster manifest file. If both cluster manifest and cluster lock files are provided, the cluster manifest file takes precedence. (default ".charon/cluster-manifest.pb")
      --monitoring-address string                Listening address (ip and port) for the monitoring API (prometheus). (default "127.0.0.1:3620")
      --nickname string                          Human friendly peer nickname. Maximum 32 characters.
      --no-verify                                Disables cluster definition and lock file verification.
      --otlp-address string                      Listening address for OTLP gRPC tracing backend.
      --otlp-headers strings                     Comma separated list of headers formatted as header=value, to include in OTLP requests.
      --otlp-insecure                            Use insecure connection (no TLS) when connecting to OTLP endpoint.
      --otlp-service-name string                 Service name used for OTLP gRPC tracing. (default "charon")
      --p2p-disable-reuseport                    Disables TCP port reuse for outgoing libp2p connections.
      --p2p-external-hostname string             The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.
      --p2p-external-ip string                   The IP address advertised by libp2p. This may be used to advertise an external IP.
      --p2p-relays strings                       Comma-separated list of libp2p relay URLs or multiaddrs. (default [https://0.relay.obol.tech,https://1.relay.obol.tech,https://2.relay.obol.dev])
      --p2p-tcp-address strings                  Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. Empty default doesn't bind to local port therefore only supports outgoing connections.
      --p2p-udp-address strings                  Comma-separated list of listening UDP addresses (ip and port) for libP2P traffic. Empty default doesn't bind to local port therefore only supports outgoing connections.
      --private-key-file string                  The path to the charon enr private key file. (default ".charon/charon-enr-private-key")
      --private-key-file-lock                    Enables private key locking to prevent multiple instances using the same key.
      --proc-directory string                    Directory to look into in order to detect other stack components running on the host.
      --simnet-beacon-mock                       Enables an internal mock beacon node for running a simnet.
      --simnet-beacon-mock-fuzz                  Configures simnet beaconmock to return fuzzed responses.
      --simnet-slot-duration duration            Configures slot duration in simnet beacon mock. (default 1s)
      --simnet-validator-keys-dir string         The directory containing the simnet validator key shares. (default ".charon/validator_keys")
      --simnet-validator-mock                    Enables an internal mock validator client when running a simnet. Requires simnet-beacon-mock.
      --synthetic-block-proposals                Enables additional synthetic block proposal duties. Used for testing of rare duties.
      --testnet-capella-hard-fork string         Capella hard fork version of the custom test network.
      --testnet-chain-id uint                    Chain ID of the custom test network.
      --testnet-fork-version string              Genesis fork version in hex of the custom test network.
      --testnet-genesis-timestamp int            Genesis timestamp of the custom test network.
      --testnet-name string                      Name of the custom test network.
      --validator-api-address string             Listening address (ip and port) for validator-facing traffic proxying the beacon-node API. (default "127.0.0.1:3600")
      --vc-tls-cert-file string                  The path to the TLS certificate file used by charon for the validator client API endpoint.
      --vc-tls-key-file string                   The path to the TLS private key file associated with the provided TLS certificate.
```

## The `exit` command

A running Charon client will [aggregate and broadcast](../../run-a-dv/running/exit-a-dv.mdx) signed exit messages it receives from its validator client immediately. These `exit` commands are instead used to _pre-sign_ exit messages for an active distributed validator, to save to disk, or to broadcast; once enough of the operators of the cluster have submitted their partial exit signatures. Fully signed exit messages give a user or protocol a guarantee that they can exit an active validator at any point in future without the further assistance of the cluster's operators. In future, [execution-layer initiated exits](https://eips.ethereum.org/EIPS/eip-7002) will provide an even stronger guarantee that a validator can be exited by the withdrawal address it belongs to.

```markdown
charon exit --help
Sign and broadcast distributed validator exit messages using a remote API.

Usage:
  charon exit [command]

Available Commands:
  active-validator-list List all active validators
  broadcast             Submit partial exit message for a distributed validator
  delete                Delete a signed exit message from the remote API
  fetch                 Fetch a signed exit message from the remote API
  sign                  Sign partial exit message for a distributed validator

Flags:
  -h, --help   Help for exit

Use "charon exit [command] --help" for more information about a command.
```

### Pre-sign exit messages for active validators

:::warning
This command requires Charon to access the distributed validator's private keys, please use caution and keep these private keys securely backed up and secret.

The default `publish-address` for this command sends signed exit messages to Obol's [API](../../../api/) for aggregation and distribution. Exit signatures are stored in line with Obol's [terms and contiditions](https://obol.tech/terms.pdf).
:::

This command submits partial exit signatures to the remote API for aggregation. The required flags are `--beacon-node-url` and `--validator-public-key` of the validator you wish to exit. An exit message can only be signed for a validator that is fully deposited and assigned a validator index.

```markdown
charon exit sign --help
Sign a partial exit message for a distributed validator and submit it to a remote API for aggregation.

Usage:
  charon exit sign [flags]

Flags:
      --all                                      Exit all currently active validators in the cluster.
      --beacon-node-endpoints strings            Comma separated list of one or more beacon node endpoint URLs. [REQUIRED]
      --beacon-node-headers strings              Comma separated list of headers formatted as header=value
      --beacon-node-timeout duration             Timeout for beacon node HTTP calls. (default 30s)
      --exit-epoch uint                          Exit epoch at which the validator will exit, must be the same across all the partial exits. (default 194048)
      --fallback-beacon-node-endpoints strings   A list of beacon nodes to use if the primary list are offline or unhealthy.
  -h, --help                                     Help for sign
      --lock-file string                         The path to the cluster lock file defining the distributed validator cluster. (default ".charon/cluster-lock.json")
      --log-color string                         Log color; auto, force, disable. (default "auto")
      --log-format string                        Log format; console, logfmt or json (default "console")
      --log-level string                         Log level; debug, info, warn or error (default "info")
      --log-output-path string                   Path in which to write on-disk logs.
      --private-key-file string                  The path to the charon enr private key file.  (default ".charon/charon-enr-private-key")
      --publish-address string                   The URL of the remote API. (default "https://api.obol.tech/v1")
      --publish-timeout duration                 Timeout for publishing a signed exit to the publish-address API. (default 5m0s)
      --testnet-capella-hard-fork string         Capella hard fork version of the custom test network.
      --testnet-chain-id uint                    Chain ID of the custom test network.
      --testnet-fork-version string              Genesis fork version of the custom test network (in hex).
      --testnet-genesis-timestamp int            Genesis timestamp of the custom test network.
      --testnet-name string                      Name of the custom test network.
      --validator-index uint                     Validator index of the validator to exit, the associated public key must be present in the cluster lock manifest. If --validator-public-key is also provided, validator existence won't be checked on the beacon chain.
      --validator-keys-dir string                Path to the directory containing the validator private key share files and passwords. (default ".charon/validator_keys")
      --validator-public-key string              Public key of the validator to exit, must be present in the cluster lock manifest. If --validator-index is also provided, validator liveliness won't be checked on the beacon chain.
```

### Delete exit message

Delete a previously signed exit message for a given validator from the remote API. The required flag is either `--validator-public-key` of the validator message you wish to delete or `--all` to delete all validators' exit message.

```markdown
charon exit delete --help
Deletes a partially signed exit message for a given validator from the remote API.

Usage:
  charon exit delete [flags]

Flags:
      --all                                Exit all currently active validators in the cluster.
  -h, --help                               Help for delete
      --lock-file string                   The path to the cluster lock file defining the distributed validator cluster. (default ".charon/cluster-lock.json")
      --log-color string                   Log color; auto, force, disable. (default "auto")
      --log-format string                  Log format; console, logfmt or json (default "console")
      --log-level string                   Log level; debug, info, warn or error (default "info")
      --log-output-path string             Path in which to write on-disk logs.
      --private-key-file string            The path to the charon enr private key file.  (default ".charon/charon-enr-private-key")
      --publish-address string             The URL of the remote API. (default "https://api.obol.tech/v1")
      --publish-timeout duration           Timeout for publishing a signed exit to the publish-address API. (default 5m0s)
      --testnet-capella-hard-fork string   Capella hard fork version of the custom test network.
      --testnet-chain-id uint              Chain ID of the custom test network.
      --testnet-fork-version string        Genesis fork version of the custom test network (in hex).
      --testnet-genesis-timestamp int      Genesis timestamp of the custom test network.
      --testnet-name string                Name of the custom test network.
      --validator-public-key string        Public key of the validator to exit, must be present in the cluster lock manifest. If --validator-index is also provided, validator liveliness won't be checked on the beacon chain.
```

### Download fully signed exit messages for cold storage

Once enough operators have submitted their partial signatures for an active validator, you can use the `charon exit fetch` command to download the complete exit message to a file for safe keeping. This file can be given to a delegator who wants a guarantee that they can exit the distributed validator if need be.

```markdown
charon exit fetch --help
Fetches a fully signed exit message for a given validator from the remote API and writes it to disk.

Usage:
  charon exit fetch [flags]

Flags:
      --all                                Exit all currently active validators in the cluster.
      --fetched-exit-path string           Path to store fetched signed exit messages. (default "./")
  -h, --help                               Help for fetch
      --lock-file string                   The path to the cluster lock file defining the distributed validator cluster. (default ".charon/cluster-lock.json")
      --log-color string                   Log color; auto, force, disable. (default "auto")
      --log-format string                  Log format; console, logfmt or json (default "console")
      --log-level string                   Log level; debug, info, warn or error (default "info")
      --log-output-path string             Path in which to write on-disk logs.
      --private-key-file string            The path to the charon enr private key file.  (default ".charon/charon-enr-private-key")
      --publish-address string             The URL of the remote API. (default "https://api.obol.tech/v1")
      --publish-timeout duration           Timeout for publishing a signed exit to the publish-address API. (default 5m0s)
      --testnet-capella-hard-fork string   Capella hard fork version of the custom test network.
      --testnet-chain-id uint              Chain ID of the custom test network.
      --testnet-fork-version string        Genesis fork version of the custom test network (in hex).
      --testnet-genesis-timestamp int      Genesis timestamp of the custom test network.
      --testnet-name string                Name of the custom test network.
      --validator-public-key string        Public key of the validator to exit, must be present in the cluster lock manifest. If --validator-index is also provided, validator liveliness won't be checked on the beacon chain.
```

### Broadcast a signed exit message

The `charon exit broadcast` subcommand can be used to broadcast either a signed exit message from a file that was downloaded via the `fetch` command, or it can retrieve and broadcast an exit message directly from the API.

```markdown
charon exit broadcast --help
Retrieves and broadcasts to the configured beacon node a fully signed validator exit message, aggregated with the available partial signatures retrieved from the publish-address. Can also read a signed exit message from disk, in order to be broadcasted to the configured beacon node.

Usage:
  charon exit broadcast [flags]

Flags:
      --all                                      Exit all currently active validators in the cluster.
      --beacon-node-endpoints strings            Comma separated list of one or more beacon node endpoint URLs. [REQUIRED]
      --beacon-node-headers strings              Comma separated list of headers formatted as header=value
      --beacon-node-timeout duration             Timeout for beacon node HTTP calls. (default 30s)
      --exit-epoch uint                          Exit epoch at which the validator will exit, must be the same across all the partial exits. (default 194048)
      --exit-from-dir string                     Retrieves a signed exit messages from a pre-prepared files in a directory instead of --publish-address.
      --exit-from-file string                    Retrieves a signed exit message from a pre-prepared file instead of --publish-address.
      --fallback-beacon-node-endpoints strings   A list of beacon nodes to use if the primary list are offline or unhealthy.
  -h, --help                                     Help for broadcast
      --lock-file string                         The path to the cluster lock file defining the distributed validator cluster. (default ".charon/cluster-lock.json")
      --log-color string                         Log color; auto, force, disable. (default "auto")
      --log-format string                        Log format; console, logfmt or json (default "console")
      --log-level string                         Log level; debug, info, warn or error (default "info")
      --log-output-path string                   Path in which to write on-disk logs.
      --private-key-file string                  The path to the charon enr private key file.  (default ".charon/charon-enr-private-key")
      --publish-address string                   The URL of the remote API. (default "https://api.obol.tech/v1")
      --publish-timeout duration                 Timeout for publishing a signed exit to the publish-address API. (default 5m0s)
      --testnet-capella-hard-fork string         Capella hard fork version of the custom test network.
      --testnet-chain-id uint                    Chain ID of the custom test network.
      --testnet-fork-version string              Genesis fork version of the custom test network (in hex).
      --testnet-genesis-timestamp int            Genesis timestamp of the custom test network.
      --testnet-name string                      Name of the custom test network.
      --validator-keys-dir string                Path to the directory containing the validator private key share files and passwords. (default ".charon/validator_keys")
      --validator-public-key string              Public key of the validator to exit, must be present in the cluster lock manifest. If --validator-index is also provided, validator liveliness won't be checked on the beacon chain.
```

### List active validators

The `charon exit active-validator-list` command returns a list of all distributed validators in the specified cluster whose status is ACTIVE_ONGOING, meaning they can be exited.

```markdown
charon exit active-validator-list --help
Returns a list of all the DVs in the specified cluster whose status is ACTIVE_ONGOING, i.e. can be exited.

Usage:
  charon exit active-validator-list [flags]

Flags:
      --beacon-node-endpoints strings            Comma separated list of one or more beacon node endpoint URLs. [REQUIRED]
      --beacon-node-headers strings              Comma separated list of headers formatted as header=value
      --beacon-node-timeout duration             Timeout for beacon node HTTP calls. (default 30s)
      --fallback-beacon-node-endpoints strings   A list of beacon nodes to use if the primary list are offline or unhealthy.
  -h, --help                                     Help for active-validator-list
      --lock-file string                         The path to the cluster lock file defining the distributed validator cluster. (default ".charon/cluster-lock.json")
      --log-color string                         Log color; auto, force, disable. (default "auto")
      --log-format string                        Log format; console, logfmt or json (default "console")
      --log-level string                         Log level; debug, info, warn or error (default "info")
      --log-output-path string                   Path in which to write on-disk logs.
      --plaintext                                Prints each active validator on a line, without any debugging or logging artifact. Useful for scripting.
      --testnet-capella-hard-fork string         Capella hard fork version of the custom test network.
      --testnet-chain-id uint                    Chain ID of the custom test network.
      --testnet-fork-version string              Genesis fork version of the custom test network (in hex).
      --testnet-genesis-timestamp int            Genesis timestamp of the custom test network.
      --testnet-name string                      Name of the custom test network.
```

## The `enr` command

The standalone `charon enr` command prints an Ethereum Node Record (ENR) from the client's charon-enr-private-key. This serves as a public key that identifies this client to its peers.

```markdown
charon enr --help
Prints an Ethereum Node Record (ENR) from this client's charon-enr-private-key. This serves as a public key that identifies this client to its peers.

Usage:
  charon enr [flags]

Flags:
      --data-dir string   The directory where charon will store all its internal data. (default ".charon")
  -h, --help              Help for enr
      --verbose           Prints the expanded form of ENR.
```

## The `combine` command

### Combine distributed validator key shares into a single validator key

The `combine` command combines many validator key shares into a single Ethereum validator key.

:::warning
This command requires Charon to access the distributed validator's private keys, please use caution and keep these private keys securely backed up and secret.
:::

```markdown
charon combine --help
Combines the private key shares from a threshold of operators in a distributed validator cluster into a set of validator private keys that can be imported into a standard Ethereum validator client.

Warning: running the resulting private keys in a validator alongside the original distributed validator cluster *will* result in slashing.

Usage:
  charon combine [flags]

Flags:
      --cluster-dir string                     Parent directory containing a number of .charon subdirectories from the required threshold of nodes in the cluster. (default "./")
      --execution-client-rpc-endpoint string   The address of the execution engine JSON-RPC API.
      --force                                  Overwrites private keys with the same name if present.
  -h, --help                                   Help for combine
      --no-verify                              Disables cluster definition and lock file verification.
      --output-dir string                      Directory to output the combined private keys to. (default "./validator_keys")
      --testnet-chain-id uint                  Chain ID of the custom test network.
      --testnet-fork-version string            Genesis fork version of the custom test network (in hex).
      --testnet-genesis-timestamp int          Genesis timestamp of the custom test network.
      --testnet-name string                    Name of the custom test network.
```

To run this command, one needs at least a threshold number of node operator's `.charon` directories, which need to be organized into a single folder:

```shell
tree ./cluster
cluster/
├── node0
│   ├── charon-enr-private-key
│   ├── cluster-lock.json
│   ├── deposit-data.json
│   └── validator_keys
│       ├── keystore-0.json
│       ├── keystore-0.txt
│       ├── keystore-1.json
│       └── keystore-1.txt
├── node1
│   ├── charon-enr-private-key
│   ├── cluster-lock.json
│   ├── deposit-data.json
│   └── validator_keys
│       ├── keystore-0.json
│       ├── keystore-0.txt
│       ├── keystore-1.json
│       └── keystore-1.txt
├── node2
│   ├── charon-enr-private-key
│   ├── cluster-lock.json
│   ├── deposit-data.json
│   └── validator_keys
│       ├── keystore-0.json
│       ├── keystore-0.txt
│       ├── keystore-1.json
│       └── keystore-1.txt
└── node3
    ├── charon-enr-private-key
    ├── cluster-lock.json
    ├── deposit-data.json
    └── validator_keys
        ├── keystore-0.json
        ├── keystore-0.txt
        ├── keystore-1.json
        └── keystore-1.txt
```

That is, each operator `.charon` directory must be placed in a parent directory, and renamed to avoid conflicts.

If for example the lock file defines 2 validators, each `validator_keys` directory must contain exactly 4 files, a JSON and TXT file for each validator.

Those files must be named with an increasing index associated with the validator in the lock file, starting from 0.

The chosen folder name does not matter, as long as it's different from `.charon`.

At the end of the process `combine` will create a new directory specified by `--output-dir` containing the traditional validator private keystore.

```shell
charon combine --cluster-dir="./cluster" --output-dir="./combined"
tree ./combined
combined
├── keystore-0.json
├── keystore-0.txt
├── keystore-1.json
└── keystore-1.txt
```

By default, the `combine` command will refuse to overwrite any private key that is already present in the destination directory.

To force the process, use the `--force` flag.

:::danger
The generated private keys are in the standard [EIP-2335](https://github.com/ethereum/ercs/blob/master/ERCS/erc-2335.md) format, and can be imported in any Ethereum validator client that supports it.

**Ensure your distributed validator cluster is completely shut down for at least two epochs before starting a replacement validator or you are likely to be slashed.**
:::

## The `deposit` command

:::warning
Activating a validator with an incorrect withdrawal address likely results in a loss of the funds. Take care when preparing alternative deposit data for a single validator client.
:::

For unused, inactive validators in an existing cluster, you can prepare alternative deposit data for them, allowing you to use them as validators for a different withdrawal address than originally intended.

See the [advanced guide](../../advanced-and-troubleshooting/advanced/alter-withdrawal-addresses.md) for more.

```markdown
Sign and fetch new deposit messages for unactivated validators using a remote API, enabling the modification of a withdrawal address after creation but before activation.

Usage:
  charon deposit [command]

Available Commands:
  fetch       Fetch a full deposit message.
  sign        Sign a new partial deposit message.

Flags:
  -h, --help   Help for deposit

Use "charon deposit [command] --help" for more information about a command.

```

### Sign a deposit for an alternative withdrawal address

A threshold of node operators must run `charon deposit sign` with matching parameters, to enable a new deposit data to be fetched with `charon deposit fetch`.

```markdown
Signs new partial validator deposit messages using a remote API.

Usage:
  charon deposit sign [flags]

Flags:
      --deposit-amounts uints           Comma separated list of partial deposit amounts (integers) in ETH. (default [32])
  -h, --help                            Help for sign
      --lock-file string                Path to the cluster lock file defining the distributed validator cluster. (default ".charon/cluster-lock.json")
      --private-key-file string         Path to the charon enr private key file. (default ".charon/charon-enr-private-key")
      --publish-address string          The URL of the remote API. (default "https://api.obol.tech/v1")
      --publish-timeout duration        Timeout for publishing a signed deposit to the publish-address API. (default 5m0s)
      --validator-keys-dir string       Path to the directory containing the validator private key share files and passwords. (default ".charon/validator_keys")
      --validator-public-keys strings   [REQUIRED] List of validator public keys for which new deposits will be signed.
      --withdrawal-addresses strings    [REQUIRED] Withdrawal addresses for which the new deposits will be signed. Either a single address for all specified validator-public-keys or one address per key should be specified.
```

### Download a fully signed alternative deposit message

`charon deposit fetch` outputs a file `.charon/deposit-data-<timestamp>.json` for use with the Ethereum deposit contract.

```markdown
Fetch full validator deposit messages using a remote API.

Usage:
  charon deposit fetch [flags]

Flags:
      --deposit-data-dir string         Path to the directory in which fetched deposit data will be stored. (default ".charon/deposit-data-<TIMESTAMP>")
  -h, --help                            Help for fetch
      --lock-file string                Path to the cluster lock file defining the distributed validator cluster. (default ".charon/cluster-lock.json")
      --private-key-file string         Path to the charon enr private key file. (default ".charon/charon-enr-private-key")
      --publish-address string          The URL of the remote API. (default "https://api.obol.tech/v1")
      --publish-timeout duration        Timeout for publishing a signed deposit to the publish-address API. (default 5m0s)
      --validator-keys-dir string       Path to the directory containing the validator private key share files and passwords. (default ".charon/validator_keys")
      --validator-public-keys strings   [REQUIRED] List of validator public keys for which new deposits will be signed.
```

## Host a relay

Relays run a libp2p [circuit relay](https://docs.libp2p.io/concepts/nat/circuit-relay/) server that allows Charon clusters to perform peer discovery and for Charon clients behind strict NAT gateways to be communicated with. If you want to self-host a relay for your cluster(s) the following command will start one.

```markdown
charon relay --help
Starts a libp2p circuit relay that charon clients can use to discover and connect to their peers.

Usage:
  charon relay [flags]

Flags:
      --auto-p2pkey                       Automatically create a p2pkey (secp256k1 private key used for p2p authentication and ENR) if none found in data directory. (default true)
      --data-dir string                   The directory where charon will store all its internal data. (default ".charon")
      --debug-address string              Listening address (ip and port) for the pprof and QBFT debug API. It is not enabled by default.
  -h, --help                              Help for relay
      --http-address string               Listening address (ip and port) for the relay http server serving runtime ENR. (default "127.0.0.1:3640")
      --log-color string                  Log color; auto, force, disable. (default "auto")
      --log-format string                 Log format; console, logfmt or json (default "console")
      --log-level string                  Log level; debug, info, warn or error (default "info")
      --log-output-path string            Path in which to write on-disk logs.
      --loki-addresses strings            Enables sending of logfmt structured logs to these Loki log aggregation server addresses. This is in addition to normal stderr logs.
      --loki-service string               Service label sent with logs to Loki. (default "charon")
      --monitoring-address string         Listening address (ip and port) for the monitoring API (prometheus).
      --p2p-advertise-private-addresses   Enable advertising of libp2p auto-detected private addresses. This doesn't affect manually provided p2p-external-ip/hostname.
      --p2p-disable-reuseport             Disables TCP port reuse for outgoing libp2p connections.
      --p2p-external-hostname string      The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.
      --p2p-external-ip string            The IP address advertised by libp2p. This may be used to advertise an external IP.
      --p2p-max-connections int           Libp2p maximum number of peers that can connect to this relay. (default 16384)
      --p2p-max-reservations int          Updates max circuit reservations per peer (each valid for 30min) (default 512)
      --p2p-relay-loglevel string         Libp2p circuit relay log level. E.g., debug, info, warn, error.
      --p2p-relays strings                Comma-separated list of libp2p relay URLs or multiaddrs. (default [https://0.relay.obol.tech,https://1.relay.obol.tech,https://2.relay.obol.dev])
      --p2p-tcp-address strings           Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. Empty default doesn't bind to local port therefore only supports outgoing connections.
      --p2p-udp-address strings           Comma-separated list of listening UDP addresses (ip and port) for libP2P traffic. Empty default doesn't bind to local port therefore only supports outgoing connections.
```

You can also consider adding [alternative public relays](../../advanced-and-troubleshooting/security/risks.md) to your cluster by specifying a list of `p2p-relays` in [`charon run`](charon-cli-reference.md#run-the-charon-middleware).

## Experimental commands

These commands are subject to breaking changes until they are moved outside of the `alpha` subcommand in a future release.

### Edit cluster configuration

The `charon alpha edit` commands allow you to modify existing distributed validator cluster configurations.

```markdown
charon alpha edit --help
Subcommands allow users to modify existing distributed validator cluster configurations, such as adding and removing operators.

Usage:
  charon alpha edit [command]

Available Commands:
  add-operators         Add new operators to an existing distributed validator cluster
  add-validators        Add new validators to an existing distributed validator cluster
  recreate-private-keys Create new private key shares to replace existing validator private key shares
  remove-operators      Remove operators from an existing distributed validator cluster

Flags:
  -h, --help   Help for edit

Use "charon alpha edit [command] --help" for more information about a command.
```

#### Add validators to a cluster

The `charon alpha edit add-validators` command allows you to generate new validators and add them to an existing cluster. This process is very similar to the `charon dkg` ceremony, which requires all node operators to participate, because under the hood it runs the same DKG protocol with additional actions and verifications.

:::warning
This is an alpha feature and is not yet recommended for production use.
:::

```markdown
charon alpha edit add-validators --help
Generates and appends new validator keys to an existing distributed validator cluster.

Usage:
  charon alpha edit add-validators [flags]

Flags:
      --execution-client-rpc-endpoint string   Optional address of an execution engine JSON-RPC API. Used to validate smart contract signatures for Node Operators in the cluster.
      --fee-recipient-addresses strings        Comma separated list of Ethereum addresses of the fee recipient for each validator. Either provide a single fee recipient address or fee recipient addresses for each validator.
  -h, --help                                   Help for add-validators
      --keymanager-address string              The keymanager URL to import validator keyshares.
      --keymanager-auth-token string           Authentication bearer token to interact with keymanager API. Don't include the "Bearer" symbol, only include the api-token.
      --lock-file string                       The path to the cluster lock file defining the distributed validator cluster. (default ".charon/cluster-lock.json")
      --log-color string                       Log color; auto, force, disable. (default "auto")
      --log-format string                      Log format; console, logfmt or json (default "console")
      --log-level string                       Log level; debug, info, warn or error (default "info")
      --log-output-path string                 Path in which to write on-disk logs.
      --no-verify                              Disables cluster definition and lock file verification.
      --num-validators int                     The number of new validators to generate and add to the existing cluster. (default 1)
      --output-dir string                      The destination folder for the new (combined) cluster data. Must be empty. (default "distributed_validator")
      --p2p-disable-reuseport                  Disables TCP port reuse for outgoing libp2p connections.
      --p2p-external-hostname string           The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.
      --p2p-external-ip string                 The IP address advertised by libp2p. This may be used to advertise an external IP.
      --p2p-relays strings                     Comma-separated list of libp2p relay URLs or multiaddrs. (default [https://0.relay.obol.tech,https://1.relay.obol.tech,https://2.relay.obol.dev])
      --p2p-tcp-address strings                Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. Empty default doesn't bind to local port therefore only supports outgoing connections.
      --p2p-udp-address strings                Comma-separated list of listening UDP addresses (ip and port) for libP2P traffic. Empty default doesn't bind to local port therefore only supports outgoing connections.
      --private-key-file string                The path to the charon enr private key file.  (default ".charon/charon-enr-private-key")
      --shutdown-delay duration                Graceful shutdown delay. (default 1s)
      --timeout duration                       Timeout for the command, should be increased if the command times out. (default 1m0s)
      --unverified                             If charon has no access to the existing validator keys, this flag allows the addition to proceed, but skips hashing and signing the new cluster lock data. charon run must be started with --no-verify flag.
      --validator-keys-dir string              Path to the directory containing the validator private key share files and passwords. (default ".charon/validator_keys")
      --withdrawal-addresses strings           Comma separated list of Ethereum addresses to receive the returned stake and accrued rewards for each validator. Either provide a single withdrawal address or withdrawal addresses for each validator.
```

#### Add operators to a cluster

The `charon alpha edit add-operators` command adds new operators to an existing distributed validator cluster whilst keeping all validator public keys unchanged. All existing operators and new operators must participate in this ceremony.

:::warning
This is an alpha feature and is not yet recommended for production use.
:::

```markdown
charon alpha edit add-operators --help
Adds new operators to an existing distributed validator cluster, keeping validator public keys unchanged.

Usage:
  charon alpha edit add-operators [flags]

Flags:
      --execution-client-rpc-endpoint string   Optional address of an execution engine JSON-RPC API. Used to validate smart contract signatures for Node Operators in the cluster.
  -h, --help                                   Help for add-operators
      --lock-file string                       The path to the cluster lock file defining the distributed validator cluster. (default ".charon/cluster-lock.json")
      --log-color string                       Log color; auto, force, disable. (default "auto")
      --log-format string                      Log format; console, logfmt or json (default "console")
      --log-level string                       Log level; debug, info, warn or error (default "info")
      --log-output-path string                 Path in which to write on-disk logs.
      --new-operator-enrs strings              Comma-separated list of the new operators to be added (Charon ENR addresses).
      --no-verify                              Disables cluster definition and lock file verification.
      --output-dir string                      The destination folder for the new cluster data. Must be empty. (default "distributed_validator")
      --p2p-disable-reuseport                  Disables TCP port reuse for outgoing libp2p connections.
      --p2p-external-hostname string           The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.
      --p2p-external-ip string                 The IP address advertised by libp2p. This may be used to advertise an external IP.
      --p2p-relays strings                     Comma-separated list of libp2p relay URLs or multiaddrs. (default [https://4.relay.obol.dev])
      --p2p-tcp-address strings                Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. Empty default doesn't bind to local port therefore only supports outgoing connections.
      --p2p-udp-address strings                Comma-separated list of listening UDP addresses (ip and port) for libP2P traffic. Empty default doesn't bind to local port therefore only supports outgoing connections.
      --private-key-file string                The path to the charon enr private key file.  (default ".charon/charon-enr-private-key")
      --shutdown-delay duration                Graceful shutdown delay. (default 1s)
      --timeout duration                       Timeout for the protocol, should be increased if protocol times out. (default 1m0s)
      --validator-keys-dir string              Path to the directory containing the validator private key share files and passwords. (default ".charon/validator_keys")
```

#### Remove operators from a cluster

The `charon alpha edit remove-operators` command removes operators from an existing distributed validator cluster whilst leaving all validators intact. Remaining operators must participate in this ceremony.

:::warning
This is an alpha feature and is not yet recommended for production use.
:::

```markdown
charon alpha edit remove-operators --help
Removes operators from an existing distributed validator cluster, leaving all validators intact.

Usage:
  charon alpha edit remove-operators [flags]

Flags:
      --execution-client-rpc-endpoint string   Optional address of an execution engine JSON-RPC API. Used to validate smart contract signatures for Node Operators in the cluster.
  -h, --help                                   Help for remove-operators
      --lock-file string                       The path to the cluster lock file defining the distributed validator cluster. (default ".charon/cluster-lock.json")
      --log-color string                       Log color; auto, force, disable. (default "auto")
      --log-format string                      Log format; console, logfmt or json (default "console")
      --log-level string                       Log level; debug, info, warn or error (default "info")
      --log-output-path string                 Path in which to write on-disk logs.
      --new-threshold int                      Optional override of the new threshold required for signature reconstruction. Defaults to ceil(n*2/3) if zero. Warning, non-default values decrease security. All operators must use the same value.
      --no-verify                              Disables cluster definition and lock file verification.
      --operator-enrs-to-remove strings        Comma-separated list of operators to be removed (Charon ENR addresses).
      --output-dir string                      The destination folder for the new cluster data. Must be empty. Optional for removed operators. (default "distributed_validator")
      --p2p-disable-reuseport                  Disables TCP port reuse for outgoing libp2p connections.
      --p2p-external-hostname string           The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.
      --p2p-external-ip string                 The IP address advertised by libp2p. This may be used to advertise an external IP.
      --p2p-relays strings                     Comma-separated list of libp2p relay URLs or multiaddrs. (default [https://4.relay.obol.dev])
      --p2p-tcp-address strings                Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. Empty default doesn't bind to local port therefore only supports outgoing connections.
      --p2p-udp-address strings                Comma-separated list of listening UDP addresses (ip and port) for libP2P traffic. Empty default doesn't bind to local port therefore only supports outgoing connections.
      --participating-operator-enrs strings    Comma-separated list of operator ENRs participating in the ceremony. Required if --operator-enrs-to-remove specifies more operators to remove than the fault tolerance of the current cluster.
      --private-key-file string                The path to the charon enr private key file.  (default ".charon/charon-enr-private-key")
      --shutdown-delay duration                Graceful shutdown delay. (default 1s)
      --timeout duration                       Timeout for the protocol, should be increased if protocol times out. (default 1m0s)
      --validator-keys-dir string              Path to the directory containing the validator private key share files and passwords. (default ".charon/validator_keys")
```

#### Recreate private key shares

The `charon alpha edit recreate-private-keys` command creates new private key shares to replace the existing validator private keys whilst retaining the same operator identities and validator public keys. All operators must participate in this ceremony.

:::warning
This is an alpha feature and is not yet recommended for production use.
:::

```markdown
charon alpha edit recreate-private-keys --help
Creates new private key shares to replace the existing validator private keys while retaining the same operator identities.

Usage:
  charon alpha edit recreate-private-keys [flags]

Flags:
      --execution-client-rpc-endpoint string   Optional address of an execution engine JSON-RPC API. Used to validate smart contract signatures for Node Operators in the cluster.
  -h, --help                                   Help for recreate-private-keys
      --lock-file string                       The path to the cluster lock file defining the distributed validator cluster. (default ".charon/cluster-lock.json")
      --log-color string                       Log color; auto, force, disable. (default "auto")
      --log-format string                      Log format; console, logfmt or json (default "console")
      --log-level string                       Log level; debug, info, warn or error (default "info")
      --log-output-path string                 Path in which to write on-disk logs.
      --no-verify                              Disables cluster definition and lock file verification.
      --output-dir string                      The destination folder for the new cluster artifacts. Must be empty. (default "distributed_validator")
      --p2p-disable-reuseport                  Disables TCP port reuse for outgoing libp2p connections.
      --p2p-external-hostname string           The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.
      --p2p-external-ip string                 The IP address advertised by libp2p. This may be used to advertise an external IP.
      --p2p-relays strings                     Comma-separated list of libp2p relay URLs or multiaddrs. (default [https://4.relay.obol.dev])
      --p2p-tcp-address strings                Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. Empty default doesn't bind to local port therefore only supports outgoing connections.
      --p2p-udp-address strings                Comma-separated list of listening UDP addresses (ip and port) for libP2P traffic. Empty default doesn't bind to local port therefore only supports outgoing connections.
      --private-key-file string                The path to the charon enr private key file.  (default ".charon/charon-enr-private-key")
      --shutdown-delay duration                Graceful shutdown delay. (default 1s)
      --timeout duration                       Timeout for the protocol, should be increased if protocol times out. (default 1m0s)
      --validator-keys-dir string              Path to the directory containing the validator private key share files and passwords. (default ".charon/validator_keys")
```

### Test your candidate distributed validator cluster

Charon comes with a test suite for understanding the suitability and readiness of a given setup.

```markdown
charon alpha test --help
Subcommands provide test suites to evaluate a cluster setup. The full validator stack can be tested - charon peers, consensus layer, validator client, MEV. Current machine's infra can be examined as well.

Usage:
  charon alpha test [command]

Available Commands:
  all         Run tests towards peer nodes, beacon nodes, validator client, MEV relays, own hardware and internet connectivity.
  beacon      Run multiple tests towards beacon nodes
  infra       Run multiple hardware and internet connectivity tests
  mev         Run multiple tests towards MEV relays
  peers       Run multiple tests towards peer nodes
  validator   Run multiple tests towards validator client

Flags:
  -h, --help   Help for test

Use "charon alpha test [command] --help" for more information about a command.
```

#### Test all

```markdown
charon alpha test all --help
Run tests towards peer nodes, beacon nodes, validator client, MEV relays, own hardware and internet connectivity. Verify that Charon can efficiently do its duties on the tested setup.

Usage:
  charon alpha test all [flags]

Flags:
      --beacon-endpoints strings                      [REQUIRED] Comma separated list of one or more beacon node endpoint URLs.
      --beacon-load-test                              Enable load test, not advisable when testing towards external beacon nodes.
      --beacon-load-test-duration duration            Time to keep running the load tests in seconds. For each second a new continuous ping instance is spawned. (default 5s)
      --beacon-simulation-custom int                  Run custom simulation with the specified amount of validators.
      --beacon-simulation-duration-in-slots int       Time to keep running the simulation in slots. (default 32)
      --beacon-simulation-file-dir string             Time to keep running the simulation in slots. (default "./")
      --beacon-simulation-verbose                     Show results for each request and each validator.
  -h, --help                                          Help for all
      --infra-disk-io-block-size-kb int               The block size in kilobytes used for I/O units. Same value applies for both reads and writes. (default 4096)
      --infra-disk-io-test-file-dir string            Directory at which disk performance will be measured. If none specified, current user's home directory will be used.
      --infra-internet-test-servers-exclude strings   List of server names to be excluded from the tests. To be specified only if you experience issues with a server that is wrongly considered best performing.
      --infra-internet-test-servers-only strings      List of specific server names to be included for the internet tests, the best performing one is chosen. If not provided, closest and best performing servers are chosen automatically.
      --log-color string                              Log color; auto, force, disable. (default "auto")
      --log-format string                             Log format; console, logfmt or json (default "console")
      --log-level string                              Log level; debug, info, warn or error (default "info")
      --log-output-path string                        Path in which to write on-disk logs.
      --mev-beacon-node-endpoint string               [REQUIRED] Beacon node endpoint URL used for block creation test.
      --mev-endpoints strings                         Comma separated list of one or more MEV relay endpoint URLs.
      --mev-load-test                                 Enable load test.
      --mev-number-of-payloads uint                   Increases the accuracy of the load test by asking for multiple payloads. Increases test duration. (default 1)
      --output-json string                            File path to which output can be written in JSON format.
      --p2p-disable-reuseport                         Disables TCP port reuse for outgoing libp2p connections.
      --p2p-external-hostname string                  The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.
      --p2p-external-ip string                        The IP address advertised by libp2p. This may be used to advertise an external IP.
      --p2p-relays strings                            Comma-separated list of libp2p relay URLs or multiaddrs. (default [https://0.relay.obol.tech,https://1.relay.obol.tech,https://2.relay.obol.dev])
      --p2p-tcp-address strings                       Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. Empty default doesn't bind to local port therefore only supports outgoing connections.
      --p2p-udp-address strings                       Comma-separated list of listening UDP addresses (ip and port) for libP2P traffic. Empty default doesn't bind to local port therefore only supports outgoing connections.
      --peers-definition-file string                  The path to the cluster definition file or an HTTP URL.
      --peers-direct-connection-timeout duration      Time to keep trying to establish direct connection to peer. (default 2m0s)
      --peers-enrs strings                            [REQUIRED] Comma-separated list of each peer ENR address.
      --peers-keep-alive duration                     Time to keep TCP node alive after test completion, so connection is open for other peers to test on their end. (default 30m0s)
      --peers-load-test-duration duration             Time to keep running the load tests in seconds. For each second a new continuous ping instance is spawned. (default 30s)
      --peers-lock-file string                        The path to the cluster lock file defining the distributed validator cluster.
      --peers-private-key-file string                 The path to the charon enr private key file. (default ".charon/charon-enr-private-key")
      --publish                                       Publish test result file to obol-api.
      --publish-address string                        The URL to publish the test result file to. (default "https://api.obol.tech/v1")
      --publish-private-key-file string               The path to the charon enr private key file, used for signing the publish request. Temporary key will be generated if the file does not exist. (default ".charon/charon-enr-private-key")
      --quiet                                         Do not print test results to stdout.
      --test-cases strings                            List of comma separated names of tests to be executed. Available tests are: [Ping PingMeasure PingLoad DirectConn Libp2pTCPPortOpen PingRelay PingMeasureRelay Version Synced PingLoad Simulate1 Simulate100 Simulate500 Simulate1000 PingMeasure PeerCount Simulate10 SimulateCustom Ping Ping PingMeasure PingLoad Ping PingMeasure CreateBlock DiskWriteSpeed DiskReadSpeed DiskReadIOPS TotalMemory InternetLatency InternetDownloadSpeed InternetUploadSpeed DiskWriteIOPS AvailableMemory]
      --timeout duration                              Execution timeout for all tests. (default 1h0m0s)
      --validator-load-test-duration duration         Time to keep running the load tests in seconds. For each second a new continuous ping instance is spawned. (default 5s)
      --validator-validator-api-address string        Listening address (ip and port) for validator-facing traffic proxying the beacon-node API. (default "127.0.0.1:3600")
```

#### Test beacon node

```markdown
charon alpha test beacon --help
Run multiple tests towards beacon nodes. Verify that Charon can efficiently interact with Beacon Node(s).

Usage:
  charon alpha test beacon [flags]

Flags:
      --endpoints strings                  [REQUIRED] Comma separated list of one or more beacon node endpoint URLs.
  -h, --help                               Help for beacon
      --load-test                          Enable load test, not advisable when testing towards external beacon nodes.
      --load-test-duration duration        Time to keep running the load tests in seconds. For each second a new continuous ping instance is spawned. (default 5s)
      --output-json string                 File path to which output can be written in JSON format.
      --publish                            Publish test result file to obol-api.
      --publish-address string             The URL to publish the test result file to. (default "https://api.obol.tech/v1")
      --publish-private-key-file string    The path to the charon enr private key file, used for signing the publish request. Temporary key will be generated if the file does not exist. (default ".charon/charon-enr-private-key")
      --quiet                              Do not print test results to stdout.
      --simulation-custom int              Run custom simulation with the specified amount of validators.
      --simulation-duration-in-slots int   Time to keep running the simulation in slots. (default 32)
      --simulation-file-dir string         Time to keep running the simulation in slots. (default "./")
      --simulation-verbose                 Show results for each request and each validator.
      --test-cases strings                 List of comma separated names of tests to be executed. Available tests are: [Simulate1000 SimulateCustom Version PingLoad Simulate10 Simulate500 Ping PingMeasure Synced PeerCount Simulate1 Simulate100]
      --timeout duration                   Execution timeout for all tests. (default 1h0m0s)
```

#### Test infra

```markdown
charon alpha test infra --help
Run multiple hardware and internet connectivity tests. Verify that Charon is running on host with sufficient capabilities.

Usage:
  charon alpha test infra [flags]

Flags:
      --disk-io-block-size-kb int               The block size in kilobytes used for I/O units. Same value applies for both reads and writes. (default 4096)
      --disk-io-test-file-dir string            Directory at which disk performance will be measured. If none specified, current user's home directory will be used.
  -h, --help                                    Help for infra
      --internet-test-servers-exclude strings   List of server names to be excluded from the tests. To be specified only if you experience issues with a server that is wrongly considered best performing.
      --internet-test-servers-only strings      List of specific server names to be included for the internet tests, the best performing one is chosen. If not provided, closest and best performing servers are chosen automatically.
      --output-json string                      File path to which output can be written in JSON format.
      --publish                                 Publish test result file to obol-api.
      --publish-address string                  The URL to publish the test result file to. (default "https://api.obol.tech/v1")
      --publish-private-key-file string         The path to the charon enr private key file, used for signing the publish request. Temporary key will be generated if the file does not exist. (default ".charon/charon-enr-private-key")
      --quiet                                   Do not print test results to stdout.
      --test-cases strings                      List of comma separated names of tests to be executed. Available tests are: [InternetDownloadSpeed DiskWriteSpeed DiskWriteIOPS DiskReadSpeed AvailableMemory TotalMemory InternetLatency InternetUploadSpeed DiskReadIOPS]
      --timeout duration                        Execution timeout for all tests. (default 1h0m0s)
```

#### Test MEV

```markdown
charon alpha test mev --help
Run multiple tests towards MEV relays. Verify that Charon can efficiently interact with MEV relay(s).

Usage:
  charon alpha test mev [flags]

Flags:
      --beacon-node-endpoint string       [REQUIRED] Beacon node endpoint URL used for block creation test.
      --endpoints strings                 Comma separated list of one or more MEV relay endpoint URLs.
  -h, --help                              Help for mev
      --load-test                         Enable load test.
      --number-of-payloads uint           Increases the accuracy of the load test by asking for multiple payloads. Increases test duration. (default 1)
      --output-json string                File path to which output can be written in JSON format.
      --publish                           Publish test result file to obol-api.
      --publish-address string            The URL to publish the test result file to. (default "https://api.obol.tech/v1")
      --publish-private-key-file string   The path to the charon enr private key file, used for signing the publish request. Temporary key will be generated if the file does not exist. (default ".charon/charon-enr-private-key")
      --quiet                             Do not print test results to stdout.
      --test-cases strings                List of comma separated names of tests to be executed. Available tests are: [PingMeasure CreateBlock Ping]
      --timeout duration                  Execution timeout for all tests. (default 1h0m0s)
```

#### Test Charon peers

```markdown
charon alpha test peers --help
Run multiple tests towards peer nodes. Verify that Charon can efficiently interact with Validator Client.

Usage:
  charon alpha test peers [flags]

Flags:
      --definition-file string               The path to the cluster definition file or an HTTP URL.
      --direct-connection-timeout duration   Time to keep trying to establish direct connection to peer. (default 2m0s)
      --enrs strings                         [REQUIRED] Comma-separated list of each peer ENR address.
  -h, --help                                 Help for peers
      --keep-alive duration                  Time to keep TCP node alive after test completion, so connection is open for other peers to test on their end. (default 30m0s)
      --load-test-duration duration          Time to keep running the load tests in seconds. For each second a new continuous ping instance is spawned. (default 30s)
      --lock-file string                     The path to the cluster lock file defining the distributed validator cluster.
      --log-color string                     Log color; auto, force, disable. (default "auto")
      --log-format string                    Log format; console, logfmt or json (default "console")
      --log-level string                     Log level; debug, info, warn or error (default "info")
      --log-output-path string               Path in which to write on-disk logs.
      --output-json string                   File path to which output can be written in JSON format.
      --p2p-disable-reuseport                Disables TCP port reuse for outgoing libp2p connections.
      --p2p-external-hostname string         The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.
      --p2p-external-ip string               The IP address advertised by libp2p. This may be used to advertise an external IP.
      --p2p-relays strings                   Comma-separated list of libp2p relay URLs or multiaddrs. (default [https://0.relay.obol.tech,https://1.relay.obol.tech,https://2.relay.obol.dev])
      --p2p-tcp-address strings              Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. Empty default doesn't bind to local port therefore only supports outgoing connections.
      --p2p-udp-address strings              Comma-separated list of listening UDP addresses (ip and port) for libP2P traffic. Empty default doesn't bind to local port therefore only supports outgoing connections.
      --private-key-file string              The path to the charon enr private key file. (default ".charon/charon-enr-private-key")
      --publish                              Publish test result file to obol-api.
      --publish-address string               The URL to publish the test result file to. (default "https://api.obol.tech/v1")
      --publish-private-key-file string      The path to the charon enr private key file, used for signing the publish request. Temporary key will be generated if the file does not exist. (default ".charon/charon-enr-private-key")
      --quiet                                Do not print test results to stdout.
      --test-cases strings                   List of comma separated names of tests to be executed. Available tests are: [PingMeasure PingLoad DirectConn Ping Libp2pTCPPortOpen]
      --timeout duration                     Execution timeout for all tests. (default 1h0m0s)
```

#### Test validator client

```markdown
charon alpha test validator --help
Run multiple tests towards validator client. Verify that Charon can efficiently interact with its validator client.

Usage:
  charon alpha test validator [flags]

Flags:
  -h, --help                              Help for validator
      --load-test-duration duration       Time to keep running the load tests in seconds. For each second a new continuous ping instance is spawned. (default 5s)
      --output-json string                File path to which output can be written in JSON format.
      --publish                           Publish test result file to obol-api.
      --publish-address string            The URL to publish the test result file to. (default "https://api.obol.tech/v1")
      --publish-private-key-file string   The path to the charon enr private key file, used for signing the publish request. Temporary key will be generated if the file does not exist. (default ".charon/charon-enr-private-key")
      --quiet                             Do not print test results to stdout.
      --test-cases strings                List of comma separated names of tests to be executed. Available tests are: [Ping PingMeasure PingLoad]
      --timeout duration                  Execution timeout for all tests. (default 1h0m0s)
      --validator-api-address string      Listening address (ip and port) for validator-facing traffic proxying the beacon-node API. (default "127.0.0.1:3600")
```
