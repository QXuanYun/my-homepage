(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[777],{5157:(e,t,r)=>{"use strict";function l(e,t,r,l){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return l}}),r(2063),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6397:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return g}});let l=r(7677),n=r(4848),o=l._(r(6540)),u=r(6847),a=r(7785),f=r(2772),c=r(1278),i=r(6185),s=r(7644),d=r(6334),p=r(5157),b=r(296),y=r(1903),h=new Set;function v(e,t,r,l){if((0,a.isLocalURL)(t)){if(!l.bypassPrefetchedCheck){let n=t+"%"+r+"%"+(void 0!==l.locale?l.locale:"locale"in e?e.locale:void 0);if(h.has(n))return;h.add(n)}e.prefetch(t,r,l).catch(e=>{})}}function _(e){return"string"==typeof e?e:(0,f.formatUrl)(e)}let g=o.default.forwardRef(function(e,t){let r,l;let{href:f,as:h,children:g,prefetch:m=null,passHref:M,replace:j,shallow:C,scroll:k,locale:P,onClick:O,onMouseEnter:E,onTouchStart:x,legacyBehavior:L=!1,...R}=e;r=g,L&&("string"==typeof r||"number"==typeof r)&&(r=(0,n.jsx)("a",{children:r}));let w=o.default.useContext(s.RouterContext),I=!1!==m,{href:S,as:T}=o.default.useMemo(()=>{if(!w){let e=_(f);return{href:e,as:h?_(h):e}}let[e,t]=(0,u.resolveHref)(w,f,!0);return{href:e,as:h?(0,u.resolveHref)(w,h):t||e}},[w,f,h]),N=o.default.useRef(S),U=o.default.useRef(T);L&&(l=o.default.Children.only(r));let D=L?l&&"object"==typeof l&&l.ref:t,[K,A,F]=(0,d.useIntersection)({rootMargin:"200px"}),G=o.default.useCallback(e=>{(U.current!==T||N.current!==S)&&(F(),U.current=T,N.current=S),K(e)},[T,S,F,K]),H=(0,y.useMergedRef)(G,D);o.default.useEffect(()=>{w&&A&&I&&v(w,S,T,{locale:P})},[T,S,A,P,I,null==w?void 0:w.locale,w]);let q={ref:H,onClick(e){L||"function"!=typeof O||O(e),L&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(e),w&&!e.defaultPrevented&&function(e,t,r,l,n,o,u,f){let{nodeName:c}=e.currentTarget;"A"===c.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!(0,a.isLocalURL)(r))||(e.preventDefault(),(()=>{let e=null==u||u;"beforePopState"in t?t[n?"replace":"push"](r,l,{shallow:o,locale:f,scroll:e}):t[n?"replace":"push"](l||r,{scroll:e})})())}(e,w,S,T,j,C,k,P)},onMouseEnter(e){L||"function"!=typeof E||E(e),L&&l.props&&"function"==typeof l.props.onMouseEnter&&l.props.onMouseEnter(e),w&&v(w,S,T,{locale:P,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){L||"function"!=typeof x||x(e),L&&l.props&&"function"==typeof l.props.onTouchStart&&l.props.onTouchStart(e),w&&v(w,S,T,{locale:P,priority:!0,bypassPrefetchedCheck:!0})}};if((0,c.isAbsoluteUrl)(T))q.href=T;else if(!L||M||"a"===l.type&&!("href"in l.props)){let e=void 0!==P?P:null==w?void 0:w.locale,t=(null==w?void 0:w.isLocaleDomain)&&(0,p.getDomainLocale)(T,e,null==w?void 0:w.locales,null==w?void 0:w.domainLocales);q.href=t||(0,b.addBasePath)((0,i.addLocale)(T,e,null==w?void 0:w.defaultLocale))}return L?o.default.cloneElement(l,q):(0,n.jsx)("a",{...R,...q,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6334:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return f}});let l=r(6540),n=r(4959),o="function"==typeof IntersectionObserver,u=new Map,a=[];function f(e){let{rootRef:t,rootMargin:r,disabled:f}=e,c=f||!o,[i,s]=(0,l.useState)(!1),d=(0,l.useRef)(null),p=(0,l.useCallback)(e=>{d.current=e},[]);return(0,l.useEffect)(()=>{if(o){if(c||i)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:l,observer:n,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},l=a.find(e=>e.root===r.root&&e.margin===r.margin);if(l&&(t=u.get(l)))return t;let n=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:n},a.push(r),u.set(r,t),t}(r);return o.set(e,t),n.observe(e),function(){if(o.delete(e),n.unobserve(e),0===o.size){n.disconnect(),u.delete(l);let e=a.findIndex(e=>e.root===l.root&&e.margin===l.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!i){let e=(0,n.requestIdleCallback)(()=>s(!0));return()=>(0,n.cancelIdleCallback)(e)}},[c,r,t,i,d.current]),[p,i,(0,l.useCallback)(()=>{s(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7814:e=>{e.exports={style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"},className:"__className_f294e8",variable:"__variable_f294e8"}},1106:(e,t,r)=>{e.exports=r(6397)}}]);