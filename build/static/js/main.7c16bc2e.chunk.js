(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,a,t){e.exports=t(51)},38:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),s=t(23),l=t.n(s),r=t(2),c=t(3),i=t(6),m=t(4),u=t(5),p=t(18),d=(t(38),t(12)),b=t(19),E=t(28),v=t(25),g=function e(a){return{type:e,menu:a}},h={menu:!1,scroll:!1},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case g:return Object.assign({},e),Object(E.a)({},e,{menu:a.menu});case function e(a){return{type:e,scroll:a}}:return Object.assign({},e),Object(E.a)({},e,{scroll:a.scroll});default:return e}};var N,y=(N=h,Object(v.b)(f,N)),O=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={backgroundColor:"#707070"},t.openMenu=t.openMenu.bind(Object(d.a)(Object(d.a)(t))),t.listenToScroll=t.listenToScroll.bind(Object(d.a)(Object(d.a)(t))),t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"openMenu",value:function(){console.log(this.props.menu),this.props.changeMenuState(!0)}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.listenToScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.listenToScroll)}},{key:"listenToScroll",value:function(e){console.log(window.scrollY),window.scrollY>800?this.setState({backgroundColor:"white"}):this.setState({backgroundColor:"#707070"})}},{key:"render",value:function(){return o.a.createElement("div",{className:"Navbar"},o.a.createElement("div",{className:"button",onClick:this.openMenu},o.a.createElement("div",{className:"button__icon"},o.a.createElement("span",{className:"button__icon__bar",style:{backgroundColor:this.state.backgroundColor}},"\xa0"),o.a.createElement("span",{className:"button__icon__bar",style:{backgroundColor:this.state.backgroundColor}},"\xa0")),o.a.createElement("span",{className:"button__text",style:{color:this.state.backgroundColor}},"Menu")))}}]),a}(n.Component),j=Object(b.b)(function(e){return{menu:e.menu}},function(e){return{changeMenuState:function(a){e(g(a))}}})(O),x=t(17),w=t(14),k=t(13),C=t(15);x.b.add(k.a,k.b,C.a,C.b);var M=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"Homepage"},o.a.createElement("div",{className:"content"},o.a.createElement("h1",{className:"titulo"},"Insecta"),o.a.createElement("span",null,"Ricardo Lu\xeds Oliveira"),o.a.createElement("span",null,"P\xf3s Gradua\xe7\xe3o em Dan\xe7a Contempor\xe2nea"),o.a.createElement("span",null,"ESMAE")),o.a.createElement("div",{className:"borboletas"},o.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 500 500",enableBackground:"new 0 0 500 500"},o.a.createElement("g",{id:"borboleta_svg"},o.a.createElement("g",{className:"left"},o.a.createElement("polygon",{points:"402,280 212,104 42,79 91,220 \t\t"}),o.a.createElement("polygon",{points:"119,280 91,220 402,280 \t\t"}),o.a.createElement("polygon",{fill:"#D47328",points:"402,280 119,280 119,373 212,430 \t\t"}),o.a.createElement("polygon",{fill:"#D47328",points:"42,79 210,113 402,280 97,212 \t\t"}),o.a.createElement("polygon",{fill:"#F7A129",points:"42,79 402,280 210,113 \t\t"}),o.a.createElement("polygon",{points:"119,280 212,430 119,373 \t\t"}),o.a.createElement("polygon",{fill:"#F7A129",points:"119,280 402,280 165.5,355 \t\t"})),o.a.createElement("g",{className:"body"},o.a.createElement("polyline",{points:"401.262,283.584 401.262,283.584 417.649,257.333 417.41,272.259 \t\t"}),o.a.createElement("polygon",{points:"404.172,280 365.164,351.614 347.429,340.225 \t\t"}),o.a.createElement("polygon",{points:"417.497,267.832 416.174,264.5 448.18,230.934 \t\t"}),o.a.createElement("polygon",{points:"413.164,264.982 409.455,265.27 415.392,219.272 \t\t"}),o.a.createElement("polygon",{fill:"#58595B",points:"404,281.895 356.834,346.068 365.164,351.614 \t\t"}),o.a.createElement("polyline",{fill:"#58595B",points:"402,283.584 402,283.584 417.649,257.333 406.443,264.366 \t\t"})),o.a.createElement("g",{className:"right"},o.a.createElement("polygon",{points:"401.025,279.434 191.572,127.1 19.81,122.349 85.116,256.576 \t\t"}),o.a.createElement("polygon",{points:"120.006,312.85 85.116,256.576 401.025,279.434 \t\t"}),o.a.createElement("polygon",{fill:"#D47328",points:"401.025,279.434 120.006,312.85 130.987,405.199 230.068,450.819 \t\t"}),o.a.createElement("polygon",{fill:"#D47328",points:"19.81,122.349 190.649,136.273 401.025,279.434 90.13,247.924 \t\t"}),o.a.createElement("polygon",{fill:"#F7A129",points:"19.81,122.349 401.025,279.434 190.649,136.273 \t\t"}),o.a.createElement("polygon",{points:"120.006,312.85 230.068,450.819 130.987,405.199 \t\t"}),o.a.createElement("polygon",{fill:"#F7A129",points:"120.006,312.85 401.025,279.434 175.037,381.835 \t\t"}))))),o.a.createElement("div",{className:"social"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.facebook.com/rluisoliveira",target:"_blank"},o.a.createElement(w.a,{icon:k.a}))),o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.instagram.com/rluisoliveira/",target:"_blank"},o.a.createElement(w.a,{icon:k.b}))),o.a.createElement("li",null,o.a.createElement("a",{href:"mailto:luisoliveira.rr@gmail.com",target:"_blank"},o.a.createElement(w.a,{icon:C.a}))))))}}]),a}(n.Component),_=t(8);x.b.add(k.a,k.b,C.a,C.b);var A=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).closeMenu=t.closeMenu.bind(Object(d.a)(Object(d.a)(t))),t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"closeMenu",value:function(){this.props.changeMenuState(!1)}},{key:"render",value:function(){return o.a.createElement("div",{className:this.props.menu?"Menu active-menu":"Menu"},o.a.createElement("div",null,o.a.createElement("span",{className:"close",onClick:this.closeMenu},o.a.createElement(w.a,{size:"2x",icon:C.b}))),o.a.createElement("div",null,o.a.createElement("ul",null,o.a.createElement(_.b,{to:"/",onClick:this.closeMenu},o.a.createElement("li",{className:"li-1"},"Homepage")),o.a.createElement(_.b,{to:"/biografia",onClick:this.closeMenu},o.a.createElement("li",{className:"li-2"},"Biografia")),o.a.createElement(_.b,{to:"/sinopse",onClick:this.closeMenu},o.a.createElement("li",{className:"li-3"},"Sinopse")),o.a.createElement(_.b,{to:"/espetaculo",onClick:this.closeMenu},o.a.createElement("li",{className:"li-4"},"Objetivo")),o.a.createElement(_.b,{to:"/tema",onClick:this.closeMenu},o.a.createElement("li",{className:"li-5"},"Tema")),o.a.createElement(_.b,{to:"/ficha",onClick:this.closeMenu},o.a.createElement("li",{className:"li-6"},"Ficha T\xe9cnica")),o.a.createElement(_.b,{to:"/agradecimentos",onClick:this.closeMenu},o.a.createElement("li",{className:"li-7"},"Agradecimentos")))),o.a.createElement("div",{className:"social"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.facebook.com/rluisoliveira",target:"_blank"},o.a.createElement(w.a,{icon:k.a}))),o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.instagram.com/rluisoliveira/",target:"_blank"},o.a.createElement(w.a,{icon:k.b}))),o.a.createElement("li",null,o.a.createElement("a",{href:"mailto:luisoliveira.rr@gmail.com",target:"_blank"},o.a.createElement(w.a,{icon:C.a}))))))}}]),a}(n.Component),S=Object(b.b)(function(e){return{menu:e.menu}},function(e){return{changeMenuState:function(a){e(g(a))}}})(A),B=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"Biografia"},o.a.createElement("div",{className:"left"},"\xa0"),o.a.createElement("div",{className:"right"},o.a.createElement("h1",null,"Ricardo Lu\xeds Oliveira"),o.a.createElement("p",null,"Nascido a 10 de Setembro de 1996 no Porto, viveu e cresceu com a sua fam\xedlia na cidade de Ovar, em Aveiro. Desde tenra idade j\xe1 mostrava interesse pelas artes performativas e musicais, pelo que aos cinco anos de idade come\xe7ou a aprender piano e a frequentar aulas de forma\xe7\xe3o musical. Pouco tempo mais tarde iniciou a sua forma\xe7\xe3o em dan\xe7a contempor\xe2nea na Escola de Bailado do Orfe\xe3o de Ovar, tendo participado em in\xfameros espet\xe1culos ao longo da sua vida com esta escola."),o.a.createElement("p",null,"Apesar da sua prefer\xeancia de estudos ter sempre pertencido \xe0s disciplinas art\xedsticas, frequentou e concluiu o ensino secund\xe1rio no curso de Ci\xeancias e Tecnologias e, em 2018, licenciou-se em Ci\xeancias do Meio Aqu\xe1tico pela Universidade do Porto. Durante este tempo centrado na \xe1rea cient\xedfica continuou a desenvolver a sua forma\xe7\xe3o em dan\xe7a e participou em v\xe1rios workshops e espet\xe1culos da mesma \xe1rea."),o.a.createElement("p",null,"No presente ano, apresenta o primeiro espet\xe1culo da sua autoria, como projeto final da sua P\xf3s-gradua\xe7\xe3o em Dan\xe7a Contempor\xe2nea da Escola Superior de M\xfasica e Artes do Espet\xe1culo.")))}}]),a}(n.Component),L=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"Espetaculo"},o.a.createElement("svg",{version:"1.1",id:"Layer_1",x:"0px",y:"0px",width:"500px",height:"500px",viewBox:"0 0 500 500",enableBackground:"new 0 0 500 500",className:"borboleta borboleta-1"},o.a.createElement("g",null,o.a.createElement("polygon",{points:"394,205 252,264 310,334 \t"}),o.a.createElement("polygon",{points:"92,230 190,349 241,274 \t"}))),o.a.createElement("svg",{version:"1.1",id:"Layer_1",x:"0px",y:"0px",width:"500px",height:"500px",viewBox:"0 0 500 500",enableBackground:"new 0 0 500 500",className:"borboleta borboleta-2"},o.a.createElement("g",null,o.a.createElement("polygon",{points:"394,205 252,264 310,334 \t"}),o.a.createElement("polygon",{points:"92,230 190,349 241,274 \t"}))),o.a.createElement("h1",{className:"title-espec"},"Objetivos"),o.a.createElement("p",{className:"p-espec"},"Um dos grandes objetivos deste espet\xe1culo \xe9 sensibilizar o p\xfablico para o estado de conserva\xe7\xe3o desta esp\xe9cie animal, atrav\xe9s da beleza e da vulnerabilidade das borboletas associado ao seu movimento. A borboleta monarca encontra-se, atualmente, na lista de esp\xe9cie em vias de extin\xe7\xe3o e estudos estimam que o n\xfamero de esp\xe9cimes pode desaparecer por completo num per\xedodo de 20 a 25 anos.",o.a.createElement("br",null),"As borboletas monarca s\xe3o extremamente importantes para o bom desenvolvimento do meio ambiente uma vez que desempenham fun\xe7\xf5es cruciais como a poliniza\xe7\xe3o de v\xe1rias plantas. Para al\xe9m disto, tamb\xe9m constituem uma fonte de alimento para outros animais. Com o seu desaparecimento, v\xe1rias esp\xe9cies de plantas podem apresentar dificuldades em sobreviver devido \xe0 falta de poliniza\xe7\xe3o, o que coloca em risco todo o funcionamento do ecossistema. Este \xe9 s\xf3 um dos v\xe1rios efeitos negativos associados ao risco de extin\xe7\xe3o das borboletas.",o.a.createElement("br",null),"Para mais informa\xe7\xf5es sobre a import\xe2ncia das borboletas monarca e o que fazer para ajudar na sua sobreviv\xeancia visite",o.a.createElement("a",{target:"_blank",href:"https://www.worldwildlife.org/species/monarch-butterfly"},"o site da World Wild Life.")))}}]),a}(n.Component),T=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"Sinopse"},o.a.createElement("div",{class:"sinopse-cont"},o.a.createElement("h1",{className:"title"},"Sinopse"),o.a.createElement("p",null,"Num universo contstru\xeddo por seis corpos, \xe9 representado o ciclo de vida das borboletas monarca, esp\xe9cie em vias de extin\xe7\xe3o. ",o.a.createElement("br",null),"A sua metamorfose insere-se num contexto contempor\xe2neo e eletr\xf3nico de desconstru\xe7\xe3o da imagem da Natureza como a conhecemos. ",o.a.createElement("br",null),"Guiados por formas e padr\xf5es geom\xe9tricos, os corpos movem-se com est\xedmulos sonoros que acompanham os ciclos de vida da esp\xe9cie.")))}}]),a}(n.Component),q=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"Tema"},o.a.createElement("div",{className:"black"},o.a.createElement("div",{className:"sec-1"},o.a.createElement("h1",{className:"title"},"Tema"),o.a.createElement("svg",{version:"1.1",id:"Layer_1",x:"0px",y:"0px",width:"500px",height:"500px",viewBox:"0 0 500 500",enableBackground:"new 0 0 500 500",className:"borboleta borboleta-1"},o.a.createElement("g",null,o.a.createElement("polygon",{points:"394,205 252,264 310,334 \t"}),o.a.createElement("polygon",{points:"92,230 190,349 241,274 \t"}))),o.a.createElement("svg",{version:"1.1",id:"Layer_1",x:"0px",y:"0px",width:"500px",height:"500px",viewBox:"0 0 500 500",enableBackground:"new 0 0 500 500",className:"borboleta borboleta-2"},o.a.createElement("g",null,o.a.createElement("polygon",{points:"394,205 252,264 310,334 \t"}),o.a.createElement("polygon",{points:"92,230 190,349 241,274 \t"}))),o.a.createElement("svg",{version:"1.1",id:"Layer_1",x:"0px",y:"0px",width:"500px",height:"500px",viewBox:"0 0 500 500",enableBackground:"new 0 0 500 500",className:"borboleta borboleta-3"},o.a.createElement("g",null,o.a.createElement("polygon",{points:"394,205 252,264 310,334 \t"}),o.a.createElement("polygon",{points:"92,230 190,349 241,274 \t"}))),o.a.createElement("p",{className:"p-1"},"As borboletas monarca (Danaus plexippus) pertencem \xe0 ordem Lepidoptera e \xe0 classe Insecta, dando t\xedtulo a este espet\xe1culo. A vida destas borboletas pode ser extremamente curta, durante apenas poucas semanas, mas durante este curto per\xedodo sofrem uma metamorfose extraordin\xe1ria e efetuam uma das grandes e mais not\xe1veis migra\xe7\xf5es de toda a classe dos insetos. Para isto, apresentam um excelente sentido de orienta\xe7\xe3o que \xe9 comparado a um compasso natural, auxiliando as borboletas na sua migra\xe7\xe3o.",o.a.createElement("br",null)," Para al\xe9m da sua beleza natural, uma das principais caracter\xedsticas das borboletas \xe9 a sua delicadeza e o movimento associado a esta. Cada indiv\xedduo desloca-se por si pr\xf3prio, mas em conjunto com outros para atingir um destino em comum. Partindo deste fen\xf3meno e das caracter\xedsticas da esp\xe9cie, este espet\xe1culo pretende captar a ideia de um coletivo em desloca\xe7\xe3o, mas n\xe3o necessariamente em completo un\xedssono. Cada corpo \xe9 livre e singular, com a sua pr\xf3pria transforma\xe7\xe3o e evolu\xe7\xe3o, mas sempre em contacto com outros corpos. O ciclo de vida desta esp\xe9cie compreende tr\xeas grandes etapas: a fase da lagarta, a fase da cris\xe1lida e a fase adulta. Estas etapas v\xe3o marcar e guiar o espet\xe1culo em tr\xeas grandes momentos atrav\xe9s de uma linha temporal evolutiva."))),o.a.createElement("div",{className:"fase-1"},o.a.createElement("div",null,o.a.createElement("h1",{className:"h1 h1-1"},"Fase da Lagarta"),o.a.createElement("p",{className:"fase-1__text"},"Um dos grandes objetivos deste tema \xe9 sensibilizar o p\xfablico para o estado de conserva\xe7\xe3o desta esp\xe9cie animal. A borboleta monarca encontra-se, atualmente, na lista de esp\xe9cies em vias de extin\xe7\xe3o, apesar de n\xe3o ser das mais amea\xe7adas nem das que se encontra em maior risco de extin\xe7\xe3o, por agora. Estudos recentes t\xeam revelado que o n\xfamero de esp\xe9cimes na natureza tem vindo a decrescer, e estimam ainda que v\xe3o desaparecer por completo num per\xedodo de 20 a 25 anos.")),o.a.createElement("div",{className:"fase-foto"},o.a.createElement("div",{className:"foto foto-1"}))),o.a.createElement("div",{className:"fase-2"},o.a.createElement("div",{className:"fase-foto fase-foto-2"},o.a.createElement("div",{className:"foto foto-2"})),o.a.createElement("div",null,o.a.createElement("h1",{className:"h1 h1-2"},"Fase da Cris\xe1lida"),o.a.createElement("p",{className:"fase-2__text"},"\xc0 primeira vista esta fase parece ser a mais im\xf3vel e n\xe3o apresentar grande atividade, mas, de facto, \xe9 a etapa onde ocorrem mais mudan\xe7as e transforma\xe7\xf5es. \xc9, mais uma vez, uma transforma\xe7\xe3o bastante lenta, mas \xe9 sempre cont\xednua e promove o desenvolvimento da mais pequena c\xe9lula do organismo at\xe9 \xe0 forma\xe7\xe3o de uma borboleta adulta."))),o.a.createElement("div",{className:"fase-3"},o.a.createElement("div",null,o.a.createElement("h1",{className:"h1 h1-3"},"Fase da Borboleta Adulta"),o.a.createElement("p",{className:"fase-3__text"},"Quando as borboletas atingem a idade adulta est\xe3o completamente formadas e prontas para come\xe7ar a sua migra\xe7\xe3o. As suas asas peculiares e extremamente delicadas permitem a sua desloca\xe7\xe3o at\xe9 ao destino pretendido. O voo das borboletas transmite uma no\xe7\xe3o de liberdade e leveza inigual\xe1veis e intemporais.")),o.a.createElement("div",{className:"fase-foto"},o.a.createElement("div",{className:"foto foto-3"}))))}}]),a}(n.Component),z=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"Ficha"},o.a.createElement("div",{className:"left"},o.a.createElement("h2",null,"Ficha T\xe9cnica"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("span",{className:"bold"},"Local:")," ESMAE - Teatro Helena S\xe1 e Costa"),o.a.createElement("li",null,o.a.createElement("span",{className:"bold"},"Data:")," 1 de Junho"),o.a.createElement("li",null,o.a.createElement("span",{className:"bold"},"Coreografia:")," Ricardo Lu\xeds Oliveira"),o.a.createElement("li",null,o.a.createElement("span",{className:"bold"},"Int\xe9rpretes:")," Catarina Alves, Hugo Magalh\xe3es, In\xeas Alves, In\xeas Gon\xe7alves, Liliana Mota e Lu\xeds Oliveira"),o.a.createElement("li",null,o.a.createElement("p",{className:"bold"},"M\xfasica:"),o.a.createElement("p",{className:!0}," ","Debussy: Reverie 68 - Second Storey & Appleblim Rework"),o.a.createElement("p",{className:!0}," Over here - Appleblim, Peverelist"),o.a.createElement("p",{className:!0}," Drumming - Four Tet Remix - Steve Reich"),o.a.createElement("p",{className:!0}," ","Recomposed By Max Richter: Vivaldi, The Four Seasons: Spring 0"),o.a.createElement("p",{className:!0}," ","Recomposed By Max Richter: Vivaldi, The Four Seasons: Spring 1")),o.a.createElement("li",null,o.a.createElement("span",null,o.a.createElement("span",{className:"bold"},"Figurinos:")," Lu\xeds Oliveira")),o.a.createElement("li",null,o.a.createElement("span",null,o.a.createElement("span",{className:"bold"},"Desenho de Luz:")," Paulo Ribeiro e Diogo Teixeira")))),o.a.createElement("div",{className:"right"}))}}]),a}(n.Component),D=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"Agradecimentos"},o.a.createElement("div",{className:"ag_structure"},o.a.createElement("h1",{className:"title-agrad"},"Agradecimentos"),o.a.createElement("p",{className:"p-agrad"},"Agrade\xe7o a todas as pessoas que estiveram involvidas na cria\xe7\xe3o e na montagem deste espet\xe1culo, principalmente a todos os int\xe9rpretes pela sua cont\xednua dedica\xe7\xe3o e empenho. Obrigado \xe0 Laura Pinto pela cria\xe7\xe3o deste website. Obrigado a todos os apoios listados em baixo."),o.a.createElement("div",{className:"apoios"},o.a.createElement("div",{className:"apoio apoio-1"}),o.a.createElement("div",{className:"apoio apoio-2"}),o.a.createElement("div",{className:"apoio apoio-3"}),o.a.createElement("div",{className:"apoio apoio-4"}),o.a.createElement("div",{className:"apoio apoio-5"}),o.a.createElement("div",{className:"apoio apoio-6"}),o.a.createElement("div",{className:"apoio apoio-7"}),o.a.createElement("div",{className:"apoio apoio-8"}))))}}]),a}(n.Component),F=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(j,null),o.a.createElement(S,null),o.a.createElement(p.c,null,o.a.createElement(p.a,{exact:!0,path:"/insecta/",component:M}),o.a.createElement(p.a,{exact:!0,path:"/insecta/biografia",component:B}),o.a.createElement(p.a,{exact:!0,path:"/insecta/espetaculo",component:L}),o.a.createElement(p.a,{exact:!0,path:"/insecta/sinopse",component:T}),o.a.createElement(p.a,{exact:!0,path:"/insecta/tema",component:q}),o.a.createElement(p.a,{exact:!0,path:"/insecta/ficha",component:z}),o.a.createElement(p.a,{exact:!0,path:"/insecta/agradecimentos",component:D})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(b.a,{store:y},o.a.createElement(_.a,null,o.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.7c16bc2e.chunk.js.map