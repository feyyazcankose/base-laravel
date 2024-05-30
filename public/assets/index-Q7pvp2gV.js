import{r as o,R,$ as N,x as L,A as z,w as J,_ as w}from"./index-Bf_DdXRE.js";import{$ as k}from"./index-C3FR_Cr8.js";function G(e,t=[]){let r=[];function n(a,d){const i=o.createContext(d),f=r.length;r=[...r,d];function c(l){const{scope:p,children:b,...u}=l,v=(p==null?void 0:p[e][f])||i,C=o.useMemo(()=>u,Object.values(u));return o.createElement(v.Provider,{value:C},b)}function I(l,p){const b=(p==null?void 0:p[e][f])||i,u=o.useContext(b);if(u)return u;if(d!==void 0)return d;throw new Error(`\`${l}\` must be used within \`${a}\``)}return c.displayName=a+"Provider",[c,I]}const s=()=>{const a=r.map(d=>o.createContext(d));return function(i){const f=(i==null?void 0:i[e])||a;return o.useMemo(()=>({[`__scope${e}`]:{...i,[e]:f}}),[i,f])}};return s.scopeName=e,[n,Q(s,...t)]}function Q(...e){const t=e[0];if(e.length===1)return t;const r=()=>{const n=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(a){const d=n.reduce((i,{useScope:f,scopeName:c})=>{const l=f(a)[`__scope${c}`];return{...i,...l}},{});return o.useMemo(()=>({[`__scope${t.scopeName}`]:d}),[d])}};return r.scopeName=t.scopeName,r}function O(e){const t=o.useRef(e);return o.useEffect(()=>{t.current=e}),o.useMemo(()=>(...r)=>{var n;return(n=t.current)===null||n===void 0?void 0:n.call(t,...r)},[])}const M=globalThis!=null&&globalThis.document?o.useLayoutEffect:()=>{};function x(e,t,{checkForDefaultPrevented:r=!0}={}){return function(s){if(e==null||e(s),r===!1||!s.defaultPrevented)return t==null?void 0:t(s)}}function W({prop:e,defaultProp:t,onChange:r=()=>{}}){const[n,s]=X({defaultProp:t,onChange:r}),a=e!==void 0,d=a?e:n,i=O(r),f=o.useCallback(c=>{if(a){const l=typeof c=="function"?c(e):c;l!==e&&i(l)}else s(c)},[a,e,s,i]);return[d,f]}function X({defaultProp:e,onChange:t}){const r=o.useState(e),[n]=r,s=o.useRef(n),a=O(t);return o.useEffect(()=>{s.current!==n&&(a(n),s.current=n)},[n,s,a]),r}function Z(e){const t=e+"CollectionProvider",[r,n]=G(t),[s,a]=r(t,{collectionRef:{current:null},itemMap:new Map}),d=b=>{const{scope:u,children:v}=b,C=R.useRef(null),$=R.useRef(new Map).current;return R.createElement(s,{scope:u,itemMap:$,collectionRef:C},v)},i=e+"CollectionSlot",f=R.forwardRef((b,u)=>{const{scope:v,children:C}=b,$=a(i,v),m=N(u,$.collectionRef);return R.createElement(L,{ref:m},C)}),c=e+"CollectionItemSlot",I="data-radix-collection-item",l=R.forwardRef((b,u)=>{const{scope:v,children:C,...$}=b,m=R.useRef(null),A=N(u,m),S=a(c,v);return R.useEffect(()=>(S.itemMap.set(m,{ref:m,...$}),()=>void S.itemMap.delete(m))),R.createElement(L,{[I]:"",ref:A},C)});function p(b){const u=a(e+"CollectionConsumer",b);return R.useCallback(()=>{const C=u.collectionRef.current;if(!C)return[];const $=Array.from(C.querySelectorAll(`[${I}]`));return Array.from(u.itemMap.values()).sort((S,h)=>$.indexOf(S.ref.current)-$.indexOf(h.ref.current))},[u.collectionRef,u.itemMap])}return[{Provider:d,Slot:f,ItemSlot:l},p,n]}const H=o.createContext(void 0);function ee(e){const t=o.useContext(H);return e||t||"ltr"}const te=z.useId||(()=>{});let ne=0;function oe(e){const[t,r]=o.useState(te());return M(()=>{e||r(n=>n??String(ne++))},[e]),e||(t?`radix-${t}`:"")}function re(e,t){return o.useReducer((r,n)=>{const s=t[r][n];return s??r},e)}const ce=e=>{const{present:t,children:r}=e,n=se(t),s=typeof r=="function"?r({present:n.isPresent}):o.Children.only(r),a=N(n.ref,s.ref);return typeof r=="function"||n.isPresent?o.cloneElement(s,{ref:a}):null};ce.displayName="Presence";function se(e){const[t,r]=o.useState(),n=o.useRef({}),s=o.useRef(e),a=o.useRef("none"),d=e?"mounted":"unmounted",[i,f]=re(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return o.useEffect(()=>{const c=T(n.current);a.current=i==="mounted"?c:"none"},[i]),M(()=>{const c=n.current,I=s.current;if(I!==e){const p=a.current,b=T(c);e?f("MOUNT"):b==="none"||(c==null?void 0:c.display)==="none"?f("UNMOUNT"):f(I&&p!==b?"ANIMATION_OUT":"UNMOUNT"),s.current=e}},[e,f]),M(()=>{if(t){const c=l=>{const b=T(n.current).includes(l.animationName);l.target===t&&b&&J.flushSync(()=>f("ANIMATION_END"))},I=l=>{l.target===t&&(a.current=T(n.current))};return t.addEventListener("animationstart",I),t.addEventListener("animationcancel",c),t.addEventListener("animationend",c),()=>{t.removeEventListener("animationstart",I),t.removeEventListener("animationcancel",c),t.removeEventListener("animationend",c)}}else f("ANIMATION_END")},[t,f]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:o.useCallback(c=>{c&&(n.current=getComputedStyle(c)),r(c)},[])}}function T(e){return(e==null?void 0:e.animationName)||"none"}const F="rovingFocusGroup.onEntryFocus",ue={bubbles:!1,cancelable:!0},y="RovingFocusGroup",[P,B,ae]=Z(y),[fe,ge]=G(y,[ae]),[ie,de]=fe(y),le=o.forwardRef((e,t)=>o.createElement(P.Provider,{scope:e.__scopeRovingFocusGroup},o.createElement(P.Slot,{scope:e.__scopeRovingFocusGroup},o.createElement(be,w({},e,{ref:t}))))),be=o.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:r,orientation:n,loop:s=!1,dir:a,currentTabStopId:d,defaultCurrentTabStopId:i,onCurrentTabStopIdChange:f,onEntryFocus:c,...I}=e,l=o.useRef(null),p=N(t,l),b=ee(a),[u=null,v]=W({prop:d,defaultProp:i,onChange:f}),[C,$]=o.useState(!1),m=O(c),A=B(r),S=o.useRef(!1),[h,D]=o.useState(0);return o.useEffect(()=>{const E=l.current;if(E)return E.addEventListener(F,m),()=>E.removeEventListener(F,m)},[m]),o.createElement(ie,{scope:r,orientation:n,dir:b,loop:s,currentTabStopId:u,onItemFocus:o.useCallback(E=>v(E),[v]),onItemShiftTab:o.useCallback(()=>$(!0),[]),onFocusableItemAdd:o.useCallback(()=>D(E=>E+1),[]),onFocusableItemRemove:o.useCallback(()=>D(E=>E-1),[])},o.createElement(k.div,w({tabIndex:C||h===0?-1:0,"data-orientation":n},I,{ref:p,style:{outline:"none",...e.style},onMouseDown:x(e.onMouseDown,()=>{S.current=!0}),onFocus:x(e.onFocus,E=>{const Y=!S.current;if(E.target===E.currentTarget&&Y&&!C){const U=new CustomEvent(F,ue);if(E.currentTarget.dispatchEvent(U),!U.defaultPrevented){const _=A().filter(g=>g.focusable),j=_.find(g=>g.active),V=_.find(g=>g.id===u),q=[j,V,..._].filter(Boolean).map(g=>g.ref.current);K(q)}}S.current=!1}),onBlur:x(e.onBlur,()=>$(!1))})))}),$e="RovingFocusGroupItem",me=o.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:r,focusable:n=!0,active:s=!1,tabStopId:a,...d}=e,i=oe(),f=a||i,c=de($e,r),I=c.currentTabStopId===f,l=B(r),{onFocusableItemAdd:p,onFocusableItemRemove:b}=c;return o.useEffect(()=>{if(n)return p(),()=>b()},[n,p,b]),o.createElement(P.ItemSlot,{scope:r,id:f,focusable:n,active:s},o.createElement(k.span,w({tabIndex:I?0:-1,"data-orientation":c.orientation},d,{ref:t,onMouseDown:x(e.onMouseDown,u=>{n?c.onItemFocus(f):u.preventDefault()}),onFocus:x(e.onFocus,()=>c.onItemFocus(f)),onKeyDown:x(e.onKeyDown,u=>{if(u.key==="Tab"&&u.shiftKey){c.onItemShiftTab();return}if(u.target!==u.currentTarget)return;const v=Ie(u,c.orientation,c.dir);if(v!==void 0){u.preventDefault();let $=l().filter(m=>m.focusable).map(m=>m.ref.current);if(v==="last")$.reverse();else if(v==="prev"||v==="next"){v==="prev"&&$.reverse();const m=$.indexOf(u.currentTarget);$=c.loop?Ce($,m+1):$.slice(m+1)}setTimeout(()=>K($))}})})))}),pe={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function ve(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function Ie(e,t,r){const n=ve(e.key,r);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(n))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(n)))return pe[n]}function K(e){const t=document.activeElement;for(const r of e)if(r===t||(r.focus(),document.activeElement!==t))return}function Ce(e,t){return e.map((r,n)=>e[(t+n)%e.length])}const xe=le,Ae=me;export{G as $,ge as a,ee as b,W as c,oe as d,xe as e,Ae as f,x as g,ce as h,O as i,M as j,Z as k};
