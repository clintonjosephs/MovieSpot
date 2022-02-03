import { getLikesApi } from "./InvolvementService.js";
import { BaseUrl, getMoviesEndPoint, searchEndPoint } from "./Utils.js";

const mapGetLikesApi = async (response) => {
  const apiLikes = await getLikesApi();
  let responseArray = await response;
  responseArray.map((movie) => {
    apiLikes.find((like) => {
      if (like.item_id.toString() === movie.id.toString()) {
        movie["likes"] = like.likes;
      }
    });
  });

  return responseArray;
};
const getMovies = async (page = "page=0") => {
  const response = await fetch(`${BaseUrl}${getMoviesEndPoint}?${page}`);
  const value = await response.json();
  return mapGetLikesApi(value);
};

const searchMovies = async (title) => {
  const response = await fetch(`${BaseUrl}${searchEndPoint}?q=${title}`);
  const value = await response.json();
  value.map((val, i) => {
    const extractValue = {...val["show"]};
    delete val["score"];
    delete val["show"];
    value[i] = {...extractValue};
  });
  return mapGetLikesApi(value, true);
};

const getMoviePopupDetails = async (movieID) => {
  const response = await fetch(`${BaseUrl}${getMoviesEndPoint}/${movieID}`);
  return response.json();
};

export { getMoviePopupDetails, getMovies, searchMovies };
