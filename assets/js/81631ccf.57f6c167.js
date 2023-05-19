"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[58589],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(a),h=n,b=c["".concat(s,".").concat(h)]||c[h]||p[h]||o;return a?i.createElement(b,r(r({ref:t},d),{},{components:a})):i.createElement(b,r({ref:t},d))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,r[1]=l;for(var u=2;u<o;u++)r[u]=a[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},16902:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=a(87462),n=(a(67294),a(3905));const o={sidebar_position:3,description:"Run a distributed validator cluster with the builder API (MEV-Boost)"},r="Run a cluster with MEV-Boost",l={unversionedId:"int/quickstart/quickstart-builder-api",id:"version-v0.14.4/int/quickstart/quickstart-builder-api",title:"Run a cluster with MEV-Boost",description:"Run a distributed validator cluster with the builder API (MEV-Boost)",source:"@site/versioned_docs/version-v0.14.4/int/quickstart/quickstart-builder-api.md",sourceDirName:"int/quickstart",slug:"/int/quickstart/quickstart-builder-api",permalink:"/docs/v0.14.4/int/quickstart/quickstart-builder-api",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.14.4/int/quickstart/quickstart-builder-api.md",tags:[],version:"v0.14.4",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Run a distributed validator cluster with the builder API (MEV-Boost)"},sidebar:"tutorialSidebar",previous:{title:"Run a cluster alone",permalink:"/docs/v0.14.4/int/quickstart/quickstart-alone"},next:{title:"Run a cluster using the CLI",permalink:"/docs/v0.14.4/int/quickstart/quickstart-cli"}},s={},u=[{value:"Getting started with Charon &amp; the Builder API",id:"getting-started-with-charon--the-builder-api",level:2},{value:"Configuring Charon",id:"configuring-charon",level:2},{value:"Configuring Validator Clients",id:"configuring-validator-clients",level:2},{value:"Teku Validator Client",id:"teku-validator-client",level:3},{value:"Lighthouse Validator Client",id:"lighthouse-validator-client",level:3},{value:"Verify Charon + Builder API is Functional",id:"verify-charon--builder-api-is-functional",level:3}],d={toc:u};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"run-a-cluster-with-mev-boost"},"Run a cluster with MEV-Boost"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Charon is in an early alpha state and is not ready to be run on mainnet. "),(0,n.kt)("p",{parentName:"admonition"},"Charon's integration with MEV-Boost is also in an alpha state and requires a non-trivial amount of configuration to get working successfully. In future this process aims to be much more automated and seamless from the users perspective.")),(0,n.kt)("p",null,"This quickstart guide focuses on configuring the builder API for a validator and assumes you already ",(0,n.kt)("a",{parentName:"p",href:"/docs/v0.14.4/int/quickstart/"},"have a cluster up and running"),"."),(0,n.kt)("h2",{id:"getting-started-with-charon--the-builder-api"},"Getting started with Charon & the Builder API"),(0,n.kt)("p",null,'Running a distributed validator cluster with the builder API enabled will give the validators in the cluster access to the builder network. This builder network is a network of "Block Builders" who work with MEV searchers to produce the most valuable blocks a validator can propose. ',(0,n.kt)("a",{parentName:"p",href:"https://boost.flashbots.net/"},"MEV-Boost"),' is a product from flashbots that enables you to ask multiple block relays (who communicate with the "Block Builders") for blocks to propose. The block that pays the largest reward to the validator will be signed and returned to the relay for broadcasting to the wider network. The end result for the validator is generally an increased APY as they receive some share of the MEV.'),(0,n.kt)("h2",{id:"configuring-charon"},"Configuring Charon"),(0,n.kt)("p",null,"To configure Charon to use the builder API you simply need to add one flag to the ",(0,n.kt)("inlineCode",{parentName:"p"},"charon run")," command."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"charon run --builder-api\n")),(0,n.kt)("h2",{id:"configuring-validator-clients"},"Configuring Validator Clients"),(0,n.kt)("p",null,"Currently Charon with the builder API enabled is comaptible with two validator clients, Teku (develop branch) & Lighthouse (unstable branch) and requires a decent amount of manual configuration. Work is underway ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon#project-status"},"to support")," all validator client implementations in an mev-enabled distributed validator cluster seamlessly."),(0,n.kt)("h3",{id:"teku-validator-client"},"Teku Validator Client"),(0,n.kt)("p",null,"For now you must use the ",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/consensys/teku/tags"},"develop branch / container image")," of Teku to have access to the changes that enable compatibility."),(0,n.kt)("p",null,"Configuring the Teku validator client with Charon follows exactly the same process as their ",(0,n.kt)("a",{parentName:"p",href:"https://hackmd.io/@StefanBratanov/BkMlo1RO9"},"official guide")," with 2 further conditions."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"First the validator client must be set up to use the ",(0,n.kt)("inlineCode",{parentName:"li"},"proposerConfig.json")," structure. This involves including the ",(0,n.kt)("a",{parentName:"li",href:"https://docs.teku.consensys.net/en/latest/Reference/CLI/CLI-Syntax/#validators-proposer-config"},(0,n.kt)("inlineCode",{parentName:"a"},"--validators-proposer-config"))," flag on the validator client."),(0,n.kt)("li",{parentName:"ul"},"Second the ",(0,n.kt)("inlineCode",{parentName:"li"},"--validators-proposer-config")," flag must be equal to ",(0,n.kt)("inlineCode",{parentName:"li"},"http://$CHARON_ENDPOINT:3600/teku_proposer_config"))),(0,n.kt)("p",null,"With these 2 conditions in places Charon validators will be able to register to the builder network, submit blinded block and gain a share of the MEV profits."),(0,n.kt)("h3",{id:"lighthouse-validator-client"},"Lighthouse Validator Client"),(0,n.kt)("p",null,"For Lighthouse we are currently waiting on the following ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/sigp/lighthouse/pull/3445"},"PR")," to be merged into their unstable branch to enable compatability, please review the PR's status."),(0,n.kt)("p",null,"If the PR has been merged Lighthouse can be used with Charon. You must use the ",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/sigp/lighthouse/tags"},"unstable branch / container image")," to have access to the changes that enable compatibility."),(0,n.kt)("p",null,"Configuring the Lightouse validator client with Charon follows exactly the same process as their ",(0,n.kt)("a",{parentName:"p",href:"https://lighthouse-book.sigmaprime.io/builders.html"},"official guide")," with some additional conditions."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The validator client must be set up to use a custom ",(0,n.kt)("a",{parentName:"li",href:"https://lighthouse-book.sigmaprime.io/validator-management.html"},"validator_definitions.yml"),"."),(0,n.kt)("li",{parentName:"ul"},"The flag ",(0,n.kt)("inlineCode",{parentName:"li"},"--builder-registration-timestamp-override")," must be set and the assigned value must be the same across all validator clients."),(0,n.kt)("li",{parentName:"ul"},"The custom validator_definitions.yml must be placed in the ",(0,n.kt)("inlineCode",{parentName:"li"},"--validators-dir")," of lighthouse."),(0,n.kt)("li",{parentName:"ul"},"The custom validator_definitions.yml must follow the structure below, where ",(0,n.kt)("inlineCode",{parentName:"li"},"voting_public_key")," is the pubkeyshare on the validator client and ",(0,n.kt)("inlineCode",{parentName:"li"},"builder_pubkey_override")," is the associated aggregate pubkey the network will find. You can find these pubkeyshare to aggregate pubkey mapping in the ",(0,n.kt)("inlineCode",{parentName:"li"},"cluster-lock.json")," file created during the DKG process.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"---\n- enabled: true\n  voting_public_key: 0xa6469d287f26ecb36049b79b408e25738a0e159980f32fb659174416b9e0e8f7f8ecc55d01a54528c16c138bb1201eaf\n  type: local_keystore\n  voting_keystore_path: /data/lighthouse/validator_keys/keystore-0.json\n  voting_keystore_password_path: /data/lighthouse/validator_keys/keystore-0.txt\n  suggested_fee_recipient: 0x000000000000000000000000dec0ded0b0115ace\n  gas_limit: 30000000\n  builder_proposals: true\n  builder_pubkey_override: 0xa878c8ec402799536f0b94967e578fdbcd84828f564d604f0db491979438357b797491399be1f22de8a44673f14c087e\n- enabled: true\n  voting_public_key: 0x821ec75ca12057b484906a492ea3448387065a9466c348e81e72f23139e7abdf2f38854cc9dea8d51ca615cbe15f9d2c\n  type: local_keystore\n  voting_keystore_path: /data/lighthouse/validator_keys/keystore-1.json\n  voting_keystore_password_path: /data/lighthouse/validator_keys/keystore-1.txt\n  suggested_fee_recipient: 0x000000000000000000000000dec0ded0b0115ace\n  gas_limit: 30000000\n  builder_proposals: true\n  builder_pubkey_override: 0x93e600b9836acda0e7781dc50268478b13c2a73fa470728b8e7fd06f31d62ddbdf831cbf5b7a828276a2218f2016a2fa\n- enabled: true\n  voting_public_key: 0xa5581286066c5251fbc7c2a6685a9ccce951ccb9b6e449a3f90c33c971dac9b297f9a7a3f9394c8a43822ff0f2cfded1\n  type: local_keystore\n  voting_keystore_path: /data/lighthouse/validator_keys/keystore-2.json\n  voting_keystore_password_path: /data/lighthouse/validator_keys/keystore-2.txt\n  suggested_fee_recipient: 0x000000000000000000000000dec0ded0b0115ace\n  gas_limit: 30000000\n  builder_proposals: true\n  builder_pubkey_override: 0x8793b522c8197c047b95b6f4b3c7fd1582a2466ff96eb274ee51fc699c99cbdfeb41cf576bbbbdecf2454527083edf34\n")),(0,n.kt)("p",null,"Note the pubkeyshares in the ",(0,n.kt)("inlineCode",{parentName:"p"},"cluster-lock.json")," are base64 encoded and decode to hex. Below is a decoding example for the first ",(0,n.kt)("inlineCode",{parentName:"p"},"voting_public_key")," seen above."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"echo pkadKH8m7LNgSbebQI4lc4oOFZmA8y+2WRdEFrng6Pf47MVdAaVFKMFsE4uxIB6v | base64 -d | hexdump -v -e '/1 \"%02x\" ' | (echo -n 0x && cat)\n\n-> 0xa6469d287f26ecb36049b79b408e25738a0e159980f32fb659174416b9e0e8f7f8ecc55d01a54528c16c138bb1201eaf\n")),(0,n.kt)("p",null,"Feel free to update the ",(0,n.kt)("inlineCode",{parentName:"p"},"voting_keystore_path"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"suggested_fee_recipient")," etc. to whatever you have set up for your environment. Note that there either needs to be a different ",(0,n.kt)("inlineCode",{parentName:"p"},"validator_definitions.yml")," on each distributed validator based on the keys it holds or a single ",(0,n.kt)("inlineCode",{parentName:"p"},"validator_definitions.yml")," file can be used but you must ensure no collisions on the ",(0,n.kt)("inlineCode",{parentName:"p"},"voting_keystore_path")," & ",(0,n.kt)("inlineCode",{parentName:"p"},"voting_keystore_password_path"),"."),(0,n.kt)("h3",{id:"verify-charon--builder-api-is-functional"},"Verify Charon + Builder API is Functional"),(0,n.kt)("p",null,"Once you have Charon and your Validator Client set up you can verify the set up is functional by reviewing your proposed blocks on Etherscan testnets or on via the Relay API endpoints."),(0,n.kt)("p",null,"As an example if my validator was the block proposer for block 12853375 on Ropsten I can review the following resources."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://ropsten.etherscan.io/block/12853375"},"Etherscan Ropsten Block 12853375"),", if we check the ",(0,n.kt)("inlineCode",{parentName:"p"},"Extra Data")," field on this page we will see the tag ",(0,n.kt)("inlineCode",{parentName:"p"},"Flashbots flashblock (Hex:0x466c617368626f747320666c617368626c6f636b)"),". Relays will generally add a tag to the block, this block was submitted via the Flashbots Relay and as a result it has the tag: ",(0,n.kt)("inlineCode",{parentName:"p"},"Flashbots flashblock"),"."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://flashbots.notion.site/Relay-API-Spec-5fb0819366954962bc02e81cb33840f5"},"Relay Data API"),", if you navigate to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Data API")," section on the Relay Data API you will see an endpoint labeled ",(0,n.kt)("inlineCode",{parentName:"p"},"proposerPayloadsDelivered"),". You are able to add a query argument of ",(0,n.kt)("inlineCode",{parentName:"p"},"block_number")," to this call to see if a block was submitted via that Relay. ",(0,n.kt)("a",{parentName:"p",href:"https://builder-relay-ropsten.flashbots.net/relay/v1/data/bidtraces/proposer_payload_delivered?block_number=12853375"},"Here")," is the query for the example block 12853375. Blocks that have not been submitted to the Relay will return an empty array ",(0,n.kt)("inlineCode",{parentName:"p"},"[]"),"."))}c.isMDXComponent=!0}}]);