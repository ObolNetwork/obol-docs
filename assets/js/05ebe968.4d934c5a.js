"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[2218],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,h=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},32468:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],c={description:"A dapp to securely create Distributed Validators alone or with a group.",sidebar_position:1},s="Introduction",u={unversionedId:"dvl/intro",id:"version-v0.13.0/dvl/intro",title:"Introduction",description:"A dapp to securely create Distributed Validators alone or with a group.",source:"@site/versioned_docs/version-v0.13.0/dvl/intro.md",sourceDirName:"dvl",slug:"/dvl/intro",permalink:"/docs/dvl/intro",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.13.0/dvl/intro.md",tags:[],version:"v0.13.0",sidebarPosition:1,frontMatter:{description:"A dapp to securely create Distributed Validators alone or with a group.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"CLI reference",permalink:"/docs/charon/charon_cli_reference"},next:{title:"Obol Manager Contracts",permalink:"/docs/sc/introducing-obol-managers"}},l={},d=[{value:"Getting started",id:"getting-started",level:2}],p={toc:d};function f(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"DV Launchpad Promo Image",src:r(44413).Z,width:"1440",height:"643"})),(0,a.kt)("p",null,"In order to activate an Ethereum validator, 32 ETH must be deposited into the official deposit contract. "),(0,a.kt)("p",null,"The vast majority of users that created validators to date have used the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://launchpad.ethereum.org/"},(0,a.kt)("del",{parentName:"a"},"Eth2")," Staking Launchpad")),", a public good open source website built by the Ethereum Foundation alongside participants that later went on to found Obol. This tool has been wildly successful in the safe and educational creation of a significant number of validators on the Ethereum mainnet."),(0,a.kt)("p",null,"To facilitate the generation of distributed validator keys amongst remote users with high trust, the Obol Network developed and maintains a website that enables a group of users to come together and create these threshold keys: ",(0,a.kt)("a",{parentName:"p",href:"https://goerli.launchpad.obol.tech/"},(0,a.kt)("strong",{parentName:"a"},"The DV Launchpad")),"."),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("p",null,"For more information on running charon in a UI friendly way through the DV Launchpad, take a look at our ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/int/quickstart/"},"Quickstart Guides"),"."))}f.isMDXComponent=!0},44413:function(e,t,r){t.Z=r.p+"assets/images/DistributeYourValidators-70d9f95984d5a3ad434b9e0d5a2d6073.svg"}}]);