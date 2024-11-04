"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[62346],{25760:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var a=r(74848),n=r(28453),i=r(49489),s=r(7227);const o={sidebar_position:4,description:"Create an EigenLayer Distributed Validator to enable distributed restaking."},l="Create an EigenLayer DV",d={id:"advanced/quickstart-eigenpod",title:"Create an EigenLayer DV",description:"Create an EigenLayer Distributed Validator to enable distributed restaking.",source:"@site/docs/advanced/quickstart-eigenpod.mdx",sourceDirName:"advanced",slug:"/advanced/quickstart-eigenpod",permalink:"/docs/next/advanced/quickstart-eigenpod",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/docs/advanced/quickstart-eigenpod.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Create an EigenLayer Distributed Validator to enable distributed restaking."},sidebar:"tutorialSidebar",previous:{title:"Create a DV using the SDK",permalink:"/docs/next/advanced/quickstart-sdk"},next:{title:"Create a Lido CSM DV",permalink:"/docs/next/advanced/lido-csm"}},c={},u=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Create a SAFE to own the EigenPod",id:"create-a-safe-to-own-the-eigenpod",level:2},{value:"Create an EigenPod",id:"create-an-eigenpod",level:2},{value:"Create a Splitter for the block reward",id:"create-a-splitter-for-the-block-reward",level:2},{value:"Create the DV cluster invite",id:"create-the-dv-cluster-invite",level:2},{value:"Deposit and restake your Distributed Validator",id:"deposit-and-restake-your-distributed-validator",level:2}];function h(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"create-an-eigenlayer-dv",children:"Create an EigenLayer DV"})}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsx)(t.p,{children:"The Obol-SDK is in a beta state and should be used with caution. Ensure you validate all important data."})}),"\n",(0,a.jsxs)(t.p,{children:["This is a walkthrough of creating a distributed validator cluster pointing to an ",(0,a.jsx)(t.a,{href:"https://eigenlayer.xyz/",children:"EigenLayer"})," ",(0,a.jsx)(t.a,{href:"https://docs.eigenlayer.xyz/eigenlayer/restaking-guides/restaking-user-guide/native-restaking/create-eigenpod-and-set-withdrawal-credentials/",children:"EigenPod"}),", using the ",(0,a.jsx)(t.a,{href:"/docs/next/dvl/intro",children:"DV Launchpad"})," and other applications."]}),"\n",(0,a.jsx)(t.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The Ethereum addresses or ENS names for the node operators in the cluster. (Currently the DV Launchpad only supports Metamask or equivalent injected web3 browser wallets.)"}),"\n",(0,a.jsxs)(t.li,{children:["If creating more than one validator, the ability to use the ",(0,a.jsx)(t.a,{href:"/docs/next/advanced/quickstart-sdk",children:"obol-sdk"})," is required."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"create-a-safe-to-own-the-eigenpod",children:"Create a SAFE to own the EigenPod"}),"\n",(0,a.jsxs)(t.p,{children:["Deploy a ",(0,a.jsx)(t.a,{href:"https://app.safe.global/",children:"SAFE"})," with the addresses of the node operators as signers. A reasonable signing threshold is the same as a cluster (>2/3rds) but use good judgement if a different threshold or signer set suits your use case. The principal ether for these validators will be returned to this address."]}),"\n",(0,a.jsx)(t.h2,{id:"create-an-eigenpod",children:"Create an EigenPod"}),"\n",(0,a.jsxs)(t.p,{children:['Select the "Create EigenPod" option on the ',(0,a.jsx)(t.a,{href:"https://app.eigenlayer.xyz/",children:"EigenLayer App"}),"'s 'Restake' page, using the created SAFE account via WalletConnect. Note the EigenPod's address."]}),"\n",(0,a.jsx)(t.h2,{id:"create-a-splitter-for-the-block-reward",children:"Create a Splitter for the block reward"}),"\n",(0,a.jsxs)(t.p,{children:["Create a Splitter on ",(0,a.jsx)(t.a,{href:"https://app.splits.org/",children:"splits.org"}),", to divide the block reward and MEV amongst the operators. Note the split's address."]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["To be recognised as a part of Obol's ",(0,a.jsx)(t.a,{href:"https://blog.obol.tech/1-percent-for-decentralisation/",children:"1% for Decentralisation"})," campaign, you must contribute 3% of execution layer rewards by setting ",(0,a.jsx)(t.a,{href:"https://etherscan.io/address/0xDe5aE4De36c966747Ea7DF13BD9589642e2B1D0d",children:"this address"})," as a recipient on your split. Upcoming Obol EigenPods will support contributing 1% of total rewards instead of 3% of only execution rewards."]})}),"\n",(0,a.jsx)(t.h2,{id:"create-the-dv-cluster-invite",children:"Create the DV cluster invite"}),"\n",(0,a.jsx)(t.p,{children:"With these contracts deployed, you can now create the DV cluster invitation to send to Node Operators, this can be done through the DV Launchpad or the Obol SDK."}),"\n",(0,a.jsxs)(i.A,{groupId:"configure-eigenpod",children:[(0,a.jsx)(s.A,{value:"launchpad",label:"DV Launchpad",default:!0,children:(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:['Use the "Create a cluster with a group" ',(0,a.jsx)("a",{href:"../start/quickstart_group",children:"flow"})," on the ",(0,a.jsx)("a",{href:"../dvl/intro",children:"DV Launchpad"}),"."]}),(0,a.jsx)("li",{children:"Choose a cluster name and invite your operator's addresses."}),(0,a.jsx)("li",{children:'When setting the withdrawal credentials, select "Custom".'}),(0,a.jsx)("li",{children:'For "Withdrawal Address", set the EigenPod contract address.'}),(0,a.jsx)("li",{children:'For "Fee Recipient", set the Split contract address.'}),(0,a.jsx)("li",{children:"Continue the process of creating a cluster normally, share the invitation link with the operators and have them complete the Distributed Key Generation ceremony."})]})}),(0,a.jsx)(s.A,{value:"sdk",label:"SDK",children:(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:["If you are creating a cluster with more than one validator, you will need to craft the cluster invitation with the ",(0,a.jsx)("a",{href:"https://www.npmjs.com/package/@obolnetwork/obol-sdk",target:"_blank",children:"SDK"}),"."]}),(0,a.jsxs)("li",{children:["Follow the  ",(0,a.jsx)("a",{href:"./quickstart-sdk",children:"Create a cluster using the SDK"})," guide."]}),(0,a.jsxs)("li",{children:["For ",(0,a.jsx)("code",{children:"withdrawal_address"}),", set the EigenPod contract address."]}),(0,a.jsxs)("li",{children:["For ",(0,a.jsx)("code",{children:"fee_recipient_address"}),", set the Split contract address."]}),(0,a.jsx)("li",{children:"Continue the process of creating the cluster as per the guide, share the invitation link with the operators and have them complete the Distributed Key Generation ceremony."})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"deposit-and-restake-your-distributed-validator",children:"Deposit and restake your Distributed Validator"}),"\n",(0,a.jsxs)(t.p,{children:["Once you have completed the DKG ceremony, you can continue the flow on the EigenLayer app to activate these validators and restake them. Consult the EigenLayer ",(0,a.jsx)(t.a,{href:"https://docs.eigenlayer.xyz/eigenlayer/restaking-guides/restaking-user-guide/native-restaking/create-eigenpod-and-set-withdrawal-credentials/enable-restaking",children:"documentation"})," to continue the process."]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},7227:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var a=r(34164);const n={tabItem:"tabItem_Ymn6"};var i=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,s),hidden:r,children:t})}},49489:(e,t,r)=>{r.d(t,{A:()=>w});var a=r(96540),n=r(34164),i=r(24245),s=r(56347),o=r(36494),l=r(62814),d=r(45167),c=r(69900);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,i=h(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[d,u]=g({queryString:r,groupId:n}),[b,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,c.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:n}),v=(()=>{const e=d??b;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=r(11062);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(74848);function x(e){let{className:t,block:r,selectedValue:a,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),n=o[r].value;n!==a&&(d(t),s(n))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:u,onClick:c,...i,className:(0,n.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:i}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function j(e){const t=b(e);return(0,m.jsxs)("div",{className:(0,n.A)("tabs-container",v.tabList),children:[(0,m.jsx)(x,{...t,...e}),(0,m.jsx)(y,{...t,...e})]})}function w(e){const t=(0,f.A)();return(0,m.jsx)(j,{...e,children:u(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>o});var a=r(96540);const n={},i=a.createContext(n);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);