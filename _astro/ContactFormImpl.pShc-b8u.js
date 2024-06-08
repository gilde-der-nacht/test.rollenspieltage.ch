import{n as B,o as W,g as d,a as V,u as G,i as b,c as e,b as S,s as U,t as D,e as O,d as k,r as z,f as x,S as o,F as L,p as I,M as N}from"./web.DDKVi3E9.js";import{b as j,I as P,B as w,a as J}from"./Box.iyaGn6e6.js";var K=D("<form method=post><!$><!/><!$><!/>");function Q(a){const n=B({language:"de",submitLabel:a.language==="en"?"Submit":"Absenden"},a);let h;W(()=>{h.setAttribute("novalidate",""),[...h.querySelectorAll('input[name^="redirect"][type="hidden"]')].forEach(i=>i.remove())});async function _(s){const{target:i}=s;if(i!==null&&i instanceof HTMLFormElement){s.preventDefault();const u=new FormData(i);if(!n.isValid(u))return;try{const l=await fetch(n.actionUrl,{method:"post",body:u});l.ok?n.onSuccess():n.onError(await l.text())}catch(l){n.onError(l)}}}return(()=>{var s=d(K),i=s.firstChild,[u,l]=V(i.nextSibling),p=u.nextSibling,[f,y]=V(p.nextSibling),$=h;return typeof $=="function"?G($,s):h=s,s.addEventListener("submit",_),b(s,()=>n.children,u,l),b(s,e(j,{type:"submit",get label(){return n.submitLabel}}),f,y),S(()=>U(s,"action",n.actionUrl.href)),s})()}var X=D("<label><!$><!/><textarea>");function Y(a){const n=B({required:!0},a);return(()=>{var h=d(X),_=h.firstChild,[s,i]=V(_.nextSibling),u=s.nextSibling;return b(h,()=>n.label,s,i),u.$$input=l=>n.onValueUpdate(l.target.value),S(l=>{var p=n.name,f=n.label,y=n.required;return p!==l.e&&U(u,"name",l.e=p),f!==l.t&&U(u,"placeholder",l.t=f),y!==l.a&&k(u,"required",l.a=y),l},{e:void 0,t:void 0,a:void 0}),S(()=>k(u,"value",n.value)),z(),h})()}O(["input"]);var Z=D("<input type=hidden>");function E(a){return(()=>{var n=d(Z);return S(()=>U(n,"name",a.name)),S(()=>k(n,"value",a.value)),n})()}var q=D("<br>"),M=D("<p>");function A(){return{name:"",email:"",captcha:"",message:""}}function T(){return{name:[],email:[],captcha:[],message:[]}}const ee=new URL("https://elysium.gildedernacht.ch/forms");function ne(a){const n="Name",h=a.language!=="en"?"E-Mail":"Email",_=a.language!=="en"?"Bitte leer lassen":"leave this field empty",s=a.language!=="en"?"Nachricht":"Message",[i,u]=x(A());let l;const[p,f]=x(!1),[y,$]=x(!1);function C(){$(!1),u(A()),f(!0)}function H(t){f(!1),$(!0),console.error(t)}const[g,v]=x(T());function F(t){return r=>{$(!1),v(T()),u(m=>({...m,[t]:r}))}}function R(t){v(T());const r=a.language==="en";if(i().name.trim().length===0){const m=r?"This is a mandatory field.":"Dies ist ein Pflichtfeld.";v(c=>({...c,name:[...c.name,m]}))}if(i().email.trim().length===0){const m=r?"This is a mandatory field.":"Dies ist ein Pflichtfeld.";v(c=>({...c,email:[...c.email,m]}))}if(l.validity.typeMismatch){const m=r?"The input does not seem to be a valid email address.":"Die Eingabe scheint keine gültige E-Mail-Adresse zu sein.";v(c=>({...c,email:[...c.email,m]}))}if(i().captcha.trim().length>0){const m=r?"This is field must be empty.":"Dies Feld muss leer bleiben.";v(c=>({...c,captcha:[...c.captcha,m]}))}if(i().message.trim().length===0){const m=r?"This is a mandatory field.":"Dies ist ein Pflichtfeld.";v(c=>({...c,message:[...c.message,m]}))}return g().name.length===0&&g().email.length===0&&g().captcha.length===0&&g().message.length===0}return[e(Q,{actionUrl:ee,get language(){return a.language??"de"},isValid:R,onSuccess:C,onError:H,get children(){return[e(P,{label:n,name:"private-name",get value(){return i().name},get onValueUpdate(){return F("name")}}),e(o,{get when(){return g().name.length>0},get children(){return e(w,{type:"danger",get children(){return e(L,{get each(){return g().name},children:t=>(()=>{var r=d(M);return b(r,t),r})()})}})}}),e(J,{label:h,name:"private-email",type:"email",get value(){return i().email},get onValueUpdate(){return F("email")},ref(t){var r=l;typeof r=="function"?r(t):l=t}}),e(o,{get when(){return g().email.length>0},get children(){return e(w,{type:"danger",get children(){return e(L,{get each(){return g().email},children:t=>(()=>{var r=d(M);return b(r,t),r})()})}})}}),e(P,{label:_,name:"private-captcha",type:"email",required:!1,isHoneypot:!0,get value(){return i().captcha},get onValueUpdate(){return F("captcha")}}),e(o,{get when(){return g().captcha.length>0},get children(){return e(w,{type:"danger",get children(){return e(L,{get each(){return g().captcha},children:t=>(()=>{var r=d(M);return b(r,t),r})()})}})}}),e(Y,{label:s,name:"private-message",get value(){return i().message},get onValueUpdate(){return F("message")}}),e(o,{get when(){return g().message.length>0},get children(){return e(w,{type:"danger",get children(){return e(L,{get each(){return g().message},children:t=>(()=>{var r=d(M);return b(r,t),r})()})}})}}),e(o,{get when(){return a.language},children:t=>e(E,{name:"language",get value(){return t()}})}),e(o,{get when(){return a.category},children:t=>e(E,{name:"category",get value(){return t()}})}),e(o,{get when(){return a.referer},children:t=>e(E,{name:"referer",get value(){return t().href}})}),e(o,{get when(){return a.redirectOnSuccess},children:t=>e(E,{name:"redirect-on-success",get value(){return t().href}})}),e(o,{get when(){return a.redirectOnFailure},children:t=>e(E,{name:"redirect-on-failure",get value(){return t().href}})})]}}),e(o,{get when(){return y()},get children(){return[d(q),e(w,{type:"danger",get children(){return e(I,{fallback:"Leider konnten wir die Nachricht nicht absenden. Bitte versuche es erneut.",get children(){return e(N,{get when(){return a.language==="en"},children:"There was a problem sending your message. Please try again."})}})}})]}}),e(o,{get when(){return p()},get children(){return[d(q),e(w,{type:"success",get children(){return e(I,{fallback:"Nachricht wurde erfolgreich gesendet.",get children(){return e(N,{get when(){return a.language==="en"},children:"Message successfully sent."})}})}})]}})]}export{ne as ContactFormImpl};