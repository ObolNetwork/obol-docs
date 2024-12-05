"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[44822],{84315:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"dv/charon_cli_reference","title":"Charon CLI reference","description":"A go-based middleware client for taking part in Distributed Validator clusters.","source":"@site/versioned_docs/version-v0.11.0/dv/09_charon_cli_reference.md","sourceDirName":"dv","slug":"/dv/charon_cli_reference","permalink":"/v0.11.0/dv/charon_cli_reference","draft":false,"unlisted":false,"editUrl":"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.11.0/dv/09_charon_cli_reference.md","tags":[],"version":"v0.11.0","sidebarPosition":9,"frontMatter":{"description":"A go-based middleware client for taking part in Distributed Validator clusters."},"sidebar":"tutorialSidebar","previous":{"title":"Cluster Configuration","permalink":"/v0.11.0/dv/distributed-validator-cluster-manifest"},"next":{"title":"Distributed Validator Key Generation","permalink":"/v0.11.0/dvk/distributed-validator-keys"}}');var r=t(74848),a=t(28453);const s={description:"A go-based middleware client for taking part in Distributed Validator clusters."},i="Charon CLI reference",l={},d=[{value:"Available Commands",id:"available-commands",level:2},{value:"The <code>create</code> subcommand",id:"the-create-subcommand",level:3},{value:"Creating an ENR for charon",id:"creating-an-enr-for-charon",level:4},{value:"Create a full cluster locally",id:"create-a-full-cluster-locally",level:4},{value:"Creating the configuration for a DKG Ceremony",id:"creating-the-configuration-for-a-dkg-ceremony",level:4},{value:"Performing a DKG Ceremony",id:"performing-a-dkg-ceremony",level:3},{value:"Run the Charon middleware",id:"run-the-charon-middleware",level:3},{value:"Host a bootnode",id:"host-a-bootnode",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"charon-cli-reference",children:"Charon CLI reference"})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"charon"})," client is under heavy development, interfaces are subject to change until a first major version is published."]})}),"\n",(0,r.jsxs)(n.p,{children:["The following is a reference for charon version ",(0,r.jsx)(n.a,{href:"https://github.com/ObolNetwork/charon/releases/tag/v0.11.0",children:(0,r.jsx)(n.code,{children:"v0.11.0"})}),". Find the latest release on ",(0,r.jsx)(n.a,{href:"https://github.com/ObolNetwork/charon/releases",children:"our Github"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"available-commands",children:"Available Commands"}),"\n",(0,r.jsx)(n.p,{children:"The following are the top-level commands available to use."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:'charon help\nCharon enables the operation of Ethereum validators in a fault tolerant manner by splitting the validating keys across a group of trusted parties using threshold cryptography.\n\nUsage:\n  charon [command]\n\nAvailable Commands:\n  bootnode    Start a discv5 bootnode server\n  completion  Generate the autocompletion script for the specified shell\n  create      Create artifacts for a distributed validator cluster\n  dkg         Participate in a Distributed Key Generation ceremony\n  enr         Prints a new ENR for this node\n  help        Help about any command\n  run         Run the charon middleware client\n  version     Print version and exit\n\nFlags:\n  -h, --help   Help for charon\n\nUse "charon [command] --help" for more information about a command.\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"the-create-subcommand",children:["The ",(0,r.jsx)(n.code,{children:"create"})," subcommand"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"create"})," subcommand handles the creation of artifacts needed by charon to operate."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:'charon create --help\nCreate artifacts for a distributed validator cluster. These commands can be used to facilitate the creation of a distributed validator cluster between a group of operators by performing a distributed key generation ceremony, or they can be used to create a local cluster for single operator use cases.\n\nUsage:\n  charon create [command]\n\nAvailable Commands:\n  cluster     Create private keys and configuration files needed to run a distributed validator cluster locally\n  dkg         Create the configuration for a new Distributed Key Generation ceremony using charon dkg\n  enr         Create an Ethereum Node Record (ENR) private key to identify this charon client\n\nFlags:\n  -h, --help   Help for create\n\nUse "charon create [command] --help" for more information about a command.\n\n'})}),"\n",(0,r.jsx)(n.h4,{id:"creating-an-enr-for-charon",children:"Creating an ENR for charon"}),"\n",(0,r.jsxs)(n.p,{children:["An ",(0,r.jsx)(n.code,{children:"enr"})," is an Ethereum Node Record. It is used to identify this charon client to its other counterparty charon clients across the internet."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:'charon create enr --help\nCreate an Ethereum Node Record (ENR) private key to identify this charon client\n\nUsage:\n  charon create enr [flags]\n\nFlags:\n      --data-dir string                The directory where charon will store all its internal data (default ".charon")\n  -h, --help                           Help for enr\n      --p2p-allowlist string           Comma-separated list of CIDR subnets for allowing only certain peer connections. Example: 192.168.0.0/16 would permit connections to peers on your local network only. The default is to accept all connections.\n      --p2p-bootnode-relay             Enables using bootnodes as libp2p circuit relays. Useful if some charon nodes are not have publicly accessible.\n      --p2p-bootnodes strings          Comma-separated list of discv5 bootnode URLs or ENRs. (default [http://bootnode.lb.gcp.obol.tech:3640/enr])\n      --p2p-bootnodes-from-lockfile    Enables using cluster lock ENRs as discv5 bootnodes. Allows skipping explicit bootnodes if key generation ceremony included correct IPs.\n      --p2p-denylist string            Comma-separated list of CIDR subnets for disallowing certain peer connections. Example: 192.168.0.0/16 would disallow connections to peers on your local network. The default is to accept all connections.\n      --p2p-external-hostname string   The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.\n      --p2p-external-ip string         The IP address advertised by libp2p. This may be used to advertise an external IP.\n      --p2p-tcp-address strings        Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. (default [127.0.0.1:3610])\n      --p2p-udp-address string         Listening UDP address (ip and port) for discv5 discovery. (default "127.0.0.1:3630")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"create-a-full-cluster-locally",children:"Create a full cluster locally"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"charon create cluster"})," creates a set of distributed validators locally, including the private keys, a ",(0,r.jsx)(n.code,{children:"cluster-lock.json"})," file, and deposit and exit data. However, this command should only be used for solo use of distributed validators. To run a Distributed Validator with a group of operators, it is preferable to create these artifacts using the ",(0,r.jsx)(n.code,{children:"charon dkg"})," command. That way, no single operator custodies all of the private keys to a distributed validator."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:'charon create cluster --help\nCreates a local charon cluster configuration including validator keys, charon p2p keys, cluster-lock.json and a deposit-data.json. See flags for supported features.\n\nUsage:\n  charon create cluster [flags]\n\nFlags:\n      --clean                          Delete the cluster directory before generating it.\n      --cluster-dir string             The target folder to create the cluster in. (default ".charon/cluster")\n      --fee-recipient-address string   Optional Ethereum address of the fee recipient\n  -h, --help                           Help for cluster\n      --name string                    Optional cosmetic cluster name\n      --network string                 Ethereum network to create validators for. Options: mainnet, gnosis, goerli, kiln, ropsten, sepolia. (default "goerli")\n  -n, --nodes int                      The number of charon nodes in the cluster. Minimum is 4. (default 4)\n      --num-validators int             The number of distributed validators needed in the cluster. (default 1)\n      --split-existing-keys            Split an existing validator\'s private key into a set of distributed validator private key shares. Does not re-create deposit data for this key.\n      --split-keys-dir string          Directory containing keys to split. Expects keys in keystore-*.json and passwords in keystore-*.txt. Requires --split-existing-keys.\n  -t, --threshold int                  Optional override of threshold required for signature reconstruction. Defaults to ceil(n*2/3) if zero. Warning, non-default values decrease security.\n      --withdrawal-address string      Ethereum address to receive the returned stake and accrued rewards. (default "0x0000000000000000000000000000000000000000")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"creating-the-configuration-for-a-dkg-ceremony",children:"Creating the configuration for a DKG Ceremony"}),"\n",(0,r.jsxs)(n.p,{children:["This ",(0,r.jsx)(n.code,{children:"charon create dkg"})," command creates a cluster_definition file used for the ",(0,r.jsx)(n.code,{children:"charon dkg"})," command."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:'charon create dkg --help\nCreate a cluster definition file that will be used by all participants of a DKG.\n\nUsage:\n  charon create dkg [flags]\n\nFlags:\n      --dkg-algorithm string           DKG algorithm to use; default, keycast, frost (default "default")\n      --fee-recipient-address string   Optional Ethereum address of the fee recipient\n  -h, --help                           Help for dkg\n      --name string                    Optional cosmetic cluster name\n      --network string                 Ethereum network to create validators for. Options: mainnet, gnosis, goerli, kiln, ropsten, sepolia. (default "goerli")\n      --num-validators int             The number of distributed validators the cluster will manage (32ETH staked for each). (default 1)\n      --operator-enrs strings          [REQUIRED] Comma-separated list of each operator\'s Charon ENR address.\n      --output-dir string              The folder to write the output cluster-definition.json file to. (default ".charon")\n  -t, --threshold int                  Optional override of threshold required for signature reconstruction. Defaults to ceil(n*2/3) if zero. Warning, non-default values decrease security.\n      --withdrawal-address string      Withdrawal Ethereum address (default "0x0000000000000000000000000000000000000000")\n'})}),"\n",(0,r.jsx)(n.h3,{id:"performing-a-dkg-ceremony",children:"Performing a DKG Ceremony"}),"\n",(0,r.jsxs)(n.p,{children:["Th ",(0,r.jsx)(n.code,{children:"charon dkg"})," command takes a ",(0,r.jsx)(n.code,{children:"cluster_definition.json"})," file that instructs charon on the terms of a new distributed validator cluster to be created. Charon establishes communication with the other nodes identified in the file, performs a distributed key generation ceremony to create the required threshold private keys, and signs deposit data for each new distributed validator. The command outputs the ",(0,r.jsx)(n.code,{children:"cluster-lock.json"})," file and key shares for each Distributed Validator created."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:'charon dkg --help\nParticipate in a distributed key generation ceremony for a specific cluster definition that creates\ndistributed validator key shares and a final cluster lock configuration. Note that all other cluster operators should run\nthis command at the same time.\n\nUsage:\n  charon dkg [flags]\n\nFlags:\n      --data-dir string                The directory where charon will store all its internal data (default ".charon")\n      --definition-file string         The path to the cluster definition file. (default ".charon/cluster-definition.json")\n  -h, --help                           Help for dkg\n      --log-format string              Log format; console, logfmt or json (default "console")\n      --log-level string               Log level; debug, info, warn or error (default "info")\n      --no-verify                      Disables cluster definition and lock file verification.\n      --p2p-allowlist string           Comma-separated list of CIDR subnets for allowing only certain peer connections. Example: 192.168.0.0/16 would permit connections to peers on your local network only. The default is to accept all connections.\n      --p2p-bootnode-relay             Enables using bootnodes as libp2p circuit relays. Useful if some charon nodes are not have publicly accessible.\n      --p2p-bootnodes strings          Comma-separated list of discv5 bootnode URLs or ENRs. (default [http://bootnode.lb.gcp.obol.tech:3640/enr])\n      --p2p-bootnodes-from-lockfile    Enables using cluster lock ENRs as discv5 bootnodes. Allows skipping explicit bootnodes if key generation ceremony included correct IPs.\n      --p2p-denylist string            Comma-separated list of CIDR subnets for disallowing certain peer connections. Example: 192.168.0.0/16 would disallow connections to peers on your local network. The default is to accept all connections.\n      --p2p-external-hostname string   The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.\n      --p2p-external-ip string         The IP address advertised by libp2p. This may be used to advertise an external IP.\n      --p2p-tcp-address strings        Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. (default [127.0.0.1:3610])\n      --p2p-udp-address string         Listening UDP address (ip and port) for discv5 discovery. (default "127.0.0.1:3630")\n'})}),"\n",(0,r.jsx)(n.h3,{id:"run-the-charon-middleware",children:"Run the Charon middleware"}),"\n",(0,r.jsxs)(n.p,{children:["This ",(0,r.jsx)(n.code,{children:"run"})," command accepts a ",(0,r.jsx)(n.code,{children:"cluster-lock.json"})," file that was created either via a ",(0,r.jsx)(n.code,{children:"charon create cluster"})," command or ",(0,r.jsx)(n.code,{children:"charon dkg"}),". This lock file outlines the nodes in the cluster and the distributed validators they operate on behalf of."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:'charon run --help\nStarts the long-running Charon middleware process to perform distributed validator duties.\n\nUsage:\n  charon run [flags]\n\nFlags:\n      --beacon-node-endpoint string     Beacon node endpoint URL. Deprecated, please use beacon-node-endpoints.\n      --beacon-node-endpoints strings   Comma separated list of one or more beacon node endpoint URLs.\n      --builder-api                     Enables the builder api. Will only produce builder blocks. Builder API must also be enabled on the validator client. Beacon node must be connected to a builder-relay to access the builder network.\n      --data-dir string                 The directory where charon will store all its internal data (default ".charon")\n      --feature-set string              Minimum feature set to enable by default: alpha, beta, or stable. Warning: modify at own risk. (default "stable")\n      --feature-set-disable strings     Comma-separated list of features to disable, overriding the default minimum feature set.\n      --feature-set-enable strings      Comma-separated list of features to enable, overriding the default minimum feature set.\n  -h, --help                            Help for run\n      --jaeger-address string           Listening address for jaeger tracing.\n      --jaeger-service string           Service name used for jaeger tracing. (default "charon")\n      --lock-file string                The path to the cluster lock file defining distributed validator cluster. (default ".charon/cluster-lock.json")\n      --log-format string               Log format; console, logfmt or json (default "console")\n      --log-level string                Log level; debug, info, warn or error (default "info")\n      --monitoring-address string       Listening address (ip and port) for the monitoring API (prometheus, pprof). (default "127.0.0.1:3620")\n      --no-verify                       Disables cluster definition and lock file verification.\n      --p2p-allowlist string            Comma-separated list of CIDR subnets for allowing only certain peer connections. Example: 192.168.0.0/16 would permit connections to peers on your local network only. The default is to accept all connections.\n      --p2p-bootnode-relay              Enables using bootnodes as libp2p circuit relays. Useful if some charon nodes are not have publicly accessible.\n      --p2p-bootnodes strings           Comma-separated list of discv5 bootnode URLs or ENRs. (default [http://bootnode.lb.gcp.obol.tech:3640/enr])\n      --p2p-bootnodes-from-lockfile     Enables using cluster lock ENRs as discv5 bootnodes. Allows skipping explicit bootnodes if key generation ceremony included correct IPs.\n      --p2p-denylist string             Comma-separated list of CIDR subnets for disallowing certain peer connections. Example: 192.168.0.0/16 would disallow connections to peers on your local network. The default is to accept all connections.\n      --p2p-external-hostname string    The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.\n      --p2p-external-ip string          The IP address advertised by libp2p. This may be used to advertise an external IP.\n      --p2p-tcp-address strings         Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. (default [127.0.0.1:3610])\n      --p2p-udp-address string          Listening UDP address (ip and port) for discv5 discovery. (default "127.0.0.1:3630")\n      --simnet-beacon-mock              Enables an internal mock beacon node for running a simnet.\n      --simnet-validator-mock           Enables an internal mock validator client when running a simnet. Requires simnet-beacon-mock.\n      --validator-api-address string    Listening address (ip and port) for validator-facing traffic proxying the beacon-node API. (default "127.0.0.1:3600")\n'})}),"\n",(0,r.jsx)(n.h3,{id:"host-a-bootnode",children:"Host a bootnode"}),"\n",(0,r.jsxs)(n.p,{children:["Bootnodes are dual-purpose at this point in time. They run a ",(0,r.jsx)(n.a,{href:"https://github.com/ethereum/devp2p/blob/master/discv5/discv5.md",children:"discV5"})," discovery server that allows charon clients to find one another despite IP address changes, and they also run a libp2p ",(0,r.jsx)(n.a,{href:"https://docs.libp2p.io/concepts/circuit-relay/",children:"circuit relay"})," server that allows charon clients behind NAT gateways to be communicated with when ",(0,r.jsx)(n.code,{children:"--p2p-bootnode-relay"})," is enabled. These features make it easier to get a distributed validator cluster established and connected, but they trade off against cluster independence and fault tolerance. In the long run the use of these features will be minimised, but for now, if you want to self-host a bootnode for your cluster(s) the following command will start one."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:'charon bootnode --help\nStarts a discv5 bootnode that charon nodes can use to bootstrap their p2p cluster\n\nUsage:\n  charon bootnode [flags]\n\nFlags:\n      --auto-p2pkey                    Automatically create a p2pkey (ecdsa private key used for p2p authentication and ENR) if none found in data directory (default true)\n      --bootnode-http-address string   Listening address (ip and port) for the bootnode http server serving runtime ENR (default "127.0.0.1:3640")\n      --data-dir string                The directory where charon will store all its internal data (default ".charon")\n  -h, --help                           Help for bootnode\n      --log-format string              Log format; console, logfmt or json (default "console")\n      --log-level string               Log level; debug, info, warn or error (default "info")\n      --max-reservations int           Updates max circuit reservations per peer (each valid for 30min) (default 512)\n      --p2p-allowlist string           Comma-separated list of CIDR subnets for allowing only certain peer connections. Example: 192.168.0.0/16 would permit connections to peers on your local network only. The default is to accept all connections.\n      --p2p-bootnode-relay             Enables using bootnodes as libp2p circuit relays. Useful if some charon nodes are not have publicly accessible.\n      --p2p-bootnodes strings          Comma-separated list of discv5 bootnode URLs or ENRs. (default [http://bootnode.lb.gcp.obol.tech:3640/enr])\n      --p2p-bootnodes-from-lockfile    Enables using cluster lock ENRs as discv5 bootnodes. Allows skipping explicit bootnodes if key generation ceremony included correct IPs.\n      --p2p-denylist string            Comma-separated list of CIDR subnets for disallowing certain peer connections. Example: 192.168.0.0/16 would disallow connections to peers on your local network. The default is to accept all connections.\n      --p2p-external-hostname string   The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.\n      --p2p-external-ip string         The IP address advertised by libp2p. This may be used to advertise an external IP.\n      --p2p-max-connections int        Libp2p maximum number of peers that can connect to this bootnode. (default 16384)\n      --p2p-relay                      Enable libp2p tcp host providing circuit relay to charon clusters (default true)\n      --p2p-relay-loglevel string      Libp2p circuit relay log level. E.g., debug, info, warn, error\n      --p2p-tcp-address strings        Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. (default [127.0.0.1:3610])\n      --p2p-udp-address string         Listening UDP address (ip and port) for discv5 discovery. (default "127.0.0.1:3630")\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var o=t(96540);const r={},a=o.createContext(r);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);