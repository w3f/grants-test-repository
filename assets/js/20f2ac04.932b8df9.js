"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[5516],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),c=p(a),u=r,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return a?n.createElement(k,o(o({ref:e},d),{},{components:a})):n.createElement(k,o({ref:e},d))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},98449:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(83117),r=(a(67294),a(3905));const i={},o="Integrating Polkadot.js with Blackprint",l={unversionedId:"Applications/blackprint-js",id:"Applications/blackprint-js",title:"Integrating Polkadot.js with Blackprint",description:"- Team Name: Blackprint",source:"@site/docs/Applications/blackprint-js.md",sourceDirName:"Applications",slug:"/Applications/blackprint-js",permalink:"/grants-test-repository/docs/Applications/blackprint-js",draft:!1,editUrl:"https://github.com/w3f/grants-test-repository/edit/master/docs/Applications/blackprint-js.md",tags:[],version:"current",lastUpdatedBy:"Sebastian M\xfcller",lastUpdatedAt:1668007993,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Bit.Country Milestone 2 (Follow up grant after M1 delivered) by MVP.STUDIO",permalink:"/grants-test-repository/docs/Applications/bit_country_m2"},next:{title:"BLDG App",permalink:"/grants-test-repository/docs/Applications/bldg_app"}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Technology stack",id:"technology-stack",level:4},{value:"Architecture",id:"architecture",level:4},{value:"Minimum Viable Product (MVP)",id:"minimum-viable-product-mvp",level:4},{value:"Example: Listening to new blocks",id:"example-listening-to-new-blocks",level:5},{value:"Example: Retrieve transaction fee/info",id:"example-retrieve-transaction-feeinfo",level:5},{value:"Limitation of the project:",id:"limitation-of-the-project",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Connection and data encryption nodes for Browser",id:"milestone-1--connection-and-data-encryption-nodes-for-browser",level:3},{value:"Milestone 2 \u2014 Basic transaction nodes for Browser",id:"milestone-2--basic-transaction-nodes-for-browser",level:3},{value:"Milestone 3 \u2014 Add support for Node.js",id:"milestone-3--add-support-for-nodejs",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],d={toc:p};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"integrating-polkadotjs-with-blackprint"},"Integrating Polkadot.js with Blackprint"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Blackprint"},"Blackprint")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," 0xE8b5923f891C5d42eBF9f385DDDFA4a8A74cb9AA (DAI)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 1")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: \"node\" does refer to Blackprint's node, not blockchain's node")),(0,r.kt)("p",null,"Blackprint is a visual programming tool that can help developers interact with libraries by simply connecting nodes in realtime without the need to code. Developers themselves will need to use Blackprint Engine and load required modules to execute exported JSON of node, cable connections, and embedded data."),(0,r.kt)("p",null,"Blackprint hopefully can help the development of Metaverse, frontend development, as well as automation such as bots that connect to multiple blockchains. Blackprint itself is planning to expand to support several programming languages such as JavaScript, PHP, Golang, and Python. But this proposal is currently only for JavaScript as Blackprint is still trying to improve."),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("h4",{id:"technology-stack"},"Technology stack"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JavaScript (Browser & Node.js)"),(0,r.kt)("li",{parentName:"ul"},"Polkadot.js's ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js/api"},"library")),(0,r.kt)("li",{parentName:"ul"},"Blackprint does have 2 main component:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Blackprint/engine-js"},"Engine"),": Designed for managing data flow between nodes and can be run on Browser/Node.js/Deno"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Blackprint/Blackprint"},"Sketch"),": Can be used for creating node editor and modify node connections"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Blackprint Editor"),": An IDE that combine the sketch and the engine and provide another tools on the GUI to make the development more easier")),(0,r.kt)("h4",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,"Below is the current architecture on how Blackprint works.\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/11073373/147854525-0147a218-a8ce-4682-b7c2-ac0389358bd5.jpg",alt:"Architecture"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: ",(0,r.kt)("inlineCode",{parentName:"p"},"engine")," does refer to Blackprint Engine, and not JavaScript's V8 engine")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Blackprint Sketch")," is a minimal node editor where the user can interact (move, click, manage cable connection) with the nodes and it's depends on ",(0,r.kt)("strong",{parentName:"p"},"Blackprint Engine"),". Modifying node/cable from the sketch in real time will change engine's behavior to manage data flow between nodes."),(0,r.kt)("p",null,"The data changes from the engine will trigger ",(0,r.kt)("strong",{parentName:"p"},"JS Module")," (the orange colored shape) for interact with Polkadot.js's library. ",(0,r.kt)("strong",{parentName:"p"},"JS Module")," is an additional module/addons for Blackprint, when it's loaded it will registering node for sketch and engine. Polkadot.js's library then will handle the connection between parachain and the current environment (Browser/Node.js)."),(0,r.kt)("h4",{id:"minimum-viable-product-mvp"},"Minimum Viable Product (MVP)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Please scroll down again if you prefer to see some video example instead")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/11073373/147868420-d24a1643-445c-4c82-b3d5-a473f05a65e3.png",alt:"MVP"})),(0,r.kt)("p",null,"The screenshot above is taken from Blackprint Editor that using nodes from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Blackprint/nodes-polkadot.js"},"this")," MVP module. The module itself is already usable for browser, but the module haven't been published on NPM. Because currently it's still in development, I have put a few example to try it on the repository."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Some explanation for the screenshot above"),(0,r.kt)("p",null,"The process is begin from ",(0,r.kt)("strong",{parentName:"p"},"WebSocket")," connection, after it get connected to the network the ",(0,r.kt)("strong",{parentName:"p"},"Provider")," and ",(0,r.kt)("strong",{parentName:"p"},"API")," port will have an value and will trigger the other port like ",(0,r.kt)("strong",{parentName:"p"},"Blocks Event")," and ",(0,r.kt)("strong",{parentName:"p"},"Transfer")," node. ",(0,r.kt)("strong",{parentName:"p"},"Blocks Event")," will then subscribing for new block event, and will update it's UI automatically for visualisation. When the ",(0,r.kt)("strong",{parentName:"p"},"Transfer")," node has value for ",(0,r.kt)("strong",{parentName:"p"},"API, Address, Value")," port, it will create a unsigned transaction into ",(0,r.kt)("strong",{parentName:"p"},"Txn")," port. The filled ",(0,r.kt)("strong",{parentName:"p"},"Txn")," port will send the value to another node like ",(0,r.kt)("strong",{parentName:"p"},"Txn Payment Info")," and ",(0,r.kt)("strong",{parentName:"p"},"Send Transaction")," node. The ",(0,r.kt)("strong",{parentName:"p"},"Send Transaction")," will need to be triggered manually by calling ",(0,r.kt)("strong",{parentName:"p"},"Submit")," port and also the ",(0,r.kt)("strong",{parentName:"p"},"Provider")," port need to be connected with port from ",(0,r.kt)("strong",{parentName:"p"},"WebSocket"),". The ",(0,r.kt)("strong",{parentName:"p"},"Browser Wallet")," node is required for asking permission for accessing Polkadot.js extension, and the ",(0,r.kt)("strong",{parentName:"p"},"Signer")," node can be used after the permission was granted."),(0,r.kt)("p",null,"Each port has it's own type data, the details can be seen by hovering the port with a cursor.")),(0,r.kt)("h5",{id:"example-listening-to-new-blocks"},"Example: Listening to new blocks"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/11073373/148692354-3a9ffad4-ef5e-4fa5-9bdb-d8d07b5b59e9.mp4"},"https://user-images.githubusercontent.com/11073373/148692354-3a9ffad4-ef5e-4fa5-9bdb-d8d07b5b59e9.mp4")),(0,r.kt)("p",null,"With the current MVP, we can listen to new blocks/head by connecting to the parachain via WebSocket. By using Ctrl + Right Click on the ",(0,r.kt)("strong",{parentName:"p"},"API")," port, we can get a list of suggested node. The ",(0,r.kt)("strong",{parentName:"p"},"Blocks Event")," then will use the ",(0,r.kt)("strong",{parentName:"p"},"API")," to subscribe to ",(0,r.kt)("inlineCode",{parentName:"p"},"chain_subscribeNewHeads")," with help of Polkadot.js's library. The output value (",(0,r.kt)("strong",{parentName:"p"},"Number")," port) of ",(0,r.kt)("strong",{parentName:"p"},"Blocks Event")," will be updated everytime the block number has changed, the ",(0,r.kt)("strong",{parentName:"p"},"New")," port is supposed for call a function/trigger. At the end of video, I also opened the Chain info explorer to see if the number was match with the current network state."),(0,r.kt)("h5",{id:"example-retrieve-transaction-feeinfo"},"Example: Retrieve transaction fee/info"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/11073373/148692778-bdf3e096-64d3-43e4-ac7c-38c7785de8cd.mp4"},"https://user-images.githubusercontent.com/11073373/148692778-bdf3e096-64d3-43e4-ac7c-38c7785de8cd.mp4")),(0,r.kt)("p",null,"From the video, I'm creating a ",(0,r.kt)("strong",{parentName:"p"},"Transfer")," node that can be used for creating unsigned transaction. It will only executed after all required port is filled. I'm then trying to retrieve the payment info for the ",(0,r.kt)("strong",{parentName:"p"},"Txn")," and sign it by using dummy signer. The ",(0,r.kt)("strong",{parentName:"p"},"Txn Payment Info")," node then will update it's value for the output port (Info). The output is an Object."),(0,r.kt)("h4",{id:"limitation-of-the-project"},"Limitation of the project:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Blackprint doesn't generate JS script/code dynamically and can only operate if the custom node is already registered with Blackprint Engine from an external/loaded module."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Blackprint Sketch")," can export the sketch into JSON, and the users can import it to ",(0,r.kt)("strong",{parentName:"li"},"Blackprint Engine")," for Browser/Node.js. The engine itself will need the ",(0,r.kt)("strong",{parentName:"li"},"JS module")," to interact with Polkadot.js's library.")),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("p",null,"Blackprint can be used as a playground for experimenting with Polkadot.js library. Like creating their own program without writing code for doing transaction, signing/encrypting data. But just by simply load the module and begin connecting nodes interactively. For production use, they can easily export to JSON and import it on their target environment (browser/Node.js)."),(0,r.kt)("p",null,"Hopefully users with no knowledge about how create transaction into blockchain may find this helpful for getting started by learning the concept first. It can also help dApp and metaverse developers."),(0,r.kt)("p",null,"In the future of metaverse, I hope it can also help users who don't have programming background can easily program it's own logic with the available nodes realtime inside the game/world."),(0,r.kt)("p",null,"For example like non-programmer who want to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Collaboratively creating in-game ATM that can connect to different blockchain via RPC"),(0,r.kt)("li",{parentName:"ol"},"Trigger transaction when interacting with in-game shop and able to see how the data flow works with Blackprint")),(0,r.kt)("p",null,"The above is just my vision for the future. I haven't created any prototype of it yet, but it may be possible if some Metaverse project adopted Blackprint for its project."),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/StefansArya"},"StefansArya"),": Fullstack Engineer & Game Developer")),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Stefanus Arya Cipta Gusnadika"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"li",href:"mailto:stefansarya1@gmail.com"},"stefansarya1@gmail.com"))),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("p",null,"I experienced to ",(0,r.kt)("a",{parentName:"p",href:"https://freelancer.com/stefansarya"},"work as a freelancer")," since 2015. My experience with web development is about \xb17 years since that. I'm also familiar with Golang, PHP, and Python. I usually create open source library on GitHub, and some closed project on GitLab."),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Blackprint"},"https://github.com/Blackprint")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ScarletsFiction"},"https://github.com/ScarletsFiction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/StefansArya"},"https://github.com/StefansArya"))),(0,r.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/stefansarya"},"https://www.linkedin.com/in/stefansarya"))),(0,r.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: ",(0,r.kt)("inlineCode",{parentName:"p"},"Polkadot.js nodes for Blackprint")," is the ",(0,r.kt)("inlineCode",{parentName:"p"},"JS module")," I mentioned on Architecture section")),(0,r.kt)("p",null,"At the time of writing this proposal. Currently Blackprint is already usable, but it's still unstable and being optimized for better performance and design. It's already trying to follow semantic versioning and may only introduce breaking changes on increment of v0.","*",".0."),(0,r.kt)("p",null,"Below is the repository about current development."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Blackprint/engine-js"},"Blackprint Engine for JavaScript")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Blackprint/Blackprint"},"Blackprint Sketch for Browser")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Blackprint/blackprint.github.io"},"Blackprint Editor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Blackprint/nodes-polkadot.js"},"Polkadot.js nodes for Blackprint")," (the MVP itself)")),(0,r.kt)("p",null,"Currently the MVP can be run on browsers. The support for Node.js is still work in progress and may be delivered on ",(0,r.kt)("strong",{parentName:"p"},"Milestone 3"),". The current MVP may already contain nodes that will be delivered for Milestone 1 and Milestone 2, I'm still preparing to create the unit test and some example before I deliver it."),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," \xb16 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):")," 1 FTE"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," 9,200 DAI")),(0,r.kt)("h3",{id:"milestone-1--connection-and-data-encryption-nodes-for-browser"},"Milestone 1 \u2014 Connection and data encryption nodes for Browser"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," \xb13 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 4,000 DAI")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"MIT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"I will provide ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and simple example that can be imported to the Blackprint Editor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Delivered node will be fully covered by unit tests to ensure functionality and robustness. In the guide, I will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will use GitHub Action/Workflow instead, for manual UI testing/interaction we can use Blackprint Editor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP & WebSocket node"),(0,r.kt)("td",{parentName:"tr",align:null},"Able to connect to parachain's test/mainnet (including: Polkadot/Kusama/Westend) by specifying the RPC URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Event node"),(0,r.kt)("td",{parentName:"tr",align:null},"Able to listen for new blocks/heads of the connected parachain node")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Mnemonic/seed importer node"),(0,r.kt)("td",{parentName:"tr",align:null},"Able to convert mnemonic into private key (seed) that can be used for decrypting data or signing data, the private key is in the Keyring")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"Encrypt, Decrypt node"),(0,r.kt)("td",{parentName:"tr",align:null},"Able to encrypt data with public key, and able to decrypt data with private key. Public key and private key is in the Keyring")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"5."),(0,r.kt)("td",{parentName:"tr",align:null},"Sign, Verify node"),(0,r.kt)("td",{parentName:"tr",align:null},"Able to sign data with private key, and able to verify data with public key. Public key and private key is in the Keyring")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"6."),(0,r.kt)("td",{parentName:"tr",align:null},"Package"),(0,r.kt)("td",{parentName:"tr",align:null},"I will submit the JavaScript package/module to NPM registry so it can be loaded browser via CDN")))),(0,r.kt)("h3",{id:"milestone-2--basic-transaction-nodes-for-browser"},"Milestone 2 \u2014 Basic transaction nodes for Browser"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," \xb13 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 2,000 DAI")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"MIT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"I will provide ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and simple example that can be imported to the Blackprint Editor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Delivered node will be fully covered by unit tests to ensure functionality and robustness. In the guide, I will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will use GitHub Action/Workflow instead, for manual UI testing/interaction we can use Blackprint Editor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Event node"),(0,r.kt)("td",{parentName:"tr",align:null},"Able to listen for balance changes for an account from WebSocket RPC that connected to parachain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Browser Extension"),(0,r.kt)("td",{parentName:"tr",align:null},"Able to use browser extension for signing data and obtain account list")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Balance transfer node"),(0,r.kt)("td",{parentName:"tr",align:null},"Able to transfer balance from an account to another account where the unsigned transaction itself can be signed with Keyring's keypair or browser extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"Payment info node"),(0,r.kt)("td",{parentName:"tr",align:null},"Able to obtain payment information from an unsigned transaction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"5."),(0,r.kt)("td",{parentName:"tr",align:null},"Package"),(0,r.kt)("td",{parentName:"tr",align:null},"I will submit the JavaScript package/module to NPM registry so it can be loaded browser via CDN")))),(0,r.kt)("h3",{id:"milestone-3--add-support-for-nodejs"},"Milestone 3 \u2014 Add support for Node.js"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," \xb14 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  0.8"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 3,200 DAI")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"MIT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"I will provide ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code, add/improve nodes documentation from Milestone 1 and 2 for both Browser and Node.js")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Delivered node will be fully covered by unit tests to ensure functionality and robustness. In the guide, I will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"I will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone for Node.js")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"Delivered nodes from Milestone 1 and 2 can be run on Node.js environment, and exported JSON from the Blackprint Sketch can be imported and executed from Node.js")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Package"),(0,r.kt)("td",{parentName:"tr",align:null},"I will submit to NPM registry so it can imported and used for Node.js")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: I may need time to also maintain Blackprint")),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add Blackprint node for some feature from ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/docs/substrate/rpc"},"Substrate Metadata")),(0,r.kt)("li",{parentName:"ul"},"Finishing ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Blackprint/Blackprint#blackprint-roadmap"},"Blackprint's roadmap")),(0,r.kt)("li",{parentName:"ul"},"Build more nodes for Blackprint to make it more suitable as a development tools or IDE"),(0,r.kt)("li",{parentName:"ul"},"Build a community server on Discord to grow from individual developer into a team"),(0,r.kt)("li",{parentName:"ul"},"Because Blackprint is also still unstable and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js/api"},"polkadot.js")," library may also have some changes on the future, I'm willing to update and maintain the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Blackprint/nodes-polkadot.js"},"the delivered nodes"),".")),(0,r.kt)("p",null,"At the time writting -- when having many nodes and cable, users may find Blackprint looks complicated because currently they can't arrange the cable. Because of that, on the future I'm going to improve the UI/UX for managing cable."),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?"),(0,r.kt)("br",null),"\nI heard about the Grants Program from Web3 Foundation's website when doing research about Polkadot's Parachain Rollout."),(0,r.kt)("p",null,"Additional information that I think may relevant to this application:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"I'm planning to implement custom node for ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ethers-io/ethers.js"},"ethers.js")," as I already know how to use the library, but currently I more motivated to Polkadot because of this Grants Program."),(0,r.kt)("li",{parentName:"ul"},"When doing research about Arweave, I also created ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Blackprint/nodes-arweave"},"custom nodes for Arweave"),". It's already usable on Blackprint Editor and can be imported on Blackprint Editor together with other nodes. But currently it has no tests or documentation.")))}m.isMDXComponent=!0}}]);