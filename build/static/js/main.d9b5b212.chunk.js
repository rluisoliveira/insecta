(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,a,t){e.exports=t(51)},38:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var o=t(0),n=t.n(o),s=t(23),l=t.n(s),r=t(2),c=t(3),i=t(6),m=t(4),u=t(5),p=t(18),d=(t(38),t(16)),b=t(19),E=t(28),v=t(25),g=function e(a){return{type:e,menu:a}},h={menu:!1,scroll:!1},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case g:return Object.assign({},e),Object(E.a)({},e,{menu:a.menu});case function e(a){return{type:e,scroll:a}}:return Object.assign({},e),Object(E.a)({},e,{scroll:a.scroll});default:return e}};var N,y=(N=h,Object(v.b)(f,N)),O=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={backgroundColor:"#707070"},t.openMenu=t.openMenu.bind(Object(d.a)(t)),t.listenToScroll=t.listenToScroll.bind(Object(d.a)(t)),t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"openMenu",value:function(){console.log(this.props.menu),this.props.changeMenuState(!0)}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.listenToScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.listenToScroll)}},{key:"listenToScroll",value:function(e){console.log(window.scrollY),window.scrollY>800?this.setState({backgroundColor:"white"}):this.setState({backgroundColor:"#707070"})}},{key:"render",value:function(){return n.a.createElement("div",{className:"Navbar"},n.a.createElement("div",{className:"button",onClick:this.openMenu},n.a.createElement("div",{className:"button__icon"},n.a.createElement("span",{className:"button__icon__bar",style:{backgroundColor:this.state.backgroundColor}},"\xa0"),n.a.createElement("span",{className:"button__icon__bar",style:{backgroundColor:this.state.backgroundColor}},"\xa0")),n.a.createElement("span",{className:"button__text",style:{color:this.state.backgroundColor}},"Menu")))}}]),a}(o.Component),j=Object(b.b)(function(e){return{menu:e.menu}},function(e){return{changeMenuState:function(a){e(g(a))}}})(O),x=t(17),w=t(13),k=t(12),C=t(14);x.b.add(k.a,k.b,C.a,C.b);var M=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"Homepage"},n.a.createElement("div",{className:"content"},n.a.createElement("h1",{className:"titulo"},"Insecta"),n.a.createElement("span",null,"Ricardo Lu\xeds Oliveira"),n.a.createElement("span",null,"P\xf3s Gradua\xe7\xe3o em Dan\xe7a Contempor\xe2nea"),n.a.createElement("span",null,"ESMAE")),n.a.createElement("div",{className:"borboletas"},n.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 500 500",enableBackground:"new 0 0 500 500"},n.a.createElement("g",{id:"borboleta_svg"},n.a.createElement("g",{className:"left"},n.a.createElement("polygon",{points:"402,280 212,104 42,79 91,220 \t\t"}),n.a.createElement("polygon",{points:"119,280 91,220 402,280 \t\t"}),n.a.createElement("polygon",{fill:"#D47328",points:"402,280 119,280 119,373 212,430 \t\t"}),n.a.createElement("polygon",{fill:"#D47328",points:"42,79 210,113 402,280 97,212 \t\t"}),n.a.createElement("polygon",{fill:"#F7A129",points:"42,79 402,280 210,113 \t\t"}),n.a.createElement("polygon",{points:"119,280 212,430 119,373 \t\t"}),n.a.createElement("polygon",{fill:"#F7A129",points:"119,280 402,280 165.5,355 \t\t"})),n.a.createElement("g",{className:"body"},n.a.createElement("polyline",{points:"401.262,283.584 401.262,283.584 417.649,257.333 417.41,272.259 \t\t"}),n.a.createElement("polygon",{points:"404.172,280 365.164,351.614 347.429,340.225 \t\t"}),n.a.createElement("polygon",{points:"417.497,267.832 416.174,264.5 448.18,230.934 \t\t"}),n.a.createElement("polygon",{points:"413.164,264.982 409.455,265.27 415.392,219.272 \t\t"}),n.a.createElement("polygon",{fill:"#58595B",points:"404,281.895 356.834,346.068 365.164,351.614 \t\t"}),n.a.createElement("polyline",{fill:"#58595B",points:"402,283.584 402,283.584 417.649,257.333 406.443,264.366 \t\t"})),n.a.createElement("g",{className:"right"},n.a.createElement("polygon",{points:"401.025,279.434 191.572,127.1 19.81,122.349 85.116,256.576 \t\t"}),n.a.createElement("polygon",{points:"120.006,312.85 85.116,256.576 401.025,279.434 \t\t"}),n.a.createElement("polygon",{fill:"#D47328",points:"401.025,279.434 120.006,312.85 130.987,405.199 230.068,450.819 \t\t"}),n.a.createElement("polygon",{fill:"#D47328",points:"19.81,122.349 190.649,136.273 401.025,279.434 90.13,247.924 \t\t"}),n.a.createElement("polygon",{fill:"#F7A129",points:"19.81,122.349 401.025,279.434 190.649,136.273 \t\t"}),n.a.createElement("polygon",{points:"120.006,312.85 230.068,450.819 130.987,405.199 \t\t"}),n.a.createElement("polygon",{fill:"#F7A129",points:"120.006,312.85 401.025,279.434 175.037,381.835 \t\t"}))))),n.a.createElement("div",{className:"social"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.facebook.com/rluisoliveira",target:"_blank"},n.a.createElement(w.a,{icon:k.a}))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.instagram.com/rluisoliveira/",target:"_blank"},n.a.createElement(w.a,{icon:k.b}))),n.a.createElement("li",null,n.a.createElement("a",{href:"mailto:luisoliveira.rr@gmail.com",target:"_blank"},n.a.createElement(w.a,{icon:C.a}))))))}}]),a}(o.Component),_=t(8);x.b.add(k.a,k.b,C.a,C.b);var A=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).closeMenu=t.closeMenu.bind(Object(d.a)(t)),t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"closeMenu",value:function(){this.props.changeMenuState(!1)}},{key:"render",value:function(){return n.a.createElement("div",{className:this.props.menu?"Menu active-menu":"Menu"},n.a.createElement("div",null,n.a.createElement("span",{className:"close",onClick:this.closeMenu},n.a.createElement(w.a,{size:"2x",icon:C.b}))),n.a.createElement("div",null,n.a.createElement("ul",null,n.a.createElement(_.b,{to:"/",onClick:this.closeMenu},n.a.createElement("li",{className:"li-1"},"Homepage")),n.a.createElement(_.b,{to:"/biografia",onClick:this.closeMenu},n.a.createElement("li",{className:"li-2"},"Biografia")),n.a.createElement(_.b,{to:"/sinopse",onClick:this.closeMenu},n.a.createElement("li",{className:"li-3"},"Sinopse")),n.a.createElement(_.b,{to:"/espetaculo",onClick:this.closeMenu},n.a.createElement("li",{className:"li-4"},"Objetivo")),n.a.createElement(_.b,{to:"/tema",onClick:this.closeMenu},n.a.createElement("li",{className:"li-5"},"Tema")),n.a.createElement(_.b,{to:"/ficha",onClick:this.closeMenu},n.a.createElement("li",{className:"li-6"},"Ficha T\xe9cnica")),n.a.createElement(_.b,{to:"/agradecimentos",onClick:this.closeMenu},n.a.createElement("li",{className:"li-7"},"Agradecimentos")))),n.a.createElement("div",{className:"social"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.facebook.com/rluisoliveira",target:"_blank"},n.a.createElement(w.a,{icon:k.a}))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.instagram.com/rluisoliveira/",target:"_blank"},n.a.createElement(w.a,{icon:k.b}))),n.a.createElement("li",null,n.a.createElement("a",{href:"mailto:luisoliveira.rr@gmail.com",target:"_blank"},n.a.createElement(w.a,{icon:C.a}))))))}}]),a}(o.Component),S=Object(b.b)(function(e){return{menu:e.menu}},function(e){return{changeMenuState:function(a){e(g(a))}}})(A),B=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"Biografia"},n.a.createElement("div",{className:"left"},"\xa0"),n.a.createElement("div",{className:"right"},n.a.createElement("h1",null,"Ricardo Lu\xeds Oliveira"),n.a.createElement("p",null,"Nascido a 10 de Setembro de 1996 no Porto, viveu e cresceu com a sua fam\xedlia na cidade de Ovar, em Aveiro. Desde tenra idade j\xe1 mostrava interesse pelas artes performativas e musicais, pelo que aos cinco anos de idade come\xe7ou a aprender piano e a frequentar aulas de forma\xe7\xe3o musical. Pouco tempo mais tarde iniciou a sua forma\xe7\xe3o em dan\xe7a contempor\xe2nea na Escola de Bailado do Orfe\xe3o de Ovar, tendo participado em in\xfameros espet\xe1culos ao longo da sua vida com esta escola."),n.a.createElement("p",null,"Apesar da sua prefer\xeancia de estudos ter sempre pertencido \xe0s disciplinas art\xedsticas, frequentou e concluiu o ensino secund\xe1rio no curso de Ci\xeancias e Tecnologias e, em 2018, licenciou-se em Ci\xeancias do Meio Aqu\xe1tico pela Universidade do Porto. Durante este tempo centrado na \xe1rea cient\xedfica continuou a desenvolver a sua forma\xe7\xe3o em dan\xe7a e participou em v\xe1rios workshops e espet\xe1culos da mesma \xe1rea."),n.a.createElement("p",null,"No presente ano, apresenta o primeiro espet\xe1culo da sua autoria, como projeto final da sua P\xf3s-gradua\xe7\xe3o em Dan\xe7a Contempor\xe2nea da Escola Superior de M\xfasica e Artes do Espet\xe1culo.")))}}]),a}(o.Component),L=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"Espetaculo"},n.a.createElement("svg",{version:"1.1",id:"Layer_1",x:"0px",y:"0px",width:"500px",height:"500px",viewBox:"0 0 500 500",enableBackground:"new 0 0 500 500",className:"borboleta borboleta-1"},n.a.createElement("g",null,n.a.createElement("polygon",{points:"394,205 252,264 310,334 \t"}),n.a.createElement("polygon",{points:"92,230 190,349 241,274 \t"}))),n.a.createElement("svg",{version:"1.1",id:"Layer_1",x:"0px",y:"0px",width:"500px",height:"500px",viewBox:"0 0 500 500",enableBackground:"new 0 0 500 500",className:"borboleta borboleta-2"},n.a.createElement("g",null,n.a.createElement("polygon",{points:"394,205 252,264 310,334 \t"}),n.a.createElement("polygon",{points:"92,230 190,349 241,274 \t"}))),n.a.createElement("h1",{className:"title-espec"},"Objetivos"),n.a.createElement("p",{className:"p-espec"},"Um dos grandes objetivos deste espet\xe1culo \xe9 sensibilizar o p\xfablico para o estado de conserva\xe7\xe3o desta esp\xe9cie animal, atrav\xe9s da beleza e da vulnerabilidade das borboletas associado ao seu movimento. A borboleta monarca encontra-se, atualmente, na lista de esp\xe9cie em vias de extin\xe7\xe3o e estudos estimam que o n\xfamero de esp\xe9cimes pode desaparecer por completo num per\xedodo de 20 a 25 anos.",n.a.createElement("br",null),"As borboletas monarca s\xe3o extremamente importantes para o bom desenvolvimento do meio ambiente uma vez que desempenham fun\xe7\xf5es cruciais como a poliniza\xe7\xe3o de v\xe1rias plantas. Para al\xe9m disto, tamb\xe9m constituem uma fonte de alimento para outros animais. Com o seu desaparecimento, v\xe1rias esp\xe9cies de plantas podem apresentar dificuldades em sobreviver devido \xe0 falta de poliniza\xe7\xe3o, o que coloca em risco todo o funcionamento do ecossistema. Este \xe9 s\xf3 um dos v\xe1rios efeitos negativos associados ao risco de extin\xe7\xe3o das borboletas.",n.a.createElement("br",null),"Para mais informa\xe7\xf5es sobre a import\xe2ncia das borboletas monarca e o que fazer para ajudar na sua sobreviv\xeancia visite",n.a.createElement("a",{target:"_blank",href:"https://www.worldwildlife.org/species/monarch-butterfly"},"o site da World Wild Life.")))}}]),a}(o.Component),T=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"Sinopse"},n.a.createElement("div",{class:"sinopse-cont"},n.a.createElement("h1",{className:"title"},"Sinopse"),n.a.createElement("p",null,"Num universo contstru\xeddo por seis corpos, \xe9 representado o ciclo de vida das borboletas monarca, esp\xe9cie em vias de extin\xe7\xe3o. ",n.a.createElement("br",null),"A sua metamorfose insere-se num contexto contempor\xe2neo e eletr\xf3nico de desconstru\xe7\xe3o da imagem da Natureza como a conhecemos. ",n.a.createElement("br",null),"Guiados por formas e padr\xf5es geom\xe9tricos, os corpos movem-se com est\xedmulos sonoros que acompanham os ciclos de vida da esp\xe9cie.")))}}]),a}(o.Component),q=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"Tema"},n.a.createElement("div",{className:"black"},n.a.createElement("div",{className:"sec-1"},n.a.createElement("h1",{className:"title"},"Tema"),n.a.createElement("svg",{version:"1.1",id:"Layer_1",x:"0px",y:"0px",width:"500px",height:"500px",viewBox:"0 0 500 500",enableBackground:"new 0 0 500 500",className:"borboleta borboleta-1"},n.a.createElement("g",null,n.a.createElement("polygon",{points:"394,205 252,264 310,334 \t"}),n.a.createElement("polygon",{points:"92,230 190,349 241,274 \t"}))),n.a.createElement("svg",{version:"1.1",id:"Layer_1",x:"0px",y:"0px",width:"500px",height:"500px",viewBox:"0 0 500 500",enableBackground:"new 0 0 500 500",className:"borboleta borboleta-2"},n.a.createElement("g",null,n.a.createElement("polygon",{points:"394,205 252,264 310,334 \t"}),n.a.createElement("polygon",{points:"92,230 190,349 241,274 \t"}))),n.a.createElement("svg",{version:"1.1",id:"Layer_1",x:"0px",y:"0px",width:"500px",height:"500px",viewBox:"0 0 500 500",enableBackground:"new 0 0 500 500",className:"borboleta borboleta-3"},n.a.createElement("g",null,n.a.createElement("polygon",{points:"394,205 252,264 310,334 \t"}),n.a.createElement("polygon",{points:"92,230 190,349 241,274 \t"}))),n.a.createElement("p",{className:"p-1"},"As borboletas monarca (Danaus plexippus) pertencem \xe0 ordem Lepidoptera e \xe0 classe Insecta, dando t\xedtulo a este espet\xe1culo. A vida destas borboletas pode ser extremamente curta, durante apenas poucas semanas, mas durante este curto per\xedodo sofrem uma metamorfose extraordin\xe1ria e efetuam uma das grandes e mais not\xe1veis migra\xe7\xf5es de toda a classe dos insetos. Para isto, apresentam um excelente sentido de orienta\xe7\xe3o que \xe9 comparado a um compasso natural, auxiliando as borboletas na sua migra\xe7\xe3o.",n.a.createElement("br",null)," Para al\xe9m da sua beleza natural, uma das principais caracter\xedsticas das borboletas \xe9 a sua delicadeza e o movimento associado a esta. Cada indiv\xedduo desloca-se por si pr\xf3prio, mas em conjunto com outros para atingir um destino em comum. Partindo deste fen\xf3meno e das caracter\xedsticas da esp\xe9cie, este espet\xe1culo pretende captar a ideia de um coletivo em desloca\xe7\xe3o, mas n\xe3o necessariamente em completo un\xedssono. Cada corpo \xe9 livre e singular, com a sua pr\xf3pria transforma\xe7\xe3o e evolu\xe7\xe3o, mas sempre em contacto com outros corpos. O ciclo de vida desta esp\xe9cie compreende tr\xeas grandes etapas: a fase da lagarta, a fase da cris\xe1lida e a fase adulta. Estas etapas v\xe3o marcar e guiar o espet\xe1culo em tr\xeas grandes momentos atrav\xe9s de uma linha temporal evolutiva."))),n.a.createElement("div",{className:"fase-1"},n.a.createElement("div",null,n.a.createElement("h1",{className:"h1 h1-1"},"Fase da Lagarta"),n.a.createElement("p",{className:"fase-1__text"},"Um dos grandes objetivos deste tema \xe9 sensibilizar o p\xfablico para o estado de conserva\xe7\xe3o desta esp\xe9cie animal. A borboleta monarca encontra-se, atualmente, na lista de esp\xe9cies em vias de extin\xe7\xe3o, apesar de n\xe3o ser das mais amea\xe7adas nem das que se encontra em maior risco de extin\xe7\xe3o, por agora. Estudos recentes t\xeam revelado que o n\xfamero de esp\xe9cimes na natureza tem vindo a decrescer, e estimam ainda que v\xe3o desaparecer por completo num per\xedodo de 20 a 25 anos.")),n.a.createElement("div",{className:"fase-foto"},n.a.createElement("div",{className:"foto foto-1"}))),n.a.createElement("div",{className:"fase-2"},n.a.createElement("div",{className:"fase-foto fase-foto-2"},n.a.createElement("div",{className:"foto foto-2"})),n.a.createElement("div",null,n.a.createElement("h1",{className:"h1 h1-2"},"Fase da Cris\xe1lida"),n.a.createElement("p",{className:"fase-2__text"},"\xc0 primeira vista esta fase parece ser a mais im\xf3vel e n\xe3o apresentar grande atividade, mas, de facto, \xe9 a etapa onde ocorrem mais mudan\xe7as e transforma\xe7\xf5es. \xc9, mais uma vez, uma transforma\xe7\xe3o bastante lenta, mas \xe9 sempre cont\xednua e promove o desenvolvimento da mais pequena c\xe9lula do organismo at\xe9 \xe0 forma\xe7\xe3o de uma borboleta adulta."))),n.a.createElement("div",{className:"fase-3"},n.a.createElement("div",null,n.a.createElement("h1",{className:"h1 h1-3"},"Fase da Borboleta Adulta"),n.a.createElement("p",{className:"fase-3__text"},"Quando as borboletas atingem a idade adulta est\xe3o completamente formadas e prontas para come\xe7ar a sua migra\xe7\xe3o. As suas asas peculiares e extremamente delicadas permitem a sua desloca\xe7\xe3o at\xe9 ao destino pretendido. O voo das borboletas transmite uma no\xe7\xe3o de liberdade e leveza inigual\xe1veis e intemporais.")),n.a.createElement("div",{className:"fase-foto"},n.a.createElement("div",{className:"foto foto-3"}))))}}]),a}(o.Component),z=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"Ficha"},n.a.createElement("div",{className:"left"},n.a.createElement("h2",null,"Ficha T\xe9cnica"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("span",{className:"bold"},"Local:")," ESMAE - Teatro Helena S\xe1 e Costa"),n.a.createElement("li",null,n.a.createElement("span",{className:"bold"},"Data:")," 1 de Junho"),n.a.createElement("li",null,n.a.createElement("span",{className:"bold"},"Coreografia:")," Ricardo Lu\xeds Oliveira"),n.a.createElement("li",null,n.a.createElement("span",{className:"bold"},"Int\xe9rpretes:")," Catarina Alves, Hugo Magalh\xe3es, In\xeas Alves, In\xeas Gon\xe7alves, Liliana Mota e Lu\xeds Oliveira"),n.a.createElement("li",null,n.a.createElement("p",{className:"bold"},"M\xfasica:"),n.a.createElement("p",{className:!0}," ","Debussy: Reverie 68 - Second Storey & Appleblim Rework"),n.a.createElement("p",{className:!0}," Over here - Appleblim, Peverelist"),n.a.createElement("p",{className:!0}," Drumming - Four Tet Remix - Steve Reich"),n.a.createElement("p",{className:!0}," ","Recomposed By Max Richter: Vivaldi, The Four Seasons: Spring 0"),n.a.createElement("p",{className:!0}," ","Recomposed By Max Richter: Vivaldi, The Four Seasons: Spring 1")),n.a.createElement("li",null,n.a.createElement("span",null,n.a.createElement("span",{className:"bold"},"Figurinos:")," Lu\xeds Oliveira")),n.a.createElement("li",null,n.a.createElement("span",null,n.a.createElement("span",{className:"bold"},"Desenho de Luz:")," Paulo Ribeiro e Diogo Teixeira")))),n.a.createElement("div",{className:"right"}))}}]),a}(o.Component),D=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"Agradecimentos"},n.a.createElement("div",{className:"ag_structure"},n.a.createElement("h1",{className:"title-agrad"},"Agradecimentos"),n.a.createElement("p",{className:"p-agrad"},"Agrade\xe7o a todas as pessoas que estiveram involvidas na cria\xe7\xe3o e na montagem deste espet\xe1culo, principalmente a todos os int\xe9rpretes pela sua cont\xednua dedica\xe7\xe3o e empenho. Obrigado \xe0 Laura Pinto pela cria\xe7\xe3o deste website. Obrigado a todos os apoios listados em baixo."),n.a.createElement("div",{className:"apoios"},n.a.createElement("div",{className:"apoio apoio-1"}),n.a.createElement("div",{className:"apoio apoio-2"}),n.a.createElement("div",{className:"apoio apoio-3"}),n.a.createElement("div",{className:"apoio apoio-4"}),n.a.createElement("div",{className:"apoio apoio-5"}),n.a.createElement("div",{className:"apoio apoio-6"}),n.a.createElement("div",{className:"apoio apoio-7"}),n.a.createElement("div",{className:"apoio apoio-8"}))))}}]),a}(o.Component),F=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(j,null),n.a.createElement(S,null),n.a.createElement(p.c,null,n.a.createElement(p.a,{exact:!0,path:"/",component:M}),n.a.createElement(p.a,{exact:!0,path:"/biografia",component:B}),n.a.createElement(p.a,{exact:!0,path:"/espetaculo",component:L}),n.a.createElement(p.a,{exact:!0,path:"/sinopse",component:T}),n.a.createElement(p.a,{exact:!0,path:"/tema",component:q}),n.a.createElement(p.a,{exact:!0,path:"/ficha",component:z}),n.a.createElement(p.a,{exact:!0,path:"/agradecimentos",component:D})))}}]),a}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(b.a,{store:y},n.a.createElement(_.a,null,n.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.d9b5b212.chunk.js.map