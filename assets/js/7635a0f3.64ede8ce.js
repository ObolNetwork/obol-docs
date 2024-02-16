"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[84308],{95788:(e,t,r)=>{r.d(t,{Iu:()=>u,yg:()=>h});var n=r(11504);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(r),g=o,h=p["".concat(l,".").concat(g)]||p[g]||d[g]||i;return r?n.createElement(h,s(s({ref:t},u),{},{components:r})):n.createElement(h,s({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=g;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},97920:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=r(45072),o=(r(11504),r(95788));const i={},s="Filing a bug report",a={unversionedId:"cg/bug-report",id:"version-v0.8.1/cg/bug-report",title:"Filing a bug report",description:"Bug reports are critical to the rapid development of Obol. In order to make the process quick and efficient for all parties, it is best to follow some common reporting etiquette when filing to avoid double issues or miscommunications.",source:"@site/versioned_docs/version-v0.8.1/cg/bug-report.md",sourceDirName:"cg",slug:"/cg/bug-report",permalink:"/docs/v0.8.1/cg/bug-report",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.8.1/cg/bug-report.md",tags:[],version:"v0.8.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Obol Manager Contracts",permalink:"/docs/v0.8.1/sc/introducing-obol-managers"},next:{title:"Documentation standards",permalink:"/docs/v0.8.1/cg/docs"}},l={},c=[{value:"Checking if your issue exists",id:"checking-if-your-issue-exists",level:2},{value:"Writing quality bug reports",id:"writing-quality-bug-reports",level:2},{value:"The bug report template",id:"the-bug-report-template",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.yg)(p,(0,n.c)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"filing-a-bug-report"},"Filing a bug report"),(0,o.yg)("p",null,"Bug reports are critical to the rapid development of Obol. In order to make the process quick and efficient for all parties, it is best to follow some common reporting etiquette when filing to avoid double issues or miscommunications."),(0,o.yg)("h2",{id:"checking-if-your-issue-exists"},"Checking if your issue exists"),(0,o.yg)("p",null,"Duplicate tickets are a hinderance to the development process and, as such, it is crucial to first check through Charon's existing issues to see if what you are experiencing has already been indexed."),(0,o.yg)("p",null,"To do so, head over to the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon/issues"},"issue page")," and enter some related keywords into the search bar. This may include a sample from the output or specific components it affects."),(0,o.yg)("p",null,"If searches have shown the issue in question has not been reported yet, feel free to open up a new issue ticket."),(0,o.yg)("h2",{id:"writing-quality-bug-reports"},"Writing quality bug reports"),(0,o.yg)("p",null,"A good bug report is structured to help the developers and contributors visualise the issue in the clearest way possible. It's important to be concise and use comprehensive language, while also providing all relevant information on-hand. Use short and accurate sentences without any unnecessary additions, and include all existing specifications with a list of steps to reproduce the expected problem. Issues that cannot be reproduced ",(0,o.yg)("strong",{parentName:"p"},"cannot be solved"),"."),(0,o.yg)("p",null,"If you are experiencing multiple issues, it is best to open each as a separate ticket. This allows them to be closed individually as they are resolved."),(0,o.yg)("p",null,"An original bug report will very likely be preserved and used as a record and sounding board for users that have similar experiences in the future. Because of this, it is a great service to the community to ensure that reports meet these standards and follow the template closely."),(0,o.yg)("h2",{id:"the-bug-report-template"},"The bug report template"),(0,o.yg)("p",null,"Below is the standard bug report template used by all of Obol's official repositories."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"\x3c!--- Provide a general summary of the issue in the Title above --\x3e\n\n## Expected Behaviour\n\x3c!--- What should be happening? --\x3e\n\n## Current Behaviour\n\x3c!--- What happens instead? --\x3e\n\n## Steps to Reproduce\n\x3c!--- Provide a concise set of steps to reproduce this bug.  --\x3e\n1.\n2.\n3.\n4.\n5.\n\n## Detailed Description\n\x3c!--- Provide some context for the issue you are experiencing. --\x3e\n\n## Specifications\n\x3c!--- Provide some information regarding your local system. ---\x3e\nOperating system:\nVersion(s) used:\n\n## Possible Solution\n\x3c!--- (Optional) Suggest a fix, reason or implementation for the bug. --\x3e\n\n## Further Information\n\x3c!--- Anything else to add?\n")))}d.isMDXComponent=!0}}]);