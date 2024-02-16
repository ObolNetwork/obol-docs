"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[44214],{95788:(e,t,n)=>{n.d(t,{Iu:()=>d,yg:()=>g});var r=n(11504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,g=p["".concat(l,".").concat(h)]||p[h]||u[h]||a;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},83592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(45072),o=(n(11504),n(95788));const a={description:"Charon - The Distributed Validator Client"},i="Introducing Charon",s={unversionedId:"dv/introducing-charon",id:"version-v0.11.0/dv/introducing-charon",title:"Introducing Charon",description:"Charon - The Distributed Validator Client",source:"@site/versioned_docs/version-v0.11.0/dv/01_introducing-charon.md",sourceDirName:"dv",slug:"/dv/introducing-charon",permalink:"/docs/v0.11.0/dv/introducing-charon",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.11.0/dv/01_introducing-charon.md",tags:[],version:"v0.11.0",sidebarPosition:1,frontMatter:{description:"Charon - The Distributed Validator Client"},sidebar:"tutorialSidebar",previous:{title:"Errors & Resolutions",permalink:"/docs/v0.11.0/int/faq/errors"},next:{title:"Distributed validator creation",permalink:"/docs/v0.11.0/dv/validator-creation"}},l={},c=[{value:"What is Charon?",id:"what-is-charon",level:2},{value:"Charon architecture",id:"charon-architecture",level:2},{value:"Ports",id:"ports",level:3},{value:"Getting started",id:"getting-started",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,o.yg)(p,(0,r.c)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"introducing-charon"},"Introducing Charon"),(0,o.yg)("p",null,"This section introduces and outlines the Charon middleware. For additional context regarding distributed validator technology, see ",(0,o.yg)("a",{parentName:"p",href:"../int/key-concepts#distributed-validator"},"this section")," of the key concept page."),(0,o.yg)("h2",{id:"what-is-charon"},"What is Charon?"),(0,o.yg)("p",null,"Charon is a GoLang-based, HTTP middleware built by Obol to enable any existing Ethereum validator clients to operate together as part of a distributed validator."),(0,o.yg)("p",null,"Charon sits as a middleware between a normal validating client and it's connected beacon node, intercepting and proxying API traffic. Multiple Charon clients are configured to communicate together to come to consensus on validator duties and behave as a single unified proof-of-stake validator together. The nodes form a cluster that is ",(0,o.yg)("em",{parentName:"p"},"byzantine-fault tolerant")," and continues to progress assuming a supermajority of working/honest nodes is met."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Charon Cluster",src:n(19088).c,width:"1200",height:"630"})),(0,o.yg)("h2",{id:"charon-architecture"},"Charon architecture"),(0,o.yg)("p",null,"The below graphic visually outlines the internal functionalies of Charon."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Charon Internals Slide",src:n(99628).c,width:"960",height:"540"})),(0,o.yg)("p",null,"The middleware strives to be stateless and statically configured through 777 file systems. The lack of a control-plane API for online reconfiguration is deliberate to keep operations simple and secure by default. "),(0,o.yg)("h3",{id:"ports"},"Ports"),(0,o.yg)("p",null,"The following is an outline of the services that can be exposed by charon."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},":3600")," - The validator REST API. This is the port that serves the consensus layer's ",(0,o.yg)("a",{parentName:"p",href:"https://ethereum.github.io/beacon-APIs/"},"beacon node API"),". This is the port validator clients should talk to instead of their standard consensus client REST API port. Charon subsequently proxies these requests to the upstream consensus client specified by ",(0,o.yg)("inlineCode",{parentName:"p"},"--beacon-node-endpoints"),".")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},":3610")," - Charon P2P port. This is the port that charon clients use to communicate with one another via TCP. This endpoint should be port-forwarded on your router and exposed publicly, preferably on a static IP address. This IP address should then be set on the charon run command with ",(0,o.yg)("inlineCode",{parentName:"p"},"--p2p-external-ip")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"CHARON_P2P_EXTERNAL_IP"),".")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},":3620")," - Monitoring port. This port hosts a webserver that serves prometheus metrics on ",(0,o.yg)("inlineCode",{parentName:"p"},"/metrics"),", a readiness endpoint on ",(0,o.yg)("inlineCode",{parentName:"p"},"/readyz")," and a liveness endpoint on ",(0,o.yg)("inlineCode",{parentName:"p"},"/livez"),", and a pprof server on ",(0,o.yg)("inlineCode",{parentName:"p"},"/debug/pprof"),". This port should not be exposed publicly.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},":3630")," - UDP discovery port. This port is used by the discv5 discovery protocol for peer discovery of charon nodes.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},":3640"),"  - Bootnode HTTP server port. This port hosts a HTTP webserver that serves a client's ENR on ",(0,o.yg)("inlineCode",{parentName:"p"},"/enr"),". This is only used by the ",(0,o.yg)("inlineCode",{parentName:"p"},"charon bootnode")," command. "))),(0,o.yg)("h2",{id:"getting-started"},"Getting started"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"charon")," client is in an early alpha state, and is not ready for mainnet, see ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon#supported-consensus-layer-clients"},"here")," for the latest on charon's readiness."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker run obolnetwork/charon:v0.11.0 --help\n")),(0,o.yg)("p",null,"For more information on running charon, take a look at our ",(0,o.yg)("a",{parentName:"p",href:"/docs/v0.11.0/int/quickstart/"},"quickstart guide"),"."))}u.isMDXComponent=!0},99628:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/CharonInternals-8cab9fd64594cf16a86f3b7c10f10a88.png"},19088:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/DVCluster-d161355b3dfd1808a86148c8fe28271e.png"}}]);