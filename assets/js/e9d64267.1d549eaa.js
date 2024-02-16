"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[46260],{95788:(e,n,r)=>{r.d(n,{Iu:()=>p,yg:()=>u});var t=r(11504);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=t.createContext({}),c=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(d.Provider,{value:n},e.children)},l="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=c(r),g=a,u=l["".concat(d,".").concat(g)]||l[g]||h[g]||i;return r?t.createElement(u,o(o({ref:n},p),{},{components:r})):t.createElement(u,o({ref:n},p))}));function u(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[l]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},96364:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=r(45072),a=(r(11504),r(95788));const i={Description:"A rust-based CLI client for hosting and participating in Distributed Validator key generation ceremonies."},o="DKG CLI reference",s={unversionedId:"dvk/dkg_cli_reference",id:"version-v0.7.0/dvk/dkg_cli_reference",title:"DKG CLI reference",description:"The dkg-poc client is a prototype implementation for generating Distributed Validator Keys. Keys generated with this tool will not work with Charon, and they are not suitable for use. Creating keys for a Distributed Validator should use the charon create dkg command.",source:"@site/versioned_docs/version-v0.7.0/dvk/03_dkg_cli_reference.md",sourceDirName:"dvk",slug:"/dvk/dkg_cli_reference",permalink:"/docs/v0.7.0/dvk/dkg_cli_reference",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.7.0/dvk/03_dkg_cli_reference.md",tags:[],version:"v0.7.0",sidebarPosition:3,frontMatter:{Description:"A rust-based CLI client for hosting and participating in Distributed Validator key generation ceremonies."},sidebar:"tutorialSidebar",previous:{title:"Distributed Validator launchpad",permalink:"/docs/v0.7.0/dvk/distributed_validator_launchpad"},next:{title:"Obol Manager Contracts",permalink:"/docs/v0.7.0/sc/introducing-obol-managers"}},d={},c=[],p={toc:c},l="wrapper";function h(e){let{components:n,...r}=e;return(0,a.yg)(l,(0,t.c)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"dkg-cli-reference"},"DKG CLI reference"),(0,a.yg)("admonition",{type:"warning"},(0,a.yg)("p",{parentName:"admonition"},"The ",(0,a.yg)("inlineCode",{parentName:"p"},"dkg-poc")," client is a prototype implementation for generating Distributed Validator Keys. Keys generated with this tool will not work with Charon, and they are not suitable for use. Creating keys for a Distributed Validator should use the ",(0,a.yg)("a",{parentName:"p",href:"/docs/v0.7.0/dv/charon_cli_reference#creating-the-configuration-for-a-dkg-ceremony"},(0,a.yg)("inlineCode",{parentName:"a"},"charon create dkg")," command"),".")),(0,a.yg)("p",null,"The following is a reference for ",(0,a.yg)("inlineCode",{parentName:"p"},"dkg-poc")," at commit ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/dkg-poc/commit/6181feaab2f60bdaaec954f11c04ef49c0b3366a"},(0,a.yg)("inlineCode",{parentName:"a"},"6181fea")),". Find the latest release on our ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/dkg-poc"},"Github"),"."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"dkg-poc")," is implemented as a rust-based webserver for performing a distributed key generation ceremony. This deployment model ended up raising many user experience and security concerns, for example it is both hard and likely insecure to setup a TLS protected webserver at home if you are not a specialist in this area. Further, the PoC is based on an ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/kobigurk/aggregatable-dkg"},"Aggregatable DKG")," library which is built on sharing a group element rather than a field element, which makes the threshold signing scheme more complex as a result. These factors resulted in a deprecation of this approach, with many valuable insights gained from this client. Currently a DV launchpad and charon based DKG flow serves as the intended ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon/blob/main/docs/dkg.md"},"DKG architecture")," for creating Distributed Validator Clusters. "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ dkg-poc --help \n\ndkg-poc 0.1.0\nA Distributed Validator Key Generation client for the Obol Network.\n\nUSAGE:\n    dkg-poc <SUBCOMMAND>\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nSUBCOMMANDS:\n    help           Prints this message or the help of the given subcommand(s)\n    lead           Lead a new DKG ceremony\n    participate    Participate in a DKG ceremony\n\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ dkg-poc lead --help\n\ndkg-poc-lead 0.1.0\nLead a new DKG ceremony\n\nUSAGE:\n    dkg-poc lead [OPTIONS] --num-participants <num-participants> --threshold <threshold>\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n    -a, --address <addr>\n            The address to bind this client to, to participate in the DKG ceremony (Default: 127.0.0.1:8081)\n\n    -e, --enr <enr>\n            Provide existing charon ENR for this participant instead of generating a new private key to import\n\n    -n, --num-participants <num-participants>    The number of participants taking part in the DKG ceremony\n    -p, --password <password>\n            Password to join the ceremony (Default is to randomly generate a password)\n\n    -t, --threshold <threshold>\n            Sets the threshold at which point a group of shareholders can create valid signatures\n\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ dkg-poc participate --help\n\ndkg-poc-participate 0.1.0\nParticipate in a DKG ceremony\n\nUSAGE:\n    dkg-poc participate [OPTIONS] --leader-address <leader-addr>\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n    -a, --address <addr>                  The address to bind this client to, to participate in the DKG ceremony\n                                          (Default: 127.0.0.1:8081)\n    -e, --enr <enr>                       Provide existing charon ENR for this participant instead of generating a new\n                                          private key to import\n    -l, --leader-address <leader-addr>    The address of the webserver leading the DKG ceremony\n    -p, --password <password>             Password to join the ceremony (Default is to randomly generate a password)\n")))}h.isMDXComponent=!0}}]);