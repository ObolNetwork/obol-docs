"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[29028],{95788:(e,t,a)=>{a.d(t,{Iu:()=>c,yg:()=>y});var r=a(11504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),h=n,y=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return a?r.createElement(y,i(i({ref:t},c),{},{components:a})):r.createElement(y,i({ref:t},c))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},95488:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=a(45072),n=(a(11504),a(95788));const o={sidebar_position:10,description:"Frequently asked questions"},i="Frequently asked questions",s={unversionedId:"int/faq",id:"version-v0.9.0/int/faq",title:"Frequently asked questions",description:"Frequently asked questions",source:"@site/versioned_docs/version-v0.9.0/int/faq.md",sourceDirName:"int",slug:"/int/faq",permalink:"/docs/v0.9.0/int/faq",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.9.0/int/faq.md",tags:[],version:"v0.9.0",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"Frequently asked questions"},sidebar:"tutorialSidebar",previous:{title:"Working groups",permalink:"/docs/v0.9.0/int/working-groups"},next:{title:"Introducing Charon",permalink:"/docs/v0.9.0/dv/introducing-charon"}},l={},d=[{value:"Does Obol have a token?",id:"does-obol-have-a-token",level:3},{value:"Can I keep my existing validator client?",id:"can-i-keep-my-existing-validator-client",level:3},{value:"Can I migrate my existing validator into a distributed validator?",id:"can-i-migrate-my-existing-validator-into-a-distributed-validator",level:3},{value:"What is an ENR?",id:"what-is-an-enr",level:3},{value:"Where can I learn more about Distributed Validators?",id:"where-can-i-learn-more-about-distributed-validators",level:3},{value:"What&#39;s with the name Charon?",id:"whats-with-the-name-charon",level:3}],c={toc:d},u="wrapper";function p(e){let{components:t,...a}=e;return(0,n.yg)(u,(0,r.c)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"frequently-asked-questions"},"Frequently asked questions"),(0,n.yg)("h3",{id:"does-obol-have-a-token"},"Does Obol have a token?"),(0,n.yg)("p",null,"No. Distributed validators use only ether."),(0,n.yg)("h3",{id:"can-i-keep-my-existing-validator-client"},"Can I keep my existing validator client?"),(0,n.yg)("p",null,"Yes. Charon sits as a middleware between a validator client and it's beacon node. All validators that implement the standard REST API will be supported, along with all popular client delivery software such as DAppNode ",(0,n.yg)("a",{parentName:"p",href:"https://dappnode.github.io/explorer/#/"},"packages"),", Rocket Pool's ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/rocket-pool/smartnode"},"smart node"),", StakeHouse's ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/stake-house/wagyu"},"wagyu"),", and Stereum's ",(0,n.yg)("a",{parentName:"p",href:"https://stereum.net/development/#roadmap"},"node launcher"),"."),(0,n.yg)("h3",{id:"can-i-migrate-my-existing-validator-into-a-distributed-validator"},"Can I migrate my existing validator into a distributed validator?"),(0,n.yg)("p",null,"It will be possible to split an existing validator keystore into a set of key shares suitable for a distributed validator, but it is a trusted distribution process, and if the old staking system is not safely shut down, it could pose a risk of double signing alongside the new distributed validator."),(0,n.yg)("p",null,"In an ideal scenario, a distributed validator's private key should never exist in full in a single location."),(0,n.yg)("p",null,"You can split an existing EIP-2335 keystore for a validator to migrate it to a distributed validator architecture with the ",(0,n.yg)("inlineCode",{parentName:"p"},"charon create cluster --split-existing-keys")," command documented ",(0,n.yg)("a",{parentName:"p",href:"/docs/v0.9.0/dv/charon_cli_reference#create-a-full-cluster-locally"},"here"),". "),(0,n.yg)("h3",{id:"what-is-an-enr"},"What is an ENR?"),(0,n.yg)("p",null,"An ENR is shorthand for an ",(0,n.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-778"},"Ethereum Node Record"),". It is a way to represent a node on a public network, with a reliable mechanism to update its information. At Obol we use ENRs to identify charon nodes to one another such that they can form clusters with the right charon nodes and not impostors. "),(0,n.yg)("p",null,"ENRs have private keys they use to sign updates to the ",(0,n.yg)("a",{parentName:"p",href:"https://enr-viewer.com/"},"data contained")," in their ENR. This private key is by default found at ",(0,n.yg)("inlineCode",{parentName:"p"},".charon/charon-enr-private-key"),", and should be kept secure, and not checked into version control. An ENR looks something like this:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"enr:-JG4QAgAOXjGFcTIkXBO30aUMzg2YSo1CYV0OH8Sf2s7zA2kFjVC9ZQ_jZZItdE8gA-tUXW-rWGDqEcoQkeJ98Pw7GaGAYFI7eoegmlkgnY0gmlwhCKNyGGJc2VjcDI1NmsxoQI6SQlzw3WGZ_VxFHLhawQFhCK8Aw7Z0zq8IABksuJEJIN0Y3CCPoODdWRwgj6E\n")),(0,n.yg)("h3",{id:"where-can-i-learn-more-about-distributed-validators"},"Where can I learn more about Distributed Validators?"),(0,n.yg)("p",null,"Have you checked out our ",(0,n.yg)("a",{parentName:"p",href:"https://blog.obol.tech"},"blog site")," and ",(0,n.yg)("a",{parentName:"p",href:"https://twitter.com/ObolNetwork"},"twitter")," yet? Maybe join our ",(0,n.yg)("a",{parentName:"p",href:"https://discord.gg/obol"},"discord")," too."),(0,n.yg)("h3",{id:"whats-with-the-name-charon"},"What's with the name Charon?"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://www.theoi.com/Khthonios/Kharon.html"},"Charon")," is the Ancient Greek Ferryman of the Dead. He was tasked with bringing people across the Acheron river to the underworld. His fee was one Obol coin, placed in the mouth of the deceased. This tradition of placing a coin or Obol in the mouth of the deceased continues to this day across the Greek world."))}p.isMDXComponent=!0}}]);