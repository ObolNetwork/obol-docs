"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[35475],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>d});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,d=c["".concat(l,".").concat(m)]||c[m]||y[m]||o;return r?a.createElement(d,i(i({ref:t},p),{},{components:r})):a.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},16993:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=r(58168),n=(r(96540),r(15680));const o={sidebar_position:1,description:"Security Overview"},i="Overview",s={unversionedId:"sec/overview",id:"version-v1.0.0/sec/overview",title:"Overview",description:"Security Overview",source:"@site/versioned_docs/version-v1.0.0/sec/overview.md",sourceDirName:"sec",slug:"/sec/overview",permalink:"/docs/sec/overview",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v1.0.0/sec/overview.md",tags:[],version:"v1.0.0",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Security Overview"},sidebar:"tutorialSidebar",previous:{title:"OperatorPayload",permalink:"/docs/sdk/type-aliases/OperatorPayload"},next:{title:"Obol Bug Bounty Program",permalink:"/docs/sec/bug-bounty"}},l={},u=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"List of Security Audits and Assessments",id:"list-of-security-audits-and-assessments",level:2},{value:"Security focused documents",id:"security-focused-documents",level:2},{value:"Bug Bounty",id:"bug-bounty",level:2}],p={toc:u},c="wrapper";function y(e){let{components:t,...r}=e;return(0,n.yg)(c,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"overview"},"Overview"),(0,n.yg)("p",null,"This page serves as an overview of the Obol Network from a security point of view."),(0,n.yg)("p",null,"This page is updated quarterly. The last update was on 2024-June-19."),(0,n.yg)("h2",{id:"table-of-contents"},"Table of Contents"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#overview"},"Overview"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#table-of-contents"},"Table of Contents")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#list-of-security-audits-and-assessments"},"List of Security Audits and Assessments")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#security-focused-documents"},"Security focused documents")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#bug-bounty"},"Bug Bounty"))))),(0,n.yg)("h2",{id:"list-of-security-audits-and-assessments"},"List of Security Audits and Assessments"),(0,n.yg)("p",null,"The completed audits reports are linked ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/obol-security/tree/main/audits"},"here"),"."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"A review of Obol Labs ",(0,n.yg)("a",{parentName:"p",href:"./ev-assessment"},"development processes")," by ",(0,n.yg)("a",{parentName:"p",href:"https://www.etherealventures.com/"},"Ethereal Ventures"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"A ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/obol-security/blob/f9d7b0ad0bb8897f74ccb34cd4bd83012ad1d2b5/audits/Sigma_Prime_Obol_Network_Charon_Security_Assessment_Report_v2_1.pdf"},"security assessment")," of Charon by ",(0,n.yg)("a",{parentName:"p",href:"https://sigmaprime.io/"},"Sigma Prime")," resulting in version ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon/releases/tag/v0.16.0"},(0,n.yg)("inlineCode",{parentName:"a"},"v0.16.0")),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"A second ",(0,n.yg)("a",{parentName:"p",href:"https://obol.tech/charon_quantstamp_assessment.pdf"},"assessment of Charon")," by ",(0,n.yg)("a",{parentName:"p",href:"https://quantstamp.com/"},"QuantStamp")," resulting in version ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon/releases/tag/v0.19.1"},(0,n.yg)("inlineCode",{parentName:"a"},"v0.19.1")),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"A ",(0,n.yg)("a",{parentName:"p",href:"./smart_contract_audit"},"solidity audit")," of the Obol Splits contracts by ",(0,n.yg)("a",{parentName:"p",href:"https://zachobront.com/"},"Zach Obront"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"A ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/obol-security/blob/main/audits/Sayfer_2024-03_Penetration_Testing_CFD.pdf"},"penetration testing certificate")," of the Obol DV Launchpad by ",(0,n.yg)("a",{parentName:"p",href:"https://sayfer.io/"},"Sayfer"),"."))),(0,n.yg)("h2",{id:"security-focused-documents"},"Security focused documents"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"A ",(0,n.yg)("a",{parentName:"li",href:"./threat_model"},"threat model")," for a DV middleware client like Charon.")),(0,n.yg)("h2",{id:"bug-bounty"},"Bug Bounty"),(0,n.yg)("p",null,"Information related to disclosing bugs and vulnerabilities to Obol can be found on ",(0,n.yg)("a",{parentName:"p",href:"/docs/sec/bug-bounty"},"the next page"),"."))}y.isMDXComponent=!0}}]);