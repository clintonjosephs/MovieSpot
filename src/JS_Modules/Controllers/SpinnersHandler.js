const overlayHandler = (toogle = false) => {
    const spinner = document.querySelector('.loader');
    if (toogle === false) {
        spinner.style.visibility = "hidden";
    } else {
        spinner.style.visibility = "visible";
    }
}

const loadingSpinners = () => {

}

export { overlayHandler , loadingSpinners };