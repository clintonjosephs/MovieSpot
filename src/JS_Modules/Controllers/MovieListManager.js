import { getMovies } from "../Models/Services";
import ListRender from "./ListRender";
import { overlayHandler } from "./SpinnersHandler";

const MoviesListManager = async () => {
    overlayHandler(true);
    const items = ['a', 'b', 'c', 'd', 'e'];
    const index = Math.floor(Math.random() * 4);
    const moviesFetch = await getMovies(items[index]);
    ListRender(moviesFetch);
    overlayHandler(false);
}

export default MoviesListManager;