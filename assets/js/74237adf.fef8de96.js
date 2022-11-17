"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[9472],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},80414:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(83117),r=(a(67294),a(3905));const l={},i="SubQuery",o={unversionedId:"Applications/subquery",id:"Applications/subquery",title:"SubQuery",description:"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the Open Grants Program Process on how to submit a proposal.",source:"@site/docs/Applications/subquery.md",sourceDirName:"Applications",slug:"/Applications/subquery",permalink:"/grants-test-repository/docs/Applications/subquery",draft:!1,editUrl:"https://github.com/w3f/grants-test-repository/edit/master/docs/Applications/subquery.md",tags:[],version:"current",lastUpdatedBy:"Sebastian M\xfcller",lastUpdatedAt:1668007993,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"SubDEX",permalink:"/grants-test-repository/docs/Applications/subdex"},next:{title:"Subscript",permalink:"/grants-test-repository/docs/Applications/subscript_lang"}},s={},u=[{value:"Project Overview :page_facing_up",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Step #1: Create a SubQuery project",id:"step-1-create-a-subquery-project",level:4},{value:"Step #2: Run an indexer",id:"step-2-run-an-indexer",level:4},{value:"Step #3: Run a Query Service",id:"step-3-run-a-query-service",level:4},{value:"Components",id:"components",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team :busts_in_silhouette",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Partime members",id:"partime-members",level:4},{value:"Team Website",id:"team-website",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap :nut_and_bolt",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1",id:"milestone-1",level:3},{value:"Milestone 2",id:"milestone-2",level:3},{value:"Community engagement",id:"community-engagement",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information :heavy_plus_sign",id:"additional-information-heavy_plus_sign",level:2}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"subquery"},"SubQuery"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md"},"Open Grants Program Process")," on how to submit a proposal.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ianhe8x"},"https://github.com/ianhe8x")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," bc1qmm3esqr57farn2dextdvhjs962wx08fecsxs90")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The above combination of your GitHub account and payment address will be your unique identifier during the program. Please keep them safe.")),(0,r.kt)("h2",{id:"project-overview-page_facing_up"},"Project Overview :page_facing_up"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Almost every substrate project has a need to process and query data.\nSubQuery is a open-source tool to provide a complete solution to this problem and will become core infrastructure for the Polkadot ecosystem.\nWe expect it to solve how to Extract, Transform, Persist, and Query data intially, and then how to Connect and Present data in the future."),(0,r.kt)("p",null,"SubQuery is NOT an ETL tool, the persisted data is minimized and shaped from the perspective of how it will be used."),(0,r.kt)("p",null,"SubQuery aims to support all substrate-compatible networks.  "),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("p",null,"In this proposal, we provide a complete workflow to create a live data query system."),(0,r.kt)("h4",{id:"step-1-create-a-subquery-project"},"Step #1: Create a SubQuery project"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"use ",(0,r.kt)("inlineCode",{parentName:"li"},"@subql/cli")," tool we provide to create a SubQuery project",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"it is written in typescript"),(0,r.kt)("li",{parentName:"ul"},"user needs to config the project, define a schema and implement mapping functions"))),(0,r.kt)("li",{parentName:"ol"},"use ",(0,r.kt)("inlineCode",{parentName:"li"},"@subql/cli")," to generate types from the given schema"),(0,r.kt)("li",{parentName:"ol"},"use ",(0,r.kt)("inlineCode",{parentName:"li"},"@subql/cli")," to compile and pack the SubQuery project")),(0,r.kt)("h4",{id:"step-2-run-an-indexer"},"Step #2: Run an indexer"),(0,r.kt)("p",null,"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Postgres database"),(0,r.kt)("li",{parentName:"ul"},"Non-archive full node. If storage query is used, then an archive node is required to extract chain data. ",(0,r.kt)("a",{parentName:"li",href:"https://onfinality.io/api_service"},"OnFinality")," provides an archive node with a generous free tier that should be more than able to cover most cases."),(0,r.kt)("li",{parentName:"ul"},"A moderately powerful computer to run an indexer in the background")),(0,r.kt)("p",null,"Then start our ",(0,r.kt)("inlineCode",{parentName:"p"},"@subql/node")," with the path of local SubQuery project as arguments, ",(0,r.kt)("inlineCode",{parentName:"p"},"@subql/node")," will handle the rest."),(0,r.kt)("h4",{id:"step-3-run-a-query-service"},"Step #3: Run a Query Service"),(0,r.kt)("p",null,"We do have plan for a custom built graphql query service ",(0,r.kt)("inlineCode",{parentName:"p"},"@subql/query"),", but in this stage we will use ",(0,r.kt)("a",{parentName:"p",href:"https://hasura.io"},"Harura")," to do the job."),(0,r.kt)("h4",{id:"components"},"Components"),(0,r.kt)("p",null,"Npmjs Packages to published:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@subql/cli")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@subql/node"))),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Joystream/hydra"},"Hydra")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/playzero/substrate-graph"},"substrate-graph")),(0,r.kt)("li",{parentName:"ul"},"other ETL projects")),(0,r.kt)("p",null,"The original intentions are different and that leads to different technical decisions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"These two projects are both created by a substrate-based blockchain team in order to fulfill the needs of their own chains in the beginning and then adapted into standalone projects."),(0,r.kt)("li",{parentName:"ul"},"The motivation of us is to make a tool that solves query demands of all substrate blockchains right from the start. We also plan to then provide a full managed and hosted service to lower the barriers of entry further.")),(0,r.kt)("p",null,"The differences:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Secure execution of mapping functions are not a top concern for them, but is a hard requirement for us and will be supported in the proposal."),(0,r.kt)("li",{parentName:"ol"},"We don't want to depend on 3rd party libraries in the core code of the project, libraries such as warthog used by Hydra."),(0,r.kt)("li",{parentName:"ol"},"API access within the mapping functions will be supported"),(0,r.kt)("li",{parentName:"ol"},"Our proposal aims for OLTP, and allowing customisation of indexing process which are different from ETL like projects. The outcome of indexed data is that it is shaped for the need of its specific usecase, and be consumed by browser and mobile apps.")),(0,r.kt)("h2",{id:"team-busts_in_silhouette"},"Team :busts_in_silhouette"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sam Zou: Project manager"),(0,r.kt)("li",{parentName:"ul"},"Ian He: Team leader"),(0,r.kt)("li",{parentName:"ul"},"Jay Ji: Fullstack developer")),(0,r.kt)("h4",{id:"partime-members"},"Partime members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"James Bayly: Marketing and Partnerships")),(0,r.kt)("h3",{id:"team-website"},"Team Website"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://onfinality.io"},"https://onfinality.io"))),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("p",null,"OnFinality Limited, New Zealand"),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("p",null,"We are the team behind OnFinality which is an infrastructure SaaS platform for blockchain teams and users to launch nodes and gain access to a large range of blockchain protocols. Our mission is to help Polkadot/Substrate developers build the next generation of dApps."),(0,r.kt)("p",null,"We have supported many Polkadot ecosystem projects already including Acala, Darwinia, Plasm, and Edgeware."),(0,r.kt)("p",null,"Ian He led a team and won 2nd price in the substrate hackathon in Hangzhou 2019."),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/onfinality-io"},"https://github.com/onfinality-io"))),(0,r.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/sam-zou-5b8169a/"},"https://www.linkedin.com/in/sam-zou-5b8169a/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/yin-he-7a266345/"},"https://www.linkedin.com/in/yin-he-7a266345/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/qiang-ji-58aab276/"},"https://www.linkedin.com/in/qiang-ji-58aab276/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/james-bayly/"},"https://www.linkedin.com/in/james-bayly/"))),(0,r.kt)("h2",{id:"development-roadmap-nut_and_bolt"},"Development Roadmap :nut_and_bolt"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 1.5 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):"),"  2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," 1.75")),(0,r.kt)("h3",{id:"milestone-1"},"Milestone 1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 1.2 BTC")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@subql/cli")),(0,r.kt)("td",{parentName:"tr",align:null},"We will create ",(0,r.kt)("inlineCode",{parentName:"td"},"@subql/cli")," that helps to generate types, builds, and packs the SubQuery project. To be specific, mapping functions will be compiled from .ts to .js and will be packed into a single tarball file together with project manifest and GraphQL schema")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@subql/node")),(0,r.kt)("td",{parentName:"tr",align:null},"We will create ",(0,r.kt)("inlineCode",{parentName:"td"},"@subql/node")," that can load a SubQuery project and index the specified blockchain.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2.1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@subql/node")),(0,r.kt)("td",{parentName:"tr",align:null},"will support block handler ",(0,r.kt)("inlineCode",{parentName:"td"},"async function handlerFn(block: SignedBlock): Promise<void>"),", call handler ",(0,r.kt)("inlineCode",{parentName:"td"},"async function handlerFn(extrinsic: Extrinsic): Promise<void>")," and event handler ",(0,r.kt)("inlineCode",{parentName:"td"},"async function handlerFn(event: EventData): Promise<void>")," from the SubQuery project that user provided.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2.2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@subql/node")),(0,r.kt)("td",{parentName:"tr",align:null},"The call handler will support ",(0,r.kt)("inlineCode",{parentName:"td"},"module")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"call_name")," filter. The event handler will support ",(0,r.kt)("inlineCode",{parentName:"td"},"event_name")," filter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2.3"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@subql/node")),(0,r.kt)("td",{parentName:"tr",align:null},"We will use vm2 to create an isolated scope to execute mapping functions, and we will provide additional NetworkPolicy configs to strengthen the security further when run it in K8s.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Deploy"),(0,r.kt)("td",{parentName:"tr",align:null},"We will generate a dockercompose file and Kubernetes deploy YAMLs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how a user can create, run and serve their SubQuery project.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing"),(0,r.kt)("td",{parentName:"tr",align:null},"Unit tests and integration tests for ",(0,r.kt)("inlineCode",{parentName:"td"},"@subql/cli")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"@subql/node"))))),(0,r.kt)("h3",{id:"milestone-2"},"Milestone 2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 2 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 0.55 BTC")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@subql/cli")),(0,r.kt)("td",{parentName:"tr",align:null},"A subcommand will be added to ",(0,r.kt)("inlineCode",{parentName:"td"},"@subql/cli")," that can create a scaffold of a SubQuery project, including a series of step-by-setp interactions that guides the user to complete customisation of the project.yaml and create handlers of selected type. The generated SubQuery project will have sufficient code comments and instructions in README.md so people can easily understand and start working with it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@subql/node")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@polkadot/api")," will be accessible within the mapping functions and we will patch the API instance that be injected in the scope to lock storage queries to current processing block so that the indexing result will be deterministic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Deploy"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a dockercompose file and Kubernetes deploy YAML")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how a user can create, run and serve their SubQuery project.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5."),(0,r.kt)("td",{parentName:"tr",align:null},"Examples"),(0,r.kt)("td",{parentName:"tr",align:null},"We will list and provide new users access to example SubQuery projects")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing"),(0,r.kt)("td",{parentName:"tr",align:null},"Unit tests and integration tests for @subql/cli and @subql/node")))),(0,r.kt)("h3",{id:"community-engagement"},"Community engagement"),(0,r.kt)("p",null,"We will publish a series of articles on Medium and videos demonstrating the usage of this tool too. We will engage with users in our community on Telegram."),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"With the help of this tool, anyone can create and run queries easily. But there're still issues for when a user wants to consume the query service in production, our intention to close this gap by providing a hosted service."),(0,r.kt)("li",{parentName:"ul"},"In regard to functionality, we also plan to support SubQuery composition and data subscription for users that use our hosted service."),(0,r.kt)("li",{parentName:"ul"},"Smart contracts including Solidity and ink! support are in our future roadmap."),(0,r.kt)("li",{parentName:"ul"},"We are intending to reach out to all major chain explorer teams and engage with the community to see how our service can benefit it.")),(0,r.kt)("h2",{id:"additional-information-heavy_plus_sign"},"Additional Information :heavy_plus_sign"))}d.isMDXComponent=!0}}]);