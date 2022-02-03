export default class StorageManager {
  static storeLikes = (movieID) => {
    const likeData = StorageManager.getData();
    likeData.push(movieID);
    localStorage.setItem('Likes', JSON.stringify(likeData));
  };

  static getData = () => (localStorage.getItem('Likes')
    ? JSON.parse(localStorage.getItem('Likes'))
    : []);

  static checkLike = (movieID) => StorageManager.getData().find((item) => item === movieID);
}
