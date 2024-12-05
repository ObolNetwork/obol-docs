"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[8652],{71372:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"int/faq/errors","title":"Errors & Resolutions","description":"Errors & Resolutions","source":"@site/versioned_docs/version-v0.19.0/int/faq/errors.mdx","sourceDirName":"int/faq","slug":"/int/faq/errors","permalink":"/v0.19.0/int/faq/errors","draft":false,"unlisted":false,"editUrl":"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.19.0/int/faq/errors.mdx","tags":[],"version":"v0.19.0","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"description":"Errors & Resolutions"},"sidebar":"tutorialSidebar","previous":{"title":"Frequently asked questions","permalink":"/v0.19.0/int/faq/general"},"next":{"title":"Centralization risks and mitigation","permalink":"/v0.19.0/int/faq/risks"}}');var i=r(74848),t=r(28453);const o={sidebar_position:2,description:"Errors & Resolutions"},a="Errors & Resolutions",d={},c=[];function l(e){const s={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components},{Details:r}=s;return r||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"errors--resolutions",children:"Errors & Resolutions"})}),"\n",(0,i.jsx)(s.p,{children:"All operators should try to restart their nodes and should check if they are on the latest stable version before attempting anything other configuration change as we are still in beta and frequently releasing fixes. You can restart and update with the following commands:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"docker compose down\ngit pull\ndocker compose up\n"})}),"\n",(0,i.jsx)(s.p,{children:"You can check your logs using"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"docker compose logs\n"})}),"\n",(0,i.jsxs)(r,{open:!0,className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h2",{id:"enrs-keys",children:"ENRs & Keys"})}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h4",{id:"what-is-an-enr",children:"What is an ENR?"})}),(0,i.jsxs)(s.p,{children:["An ENR is shorthand for an ",(0,i.jsx)("a",{href:"https://eips.ethereum.org/EIPS/eip-778",children:"\nEthereum Node Record\n"}),". It is a way to represent a node on a public network, with a reliable mechanism\nto update its information."]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsxs)(s.p,{children:["At Obol we use ENRs to identify charon nodes to one another such that they\ncan form clusters with the right charon nodes and not impostors. ENRs have\nprivate keys they use to sign updates to the"," ","\n",(0,i.jsx)("a",{href:"https://enr-viewer.com/",children:"data contained"})," in their ENR. This\nprivate key is by default found at"," ","\n",(0,i.jsx)("code",{children:".charon/charon-enr-private-key"}),", and should be kept secure, and\nnot checked into version control."]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(s.p,{children:"An ENR looks something like this:"}),(0,i.jsx)("pre",{children:(0,i.jsx)("code",{children:(0,i.jsx)(s.p,{children:"enr:-JG4QAgAOXjGFcTIkXBO30aUMzg2YSo1CYV0OH8Sf2s7zA2kFjVC9ZQ_jZZItdE8gA-tUXW-rWGDqEcoQkeJ98Pw7GaGAYFI7eoegmlkgnY0gmlwhCKNyGGJc2VjcDI1NmsxoQI6SQlzw3WGZ_VxFHLhawQFhCK8Aw7Z0zq8IABksuJEJIN0Y3CCPoODdWRwgj6E"})})})]}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h4",{id:"generate-enr-again",children:(0,i.jsx)(s.p,{children:"How do I get my ENR if I want to generate it again?"})})}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"cd"})," to the directory where your private keys are located\n(ex: ",(0,i.jsx)("code",{children:"cd /path/to/charon/enr/private/key"}),")"]})}),(0,i.jsxs)("li",{children:[(0,i.jsxs)(s.p,{children:["Run"," "]}),(0,i.jsx)("code",{children:(0,i.jsxs)(s.p,{children:['docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon',":latest"," enr"]})}),(0,i.jsxs)(s.p,{children:[". This prints the ENR on your screen."," "]})]}),(0,i.jsx)("li",{children:(0,i.jsx)(s.p,{children:"Please note that this ENR is not the same as the one generated when you\ncreated it for the first time. This is because the process of generating\nENRs includes the current timestamp."})})]})]}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsxs)("h4",{id:"lost-enr-private-key",children:[" ",(0,i.jsxs)(s.p,{children:["What do I do if lose my ",(0,i.jsx)("code",{children:"charon-enr-private-key"}),"?"," "]})]})}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[" ",(0,i.jsxs)(s.p,{children:["For now, ENR rotation/replacement is not supported, it will be supported\nin a future release."," "]})]}),(0,i.jsxs)("li",{children:[" ",(0,i.jsxs)(s.p,{children:["Therefore, it's advised to always keep a backup of your ",(0,i.jsx)("code",{children:"\nprivate-key\n"})," in a secure location (ex: cloud storage, USB Flash drive etc.)"," "]})]})]})]}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h4",{id:"lost-keys",children:"I can't find the keys anywhere"})}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)("code",{children:"charon-enr-private-key"})," is generated inside a hidden\nfolder ",(0,i.jsx)("code",{children:".charon"}),"."," "]})}),(0,i.jsx)("li",{children:(0,i.jsxs)(s.p,{children:["To view it, run ",(0,i.jsx)("code",{children:"ls -al"})," in your terminal."," "]})}),(0,i.jsx)("li",{children:(0,i.jsxs)(s.p,{children:["You can then copy the key to your ",(0,i.jsx)("code",{children:"~/Downloads"})," folder for\neasy access by running"," ","\n",(0,i.jsx)("code",{children:"cp .charon/charon-enr-private-key ~/Downloads"}),". This step\nmaybe a bit different for windows."," "]})}),(0,i.jsx)("li",{children:(0,i.jsxs)(s.p,{children:["Else, if you are on ",(0,i.jsx)("code",{children:"macOS"}),", press"," ","\n",(0,i.jsx)("code",{children:"Cmd + Shift + . "})," to view the ",(0,i.jsx)("code",{children:".charon"})," folder in\nthe finder application."," "]})})]})]})]}),"\n",(0,i.jsxs)(r,{open:!0,className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h2",{id:"lighthouse",children:"Lighthouse"})}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h4",{id:"downloading-historical-blocks",children:"Downloading historical blocks"})})," ",(0,i.jsx)(s.p,{children:"This means that Lighthouse is still syncing which will throw a lot of errors\ndown the line. Wait for the sync before moving further."})]}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h4",{id:"failed-to-request-attester-duties",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"Failed to request attester duties"})," error"]})})})," ",(0,i.jsx)(s.p,{children:"Indicates there is something wrong with your lighthouse beacon node. This\nmight be because the request buffer is full as your node is never starting\nconsensus since it never gets the duties."})]}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h4",{id:"discovery-search-timeout",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"Not enough time for a discovery seach"})," error"]})})})," ",(0,i.jsx)(s.p,{children:"This could be linked to a internet connection being to slow or relying on a\nslow third-party service such as Infura."})]})]}),"\n",(0,i.jsxs)(r,{open:!0,className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h2",{id:"beacon-node",children:"Beacon Node"})}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h4",{id:"error-communicating-with-beacon-node-api",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"Error communicating with Beacon Node API"})," &"," ","\n",(0,i.jsx)("code",{children:"Error while connecting to beacon node event stream"})]})})})," ",(0,i.jsx)(s.p,{children:"This is likely due to lighthouse not done syncing, wait and try again once\nsynced. Can also be linked to Teku keystore issue."})]}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h4",{id:"clock-sync-issues",children:"Clock sync issues"})})," ",(0,i.jsx)(s.p,{children:"Either your clock server time is off, or you are talking to a remote beacon\nclient that is super slow (this is why we advise against using services like\ninfura)."})]}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h4",{id:"beacon-node-API-flaky",children:(0,i.jsx)(s.p,{children:"My beacon node API is flaky with lots of errors and timeouts"})})}),(0,i.jsx)(s.p,{children:"A good quality beacon node API is critical to validator performance. It is always\nadvised to run your own beacon node to ensure low latencies to boost validator\nperformance."}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsxs)(s.p,{children:["Using 3rd party services like Infura's beacon node API has significant\ndisadvantages since the quality is often low. Requests often return 500s or\ntimeout (Charon times out after 2s). This results in lots of warnings and\nerrors and failed duties. We are working on an"," ","\n",(0,i.jsx)("a",{href:"https://github.com/ObolNetwork/charon/issues/960",children:"issue"})," to\nmitigate against this, but running a local beacon node is still always\npreferred. We are not yet considering increasing the 2s timeout since that\ncan have knock-on effects."]})]})]}),"\n",(0,i.jsxs)(r,{open:!0,className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h2",{id:"charon",children:"Charon"})}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h4",{id:"attester-failed-in-consensus-component-error",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"Attester failed in consensus component"})," error"]})})})," ",(0,i.jsxs)(s.p,{children:["The required number of operators defined in your cluster-lock file is\nprobably not online to sign successfully. Make sure all operators are\nrunning the latest version of charon. To check if some peers are not online:"," "]}),(0,i.jsxs)("code",{children:[" ",(0,i.jsxs)(s.p,{children:["docker logs charon-distributed-validator-node-charon-1 2>&1 | grep 'absent'"," "]})]})]}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h4",{id:"load-private-key-error",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"Load private key"})," error"]})})})," ",(0,i.jsxs)(s.p,{children:["Make sure you have successfully run a DKG before running the node. The key\nshould be created and placed in the right directory during the ceremony\nAlso, make sure you are working in the right directory:"," ","\n",(0,i.jsx)("code",{children:"charon-distributed-validator-node"})]})]}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h4",{id:"failed-to-confirm-node-connection-error",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"Failed to confirm node connection"})," error"]})})})," ",(0,i.jsx)(s.p,{children:"Wait for Teku & Lighthouse sync to be complete."})]}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h4",{id:"reserve-relay-circuit-error",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"Reserve relay circuit: reservation failed"})," error"]})})}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"RESERVATION_REFUSED"}),' is returned by the libp2p relay when some maximum\nlimit has been reached. This is most often due to "maximum reservations per IP/peer".\nThis is when your charon node is restarting or in some error loop and constantly\nattempting to create new relay reservations reaching the maximum.']}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(s.p,{children:'To fix this error, stop your charon node for 30mins before restarting it.\nThis should allow the relay enough time to reset your ip/peer limits and\nshould then allow new reservations. This could also be due to the relay\nbeing overloaded in general, so reaching a server wide "maximum connections"\nlimit. This is an issue with relay scalability and we are working in a long\nterm fix for this.'})]}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h4",{id:"opening-relay-circuit-error",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"Error opening relay circuit: NO_RESERVATION"})," error"]})})}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"Error opening relay circuit NO_RESERVATION (204)"})," indicates the peer\nisn't connected to the relay, so the the charon client cannot connect to the\npeer via the relay. That might be because the peer is offline or the peer is\nconfigured to connect to a different relay."]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsxs)(s.p,{children:["To fix this error, ensure the peer is online and configured with the exact\nsame ",(0,i.jsx)(s.code,{children:"--p2p-relays"})," flag."]})]}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h4",{id:"duty-data-from-beacon-node-error",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"Couldn't fetch duty data from the beacon node"})," error"]})})}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"msgFetcher"})," indicates a duty failed in the fetcher component when\nit failed to fetch the required data from the beacon node API. This indicates\na problem with the upstream beacon node."]})]}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h4",{id:"aggregate-attestation-error",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"Couldn't aggregate attestation due to failed attester duty"})," ","\nerror"]})})}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"msgFetcherAggregatorNoAttData"})," indicates an attestation aggregation\nduty failed in the fetcher component since it couldn't fetch the prerequisite\nattestation data. This indicates the associated attestation duty failed to obtain\na cluster agreed upon value."]})]}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsxs)("h4",{id:"aggregate-attestation-insufficient-partial-v2-committee-error",children:[(0,i.jsx)("code",{children:(0,i.jsx)(s.p,{children:"Couldn't aggregate attestation due to insufficient partial v2\ncommittee subscriptions"})})," ",(0,i.jsx)(s.p,{children:"error"})]})}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"msgFetcherAggregatorZeroPrepares"})," indicates an attestation aggregation\nduty failed in the fetcher component since it couldn't fetch the prerequisite\naggregated v2 committee subscription. This indicates the associated prepare aggregation\nduty failed due to no partial v2 committee subscription submitted by the cluster\nvalidator clients."]})]}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsxs)("h4",{id:"aggregate-attestation-failed-prepare-aggregator-duty-error",children:[(0,i.jsx)("code",{children:(0,i.jsx)(s.p,{children:"Couldn't aggregate attestation due to failed prepare aggregator duty"})})," ",(0,i.jsx)(s.p,{children:"error"})]})}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"msgFetcherAggregatorFailedPrepare"})," indicates an attestation aggregation\nduty failed in the fetcher component since it couldn't fetch the prerequisite\naggregated v2 committee subscription. This indicates the associated prepare aggregation\nduty failed."]})]}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsxs)("h4",{id:"insufficient-partial-randao-signatures-error",children:[(0,i.jsx)("code",{children:(0,i.jsx)(s.p,{children:"Couldn't propose block due to insufficient partial randao signatures"})})," ",(0,i.jsx)(s.p,{children:"error"})]})}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"msgFetcherProposerFewRandaos"})," indicates a block proposer duty failed\nin the fetcher component since it couldn't fetch the prerequisite aggregated\nRANDAO. This indicates the associated randao duty failed due to insufficient\npartial randao signatures submitted by the cluster validator clients."]})]}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsxs)("h4",{id:"zero-partial-randao-signatures-error",children:[(0,i.jsx)("code",{children:(0,i.jsx)(s.p,{children:"Couldn't propose block due to zero partial randao signatures"})})," ",(0,i.jsx)(s.p,{children:"error"})]})}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"msgFetcherProposerZeroRandaos"})," indicates a block proposer duty failed\nin the fetcher component since it couldn't fetch the prerequisite aggregated\nRANDAO. This indicates the associated randao duty failed due to no partial randao\nsignatures submitted by the cluster validator clients."]})]}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h4",{id:"failed-randao-duty-error",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"Couldn't propose block due to failed randao duty"})," error"]})})}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"msgFetcherProposerZeroRandaos"})," indicates a block proposer duty failed\nin the fetcher component since it couldn't fetch the prerequisite aggregated\nRANDAO. This indicates the associated randao duty failed."]})]}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h4",{id:"consensus-algorithm-not-complete-error",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"Consensus algorithm didn't complete"})," error"]})})}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"msgConsensus"})," indicates a duty failed in consensus component. This\ncould indicate that insufficient honest peers participated in consensus or p2p\nnetwork connection problems."]})]}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h4",{id:"signed-duty-not-submitted-error",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"Signed duty not submitted by local validator client"})," error"]})})}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"msgValidatorAPI"})," indicates that partial signature were never submitted\nby the local validator client. This could indicate that the local validator client\nis offline, or has connection problems with charon, or has some other problem.\nSee validator client logs for more details."]})]}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsxs)("h4",{id:"partial-signature-exchange-error",children:[(0,i.jsx)("code",{children:(0,i.jsx)(s.p,{children:"Bug: partial signature database didn't trigger partial signature\nexchange"})})," ",(0,i.jsx)(s.p,{children:"error"})]})}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"msgParSigDBInternal"})," indicates a bug in the partial signature database\nas it is unexpected."]})]}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h4",{id:"no-partial-signature-received-error",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"No partial signatures received from peers"})," error"]})})}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"msgParSigEx"})," indicates that no partial signature for the duty was\nreceived from any peer. This indicates all peers are offline or p2p network connection\nproblems."]})]}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsxs)("h4",{id:"insufficient-partial-signatures-received-error",children:[(0,i.jsx)("code",{children:(0,i.jsx)(s.p,{children:"Insufficient partial signatures received, minimum required threshold\nnot reached"})})," ",(0,i.jsx)(s.p,{children:"error"})]})}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"msgParSigDBThreshold"})," indicates that insufficient partial signatures\nfor the duty was received from peers. This indicates problems with peers or p2p\nnetwork connection problems."]})]}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsxs)("h4",{id:"inconsistent-signed-data-error",children:[(0,i.jsx)("code",{children:(0,i.jsx)(s.p,{children:"Bug: threshold aggregation of partial signatures failed due to\ninconsistent signed data"})})," ",(0,i.jsx)(s.p,{children:"error"})]})}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"msgSigAgg"})," indicates that BLS threshold aggregation of sufficient\npartial signatures failed. This indicates inconsistent signed data. This indicates\na bug in charon as it is unexpected."]})]}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsxs)("h4",{id:"private-key-lock-error",children:[(0,i.jsx)("code",{children:(0,i.jsx)(s.p,{children:"Existing private key lock file found, another charon instance may be\nrunning on your machine"})})," ",(0,i.jsx)(s.p,{children:"error"})]})}),(0,i.jsxs)(s.p,{children:["When you turn on the ",(0,i.jsx)("code",{children:"--private-key-file-lock"})," option in Charon, it\nchecks for a special file called the private key lock file. This file has the\nsame name as the ENR private key file but with a ",(0,i.jsx)("code",{children:".lock"})," extension.\nIf the private key lock file exists and is not older than 5 seconds, Charon won't\nrun. It doesn't allow running multiple Charon instances with the same ENR private\nkey. If the private key lock file has a timestamp older than 5 seconds, Charon\nwill replace it and continue with its work. If you're sure that no other Charon\ninstances are running, you can delete the private key lock file."]})]}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsxs)("h4",{id:"mismatching-validator-client-key",children:[(0,i.jsx)("code",{children:(0,i.jsx)(s.p,{children:"Validator api 5xx response: mismatching validator client key share\nindex, Mth key share submitted to Nth charon peer"})})," ",(0,i.jsx)(s.p,{children:"error"})]})}),(0,i.jsxs)(s.p,{children:["The issue revolves around an invalid setup or deployment, where keyshares are\nnot tied to the enr private key. There appears to be a mix-up during deployment,\nleading to a mismatching validator client key share index.\n",(0,i.jsx)("ul",{children:"For example:"})]}),(0,i.jsxs)("ul",{children:[(0,i.jsx)(s.p,{children:"Imagine node N is Alice, and node M is Bob, the error would read:"}),(0,i.jsx)("code",{children:(0,i.jsx)(s.p,{children:"mismatching validator client key share index, Bob's key share submitted\nto Alice's charon node."})})]}),(0,i.jsx)("ul",{children:(0,i.jsx)(s.p,{children:"Bob's private key share(s) are imported to a VC that is connected to\nAlice's charon node. This is a invalid setup/deployment. Alice's charon\nnode should only be connected to Alice's VC."})}),(0,i.jsxs)(s.p,{children:["Check the keyshare of each node inside cluster-lock.json and see that matches\nwith the key inside ",(0,i.jsx)("code",{children:"node(num)/validator_keys/keystore-0.json"})]})]})]}),"\n",(0,i.jsxs)(r,{open:!0,className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h2",{id:"teku",children:"Teku"})}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h4",{id:"teku-keystore-file-error",children:(0,i.jsxs)(s.p,{children:["Teku ",(0,i.jsx)("code",{children:"keystore file"})," error"," "]})})})," ",(0,i.jsxs)(s.p,{children:["Teku sometimes logs an error which looks like"," "]}),(0,i.jsx)("code",{children:(0,i.jsx)(s.p,{children:"Keystore file /opt/charon/validator_keys/keystore-0.json.lock already in\nuse."})})," ",(0,i.jsxs)(s.p,{children:["This can be solved by deleting the file(s) ending with ",(0,i.jsx)("code",{children:".lock"})," in\nthe folder ",(0,i.jsx)("code",{children:".charon/validator_keys"}),". It is caused by an unsafe\nshut down of Teku (usually by double pressing ",(0,i.jsx)(s.code,{children:"Ctrl+C"})," to shutdown\ncontainers faster)."]})]})]}),"\n",(0,i.jsxs)(r,{open:!0,className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h2",{id:"grafana",children:" Grafana "})}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsxs)("h4",{id:"how-to-fix-grafana-dashboard",children:[" ",(0,i.jsxs)(s.p,{children:["How to fix the grafana dashboard?"," "]})]})})," ",(0,i.jsxs)(s.p,{children:["Sometimes, grafana dashboard doesn't load any data first time around.You can\nsolve this by following the steps below:"," "]}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Click the Wheel Icon > Datasources"}),(0,i.jsx)("li",{children:"Click prometheus"}),(0,i.jsx)("li",{children:(0,i.jsxs)(s.p,{children:['Change the "Access" field from ',(0,i.jsx)("code",{children:"Server (default)"})," to"," ","\n",(0,i.jsx)("code",{children:"Browser"}),'. Press "Save & Test". It should fail.'," "]})}),(0,i.jsx)("li",{children:(0,i.jsxs)(s.p,{children:['Change the "Access" field back to ',(0,i.jsx)("code",{children:"Server (default)"}),' and\npress "Save & Test". You should be presented with a green success icon\nsaying "Data source is working" and you can return to the dashboard\npage.'," "]})})]})]}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h4",{id:"no-data-validator-info-panel",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"N/A"})," & ",(0,i.jsx)("code",{children:"No data"})," in validator info panel"]})})})," ",(0,i.jsxs)(s.p,{children:["Can be linked to the"," "]}),(0,i.jsx)("a",{href:"https://github.com/ObolNetwork/charon-distributed-validator-node#teku-keystore-file-error",children:(0,i.jsx)(s.p,{children:"Teku Keystore issue"})}),(0,i.jsx)(s.p,{children:"."})]})]}),"\n",(0,i.jsxs)(r,{open:!0,className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h2",{id:"prometheus",children:"Prometheus"})}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h4",{id:"unauthorized-invalid-token-error",children:(0,i.jsx)("code",{children:"Unauthorized: authentication error: invalid token"})})})," ",(0,i.jsxs)(s.p,{children:["You can ignore this error unless you have been contacted by the Obol Team\nwith monitoring credentials. In that case, follow"," "]}),(0,i.jsx)("a",{href:"https://docs.obol.tech/docs/next/int/quickstart/advanced/monitoring",children:(0,i.jsx)(s.p,{children:"Getting Started Monitoring your Node"})})," ",(0,i.jsx)(s.p,{children:"in our advanced guides. It does not affect cluster performance or prevent\nthe cluster from running."})]})]}),"\n",(0,i.jsxs)(r,{open:!0,className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h2",{id:"docker",children:" Docker "})}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsxs)("h4",{id:"docker-permission-denied-error",children:[" ",(0,i.jsxs)(s.p,{children:["How to fix ",(0,i.jsx)("code",{children:"permission denied"})," errors?"," "]})]})})," ",(0,i.jsxs)(s.p,{children:["Permission denied errors can come up in a variety of manners, particularly\non Linux and WSL for Windows systems. In the interest of security, the\ncharon docker image runs as a non-root user, and this user often does not\nhave the permissions to write in the directory you have checked out the code\nto. This can be generally be fixed with some of the following:"," "]}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsxs)(s.p,{children:["Running docker commands with ",(0,i.jsx)("code",{children:"sudo"}),", if you haven't"," "]}),(0,i.jsx)("a",{href:"https://docs.docker.com/engine/install/linux-postinstall/",children:(0,i.jsx)(s.p,{children:"setup docker to be run as a non-root user"})}),(0,i.jsxs)(s.p,{children:["."," "]})]}),(0,i.jsx)("li",{children:(0,i.jsxs)(s.p,{children:["Changing the permissions of the ",(0,i.jsx)("code",{children:".charon"})," folder with the\ncommands:"," "]})}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"mkdir .charon"})," (if it doesn't already exist)"]})}),(0,i.jsx)("li",{children:(0,i.jsx)("code",{children:"sudo chmod -R 666 .charon"})})]})]})]}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsxs)("h4",{id:"running-docker-compose-up-error",children:[" ",(0,i.jsxs)(s.p,{children:["I see a lot of errors after running ",(0,i.jsx)("code",{children:"docker compose up"})]})]})})," ",(0,i.jsxs)(s.p,{children:["It's because both geth and lighthouse start syncing and so there's\nconnectivity issues among the containers. Simply let the containers run for\na while. You won't observe frequent errors when geth finishes syncing. You\ncan also add a second beacon node endpoint for something like infura by\nadding a comma separated API URL to the end of"," ","\n",(0,i.jsx)("code",{children:"CHARON_BEACON_NODE_ENDPOINTS"})," in the\ndocker-compose(./docker-compose.yml#84)."]})]}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsxs)("h4",{id:"loki-plugin-not-found-error",children:[" ",(0,i.jsxs)(s.p,{children:["How do I fix the ",(0,i.jsx)("code",{children:'plugin "loki" not found'})," error?"]})]})})," ",(0,i.jsxs)(s.p,{children:["If you get the following error when calling ",(0,i.jsx)(s.code,{children:"docker compose up"}),":"]}),(0,i.jsx)("br",{}),(0,i.jsx)("code",{children:(0,i.jsx)(s.p,{children:'Error response from daemon: error looking up logging plugin loki: plugin\n"loki" not found'})}),(0,i.jsxs)(s.p,{children:[".",(0,i.jsx)("br",{}),"\nThen it probably means that the Loki docker driver isn't installed. In that case,\nrun the following command to install loki:"]}),(0,i.jsx)("br",{}),(0,i.jsx)("code",{children:(0,i.jsxs)(s.p,{children:["docker plugin install grafana/loki-docker-driver",":latest"," --alias loki\n--grant-all-permissions"," "]})})]})]}),"\n",(0,i.jsxs)(r,{open:!0,className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h2",{id:"Relay",children:"Relay"})}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsxs)("h4",{id:"resolve-ip-or-p2p-external-host-flag-error",children:[(0,i.jsxs)("code",{children:[" ",(0,i.jsxs)(s.p,{children:["Resolve IP of p2p external host flag: lookup replace.with.public.ip.or.hostname:\nno such host"," "]})]})," ",(0,i.jsx)(s.p,{children:"error"})]})})," ",(0,i.jsxs)(s.p,{children:["Replace ",(0,i.jsx)("code",{children:"replace.with.public.ip.or.hostname"})," in the\nrelay/docker-compose.yml with your real public IP or DNS hostname."]})]}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h4",{id:"timeout-resolving-bootnode-enr",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:" Timeout resolving bootnode ENR: context deadline exceeded "})," ","\nerror"]})})})," ",(0,i.jsx)(s.p,{children:"The relay you are trying to connect to your peers via is offline or\nunreachable."})]})]}),"\n",(0,i.jsxs)(r,{open:!0,className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h2",{id:"Lodestar",children:"Lodestar"})}),(0,i.jsxs)(r,{className:"details",children:[(0,i.jsx)("summary",{children:(0,i.jsx)("h4",{id:"Potential-next-epoch-attester-duties-reorg-slot-821-error",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:" warn: Potential next epoch attester duties reorg"})," error"]})})})," ",(0,i.jsxs)(s.p,{children:["Lodestar logs these warnings because charon is not able to return proper"," ","\n",(0,i.jsx)("code",{children:"dependent_root"})," value in ",(0,i.jsx)("code",{children:"getAttesterDuties"})," API\nresponse whenever lodestar calls this API. This is because charon uses"," ","\n",(0,i.jsx)("code",{children:"go-eth2-client"})," for all the beacon API calls and it doesn't\nprovide ",(0,i.jsx)("code",{children:"dependent_root"})," value in responses. We have reported\nthis to them"," ","\n",(0,i.jsx)("a",{href:"https://github.com/attestantio/go-eth2-client/issues/35",children:"here"}),"."]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>a});var n=r(96540);const i={},t=n.createContext(i);function o(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);