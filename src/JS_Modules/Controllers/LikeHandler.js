import { addLikesApi, getLikesApi } from '../Models/InvolvementService.js';

const addLikes = async (movieID, likeCounter, likeText) => {
  const action = await addLikesApi(movieID);
  let likeCounterValue = +likeCounter.innerHTML.trim();
  if (action) {
    likeCounterValue += 1;
    likeCounter.innerHTML = likeCounterValue.toString();
    if (likeCounterValue > 1) {
      likeText.innerHTML = 'Likes';
    }
  }
};

const getAllLikes = async (movieId) => {
    const result = await getLikesApi();
    const { likes } = await result.find((item) => item.item_id === movieId) ?? { likes: 0 };
    return likes;
}

const updateLikes = async (likeNum, likeText, movieId) => {
    const pickLikes = await getAllLikes(movieId);
    likeNum.innerHTML = pickLikes.toString();
    return pickLikes > 1 ? likeText.innerHTML = "Likes" : likeText.innerHTML = "Like";
}

export { addLikes, updateLikes };
