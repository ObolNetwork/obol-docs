"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[44182],{10353:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=i(74848),o=i(28453);const r={sidebar_position:2,description:"Run a distributed validator cluster with the builder API (MEV-Boost)"},s="Run a cluster with MEV-Boost",a={id:"int/quickstart/advanced/quickstart-builder-api",title:"Run a cluster with MEV-Boost",description:"Run a distributed validator cluster with the builder API (MEV-Boost)",source:"@site/versioned_docs/version-v0.17.0/int/quickstart/advanced/quickstart-builder-api.md",sourceDirName:"int/quickstart/advanced",slug:"/int/quickstart/advanced/quickstart-builder-api",permalink:"/v0.17.0/int/quickstart/advanced/quickstart-builder-api",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.17.0/int/quickstart/advanced/quickstart-builder-api.md",tags:[],version:"v0.17.0",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Run a distributed validator cluster with the builder API (MEV-Boost)"},sidebar:"tutorialSidebar",previous:{title:"Create a DV using the SDK",permalink:"/v0.17.0/int/quickstart/advanced/quickstart-sdk"},next:{title:"Split existing validator private keys",permalink:"/v0.17.0/int/quickstart/advanced/quickstart-split"}},l={},d=[{value:"Getting started with Charon &amp; the Builder API",id:"getting-started-with-charon--the-builder-api",level:2},{value:"Run MEV Boost",id:"run-mev-boost",level:2},{value:"Builder API",id:"builder-api",level:2},{value:"Charon",id:"charon",level:3},{value:"Validator Clients",id:"validator-clients",level:3},{value:"Teku Validator Client",id:"teku-validator-client",level:4},{value:"Lighthouse Validator Client",id:"lighthouse-validator-client",level:4},{value:"Verify MEV Boost is functional",id:"verify-mev-boost-is-functional",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"run-a-cluster-with-mev-boost",children:"Run a cluster with MEV-Boost"})}),"\n",(0,n.jsxs)(t.admonition,{type:"warning",children:[(0,n.jsxs)(t.p,{children:["Charon is in an alpha state and should be used with caution according to its ",(0,n.jsx)(t.a,{href:"https://obol.tech/terms.pdf",children:"Terms of Use"}),"."]}),(0,n.jsx)(t.p,{children:"Charon's integration with MEV-Boost is also in an alpha state and requires a non-trivial amount of configuration to get working successfully. In the future, this process aims to be much more automated and seamless from a user's perspective."})]}),"\n",(0,n.jsx)(t.p,{children:"This quickstart guide focuses on configuring the builder API for Charon and supported Validator clients."}),"\n",(0,n.jsx)(t.h2,{id:"getting-started-with-charon--the-builder-api",children:"Getting started with Charon & the Builder API"}),"\n",(0,n.jsx)(t.p,{children:'Running a distributed validator cluster with the builder API enabled will give the validators in the cluster access to the builder network. This builder network is a network of "Block Builders"\nwho work with MEV searchers to produce the most valuable blocks a validator can propose.'}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://boost.flashbots.net/",children:"MEV-Boost"}),' is one such product from flashbots that enables you to ask multiple\nblock relays (who communicate with the "Block Builders") for blocks to propose. The block that pays the largest reward to the validator will be signed and returned to the relay for broadcasting to the wider\nnetwork. The end result for the validator is generally an increased APY as they receive some share of the MEV.']}),"\n",(0,n.jsx)(t.h2,{id:"run-mev-boost",children:"Run MEV Boost"}),"\n",(0,n.jsxs)(t.p,{children:["Currently, we don't support ",(0,n.jsx)(t.a,{href:"https://boost.flashbots.net/",children:"mev-boost"})," if you are running your charon cluster using ",(0,n.jsx)(t.a,{href:"https://github.com/ObolNetwork/charon-distributed-validator-node",children:"this repo"})," since the repo\nuses lodestar validator client which is not ",(0,n.jsx)(t.code,{children:"builder API"})," compatible with Charon."]}),"\n",(0,n.jsx)(t.p,{children:"We are working on a solution that enables the builder API feature irrespective of the choice of the Validator Client."}),"\n",(0,n.jsx)(t.h2,{id:"builder-api",children:"Builder API"}),"\n",(0,n.jsx)(t.p,{children:"If you want to configure Charon and supported Validator clients to support the builder API feature, you can do that as well."}),"\n",(0,n.jsxs)(t.p,{children:["Currently, Charon with the builder API enabled, is compatible only with ",(0,n.jsx)(t.a,{href:"https://github.com/ConsenSys/teku",children:"Teku"}),". Work is underway ",(0,n.jsx)(t.a,{href:"https://dvt.obol.tech/",children:"to support"})," all validator client implementations in a mev-enabled distributed validator cluster seamlessly."]}),"\n",(0,n.jsx)(t.h3,{id:"charon",children:"Charon"}),"\n",(0,n.jsxs)(t.p,{children:["Charon supports builder API with the ",(0,n.jsx)(t.code,{children:"--builder-api"})," flag. To use builder API, one simply needs to add this flag to the ",(0,n.jsx)(t.code,{children:"charon run"})," command:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"charon run --builder-api\n"})}),"\n",(0,n.jsx)(t.h3,{id:"validator-clients",children:"Validator Clients"}),"\n",(0,n.jsx)(t.h4,{id:"teku-validator-client",children:"Teku Validator Client"}),"\n",(0,n.jsxs)(t.p,{children:["Configuring the Teku validator client with Charon can be done by following the same process outlined in the ",(0,n.jsx)(t.a,{href:"https://docs.teku.consensys.net/how-to/configure/use-proposer-config-file",children:"Teku official guide"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The validator client must be set up to use the ",(0,n.jsx)(t.code,{children:"--validators-proposer-config"})," ",(0,n.jsx)(t.a,{href:"https://docs.teku.consensys.net/reference/cli#validators-proposer-config",children:"flag"})," with a value equal to ",(0,n.jsx)(t.code,{children:"http://$CHARON_ENDPOINT:3600/teku_proposer_config"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Once the flag is set up, Obol distributed validators will be able to register to the builder network, submit blinded beacon blocks and gain a share of the MEV profits."}),"\n",(0,n.jsx)(t.h4,{id:"lighthouse-validator-client",children:"Lighthouse Validator Client"}),"\n",(0,n.jsxs)(t.p,{children:["For Lighthouse, we are currently waiting on the following ",(0,n.jsx)(t.a,{href:"https://github.com/sigp/lighthouse/pull/4306",children:"PR"})," to be merged into their unstable branch to enable compatability, please review the PR's status."]}),"\n",(0,n.jsx)(t.h2,{id:"verify-mev-boost-is-functional",children:"Verify MEV Boost is functional"}),"\n",(0,n.jsxs)(t.p,{children:["Once you have executed the above steps, you can verify if your setup is functional by reviewing your proposed blocks on ",(0,n.jsx)(t.a,{href:"https://beaconcha.in",children:"beaconcha.in"})," dashboards or via the Relay API endpoints."]}),"\n",(0,n.jsxs)(t.admonition,{type:"warning",children:[(0,n.jsx)(t.p,{children:"Note that the mainnet block in the below description is taken only for representation, and not actually proposed by a distributed validator."}),(0,n.jsxs)(t.admonition,{type:"warning",children:[(0,n.jsxs)(t.p,{children:["As an example, if my validator was the block proposer for block ",(0,n.jsx)(t.code,{children:"17370078"})," on mainnet, I can review the following resources:"]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://beaconcha.in",children:"Beaconcha.in"}),":","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Consider this ",(0,n.jsx)(t.a,{href:"https://beaconcha.in/block/17370078",children:"Mainnet block 17370078"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["If we check the ",(0,n.jsx)(t.code,{children:"Block Extra Data"})," field under ",(0,n.jsx)(t.code,{children:"Execution Payload"}),", we will see the tag ",(0,n.jsx)(t.code,{children:"Illuminate Dmocratize Dstribute"})," (Hex:",(0,n.jsx)(t.code,{children:"0x496c6c756d696e61746520446d6f63726174697a6520447374726962757465"}),")."]}),"\n",(0,n.jsx)(t.li,{children:"Relays will generally add a tag to the block. Since this block was submitted via the Flashbots Relay, as a result it has the tag."}),"\n",(0,n.jsxs)(t.li,{children:["All mainnet flashbots blocks have this tag ",(0,n.jsx)(t.code,{children:"Illuminate Dmocratize Dstribute"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://flashbots.github.io/relay-specs/",children:"Relay API"}),":","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["If you navigate to the ",(0,n.jsx)(t.code,{children:"Data API"})," section on the Relay API page, you will see an endpoint labeled ",(0,n.jsx)(t.code,{children:"/relay/v1/data/bidtraces/proposer_payload_delivered"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["You can add a query argument of ",(0,n.jsx)(t.code,{children:"block_number"})," to this call to see if a block was submitted via that Relay."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://boost-relay.flashbots.net/relay/v1/data/bidtraces/proposer_payload_delivered?block_number=17370078",children:"Here"})," is the query for the example block 17370078."]}),"\n",(0,n.jsxs)(t.li,{children:["Blocks that have not been submitted to the Relay will return an empty array ",(0,n.jsx)(t.code,{children:"[]"}),"."]}),"\n"]}),"\n"]}),"\n"]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var n=i(96540);const o={},r=n.createContext(o);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);