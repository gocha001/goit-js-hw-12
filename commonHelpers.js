import{a as S,S as L,i as k}from"./assets/vendor-b11e2a50.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function f(o,r,s){return(await S.get("https://pixabay.com/api/",{params:{key:"45094022-90f186f65f49c334b8043619f",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:s,page:r}})).data}function m(o){const r=o.map(({webformatURL:s,largeImageURL:n,tags:e,likes:t,views:c,comments:w,downloads:v})=>`<li class="gallery-item">
           <a class="gallery-link" href="${n}">
             <img class="gallery-image" src="${s}"
             alt="${e}"
             width="360"
             />
           </a>
           <div class="thumb-block">
             <div class="block">
               <h2 class="title">Likes</h2>
               <p class="amount">${t}</p>
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
         </li>`).join("");h.insertAdjacentHTML("beforeend",r),q.refresh("show.simplelightbox")}const h=document.querySelector(".gallery");var q=new L(".gallery a",{captions:!0,captionsData:"alt",captionsDelay:250});const g=document.querySelector(".form");document.querySelector(".gallery");const i=document.querySelector(".loader"),l=document.querySelector(".btn-load-more"),y=document.querySelector(".isShowBtn");y.style.display="none";y.addEventListener("click",$);function $(){window.scrollTo(0,0)}window.onscroll=()=>{window.scrollY>500?y.style.display="block":y.style.display="none"};l.style.display="none";i.style.display="none";g.addEventListener("submit",E);const p=15;let u=null,d=1;async function E(o){if(o.preventDefault(),h.innerHTML="",d=1,l.style.display="none",u=o.currentTarget.elements.text.value.trim().toLowerCase(),u==0){a("Warning","The form field must be filled","#abd4f8");return}i.style.display="block";try{const{hits:s,totalHits:n}=await f(u,d,p);if(i.style.display="none",s.length==0){a("Error","Sorry, there are no images matching your search query. Please try again!","#f28111");return}m(s),n>p?(l.addEventListener("click",b),l.style.display="block"):a("Info","We re sorry, but you ve reached the end of search results.","#f28111")}catch{a("Error","Oops... Something went wrong.","#e97782"),i.style.display="none"}finally{g.reset()}}async function b(o){o.preventDefault(),l.style.display="none",d+=1,i.style.display="block";try{const{hits:r,totalHits:s}=await f(u,d,p);i.style.display="none",m(r);const n=document.querySelector(".gallery-item"),{height:e}=n.getBoundingClientRect();if(I(e),Math.ceil(s/p)==d){a("Info","We re sorry, but you ve reached the end of search results.","#f28111"),l.removeEventListener("click",b);return}else l.style.display="block"}catch{a("Error","Oops... Something went wrong.","#e97782")}}function I(o){window.scrollBy({top:o*2.7,behavior:"smooth"})}function a(o,r,s){k.error({title:`${o}`,message:`${r}`,position:"topRight",transitionIn:"bounceInDown",backgroundColor:`${s}`})}
//# sourceMappingURL=commonHelpers.js.map
