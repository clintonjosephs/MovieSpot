import { getMovies } from "../Models/Services";
import ListRender from "./ListRender";
import { searchSpinners } from "./SpinnersHandler";

const searchBar = async (searchForm) => {
    if (searchForm[0].value.trim().length > 0) {
        searchSpinners(true);

        const movieTitle = searchForm[0].value.trim();
        const moviesFetch = await getMovies(movieTitle);

        ListRender(moviesFetch);
        searchSpinners(false);

    } else {
        searchForm.reset();
    }
};

export default searchBar;