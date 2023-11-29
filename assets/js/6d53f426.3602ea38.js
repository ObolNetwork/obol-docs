"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[45561],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),p=n,m=d["".concat(s,".").concat(p)]||d[p]||h[p]||o;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:a},t)}},73992:(e,t,a)=>{a.d(t,{Z:()=>x});var r=a(87462),n=a(67294),o=a(86010),i=a(72957),l=a(16550),s=a(75238),c=a(33609),u=a(92560);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=h(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,c]=m({queryString:a,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),b=(()=>{const e=s??d;return p({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var b=a(51048);const v="tabList__CuJ",k="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),h=e=>{const t=e.currentTarget,a=u.indexOf(t),r=c[a].value;r!==l&&(d(t),s(r))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:h},i,{className:(0,o.Z)("tabs__item",k,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",v)},n.createElement(y,(0,r.Z)({},e,t)),n.createElement(g,(0,r.Z)({},e,t)))}function x(e){const t=(0,b.Z)();return n.createElement(w,(0,r.Z)({key:String(t)},e))}},83690:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),o=a(73992),i=a(18679);const l={sidebar_position:5,description:"Exit a validator"},s="Exit a DV",c={unversionedId:"int/quickstart/quickstart-exit",id:"version-v0.17.1/int/quickstart/quickstart-exit",title:"Exit a DV",description:"Exit a validator",source:"@site/versioned_docs/version-v0.17.1/int/quickstart/quickstart-exit.md",sourceDirName:"int/quickstart",slug:"/int/quickstart/quickstart-exit",permalink:"/docs/v0.17.1/int/quickstart/quickstart-exit",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.17.1/int/quickstart/quickstart-exit.md",tags:[],version:"v0.17.1",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Exit a validator"},sidebar:"tutorialSidebar",previous:{title:"Activate a DV",permalink:"/docs/v0.17.1/int/quickstart/activate-dv"},next:{title:"Update a DV",permalink:"/docs/v0.17.1/int/quickstart/update"}},u={},d=[{value:"Run the <code>voluntary-exit</code> command on your validator client",id:"run-the-voluntary-exit-command-on-your-validator-client",level:2},{value:"Exit epoch and withdrawable epoch",id:"exit-epoch-and-withdrawable-epoch",level:2},{value:"How to verify a validator exit",id:"how-to-verify-a-validator-exit",level:2}],h={toc:d};function p(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"exit-a-dv"},"Exit a DV"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Charon is in an alpha state and should be used with caution according to its ",(0,n.kt)("a",{parentName:"p",href:"https://obol.tech/terms.pdf"},"Terms of Use"),".")),(0,n.kt)("p",null,'Users looking to exit staking entirely and withdraw their full balance back must also sign and broadcast a "voluntary exit" message with validator keys which will start the process of exiting from staking. This is done with your validator client and submitted to your beacon node, and does not require gas. In the case of a DV, each charon node needs to broadcast a partial exit to the other nodes of the cluster. Once a threshold of partial exits has been received by any node, the full voluntary exit will be sent to the beacon chain.'),(0,n.kt)("p",null,"This process will take 27 hours or longer depending on the current length of the exit queue."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"A threshold of operators needs to run the exit command for the exit to succeed."),(0,n.kt)("li",{parentName:"ul"},"If a charon client restarts after the exit command is run but before the threshold is reached, it will lose the partial exits it has received from the other nodes. If all charon clients restart and thus all partial exits are lost before the required threshold of exit messages are received, operators will have to rebroadcast their partial exit messages."))),(0,n.kt)("h2",{id:"run-the-voluntary-exit-command-on-your-validator-client"},"Run the ",(0,n.kt)("inlineCode",{parentName:"h2"},"voluntary-exit")," command on your validator client"),(0,n.kt)("p",null,"Run the appropriate command on your validator client to broadcast an exit message from your validator client to its upstream charon client."),(0,n.kt)("p",null,"It needs to be the validator client that is connected to your charon client taking part in the DV, as you are only signing a partial exit message, with a partial private key share, which your charon client will combine with the other partial exit messages from the other operators. "),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"All operators need to use the same ",(0,n.kt)("inlineCode",{parentName:"li"},"EXIT_EPOCH")," for the exit to be successful. Assuming you want to exit as soon as possible, the default epoch of ",(0,n.kt)("inlineCode",{parentName:"li"},"162304")," included in the below commands should be sufficient."),(0,n.kt)("li",{parentName:"ul"},"Partial exits can be broadcasted by any validator client as long as the sum reaches the threshold for the cluster."))),(0,n.kt)(o.Z,{groupId:"validator-clients",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"teku",label:"Teku",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",null,String.raw`docker exec -ti charon-distributed-validator-node-teku-1 /opt/teku/bin/teku voluntary-exit \
    --beacon-node-api-endpoint="http://charon:3600/" \
    --confirmation-enabled=false \
    --validator-keys="/opt/charon/validator_keys:/opt/charon/validator_keys" \
    --epoch=162304`))),(0,n.kt)(i.Z,{value:"nimbus",label:"Nimbus",mdxType:"TabItem"},"The following executes an interactive command inside the Nimbus VC container. It copies all files and directories from the Keystore path ",(0,n.kt)("code",null,"/home/user/data/charon")," to the newly created ",(0,n.kt)("code",null,"/home/user/data/wd")," directory.",(0,n.kt)("br",null),(0,n.kt)("br",null),"For each file in the ",(0,n.kt)("code",null,"/home/user/data/wd/secrets")," directory, it:",(0,n.kt)("li",null,"Extracts the filename without the extension as the file name is the public key"),(0,n.kt)("li",null,"Appends ",(0,n.kt)("code",null,String.raw`--validator=<filename>`)," to the ",(0,n.kt)("code",null,"command")," variable."),(0,n.kt)("li",null,"Executes a program called ",(0,n.kt)("code",null,"nimbus_beacon_node")," with the following arguments:"),(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("code",null,"deposits exit")," : Exits validators"),(0,n.kt)("li",null,(0,n.kt)("code",null,"$command")," : The generated command string from the loop."),(0,n.kt)("li",null,(0,n.kt)("code",null,"--epoch=162304")," : The epoch upon which to submit the voluntary exit."),(0,n.kt)("li",null,(0,n.kt)("code",null,"--rest-url=http://charon:3600/")," : Specifies the Charon ",(0,n.kt)("code",null,"host:port")),(0,n.kt)("li",null,(0,n.kt)("code",null,"--data-dir=/home/user/charon/")," : Specifies the ",(0,n.kt)("code",null,"Keystore path")," which has all the validator keys. There will be a ",(0,n.kt)("code",null,"secrets")," and a ",(0,n.kt)("code",null,"validators")," folder inside it.")),(0,n.kt)("pre",null,(0,n.kt)("code",null,String.raw`docker exec -it charon-distributed-validator-node-nimbus-1 /bin/bash -c '\
    
        mkdir /home/user/data/wd
        cp -r /home/user/data/charon/ /home/user/data/wd
    
        command=""; \
        for file in /home/user/data/wd/secrets/*; do \
            filename=$(basename "$file" | cut -d. -f1); \
            command+=" --validator=$filename"; \
        done; \
    
/home/user/nimbus_beacon_node deposits exit $command --epoch=162304 --rest-url=http://charon:3600/ --data-dir=/home/user/data/wd/'`))),(0,n.kt)(i.Z,{value:"lodestar",label:"Lodestar",default:!0,mdxType:"TabItem"},"The following executes an interactive command inside the Loestar VC container to exit all validators. It executes",(0,n.kt)("code",null,"node /usr/app/packages/cli/bin/lodestar validator voluntary-exit")," with the arguments:",(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("code",null,'--beaconNodes="http://charon:3600"')," : Specifies the Charon ",(0,n.kt)("code",null,"host:port"),"."),(0,n.kt)("li",null,(0,n.kt)("code",null,"--data-dir=/opt/data")," : Specifies the folder where the key stores were imported."),(0,n.kt)("li",null,(0,n.kt)("code",null,"--exitEpoch=162304")," : The epoch upon which to submit the voluntary exit."),(0,n.kt)("li",null,(0,n.kt)("code",null,"--network=goerli")," : Specifies the network."),(0,n.kt)("li",null,(0,n.kt)("code",null,"--yes")," : Skips confirmation prompt.")),(0,n.kt)("pre",null,(0,n.kt)("code",null,String.raw`docker exec -it charon-distributed-validator-node-lodestar-1 /bin/sh -c 'node /usr/app/packages/cli/bin/lodestar validator voluntary-exit --beaconNodes="http://charon:3600" --dataDir=/opt/data --exitEpoch=162304 --network=goerli --yes'`)))),(0,n.kt)("p",null,"Once a threshold of exit signatures has been received by any single charon client, it will craft a valid voluntary exit message and will submit it to the beacon chain for inclusion. You can monitor partial exits stored by each node in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon-distributed-validator-node"},"Grafana Dashboard"),"."),(0,n.kt)("h2",{id:"exit-epoch-and-withdrawable-epoch"},"Exit epoch and withdrawable epoch"),(0,n.kt)("p",null,"The process of a validator exiting from staking takes variable amounts of time, depending on how many others are exiting at the same time."),(0,n.kt)("p",null,"Immediately upon broadcasting a signed voluntary exit message, the exit epoch and withdrawable epoch values are calculated based off the current epoch number. These values determine exactly when the validator will no longer be required to be online performing validation, and when the validator is eligible for a full withdrawal respectively."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Exit epoch - epoch at which your validator is no longer active, no longer earning rewards, and is no longer subject to slashing rules.",(0,n.kt)("admonition",{parentName:"li",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},'Up until this epoch (while "in the queue") your validator is expected to be online and is held to the same slashing rules as always. Do not turn your DV node off until this epoch is reached.'))),(0,n.kt)("li",{parentName:"ol"},"Withdrawable epoch - epoch at which your validator funds are eligible for a full withdrawal during the next validator sweep.\nThis occurs 256 epochs after the exit epoch, which takes ~27.3 hours.")),(0,n.kt)("h2",{id:"how-to-verify-a-validator-exit"},"How to verify a validator exit"),(0,n.kt)("p",null,"Consult the examples below and compare them to your validator's monitoring to verify that exits from each operator in the cluster are being received. This example is a cluster of 4 nodes with 2 validators and threshold of 3 nodes broadcasting exits are needed."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Operator 1 broadcasts an exit on validator client 1.\n",(0,n.kt)("img",{alt:"Verify in Grafana Exit panel",src:a(42877).Z,width:"2988",height:"1226"}),(0,n.kt)("img",{alt:"Verify in Grafana Exit panel",src:a(19986).Z,width:"2152",height:"548"})),(0,n.kt)("li",{parentName:"ol"},"Operator 2 broadcasts an exit on validator client 2.\n",(0,n.kt)("img",{alt:"Verify in Grafana Exit panel",src:a(45790).Z,width:"2974",height:"952"}),(0,n.kt)("img",{alt:"Verify in Grafana Exit panel",src:a(91351).Z,width:"2152",height:"582"})),(0,n.kt)("li",{parentName:"ol"},"Operator 3 broadcasts an exit on validator client 3.\n",(0,n.kt)("img",{alt:"Verify in Grafana Exit panel",src:a(18251).Z,width:"2924",height:"1018"}),(0,n.kt)("img",{alt:"Verify in Grafana Exit panel",src:a(9123).Z,width:"2144",height:"608"}))),(0,n.kt)("p",null,"At this point, the threshold of 3 has been reached and the validator exit process will start. The logs will show the following:\n",(0,n.kt)("img",{alt:"Verify in Grafana Exit panel",src:a(63769).Z,width:"2784",height:"484"})),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Once a validator has broadcasted an exit message, it must continue to validate for at least 27 hours or longer. Do not shut off your distributed validator nodes until your validator is fully exited.")))}p.isMDXComponent=!0},19986:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/DutyExit-01-cc29cb51c323e290f8ceec9c0256f574.png"},91351:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/DutyExit-02-560e45e9e4064f1ca26a0386f8d7ec16.png"},9123:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/DutyExit-03-12edb85f9744e0ff91264177f37fb753.png"},63769:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ExitLogs-04a7bf322d265372eac30d3671bd916b.png"},42877:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ExitPromQuery-01-7266f9324d942a47c7966bf2f036f167.png"},45790:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ExitPromQuery-02-9592e27d4d27ab70911856badffa662a.png"},18251:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ExitPromQuery-03-d2adbd3dec918750799fe3f07309bed3.png"}}]);