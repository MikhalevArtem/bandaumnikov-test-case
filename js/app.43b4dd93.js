(function(e){function t(t){for(var r,i,s=t[0],o=t[1],l=t[2],d=0,j=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&j.push(n[i][0]),n[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);u&&u(t);while(j.length)j.shift()();return a.push.apply(a,l||[]),c()}function c(){for(var e,t=0;t<a.length;t++){for(var c=a[t],r=!0,s=1;s<c.length;s++){var o=c[s];0!==n[o]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=c[0]))}return e}var r={},n={app:0},a=[];function i(t){if(r[t])return r[t].exports;var c=r[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,i),c.l=!0,c.exports}i.m=e,i.c=r,i.d=function(e,t,c){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(i.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(c,r,function(t){return e[t]}.bind(null,r));return c},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/bandaumnikov-test-case/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=o;a.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"22d3":function(e,t,c){},3514:function(e,t,c){},"3c80":function(e,t,c){"use strict";c("22d3")},"442e":function(e,t,c){"use strict";c("3514")},"4e0a":function(e,t,c){"use strict";c("58f2")},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var r=c("7a23");function n(e,t,c,n,a,i){var s=Object(r["O"])("router-view");return Object(r["E"])(),Object(r["g"])(s)}var a={name:"App"},i=c("6b0d"),s=c.n(i);const o=s()(a,[["render",n]]);var l=o,u=(c("b0c0"),c("6c02")),d=c("5502"),j=c("1da1"),b=(c("96cf"),c("d3b7"),c("d9e2"),c("3ca3"),c("ddb0"),c("2b3d"),c("9861"),c("99af"),new URL("https://random-data-api.com/api/beer/random_beer")),O=new URL("https://random-data-api.com/api/users/random_user"),f=function(e,t){return new URL("https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(e,",").concat(t,".json?access_token=pk.eyJ1IjoidGVtaWsyNTAyIiwiYSI6ImNreXMwajVxbTA0dDEydm4xN21xZmFqZTQifQ.o0rPsoZ_eFVYQzI-xTea4A"))},v={state:function(){return{user:null,isLoading:!1,error:null}},mutations:{fetchUserRequest:function(e){e.user=null,e.isLoading=!0,e.error=!1},fetchUserSuccess:function(e,t){e.user=t,e.isLoading=!1},fetchUserFailure:function(e,t){e.isLoading=!1,e.error=t},logoutUser:function(e){e.user=null,e.isLoading=!1,e.error=null}},actions:{fetchUser:function(e){return Object(j["a"])(regeneratorRuntime.mark((function t(){var c,r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return c=e.commit,r=e.dispatch,t.prev=1,c("fetchUserRequest"),t.next=5,fetch(O);case 5:if(n=t.sent,n.ok){t.next=8;break}throw new Error("network error");case 8:return t.next=10,n.json();case 10:a=t.sent,c("fetchUserSuccess",a),r("fetchGeo",{lng:a.address.coordinates.lng,lat:a.address.coordinates.lat}),oc.push("/"),t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](1),c("fetchUserFailure",t.t0.message);case 19:case"end":return t.stop()}}),t,null,[[1,16]])})))()},logout:function(e){var t=e.commit;t("logoutUser"),oc.push("/login")}},getters:{getUserData:function(e){return e.user},getUserIsLoading:function(e){return e.isLoading},getUserError:function(e){return e.error}}},m={state:function(){return{isLoading:!1,error:null,data:null}},mutations:{fetchBeerRequest:function(e){e.isLoading=!0,e.error=null,e.data=null},fetchBeerSuccess:function(e,t){e.isLoading=!1,e.data=t},fetchBeerFailure:function(e,t){e.isLoading=!1,e.error=t}},actions:{fetchBeer:function(e){return Object(j["a"])(regeneratorRuntime.mark((function t(){var c,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return c=e.commit,t.prev=1,c("fetchBeerRequest"),t.next=5,fetch(b);case 5:if(r=t.sent,r.ok){t.next=8;break}throw new Error("network error");case 8:return t.next=10,r.json();case 10:n=t.sent,c("fetchBeerSuccess",n),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](1),c("fetchBeerFailure",t.t0.message);case 17:case"end":return t.stop()}}),t,null,[[1,14]])})))()}},getters:{getBeerData:function(e){return e.data},getBeerIsLoading:function(e){return e.isLoading},getBeerError:function(e){return e.error}}},g={state:function(){return{place:"",error:null,isLoading:!1}},mutations:{fetchGeoRequest:function(e){e.place="",e.isLoading=!0,e.error=null},fetchGeoSuccess:function(e,t){e.place=t,e.isLoading=!1},fetchGeoFailure:function(e,t){e.isLoading=!1,e.error=t}},actions:{fetchGeo:function(e,t){return Object(j["a"])(regeneratorRuntime.mark((function c(){var r,n,a,i,s,o,l;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return r=e.commit,c.prev=1,i=t.lng,s=t.lat,r("fetchGeoRequest"),c.next=6,fetch(f(i,s));case 6:if(o=c.sent,o.ok){c.next=9;break}throw new Error("network error");case 9:return c.next=11,o.json();case 11:l=c.sent,r("fetchGeoSuccess",null!==(n=null===l||void 0===l||null===(a=l.features[0])||void 0===a?void 0:a.place_name)&&void 0!==n?n:"fog of war"),c.next=18;break;case 15:c.prev=15,c.t0=c["catch"](1),r("fetchGeoFailure",c.t0.message);case 18:case"end":return c.stop()}}),c,null,[[1,15]])})))()}},getters:{getPlace:function(e){return e.place},getGeoIsLoading:function(e){return e.isLoading},getGeoError:function(e){return e.error}}},p=Object(d["a"])({state:{},mutations:{},actions:{},getters:{},modules:{user:v,beer:m,geocoding:g}});function _(e,t,c,n,a,i){var s=Object(r["O"])("BeerCard"),o=Object(r["O"])("Layaut");return Object(r["E"])(),Object(r["g"])(o,null,{default:Object(r["Z"])((function(){return[Object(r["m"])(s)]})),_:1})}var h={class:"layaut"};function y(e,t,c,n,a,i){var s=Object(r["O"])("Header"),o=Object(r["O"])("Error"),l=Object(r["O"])("Container");return Object(r["E"])(),Object(r["i"])("div",h,[Object(r["m"])(s),Object(r["m"])(l,null,{default:Object(r["Z"])((function(){return[e.getUserError||e.getBeerError||e.getGeoError?(Object(r["E"])(),Object(r["g"])(o,{key:0})):Object(r["N"])(e.$slots,"default",{key:1},void 0,!0)]})),_:3})])}var x=c("5530"),U={class:"header"},L={class:"header__nav"},R={class:"button-list"},k=Object(r["l"])("Profile"),D=Object(r["l"])("Beeromizer"),w={class:"burger__item"},B=Object(r["l"])("Profile"),E={class:"burger__item mt-3"},Z=Object(r["l"])("Beeromizer");function I(e,t,c,n,a,i){var s=Object(r["O"])("va-button"),o=Object(r["O"])("va-chip"),l=Object(r["O"])("va-button-dropdown"),u=Object(r["O"])("Container");return Object(r["E"])(),Object(r["i"])("header",U,[Object(r["m"])(u,null,{default:Object(r["Z"])((function(){return[Object(r["j"])("nav",L,[Object(r["j"])("ul",R,[Object(r["m"])(s,{to:"/profile",color:"secondary",rounded:!1,size:"large"},{default:Object(r["Z"])((function(){return[k]})),_:1}),Object(r["m"])(s,{to:"/",color:"secondary",rounded:!1,size:"large"},{default:Object(r["Z"])((function(){return[D]})),_:1})]),Object(r["m"])(l,{class:"burger",rounded:!1,icon:"menu",size:"large"},{default:Object(r["Z"])((function(){return[Object(r["j"])("ul",null,[Object(r["j"])("li",w,[Object(r["m"])(o,{class:"burger__link",to:"/profile",square:"",size:"large",color:"secondary"},{default:Object(r["Z"])((function(){return[B]})),_:1})]),Object(r["j"])("li",E,[Object(r["m"])(o,{class:"burger__link",to:"/",square:"",size:"large",color:"secondary",tag:"button"},{default:Object(r["Z"])((function(){return[Z]})),_:1})])])]})),_:1})])]})),_:1})])}var C={class:"container"};function S(e,t,c,n,a,i){return Object(r["E"])(),Object(r["i"])("div",C,[Object(r["N"])(e.$slots,"default",{},void 0,!0)])}var P={name:"Container"};c("c6ce");const G=s()(P,[["render",S],["__scopeId","data-v-a1acb98a"]]);var F=G,q={name:"Header",components:{Container:F}};c("e9ca");const z=s()(q,[["render",I],["__scopeId","data-v-1b3cd07e"]]);var T=z,N=function(e){return Object(r["I"])("data-v-3d7e68f6"),e=e(),Object(r["F"])(),e},A={class:"error"},M={class:"display-5"},V=N((function(){return Object(r["j"])("h6",{class:"display-5"},"try reloading the page",-1)}));function J(e,t,c,n,a,i){return Object(r["E"])(),Object(r["i"])("div",A,[Object(r["j"])("h5",M,' Error:"'+Object(r["R"])(e.getUserError||e.getBeerError||e.getGeoError)+'." ',1),V])}var H={name:"Error",computed:Object(x["a"])({},Object(d["c"])(["getUserError","getBeerError","getGeoError"]))};c("3c80");const $=s()(H,[["render",J],["__scopeId","data-v-3d7e68f6"]]);var Q=$,Y={name:"Layaut",components:{Header:T,Container:F,Error:Q},computed:Object(x["a"])({},Object(d["c"])(["getUserError","getBeerError","getGeoError"]))};c("e238");const W=s()(Y,[["render",y],["__scopeId","data-v-0875f3ee"]]);var X=W,K=function(e){return Object(r["I"])("data-v-5e2315da"),e=e(),Object(r["F"])(),e},ee={key:1},te={class:"row"},ce={class:"flex xs12 mb-3"},re={class:"item"},ne={class:"display-6"},ae={class:"flex xs12 md6 mb-3"},ie={class:"item"},se=K((function(){return Object(r["j"])("div",{class:"title"},"Brand",-1)})),oe={class:"flex xs12 md6 mb-3"},le={class:"item"},ue=K((function(){return Object(r["j"])("div",{class:"title"},"Style",-1)})),de={class:"flex xs12 md6 mb-3"},je={class:"item"},be=K((function(){return Object(r["j"])("div",{class:"title"},"Hop",-1)})),Oe={class:"flex xs12 md6 mb-3"},fe={class:"item"},ve=K((function(){return Object(r["j"])("div",{class:"title"},"Yeast",-1)})),me={class:"flex xs12 md6 mb-3"},ge={class:"item"},pe=K((function(){return Object(r["j"])("div",{class:"title"},"Malts",-1)})),_e={class:"flex xs12 md6 mb-3"},he={class:"item"},ye=K((function(){return Object(r["j"])("div",{class:"title"},"Ibu",-1)})),xe={class:"flex xs12 md6 mb-3"},Ue={class:"item"},Le=K((function(){return Object(r["j"])("div",{class:"title"},"Alcohol",-1)})),Re={class:"flex xs12 md6 mb-3"},ke={class:"item"},De=K((function(){return Object(r["j"])("div",{class:"title"},"blg",-1)})),we=Object(r["l"])("vote"),Be=Object(r["l"])("new beer!");function Ee(e,t,c,n,a,i){var s=Object(r["O"])("va-progress-circle"),o=Object(r["O"])("va-rating"),l=Object(r["O"])("va-button"),u=Object(r["O"])("va-card-actions"),d=Object(r["O"])("va-card");return e.getBeerIsLoading?(Object(r["E"])(),Object(r["g"])(s,{key:0,class:"circle",indeterminate:""})):(Object(r["E"])(),Object(r["i"])("main",ee,[Object(r["m"])(d,{class:"py-3 px-3",square:"",color:"primary",gradient:"",tag:"section"},{default:Object(r["Z"])((function(){var c,n,s,d,j,b,O,f,v;return[Object(r["j"])("div",te,[Object(r["j"])("div",ce,[Object(r["j"])("div",re,[Object(r["j"])("h6",ne,Object(r["R"])(null===(c=e.getBeerData)||void 0===c?void 0:c.name),1)])]),Object(r["j"])("div",ae,[Object(r["j"])("div",ie,[se,Object(r["j"])("p",null,Object(r["R"])(null===(n=e.getBeerData)||void 0===n?void 0:n.brand),1)])]),Object(r["j"])("div",oe,[Object(r["j"])("div",le,[ue,Object(r["j"])("p",null,Object(r["R"])(null===(s=e.getBeerData)||void 0===s?void 0:s.style),1)])]),Object(r["j"])("div",de,[Object(r["j"])("div",je,[be,Object(r["j"])("p",null,Object(r["R"])(null===(d=e.getBeerData)||void 0===d?void 0:d.hop),1)])]),Object(r["j"])("div",Oe,[Object(r["j"])("div",fe,[ve,Object(r["j"])("p",null,Object(r["R"])(null===(j=e.getBeerData)||void 0===j?void 0:j.yeast),1)])]),Object(r["j"])("div",me,[Object(r["j"])("div",ge,[pe,Object(r["j"])("p",null,Object(r["R"])(null===(b=e.getBeerData)||void 0===b?void 0:b.malts),1)])]),Object(r["j"])("div",_e,[Object(r["j"])("div",he,[ye,Object(r["j"])("p",null,Object(r["R"])(null===(O=e.getBeerData)||void 0===O?void 0:O.ibu),1)])]),Object(r["j"])("div",xe,[Object(r["j"])("div",Ue,[Le,Object(r["j"])("p",null,Object(r["R"])(null===(f=e.getBeerData)||void 0===f?void 0:f.alcohol),1)])]),Object(r["j"])("div",Re,[Object(r["j"])("div",ke,[De,Object(r["j"])("p",null,Object(r["R"])(null===(v=e.getBeerData)||void 0===v?void 0:v.blg),1)])])]),Object(r["m"])(u,{align:"center",vertical:""},{default:Object(r["Z"])((function(){return[Object(r["m"])(o,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.value=e}),hover:"",size:"48px",color:"secondary",clearable:""},null,8,["modelValue"]),Object(r["m"])(l,{class:"mb-4",color:"secondary",gradient:"",onClick:i.starred},{default:Object(r["Z"])((function(){return[we]})),_:1},8,["onClick"]),Object(r["m"])(l,{color:"secondary",gradient:"",onClick:i.newBeer},{default:Object(r["Z"])((function(){return[Be]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]))}var Ze=c("ade3"),Ie=(c("e9c4"),{name:"BeerCard",data:function(){return{value:0,stars:{}}},methods:Object(x["a"])(Object(x["a"])({},Object(d["b"])(["fetchBeer"])),{},{newBeer:function(){this.fetchBeer(),this.value=0},starred:function(){this.stars=Object(x["a"])(Object(x["a"])({},this.stars),{},Object(Ze["a"])({},this.getUserData.id,Object(x["a"])(Object(x["a"])({},this.stars[this.getUserData.id]),{},Object(Ze["a"])({},this.getBeerData.id,this.value)))),localStorage.setItem("stars",JSON.stringify(this.stars,null,2)),this.$vaToast.init({message:"rating saved",color:"secondary",position:"bottom-right"})}}),computed:Object(x["a"])(Object(x["a"])({},Object(d["c"])(["getBeerData","getBeerIsLoading","getUserData"])),{},{userId:function(){var e;return null===(e=this.getUserData)||void 0===e?void 0:e.id},beerId:function(){var e;return null===(e=this.getBeerData)||void 0===e?void 0:e.id}}),watch:{stars:function(e){var t;this.value=null===e||void 0===e||null===(t=e[this.userId])||void 0===t?void 0:t[this.beerId]}},mounted:function(){this.fetchBeer(),localStorage.getItem("stars")&&(this.stars=JSON.parse(localStorage.getItem("stars")))}});c("6e27");const Ce=s()(Ie,[["render",Ee],["__scopeId","data-v-5e2315da"]]);var Se=Ce,Pe={key:1,class:"login"},Ge=Object(r["l"])("Login");function Fe(e,t,c,n,a,i){var s=Object(r["O"])("va-progress-circle"),o=Object(r["O"])("va-button"),l=Object(r["O"])("va-card-actions"),u=Object(r["O"])("va-card");return e.getUserIsLoading?(Object(r["E"])(),Object(r["g"])(s,{key:0,class:"circle",indeterminate:""})):(Object(r["E"])(),Object(r["i"])("main",Pe,[Object(r["m"])(u,{class:"login-card py-3 px-3",color:"primary",gradient:"",tag:"section"},{default:Object(r["Z"])((function(){return[Object(r["m"])(l,{align:"stretch",vertical:""},{default:Object(r["Z"])((function(){return[Object(r["m"])(o,{color:"secondary",gradient:"",onClick:e.fetchUser},{default:Object(r["Z"])((function(){return[Ge]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]))}var qe={name:"LoginForm",methods:Object(x["a"])({},Object(d["b"])(["fetchUser"])),computed:Object(x["a"])({},Object(d["c"])(["getUserIsLoading"]))};c("442e");const ze=s()(qe,[["render",Fe],["__scopeId","data-v-479fa0ad"]]);var Te=ze,Ne=(c("a15b"),c("ac1f"),c("1276"),function(e){return Object(r["I"])("data-v-3e97a438"),e=e(),Object(r["F"])(),e}),Ae={key:1},Me={class:"layout gutter--md"},Ve={class:"row justify--end"},Je={class:"flex xs12 md6 lg4"},He={class:"display-6"},$e={class:"flex xs12 md6 lg4"},Qe={class:"data-fields__field mb-4"},Ye=Ne((function(){return Object(r["j"])("div",{class:"title"},"First name:",-1)})),We={class:"data-fields__field mb-4"},Xe=Ne((function(){return Object(r["j"])("div",{class:"title"},"Last name:",-1)})),Ke={class:"data-fields__field mb-4"},et=Ne((function(){return Object(r["j"])("div",{class:"title"},"Email:",-1)})),tt={class:"data-fields__field mb-4"},ct=Ne((function(){return Object(r["j"])("div",{class:"title"},"Gender:",-1)})),rt={class:"data-fields__field"},nt=Ne((function(){return Object(r["j"])("div",{class:"title"},"Birthday:",-1)})),at={class:"flex xs12 md6 lg4"},it=Object(r["l"])("Contacts"),st={class:"data-fields__field mb-4"},ot=Ne((function(){return Object(r["j"])("div",{class:"title"},"Phone:",-1)})),lt={class:"data-fields__field mb-4"},ut=Ne((function(){return Object(r["j"])("div",{class:"title"},"Social insurance number:",-1)})),dt={class:"data-fields__field mb-4"},jt=Ne((function(){return Object(r["j"])("div",{class:"title"},"employment:",-1)})),bt={class:"data-fields__field"},Ot=Ne((function(){return Object(r["j"])("div",{class:"title"},"key skill:",-1)})),ft={class:"flex xs12 md6 lg4"},vt=Object(r["l"])("Address"),mt={class:"data-fields__field mb-4"},gt=Ne((function(){return Object(r["j"])("div",{class:"title"},"Country:",-1)})),pt={class:"data-fields__field mb-4"},_t=Ne((function(){return Object(r["j"])("div",{class:"title"},"State:",-1)})),ht={class:"data-fields__field mb-4"},yt=Ne((function(){return Object(r["j"])("div",{class:"title"},"City:",-1)})),xt={class:"data-fields__field mb-4"},Ut=Ne((function(){return Object(r["j"])("div",{class:"title"},"Street:",-1)})),Lt={class:"data-fields__field mb-4"},Rt=Ne((function(){return Object(r["j"])("div",{class:"title"},"Street address:",-1)})),kt={class:"data-fields__field mb-4"},Dt=Ne((function(){return Object(r["j"])("div",{class:"title"},"Zip code:",-1)})),wt={class:"data-fields__field"},Bt=Ne((function(){return Object(r["j"])("div",{class:"title"},"Geolocation:",-1)})),Et={class:"flex xs12 md6 lg4"},Zt=Object(r["l"])("Payment details"),It={class:"data-fields__field mb-4"},Ct=Ne((function(){return Object(r["j"])("div",{class:"title"},"Plan:",-1)})),St={class:"data-fields__field mb-4"},Pt=Ne((function(){return Object(r["j"])("div",{class:"title"},"Payment method:",-1)})),Gt={class:"data-fields__field mb-4"},Ft=Ne((function(){return Object(r["j"])("div",{class:"title"},"Term:",-1)})),qt={class:"data-fields__field mb-4"},zt=Ne((function(){return Object(r["j"])("div",{class:"title"},"Credit Card:",-1)})),Tt={class:"data-fields__field"},Nt=Ne((function(){return Object(r["j"])("div",{class:"title"},"Status:",-1)})),At=Object(r["l"])("Logout"),Mt=Object(r["l"])("Clear rating");function Vt(e,t,c,n,a,i){var s=Object(r["O"])("va-progress-circle"),o=Object(r["O"])("va-image"),l=Object(r["O"])("va-card-content"),u=Object(r["O"])("va-card"),d=Object(r["O"])("va-card-title"),j=Object(r["O"])("va-button"),b=Object(r["O"])("va-card-actions");return e.getUserIsLoading?(Object(r["E"])(),Object(r["g"])(s,{key:0,class:"circle",indeterminate:""})):(Object(r["E"])(),Object(r["i"])("main",Ae,[Object(r["j"])("div",Me,[Object(r["j"])("div",Ve,[Object(r["j"])("div",Je,[Object(r["m"])(u,{class:"avatar item py-3 px-3",color:"primary"},{default:Object(r["Z"])((function(){var t,c;return[Object(r["m"])(o,{contain:"",class:"avatar__img",src:null!==(t=null===(c=e.getUserData)||void 0===c?void 0:c.avatar)&&void 0!==t?t:""},null,8,["src"]),Object(r["m"])(l,null,{default:Object(r["Z"])((function(){var t;return[Object(r["j"])("h6",He,Object(r["R"])(null===(t=e.getUserData)||void 0===t?void 0:t.username),1)]})),_:1})]})),_:1})]),Object(r["j"])("div",$e,[Object(r["m"])(u,{class:"item py-1 px-1",color:"primary"},{default:Object(r["Z"])((function(){return[Object(r["m"])(l,{class:"data-fields"},{default:Object(r["Z"])((function(){var t,c,n,a,i;return[Object(r["j"])("div",Qe,[Ye,Object(r["j"])("p",null,Object(r["R"])(null===(t=e.getUserData)||void 0===t?void 0:t.first_name),1)]),Object(r["j"])("div",We,[Xe,Object(r["j"])("p",null,Object(r["R"])(null===(c=e.getUserData)||void 0===c?void 0:c.last_name),1)]),Object(r["j"])("div",Ke,[et,Object(r["j"])("p",null,Object(r["R"])(null===(n=e.getUserData)||void 0===n?void 0:n.email),1)]),Object(r["j"])("div",tt,[ct,Object(r["j"])("p",null,Object(r["R"])(null===(a=e.getUserData)||void 0===a?void 0:a.gender),1)]),Object(r["j"])("div",rt,[nt,Object(r["j"])("p",null,Object(r["R"])(null===(i=e.getUserData)||void 0===i?void 0:i.date_of_birth.split("-").reverse().join("-")),1)])]})),_:1})]})),_:1})]),Object(r["j"])("div",at,[Object(r["m"])(u,{class:"item py-1 px-1",color:"primary"},{default:Object(r["Z"])((function(){return[Object(r["m"])(d,{class:"title"},{default:Object(r["Z"])((function(){return[it]})),_:1}),Object(r["m"])(l,{class:"data-fields"},{default:Object(r["Z"])((function(){var t,c,n,a;return[Object(r["j"])("div",st,[ot,Object(r["j"])("p",null,Object(r["R"])(null===(t=e.getUserData)||void 0===t?void 0:t.phone_number),1)]),Object(r["j"])("div",lt,[ut,Object(r["j"])("p",null,Object(r["R"])(null===(c=e.getUserData)||void 0===c?void 0:c.social_insurance_number),1)]),Object(r["j"])("div",dt,[jt,Object(r["j"])("p",null,Object(r["R"])(null===(n=e.getUserData)||void 0===n?void 0:n.employment.title),1)]),Object(r["j"])("div",bt,[Ot,Object(r["j"])("p",null,Object(r["R"])(null===(a=e.getUserData)||void 0===a?void 0:a.employment.key_skill),1)])]})),_:1})]})),_:1})]),Object(r["j"])("div",ft,[Object(r["m"])(u,{class:"item py-1 px-1",color:"primary"},{default:Object(r["Z"])((function(){return[Object(r["m"])(d,{class:"title"},{default:Object(r["Z"])((function(){return[vt]})),_:1}),Object(r["m"])(l,{class:"data-fields"},{default:Object(r["Z"])((function(){var t,c,n,a,i,s;return[Object(r["j"])("div",mt,[gt,Object(r["j"])("p",null,Object(r["R"])(null===(t=e.getUserData)||void 0===t?void 0:t.address.country),1)]),Object(r["j"])("div",pt,[_t,Object(r["j"])("p",null,Object(r["R"])(null===(c=e.getUserData)||void 0===c?void 0:c.address.state),1)]),Object(r["j"])("div",ht,[yt,Object(r["j"])("p",null,Object(r["R"])(null===(n=e.getUserData)||void 0===n?void 0:n.address.city),1)]),Object(r["j"])("div",xt,[Ut,Object(r["j"])("p",null,Object(r["R"])(null===(a=e.getUserData)||void 0===a?void 0:a.address.street_name),1)]),Object(r["j"])("div",Lt,[Rt,Object(r["j"])("p",null,Object(r["R"])(null===(i=e.getUserData)||void 0===i?void 0:i.address.street_address),1)]),Object(r["j"])("div",kt,[Dt,Object(r["j"])("p",null,Object(r["R"])(null===(s=e.getUserData)||void 0===s?void 0:s.address.zip_code),1)]),Object(r["j"])("div",wt,[Bt,Object(r["j"])("p",null,Object(r["R"])(e.getGeoIsLoading?"Loading...":e.getPlace),1)])]})),_:1})]})),_:1})]),Object(r["j"])("div",Et,[Object(r["m"])(u,{class:"item py-1 px-1",color:"primary"},{default:Object(r["Z"])((function(){return[Object(r["m"])(d,{class:"title"},{default:Object(r["Z"])((function(){return[Zt]})),_:1}),Object(r["m"])(l,{class:"data-fields"},{default:Object(r["Z"])((function(){var t,c,n,a,i;return[Object(r["j"])("div",It,[Ct,Object(r["j"])("p",null,Object(r["R"])(null===(t=e.getUserData)||void 0===t?void 0:t.subscription.plan),1)]),Object(r["j"])("div",St,[Pt,Object(r["j"])("p",null,Object(r["R"])(null===(c=e.getUserData)||void 0===c?void 0:c.subscription.payment_method),1)]),Object(r["j"])("div",Gt,[Ft,Object(r["j"])("p",null,Object(r["R"])(null===(n=e.getUserData)||void 0===n?void 0:n.subscription.term),1)]),Object(r["j"])("div",qt,[zt,Object(r["j"])("p",null,Object(r["R"])(null===(a=e.getUserData)||void 0===a?void 0:a.credit_card.cc_number),1)]),Object(r["j"])("div",Tt,[Nt,Object(r["j"])("p",null,Object(r["R"])(null===(i=e.getUserData)||void 0===i?void 0:i.subscription.status),1)])]})),_:1}),Object(r["m"])(b,{align:"stretch",vertical:""},{default:Object(r["Z"])((function(){return[Object(r["m"])(j,{color:"secondary",onClick:e.logout},{default:Object(r["Z"])((function(){return[At]})),_:1},8,["onClick"])]})),_:1}),Object(r["m"])(b,{align:"stretch",vertical:""},{default:Object(r["Z"])((function(){return[Object(r["m"])(j,{color:"secondary",onClick:i.clearLocalStorage},{default:Object(r["Z"])((function(){return[Mt]})),_:1},8,["onClick"])]})),_:1})]})),_:1})])])])]))}var Jt={name:"Profile",methods:Object(x["a"])(Object(x["a"])({},Object(d["b"])(["logout"])),{},{clearLocalStorage:function(){localStorage.clear(),this.$vaToast.init({message:"rating cleared",color:"secondary",position:"bottom-right"})}}),computed:Object(x["a"])({},Object(d["c"])(["getUserIsLoading","getUserData","getPlace","getGeoIsLoading"]))};c("4e0a");const Ht=s()(Jt,[["render",Vt],["__scopeId","data-v-3e97a438"]]);var $t=Ht,Qt={name:"Beer",components:{Layaut:X,BeerCard:Se}};const Yt=s()(Qt,[["render",_]]);var Wt=Yt;function Xt(e,t,c,n,a,i){var s=Object(r["O"])("LoginForm"),o=Object(r["O"])("Layaut");return Object(r["E"])(),Object(r["g"])(o,null,{default:Object(r["Z"])((function(){return[Object(r["m"])(s)]})),_:1})}var Kt={name:"Login",components:{Layaut:X,LoginForm:Te}};const ec=s()(Kt,[["render",Xt]]);var tc=ec;function cc(e,t,c,n,a,i){var s=Object(r["O"])("ProfileCard"),o=Object(r["O"])("Layaut");return Object(r["E"])(),Object(r["g"])(o,null,{default:Object(r["Z"])((function(){return[Object(r["m"])(s)]})),_:1})}var rc={name:"Profile",components:{Layaut:X,ProfileCard:$t}};const nc=s()(rc,[["render",cc]]);var ac=nc,ic=[{path:"/",component:Wt,name:"Beer"},{path:"/login",component:tc,name:"Login"},{path:"/profile",component:ac,name:"Profile"}],sc=Object(u["a"])({history:Object(u["b"])("/bandaumnikov-test-case/"),routes:ic});sc.beforeEach((function(e,t,c){"Login"==e.name||p.getters.getUserData?c():c({name:"Login"})}));var oc=sc,lc=c("46f3");c("4821");Object(r["f"])(l).use(p).use(oc).use(lc["a"],{colors:{primary:"#2a79a3",secondary:"#FF7800"}}).mount("#app")},"58f2":function(e,t,c){},"6e27":function(e,t,c){"use strict";c("94b4")},"72f2":function(e,t,c){},7313:function(e,t,c){},"94b4":function(e,t,c){},"97ec":function(e,t,c){},c6ce:function(e,t,c){"use strict";c("72f2")},e238:function(e,t,c){"use strict";c("7313")},e9ca:function(e,t,c){"use strict";c("97ec")}});
//# sourceMappingURL=app.43b4dd93.js.map