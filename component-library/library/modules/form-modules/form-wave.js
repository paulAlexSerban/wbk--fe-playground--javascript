(()=>{var n,t;n="pat",t="FormWave",document.querySelectorAll("[data-js-".concat(n,"=").concat(t,"]")).forEach((function(n){var t,e;t=document.querySelectorAll(".js-form-control label"),e=document.querySelectorAll(".js-form-control input"),t.forEach((function(n){n.innerHTML=n.innerText.split("").map((function(n,t){return'<span style="transition-delay:'.concat(50*t,'ms">').concat(n,"</span>")})).join("")})),e.forEach((function(n){n.addEventListener("keyup",(function(t){t.target===n&&n.value?n.classList.add("hasValue"):n.classList.remove("hasValue")}))}))}))})();