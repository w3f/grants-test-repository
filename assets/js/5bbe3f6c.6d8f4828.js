"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[1148],{73424:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));a(16758);const i={},l="drand in substrate",o={unversionedId:"Applications/pallet-drand-client",id:"Applications/pallet-drand-client",title:"drand in substrate",description:"- Team Name: The Bacon Beacon",source:"@site/docs/Applications/pallet-drand-client.md",sourceDirName:"Applications",slug:"/Applications/pallet-drand-client",permalink:"/grants/Applications/pallet-drand-client",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"OpenSea.js on polkadot",permalink:"/grants/Applications/pacific_store"},next:{title:"pallet-maci",permalink:"/grants/Applications/pallet_maci"}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1: Create a Rust client library for drand",id:"milestone-1-create-a-rust-client-library-for-drand",level:3},{value:"Milestoke 2: Build a Substrate pallet with a fully-featured/configured example chain",id:"milestoke-2-build-a-substrate-pallet-with-a-fully-featuredconfigured-example-chain",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"drand-in-substrate"},"drand in substrate"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," The Bacon Beacon"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," USDC 0x1C9e0bcA759e5Ec09246f4795310789b12F65a59"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("p",null,"We are planning to integrate the ",(0,r.kt)("a",{parentName:"p",href:"https://drand.love/developer/"},"drand")," client into substrate."),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Current sources of verifiable randomness in Substrate are limited, and developers need to rely on deriving randomness themselves, or by taking it from BABE."),(0,r.kt)("p",null,"The clear disadvantage of deriving randomness by the application developers is that all information on the blockchain is public. Resultingly, randomness is more likely to be predictable and gameable, especially on standalone Substrate chains."),(0,r.kt)("p",null,"On the other hand, BABE provides two sources of randomness: public and private.\nPublic randomness is derivied once per epoch, and is easily verifiable by hashing all the VRF outputs from the previous epoch. Unfortunately, it is only computed once per epoch.\nPrivate randomness is computed by each validator in secret to determine when they'd produce blocks. It is published with each block, which is as often as is possible on a blockchain and is provably verifiable and secure. Unfortunately, the random values that the validators publish are known to these validators ",(0,r.kt)("em",{parentName:"p"},"hours")," in advance."),(0,r.kt)("p",null,"Both of the above mentioned sources are internal: the randomness is derived from information ",(0,r.kt)("em",{parentName:"p"},"within")," the network.\nAnother approach is to take randomness from an external source, if that source can be proven to be secure."),(0,r.kt)("p",null,"One such source is ",(0,r.kt)("a",{parentName:"p",href:"https://drand.love/about/"},"drand"),' (decentralised randomness beacon), which allows the participants "to produce collective, publicly verifiable, unbiased, unpredictable random values at fixed intervals".'),(0,r.kt)("p",null,"In this project, we want to enable any Substrate project to consume publically, verifiable randomness from drand."),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("p",null,"Randomness needs to be retrieved from an HTTP API via a provider, which is itself either a member of the drand network, or a broadcaster of the randomness.\nIn either case, the pallet doesn't trust the provider blindly - instead, it can cryptographically verify the correctness of the randomness retrieved, by verifying it against the drand ",(0,r.kt)("a",{parentName:"p",href:"https://drand.love/developer/http-api/#chain-hash-info"},"chain randomness information")," contained in the Runtime. This chain intormation contains the network's well-known threshold public key, fixed interval for randomness generation, genesis time, and an initial random hash."),(0,r.kt)("p",null,"This chain randomness information and an optional ",(0,r.kt)("a",{parentName:"p",href:"https://drand.love/developer/http-api/#chain-hash-public-round"},"round")," 'checkpoint' can be set in the chain's ",(0,r.kt)("inlineCode",{parentName:"p"},"GenesisConfig"),", allowing the network to immediately start using the randomness from the first block. If appropriate, the pallet can also contain a ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateOrigin")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Config")," parameter, allowing the the beacon source to be modified by a trusted authority (eg. Council, Sudo, whitelisted account, etc) without a runtime update. Each round will be obtained via HTTP API calls made via an off-chain worker, and each round will be verified for cryptographic accuracy and timeliness before being consumable by the runtime."),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("p",null,"Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Where and how does your project fit into the ecosystem?")),(0,r.kt)("p",null,"A: It will be a Substrate pallet, likely with one of the standardized randomness trait interface in it's ",(0,r.kt)("inlineCode",{parentName:"p"},"Config"),", allowing it to be easily plugged into other pallets. It will also contain a standalone Substrate chain with the pallet, demonstraiting some concrete examples of how it can be used."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?")),(0,r.kt)("p",null,"A: Parachains and standalone Substrate chains, dapps (especially ones using ZKPs), and anyone wanting to consume public randomness."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What need(s) does your project meet?")),(0,r.kt)("p",null,"A: Providing verifiable, public randomness."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?")),(0,r.kt)("p",null,"A: Not that we're aware of."),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bacon"),(0,r.kt)("li",{parentName:"ul"},"Ham")),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Contact Name:")," Bacon")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"p",href:"mailto:bacon.randomness.beacon@pm.me"},"bacon.randomness.beacon@pm.me"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Website:")," N/A")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Contact Name:")," Ham")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Contact Method:")," Github issues/discussion or Session ID ",(0,r.kt)("inlineCode",{parentName:"p"},"05947ccb461b7e693282c71afea61ebe81e52abe8b99e03901d6e6c9af06f9ac51"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Website:")," N/A"))),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Address:")," N/A"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," N/A")),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("p",null,"Both team members have practical experience in developing cryptographic protocols (3 years combined) and Rust (4 years combined). We have completed the basic substrate tutorials for the purpose of preparing for this project. Apart from this information, we would like to keep the team's profiles private.\nWe believe that the quality of the project delivery will bear witness to our claims."),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/random-bacon"},"https://github.com/random-bacon"))),(0,r.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,r.kt)("p",null,"The public docs from ",(0,r.kt)("a",{parentName:"p",href:"https://drand.love/"},"drand")," serve best as technical introduction to what drand is, and how it can be integrated into existing projects. We will also use Github's Projects feature or Issues to create a backlog and task our progress publically."),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 2 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  1 FTE (2 x half-time)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," 28,000 USD")),(0,r.kt)("h3",{id:"milestone-1-create-a-rust-client-library-for-drand"},"Milestone 1: Create a Rust client library for drand"),(0,r.kt)("p",null,"While there exists one ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iprs-dev/drand-rs"},"drand Rust client library"),", it hasn't been updated in 2 years."),(0,r.kt)("p",null,"We will create a new Rust library that"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"includes ",(0,r.kt)("inlineCode",{parentName:"p"},"no_std")," support")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"complies and works with the APIs outlined ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/drand/drand-client#api"},"here"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"verifies the cryptogrpahic randomness")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"uses up-to-date dependencies")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"has a set of tests for asserting proper functionality and reducing bugs from future updates")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Estimated duration:")," 1 month")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"FTE:"),"  1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Costs:")," 14,000 USD"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT / Unlicense")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," alongside the code, a README explaining how it can be used, and a few examples demonstrating it's concrete usage.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. We will use standardized testing methods so tests can be pragmatically executed and updated by anyone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Drand client library"),(0,r.kt)("td",{parentName:"tr",align:null},"We will build out a drand client library with the requirements mentioned in the Milestoke 1 overview.")))),(0,r.kt)("h3",{id:"milestoke-2-build-a-substrate-pallet-with-a-fully-featuredconfigured-example-chain"},"Milestoke 2: Build a Substrate pallet with a fully-featured/configured example chain"),(0,r.kt)("p",null,"We will write a Substrate pallet that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"implements the drand client library from Milestone 1"),(0,r.kt)("li",{parentName:"ul"},"allows for the configuration and modification of the drand chain randomness information"),(0,r.kt)("li",{parentName:"ul"},"utilized off-chain workers to fetch round information, and ensuring validator consensus about it"),(0,r.kt)("li",{parentName:"ul"},"verifies the round information for cryptographic accuracy and timeliness"),(0,r.kt)("li",{parentName:"ul"},"provides a pragmatic way for other pallets to source the randomness")),(0,r.kt)("p",null,"We will also build an example Substrate node that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"demonstrates a fully configured pallet-drand-client")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"demonstrates an example pallet utilizing all of its features")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Estimated Duration:")," 1 month")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"FTE:"),"  1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Costs:")," 14,000 USD"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT / Unlicense")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will create ",(0,r.kt)("strong",{parentName:"td"},"dedicated documentation in the repo")," of how to use the code and a basic ",(0,r.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can (example) spin up one of the Substrate nodes and interact with the chain in a way that utilized drand's randomness.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Example pallet"),(0,r.kt)("td",{parentName:"tr",align:null},"We will create a pallet that integrates the drand client library from Milestone 1, and write a sample pallet that uses its features (eg. return a message from a list of messages at random, based on the public randomness it retrieves via the API).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Randomness verification"),(0,r.kt)("td",{parentName:"tr",align:null},"The pallet will be able to verify round randomness via the chain randomness information.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Example chain"),(0,r.kt)("td",{parentName:"tr",align:null},"We spin up a testing chain to demonstrate how such a pallet works.")))),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("p",null,"Once randomness is available to Substrate developers, we would be interested to write a client that actually ",(0,r.kt)("em",{parentName:"p"},"participates")," in the drand protocol.\nIt may make sense for a common-good parachain to participate as a member of ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/League_of_entropy"},"League of Entropy"),".\nWe recognize the lack of accountability and other issues that can arise with an anonymous team maintaining such an important and foundational ecosystem component like a common-good parachain,, and we are open to discussion solutions relating to the development and maintenance of it."),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/web3foundation/web3-foundation-grants-program-reaches-400-projects-milestone-1k-grant-applications-received-93a7d3a5f942"},"https://medium.com/web3foundation/web3-foundation-grants-program-reaches-400-projects-milestone-1k-grant-applications-received-93a7d3a5f942")),(0,r.kt)("p",null,"Thank you for your time. We're looking forward to discussing this project with you."))}m.isMDXComponent=!0}}]);