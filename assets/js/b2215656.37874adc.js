"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[8449],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4964:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(83117),r=(a(67294),a(3905));const i={},l="Canyon Network",o={unversionedId:"Applications/canyon_network",id:"Applications/canyon_network",title:"Canyon Network",description:"- Team Name: Canyon Labs",source:"@site/docs/Applications/canyon_network.md",sourceDirName:"Applications",slug:"/Applications/canyon_network",permalink:"/grants-test-repository/docs/Applications/canyon_network",draft:!1,editUrl:"https://github.com/w3f/grants-test-repository/edit/master/docs/Applications/canyon_network.md",tags:[],version:"current",lastUpdatedBy:"Sebastian M\xfcller",lastUpdatedAt:1668007993,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Candle Auctions on Ink!",permalink:"/grants-test-repository/docs/Applications/candle_auction_ink"},next:{title:"Data Store Pallet",permalink:"/grants-test-repository/docs/Applications/ces_data_store"}},s={},p=[{value:"Project Overview :page_facing_up",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team :busts_in_silhouette",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status :open_book",id:"development-status-open_book",level:2},{value:"Development Roadmap :nut_and_bolt",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement the PoA consensus POC",id:"milestone-1--implement-the-poa-consensus-poc",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information :heavy_plus_sign",id:"additional-information-heavy_plus_sign",level:2}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"canyon-network"},"Canyon Network"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," Canyon Labs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," 0x009643f61C7cbc91404aE77Fe65542D098B822d1 (DAI)")),(0,r.kt)("h2",{id:"project-overview-page_facing_up"},"Project Overview :page_facing_up"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Canyon is designed to be a permanent storage network built on Substrate, which records the hashes of files on-chain and stores the files off-chain. By blending PoS and a probabilistic proof-of-storage scheme inspired by Arweave, Canyon greatly reduces the barriers to entry for miners, who are incentivized to store as much data as possible for the rewards. Another focus of canyon is also to build a truly useful data sharing system, providing the high availability of data access in the protocol level."),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("p",null,"This grant mainly concentrates on the consensus part of canyon network, specifically the PoA consensus will be implemented. Aside from the core consensus algorithm, some indispensable basic components/tools will be built at the same time. Refer to the consensus section of ",(0,r.kt)("a",{parentName:"p",href:"https://canyon-network.io/canyon-white-paper/canyon_network.pdf"},"white paper")," for more information. We'll also keep updating the technical details in the paper when necessary once more progress is made."),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("p",null,"There is no doubt that the infrastructure, providing a secure, highly available, low-cost, and easy-to-use decentralized data access service, will be an essential part of Web3.0 applications. Canyon network is created in such a background and tries to mitigate the known problems in the existing decentralized platforms, with a principle of lightweight storage consensus and highly usable protocol level data retrieval mechanism in mind."),(0,r.kt)("h2",{id:"team-busts_in_silhouette"},"Team :busts_in_silhouette"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name of team leader: Liu-Cheng Xu")),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Liu-Cheng Xu"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"li",href:"mailto:xuliuchengxlc@gmail.com"},"xuliuchengxlc@gmail.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Website:")," ",(0,r.kt)("a",{parentName:"li",href:"https://canyon-network.io"},"https://canyon-network.io"))),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Address:")," 3 FRASER STREET #05-25, DUO TOWER, SINGAPORE"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Canyon Labs PTE. LTD.")),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Liu-Cheng Xu",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"He has been working as a core developer of several projects in the blockchain field for years."),(0,r.kt)("li",{parentName:"ul"},"He is the core developer as well as the tech lead of ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/chainx-org/ChainX"},"ChainX"),"."),(0,r.kt)("li",{parentName:"ul"},"He was the early core developer of ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Bytom/bytom"},"Bytom"),".")))),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/canyon-network"},"https://github.com/canyon-network")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/canyon-network/canyon"},"https://github.com/canyon-network/canyon")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/canyon-network/canyon-cli"},"https://github.com/canyon-network/canyon-cli"))),(0,r.kt)("p",null,"The GitHub accounts of all team members:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/liuchengxu"},"https://github.com/liuchengxu"))),(0,r.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/liucheng-xu-2a639b116/"},"https://www.linkedin.com/in/liucheng-xu-2a639b116/"))),(0,r.kt)("h2",{id:"development-status-open_book"},"Development Status :open_book"),(0,r.kt)("p",null,"Currently, we already have a skeleton substrate ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/canyon-network/canyon"},"canyon")," and the Rust CLI ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/canyon-network/canyon-cli"},"canyon-cli")," to interact with the chain."),(0,r.kt)("h2",{id:"development-roadmap-nut_and_bolt"},"Development Roadmap :nut_and_bolt"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 1.5 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):")," 1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," 15,000 USD")),(0,r.kt)("h3",{id:"milestone-1--implement-the-poa-consensus-poc"},"Milestone 1 \u2014 Implement the PoA consensus POC"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 1.5 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:")," 1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 15,000 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"GPLv3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,r.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,r.kt)("td",{parentName:"tr",align:null},"Article"),(0,r.kt)("td",{parentName:"tr",align:null},"We will publish an ",(0,r.kt)("strong",{parentName:"td"},"article")," that explains the implementaion details of PoA consensus. We will update our paper with more SPoRA technical details and analysis.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Node: ",(0,r.kt)("inlineCode",{parentName:"td"},"cc-rpc")),(0,r.kt)("td",{parentName:"tr",align:null},"We will create a crate that will provides two RPCs: ",(0,r.kt)("inlineCode",{parentName:"td"},"permastore_submit")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"permastore_retrieve")," for storing the data(<=10MiB) respectively")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Node: ",(0,r.kt)("inlineCode",{parentName:"td"},"cc-database")),(0,r.kt)("td",{parentName:"tr",align:null},"We will create a crate that will provide the feature of persistent transaction data storage on the top of offchain storage.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Node: ",(0,r.kt)("inlineCode",{parentName:"td"},"cc-consensus-poa")),(0,r.kt)("td",{parentName:"tr",align:null},"We will create a crate that will implement the core algorithm of PoA illustrated in the white paper. This crate will also implement the function of inherent data provider to inject a ",(0,r.kt)("inlineCode",{parentName:"td"},"DigestItem::Seal")," entry providing the proof of access into the block header. We will verify the ",(0,r.kt)("inlineCode",{parentName:"td"},"DigesteItem::Seal(PoA)")," item in the block header by wrapping a poa import queue component into the current babe block import.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"Node: ",(0,r.kt)("inlineCode",{parentName:"td"},"pallet-poa")),(0,r.kt)("td",{parentName:"tr",align:null},"We will create a pallet that will implement ",(0,r.kt)("inlineCode",{parentName:"td"},"ProvideInherent")," to make use of the inherent data created in step 3, create an inherent extrinsic ",(0,r.kt)("inlineCode",{parentName:"td"},"update_storage_capacity")," recording the storage capacity of block author on-chain.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"5."),(0,r.kt)("td",{parentName:"tr",align:null},"Rust CLI: ",(0,r.kt)("inlineCode",{parentName:"td"},"submit")),(0,r.kt)("td",{parentName:"tr",align:null},"We will extend canyon-cli by adding two new commands: ",(0,r.kt)("inlineCode",{parentName:"td"},"submit")," to store the data from CLI which calls ",(0,r.kt)("inlineCode",{parentName:"td"},"permastore_submit")," internally, ",(0,r.kt)("inlineCode",{parentName:"td"},"submit-and-store")," will firstly call ",(0,r.kt)("inlineCode",{parentName:"td"},"submit")," and send the extrinsic ",(0,r.kt)("inlineCode",{parentName:"td"},"permastore::store")," to actually store the data onto the network.")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cc-rpc")," RPCs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"permastore_submit")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fn submit(value: Bytes) -> Result<H256>")),(0,r.kt)("li",{parentName:"ul"},"user can send arbitray data bytes(<=10MiB) to the node, the chunk root will be returned once stored successfully."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"permastore_retrieve")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fn retrieve(key: Bytes) -> Result<Option<Bytes>>")),(0,r.kt)("li",{parentName:"ul"},"user can retrieve the data(<=10MiB) directly using this PRC, the key is the chunk root of the data.")))),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("p",null,"The short term plans:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Implement the pricing strategy for the ",(0,r.kt)("inlineCode",{parentName:"li"},"store")," transaction in the context of paying once for the perpetual storage."),(0,r.kt)("li",{parentName:"ul"},"Support uploading/retrieving data chunks for large files(>10MiB)."),(0,r.kt)("li",{parentName:"ul"},"Implement transaction data sync between the multiple nodes."),(0,r.kt)("li",{parentName:"ul"},"A comprehensive design for Staking system on the top of NPOS, taking the factor of validator that also behaves a storage service provider into account."),(0,r.kt)("li",{parentName:"ul"},"Improve and audit the code to make it production-ready."),(0,r.kt)("li",{parentName:"ul"},"Build client tools for storing data onto the network easily, especially the web UI."),(0,r.kt)("li",{parentName:"ul"},"Build a network data explorer that shows the distribution of data in network nodes.")),(0,r.kt)("p",null,"The long term plans:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Do more researches and develop a more effective data sharing mechanism, rendering canyon network a highly useable data retrieval platform."),(0,r.kt)("li",{parentName:"ul"},"Foster more web3.0 applications using the decentralized storage infrastructure provided by canyon network.")),(0,r.kt)("h2",{id:"additional-information-heavy_plus_sign"},"Additional Information :heavy_plus_sign"),(0,r.kt)("p",null,"The earlier successful W3F grant name is ",(0,r.kt)("inlineCode",{parentName:"p"},"Canyon Network"),", which is mainly about the early research problems on the decentralized storage network and can be considered the starting point of works afterward."))}m.isMDXComponent=!0}}]);