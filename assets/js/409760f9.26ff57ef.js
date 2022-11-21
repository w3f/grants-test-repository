"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[5044],{25530:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var n=a(87462),i=(a(67294),a(3905));a(16758);const r={},o="SCALE Codec Implementation",l={unversionedId:"Applications/assemblyscript-scale-codec",id:"Applications/assemblyscript-scale-codec",title:"SCALE Codec Implementation",description:"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the Open Grants Program Process on how to submit a proposal.",source:"@site/docs/Applications/assemblyscript-scale-codec.md",sourceDirName:"Applications",slug:"/Applications/assemblyscript-scale-codec",permalink:"/grants/Applications/assemblyscript-scale-codec",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Ares",permalink:"/grants/Applications/ares_protocol"},next:{title:"Asylum",permalink:"/grants/Applications/asylum"}},s={},m=[{value:"Project Description \ud83d\udcc4",id:"project-description-",level:2},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Milestone 1",id:"milestone-1",level:3},{value:"Additional Information \u2795",id:"additional-information-",level:2}],p={toc:m};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"scale-codec-implementation"},"SCALE Codec Implementation"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md"},"Open Grants Program Process")," on how to submit a proposal.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/LimeChain"},"LimeChain")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:"),(0,i.kt)("br",{parentName:"li"}),"bc1q8x95fuz6t767ugkn2vnwlz3e0q2rwc4xw9ede4 (when it comes to payment, let\u2019s test out the address with a small amount first)")),(0,i.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,i.kt)("p",null,"SCALE is a lightweight codec for binary serialization and deserialization used in Substrate. Currently there are Rust, Python, Golang, C++ and JavaScript  implementations of the codec. The goal of the project is to deliver AssemblyScript implementation as a separate library."),(0,i.kt)("p",null,"The library will be required for encoding/decoding Polkadot Wasm Executor ","<",">"," Wasm Runtime blob calls and more specifically:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Wasm Runtime blob compiled from AssemblyScript parsing runtime function calls from the Wasm executor."),(0,i.kt)("li",{parentName:"ul"},"Wasm runtime blob compiled from AssemblyScript calling the Polkadot Runtime Environment API (Host API).")),(0,i.kt)("p",null,"The library is a prerequisite for an AssemblyScript framework that generates runtimes or any runtime implemented in AssemblyScript loaded into a Polkadot Host."),(0,i.kt)("p",null,"LimeChain is a blockchain-agnostic development company with a strong focus on developer tooling. We see Polkadot as an exciting technology and we hope to be able to help the developer community through various dev tools and implementations."),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Members:")," Daniel Ivanov, Lyubomir Kiprov, Christian Vesselinov"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"LinkedIn Profiles:")," ",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/daniel-k-ivanov/"},"Daniel"),", ",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/lyubomir-kiprov/"},"Lyubomir"),", ",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/chris-veselinov/"},"Christian"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Code Repos:")," ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/Daniel-K-Ivanov"},"https://github.com/Daniel-K-Ivanov"),"; ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/bakasura980"},"https://github.com/bakasura980"),"; ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/thcrnk"},"https://github.com/thcrnk"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://limechain.tech"},"https://limechain.tech"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Legal Structure:")," Legal Structure: LimeLabs Ltd., incorporated in Bulgaria, Dragan Tsankov 23A, 1113, Sofia, Bulgaria"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team's Experience:"),"\nSince 2017, LimeChain has worked on 50+ blockchain projects, including a strong track record of building developer tools for different protocols such as Ethereum, EOS, Aeternity and Corda. Some of the companies LimeChain has worked with are Celo, P&G, Raiffeisenbank, Status, Dapper Labs and Maker among others. The proposed developer team in particular also has experience with Substrate.")),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 17 days"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):")," 1.5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 1.181 BTC")),(0,i.kt)("h3",{id:"milestone-1"},"Milestone 1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 17 days")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:")," 1.5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 1.181 BTC")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Implementing the Library"),(0,i.kt)("td",{parentName:"tr",align:null},"Delivering a library that supports encoding/decoding the following types: fixed-width integers (signed and unsigned - 8, 16, 32, 64), bool, Big Int, Bool Array, Byte Array, Int Array, String Array, BigInt Array, Hash, Tuple.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Unit Tests"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide unit tests for all of the supported types.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"README file describing how to import, use and run tests for the library.")))),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("p",null,"LimeChain hopes to become an important part of the Polkadot development ecosystem, supporting the network with different developer tools and integrations. AssemblyScript implementation of the SCALE Codec would be the company\u2019s first project on Polkadot, and along with a potential AssemblyScript implementation, would drastically help our team in its onboarding with the tech stack while adding value to the developer community right away."),(0,i.kt)("p",null,"Although there are other implementations of the codec, each one of them serves different purposes. Each of these projects delivered the codec in different languages. We think that having AssemblyScript implementation of the codec will benefit the development of an AssemblyScript Runtime Generation framework."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Are there any teams who have already contributed (financially) to the project? No"),(0,i.kt)("li",{parentName:"ul"},"Have you applied for other grants so far? Not in the Polkadot ecosystem. LimeChain has received and delivered on grants from The ETH Community Fund, Maker DAO and Aeternity.")))}d.isMDXComponent=!0}}]);