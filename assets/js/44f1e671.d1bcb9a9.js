"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[1727],{19723:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));a(16758);const l={},i="WasmEdge for Substrate",s={unversionedId:"Applications/wasmedge_substrate",id:"Applications/wasmedge_substrate",title:"WasmEdge for Substrate",description:"- Team Name: Second State",source:"@site/docs/Applications/wasmedge_substrate.md",sourceDirName:"Applications",slug:"/Applications/wasmedge_substrate",permalink:"/grants/Applications/wasmedge_substrate",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"WebAssembly Runtimes Fuzzing (WARF)",permalink:"/grants/Applications/wasm_runtimes_fuzzing"},next:{title:"Web3 Compatible API for Substrate EVM Chains",permalink:"/grants/Applications/web3-compatible-api"}},o={},m=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Enable Substrate to run on WasmEdge",id:"milestone-1--enable-substrate-to-run-on-wasmedge",level:3},{value:"Milestone 2 -- Create docs and config options to select between multiple WebAssembly runtimes",id:"milestone-2----create-docs-and-config-options-to-select-between-multiple-webassembly-runtimes",level:3},{value:"Milestone 3 -- Performance benchmarks and analysis",id:"milestone-3----performance-benchmarks-and-analysis",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],d={toc:m};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wasmedge-for-substrate"},"WasmEdge for Substrate"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," Second State"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," 0xf212a28a62d01549c323a5feac7bbc8534064c41 (Ethereum USDT)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Supporting WasmEdge as an alternative Substrate WebAssembly runtime. The project increases the Substrate ecosystem's node software diversity by supporting an alternative high-performance WebAssembly Runtime implementation. The project team are the maintainers of the WasmEdge WebAssembly Runtime project, and had successfully completed W3F projects in the past."),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("p",null,"Software stack diversity (or \u201cdeveloper decentralization\u201d) is key to building a resilient blockchain network. As Ethereum\u2019s history has shown, the availability of multiple node software implementations, from GETH to Parity-Ethereum, has greatly improved network stability and security. When a critical bug is discovered or exploited on one implementation, the other would help sustain and stabilize the network."),(0,r.kt)("p",null,"The Substrate framework and libraries are compiled into WebAssembly bytecode and run on a WebAssembly runtime in order to achieve  safety and portability. It is therefore a low hanging fruit to support multiple alternative WebAssembly runtimes to improve software diversity at the foundation of the Substrate stack."),(0,r.kt)("p",null,"Currently, Substrate runs on the Wasmtime WebAssembly runtime created by the Mozilla and Fastly team. WasmEdge is another leading WebAssembly runtime hosted by the Linux Foundation / Cloud Native Computing Foundation (CNCF). It is fully compliant to the WebAssembly specification as well as standard WebAssembly extensions. It is supported across many OSes including Linux, Windows, Mac OS X, seL4, and CPU architectures including x86, aarch64, and Apple M1. WasmEdge is among the fastest WebAssembly runtimes available today."),(0,r.kt)("p",null,"Compared with Wasmtime, WasmEdge features a completely different software architecture. It is written in C++ and depends on the LLVM for runtime code generation, while Wasmtime is written in Rust and depends on Cranelift for dynamic compilation. That makes WasmEdge a compelling choice for improving Substrate software stack diversity."),(0,r.kt)("p",null,"In this project, we propose to use WasmEdge as an alternative WebAssembly runtime for Substrate. We will create a software layer that allows users to choose between Wasmtime and WasmEdge when they build Substrate from source. We will also evaluate the performance characteristics of the two runtimes."),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("p",null,"The proposed project will bring an alternative runtime at the base of the Substrate stack and hence benefit the entire ecosystem."),(0,r.kt)("p",null,"It could also bring Substrate developers communities closer to WasmEdge\u2019s developer communities in cloud native (Linux Foundation / CNCF) and LLVM ecosystems. "),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("p",null,"Michael Yuan is the technical co-founder of Second State and ParaState. He is also the author of the book Building Blockchain Apps published by Addison-Wesley in 2019."),(0,r.kt)("p",null,"Vincent Lin is the lead developer of the Substrate Ewasm Pallet based on WasmEdge. The pallet allows WasmEdge to act as an in-chain VM for Ethereum flavor WebAssembly smart contracts."),(0,r.kt)("p",null,"Tim McCallum is a developer\u2019s advocate. He creates developer content, such as demos, tutorials, articles, videos, and podcasts, for blockchain developers."),(0,r.kt)("p",null,"Antonio Yang is the lead developer of the Rust SewUp crate, which enables Rust developers to create Ethereum flavored WebAssembly application compliant to the EVMC interface."),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Michael Yuan"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"li",href:"mailto:michael@secondstate.io"},"michael@secondstate.io")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Website:")," ",(0,r.kt)("a",{parentName:"li",href:"https://www.secondstate.io/"},"https://www.secondstate.io/"))),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Address:")," PO Box 2075, #30 The Strand, 46 Canal Point Dr., Grand Cayman, KY1-1105, Cayman Islands"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Second State Inc.")),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("p",null,"The team consists of maintainers and core developers of the open source WasmEdge project."),(0,r.kt)("p",null,"The team has successfully completed a W3F grant in the past to adapt WasmEdge (previously known as SSVM) as an on-chain VM to execute Ethereum flavored WebAssembly (Ewasm) smart contracts."),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wasmedge"},"https://github.com/wasmedge")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/WasmEdge/WasmEdge"},"https://github.com/WasmEdge/WasmEdge")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/second-state"},"https://github.com/second-state")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ParaState/"},"https://github.com/ParaState/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ParaState/substrate-ssvm-node"},"https://github.com/ParaState/substrate-ssvm-node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ParaState/substrate-parachain-ssvm"},"https://github.com/ParaState/substrate-parachain-ssvm"))),(0,r.kt)("p",null,"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/juntao"},"https://github.com/juntao")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/CaptainVincent"},"https://github.com/CaptainVincent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tpmccallum"},"https://github.com/tpmccallum")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/yanganto"},"https://github.com/yanganto"))),(0,r.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/myuan/"},"https://www.linkedin.com/in/myuan/"))),(0,r.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,r.kt)("p",null,"The WasmEdge Runtime is a fully standard compliant WebAssembly runtime hosted by the CNCF. Please see its github repository for key features and use cases. With LLVM-based AOT support, WasmEdge is one of the highest performing WebAssembly runtime available today. "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge#performance"},"https://github.com/WasmEdge/WasmEdge#performance")),(0,r.kt)("p",null,"In the web3 ecosystem, WasmEdge is successfully adopted as an on-chain VM to execute Ethereum flavored WebAssembly (Ewasm) smart contracts on substrate-based blockchains."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ParaState/substrate-ssvm-node"},"https://github.com/ParaState/substrate-ssvm-node")),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Total Estimated Duration: 3 months"),(0,r.kt)("li",{parentName:"ul"},"Full-Time Equivalent (FTE): 2 FTEs"),(0,r.kt)("li",{parentName:"ul"},"Total Costs: $45,000 USD")),(0,r.kt)("h3",{id:"milestone-1--enable-substrate-to-run-on-wasmedge"},"Milestone 1 \u2014 Enable Substrate to run on WasmEdge"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Estimated duration: 1 month"),(0,r.kt)("li",{parentName:"ul"},"FTE: 2"),(0,r.kt)("li",{parentName:"ul"},"Costs: 15,000 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide instructions for developers on how to use our forked repo to build and run Substrate with WasmEdge as the default WASM VM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide a step-by-step guide for building and running a Substrate blockchain on WasmEdge")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"Create Docker images with all build dependencies to faciliate the build process")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,r.kt)("td",{parentName:"tr",align:null},"Article"),(0,r.kt)("td",{parentName:"tr",align:null},"Create a blog article to annouce WasmEdge integration with Substrate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Rust API"),(0,r.kt)("td",{parentName:"tr",align:null},"Create a wasmtime compatible Rust API for WasmEdge. That is because most of the existing Substrate hooks for WASM are designed for wasmtime's Rust APIs. To create a wasmtime compatible high-level API for WasmEdge will make the follow-up integration work much easier.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Host wrapper"),(0,r.kt)("td",{parentName:"tr",align:null},"Create host wrappers for WasmEdge in Substrate. Those functions are in the ",(0,r.kt)("inlineCode",{parentName:"td"},"client/executor/wasmtime")," package in the substrate source tree. We will create an alternative ",(0,r.kt)("inlineCode",{parentName:"td"},"client/executor/wasmedge")," package, and use the wasmedge executor in our fork.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Test"),(0,r.kt)("td",{parentName:"tr",align:null},"Build and test the entire Substrate project based on WasmEdge")))),(0,r.kt)("h3",{id:"milestone-2----create-docs-and-config-options-to-select-between-multiple-webassembly-runtimes"},"Milestone 2 -- Create docs and config options to select between multiple WebAssembly runtimes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Estimated duration: 1 month"),(0,r.kt)("li",{parentName:"ul"},"FTE: 2"),(0,r.kt)("li",{parentName:"ul"},"Costs: 15,000 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide instructions for developers optionally select WasmEdge as the WASM VM for Substrate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide a step-by-step guide for selecting WasmEdge and then building and running a Substrate blockchain on WasmEdge")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"Create Docker images with all build dependencies to faciliate the build process")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,r.kt)("td",{parentName:"tr",align:null},"Article"),(0,r.kt)("td",{parentName:"tr",align:null},"Create a blog article to annouce Substrate's option to use WasmEdge")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Software"),(0,r.kt)("td",{parentName:"tr",align:null},"Create configuration options to select between wasmtime and WasmEdge host wrappers. The option will allow the compiler / build system to choose between the wasmtime and wasmedge executors when building the substrate binary.")))),(0,r.kt)("h3",{id:"milestone-3----performance-benchmarks-and-analysis"},"Milestone 3 -- Performance benchmarks and analysis"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Estimated duration: 2 month"),(0,r.kt)("li",{parentName:"ul"},"FTE: 2"),(0,r.kt)("li",{parentName:"ul"},"Costs: 15,000 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide performance benchmark and profiler results")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide instructions on how to run performance benchmark tests and performance profilers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"Create Docker images with all build dependencies to run the benchmarks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,r.kt)("td",{parentName:"tr",align:null},"Article"),(0,r.kt)("td",{parentName:"tr",align:null},"Create a blog article on WasmEdge's performance in Substrate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Config"),(0,r.kt)("td",{parentName:"tr",align:null},"Make sure that AOT is enabled for WasmEdge")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Eval"),(0,r.kt)("td",{parentName:"tr",align:null},"Create performance metrics Substrate integration tests for wasmtime vs WasmEdge, as well as WasmEdge interpreter vs AOT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Eval"),(0,r.kt)("td",{parentName:"tr",align:null},"Identify performance bottlenecks in Substrate WasmEdge for future actions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"Upstream PR"),(0,r.kt)("td",{parentName:"tr",align:null},"Create and merge a PR for the Substrate project. Work with the Substrate team to make sure that the PR is up to the coding standard and testing requirements for Substrate to merge it.")))),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("p",null,"Our goal is to continuously improve WasmEdge's compatibility and performance in the Substrate environment, and hope to eventually become the default WASM runtime for Substrate."),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," Web3 Foundation Website / Past grantee"),(0,r.kt)("p",null,"As discussed, the team has extensive experience with WebAssembly runtimes. We are the maintainers of CNCF's WasmEdge project, and had successfully completed past W3F grant projects in adopting WebAssembly for on-chain smart contracts."))}u.isMDXComponent=!0}}]);