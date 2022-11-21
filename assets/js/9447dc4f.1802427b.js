"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[1311],{86980:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));a(16758);const l={},o="DEIP IP Management/Governance Module",r={unversionedId:"Applications/deip",id:"Applications/deip",title:"DEIP IP Management/Governance Module",description:"Proposer:* aliakseikulik",source:"@site/docs/Applications/deip.md",sourceDirName:"Applications",slug:"/Applications/deip",permalink:"/grants/Applications/deip",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Deeper Chain",permalink:"/grants/Applications/deeper_network"},next:{title:"Delmonicos",permalink:"/grants/Applications/delmonicos"}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Integration",id:"integration",level:4},{value:"Motivation",id:"motivation",level:4},{value:"Project Details",id:"project-details",level:3},{value:"DEIP IP Management/Governance (IPMG) Module",id:"deip-ip-managementgovernance-ipmg-module",level:4},{value:"Technology stack",id:"technology-stack",level:4},{value:"PoC/MVP",id:"pocmvp",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 Implement IP Management/Governance Module",id:"milestone-1-implement-ip-managementgovernance-module",level:3},{value:"Milestone 2 Implement Web-base UI (Human Capital Tokeization Use-Case (Vedai))",id:"milestone-2-implement-web-base-ui-human-capital-tokeization-use-case-vedai",level:3},{value:"Use-case description",id:"use-case-description",level:4},{value:"Future Plans",id:"future-plans",level:2},{value:"IP Tokenization (IPT) module",id:"ip-tokenization-ipt-module",level:4},{value:"IP Financing (IPF) module",id:"ip-financing-ipf-module",level:4},{value:"IP Licensing (IPL) module",id:"ip-licensing-ipl-module",level:4},{value:"IP Exchange (IPE) module",id:"ip-exchange-ipe-module",level:4},{value:"Additional Information \u2795",id:"additional-information-",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deip-ip-managementgovernance-module"},"DEIP IP Management/Governance Module"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/aliakseikulik"},"aliakseikulik")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," bc1q6dnhvxt93rtdalrtgezzwtsn2krglktv68e7nr"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Status:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/pull/130#issuecomment-1168471336"},"Terminated"))),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"DEIP builds an IP assets management platform which allows discovering, evaluation, and exchange of IP assets on the blockchain. It can be applied to any type of IP assets. The platform implements registration of IP assets on the blockchain, tokenization of IP assets, and governance of IP assets. With such infrastructure, DEIP becomes a foundation for DeFI and DAO around IP assets. In the future, DEIP will also provide a no-code/low code SDK to build custom Dapps for specific IP assets management cases (patents, art, movies, technologies, etc.)."),(0,i.kt)("h4",{id:"integration"},"Integration"),(0,i.kt)("p",null,"DEIP is a Polkadot Parachain built on Substrate 2.0 Framework and designed specifically for IP governance, tokenization, and exchange. We see integration with Polkadot ecosystem as an important step towards a truly decentralized way to govern and exhange tokenized IP assets."),(0,i.kt)("h4",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"DEIP team has been building a solutions for tokenization and exhange of IP assets since 2017. We have a vision of a more innovative world where individuals and companies are able to push their innovations to market faster and with less expenses."),(0,i.kt)("p",null,"We see Polkadot as a the best ecosystem for us to join. We believe that our protocol will be useful for other companies in the Polkadot ecosystem and even could drive adoption of both Polkadot and DEIP solutions."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("h4",{id:"deip-ip-managementgovernance-ipmg-module"},"DEIP IP Management/Governance (IPMG) Module"),(0,i.kt)("p",null,"IPMG is a core module for managing technology assets, and assessment and evaluation of IP assets. It enables a collaborative approach in the creation and governance of IP assets via working groups as DAOs, advanced access control & sharing capabilities with Proof of Share. Furthermore, the IPMG module enables a collaborative assessment and evaluation of IP assets via a Decentralized Assessment System that allows to crowdsource expertise from the network. Working groups are managed as DAOs via specific smart-contracts that create delayed transactions with multi-sig to be executed."),(0,i.kt)("p",null,"Within the scope of this grant we will implement a parachain and web-based UI with basic functionality for the management of working groups via DAOs, and governance and registration of IP on the blockchain. Core features to be implemented during this phase:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Management of working groups (creation, membership management, decision-making mechanisms (voting));"),(0,i.kt)("li",{parentName:"ul"},"Creation of project(s);"),(0,i.kt)("li",{parentName:"ul"},"Creation of IP asset(s) within a project;"),(0,i.kt)("li",{parentName:"ul"},"Registration of IP asset(s) ownership on the blockchain with certification (a digital certificate that embeds a signature of IP asset creator, creation timestamp and hash of the certified IP asset);"),(0,i.kt)("li",{parentName:"ul"},"Access control (with Proof of Share);"),(0,i.kt)("li",{parentName:"ul"},"Ownership validation tool (a web-based tool used to verify the owner/creator of IP asset and creation timestamp using the provided certification data such as hash of IP asset or certified IP asset file);")),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/13851716/99986481-47698300-2dc0-11eb-8523-68f03d1a6b2c.png",width:"480px"}),(0,i.kt)("h4",{id:"technology-stack"},"Technology stack"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Blockchain: Substrate + C++/Rust"),(0,i.kt)("li",{parentName:"ul"},"Backend: Node.js + MongoDb"),(0,i.kt)("li",{parentName:"ul"},"Frontend: Vue.js")),(0,i.kt)("h4",{id:"pocmvp"},"PoC/MVP"),(0,i.kt)("p",null,"Live demo of the platform is available at ",(0,i.kt)("a",{parentName:"p",href:"https://demo.deip.world"},"https://demo.deip.world")),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"As far as our team knows there are no other projects working on IP governance, tokenization or exhange solitions within the Polkadot ecosystem."),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Yahor Tsaryk - CTO, Project Lead, Blockchain Developer"),(0,i.kt)("li",{parentName:"ul"},"Alex Shkor - Product director, Blockchain Architect"),(0,i.kt)("li",{parentName:"ul"},"Alexey Kulik - System Architect"),(0,i.kt)("li",{parentName:"ul"},"Euheny Bondarovich - Full-stack Developer")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Alexey Kulik"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:alexey.kulik@deip.world"},"alexey.kulik@deip.world")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("a",{parentName:"li",href:"https://deip.world"},"https://deip.world"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," DEIPWORLD INC.")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Yahor Tsaryk")),(0,i.kt)("p",null,"More than 7 years of experience\nProfessional in front-end and backend development, Big Data and distributed systems. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Alex Shkor")," "),(0,i.kt)("p",null,"An expert in blockchain architectures, crypto economies modeling and has more than 10 years of experience in designing distributed systems. He held executive positions in Paralect.com. Alex is thinktank member and expert at Blockchain for Science, and public speaker at various events (presentations in Vienna (Scientific Publishing on the Blockchain), Zurich (CRYPTSCIENCE2018), ETH Zurich). Author of articles about the distributed system, especially CQRS and Event Sourcing."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Alexey Kulik")),(0,i.kt)("p",null,"Expert in software architectures and blockchain with 10 years of hands-on experience. Speaker on blockchain/DLT topics and lecturer at Belarusian National Technical University. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Euheny Bondarovich")),(0,i.kt)("p",null,"Full-stack developer since 2004."),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("p",null,"The existing code is not fully open-sourced at the moment. DEIP team is fully commited to open-source the code and protocol in early 2021. We will provide access to our current GitLab repositories upon request from Polkadot team. ",(0,i.kt)("strong",{parentName:"p"},"All developments within the Polkadot Open Grants Program will be open-sourced from day one on GitHub"),"."),(0,i.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/yahor-tsaryk-92032a68/"},"Yahor Tsaryk")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/alexshkor/"},"Alex Shkor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/alexeykulik/"},"Alexey Kulik")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/euheny/"},"Euheny Bondarovich"))),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 2 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):"),"  4.5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 1.21 BTC")),(0,i.kt)("h3",{id:"milestone-1-implement-ip-managementgovernance-module"},"Milestone 1 Implement IP Management/Governance Module"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 2 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  3.5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 0.94 BTC")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation describing the DEIP protocol and basic workflows implemented in the IPMG module.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Complete test-suite with acceptable unit-test coverage, and instructions how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"DEIP will provide a Docker file to start up a node for testing the functionality.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Basic working group management (DAO)"),(0,i.kt)("td",{parentName:"tr",align:null},"We need some way to minimally manage organizations because assets are owned by organization initially. We will implement a minimal needed governance operations for IP assets, but will also implement an adapter which will allow to connect DAO pallets in the future. \u0421++/Rust")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Project and IP management"),(0,i.kt)("td",{parentName:"tr",align:null},"Create project, edit project, create IP asset within project. C++/Rust")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"IP registration"),(0,i.kt)("td",{parentName:"tr",align:null},"Register (timestamp) a fact of creation and/or ownership of specific IP asset on the blockchain. C++/Rust")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"Access control"),(0,i.kt)("td",{parentName:"tr",align:null},"Manage access permissions to specific IP asset with unique Proof of Share entries that confirm a specific user was granted access to an asset. C++/Rust")))),(0,i.kt)("h3",{id:"milestone-2-implement-web-base-ui-human-capital-tokeization-use-case-vedai"},"Milestone 2 Implement Web-base UI (Human Capital Tokeization Use-Case (Vedai))"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 2 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Completion:")," End of January 2022"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 11000 USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"User stories describing the use-case features and documentation with details on application stucture and DEIP modules used to built it.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Testing guide on how to test functionality (described in user stories provided in 0b) of the web application delivered.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"Docker file to run both test node and Web-base UI for testing the functionality delivered within milestone #2.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"DEIP will publish an article to explain the purpose, applications and functionality of the application implemented in the scope of this milestone. Article will be published on DEIP blog (Medium) as well as it will be shared in DEIP media channels (e.g. official Telegram channel with 20k members, Twitter, Facebook)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Web-based UI"),(0,i.kt)("td",{parentName:"tr",align:null},"Manage working groups (DAOs), project management, IP asset creation and registration (tokenized Income Share Agreements). Vue.js & Node.js + MongoDb for web-based app backend")))),(0,i.kt)("h4",{id:"use-case-description"},"Use-case description"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://vedai.org"},"Vedai")," is an investment platform that enables companies and individuals to invest into coding bootcamp Income Share Agreement (ISA) programs and receive a share of the bootcamp profits in ISA returns. This novel investment mechanism allows to align incentives for all participants of the educational market and advance the development of global human capital."),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,"We are planning to continuusly evolve the project adding new modules and make a first decentralized exchnage for IP assets. "),(0,i.kt)("h4",{id:"ip-tokenization-ipt-module"},"IP Tokenization (IPT) module"),(0,i.kt)("p",null,"IPT module enables securitization and tokenization of IP assets. It introduces advanced mechanics for the management of IP ownership, such as the distribution of shares of IP, co-ownership, and royalties distribution via smart-contracts."),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/13851716/100002424-966de300-2dd5-11eb-9b84-f7b1e0a51b4f.png",width:"480px"}),(0,i.kt)("h4",{id:"ip-financing-ipf-module"},"IP Financing (IPF) module"),(0,i.kt)("p",null,"IPF module provides various models of funding and financing for projects that produce IP assets. Funding models include (but not limited to): crowd investing, private investing, grants, open innovation (OI) challenges."),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/13851716/100002434-98d03d00-2dd5-11eb-8c1b-33b5403f81c3.png",width:"480px"}),(0,i.kt)("h4",{id:"ip-licensing-ipl-module"},"IP Licensing (IPL) module"),(0,i.kt)("p",null,"IPL module enables the licensing of IP assets. Allows tracking of all licensing transactions and provides evidence of licensing.\nVarious licensing agreements, instant licensing, proof of licensing, licensing transactions overview."),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/13851716/100002436-9968d380-2dd5-11eb-8c68-74644984dfef.png",width:"480px"}),(0,i.kt)("h4",{id:"ip-exchange-ipe-module"},"IP Exchange (IPE) module"),(0,i.kt)("p",null,"IPE module enables the exchange of IP assets. Any IP asset can be exchanged for any other IP asset on the platform, as well as it can be exchanged for various crypto assets (e.g. DOT, ETH, or BTC). "),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/13851716/100002431-9837a680-2dd5-11eb-9046-4800f8031f59.png",width:"480px"}),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"What work has been done so far?"))),(0,i.kt)("p",null,"We already have a working prototype and pilots."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Are there are any teams who have already contributed (financially) to the project?"))),(0,i.kt)("p",null,"No"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Have you applied for other grants so far?"))),(0,i.kt)("p",null,"We have not applied for any other grants with this exact project. But we have applied for multiple grants related to the application of our Decentralized Assessment System (a system we designed for crowdsourcing of domain expertise to assess various IP assets). We are currently implementing pilots as part of Blockchers program, as well as part of EOSC Digital Innovation Hub."))}m.isMDXComponent=!0}}]);