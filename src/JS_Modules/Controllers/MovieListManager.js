import { getMovies } from '../Models/Services.js';
import ListRender from './ListRender.js';
import { overlayHandler } from './SpinnersHandler.js';

const MoviesListManager = async () => {
  overlayHandler(true);
  const items = ['a', 'b', 'c', 'd', 'e'];
  const index = Math.floor(Math.random() * 4);
  const moviesFetch = await getMovies(items[index]);
  await ListRender(moviesFetch, items[index]);
  overlayHandler(false);
};

export default MoviesListManager;