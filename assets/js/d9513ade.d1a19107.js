"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[9267],{73765:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));a(16758);const i={},l="Epirus Substrate Explorer",o={unversionedId:"Applications/epirus_substrate_explorer",id:"Applications/epirus_substrate_explorer",title:"Epirus Substrate Explorer",description:"- Team Name: Web3 Labs Ltd",source:"@site/docs/Applications/epirus_substrate_explorer.md",sourceDirName:"Applications",slug:"/Applications/epirus_substrate_explorer",permalink:"/grants/Applications/epirus_substrate_explorer",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"DOTMog",permalink:"/grants/Applications/dotmog"},next:{title:"Epirus Substrate Explorer - Phase II",permalink:"/grants/Applications/epirus_substrate_phase_2"}},s={},p=[{value:"Project Overview :page_facing_up",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Architecture",id:"architecture",level:4},{value:"System Components",id:"system-components",level:5},{value:"User Interface",id:"user-interface",level:3},{value:"Technology Stack",id:"technology-stack",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Audience",id:"audience",level:4},{value:"Existing Projects",id:"existing-projects",level:4},{value:"Potential Synergies",id:"potential-synergies",level:4},{value:"Development Roadmap :nut_and_bolt",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 - Devnet MVP",id:"milestone-1---devnet-mvp",level:3},{value:"Team :busts_in_silhouette",id:"team-busts_in_silhouette",level:2},{value:"Team Members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s Experience",id:"teams-experience",level:3},{value:"Team Code Repositories",id:"team-code-repositories",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Phase 2 - Marketable System",id:"phase-2---marketable-system",level:3},{value:"Phase 3 - Web-Scale System",id:"phase-3---web-scale-system",level:3},{value:"On-Going Support",id:"on-going-support",level:3},{value:"Business and Community",id:"business-and-community",level:3},{value:"Additional Information",id:"additional-information",level:2}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"epirus-substrate-explorer"},"Epirus Substrate Explorer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," Web3 Labs Ltd"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," 0xc905c448db9942c662fcb1680f3ecfcd0592409c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,r.kt)("h2",{id:"project-overview-page_facing_up"},"Project Overview :page_facing_up"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Epirus Substrate Explorer will be a modular explorer for Substrate-based blockchains centred on supporting the Substrate contracts pallet and ink! smart contracts."),(0,r.kt)("p",null,"Web3 Labs has developed a closed source commercial blockchain explorer for EVM blockchains named Epirus. It is already in production for some private chains of financial institutions, Chainstack, the Palm Network and Icon\u2019s upcoming ICE network. The acquired knowledge and the existing source code, if applicable, will speed up the delivery of the product."),(0,r.kt)("p",null,"Our aspirational vision is to deliver a fully modular system providing a runtime for end-to-end extension bundles to compose your bespoke blockchain explorer instance. Each bundle should include the data model, the API and the UI\xa0 to serve a specific set of functionality available in a Substrate node (e.g. contracts, identity, treasury, etc.) and be installable from a repository. In addition to supporting pre-built pallets, it would serve as a powerful complement for custom pallets. This design could stimulate the evolution of the ecosystem through the open-source community."),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("h4",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,"The following diagram shows a high-level overview of the system logical components."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://drive.google.com/uc?id=17upXs40Voo2l38UwZegO3XYX_OLGlG8g",alt:"Epirus Substrate Architecture"})),(0,r.kt)("p",null,"The UI client application (C1) runs in a web browser and connects to a stateless web-accessible remote API through HTTP (C2)."),(0,r.kt)("p",null,"The API exposes the database entities in an easy to query way using GraphQL (C2)."),(0,r.kt)("p",null,"The database serves as a data enrichment layer and indexing of Substrate related data entities (i.e. metadata, blocks, extrinsics and events)."),(0,r.kt)("p",null,"The blockchain data services is a modular event-driven data extraction and transformation pipeline. This design will allow us to scale out the processors and extension modules that compose a data pipeline."),(0,r.kt)("p",null,"The Substrate Indexer (C3) loads blocks from genesis to the present block height through a Substrate node RPC API. These blocks are stored in the database, emitted to an event hub, and consumed by the base processors (C4) responsible for extracting additional core entities."),(0,r.kt)("p",null,"There is a processor per core data type, e.g. events from chain storage, to extract, transform and load it into the database. Each base processor emits events for its extracted entities."),(0,r.kt)("p",null,"The extension modules are data processors with a function-specific processing scope, existing one per supported pallet. The Accounts module (C5) is an extension module to index data related to accounts and balances, while the Contracts module (C6) does the same for contract pallet related data."),(0,r.kt)("h5",{id:"system-components"},"System Components"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"ID"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"C1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Explorer UI"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The Substrate Explorer client facing application that uses the Explorer API.",(0,r.kt)("br",null),"The Explorer UI client application runs in the end-user web browser and uses the Explorer API (C2) for the rendition of user views.",(0,r.kt)("br",null),"A registry of composable display blocks, for the navigation and the views itself will be implemented in order to make it easy to adapt the UI to the different pallets available in the Substrate node.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"C2",(0,r.kt)("sup",null,"*")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Explorer API"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Stateless GraphQL API to access the underlying database. Supports searching by indexed properties, pagination and sorting of results. We plan to serve it using PostGraphile or Husura.",(0,r.kt)("br",null),"The API services can scale out by the usual HTTP load balancing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"C3",(0,r.kt)("sup",null,"*")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Substrate Indexer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Load blocks from a Substrate node. It is responsible for reaching the most recently finalised block in the chain and","\xa0","emitting","\xa0","events on the ingestion of blocks.",(0,r.kt)("br",null),"This component is the entry point for the transformation pipeline (C4, C5 and C6).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"C4",(0,r.kt)("sup",null,"*")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Base Processors"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Components for indexing and decoding the fundamental Substrate data types, i.e. blocks, extrinsics, events and logs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"C5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Accounts Module"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Module to index accounts and balances information.",(0,r.kt)("br",null),"This is a prerequisite for the Contracts module (C6).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"C6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contracts Module"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Module to support the contracts pallet and ink! smart contracts.",(0,r.kt)("br",null),"Features:",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",null,"Support of two step contract deployment"),(0,r.kt)("li",null,"Detection of contract code uploads and indexing of WASM hashes"),(0,r.kt)("li",null,"Detection of contract instantiations and indexing of contract accounts"),(0,r.kt)("li",null,"Basic decoding of contract calls, i.e. 4 bytes selector and unnamed parametersIndexing of contract related calls and events")))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes")),(0,r.kt)("sup",null,"*")," Depending on the readiness of the existing ecosystem projects for indexing and GraphQL API building, e.g. Substrate Archive, Subsquid or Subquery, could be used to provide the functionality of the API (C2), Substrate Indexer (C3) and Base Processors (C4).",(0,r.kt)("p",null,"In any case, we will align the project with existing ecosystem solutions as much as possible."),(0,r.kt)("h3",{id:"user-interface"},"User Interface"),(0,r.kt)("p",null,"The user interface will be based on the existing Epirus look & feel:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.web3labs.com/hubfs/Web3%20Labs%20Theme%20Files/Frame_new.jpg",alt:"Epirus Look and Feel"})),(0,r.kt)("h3",{id:"technology-stack"},"Technology Stack"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Web UI")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/"},"Typescript")," \u2013 Strongly typed programming language that builds on JavaScript."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/"},"React")," / ",(0,r.kt)("a",{parentName:"li",href:"https://preactjs.com/"},"Preact")," \u2013 JavaScript library for building user interfaces. We will consider using Preact, the fast 3kB alternative to React with the same modern API, to reduce the package size if the bundler tree shaking is not enough."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://tailwindcss.com/"},"Tailwind CSS")," \u2013 A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Processing",(0,r.kt)("sup",null,"*"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kotlinlang.org/"},"Kotlin")," \u2013 Modern, concise and safe programming language."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://quarkus.io/"},"Quarkus")," \u2013 Kubernetes native Java stack tailored for OpenJDK HotSpot and GraalVM, crafted from the best of breed Java libraries and standards."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.graalvm.org/"},"GraalVM")," \u2013 High-performance JDK distribution. It is designed to accelerate the execution of applications written in Java and other JVM languages while also providing runtimes for JavaScript, Ruby, Python, and a number of other popular languages. GraalVM\u2019s polyglot capabilities make it possible to mix multiple programming languages in a single application while eliminating any foreign language call costs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/emeraldpay/polkaj"},"PolkaJ")," \u2013 Java client library to use and access API of Polkadot based networks.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("sup",null,"*"))," ",(0,r.kt)("em",{parentName:"p"},"Depending on the maturity of the Substrate JVM ecosystem, we can switch to languages with more mature support for Substrate.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Web API")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://graphql.org/"},"GraphQL")," \u2013 Query language for APIs and a runtime for fulfilling those queries with your existing data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.graphile.org/postgraphile/"},"PostGraphile")," \u2013 Builds a powerful, extensible and performant GraphQL API from a PostgreSQL schema.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Database")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.postgresql.org/"},"PostgreSQL")," \u2013 Powerful open source object-relational database. Provides first-class support for JSON data types."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/citusdata/citus"},"Citus")," \u2013 PostgreSQL extension that transforms Postgres into a distributed database\u2014so you can achieve high performance at any scale.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Synergies to Explore")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate-archive"},"Substrate Archive")," \u2013 As a possibility to be evaluated, the Substrate Indexer and Base Processors could be provided by this Substrate blockchain indexing engine."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/subsquid/squid"},"Subsquid")," \u2013 A query node framework for Substrate-based blockchains. In very simple terms, Subsquid can be thought of as an ETL tool, with a GraphQL server included. It is alpha stage software."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://subquery.network/"},"Subquery")," - A framework to define your own APIs to expose blockchain indexed data. It is similar to the Graph Network.")),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("p",null,"Substrate Epirus Explorer, in general, aims to deliver a great user experience while browsing blockchain information. In particular, it will provide extensive support for accessing all the information related to deployed WASM bytecode and its account instances."),(0,r.kt)("p",null,"The scope of this grant includes a baseline implementation of the core mechanisms and an elementary information display for contracts and accounts. The user interface will fulfil the minimum requirements for the prospective customers of the system to deliver a meaningful and fully functional baseline."),(0,r.kt)("h4",{id:"audience"},"Audience"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Usages"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Developers"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("ol",null,(0,r.kt)("li",null,"Developing backend extension modules"),(0,r.kt)("li",null,"Developing UI modules")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Service Providers"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("ol",null,(0,r.kt)("li",null,"Running an Explorer instance"),(0,r.kt)("li",null,"Customising the Explorer look and feel")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"End Users"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("ol",null,(0,r.kt)("li",null,"Accessing precise and user-friendly blockchain information"),(0,r.kt)("li",null,"Verifying ink! smart contracts")))))),(0,r.kt)("h4",{id:"existing-projects"},"Existing Projects"),(0,r.kt)("p",null,"There are other Substrate based blockchain explorers, notably Subscan and Polkascan. Both are general Web3 explorers, whilst Subscan provides a better user experience, supports some pre-build pallets (i.e. staking, EVM and parachain) and exposes a REST API."),(0,r.kt)("p",null,"We believe that a single provider cannot absorb all the UI experiences tailored to the growing number of pallets in the Substrate ecosystem. An open community package registry for this UI experience that exposes the functionality and data related to the pallets would benefit the evolution of the ecosystem. Regarding the API, the REST model imposes a rigid model to access information compared to GraphQL."),(0,r.kt)("p",null,"Epirus Substrate Explorer differentiates itself from the present offering in the following key points:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Initial focus on smart contracts and ink! with unique and novel features like verification and standards contract identification."),(0,r.kt)("li",{parentName:"ul"},"Ease of customisation and branding without tech provider lock-in."),(0,r.kt)("li",{parentName:"ul"},"Aim for end-to-end modularity and extensibility."),(0,r.kt)("li",{parentName:"ul"},"Aim to avoid duplication and foster synergies leveraging existing projects in the ecosystem, like Subquery or Subsquid.")),(0,r.kt)("h4",{id:"potential-synergies"},"Potential Synergies"),(0,r.kt)("p",null,"These are some projects that could ease the implementation of the proposed system:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"a)")," Substrate Archive is a project that decouples the indexing engine from the blockchain explorer, making it convenient to index historical blockchain data."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"b)")," Subsquid is a project targeted at developers aiming to reduce the complexity of fetching and transforming blockchain data and exposing it through a GraphQL API."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"c)")," Subquery is a project with similar functionality to Subsquid."),(0,r.kt)("p",null,"Subquery and Subsquid projects are potential candidates to serve as the indexing backend of Epirus Explorer. However, the indexed data needs to turn into the human-friendly information displayed in the explorer UI, requiring further transformations and data enrichment (e.g. metadata from ABI descriptors, RPC calls for standard contract interfaces, etc.) This data transformation and the user-friendly display are what Epirus Explorer provides."),(0,r.kt)("h2",{id:"development-roadmap-nut_and_bolt"},"Development Roadmap :nut_and_bolt"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 2 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):")," 2 FTE"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," 50,000 EUR")),(0,r.kt)("h3",{id:"milestone-1---devnet-mvp"},"Milestone 1 - Devnet MVP"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 2 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:")," 2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 50,000 EUR")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"N\xba"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0a."),(0,r.kt)("td",{parentName:"tr",align:"left"},"License"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0b."),(0,r.kt)("td",{parentName:"tr",align:"left"},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:"left"},"We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up an Explorer instance and connect it to a Substrate node.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0c."),(0,r.kt)("td",{parentName:"tr",align:"left"},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0d."),(0,r.kt)("td",{parentName:"tr",align:"left"},"Docker"),(0,r.kt)("td",{parentName:"tr",align:"left"},"We will provide a Dockerfile and Docker Compose file(s) to ease the deployment and execution of the system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1."),(0,r.kt)("td",{parentName:"tr",align:"left"},"Baseline implementation of the system components"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The implementation of the system components described in the \u201cSystem Components\u201d section:\xa0",(0,r.kt)("ul",null,(0,r.kt)("li",null,"C1. Explorer UI"),(0,r.kt)("li",null,"C2. Explorer API"),(0,r.kt)("li",null,"C3. Substrate Indexer"),(0,r.kt)("li",null,"C4. Base Processors"),(0,r.kt)("li",null,"C5. Accounts Module"),(0,r.kt)("li",null,"C6. Contracts Module")),"The source code will be stored in a public git repository.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2."),(0,r.kt)("td",{parentName:"tr",align:"left"},"Public explorer instance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A publically accessible instance of the Explorer connected to a development network with ink! smart contracts support.")))),(0,r.kt)("p",null,"For this minimum viable product delivery the following features are out of scope:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Detection of standard contracts, e.g. Open Brush PSP22, PSP34, etc."),(0,r.kt)("li",{parentName:"ul"},"Uploading verified ABI metadata"),(0,r.kt)("li",{parentName:"ul"},"Decoding of the contract calls based on ABI metadata"),(0,r.kt)("li",{parentName:"ul"},"Decoding of events based on ABI metadata"),(0,r.kt)("li",{parentName:"ul"},'Processing of "intrinsics", i.e. cross-contract interactions equivalent to Ethereum "internal transactions"')),(0,r.kt)("h2",{id:"team-busts_in_silhouette"},"Team :busts_in_silhouette"),(0,r.kt)("h3",{id:"team-members"},"Team Members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Marc Forn\xf3s"),(0,r.kt)("li",{parentName:"ul"},"Xueying Wang")),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Conor Svensson"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"li",href:"mailto:conor@web3labs.com"},"conor@web3labs.com"))),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Address:")," 7 Bell Yard, London, England, WC2A 2JR"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Web3 Labs Ltd, CRN 10783824")),(0,r.kt)("h3",{id:"teams-experience"},"Team's Experience"),(0,r.kt)("p",null,"Marc Forn\xf3s has been designing and implementing software systems for 20 years. He is an expert in the area of distributed systems and data-intensive applications. His experience ranges from warehouse automation with radio-frequency terminals using the Adaptive Communication Environment C++ framework, to airline post-sale revenue optimization software-as-a-service platform, generating millions in incremental revenue for low-cost and full-service carriers during eight years of operation. Currently in charge of evolving the Web3 Labs Epirus Block Explorer product offering."),(0,r.kt)("p",null,"Xueying Wang pivoted to software development after completing an MSc. in Aerospace Engineering and has been in the industry for the past six years. During this time, she pioneered conversational AI assistants for airlines, counting more than 20 assistants in production covering ten languages for customer service, FAQ and in-chat purchases. Also built a scalable publish-subscribe system to trigger actions on flight feed events for the automated agents. She participated in implementing a crypto trading bot as a side project and a composable Solid POD/RDF data browser. She has a great deal of experience developing React applications and is currently learning Rust and Substrate technologies."),(0,r.kt)("h3",{id:"team-code-repositories"},"Team Code Repositories"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Web3 Labs:")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/web3labs"},"https://github.com/web3labs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Web3j project:")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/web3j/"},"https://github.com/web3j/"))),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("p",null,"The present proposal exists to deliver a minimum viable product implementation of the Substrate Epirus Explorer and a public instance connected to a development network."),(0,r.kt)("p",null,"After this delivery, we expect to continue evolving the project and use each increment as feedback to the next phase to adapt the course of action as the problem space unfolds."),(0,r.kt)("p",null,"Down below is an illustrative sketch of the phases that could follow."),(0,r.kt)("h3",{id:"phase-2---marketable-system"},"Phase 2 - Marketable System"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 2 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:")," 2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 75,000 EUR")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tentative scope:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Refinement of core abstractions and modules"),(0,r.kt)("li",{parentName:"ul"},"Next increment of the Contract module"),(0,r.kt)("li",{parentName:"ul"},"Ability to display different contract widgets based on contract metadata or standard implementations; e.g. PSP22 and PSP34"),(0,r.kt)("li",{parentName:"ul"},"Support for branded themes")),(0,r.kt)("h3",{id:"phase-3---web-scale-system"},"Phase 3 - Web-Scale System"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 2 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:")," 2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 75,000 EUR")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tentative scope:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ready to support a large number of users and transaction volumes"),(0,r.kt)("li",{parentName:"ul"},"Performance analysis and tuning to cope with high volumes"),(0,r.kt)("li",{parentName:"ul"},"Potentially includes horizontal scalability capabilities, e.g. sharding, batch splitting, distributed processing, etc."),(0,r.kt)("li",{parentName:"ul"},"Monitoring and scalable deployment infrastructure")),(0,r.kt)("h3",{id:"on-going-support"},"On-Going Support"),(0,r.kt)("p",null,"Post delivery it is anticipated that an ongoing maintenance and support grant will be required from the Polkadot Treasury in DOT to keep Epirus up to date with the ink! smart contract language and Substrate evolution in general."),(0,r.kt)("h3",{id:"business-and-community"},"Business and Community"),(0,r.kt)("p",null,"Web3 Labs is passionate about supporting the wider Web3 community."),(0,r.kt)("p",null,"Web3j has been going since 2016, and we have offered a free version of our Epirus Explorer for EVM-based chains since 2019."),(0,r.kt)("p",null,"Our commercial model of the Epirus Explorer is a paid per volume and support software as a service. We plan to incorporate the Substrate Epirus Explorer into the offering."),(0,r.kt)("p",null,"Based on our experience with Web3j over the years, pure open-source is hard to sustain. We want to ensure that our Epirus service on Substrate chains will serve the community while being a self-sustained revenue-generating product."),(0,r.kt)("p",null,"The open-core of the Substrate Epirus Explorer, i.e. any grant funded development, will be available to the community without any financial constraints. Anyone will be able to run and extend its instances of the Explorer for its Substrate-based solutions."),(0,r.kt)("h2",{id:"additional-information"},"Additional Information"),(0,r.kt)("p",null,"In order to support ink! and Substrate, parts of Epirus Explorer could be open-sourced under an Apache 2.0 license following an \u201copen core\u201d model. Proprietary components, like EVM modules and chain intelligence, would be available exclusively via Web3 Labs Epirus offerings."),(0,r.kt)("p",null,"Details about the existing Epirus offering for EVM chains:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Epirus Explorer Website: ",(0,r.kt)("a",{parentName:"li",href:"https://www.web3labs.com/epirus-explorer"},"https://www.web3labs.com/epirus-explorer")),(0,r.kt)("li",{parentName:"ul"},"Palm Explorer: ",(0,r.kt)("a",{parentName:"li",href:"https://palm.epirus.io"},"https://palm.epirus.io"))),(0,r.kt)("p",null,"Additionally, it is worth mentioning that the team already built a composable data browser prototype for Solid PODs and RDF sources in general."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Code repository: ",(0,r.kt)("a",{parentName:"li",href:"https://gitlab.com/omd_public/assemblage"},"https://gitlab.com/omd_public/assemblage")),(0,r.kt)("li",{parentName:"ul"},"Assemblage demo video: ",(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=hYFEBAdkzmc"},"https://www.youtube.com/watch?v=hYFEBAdkzmc"))))}d.isMDXComponent=!0}}]);