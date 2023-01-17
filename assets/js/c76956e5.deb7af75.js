"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[5549],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37544:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={sidebar_position:4,description:"Run all nodes in a distributed validator cluster"},s="Run a cluster alone",c={unversionedId:"int/quickstart/quickstart-alone",id:"version-v0.12.0/int/quickstart/quickstart-alone",title:"Run a cluster alone",description:"Run all nodes in a distributed validator cluster",source:"@site/versioned_docs/version-v0.12.0/int/quickstart/quickstart-alone.md",sourceDirName:"int/quickstart",slug:"/int/quickstart/quickstart-alone",permalink:"/docs/v0.12.0/int/quickstart/quickstart-alone",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.12.0/int/quickstart/quickstart-alone.md",tags:[],version:"v0.12.0",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Run all nodes in a distributed validator cluster"},sidebar:"tutorialSidebar",previous:{title:"CLI",permalink:"/docs/v0.12.0/int/quickstart/group/quickstart-group-cli"},next:{title:"Run a cluster with MEV-Boost",permalink:"/docs/v0.12.0/int/quickstart/quickstart-builder-api"}},u={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"run-a-cluster-alone"},"Run a cluster alone"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Charon is in an early alpha state and is not ready to be run on mainnet")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon-distributed-validator-cluster"},"charon-distributed-validator-cluster")," template repo and ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," into the directory."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Clone the repo\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-cluster.git\n\n# Change directory\ncd charon-distributed-validator-cluster/\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Prepare the environment variables"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Copy the sample environment variables\ncp .env.sample .env\n")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},".env.sample")," is a sample environment file that allows overriding default configuration defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),". Uncomment and set any variable to override its value.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create the artifacts needed to run a testnet distributed validator cluster"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# Create a testnet distributed validator cluster\ndocker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.12.0 create cluster --withdrawal-address="0x000000000000000000000000000000000000dead"\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start the cluster"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Start the distributed validator cluster\ndocker-compose up\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Checkout the monitoring dashboard and see if things look all right"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Open Grafana\nopen http://localhost:3000/d/singlenode/single-charon-node-dashboard?\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Activate the validator on the testnet using the original ",(0,o.kt)("a",{parentName:"p",href:"https://goerli.launchpad.ethereum.org/en/overview"},"staking launchpad")," site with the deposit data created at ",(0,o.kt)("inlineCode",{parentName:"p"},".charon/cluster/deposit-data.json"),"."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If you use Mac OS, ",(0,o.kt)("inlineCode",{parentName:"li"},".charon"),' the default output folder, does not show up on the launchpad\'s "Upload Deposit Data" file picker. Rectify this by pressing ',(0,o.kt)("inlineCode",{parentName:"li"},"Command + Shift + . ")," (full stop). This should display hidden folders, allowing you to select the deposit file.")))),(0,o.kt)("p",null,"If this all worked, you are now running a distributed validator cluster on a testnet. Congratulations \ud83c\udf89.\nTry turning off a single node of the four with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker stop")," and see if the validator stays online or begins missing duties, to see for yourself the fault-tolerance that can be added to proof of stake validation with this new Distributed Validator Technology."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Don't forget to be a good testnet steward and exit your validator when you are finished testing with it.")))}m.isMDXComponent=!0}}]);