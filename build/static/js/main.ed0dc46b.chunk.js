(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},47:function(e,t,a){},68:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(19),r=a.n(n),i=a(4),o=a(5),l=(a(47),a(6)),j=a.n(l),u=a(9),b=a(3),p=a.n(b),d=a(2),h=a(0),O=Object(c.createContext)();function m(e){var t=Object(c.useState)(void 0),a=Object(d.a)(t,2),s=a[0],n=a[1];function r(){return i.apply(this,arguments)}function i(){return(i=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://aplikacja-muzyczna.herokuapp.com/auth/loggedIn");case 2:t=e.sent,n(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){r()}),[]),Object(h.jsx)(O.Provider,{value:{loggedIn:s,getLoggedIn:r},children:e.children})}var x=O;a(68);var g=function(){var e=Object(c.useContext)(x).loggedIn,t=Object(o.f)();function a(){return(a=Object(u.a)(j.a.mark((function a(){return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,p.a.get("https://aplikacja-muzyczna.herokuapp.com/auth/logout");case 2:return a.next=4,e;case 4:t.push("/login"),window.location.reload();case 6:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return Object(h.jsxs)("nav",{className:"auth-options",children:[!1===e&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("button",{classname:"auth-options",onClick:function(){return t.push("/register")},children:["Zarejestruj si\u0119"," "]}),Object(h.jsx)("button",{classname:"auth-options",onClick:function(){return t.push("/login")},children:"| Zaloguj si\u0119"})]}),!0===e&&Object(h.jsx)("button",{onClick:function(){return a.apply(this,arguments)},children:"Wyloguj si\u0119"})]})};function f(){return Object(h.jsxs)("header",{id:"header",children:[Object(h.jsx)("div",{className:"wave",children:Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",children:[Object(h.jsx)("path",{className:"tlo",fillRule:"evenodd",clipRule:"evenodd",d:"M1440 193.669L1404.85 171.221C1371.37 148.773 1302.73 154.055 1234.1 126.326C1165.46 97.2762 1096.83 86.7127 1028.19 119.724C959.558 154.055 890.923 183.105 822.289 183.105C753.654 183.105 683.346 102.558 614.711 102.558C546.077 102.558 477.442 183.105 408.807 188.387C340.173 193.669 271.538 126.326 202.904 119.724C134.269 114.442 65.6346 171.221 32.1543 200.271L-3 228V-11H32.1543C65.6346 -11 134.269 -11 202.904 -11C271.538 -11 340.173 -11 408.807 -11C477.442 -11 546.077 -11 614.711 -11C683.346 -11 753.654 -11 822.289 -11C890.923 -11 959.558 -11 1028.19 -11C1096.83 -11 1165.46 -11 1234.1 -11C1302.73 -11 1371.37 -11 1404.85 -11H1440V193.669Z",fill:"#19849B"}),Object(h.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1440 193.669L1404.85 171.221C1371.37 148.773 1302.73 154.055 1234.1 126.326C1165.46 97.2762 1096.83 86.7127 1028.19 119.724C959.558 154.055 890.923 183.105 822.289 183.105C753.654 183.105 683.346 102.558 614.711 102.558C546.077 102.558 477.442 183.105 408.807 188.387C340.173 193.669 271.538 126.326 202.904 119.724C134.269 114.442 65.6346 171.221 32.1543 200.271L-3 228V-11H32.1543C65.6346 -11 134.269 -11 202.904 -11C271.538 -11 340.173 -11 408.807 -11C477.442 -11 546.077 -11 614.711 -11C683.346 -11 753.654 -11 822.289 -11C890.923 -11 959.558 -11 1028.19 -11C1096.83 -11 1165.46 -11 1234.1 -11C1302.73 -11 1371.37 -11 1404.85 -11H1440V193.669Z",fill:"url(#paint0_linear)",fillOpacity:"0.8"}),Object(h.jsx)("defs",{children:Object(h.jsxs)("linearGradient",{id:"paint0_linear",x1:"718.5",y1:"-11",x2:"718.5",y2:"228",gradientUnits:"userSpaceOnUse",children:[Object(h.jsx)("stop",{stopColor:"white"}),Object(h.jsx)("stop",{offset:"0.671875",stopColor:"white",stopOpacity:"0"})]})})]})}),Object(h.jsxs)("div",{className:"navbar",children:[Object(h.jsx)(i.b,{to:"/",children:Object(h.jsx)("p",{className:"title1",children:"Strona G\u0142\xf3wna"})}),Object(h.jsx)(i.b,{to:"/instructions",children:Object(h.jsx)("p",{className:"title",children:"Quiz"})}),Object(h.jsx)(i.b,{to:"/scores",children:Object(h.jsx)("p",{className:"title",children:"Wyniki"})}),Object(h.jsx)(i.b,{to:"/musiclist",children:Object(h.jsx)("p",{className:"title",children:"Przegl\u0105d utwor\xf3w"})})]}),Object(h.jsx)(g,{})]})}a(73);var w=a.p+"static/media/jazz.add38b7b.png";function A(){var e=Object(c.useContext)(x).loggedIn,t=Object(o.f)();return Object(c.useEffect)((function(){!1===e&&t.push("/login")})),Object(h.jsxs)("div",{className:"center",children:[Object(h.jsxs)("main",{children:[Object(h.jsx)("h1",{children:"Rozpoznaj i trenuj utwory muzyki powa\u017cnej i jazzowej"}),Object(h.jsx)("div",{className:"bg",children:Object(h.jsxs)("div",{className:"write",children:[Object(h.jsx)("p",{children:"W naszej bazie znajduj\u0105 si\u0119 utwory wykonawc\xf3w takich jak:"}),Object(h.jsx)("p",{children:"Jan Sebastian Bach"}),Object(h.jsx)("p",{children:"Fryderyk Chopin"}),Object(h.jsx)("p",{children:"i wiele innych."}),Object(h.jsx)("p",{children:"Przejrzyj utwory ju\u017c teraz, a nast\u0119pnie sprawd\u017c swoj\u0105 wiedz\u0119!"}),Object(h.jsx)(i.b,{to:"/musiclist",className:"button",children:"Przegl\u0105daj"})]})})]}),Object(h.jsx)("aside",{children:Object(h.jsx)("img",{className:"muzycy",src:w,alt:"muzycy"})})]})}var v=a.p+"static/media/login.316392f9.png";a(34);function y(e){return Object(h.jsxs)("div",{className:"error-notice",children:[Object(h.jsx)("span",{children:e.message}),Object(h.jsx)("button",{onClick:e.clearError,children:"X"})]})}var C=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),r=Object(d.a)(n,2),i=r[0],l=r[1],b=Object(c.useState)(),O=Object(d.a)(b,2),m=O[0],g=O[1],f=Object(c.useContext)(x).getLoggedIn,w=Object(o.f)();function A(){return(A=Object(u.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,c={email:a,password:i},e.next=5,p.a.post("https://aplikacja-muzyczna.herokuapp.com/auth/login",c);case 5:return e.next=7,f();case 7:w.push("/"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),e.t0.response.data.msg&&g(e.t0.response.data.msg);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}return Object(h.jsxs)("div",{className:"page",children:[m&&Object(h.jsx)(y,{message:m,clearError:function(){return g(void 0)}}),Object(h.jsxs)("form",{className:"form",onSubmit:function(e){return A.apply(this,arguments)},children:[Object(h.jsx)("p",{className:"welcome",children:"Witaj!"}),Object(h.jsx)("h2",{children:"Zaloguj si\u0119"}),Object(h.jsx)("label",{htmlFor:"login-email",children:"Email"}),Object(h.jsx)("input",{id:"login-email",type:"email",placeholder:"Email",onChange:function(e){return s(e.target.value)},value:a}),Object(h.jsx)("label",{htmlFor:"login-password",children:"Has\u0142o"}),Object(h.jsx)("input",{id:"login-password",type:"password",placeholder:"Password",onChange:function(e){return l(e.target.value)},value:i}),Object(h.jsx)("input",{type:"submit",value:"Zaloguj si\u0119"}),Object(h.jsxs)("a",{className:"reg",href:"/register",children:["Nie posiadasz konta? ",Object(h.jsx)("b",{children:"Zarejestruj si\u0119"})]})]}),Object(h.jsx)("div",{children:Object(h.jsx)("a",{className:"admin",href:"/admin",children:"Panel administratora"})}),Object(h.jsx)("aside",{children:Object(h.jsx)("img",{className:"login",src:v,alt:"postac autoryzacja"})})]})};var z=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),r=Object(d.a)(n,2),i=r[0],l=r[1],b=Object(c.useState)(""),O=Object(d.a)(b,2),m=O[0],g=O[1],f=Object(c.useState)(),w=Object(d.a)(f,2),A=w[0],C=w[1],z=Object(c.useState)(),N=Object(d.a)(z,2),k=N[0],S=N[1],B=Object(c.useContext)(x).getLoggedIn,U=Object(o.f)();function E(){return(E=Object(u.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,c={email:a,password:i,passwordVerify:m,displayName:k},e.next=5,p.a.post("https://aplikacja-muzyczna.herokuapp.com/auth/",c);case 5:return e.next=7,B();case 7:U.push("/"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),e.t0.response.data.msg&&C(e.t0.response.data.msg);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}return Object(h.jsxs)("div",{className:"page",children:[A&&Object(h.jsx)(y,{message:A,clearError:function(){return C(void 0)}}),Object(h.jsxs)("form",{className:"form",onSubmit:function(e){return E.apply(this,arguments)},children:[Object(h.jsx)("h2",{children:"Rejestracja"}),Object(h.jsx)("label",{htmlFor:"register-email",children:"Email"}),Object(h.jsx)("input",{className:"register",type:"email",placeholder:"Email",onChange:function(e){return s(e.target.value)},value:a}),Object(h.jsx)("label",{htmlFor:"register-password",children:"Haslo"}),Object(h.jsx)("input",{className:"register",type:"password",placeholder:"Password",onChange:function(e){return l(e.target.value)},value:i}),Object(h.jsx)("input",{className:"register",type:"password",placeholder:"Confirm password",onChange:function(e){return g(e.target.value)},value:m}),Object(h.jsx)("label",{htmlFor:"register-display-name",children:"Nazwa uzytkownika"}),Object(h.jsx)("input",{className:"register",id:"register-display-name",type:"text",onChange:function(e){return S(e.target.value)}}),Object(h.jsx)("input",{type:"submit",value:"Zarejestruj"}),Object(h.jsxs)("a",{className:"reg",href:"/login",children:["Posiadasz ju\u017c konto? ",Object(h.jsx)("b",{children:"Zaloguj si\u0119"})]})]}),Object(h.jsx)("aside",{children:Object(h.jsx)("img",{className:"login",src:v,alt:"postac autoryzacja"})})]})};a(74);function N(){var e=Object(c.useContext)(x).loggedIn,t=Object(o.f)();return Object(c.useEffect)((function(){!1===e&&t.push("/login")})),Object(h.jsx)("div",{className:"center",children:Object(h.jsxs)("main",{children:[Object(h.jsx)("h1",{className:"wel-inst",children:"Witaj!"}),Object(h.jsxs)("div",{className:"txt-inst",children:[Object(h.jsx)("p",{children:"Sprawd\u017a swoj\u0105 wiedz\u0119 z muzyki powa\u017cnej i jazzowej. "}),Object(h.jsx)("p",{children:"Nasz Quiz zawiera mo\u017cliwo\u015b\u0107 rozpoznawania utwor\xf3w"}),Object(h.jsx)("p",{children:"muzycznych za pomoc\u0105 bezpo\u015bredniego wprowadzenia wykonawcy i tytu\u0142u"}),Object(h.jsx)("p",{children:"Wybierz rozgrywk\u0119 oraz sprawd\u017c swoj\u0105 wiedz\u0119 ju\u017c teraz!"})]}),Object(h.jsx)("div",{className:"box-inst",children:Object(h.jsxs)("div",{className:"write-inst",children:[Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:"Instrukcja: "})," Na g\xf3rze ekranu pojawi si\u0119 numer utworu oraz odtwarzacz muzyczny. Po klikni\u0119ciu przycisku play, muzyka zostanie odtworzona, a ty musisz odgadn\u0105\u0107 jej wykonawc\u0119 oraz tytu\u0142 wpisuj\u0105c go w wyznaczone pola. Powodzenia !"]}),Object(h.jsx)(i.b,{to:"/entryquiz",className:"button-inst",children:"Quiz losowy"}),Object(h.jsx)(i.b,{to:"/adminquiz",className:"button-instt",children:"Quiz przygotowany przez administratora"})]})})]})})}a(75);var k=function(e){for(var t=e.scoresPerPage,a=e.totalScores,c=e.paginate,s=[],n=1;n<=Math.ceil(a/t);n++)s.push(n);return Object(h.jsx)("nav",{children:Object(h.jsx)("div",{className:"pagination",children:s.map((function(e){return Object(h.jsx)("div",{className:"page-item",children:Object(h.jsx)("button",{onClick:function(){return c(e)},className:"page-link",children:e})},e)}))})})},S=(a(76),a(18)),B=a.n(S),U=function(e){var t=e.tracks;return Object(h.jsx)("ul",{className:"music-table",children:t.map((function(e){return Object(h.jsx)("li",{className:"line-music",children:Object(h.jsxs)("div",{className:"list-section",children:[Object(h.jsxs)("p",{className:"music-p",children:["Autor: ",e.author," "]}),Object(h.jsxs)("p",{className:"music-p",children:["Tytu\u0142: ",e.title]}),Object(h.jsx)("div",{className:"music-play",children:Object(h.jsx)(B.a,{className:"music-play",controls:!0,url:e.link,height:"3.2em",width:"40em"})})]})},e._id)}))})},E=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(1),r=Object(d.a)(n,2),i=r[0],o=r[1],l=Object(c.useState)(4),j=Object(d.a)(l,1)[0];Object(c.useEffect)((function(){p.a.get("https://aplikacja-muzyczna.herokuapp.com/music/all").then((function(e){s(e.data)}))}),[]);var u=i*j,b=u-j,O=a.slice(b,u);return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"musictitle",children:"Spis utwor\xf3w:"}),Object(h.jsx)(U,{tracks:O}),Object(h.jsx)(k,{scoresPerPage:j,totalScores:a.length,paginate:function(e){return o(e)}}),Object(h.jsxs)("footer",{children:[" ",Object(h.jsx)("p",{className:"react-player-licence",children:"Copyright \xa9 2020 Pete Cook"})]})]})},D=(a(38),a(42)),I=function(e){var t=e.scores,a=function(e){return e>=16?"Gratulacje! 100%":e>14?"Super!":e>12?"Dobra robota!":e>10?"Coraz lepiej!":e>8?"\u015aredni wynik":e>5?"Troch\u0119 lepiej":e>2?"Popraw si\u0119...":"Na prawd\u0119?"};return Object(h.jsx)("ul",{className:"score-table",children:t.map((function(e){return Object(h.jsx)("li",{className:"line-score",children:Object(h.jsxs)("p",{className:"score-p",children:[" ","Uzyska\u0142e\u015b ",e.scoreText," punkt\xf3w z 16 mo\u017cliwych"," ",Object(h.jsx)("span",{className:"score-span",children:Object(D.a)(e.createdAt)}),Object(h.jsx)("span",{className:"score-span",children:a(e.scoreText)})]})},e._id)}))})},F=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(1),r=Object(d.a)(n,2),i=r[0],l=r[1],b=Object(c.useState)(10),O=Object(d.a)(b,1)[0],m=function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://aplikacja-muzyczna.herokuapp.com/score/one");case 2:t=e.sent,s(t.data.slice(0).reverse());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=Object(c.useContext)(x).loggedIn,f=Object(o.f)();Object(c.useEffect)((function(){!1===g&&f.push("/login"),m()}),[]);var w=i*O,A=w-O,v=a.slice(A,w);return Object(h.jsxs)("div",{className:"container-score-disp",children:[Object(h.jsx)("h1",{className:"scoretitle",children:"Twoje osi\u0105gni\u0119cia:"}),Object(h.jsx)(I,{scores:v}),Object(h.jsx)(k,{scoresPerPage:O,totalScores:a.length,paginate:function(e){return l(e)}}),Object(h.jsx)("footer",{children:Object(h.jsx)("p",{className:"timeago-license",children:"Copyright \xa9 2016 Hust.cc"})})]})},M=(a(95),a(15));a(39);function T(){var e=Object(o.f)();Object(c.useEffect)((function(){p.a.get("https://aplikacja-muzyczna.herokuapp.com/music/all").then((function(e){n(function(e){for(var t,a,c=e.length;c>0;)a=Math.floor(Math.random()*c),t=e[--c],e[c]=e[a],e[a]=t;return e}(e.data))}))}),[]);var t=Object(c.useState)([]),a=Object(d.a)(t,2),s=a[0],n=a[1];var r=Object(c.useState)(0),i=Object(d.a)(r,2),l=i[0],j=i[1],u=Object(c.useState)(!1),b=Object(d.a)(u,2),O=b[0],m=b[1],x=Object(c.useState)(0),g=Object(d.a)(x,2),f=g[0],w=g[1],A=Object(c.useState)(""),v=Object(d.a)(A,2),y=v[0],C=v[1],z=Object(c.useState)(""),N=Object(d.a)(z,2),k=N[0],S=N[1],U=function(e){return C(e.target.value)},E=s.map((function(e,t){return Object(h.jsx)("div",{children:t===l?Object(h.jsx)(B.a,{controls:!0,url:e.link,height:"1.5em",width:"23em"}):null},t)})),D=f;return Object(h.jsxs)("div",{className:"app",children:[O?Object(h.jsxs)("div",{className:"score-section",children:["Twoj wynik:",Object(h.jsxs)("label",{children:[" ",Object(h.jsx)("input",{className:"input-score",type:"text",value:D,onChange:U})," "]}),"z 16",Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"save-score-btn",type:"button",onClick:function(){try{var t={scoreText:D};p.a.post("https://aplikacja-muzyczna.herokuapp.com/score/",t,{credentials:"include"}),e.push("/scores"),window.location.reload()}catch(a){e.push("/musiclist")}},children:"Zapisz wynik"})})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"question-section",children:[Object(h.jsxs)("span",{children:["Rozpoznaj utw\xf3r nr ",l+1]}),Object(h.jsx)("div",{className:"question-text",children:E})]}),Object(h.jsxs)("div",{className:"answer-section",children:[Object(h.jsxs)("label",{className:"nam",htmlFor:"name",children:["Autor:",Object(h.jsx)("input",{id:"name",placeholder:"Artist",onChange:U,type:"form",value:y}),Object(h.jsx)("br",{})]}),Object(h.jsxs)("label",{className:"titl",htmlFor:"title",children:["Tytu\u0142:",Object(h.jsx)("input",{id:"title",placeholder:"Title",onChange:function(e){return S(e.target.value)},type:"form",value:k})]}),Object(h.jsxs)("button",{className:"nxtbt",onClick:function(){y.toUpperCase()===s[l].author.toUpperCase()&&k.toUpperCase()===s[l].title.toUpperCase()?(w(f+2),Object(M.a)("Brawo! oba pola zosta\u0142y prawid\u0142owo wprowadzone!")):y.toUpperCase()!==s[l].author.toUpperCase()&&k.toUpperCase()!==s[l].title.toUpperCase()||(w(f+1),Object(M.a)("Jedno z p\xf3l zosta\u0142o wype\u0142nione prawid\u0142owo!"));var e=l+1;e<8?j(e):m(!0),C(""),S(""),console.log(s)},type:"submit",children:[" ","Nast\u0119pny utw\xf3r"," "]})]})]}),Object(h.jsxs)("footer",{children:[" ",Object(h.jsx)("p",{className:"react-player-licence",children:"Copyright \xa9 2020 Pete Cook"}),Object(h.jsx)("p",{className:"react-toastify-licence",children:"Copyright \xa9 2020 Fadi Khadra"})]})]})}M.a.configure();var Q=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),r=Object(d.a)(n,2),i=r[0],l=r[1],b=Object(c.useState)(),O=Object(d.a)(b,2),m=O[0],g=O[1],f=Object(c.useContext)(x).getLoggedIn,w=Object(o.f)();function A(){return(A=Object(u.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,c={email:a,password:i},e.next=5,p.a.post("https://aplikacja-muzyczna.herokuapp.com/admin/loginA",c);case 5:return e.next=7,f();case 7:w.push("/adminPanel"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),e.t0.response.data.msg&&g(e.t0.response.data.msg);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}return Object(h.jsxs)("div",{className:"page",children:[m&&Object(h.jsx)(y,{message:m,clearError:function(){return g(void 0)}}),Object(h.jsxs)("form",{className:"form",onSubmit:function(e){return A.apply(this,arguments)},children:[Object(h.jsx)("p",{className:"welcome",children:"PANEL ADMINISTRATORA"}),Object(h.jsx)("h2",{children:"Zaloguj si\u0119"}),Object(h.jsx)("label",{htmlFor:"login-email",children:"Email"}),Object(h.jsx)("input",{type:"email",placeholder:"Email",onChange:function(e){return s(e.target.value)},value:a}),Object(h.jsx)("label",{htmlFor:"login-password",children:"Has\u0142o"}),Object(h.jsx)("input",{type:"password",placeholder:"Password",onChange:function(e){return l(e.target.value)},value:i}),Object(h.jsx)("input",{type:"submit",value:"Zaloguj si\u0119"})]}),Object(h.jsx)("aside",{children:Object(h.jsx)("img",{className:"login",src:v,alt:"postac autoryzacja"})})]})};a(96);function R(){var e=Object(c.useContext)(x).loggedIn,t=Object(o.f)();return Object(c.useEffect)((function(){!1===e&&t.push("/admin")})),Object(h.jsx)("div",{className:"centerA",children:Object(h.jsxs)("main",{children:[Object(h.jsx)("h1",{children:"Wybierz z poni\u017cszych interesuj\u0105c\u0105 Ci\u0119 opcje: "}),Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)(i.b,{to:"/adminRegister",className:"buT",children:"Zarejestruj nowego administratora"}),Object(h.jsx)(i.b,{to:"/adminCreateCourse",className:"buT1",children:"Stw\xf3rz kurs"}),Object(h.jsx)(i.b,{to:"/adminScores",className:"buT2",children:"Sprawd\u017a wyniki u\u017cytkownik\xf3w"})]})]})})}var J=a.p+"static/media/adminR.9b2a14e7.png";var P=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),r=Object(d.a)(n,2),i=r[0],l=r[1],b=Object(c.useState)(""),O=Object(d.a)(b,2),m=O[0],g=O[1],f=Object(c.useState)(),w=Object(d.a)(f,2),A=w[0],v=w[1],C=Object(c.useState)(),z=Object(d.a)(C,2),N=z[0],k=z[1],S=Object(c.useContext)(x).getLoggedIn,B=Object(o.f)();function U(){return(U=Object(u.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,c={email:a,password:i,passwordVerify:m,displayName:N},e.next=5,p.a.post("https://aplikacja-muzyczna.herokuapp.com/admin/registerA",c);case 5:return e.next=7,S();case 7:B.push("/adminPanel"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),e.t0.response.data.msg&&v(e.t0.response.data.msg);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}return Object(h.jsxs)("div",{className:"page",children:[A&&Object(h.jsx)(y,{message:A,clearError:function(){return v(void 0)}}),Object(h.jsxs)("form",{className:"form",onSubmit:function(e){return U.apply(this,arguments)},children:[Object(h.jsx)("h2",{children:"Zarejestruj Administratora"}),Object(h.jsx)("label",{htmlFor:"register-email",children:"Email"}),Object(h.jsx)("input",{className:"register",type:"email",placeholder:"Email",onChange:function(e){return s(e.target.value)},value:a}),Object(h.jsx)("label",{htmlFor:"register-password",children:"Haslo"}),Object(h.jsx)("input",{className:"register",type:"password",placeholder:"Password",onChange:function(e){return l(e.target.value)},value:i}),Object(h.jsx)("input",{className:"register",type:"password",placeholder:"Confirm password",onChange:function(e){return g(e.target.value)},value:m}),Object(h.jsx)("label",{htmlFor:"register-display-name",children:"Nazwa uzytkownika"}),Object(h.jsx)("input",{className:"register",id:"register-display-name",type:"text",onChange:function(e){return k(e.target.value)}}),Object(h.jsx)("input",{type:"submit",value:"Zarejestruj"})]}),Object(h.jsx)("aside",{children:Object(h.jsx)("img",{className:"login",src:J,alt:"autoryzacja"})})]})},G=(a(97),function(e){var t=e.users;return Object(h.jsx)("ul",{className:"user-table",children:t.map((function(e){return Object(h.jsx)("li",{className:"line-user",children:Object(h.jsxs)("div",{className:"list-section",children:[Object(h.jsxs)("p",{className:"user-p",children:["U\u017cytkownik: ",e.email," "]}),Object(h.jsx)(i.b,{to:"/score/".concat(e._id),className:"buttonScore",children:"Sprawd\u017a wyniki"})]})},e._id)}))})}),K=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(1),r=Object(d.a)(n,2),i=r[0],o=r[1],l=Object(c.useState)(4),j=Object(d.a)(l,1)[0];Object(c.useEffect)((function(){p.a.get("https://aplikacja-muzyczna.herokuapp.com/auth/all").then((function(e){s(e.data)}))}),[]);var u=i*j,b=u-j,O=a.slice(b,u);return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"musictitle",children:"Spis u\u017cytkownik\xf3w:"}),Object(h.jsx)(G,{users:O}),Object(h.jsx)(k,{scoresPerPage:j,totalScores:a.length,paginate:function(e){return o(e)}})]})},L=function(e){var t=e.scores;return Object(h.jsx)("ul",{className:"score-table",children:t.map((function(e){return Object(h.jsx)("li",{className:"line-score",children:Object(h.jsxs)("p",{className:"score-p",children:[" ","U\u017cytkownik uzyska\u0142 ",e.scoreText," punkt\xf3w z 16 mo\u017cliwych"," "]})},e._id)}))})},H=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),r=Object(d.a)(n,2),i=r[0],l=r[1],j=Object(c.useState)(1),u=Object(d.a)(j,2),b=u[0],O=u[1],m=Object(c.useState)(10),x=Object(d.a)(m,1)[0];function g(){var e=Object(o.g)().idUrl;return l(e),Object(c.useEffect)((function(){p.a.get("https://aplikacja-muzyczna.herokuapp.com/score/"+i).then((function(e){s(e.data)}))}),[]),null}var f=b*x,w=f-x,A=a.slice(w,f);return Object(h.jsxs)("div",{className:"container-score-disp",children:[Object(h.jsx)("h1",{className:"scoretitle",children:"Osi\u0105gni\u0119cia:"}),Object(h.jsxs)("p",{className:"numberOfCourses",children:["Ilo\u015b\u0107 wykonanych kurs\xf3w: ",a.length]}),Object(h.jsx)(o.a,{path:"/score/:idUrl",children:Object(h.jsx)(g,{})}),Object(h.jsx)(L,{scores:A}),Object(h.jsx)(k,{scoresPerPage:x,totalScores:a.length,paginate:function(e){return O(e)}})]})};a(98);function W(){var e=Object(o.f)();Object(c.useEffect)((function(){p.a.get("https://aplikacja-muzyczna.herokuapp.com/adminMusic/all").then((function(e){n(function(e){for(var t,a,c=e.length;c>0;)a=Math.floor(Math.random()*c),t=e[--c],e[c]=e[a],e[a]=t;return e}(e.data))}))}),[]);var t=Object(c.useState)([]),a=Object(d.a)(t,2),s=a[0],n=a[1];var r=Object(c.useState)(0),i=Object(d.a)(r,2),l=i[0],j=i[1],u=Object(c.useState)(!1),b=Object(d.a)(u,2),O=b[0],m=b[1],x=Object(c.useState)(0),g=Object(d.a)(x,2),f=g[0],w=g[1],A=Object(c.useState)(""),v=Object(d.a)(A,2),y=v[0],C=v[1],z=Object(c.useState)(""),N=Object(d.a)(z,2),k=N[0],S=N[1],U=function(e){return C(e.target.value)},E=s.map((function(e,t){return Object(h.jsx)("div",{children:t===l?Object(h.jsx)(B.a,{controls:!0,url:e.link,height:"1.5em",width:"23em"}):null},t)})),D=f;return Object(h.jsx)("div",{className:"app",children:O?Object(h.jsxs)("div",{className:"score-section",children:["Twoj wynik:",Object(h.jsxs)("label",{children:[" ",Object(h.jsx)("input",{className:"input-score",type:"text",value:D,onChange:U})," "]}),"z ",2*s.length,Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"save-score-btn",type:"button",onClick:function(){try{var t={scoreText:D};return p.a.post("https://aplikacja-muzyczna.herokuapp.com/score/",t),e.push("/scores")}catch(a){e.push("/musiclist")}},children:"Zapisz wynik"})})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"question-section",children:[Object(h.jsxs)("span",{children:["Rozpoznaj utw\xf3r nr ",l+1]}),Object(h.jsx)("div",{className:"question-text",children:E})]}),Object(h.jsxs)("div",{className:"answer-section",children:[Object(h.jsxs)("label",{className:"nam",htmlFor:"name",children:["Autor:",Object(h.jsx)("input",{id:"name",placeholder:"Artist",onChange:U,type:"form",value:y}),Object(h.jsx)("br",{})]}),Object(h.jsxs)("label",{className:"titl",htmlFor:"title",children:["Tytu\u0142:",Object(h.jsx)("input",{id:"title",placeholder:"Title",onChange:function(e){return S(e.target.value)},type:"form",value:k})]}),Object(h.jsxs)("button",{className:"nxtbt",onClick:function(){y.toUpperCase()===s[l].author.toUpperCase()&&k.toUpperCase()===s[l].title.toUpperCase()?(w(f+2),Object(M.a)("Brawo! oba pola zosta\u0142y prawid\u0142owo wprowadzone!")):y.toUpperCase()!==s[l].author.toUpperCase()&&k.toUpperCase()!==s[l].title.toUpperCase()||(w(f+1),Object(M.a)("Jedno z p\xf3l zosta\u0142o wype\u0142nione prawid\u0142owo!"));var e=l+1;e<s.length?j(e):m(!0),C(""),S("")},type:"submit",children:[" ","Nast\u0119pny utw\xf3r"," "]})]})]})})}M.a.configure();a(40);var V=function(e){return e.stateCustomer.map((function(t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"checkbox",checked:t.select,onChange:function(a){var c=a.target.checked;e.setCustomerState(e.stateCustomer.map((function(e){return e.id===t.id&&(e.select=c),e})))}})}),Object(h.jsx)("td",{children:t.author}),Object(h.jsx)("td",{children:t.title})]},t.id)}))};var Y=function(){var e=Object(o.f)(),t=Object(c.useState)([]),a=Object(d.a)(t,2),s=a[0],n=a[1],r=Object(c.useState)([]),i=Object(d.a)(r,2),l=i[0],j=i[1],u=Object(c.useState)([]),b=Object(d.a)(u,2),O=b[0],m=b[1];Object(c.useEffect)((function(){x()}),[]);var x=function(){p.a.get("https://aplikacja-muzyczna.herokuapp.com/music/all").then((function(e){var t=e.data;n(t.map((function(e){return{select:!1,id:e._id,author:e.author,title:e.title}})))}))};return Object(h.jsxs)("ul",{className:"music-tab",children:[Object(h.jsx)("h1",{className:"text-tracks",children:"Wybierz 8 utwor\xf3w do utworzenia kursu"}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:Object(h.jsx)("input",{type:"checkbox",onChange:function(e){var t=e.target.checked;n(s.map((function(e){return e.select=t,e})))}})}),Object(h.jsx)("th",{scope:"col",children:"Autor"}),Object(h.jsx)("th",{scope:"col",children:"Tytu\u0142"})]}),Object(h.jsx)("tbody",{children:Object(h.jsx)(V,{stateCustomer:s,setCustomerState:n})}),Object(h.jsx)("button",{className:"btn-course",onClick:function(){!function(){try{p.a.delete("https://aplikacja-muzyczna.herokuapp.com/adminMusic/delete").then((function(e){return console.log(e.data)}))}catch(t){console.log("blad")}var e=[];s.forEach((function(t){t.select&&e.push(t.id)})),j(e),console.log(e)}()},children:"Zatwierd\u017a wyb\xf3r"}),Object(h.jsx)("p",{className:"stepone",children:"Krok 1 "}),Object(h.jsx)("button",{className:"btn-course1",onClick:function(){console.log(O),p.a.get("https://aplikacja-muzyczna.herokuapp.com/music/all").then((function(t){var a=t.data,c=0;m(a.forEach((function(e){e._id===l[c]&&(O.push(e),c++)})));try{for(var s=0;s<O.length;s++){console.log(O.length);var n={title:O[s].title,author:O[s].author,link:O[s].link};p.a.post("https://aplikacja-muzyczna.herokuapp.com/adminMusic/",n)}return e.push("/adminPanel")}catch(r){t.status(500).json({error:r.message})}}))},children:"Utw\xf3rz kurs"}),Object(h.jsx)("p",{className:"steptwo",children:"Krok 2 "})]})};var Z=function(){return Object(c.useContext)(x).loggedIn,Object(h.jsxs)(i.a,{children:[Object(h.jsx)(f,{}),Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/",component:A}),Object(h.jsx)(o.a,{exact:!0,path:"/",children:Object(h.jsx)("div",{children:"Home"})}),Object(h.jsx)(o.a,{path:"/register",children:Object(h.jsx)(z,{})}),Object(h.jsx)(o.a,{path:"/login",children:Object(h.jsx)(C,{})}),Object(h.jsx)(o.a,{path:"/admin",component:Q}),Object(h.jsx)(o.a,{path:"/adminPanel",component:R}),Object(h.jsx)(o.a,{path:"/adminRegister",component:P}),Object(h.jsx)(o.a,{path:"/adminScores",component:K}),Object(h.jsx)(o.a,{path:"/score/:user_id",component:H}),Object(h.jsx)(o.a,{path:"/adminCreateCourse",component:Y}),Object(h.jsx)(o.a,{path:"/adminquiz",component:W}),Object(h.jsx)(o.a,{exact:!0,path:"/",component:A}),Object(h.jsx)(o.a,{path:"/login",component:C}),Object(h.jsx)(o.a,{path:"/register",component:z}),Object(h.jsx)(o.a,{path:"/instructions",component:N}),Object(h.jsx)(o.a,{path:"/musiclist",component:E}),Object(h.jsx)(o.a,{path:"/entryquiz",component:T}),Object(h.jsx)(o.a,{path:"/scores",component:F})]})}),Object(h.jsxs)("div",{className:"logo",children:[Object(h.jsx)("img",{src:"data:image/png;base64,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",alt:"logo aplikacji"}),Object(h.jsx)("p",{children:"Classical music App"})]})]})};p.a.defaults.withCredentials=!0;var q=function(){return Object(h.jsx)(m,{children:Object(h.jsx)(Z,{})})};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(q,{})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.ed0dc46b.chunk.js.map