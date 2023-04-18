"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[881],{6369:function(e,t,r){r.d(t,{Z:function(){return v}});var n,a=r(8683),s=r(168),o=r(6444),c=r(6048),i=r.n(c),u=(0,o.ZP)(i())(n||(n=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 15px;\n  margin: 40px 0;\n  font-size: 18px;\n  .selected {\n    color: #e9e9e9;\n    background-color: #589ceb;\n    &:hover {\n      background-color: #0268dd;\n    }\n  }\n  li {\n    list-style-type: none;\n    border-radius: 7px;\n    color: #e9e9e9;\n    background-color: #0f1652;\n    &:hover {\n      background-color: #0268dd;\n      color: #e9e9e9;\n    }\n  }\n  a {\n    display: block;\n    padding: 5px 10px;\n    cursor: pointer;\n  }\n"]))),p=r(3061),l=r(184);var v=function(e){var t=e.totalPages,r=e.setSearchParams,n=e.params,s=e.currentPage;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(u,{breakLabel:"...",previousLabel:(0,l.jsx)(p.u1R,{}),nextLabel:(0,l.jsx)(p.hjJ,{}),onPageChange:function(e){r((0,a.Z)((0,a.Z)({},n),{},{page:e.selected+1}))},pageRangeDisplayed:4,marginPagesDisplayed:2,pageCount:t,renderOnZeroPageCount:null,forcePage:s})})}},5881:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n=r(5861),a=r(3433),s=r(9439),o=r(7757),c=r.n(o),i=r(2791),u=r(1087),p=r(7689),l=r(4390),v={formTitle:"Movies_formTitle__GbMte",wrap:"Movies_wrap__qvGuo",movieForm:"Movies_movieForm__cvFvD",movieInput:"Movies_movieInput__-ez87",btn:"Movies_btn__TlfBQ",movies:"Movies_movies__TE99a",movieItem:"Movies_movieItem__U+pt+",pageTitle:"Movies_pageTitle__Xztvt",title:"Movies_title__MDLXB",poster:"Movies_poster__Yc3Qb",loading:"Movies_loading__sAADI"},m=r(3521),f=r(6369),h=r(6652),d=r(184),g=function(){var e=(0,i.useState)(null),t=(0,s.Z)(e,2),r=t[0],o=t[1],g=(0,i.useState)(!0),x=(0,s.Z)(g,2),_=x[0],b=x[1],w=(0,u.lr)({page:1,query:""}),y=(0,s.Z)(w,2),j=y[0],k=y[1],Z=j.get("query"),M=(0,i.useState)(0),N=(0,s.Z)(M,2),P=N[0],T=N[1],S=(0,p.TH)(),q=(0,i.useMemo)((function(){return Object.fromEntries((0,a.Z)(j))}),[j]),F=Number(q.page||1),D=q.query,I=(0,i.useState)(D||""),C=(0,s.Z)(I,2),L=C[0],U=C[1];(0,i.useEffect)((function(){if(D){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),e.next=4,(0,l.qF)(D,F);case 4:t=e.sent,r=t.data,o(r.results),b(!1),T(r.total_pages),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:return e.prev=14,b(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}}),[D,F]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:v.wrap,children:[(0,d.jsx)("h2",{className:v.formTitle,children:"Search movies:"}),(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements.search.value.trim();""!==t?(k({query:t,page:1}),e.target.reset()):e.target.reset()},className:v.movieForm,children:[(0,d.jsx)("input",{value:L,onChange:function(e){U(e.target.value)},name:"search",type:"text",placeholder:"Type here",className:v.movieInput}),(0,d.jsx)("button",{type:"submit",className:v.btn,children:"Search"})]})]}),(0,d.jsx)("ul",{className:v.movies,children:Z?_?(0,d.jsx)("div",{className:v.loading,children:(0,d.jsx)(m.Z,{})}):r.length>0?r.map((function(e){var t=e.title,r=e.id,n=e.poster_path;return(0,d.jsx)("li",{className:v.movieItem,children:(0,d.jsxs)(u.rU,{state:{from:S},to:"/movies/".concat(r),cover:n,children:[(0,d.jsx)("img",{className:v.poster,src:n?"https://image.tmdb.org/t/p/w500/".concat(n):h,alt:t}),(0,d.jsx)("p",{className:v.title,children:t})]})},r)})):(0,d.jsx)("p",{children:"No movies with this title were found. Try entering another title"}):(0,d.jsx)("p",{className:v.descr})}),(0,d.jsx)(f.Z,{totalPages:P,setSearchParams:k,params:q,currentPage:Number((null===q||void 0===q?void 0:q.page)-1)||0})]})}},4390:function(e,t,r){r.d(t,{Df:function(){return c},M1:function(){return l},TP:function(){return u},qF:function(){return h},tx:function(){return m}});var n=r(5861),a=r(7757),s=r.n(a),o=r(1243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"568ed8e1a51d85607165170baf4e3b10",language:"en-US"}});function c(e){return i.apply(this,arguments)}function i(){return(i=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/trending/movie/week",e.prev=1,e.next=4,o.get("/trending/movie/week",{params:{page:t}});case 4:return r=e.sent,n=r.data,e.abrupt("return",n);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function u(e){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(s().mark((function e(t){var r,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t),e.prev=1,e.next=4,o.get(r);case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function l(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(s().mark((function e(t){var r,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t,"/credits"),e.prev=1,e.next=4,o.get(r);case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function m(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(s().mark((function e(t){var r,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t,"/reviews"),e.prev=1,e.next=4,o.get(r);case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function h(e,t){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(s().mark((function e(t,r){var n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/search/movie?query=".concat(t),e.prev=1,e.next=4,o.get(n,{params:{page:r}});case 4:return a=e.sent,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}},6652:function(e,t,r){e.exports=r.p+"static/media/no-poster-available.7555b15218a0f4733bf7.jpg"}}]);
//# sourceMappingURL=881.566a87b1.chunk.js.map