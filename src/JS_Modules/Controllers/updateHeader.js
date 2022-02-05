const updateHeader = (title, count) => {
  const domMovieTitles = document.querySelector('.movieTitles');
  domMovieTitles.innerHTML = `${title.toUpperCase()}: TV Shows(${count})`;
}

export default updateHeader;