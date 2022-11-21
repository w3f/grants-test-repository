"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[6269],{31672:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));a(16758);const r={},l="AdMeta",o={unversionedId:"Applications/AdMeta",id:"Applications/AdMeta",title:"AdMeta",description:"- Team Name: AdMeta",source:"@site/docs/Applications/AdMeta.md",sourceDirName:"Applications",slug:"/Applications/AdMeta",permalink:"/grants/Applications/AdMeta",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Accepted Grant Applications",permalink:"/grants/Applications/"},next:{title:"Afloat Tax Infrastructure Polkadot Integration",permalink:"/grants/Applications/Afloat"}},s={},d=[{value:"Project Overview :page_facing_up",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Architecture",id:"architecture",level:4},{value:"Technology Stack",id:"technology-stack",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team :busts_in_silhouette",id:"team-busts_in_silhouette",level:2},{value:"Team members (In order of joining time)",id:"team-members-in-order-of-joining-time",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status :open_book",id:"development-status-open_book",level:2},{value:"Development Roadmap :nut_and_bolt",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Substrate Chain with Impression Ad, Web App",id:"milestone-1--substrate-chain-with-impression-ad-web-app",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information :heavy_plus_sign",id:"additional-information-heavy_plus_sign",level:2}],p={toc:d};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"admeta"},"AdMeta"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," AdMeta"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 0x1D346c4F0732674a1fc69b4bAFBa854F53353C35 (ERC20 USDT)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,i.kt)("h2",{id:"project-overview-page_facing_up"},"Project Overview :page_facing_up"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Advertising in Metaverse"),(0,i.kt)("p",null,"AdMeta is a Metaverse advertisement platform that focuses on privacy-preserving. AdMeta uses a TEE-based DID service to identify target groups for advertisers, and with the usage of TEE, AdMeta guarantees not to collect any user data. AdMeta builds multiple forms of ad assets (e.g. billboards, wall paintings) in Metaverse platforms like Decentraland, Bit.Country, to allow land holders to integrate our products easily. Qualified conversions let both users and publishers get rewards from advertisers."),(0,i.kt)("p",null,"In Polkadot and Kusama ecosystem, DID projects like Litentry are growing fast along with its related products. We have already discussed and agreed on our initial cooperation with Litentry. Also, we have contacted with Metaverse projects like Bit.Country, who shows great interests in cooperation as well."),(0,i.kt)("p",null,"Unlike traditional ad platforms, who collect users sensitive data(e.g. location, browsing history) for advertising, AdMeta does not collect or store any user data per se. Instead, users voluntarily decide and control what data can be stored in TEE, and the stored data in TEE cannot be accessed by anyone except users themselves."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/4738254/144754078-1877d8a5-8ef9-49ec-8ef5-f79496a689f0.png",alt:"AdMeta Demo - the floating billboard"})),(0,i.kt)("p",null,'In the above image, the floating billboard is our prototype ad component built with decentraland SDK. Users who registered on our blockchain, and switched "Ad Display" option on (by default it\'s off) are able to see a customized ad content on this billboard while gaming in decentraland.'),(0,i.kt)("p",null,"The content of this ad component is selected according to user's personal data and preference. Unlike centralized ad platforms, we don't store user's data on or database. Instead, it's stored on the TEE layer of blockchain, and the target group matching and selecting happen also in the TEE layer, which ensures that no private data are exposed during the whole process. Eventually, both user and publisher receive some amount of token as rewards from advertiser."),(0,i.kt)("p",null,"Our blockchain is built with Substrate, and the pallet-ad provides the functionality of advertisement proposal, storage and governance. The user pallet will connect to TEE-based external identity aggregation and DID service provided by Litentry (we have already the initial cooperation plan) to match ads with users data and preference."),(0,i.kt)("h4",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/h4n0/gists/master/admeta/admeta_architecture.svg",alt:"AdMeta Architecture"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Advertisers")," can propose an ad with certain acceptance rule, e.g. link clicking, and also advertiser provides how many times the ads are displayed and converted, and how much they pay for each conversion. They need to pay the total price (the number of conversions ","*"," price per conversion) while proposing the ad. Each ad display has a unique ID, which is generated while creating the proposal. A Merkle tree are built with all these unique IDs, and the root of Merkle tree will be stored in on-chain storage. A qualified conversion gives the participated user this UID, with which the user can claim for rewards."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Councils")," shall approve or reject ad proposals according to the content of ads. Also, advertisers are evaluated on their behavior democratically."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Users")," can switch on the \"Ad Display\" option on AdMeta, so that users can get rewards by viewing and interacting with ads. By default, this option is off, which means users who haven't set up their AdMeta won't see any ads. Users can also provide their data for a better ad matching, by means of this they will get more rewards."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Publishers")," can simply utilize our Ad Assets on any Metaverse platform and place it on their lands. Users also get rewards by a qualified display conversion."),(0,i.kt)("h4",{id:"technology-stack"},"Technology Stack"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Substrate"),(0,i.kt)("li",{parentName:"ul"},"Node.js"),(0,i.kt)("li",{parentName:"ul"},"3D Model Design")),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"There are an increasing number of Metaverse related projects in Polkadot/Kusama ecosystem, however, the current Metaverse platforms still lack of infrastructures and applications, comparing to our current real life. We therefore build this for various Metaverse platforms."),(0,i.kt)("p",null,"Our target audiences can be Web3 projects, who are potential advertisers, Metaverse land holders, who are potential publishers, and Metaverse players, who are potential users."),(0,i.kt)("p",null,"Advertising is our natural needs in almost all social scenarios, and we meet this needs in Metaverse."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://parami.io/"},"Parami")," builds Web3 ad platforms as well, and their scope is to build the DID and privacy layer by themselves. While we are focusing on the advertising functionality, and the DID service will be provided by Litentry, who is more professional on this field and has already their products. Also, our ad platform is targeting on Metaverse, not Web3."),(0,i.kt)("h2",{id:"team-busts_in_silhouette"},"Team :busts_in_silhouette"),(0,i.kt)("h3",{id:"team-members-in-order-of-joining-time"},"Team members (In order of joining time)"),(0,i.kt)("p",null,"Han Zhao - Core Dev and PM of Litentry Parachain Team. University of Stuttgart"),(0,i.kt)("p",null,"Yvonne Xie - Digital Marketing Lead. King's College London"),(0,i.kt)("p",null,"Shihao Zhao - Full Stack Dev of Litentry. University of Toronto"),(0,i.kt)("p",null,"Hao Ding - VP of Litentry, Founder of Web3Go. University of Stuttgart"),(0,i.kt)("p",null,"Dr. John Wu - Core Dev of Litentry Parachain Team. The University of Tokyo"),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Han Zhao"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:windzhaohan@gmail.com"},"windzhaohan@gmail.com")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("a",{parentName:"li",href:"https://admeta.network/"},"https://admeta.network/"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," No legal structure yet."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," No legal structure yet.")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"Han and John are core developers as well as project managers at Litentry, and both of them are main developers who implemented the Litentry parachain from scratch. Litentry is an identity aggregation focused company in Polkadot ecosystem, and has got the Web3 Foundation grant since 2019."),(0,i.kt)("p",null,"Yvonne has more than 8 years experience of digital marketing, and she has a deep understanding and practice of various online marketing and advertising methods. She also initialized this idea of combining advertisement and privacy preserving, to archive the goal of data protection."),(0,i.kt)("p",null,"Shihao is a full stack developer at Litentry, who contributes a lot in Litentry and Web3Go web apps and backend apps."),(0,i.kt)("p",null,"Hao is the founder of Web3Go, VP of Litentry, who has a very solid practical experience on both blockchain and data science."),(0,i.kt)("p",null,"Note: Both ",(0,i.kt)("a",{parentName:"p",href:"https://www.litentry.com/"},"Litentry")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/applications/Web3Go.md"},"Web3Go")," are Web3 granted projects."),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/litentry/litentry-parachain"},"https://github.com/litentry/litentry-parachain")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/litentry/litentry-pallets"},"https://github.com/litentry/litentry-pallets")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/web3go-xyz/web3go"},"https://github.com/web3go-xyz/web3go"))),(0,i.kt)("p",null,"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/h4n0"},"https://github.com/h4n0")," Han Zhao"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Shihao66"},"https://github.com/Shihao66")," Shihao Zhao"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Moehringen"},"https://github.com/Moehringen")," Hao Ding")),(0,i.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/zhaohan6"},"https://www.linkedin.com/in/zhaohan6")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/shihao-zhao-55752685/"},"https://www.linkedin.com/in/shihao-zhao-55752685/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/hao-ding-msc-pmp-64411193/"},"https://www.linkedin.com/in/hao-ding-msc-pmp-64411193/"))),(0,i.kt)("h2",{id:"development-status-open_book"},"Development Status :open_book"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/AdMetaNetwork/admeta"},"https://github.com/AdMetaNetwork/admeta")," This is the AdMeta Substrate chain implementation. We already started to build the pallets mentioned in Milestone 1 below."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/AdMetaNetwork/admeta-webapp"},"https://github.com/AdMetaNetwork/admeta-webapp")," This is our web app repo according to Milestone 1. We already had a single page app with polkadot js API integrated now."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/AdMetaNetwork/admeta-decentraland"},"https://github.com/AdMetaNetwork/admeta-decentraland")," This is a simple asset built with Decentraland SDK, and currently it's just for a demo purpose."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://admeta.network/"},"https://admeta.network/")," We also have the first version of our website.")),(0,i.kt)("h2",{id:"development-roadmap-nut_and_bolt"},"Development Roadmap :nut_and_bolt"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 1 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):")," 2 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 12,000 USD")),(0,i.kt)("h3",{id:"milestone-1--substrate-chain-with-impression-ad-web-app"},"Milestone 1 \u2014 Substrate Chain with Impression Ad, Web App"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 6 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:")," 2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 12,000 USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"GPLv3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,i.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"We will publish an ",(0,i.kt)("strong",{parentName:"td"},"article"),"/workshop that explains our advertising workflow as well as technical details.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate module: ad"),(0,i.kt)("td",{parentName:"tr",align:null},"We will create a Substrate module that will allow advertiser to create impression ads, and with council's approval, this ad will be ready to be displayed. If ads are rejected by the council(e.g. illegal or pornographic content), the advertiser's proposal bond will be slashed and collected in treasury.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate module: user mock"),(0,i.kt)("td",{parentName:"tr",align:null},"We will create a Substrate module that will first store users data on chain, to test and verify our logic. Also, user can update their data, control what data should be used, and these data are used to find the best matching ad for user.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate chain"),(0,i.kt)("td",{parentName:"tr",align:null},"Module ad and user can be integrated into a substrate node, to enable users access of all approved ads, receive rewards, etc. This chain will integrate treasury, council, democracy and also other essential pallets, to build a full-featured blockchain.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"Web App"),(0,i.kt)("td",{parentName:"tr",align:null},"We will create a web app, to let users easily interact with our substrate node. Users can claim rewards from viewing and clicking ads, and they can also configure their ad preferences and decide if they are willing to view ads or not.")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,"The next step is to have sensitive data stored in TEE. Also, we will build more ad types, like click ads and acquisition/action ads. Meanwhile, we will implement a Chrome extension to simplify the claim process, and an Ad asset on Decentraland(or other Metaverse platform) to enable land holders to use our ad assets conveniently."),(0,i.kt)("p",null,"In a long run, we will cooperate and adapt our products with more Metaverse platforms, and also we will develop more creative and interactive ad types."),(0,i.kt)("h2",{id:"additional-information-heavy_plus_sign"},"Additional Information :heavy_plus_sign"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," Personal recommendation"))}h.isMDXComponent=!0}}]);