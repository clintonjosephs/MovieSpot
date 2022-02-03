const BaseUrl = 'https://api.tvmaze.com/';
const contentType = { 'content-type': 'application/json' };
const searchEndPoint = 'search/shows';
const getMoviesEndPoint = 'shows';
const involvmentApiEndPoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/EfW4baGDbzq78AaqqcR8/';

const dateFormatter = (date) => {
  const d = new Date(date);
  return d.toDateString();
};
export {
  BaseUrl,
  contentType,
  getMoviesEndPoint,
  searchEndPoint,
  involvmentApiEndPoint,
  dateFormatter,
};
