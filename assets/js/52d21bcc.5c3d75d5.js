"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[59740],{95788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>h});var r=n(11504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=o,h=d["".concat(s,".").concat(g)]||d[g]||u[g]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},34608:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(45072),o=(n(11504),n(95788));const a={sidebar_position:4,description:"Handling DKG failure"},i="Handling DKG failure",l={unversionedId:"int/faq/dkg_failure",id:"version-v0.19.0/int/faq/dkg_failure",title:"Handling DKG failure",description:"Handling DKG failure",source:"@site/versioned_docs/version-v0.19.0/int/faq/dkg_failure.md",sourceDirName:"int/faq",slug:"/int/faq/dkg_failure",permalink:"/docs/v0.19.0/int/faq/dkg_failure",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.19.0/int/faq/dkg_failure.md",tags:[],version:"v0.19.0",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Handling DKG failure"},sidebar:"tutorialSidebar",previous:{title:"Centralization risks and mitigation",permalink:"/docs/v0.19.0/int/faq/risks"},next:{title:"Introduction",permalink:"/docs/v0.19.0/charon/intro"}},s={},c=[{value:"Cleaning up the <code>.charon</code> directory",id:"cleaning-up-the-charon-directory",level:2},{value:"Further debugging",id:"further-debugging",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(d,(0,r.c)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"handling-dkg-failure"},"Handling DKG failure"),(0,o.yg)("p",null,"While the DKG process has been tested and validated against many different configuration instances, it can still encounter issues which might result in failure."),(0,o.yg)("p",null,"Our DKG is designed in a way that doesn't allow for inconsistent results: either it finishes correctly for every peer, or it fails."),(0,o.yg)("p",null,"This is a ",(0,o.yg)("strong",{parentName:"p"},"safety")," feature: you don't want to deposit an Ethereum distributed validator that not every operator is able to participate to, or even reach threshold for."),(0,o.yg)("p",null,"The most common source of issues lies in the network stack: if any of the peer's Internet connection glitches substantially, the DKG will fail."),(0,o.yg)("p",null,"Charon's DKG doesn't allow peer reconnection once the process is started, but it does allow for re-connections before that."),(0,o.yg)("p",null,"When you see the following message:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"14:08:34.505 INFO dkg        Waiting to connect to all peers...\n")),(0,o.yg)("p",null,"this means your Charon instance is waiting for all the other cluster peers to start their DKG process: at this stage, peers can disconnect and reconnect at will, the DKG process will still continue."),(0,o.yg)("p",null,"A log line will confirm the connection of a new peer:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'14:08:34.523 INFO dkg        Connected to peer 1 of 3                 {"peer": "fantastic-adult"}\n14:08:34.529 INFO dkg        Connected to peer 2 of 3                 {"peer": "crazy-bunch"}\n14:08:34.673 INFO dkg        Connected to peer 3 of 3                 {"peer": "considerate-park"}\n')),(0,o.yg)("p",null,"As soon as all the peers are connected, this message will be shown:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"14:08:34.924 INFO dkg        All peers connected, starting DKG ceremony\n")),(0,o.yg)("p",null,"Past this stage ",(0,o.yg)("strong",{parentName:"p"},"no disconnections are allowed"),", and ",(0,o.yg)("em",{parentName:"p"},"all peers must leave their terminals open")," in order for the DKG process to complete: this is a synchronous phase, and every peer is required in order to reach completion."),(0,o.yg)("p",null,"If for some reason the DKG process fails, you would see error logs that resemble this:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"14:28:46.691 ERRO cmd        Fatal error: sync step: p2p connection failed, please retry DKG: context canceled\n")),(0,o.yg)("p",null,"As the error message suggests, the DKG process needs to be retried."),(0,o.yg)("h2",{id:"cleaning-up-the-charon-directory"},"Cleaning up the ",(0,o.yg)("inlineCode",{parentName:"h2"},".charon")," directory"),(0,o.yg)("p",null,"One cannot simply retry the DKG process: Charon refuses to overwrite any runtime file in order to avoid inconsistencies and private key loss."),(0,o.yg)("p",null,"When attempting to re-run a DKG with an unclean data directory -- which is either ",(0,o.yg)("inlineCode",{parentName:"p"},".charon")," or what was specified with the ",(0,o.yg)("inlineCode",{parentName:"p"},"--data-dir")," CLI parameter -- this is the error that will be shown:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'14:44:13.448 ERRO cmd        Fatal error: data directory not clean, cannot continue {"disallowed_entity": "cluster-lock.json", "data-dir": "/compose/node0"}\n')),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"disallowed_entity")," field lists all the files that Charon refuses to overwrite, while ",(0,o.yg)("inlineCode",{parentName:"p"},"data-dir")," is the full path of the runtime directory the DKG process is using."),(0,o.yg)("p",null,"In order to retry the DKG process one must delete the following entities, if present:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"validator_keys")," directory"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"cluster-lock.json")," file"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"deposit-data.json")," file",(0,o.yg)("admonition",{parentName:"li",type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"The ",(0,o.yg)("inlineCode",{parentName:"p"},"charon-enr-private-key")," file ",(0,o.yg)("strong",{parentName:"p"},"must be preserved"),", failure to do so requires the DKG process to be restarted from the beginning by creating a new cluster definition.")),"If you're doing a DKG with a custom cluster definition - for example, create with ",(0,o.yg)("inlineCode",{parentName:"li"},"charon create dkg")," rather than the Obol Launchpad - you can re-use the same file.")),(0,o.yg)("p",null,"Once this process has been completed, the cluster operators can retry a DKG."),(0,o.yg)("h2",{id:"further-debugging"},"Further debugging"),(0,o.yg)("p",null,"If for some reason the DKG process fails again, node operators are adviced to reach out to the Obol team by opening an ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon/issues"},"issue"),", detailing what troubleshooting steps were taken and providing ",(0,o.yg)("strong",{parentName:"p"},"debug logs"),"."),(0,o.yg)("p",null,"To enable debug logs first clean up the Charon data directory as explained in ",(0,o.yg)("a",{parentName:"p",href:"#cleaning-up-the-charon-directory"},"the previous paragraph"),", then run your DKG command by appending ",(0,o.yg)("inlineCode",{parentName:"p"},"--log-level=debug")," at the end."),(0,o.yg)("p",null,"In order for the Obol team to debug your issue as quickly and precisely as possible please provide full logs in textual form, not through screenshots or display photos."),(0,o.yg)("p",null,"Providing complete logs is particularly important, since it allows the team to reconstruct precisely what happened."))}u.isMDXComponent=!0}}]);