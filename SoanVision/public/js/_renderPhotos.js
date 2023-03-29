import {galleryContainer} from './_vars';
import { openModal } from './_modal';

export function render(arr,title) {
  galleryContainer.innerHTML='';

  const galleryHeader =document.createElement('div');
  galleryHeader.classList.add('gallery__header');

  const galleryTitle = document.createElement('h1');
  galleryTitle.innerText=title;
  galleryTitle.classList.add('gallery__title');

  const searchReturn =document.createElement('span');
  searchReturn.innerText='Regresar a la galería principal';
  searchReturn.classList.add('return-gallery');
  searchReturn.classList.add('inactive');

  const toRender = [];
  arr.forEach(element => {
    const srcImage = element.src.original;
    const autor = element.photographer;
    const article = document.createElement('div');
    const imgWrapper = document.createElement('div');
    const img = document.createElement('img');

    article.classList.add('gallery__image-container');
    imgWrapper.classList.add('gallery__image-wrapper');
    img.classList.add('gallery__image');

    imgWrapper.appendChild(img);

    img.addEventListener('load', () => {
      imgWrapper.style.backgroundColor = 'transparent';
    });

    img.src = srcImage;
    img.alt = element.alt;
    article.appendChild(imgWrapper);
    toRender.push(article);

    img.addEventListener('click', () => {
      openModal(srcImage, autor);
    });
  });
  galleryHeader.appendChild(galleryTitle);
  galleryHeader.appendChild(searchReturn);
  galleryContainer.appendChild(galleryHeader);
  galleryContainer.append(...toRender);
}