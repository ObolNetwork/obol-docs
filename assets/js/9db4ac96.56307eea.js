"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[17935],{28518:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"run/integrations/Dappnode","title":"Dappnode","description":"Dappnode Frequently asked questions","source":"@site/versioned_docs/version-v1.2.0/run/integrations/Dappnode.mdx","sourceDirName":"run/integrations","slug":"/run/integrations/Dappnode","permalink":"/run/integrations/Dappnode","draft":false,"unlisted":false,"editUrl":"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v1.2.0/run/integrations/Dappnode.mdx","tags":[],"version":"v1.2.0","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"description":"Dappnode Frequently asked questions"},"sidebar":"tutorialSidebar","previous":{"title":"Create a Lido CSM DV","permalink":"/run/integrations/lido-csm"},"next":{"title":"Create a DV Using the SDK","permalink":"/adv/advanced/quickstart-sdk"}}');var s=t(74848),r=t(28453);const a={sidebar_position:3,description:"Dappnode Frequently asked questions"},i="Dappnode",d={},l=[{value:"For setup, see quickstart guide:",id:"for-setup-see-quickstart-guide",level:2},{value:"Frequently asked questions",id:"frequently-asked-questions",level:2},{value:"If an operator uses an ENR to join a cluster, then exits the validator key, do they need to clean up the validator and Charon volumes to use the same ENR for another cluster?",id:"if-an-operator-uses-an-enr-to-join-a-cluster-then-exits-the-validator-key-do-they-need-to-clean-up-the-validator-and-charon-volumes-to-use-the-same-enr-for-another-cluster",level:3},{value:"Does an operator need to use the <code>VALIDATOR_EXTRA_OPTS</code> to pass the <code>builderonly</code> or <code>builderalways</code> flag for Lodestar VC?",id:"does-an-operator-need-to-use-the-validator_extra_opts-to-pass-the-builderonly-or-builderalways-flag-for-lodestar-vc",level:3},{value:"How can users running two clusters (e.g., one for EtherFi solo stakers and another for Techne) on the same Dappnode machine push monitoring data from both clusters to Obol?",id:"how-can-users-running-two-clusters-eg-one-for-etherfi-solo-stakers-and-another-for-techne-on-the-same-dappnode-machine-push-monitoring-data-from-both-clusters-to-obol",level:3}];function u(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"dappnode",children:"Dappnode"})}),"\n",(0,s.jsx)(o.h1,{id:"dappnode-1",children:"Dappnode"}),"\n",(0,s.jsx)(o.h2,{id:"for-setup-see-quickstart-guide",children:"For setup, see quickstart guide:"}),"\n",(0,s.jsxs)(o.p,{children:["For setup of a DV using Dappnode, see the quickstart guide ",(0,s.jsx)(o.a,{href:"/run/start/quickstart_alone",children:"Create a DV Alone"}),', and select the appropriate tab for "Dappnode".']}),"\n",(0,s.jsx)(o.h2,{id:"frequently-asked-questions",children:"Frequently asked questions"}),"\n",(0,s.jsx)(o.h3,{id:"if-an-operator-uses-an-enr-to-join-a-cluster-then-exits-the-validator-key-do-they-need-to-clean-up-the-validator-and-charon-volumes-to-use-the-same-enr-for-another-cluster",children:"If an operator uses an ENR to join a cluster, then exits the validator key, do they need to clean up the validator and Charon volumes to use the same ENR for another cluster?"}),"\n",(0,s.jsx)(o.p,{children:"Yes, they need to clean up the Charon and validator volumes. However, instead of deleting everything, the operator can:"}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsx)(o.li,{children:"Download a backup (keep a copy just in case)."}),"\n",(0,s.jsx)(o.li,{children:"Edit the backup, keeping only the necessary files from the specific cluster (see image below)"}),"\n"]}),"\n",(0,s.jsx)("img",{src:"/img/BackupFAQ.jpeg",alt:"necessary files"}),"\n",(0,s.jsxs)(o.ol,{start:"3",children:["\n",(0,s.jsx)(o.li,{children:"Recompress the edited backup and upload it again after removing the Charon and validator volumes."}),"\n"]}),"\n",(0,s.jsxs)(o.h3,{id:"does-an-operator-need-to-use-the-validator_extra_opts-to-pass-the-builderonly-or-builderalways-flag-for-lodestar-vc",children:["Does an operator need to use the ",(0,s.jsx)(o.code,{children:"VALIDATOR_EXTRA_OPTS"})," to pass the ",(0,s.jsx)(o.code,{children:"builderonly"})," or ",(0,s.jsx)(o.code,{children:"builderalways"})," flag for Lodestar VC?"]}),"\n",(0,s.jsxs)(o.p,{children:["No, if ",(0,s.jsx)(o.code,{children:"ENABLE_MEV_BOOST"})," is set to ",(0,s.jsx)(o.code,{children:"true"}),", these flags will be added automatically."]}),"\n",(0,s.jsx)("img",{src:"/img/dappnodeFlags.jpeg",alt:"flags will be added"}),"\n",(0,s.jsx)(o.h3,{id:"how-can-users-running-two-clusters-eg-one-for-etherfi-solo-stakers-and-another-for-techne-on-the-same-dappnode-machine-push-monitoring-data-from-both-clusters-to-obol",children:"How can users running two clusters (e.g., one for EtherFi solo stakers and another for Techne) on the same Dappnode machine push monitoring data from both clusters to Obol?"}),"\n",(0,s.jsx)(o.p,{children:'In the Config tab, there is a field called "Charons to monitor by Obol (optional)". You just need to enter the cluster numbers you are using in Dappnode. For example, if you\u2019re running three nodes on clusters 1, 2, and 3, you would enter \u201c1,2,3\u201d.'})]})}function c(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>a,x:()=>i});var n=t(96540);const s={},r=n.createContext(s);function a(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);