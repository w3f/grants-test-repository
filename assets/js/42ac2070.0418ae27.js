"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[3598],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(a),k=n,u=c["".concat(p,".").concat(k)]||c[k]||m[k]||o;return a?r.createElement(u,l(l({ref:t},d),{},{components:a})):r.createElement(u,l({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},20604:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={},l="Open Grant Proposal",i={unversionedId:"Applications/polkadotjs-hardware",id:"Applications/polkadotjs-hardware",isDocsHomePage:!1,title:"Open Grant Proposal",description:"* Project: Hardware ECDSA for Polkadot JS",source:"@site/docs/Applications/polkadotjs-hardware.md",sourceDirName:"Applications",slug:"/Applications/polkadotjs-hardware",permalink:"/grants-test-repository/docs/Applications/polkadotjs-hardware",editUrl:"https://github.com/w3f/grants-test-repository/edit/master/docs/Applications/polkadotjs-hardware.md",tags:[],version:"current",lastUpdatedBy:"Sebastian M\xfcller",lastUpdatedAt:1667994768,formattedLastUpdatedAt:"11/9/2022",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Open Grant Proposal",permalink:"/grants-test-repository/docs/Applications/polkadotjs-ecdsa"},next:{title:"W3F Grant Proposal",permalink:"/grants-test-repository/docs/Applications/polkadotjs_no_code"}},p=[{value:"Project Description \ud83d\udcc4",id:"project-description-",children:[]},{value:"Team \ud83d\udc65",id:"team-",children:[]},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",children:[{value:"Milestone 1",id:"milestone-1",children:[]},{value:"Milestone 2",id:"milestone-2",children:[]}]}],s={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"open-grant-proposal"},"Open Grant Proposal"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Project:")," Hardware ECDSA for Polkadot JS"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Proposer:")," @akru"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Payment Address:")," 1DJTSPajRFCjdfn5UgPXGRo6Di8EE1Dzox")),(0,n.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,n.kt)("p",null,"Hardware wallets provide for end-user much more hight grade of security than traditional software wallets because of moving the private key out of general using PC. The most popular, Trezor (",(0,n.kt)("a",{parentName:"p",href:"https://trezor.io/"},"https://trezor.io/"),") and Ledger (",(0,n.kt)("a",{parentName:"p",href:"https://www.ledger.com/"},"https://www.ledger.com/"),"), supports Ethereum / Bitcoin cryptography (ECDSA) by default. But ECDSA crypto is native for the Polkadot ecosystem too that makes hardware wallets fully compatible with Polkadot applications without any changes in hardware wallet firmware."),(0,n.kt)("p",null,"This proposal improves already implemented software ECDSA keyring in PolkadotJS (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/w3f/Open-Grants-Program/pull/6"},"https://github.com/w3f/Open-Grants-Program/pull/6"),") and planned to be directly integrated into Polkadot JS which is part of the Polkadot ecosystem."),(0,n.kt)("p",null,"Plasm Network(",(0,n.kt)("a",{parentName:"p",href:"https://plasmnet.io"},"https://plasmnet.io"),") is a scaling Dapps platform on Substrate. Plasm Network is planned to be a parachain in the Polkadot ecosystem. The Plasm token distribution model involves the use of a lockdrop approach in Ethereum and Bitcoin networks where Secp256k1 cryptography is a de facto standard. Plasm team is highly interested in making lockdrop participation process smoothly as much as possible. ECDSA integration into the Polkadot ecosystem is one of the steps to makes it real."),(0,n.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Members:")," Aleksandr Krupenkin, Sota Watanabe, Takumi Yamashita, Task Ohmori, Kim Hoon"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"LinkedIn Profiles:")," ",(0,n.kt)("a",{parentName:"li",href:"http://linkedin.com/in/krupenkin"},"http://linkedin.com/in/krupenkin"),", ",(0,n.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/sota-watanabe-b962b3110"},"https://www.linkedin.com/in/sota-watanabe-b962b3110"),", ",(0,n.kt)("a",{parentName:"li",href:"http://linkedin.com/in/task-ohmori-604398176"},"http://linkedin.com/in/task-ohmori-604398176")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Code Repos:")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/staketechnologies/common"},"https://github.com/staketechnologies/common"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/staketechnologies/apps"},"https://github.com/staketechnologies/apps")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Website:")," ",(0,n.kt)("a",{parentName:"li",href:"https://stake.co.jp"},"https://stake.co.jp")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Legal Structure:")," Stake Technologies Inc. Avex EYE Avex Blog 3-1-30 Minamiaoyama Minato-ku Tokyo Japan"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Team's Experience:"),"  Stake Technologies is a technology company that focuses on substrate research and development as same as the business application of given results. Aleksandr Krupenkin, main experience as Haskell Web3 library (",(0,n.kt)("a",{parentName:"li",href:"https://hs-web3.readthedocs.io/en/latest/index.html"},"https://hs-web3.readthedocs.io/en/latest/index.html"),") owner, including cryptographic functions for Haskell Ethereum client.")),(0,n.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 6 weeks"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):")," 0.6"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Costs:")," 0.7 BTC")),(0,n.kt)("h3",{id:"milestone-1"},"Milestone 1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated Duration:")," 3 weeks "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):")," 0.6"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," 0.35 BTC")),(0,n.kt)("p",null,"Trezor API support for Polkadot JS Apps."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,n.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1."),(0,n.kt)("td",{parentName:"tr",align:null},"Trezor API ECDSA signer"),(0,n.kt)("td",{parentName:"tr",align:null},"Introducing Trezor API based signed for Polkadot JS. Required API methods already exposed by standard Trezor API: ",(0,n.kt)("a",{parentName:"td",href:"https://wiki.trezor.io/Developers_guide:Trezor_Connect_API_Methods#getPublicKey"},"getPublicKey"),", ",(0,n.kt)("a",{parentName:"td",href:"https://wiki.trezor.io/Developers_guide:Trezor_Connect_API_Methods#signMessage"},"signMessage"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2."),(0,n.kt)("td",{parentName:"tr",align:null},"Improve documentation"),(0,n.kt)("td",{parentName:"tr",align:null},"Add Trezor hardware wallet paragraph into Polkadot-js documentation.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3."),(0,n.kt)("td",{parentName:"tr",align:null},"Demo video"),(0,n.kt)("td",{parentName:"tr",align:null},"Provide demo video of Polkadot Apps sign transaction with Trezor wallet.")))),(0,n.kt)("h3",{id:"milestone-2"},"Milestone 2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated Duration:")," 3 weeks "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):")," 0.6"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," 0.35 BTC")),(0,n.kt)("p",null,"Ledger API support for Polkadot JS Apps."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,n.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1."),(0,n.kt)("td",{parentName:"tr",align:null},"Ledger API ECDSA signer"),(0,n.kt)("td",{parentName:"tr",align:null},"Introducing Ledger API based signed for Polkadot JS. Required API methods already exposed by standard Ledger API: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/LedgerHQ/ledgerjs/blob/96306b2c0d75e1290461fb52b8f69f506a425643/packages/hw-app-btc/src/getWalletPublicKey.js#L16"},"getPublicKey"),", ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/LedgerHQ/ledgerjs/blob/96306b2c0d75e1290461fb52b8f69f506a425643/packages/hw-app-btc/src/signMessage.js#L6"},"signMessage"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2."),(0,n.kt)("td",{parentName:"tr",align:null},"Improve documentation"),(0,n.kt)("td",{parentName:"tr",align:null},"Add Ledger hardware wallet paragraph into Polkadot-js documentation.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3."),(0,n.kt)("td",{parentName:"tr",align:null},"Demo video"),(0,n.kt)("td",{parentName:"tr",align:null},"Provide demo video of Polkadot Apps sign transaction with Trezor wallet.")))))}d.isMDXComponent=!0}}]);