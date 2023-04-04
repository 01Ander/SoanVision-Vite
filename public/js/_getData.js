import { api } from './_vars';
import { listenToScreenWidth } from './_getWidth';
import { render } from './_renderPhotos';


export function getPhotos() {
  api
    .get('/curated')
    .then(res => {
      const photos = res.data.photos;
      render(photos,'Galería Principal')
      // listenToScreenWidth(photos)
      const containerWrapper = document.querySelector('.gallery__container--wrapper');
      const countContainer = document.querySelectorAll('.gallery__image-container');
      const countArray = [...countContainer];

      listenToScreenWidth(countArray,containerWrapper);

    })
    .catch(error => {
      console.log(error);
    });
}

window.addEventListener('resize', getPhotos);


