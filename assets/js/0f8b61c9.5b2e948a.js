"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[76900],{95788:(e,t,r)=>{r.d(t,{Iu:()=>u,yg:()=>m});var n=r(11504);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),y=o,m=p["".concat(l,".").concat(y)]||p[y]||d[y]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},49904:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(45072),o=(r(11504),r(95788));const a={sidebar_position:1,description:"Security Overview"},i="Overview",s={unversionedId:"sec/overview",id:"version-v0.17.1/sec/overview",title:"Overview",description:"Security Overview",source:"@site/versioned_docs/version-v0.17.1/sec/overview.md",sourceDirName:"sec",slug:"/sec/overview",permalink:"/docs/v0.17.1/sec/overview",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.17.1/sec/overview.md",tags:[],version:"v0.17.1",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Security Overview"},sidebar:"tutorialSidebar",previous:{title:"Testnets",permalink:"/docs/v0.17.1/testnet"},next:{title:"Obol Bug Bounty",permalink:"/docs/v0.17.1/sec/bug-bounty"}},l={},c=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"List of Security Audits and Assessments",id:"list-of-security-audits-and-assessments",level:2},{value:"Security focused documents",id:"security-focused-documents",level:2},{value:"Bug Bounty",id:"bug-bounty",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.yg)(p,(0,n.c)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"overview"},"Overview"),(0,o.yg)("p",null,"This page serves as an overview of the Obol Network from a security point of view."),(0,o.yg)("p",null,"This page is updated quarterly. The last update was on 2023-10-01."),(0,o.yg)("h2",{id:"table-of-contents"},"Table of Contents"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"#list-of-security-audits-and-assessments"},"List of Security Audits and Assessments")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"#security-focused-documents"},"Security Focused Documents")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"/docs/v0.17.1/sec/bug-bounty"},"Bug Bounty Details"))),(0,o.yg)("h2",{id:"list-of-security-audits-and-assessments"},"List of Security Audits and Assessments"),(0,o.yg)("p",null,"The completed audits reports are linked ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/obol-security/tree/main/audits"},"here"),"."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"A review of Obol Labs ",(0,o.yg)("a",{parentName:"p",href:"./ev-assessment"},"development processes")," by Ethereal Ventures")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"A ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/obol-security/blob/f9d7b0ad0bb8897f74ccb34cd4bd83012ad1d2b5/audits/Sigma_Prime_Obol_Network_Charon_Security_Assessment_Report_v2_1.pdf"},"security assessment")," of Charon by ",(0,o.yg)("a",{parentName:"p",href:"https://sigmaprime.io/"},"Sigma Prime"),".")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"A ",(0,o.yg)("a",{parentName:"p",href:"./smart_contract_audit"},"solidity audit")," of the Obol Manager Contracts by ",(0,o.yg)("a",{parentName:"p",href:"https://zachobront.com/"},"Zach Obront"),".")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"A second audit of Charon is planned for Q4 2023."))),(0,o.yg)("h2",{id:"security-focused-documents"},"Security focused documents"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"A ",(0,o.yg)("a",{parentName:"li",href:"./threat_model"},"threat model")," for a DV middleware client like charon.")),(0,o.yg)("h2",{id:"bug-bounty"},"Bug Bounty"),(0,o.yg)("p",null,"Information related to disclosing bugs and vulnerabilities to Obol can be found on ",(0,o.yg)("a",{parentName:"p",href:"/docs/v0.17.1/sec/bug-bounty"},"the next page"),"."))}d.isMDXComponent=!0}}]);