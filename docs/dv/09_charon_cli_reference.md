---
description: A go-based middleware client for taking part in Distributed Validator clusters.
---

# Charon CLI reference

:::caution

The `charon` client is under heavy development, interfaces are subject to change until a first major version is published. 

:::

The following is a reference for charon version [`v0.4.0`](https://github.com/ObolNetwork/charon/releases/tag/v0.4.0). Find the latest release on [our Github](https://github.com/ObolNetwork/charon/releases).

### Available Commands

The following are the top-level commands available to use. 

```markdown
charon help
Charon enables the operation of Ethereum validators in a fault tolerant manner by splitting the validating keys across a group of trusted parties using threshold cryptography.

Usage:
  charon [command]

Available Commands:
  bootnode       Start a discv5 bootnode server
  completion     Generate the autocompletion script for the specified shell
  create         Create artifacts for a distributed validator cluster
  dkg            Participate in a Distributed Key Generation ceremony
  enr            Print this client's Ethereum Node Record
  help           Help about any command
  run            Run the charon middleware client
  version        Print version and exit

Flags:
  -h, --help   Help for charon

Use "charon [command] --help" for more information about a command.
```

### `create` subcommand

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

#### Creating an ENR for charon

An `enr` is an Ethereum Node Record. It is used to identify this charon client to its other counterparty charon clients across the internet. 

```markdown
charon create enr --help
Create an Ethereum Node Record (ENR) private key to identify this charon client

Usage:
  charon create enr [flags]

Flags:
      --data-dir string                The directory where charon will store all its internal data (default ".charon/data")
  -h, --help                           Help for enr
      --p2p-allowlist string           Comma-separated list of CIDR subnets for allowing only certain peer connections. Example: 192.168.0.0/16 would permit connections to peers on your local network only. The default is to accept all connections.
      --p2p-bootmanifest               Enables using manifest ENRs as discv5 bootnodes. Allows skipping explicit bootnodes if key generation ceremony included correct IPs.
      --p2p-bootnode-relay             Enables using bootnodes as libp2p circuit relays. Useful if some charon nodes are not have publicly accessible.
      --p2p-bootnodes strings          Comma-separated list of discv5 bootnode URLs or ENRs. Example: enode://<hex node id>@10.3.58.6:30303?discport=30301.
      --p2p-denylist string            Comma-separated list of CIDR subnets for disallowing certain peer connections. Example: 192.168.0.0/16 would disallow connections to peers on your local network. The default is to accept all connections.
      --p2p-external-hostname string   The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.
      --p2p-external-ip string         The IP address advertised by libp2p. This may be used to advertise an external IP.
      --p2p-peerdb string              Path to store a discv5 peer database. Empty default results in in-memory database.
      --p2p-tcp-address strings        Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. (default [127.0.0.1:16003])
      --p2p-udp-address string         Listening UDP address (ip and port) for discv5 discovery. (default "127.0.0.1:16004")
```

#### Create a full cluster locally

`charon create cluster` creates a set of distributed validators locally, including the private keys, a `cluster.lock` file, and deposit and exit data. However, this command should only be used for solo use of distributed validators. To run a Distributed Validator with a group of operators, it is preferable to create these artifacts using the `charon dkg` command. That way, no single operator custodies all of the private keys to a distributed validator.

```markdown
charon create cluster --help
Creates a local charon cluster configuration including validator keys, charon p2p keys, and a cluster manifest. See flags for supported features.

Usage:
  charon create cluster [flags]

Flags:
      --clean                   Delete the cluster directory before generating it.
      --cluster-dir string      The target folder to create the cluster in. (default ".charon/cluster")
      --config                  Enables creation of local non-docker config files.
      --config-binary string    Path of the charon binary to use in the config files. Defaults to this binary if empty. Requires --config.
      --config-port-start int   Starting port number used in config files. Requires --config. (default 16000)
      --config-simnet           Configures a simulated network cluster with mock beacon node and mock validator clients. It showcases a running charon in isolation. Requires --config. (default true)
  -h, --help                    Help for cluster
  -n, --nodes int               The number of charon nodes in the cluster. (default 4)
      --split-existing-keys     Enables splitting of existing non-dvt validator keys into distributed threshold private shares (instead of creating new random keys).
      --split-keys-dir string   Directory containing keys to split. Expects keys in keystore-*.json and passwords in keystore-*.txt. Requires --split-validator-keys.
  -t, --threshold int           The threshold required for signature reconstruction. Minimum is n-(ceil(n/3)-1). (default 3)
```

#### Creating the configuration for a DKG Ceremony

This `charon create dkg` command creates a cluster_definition file used for the `charon dkg` command. 

```markdown
charon create dkg --help
Create a cluster definition file that will be used by all participants of a DKG.

Usage:
  charon create dkg [flags]

Flags:
      --fee_recipient_address string   Optional Ethereum address of the fee recipient
      --fork_version string            Optional hex fork version identifying the target network/chain
  -h, --help                           Help for dkg
      --name string                    Optional cosmetic cluster name
      --num-validators int             The number of distributed validators the cluster will manage (32ETH staked for each). (default 1)
      --operator_enrs strings          Comma-separated list of each operator's Charon ENR address
      --output-dir string              The folder to write the output cluster_definition.json file to. (default ".")
  -t, --threshold int                  The threshold required for signature reconstruction. Minimum is n-(ceil(n/3)-1). (default 3)
      --withdrawal_address string      Withdrawal Ethereum address
```

### Performing a DKG Ceremony

Th `charon dkg` command takes a `cluster_definition.json` file that instructs charon on the terms of a new distributed validator cluster to be created. Charon establishes communication with the other nodes identified in the file, performs a distributed key generation ceremony to create the required threshold private keys, and signs deposit and exit data for each new distributed validator. The command outputs the `cluster.lock` file and key shares for each Distributed Validator created. 

```markdown
charon dkg --help
Participate in a distributed key generation ceremony for a specific cluster definition that creates
distributed validator key shares and a final cluster lock configuration. Note that all other cluster operators should run
this command at the same time.

Usage:
  charon dkg [flags]

Flags:
      --data-dir string                The directory where charon will store all its internal data (default ".charon/data")
      --definition-file string         The path to the cluster definition file. (default ".charon/cluster_definition.json")
  -h, --help                           Help for dkg
      --log-format string              Log format; console, logfmt or json (default "console")
      --log-level string               Log level; debug, info, warn or error (default "info")
      --p2p-allowlist string           Comma-separated list of CIDR subnets for allowing only certain peer connections. Example: 192.168.0.0/16 would permit connections to peers on your local network only. The default is to accept all connections.
      --p2p-bootmanifest               Enables using manifest ENRs as discv5 bootnodes. Allows skipping explicit bootnodes if key generation ceremony included correct IPs.
      --p2p-bootnode-relay             Enables using bootnodes as libp2p circuit relays. Useful if some charon nodes are not have publicly accessible.
      --p2p-bootnodes strings          Comma-separated list of discv5 bootnode URLs or ENRs. Example: enode://<hex node id>@10.3.58.6:30303?discport=30301.
      --p2p-denylist string            Comma-separated list of CIDR subnets for disallowing certain peer connections. Example: 192.168.0.0/16 would disallow connections to peers on your local network. The default is to accept all connections.
      --p2p-external-hostname string   The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.
      --p2p-external-ip string         The IP address advertised by libp2p. This may be used to advertise an external IP.
      --p2p-peerdb string              Path to store a discv5 peer database. Empty default results in in-memory database.
      --p2p-tcp-address strings        Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. (default [127.0.0.1:16003])
      --p2p-udp-address string         Listening UDP address (ip and port) for discv5 discovery. (default "127.0.0.1:16004")
```

### Run the Charon middleware

This `run` command accepts a `cluster.lock` file that was created either via a `charon create cluster` command or `charon dkg`. This lock file outlines the nodes in the cluster and the distributed validators they operate on behalf of. 

```markdown
charon run --help
Starts the long-running Charon middleware process to perform distributed validator duties.

Usage:
  charon run [flags]

Flags:
      --beacon-node-endpoint string    Beacon node endpoint URL (default "http://localhost/")
      --data-dir string                The directory where charon will store all its internal data (default "./charon/data")
  -h, --help                           Help for run
      --jaeger-address string          Listening address for jaeger tracing
      --jaeger-service string          Service name used for jaeger tracing (default "charon")
      --log-format string              Log format; console, logfmt or json (default "console")
      --log-level string               Log level; debug, info, warn or error (default "info")
      --manifest-file string           The path to the manifest file defining distributed validator cluster (default "./charon/manifest.json")
      --monitoring-address string      Listening address (ip and port) for the monitoring API (prometheus, pprof) (default "127.0.0.1:16001")
      --p2p-allowlist string           Comma-separated list of CIDR subnets for allowing only certain peer connections. Example: 192.168.0.0/16 would permit connections to peers on your local network only. The default is to accept all connections.
      --p2p-bootmanifest               Enables using manifest ENRs as discv5 bootnodes. Allows skipping explicit bootnodes if key generation ceremony included correct IPs.
      --p2p-bootnode-relay             Enables using bootnodes as libp2p circuit relays. Useful if some charon nodes are not have publicly accessible.
      --p2p-bootnodes strings          Comma-separated list of discv5 bootnode URLs or ENRs. Example: enode://<hex node id>@10.3.58.6:30303?discport=30301.
      --p2p-denylist string            Comma-separated list of CIDR subnets for disallowing certain peer connections. Example: 192.168.0.0/16 would disallow connections to peers on your local network. The default is to accept all connections.
      --p2p-external-hostname string   The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.
      --p2p-external-ip string         The IP address advertised by libp2p. This may be used to advertise an external IP.
      --p2p-peerdb string              Path to store a discv5 peer database. Empty default results in in-memory database.
      --p2p-tcp-address strings        Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. (default [127.0.0.1:16003])
      --p2p-udp-address string         Listening UDP address (ip and port) for discv5 discovery. (default "127.0.0.1:16004")
      --simnet-beacon-mock             Enables an internal mock beacon node for running a simnet.
      --simnet-validator-mock          Enables an internal mock validator client when running a simnet. Requires simnet-beacon-mock.
      --validator-api-address string   Listening address (ip and port) for validator-facing traffic proxying the beacon-node API (default "127.0.0.1:16002")
```
