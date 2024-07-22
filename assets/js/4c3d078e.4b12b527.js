"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[1783],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>h});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return a?r.createElement(h,l(l({ref:t},c),{},{components:a})):r.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7227:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(96540),n=a(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.A)(o.tabItem,l),hidden:a},t)}},49489:(e,t,a)=>{a.d(t,{A:()=>k});var r=a(58168),n=a(96540),o=a(20053),l=a(24245),i=a(56347),u=a(62814),s=a(45167),c=a(81269);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=p(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,s]=h({queryString:a,groupId:r}),[d,y]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),f=(()=>{const e=u??d;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),y(e)}),[s,y,o]),tabValues:o}}var f=a(11062);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),r=s[a].value;r!==i&&(d(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.A)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=y(e);return n.createElement("div",{className:(0,o.A)("tabs-container",g.tabList)},n.createElement(b,(0,r.A)({},e,t)),n.createElement(v,(0,r.A)({},e,t)))}function k(e){const t=(0,f.A)();return n.createElement(w,(0,r.A)({key:String(t)},e))}},68312:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(58168),n=(a(96540),a(15680));a(49489),a(7227);const o={sidebar_position:5,description:"Activate the Distributed Validator using the deposit contract"},l="Activate a DV",i={unversionedId:"start/activate-dv",id:"start/activate-dv",title:"Activate a DV",description:"Activate the Distributed Validator using the deposit contract",source:"@site/docs/start/activate-dv.md",sourceDirName:"start",slug:"/start/activate-dv",permalink:"/docs/next/start/activate-dv",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/docs/start/activate-dv.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Activate the Distributed Validator using the deposit contract"},sidebar:"tutorialSidebar",previous:{title:"Create a DV with a group",permalink:"/docs/next/start/quickstart_group"},next:{title:"Update a DV",permalink:"/docs/next/start/update"}},u={},s=[],c={toc:s},d="wrapper";function p(e){let{components:t,...a}=e;return(0,n.yg)(d,(0,r.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"activate-a-dv"},"Activate a DV"),(0,n.yg)("p",null,"If you have successfully created a distributed validator and you are ready to activate it, congratulations! \ud83c\udf89"),(0,n.yg)("p",null,"Once you have connected all of your Charon clients together, synced all of your ethereum nodes such that the monitoring indicates that they are all healthy and ready to operate, ",(0,n.yg)("strong",{parentName:"p"},"ONE operator")," may proceed to deposit and activate the validator(s)."),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"deposit-data.json")," to be used to deposit will be located in each operator's ",(0,n.yg)("inlineCode",{parentName:"p"},".charon")," folder. The copies across every node should be identical and any of them can be uploaded."),(0,n.yg)("admonition",{type:"warning"},(0,n.yg)("p",{parentName:"admonition"},"If you are being given a ",(0,n.yg)("inlineCode",{parentName:"p"},"deposit-data.json")," file that you didn't generate yourself, please take extreme care to ensure this operator has not given you a malicious ",(0,n.yg)("inlineCode",{parentName:"p"},"deposit-data.json")," file that is not the one you expect. Cross reference the files from multiple operators if there is any doubt. Activating the wrong validator or an invalid deposit could result in complete theft or loss of funds.")),(0,n.yg)("p",null,"Use any of the following tools to deposit. Please use the third-party tools at your own risk and always double check the staking contract address."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{href:"https://beta.launchpad.obol.tech/deposit/advisories/",target:"_blank"},"Obol Distributed Validator Launchpad")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{href:"https://launchpad.ethereum.org/",target:"_blank"},"ethereum.org Staking Launchpad")),(0,n.yg)("li",{parentName:"ul"},"From a ",(0,n.yg)("a",{href:"https://safe.global/"},"SAFE")," Multisig:",(0,n.yg)("br",null),"\n(Repeat these steps for every validator to deposit in your cluster)",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"From the SAFE UI, click on ",(0,n.yg)("code",null,"New Transaction")," then ",(0,n.yg)("code",null,"Transaction Builder")," to create a new custom transaction"),(0,n.yg)("li",{parentName:"ul"},"Enter the beacon chain contract for Deposit on mainnet - you can find it ",(0,n.yg)("a",{href:"https://ethereum.org/en/staking/deposit-contract/"},"here")),(0,n.yg)("li",{parentName:"ul"},"Fill the transaction information"),(0,n.yg)("li",{parentName:"ul"},"Set amount to ",(0,n.yg)("code",null,"32")," in ETH"),(0,n.yg)("li",{parentName:"ul"},"Use your ",(0,n.yg)("code",null,"deposit-data.json")," to fill the required data : ",(0,n.yg)("code",null,"pubkey"),",",(0,n.yg)("code",null,"withdrawal credentials"),",",(0,n.yg)("code",null,"signature"),",",(0,n.yg)("code",null,"deposit_data_root"),". Make sure to prefix the input with ",(0,n.yg)("code",null,"0x")," to format them in bytes"),(0,n.yg)("li",{parentName:"ul"},"Click on ",(0,n.yg)("code",null,"Add transaction")),(0,n.yg)("li",{parentName:"ul"},"Click on ",(0,n.yg)("code",null,"Create Batch")),(0,n.yg)("li",{parentName:"ul"},"Click on ",(0,n.yg)("code",null,"Send Batch"),", you can click on ",(0,n.yg)("code",null,"Simulate")," to check if the transaction will execute successfully"),(0,n.yg)("li",{parentName:"ul"},"Get the minimum threshold of signatures from the other addresses and execute the custom transaction")))),(0,n.yg)("p",null,"The activation process can take a minimum of 16 hours, with the maximum time to activation being dictated by the length of the activation queue, which can be weeks."))}p.isMDXComponent=!0}}]);