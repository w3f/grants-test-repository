"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[8344],{16033:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));n(16758);const l={},o="Milestone Delivery Guidelines",r={unversionedId:"Support Docs/milestone-deliverables-guidelines",id:"Support Docs/milestone-deliverables-guidelines",title:"Milestone Delivery Guidelines",description:"These are the guidelines to be followed for milestones submitted for evaluation.",source:"@site/docs/Support Docs/milestone-deliverables-guidelines.md",sourceDirName:"Support Docs",slug:"/Support Docs/milestone-deliverables-guidelines",permalink:"/grants/Support Docs/milestone-deliverables-guidelines",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Grant guidelines for most popular grant categories",permalink:"/grants/Support Docs/grant_guidelines_per_category"},next:{title:"Open Source Polkadot Stack",permalink:"/grants/Support Docs/polkadot_stack"}},s={},u=[{value:"Submission",id:"submission",level:2},{value:"Invoice",id:"invoice",level:2},{value:"Content",id:"content",level:2},{value:"License",id:"license",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Formatted code",id:"formatted-code",level:2},{value:"Testing Guide",id:"testing-guide",level:2},{value:"A step-by-step guide demonstrating how your code achieves the milestones",id:"a-step-by-step-guide-demonstrating-how-your-code-achieves-the-milestones",level:3},{value:"Unit tests",id:"unit-tests",level:3},{value:"Integration tests",id:"integration-tests",level:3},{value:"Milestone Deliverables",id:"milestone-deliverables",level:2},{value:"Additional Information",id:"additional-information",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"milestone-delivery-guidelines"},"Milestone Delivery Guidelines"),(0,i.kt)("p",null,"These are the guidelines to be followed for milestones submitted for evaluation."),(0,i.kt)("h2",{id:"submission"},"Submission"),(0,i.kt)("p",null,"Please submit all your milestones via PR to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grant-Milestone-Delivery"},"Grant Milestone Delivery repository"),"."),(0,i.kt)("h2",{id:"invoice"},"Invoice"),(0,i.kt)("p",null,"Although a milestone needs to be reviewed and accepted, you can already submit your invoice through ",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform"},"this form"),"."),(0,i.kt)("h2",{id:"content"},"Content"),(0,i.kt)("p",null,"The submission should contain the following information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name of the grant project")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Link to the open-source code/delivery")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#license"},"License"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#documentation"},"Documentation"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#formatted-code"},"Formatted code"),", according to a set of guidelines")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#testing-guide"},"Testing Guide"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"A list of the ",(0,i.kt)("a",{parentName:"strong",href:"#milestone-deliverables"},"milestone deliverables"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Any ",(0,i.kt)("a",{parentName:"strong",href:"#additional-information"},"additional information")))),(0,i.kt)("h2",{id:"license"},"License"),(0,i.kt)("p",null,"In order to successfully receive grant funding for your application it is necessary for the project to have open source code.\nWe prefer Apache 2.0, but MIT or Unlicense are also acceptable. If your delivery comprises multiple repositories, make sure to include the license for each of them."),(0,i.kt)("h2",{id:"documentation"},"Documentation"),(0,i.kt)("p",null,"We value high-quality open source code, but even the most performant code is of little use if it lacks proper documentation."),(0,i.kt)("p",null,"We require that you document (where applicable):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"API calls"),(0,i.kt)("li",{parentName:"ul"},"Architecture overview and individual component details"),(0,i.kt)("li",{parentName:"ul"},"Algorithms and protocols that are core to your project"),(0,i.kt)("li",{parentName:"ul"},"Any other fundamental building blocks to your technology")),(0,i.kt)("p",null,"Unless absolutely necessary, make the documentation public as well, ideally as part of the appropriate code repository. This will make it easier for the community to use or adapt your project."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": Only focus on your ",(0,i.kt)("strong",{parentName:"p"},"own")," contributions. Do not write detailed explanations of already existing components, e.g. IPFS."),(0,i.kt)("h2",{id:"formatted-code"},"Formatted code"),(0,i.kt)("p",null,"A codebase that is easy to read is also easy to use. We suggest adopting one style from Day 1 and adhering to it across the entire team.\nThis helps to keep the commit history clean and facilitates any reviews of the introduced changes."),(0,i.kt)("p",null,"For ",(0,i.kt)("strong",{parentName:"p"},"Substrate"),", we strongly recommend formatting your code according to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/blob/master/docs/STYLE_GUIDE.md"},"official guidelines"),"."),(0,i.kt)("p",null,"For ",(0,i.kt)("strong",{parentName:"p"},"Rust"),", we encourage formatting any additional support libraries or helpers by following the ",(0,i.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.0.0/style/README.html"},"Style Guidelines"),"."),(0,i.kt)("p",null,"For ",(0,i.kt)("strong",{parentName:"p"},"any other")," deliveries, please commit to a particular style & let us know which official guidelines you adopt."),(0,i.kt)("h2",{id:"testing-guide"},"Testing Guide"),(0,i.kt)("p",null,"We require that each milestone delivery includes a comprehensive test suite, consisting of:"),(0,i.kt)("h3",{id:"a-step-by-step-guide-demonstrating-how-your-code-achieves-the-milestones"},"A step-by-step guide demonstrating how your code achieves the milestones"),(0,i.kt)("p",null,"Please provide documentation on how to install, compile, run and test the deliverable(s). Make sure to include all necessary prerequisites. Common issues while replicating test results involve, among others, undocumented dependencies, version numbers, local database setups, breaking changes in the main branch since delivery, OS- and browser-specific incompatibilities."),(0,i.kt)("p",null,"Depending on the deliverable, this could include (but is not limited to)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"how to embed your library in another application,"),(0,i.kt)("li",{parentName:"ul"},"how to make example API calls to your service,"),(0,i.kt)("li",{parentName:"ul"},"running your web app, and"),(0,i.kt)("li",{parentName:"ul"},"steps to complete some desired action in your mobile app.")),(0,i.kt)("h3",{id:"unit-tests"},"Unit tests"),(0,i.kt)("p",null,"As with any quality software project, each logical code component should be testable."),(0,i.kt)("h3",{id:"integration-tests"},"Integration tests"),(0,i.kt)("p",null,"We prefer dockerfiles to avoid problems with versions and dependencies."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": If you are not delivering code as part of your project, such a test suite is not applicable. This mainly applies to projects centering on design, research or hardware. If that is the case, please provide detailed instructions on how else we can test/run/replicate your deliverable."),(0,i.kt)("h2",{id:"milestone-deliverables"},"Milestone Deliverables"),(0,i.kt)("p",null,"Please provide a list of milestone deliverables. This list should closely reflect the list of deliverables agreed on in the Pull Request for the public ",(0,i.kt)("strong",{parentName:"p"},"Grants Program")," application or in Annex 1 of the grant contract for the private applications."),(0,i.kt)("p",null,"Each item in the list should include a link to the deliverable itself, e.g.:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Google Doc link - make sure anyone with the link has View access"),(0,i.kt)("li",{parentName:"ul"},"GitHub repository - include the appropriate file/folder in the link")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Please highlight anything that deviates from the contract")," and include further information that you think is relevant to the deliverable, either alongside the appropriate deliverable or under ",(0,i.kt)("a",{parentName:"p",href:"#additional-information"},"Additional Information"),"."),(0,i.kt)("p",null,"Please ensure the repo has the correct open-source license."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Link"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/.../LICENSE"},"https://github.com/.../LICENSE")),(0,i.kt)("td",{parentName:"tr",align:null},"...")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"..."),(0,i.kt)("td",{parentName:"tr",align:null},"...")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"..."),(0,i.kt)("td",{parentName:"tr",align:null},"...")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"..."),(0,i.kt)("td",{parentName:"tr",align:null},"..."),(0,i.kt)("td",{parentName:"tr",align:null},"...")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"..."),(0,i.kt)("td",{parentName:"tr",align:null},"..."),(0,i.kt)("td",{parentName:"tr",align:null},"...")))),(0,i.kt)("h2",{id:"additional-information"},"Additional Information"),(0,i.kt)("p",null,"Please add any additional comments that you consider relevant for the evaluation."))}p.isMDXComponent=!0}}]);