import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.js';

const commentsModalHandler = () => {
  // add movieID to FUNCTION PARAMETER
  const commentsModalHTML = document.querySelector('.comments_modal');
  const commentsModal = new Modal(commentsModalHTML);
  commentsModal.show();
};

export default commentsModalHandler;
