import Data from './Data.js';
import { getLikesApi } from './InvolvementService.js';
import { BaseUrl, getMoviesEndPoint, searchEndPoint } from './Utils.js';

const mapGetLikesApi = async (response) => {
  const apiLikes = await getLikesApi();
  const responseArray = await response;
  responseArray.map((movie) => apiLikes.find((like) => {
    if (like.item_id.toString() === movie.id.toString()) {
      movie.likes = like.likes;
    } else {
      movie.likes = 0;
    }
    return movie.likes;
  }));
  return responseArray;
};

const pushDisplay = () => {
  const returnValue = Data.allData[Data.start];
  Data.start += 1;
  return returnValue;
};

const getMovies = async (page = 'page=1') => {
  const response = await fetch(`${BaseUrl}${getMoviesEndPoint}?${page}`);
  const value = await response.json();
  const modifyValue = await mapGetLikesApi(value);
  Data.chunkArray(modifyValue, 40);
  return pushDisplay();
};

const searchMovies = async (title) => {
  const response = await fetch(`${BaseUrl}${searchEndPoint}?q=${title}`);
  const value = await response.json();
  value.map((val, i) => {
    const extractValue = { ...val.show };
    delete val.score;
    delete val.show;
    value[i] = { ...extractValue };
    return value[i];
  });
  return mapGetLikesApi(value, true);
};

const getMoviePopupDetails = async (movieID) => {
  const response = await fetch(`${BaseUrl}${getMoviesEndPoint}/${movieID}`);
  return response.json();
};

export {
  getMoviePopupDetails, getMovies, searchMovies, pushDisplay,
};
