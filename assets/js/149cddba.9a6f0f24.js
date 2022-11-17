"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[1937],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,k=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return a?n.createElement(k,o(o({ref:t},m),{},{components:a})):n.createElement(k,o({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},91797:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(83117),r=(a(67294),a(3905));const i={},o="Pallet-dPoS for Parachain Staking",l={unversionedId:"Applications/parachain-staking",id:"Applications/parachain-staking",title:"Pallet-dPoS for Parachain Staking",description:"Proposer:* Moonbeam Network",source:"@site/docs/Applications/parachain-staking.md",sourceDirName:"Applications",slug:"/Applications/parachain-staking",permalink:"/grants-test-repository/docs/Applications/parachain-staking",draft:!1,editUrl:"https://github.com/w3f/grants-test-repository/edit/master/docs/Applications/parachain-staking.md",tags:[],version:"current",lastUpdatedBy:"Sebastian M\xfcller",lastUpdatedAt:1668007993,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"PANIC",permalink:"/grants-test-repository/docs/Applications/panic"},next:{title:"The Parami Protocol",permalink:"/grants-test-repository/docs/Applications/parami-protocol"}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Background",id:"background",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Milestone 1: Improve Parachain-Staking Pallet",id:"milestone-1-improve-parachain-staking-pallet",level:3},{value:"Milestone 2: Parachain-Staking Polkadot-JS UI",id:"milestone-2-parachain-staking-polkadot-js-ui",level:3},{value:"Additional Information \u2795",id:"additional-information-",level:2}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pallet-dpos-for-parachain-staking"},"Pallet-dPoS for Parachain Staking"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/PureStake/moonbeam"},"Moonbeam Network")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," 0x9a66721302d9f30a9d11cf48a09c7ef1a842b5c8")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("p",null,"Moonbeam is an Ethereum-compatible parachain built with Substrate. Since January 2021, Moonbeam's runtime developer team has written and maintained a delegated Proof of Stake (dPoS) implementation designed specifically for parachains called ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/PureStake/moonbeam/tree/master/pallets/parachain-staking/src"},(0,r.kt)("inlineCode",{parentName:"a"},"parachain-staking")),". To make this code useful for other parachain teams, Moonbeam is applying for ecosystem funding to extend, benchmark, and document its dPoS implementation."),(0,r.kt)("h3",{id:"background"},"Background"),(0,r.kt)("p",null,"In the Polkadot consensus model, parachains have different requirements and constraints than the relay chain. While ",(0,r.kt)("inlineCode",{parentName:"p"},"frame/pallet-staking")," offers many features necessary for relay chain consensus and shared security, it is overkill for parachains, which operate with more limited execution resources."),(0,r.kt)("p",null,"Instead of running an on-chain election, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/PureStake/moonbeam/tree/master/pallets/parachain-staking/src"},(0,r.kt)("inlineCode",{parentName:"a"},"parachain-staking"))," implements direct delegation with a bounded number of nominations per ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountId")," (maximum of ",(0,r.kt)("inlineCode",{parentName:"p"},"Config::MaxCollatorsPerNominator")," per account). In this paradigm, token holders (nominators) express exactly which collator candidates they would like to support and with what quantity of stake."),(0,r.kt)("p",null,"There is a new round every ",(0,r.kt)("inlineCode",{parentName:"p"},"<Round<T>>::get().length = 600")," blocks. At the start of each round, the top ",(0,r.kt)("inlineCode",{parentName:"p"},"<TotalSelected<T>>::get() = 16")," collator candidates (in terms of total backing stake) are chosen to be in the active collator set. At every block, a subset of this active collator set is chosen pseudorandomly by the ",(0,r.kt)("inlineCode",{parentName:"p"},"author-filter")," pallet as valid block authors. Only valid block authors can produce blocks."),(0,r.kt)("p",null,"Block authors are logged via the ",(0,r.kt)("inlineCode",{parentName:"p"},"set_author_inherent")," method in the ",(0,r.kt)("inlineCode",{parentName:"p"},"author-inherent")," pallet. The logic in this runtime method reports each block author to ",(0,r.kt)("inlineCode",{parentName:"p"},"parachain-staking"),", which distributes inflation rewards after a 2 round delay."),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Members:")," Derek Yoo, Alan Sapede, Antoine Estienne, Joshy Orndorff, Amar Singh"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LinkedIn Profiles"),": ",(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/derek-yoo-8a050/"},"https://www.linkedin.com/in/derek-yoo-8a050/"),", ",(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/alansapede/"},"https://www.linkedin.com/in/alansapede/"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Code Repos:")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/PureStake/moonbeam"},"https://github.com/PureStake/moonbeam")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Website:")," ",(0,r.kt)("a",{parentName:"li",href:"https://www.purestake.com/"},"https://www.purestake.com/"),", ",(0,r.kt)("a",{parentName:"li",href:"https://moonbeam.network/"},"https://moonbeam.network/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Legal Structure:")," PureStake Ltd, Floor 4, Willow House, Cricket Square, Grand Cayman, KY1-9010, Cayman Islands"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team's Experience:")," ")),(0,r.kt)("p",null,"The PureStake team has extensive experience developing and delivering complex web2 software systems. In the last year, PureStake has built a number of web3 infrastructure projects including Algorand API Services (",(0,r.kt)("a",{parentName:"p",href:"https://developer.purestake.io/"},"https://developer.purestake.io/"),") and the Goalseeker block explorer (",(0,r.kt)("a",{parentName:"p",href:"https://goalseeker.purestake.io/"},"https://goalseeker.purestake.io/"),"), among others."),(0,r.kt)("p",null,"Derek co-founded Fuze in 2006 and as CTO was responsible for engineering, technical operations, product management, and design as the company grew over time into a 700 person cloud business. Alan was responsible for large parts of the Fuze cloud backend. Before joining Fuze, Alan was on the Google Streetview Team and also worked at NVidia developing drivers."),(0,r.kt)("p",null,"Antoine has been developing Web3 Dapps since 2016. He has participated in 3 projects inside ConsenSys (VariabL, Localties and Fathom) and helped HyperNetwork build their token system. Now, he's working for Moonbeam and has contributed to the polkadot-js suite (apps, common, api, etc)."),(0,r.kt)("p",null,"Joshy and Amar worked at Parity on the Substrate Recipes."),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 6 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):")," 2 FTE"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," 30000 DAI")),(0,r.kt)("p",null,"Both milestones will be worked on in parallel, but UI development will lag changes to the pallet implementation."),(0,r.kt)("h3",{id:"milestone-1-improve-parachain-staking-pallet"},"Milestone 1: Improve Parachain-Staking Pallet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 4 weeks "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 20000 DAI")),(0,r.kt)("p",null,"In addition to updating Rust crate-level docs and ",(0,r.kt)("a",{parentName:"p",href:"https://meta5.world/stake-docs/"},"outdated user-level docs")," in step (5), we will also pursue the following changes to the current ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/PureStake/moonbeam/tree/master/pallets/parachain-staking/src"},(0,r.kt)("inlineCode",{parentName:"a"},"parachain-staking"))," implementation:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Benchmark to derive transaction weights. This work has been started in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/PureStake/moonbeam/pull/372"},"this PR"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Security Research Labs reported two critical vulnerabilities in ",(0,r.kt)("inlineCode",{parentName:"p"},"parachain-staking"),": (i) total locked balance was not updated in ",(0,r.kt)("inlineCode",{parentName:"p"},"{collator, nominator}_bond_more")," leading to a potential underflow error (which could trigger excessive issuance) (ii) bounded number of nominations per collator allowed any account to fill the slots with the minimum nomination thereby preventing higher nominations.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The inflation logic implemented in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/PureStake/moonbeam/blob/master/pallets/parachain-staking/src/inflation.rs"},(0,r.kt)("inlineCode",{parentName:"a"},"parachain-staking"))," is minimal. Instead of integrating ",(0,r.kt)("inlineCode",{parentName:"p"},"pallet-staking"),"'s reward curve, the current implementation calculates per-round inflation derived from an annual inflation rate. Although the inflation rate can be updated by governance (sudo as of now), it is constant. Some parachain teams (i.e. Kilt) have requested configurable inflation that uses ",(0,r.kt)("inlineCode",{parentName:"p"},"pallet-staking"),"'s reward curve instead because it has been audited and reviewed more closely.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Moonbeam reserves 30% of inflation for future parachain bond(s). To support this functionality, ",(0,r.kt)("inlineCode",{parentName:"p"},"parachain-staking")," added the storage item ",(0,r.kt)("inlineCode",{parentName:"p"},"ParachainBondConfig"),". This storage item is updatable by the root origin; it configures the percent (30%) of inflation reserved as well as the ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountId")," which receives the reserved funds. This feature is convenient for parachains in the Polkadot ecosystem, all of which must pay rent to the network by locking funds in the parachain bond."))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"GPL3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"Update Rust crate-level docs and ",(0,r.kt)("a",{parentName:"td",href:"https://meta5.world/stake-docs/"},"user-level docs")," with implementation details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Benchmark"),(0,r.kt)("td",{parentName:"tr",align:null},"Benchmark the existing implementation to derive transaction weights and discern optimization opportunities.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Patch SR-Labs Critical Vulnerabilities"),(0,r.kt)("td",{parentName:"tr",align:null},"Patch both critical vulnerabilities reported by SR labs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Configurable Inflation"),(0,r.kt)("td",{parentName:"tr",align:null},"Replace sudo with governance origin for setting inflation rate. Provide instructions for replacing constant inflation with ",(0,r.kt)("inlineCode",{parentName:"td"},"pallet-staking"),"'s reward curve logic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"Configurable Parachain Bond Reservation"),(0,r.kt)("td",{parentName:"tr",align:null},"Add optional parachain bond configuration that enables reserving a portion of inflation for future parachain bonds.")))),(0,r.kt)("h3",{id:"milestone-2-parachain-staking-polkadot-js-ui"},"Milestone 2: Parachain-Staking Polkadot-JS UI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 4 weeks "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 10000 DAI")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Custom Polkadot-JS UI"),(0,r.kt)("td",{parentName:"tr",align:null},"An overlay UI using polkadot-js similar to the ",(0,r.kt)("inlineCode",{parentName:"td"},"pallet-staking")," UI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"PR polkadot-js apps"),(0,r.kt)("td",{parentName:"tr",align:null},"Make a pull request to polkadot-js apps with output")))),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,"The current implementation has ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/PureStake/moonbeam/blob/master/pallets/parachain-staking/src/tests.rs"},"significant unit test coverage")," and this will be maintained throughout the changes listed in Milestone 1. There are also runtime integration tests written in Rust as well as TS integration tests. Maintenance is not explicitly included in the milestones because test coverage is already relatively comprehensive and we have an incentive to maintain it throughout the proposed changes."))}d.isMDXComponent=!0}}]);