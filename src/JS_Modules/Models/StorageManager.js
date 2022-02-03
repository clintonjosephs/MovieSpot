export default class StorageManager {
    static storeLikes = (movieID) => {
      const likeData = getData();
      likeData.push(movieID);
      localStorage.setItem('Likes', movieID);
    }

    static getData = () => (localStorage.getItem('Likes') ? localStorage.getItem('Likes') : []);
}
