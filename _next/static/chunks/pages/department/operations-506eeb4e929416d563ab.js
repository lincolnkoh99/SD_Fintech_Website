(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[897],{127:function(e,t,a){"use strict";a.d(t,{Z:function(){return y}});var n=a(809),r=a.n(n),o=a(2447),l=a(7294),i=a(220),c=a(6069),u=a.n(c),s=l.createElement,d=function(e){var t=e.deptInfo;return s("div",{className:u().layout},s("div",{className:u().title},s("h2",null,t.name," Department")),s("div",{className:u().flex},s("div",{className:u().blank}),s("div",{className:u().container},s("div",{className:u().boxtitle},s("h3",null,"Purpose")),s("div",{className:u().boxbody},s("p",null,t.purpose))),s("div",{className:u().container},s("div",{className:u().boxtitleright},s("h3",null,"Goal")),s("div",{className:u().boxbodyright},s("p",null," ",t.goal))),s("div",{className:u().blank})))},p=a(6066),m=l.createElement,_=function(e){var t=e.project,a=t.imageUrls.length,n={dots:!0,autoplay:!0,infinite:!0,speed:500,slidesToShow:1,arrows:!1,slidesToScroll:1,className:"slides"};return m("div",{className:u().carouselcontainer},a>1?m(p.Z,n,t.imageUrls.map((function(e){return m("div",null,m("img",{width:"100%",src:e.url}))}))):m("img",{src:0!=a?t.imageUrls[a-1].url:"https://i.imgur.com/LRTL24O.jpeg",style:{width:"100%"}}))},f=l.createElement,v=function(e){var t=e.project,a=e.index;return a%2==1?f("div",{className:u().projectcontainer},f(_,{project:t}),f("div",{className:u().detailcontainer},f("div",{className:u().projectNumberingRow},f("div",{className:u().projectNumberingTextOdd},1==e.deptId&&f("h2",null,"Event ",a+1),1!=e.deptId&&f("h2",null,"Project ",a+1))),f("div",{className:u().projecttitle},f("h3",null,t.title),f("div",{className:u().projectdetailtext},t.details)))):f("div",{className:u().projectcontainer},f("div",{className:u().detailcontainerleft},f("div",{className:u().projectNumberingRow},f("div",{className:u().projectNumberingTextEven},1==e.deptId&&f("h2",null,"Event ",a+1),1!=e.deptId&&f("h2",null,"Project ",a+1))),f("div",{className:u().projecttitle},f("h3",null,t.title),f("div",{className:u().projectdetailtext},t.details))),f(_,{project:t}))},N=a(313),D=a.t(N,2),b=l.createElement,y=function(e){var t=e.deptId,a=(0,l.useState)(),n=a[0],c=a[1];(0,l.useEffect)((function(){u()}),[]);var u=function(){var e=(0,o.Z)(r().mark((function e(){var a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{a=Array.from(D),c(a[t-1])}catch(n){console.log(n)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return b("div",null,b(i.Z,null,b("div",{style:{marginTop:"2rem"}},n&&b(d,{deptInfo:n}),b("div",{style:{backgroundColor:"rgba(196, 196, 196, 0.2)",paddingBottom:"3%"}},n&&n.projects.map((function(e,a){return b(v,{key:e.id,project:e,index:a,deptId:t})}))))))}},639:function(e,t,a){"use strict";a.r(t);var n=a(7294),r=a(127),o=n.createElement;t.default=function(e){return o(r.Z,{deptId:1})}},2953:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/department/operations",function(){return a(639)}])},6069:function(e){e.exports={layout:"DefaultDepartmentLayout_layout__2w3zW",title:"DefaultDepartmentLayout_title__1w_a4",projecttitle:"DefaultDepartmentLayout_projecttitle__Op3me",projectNumberingRow:"DefaultDepartmentLayout_projectNumberingRow__1n8yn",projectNumberingTextOdd:"DefaultDepartmentLayout_projectNumberingTextOdd__3Nlmw",projectNumberingTextEven:"DefaultDepartmentLayout_projectNumberingTextEven__iPDZc",container:"DefaultDepartmentLayout_container__2F9nA",flex:"DefaultDepartmentLayout_flex__1bgoR",blank:"DefaultDepartmentLayout_blank__o4leF",boxtitle:"DefaultDepartmentLayout_boxtitle__2Tteg",boxbody:"DefaultDepartmentLayout_boxbody__1TcIB",boxbodyright:"DefaultDepartmentLayout_boxbodyright__18EPM",boxtitleright:"DefaultDepartmentLayout_boxtitleright__1wPLi",projectcontainer:"DefaultDepartmentLayout_projectcontainer__3z-_T",carouselcontainer:"DefaultDepartmentLayout_carouselcontainer__1Aybx",detailcontainer:"DefaultDepartmentLayout_detailcontainer__2sDgK",detailcontainerleft:"DefaultDepartmentLayout_detailcontainerleft__vTScc",projectdetailtext:"DefaultDepartmentLayout_projectdetailtext__3QUpA"}}},function(e){e.O(0,[617,477,66,174,888,774,179],(function(){return t=2953,e(e.s=t);var t}));var t=e.O();_N_E=t}]);