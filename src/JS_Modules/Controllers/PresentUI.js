import commentsModal from '../Views/Comments.js';
import footer from '../Views/Footer.js';
import header from '../Views/Header.js';
import moviesList from '../Views/MoviesList.js';
import MoviesListManager from './MovieListManager.js';
import searchBar from './SearchBar.js';

const presentUI = async () => {
  document.body.insertAdjacentHTML('afterbegin', header());
  const main = document.querySelector('main');
  main.innerHTML = moviesList();
  document.body.insertAdjacentHTML('beforeend', footer());
  document.body.insertAdjacentHTML('beforeend', commentsModal());
  
  await MoviesListManager();

  const searchForm = document.querySelector('.searchMovie');
  searchForm.addEventListener('submit', (e) => { e.preventDefault(); searchBar(searchForm); });
};

export default presentUI;
