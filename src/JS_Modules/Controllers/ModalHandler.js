import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.js';
import { getMoviePopupDetails } from '../Models/Services.js';

const presentModalData = (modalData) => `   <div class="row">
    <div class="col-md-4">
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
  modalData.url
}" target="_blank" type="button" class="btn modalBtn">
        Download &nbsp <i class="fa fa-download"></i>
      </a>
    </div>
    <div class="col-md-8 mt-2">
      <h3>${modalData.name}</h3>
      <div class="row mt-2">
        <div class="col-md-8">
          Genre: <b>${modalData.genres.toString()} </b>
        </div>
        <div class="col-md-4">Year: <b> ${modalData.premiered.substring(
    0,
    4,
  )}  </b></div>
      </div>

      <div class="row mt-2">
        <div class="col-md-12">
          Summary:
          ${modalData?.summary.substr(0, 200) ?? 'No Summary'} 
        
        </div> 
      </div>

      <div class="row mt-4">
        <div class="col-md-8">Language: <b>${modalData.language} </b></div>
        <div class="col-md-4">Rating: <b> ${
  modalData.rating?.average ?? 'N/A'
} </b></div>
      </div>

      <div class="row mt-2">
        <div class="col-md-12">Premeired: <b>${modalData.premiered} </b></div>
      </div>
    </div>
  </div>`;

const commentsModalHandler = async (movieID) => {
  const getData = await getMoviePopupDetails(movieID);
  const modalBody = presentModalData(getData);
  const commentsModalHTML = document.querySelector('.comments_modal');
  const modalBodyGet = document.querySelector('.movie-data');
  modalBodyGet.innerHTML = '';
  modalBodyGet.insertAdjacentHTML('afterbegin', modalBody);
  const commentsModal = new Modal(commentsModalHTML);
  commentsModal.show();
};

export default commentsModalHandler;
