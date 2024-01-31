import{S as c}from"./assets/vendor-b41a7778.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const s={form:document.querySelector(".form"),gallery:document.querySelector(".gallery")};s.form.addEventListener("submit",f);function u(t){const o="https://pixabay.com/api",n=`/?key=42132229-e88b92984f0d2a7001cb07c65&image_type=photo&orientation=horizontal&safesearch=true&q=${t}`,l=o+n;return fetch(l).then(e=>e.json())}function f(t){t.preventDefault();const o=t.target.elements.query.value;u(o).then(n=>{d(n.hits)}),t.target.reset()}function m({largeImageURL:t,webformatURL:o,tags:n,likes:l,views:e,comments:r,downloads:i}){return`<a class="gallery-link" href="${t}">
        <img
          class="gallery-image"
          src="${o}"
          data-source="${t}"
          alt="${n}"
          data-likes="${l}"
          data-views="${e}"
          data-comments="${r}"
          data-downloads="${i}"
        />
      </a>
    `}function d(t){const o=t.map(m).join("");s.gallery.innerHTML=o}let a=new c(".gallery a");a.on("show.simplelightbox",function(){});a.on("error.simplelightbox",function(t){console.log(t)});
//# sourceMappingURL=commonHelpers.js.map
