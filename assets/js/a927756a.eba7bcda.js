"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[13115],{52328:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"dvk/dkg_cli_reference","title":"DKG CLI reference","description":"The dkg-poc client is a prototype implementation for generating Distributed Validator Keys. Keys generated with this tool will not work with Charon, and they are not suitable for use.","source":"@site/versioned_docs/version-v0.6.0/dvk/03_dkg_cli_reference.md","sourceDirName":"dvk","slug":"/dvk/dkg_cli_reference","permalink":"/v0.6.0/dvk/dkg_cli_reference","draft":false,"unlisted":false,"editUrl":"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.6.0/dvk/03_dkg_cli_reference.md","tags":[],"version":"v0.6.0","sidebarPosition":3,"frontMatter":{"Description":"A rust-based CLI client for hosting and participating in Distributed Validator key generation ceremonies."},"sidebar":"tutorialSidebar","previous":{"title":"Distributed Validator launchpad","permalink":"/v0.6.0/dvk/distributed_validator_launchpad"},"next":{"title":"Obol Manager Contracts","permalink":"/v0.6.0/sc/introducing-obol-managers"}}');var i=t(74848),o=t(28453);const a={Description:"A rust-based CLI client for hosting and participating in Distributed Validator key generation ceremonies."},s="DKG CLI reference",d={},c=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"dkg-cli-reference",children:"DKG CLI reference"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"dkg-poc"})," client is a prototype implementation for generating Distributed Validator Keys. Keys generated with this tool will not work with Charon, and they are not suitable for use."]})}),"\n",(0,i.jsxs)(n.p,{children:["The following is a reference for ",(0,i.jsx)(n.code,{children:"dkg-poc"})," at commit ",(0,i.jsx)(n.a,{href:"https://github.com/ObolNetwork/dkg-poc/commit/6181feaab2f60bdaaec954f11c04ef49c0b3366a",children:(0,i.jsx)(n.code,{children:"6181fea"})}),". Find the latest release on our ",(0,i.jsx)(n.a,{href:"https://github.com/ObolNetwork/dkg-poc",children:"Github"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"dkg-poc"})," is implemented as a rust-based webserver for performing a distributed key generation ceremony. This deployment model ended up raising many user experience and security concerns, for example it is both hard and likely insecure to setup a TLS protected webserver at home if you are not a specialist in this area. Further, the PoC is based on an ",(0,i.jsx)(n.a,{href:"https://github.com/kobigurk/aggregatable-dkg",children:"Aggregatable DKG"})," library which is built on sharing a group element rather than a field element, which makes the threshold signing scheme more complex as a result. These factors resulted in a deprecation of this approach, with many valuable insights gained from this client. Currently a DV launchpad and charon based DKG flow serves as the intended ",(0,i.jsx)(n.a,{href:"https://github.com/ObolNetwork/charon/blob/main/docs/dkg.md",children:"DKG architecture"})," for creating Distributed Validator Clusters."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ dkg-poc --help \n\ndkg-poc 0.1.0\nA Distributed Validator Key Generation client for the Obol Network.\n\nUSAGE:\n    dkg-poc <SUBCOMMAND>\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nSUBCOMMANDS:\n    help           Prints this message or the help of the given subcommand(s)\n    lead           Lead a new DKG ceremony\n    participate    Participate in a DKG ceremony\n\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ dkg-poc lead --help\n\ndkg-poc-lead 0.1.0\nLead a new DKG ceremony\n\nUSAGE:\n    dkg-poc lead [OPTIONS] --num-participants <num-participants> --threshold <threshold>\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n    -a, --address <addr>\n            The address to bind this client to, to participate in the DKG ceremony (Default: 127.0.0.1:8081)\n\n    -e, --enr <enr>\n            Provide existing charon ENR for this participant instead of generating a new private key to import\n\n    -n, --num-participants <num-participants>    The number of participants taking part in the DKG ceremony\n    -p, --password <password>\n            Password to join the ceremony (Default is to randomly generate a password)\n\n    -t, --threshold <threshold>\n            Sets the threshold at which point a group of shareholders can create valid signatures\n\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ dkg-poc participate --help\n\ndkg-poc-participate 0.1.0\nParticipate in a DKG ceremony\n\nUSAGE:\n    dkg-poc participate [OPTIONS] --leader-address <leader-addr>\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n    -a, --address <addr>                  The address to bind this client to, to participate in the DKG ceremony\n                                          (Default: 127.0.0.1:8081)\n    -e, --enr <enr>                       Provide existing charon ENR for this participant instead of generating a new\n                                          private key to import\n    -l, --leader-address <leader-addr>    The address of the webserver leading the DKG ceremony\n    -p, --password <password>             Password to join the ceremony (Default is to randomly generate a password)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var r=t(96540);const i={},o=r.createContext(i);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);