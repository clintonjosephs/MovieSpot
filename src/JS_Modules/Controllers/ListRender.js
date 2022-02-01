import commentsModalHandler from './ModalHandler.js';

const movieItems = (showDetails) => `<div class="col-md-4 ">
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
                            <span>
                                <i class="fa fa-thumbs-up"></i> &nbsp; <span id="likeNum">0</span> Likes
                            </span>
                        </div>
                    <button type="button" class="btn btn-primary commentsModalBtn" data-toggle="modal" data-target=".comment-modal-lg" data-movie-id="${
  showDetails?.id
}">Comments</button>
                    </div>
                </div>
            </div>`;

const commentClickEvent = () => {
  const commentsModalBtn = document.querySelectorAll('.commentsModalBtn');
  commentsModalBtn.forEach((button) => {
    const moveID = button.getAttribute('data-movie-id');
    button.addEventListener('click', () => {
      commentsModalHandler(moveID, button);
    });
  });
};

const ListRender = (moviesFetch) => {
  let movieBuilder = '<li class="row">';
  moviesFetch.forEach((movie, index) => {
    movieBuilder += movieItems(movie.show);
    if ((index + 1) % 3 === 0) {
      movieBuilder += '</li><li class="row">';
    }
  });
  movieBuilder += '</li>';
  const moviesList = document.querySelector('.movies-list');
  moviesList.innerHTML = movieBuilder;
  commentClickEvent();
};

export default ListRender;
