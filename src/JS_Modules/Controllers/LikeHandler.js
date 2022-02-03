import { addLikesApi, getLikesApi } from '../Models/InvolvementService.js';
import StorageManager from '../Models/StorageManager.js';

const addLikes = async (movieID, likeCounter, likeText) => {
  let likeCounterValue = +likeCounter.innerHTML.trim();
  likeCounterValue += 1;
  likeCounter.innerHTML = likeCounterValue.toString();

  const action = await addLikesApi(movieID);
  if (action) {
    StorageManager.storeLikes(movieID);
    if (likeCounterValue > 1) {
      likeText.innerHTML = 'Likes';
    }
  } else {
    likeCounterValue -= 1;
    likeCounter.innerHTML = likeCounterValue.toString();
  }
};

const getAllLikes = async (movieId) => {
  const result = await getLikesApi();
  const { likes } = await result.find((item) => item.item_id === movieId) ?? { likes: 0 };
  return likes;
};

const updateLikes = async (likeNum, likeText, movieId) => {
  const pickLikes = await getAllLikes(movieId);
  likeNum.innerHTML = pickLikes.toString();
  const response = pickLikes > 1 ? likeText.innerHTML = 'Likes' : likeText.innerHTML = 'Like';
  return response;
};

export { addLikes, updateLikes };
