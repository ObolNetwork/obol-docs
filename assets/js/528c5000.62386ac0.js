"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[4138],{21691:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(74848),a=r(28453),i=r(49489),s=r(7227);const o={sidebar_position:2,description:"Run a distributed validator cluster with the builder API (MEV-Boost)"},l="Run a cluster with MEV enabled",c={id:"int/quickstart/advanced/quickstart-builder-api",title:"Run a cluster with MEV enabled",description:"Run a distributed validator cluster with the builder API (MEV-Boost)",source:"@site/versioned_docs/version-v0.19.0/int/quickstart/advanced/quickstart-builder-api.md",sourceDirName:"int/quickstart/advanced",slug:"/int/quickstart/advanced/quickstart-builder-api",permalink:"/docs/v0.19.0/int/quickstart/advanced/quickstart-builder-api",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.19.0/int/quickstart/advanced/quickstart-builder-api.md",tags:[],version:"v0.19.0",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Run a distributed validator cluster with the builder API (MEV-Boost)"},sidebar:"tutorialSidebar",previous:{title:"Create a DV using the SDK",permalink:"/docs/v0.19.0/int/quickstart/advanced/quickstart-sdk"},next:{title:"Split existing validator private keys",permalink:"/docs/v0.19.0/int/quickstart/advanced/quickstart-split"}},d={},u=[{value:"Getting started with Charon &amp; the Builder API",id:"getting-started-with-charon--the-builder-api",level:2},{value:"Client configuration",id:"client-configuration",level:2},{value:"Charon",id:"charon",level:3},{value:"Consensus Clients",id:"consensus-clients",level:3},{value:"Validator Clients",id:"validator-clients",level:3},{value:"Verify your cluster is correctly configured",id:"verify-your-cluster-is-correctly-configured",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"run-a-cluster-with-mev-enabled",children:"Run a cluster with MEV enabled"})}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["Charon is in a beta state and should be used with caution according to its ",(0,n.jsx)(t.a,{href:"https://obol.tech/terms.pdf",children:"Terms of Use"}),"."]})}),"\n",(0,n.jsx)(t.p,{children:"This quickstart guide focuses on configuring the builder API for Charon and supported validator and consensus clients."}),"\n",(0,n.jsx)(t.h2,{id:"getting-started-with-charon--the-builder-api",children:"Getting started with Charon & the Builder API"}),"\n",(0,n.jsx)(t.p,{children:'Running a distributed validator cluster with the builder API enabled will give the validators in the cluster access to the builder network. This builder network is a network of "Block Builders"\nwho work with MEV searchers to produce the most valuable blocks a validator can propose.'}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://boost.flashbots.net/",children:"MEV-Boost"}),' is one such product from flashbots that enables you to ask multiple\nblock relays (who communicate with the "Block Builders") for blocks to propose. The block that pays the largest reward to the validator will be signed and returned to the relay for broadcasting to the wider\nnetwork. The end result for the validator is generally an increased APR as they receive some share of the MEV.']}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsx)(t.mdxAdmonitionTitle,{}),(0,n.jsxs)(t.p,{children:["Before completing this guide, please check your cluster version, which can be found inside the ",(0,n.jsx)(t.code,{children:"cluster-lock.json"})," file. If you are using cluster-lock version ",(0,n.jsx)(t.code,{children:"1.7.0"})," or higher release verions, Obol seamlessly accommodates all validator client implementations within a mev-enabled distributed validator cluster."]}),(0,n.jsxs)(t.p,{children:["For clusters with a cluster-lock version ",(0,n.jsx)(t.code,{children:"1.6.0"})," and below, charon is compatible only with ",(0,n.jsx)(t.a,{href:"https://github.com/ConsenSys/teku",children:"Teku"}),". Use the version history feature of this documentation to see the instructions for configuring a cluster in that manner (",(0,n.jsx)(t.code,{children:"v0.16.0"}),")."]})]}),"\n",(0,n.jsx)(t.h2,{id:"client-configuration",children:"Client configuration"}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsx)(t.p,{children:"You need to add CLI flags to your consensus client, charon client, and validator client, to enable the builder API."}),(0,n.jsx)(t.p,{children:"You need all operators in the cluster to have their nodes properly configured to use the builder API, or you risk missing a proposal."})]}),"\n",(0,n.jsx)(t.h3,{id:"charon",children:"Charon"}),"\n",(0,n.jsxs)(t.p,{children:["Charon supports builder API with the ",(0,n.jsx)(t.code,{children:"--builder-api"})," flag. To use builder API, one simply needs to add this flag to the ",(0,n.jsx)(t.code,{children:"charon run"})," command:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"charon run --builder-api\n"})}),"\n",(0,n.jsx)(t.h3,{id:"consensus-clients",children:"Consensus Clients"}),"\n",(0,n.jsxs)(t.p,{children:["The following flags need to be configured on your chosen consensus client. A flashbots relay URL is provided for example purposes, you should choose a relay that suits your preferences from ",(0,n.jsx)(t.a,{href:"https://github.com/eth-educators/ethstaker-guides/blob/main/MEV-relay-list.md#mev-relay-list-for-mainnet",children:"this list"}),"."]}),"\n",(0,n.jsxs)(i.A,{groupId:"consensus-clients",children:[(0,n.jsxs)(s.A,{value:"teku",label:"Teku",default:!0,children:[(0,n.jsx)(t.p,{children:"Teku can communicate with a single relay directly:"}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{children:String.raw`--builder-endpoint="https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c0205200f2f8e2e3ad3b71d3499c54ad14d6c21b41a37ae@boost-relay.flashbots.net"`})}),(0,n.jsxs)(t.p,{children:["Or you can configure it to communicate with a local ",(0,n.jsx)("a",{href:"https://github.com/flashbots/mev-boost",target:"_blank",children:"MEV-boost"})," sidecar to configure multiple relays:"]}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{children:String.raw`--builder-endpoint=http://mev-boost:18550`})})]}),(0,n.jsxs)(s.A,{value:"lighthouse",label:"Lighthouse",children:[(0,n.jsx)(t.p,{children:"Lighthouse can communicate with a single relay directly:"}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{children:String.raw`lighthouse bn --builder "https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c0205200f2f8e2e3ad3b71d3499c54ad14d6c21b41a37ae@boost-relay.flashbots.net"`})}),(0,n.jsxs)(t.p,{children:["Or you can configure it to communicate with a local ",(0,n.jsx)("a",{href:"https://github.com/flashbots/mev-boost",target:"_blank",children:"MEV-boost"})," sidecar to configure multiple relays:"]}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{children:String.raw`lighthouse bn --builder "http://mev-boost:18550"`})})]}),(0,n.jsx)(s.A,{value:"prysm",label:"Prysm",children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{children:String.raw`prysm beacon-chain --http-mev-relay "https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c0205200f2f8e2e3ad3b71d3499c54ad14d6c21b41a37ae@boost-relay.flashbots.net"`})})}),(0,n.jsxs)(s.A,{value:"nimbus",label:"Nimbus",children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{children:String.raw`--payload-builder=true --payload-builder-url="https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c0205200f2f8e2e3ad3b71d3499c54ad14d6c21b41a37ae@boost-relay.flashbots.net"`})}),(0,n.jsxs)(t.p,{children:["You should also consider adding ",(0,n.jsx)("code",{children:"--local-block-value-boost 3"})," as a flag, to favour locally built blocks if they are withing 3% in value of the relay block, to improve the chances of a successful proposal."]})]}),(0,n.jsx)(s.A,{value:"lodestar",label:"Lodestar",children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{children:String.raw`--builder --builder.urls "https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c0205200f2f8e2e3ad3b71d3499c54ad14d6c21b41a37ae@boost-relay.flashbots.net"`})})})]}),"\n",(0,n.jsx)(t.h3,{id:"validator-clients",children:"Validator Clients"}),"\n",(0,n.jsx)(t.p,{children:"The following flags need to be configured on your chosen validator client"}),"\n",(0,n.jsxs)(i.A,{groupId:"validator-clients",children:[(0,n.jsx)(s.A,{value:"teku",label:"Teku",default:!0,children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{children:String.raw`teku validator-client --validators-builder-registration-default-enabled=true`})})}),(0,n.jsx)(s.A,{value:"lighthouse",label:"Lighthouse",children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{children:String.raw`lighthouse vc --builder-proposals`})})}),(0,n.jsx)(s.A,{value:"prysm",label:"Prysm",children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{children:String.raw`prysm validator --enable-builder`})})}),(0,n.jsx)(s.A,{value:"nimbus",label:"Nimbus",children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{children:String.raw`--payload-builder=true`})})}),(0,n.jsx)(s.A,{value:"lodestar",label:"Lodestar",children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{children:String.raw`--builder="true" --builder.selection="builderonly"`})})})]}),"\n",(0,n.jsx)(t.h2,{id:"verify-your-cluster-is-correctly-configured",children:"Verify your cluster is correctly configured"}),"\n",(0,n.jsx)(t.p,{children:"It can be difficult to confirm everything is configured correctly with your cluster until a proposal opportunity arrives, but here are some things you can check."}),"\n",(0,n.jsx)(t.p,{children:"When your cluster is running, you should see if charon is logging something like this each epoch:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'13:10:47.094 INFO bcast      Successfully submitted validator registration to beacon node {"delay": "24913h10m12.094667699s", "pubkey": "84b_713", "duty": "1/builder_registration"}\n'})}),"\n",(0,n.jsx)(t.p,{children:"This indicates that your charon node is successfully registering with the relay for a blinded block when the time comes."}),"\n",(0,n.jsxs)(t.p,{children:["If you are using the ",(0,n.jsx)(t.a,{href:"https://relay.ultrasound.money",children:"ultrasound relay"}),", you can enter your cluster's distributed validator public key(s) into their website, to confirm they also see the validator as correctly registered."]}),"\n",(0,n.jsxs)(t.p,{children:["You should check that your validator client's logs look healthy, and ensure that you haven't added a ",(0,n.jsx)(t.code,{children:"fee-recipient"})," address that conflicts with what has been selected by your cluster in your cluster-lock file, as that may prevent your validator from producing a signature for the block when the opportunity arises. You should also confirm the same for all of the other peers in your cluster."]}),"\n",(0,n.jsxs)(t.p,{children:["Once a proposal has been made, you should look at the ",(0,n.jsx)(t.code,{children:"Block Extra Data"})," field under ",(0,n.jsx)(t.code,{children:"Execution Payload"})," for the block on ",(0,n.jsx)(t.a,{href:"https://beaconcha.in/block/18450364",children:"Beaconcha.in"}),", and confirm there is text present, this generally suggests the block came from a builder, and was not a locally constructed block."]})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},7227:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var i=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,s),hidden:r,children:t})}},49489:(e,t,r)=>{r.d(t,{A:()=>k});var n=r(96540),a=r(34164),i=r(24245),s=r(56347),o=r(36494),l=r(62814),c=r(45167),d=r(69900);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function b(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,i=h(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,u]=p({queryString:r,groupId:a}),[f,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,d.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:a}),v=(()=>{const e=c??f;return b({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!b({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,i]),tabValues:i}}var m=r(11062);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(74848);function y(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const t=e.currentTarget,r=l.indexOf(t),a=o[r].value;a!==n&&(c(t),s(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,a.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:i}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function j(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(y,{...t,...e}),(0,g.jsx)(x,{...t,...e})]})}function k(e){const t=(0,m.A)();return(0,g.jsx)(j,{...e,children:u(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>o});var n=r(96540);const a={},i=n.createContext(a);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);