"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[126],{29083:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));a(16758);const r={},s="Derivative Powered Uncollateralized Stablecoin Research and Design",o={unversionedId:"Applications/stardust",id:"Applications/stardust",title:"Derivative Powered Uncollateralized Stablecoin Research and Design",description:"This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a > (such as this one) can be removed.",source:"@site/docs/Applications/stardust.md",sourceDirName:"Applications",slug:"/Applications/stardust",permalink:"/grants/Applications/stardust",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Staking Rewards Viewer",permalink:"/grants/Applications/staking-rewards-collector-front-end"},next:{title:"Starks Network",permalink:"/grants/Applications/starks_network"}},l={},d=[{value:"Project Overview :page_facing_up",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Why Now &amp; Risks",id:"why-now--risks",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team :busts_in_silhouette",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status :open_book",id:"development-status-open_book",level:2},{value:"Development Roadmap :nut_and_bolt",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 State of the Industry on Stablecoins",id:"milestone-1--state-of-the-industry-on-stablecoins",level:3},{value:"Milestone 2 \u2014 Terra Collapse Deep Dive",id:"milestone-2--terra-collapse-deep-dive",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information :heavy_plus_sign",id:"additional-information-heavy_plus_sign",level:2}],c={toc:d};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"derivative-powered-uncollateralized-stablecoin-research-and-design"},"Derivative Powered Uncollateralized Stablecoin Research and Design"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a ",(0,i.kt)("inlineCode",{parentName:"p"},">")," (such as this one) can be removed."),(0,i.kt)("p",{parentName:"blockquote"},"See the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/#pencil-process"},"Grants Program Process")," on how to submit a proposal.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," Stardust Labs Inc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 0xF3d5F194D9eF961a85a4d5be05EFda7B2B33005d (DAI, Ethereum Mainet)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 1")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,i.kt)("em",{parentName:"p"},"The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe."))),(0,i.kt)("h2",{id:"project-overview-page_facing_up"},"Project Overview :page_facing_up"),(0,i.kt)("p",null,"This proposal is in response to an RFP for an Uncollateralized Stablecoin (Specifically: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/rfps/uncollateralized-stablecoin.md"},"https://github.com/w3f/Grants-Program/blob/master/rfps/uncollateralized-stablecoin.md"),")."),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A brief description of your project.")),(0,i.kt)("p",null,"We are proposing a functionally different approach for an uncollateralized stablecoin. Extant uncollateralized stablecoin solutions are based on creating and burning an ERC20-style token. By monitoring exchange rates and managing the token supply, these uncollateralized stablecoins seek to balance supply and demand to peg the exchange rate to a reference currency. To date, none have achieved commercial success and the inherent limitations and flaws of this architecture are quickly becoming apparent even with a theoretically perfect implementation. This paper dives deeper into the current challenges (",(0,i.kt)("a",{parentName:"p",href:"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3952045"},"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3952045"),"), the first of which is a baseline support level of demand for operational stability which this RFP seeks to address."),(0,i.kt)("p",null,'Stardust Labs is proposing a fundamentally different approach that uses financial derivatives to programmatically and algorithmically generate a "synthetic" derivatives-based stablecoin that can be originated or settled on demand.'),(0,i.kt)("p",null,"At a high level, the primary focus of stablecoins is risk mitigation. Modern commercially successful architectures derisk by having a centralized entity issue tokens based on physical reserves of the pegged currency held in custody. The primary problem here is trusting the custody of a centralized entity, a particular challenge considering most are cross-border, transnational companies with limited auditing and opaque balance sheets."),(0,i.kt)("p",null,"Our proposal is to utilize the latest advancements in decentralized finance to instead originate synthetic financial derivatives on demand. This securitized financial instrument would emulate the stability and utility of a stablecoin without requiring collateral or physical custody. In short, put-call parity allows the algorithmic construction of a synthetic financial instrument from perpetual contracts that effectively locks the value relative to the pegged currency at the risk free rate. By securitizing this construct into a token we can generate a synthetic stablecoin on demand as well as close them on demand as long as a perpetual contract can be accessed and decentralized markets maintain enough liquidity in the perpetual contract market."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An indication of how your project relates to / integrates into Substrate / Polkadot / Kusama.")),(0,i.kt)("p",null,'What we are proposing is relatively unprecedented but there are promising signs. Angle Labs launched on Ethereum last year as an ERC20 token in order to provide a stablecoin pegged to the Euro. They term themselves "the first decentralized, capital efficient and over-collateralized stablecoin protocol" (',(0,i.kt)("a",{parentName:"p",href:"https://www.angle.money/"},"https://www.angle.money/"),"). Angle Lab's stablecoin is collateralized with Ethereum and more specifically over-collateralized to ensure safety. In July of 2021 they published a whitepaper indicating that they were going to deploy self-minted perpetual contracts as a tool to bring in additional collateral and protection against large price moves. These perpetuals provide additional outsourcing of risk in addition to directly increasing ETH collateral. 5 months ago, they raised $5M from a16z and others to explore the technology. Our proposed architecture would bring that attention and innovation to the Polkadot network. More importantly for the Polkadot ecosystem, our proposal is decentralized and truly uncollateralized as it manages risks entirely through derivatives, and can generate synthetic stablecoins between any arbitrary pairs provided there is a perpetual contract market with sufficient liquidity."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An indication of why your team is interested in creating this project.")),(0,i.kt)("p",null,"Stardust Labs is focused on developing foundational advancements in distributed ledgers that improve consumer and user safety. Our overall goal is to build safer, more efficient financial infrastructure for the public. While extant distributed ledger applications have largely solved the use case of peer to peer payments, extant implementations of stablecoins currently have challenges that limit their use or safety."),(0,i.kt)("p",null,"Stardust Labs is specifically drawn to this RFP as our team has extensive expertise in developing safe and efficient financial products for traditional commercial banks and specific subject matter expertise in decentralized finance and financial engineering. We ultimately believe an uncollateralized, independent stablecoin would have unprecedented utility in the space."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"Historically stablecoins have been roughly one of two types. The first are asset-backed tokens controlled by centralized entities that maintain custody of physical assets. These assets could be fiat currencies, a basket of cryptocurrencies, or physical commodities. Examples of this are Tether (USDT), Gemini Dollar (GUSD), and Paxos Gold (PAXG). The second are algorithmically maintained ERC20 tokens that are actively minted or burned based on dex trading exchange rates to maintain parity."),(0,i.kt)("p",null,"The challenge with the former is that a user is implicitly trusting the centralized entity to maintain those assets with no guarantees. With the latter, it is easy to mint coins during periods of increasing demand, but it is very difficult to burn tokens during periods of decreasing demand."),(0,i.kt)("p",null,"Stardust labs recommends a fundamentally different approach. The primary utility of any stablecoin is mitigating the risk of future price movements. The past year has seen strong developments in decentralized financial markets and powerful tools for de-risking in the form of options and perpetual contracts. We can use these products and financial engineering to create a synthetic financial instrument that replicates the performance of a stablecoin on demand. As long as the underlying asset can reach a sufficiently liquid options pair, we can combine products to create a stable structure that ultimately results in a fixed future return in the pegged currency at the risk free rate thanks to put-call parity. If this relationship is broken, that mathematically means that a profitable risk-free arbitrage opportunity exists which should be very short-lived in efficient, open financial markets."),(0,i.kt)("p",null,"Defirate has a good in-depth explanation of both how perpetual contracts work and how they can be hedged to earn the nominal interest at the risk-free funding rate. (",(0,i.kt)("a",{parentName:"p",href:"https://defirate.com/perpetual-contracts/"},"https://defirate.com/perpetual-contracts/"),")"),(0,i.kt)("p",null,"Ultimately, our proposed stablecoin isn't a managed token or backed by an underlying asset. Instead, the stablecoin smart contract purchases and returns a tokenized, engineered bundle of options and perpetual contracts that, combined, ensure a stable price relative to the pegged currency in the future. We term this type of asset a 'synthetic' stablecoin, termed because it is the exact same process as building a synthetic option. In addition, this process is similar to securitization whereby several financial products are pooled to yield a purchasable interest-bearing security with a different risk-reward curve."),(0,i.kt)("p",null,"The astute reader will observe that constructing these synthetic options will incur a cost. However, the advent of flash loans and depository institutions like AAVE allow the capital in the smart contracts to be deployed to generate risk-free interest, allowing the stablecoin contract to offset the cost of purchasing these options. We envision the smart contract assessing either a transaction fee for origination or a penalty for early withdrawals where users have not held the synthetic stablecoin long enough for the interest to offset the contract purchase fees and transaction costs. Though it varies dramatically, Bitcoin futures seem to have a 3.69% risk-free rate (",(0,i.kt)("a",{parentName:"p",href:"https://quantpedia.com/what-is-the-bitcoins-risk-free-interest-rate/"},"https://quantpedia.com/what-is-the-bitcoins-risk-free-interest-rate/"),"), the risk free rates at Binance for Perpetual contracts (the funding rate) is 0.01% every 8 hours (or an annualized rate of 11.57%). Meanwhile, the fee to enter a perpetual ranges from 0.05%(dxdy) - 0.02% (Binance) so it is likely that these fees would be entirely covered by the interest payments on the overall stabilized value."),(0,i.kt)("h3",{id:"why-now--risks"},"Why Now & Risks"),(0,i.kt)("p",null,"Ultimately this is only possible today thanks to both the recent advancements in decentralized finance, and more importantly the liquidity in the market. One of the outstanding risks to this stable coin is if liquidity quickly dries up. An example of the impact of liquidity shocks on securitized financial derivatives is best seen by the 2008 financial crisis. Unlike traditional financial markets however, positions are monitored in real-time and can be forcefully liquidated, preventing direct losses. However, there are fundamental limits on how much stability this construct or any uncollateralized stablecoin could absorb. One of the key outstanding questions, and the main exogenous risk that is currently unknown, is the strength of correlation between overall crypto prices, volatility, and its impact on the liquidity of decentralized financial markets."),(0,i.kt)("p",null,"One of the primary anticipated challenges is the lack of regulatory oversight in the markets and the ability of individual companies to offer arbitrary leverage ratios. For example, Binance is offering 125x leverage meaning some perpetual contracts are at risk of being forcibly liquidated even with less than a 1% price movement. (",(0,i.kt)("a",{parentName:"p",href:"https://bitcoinist.com/binance-125x-leverage-sparks-criticism-from-community/"},"https://bitcoinist.com/binance-125x-leverage-sparks-criticism-from-community/"),") Our smart contract can simply repurchase another perpetual contract during liquidation, however a risk exists that market liquidity would dry up during periods of unprecedented volatility such as a major market crash. Without liquid markets with leveraged counter-parties willing to absorb the risk, the synthetic stablecoin would be forced to return the money to the user in the underlying currency at the price of the stable peg, having done its job, but at the same time being unable to offer continued stability."),(0,i.kt)("p",null,"Due to the use of options, perpetuals, and lack of human intervention, our proposed system is able to absorb far more volatility than algorithmically managed uncollateralized stablecoins. These implementations have strong negative feedback loops during periods of decreasing demand and, as of date, no robust solution for reducing supply. These struggles have caused many to fail even under benign conditions and these challenges will be dramatically amplified in the type of major market crash where liquidity in financial markets begins to dry up. At that point, the only efficient solution would be custodied collateralized assets by trustworthy centralized entities."),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"A decentralized uncollateralized synthetic stablecoin has significant utility for decentralized financial applications and would be a transformative development beyond just the Polkadot ecosystem. In addition to providing a stable store of value that works synergistically with demand in the market, the smart contract mathematics are entirely fungible and can be set up for any arbitrary currency as the underlying asset and pegged currency provided a sufficiently liquid options market exists."),(0,i.kt)("p",null,"The primary target demographic and audience would be decentralized financial applications and any user who seeks a stable store of value that isn't dependent on a centralized third party, instead risk has been decentrally allocated to the participants on decentralized markets."),(0,i.kt)("h2",{id:"team-busts_in_silhouette"},"Team :busts_in_silhouette"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Team Lead: Adit Patel"),(0,i.kt)("li",{parentName:"ul"},"Team Member: Theresa Garcia")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Theresa Garcia"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:theresa@stardustfunds.com"},"theresa@stardustfunds.com")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("a",{parentName:"li",href:"https://stardust.finance/"},"https://stardust.finance/"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Stardust Labs Inc. is a registered C-corp incoporated in Wyoming")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"Adit is a technical expert on cryptography, distributed ledgers, financial markets, and new product development. He graduated Columbia in 2011 with a BSc in Applied Physics and a minor in Econ. During his time there, he took additional coursework focused on cryptography, statistics, and fundamental computer science. After graduating, he joined Capital One and quickly rectified the failing, newly launched small business brand. These efforts made him well known as the go-to analyst for successful new product development, strategy and launch. He was tapped to design and launch financial products for Hispanic consumers and tapped again to build Capital One\u2019s B2B financial products. During his tenure there, Adit experienced first hand the hard learnings that lead to efficient risk mitigation in financial products and the intricacies of financial engineering. He has a decade of technical experience at the intersection of finance and technology."),(0,i.kt)("p",null,"Theresa has a particularly deep knowledge on the current dynamics, consumer sentiment and market opportunities of the distributed ledger ecosystem. She\u2019s been personally involved with distributed ledgers and their commercial applications for 5+ years. She has successfully launched and commercialized multiple new products. Throughout her career, Theresa has repeatedly driven outsized results, helping launch multiple products from emotional education devices for children disguised as teddy bears to documentary streaming sites. In addition to multiple successful product launches as an employee, she has started and launched her own successful e-commerce business on her own from the ground up. There she developed her own products, stood up supply chains and manufacturers, created and executed international marketing campaigns and sales funnels, and managed employees all over the world to support her global operations, successfully growing her company from an idea to $70,000/month in sales."),(0,i.kt)("p",null,"Both Adit and Theresa are also full stack developers who have successfully deployed a crypto wealth management mobile to building their own blockchain binary."),(0,i.kt)("p",null,"Stardust Wealth iOS App: ",(0,i.kt)("a",{parentName:"p",href:"https://stardust.finance/app"},"https://stardust.finance/app"),"\nOur test blockchain network: ",(0,i.kt)("a",{parentName:"p",href:"https://explorer.stardust.finance/"},"https://explorer.stardust.finance/")),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/adit313/"},"https://github.com/adit313/")," (primary developer)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/enteraether"},"https://github.com/enteraether"))),(0,i.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/adit-patel/"},"https://www.linkedin.com/in/adit-patel/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/the-theresa-garcia/"},"https://www.linkedin.com/in/the-theresa-garcia/"))),(0,i.kt)("h2",{id:"development-status-open_book"},"Development Status :open_book"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"link to RFP: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/rfps/uncollateralized-stablecoin.md"},"https://github.com/w3f/Grants-Program/blob/master/rfps/uncollateralized-stablecoin.md"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"academic publications relevant to the problem: ",(0,i.kt)("a",{parentName:"p",href:"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3952045"},"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3952045"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Information on put-call parity: ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Put%E2%80%93call_parity"},"https://en.wikipedia.org/wiki/Put%E2%80%93call_parity"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.investopedia.com/terms/p/putcallparity.asp"},"https://www.investopedia.com/terms/p/putcallparity.asp")))),(0,i.kt)("h2",{id:"development-roadmap-nut_and_bolt"},"Development Roadmap :nut_and_bolt"),(0,i.kt)("p",null,"Through this grant proposal, we aim to provide a well-detailed analysis of the current state of industry for stablecoins, extant and historical stablecoin solutions including failures, and a summary of the current view by the US Federal Government. These materials will also be used to generate a well-defined framework for a derivatives based synthetic stablecoin capable of originating and closing positions."),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 5 Weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):")," 2 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 10K")),(0,i.kt)("h3",{id:"milestone-1--state-of-the-industry-on-stablecoins"},"Milestone 1 \u2014 State of the Industry on Stablecoins"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 2 Weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:")," 2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 5k USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0."),(0,i.kt)("td",{parentName:"tr",align:null},"Rights"),(0,i.kt)("td",{parentName:"tr",align:null},"All developed materials will be publicly accessible and public domain.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"1.")),(0,i.kt)("td",{parentName:"tr",align:null},"Research Goal"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide an overview of the current state of the modern stablecoin ecosystem including a summary of demand and historical growth over time, industry size and a rough forecast of future growth, the largest existing players, and the main revenue and cost drivers for service providers.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"1a.")),(0,i.kt)("td",{parentName:"tr",align:null},"Specific Coverage"),(0,i.kt)("td",{parentName:"tr",align:null},"Coverage will span ",(0,i.kt)("a",{parentName:"td",href:"https://coinmarketcap.com/view/stablecoin/"},"historical and current industry volumes"),", ",(0,i.kt)("a",{parentName:"td",href:"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3952045"},"academic sources"),", and ",(0,i.kt)("a",{parentName:"td",href:"https://blockworks.co/congressional-action-on-stablecoins-could-come-as-soon-as-this-month-source-says/"},"recent developments"),".")))),(0,i.kt)("h3",{id:"milestone-2--terra-collapse-deep-dive"},"Milestone 2 \u2014 Terra Collapse Deep Dive"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 3 Weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:")," 2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 5K USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0."),(0,i.kt)("td",{parentName:"tr",align:null},"Rights"),(0,i.kt)("td",{parentName:"tr",align:null},"All developed materials will be publicly accessible and public domain.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"1.")),(0,i.kt)("td",{parentName:"tr",align:null},"Research Goal"),(0,i.kt)("td",{parentName:"tr",align:null},"Stardust will breakdown and perform a deep dive into the collapse and ultimate failure of Terra to maintain it's peg to USD.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"1a.")),(0,i.kt)("td",{parentName:"tr",align:null},"Specific Coverage"),(0,i.kt)("td",{parentName:"tr",align:null},"Specific deep dives at this time are an overall summary of events and the price changes in early May 2022, the large and consistent outflows from their lending protocol Anchor, the complete saturation of lending pools on Curve that contained UST, and finally the deployment of BTC reserves by the Luna Foundation Guard (LFG).")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We'll follow up with a future research grant on historic failures of stablecoins, a summary of articulated Federal Government viewpoints on stablecoins, and its potential impact on the future regulatory landscape. Our long-term vision is to build an understanding of the stablecoin infrastructure environment and then develop and deploy an improved version on the Polkadot Network.")),(0,i.kt)("h2",{id:"additional-information-heavy_plus_sign"},"Additional Information :heavy_plus_sign"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," Web3 Foundation Website"))}p.isMDXComponent=!0}}]);