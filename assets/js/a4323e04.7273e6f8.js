"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[98959],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>p});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),g=r,p=c["".concat(s,".").concat(g)]||c[g]||h[g]||o;return n?a.createElement(p,l(l({ref:t},d),{},{components:n})):a.createElement(p,l({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7227:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(96540),r=n(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:n},t)}},49489:(e,t,n)=>{n.d(t,{A:()=>k});var a=n(58168),r=n(96540),o=n(20053),l=n(24245),i=n(56347),s=n(62814),u=n(45167),d=n(81269);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=p({queryString:n,groupId:a}),[c,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),m=(()=>{const e=s??c;return g({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{m&&i(m)}),[m]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),y(e)}),[u,y,o]),tabValues:o}}var m=n(11062);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),h=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==i&&(c(t),s(a))},g=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:g,onClick:h},l,{className:(0,o.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=y(e);return r.createElement("div",{className:(0,o.A)("tabs-container",b.tabList)},r.createElement(f,(0,a.A)({},e,t)),r.createElement(v,(0,a.A)({},e,t)))}function k(e){const t=(0,m.A)();return r.createElement(w,(0,a.A)({key:String(t)},e))}},85549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=n(58168),r=(n(96540),n(15680)),o=n(49489),l=n(7227);const i={sidebar_position:1,description:"Frequently asked questions"},s="Frequently asked questions",u={unversionedId:"faq/general",id:"version-v1.0.0/faq/general",title:"Frequently asked questions",description:"Frequently asked questions",source:"@site/versioned_docs/version-v1.0.0/faq/general.md",sourceDirName:"faq",slug:"/faq/general",permalink:"/docs/faq/general",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v1.0.0/faq/general.md",tags:[],version:"v1.0.0",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Frequently asked questions"},sidebar:"tutorialSidebar",previous:{title:"Advanced Docker Configs",permalink:"/docs/advanced/adv-docker-configs"},next:{title:"Errors & Resolutions",permalink:"/docs/faq/errors"}},d={},c=[{value:"General",id:"general",level:2},{value:"Does Obol have a token?",id:"does-obol-have-a-token",level:3},{value:"Where can I learn more about Distributed Validators?",id:"where-can-i-learn-more-about-distributed-validators",level:3},{value:"Where does the name Charon come from?",id:"where-does-the-name-charon-come-from",level:3},{value:"What are the hardware requirements for running a Charon node?",id:"what-are-the-hardware-requirements-for-running-a-charon-node",level:3},{value:"What is the difference between a node, a validator and a cluster?",id:"what-is-the-difference-between-a-node-a-validator-and-a-cluster",level:3},{value:"Can I migrate an existing Charon node to a new machine?",id:"can-i-migrate-an-existing-charon-node-to-a-new-machine",level:3},{value:"Distributed Key Generation",id:"distributed-key-generation",level:2},{value:"What are the min and max numbers of operators for a Distributed Validator?",id:"what-are-the-min-and-max-numbers-of-operators-for-a-distributed-validator",level:3},{value:"Obol Splits",id:"obol-splits",level:2},{value:"What are Obol Splits?",id:"what-are-obol-splits",level:3},{value:"Are Obol Splits non-custodial?",id:"are-obol-splits-non-custodial",level:3},{value:"Can I change the percentages in a split?",id:"can-i-change-the-percentages-in-a-split",level:3},{value:"How do Obol Splits work?",id:"how-do-obol-splits-work",level:3},{value:"Are Obol Splits open source?",id:"are-obol-splits-open-source",level:3},{value:"Are Obol Splits audited?",id:"are-obol-splits-audited",level:3},{value:"Are the Obol Splits contracts verified on Etherscan?",id:"are-the-obol-splits-contracts-verified-on-etherscan",level:3},{value:"Does my cold wallet have to call the Obol Splits contracts?",id:"does-my-cold-wallet-have-to-call-the-obol-splits-contracts",level:3},{value:"Are there any edge cases I should be aware of when using Obol Splits?",id:"are-there-any-edge-cases-i-should-be-aware-of-when-using-obol-splits",level:3},{value:"Debugging Errors in Logs",id:"debugging-errors-in-logs",level:2}],h={toc:c},g="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"frequently-asked-questions"},"Frequently asked questions"),(0,r.yg)("h2",{id:"general"},"General"),(0,r.yg)("h3",{id:"does-obol-have-a-token"},"Does Obol have a token?"),(0,r.yg)("p",null,"No. Distributed validators use only Ether."),(0,r.yg)("h3",{id:"where-can-i-learn-more-about-distributed-validators"},"Where can I learn more about Distributed Validators?"),(0,r.yg)("p",null,"Have you checked out our ",(0,r.yg)("a",{parentName:"p",href:"https://blog.obol.tech"},"blog site")," and ",(0,r.yg)("a",{parentName:"p",href:"https://twitter.com/ObolNetwork"},"twitter")," yet? Maybe join our ",(0,r.yg)("a",{parentName:"p",href:"https://discord.gg/n6ebKsX46w"},"discord")," too."),(0,r.yg)("h3",{id:"where-does-the-name-charon-come-from"},"Where does the name Charon come from?"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://www.theoi.com/Khthonios/Kharon.html"},"Charon")," ","[kharon]"," is the Ancient Greek Ferryman of the Dead. He was tasked with bringing people across the Acheron river to the underworld. His fee was one Obol coin, placed in the mouth of the deceased. This tradition of placing a coin or Obol in the mouth of the deceased continues to this day across the Greek world."),(0,r.yg)("h3",{id:"what-are-the-hardware-requirements-for-running-a-charon-node"},"What are the hardware requirements for running a Charon node?"),(0,r.yg)("p",null,"Charon alone uses negligible disk space of not more than a few MBs. However, if you are running your consensus client and execution client on the same server as Charon, then you will typically need the same hardware as running a full Ethereum node:"),(0,r.yg)(o.A,{groupId:"Hardware",mdxType:"Tabs"},(0,r.yg)(l.A,{value:"Minimum",label:"Minimum",mdxType:"TabItem"},(0,r.yg)("table",null,(0,r.yg)("tr",null,(0,r.yg)("th",null),(0,r.yg)("th",null,"Charon + VC"),(0,r.yg)("th",null,"Beacon Node")),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("strong",null,"CPU*")),(0,r.yg)("td",null,"1"),(0,r.yg)("td",null,"2")),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("strong",null,"RAM")),(0,r.yg)("td",null,"2"),(0,r.yg)("td",null,"16")),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("strong",null,"Storage")),(0,r.yg)("td",null,"100 MB"),(0,r.yg)("td",null,"2 TB")),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("strong",null,"Internet Bandwidth")),(0,r.yg)("td",null,"10 Mb/s"),(0,r.yg)("td",null,"10 Mb/s")))),(0,r.yg)(l.A,{value:"Recommended",label:"Recommended",default:!0,mdxType:"TabItem"},(0,r.yg)("table",null,(0,r.yg)("tr",null,(0,r.yg)("th",null),(0,r.yg)("th",null,"Charon + VC"),(0,r.yg)("th",null,"Beacon Node")),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("strong",null,"CPU*")),(0,r.yg)("td",null,"2"),(0,r.yg)("td",null,"4")),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("strong",null,"RAM")),(0,r.yg)("td",null,"3"),(0,r.yg)("td",null,"24")),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("strong",null,"Storage")),(0,r.yg)("td",null,"100 MB"),(0,r.yg)("td",null,"2 TB")),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("strong",null,"Internet Bandwidth")),(0,r.yg)("td",null,"25 Mb/s"),(0,r.yg)("td",null,"25 Mb/s")))),(0,r.yg)(l.A,{value:"High # of Validators",label:"High # of Validators (>200)",default:!0,mdxType:"TabItem"},(0,r.yg)("table",null,(0,r.yg)("tr",null,(0,r.yg)("th",null),(0,r.yg)("th",null,"Charon + VC"),(0,r.yg)("th",null,"Beacon Node")),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("strong",null,"CPU*")),(0,r.yg)("td",null,"2"),(0,r.yg)("td",null,"8")),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("strong",null,"RAM")),(0,r.yg)("td",null,"4"),(0,r.yg)("td",null,"32")),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("strong",null,"Storage")),(0,r.yg)("td",null,"100 MB"),(0,r.yg)("td",null,"2 TB")),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("strong",null,"Internet Bandwidth")),(0,r.yg)("td",null,"100 Mb/s"),(0,r.yg)("td",null,"100 Mb/s"))))),(0,r.yg)("p",null,"*if using vCPU, aim for 2x the above amounts"),(0,r.yg)("p",null,"For more hardware considerations, check out the ",(0,r.yg)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/nodes-and-clients/run-a-node/#environment-and-hardware"},"ethereum.org guides")," which explores various setups and trade-offs, such as running the node locally or in the cloud."),(0,r.yg)("p",null,"For now, Geth, Teku & Lighthouse clients are packaged within the docker compose file provided in the ",(0,r.yg)("a",{parentName:"p",href:"/docs/start/quickstart_overview"},"quickstart guides"),", so you don't have to install anything else to run a cluster. Just make sure you give them some time to sync once you start running your node."),(0,r.yg)("h3",{id:"what-is-the-difference-between-a-node-a-validator-and-a-cluster"},"What is the difference between a node, a validator and a cluster?"),(0,r.yg)("p",null,"A node is a single instance of Ethereum EL+CL clients that can communicate with other nodes to maintain the Ethereum blockchain."),(0,r.yg)("p",null,"A validator is a node that participates in the consensus process by verifying transactions and creating new blocks. Multiple validators can run from the same node."),(0,r.yg)("p",null,"A cluster is a group of nodes that act together as one or several validators, which allows for a more efficient use of resources, reduces operational costs, and provides better reliability and fault tolerance."),(0,r.yg)("h3",{id:"can-i-migrate-an-existing-charon-node-to-a-new-machine"},"Can I migrate an existing Charon node to a new machine?"),(0,r.yg)("p",null,"It is possible to migrate your Charon node to another machine running the same config by moving the ",(0,r.yg)("inlineCode",{parentName:"p"},".charon")," folder with its contents to your new machine. Make sure the EL and CL on the new machine are synced before proceeding to the move to minimize downtime."),(0,r.yg)("h2",{id:"distributed-key-generation"},"Distributed Key Generation"),(0,r.yg)("h3",{id:"what-are-the-min-and-max-numbers-of-operators-for-a-distributed-validator"},"What are the min and max numbers of operators for a Distributed Validator?"),(0,r.yg)("p",null,"Currently, the minimum is 4 operators with a threshold of 3."),(0,r.yg)("p",null,"The threshold (aka quorum) corresponds to the minimum numbers of operators that need to be active for the validator(s) to be able to perform its duties. It is defined by the following formula ",(0,r.yg)("inlineCode",{parentName:"p"},"n-(ceil(n/3)-1)"),". We strongly recommend using this default threshold in your DKG as it maximises liveness while maintaining BFT safety. Setting a 4 out of 4 cluster for example, would make your validator more vulnerable to going offline instead of less vulnerable. You can check the recommended threshold values for a cluster ",(0,r.yg)("a",{parentName:"p",href:"/docs/int/key-concepts"},"here"),"."),(0,r.yg)("h2",{id:"obol-splits"},"Obol Splits"),(0,r.yg)("h3",{id:"what-are-obol-splits"},"What are Obol Splits?"),(0,r.yg)("p",null,"Obol Splits refers to a collection of composable smart contracts that enable the splitting of validator rewards and/or principal in a non-custodial, trust-minimised manner. Obol Splits contains integrations to enable DVs within Lido, Eigenlayer, and in future a number of other LSPs."),(0,r.yg)("h3",{id:"are-obol-splits-non-custodial"},"Are Obol Splits non-custodial?"),(0,r.yg)("p",null,"Yes. Unless you were to decide to ",(0,r.yg)("a",{parentName:"p",href:"#can-i-change-the-percentages-in-a-split"},"deploy an editable splitter contract"),", Obol Splits are immutable, non-upgradeable, non-custodial, and oracle-free."),(0,r.yg)("h3",{id:"can-i-change-the-percentages-in-a-split"},"Can I change the percentages in a split?"),(0,r.yg)("p",null,"Generally Obol Splits are deployed in an immutable fashion, meaning you cannot edit the percentages after deployment. However, if you were to choose to deploy a ",(0,r.yg)("em",{parentName:"p"},"controllable")," splitter contract when creating your Split, then yes, the address you select as controller can update the split percentages arbitrarily. A common pattern for this use case is to use a Gnosis SAFE as the controller address for the split, giving a group of entities (usually the operators and principal provider) the ability to update the percentages if need be. A well known example of this pattern is the ",(0,r.yg)("a",{parentName:"p",href:"https://protocol-guild.readthedocs.io/en/latest/03-onchain-architecture.html#"},"Protocol Guild"),"."),(0,r.yg)("h3",{id:"how-do-obol-splits-work"},"How do Obol Splits work?"),(0,r.yg)("p",null,"You can read more about how Obol Splits work ",(0,r.yg)("a",{parentName:"p",href:"/docs/sc/introducing-obol-splits"},"here"),"."),(0,r.yg)("h3",{id:"are-obol-splits-open-source"},"Are Obol Splits open source?"),(0,r.yg)("p",null,"Yes, Obol Splits are licensed under GPLv3 and the source code is available ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/obol-splits"},"here"),"."),(0,r.yg)("h3",{id:"are-obol-splits-audited"},"Are Obol Splits audited?"),(0,r.yg)("p",null,"The Obol Splits contracts have been audited, though further development has continued on the contracts since. Consult the audit results ",(0,r.yg)("a",{parentName:"p",href:"/docs/sec/smart_contract_audit"},"here"),"."),(0,r.yg)("h3",{id:"are-the-obol-splits-contracts-verified-on-etherscan"},"Are the Obol Splits contracts verified on Etherscan?"),(0,r.yg)("p",null,"Yes, you can view the verified contracts on Etherscan. A list of the contract deployments can be found ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/obol-splits?#deployment"},"here"),"."),(0,r.yg)("h3",{id:"does-my-cold-wallet-have-to-call-the-obol-splits-contracts"},"Does my cold wallet have to call the Obol Splits contracts?"),(0,r.yg)("p",null,"No. Any address can trigger the contracts to move the funds, they do not need to be a member of the Split either. You can set your cold wallet/custodian address as the recipient of the principal and rewards, and use any hot wallet to pay the gas fees to push the ether into the recipient address."),(0,r.yg)("h3",{id:"are-there-any-edge-cases-i-should-be-aware-of-when-using-obol-splits"},"Are there any edge cases I should be aware of when using Obol Splits?"),(0,r.yg)("p",null,"The most important decision is to be aware of whether or not the Split contract you are using has been set up with editability. If a splitter is editable, you should understand what the address that can edit the split does. Is the editor an EOA? Who controls that address? How secure is their seed phrase? Is it a smart contract? What can that contract do? Can the controller contract be upgraded? etc. Generally, the safest thing in Obol's perspective is not to have an editable splitter, and if in future you are unhappy with the configuration, that you exit the validator and create a fresh cluster with new settings that fit your needs."),(0,r.yg)("p",null,"Another aspect to be aware of is how the splitting of principal from rewards works using the Optimistic Withdrawal Recipient contract. There are edge cases relating to not calling the contracts periodically or ahead of a withdrawal, activating more validators than the contract was configured for, and a worst case mass slashing on the network. Consult the documentation on the contract ",(0,r.yg)("a",{parentName:"p",href:"/docs/sc/introducing-obol-splits#optimistic-withdrawal-recipient"},"here"),", its audit ",(0,r.yg)("a",{parentName:"p",href:"/docs/sec/smart_contract_audit"},"here"),", and follow up with the core team if you have further questions."),(0,r.yg)("h2",{id:"debugging-errors-in-logs"},"Debugging Errors in Logs"),(0,r.yg)("p",null,"You can check if the containers on your node are outputting errors by running ",(0,r.yg)("inlineCode",{parentName:"p"},"docker compose logs")," on a machine with a running cluster."),(0,r.yg)("p",null,"Diagnose some common errors and view their resolutions ",(0,r.yg)("a",{parentName:"p",href:"/docs/faq/errors"},"here"),"."))}p.isMDXComponent=!0}}]);