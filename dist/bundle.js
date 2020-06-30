!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);t(1);const r=t(5);let o=JSON.parse(localStorage.getItem("gameBoard")),a=JSON.parse(localStorage.getItem("players")),i=JSON.parse(localStorage.getItem("GameTurn"));if(null==o&&(o=["","","","","","","","",""]),null==a){a=[];document.getElementById("form").style.display="flex";document.getElementById("board-table").style.display="none"}null==i&&(i=0);const c=(e=>{let n=null;const t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]];return{turnChange:e=>{var n;n=e=0===e?1:0,localStorage.setItem("GameTurn",JSON.stringify(n))},turn:e,gameOver:()=>{var e;if(e=o,t.forEach(t=>{const[r,o,i]=t,[c,l]=a;"X"===e[r]&&"X"===e[o]&&"X"===e[i]?n=c:"O"===e[r]&&"O"===e[o]&&"O"===e[i]&&(n=l)}),null==n){if(!o.includes("")){const e=document.getElementById("result"),n=document.createElement("P"),t=document.createElement("BUTTON");t.innerHTML="Play Again",n.innerHTML="Draw",e.append(n,t),t.addEventListener("click",()=>{localStorage.clear(),window.location.reload()})}}else{const e=document.getElementById("result"),t=document.createElement("P"),r=document.createElement("BUTTON");r.innerHTML="Play Again",t.innerHTML=`Congratulations, ${n.name}! You won`,e.append(t,r),r.addEventListener("click",()=>{localStorage.clear(),window.location.reload()})}},ifGameOver:()=>null!==n}})(i),l=(()=>{const e=document.getElementsByClassName("position");const n=()=>{c.ifGameOver()&&[...document.getElementsByClassName("board-cell")].forEach(e=>{e.setAttribute("class","disabled")})},t=()=>{[...e].forEach((e,n)=>{!function(e,n){if("X"===o[n]){const n=document.createElement("P");n.innerHTML="X",e.appendChild(n)}else if("O"===o[n]){const n=document.createElement("P");n.innerHTML="O",e.appendChild(n)}else{const t=document.createElement("BUTTON");t.setAttribute("class","board-cell"),t.setAttribute("data",""+n),t.addEventListener("click",l.updateBoard),e.appendChild(t)}}(e,n)}),c.gameOver(),n(),(()=>{if(null!==a&&0!==a.length)if(0===i){const e=document.createElement("P"),n=document.getElementById("result");e.innerHTML="Player "+a[0].name,n.appendChild(e)}else{const e=document.createElement("P"),n=document.getElementById("result");e.innerHTML="Player "+a[1].name,n.appendChild(e)}})()},r=function(e){localStorage.setItem("gameBoard",JSON.stringify(e))};return{updateBoard:e=>{o[e.target.attributes.data.value]=0===c.turn?"X":"O",r(o),c.turnChange(i),window.location.reload()},initialize:()=>t(),save:r}})();document.getElementById("submit-form").addEventListener("click",(function(){const e=document.getElementById("form");a.push(r(e[0].value)),a.push(r(e[1].value)),a[0].savePlayers(a),e.style.display="none"})),l.initialize()},function(e,n,t){var r=t(2),o=t(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function c(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function l(e,n){for(var t={},r=[],o=0;o<e.length;o++){var a=e[o],l=n.base?a[0]+n.base:a[0],u=t[l]||0,s="".concat(l," ").concat(u);t[l]=u+1;var d=c(s),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:s,updater:v(f,n),references:1}),r.push(s)}return r}function u(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var s,d=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function f(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function m(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,g=0;function v(e,n){var t,r,o;if(n.singleton){var a=g++;t=p||(p=u(n)),r=f.bind(null,t,a,!1),o=f.bind(null,t,a,!0)}else t=u(n),r=m.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=l(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=c(t[r]);i[o].references--}for(var a=l(e,n),u=0;u<t.length;u++){var s=c(t[u]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}t=a}}}},function(e,n,t){(n=t(4)(!1)).push([e.i,"body {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.board {\n  display: grid;\n  grid-template: repeat(3, 100px) / repeat(3, 100px);\n}\n\n.position {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: blue 1px solid;\n}\n\n.disabled {\n  pointer-events: none;\n  background: gray;\n}\n\n.form {\n  display: none;\n  flex-direction: column;\n  text-align: center;\n}\n\ninput {\n  margin-bottom: 15px;\n}\n\n.board-cell {\n  height: 100%;\n  width: 100%;\n  background: transparent;\n  border: none;\n}\n",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(a).concat([o]).join("\n")}var i,c,l;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&o[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},function(e,n){e.exports=e=>({name:e,savePlayers:function(e){localStorage.setItem("players",JSON.stringify(e))}})}]);