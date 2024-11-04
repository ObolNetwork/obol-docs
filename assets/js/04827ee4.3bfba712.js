"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[70310],{51181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(74848),o=n(28453);const i={sidebar_position:7,description:"Self-host a relay"},s="Self-Host a Relay",a={id:"int/quickstart/advanced/self-relay",title:"Self-Host a Relay",description:"Self-host a relay",source:"@site/versioned_docs/version-v0.17.0/int/quickstart/advanced/self-relay.md",sourceDirName:"int/quickstart/advanced",slug:"/int/quickstart/advanced/self-relay",permalink:"/docs/v0.17.0/int/quickstart/advanced/self-relay",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.17.0/int/quickstart/advanced/self-relay.md",tags:[],version:"v0.17.0",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"Self-host a relay"},sidebar:"tutorialSidebar",previous:{title:"Run Prysm validators as part of a DV Cluster",permalink:"/docs/v0.17.0/int/quickstart/advanced/prysm-vc"},next:{title:"Advanced Docker Configs",permalink:"/docs/v0.17.0/int/quickstart/advanced/adv-docker-configs"}},c={},l=[];function d(e){const t={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"self-host-a-relay",children:"Self-Host a Relay"})}),"\n",(0,r.jsx)(t.p,{children:"If you are experiencing connectivity issues with the Obol hosted relays, or you want to improve your clusters latency and decentralization, you can opt to host your own relay on a separate open and static internet port."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"# Figure out your public IP\ncurl v4.ident.me\n\n# Clone the repo and cd into it.\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-node.git\n\ncd charon-distributed-validator-node\n\n# Replace 'replace.with.public.ip.or.hostname' in relay/docker-compose.yml with your public IPv4 or DNS hostname # Replace 'replace.with.public.ip.or.hostname' in relay/docker-compose.yml with your public IPv4 or DNS hostname\n\nnano relay/docker-compose.yml\n\ndocker compose -f relay/docker-compose.yml up\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Test whether the relay is publicly accessible. This should return an ENR:\n",(0,r.jsx)(t.code,{children:"curl http://replace.with.public.ip.or.hostname:3640/enr"})]}),"\n",(0,r.jsxs)(t.p,{children:["Ensure the ENR returned by the relay contains the correct public IP and port by decoding it with ",(0,r.jsx)(t.a,{href:"https://enr-viewer.com/",children:"https://enr-viewer.com/"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Configure ",(0,r.jsx)(t.strong,{children:"ALL"})," charon nodes in your cluster to use this relay:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Either by adding a flag: ",(0,r.jsx)(t.code,{children:"--p2p-relays=http://replace.with.public.ip.or.hostname:3640/enr"})]}),"\n",(0,r.jsxs)(t.li,{children:["Or by setting the environment variable: ",(0,r.jsx)(t.code,{children:"CHARON_P2P_RELAYS=http://replace.with.public.ip.or.hostname:3640/enr"})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Note that a local ",(0,r.jsx)(t.code,{children:"relay/.charon/charon-enr-private-key"})," file will be created next to ",(0,r.jsx)(t.code,{children:"relay/docker-compose.yml"})," to ensure a persisted relay ENR across restarts."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(96540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);