import { api } from './_vars';
import { render } from './_renderPhotos';

export function getPhotos() {
  api
    .get('/curated')
    .then(res => {
      console.log(res);
      const photos = res.data.photos;
      render(photos,'Galería Principal');
    })
    .catch(error => {
      console.log(error);
    });

}

