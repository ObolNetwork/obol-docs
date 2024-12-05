"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[19908],{14207:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"int/quickstart/quickstart-builder-api","title":"Run a cluster with MEV-Boost","description":"Run a distributed validator cluster with the builder API (MEV-Boost)","source":"@site/versioned_docs/version-v0.10.1/int/quickstart/quickstart-builder-api.md","sourceDirName":"int/quickstart","slug":"/int/quickstart/quickstart-builder-api","permalink":"/v0.10.1/int/quickstart/quickstart-builder-api","draft":false,"unlisted":false,"editUrl":"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.10.1/int/quickstart/quickstart-builder-api.md","tags":[],"version":"v0.10.1","sidebarPosition":6,"frontMatter":{"sidebar_position":6,"description":"Run a distributed validator cluster with the builder API (MEV-Boost)"},"sidebar":"tutorialSidebar","previous":{"title":"Run a cluster alone","permalink":"/v0.10.1/int/quickstart/quickstart-alone"},"next":{"title":"Working groups","permalink":"/v0.10.1/int/working-groups"}}');var o=i(74848),n=i(28453);const s={sidebar_position:6,description:"Run a distributed validator cluster with the builder API (MEV-Boost)"},r="Run a cluster with MEV-Boost",l={},d=[{value:"Getting started with Charon &amp; the Builder API",id:"getting-started-with-charon--the-builder-api",level:2},{value:"Configuring Charon",id:"configuring-charon",level:2},{value:"Configuring Validator Clients",id:"configuring-validator-clients",level:2},{value:"Teku Validator Client",id:"teku-validator-client",level:3},{value:"Lighthouse Validator Client",id:"lighthouse-validator-client",level:3},{value:"Verify Charon + Builder API is Functional",id:"verify-charon--builder-api-is-functional",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"run-a-cluster-with-mev-boost",children:"Run a cluster with MEV-Boost"})}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsx)(t.p,{children:"Charon is in an early alpha state and is not ready to be run on mainnet. Charon's integration with MEV-Boost is also in an alpha state and requires a non-trivial amount of configuration to get working successfully. In future this process aims to be much more automated and seamless from the users perspective."})}),"\n",(0,o.jsx)(t.p,{children:"This quickstart guide focuses on configuring the builder API for a validator and assumes you already have a cluster up and running."}),"\n",(0,o.jsx)(t.h2,{id:"getting-started-with-charon--the-builder-api",children:"Getting started with Charon & the Builder API"}),"\n",(0,o.jsxs)(t.p,{children:['Running a distributed validator cluster with the builder API enabled will give the validators in the cluster access to the builder network. This builder network is a network of "Block Builders" who work with MEV searchers to produce the most valuable blocks a validator can propose. ',(0,o.jsx)(t.a,{href:"https://boost.flashbots.net/",children:"MEV-Boost"}),' is a product from flashbots that enables you to ask multiple block relays (who communicate with the "Block Builders") for blocks to propose. The block that pays the largest reward to the validator will be signed and returned to the relay for broadcasting to the wider network. The end result for the validator is generally an increased APY as they receive some share of the MEV.']}),"\n",(0,o.jsx)(t.h2,{id:"configuring-charon",children:"Configuring Charon"}),"\n",(0,o.jsxs)(t.p,{children:["To configure Charon to use the builder API you simply need to add one flag to the ",(0,o.jsx)(t.code,{children:"charon run"})," command."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"charon run --builder-api\n"})}),"\n",(0,o.jsx)(t.h2,{id:"configuring-validator-clients",children:"Configuring Validator Clients"}),"\n",(0,o.jsxs)(t.p,{children:["Currently Charon with the builder API enabled is comaptible with two validator clients, Teku (develop branch) & Lighthouse (unstable branch) and requires a decent amount of manual configuration. Work is underway ",(0,o.jsx)(t.a,{href:"https://github.com/ObolNetwork/charon#project-status",children:"to support"})," all validator client implementations in an mev-enabled distributed validator cluster seamlessly."]}),"\n",(0,o.jsx)(t.h3,{id:"teku-validator-client",children:"Teku Validator Client"}),"\n",(0,o.jsxs)(t.p,{children:["For now you must use the ",(0,o.jsx)(t.a,{href:"https://hub.docker.com/r/consensys/teku/tags",children:"develop branch / container image"})," of Teku to have access to the changes that enable compatibility."]}),"\n",(0,o.jsxs)(t.p,{children:["Configuring the Teku validator client with Charon follows exactly the same process as their ",(0,o.jsx)(t.a,{href:"https://hackmd.io/@StefanBratanov/BkMlo1RO9",children:"official guide"})," with 2 further conditions."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["First the validator client must be set up to use the ",(0,o.jsx)(t.code,{children:"proposerConfig.json"})," structure. This involves including the ",(0,o.jsx)(t.a,{href:"https://docs.teku.consensys.net/en/latest/Reference/CLI/CLI-Syntax/#validators-proposer-config",children:(0,o.jsx)(t.code,{children:"--validators-proposer-config"})})," flag on the validator client."]}),"\n",(0,o.jsxs)(t.li,{children:["Second the ",(0,o.jsx)(t.code,{children:"--validators-proposer-config"})," flag must be equal to ",(0,o.jsx)(t.code,{children:"http://$CHARON_ENDPOINT:3600/teku_proposer_config"})]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"With these 2 conditions in places Charon validators will be able to register to the builder network, submit blinded block and gain a share of the MEV profits."}),"\n",(0,o.jsx)(t.h3,{id:"lighthouse-validator-client",children:"Lighthouse Validator Client"}),"\n",(0,o.jsxs)(t.p,{children:["For Lighthouse we are currently waiting on the following ",(0,o.jsx)(t.a,{href:"https://github.com/sigp/lighthouse/pull/3445",children:"PR"})," to be merged into their unstable branch to enable compatability, please review the PR's status."]}),"\n",(0,o.jsxs)(t.p,{children:["If the PR has been merged Lighthouse can be used with Charon. You must use the ",(0,o.jsx)(t.a,{href:"https://hub.docker.com/r/sigp/lighthouse/tags",children:"unstable branch / container image"})," to have access to the changes that enable compatibility."]}),"\n",(0,o.jsxs)(t.p,{children:["Configuring the Lightouse validator client with Charon follows exactly the same process as their ",(0,o.jsx)(t.a,{href:"https://lighthouse-book.sigmaprime.io/builders.html",children:"official guide"})," with some additional conditions."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["The validator client must be set up to use a custom ",(0,o.jsx)(t.a,{href:"https://lighthouse-book.sigmaprime.io/validator-management.html",children:"validator_definitions.yml"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["The flag ",(0,o.jsx)(t.code,{children:"--builder-registration-timestamp-override"})," must be set and the assigned value must be the same across all validator clients."]}),"\n",(0,o.jsxs)(t.li,{children:["The custom validator_definitions.yml must be placed in the ",(0,o.jsx)(t.code,{children:"--validators-dir"})," of lighthouse."]}),"\n",(0,o.jsxs)(t.li,{children:["The custom validator_definitions.yml must follow the structure below, where ",(0,o.jsx)(t.code,{children:"voting_public_key"})," is the pubkeyshare on the validator client and ",(0,o.jsx)(t.code,{children:"builder_pubkey_override"})," is the associated aggregate pubkey the network will find. You can find these pubkeyshare to aggregate pubkey mapping in the ",(0,o.jsx)(t.code,{children:"cluster-lock.json"})," file created during the DKG process."]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"---\n- enabled: true\n  voting_public_key: 0xa6469d287f26ecb36049b79b408e25738a0e159980f32fb659174416b9e0e8f7f8ecc55d01a54528c16c138bb1201eaf\n  type: local_keystore\n  voting_keystore_path: /data/lighthouse/validator_keys/keystore-0.json\n  voting_keystore_password_path: /data/lighthouse/validator_keys/keystore-0.txt\n  suggested_fee_recipient: 0x000000000000000000000000dec0ded0b0115ace\n  gas_limit: 30000000\n  builder_proposals: true\n  builder_pubkey_override: 0xa878c8ec402799536f0b94967e578fdbcd84828f564d604f0db491979438357b797491399be1f22de8a44673f14c087e\n- enabled: true\n  voting_public_key: 0x821ec75ca12057b484906a492ea3448387065a9466c348e81e72f23139e7abdf2f38854cc9dea8d51ca615cbe15f9d2c\n  type: local_keystore\n  voting_keystore_path: /data/lighthouse/validator_keys/keystore-1.json\n  voting_keystore_password_path: /data/lighthouse/validator_keys/keystore-1.txt\n  suggested_fee_recipient: 0x000000000000000000000000dec0ded0b0115ace\n  gas_limit: 30000000\n  builder_proposals: true\n  builder_pubkey_override: 0x93e600b9836acda0e7781dc50268478b13c2a73fa470728b8e7fd06f31d62ddbdf831cbf5b7a828276a2218f2016a2fa\n- enabled: true\n  voting_public_key: 0xa5581286066c5251fbc7c2a6685a9ccce951ccb9b6e449a3f90c33c971dac9b297f9a7a3f9394c8a43822ff0f2cfded1\n  type: local_keystore\n  voting_keystore_path: /data/lighthouse/validator_keys/keystore-2.json\n  voting_keystore_password_path: /data/lighthouse/validator_keys/keystore-2.txt\n  suggested_fee_recipient: 0x000000000000000000000000dec0ded0b0115ace\n  gas_limit: 30000000\n  builder_proposals: true\n  builder_pubkey_override: 0x8793b522c8197c047b95b6f4b3c7fd1582a2466ff96eb274ee51fc699c99cbdfeb41cf576bbbbdecf2454527083edf34\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Note the pubkeyshares in the ",(0,o.jsx)(t.code,{children:"cluster-lock.json"})," are base64 encoded and decode to hex. Below is a decoding example for the first ",(0,o.jsx)(t.code,{children:"voting_public_key"})," seen above."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"echo pkadKH8m7LNgSbebQI4lc4oOFZmA8y+2WRdEFrng6Pf47MVdAaVFKMFsE4uxIB6v | base64 -d | hexdump -v -e '/1 \"%02x\" ' | (echo -n 0x && cat)\n\n-> 0xa6469d287f26ecb36049b79b408e25738a0e159980f32fb659174416b9e0e8f7f8ecc55d01a54528c16c138bb1201eaf\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Feel free to update the ",(0,o.jsx)(t.code,{children:"voting_keystore_path"}),", ",(0,o.jsx)(t.code,{children:"suggested_fee_recipient"})," etc. to whatever you have set up for your environment. Note that there either needs to be a different ",(0,o.jsx)(t.code,{children:"validator_definitions.yml"})," on each distributed validator based on the keys it holds or a single ",(0,o.jsx)(t.code,{children:"validator_definitions.yml"})," file can be used but you must ensure no collisions on the ",(0,o.jsx)(t.code,{children:"voting_keystore_path"})," & ",(0,o.jsx)(t.code,{children:"voting_keystore_password_path"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"verify-charon--builder-api-is-functional",children:"Verify Charon + Builder API is Functional"}),"\n",(0,o.jsx)(t.p,{children:"Once you have Charon and your Validator Client set up you can verify the set up is functional by reviewing your proposed blocks on Etherscan testnets or on via the Relay API endpoints."}),"\n",(0,o.jsx)(t.p,{children:"As an example if my validator was the block proposer for block 12853375 on Ropsten I can review the following resources."}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://ropsten.etherscan.io/block/12853375",children:"Etherscan Ropsten Block 12853375"}),", if we check the ",(0,o.jsx)(t.code,{children:"Extra Data"})," field on this page we will see the tag ",(0,o.jsx)(t.code,{children:"Flashbots flashblock (Hex:0x466c617368626f747320666c617368626c6f636b)"}),". Relays will generally add a tag to the block, this block was submitted via the Flashbots Relay and as a result it has the tag: ",(0,o.jsx)(t.code,{children:"Flashbots flashblock"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://flashbots.notion.site/Relay-API-Spec-5fb0819366954962bc02e81cb33840f5",children:"Relay Data API"}),", if you navigate to the ",(0,o.jsx)(t.code,{children:"Data API"})," section on the Relay Data API you will see an endpoint labeled ",(0,o.jsx)(t.code,{children:"proposerPayloadsDelivered"}),". You are able to add a query argument of ",(0,o.jsx)(t.code,{children:"block_number"})," to this call to see if a block was submitted via that Relay. ",(0,o.jsx)(t.a,{href:"https://builder-relay-ropsten.flashbots.net/relay/v1/data/bidtraces/proposer_payload_delivered?block_number=12853375",children:"Here"})," is the query for the example block 12853375. Blocks that have not been submitted to the Relay will return an empty array ",(0,o.jsx)(t.code,{children:"[]"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>r});var a=i(96540);const o={},n=a.createContext(o);function s(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);