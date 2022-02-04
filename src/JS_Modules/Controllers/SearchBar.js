import { searchMovies } from '../Models/Services.js';
import ListRender from './ListRender.js';
import { searchSpinners } from './SpinnersHandler.js';

const searchBar = async (searchForm) => {
  if (searchForm[0].value.trim().length > 0) {
    searchSpinners(true);

    const movieTitle = searchForm[0].value.trim();
    const moviesFetch = await searchMovies(movieTitle);

    ListRender(moviesFetch, movieTitle, true);
    searchSpinners(false);
  } else {
    searchForm.reset();
  }
};

export default searchBar;