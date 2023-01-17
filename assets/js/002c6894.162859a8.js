"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[3701],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),h=n,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||o;return r?a.createElement(m,l(l({ref:t},c),{},{components:r})):a.createElement(m,l({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:function(e,t,r){r.d(t,{Z:function(){return l}});var a=r(67294),n=r(86010),o="tabItem_Ymn6";function l(e){var t=e.children,r=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},65488:function(e,t,r){r.d(t,{Z:function(){return h}});var a=r(83117),n=r(67294),o=r(86010),l=r(72389),i=r(67392),u=r(7094),s=r(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,r,l=e.lazy,d=e.block,h=e.defaultValue,m=e.values,k=e.groupId,f=e.className,b=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.l)(g,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===h?h:null!=(t=null!=h?h:null==(r=b.find((function(e){return e.props.default})))?void 0:r.props.value)?t:b[0].props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,u.U)(),N=w.tabGroupChoices,T=w.setTabGroupChoices,C=(0,n.useState)(y),O=C[0],E=C[1],Z=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var I=N[k];null!=I&&I!==O&&g.some((function(e){return e.value===I}))&&E(I)}var q=function(e){var t=e.currentTarget,r=Z.indexOf(t),a=g[r].value;a!==O&&(x(t),E(a),null!=k&&T(k,String(a)))},S=function(e){var t,r=null;switch(e.key){case"Enter":q(e);break;case"ArrowRight":var a,n=Z.indexOf(e.currentTarget)+1;r=null!=(a=Z[n])?a:Z[0];break;case"ArrowLeft":var o,l=Z.indexOf(e.currentTarget)-1;r=null!=(o=Z[l])?o:Z[Z.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},g.map((function(e){var t=e.value,r=e.label,l=e.attributes;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return Z.push(e)},onKeyDown:S,onClick:q},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=r?r:t)}))),l?(0,n.cloneElement)(b.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function h(e){var t=(0,l.Z)();return n.createElement(d,(0,a.Z)({key:String(t)},e))}},72760:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return h}});var a=r(83117),n=r(80102),o=(r(67294),r(3905)),l=r(65488),i=r(85162),u=["components"],s={sidebar_position:1,description:"A leader/creator creates a cluster configuration to be shared with operators"},c="Creator & Leader Journey",p={unversionedId:"int/quickstart/group/quickstart-group-leader-creator",id:"version-v0.13.0/int/quickstart/group/quickstart-group-leader-creator",title:"Creator & Leader Journey",description:"A leader/creator creates a cluster configuration to be shared with operators",source:"@site/versioned_docs/version-v0.13.0/int/quickstart/group/quickstart-group-leader-creator.md",sourceDirName:"int/quickstart/group",slug:"/int/quickstart/group/quickstart-group-leader-creator",permalink:"/docs/int/quickstart/group/quickstart-group-leader-creator",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.13.0/int/quickstart/group/quickstart-group-leader-creator.md",tags:[],version:"v0.13.0",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"A leader/creator creates a cluster configuration to be shared with operators"},sidebar:"tutorialSidebar",previous:{title:"Run a cluster with others",permalink:"/docs/int/quickstart/group/"},next:{title:"Operator Journey",permalink:"/docs/int/quickstart/group/quickstart-group-operator"}},d={},h=[{value:"Overview Video",id:"overview-video",level:2},{value:"Step 1. Collect Ethereum addresses of the cluster operators",id:"step-1-collect-ethereum-addresses-of-the-cluster-operators",level:2},{value:"Step 2. Create and back up a private key for charon",id:"step-2-create-and-back-up-a-private-key-for-charon",level:2},{value:"Step 3. Create the DKG configuration file and distribute it to cluster operators",id:"step-3-create-the-dkg-configuration-file-and-distribute-it-to-cluster-operators",level:2}],m={toc:h};function k(e){var t=e.components,s=(0,n.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creator--leader-journey"},"Creator & Leader Journey"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Charon is in an early alpha state and is not ready to be run on mainnet")),(0,o.kt)("p",null,"The following instructions aim to assist with the preparation of a distributed validator key generation ceremony. Select the ",(0,o.kt)("em",{parentName:"p"},"Leader")," tab if you ",(0,o.kt)("strong",{parentName:"p"},"will")," be an operator participating in the cluster, and select the ",(0,o.kt)("em",{parentName:"p"},"Creator")," tab if you ",(0,o.kt)("strong",{parentName:"p"},"will NOT")," be an operator in the cluster. "),(0,o.kt)("p",null,"These roles hold no position of privilege in the cluster, they only set the initial terms of the cluster that the other operators agree to. "),(0,o.kt)(l.Z,{groupId:"leader-creator",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"leader",label:"Leader",default:!0,mdxType:"TabItem"},"The person creating the cluster ",(0,o.kt)("b",null,"will")," be a node operator in the cluster.",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("h1",null,"Pre-requisites"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Ensure you have ",(0,o.kt)("a",{href:"https://docs.docker.com/engine/install/",target:"_blank"},"docker")," installed."),(0,o.kt)("li",null,"Ensure you have ",(0,o.kt)("a",{href:"https://git-scm.com/downloads",target:"_blank"},"git")," installed."),(0,o.kt)("li",null,"Make sure ",(0,o.kt)("code",null,"docker")," is running before executing the commands below."))),(0,o.kt)(i.Z,{value:"creator",label:"Creator",mdxType:"TabItem"},"The person creating the cluster ",(0,o.kt)("b",null,"will not")," be a node operator in the cluster.")),(0,o.kt)("h2",{id:"overview-video"},"Overview Video"),(0,o.kt)("p",{align:"center"},(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/OK6WE8te33Q",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,o.kt)("h2",{id:"step-1-collect-ethereum-addresses-of-the-cluster-operators"},"Step 1. Collect Ethereum addresses of the cluster operators"),(0,o.kt)("p",null,"Before starting the cluster creation, you will need to collect one Ethereum address per operator in the cluster. They will need to be able to sign messages through metamask with this address. Broader wallet support will be added in future. "),(0,o.kt)("h2",{id:"step-2-create-and-back-up-a-private-key-for-charon"},"Step 2. Create and back up a private key for charon"),(0,o.kt)(l.Z,{groupId:"leader-creator",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"leader",label:"Leader",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"In order to prepare for a distributed key generation ceremony, you need to create an ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/int/faq/errors#enrs-keys"},"ENR")," for your charon client. Operators in your cluster will also need to do this step, as per their ",(0,o.kt)("a",{parentName:"p",href:"./quickstart-group-operator#step-2-create-and-back-up-a-private-key-for-charon"},"quickstart"),". This ENR is a public/private key pair, and allows the other charon clients in the DKG to identify and connect to your node."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# Clone this repo\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-node.git\n\n# Change directory\ncd charon-distributed-validator-node\n\n# Create your charon ENR private key, this will create a charon-enr-private-key file in the .charon directory\ndocker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.13.0 create enr\n')),(0,o.kt)("p",null,"You should expect to see a console output like"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Created ENR private key: .charon/charon-enr-private-key\nenr:-JG4QGQpV4qYe32QFUAbY1UyGNtNcrVMip83cvJRhw1brMslPeyELIz3q6dsZ7GblVaCjL_8FKQhF6Syg-O_kIWztimGAYHY5EvPgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQKzMe_GFPpSqtnYl-mJr8uZAUtmkqccsAx7ojGmFy-FY4N0Y3CCDhqDdWRwgg4u\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Please make sure to create a backup of the private key at ",(0,o.kt)("inlineCode",{parentName:"p"},".charon/charon-enr-private-key"),". Be careful not to commit it to git! ",(0,o.kt)("strong",{parentName:"p"},"If you lose this file you won't be able to take part in the DKG ceremony and start the DV cluster successfully.")))),(0,o.kt)(i.Z,{value:"creator",label:"Creator",mdxType:"TabItem"},(0,o.kt)("p",null,"This step is not needed and you can move on to ",(0,o.kt)("a",{parentName:"p",href:"#step-3-create-the-dkg-configuration-file-and-distribute-it-to-cluster-operators"},"Step 3"),"."))),(0,o.kt)("h2",{id:"step-3-create-the-dkg-configuration-file-and-distribute-it-to-cluster-operators"},"Step 3. Create the DKG configuration file and distribute it to cluster operators"),(0,o.kt)("p",null,"You will prepare the configuration file for the distributed key generation ceremony using the launchpad."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://goerli.launchpad.obol.tech"},"DV Launchpad")," ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Connect your wallet"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Connect your Wallet",src:r(26874).Z,width:"2842",height:"1800"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("inlineCode",{parentName:"p"},"Create a Cluster with a group")," then ",(0,o.kt)("inlineCode",{parentName:"p"},"Get Started"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Get Started",src:r(23411).Z,width:"2880",height:"1298"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Follow the flow and accept the advisories.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure the Cluster "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Input the ",(0,o.kt)("inlineCode",{parentName:"li"},"Cluster Name")," & ",(0,o.kt)("inlineCode",{parentName:"li"},"Cluster Size")," (i.e. number of operators in the cluster). The threshold for the cluster to operate sucessfully will update automatically.")),(0,o.kt)(l.Z,{groupId:"leader-creator",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"leader",label:"Leader",default:!0,mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("p",{parentName:"li"},"\u26a0\ufe0f Leave the ",(0,o.kt)("inlineCode",{parentName:"p"},"Non-Operator")," toggle ",(0,o.kt)("b",null,"OFF"),".")))),(0,o.kt)(i.Z,{value:"creator",label:"Creator",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("p",{parentName:"li"},"\u26a0\ufe0f Turn the ",(0,o.kt)("inlineCode",{parentName:"p"},"Non-Operator")," toggle ",(0,o.kt)("b",null,"ON"),"."))))),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Input the Ethereum addresses for each operator collected during ",(0,o.kt)("a",{parentName:"li",href:"#step-1-collect-ethereum-addresses-of-the-cluster-operators"},"step 1"),"."),(0,o.kt)("li",{parentName:"ul"},"Select the desired amount of validators (32 ETH each) the cluster will run."),(0,o.kt)("li",{parentName:"ul"},"Paste your ",(0,o.kt)("inlineCode",{parentName:"li"},"ENR")," generated at ",(0,o.kt)("a",{parentName:"li",href:"#step-2-create-and-back-up-a-private-key-for-charon"},"Step 2"),"."),(0,o.kt)("li",{parentName:"ul"},"Input the ",(0,o.kt)("inlineCode",{parentName:"li"},"Withdrawal Address")," to receive validator principal and consensus rewards at exit."),(0,o.kt)("li",{parentName:"ul"},"Input the ",(0,o.kt)("inlineCode",{parentName:"li"},"Fee Recipient Address")," to receive transaction fees from block proposals. "),(0,o.kt)("li",{parentName:"ul"},"Create Cluster Configuration")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Create Group",src:r(77475).Z,width:"2616",height:"6184"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Review, Confirm and Sign the following with your wallet"))),(0,o.kt)(l.Z,{groupId:"leader-creator",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"leader",label:"Leader",default:!0,mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("ul",null,(0,o.kt)("li",null,"The config hash. This is a hashed representation of all of the details for this cluster."),(0,o.kt)("li",null,(0,o.kt)("p",null,"  The ",(0,o.kt)("inlineCode",{parentName:"p"},"operator_config_hash")," ")),(0,o.kt)("li",null,(0,o.kt)("p",null,"  Your ",(0,o.kt)("inlineCode",{parentName:"p"},"ENR"),": this signature authorises the key represented by this ENR to act on your behalf in the cluster."))))),(0,o.kt)(i.Z,{value:"creator",label:"Creator",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("ul",null,(0,o.kt)("li",null,"The config hash. This is a hashed representation of all of the details for this cluster."))))),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Share your cluster invite link with the operators. Following the link will show you a screen waiting for other operators to accept the configuration you created."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Invite Operators",src:r(3075).Z,width:"1604",height:"1478"})))),(0,o.kt)(l.Z,{groupId:"leader-creator",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"leader",label:"Leader",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"   \ud83d\udc49 Once every participating operator has signed their approval to the terms, you will continue the ",(0,o.kt)("a",{parentName:"p",href:"./quickstart-group-operator#step-3-run-the-dkg"},(0,o.kt)("strong",{parentName:"a"},"Operator")," journey")," by completing the distributed key generation step.")),(0,o.kt)(i.Z,{value:"creator",label:"Creator",mdxType:"TabItem"},(0,o.kt)("p",null,"   Your journey ends here and you can monitor with the link whether the operators confirm their agreement to the cluster by signing their approval. Future versions of the launchpad will allow a creator to track a distributed validator's lifecycle in its entirety."))))}k.isMDXComponent=!0},26874:function(e,t,r){t.Z=r.p+"assets/images/Guide01-d53467f3ff24bc1fe1e6b90c8f181df2.png"},23411:function(e,t,r){t.Z=r.p+"assets/images/Guide02-07714c655844eeb2b6805bd87a387233.png"},77475:function(e,t,r){t.Z=r.p+"assets/images/Guide03-42559630a410769d2b8c6d9635ede640.png"},3075:function(e,t,r){t.Z=r.p+"assets/images/Guide04-f9db7d75efeda34396609e991e2840b6.png"}}]);