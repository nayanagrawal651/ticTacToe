(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{16:function(e,c,t){},18:function(e,c,t){},23:function(e,c,t){"use strict";t.r(c);var n=t(0),s=t.n(n),a=t(7),o=t.n(a),r=(t(16),t(11)),i=t(25),j=t(26),l=t(27),b=t(30),m=t(28),u=t(29),d=(t(17),t(18),t(9)),p=(t(19),t(8)),x=t(2),O=function(e){switch(e.name){case"circle":return Object(x.jsx)(p.b,{className:"icon"});case"cross":return Object(x.jsx)(p.c,{className:"icon"})}return Object(x.jsx)(p.a,{className:"icon"})},h=new Array(9).fill("empty"),y=function(){var e=Object(n.useState)(!1),c=Object(r.a)(e,2),t=c[0],s=c[1],a=Object(n.useState)(""),o=Object(r.a)(a,2),p=o[0],y=o[1],f=function(e){return p?Object(d.b)(p,{type:"success"}):"empty"!==h[e]?Object(d.b)("Already filled!",{type:"error"}):(h[e]=t?"cross":"circle",s(!t),void(h[0]==h[1]&&h[0]==h[2]&&"empty"!==h[0]?y("".concat(h[0]," won")):h[3]==h[4]&&h[3]==h[4]&&"empty"!==h[3]?y("".concat(h[3]," won")):h[6]==h[7]&&h[6]==h[8]&&"empty"!==h[6]?y("".concat(h[6]," won")):h[0]==h[3]&&h[0]==h[6]&&"empty"!==h[0]?y("".concat(h[0]," won")):h[1]==h[4]&&h[1]==h[7]&&"empty"!==h[1]?y("".concat(h[1]," won")):h[2]==h[5]&&h[2]==h[8]&&"empty"!==h[2]?y("".concat(h[2]," won")):h[0]==h[4]&&h[0]==h[8]&&"empty"!==h[0]?y("".concat(h[0]," won")):h[2]==h[4]&&h[2]==h[6]&&"empty"!==h[2]&&y("".concat(h[2]," won"))))};return Object(x.jsxs)(i.a,{className:"p-5",children:[Object(x.jsx)(d.a,{position:"bottom-center"}),Object(x.jsx)(j.a,{children:Object(x.jsxs)(l.a,{md:6,className:"offset-md-3",children:[p?Object(x.jsxs)("div",{className:"mb-2 mt-2",children:[Object(x.jsx)("h1",{className:"text-secondary text-uppercase text-center",children:p}),Object(x.jsx)(b.a,{color:"success",block:!0,onClick:function(){s(!1),y(""),h.fill("empty",0,9)},children:"Reload Game"})]}):Object(x.jsxs)("h1",{className:"text-center text-warning",children:[t?"Cross":"Circle"," turns"]}),Object(x.jsx)("div",{className:"grid",children:h.map((function(e,c){return Object(x.jsx)(m.a,{onClick:function(){return f(c)},color:"secondary",children:Object(x.jsx)(u.a,{className:"box",children:Object(x.jsx)(O,{name:e})})})}))})]})})]})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,31)).then((function(c){var t=c.getCLS,n=c.getFID,s=c.getFCP,a=c.getLCP,o=c.getTTFB;t(e),n(e),s(e),a(e),o(e)}))};o.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(y,{})}),document.getElementById("root")),f()}},[[23,1,2]]]);
//# sourceMappingURL=main.3cfa3bf2.chunk.js.map