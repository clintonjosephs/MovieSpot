import { BaseUrl, getMoviesEndPoint, contentType } from './Utils.js';


const getMovies = async (query = "a") => {
    const response = await fetch(`${BaseUrl}${getMoviesEndPoint}?q=${query}`);
    return response.json();
};

export { getMovies };