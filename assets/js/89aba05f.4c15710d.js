"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[9390],{81421:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));a(16758);const r={},l="UMC - Tokenscribe",s={unversionedId:"Applications/UMC-Tokenscribe",id:"Applications/UMC-Tokenscribe",title:"UMC - Tokenscribe",description:"Team Name:* UMC Labs",source:"@site/docs/Applications/UMC-Tokenscribe.md",sourceDirName:"Applications",slug:"/Applications/UMC-Tokenscribe",permalink:"/grants/Applications/UMC-Tokenscribe",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Treasureland",permalink:"/grants/Applications/Treasureland"},next:{title:"Web3Go",permalink:"/grants/Applications/Web3Go"}},o={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Introduction",id:"introduction",level:4},{value:"Integration",id:"integration",level:4},{value:"Team Interest",id:"team-interest",level:4},{value:"Project Details",id:"project-details",level:3},{value:"Interface Specification",id:"interface-specification",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement Draft Specification",id:"milestone-1--implement-draft-specification",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"umc---tokenscribe"},"UMC - Tokenscribe"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," UMC Labs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 1KoTuo8c2YomLXPqLdrPVEiufSDyCwrNGC"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Status:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/w3f/Open-Grants-Program/pull/179#issuecomment-874249680"},"Terminated"))),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("h4",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Subscription is a common payment method existed for a long time since credit cards. In the blockchain age, DeFi is the edge of web3 tech to change the world. In the meanwhile, there is no secured subscription feature for users to subscribe to their memberships nor their virtual staffs on-chain.\nAs we know, the draft ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1337.md"},"EIP1337"),"  proposed a way to implement token subscription for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md"},"ERC20"),"  tokens. But from the view of users, EIP1337 is not the secure way to implement token subscription.\nThis application is aimed to propose a specification of secured token subscription which is the key feature of UMC - Universal Membership Community."),(0,i.kt)("h4",{id:"integration"},"Integration"),(0,i.kt)("p",null,"The secured token subscription will be implemented with Ink!."),(0,i.kt)("h4",{id:"team-interest"},"Team Interest"),(0,i.kt)("p",null,"We are dapp developers and we want to design a subscription feature for our project to manage users' membership with the secured token subscription. Our project is aimed to build a universal membership network which is can be used for both on-chain and off-chain services, such as Shopping Mall Memberships."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"With EIP1337, all the subscription status-related information is managed by a subscription contract, which will expose the users to the risks just like the situation of subscription in the telecom age and the early age of the internet. Most scamming cases are let users subscribe to some uncertain subscriptions while users cannot cancel those subscriptions due easily.\nThe main idea is to track and manage the subscription in token contract rather than subscription contracts to achieve the goal of securing users' assets. "),(0,i.kt)("h4",{id:"interface-specification"},"Interface Specification"),(0,i.kt)("p",null,"The standard methods of ERC20 should be implemented as part of the token with the subscription feature."),(0,i.kt)("p",null,"The following methods also should be implemented."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"subscribe\n\n- desc: subscribe the specific service.\n- params: contract address, interval, extra data\n- return: success\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"unsubscribe\n\n- desc: unsubscribe the specific service.\n- params: contract address, data\n- return: success\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"subscriptionStatus\n\n- desc: return the status of specific subscription.\n- params: user address, contract address\n- return: the status of subscription\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"subscriptionInterval\n\n- desc: return the interval of specific subscription.\n- params: user address, contract address\n- return: the interval of subscription\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"executeSubscription\n\n- desc: execute the subscription for a specific address if pass the check.\n- params: user address\n- return: success\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"validSubscriptions\n\n- desc: return the list of current valid subscriptions.\n- params: user address\n- return: the list of current valid subscriptions\n")),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1337.md"},"EIP1337 Draft")," is the only one proposed in EIPs for token subscription, but still not widly used since approved six monthes before."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/blob/master/examples/erc20/lib.rs"},"ERC20 with Ink!")," is the sample code of ERC20 token in Ink!."),(0,i.kt)("p",null,"At the very beginning stage of Ink! and Polkadot ecosystem, it's good to add token subscription as the common interface for tokens."),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Gala - CTO/Project Lead  "),(0,i.kt)("li",{parentName:"ul"},"Davies - Developer  ")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Contact Name: Gala"),(0,i.kt)("li",{parentName:"ul"},"Website: ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/umc-network"},"https://github.com/umc-network")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://umc.network"},"https://umc.network")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tokenscribe.network"},"https://tokenscribe.network"))))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("p",null,"No Legal Entity"),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"Gala   "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ex-Software Engineer in Glu  "),(0,i.kt)("li",{parentName:"ul"},"Mobile Game Developer  "),(0,i.kt)("li",{parentName:"ul"},"E-commercial Software Developer"),(0,i.kt)("li",{parentName:"ul"},"Dapp Developer  "),(0,i.kt)("li",{parentName:"ul"},"Over 8 years of experiences in Software Development")),(0,i.kt)("p",null,"Davies  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ex-Software Engineer in Glu "),(0,i.kt)("li",{parentName:"ul"},"Mobile Game Developer  "),(0,i.kt)("li",{parentName:"ul"},"E-commercial Software Developer"),(0,i.kt)("li",{parentName:"ul"},"Dapp Developer  "),(0,i.kt)("li",{parentName:"ul"},"Over 5 years of experiences in Software Development")),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Team: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/umc-network"},"https://github.com/umc-network"))),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):")," 2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 0.3 BTC")),(0,i.kt)("h3",{id:"milestone-1--implement-draft-specification"},"Milestone 1 \u2014 Implement Draft Specification"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 3 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-time Equivalent (FTE):")," 2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 0.3 BTC ")),(0,i.kt)("p",null,"The draft specification and a demo will be provided."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"The draft specification.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1a."),(0,i.kt)("td",{parentName:"tr",align:null},"Demo code repo"),(0,i.kt)("td",{parentName:"tr",align:null},"The demo code with Ink!.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1b."),(0,i.kt)("td",{parentName:"tr",align:null},"Tutorial"),(0,i.kt)("td",{parentName:"tr",align:null},"The tutorial of how to use.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"An article on media channels.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"PSP"),(0,i.kt)("td",{parentName:"tr",align:null},"Submit a Polkadot Standards Proposal.")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Join Polkadot related events.  "),(0,i.kt)("li",{parentName:"ul"},"Publish articles on media channels to expose this specification.  "),(0,i.kt)("li",{parentName:"ul"},"Start another project based on this specification.  ")),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("p",null,"A draft idea of this specification was discussed with several other developers."))}c.isMDXComponent=!0}}]);