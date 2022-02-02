const BaseUrl = 'https://api.tvmaze.com/';
const contentType = { 'content-type': 'application/json' };
const getMoviesEndPoint = 'search/shows';
const getSingleMovieEndPoint = 'shows/';
const involvmentApiEndPoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/EfW4baGDbzq78AaqqcR8/';

const dateFormatter = (date) => {
  const d = new Date(date);
  return d.toDateString();
};
export {
  BaseUrl,
  contentType,
  getMoviesEndPoint,
  getSingleMovieEndPoint,
  involvmentApiEndPoint,
  dateFormatter,
};
