(()=>{const e=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),n=()=>{const t="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!t),e.classList.toggle("is-open");bodyScrollLock[t?"enableBodyScroll":"disableBodyScroll"](document.body)};o.addEventListener("click",n),t.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",(t=>{t.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}));const c={openModalLocationBtn:document.querySelector("[data-modalLocation-open]"),closeModalLocationBtn:document.querySelector("[data-modalLocation-close]"),modalLocation:document.querySelector("[data-modalLocation]")};function a(){c.modalLocation.classList.toggle("is-open")}c.openModalLocationBtn.addEventListener("click",a),c.closeModalLocationBtn.addEventListener("click",a)})();
//# sourceMappingURL=index.107376e4.js.map