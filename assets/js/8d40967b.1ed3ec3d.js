"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[1266],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=s(a),c=r,h=d["".concat(p,".").concat(c)]||d[c]||m[c]||o;return a?n.createElement(h,l(l({ref:e},u),{},{components:a})):n.createElement(h,l({ref:e},u))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},31130:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(83117),r=(a(67294),a(3905));const o={},l="Substrate startkit GUI",i={unversionedId:"Applications/substrate_startkit_GUI",id:"Applications/substrate_startkit_GUI",title:"Substrate startkit GUI",description:"Proposer//github.com/MVPWorkshop",source:"@site/docs/Applications/substrate_startkit_GUI.md",sourceDirName:"Applications",slug:"/Applications/substrate_startkit_GUI",permalink:"/grants-test-repository/Applications/substrate_startkit_GUI",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Substrate Core Polywrapper",permalink:"/grants-test-repository/Applications/substrate_core_polywrapper"},next:{title:"SubVT Telegram Bot for Kusama and Polkadot",permalink:"/grants-test-repository/Applications/subvt-telegram-bot"}},p={},s=[{value:"Project Description \ud83d\udcc4",id:"project-description-",level:2},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Milestone 1",id:"milestone-1",level:3},{value:"Milestone 2",id:"milestone-2",level:3},{value:"Long term plans and the target users of such an application",id:"long-term-plans-and-the-target-users-of-such-an-application",level:3}],u={toc:s};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"substrate-startkit-gui"},"Substrate startkit GUI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Proposer:")," MVP Workshop - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/MVPWorkshop"},"https://github.com/MVPWorkshop")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," bc1qltgppjfmvh7yldel9afntnmp358xxnqtxgw7rd ")),(0,r.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,r.kt)("p",null,"Please provide the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A brief description of the project."),(0,r.kt)("p",{parentName:"li"},"The idea is to create a GUI where users can quickly select the runtime pallets, enter their genesis configurations, and satisfy their dependencies without forking the template repository and writing any RUST code. The application would add/remove the necessary files and set configurations and dependencies in the codebase behind the scene. In the end, the user will generate a code base with all the components."),(0,r.kt)("p",{parentName:"li"},"The GUI should have the following features:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Select (drag&drop) pallets"),(0,r.kt)("li",{parentName:"ul"},"Add/Remove pallets from codebase"),(0,r.kt)("li",{parentName:"ul"},"Generate good-enough default configs or enter custom configuration"),(0,r.kt)("li",{parentName:"ul"},"Change pallet dependencies"),(0,r.kt)("li",{parentName:"ul"},"On submit - create Github repo with commit (user enter Github creds)"),(0,r.kt)("li",{parentName:"ul"},"Indicate connected pallets that to go with each other"),(0,r.kt)("li",{parentName:"ul"},"Prevent users from building blockchains that won't compile"),(0,r.kt)("li",{parentName:"ul"},"Pre Built solution for common patterns"),(0,r.kt)("li",{parentName:"ul"},"Tooltips with explanations and links to documentation")),(0,r.kt)("p",{parentName:"li"},"We are considering going with a drag&drop solution. Of course, our design team will come up with the most consistent UX flow during the first phase of the project.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An indication of why this project is good for the ecosystem."),(0,r.kt)("p",{parentName:"li"},"It would make life easier for everyone who wants to kick off their Substrate blockchain and would lower the entry barrier for both experimentation and development with Substrate. Also, the application will have a clear educational purpose for beginners to understand the power of runtime pallets and all the features that you can get just by adding them to your blockchain."))),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Members:")," Djordje Stevanovic, Panto Andjelic, Milica Spasojevic, and other developers/personnel at MVP Workshop if needed to help and/or consult.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"LinkedIn Profiles:")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/djordje-stevanovic-43b61091/"},"https://www.linkedin.com/in/djordje-stevanovic-43b61091/"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/panto-andjelic-088583100/"},"https://www.linkedin.com/in/panto-andjelic-088583100/"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/milica-spasojevic-2a648b40/"},"https://www.linkedin.com/in/milica-spasojevic-2a648b40/"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Open-source Code Repos:")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MVPWorkshop/electionr"},"https://github.com/MVPWorkshop/electionr")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MVPWorkshop/lemon.email-dApp"},"https://github.com/MVPWorkshop/lemon.email-dApp")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MVPWorkshop/badoom-ts"},"https://github.com/MVPWorkshop/badoom-ts"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Website:"),"\t",(0,r.kt)("a",{parentName:"p",href:"https://mvpworkshop.co/"},"https://mvpworkshop.co/"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Legal Structure:")," MVP Workshop doo, Cara Du\u0161ana 51 Zemun, Republic of Serbia")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Team's Experience:")," MVP Workshop is a blockchain product research and development studio. We have more than four years of experience in building decentralized systems.\nFor our clients, we built a vast number of different Dapps and blockchain: "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Celsius Network - ",(0,r.kt)("a",{parentName:"p",href:"https://mvpworkshop.co/wp-content/uploads/2019/07/MVP-Workshop-Celsius-Network-Case-Study.pdf"},"https://mvpworkshop.co/wp-content/uploads/2019/07/MVP-Workshop-Celsius-Network-Case-Study.pdf"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Swarm - ",(0,r.kt)("a",{parentName:"p",href:"https://mvpworkshop.co/wp-content/uploads/2019/08/MVP-Workshop-Swarm-Case-Study.pdf"},"https://mvpworkshop.co/wp-content/uploads/2019/08/MVP-Workshop-Swarm-Case-Study.pdf"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Anchor - ",(0,r.kt)("a",{parentName:"p",href:"https://mvpworkshop.co/wp-content/uploads/2019/12/Anchor-Case-Study.pdf"},"https://mvpworkshop.co/wp-content/uploads/2019/12/Anchor-Case-Study.pdf"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cere Network")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Legaler"),(0,r.kt)("p",{parentName:"li"},"When it comes to Polkadot, we are a member of the Substrate Delivery Partners program and few of our team members are Polkadot ambassadors as of recently. We hosted an online Substrate event - ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=dJLUO7s-n3M&t=2s"},"https://www.youtube.com/watch?v=dJLUO7s-n3M&t=2s"),"\nAlso, organized internal Substrate learning sessions were we modified the democracy runtime pallet to support quadratic voting mechanism - ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MVPWorkshop/substrate-quadratic-democracy"},"https://github.com/MVPWorkshop/substrate-quadratic-democracy"),"\nWe are also members of the Ethereum Enterprise Alliance and the Stellar Development Foundation."))))),(0,r.kt)("p",null,"The UX/UI of the app will be an essential part. So let me share with you some of our previous work on dribbble -",(0,r.kt)("a",{parentName:"p",href:"https://dribbble.com/mvpworkshop"},"https://dribbble.com/mvpworkshop"),"."),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 2 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):")," 2.5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," 3 BTC")),(0,r.kt)("h3",{id:"milestone-1"},"Milestone 1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 1.5 BTC")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Design components for GUI"),(0,r.kt)("td",{parentName:"tr",align:null},"Visual design of application components (in invision)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Design UX flows"),(0,r.kt)("td",{parentName:"tr",align:null},"Create a UX that is pleasant to work with")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Backend"),(0,r.kt)("td",{parentName:"tr",align:null},"postgresSQL database, node.js project setup")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"GUI web application"),(0,r.kt)("td",{parentName:"tr",align:null},"Set React app project structure")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation & specification"),(0,r.kt)("td",{parentName:"tr",align:null},"Explore all the runtime pallets intentions and define their relations in the project documantation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6."),(0,r.kt)("td",{parentName:"tr",align:null},"Github OAUTH2 Integration"),(0,r.kt)("td",{parentName:"tr",align:null},"Integrate Github OAUTH so users can login and later deploy codebase on their account")))),(0,r.kt)("h3",{id:"milestone-2"},"Milestone 2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 1.5 BTC")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"GUI web application"),(0,r.kt)("td",{parentName:"tr",align:null},"React app components")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Github Integration"),(0,r.kt)("td",{parentName:"tr",align:null},"Integrate Github library so the user could generate a initial commit with the code base on his account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Backend"),(0,r.kt)("td",{parentName:"tr",align:null},"API's for handling the code base structure and setting configuration and dependencies with and corresponding tests")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"Demo video"),(0,r.kt)("td",{parentName:"tr",align:null},"Video showcasing how to use the app")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"Describe functionalities and instructions on compiling and running the app, including a feature list and written tutorial.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6."),(0,r.kt)("td",{parentName:"tr",align:null},"Continuous Integration environment"),(0,r.kt)("td",{parentName:"tr",align:null},"Pipeline that build the web applications")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7."),(0,r.kt)("td",{parentName:"tr",align:null},"Automated tests"),(0,r.kt)("td",{parentName:"tr",align:null},"for the whole app")))),(0,r.kt)("p",null,"Deliverables will be dockerized."),(0,r.kt)("h3",{id:"long-term-plans-and-the-target-users-of-such-an-application"},"Long term plans and the target users of such an application"),(0,r.kt)("p",null,"The target users would definitely be beginners and even people that wanna play a bit and not really start a production-ready blockchain. Experienced blockchain devs beginning to build a project with Substrate are probably familiar with how to start, and whoever has to deep dive into the code so they are not the ones that will benefit the most. We didn't consider the possibility of online chain running in this phase of the project, but it could be an option for some future version.\nLooking long term, this GUI would be the place for everyone to quickly get informed on runtime pallets so it should be periodically updated with new information.\nSo the primary purpose is educational but also promotional. We added in the deliverables features focused on education such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tooltips/popups with an explanation of every pallet"),(0,r.kt)("li",{parentName:"ul"},"Links to the substrate docs"),(0,r.kt)("li",{parentName:"ul"},"Video tutorial on how to use the app"),(0,r.kt)("li",{parentName:"ul"},"Documentation with a feature list and written tutorial")))}m.isMDXComponent=!0}}]);