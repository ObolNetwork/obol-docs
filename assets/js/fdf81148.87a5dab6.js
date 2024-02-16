"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[82916],{95788:(e,t,a)=>{a.d(t,{Iu:()=>u,yg:()=>y});var o=a(11504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),p=n,y=d["".concat(l,".").concat(p)]||d[p]||h[p]||r;return a?o.createElement(y,s(s({ref:t},u),{},{components:a})):o.createElement(y,s({ref:t},u))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<r;c++)s[c]=a[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8772:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=a(45072),n=(a(11504),a(95788));const r={sidebar_position:4,description:"Software Development Security Assessment"},s="Software Development at Obol",i={unversionedId:"sec/ev-assessment",id:"version-v0.17.1/sec/ev-assessment",title:"Software Development at Obol",description:"Software Development Security Assessment",source:"@site/versioned_docs/version-v0.17.1/sec/ev-assessment.md",sourceDirName:"sec",slug:"/sec/ev-assessment",permalink:"/docs/v0.17.1/sec/ev-assessment",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.17.1/sec/ev-assessment.md",tags:[],version:"v0.17.1",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Software Development Security Assessment"},sidebar:"tutorialSidebar",previous:{title:"Contacts",permalink:"/docs/v0.17.1/sec/contact"},next:{title:"Smart Contract Audit",permalink:"/docs/v0.17.1/sec/smart_contract_audit"}},l={},c=[{value:"Contents:",id:"contents",level:2},{value:"Background Info",id:"background-info",level:2},{value:"What is Obol?",id:"what-is-obol",level:3},{value:"What is Obol\u2019s goal?",id:"what-is-obols-goal",level:3},{value:"What are Obol\u2019s objectives?",id:"what-are-obols-objectives",level:3},{value:"What is Obol\u2019s product?",id:"what-is-obols-product",level:3},{value:"Analysis - Cluster Setup and DKG",id:"analysis---cluster-setup-and-dkg",level:2},{value:"Key Risks",id:"key-risks",level:2},{value:"1. Validation of Contract Deployment and Deposit Data Relies Heavily on Launchpad",id:"1-validation-of-contract-deployment-and-deposit-data-relies-heavily-on-launchpad",level:3},{value:"2. Social Consensus, aka \u201cWho sends the 32 ETH?\u201d",id:"2-social-consensus-aka-who-sends-the-32-eth",level:3},{value:"Recommendations",id:"recommendations",level:2},{value:"R1: Users should deploy cluster contracts through a known on-chain entry point",id:"r1-users-should-deploy-cluster-contracts-through-a-known-on-chain-entry-point",level:3},{value:"Obol\u2019s response:",id:"obols-response",level:4},{value:"R2: Users should deposit to the beacon chain through a pool contract",id:"r2-users-should-deposit-to-the-beacon-chain-through-a-pool-contract",level:3},{value:"Obol\u2019s response:",id:"obols-response-1",level:4},{value:"R3: Raise the barrier to entry to push an update to the Launchpad",id:"r3-raise-the-barrier-to-entry-to-push-an-update-to-the-launchpad",level:3},{value:"Obol\u2019s response:",id:"obols-response-2",level:4},{value:"Additional Notes",id:"additional-notes",level:2},{value:"Vulnerability Disclosure",id:"vulnerability-disclosure",level:3},{value:"Obol\u2019s response:",id:"obols-response-3",level:4},{value:"Key Personnel Risk",id:"key-personnel-risk",level:3},{value:"Obol\u2019s response:",id:"obols-response-4",level:4}],u={toc:c},d="wrapper";function h(e){let{components:t,...r}=e;return(0,n.yg)(d,(0,o.c)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"software-development-at-obol"},"Software Development at Obol"),(0,n.yg)("p",null,"When hardening a projects technical security, team member's operational security, and the security of the software development practices in use by the team are some of the most criticial areas to secure. Many hacks and compromises in the space to date have been a result of these attack vectors rather than exploits of the software itself."),(0,n.yg)("p",null,"With this in mind, in January 2023 the Obol team retained the expertise of Ethereal Venture's security researcher Alex Wade; to interview key stakeholders and produce a report into the teams Software Development Lifecycle."),(0,n.yg)("p",null,"The below page is a result of the report that was produced. What is present here has had some sensitive information redacted, and contains responses to the recommendations made, detailing the actions the Obol team have taken to mitigate what has been highlighted."),(0,n.yg)("h1",{id:"obol-report"},"Obol Report"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Prepared by: Alex Wade (Ethereal Ventures)"),"\n",(0,n.yg)("strong",{parentName:"p"},"Date: Jan 2023")),(0,n.yg)("p",null,"Over the past month, I worked with Obol to review their software development practices in preparation for their upcoming security audits. My goals were to review and analyze:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Software development processes"),(0,n.yg)("li",{parentName:"ul"},"Vulnerability disclosure and escalation procedures"),(0,n.yg)("li",{parentName:"ul"},"Key personnel risk")),(0,n.yg)("p",null,"The information in this report was collected through a series of interviews with Obol\u2019s project leads."),(0,n.yg)("h2",{id:"contents"},"Contents:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Background Info"),(0,n.yg)("li",{parentName:"ul"},"Analysis - Cluster Setup and DKG",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Key Risks"),(0,n.yg)("li",{parentName:"ul"},"Potential Attack Scenarios"))),(0,n.yg)("li",{parentName:"ul"},"Recommendations",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"R1: Users should deploy cluster contracts through a known on-chain entry point"),(0,n.yg)("li",{parentName:"ul"},"R2: Users should deposit to the beacon chain through a pool contract"),(0,n.yg)("li",{parentName:"ul"},"R3: Raise the barrier to entry to push an update to the Launchpad"))),(0,n.yg)("li",{parentName:"ul"},"Additional Notes",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Vulnerability Disclosure"),(0,n.yg)("li",{parentName:"ul"},"Key Personnel Risk")))),(0,n.yg)("h2",{id:"background-info"},"Background Info"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Each team lead was asked to describe Obol in terms of its goals, objectives, and key features.")),(0,n.yg)("h3",{id:"what-is-obol"},"What is Obol?"),(0,n.yg)("p",null,"Obol builds DVT (Distributed Validator Technology) for Ethereum."),(0,n.yg)("h3",{id:"what-is-obols-goal"},"What is Obol\u2019s goal?"),(0,n.yg)("p",null,"Obol\u2019s goal is to solve a classic distributed systems problem: uptime."),(0,n.yg)("p",null,"Rather than requiring Ethereum validators to stake on their own, Obol allows groups of operators to stake together. Using Obol, a single validator can be run cooperatively by multiple people across multiple machines."),(0,n.yg)("p",null,"In theory, this architecture provides validators with some redundancy against common issues: server and power outages, client failures, and more."),(0,n.yg)("h3",{id:"what-are-obols-objectives"},"What are Obol\u2019s objectives?"),(0,n.yg)("p",null,"Obol\u2019s business objective is to provide base-layer infrastructure to support a distributed validator ecosystem. As Obol provides base layer technology, other companies and projects will build on top of Obol."),(0,n.yg)("p",null,"Obol\u2019s business model is to eventually capture a portion of the revenue generated by validators that use Obol infrastructure."),(0,n.yg)("h3",{id:"what-is-obols-product"},"What is Obol\u2019s product?"),(0,n.yg)("p",null,"Obol\u2019s product consists of three main components, each run by its own team: a webapp, a client, and smart contracts."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/v0.17.1/dvl/intro"},"DV Launchpad"),": A webapp to create and manage distributed validators."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/v0.17.1/charon/intro"},"Charon"),": A middleware client that enables operators to run distributed validators."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/v0.17.1/sc/introducing-obol-managers"},"Solidity"),": Withdrawal and fee recipient contracts for use with distributed validators.")),(0,n.yg)("h2",{id:"analysis---cluster-setup-and-dkg"},"Analysis - Cluster Setup and DKG"),(0,n.yg)("p",null,"The Launchpad guides users through the process of creating a cluster, which defines important parameters like the validator\u2019s fee recipient and withdrawal addresses, as well as the identities of the operators in the cluster. In order to ensure their cluster configuration is correct, users need to rely on a few different factors."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"First, users need to trust the Charon client")," to perform the DKG correctly, and validate things like:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Config file is well-formed and is using the expected version"),(0,n.yg)("li",{parentName:"ul"},"Signatures and ENRs from other operators are valid"),(0,n.yg)("li",{parentName:"ul"},"Cluster config hash is correct"),(0,n.yg)("li",{parentName:"ul"},"DKG succeeds in producing valid signatures"),(0,n.yg)("li",{parentName:"ul"},"Deposit data is well-formed and is correctly generated from the cluster config and DKG.")),(0,n.yg)("p",null,"However, Charon\u2019s validation is limited to the digital: signature checks, cluster file syntax, etc. It does NOT help would-be operators determine whether the other operators listed in their cluster definition are the real people with whom they intend to start a DVT cluster. So -"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Second, users need to come to social consensus with fellow operators.")," While the cluster is being set up, it\u2019s important that each operator is an active participant. Each member of the group must validate and confirm that:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"the cluster file correctly reflects their address and node identity, and reflects the information they received from fellow operators"),(0,n.yg)("li",{parentName:"ul"},"the cluster parameters are expected \u2013 namely, the number of validators and signing threshold")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Finally, users need to perform independent validation.")," Each user should perform their own validation of the cluster definition:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Is my information correct? (address and ENR)"),(0,n.yg)("li",{parentName:"ul"},"Does the information I received from the group match the cluster definition?"),(0,n.yg)("li",{parentName:"ul"},"Is the ETH2 deposit data correct, and does it match the information in the cluster definition?"),(0,n.yg)("li",{parentName:"ul"},"Are the withdrawal and fee recipient addresses correct?")),(0,n.yg)("p",null,"These final steps are potentially the most difficult, and may require significant technical knowledge."),(0,n.yg)("h2",{id:"key-risks"},"Key Risks"),(0,n.yg)("h3",{id:"1-validation-of-contract-deployment-and-deposit-data-relies-heavily-on-launchpad"},"1. Validation of Contract Deployment and Deposit Data Relies Heavily on Launchpad"),(0,n.yg)("p",null,"From my interviews, it seems that the user deploys both the withdrawal and fee recipient contracts through the Launchpad."),(0,n.yg)("p",null,"What I\u2019m picturing is that during the first parts of the cluster setup process, the user is prompted to sign one or more transactions deploying the withdrawal and fee recipient contracts to mainnet. The Launchpad apparently uses an npm package to deploy these contracts: ",(0,n.yg)("inlineCode",{parentName:"p"},"0xsplits/splits-sdk"),", which I assume provides either JSON artifacts or a factory address on chain. The Launchpad then places the deployed contracts into the cluster config file, and the process moves on."),(0,n.yg)("p",null,"If an attacker has published a malicious update to the Launchpad (or compromised an underlying dependency), the contracts deployed by the Launchpad may be malicious. The questions I\u2019d like to pose are:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"How does the group creator know the Launchpad deployed the correct contracts?"),(0,n.yg)("li",{parentName:"ul"},"How does the rest of the group know the creator deployed the contracts through the Launchpad?")),(0,n.yg)("p",null,"My understanding is that this ultimately comes down to the independent verification that each of the group\u2019s members performs during and after the cluster\u2019s setup phase."),(0,n.yg)("p",null,"At its worst, this verification might consist solely of the cluster creator confirming to the others that, yes, those addresses match the contracts I deployed through the Launchpad."),(0,n.yg)("p",null,"A more sophisticated user might verify that not only do the addresses match, but the deployed source code looks roughly correct. However, this step is far out of the realm of many would-be validators. To be really certain that the source code is correct would require auditor-level knowledge."),(0,n.yg)("p",null,"The risk is that:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"the deployed contracts are NOT the correctly-configured 0xsplits waterfall/fee splitter contracts"),(0,n.yg)("li",{parentName:"ul"},"most users are ill-equipped to make this determination themselves"),(0,n.yg)("li",{parentName:"ul"},"we don\u2019t want to trust the Launchpad as the single source of truth")),(0,n.yg)("p",null,"In the worst case, the cluster may end up depositing with malicious withdrawal or fee recipient credentials. If unnoticed, this may net an attacker the entire withdrawal amount, once the cluster exits."),(0,n.yg)("p",null,"Note that the same (or similar) risks apply to validation of deposit data, which has the potential to be similarly difficult. I\u2019m a little fuzzy on which part of the Obol stack actually generates the deposit data / deposit transaction, so I can\u2019t speak to this as much. However, I think the mitigation for both of these is roughly the same - read on!"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Mitigation:")),(0,n.yg)("p",null,"It\u2019s certainly a good idea to make it harder to deploy malicious updates to the Launchpad, but this may not be entirely possible. A higher-yield strategy may be to educate and empower users to perform independent validation of the DVT setup process - without relying on information fed to them by Charon and the Launchpad."),(0,n.yg)("p",null,"I\u2019ve outlined some ideas for this in #R1 and #R2."),(0,n.yg)("h3",{id:"2-social-consensus-aka-who-sends-the-32-eth"},"2. Social Consensus, aka \u201cWho sends the 32 ETH?\u201d"),(0,n.yg)("p",null,"Depositing to the beacon chain requires a total of 32 ETH. Obol\u2019s product allows multiple operators to act as a single validator together, which means would-be operators need to agree on how to fund the 32 ETH needed to initiate the deposit."),(0,n.yg)("p",null,"It is my understanding that currently, this process comes down to trust and loose social consensus. Essentially, the group needs to decide who chips in what amount together, and then trust someone to take the 32 ETH and complete the deposit process correctly (without running away with the money)."),(0,n.yg)("p",null,"Granted, the initial launch of Obol will be open only to a small group of people as the kinks in the system get worked out - but in preparation for an eventual public release, the deposit process needs to be much simpler and far less reliant on trust."),(0,n.yg)("p",null,"Mitigation: See #R2."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Potential Attack Scenarios")),(0,n.yg)("p",null,"During the interview process, I learned that each of Obol\u2019s core components has its own GitHub repo, and that each repo has roughly the same structure in terms of organization and security policies. For each repository:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"There are two overall github organization administrators, and a number of people have administrative control over individual repositories."),(0,n.yg)("li",{parentName:"ul"},"In order to merge PRs, the submitter needs:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"CI/CD checks to pass"),(0,n.yg)("li",{parentName:"ul"},"Review from one person (anyone at Obol)")))),(0,n.yg)("p",null,"Of course, admin access also means the ability to change these settings - so repo admins could theoretically merge PRs without needing checks to pass, and without review/approval, organization admins can control the full GitHub organization."),(0,n.yg)("p",null,"The following scenarios describe the impact an attack may have."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"1. Publishing a malicious version of the Launchpad, or compromising an underlying dependency")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Reward: High"),(0,n.yg)("li",{parentName:"ul"},"Difficulty: Medium-Low")),(0,n.yg)("p",null,"As described in Key Risks, publishing a malicious version of the Launchpad has the potential to net the largest payout for an attacker. By tampering with the cluster\u2019s deposit data or withdrawal/fee recipient contracts, an attacker stands to gain 32 ETH or more per compromised cluster."),(0,n.yg)("p",null,"During the interviews, I learned that merging PRs to main in the Launchpad repo triggers an action that publishes to the site. Given that merges can be performed by an authorized Obol developer, this makes the developers prime targets for social engineering attacks."),(0,n.yg)("p",null,"Additionally, the use of the ",(0,n.yg)("inlineCode",{parentName:"p"},"0xsplits/splits-sdk")," NPM package to aid in contract deployment may represent a supply chain attack vector. It may be that this applies to other Launchpad dependencies as well."),(0,n.yg)("p",null,"In any case, with a fairly large surface area and high potential reward, this scenario represents a credible risk to users during the cluster setup and DKG process."),(0,n.yg)("p",null,"See #R1, #R2, and #R3 for some ideas to address this scenario."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"2. Publishing a malicious version of Charon to new operators")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Reward: Medium"),(0,n.yg)("li",{parentName:"ul"},"Difficulty: High")),(0,n.yg)("p",null,"During the cluster setup process, Charon is responsible both for validating the cluster configuration produced by the Launchpad, as well as performing a DKG ceremony between a group\u2019s operators."),(0,n.yg)("p",null,"If new operators use a malicious version of Charon to perform this process, it may be possible to tamper with both of these responsibilities, or even get access to part or all of the underlying validator private key created during DKG."),(0,n.yg)("p",null,"However, the difficulty of this type of attack seems quite high. An attacker would first need to carry out the same type of social engineering attack described in scenario 1 to publish and tag a new version of Charon. Crucially, users would also need to install the malicious version - unlike the Launchpad, an update here is not pushed directly to users."),(0,n.yg)("p",null,"As long as Obol is clear and consistent with communication around releases and versioning, it seems unlikely that a user would both install a brand-new, unannounced release, and finish the cluster setup process before being warned about the attack."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"3. Publishing a malicious version of Charon to existing validators")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Reward: Low"),(0,n.yg)("li",{parentName:"ul"},"Difficulty: High")),(0,n.yg)("p",null,"Once a distributed validator is up and running, much of the danger has passed. As a middleware client, Charon sits between a validator\u2019s consensus and validator clients. As such, it shouldn\u2019t have direct access to a validator\u2019s withdrawal keys nor signing keys."),(0,n.yg)("p",null,"If existing validators update to a malicious version of Charon, it\u2019s likely the worst thing an attacker could theoretically do is slash the validator, however, assuming charon has no access to any private keys, this would be predicated on one or more validator clients connected to charon also failing to prevent the signing of a slashable message. In practice, a compromised charon client is more likely to pose liveness risks than safety risks."),(0,n.yg)("p",null,"This is not likely to be particularly motivating to potential attackers - and paired with the high difficulty described above, this scenario seems unlikely to cause significant issues."),(0,n.yg)("h2",{id:"recommendations"},"Recommendations"),(0,n.yg)("h3",{id:"r1-users-should-deploy-cluster-contracts-through-a-known-on-chain-entry-point"},"R1: Users should deploy cluster contracts through a known on-chain entry point"),(0,n.yg)("p",null,"During setup, users should only sign one transaction via the Launchpad - to a contract located at an Obol-held ENS (e.g. ",(0,n.yg)("inlineCode",{parentName:"p"},"launchpad.obol.eth"),"). This contract should deploy everything needed for the cluster to operate, like the withdrawal and fee recipient contracts. It should also initialize them with the provided reward split configuration (and any other config needed)."),(0,n.yg)("p",null,"Rather than using an NPM library to supply a factory address or JSON artifacts, this has the benefit of being both:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Harder to compromise:")," as long as the user knows launchpad.obol.eth, it\u2019s pretty difficult to trick them into deploying the wrong contracts."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Easier to validate")," for non-technical users: the Obol contract can be queried for deployment information via etherscan. For example:")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Etherscan Contract View Screenshot",src:a(88868).c,width:"1262",height:"428"})),(0,n.yg)("p",null,"Note that in order for this to be successful, Obol needs to provide detailed steps for users to perform manual validation of their cluster setups. Users should be able to treat this as a \u201cchecklist:\u201d"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Did I send a transaction to ",(0,n.yg)("inlineCode",{parentName:"li"},"launchpad.obol.eth"),"?"),(0,n.yg)("li",{parentName:"ul"},"Can I use the ENS name to locate and query the deployment manager contract on etherscan?"),(0,n.yg)("li",{parentName:"ul"},"If I input my address, does etherscan report the configuration I was expecting?",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"withdrawal address matches"),(0,n.yg)("li",{parentName:"ul"},"fee recipient address matches"),(0,n.yg)("li",{parentName:"ul"},"reward split configuration matches")))),(0,n.yg)("p",null,"As long as these steps are plastered all over the place (i.e. not just on the Launchpad) and Obol puts in effort to educate users about the process, this approach should allow users to validate cluster configurations themselves - regardless of Launchpad or NPM package compromise."),(0,n.yg)("h4",{id:"obols-response"},"Obol\u2019s response:"),(0,n.yg)("p",null,"Roadmapped: add the ability for the OWR factory to claim and transfer its reverse resolution ownership."),(0,n.yg)("h3",{id:"r2-users-should-deposit-to-the-beacon-chain-through-a-pool-contract"},"R2: Users should deposit to the beacon chain through a pool contract"),(0,n.yg)("p",null,"Once cluster setup and DKG is complete, a group of operators should deposit to the beacon chain by way of a pool contract. The pool contract should:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Accept Eth from any of the group\u2019s operators"),(0,n.yg)("li",{parentName:"ul"},"Stop accepting Eth when the contract\u2019s balance hits (32 ETH * number of validators)"),(0,n.yg)("li",{parentName:"ul"},"Make it easy to pull the trigger and deposit to the beacon chain once the critical balance has been reached"),(0,n.yg)("li",{parentName:"ul"},"Offer all of the group\u2019s operators a \u201cbail\u201d option at any point before the deposit is triggered")),(0,n.yg)("p",null,"Ideally, this contract is deployed during the setup process described in #R1, as another step toward allowing users to perform independent validation of the process."),(0,n.yg)("p",null,"Rather than relying on social consensus, this should:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Allow operators to fund the validator without needing to trust any single party"),(0,n.yg)("li",{parentName:"ul"},"Make it harder to mess up the deposit or send funds to some malicious actor, as the pool contract should know what the beacon deposit contract address is")),(0,n.yg)("h4",{id:"obols-response-1"},"Obol\u2019s response:"),(0,n.yg)("p",null,"Roadmapped: give the operators a streamlined, secure way to deposit Ether (ETH) to the beacon chain collectively, satisfying specific conditions:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Pooling from multiple operators."),(0,n.yg)("li",{parentName:"ul"},"Ceasing to accept ETH once a critical balance is reached, defined by 32 ETH multiplied by the number of validators."),(0,n.yg)("li",{parentName:"ul"},"Facilitating an immediate deposit to the beacon chain once the target balance is reached."),(0,n.yg)("li",{parentName:"ul"},"Provide a 'bail-out' option for operators to withdraw their contribution before initiating the group's deposit to the beacon chain.")),(0,n.yg)("h3",{id:"r3-raise-the-barrier-to-entry-to-push-an-update-to-the-launchpad"},"R3: Raise the barrier to entry to push an update to the Launchpad"),(0,n.yg)("p",null,"Currently, any repo admin can publish an update to the Launchpad unchecked."),(0,n.yg)("p",null,"Given the risks and scenarios outlined above, consider amending this process so that the sole compromise of either admin is not sufficient to publish to the Launchpad site. It may be worthwhile to require both admins to approve publishing to the site."),(0,n.yg)("p",null,"Along with simply adding additional prerequisites to publish an update to the Launchpad, ensure that both admins have enabled some level of multi-factor authentication on their GitHub accounts."),(0,n.yg)("h4",{id:"obols-response-2"},"Obol\u2019s response:"),(0,n.yg)("p",null,"We removed individual\u2019s ability to merge changes without review, enforced MFA, signed commits, and employed Bulldozer bot to make sure a PR gets merged automatically when all checks pass."),(0,n.yg)("h2",{id:"additional-notes"},"Additional Notes"),(0,n.yg)("h3",{id:"vulnerability-disclosure"},"Vulnerability Disclosure"),(0,n.yg)("p",null,"During the interviews, I got some conflicting information when asking about Obol\u2019s vulnerability disclosure process."),(0,n.yg)("p",null,"Some interviewees directed me towards Obol\u2019s security repo, which details security contacts: ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/obol-security"},"ObolNetwork/obol-security"),", while some answered that disclosure should happen primarily through Immunefi. While these may both be part of the correct answer, it seems that Obol\u2019s disclosure process may not be as well-defined as it could be. Here are some notes:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"I wasn\u2019t able to find information about Obol on Immunefi. I also didn\u2019t find any reference to a security contact or disclosure policy in Obol\u2019s docs."),(0,n.yg)("li",{parentName:"ul"},"When looking into the obol security repo, I noticed broken links in a few of the sections in README.md and SECURITY.md:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Security policy"),(0,n.yg)("li",{parentName:"ul"},"More Information"))),(0,n.yg)("li",{parentName:"ul"},"Some of the text and links in the Bug Bounty Program don\u2019t seem to apply to Obol (see text referring to Vaults and Strategies)."),(0,n.yg)("li",{parentName:"ul"},"The Receiving Disclosures section does not include a public key with which submitters can encrypt vulnerability information.")),(0,n.yg)("p",null,"It\u2019s my understanding that these items are probably lower priority due to Obol\u2019s initial closed launch - but these should be squared away soon!\n","[Obol response to latest vuln disclosure process goes here]"),(0,n.yg)("h4",{id:"obols-response-3"},"Obol\u2019s response:"),(0,n.yg)("p",null,"we addressed all of the concerns in the obol-security repository:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"The security policy link has been fixed"),(0,n.yg)("li",{parentName:"ol"},"The Bug Bounty program received an overhaul and clearly states rewards, eligibility, and scope"),(0,n.yg)("li",{parentName:"ol"},"We list two GPG public keys for which we accept encrypted vulnerabilities reports.")),(0,n.yg)("p",null,"We are actively working towards integrating Immunefi in our security pipeline."),(0,n.yg)("h3",{id:"key-personnel-risk"},"Key Personnel Risk"),(0,n.yg)("p",null,"A final section on the specifics of key personnel risk faced by Obol has been redacted from the original report. Particular areas of control highlighted were github org ownership and domain name control."),(0,n.yg)("h4",{id:"obols-response-4"},"Obol\u2019s response:"),(0,n.yg)("p",null,"These risks have been mitigated by adding an extra admin to the github org, and by setting up a second DNS stack in case the primary one fails, along with general Opsec improvements."))}h.isMDXComponent=!0},88868:(e,t,a)=>{a.d(t,{c:()=>o});const o=a.p+"assets/images/EtherscanContractView-54408fc410ab0165bc8f38d4e63baf1e.png"}}]);