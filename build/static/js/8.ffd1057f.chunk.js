(this.webpackJsonpinstaclone=this.webpackJsonpinstaclone||[]).push([[8],{527:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),s=a(9),i=a(24),u=a(36),o=a(11),g=a(125),l=Object(s.b)({currentUser:o.a});t.default=Object(r.b)(l,(function(e){return{githubSignInStart:function(t){return e(Object(u.c)(t))}}}))((function(e){var t=e.currentUser,a=e.githubSignInStart,r=Object(i.g)(),s=Object(i.h)().search;t&&r.push("/");var u=new URLSearchParams(s),o=u.get("code"),l=u.get("state");return Object(n.useEffect)((function(){if(o){if(!l===sessionStorage.getItem("authState"))return console.warn("Auth state does not match.");a(o)}}),[l,o,a]),c.a.createElement("main",{"data-test":"page-login",className:"login-page"},c.a.createElement("div",{className:"login-page__showcase"}),c.a.createElement(g.default,null))}))}}]);
//# sourceMappingURL=8.ffd1057f.chunk.js.map