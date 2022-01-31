import { getMovies } from "../Models/Services";

const MoviesListManager = async () => {
    const items = ['a', 'b', 'c', 'd', 'e'];
    const index = Math.floor(Math.random() * 4);

    const moviesFetch = await getMovies(items[index]);
    const moviesData = buildMovieList(moviesFetch);
    const moviesList = document.querySelector(".movies-list");
    moviesList.innerHTML = moviesData;
}

const buildMovieList = (moviesFetch) => {
    let movieBuilder = '<li class="row">';
    moviesFetch.forEach((movie, index) => {
        movieBuilder += movieItems(movie.show);
        if ((index + 1) % 3 === 0) {
            movieBuilder += '</li><li class="row">';
        }
    });
    movieBuilder += '</li>';
    return movieBuilder;
}

const movieItems = (showDetails) => {
    return `<div class="col-md-4 ">
                <div class="card my-3">
                    <img src="${showDetails?.image?.medium ?? 'https://www.freeiconspng.com/uploads/no-image-icon-23.jpg'}" class="card-img-top" alt="${showDetails?.name}">
                    <div class="card-body">
                        <div class="card-title">
                            <h6>${showDetails.name.length <= 14 ? showDetails?.name ?? "No name" : showDetails.name.substr(0,18)+"..." }</h6>
                            <span>
                                <i class="fa fa-thumbs-up"></i> &nbsp; 8 Likes
                            </span>
                        </div>
                    <button type="button" class="btn btn-primary commentsModalBtn" data-toggle="modal" data-target=".comment-modal-lg" data-movie-id="${showDetails?.externals?.tvrage}">Comments</button>
                    </div>
                </div>
            </div>`;
}

export default MoviesListManager;