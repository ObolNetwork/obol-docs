"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[2896],{95788:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>h});var a=r(11504);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),y=n,h=d["".concat(s,".").concat(y)]||d[y]||p[y]||o;return r?a.createElement(h,l(l({ref:t},c),{},{components:r})):a.createElement(h,l({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},22440:(e,t,r)=>{r.d(t,{c:()=>l});var a=r(11504),n=r(14971);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.c)(o.tabItem,l),hidden:r},t)}},86212:(e,t,r)=>{r.d(t,{c:()=>E});var a=r(45072),n=r(11504),o=r(14971),l=r(77288),i=r(55592),s=r(95068),u=r(30604),c=r(46432);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function y(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.Uz)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._M)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=p(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!y({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:r,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.IN)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),m=(()=>{const e=s??d;return y({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{m&&i(m)}),[m]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!y({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var m=r(89788);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:r,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.MV)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),a=u[r].value;a!==i&&(d(t),s(a))},y=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.c)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.c)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:y,onClick:p},l,{className:(0,o.c)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":i===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=f(e);return n.createElement("div",{className:(0,o.c)("tabs-container",b.tabList)},n.createElement(g,(0,a.c)({},e,t)),n.createElement(v,(0,a.c)({},e,t)))}function E(e){const t=(0,m.c)();return n.createElement(k,(0,a.c)({key:String(t)},e))}},5096:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=r(45072),n=(r(11504),r(95788)),o=r(86212),l=r(22440);const i={sidebar_position:2,description:"Run all nodes in a distributed validator cluster"},s="Create the private key shares",u={unversionedId:"int/quickstart/alone/create-keys",id:"version-v0.19.0/int/quickstart/alone/create-keys",title:"Create the private key shares",description:"Run all nodes in a distributed validator cluster",source:"@site/versioned_docs/version-v0.19.0/int/quickstart/alone/create-keys.md",sourceDirName:"int/quickstart/alone",slug:"/int/quickstart/alone/create-keys",permalink:"/docs/v0.19.0/int/quickstart/alone/create-keys",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.19.0/int/quickstart/alone/create-keys.md",tags:[],version:"v0.19.0",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Run all nodes in a distributed validator cluster"},sidebar:"tutorialSidebar",previous:{title:"Run a test cluster locally",permalink:"/docs/v0.19.0/int/quickstart/alone/test-locally"},next:{title:"Deploy the cluster",permalink:"/docs/v0.19.0/int/quickstart/alone/deploy"}},c={},d=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Create the key shares locally",id:"create-the-key-shares-locally",level:2}],p={toc:d},y="wrapper";function h(e){let{components:t,...r}=e;return(0,n.yg)(y,(0,a.c)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"create-the-private-key-shares"},"Create the private key shares"),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"Charon is in a beta state and should be used with caution according to its ",(0,n.yg)("a",{parentName:"p",href:"https://obol.tech/terms.pdf"},"Terms of Use"),".")),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"Running a Distributed Validator alone means that a single operator manages all of the nodes of the DV. Depending on the operators security preferences, the private key shares can be created centrally, and distributed securely to each node. This is the focus of the below guide."),(0,n.yg)("p",{parentName:"admonition"},"Alternatively, the private key shares can be created in a lower-trust manner with a ",(0,n.yg)("a",{parentName:"p",href:"/docs/v0.19.0/int/key-concepts#distributed-validator-key-generation-ceremony"},"Distributed Key Generation")," process, which avoids the validator private key being stored in full anywhere, at any point in its lifecycle. Follow the ",(0,n.yg)("a",{parentName:"p",href:"/docs/v0.19.0/int/quickstart/group/"},"group quickstart")," instead for this latter case.")),(0,n.yg)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Ensure you have ",(0,n.yg)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"docker")," installed."),(0,n.yg)("li",{parentName:"ul"},"Make sure ",(0,n.yg)("inlineCode",{parentName:"li"},"docker")," is running before executing the commands below.")),(0,n.yg)("h2",{id:"create-the-key-shares-locally"},"Create the key shares locally"),(0,n.yg)(o.c,{groupId:"create-keys",mdxType:"Tabs"},(0,n.yg)(l.c,{value:"docker",label:"Charon Command",mdxType:"TabItem"},"Create the artifacts needed to run a DV cluster by running the following command to setup the inputs for the DV. Check the ",(0,n.yg)("a",{href:"../../../charon/charon-cli-reference"},"Charon CLI reference")," for additional optional flags to set.",(0,n.yg)("br",null),(0,n.yg)("br",null),(0,n.yg)("pre",null,(0,n.yg)("code",null,"WITHDRAWAL_ADDR=[ENTER YOUR WITHDRAWAL ADDRESS HERE]",(0,n.yg)("br",null),"FEE_RECIPIENT_ADDR=[ENTER YOUR FEE RECIPIENT ADDRESS HERE]",(0,n.yg)("br",null),"NB_NODES=[ENTER AMOUNT OF DESIRED NODES]",(0,n.yg)("br",null),'NETWORK="goerli"')),"Then, run this command to create all the key shares and cluster artifacts locally:",(0,n.yg)("br",null),(0,n.yg)("br",null),(0,n.yg)("pre",null,(0,n.yg)("code",null,'docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.19.0 create cluster --name="Quickstart Cluster" --withdrawal-addresses="',"${WITHDRAWAL_ADDR}",'" --fee-recipient-addresses="',"${FEE_RECIPIENT_ADDR}",'" --nodes="',"${NB_NODES}",'" --network="',"${NETWORK}",'" --num-validators=1 --cluster-dir="cluster"'))),(0,n.yg)(l.c,{value:"launchpad",label:"Launchpad UI",default:!0,mdxType:"TabItem"},"Go to the ",(0,n.yg)("a",{href:"https://goerli.launchpad.obol.tech"},"Obol Goerli DV Launchpad")," and select ",(0,n.yg)("code",null,"Create a distributed validator alone"),". Follow the steps to configure your DV cluster.")),(0,n.yg)("p",null,"After successful completion, a subdirectory ",(0,n.yg)("inlineCode",{parentName:"p"},"cluster/")," should be created. In it are as many folders as nodes of the cluster. Each folder contains charon artifacts and partial private keys needed for each node of the cluster."),(0,n.yg)("p",null,"Once you have made a backup of the ",(0,n.yg)("inlineCode",{parentName:"p"},"cluster/")," folder, you can move to ",(0,n.yg)("a",{parentName:"p",href:"/docs/v0.19.0/int/quickstart/alone/deploy"},"deploying this cluster physically"),"."))}h.isMDXComponent=!0}}]);