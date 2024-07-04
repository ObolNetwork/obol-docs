"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[16702],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>f});var o=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(r),g=n,f=p["".concat(l,".").concat(g)]||p[g]||d[g]||i;return r?o.createElement(f,s(s({ref:t},u),{},{components:r})):o.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=g;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:n,s[1]=a;for(var c=2;c<i;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},61947:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=r(58168),n=(r(96540),r(15680));const i={},s="Filing a bug report",a={unversionedId:"cf/bug-report",id:"version-v1.0.0/cf/bug-report",title:"Filing a bug report",description:"Bug reports are critical to the rapid development of Obol. In order to make the process quick and efficient for all parties, it is best to follow some common reporting etiquette when filing to avoid double issues or miscommunications.",source:"@site/versioned_docs/version-v1.0.0/cf/bug-report.md",sourceDirName:"cf",slug:"/cf/bug-report",permalink:"/docs/cf/bug-report",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v1.0.0/cf/bug-report.md",tags:[],version:"v1.0.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Charon threat model",permalink:"/docs/sec/threat_model"},next:{title:"Documentation standards",permalink:"/docs/cf/docs"}},l={},c=[{value:"Checking if your issue exists",id:"checking-if-your-issue-exists",level:2},{value:"Writing quality bug reports",id:"writing-quality-bug-reports",level:2},{value:"The bug report template",id:"the-bug-report-template",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,o.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"filing-a-bug-report"},"Filing a bug report"),(0,n.yg)("p",null,"Bug reports are critical to the rapid development of Obol. In order to make the process quick and efficient for all parties, it is best to follow some common reporting etiquette when filing to avoid double issues or miscommunications."),(0,n.yg)("h2",{id:"checking-if-your-issue-exists"},"Checking if your issue exists"),(0,n.yg)("p",null,"Duplicate tickets are a hindrance to the development process and, as such, it is crucial to first check through Charon's existing issues to see if what you are experiencing has already been indexed."),(0,n.yg)("p",null,"To do so, head over to the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon/issues"},"issue page")," and enter some related keywords into the search bar. This may include a sample from the output or specific components it affects."),(0,n.yg)("p",null,"If searches have shown the issue in question has not been reported yet, feel free to open up a new issue ticket."),(0,n.yg)("h2",{id:"writing-quality-bug-reports"},"Writing quality bug reports"),(0,n.yg)("p",null,"A good bug report is structured to help the developers and contributors visualize the issue in the clearest way possible. It's important to be concise and use comprehensive language, while also providing all relevant information on-hand. Use short and accurate sentences without any unnecessary additions, and include all existing specifications with a list of steps to reproduce the expected problem. Issues that cannot be reproduced ",(0,n.yg)("strong",{parentName:"p"},"cannot be solved"),"."),(0,n.yg)("p",null,"If you are experiencing multiple issues, it is best to open each as a separate ticket. This allows them to be closed individually as they are resolved."),(0,n.yg)("p",null,"An original bug report will very likely be preserved and used as a record and sounding board for users that have similar experiences in the future. Because of this, it is a great service to the community to ensure that reports meet these standards and follow the template closely."),(0,n.yg)("h2",{id:"the-bug-report-template"},"The bug report template"),(0,n.yg)("p",null,"Below is the standard bug report template used by all of Obol's official repositories."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"\x3c!--- Provide a general summary of the issue in the Title above --\x3e\n\n## Expected Behavior\n\x3c!--- What should be happening? --\x3e\n\n## Current Behavior\n\x3c!--- What happens instead? --\x3e\n\n## Steps to Reproduce\n\x3c!--- Provide a concise set of steps to reproduce this bug.  --\x3e\n1.\n2.\n3.\n4.\n5.\n\n## Detailed Description\n\x3c!--- Provide some context for the issue you are experiencing. --\x3e\n\n## Specifications\n\x3c!--- Provide some information regarding your local system. ---\x3e\nOperating system:\nVersion(s) used:\n\n## Possible Solution\n\x3c!--- (Optional) Suggest a fix, reason or implementation for the bug. --\x3e\n\n## Further Information\n\x3c!--- Anything else to add?\n")))}d.isMDXComponent=!0}}]);