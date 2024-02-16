"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[94756],{22440:(e,t,a)=>{a.d(t,{c:()=>i});var o=a(11504),l=a(14971);const n={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,l.c)(n.tabItem,i),hidden:a},t)}},86212:(e,t,a)=>{a.d(t,{c:()=>x});var o=a(45072),l=a(11504),n=a(14971),i=a(77288),r=a(55592),s=a(95068),d=a(30604),c=a(46432);function u(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:o,default:l}}=e;return{value:t,label:a,attributes:o,default:l}}))}function h(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,d.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:a}=e;const o=(0,r.Uz)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._M)(n),(0,l.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(o.location.search);t.set(n,e),o.replace({...o.location,search:t.toString()})}),[n,o])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:o}=e,n=h(e),[i,r]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=a.find((e=>e.default))??a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:n}))),[s,d]=y({queryString:a,groupId:o}),[u,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,n]=(0,c.IN)(a);return[o,(0,l.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:o}),m=(()=>{const e=s??u;return p({value:e,tabValues:n})?e:null})();(0,l.useLayoutEffect)((()=>{m&&r(m)}),[m]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);r(e),d(e),g(e)}),[d,g,n]),tabValues:n}}var m=a(89788);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:r,selectValue:s,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.MV)(),h=e=>{const t=e.currentTarget,a=c.indexOf(t),o=d[a].value;o!==r&&(u(t),s(o))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.c)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,o.c)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:h},i,{className:(0,n.c)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":r===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:o}=e;const n=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===o));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function w(e){const t=g(e);return l.createElement("div",{className:(0,n.c)("tabs-container",b.tabList)},l.createElement(f,(0,o.c)({},e,t)),l.createElement(v,(0,o.c)({},e,t)))}function x(e){const t=(0,m.c)();return l.createElement(w,(0,o.c)({key:String(t)},e))}},4144:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var o=a(45072),l=(a(11504),a(95788)),n=a(86212),i=a(22440);a(35784);const r={sidebar_position:7,description:"Exit a validator"},s="Exit a DV",d={unversionedId:"start/quickstart-exit",id:"version-v0.19.1/start/quickstart-exit",title:"Exit a DV",description:"Exit a validator",source:"@site/versioned_docs/version-v0.19.1/start/quickstart-exit.md",sourceDirName:"start",slug:"/start/quickstart-exit",permalink:"/docs/start/quickstart-exit",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.19.1/start/quickstart-exit.md",tags:[],version:"v0.19.1",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"Exit a validator"},sidebar:"tutorialSidebar",previous:{title:"Update a DV",permalink:"/docs/start/update"},next:{title:"Create a DV using the SDK",permalink:"/docs/advanced/quickstart-sdk"}},c={},u=[{value:"Exit epoch and withdrawable epoch",id:"exit-epoch-and-withdrawable-epoch",level:2},{value:"How to verify a validator exit",id:"how-to-verify-a-validator-exit",level:2}],h={toc:u},p="wrapper";function y(e){let{components:t,...r}=e;return(0,l.yg)(p,(0,o.c)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"exit-a-dv"},"Exit a DV"),(0,l.yg)("admonition",{type:"caution"},(0,l.yg)("p",{parentName:"admonition"},"Charon is in a beta state and should be used with caution according to its ",(0,l.yg)("a",{parentName:"p",href:"https://obol.tech/terms.pdf"},"Terms of Use"),".")),(0,l.yg)("p",null,'Users looking to exit staking entirely and withdraw their full balance back must also sign and broadcast a "voluntary exit" message with validator keys which will start the process of exiting from staking. This is done with your validator client and submitted to your beacon node, and does not require gas. In the case of a DV, each charon node needs to broadcast a partial exit to the other nodes of the cluster. Once a threshold of partial exits has been received by any node, the full voluntary exit will be sent to the beacon chain.'),(0,l.yg)("p",null,"This process will take 27 hours or longer depending on the current length of the exit queue."),(0,l.yg)("admonition",{type:"info"},(0,l.yg)("ul",{parentName:"admonition"},(0,l.yg)("li",{parentName:"ul"},"A threshold of operators needs to run the exit command for the exit to succeed."),(0,l.yg)("li",{parentName:"ul"},"If a charon client restarts after the exit command is run but before the threshold is reached, it will lose the partial exits it has received from the other nodes. If all charon clients restart and thus all partial exits are lost before the required threshold of exit messages are received, operators will have to rebroadcast their partial exit messages.\n:::")),(0,l.yg)("h2",{parentName:"admonition",id:"run-the-voluntary-exit-command-on-your-validator-client"},"Run the ",(0,l.yg)("inlineCode",{parentName:"h2"},"voluntary-exit")," command on your validator client"),(0,l.yg)("p",{parentName:"admonition"},"Run the appropriate command on your validator client to broadcast an exit message from your validator client to its upstream charon client."),(0,l.yg)("p",{parentName:"admonition"},"It needs to be the validator client that is connected to your charon client taking part in the DV, as you are only signing a partial exit message, with a partial private key share, which your charon client will combine with the other partial exit messages from the other operators.")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"All operators need to use the same ",(0,l.yg)("inlineCode",{parentName:"li"},"EXIT_EPOCH")," for the exit to be successful. Assuming you want to exit as soon as possible, the default epoch of ",(0,l.yg)("inlineCode",{parentName:"li"},"162304")," included in the below commands should be sufficient."),(0,l.yg)("li",{parentName:"ul"},"Partial exits can be broadcasted by any validator client as long as the sum reaches the threshold for the cluster.\n:::")),(0,l.yg)(n.c,{groupId:"validator-clients",mdxType:"Tabs"},(0,l.yg)(i.c,{value:"Goerli",label:"Goerli",default:!0,mdxType:"TabItem"},(0,l.yg)(n.c,{groupId:"validator-clients",mdxType:"Tabs"},(0,l.yg)(i.c,{value:"teku",label:"Teku",default:!0,mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",null,String.raw`docker exec -ti charon-distributed-validator-node-teku-1 /opt/teku/bin/teku voluntary-exit \
        --beacon-node-api-endpoint="http://charon:3600/" \
        --confirmation-enabled=false \
        --validator-keys="/opt/charon/validator_keys:/opt/charon/validator_keys" \
        --epoch=162304`))),(0,l.yg)(i.c,{value:"nimbus",label:"Nimbus",mdxType:"TabItem"},"The following executes an interactive command inside the Nimbus VC container. It copies all files and directories from the Keystore path ",(0,l.yg)("code",null,"/home/user/data/charon")," to the newly created ",(0,l.yg)("code",null,"/home/user/data/wd")," directory.",(0,l.yg)("br",null),(0,l.yg)("br",null),"For each file in the ",(0,l.yg)("code",null,"/home/user/data/wd/secrets")," directory, it:",(0,l.yg)("li",null,"Extracts the filename without the extension as the file name is the public key"),(0,l.yg)("li",null,"Appends ",(0,l.yg)("code",null,String.raw`--validator=<filename>`)," to the ",(0,l.yg)("code",null,"command")," variable."),(0,l.yg)("li",null,"Executes a program called ",(0,l.yg)("code",null,"nimbus_beacon_node")," with the following arguments:"),(0,l.yg)("ul",null,(0,l.yg)("li",null,(0,l.yg)("code",null,"deposits exit")," : Exits validators"),(0,l.yg)("li",null,(0,l.yg)("code",null,"$command")," : The generated command string from the loop."),(0,l.yg)("li",null,(0,l.yg)("code",null,"--epoch=162304")," : The epoch upon which to submit the voluntary exit."),(0,l.yg)("li",null,(0,l.yg)("code",null,"--rest-url=http://charon:3600/")," : Specifies the Charon ",(0,l.yg)("code",null,"host:port")),(0,l.yg)("li",null,(0,l.yg)("code",null,"--data-dir=/home/user/charon/")," : Specifies the ",(0,l.yg)("code",null,"Keystore path")," which has all the validator keys. There will be a ",(0,l.yg)("code",null,"secrets")," and a ",(0,l.yg)("code",null,"validators")," folder inside it.")),(0,l.yg)("pre",null,(0,l.yg)("code",null,String.raw`docker exec -it charon-distributed-validator-node-nimbus-1 /bin/bash -c '\
        
            mkdir /home/user/data/wd
            cp -r /home/user/data/charon/ /home/user/data/wd
        
            command=""; \
            for file in /home/user/data/wd/secrets/*; do \
                filename=$(basename "$file" | cut -d. -f1); \
                command+=" --validator=$filename"; \
            done; \
        
            /home/user/nimbus_beacon_node deposits exit $command --epoch=162304 --rest-url=http://charon:3600/ --data-dir=/home/user/data/wd/'`))),(0,l.yg)(i.c,{value:"lodestar",label:"Lodestar",default:!0,mdxType:"TabItem"},"The following executes an interactive command inside the Loestar VC container to exit all validators. It executes",(0,l.yg)("code",null,"node /usr/app/packages/cli/bin/lodestar validator voluntary-exit")," with the arguments:",(0,l.yg)("ul",null,(0,l.yg)("li",null,(0,l.yg)("code",null,'--beaconNodes="http://charon:3600"')," : Specifies the Charon ",(0,l.yg)("code",null,"host:port"),"."),(0,l.yg)("li",null,(0,l.yg)("code",null,"--data-dir=/opt/data")," : Specifies the folder where the key stores were imported."),(0,l.yg)("li",null,(0,l.yg)("code",null,"--exitEpoch=162304")," : The epoch upon which to submit the voluntary exit."),(0,l.yg)("li",null,(0,l.yg)("code",null,"--network=goerli")," : Specifies the network."),(0,l.yg)("li",null,(0,l.yg)("code",null,"--yes")," : Skips confirmation prompt.")),(0,l.yg)("pre",null,(0,l.yg)("code",null,String.raw`docker exec -it charon-distributed-validator-node-lodestar-1 /bin/sh -c 'node /usr/app/packages/cli/bin/lodestar validator voluntary-exit --beaconNodes="http://charon:3600" --dataDir=/opt/data --exitEpoch=162304 --network=goerli --yes'`))))),(0,l.yg)(i.c,{value:"Holesky",label:"Holesky",mdxType:"TabItem"},(0,l.yg)(n.c,{groupId:"validator-clients",mdxType:"Tabs"},(0,l.yg)(i.c,{value:"teku",label:"Teku",default:!0,mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",null,String.raw`docker exec -ti charon-distributed-validator-node-teku-1 /opt/teku/bin/teku voluntary-exit \
            --beacon-node-api-endpoint="http://charon:3600/" \
            --confirmation-enabled=false \
            --validator-keys="/opt/charon/validator_keys:/opt/charon/validator_keys" \
            --epoch=256`))),(0,l.yg)(i.c,{value:"nimbus",label:"Nimbus",mdxType:"TabItem"},"The following executes an interactive command inside the Nimbus VC container. It copies all files and directories from the Keystore path ",(0,l.yg)("code",null,"/home/user/data/charon")," to the newly created ",(0,l.yg)("code",null,"/home/user/data/wd")," directory.",(0,l.yg)("br",null),(0,l.yg)("br",null),"For each file in the ",(0,l.yg)("code",null,"/home/user/data/wd/secrets")," directory, it:",(0,l.yg)("li",null,"Extracts the filename without the extension as the file name is the public key"),(0,l.yg)("li",null,"Appends ",(0,l.yg)("code",null,String.raw`--validator=<filename>`)," to the ",(0,l.yg)("code",null,"command")," variable."),(0,l.yg)("li",null,"Executes a program called ",(0,l.yg)("code",null,"nimbus_beacon_node")," with the following arguments:"),(0,l.yg)("ul",null,(0,l.yg)("li",null,(0,l.yg)("code",null,"deposits exit")," : Exits validators"),(0,l.yg)("li",null,(0,l.yg)("code",null,"$command")," : The generated command string from the loop."),(0,l.yg)("li",null,(0,l.yg)("code",null,"--epoch=256")," : The epoch upon which to submit the voluntary exit."),(0,l.yg)("li",null,(0,l.yg)("code",null,"--rest-url=http://charon:3600/")," : Specifies the Charon ",(0,l.yg)("code",null,"host:port")),(0,l.yg)("li",null,(0,l.yg)("code",null,"--data-dir=/home/user/charon/")," : Specifies the ",(0,l.yg)("code",null,"Keystore path")," which has all the validator keys. There will be a ",(0,l.yg)("code",null,"secrets")," and a ",(0,l.yg)("code",null,"validators")," folder inside it.")),(0,l.yg)("pre",null,(0,l.yg)("code",null,String.raw`docker exec -it charon-distributed-validator-node-nimbus-1 /bin/bash -c '\
        
            mkdir /home/user/data/wd
            cp -r /home/user/data/charon/ /home/user/data/wd
        
            command=""; \
            for file in /home/user/data/wd/secrets/*; do \
                filename=$(basename "$file" | cut -d. -f1); \
                command+=" --validator=$filename"; \
            done; \
        
            /home/user/nimbus_beacon_node deposits exit $command --epoch=256 --rest-url=http://charon:3600/ --data-dir=/home/user/data/wd/'`))),(0,l.yg)(i.c,{value:"lodestar",label:"Lodestar",default:!0,mdxType:"TabItem"},"The following executes an interactive command inside the Loestar VC container to exit all validators. It executes",(0,l.yg)("code",null,"node /usr/app/packages/cli/bin/lodestar validator voluntary-exit")," with the arguments:",(0,l.yg)("ul",null,(0,l.yg)("li",null,(0,l.yg)("code",null,'--beaconNodes="http://charon:3600"')," : Specifies the Charon ",(0,l.yg)("code",null,"host:port"),"."),(0,l.yg)("li",null,(0,l.yg)("code",null,"--data-dir=/opt/data")," : Specifies the folder where the key stores were imported."),(0,l.yg)("li",null,(0,l.yg)("code",null,"--exitEpoch=256")," : The epoch upon which to submit the voluntary exit."),(0,l.yg)("li",null,(0,l.yg)("code",null,"--network=holesky")," : Specifies the network."),(0,l.yg)("li",null,(0,l.yg)("code",null,"--yes")," : Skips confirmation prompt.")),(0,l.yg)("pre",null,(0,l.yg)("code",null,String.raw`docker exec -it charon-distributed-validator-node-lodestar-1 /bin/sh -c 'node /usr/app/packages/cli/bin/lodestar validator voluntary-exit --beaconNodes="http://charon:3600" --dataDir=/opt/data --exitEpoch=256 --network=holesky --yes'`))))),(0,l.yg)(i.c,{value:"Mainnet",label:"Mainnet",mdxType:"TabItem"},(0,l.yg)(n.c,{groupId:"validator-clients",mdxType:"Tabs"},(0,l.yg)(i.c,{value:"teku",label:"Teku",default:!0,mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",null,String.raw`docker exec -ti charon-distributed-validator-node-teku-1 /opt/teku/bin/teku voluntary-exit \
            --beacon-node-api-endpoint="http://charon:3600/" \
            --confirmation-enabled=false \
            --validator-keys="/opt/charon/validator_keys:/opt/charon/validator_keys" \
            --epoch=194048`))),(0,l.yg)(i.c,{value:"nimbus",label:"Nimbus",mdxType:"TabItem"},"The following executes an interactive command inside the Nimbus VC container. It copies all files and directories from the Keystore path ",(0,l.yg)("code",null,"/home/user/data/charon")," to the newly created ",(0,l.yg)("code",null,"/home/user/data/wd")," directory.",(0,l.yg)("br",null),(0,l.yg)("br",null),"For each file in the ",(0,l.yg)("code",null,"/home/user/data/wd/secrets")," directory, it:",(0,l.yg)("li",null,"Extracts the filename without the extension as the file name is the public key"),(0,l.yg)("li",null,"Appends ",(0,l.yg)("code",null,String.raw`--validator=<filename>`)," to the ",(0,l.yg)("code",null,"command")," variable."),(0,l.yg)("li",null,"Executes a program called ",(0,l.yg)("code",null,"nimbus_beacon_node")," with the following arguments:"),(0,l.yg)("ul",null,(0,l.yg)("li",null,(0,l.yg)("code",null,"deposits exit")," : Exits validators"),(0,l.yg)("li",null,(0,l.yg)("code",null,"$command")," : The generated command string from the loop."),(0,l.yg)("li",null,(0,l.yg)("code",null,"--epoch=194048")," : The epoch upon which to submit the voluntary exit."),(0,l.yg)("li",null,(0,l.yg)("code",null,"--rest-url=http://charon:3600/")," : Specifies the Charon ",(0,l.yg)("code",null,"host:port")),(0,l.yg)("li",null,(0,l.yg)("code",null,"--data-dir=/home/user/charon/")," : Specifies the ",(0,l.yg)("code",null,"Keystore path")," which has all the validator keys. There will be a ",(0,l.yg)("code",null,"secrets")," and a ",(0,l.yg)("code",null,"validators")," folder inside it.")),(0,l.yg)("pre",null,(0,l.yg)("code",null,String.raw`docker exec -it charon-distributed-validator-node-nimbus-1 /bin/bash -c '\
        
            mkdir /home/user/data/wd
            cp -r /home/user/data/charon/ /home/user/data/wd
        
            command=""; \
            for file in /home/user/data/wd/secrets/*; do \
                filename=$(basename "$file" | cut -d. -f1); \
                command+=" --validator=$filename"; \
            done; \
        
            /home/user/nimbus_beacon_node deposits exit $command --epoch=194048 --rest-url=http://charon:3600/ --data-dir=/home/user/data/wd/'`))),(0,l.yg)(i.c,{value:"lodestar",label:"Lodestar",default:!0,mdxType:"TabItem"},"The following executes an interactive command inside the Loestar VC container to exit all validators. It executes",(0,l.yg)("code",null,"node /usr/app/packages/cli/bin/lodestar validator voluntary-exit")," with the arguments:",(0,l.yg)("ul",null,(0,l.yg)("li",null,(0,l.yg)("code",null,'--beaconNodes="http://charon:3600"')," : Specifies the Charon ",(0,l.yg)("code",null,"host:port"),"."),(0,l.yg)("li",null,(0,l.yg)("code",null,"--data-dir=/opt/data")," : Specifies the folder where the key stores were imported."),(0,l.yg)("li",null,(0,l.yg)("code",null,"--exitEpoch=194048")," : The epoch upon which to submit the voluntary exit."),(0,l.yg)("li",null,(0,l.yg)("code",null,"--network=mainnet")," : Specifies the network."),(0,l.yg)("li",null,(0,l.yg)("code",null,"--yes")," : Skips confirmation prompt.")),(0,l.yg)("pre",null,(0,l.yg)("code",null,String.raw`docker exec -it charon-distributed-validator-node-lodestar-1 /bin/sh -c 'node /usr/app/packages/cli/bin/lodestar validator voluntary-exit --beaconNodes="http://charon:3600" --dataDir=/opt/data --exitEpoch=194048 --network=mainnet --yes'`)))))),(0,l.yg)("p",null,"Once a threshold of exit signatures has been received by any single charon client, it will craft a valid voluntary exit message and will submit it to the beacon chain for inclusion. You can monitor partial exits stored by each node in the ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon-distributed-validator-node"},"Grafana Dashboard"),"."),(0,l.yg)("h2",{id:"exit-epoch-and-withdrawable-epoch"},"Exit epoch and withdrawable epoch"),(0,l.yg)("p",null,"The process of a validator exiting from staking takes variable amounts of time, depending on how many others are exiting at the same time."),(0,l.yg)("p",null,"Immediately upon broadcasting a signed voluntary exit message, the exit epoch and withdrawable epoch values are calculated based off the current epoch number. These values determine exactly when the validator will no longer be required to be online performing validation, and when the validator is eligible for a full withdrawal respectively."),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"Exit epoch - epoch at which your validator is no longer active, no longer earning rewards, and is no longer subject to slashing rules.",(0,l.yg)("admonition",{parentName:"li",type:"caution"},(0,l.yg)("p",{parentName:"admonition"},'Up until this epoch (while "in the queue") your validator is expected to be online and is held to the same slashing rules as always. Do not turn your DV node off until this epoch is reached.'))),(0,l.yg)("li",{parentName:"ol"},"Withdrawable epoch - epoch at which your validator funds are eligible for a full withdrawal during the next validator sweep.\nThis occurs 256 epochs after the exit epoch, which takes ~27.3 hours.")),(0,l.yg)("h2",{id:"how-to-verify-a-validator-exit"},"How to verify a validator exit"),(0,l.yg)("p",null,"Consult the examples below and compare them to your validator's monitoring to verify that exits from each operator in the cluster are being received. This example is a cluster of 4 nodes with 2 validators and threshold of 3 nodes broadcasting exits are needed."),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"Operator 1 broadcasts an exit on validator client 1.\n",(0,l.yg)("img",{alt:"Verify in Grafana Exit panel",src:a(28048).c,width:"2988",height:"1226"}),(0,l.yg)("img",{alt:"Verify in Grafana Exit panel",src:a(73516).c,width:"2152",height:"548"})),(0,l.yg)("li",{parentName:"ol"},"Operator 2 broadcasts an exit on validator client 2.\n",(0,l.yg)("img",{alt:"Verify in Grafana Exit panel",src:a(92396).c,width:"2974",height:"952"}),(0,l.yg)("img",{alt:"Verify in Grafana Exit panel",src:a(99236).c,width:"2152",height:"582"})),(0,l.yg)("li",{parentName:"ol"},"Operator 3 broadcasts an exit on validator client 3.\n",(0,l.yg)("img",{alt:"Verify in Grafana Exit panel",src:a(29380).c,width:"2924",height:"1018"}),(0,l.yg)("img",{alt:"Verify in Grafana Exit panel",src:a(89476).c,width:"2144",height:"608"}))),(0,l.yg)("p",null,"At this point, the threshold of 3 has been reached and the validator exit process will start. The logs will show the following:\n",(0,l.yg)("img",{alt:"Verify in Grafana Exit panel",src:a(42688).c,width:"2784",height:"484"})),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"Once a validator has broadcasted an exit message, it must continue to validate for at least 27 hours or longer. Do not shut off your distributed validator nodes until your validator is fully exited.")))}y.isMDXComponent=!0},73516:(e,t,a)=>{a.d(t,{c:()=>o});const o=a.p+"assets/images/DutyExit-01-cc29cb51c323e290f8ceec9c0256f574.png"},99236:(e,t,a)=>{a.d(t,{c:()=>o});const o=a.p+"assets/images/DutyExit-02-560e45e9e4064f1ca26a0386f8d7ec16.png"},89476:(e,t,a)=>{a.d(t,{c:()=>o});const o=a.p+"assets/images/DutyExit-03-12edb85f9744e0ff91264177f37fb753.png"},42688:(e,t,a)=>{a.d(t,{c:()=>o});const o=a.p+"assets/images/ExitLogs-04a7bf322d265372eac30d3671bd916b.png"},28048:(e,t,a)=>{a.d(t,{c:()=>o});const o=a.p+"assets/images/ExitPromQuery-01-7266f9324d942a47c7966bf2f036f167.png"},92396:(e,t,a)=>{a.d(t,{c:()=>o});const o=a.p+"assets/images/ExitPromQuery-02-9592e27d4d27ab70911856badffa662a.png"},29380:(e,t,a)=>{a.d(t,{c:()=>o});const o=a.p+"assets/images/ExitPromQuery-03-d2adbd3dec918750799fe3f07309bed3.png"}}]);