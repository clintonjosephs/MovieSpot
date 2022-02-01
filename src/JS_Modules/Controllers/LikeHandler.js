import { addLikesApi } from '../Models/InvolvementService.js';

const addLikes = async (movieID, likeCounter, likeText) => {
  const action = await addLikesApi(movieID);
  let likeCounterValue = +likeCounter.innerHTML.trim();
  if (action) {
    likeCounterValue+=1;
    likeCounter.innerHTML = likeCounterValue.toString();
    if (likeCounterValue > 1) {
      likeText.innerHTML = 'Likes';
    }
  }
};

export default addLikes;
