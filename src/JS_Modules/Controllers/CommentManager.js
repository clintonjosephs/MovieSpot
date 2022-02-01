import { sendComment } from '../Models/InvolvementService.js';

const addShareEvent = () => {
  const commentForm = document.getElementById('form');
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const movieID = document.getElementById('movieID').innerHTML;
    const name = commentForm[0].value;
    const comment = commentForm[1].value;
    commentForm.reset();

    sendComment(movieID, name, comment);
  });
};

export default addShareEvent;
