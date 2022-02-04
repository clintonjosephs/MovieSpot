import Data from '../Models/Data.js';
import { getMovies } from '../Models/Services.js';
import ListRender from './ListRender.js';
import { overlayHandler } from './SpinnersHandler.js';

const MoviesListManager = async () => {
  overlayHandler(true);
  const moviesFetch = await getMovies();
  await ListRender(moviesFetch);
  overlayHandler(false);
};

window.onscroll = () => {
  if (Math.round((window.innerHeight + window.scrollY)) >= document.body.offsetHeight) {
    if (Data.start < Data.allData.length) {
      alert('i got here');
    }
  }
};

export default MoviesListManager;