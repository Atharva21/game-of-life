import{j as R,r as a,f as N,R as H,a as L}from"./vendor.761f934b.js";const O=function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))h(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&h(u)}).observe(document,{childList:!0,subtree:!0});function l(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function h(r){if(r.ep)return;r.ep=!0;const s=l(r);fetch(r.href,s)}};O();const c=R.exports.jsx,k=R.exports.jsxs,m=20,p=35,A=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]],D=({})=>{const[i,f]=a.exports.useState(!1),[l,h]=a.exports.useState(!1),[r,s]=a.exports.useState(1),[u,g]=a.exports.useState(()=>{const n=[];for(let o=0;o<m;o++){const e=[];for(let t=0;t<p;t++)e.push(0);n.push(e)}return n}),x=a.exports.useRef(i);x.current=i;const y=a.exports.useRef(r);y.current=r;const S=a.exports.useCallback(()=>{!x.current||(g(n=>N(n,o=>{for(let e=0;e<m;e++)for(let t=0;t<p;t++){let b=0;const v=!!n[e][t];if(A.forEach(d=>{e+d[0]>=0&&e+d[0]<m&&t+d[1]>=0&&t+d[1]<p&&n[e+d[0]][t+d[1]]&&b++}),v&&(b<2||b>3)){o[e][t]=0;continue}if(!v&&b==3){o[e][t]=1;continue}}})),setTimeout(S,1e3/y.current))},[]),j=()=>{f(!i),i||(x.current=!0,S())},C=(n,o)=>{g(N(u,e=>{e[n][o]=e[n][o]?0:1}))};return k("div",{className:"container",children:[k("div",{className:"controls",children:[k("div",{className:"board-controls",children:[c("button",{className:"random-button",onClick:()=>{g(n=>N(n,o=>{for(let e=0;e<m;e++)for(let t=0;t<p;t++)o[e][t]=Math.random()>.7?1:0}))},children:"Random"}),c("button",{className:"clear-button",onClick:()=>{g(n=>N(n,o=>{for(let e=0;e<m;e++)for(let t=0;t<p;t++)o[e][t]=0}))},children:"Clear"}),k("button",{className:"speed-button",onClick:()=>{s(n=>n>=8?1:2*n)},children:["Speed ",r,"x"]})]}),c("button",{className:"start-button",onClick:j,children:i?"Stop":"Start"}),c("button",{className:"theme-button",onClick:()=>{l?document.body.classList.remove("dark"):document.body.classList.add("dark"),h(!l)},children:l?"\u{1F319}":"\u{1F31E}"})]}),c("div",{className:"grid-container",children:u.map((n,o)=>c("div",{className:"row",children:n.map((e,t)=>c("div",{onClick:()=>{C(o,t)},className:"col",style:{background:e?l?"#ec7a1d":"#2a6ed4":l?"#444":"#ddd"}},o+"-"+t))},o))})]})};function E(){return c("div",{className:"App",children:c(D,{})})}H.render(c(L.StrictMode,{children:c(E,{})}),document.getElementById("root"));
