/* eslint-disable import/prefer-default-export */

import { BaseUrl, getMoviesEndPoint } from './Utils.js';

const getMovies = async (query = 'a') => {
  const response = await fetch(`${BaseUrl}${getMoviesEndPoint}?q=${query}`);
  return response.json();
};

export { getMovies };