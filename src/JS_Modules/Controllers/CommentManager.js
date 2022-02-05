import { sendComment, retriveComments } from '../Models/InvolvementService.js';
import { loadingSpinners } from './SpinnersHandler.js';
import { dateFormatter } from '../Models/Utils.js';
import commentsModalHandler from './ModalHandler.js';
import Count from './Count.js';

const presentComments = (commentsData) => {
  let markUp = '';
  commentsData
    .slice()
    .reverse()
    .forEach((element) => {
      markUp += `<li> <i class="fa fa-calendar">&nbsp</i> ${dateFormatter(
        element.creation_date,
      )} <p> ${element.username}: ${element.comment} </li>`;
    });
  return markUp;
};

const presentCount = (count) => {
  const commentCount = document.querySelector('.commentSection h5');
  commentCount.innerHTML = `Comments(${count})`;
};

const getComments = async (movieID) => {
  const listBody = document.querySelector('.listComments');
  const comments = await retriveComments(movieID);

  presentCount(0);
  if (comments.length) {
    const commentsBody = presentComments(comments);

    listBody.innerHTML = commentsBody;
    presentCount(Count(comments));
  } else {
    listBody.innerHTML = '<p style="text-align: center"> no comment yet</p>';
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


const commentClickEvent = () => {
  const commentsModalBtn = document.querySelectorAll('.commentsModalBtn[freshCommentBtn = "yes"]');
  console.log(commentsModalBtn.length, 'comments');

  commentsModalBtn.forEach((button) => {
    const movieID = button.getAttribute('data-movie-id');
    button.addEventListener('click', () => {
      commentsModalHandler(movieID, button);
    });
    button.removeAttribute("freshCommentBtn");
  });
};


export { addShareEvent, getComments, commentClickEvent };
