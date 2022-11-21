"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[6382],{20862:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));a(16758);const o={},i="SkyeKiwi Protocol",l={unversionedId:"Applications/skyekiwi-protocol",id:"Applications/skyekiwi-protocol",title:"SkyeKiwi Protocol",description:"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the Open Grants Program Process on how to submit a proposal.",source:"@site/docs/Applications/skyekiwi-protocol.md",sourceDirName:"Applications",slug:"/Applications/skyekiwi-protocol",permalink:"/grants/Applications/skyekiwi-protocol",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Signac - a monorepo plugin for developing multiple Parity ink! smart contracts",permalink:"/grants/Applications/signac"},next:{title:"SkyePass",permalink:"/grants/Applications/skyepass"}},s={},p=[{value:"Project Overview :page_facing_up",id:"project-overview-page_facing_up",level:2},{value:"Project Details",id:"project-details",level:3},{value:"Technology Stack",id:"technology-stack",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team :busts_in_silhouette",id:"team-busts_in_silhouette",level:2},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Development Status :open_book",id:"development-status-open_book",level:2},{value:"Development Roadmap :nut_and_bolt",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview",level:3},{value:"Milestone 1 - Phase 1",id:"milestone-1---phase-1",level:3},{value:"Milestone 2 - Phase 2",id:"milestone-2---phase-2",level:3},{value:"Future Plans",id:"future-plans",level:2}],c={toc:p};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"skyekiwi-protocol"},"SkyeKiwi Protocol"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md"},"Open Grants Program Process")," on how to submit a proposal.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Team Name:")," SkyeKiwi Team")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Payment Address"),": 0xa5E4E1BB29eE2D16B07545CCf565868aE34F92a2"),(0,r.kt)("p",{parentName:"li"},"*The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.**"))),(0,r.kt)("h2",{id:"project-overview-page_facing_up"},"Project Overview :page_facing_up"),(0,r.kt)("p",null,"The SkyeKiwi Protocol is a generic, efficient and customizable secret sharing protocol for end-users and blockchain nodes."),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("p",null,"The SkyeKiwi Protocol hides secrets under bright day lights. It is designed to be generalized useable blockchain library to package/manage encrypted content on blockchain. We designed it to be capable of efficiently processing a few bytes to GB size of secrets. It's a series of cryptographic process with help of storage network and smart contract/Substrate runtime pallet."),(0,r.kt)("p",null,"The process can be graphed as:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNgy1gt7p6xldq2j31710u0acs.jpg",alt:"Group 1"})),(0,r.kt)("p",null,"It will take in a two inputs: a byte stream wrapped under the ",(0,r.kt)("inlineCode",{parentName:"p"},"File")," API, an ",(0,r.kt)("inlineCode",{parentName:"p"},"EncryptionSchema")," that outlines the sharing behavior and an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"SealingKey")," and any related blockchain identity seed/signer."),(0,r.kt)("p",null,"The high level wrapper of the SkyeKiwi Protocol exposes four APIs: ",(0,r.kt)("inlineCode",{parentName:"p"},"upstream"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"donwstream"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"updateEncryptionSchema")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"verifyProofOfAccess"),". And will be released in two phase:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Phase One - PoC Phase: Connects to a smart contract of a Substrate style WASM smart contract enabled blockchain; the Crust Network for storage; Public IPFS Pin Service & Gateways, with a SkyeKiwi ran IPFS Cluster as backup IPFS nodes."),(0,r.kt)("li",{parentName:"ol"},"Phase Two: Connects to the SkyeKiwi Network ",(0,r.kt)("inlineCode",{parentName:"li"},"pallet-secrets")," instead of a smart contract for general secrets registry; the Crust Network for storage; Public IPFS Pin Service & temporary IPFS nodes from the Crust Network ecosystem solutions.")),(0,r.kt)("p",null,"Usage Example on Node.js/Browser:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const mnemonic = process.env.SEED_PHRASE\nconst blockchain = new SkyeKiwi.Blockchain(\n  // seed phrase\n  mnemonic,\n  // contract address\n  '3cNizgEgkjB8TKm8FGJD3mtcxNTwBRxWrCwa77rNTq3WaZsM',\n  // contract instance endpoint\n  'wss://jupiter-poa.elara.patract.io',\n  // storage network endpoint\n  'wss://rocky-api.crust.network/',\n)\n\nconst encryptionSchema = new SkyeKiwi.EncryptionSchema({\n  numOfShares: 2, \n  threshold: 2, \n  author: author, \n  unencryptedPieceCount: 1\n})\nencryptionSchema.addMember(author, 1)\n\nconst key = new SkyeKiwi.Seal({\n  encryptionSchema: encryptionSchema, \n  seed: mnemonic\n})\n\n// upstream the file, it take two major actions: \n// upload files to the Crust Network & Write to a smart contract to generate a vaultId\nawait SkyeKiwi.Driver.upstream({\n  file: fileHandle[0].file,\n  seal: key,\n  blockchain: blockchain\n})\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const stream = fs.createWriteStream(outputPath, {flags: 'a'})\nawait SkyeKiwi.Driver.downstream({\n  vaultId: vaultId,\n  blockchain: blockchain,\n  keys: [key1, key2 ... ], // private key of recipeints\n  writeStream: stream,\n})\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// upon finishing, the encryptionSchema will be updated\nawait SkyeKiwi.Driver.updateEncryptionSchema({\n  vaultId: vaultId,\n  newEncryptionSchema: encryptionSchema,\n  seed: mnemonic,\n  keys: [key1, key2 ... ], // private key of recipeints\n  blockchain: blockchain\n})\n")),(0,r.kt)("h3",{id:"technology-stack"},"Technology Stack"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Cryptographic Library: ",(0,r.kt)("inlineCode",{parentName:"li"},"tweetnacl")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"x25519 encryption/decryption"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"xsalsa20-poly1305 symmetrical encrypt/decrypt")),(0,r.kt)("li",{parentName:"ol"},"Random Number Generator: ",(0,r.kt)("inlineCode",{parentName:"li"},"tweetnacl - randomBytes")," OR browser crypto APIs."),(0,r.kt)("li",{parentName:"ol"},"Threshold Secret Sharing: ",(0,r.kt)("inlineCode",{parentName:"li"},"@skyekiwi/secrets")," a fork of audited SSS library ",(0,r.kt)("inlineCode",{parentName:"li"},"secret.js")),(0,r.kt)("li",{parentName:"ol"},"Crust Network for persistent storage"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"ink!")," wasm smart contract & smart contract dev kit by Patract Labs"),(0,r.kt)("li",{parentName:"ol"},"Substrate for ",(0,r.kt)("inlineCode",{parentName:"li"},"pallet-secrets")),(0,r.kt)("li",{parentName:"ol"},"IPFS JS - the JavaScript IPFS implementation"),(0,r.kt)("li",{parentName:"ol"},"Polkadot.js - to operate well in browsers & add in support for encryption/decryption and curve conversation")),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("p",null,"The SkyeKiwi Protocol has a wide applicable areas. It's a generalized and customizable solution. For instance:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Extend the NFT landscape to introduce NFTs with concealed content and strict access control of the content"),(0,r.kt)("li",{parentName:"ul"},"Contract signature, build a decentralized contract signing platform, a DocuSign alternative.")),(0,r.kt)("p",null,"Moreover, SkyeKiwi will take the SkyeKiwi Protocol and built into the SkyeKiwi Network featuring concealed smart contract execution and secret processing. Where the SkyeKiwi Protocol is the schema used to communicate between blockchain nodes and between end-users to blockchain nodes."),(0,r.kt)("h2",{id:"team-busts_in_silhouette"},"Team :busts_in_silhouette"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h3",{parentName:"li",id:"team-members"},"Team members"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Song Zhou ( Developer ) ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/RoyTimes"},"https://github.com/RoyTimes")),(0,r.kt)("li",{parentName:"ul"},"Zoe Sun ( Designer/COO )"),(0,r.kt)("li",{parentName:"ul"},"... More to be hired")))),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Song Zhou (",(0,r.kt)("a",{parentName:"li",href:"mailto:song.zhou@skye.kiwi"},"song.zhou@skye.kiwi"),")")),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No legal entity yet")),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"We have a draft implementation of the SkyeKiwi Protocol under development of SkyePass for a Web3 Foundation grant and delivered the PoC as the first milestone. We had won first place in the Polkadot Hackathon by Web3 in India with the SkyeKiwi Protocol and one of its application.\n")),(0,r.kt)("h2",{id:"development-status-open_book"},"Development Status :open_book"),(0,r.kt)("p",null,"We have implemented a very very drafty version of the SkyeKiwi Protocol as part of our previous application to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/pull/212"},"SkyePass"),". Under our discussion in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/pull/553"},"LINK")," we are now extracting the SkyeKiwi Protocol development out from the original grant application and port our previous work on this new application."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Code base: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/skyekiwi/skyekiwi-protocol"},"https://github.com/skyekiwi/skyekiwi-protocol")," AND ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/skyekiwi/contract-demo"},"https://github.com/skyekiwi/contract-demo")," for smart contract examples"),(0,r.kt)("li",{parentName:"ul"},"Our contribution to Polkadot.js: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js/common/pull/1070"},"https://github.com/polkadot-js/common/pull/1070")),(0,r.kt)("li",{parentName:"ul"},"Documentation Site: ",(0,r.kt)("a",{parentName:"li",href:"https://cdocs.skye.kiwi/"},"https://cdocs.skye.kiwi/")," (might not be 100% synced with development)")),(0,r.kt)("h2",{id:"development-roadmap-nut_and_bolt"},"Development Roadmap :nut_and_bolt"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 4 months (16 weeks)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  2 ",(0,r.kt)("strong",{parentName:"li"},"FTE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," $30,000 (payable in DAI)")),(0,r.kt)("h3",{id:"milestone-1---phase-1"},"Milestone 1 - Phase 1"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Phase One")," - PoC Phase: Connects to a smart contract of a Substrate style WASM smart contract enabled blockchain; the Crust Network for storage; Public IPFS Pin Service & Gateways, with a SkyeKiwi ran IPFS Cluster as backup IPFS nodes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 2 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 12,000USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,r.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can integrate the SkyeKiwi Protocol into their project.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests on both Node.js and Browser environment.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Core Protocol"),(0,r.kt)("td",{parentName:"tr",align:null},"Implements the ",(0,r.kt)("inlineCode",{parentName:"td"},"upstream")," ",(0,r.kt)("inlineCode",{parentName:"td"},"downstream")," ",(0,r.kt)("inlineCode",{parentName:"td"},"updateEncryptionSchema")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"verifyProofOfAccess")," APIs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Smart Contract"),(0,r.kt)("td",{parentName:"tr",align:null},"Implements and test for the smart contract used for registering secrets and access control write access to the secret.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Polkadot.js"),(0,r.kt)("td",{parentName:"tr",align:null},"Add in encryption/decryption functionality to ",(0,r.kt)("inlineCode",{parentName:"td"},"@polkadot/keyring")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"@polkadot/extension")," so that the protocol can run without the needs to read the private key of users.")))),(0,r.kt)("h3",{id:"milestone-2---phase-2"},"Milestone 2 - Phase 2"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Phase Two"),": Connects to the SkyeKiwi Network ",(0,r.kt)("inlineCode",{parentName:"p"},"pallet-secrets")," instead of a smart contract for general secrets registry; the Crust Network for storage; Public IPFS Pin Service & temporary IPFS nodes from the Crust Network ecosystem solutions."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," We won't be 100% sure of the availability of the Crust Network temporary IPFS solution but will actively engage with the Crust Network for this part. Therefore, we'd like to mark it as optional. Worst thing worst, we still have our own IPFS cluster running."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 2 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 18,000USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,r.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can integrate the SkyeKiwi Protocol into their project.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests on both Node.js, Browser and Rust environment.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pallet-secrets")),(0,r.kt)("td",{parentName:"tr",align:null},"Port the ",(0,r.kt)("inlineCode",{parentName:"td"},"ink!")," smart contract to be a runtime pallet and integrate it to the SkyeKiwi Protocol source code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Rust Implementation"),(0,r.kt)("td",{parentName:"tr",align:null},"Port the SkyeKiwi Protocol to Rust, so that it works between blockchain nodes as well.")))),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("p",null,"We will build a Substrate based blockchain with the SkyeKiwi Protocol. The blockchain is gonna feature:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Three registry: registry for SecretKeeper Nodes (TEE enabled nodes who keep a secret and process state transition functions on secrets), registry for general secrets (included in Milestone 2), registry for encrypted states (encrypted states are secrets that represents the state of secret contracts, the registry will mark the lazy execution position, checkpoint status of these states, and which nodes are processing the secrets)."),(0,r.kt)("li",{parentName:"ol"},"Two Rotation: the small rotation - on par with the session key rotation of Substrate, the big rotation - rotate the sealing key of the encrypted states in TEE enclaves, and package the current states of the secret with the SkyeKiwi Protocol and publish it to the registry"),(0,r.kt)("li",{parentName:"ol"},"One Lazy Execution Queue: an append-only log that records all transactions happened on a secrets, that can be subscribed by any nodes with access to the secret.")),(0,r.kt)("p",null,"The blockchain (SkyeKiwi Network) will be able to execute concealed smart contract executions."))}k.isMDXComponent=!0}}]);