"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[41588],{15680:(e,o,n)=>{n.d(o,{xA:()=>d,yg:()=>y});var r=n(96540);function t(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function a(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?a(Object(n),!0).forEach((function(o){t(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function c(e,o){if(null==e)return{};var n,r,t=function(e,o){if(null==e)return{};var n,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],o.indexOf(n)>=0||(t[n]=e[n]);return t}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=r.createContext({}),l=function(e){var o=r.useContext(s),n=o;return e&&(n="function"==typeof e?e(o):i(i({},o),e)),n},d=function(e){var o=l(e.components);return r.createElement(s.Provider,{value:o},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},u=r.forwardRef((function(e,o){var n=e.components,t=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),u=t,y=p["".concat(s,".").concat(u)]||p[u]||m[u]||a;return n?r.createElement(y,i(i({ref:o},d),{},{components:n})):r.createElement(y,i({ref:o},d))}));function y(e,o){var n=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var s in o)hasOwnProperty.call(o,s)&&(c[s]=o[s]);c.originalType=e,c[p]="string"==typeof e?e:t,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40803:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(58168),t=(n(96540),n(15680));const a={sidebar_position:12,description:"Use advanced docker-compose features to have more flexibility and power to change the default configuration."},i="Advanced Docker Configs",c={unversionedId:"advanced/adv-docker-configs",id:"version-v1.0.0/advanced/adv-docker-configs",title:"Advanced Docker Configs",description:"Use advanced docker-compose features to have more flexibility and power to change the default configuration.",source:"@site/versioned_docs/version-v1.0.0/advanced/adv-docker-configs.md",sourceDirName:"advanced",slug:"/advanced/adv-docker-configs",permalink:"/docs/advanced/adv-docker-configs",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v1.0.0/advanced/adv-docker-configs.md",tags:[],version:"v1.0.0",sidebarPosition:12,frontMatter:{sidebar_position:12,description:"Use advanced docker-compose features to have more flexibility and power to change the default configuration."},sidebar:"tutorialSidebar",previous:{title:"Deployment Best Practices",permalink:"/docs/advanced/deployment-best-practices"},next:{title:"Frequently asked questions",permalink:"/docs/faq/general"}},s={},l=[],d={toc:l},p="wrapper";function m(e){let{components:o,...n}=e;return(0,t.yg)(p,(0,r.A)({},d,n,{components:o,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"advanced-docker-configs"},"Advanced Docker Configs"),(0,t.yg)("admonition",{type:"info"},(0,t.yg)("p",{parentName:"admonition"},"This section is intended for ",(0,t.yg)("em",{parentName:"p"},"docker power users"),", i.e.: for those who are familiar with working with ",(0,t.yg)("inlineCode",{parentName:"p"},"docker compose")," and want to have more flexibility and power to change the default configuration.")),(0,t.yg)("p",null,'We use the "Multiple Compose File" feature which provides a very powerful way to override any configuration in ',(0,t.yg)("inlineCode",{parentName:"p"},"docker-compose.yml")," without needing to modify git-checked-in files since that results in conflicts when upgrading this repo.\nSee ",(0,t.yg)("a",{parentName:"p",href:"https://docs.docker.com/compose/extends/#multiple-compose-files"},"this")," for more details."),(0,t.yg)("p",null,"There are some additional compose files in ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon-distributed-validator-node/"},"this repository"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"compose-debug.yml")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"docker-compose.override.yml.sample"),", along-with the default ",(0,t.yg)("inlineCode",{parentName:"p"},"docker-compose.yml")," file that you can use for this purpose."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"compose-debug.yml")," contains some additional containers that developers can use for debugging, like ",(0,t.yg)("inlineCode",{parentName:"li"},"jaeger"),". To achieve this, you can run:")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"docker compose -f docker-compose.yml -f compose-debug.yml up\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"docker-compose.override.yml.sample")," is intended to override the default configuration provided in ",(0,t.yg)("inlineCode",{parentName:"p"},"docker-compose.yml"),". This is useful when, for example, you wish to add port mappings or want to disable a container.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"To use it, just copy the sample file to ",(0,t.yg)("inlineCode",{parentName:"p"},"docker-compose.override.yml")," and customise it to your liking. Please create this file ONLY when you want to tweak something. This is because the default override file is empty and docker errors if you provide an empty compose file."))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"cp docker-compose.override.yml.sample docker-compose.override.yml\n\n# Tweak docker-compose.override.yml and then run docker compose up\ndocker compose up\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"You can also run all these compose files together. This is desirable when you want to use both the features. For example, you may want to have some debugging containers AND also want to override some defaults. To achieve this, you can run:")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"docker compose -f docker-compose.yml -f docker-compose.override.yml -f compose-debug.yml up\n")))}m.isMDXComponent=!0}}]);