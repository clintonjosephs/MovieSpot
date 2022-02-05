import Data from '../Models/Data.js';
import { getMovies, pushDisplay } from '../Models/Services.js';
import Count from './Count.js';
import ListRender from './ListRender.js';
import { overlayHandler } from './SpinnersHandler.js';
import updateHeader from './updateHeader.js';

const MoviesListManager = async () => {
  overlayHandler(true);
  const moviesFetch = await getMovies();
  await ListRender(moviesFetch);
  updateHeader('All', Count(Data.fullData));
  overlayHandler(false);
};

window.onscroll = async () => {
  if (Math.round((window.innerHeight + window.scrollY)) >= (document.body.offsetHeight - 400)) {
      if (Data.start < Data.allData.length && !Data.search) {     
          const li = document.querySelector('.movies-list li');
          li.style.animation = "none";
          const moviesFetch = pushDisplay();
          await ListRender(moviesFetch);
      }
  }
};

export default MoviesListManager;