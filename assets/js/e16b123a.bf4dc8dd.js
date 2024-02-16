"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[23856],{95788:(e,t,a)=>{a.d(t,{Iu:()=>p,yg:()=>u});var r=a(11504);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),g=i,u=d["".concat(s,".").concat(g)]||d[g]||h[g]||n;return a?r.createElement(u,o(o({ref:t},p),{},{components:a})):r.createElement(u,o({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<n;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},16296:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=a(45072),i=(a(11504),a(95788));const n={sidebar_position:1,description:"Smart contracts for managing Distributed Validators"},o="Obol Splits",l={unversionedId:"sc/introducing-obol-splits",id:"sc/introducing-obol-splits",title:"Obol Splits",description:"Smart contracts for managing Distributed Validators",source:"@site/docs/sc/introducing-obol-splits.md",sourceDirName:"sc",slug:"/sc/introducing-obol-splits",permalink:"/docs/next/sc/introducing-obol-splits",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/docs/sc/introducing-obol-splits.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Smart contracts for managing Distributed Validators"},sidebar:"tutorialSidebar",previous:{title:"DV Launchpad",permalink:"/docs/next/dvl/intro"},next:{title:"Intro",permalink:"/docs/next/sdk/"}},s={},c=[{value:"Withdrawal Recipients",id:"withdrawal-recipients",level:2},{value:"Optimistic Withdrawal Recipient",id:"optimistic-withdrawal-recipient",level:3},{value:"OWR Factory Deployment",id:"owr-factory-deployment",level:4},{value:"Exitable Withdrawal Recipient",id:"exitable-withdrawal-recipient",level:3},{value:"Split Contracts",id:"split-contracts",level:2},{value:"Split Controllers",id:"split-controllers",level:2},{value:"(Gnosis) SAFE wallet",id:"gnosis-safe-wallet",level:3},{value:"Immutable Split Controller",id:"immutable-split-controller",level:3}],p={toc:c},d="wrapper";function h(e){let{components:t,...a}=e;return(0,i.yg)(d,(0,r.c)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"obol-splits"},"Obol Splits"),(0,i.yg)("p",null,"Obol develops and maintains a suite of smart contracts for use with Distributed Validators. These contracts include:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Withdrawal Recipients: Contracts used for a validator's withdrawal address."),(0,i.yg)("li",{parentName:"ul"},"Split contracts: Contracts to split ether across multiple entities. Developed by ",(0,i.yg)("a",{parentName:"li",href:"https://splits.org"},"Splits.org")),(0,i.yg)("li",{parentName:"ul"},"Split controllers: Contracts that can mutate a splitter's configuration.")),(0,i.yg)("p",null,"Two key goals of validator reward management are:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"To be able to differentiate reward ether from principal ether such that node operators can be paid a percentage the ",(0,i.yg)("em",{parentName:"li"},"reward")," they accrue for the principal provider rather than a percentage of ",(0,i.yg)("em",{parentName:"li"},"principal+reward"),"."),(0,i.yg)("li",{parentName:"ol"},"To be able to withdraw the rewards in an ongoing manner without exiting the validator.")),(0,i.yg)("p",null,"Without access to the consensus layer state in the EVM to check a validator's status or balance, and due to the incoming ether being from an irregular state transition, neither of these requirements are easily satisfiable."),(0,i.yg)("p",null,"The following sections outline different contracts that can be composed to form a solution for one or both goals."),(0,i.yg)("h2",{id:"withdrawal-recipients"},"Withdrawal Recipients"),(0,i.yg)("p",null,"Validators have two streams of revenue, the consensus layer rewards and the execution layer rewards. Withdrawal Recipients focus on the former, receiving the balance skimming from a validator with >32 ether in an ongoing manner, and receiving the principal of the validator upon exit."),(0,i.yg)("h3",{id:"optimistic-withdrawal-recipient"},"Optimistic Withdrawal Recipient"),(0,i.yg)("p",null,"This is the primary withdrawal recipient Obol uses, as it allows for the separation of reward from principal, as well as permitting the ongoing withdrawal of accruing rewards."),(0,i.yg)("p",null,"An Optimistic Withdrawal Recipient ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/obol-splits/blob/main/src/owr/OptimisticWithdrawalRecipient.sol"},"contract")," takes three inputs when deployed:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"A ",(0,i.yg)("em",{parentName:"li"},"principal")," address: The address that controls where the principal ether will be transferred post-exit."),(0,i.yg)("li",{parentName:"ul"},"A ",(0,i.yg)("em",{parentName:"li"},"reward")," address: The address where the accruing reward ether is transferred to."),(0,i.yg)("li",{parentName:"ul"},"The amount of ether that makes up the principal.")),(0,i.yg)("p",null,"This contract ",(0,i.yg)("strong",{parentName:"p"},"assumes that any ether that has appeared in it's address since it was last able to do balance accounting is skimming reward from an ongoing validator")," (or number of validators) unless the change is > 16 ether. This means balance skimming is immediately claimable as reward, while an inflow of e.g. 31 ether is tracked as a return of principal (despite being slashed in this example)."),(0,i.yg)("admonition",{type:"warning"},(0,i.yg)("p",{parentName:"admonition"},"Worst-case mass slashings can theoretically exceed 16 ether, if this were to occur, the returned principal would be misclassified as a reward, and distributed to the wrong address. This risk is the drawback that makes this contract variant 'optimistic'. If you intend to use this contract type, ",(0,i.yg)("strong",{parentName:"p"},"it is important you understand and accept this risk"),", however minute."),(0,i.yg)("p",{parentName:"admonition"},"The alternative is to use an splits.org ",(0,i.yg)("a",{parentName:"p",href:"https://docs.splits.org/core/waterfall"},"waterfall contract"),", which won't allow the claiming of rewards until all principal ether has been returned, meaning validators need to be exited for operators to claim their CL rewards.")),(0,i.yg)("p",null,"This contract fits both design goals and can be used with thousands of validators. It is safe to deploy an Optimistic Withdrawal Recipient with a principal higher than you actually end up using, though you should process the accrued rewards before exiting a validator or the reward recipients will be short-changed as that balance may be counted as principal instead of reward the next time the contract is updated. If you activate more validators than you specified in your contract deployment, you will record too much ether as reward and will overpay your reward address with ether that was principal ether, not earned ether. Current iterations of this contract are not designed for editing the amount of principal set."),(0,i.yg)("h4",{id:"owr-factory-deployment"},"OWR Factory Deployment"),(0,i.yg)("p",null,"The OptimisticWithdrawalRecipient contract is deployed via a ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/obol-splits/blob/main/src/owr/OptimisticWithdrawalRecipientFactory.sol"},"factory contract"),". The factory is deployed at the following addresses on the following chains."),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Chain"),(0,i.yg)("th",{parentName:"tr",align:null},"Address"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Mainnet"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://etherscan.io/address/0x119acd7844cbdd5fc09b1c6a4408f490c8f7f522"},"0x119acd7844cbdd5fc09b1c6a4408f490c8f7f522"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Goerli"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://goerli.etherscan.io/address/0xe9557FCC055c89515AE9F3A4B1238575Fcd80c26"},"0xe9557FCC055c89515AE9F3A4B1238575Fcd80c26"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Holesky"),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Sepolia"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://sepolia.etherscan.io/address/0xca78f8fda7ec13ae246e4d4cd38b9ce25a12e64a"},"0xca78f8fda7ec13ae246e4d4cd38b9ce25a12e64a"))))),(0,i.yg)("h3",{id:"exitable-withdrawal-recipient"},"Exitable Withdrawal Recipient"),(0,i.yg)("p",null,"A much awaited feature for proof of stake Ethereum is the ability to trigger the exit of a validator with only the withdrawal address. This is tracked in ",(0,i.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-7002"},"EIP-7002"),". Support for this feature will be inheritable in all other withdrawal recipient contracts. This will mitigate the risk to a principal provider of funds being stuck, or a validator being irrecoverably offline."),(0,i.yg)("h2",{id:"split-contracts"},"Split Contracts"),(0,i.yg)("p",null,"A split, or splitter, is a set of contracts that can divide ether or an ERC20 across a number of addresses. Splits are often used in conjunction with withdrawal recipients. Execution Layer rewards for a DV are directed to a split address through the use of a ",(0,i.yg)("inlineCode",{parentName:"p"},"fee recipient")," address. Splits can be either immutable, or mutable by way of an admin address capable of updating them."),(0,i.yg)("p",null,"Further information about splits can be found on the splits.org team's ",(0,i.yg)("a",{parentName:"p",href:"https://docs.splits.org/"},"docs site"),". The addresses of their deployments can be found ",(0,i.yg)("a",{parentName:"p",href:"https://docs.splits.org/core/split#addresses"},"here"),"."),(0,i.yg)("h2",{id:"split-controllers"},"Split Controllers"),(0,i.yg)("p",null,"Splits can be completely edited through the use of the ",(0,i.yg)("inlineCode",{parentName:"p"},"controller")," address, however, total editability of a split is not always wanted. A permissive controller and a restrictive controller are given as examples below."),(0,i.yg)("h3",{id:"gnosis-safe-wallet"},"(Gnosis) SAFE wallet"),(0,i.yg)("p",null,"A ",(0,i.yg)("a",{parentName:"p",href:"https://safe.global/"},"SAFE")," is a common method to administrate a mutable split. The most well-known deployment of this pattern is the ",(0,i.yg)("a",{parentName:"p",href:"https://protocol-guild.readthedocs.io/en/latest/3-smart-contract.html"},"protocol guild"),". The SAFE can arbitrarily update the split to any set of addresses with any valid set of percentages."),(0,i.yg)("h3",{id:"immutable-split-controller"},"Immutable Split Controller"),(0,i.yg)("p",null,"This is a ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/obol-splits/blob/main/src/controllers/ImmutableSplitController.sol"},"contract")," that updates one split configuration with another, exactly once. Only a permissioned address can trigger the change. This contract is suitable for changing a split at an unknown point in future to a configuration pre-defined at deployment."),(0,i.yg)("p",null,"The Immutable Split Controller ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/obol-splits/blob/main/src/controllers/ImmutableSplitControllerFactory.sol"},"factory contract")," can be found at the following addresses:"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Chain"),(0,i.yg)("th",{parentName:"tr",align:null},"Address"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Mainnet"),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Goerli"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://goerli.etherscan.io/address/0x64a2c4A50B1f46c3e2bF753CFe270ceB18b5e18f"},"0x64a2c4A50B1f46c3e2bF753CFe270ceB18b5e18f"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Holesky"),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Sepolia"),(0,i.yg)("td",{parentName:"tr",align:null})))))}h.isMDXComponent=!0}}]);