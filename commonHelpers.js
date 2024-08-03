import{a as S,S as L,i as k}from"./assets/vendor-b11e2a50.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function f(s,t,o){return(await S.get("https://pixabay.com/api/",{params:{key:"45094022-90f186f65f49c334b8043619f",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:o,page:t}})).data}function h(s){const t=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:r,views:c,comments:w,downloads:v})=>`<li class="gallery-item">
           <a class="gallery-link" href="${n}">
             <img class="gallery-image" src="${o}"
             alt="${e}"
             width="360"
             />
           </a>
           <div class="thumb-block">
             <div class="block">
               <h2 class="title">Likes</h2>
               <p class="amount">${r}</p>
             </div>
             <div class="block">
               <h2 class="title">Views</h2>
               <p class="amount">${c}</p>
             </div>
             <div class="block">
               <h2 class="title">Comments</h2>
               <p class="amount">${w}</p>
             </div>
             <div class="block">
               <h2 class="title">Downloads</h2>
               <p class="amount">${v}</p>
             </div>
           </div>
         </li>`).join("");m.insertAdjacentHTML("beforeend",t),$.refresh("show.simplelightbox")}const m=document.querySelector(".gallery");var $=new L(".gallery a",{captions:!0,captionsData:"alt",captionsDelay:250});const g=document.querySelector(".form"),q=document.querySelector(".gallery"),i=document.querySelector(".loader"),l=document.querySelector(".btn-load-more"),y=document.querySelector(".isShowBtn");y.style.display="none";y.addEventListener("click",E);function E(){window.scrollTo(0,0)}window.onscroll=()=>{window.scrollY>700?y.style.display="block":y.style.display="none"};l.style.display="none";i.style.display="none";g.addEventListener("submit",I);const p=15;let u=null,d=1;async function I(s){if(s.preventDefault(),m.innerHTML="",d=1,l.style.display="none",u=s.currentTarget.elements.text.value.trim().toLowerCase(),u==0){a("Warning","The form field must be filled","#abd4f8");return}i.style.display="block";try{const{hits:o,totalHits:n}=await f(u,d,p);if(i.style.display="none",o.length==0){a("Error","Sorry, there are no images matching your search query. Please try again!","#f28111");return}h(o),n>p?(l.addEventListener("click",b),l.style.display="block"):a("Info","We re sorry, but you ve reached the end of search results.","#f28111")}catch{a("Error","Oops... Something went wrong.","#e97782"),i.style.display="none"}finally{g.reset()}}async function b(s){s.preventDefault(),l.style.display="none",d+=1,i.style.display="block";try{const{hits:t,totalHits:o}=await f(u,d,p);if(i.style.display="none",h(t),O(),Math.ceil(o/p)==d){a("Info","We re sorry, but you ve reached the end of search results.","#f28111"),l.removeEventListener("click",b);return}else l.style.display="block"}catch{a("Error","Oops... Something went wrong.","#e97782")}}function O(){window.scrollBy({top:q.getBoundingClientRect().height*.14,behavior:"smooth"})}function a(s,t,o){k.error({title:`${s}`,message:`${t}`,position:"topRight",transitionIn:"bounceInDown",backgroundColor:`${o}`})}
//# sourceMappingURL=commonHelpers.js.map
