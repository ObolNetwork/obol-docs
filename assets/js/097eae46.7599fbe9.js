"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[48050],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),y=p(r),d=a,m=y["".concat(c,".").concat(d)]||y[d]||u[d]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[y]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},40204:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const o={sidebar_position:7,description:"Self-host a relay"},i="Self-Host a Relay",l={unversionedId:"advanced/self-relay",id:"advanced/self-relay",title:"Self-Host a Relay",description:"Self-host a relay",source:"@site/docs/advanced/self-relay.md",sourceDirName:"advanced",slug:"/advanced/self-relay",permalink:"/docs/next/advanced/self-relay",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/docs/advanced/self-relay.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"Self-host a relay"},sidebar:"tutorialSidebar",previous:{title:"Create an EigenLayer DV",permalink:"/docs/next/advanced/quickstart-eigenpod"},next:{title:"Split validator private keys",permalink:"/docs/next/advanced/quickstart-split"}},c={},p=[],s={toc:p},y="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(y,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"self-host-a-relay"},"Self-Host a Relay"),(0,a.yg)("p",null,"If you are experiencing connectivity issues with the Obol hosted relays, or you want to improve your clusters latency and decentralization, you can opt to host your own relay on a separate open and static internet port."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"# Figure out your public IP\ncurl v4.ident.me\n\n# Clone the repo and cd into it.\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-node.git\n\ncd charon-distributed-validator-node\n\n# Replace 'replace.with.public.ip.or.hostname' in relay/docker-compose.yml with your public IPv4 or DNS hostname # Replace 'replace.with.public.ip.or.hostname' in relay/docker-compose.yml with your public IPv4 or DNS hostname\n\nnano relay/docker-compose.yml\n\ndocker compose -f relay/docker-compose.yml up\n")),(0,a.yg)("p",null,"Test whether the relay is publicly accessible. This should return an ENR:\n",(0,a.yg)("inlineCode",{parentName:"p"},"curl http://replace.with.public.ip.or.hostname:3640/enr")),(0,a.yg)("p",null,"Ensure the ENR returned by the relay contains the correct public IP and port by decoding it with ",(0,a.yg)("a",{parentName:"p",href:"https://enr-viewer.com/"},"https://enr-viewer.com/"),"."),(0,a.yg)("p",null,"Configure ",(0,a.yg)("strong",{parentName:"p"},"ALL")," charon nodes in your cluster to use this relay:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Either by adding a flag: ",(0,a.yg)("inlineCode",{parentName:"li"},"--p2p-relays=http://replace.with.public.ip.or.hostname:3640/enr")),(0,a.yg)("li",{parentName:"ul"},"Or by setting the environment variable: ",(0,a.yg)("inlineCode",{parentName:"li"},"CHARON_P2P_RELAYS=http://replace.with.public.ip.or.hostname:3640/enr"))),(0,a.yg)("p",null,"Note that a local ",(0,a.yg)("inlineCode",{parentName:"p"},"relay/.charon/charon-enr-private-key")," file will be created next to ",(0,a.yg)("inlineCode",{parentName:"p"},"relay/docker-compose.yml")," to ensure a persisted relay ENR across restarts."),(0,a.yg)("p",null,"A list of publicly available relays that can be used is maintained ",(0,a.yg)("a",{parentName:"p",href:"/docs/next/faq/risks"},"here"),"."))}u.isMDXComponent=!0}}]);