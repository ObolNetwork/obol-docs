"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[16776],{95788:(e,t,a)=>{a.d(t,{Iu:()=>c,yg:()=>b});var r=a(11504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),h=n,b=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return a?r.createElement(b,l(l({ref:t},c),{},{components:a})):r.createElement(b,l({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},22440:(e,t,a)=>{a.d(t,{c:()=>l});var r=a(11504),n=a(14971);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.c)(o.tabItem,l),hidden:a},t)}},86212:(e,t,a)=>{a.d(t,{c:()=>k});var r=a(45072),n=a(11504),o=a(14971),l=a(77288),i=a(55592),s=a(95068),u=a(30604),c=a(46432);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.Uz)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._M)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=p(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=b({queryString:a,groupId:r}),[d,y]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.IN)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),g=(()=>{const e=s??d;return h({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),y(e)}),[u,y,o]),tabValues:o}}var g=a(89788);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function m(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.MV)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),r=u[a].value;r!==i&&(d(t),s(r))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.c)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.c)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:p},l,{className:(0,o.c)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=y(e);return n.createElement("div",{className:(0,o.c)("tabs-container",f.tabList)},n.createElement(m,(0,r.c)({},e,t)),n.createElement(v,(0,r.c)({},e,t)))}function k(e){const t=(0,g.c)();return n.createElement(w,(0,r.c)({key:String(t)},e))}},52972:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=a(45072),n=(a(11504),a(95788)),o=a(86212),l=a(22440);const i={sidebar_position:2,description:"Run a distributed validator cluster with the builder API (MEV-Boost)"},s="Enable MEV",u={unversionedId:"advanced/quickstart-builder-api",id:"advanced/quickstart-builder-api",title:"Enable MEV",description:"Run a distributed validator cluster with the builder API (MEV-Boost)",source:"@site/docs/advanced/quickstart-builder-api.md",sourceDirName:"advanced",slug:"/advanced/quickstart-builder-api",permalink:"/docs/next/advanced/quickstart-builder-api",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/docs/advanced/quickstart-builder-api.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Run a distributed validator cluster with the builder API (MEV-Boost)"},sidebar:"tutorialSidebar",previous:{title:"Create a DV using the SDK",permalink:"/docs/next/advanced/quickstart-sdk"},next:{title:"Split existing validator private keys",permalink:"/docs/next/advanced/quickstart-split"}},c={},d=[{value:"Getting started with Charon &amp; the Builder API",id:"getting-started-with-charon--the-builder-api",level:2},{value:"Client configuration",id:"client-configuration",level:2},{value:"Charon",id:"charon",level:3},{value:"Consensus Clients",id:"consensus-clients",level:3},{value:"Validator Clients",id:"validator-clients",level:3},{value:"Verify your cluster is correctly configured",id:"verify-your-cluster-is-correctly-configured",level:2}],p={toc:d},h="wrapper";function b(e){let{components:t,...a}=e;return(0,n.yg)(h,(0,r.c)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"enable-mev"},"Enable MEV"),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"Charon is in a beta state and should be used with caution according to its ",(0,n.yg)("a",{parentName:"p",href:"https://obol.tech/terms.pdf"},"Terms of Use"),".")),(0,n.yg)("p",null,"This quickstart guide focuses on configuring the builder API for Charon and supported validator and consensus clients."),(0,n.yg)("h2",{id:"getting-started-with-charon--the-builder-api"},"Getting started with Charon & the Builder API"),(0,n.yg)("p",null,'Running a distributed validator cluster with the builder API enabled will give the validators in the cluster access to the builder network. This builder network is a network of "Block Builders"\nwho work with MEV searchers to produce the most valuable blocks a validator can propose.'),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://boost.flashbots.net/"},"MEV-Boost"),' is one such product from flashbots that enables you to ask multiple\nblock relays (who communicate with the "Block Builders") for blocks to propose. The block that pays the largest reward to the validator will be signed and returned to the relay for broadcasting to the wider\nnetwork. The end result for the validator is generally an increased APR as they receive some share of the MEV.'),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"Before completing this guide, please check your cluster version, which can be found inside the ",(0,n.yg)("inlineCode",{parentName:"p"},"cluster-lock.json")," file. If you are using cluster-lock version ",(0,n.yg)("inlineCode",{parentName:"p"},"1.7.0")," or higher release verions, Obol seamlessly accommodates all validator client implementations within a mev-enabled distributed validator cluster."),(0,n.yg)("p",{parentName:"admonition"},"For clusters with a cluster-lock version ",(0,n.yg)("inlineCode",{parentName:"p"},"1.6.0")," and below, charon is compatible only with ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/ConsenSys/teku"},"Teku"),". Use the version history feature of this documentation to see the instructions for configuring a cluster in that manner (",(0,n.yg)("inlineCode",{parentName:"p"},"v0.16.0"),").")),(0,n.yg)("h2",{id:"client-configuration"},"Client configuration"),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"You need to add CLI flags to your consensus client, charon client, and validator client, to enable the builder API."),(0,n.yg)("p",{parentName:"admonition"},"You need all operators in the cluster to have their nodes properly configured to use the builder API, or you risk missing a proposal. ")),(0,n.yg)("h3",{id:"charon"},"Charon"),(0,n.yg)("p",null,"Charon supports builder API with the ",(0,n.yg)("inlineCode",{parentName:"p"},"--builder-api")," flag. To use builder API, one simply needs to add this flag to the ",(0,n.yg)("inlineCode",{parentName:"p"},"charon run")," command:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"charon run --builder-api\n")),(0,n.yg)("h3",{id:"consensus-clients"},"Consensus Clients"),(0,n.yg)("p",null,"The following flags need to be configured on your chosen consensus client. A flashbots relay URL is provided for example purposes, you should choose a relay that suits your preferences from ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/eth-educators/ethstaker-guides/blob/main/MEV-relay-list.md#mev-relay-list-for-mainnet"},"this list"),". "),(0,n.yg)(o.c,{groupId:"consensus-clients",mdxType:"Tabs"},(0,n.yg)(l.c,{value:"teku",label:"Teku",default:!0,mdxType:"TabItem"},"Teku can communicate with a single relay directly:",(0,n.yg)("pre",null,(0,n.yg)("code",null,String.raw`--builder-endpoint="https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c0205200f2f8e2e3ad3b71d3499c54ad14d6c21b41a37ae@boost-relay.flashbots.net"`)),"Or you can configure it to communicate with a local ",(0,n.yg)("a",{href:"https://github.com/flashbots/mev-boost",target:"_blank"},"MEV-boost")," sidecar to configure multiple relays:",(0,n.yg)("pre",null,(0,n.yg)("code",null,String.raw`--builder-endpoint=http://mev-boost:18550`))),(0,n.yg)(l.c,{value:"lighthouse",label:"Lighthouse",mdxType:"TabItem"},"Lighthouse can communicate with a single relay directly:",(0,n.yg)("pre",null,(0,n.yg)("code",null,String.raw`lighthouse bn --builder "https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c0205200f2f8e2e3ad3b71d3499c54ad14d6c21b41a37ae@boost-relay.flashbots.net"`)),"Or you can configure it to communicate with a local ",(0,n.yg)("a",{href:"https://github.com/flashbots/mev-boost",target:"_blank"},"MEV-boost")," sidecar to configure multiple relays:",(0,n.yg)("pre",null,(0,n.yg)("code",null,String.raw`lighthouse bn --builder "http://mev-boost:18550"`))),(0,n.yg)(l.c,{value:"prysm",label:"Prysm",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",null,String.raw`prysm beacon-chain --http-mev-relay "https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c0205200f2f8e2e3ad3b71d3499c54ad14d6c21b41a37ae@boost-relay.flashbots.net"`))),(0,n.yg)(l.c,{value:"nimbus",label:"Nimbus",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",null,String.raw`--payload-builder=true --payload-builder-url="https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c0205200f2f8e2e3ad3b71d3499c54ad14d6c21b41a37ae@boost-relay.flashbots.net"`)),"You should also consider adding ",(0,n.yg)("code",null,"--local-block-value-boost 3")," as a flag, to favour locally built blocks if they are withing 3% in value of the relay block, to improve the chances of a successful proposal."),(0,n.yg)(l.c,{value:"lodestar",label:"Lodestar",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",null,String.raw`--builder --builder.urls "https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c0205200f2f8e2e3ad3b71d3499c54ad14d6c21b41a37ae@boost-relay.flashbots.net"`)))),(0,n.yg)("h3",{id:"validator-clients"},"Validator Clients"),(0,n.yg)("p",null,"The following flags need to be configured on your chosen validator client"),(0,n.yg)(o.c,{groupId:"validator-clients",mdxType:"Tabs"},(0,n.yg)(l.c,{value:"teku",label:"Teku",default:!0,mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",null,String.raw`teku validator-client --validators-builder-registration-default-enabled=true`))),(0,n.yg)(l.c,{value:"lighthouse",label:"Lighthouse",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",null,String.raw`lighthouse vc --builder-proposals`))),(0,n.yg)(l.c,{value:"prysm",label:"Prysm",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",null,String.raw`prysm validator --enable-builder`))),(0,n.yg)(l.c,{value:"nimbus",label:"Nimbus",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",null,String.raw`--payload-builder=true`))),(0,n.yg)(l.c,{value:"lodestar",label:"Lodestar",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",null,String.raw`--builder="true" --builder.selection="builderonly"`)))),(0,n.yg)("h2",{id:"verify-your-cluster-is-correctly-configured"},"Verify your cluster is correctly configured"),(0,n.yg)("p",null,"It can be difficult to confirm everything is configured correctly with your cluster until a proposal opportunity arrives, but here are some things you can check. "),(0,n.yg)("p",null,"When your cluster is running, you should see if charon is logging something like this each epoch:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'13:10:47.094 INFO bcast      Successfully submitted validator registration to beacon node {"delay": "24913h10m12.094667699s", "pubkey": "84b_713", "duty": "1/builder_registration"}\n')),(0,n.yg)("p",null,"This indicates that your charon node is successfully registering with the relay for a blinded block when the time comes. "),(0,n.yg)("p",null,"If you are using the ",(0,n.yg)("a",{parentName:"p",href:"https://relay.ultrasound.money"},"ultrasound relay"),", you can enter your cluster's distributed validator public key(s) into their website, to confirm they also see the validator as correctly registered. "),(0,n.yg)("p",null,"You should check that your validator client's logs look healthy, and ensure that you haven't added a ",(0,n.yg)("inlineCode",{parentName:"p"},"fee-recipient")," address that conflicts with what has been selected by your cluster in your cluster-lock file, as that may prevent your validator from producing a signature for the block when the opportunity arises. You should also confirm the same for all of the other peers in your cluster. "),(0,n.yg)("p",null,"Once a proposal has been made, you should look at the ",(0,n.yg)("inlineCode",{parentName:"p"},"Block Extra Data")," field under ",(0,n.yg)("inlineCode",{parentName:"p"},"Execution Payload")," for the block on ",(0,n.yg)("a",{parentName:"p",href:"https://beaconcha.in/block/18450364"},"Beaconcha.in"),", and confirm there is text present, this generally suggests the block came from a builder, and was not a locally constructed block."))}b.isMDXComponent=!0}}]);