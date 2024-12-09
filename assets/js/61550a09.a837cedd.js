"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[12098],{88490:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"faq/risks","title":"Centralization risks and mitigation","description":"Centralization Risks and mitigation","source":"@site/versioned_docs/version-v1.1.2/faq/risks.md","sourceDirName":"faq","slug":"/faq/risks","permalink":"/v1.1.2/faq/risks","draft":false,"unlisted":false,"editUrl":"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v1.1.2/faq/risks.md","tags":[],"version":"v1.1.2","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"description":"Centralization Risks and mitigation"},"sidebar":"tutorialSidebar","previous":{"title":"Errors & Resolutions","permalink":"/v1.1.2/faq/errors"},"next":{"title":"Handling DKG failure","permalink":"/v1.1.2/faq/dkg_failure"}}');var n=r(74848),o=r(28453);const s={sidebar_position:3,description:"Centralization Risks and mitigation"},a="Centralization risks and mitigation",l={},h=[{value:"Risk: Obol hosting the relay infrastructure",id:"risk-obol-hosting-the-relay-infrastructure",level:2},{value:"Risk: Obol being able to update Charon code",id:"risk-obol-being-able-to-update-charon-code",level:2},{value:"Risk: Obol hosting the DV Launchpad",id:"risk-obol-hosting-the-dv-launchpad",level:2},{value:"Risk: Obol going bust/rogue",id:"risk-obol-going-bustrogue",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"centralization-risks-and-mitigation",children:"Centralization risks and mitigation"})}),"\n",(0,n.jsx)(t.h2,{id:"risk-obol-hosting-the-relay-infrastructure",children:"Risk: Obol hosting the relay infrastructure"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Mitigation"}),": Self-host a relay."]}),"\n",(0,n.jsxs)(t.p,{children:["One of the risks associated with Obol hosting the ",(0,n.jsx)(t.a,{href:"/v1.1.2/charon/networking",children:"LibP2P relays"})," infrastructure allowing peer discovery is that if Obol-hosted relays go down, peers won't be able to discover each other and perform the DKG. To mitigate this risk, external organizations and node operators can consider self-hosting a relay. This way, if Obol's relays go down, the clusters can still operate through other relays in the network. Ensure that all nodes in the cluster use the same relays, or they will not be able to find each other if they are connected to different relays."]}),"\n",(0,n.jsxs)(t.p,{children:["The following non-Obol entities run relays that you can consider adding to your cluster (you can have more than one per cluster, see the ",(0,n.jsx)(t.code,{children:"--p2p-relays"})," flag of ",(0,n.jsx)(t.a,{href:"/v1.1.2/charon/charon-cli-reference#the-run-command",children:(0,n.jsx)(t.code,{children:"charon run"})}),"):"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Entity"}),(0,n.jsx)(t.th,{children:"Relay URL"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.dsrvlabs.com/",children:"DSRV"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://charon-relay.dsrvlabs.dev",children:"https://charon-relay.dsrvlabs.dev"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://infstones.com/",children:"Infstones"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://obol-relay.infstones.com/",children:"https://obol-relay.infstones.com/"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.hashquark.io/",children:"Hashquark"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://relay-2.prod-relay.721.land/",children:"https://relay-2.prod-relay.721.land/"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://figment.io/",children:"Figment"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://relay-1.obol.figment.io/",children:"https://relay-1.obol.figment.io/"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://nodeguardians.io/",children:"Node Guardians"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://obol-relay.nodeguardians.io/",children:"https://obol-relay.nodeguardians.io/"})})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"risk-obol-being-able-to-update-charon-code",children:"Risk: Obol being able to update Charon code"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Mitigation"}),": Pin specific docker versions or compile from source on a trusted commit."]}),"\n",(0,n.jsxs)(t.p,{children:["Another risk associated with Obol is the Labs team having the ability to update the ",(0,n.jsx)(t.a,{href:"https://github.com/ObolNetwork/charon",children:"Charon code"})," used by node operators within DV clusters, which could introduce vulnerabilities or malicious code. To mitigate this risk, operators can consider pinning specific versions of the Docker image or git repo that have been ",(0,n.jsx)(t.a,{href:"/v1.1.2/sec/overview#list-of-security-audits-and-assessments",children:"thoroughly tested"})," and accepted by the network. This would ensure that any updates are carefully vetted and reviewed by the community, and only introduced into a running cluster gradually. The labs team will strive to communicate the security or operational impact any Charon update entails, giving operators the chance to decide whether they want potential performance or quality of experience improvements, or whether they remain on a trusted version for longer."]}),"\n",(0,n.jsx)(t.h2,{id:"risk-obol-hosting-the-dv-launchpad",children:"Risk: Obol hosting the DV Launchpad"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Mitigation"}),": Use ",(0,n.jsx)(t.a,{href:"/v1.1.2/charon/charon-cli-reference#the-create-command",children:(0,n.jsx)(t.code,{children:"create cluster"})})," or ",(0,n.jsx)(t.a,{href:"/v1.1.2/charon/charon-cli-reference#creating-the-configuration-for-a-dkg-ceremony",children:(0,n.jsx)(t.code,{children:"create dkg"})})," locally and distribute the files manually."]}),"\n",(0,n.jsxs)(t.p,{children:["Hosting the first Charon frontend, the ",(0,n.jsx)(t.a,{href:"/v1.1.2/dvl/intro",children:"DV Launchpad"}),", on a centralized server could create a single point of failure, as users would have to rely on Obol's server to access the protocol. This could limit the decentralization of the protocol and could make it vulnerable to attacks or downtime. Obol hosting the launchpad on a decentralized network, such as IPFS is a first step but not enough. This is why the Charon code is open-source and contains a CLI interface to interact with the protocol locally."]}),"\n",(0,n.jsxs)(t.p,{children:["To mitigate the risk of launchpad failure, consider using the ",(0,n.jsx)(t.code,{children:"create cluster"})," or ",(0,n.jsx)(t.code,{children:"create dkg"})," commands locally and distributing the key shares files manually."]}),"\n",(0,n.jsx)(t.h2,{id:"risk-obol-going-bustrogue",children:"Risk: Obol going bust/rogue"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Mitigation"}),": Use key recovery."]}),"\n",(0,n.jsx)(t.p,{children:"The final centralization risk associated with Obol is the possibility of the company going bankrupt or acting maliciously, which would lead to a loss of control over the network and potentially cause damage to the ecosystem. To mitigate this risk, Obol has implemented a key recovery mechanism. This would allow the clusters to continue operating and to retrieve full private keys even if Obol is no longer able to provide support."}),"\n",(0,n.jsxs)(t.p,{children:["A guide to recombine key shares into a single private key can be accessed ",(0,n.jsx)(t.a,{href:"/v1.1.2/advanced/quickstart-combine",children:"here"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var i=r(96540);const n={},o=i.createContext(n);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);