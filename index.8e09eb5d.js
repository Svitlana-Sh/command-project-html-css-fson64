!function(){!function(){var e=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),n=function(){var t="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!t),e.classList.toggle("is-open"),bodyScrollLock[t?"enableBodyScroll":"disableBodyScroll"](document.body)};o.addEventListener("click",n),t.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(t){t.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))}();var e,o,t,n={openModalBuynowBtn:document.querySelector("[data-modalBuynow-open]"),closeModalBuynowBtn:document.querySelector("[data-modalBuynow-close]"),modalBuynow:document.querySelector("[data-modalBuynow]")};function d(){n.modalBuynow.classList.toggle("is-open")}n.openModalBuynowBtn.addEventListener("click",d),n.closeModalBuynowBtn.addEventListener("click",d);{var a={openModalproductsBtn:document.querySelector("[data-modalproducts-open]"),closeModalproductsBtn:document.querySelector("[data-modalproducts-close]"),modalproducts:document.querySelector("[data-modalproducts]")};function c(){a.modalproducts.classList.toggle("is-open")}a.openModalproductsBtn.addEventListener("click",c),a.closeModalproductsBtn.addEventListener("click",c)}{var l={openModalvideoBtn:document.querySelector("[data-modalvideo-open]"),closeModalvideoBtn:document.querySelector("[data-modalvideo-close]"),modalvideo:document.querySelector("[data-modalvideo]")};function r(){l.modalvideo.classList.toggle("is-open")}l.openModalvideoBtn.addEventListener("click",r),l.closeModalvideoBtn.addEventListener("click",r)}{var i={openModalLocationBtn:document.querySelector("[data-modalLocation-open]"),closeModalLocationBtn:document.querySelector("[data-modalLocation-close]"),modalLocation:document.querySelector("[data-modalLocation]")};function s(){i.modalLocation.classList.toggle("is-open")}i.openModalLocationBtn.addEventListener("click",s),i.closeModalLocationBtn.addEventListener("click",s)}{var u={openModalfranchiseBtn:document.querySelector("[data-modalfranchise-open]"),closeModalfranchiseBtn:document.querySelector("[data-modalfranchise-close]"),modalfranchise:document.querySelector("[data-modalfranchise]")};function m(){u.modalfranchise.classList.toggle("is-open")}u.openModalfranchiseBtn.addEventListener("click",m),u.closeModalfranchiseBtn.addEventListener("click",m)}e=document.querySelector(".js-modal-container"),o=document.querySelector(".js-open-modal"),document.querySelector(".js-close-modal"),t=function(){var t="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!t),e.classList.toggle("is-open"),bodyScrollLock[t?"enableBodyScroll":"disableBodyScroll"](document.body)},o.addEventListener("click",t),closeModalBtn.addEventListener("click",t),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&(mobileMenu.classList.remove("is-open"),openMenuBtn.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))}();
//# sourceMappingURL=index.8e09eb5d.js.map