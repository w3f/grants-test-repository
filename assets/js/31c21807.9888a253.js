"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[6955],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87742:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={},i="Open Grant Proposal",l={unversionedId:"Applications/Polkadot_Web_UI",id:"Applications/Polkadot_Web_UI",isDocsHomePage:!1,title:"Open Grant Proposal",description:"* Project Name: Polkadot UI Web Identicon + Angular Identicon",source:"@site/docs/Applications/Polkadot_Web_UI.md",sourceDirName:"Applications",slug:"/Applications/Polkadot_Web_UI",permalink:"/grants-test-repository/docs/Applications/Polkadot_Web_UI",editUrl:"https://github.com/w3f/grants-test-repository/edit/master/docs/Applications/Polkadot_Web_UI.md",tags:[],version:"current",lastUpdatedBy:"Sebastian M\xfcller",lastUpdatedAt:1667994768,formattedLastUpdatedAt:"11/9/2022",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Polkadot Snap Made by Keystone Wallet Team",permalink:"/grants-test-repository/docs/Applications/PolkadotSnap"},next:{title:"W3F Grant Proposal",permalink:"/grants-test-repository/docs/Applications/Polkaholic"}},p=[{value:"Project Overview",id:"project-overview",children:[{value:"Overview",id:"overview",children:[]},{value:"Project Details",id:"project-details",children:[]},{value:"Ecosystem Fit",id:"ecosystem-fit",children:[]}]},{value:"Team",id:"team",children:[{value:"Team members",id:"team-members",children:[]},{value:"Contact",id:"contact",children:[]},{value:"Legal Structure",id:"legal-structure",children:[]},{value:"Team&#39;s experience",id:"teams-experience",children:[]},{value:"Team Code Repos",id:"team-code-repos",children:[]},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",children:[]}]},{value:"Development Roadmap",id:"development-roadmap",children:[{value:"Overview",id:"overview-1",children:[]},{value:"Milestone 1: Angular-UI Identicon and Web Identicon for polkadot.js",id:"milestone-1-angular-ui-identicon-and-web-identicon-for-polkadotjs",children:[]}]},{value:"Future Plans",id:"future-plans",children:[]}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"open-grant-proposal"},"Open Grant Proposal"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Project Name:")," Polkadot UI Web Identicon + Angular Identicon"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Team Name:")," RidOne Technologies"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Payment Address:")," DAI  0xfA34F566bDDcA92Dc656310F08AC5aE64fC46456")),(0,o.kt)("h2",{id:"project-overview"},"Project Overview"),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The project goal is to develop framework agnostic Polkadot.js Web Identicon and also Angular Identicon components for  generating identity icon with address as input.The project is inspired by ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@polkadot/react-identicon"},"polkadot/react-identicon")),(0,o.kt)("h3",{id:"project-details"},"Project Details"),(0,o.kt)("p",null,"With a wide variety of front-end javascript framework, having framework agnostic components or tools is important for a broader and easier adoption of those components.\nThe polkadot.js UI for now has only React and Vue UI components but actually there are others javascript frontend frameworks like Angular, svelte, ember.js,.."),(0,o.kt)("p",null,"The project consist of the following parts :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Web UI Identicon")," : will be defined as Web component and can be used like any other native html element like  ",(0,o.kt)("inlineCode",{parentName:"li"},"p")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"div")," and it  will be used by any Javascript Front-end project using Polkadot.js. For example ",(0,o.kt)("inlineCode",{parentName:"li"},"Angular"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"React"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"React-Native"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Ember"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Vue"),", ....")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"The Angular UI Identicon")," : this component will be specific for the Angular projects using Polkadot.js library ang needing the UI Identicon component like ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@polkadot/react-identicon"},"polkadot/react-identicon")," is specific to react.js applications.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Technical documentation"),", ",(0,o.kt)("strong",{parentName:"p"},"demo"),"  and ",(0,o.kt)("strong",{parentName:"p"},"tutorials")," on how to use the components"))),(0,o.kt)("p",null,"We will not reinvent the wheel but rather be inspired by the logic used inside the react component and transpose it into the Angular Indenticon component and the Web (framework agnostic) Identicon component. "),(0,o.kt)("p",null,"For The Web and the Angular Idendicons once approved will be deployed into the ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," registry."),(0,o.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Polkadot.js Web UI Identicon")," will be of a good utility and will allow an easy adoption for team using a javascript frontend framework. For Angular developers there also will have their the angular flavor."),(0,o.kt)("h2",{id:"team"},"Team"),(0,o.kt)("h3",{id:"team-members"},"Team members"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mor GUEYE: Founder")),(0,o.kt)("h3",{id:"contact"},"Contact"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Contact Name:")," Mor GUEYE"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,o.kt)("a",{parentName:"li",href:"mailto:gueyemor2009@gmail.com"},"gueyemor2009@gmail.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Website:")," ongoing")),(0,o.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Registered Address:")," Pikine, Dakar, Senegal"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Ridone Technologies")),(0,o.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,o.kt)("p",null,"Mor actually based in Paris, has a strong experience building ",(0,o.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/mor-gueye-7659241a3/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAAC-oHT0Bsgb6uTTo3vFaGn_x3xd7077jBqA,1613649142392)/"},"web")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/mor-gueye-7659241a3/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAAC-oHT0Bsgb6uTTo3vFaGn_x3xd7077jBqA,1613649240649)/"},"mobile")," applications using technologies like Angular, Ionic, Flutter."),(0,o.kt)("p",null,"He has succesfully participated in development of the Orange Money mobile application\nfor ",(0,o.kt)("a",{parentName:"p",href:"https://apps.apple.com/sn/app/orange-money-senegal/id1447224280"},"ios")," and ",(0,o.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.orange.mobile.orangemoney&hl=fr&gl=US"},"android")," using the Angular/Ionic stack.\nHe has done consulting and development for 7 years and is now in blockchain applications development after the completion of the ",(0,o.kt)("a",{parentName:"p",href:"https://www.industryconnect.org/substrate-runtime-developer-academy/"},"Substrate Runtime Developer Academy")," program by Industry Connect and Acala and Parity Technologies.\nThe oragnization repo is quie new but some worki is ongoing in the background."),(0,o.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/RidOne-technologies/polkadot-angular-identicon"},"Angular Identicon")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/RidOne-technologies/polkadot-web-identicon"},"Web Identicon"))),(0,o.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/mor-gueye-7659241a3/"},"Mor GUEYE"))),(0,o.kt)("h2",{id:"development-roadmap"},"Development Roadmap"),(0,o.kt)("h3",{id:"overview-1"},"Overview"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 5 weeks"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):")," 0.62 FTE  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Total Costs:")," 4,000 DAI")),(0,o.kt)("h3",{id:"milestone-1-angular-ui-identicon-and-web-identicon-for-polkadotjs"},"Milestone 1: Angular-UI Identicon and Web Identicon for polkadot.js"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Estimated Duration:")," 4 weeks"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"FTE:"),"  0,62"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Costs:")," 4,000 DAI")),(0,o.kt)("p",null,"In this milestone, We will implement Angular and Web UI Identicon components\n| Number | Deliverable | Specification |\n| ------------- | ------------- | ------------- |\n| 0a. | Licence | Apache 2.0 |\n| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can use the Web or Angular Identicon for its polkadot.js library based application|\n| 0c. | Testing guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests |\n| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. |\n| 1. | Angular_Identicon | implementation of the component + Testing |\n| 2. | Web_Identicon | implementation of the web component + Testing |\n| 3. | publishing into NPM registry |\n| 4. | Documentation/ Tutorials | Documentation and Tutorials on usage example for both Angular and Web Identicon |"),(0,o.kt)("h2",{id:"future-plans"},"Future Plans"),(0,o.kt)("p",null,"Once the packages validated and deployed, we will enrich the ecosystem by :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"creating with the same approach versions for web (framework agnostic ) and Angular  versions of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/ui/tree/master/packages/react-qr"},"react-qr")," that allows for the transfer of addresses and transaction payloads to and from external readers.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We also plan to create a Flutter Identicon (as Flutter will be used in our coming products) either by using under the hood the ",(0,o.kt)("inlineCode",{parentName:"p"},"Polkadot UI Web Identicon"),"  with  webview or using the polkadot dart library which is in WIP mode for now."))))}d.isMDXComponent=!0}}]);