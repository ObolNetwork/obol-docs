"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[38574],{18986:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var r=n(74848),i=n(28453);const t={sidebar_position:2,description:"Errors & Resolution s"},o="Errors & Resolutions",d={id:"int/faq/errors",title:"Errors & Resolutions",description:"Errors & Resolution s",source:"@site/versioned_docs/version-v0.10.1/int/faq/errors.mdx",sourceDirName:"int/faq",slug:"/int/faq/errors",permalink:"/docs/v0.10.1/int/faq/errors",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.10.1/int/faq/errors.mdx",tags:[],version:"v0.10.1",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Errors & Resolution s"},sidebar:"tutorialSidebar",previous:{title:"Frequently asked questions",permalink:"/docs/v0.10.1/int/faq/general"},next:{title:"Introducing Charon",permalink:"/docs/v0.10.1/dv/introducing-charon"}},a={},c=[];function l(e){const s={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"errors--resolutions",children:"Errors & Resolutions"})}),"\n",(0,r.jsx)(s.p,{children:"All operators should try to restart their nodes and should check if they are on the latest stable version before attempting anything other configuration change as we are still in beta and frequently releasing fixes. You can restart and update with the following commands:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"docker-compose down\ngit pull\ndocker-compose up\n"})}),"\n",(0,r.jsx)(s.p,{children:"You can check your logs using"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"docker-compose logs\n"})}),"\n",(0,r.jsxs)(n,{open:!0,className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("h2",{children:"ENRs & Keys"})}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("h4",{children:"What is an ENR?"})}),(0,r.jsxs)("p",{children:[(0,r.jsxs)(s.p,{children:["An ENR is shorthand for an"," ","\n",(0,r.jsx)("a",{href:"https://eips.ethereum.org/EIPS/eip-778",children:"Ethereum Node Record"}),".\nIt is a way to represent a node on a public network, with a reliable\nmechanism to update its information. At Obol we use ENRs to identify\ncharon nodes to one another such that they can form clusters with the\nright charon nodes and not impostors. ENRs have private keys they use to\nsign updates to the ",(0,r.jsx)(s.a,{href:"https://enr-viewer.com/",children:"data contained"})," in their\nENR. This private key is by default found at"," ","\n",(0,r.jsx)("code",{children:".charon/charon-enr-private-key"}),", and should be kept secure,\nand not checked into version control. An ENR looks something like this:"]}),(0,r.jsx)("code",{children:(0,r.jsx)(s.p,{children:"enr:-JG4QAgAOXjGFcTIkXBO30aUMzg2YSo1CYV0OH8Sf2s7zA2kFjVC9ZQ_jZZItdE8gA-tUXW-rWGDqEcoQkeJ98Pw7GaGAYFI7eoegmlkgnY0gmlwhCKNyGGJc2VjcDI1NmsxoQI6SQlzw3WGZ_VxFHLhawQFhCK8Aw7Z0zq8IABksuJEJIN0Y3CCPoODdWRwgj6E"})})]})]}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("h4",{children:"How do I get my ENR if I want to generate it again?"})}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"cd"})," to the directory where your private keys are located\n(ex: ",(0,r.jsx)("code",{children:"cd /path/to/charon/enr/private/key"}),")"]})}),(0,r.jsxs)("li",{children:[(0,r.jsxs)(s.p,{children:["Run"," "]}),(0,r.jsx)("code",{children:(0,r.jsxs)(s.p,{children:['docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon',":latest"," enr"]})}),(0,r.jsxs)(s.p,{children:[". This prints the ENR on your screen."," "]})]}),(0,r.jsx)("li",{children:(0,r.jsx)(s.p,{children:"Please note that this ENR is not the same as the one generated when you\ncreated it for the first time. This is because the process of generating\nENRs includes the current timestamp."})})]})]}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("h4",{children:[" ",(0,r.jsxs)(s.p,{children:["What do I do if lose my ",(0,r.jsx)("code",{children:"charon-enr-private-key"}),"?"," "]})]})}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[" ",(0,r.jsxs)(s.p,{children:["For now, ENR rotation/replacement is not supported, it will be supported\nin a future release."," "]})]}),(0,r.jsxs)("li",{children:[" ",(0,r.jsxs)(s.p,{children:["Therefore, it's advised to always keep a backup of your ",(0,r.jsx)("code",{children:"\nprivate-key\n"})," in a secure location (ex: cloud storage, USB Flash drive etc.)"," "]})]})]})]}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("h4",{children:"I can't find the keys anywhere."})}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)("code",{children:"charon-enr-private-key"})," is generated inside a hidden\nfolder ",(0,r.jsx)("code",{children:".charon"}),"."," "]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(s.p,{children:["To view it, run ",(0,r.jsx)("code",{children:"ls -al"})," in your terminal."," "]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(s.p,{children:["You can then copy the key to your ",(0,r.jsx)("code",{children:"~/Downloads"})," folder for\neasy access by running"," ","\n",(0,r.jsx)("code",{children:"cp .charon/charon-enr-private-key ~/Downloads"}),". This step\nmaybe a bit different for windows."," "]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(s.p,{children:["Else, if you are on ",(0,r.jsx)("code",{children:"macOS"}),", press"," ","\n",(0,r.jsx)("code",{children:"Cmd + Shift + . "})," to view the ",(0,r.jsx)("code",{children:".charon"})," folder in\nthe finder application."," "]})})]})]})]}),"\n",(0,r.jsxs)(n,{open:!0,className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("h2",{children:"Lighthouse"})}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("h4",{children:"Downloading historical blocks"})}),(0,r.jsx)(s.p,{children:"This means that Lighthouse is still syncing which will throw a lot of errors\ndown the line. Wait for the sync before moving further."})]}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("h4",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"Failed to request attester duties"})," error"]})})})," ",(0,r.jsx)(s.p,{children:"Indicates there is something wrong with your lighthouse beacon node. This\nmight be because the request buffer is full as your node is never starting\nconsensus since it never gets the duties."})]}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("h4",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"Not enough time for a discovery seach"})," error"]})})})," ",(0,r.jsx)(s.p,{children:"This could be linked to a internet connection being to slow or relying on a\nslow third-party service such as Infura."})]})]}),"\n",(0,r.jsxs)(n,{open:!0,className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("h2",{children:"Beacon Node"})}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("h4",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"Error communicating with Beacon Node API"})," &"," ","\n",(0,r.jsx)("code",{children:"Error while connecting to beacon node event stream"})]})})})," ",(0,r.jsx)(s.p,{children:"This is likely due to lighthouse not done syncing, wait and try again once\nsynced. Can also be linked to Teku keystore issue."})]}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("h4",{children:"Clock sync issues"})})," ",(0,r.jsx)(s.p,{children:"Either your clock server time is off, or you are talking to a remote beacon\nclient that is super slow (this is why we advise against using services like\ninfura)."})]}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("h4",{children:"My beacon node API is flaky with lots of errors and timeouts"})})," ",(0,r.jsxs)(s.p,{children:["A good quality beacon node API is critical to validator performance. It is\nalways advised to run your own beacon node to ensure low latencies to boost\nvalidator performance. Using 3rd party services like Infura's beacon node\nAPI has significant disadvantages since the quality is often low. Requests\noften return 500s or timeout (Charon times out after 2s). This results in\nlots of warnings and errors and failed duties. We are working on an\n",(0,r.jsx)(s.a,{href:"https://github.com/ObolNetwork/charon/issues/960",children:"issue"})," to mitigate\nagainst this, but running a local beacon node is still always preferred. We\nare not yet considering increasing the 2s timeout since that can have\nknock-on effects."]})]})]}),"\n",(0,r.jsxs)(n,{open:!0,className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("h2",{children:"Charon"})}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("h4",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"Attester failed in consensus component"})," error"]})})})," ",(0,r.jsxs)(s.p,{children:["The required number of operators defined in your cluster-lock file is\nprobably not online to sign successfully. Make sure all operators are\nrunning the latest version of charon. To check if some peers are not online:"," "]}),(0,r.jsxs)("code",{children:[" ",(0,r.jsxs)(s.p,{children:["docker logs charon-distributed-validator-node-charon-1 2>&1 | grep 'absent'"," "]})]})]}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("h4",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"Attester failed in parSigDBThreshold component"})," error"]})})})," ",(0,r.jsx)(s.p,{children:"Should be fixed in the latest version of Charon, upgrade and restart your\nnode."})]}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("h4",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"Peer connection failing and dropping"})," error"]})})})," ",(0,r.jsxs)(s.p,{children:["Should be fixed in the latest version of Charon, upgrade and restart your\nnode. Likely linked to Obol bootnode infrastructure. You can also try to\n",(0,r.jsx)(s.a,{href:"https://docs.obol.tech/docs/next/int/quickstart/group/quickstart-group-launchpad#self-host-a-bootnode",children:"run your own\nbootnode"}),"."]})]}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("h4",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"Load private key"})," error"]})})})," ",(0,r.jsxs)(s.p,{children:["Make sure you have successfully run a DKG before running the node. The key\nshould be created and placed in the right directory during the ceremony\nAlso, make sure you are working in the right directory:"," ","\n",(0,r.jsx)("code",{children:"charon-distributed-validator-node"})]})]}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("h4",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"Failed to confirm node connection"})," error"]})})})," ",(0,r.jsx)(s.p,{children:"Wait for Teku & Lighthouse sync to be complete."})]}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("h4",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"Reserve relay circuit: reservation failed"})," error"]})})}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"RESERVATION_REFUSED"}),' is returned by the bootnode libp2p relay when\nsome maximum limit has been reached. This is most often due to "maximum reservations\nper IP/peer". This is when your charon node is restarting or in some error loop\nand constantly attempting to create new relay reservations reaching the maximum.\nTo fix this error, stop your charon node for 30mins before restarting it. This\nshould allow the bootnode enough time to reset your ip/peer limits and should\nthen allow new reservations. This could also be due to the bootnode being overloaded\nin general, so reaching a server wide "maximum connections" limit. This is an\nissue with bootnode scalability and we are working in a long term fix for this.\nIf stopping your node for 30min doesn\'t solve ',(0,r.jsx)("code",{children:"\nRESERVATION_REFUSED\n"}),", then it is a problem the Obol team needs to solve."]})]}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("h4",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"Couldn't fetch duty data from the beacon node"})," error"]})})}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"msgFetcher"})," indicates a duty failed in the fetcher component when\nit failed to fetch the required data from the beacon node API. This indicates\na problem with the upstream beacon node."]})]}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("h4",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"Couldn't aggregate attestation due to failed attester duty"})," ","\nerror"]})})}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"msgFetcherAggregatorNoAttData"})," indicates an attestation aggregation\nduty failed in the fetcher component since it couldn't fetch the prerequisite\nattestation data. This indicates the associated attestation duty failed to obtain\na cluster agreed upon value."]})]}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("h4",{children:[(0,r.jsx)("code",{children:(0,r.jsx)(s.p,{children:"Couldn't aggregate attestation due to insufficient partial v2\ncommittee subscriptions"})})," ",(0,r.jsx)(s.p,{children:"error"})]})}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"msgFetcherAggregatorZeroPrepares"})," indicates an attestation aggregation\nduty failed in the fetcher component since it couldn't fetch the prerequisite\naggregated v2 committee subscription. This indicates the associated prepare aggregation\nduty failed due to no partial v2 committee subscription submitted by the cluster\nvalidator clients."]})]}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("h4",{children:[(0,r.jsx)("code",{children:(0,r.jsx)(s.p,{children:"Couldn't aggregate attestation due to failed prepare aggregator duty"})})," ",(0,r.jsx)(s.p,{children:"error"})]})}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"msgFetcherAggregatorFailedPrepare"})," indicates an attestation aggregation\nduty failed in the fetcher component since it couldn't fetch the prerequisite\naggregated v2 committee subscription. This indicates the associated prepare aggregation\nduty failed."]})]}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("h4",{children:[(0,r.jsx)("code",{children:(0,r.jsx)(s.p,{children:"Couldn't propose block due to insufficient partial randao signatures"})})," ",(0,r.jsx)(s.p,{children:"error"})]})}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"msgFetcherProposerFewRandaos"})," indicates a block proposer duty failed\nin the fetcher component since it couldn't fetch the prerequisite aggregated\nRANDAO. This indicates the associated randao duty failed due to insufficient\npartial randao signatures submitted by the cluster validator clients."]})]}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("h4",{children:[(0,r.jsx)("code",{children:(0,r.jsx)(s.p,{children:"Couldn't propose block due to zero partial randao signatures"})})," ",(0,r.jsx)(s.p,{children:"error"})]})}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"msgFetcherProposerZeroRandaos"})," indicates a block proposer duty failed\nin the fetcher component since it couldn't fetch the prerequisite aggregated\nRANDAO. This indicates the associated randao duty failed due to no partial randao\nsignatures submitted by the cluster validator clients."]})]}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("h4",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"Couldn't propose block due to failed randao duty"})," error"]})})}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"msgFetcherProposerZeroRandaos"})," indicates a block proposer duty failed\nin the fetcher component since it couldn't fetch the prerequisite aggregated\nRANDAO. This indicates the associated randao duty failed."]})]}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("h4",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"Consensus algorithm didn't complete"})," error"]})})}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"msgConsensus"})," indicates a duty failed in consensus component. This\ncould indicate that insufficient honest peers participated in consensus or p2p\nnetwork connection problems."]})]}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("h4",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"Signed duty not submitted by local validator client"})," error"]})})}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"msgValidatorAPI"})," indicates that partial signature were never submitted\nby the local validator client. This could indicate that the local validator client\nis offline, or has connection problems with charon, or has some other problem.\nSee validator client logs for more details."]})]}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("h4",{children:[(0,r.jsx)("code",{children:(0,r.jsx)(s.p,{children:"Bug: partial signature database didn't trigger partial signature\nexchange"})})," ",(0,r.jsx)(s.p,{children:"error"})]})}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"msgParSigDBInternal"})," indicates a bug in the partial signature database\nas it is unexpected."]})]}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("h4",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"No partial signatures received from peers"})," error"]})})}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"msgParSigEx"})," indicates that no partial signature for the duty was\nreceived from any peer. This indicates all peers are offline or p2p network connection\nproblems."]})]}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("h4",{children:[(0,r.jsx)("code",{children:(0,r.jsx)(s.p,{children:"Insufficient partial signatures received, minimum required threshold\nnot reached"})})," ",(0,r.jsx)(s.p,{children:"error"})]})}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"msgParSigDBThreshold"})," indicates that insufficient partial signatures\nfor the duty was received from peers. This indicates problems with peers or p2p\nnetwork connection problems."]})]}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("h4",{children:[(0,r.jsx)("code",{children:(0,r.jsx)(s.p,{children:"Bug: threshold aggregation of partial signatures failed due to\ninconsistent signed data"})})," ",(0,r.jsx)(s.p,{children:"error"})]})}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"msgSigAgg"})," indicates that BLS threshold aggregation of sufficient\npartial signatures failed. This indicates inconsistent signed data. This indicates\na bug in charon as it is unexpected."]})]})]}),"\n",(0,r.jsxs)(n,{open:!0,className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("h2",{children:"Teku"})}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("h4",{children:(0,r.jsxs)(s.p,{children:["Teku ",(0,r.jsx)("code",{children:"keystore file"})," error"," "]})})})," ",(0,r.jsxs)(s.p,{children:["Teku sometimes logs an error which looks like"," "]}),(0,r.jsx)("code",{children:(0,r.jsx)(s.p,{children:"Keystore file /opt/charon/validator_keys/keystore-0.json.lock already in\nuse."})})," ",(0,r.jsxs)(s.p,{children:["This can be solved by deleting the file(s) ending with ",(0,r.jsx)("code",{children:".lock"})," in\nthe folder ",(0,r.jsx)("code",{children:".charon/validator_keys"}),". It is caused by an unsafe\nshut down of Teku (usually by double pressing ",(0,r.jsx)(s.code,{children:"Ctrl+C"})," to shutdown\ncontainers faster)."]})]})]}),"\n",(0,r.jsxs)(n,{open:!0,className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("h2",{children:" Grafana "})}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("h4",{children:" How to fix the grafana dashboard? "})})," ",(0,r.jsxs)(s.p,{children:["Sometimes, grafana dashboard doesn't load any data first time around.You can\nsolve this by following the steps below:"," "]}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Click the Wheel Icon > Datasources"}),(0,r.jsx)("li",{children:"Click prometheus"}),(0,r.jsx)("li",{children:(0,r.jsxs)(s.p,{children:['Change the "Access" field from ',(0,r.jsx)("code",{children:"Server (default)"})," to"," ","\n",(0,r.jsx)("code",{children:"Browser"}),'. Press "Save & Test". It should fail.'," "]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(s.p,{children:['Change the "Access" field back to ',(0,r.jsx)("code",{children:"Server (default)"}),' and\npress "Save & Test". You should be presented with a green success icon\nsaying "Data source is working" and you can return to the dashboard\npage.'," "]})})]})]}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("h4",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"N/A"})," & ",(0,r.jsx)("code",{children:"No data"})," in validator info panel"]})})})," ",(0,r.jsxs)(s.p,{children:["Can be linked to the"," "]}),(0,r.jsx)("a",{href:"https://github.com/ObolNetwork/charon-distributed-validator-node#teku-keystore-file-error",children:(0,r.jsx)(s.p,{children:"Teku Keystore issue"})}),(0,r.jsx)(s.p,{children:"."})]})]}),"\n",(0,r.jsxs)(n,{open:!0,className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("h2",{children:"Prometheus"})}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("h4",{children:(0,r.jsx)("code",{children:"Unauthorized: authentication error: invalid token"})})})," ",(0,r.jsxs)("p",{children:[(0,r.jsxs)(s.p,{children:["Get the monitoring token and following"," "]}),(0,r.jsx)("a",{href:"https://github.com/ObolNetwork/charon-distributed-validator-node#step-6-leader-adds-central-monitoring-token",children:(0,r.jsx)(s.p,{children:"Step 6 of the quickstart"})}),(0,r.jsxs)(s.p,{children:[". This is not mandatory and should not prevent the cluster from running. Only\nthe cluster captain/leader should do this step and resolve this error. Check"," "]}),(0,r.jsx)("a",{href:"https://discord.com/channels/849256203614945310/1003921582965674104/1005569855698768066",children:(0,r.jsx)(s.p,{children:"these instructions"})}),(0,r.jsx)(s.p,{children:"from our Discord to get the monitoring token."})]})]})]}),"\n",(0,r.jsxs)(n,{open:!0,className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("h2",{children:" Docker "})}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("h4",{children:[" ",(0,r.jsxs)(s.p,{children:["How to fix ",(0,r.jsx)("code",{children:"permission denied"})," errors?"," "]})]})})," ",(0,r.jsxs)(s.p,{children:["Permission denied errors can come up in a variety of manners, particularly\non Linux and WSL for Windows systems. In the interest of security, the\ncharon docker image runs as a non-root user, and this user often does not\nhave the permissions to write in the directory you have checked out the code\nto. This can be generally be fixed with some of the following:"," "]}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsxs)(s.p,{children:["Running docker commands with ",(0,r.jsx)("code",{children:"sudo"}),", if you haven't"," "]}),(0,r.jsx)("a",{href:"https://docs.docker.com/engine/install/linux-postinstall/",children:(0,r.jsx)(s.p,{children:"setup docker to be run as a non-root user"})}),(0,r.jsxs)(s.p,{children:["."," "]})]}),(0,r.jsx)("li",{children:(0,r.jsxs)(s.p,{children:["Changing the permissions of the ",(0,r.jsx)("code",{children:".charon"})," folder with the\ncommands:"," "]})}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"mkdir .charon"})," (if it doesn't already exist)"]})}),(0,r.jsx)("li",{children:(0,r.jsx)("code",{children:"sudo chmod -R 666 .charon"})})]})]})]}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("h4",{children:[" ",(0,r.jsxs)(s.p,{children:["I see a lot of errors after running ",(0,r.jsx)("code",{children:"docker-compose up"})]})]})})," ",(0,r.jsxs)(s.p,{children:["It's because both geth and lighthouse start syncing and so there's\nconnectivity issues among the containers. Simply let the containers run for\na while. You won't observe frequent errors when geth finishes syncing. You\ncan also add a second beacon node endpoint for something like infura by\nadding a comma separated API URL to the end of"," ","\n",(0,r.jsx)("code",{children:"CHARON_BEACON_NODE_ENDPOINTS"})," in the\ndocker-compose(./docker-compose.yml#84)."]})]})]}),"\n",(0,r.jsxs)(n,{open:!0,className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("h2",{children:" Standalone Bootnode "})}),(0,r.jsxs)(n,{className:"details",children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("h4",{children:[(0,r.jsxs)("code",{children:[" ",(0,r.jsxs)(s.p,{children:["Resolve IP of p2p external host flag: lookup replace.with.public.ip.or.hostname:\nno such host"," "]})]})," ",(0,r.jsx)(s.p,{children:"error"})]})})," ",(0,r.jsxs)(s.p,{children:["Replace ",(0,r.jsx)("code",{children:"replace.with.public.ip.or.hostname"})," in the\nbootnode/docker-compose.yml with your real public IP or DNS hostname."]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>d});var r=n(96540);const i={},t=r.createContext(i);function o(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);