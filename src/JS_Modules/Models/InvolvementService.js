import { involvmentApiEndPoint, contentType } from "./Utils.js";

const getLikesApi = async () => {
  const response = await fetch(`${involvmentApiEndPoint}likes`);
  return response.json();
};

const addLikesApi = async (movieID) => {
  const response = await fetch(`${involvmentApiEndPoint}likes`, {
    method: "POST",
    headers: contentType,
    body: JSON.stringify({"item_id": movieID})
  });
  return response.ok;
};

export { getLikesApi, addLikesApi };
