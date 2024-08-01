import{a as w,S as v,i as S}from"./assets/vendor-b11e2a50.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&u(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();async function y(r,t){return(await w.get("https://pixabay.com/api/",{params:{key:"45094022-90f186f65f49c334b8043619f",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:"15",page:t}})).data}function p(r){const t=r.map(({webformatURL:s,largeImageURL:u,tags:e,likes:o,views:a,comments:g,downloads:b})=>`<li class="gallery-item">
           <a class="gallery-link" href="${u}">
             <img class="gallery-image" src="${s}"
             alt="${e}"
             width="360"
             />
           </a>
           <div class="thumb-block">
             <div class="block">
               <h2 class="title">Likes</h2>
               <p class="amount">${o}</p>
             </div>
             <div class="block">
               <h2 class="title">Views</h2>
               <p class="amount">${a}</p>
             </div>
             <div class="block">
               <h2 class="title">Comments</h2>
               <p class="amount">${g}</p>
             </div>
             <div class="block">
               <h2 class="title">Downloads</h2>
               <p class="amount">${b}</p>
             </div>
           </div>
         </li>`).join("");h.insertAdjacentHTML("beforeend",t),L.refresh("show.simplelightbox")}const h=document.querySelector(".gallery");var L=new v(".gallery a",{captions:!0,captionsData:"alt",captionsDelay:250});const m=document.querySelector(".form"),k=document.querySelector(".gallery"),n=document.querySelector(".loader"),i=document.querySelector(".btn-load-more");i.style.display="none";n.style.display="none";m.addEventListener("submit",O);i.addEventListener("click",$);let d=null,c=1,f=0;async function O(r){try{if(r.preventDefault(),h.innerHTML="",c=1,i.style.display="none",d=r.currentTarget.elements.text.value.trim().toLowerCase(),d==0){l("The form field must be filled","#abd4f8");return}n.style.display="block",await y(d,c).then(s=>{if(f=s.totalHits,n.style.display="none",s.hits.length==0){l("Sorry, there are no images matching your search query. Please try again!","#f28111");return}p(s.hits),i.style.display="block"}).catch(s=>{l("Oops... Something went wrong.","#e97782"),n.style.display="none"}).finally(()=>m.reset())}catch{l("Oops... Something went wrong.","#e97782")}}async function $(r){try{if(r.preventDefault(),i.style.display="none",c+=1,f<c*15){n.style.display="none",l("We re sorry, but you ve reached the end of search results.","#f28111");return}n.style.display="block",await y(d,c).then(t=>{console.log(t),n.style.display="none",p(t.hits),i.style.display="block",q()}).catch(t=>{l("Oops... Something went wrong.","#e97782"),n.style.display="none"})}catch{l("Oops... Something went wrong.","#e97782")}}function q(){window.scrollBy({top:k.getBoundingClientRect().height*.14,behavior:"smooth"})}function l(r,t){S.error({title:"Error",message:`${r}`,position:"topRight",transitionIn:"bounceInDown",backgroundColor:`${t}`})}
//# sourceMappingURL=commonHelpers.js.map
