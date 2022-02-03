import { BaseUrl, getMoviesEndPoint, searchEndPoint } from './Utils.js';

const getMovies = async (page = 'page=0') => {
  const response = await fetch(`${BaseUrl}${getMoviesEndPoint}?${page}`);
  return response.json();
};

const searchMovies = async (title) => {
  const response = await fetch(`${BaseUrl}${searchEndPoint}?q=${title}`);
  return response.json();
};

const getMoviePopupDetails = async (movieID) => {
  const response = await fetch(`${BaseUrl}${getMoviesEndPoint}/${movieID}`);
  return response.json();
};

export { getMoviePopupDetails, getMovies, searchMovies };
