(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(8743)}])},8743:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return Z}});var d=c(5893),e=c(7294),f="undefined"!=typeof browser,g="undefined"!=typeof chrome,h=[{enabled:!1,id:"example-1",links:!1,x:"hack",y:"work"},{enabled:!1,id:"example-2",links:!1,x:"MyDeadname",y:"MyNewname"},{enabled:!1,id:"example-3",links:!1,x:"/\\d[\\d,.]*/g",y:"69"},{enabled:!1,id:"example-4",links:!0,x:"/https?://(www.)*twitter.com/im",y:"https://nitter.net"},{enabled:!1,id:"example-5",links:!0,x:"/https?://www.amazon.com/im",y:"https://smile.amazon.com"},{enabled:!1,id:"example-6",links:!0,x:"/https?://(www.)*youtube.com/im",y:"https://invidious.weblibre.org"},{enabled:!1,id:"example-7",links:!0,x:"/https?://(www.)*instagram.com/p//im",y:"https://bibliogram.art/p/"},{enabled:!1,id:"example-8",links:!0,x:"/https?://(www.)*instagram.com/im",y:"https://bibliogram.art/u/"},{enabled:!1,id:"example-9",links:!0,x:"/https?://(www.)*reddit.com/im",y:"https://libreddit.spike.codes"},{enabled:!1,id:"example-10",links:!0,x:"/https?://(www.)*tiktok.com/im",y:"https://proxitok.herokuapp.com"},],i=c(3105),j=c.n(i),k=c(3311),l=c.n(k),m=c(8721),n=c.n(m),o=c(5161),p=c.n(o);function q(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=new Array(b);c<b;c++)d[c]=a[c];return d}var r=(0,e.createContext)({}),s=function(a){var b=a.children,c=a.data,i=(0,e.useState)(void 0===c?[]:c),k=i[0],m=i[1],o=(0,e.useState)(!1),s=o[0],t=o[1],u=(0,e.useState)(null),v=u[0],w=u[1];(0,e.useEffect)(function(){(f?browser.storage.local.get("data").then(function(a){return a}):g?new Promise(function(a,b){chrome.storage.local.get("data",function(c){chrome.runtime.lastError?b(chrome.runtime.lastError):a(c)})}):Promise.resolve({})).then(function(a){n()(a,"data")&&m(a.data)})},[]),(0,e.useEffect)(function(){var a;a=k,f?browser.storage.local.set({data:a}):g?new Promise(function(b,c){chrome.storage.local.set({data:a},function(){chrome.runtime.lastError?c(chrome.runtime.lastError):b()})}):Promise.resolve({})},[k]);var x=function(){w(null),t(!1)};return(0,d.jsx)(r.Provider,{value:{data:k,editID:v,handleAddExamples:function(){return m(h)},handleCancel:x,handleDelete:function(a){m(j()(k,function(b){return b.id!==a})),x()},handleEdit:function(a){w(a),t(!0)},handleEnableToggle:function(a){m(p()(k,function(b){return b.id===a&&(b.enabled=!b.enabled),b}))},handleSave:function(a){var b;l()(k,{id:a.id})?m(p()(k,function(b){return a.id===b.id?a:b})):m(((function(a){if(Array.isArray(a))return q(a)})(b=k)||(function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)})(b)||(function(a,b){if(a){if("string"==typeof a)return q(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return q(a,b)}})(b)||(function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")})()).concat([a])),w(null),t(!1)},isEditing:s},children:b})};function t(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}r.Consumer;var u={primary:"bg-purple-500 font-semibold rounded-md py-2 px-3 mt-1 cursor-pointer",secondary:"rounded-md py-2 px-3 mt-1 mr-2 cursor-pointer"},v=function(a){var b=a.children,c=a.className,e=a.theme,f=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["children","className","theme"]);return(0,d.jsx)("button",function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){t(a,b,c[b])})}return a}({className:c||"secondary"===e?u.secondary:u.primary},f,{children:b}))};function w(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var x=function(a){var b=a.className,c=a.type,e=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["className","type"]);return(0,d.jsx)("input",function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){w(a,b,c[b])})}return a}({type:void 0===c?"checkbox":c,className:void 0===b?"mt-1 mr-2 align-top":b},e))};function y(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var z=function(a){var b=a.children,c=a.className,e=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["children","className"]);return(0,d.jsx)("label",function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){y(a,b,c[b])})}return a}({className:void 0===c?"block font-semibold mb-4":c},e,{children:b}))};function A(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var B=function(a){var b=a.className,c=a.type,e=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["className","type"]);return(0,d.jsx)("input",function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){A(a,b,c[b])})}return a}({type:void 0===c?"text":c,className:void 0===b?"mt-1 p-2 block w-full rounded-md border-purple-500 border-2":b},e))},C=c(7361),D=c.n(C),E=c(1609),F=c.n(E),G=function(){var a=(0,e.useContext)(r),b=a.handleCancel,c=a.handleDelete,f=a.handleSave,g=a.data,h=a.editID,i=l()(g,["id",h]),j=(0,e.useState)(!n()(i,"id")),k=j[0],m=(0,e.useState)(D()(i,"x","")),o=m[0],p=m[1],q=(0,e.useState)(D()(i,"y","")),s=q[0],t=q[1],u=(0,e.useState)(D()(i,"links",!1)),w=u[0],y=u[1],A=(0,e.useState)(D()(i,"enabled",!0)),C=A[0],E=(0,e.useState)(D()(i,"id",Date.now())),G=E[0],H={enabled:C,id:G,links:w,x:o,y:s};return(0,d.jsxs)("div",{children:[(0,d.jsxs)(z,{children:["🔍 Find X",(0,d.jsx)(B,{placeholder:"text or /regex/i",defaultValue:o,onChange:function(a){return p(D()(a,"target.value",""))},required:!0})]}),(0,d.jsxs)(z,{children:["✏️ Replace with Y",(0,d.jsx)(B,{placeholder:"text",defaultValue:s,onChange:function(a){return t(D()(a,"target.value",""))}})]}),(0,d.jsxs)(z,{children:[(0,d.jsx)(x,{defaultChecked:w,onChange:function(a){return y(D()(a,"target.checked",!1))}}),"🔗 Link mode"]}),(0,d.jsxs)("div",{className:"text-right",children:[k?(0,d.jsx)(v,{theme:"secondary",onClick:b,children:"Cancel"}):(0,d.jsx)(v,{theme:"secondary",onClick:function(){return c(G)},children:"Delete"}),(0,d.jsx)(v,{type:"submit",onClick:function(){F()(o)||f(H)},children:"💾 Save"})]})]})};function H(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var I=function(a){a.children;var b=a.className,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["children","className"]);return(0,d.jsx)("h1",function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){H(a,b,c[b])})}return a}({className:void 0===b?"text-xl font-semibold border-b-2 border-purple-500 mb-3":b},c,{children:"X to Y"}))},J=c(5988),K=c.n(J);function L(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var M=function(a){var b=a.children,c=a.className,e=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["children","className"]);return(0,d.jsxs)("main",function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){L(a,b,c[b])})}return a}({},e,{className:"jsx-ea026d644cd8caf2 "+(e&&null!=e.className&&e.className||(void 0===c?"font-sans mx-auto my-3 max-w-screen-sm px-4 py-3 text-lg":c)||""),children:[(0,d.jsx)(K(),{id:"ea026d644cd8caf2",children:"body{min-width:320px}\n@media (prefers-color-scheme:dark) {body{color:#fff;\nbackground:#000}\ninput{color:#000;\nbackground:#fff}}"}),b]}))};function N(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var O=function(a){var b=a.children,c=a.className,e=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["children","className"]);return(0,d.jsx)("ul",function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){N(a,b,c[b])})}return a}({className:void 0===c?"mt-4":c},e,{children:b}))};function P(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var Q=function(a){var b=a.children,c=a.className,e=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["children","className"]);return(0,d.jsx)("p",function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){P(a,b,c[b])})}return a}({className:void 0===c?"mb-4":c},e,{children:b}))};function R(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var S=function(a){var b=a.children,c=a.className,e=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["children","className"]);return(0,d.jsx)("li",function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){R(a,b,c[b])})}return a}({className:void 0===c?"":c},e,{children:b}))},T={item:"flex flex-row content-start items-start",em:"border-b-2 border-purple-500 break-all",text:"pb-4 flex-1 align-top cursor-pointer"},U=function(a){var b=a.item,c=(0,e.useContext)(r),f=c.handleEdit,g=c.handleEnableToggle;return(0,d.jsxs)(S,{className:T.item,children:[(0,d.jsx)(x,{defaultChecked:b.enabled,onClick:function(){return g(b.id)}}),(0,d.jsxs)(Q,{className:T.text,onClick:function(){return f(b.id)},children:[b.links?"🔗":"🔍"," ",(0,d.jsx)("em",{className:T.em,children:b.x})," to ✏️ ",(0,d.jsx)("em",{className:T.em,children:b.y})]})]})},V={em:"border-b-2 border-purple-500",text:"py-2 inline-block",empty:"my-4 italic"},W=function(){var a=(0,e.useContext)(r),b=a.data,c=a.handleAddExamples;return F()(b)?(0,d.jsxs)("div",{children:[(0,d.jsx)(Q,{className:V.empty,children:"You have not created an X to Y replacement yet."}),(0,d.jsx)(v,{onClick:c,children:"📜 Load examples"})]}):(0,d.jsx)(O,{children:b.map(function(a){return(0,d.jsx)(U,{item:a},a.id)})})},X=function(){var a=(0,e.useContext)(r).handleEdit;return(0,d.jsxs)("div",{children:[(0,d.jsx)(v,{onClick:function(){return a()},children:"🌱 Create"}),(0,d.jsx)(W,{})]})},Y=function(){var a=(0,e.useContext)(r).isEditing;return(0,d.jsxs)(M,{children:[(0,d.jsx)(I,{}),(0,d.jsx)(Q,{children:"Replace words and links"}),a?(0,d.jsx)(G,{}):(0,d.jsx)(X,{})]})},Z=function(){return(0,d.jsx)(s,{children:(0,d.jsx)(Y,{})})}}},function(a){a.O(0,[544,774,888,179],function(){return a(a.s=8581)}),_N_E=a.O()}])