"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[7230],{2816:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));a(16758);const r={},l="Distributed Key Management",s={unversionedId:"Applications/DistributedKeyManagement",id:"Applications/DistributedKeyManagement",title:"Distributed Key Management",description:"- Team Name: Jett Hays (Individual)",source:"@site/docs/Applications/DistributedKeyManagement.md",sourceDirName:"Applications",slug:"/Applications/DistributedKeyManagement",permalink:"/grants/Applications/DistributedKeyManagement",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Dipole Oracle",permalink:"/grants/Applications/DipoleOracle"},next:{title:"DOT PAY",permalink:"/grants/Applications/DotPay"}},o={},d=[{value:"Project Overview :page_facing_up",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Client Seedloop",id:"client-seedloop",level:5},{value:"Local Storage",id:"local-storage",level:5},{value:"Authentication",id:"authentication",level:5},{value:"Conclusion",id:"conclusion",level:5},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team :busts_in_silhouette",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status :open_book",id:"development-status-open_book",level:2},{value:"Development Roadmap :nut_and_bolt",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 - Research Paper",id:"milestone-1---research-paper",level:3},{value:"Milestone 2 \u2014 Reference Implementation",id:"milestone-2--reference-implementation",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information :heavy_plus_sign",id:"additional-information-heavy_plus_sign",level:2}],p={toc:d};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"distributed-key-management"},"Distributed Key Management"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," Jett Hays (Individual)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 0x33644e4D6bb589854fbb906276147Afd7de86E09 (ERC-20 USDC)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 1")),(0,i.kt)("h2",{id:"project-overview-page_facing_up"},"Project Overview :page_facing_up"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"This project will explore the security and applications of using secret sharing to distribute wallet ownership."),(0,i.kt)("p",null,"Public key cryptography has enabled encrypted communication and global computing protocols like Polkadot.\nBut managing keys is hard. Existing noncustodial key management solutions require memorizing long mnemonic phrases, using network specific smart contracts,\nor purchasing complicated hardware wallets. These solutions are insufficient for the majority of users who are looking for a simple way to manage private keys.\nThis grant will support research on a distributed key management system and an open source reference implementation.\nIf successful, this project will help make Polkadot hot wallets more secure and simplify online ownership.\nWith the proposed system, wallets could implement 2fa and authenticate with their existing Google or Apple account."),(0,i.kt)("p",null,"I believe wallets are the connection point between users and the decentralized web. Making this connection point accessible and secure is incredibly exciting and drives my interest in developing this project."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"This is a research project focused on distributed key management. The basic idea involves sharing a secret\u2013 in this case, a BIP32 seed phrase\u2013  between a client and remote servers. When the private key is needed, the shares are reassembled on the client and used within a standard key manager. The local key manager can then be used to publish transactions, encrypt data, validate identity, etc. I have already implemented a version of this idea within the open source Kryptik wallet. However, more research is required to answer essential security questions (discussed in the project timeline) and provide a common reference implementation. A skeleton of the distributed key management system, as implemented by the Kryptik wallet, is described below."),(0,i.kt)("h5",{id:"client-seedloop"},"Client Seedloop"),(0,i.kt)("p",null,"Wallets are derived from a single parent key. This parent key is used as a seed to generate a child key for each blockchain network, in accordance with the BIP 32 specification for hierarchical deterministic wallets. Child keys may produce an array of addresses and have custom methods depending on the network type. This cluster of keyrings is stored on a single seed loop object that contains the parent key. The seedloop can be encrypted with a standard password by the user at any point in time."),(0,i.kt)("h5",{id:"local-storage"},"Local Storage"),(0,i.kt)("p",null,"When a wallet is created, the wallet object is serialized, encrypted, and stored in the browser\u2019s local storage. The random encryption secret is then split with shamir secret sharing into two shares. One share is held locally and one share is sent to the database. When a new user session begins, the service retrieves the database share and combines it locally into the original encryption secret. The wallet can then be decrypted, deserialized, and made available for use. This arrangement results in a two-of-two security scheme, where an attacker must compromise both systems to obtain a user\u2019s private seed."),(0,i.kt)("h5",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"Kryptik uses a decentralized authentication provider to generate a user identifier which is passed to the user through a \u2018magic\u2019 link sent via email. The ID is then exchanged with the database for an access token and the user session begins."),(0,i.kt)("h5",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"This system has worked well during public testing. However, improvements must be made to generalize beyond a 2 of 2 system\u2013 this has potential implications for social recovery\u2013 and research must be conducted to understand the security implications of distributed key management as described above. This project will accomplish both of these goals in addition to providing a common reference implementation."),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"Secure and usable key management is an open issue. This project will improve the security of hot wallets\u2013 through encryption, 2fa, and distributed secret sharing\u2013 and provide users with a simple key management flow: just authenticate like you would for any other app!"),(0,i.kt)("p",null,"The initial research will be used to improve the distributed key management implementation currently used by the Kryptik wallet. However, the research, code, and documentation are designed for the broader developer community to use in their own app that supports Polkadat or Kusama."),(0,i.kt)("h2",{id:"team-busts_in_silhouette"},"Team :busts_in_silhouette"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("p",null,"Leader: Jett Hays\nAdvisor: Nicolas Christin"),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Jett Hays"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:jehays@andrew.cmu.edu"},"jehays@andrew.cmu.edu")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("a",{parentName:"li",href:"https://jetthays.com/"},"jetthays.com"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("p",null,"Individual / Sole Proprietor"),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"Jett Hays is the President of the Carnegie Mellon blockchain club where he helps members build and understand the decentralized future. Previous projects have included a open source key management package","[https://github.com/KryptikApp/kryptik-seedloop]"," and a ",(0,i.kt)("a",{parentName:"p",href:"https://www.kryptik.app/"},"multichain web wallet"),". Both projects have received support from Carnegie Mellon and multiple blockchain foundations."),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/KryptikApp"},"https://github.com/KryptikApp"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/KryptikApp/kryptikwebapp"},"https://github.com/KryptikApp/kryptikwebapp"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/KryptikApp/kryptik-seedloop"},"https://github.com/KryptikApp/kryptik-seedloop"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/jettblu"},"https://github.com/jettblu")))),(0,i.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/jett-hays-491b541b7/"},"https://www.linkedin.com/in/jett-hays-491b541b7/"))),(0,i.kt)("h2",{id:"development-status-open_book"},"Development Status :open_book"),(0,i.kt)("p",null,"The idea of a distributed key manager came to me during a class at Carnegie Mellon on shamir secret sharing. After coming up with a rough interface, I applied for a small undergraduate research grant from CMU, with Professor Nicolas Christin agreeing to be my advisor.\nThis research led me to create the open source Kryptik wallet, whcih I have been working on for the past year. A short demo of the wallet can be found via ",(0,i.kt)("a",{parentName:"p",href:"https://vimeo.com/745609041"},"this link"),". This wallet uses a simple version of the distributed key management system I described above."),(0,i.kt)("p",null,"As part of this project, I also released a seedloop manager as an open source NPM package, which can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KryptikApp/kryptik-seedloop"},"here"),". This package allows developers to easily generate wallets and sign transactions across multiple blockchains."),(0,i.kt)("h2",{id:"development-roadmap-nut_and_bolt"},"Development Roadmap :nut_and_bolt"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  .4 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," $8,000")),(0,i.kt)("h3",{id:"milestone-1---research-paper"},"Milestone 1 - Research Paper"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 10 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  0.4 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 5,000 USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide regular blog updates that document our discoveries on decentralized key management as we develop the paper.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Since this milestone is focused on creating and publishing a research paper, there is no need for a testing guide.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"This milestone does not involve explicit software, so no dockerfiles are needed for testing.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"We will publish an article that summarizes the key findings of our distributed key management research for developers (who may not be interested in the nitty gritty technical details or security models).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Formal Investigation"),(0,i.kt)("td",{parentName:"tr",align:null},"The research period will be spent investigating the following questions about the kryptik key management system. What is the threat model? How can keys be synced across devices? How can the system include more than two shareholders? What is the ideal number of shareholders? Is there any application to social recovery? By the end of this period, I will have organized a sequence of proofs and thoughts that can be shaped into a paper. Each question and associated discovery will be documented via regular blog posts.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Research Paper"),(0,i.kt)("td",{parentName:"tr",align:null},"This paper will include an in depth analysis of the research questions discussed above. Professor Nicolas Cristin of Carnegie Mellon will help advise the paper\u2013 he served as an advisor for my initial research grant from CMU. The paper will be released as an open source document on Github. We expect this open source key management knowledge to provide a strong foundation for future Polkadot/Kusama/Substrate wallet designers.")))),(0,i.kt)("h3",{id:"milestone-2--reference-implementation"},"Milestone 2 \u2014 Reference Implementation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  .4"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 3,000 USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide extensive inline documentation that describes the purpose of functions and parameters. This will help create a 'trail of knowledge' that developers can follow through the key management system.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"We will include a step by step guide that shows the distributed key management system works as intended. Unit tests will be included for critical functions like share generation/ recombination. Unit tests will be executed using vitest.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"We will publish an ",(0,i.kt)("strong",{parentName:"td"},"article")," that provides a step by step explanation of the distributed key management system and how each function is implemented in code. This will be published as a blog post.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Vault Module"),(0,i.kt)("td",{parentName:"tr",align:null},"The vault module will provide a standard interface for storing a BIP 39 seed and multiple blockchain accounts on the client.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Encryption Module"),(0,i.kt)("td",{parentName:"tr",align:null},"The encryption module will allow seed vaults to be locked/unlocked via a user provided password. The module will also use a randomly generated encryption key to create ciphertext for the BIP39 seedphrase when persisting vault storage on the client.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Share Module"),(0,i.kt)("td",{parentName:"tr",align:null},"The share module will generate shamir shares for a given piece of data (in this case the encryption secret). This module will also allow shares to be recombined (according to the k of n secret sharing scheme) to reconstruct the original piece of data.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"Sync Module"),(0,i.kt)("td",{parentName:"tr",align:null},"This module will allow seed vaults to be synced across devices.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"5."),(0,i.kt)("td",{parentName:"tr",align:null},"Web Deployment"),(0,i.kt)("td",{parentName:"tr",align:null},"And finally, we will wrap these modules in a nice UI and deploy the interface to a website (likely using NextJs + Vercel). This website will allow developers to create a vault, sync their devices, and sign sample transactions. This will be accomplished via open source React components that developers can reuse in their own application. The deployed app will have Polkadot/Kusama/Substrate specific examples (address generation, signatures, etc) that will benefit future developers.")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,"After the grant is completed, I will continue improving the open source Kryptik wallet, which builds upon the distributed key management system described above. Work on the wallet interface\u2013 which has been sponsored by other grants\u2013  will necessarily include revisiting the key management system and making improvements (such as adding the ability to sync key shares between devices). Beyond that, the research and published paper are a timeless body of knowledge that will continually benefit production implementations and new research on key management."),(0,i.kt)("h2",{id:"additional-information-heavy_plus_sign"},"Additional Information :heavy_plus_sign"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," I first heard about the grants program at EthDenver 2022. I then learned more about the program via the Web3 Foundation Website."),(0,i.kt)("p",null,"The NEAR foundation awarded a $45,000 grant to develop the Kryptik wallet interface. This work wrapped the key management system with software that supports multi chain swaps, collectibles, payments, etc. I also received $20,000 from the Solana Foundation to provide open source documentation and Solana specific examples. Both of these grants are directed towards the Kryptik wallet interface, not the key management system which was devised separately."),(0,i.kt)("p",null,"Finally, I received $500 from Carnegie Mellon to build the key manager and host the wallet interface."),(0,i.kt)("p",null,"**How does this project benefit the Polkadot/Kusama/Substrate ecosystem?\nAsymmetric key management is an open issue that affects every blockchain ecosystem. An improved key management system will help improve wallet design which, in turn, will help improve the user experience of the Polkadot/Kusama/Substrate ecosystem. The research proposed above will provide foundational knowledge and software that can be integrated into existing Polkadot related wallets and in emerging wallets that have yet to be designed. In summary, successful execution of the grant will result in a simple and more secure way to interact with the Polkadot/Kusama/Substrate ecosystem. This will benefit users, who will have an improved wallet experience, and developers who can build upon a novel approach to key management."))}m.isMDXComponent=!0}}]);