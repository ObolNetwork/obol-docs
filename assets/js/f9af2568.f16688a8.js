"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[32656],{95788:(e,n,t)=>{t.d(n,{Iu:()=>d,yg:()=>g});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,g=p["".concat(l,".").concat(f)]||p[f]||u[f]||a;return t?r.createElement(g,i(i({ref:n},d),{},{components:t})):r.createElement(g,i({ref:n},d))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},78428:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(45072),o=(t(11504),t(95788));const a={description:"A go-based middleware client for taking part in Distributed Validator clusters."},i="Charon CLI reference",s={unversionedId:"dv/charon_cli_reference",id:"version-v0.3.0/dv/charon_cli_reference",title:"Charon CLI reference",description:"A go-based middleware client for taking part in Distributed Validator clusters.",source:"@site/versioned_docs/version-v0.3.0/dv/09_charon_cli_reference.md",sourceDirName:"dv",slug:"/dv/charon_cli_reference",permalink:"/docs/v0.3.0/dv/charon_cli_reference",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.3.0/dv/09_charon_cli_reference.md",tags:[],version:"v0.3.0",sidebarPosition:9,frontMatter:{description:"A go-based middleware client for taking part in Distributed Validator clusters."},sidebar:"version-v0.3.0/tutorialSidebar",previous:{title:"Distributed validator cluster manifest",permalink:"/docs/v0.3.0/dv/distributed-validator-cluster-manifest"},next:{title:"Distributed validator keys",permalink:"/docs/v0.3.0/dvk/distributed-validator-keys"}},l={},c=[],d={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.c)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"charon-cli-reference"},"Charon CLI reference"),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"The ",(0,o.yg)("inlineCode",{parentName:"p"},"charon")," client is under heavy development, interfaces are subject to change until a first major version is published. ")),(0,o.yg)("p",null,"The following is a reference for charon version ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon/releases/tag/v0.3.0"},(0,o.yg)("inlineCode",{parentName:"a"},"0.3.0")),". Find the latest release on ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon/releases"},"our Github"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-markdown"},'charon --help\nCharon enables the operation of Ethereum validators in a fault tolerant manner by splitting the validating keys across a group of trusted parties using threshold cryptography.\n\nUsage:\n  charon [command]\n\nAvailable Commands:\n  bootnode       Starts a p2p-udp discv5 bootnode\n  completion     Generate the autocompletion script for the specified shell\n  create-cluster Create a local charon cluster\n  enr            Return this node\'s ENR\n  gen-p2pkey     Generates a new p2p key\n  help           Help about any command\n  run            Runs the Charon middleware\n  version        Print version and exit\n\nFlags:\n  -h, --help   Help for charon\n\nUse "charon [command] --help" for more information about a command.\n')),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-markdown"},'charon create-cluster --help\nCreate a local charon cluster including validator keys, charon p2p keys, and a cluster manifest. See flags for supported features.\n\nUsage:\n  charon create-cluster [flags]\n\nFlags:\n      --clean                   Delete the cluster directory before generating it.\n      --cluster-dir string      The target folder to create the cluster in. (default "./charon/cluster")\n      --config                  Enables creation of local non-docker config files.\n      --config-binary string    Path of the charon binary to use in the config files. Defaults to this binary if empty. Requires --config.\n      --config-port-start int   Starting port number used in config files. Requires --config. (default 16000)\n      --config-simnet           Configures a simulated network cluster with mock beacon node and mock validator clients. It showcases a running charon in isolation. Requires --config. (default true)\n  -h, --help                    Help for create-cluster\n  -n, --nodes int               The number of charon nodes in the cluster. (default 4)\n      --split-existing-keys     Enables splitting of existing non-dvt validator keys into distributed threshold private shares (instead of creating new random keys).\n      --split-keys-dir string   Directory containing keys to split. Expects keys in keystore-*.json and passwords in keystore-*.txt. Requires --split-validator-keys.\n  -t, --threshold int           The threshold required for signature reconstruction. Minimum is n-(ceil(n/3)-1). (default 3)\n\n')),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-markdown"},'charon run --help\nStarts the long-running Charon middleware process to perform distributed validator duties.\n\nUsage:\n  charon run [flags]\n\nFlags:\n      --beacon-node-endpoint string    Beacon node endpoint URL (default "http://localhost/")\n      --data-dir string                The directory where charon will store all its internal data (default "./charon/data")\n  -h, --help                           Help for run\n      --jaeger-address string          Listening address for jaeger tracing\n      --jaeger-service string          Service name used for jaeger tracing (default "charon")\n      --log-format string              Log format; console, logfmt or json (default "console")\n      --log-level string               Log level; debug, info, warn or error (default "info")\n      --manifest-file string           The path to the manifest file defining distributed validator cluster (default "./charon/manifest.json")\n      --monitoring-address string      Listening address (ip and port) for the monitoring API (prometheus, pprof) (default "127.0.0.1:16001")\n      --p2p-allowlist string           Comma-separated list of CIDR subnets for allowing only certain peer connections. Example: 192.168.0.0/16 would permit connections to peers on your local network only. The default is to accept all connections.\n      --p2p-bootmanifest               Enables using manifest ENRs as discv5 bootnodes. Allows skipping explicit bootnodes if key generation ceremony included correct IPs.\n      --p2p-bootnode-relay             Enables using bootnodes as libp2p circuit relays. Useful if some charon nodes are not have publicly accessible.\n      --p2p-bootnodes strings          Comma-separated list of discv5 bootnode URLs or ENRs. Example: enode://<hex node id>@10.3.58.6:30303?discport=30301.\n      --p2p-denylist string            Comma-separated list of CIDR subnets for disallowing certain peer connections. Example: 192.168.0.0/16 would disallow connections to peers on your local network. The default is to accept all connections.\n      --p2p-external-hostname string   The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.\n      --p2p-external-ip string         The IP address advertised by libp2p. This may be used to advertise an external IP.\n      --p2p-peerdb string              Path to store a discv5 peer database. Empty default results in in-memory database.\n      --p2p-tcp-address strings        Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. (default [127.0.0.1:16003])\n      --p2p-udp-address string         Listening UDP address (ip and port) for discv5 discovery. (default "127.0.0.1:16004")\n      --simnet-beacon-mock             Enables an internal mock beacon node for running a simnet.\n      --simnet-validator-mock          Enables an internal mock validator client when running a simnet. Requires simnet-beacon-mock.\n      --validator-api-address string   Listening address (ip and port) for validator-facing traffic proxying the beacon-node API (default "127.0.0.1:16002")\n')))}u.isMDXComponent=!0}}]);