import { BaseUrl, getSingleMovieEndPoint } from './Utils.js';

const getMoviePopupDetails = async (movieID) => {
  const response = await fetch(`${BaseUrl}${getSingleMovieEndPoint}${movieID}`);
  return response.json();
};

export default getMoviePopupDetails;
