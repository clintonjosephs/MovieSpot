import commentsModal from '../Views/Comments.js';
import footer from '../Views/Footer.js';
import header from '../Views/Header.js';
import moviesList from '../Views/MoviesList.js';
import commentsModalHandler from './ModalHandler.js';
import MoviesListManager from './MovieListManager.js';


const presentUI = async () => {
  document.body.insertAdjacentHTML('afterbegin', header());
  const main = document.querySelector('main');
  main.innerHTML = moviesList();
  document.body.insertAdjacentHTML('beforeend', footer());
  document.body.insertAdjacentHTML('beforeend', commentsModal());

  await MoviesListManager();
  
  const commentsModalBtn = document.querySelectorAll('.commentsModalBtn');
  commentsModalBtn.forEach((button) => {
    const moveID = button.getAttribute('data-movie-id');
    button.addEventListener('click', () => {
      commentsModalHandler(moveID);
    });
  });

};

export default presentUI;