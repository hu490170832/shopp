webpackJsonp([3],{"3Pot":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("Lw6n"),i=new(e.n(a).a);n.default=i},"6y5X":function(t,n){},"9nkg":function(t,n){},DOfO:function(t,n){},KXza:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("fZjL"),i=e.n(a),o=(e("FDxC"),e("w+oK")),s=e.n(o),r=(e("jgNZ"),e("syWm")),u=e.n(r),c=(e("dKGA"),e("kSul")),d=e.n(c),l=(e("08XL"),e("24wo")),f=e.n(l),p=(e("G/J0"),e("beN6")),h=e.n(p),g=(e("ORyp"),e("3p6b")),m=e.n(g),v=(e("Mcfu"),e("r9aq")),_=e.n(v),w=(e("Qbok"),e("7+uW")),L=e("Dd8w"),O=e.n(L),I=e("NYxO"),b={name:"App",data:function(){return{}},computed:O()({},Object(I.b)(["getIsLoading"])),methods:{}},N={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"van-hairline--surround",attrs:{id:"app"}},[n("load",{directives:[{name:"show",rawName:"v-show",value:this.getIsLoading,expression:"getIsLoading"}]}),this._v(" "),n("router-view",{directives:[{name:"show",rawName:"v-show",value:!this.getIsLoading,expression:"!getIsLoading"}]})],1)},staticRenderFns:[]};var y=e("VU/8")(b,N,!1,function(t){e("rz/g")},null,null).exports,x=e("/ocq");w.default.use(x.a);var j,k=new x.a({routes:[{path:"/",name:"ShoppingMall",component:function(){return e.e(0).then(e.bind(null,"/sAh"))}},{path:"/gooddetails/:goodId",name:"gooddetails",component:function(){return e.e(1).then(e.bind(null,"NtB+"))}}]}),A={money:function(t){return"¥"+t}},C=e("//Fk"),D=e.n(C),E=e("mtWM"),G=e.n(E),H=e("mw3O"),S=e.n(H),W=e("bOdI"),$=e.n(W),q={state:{isLoading:!1},mutations:(j={},$()(j,"SHOW_LOADING",function(t,n){t.isLoading=n}),$()(j,"HIDE_LOADING",function(t,n){t.isLoading=n}),j),getters:{getIsLoading:function(t){return t.isLoading}}},z={showLoading:function(t,n){(0,t.commit)("SHOW_LOADING",n)},hideLoading:function(t,n){(0,t.commit)("HIDE_LOADING",n)}};w.default.use(I.a);var F=new I.a.Store({modules:{mutations:q},actions:z});G.a.interceptors.request.use(function(t){return F.dispatch("showLoading",!0),t},function(t){return D.a.reject(t)}),G.a.interceptors.response.use(function(t){return F.dispatch("hideLoading",!1),t},function(t){return D.a.reject(t)});var M=function(t,n,e){var a={method:t,url:n,params:S.a.stringify(e),data:S.a.stringify(e)};return"get"==t?delete a.data:delete a.params,new D.a(function(t,n){G()(a).then(function(e){"200"==e.status?t(S.a.parse(e.data)):n({err:"状态码不是200"})}).catch(function(t){F.dispatch("hideLoading",!1),console.log("ajax请求出错",t),n(S.a.parse({err:"ajax请求出错"}))})})},X={get:function(t,n){return M("get",t,n)},post:function(t,n){return M("post",t,n)}},K={goods:function(t){return X.get("https://www.easy-mock.com/mock/5ae26ea500247c2aa1efe478/shopp/api/floor",t)}},P=e("7QTg"),R=e.n(P),Q=(e("v2ns"),{render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"alert",attrs:{transition:"modal-scale"}},[n("div",{staticClass:"alert-mask"}),this._v(" "),n("div",{staticClass:"alert-content"},[n("div",[this._v("弹窗内容")])])])}]});var U=e("VU/8")({},Q,!1,function(t){e("KXza")},"data-v-2f8d61d7",null).exports,V={install:function(t){t.component("alert",U)}},J={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"loading",attrs:{id:"loading"}},[n("div",{staticClass:"load"},[n("i"),this._v(" "),n("i"),this._v(" "),n("i"),this._v(" "),n("i"),this._v(" "),n("i")])])}]};var T=e("VU/8")({},J,!1,function(t){e("6y5X")},"data-v-1889a31f",null).exports,Z={install:function(t){t.component("load",T)}};e("3Pot"),w.default.prototype.$http=K,w.default.use(s.a).use(u.a).use(d.a).use(f.a).use(h.a).use(m.a).use(R.a).use(_.a).use(V).use(Z),i()(A).forEach(function(t){w.default.filter(t,A[t])}),w.default.config.productionTip=!1,new w.default({store:F,el:"#app",router:k,components:{App:y},template:"<App/>"})},Qbok:function(t,n){},qCSc:function(t,n){},qzWe:function(t,n){},"rz/g":function(t,n){},v2ns:function(t,n){},xL5C:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.6b9be9aea1e558f49a8f.js.map