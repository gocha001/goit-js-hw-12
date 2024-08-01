export default function createImagesMarkup(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
           <a class="gallery-link" href="${largeImageURL}">
             <img class="gallery-image" src="${webformatURL}"
             alt="${tags}"
             width="360"
             />
           </a>
           <div class="thumb-block">
             <div class="block">
               <h2 class="title">Likes</h2>
               <p class="amount">${likes}</p>
             </div>
             <div class="block">
               <h2 class="title">Views</h2>
               <p class="amount">${views}</p>
             </div>
             <div class="block">
               <h2 class="title">Comments</h2>
               <p class="amount">${comments}</p>
             </div>
             <div class="block">
               <h2 class="title">Downloads</h2>
               <p class="amount">${downloads}</p>
             </div>
           </div>
         </li>`
    )
    .join('');

  container.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh('show.simplelightbox');

  return;
}

export const container = document.querySelector('.gallery');

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

var lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionsDelay: 250,
});
