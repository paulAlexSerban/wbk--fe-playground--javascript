(()=>{"use strict";var e=function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:document).querySelector(e)},t=function(e,t){return e.classList.contains(t)},n="widget",a="NoteManager";document.querySelectorAll("[data-js-".concat(n,"=").concat(a,"]")).forEach((function(n){return function(n){var a={state:{},elements:{},data:{}},l=n,s=function(){a.elements.addButton.addEventListener("click",(function(e){e.preventDefault(),d()})),a.elements.ul.addEventListener("click",(function(e){t(e.target,"fa-pencil-square-o")?i(e):t(e.target,"fa-times")&&o(e)})),a.elements.hideButton.addEventListener("click",(function(){r()})),a.elements.searchInput.addEventListener("keyup",(function(e){c(e)}))},d=function(){if(""!==a.elements.addInput.value){var e=document.createElement("li"),t=document.createElement("p"),n=document.createElement("p"),s=document.createElement("img"),d=document.createElement("img"),i=document.createElement("input");s.className="fa-pencil-square-o",s.src=l.getAttribute("data-assets-pen-to-square-src"),d.className="fa-times",d.src=l.getAttribute("data-assets-fa-times-src"),i.className="note-manager__edit-note",i.setAttribute("type","text"),e.className="note-manager__note-item",n.className="note-manager__controls",t.textContent=a.elements.addInput.value,n.appendChild(s),n.appendChild(d),e.appendChild(t),e.appendChild(n),e.appendChild(i),a.elements.ul.appendChild(e),a.elements.addInput.value=""}},i=function(e){var t=e.target.parentNode;t.style.display="none";var n=t.previousElementSibling,a=t.nextElementSibling;a.style.display="block",a.value=n.textContent,a.addEventListener("keypress",(function(e){if(13===e.keyCode)if(""!==a.value)n.textContent=a.value,t.style.display="block",a.style.display="none";else{var l=a.parentNode;l.parentNode.removeChild(l)}}))},o=function(e){var t=e.target.parentNode.parentNode;t.parentNode.removeChild(t)},r=function(){a.elements.hideButton.checked?(a.elements.hideToggle.textContent="Unhide notes",a.elements.ul.style.display="none"):(a.elements.hideToggle.textContent="Hide notes",a.elements.ul.style.display="block")},c=function(e){var t=e.target.value.toUpperCase(),n=a.elements.ul.getElementsByTagName("li");Array.from(n).forEach((function(e){-1!==e.firstElementChild.textContent.toUpperCase().indexOf(t)?e.style.display="block":e.style.display="none"}))};a.elements.ul=e("ul",n),a.elements.addButton=e("#add-btn",n),a.elements.addInput=e("#add-input",n),a.elements.hideButton=e("#hide",n),a.elements.hideToggle=e("#hide-toggle",n),a.elements.searchInput=e("#search-note input",n),s()}(n)}))})();