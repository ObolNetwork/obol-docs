"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[23549],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88240:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={sidebar_position:4,description:"Run all nodes in a distributed validator cluster"},o="Run a cluster alone",l={unversionedId:"int/quickstart/quickstart-alone",id:"version-v0.10.1/int/quickstart/quickstart-alone",title:"Run a cluster alone",description:"Run all nodes in a distributed validator cluster",source:"@site/versioned_docs/version-v0.10.1/int/quickstart/quickstart-alone.md",sourceDirName:"int/quickstart",slug:"/int/quickstart/quickstart-alone",permalink:"/docs/v0.10.1/int/quickstart/quickstart-alone",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.10.1/int/quickstart/quickstart-alone.md",tags:[],version:"v0.10.1",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Run all nodes in a distributed validator cluster"},sidebar:"tutorialSidebar",previous:{title:"CLI",permalink:"/docs/v0.10.1/int/quickstart/group/quickstart-group-cli"},next:{title:"Run a cluster with MEV-Boost",permalink:"/docs/v0.10.1/int/quickstart/quickstart-builder-api"}},s={},p=[],c={toc:p};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"run-a-cluster-alone"},"Run a cluster alone"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Charon is in an early alpha state and is not ready to be run on mainnet")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Clone the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon-distributed-validator-cluster"},"charon-distributed-validator-cluster")," template repo and ",(0,n.kt)("inlineCode",{parentName:"p"},"cd")," into the directory."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# Clone the repo\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-cluster.git\n\n# Change directory\ncd charon-distributed-validator-cluster/\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Prepare the environment variables"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# Copy the sample environment variables\ncp .env.sample .env\n")),(0,n.kt)("p",{parentName:"li"},"For simplicities sake, this repo is configured to work with a remote Beacon node such as one from ",(0,n.kt)("a",{parentName:"p",href:"https://infura.io/"},"Infura"),"."),(0,n.kt)("p",{parentName:"li"},"Create an Eth2 project and copy the ",(0,n.kt)("inlineCode",{parentName:"p"},"https")," URL, make sure Prater is selected in dropdown of ENDPOINTS:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Example Infura API Endpoint",src:a(62183).Z,width:"2084",height:"616"})),(0,n.kt)("p",{parentName:"li"},"Replace the placeholder value of ",(0,n.kt)("inlineCode",{parentName:"p"},"CHARON_BEACON_NODE_ENDPOINT")," in your newly created ",(0,n.kt)("inlineCode",{parentName:"p"},".env")," file with this URL.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create the artifacts needed to run a testnet distributed validator cluster"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'# Create a testnet distributed validator cluster\ndocker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.10.0 create cluster --withdrawal-address="0x000000000000000000000000000000000000dead"\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Start the cluster"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# Start the distributed validator cluster\ndocker-compose up\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Checkout the monitoring dashboard and see if things look all right"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# Open Grafana\nopen http://localhost:3000/d/singlenode/single-charon-node-dashboard?\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Activate the validator on the testnet using the original ",(0,n.kt)("a",{parentName:"p",href:"https://goerli.launchpad.ethereum.org/en/overview"},"staking launchpad")," site with the deposit data created at ",(0,n.kt)("inlineCode",{parentName:"p"},".charon/cluster/deposit-data.json"),"."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If you use Mac OS, ",(0,n.kt)("inlineCode",{parentName:"li"},".charon"),' the default output folder, does not show up on the launchpad\'s "Upload Deposit Data" file picker. Rectify this by pressing ',(0,n.kt)("inlineCode",{parentName:"li"},"Command + Shift + . ")," (full stop). This should display hidden folders, allowing you to select the deposit file.")))),(0,n.kt)("p",null,"Congratulations, if this all worked you are now running a distributed validator cluster on a testnet. Try turning off a single node of the four with ",(0,n.kt)("inlineCode",{parentName:"p"},"docker stop")," and see if the validator stays online or begins missing duties, to see for yourself the fault-tolerance that can be added to proof of stake validation with this new Distributed Validator Technology."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Don't forget to be a good testnet steward and exit your validator when you are finished testing with it.")))}d.isMDXComponent=!0},62183:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/example-infura-details-4f1f2822efecb29117f6e929380cf9aa.png"}}]);