import { sendComment } from '../Models/InvolvementService.js';
import { loadingSpinners } from './SpinnersHandler.js';

const addShareEvent = () => {
  const commentForm = document.getElementById('form');
  commentForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const movieID = document.getElementById('movieID').innerHTML;
    const name = commentForm[0].value;
    const comment = commentForm[1].value;
    if (name.trim().length > 0 && comment.trim().length > 0) {
      const submitBtn = document.querySelector('#addComment');
      submitBtn.innerHTML = loadingSpinners();
      await sendComment(movieID, name, comment, commentForm);
      commentForm.reset();
      submitBtn.innerHTML = '<i class="fa fa-share"></i> Share';
    }
  });
};

export default addShareEvent;
