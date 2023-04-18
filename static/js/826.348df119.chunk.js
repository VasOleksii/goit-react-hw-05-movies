"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[826],{826:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n=r(5861),a=r(9439),s=r(7757),c=r.n(s),i=r(7689),u=r(1087),o=r(2791),l=r(4390),p={img:"MovieDetalis_img__nRcE0",imgWrap:"MovieDetalis_imgWrap__WJtXc",descrWrap:"MovieDetalis_descrWrap__M41sQ",btn:"MovieDetalis_btn__MiX-E",btnList:"MovieDetalis_btnList__kqYLd",castBtn:"MovieDetalis_castBtn__iorAX",reviewsBtn:"MovieDetalis_reviewsBtn__ZDLMe",descrTitle:"MovieDetalis_descrTitle__jvQcx"},v=r(6652),d=r(3521),h=r(184),f=function(){var e,t,r=(0,i.UO)().movieId,s=(0,o.useState)(null),f=(0,a.Z)(s,2),m=f[0],x=f[1],_=(0,o.useState)(!0),g=(0,a.Z)(_,2),w=g[0],j=g[1];(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,(0,l.TP)(r);case 4:t=e.sent,x(t),j(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:return e.prev=12,j(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[r]);var b,k,y=null!==(e=null===(t=(0,i.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(u.rU,{className:p.btn,to:y,children:"Go Back"}),w?(0,h.jsx)("div",{className:p.loading,children:(0,h.jsx)(d.Z,{})}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:p.imgWrap,children:[m.poster_path?(0,h.jsx)("img",{className:p.img,alt:m.original_title,src:"https://image.tmdb.org/t/p/w500".concat(m.poster_path)}):(0,h.jsx)("img",{className:p.img,src:v,alt:"not available"}),(0,h.jsxs)("div",{className:p.descrWrap,children:[(0,h.jsxs)("h1",{children:[m.original_title," (",(k=m.release_date,new Date(k).getFullYear()),")"]}),(0,h.jsxs)("p",{className:p.descrTitle,children:["User Score: ",~~(10*m.vote_average),"%"]}),(0,h.jsx)("p",{className:p.descrTitle,children:"Overview"}),(0,h.jsx)("p",{children:m.overview}),(0,h.jsx)("p",{className:p.descrTitle,children:"Genres"}),(0,h.jsx)("p",{children:(b=m.genres,b.map((function(e){return e.name})).join(", "))})]})]}),(0,h.jsx)("div",{children:(0,h.jsxs)("ul",{className:p.btnList,children:[(0,h.jsx)("li",{children:(0,h.jsx)(u.rU,{to:"cast",state:{from:y},children:(0,h.jsx)("button",{className:p.castBtn,children:"Cast"})})}),(0,h.jsx)("li",{children:(0,h.jsx)(u.rU,{to:"reviews",state:{from:y},children:(0,h.jsx)("button",{className:p.reviewsBtn,children:"Reviews"})})})]})}),(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)("div",{className:p.loading,children:(0,h.jsx)(d.Z,{})}),children:(0,h.jsx)(i.j3,{})})]})]})}},4390:function(e,t,r){r.d(t,{Df:function(){return i},M1:function(){return p},TP:function(){return o},qF:function(){return f},tx:function(){return d}});var n=r(5861),a=r(7757),s=r.n(a),c=r(1243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"568ed8e1a51d85607165170baf4e3b10",language:"en-US"}});function i(e){return u.apply(this,arguments)}function u(){return(u=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/trending/movie/week",e.prev=1,e.next=4,c.get("/trending/movie/week",{params:{page:t}});case 4:return r=e.sent,n=r.data,e.abrupt("return",n);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function o(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(s().mark((function e(t){var r,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t),e.prev=1,e.next=4,c.get(r);case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function p(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(s().mark((function e(t){var r,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t,"/credits"),e.prev=1,e.next=4,c.get(r);case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(s().mark((function e(t){var r,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t,"/reviews"),e.prev=1,e.next=4,c.get(r);case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function f(e,t){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(s().mark((function e(t,r){var n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/search/movie?query=".concat(t),e.prev=1,e.next=4,c.get(n,{params:{page:r}});case 4:return a=e.sent,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}},6652:function(e,t,r){e.exports=r.p+"static/media/no-poster-available.7555b15218a0f4733bf7.jpg"}}]);
//# sourceMappingURL=826.348df119.chunk.js.map