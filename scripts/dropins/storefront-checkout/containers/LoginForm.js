import*as t from"@dropins/elsie/event-bus.js";import*as e from"@dropins/elsie/fetch-graphql.js";import*as r from"@dropins/elsie/preact-compat.js";import*as n from"@dropins/elsie/preact-hooks.js";import*as i from"@dropins/elsie/preact-jsx-runtime.js";import*as o from"@dropins/elsie/preact.js";export const id=759;export const ids=[759];export const modules={6364:(t,e,r)=>{r.d(e,{td:()=>m,qs:()=>L});var n=r(3474),i=r(5437);function o(){throw new Error("Cycle detected")}var a=Symbol.for("preact-signals");function s(){if(c>1)c--;else{for(var t,e=!1;void 0!==l;){var r=l;for(l=void 0,v++;void 0!==r;){var n=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&y(r))try{r.c()}catch(r){e||(t=r,e=!0)}r=n}}if(v=0,c--,e)throw t}}var u=void 0;var f,l=void 0,c=0,v=0,d=0;function p(t){if(void 0!==u){var e=t.n;if(void 0===e||e.t!==u)return e={i:0,S:t,p:u.s,n:void 0,t:u,e:void 0,x:void 0,r:e},void 0!==u.s&&(u.s.n=e),u.s=e,t.n=e,32&u.f&&t.S(e),e;if(-1===e.i)return e.i=0,void 0!==e.n&&(e.n.p=e.p,void 0!==e.p&&(e.p.n=e.n),e.p=u.s,e.n=void 0,u.s.n=e,u.s=e),e}}function h(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}function m(t){return new h(t)}function y(t){for(var e=t.s;void 0!==e;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function g(t){for(var e=t.s;void 0!==e;e=e.n){var r=e.S.n;if(void 0!==r&&(e.r=r),e.S.n=e,e.i=-1,void 0===e.n){t.s=e;break}}}function b(t){for(var e=t.s,r=void 0;void 0!==e;){var n=e.p;-1===e.i?(e.S.U(e),void 0!==n&&(n.n=e.n),void 0!==e.n&&(e.n.p=n)):r=e,e.S.n=e.r,void 0!==e.r&&(e.r=void 0),e=n}t.s=r}function _(t){h.call(this,void 0),this.x=t,this.s=void 0,this.g=d-1,this.f=4}function j(t){var e=t.u;if(t.u=void 0,"function"==typeof e){c++;var r=u;u=void 0;try{e()}catch(e){throw t.f&=-2,t.f|=8,x(t),e}finally{u=r,s()}}}function x(t){for(var e=t.s;void 0!==e;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,j(t)}function S(t){if(u!==this)throw new Error("Out-of-order effect");b(this),u=t,this.f&=-2,8&this.f&&x(this),s()}function E(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}function O(t){var e=new E(t);try{e.c()}catch(t){throw e.d(),t}return e.d.bind(e)}function w(t,e){n.options[t]=e.bind(null,n.options[t]||function(){})}function C(t){f&&f(),f=t&&t.S()}function k(t){var e=this,r=t.data,o=L(r);o.value=r;var a=(0,i.useMemo)((function(){for(var t=e.__v;t=t.__;)if(t.__c){t.__c.__$f|=4;break}return e.__$u.c=function(){var t;(0,n.isValidElement)(a.peek())||3!==(null==(t=e.base)?void 0:t.nodeType)?(e.__$f|=1,e.setState({})):e.base.data=a.peek()},function(t){return new _(t)}((function(){var t=o.value.value;return 0===t?0:!0===t?"":t||""}))}),[]);return a.value}function F(t,e,r,n){var i=e in t&&void 0===t.ownerSVGElement,o=m(r);return{o:function(t,e){o.value=t,n=e},d:O((function(){var r=o.value.value;n[e]!==r&&(n[e]=r,i?t[e]=r:r?t.setAttribute(e,r):t.removeAttribute(e))}))}}function L(t){return(0,i.useMemo)((function(){return m(t)}),[])}h.prototype.brand=a,h.prototype.h=function(){return!0},h.prototype.S=function(t){this.t!==t&&void 0===t.e&&(t.x=this.t,void 0!==this.t&&(this.t.e=t),this.t=t)},h.prototype.U=function(t){if(void 0!==this.t){var e=t.e,r=t.x;void 0!==e&&(e.x=r,t.e=void 0),void 0!==r&&(r.e=e,t.x=void 0),t===this.t&&(this.t=r)}},h.prototype.subscribe=function(t){var e=this;return O((function(){var r=e.value,n=32&this.f;this.f&=-33;try{t(r)}finally{this.f|=n}}))},h.prototype.valueOf=function(){return this.value},h.prototype.toString=function(){return this.value+""},h.prototype.toJSON=function(){return this.value},h.prototype.peek=function(){return this.v},Object.defineProperty(h.prototype,"value",{get:function(){var t=p(this);return void 0!==t&&(t.i=this.i),this.v},set:function(t){if(u instanceof _&&function(){throw new Error("Computed cannot have side-effects")}(),t!==this.v){v>100&&o(),this.v=t,this.i++,d++,c++;try{for(var e=this.t;void 0!==e;e=e.x)e.t.N()}finally{s()}}}}),(_.prototype=new h).h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f))return!0;if(this.f&=-5,this.g===d)return!0;if(this.g=d,this.f|=1,this.i>0&&!y(this))return this.f&=-2,!0;var t=u;try{g(this),u=this;var e=this.x();(16&this.f||this.v!==e||0===this.i)&&(this.v=e,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return u=t,b(this),this.f&=-2,!0},_.prototype.S=function(t){if(void 0===this.t){this.f|=36;for(var e=this.s;void 0!==e;e=e.n)e.S.S(e)}h.prototype.S.call(this,t)},_.prototype.U=function(t){if(void 0!==this.t&&(h.prototype.U.call(this,t),void 0===this.t)){this.f&=-33;for(var e=this.s;void 0!==e;e=e.n)e.S.U(e)}},_.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;void 0!==t;t=t.x)t.t.N()}},_.prototype.peek=function(){if(this.h()||o(),16&this.f)throw this.v;return this.v},Object.defineProperty(_.prototype,"value",{get:function(){1&this.f&&o();var t=p(this);if(this.h(),void 0!==t&&(t.i=this.i),16&this.f)throw this.v;return this.v}}),E.prototype.c=function(){var t=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var e=this.x();"function"==typeof e&&(this.u=e)}finally{t()}},E.prototype.S=function(){1&this.f&&o(),this.f|=1,this.f&=-9,j(this),g(this),c++;var t=u;return u=this,S.bind(this,t)},E.prototype.N=function(){2&this.f||(this.f|=2,this.o=l,l=this)},E.prototype.d=function(){this.f|=8,1&this.f||x(this)},k.displayName="_st",Object.defineProperties(h.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:k},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}}),w("__b",(function(t,e){if("string"==typeof e.type){var r,n=e.props;for(var i in n)if("children"!==i){var o=n[i];o instanceof h&&(r||(e.__np=r={}),r[i]=o,n[i]=o.peek())}}t(e)})),w("__r",(function(t,e){C();var r,n=e.__c;n&&(n.__$f&=-2,void 0===(r=n.__$u)&&(n.__$u=r=function(t){var e;return O((function(){e=this})),e.c=function(){n.__$f|=1,n.setState({})},e}())),n,C(r),t(e)})),w("__e",(function(t,e,r,n){C(),void 0,t(e,r,n)})),w("diffed",(function(t,e){var r;if(C(),void 0,"string"==typeof e.type&&(r=e.__e)){var n=e.__np,i=e.props;if(n){var o=r.U;if(o)for(var a in o){var s=o[a];void 0===s||a in n||(s.d(),o[a]=void 0)}else r.U=o={};for(var u in n){var f=o[u],l=n[u];void 0===f?(f=F(r,u,l,i),o[u]=f):f.o(l,i)}}}t(e)})),w("unmount",(function(t,e){if("string"==typeof e.type){var r=e.__e;if(r){var n=r.U;if(n)for(var i in r.U=void 0,n){var o=n[i];o&&o.d()}}}else{var a=e.__c;if(a){var s=a.__$u;s&&(a.__$u=void 0,s.d())}}t(e)})),w("__h",(function(t,e,r,n){(n<3||9===n)&&(e.__$f|=2),t(e,r,n)})),n.Component.prototype.shouldComponentUpdate=function(t,e){var r=this.__$u;if(!(r&&void 0!==r.s||4&this.__$f))return!0;if(3&this.__$f)return!0;for(var n in e)return!0;for(var i in t)if("__source"!==i&&t[i]!==this.props[i])return!0;for(var o in this.props)if(!(o in t))return!0;return!1}},7553:(t,e,r)=>{r.d(e,{X:()=>g});var n=r(1892),i=r.n(n),o=r(5760),a=r.n(o),s=r(8311),u=r.n(s),f=r(8192),l=r.n(f),c=r(8060),v=r.n(c),d=r(4865),p=r.n(d),h=r(4553),m={};m.styleTagTransform=p(),m.setAttributes=l(),m.insert=u().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=v();i()(h.Z,m);h.Z&&h.Z.locals&&h.Z.locals;var y=r(7188),g=function(t){var e=t.className,r=t.children,n=t.level,i=void 0===n?2:n,o=i>=1&&i<=6?"h".concat(i):"h2";return(0,y.jsx)(o,{className:e,children:r})}},2764:(t,e,r)=>{r.d(e,{U:()=>B});var n=r(2914),i=r(2605),o=r(7553),a=r(9724),s=r(7188),u=function(){return(0,s.jsxs)("p",{className:"checkout-login-form__signIn",children:[(0,s.jsx)(a.xv,{id:"Checkout.LoginForm.account"}),(0,s.jsx)("a",{className:"checkout-login-form__link",href:"#",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(a.xv,{id:"Checkout.LoginForm.signIn"})})]})},f=r(4426),l=r(7203),c=(0,a.zB)({LoginFormLabel:"Checkout.LoginForm.ariaLabel",LoginFormFloatingLabel:"Checkout.LoginForm.floatingLabel",LoginFormPlaceholder:"Checkout.LoginForm.placeholder"})((function(t){var e=t.error,r=t.hint,n=t.value,i=t.onChange,o=t.onBlur,a=t.onInvalid;return(0,s.jsx)(f.g,{size:"medium",error:e,hint:r,children:(0,s.jsx)(l.I,{id:"customer-email",name:"userName",type:"email",value:n,autocomplete:"email",placeholder:t.LoginFormPlaceholder,floatingLabel:t.LoginFormFloatingLabel,onChange:i,onBlur:o,onInvalid:a,required:!0,"aria-label":t.LoginFormLabel,"aria-required":!0})})})),v=r(1892),d=r.n(v),p=r(5760),h=r.n(p),m=r(8311),y=r.n(m),g=r(8192),b=r.n(g),_=r(8060),j=r.n(_),x=r(4865),S=r.n(x),E=r(3685),O={};O.styleTagTransform=S(),O.setAttributes=b(),O.insert=y().bind(null,"head"),O.domAPI=h(),O.insertStyleElement=j();d()(E.Z,O);E.Z&&E.Z.locals&&E.Z.locals;var w=r(5587);function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function k(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function F(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?k(Object(r),!0).forEach((function(e){L(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function L(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=C(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==C(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var P=(0,a.zB)({})((function(t){var e=t.className,r=t.currentEmail,n=t.hint,i=t.error,f=void 0===i?null:i,l=t.onEmailChange,v=t.onEmailBlur,d=t.onEmailInvalid;return(0,s.jsxs)("div",{className:"checkout-login-form",children:[(0,s.jsxs)("div",{className:"checkout-login-form__heading",children:[(0,s.jsx)(o.X,{level:2,children:(0,s.jsx)(a.xv,{id:"Checkout.LoginForm.title"}),className:"checkout-login-form__title"}),(0,s.jsx)(u,{})]}),(0,s.jsx)("div",{className:"checkout-login-form__content",children:(0,s.jsxs)("form",F(F({className:(0,w.S)(["elsie-login-form__form",e]),noValidate:!0},t),{},{children:[(0,s.jsx)("button",{type:"submit",disabled:!0,style:"display: none","aria-hidden":"true"}),(0,s.jsx)(c,{value:r||void 0,error:f||"",hint:n,onChange:l,onBlur:v,onInvalid:d})]}))})]})})),N=r(5437),I=r(6200),U=r(3042),A=r(1497);function $(t){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$(t)}function M(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function R(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=$(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=$(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==$(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Z(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,i,o,a,s=[],u=!0,f=!1;try{if(o=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=o.call(r)).done)&&(s.push(n.value),s.length!==e);u=!0);}catch(t){f=!0,i=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(f)throw i}}return s}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return T(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return T(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var D=(0,a.zB)({LoginFormInvalidEmailError:"Checkout.LoginForm.invalidEmailError",LoginFormMissingEmailError:"Checkout.LoginForm.missingEmailError",LoginFormEmailExists:"Checkout.LoginForm.emailExists"}),B=D((function(t){var e=t.className,r=t.email,o=void 0===r?null:r,a=t.LoginFormEmailExists,u=t.LoginFormInvalidEmailError,f=t.LoginFormMissingEmailError,l=(0,A.oR)().cartId,c=U.t.value.data,v=!!c,d=Z((0,N.useState)(!1),2),p=d[0],h=d[1],m=Z((0,N.useState)(o),2),y=m[0],g=m[1],b=Z((0,N.useState)(),2),_=b[0],j=b[1],x=Z((0,N.useState)(!0),2),S=x[0],E=x[1],O=function(t){return t.valid?null:t.valueMissing?f:u};return!p&&v&&(h(!0),g((null==c?void 0:c.email)||o)),(0,N.useEffect)((function(){if(y&&!_&&(null==c?void 0:c.email)!==y){var t=setTimeout((function(){(0,n.T)(y).then((function(t){E(t),(0,i.A)({cartId:l,email:y}).catch((function(t){console.log("set email failed",t)}))})).catch((function(t){console.log(t),j(u),E(!0)}))}),1e3);return function(){t&&clearTimeout(t)}}}),[y,_,u,null==c?void 0:c.email,l]),(0,s.jsx)(P,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?M(Object(r),!0).forEach((function(e){R(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({name:I.N,className:e,currentEmail:y,hint:S?"":a,error:_,onEmailChange:function(t){var e=t.target.value;g(e),j(null),E(!0)},onEmailBlur:function(t){var e=t.target.validity;j(O(e))},onEmailInvalid:function(t){var e=t.target.validity;j(O(e))}},t))}))},6200:(t,e,r)=>{r.d(e,{N:()=>n});var n="login-form"},1484:(t,e,r)=>{r.d(e,{NU:()=>n.N,U0:()=>i.U,ZP:()=>i.U});var n=r(6200),i=r(2764)},4553:(t,e,r)=>{r.d(e,{Z:()=>s});var n=r(4933),i=r.n(n),o=r(3476),a=r.n(o)()(i());a.push([t.id,"\n",""]);const s=a},3685:(t,e,r)=>{r.d(e,{Z:()=>s});var n=r(4933),i=r.n(n),o=r(3476),a=r.n(o)()(i());a.push([t.id,".checkout-login-form{\n    display:grid;\n}\n\n.checkout-login-form__heading{\n    display:grid;\n    grid-template-columns:repeat(2, 1fr [col-start]);\n    grid-auto-rows:max-content;\n}\n\n.checkout-login-form__content{\n    grid-auto-rows:max-content;\n}\n\n.checkout-login-form__title{\n    grid-column-start:1;\n    color:var(--color-neutral-800);\n    font:var(--type-headline-2-default-font);\n    letter-spacing:var(--type-headline-2-default-letter-spacing);\n    margin:0;\n}\n\n.checkout-login-form__signIn{\n    grid-column-start:2;\n    color:var(--color-neutral-800);\n    font:var(--type-body-2-default-font);\n    letter-spacing:var(--type-body-2-default-letter-spacing);\n    margin-bottom:var(--spacing-medium);\n    align-self:flex-end;\n    justify-self:flex-end;\n    margin-top:var(--spacing-xxsmall);\n}\n\na.checkout-login-form__link{\n    font:var(--type-body-2-strong-font);\n    margin-left:var(--spacing-xxsmall);\n}\n@media only screen and (min-width:320px) and (max-width: 768px){\n    .checkout-login-form__heading{\n        grid-template-columns:repeat(1, 1fr [col-start]);\n        grid-template-rows:1fr;\n    }\n\n    .checkout-login-form__signIn{\n        grid-column-start:1;\n        align-self:flex-start;\n        justify-self:flex-start;\n        padding-top:var(--spacing-xsmall);\n    }\n}\n",""]);const s=a},6765:(e,r,n)=>{e.exports=(t=>{var e={};return n.d(e,t),e})({events:()=>t.events})},9699:(t,r,n)=>{t.exports=(t=>{var e={};return n.d(e,t),e})({FetchGraphQL:()=>e.FetchGraphQL})},4853:(t,e,n)=>{t.exports=(t=>{var e={};return n.d(e,t),e})({Suspense:()=>r.Suspense,createContext:()=>r.createContext,forwardRef:()=>r.forwardRef,lazy:()=>r.lazy,useCallback:()=>r.useCallback,useContext:()=>r.useContext,useEffect:()=>r.useEffect,useImperativeHandle:()=>r.useImperativeHandle,useMemo:()=>r.useMemo,useRef:()=>r.useRef,useState:()=>r.useState})},5437:(t,e,r)=>{t.exports=(t=>{var e={};return r.d(e,t),e})({useCallback:()=>n.useCallback,useContext:()=>n.useContext,useDebugValue:()=>n.useDebugValue,useEffect:()=>n.useEffect,useId:()=>n.useId,useImperativeHandle:()=>n.useImperativeHandle,useLayoutEffect:()=>n.useLayoutEffect,useMemo:()=>n.useMemo,useReducer:()=>n.useReducer,useRef:()=>n.useRef,useState:()=>n.useState})},4142:(t,e,r)=>{t.exports=(t=>{var e={};return r.d(e,t),e})({Fragment:()=>i.Fragment,jsx:()=>i.jsx,jsxs:()=>i.jsxs})},3474:(t,e,r)=>{t.exports=(t=>{var e={};return r.d(e,t),e})({Component:()=>o.Component,Fragment:()=>o.Fragment,cloneElement:()=>o.cloneElement,createContext:()=>o.createContext,createElement:()=>o.createElement,createRef:()=>o.createRef,h:()=>o.h,hydrate:()=>o.hydrate,isValidElement:()=>o.isValidElement,options:()=>o.options,render:()=>o.render,toChildArray:()=>o.toChildArray})},7188:(t,e,r)=>{r(4853);var n=r(4142);r.o(n,"Fragment")&&r.d(e,{Fragment:function(){return n.Fragment}}),r.o(n,"jsx")&&r.d(e,{jsx:function(){return n.jsx}}),r.o(n,"jsxs")&&r.d(e,{jsxs:function(){return n.jsxs}})}};import a from"../runtime.js";import*as s from"../179.js";a.C(s);import*as u from"../900.js";a.C(u);import*as f from"../79.js";a.C(f);import*as l from"../965.js";a.C(l);import*as c from"../483.js";a.C(c);import*as v from"../41.js";a.C(v);import*as d from"./LoginForm.js";a.C(d);var p,h=(p=1484,a(a.s=p)),m=h.NU,y=h.U0,g=h.ZP;export{m as LOGIN_FORM_NAME,y as LoginForm,g as default};