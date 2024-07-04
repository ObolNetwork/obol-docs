"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[24841],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>g});var o=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(g,a(a({ref:t},d),{},{components:n})):o.createElement(g,a({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(58168),r=(n(96540),n(15680));const i={sidebar_position:3,description:"Add monitoring credentials to help the Obol Team monitor the health of your cluster"},a="Push Metrics to Obol Monitoring",l={unversionedId:"advanced/obol-monitoring",id:"version-v1.0.0/advanced/obol-monitoring",title:"Push Metrics to Obol Monitoring",description:"Add monitoring credentials to help the Obol Team monitor the health of your cluster",source:"@site/versioned_docs/version-v1.0.0/advanced/obol-monitoring.md",sourceDirName:"advanced",slug:"/advanced/obol-monitoring",permalink:"/docs/advanced/obol-monitoring",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v1.0.0/advanced/obol-monitoring.md",tags:[],version:"v1.0.0",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Add monitoring credentials to help the Obol Team monitor the health of your cluster"},sidebar:"tutorialSidebar",previous:{title:"Monitoring your Node",permalink:"/docs/advanced/monitoring"},next:{title:"Create a DV using the SDK",permalink:"/docs/advanced/quickstart-sdk"}},s={},c=[],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,o.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"push-metrics-to-obol-monitoring"},"Push Metrics to Obol Monitoring"),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"This is ",(0,r.yg)("strong",{parentName:"p"},"optional")," and does not confer any special privileges within the Obol Network.")),(0,r.yg)("p",null,"You may have been provided with ",(0,r.yg)("strong",{parentName:"p"},"Monitoring Credentials")," used to push distributed validator metrics to Obol's central Prometheus cluster to monitor, analyze, and improve your Distributed Validator Cluster's performance."),(0,r.yg)("p",null,"The provided credentials needs to be added in ",(0,r.yg)("inlineCode",{parentName:"p"},"prometheus/prometheus.yml")," replacing ",(0,r.yg)("inlineCode",{parentName:"p"},"$PROM_REMOTE_WRITE_TOKEN")," and will look like:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"obol20tnt8UC...\n")),(0,r.yg)("p",null,"The updated ",(0,r.yg)("inlineCode",{parentName:"p"},"prometheus/prometheus.yml")," file should look like:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'global:\n  scrape_interval:     30s # Set the scrape interval to every 30 seconds.\n  evaluation_interval: 30s # Evaluate rules every 30 seconds.\n\nremote_write:\n  - url: https://vm.monitoring.gcp.obol.tech/write\n    authorization:\n      credentials: obol20tnt8UC-your-credential-here...\n    write_relabel_configs:\n      - source_labels: [job]\n        regex: "charon"\n        action: keep # Keeps charon metrics and drop metrics from other containers.\n\nscrape_configs:\n  - job_name: "nethermind"\n    static_configs:\n      - targets: ["nethermind:8008"]\n  - job_name: "lighthouse"\n    static_configs:\n      - targets: ["lighthouse:5054"]\n  - job_name: "charon"\n    static_configs:\n      - targets: ["charon:3620"]\n  - job_name: "lodestar"\n    static_configs:\n      - targets: [ "lodestar:5064" ]\n')))}u.isMDXComponent=!0}}]);