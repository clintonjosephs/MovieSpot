import Data from '../Models/Data.js';
import StorageManager from '../Models/StorageManager.js';
import Count from './Count.js';
import addLikes from './LikeHandler.js';
import commentsModalHandler from './ModalHandler.js';
import movieItems from './MovieItems.js';
import updateHeader from './updateHeader.js';

const commentClickEvent = () => {
  const commentsModalBtn = document.querySelectorAll('.commentsModalBtn');
  commentsModalBtn.forEach((button) => {
    const movieID = button.getAttribute('data-movie-id');
    button.addEventListener('click', () => {
      commentsModalHandler(movieID, button);
    });
    console.log(button);
  });
};

const likeClickEvent = () => {
  const likeBtns = document.querySelectorAll('.likeBtn');
  likeBtns.forEach((button) => {
    const movieID = button.getAttribute('data-movie-id');
    button.addEventListener('click', () => {
      const likeCounter = document.querySelector(`#likeNum-${movieID}`);
      const likeText = document.querySelector(`#likeText-${movieID}`);
      const commentsBtn = document.querySelector(`#comments-${movieID}`);
      const dataLike = StorageManager.checkLike(movieID);

      if (dataLike === undefined) {
        addLikes(movieID, likeCounter, likeText, button);
      } else {
        commentsBtn.click();
      }
    });
  });
};

const ListRender = async (moviesFetch, title = 'All', search = false) => {
  let movieBuilder = '<li class="row">';
  moviesFetch.forEach((movie, index) => {
    movieBuilder += movieItems(movie?.show ?? movie);
    const count = index + 1;
    if (count % 4 === 0 && count < moviesFetch.length) {
      movieBuilder += '</li><li class="row">';
    }
  });
  movieBuilder += '</li>';
  const moviesList = document.querySelector('.movies-list');

  let count = 0;

  if (search) {
    Data.start = 0;
    Data.search = true;
    moviesList.innerHTML = movieBuilder;
    count = Count(moviesFetch);
    updateHeader(title, count);
  } else {
    moviesList.insertAdjacentHTML('beforeend', movieBuilder);
  }
  commentClickEvent();
  likeClickEvent();
};

export default ListRender;
