"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[4171],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),y=o,m=u["".concat(c,".").concat(y)]||u[y]||d[y]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},37585:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:7,description:"Self-host a relay"},i="Self-Host a Relay",l={unversionedId:"int/quickstart/advanced/self-relay",id:"version-v0.18.0/int/quickstart/advanced/self-relay",title:"Self-Host a Relay",description:"Self-host a relay",source:"@site/versioned_docs/version-v0.18.0/int/quickstart/advanced/self-relay.md",sourceDirName:"int/quickstart/advanced",slug:"/int/quickstart/advanced/self-relay",permalink:"/docs/int/quickstart/advanced/self-relay",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.18.0/int/quickstart/advanced/self-relay.md",tags:[],version:"v0.18.0",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"Self-host a relay"},sidebar:"tutorialSidebar",previous:{title:"Push Metrics to Obol Monitoring",permalink:"/docs/int/quickstart/advanced/obol-monitoring"},next:{title:"Advanced Docker Configs",permalink:"/docs/int/quickstart/advanced/adv-docker-configs"}},c={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"self-host-a-relay"},"Self-Host a Relay"),(0,o.kt)("p",null,"If you are experiencing connectivity issues with the Obol hosted relays, or you want to improve your clusters latency and decentralization, you can opt to host your own relay on a separate open and static internet port."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Figure out your public IP\ncurl v4.ident.me\n\n# Clone the repo and cd into it.\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-node.git\n\ncd charon-distributed-validator-node\n\n# Replace 'replace.with.public.ip.or.hostname' in relay/docker-compose.yml with your public IPv4 or DNS hostname # Replace 'replace.with.public.ip.or.hostname' in relay/docker-compose.yml with your public IPv4 or DNS hostname\n\nnano relay/docker-compose.yml\n\ndocker compose -f relay/docker-compose.yml up\n")),(0,o.kt)("p",null,"Test whether the relay is publicly accessible. This should return an ENR:\n",(0,o.kt)("inlineCode",{parentName:"p"},"curl http://replace.with.public.ip.or.hostname:3640/enr")),(0,o.kt)("p",null,"Ensure the ENR returned by the relay contains the correct public IP and port by decoding it with ",(0,o.kt)("a",{parentName:"p",href:"https://enr-viewer.com/"},"https://enr-viewer.com/"),"."),(0,o.kt)("p",null,"Configure ",(0,o.kt)("strong",{parentName:"p"},"ALL")," charon nodes in your cluster to use this relay:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Either by adding a flag: ",(0,o.kt)("inlineCode",{parentName:"li"},"--p2p-relays=http://replace.with.public.ip.or.hostname:3640/enr")),(0,o.kt)("li",{parentName:"ul"},"Or by setting the environment variable: ",(0,o.kt)("inlineCode",{parentName:"li"},"CHARON_P2P_RELAYS=http://replace.with.public.ip.or.hostname:3640/enr"))),(0,o.kt)("p",null,"Note that a local ",(0,o.kt)("inlineCode",{parentName:"p"},"relay/.charon/charon-enr-private-key")," file will be created next to ",(0,o.kt)("inlineCode",{parentName:"p"},"relay/docker-compose.yml")," to ensure a persisted relay ENR across restarts."))}u.isMDXComponent=!0}}]);