import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.js';
import { getMoviePopupDetails } from '../Models/Services.js';
import { dateFormatter } from '../Models/Utils.js';
import { getComments } from './CommentManager.js';
import { loadingSpinners } from './SpinnersHandler.js';

const presentModalData = (modalData) => `<div class="col-md-4">
      <div id="movieID" hidden>${modalData.id}</div>
      <img
        src="${
  modalData.image?.medium
          ?? 'https://www.freeiconspng.com/uploads/no-image-icon-23.jpg'
}"
        alt="${modalData.name}"
        class="modal-img"
      />
      <br />
      <a href="${
  modalData?.url ?? '#'
}" target="_blank" type="button" class="btn modalBtn">
        Download &nbsp <i class="fa fa-download"></i>
      </a>
    </div>
    <div class="col-md-8 mt-2">
      <h3>${modalData.name}</h3>
      <div class="row mt-2">
        <div class="col-md-8">
          Genre: <b>${modalData?.genres.toString() ?? 'N/A'} </b>
        </div>
        <div class="col-md-4">Year: <b> ${modalData.premiered?.substring(0, 4) ?? 'N/A'}  </b></div>
      </div>

      <div class="row mt-2">
        <div class="col-md-12">
          Summary:
          ${modalData.summary?.substr(0, 200) ?? 'N/A'} 
        
        </div> 
      </div>

      <div class="row mt-4">
        <div class="col-md-8">Language: <b>${
  modalData?.language ?? 'N/A'
} </b></div>
        <div class="col-md-4">Rating: <b> ${
  modalData.rating?.average ?? 'N/A'
} </b></div>
      </div>

      <div class="row mt-2">
        <div class="col-md-12">Premeired: <b>${modalData?.premiered ? dateFormatter(modalData.premiered) : 'N/A'} </b></div>
      </div>
    </div>`;

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

  getComments(movieID);
  button.innerHTML = 'Comments';
  button.disabled = false;
};

export default commentsModalHandler;
