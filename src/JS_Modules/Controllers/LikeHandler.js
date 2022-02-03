import { addLikesApi } from '../Models/InvolvementService.js';
import StorageManager from '../Models/StorageManager.js';

const addLikes = async (movieID, likeCounter, likeText, likeBtn) => {
  let likeCounterValue = +likeCounter.innerHTML.trim();
  likeCounterValue += 1;
  likeCounter.innerHTML = likeCounterValue.toString();
  likeBtn.classList.add('heart-active');

  const action = await addLikesApi(movieID);
  if (action) {
    StorageManager.storeLikes(movieID);
    if (likeCounterValue > 1) {
      likeText.innerHTML = 'Likes';
    }
  } else {
    likeCounterValue -= 1;
    likeCounter.innerHTML = likeCounterValue.toString();
    likeBtn.classList.remove('heart-active');
  }
};

export default addLikes;
