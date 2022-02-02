import { sendComment, retriveComments } from '../Models/InvolvementService.js';
import { loadingSpinners } from './SpinnersHandler.js';

const presentComments = (commentsData) => {
  let markUp = '';
  commentsData.forEach((element) => {
    markUp += `<li> <i class="fa fa-calendar">&nbsp</i> ${element.creation_date} <p> ${element.username}: ${element.comment}</li>`;
  });
  return markUp;
};

const getComments = async (movieID) => {
  const listBody = document.querySelector('.listComments');
  const comments = await retriveComments(movieID);

  if (comments.length) {
    const commentsBody = presentComments(comments);

    listBody.innerHTML = commentsBody;
  } else {
    listBody.innerHTML = '<p> no comment yet</p>';
  }
};

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
      await sendComment(movieID, name, comment);
      commentForm.reset();
      submitBtn.innerHTML = '<i class="fa fa-share"></i> Share';
    }

    getComments(movieID);
  });
};

export { addShareEvent, getComments };
