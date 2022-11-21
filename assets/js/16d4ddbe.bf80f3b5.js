"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[7179],{82628:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));a(16758);const i={},l="DKSAP",o={unversionedId:"Applications/DKSAP",id:"Applications/DKSAP",title:"DKSAP",description:"- Team Name: DKSAP",source:"@site/docs/Applications/DKSAP.md",sourceDirName:"Applications",slug:"/Applications/DKSAP",permalink:"/grants/Applications/DKSAP",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"DICO",permalink:"/grants/Applications/DICO"},next:{title:"DNFT Protocol",permalink:"/grants/Applications/DNFT"}},s={},p=[{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team members&#39; repos:",id:"team-members-repos",level:4},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement Substrate Modules &amp; DKSAP",id:"milestone-1--implement-substrate-modules--dksap",level:3},{value:"Future Plans",id:"future-plans",level:2}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dksap"},"DKSAP"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," DKSAP"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," 0xf4f463B9A0ADa68536423121e7Bf9E559ce54fAf(Ethereum ERC20 USDT)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 1")),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The first full working implementation of DKSAP(Dual-Key Stealth Address Protocol) was announced by a developer known as rynomster/sdcoin in 2014 for ShadowSend, a capable, efficient and decentralized anonymous wallet solution.The DKSAP has been implemented in a number of cryptocurrency systems since then, including Monero, Samourai Wallet, and TokenPay, just to name a few. The protocol takes advantage of two pairs of cryptographic keys, namely a \u2018scan key\u2019 pair and a \u2018spend key\u2019 pair, and computes a one-time payment address per transaction, as detailed below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The receiver has two private/public key pairs (s, S) and (b, B), where S = s\xb7G and B = b\xb7G are \u2018scan public key\u2019 and \u2018spend public key\u2019, respectively. Here G is the base point of an elliptic curve group.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The sender generates an ephemeral key pair (r, R), where R = r\xb7G and transmits it with the transaction.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Both the sender and receiver can compute a shared secret c using the ECDH: c = H(r\xb7s\xb7G) = H(r\xb7S) = H(s\xb7R), where H(\xb7) is a cryptographic hash function.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The sender uses c\xb7G + B as the ephemeral destination address for sending the payment.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The receiver actively monitors the blockchain and checks whether some transaction has been sent to the purported destination address c\xb7G + B. Depending on whether the wallet is encrypted, the receiver can compute the same destination address in two different ways, i.e., c\xb7G + B = (c + b)\xb7G. If there is a match, the payment can be spent using the corresponding private key c + b. Note that the ephemeral private key c + b can only be computed by the receiver."))),(0,r.kt)("p",null,"In DKSAP, if an auditor or a proxy server exists in the system, the receiver can share the \u2018scan private key\u2019 s and the \u2018spend public key\u2019 B with the auditor/proxy server so that those entities can scan the blockchain transaction on behalf of the receiver. However, they are not able the compute the ephemeral private key c + b and spend the payment."),(0,r.kt)("p",null,"I want to develop an anonymous NFT contract based on DKSAP, and all NFT owner address are encrypted by the receiver's scan public key. At the same time, users send transaction through relayer to ensure the anonymity of the transaction."),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("p",null,"I believe that technical facilities like DKSAP are of great significance in the Polkadot ecosystem."),(0,r.kt)("p",null,"Many of today\u2019s blockchains, including Bitcoin and Ethereum, are open and public ledgers in the sense that there are no restrictions on participation and all transaction details are visible on the blockchain. In a public ledger, the transaction entities are only identified by their blockchain addresses, which are derived from the corresponding public keys. Public ledgers are generally considered to be \u201cpseudo-anonymous\u201d, which means that an address is linked to one person, but that person is unknown to the public. However, by analyzing the transaction graph and combining with other information, it is possible to reveal the true real world identity behind a blockchain address, as shown by recent research. People and corporations prefer to add privacy-enhancing features to blockchain transactions for various reasons, including but not limited to managing law-enforcement related issues and hiding sensitive, company-specific information."),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("p",null,"Yahuang Wu"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wuyahuang"},"Github address")),(0,r.kt)("li",{parentName:"ul"},"7 years of internet R&D experience, participated in the development of several APPs with millions of Daily Active Users (Qunar, Snowball, Meiyou)"),(0,r.kt)("li",{parentName:"ul"},"Wrote 40 EOS technical articles ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/meet-one/documentation/blob/master/meetone-lab-docs.md"},"list of technical articles")),(0,r.kt)("li",{parentName:"ul"},"Selected for the EOS Open Source Community Acknowledgments List ",(0,r.kt)("a",{parentName:"li",href:"https://steemit.com/eos/@liondani/eos-acknowledgments-making-it-immutable-via-steemit"},"list of selected lists")),(0,r.kt)("li",{parentName:"ul"},"Multiple EOS open-source repositories that submitted PRs were selected for the GitHub Archive Program"),(0,r.kt)("li",{parentName:"ul"},"Has 10 blockchain technology patents ",(0,r.kt)("a",{parentName:"li",href:"http://www1.soopat.com/Home/Result?SearchWord=%E5%90%B4%E4%BA%9A%E7%9A%87&FMZL=Y&SYXX=Y&WGZL=Y&FMSQ=Y"},"Patent List"))),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Yahuang Wu"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"li",href:"mailto:wuyahuang@gmail.com"},"wuyahuang@gmail.com"))),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Address:")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," ")),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("p",null,"I have 7 years of experience in Internet research and development, focusing on the blockchain industry since 2018. I'm a deep participant in several technical communities, hackathon winners, and node service providers for EOS and PlatON."),(0,r.kt)("h4",{id:"team-members-repos"},"Team members' repos:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Yahuang Wu: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/wuyahuang"},"https://github.com/wuyahuang"))),(0,r.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/1806.00951.pdf"},"Faster Dual-Key Stealth Address for\nBlockchain-Based Internet of Things Systems"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://ieeexplore.ieee.org/document/9209929"},"PDKSAP : Perfected Double-Key Stealth Address Protocol without Temporary Key Leakage in Blockchain\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://ieeexplore.ieee.org/document/9724375"},"EDKSAP : Efficient Double-Key Stealth Address Protocol in Blockchain\n")))),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 6 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):")," 1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," 10,000 USD")),(0,r.kt)("h3",{id:"milestone-1--implement-substrate-modules--dksap"},"Milestone 1 \u2014 Implement Substrate Modules & DKSAP"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 6 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 10,000 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"GPLv3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how a user can send test transactions, which will show how the new functionality works.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"(Node.js)SDK: Client Tool"),(0,r.kt)("td",{parentName:"tr",align:null},"Development and testing of the basic abilities of the client tool, including computing a shared secret by ECDH, computing encrypted public key of the receiver, computing ephemeral private key(adding points in elliptic curve cryptography), and pushing transactions to relayer through HTTPS.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"(ink!)Smart contracts: Anonymous NFT"),(0,r.kt)("td",{parentName:"tr",align:null},"Development and testing of the core functions of the Anonymous NFT smart contract, including minting new NFT, transferring NFT, and burning NFT. In particular, it is important to note that the address of the owner stored in the contract is encrypted by the scan public key of receiver. At the same time, when users need to perform Mint or Transfer operations, smart contract need to verify the signature of the private key corresponding to this address on-chain.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"HTTPS Service: Node.js Relayer"),(0,r.kt)("td",{parentName:"tr",align:null},"Build an early-stage HTTPS service relayer including accepts requests from users and pushes transaction to NFT smart contract.")))),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"After the ink! implementation of DKSAP is fully tested, I will continue to improve the DKSAP implementation for the Polkadot ecosystems. At the same time, I will help other teams that need to use the DKSAP protocol to reduce development costs."),(0,r.kt)("li",{parentName:"ul"},"Currently, user transactions is sent free of charge by relayer. This is not possible in the production environment, so we need to modify the relayer in the furture version. We can add a deposit function to NFT, so that users can deposit token into contract, and then transfer the token to realyer based on zero-knowledge proof.")))}m.isMDXComponent=!0}}]);