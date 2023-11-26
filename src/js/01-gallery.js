import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

document.addEventListener('DOMContentLoaded', () => {
  const galleryContainer = document.querySelector('.gallery');
  const galleryMarkup = createGalleryMarkup(galleryItems);
  galleryContainer.innerHTML = galleryMarkup;

  // Ініціалізація SimpleLightbox замість basicLightbox
  new SimpleLightbox('.gallery a', { 
    captionsData: 'alt', 
    captionDelay: 250,
    captionPosition: 'bottom'
  });
});

function createGalleryMarkup(items) {
  return items.map(({ preview, original, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>
  `).join('');
}
