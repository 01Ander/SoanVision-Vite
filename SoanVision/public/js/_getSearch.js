import { searchForm, searchInput, searchIcon, api } from "./_vars";
import { render } from "./_renderPhotos";


function searchPhotos(query) {
  api
    .get(`search?query=${query}&page2&per_page=5`)
    .then(res => {
      const photos = res.data.photos;
      console.log(photos);

      render(photos,`Resultados por: ${query}`,`x`);
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