"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[66271],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),k=o,h=d["".concat(l,".").concat(k)]||d[k]||u[k]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},55470:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:3,description:"Split existing validator keys"},i="Split existing validator private keys",s={unversionedId:"int/quickstart/advanced/quickstart-split",id:"version-v0.16.0/int/quickstart/advanced/quickstart-split",title:"Split existing validator private keys",description:"Split existing validator keys",source:"@site/versioned_docs/version-v0.16.0/int/quickstart/advanced/quickstart-split.md",sourceDirName:"int/quickstart/advanced",slug:"/int/quickstart/advanced/quickstart-split",permalink:"/docs/int/quickstart/advanced/quickstart-split",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.16.0/int/quickstart/advanced/quickstart-split.md",tags:[],version:"v0.16.0",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Split existing validator keys"},sidebar:"tutorialSidebar",previous:{title:"Combine DV private key shares",permalink:"/docs/int/quickstart/advanced/quickstart-combine"},next:{title:"Push metrics to Obol Monitoring",permalink:"/docs/int/quickstart/advanced/monitoring-credentials"}},l={},c=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Step 1. Clone the charon repo and copy existing keystore files",id:"step-1-clone-the-charon-repo-and-copy-existing-keystore-files",level:2},{value:"Step 2. Split the keys using the charon docker command",id:"step-2-split-the-keys-using-the-charon-docker-command",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"split-existing-validator-private-keys"},"Split existing validator private keys"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Charon is in an alpha state and should be used with caution according to its ",(0,o.kt)("a",{parentName:"p",href:"https://obol.tech/terms.pdf"},"Terms of Use"),"."),(0,o.kt)("p",{parentName:"admonition"},"This process should only be used if you want to split an ",(0,o.kt)("em",{parentName:"p"},"existing validator private key")," into multiple private key shares for use in a Distributed Validator Cluster. If your existing validator is not properly shut down before the Distributed Validator starts, your validator may be slashed."),(0,o.kt)("p",{parentName:"admonition"},"If you are starting a new validator, you should follow a ",(0,o.kt)("a",{parentName:"p",href:"/docs/int/quickstart/"},"quickstart guide")," instead.")),(0,o.kt)("p",null,"Split an existing Ethereum validator key into multiple key shares for use in an ",(0,o.kt)("a",{parentName:"p",href:"../../key-concepts#distributed-validator-cluster"},"Obol Distributed Validator Cluster"),"."),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ensure you have the existing validator keystores (the ones to split) and passwords."),(0,o.kt)("li",{parentName:"ul"},"Ensure you have ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"docker")," installed."),(0,o.kt)("li",{parentName:"ul"},"Make sure ",(0,o.kt)("inlineCode",{parentName:"li"},"docker")," is running before executing the commands below.")),(0,o.kt)("h2",{id:"step-1-clone-the-charon-repo-and-copy-existing-keystore-files"},"Step 1. Clone the charon repo and copy existing keystore files"),(0,o.kt)("p",null,"Clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon"},"charon")," repo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Clone the repo\ngit clone https://github.com/ObolNetwork/charon.git\n\n# Change directory\ncd charon/\n\n# Create a folder within this checked out repo\nmkdir split_keys\n")),(0,o.kt)("p",null,"Copy the existing validator ",(0,o.kt)("inlineCode",{parentName:"p"},"keystore.json")," files into this new folder. Alongside them, with a matching filename but ending with ",(0,o.kt)("inlineCode",{parentName:"p"},".txt")," should be the password to the keystore. E.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"keystore-0.json")," ",(0,o.kt)("inlineCode",{parentName:"p"},"keystore-0.txt")),(0,o.kt)("p",null,"At the end of this process, you should have a tree like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"\u251c\u2500\u2500 split_keys\n\u2502\xa0\xa0 \u251c\u2500\u2500 keystore-0.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 keystore-0.txt\n\u2502\xa0\xa0 \u251c\u2500\u2500 keystore-1.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 keystore-1.txt\n\u2502   ...\n\u2502\xa0\xa0 \u251c\u2500\u2500 keystore-*.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 keystore-*.txt\n")),(0,o.kt)("h2",{id:"step-2-split-the-keys-using-the-charon-docker-command"},"Step 2. Split the keys using the charon docker command"),(0,o.kt)("p",null,"Run the following docker command to split the keys:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'CHARON_VERSION=                # E.g. v0.16.0\nCLUSTER_NAME=                  # The name of the cluster you want to create.\nWITHDRAWAL_ADDRESS=            # The address you want to use for withdrawals.\nFEE_RECIPIENT_ADDRESS=         # The address you want to use for fee payments.\nNODES=                         # The number of nodes in the cluster.    \n\ndocker run --rm -v $(pwd):/opt/charon obolnetwork/charon:${CHARON_VERSION} create cluster --name="${CLUSTER_NAME}" --withdrawal-addresses="${WITHDRAWAL_ADDRESS}" --fee-recipient-addresses="${FEE_RECIPIENT_ADDRESS}" --split-existing-keys --split-keys-dir=/opt/charon/split_keys --nodes ${NODES}\n')),(0,o.kt)("p",null,"The above command will create ",(0,o.kt)("inlineCode",{parentName:"p"},"validator_keys")," along with ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster-lock.json")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"./.charon/cluster")," for each node."),(0,o.kt)("p",null,"Command output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"***************** WARNING: Splitting keys **********************\n Please make sure any existing validator has been shut down for\n at least 2 finalised epochs before starting the charon cluster,\n otherwise slashing could occur.                               \n****************************************************************\n\nCreated charon cluster:\n --split-existing-keys=true\n\n.charon/cluster/\n\u251c\u2500 node[0-*]/                   Directory for each node\n\u2502  \u251c\u2500 charon-enr-private-key    Charon networking private key for node authentication\n\u2502  \u251c\u2500 cluster-lock.json         Cluster lock defines the cluster lock file which is signed by all nodes\n\u2502  \u251c\u2500 validator_keys            Validator keystores and password\n\u2502  \u2502  \u251c\u2500 keystore-*.json        Validator private share key for duty signing\n\u2502  \u2502  \u251c\u2500 keystore-*.txt         Keystore password files for keystore-*.json\n")),(0,o.kt)("p",null,"These split keys can now be used to start a charon cluster."))}d.isMDXComponent=!0}}]);