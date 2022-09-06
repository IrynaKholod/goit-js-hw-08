// Add imports above this line
import Simplelightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const renderList = (pictures) =>
pictures.reduce(
    (acc, { preview, original, description }) => acc + `
    <a class=class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  `, "");


const divEl = document.querySelector(".gallery");
divEl.insertAdjacentHTML("beforeend", renderList(galleryItems));

let gallery = new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.8,
  captionsData: 'alt',
  captionDelay: 250,
  disableRightClick: true,
  alertError: false,
  });