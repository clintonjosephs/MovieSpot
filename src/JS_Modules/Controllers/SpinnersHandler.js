const overlayHandler = (toogle = false) => {
  const spinner = document.querySelector('.loader');
  if (toogle === false) {
    spinner.style.visibility = 'hidden';
  } else {
    spinner.style.visibility = 'visible';
  }
};

const searchSpinners = (toogle = false) => {
  const spinner = document.querySelector('.search-spinner');
  const searchIcon = document.querySelector('.fa-search');
  if (toogle === false) {
    spinner.classList.remove('show');
    spinner.classList.add('hide');
    searchIcon.classList.remove('hide');
    searchIcon.classList.add('show');
  } else {
    spinner.classList.remove('hide');
    spinner.classList.add('show');
    searchIcon.classList.remove('show');
    searchIcon.classList.add('hide');
  }
};

const loadingSpinners = () => {

};

export { overlayHandler, loadingSpinners, searchSpinners };