var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(t,n,s)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,i=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&r(e,n,t[n]);if(s)for(var n of s(t))o.call(t,n)&&r(e,n,t[n]);return e};import{_ as c,a as u,b as l,c as d,d as p,p as m,e as v,o as f,f as h,g as b,h as y,u as g,r as x,i as _,t as O,j as k,k as C,l as A,w as P,m as L,n as V,q as E,s as w,v as T,x as j,y as I,z as N,F as M,A as S,B as H,C as R,D}from"./vendor.2e32eb67.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const F={};var U=p({name:"Home"});m("data-v-ef532574");const q={class:"home-container page-container"},B=[b("img",{class:"vue-element-plus-logo",alt:"Vue logo",src:"./assets/logo.5041849f.png"},null,-1),b("div",{class:"page-title"},"Vite2.x + Vue3.x + TypeScript + Element Plus",-1)];v(),U.render=function(e,t,n,s,a,o){return f(),h("div",q,B)},U.__scopeId="data-v-ef532574";const $=y({state:{text:"This is Vuex Root.state.text"},getters:{},mutations:{},actions:{},modules:{numFactoryModule:{namespaced:!0,state:{name:"numFactory-module",count:1},mutations:{DOUBLE_COUNT(e){e.count*=2}},actions:{}}}}),z=Symbol("vue-store");var G=p({name:"Vuex",setup(){const e=g(z),s=x({text:_((()=>e.state.text)),count:_((()=>e.state.numFactoryModule.count))});return a=i({},O(s)),t(a,n({double:()=>{e.commit("numFactoryModule/DOUBLE_COUNT")}}));var a}});const K={class:"vuex-container page-container"},W=b("div",{class:"page-title"},"Vuex Test Page",-1),X=L("double");G.render=function(e,t,n,s,a,o){const r=k("el-button");return f(),h("div",K,[W,b("p",null,"store Root is: "+C(e.text),1),b("p",null,"store doubleCount is: "+C(e.count),1),A(r,{type:"primary",onClick:e.double},{default:P((()=>[X])),_:1},8,["onClick"])])};var J=p({name:"Vuex",setup(){const e=V(0);return{count:e,increment:()=>{e.value+=1}}}});m("data-v-d105b414");const Q={class:"test-container page-container"},Y=b("div",{class:"page-title"},"Unit Test Page",-1);v(),J.render=function(e,t,n,s,a,o){return f(),h("div",Q,[Y,b("p",null,"count is: "+C(e.count),1),b("button",{onClick:t[0]||(t[0]=(...t)=>e.increment&&e.increment(...t))},"increment")])},J.__scopeId="data-v-d105b414";const Z=[{path:"/",name:"Home",component:U},{path:"/vuex",name:"Vuex",component:G},{path:"/axios",name:"Axios",component:()=>{return e=()=>import("./Axios.aba1d8b9.js"),(t=["assets/Axios.aba1d8b9.js","assets/Axios.499c7d1d.css","assets/vendor.2e32eb67.js"])&&0!==t.length?Promise.all(t.map((e=>{if((e=`./${e}`)in F)return;F[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":"modulepreload",t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e())):e();var e,t}},{path:"/test",name:"Test",component:J}],ee=E({history:w(),routes:Z});m("data-v-48d977b6");const te={class:"header"},ne=[b("i",{class:"icon el-icon-s-promotion"},null,-1),L(" GitHub ")];v();var se=p({setup(e){const t=T(),n=()=>{window.open("https://github.com/XPoet/vite-vue3-starter")};return(e,s)=>(f(),h("div",te,[b("div",{class:"title",onClick:s[0]||(s[0]=e=>j(t).push("/"))}," Vite2.x + Vue3.x + TypeScript Starter "),b("div",{class:"go-github",onClick:n},ne)]))}});se.__scopeId="data-v-48d977b6";var ae=p({name:"Nav",setup(){const e=T(),t=x({navList:[{name:"Home",isActive:!1,path:"/"},{name:"Vuex",isActive:!1,path:"/vuex"},{name:"Axios",isActive:!1,path:"/axios"},{name:"Test",isActive:!1,path:"/test"}],navClick(t){e.push(t.path)}}),n=e=>{t.navList.forEach((t=>{const n=t;return n.isActive=n.path===e,n}))};return I((()=>e.currentRoute.value),(e=>{n(e.path)})),N((()=>{e.isReady().then((()=>{n(e.currentRoute.value.path)}))})),i({},O(t))}});m("data-v-3ee757fd");const oe={class:"nav"},re={class:"nav-list"},ie=["onClick"];v(),ae.render=function(e,t,n,s,a,o){return f(),h("aside",oe,[b("ul",re,[(f(!0),h(M,null,S(e.navList,((t,n)=>(f(),h("li",{class:H(["nav-item flex-center",{active:t.isActive}]),key:n,onClick:n=>e.navClick(t)},C(t.name),11,ie)))),128))])])},ae.__scopeId="data-v-3ee757fd";var ce=p({name:"Main",components:{Header:se,Nav:ae}});m("data-v-61814ec4");const ue={class:"main-container"},le={class:"top"},de={class:"bottom"},pe={class:"left"},me={class:"right"},ve={class:"content"};v(),ce.render=function(e,t,n,s,a,o){const r=k("Header"),i=k("Nav"),c=k("router-view");return f(),h("main",ue,[b("div",le,[A(r)]),b("div",de,[b("div",pe,[A(i)]),b("div",me,[b("div",ve,[A(c)])])])])},ce.__scopeId="data-v-61814ec4";var fe=p({name:"App",components:{Main:ce}});fe.render=function(e,t,n,s,a,o){const r=k("Main");return f(),R(r)};const he=D(fe);var be;(be=he,be.use(c).use(u).use(l).use(d),be).use(ee).use($,z).mount("#app");
