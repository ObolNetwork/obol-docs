"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[33431],{3398:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"start/update","title":"Update a DV","description":"Update your DV cluster with the latest Charon release","source":"@site/versioned_docs/version-v1.1.1/start/update.mdx","sourceDirName":"start","slug":"/start/update","permalink":"/v1.1.1/start/update","draft":false,"unlisted":false,"editUrl":"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v1.1.1/start/update.mdx","tags":[],"version":"v1.1.1","sidebarPosition":6,"frontMatter":{"sidebar_position":6,"description":"Update your DV cluster with the latest Charon release"},"sidebar":"tutorialSidebar","previous":{"title":"Activate a DV","permalink":"/v1.1.1/start/activate-dv"},"next":{"title":"Exit a DV","permalink":"/v1.1.1/start/quickstart-exit"}}');var n=r(74848),s=r(28453),o=r(49489),l=r(7227);const i={sidebar_position:6,description:"Update your DV cluster with the latest Charon release"},u="Update a DV",c={},d=[{value:"Navigate to the node directory",id:"navigate-to-the-node-directory",level:3},{value:"Pull latest changes to the repo",id:"pull-latest-changes-to-the-repo",level:3},{value:"Create (or recreate) your DV stack",id:"create-or-recreate-your-dv-stack",level:3},{value:"Conflicts",id:"conflicts",level:3}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"update-a-dv",children:"Update a DV"})}),"\n",(0,n.jsx)(t.p,{children:"It is highly recommended to upgrade your DV stack from time to time. This ensures that your node is secure, performant, up-to-date and you don't miss important hard forks."}),"\n",(0,n.jsx)(t.p,{children:"To do this, follow these steps:"}),"\n",(0,n.jsx)(t.h3,{id:"navigate-to-the-node-directory",children:"Navigate to the node directory"}),"\n",(0,n.jsxs)(o.A,{groupId:"group-solo",children:[(0,n.jsx)(l.A,{value:"group",label:"charon-distributed-validator-node",default:!0,children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{children:(0,n.jsx)(t.p,{children:"cd charon-distributed-validator-node"})})})}),(0,n.jsx)(l.A,{value:"solo",label:"charon-distributed-validator-cluster",children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{children:(0,n.jsx)(t.p,{children:"cd charon-distributed-validator-cluster"})})})})]}),"\n",(0,n.jsx)(t.h3,{id:"pull-latest-changes-to-the-repo",children:"Pull latest changes to the repo"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"git pull\n"})}),"\n",(0,n.jsx)(t.h3,{id:"create-or-recreate-your-dv-stack",children:"Create (or recreate) your DV stack"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"docker compose up -d --build\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"danger",children:(0,n.jsx)(t.p,{children:"If you run more than one node in a DV Cluster, please take caution upgrading them simultaneously. Particularly if you are updating or changing the validator client used or recreating disks. It is recommended to update nodes on a sequential basis to minimse liveness and safety risks."})}),"\n",(0,n.jsx)(t.h3,{id:"conflicts",children:"Conflicts"}),"\n",(0,n.jsxs)(t.p,{children:["You may get a ",(0,n.jsx)(t.code,{children:"git conflict"})," error similar to this:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-markdown",children:"error: Your local changes to the following files would be overwritten by merge:\nprometheus/prometheus.yml\n\nPlease commit your changes or stash them before you merge.\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This is probably because you have made some changes to some of the files, for example to the ",(0,n.jsx)(t.code,{children:"prometheus/prometheus.yml"})," file."]}),"\n",(0,n.jsx)(t.p,{children:"To resolve this error, you can either:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Stash and reapply changes if you want to keep your custom changes:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"git stash                       # Stash your local changes\ngit pull                        # Pull the latest changes\ngit stash apply                 # Reapply your changes from the stash\ndocker-compose up -d --build    # Recreate your DV stack\n"})}),"\n",(0,n.jsx)(t.p,{children:"After reapplying your changes, manually resolve any conflicts that may arise between your changes and the pulled changes using a text editor or Git's conflict resolution tools."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Override changes and recreate configuration if you don't need to preserve your local changes and want to discard them entirely:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"git reset --hard                # Discard all local changes and override with the pulled changes\ngit pull                        # Pull the latest changes\ndocker-compose up -d --build    # Recreate your DV stack\n"})}),"\n",(0,n.jsx)(t.p,{children:"After overriding the changes, you will need to recreate your DV stack using the updated files.\nBy following one of these approaches, you should be able to handle Git conflicts when pulling the latest changes to your repository, either preserving your changes or overriding them as per your requirements."}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},7227:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var a=r(34164);const n={tabItem:"tabItem_Ymn6"};var s=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,o),hidden:r,children:t})}},49489:(e,t,r)=>{r.d(t,{A:()=>w});var a=r(96540),n=r(34164),s=r(24245),o=r(56347),l=r(36494),i=r(62814),u=r(45167),c=r(69900);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=h(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[u,d]=m({queryString:r,groupId:n}),[f,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),v=(()=>{const e=u??f;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=r(11062);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function y(e){let{className:t,block:r,selectedValue:a,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,r=i.indexOf(t),n=l[r].value;n!==a&&(u(t),o(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,n.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:s}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function j(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,n.A)("tabs-container",v.tabList),children:[(0,b.jsx)(y,{...t,...e}),(0,b.jsx)(x,{...t,...e})]})}function w(e){const t=(0,g.A)();return(0,b.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>l});var a=r(96540);const n={},s=a.createContext(n);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);