"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[91471],{3789:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"int/quickstart/activate-dv","title":"Activate a DV","description":"Activate the Distributed Validator using the deposit contract","source":"@site/versioned_docs/version-v0.18.0/int/quickstart/activate-dv.md","sourceDirName":"int/quickstart","slug":"/int/quickstart/activate-dv","permalink":"/v0.18.0/int/quickstart/activate-dv","draft":false,"unlisted":false,"editUrl":"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.18.0/int/quickstart/activate-dv.md","tags":[],"version":"v0.18.0","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"description":"Activate the Distributed Validator using the deposit contract"},"sidebar":"tutorialSidebar","previous":{"title":"Using the CLI","permalink":"/v0.18.0/int/quickstart/group/quickstart-cli"},"next":{"title":"Update a DV","permalink":"/v0.18.0/int/quickstart/update"}}');var r=a(74848),i=a(28453),o=a(49489),s=a(7227);const l={sidebar_position:4,description:"Activate the Distributed Validator using the deposit contract"},c="Activate a DV",u={},d=[];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"activate-a-dv",children:"Activate a DV"})}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["Charon is in a beta state and should be used with caution according to its ",(0,r.jsx)(t.a,{href:"https://obol.tech/terms.pdf",children:"Terms of Use"}),"."]})}),"\n",(0,r.jsx)(t.p,{children:"If you have successfully created a distributed validator and you are ready to activate it, congratulations! \ud83c\udf89"}),"\n",(0,r.jsxs)(t.p,{children:["Once you have connected all of your charon clients together, synced all of your ethereum nodes such that the monitoring indicates that they are all healthy and ready to operate, ",(0,r.jsx)(t.strong,{children:"ONE operator"})," may proceed to deposit and activate the validator(s)."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"deposit-data.json"})," to be used to deposit will be located in each operator's ",(0,r.jsx)(t.code,{children:".charon"})," folder. The copies across every node should be identical and any of them can be uploaded."]}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["If you are being given a ",(0,r.jsx)(t.code,{children:"deposit-data.json"})," file that you didn't generate yourself, please take extreme care to ensure this operator has not given you a malicious ",(0,r.jsx)(t.code,{children:"deposit-data.json"})," file that is not the one you expect. Cross reference the files from multiple operators if there is any doubt. Activating the wrong validator or an invalid deposit could result in complete theft or loss of funds."]})}),"\n",(0,r.jsx)(t.p,{children:"Use any of the following tools to deposit. Please use the third-party tools at your own risk and always double check the staking contract address."}),"\n",(0,r.jsxs)(o.A,{groupId:"network",children:[(0,r.jsx)(s.A,{value:"go\xebrli",label:"Go\xebrli",default:!0,children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://goerli.launchpad.obol.tech/",target:"_blank",children:"Obol Distributed Validator Launchpad"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://goerli.launchpad.ethereum.org/en/",target:"_blank",children:"ethereum.org Staking Launchpad"})})]})}),(0,r.jsx)(s.A,{value:"mainnet",label:"Mainnet",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://beta.launchpad.obol.tech/deposit/advisories/",target:"_blank",children:"Obol Distributed Validator Launchpad"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://launchpad.ethereum.org/",target:"_blank",children:"ethereum.org Staking Launchpad"})}),(0,r.jsxs)("li",{children:["From a ",(0,r.jsx)("a",{href:"https://safe.global/",children:"SAFE"})," Multisig (Repeat these steps for every validator to deposit in your cluster)"]}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["From the SAFE UI, click on ",(0,r.jsx)("code",{children:"New Transaction"})," then ",(0,r.jsx)("code",{children:"Transaction Builder"})," to create a new custom transaction"]}),(0,r.jsxs)("li",{children:["Enter the beacon chain contract for Deposit on mainnet - you can find it ",(0,r.jsx)("a",{href:"https://ethereum.org/en/staking/deposit-contract/",children:"here"})]}),(0,r.jsx)("li",{children:"Fill the transaction information"}),(0,r.jsxs)("li",{children:["Set amount to ",(0,r.jsx)("code",{children:"32"})," in ETH"]}),(0,r.jsxs)("li",{children:["Use your ",(0,r.jsx)("code",{children:"deposit-data.json"})," to fill the required data : ",(0,r.jsx)("code",{children:"pubkey"}),",",(0,r.jsx)("code",{children:"withdrawal credentials"}),",",(0,r.jsx)("code",{children:"signature"}),",",(0,r.jsx)("code",{children:"deposit_data_root"}),". Make sure to prefix the input with ",(0,r.jsx)("code",{children:"0x"})," to format them in bytes"]}),(0,r.jsxs)("li",{children:["Click on ",(0,r.jsx)("code",{children:"Add transaction"})]}),(0,r.jsxs)("li",{children:["Click on ",(0,r.jsx)("code",{children:"Create Batch"})]}),(0,r.jsxs)("li",{children:["Click on ",(0,r.jsx)("code",{children:"Send Batch"}),", you can click on Simulate to check if the transaction will execute successfully"]}),(0,r.jsx)("li",{children:"Get the minimum threshold of signatures from the other addresses and execute the custom transaction"})]})]})})]}),"\n",(0,r.jsx)(t.p,{children:"The activation process can take a minimum of 16 hours, with the maximum time to activation being dictated by the length of the activation queue, which can be weeks."})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},7227:(e,t,a)=>{a.d(t,{A:()=>o});a(96540);var n=a(34164);const r={tabItem:"tabItem_Ymn6"};var i=a(74848);function o(e){let{children:t,hidden:a,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,o),hidden:a,children:t})}},49489:(e,t,a)=>{a.d(t,{A:()=>k});var n=a(96540),r=a(34164),i=a(24245),o=a(56347),s=a(36494),l=a(62814),c=a(45167),u=a(69900);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,i=h(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,d]=f({queryString:a,groupId:r}),[m,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,u.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:r}),v=(()=>{const e=c??m;return p({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=a(11062);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=a(74848);function g(e){let{className:t,block:a,selectedValue:n,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const t=e.currentTarget,a=l.indexOf(t),r=s[a].value;r!==n&&(c(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:s.map((e=>{let{value:t,label:a,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function j(e){let{lazy:t,children:a,selectedValue:i}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function k(e){const t=(0,b.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>s});var n=a(96540);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);