import { addLikesApi } from "../Models/InvolvementService";

const addLikes = async (movieID, likeCounter, likeText) => {
    const action = await addLikesApi(movieID);
    let likeCounterValue = +likeCounter.innerHTML.trim();
    if (action) {
        likeCounterValue++;
        likeCounter.innerHTML = likeCounterValue.toString();
        if (likeCounterValue > 1) {
            likeText.innerHTML = "Likes"
        }
    }
}

export { addLikes }
