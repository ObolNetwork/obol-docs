"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[26072],{95788:(e,t,a)=>{a.d(t,{Iu:()=>d,yg:()=>y});var i=a(11504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(a),h=n,y=c["".concat(s,".").concat(h)]||c[h]||p[h]||r;return a?i.createElement(y,o(o({ref:t},d),{},{components:a})):i.createElement(y,o({ref:t},d))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<r;u++)o[u]=a[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},82889:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=a(45072),n=(a(11504),a(95788));const r={sidebar_position:2,description:"Run a distributed validator cluster with the builder API (MEV-Boost)"},o="Run a cluster with MEV-Boost",l={unversionedId:"int/quickstart/advanced/quickstart-builder-api",id:"version-v0.17.1/int/quickstart/advanced/quickstart-builder-api",title:"Run a cluster with MEV-Boost",description:"Run a distributed validator cluster with the builder API (MEV-Boost)",source:"@site/versioned_docs/version-v0.17.1/int/quickstart/advanced/quickstart-builder-api.md",sourceDirName:"int/quickstart/advanced",slug:"/int/quickstart/advanced/quickstart-builder-api",permalink:"/docs/v0.17.1/int/quickstart/advanced/quickstart-builder-api",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.17.1/int/quickstart/advanced/quickstart-builder-api.md",tags:[],version:"v0.17.1",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Run a distributed validator cluster with the builder API (MEV-Boost)"},sidebar:"tutorialSidebar",previous:{title:"Create a DV using the SDK",permalink:"/docs/v0.17.1/int/quickstart/advanced/quickstart-sdk"},next:{title:"Split existing validator private keys",permalink:"/docs/v0.17.1/int/quickstart/advanced/quickstart-split"}},s={},u=[{value:"Getting started with Charon &amp; the Builder API",id:"getting-started-with-charon--the-builder-api",level:2},{value:"Run MEV Boost",id:"run-mev-boost",level:2},{value:"Builder API",id:"builder-api",level:2},{value:"Charon",id:"charon",level:3},{value:"Validator Clients",id:"validator-clients",level:3},{value:"Teku Validator Client",id:"teku-validator-client",level:4},{value:"Lighthouse Validator Client",id:"lighthouse-validator-client",level:4},{value:"Verify MEV Boost is functional",id:"verify-mev-boost-is-functional",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...a}=e;return(0,n.yg)(c,(0,i.c)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"run-a-cluster-with-mev-boost"},"Run a cluster with MEV-Boost"),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"Charon is in an alpha state and should be used with caution according to its ",(0,n.yg)("a",{parentName:"p",href:"https://obol.tech/terms.pdf"},"Terms of Use"),"."),(0,n.yg)("p",{parentName:"admonition"},"Charon's integration with MEV-Boost is also in an alpha state and requires a non-trivial amount of configuration to get working successfully. In the future, this process aims to be much more automated and seamless from a user's perspective.")),(0,n.yg)("p",null,"This quickstart guide focuses on configuring the builder API for Charon and supported Validator clients."),(0,n.yg)("h2",{id:"getting-started-with-charon--the-builder-api"},"Getting started with Charon & the Builder API"),(0,n.yg)("p",null,'Running a distributed validator cluster with the builder API enabled will give the validators in the cluster access to the builder network. This builder network is a network of "Block Builders"\nwho work with MEV searchers to produce the most valuable blocks a validator can propose.'),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://boost.flashbots.net/"},"MEV-Boost"),' is one such product from flashbots that enables you to ask multiple\nblock relays (who communicate with the "Block Builders") for blocks to propose. The block that pays the largest reward to the validator will be signed and returned to the relay for broadcasting to the wider\nnetwork. The end result for the validator is generally an increased APY as they receive some share of the MEV.'),(0,n.yg)("h2",{id:"run-mev-boost"},"Run MEV Boost"),(0,n.yg)("p",null,"Before running MEV-boost please check your cluster version, which can be found inside the cluster-lock.json file.\nIf you are using cluster-lock version 1.7.0 or higher release verions, Obol seamlessly accommodates all validator client implementations within a mev-enabled distributed validator cluster."),(0,n.yg)("p",null,"Currently, Charon with the builder API enabled, is compatible only with ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/ConsenSys/teku"},"Teku")," on any cluster-lock versions below 1.7.0."),(0,n.yg)("h2",{id:"builder-api"},"Builder API"),(0,n.yg)("p",null,"If you want to configure Charon and supported Validator clients to support the builder API feature, you can do that as well."),(0,n.yg)("p",null,"Currently, Charon with the builder API enabled, is compatible with all validator client implementations in a mev-enabled distributed validator cluster seamlessly."),(0,n.yg)("h3",{id:"charon"},"Charon"),(0,n.yg)("p",null,"Charon supports builder API with the ",(0,n.yg)("inlineCode",{parentName:"p"},"--builder-api")," flag. To use builder API, one simply needs to add this flag to the ",(0,n.yg)("inlineCode",{parentName:"p"},"charon run")," command:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"charon run --builder-api\n")),(0,n.yg)("h3",{id:"validator-clients"},"Validator Clients"),(0,n.yg)("h4",{id:"teku-validator-client"},"Teku Validator Client"),(0,n.yg)("p",null,"Configuring the Teku validator client with Charon can be done by following the same process outlined in the ",(0,n.yg)("a",{parentName:"p",href:"https://docs.teku.consensys.net/how-to/configure/use-proposer-config-file"},"Teku official guide"),"."),(0,n.yg)("p",null,"The validator client must be set up to use the ",(0,n.yg)("inlineCode",{parentName:"p"},"--validators-proposer-config")," ",(0,n.yg)("a",{parentName:"p",href:"https://docs.teku.consensys.net/reference/cli#validators-proposer-config"},"flag")," with a value equal to ",(0,n.yg)("inlineCode",{parentName:"p"},"http://$CHARON_ENDPOINT:3600/teku_proposer_config"),"."),(0,n.yg)("p",null,"Once the flag is set up, Obol distributed validators will be able to register to the builder network, submit blinded beacon blocks and gain a share of the MEV profits."),(0,n.yg)("h4",{id:"lighthouse-validator-client"},"Lighthouse Validator Client"),(0,n.yg)("p",null,"For lighthouse, configuring the VC with Charon can be done by following the same process outlined in the ",(0,n.yg)("a",{parentName:"p",href:"https://lighthouse-book.sigmaprime.io/builders.html"},"Lighthouse official guide"),"."),(0,n.yg)("p",null,"The validator client must be set up to use the ",(0,n.yg)("inlineCode",{parentName:"p"},"--builder-proposals")," ",(0,n.yg)("a",{parentName:"p",href:"https://lighthouse-book.sigmaprime.io/builders.html#how-to-connect-to-a-builder"},"flag")," with a value equal to ",(0,n.yg)("inlineCode",{parentName:"p"},"http://$CHARON_ENDPOINT:3600/proposer_config"),"."),(0,n.yg)("p",null,"Once the flag is set up, Obol distributed validators will be able to register to the builder network, submit blinded beacon blocks and gain a share of the MEV profits."),(0,n.yg)("h2",{id:"verify-mev-boost-is-functional"},"Verify MEV Boost is functional"),(0,n.yg)("p",null,"Once you have executed the above steps, you can verify if your setup is functional by reviewing your proposed blocks on ",(0,n.yg)("a",{parentName:"p",href:"https://beaconcha.in"},"beaconcha.in")," dashboards or via the Relay API endpoints."),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"Note that the mainnet block in the below description is taken only for representation, and not actually proposed by a distributed validator.")),(0,n.yg)("p",null,"As an example, if my validator was the block proposer for block ",(0,n.yg)("inlineCode",{parentName:"p"},"17370078")," on mainnet, I can review the following resources:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://beaconcha.in"},"Beaconcha.in"),":",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Consider this ",(0,n.yg)("a",{parentName:"li",href:"https://beaconcha.in/block/17370078"},"Mainnet block 17370078"),"."),(0,n.yg)("li",{parentName:"ul"},"If we check the ",(0,n.yg)("inlineCode",{parentName:"li"},"Block Extra Data")," field under ",(0,n.yg)("inlineCode",{parentName:"li"},"Execution Payload"),", we will see the tag ",(0,n.yg)("inlineCode",{parentName:"li"},"Illuminate Dmocratize Dstribute")," (Hex:",(0,n.yg)("inlineCode",{parentName:"li"},"0x496c6c756d696e61746520446d6f63726174697a6520447374726962757465"),")."),(0,n.yg)("li",{parentName:"ul"},"Relays will generally add a tag to the block. Since this block was submitted via the Flashbots Relay, as a result it has the tag."),(0,n.yg)("li",{parentName:"ul"},"All mainnet flashbots blocks have this tag ",(0,n.yg)("inlineCode",{parentName:"li"},"Illuminate Dmocratize Dstribute"),"."))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://flashbots.github.io/relay-specs/"},"Relay API"),":",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"If you navigate to the ",(0,n.yg)("inlineCode",{parentName:"li"},"Data API")," section on the Relay API page, you will see an endpoint labeled ",(0,n.yg)("inlineCode",{parentName:"li"},"/relay/v1/data/bidtraces/proposer_payload_delivered"),"."),(0,n.yg)("li",{parentName:"ul"},"You can add a query argument of ",(0,n.yg)("inlineCode",{parentName:"li"},"block_number")," to this call to see if a block was submitted via that Relay."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://boost-relay.flashbots.net/relay/v1/data/bidtraces/proposer_payload_delivered?block_number=17370078"},"Here")," is the query for the example block 17370078."),(0,n.yg)("li",{parentName:"ul"},"Blocks that have not been submitted to the Relay will return an empty array ",(0,n.yg)("inlineCode",{parentName:"li"},"[]"),".")))))}p.isMDXComponent=!0}}]);