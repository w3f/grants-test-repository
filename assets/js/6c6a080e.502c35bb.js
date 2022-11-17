"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[4279],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=l,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},75536:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(83117),l=(a(67294),a(3905));const r={},i="zk plonk",o={unversionedId:"Applications/zk-plonk",id:"Applications/zk-plonk",title:"zk plonk",description:"Team Name:* Plasm Network (Shinsaku Ashizawa, Sota Watanabe)",source:"@site/docs/Applications/zk-plonk.md",sourceDirName:"Applications",slug:"/Applications/zk-plonk",permalink:"/grants-test-repository/docs/Applications/zk-plonk",draft:!1,editUrl:"https://github.com/w3f/grants-test-repository/edit/master/docs/Applications/zk-plonk.md",tags:[],version:"current",lastUpdatedBy:"Sebastian M\xfcller",lastUpdatedAt:1668007993,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Zero Network",permalink:"/grants-test-repository/docs/Applications/zero-network"},next:{title:"ZK Rollup on Polkadot/Substrate",permalink:"/grants-test-repository/docs/Applications/zk-rollups"}},s={},p=[{value:"Project Overview :page_facing_up",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team :busts_in_silhouette",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap :nut_and_bolt",id:"development-roadmap-nut_and_bolt",level:2},{value:"Summary",id:"summary",level:3},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 Example \u2014 Implement Substrate Modules",id:"milestone-1-example--implement-substrate-modules",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information :heavy_plus_sign",id:"additional-information-heavy_plus_sign",level:2}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"zk-plonk"},"zk plonk"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Team Name:")," Plasm Network (Shinsaku Ashizawa, Sota Watanabe)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Payment Address:")," 0xb82EdE43D03fD23dcdb2d066720b3E77F3bedf6d")),(0,l.kt)("h2",{id:"project-overview-page_facing_up"},"Project Overview :page_facing_up"),(0,l.kt)("p",null,"We have been working on Zk projects and scalability solutions and now we would like to implement Zk plonk pallet."),(0,l.kt)("p",null,"The plonk is called ",(0,l.kt)("inlineCode",{parentName:"p"},"universal zkSNARK")," because of two reasons. The verification times are constant and original reference string can be used to build proofs with any type of circuit. These features bring significant benefits to both users and developers. For example, the verification time is the same so users don't have to wait so long even when they prove complicated proof, and original reference string can reuse so developers don't have to do trusted setup for each circuit. The plonk will be a core technology in terms of scaling and privacy so we should support."),(0,l.kt)("h3",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Through this grant, we are going to make a plonk pallet in order for the developer to implement plonk on substrate easily. We are working on scalability solutions but currently, the substrate doesn't support zkSNARK pallet so we think it's a issue to fix. As aforementioned, zkSNARK will be a core technology in blockchain area and especially plonk is cutting edge technology so we are excited to implement this as pallet."),(0,l.kt)("h3",{id:"project-details"},"Project Details"),(0,l.kt)("p",null,"We'd like to implement the plonk library as a pallet in order for developers to customize circuits and use the plonk protocol."),(0,l.kt)("p",null,"The following diagram is the libraries we are going to implement."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Polynomial commitment"),(0,l.kt)("li",{parentName:"ul"},"Circuit builder"),(0,l.kt)("li",{parentName:"ul"},"Generate proof and verify keys"),(0,l.kt)("li",{parentName:"ul"},"Verify proof")),(0,l.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,l.kt)("p",null,"According to Web3 Foundation, there are at least 2 different teams that work on ZK technologies."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/zeropoolnetwork"},"Zeropool")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/gbctech"},"Glacier"))),(0,l.kt)("p",null,"Glacier is building a Distaff VM for zk-STARK proof generation and verification that are used to make  private smart contracts and private credential verifications. The difference between us is that we are making a zkSNARK pallet and they are making a VM which supports STARKs. In terms of Zeropool, they are making private transactions contract pallet using bellman groth16 protocal and we are making zkSNARK libray using plonk."),(0,l.kt)("p",null,"We believe zkSNARK with plonk will be core technology of next blockchain area. That allows Substrate to protect the privacy and scale on the huge number of transactions without decreasing the security level."),(0,l.kt)("h2",{id:"team-busts_in_silhouette"},"Team :busts_in_silhouette"),(0,l.kt)("h3",{id:"team-members"},"Team members"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Shinsaku Ashizawa"),(0,l.kt)("li",{parentName:"ul"},"Alexsandr Krrupenkin"),(0,l.kt)("li",{parentName:"ul"},"Sota Watanabe")),(0,l.kt)("h3",{id:"contact"},"Contact"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Contact Name:")," Shinsaku Ashizawa"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,l.kt)("a",{parentName:"li",href:"mailto:shinsaku.ashizawa@artree.co.jp"},"shinsaku.ashizawa@artree.co.jp")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Website:")," ",(0,l.kt)("a",{parentName:"li",href:"https://artree.co.jp/"},"Artree"))),(0,l.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Incorporated in Singapore"),(0,l.kt)("li",{parentName:"ul"},"Address: 63 Chulia Street Singapore")),(0,l.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,l.kt)("p",null,"We have been making Plasm Network, a scalable multi-virtual machines smart contract platform on Polkadot supporting cutting edge layer2 solutions. Curretly, another team at Stake techologies is working on the Optimistic Virtual Machine, an unification for all layer2 solutions and a subset of Optimistic Rollup. We have already delivered 4 milestones out of 6. In addition to that, we have already delivered several grants such as Plasma, ECDSA, and ink! playground."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/stakedtechnologies/Plasm"},"Plasma")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js/common/tree/master/packages/util-crypto/src/secp256k1"},"ECDSA")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/staketechnologies/ink-playground"},"ink! playground"))),(0,l.kt)("p",null,"We are also participating in Substrate Builders Program and Substrate Delivery Partners and we have done some PoCs with clients."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stake.co.jp/news/20201020english/"},"\u201cPlasm Network\u201d is Adopted as a Blockchain Platform for Payment System by Satsudra HD and DataGateway")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stake.co.jp/news/bitpoint_en/"},"Bitpoint and Stake Technologies Collaboration Announcement."),"\niously, please list the name of the project and legal entity here.")),(0,l.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/PlasmNetwork"},"https://github.com/PlasmNetwork"))),(0,l.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/sota-watanabe-b962b3110/"},"https://www.linkedin.com/in/sota-watanabe-b962b3110/"))),(0,l.kt)("h2",{id:"development-roadmap-nut_and_bolt"},"Development Roadmap :nut_and_bolt"),(0,l.kt)("h3",{id:"summary"},"Summary"),(0,l.kt)("p",null,"We plan to provide a ",(0,l.kt)("inlineCode",{parentName:"p"},"plonk")," pallet that allows Substrate-based blockchain to execute plonk-based zkSNARK."),(0,l.kt)("h3",{id:"overview-1"},"Overview"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3 months"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  1 FTE"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Costs:")," 30000 DAI")),(0,l.kt)("h3",{id:"milestone-1-example--implement-substrate-modules"},"Milestone 1 Example \u2014 Implement Substrate Modules"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 3 months"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 30000 DAI")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / MIT / Unlicense")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how a developer builds a circuit and a user prove their computation through the circuit.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,l.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,l.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests and audit to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,l.kt)("td",{parentName:"tr",align:null},"Article/Tutorial"),(0,l.kt)("td",{parentName:"tr",align:null},"We will publish an article/tutorial/workshop that explains")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"make plonk compatible"),(0,l.kt)("td",{parentName:"tr",align:null},"The dusk-network plonk is compatible with ",(0,l.kt)("inlineCode",{parentName:"td"},"no-std")," so we are going to modify attributes according to ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/paritytech/parity-scale-codec"},"parity-codec")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"Rng")," to be compatible with\u3000Substrate environment. This step allows this pallet to work on resource-constrained execution environments like Substrate runtime, attributes should be modified in accordance with SCALE codec and some versions of Rng can\u2019t be compiled to wasm so we need to research and make it stable as necessary.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"implement zkSNARK plonk pallet"),(0,l.kt)("td",{parentName:"tr",align:null},"We will create a set of plonk-based zkSNARK libraries that allow a developer to build their own circuit and a user to prove their computation validity. Verifying proofs are done by on-chain. Creating the proofs are done by off-chain.")))),(0,l.kt)("p",null,"This zkSNARK plonk is based on ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/dusk-network/plonk"},"dusk-network plonk")," library.\nThis zkSNARK plonk pallet provides us following function."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Building circuits"),(0,l.kt)("li",{parentName:"ul"},"Creating proofs"),(0,l.kt)("li",{parentName:"ul"},"Verifying proofs")),(0,l.kt)("h2",{id:"future-plans"},"Future Plans"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Zk Rollup implementation"),(0,l.kt)("li",{parentName:"ul"},"private transfer protocol")),(0,l.kt)("h2",{id:"additional-information-heavy_plus_sign"},"Additional Information :heavy_plus_sign"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.plasmnet.io/"},"web site"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.plasmnet.io/"},"document")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://twitter.com/Plasm_Network"},"Twitter")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://medium.com/stake-technologies"},"Medium")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/PlasmNetwork"},"GitHub"))))}m.isMDXComponent=!0}}]);