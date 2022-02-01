import { involvmentApiEndPoint } from './Utils.js';

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
  console.log(response.text());
  return response.ok;
};
export default sendComment;
