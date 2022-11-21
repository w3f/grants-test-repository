"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[6461],{75878:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));a(16758);const r={},o="People Local Interactions Protocol (PLIP)",l={unversionedId:"Applications/plip",id:"Applications/plip",title:"People Local Interactions Protocol (PLIP)",description:"Team Name:* Valibre",source:"@site/docs/Applications/plip.md",sourceDirName:"Applications",slug:"/Applications/plip",permalink:"/grants/Applications/plip",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"php substrate api",permalink:"/grants/Applications/php-substrate-api"},next:{title:"Polk-Auction Website",permalink:"/grants/Applications/polk-auction"}},s={},p=[{value:"Project Overview :page_facing_up",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team :busts_in_silhouette",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status :open_book",id:"development-status-open_book",level:2},{value:"Development Roadmap :nut_and_bolt",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 testnet.valibre.network",id:"milestone-1--testnetvalibrenetwork",level:3},{value:"Milestone 2 \u2014 plip.community",id:"milestone-2--plipcommunity",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information :heavy_plus_sign",id:"additional-information-heavy_plus_sign",level:2}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"people-local-interactions-protocol-plip"},"People Local Interactions Protocol (PLIP)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," Valibre"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 0x9D418c51B8B417A7ac9299aFcb736Bb6aE6018B7, (DAI)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Status:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/pull/756"},"Terminated"))),(0,i.kt)("h2",{id:"project-overview-page_facing_up"},"Project Overview :page_facing_up"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The People Local Interactions Protocol (PLIP) defines how peer-to-peer interactions like ",(0,i.kt)("strong",{parentName:"p"},"decentralized on/off ramps")," are brokered within community driven micro-economies with friendly, easy to use technologies."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Overview:")," PLIP is the defining feature of the Valibre, the harmonious convergence of blockchain infrastructure that pools crypto and fiat resources facilitating p2p transactions without centralized 3rd party support. It is an ecosystem of decentralized technologies that allow new and existing applications to be deployed in a decentralized and familiar setting. PLIP distingusihes the Valibre Network (VLN) from existing liquidity pools in the DeFi space because of its purpose built Substrate-based chain with built-in escrow functionality that locks in on-chain assets until fiat transactions are successfully brokered. PLIP reaches users and handles off-chain interections through end-to-end Matrix chat rooms with an integrated wallet. PLIP enables projects across various use cases to deploy blockchain functionality while maintaing a simple UI and provides an abstracted entry point to the entire world of blockchain and, subsequently, any crypto asset.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Relevance to the Ecosystem:")," Built on Substrate, PLIP and the VLN provide a bridge to the fiat world, abstracting the complexities of the ecosystem to onboard users across the spectrum of tech savvy. We are enabling projects across different use cases (Fintech, E-Commerce, etc.) to access the Polkadot/Kusama ecosystems by deploying legacy UI applications powered by our independently developed catalog of libraries and APIs (e.g. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/valibre-org/sube"},"Sube")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/valibre-org/valor"},"Valor"),".) Through this unique infrastructure, PLIP is the window into the blockcahin for countless projects and communities.  ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Our Drive:")," PLIP facilitates trustless p2p transactions for communities representing any background, language, or mission. We're building something that is both simple and familiar to the average user. That's why PLIP is our mission: to onboard any user, with varied technical prowess, to the blockchain at unprecendented scale."))),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1329925/126496416-164549c5-b8d2-4208-ae91-4792654716d9.png",alt:"PLIP - Architecture"})),(0,i.kt)("p",null,'The "PLIP Stack" is a series of libraries and tools built with Rust focused on performance, lightweightness and portability, with special focus on being WebAssembly compatible to run on the Web. It\'s comprised of:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Valibre Open Runtime (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/valibre-org/valor"},(0,i.kt)("strong",{parentName:"a"},"Valor")),") orchestrates all interactions on our protocol.\nIt's a plugin-based system that allows creating HTTP APIs that can run in a multitude of environments including web browsers when compilied to WebAssembly."),(0,i.kt)("li",{parentName:"ul"},"Among the many plugins that can run on top of Valor, we will provide a ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/valibre-org/sube"},(0,i.kt)("strong",{parentName:"a"},"Sube"))," plugin that allows\napplications and other user defined plugins to talk easily (via HTTP) with the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/valibre-org/vln-node"},"Valibre Network"),"(or any Substrate chain)."),(0,i.kt)("li",{parentName:"ul"},"As part of our Substrate-Meets-Matrix initiative (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/valibre-org/summa"},(0,i.kt)("strong",{parentName:"a"},"Summa")),") we would also provide a ",(0,i.kt)("strong",{parentName:"li"},"Summa wallet"),"(as backend of our ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/valibre-org/libwallet"},"libwallet"),") that abstracts the need to deal with blockchain addresses or private keys directly, a logged-in Matrix user can have a blockchain account automatically and use it in chat rooms where p2p interactions take place."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/valibre-org/vln-node/tree/master/pallets/escrow"},"Escrow")," and ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/valibre-org/vln-node/tree/master/pallets/rate_provider"},"Rates")," pallets of our runtime provide the underlying security and concensus needed for the p2p transactions to take place.")),(0,i.kt)("p",null,"Each of the components of the PLIP family form a cohesive ecosystem that allows developers to create or port existing applications without the need\nto relearn new technology stacks and paradigms. Users have the flexibility to develop centralized back-end systems and later opt-in for ",(0,i.kt)("strong",{parentName:"p"},"progressive decentralization")," to migrate said systems to run fully decentralized on the end-user device."),(0,i.kt)("p",null,"Other notable elements of PLIP:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PLIP does not have an independent tokenomic model-- we are not creating our own currency."),(0,i.kt)("li",{parentName:"ul"},"This project is not token swap protocol, but instead enables p2p fiat to crypto on/off boarding in a secure, decentralized infrastructure."),(0,i.kt)("li",{parentName:"ul"},"PLIP is not an application on its own (like LocalBitcions), instead it is an infrastructure for decentralized communities to easily utilize crypto resources.")),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,'PLIP provides tools and infrastructure for developers to join us in building out the bridge to the "real world." We see our protocol design as a way for developers to seamlessly onboard new users to the Kusama and Polkadot ecosystems by simply connecting a traditionally developed UI to the blockchain using our custom API toolkits.  '),(0,i.kt)("p",null,"We believe that in order for developers to join the Web 3.0 revolution. Rather than having developers learn new coding languages and other technical intricacies compeltely from scratch, we allow them to take applications with familiar technology stack and instead provide HTTP-compatible APIs that are easy to integrate with existing applications. Valibre enables dApp development by eliminating steep knowldege barriers to entry, meeting the need to create broader, simpler access to the blockchain."),(0,i.kt)("p",null,"We empower exisiting projects to progressively decentralized without completely overwriting legacy products, while also solving for usability concerns that come with decentralizationg by abstracting the complexity of blockchain elements like mnemonic and private keys."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Similar Projects")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wificoin.com/"},"Wifi Coin")," is a Polkadot ecosystem project aiming to provide fiat-to-crypto on ramps. Our project enables stablecoin swaps as opposed to Wifi Coin's unique token, which requires that users understand how to purchase crypto for use of their platform. We found this project under existing Web3 grant applicaitons ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/w3f/General-Grants-Program/blob/master/grants/accepted_grant_applications.md#surfing_woman-wave-8---fourth-quarter-2020"},"Q4 2020"),", and we have reached out to them in attempt to network and potentially collaborate. We didn't receive a response and are unclear where they are progressing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://encointer.org"},"Encointer")," is a decentralized UBI/digital identity protocol. Similar to Valibre, they emphasisze local communitiy development through unique local monetary systems. However, Encointer requires extensive educaiton efforts for the users of their protocol as opposed to abstracting the complexity of decentralized technology as Valibre achieves through Sube and Valor.")),(0,i.kt)("h2",{id:"team-busts_in_silhouette"},"Team :busts_in_silhouette"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Team Lead")," Daniel Olano",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Runtime Developer")," Stanly Johnson",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Communications & Business Development")," Samantha Robertson"),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Daniel Olano"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:daniel@valibre.org"},"daniel@valibre.org"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"mailto:stanly@valibre.org"},"stanly@valibre.org")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"mailto:samantha@valibre.org"},"samantha@valibre.org")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("a",{parentName:"li",href:"https://valibre.org"},"https://valibre.org"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("p",null,"We are a registered LLC in the United States."),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Daniel Olano")," is a Rust/Substrate Guru, and grinding full time to bring his brain child, Valibre, into fruition. He is a Colombian living in Berlin. He was first inspired to create Valibre to facilitate seamless fiat to crypto onboarding for users with varied financial literacy to combat the plague of hyperinflation across Latin America, but is excited to expand to failing fiat economies worldwide. He is currently facilitating the first Rust developer workshop in Spanish to increase visibility of Substrate and Polkadot to developers across LATAM."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Stanly Johnson")," is based in Bangalore, India and is a seasoned software engineer across the stack of programming languages underpinning Web3 technologies, including Rust, Python, and Solidity. He is currently working as a runtime developer part-time with Valibre specializing in cross-chain transfers and escrow. Stanly\u2019s passion for distributed systems stems from the opportunity it provides to reach everyone by eliminating systemic barriers."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Samantha Robertson")," is a globetrotter with expertise across Business Development, Product, and Strategy. Samantha desended into the cypherpunk realm after working in product at an AI company, becoming dismayed by the necessary data extraction tactics to train AI models. Samantha is most excited to help build Valibre because she believes that it has the potential to onboard thousands of users to the blockchain without extensive education on technical intricacies. Samantha became a Polkadot stan when she grew fed up with gas fees and MEV. She has vast experience leading international teams and beleives that Web 3.0 technologies represent the future of multilateral cooperation.  "),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/valibre-org/"},"https://github.com/valibre-org/"))),(0,i.kt)("p",null,"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Daniel Olano:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/olanod"},"https://github.com/olanod")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Stanly Johnson:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/stanly-johnson"},"https://github.com/stanly-johnson"))),(0,i.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Stanly Johnson:")," ",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/stanlyj/"},"https://www.linkedin.com/in/stanlyj/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Samantha Robertson")," ",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/samantharobertsonreal/"},"https://www.linkedin.com/in/samantharobertsonreal/"))),(0,i.kt)("h2",{id:"development-status-open_book"},"Development Status :open_book"),(0,i.kt)("p",null,"As part of the ",(0,i.kt)("strong",{parentName:"p"},"Substrate builders program")," we have completed the MVP implementation of the escrow and local rates pallet of the VLN parachain."),(0,i.kt)("h2",{id:"development-roadmap-nut_and_bolt"},"Development Roadmap :nut_and_bolt"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("p",null,"We plan to have a public testnet of the Valibre Network (VLN) with a dedicated Matrix server for the PLIP community that can showcase the\nusage of the escrow system through a modified ",(0,i.kt)("em",{parentName:"p"},"element.io")," chat UI. We will also revamp our website and documentation to educate developers on\nhow to develop applications with the Valibre Open Runtime."),(0,i.kt)("h3",{id:"milestone-1--testnetvalibrenetwork"},"Milestone 1 \u2014 testnet.valibre.network"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 4 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 10,000 DAI")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT / Unlicense")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,i.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can spin up our local testnet and send test transactions, which will show how the new functionality works.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a docker-compose file that set-ups the local testnet of the parachain with everything needed to test all the functionality delivered with this milestone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Escrow pallet"),(0,i.kt)("td",{parentName:"tr",align:null},"Feature complete and permissionless version of the ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/valibre-org/vln-node/tree/master/pallets/escrow"},"Escrow pallet")," ready for production use(economically secure and are properly weighted)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Rates pallet"),(0,i.kt)("td",{parentName:"tr",align:null},"Feature complete and permissionless version of the ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/valibre-org/vln-node/tree/master/pallets/rate_provider"},"Rates pallet")," ready for production use(economically secure and are properly weighted)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"4."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"testnet.valibre.network")),(0,i.kt)("td",{parentName:"tr",align:null},"Runtime modules will be available for community testing in our public testnet")))),(0,i.kt)("h3",{id:"milestone-2--plipcommunity"},"Milestone 2 \u2014 plip.community"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 6 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 15,000 DAI")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT / Unlicense")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,i.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can spin up the custom element.io interface that connects to a local testnet.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a docker-compose file that set-ups the local testnet of the parachain with everything needed to test all the functionality delivered with this milestone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Valor"),(0,i.kt)("td",{parentName:"tr",align:null},"Implement the ability to compile Valor to WebAssembly so the wallet API can run in the Web")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Summa wallet"),(0,i.kt)("td",{parentName:"tr",align:null},"Create the initial version of the Summa plugin that can derive a logged-in user blockchain address from its Matrix device keys")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Developer docs"),(0,i.kt)("td",{parentName:"tr",align:null},"Additional to the standard inline documentation we would provide a more in-depth overview of the PLIP stack at ",(0,i.kt)("inlineCode",{parentName:"td"},"dev.plip.community")," with a guide on how to develop and run custom Valor plugins as HTTP APIs that can talk to the blockchain.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"4."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"plip.community")),(0,i.kt)("td",{parentName:"tr",align:null},"Valor and the wallet will be available for testing under ",(0,i.kt)("inlineCode",{parentName:"td"},"plip.community")," that would showcase a custom version of the element.io chat with our tools running on top")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,'Valibre\'s primary ambition is to be come the decentralized WeChat, a "super app" that promotes community engagement and provides access to any multilde of services and marketplaces powered by a decentralized infrastruture (PLIP.) We plan to execute this in two distinct ways over the short and long term:'),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"Short Term"))),(0,i.kt)("p",null,"In conjunction with the development strategy explained above, we will aggressively ramp up community engagement efforts by executing a social media strategy across Telegram, Element, Medium, and Twitter. We have already been approached by two prospective partners to use our technology as the backend to power their decentralized communities. As such, we will build communities across social media and plan to promote a basic UI demo by the end of Q3 2021. Additionally, we have already successfully submitted a proposal to the Kusama Tresury and plan to submit two more proposals before the end of the year as a means to sustain our development as well as increase our visibility in the Kusama and Polkadot ecosystems.  "),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"Long Term"))),(0,i.kt)("p",null,"Alongisde the promotion of our project, our team is working to define a buisness development strategy that aligns with both our resource constraints as well as the needs of the broader ecosystem. This will unfold as either:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Applying to become a Common Good Parachain on Kusama: We believe that our protocol aligns with the goals other projects in the ecosystem also vying for a CG parachain slot, but our capacity to abstract the complexity of crypoteconomics is a distinct feature. It is, therefore, an opportunity to provide public utility to the ecosystem."),(0,i.kt)("li",{parentName:"ul"},"Launching a Parachain/Parathread on Polkadot: With a unique tokenomic model, we also believe that Valibre can invite broader appeal and attract emerging projects and use cases beyond our current percieved scope. This also has obvious incentvies to attract VC investment to our protocol.")),(0,i.kt)("h2",{id:"additional-information-heavy_plus_sign"},"Additional Information :heavy_plus_sign"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," Web3 Foundation Website, the Substrate Builder's Program, as well as a networking meeting with the Acala team."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Previous Funding and Support")),(0,i.kt)("p",null,"Valibre is the brainchild of Daniel Olano, and ultimately attracted the attention of Valiu, a stablecoin payments platform for users in Venezeula. Valibre was temporarily contracted by Valiu while also remaining an independent organization. We have created the basic foundation of PLIP with the required functionality of Valiu (remittances) as the basis of our inspiration, but now we are upgrading the foundations of PLIP to accomdate a broadend scope of use cases. This grant application is our first attempt seeking indepenent funding of any kind."))}m.isMDXComponent=!0}}]);