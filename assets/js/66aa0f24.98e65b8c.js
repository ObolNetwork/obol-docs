"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[94997],{76391:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"sc/introducing-obol-splits","title":"Obol Splits","description":"Smart contracts for managing Distributed Validators","source":"@site/versioned_docs/version-v1.0.0/sc/introducing-obol-splits.md","sourceDirName":"sc","slug":"/sc/introducing-obol-splits","permalink":"/v1.0.0/sc/introducing-obol-splits","draft":false,"unlisted":false,"editUrl":"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v1.0.0/sc/introducing-obol-splits.md","tags":[],"version":"v1.0.0","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"description":"Smart contracts for managing Distributed Validators"},"sidebar":"tutorialSidebar","previous":{"title":"DV Launchpad","permalink":"/v1.0.0/dvl/intro"},"next":{"title":"index","permalink":"/v1.0.0/sdk/"}}');var s=i(74848),a=i(28453);const n={sidebar_position:1,description:"Smart contracts for managing Distributed Validators"},o="Obol Splits",l={},d=[{value:"Withdrawal Recipients",id:"withdrawal-recipients",level:2},{value:"Optimistic Withdrawal Recipient",id:"optimistic-withdrawal-recipient",level:3},{value:"OWR Factory Deployment",id:"owr-factory-deployment",level:4},{value:"Exitable Withdrawal Recipient",id:"exitable-withdrawal-recipient",level:3},{value:"Split Contracts",id:"split-contracts",level:2},{value:"Split Controllers",id:"split-controllers",level:2},{value:"(Gnosis) SAFE wallet",id:"gnosis-safe-wallet",level:3},{value:"Immutable Split Controller",id:"immutable-split-controller",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"obol-splits",children:"Obol Splits"})}),"\n",(0,s.jsx)(t.p,{children:"Obol develops and maintains a suite of smart contracts for use with Distributed Validators. These contracts include:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Withdrawal Recipients: Contracts used for a validator's withdrawal address."}),"\n",(0,s.jsxs)(t.li,{children:["Split contracts: Contracts to split ether across multiple entities. Developed by ",(0,s.jsx)(t.a,{href:"https://splits.org",children:"Splits.org"})]}),"\n",(0,s.jsx)(t.li,{children:"Split controllers: Contracts that can mutate a splitter's configuration."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Two key goals of validator reward management are:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["To be able to differentiate reward ether from principal ether such that node operators can be paid a percentage the ",(0,s.jsx)(t.em,{children:"reward"})," they accrue for the principal provider rather than a percentage of ",(0,s.jsx)(t.em,{children:"principal+reward"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"To be able to withdraw the rewards in an ongoing manner without exiting the validator."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Without access to the consensus layer state in the EVM to check a validator's status or balance, and due to the incoming ether being from an irregular state transition, neither of these requirements are easily satisfiable."}),"\n",(0,s.jsx)(t.p,{children:"The following sections outline different contracts that can be composed to form a solution for one or both goals."}),"\n",(0,s.jsx)(t.h2,{id:"withdrawal-recipients",children:"Withdrawal Recipients"}),"\n",(0,s.jsx)(t.p,{children:"Validators have two streams of revenue, the consensus layer rewards and the execution layer rewards. Withdrawal Recipients focus on the former, receiving the balance skimming from a validator with >32 ether in an ongoing manner, and receiving the principal of the validator upon exit."}),"\n",(0,s.jsx)(t.h3,{id:"optimistic-withdrawal-recipient",children:"Optimistic Withdrawal Recipient"}),"\n",(0,s.jsx)("span",{style:{backgroundColor:"#2D4D53",borderRadius:"2px",color:"#fff",padding:"0.2rem",display:"block"},children:(0,s.jsx)("img",{src:"/img/obol_owr_split.png",alt:"Optimistic Withdrawal Recpient graphic"})}),"\n",(0,s.jsx)(t.p,{children:"This is the primary withdrawal recipient Obol uses, as it allows for the separation of reward from principal, as well as permitting the ongoing withdrawal of accruing rewards."}),"\n",(0,s.jsxs)(t.p,{children:["An Optimistic Withdrawal Recipient ",(0,s.jsx)(t.a,{href:"https://github.com/ObolNetwork/obol-splits/blob/main/src/owr/OptimisticWithdrawalRecipient.sol",children:"contract"})," takes three inputs when deployed:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["A ",(0,s.jsx)(t.em,{children:"principal"})," address: The address that controls where the principal ether will be transferred post-exit."]}),"\n",(0,s.jsxs)(t.li,{children:["A ",(0,s.jsx)(t.em,{children:"reward"})," address: The address where the accruing reward ether is transferred to."]}),"\n",(0,s.jsx)(t.li,{children:"The amount of ether that makes up the principal."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["This contract ",(0,s.jsx)(t.strong,{children:"assumes that any ether that has appeared in it's address since it was last able to do balance accounting is skimming reward from an ongoing validator"})," (or number of validators) unless the change is > 16 ether. This means balance skimming is immediately claimable as reward, while an inflow of e.g. 31 ether is tracked as a return of principal (despite being slashed in this example)."]}),"\n",(0,s.jsxs)(t.admonition,{type:"warning",children:[(0,s.jsxs)(t.p,{children:["Worst-case mass slashings can theoretically exceed 16 ether, if this were to occur, the returned principal would be misclassified as a reward, and distributed to the wrong address. This risk is the drawback that makes this contract variant 'optimistic'. If you intend to use this contract type, ",(0,s.jsx)(t.strong,{children:"it is important you understand and accept this risk"}),", however minute."]}),(0,s.jsxs)(t.p,{children:["The alternative is to use an splits.org ",(0,s.jsx)(t.a,{href:"https://docs.splits.org/core/waterfall",children:"waterfall contract"}),", which won't allow the claiming of rewards until all principal ether has been returned, meaning validators need to be exited for operators to claim their CL rewards."]})]}),"\n",(0,s.jsx)(t.p,{children:"This contract fits both design goals and can be used with thousands of validators. It is safe to deploy an Optimistic Withdrawal Recipient with a principal higher than you actually end up using, though you should process the accrued rewards before exiting a validator or the reward recipients will be short-changed as that balance may be counted as principal instead of reward the next time the contract is updated. If you activate more validators than you specified in your contract deployment, you will record too much ether as reward and will overpay your reward address with ether that was principal ether, not earned ether. Current iterations of this contract are not designed for editing the amount of principal set."}),"\n",(0,s.jsx)(t.h4,{id:"owr-factory-deployment",children:"OWR Factory Deployment"}),"\n",(0,s.jsxs)(t.p,{children:["The OptimisticWithdrawalRecipient contract is deployed via a ",(0,s.jsx)(t.a,{href:"https://github.com/ObolNetwork/obol-splits/blob/main/src/owr/OptimisticWithdrawalRecipientFactory.sol",children:"factory contract"}),". The factory is deployed at the following addresses on the following chains."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Chain"}),(0,s.jsx)(t.th,{children:"Address"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Mainnet"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://etherscan.io/address/0x119acd7844cbdd5fc09b1c6a4408f490c8f7f522",children:"0x119acd7844cbdd5fc09b1c6a4408f490c8f7f522"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Goerli"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://goerli.etherscan.io/address/0xe9557FCC055c89515AE9F3A4B1238575Fcd80c26",children:"0xe9557FCC055c89515AE9F3A4B1238575Fcd80c26"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Holesky"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://holesky.etherscan.io/address/0x7fec4add6b5ee2b6c1cba232bc6db754794cb6df",children:"0x7fec4add6b5ee2b6c1cba232bc6db754794cb6df"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Sepolia"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://sepolia.etherscan.io/address/0xca78f8fda7ec13ae246e4d4cd38b9ce25a12e64a",children:"0xca78f8fda7ec13ae246e4d4cd38b9ce25a12e64a"})})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"exitable-withdrawal-recipient",children:"Exitable Withdrawal Recipient"}),"\n",(0,s.jsxs)(t.p,{children:["A much awaited feature for proof of stake Ethereum is the ability to trigger the exit of a validator with only the withdrawal address. This is tracked in ",(0,s.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-7002",children:"EIP-7002"}),". Support for this feature will be inheritable in all other withdrawal recipient contracts. This will mitigate the risk to a principal provider of funds being stuck, or a validator being irrecoverably offline."]}),"\n",(0,s.jsx)(t.h2,{id:"split-contracts",children:"Split Contracts"}),"\n",(0,s.jsxs)(t.p,{children:["A split, or splitter, is a set of contracts that can divide ether or an ERC20 across a number of addresses. Splits are often used in conjunction with withdrawal recipients. Execution Layer rewards for a DV are directed to a split address through the use of a ",(0,s.jsx)(t.code,{children:"fee recipient"})," address. Splits can be either immutable, or mutable by way of an admin address capable of updating them."]}),"\n",(0,s.jsxs)(t.p,{children:["Further information about splits can be found on the splits.org team's ",(0,s.jsx)(t.a,{href:"https://docs.splits.org/",children:"docs site"}),". The addresses of their deployments can be found ",(0,s.jsx)(t.a,{href:"https://docs.splits.org/core/split#addresses",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"split-controllers",children:"Split Controllers"}),"\n",(0,s.jsxs)(t.p,{children:["Splits can be completely edited through the use of the ",(0,s.jsx)(t.code,{children:"controller"})," address, however, total editability of a split is not always wanted. A permissive controller and a restrictive controller are given as examples below."]}),"\n",(0,s.jsx)(t.h3,{id:"gnosis-safe-wallet",children:"(Gnosis) SAFE wallet"}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.a,{href:"https://safe.global/",children:"SAFE"})," is a common method to administrate a mutable split. The most well-known deployment of this pattern is the ",(0,s.jsx)(t.a,{href:"https://protocol-guild.readthedocs.io/en/latest/3-smart-contract.html",children:"protocol guild"}),". The SAFE can arbitrarily update the split to any set of addresses with any valid set of percentages."]}),"\n",(0,s.jsx)(t.h3,{id:"immutable-split-controller",children:"Immutable Split Controller"}),"\n",(0,s.jsxs)(t.p,{children:["This is a ",(0,s.jsx)(t.a,{href:"https://github.com/ObolNetwork/obol-splits/blob/main/src/controllers/ImmutableSplitController.sol",children:"contract"})," that updates one split configuration with another, exactly once. Only a permissioned address can trigger the change. This contract is suitable for changing a split at an unknown point in future to a configuration pre-defined at deployment."]}),"\n",(0,s.jsxs)(t.p,{children:["The Immutable Split Controller ",(0,s.jsx)(t.a,{href:"https://github.com/ObolNetwork/obol-splits/blob/main/src/controllers/ImmutableSplitControllerFactory.sol",children:"factory contract"})," can be found at the following addresses:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Chain"}),(0,s.jsx)(t.th,{children:"Address"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Mainnet"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://etherscan.io/address/0x49e7cA187F1E94d9A0d1DFBd6CCCd69Ca17F56a4",children:"0x49e7cA187F1E94d9A0d1DFBd6CCCd69Ca17F56a4"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Goerli"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://goerli.etherscan.io/address/0x64a2c4A50B1f46c3e2bF753CFe270ceB18b5e18f",children:"0x64a2c4A50B1f46c3e2bF753CFe270ceB18b5e18f"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Holesky"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Sepolia"}),(0,s.jsx)(t.td,{})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>n,x:()=>o});var r=i(96540);const s={},a=r.createContext(s);function n(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);