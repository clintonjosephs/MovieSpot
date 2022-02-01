import sendComment from '../Models/InvolvementService.js';

const addShareEvent = () => {
  const commentForm = document.getElementById('form');
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const movieID = document.getElementById('movieID').innerHTML;
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';

    sendComment(movieID, name, comment);
  });
};

export default addShareEvent;
