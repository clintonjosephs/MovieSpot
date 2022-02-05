import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.js';
import { getMoviePopupDetails } from '../Models/Services.js';
import presentModalData from './ModalBody.js';
import { loadingSpinners } from './SpinnersHandler.js';

const commentsModalHandler = async (movieID, button) => {
  button.innerHTML = loadingSpinners();
  button.disabled = true;
  const getData = await getMoviePopupDetails(movieID);

  const modalBody = presentModalData(getData);
  const commentsModalHTML = document.querySelector('.comments_modal');
  const modalBodyGet = document.querySelector('.movie-data');
  modalBodyGet.innerHTML = '';
  modalBodyGet.insertAdjacentHTML('afterbegin', modalBody);
  const commentsModal = new Modal(commentsModalHTML);
  commentsModal.show();
  // Clear out comment section before loading new comment
  const listBody = document.querySelector('.listComments');
  listBody.innerHTML = '';
  button.innerHTML = 'Comments';
  button.disabled = false;
};

export default commentsModalHandler;
