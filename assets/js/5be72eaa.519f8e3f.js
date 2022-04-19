"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[7343],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8926:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={description:"Creating a Distributed Validator cluster from scratch"},l="Distributed validator creation",s={unversionedId:"dv/validator-creation",id:"dv/validator-creation",isDocsHomePage:!1,title:"Distributed validator creation",description:"Creating a Distributed Validator cluster from scratch",source:"@site/docs/dv/02_validator-creation.md",sourceDirName:"dv",slug:"/dv/validator-creation",permalink:"/docs/dv/validator-creation",editUrl:"https://github.com/obolnetwork/obol-docs/edit/main/website/docs/dv/02_validator-creation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Creating a Distributed Validator cluster from scratch"},sidebar:"tutorialSidebar",previous:{title:"Introducing Charon",permalink:"/docs/dv/introducing-charon"},next:{title:"Middleware daemon",permalink:"/docs/dv/middleware-daemon"}},d=[{value:"Stages of creating a distributed validator",id:"stages-of-creating-a-distributed-validator",children:[],level:3}],u={toc:d};function p(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"distributed-validator-creation"},"Distributed validator creation"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A sample Distributed Validator cluster",src:r(8373).Z})),(0,a.kt)("h3",{id:"stages-of-creating-a-distributed-validator"},"Stages of creating a distributed validator"),(0,a.kt)("p",null,"To create a distributed validator cluster, you and your group of operators need to complete the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Each operator must set up their staking software on their node, expose the necessary ports to the internet, and configure appropriate monitoring, logging and alerting."),(0,a.kt)("li",{parentName:"ol"},"One operator leads, and all operators participate in a ",(0,a.kt)("a",{parentName:"li",href:"/docs/dvk/distributed-validator-keys"},"Distributed Validator Key")," generation ceremony."),(0,a.kt)("li",{parentName:"ol"},"All operators load the keys and manifests generated in the ceremony, into their staking deployments."),(0,a.kt)("li",{parentName:"ol"},"Operators can run a performance test of the configured cluster to ensure connectivity between all operators at a reasonable latency is observed."),(0,a.kt)("li",{parentName:"ol"},"Once all readiness tests have passed, one person activates the distributed validator(s) with a deposit on chain.")))}p.isMDXComponent=!0},8373:function(e,t,r){t.Z=r.p+"assets/images/ObolCluster-0bbe0b53c392ef9fbe6e5e3ef648ef0c.png"}}]);