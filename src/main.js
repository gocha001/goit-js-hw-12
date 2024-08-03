import searchImagesByQuery from './js/pixabay-api.js';

import createImagesMarkup from './js/render-functions.js';
import { container } from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const btnLoadMore = document.querySelector('.btn-load-more');

const scrollUp = document.querySelector('.isShowBtn');
scrollUp.style.display = 'none';
scrollUp.addEventListener('click', handleScroll);
function handleScroll() {
  window.scrollTo(0, 0);
}

window.onscroll = () => {
  if (window.scrollY > 700) {
    scrollUp.style.display = 'block';
  } else {
    scrollUp.style.display = 'none';
  }
};

btnLoadMore.style.display = 'none';

loader.style.display = 'none';

form.addEventListener('submit', handleSubmit);

const per_page = 15;
let sear = null;
let page = 1;

async function handleSubmit(event) {
  event.preventDefault();
  container.innerHTML = '';
  page = 1;
  btnLoadMore.style.display = 'none';

  const search = event.currentTarget.elements;
  sear = search.text.value.trim().toLowerCase();

  if (sear == 0) {
    myIziToast('Warning', 'The form field must be filled', '#abd4f8');
    return;
  }
  loader.style.display = 'block';

  try {
    const { hits, totalHits } = await searchImagesByQuery(sear, page, per_page);

    loader.style.display = 'none';

    if (hits.length == 0) {
      myIziToast(
        'Error',
        'Sorry, there are no images matching your search query. Please try again!',
        '#f28111'
      );
      return;
    }
    createImagesMarkup(hits);

    if (totalHits > per_page) {
      btnLoadMore.addEventListener('click', handleSubmitLoadMore);
      btnLoadMore.style.display = 'block';
    } else {
      myIziToast(
        'Info',
        'We re sorry, but you ve reached the end of search results.',
        '#f28111'
      );
    }
  } catch (error) {
    myIziToast('Error', 'Oops... Something went wrong.', '#e97782');
    loader.style.display = 'none';
  } finally {
    form.reset();
  }
}

async function handleSubmitLoadMore(event) {
  event.preventDefault();
  btnLoadMore.style.display = 'none';
  page += 1;
  loader.style.display = 'block';

  try {
    const { hits, totalHits } = await searchImagesByQuery(sear, page, per_page);

    loader.style.display = 'none';

    createImagesMarkup(hits);

    const liEl = document.querySelector('.gallery-item');
    const { height } = liEl.getBoundingClientRect();

    setScrolling(height);

    const totalPage = Math.ceil(totalHits / per_page);
    if (totalPage == page) {
      myIziToast(
        'Info',
        'We re sorry, but you ve reached the end of search results.',
        '#f28111'
      );
      btnLoadMore.removeEventListener('click', handleSubmitLoadMore);
      return;
    } else {
      btnLoadMore.style.display = 'block';
    }
  } catch (error) {
    myIziToast('Error', 'Oops... Something went wrong.', '#e97782');
  }
}

function setScrolling(height) {
  window.scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}

function myIziToast(title, message, color) {
  iziToast.error({
    title: `${title}`,
    message: `${message}`,
    position: 'topRight',
    transitionIn: 'bounceInDown',
    backgroundColor: `${color}`,
  });
}
