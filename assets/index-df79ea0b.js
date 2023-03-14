(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function w(){}function M(t){return t()}function S(){return Object.create(null)}function O(t){t.forEach(M)}function T(t){return typeof t=="function"}function H(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function K(t){return Object.keys(t).length===0}function l(t,e){t.appendChild(e)}function W(t,e,n){t.insertBefore(e,n||null)}function q(t){t.parentNode&&t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function C(t){return document.createTextNode(t)}function E(){return C(" ")}function z(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function k(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function G(t){return Array.from(t.childNodes)}function J(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function I(t,e){t.value=e??""}let P;function x(t){P=t}const g=[],B=[];let y=[];const D=[],Q=Promise.resolve();let L=!1;function R(){L||(L=!0,Q.then(F))}function N(t){y.push(t)}const A=new Set;let m=0;function F(){if(m!==0)return;const t=P;do{try{for(;m<g.length;){const e=g[m];m++,x(e),U(e.$$)}}catch(e){throw g.length=0,m=0,e}for(x(null),g.length=0,m=0;B.length;)B.pop()();for(let e=0;e<y.length;e+=1){const n=y[e];A.has(n)||(A.add(n),n())}y.length=0}while(g.length);for(;D.length;)D.pop()();L=!1,A.clear(),x(t)}function U(t){if(t.fragment!==null){t.update(),O(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}function V(t){const e=[],n=[];y.forEach(o=>t.indexOf(o)===-1?e.push(o):n.push(o)),n.forEach(o=>o()),y=e}const X=new Set;function Y(t,e){t&&t.i&&(X.delete(t),t.i(e))}function Z(t,e,n,o){const{fragment:r,after_update:i}=t.$$;r&&r.m(e,n),o||N(()=>{const c=t.$$.on_mount.map(M).filter(T);t.$$.on_destroy?t.$$.on_destroy.push(...c):O(c),t.$$.on_mount=[]}),i.forEach(N)}function tt(t,e){const n=t.$$;n.fragment!==null&&(V(n.after_update),O(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function et(t,e){t.$$.dirty[0]===-1&&(g.push(t),R(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function nt(t,e,n,o,r,i,c,v=[-1]){const f=P;x(t);const s=t.$$={fragment:null,ctx:[],props:i,update:w,not_equal:r,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:S(),dirty:v,skip_bound:!1,root:e.target||f.$$.root};c&&c(s.root);let p=!1;if(s.ctx=n?n(t,e.props||{},(u,$,...h)=>{const _=h.length?h[0]:$;return s.ctx&&r(s.ctx[u],s.ctx[u]=_)&&(!s.skip_bound&&s.bound[u]&&s.bound[u](_),p&&et(t,u)),$}):[],s.update(),p=!0,O(s.before_update),s.fragment=o?o(s.ctx):!1,e.target){if(e.hydrate){const u=G(e.target);s.fragment&&s.fragment.l(u),u.forEach(q)}else s.fragment&&s.fragment.c();e.intro&&Y(t.$$.fragment),Z(t,e.target,e.anchor,e.customElement),F()}x(f)}class rt{$destroy(){tt(this,1),this.$destroy=w}$on(e,n){if(!T(n))return w;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(e){this.$$set&&!K(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function ot(t){let e,n,o,r,i,c,v,f,s,p,u,$,h,_,j;return{c(){e=d("main"),n=d("h1"),n.textContent="Direct WhatsApp",o=E(),r=d("p"),r.textContent=`Enter phone number to directly send whatsapp message. Dont forget to add
    country code.`,i=E(),c=d("input"),v=E(),f=d("p"),f.textContent="📲 Click on link to chat 🟢",s=E(),p=d("p"),u=d("a"),$=C("+"),h=C(t[0]),k(c,"type","tel"),k(c,"class","svelte-612xy2"),k(u,"href",t[1])},m(a,b){W(a,e,b),l(e,n),l(e,o),l(e,r),l(e,i),l(e,c),I(c,t[0]),l(e,v),l(e,f),l(e,s),l(e,p),l(p,u),l(u,$),l(u,h),_||(j=z(c,"input",t[2]),_=!0)},p(a,[b]){b&1&&I(c,a[0]),b&1&&J(h,a[0]),b&2&&k(u,"href",a[1])},i:w,o:w,d(a){a&&q(e),_=!1,j()}}}function it(t,e,n){let o,r="92";function i(){r=this.value,n(0,r)}return t.$$.update=()=>{t.$$.dirty&1&&n(1,o=`https://api.whatsapp.com/send?phone=${r}`)},[r,o,i]}class st extends rt{constructor(e){super(),nt(this,e,it,ot,H,{})}}new st({target:document.getElementById("app")});
