import { searchForm, searchInput, searchIcon, api, uploaderContainer } from "./_vars";
import { render } from "./_renderPhotos";
import { getPhotos } from "./_getData";
import { listenToScreenWidth } from "./_getWidth";


function searchPhotos(query) {
  api
    .get(`search?query=${query}`)
    .then(res => {
      const photos = res.data.photos;
      console.log(photos);
      render(photos,`Resultados por: ${query}`);
      uploaderContainer.classList.add('inactive');
      const containerWrapper = document.querySelector('.gallery__container--wrapper');
      const countContainer = document.querySelectorAll('.gallery__image-container');
      const countArray = [...countContainer];

      listenToScreenWidth(countArray,containerWrapper);


      const searchReturn = document.querySelector('.return-gallery');
      searchReturn.classList.remove('inactive');

      searchReturn.addEventListener('click', () => {
        getPhotos();
        searchInput.value='';
        uploaderContainer.classList.remove('inactive')
      })

    })
    .catch(error => {
      console.log(error);
    });
}

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = searchInput.value;
  searchPhotos(query);
});


searchIcon.addEventListener('click', () => {
  const query = searchInput.value;
  searchPhotos(query);
});


