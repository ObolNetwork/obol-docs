"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[33703],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),h=n,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return r?a.createElement(m,l(l({ref:t},c),{},{components:r})):a.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},18679:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},73992:(e,t,r)=>{r.d(t,{Z:()=>N});var a=r(87462),n=r(67294),o=r(86010),l=r(72957),i=r(16550),s=r(75238),u=r(33609),c=r(92560);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function k(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=d(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=m({queryString:r,groupId:a}),[p,k]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),f=(()=>{const e=s??p;return h({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),k(e)}),[u,k,o]),tabValues:o}}var f=r(51048);const b="tabList__CuJ",g="tabItem_LNqP";function y(e){let{className:t,block:r,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),a=u[r].value;a!==i&&(p(t),s(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:d},l,{className:(0,o.Z)("tabs__item",g,l?.className,{"tabs__item--active":i===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=k(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",b)},n.createElement(y,(0,a.Z)({},e,t)),n.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return n.createElement(w,(0,a.Z)({key:String(t)},e))}},58713:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),o=r(73992),l=r(18679);const i={sidebar_position:1,description:"A leader/creator creates a cluster configuration to be shared with operators"},s="Creator & Leader Journey",u={unversionedId:"int/quickstart/group/quickstart-group-leader-creator",id:"version-v0.14.4/int/quickstart/group/quickstart-group-leader-creator",title:"Creator & Leader Journey",description:"A leader/creator creates a cluster configuration to be shared with operators",source:"@site/versioned_docs/version-v0.14.4/int/quickstart/group/quickstart-group-leader-creator.md",sourceDirName:"int/quickstart/group",slug:"/int/quickstart/group/quickstart-group-leader-creator",permalink:"/docs/v0.14.4/int/quickstart/group/quickstart-group-leader-creator",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.14.4/int/quickstart/group/quickstart-group-leader-creator.md",tags:[],version:"v0.14.4",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"A leader/creator creates a cluster configuration to be shared with operators"},sidebar:"tutorialSidebar",previous:{title:"Run a cluster with others",permalink:"/docs/v0.14.4/int/quickstart/group/"},next:{title:"Operator Journey",permalink:"/docs/v0.14.4/int/quickstart/group/quickstart-group-operator"}},c={},p=[{value:"Overview Video",id:"overview-video",level:2},{value:"Step 1. Collect Ethereum addresses of the cluster operators",id:"step-1-collect-ethereum-addresses-of-the-cluster-operators",level:2},{value:"Step 2. Create and back up a private key for charon",id:"step-2-create-and-back-up-a-private-key-for-charon",level:2},{value:"Step 3. Create the DKG configuration file and distribute it to cluster operators",id:"step-3-create-the-dkg-configuration-file-and-distribute-it-to-cluster-operators",level:2}],d={toc:p};function h(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"creator--leader-journey"},"Creator & Leader Journey"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Charon is in an early alpha state and is not ready to be run on mainnet")),(0,n.kt)("p",null,"The following instructions aim to assist with the preparation of a distributed validator key generation ceremony. Select the ",(0,n.kt)("em",{parentName:"p"},"Leader")," tab if you ",(0,n.kt)("strong",{parentName:"p"},"will")," be an operator participating in the cluster, and select the ",(0,n.kt)("em",{parentName:"p"},"Creator")," tab if you ",(0,n.kt)("strong",{parentName:"p"},"will NOT")," be an operator in the cluster. "),(0,n.kt)("p",null,"These roles hold no position of privilege in the cluster, they only set the initial terms of the cluster that the other operators agree to. "),(0,n.kt)(o.Z,{groupId:"leader-creator",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"leader",label:"Leader",default:!0,mdxType:"TabItem"},"The person creating the cluster ",(0,n.kt)("b",null,"will")," be a node operator in the cluster.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("h1",null,"Pre-requisites"),(0,n.kt)("ul",null,(0,n.kt)("li",null,"Ensure you have ",(0,n.kt)("a",{href:"https://docs.docker.com/engine/install/",target:"_blank"},"docker")," installed."),(0,n.kt)("li",null,"Ensure you have ",(0,n.kt)("a",{href:"https://git-scm.com/downloads",target:"_blank"},"git")," installed."),(0,n.kt)("li",null,"Make sure ",(0,n.kt)("code",null,"docker")," is running before executing the commands below."))),(0,n.kt)(l.Z,{value:"creator",label:"Creator",mdxType:"TabItem"},"The person creating the cluster ",(0,n.kt)("b",null,"will not")," be a node operator in the cluster.")),(0,n.kt)("h2",{id:"overview-video"},"Overview Video"),(0,n.kt)("p",{align:"center"},(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/OK6WE8te33Q",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,n.kt)("h2",{id:"step-1-collect-ethereum-addresses-of-the-cluster-operators"},"Step 1. Collect Ethereum addresses of the cluster operators"),(0,n.kt)("p",null,"Before starting the cluster creation, you will need to collect one Ethereum address per operator in the cluster. They will need to be able to sign messages through metamask with this address. Broader wallet support will be added in future. "),(0,n.kt)("h2",{id:"step-2-create-and-back-up-a-private-key-for-charon"},"Step 2. Create and back up a private key for charon"),(0,n.kt)(o.Z,{groupId:"leader-creator",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"leader",label:"Leader",default:!0,mdxType:"TabItem"},(0,n.kt)("p",null,"  In order to prepare for a distributed key generation ceremony, you need to create an ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/int/faq/errors#enrs-keys"},"ENR")," for your charon client. Operators in your cluster will also need to do this step, as per their ",(0,n.kt)("a",{parentName:"p",href:"./quickstart-group-operator#step-2-create-and-back-up-a-private-key-for-charon"},"quickstart"),". This ENR is a public/private key pair, and allows the other charon clients in the DKG to identify and connect to your node."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'# Clone this repo\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-node.git\n\n# Change directory\ncd charon-distributed-validator-node\n\n# Create your charon ENR private key, this will create a charon-enr-private-key file in the .charon directory\ndocker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.14.4 create enr\n')),(0,n.kt)("p",null,"You should expect to see a console output like"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Created ENR private key: .charon/charon-enr-private-key\nenr:-JG4QGQpV4qYe32QFUAbY1UyGNtNcrVMip83cvJRhw1brMslPeyELIz3q6dsZ7GblVaCjL_8FKQhF6Syg-O_kIWztimGAYHY5EvPgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQKzMe_GFPpSqtnYl-mJr8uZAUtmkqccsAx7ojGmFy-FY4N0Y3CCDhqDdWRwgg4u\n")),(0,n.kt)("p",null,"If instead of being shown your ",(0,n.kt)("inlineCode",{parentName:"p"},"enr")," you see an error saying ",(0,n.kt)("inlineCode",{parentName:"p"},"permission denied")," then you may need to ",(0,n.kt)("a",{parentName:"p",href:"/docs/int/faq/errors#docker-permission-denied-error"},"update docker permissions")," to allow the command to run successfully."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Please make sure to create a backup of the private key at ",(0,n.kt)("inlineCode",{parentName:"p"},".charon/charon-enr-private-key"),". Be careful not to commit it to git! ",(0,n.kt)("strong",{parentName:"p"},"If you lose this file you won't be able to take part in the DKG ceremony and start the DV cluster successfully.")))),(0,n.kt)(l.Z,{value:"creator",label:"Creator",mdxType:"TabItem"},(0,n.kt)("p",null,"  This step is not needed and you can move on to ",(0,n.kt)("a",{parentName:"p",href:"#step-3-create-the-dkg-configuration-file-and-distribute-it-to-cluster-operators"},"Step 3"),"."))),(0,n.kt)("h2",{id:"step-3-create-the-dkg-configuration-file-and-distribute-it-to-cluster-operators"},"Step 3. Create the DKG configuration file and distribute it to cluster operators"),(0,n.kt)("p",null,"You will prepare the configuration file for the distributed key generation ceremony using the launchpad."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the ",(0,n.kt)("a",{parentName:"p",href:"https://goerli.launchpad.obol.tech"},"DV Launchpad")," ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Connect your wallet"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Connect your Wallet",src:r(26874).Z,width:"2842",height:"1800"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("inlineCode",{parentName:"p"},"Create a Cluster with a group")," then ",(0,n.kt)("inlineCode",{parentName:"p"},"Get Started"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Get Started",src:r(23411).Z,width:"2880",height:"1298"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Follow the flow and accept the advisories.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure the Cluster "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Input the ",(0,n.kt)("inlineCode",{parentName:"p"},"Cluster Name")," & ",(0,n.kt)("inlineCode",{parentName:"p"},"Cluster Size")," (i.e. number of operators in the cluster). The threshold for the cluster to operate sucessfully will update automatically."),(0,n.kt)(o.Z,{groupId:"leader-creator",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"leader",label:"Leader",default:!0,mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("p",{parentName:"li"},"  \u26a0\ufe0f Leave the ",(0,n.kt)("inlineCode",{parentName:"p"},"Non-Operator")," toggle ",(0,n.kt)("b",null,"OFF"),".")))),(0,n.kt)(l.Z,{value:"creator",label:"Creator",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("p",{parentName:"li"},"\u26a0\ufe0f Turn the ",(0,n.kt)("inlineCode",{parentName:"p"},"Non-Operator")," toggle ",(0,n.kt)("b",null,"ON"),".")))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Input the Ethereum addresses for each operator collected during ",(0,n.kt)("a",{parentName:"p",href:"#step-1-collect-ethereum-addresses-of-the-cluster-operators"},"step 1"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Select the desired amount of validators (32 ETH each) the cluster will run.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Paste your ",(0,n.kt)("inlineCode",{parentName:"p"},"ENR")," generated at ",(0,n.kt)("a",{parentName:"p",href:"#step-2-create-and-back-up-a-private-key-for-charon"},"Step 2"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("inlineCode",{parentName:"p"},"Withdrawal Addresses")," method. Use ",(0,n.kt)("inlineCode",{parentName:"p"},"Single address")," to receive the principal and fees to a single address or ",(0,n.kt)("inlineCode",{parentName:"p"},"Splitter Contracts")," to share them among operators."),(0,n.kt)(o.Z,{groupId:"withdrawl-method",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"single",label:"Single Address",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",null,"Enter the ",(0,n.kt)("code",null,"Withdrawal Address")," that will receive the validator effective balance at exit and when balance skimming occurs."),(0,n.kt)("li",null,"Enter the ",(0,n.kt)("code",null,"Fee Recipient Address")," to receive MEV rewards (if enabled), and block proposal priority fees."),(0,n.kt)("br",null)),"You can set them to be the same as your connected wallet address in one click.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("img",{alt:"Create Group",src:r(77475).Z,width:"2616",height:"6184"}))),(0,n.kt)(l.Z,{value:"splitter",label:"Reward Splitter",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",null,"Enter the Ethereum address to claim the validator principal (32 ether) at exit."),(0,n.kt)("li",null,"Enter the Ethereum addresses and their percentage split of the validator's rewards. Validator rewards include consensus rewards, MEV rewards and proposal priority fees.")),(0,n.kt)("br",null),(0,n.kt)("p",{parentName:"li"},"   ",(0,n.kt)("img",{alt:"Create Group",src:r(76731).Z,width:"1532",height:"5520"}))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("inlineCode",{parentName:"p"},"Create Cluster Configuration")))))),(0,n.kt)(o.Z,{groupId:"withdrawl-method",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"single",label:"Single Address",mdxType:"TabItem"},(0,n.kt)("ul",null,"6. Review the cluster configuration")),(0,n.kt)(l.Z,{value:"splitter",label:"Reward Splitter",mdxType:"TabItem"},(0,n.kt)("ul",null,"6. Deploy the withdrawal manager contracts by signing the two transactions with your wallet."))),(0,n.kt)(o.Z,{groupId:"leader-creator",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"leader",label:"Leader",default:!0,mdxType:"TabItem"},(0,n.kt)("ul",null,"7. You will be asked to confirm your configuration and to sign:"),(0,n.kt)("ul",null,(0,n.kt)("ul",null,(0,n.kt)("li",null,"The ",(0,n.kt)("code",null,"config_hash"),". This is a hashed representation of the details of this cluster, to ensure everyone is agreeing to an identical setup."),(0,n.kt)("li",null,"The ",(0,n.kt)("code",null,"operator_config_hash"),". This is your acceptance of the terms as a participating node operator."),(0,n.kt)("li",null,"Your ",(0,n.kt)("code",null,"ENR"),". Signing your ENR authorises the corresponding private key to act on your behalf in the cluster.")))),(0,n.kt)(l.Z,{value:"creator",label:"Creator",mdxType:"TabItem"},(0,n.kt)("ul",null,"7. You will be asked to confirm your configuration and to sign:"),(0,n.kt)("ul",null,(0,n.kt)("ul",null,(0,n.kt)("li",null,"The ",(0,n.kt)("code",null,"config_hash"),". This is a hashed representation of the details of this cluster, to ensure everyone is agreeing to an identical setup."))))),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Share your cluster invite link with the operators. Following the link will show you a screen waiting for other operators to accept the configuration you created."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Invite Operators",src:r(3075).Z,width:"1604",height:"1478"})))),(0,n.kt)(o.Z,{groupId:"leader-creator",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"leader",label:"Leader",default:!0,mdxType:"TabItem"},(0,n.kt)("p",null,"  \ud83d\udc49 Once every participating operator has signed their approval to the terms, you will continue the ",(0,n.kt)("a",{parentName:"p",href:"./quickstart-group-operator#step-3-run-the-dkg"},(0,n.kt)("strong",{parentName:"a"},"Operator")," journey")," by completing the distributed key generation step.")),(0,n.kt)(l.Z,{value:"creator",label:"Creator",mdxType:"TabItem"},(0,n.kt)("p",null,"  Your journey ends here and you can monitor with the link whether the operators confirm their agreement to the cluster by signing their approval. Future versions of the launchpad will allow a creator to track a distributed validator's lifecycle in its entirety."))))}h.isMDXComponent=!0},26874:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Guide01-d53467f3ff24bc1fe1e6b90c8f181df2.png"},23411:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Guide02-07714c655844eeb2b6805bd87a387233.png"},76731:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Guide03-splitter-e53a8a48ee8f47e584dd7b289b352c7e.png"},77475:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Guide03-42559630a410769d2b8c6d9635ede640.png"},3075:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Guide04-f9db7d75efeda34396609e991e2840b6.png"}}]);