"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[92234],{94372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(74848),o=n(28453),a=n(49489),i=n(7227);const s={sidebar_position:3,description:"Add monitoring credentials to help the Obol Team monitor the health of your cluster"},l="Push Metrics to Obol Monitoring",c={id:"advanced/obol-monitoring",title:"Push Metrics to Obol Monitoring",description:"Add monitoring credentials to help the Obol Team monitor the health of your cluster",source:"@site/versioned_docs/version-v1.1.2/advanced/obol-monitoring.md",sourceDirName:"advanced",slug:"/advanced/obol-monitoring",permalink:"/docs/advanced/obol-monitoring",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v1.1.2/advanced/obol-monitoring.md",tags:[],version:"v1.1.2",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Add monitoring credentials to help the Obol Team monitor the health of your cluster"},sidebar:"tutorialSidebar",previous:{title:"Monitoring your Node",permalink:"/docs/advanced/monitoring"},next:{title:"Create a DV using the SDK",permalink:"/docs/advanced/quickstart-sdk"}},u={},d=[{value:"Update the monitoring token in the <code>.env</code> file",id:"update-the-monitoring-token-in-the-env-file",level:2},{value:"Save the <code>.env</code> file and restart Prometheus",id:"save-the-env-file-and-restart-prometheus",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"push-metrics-to-obol-monitoring",children:"Push Metrics to Obol Monitoring"})}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["This is ",(0,r.jsx)(t.strong,{children:"optional"})," and does not confer any special privileges within the Obol Network."]})}),"\n",(0,r.jsxs)(a.A,{groupId:"set-prom-remote-write",children:[(0,r.jsxs)(i.A,{value:"Quickstart",label:"Quickstart",children:[(0,r.jsxs)(t.p,{children:["This is for operators using the ",(0,r.jsx)(t.a,{href:"https://github.com/ObolNetwork/charon-distributed-validator-node",children:"example repo"})," from our ",(0,r.jsx)(t.a,{href:"/docs/start/quickstart_overview",children:"quickstart guide"}),", and have been provided with ",(0,r.jsx)(t.strong,{children:"Monitoring Credentials"})," used to push distributed validator metrics to Obol's central Prometheus cluster to monitor, analyze, and improve your Distributed Validator Cluster's performance. (For example, this is necessary to participate in the Obol ",(0,r.jsx)(t.a,{href:"https://squadstaking.com/techne",children:"Techne"})," credential program.)"]}),(0,r.jsxs)(t.h2,{id:"update-the-monitoring-token-in-the-env-file",children:["Update the monitoring token in the ",(0,r.jsx)(t.code,{children:".env"})," file"]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Inside your ",(0,r.jsx)(t.code,{children:".env"})," file, uncomment the ",(0,r.jsx)(t.code,{children:"PROM_REMOTE_WRITE_TOKEN"})," line by removing the ",(0,r.jsx)(t.code,{children:"#"})," symbol."]}),"\n",(0,r.jsx)(t.li,{children:"Enter your monitoring token in the format shown below:"}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"PROM_REMOTE_WRITE_TOKEN=your_monitoring_token\n"})}),(0,r.jsxs)(t.h2,{id:"save-the-env-file-and-restart-prometheus",children:["Save the ",(0,r.jsx)(t.code,{children:".env"})," file and restart Prometheus"]}),(0,r.jsxs)(t.p,{children:["Save the ",(0,r.jsx)(t.code,{children:".env"})," file, and run the ",(0,r.jsx)(t.code,{children:"docker compose up -d"})," command, and prometheus will be restarted to apply the changes."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"docker compose up -d\n# Alternatively\ndocker compose restart prometheus\n"})})]}),(0,r.jsxs)(i.A,{value:"Dappnode",label:"Dappnode",children:[(0,r.jsx)(t.p,{children:"The last step in your DappNode setup is to add your Monitoring Credentials. This allows you to push distributed validator metrics to Obol\u2019s central Prometheus cluster for monitoring, analysis, and performance optimization of your Distributed Validator Cluster. It also facilitates easier troubleshooting with the Obol team when needed."}),(0,r.jsxs)("ol",{children:[(0,r.jsxs)("li",{children:["Get Prometheus credentials from Obol, which will look like:",(0,r.jsx)("pre",{children:"obol20tnt8UC..."})]}),(0,r.jsx)("li",{children:"Navigate to your Obol package in DappNode and go to the Config tab."}),(0,r.jsx)("img",{src:"/img/monitoringDappnode.png",alt:"Go to config tab"}),(0,r.jsx)("li",{children:(0,r.jsxs)(t.p,{children:["At the bottom of the page, add the credential token under ",(0,r.jsx)(t.strong,{children:"Prometheus Monitoring Credentials (optional)"}),", then click the ",(0,r.jsx)("b",{children:"Update"})," button."]})}),(0,r.jsxs)("li",{children:[(0,r.jsxs)(t.p,{children:["Return to the ",(0,r.jsx)("b",{children:"Info"})," tab, scroll down to the Containers section, and click the down arrow to view all container statuses. If the Prometheus container is stopped, please restart it."]}),(0,r.jsx)("img",{src:"/img/restart-dappnode-container.png",alt:"Restart containers"})]})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},7227:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(34164);const o={tabItem:"tabItem_Ymn6"};var a=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:n,children:t})}},49489:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(96540),o=n(34164),a=n(24245),i=n(56347),s=n(36494),l=n(62814),c=n(45167),u=n(69900);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const o=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,a=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,d]=m({queryString:n,groupId:o}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,u.Dv)(n);return[o,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:o}),v=(()=>{const e=c??b;return p({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=n(11062);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),o=s[n].value;o!==r&&(c(t),i(o))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,o.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,o.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(j,{...t,...e})]})}function k(e){const t=(0,f.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var r=n(96540);const o={},a=r.createContext(o);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);