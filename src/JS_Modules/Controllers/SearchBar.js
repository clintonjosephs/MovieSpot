import { getMovies } from "../Models/Services";
import ListRender from "./ListRender";

const searchBar = async (searchForm) => {
    if (searchForm[0].value.trim().length > 0) {
        const movieTitle = searchForm[0].value.trim();
        const moviesFetch = await getMovies(movieTitle);
        ListRender(moviesFetch);
    }
};

export default searchBar;