"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[6033],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},17446:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(83117),r=(a(67294),a(3905));const i={},o="ink! Smart Contract Upgradeability",l={unversionedId:"Applications/upgradeability-by-proxy",id:"Applications/upgradeability-by-proxy",title:"ink! Smart Contract Upgradeability",description:"Team Name:* Fractal",source:"@site/docs/Applications/upgradeability-by-proxy.md",sourceDirName:"Applications",slug:"/Applications/upgradeability-by-proxy",permalink:"/grants-test-repository/Applications/upgradeability-by-proxy",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"universaldot.me",permalink:"/grants-test-repository/Applications/universaldot.me"},next:{title:"UpLink",permalink:"/grants-test-repository/Applications/uplink"}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Upgradable Ink Smart contract infrastructure",id:"milestone-1--upgradable-ink-smart-contract-infrastructure",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ink-smart-contract-upgradeability"},"ink! Smart Contract Upgradeability"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," Fractal"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," 0xB341F86A30390048390d6eF118d0e08bBbb0fDef")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The main goal of this project is to bring smart contract upgradeability to ink."),(0,r.kt)("p",null,"Smart contract upgradeability is an important mechanism to fix security bugs in\ncontracts. It also enables post-deployment iterative development, by offering\nthe flexibility of adding new features."),(0,r.kt)("p",null,"This mechanism should be flexible enough that contract developers may decide if\nthey want to be able to upgrade their contracts, and specify under what\nconditions."),(0,r.kt)("p",null,"Our team is interested in this because it is very likely that our development\nefforts start with smart contracts before moving to a custom Substrate runtime.\nAnother reason upgradeability is particularly important to us is that we expect\nto iterate our logic frequently based on a continuous product discovery process."),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("p",null,"Upgrade functionality can be implemented in user-land, or as part of the smart\ncontracts pallet. We are starting with the first option: it gives us more\nflexibility to experiment, and iterate faster towards an adequate soltuion.\nWhen we're happy with the result, we'll see what can be migrated to ink as a\ndirective to reduce boilerplate."),(0,r.kt)("p",null,"We're going to start by implementing the proxy pattern. There are a few\nconcerns that will need to be addressed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"figure out how to handle the separation between state and code"),(0,r.kt)("li",{parentName:"ul"},"design a standard for data migrations on contract upgrade"),(0,r.kt)("li",{parentName:"ul"},"design a standard for upgrade authorization"),(0,r.kt)("li",{parentName:"ul"},"decide if the contract's public interface can/should be upgradable or static")),(0,r.kt)("p",null,"We want to allow for flexibility when deciding if a smart contract can be\nupgradable or not, and under what circumstances. Should we allow upgrades to\nthe authorization code?"),(0,r.kt)("p",null,"Upgrading the contract's public interface may not be possible when using the\nproxy pattern."),(0,r.kt)("p",null,"Ink's documentation and examples provide us with the delegator pattern. This\ncontract works by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"put_code"),' once for the delegator contract and once\nfor the "delegated-to" contract. Every method that is delegated must be\nexplicitly defined in the delegator.'),(0,r.kt)("p",null,"For milestone 1, we will build a template using this pattern with upgrade and\nauthorization methods. This is a template and not a library/ink directive\nbecause we want to focus on the upgrade pattern mechanism and leave any ink\nquality-of-life improvements, like directives or syntax sugar, for the second\nmilestone."),(0,r.kt)("p",null,"Something that we will consider for future work is extracting any patterns into\nink directives that bring us ergonomy of use. For example, assuming we end up\ndeciding on the proxy method, we could automatically generate the proxied\nmethods."),(0,r.kt)("p",null,"Parts of this work may be liftable to the smart contracts pallet. The\nadvantages of implementing certain features directly in the pallet is that\nthey'd be more efficient and we could tweak their incentive structure."),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("p",null,"Since smart contract development is more accessible and less involved than\nruntime development, we expect most folks who build on Polkadot to benefit from\nthis mechanism. Substrate offers a natural development path from smart\ncontracts to runtime, so it's also likely that this will assist folks getting\nstarted with smart contracts even if they intend to move to a custom runtime in\nthe future."),(0,r.kt)("p",null,"We didn't find related ideas in the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/General-Grants-Program"},"https://github.com/w3f/General-Grants-Program")," or\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/Open-Grants-Program"},"https://github.com/w3f/Open-Grants-Program")," repos. We also asked some folks in\nthe community, none of whom were aware of similar projects."),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/hugopeixoto/"},"Hugo Peixoto")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/juliosantos/"},"J\xfalio Santos"))),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," J\xfalio Santos"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"li",href:"mailto:julio@fractal.id"},"julio@fractal.id")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://trustfractal.com/"},"https://trustfractal.com/"))),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Address:")," Wiener Stra\xdfe 10, 10999 Berlin, Germany"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Trust Fractal GmbH")),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Back in 2017, we've implemented a card game\n(",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Baccarat_(card_game)"},"Baccarat"),") in Solidity.\nEVM and Solidity have no primitives to generate random numbers, as there is\nno trustworthy source of entropy available on the blockchain \u2014 so we\ndescribed and built a method for provably fair random number generation with\na non-repudiable commitment scheme. This was implemented using state channels\nfor reduced latency and cost. It was built for a client who now owns the IP,\nso we can't share anything else here, but can do in private if needed."),(0,r.kt)("li",{parentName:"ul"},"In 2017-2018 we built and operated an ICO launchpad to help teams building on\nblockchain, such as the ",(0,r.kt)("a",{parentName:"li",href:"https://oceanprotocol.com/"},"Ocean Protocol"),", to\ncrowdfund their projects with community support. See ",(0,r.kt)("a",{parentName:"li",href:"https://medium.com/future-energy-ventures/why-we-invested-in-fractal-d98eaf0cdc70"},"this Medium\npost"),"\nfrom ",(0,r.kt)("a",{parentName:"li",href:"https://www.eon.de/de/innogy.html"},"Innogy"),", an early investor in\nFractal, for more information."),(0,r.kt)("li",{parentName:"ul"},"In early 2018 we built a prototype of on-chain KYC using the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ethereum/eips/issues/725"},"ERC\n725")," and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ethereum/eips/issues/735"},"ERC\n735")," standards. See ",(0,r.kt)("a",{parentName:"li",href:"https://hackernoon.com/first-impressions-with-erc-725-and-erc-735-identity-and-claims-4a87ff2509c9"},"our medium\npost"),"\non this for more information."),(0,r.kt)("li",{parentName:"ul"},"In late 2018, we built our first on-chain KYC integration with DIDs and\nverifiable credentials, when working with ",(0,r.kt)("a",{parentName:"li",href:"https://ixo.world/"},"https://ixo.world/"),". Once we\nconfirmed that a user controlled a certain address (by asking them to sign a\nnonce), we would create their DID on their behalf. Once their KYC\nverification completed, we would ledger the corresponding credential against\nthis DID. See ",(0,r.kt)("a",{parentName:"li",href:"https://medium.com/hackernoon/decentralized-identity-w3c-standards-and-the-ixo-keysafe-69d7e8d6fd7c"},"our Medium post on\nthis"),"\nfor more information."),(0,r.kt)("li",{parentName:"ul"},"We're currently working with ",(0,r.kt)("a",{parentName:"li",href:"https://www.kilt.io/"},"KILT")," to deliver a\ndecentralised KYC solution for ",(0,r.kt)("a",{parentName:"li",href:"https://www.polkadex.trade/"},"Polkadex"),". See\n",(0,r.kt)("a",{parentName:"li",href:"https://kilt-protocol.medium.com/fractal-kilt-protocol-and-polkadex-collaborate-to-provide-decentralised-kyc-solution-for-exchange-d9d0f8c18163"},"KILT's medium post on\nthis"),"\nfor more information.")),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/trustfractal/ink-upgrade-template"},"https://github.com/trustfractal/ink-upgrade-template"))),(0,r.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/hugopeixoto"},"https://www.linkedin.com/in/hugopeixoto")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/jvsantos"},"https://www.linkedin.com/in/jvsantos"))),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  0.5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," DAI 9700")),(0,r.kt)("h3",{id:"milestone-1--upgradable-ink-smart-contract-infrastructure"},"Milestone 1 \u2014 Upgradable Ink Smart contract infrastructure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  0.5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," DAI 9700")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},'Documentation on how to use the smart contract template. This should answer the question "how do I build my contract in a way that lets me upgrade it afterwards?"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Article/Tutorial"),(0,r.kt)("td",{parentName:"tr",align:null},"We will write an article or tutorial that explains the work done as part of the grant.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"An Ink! based upgradeable Smart Contract structure"),(0,r.kt)("td",{parentName:"tr",align:null},"A collection of Ink! smart contracts that be used as a starting point for people that want to have upgradable smart contracts. This collection will contain upgrade logic (including authorization and data migration calls) and some sample methods that users can adapt when developing their own contracts.")))),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("p",null,"After milestone 1 is complete, we will analyse the resulting smart contracts\nand see if there is any pattern that would benefit from being extracted onto an\nink directive. For example, if we end up using the proxy method, we might propose\nan ink! directive that automatically generates the delegation methods."),(0,r.kt)("p",null,"There's also the chance that some patterns or functionality would be better\nimplemented directly into the smart contracts pallet, so that other features,\nunrelated to upgrades, can take advantage of them."),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,"This proposal is slightly research oriented."))}d.isMDXComponent=!0}}]);