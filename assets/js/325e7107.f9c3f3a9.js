"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[8169],{41958:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var i=a(87462),n=(a(67294),a(3905));a(16758);const l={},r="Generic sybil-resistant faucet",o={unversionedId:"Applications/Faucet",id:"Applications/Faucet",title:"Generic sybil-resistant faucet",description:"- Team Name: MB Karolio reikalai",source:"@site/docs/Applications/Faucet.md",sourceDirName:"Applications",slug:"/Applications/Faucet",permalink:"/grants/Applications/Faucet",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"FIAT on-off-ramp",permalink:"/grants/Applications/FIAT-on-off-ramp"},next:{title:"Fennel Protocol",permalink:"/grants/Applications/Fennel_Protocol"}},s={},u=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Mockup",id:"mockup",level:4},{value:"Technology stack",id:"technology-stack",level:4},{value:"Architecture",id:"architecture",level:4},{value:"Configuration",id:"configuration",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement the Faucet",id:"milestone-1--implement-the-faucet",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],p={toc:u};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"generic-sybil-resistant-faucet"},"Generic sybil-resistant faucet"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Team Name:")," MB Karolio reikalai"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Payment Address:")," 0xc3e6eFA4D0847203dD4E19B7D114516Eb45840EC (DAI)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Level:")," 1")),(0,n.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Sybil-resistant faucet is a generic browser-based faucet solution that can be used on any existing parachain (substrate-based chain, either pallets or ink! smart contracts)."),(0,n.kt)("h3",{id:"project-details"},"Project Details"),(0,n.kt)("h4",{id:"mockup"},"Mockup"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3159964/182354014-6cee3694-af8a-4585-8eaf-348365981716.png",alt:"mockup"})),(0,n.kt)("h4",{id:"technology-stack"},"Technology stack"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Next.js"),(0,n.kt)("li",{parentName:"ul"},"TypeScript"),(0,n.kt)("li",{parentName:"ul"},"Tailwind"),(0,n.kt)("li",{parentName:"ul"},"Redis"),(0,n.kt)("li",{parentName:"ul"},"@polkadot{.js}")),(0,n.kt)("h4",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3159964/182353857-8784b612-154f-458f-b7d8-b81e0fb51f90.png",alt:"architecture"})),(0,n.kt)("h4",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"To make the faucet generic, it will store its configuration settings in ",(0,n.kt)("inlineCode",{parentName:"p"},".env")," file which will include the following settings:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"DRIP_CAP")," - how many tokens to send per drip"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"DRIP_DELAY")," - how often user's can request to drip tokens (in ms)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"REDIS_ENDPOINT")," - Redis instance endpoint"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"RPC_ENDPOINT")," - Substrate node endpoint"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"PORT")," - Substrate node port"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"FAUCET_ACCOUNT_MNEMONIC")," - mnemonic of faucet's wallet"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"NEXTAUTH_ENDPOINT")," - authentication endpoint"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"NEXTAUTH_JWT_SECRET")," - used to encrypt JWT tokens"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"TWITTER_CLIENT_ID")," - Twitter client ID"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"TWITTER_CLIENT_SECRET")," - Twitter client secret"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GITHUB_CLIENT_ID")," - GitHub client ID"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GITHUB_CLIENT_SECRET")," - GitHub client secret")),(0,n.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,n.kt)("p",null,"Many dApps are facing an issue where it\u2019s difficult to onboard new users. Thus, the goal is to simplify the process by making it easier for parachain and dApp developers to spin up their own faucets, and give users free tokens without people exploiting the system. In order to make the system sybil-resistant, centralised solutions like Twitter or GitHub login will be integrated, that will uniquely identify users, and enable dripping tokens to the account only once per given time period."),(0,n.kt)("p",null,"Some similar projects include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate-matrix-faucet"},"https://github.com/paritytech/substrate-matrix-faucet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/OAXFoundation/substrate-faucet"},"https://github.com/OAXFoundation/substrate-faucet"))),(0,n.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,n.kt)("h3",{id:"team-members"},"Team members"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Karolis Ramanauskas: full-stack developer & product designer")),(0,n.kt)("h3",{id:"contact"},"Contact"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact Name:")," Karolis Ramanauskas"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,n.kt)("a",{parentName:"li",href:"mailto:hi@krl.is"},"hi@krl.is")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Website:")," ",(0,n.kt)("a",{parentName:"li",href:"https://krl.is/"},"https://krl.is/"))),(0,n.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Registered Address:")," Liep\u0173 g. 83, Klaip\u0117da 92195"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," MB Karolio reikalai")),(0,n.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,n.kt)("p",null,"Karolis is product-minded software engineer who enjoys the challenge of creating pleasant, easy-to-use user experiences. He has worked on large-scale projects for his employers, as well as side-projects of his own. Some of the most notable experiences include building observability tools used by thousands of engineers at Uber that alert and help resolve new incidents, and enable to build more reliable services. He has also worked on a design system for Volvo Cars, and then became responsible for building tools to replace existing translation processes at the company to make them more effective."),(0,n.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/karooolis"},"https://github.com/karooolis"))))),(0,n.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/karolisram/"},"https://www.linkedin.com/in/karolisram/"))))),(0,n.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,n.kt)("h3",{id:"overview-1"},"Overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 1 month"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  1 FTE"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Costs:")," 4,000 USD")),(0,n.kt)("h3",{id:"milestone-1--implement-the-faucet"},"Milestone 1 \u2014 Implement the Faucet"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated duration:")," 1 month"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FTE:")," 1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," 4,000 USD")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,n.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,n.kt)("td",{parentName:"tr",align:null},"License"),(0,n.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,n.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,n.kt)("td",{parentName:"tr",align:null},"I will provide both ",(0,n.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a ",(0,n.kt)("strong",{parentName:"td"},"tutorial")," that explains how a developer can spin up his/her own faucet.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,n.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,n.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, I will describe how to run these tests.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,n.kt)("td",{parentName:"tr",align:null},"Article"),(0,n.kt)("td",{parentName:"tr",align:null},"I will publish an ",(0,n.kt)("strong",{parentName:"td"},"article")," that explains how the faucet works, why it was created, and how it can be used by developers.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1."),(0,n.kt)("td",{parentName:"tr",align:null},"User Interface"),(0,n.kt)("td",{parentName:"tr",align:null},"I will create faucet UI with Tailwind. It will include address form, login buttons, as well as error and success states.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"2."),(0,n.kt)("td",{parentName:"tr",align:null},"Authentication"),(0,n.kt)("td",{parentName:"tr",align:null},"I will create a module for 0Auth user authentication that will uniquely identify users and make faucet sybil-resistant.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"3."),(0,n.kt)("td",{parentName:"tr",align:null},"User status"),(0,n.kt)("td",{parentName:"tr",align:null},"I will create a module for checking whether user is eligible to receive free tokens.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"4."),(0,n.kt)("td",{parentName:"tr",align:null},"Faucet drip"),(0,n.kt)("td",{parentName:"tr",align:null},"I wil create a module that will send user free tokens if eligible.")))),(0,n.kt)("h2",{id:"future-plans"},"Future Plans"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Keep adding additional 0Auth options or other features if needed."),(0,n.kt)("li",{parentName:"ul"},"Keep maintaining the project in case of potential issues.")),(0,n.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," Developer DAO"))}m.isMDXComponent=!0}}]);