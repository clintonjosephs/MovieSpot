import { addLikesApi } from '../Models/InvolvementService.js';
import StorageManager from '../Models/StorageManager.js';

const addLikes = async (movieID, likeCounter, likeText, likeBtn) => {
  let likeCounterValue = +likeCounter.innerHTML.trim();
  likeCounterValue += 1;
  likeCounter.innerHTML = likeCounterValue.toString();
  likeBtn.classList.add('heart-active');
  StorageManager.storeLikes(movieID);

  const action = await addLikesApi(movieID).catch(() => false);
  if (action) {
    if (likeCounterValue > 1) {
      likeText.innerHTML = 'Likes';
    }
  } else {
    likeCounterValue -= 1;
    likeCounter.innerHTML = likeCounterValue.toString();
    likeBtn.classList.remove('heart-active');
    StorageManager.popLikes(movieID);
  }
};

const likeClickEvent = () => {
  const likeBtns = document.querySelectorAll('.likeBtn[freshLikeBtn="yes"]');
  likeBtns.forEach((button) => {
    const movieID = button.getAttribute('data-movie-id');
    button.addEventListener('click', () => {
      const likeCounter = document.querySelector(`#likeNum-${movieID}`);
      const likeText = document.querySelector(`#likeText-${movieID}`);
      const commentsBtn = document.querySelector(`#comments-${movieID}`);
      const dataLike = StorageManager.checkLike(movieID);
      if (dataLike === undefined) {
        addLikes(movieID, likeCounter, likeText, button);
      } else {
        commentsBtn.click();
      }
    });
    button.removeAttribute('freshLikeBtn');
  });
};

export default likeClickEvent;
