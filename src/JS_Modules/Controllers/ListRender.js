import Data from '../Models/Data.js';
import StorageManager from '../Models/StorageManager.js';
import Count from './Count.js';
import addLikes from './LikeHandler.js';
import commentsModalHandler from './ModalHandler.js';

const movieItems = (showDetails) => `<div class="col-md-3 ${Data.start <= 1 ? "animate" : '' }">
                <div class="card my-3">
                    <img src="${
  showDetails?.image?.medium
                      ?? 'https://www.freeiconspng.com/uploads/no-image-icon-23.jpg'
}" class="card-img-top" alt="${showDetails?.name}">
                    <div class="card-body">
                        <div class="card-title">
                            <h6>${
  showDetails.name.length <= 14
    ? showDetails?.name ?? 'No name'
    : `${showDetails.name.substr(0, 18)}...`
}</h6>
                            <span class="likeUnit-${showDetails?.id}">
                                <i class="fa fa-heart likeBtn ${showDetails?.likes > 0 ? 'heart-active' : ''}" data-movie-id="${showDetails?.id}" id="likeBtn-${showDetails?.id}"></i> 
                                <span id="likeNum-${showDetails?.id}" class="likeNum" data-movie-id="${showDetails?.id}">${showDetails.likes}</span> 
                                <span id="likeText-${showDetails?.id}" id="likeText">${showDetails?.likes > 1 ? 'Likes' : 'Like'}</span>
                            </span>
                        </div>
                    <button type="button" class="btn btn-primary commentsModalBtn" id="comments-${
  showDetails?.id
}" data-toggle="modal" data-target=".comment-modal-lg" data-movie-id="${
  showDetails?.id
}">Comments</button>
                    </div>
                </div>
            </div>`;

const commentClickEvent = () => {
  const commentsModalBtn = document.querySelectorAll('.commentsModalBtn');
  commentsModalBtn.forEach((button) => {
    const movieID = button.getAttribute('data-movie-id');
    button.addEventListener('click', () => {
      commentsModalHandler(movieID, button);
    });
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
  } else {
    moviesList.insertAdjacentHTML('beforeend', movieBuilder);
    count = Count(Data.fullData);
  }
  
  const domMovieTitles = document.querySelector('.movieTitles');
  domMovieTitles.innerHTML = `Title ${title.toUpperCase()}: TV Shows(${count})`;
  commentClickEvent();
  likeClickEvent();
};

export default ListRender;
