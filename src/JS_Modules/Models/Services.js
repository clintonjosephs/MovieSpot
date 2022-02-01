
import { BaseUrl, getMoviesEndPoint, getSingleMovieEndPoint } from './Utils.js';

const getMovies = async (query = 'a') => {
  const response = await fetch(`${BaseUrl}${getMoviesEndPoint}?q=${query}`);
  return response.json();
};

const getMoviePopupDetails = async (movieID) => {
console.log(`${BaseUrl}${getSingleMovieEndPoint}${movieID}`);
  const response = await fetch(`${BaseUrl}${getSingleMovieEndPoint}${movieID}`);
  return response.json();
};

export { getMoviePopupDetails, getMovies };

