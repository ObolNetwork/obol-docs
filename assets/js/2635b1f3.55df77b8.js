"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[50199],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:1,description:"Test the solo cluster locally"},l="Run a test cluster locally",i={unversionedId:"int/quickstart/alone/test-locally",id:"int/quickstart/alone/test-locally",title:"Run a test cluster locally",description:"Test the solo cluster locally",source:"@site/docs/int/quickstart/alone/test-locally.md",sourceDirName:"int/quickstart/alone",slug:"/int/quickstart/alone/test-locally",permalink:"/docs/next/int/quickstart/alone/test-locally",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/docs/int/quickstart/alone/test-locally.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Test the solo cluster locally"},sidebar:"tutorialSidebar",previous:{title:"Quickstart Guides",permalink:"/docs/next/int/quickstart/"},next:{title:"Create the private key shares",permalink:"/docs/next/int/quickstart/alone/create-keys"}},s={},c=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Create the key shares locally",id:"create-the-key-shares-locally",level:2},{value:"Start the cluster",id:"start-the-cluster",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"run-a-test-cluster-locally"},"Run a test cluster locally"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"This is a demo repo to understand how Distributed Validators work and ",(0,r.kt)("strong",{parentName:"p"},"is not suitable for a mainnet deployment"),"."),(0,r.kt)("p",{parentName:"admonition"},"This guide only runs one Execution Client, one Consensus Client, and 6 Distributed Validator Charon Client + Validator Client pairs on a single docker instance. As a consequence, if this machine fails, there will not be fault tolerance."),(0,r.kt)("p",{parentName:"admonition"},"Follow these two guides sequentially instead for production deployment: ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/int/quickstart/alone/create-keys"},"create keys centrally")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/int/quickstart/alone/deploy"},"how to deploy them"),". ")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon-distributed-validator-cluster"},(0,r.kt)("inlineCode",{parentName:"a"},"charon-distributed-validator-cluster"))," repo contains six charon clients in separate docker containers along with an execution client and consensus client, simulating a Distributed Validator cluster running."),(0,r.kt)("p",null,"The default cluster consists of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/NethermindEth/nethermind"},"Nethermind"),", an execution layer client"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/sigp/lighthouse"},"Lighthouse"),", a consensus layer client"),(0,r.kt)("li",{parentName:"ul"},"Six ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ObolNetwork/charon"},"charon")," nodes"),(0,r.kt)("li",{parentName:"ul"},"A mixture of validator clients:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"VC0: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/sigp/lighthouse"},"Lighthouse")),(0,r.kt)("li",{parentName:"ul"},"vc1: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ConsenSys/teku"},"Teku")),(0,r.kt)("li",{parentName:"ul"},"vc2: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/status-im/nimbus-eth2"},"Nimbus")),(0,r.kt)("li",{parentName:"ul"},"vc3: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/sigp/lighthouse"},"Lighthouse")),(0,r.kt)("li",{parentName:"ul"},"vc4: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ConsenSys/teku"},"Teku")),(0,r.kt)("li",{parentName:"ul"},"vc5: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/status-im/nimbus-eth2"},"Nimbus"))))),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ensure you have ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"docker")," installed."),(0,r.kt)("li",{parentName:"ul"},"Ensure you have ",(0,r.kt)("a",{parentName:"li",href:"https://git-scm.com/downloads"},"git")," installed. "),(0,r.kt)("li",{parentName:"ul"},"Make sure ",(0,r.kt)("inlineCode",{parentName:"li"},"docker")," is running before executing the commands below.")),(0,r.kt)("h2",{id:"create-the-key-shares-locally"},"Create the key shares locally"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon-distributed-validator-cluster"},"charon-distributed-validator-cluster")," repo and ",(0,r.kt)("inlineCode",{parentName:"p"},"cd")," into the directory."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# Clone the repo\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-cluster.git\n\n# Change directory\ncd charon-distributed-validator-cluster/\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Prepare the environment variables"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# Copy the sample environment variables\ncp .env.sample .env\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},".env.sample")," is a sample environment file that allows overriding default configuration defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),". Uncomment and set any variable to override its value.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the artifacts needed to run a DV cluster by running the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'# Enter required validator addresses\nWITHDRAWAL_ADDR=<ENTER YOUR WITHDRAWAL ADDRESS HERE>\nFEE_RECIPIENT_ADDR=<ENTER YOUR FEE RECIPIENT ADDRESS HERE>\n\n# Create a distributed validator cluster\ndocker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.18.0 create cluster --name="mycluster" --cluster-dir=".charon/cluster/" --withdrawal-addresses="${WITHDRAWAL_ADDR}" --fee-recipient-addresses="${FEE_RECIPIENT_ADDR}" --nodes 6 --network goerli --num-validators=1\n')))),(0,r.kt)("p",null,"These commands will create six folders within ",(0,r.kt)("inlineCode",{parentName:"p"},".charon/cluster"),", one for each node created. You will need to rename ",(0,r.kt)("inlineCode",{parentName:"p"},"node*")," to ",(0,r.kt)("inlineCode",{parentName:"p"},".charon")," for each folder to be found by the default ",(0,r.kt)("inlineCode",{parentName:"p"},"charon run")," command, or you can use ",(0,r.kt)("inlineCode",{parentName:"p"},'charon run --private-key-file=".charon/cluster/node0/charon-enr-private-key" --lock-file=".charon/cluster/node0/cluster-lock.json"')," for each instance of charon you start."),(0,r.kt)("h2",{id:"start-the-cluster"},"Start the cluster"),(0,r.kt)("p",null,"Run this command to start your cluster containers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# Start the distributed validator cluster\ndocker compose up --build\n")),(0,r.kt)("p",null,"Check the monitoring dashboard and see if things look all right"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# Open Grafana\nopen http://localhost:3000/d/laEp8vupp\n")))}p.isMDXComponent=!0}}]);