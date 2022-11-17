"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[1729],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?r.createElement(h,l(l({ref:t},c),{},{components:a})):r.createElement(h,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},11946:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(83117),n=(a(67294),a(3905));const i={},l="Ares",o={unversionedId:"Applications/ares_protocol",id:"Applications/ares_protocol",title:"Ares",description:"Proposer:* jiyilanzhou",source:"@site/docs/Applications/ares_protocol.md",sourceDirName:"Applications",slug:"/Applications/ares_protocol",permalink:"/grants-test-repository/docs/Applications/ares_protocol",draft:!1,editUrl:"https://github.com/w3f/grants-test-repository/edit/master/docs/Applications/ares_protocol.md",tags:[],version:"current",lastUpdatedBy:"Sebastian M\xfcller",lastUpdatedAt:1668007993,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Anagolay Project Idiyanale - Phase 1",permalink:"/grants-test-repository/docs/Applications/anagolay-project-idiyanale-phase-1"},next:{title:"SCALE Codec Implementation",permalink:"/grants-test-repository/docs/Applications/assemblyscript-scale-codec"}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team Website",id:"team-website",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1  \u2014 Implement ares low pallet",id:"milestone-1---implement-ares-low-pallet",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information",id:"additional-information",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ares"},"Ares"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/jiyilanzhou"},"jiyilanzhou")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Payment Address:"),"  3EDZ47i4ro1cgGqjXsyduuYyLrUesCgekw")),(0,n.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,n.kt)("p",null,"Ares is a predictive machine project based on Substrate, with the trustless and verifiable under chain real data use a decentralized approach for smart contracts, parachain or other projects in the ecosystem of the Polkadot."),(0,n.kt)("p",null,"It is a decentralized oracle network that consists of oracle pallet for parachain and validator, aggregator, reputation council pallet for Ares chain."),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Ares")," consists of parachain plug-in, validator, aggregator, reputation council, proof of fraud. If parachain use our services, it needs to integrate our oracle pallet, The result of the request passed to the caller through a callback. We scan the parachain events caller about the pallet in our chain, use rpc or websocket request via off-chain worker, Aggregators randomly selected through VRF, which aggregates data from multiple sources. and submitted data to the parachain via extrinsic. Aggregators packing parachain extrinsic and receipts  in ares chain via off-chain worker. "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/2020103111230144.jpg",alt:"img"})),(0,n.kt)("p",null,"Aggregator needs to pledge certain assets, Every time the aggregator submits a correct data, its reputation value will grow. The reputation value and pledge will be weighted, from which we choose the members of council. council can only approve and reject proof of fraud submitted by validator.\nDefault is to approve, the council does not need to work on every block, only needs to deal with disputes when validator fraud proof arise. Validator nodes can verify, if validator found the data is incorrect, submit proof of fraud to council. if council check up, ther it will reward validator and slash aggregator, its reputation will be degraded."),(0,n.kt)("p",null,"The functions of aggregator committees are similar to Babe, and reputation council are likely Grandpa which finality the correctness of the data. Most nodes can become member of aggregators committees. It only takes few tokens to staking. The validator who submit proof of fraud need pay a small fee, it protects against DOS attacks.  "),(0,n.kt)("h3",{id:"project-details"},"Project Details"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Ares")," is designed as decentralized oracle network. First of all, ",(0,n.kt)("inlineCode",{parentName:"p"},"Ares")," will provide  basic ",(0,n.kt)("inlineCode",{parentName:"p"},"ares")," pallet runtime which allows substrate built parachain/blockchain to interact with."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"define ",(0,n.kt)("inlineCode",{parentName:"li"},"ares Trait")," which contain Event, Callback."),(0,n.kt)("li",{parentName:"ul"},"define storage operator, request, result and error types"),(0,n.kt)("li",{parentName:"ul"},"request external data, contains parameters and methods for how to request them."),(0,n.kt)("li",{parentName:"ul"},"describes how to integrate into parachain."),(0,n.kt)("li",{parentName:"ul"},"Aggregator scans the extrinsic in the parachain, use off-chain worker requests the data, and submits result extrinsic to parachain."),(0,n.kt)("li",{parentName:"ul"},"Aggregator packing parachain extrinsic and receipts on ares chain."),(0,n.kt)("li",{parentName:"ul"},"Validator validate data and submit proof of fraud."),(0,n.kt)("li",{parentName:"ul"},"Council reward and slash according to proof of fraud."),(0,n.kt)("li",{parentName:"ul"},"Aggregator, Validator, Council use off-chain worker getting external data")),(0,n.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,n.kt)("p",null,"Although the Off-chain worker can do part of the oracle job, However it can't guarantee the authenticity and reliability of the data, Ares can provide randomness and correctness of data sources through multi-party data aggregation and anti-attack and auditing of data sources"),(0,n.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,n.kt)("h3",{id:"team-members"},"Team members"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Keric: 8+ years development experience, proficient in public chain and cross chain development, proficient in using go and rust, p2p network expert."),(0,n.kt)("li",{parentName:"ul"},"Eric: 20 years of experience in protocol stack formulation and development, research work related to big data and blockchain, and robot quantification experience."),(0,n.kt)("li",{parentName:"ul"},"Daniel: 11 years of work experience in IoT software development and management, familiar with contract and DAPP development."),(0,n.kt)("li",{parentName:"ul"},"Scott: More than 7 years of software development experience, proficient in /Java/Golang/node, etc. engaged in blockchain research and development, familiar with eos/eth."),(0,n.kt)("li",{parentName:"ul"},"Andy Ray: 10 years of Internet entrepreneurship experience, 5 years of blockchain industry experience, proficient in the secondary market, economic model design."),(0,n.kt)("li",{parentName:"ul"},"Fred: Over 13+ years of Embedded Network Technology Experience in multiple technological systems including Hardware networking, software networking, and server-side applications.")),(0,n.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,n.kt)("p",null,"We implemented the POW + DPOS consensus integrated with ethereum, used tendermint to provide finality in blockchain system with golang. Recently, we implemented a rust pos blockchain, it  uses vrf select validators and libp2p network. We have enough experience to solve the centralization problem of Oracle.                                                                                                                                                                                                                                           "),(0,n.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/aresprotocols/ares"},"https://github.com/aresprotocols/ares"))),(0,n.kt)("h3",{id:"team-website"},"Team Website"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.aresprotocol.io/"},"https://www.aresprotocol.io/"))),(0,n.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,n.kt)("h3",{id:"overview-1"},"Overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3 weeks"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):"),"  1.5"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Costs:")," 0.5 btc")),(0,n.kt)("h3",{id:"milestone-1---implement-ares-low-pallet"},"Milestone 1  \u2014 Implement ares low pallet"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated Duration:")," 3 weeks"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FTE:"),"  1.5"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," 0.5 btc")),(0,n.kt)("p",null,"In this milestone, We will implement ares oracle proof-of-concept, A oracle pallet for parallel chain calls."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,n.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1."),(0,n.kt)("td",{parentName:"tr",align:null},"oracle pallet"),(0,n.kt)("td",{parentName:"tr",align:null},"requested data, generated events, and callbacks to data, which implement aggregate price on chain, multi assets price and offchain work get price througth Data warehouse api, it use subsrate-node-template")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2."),(0,n.kt)("td",{parentName:"tr",align:null},"scanner"),(0,n.kt)("td",{parentName:"tr",align:null},"scanner parachain oracle request via block event, parse the specific request data\uff0cScanner is written in js")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3."),(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"data warehouse returns the correct request data use http request\uff0c Data warehouse written in java and used js provide to on chain callback")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"4."),(0,n.kt)("td",{parentName:"tr",align:null},"Testing"),(0,n.kt)("td",{parentName:"tr",align:null},"This milestone will have unit-test for pallet impemented, simulated all functions.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5."),(0,n.kt)("td",{parentName:"tr",align:null},"example for demonstration"),(0,n.kt)("td",{parentName:"tr",align:null},"Provide  parachain oracle pallet integrate example, integrate videos and the front-end into the deliveries")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"6."),(0,n.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,n.kt)("td",{parentName:"tr",align:null},"We will provide parachain integrate oracle pallet documentation and  basic code example that show how developers use the pallet")))),(0,n.kt)("h2",{id:"future-plans"},"Future Plans"),(0,n.kt)("p",null,"If basic functions have been completed, ",(0,n.kt)("inlineCode",{parentName:"p"},"Ares")," will provide decentralized pallet, including:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Multiple data source weight calculation"),(0,n.kt)("li",{parentName:"ul"},"Random aggregators using VRF "),(0,n.kt)("li",{parentName:"ul"},"Proof of fraud verify based on BFT voting"),(0,n.kt)("li",{parentName:"ul"},"Reputation council slash"),(0,n.kt)("li",{parentName:"ul"},"Aggregator staking and Validator incentive"),(0,n.kt)("li",{parentName:"ul"},"Authority management of aggregator submitted data")),(0,n.kt)("h2",{id:"additional-information"},"Additional Information"),(0,n.kt)("p",null,"We expect any developer who is interested in ",(0,n.kt)("inlineCode",{parentName:"p"},"Ares protocol")," join us and build an efficient framework."))}d.isMDXComponent=!0}}]);