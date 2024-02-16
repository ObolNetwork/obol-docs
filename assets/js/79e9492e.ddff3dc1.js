"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[99644],{95788:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>y});var a=r(11504);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,y=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(y,l(l({ref:t},c),{},{components:r})):a.createElement(y,l({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},22440:(e,t,r)=>{r.d(t,{c:()=>l});var a=r(11504),n=r(14971);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.c)(o.tabItem,l),hidden:r},t)}},86212:(e,t,r)=>{r.d(t,{c:()=>k});var a=r(45072),n=r(11504),o=r(14971),l=r(77288),i=r(55592),u=r(95068),s=r(30604),c=r(46432);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,s.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.Uz)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._M)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=p(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,s]=y({queryString:r,groupId:a}),[d,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.IN)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),g=(()=>{const e=u??d;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),h(e)}),[s,h,o]),tabValues:o}}var g=r(89788);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:r,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.MV)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),a=s[r].value;a!==i&&(d(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.c)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.c)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.c)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":i===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return n.createElement("div",{className:(0,o.c)("tabs-container",f.tabList)},n.createElement(b,(0,a.c)({},e,t)),n.createElement(v,(0,a.c)({},e,t)))}function k(e){const t=(0,g.c)();return n.createElement(w,(0,a.c)({key:String(t)},e))}},48468:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=r(45072),n=(r(11504),r(95788)),o=r(86212),l=r(22440);const i={sidebar_position:6,description:"Update your DV cluster with the latest Charon release"},u="Update a DV",s={unversionedId:"int/quickstart/update",id:"version-v0.17.1/int/quickstart/update",title:"Update a DV",description:"Update your DV cluster with the latest Charon release",source:"@site/versioned_docs/version-v0.17.1/int/quickstart/update.md",sourceDirName:"int/quickstart",slug:"/int/quickstart/update",permalink:"/docs/v0.17.1/int/quickstart/update",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.17.1/int/quickstart/update.md",tags:[],version:"v0.17.1",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"Update your DV cluster with the latest Charon release"},sidebar:"tutorialSidebar",previous:{title:"Exit a DV",permalink:"/docs/v0.17.1/int/quickstart/quickstart-exit"},next:{title:"Run a DV on mainnet",permalink:"/docs/v0.17.1/int/quickstart/quickstart-mainnet"}},c={},d=[{value:"Navigate to the node directory",id:"navigate-to-the-node-directory",level:3},{value:"Pull latest changes to the repo",id:"pull-latest-changes-to-the-repo",level:3},{value:"Create (or recreate) your DV stack",id:"create-or-recreate-your-dv-stack",level:3},{value:"Conflicts",id:"conflicts",level:3}],p={toc:d},m="wrapper";function y(e){let{components:t,...r}=e;return(0,n.yg)(m,(0,a.c)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"update-a-dv"},"Update a DV"),(0,n.yg)("p",null,"It is highly recommended to upgrade your DV stack from time to time. This ensures that your node is secure, performant, up-to-date and you don't miss important hard forks."),(0,n.yg)("p",null,"To do this, follow these steps:"),(0,n.yg)("h3",{id:"navigate-to-the-node-directory"},"Navigate to the node directory"),(0,n.yg)(o.c,{groupId:"group-solo",mdxType:"Tabs"},(0,n.yg)(l.c,{value:"group",label:"Group cluster",default:!0,mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",null,"cd charon-distributed-validator-node"))),(0,n.yg)(l.c,{value:"solo",label:"Solo cluster",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",null,"cd charon-distributed-validator-cluster")))),(0,n.yg)("h3",{id:"pull-latest-changes-to-the-repo"},"Pull latest changes to the repo"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"git pull\n")),(0,n.yg)("h3",{id:"create-or-recreate-your-dv-stack"},"Create (or recreate) your DV stack"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"docker compose up -d --build\n")),(0,n.yg)("admonition",{type:"warning"},(0,n.yg)("p",{parentName:"admonition"},"If you run more than one node in a DV Cluster, please take caution upgrading them simultaneously. Particularly if you are updating or changing the validator client used or recreating disks. It is recommended to update nodes on a sequential basis to minimse liveness and safety risks. ")),(0,n.yg)("h3",{id:"conflicts"},"Conflicts"),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"You may get a ",(0,n.yg)("inlineCode",{parentName:"p"},"git conflict")," error similar to this:")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-markdown"},"error: Your local changes to the following files would be overwritten by merge:\nprometheus/prometheus.yml\n...\nPlease commit your changes or stash them before you merge.\n")),(0,n.yg)("p",null,"This is probably because you have made some changes to some of the files, for example to the ",(0,n.yg)("inlineCode",{parentName:"p"},"prometheus/prometheus.yml")," file."),(0,n.yg)("p",null,"To resolve this error, you can either:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Stash and reapply changes if you want to keep your custom changes:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"git stash          # Stash your local changes\ngit pull           # Pull the latest changes\ngit stash apply    # Reapply your changes from the stash\n")),(0,n.yg)("p",{parentName:"li"},"  After reapplying your changes, manually resolve any conflicts that may arise between your changes and the pulled changes using a text editor or Git's conflict resolution tools.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Override changes and recreate configuration if you don't need to preserve your local changes and want to discard them entirely:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"git reset --hard    # Discard all local changes and override with the pulled changes\ndocker-compose up -d --build    # Recreate your DV stack\n")),(0,n.yg)("p",{parentName:"li"},"  After overriding the changes, you will need to recreate your DV stack using the updated files.\nBy following one of these approaches, you should be able to handle Git conflicts when pulling the latest changes to your repository, either preserving your changes or overriding them as per your requirements."))))}y.isMDXComponent=!0}}]);