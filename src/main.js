import searchImagesByQuery from './js/pixabay-api.js';

import createImagesMarkup from './js/render-functions.js';
import { container } from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const btnLoadMore = document.querySelector('.btn-load-more');

btnLoadMore.style.display = 'none';

loader.style.display = 'none';

form.addEventListener('submit', handleSubmit);
btnLoadMore.addEventListener('click', handleSubmitLoadMore);

let sear = null;
let page = 1;
let totalHits = 0;

async function handleSubmit(event) {
  try {
    event.preventDefault();
    container.innerHTML = '';
    page = 1;
    btnLoadMore.style.display = 'none';

    const search = event.currentTarget.elements;
    sear = search.text.value.trim().toLowerCase();

    if (sear == 0) {
      myIziToast('The form field must be filled', '#abd4f8');
      return;
    }
    loader.style.display = 'block';

    await searchImagesByQuery(sear, page)
      .then(data => {
        totalHits = data.totalHits;
        loader.style.display = 'none';
        if (data.hits.length == 0) {
          myIziToast(
            'Sorry, there are no images matching your search query. Please try again!',
            '#f28111'
          );
          return;
        }
        createImagesMarkup(data.hits);
        btnLoadMore.style.display = 'block';
      })
      .catch(error => {
        myIziToast('Oops... Something went wrong.', '#e97782');
        loader.style.display = 'none';
      })
      .finally(() => form.reset());
  } catch (error) {
    myIziToast('Oops... Something went wrong.', '#e97782');
  }
}

async function handleSubmitLoadMore(event) {
  try {
    event.preventDefault();
    btnLoadMore.style.display = 'none';
    page += 1;
    if (totalHits < page * 15) {
      loader.style.display = 'none';
      myIziToast(
        'We re sorry, but you ve reached the end of search results.',
        '#f28111'
      );
      return;
    }
    loader.style.display = 'block';

    await searchImagesByQuery(sear, page)
      .then(data => {
        console.log(data);
        loader.style.display = 'none';

        createImagesMarkup(data.hits);
        btnLoadMore.style.display = 'block';
        setScrolling();
      })
      .catch(error => {
        myIziToast('Oops... Something went wrong.', '#e97782');
        loader.style.display = 'none';
      });
  } catch (error) {
    myIziToast('Oops... Something went wrong.', '#e97782');
  }
}

function setScrolling() {
  window.scrollBy({
    top: gallery.getBoundingClientRect().height * 0.14,
    behavior: 'smooth',
  });
}

function myIziToast(message, color) {
  iziToast.error({
    title: 'Error',
    message: `${message}`,
    position: 'topRight',
    transitionIn: 'bounceInDown',
    backgroundColor: `${color}`,
  });
}
