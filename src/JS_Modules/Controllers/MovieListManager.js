import { getMovies } from '../Models/Services.js';
import ListRender from './ListRender.js';
import { overlayHandler } from './SpinnersHandler.js';

const MoviesListManager = async () => {
  overlayHandler(true);
  const moviesFetch = await getMovies();
  await ListRender(moviesFetch);
  overlayHandler(false);
};

export default MoviesListManager;