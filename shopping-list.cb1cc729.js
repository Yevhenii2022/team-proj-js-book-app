!function(){function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var o={},i={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},t.parcelRequired7c6=r),r.register("iE7OH",(function(t,n){var o,i;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var r={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},i=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r.register("1t1Wn",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n.default(e)||o.default(e,t)||a.default(e,t)||i.default()};var n=s(r("8slrw")),o=s(r("7AJDX")),i=s(r("ifqQW")),a=s(r("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),r.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),r.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),r.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),r.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return o.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o.default(e,t)};var n,o=(n=r("8NIkP"))&&n.__esModule?n:{default:n}})),r.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}})),r.register("4Nugj",(function(t,n){e(t.exports,"default",(function(){return o}));var o={navlinks:document.querySelectorAll(".navigation__link"),categoriesSidebar:document.querySelector(".sidebar__categories"),homeBooksByType:document.querySelector(".home-typeBook"),homeBook:document.querySelector(".home-book"),cardContainerEl:document.querySelector(".books__container"),homeContainer:document.querySelector(".home__main-container"),shoppingListEl:document.querySelector(".shopping__cards"),notificationContainerEl:document.querySelector(".shopping__storage"),shoppingHeadingEl:document.querySelector(".shopping__heading"),logoTrashPath:new URL(r("2Sxo6")),SHOP_LIST_KEY:"selected-books",listBookEl:document.querySelector(".books__container"),closeModalPopBtn:document.querySelector("[data-modal-close]"),modalPopEl:document.querySelector("[data-modal]"),backdrop:document.querySelector(".backdrop"),paginationEl:document.querySelector("#tui-pagination-container"),scrollBtnEl:document.querySelector(".btn-up")}})),r.register("2Sxo6",(function(e,t){e.exports=r("aNJCr").getBundleURL("01IoP")+r("iE7OH").resolve("410VS")})),r.register("aNJCr",(function(t,n){var o;e(t.exports,"getBundleURL",(function(){return o}),(function(e){return o=e}));var i={};function r(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return r(e[2])}return"/"}(),i[e]=t),t}})),r.register("4op18",(function(t,n){e(t.exports,"default",(function(){return o}));var o={save:function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},load:function(e){try{var t=localStorage.getItem(e);return null===t?[]:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:function(e){try{localStorage.removeItem(e)}catch(e){console.error("Remove state error: ",e.message)}}}})),r.register("kvC6y",(function(t,n){e(t.exports,"spinerStart",(function(){return i})),e(t.exports,"spinerStop",(function(){return a}));var o=r("7rQOT"),i=function(){o.Loading.pulse("Wait please...",{svgColor:"#4f2ee8"})},a=function(){o.Loading.remove()}})),r.register("7rQOT",(function(e,n){var o,i;o=void 0!==t?t:"undefined"!=typeof window?window:e.exports,i=function(e){"use strict";if(void 0===e&&void 0===e.document)return!1;var t,n="Standard",o="Hourglass",i="Circle",r="Arrows",a="Dots",s="Pulse",l="Custom",c="Notiflix",u={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},f=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},d=function(t){return t||(t="head"),null!==e.document[t]||(f('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},m=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var o=function(n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t&&"[object Object]"===Object.prototype.toString.call(n[o])?e[o]=m(e[o],n[o]):e[o]=n[o])};n<arguments.length;n++)o(arguments[n]);return e},g=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},p=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},h=function(c,p,h,y,v){if(!d("body"))return!1;t||b.Loading.init({});var k=m(!0,t,{});if("object"==typeof p&&!Array.isArray(p)||"object"==typeof h&&!Array.isArray(h)){var w={};"object"==typeof p?w=p:"object"==typeof h&&(w=h),t=m(!0,t,w)}var x,S,N="";if("string"==typeof p&&p.length>0&&(N=p),y){var _="";(N=N.length>t.messageMaxLength?g(N).toString().substring(0,t.messageMaxLength)+"...":g(N).toString()).length>0&&(_='<p id="'+t.messageID+'" class="nx-loading-message" style="color:'+t.messageColor+";font-size:"+t.messageFontSize+';">'+N+"</p>"),t.cssAnimation||(t.cssAnimationDuration=0);var H="";if(c===n)x=t.svgSize,S=t.svgColor,x||(x="60px"),S||(S="#32c682"),H='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+S+'" width="'+x+'" height="'+x+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';else if(c===o)H=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'}(t.svgSize,t.svgColor);else if(c===i)H=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'}(t.svgSize,t.svgColor);else if(c===r)H=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'}(t.svgSize,t.svgColor);else if(c===a)H=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(c===s)H=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(c===l&&null!==t.customSvgCode&&null===t.customSvgUrl)H=t.customSvgCode||"";else if(c===l&&null!==t.customSvgUrl&&null===t.customSvgCode)H='<img class="nx-custom-loading-icon" width="'+t.svgSize+'" height="'+t.svgSize+'" src="'+t.customSvgUrl+'" alt="Notiflix">';else{if(c===l&&(null===t.customSvgUrl||null===t.customSvgCode))return f('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;H=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(t.svgSize,"#f8f8f8","#32c682")}var E=parseInt((t.svgSize||"").replace(/[^0-9]/g,"")),L=e.innerWidth,C=E>=L?L-40+"px":E+"px",I='<div style="width:'+C+"; height:"+C+';" class="'+t.className+"-icon"+(N.length>0?" nx-with-message":"")+'">'+H+"</div>",M=e.document.createElement("div");M.id=u.ID,M.className=t.className+(t.cssAnimation?" nx-with-animation":"")+(t.clickToClose?" nx-loading-click-to-close":""),M.style.zIndex=t.zindex,M.style.background=t.backgroundColor,M.style.animationDuration=t.cssAnimationDuration+"ms",M.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',M.style.display="flex",M.style.flexWrap="wrap",M.style.flexDirection="column",M.style.alignItems="center",M.style.justifyContent="center",t.rtl&&(M.setAttribute("dir","rtl"),M.classList.add("nx-rtl-on")),M.innerHTML=I+_,e.document.getElementById(M.id)||(e.document.body.appendChild(M),t.clickToClose&&e.document.getElementById(M.id).addEventListener("click",(function(){M.classList.add("nx-remove");var e=setTimeout((function(){null!==M.parentNode&&(M.parentNode.removeChild(M),clearTimeout(e))}),t.cssAnimationDuration)})))}else if(e.document.getElementById(u.ID))var A=e.document.getElementById(u.ID),R=setTimeout((function(){A.classList.add("nx-remove");var e=setTimeout((function(){null!==A.parentNode&&(A.parentNode.removeChild(A),clearTimeout(e))}),t.cssAnimationDuration);clearTimeout(R)}),v);t=m(!0,t,k)},b={Loading:{init:function(n){t=m(!0,u,n),function(t,n){if(!d("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var o=e.document.createElement("style");o.id=n,o.innerHTML=t(),e.document.head.appendChild(o)}}(p,"NotiflixLoadingInternalCSS")},merge:function(e){if(!t)return f("You have to initialize the Loading module before call Merge function."),!1;t=m(!0,t,e)},standard:function(e,t){h(n,e,t,!0,0)},hourglass:function(e,t){h(o,e,t,!0,0)},circle:function(e,t){h(i,e,t,!0,0)},arrows:function(e,t){h(r,e,t,!0,0)},dots:function(e,t){h(a,e,t,!0,0)},pulse:function(e,t){h(s,e,t,!0,0)},custom:function(e,t){h(l,e,t,!0,0)},notiflix:function(e,t){h(c,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),h(null,null,null,!1,e)},change:function(n){!function(n){"string"!=typeof n&&(n="");var o=e.document.getElementById(u.ID);if(o)if(n.length>0){n=n.length>t.messageMaxLength?g(n).substring(0,t.messageMaxLength)+"...":g(n);var i=o.getElementsByTagName("p")[0];if(i)i.innerHTML=n;else{var r=e.document.createElement("p");r.id=t.messageID,r.className="nx-loading-message nx-loading-message-new",r.style.color=t.messageColor,r.style.fontSize=t.messageFontSize,r.innerHTML=n,o.appendChild(r)}}else f("Where is the new message?")}(n)}}};return"object"==typeof e.Notiflix?m(!0,e.Notiflix,{Loading:b.Loading}):{Loading:b.Loading}},"function"==typeof define&&define.amd?define([],(function(){return i(o)})):"object"==typeof e.exports?e.exports=i(o):o.Notiflix=i(o)})),r.register("9PaQ0",(function(t,n){function o(e){e.forEach((function(e){var t,n=null!==(t=e.getAttribute("href").match(/\/[a-z-]*.html/g))&&void 0!==t?t:"team-proj-js-book-app/";window.location.href.includes(n)&&e.classList.add("is-activ")}))}e(t.exports,"setActiveState",(function(){return o}))})),r.register("32ZrB",(function(e,t){var n=document.querySelector(".input"),o=document.querySelector("body");"dark"===localStorage.getItem("mode")&&(o.classList.add("dark-mode"),n.checked=!0),n.addEventListener("change",(function(){this.checked?(localStorage.setItem("mode","dark"),o.classList.add("dark-mode")):(localStorage.setItem("mode","light"),o.classList.remove("dark-mode"))}))})),r.register("cThf0",(function(e,t){var o,i=r("iRSno"),a=r("3dHjx"),s=r("cVI2I"),l=r("j0haT"),c=r("dwLHk"),u=r("llZDR"),f=r("34r8i"),d=r("95c8d"),m=r("5hQtS"),g=r("kuYa0"),p=r("jSff3"),h=r("fM0dO"),b=r("u4rXz"),y=r("5Go5j"),v=r("mdeXp"),k=r("9QZQE"),w=r("hSFLf"),x=r("g7UZE"),S=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:n(i),img2:n(a)},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:n(s),img2:n(l)},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:n(c),img2:n(u)},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:n(f),img2:n(d)},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:n(m),img2:n(g)},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:n(p),img2:n(h)},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:n(b),img2:n(y)},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:n(v),img2:n(k)},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:n(w),img2:n(x)}],N=document.querySelector(".logoContainer");o=S.map((function(e,t){var n=e.title,o=e.url,i=e.img,r=e.img2,a=(t+1).toString().padStart(2,"0");return'<div class="logo__item fund-item"><p class="fundNumber">'.concat(a,'</p>\n      <a href="').concat(o,'" class="logo__img" target="_blank" >\n      <picture>\n      <source srcset="').concat(i,", ").concat(r,' 2x" />\n      <img src="').concat(i,'" alt="').concat(n,'" loading="lazy">\n    </picture>\n\n      </a></div>\n      \n  ')})).join(""),N.insertAdjacentHTML("beforeend",o)})),r.register("iRSno",(function(e,t){e.exports=r("aNJCr").getBundleURL("01IoP")+r("iE7OH").resolve("6n8Da")})),r.register("3dHjx",(function(e,t){e.exports=r("aNJCr").getBundleURL("01IoP")+r("iE7OH").resolve("2bqEp")})),r.register("cVI2I",(function(e,t){e.exports=r("aNJCr").getBundleURL("01IoP")+r("iE7OH").resolve("an9fi")})),r.register("j0haT",(function(e,t){e.exports=r("aNJCr").getBundleURL("01IoP")+r("iE7OH").resolve("8TZvY")})),r.register("dwLHk",(function(e,t){e.exports=r("aNJCr").getBundleURL("01IoP")+r("iE7OH").resolve("lRGXr")})),r.register("llZDR",(function(e,t){e.exports=r("aNJCr").getBundleURL("01IoP")+r("iE7OH").resolve("2uuIg")})),r.register("34r8i",(function(e,t){e.exports=r("aNJCr").getBundleURL("01IoP")+r("iE7OH").resolve("cqrZO")})),r.register("95c8d",(function(e,t){e.exports=r("aNJCr").getBundleURL("01IoP")+r("iE7OH").resolve("22bIs")})),r.register("5hQtS",(function(e,t){e.exports=r("aNJCr").getBundleURL("01IoP")+r("iE7OH").resolve("cDgIq")})),r.register("kuYa0",(function(e,t){e.exports=r("aNJCr").getBundleURL("01IoP")+r("iE7OH").resolve("bTJMV")})),r.register("jSff3",(function(e,t){e.exports=r("aNJCr").getBundleURL("01IoP")+r("iE7OH").resolve("gQzcu")})),r.register("fM0dO",(function(e,t){e.exports=r("aNJCr").getBundleURL("01IoP")+r("iE7OH").resolve("hHiQq")})),r.register("u4rXz",(function(e,t){e.exports=r("aNJCr").getBundleURL("01IoP")+r("iE7OH").resolve("42GVa")})),r.register("5Go5j",(function(e,t){e.exports=r("aNJCr").getBundleURL("01IoP")+r("iE7OH").resolve("hhJow")})),r.register("mdeXp",(function(e,t){e.exports=r("aNJCr").getBundleURL("01IoP")+r("iE7OH").resolve("5MqMB")})),r.register("9QZQE",(function(e,t){e.exports=r("aNJCr").getBundleURL("01IoP")+r("iE7OH").resolve("h4NMr")})),r.register("hSFLf",(function(e,t){e.exports=r("aNJCr").getBundleURL("01IoP")+r("iE7OH").resolve("itbev")})),r.register("g7UZE",(function(e,t){e.exports=r("aNJCr").getBundleURL("01IoP")+r("iE7OH").resolve("csQ4I")})),r.register("8Veln",(function(e,t){var n=document.querySelector(".swiper-container"),o=document.querySelector(".logoContainer"),i=document.querySelector(".logo__item"),r=document.querySelector(".swiper-button-next"),a=document.querySelector(".swiper-button-next__icon"),s=1,l=Math.ceil((i.clientHeight*o.children.length+20*(o.children.length-1)-n.clientHeight)/100);r.addEventListener("click",(function(){s<=l?(s===l&&(a.style.transform="rotate(180deg)"),o.style.transform="translateY(".concat(-100*s,"px)"),++s):(s=1,o.style.transform="",a.style.transform="")}))})),r("iE7OH").register(JSON.parse('{"01IoP":"shopping-list.cb1cc729.js","410VS":"icons.f6bbcb0c.svg","6n8Da":"01-found-1.a728105c.png","2bqEp":"01-found-2.60510847.png","an9fi":"02-found-1.feda50b1.png","8TZvY":"02-found-2.ca1470b9.png","lRGXr":"03-found-1.89276286.png","2uuIg":"03-found-2.120110b5.png","cqrZO":"04-found-1.cbff70d4.png","22bIs":"04-found-2.eb46b36a.png","cDgIq":"05-found-1.0fdab6a1.png","bTJMV":"05-found-2.0f9c49b7.png","gQzcu":"06-found-1.c5359439.png","hHiQq":"06-found-2.f28ed76b.png","42GVa":"07-found-1.174022ef.png","hhJow":"07-found-2.ee2ee4c4.png","5MqMB":"08-found-1.7aca5d21.png","h4NMr":"08-found-2.16ff1d18.png","itbev":"09-found-1.8d6aef68.png","csQ4I":"09-found-2.7545e455.png"}'))}();
//# sourceMappingURL=shopping-list.cb1cc729.js.map
