(()=>{"use strict";var t="widget",e="CoinGame";document.querySelectorAll("[data-js-".concat(t,"=").concat(e,"]")).forEach((function(t){var e,o,n,r,c,a;e=document.querySelector("#player"),o=document.querySelector("#coin"),n=function(t,e){var o=c(t.style.top);t.style.top="".concat(o+e,"px")},r=function(t,e){var o=c(t.style.left);t.style.left="".concat(o+e,"px")},c=function(t){return t?parseInt(t.slice(0,-2)):100},(a=function(){var t=Math.floor(Math.random()*window.innerWidth),e=Math.floor(Math.random()*window.innerHeight);o.style.top="".concat(e,"px"),o.style.left="".concat(t,"px")})(),window.addEventListener("keyup",(function(t){var c,i,l;"ArrowDown"===t.key||"Down"===t.key?n(e,50):"ArrowUp"===t.key||"Up"===t.key?n(e,-50):"ArrowRight"===t.key||"Right"===t.key?(r(e,50),e.style.transform="scale(1,1)"):"ArrowLeft"!==t.key&&"Left"!==t.key||(r(e,-50),e.style.transform="scale(-1,1)"),c=o,i=e.getBoundingClientRect(),l=c.getBoundingClientRect(),i.top+i.height<l.top||i.top>l.top+l.height||i.left+i.width<l.left||i.left>l.left+l.width||a()}))}))})();