import Data from '../Models/Data.js';
import Count from './Count.js';
import movieItems from './MovieItems.js';
import updateHeader from './updateHeader.js';
import { commentClickEvent } from './CommentManager.js';
import likeClickEvent from './LikeHandler.js';

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

  if (search) {
    Data.start = 0;
    Data.search = true;
    moviesList.innerHTML = movieBuilder;
    updateHeader(title, Count(moviesFetch));
  } else {
    moviesList.insertAdjacentHTML('beforeend', movieBuilder);
  }

  commentClickEvent();
  likeClickEvent();
};

export default ListRender;
