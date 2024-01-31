import"./assets/vendor-491d46cf.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const a={form:document.querySelector(".form"),gallery:document.querySelector("ul.gallery")};a.form.addEventListener("submit",l);function l(r){r.preventDefault();const o=r.target.elements.query.value;c(o).then(n=>{f(n.hits)}),r.target.reset()}function c(r){const o="https://pixabay.com/api",n=`/?key=42132229-e88b92984f0d2a7001cb07c65&image_type=photo&orientation=horizontal&safesearch=true&q=${r}`,s=o+n;return fetch(s).then(e=>e.json())}function u({largeImageURL:r,webformatURL:o,tags:n,likes:s,views:e,comments:t,downloads:i}){return`<a class="gallery-link" href="${r}">
        <img
          class="gallery-image"
          src="${o}"
          data-source="${r}"
          alt="${n}"
          data-likes="${s}"
          data-views="${e}"
          data-comments="${t}"
          data-downloads="${i}"
        />
      </a>
    `}function f(r){const o=r.map(u).join("");a.gallery.innerHTML=o}
//# sourceMappingURL=commonHelpers.js.map
