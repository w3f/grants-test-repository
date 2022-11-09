"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[8691],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},11142:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={},o="W3F Grant Proposal",l={unversionedId:"Applications/sequester",id:"Applications/sequester",isDocsHomePage:!1,title:"W3F Grant Proposal",description:"- Project Name: Sequester",source:"@site/docs/Applications/sequester.md",sourceDirName:"Applications",slug:"/Applications/sequester",permalink:"/grants-test-repository/docs/Applications/sequester",editUrl:"https://github.com/w3f/grants-test-repository/edit/master/docs/Applications/sequester.md",tags:[],version:"current",lastUpdatedBy:"Sebastian M\xfcller",lastUpdatedAt:1667994768,formattedLastUpdatedAt:"11/9/2022",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Open Grant Proposal",permalink:"/grants-test-repository/docs/Applications/sensio_network"},next:{title:"W3F Grant Proposal",permalink:"/grants-test-repository/docs/Applications/setheum-launchpad-crowdsales-pallet"}},s=[{value:"Project Overview",id:"project-overview",children:[{value:"Overview",id:"overview",children:[]},{value:"Project Details",id:"project-details",children:[]},{value:"Ecosystem Fit",id:"ecosystem-fit",children:[]}]},{value:"Team",id:"team",children:[{value:"Team members",id:"team-members",children:[]},{value:"Contact",id:"contact",children:[]},{value:"Legal Structure",id:"legal-structure",children:[]},{value:"Team&#39;s experience",id:"teams-experience",children:[]},{value:"Team Github Repos",id:"team-github-repos",children:[]},{value:"Individual Github Repos",id:"individual-github-repos",children:[]},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",children:[]}]},{value:"Development Status",id:"development-status",children:[]},{value:"Development Roadmap",id:"development-roadmap",children:[{value:"Overview",id:"overview-1",children:[]},{value:"Milestone 1",id:"milestone-1",children:[]}]},{value:"Future Plans",id:"future-plans",children:[]},{value:"Additional Information",id:"additional-information",children:[]}],d={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"w3f-grant-proposal"},"W3F Grant Proposal"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Project Name:")," Sequester"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," Sequester"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," bc1quup4v5el5s7m6szh24d6sn6cl25yjvr8mlymnt"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,r.kt)("h2",{id:"project-overview"},"Project Overview"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Since Polkadot-based chains are fee-optional, transaction fees currently being used as an anti-spam mechanism can be leveraged to make every transaction on Polkadot carbon negative, without requiring any changes to the user experience. We propose a common good parathread on Polkadot, named Sequester, that provides the functionality of aggregating transaction fees, exchanging them into carbon-backed tokens, and retiring underlying carbon offsets that meet the community\u2019s specifications."),(0,r.kt)("p",null,"Sequester is a toolkit that will allow any chain in the Polkadot ecosystem to easily buy carbon-backed assets and retire associated carbon credits. By retiring these carbon credits, we aim to incentivize the creation of more high-quality carbon reduction projects by substantially increasing demand and the economic viability of this work."),(0,r.kt)("p",null,"Due to Polkadot\u2019s shared security model, the network is uniquely positioned to utilize existing network activity to natively power a carbon sink. With the widespread adoption of Sequester across its growing ecosystem, Polkadot has the potential to power one of the largest carbon-offsetting entities worldwide."),(0,r.kt)("p",null,"For more information, see our full ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/15L7bO8dnx1XvWpS6ZRi4wEmSTV5yEnON_wEhaGJnHpQ/"},"white paper"),"."),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("p",null,"To allow chains to sustainably leverage their transaction fees to buy carbon credits on-chain, we will need to handle:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Receiving tokens sent from other chains"),(0,r.kt)("li",{parentName:"ol"},"Exchanging those tokens into carbon-backed tokens, and"),(0,r.kt)("li",{parentName:"ol"},"Initiating retirement of the underlying assets for the carbon-backed tokens")),(0,r.kt)("p",null,"This grant addresses step 1. Specifically, we will implement a pallet that will calculate a chain\u2019s transaction fees over a period of time and allow any chain connected to Polkadot or Kusama to send a percentage of them to Sequester."),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("p",null,"Sequester is building the infrastructure to allow any chain in Dotsama to donate a portion of their transaction fees towards buying and retiring carbon-backed assets.  We aim to provide parachain developers a simple way to integrate Sequester\u2019s functionalities into their chain.  We hope to lead the charge in implementing Polkadot\u2019s environmental strategy. With the widespread adoption of Sequester across its growing ecosystem, Polkadot has the potential to be one of the largest carbon-offsetting entities worldwide. We visualize and explain this process in the diagram below:"),(0,r.kt)("img",{alt:"High-Level Diagram Detailing Sequester\u2019s Role in the Polkadot Ecosystem",src:"https://user-images.githubusercontent.com/16585653/167210224-2c3692f0-ec2c-47d5-b7ae-b4df1a1bee11.png",style:{display:"block","margin-left":"auto","margin-right":"auto",width:"80%"}}),(0,r.kt)("h2",{id:"team"},"Team"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Brendan Edelson - Full Stack Developer"),(0,r.kt)("li",{parentName:"ul"},"Ethan Brown - Full Stack Developer")),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Sequester Team"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"li",href:"mailto:sequester.chain@gmail.com"},"sequester.chain@gmail.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Website"),": Coming Soon (tbd)")),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Address:")," UniSearch Inc. 800 N. State Street, Suite 403, Dover, DE 19901, United States"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Sequester Chain LLC.")),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Brendan Edelson - Software Engineer at CTRL-Labs. Bachelor of Science, Computer Science from Stanford University."),(0,r.kt)("li",{parentName:"ul"},"Ethan Brown - Software Engineer at Instagram. Bachelor of Science, Computer Science from Stanford University.")),(0,r.kt)("h3",{id:"team-github-repos"},"Team Github Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Code for the pallet will live here: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SequesterChain/pallets"},"https://github.com/SequesterChain/pallets")),(0,r.kt)("li",{parentName:"ul"},"Code for the Sequester chain will live here: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SequesterChain/Sequester-node"},"https://github.com/SequesterChain/Sequester-node"))),(0,r.kt)("h3",{id:"individual-github-repos"},"Individual Github Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Brendan: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/brendanedelson"},"https://github.com/brendanedelson")),(0,r.kt)("li",{parentName:"ul"},"Ethan: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/esbrown"},"https://github.com/esbrown"))),(0,r.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Brendan: \u200b\u200b",(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/brendanedelson/"},"https://www.linkedin.com/in/brendanedelson/")),(0,r.kt)("li",{parentName:"ul"},"Ethan: ",(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/ethanbrown2/"},"https://www.linkedin.com/in/ethanbrown2/"))),(0,r.kt)("h2",{id:"development-status"},"Development Status"),(0,r.kt)("p",null,"For the past two+ months, we have been fleshing out the technical implementation details and meeting regularly with several members of Web3 Foundation and Parity Technologies: Marta Moranduzzo, Joe Petrowski, Raul Romanutti, Otar Shakarishvili, and a one-off intro meeting with David Hawaig."),(0,r.kt)("p",null,"The Bitgreen team will be our initial ecosystem partner and will be responsible for bridging Carbon Credits on-chain in a sustainable manner."),(0,r.kt)("p",null,"We also attended the AmsterDOT conference and established working connections with several parachain teams in the ecosystem."),(0,r.kt)("h2",{id:"development-roadmap"},"Development Roadmap"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated duration:")," 5 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Effort:"),"  2 FTE"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," $25000")),(0,r.kt)("h3",{id:"milestone-1"},"Milestone 1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 5 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Effort:"),"  2 FTE"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," $25000")),(0,r.kt)("p",null,"Goal - Implement a pallet that allows chains to calculate transaction fees used on-chain during a period of time and send those funds from their treasury via XCM to the Sequester chain."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide documentation on how to add our pallet to a Substrate chain and an overview of the configuration options.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing"),(0,r.kt)("td",{parentName:"tr",align:null},"Our code will have full unit-test coverage to ensure functionality and robustness. We will also provide documentation describing how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) to run a test node in order to test that our pallet functions correctly.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Calculate Transaction Fees"),(0,r.kt)("td",{parentName:"tr",align:null},"Inside our pallet, we will create a method that calculates the transaction fees over a period of x blocks. For the fee-calculation, we will be using an off-chain worker to index the transaction fees on a per-block basis and store that calculation in off-chain storage.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Send to Sequester"),(0,r.kt)("td",{parentName:"tr",align:null},"Implement a method that will retrieve the sum of transaction fees from offchain-storage and will send a percentage (a configurable variable) of them to Sequester's chain via XCM every x blocks (also a configurable variable). This transfer process will be automated so that no manual transfer will be needed by the parachain through governance. This method will also handle resetting the proper off-chain variables.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Article/Tutorial"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a full tutorial outlining how to add the pallet to your chain. This will be added to the wiki of the sequester website.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"Weight estimation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide reasonable weight estimations, e.g., using benchmarking.")))),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Creation of Common-Good Chain to receive tokens from chains that implement the Transaction Fee pallet"),(0,r.kt)("li",{parentName:"ol"},"Integration with leading ecosystem DEX to swap substrate tokens for carbon credit-backed tokens"),(0,r.kt)("li",{parentName:"ol"},"Auditing and security analysis of Sequester chain and pallet"),(0,r.kt)("li",{parentName:"ol"},"Sequester website to host our documentation and wikis to allow easy onboarding for other chains"),(0,r.kt)("li",{parentName:"ol"},"Onboarding of Sequester onto Kusama"),(0,r.kt)("li",{parentName:"ol"},"Integration with our first parachain partner for initiating carbon retirement functionality"),(0,r.kt)("li",{parentName:"ol"},"Onboarding of partner Parachain teams"),(0,r.kt)("li",{parentName:"ol"},"Onboarding of Sequester onto Polkadot"),(0,r.kt)("li",{parentName:"ol"},"UI for visualizing Sequester\u2019s impact"),(0,r.kt)("li",{parentName:"ol"},"Integration with future partners and increased offerings of ESG tokens")),(0,r.kt)("h2",{id:"additional-information"},"Additional Information"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," Personal Recommendation"))}c.isMDXComponent=!0}}]);