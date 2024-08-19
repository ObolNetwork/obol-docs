"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[83327],{67240:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var i=n(74848),s=n(28453);const r={sidebar_position:6,description:"Use advanced docker-compose features to have more flexibility and power to change the default configuration."},t="Advanced Docker Configs",c={id:"int/quickstart/advanced/adv-docker-configs",title:"Advanced Docker Configs",description:"Use advanced docker-compose features to have more flexibility and power to change the default configuration.",source:"@site/versioned_docs/version-v0.16.0/int/quickstart/advanced/adv-docker-configs.md",sourceDirName:"int/quickstart/advanced",slug:"/int/quickstart/advanced/adv-docker-configs",permalink:"/docs/v0.16.0/int/quickstart/advanced/adv-docker-configs",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.16.0/int/quickstart/advanced/adv-docker-configs.md",tags:[],version:"v0.16.0",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"Use advanced docker-compose features to have more flexibility and power to change the default configuration."},sidebar:"tutorialSidebar",previous:{title:"Push metrics to Obol Monitoring",permalink:"/docs/v0.16.0/int/quickstart/advanced/monitoring-credentials"},next:{title:"Run Prysm validators as part of a DV Cluster",permalink:"/docs/v0.16.0/int/quickstart/advanced/prysm-vc"}},d={},a=[];function l(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.header,{children:(0,i.jsx)(o.h1,{id:"advanced-docker-configs",children:"Advanced Docker Configs"})}),"\n",(0,i.jsx)(o.admonition,{type:"info",children:(0,i.jsxs)(o.p,{children:["This section is intended for ",(0,i.jsx)(o.em,{children:"docker power users"}),", i.e., for those who are familiar with working with ",(0,i.jsx)(o.code,{children:"docker-compose"})," and want to have more flexibility and power to change the default configuration."]})}),"\n",(0,i.jsxs)(o.p,{children:['We use the "Multiple Compose File" feature which provides a very powerful way to override any configuration in ',(0,i.jsx)(o.code,{children:"docker-compose.yml"})," without needing to modify git-checked-in files since that results in conflicts when upgrading this repo.\nSee ",(0,i.jsx)(o.a,{href:"https://docs.docker.com/compose/extends/#multiple-compose-files",children:"this"})," for more details."]}),"\n",(0,i.jsxs)(o.p,{children:["There are some additional compose files in ",(0,i.jsx)(o.a,{href:"https://github.com/ObolNetwork/charon-distributed-validator-node/",children:"this repository"}),", ",(0,i.jsx)(o.code,{children:"compose-debug.yml"}),", ",(0,i.jsx)(o.code,{children:"docker-compose.override.yml.sample"})," and ",(0,i.jsx)(o.code,{children:"mevboost-compose.yml"}),", along-with the default ",(0,i.jsx)(o.code,{children:"docker-compose.yml"})," file that you can use for this purpose."]}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:"compose-debug.yml"})," contains some additional containers that developers can use for debugging, like ",(0,i.jsx)(o.code,{children:"jaeger"}),". To achieve this, you can run:"]}),"\n"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"docker compose -f docker-compose.yml -f compose-debug.yml up\n"})}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.code,{children:"docker-compose.override.yml.sample"})," is intended to override the default configuration provided in ",(0,i.jsx)(o.code,{children:"docker-compose.yml"}),". This is useful when, for example, you wish to add port mappings or want to disable a container."]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:["To use it, just copy the sample file to ",(0,i.jsx)(o.code,{children:"docker-compose.override.yml"})," and customise it to your liking. Please create this file ONLY when you want to tweak something. This is because the default override file is empty and docker errors if you provide an empty compose file."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"cp docker-compose.override.yml.sample docker-compose.override.yml\n\n# Tweak docker-compose.override.yml and then run docker compose up\ndocker compose up\n"})}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"You can also run all these compose files together. This is desirable when you want to use both the features. For example, you may want to have some debugging containers AND also want to override some defaults. To achieve this, you can run:"}),"\n"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"docker compose -f docker-compose.yml -f docker-compose.override.yml -f compose-debug.yml up\n"})})]})}function h(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>t,x:()=>c});var i=n(96540);const s={},r=i.createContext(s);function t(e){const o=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(r.Provider,{value:o},e.children)}}}]);