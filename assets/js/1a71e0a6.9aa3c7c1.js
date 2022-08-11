"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[5443],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1706:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:10,description:"Frequently asked questions"},l="Frequently asked questions",d={unversionedId:"int/faq",id:"version-v0.8.1/int/faq",title:"Frequently asked questions",description:"Frequently asked questions",source:"@site/versioned_docs/version-v0.8.1/int/faq.md",sourceDirName:"int",slug:"/int/faq",permalink:"/docs/v0.8.1/int/faq",draft:!1,editUrl:"https://github.com/obolnetwork/obol-docs/edit/main/website/versioned_docs/version-v0.8.1/int/faq.md",tags:[],version:"v0.8.1",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"Frequently asked questions"},sidebar:"tutorialSidebar",previous:{title:"Working groups",permalink:"/docs/v0.8.1/int/working-groups"},next:{title:"Introducing Charon",permalink:"/docs/v0.8.1/dv/introducing-charon"}},c={},u=[{value:"Does Obol have a token?",id:"does-obol-have-a-token",level:3},{value:"Can I keep my existing validator client?",id:"can-i-keep-my-existing-validator-client",level:3},{value:"Can I migrate my existing validator into a distributed validator?",id:"can-i-migrate-my-existing-validator-into-a-distributed-validator",level:3},{value:"What is an ENR?",id:"what-is-an-enr",level:3},{value:"Where can I learn more about Distributed Validators?",id:"where-can-i-learn-more-about-distributed-validators",level:3},{value:"What&#39;s with the name Charon?",id:"whats-with-the-name-charon",level:3}],p={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"frequently-asked-questions"},"Frequently asked questions"),(0,o.kt)("h3",{id:"does-obol-have-a-token"},"Does Obol have a token?"),(0,o.kt)("p",null,"No. Distributed validators use only ether."),(0,o.kt)("h3",{id:"can-i-keep-my-existing-validator-client"},"Can I keep my existing validator client?"),(0,o.kt)("p",null,"Yes. Charon sits as a middleware between a validator client and it's beacon node. All validators that implement the standard REST API will be supported, along with all popular client delivery software such as DAppNode ",(0,o.kt)("a",{parentName:"p",href:"https://dappnode.github.io/explorer/#/"},"packages"),", Rocket Pool's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rocket-pool/smartnode"},"smart node"),", StakeHouse's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stake-house/wagyu"},"wagyu"),", and Stereum's ",(0,o.kt)("a",{parentName:"p",href:"https://stereum.net/development/#roadmap"},"node launcher"),"."),(0,o.kt)("h3",{id:"can-i-migrate-my-existing-validator-into-a-distributed-validator"},"Can I migrate my existing validator into a distributed validator?"),(0,o.kt)("p",null,"It will be possible to split an existing validator keystore into a set of key shares suitable for a distributed validator, but it is a trusted distribution process, and if the old staking system is not safely shut down, it could pose a risk of double signing alongside the new distributed validator."),(0,o.kt)("p",null,"In an ideal scenario, a distributed validator's private key should never exist in full in a single location."),(0,o.kt)("p",null,"You can split an existing EIP-2335 keystore for a validator to migrate it to a distributed validator architecture with the ",(0,o.kt)("inlineCode",{parentName:"p"},"charon create cluster --split-existing-keys")," command documented ",(0,o.kt)("a",{parentName:"p",href:"/docs/v0.8.1/dv/charon_cli_reference#create-a-full-cluster-locally"},"here"),". "),(0,o.kt)("h3",{id:"what-is-an-enr"},"What is an ENR?"),(0,o.kt)("p",null,"An ENR is shorthand for an ",(0,o.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-778"},"Ethereum Node Record"),". It is a way to represent a node on a public network, with a reliable mechanism to update its information. At Obol we use ENRs to identify charon nodes to one another such that they can form clusters with the right charon nodes and not impostors. "),(0,o.kt)("p",null,"ENRs have private keys they use to sign updates to the ",(0,o.kt)("a",{parentName:"p",href:"https://enr-viewer.com/"},"data contained")," in their ENR. This private key is by default found at ",(0,o.kt)("inlineCode",{parentName:"p"},".charon/charon-enr-private-key"),", and should be kept secure, and not checked into version control. An ENR looks something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"enr:-JG4QAgAOXjGFcTIkXBO30aUMzg2YSo1CYV0OH8Sf2s7zA2kFjVC9ZQ_jZZItdE8gA-tUXW-rWGDqEcoQkeJ98Pw7GaGAYFI7eoegmlkgnY0gmlwhCKNyGGJc2VjcDI1NmsxoQI6SQlzw3WGZ_VxFHLhawQFhCK8Aw7Z0zq8IABksuJEJIN0Y3CCPoODdWRwgj6E\n")),(0,o.kt)("h3",{id:"where-can-i-learn-more-about-distributed-validators"},"Where can I learn more about Distributed Validators?"),(0,o.kt)("p",null,"Have you checked out our ",(0,o.kt)("a",{parentName:"p",href:"https://blog.obol.tech"},"blog site")," and ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/ObolNetwork"},"twitter")," yet? Maybe join our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/obol"},"discord")," too."),(0,o.kt)("h3",{id:"whats-with-the-name-charon"},"What's with the name Charon?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.theoi.com/Khthonios/Kharon.html"},"Charon")," is the Ancient Greek Ferryman of the Dead. He was tasked with bringing people across the Acheron river to the underworld. His fee was one Obol coin, placed in the mouth of the deceased. This tradition of placing a coin or Obol in the mouth of the deceased continues to this day across the Greek world."))}h.isMDXComponent=!0}}]);