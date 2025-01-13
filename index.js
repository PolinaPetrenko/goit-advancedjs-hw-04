import{a as p,S,i as m}from"./assets/vendor-B6jJ9_I0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))g(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&g(d)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function g(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();const h=r=>r.reduce((e,s)=>e+`
            <li class="gallery-card">
              <a class="gallery-img-orig" href="${s.largeImageURL}">
                <img class="gallery-img" src="${s.webformatURL}" alt="${s.tags}" />
                <div class="img-data">
                 <div class="img-data-column img-likes">
                  <p class="img-title">Likes</p>
                  <p class="img-value">${s.likes}</p>
                 </div>
                 <div class="img-data-column img-views">
                  <p class="img-title">Views</p>
                  <p class="img-value">${s.views}</p>
                 </div>
                 <div class="img-data-column img-comments">
                  <p class="img-title">Comments</p>
                  <p class="img-value">${s.comments}</p>
                 </div>
                  <div class="img-data-column img-downloads">
                  <p class="img-title">Downloads</p>
                  <p class="img-value">${s.downloads}</p>
                 </div>
                </div>
              </a>
            </li>
           `,"");p.defaults.baseURL="https://pixabay.com";const f=(r,e)=>{const s={q:r,page:e,key:"48186759-c0bb4a6385eae122fd1e343f0",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15};return p.get("/api/",{params:s})},u=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),l=document.querySelector(".js-loader");function y(){l.textContent="Loading images, please wait...",l.classList.remove("is-hidden")}function v(){l.classList.add("is-hidden"),l.textContent=""}const o=document.querySelector(".js-load-more-btn");let i=1,c="",L=new S(".gallery-card a",{captionsData:"alt",captionDelay:250});const q=async r=>{try{if(r.preventDefault(),c=r.currentTarget.elements.user_query.value.trim(),c===""){m.error({message:"Search value should not be empty!",position:"topRight"});return}u.reset(),n.innerHTML="",o.classList.add("is-hidden"),y(),i=1;const e=await f(c,i);if(v(),e.data.totalHits===0){m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.innerHTML="",u.reset();return}e.data.totalHits>15&&(o.classList.remove("is-hidden"),o.addEventListener("click",b)),n.innerHTML=h(e.data.hits),w(),L.refresh()}catch(e){console.log(e)}};u.addEventListener("submit",q);const b=async r=>{try{o.classList.add("is-hidden"),y(),i++;const e=await f(c,i);v(),o.classList.remove("is-hidden"),n.insertAdjacentHTML("beforeend",h(e.data.hits)),w(),L.refresh(),e.data.totalHits<=i*15&&(o.classList.add("is-hidden"),o.removeEventListener("click",b),m.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(e){console.log(e)}};function w(){const r=document.querySelector(".gallery-card");if(!r)return;const s=r.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
