"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[47152],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>m});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},52932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(45072),a=(n(11504),n(95788));const o={description:"A go-based middleware client for taking part in Distributed Validator clusters.",sidebar_position:5},i="CLI reference",s={unversionedId:"charon/charon-cli-reference",id:"version-v0.19.1/charon/charon-cli-reference",title:"CLI reference",description:"A go-based middleware client for taking part in Distributed Validator clusters.",source:"@site/versioned_docs/version-v0.19.1/charon/charon-cli-reference.md",sourceDirName:"charon",slug:"/charon/charon-cli-reference",permalink:"/docs/charon/charon-cli-reference",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.19.1/charon/charon-cli-reference.md",tags:[],version:"v0.19.1",sidebarPosition:5,frontMatter:{description:"A go-based middleware client for taking part in Distributed Validator clusters.",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Charon networking",permalink:"/docs/charon/networking"},next:{title:"DV Launchpad",permalink:"/docs/dvl/intro"}},l={},d=[{value:"The <code>create</code> subcommand",id:"the-create-subcommand",level:2},{value:"Creating an ENR for charon",id:"creating-an-enr-for-charon",level:3},{value:"Create a full cluster locally",id:"create-a-full-cluster-locally",level:3},{value:"Creating the configuration for a DKG Ceremony",id:"creating-the-configuration-for-a-dkg-ceremony",level:3},{value:"The <code>dkg</code> subcommand",id:"the-dkg-subcommand",level:2},{value:"Performing a DKG Ceremony",id:"performing-a-dkg-ceremony",level:3},{value:"The <code>run</code> subcommand",id:"the-run-subcommand",level:2},{value:"Run the Charon middleware",id:"run-the-charon-middleware",level:3},{value:"The <code>combine</code> subcommand",id:"the-combine-subcommand",level:2},{value:"Combine distributed validator key shares into a single Validator key",id:"combine-distributed-validator-key-shares-into-a-single-validator-key",level:3},{value:"Host a relay",id:"host-a-relay",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"cli-reference"},"CLI reference"),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"The ",(0,a.yg)("inlineCode",{parentName:"p"},"charon")," client is under heavy development, interfaces are subject to change until a first major version is published. ")),(0,a.yg)("p",null,"The following is a reference for charon version ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon/releases/tag/v0.19.1"},(0,a.yg)("inlineCode",{parentName:"a"},"v0.19.1")),". Find the latest release on ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon/releases"},"our Github"),"."),(0,a.yg)("p",null,"The following are the top-level commands available to use. "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-markdown"},'charon --help\nCharon enables the operation of Ethereum validators in a fault tolerant manner by splitting the validating keys across a group of trusted parties using threshold cryptography.\n\nUsage:\n  charon [command]\n\nAvailable Commands:\n  alpha       Alpha subcommands provide early access to in-development features\n  combine     Combines the private key shares of a distributed validator cluster into a set of standard validator private keys.\n  completion  Generate the autocompletion script for the specified shell\n  create      Create artifacts for a distributed validator cluster\n  dkg         Participate in a Distributed Key Generation ceremony\n  enr         Prints a new ENR for this node\n  help        Help about any command\n  relay       Start a libp2p relay server\n  run         Run the charon middleware client\n  version     Print version and exit\n\nFlags:\n  -h, --help   Help for charon\n\nUse "charon [command] --help" for more information about a command.\n')),(0,a.yg)("h2",{id:"the-create-subcommand"},"The ",(0,a.yg)("inlineCode",{parentName:"h2"},"create")," subcommand"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"create")," subcommand handles the creation of artifacts needed by charon to operate."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-markdown"},'charon create --help\nCreate artifacts for a distributed validator cluster. These commands can be used to facilitate the creation of a distributed validator cluster between a group of operators by performing a distributed key generation ceremony, or they can be used to create a local cluster for single operator use cases.\n\nUsage:\n  charon create [command]\n\nAvailable Commands:\n  cluster     Create private keys and configuration files needed to run a distributed validator cluster locally\n  dkg         Create the configuration for a new Distributed Key Generation ceremony using charon dkg\n  enr         Create an Ethereum Node Record (ENR) private key to identify this charon client\n\nFlags:\n  -h, --help   Help for create\n\nUse "charon create [command] --help" for more information about a command.\n')),(0,a.yg)("h3",{id:"creating-an-enr-for-charon"},"Creating an ENR for charon"),(0,a.yg)("p",null,"An ",(0,a.yg)("inlineCode",{parentName:"p"},"enr")," is an Ethereum Node Record. It is used to identify this charon client to its other counterparty charon clients across the internet. "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-markdown"},'charon create enr --help\nCreate an Ethereum Node Record (ENR) private key to identify this charon client\n\nUsage:\n  charon create enr [flags]\n\nFlags:\n      --data-dir string   The directory where charon will store all its internal data (default ".charon")\n  -h, --help              Help for enr\n')),(0,a.yg)("h3",{id:"create-a-full-cluster-locally"},"Create a full cluster locally"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"charon create cluster")," creates a set of distributed validators locally, including the private keys, a ",(0,a.yg)("inlineCode",{parentName:"p"},"cluster-lock.json")," file, and deposit and exit data. However, this command should only be used for solo use of distributed validators. To run a Distributed Validator with a group of operators, it is preferable to create these artifacts using the ",(0,a.yg)("inlineCode",{parentName:"p"},"charon dkg")," command. That way, no single operator custodies all of the private keys to a distributed validator."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-markdown"},'charon create cluster --help\nCreates a local charon cluster configuration including validator keys, charon p2p keys, cluster-lock.json and a deposit-data.json. See flags for supported features.\n\nUsage:\n  charon create cluster [flags]\n\nFlags:\n      --cluster-dir string                The target folder to create the cluster in. (default "./")\n      --definition-file string            Optional path to a cluster definition file or an HTTP URL. This overrides all other configuration flags.\n      --fee-recipient-addresses strings   Comma separated list of Ethereum addresses of the fee recipient for each validator. Either provide a single fee recipient address or fee recipient addresses for each validator.\n  -h, --help                              Help for cluster\n      --insecure-keys                     Generates insecure keystore files. This should never be used. It is not supported on mainnet.\n      --keymanager-addresses strings      Comma separated list of keymanager URLs to import validator key shares to. Note that multiple addresses are required, one for each node in the cluster, with node0\'s keyshares being imported to the first address, node1\'s keyshares to the second, and so on.\n      --keymanager-auth-tokens strings    Authentication bearer tokens to interact with the keymanager URLs. Don\'t include the "Bearer" symbol, only include the api-token.\n      --name string                       The cluster name\n      --network string                    Ethereum network to create validators for. Options: mainnet, goerli, gnosis, sepolia, holesky.\n      --nodes int                         The number of charon nodes in the cluster. Minimum is 3.\n      --num-validators int                The number of distributed validators needed in the cluster.\n      --publish                           Publish lock file to obol-api.\n      --publish-address string            The URL to publish the lock file to. (default "https://api.obol.tech")\n      --split-existing-keys               Split an existing validator\'s private key into a set of distributed validator private key shares. Does not re-create deposit data for this key.\n      --split-keys-dir string             Directory containing keys to split. Expects keys in keystore-*.json and passwords in keystore-*.txt. Requires --split-existing-keys.\n      --testnet-chain-id uint             Chain ID of the custom test network.\n      --testnet-fork-version string       Genesis fork version of the custom test network (in hex).\n      --testnet-genesis-timestamp int     Genesis timestamp of the custom test network.\n      --testnet-name string               Name of the custom test network.\n      --threshold int                     Optional override of threshold required for signature reconstruction. Defaults to ceil(n*2/3) if zero. Warning, non-default values decrease security.\n      --withdrawal-addresses strings      Comma separated list of Ethereum addresses to receive the returned stake and accrued rewards for each validator. Either provide a single withdrawal address or withdrawal addresses for each validator.\n')),(0,a.yg)("h3",{id:"creating-the-configuration-for-a-dkg-ceremony"},"Creating the configuration for a DKG Ceremony"),(0,a.yg)("p",null,"This ",(0,a.yg)("inlineCode",{parentName:"p"},"charon create dkg")," command creates a cluster_definition file used for the ",(0,a.yg)("inlineCode",{parentName:"p"},"charon dkg")," command. "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-markdown"},'charon create dkg --help\nCreate a cluster definition file that will be used by all participants of a DKG.\n\nUsage:\n  charon create dkg [flags]\n\nFlags:\n      --dkg-algorithm string              DKG algorithm to use; default, frost (default "default")\n      --fee-recipient-addresses strings   Comma separated list of Ethereum addresses of the fee recipient for each validator. Either provide a single fee recipient address or fee recipient addresses for each validator.\n  -h, --help                              Help for dkg\n      --name string                       Optional cosmetic cluster name\n      --network string                    Ethereum network to create validators for. Options: mainnet, goerli, gnosis, sepolia, holesky. (default "mainnet")\n      --num-validators int                The number of distributed validators the cluster will manage (32ETH staked for each). (default 1)\n      --operator-enrs strings             [REQUIRED] Comma-separated list of each operator\'s Charon ENR address.\n      --output-dir string                 The folder to write the output cluster-definition.json file to. (default ".charon")\n  -t, --threshold int                     Optional override of threshold required for signature reconstruction. Defaults to ceil(n*2/3) if zero. Warning, non-default values decrease security.\n      --withdrawal-addresses strings      Comma separated list of Ethereum addresses to receive the returned stake and accrued rewards for each validator. Either provide a single withdrawal address or withdrawal addresses for each validator.\n')),(0,a.yg)("h2",{id:"the-dkg-subcommand"},"The ",(0,a.yg)("inlineCode",{parentName:"h2"},"dkg")," subcommand"),(0,a.yg)("h3",{id:"performing-a-dkg-ceremony"},"Performing a DKG Ceremony"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"charon dkg")," command takes a ",(0,a.yg)("inlineCode",{parentName:"p"},"cluster_definition.json")," file that instructs charon on the terms of a new distributed validator cluster to be created. Charon establishes communication with the other nodes identified in the file, performs a distributed key generation ceremony to create the required threshold private keys, and signs deposit data for each new distributed validator. The command outputs the ",(0,a.yg)("inlineCode",{parentName:"p"},"cluster-lock.json")," file and key shares for each Distributed Validator created. "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-markdown"},'charon dkg --help\nParticipate in a distributed key generation ceremony for a specific cluster definition that creates\ndistributed validator key shares and a final cluster lock configuration. Note that all other cluster operators should run\nthis command at the same time.\n\nUsage:\n  charon dkg [flags]\n\nFlags:\n      --data-dir string                The directory where charon will store all its internal data (default ".charon")\n      --definition-file string         The path to the cluster definition file or an HTTP URL. (default ".charon/cluster-definition.json")\n  -h, --help                           Help for dkg\n      --keymanager-address string      The keymanager URL to import validator keyshares.\n      --keymanager-auth-token string   Authentication bearer token to interact with keymanager API. Don\'t include the "Bearer" symbol, only include the api-token.\n      --log-color string               Log color; auto, force, disable. (default "auto")\n      --log-format string              Log format; console, logfmt or json (default "console")\n      --log-level string               Log level; debug, info, warn or error (default "info")\n      --log-output-path string         Path in which to write on-disk logs.\n      --no-verify                      Disables cluster definition and lock file verification.\n      --p2p-allowlist string           Comma-separated list of CIDR subnets for allowing only certain peer connections. Example: 192.168.0.0/16 would permit connections to peers on your local network only. The default is to accept all connections.\n      --p2p-denylist string            Comma-separated list of CIDR subnets for disallowing certain peer connections. Example: 192.168.0.0/16 would disallow connections to peers on your local network. The default is to accept all connections.\n      --p2p-disable-reuseport          Disables TCP port reuse for outgoing libp2p connections.\n      --p2p-external-hostname string   The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.\n      --p2p-external-ip string         The IP address advertised by libp2p. This may be used to advertise an external IP.\n      --p2p-relays strings             Comma-separated list of libp2p relay URLs or multiaddrs. (default [https://0.relay.obol.tech])\n      --p2p-tcp-address strings        Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. Empty default doesn\'t bind to local port therefore only supports outgoing connections.\n      --publish                        Publish lock file to obol-api.\n      --publish-address string         The URL to publish the lock file to. (default "https://api.obol.tech")\n      --shutdown-delay duration        Graceful shutdown delay. (default 1s)\n')),(0,a.yg)("h2",{id:"the-run-subcommand"},"The ",(0,a.yg)("inlineCode",{parentName:"h2"},"run")," subcommand"),(0,a.yg)("h3",{id:"run-the-charon-middleware"},"Run the Charon middleware"),(0,a.yg)("p",null,"This ",(0,a.yg)("inlineCode",{parentName:"p"},"run")," command accepts a ",(0,a.yg)("inlineCode",{parentName:"p"},"cluster-lock.json")," file that was created either via a ",(0,a.yg)("inlineCode",{parentName:"p"},"charon create cluster")," command or ",(0,a.yg)("inlineCode",{parentName:"p"},"charon dkg"),". This lock file outlines the nodes in the cluster and the distributed validators they operate on behalf of. "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-markdown"},'charon run --help\nStarts the long-running Charon middleware process to perform distributed validator duties.\n\nUsage:\n  charon run [flags]\n\nFlags:\n      --beacon-node-endpoints strings      Comma separated list of one or more beacon node endpoint URLs.\n      --builder-api                        Enables the builder api. Will only produce builder blocks. Builder API must also be enabled on the validator client. Beacon node must be connected to a builder-relay to access the builder network.\n      --debug-address string               Listening address (ip and port) for the pprof and QBFT debug API.\n      --feature-set string                 Minimum feature set to enable by default: alpha, beta, or stable. Warning: modify at own risk. (default "stable")\n      --feature-set-disable strings        Comma-separated list of features to disable, overriding the default minimum feature set.\n      --feature-set-enable strings         Comma-separated list of features to enable, overriding the default minimum feature set.\n  -h, --help                               Help for run\n      --jaeger-address string              Listening address for jaeger tracing.\n      --jaeger-service string              Service name used for jaeger tracing. (default "charon")\n      --lock-file string                   The path to the cluster lock file defining distributed validator cluster. If both cluster manifest and cluster lock files are provided, the cluster manifest file takes precedence. (default ".charon/cluster-lock.json")\n      --log-color string                   Log color; auto, force, disable. (default "auto")\n      --log-format string                  Log format; console, logfmt or json (default "console")\n      --log-level string                   Log level; debug, info, warn or error (default "info")\n      --log-output-path string             Path in which to write on-disk logs.\n      --loki-addresses strings             Enables sending of logfmt structured logs to these Loki log aggregation server addresses. This is in addition to normal stderr logs.\n      --loki-service string                Service label sent with logs to Loki. (default "charon")\n      --manifest-file string               The path to the cluster manifest file. If both cluster manifest and cluster lock files are provided, the cluster manifest file takes precedence. (default ".charon/cluster-manifest.pb")\n      --monitoring-address string          Listening address (ip and port) for the monitoring API (prometheus). (default "127.0.0.1:3620")\n      --no-verify                          Disables cluster definition and lock file verification.\n      --p2p-disable-reuseport              Disables TCP port reuse for outgoing libp2p connections.\n      --p2p-external-hostname string       The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.\n      --p2p-external-ip string             The IP address advertised by libp2p. This may be used to advertise an external IP.\n      --p2p-relays strings                 Comma-separated list of libp2p relay URLs or multiaddrs. (default [https://0.relay.obol.tech])\n      --p2p-tcp-address strings            Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. Empty default doesn\'t bind to local port therefore only supports outgoing connections.\n      --private-key-file string            The path to the charon enr private key file. (default ".charon/charon-enr-private-key")\n      --private-key-file-lock              Enables private key locking to prevent multiple instances using the same key.\n      --simnet-beacon-mock                 Enables an internal mock beacon node for running a simnet.\n      --simnet-beacon-mock-fuzz            Configures simnet beaconmock to return fuzzed responses.\n      --simnet-slot-duration duration      Configures slot duration in simnet beacon mock. (default 1s)\n      --simnet-validator-keys-dir string   The directory containing the simnet validator key shares. (default ".charon/validator_keys")\n      --simnet-validator-mock              Enables an internal mock validator client when running a simnet. Requires simnet-beacon-mock.\n      --synthetic-block-proposals          Enables additional synthetic block proposal duties. Used for testing of rare duties.\n      --testnet-chain-id uint              Chain ID of the custom test network.\n      --testnet-fork-version string        Genesis fork version in hex of the custom test network.\n      --testnet-genesis-timestamp int      Genesis timestamp of the custom test network.\n      --testnet-name string                Name of the custom test network.\n      --validator-api-address string       Listening address (ip and port) for validator-facing traffic proxying the beacon-node API. (default "127.0.0.1:3600")\n')),(0,a.yg)("h2",{id:"the-combine-subcommand"},"The ",(0,a.yg)("inlineCode",{parentName:"h2"},"combine")," subcommand"),(0,a.yg)("h3",{id:"combine-distributed-validator-key-shares-into-a-single-validator-key"},"Combine distributed validator key shares into a single Validator key"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"combine")," command combines many validator key shares into a single Ethereum validator key."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-markdown"},'charon combine --help\nCombines the private key shares from a threshold of operators in a distributed validator cluster into a set of validator private keys that can be imported into a standard Ethereum validator client.\n\nWarning: running the resulting private keys in a validator alongside the original distributed validator cluster *will* result in slashing.\n\nUsage:\n  charon combine [flags]\n\nFlags:\n      --cluster-dir string   Parent directory containing a number of .charon subdirectories from the required threshold of nodes in the cluster. (default ".charon/cluster")\n      --force                Overwrites private keys with the same name if present.\n  -h, --help                 Help for combine\n      --no-verify            Disables cluster definition and lock file verification.\n      --output-dir string    Directory to output the combined private keys to. (default "./validator_keys")\n')),(0,a.yg)("p",null,"To run this command, one needs at least a threshold number of node operator's ",(0,a.yg)("inlineCode",{parentName:"p"},".charon")," directories, which need to be organized into a single folder:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"tree ./cluster\ncluster/\n\u251c\u2500\u2500 node0\n\u2502\xa0\xa0 \u251c\u2500\u2500 charon-enr-private-key\n\u2502\xa0\xa0 \u251c\u2500\u2500 cluster-lock.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 deposit-data.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 validator_keys\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.json\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.txt\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-1.json\n\u2502\xa0\xa0     \u2514\u2500\u2500 keystore-1.txt\n\u251c\u2500\u2500 node1\n\u2502\xa0\xa0 \u251c\u2500\u2500 charon-enr-private-key\n\u2502\xa0\xa0 \u251c\u2500\u2500 cluster-lock.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 deposit-data.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 validator_keys\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.json\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.txt\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-1.json\n\u2502\xa0\xa0     \u2514\u2500\u2500 keystore-1.txt\n\u251c\u2500\u2500 node2\n\u2502\xa0\xa0 \u251c\u2500\u2500 charon-enr-private-key\n\u2502\xa0\xa0 \u251c\u2500\u2500 cluster-lock.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 deposit-data.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 validator_keys\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.json\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.txt\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-1.json\n\u2502\xa0\xa0     \u2514\u2500\u2500 keystore-1.txt\n\u2514\u2500\u2500 node3\n    \u251c\u2500\u2500 charon-enr-private-key\n    \u251c\u2500\u2500 cluster-lock.json\n    \u251c\u2500\u2500 deposit-data.json\n    \u2514\u2500\u2500 validator_keys\n        \u251c\u2500\u2500 keystore-0.json\n        \u251c\u2500\u2500 keystore-0.txt\n        \u251c\u2500\u2500 keystore-1.json\n        \u2514\u2500\u2500 keystore-1.txt\n")),(0,a.yg)("p",null,"That is, each operator '.charon' directory must be placed in a parent directory, and renamed to avoid conflicts."),(0,a.yg)("p",null,"If for example the lock file defines 2 validators, each ",(0,a.yg)("inlineCode",{parentName:"p"},"validator_keys")," directory must contain exactly 4 files, a JSON and TXT file for each validator."),(0,a.yg)("p",null,"Those files must be named with an increasing index associated with the validator in the lock file, starting from 0."),(0,a.yg)("p",null,"The chosen folder name does not matter, as long as it's different from ",(0,a.yg)("inlineCode",{parentName:"p"},".charon"),"."),(0,a.yg)("p",null,"At the end of the process ",(0,a.yg)("inlineCode",{parentName:"p"},"combine")," will create a new set of directories containing one validator key each, named after its public key:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'charon combine --cluster-dir="./cluster" --output-dir="./combined"\ntree ./combined\ncombined\n\u251c\u2500\u2500 keystore-0.json\n\u251c\u2500\u2500 keystore-0.txt\n\u251c\u2500\u2500 keystore-1.json\n\u2514\u2500\u2500 keystore-1.txt\n')),(0,a.yg)("p",null,"By default, the ",(0,a.yg)("inlineCode",{parentName:"p"},"combine")," command will refuse to overwrite any private key that is already present in the destination directory."),(0,a.yg)("p",null,"To force the process, use the ",(0,a.yg)("inlineCode",{parentName:"p"},"--force")," flag."),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"The generated private keys are in the standard ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-2335.md"},"EIP-2335")," format, and can be imported in any Ethereum validator client that supports it."),(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("strong",{parentName:"p"},"Ensure your distributed validator cluster is completely shut down for at least two epochs before starting a replacement validator or you are likely to be slashed."))),(0,a.yg)("h2",{id:"host-a-relay"},"Host a relay"),(0,a.yg)("p",null,"Relays run a libp2p ",(0,a.yg)("a",{parentName:"p",href:"https://docs.libp2p.io/concepts/nat/circuit-relay/"},"circuit relay")," server that allows charon clusters to perform peer discovery and for charon clients behind strict NAT gateways to be communicated with. If you want to self-host a relay for your cluster(s) the following command will start one."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-markdown"},'charon relay --help\nStarts a libp2p relay that charon nodes can use to bootstrap their p2p cluster\n\nUsage:\n  charon relay [flags]\n\nFlags:\n      --auto-p2pkey                       Automatically create a p2pkey (secp256k1 private key used for p2p authentication and ENR) if none found in data directory. (default true)\n      --data-dir string                   The directory where charon will store all its internal data (default ".charon")\n  -h, --help                              Help for relay\n      --http-address string               Listening address (ip and port) for the relay http server serving runtime ENR. (default "127.0.0.1:3640")\n      --log-color string                  Log color; auto, force, disable. (default "auto")\n      --log-format string                 Log format; console, logfmt or json (default "console")\n      --log-level string                  Log level; debug, info, warn or error (default "info")\n      --loki-addresses strings            Enables sending of logfmt structured logs to these Loki log aggregation server addresses. This is in addition to normal stderr logs.\n      --loki-service string               Service label sent with logs to Loki. (default "charon")\n      --monitoring-address string         Listening address (ip and port) for the prometheus and pprof monitoring http server. (default "127.0.0.1:3620")\n      --p2p-advertise-private-addresses   Enable advertising of libp2p auto-detected private addresses. This doesn\'t affect manually provided p2p-external-ip/hostname.\n      --p2p-allowlist string              Comma-separated list of CIDR subnets for allowing only certain peer connections. Example: 192.168.0.0/16 would permit connections to peers on your local network only. The default is to accept all connections.\n      --p2p-denylist string               Comma-separated list of CIDR subnets for disallowing certain peer connections. Example: 192.168.0.0/16 would disallow connections to peers on your local network. The default is to accept all connections.\n      --p2p-disable-reuseport             Disables TCP port reuse for outgoing libp2p connections.\n      --p2p-external-hostname string      The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.\n      --p2p-external-ip string            The IP address advertised by libp2p. This may be used to advertise an external IP.\n      --p2p-max-connections int           Libp2p maximum number of peers that can connect to this relay. (default 16384)\n      --p2p-max-reservations int          Updates max circuit reservations per peer (each valid for 30min) (default 512)\n      --p2p-relay-loglevel string         Libp2p circuit relay log level. E.g., debug, info, warn, error.\n      --p2p-relays strings                Comma-separated list of libp2p relay URLs or multiaddrs. (default [https://0.relay.obol.tech])\n      --p2p-tcp-address strings           Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. Empty default doesn\'t bind to local port therefore only supports outgoing connections.\n')),(0,a.yg)("p",null,"You can also consider adding ",(0,a.yg)("a",{parentName:"p",href:"/docs/int/faq/risks"},"alternative public relays")," to your cluster by specifying a list of ",(0,a.yg)("inlineCode",{parentName:"p"},"p2p-relays")," in ",(0,a.yg)("a",{parentName:"p",href:"#run-the-charon-middleware"},(0,a.yg)("inlineCode",{parentName:"a"},"charon run")),"."))}u.isMDXComponent=!0}}]);