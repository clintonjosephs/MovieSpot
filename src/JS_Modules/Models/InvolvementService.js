import { involvmentApiEndPoint, contentType } from './Utils.js';

const sendComment = async (movieID, name, comment) => {
  const response = await fetch(`${involvmentApiEndPoint}comments`, {
    method: 'POST',
    headers: contentType,
    body: JSON.stringify({
      item_id: movieID,
      username: name,
      comment,
    }),
  });

  return response.ok;
};

const retriveComments = async (movieID) => {
  const response = await fetch(
    `${involvmentApiEndPoint}comments?item_id=${movieID}`,
  );

  return response.json();
};

const getLikesApi = async () => {
  const response = await fetch(`${involvmentApiEndPoint}likes`);
  return response.json();
};

const addLikesApi = async (movieID) => {
  const response = await fetch(`${involvmentApiEndPoint}likes`, {
    method: 'POST',
    headers: contentType,
    body: JSON.stringify({ item_id: movieID }),
  });
  return response.ok;
};

export {
  getLikesApi, addLikesApi, sendComment, retriveComments
};
