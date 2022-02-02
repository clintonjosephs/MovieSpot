import { sendComment, retriveComments } from '../Models/InvolvementService.js';

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
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const movieID = document.getElementById('movieID').innerHTML;
    const name = commentForm[0].value;
    const comment = commentForm[1].value;
    commentForm.reset();

    sendComment(movieID, name, comment);
    getComments(movieID);
  });
};

export { addShareEvent, getComments };
