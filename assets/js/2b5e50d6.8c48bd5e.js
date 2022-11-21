"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[7389],{57922:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));a(16758);const o={},r="Project Bodhi - A Composable & Innovative Stack for EVM on Substrate",i={unversionedId:"Applications/project_bodhi",id:"Applications/project_bodhi",title:"Project Bodhi - A Composable & Innovative Stack for EVM on Substrate",description:"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the Open Grants Program Process on how to submit a proposal.",source:"@site/docs/Applications/project_bodhi.md",sourceDirName:"Applications",slug:"/Applications/project_bodhi",permalink:"/grants/Applications/project_bodhi",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Project Aurras - MVP - Phase 2",permalink:"/grants/Applications/project_aurras_mvp_phase_2"},next:{title:"Prosopo",permalink:"/grants/Applications/prosopo"}},s={},p=[{value:"Project Overview :page_facing_up",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Background",id:"background",level:4},{value:"Current Solution",id:"current-solution",level:4},{value:"Our solution - Project Bodhi: Composable &amp; Innovative Stack for EVM on Substrate",id:"our-solution---project-bodhi-composable--innovative-stack-for-evm-on-substrate",level:4},{value:"Project Details",id:"project-details",level:3},{value:"Details documentations of the project",id:"details-documentations-of-the-project",level:4},{value:"PoC",id:"poc",level:4},{value:"Technology Stack",id:"technology-stack",level:4},{value:"Scope",id:"scope",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team :busts_in_silhouette",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Team Github",id:"team-github",level:3},{value:"Development Roadmap :nut_and_bolt",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 ERC20 Playground",id:"milestone-1-erc20-playground",level:3},{value:"Milestone 2 Example \u2014 Additional features",id:"milestone-2-example--additional-features",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information :heavy_plus_sign",id:"additional-information-heavy_plus_sign",level:2}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"project-bodhi---a-composable--innovative-stack-for-evm-on-substrate"},"Project Bodhi - A Composable & Innovative Stack for EVM on Substrate"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md"},"Open Grants Program Process")," on how to submit a proposal.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Team Name:")," Acala"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Payment Address:")," BTC address: ",(0,l.kt)("inlineCode",{parentName:"li"},"1Q88PtW866r4bfv2eMphobP78QnsDrRKfY"))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.")),(0,l.kt)("h2",{id:"project-overview-page_facing_up"},"Project Overview :page_facing_up"),(0,l.kt)("p",null,"If this application in response to an RFP then please indicate this on the first line of this section."),(0,l.kt)("h3",{id:"overview"},"Overview"),(0,l.kt)("h4",{id:"background"},"Background"),(0,l.kt)("p",null,"It is clear to us that building a better, faster and cheaper Ethereum is not nearly enough. Just like Ethereum can do things Bitcoin can never do and subsequently inspired many new innovations, Substrate and Polkadot are categorically different from Ethereum that will empower many new types of innovations outside of the sandbox."),(0,l.kt)("p",null,"On a domain-specific chain like the Acala chain, there're many domain specific runtime optimizations. For example, there\u2019re DeFi primitives, liquidity and users that can be tapped into, there are also innovations that are simply not possible on Ethereum - customizable economic policy, for example Acala\u2019s Flex-Fee allows users to pay transaction fee with any supported tokens; native cross-chain capability; on-chain governance apparatus (no more locked funds); full upgradability (no more contract migrations) and more."),(0,l.kt)("p",null,"We\u2019d love to have all of these and EVM compatibility."),(0,l.kt)("h4",{id:"current-solution"},"Current Solution"),(0,l.kt)("p",null,"Current solution i.e. Frontier in principle is to emulate the Ethereum node experience. It aims to implement the full set of Ethereum RPC and emulates Ethereum block production process. This allows existing Ethereum tools such as Metamask and Remix to work with a Frontier enabled node seamlessly."),(0,l.kt)("p",null,"Integrating Frontier have revealed the following challenges by their severity:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Confined inside the EVM Sandbox (High): users will need to use a Substrate wallet (e.g. Polkadot-js Extension) and Metamask at the same time if they ever want to taste the real power of Acala, Substrate or Polkadot for that matter. This is certainly a deal-breaker for us."),(0,l.kt)("li",{parentName:"ol"},"Making Nodes more Expensive (Medium-High): Substrate does not store transactions by hash nor historical events, nor does it provide any event filtering ability. Frontier injects special block importing logic, storing the transactions and events into an off-chain auxiliary store in order to power the query API required by Ethereum. This kind of goes against the goal to have a lightweight node to lower barriers for people from anywhere to run nodes which helps the network to be more decentralized.")),(0,l.kt)("h4",{id:"our-solution---project-bodhi-composable--innovative-stack-for-evm-on-substrate"},"Our solution - Project Bodhi: Composable & Innovative Stack for EVM on Substrate"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://drive.google.com/uc?id=1_tD0lZkvqbhrJNRW6aIVMV3AhBnBCBSz",alt:"solution"})),(0,l.kt)("p",null,"Project Bodhi offers these benefits"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Full-stack composability: expose pallets API as EVM precompiled contracts"),(0,l.kt)("li",{parentName:"ol"},"Single-wallet experience: emulate full Ethereum JS SDK client (bodhi.js)"),(0,l.kt)("li",{parentName:"ol"},"Lightweight while Queryable: Substrate node + Indexer node"),(0,l.kt)("li",{parentName:"ol"},"Iterate fast with Typescript"),(0,l.kt)("li",{parentName:"ol"},"Revamped EVM economics")),(0,l.kt)("p",null,"This solution can be very useful for any domain-specific chains that want to offer the full experience of runtime and Smart Contract."),(0,l.kt)("h3",{id:"project-details"},"Project Details"),(0,l.kt)("p",null,"We expect the teams to already have a solid idea about the project's expected final state."),(0,l.kt)("p",null,"Therefore, we ask the teams to submit (where relevant):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Mockups/designs of any UI components"),(0,l.kt)("li",{parentName:"ul"},"API specifications of the core functionality"),(0,l.kt)("li",{parentName:"ul"},"An overview of the technology stack to be used"),(0,l.kt)("li",{parentName:"ul"},"Documentation of core components, protocols, architecture etc. to be deployed"),(0,l.kt)("li",{parentName:"ul"},"PoC/MVP or other relevant prior work or research on the topic")),(0,l.kt)("h4",{id:"details-documentations-of-the-project"},"Details documentations of the project"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Project overview PPT ",(0,l.kt)("a",{parentName:"li",href:"https://docs.google.com/presentation/d/1CfEFz3a5hLN2R-G25E32wNFTENVwRtO3m2JHTf5KJZI/edit?usp=sharing"},"here"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Project brief & plan ",(0,l.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1iqkgei9RoXQnZlDp3IoSsnNDIylTCcBAB5RJJQeu0Ec/edit?usp=sharing"},"here"))),(0,l.kt)("h4",{id:"poc"},"PoC"),(0,l.kt)("p",null,"We have completed a proof-of-concept to verify feasibility of the project ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AcalaNetwork/evm-provider"},"here")),(0,l.kt)("h4",{id:"technology-stack"},"Technology Stack"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The SDK (bodhi.js): this will be a new provider SDK which gets injected into existing web3.js, and wraps around polkadot-js to do Ethereum and Substrate translations (transactions, RPC calls, weights to gas etc.). Written in Typescript.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The Substrate Node: implement additional RPC to interact with EVM"),(0,l.kt)("li",{parentName:"ul"},"The Indexer server: integrate it with bodhi.js, EVM event logging etc. Current implementation ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/open-web3-stack/open-web3.js/tree/master/packages/indexer"},"here")," which both Laminar and Acala testnets have been using.")),(0,l.kt)("h4",{id:"scope"},"Scope"),(0,l.kt)("p",null,"There are a lot of work involved to get all of these into a product-ready state, which is what we always aiming for, but it'd be too big to fit into one single open grant. Therefore we have carved out a scope specifically for this grant, followed by details for future work."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Grant Scope: Project Bodhi MVP"),"\nThe MVP scope involves"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"building all necessary components for ERC20 playground"),(0,l.kt)("li",{parentName:"ul"},"integrate with an existing Ethereum project that is reasonably sophisticated and requires us to build address mapping between Substrate & EVM addresses"),(0,l.kt)("li",{parentName:"ul"},"integrate with one existing Ethereum deployment tool e.g. Waffle")),(0,l.kt)("p",null,"Future development"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Expose ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/open-web3-stack/open-runtime-module-library/tree/master/currencies"},"orml-currencies")," precompiles to EVM"),(0,l.kt)("li",{parentName:"ol"},"Expose ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/open-web3-stack/open-runtime-module-library/tree/master/nft"},"orml-nft")," precompiles to EVM"),(0,l.kt)("li",{parentName:"ol"},"Implement and integrate with Indexer Node"),(0,l.kt)("li",{parentName:"ol"},"Integrate fully with Polkadot Extension"),(0,l.kt)("li",{parentName:"ol"},"EVM economics: state renting, contract existential deposit, contract deployment economics"),(0,l.kt)("li",{parentName:"ol"},"Replace Gas system with Weights system")),(0,l.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,l.kt)("p",null,"Nope, if so we'd be more than happy to leverage it than build it ourselves."),(0,l.kt)("h2",{id:"team-busts_in_silhouette"},"Team :busts_in_silhouette"),(0,l.kt)("h3",{id:"team-members"},"Team members"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Architect: Bryan Chen"),(0,l.kt)("li",{parentName:"ul"},"Product Manager: Bette Chen"),(0,l.kt)("li",{parentName:"ul"},"Runtime Developer: Shaun Wang"),(0,l.kt)("li",{parentName:"ul"},"Full-stack Developer: Nantian Duan"),(0,l.kt)("li",{parentName:"ul"},"Full-stack Developer: Ermal Kaleci")),(0,l.kt)("h3",{id:"contact"},"Contact"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Contact Name:")," Bette Chen"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,l.kt)("a",{parentName:"li",href:"mailto:bette@acala.network"},"bette@acala.network")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://acala.network/"},"Acala Website"))),(0,l.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Registered Address:")," 105 Cecil Street #15-01, The Octagon, Singapore 069534"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," ACALA PTE. LTD.")),(0,l.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,l.kt)("p",null,"The team is made of experienced Substrate builders, various members are contributors to substrate, polkadot-js and other core libraries."),(0,l.kt)("p",null,"Bryan Chen is an active contributor to substrate codebase, a Polkadot community ambassador, and substrate/polkadot lecturer. He's the architect and technical brainpower behind the Laminar & Acala project."),(0,l.kt)("p",null,"Bette Chen has more than a decade product/program/project management experience with background in Software Engineering and MBA from Otago and Duke. She's in charge of product and operation for Laminar & Acala."),(0,l.kt)("p",null,"Nantian Duan is a full-stack developer, who built DApps for ChainX and now Laminar exchanges, he also actively contributes to polkadot-js and other code-bases."),(0,l.kt)("p",null,"Ermal Kaleci is a full-stack developer. He's an award winning mobile application (e.g. healthcare app developer turned Substrate developer."),(0,l.kt)("p",null,"Shaun Wang has been contributing to several Polkadot ecosystem open source libraries, including Substrate, parity-common, type-metadata, etc."),(0,l.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"SDK: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/AcalaNetwork/bodhi.js"},"https://github.com/AcalaNetwork/bodhi.js")),(0,l.kt)("li",{parentName:"ul"},"EVM: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/AcalaNetwork/Acala/tree/master/modules/evm"},"https://github.com/AcalaNetwork/Acala/tree/master/modules/evm"))),(0,l.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/bryan-chen-1ba8ba52/"},"https://www.linkedin.com/in/bryan-chen-1ba8ba52/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/bette-chen/"},"https://www.linkedin.com/in/bette-chen/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/shaopeng-wang/"},"https://www.linkedin.com/in/shaopeng-wang/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/ermal-kaleci-98445287/"},"https://www.linkedin.com/in/ermal-kaleci-98445287/"))),(0,l.kt)("h3",{id:"team-github"},"Team Github"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Bryan: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/orgs/laminar-protocol/people/xlc"},"https://github.com/orgs/laminar-protocol/people/xlc")),(0,l.kt)("li",{parentName:"ul"},"Bette: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/orgs/laminar-protocol/people/bette7"},"https://github.com/orgs/laminar-protocol/people/bette7")),(0,l.kt)("li",{parentName:"ul"},"Shaun: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/orgs/laminar-protocol/people/shaopengw"},"https://github.com/orgs/laminar-protocol/people/shaopengw")),(0,l.kt)("li",{parentName:"ul"},"Ermal: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/orgs/laminar-protocol/people/ermalkaleci"},"https://github.com/orgs/laminar-protocol/people/ermalkaleci")),(0,l.kt)("li",{parentName:"ul"},"Nantian: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/orgs/laminar-protocol/people/aniiantt"},"https://github.com/orgs/laminar-protocol/people/aniiantt"))),(0,l.kt)("h2",{id:"development-roadmap-nut_and_bolt"},"Development Roadmap :nut_and_bolt"),(0,l.kt)("h3",{id:"overview-1"},"Overview"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3 months"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):"),"  2FTE, the listed members would contribute to different deliverables based on their skill-set."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Costs:")," 1.79 BTC")),(0,l.kt)("h3",{id:"milestone-1-erc20-playground"},"Milestone 1 ERC20 Playground"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1.5 month"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 0.79 BTC")),(0,l.kt)("p",null,"Goal - Develop a web DApp & necessary components to allow users"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"input token name, symbol, supply amount and deploy new ERC20 tokens"),(0,l.kt)("li",{parentName:"ol"},"input ERC20 address and query balances and allowance"),(0,l.kt)("li",{parentName:"ol"},"make transfer / transferFrom / approve transaction")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0b."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a tutorial that explains how a user can use the playground, and deploy their own ERC20 contracts")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0c."),(0,l.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,l.kt)("td",{parentName:"tr",align:null},"The code will have proper unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"SDK - bodhi.js: integrate"),(0,l.kt)("td",{parentName:"tr",align:null},"Integrate with one of an existing Ethereum JS library. e.g. ethers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"SDK - bodhi.js: translate"),(0,l.kt)("td",{parentName:"tr",align:null},"Translate Ethereum transactions to Substrate transactions; Translate some Ethereum RPC to Substrate RPC needed for the MVP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"Substrate pallet: modules-evm"),(0,l.kt)("td",{parentName:"tr",align:null},"Fork of pallet-evm from Substrate with necessary changes; Implements new RPC to allow SDK to emulate eth_estimateGas and eth_call")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4."),(0,l.kt)("td",{parentName:"tr",align:null},"Web DApp: ERC20 Playground"),(0,l.kt)("td",{parentName:"tr",align:null},"Implement the dapp")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5."),(0,l.kt)("td",{parentName:"tr",align:null},"Article/Tutorial"),(0,l.kt)("td",{parentName:"tr",align:null},"We will write an article or tutorial that explains the work done as part of the grant.")))),(0,l.kt)("h3",{id:"milestone-2-example--additional-features"},"Milestone 2 Example \u2014 Additional features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1.5 month"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  2.5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 1 BTC")),(0,l.kt)("p",null,"Goal - Integrate with one existing Ethereum project"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Be able to deploy & run e2e tests in Acala EVM"),(0,l.kt)("li",{parentName:"ol"},"Make sure the SDK provided by the project works with minimal changes")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0b."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a tutorial that explains how the existing Ethereum project is deployed and benefits")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0c."),(0,l.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,l.kt)("td",{parentName:"tr",align:null},"The code will have proper unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"SDK - bodhi.js: deployment tool"),(0,l.kt)("td",{parentName:"tr",align:null},"Integrate with one of an existing Ethereum deployment and testing tool e.g. Waffle")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"SDK - bodhi.js: Address mapping"),(0,l.kt)("td",{parentName:"tr",align:null},"Use module-evm-accounts to handle address mapping between Substrate & EVM addresses; Handles all Ethereum RPC used by project SDK")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"Substrate pallet: module-evm-accounts"),(0,l.kt)("td",{parentName:"tr",align:null},"provide a two way mapping between Substrate accounts and EVM accounts so user only have deal with one account / private key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4."),(0,l.kt)("td",{parentName:"tr",align:null},"Substrate pallet: modules-evm"),(0,l.kt)("td",{parentName:"tr",align:null},"Drop the gas price mechanism from Ethereum in favor of the weights mechanism from Substrate")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5."),(0,l.kt)("td",{parentName:"tr",align:null},"Integration"),(0,l.kt)("td",{parentName:"tr",align:null},"Deploy an existing contract and ensure it works e2e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6."),(0,l.kt)("td",{parentName:"tr",align:null},"Article/Tutorial"),(0,l.kt)("td",{parentName:"tr",align:null},"We will write an article or tutorial that explains the work done as part of the grant.")))),(0,l.kt)("h2",{id:"future-plans"},"Future Plans"),(0,l.kt)("p",null,"Our vision is to provide a composable and innovative stack for EVM on Substrate. We've seen the power of composibility in DeFi on Ethereum, and it's not limited to one domain. Meanwhile we also want to break-free from Ethereum constraints, and offer innovative economic models, fight scams, and improve usability. We're determined to make this next level unified experience happen on Substrate, through the the Project Bodhi stack. We are going to eat our own dog food to use it for Acala. And we believe it will be useful for most domain-specific parachains/parathreads who have custom runtime and also want to leverage smart contracts."),(0,l.kt)("p",null,"Future development"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Expose ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/open-web3-stack/open-runtime-module-library/tree/master/currencies"},"orml-currencies")," precompiles to EVM"),(0,l.kt)("li",{parentName:"ol"},"Expose ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/open-web3-stack/open-runtime-module-library/tree/master/nft"},"orml-nft")," precompiles to EVM"),(0,l.kt)("li",{parentName:"ol"},"Implement and integrate with Indexer Node"),(0,l.kt)("li",{parentName:"ol"},"Integrate fully with Polkadot Extension"),(0,l.kt)("li",{parentName:"ol"},"EVM economics: state renting, contract existential deposit, contract deployment economics"),(0,l.kt)("li",{parentName:"ol"},"Replace Gas system with Weights system")),(0,l.kt)("h2",{id:"additional-information-heavy_plus_sign"},"Additional Information :heavy_plus_sign"),(0,l.kt)("p",null,"Any additional information that you think is relevant to this application that hasn't already been included."),(0,l.kt)("p",null,"Possible additional information to include:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"What work has been done so far?",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"we have done PoC to prove it's possible, evaluated edge cases and figured out to the full-scope for production ready development."),(0,l.kt)("li",{parentName:"ul"},"Project overview PPT ",(0,l.kt)("a",{parentName:"li",href:"https://docs.google.com/presentation/d/1CfEFz3a5hLN2R-G25E32wNFTENVwRtO3m2JHTf5KJZI/edit?usp=sharing"},"here")),(0,l.kt)("li",{parentName:"ul"},"Project brief & plan ",(0,l.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1iqkgei9RoXQnZlDp3IoSsnNDIylTCcBAB5RJJQeu0Ec/edit?usp=sharing"},"here")),(0,l.kt)("li",{parentName:"ul"},"PoC code ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/AcalaNetwork/evm-provider"},"here")))),(0,l.kt)("li",{parentName:"ul"},"Are there are any teams who have already contributed (financially) to the project?",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Just the Acala team"))),(0,l.kt)("li",{parentName:"ul"},"Have you applied for other grants so far?",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Acala has a grant from W3F for stablecoin. Founding members of Acala project, Laminar and Polkawallet also received grants for their respective projects.")))))}u.isMDXComponent=!0}}]);