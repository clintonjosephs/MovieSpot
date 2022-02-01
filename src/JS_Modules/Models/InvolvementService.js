import { involvmentApiEndPoint, contentType } from './Utils.js';

const sendComment = async (movieID, name, commentt) => {
  //   console.log(movieID, name, comment);
  const response = await fetch(`${involvmentApiEndPoint}comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: movieID,
      username: name,
      comment: commentt,
    }),
  });

  return response.ok;
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

export { getLikesApi, addLikesApi, sendComment };
