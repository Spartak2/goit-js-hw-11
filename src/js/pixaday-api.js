import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const loader = document.querySelector('.loader');
const KEY = '43280076-efaf032a147c4a401dc5ab87e';
const BASE_URI = 'https://pixabay.com/api/';

export function getImages(QUERY) {
  loader.style.display = 'flex';
  const LINK = `${BASE_URI}?key=${KEY}&q=${QUERY}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(LINK)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      return data;
    })
    .catch(error => {
      console.log(error);
    });
}
