"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[24841],{26320:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"advanced/obol-monitoring","title":"Push Metrics to Obol Monitoring","description":"Add monitoring credentials to help the Obol Team monitor the health of your cluster","source":"@site/versioned_docs/version-v1.0.0/advanced/obol-monitoring.md","sourceDirName":"advanced","slug":"/advanced/obol-monitoring","permalink":"/v1.0.0/advanced/obol-monitoring","draft":false,"unlisted":false,"editUrl":"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v1.0.0/advanced/obol-monitoring.md","tags":[],"version":"v1.0.0","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"description":"Add monitoring credentials to help the Obol Team monitor the health of your cluster"},"sidebar":"tutorialSidebar","previous":{"title":"Monitoring your Node","permalink":"/v1.0.0/advanced/monitoring"},"next":{"title":"Create a DV using the SDK","permalink":"/v1.0.0/advanced/quickstart-sdk"}}');var r=o(74848),i=o(28453);const s={sidebar_position:3,description:"Add monitoring credentials to help the Obol Team monitor the health of your cluster"},a="Push Metrics to Obol Monitoring",d={},c=[];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"push-metrics-to-obol-monitoring",children:"Push Metrics to Obol Monitoring"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["This is ",(0,r.jsx)(n.strong,{children:"optional"})," and does not confer any special privileges within the Obol Network."]})}),"\n",(0,r.jsxs)(n.p,{children:["You may have been provided with ",(0,r.jsx)(n.strong,{children:"Monitoring Credentials"})," used to push distributed validator metrics to Obol's central Prometheus cluster to monitor, analyze, and improve your Distributed Validator Cluster's performance."]}),"\n",(0,r.jsxs)(n.p,{children:["The provided credentials needs to be added in ",(0,r.jsx)(n.code,{children:"prometheus/prometheus.yml"})," replacing ",(0,r.jsx)(n.code,{children:"$PROM_REMOTE_WRITE_TOKEN"})," and will look like:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"obol20tnt8UC...\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The updated ",(0,r.jsx)(n.code,{children:"prometheus/prometheus.yml"})," file should look like:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'global:\n  scrape_interval:     30s # Set the scrape interval to every 30 seconds.\n  evaluation_interval: 30s # Evaluate rules every 30 seconds.\n\nremote_write:\n  - url: https://vm.monitoring.gcp.obol.tech/write\n    authorization:\n      credentials: obol20tnt8UC-your-credential-here...\n    write_relabel_configs:\n      - source_labels: [job]\n        regex: "charon"\n        action: keep # Keeps charon metrics and drop metrics from other containers.\n\nscrape_configs:\n  - job_name: "nethermind"\n    static_configs:\n      - targets: ["nethermind:8008"]\n  - job_name: "lighthouse"\n    static_configs:\n      - targets: ["lighthouse:5054"]\n  - job_name: "charon"\n    static_configs:\n      - targets: ["charon:3620"]\n  - job_name: "lodestar"\n    static_configs:\n      - targets: [ "lodestar:5064" ]\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var t=o(96540);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);