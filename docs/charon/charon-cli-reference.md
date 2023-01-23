---
description: A go-based middleware client for taking part in Distributed Validator clusters.
sidebar_position: 5
---

# CLI reference

:::caution

The `charon` client is under heavy development, interfaces are subject to change until a first major version is published. 

:::

The following is a reference for charon version [`v0.13.0`](https://github.com/ObolNetwork/charon/releases/tag/v0.13.0). Find the latest release on [our Github](https://github.com/ObolNetwork/charon/releases).

The following are the top-level commands available to use. 

```markdown
charon help
Charon enables the operation of Ethereum validators in a fault tolerant manner by splitting the validating keys across a group of trusted parties using threshold cryptography.

Usage:
  charon [command]

Available Commands:
  bootnode    Start a discv5 bootnode server. Deprecated, use 'charon relay'
  completion  Generate the autocompletion script for the specified shell
  create      Create artifacts for a distributed validator cluster
  dkg         Participate in a Distributed Key Generation ceremony
  enr         Prints a new ENR for this node
  help        Help about any command
  relay       Start a libp2p relay server
  run         Run the charon middleware client
  version     Print version and exit

Flags:
  -h, --help   Help for charon

Use "charon [command] --help" for more information about a command.
```

## The `create` subcommand

The `create` subcommand handles the creation of artifacts needed by charon to operate.

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

### Creating an ENR for charon

An `enr` is an Ethereum Node Record. It is used to identify this charon client to its other counterparty charon clients across the internet. 

```markdown
charon create enr --help
Create an Ethereum Node Record (ENR) private key to identify this charon client

Usage:
  charon create enr [flags]

Flags:
      --data-dir string                The directory where charon will store all its internal data (default ".charon")
  -h, --help                           Help for enr
      --p2p-allowlist string           Comma-separated list of CIDR subnets for allowing only certain peer connections. Example: 192.168.0.0/16 would permit connections to peers on your local network only. The default is to accept all connections.
      --p2p-bootnode-relay             Enables using bootnodes as libp2p circuit relays. Useful if some charon nodes are not publicly accessible. Deprecated, should always be enabled. (default true)
      --p2p-bootnodes strings          Comma-separated list of discv5 bootnode URLs or ENRs. Deprecated, use p2p-relays flag.
      --p2p-bootnodes-from-lockfile    Enables using cluster lock ENRs as discv5 bootnodes. Allows skipping explicit bootnodes if key generation ceremony included correct IPs. Discv5 is deprecated, use relay discovery.
      --p2p-denylist string            Comma-separated list of CIDR subnets for disallowing certain peer connections. Example: 192.168.0.0/16 would disallow connections to peers on your local network. The default is to accept all connections.
      --p2p-disable-reuseport          Disables TCP port reuse for outgoing libp2p connections.
      --p2p-external-hostname string   The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.
      --p2p-external-ip string         The IP address advertised by libp2p. This may be used to advertise an external IP.
      --p2p-relays strings             Comma-separated list of libp2p relay URLs or ENRs. (default [http://bootnode.lb.gcp.obol.tech:3640/enr])
      --p2p-tcp-address strings        Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. Empty default doesn't bind to local port therefore only supports outgoing connections.
      --p2p-udp-address string         Listening UDP address (ip and port) for discv5 discovery. Empty default disables discv5 discovery. Discv5 is deprecated, use relay discovery.

```

### Create a full cluster locally

`charon create cluster` creates a set of distributed validators locally, including the private keys, a `cluster-lock.json` file, and deposit and exit data. However, this command should only be used for solo use of distributed validators. To run a Distributed Validator with a group of operators, it is preferable to create these artifacts using the `charon dkg` command. That way, no single operator custodies all of the private keys to a distributed validator.

```markdown
charon create cluster --help
Creates a local charon cluster configuration including validator keys, charon p2p keys, cluster-lock.json and a deposit-data.json. See flags for supported features.

Usage:
  charon create cluster [flags]

Flags:
      --clean                          Delete the cluster directory before generating it.
      --cluster-dir string             The target folder to create the cluster in. (default ".charon/cluster")
      --definition-file string         Optional path to a cluster definition file or an HTTP URL. This overrides all other configuration flags.
      --fee-recipient-address string   Optional Ethereum address of the fee recipient
  -h, --help                           Help for cluster
      --insecure-keys                  Generates insecure keystore files. This should never be used. It is not supported on mainnet.
      --keymanager-addresses strings   Comma separated list of keymanager URLs to push validator key shares to. Note that multiple addresses are required, one for each node in the cluster, with node0's keyshares being pushed to the first address, node1's keyshares to the second, and so on.
      --name string                    The cluster name
      --network string                 Ethereum network to create validators for. Options: mainnet, gnosis, goerli, kiln, ropsten, sepolia. (default "goerli")
      --nodes int                      The number of charon nodes in the cluster. Minimum is 4. (default 4)
      --num-validators int             The number of distributed validators needed in the cluster. (default 1)
      --split-existing-keys            Split an existing validator's private key into a set of distributed validator private key shares. Does not re-create deposit data for this key.
      --split-keys-dir string          Directory containing keys to split. Expects keys in keystore-*.json and passwords in keystore-*.txt. Requires --split-existing-keys.
      --threshold int                  Optional override of threshold required for signature reconstruction. Defaults to ceil(n*2/3) if zero. Warning, non-default values decrease security.
      --withdrawal-address string      Ethereum address to receive the returned stake and accrued rewards. (default "0x0000000000000000000000000000000000000000")

```

### Creating the configuration for a DKG Ceremony

This `charon create dkg` command creates a cluster_definition file used for the `charon dkg` command. 

```markdown
charon create dkg --help
Create a cluster definition file that will be used by all participants of a DKG.

Usage:
  charon create dkg [flags]

Flags:
      --dkg-algorithm string           DKG algorithm to use; default, keycast, frost (default "default")
      --fee-recipient-address string   Optional Ethereum address of the fee recipient
  -h, --help                           Help for dkg
      --name string                    Optional cosmetic cluster name
      --network string                 Ethereum network to create validators for. Options: mainnet, gnosis, goerli, kiln, ropsten, sepolia. (default "goerli")
      --num-validators int             The number of distributed validators the cluster will manage (32ETH staked for each). (default 1)
      --operator-enrs strings          [REQUIRED] Comma-separated list of each operator's Charon ENR address.
      --output-dir string              The folder to write the output cluster-definition.json file to. (default ".charon")
  -t, --threshold int                  Optional override of threshold required for signature reconstruction. Defaults to ceil(n*2/3) if zero. Warning, non-default values decrease security.
      --withdrawal-address string      Withdrawal Ethereum address (default "0x0000000000000000000000000000000000000000")

```

## The `dkg` subcommand

### Performing a DKG Ceremony

Th `charon dkg` command takes a `cluster_definition.json` file that instructs charon on the terms of a new distributed validator cluster to be created. Charon establishes communication with the other nodes identified in the file, performs a distributed key generation ceremony to create the required threshold private keys, and signs deposit data for each new distributed validator. The command outputs the `cluster-lock.json` file and key shares for each Distributed Validator created. 

```markdown
charon dkg --help
Participate in a distributed key generation ceremony for a specific cluster definition that creates
distributed validator key shares and a final cluster lock configuration. Note that all other cluster operators should run
this command at the same time.

Usage:
  charon dkg [flags]

Flags:
      --data-dir string                The directory where charon will store all its internal data (default ".charon")
      --definition-file string         The path to the cluster definition file or an HTTP URL. (default ".charon/cluster-definition.json")
  -h, --help                           Help for dkg
      --log-format string              Log format; console, logfmt or json (default "console")
      --log-level string               Log level; debug, info, warn or error (default "info")
      --no-verify                      Disables cluster definition and lock file verification.
      --p2p-allowlist string           Comma-separated list of CIDR subnets for allowing only certain peer connections. Example: 192.168.0.0/16 would permit connections to peers on your local network only. The default is to accept all connections.
      --p2p-bootnode-relay             Enables using bootnodes as libp2p circuit relays. Useful if some charon nodes are not publicly accessible. Deprecated, should always be enabled. (default true)
      --p2p-bootnodes strings          Comma-separated list of discv5 bootnode URLs or ENRs. Deprecated, use p2p-relays flag.
      --p2p-bootnodes-from-lockfile    Enables using cluster lock ENRs as discv5 bootnodes. Allows skipping explicit bootnodes if key generation ceremony included correct IPs. Discv5 is deprecated, use relay discovery.
      --p2p-denylist string            Comma-separated list of CIDR subnets for disallowing certain peer connections. Example: 192.168.0.0/16 would disallow connections to peers on your local network. The default is to accept all connections.
      --p2p-disable-reuseport          Disables TCP port reuse for outgoing libp2p connections.
      --p2p-external-hostname string   The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.
      --p2p-external-ip string         The IP address advertised by libp2p. This may be used to advertise an external IP.
      --p2p-relays strings             Comma-separated list of libp2p relay URLs or ENRs. (default [http://bootnode.lb.gcp.obol.tech:3640/enr])
      --p2p-tcp-address strings        Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. Empty default doesn't bind to local port therefore only supports outgoing connections.
      --p2p-udp-address string         Listening UDP address (ip and port) for discv5 discovery. Empty default disables discv5 discovery. Discv5 is deprecated, use relay discovery.

```

## The `run` subcommand

### Run the Charon middleware

This `run` command accepts a `cluster-lock.json` file that was created either via a `charon create cluster` command or `charon dkg`. This lock file outlines the nodes in the cluster and the distributed validators they operate on behalf of. 

```markdown
charon run --help
Starts the long-running Charon middleware process to perform distributed validator duties.

Usage:
  charon run [flags]

Flags:
      --beacon-node-endpoints strings      Comma separated list of one or more beacon node endpoint URLs.
      --builder-api                        Enables the builder api. Will only produce builder blocks. Builder API must also be enabled on the validator client. Beacon node must be connected to a builder-relay to access the builder network.
      --data-dir string                    Deprecated, please use 'private-key-file'.
      --feature-set string                 Minimum feature set to enable by default: alpha, beta, or stable. Warning: modify at own risk. (default "stable")
      --feature-set-disable strings        Comma-separated list of features to disable, overriding the default minimum feature set.
      --feature-set-enable strings         Comma-separated list of features to enable, overriding the default minimum feature set.
  -h, --help                               Help for run
      --jaeger-address string              Listening address for jaeger tracing.
      --jaeger-service string              Service name used for jaeger tracing. (default "charon")
      --lock-file string                   The path to the cluster lock file defining distributed validator cluster. (default ".charon/cluster-lock.json")
      --log-format string                  Log format; console, logfmt or json (default "console")
      --log-level string                   Log level; debug, info, warn or error (default "info")
      --loki-addresses strings             Enables sending of logfmt structured logs to these Loki log aggregation server addresses. This is in addition to normal stderr logs.
      --loki-service string                Service label sent with logs to Loki. (default "charon")
      --monitoring-address string          Listening address (ip and port) for the monitoring API (prometheus, pprof). (default "127.0.0.1:3620")
      --no-verify                          Disables cluster definition and lock file verification.
      --p2p-allowlist string               Comma-separated list of CIDR subnets for allowing only certain peer connections. Example: 192.168.0.0/16 would permit connections to peers on your local network only. The default is to accept all connections.
      --p2p-bootnode-relay                 Enables using bootnodes as libp2p circuit relays. Useful if some charon nodes are not publicly accessible. Deprecated, should always be enabled. (default true)
      --p2p-bootnodes strings              Comma-separated list of discv5 bootnode URLs or ENRs. Deprecated, use p2p-relays flag.
      --p2p-bootnodes-from-lockfile        Enables using cluster lock ENRs as discv5 bootnodes. Allows skipping explicit bootnodes if key generation ceremony included correct IPs. Discv5 is deprecated, use relay discovery.
      --p2p-denylist string                Comma-separated list of CIDR subnets for disallowing certain peer connections. Example: 192.168.0.0/16 would disallow connections to peers on your local network. The default is to accept all connections.
      --p2p-disable-reuseport              Disables TCP port reuse for outgoing libp2p connections.
      --p2p-external-hostname string       The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.
      --p2p-external-ip string             The IP address advertised by libp2p. This may be used to advertise an external IP.
      --p2p-relays strings                 Comma-separated list of libp2p relay URLs or ENRs. (default [http://bootnode.lb.gcp.obol.tech:3640/enr])
      --p2p-tcp-address strings            Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. Empty default doesn't bind to local port therefore only supports outgoing connections.
      --p2p-udp-address string             Listening UDP address (ip and port) for discv5 discovery. Empty default disables discv5 discovery. Discv5 is deprecated, use relay discovery.
      --private-key-file string            The path to the charon enr private key file. (default ".charon/charon-enr-private-key")
      --simnet-beacon-mock                 Enables an internal mock beacon node for running a simnet.
      --simnet-validator-keys-dir string   The directory containing the simnet validator key shares. (default ".charon/validator_keys")
      --simnet-validator-mock              Enables an internal mock validator client when running a simnet. Requires simnet-beacon-mock.
      --synthetic-block-proposals          Enables additional synthetic block proposal duties. Used for testing of rare duties.
      --validator-api-address string       Listening address (ip and port) for validator-facing traffic proxying the beacon-node API. (default "127.0.0.1:3600")

```

## Host a relay

Relays run a libp2p [circuit relay](https://docs.libp2p.io/concepts/nat/circuit-relay/) server that allows charon clusters to perform peer discovery and for charon clients behind NAT gateways to be communicated with. If you want to self-host a relay for your cluster(s) the following command will start one.

```markdown
charon relay --help
Starts a libp2p relay that charon nodes can use to bootstrap their p2p cluster

Usage:
  charon relay [flags]

Flags:
      --auto-p2pkey                    Automatically create a p2pkey (ecdsa private key used for p2p authentication and ENR) if none found in data directory. (default true)
      --data-dir string                The directory where charon will store all its internal data (default ".charon")
  -h, --help                           Help for relay
      --http-address string            Listening address (ip and port) for the relay http server serving runtime ENR. (default "127.0.0.1:3640")
      --log-format string              Log format; console, logfmt or json (default "console")
      --log-level string               Log level; debug, info, warn or error (default "info")
      --loki-addresses strings         Enables sending of logfmt structured logs to these Loki log aggregation server addresses. This is in addition to normal stderr logs.
      --loki-service string            Service label sent with logs to Loki. (default "charon")
      --monitoring-address string      Listening address (ip and port) for the prometheus and pprof monitoring http server. (default "127.0.0.1:3620")
      --p2p-allowlist string           Comma-separated list of CIDR subnets for allowing only certain peer connections. Example: 192.168.0.0/16 would permit connections to peers on your local network only. The default is to accept all connections.
      --p2p-bootnode-relay             Enables using bootnodes as libp2p circuit relays. Useful if some charon nodes are not publicly accessible. Deprecated, should always be enabled. (default true)
      --p2p-bootnodes strings          Comma-separated list of discv5 bootnode URLs or ENRs. Deprecated, use p2p-relays flag.
      --p2p-bootnodes-from-lockfile    Enables using cluster lock ENRs as discv5 bootnodes. Allows skipping explicit bootnodes if key generation ceremony included correct IPs. Discv5 is deprecated, use relay discovery.
      --p2p-denylist string            Comma-separated list of CIDR subnets for disallowing certain peer connections. Example: 192.168.0.0/16 would disallow connections to peers on your local network. The default is to accept all connections.
      --p2p-disable-reuseport          Disables TCP port reuse for outgoing libp2p connections.
      --p2p-external-hostname string   The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.
      --p2p-external-ip string         The IP address advertised by libp2p. This may be used to advertise an external IP.
      --p2p-max-connections int        Libp2p maximum number of peers that can connect to this relay. (default 16384)
      --p2p-max-reservations int       Updates max circuit reservations per peer (each valid for 30min) (default 512)
      --p2p-relay-loglevel string      Libp2p circuit relay log level. E.g., debug, info, warn, error.
      --p2p-relays strings             Comma-separated list of libp2p relay URLs or ENRs. (default [http://bootnode.lb.gcp.obol.tech:3640/enr])
      --p2p-tcp-address strings        Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. Empty default doesn't bind to local port therefore only supports outgoing connections.
      --p2p-udp-address string         Listening UDP address (ip and port) for discv5 discovery. Empty default disables discv5 discovery. Discv5 is deprecated, use relay discovery.

```

## Host a bootnode (deprecated)

Bootnodes are dual-purpose at this point in time. They run a [discV5](https://github.com/ethereum/devp2p/blob/master/discv5/discv5.md) discovery server that allows charon clients to find one another despite IP address changes, and they also run a libp2p [circuit relay](https://docs.libp2p.io/concepts/circuit-relay/) server that allows charon clients behind NAT gateways to be communicated with when `--p2p-bootnode-relay` is enabled. These features make it easier to get a distributed validator cluster established and connected, but they trade off against cluster independence and fault tolerance. In the long run the use of these features will be minimised, but for now, if you want to self-host a bootnode for your cluster(s) the following command will start one. 

```markdown
charon bootnode --help
Starts a discv5 bootnode that charon nodes can use to bootstrap their p2p cluster

Usage:
  charon bootnode [flags]

Flags:
      --auto-p2pkey                    Automatically create a p2pkey (ecdsa private key used for p2p authentication and ENR) if none found in data directory (default true)
      --bootnode-http-address string   Listening address (ip and port) for the bootnode http server serving runtime ENR (default "127.0.0.1:3640")
      --data-dir string                The directory where charon will store all its internal data (default ".charon")
  -h, --help                           Help for bootnode
      --log-format string              Log format; console, logfmt or json (default "console")
      --log-level string               Log level; debug, info, warn or error (default "info")
      --max-reservations int           Updates max circuit reservations per peer (each valid for 30min) (default 512)
      --p2p-allowlist string           Comma-separated list of CIDR subnets for allowing only certain peer connections. Example: 192.168.0.0/16 would permit connections to peers on your local network only. The default is to accept all connections.
      --p2p-bootnode-relay             Enables using bootnodes as libp2p circuit relays. Useful if some charon nodes are not have publicly accessible.
      --p2p-bootnodes strings          Comma-separated list of discv5 bootnode URLs or ENRs. (default [http://bootnode.lb.gcp.obol.tech:3640/enr])
      --p2p-bootnodes-from-lockfile    Enables using cluster lock ENRs as discv5 bootnodes. Allows skipping explicit bootnodes if key generation ceremony included correct IPs.
      --p2p-denylist string            Comma-separated list of CIDR subnets for disallowing certain peer connections. Example: 192.168.0.0/16 would disallow connections to peers on your local network. The default is to accept all connections.
      --p2p-external-hostname string   The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.
      --p2p-external-ip string         The IP address advertised by libp2p. This may be used to advertise an external IP.
      --p2p-max-connections int        Libp2p maximum number of peers that can connect to this bootnode. (default 16384)
      --p2p-relay                      Enable libp2p tcp host providing circuit relay to charon clusters (default true)
      --p2p-relay-loglevel string      Libp2p circuit relay log level. E.g., debug, info, warn, error
      --p2p-tcp-address strings        Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. (default [127.0.0.1:3610])
      --p2p-udp-address string         Listening UDP address (ip and port) for discv5 discovery. (default "127.0.0.1:3630")
```