import { searchForm, searchInput, searchIcon, api, } from "./_vars";
import { render } from "./_renderPhotos";
import { getPhotos } from "./_getData";


function searchPhotos(query) {
  api
    .get(`search?query=${query}&page2&per_page=5`)
    .then(res => {
      const photos = res.data.photos;
      console.log(photos);
      render(photos,`Resultados por: ${query}`);

      const searchReturn = document.querySelector('.return-gallery');
      searchReturn.classList.remove('inactive');

      searchReturn.addEventListener('click', () => {
        getPhotos();
        searchInput.value='';
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


