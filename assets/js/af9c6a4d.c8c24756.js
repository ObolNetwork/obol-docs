"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[61172],{95788:(e,t,o)=>{o.d(t,{Iu:()=>u,yg:()=>y});var r=o(11504);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(o),h=a,y=d["".concat(l,".").concat(h)]||d[h]||p[h]||n;return o?r.createElement(y,i(i({ref:t},u),{},{components:o})):r.createElement(y,i({ref:t},u))}));function y(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<n;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},92424:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=o(45072),a=(o(11504),o(95788));const n={description:"Security Overview",sidebar_position:1},i="Overview",s={unversionedId:"sec/overview",id:"version-v0.17.0/sec/overview",title:"Overview",description:"Security Overview",source:"@site/versioned_docs/version-v0.17.0/sec/overview.md",sourceDirName:"sec",slug:"/sec/overview",permalink:"/docs/v0.17.0/sec/overview",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.17.0/sec/overview.md",tags:[],version:"v0.17.0",sidebarPosition:1,frontMatter:{description:"Security Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Testnets",permalink:"/docs/v0.17.0/testnet"},next:{title:"Roadmap",permalink:"/docs/v0.17.0/sec/roadmap"}},l={},c=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Open Challenges",id:"open-challenges",level:2},{value:"Validation of Contract Deployment and Deposit Data Relies Heavily on Launchpad",id:"validation-of-contract-deployment-and-deposit-data-relies-heavily-on-launchpad",level:3},{value:"Social Consensus, aka \u201cWho sends the 32 ETH?\u201d",id:"social-consensus-aka-who-sends-the-32-eth",level:3},{value:"Core Public Goods",id:"core-public-goods",level:2},{value:"List of Security Audits",id:"list-of-security-audits",level:2},{value:"2023",id:"2023",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...o}=e;return(0,a.yg)(d,(0,r.c)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"overview"},"Overview"),(0,a.yg)("p",null,"This page serves as an overview of the Obol Network from a security auditor\u2019s point of view. It lists all of the projects that are intended to fall under the scope of the Obol Network project, as well as past audit reports, notable security bugs, and open security/privacy challenges in the Obol Network. You can think of this page as \u201ca security auditor\u2019s guide to Obol.\u201d"),(0,a.yg)("p",null,"This page is updated quarterly. The last update was on 2023-03-21."),(0,a.yg)("h2",{id:"table-of-contents"},"Table of Contents"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"#open-challenges"},"Open Challenges")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"#core-public-goods"},"Core Public Goods")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"#list-of-security-audits"},"List of Security Audits"))),(0,a.yg)("h2",{id:"open-challenges"},"Open Challenges"),(0,a.yg)("p",null,"These are the \u201cbig picture\u201d security challenges for Obol Network that are on our radar."),(0,a.yg)("h3",{id:"validation-of-contract-deployment-and-deposit-data-relies-heavily-on-launchpad"},"Validation of Contract Deployment and Deposit Data Relies Heavily on Launchpad"),(0,a.yg)("p",null,"The risks identified include the possibility of malicious contracts being deployed by attackers who compromise the Launchpad or an underlying dependency."),(0,a.yg)("p",null,"Key concerns raised by the auditor:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"How does the group creator know the Launchpad deployed the correct contracts?"),(0,a.yg)("li",{parentName:"ol"},"How does the rest of the group know the creator deployed the contracts through the Launchpad?\nThe current verification process relies on the independent verification performed by each group member during and after the cluster's setup phase. However, this process may not be sufficient, as most users lack the necessary expertise to verify the source code accurately.")),(0,a.yg)("p",null,"The primary risk is that users may deposit with malicious withdrawal or fee recipient credentials, potentially allowing an attacker to steal the entire withdrawal amount once the cluster exits."),(0,a.yg)("p",null,"The audit also mentions similar risks in validating deposit data but lacks clarity on the Obol stack's specific part that generates the deposit data/transaction."),(0,a.yg)("p",null,"The auditor suggests that the mitigation for these risks would involve a more thorough and reliable verification process, although further details are not provided in the summary."),(0,a.yg)("h3",{id:"social-consensus-aka-who-sends-the-32-eth"},"Social Consensus, aka \u201cWho sends the 32 ETH?\u201d"),(0,a.yg)("p",null,"Obol allows multiple operators to act as a single validator, requiring a total of 32 ETH for depositing to the beacon chain. Currently, the process relies on trust and social consensus, where the group decides on individual contributions and trusts someone to complete the deposit process correctly without misusing the funds."),(0,a.yg)("p",null,"While the initial launch of Obol is limited to a small group, for a future public release, the deposit process should be simpler and less reliant on trust to ensure security and user confidence."),(0,a.yg)("h2",{id:"core-public-goods"},"Core Public Goods"),(0,a.yg)("p",null,"The Obol Network consists of four core public goods:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The Distributed Validator ",(0,a.yg)("a",{parentName:"li",href:"https://docs.obol.tech/docs/dvl/intro"},"Launchpad"),", a ",(0,a.yg)("a",{parentName:"li",href:"https://goerli.launchpad.obol.tech/"},"User Interface")," for bootstrapping Distributed Validators"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.obol.tech/docs/charon/intro"},"Charon"),", a middleware client that enables validators to run in a fault-tolerant, distributed manner"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.obol.tech/docs/sc/introducing-obol-managers"},"Obol Managers"),", a set of solidity smart contracts for the formation of Distributed Validators"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.obol.tech/docs/testnet"},"Obol Testnets"),", a set of on-going public incentivized testnets that enable any sized operator to test their deployment before serving for the mainnet Obol Network")),(0,a.yg)("h2",{id:"list-of-security-audits"},"List of Security Audits"),(0,a.yg)("h3",{id:"2023"},"2023"),(0,a.yg)("p",null,"The completed audits reports are linked ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/obol-security/tree/main/audits"},"here"),"."))}p.isMDXComponent=!0}}]);