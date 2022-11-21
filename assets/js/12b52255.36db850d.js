"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[1042],{21809:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));a(16758);const r={},l="AlgoCash",i={unversionedId:"Applications/AlgoCash",id:"Applications/AlgoCash",title:"AlgoCash",description:"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the Open Grants Program Process on how to submit a proposal.",source:"@site/docs/Applications/AlgoCash.md",sourceDirName:"Applications",slug:"/Applications/AlgoCash",permalink:"/grants/Applications/AlgoCash",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Afloat Tax Infrastructure Polkadot Integration",permalink:"/grants/Applications/Afloat"},next:{title:"Apron Network",permalink:"/grants/Applications/Apron_Network"}},s={},d=[{value:"Project Overview",id:"project-overview",level:2},{value:"Overview",id:"overview",level:3},{value:"Integration",id:"integration",level:3},{value:"Project Details",id:"project-details",level:2},{value:"Tokens",id:"tokens",level:3},{value:"ALC - Algo Cash",id:"alc---algo-cash",level:4},{value:"ALB - Algo Bonds",id:"alb---algo-bonds",level:4},{value:"ALS - Algo Shares",id:"als---algo-shares",level:4},{value:"Pools",id:"pools",level:3},{value:"Treasury",id:"treasury",level:4},{value:"Boardroom",id:"boardroom",level:4},{value:"Stabilization Mechanism",id:"stabilization-mechanism",level:3},{value:"Contractionary Policy",id:"contractionary-policy",level:4},{value:"Expansionary Policy",id:"expansionary-policy",level:4},{value:"Token Distribution",id:"token-distribution",level:3},{value:"Contract",id:"contract",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team",id:"team",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap",id:"development-roadmap",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 Example \u2014 Implement Substrate Modules",id:"milestone-1-example--implement-substrate-modules",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Community Engagement",id:"community-engagement",level:2}],p={toc:d};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"algocash"},"AlgoCash"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md"},"Open Grants Program Process")," on how to submit a proposal.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Team Name:")," Reserve Labs"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Payment Address:")," DAI Address: 0x3f91475fbd0c3d9c676d39af071691c1cf635f0b")),(0,o.kt)("h2",{id:"project-overview"},"Project Overview"),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The price volatility of cryptocurrencies is a major blocker for mass adoption. Their rapid change in fiat-denominated value causes payment values to vary even during settlement times, being highly inconvenient to merchants that handle them."),(0,o.kt)("p",null,"Stablecoins are cryptocurrencies with an exchange rate peg with existing fiat currencies or a fiat-related index, thereby drastically increasing their usefulness as a payment medium."),(0,o.kt)("p",null,"Although there exists a wide variety of stablecoin mechanisms, some are with censorship risks or some are still suffered from price volatility."),(0,o.kt)("p",null,"Algo Cash specifically uses an algorithmic approach to manage the supply of tokens according to a predetermined logic. The algorithm is in charge of balancing stablecoin supply to fluctuating demand, ensuring that the token price remains relatively stable."),(0,o.kt)("h3",{id:"integration"},"Integration"),(0,o.kt)("p",null,"Algo Cash is implemented as a smart contract which can be deployed into ink! pallet of a parachain."),(0,o.kt)("p",null,"For trading and liquidity purpose, Algo Cash could be integrated with such protocols in Polkadot as Konomi and Zenlink."),(0,o.kt)("h2",{id:"project-details"},"Project Details"),(0,o.kt)("h3",{id:"tokens"},"Tokens"),(0,o.kt)("h4",{id:"alc---algo-cash"},"ALC - Algo Cash"),(0,o.kt)("p",null,"Algo Cash tokens are designed to be used as a medium of exchange. The built-in stability mechanism expands and contracts their supply, maintaining their peg to the aUSD token."),(0,o.kt)("h4",{id:"alb---algo-bonds"},"ALB - Algo Bonds"),(0,o.kt)("p",null,"Algo Bonds are minted and redeemed to incentivize changes in the Algo Cash supply. Bonds are always on sale to Algo Cash holders, although purchases are expected to be made at a price below 1 Algo Cash. At any given time, holders are able to exchange their bonds to Algo Cash tokens in the Algo Cash Treasury. Upon redemption, they are able to convert 1 Algo Bond to 1 Algo Cash, earning them a premium on their previous bond purchases."),(0,o.kt)("p",null,"Bonds do not have expiration dates. All holders are able to convert their bonds to Algo Cash tokens, as long as the Treasury has a positive ALC balance."),(0,o.kt)("h4",{id:"als---algo-shares"},"ALS - Algo Shares"),(0,o.kt)("p",null,"Algo Shares loosely represent the value of the Algo Cash network. Increased demand for Algo Cash results in new Algo Cash tokens to be minted and distributed to Algo Share holders, provided that the Treasury is sufficiently full."),(0,o.kt)("p",null,"Holders of Algo Share tokens can claim a pro-rata share of Algo Cash tokens accumulated to the Boardroom contract."),(0,o.kt)("h3",{id:"pools"},"Pools"),(0,o.kt)("h4",{id:"treasury"},"Treasury"),(0,o.kt)("p",null,"The Algo Cash Treasury exists to enable bond-to-cash redemptions. Bonds redeemed via the Treasury automatically returns the user an equal number of Algo Cash, provided that: 1) the oracle price of Algo Cash is above 1 aUSD, and 2) the Treasury contract has a positive balance of Algo Cash."),(0,o.kt)("p",null,"Disallowing redemptions when the Algo Cash price is below 1 aUSD prevents bond holders from prematurely cutting their losses and creating unnecessary downward pressure on the price of ALC."),(0,o.kt)("h4",{id:"boardroom"},"Boardroom"),(0,o.kt)("p",null,"The Boardroom allows Algo Share holders to claim excess Algo Cash minted by the protocol. Holders of Algo Shares can stake their Shares to the Boardroom contract, which by doing so, they can claim a pro-rata share of Algo Cash tokens assigned to the Boardroom."),(0,o.kt)("h3",{id:"stabilization-mechanism"},"Stabilization Mechanism"),(0,o.kt)("p",null,"The Algo Cash protocol is designed to guarantee Algo Cash tokens to be exchanged at a value of a single US dollar, with the stabilizer (in-protocol stability mechanism) in charge of matching the supply of Algo Cash to their demand."),(0,o.kt)("p",null,"Every 24 hours, the time-weighted average of the ALC-aUSD exchange rate is read from the DEX Aggregator in Polkaot, which is then fed into the Algo Cash protocol to be referenced by its stability mechanism."),(0,o.kt)("p",null,"The stabilization mechanism is triggered whenever the price of Algo Cash is observed to be above / below (1+\u03b5) aUSD, where \u03b5 is a parameter that defines the range of price stability for the ALC token. In inilization, \u03b5 is set to be 0.05."),(0,o.kt)("h4",{id:"contractionary-policy"},"Contractionary Policy"),(0,o.kt)("p",null,"At any point in time, Algo Bonds can be bought from the protocol in exchange for Algo Cash. Purchase of Bonds are performed at an algorithmically set price. With a Algo Cash oracle price of P aUSD, bonds are sold off at a price of P ALC (effective price being P^2 aUSD), promising bond holders a premium when redeemed. Purchased bonds can be converted to Algo Cash, insofar as the preconditions are met and the Treasury is not empty."),(0,o.kt)("h4",{id:"expansionary-policy"},"Expansionary Policy"),(0,o.kt)("p",null,"If the price of Algo Cash is observed to be higher than (1+\u03b5) aUSDT, the system mints totalSupply *(oraclePrice-1) number of new Algo Cash tokens. The issued Algo Cash is either deposited to the Treasury or the Boardroom, depending on the Algo Cash balance of the Treasury."),(0,o.kt)("p",null,"If the Treasury has a balance above 1,000 Algo Cash, then it is logical to assume that either all bonds have been already redeemed, or no bond holder is currently willing to perform a redemption.Either way, this signals that the demand for bond redemption do not exist at this time, and thus the freshly minted Algo Cash is given to the Boardroom contract."),(0,o.kt)("p",null,"However, if the Treasury has a balance of below 1,000 Algo Cash, then it is assumed that there will be additional demand for bond-to-cash redemption. Therefore, the issued Algo Cash is routed to the Treasury so that Bond holders can exercise redemptions."),(0,o.kt)("h3",{id:"token-distribution"},"Token Distribution"),(0,o.kt)("p",null,"Initial distribution of Algo Cash are done to those that deposit aUSD to the distribution contract. A total of 100,000 Algo Cash tokens are distributed to depositors, with 10,000 Cash tokens distributed per day. The amount of stablecoin deposits are limited to 20,000 tokens per account."),(0,o.kt)("p",null,"Afterwards, a total of 1,500,000 Algo Shares are on crowd sale and the initial token price would be 40 aUSD. The crowd sale will last for 15 days. Afterwards, ALS will be listed on the DEXs with the same price as in the crowd sale, all funds raised in the crowd sale will be distributed to the DEX as buy orders and all Share tokens left will be distributed as sell orders."),(0,o.kt)("p",null,"Further distribution of Algo Shares are given to liquidity providers (e.g. ALS-DOT pair, ALS-aUSD pair, etc.) or ecosystem contributors. A total of 500,000 Algo Shares are distributed over a period of 1 year, and an equal amount of tokens are distributed per day."),(0,o.kt)("p",null,"Advantages"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Funds in the crowd sale will not be abused, but used to establish the liquidity market.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Regardless of the funds raised, sufficient selling liquidity can be provided to facilitate large amounts of funds to enter the market.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Compared to joint curve issuance: a fair start, avoiding scientists from rushing")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Compared to AMM 2 pool mining: inflation tokens are not required to pay liquidity rents, and tokens are distributed to investors instead of those who "dig, sell and withdraw".')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Compared to auctions: Crowd sale is compatible with auction functions, but it is not just a simple fundraising. After the crowd sale is over, a market with abundant liquidity will be established immediately. Even having not raise enough funds, a market with sufficient selling liquidity can still be established, which AMM cannot do."))),(0,o.kt)("h3",{id:"contract"},"Contract"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"cash - Minting and burning of the cash token")),(0,o.kt)("p",null,"Mints ",(0,o.kt)("em",{parentName:"p"},"amount")," cash to the ",(0,o.kt)("em",{parentName:"p"},"recipient")," account."),(0,o.kt)("p",null,"Burns ",(0,o.kt)("em",{parentName:"p"},"amount")," cash from the ",(0,o.kt)("em",{parentName:"p"},"account"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"bond - Minting and burning of the bond token")),(0,o.kt)("p",null,"Mints ",(0,o.kt)("em",{parentName:"p"},"amount")," bond to the ",(0,o.kt)("em",{parentName:"p"},"recipient")," account."),(0,o.kt)("p",null,"Burns ",(0,o.kt)("em",{parentName:"p"},"amount")," bond from the ",(0,o.kt)("em",{parentName:"p"},"account"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"share - Minting and burning of the share token")),(0,o.kt)("p",null,"Mints ",(0,o.kt)("em",{parentName:"p"},"amount")," share to the ",(0,o.kt)("em",{parentName:"p"},"recipient")," account."),(0,o.kt)("p",null,"Burns ",(0,o.kt)("em",{parentName:"p"},"amount")," share from the ",(0,o.kt)("em",{parentName:"p"},"account"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Treasure - Bond purchase and redemptions")),(0,o.kt)("p",null,"Returns the oracle price of Algo Cash denominated in aUST."),(0,o.kt)("p",null,"Mints ",(0,o.kt)("em",{parentName:"p"},"amount")," Algo Bonds, in exchange for same ",(0,o.kt)("em",{parentName:"p"},"amount")," Algo Cash burnt."),(0,o.kt)("p",null,"Mints ",(0,o.kt)("em",{parentName:"p"},"amount")," Algo Cash, in exchange for ",(0,o.kt)("em",{parentName:"p"},"amount")," Algo Bonds burnt."),(0,o.kt)("p",null,"If the oracle price of Algo Cash is above (1+\u03b5) aUST, mints ",(0,o.kt)("em",{parentName:"p"},"((ALC Oracle Price) - 1) ")," cashSupply* number of Algo Cash to either the Boardroom contract or the Treasury contract.If the Treasury's balance is below 1,000 ALC, the allocation is given to the Treasury, else give it to the Boardroom."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Boardroom - Handling claims from the share")),(0,o.kt)("p",null,"Stakes ",(0,o.kt)("em",{parentName:"p"},"amount")," Algo Shares to Boardroom sends all prior accrued dividends to ",(0,o.kt)("em",{parentName:"p"},"account"),"."),(0,o.kt)("p",null,"Withdraws ",(0,o.kt)("em",{parentName:"p"},"amount")," Algo Shares and all accrued dividends to ",(0,o.kt)("em",{parentName:"p"},"account"),"."),(0,o.kt)("p",null,"Returns the amount of all dividends accrued by ",(0,o.kt)("em",{parentName:"p"},"account"),"."),(0,o.kt)("p",null,"Claims all accrued dividends to ",(0,o.kt)("em",{parentName:"p"},"account"),"."),(0,o.kt)("p",null,"When new cash is assigned to the Boardroom contract. Records the current block timestamp, the amount of new cash, and the current amount of total Shares staked."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"oracle - Retrieving the exchange rate between Algo Cash and aUST")),(0,o.kt)("p",null,"If 24 hours has passed since update() was last successfully executed, updates the time-weighted average price of Algo Cash."),(0,o.kt)("p",null,"Returns the amount of ",(0,o.kt)("em",{parentName:"p"},"output")," tokens given in exchange for ",(0,o.kt)("em",{parentName:"p"},"input")," number of ",(0,o.kt)("em",{parentName:"p"},"token")," tokens ((Price of ",(0,o.kt)("em",{parentName:"p"},"token")," token denominated in ",(0,o.kt)("em",{parentName:"p"},"output")," tokens) * ",(0,o.kt)("em",{parentName:"p"},"input"),")."),(0,o.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,o.kt)("p",null,"Acala, aUSD is generated in a collateral way."),(0,o.kt)("p",null,"Basis Cash (on Ethereum), shares are initialized by 'AMM + 2nd pool' which would cause dramatic infaltion, forcing Yeild Farmers to sell their assets to the second market."),(0,o.kt)("h2",{id:"team"},"Team"),(0,o.kt)("h3",{id:"team-members"},"Team members"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Nick Hsu, Blockchain Expert and Team Leader"),(0,o.kt)("li",{parentName:"ul"},"Gang Chan, Full Stack Developer "),(0,o.kt)("li",{parentName:"ul"},"Gieno Miao, Crypto Expert and Blockchain Architect")),(0,o.kt)("h3",{id:"contact"},"Contact"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Contact Name:")," Nick Hsu"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,o.kt)("a",{parentName:"li",href:"mailto:nick_hsu@sina.com"},"nick_hsu@sina.com"))),(0,o.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,o.kt)("p",null,"No legal Entity"),(0,o.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,o.kt)("p",null,"Nick has 16 years of software development experience and 5 years working in Blochain area as developer and product owner."),(0,o.kt)("p",null,"Gang is now working as a freelancer. He is a full stack developer proficient in C++, Rust, React and Solidity. He has 3 years software development experience and 2 years smart contract development experience."),(0,o.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ReserveLabs/AlgoCash"},"https://github.com/ReserveLabs/AlgoCash"))),(0,o.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,o.kt)("p",null,"no"),(0,o.kt)("h2",{id:"development-roadmap"},"Development Roadmap"),(0,o.kt)("h3",{id:"overview-1"},"Overview"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 6 weeks"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):"),"  1.5"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Total Costs:")," 5,000 DAI")),(0,o.kt)("h3",{id:"milestone-1-example--implement-substrate-modules"},"Milestone 1 Example \u2014 Implement Substrate Modules"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Estimated Duration:")," 7 weeks"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Costs:")," 5,000 DAI  ")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Number"),(0,o.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,o.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0"),(0,o.kt)("td",{parentName:"tr",align:null},"License"),(0,o.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / MIT / Unlicense")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,o.kt)("td",{parentName:"tr",align:null},"Specification of the background, components and working mechanism")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2"),(0,o.kt)("td",{parentName:"tr",align:null},"Smart Contract"),(0,o.kt)("td",{parentName:"tr",align:null},"AlgoCash smart contract repo. The smart contract can be deployed to any substrate chain with ink! pallet.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"3"),(0,o.kt)("td",{parentName:"tr",align:null},"Tests"),(0,o.kt)("td",{parentName:"tr",align:null},"Unit Test and also we will test it on Canvas")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"4"),(0,o.kt)("td",{parentName:"tr",align:null},"Docker"),(0,o.kt)("td",{parentName:"tr",align:null},"A docker image with a Substrate chain for PoC")))),(0,o.kt)("h2",{id:"future-plans"},"Future Plans"),(0,o.kt)("p",null,"Shares token design for governance."),(0,o.kt)("p",null,"We will build a DEX with PMM (Proactive Market Maker) algorithm."),(0,o.kt)("h2",{id:"community-engagement"},"Community Engagement"),(0,o.kt)("p",null,"We will reach DEX and Lending protocol communities to enlarge Algo Cash adoption."))}h.isMDXComponent=!0}}]);