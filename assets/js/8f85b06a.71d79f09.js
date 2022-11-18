"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[7264],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(83117),a=(n(67294),n(3905));const i={sidebar_position:4,title:"4. Changes to a Grant"},o=void 0,s={unversionedId:"Process/changes",id:"Process/changes",title:"4. Changes to a Grant",description:"- Accepted grant applications can be amended at any time. However, this necessitates a reevaluation by the committee and the same number of approvals as an application (according to the levels). If your application has been accepted and, during development, you find that your project significantly deviates from the original specification, please open a new pull request that modifies the existing application. This also applies in case of significant delays.",source:"@site/docs/Process/changes.md",sourceDirName:"Process",slug:"/Process/changes",permalink:"/grants-test-repository/Process/changes",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"4. Changes to a Grant"},sidebar:"defaultSidebar",previous:{title:"3. Delivery and Payment",permalink:"/grants-test-repository/Process/milestone_delivery"},next:{title:"Accepted Grant Applications",permalink:"/grants-test-repository/Applications/"}},l={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Accepted grant applications can be amended at any time. However, this ",(0,a.kt)("em",{parentName:"li"},"necessitates a reevaluation by the committee")," and the same number of approvals as an application (according to the ",(0,a.kt)("a",{parentName:"li",href:"#level_slider-levels"},"levels"),"). If your application has been accepted and, during development, you find that your project significantly deviates from the original specification, please open a new pull request that modifies the existing application. This also applies in case of significant delays."),(0,a.kt)("li",{parentName:"ul"},"If your ",(0,a.kt)("em",{parentName:"li"},"delivery schedule")," significantly changes, please also open a pull request with an updated timeline."),(0,a.kt)("li",{parentName:"ul"},"If your deliveries are significantly delayed and we cannot get a hold of you, we will terminate the grant (3 approvals required, regardless of level. If a member of the committee creates the termination PR, only 2 more approvals are required).")))}u.isMDXComponent=!0}}]);