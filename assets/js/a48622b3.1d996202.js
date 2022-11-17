"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[9830],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(a),d=r,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||l;return a?n.createElement(k,o(o({ref:t},m),{},{components:a})):n.createElement(k,o({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},48139:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(83117),r=(a(67294),a(3905));const l={},o="DOT PAY",i={unversionedId:"Applications/DotPay",id:"Applications/DotPay",title:"DOT PAY",description:"- Team Name: Crypto Pay Lab (CPL)",source:"@site/docs/Applications/DotPay.md",sourceDirName:"Applications",slug:"/Applications/DotPay",permalink:"/grants-test-repository/docs/Applications/DotPay",draft:!1,editUrl:"https://github.com/w3f/grants-test-repository/edit/master/docs/Applications/DotPay.md",tags:[],version:"current",lastUpdatedBy:"Sebastian M\xfcller",lastUpdatedAt:1668007993,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Distributed Key Management",permalink:"/grants-test-repository/docs/Applications/DistributedKeyManagement"},next:{title:"DotPulse",permalink:"/grants-test-repository/docs/Applications/DotPulse"}},p={},s=[{value:"Overview",id:"overview",level:3},{value:"Why Dotpay",id:"why-dotpay",level:4},{value:"What is Dotpay",id:"what-is-dotpay",level:4},{value:"Project Details",id:"project-details",level:3},{value:"Flow-process diagram",id:"flow-process-diagram",level:3},{value:"Data models / API specifications of the core functionality",id:"data-models--api-specifications-of-the-core-functionality",level:3},{value:"An overview of the technology stack to be used",id:"an-overview-of-the-technology-stack-to-be-used",level:3},{value:"Key Functions",id:"key-functions",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team :busts_in_silhouette",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Team&#39;s Experience",id:"teams-experience",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap :nut_and_bolt",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 User account management &amp; repo management &amp; mnemonic management",id:"milestone-1--user-account-management--repo-management--mnemonic-management",level:3},{value:"Milestone 2 \u2014 Transfer module, task module, informal, withdraw module",id:"milestone-2--transfer-module-task-module-informal-withdraw-module",level:3},{value:"Development Status",id:"development-status",level:2},{value:"Future Plans",id:"future-plans",level:2},{value:"FAQ",id:"faq",level:2}],m={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dot-pay"},"DOT PAY"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," Crypto Pay Lab (CPL)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:"),"  3CnxDH6myTaK6MVy3SawVF2FC6FdgfK8pj \uff08BTC address\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Level]",":")," 2")),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("h4",{id:"why-dotpay"},"Why Dotpay"),(0,r.kt)("p",null,"Many developers love open source very much, but they have no way to devote themselves to the construction of open source,"),(0,r.kt)("p",null,"because they can't get enough compensation for users' lives in the process of contributing to open source projects, so they must be employed by a certain company."),(0,r.kt)("p",null,"We hope to use the power of blockchain to change this status quo."),(0,r.kt)("p",null,"The owner of an open source project can initiate paid tasks, and developers can complete tasks to get paid."),(0,r.kt)("p",null,"Note that it is not a tip. This will allow more power to participate in open source projects and make open source projects better."),(0,r.kt)("p",null,"The development of the company generates greater value, and then more funds can be used to pay developers to form a virtuous circle."),(0,r.kt)("h4",{id:"what-is-dotpay"},"What is Dotpay"),(0,r.kt)("p",null,"DotPay is a platform that supports paid tasks to complete open source projects on Github."),(0,r.kt)("p",null,"Our mission is to make open source better with the Polkadot ecosystem:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Attract more Github developers, especially who are not familiar with blockchain to expand the user-number of Polkadot ecosystem."),(0,r.kt)("li",{parentName:"ul"},"Earn DOT tokens by completing open source tasks to encourage Github developers to communicate, cooperate and innovate with each other.")),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("p",null,"Page 1: task list\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/94216827/142724732-b7675c28-bfbb-492d-9f9e-e7ba53c9f4a0.png",alt:"image"})),(0,r.kt)("p",null,"Page 2: Configure Github webhook\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/94216827/142724798-20a0409d-195a-47b9-ba3b-01c6c647eab5.png",alt:"image"})),(0,r.kt)("p",null,"Page 3: Recharge\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/94216827/142724518-a22d1760-eeb8-4399-b0ac-e04348002beb.png",alt:"image"})),(0,r.kt)("p",null,"Page 4: Creat tasks and trigger the payment\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/94216827/142757369-7bb816ae-b834-4a80-a562-8bb21da0624f.png",alt:"image"})),(0,r.kt)("p",null,"Page 5: Bind reward address"),(0,r.kt)("p",null,"If the developer has not bound the address before,\nthe system will prompt him to use the following instructions to bind,\njust reply to similar instructions like ",(0,r.kt)("inlineCode",{parentName:"p"},"/dotpay bind [address]")," in the issue corresponding to the task"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/94216827/145700577-bb02ef26-cebd-4516-bc9b-772a90f36b68.png",alt:"image"})),(0,r.kt)("h3",{id:"flow-process-diagram"},"Flow-process diagram"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/94216827/142736787-f9bdb340-8703-48b5-9b5a-24dd70f42f08.png",alt:"image"})),(0,r.kt)("p",null,"DotPay is a payment platform, you can initiate open source tasks and paid with DOT tokens  (for example, you can initiate paid collaboration tasks when you encounter difficulties in architecture construction, requirements analysis, document construction and testing). Those who complete the tasks as required can receive tokens after the task initiator verifies that the tasks are completed"),(0,r.kt)("p",null,"The specific process is as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Alice recharge Dot tokens on the platform."),(0,r.kt)("li",{parentName:"ol"},"Alice initiates paid open source tasks on the Github (such as the task about architecture construction, requirements analysis, document construction, development and testing, etc )"),(0,r.kt)("li",{parentName:"ol"},"Bob accepted this task on Github and completed it!"),(0,r.kt)("li",{parentName:"ol"},"Alice clicks on the payment instruction.\nGithub receives the instruction and trigger the webhook to contact Bob by email and other notification methods to notify that 10 DOT tokens have been put into our platform\nExclusive account Wallet."),(0,r.kt)("li",{parentName:"ol"},"Call Polkadot API for on-chain transfer."),(0,r.kt)("li",{parentName:"ol"},"Bob withdraws 10 DOT tokens from our platform to his wallet(such as Polkawallet or MetaMask), if Bob already bind his own address, will transfer DOT to his account directly.")),(0,r.kt)("h3",{id:"data-models--api-specifications-of-the-core-functionality"},"Data models / API specifications of the core functionality"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Create tasks")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "id": "issue id",\n  "name": "issue name",\n  "repo": "paritytech/substrate",\n  "author": "gavofyork",\n  "pay": "10DOT",\n  "describe": "issue overview",\n  "createTime": "",\n  "updataTime": "",\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Apply task")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n   "issueID": "issue id",\n   "applier": "Bob",\n   "applyTime": ""\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Payment")),(0,r.kt)("p",null,"Command line in issue reply: ",(0,r.kt)("inlineCode",{parentName:"p"},"/pay Bob 10DOT")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n   "id": "payment id",\n   "from": "Alice",\n   "to": "Bob",\n   "amount": "10DOT",\n   "RMKS": "Alice pay bob",\n}\n')),(0,r.kt)("h3",{id:"an-overview-of-the-technology-stack-to-be-used"},"An overview of the technology stack to be used"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Font-end, typescipt,react"),(0,r.kt)("li",{parentName:"ul"},"Backend, golang,Rust"),(0,r.kt)("li",{parentName:"ul"},"Devops, github action, kubenretes"),(0,r.kt)("li",{parentName:"ul"},"Search, MeiliSearch")),(0,r.kt)("h3",{id:"key-functions"},"Key Functions"),(0,r.kt)("ol",{start:0},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"User management"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Using github OAuth2 login, user group management."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Email / Issue informal"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Imformal user to withdraw their DOT tokens."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Webhook sever"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Github webhook management, listen events and trigger payment."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Transfer module"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Transfer by calling the API of the chain."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Recharge / Withdraw"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"User recharge DOT tokens if they want to pay others on Github."),(0,r.kt)("li",{parentName:"ul"},"User withdraw  DOT tokens to their own wallet."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Issue search"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Users can find and filter paid collaboration tasks that meet their requirements in the issue search form."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Payment secrect management"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Create it on DotPay website and config it to github secrect to pay user DOT."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Recharge & transfer by ink! contract"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set the maximum amount and maximum total amount for each transaction\nset_limit(per_transfer_amount, total_transfer_amount)\nOnly the owner of the project has the calling permission")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set up the transfer whitelist\nset_witelist(username, address)\nOnly the owner of the project has the calling permission")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Transfer interface\ntransfer(address,amount)\nThe platform has the calling permission"))),(0,r.kt)("p",null,"Benefits of this design:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The platform no longer needs the owner to recharge, just need to sign a contract with the owner"),(0,r.kt)("li",{parentName:"ul"},"The platform does not have the authority to set a whitelist, ensuring that the platform cannot transfer funds to addresses other than the whitelist set by the owner"),(0,r.kt)("li",{parentName:"ul"},"The single maximum amount and the total amount set to a certain extent ensure the safety of the owner's funds")),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("p",null,"As far as I am concerned, there are no similar projects in Polkadot ecosystem."),(0,r.kt)("p",null,"Maybe we have some similarities with dotmarket, there are still many differences to compare with dotmarket,"),(0,r.kt)("p",null,"dotpay will focus on open-source payment collaboration, deep integration with GitHub, closer to end-users\uff0c"),(0,r.kt)("p",null,"what's more important is we prefer to realize open source payment cooperation in Polkadot ecosystem."),(0,r.kt)("p",null,"As we all know Polkadot offers flexible cross-chain interoperation functionality with a large user base and volume expectation,"),(0,r.kt)("p",null,"and as a mainstream cryptocurrency with high market value, DOT tokens is easier for developers to accept and be recognized\uff0c"),(0,r.kt)("p",null,"we also believe that we will attract more Github developers especially who not familiar with blockchain to join and expand the user-number of Polkadot ecosystem."),(0,r.kt)("p",null,"And we also look forward to cooperating with dotmarket in the future."),(0,r.kt)("h2",{id:"team-busts_in_silhouette"},"Team :busts_in_silhouette"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("p",null,"We will pleased to offer github accounts, LinkedIn and any other information in private."),(0,r.kt)("p",null,"All team members can contact privately for any specific information."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Richard Fang: team leader, core developer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fugen Wang: Background development"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"responsible for the development of the website background."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Yang Li:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Responsible for front-end development."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Peng Qiao: Rust developer"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Responsible for back-end development, relevant development of blockchain, payment task management module, and docking API and key management module on the chain."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Wei Zhang:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Responsible for operation, promotion in the open source community after the website is launched, and attracting open source projects to use our services."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"AdaLam:  PD/PMO  "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Responsible for product design and project schedule management.")))),(0,r.kt)("h3",{id:"teams-experience"},"Team's Experience"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Richard Fang:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"As an expert in the field of cloud computing in one of the biggested Internet listed companies with 7 years of rich working  experience."),(0,r.kt)("li",{parentName:"ul"},"The author of a well-known cloud native project which has more than 5K stars and 4k paid enterprise users."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fugen Wang:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CEO of an Internet start-up company and manages more than a dozen employees with 7 years working experience."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Yang Li:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Andriod/IOS front-end engineer with 5 years working experience."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Peng Qiao:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A core member of AI Research Institute wich is one of the top AI listed companies in China with 5 years working experience."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Wei Zhang:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"An advertising director, one of the top AI listed companies in China with 7 years of rich working experience."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"AdaLam: PD/PMO"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Familiar with product design and project schedule management.")))),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Contact Name:"),"  AdaLam")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"p",href:"mailto:adalamlzy@gmail.com"},"adalamlzy@gmail.com"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Website:"),"  comming soon")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Contact Name:")," Richard Fang")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"p",href:"mailto:lamelegdog@gmail.com"},"lamelegdog@gmail.com")))),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("p",null,"We will be pleased to offer specific information in private."),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/bytepayment"},"https://github.com/bytepayment")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/bytepayment/bytepay"},"https://github.com/bytepayment/bytepay"),"  "),(0,r.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,r.kt)("p",null,"We will provid in private through Google Form."),(0,r.kt)("h2",{id:"development-roadmap-nut_and_bolt"},"Development Roadmap :nut_and_bolt"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 8 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):"),"  5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:"),"  30,000 USD")),(0,r.kt)("h3",{id:"milestone-1--user-account-management--repo-management--mnemonic-management"},"Milestone 1 \u2014 User account management & repo management & mnemonic management"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 4 weeks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:"),"  15,000 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"Dotpay user guide, workflow, and what is dotpay.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide uni test for user management and recharge management modules(70% cover), the two module UI test report")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide Dockerfile and docker image to run the website in one command line")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"User management, create an polkadot account for each developer"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide login function, you can login our website using github, and we will create an polkadot account for each user by default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Repo & webhook management"),(0,r.kt)("td",{parentName:"tr",align:null},"We will fetch your github repo list, so you can active the repo you want integrate with polkadot, the webhook module will listen the pay event and tigger transform module to pay developer DOT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Address binding"),(0,r.kt)("td",{parentName:"tr",align:null},"Develop using github issue comment to bind there polkadot address. ",(0,r.kt)("inlineCode",{parentName:"td"},"/dotpay bind [address]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"Recharge management"),(0,r.kt)("td",{parentName:"tr",align:null},"Recharge DOT to your platform account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5."),(0,r.kt)("td",{parentName:"tr",align:null},"Transfer ink! contract"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide an tested ink! contract on Substrate Smart Contracts Node, provide transfer limit, witelist and transfer function. The platform will integrate the contract when the Polkadot mainnet contract para chain is available.")))),(0,r.kt)("h3",{id:"milestone-2--transfer-module-task-module-informal-withdraw-module"},"Milestone 2 \u2014 Transfer module, task module, informal, withdraw module"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 4 weeks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:"),"  15,000 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide docs about how to create a task, how to tigger the payment, and how to withdraw")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide uni test for task,transfer,informal,withdraw modules(70% cover), and UI test report")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide Dockerfile and docker image to run the website in one command line, and you can to test those modules")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Task management"),(0,r.kt)("td",{parentName:"tr",align:null},"Create a paid task by comment an issue, it will trigger the create task event though the webhook, and webhook server will save the task and show it on our page, when developer complete the task, will tigger transfer module to pay the developer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Tansfer module"),(0,r.kt)("td",{parentName:"tr",align:null},"Trigger a payment by comment an issue, like ",(0,r.kt)("inlineCode",{parentName:"td"},"/pay Bob 10DOT"),", the DOT will transfer to developer platform account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Withdraw module"),(0,r.kt)("td",{parentName:"tr",align:null},"Withdraw the DOT from our platform to developer own wallet, if developer bind it own address, payment will transfer to the account directly")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"Informal"),(0,r.kt)("td",{parentName:"tr",align:null},"Developer will receive the event, tell him how to withdraw DOT in our platform, robot will send Bob email and comment the issue")))),(0,r.kt)("h2",{id:"development-status"},"Development Status"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/bytepayment/bytepay"},"https://github.com/bytepayment/bytepay")),(0,r.kt)("p",null,"We have developed the webhook event processing module.\nThe following is a brief description of what the repository contains:\nIncluding GitHub webhook server\uff0cit can listen to GitHub events, handle some specific instructions in the issue, and extend the instruction processor."),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"About our future plan, we will support more payment scenarios, such as website recharge VIP and online payment to buy goods after completing this grant."),(0,r.kt)("li",{parentName:"ul"},"And then, we are going to support more platforms to expand the number of users, not only completing paid tasks on Github , but also on Telegram, Discord, Twitter, etc,\nand we also have an idea that cross-chain cooperation with other project."),(0,r.kt)("li",{parentName:"ul"},"After that, We will launch our own Polkadot para-chain tokens and the open source developers will receive  tokens by completing the paid tasks on Github.")),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Why not use Paypal?")),(0,r.kt)("p",null,"Paypal has obvious borders for global developer collaboration, and it is not convenient to use."),(0,r.kt)("p",null,"In fact, we did similar attempts at the earliest and found that many countries do not use Paypal at all."),(0,r.kt)("p",null,"And we hope that open source paid collaboration More decentralized rather than relying on a certain company."))}u.isMDXComponent=!0}}]);