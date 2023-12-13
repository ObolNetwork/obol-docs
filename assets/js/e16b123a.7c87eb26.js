"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[11166],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>m});var r=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,i=function(t,e){if(null==t)return{};var a,r,i={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var s=r.createContext({}),p=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},d="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,i=t.mdxType,n=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=p(a),u=i,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||n;return a?r.createElement(m,o(o({ref:e},c),{},{components:a})):r.createElement(m,o({ref:e},c))}));function m(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=a.length,o=new Array(n);o[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[d]="string"==typeof t?t:i,o[1]=l;for(var p=2;p<n;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},87662:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=a(87462),i=(a(67294),a(3905));const n={sidebar_position:1,description:"Smart contracts for managing Distributed Validators"},o="Obol Splits",l={unversionedId:"sc/introducing-obol-splits",id:"sc/introducing-obol-splits",title:"Obol Splits",description:"Smart contracts for managing Distributed Validators",source:"@site/docs/sc/introducing-obol-splits.md",sourceDirName:"sc",slug:"/sc/introducing-obol-splits",permalink:"/docs/next/sc/introducing-obol-splits",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/docs/sc/introducing-obol-splits.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Smart contracts for managing Distributed Validators"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/next/dvl/intro"},next:{title:"Overview",permalink:"/docs/next/sec/overview"}},s={},p=[{value:"Withdrawal Recipients",id:"withdrawal-recipients",level:2},{value:"Optimistic Withdrawal Recipient",id:"optimistic-withdrawal-recipient",level:3},{value:"OWR Factory Deployment",id:"owr-factory-deployment",level:4},{value:"Exitable Withdrawal Recipient",id:"exitable-withdrawal-recipient",level:3},{value:"Split Contracts",id:"split-contracts",level:2},{value:"Split Controllers",id:"split-controllers",level:2},{value:"(Gnosis) SAFE wallet",id:"gnosis-safe-wallet",level:3},{value:"Immutable Split Controller",id:"immutable-split-controller",level:3}],c={toc:p};function d(t){let{components:e,...a}=t;return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"obol-splits"},"Obol Splits"),(0,i.kt)("p",null,"Obol develops and maintains a suite of smart contracts for use with Distributed Validators. These contracts include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Withdrawal Recipients: Contracts used for a validator's withdrawal address."),(0,i.kt)("li",{parentName:"ul"},"Split contracts: Contracts to split ether across multiple entities. Developed by ",(0,i.kt)("a",{parentName:"li",href:"https://splits.org"},"Splits.org")),(0,i.kt)("li",{parentName:"ul"},"Split controllers: Contracts that can mutate a splitter's configuration.")),(0,i.kt)("p",null,"Two key goals of validator reward management are:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"To be able to differentiate reward ether from principal ether such that node operators can be paid a percentage the ",(0,i.kt)("em",{parentName:"li"},"reward")," they accrue for the principal provider rather than a percentage of ",(0,i.kt)("em",{parentName:"li"},"principal+reward"),"."),(0,i.kt)("li",{parentName:"ol"},"To be able to withdraw the rewards in an ongoing manner without exiting the validator.")),(0,i.kt)("p",null,"Without access to the consensus layer state in the EVM to check a validator's status or balance, and due to the incoming ether being from an irregular state transition, neither of these requirements are easily satisfiable."),(0,i.kt)("p",null,"The following sections outline different contracts that can be composed to form a solution for one or both goals."),(0,i.kt)("h2",{id:"withdrawal-recipients"},"Withdrawal Recipients"),(0,i.kt)("p",null,"Validators have two streams of revenue, the consensus layer rewards and the execution layer rewards. Withdrawal Recipients focus on the former, receiving the balance skimming from a validator with >32 ether in an ongoing manner, and receiving the principal of the validator upon exit."),(0,i.kt)("h3",{id:"optimistic-withdrawal-recipient"},"Optimistic Withdrawal Recipient"),(0,i.kt)("p",null,"This is the primary withdrawal recipient Obol uses, as it allows for the separation of reward from principal, as well as permitting the ongoing withdrawal of accruing rewards."),(0,i.kt)("p",null,"An Optimistic Withdrawal Recipient ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/obol-splits/blob/main/src/owr/OptimisticWithdrawalRecipient.sol"},"contract")," takes three inputs when deployed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("em",{parentName:"li"},"principal")," address: The address that controls where the principal ether will be transferred post-exit."),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("em",{parentName:"li"},"reward")," address: The address where the accruing reward ether is transferred to."),(0,i.kt)("li",{parentName:"ul"},"The amount of ether that makes up the principal.")),(0,i.kt)("p",null,"This contract ",(0,i.kt)("strong",{parentName:"p"},"assumes that any ether that has appeared in it's address since it was last able to do balance accounting is skimming reward from an ongoing validator")," (or number of validators) unless the change is > 16 ether. This means balance skimming is immediately claimable as reward, while an inflow of e.g. 31 ether is tracked as a return of principal (despite being slashed in this example)."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Worst-case mass slashings can theoretically exceed 16 ether, if this were to occur, the returned principal would be misclassified as a reward, and distributed to the wrong address. This risk is the drawback that makes this contract variant 'optimistic'. If you intend to use this contract type, ",(0,i.kt)("strong",{parentName:"p"},"it is important you understand and accept this risk"),", however minute."),(0,i.kt)("p",{parentName:"admonition"},"The alternative is to use an splits.org ",(0,i.kt)("a",{parentName:"p",href:"https://docs.splits.org/core/waterfall"},"waterfall contract"),", which won't allow the claiming of rewards until all principal ether has been returned, meaning validators need to be exited for operators to claim their CL rewards.")),(0,i.kt)("p",null,"This contract fits both design goals and can be used with thousands of validators. If you deploy an Optimistic Withdrawal Recipient with a principal higher than you actually end up using, nothing goes wrong. If you activate more validators than you specified in your contract deployment, you will record too much ether as reward and will overpay your reward address with ether that was principal ether, not earned ether. Current iterations of this contract are not designed for editing the amount of principal set."),(0,i.kt)("h4",{id:"owr-factory-deployment"},"OWR Factory Deployment"),(0,i.kt)("p",null,"The OptimisticWithdrawalRecipient contract is deployed via a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/obol-splits/blob/main/src/owr/OptimisticWithdrawalRecipientFactory.sol"},"factory contract"),". The factory is deployed at the following addresses on the following chains."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Chain"),(0,i.kt)("th",{parentName:"tr",align:null},"Address"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Mainnet"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x119acd7844cbdd5fc09b1c6a4408f490c8f7f522"},"0x119acd7844cbdd5fc09b1c6a4408f490c8f7f522"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Goerli"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://goerli.etherscan.io/address/0xe9557FCC055c89515AE9F3A4B1238575Fcd80c26"},"0xe9557FCC055c89515AE9F3A4B1238575Fcd80c26"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Holesky"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Sepolia"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://sepolia.etherscan.io/address/0xca78f8fda7ec13ae246e4d4cd38b9ce25a12e64a"},"0xca78f8fda7ec13ae246e4d4cd38b9ce25a12e64a"))))),(0,i.kt)("h3",{id:"exitable-withdrawal-recipient"},"Exitable Withdrawal Recipient"),(0,i.kt)("p",null,"A much awaited feature for proof of stake Ethereum is the ability to trigger the exit of a validator with only the withdrawal address. This is tracked in ",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-7002"},"EIP-7002"),". Support for this feature will be inheritable in all other withdrawal recipient contracts. This will mitigate the risk to a principal provider of funds being stuck, or a validator being irrecoverably offline."),(0,i.kt)("h2",{id:"split-contracts"},"Split Contracts"),(0,i.kt)("p",null,"A split, or splitter, is a set of contracts that can divide ether or an ERC20 across a number of addresses. Splits are often used in conjunction with withdrawal recipients. Execution Layer rewards for a DV are directed to a split address through the use of a ",(0,i.kt)("inlineCode",{parentName:"p"},"fee recipient")," address. Splits can be either immutable, or mutable by way of an admin address capable of updating them."),(0,i.kt)("p",null,"Further information about splits can be found on the splits.org team's ",(0,i.kt)("a",{parentName:"p",href:"https://docs.splits.org/"},"docs site"),". The addresses of their deployments can be found ",(0,i.kt)("a",{parentName:"p",href:"https://docs.splits.org/core/split#addresses"},"here"),"."),(0,i.kt)("h2",{id:"split-controllers"},"Split Controllers"),(0,i.kt)("p",null,"Splits can be completely edited through the use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"controller")," address, however, total editability of a split is not always wanted. A permissive controller and a restrictive controller are given as examples below."),(0,i.kt)("h3",{id:"gnosis-safe-wallet"},"(Gnosis) SAFE wallet"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://safe.global/"},"SAFE")," is a common method to administrate a mutable split. The most well-known deployment of this pattern is the ",(0,i.kt)("a",{parentName:"p",href:"https://protocol-guild.readthedocs.io/en/latest/3-smart-contract.html"},"protocol guild"),". The SAFE can arbitrarily update the split to any set of addresses with any valid set of percentages."),(0,i.kt)("h3",{id:"immutable-split-controller"},"Immutable Split Controller"),(0,i.kt)("p",null,"This is a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/obol-splits/blob/main/src/controllers/ImmutableSplitController.sol"},"contract")," that updates one split configuration with another, exactly once. Only a permissioned address can trigger the change. This contract is suitable for changing a split at an unknown point in future to a configuration pre-defined at deployment."),(0,i.kt)("p",null,"The Immutable Split Controller ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/obol-splits/blob/main/src/controllers/ImmutableSplitControllerFactory.sol"},"factory contract")," can be found at the following addresses:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Chain"),(0,i.kt)("th",{parentName:"tr",align:null},"Address"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Mainnet"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Goerli"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://goerli.etherscan.io/address/0x64a2c4A50B1f46c3e2bF753CFe270ceB18b5e18f"},"0x64a2c4A50B1f46c3e2bF753CFe270ceB18b5e18f"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Holesky"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Sepolia"),(0,i.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);