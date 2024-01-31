import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('ul.gallery'),
};
refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const query = event.target.elements.query.value;
  getImagesByName(query).then(data => {
    renderMarkup(data.hits);
  });
  event.target.reset();
}

function getImagesByName(name) {
  const BASE_URL = 'https://pixabay.com/api';
  const PARAMS = `/?key=42132229-e88b92984f0d2a7001cb07c65&image_type=photo&orientation=horizontal&safesearch=true&q=${name}`;
  const url = BASE_URL + PARAMS;

  return fetch(url).then(res => res.json());
}

function galleryTemplate({
  largeImageURL,
  webformatURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<a class="gallery-link" href="${largeImageURL}">
        <img
          class="gallery-image"
          src="${webformatURL}"
          data-source="${largeImageURL}"
          alt="${tags}"
          data-likes="${likes}"
          data-views="${views}"
          data-comments="${comments}"
          data-downloads="${downloads}"
        />
      </a>
    `;
}

function renderMarkup(images) {
  const markup = images.map(galleryTemplate).join('');
  refs.gallery.innerHTML = markup;
}

// function blockAction(e) {
//   if (e.target.nodeName !== 'A') e.preventDefault();
// }
