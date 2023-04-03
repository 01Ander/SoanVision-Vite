import { api } from './_vars';
import { render } from './_renderPhotos';
import { listenToScreenWidth } from './_listenWidth';

export function getPhotos() {
  api
    .get('/curated')
    .then(res => {
      console.log(res);
      const photos = res.data.photos;
      // render(photos,'Galería Principal');
      listenToScreenWidth(photos,'Galería Principal');
    })
    .catch(error => {
      console.log(error);
    });

}

