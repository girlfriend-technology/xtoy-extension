(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(7936)}])},7936:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return ia}});var d=c(5893),e=c(7294),f="undefined"!=typeof browser,g="undefined"!=typeof chrome,h=c(4051),i=c.n(h),j=c(4231);function k(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(j){c(j);return}h.done?b(i):Promise.resolve(i).then(d,e)}var l,m,n=j.IX().of(j.Ry().shape({enabled:j.O7().required(),id:j.nK().required(),links:j.O7().required(),x:j.Z_().required(),y:j.Z_().required()})),o=(l=i().mark(function a(b){return i().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.isValid(b);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},a)}),m=function(){var a=this,b=arguments;return new Promise(function(c,d){var e=l.apply(a,b);function f(a){k(e,c,d,f,g,"next",a)}function g(a){k(e,c,d,f,g,"throw",a)}f(void 0)})},function(a){return m.apply(this,arguments)}),p=[{enabled:!1,id:"example-1",links:!1,x:"hack",y:"work"},{enabled:!1,id:"example-2",links:!1,x:"MyDeadname",y:"MyNewname"},{enabled:!1,id:"example-3",links:!1,x:"/\\d[\\d,.]*/g",y:"69"},{enabled:!1,id:"example-4",links:!0,x:"/https?://(www.)*twitter.com/im",y:"https://nitter.net"},{enabled:!1,id:"example-5",links:!0,x:"/https?://www.amazon.com/im",y:"https://smile.amazon.com"},{enabled:!1,id:"example-6",links:!0,x:"/https?://(www.)*youtube.com/im",y:"https://invidious.weblibre.org"},{enabled:!1,id:"example-7",links:!0,x:"/https?://(www.)*instagram.com/p//im",y:"https://bibliogram.art/p/"},{enabled:!1,id:"example-8",links:!0,x:"/https?://(www.)*instagram.com/im",y:"https://bibliogram.art/u"},{enabled:!1,id:"example-9",links:!0,x:"/https?://(www.)*reddit.com/im",y:"https://libreddit.spike.codes"},{enabled:!1,id:"example-10",links:!0,x:"/https?://(www.)*tiktok.com/im",y:"https://proxitok.herokuapp.com"},],q=c(3105),r=c.n(q),s=c(3311),t=c.n(s),u=c(8721),v=c.n(u),w=c(5161),x=c.n(w);function y(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=new Array(b);c<b;c++)d[c]=a[c];return d}var z=(0,e.createContext)({}),A=function(a){var b=a.children,c=a.data,h=(0,e.useState)(void 0===c?[]:c),i=h[0],j=h[1],k=(0,e.useState)(!1),l=k[0],m=k[1],n=(0,e.useState)(null),q=n[0],s=n[1],u=(0,e.useState)(!1),w=u[0],A=u[1],B=(0,e.useState)(null),C=B[0],D=B[1];(0,e.useEffect)(function(){(f?browser.storage.local.get("data").then(function(a){return a}):g?new Promise(function(a,b){chrome.storage.local.get("data",function(c){chrome.runtime.lastError?b(chrome.runtime.lastError):a(c)})}):Promise.resolve({})).then(function(a){v()(a,"data")&&j(a.data)})},[]),(0,e.useEffect)(function(){var a;a=i,f?browser.storage.local.set({data:a}):g?new Promise(function(b,c){chrome.storage.local.set({data:a},function(){chrome.runtime.lastError?c(chrome.runtime.lastError):b()})}):Promise.resolve({})},[i]);var E=function(){s(null),m(!1),A(!1)};return(0,d.jsx)(z.Provider,{value:{data:i,editID:q,handleAddExamples:function(){return j(p)},handleBackup:function(){A(!0),m(!1)},handleCancel:E,handleDelete:function(a){j(r()(i,function(b){return b.id!==a})),E()},handleEdit:function(a){s(a),m(!0),A(!1)},handleEnableToggle:function(a){j(x()(i,function(b){return b.id===a&&(b.enabled=!b.enabled),b}))},handleExport:function(){var a=JSON.stringify(i,null,2),b=new Blob([a],{type:"application/json"}),c=document.createElement("a");c.href=URL.createObjectURL(b),c.download="xtoy-config.json",c.click()},handleImport:function(a){D(null);var b=a.target.files[0],c=new FileReader();c.onload=function(){var a;try{a=JSON.parse(c.result)}catch(b){D(!1);return}o(a).then(function(b){D(b),b&&(j(a),A(!1))})},c.readAsText(b)},handleSave:function(a){var b;t()(i,{id:a.id})?j(x()(i,function(b){return a.id===b.id?a:b})):j(((function(a){if(Array.isArray(a))return y(a)})(b=i)||(function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)})(b)||(function(a,b){if(a){if("string"==typeof a)return y(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return y(a,b)}})(b)||(function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")})()).concat([a])),s(null),m(!1)},isBackingUp:w,isEditing:l,isValidConfigImport:C},children:b})};function B(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}z.Consumer;var C={primary:"bg-purple-500 font-semibold rounded-md py-2 px-3 mt-1 cursor-pointer",secondary:"rounded-md py-2 px-3 mt-1 mr-2 cursor-pointer"},D=function(a){var b=a.children,c=a.className,e=a.theme,f=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["children","className","theme"]);return(0,d.jsx)("button",function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){B(a,b,c[b])})}return a}({className:c||"secondary"===e?C.secondary:C.primary},f,{children:b}))};function E(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var F=function(a){var b=a.className,c=a.type,e=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["className","type"]);return(0,d.jsx)("input",function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){E(a,b,c[b])})}return a}({type:void 0===c?"checkbox":c,className:void 0===b?"mt-1 mr-2 align-top":b},e))};function G(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var H=function(a){var b=a.children,c=a.className,e=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["children","className"]);return(0,d.jsx)("label",function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){G(a,b,c[b])})}return a}({className:void 0===c?"block font-semibold mb-4 cursor-pointer":c},e,{children:b}))};function I(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var J=function(a){var b=a.className,c=a.type,e=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["className","type"]);return(0,d.jsx)("input",function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){I(a,b,c[b])})}return a}({type:void 0===c?"text":c,className:void 0===b?"mt-1 p-2 block w-full rounded-md border-purple-500 border-2":b},e))},K=c(7361),L=c.n(K),M=c(1609),N=c.n(M),O=function(){var a=(0,e.useContext)(z),b=a.handleCancel,c=a.handleDelete,f=a.handleSave,g=a.data,h=a.editID,i=t()(g,["id",h]),j=(0,e.useState)(!v()(i,"id")),k=j[0],l=(0,e.useState)(L()(i,"x","")),m=l[0],n=l[1],o=(0,e.useState)(L()(i,"y","")),p=o[0],q=o[1],r=(0,e.useState)(L()(i,"links",!1)),s=r[0],u=r[1],w=(0,e.useState)(L()(i,"enabled",!0)),x=w[0],y=(0,e.useState)(L()(i,"id",Date.now())),A=y[0],B={enabled:x,id:A,links:s,x:m,y:p};return(0,d.jsxs)("div",{children:[(0,d.jsxs)(H,{children:["🔍 Find X",(0,d.jsx)(J,{placeholder:"text or /regex/i",defaultValue:m,onChange:function(a){return n(L()(a,"target.value",""))},required:!0})]}),(0,d.jsxs)(H,{children:["✏️ Replace with Y",(0,d.jsx)(J,{placeholder:"text",defaultValue:p,onChange:function(a){return q(L()(a,"target.value",""))}})]}),(0,d.jsxs)(H,{children:[(0,d.jsx)(F,{defaultChecked:s,onChange:function(a){return u(L()(a,"target.checked",!1))}}),"🔗 Link mode"]}),(0,d.jsxs)("div",{className:"text-right",children:[k?(0,d.jsx)(D,{theme:"secondary",onClick:b,children:"Cancel"}):(0,d.jsx)(D,{theme:"secondary",onClick:function(){return c(A)},children:"Delete"}),(0,d.jsx)(D,{type:"submit",onClick:function(){N()(m)||f(B)},children:"💾 Save"})]})]})};function P(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var Q=function(a){a.children;var b=a.className,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["children","className"]);return(0,d.jsx)("h1",function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){P(a,b,c[b])})}return a}({className:void 0===b?"text-xl font-semibold border-b-2 border-purple-500 mb-3":b},c,{children:"X to Y"}))},R=c(5988),S=c.n(R);function T(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var U=function(a){var b=a.children,c=a.className,e=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["children","className"]);return(0,d.jsxs)("main",function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){T(a,b,c[b])})}return a}({},e,{className:"jsx-ea026d644cd8caf2 "+(e&&null!=e.className&&e.className||(void 0===c?"font-sans mx-auto my-3 max-w-screen-sm px-4 py-3 text-lg":c)||""),children:[(0,d.jsx)(S(),{id:"ea026d644cd8caf2",children:"body{min-width:320px}\n@media (prefers-color-scheme:dark) {body{color:#fff;\nbackground:#000}\ninput{color:#000;\nbackground:#fff}}"}),b]}))};function V(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var W=function(a){var b=a.children,c=a.className,e=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["children","className"]);return(0,d.jsx)("ul",function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){V(a,b,c[b])})}return a}({className:void 0===c?"mt-4":c},e,{children:b}))};function X(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var Y=function(a){var b=a.children,c=a.className,e=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["children","className"]);return(0,d.jsx)("p",function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){X(a,b,c[b])})}return a}({className:void 0===c?"mb-4":c},e,{children:b}))};function Z(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var $=function(a){var b=a.children,c=a.className,e=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["children","className"]);return(0,d.jsx)("li",function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){Z(a,b,c[b])})}return a}({className:void 0===c?"":c},e,{children:b}))},_={item:"flex flex-row content-start items-start",em:"border-b-2 border-purple-500 break-all",text:"pb-4 flex-1 align-top cursor-pointer"},aa=function(a){var b=a.item,c=(0,e.useContext)(z),f=c.handleEdit,g=c.handleEnableToggle;return(0,d.jsxs)($,{className:_.item,children:[(0,d.jsx)(F,{defaultChecked:b.enabled,onClick:function(){return g(b.id)}}),(0,d.jsxs)(Y,{className:_.text,onClick:function(){return f(b.id)},children:[b.links?"🔗":"🔍"," ",(0,d.jsx)("em",{className:_.em,children:b.x})," to ✏️ ",(0,d.jsx)("em",{className:_.em,children:b.y})]})]})},ba={em:"border-b-2 border-purple-500",text:"py-2 inline-block",empty:"my-4 italic"},ca=function(){var a=(0,e.useContext)(z),b=a.data,c=a.handleAddExamples;return N()(b)?(0,d.jsxs)("div",{children:[(0,d.jsx)(Y,{className:ba.empty,children:"You have not created an X to Y replacement yet."}),(0,d.jsx)(D,{onClick:c,children:"📜 Load examples"})]}):(0,d.jsx)(W,{children:b.map(function(a){return(0,d.jsx)(aa,{item:a},a.id)})})},da=function(){var a=(0,e.useContext)(z),b=a.handleEdit,c=a.handleBackup;return(0,d.jsxs)("div",{children:[(0,d.jsx)(D,{onClick:function(){return b()},children:"🌱 Create"}),(0,d.jsx)("div",{className:"float-right",children:(0,d.jsx)(D,{theme:"secondary",onClick:function(){return c()},children:"🛟 Backup"})}),(0,d.jsx)(ca,{})]})};function ea(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var fa=function(a){var b=a.className,c=a.type,e=a.accept,f=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["className","type","accept"]);return(0,d.jsx)("input",function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){ea(a,b,c[b])})}return a}({type:void 0===c?"file":c,accept:void 0===e?".json":e,className:void 0===b?"mt-1 p-2 block w-full":b},f))},ga=function(){var a=(0,e.useContext)(z),b=a.handleCancel,c=a.handleExport,f=a.handleImport,g=a.isValidConfigImport;return(0,d.jsxs)("div",{children:[!1===g?(0,d.jsx)(Y,{className:"mb-4 font-semibold text-red-500",children:"Invalid config file"}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(Y,{children:"Importing will replace all of your settings."}),(0,d.jsx)(Y,{children:"Exporting is a good way to prevent losing your settings."})]}),(0,d.jsxs)(H,{children:["📥 Import file",(0,d.jsx)(fa,{onChange:f,className:"hidden"})]}),(0,d.jsxs)(H,{children:["📤 Export file",(0,d.jsx)(D,{onClick:c,className:"hidden"})]}),(0,d.jsx)(D,{onClick:b,children:"🏁 Done"})]})},ha=function(){var a=(0,e.useContext)(z),b=a.isEditing,c=a.isBackingUp;return(0,d.jsxs)(U,{children:[(0,d.jsx)(Q,{}),(0,d.jsx)(Y,{children:"Replace words and links"}),c&&(0,d.jsx)(ga,{}),b&&(0,d.jsx)(O,{}),!b&&!c&&(0,d.jsx)(da,{})]})},ia=function(){return(0,d.jsx)(A,{children:(0,d.jsx)(ha,{})})}}},function(a){a.O(0,[756,774,888,179],function(){return a(a.s=8581)}),_N_E=a.O()}])