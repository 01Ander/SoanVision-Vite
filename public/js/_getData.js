import { api } from './_vars';
import { listenToScreenWidth } from './_getWidth';

import { render } from './_renderPhotos';
import { listenToScreenWidth } from './_listenWidth';

export function getPhotos() {
  api
    .get('/curated')
    .then(res => {
      console.log(res);
      const photos = res.data.photos;
      render(photos,'contenedor grande')
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


// window.addEventListener('resize', listenToScreenWidth(countArray,containerWrapper));