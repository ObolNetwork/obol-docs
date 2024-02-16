"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[23048],{95788:(e,t,n)=>{n.d(t,{Iu:()=>d,yg:()=>g});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,g=p["".concat(s,".").concat(u)]||p[u]||h[u]||o;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84556:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(45072),a=(n(11504),n(95788));const o={sidebar_position:3,description:"Centralization Risks and mitigation"},i="Centralization risks and mitigation",l={unversionedId:"int/faq/risks",id:"version-v0.18.0/int/faq/risks",title:"Centralization risks and mitigation",description:"Centralization Risks and mitigation",source:"@site/versioned_docs/version-v0.18.0/int/faq/risks.md",sourceDirName:"int/faq",slug:"/int/faq/risks",permalink:"/docs/v0.18.0/int/faq/risks",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.18.0/int/faq/risks.md",tags:[],version:"v0.18.0",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Centralization Risks and mitigation"},sidebar:"tutorialSidebar",previous:{title:"Errors & Resolutions",permalink:"/docs/v0.18.0/int/faq/errors"},next:{title:"Handling DKG failure",permalink:"/docs/v0.18.0/int/faq/dkg_failure"}},s={},c=[{value:"Risk: Obol hosting the relay infrastructure",id:"risk-obol-hosting-the-relay-infrastructure",level:2},{value:"Risk: Obol being able to update Charon code",id:"risk-obol-being-able-to-update-charon-code",level:2},{value:"Risk: Obol hosting the DV Launchpad",id:"risk-obol-hosting-the-dv-launchpad",level:2},{value:"Risk: Obol going bust/rogue",id:"risk-obol-going-bustrogue",level:2}],d={toc:c},p="wrapper";function h(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.c)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"centralization-risks-and-mitigation"},"Centralization risks and mitigation"),(0,a.yg)("h2",{id:"risk-obol-hosting-the-relay-infrastructure"},"Risk: Obol hosting the relay infrastructure"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Mitigation"),": Self-host a relay"),(0,a.yg)("p",null,"One of the risks associated with Obol hosting the ",(0,a.yg)("a",{parentName:"p",href:"/docs/next/charon/networking"},"LibP2P relays")," infrastructure allowing peer discovery is that if Obol-hosted relays go down, peers won't be able to discover each other and perform the DKG. To mitigate this risk, external organizations and node operators can consider self-hosting a relay. This way, if Obol's relays go down, the clusters can still operate through other relays in the network. Ensure that all nodes in the cluster use the same relays, or they will not be able to find each other if they are connected to different relays."),(0,a.yg)("p",null,"The following non-Obol entities run relays that you can consider adding to your cluster (you can have more than one per cluster, see the ",(0,a.yg)("inlineCode",{parentName:"p"},"--p2p-relays")," flag of ",(0,a.yg)("a",{parentName:"p",href:"/docs/v0.18.0/charon/charon-cli-reference#the-run-subcommand"},(0,a.yg)("inlineCode",{parentName:"a"},"charon run")),"):"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Entity"),(0,a.yg)("th",{parentName:"tr",align:null},"Relay URL"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.dsrvlabs.com/"},"DSRV")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://charon-relay.dsrvlabs.dev"},"https://charon-relay.dsrvlabs.dev"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://infstones.com/"},"Infstones")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://obol-relay.infstones.com:3640/"},"https://obol-relay.infstones.com:3640/"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.hashquark.io/"},"Hashquark")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://relay-2.prod-relay.721.land/"},"https://relay-2.prod-relay.721.land/"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://figment.io/"},"Figment")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://relay-1.obol.figment.io/"},"https://relay-1.obol.figment.io/"))))),(0,a.yg)("h2",{id:"risk-obol-being-able-to-update-charon-code"},"Risk: Obol being able to update Charon code"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Mitigation"),": Pin specific docker versions or compile from source on a trusted commit"),(0,a.yg)("p",null,"Another risk associated with Obol is having the ability to update the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon"},"Charon code")," running on the network which could introduce vulnerabilities or malicious code. To mitigate this risk, operators can consider pinning specific versions of the code that have been thoroughly tested and accepted by the network. This would ensure that any updates are carefully vetted and reviewed by the community."),(0,a.yg)("h2",{id:"risk-obol-hosting-the-dv-launchpad"},"Risk: Obol hosting the DV Launchpad"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Mitigation"),": Use ",(0,a.yg)("a",{parentName:"p",href:"/docs/next/charon/charon-cli-reference"},(0,a.yg)("inlineCode",{parentName:"a"},"create cluster"))," or ",(0,a.yg)("a",{parentName:"p",href:"/docs/next/charon/charon-cli-reference"},(0,a.yg)("inlineCode",{parentName:"a"},"create dkg"))," locally and distribute the files manually"),(0,a.yg)("p",null,"Hosting the first Charon frontend, the ",(0,a.yg)("a",{parentName:"p",href:"/docs/v0.18.0/dvl/intro"},"DV Launchpad"),", on a centralized server could create a single point of failure, as users would have to rely on Obol's server to access the protocol. This could limit the decentralization of the protocol and could make it vulnerable to attacks or downtime. Obol hosting the launchpad on a decentralized network, such as IPFS is a first step but not enough. This is why the Charon code is open-source and contains a CLI interface to interact with the protocol locally."),(0,a.yg)("p",null,"To mitigate the risk of launchpad failure, consider using the ",(0,a.yg)("inlineCode",{parentName:"p"},"create cluster")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"create dkg")," commands locally and distributing the key shares files manually."),(0,a.yg)("h2",{id:"risk-obol-going-bustrogue"},"Risk: Obol going bust/rogue"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Mitigation"),": Use key recovery"),(0,a.yg)("p",null,"The final centralization risk associated with Obol is the possibility of the company going bankrupt or acting maliciously, which would lead to a loss of control over the network and potentially cause damage to the ecosystem. To mitigate this risk, Obol has implemented a key recovery mechanism. This would allow the clusters to continue operating and to retrieve full private keys even if Obol is no longer able to provide support."),(0,a.yg)("p",null,"A guide to recombine key shares into a single private key can be accessed ",(0,a.yg)("a",{parentName:"p",href:"/docs/v0.18.0/int/quickstart/advanced/quickstart-combine"},"here"),"."))}h.isMDXComponent=!0}}]);